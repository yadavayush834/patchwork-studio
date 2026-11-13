/**
 * Pure document operations. The editor never mutates a document: every change goes through one of these
 * and returns a new one, which is what makes undo, autosave and collaboration-later straightforward.
 */
import type { El, Frame, Page, QuiltDoc, Section } from "./model";
import { GRID, uid, contentRows } from "./model";
import { fresh } from "./library/build";
import { kit, themeFromKit } from "./theme";

export type Where = "header" | "footer" | string;

/** Apply fn to the section with this id, wherever it lives. */
export function mapSection(doc: QuiltDoc, id: string, fn: (s: Section) => Section): QuiltDoc {
  if (doc.header?.id === id) return { ...doc, header: fn(doc.header) };
  if (doc.footer?.id === id) return { ...doc, footer: fn(doc.footer) };
  return { ...doc, pages: doc.pages.map((p) => (p.sections.some((s) => s.id === id) ? { ...p, sections: p.sections.map((s) => (s.id === id ? fn(s) : s)) } : p)) };
}

export function mapElements(doc: QuiltDoc, sectionId: string, ids: string[], fn: (e: El) => El): QuiltDoc {
  const set = new Set(ids);
  return mapSection(doc, sectionId, (s) => grow({ ...s, elements: s.elements.map((e) => (set.has(e.id) ? fn(e) : e)) }));
}

/** Sections grow to fit anything dragged below their bottom edge. */
export function grow(s: Section): Section {
  const need = contentRows(s) + 2;
  return need > s.rows ? { ...s, rows: need } : s;
}

export function addElements(doc: QuiltDoc, sectionId: string, els: El[]): QuiltDoc {
  return mapSection(doc, sectionId, (s) => grow({ ...s, elements: [...s.elements, ...els] }));
}

export function removeElements(doc: QuiltDoc, sectionId: string, ids: string[]): QuiltDoc {
  const set = new Set(ids);
  return mapSection(doc, sectionId, (s) => ({ ...s, elements: s.elements.filter((e) => !set.has(e.id)) }));
}

/** Copies sit a little down and to the right, like Canva. Returns the new ids too. */
export function duplicateElements(doc: QuiltDoc, sectionId: string, ids: string[]): { doc: QuiltDoc; ids: string[] } {
  const made: string[] = [];
  const next = mapSection(doc, sectionId, (s) => {
    const copies = s.elements.filter((e) => ids.includes(e.id)).map((e) => {
      const c = fresh(e);
      delete c.slot;
      c.frame = { ...c.frame, x: Math.min(GRID.cols - c.frame.w, c.frame.x + 2), y: c.frame.y + 3 };
      made.push(c.id);
      return c;
    });
    return grow({ ...s, elements: [...s.elements, ...copies] });
  });
  return { doc: next, ids: made };
}

/** Paint order: forward/back one step or all the way. */
export function restack(doc: QuiltDoc, sectionId: string, ids: string[], how: "forward" | "back" | "front" | "bottom"): QuiltDoc {
  return mapSection(doc, sectionId, (s) => {
    const sel = s.elements.filter((e) => ids.includes(e.id));
    const rest = s.elements.filter((e) => !ids.includes(e.id));
    if (how === "front") return { ...s, elements: [...rest, ...sel] };
    if (how === "bottom") return { ...s, elements: [...sel, ...rest] };
    const list = [...s.elements];
    const order = how === "forward" ? [...sel].reverse() : sel;
    for (const e of order) {
      const i = list.indexOf(e), j = how === "forward" ? i + 1 : i - 1;
      if (j < 0 || j >= list.length || ids.includes(list[j].id)) continue;
      [list[i], list[j]] = [list[j], list[i]];
    }
    return { ...s, elements: list };
  });
}

export function setFrames(doc: QuiltDoc, sectionId: string, frames: Record<string, Frame>): QuiltDoc {
  return mapElements(doc, sectionId, Object.keys(frames), (e) => ({ ...e, frame: frames[e.id] }));
}

/** Line up several elements (or one, against the section). */
export function align(doc: QuiltDoc, sectionId: string, ids: string[], how: "left" | "center" | "right" | "top" | "middle" | "bottom"): QuiltDoc {
  return mapSection(doc, sectionId, (s) => {
    const sel = s.elements.filter((e) => ids.includes(e.id));
    if (!sel.length) return s;
    const box = sel.length > 1
      ? { x: Math.min(...sel.map((e) => e.frame.x)), y: Math.min(...sel.map((e) => e.frame.y)), r: Math.max(...sel.map((e) => e.frame.x + e.frame.w)), b: Math.max(...sel.map((e) => e.frame.y + e.frame.h)) }
      : { x: 0, y: 0, r: GRID.cols, b: s.rows };
    return { ...s, elements: s.elements.map((e) => {
      if (!ids.includes(e.id)) return e;
      const f = { ...e.frame };
      if (how === "left") f.x = box.x;
      if (how === "right") f.x = box.r - f.w;
      if (how === "center") f.x = Math.round((box.x + box.r - f.w) / 2);
      if (how === "top") f.y = box.y;
      if (how === "bottom") f.y = box.b - f.h;
      if (how === "middle") f.y = Math.round((box.y + box.b - f.h) / 2);
      return { ...e, frame: f };
    }) };
  });
}

