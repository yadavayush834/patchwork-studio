/**
 * Layout maths shared by the renderer and the editor.
 *
 * 1. Cards by containment. A box-like shape (rectangle, pill, blob…) that sits behind other elements and
 *    fully contains them becomes their *card*. The renderer nests those elements inside it (CSS subgrid on
 *    desktop), so on a phone the card and everything on it travel together. Nobody has to "group" anything.
 *
 * 2. Smart stack. On phones a section becomes one column. The order is recovered from the desktop layout:
 *    split into horizontal bands (things that overlap vertically), split each band into columns (things that
 *    overlap horizontally), read columns left to right and recurse. A two-column hero reads text, buttons,
 *    then picture, which is what a person would do.
 */
import type { El, Frame, Section, ShapeEl } from "./model";
import { GRID, COL_PX as COL } from "./model";

export interface Node {
  el: El;
  children: Node[];
}

const BOXES = new Set(["rect", "pill", "blob", "blob2", "blob3", "arch", "hexagon"]);
/** Can this element hold others as a card? */
export const isBox = (e: El): boolean => e.type === "shape" && BOXES.has((e as ShapeEl).shape) && !e.frame.r;

const inside = (a: Frame, b: Frame) => a.x >= b.x && a.y >= b.y && a.x + a.w <= b.x + b.w && a.y + a.h <= b.y + b.h;

/** Nest elements into the cards that contain them. Order inside each level is paint order. */
export function tree(elements: El[]): Node[] {
  const visible = elements.filter((e) => !e.hidden);
  const parent = new Map<string, string>();
  visible.forEach((e, i) => {
    // The smallest earlier box that contains this element is its card.
    let best: El | undefined;
    for (let j = 0; j < i; j++) {
      const b = visible[j];
      if (b.id === e.id || !isBox(b) || !inside(e.frame, b.frame)) continue;
      if (b.frame.w === e.frame.w && b.frame.h === e.frame.h && b.frame.x === e.frame.x && b.frame.y === e.frame.y) continue;
      if (!best || b.frame.w * b.frame.h < best.frame.w * best.frame.h) best = b;
    }
    if (best) parent.set(e.id, best.id);
  });
  const nodes = new Map(visible.map((e) => [e.id, { el: e, children: [] as Node[] }]));
  const roots: Node[] = [];
  for (const e of visible) {
    const p = parent.get(e.id);
    (p ? nodes.get(p)!.children : roots).push(nodes.get(e.id)!);
  }
  return roots;
}

/** Things that decorate rather than say something: they float on phones instead of taking a place in the stack. */
export function floats(e: El) {
  if (e.phone?.float !== undefined) return e.phone.float;
  return e.type === "shape" && !isBox(e);
}

type Item = { id: string; f: Frame };
const overlap = (a0: number, a1: number, b0: number, b1: number) => Math.min(a1, b1) - Math.max(a0, b0) > 0;

function groups(items: Item[], axis: "y" | "x"): Item[][] {
  const [p, s] = axis === "y" ? (["y", "h"] as const) : (["x", "w"] as const);
  const sorted = [...items].sort((a, b) => a.f[p] - b.f[p] || a.f[axis === "y" ? "x" : "y"] - b.f[axis === "y" ? "x" : "y"]);
  const out: Item[][] = [];
  let end = -Infinity;
  for (const it of sorted) {
    const a = it.f[p], b = it.f[p] + it.f[s];
    if (out.length && overlap(a, b, -Infinity, end)) {
      out[out.length - 1].push(it);
      end = Math.max(end, b);
    } else {
      out.push([it]);
      end = b;
    }
  }
  return out;
}

/** Gaps (in design px) between consecutive groups along an axis, with where each one falls. */
function gaps(gs: Item[][], axis: "y" | "x") {
  const [p, z, unit] = axis === "y" ? (["y", "h", GRID.row] as const) : (["x", "w", COL] as const);
  const out: { at: number; size: number }[] = [];
  for (let i = 1; i < gs.length; i++) {
    const end = Math.max(...gs[i - 1].map((it) => it.f[p] + it.f[z]));
    const start = Math.min(...gs[i].map((it) => it.f[p]));
    out.push({ at: i, size: (start - end) * unit });
  }
  return out;
}

