/** The left-hand panels: everything you can add or change site-wide. */
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import { Eye, EyeOff, Lock, Unlock, Upload, ArrowUp, ArrowDown, Copy, Trash2, Home as HomeIcon, Plus, Shuffle, Image as ImageIcon, Check, ChevronLeft, ChevronRight } from "lucide-react";
import type { El, Section, TextEl } from "../model";
import { GRID, uid, contentRows } from "../model";
import { KITS, PAIRINGS, FONTS, font, paletteFrom, isDark, themeFromKit } from "../theme";
import { SHAPES, shapePreview } from "../library/shapes";
import { ICONS, iconSvg } from "../library/icons";
import { STOCK, LIVING_SCENES, RESIDENTS, stock } from "../library/media";
import { RECIPES, buildSection } from "../library/recipes";
import { WIDGETS, widget } from "../widgets";
import { text, button, shape, icon, line, wid, image } from "../library/build";
import { sectionCss, sectionHtml, phoneOrderCss, anchorOf } from "../render";
import { addSection, mapSection, restack, addPage, renamePage, removePage, duplicatePage, makeHome, applyKit } from "../ops";
import { listAssets, type StoredAsset } from "../storage";
import { useQuilt, type Panel } from "./context";
import { PIECES, pieceDef, pieceDefaults, pieceDocument, pieceSection, type PieceKind } from "../pieces";
import { Group, ColorPick, Toggle, Select, Slider, Segmented, Field } from "./controls";

/** Scroll the canvas (and only the canvas) to a section. */
export function revealSection(id: string) {
  const stage = document.querySelector<HTMLElement>(".qe-stage"), sec = stage?.querySelector<HTMLElement>(`[data-sec="${id}"]`);
  if (!stage || !sec) return;
  stage.scrollTo({ top: stage.scrollTop + sec.getBoundingClientRect().top - stage.getBoundingClientRect().top - 24, behavior: "smooth" });
}

// ── What the Add panel can make ─────────────────────────────────────────────────────────────────────

export interface AddItem {
  key: string;
  label: string;
  make: () => El[];
  preview: ReactNode;
}

const t = (k: string, label: string, make: () => TextEl, preview: ReactNode): AddItem => ({ key: `text:${k}`, label, make: () => [make()], preview });
export const TEXT_ITEMS: AddItem[] = [
  t("heading", "Heading", () => text(undefined, "A big idea", [0, 0, 56, 9], "h1"), <b className="qe-ti is-h1">Add a heading</b>),
  t("sub", "Subheading", () => text(undefined, "Something worth saying", [0, 0, 40, 4], "h3"), <b className="qe-ti is-h3">Add a subheading</b>),
  t("body", "Paragraph", () => text(undefined, "Tell people a little more. Keep it short, warm and honest: two or three sentences is plenty.", [0, 0, 40, 9], "body"), <span className="qe-ti is-body">Add a little body text</span>),
  t("label", "Label", () => text(undefined, "A small label", [0, 0, 30, 3], "label", { color: "$accent" }), <span className="qe-ti is-label">SMALL LABEL</span>),
  t("quote", "Quote", () => text(undefined, "“The kindest words go here.”", [0, 0, 56, 10], "quote"), <i className="qe-ti is-quote">“A lovely quote”</i>),
  t("highlight", "Highlighter", () => text(undefined, "Highlighted words", [0, 0, 44, 7], "h2", { effect: "highlight", effectColor: "$accent3" }), <b className="qe-ti is-fx-hl">Highlighted</b>),
  t("hand", "Handwritten", () => text(undefined, "a little note x", [0, 0, 30, 6], "h3", { font: "caveat", size: 40, color: "$accent", weight: 500 }), <span className="qe-ti is-hand">a little note</span>),
  t("outline", "Outline", () => text(undefined, "OUTLINE", [0, 0, 60, 13], "display", { size: 110, effect: "outline", effectColor: "$ink", upper: true }), <b className="qe-ti is-outline">OUTLINE</b>),
  t("gradient", "Gradient", () => text(undefined, "Glowing words", [0, 0, 56, 9], "h1", { effect: "gradient", effectColor: "$accent" }), <b className="qe-ti is-grad">Gradient</b>),
  t("stamp", "Stamp", () => text(undefined, "Handmade", [0, 0, 20, 6], "label", { effect: "stamp", effectColor: "$accent", color: "$accent", size: 18 }), <span className="qe-ti is-stamp">STAMP</span>),
  t("retro", "Retro shadow", () => text(undefined, "Retro!", [0, 0, 40, 11], "display", { effect: "shadow", effectColor: "$accent2" }), <b className="qe-ti is-retro">Retro!</b>),
  t("pixel", "Pixel", () => text(undefined, "PRESS START", [0, 0, 48, 6], "h2", { font: "pixelify", size: 40 }), <b className="qe-ti is-pixel">PRESS START</b>),
];
export const BUTTON_ITEMS: AddItem[] = (["solid", "outline", "pill", "sticker", "soft", "link"] as const).map((v) => ({
  key: `button:${v}`, label: `${v[0].toUpperCase()}${v.slice(1)} button`,
  make: () => [button(undefined, v === "link" ? "Read more" : "Click me", [0, 0, v === "link" ? 12 : 16, 7], v, v === "outline" || v === "link" ? "$ink" : "$accent")],
  preview: <span className={`qe-bp is-${v}`}>{v === "link" ? "Read more →" : "Button"}</span>,
}));
export const SHAPE_ITEMS: AddItem[] = SHAPES.map((s) => ({
  key: `shape:${s.id}`, label: s.name,
  make: () => [shape(s.id, [0, 0, s.stretch ? 24 : 12, s.stretch ? 20 : 16], s.group === "doodle" ? "$ink" : "$accent2", s.id === "rect" ? { radius: 16 } : {})],
  preview: <span className="qe-shape-prev" dangerouslySetInnerHTML={{ __html: shapePreview(s.id) }} />,
}));
export const ICON_ITEMS: AddItem[] = Object.entries(ICONS).map(([id, ic]) => ({
  key: `icon:${id}`, label: ic.name,
  make: () => [icon(undefined, id, [0, 0, 5, 8], "$accent")],
  preview: <span className="qe-icon-prev" dangerouslySetInnerHTML={{ __html: iconSvg(id) }} />,
}));
export const LINE_ITEMS: AddItem[] = (["solid", "dashed", "dotted", "stitch", "wave", "zigzag", "double"] as const).map((st) => ({
  key: `line:${st}`, label: `${st[0].toUpperCase()}${st.slice(1)} line`,
  make: () => [line([0, 0, 40, 2], st, "$ink", st === "solid" || st === "double" ? 2 : 3)],
  preview: <span className={`qe-line-prev is-${st}`} />,
}));
export const WIDGET_ITEMS: AddItem[] = WIDGETS.map((w) => ({
  key: `widget:${w.kind}`, label: w.name,
  make: () => [wid(undefined, w.kind, [0, 0, w.size.w, w.size.h])],
  preview: <span className="qe-wprev"><i dangerouslySetInnerHTML={{ __html: iconSvg(w.icon) }} /><b>{w.name}</b><small>{w.line}</small></span>,
}));
export const ALL_ITEMS = [...TEXT_ITEMS, ...BUTTON_ITEMS, ...SHAPE_ITEMS, ...ICON_ITEMS, ...LINE_ITEMS, ...WIDGET_ITEMS];

