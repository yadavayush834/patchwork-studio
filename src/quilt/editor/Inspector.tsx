/** The right-hand panel: the properties of whatever is selected (element, section or the site). */
import { useState } from "react";
import { AlignLeft, AlignCenter, AlignRight, AlignStartVertical, AlignCenterVertical, AlignEndVertical, AlignHorizontalJustifyCenter, AlignVerticalJustifyCenter, Play, RefreshCw, Bold, Italic, Underline, CaseUpper, MousePointerClick } from "lucide-react";
import type { Animation, ButtonEl, El, IconEl, ImageEl, LineEl, Link, Section, ShapeEl, TextEl, WidgetEl, Paint } from "../model";
import { COL_PX, GRID, slugify } from "../model";
import { SHAPES, shapePreview } from "../library/shapes";
import { ICONS, iconSvg } from "../library/icons";
import { SEAM_DEFS, PATTERNS } from "../library/seams";
import { recipe, rearrange } from "../library/recipes";
import { WIDGETS, type FieldDef } from "../widgets";
import { align, distribute, mapSection } from "../ops";
import { anchorOf } from "../render";
import { pieceDef, pieceFields } from "../pieces";
import { useQuilt } from "./context";
import { Field, Group, Slider, Segmented, Select, Toggle, Text, ColorPick, PaintPick, FontPick, NumberBox } from "./controls";

type Tab = "design" | "motion" | "link" | "phone";

export default function Inspector() {
  const q = useQuilt();
  const els = q.selected();
  const s = q.section();
  if (els.length > 1 && s) return <Multi />;
  if (els.length === 1 && s) return <ElementInspector el={els[0]} />;
  if (s) return <SectionInspector s={s} />;
  return <SiteInspector />;
}

function Multi() {
  const q = useQuilt();
  const s = q.section()!;
  const ids = q.sel.ids;
  return (
    <div className="qe-insp">
      <h3 className="qe-insp-title">{ids.length} things selected</h3>
      <Group title="Line them up">
        <AlignRow onAlign={(how) => q.commit(align(q.doc, s.id, ids, how))} />
        <div className="qe-row">
          <button type="button" className="qe-btn" disabled={ids.length < 3} onClick={() => q.commit(distribute(q.doc, s.id, ids, "x"))}><AlignHorizontalJustifyCenter size={14} /> Space across</button>
          <button type="button" className="qe-btn" disabled={ids.length < 3} onClick={() => q.commit(distribute(q.doc, s.id, ids, "y"))}><AlignVerticalJustifyCenter size={14} /> Space down</button>
        </div>
      </Group>
      <Group title="Together">
        <Field label="See-through"><Slider value={q.selected()[0].opacity ?? 100} min={5} max={100} unit="%" onChange={(v) => q.patch((e) => ({ ...e, opacity: v === 100 ? undefined : v }), "op")} /></Field>
        <MotionFields />
        <div className="qe-row">
          <button type="button" className="qe-btn" onClick={q.duplicate}>Duplicate</button>
          <button type="button" className="qe-btn is-danger" onClick={q.remove}>Delete</button>
        </div>
      </Group>
    </div>
  );
}

function AlignRow({ onAlign }: { onAlign: (h: "left" | "center" | "right" | "top" | "middle" | "bottom") => void }) {
  return (
    <div className="qe-align">
      <button type="button" title="Left" onClick={() => onAlign("left")}><AlignLeft size={15} /></button>
      <button type="button" title="Centre" onClick={() => onAlign("center")}><AlignCenter size={15} /></button>
      <button type="button" title="Right" onClick={() => onAlign("right")}><AlignRight size={15} /></button>
      <button type="button" title="Top" onClick={() => onAlign("top")}><AlignStartVertical size={15} /></button>
      <button type="button" title="Middle" onClick={() => onAlign("middle")}><AlignCenterVertical size={15} /></button>
      <button type="button" title="Bottom" onClick={() => onAlign("bottom")}><AlignEndVertical size={15} /></button>
    </div>
  );
}

const TYPE_NAME: Record<El["type"], string> = { text: "Text", button: "Button", image: "Picture", shape: "Shape", icon: "Icon", line: "Line", widget: "Widget" };

