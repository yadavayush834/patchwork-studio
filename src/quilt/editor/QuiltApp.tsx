/**
 * Quilt's front door (?quilt) and the editor (?quilt=<id>). The front door is where Quick start lives:
 * say what you're making, name it, pick a feeling, and a whole site is sewn for you in a second.
 */
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { ArrowLeft, ArrowRight, Copy, Trash2, Upload, Sparkles, Shuffle, RefreshCw, Smartphone, Wand2, Package, MousePointer2 } from "lucide-react";
import type { QuiltDoc, Section } from "../model";
import { TEMPLATES, newSite } from "../library/templates";
import { KITS, kit as kitById } from "../theme";
import { stock, LIVING_SCENES } from "../library/media";
import { themeCss, pageCss, sectionHtml } from "../render";
import { SITE_CSS } from "../site-css";
import { isDioramaScene } from "../../scenes/catalog";
import type { SceneId } from "../../scenes/catalog";
import { listSites, saveSite, deleteSite, getSite } from "../storage";
import { importProject, exportProject } from "../export";
import { cloneSite } from "../ops";
import type { RenderCtx } from "../util";
import Editor from "./Editor";
import "./quilt.css";

const siteParam = () => new URLSearchParams(location.search).get("quilt") || "";
const go = (id: string | null, replace = false) => {
  const url = new URL(location.href);
  url.search = id ? `?quilt=${encodeURIComponent(id)}` : "?quilt";
  window.history[replace ? "replaceState" : "pushState"]({ quilt: 1 }, "", url);
  dispatchEvent(new PopStateEvent("popstate"));
};

export default function QuiltApp() {
  const [id, setId] = useState(siteParam());
  const [sites, setSites] = useState<QuiltDoc[] | null>(null);
  const [open, setOpen] = useState<QuiltDoc | null>(null);
  const [status, setStatus] = useState("Saved");
  const [error, setError] = useState("");
  const queue = useRef(Promise.resolve());

  const refresh = useCallback(() => listSites().then(setSites).catch((e) => setError(`Couldn't open your saved sites: ${e.message}`)), []);
  useEffect(() => { void refresh(); }, [refresh]);
  useEffect(() => {
    const on = () => setId(siteParam());
    addEventListener("popstate", on);
    return () => removeEventListener("popstate", on);
  }, []);
  useEffect(() => {
    if (!id) { setOpen(null); return; }
    if (open?.id === id) return;
    void getSite(id).then((d) => (d ? setOpen(d) : go(null, true))).catch((e) => setError(e.message));
  }, [id, open?.id]);
  useEffect(() => {
    document.title = open ? `${open.name} · Patchwork` : "Make a site · Patchwork";
  }, [open]);

  const save = useCallback(async (doc: QuiltDoc) => {
    setStatus("Saving…");
    queue.current = queue.current.then(() => saveSite(doc)).then(() => setStatus("Saved"), (e) => { setStatus("Not saved"); setError(`Couldn't save: ${(e as Error).message}. Download the project to keep your work.`); });
    await queue.current;
  }, []);

  async function create(doc: QuiltDoc) {
    await saveSite(doc);
    setOpen(doc);
    go(doc.id);
    void refresh();
  }

  if (open && id === open.id)
    return <Editor key={open.id} initial={open} onSave={save} status={status} onExit={() => { void refresh(); go(null); }} />;

  return <Front sites={sites} error={error} onCreate={create} onOpen={(d) => { setOpen(d); go(d.id); }} onRefresh={refresh} onError={setError} />;
}

// ── The front door ──────────────────────────────────────────────────────────────────────────────────

const thumbDocs = new Map<string, QuiltDoc>();
const templateDoc = (tid: string) => {
  if (!thumbDocs.has(tid)) {
    const t = TEMPLATES.find((x) => x.id === tid)!;
    thumbDocs.set(tid, newSite(tid, { name: t.name }));
  }
  return thumbDocs.get(tid)!;
};