/** Put new elements where they're wanted: at a drop point, or in the middle of the section. */
export function place(els: El[], s: Section, at?: { x: number; y: number }): El[] {
  const minX = Math.min(...els.map((e) => e.frame.x)), minY = Math.min(...els.map((e) => e.frame.y));
  const w = Math.max(...els.map((e) => e.frame.x + e.frame.w)) - minX, h = Math.max(...els.map((e) => e.frame.y + e.frame.h)) - minY;
  const x = at ? Math.round(at.x - w / 2) : Math.round((GRID.cols - w) / 2);
  const y = at ? Math.round(at.y - h / 2) : Math.max(2, Math.round((Math.max(s.rows, contentRows(s)) - h) / 2));
  return els.map((e) => ({ ...e, frame: { ...e.frame, x: Math.max(0, Math.min(GRID.cols - e.frame.w, e.frame.x - minX + x)), y: Math.max(0, e.frame.y - minY + y) } }));
}

function Tile({ item, wide, className }: { item: AddItem; wide?: boolean; className?: string }) {
  const q = useQuilt();
  return (
    <button type="button" className={`qe-tile${wide ? " is-wide" : ""}${className ? ` ${className}` : ""}`} title={item.label} draggable
      onDragStart={(e) => { e.dataTransfer.setData("application/x-quilt", item.key); e.dataTransfer.effectAllowed = "copy"; }}
      onClick={() => {
        const s = q.section() ?? q.page.sections[0];
        if (!s) return q.toast("Add a section first, then drop things into it.");
        q.addElement(place(item.make(), s), s.id);
      }}>
      {item.preview}
    </button>
  );
}

