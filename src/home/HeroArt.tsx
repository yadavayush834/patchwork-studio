import { useEffect, useRef } from "react";

const PATCH = ["#ff5b3a", "#ffc23d", "#6fe3b5", "#7fa8ff", "#b79bff", "#f4efe6"];
const INK = "#0f0e13", INK2 = "#1b1922", TOMATO = "#ff5b3a";
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;

/** Run a canvas animation only while it is on screen and the tab is visible. */
function useLoop(ref: React.RefObject<HTMLCanvasElement | null>, setup: (cv: HTMLCanvasElement) => { frame: (t: number, dt: number) => void; resize?: () => void; dispose?: () => void }) {
  useEffect(() => {
    const cv = ref.current!;
    const api = setup(cv);
    let raf = 0, on = true, last = performance.now();
    const loop = (now: number) => { raf = 0; const dt = Math.min(0.05, Math.max(0, (now - last) / 1000)); last = now; api.frame(now / 1000, dt); if (on && !reduced()) raf = requestAnimationFrame(loop); };
    const start = () => { if (!raf && on) { last = performance.now(); raf = requestAnimationFrame(loop); } };
    const io = new IntersectionObserver(([e]) => { on = e.isIntersecting && !document.hidden; start(); });
    const ro = new ResizeObserver(() => { api.resize?.(); api.frame(performance.now() / 1000, 0); });
    const vis = () => { on = !document.hidden; start(); };
    io.observe(cv); ro.observe(cv); document.addEventListener("visibilitychange", vis);
    if (reduced()) api.frame(4, 0); else start();
    return () => { cancelAnimationFrame(raf); io.disconnect(); ro.disconnect(); document.removeEventListener("visibilitychange", vis); api.dispose?.(); };
  }, []);
}

/** The hero's background: drifting pixel patches, and a thread that follows the cursor like a needle. Click to stitch. */
export function Field() {
  const ref = useRef<HTMLCanvasElement>(null);
  useLoop(ref, (cv) => {
    const ctx = cv.getContext("2d")!, P = 3;
    let W = 0, H = 0, dpr = 1;
    const host = cv.parentElement!;
    const ptr = { x: -1, y: -1, on: false };
    const rope = Array.from({ length: 34 }, () => ({ x: 0, y: 0 }));
    const bits = Array.from({ length: 26 }, () => ({ x: Math.random(), y: Math.random(), s: 2 + Math.floor(Math.random() * 3), c: PATCH[Math.floor(Math.random() * 5)], v: 0.01 + Math.random() * 0.02, p: Math.random() * 6 }));
    const bursts: { x: number; y: number; t: number }[] = [];
    const move = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); ptr.x = e.clientX - r.left; ptr.y = e.clientY - r.top; ptr.on = true; };
    const leave = () => { ptr.on = false; };
    const click = (e: PointerEvent) => { if ((e.target as Element).closest("a,button,canvas.hm-sew")) return; const r = cv.getBoundingClientRect(); bursts.push({ x: e.clientX - r.left, y: e.clientY - r.top, t: 0 }); };
    host.addEventListener("pointermove", move); host.addEventListener("pointerleave", leave); host.addEventListener("pointerdown", click);
    const resize = () => { const r = cv.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); rope.forEach((p) => { p.x = W * 0.5; p.y = H * 0.6; }); };
    resize();
    const px = (x: number, y: number, c: string, s = P) => { ctx.fillStyle = c; ctx.fillRect(Math.round(x / P) * P, Math.round(y / P) * P, s, s); };
    return {
      resize,
      dispose: () => { host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave); host.removeEventListener("pointerdown", click); },
      frame: (t, dt) => {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H);
        // Little patches drifting up through the dark, each a tiny pixel pattern.
        for (const b of bits) {
          b.y -= b.v * dt; if (b.y < -0.05) { b.y = 1.05; b.x = Math.random(); }
          const x = b.x * W + Math.sin(t * 0.4 + b.p) * 12, y = b.y * H, s = b.s * 4;
          ctx.globalAlpha = 0.28 + 0.12 * Math.sin(t + b.p);
          ctx.fillStyle = b.c; ctx.fillRect(Math.round(x), Math.round(y), s, s);
          ctx.fillStyle = INK; ctx.fillRect(Math.round(x + s / 4), Math.round(y + s / 4), Math.round(s / 2), Math.round(s / 2));
        }
        ctx.globalAlpha = 1;
        // The thread: its needle follows the cursor (or wanders on its own), the rest trails behind.
        const head = rope[0];
        const tx = ptr.on ? ptr.x : W * (0.55 + 0.3 * Math.sin(t * 0.37)), ty = ptr.on ? ptr.y : H * (0.55 + 0.3 * Math.sin(t * 0.53 + 1));
        head.x += (tx - head.x) * Math.min(1, dt * (ptr.on ? 14 : 2)); head.y += (ty - head.y) * Math.min(1, dt * (ptr.on ? 14 : 2));
        for (let i = 1; i < rope.length; i++) {
          const a = rope[i - 1], b = rope[i], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1;
          if (d > 9) { b.x = a.x + (dx / d) * 9; b.y = a.y + (dy / d) * 9; }
          b.y += 18 * dt;
        }
        for (let i = rope.length - 1; i > 0; i--) {
          const a = rope[i - 1], b = rope[i], n = Math.ceil(Math.hypot(b.x - a.x, b.y - a.y) / P);
          ctx.globalAlpha = 1 - i / rope.length;
          for (let k = 0; k < n; k++) if ((k + i) % 3) px(a.x + ((b.x - a.x) * k) / n, a.y + ((b.y - a.y) * k) / n, TOMATO);
        }
        ctx.globalAlpha = 1;
        // The needle: a silver sliver with an eye.
        const ang = Math.atan2(head.y - rope[2].y, head.x - rope[2].x);
        for (let k = 0; k < 7; k++) px(head.x + Math.cos(ang) * k * P, head.y + Math.sin(ang) * k * P, k === 1 ? INK : k === 6 ? "#ffffff" : "#c9c3d6");
        // Stitches where you clicked.
        for (const b of bursts) {
          b.t += dt;
          for (let k = 0; k < 8; k++) {
            const a = (k / 8) * Math.PI * 2, r = 8 + b.t * 80;
            const x = b.x + Math.cos(a) * r, y = b.y + Math.sin(a) * r, c = PATCH[k % 5];
            ctx.globalAlpha = Math.max(0, 1 - b.t / 0.7);
            px(x - P, y, c); px(x + P, y, c); px(x, y - P, c); px(x, y + P, c);
          }
        }
        ctx.globalAlpha = 1;
        while (bursts.length && bursts[0].t > 0.7) bursts.shift();
      },
    };
  });
  return <canvas className="hm-field" ref={ref} aria-hidden="true" />;
}