/** The top of a site, rendered for real and scaled down. Living scenes show their painting. */
function SiteThumb({ doc, sections = 3 }: { doc: QuiltDoc; sections?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [k, setK] = useState(0.25);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => e.isIntersecting && setOn(true), { rootMargin: "300px" });
    const ro = new ResizeObserver(() => setK(el.clientWidth / 1280));
    io.observe(el); ro.observe(el);
    return () => { io.disconnect(); ro.disconnect(); };
  }, []);
  const out = useMemo(() => {
    if (!on) return null;
    const page = doc.pages[0];
    const still = (s: Section): Section => (s.bg.scene ? { ...s, bg: { ...s.bg, scene: undefined, image: isDioramaScene(s.bg.scene as SceneId) ? `/scenes/${s.bg.scene}/painting.webp` : s.bg.image } } : s);
    const shown = { ...doc, pages: [{ ...page, sections: page.sections.slice(0, sections).map(still) }], footer: undefined, header: doc.header ? still(doc.header) : undefined };
    const ctx: RenderCtx = { doc: shown, theme: doc.theme, mode: "preview", base: "/", pageId: page.id, asset: (s) => (s.startsWith("stock:") ? stock(s.slice(6))?.src ?? "" : s.startsWith("asset:") ? "" : s), scene: () => "", page: () => "#" };
    const css = themeCss(shown, ctx, `[data-q="${doc.id}"]`) + pageCss(shown, shown.pages[0], ctx);
    const html = [shown.header, ...shown.pages[0].sections].filter(Boolean).map((s) => sectionHtml(s!, ctx)).join("");
    return { css, html };
  }, [doc, on, sections]);
  return (
    <span className="qd-thumb" ref={ref}>
      {out && <span className="q-site qd-thumb-site" data-q={doc.id} style={{ zoom: k, "--q-vh": "800px" } as React.CSSProperties}><style>{out.css}</style><span style={{ display: "contents" }} dangerouslySetInnerHTML={{ __html: out.html }} /></span>}
    </span>
  );
}