function AddPanel() {
  const [find, setFind] = useState("");
  const f = find.trim().toLowerCase();
  const filter = (xs: AddItem[]) => (f ? xs.filter((x) => x.label.toLowerCase().includes(f)) : xs);
  return (
    <>
      <input className="qe-input qe-search" placeholder="Search text, shapes, icons…" value={find} onChange={(e) => setFind(e.target.value)} />
      <p className="qe-tip">Click to add, or drag straight onto your page.</p>
      {filter(TEXT_ITEMS).length > 0 && <Group title="Text"><div className="qe-text-tiles">{filter(TEXT_ITEMS).map((i) => <Tile key={i.key} item={i} wide />)}</div></Group>}
      {filter(BUTTON_ITEMS).length > 0 && <Group title="Buttons"><div className="qe-grid2">{filter(BUTTON_ITEMS).map((i) => <Tile key={i.key} item={i} />)}</div></Group>}
      {filter(WIDGET_ITEMS).length > 0 && <Group title="Working parts"><div className="qe-wtiles">{filter(WIDGET_ITEMS).map((i) => <Tile key={i.key} item={i} wide />)}</div></Group>}
      {filter(SHAPE_ITEMS).length > 0 && <Group title="Shapes & doodles"><div className="qe-grid4">{filter(SHAPE_ITEMS).map((i) => <Tile key={i.key} item={i} />)}</div></Group>}
      {filter(LINE_ITEMS).length > 0 && <Group title="Lines"><div className="qe-grid2">{filter(LINE_ITEMS).map((i) => <Tile key={i.key} item={i} />)}</div></Group>}
      {filter(ICON_ITEMS).length > 0 && <Group title="Icons" open={!!f}><div className="qe-grid5">{filter(ICON_ITEMS).map((i) => <Tile key={i.key} item={i} />)}</div></Group>}
    </>
  );
}

// ── Sections ────────────────────────────────────────────────────────────────────────────────────────

/** A real section, rendered in the site's current style, scaled down. */
export function SectionThumb({ s }: { s: Section }) {
  const q = useQuilt();
  const ref = useRef<HTMLSpanElement>(null);
  const [width, setWidth] = useState(280);
  useEffect(() => {
    const ro = new ResizeObserver(() => ref.current && setWidth(ref.current.clientWidth));
    if (ref.current) ro.observe(ref.current);
    return () => ro.disconnect();
  }, []);
  const css = useMemo(() => sectionCss(s, 0, 1, q.ctx) + phoneOrderCss(s), [s, q.ctx]);
  const html = useMemo(() => sectionHtml({ ...s, residents: undefined, bg: { ...s.bg, scene: undefined } }, q.ctx), [s, q.ctx]);
  return (
    <span className="qe-thumb" ref={ref} style={{ height: Math.min(s.rows * 8 * (width / 1280), 220) }}>
      <span className="q-site qe-thumb-site" style={{ zoom: width / 1280, "--q-vh": "640px" } as React.CSSProperties}>
        <style>{css}</style>
        <span style={{ display: "block" }} dangerouslySetInnerHTML={{ __html: html }} />
      </span>
    </span>
  );
}

/** A live, scaled-down piece. Only mounted while on screen: browsers allow a limited number of WebGL pages. */
function PieceCard({ kind, id, onAdd }: { kind: PieceKind; id: string; onAdd: () => void }) {
  const def = pieceDef({ kind, id })!;
  const ref = useRef<HTMLButtonElement>(null);
  const [on, setOn] = useState(false), [w, setW] = useState(280);
  const src = useMemo(() => (on ? URL.createObjectURL(new Blob([pieceDocument({ kind, id, config: pieceDefaults(kind, id, "") }, { heroes2: `${location.origin}/heroes2/`, heroes: `${location.origin}/heroes/`, scenes: `${location.origin}/scenes/` }, "#")], { type: "text/html" })) : ""), [on, kind, id]);
  useEffect(() => () => { if (src) URL.revokeObjectURL(src); }, [src]);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "60px" });
    const ro = new ResizeObserver(() => setW(el.clientWidth));
    io.observe(el); ro.observe(el);
    return () => { io.disconnect(); ro.disconnect(); };
  }, []);
  const [a, b = a, c = b] = def.palette;
  return (
    <button type="button" ref={ref} className="qe-sec-card qe-piece-card" onClick={onAdd} title={def.line}>
      <span className="qe-piece-thumb" style={{ background: `linear-gradient(135deg, ${a}, ${b} 60%, ${c})` }}>
        {def.cover && !on && <img src={def.cover} alt="" />}
        {on && <iframe src={src} title="" tabIndex={-1} aria-hidden="true" scrolling="no" style={{ zoom: w / 1280 }} />}
      </span>
      <span className="qe-card-foot"><b>{def.name}<small>{def.technique}</small></b><span className="qe-card-add"><Plus size={15} /></span></span>
    </button>
  );
}

