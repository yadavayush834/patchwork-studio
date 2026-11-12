import { type AsciiScene, type CellFrame, type RGB, clamp, hexRgb } from "./cells";
import { Light, noise2, rand } from "./kit";
import { type Daylight, NIGHT } from "./daylight";

/**
 * Your painting: any picture, turned into living light made of characters.
 * The painting is sampled once per resize at one pixel per cell, its colours
 * gathered into a small palette, then every frame it breathes: a shimmer runs
 * through it, a slow beam of light sweeps across, the brightest strokes smear
 * into long-exposure streaks and sparkle. The picture itself glows softly
 * underneath, so it reads as light rather than text. The cursor is a lens that
 * stirs the characters; a click sends a ripple through the picture.
 */
const ACCENT = 0, SPARK = 1, FIRST = 2, SLOTS = 14;
const STIR = "01<>/\\*+#%=";

export type PaintSource = string | HTMLCanvasElement | HTMLImageElement | null | undefined;

/** The starter painting: a moon over hills and still water. Also the paint studio's first canvas. */
export function paintStarter(g: CanvasRenderingContext2D, w: number, h: number, accent = "#ffd08a") {
  g.save();
  g.globalCompositeOperation = "source-over";
  const sky = g.createLinearGradient(0, 0, 0, h * 0.68);
  sky.addColorStop(0, "#04020c"); sky.addColorStop(0.55, "#1c1046"); sky.addColorStop(1, "#8a3a78");
  g.fillStyle = sky; g.fillRect(0, 0, w, h);
  // stars
  for (let i = 0; i < 90; i++) {
    const x = rand(i * 3.7) * w, y = rand(i * 9.1) * h * 0.55, s = 0.6 + rand(i * 1.3) * 1.6;
    g.fillStyle = `rgba(255,248,235,${0.35 + rand(i * 5.5) * 0.65})`; g.fillRect(x, y, s, s);
  }
  // the moon and its halo
  const mx = w * 0.66, my = h * 0.3, mr = h * 0.11;
  const halo = g.createRadialGradient(mx, my, mr * 0.6, mx, my, mr * 4.5);
  halo.addColorStop(0, accent); halo.addColorStop(0.25, accent + "55"); halo.addColorStop(1, accent + "00");
  g.fillStyle = halo; g.fillRect(0, 0, w, h);
  const disc = g.createRadialGradient(mx - mr * 0.3, my - mr * 0.3, 0, mx, my, mr);
  disc.addColorStop(0, "#fffdf4"); disc.addColorStop(1, "#ffe2a8");
  g.fillStyle = disc; g.beginPath(); g.arc(mx, my, mr, 0, Math.PI * 2); g.fill();
  // two ranges of hills, the near one darker, with a lit rim
  const hills = (base: number, amp: number, freq: number, seed: number, fill: string, rim: string) => {
    g.beginPath(); g.moveTo(0, h);
    for (let x = 0; x <= w; x += 4) g.lineTo(x, h * base - Math.sin(x * freq + seed) * h * amp - Math.sin(x * freq * 2.7 + seed * 2) * h * amp * 0.35);
    g.lineTo(w, h); g.closePath(); g.fillStyle = fill; g.fill();
    g.strokeStyle = rim; g.lineWidth = 2; g.stroke();
  };
  hills(0.6, 0.06, 0.012, 1, "#0d0614", "#ff8fc4");
  hills(0.7, 0.04, 0.02, 4, "#030106", "#ffc0e0");
  // water and the moon's path across it
  const water = g.createLinearGradient(0, h * 0.72, 0, h);
  water.addColorStop(0, "#08040f"); water.addColorStop(1, "#020106");
  g.fillStyle = water; g.fillRect(0, h * 0.72, w, h * 0.28);
  for (let y = h * 0.74; y < h; y += 8) {
    const k = (y - h * 0.72) / (h * 0.28), half = mr * (0.6 + k * 1.4) * (0.6 + rand(y) * 0.6);
    g.fillStyle = `rgba(255,226,170,${0.85 - k * 0.45})`; g.fillRect(mx - half, y, half * 2, 4);
  }
  g.restore();
}

