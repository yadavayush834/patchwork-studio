import { type AsciiScene, type CellFrame, type RGB, clamp, hexRgb } from "./cells";
import { type Daylight, NIGHT } from "./daylight";
import { Light, noise2, rand } from "./kit";

/**
 * Koi pond: a still garden pond, seen from above, in characters.
 * Seven koi swim on a slow wander, each a chain of segments that follows its
 * head, with patterned scales, fins and a tail that sweeps. Light caustics
 * shimmer on the bottom; lily pads and one lotus float. The cursor drags
 * ripples through the water; a click drops food and the koi come for it.
 */
const ORANGE = 0, WHITE = 1, INK = 2, GOLD = 3, CAUSTIC = 4, PAD = 5, PAD2 = 6, BLOOM = 7, RIPPLE = 8, FOOD = 9, SHADOW = 10;
const SEG = 12;

interface Fish { x: number; y: number; a: number; v: number; turn: number; seed: number; size: number; spine: [number, number][]; pattern: number }
interface Pad { x: number; y: number; r: number; notch: number; flower: boolean }

export class Koi implements AsciiScene {
  palette: RGB[];
  background = "#03161a";
  bloom = 0.55;
  grid = 0;
  private light = new Light();
  private W = 0; private H = 0; private cw = 10; private ch = 16; private aspect = 0.6;
  private t = 0;
  private fish: Fish[] = []; private pads: Pad[] = [];
  private ripples: { x: number; y: number; r: number; life: number }[] = [];
  private food: { x: number; y: number; life: number }[] = [];
  private last = { x: -1, y: -1 };
  private count: number;
  private day: Daylight = NIGHT;
  daylight(d: Daylight) { this.day = d; }