function SectionsPanel() {
  const q = useQuilt();
  const [kind, setKind] = useState<string | null>(null);
  const samples = useMemo(() => RECIPES.map((r) => ({ r, sections: r.layouts.map((l) => buildSection(r.kind, l.id, {})) })), []);
  const current = samples.find((x) => x.r.kind === kind);
  function addPiece(pk: PieceKind, id: string) {
    const idx = q.insertAt ?? (() => { const i = q.page.sections.findIndex((x) => x.id === q.sel.section); return i < 0 ? 0 : i + 1; })();
    const next = q.page.sections[idx];
    const s = pieceSection(pk, id, q.doc.name, !!q.doc.header, next ? { kind: "section", value: anchorOf(next) } : undefined);
    q.commit(addSection(q.doc, q.page.id, s, idx));
    q.setInsertAt(null);
    q.setSel({ section: s.id, ids: [] });
    q.toast(`${pieceDef({ kind: pk, id })!.name} added. Change its words on the right.`);
    requestAnimationFrame(() => revealSection(s.id));
  }
  function add(s: Section) {
    const fresh = { ...s, id: uid("s"), elements: s.elements.map((e) => ({ ...e, id: uid() })) };
    if (fresh.kind === "header" || fresh.kind === "footer") {
      fresh.sticky = fresh.kind === "header" || undefined;
      q.commit(addSection(q.doc, q.page.id, fresh));
      q.toast(fresh.kind === "header" ? "Header added to every page." : "Footer added to every page.");
    } else {
      const idx = q.insertAt ?? (() => { const i = q.page.sections.findIndex((x) => x.id === q.sel.section); return i < 0 ? q.page.sections.length : i + 1; })();
      q.commit(addSection(q.doc, q.page.id, fresh, idx));
      q.setInsertAt(null);
    }
    q.setSel({ section: fresh.id, ids: [] });
    requestAnimationFrame(() => revealSection(fresh.id));
  }
  const insertNote = q.insertAt !== null && (
    <div className="qe-note"><span>Adding at position {q.insertAt + 1} on this page.</span><button type="button" className="qe-link" onClick={() => q.setInsertAt(null)}>Cancel</button></div>
  );
  if (!kind) {
    const sceneCover = PIECES.find((p) => p.kind === "scene" && p.cover)?.cover;
    return (
      <>
        {insertNote}
        <div className="qe-featured">
          <button type="button" className="qe-feature" onClick={() => setKind("heroes")}>
            <span className="qe-feature-art is-heroes" />
            <span className="qe-feature-text"><b>Patchwork heroes</b><small>{PIECES.filter((p) => p.kind !== "scene").length} live openings</small></span>
          </button>
          <button type="button" className="qe-feature" onClick={() => setKind("scenes")}>
            <span className="qe-feature-art" style={{ backgroundImage: sceneCover ? `url(${sceneCover})` : undefined }} />
            <span className="qe-feature-text"><b>Living scenes</b><small>{PIECES.filter((p) => p.kind === "scene").length} moving places</small></span>
          </button>
        </div>
        <p className="qe-overline">Section types</p>
        <ul className="qe-kinds">
          {RECIPES.map((r) => (
            <li key={r.kind}>
              <button type="button" onClick={() => setKind(r.kind)}>
                <span className="qe-kind-icon" dangerouslySetInnerHTML={{ __html: iconSvg(r.icon) }} />
                <span className="qe-kind-text"><b>{r.name}</b><small>{r.line}</small></span>
                <span className="qe-kind-count">{r.layouts.length}</span>
                <ChevronRight size={15} />
              </button>
            </li>
          ))}
        </ul>
      </>
    );
  }
  const pieceKind = kind === "heroes" || kind === "scenes";
  const title = kind === "heroes" ? "Patchwork heroes" : kind === "scenes" ? "Living scenes" : current?.r.name;
  const line = kind === "heroes" ? "Full-screen openings from the Patchwork collection. Your words go in, and they ship with your site." : kind === "scenes" ? "Living pixel places with your headline in them. They move and answer the cursor." : `${current?.r.line} Shown in your style.`;
  return (
    <>
      <button type="button" className="qe-back" onClick={() => setKind(null)}><ChevronLeft size={16} />All sections</button>
      <div className="qe-subhead"><h3>{title}</h3><p>{line}</p></div>
      {insertNote}
      <div className="qe-sec-list">
        {pieceKind && PIECES.filter((p) => (kind === "scenes" ? p.kind === "scene" : p.kind !== "scene")).map((p) => <PieceCard key={`${p.kind}-${p.id}`} kind={p.kind} id={p.id} onAdd={() => addPiece(p.kind, p.id)} />)}
        {current && current.sections.map((sec, i) => (
          <button key={sec.layout} type="button" className="qe-sec-card" onClick={() => add(sec)}>
            <SectionThumb s={sec} />
            <span className="qe-card-foot"><b>{current.r.layouts[i].name}</b><span className="qe-card-add"><Plus size={15} /></span></span>
          </button>
        ))}
      </div>
    </>
  );
}

// ── Photos ──────────────────────────────────────────────────────────────────────────────────────────