// Pixel patterns for a 14x14 patch: true where the second colour goes.
const N = 14;
const PATTERNS: ((x: number, y: number) => boolean)[] = [
  () => false,
  (x, y) => ((x >> 1) + (y >> 1)) % 2 === 0,
  (x, y) => (x + y) % 5 < 2,
  (x, y) => x % 5 < 2 && y % 5 < 2,
  (x, y) => x > y,
  (x, y) => x === 6 || x === 7 || y === 6 || y === 7,
  (x, y) => (y + Math.round(1.6 * Math.sin(x * 0.9))) % 5 < 2,
  (x, y) => x < 2 || x > 11 || y < 2 || y > 11,
  (x, y) => (x - 6.5) ** 2 + (y - 6.5) ** 2 < 18,
  (x, y) => Math.abs(x - 6.5) + Math.abs(y - 6.5) < 6,
];
const BAYER = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5].map((v) => (v + 0.5) / 16);

/** A pixel-art quilt that sews itself: a needle runs from square to square, each square fills in, the seams get stitched;
 *  then it shimmers, unpicks itself and begins again. Pass over a square and it is re-sewn. */
export function Sewing() {
  const ref = useRef<HTMLCanvasElement>(null);
  useLoop(ref, (cv) => {
    const C = 7, R = 5, S = 2, Wd = C * N + (C + 1) * S + 4, Hd = R * N + (R + 1) * S + 4;
    cv.width = Wd; cv.height = Hd;
    const ctx = cv.getContext("2d")!;
    type Cell = { p: number; a: string; b: string; fill: number; next?: { p: number; a: string; b: string }; redo: number };
    const fresh = () => { const a = PATCH[Math.floor(Math.random() * PATCH.length)]; let b = PATCH[Math.floor(Math.random() * PATCH.length)]; if (b === a) b = INK; return { p: Math.floor(Math.random() * PATTERNS.length), a, b }; };
    const cells: Cell[] = Array.from({ length: C * R }, () => ({ ...fresh(), fill: 0, redo: 0 }));
    // Sewing order: a snake, row by row.
    const order = Array.from({ length: R }, (_, r) => Array.from({ length: C }, (_, c) => r * C + (r % 2 ? C - 1 - c : c))).flat();
    let phase: "sew" | "hold" | "unpick" = "sew", step = 0, k = 0, hold = 0;
    const needle = { x: 2, y: 2 };
    const origin = (i: number) => ({ x: 2 + S + (i % C) * (N + S), y: 2 + S + Math.floor(i / C) * (N + S) });
    const ptr = { x: -1, y: -1 };
    const move = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); ptr.x = ((e.clientX - r.left) / r.width) * Wd; ptr.y = ((e.clientY - r.top) / r.height) * Hd; };
    const leave = () => { ptr.x = ptr.y = -1; };
    cv.addEventListener("pointermove", move); cv.addEventListener("pointerleave", leave);
    const drawCell = (i: number, cell: Cell, f: number) => {
      const o = origin(i);
      for (let y = 0; y < N; y++) for (let x = 0; x < N; x++) {
        if (BAYER[(y % 4) * 4 + (x % 4)] > f) continue;
        ctx.fillStyle = PATTERNS[cell.p](x, y) ? cell.b : cell.a;
        ctx.fillRect(o.x + x, o.y + y, 1, 1);
      }
    };
    if (reduced()) cells.forEach((c) => (c.fill = 1));
    else { step = 18; for (let q = 0; q < step; q++) cells[order[q]].fill = 1; const o = origin(order[step]); needle.x = o.x; needle.y = o.y; } // arrive half-sewn
    return {
      dispose: () => { cv.removeEventListener("pointermove", move); cv.removeEventListener("pointerleave", leave); },
      frame: (t, dt) => {
        // Progress: sew a square at a time, hold, unpick, start again.
        if (!reduced()) {
          if (phase === "sew") {
            const i = order[step], o = origin(i), tx = o.x + N / 2, ty = o.y + N / 2;
            needle.x += (tx - needle.x) * Math.min(1, dt * 14); needle.y += (ty - needle.y) * Math.min(1, dt * 14);
            if (Math.hypot(tx - needle.x, ty - needle.y) < 1.5) { cells[i].fill = Math.min(1, cells[i].fill + dt * 4.5); if (cells[i].fill >= 1) { step++; if (step >= order.length) { phase = "hold"; hold = 0; } } }
          } else if (phase === "hold") { hold += dt; if (hold > 4) { phase = "unpick"; k = order.length - 1; } }
          else {
            const i = order[k]; cells[i].fill = Math.max(0, cells[i].fill - dt * 9);
            if (cells[i].fill <= 0) { Object.assign(cells[i], fresh()); k--; if (k < 0) { phase = "sew"; step = 0; } }
          }
          // Re-sew whatever square the pointer passes over.
          if (ptr.x >= 0 && phase !== "unpick") {
            const ci = Math.floor((ptr.x - 2 - S) / (N + S)), ri = Math.floor((ptr.y - 2 - S) / (N + S)), i = ri * C + ci;
            if (ci >= 0 && ci < C && ri >= 0 && ri < R && cells[i].fill >= 1 && !cells[i].next && cells[i].redo <= 0) { cells[i].next = fresh(); cells[i].redo = 1; }
          }
          for (const c of cells) if (c.next) { c.redo -= dt * 5; if (c.redo <= 0.5 && c.next) { Object.assign(c, c.next); c.next = undefined; c.redo = 0.5; } if (c.redo <= 0) { c.redo = -0.6; } } else if (c.redo < 0) c.redo = Math.min(0, c.redo + dt);
        }
        // The hoop, the backing, the squares, the stitched seams.
        ctx.fillStyle = "#2a2733"; ctx.fillRect(0, 0, Wd, Hd);
        ctx.fillStyle = INK2; ctx.fillRect(2, 2, Wd - 4, Hd - 4);
        for (let i = 0; i < cells.length; i++) {
          const c = cells[i];
          const f = c.next ? Math.abs(c.redo - 0.5) * 2 : c.fill;
          if (f > 0) drawCell(i, c, f);
        }
        ctx.fillStyle = "rgba(244,239,230,.75)";
        for (let i = 0; i < cells.length; i++) {
          if (cells[i].fill < 1) continue;
          const o = origin(i), right = i % C < C - 1 && cells[i + 1].fill >= 1, down = i + C < cells.length && cells[i + C].fill >= 1;
          const off = Math.floor(t * 4) % 2;
          if (right) for (let y = 1 + off; y < N; y += 3) ctx.fillRect(o.x + N, o.y + y, 2, 1);
          if (down) for (let x = 1 + off; x < N; x += 3) ctx.fillRect(o.x + x, o.y + N, 1, 2);
        }
        // Shimmer while it is finished.
        if (phase === "hold") for (let s = 0; s < 4; s++) { const i = Math.floor(((t * 3 + s * 7.3) % cells.length)); const o = origin(i); ctx.fillStyle = "#ffffff"; ctx.fillRect(o.x + ((s * 5 + Math.floor(t * 9)) % N), o.y + ((s * 3 + Math.floor(t * 7)) % N), 1, 1); }
        // Needle and thread while sewing.
        if (phase === "sew" && !reduced()) {
          const prev = step > 0 ? origin(order[step - 1]) : { x: 2, y: 2 };
          const ax = prev.x + N / 2, ay = prev.y + N / 2;
          ctx.fillStyle = TOMATO;
          const n = Math.ceil(Math.hypot(needle.x - ax, needle.y - ay));
          for (let q = 0; q < n; q += 2) ctx.fillRect(Math.round(ax + ((needle.x - ax) * q) / n), Math.round(ay + ((needle.y - ay) * q) / n), 1, 1);
          ctx.fillStyle = "#e8e4f0"; ctx.fillRect(Math.round(needle.x), Math.round(needle.y) - 5, 1, 6);
          ctx.fillStyle = "#ffffff"; ctx.fillRect(Math.round(needle.x), Math.round(needle.y) - 6, 1, 1);
        }
      },
    };
  });
  return <canvas className="hm-sew" ref={ref} role="img" aria-label="A pixel quilt sewing itself together, square by square" />;
}
