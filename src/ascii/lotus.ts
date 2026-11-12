import { type AsciiScene, type CellFrame, type RGB, clamp, hexRgb } from "./cells";
import { type Daylight, NIGHT } from "./daylight";
import { Light, noise2, rand } from "./kit";

/**
 * Night lotus: a glowing lotus made of characters, turning slowly over black water.
 * Petals are painted with real gradients on a tiny canvas (one pixel per cell),
 * read back as light, then smeared into
 * vertical light streaks like a long exposure. God rays and pollen sit behind,
 * a rippled reflection below. The cursor tilts the flower; a click makes it open.
 */
const PINK = 0, PEACH = 1, WHITE = 2, GOLD = 3, DEEP = 4, WATER = 5, POLLEN = 6;

export class Lotus implements AsciiScene {
  palette: RGB[];
  background = "#070406";
  bloom = 0.95;
  grid = 0;
  private light = new Light();
  private W = 0; private H = 0; private cw = 10; private ch = 16;
  private t = 0; private yaw = 0; private tilt = 0.3;
  private ptr = { x: 0.5, y: 0.5, on: false };
  private open = 0; private pulse = 0;
  private day: Daylight = NIGHT;
  daylight(d: Daylight) { this.day = d; }
  private motes: { x: number; y: number; v: number; s: number }[] = [];
  private sparks: { x: number; y: number; vx: number; vy: number; life: number }[] = [];