function ElementInspector({ el }: { el: El }) {
  const q = useQuilt();
  const [tab, setTab] = useState<Tab>(q.device === "phone" ? "phone" : "design");
  const s = q.section()!;
  const name = el.type === "widget" ? WIDGETS.find((w) => w.kind === el.widget)?.name : TYPE_NAME[el.type];
  return (
    <div className="qe-insp">
      <h3 className="qe-insp-title">{name}{el.slot && <span className="qe-pill">{el.slot.replace(/^i(\d+)-/, (_, n) => `item ${+n + 1} · `)}</span>}</h3>
      <div className="qe-tabs" role="tablist">
        {(["design", "motion", "link", "phone"] as Tab[]).map((t) => <button key={t} type="button" role="tab" aria-selected={tab === t} className={tab === t ? "on" : ""} onClick={() => setTab(t)}>{{ design: "Design", motion: "Motion", link: "Link", phone: "Phone" }[t]}</button>)}
      </div>
      {tab === "design" && <>
        {el.type === "text" && <TextFields el={el} />}
        {el.type === "button" && <ButtonFields el={el} />}
        {el.type === "image" && <ImageFields el={el} />}
        {el.type === "shape" && <ShapeFields el={el} />}
        {el.type === "icon" && <IconFields el={el} />}
        {el.type === "line" && <LineFields el={el} />}
        {el.type === "widget" && <WidgetFields el={el} />}
        <Group title="Position" open={false}>
          <AlignRow onAlign={(how) => q.commit(align(q.doc, s.id, [el.id], how))} />
          <div className="qe-xywh">
            <Field label="X" row><NumberBox value={Math.round(el.frame.x * COL_PX)} min={0} max={1200} step={COL_PX} onChange={(v) => q.patch((e) => ({ ...e, frame: { ...e.frame, x: Math.min(GRID.cols - e.frame.w, Math.round(v / COL_PX)) } }))} /></Field>
            <Field label="Y" row><NumberBox value={el.frame.y * GRID.row} min={0} max={16000} step={GRID.row} onChange={(v) => q.patch((e) => ({ ...e, frame: { ...e.frame, y: Math.round(v / GRID.row) } }))} /></Field>
            <Field label="W" row><NumberBox value={Math.round(el.frame.w * COL_PX)} min={COL_PX} max={1200} step={COL_PX} onChange={(v) => q.patch((e) => ({ ...e, frame: { ...e.frame, w: Math.max(1, Math.min(GRID.cols, Math.round(v / COL_PX))) } }))} /></Field>
            <Field label="H" row><NumberBox value={el.frame.h * GRID.row} min={GRID.row} max={16000} step={GRID.row} onChange={(v) => q.patch((e) => ({ ...e, frame: { ...e.frame, h: Math.max(1, Math.round(v / GRID.row)) } }))} /></Field>
          </div>
          <Field label="Rotation"><Slider value={el.frame.r ?? 0} min={-180} max={180} unit="°" onChange={(v) => q.patch((e) => ({ ...e, frame: { ...e.frame, r: v || undefined } }), "rot")} /></Field>
          <Field label="See-through"><Slider value={el.opacity ?? 100} min={5} max={100} unit="%" onChange={(v) => q.patch((e) => ({ ...e, opacity: v === 100 ? undefined : v }), "op")} /></Field>
          <Field label="Name in layers"><Text value={el.name ?? ""} placeholder="Optional" onChange={(v) => q.patch((e) => ({ ...e, name: v || undefined }), "name")} /></Field>
        </Group>
      </>}
      {tab === "motion" && <MotionFields />}
      {tab === "link" && <LinkFields el={el} />}
      {tab === "phone" && <PhoneFields el={el} />}
    </div>
  );
}

// ── Per-type design fields ──────────────────────────────────────────────────────────────────────────

function TextFields({ el }: { el: TextEl }) {
  const q = useQuilt();
  const st = el.style;
  const set = (patch: Partial<TextEl["style"]>, key?: string) => q.patch((e) => (e.type === "text" ? { ...e, style: { ...e.style, ...patch } } : e), key);
  return (
    <>
      <Group title="Words">
        <Text multiline value={el.text} onChange={(v) => q.patch((e) => (e.type === "text" ? { ...e, text: v } : e), "text")} />
        <p className="qe-tip">Or double-click the words on the page.</p>
      </Group>
      <Group title="Type">
        <Field label="Font"><FontPick value={st.font} theme={q.doc.theme} onChange={(v) => set({ font: v })} /></Field>
        <Field label="Size"><Slider value={st.size} min={10} max={220} unit="px" onChange={(v) => set({ size: v }, "size")} /></Field>
        <div className="qe-row">
          <Segmented value={st.align ?? "left"} label="Alignment" options={[["left", <AlignLeft size={14} />, "Left"], ["center", <AlignCenter size={14} />, "Centre"], ["right", <AlignRight size={14} />, "Right"]]} onChange={(v) => set({ align: v })} />
          <div className="qe-seg">
            <button type="button" title="Bold" className={(st.weight ?? 400) >= 600 ? "on" : ""} onClick={() => set({ weight: (st.weight ?? 400) >= 600 ? 400 : 700 })}><Bold size={14} /></button>
            <button type="button" title="Italic" className={st.italic ? "on" : ""} onClick={() => set({ italic: !st.italic || undefined })}><Italic size={14} /></button>
            <button type="button" title="Underline" className={st.underline ? "on" : ""} onClick={() => set({ underline: !st.underline || undefined })}><Underline size={14} /></button>
            <button type="button" title="Capitals" className={st.upper ? "on" : ""} onClick={() => set({ upper: !st.upper || undefined })}><CaseUpper size={14} /></button>
          </div>
        </div>
        <Field label="Colour"><ColorPick value={st.color} theme={q.doc.theme} onChange={(v) => set({ color: v ?? "$ink" })} /></Field>
        <Field label="Weight"><Slider value={st.weight ?? 400} min={100} max={900} step={100} onChange={(v) => set({ weight: v }, "weight")} /></Field>
        <Field label="Line height"><Slider value={st.lineHeight ?? (st.size >= 40 ? 1.05 : 1.5)} min={0.8} max={2.4} step={0.05} onChange={(v) => set({ lineHeight: v }, "lh")} /></Field>
        <Field label="Letter spacing"><Slider value={st.tracking ?? 0} min={-0.1} max={0.4} step={0.01} unit="em" onChange={(v) => set({ tracking: v }, "tr")} /></Field>
      </Group>
      <Group title="Effects">
        <div className="qe-chips is-wrap">
          {(["none", "highlight", "scribble", "outline", "shadow", "gradient", "glow", "stamp"] as const).map((fx) => (
            <button key={fx} type="button" className={(st.effect ?? "none") === fx ? "on" : ""} onClick={() => set({ effect: fx === "none" ? undefined : fx })}>{{ none: "None", highlight: "Highlighter", scribble: "Squiggle", outline: "Outline", shadow: "Retro shadow", gradient: "Gradient", glow: "Glow", stamp: "Stamp" }[fx]}</button>
          ))}
        </div>
        {st.effect && <Field label="Effect colour"><ColorPick value={st.effectColor ?? "$accent"} theme={q.doc.theme} onChange={(v) => set({ effectColor: v })} /></Field>}
        <Field label="Card behind the words"><ColorPick value={st.background} theme={q.doc.theme} allowNone onChange={(v) => set({ background: v })} /></Field>
        {st.background && <Field label="Padding"><Slider value={st.pad ?? 18} min={0} max={80} unit="px" onChange={(v) => set({ pad: v }, "pad")} /></Field>}
      </Group>
    </>
  );
}