function PhotosPanel() {
  const q = useQuilt();
  const [uploads, setUploads] = useState<StoredAsset[]>([]);
  const [drag, setDrag] = useState(false);
  const input = useRef<HTMLInputElement>(null);
  const refresh = () => void listAssets().then(setUploads).catch(() => {});
  useEffect(refresh, []);
  const sel = q.selected();
  const img = sel.length === 1 && sel[0].type === "image" ? sel[0] : null;
  const vid = sel.length === 1 && sel[0].type === "widget" && sel[0].widget === "video" ? sel[0] : null;
  const s = q.section();
  function use(src: string, alt: string, isVideo = false) {
    if (isVideo) {
      if (vid) return q.patch((e) => (e.type === "widget" ? { ...e, props: { ...e.props, src } } : e));
      const target = s ?? q.page.sections[0];
      if (target) q.addElement(place([wid(undefined, "video", [0, 0, 48, 34], { src })], target), target.id);
      return;
    }
    if (img) return q.patch((e) => (e.type === "image" ? { ...e, src, alt: e.alt || alt } : e));
    const target = s ?? q.page.sections[0];
    if (!target) return q.toast("Add a section first.");
    const info = src.startsWith("stock:") ? stock(src.slice(6)) : null;
    const ratio = info ? info.w / info.h : 1.4;
    const w = 40, h = Math.round((w * 12.5) / ratio / 8);
    q.addElement(place([image(undefined, src, alt, [0, 0, w, h])], target), target.id);
  }
  function asBackground(src: string) {
    if (!s) return q.toast("Select a section first.");
    q.patchSection((x) => ({ ...x, bg: { ...x.bg, image: src, dim: x.bg.dim ?? 30, dimColor: x.bg.dimColor ?? "$ink" } }));
    q.toast("Set as the section background. Adjust the wash in the panel on the right.");
  }
  async function files(list: FileList | File[]) {
    const ids = await q.upload(list);
    refresh();
    if (ids.length === 1) {
      const a = (await listAssets()).find((x) => x.id === ids[0]);
      if (a) use(a.id, a.name.replace(/\.\w+$/, ""), a.type.startsWith("video/"));
    }
  }
  return (
    <>
      <div className={`qe-drop${drag ? " is-over" : ""}`} onDragOver={(e) => { e.preventDefault(); setDrag(true); }} onDragLeave={() => setDrag(false)} onDrop={(e) => { e.preventDefault(); setDrag(false); if (e.dataTransfer.files.length) void files(e.dataTransfer.files); }}>
        <Upload size={18} />
        <b>Upload pictures or video</b>
        <span>Drop files here, or <button type="button" className="qe-link" onClick={() => input.current?.click()}>choose from your computer</button>. They stay on this device.</span>
        <input ref={input} type="file" hidden multiple accept="image/png,image/jpeg,image/webp,image/gif,image/svg+xml,video/mp4,video/webm" onChange={(e) => { if (e.target.files?.length) void files(e.target.files); e.target.value = ""; }} />
      </div>
      {img && <p className="qe-tip is-strong">Click a picture to replace the selected one.</p>}
      {uploads.length > 0 && (
        <Group title={`Your uploads (${uploads.length})`}>
          <div className="qe-photos">
            {uploads.map((a) => (
              <div key={a.id} className="qe-photo">
                <button type="button" onClick={() => use(a.id, a.name.replace(/\.\w+$/, ""), a.type.startsWith("video/"))} title={a.name}>
                  {a.type.startsWith("video/") ? <video src={q.assetUrl(a.id)} muted /> : <img src={q.assetUrl(a.id)} alt={a.name} loading="lazy" />}
                </button>
                {!a.type.startsWith("video/") && <button type="button" className="qe-photo-bg" title="Use as section background" onClick={() => asBackground(a.id)}><ImageIcon size={12} /></button>}
              </div>
            ))}
          </div>
        </Group>
      )}
      <Group title="Patchwork photos & paintings">
        <div className="qe-photos">
          {STOCK.map((p) => (
            <div key={p.id} className="qe-photo">
              <button type="button" onClick={() => use(`stock:${p.id}`, p.name)} title={p.name}><img src={p.src} alt={p.name} loading="lazy" /></button>
              <button type="button" className="qe-photo-bg" title="Use as section background" onClick={() => asBackground(`stock:${p.id}`)}><ImageIcon size={12} /></button>
            </div>
          ))}
        </div>
        <p className="qe-tip">Made for Patchwork and free to use on your site.</p>
      </Group>
    </>
  );
}

// ── Style ───────────────────────────────────────────────────────────────────────────────────────────