/**
 * The order a person reads these frames in (recursive XY-cut). At each level, make one cut at the widest
 * empty gutter in either direction, then read each side. A full-width title is cut off first; columns of
 * cards win over the rows inside them; a price list reads row by row. Ties go to the horizontal cut.
 */
export function readingOrder(items: Item[]): string[] {
  if (items.length <= 1) return items.map((i) => i.id);
  const bands = groups(items, "y"), cols = groups(items, "x");
  const by = gaps(bands, "y").sort((a, b) => b.size - a.size)[0];
  const bx = gaps(cols, "x").sort((a, b) => b.size - a.size)[0];
  const cut = by && (!bx || by.size >= bx.size) ? { gs: bands, at: by.at } : bx ? { gs: cols, at: bx.at } : null;
  if (!cut) return [...items].sort((a, b) => a.f.y - b.f.y || a.f.x - b.f.x).map((i) => i.id);
  return [...readingOrder(cut.gs.slice(0, cut.at).flat()), ...readingOrder(cut.gs.slice(cut.at).flat())];
}

/** Phone order for one level of the tree: explicit phone.order first wins, then reading order. */
export function phoneOrder(nodes: Node[]): Node[] {
  const flow = nodes.filter((n) => !floats(n.el) && !n.el.phone?.hide);
  const natural = readingOrder(flow.map((n) => ({ id: n.el.id, f: n.el.frame })));
  const rank = new Map(natural.map((id, i) => [id, i]));
  return [...flow].sort((a, b) => (a.el.phone?.order ?? rank.get(a.el.id)!) - (b.el.phone?.order ?? rank.get(b.el.id)!));
}

/** Is a section's phone layout centred? Majority vote of its text alignment unless set. */
export function phoneAlign(s: Section): "start" | "center" {
  if (s.phone?.align) return s.phone.align;
  let c = 0, l = 0;
  for (const e of s.elements) {
    if (e.type !== "text") continue;
    const centred = e.style.align === "center";
    centred ? c++ : l++;
  }
  return c > l ? "center" : "start";
}

/** Snapping while dragging, in grid units. Returns the snapped value and the guide it locked to. */
export interface Guides {
  x: number[];
  y: number[];
}
export function snapTargets(s: Section, skip: Set<string>): Guides {
  const x = [0, GRID.cols / 2, GRID.cols], y = [0, Math.round(s.rows / 2), s.rows];
  for (const e of s.elements) {
    if (skip.has(e.id) || e.hidden) continue;
    const f = e.frame;
    x.push(f.x, f.x + f.w / 2, f.x + f.w);
    y.push(f.y, f.y + f.h / 2, f.y + f.h);
  }
  return { x, y };
}
/** Snap a moving box (start, size) to the closest target for its start, centre or end. */
export function snap1(start: number, size: number, targets: number[], tolerance: number): { value: number; guide?: number } {
  let best: { d: number; value: number; guide: number } | undefined;
  for (const t of targets) {
    for (const [edge, off] of [[start, 0], [start + size / 2, size / 2], [start + size, size]] as const) {
      const d = Math.abs(edge - t);
      if (d <= tolerance && (!best || d < best.d)) best = { d, value: t - off, guide: t };
    }
  }
  return best ? { value: best.value, guide: best.guide } : { value: start };
}

export const clampFrame = (f: Frame, rows: number): Frame => {
  const w = Math.max(1, Math.min(GRID.cols, Math.round(f.w)));
  const h = Math.max(1, Math.round(f.h));
  return {
    ...f,
    w,
    h,
    x: Math.max(0, Math.min(GRID.cols - w, Math.round(f.x))),
    y: Math.max(0, Math.min(Math.max(0, rows + 400), Math.round(f.y))),
  };
};