function ButtonFields({ el }: { el: ButtonEl }) {
  const q = useQuilt();
  const set = (patch: Partial<ButtonEl["style"]>, key?: string) => q.patch((e) => (e.type === "button" ? { ...e, style: { ...e.style, ...patch } } : e), key);
  return (
    <Group title="Button">
      <Field label="Label"><Text value={el.label} max={120} onChange={(v) => q.patch((e) => (e.type === "button" ? { ...e, label: v } : e), "label")} /></Field>
      <div className="qe-chips is-wrap">
        {(["solid", "outline", "soft", "pill", "sticker", "link", "underline"] as const).map((v) => <button key={v} type="button" className={el.style.variant === v ? "on" : ""} onClick={() => set({ variant: v })}>{v[0].toUpperCase() + v.slice(1)}</button>)}
      </div>
      <Field label="Colour"><ColorPick value={el.style.color} theme={q.doc.theme} onChange={(v) => set({ color: v ?? "$accent" })} /></Field>
      <Field label="Text colour"><ColorPick value={el.style.text} theme={q.doc.theme} allowNone onChange={(v) => set({ text: v })} /></Field>
      <Field label="Size"><Segmented value={el.style.size} options={[["s", "Small"], ["m", "Medium"], ["l", "Large"]]} onChange={(v) => set({ size: v })} /></Field>
      <Field label="Icon"><Select value={el.style.icon ?? "none"} options={[["none", "None"], ["arrow", "Arrow"], ["arrow-up-right", "Arrow out"], ["plus", "Plus"], ["heart", "Heart"], ["mail", "Mail"], ["play", "Play"], ["download", "Download"], ["star", "Star"]]} onChange={(v) => set({ icon: v })} /></Field>
      <Field label="Corners"><Slider value={el.style.radius ?? q.doc.theme.radius} min={0} max={40} unit="px" onChange={(v) => set({ radius: v }, "br")} /></Field>
      <Field label="Font"><FontPick value={el.style.font ?? "body"} theme={q.doc.theme} onChange={(v) => set({ font: v })} /></Field>
      <Toggle checked={!!el.style.full} onChange={(v) => set({ full: v || undefined })} label="Full width on phones" />
    </Group>
  );
}

function ImageFields({ el }: { el: ImageEl }) {
  const q = useQuilt();
  const set = (patch: Partial<ImageEl>, key?: string) => q.patch((e) => (e.type === "image" ? { ...e, ...patch } : e), key);
  return (
    <>
      <Group title="Picture">
        <div className="qe-img-now"><img src={q.assetUrl(el.src)} alt="" /><button type="button" className="qe-btn" onClick={() => q.setPanel("photos")}>Replace</button></div>
        <Field label="Describe it (for screen readers)" hint="Leave empty if it's only decoration."><Text value={el.alt} onChange={(v) => set({ alt: v }, "alt")} /></Field>
        <Field label="Fit"><Segmented value={el.fit ?? "cover"} options={[["cover", "Fill the box"], ["contain", "Show it all"]]} onChange={(v) => set({ fit: v })} /></Field>
        <Field label="Focus across"><Slider value={el.focus?.x ?? 50} min={0} max={100} unit="%" onChange={(v) => set({ focus: { x: v, y: el.focus?.y ?? 50 } }, "fx")} /></Field>
        <Field label="Focus down"><Slider value={el.focus?.y ?? 50} min={0} max={100} unit="%" onChange={(v) => set({ focus: { x: el.focus?.x ?? 50, y: v } }, "fy")} /></Field>
      </Group>
      <Group title="Shape">
        <div className="qe-chips is-wrap">
          {(["none", "circle", "arch", "pill", "blob", "flower", "scallop", "hexagon", "diamond", "stamp"] as const).map((m) => <button key={m} type="button" className={(el.mask ?? "none") === m ? "on" : ""} onClick={() => set({ mask: m === "none" ? undefined : m })}>{{ none: "Rectangle", circle: "Circle", arch: "Arch", pill: "Pill", blob: "Blob", flower: "Flower", scallop: "Badge", hexagon: "Hexagon", diamond: "Diamond", stamp: "Postage stamp" }[m]}</button>)}
        </div>
        {(!el.mask || el.mask === "none" || el.mask === "arch") && <Field label="Corners"><Slider value={el.radius ?? q.doc.theme.radius} min={0} max={200} unit="px" onChange={(v) => set({ radius: v }, "ir")} /></Field>}
      </Group>
      <Group title="Frame">
        <div className="qe-chips is-wrap">
          {(["none", "polaroid", "tape", "shadow", "border", "stack"] as const).map((f) => <button key={f} type="button" className={(el.frameStyle ?? "none") === f ? "on" : ""} onClick={() => set({ frameStyle: f === "none" ? undefined : f })}>{{ none: "None", polaroid: "Polaroid", tape: "Taped", shadow: "Shadow", border: "Border", stack: "Paper stack" }[f]}</button>)}
        </div>
        {el.frameStyle === "polaroid" && <Field label="Handwritten caption"><Text value={el.caption ?? ""} max={60} onChange={(v) => set({ caption: v || undefined }, "cap")} /></Field>}
      </Group>
      <Group title="Filter">
        <div className="qe-chips is-wrap">
          {(["none", "warm", "cool", "fade", "vivid", "mono", "sepia", "duotone"] as const).map((f) => <button key={f} type="button" className={(el.filter ?? "none") === f ? "on" : ""} onClick={() => set({ filter: f === "none" ? undefined : f })}>{f === "none" ? "Original" : f[0].toUpperCase() + f.slice(1)}</button>)}
        </div>
        {el.filter === "duotone" && <div className="qe-row"><ColorPick value={el.tone?.[0] ?? "$ink"} theme={q.doc.theme} onChange={(v) => set({ tone: [v ?? "$ink", el.tone?.[1] ?? "$accent3"] })} /><ColorPick value={el.tone?.[1] ?? "$accent3"} theme={q.doc.theme} onChange={(v) => set({ tone: [el.tone?.[0] ?? "$ink", v ?? "$accent3"] })} /></div>}
      </Group>
    </>
  );
}