/** Even gaps between three or more elements. */
export function distribute(doc: QuiltDoc, sectionId: string, ids: string[], axis: "x" | "y"): QuiltDoc {
  return mapSection(doc, sectionId, (s) => {
    const [p, z] = axis === "x" ? (["x", "w"] as const) : (["y", "h"] as const);
    const sel = s.elements.filter((e) => ids.includes(e.id)).sort((a, b) => a.frame[p] - b.frame[p]);
    if (sel.length < 3) return s;
    const start = sel[0].frame[p], end = sel[sel.length - 1].frame[p] + sel[sel.length - 1].frame[z];
    const total = sel.reduce((n, e) => n + e.frame[z], 0), gap = (end - start - total) / (sel.length - 1);
    let at = start;
    const pos = new Map<string, number>();
    for (const e of sel) { pos.set(e.id, Math.round(at)); at += e.frame[z] + gap; }
    return { ...s, elements: s.elements.map((e) => (pos.has(e.id) ? { ...e, frame: { ...e.frame, [p]: pos.get(e.id)! } } : e)) };
  });
}

// ── Sections ────────────────────────────────────────────────────────────────────────────────────────

export function addSection(doc: QuiltDoc, pageId: string, s: Section, index?: number): QuiltDoc {
  if (s.kind === "header") return { ...doc, header: s };
  if (s.kind === "footer") return { ...doc, footer: s };
  return { ...doc, pages: doc.pages.map((p) => {
    if (p.id !== pageId) return p;
    const list = [...p.sections];
    list.splice(index ?? list.length, 0, s);
    return { ...p, sections: list };
  }) };
}

export function removeSection(doc: QuiltDoc, id: string): QuiltDoc {
  if (doc.header?.id === id) return { ...doc, header: undefined };
  if (doc.footer?.id === id) return { ...doc, footer: undefined };
  return { ...doc, pages: doc.pages.map((p) => ({ ...p, sections: p.sections.filter((s) => s.id !== id) })) };
}

export function cloneSection(s: Section): Section {
  return { ...structuredClone(s), id: uid("s"), elements: s.elements.map((e) => fresh(e)) };
}

export function duplicateSection(doc: QuiltDoc, id: string): { doc: QuiltDoc; id?: string } {
  for (const p of doc.pages) {
    const i = p.sections.findIndex((s) => s.id === id);
    if (i < 0) continue;
    const copy = cloneSection(p.sections[i]);
    return { doc: addSection(doc, p.id, copy, i + 1), id: copy.id };
  }
  return { doc };
}

export function moveSection(doc: QuiltDoc, id: string, dir: -1 | 1): QuiltDoc {
  return { ...doc, pages: doc.pages.map((p) => {
    const i = p.sections.findIndex((s) => s.id === id), j = i + dir;
    if (i < 0 || j < 0 || j >= p.sections.length) return p;
    const list = [...p.sections];
    [list[i], list[j]] = [list[j], list[i]];
    return { ...p, sections: list };
  }) };
}

/** Where a section sits: on a page (with index), or shared. */
export function locate(doc: QuiltDoc, id: string): { where: "header" | "footer" } | { where: "page"; page: Page; index: number } | null {
  if (doc.header?.id === id) return { where: "header" };
  if (doc.footer?.id === id) return { where: "footer" };
  for (const page of doc.pages) {
    const index = page.sections.findIndex((s) => s.id === id);
    if (index >= 0) return { where: "page", page, index };
  }
  return null;
}

// ── Pages ───────────────────────────────────────────────────────────────────────────────────────────

const freeSlug = (doc: QuiltDoc, base: string, skip?: string) => {
  let slug = base || "page", n = 2;
  while (slug === "index" || doc.pages.some((p) => p.slug === slug && p.id !== skip)) slug = `${base}-${n++}`;
  return slug;
};

export function addPage(doc: QuiltDoc, name: string, sections: Section[] = []): { doc: QuiltDoc; id: string } {
  const page: Page = { id: uid("p"), name, slug: freeSlug(doc, name.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, "")), sections };
  return { doc: { ...doc, pages: [...doc.pages, page] }, id: page.id };
}
export function renamePage(doc: QuiltDoc, id: string, name: string): QuiltDoc {
  return { ...doc, pages: doc.pages.map((p) => (p.id === id ? { ...p, name, slug: p.slug === "index" ? "index" : freeSlug(doc, name.toLowerCase().replace(/[^\w]+/g, "-").replace(/^-|-$/g, ""), id) } : p)) };
}
export function removePage(doc: QuiltDoc, id: string): QuiltDoc {
  if (doc.pages.length < 2) return doc;
  const pages = doc.pages.filter((p) => p.id !== id);
  if (!pages.some((p) => p.slug === "index")) pages[0] = { ...pages[0], slug: "index" };
  return { ...doc, pages };
}
export function duplicatePage(doc: QuiltDoc, id: string): { doc: QuiltDoc; id: string } {
  const src = doc.pages.find((p) => p.id === id)!;
  return addPage(doc, `${src.name} copy`, src.sections.map(cloneSection));
}
export function makeHome(doc: QuiltDoc, id: string): QuiltDoc {
  const target = doc.pages.find((p) => p.id === id);
  if (!target || target.slug === "index") return doc;
  return { ...doc, pages: [{ ...target, slug: "index" }, ...doc.pages.filter((p) => p.id !== id).map((p) => (p.slug === "index" ? { ...p, slug: freeSlug(doc, p.name.toLowerCase().replace(/[^\w]+/g, "-"), p.id) } : p))] };
}

// ── Style ───────────────────────────────────────────────────────────────────────────────────────────

export function applyKit(doc: QuiltDoc, kitId: string): QuiltDoc {
  return { ...doc, theme: themeFromKit(kit(kitId)) };
}

/** A copy of a whole site with fresh ids (Duplicate on the dashboard). */
export function cloneSite(doc: QuiltDoc, name?: string): QuiltDoc {
  const now = Date.now();
  return { ...structuredClone(doc), id: uid("q"), name: name ?? `${doc.name} copy`, createdAt: now, updatedAt: now };
}
