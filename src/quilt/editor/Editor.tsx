/** The Quilt editor: top bar, tool rail, panels, canvas, inspector. Owns history and the selection. */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, Undo2, Redo2, Monitor, Tablet, Smartphone, Eye, Download, Plus, LayoutTemplate, Image as ImageIcon, Palette, Sparkles, Layers, Files, Play, Minus, Search, ChevronDown, Package, Command } from "lucide-react";
import type { Device, El, QuiltDoc, Section } from "../model";
import { DEVICE_WIDTH, uid } from "../model";
import { siteCss, pageCss } from "../render";
import { mapSection, mapElements, addElements, removeElements, duplicateElements, restack, setFrames } from "../ops";
import { rearrange } from "../library/recipes";
import { stock } from "../library/media";
import { putAsset, getAsset, assetRefs } from "../storage";
import { exportSite, exportProject } from "../export";
import { sceneDocument } from "../../scenes/document";
import type { SceneId } from "../../scenes/catalog";
import type { RenderCtx } from "../util";
import { QuiltContext, type QuiltApi, type Panel, type Selection } from "./context";
import Canvas, { designScale } from "./Canvas";
import Inspector from "./Inspector";
import { PANELS, ALL_ITEMS, place } from "./panels";
import CommandBar from "./CommandBar";
import Preview from "./Preview";

const RAIL: { id: Panel; label: string; icon: React.ReactNode }[] = [
  { id: "add", label: "Add", icon: <Plus size={20} /> },
  { id: "sections", label: "Sections", icon: <LayoutTemplate size={20} /> },
  { id: "photos", label: "Photos", icon: <ImageIcon size={20} /> },
  { id: "style", label: "Style", icon: <Palette size={20} /> },
  { id: "living", label: "Living", icon: <Sparkles size={20} /> },
  { id: "layers", label: "Layers", icon: <Layers size={20} /> },
  { id: "pages", label: "Pages", icon: <Files size={20} /> },
];

/** Scene pages for the editor: the bare living scene, from the studio's own files. */
const sceneUrls = new Map<string, string>();
function sceneUrl(id: string) {
  if (!sceneUrls.has(id)) sceneUrls.set(id, URL.createObjectURL(new Blob([sceneDocument(id as SceneId, { text: false }, `${location.origin}/scenes/`)], { type: "text/html" })));
  return sceneUrls.get(id)!;
}

/** Spirits need their scripts on the page that shows them. */
let palsLoading: Promise<void> | null = null;
function loadPals() {
  return (palsLoading ??= ["/spirits/kit.js", "/spirits/pals.js"].reduce<Promise<void>>((p, src) => p.then(() => new Promise<void>((ok) => {
    if (document.querySelector(`script[src="${src}"]`)) return ok();
    const s = Object.assign(document.createElement("script"), { src });
    s.onload = s.onerror = () => ok();
    document.head.append(s);
  })), Promise.resolve()));
}

interface Props {
  initial: QuiltDoc;
  onSave: (doc: QuiltDoc) => Promise<void>;
  onExit: () => void;
  status: string;
}