  constructor(color: string, density: number) {
    this.palette = [hexRgb(color), [255, 196, 168], [255, 244, 236], [255, 206, 112], [176, 62, 118], [86, 44, 70], [255, 220, 200]];
    for (let i = 0; i < Math.round(70 * clamp(density, 0.5, 1.6)); i++) this.motes.push({ x: rand(i * 3.1), y: rand(i * 7.3), v: 0.01 + rand(i * 1.7) * 0.03, s: rand(i * 9.9) });
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width; this.H = height; this.cw = frame.cw; this.ch = frame.ch;
    this.light.resize(frame);
    frame.bloom = this.bloom; frame.gridAlpha = this.grid;
  }
  pointer(x: number, y: number, active: boolean) { this.ptr = { x: x / (this.W || 1), y: y / (this.H || 1), on: active }; }
  poke(x: number, y: number) {
    this.pulse = 1;
    for (let i = 0; i < 40; i++) { const a = rand(i + this.t * 31) * 6.283, s = 40 + rand(i * 5 + this.t) * 160; this.sparks.push({ x, y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 40, life: 1 }); }
  }
  step(dt: number) {
    this.t += dt;
    const p = this.ptr;
    const wantYaw = p.on ? (p.x - 0.5) * 1.2 : 0, wantTilt = p.on ? 0.18 + p.y * 0.32 : 0.3;
    this.yaw += (wantYaw - this.yaw) * Math.min(1, dt * 2);
    this.tilt += (wantTilt - this.tilt) * Math.min(1, dt * 2);
    this.pulse = Math.max(0, this.pulse - dt * 0.45);
    this.open = 0.08 * Math.sin(this.t * 0.6) + this.pulse * 0.32 + (1 - this.day.night) * 0.16;
    for (const m of this.motes) { m.y -= m.v * dt; m.x += Math.sin(this.t * 0.7 + m.s * 9) * 0.004 * dt; if (m.y < -0.05) { m.y = 1.05; m.x = rand(m.s * 99 + this.t); } }
    for (const s of this.sparks) { s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 60 * dt; s.vx *= 0.98; s.life -= dt * 0.8; }
    this.sparks = this.sparks.filter((s) => s.life > 0);
  }
  /** Centre and size of the flower in cells. */
  private geom() {
    const L = this.light, cx = L.cols * 0.5, cy = L.rows * 0.56;
    const scale = Math.min(L.cols * 0.24, L.rows * 0.5 * (this.ch / this.cw)); // in columns
    return { cx, cy, scale, aspect: this.cw / this.ch };
  }
  private art: HTMLCanvasElement | null = null;
  /** Paint the flower with real gradients on a canvas one pixel per cell, then read it back as light. */
  private paintFlower() {
    const L = this.light;
    if (typeof document === "undefined") return;
    const c = (this.art ??= document.createElement("canvas"));
    if (c.width !== L.cols || c.height !== L.rows) { c.width = L.cols; c.height = L.rows; }
    const g = c.getContext("2d", { willReadFrequently: true })!;
    g.setTransform(1, 0, 0, 1, 0, 0); g.clearRect(0, 0, c.width, c.height);
    const { cx, cy, scale, aspect } = this.geom();
    // cells are taller than wide: squash y so the flower keeps its proportions
    g.translate(cx, cy + scale * aspect * 0.22); g.scale(1, aspect);
    const S = scale * 1.3, t = this.t, open = 1 + this.open;
    const petal = (ang: number, len: number, wid: number, base: string, tip: string, alpha = 1) => {
      g.save(); g.rotate(ang * open);
      const gr = g.createLinearGradient(0, 0, 0, -len);
      gr.addColorStop(0, base); gr.addColorStop(0.55, base); gr.addColorStop(1, tip);
      g.globalAlpha = alpha; g.fillStyle = gr;
      g.beginPath(); g.moveTo(0, 0);
      g.bezierCurveTo(wid, -len * 0.25, wid * 0.85, -len * 0.75, 0, -len);
      g.bezierCurveTo(-wid * 0.85, -len * 0.75, -wid, -len * 0.25, 0, 0);
      g.fill();
      // a bright rim along each edge
      g.strokeStyle = tip; g.lineWidth = Math.max(0.9, wid * 0.14); g.globalAlpha = alpha * 0.8; g.stroke();
      g.restore();
    };
    const sway = (i: number) => Math.sin(t * 0.9 + i * 1.7) * 0.03 + this.yaw * 0.08;
    // flat outer petals and the back ring, then the middle, then the tall front petals
    [-1.62, 1.62, -1.35, 1.35].forEach((a, i) => petal(a + sway(i), S * 0.95, S * 0.3, "rgb(70,14,42)", "rgb(255,140,185)", 0.9));
    [-1.05, -0.62, -0.22, 0.22, 0.62, 1.05].forEach((a, i) => petal(a + sway(i + 4), S * 1.0, S * 0.3, "rgb(95,22,58)", "rgb(255,200,222)", 0.95));
    [-0.82, -0.4, 0.4, 0.82].forEach((a, i) => petal(a + sway(i + 10), S * 0.82, S * 0.3, "rgb(130,40,80)", "rgb(255,232,238)"));
    [-0.18, 0.18].forEach((a, i) => petal(a + sway(i + 14), S * 0.78, S * 0.27, "rgb(170,70,100)", "rgb(255,248,244)"));
    petal(sway(16), S * 0.92, S * 0.26, "rgb(190,90,110)", "rgb(255,255,250)");
    // two bowl petals in front, lying low
    // the glowing heart
    const hg = g.createRadialGradient(0, -S * 0.2, 0, 0, -S * 0.2, S * 0.45);
    hg.addColorStop(0, `rgba(255,236,170,${0.85 + this.pulse * 0.15})`); hg.addColorStop(1, "rgba(255,200,150,0)");
    g.fillStyle = hg; g.fillRect(-S, -S, S * 2, S * 2);
    // read it back: brightness and the nearest palette colour for each cell
    const px = g.getImageData(0, 0, c.width, c.height).data;
    for (let y = 0; y < L.rows; y++) for (let x = 0; x < L.cols; x++) {
      const i = (y * L.cols + x) * 4, a = px[i + 3] / 255;
      if (a < 0.05) continue;
      const r = px[i], gg = px[i + 1], b = px[i + 2];
      const lum = (Math.max(r, gg, b) / 255) * (0.35 + 0.65 * a);
      const shimmer = 0.9 + 0.1 * noise2(x * 0.4, y * 0.6 + t * 1.5, 3);
      const color = gg > 225 && r > 240 ? WHITE : gg > 200 && b < 200 ? GOLD : gg > 150 ? PEACH : r > 200 ? PINK : DEEP;
      L.paint(x, y, Math.min(1.1, lum * lum * 1.05 * shimmer), color);
    }
  }
  render(frame: CellFrame) {
    const L = this.light; L.clear();
    if (!L.cols) return;
    const { cy, scale, aspect } = this.geom();
    this.paintFlower();
    L.streak(0.62, 7, 3);
    // Pollen and sparks float in front.
    for (const m of this.motes) L.add(m.x * L.cols, m.y * L.rows, 0.15 + 0.25 * Math.abs(Math.sin(this.t * 2 + m.s * 20)), POLLEN, m.s > 0.7 ? "·" : ".");
    for (const s of this.sparks) L.add(s.x / this.cw, s.y / this.ch, s.life, s.life > 0.5 ? GOLD : PEACH, s.life > 0.6 ? "*" : "'");
    // Reflection: the rows above the waterline, mirrored, rippled and dimmed.
    const water = Math.round(cy + scale * aspect * 0.32);
    for (let y = water; y < L.rows; y++) {
      const d = y - water, srcY = water - 1 - Math.round(d * 1.15);
      for (let x = 0; x < L.cols; x++) {
        const wob = Math.round(noise2(x * 0.15, y * 0.6 - this.t * 1.5) * (1 + d * 0.08));
        const sx = x + wob;
        if (srcY < 0 || sx < 0 || sx >= L.cols) continue;
        const j = srcY * L.cols + sx, l = L.lum[j] * 0.32 * Math.max(0, 1 - d / (L.rows - water + 4));
        const i = y * L.cols + x;
        if (l > L.lum[i]) { L.lum[i] = l; L.col[i] = L.col[j] === GOLD ? GOLD : DEEP; L.glyph[i] = (d + x) % 3 ? 0 : 126; }
      }
      // the waterline itself, faint
      if (d === 0) for (let x = 0; x < L.cols; x++) if ((x + (this.t * 4 | 0)) % 5 === 0) L.add(x, y, 0.08, WATER, "-");
    }
    L.emit(frame, " .:-=+*#%", 0.8);
    frame.bloom = this.bloom * (0.4 + 0.6 * this.day.night);
  }
  underlay(ctx: CanvasRenderingContext2D) {
    const { W, H } = this;
    const L = this.light, { cx, cy, scale } = this.geom();
    const x = cx * this.cw, y = (cy - scale * 0.06 * this.cw / this.ch * 4) * this.ch, R = scale * this.cw;
    // A warm halo and slow god rays from the heart of the flower.
    const dayAmt = 1 - this.day.night, tw = this.day.twilight;
    if (dayAmt > 0.02 || tw > 0.02) {
      const s = ctx.createLinearGradient(0, 0, 0, H);
      s.addColorStop(0, `rgba(${90 + tw * 120},${60 + dayAmt * 70},${110 + dayAmt * 60},${0.22 * dayAmt + 0.2 * tw})`);
      s.addColorStop(0.7, `rgba(${200 + tw * 55},${110 + tw * 40},${140 - tw * 40},${0.16 * dayAmt + 0.24 * tw})`);
      s.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = s; ctx.fillRect(0, 0, W, H);
    }
    const g = ctx.createRadialGradient(x, y, 0, x, y, R * 3.2);
    g.addColorStop(0, `rgba(255,${170 + tw * 50},${190 - tw * 70},${0.28 + this.pulse * 0.25 + dayAmt * 0.1})`); g.addColorStop(0.3, "rgba(190,70,120,0.12)"); g.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
    ctx.save(); ctx.translate(x, y); ctx.globalCompositeOperation = "lighter";
    for (let i = 0; i < 20; i++) {
      const a = (i / 26) * 6.283 + this.t * 0.03 + Math.sin(i * 7.3) * 0.25, len = R * (1.6 + rand(i) * 2.6), w = 0.008 + rand(i * 3) * 0.022;
      const rg = ctx.createLinearGradient(0, 0, Math.cos(a) * len, Math.sin(a) * len);
      rg.addColorStop(0, `rgba(255,150,190,${0.03 + 0.025 * Math.sin(this.t * 0.8 + i)})`); rg.addColorStop(1, "rgba(255,120,170,0)");
      ctx.fillStyle = rg; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(Math.cos(a - w) * len, Math.sin(a - w) * len); ctx.lineTo(Math.cos(a + w) * len, Math.sin(a + w) * len); ctx.closePath(); ctx.fill();
    }
    ctx.restore();
    void L;
  }
}
