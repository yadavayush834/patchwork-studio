/** Small, consistent controls for the Quilt editor's panels. */
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { ColorRef, Paint, Theme } from "../model";
import { TOKENS, isGradient } from "../model";
import { FONTS, hex, isHex, isToken, paintCss } from "../theme";

export function Field({ label, children, hint, row }: { label: string; children: ReactNode; hint?: string; row?: boolean }) {
  return (
    <label className={`qe-field${row ? " is-row" : ""}`}>
      <span className="qe-label">{label}</span>
      {children}
      {hint && <small className="qe-hint">{hint}</small>}
    </label>
  );
}

export function Group({ title, children, open = true, aside }: { title: string; children: ReactNode; open?: boolean; aside?: ReactNode }) {
  const [on, setOn] = useState(open);
  return (
    <section className={`qe-group${on ? " is-open" : ""}`}>
      <header>
        <button type="button" className="qe-group-toggle" aria-expanded={on} onClick={() => setOn(!on)}>
          <svg viewBox="0 0 12 12" aria-hidden="true"><path d="M3 4.5 6 7.5 9 4.5" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>
          {title}
        </button>
        {aside}
      </header>
      {on && <div className="qe-group-body">{children}</div>}
    </section>
  );
}

export function Slider({ value, min, max, step = 1, onChange, unit = "", onDone }: { value: number; min: number; max: number; step?: number; onChange: (v: number) => void; unit?: string; onDone?: () => void }) {
  return (
    <div className="qe-slider">
      <input type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(+e.target.value)} onPointerUp={onDone} onKeyUp={onDone} style={{ "--p": `${((value - min) / (max - min)) * 100}%` } as React.CSSProperties} />
      <NumberBox value={value} min={min} max={max} step={step} onChange={onChange} unit={unit} />
    </div>
  );
}

export function NumberBox({ value, min, max, step = 1, onChange, unit = "" }: { value: number; min: number; max: number; step?: number; onChange: (v: number) => void; unit?: string }) {
  const [draft, setDraft] = useState(String(value));
  useEffect(() => setDraft(String(Math.round(value * 100) / 100)), [value]);
  const commit = () => {
    const n = parseFloat(draft);
    if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, n)));
    else setDraft(String(value));
  };
  return (
    <span className="qe-num">
      <input inputMode="decimal" value={draft} onChange={(e) => setDraft(e.target.value)} onBlur={commit} onKeyDown={(e) => {
        if (e.key === "Enter") commit();
        if (e.key === "ArrowUp" || e.key === "ArrowDown") {
          e.preventDefault();
          onChange(Math.min(max, Math.max(min, value + (e.key === "ArrowUp" ? 1 : -1) * step * (e.shiftKey ? 10 : 1))));
        }
      }} />
      {unit && <i>{unit}</i>}
    </span>
  );
}

export function Segmented<T extends string>({ value, options, onChange, label }: { value: T; options: [T, ReactNode, string?][]; onChange: (v: T) => void; label?: string }) {
  return (
    <div className="qe-seg" role="radiogroup" aria-label={label}>
      {options.map(([v, node, title]) => (
        <button key={v} type="button" role="radio" aria-checked={value === v} title={title} className={value === v ? "on" : ""} onClick={() => onChange(v)}>
          {node}
        </button>
      ))}
    </div>
  );
}

export function Select<T extends string>({ value, options, onChange }: { value: T; options: [T, string][]; onChange: (v: T) => void }) {
  return (
    <select className="qe-select" value={value} onChange={(e) => onChange(e.target.value as T)}>
      {options.map(([v, l]) => <option key={v} value={v}>{l}</option>)}
    </select>
  );
}

export function Toggle({ checked, onChange, label, line }: { checked: boolean; onChange: (v: boolean) => void; label: string; line?: string }) {
  return (
    <label className="qe-toggle">
      <input type="checkbox" role="switch" checked={checked} onChange={(e) => onChange(e.target.checked)} />
      <i aria-hidden="true" />
      <span><b>{label}</b>{line && <small>{line}</small>}</span>
    </label>
  );
}

export function Text({ value, onChange, placeholder, multiline, max = 2000 }: { value: string; onChange: (v: string) => void; placeholder?: string; multiline?: boolean; max?: number }) {
  return multiline
    ? <textarea className="qe-input" rows={3} value={value} maxLength={max} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />
    : <input className="qe-input" value={value} maxLength={max} placeholder={placeholder} onChange={(e) => onChange(e.target.value)} />;
}

const TOKEN_NAMES: Record<string, string> = { bg: "Background", surface: "Surface", ink: "Ink", muted: "Muted", accent: "Accent", accent2: "Accent 2", accent3: "Accent 3" };