function ShapeFields({ el }: { el: ShapeEl }) {
  const q = useQuilt();
  const set = (patch: Partial<ShapeEl>, key?: string) => q.patch((e) => (e.type === "shape" ? { ...e, ...patch } : e), key);
  return (
    <>
      <Group title="Fill">
        <PaintPick value={el.fill} theme={q.doc.theme} onChange={(v: Paint) => set({ fill: v })} />
        {el.shape === "rect" && <Field label="Corners"><Slider value={el.radius ?? 0} min={0} max={200} unit="px" onChange={(v) => set({ radius: v }, "r")} /></Field>}
        {el.shape === "rect" && <Field label="Outline"><ColorPick value={el.stroke?.color} theme={q.doc.theme} allowNone onChange={(v) => set({ stroke: v ? { color: v, width: el.stroke?.width ?? 2, dash: el.stroke?.dash } : undefined })} /></Field>}
        {el.stroke && <div className="qe-row"><Slider value={el.stroke.width} min={1} max={20} unit="px" onChange={(v) => set({ stroke: { ...el.stroke!, width: v } }, "sw")} /><Toggle checked={!!el.stroke.dash} onChange={(v) => set({ stroke: { ...el.stroke!, dash: v || undefined } })} label="Stitched" /></div>}
        <p className="qe-tip">A rectangle, pill or blob behind other things becomes their card: on phones they travel together.</p>
      </Group>
      <Group title="Shape">
        <div className="qe-grid6">
          {SHAPES.map((sh) => <button key={sh.id} type="button" title={sh.name} className={`qe-tile${el.shape === sh.id ? " on" : ""}`} onClick={() => set({ shape: sh.id })}><span className="qe-shape-prev" dangerouslySetInnerHTML={{ __html: shapePreview(sh.id) }} /></button>)}
        </div>
      </Group>
    </>
  );
}

function IconFields({ el }: { el: IconEl }) {
  const q = useQuilt();
  const set = (patch: Partial<IconEl>, key?: string) => q.patch((e) => (e.type === "icon" ? { ...e, ...patch } : e), key);
  return (
    <>
      <Group title="Icon">
        <Field label="Colour"><ColorPick value={el.color} theme={q.doc.theme} onChange={(v) => set({ color: v ?? "$accent" })} /></Field>
        <Field label="Circle behind"><ColorPick value={el.chip} theme={q.doc.theme} allowNone onChange={(v) => set({ chip: v })} /></Field>
        <Field label="Line weight"><Slider value={el.stroke ?? 1.8} min={0.8} max={3.5} step={0.1} onChange={(v) => set({ stroke: v }, "st")} /></Field>
      </Group>
      <Group title="Choose">
        <div className="qe-grid6">
          {Object.entries(ICONS).map(([id, ic]) => <button key={id} type="button" title={ic.name} className={`qe-tile${el.icon === id ? " on" : ""}`} onClick={() => set({ icon: id })}><span className="qe-icon-prev" dangerouslySetInnerHTML={{ __html: iconSvg(id) }} /></button>)}
        </div>
      </Group>
    </>
  );
}

function LineFields({ el }: { el: LineEl }) {
  const q = useQuilt();
  const set = (patch: Partial<LineEl>, key?: string) => q.patch((e) => (e.type === "line" ? { ...e, ...patch } : e), key);
  return (
    <Group title="Line">
      <div className="qe-chips is-wrap">{(["solid", "dashed", "dotted", "stitch", "wave", "zigzag", "double"] as const).map((v) => <button key={v} type="button" className={el.style === v ? "on" : ""} onClick={() => set({ style: v })}>{v[0].toUpperCase() + v.slice(1)}</button>)}</div>
      <Field label="Colour"><ColorPick value={el.color} theme={q.doc.theme} onChange={(v) => set({ color: v ?? "$ink" })} /></Field>
      <Field label="Weight"><Slider value={el.weight} min={1} max={16} unit="px" onChange={(v) => set({ weight: v }, "lw")} /></Field>
    </Group>
  );
}

/** Widgets describe their own fields; this turns the description into controls. */
function WidgetFields({ el }: { el: WidgetEl }) {
  const q = useQuilt();
  const def = WIDGETS.find((w) => w.kind === el.widget);
  if (!def) return null;
  const setProp = (k: string, v: unknown, key?: string) => q.patch((e) => (e.type === "widget" ? { ...e, props: { ...e.props, [k]: v } } : e), key);
  return (
    <>
      <Group title={def.name}>
        <p className="qe-tip">{def.line}</p>
        {def.fields.map((f) => <FieldControl key={f.key} f={f} value={el.props[f.key]} onChange={(v, key) => setProp(f.key, v, key)} />)}
        {el.widget === "video" && <button type="button" className="qe-btn" onClick={() => q.setPanel("photos")}>Choose a video</button>}
        {el.widget === "form" && !String(el.props.action ?? "").trim() && <p className="qe-warn">Add an email address or form service so messages reach you. Until then the form only says thank you.</p>}
      </Group>
      <Group title="Colours">
        <Field label="Text"><ColorPick value={el.color} theme={q.doc.theme} allowNone onChange={(v) => q.patch((e) => ({ ...e, color: v }) as El)} /></Field>
        <Field label="Accent"><ColorPick value={el.accent} theme={q.doc.theme} allowNone onChange={(v) => q.patch((e) => ({ ...e, accent: v }) as El)} /></Field>
      </Group>
    </>
  );
}

