/**
 * The canvas: the real site (same renderer as the download) inside a device frame, with an overlay for
 * selection, handles, snapping guides and section tools. Interactions are plain pointer events, measured
 * against the rendered DOM, so whatever CSS does (text growing, cards nesting) the handles follow it.
 */
import { createElement, memo, useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from "react";
import { ArrowDown, ArrowUp, Copy, Lock, Plus, RefreshCw, Trash2, BringToFront, SendToBack, Pencil, Sparkles } from "lucide-react";
import type { El, Frame, Section } from "../model";
import { COL_PX, DEVICE_WIDTH, GRID, contentRows, pageSections } from "../model";
import { elementClasses, elementData, elementInner, sectionBgHtml, sectionClasses, anchorOf, threadHtml } from "../render";
import { tree, floats, isBox, phoneAlign, snap1, snapTargets, type Node } from "../layout";
import { setFrames, mapSection, restack, moveSection, duplicateSection, removeSection, locate } from "../ops";
import { rearrange, recipe } from "../library/recipes";
import type { RenderCtx } from "../util";
import { useQuilt } from "./context";

/** Screen pixels per design pixel inside the device frame. */
export function designScale(width: number, zoom: number) {
  const pad = Math.min(40, Math.max(16, width * 0.04));
  return Math.min(1, (width - 2 * pad) / GRID.width) * zoom;
}

const ElView = memo(function ElView({ n, ctx }: { n: Node; ctx: RenderCtx }) {
  const el = n.el;
  const props = { className: elementClasses(el, floats(el)), "data-el": el.id, ...elementData(el) };
  if (isBox(el))
    return (
      <div {...props}>
        <div className="q-fill" aria-hidden="true" />
        {n.children.map((c) => <ElView key={c.el.id} n={c} ctx={ctx} />)}
      </div>
    );
  return <div {...props} dangerouslySetInnerHTML={{ __html: elementInner(el, ctx) }} />;
});

/** The section background, rendered as the real .q-bg element (its CSS is a direct-child rule). */
const Bg = memo(function Bg({ s, ctx }: { s: Section; ctx: RenderCtx }) {
  const html = sectionBgHtml(s, ctx);
  const inner = html.replace(/^<div class="[^"]*"( aria-hidden="true")?>/, "").replace(/<\/div>$/, "");
  // A piece restarts when its page changes, so wait until the typing stops.
  const [shown, setShown] = useState(inner);
  useEffect(() => {
    if (!s.piece) return setShown(inner);
    const t = setTimeout(() => setShown(inner), 450);
    return () => clearTimeout(t);
  }, [inner, s.piece]);
  return <div className={`q-bg${s.bg.scene || s.piece ? " q-bg-scene" : ""}${s.piece ? " q-bg-piece" : ""}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: s.piece ? shown : inner }} />;
});

const SectionView = memo(function SectionView({ s, ctx, shared }: { s: Section; ctx: RenderCtx; shared: boolean }) {
  const Tag = s.kind === "header" ? "header" : s.kind === "footer" ? "footer" : "section";
  return (
    <Tag className={`${sectionClasses(s)}${shared ? " qe-shared" : ""}`} id={anchorOf(s)} data-sec={s.id}>
      <Bg s={s} ctx={ctx} />
      <div className={`q-grid${phoneAlign(s) === "center" ? " q-center" : ""}`}>
        {tree(s.elements).map((n) => <ElView key={n.el.id} n={n} ctx={ctx} />)}
      </div>
      {threadHtml(s) && <div className="q-thread" aria-hidden="true" />}
      {(s.residents ?? []).map((r, i) => createElement("pw-pal", { key: `${r.kind}-${i}`, kind: r.kind, ...(r.color ? { color: r.color } : {}) }))}
    </Tag>
  );
});

interface Box { id: string; x: number; y: number; w: number; h: number; r: number }
interface SecBox { id: string; x: number; y: number; w: number; h: number; name: string; shared: boolean }
type Handle = "n" | "s" | "e" | "w" | "ne" | "nw" | "se" | "sw";

export default function Canvas({ css, onDrop }: { css: string; onDrop: (data: string, sectionId: string, at: { x: number; y: number }) => void }) {
  const q = useQuilt();
  const { doc, page, sel, device, zoom, ctx, editing } = q;
  const W = DEVICE_WIDTH[device];
  const paper = useRef<HTMLDivElement>(null), site = useRef<HTMLDivElement>(null), stage = useRef<HTMLDivElement>(null);
  const [boxes, setBoxes] = useState<Box[]>([]);
  const [secs, setSecs] = useState<SecBox[]>([]);
  const [hover, setHover] = useState<Box | null>(null);
  const [hoverSec, setHoverSec] = useState<string | null>(null);
  const [guides, setGuides] = useState<{ x: number[]; y: number[] }>({ x: [], y: [] });
  const [marquee, setMarquee] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [badge, setBadge] = useState<string>("");
  const dragging = useRef(false);
  const list = pageSections(doc, page).filter((x) => !x.section.hidden);

  /** Read every box we draw from the rendered DOM. */
  const measure = useCallback(() => {
    const p = paper.current, root = site.current;
    if (!p || !root) return;
    const pr = p.getBoundingClientRect();
    const box = (node: HTMLElement, id: string): Box => {
      const r = node.getBoundingClientRect();
      const rot = parseFloat(getComputedStyle(node).rotate) || 0;
      const w = node.offsetWidth * zoom, h = node.offsetHeight * zoom;
      return { id, x: r.left + r.width / 2 - pr.left - w / 2, y: r.top + r.height / 2 - pr.top - h / 2, w, h, r: rot };
    };
    const next: Box[] = [];
    for (const id of sel.ids) {
      const node = root.querySelector<HTMLElement>(`[data-el="${id}"]`);
      if (node && node.offsetParent !== null) next.push(box(node, id));
    }
    const ss: SecBox[] = [];
    root.querySelectorAll<HTMLElement>("[data-sec]").forEach((n) => {
      const r = n.getBoundingClientRect(), id = n.dataset.sec!;
      const s = list.find((x) => x.section.id === id);
      ss.push({ id, x: r.left - pr.left, y: r.top - pr.top, w: r.width, h: r.height, name: s?.section.name ?? "", shared: s?.ref.where !== "page" });
    });
    setBoxes((old) => (JSON.stringify(old) === JSON.stringify(next) ? old : next));
    setSecs((old) => (JSON.stringify(old) === JSON.stringify(ss) ? old : ss));
  }, [sel.ids, zoom, list]);

  useLayoutEffect(measure);
  const measureRef = useRef(measure);
  measureRef.current = measure;
  useEffect(() => {
    const ro = new ResizeObserver(() => measureRef.current());
    if (site.current) ro.observe(site.current);
    void document.fonts?.ready.then(() => measureRef.current());
    // Pictures loading and text reflowing move things without a React render; catch up gently.
    const t = setInterval(() => measureRef.current(), 600);
    return () => { ro.disconnect(); clearInterval(t); };
  }, []);

  // Inline text editing: double-click a text element.
  useEffect(() => {
    if (!editing) return;
    const node = site.current?.querySelector<HTMLElement>(`[data-el="${editing}"] .q-tx`);
    const s = q.section();
    const el = s?.elements.find((e) => e.id === editing);
    if (!node || !s || !el || el.type !== "text") return;
    node.setAttribute("contenteditable", "plaintext-only");
    if (node.contentEditable !== "plaintext-only") node.setAttribute("contenteditable", "true");
    node.focus();
    const range = document.createRange();
    range.selectNodeContents(node);
    getSelection()?.removeAllRanges();
    getSelection()?.addRange(range);
    const onInput = () => measure();
    const finish = () => {
      node.removeAttribute("contenteditable");
      const text = node.innerText.replace(/\n$/, "");
      q.setEditing(null);
      if (text !== el.text) q.commit(mapSection(q.doc, s.id, (sec) => ({ ...sec, elements: sec.elements.map((e) => (e.id === el.id && e.type === "text" ? { ...e, text } : e)) })));
    };
    const key = (e: KeyboardEvent) => {
      e.stopPropagation();
      if (e.key === "Escape" || (e.key === "Enter" && (e.metaKey || e.ctrlKey))) { e.preventDefault(); node.blur(); }
    };
    node.addEventListener("input", onInput);
    node.addEventListener("blur", finish, { once: true });
    node.addEventListener("keydown", key);
    return () => { node.removeEventListener("input", onInput); node.removeEventListener("keydown", key); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editing]);

  // Play: run every entrance once, top to bottom, then settle.
  useEffect(() => {
    if (!q.playing || !site.current) return;
    const nodes = [...site.current.querySelectorAll<HTMLElement>("[data-enter]")];
    nodes.forEach((n) => n.classList.remove("is-in"));
    void site.current.offsetWidth;
    nodes.forEach((n) => n.classList.add("is-in"));
  }, [q.playing]);

  const k = designScale(W, zoom);
  const colPx = COL_PX * k, rowPx = GRID.row * k;

  function sectionById(id: string) {
    return list.find((x) => x.section.id === id)?.section;
  }

  function startDrag(e: React.PointerEvent, secId: string, ids: string[]) {
    const s = sectionById(secId);
    if (!s || device === "phone") return;
    const base = q.doc, x0 = e.clientX, y0 = e.clientY;
    const start = new Map(s.elements.filter((el) => ids.includes(el.id) && !el.locked).map((el) => [el.id, el.frame]));
    if (!start.size) return;
    const fs = [...start.values()];
    const bx = Math.min(...fs.map((f) => f.x)), by = Math.min(...fs.map((f) => f.y));
    const bw = Math.max(...fs.map((f) => f.x + f.w)) - bx, bh = Math.max(...fs.map((f) => f.y + f.h)) - by;
    const targets = snapTargets(s, new Set(ids));
    let moved = false;
    const move = (ev: PointerEvent) => {
      let dx = ev.clientX - x0, dy = ev.clientY - y0;
      if (!moved && Math.hypot(dx, dy) < 4) return;
      if (!moved) { moved = true; dragging.current = true; q.begin(); }
      if (ev.shiftKey) Math.abs(dx) > Math.abs(dy) ? (dy = 0) : (dx = 0);
      let nx = bx + dx / colPx, ny = by + dy / rowPx;
      const gx: number[] = [], gy: number[] = [];
      if (!ev.altKey) {
        const sx = snap1(nx, bw, targets.x, 1.4), sy = snap1(ny, bh, targets.y, 1.6);
        nx = sx.value; ny = sy.value;
        if (sx.guide !== undefined) gx.push(sx.guide);
        if (sy.guide !== undefined) gy.push(sy.guide);
      }
      nx = Math.max(0, Math.min(GRID.cols - bw, Math.round(nx)));
      ny = Math.max(0, Math.round(ny));
      const frames: Record<string, Frame> = {};
      start.forEach((f, id) => (frames[id] = { ...f, x: f.x + nx - bx, y: f.y + ny - by }));
      q.transient(setFrames(base, secId, frames));
      setGuides({ x: gx, y: gy });
      setBadge(`${nx}, ${ny}`);
    };
    const up = () => {
      removeEventListener("pointermove", move);
      removeEventListener("pointerup", up);
      if (moved) q.end();
      dragging.current = false;
      setGuides({ x: [], y: [] });
      setBadge("");
    };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
  }

  function startResize(e: React.PointerEvent, h: Handle) {
    e.stopPropagation();
    e.preventDefault();
    const s = q.section(), el = q.selected()[0];
    if (!s || !el || el.locked) return;
    const base = q.doc, f0 = el.frame, x0 = e.clientX, y0 = e.clientY;
    const targets = snapTargets(s, new Set([el.id]));
    const ratio = (f0.w * COL_PX) / (f0.h * GRID.row);
    const keep = (el.type === "image" || el.type === "icon" || (el.type === "shape" && !isBox(el))) && h.length === 2;
    q.begin();
    const move = (ev: PointerEvent) => {
      const dc = (ev.clientX - x0) / colPx, dr = (ev.clientY - y0) / rowPx;
      let { x, y, w, h: hh } = f0;
      if (h.includes("e")) w = f0.w + dc;
      if (h.includes("w")) { x = f0.x + dc; w = f0.w - dc; }
      if (h.includes("s")) hh = f0.h + dr;
      if (h.includes("n")) { y = f0.y + dr; hh = f0.h - dr; }
      if (!ev.altKey) {
        if (h.includes("e")) { const t = snap1(x + w, 0, targets.x, 1.2); w = t.value - x; }
        if (h.includes("w")) { const t = snap1(x, 0, targets.x, 1.2); w += x - t.value; x = t.value; }
        if (h.includes("s")) { const t = snap1(y + hh, 0, targets.y, 1.4); hh = t.value - y; }
      }
      if (keep !== ev.shiftKey) {
        const byW = Math.abs(w - f0.w) * COL_PX >= Math.abs(hh - f0.h) * GRID.row;
        if (byW) { const nh = (w * COL_PX) / ratio / GRID.row; if (h.includes("n")) y = f0.y + f0.h - nh; hh = nh; }
        else { const nw = (hh * GRID.row * ratio) / COL_PX; if (h.includes("w")) x = f0.x + f0.w - nw; w = nw; }
      }
      w = Math.max(2, Math.round(w)); hh = Math.max(2, Math.round(hh));
      x = Math.max(0, Math.min(GRID.cols - w, Math.round(x))); y = Math.max(0, Math.round(y));
      q.transient(setFrames(base, s.id, { [el.id]: { ...f0, x, y, w, h: hh } }));
      setBadge(`${Math.round(w * COL_PX)} × ${Math.round(hh * GRID.row)}`);
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); q.end(); setBadge(""); };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
  }

  function startRotate(e: React.PointerEvent, b: Box) {
    e.stopPropagation();
    e.preventDefault();
    const s = q.section(), el = q.selected()[0];
    if (!s || !el) return;
    const pr = paper.current!.getBoundingClientRect();
    const cx = pr.left + b.x + b.w / 2, cy = pr.top + b.y + b.h / 2;
    const base = q.doc;
    q.begin();
    const move = (ev: PointerEvent) => {
      let a = (Math.atan2(ev.clientY - cy, ev.clientX - cx) * 180) / Math.PI + 90;
      if (a > 180) a -= 360;
      a = ev.shiftKey ? Math.round(a / 15) * 15 : Math.round(a);
      if (Math.abs(a) < 3) a = 0;
      q.transient(setFrames(base, s.id, { [el.id]: { ...el.frame, r: a || undefined } }));
      setBadge(`${a}°`);
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); q.end(); setBadge(""); };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
  }

  function startSectionResize(e: React.PointerEvent, secId: string) {
    e.stopPropagation();
    e.preventDefault();
    const s = sectionById(secId);
    if (!s) return;
    const base = q.doc, y0 = e.clientY, r0 = s.rows, min = Math.max(4, contentRows(s));
    q.begin();
    const move = (ev: PointerEvent) => {
      const rows = Math.max(min, Math.round(r0 + (ev.clientY - y0) / rowPx));
      q.transient(mapSection(base, secId, (x) => ({ ...x, rows })));
      setBadge(`${rows * GRID.row}px tall`);
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); q.end(); setBadge(""); };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
  }

  function startMarquee(e: React.PointerEvent, secId: string) {
    const pr = paper.current!.getBoundingClientRect();
    const x0 = e.clientX, y0 = e.clientY;
    const secNode = site.current!.querySelector(`[data-sec="${secId}"]`)!;
    let moved = false;
    const move = (ev: PointerEvent) => {
      if (!moved && Math.hypot(ev.clientX - x0, ev.clientY - y0) < 5) return;
      moved = true;
      const r = { x: Math.min(x0, ev.clientX), y: Math.min(y0, ev.clientY), w: Math.abs(ev.clientX - x0), h: Math.abs(ev.clientY - y0) };
      setMarquee({ x: r.x - pr.left, y: r.y - pr.top, w: r.w, h: r.h });
      const ids: string[] = [];
      secNode.querySelectorAll<HTMLElement>("[data-el]").forEach((n) => {
        const b = n.getBoundingClientRect();
        if (b.right > r.x && b.left < r.x + r.w && b.bottom > r.y && b.top < r.y + r.h) ids.push(n.dataset.el!);
      });
      const s = sectionById(secId);
      q.setSel({ section: secId, ids: ids.filter((id) => !s?.elements.find((x) => x.id === id)?.locked) });
    };
    const up = () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); setMarquee(null); };
    addEventListener("pointermove", move);
    addEventListener("pointerup", up);
  }

  function onPointerDown(e: React.PointerEvent) {
    if (e.button !== 0) return;
    const t = e.target as HTMLElement;
    if (t.closest(".qe-ui")) return;
    if (editing && t.closest(`[data-el="${editing}"]`)) return;
    const secNode = t.closest<HTMLElement>("[data-sec]");
    if (!secNode) { q.setSel({ section: null, ids: [] }); return; }
    const secId = secNode.dataset.sec!;
    const s = sectionById(secId);
    const elNode = t.closest<HTMLElement>("[data-el]");
    if (elNode && s) {
      const id = elNode.dataset.el!;
      const el = s.elements.find((x) => x.id === id);
      if (!el || el.locked) { q.setSel({ section: secId, ids: el?.locked ? [id] : [] }); return; }
      let ids: string[];
      if (e.shiftKey && sel.section === secId) ids = sel.ids.includes(id) ? sel.ids.filter((x) => x !== id) : [...sel.ids, id];
      else ids = sel.section === secId && sel.ids.includes(id) ? sel.ids : [id];
      q.setSel({ section: secId, ids });
      e.preventDefault();
      startDrag(e, secId, ids);
    } else {
      q.setSel({ section: secId, ids: [] });
      e.preventDefault();
      startMarquee(e, secId);
    }
  }

  function onDoubleClick(e: React.MouseEvent) {
    const elNode = (e.target as HTMLElement).closest<HTMLElement>("[data-el]");
    if (!elNode) return;
    const s = q.section(), el = s?.elements.find((x) => x.id === elNode.dataset.el);
    if (el?.type === "text" && !el.locked) q.setEditing(el.id);
    else if (el?.type === "image") q.setPanel("photos");
  }

  function onPointerMove(e: React.PointerEvent) {
    if (dragging.current) return;
    const t = e.target as HTMLElement;
    if (t.closest(".qe-ui")) return;
    const pr = paper.current?.getBoundingClientRect();
    const elNode = t.closest<HTMLElement>("[data-el]");
    const sec = t.closest<HTMLElement>("[data-sec]")?.dataset.sec ?? null;
    if (sec !== hoverSec) setHoverSec(sec);
    if (!elNode || !pr || sel.ids.includes(elNode.dataset.el!)) { if (hover) setHover(null); return; }
    const r = elNode.getBoundingClientRect();
    const id = elNode.dataset.el!;
    if (hover?.id !== id) setHover({ id, x: r.left - pr.left, y: r.top - pr.top, w: r.width, h: r.height, r: 0 });
  }

  function onDropEvent(e: React.DragEvent) {
    const data = e.dataTransfer.getData("application/x-quilt");
    if (!data) return;
    e.preventDefault();
    const secNode = (document.elementFromPoint(e.clientX, e.clientY) as HTMLElement | null)?.closest<HTMLElement>("[data-sec]");
    if (!secNode) return;
    const grid = secNode.querySelector<HTMLElement>(":scope > .q-grid")!;
    const gr = grid.getBoundingClientRect();
    const pad = Math.min(40, Math.max(16, W * 0.04)) * zoom;
    onDrop(data, secNode.dataset.sec!, { x: (e.clientX - gr.left - pad) / colPx, y: (e.clientY - gr.top) / rowPx });
  }

  // Fit the device to the stage on first paint is handled by the editor; the paper only reserves space.
  const one = boxes.length === 1 ? boxes[0] : null;
  const selEl = q.selected();
  const single = selEl.length === 1 ? selEl[0] : null;
  const selSec = secs.find((s) => s.id === sel.section);
  const secModel = sel.section ? sectionById(sel.section) : undefined;
  const loc = sel.section ? locate(doc, sel.section) : null;
  const handles: Handle[] = single?.type === "text" || single?.type === "button" || (single?.type === "widget" && single.widget !== "video") ? ["w", "e", "s", "n", "se", "sw", "ne", "nw"] : ["nw", "ne", "sw", "se", "n", "s", "e", "w"];
  const gridLeft = (secBox: SecBox | undefined) => (secBox ? secBox.x + (secBox.w - Math.min(secBox.w, GRID.width * k + 0)) / 2 : 0);

  return (
    <div className="qe-stage" ref={stage} onPointerDown={onPointerDown} onPointerMove={onPointerMove} onPointerLeave={() => { setHover(null); setHoverSec(null); }} onDoubleClick={onDoubleClick} onClickCapture={(e) => { if (!(e.target as HTMLElement).closest(".qe-ui")) e.preventDefault(); }} onDragOver={(e) => { if (e.dataTransfer.types.includes("application/x-quilt")) { e.preventDefault(); e.dataTransfer.dropEffect = "copy"; } }} onDrop={onDropEvent}>
      <div className={`qe-paper qe-${device}`} ref={paper} style={{ width: W * zoom }}>
        <div className="qe-device" style={{ width: W, zoom } as CSSProperties}>
          <style>{css}</style>
          <div ref={site} className={`q-site q-edit${q.playing ? " q-anim q-playing" : ""}`} style={{ "--q-vh": `${device === "phone" ? 780 : device === "tablet" ? 1000 : 800}px` } as CSSProperties} data-cursor="none">
            <main>
              {list.map((x) => <SectionView key={x.section.id} s={x.section} ctx={ctx} shared={x.ref.where !== "page"} />)}
            </main>
            {!list.length && <div className="qe-empty-page"><Sparkles size={22} /><b>This page is empty</b><span>Add a section from the Sections panel to begin.</span></div>}
          </div>
        </div>

        {/* Overlay: everything here is screen-space UI, never part of the site. */}
        <div className="qe-overlay">
          {hover && !q.playing && <div className="qe-hover" style={{ left: hover.x, top: hover.y, width: hover.w, height: hover.h }} />}
          {secs.filter((s) => s.id === hoverSec && s.id !== sel.section).map((s) => (
            <div key={s.id} className="qe-sec-hover" style={{ left: s.x, top: s.y, width: s.w, height: s.h }}><span>{s.name}{s.shared ? " · every page" : ""}</span></div>
          ))}
          {selSec && !q.playing && (
            <div className="qe-sec-sel" style={{ left: selSec.x, top: selSec.y, width: selSec.w, height: selSec.h }}>
              {!sel.ids.length && <div className="qe-sec-bar qe-ui">
                <b>{selSec.name}</b>
                {selSec.shared && <span className="qe-pill">On every page</span>}
                {secModel?.kind && (recipe(secModel.kind)?.layouts.length ?? 0) > 1 && (
                  <button type="button" title="Rearrange: same words, new layout (R)" onClick={() => q.commit(mapSection(doc, secModel.id, (s) => rearrange(s)))}><RefreshCw size={14} />Rearrange</button>
                )}
                {loc?.where === "page" && <>
                  <button type="button" title="Move up" disabled={loc.index === 0} onClick={() => q.commit(moveSection(doc, selSec.id, -1))}><ArrowUp size={14} /></button>
                  <button type="button" title="Move down" disabled={loc.index === loc.page.sections.length - 1} onClick={() => q.commit(moveSection(doc, selSec.id, 1))}><ArrowDown size={14} /></button>
                  <button type="button" title="Duplicate section" onClick={() => { const r = duplicateSection(doc, selSec.id); q.commit(r.doc); if (r.id) q.setSel({ section: r.id, ids: [] }); }}><Copy size={14} /></button>
                </>}
                <button type="button" title="Delete section" className="is-danger" onClick={() => { q.commit(removeSection(doc, selSec.id)); q.setSel({ section: null, ids: [] }); }}><Trash2 size={14} /></button>
              </div>}
              {device !== "phone" && <div className="qe-sec-resize qe-ui" onPointerDown={(e) => startSectionResize(e, selSec.id)} title="Drag to change the height"><i /></div>}
            </div>
          )}
          {(hoverSec || sel.section) && !q.playing && secs.filter((s) => s.id === (hoverSec ?? sel.section) && !s.shared).map((s) => {
            const idx = page.sections.findIndex((x) => x.id === s.id);
            return (
              <button key={`add-${s.id}`} type="button" className="qe-add-between qe-ui" style={{ left: s.x + s.w / 2, top: s.y + s.h }} onClick={() => { q.setInsertAt(idx + 1); q.setPanel("sections"); }}>
                <Plus size={14} /> Add section
              </button>
            );
          })}
          {guides.x.map((g) => <div key={`gx${g}`} className="qe-guide is-v" style={{ left: gridLeft(selSec) + g * colPx, top: selSec?.y ?? 0, height: selSec?.h ?? 0 }} />)}
          {guides.y.map((g) => <div key={`gy${g}`} className="qe-guide is-h" style={{ top: (selSec?.y ?? 0) + g * rowPx, left: selSec?.x ?? 0, width: selSec?.w ?? 0 }} />)}
          {!q.playing && boxes.map((b) => (
            <div key={b.id} className={`qe-sel${selEl.find((e) => e.id === b.id)?.locked ? " is-locked" : ""}${editing === b.id ? " is-editing" : ""}`} style={{ left: b.x, top: b.y, width: b.w, height: b.h, rotate: `${b.r}deg` }}>
              {one && single && !single.locked && editing !== b.id && device !== "phone" && <>
                {handles.filter((h) => !(single.type === "text" && (h === "n" || h === "s" || h.length === 2) && false)).map((h) => (
                  <span key={h} className={`qe-handle qe-ui is-${h}`} onPointerDown={(e) => startResize(e, h)} />
                ))}
                <span className="qe-rotate qe-ui" onPointerDown={(e) => startRotate(e, b)} title="Rotate (Shift snaps to 15°)" />
              </>}
              {selEl.find((e) => e.id === b.id)?.locked && <span className="qe-lock"><Lock size={11} /></span>}
            </div>
          ))}
          {one && single && !q.playing && editing !== one.id && (
            <ElementBar box={one} el={single} />
          )}
          {marquee && <div className="qe-marquee" style={{ left: marquee.x, top: marquee.y, width: marquee.w, height: marquee.h }} />}
          {badge && one && <div className="qe-badge" style={{ left: one.x + one.w / 2, top: one.y + one.h + 12 }}>{badge}</div>}
        </div>
      </div>
    </div>
  );
}

function ElementBar({ box, el }: { box: Box; el: El }) {
  const q = useQuilt();
  const s = q.section();
  if (!s) return null;
  const top = box.y - 52;
  return (
    <div className="qe-elbar qe-ui" style={{ left: box.x + box.w / 2, top: Math.max(4, top) }} onPointerDown={(e) => e.stopPropagation()}>
      {el.type === "text" && <button type="button" title="Edit words (double-click)" onClick={() => q.setEditing(el.id)}><Pencil size={14} /></button>}
      <button type="button" title="Duplicate (Ctrl+D)" onClick={q.duplicate}><Copy size={14} /></button>
      <button type="button" title="Bring forward (Ctrl+])" onClick={() => q.commit(restack(q.doc, s.id, [el.id], "forward"))}><BringToFront size={14} /></button>
      <button type="button" title="Send backward (Ctrl+[)" onClick={() => q.commit(restack(q.doc, s.id, [el.id], "back"))}><SendToBack size={14} /></button>
      <button type="button" title={el.locked ? "Unlock" : "Lock in place"} className={el.locked ? "on" : ""} onClick={() => q.patch((e) => ({ ...e, locked: !e.locked || undefined }))}><Lock size={14} /></button>
      <button type="button" title="Delete (Del)" className="is-danger" onClick={q.remove}><Trash2 size={14} /></button>
    </div>
  );
}
