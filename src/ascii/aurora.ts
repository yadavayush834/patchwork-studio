import { type AsciiScene, type CellFrame, type RGB, clamp, hexRgb } from "./cells";
import { type Daylight, NIGHT } from "./daylight";
import { Light, fbm, noise2, rand } from "./kit";

/**
 * Aurora: northern lights over a mountain lake, all in characters.
 * Three ribbons of light hang as curtains of vertical rays that ripple and
 * drift; their foot is green and bright, their crowns fade to violet. Snow on
 * the ridge catches the colour, the lake mirrors the sky and breaks it into
 * ripples. The cursor steers the solar wind; a click sends a surge across.
 */
const GREEN = 0, TEAL = 1, VIOLET = 2, STAR = 3, SNOW = 4, ROCK = 5, PINK = 6, LAKE = 7;

export class Aurora implements AsciiScene {
  palette: RGB[];
  background = "#02040a";
  bloom = 0.8;
  grid = 0;
  private light = new Light();
  private W = 0; private H = 0; private cw = 10; private ch = 16;
  private t = 0; private wind = 0; private surge = -1; private surgeX = 0.5;
  private ptr = { x: 0.5, on: false };
  private ridge = new Float32Array(0);
  private stars: { x: number; y: number; p: number; b: number }[] = [];
  private density: number;
  private art: HTMLCanvasElement | null = null;
  private day: Daylight = NIGHT;
  daylight(d: Daylight) { this.day = d; }