function StylePanel() {
  const q = useQuilt();
  const th = q.doc.theme;
  const [seed, setSeed] = useState(th.palette.accent);
  const setTheme = (patch: Partial<typeof th>, key?: string) => q.commit({ ...q.doc, theme: { ...th, ...patch, kit: patch.kit ?? undefined } }, key);
  function shuffle() {
    const others = KITS.filter((k) => k.id !== th.kit);
    const k = others[Math.floor(Math.random() * others.length)];
    q.commit(applyKit(q.doc, k.id));
    q.toast(`${k.name}: ${k.mood.toLowerCase()}. Undo to go back.`);
  }
  return (
    <>
      <button type="button" className="qe-big" onClick={shuffle}><Shuffle size={17} /><span><b>Shuffle the style</b><small>New colours and fonts. Your words stay put.</small></span></button>
      <Group title="Style kits">
        <div className="qe-kits">
          {KITS.map((k) => (
            <button key={k.id} type="button" className={`qe-kit${th.kit === k.id ? " on" : ""}`} onClick={() => q.commit(applyKit(q.doc, k.id))} style={{ background: k.palette.bg, color: k.palette.ink }}>
              <span className="qe-kit-aa" style={{ fontFamily: `"${font(k.fonts.heading).family}"` }}>Aa</span>
              <span className="qe-kit-dots">{[k.palette.accent, k.palette.accent2, k.palette.accent3].map((c) => <i key={c} style={{ background: c }} />)}</span>
              <span className="qe-kit-name">{k.name}</span>
              {th.kit === k.id && <Check size={13} className="qe-kit-on" />}
            </button>
          ))}
        </div>
      </Group>
      <Group title="Colours">
        <div className="qe-palette">
          {(Object.keys(th.palette) as (keyof typeof th.palette)[]).map((k) => (
            <label key={k} className="qe-pal">
              <input type="color" value={th.palette[k]} onChange={(e) => setTheme({ palette: { ...th.palette, [k]: e.target.value } }, `pal-${k}`)} />
              <span>{({ bg: "Background", surface: "Surface", ink: "Ink", muted: "Muted", accent: "Accent", accent2: "Accent 2", accent3: "Accent 3" })[k]}</span>
            </label>
          ))}
        </div>
        <Field label="Make a palette from one colour">
          <div className="qe-row">
            <input type="color" value={seed} onChange={(e) => setSeed(e.target.value)} className="qe-colorwell" />
            <button type="button" className="qe-btn" onClick={() => setTheme({ palette: paletteFrom(seed, false) })}>Light</button>
            <button type="button" className="qe-btn" onClick={() => setTheme({ palette: paletteFrom(seed, true) })}>Dark</button>
          </div>
        </Field>
        <button type="button" className="qe-link" onClick={() => setTheme({ palette: { ...th.palette, bg: th.palette.ink, ink: th.palette.bg, surface: isDark(th.palette.bg) ? "#ffffff" : "#1b1a20", muted: th.palette.muted } })}>Swap light and dark</button>
      </Group>
      <Group title="Fonts">
        <div className="qe-pairs">
          {PAIRINGS.map((p) => (
            <button key={p.name} type="button" className={th.fonts.heading === p.heading && th.fonts.body === p.body ? "on" : ""} onClick={() => setTheme({ fonts: { heading: p.heading, body: p.body } })}>
              <b style={{ fontFamily: `"${font(p.heading).family}"` }}>{p.name}</b>
              <small style={{ fontFamily: `"${font(p.body).family}"` }}>{font(p.heading).family} + {font(p.body).family}</small>
            </button>
          ))}
        </div>
        <Field label="Headings"><Select value={th.fonts.heading} options={FONTS.map((f) => [f.id, f.family])} onChange={(v) => setTheme({ fonts: { ...th.fonts, heading: v } })} /></Field>
        <Field label="Body"><Select value={th.fonts.body} options={FONTS.map((f) => [f.id, f.family])} onChange={(v) => setTheme({ fonts: { ...th.fonts, body: v } })} /></Field>
        <Field label="Heading letters"><Segmented value={th.headingCase ?? "normal"} options={[["normal", "Aa"], ["upper", "AA"]]} onChange={(v) => setTheme({ headingCase: v })} /></Field>
      </Group>
      <Group title="Corners & depth">
        <Field label="Corners"><Slider value={th.radius} min={0} max={40} unit="px" onChange={(v) => setTheme({ radius: v }, "radius")} /></Field>
        <Field label="Shadows"><Segmented value={String(th.shadow) as "0"} options={[["0", "Flat"], ["1", "Soft"], ["2", "Lifted"], ["3", "Deep"]]} onChange={(v) => setTheme({ shadow: +v })} /></Field>
      </Group>
      <button type="button" className="qe-link" onClick={() => q.commit({ ...q.doc, theme: themeFromKit(KITS.find((k) => k.id === th.kit) ?? KITS[0]) })}>Reset to the kit</button>
    </>
  );
}

// ── Living ──────────────────────────────────────────────────────────────────────────────────────────