  constructor(color: string, density: number) {
    this.palette = [hexRgb(color), [250, 244, 232], [24, 22, 30], [255, 204, 90], [90, 200, 200], [70, 150, 80], [120, 190, 100], [255, 150, 190], [170, 230, 230], [210, 160, 90], [2, 10, 12]];
    this.count = Math.round(7 * clamp(density, 0.6, 1.5));
  }
  resize(width: number, height: number, frame: CellFrame) {
    const first = !this.W;
    this.W = width; this.H = height; this.cw = frame.cw; this.ch = frame.ch; this.aspect = frame.cw / frame.ch;
    this.light.resize(frame);
    const cols = frame.cols, rows = frame.rows;
    if (first || !this.fish.length) {
      this.fish = [];
      for (let i = 0; i < this.count; i++) {
        const x = cols * (0.15 + rand(i * 3.1) * 0.7), y = rows * (0.15 + rand(i * 5.3) * 0.7), a = rand(i * 7.7) * 6.283;
        this.fish.push({ x, y, a, v: 5 + rand(i) * 3, turn: 0, seed: i * 17.3, size: 1.25 + rand(i * 2.2) * 0.6, pattern: i % 4, spine: Array.from({ length: SEG }, () => [x, y] as [number, number]) });
      }
    }
    this.pads = [];
    const spots = [[0.12, 0.2, 5], [0.85, 0.15, 6], [0.78, 0.78, 7], [0.2, 0.82, 4.5], [0.55, 0.12, 3.5], [0.92, 0.5, 4]];
    spots.forEach(([u, v, r], i) => this.pads.push({ x: u * cols, y: v * rows, r: r * (cols / 120), notch: rand(i * 4.1) * 6.283, flower: i === 2 }));
  }
  pointer(x: number, y: number, active: boolean) {
    if (!active) return;
    const cx = x / this.cw, cy = y / this.ch;
    if (Math.hypot(cx - this.last.x, (cy - this.last.y) / this.aspect) > 3) { this.ripples.push({ x: cx, y: cy, r: 0, life: 1 }); this.last = { x: cx, y: cy }; }
  }
  poke(x: number, y: number) {
    const cx = x / this.cw, cy = y / this.ch;
    for (let i = 0; i < 6; i++) this.food.push({ x: cx + (rand(i + this.t) - 0.5) * 4, y: cy + (rand(i * 3 + this.t) - 0.5) * 2, life: 1 });
    this.ripples.push({ x: cx, y: cy, r: 0, life: 1.3 });
  }
  step(dt: number) {
    this.t += dt;
    const { cols, rows } = this.light; if (!cols) return;
    for (const f of this.fish) {
      // steer: wander, keep off the edges, go for the nearest food
      let want = f.a + noise2(this.t * 0.25, f.seed, 4) * 1.4;
      const mx = cols * 0.08, my = rows * 0.1;
      if (f.x < mx) want = 0; if (f.x > cols - mx) want = Math.PI; if (f.y < my) want = Math.PI / 2; if (f.y > rows - my) want = -Math.PI / 2;
      let speed = 4 + noise2(this.t * 0.4, f.seed + 9) * 2;
      let near: { x: number; y: number; life: number } | null = null, best = 30;
      for (const p of this.food) { const d = Math.hypot(p.x - f.x, (p.y - f.y) / this.aspect); if (d < best) { best = d; near = p; } }
      if (near) { want = Math.atan2((near.y - f.y) / this.aspect, near.x - f.x); speed = 11; if (best < 1.5) { near.life = 0; f.size = Math.min(2.1, f.size + 0.01); } }
      let da = ((want - f.a + Math.PI * 3) % (Math.PI * 2)) - Math.PI;
      f.turn += (clamp(da, -1, 1) * 1.8 - f.turn) * Math.min(1, dt * 3);
      f.a += f.turn * dt;
      f.v += (speed - f.v) * Math.min(1, dt * 1.5);
      f.x += Math.cos(f.a) * f.v * dt; f.y += Math.sin(f.a) * f.v * dt * this.aspect;
      // the body follows the head, one segment at a time
      f.spine[0] = [f.x, f.y];
      const link = 0.85 * f.size;
      for (let i = 1; i < SEG; i++) {
        const [px, py] = f.spine[i - 1], [qx, qy] = f.spine[i];
        const dx = qx - px, dy = (qy - py) / this.aspect, d = Math.hypot(dx, dy) || 1;
        f.spine[i] = [px + (dx / d) * link, py + (dy / d) * link * this.aspect];
      }
    }
    for (const r of this.ripples) { r.r += dt * 9; r.life -= dt * 0.55; }
    this.ripples = this.ripples.filter((r) => r.life > 0).slice(-24);
    for (const p of this.food) p.life -= dt * 0.05;
    this.food = this.food.filter((p) => p.life > 0);
  }
  render(frame: CellFrame) {
    const L = this.light; L.clear();
    const { cols, rows } = L; if (!cols) return;
    // caustics on the pond floor: two drifting noise fields, bright where their ridges cross
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const a = Math.abs(noise2(x * 0.09 + this.t * 0.12, y * 0.16, 1)), b = Math.abs(noise2(x * 0.11 - this.t * 0.09, y * 0.19 + this.t * 0.05, 2));
      const c = Math.pow(1 - Math.min(a, b) * 3.2, 4);
      if (c > 0.12) L.set(x, y, Math.min(0.42, c * 0.36) * (0.75 + 0.6 * (1 - this.day.night)), CAUSTIC, c > 0.6 ? "~" : c > 0.35 ? "-" : ".");
    }
    // ripples
    for (const r of this.ripples) for (let k = 0; k < 64; k++) {
      const a = (k / 64) * 6.283, x = r.x + Math.cos(a) * r.r, y = r.y + Math.sin(a) * r.r * this.aspect;
      L.add(x, y, r.life * 0.5, RIPPLE, k % 2 ? "o" : "°");
    }
    for (const p of this.food) L.set(p.x, p.y, 0.8 * p.life + 0.2, FOOD, "•");
    // koi: shadow first, then body, fins, tail and eyes
    for (const f of this.fish) {
      for (let i = 0; i < SEG; i += 2) L.add(f.spine[i][0] + 1.2, f.spine[i][1] + 0.9, 0.05, SHADOW, " ");
      for (let i = 0; i < SEG; i++) for (let sub = 0; sub < 3; sub++) {
        const [ax, ay] = f.spine[i], [bx, by] = f.spine[Math.min(SEG - 1, i + 1)], q = sub / 3;
        const x = ax + (bx - ax) * q, y = ay + (by - ay) * q;
        const [nx, ny] = [bx + (ax === bx && ay === by ? 0.01 : 0), by];
        const ang = Math.atan2((y - ny) / this.aspect, x - nx), px = -Math.sin(ang), py = Math.cos(ang) * this.aspect;
        const w = f.size * (i < 2 ? 1 + i * 0.6 : 2.2 * Math.pow(1 - (i - 2) / (SEG - 2), 0.9) + 0.3);
        for (let s = -w; s <= w; s += 0.5) {
          const cx = x + px * s, cy = y + py * s;
          const n = noise2(i * 0.55 + f.seed, s * 0.6, f.pattern + 3);
          const c = f.pattern === 0 ? (n > 0.05 ? ORANGE : WHITE) : f.pattern === 1 ? (n > 0.35 ? INK : n > -0.2 ? WHITE : ORANGE) : f.pattern === 2 ? GOLD : (n > 0.2 ? ORANGE : n > -0.4 ? WHITE : INK);
          const edge = Math.abs(s) > w - 0.6, back = Math.abs(s) < 0.6;
          if (edge) { if (L.lum[(Math.round(cy) * L.cols + Math.round(cx))] < 0.5) L.set(cx, cy, 0.32, c, "."); }
          else L.set(cx, cy, back ? 1 : 0.92, c, back ? "#" : (i + Math.round(s * 2)) % 2 ? "%" : "#");
        }
        if (i === 3 && sub === 0) for (const side of [-1, 1]) { // pectoral fins, sculling
          const sw = Math.sin(this.t * 6 + f.seed) * 0.6;
          for (let k = 1; k <= 2; k++) L.set(x + px * side * (w + k * 0.7) - Math.cos(ang) * (k * 0.8 + sw), y + py * side * (w + k * 0.7) - Math.sin(ang) * this.aspect * k * 0.8, 0.5, WHITE, "+");
        }
      }
      // the tail fans and sweeps
      const [tx, ty] = f.spine[SEG - 1], [ux, uy] = f.spine[SEG - 3], ta = Math.atan2((ty - uy) / this.aspect, tx - ux) + Math.sin(this.t * 5 + f.seed) * 0.5;
      for (let k = 1; k <= 4; k++) for (const sp of [-0.45, -0.15, 0.15, 0.45]) L.set(tx + Math.cos(ta + sp) * k * 0.9, ty + Math.sin(ta + sp) * k * 0.9 * this.aspect, k < 3 ? 0.85 : 0.5, f.pattern === 2 ? GOLD : f.pattern === 1 ? WHITE : ORANGE, k < 3 ? "%" : ":");
      const [hx, hy] = f.spine[0], ha = f.a;
      for (const side of [-1, 1]) L.set(hx - Math.sin(ha) * side * 0.9 * f.size, hy + Math.cos(ha) * side * 0.9 * f.size * this.aspect, 1, INK, "o");
    }
    // lily pads float above everything, one with a lotus
    for (const p of this.pads) {
      for (let y = -p.r; y <= p.r; y += 1) for (let x = -p.r; x <= p.r; x += 1) {
        const rr = Math.hypot(x, y / this.aspect); // round from above, though cells are tall
        if (rr > p.r) continue;
        const a = Math.atan2(y / this.aspect, x), cut = Math.abs(((a - p.notch + Math.PI * 3) % (Math.PI * 2)) - Math.PI) < 0.3;
        if (cut) continue;
        const vein = Math.abs(Math.sin(a * 5)) < 0.16, rim = rr > p.r - 1;
        L.set(p.x + x, p.y + y, rim ? 0.8 : 0.6, rim ? PAD2 : PAD, rim ? "o" : vein ? "\\" : "%");
      }
      if (p.flower) for (let k = 0; k < 10; k++) { const a = k * 0.628 + this.t * 0.1, d = k % 2 ? 1.6 : 2.6; L.set(p.x + Math.cos(a) * d, p.y + Math.sin(a) * d * 0.6, 0.95, BLOOM, k % 2 ? "*" : "o"); }
      if (p.flower) L.set(p.x, p.y, 1, GOLD, "@");
    }
    L.emit(frame, " .-~=:#", 0.58);
  }
  underlay(ctx: CanvasRenderingContext2D) {
    const { W, H } = this;
    const g = ctx.createRadialGradient(W * 0.5, H * 0.45, 0, W * 0.5, H * 0.5, Math.max(W, H) * 0.75);
    const n = this.day.night, tw = this.day.twilight, lerp = (a: number, b: number) => Math.round(a + (b - a) * (1 - n));
    g.addColorStop(0, `rgb(${lerp(11, 30)},${lerp(58, 120)},${lerp(62, 112)})`); g.addColorStop(0.6, `rgb(${lerp(6, 18)},${lerp(36, 80)},${lerp(40, 80)})`); g.addColorStop(1, `rgb(${lerp(2, 8)},${lerp(12, 40)},${lerp(14, 42)})`);
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    if (tw > 0.03) { ctx.fillStyle = `rgba(255,150,90,${0.14 * tw})`; ctx.fillRect(0, 0, W, H); }
    // the moon, mirrored in still water
    if (n > 0.3) {
      const mx = W * 0.72, my = H * 0.3, m = ctx.createRadialGradient(mx, my, 0, mx, my, H * 0.32);
      m.addColorStop(0, `rgba(220,240,255,${0.32 * n})`); m.addColorStop(0.18, `rgba(200,230,255,${0.12 * n})`); m.addColorStop(1, "rgba(200,230,255,0)");
      ctx.fillStyle = m; ctx.fillRect(0, 0, W, H);
    }
    // soft shadows of the fish on the pond floor
    ctx.fillStyle = "rgba(0,0,0,0.28)";
    for (const f of this.fish) for (let i = 0; i < SEG; i += 2) { const [x, y] = f.spine[i]; ctx.beginPath(); ctx.ellipse((x + 1.6) * this.cw, (y + 1.2) * this.ch, this.cw * 2.2 * f.size, this.ch * 0.9 * f.size, 0, 0, 6.283); ctx.fill(); }
  }
}