function FieldControl({ f, value, onChange }: { f: FieldDef; value: unknown; onChange: (v: unknown, key?: string) => void }) {
  switch (f.kind) {
    case "text": case "url":
      return <Field label={f.label}><Text value={String(value ?? "")} placeholder={"placeholder" in f ? f.placeholder : undefined} max={f.max} onChange={(v) => onChange(v, f.key)} /></Field>;
    case "textarea":
      return <Field label={f.label}><Text multiline value={String(value ?? "")} max={f.max} onChange={(v) => onChange(v, f.key)} /></Field>;
    case "datetime":
      return <Field label={f.label}><input className="qe-input" type="datetime-local" value={String(value ?? "")} onChange={(e) => onChange(e.target.value)} /></Field>;
    case "number":
      return <Field label={f.label}><Slider value={typeof value === "number" ? value : f.min} min={f.min} max={f.max} step={f.step} onChange={(v) => onChange(v, f.key)} /></Field>;
    case "toggle":
      return <Toggle checked={!!value} label={f.label} onChange={(v) => onChange(v)} />;
    case "select":
      return <Field label={f.label}><Select value={String(value ?? f.options[0][0])} options={f.options} onChange={(v) => onChange(v)} /></Field>;
    case "list": {
      const items = (Array.isArray(value) ? value : []).map((x) => (typeof x === "string" ? { text: x } : x)) as Record<string, unknown>[];
      return (
        <div className="qe-list-field">
          <span className="qe-label">{f.label}</span>
          {items.map((it, i) => (
            <div key={i} className="qe-list-item">
              <div className="qe-list-head"><b>{f.itemLabel} {i + 1}</b>
                <span>
                  <button type="button" disabled={i === 0} onClick={() => { const n = [...items]; [n[i - 1], n[i]] = [n[i], n[i - 1]]; onChange(n); }} aria-label="Move up">↑</button>
                  <button type="button" onClick={() => onChange(items.filter((_, j) => j !== i))} aria-label="Remove">×</button>
                </span>
              </div>
              {f.item.map((sub) => <FieldControl key={sub.key} f={sub} value={it[sub.key]} onChange={(v, key) => onChange(items.map((x, j) => (j === i ? { ...x, [sub.key]: v } : x)), key ? `${f.key}-${i}-${key}` : undefined)} />)}
            </div>
          ))}
          {items.length < f.max && <button type="button" className="qe-link" onClick={() => onChange([...items, structuredClone(f.blank)])}>+ Add {f.itemLabel.toLowerCase()}</button>}
        </div>
      );
    }
  }
}

// ── Motion, links, phones ───────────────────────────────────────────────────────────────────────────

const ENTERS: [NonNullable<Animation["enter"]>, string][] = [["none", "None"], ["fade", "Fade"], ["rise", "Rise"], ["drop", "Drop"], ["slide-right", "From left"], ["slide-left", "From right"], ["pop", "Pop"], ["zoom", "Zoom out"], ["blur", "Focus"], ["wipe", "Wipe up"], ["stitch", "Stitch in"], ["typewriter", "Typewriter"], ["spin-in", "Spin in"]];

function MotionFields() {
  const q = useQuilt();
  const a = q.selected()[0]?.anim ?? {};
  const set = (patch: Partial<Animation>, key?: string) => q.patch((e) => ({ ...e, anim: clean({ ...e.anim, ...patch }) }), key);
  return (
    <>
      <Group title="Entrance" aside={<button type="button" className="qe-mini-btn" onClick={q.play}><Play size={12} /> Play</button>}>
        <div className="qe-chips is-wrap">{ENTERS.map(([v, l]) => <button key={v} type="button" className={(a.enter ?? "none") === v ? "on" : ""} onClick={() => { set({ enter: v === "none" ? undefined : v }); if (v !== "none") setTimeout(q.play, 30); }}>{l}</button>)}</div>
        {a.enter && <>
          <Field label="Wait before"><Slider value={a.delay ?? 0} min={0} max={3} step={0.05} unit="s" onChange={(v) => set({ delay: v || undefined }, "delay")} /></Field>
          <Field label="Takes"><Slider value={a.duration ?? 0.9} min={0.2} max={3} step={0.05} unit="s" onChange={(v) => set({ duration: v }, "dur")} /></Field>
        </>}
      </Group>
      <Group title="Keeps moving">
        <div className="qe-chips is-wrap">{(["none", "float", "bounce", "pulse", "wiggle", "sway", "spin"] as const).map((v) => <button key={v} type="button" className={(a.loop ?? "none") === v ? "on" : ""} onClick={() => set({ loop: v === "none" ? undefined : v })}>{v === "none" ? "Still" : v[0].toUpperCase() + v.slice(1)}</button>)}</div>
      </Group>
      <Group title="When someone points at it">
        <div className="qe-chips is-wrap">{(["none", "lift", "grow", "tilt", "glow", "shake"] as const).map((v) => <button key={v} type="button" className={(a.hover ?? "none") === v ? "on" : ""} onClick={() => set({ hover: v === "none" ? undefined : v })}>{v === "none" ? "Nothing" : v[0].toUpperCase() + v.slice(1)}</button>)}</div>
      </Group>
      <Group title="Depth while scrolling">
        <Field label="Parallax" hint="Positive drifts slower than the page, negative faster."><Slider value={a.parallax ?? 0} min={-1} max={1} step={0.05} onChange={(v) => set({ parallax: v || undefined }, "px")} /></Field>
      </Group>
    </>
  );
}
const clean = (a: Animation): Animation | undefined => {
  const out = Object.fromEntries(Object.entries(a).filter(([, v]) => v !== undefined)) as Animation;
  return Object.keys(out).length ? out : undefined;
};

