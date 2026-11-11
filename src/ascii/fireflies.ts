import { type AsciiScene, type CellFrame, type RGB, clamp, hash, hexRgb, noise1 } from "./cells";

/**
 * Firefly field: a summer meadow at night.
 * Every firefly is a pulse-coupled oscillator (Mirollo–Strogatz): when one
 * flashes, it nudges the clocks of the fireflies near it. Scattered blinking
 * slowly locks into waves and then a shared heartbeat, as real synchronous
 * fireflies do. Their light falls on the grass. Gusts comb the meadow, the
 * cursor parts it, and a click scatters the swarm and breaks the rhythm.
 */
const FLY = 0, GLOW = 1, GRASS = 2, LIT = 3, STAR = 4, MOON = 5, TREE = 6, DEW = 7;

interface Blade { x: number; y: number; len: number; layer: number; phase: number; stiff: number }

export class Fireflies implements AsciiScene {
  palette: RGB[];
  background = "#03060a";
  private n: number;
  private x: Float32Array; private y: Float32Array; private vx: Float32Array; private vy: Float32Array;
  private clock: Float32Array; private period: Float32Array; private since: Float32Array; private seed: Float32Array;
  private blades: Blade[] = [];
  private firs: { x: number; h: number; w: number }[] = [];
  private W = 0; private H = 0; private s = 1; private horizon = 0;
  private light = new Float32Array(0);
  private ptr = { x: -1e4, y: -1e4, active: false, px: -1e4, py: -1e4, push: 0 };
  private time = 0;
  private seeded = false;
  /** 0 = scattered, 1 = flashing as one. Exposed for the test-suite and QA. */
  sync = 0;