function Front({ sites, error, onCreate, onOpen, onRefresh, onError }: { sites: QuiltDoc[] | null; error: string; onCreate: (d: QuiltDoc) => Promise<void>; onOpen: (d: QuiltDoc) => void; onRefresh: () => void; onError: (e: string) => void }) {
  const [what, setWhat] = useState(TEMPLATES[0].id);
  const [name, setName] = useState("");
  const [line, setLine] = useState("");
  const [feel, setFeel] = useState<string | null>(null);
  const [making, setMaking] = useState(false);
  const file = useRef<HTMLInputElement>(null);
  const tpl = TEMPLATES.find((t) => t.id === what)!;
  const feelKit = feel ?? tpl.kit;
  const previewDoc = useMemo(() => {
    const d = newSite(what, { name: name.trim() || tpl.name, line: line.trim() || undefined }, feelKit);
    return { ...d, id: "quickstart" };
  }, [what, name, line, feelKit, tpl.name]);
  async function sew() {
    setMaking(true);
    const doc = newSite(what, { name: name.trim() || tpl.name, line: line.trim() || undefined }, feelKit);
    await onCreate(doc);
  }
  async function importFile(f: File) {
    try {
      const d = await importProject(f);
      const exists = sites?.some((s) => s.id === d.id);
      await onCreate(exists ? cloneSite(d, d.name) : d);
    } catch (e) {
      onError((e as Error).message);
    }
  }
  return (
    <div className="qd">
      <style>{SITE_CSS}</style>
      <header className="qd-nav">
        <a href="/" className="qd-back"><ArrowLeft size={16} />Patchwork</a>
        <span className="qd-brand"><span className="qe-mark" aria-hidden="true"><i /><i /><i /><i /></span>Make a site</span>
        <div className="qd-nav-r">
          <button type="button" className="qd-ghost" onClick={() => file.current?.click()}><Upload size={15} />Import a project</button>
          <input ref={file} type="file" hidden accept=".zip,application/zip" onChange={(e) => { const f = e.target.files?.[0]; if (f) void importFile(f); e.target.value = ""; }} />
        </div>
      </header>
      {error && <p className="qd-error" role="alert">{error}</p>}

      <section className="qd-hero">
        <div className="qd-hero-copy">
          <p className="qd-kicker"><span />Quilt · the Patchwork site maker</p>
          <h1>Make a website the way you'd make a <em>poster</em>.</h1>
          <p className="qd-lede">Drag anything anywhere, like a design tool. Patchwork stitches it into a real website that works on every phone, with living scenes and little residents only Patchwork has. No account. It's yours to download.</p>
        </div>

        <div className="qd-sew">
          <div className="qd-sew-form">
            <p className="qd-step"><b>1</b> What are you making?</p>
            <div className="qd-whats">
              {TEMPLATES.map((t) => <button key={t.id} type="button" className={what === t.id ? "on" : ""} onClick={() => { setWhat(t.id); setFeel(null); }}>{t.for}</button>)}
            </div>
            <p className="qd-step"><b>2</b> What's it called?</p>
            <input className="qd-input" value={name} maxLength={60} placeholder={tpl.name} onChange={(e) => setName(e.target.value)} />
            <input className="qd-input is-small" value={line} maxLength={180} placeholder="In one line, what is it? (optional)" onChange={(e) => setLine(e.target.value)} />
            <p className="qd-step"><b>3</b> Pick a feeling</p>
            <div className="qd-feels">
              {KITS.map((k) => (
                <button key={k.id} type="button" title={`${k.name}: ${k.mood}`} className={feelKit === k.id ? "on" : ""} onClick={() => setFeel(k.id)} style={{ background: k.palette.bg }}>
                  <i style={{ background: k.palette.accent }} /><i style={{ background: k.palette.accent2 }} /><i style={{ background: k.palette.ink }} />
                </button>
              ))}
              <button type="button" className="qd-shuffle" title="Surprise me" onClick={() => setFeel(KITS[Math.floor(Math.random() * KITS.length)].id)}><Shuffle size={15} /></button>
            </div>
            <p className="qd-feel-name">{kitById(feelKit).name} <span>· {kitById(feelKit).mood}</span></p>
            <div className="qd-sew-actions">
              <button type="button" className="qd-primary" disabled={making} onClick={() => void sew()}>{making ? "Sewing…" : <>Sew my site <Sparkles size={16} /></>}</button>
              <button type="button" className="qd-link" onClick={() => void onCreate(newSite(null, { name: name.trim() || "Untitled site", line: line.trim() || undefined }, feelKit))}>or start from a blank page</button>
            </div>
          </div>
          <div className="qd-sew-preview" aria-label="Preview of your site">
            <div className="qd-browser"><i /><i /><i /><span>{(name.trim() || tpl.name).normalize("NFKD").toLowerCase().replace(/[^a-z0-9]+/g, "")}.com</span></div>
            <SiteThumb key={`${what}-${feelKit}-${name}-${line}`} doc={previewDoc} sections={2} />
          </div>
        </div>
      </section>

      {sites && sites.length > 0 && (
        <section className="qd-section">
          <div className="qd-head"><h2>Your sites</h2><span>{sites.length} on this device</span></div>
          <div className="qd-grid">
            {sites.map((s) => (
              <article key={s.id} className="qd-card">
                <button type="button" className="qd-card-main" onClick={() => onOpen(s)}>
                  <SiteThumb doc={s} sections={2} />
                  <span className="qd-card-text"><b>{s.name}</b><small>{s.pages.length} page{s.pages.length > 1 ? "s" : ""} · edited {new Date(s.updatedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</small></span>
                </button>
                <div className="qd-card-acts">
                  <button type="button" title="Duplicate" onClick={() => void saveSite(cloneSite(s)).then(onRefresh)}><Copy size={14} /></button>
                  <button type="button" title="Download the editable project" onClick={() => void exportProject(s).then((b) => { const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(b), download: `${s.name.replace(/[^\w-]+/g, "-")}.quilt.zip` }); a.click(); })}><Package size={14} /></button>
                  <button type="button" title="Delete" onClick={() => { if (confirm(`Delete “${s.name}” from this device? This can't be undone.`)) void deleteSite(s.id).then(onRefresh); }}><Trash2 size={14} /></button>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}

      <section className="qd-section">
        <div className="qd-head"><h2>Start from a template</h2><span>Every one is fully editable, and every section can be rearranged.</span></div>
        <div className="qd-grid is-templates">
          {TEMPLATES.map((t) => {
            const k = kitById(t.kit);
            return (
              <button key={t.id} type="button" className="qd-card qd-tpl" onClick={() => void onCreate(newSite(t.id, { name: t.name }))}>
                <SiteThumb doc={templateDoc(t.id)} sections={3} />
                <span className="qd-card-text"><b>{t.name}</b><small>{t.line}</small></span>
                <span className="qd-tpl-kit">{[k.palette.bg, k.palette.accent, k.palette.accent2, k.palette.ink].map((c, i) => <i key={i} style={{ background: c }} />)}<em>{k.name}</em></span>
              </button>
            );
          })}
        </div>
      </section>

      <section className="qd-section qd-why">
        <div className="qd-head"><h2>Why it's different</h2></div>
        <div className="qd-why-grid">
          <div><MousePointer2 /><b>Free like a poster, real like a website</b><p>Put anything anywhere. Patchwork turns your layout into a proper responsive grid, so it holds together on every screen.</p></div>
          <div><Smartphone /><b>Phones lay themselves out</b><p>Your desktop design is read the way a person reads it and stacked into one tidy column. Cards and their contents stay together.</p></div>
          <div><RefreshCw /><b>Rearrange</b><p>Every section knows what its words and pictures are. One click tries a new layout and keeps everything you wrote.</p></div>
          <div><Shuffle /><b>Shuffle the style</b><p>Sixteen hand-tuned kits. Colours and fonts change across the whole site at once, and your own choices follow along.</p></div>
          <div><Sparkles /><b>Living scenes and residents</b><p>Put one of {LIVING_SCENES.length} moving pixel places behind a section, or let a fox or a jellyfish move in. Only Patchwork has these.</p></div>
          <div><Wand2 /><b>Seams, stitches and motion</b><p>Wavy, torn or scalloped edges between sections, plus entrances, parallax and hover tricks on anything.</p></div>
        </div>
      </section>
      <footer className="qd-foot"><span>Everything stays on this device until you download it.</span><a href="/">Back to Patchwork <ArrowRight size={14} /></a></footer>
    </div>
  );
}