export default function Editor({ initial, onSave, onExit, status }: Props) {
  const [doc, setDoc] = useState(initial);
  const [pageId, setPageId] = useState(initial.pages[0].id);
  const [sel, setSel] = useState<Selection>({ section: null, ids: [] });
  const [device, setDevice] = useState<Device>("desktop");
  const [zoom, setZoom] = useState(0.7);
  const [fit, setFit] = useState(true);
  const [panel, setPanel] = useState<Panel | null>("sections");
  const [insertAt, setInsertAt] = useState<number | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [playing, setPlaying] = useState(false);
  const [toastMsg, setToastMsg] = useState("");
  const [command, setCommand] = useState(false);
  const [preview, setPreview] = useState(false);
  const [exportOpen, setExportOpen] = useState(false);
  const [busy, setBusy] = useState("");
  const [urls, setUrls] = useState<Record<string, string>>({});
  const [, setTick] = useState(0);
  const past = useRef<QuiltDoc[]>([]), future = useRef<QuiltDoc[]>([]);
  const lastMerge = useRef<{ key: string; at: number } | null>(null);
  const snapshot = useRef<QuiltDoc | null>(null);
  const docRef = useRef(doc);
  docRef.current = doc;
  const centre = useRef<HTMLDivElement>(null);
  const clip = useRef<El[] | null>(null);
  const page = doc.pages.find((p) => p.id === pageId) ?? doc.pages[0];

  // Autosave a moment after every change.
  useEffect(() => {
    if (doc === initial) return;
    const t = setTimeout(() => void onSave({ ...doc, updatedAt: Date.now() }), 500);
    return () => clearTimeout(t);
  }, [doc, initial, onSave]);

  // Uploaded files → object URLs for the canvas (never saved).
  useEffect(() => {
    let gone = false;
    const missing = assetRefs(doc).filter((r) => !urls[r]);
    if (!missing.length) return;
    void Promise.all(missing.map(getAsset)).then((list) => {
      if (gone) return;
      const add: Record<string, string> = {};
      list.forEach((a) => a && (add[a.id] = URL.createObjectURL(a.blob)));
      if (Object.keys(add).length) setUrls((u) => ({ ...u, ...add }));
    });
    return () => { gone = true; };
  }, [doc, urls]);

  useEffect(() => {
    if (doc.header?.residents?.length || doc.footer?.residents?.length || doc.pages.some((p) => p.sections.some((s) => s.residents?.length))) void loadPals();
  }, [doc]);

  // Fit the device to the space available.
  useEffect(() => {
    if (!fit || !centre.current) return;
    const el = centre.current;
    const update = () => setZoom(Math.min(1, Math.max(0.25, (el.clientWidth - 72) / DEVICE_WIDTH[device])));
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, [device, fit, panel]);

  useEffect(() => {
    if (!toastMsg) return;
    const t = setTimeout(() => setToastMsg(""), 3600);
    return () => clearTimeout(t);
  }, [toastMsg]);

  const assetUrl = useCallback((src: string) => {
    if (src.startsWith("stock:")) return stock(src.slice(6))?.src ?? "";
    if (src.startsWith("asset:")) return urls[src] ?? "data:image/gif;base64,R0lGODlhAQABAAAAACw=";
    return src;
  }, [urls]);

  const ctx: RenderCtx = useMemo(() => ({ doc, theme: doc.theme, mode: "editor", base: "/", pageId: page.id, asset: assetUrl, scene: sceneUrl, page: (id) => `#page-${id}` }), [doc, page.id, assetUrl]);
  const css = useMemo(() => siteCss(doc, ctx) + pageCss(doc, page, ctx), [doc, page, ctx]);

  // ── History ──
  const commit = useCallback((next: QuiltDoc, mergeKey?: string) => {
    const now = Date.now();
    const merge = mergeKey && lastMerge.current?.key === mergeKey && now - lastMerge.current.at < 1200;
    if (!merge) { past.current.push(docRef.current); if (past.current.length > 150) past.current.shift(); }
    future.current = [];
    lastMerge.current = mergeKey ? { key: mergeKey, at: now } : null;
    setDoc(next);
  }, []);
  const transient = useCallback((next: QuiltDoc) => setDoc(next), []);
  const begin = useCallback(() => { snapshot.current = docRef.current; }, []);
  const end = useCallback(() => {
    if (snapshot.current && snapshot.current !== docRef.current) { past.current.push(snapshot.current); future.current = []; lastMerge.current = null; setTick((t) => t + 1); }
    snapshot.current = null;
  }, []);
  const undo = useCallback(() => {
    const prev = past.current.pop();
    if (!prev) return;
    future.current.push(docRef.current);
    setDoc(prev);
    setEditing(null);
  }, []);
  const redo = useCallback(() => {
    const next = future.current.pop();
    if (!next) return;
    past.current.push(docRef.current);
    setDoc(next);
  }, []);

  // Selection can point at things that no longer exist after undo.
  useEffect(() => {
    if (!sel.section) return;
    const all = [...(doc.header ? [doc.header] : []), ...page.sections, ...(doc.footer ? [doc.footer] : [])];
    const s = all.find((x) => x.id === sel.section);
    if (!s) setSel({ section: null, ids: [] });
    else if (sel.ids.some((id) => !s.elements.some((e) => e.id === id))) setSel({ section: s.id, ids: sel.ids.filter((id) => s.elements.some((e) => e.id === id)) });
  }, [doc, page, sel]);

  const section = useCallback((): Section | undefined => {
    const d = docRef.current;
    if (!sel.section) return undefined;
    return [d.header, d.footer, ...d.pages.flatMap((p) => p.sections)].find((s) => s?.id === sel.section) ?? undefined;
  }, [sel.section]);
  const selected = useCallback(() => section()?.elements.filter((e) => sel.ids.includes(e.id)) ?? [], [section, sel.ids]);

  const api: QuiltApi = {
    doc, page, sel, device, zoom, ctx, editing, playing, panel, insertAt,
    setSel: (s) => { setSel(s); if (editing && !s.ids.includes(editing)) setEditing(null); },
    setEditing, setPanel, setInsertAt,
    setPage: (id) => { setPageId(id); setSel({ section: null, ids: [] }); centre.current?.querySelector(".qe-stage")?.scrollTo({ top: 0 }); },
    setDevice,
    commit, transient, begin, end, undo, redo,
    canUndo: past.current.length > 0, canRedo: future.current.length > 0,
    toast: setToastMsg,
    section, selected,
    patch: (fn, key) => { if (sel.section && sel.ids.length) commit(mapElements(docRef.current, sel.section, sel.ids, fn), key); },
    patchSection: (fn, key) => { if (sel.section) commit(mapSection(docRef.current, sel.section, fn), key); },
    addElement: (el, sectionId) => {
      const list = Array.isArray(el) ? el : [el];
      const target = sectionId ?? sel.section ?? page.sections[0]?.id;
      if (!target) return;
      commit(addElements(docRef.current, target, list));
      setSel({ section: target, ids: list.map((e) => e.id) });
    },
    remove: () => { if (sel.section && sel.ids.length) { commit(removeElements(docRef.current, sel.section, sel.ids)); setSel({ section: sel.section, ids: [] }); } },
    duplicate: () => { if (sel.section && sel.ids.length) { const r = duplicateElements(docRef.current, sel.section, sel.ids); commit(r.doc); setSel({ section: sel.section, ids: r.ids }); } },
    play: () => { setPlaying(false); requestAnimationFrame(() => setPlaying(true)); },
    upload: async (files) => {
      const ids: string[] = [];
      for (const f of Array.from(files)) {
        if (!/^(image\/(png|jpeg|webp|gif|svg\+xml)|video\/(mp4|webm))$/.test(f.type)) { setToastMsg(`${f.name} isn't a picture or video Patchwork can use.`); continue; }
        if (f.size > 40 * 1024 * 1024) { setToastMsg(`${f.name} is over 40 MB. Try a smaller file.`); continue; }
        const id = `asset:${crypto.randomUUID()}`;
        await putAsset({ id, name: f.name.slice(0, 120), type: f.type, blob: f, createdAt: Date.now() });
        setUrls((u) => ({ ...u, [id]: URL.createObjectURL(f) }));
        ids.push(id);
      }
      return ids;
    },
    assetUrl,
    openCommand: () => setCommand(true),
  };

  useEffect(() => {
    if (!playing) return;
    const t = setTimeout(() => setPlaying(false), 3800);
    return () => clearTimeout(t);
  }, [playing]);

  // ── Keyboard ──
  const apiRef = useRef(api);
  apiRef.current = api;
  useEffect(() => {
    const on = (e: KeyboardEvent) => {
      const a = apiRef.current;
      const t = e.target as HTMLElement;
      const typing = t.closest("input, textarea, select, [contenteditable]");
      const mod = e.metaKey || e.ctrlKey;
      if (mod && e.key.toLowerCase() === "k") { e.preventDefault(); setCommand((c) => !c); return; }
      if (typing) return;
      if (mod && e.key.toLowerCase() === "z") { e.preventDefault(); e.shiftKey ? a.redo() : a.undo(); return; }
      if (mod && e.key.toLowerCase() === "y") { e.preventDefault(); a.redo(); return; }
      if (preview || command) return;
      if (mod && e.key.toLowerCase() === "d") { e.preventDefault(); a.duplicate(); return; }
      if (mod && e.key.toLowerCase() === "c" && a.sel.ids.length) { clip.current = a.selected().map((x) => structuredClone(x)); return; }
      if (mod && e.key.toLowerCase() === "v" && clip.current?.length) {
        e.preventDefault();
        const s = a.section() ?? a.page.sections[0];
        if (!s) return;
        const copies = clip.current.map((x) => ({ ...structuredClone(x), id: uid(), slot: undefined, frame: { ...x.frame, y: x.frame.y + 3 } }));
        a.addElement(copies, s.id);
        return;
      }
      if (mod && e.key.toLowerCase() === "a" && a.sel.section) { e.preventDefault(); a.setSel({ section: a.sel.section, ids: a.section()!.elements.filter((x) => !x.locked && !x.hidden).map((x) => x.id) }); return; }
      if (mod && (e.key === "]" || e.key === "[") && a.sel.section && a.sel.ids.length) { e.preventDefault(); a.commit(restack(a.doc, a.sel.section, a.sel.ids, e.key === "]" ? (e.shiftKey ? "front" : "forward") : e.shiftKey ? "bottom" : "back")); return; }
      if ((e.key === "Delete" || e.key === "Backspace") && a.sel.ids.length) { e.preventDefault(); a.remove(); return; }
      if (e.key === "Escape") { if (a.sel.ids.length) a.setSel({ section: a.sel.section, ids: [] }); else a.setSel({ section: null, ids: [] }); return; }
      if (e.key === "Enter" && a.sel.ids.length === 1 && a.selected()[0]?.type === "text") { e.preventDefault(); a.setEditing(a.sel.ids[0]); return; }
      if (e.key.toLowerCase() === "r" && !mod && a.sel.section && !a.sel.ids.length) { a.commit(mapSection(a.doc, a.sel.section, (s) => rearrange(s))); return; }
      if (e.key.startsWith("Arrow") && a.sel.section && a.sel.ids.length) {
        e.preventDefault();
        const step = e.shiftKey ? 8 : 1;
        const d = { ArrowLeft: [-step, 0], ArrowRight: [step, 0], ArrowUp: [0, -step], ArrowDown: [0, step] }[e.key]!;
        const frames = Object.fromEntries(a.selected().filter((x) => !x.locked).map((x) => [x.id, { ...x.frame, x: Math.max(0, Math.min(96 - x.frame.w, x.frame.x + d[0])), y: Math.max(0, x.frame.y + d[1]) }]));
        a.commit(setFrames(a.doc, a.sel.section, frames), "nudge");
      }
    };
    addEventListener("keydown", on);
    return () => removeEventListener("keydown", on);
  }, [preview, command]);

  function onDrop(data: string, sectionId: string, at: { x: number; y: number }) {
    const item = ALL_ITEMS.find((i) => i.key === data);
    const s = [doc.header, doc.footer, ...page.sections].find((x) => x?.id === sectionId);
    if (!item || !s) return;
    api.addElement(place(item.make(), s, at), sectionId);
  }

  async function download(kind: "site" | "project") {
    setExportOpen(false);
    setBusy(kind === "site" ? "Packing your website…" : "Packing your project…");
    try {
      const blob = kind === "site" ? await exportSite(doc) : await exportProject(doc);
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${doc.name.replace(/[^\w-]+/g, "-").replace(/^-|-$/g, "").slice(0, 60) || "site"}${kind === "project" ? ".quilt" : ""}.zip` });
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 4000);
      setToastMsg(kind === "site" ? "Your website is ready. Unzip it and open index.html, or upload the folder anywhere." : "Project saved. Import it on any computer to keep editing.");
    } catch (err) {
      setToastMsg((err as Error).message);
    } finally {
      setBusy("");
    }
  }

  const zoomTo = (z: number) => { setFit(false); setZoom(Math.min(2, Math.max(0.2, z))); };

  return (
    <QuiltContext.Provider value={api}>
      <div className="qe">
        <header className="qe-top">
          <div className="qe-top-l">
            <button type="button" className="qe-icon-btn" onClick={onExit} title="All my sites"><ArrowLeft size={18} /></button>
            <span className="qe-mark" aria-hidden="true"><i /><i /><i /><i /></span>
            <div className="qe-name">
              <input value={doc.name} aria-label="Site name" maxLength={120} onChange={(e) => commit({ ...doc, name: e.target.value }, "name")} />
              <small><i className={status === "Saved" ? "ok" : ""} />{status}</small>
            </div>
          </div>
          <div className="qe-top-c">
            <div className="qe-pagepick">
              <Files size={14} />
              <select value={page.id} onChange={(e) => api.setPage(e.target.value)} aria-label="Page">
                {doc.pages.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
              </select>
              <ChevronDown size={14} />
            </div>
            <div className="qe-devices" role="radiogroup" aria-label="Screen size">
              {([["desktop", <Monitor size={16} />, "Desktop"], ["tablet", <Tablet size={16} />, "Tablet"], ["phone", <Smartphone size={16} />, "Phone"]] as const).map(([d, icon, label]) => (
                <button key={d} type="button" role="radio" aria-checked={device === d} title={label} className={device === d ? "on" : ""} onClick={() => { setDevice(d); setFit(true); }}>{icon}</button>
              ))}
            </div>
            <div className="qe-zoom">
              <button type="button" onClick={() => zoomTo(zoom - 0.1)} aria-label="Zoom out"><Minus size={13} /></button>
              <button type="button" className="qe-zoom-v" onClick={() => setFit(true)} title="Fit to screen">{Math.round(zoom * 100)}%</button>
              <button type="button" onClick={() => zoomTo(zoom + 0.1)} aria-label="Zoom in"><Plus size={13} /></button>
            </div>
          </div>
          <div className="qe-top-r">
            <button type="button" className="qe-cmd" onClick={() => setCommand(true)}><Search size={14} />Do anything<kbd><Command size={11} />K</kbd></button>
            <button type="button" className="qe-icon-btn" onClick={undo} disabled={!past.current.length} title="Undo (Ctrl+Z)"><Undo2 size={17} /></button>
            <button type="button" className="qe-icon-btn" onClick={redo} disabled={!future.current.length} title="Redo (Ctrl+Shift+Z)"><Redo2 size={17} /></button>
            <button type="button" className="qe-ghost" onClick={api.play} title="Play every entrance animation"><Play size={15} />Play</button>
            <button type="button" className="qe-ghost" onClick={() => setPreview(true)}><Eye size={15} />Preview</button>
            <div className="qe-export">
              <button type="button" className="qe-primary" onClick={() => setExportOpen(!exportOpen)} aria-expanded={exportOpen}><Download size={15} />Download<ChevronDown size={14} /></button>
              {exportOpen && (
                <div className="qe-pop qe-export-pop" role="menu">
                  <button type="button" role="menuitem" onClick={() => void download("site")}><Download size={16} /><span><b>Website</b><small>A folder that works anywhere. Every page, font and picture inside; nothing loaded from the internet.</small></span></button>
                  <button type="button" role="menuitem" onClick={() => void download("project")}><Package size={16} /><span><b>Editable project</b><small>Back it up, or keep editing on another computer.</small></span></button>
                </div>
              )}
            </div>
          </div>
        </header>
        <div className={`qe-body${panel ? " has-panel" : ""}`}>
          <nav className="qe-rail" aria-label="Tools">
            {RAIL.map((r) => (
              <button key={r.id} type="button" className={panel === r.id ? "on" : ""} aria-pressed={panel === r.id} onClick={() => setPanel(panel === r.id ? null : r.id)}>
                {r.icon}<span>{r.label}</span>
              </button>
            ))}
          </nav>
          {panel && (
            <aside className="qe-panel" aria-label={PANELS[panel].title}>
              <header><h2>{PANELS[panel].title}</h2><button type="button" className="qe-icon-btn" onClick={() => setPanel(null)} aria-label="Close panel">×</button></header>
              <div className="qe-panel-body">{PANELS[panel].render()}</div>
            </aside>
          )}
          <main className="qe-centre" ref={centre}>
            <Canvas css={css} onDrop={onDrop} />
            <footer className="qe-foot">
              <span>{device === "phone" ? "Phone view: everything stacks into one column automatically" : `${DEVICE_WIDTH[device]} px · ${page.sections.length} sections on “${page.name}”`}</span>
              <span>{sel.ids.length ? `${sel.ids.length} selected · drag to move · double-click to edit` : sel.section ? "Section selected · R to rearrange" : "Click anything to change it"}</span>
            </footer>
          </main>
          <aside className="qe-right" aria-label="Properties"><Inspector /></aside>
        </div>
        {toastMsg && <div className="qe-toast" role="status">{toastMsg}</div>}
        {busy && <div className="qe-busy" role="status"><span className="qe-spinner" />{busy}</div>}
        {command && <CommandBar onClose={() => setCommand(false)} onPreview={() => setPreview(true)} onDownload={() => void download("site")} />}
        {preview && <Preview doc={doc} startPage={page.id} assetUrl={assetUrl} onClose={() => setPreview(false)} />}
      </div>
    </QuiltContext.Provider>
  );
}

export { designScale };