  constructor(color: string, density: number) {
    this.palette = [hexRgb(color), [226, 255, 128], [74, 120, 84], [196, 236, 120], [190, 204, 255], [70, 66, 52], [1, 3, 4], [140, 200, 220]];
    this.n = Math.round(48 * clamp(density, 0.5, 1.6));
    const f = () => new Float32Array(this.n);
    this.x = f(); this.y = f(); this.vx = f(); this.vy = f();
    this.clock = f(); this.period = f(); this.since = f(); this.seed = f();
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width;
    this.H = height;
    this.s = Math.min(width, height) / 700;
    this.horizon = height * 0.52;
    this.light = new Float32Array(frame.cols * frame.rows);
    // Four depth layers of grass: short and dim at the back, tall in front.
    this.blades = [];
    const layers = 3;
    for (let L = 0; L < layers; L++) {
      const yBase = this.horizon + (height - this.horizon) * (0.3 + L * 0.33);
      const step = frame.cw * (L === 2 ? 3.4 : L === 1 ? 2.8 : 2.4);
      for (let x = -step * 4, k = 0; x < width + step * 4; x += step * (0.6 + hash(k + L * 999) * 0.8), k++)
        this.blades.push({
          x, y: yBase + hash(k * 3 + L) * frame.ch * 2, layer: L,
          len: frame.ch * (1 + L * 1.6 + hash(k * 7 + L) * (1.2 + L * 2.4)),
          phase: hash(k * 11 + L) * 6.28, stiff: 0.6 + hash(k * 13 + L) * 0.8,
        });
    }
    this.firs = [];
    for (let k = 0; k < 70; k++) {
      const x = hash(k * 3.7) * width, near = Math.abs(x - width * 0.3) < width * 0.16 ? 1.5 : 1;
      this.firs.push({ x, h: (height * 0.05 + hash(k * 9.1) * height * 0.09) * near, w: 0.2 + hash(k * 4.3) * 0.08 });
    }
    this.firs.sort((a, b) => b.h - a.h);
    if (!this.seeded) {
      this.seeded = true;
      for (let i = 0; i < this.n; i++) {
        this.x[i] = hash(i * 1.3) * width;
        this.y[i] = this.horizon + hash(i * 2.9) * (height - this.horizon) * 0.95;
        this.period[i] = 1.55 + hash(i * 5.1) * 0.45;
        this.clock[i] = hash(i * 8.7);
        this.since[i] = 9;
        this.seed[i] = hash(i * 4.4) * 100;
      }
    }
  }
  pointer(x: number, y: number, active: boolean) {
    const p = this.ptr;
    if (active && p.active) p.push = Math.min(1, p.push + Math.hypot(x - p.px, y - p.py) / 60);
    p.px = x; p.py = y;
    p.x = x; p.y = y; p.active = active;
  }
  poke(x: number, y: number) {
    // A clap in the dark: nearby fireflies scatter and lose the beat.
    for (let i = 0; i < this.n; i++) {
      const dx = this.x[i] - x, dy = this.y[i] - y, d = Math.hypot(dx, dy) || 1;
      if (d < 260 * this.s) {
        this.vx[i] += (dx / d) * 220 * this.s;
        this.vy[i] += (dy / d) * 160 * this.s;
        this.clock[i] = hash(this.time + i);
      }
    }
  }
  step(dt: number) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    const { n, x, y, vx, vy, clock, period, since, s, W, H } = this;
    const R = 190 * s, eps = 0.045;
    // Drift: each firefly wanders on its own smooth noise and avoids the edges.
    for (let i = 0; i < n; i++) {
      const sd = this.seed[i];
      const ax = noise1(this.time * 0.35 + sd, 1) * 40 * s, ay = noise1(this.time * 0.3 + sd, 2) * 26 * s;
      vx[i] += (ax - vx[i]) * Math.min(1, dt * 1.5);
      vy[i] += (ay - vy[i]) * Math.min(1, dt * 1.5);
      if (this.ptr.active) {
        const dx = x[i] - this.ptr.x, dy = y[i] - this.ptr.y, d2 = dx * dx + dy * dy, r = 90 * s;
        if (d2 < r * r) { const d = Math.sqrt(d2) || 1; vx[i] += (dx / d) * 300 * s * dt; vy[i] += (dy / d) * 300 * s * dt; }
      }
      x[i] += vx[i] * dt;
      y[i] += vy[i] * dt;
      const top = this.horizon + H * 0.02, bottom = H - 20 * s;
      if (y[i] < top) vy[i] += (top - y[i]) * dt * 3;
      if (y[i] > bottom) vy[i] -= (y[i] - bottom) * dt * 3;
      if (x[i] < -20) x[i] += W + 40;
      if (x[i] > W + 20) x[i] -= W + 40;
      since[i] += dt;
      clock[i] += dt / period[i];
    }
    // Pulse coupling, with a short refractory window so a cascade fires once.
    let fired = true, guard = 0;
    while (fired && guard++ < 6) {
      fired = false;
      for (let i = 0; i < n; i++) {
        if (clock[i] < 1) continue;
        clock[i] = 0;
        since[i] = 0;
        fired = true;
        for (let j = 0; j < n; j++) {
          if (j === i || since[j] < 0.25) continue;
          const dx = x[j] - x[i], dy = y[j] - y[i];
          if (dx * dx + dy * dy < R * R) clock[j] += eps + clock[j] * eps;
        }
      }
    }
    // Order parameter: how closely all the clocks agree.
    let cx = 0, cy = 0;
    for (let i = 0; i < n; i++) { cx += Math.cos(clock[i] * 6.2832); cy += Math.sin(clock[i] * 6.2832); }
    this.sync = Math.hypot(cx, cy) / n;
    this.ptr.push *= Math.exp(-dt * 2);
  }
  /** Brightness of a flash: a quick bloom then a long, warm tail. */
  private flash(i: number) {
    const t = this.since[i];
    return t < 0.06 ? t / 0.06 : Math.exp(-(t - 0.06) * 2.4);
  }
  private moon(f: CellFrame): [number, number, number] {
    return [f.width * 0.8, f.height * 0.17, Math.max(26, Math.min(f.width, f.height) * 0.07)];
  }
  underlay(ctx: CanvasRenderingContext2D, f: CellFrame) {
    const g = ctx.createLinearGradient(0, 0, 0, this.horizon);
    g.addColorStop(0, "#02040a");
    g.addColorStop(1, "#0d1b26");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, f.width, this.horizon);
    const [mx, my, mR] = this.moon(f);
    const halo = ctx.createRadialGradient(mx, my, mR * 0.9, mx, my, mR * 4);
    halo.addColorStop(0, "rgba(220,226,200,0.16)");
    halo.addColorStop(1, "rgba(220,226,200,0)");
    ctx.fillStyle = halo;
    ctx.fillRect(mx - mR * 4, my - mR * 4, mR * 8, mR * 8);
    const disc = ctx.createRadialGradient(mx - mR * 0.35, my - mR * 0.3, mR * 0.1, mx, my, mR);
    disc.addColorStop(0, "#f2eed6");
    disc.addColorStop(0.7, "#cfcbb2");
    disc.addColorStop(1, "#8e8c7c");
    ctx.fillStyle = disc;
    ctx.beginPath();
    ctx.arc(mx, my, mR, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = "#020504";
    ctx.fillRect(0, this.horizon, f.width, f.height - this.horizon);
    // Firs: smooth, layered silhouettes, darker than the sky behind them.
    ctx.fillStyle = "#010303";
    for (const fir of this.firs) {
      const steps = 5, top = this.horizon - fir.h;
      ctx.beginPath();
      ctx.moveTo(fir.x, top);
      for (let k = 1; k <= steps; k++) {
        const y = top + (fir.h * k) / steps, half = (y - top) * fir.w * 1.7;
        ctx.lineTo(fir.x + half, y);
        if (k < steps) ctx.lineTo(fir.x + half * 0.55, y);
      }
      for (let k = steps; k >= 1; k--) {
        const y = top + (fir.h * k) / steps, half = (y - top) * fir.w * 1.7;
        if (k < steps) ctx.lineTo(fir.x - half * 0.55, y);
        ctx.lineTo(fir.x - half, y);
      }
      ctx.closePath();
      ctx.fill();
    }
    ctx.fillRect(0, this.horizon - 4, f.width, 6);
  }
  render(f: CellFrame) {
    const { cols, rows, cw, ch } = f, t = this.time, light = this.light;
    const hRow = Math.round(this.horizon / ch);
    // Light field from every glowing firefly.
    light.fill(0);
    const rad = 8;
    for (let i = 0; i < this.n; i++) {
      const b = this.flash(i);
      if (b < 0.04) continue;
      const fc = this.x[i] / cw, fr = this.y[i] / ch;
      for (let r = Math.floor(fr - rad / 1.6); r <= fr + rad / 1.6; r++)
        for (let c = Math.floor(fc - rad); c <= fc + rad; c++) {
          if (c < 0 || r < 0 || c >= cols || r >= rows) continue;
          const dx = c + 0.5 - fc, dy = (r + 0.5 - fr) * 1.6, d2 = dx * dx + dy * dy;
          if (d2 < rad * rad) light[r * cols + c] += b * Math.exp(-d2 / 14);
        }
    }
    // Night sky.
    for (let r = 0; r < hRow; r++)
      for (let c = 0; c < cols; c++) {
        const h = hash(c * 91.7 + r * 13.1);
        if (h > 0.975) {
          const tw = 0.5 + 0.5 * Math.sin(t * (0.8 + h * 3) + h * 77);
          f.put(c, r, h > 0.995 ? "*" : h > 0.988 ? "+" : ".", STAR, 0.08 + tw * 0.22 * (1 - r / hRow));
        }
      }
    // Moon: the disc and halo are painted in the underlay; characters add its texture.
    const [mx, my, mR] = this.moon(f);
    for (let r = Math.floor((my - mR) / ch); r <= (my + mR) / ch; r++)
      for (let c = Math.floor((mx - mR) / cw); c <= (mx + mR) / cw; c++) {
        const dx = ((c + 0.5) * cw - mx) / mR, dy = ((r + 0.5) * ch - my) / mR, d2 = dx * dx + dy * dy;
        if (d2 >= 0.92) continue;
        const z = Math.sqrt(1 - d2), lambert = clamp(dx * -0.5 + dy * -0.25 + z * 0.8);
        const maria = noise1(c * 0.9 + r * 1.7, 8) + noise1(c * 0.4 - r * 1.1, 9);
        f.put(c, r, maria > 0.55 ? "o" : maria > 0.2 ? ":" : ".", MOON, 0.12 + lambert * 0.25);
      }
    // Treeline edges: a few glyphs where moonlight or firefly light catches the firs.
    for (const fir of this.firs) {
      const top = (this.horizon - fir.h) / ch, c0 = fir.x / cw;
      for (let r = Math.ceil(top); r < hRow; r++) {
        const half = ((r - top) * ch * fir.w * 1.7) / cw;
        for (const side of [-1, 1]) {
          const c = Math.round(c0 + side * half), lit = light[r * cols + c] || 0;
          if ((r + c) % 3 === 0 || lit > 0.08) f.put(c, r, side < 0 ? "/" : "\\", lit > 0.08 ? LIT : TREE, 0.12 + lit * 0.6);
        }
        if (r === Math.ceil(top)) f.put(c0, r, "^", TREE, 0.2);
      }
    }
    // Meadow floor: dew catching firefly light.
    for (let r = hRow + 1; r < rows; r++)
      for (let c = 0; c < cols; c++) {
        const lit = light[r * cols + c];
        if (hash(c * 7 + r * 59) > 0.88) f.put(c, r, lit > 0.25 ? "*" : ".", lit > 0.1 ? DEW : GRASS, 0.05 + lit * 0.6);
      }
    // Grass: each blade bends with travelling gusts and away from the cursor.
    const gust = (x: number) => Math.sin(x * 0.006 - t * 1.25) * 0.55 + noise1(x * 0.004 - t * 0.4, 6) * 0.5 + Math.sin(t * 0.7) * 0.15;
    const p = this.ptr;
    for (const b of this.blades) {
      let bend = gust(b.x) * (0.5 + b.layer * 0.18) / b.stiff + Math.sin(t * 2 + b.phase) * 0.05;
      if (p.active) {
        const dx = b.x - p.x, dy = b.y - b.len * 0.5 - p.y, d = Math.hypot(dx, dy), r = 140 * this.s;
        if (d < r) bend += Math.sign(dx || 1) * (1 - d / r) * (0.9 + p.push);
      }
      const steps = Math.max(2, Math.round(b.len / (ch * 0.62)));
      const base = 0.06 + b.layer * 0.07;
      let lc = -99, lr = -99;
      for (let k = 1; k <= steps; k++) {
        const u = k / steps, a = bend * Math.pow(u, 1.6);
        const px = b.x + Math.sin(a) * b.len * u * 0.9, py = b.y - Math.cos(a) * b.len * u;
        const c = Math.floor(px / cw), r = Math.floor(py / ch);
        if (c === lc && r === lr) continue;
        lc = c; lr = r;
        const slope = Math.sin(bend * 1.6 * Math.pow(u, 0.6));
        const g = b.layer === 0 ? (k === steps ? "," : ".") : k === steps ? (slope > 0.3 ? "'" : slope < -0.3 ? "`" : "'") : slope > 0.38 ? "/" : slope < -0.38 ? "\\" : b.layer === 1 ? "!" : "|";
        const lit = r >= 0 && r < rows && c >= 0 && c < cols ? light[r * cols + c] : 0;
        f.put(c, r, g, lit > 0.1 ? LIT : GRASS, base + u * 0.1 + lit * 0.9);
      }
    }
    // Fireflies on top: a hot core, a soft halo of light.
    for (let i = 0; i < this.n; i++) {
      const b = this.flash(i), c = this.x[i] / cw, r = this.y[i] / ch;
      // One glyph per firefly; nearer ones are larger. Between flashes they nearly vanish.
      const near = clamp((this.y[i] - this.horizon) / (this.H - this.horizon));
      if (b < 0.08) { f.put(c, r, ".", FLY, 0.16 + near * 0.12); continue; }
      f.put(c, r, b > 0.6 && near > 0.35 ? "@" : b > 0.3 ? "*" : "+", GLOW, 0.35 + b * 0.65);
      f.shade(c, r, GLOW, b * (0.35 + near * 0.45));
      if (near > 0.3)
        for (const [ox, oy] of [[-1, 0], [1, 0], [0, -1], [0, 1]]) f.shade(c + ox, r + oy, GLOW, b * near * 0.28);
    }
  }
}
