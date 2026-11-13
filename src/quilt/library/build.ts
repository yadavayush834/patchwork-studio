/** Small constructors for elements, used by recipes, templates and the editor's Add panel. */
import type { ButtonEl, ColorRef, El, IconEl, ImageEl, LineEl, Paint, ShapeEl, TextEl, TextRole, TextStyle, WidgetEl, WidgetKind } from "../model";
import { uid } from "../model";
import { widget } from "../widgets";

export const ROLE: Record<TextRole, Pick<TextStyle, "size" | "font"> & Partial<TextStyle>> = {
  display: { size: 88, font: "heading" },
  h1: { size: 64, font: "heading" },
  h2: { size: 46, font: "heading" },
  h3: { size: 24, font: "heading", weight: 600 },
  body: { size: 18, font: "body" },
  small: { size: 15, font: "body" },
  label: { size: 13, font: "body", weight: 600 },
  quote: { size: 34, font: "heading" },
};

type F = [x: number, y: number, w: number, h: number, r?: number];
const frame = ([x, y, w, h, r]: F) => ({ x, y, w, h, ...(r ? { r } : {}) });

export function text(slot: string | undefined, value: string, f: F, role: TextRole, s: Partial<TextStyle> = {}): TextEl {
  return { id: uid(), type: "text", slot, text: value, frame: frame(f), style: { role, color: role === "label" || role === "small" ? "$muted" : "$ink", ...ROLE[role], ...s } };
}
export function button(slot: string | undefined, label: string, f: F, variant: ButtonEl["style"]["variant"] = "solid", color: ColorRef = "$accent", more: Partial<ButtonEl["style"]> = {}, href = "#"): ButtonEl {
  return { id: uid(), type: "button", slot, label, frame: frame(f), style: { variant, color, size: "m", icon: variant === "solid" || variant === "pill" || variant === "sticker" ? "arrow" : "none", ...more }, link: { kind: href.startsWith("#") ? "section" : "url", value: href.replace(/^#/, "") } };
}
export function image(slot: string | undefined, src: string, alt: string, f: F, more: Partial<ImageEl> = {}): ImageEl {
  return { id: uid(), type: "image", slot, src, alt, frame: frame(f), ...more };
}
export function shape(kind: string, f: F, fill: Paint, more: Partial<ShapeEl> = {}): ShapeEl {
  return { id: uid(), type: "shape", shape: kind, fill, frame: frame(f), ...more };
}
export function icon(slot: string | undefined, name: string, f: F, color: ColorRef = "$accent", chip?: ColorRef): IconEl {
  return { id: uid(), type: "icon", slot, icon: name, color, chip, frame: frame(f) };
}
export function line(f: F, style: LineEl["style"] = "solid", color: ColorRef = "$ink", weight = 2): LineEl {
  return { id: uid(), type: "line", style, color, weight, frame: frame(f) };
}
export function wid(slot: string | undefined, kind: WidgetKind, f: F, props: Record<string, unknown> = {}, more: Partial<WidgetEl> = {}): WidgetEl {
  return { id: uid(), type: "widget", slot, widget: kind, props: { ...(widget(kind)?.defaults() ?? {}), ...props }, frame: frame(f), ...more };
}

/** Deep copy with fresh ids (duplicating sections, templates). */
export function fresh<T extends { id: string }>(el: T): T {
  return { ...structuredClone(el), id: uid() };
}
export const freshAll = (els: El[]) => els.map(fresh);