function LinkFields({ el }: { el: El }) {
  const q = useQuilt();
  const l = el.link;
  const set = (link: Link | undefined) => q.patch((e) => ({ ...e, link }), "link");
  const sections = q.page.sections.map((s) => [anchorOf(s), s.name] as [string, string]);
  return (
    <Group title="When clicked, go to">
      <Segmented value={l?.kind ?? "none"} options={[["none", "Nowhere"], ["page", "Page"], ["section", "Section"], ["url", "Website"], ["email", "Email"], ["phone", "Phone"]] as [string, string][]} onChange={(k) => set(k === "none" ? undefined : { kind: k as Link["kind"], value: k === "page" ? q.doc.pages[0].id : k === "section" ? sections[0]?.[0] ?? "" : "" })} />
      {l?.kind === "page" && <Field label="Page"><Select value={l.value} options={q.doc.pages.map((p) => [p.id, p.name])} onChange={(v) => set({ ...l, value: v })} /></Field>}
      {l?.kind === "section" && <Field label="Section on this page"><Select value={sections.some(([a]) => a === l.value) ? l.value : ""} options={[["", sections.length ? "Choose a section…" : "No sections yet"], ...sections]} onChange={(v) => set({ ...l, value: v })} /></Field>}
      {l?.kind === "url" && <><Field label="Address"><Text value={l.value} placeholder="https://…" onChange={(v) => set({ ...l, value: v })} /></Field><Toggle checked={!!l.newTab} onChange={(v) => set({ ...l, newTab: v || undefined })} label="Open in a new tab" /></>}
      {l?.kind === "email" && <Field label="Email address"><Text value={l.value} placeholder="you@example.com" onChange={(v) => set({ ...l, value: v })} /></Field>}
      {l?.kind === "phone" && <Field label="Phone number"><Text value={l.value} placeholder="+44 …" onChange={(v) => set({ ...l, value: v })} /></Field>}
      {el.type === "button" && !l && <p className="qe-warn">This button doesn't go anywhere yet.</p>}
    </Group>
  );
}

function PhoneFields({ el }: { el: El }) {
  const q = useQuilt();
  const p = el.phone ?? {};
  const set = (patch: Partial<NonNullable<El["phone"]>>, key?: string) => q.patch((e) => ({ ...e, phone: Object.fromEntries(Object.entries({ ...e.phone, ...patch }).filter(([, v]) => v !== undefined)) }), key);
  const s = q.section()!;
  return (
    <>
      <p className="qe-tip">Phones get one tidy column, in the order people read your desktop layout. Fine-tune it here; switch to the phone view at the top to see it.</p>
      <Group title="On phones">
        <Toggle checked={!!p.hide} onChange={(v) => set({ hide: v || undefined })} label="Hide on phones" />
        <Toggle checked={!!el.hideDesktop} onChange={(v) => q.patch((e) => ({ ...e, hideDesktop: v || undefined }))} label="Only show on phones" />
        {(el.type === "shape" || el.type === "icon") && <Toggle checked={p.float ?? el.type === "shape"} onChange={(v) => set({ float: v })} label="Float as decoration" line="Stays in its corner instead of joining the column." />}
        <Field label="Order in the column"><div className="qe-row">
          <button type="button" className="qe-btn" onClick={() => set({ order: (p.order ?? orderOf(s, el)) - 1.5 })}>Earlier</button>
          <button type="button" className="qe-btn" onClick={() => set({ order: (p.order ?? orderOf(s, el)) + 1.5 })}>Later</button>
          {p.order !== undefined && <button type="button" className="qe-link" onClick={() => set({ order: undefined })}>Reset</button>}
        </div></Field>
        {el.type === "text" && <Field label="Text size on phones"><Slider value={Math.round((p.scale ?? 0) * 100)} min={0} max={120} unit="%" onChange={(v) => set({ scale: v ? v / 100 : undefined }, "ps")} /></Field>}
        {el.type === "text" && !p.scale && <p className="qe-tip">At 0% Patchwork picks a size for you: big headings shrink more than body text.</p>}
      </Group>
    </>
  );
}
function orderOf(s: Section, el: El) {
  return s.elements.indexOf(el);
}

// ── Sections ────────────────────────────────────────────────────────────────────────────────────────

function SectionInspector({ s }: { s: Section }) {
  const q = useQuilt();
  const set = (fn: (x: Section) => Section, key?: string) => q.patchSection(fn, key);
  const bg = s.bg;
  const r = s.kind ? recipe(s.kind) : undefined;
  const [tab, setTab] = useState<"look" | "phone">(q.device === "phone" ? "phone" : "look");
  return (
    <div className="qe-insp">
      <h3 className="qe-insp-title">Section{s.kind && <span className="qe-pill">{r?.name ?? s.kind}</span>}</h3>
      <div className="qe-tabs" role="tablist">
        <button type="button" role="tab" aria-selected={tab === "look"} className={tab === "look" ? "on" : ""} onClick={() => setTab("look")}>Design</button>
        <button type="button" role="tab" aria-selected={tab === "phone"} className={tab === "phone" ? "on" : ""} onClick={() => setTab("phone")}>Phone</button>
      </div>
      {tab === "look" && <>
        <Field label="Name"><Text value={s.name} max={60} onChange={(v) => set((x) => ({ ...x, name: v }), "sname")} /></Field>
        {s.piece && <PieceFields s={s} />}
        {r && r.layouts.length > 1 && (
          <Group title="Rearrange" aside={<button type="button" className="qe-mini-btn" onClick={() => q.commit(mapSection(q.doc, s.id, (x) => rearrange(x)))}><RefreshCw size={12} /> Next</button>}>
            <p className="qe-tip">Same words and pictures, a different layout.</p>
            <div className="qe-chips is-wrap">{r.layouts.map((l) => <button key={l.id} type="button" className={s.layout === l.id ? "on" : ""} onClick={() => q.commit(mapSection(q.doc, s.id, (x) => rearrange(x, l.id)))}>{l.name}</button>)}</div>
          </Group>
        )}
        <Group title="Background">
          <PaintPick value={bg.fill} theme={q.doc.theme} onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, fill: v } }))} />
          <Field label="Picture">
            {bg.image ? <div className="qe-img-now"><img src={q.assetUrl(bg.image)} alt="" /><button type="button" className="qe-btn" onClick={() => q.setPanel("photos")}>Change</button><button type="button" className="qe-btn" onClick={() => set((x) => ({ ...x, bg: { ...x.bg, image: undefined } }))}>Remove</button></div>
              : <button type="button" className="qe-btn" onClick={() => { q.setPanel("photos"); q.toast("Use the small picture button on a photo to set it as the background."); }}>Choose a picture</button>}
          </Field>
          {bg.image && <Field label="Picture fit"><Segmented value={bg.imageFit ?? "cover"} options={[["cover", "Fill"], ["contain", "Fit"], ["tile", "Tile"]]} onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, imageFit: v } }))} /></Field>}
          {(bg.image || bg.scene) && <>
            <Field label="Colour wash"><Slider value={bg.dim ?? 0} min={0} max={95} unit="%" onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, dim: v } }), "dim")} /></Field>
            <Field label="Wash colour"><ColorPick value={bg.dimColor ?? "$ink"} theme={q.doc.theme} onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, dimColor: v } }))} /></Field>
          </>}
          {bg.scene ? <p className="qe-tip">A living scene plays behind this section. <button type="button" className="qe-link" onClick={() => q.setPanel("living")}>Change it</button></p> : <button type="button" className="qe-link" onClick={() => q.setPanel("living")}>Put a living scene behind it →</button>}
        </Group>
        <Group title="Pattern">
          <div className="qe-chips is-wrap">{PATTERNS.map((p) => <button key={p.id} type="button" className={(bg.pattern ?? "none") === p.id ? "on" : ""} onClick={() => set((x) => ({ ...x, bg: { ...x.bg, pattern: p.id === "none" ? undefined : p.id, patternOpacity: undefined } }))}>{p.name}</button>)}</div>
          {bg.pattern && <>
            <Field label="Pattern colour"><ColorPick value={bg.patternColor ?? "$ink"} theme={q.doc.theme} onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, patternColor: v } }))} /></Field>
            <Field label="Strength"><Slider value={bg.patternOpacity ?? PATTERNS.find((p) => p.id === bg.pattern)!.opacity} min={2} max={100} unit="%" onChange={(v) => set((x) => ({ ...x, bg: { ...x.bg, patternOpacity: v } }), "po")} /></Field>
          </>}
        </Group>
        <Group title="Bottom edge">
          <p className="qe-tip">The seam between this section and the next. Whatever comes next shows through.</p>
          <div className="qe-seams">{SEAM_DEFS.map((d) => <button key={d.id} type="button" className={(s.seam?.shape ?? "none") === d.id ? "on" : ""} onClick={() => set((x) => ({ ...x, seam: d.id === "none" ? undefined : { shape: d.id, thread: x.seam?.thread } }))}><SeamIcon id={d.id} />{d.name}</button>)}</div>
          {s.seam && s.seam.shape !== "stitch" && <>
            <Field label="Depth"><Slider value={s.seam.depth ?? SEAM_DEFS.find((d) => d.id === s.seam!.shape)!.depth} min={8} max={140} unit="px" onChange={(v) => set((x) => ({ ...x, seam: { ...x.seam!, depth: v } }), "sd")} /></Field>
            {(s.seam.shape === "curve" || s.seam.shape === "slant") && <Toggle checked={!!s.seam.flip} onChange={(v) => set((x) => ({ ...x, seam: { ...x.seam!, flip: v || undefined } }))} label="Flip" />}
          </>}
          {s.seam && <Field label="Running stitch"><ColorPick value={s.seam.thread} theme={q.doc.theme} allowNone onChange={(v) => set((x) => ({ ...x, seam: { ...x.seam!, thread: v } }))} /></Field>}
        </Group>
        <Group title="Size">
          <Field label="Height"><Slider value={s.rows * GRID.row} min={64} max={2400} step={8} unit="px" onChange={(v) => set((x) => ({ ...x, rows: Math.max(Math.round(v / GRID.row), 4) }), "rows")} /></Field>
          <Toggle checked={!!s.fullscreen} onChange={(v) => set((x) => ({ ...x, fullscreen: v || undefined }))} label="Fill the screen" line="As tall as the visitor's window." />
          {(s.kind === "header" || q.doc.header?.id === s.id) && <Toggle checked={!!s.sticky} onChange={(v) => set((x) => ({ ...x, sticky: v || undefined }))} label="Stay at the top while scrolling" />}
        </Group>
        <Group title="Advanced" open={false}>
          <Field label="Link name (#)" hint="Used by menus and buttons that jump here."><Text value={s.anchor ?? slugify(s.name)} max={40} onChange={(v) => set((x) => ({ ...x, anchor: v.replace(/[^\w-]/g, "") || undefined }), "anchor")} /></Field>
          <Toggle checked={!!s.hidden} onChange={(v) => set((x) => ({ ...x, hidden: v || undefined }))} label="Hide this section" line="Kept in your project, left out of the site." />
        </Group>
      </>}
      {tab === "phone" && <Group title="On phones">
        <p className="qe-tip">Everything stacks into one column. Set the breathing room here and the order on each element.</p>
        <Field label="Space above and below"><Slider value={s.phone?.pad ?? 56} min={0} max={160} unit="px" onChange={(v) => set((x) => ({ ...x, phone: { ...x.phone, pad: v } }), "ppad")} /></Field>
        <Field label="Space between things"><Slider value={s.phone?.gap ?? 14} min={0} max={60} unit="px" onChange={(v) => set((x) => ({ ...x, phone: { ...x.phone, gap: v } }), "pgap")} /></Field>
        <Field label="Line up"><Segmented value={s.phone?.align ?? "auto"} options={[["auto", "Automatic"], ["start", "Left"], ["center", "Centre"]]} onChange={(v) => set((x) => ({ ...x, phone: { ...x.phone, align: v === "auto" ? undefined : v } }))} /></Field>
      </Group>}
    </div>
  );
}