/** Theme colours first (they follow the brand kit), then any colour. */
export function ColorPick({ value, onChange, theme, allowNone, label }: { value: ColorRef | undefined; onChange: (v: ColorRef | undefined) => void; theme: Theme; allowNone?: boolean; label?: string }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    const off = (e: PointerEvent) => !ref.current?.contains(e.target as Node) && setOpen(false);
    document.addEventListener("pointerdown", off);
    return () => document.removeEventListener("pointerdown", off);
  }, [open]);
  const shown = value ? hex(value, theme) : "transparent";
  const name = !value || value === "transparent" ? "None" : isToken(value) ? TOKEN_NAMES[value.slice(1)] : value.toUpperCase();
  return (
    <div className="qe-color" ref={ref}>
      <button type="button" className="qe-color-btn" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={`${label ?? "Colour"}: ${name}`}>
        <i style={{ background: shown }} className={!value || value === "transparent" ? "is-none" : ""} />
        <span>{name}</span>
        {isToken(value) && <em>theme</em>}
      </button>
      {open && (
        <div className="qe-pop qe-color-pop" role="dialog" aria-label="Choose a colour">
          <p className="qe-pop-title">Brand colours <small>change with your style</small></p>
          <div className="qe-swatches">
            {TOKENS.map((t) => (
              <button key={t} type="button" title={TOKEN_NAMES[t]} className={value === `$${t}` ? "on" : ""} style={{ background: theme.palette[t] }} onClick={() => { onChange(`$${t}`); setOpen(false); }} />
            ))}
            {allowNone && <button type="button" title="None" className={`is-none${!value ? " on" : ""}`} onClick={() => { onChange(undefined); setOpen(false); }} />}
          </div>
          <p className="qe-pop-title">Any colour</p>
          <div className="qe-custom">
            <input type="color" value={isHex(value) ? value : hex(value ?? "$accent", theme)} onChange={(e) => onChange(e.target.value)} />
            <input className="qe-input" defaultValue={isHex(value) ? value : ""} placeholder="#ff5b3a" onKeyDown={(e) => {
              const v = (e.target as HTMLInputElement).value.trim();
              if (e.key === "Enter" && /^#[0-9a-f]{6}$/i.test(v)) { onChange(v.toLowerCase()); setOpen(false); }
            }} />
          </div>
          <div className="qe-swatches is-small">
            {["#ffffff", "#000000", "#ff5b3a", "#ffc23d", "#6fe3b5", "#7fa8ff", "#b79bff", "#f4a6c1", "#1d1a24", "#f4efe6"].map((c) => (
              <button key={c} type="button" title={c} style={{ background: c }} onClick={() => { onChange(c); setOpen(false); }} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/** A colour or a gradient. */
export function PaintPick({ value, onChange, theme }: { value: Paint; onChange: (v: Paint) => void; theme: Theme }) {
  const g = isGradient(value) ? value : null;
  return (
    <div className="qe-paint">
      <Segmented value={g ? g.kind : "solid"} label="Fill" options={[["solid", "Solid"], ["linear", "Fade"], ["radial", "Glow"], ["mesh", "Mesh"]]} onChange={(k) => {
        if (k === "solid") onChange(g ? g.stops[0] : value);
        else onChange({ kind: k, stops: g ? g.stops : [value as string, "$accent2", "$accent3"].slice(0, k === "mesh" ? 3 : 2), angle: g?.angle ?? 135 });
      }} />
      {!g && <ColorPick value={value as string} onChange={(v) => onChange(v ?? "transparent")} theme={theme} allowNone />}
      {g && (
        <>
          <div className="qe-grad-preview" style={{ background: paintCss(g).replace(/var\(--q-(\w+)\)/g, (_, t) => theme.palette[t as keyof Theme["palette"]]) }} />
          {g.stops.map((s, i) => (
            <div className="qe-stop" key={i}>
              <ColorPick value={s} theme={theme} onChange={(v) => onChange({ ...g, stops: g.stops.map((x, j) => (j === i ? v ?? "transparent" : x)) })} />
              {g.stops.length > 2 && <button type="button" className="qe-mini" onClick={() => onChange({ ...g, stops: g.stops.filter((_, j) => j !== i) })} aria-label="Remove colour">×</button>}
            </div>
          ))}
          {g.stops.length < 4 && <button type="button" className="qe-link" onClick={() => onChange({ ...g, stops: [...g.stops, "$accent"] })}>+ Add a colour</button>}
          {g.kind === "linear" && <Field label="Angle"><Slider value={g.angle ?? 135} min={0} max={360} unit="°" onChange={(a) => onChange({ ...g, angle: a })} /></Field>}
        </>
      )}
    </div>
  );
}

export function FontPick({ value, onChange, theme }: { value: string; onChange: (v: string) => void; theme: Theme }) {
  return (
    <select className="qe-select" value={value} onChange={(e) => onChange(e.target.value)}>
      <optgroup label="From your style">
        <option value="heading">Heading · {FONTS.find((f) => f.id === theme.fonts.heading)?.family}</option>
        <option value="body">Body · {FONTS.find((f) => f.id === theme.fonts.body)?.family}</option>
      </optgroup>
      <optgroup label="Any font">
        {FONTS.map((f) => <option key={f.id} value={f.id}>{f.family}</option>)}
      </optgroup>
    </select>
  );
}