function LivingPanel() {
  const q = useQuilt();
  const s = q.section();
  const st = q.doc.settings;
  const setSettings = (patch: Partial<typeof st>) => q.commit({ ...q.doc, settings: { ...st, ...patch } });
  return (
    <>
      <p className="qe-tip">Things only Patchwork can do: real living places and little creatures, carried into your download.</p>
      <Group title="Living scenes">
        <p className="qe-tip">{s ? `Paint one behind “${s.name}”. They move, and answer the cursor.` : "Select a section, then pick a scene to live behind it."}</p>
        <div className="qe-scenes">
          {LIVING_SCENES.map((sc) => (
            <button key={sc.id} type="button" disabled={!s} className={s?.bg.scene === sc.id ? "on" : ""} onClick={() => q.patchSection((x) => ({ ...x, bg: { ...x.bg, scene: sc.id, dim: x.bg.dim ?? 15, dimColor: x.bg.dimColor ?? "#000000" } }))}>
              <span className="qe-scene-sw">{sc.palette.slice(0, 5).map((c) => <i key={c} style={{ background: c }} />)}</span>
              <b>{sc.name}</b>
              <small>{sc.mood}</small>
            </button>
          ))}
        </div>
        {s?.bg.scene && <button type="button" className="qe-link" onClick={() => q.patchSection((x) => ({ ...x, bg: { ...x.bg, scene: undefined } }))}>Remove the scene</button>}
      </Group>
      <Group title="Residents">
        <p className="qe-tip">{s ? `Little creatures that move into “${s.name}” and get on with their lives.` : "Select a section to give it residents."}</p>
        {s?.residents?.length ? (
          <div className="qe-residents">
            {s.residents.map((r, i) => (
              <span key={i} className="qe-pill-lg">
                {RESIDENTS.find((p) => p.id === r.kind)?.name}
                <button type="button" aria-label="Remove" onClick={() => q.patchSection((x) => ({ ...x, residents: x.residents?.filter((_, j) => j !== i) }))}>×</button>
              </span>
            ))}
          </div>
        ) : null}
        <div className="qe-pals">
          {RESIDENTS.map((p) => (
            <button key={p.id} type="button" disabled={!s || (s.residents?.length ?? 0) >= 6} title={p.line} onClick={() => q.patchSection((x) => ({ ...x, residents: [...(x.residents ?? []), { kind: p.id }] }))}>
              <i style={{ background: p.color }} />{p.name}
            </button>
          ))}
        </div>
      </Group>
      <Group title="Across the whole site">
        <Toggle checked={!!st.kite} onChange={(v) => setSettings({ kite: v || undefined })} label="Kite back-to-top" line="A kid flies a kite in the corner; click to reel back to the top." />
        <Toggle checked={!!st.progress} onChange={(v) => setSettings({ progress: v || undefined })} label="Reading thread" line="A stitched line across the top shows how far people have read." />
        <Toggle checked={!!st.intro} onChange={(v) => setSettings({ intro: v || undefined })} label="Soft fade-in" line="Every page arrives gently." />
        <Field label="Cursor trail"><Segmented value={st.cursor ?? "none"} options={[["none", "None"], ["sparkle", "Sparkles"], ["dot", "Dots"], ["thread", "Thread"]]} onChange={(v) => setSettings({ cursor: v === "none" ? undefined : v })} /></Field>
      </Group>
    </>
  );
}

// ── Layers ──────────────────────────────────────────────────────────────────────────────────────────

const label = (e: El) => e.name || (e.type === "text" ? e.text.slice(0, 32) || "Text" : e.type === "button" ? `Button · ${e.label}` : e.type === "image" ? (e.alt || "Picture") : e.type === "widget" ? widget(e.widget)?.name ?? "Widget" : e.type === "shape" ? SHAPES.find((x) => x.id === e.shape)?.name ?? "Shape" : e.type === "icon" ? `Icon · ${ICONS[e.icon]?.name ?? ""}` : "Line");

function LayersPanel() {
  const q = useQuilt();
  const s = q.section();
  return (
    <>
      <Group title="Sections on this page">
        <ol className="qe-layers">
          {[...(q.doc.header ? [q.doc.header] : []), ...q.page.sections, ...(q.doc.footer ? [q.doc.footer] : [])].map((x) => (
            <li key={x.id} className={q.sel.section === x.id ? "on" : ""}>
              <button type="button" className="qe-layer-name" onClick={() => { q.setSel({ section: x.id, ids: [] }); revealSection(x.id); }}>{x.name}{(x === q.doc.header || x === q.doc.footer) && <small> · every page</small>}</button>
              <button type="button" title={x.hidden ? "Show" : "Hide"} onClick={() => q.commit(mapSection(q.doc, x.id, (y) => ({ ...y, hidden: !y.hidden || undefined })))}>{x.hidden ? <EyeOff size={14} /> : <Eye size={14} />}</button>
            </li>
          ))}
        </ol>
      </Group>
      {s ? (
        <Group title={`Layers in “${s.name}”`}>
          <p className="qe-tip">Top of the list is in front.</p>
          <ol className="qe-layers">
            {[...s.elements].reverse().map((e) => (
              <li key={e.id} className={q.sel.ids.includes(e.id) ? "on" : ""}>
                <button type="button" className="qe-layer-name" onClick={(ev) => q.setSel({ section: s.id, ids: ev.shiftKey ? [...q.sel.ids, e.id] : [e.id] })}><em>{e.type}</em>{label(e)}</button>
                <button type="button" title="Forward" onClick={() => q.commit(restack(q.doc, s.id, [e.id], "forward"))}><ArrowUp size={13} /></button>
                <button type="button" title="Backward" onClick={() => q.commit(restack(q.doc, s.id, [e.id], "back"))}><ArrowDown size={13} /></button>
                <button type="button" title={e.locked ? "Unlock" : "Lock"} onClick={() => q.commit(mapSection(q.doc, s.id, (y) => ({ ...y, elements: y.elements.map((z) => (z.id === e.id ? { ...z, locked: !z.locked || undefined } : z)) })))}>{e.locked ? <Lock size={13} /> : <Unlock size={13} />}</button>
                <button type="button" title={e.hidden ? "Show" : "Hide"} onClick={() => q.commit(mapSection(q.doc, s.id, (y) => ({ ...y, elements: y.elements.map((z) => (z.id === e.id ? { ...z, hidden: !z.hidden || undefined } : z)) })))}>{e.hidden ? <EyeOff size={13} /> : <Eye size={13} />}</button>
              </li>
            ))}
          </ol>
        </Group>
      ) : <p className="qe-tip">Select a section to see its layers.</p>}
    </>
  );
}