/** The words and options of a Patchwork hero or scene used as this section. */
function PieceFields({ s }: { s: Section }) {
  const q = useQuilt();
  const p = s.piece!;
  const def = pieceDef(p);
  const setPiece = (patch: Partial<NonNullable<Section["piece"]>>, key?: string) => q.patchSection((x) => ({ ...x, piece: { ...x.piece!, ...patch } }), key);
  const l = p.link;
  const sections = q.page.sections.filter((x) => x.id !== s.id).map((x) => [anchorOf(x), x.name] as [string, string]);
  return (
    <>
      <Group title={def?.name ?? "Hero"} aside={<button type="button" className="qe-mini-btn" onClick={() => { q.setPanel("sections"); }}>Swap</button>}>
        <p className="qe-tip">{def?.technique}. {p.kind === "scene" ? "A living scene" : "A Patchwork hero"} with your words in it. It plays live in the preview and in your download.</p>
        {pieceFields(p.kind).map((f) => (
          <FieldControl key={f.key} f={f} value={f.kind === "select" ? String(p.config[f.key] ?? "") : p.config[f.key]} onChange={(v, key) => setPiece({ config: { ...p.config, [f.key]: f.key === "pixel" ? Number(v) : (v as string | number | boolean) } }, key ? `piece-${key}` : undefined)} />
        ))}
        {p.kind === "classic" && <Field label="Accent"><input type="color" className="qe-colorwell" value={String(p.config.accent ?? "#795be6")} onChange={(e) => setPiece({ config: { ...p.config, accent: e.target.value } }, "piece-accent")} /></Field>}
      </Group>
      <Group title="Main button goes to">
        <Segmented value={l?.kind ?? "section"} options={[["section", "Section"], ["page", "Page"], ["url", "Website"], ["email", "Email"]]} onChange={(k) => setPiece({ link: { kind: k as Link["kind"], value: k === "page" ? q.doc.pages[0].id : k === "section" ? sections[0]?.[0] ?? "" : "" } })} />
        {l?.kind === "section" && <Select value={l.value} options={sections.length ? sections : [["", "No other sections yet"]]} onChange={(v) => setPiece({ link: { ...l, value: v } })} />}
        {l?.kind === "page" && <Select value={l.value} options={q.doc.pages.map((x) => [x.id, x.name])} onChange={(v) => setPiece({ link: { ...l, value: v } })} />}
        {(l?.kind === "url" || l?.kind === "email") && <Text value={l.value} placeholder={l.kind === "url" ? "https://…" : "you@example.com"} onChange={(v) => setPiece({ link: { ...l, value: v } }, "piece-link")} />}
        {p.kind !== "classic" && <Toggle checked={!!p.hideNav} onChange={(v) => setPiece({ hideNav: v || undefined })} label="Hide its own menu" line="Use this when your site has a shared header." />}
      </Group>
      <button type="button" className="qe-link" onClick={() => q.patchSection((x) => ({ ...x, piece: undefined, kind: undefined, bg: { fill: "$bg" } }))}>Turn into an empty section</button>
    </>
  );
}