  constructor(color: string, density: number) {
    this.palette = [hexRgb(color), [80, 230, 210], [170, 120, 255], [230, 236, 255], [220, 236, 255], [40, 48, 70], [255, 120, 190], [60, 120, 150]];
    this.density = clamp(density, 0.5, 1.6);
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width; this.H = height; this.cw = frame.cw; this.ch = frame.ch;
    this.light.resize(frame);
    const cols = frame.cols, rows = frame.rows;
    // A mountain ridge: big shapes from low-frequency noise, rough edge from high.
    this.ridge = new Float32Array(cols);
    for (let x = 0; x < cols; x++) {
      const u = x / cols, peak = Math.exp(-((u - 0.32) ** 2) / 0.012) * 0.16 + Math.exp(-((u - 0.74) ** 2) / 0.02) * 0.11;
      this.ridge[x] = rows * (0.66 - peak - 0.05 * fbm(u * 6, 1.3, 2, 4) - 0.012 * fbm(u * 40, 4.1, 5, 2));
    }
    this.stars = [];
    for (let i = 0; i < Math.round(cols * rows * 0.035 * this.density); i++) this.stars.push({ x: rand(i * 1.31) * cols, y: rand(i * 2.77) * rows * 0.62, p: rand(i * 5.3) * 6.28, b: rand(i * 8.1) });
  }
  pointer(x: number, _y: number, active: boolean) { this.ptr = { x: x / (this.W || 1), on: active }; }
  poke(x: number) { this.surge = 0; this.surgeX = x / (this.W || 1); }
  step(dt: number) {
    this.t += dt;
    const want = this.ptr.on ? (this.ptr.x - 0.5) * 1.6 : Math.sin(this.t * 0.07) * 0.4;
    this.wind += (want - this.wind) * Math.min(1, dt * 0.8);
    if (this.surge >= 0) { this.surge += dt * 0.55; if (this.surge > 1.6) this.surge = -1; }
  }
  /** Brightness of the aurora at a cell, and its colour. */
  private sky(x: number, y: number, rows: number, cols: number): [number, number] {
    const u = x / cols, t = this.t;
    let best = 0, col = GREEN;
    for (let k = 0; k < 3; k++) {
      // the foot of each curtain wanders across the sky
      const foot = rows * (0.24 + k * 0.1 + 0.07 * noise2(u * 2.2 + k * 3 + this.wind * 0.6, t * 0.08 + k, 1) + 0.03 * Math.sin(u * 9 + t * 0.6 + k * 2));
      const height = rows * (0.22 + 0.12 * (noise2(u * 3 + k * 7, t * 0.05, 3) + 1) / 2);
      const d = foot - y;
      if (d < -1.5 || d > height) continue;
      // fine vertical rays that slide along the curtain
      const rays = 0.72 + 0.28 * noise2(u * 26 + t * (0.6 + this.wind) + k * 11, t * 0.3, 7);
      const fold = 0.7 + 0.3 * Math.abs(Math.sin(u * 5 + noise2(u * 4, t * 0.1 + k, 9) * 3 + t * 0.4));
      const fade = d < 0 ? (1.5 + d) / 1.5 : Math.pow(1 - d / height, 2.2);
      let l = fade * rays * fold * (1.25 - k * 0.2) + (d > -0.5 && d < 1.2 ? 0.35 * rays : 0);
      if (this.surge >= 0) l *= 1 + 1.6 * Math.exp(-((u - (this.surgeX + (this.surge - 0.3) * 1.4)) ** 2) / 0.01);
      if (l > best) { best = l; col = d / height > 0.62 ? VIOLET : d / height > 0.3 ? TEAL : (k === 2 && d / height < 0.06 && noise2(u * 3, t * 0.1, 21) > 0.3 ? PINK : GREEN); }
    }
    return [best, col];
  }
  render(frame: CellFrame) {
    const L = this.light; L.clear();
    const { cols, rows } = L; if (!cols) return;
    const lake = Math.round(rows * 0.7);
    for (const s of this.stars) {
      const tw = 0.25 + 0.5 * Math.abs(Math.sin(this.t * (0.8 + s.b) + s.p));
      L.add(s.x, s.y, tw * (0.35 + s.b * 0.4) * (0.06 + 0.94 * this.day.night), STAR, s.b > 0.93 ? "*" : s.b > 0.7 ? "+" : ".");
    }
    // the aurora: painted as soft vertical curtains, then read back as rays of characters
    const px = this.paintSky();
    if (px) for (let y = 0; y < lake; y++) for (let x = 0; x < cols; x++) {
      if (y >= this.ridge[x]) continue;
      const i = (y * cols + x) * 4, r = px[i], g = px[i + 1], b = px[i + 2];
      const l = (Math.max(r, g, b) / 255) * (px[i + 3] / 255);
      if (l < 0.12) continue;
      const c = r > 150 && b > 120 && g < 140 ? PINK : b > g ? VIOLET : g > 200 && r < 120 && b > 150 ? TEAL : GREEN;
      const ray = noise2(x * 0.9, y * 0.15 - this.t * 0.4, 31) > -0.15;
      if (ray || l > 0.5) L.add(x, y, Math.min(1, l * 1.25), c, l > 0.7 ? "|" : l > 0.45 ? "!" : l > 0.28 ? ":" : "'");
    }
    // mountains: dark rock, a lit ridge line, snow on the high ground tinted by the sky
    for (let x = 0; x < cols; x++) {
      const top = this.ridge[x], slope = (this.ridge[Math.min(cols - 1, x + 1)] - this.ridge[Math.max(0, x - 1)]) / 2;
      for (let y = Math.max(0, Math.floor(top)); y < lake; y++) {
        const depth = y - top;
        if (depth < 1) { L.set(x, y, 0.75, SNOW, slope < -0.35 ? "/" : slope > 0.35 ? "\\" : "^"); continue; }
        const snowy = depth < 3 + 2 * noise2(x * 0.3, 2) && top < rows * 0.58;
        const [sky] = this.sky(x, Math.max(0, top - 4), rows, cols);
        if (snowy) L.set(x, y, 0.28 + sky * 0.35, (x + y) % 5 ? SNOW : TEAL, noise2(x * 0.5, y * 0.7, 4) > 0.2 ? "%" : "#");
        else L.set(x, y, 0.12 + 0.06 * noise2(x * 0.4, y * 0.4, 6), ROCK, noise2(x * 0.9, y * 0.9, 8) > 0.3 ? "/" : noise2(x * 0.7, y * 0.5, 9) > 0 ? "." : ":");
      }
    }
    // the lake mirrors everything above its line, broken into ripples
    for (let y = lake; y < rows; y++) {
      const d = y - lake;
      for (let x = 0; x < cols; x++) {
        const wob = Math.round(noise2(x * 0.2, y * 0.9 - this.t * 0.9, 12) * (1 + d * 0.25));
        const sy = lake - 1 - Math.round(d * 1.3), sx = clamp(x + wob, 0, cols - 1);
        if (sy < 0) continue;
        const j = sy * cols + sx, l = L.lum[j] * (0.45 - d / (rows - lake) * 0.25);
        const ripple = Math.sin(x * 0.35 + y * 1.7 - this.t * 2) > 0.6;
        const c = L.col[j] === ROCK || L.col[j] === SNOW ? LAKE : L.col[j];
        if (l > 0.05 && (ripple || (x + y) % 2 === 0)) L.set(x, y, l, c, ripple ? "~" : l > 0.2 ? "=" : "-");
        else if (ripple && (x + y) % 3 === 0) L.set(x, y, 0.06, LAKE, "-");
      }
    }
    L.emit(frame, " .'`:!|", 0.95);
    // daylight is already bright: glow mostly belongs to the night
    frame.bloom = this.bloom * (0.25 + 0.75 * this.day.night);
  }
  /** Curtains as real gradients, one pixel per cell (null without a DOM). */
  private paintSky(): Uint8ClampedArray | null {
    if (typeof document === "undefined") return null;
    const { cols, rows } = this.light;
    const c = (this.art ??= document.createElement("canvas"));
    if (c.width !== cols || c.height !== rows) { c.width = cols; c.height = rows; }
    const g = c.getContext("2d", { willReadFrequently: true })!;
    g.globalCompositeOperation = "source-over"; g.clearRect(0, 0, cols, rows);
    g.globalCompositeOperation = "lighter";
    const t = this.t;
    for (let k = 0; k < 3; k++) for (let x = 0; x < cols; x++) {
      const u = x / cols;
      const foot = rows * (0.26 + k * 0.1 + 0.08 * noise2(u * 2.2 + k * 3 + this.wind * 0.6, t * 0.08 + k, 1) + 0.03 * Math.sin(u * 9 + t * 0.6 + k * 2));
      const h = rows * (0.14 + 0.12 * (noise2(u * 3 + k * 7, t * 0.05, 3) + 1) / 2);
      let a = (0.25 + 0.75 * Math.max(0, noise2(u * 14 + t * (0.5 + this.wind), t * 0.25 + k * 4, 7) * 0.9 + 0.3)) * (0.75 - k * 0.18);
      a *= 0.1 + 0.9 * this.day.night;
      if (this.surge >= 0) a *= 1 + 1.4 * Math.exp(-((u - (this.surgeX + (this.surge - 0.3) * 1.4)) ** 2) / 0.012);
      const gr = g.createLinearGradient(0, foot + 1, 0, foot - h);
      gr.addColorStop(0, `rgba(170,255,190,${Math.min(1, a)})`);
      gr.addColorStop(0.12, `rgba(80,240,170,${Math.min(1, a * 0.85)})`);
      gr.addColorStop(0.45, `rgba(60,200,210,${a * 0.45})`);
      gr.addColorStop(0.8, `rgba(150,110,255,${a * 0.25})`);
      gr.addColorStop(1, "rgba(150,110,255,0)");
      g.fillStyle = gr; g.fillRect(x, foot - h, 1, h + 1.5);
      if (k === 2 && noise2(u * 3, t * 0.1, 21) > 0.35) { g.fillStyle = `rgba(255,110,190,${a * 0.5})`; g.fillRect(x, foot, 1, 1.2); }
    }
    return g.getImageData(0, 0, cols, rows).data;
  }
  underlay(ctx: CanvasRenderingContext2D) {
    const { W, H } = this, cols = this.light.cols, rows = this.light.rows;
    if (!cols) return;
    // by day a pale sky, at dawn and dusk a warm horizon: the aurora waits for the dark
    const dayAmt = 1 - this.day.night, tw = this.day.twilight;
    if (dayAmt > 0.02 || tw > 0.02) {
      const s = ctx.createLinearGradient(0, 0, 0, H * 0.7);
      s.addColorStop(0, `rgba(${60 + tw * 40},${110 - tw * 40},${190 - tw * 30},${0.5 * dayAmt + 0.25 * tw})`);
      s.addColorStop(1, `rgba(${170 + tw * 85},${200 - tw * 70},${225 - tw * 120},${0.5 * dayAmt + 0.4 * tw})`);
      ctx.fillStyle = s; ctx.fillRect(0, 0, W, H * 0.7);
    }
    // the painted curtains themselves, scaled up smooth: the glow the characters sit in
    if (this.art) { ctx.save(); ctx.globalCompositeOperation = "lighter"; ctx.globalAlpha = 0.5; ctx.imageSmoothingEnabled = true; ctx.drawImage(this.art, 0, 0, cols * this.cw, rows * this.ch);
      // and its reflection in the lake, flipped and fainter
      const lakeY = Math.round(rows * 0.7) * this.ch; ctx.globalAlpha = 0.22; ctx.translate(0, lakeY * 2); ctx.scale(1, -1);
      ctx.drawImage(this.art, 0, 0, cols * this.cw, rows * this.ch); ctx.restore(); }
    // the mountains as one solid dark shape, so the sky stays behind them
    const lake = Math.round(rows * 0.7) * this.ch;
    ctx.fillStyle = "#03060d"; ctx.beginPath(); ctx.moveTo(0, lake);
    for (let x = 0; x < cols; x++) ctx.lineTo(x * this.cw, this.ridge[x] * this.ch + this.ch * 0.5);
    ctx.lineTo(W, lake); ctx.closePath(); ctx.fill();
    const h = ctx.createLinearGradient(0, 0, 0, H);
    h.addColorStop(0, "rgba(10,10,40,0.0)"); h.addColorStop(0.68, "rgba(20,60,70,0.18)"); h.addColorStop(1, "rgba(0,0,0,0)");
    ctx.fillStyle = h; ctx.fillRect(0, 0, W, H);
  }
}