export class Paint implements AsciiScene {
  palette: RGB[];
  background = "#040308";
  bloom = 0.75;
  grid = 0;
  private light = new Light();
  private W = 0; private H = 0; private cw = 10; private ch = 16; private t = 0;
  private src: CanvasImageSource | null = null;
  private srcSize = { w: 0, h: 0 };
  private art: HTMLCanvasElement | null = null;
  private base = new Float32Array(0);
  private tone = new Uint8Array(0);
  private dirty = true;
  private paletteDirty = true;
  private ptr = { x: -99, y: -99, on: false };
  private ripples: { x: number; y: number; r: number; life: number }[] = [];
  private sparks: { x: number; y: number; vx: number; vy: number; life: number }[] = [];
  private day: Daylight = NIGHT;
  private accent: string;

  constructor(color: string, _density: number, source?: PaintSource) {
    this.accent = /^#[0-9a-f]{6}$/i.test(color) ? color : "#ffd08a";
    this.palette = [hexRgb(this.accent), [255, 250, 240], ...Array.from({ length: SLOTS }, () => [210, 210, 230] as RGB)];
    this.setSource(source);
  }
  /** Use a new picture: an image URL, an image, or a canvas someone is painting on. */
  setSource(source: PaintSource) {
    if (typeof document === "undefined") return;
    if (typeof source === "string" && source) {
      const img = new Image();
      img.decoding = "async";
      img.onload = () => this.use(img, img.naturalWidth, img.naturalHeight);
      img.onerror = () => this.useStarter();
      img.src = source;
      if (!this.src) this.useStarter();
    } else if (source instanceof HTMLCanvasElement) this.use(source, source.width, source.height);
    else if (source instanceof HTMLImageElement) this.use(source, source.naturalWidth, source.naturalHeight);
    else this.useStarter();
  }
  /** Read the picture again (after someone painted on the source canvas). */
  refresh() { this.dirty = true; }
  private use(src: CanvasImageSource, w: number, h: number) { this.src = src; this.srcSize = { w, h }; this.dirty = true; }
  private useStarter() {
    const c = document.createElement("canvas"); c.width = 480; c.height = 270;
    const g = c.getContext("2d"); if (g) paintStarter(g, 480, 270, this.accent);
    this.use(c, 480, 270);
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width; this.H = height; this.cw = frame.cw; this.ch = frame.ch;
    this.light.resize(frame);
    this.dirty = true;
  }
  daylight(d: Daylight) { this.day = d; }
  pointer(x: number, y: number, active: boolean) { this.ptr = { x: x / this.cw, y: y / this.ch, on: active }; }
  poke(x: number, y: number) {
    const cx = x / this.cw, cy = y / this.ch;
    this.ripples.push({ x: cx, y: cy, r: 0, life: 1 });
    for (let i = 0; i < 26; i++) {
      const a = rand(i + this.t * 17) * 6.283, s = 6 + rand(i * 3 + this.t) * 16;
      this.sparks.push({ x: cx, y: cy, vx: Math.cos(a) * s, vy: Math.sin(a) * s * 0.6 - 3, life: 1 });
    }
  }
  step(dt: number) {
    this.t += dt;
    for (const r of this.ripples) { r.r += dt * 22; r.life -= dt * 0.55; }
    this.ripples = this.ripples.filter((r) => r.life > 0);
    for (const s of this.sparks) { s.x += s.vx * dt; s.y += s.vy * dt; s.vy += 9 * dt; s.life -= dt * 0.9; }
    this.sparks = this.sparks.filter((s) => s.life > 0);
  }
  /** Sample the picture at one pixel per cell and gather its colours into a palette. */
  private sample() {
    this.dirty = false;
    const { cols, rows } = this.light;
    if (!cols || !this.src || typeof document === "undefined") return;
    const c = (this.art ??= document.createElement("canvas"));
    if (c.width !== cols || c.height !== rows) { c.width = cols; c.height = rows; }
    const g = c.getContext("2d", { willReadFrequently: true });
    if (!g) return;
    g.setTransform(1, 0, 0, 1, 0, 0);
    g.fillStyle = "#000"; g.fillRect(0, 0, cols, rows);
    // cover the section, measured in screen pixels, then squeezed into cells
    const { w, h } = this.srcSize, k = Math.max(this.W / (w || 1), this.H / (h || 1));
    const dw = w * k, dh = h * k;
    g.setTransform(1 / this.cw, 0, 0, 1 / this.ch, 0, 0);
    g.imageSmoothingEnabled = true; g.imageSmoothingQuality = "high";
    try { g.drawImage(this.src, (this.W - dw) / 2, (this.H - dh) / 2, dw, dh); } catch { return; }
    g.setTransform(1, 0, 0, 1, 0, 0);
    let px: Uint8ClampedArray;
    try { px = g.getImageData(0, 0, cols, rows).data; } catch { return; }
    const n = cols * rows;
    if (this.base.length !== n) { this.base = new Float32Array(n); this.tone = new Uint8Array(n); }
    // Bin hues (colour divided by its brightness) and keep the strongest bins.
    const bins = new Float32Array(64), sum = new Float32Array(64 * 3), binOf = new Uint8Array(n);
    for (let i = 0; i < n; i++) {
      const r = px[i * 4], gg = px[i * 4 + 1], b = px[i * 4 + 2], m = Math.max(r, gg, b, 1);
      const v = m / 255;
      // mid-tones must still read as characters: a gentle curve, not a square
      this.base[i] = v < 0.035 ? 0 : Math.pow(v, 0.8) * 1.05;
      const q = (u: number) => Math.min(3, ((u / m) * 4) | 0);
      const bin = q(r) * 16 + q(gg) * 4 + q(b);
      binOf[i] = bin;
      bins[bin] += v;
      sum[bin * 3] += (r / m) * v; sum[bin * 3 + 1] += (gg / m) * v; sum[bin * 3 + 2] += (b / m) * v;
    }
    const top = [...bins.keys()].filter((b) => bins[b] > 0).sort((a, b) => bins[b] - bins[a]).slice(0, SLOTS);
    const slot = new Uint8Array(64);
    const hue = (b: number): RGB => [sum[b * 3] / bins[b] * 255, sum[b * 3 + 1] / bins[b] * 255, sum[b * 3 + 2] / bins[b] * 255].map((u) => Math.round(clamp(u, 0, 255))) as unknown as RGB;
    top.forEach((b, k) => { this.palette[FIRST + k] = hue(b); });
    for (let b = 0; b < 64; b++) {
      if (!top.length) break;
      const r = (b >> 4) / 3, gg = ((b >> 2) & 3) / 3, bb = (b & 3) / 3;
      let best = 0, bd = Infinity;
      top.forEach((t, k) => {
        const [pr, pg, pb] = this.palette[FIRST + k];
        const d = (pr / 255 - r) ** 2 + (pg / 255 - gg) ** 2 + (pb / 255 - bb) ** 2 + (t === b ? -1 : 0);
        if (d < bd) { bd = d; best = k; }
      });
      slot[b] = FIRST + best;
    }
    for (let i = 0; i < n; i++) this.tone[i] = slot[binOf[i]];
    this.paletteDirty = true;
  }
  render(frame: CellFrame) {
    const L = this.light; L.clear();
    const { cols, rows } = L;
    if (!cols) return;
    if (this.dirty) this.sample();
    if (this.paletteDirty) { frame.setPalette(this.palette); this.paletteDirty = false; }
    if (this.base.length !== cols * rows) return;
    const t = this.t, aspect = this.ch / this.cw, p = this.ptr, day = this.day;
    const glow = 0.82 + 0.18 * day.night, breath = 0.94 + 0.06 * Math.sin(t * 0.8);
    // a slow beam of light crossing the picture every ten seconds
    const sweep = ((t * 0.11) % 1.4) * 2.2 - 0.4;
    const lens = 9, stir = (t * 10) | 0;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      let sx = x, sy = y, extra = 0;
      for (const r of this.ripples) {
        const dx = x - r.x, dy = (y - r.y) * aspect, d = Math.hypot(dx, dy) || 1;
        const w = Math.sin((d - r.r) * 0.9) * Math.exp(-((d - r.r) ** 2) / 10) * r.life;
        sx += Math.round((dx / d) * w * 1.6); sy += Math.round((dy / d / aspect) * w * 1.6);
        extra += Math.max(0, w) * 0.3;
      }
      sx = clamp(sx, 0, cols - 1); sy = clamp(sy, 0, rows - 1);
      const j = sy * cols + sx, b0 = this.base[j];
      let l = b0 * (0.86 + 0.14 * noise2(x * 0.22 + t * 0.25, y * 0.35 - t * 0.5, 3)) * breath * glow;
      const band = x / cols * 1.3 + y / rows * 0.5 - sweep;
      l += Math.exp(-(band * band) / 0.003) * b0 * 0.35;
      // a fixed dither so flat areas break into varied glyphs instead of rows
      l += (rand(x * 31.7 + y * 17.3) - 0.5) * 0.09 * Math.min(1, b0 * 4);
      l += extra * (0.2 + b0);
      let glyph = "";
      if (p.on) {
        const d = Math.hypot(x - p.x, (y - p.y) * aspect);
        if (d < lens) {
          const k = 1 - d / lens;
          l += k * k * (0.25 + b0 * 0.6);
          if (rand(x * 13.1 + y * 7.7 + stir) < k * 0.8) glyph = STIR[(rand(x + y * 31 + stir) * STIR.length) | 0];
        }
      }
      if (l < 0.05) continue;
      if (glyph) L.set(x, y, Math.min(1.2, l), b0 < 0.08 ? ACCENT : this.tone[j], glyph);
      else L.paint(x, y, Math.min(1.2, l), this.tone[j]);
    }
    // the brightest strokes leave long-exposure trails
    L.streak(0.8, 4, 1.5);
    // sparkles that settle on bright places
    const sparkles = Math.round(cols * rows * 0.0025);
    for (let k = 0; k < sparkles; k++) {
      const phase = t * 0.6 + rand(k * 1.9) * 7, life = phase % 1;
      const cell = (rand(k * 7.3 + Math.floor(phase) * 13.7) * cols * rows) | 0;
      if (this.base[cell] < 0.45) continue;
      const tw = Math.sin(life * Math.PI);
      L.set(cell % cols, (cell / cols) | 0, 0.6 + tw * 0.6, SPARK, tw > 0.7 ? "*" : "+");
    }
    for (const s of this.sparks) L.add(s.x, s.y, s.life, s.life > 0.5 ? SPARK : ACCENT, s.life > 0.6 ? "*" : "'");
    L.emit(frame, " .:-=+*#%@", 0.82);
    frame.bloom = 0.5 + 0.35 * day.night;
  }
  underlay(ctx: CanvasRenderingContext2D) {
    const { cols, rows } = this.light;
    if (!this.art || !cols) return;
    // the picture itself, enlarged and soft: the light the characters sit in
    ctx.save();
    ctx.imageSmoothingEnabled = true;
    ctx.globalAlpha = 0.13 + 0.2 * (1 - this.day.night);
    ctx.drawImage(this.art, 0, 0, cols * this.cw, rows * this.ch);
    ctx.restore();
    if (this.day.twilight > 0.05) {
      const g = ctx.createLinearGradient(0, this.H, 0, 0);
      g.addColorStop(0, `rgba(255,140,90,${0.16 * this.day.twilight})`); g.addColorStop(1, "rgba(255,140,90,0)");
      ctx.fillStyle = g; ctx.fillRect(0, 0, this.W, this.H);
    }
  }
}