function SeamIcon({ id }: { id: string }) {
  const d: Record<string, string> = {
    none: "M2 10h28", stitch: "M2 10h4M9 10h4M16 10h4M23 10h4", wave: "M2 8c4 0 4 4 8 4s4-4 8-4 4 4 8 4 4-4 4-4", zigzag: "M2 7l4 5 4-5 4 5 4-5 4 5 4-5 4 5", scallop: "M2 7a3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0 3.5 3.5 0 0 0 7 0",
    torn: "M2 8l3 3 3-2 3 3 3-3 3 2 3-3 3 3 3-2 3 2", steps: "M2 7h7v5h7V7h7v5h7", drip: "M2 7h6c2 0 2 6 4 6s2-6 4-6h6c1 0 1 3 3 3s2-3 3-3", curve: "M2 6q14 12 28 0", slant: "M2 5l28 8",
  };
  return <svg viewBox="0 0 32 16" aria-hidden="true"><path d={d[id] ?? d.none} fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>;
}

// ── The site (nothing selected) ─────────────────────────────────────────────────────────────────────

function SiteInspector() {
  const q = useQuilt();
  const p = q.page;
  const setPage = (patch: Partial<typeof p>) => q.commit({ ...q.doc, pages: q.doc.pages.map((x) => (x.id === p.id ? { ...x, ...patch } : x)) }, `page-${Object.keys(patch)[0]}`);
  return (
    <div className="qe-insp">
      <div className="qe-empty">
        <span className="qe-empty-icon"><MousePointerClick size={20} /></span>
        <b>Nothing selected</b>
        <p>Click a section or anything on the page to change it. Press <kbd>Ctrl</kbd> <kbd>K</kbd> to do anything by typing.</p>
      </div>
      <h3 className="qe-insp-title">Site settings</h3>
      <Field label="Site name"><Text value={q.doc.name} max={120} onChange={(v) => q.commit({ ...q.doc, name: v }, "site-name")} /></Field>
      <Group title={`This page: ${p.name}`}>
        <Field label="Title in search results" hint="Leave empty to use the page and site name."><Text value={p.title ?? ""} max={120} placeholder={p.slug === "index" ? q.doc.name : `${p.name} · ${q.doc.name}`} onChange={(v) => setPage({ title: v || undefined })} /></Field>
        <Field label="Description" hint="One or two sentences for search engines and link previews."><Text multiline value={p.description ?? ""} max={300} onChange={(v) => setPage({ description: v || undefined })} /></Field>
      </Group>
      <Group title="Language" open={false}>
        <Field label="Language code"><Text value={q.doc.settings.lang ?? "en"} max={12} onChange={(v) => q.commit({ ...q.doc, settings: { ...q.doc.settings, lang: v.replace(/[^\w-]/g, "") || undefined } }, "lang")} /></Field>
      </Group>

    </div>
  );
}