// ── Pages ───────────────────────────────────────────────────────────────────────────────────────────

function PagesPanel() {
  const q = useQuilt();
  const [renaming, setRenaming] = useState<string | null>(null);
  return (
    <>
      <ol className="qe-pages">
        {q.doc.pages.map((p) => (
          <li key={p.id} className={q.page.id === p.id ? "on" : ""}>
            {renaming === p.id ? (
              <input className="qe-input" autoFocus defaultValue={p.name} onBlur={(e) => { q.commit(renamePage(q.doc, p.id, e.target.value.trim() || p.name)); setRenaming(null); }} onKeyDown={(e) => { if (e.key === "Enter") (e.target as HTMLInputElement).blur(); if (e.key === "Escape") setRenaming(null); }} />
            ) : (
              <button type="button" className="qe-page-name" onClick={() => q.setPage(p.id)} onDoubleClick={() => setRenaming(p.id)}>
                {p.slug === "index" && <HomeIcon size={13} />}<b>{p.name}</b><small>/{p.slug === "index" ? "" : p.slug}</small>
              </button>
            )}
            <span className="qe-page-acts">
              {p.slug !== "index" && <button type="button" title="Make this the home page" onClick={() => q.commit(makeHome(q.doc, p.id))}><HomeIcon size={13} /></button>}
              <button type="button" title="Duplicate" onClick={() => { const r = duplicatePage(q.doc, p.id); q.commit(r.doc); q.setPage(r.id); }}><Copy size={13} /></button>
              {q.doc.pages.length > 1 && <button type="button" title="Delete page" onClick={() => { if (confirm(`Delete the page “${p.name}”?`)) { q.commit(removePage(q.doc, p.id)); if (q.page.id === p.id) q.setPage(q.doc.pages.find((x) => x.id !== p.id)!.id); } }}><Trash2 size={13} /></button>}
            </span>
          </li>
        ))}
      </ol>
      <button type="button" className="qe-btn is-full" onClick={() => { const r = addPage(q.doc, `Page ${q.doc.pages.length + 1}`, [buildSection("hero", "center", { eyebrow: "A new page", title: "Something new", body: "Double-click any words to change them.", cta: "Back home", cta2: "Say hello" })]); q.commit(r.doc); q.setPage(r.id); q.toast("New page added. Your menu links to it automatically."); }}><Plus size={14} /> Add a page</button>
      <p className="qe-tip">Double-click a page to rename it. Menus that link to “My pages” update by themselves.</p>
      <Group title="On every page">
        <Toggle checked={!!q.doc.header} onChange={(v) => q.commit(v ? { ...q.doc, header: { ...buildSection("header", "classic", { brand: q.doc.name }), sticky: true } } : { ...q.doc, header: undefined })} label="Shared header" line="Your name and menu at the top of every page." />
        <Toggle checked={!!q.doc.footer} onChange={(v) => q.commit(v ? { ...q.doc, footer: buildSection("footer", "simple", { brand: q.doc.name, body: `© ${new Date().getFullYear()} ${q.doc.name}` }) } : { ...q.doc, footer: undefined })} label="Shared footer" line="The same footer at the bottom of every page." />
      </Group>
    </>
  );
}

export const PANELS: Record<Panel, { title: string; render: () => ReactNode }> = {
  add: { title: "Add", render: () => <AddPanel /> },
  sections: { title: "Sections", render: () => <SectionsPanel /> },
  photos: { title: "Photos", render: () => <PhotosPanel /> },
  style: { title: "Style", render: () => <StylePanel /> },
  living: { title: "Living", render: () => <LivingPanel /> },
  layers: { title: "Layers", render: () => <LayersPanel /> },
  pages: { title: "Pages", render: () => <PagesPanel /> },
};
export { ColorPick };
