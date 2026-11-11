import { type AsciiScene, type CellFrame, type RGB, clamp, hash, hexRgb, noise1 } from "./cells";

/**
 * Starling hour: a murmuration over a lake at dusk.
 * Each bird follows three local rules (separate, align, gather) plus a slow
 * roaming roost point. A falcon patrols and stoops into the flock; birds that
 * see it panic, and panic spreads neighbour to neighbour, so a visible wave
 * travels through the murmuration. The reader's cursor is a second predator.
 */
const BIRD = 0, PANIC = 1, FALCON = 2, STAR = 3, SUN = 4, WATER = 5, REED = 6, SHORE = 7;
const FLAP = ["v", "v", "-", "^", "-"];

export class Starlings implements AsciiScene {
  palette: RGB[];
  background = "#04050b";
  private n: number;
  private x: Float32Array; private y: Float32Array;
  private vx: Float32Array; private vy: Float32Array;
  private panic: Float32Array; private panicNext: Float32Array; private flap: Float32Array;
  private W = 0; private H = 0; private s = 1; private horizon = 0;
  private cell = 40; private gx = 0; private gy = 0;
  private head = new Int32Array(0); private next: Int32Array;
  private falcon = { x: 0, y: 0, vx: 0, vy: 0, mode: 0, t: 0, flap: 0, wait: 8 };
  private ptr = { x: -1e4, y: -1e4, active: false };
  private time = 0;
  private seeded = false;
  private count: Uint16Array = new Uint16Array(0);
  private cellPanic = new Float32Array(0);
  private cellFlap = new Uint8Array(0);

  constructor(color: string, density: number) {
    const tint = hexRgb(color);
    this.palette = [tint, [255, 168, 104], [255, 86, 72], [196, 204, 255], [255, 140, 86], [120, 146, 214], [82, 112, 104], [6, 6, 12]];
    this.n = Math.round(1400 * clamp(density, 0.5, 1.6));
    const f = () => new Float32Array(this.n);
    this.x = f(); this.y = f(); this.vx = f(); this.vy = f();
    this.panic = f(); this.panicNext = f(); this.flap = f();
    this.next = new Int32Array(this.n);
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width;
    this.H = height;
    this.s = Math.min(width, height) / 700;
    this.horizon = height * 0.7;
    this.cell = Math.max(24, 34 * this.s);
    this.gx = Math.ceil(width / this.cell) + 1;
    this.gy = Math.ceil(height / this.cell) + 1;
    this.head = new Int32Array(this.gx * this.gy);
    const n = frame.cols * frame.rows;
    this.count = new Uint16Array(n);
    this.cellPanic = new Float32Array(n);
    this.cellFlap = new Uint8Array(n);
    if (!this.seeded) {
      this.seeded = true;
      for (let i = 0; i < this.n; i++) {
        const a = hash(i * 3.1) * Math.PI * 2, r = Math.sqrt(hash(i * 7.7)) * 120 * this.s;
        this.x[i] = width * 0.42 + Math.cos(a) * r * 1.8;
        this.y[i] = height * 0.34 + Math.sin(a) * r * 0.8;
        this.vx[i] = 110 * this.s + (hash(i) - 0.5) * 40;
        this.vy[i] = (hash(i + 9) - 0.5) * 40;
        this.flap[i] = hash(i + 4) * 10;
      }
      this.falcon.x = width * 0.85;
      this.falcon.y = height * 0.12;
      for (let k = 0; k < 90; k++) this.step(1 / 30);
    }
  }
  pointer(x: number, y: number, active: boolean) {
    this.ptr = { x, y, active };
  }
  poke(x: number, y: number) {
    // A clap: everything nearby panics at once.
    for (let i = 0; i < this.n; i++) {
      const dx = this.x[i] - x, dy = this.y[i] - y;
      if (dx * dx + dy * dy < (180 * this.s) ** 2) this.panic[i] = 1;
    }
  }
  private roost() {
    const t = this.time;
    return [
      this.W * (0.5 + 0.27 * Math.sin(t * 0.11) + 0.07 * Math.sin(t * 0.37 + 1)),
      this.H * (0.33 + 0.11 * Math.sin(t * 0.16 + 2) + 0.04 * Math.sin(t * 0.5)),
    ];
  }
  step(dt: number) {
    dt = Math.min(dt, 0.05);
    this.time += dt;
    const { n, x, y, vx, vy, panic, panicNext, s, W, H, cell, gx, gy, head, next, falcon, ptr } = this;
    const R = 24 * s, R2 = R * R, SEP = 7.5 * s, minV = 85 * s, maxV = 155 * s;
    head.fill(-1);
    for (let i = 0; i < n; i++) {
      const c = clamp((x[i] / cell) | 0, 0, gx - 1) + clamp((y[i] / cell) | 0, 0, gy - 1) * gx;
      next[i] = head[c];
      head[c] = i;
    }
    const [rx, ry] = this.roost();
    // Falcon: patrol high, stoop at the flock's heart, climb away.
    falcon.t += dt;
    falcon.flap += dt * (falcon.mode === 1 ? 4 : 9);
    let tx: number, ty: number, speed: number;
    if (falcon.mode === 1) {
      let cx = 0, cy = 0;
      for (let k = 0; k < 40; k++) {
        const i = ((k * 97) % n) | 0;
        cx += x[i]; cy += y[i];
      }
      tx = cx / 40; ty = cy / 40; speed = 360 * s;
      if (falcon.t > 3.2 || Math.hypot(tx - falcon.x, ty - falcon.y) < 20 * s) { falcon.mode = 2; falcon.t = 0; }
    } else {
      tx = W * (0.8 + 0.12 * Math.cos(this.time * 0.35)); ty = H * (0.1 + 0.04 * Math.sin(this.time * 0.5));
      speed = falcon.mode === 2 ? 230 * s : 120 * s;
      if (falcon.mode === 2 && falcon.t > 2.6) { falcon.mode = 0; falcon.t = 0; falcon.wait = 7 + hash(this.time) * 6; }
      if (falcon.mode === 0 && falcon.t > falcon.wait) { falcon.mode = 1; falcon.t = 0; }
    }
    const fd = Math.hypot(tx - falcon.x, ty - falcon.y) || 1;
    const k = Math.min(1, dt * (falcon.mode === 1 ? 2.2 : 1.4));
    falcon.vx += ((tx - falcon.x) / fd * speed - falcon.vx) * k;
    falcon.vy += ((ty - falcon.y) / fd * speed - falcon.vy) * k;
    falcon.x += falcon.vx * dt;
    falcon.y += falcon.vy * dt;
    const fR = 125 * s, pR = 100 * s;
    const decay = Math.exp(-dt * 1.4);
    for (let i = 0; i < n; i++) {
      const px = x[i], py = y[i];
      let ax = 0, ay = 0, cx = 0, cy = 0, sx = 0, sy = 0, m = 0, top = 0;
      const ci = clamp((px / cell) | 0, 0, gx - 1), cj = clamp((py / cell) | 0, 0, gy - 1);
      for (let oy = -1; oy <= 1 && m < 14; oy++) {
        const row = cj + oy;
        if (row < 0 || row >= gy) continue;
        for (let ox = -1; ox <= 1 && m < 14; ox++) {
          const col = ci + ox;
          if (col < 0 || col >= gx) continue;
          for (let j = head[col + row * gx]; j >= 0 && m < 14; j = next[j]) {
            if (j === i) continue;
            const dx = x[j] - px, dy = y[j] - py, d2 = dx * dx + dy * dy;
            if (d2 > R2) continue;
            m++;
            ax += vx[j]; ay += vy[j]; cx += dx; cy += dy;
            if (panic[j] > top) top = panic[j];
            if (d2 < SEP * SEP) {
              const d = Math.sqrt(d2) || 0.01, w = (SEP - d) / SEP / d;
              sx -= dx * w; sy -= dy * w;
            }
          }
        }
      }
      let fx = 0, fy = 0;
      if (m) {
        fx += (ax / m - vx[i]) * 2.3 + (cx / m) * 3.6;
        fy += (ay / m - vy[i]) * 2.3 + (cy / m) * 3.6;
      }
      fx += sx * 520 * s; fy += sy * 520 * s;
      // The roost pulls the whole flock into long, folding arcs.
      fx += (rx - px) * 0.1; fy += (ry - py) * 0.16;
      // A shared turning field makes neighbouring regions bank together.
      const turn = noise1(this.time * 0.25 + py * 0.004 + px * 0.002, 3) * 0.9;
      fx += -vy[i] * turn; fy += vx[i] * turn;
      // Stay in the sky above the water.
      const floor = this.horizon - 40 * s;
      if (py > floor) fy -= (py - floor) * 7;
      if (py < 30 * s) fy += (30 * s - py) * 7;
      if (px < 30 * s) fx += (30 * s - px) * 5;
      if (px > W - 30 * s) fx -= (px - (W - 30 * s)) * 5;
      let p = Math.max(panic[i] * decay, top * 0.9 - 0.015);
      for (const [hx, hy, hr] of [[falcon.x, falcon.y, fR], [ptr.active ? ptr.x : -1e5, ptr.y, pR]] as const) {
        const dx = px - hx, dy = py - hy, d2 = dx * dx + dy * dy;
        if (d2 < hr * hr) {
          const d = Math.sqrt(d2) || 1, w = (1 - d / hr) * 1500 * s;
          fx += (dx / d) * w; fy += (dy / d) * w;
          p = 1;
        }
      }
      panicNext[i] = p;
      let nvx = vx[i] + fx * dt, nvy = vy[i] + fy * dt;
      const sp = Math.hypot(nvx, nvy) || 1, cap = maxV * (1 + p * 0.6);
      const target = clamp(sp, minV, cap);
      nvx *= target / sp; nvy *= target / sp;
      vx[i] = nvx; vy[i] = nvy;
      this.flap[i] += dt * (8 + p * 10 + hash(i) * 3);
    }
    for (let i = 0; i < n; i++) {
      x[i] += vx[i] * dt;
      y[i] += vy[i] * dt;
    }
    this.panic = panicNext;
    this.panicNext = panic;
  }
  underlay(ctx: CanvasRenderingContext2D, f: CellFrame) {
    // Afterglow above the horizon, cooling to night at the top.
    const g = ctx.createLinearGradient(0, 0, 0, this.horizon);
    g.addColorStop(0, "#04050b");
    g.addColorStop(0.6, "#0c0b1a");
    g.addColorStop(1, "#2a1622");
    ctx.fillStyle = g;
    ctx.fillRect(0, 0, f.width, this.horizon);
    const w = ctx.createLinearGradient(0, this.horizon, 0, f.height);
    w.addColorStop(0, "#160d16");
    w.addColorStop(1, "#04050b");
    ctx.fillStyle = w;
    ctx.fillRect(0, this.horizon, f.width, f.height - this.horizon);
  }
  render(f: CellFrame) {
    const { cols, rows, cw, ch } = f;
    const t = this.time;
    const hRow = Math.round(this.horizon / ch);
    const reedTop = rows - Math.max(3, Math.round(rows * 0.09));
    // Dusk sky: sparse stars that fade into the afterglow.
    for (let r = 0; r < hRow; r++) {
      const glow = r / hRow;
      for (let c = 0; c < cols; c++) {
        const h = hash(c * 131 + r * 7.3);
        if (h > 0.982 - glow * 0.03) {
          const tw = 0.5 + 0.5 * Math.sin(t * (1 + h * 2) + h * 40);
          f.put(c, r, h > 0.996 ? "+" : ".", glow > 0.55 ? SUN : STAR, (0.1 + tw * 0.18) * (1 - glow * 0.5));
        }
      }
    }
    // A low sun, cut by the retro bands of heat haze, sinking behind the far shore.
    const sunC = cols * 0.73, sunR = Math.min(cols * 0.075, rows * 0.22 * 1.6);
    const sunY = hRow - sunR * 0.42;
    for (let r = Math.floor(sunY - sunR / 1.6) - 1; r < hRow; r++)
      for (let c = Math.floor(sunC - sunR) - 1; c <= sunC + sunR + 1; c++) {
        const dx = (c - sunC) / sunR, dy = ((r - sunY) * 1.6) / sunR, d = dx * dx + dy * dy;
        if (d > 1) continue;
        const band = r > sunY + 0.5 && (r + Math.floor(t * 0.6)) % 3 === 0;
        if (band) continue;
        f.shade(c, r, SUN, 0.25 + (1 - d) * 0.3);
        f.put(c, r, d < 0.35 ? "=" : d < 0.75 ? "-" : ".", SUN, 0.16 + (1 - d) * 0.16);
      }
    // Far shore.
    for (let c = 0; c < cols; c++) {
      const hill = Math.max(0, Math.round(0.6 + noise1(c * 0.045, 9) * 1.6 + (c < cols * 0.38 ? 1.6 * (1 - c / (cols * 0.38)) : 0)));
      for (let k = 0; k < hill; k++) {
        f.shade(c, hRow - 1 - k, SHORE, 0.9);
        if (k === hill - 1) f.put(c, hRow - 1 - k, hash(c * 1.7) > 0.8 ? "^" : "_", REED, 0.18);
      }
      f.put(c, hRow, hash(c * 9) > 0.5 ? "~" : "-", WATER, 0.12 + 0.05 * Math.sin(t * 0.8 + c * 0.4));
    }
    // Birds: count per cell; one bird shows its wingbeat, a crowd becomes mass.
    this.count.fill(0);
    this.cellPanic.fill(0);
    for (let i = 0; i < this.n; i++) {
      const c = (this.x[i] / cw) | 0, r = (this.y[i] / ch) | 0;
      if (c < 0 || r < 0 || c >= cols || r >= hRow) continue;
      const k = r * cols + c;
      this.count[k]++;
      if (this.panic[i] > this.cellPanic[k]) this.cellPanic[k] = this.panic[i];
      this.cellFlap[k] = Math.floor(this.flap[i]) % FLAP.length;
    }
    for (let k = 0; k < this.count.length; k++) {
      const m = this.count[k];
      if (!m) continue;
      const p = this.cellPanic[k];
      const g = m === 1 ? FLAP[this.cellFlap[k]] : m === 2 ? "w" : m === 3 ? "x" : m < 6 ? "%" : m < 9 ? "#" : "@";
      const color = p > 0.3 ? PANIC : BIRD;
      f.put(k % cols, (k / cols) | 0, g, color, 0.42 + Math.min(m, 9) * 0.065 + p * 0.12);
      if (m > 2) f.shade(k % cols, (k / cols) | 0, color, 0.18 + Math.min(m, 12) * 0.045);
    }
    // Falcon: a swept silhouette with beating wings, and a faint trail.
    const fc = this.falcon.x / cw, fr = this.falcon.y / ch;
    const sp = Math.hypot(this.falcon.vx, this.falcon.vy) || 1;
    const hx = this.falcon.vx / sp, hy = this.falcon.vy / sp;
    const up = Math.sin(this.falcon.flap) > 0;
    f.put(fc, fr, "@", FALCON, 1);
    f.put(fc + hx * 1.2, fr + hy * 0.6, "o", FALCON, 0.9);
    for (const side of [-1, 1]) {
      const wx = fc - hy * side * 1.6 - hx * 0.6, wy = fr + hx * side * 0.9 * 0.6 - hy * 0.3;
      f.put(wx, wy + (up ? -0.6 : 0.3), side * hx > 0 === up ? "/" : "\\", FALCON, 0.85);
      f.put(fc - hy * side * 2.8 - hx * 1.2, fr + hx * side * 1.5 * 0.6 + (up ? -1 : 0.5), up ? "'" : ",", FALCON, 0.6);
    }
    for (let k = 1; k < 6; k++) f.put(fc - hx * k * 1.5, fr - hy * k * 0.9, ".", FALCON, 0.4 - k * 0.06);
    // Lake: mirror everything above the horizon, broken by moving ripples.
    for (let r = hRow + 1; r < reedTop; r++) {
      const src = 2 * hRow - r;
      if (src < 0) break;
      const fade = 1 - (r - hRow) / (reedTop - hRow);
      const wobble = Math.round(Math.sin(r * 1.7 + t * 2.1) * (1 + (r - hRow) * 0.08));
      for (let c = 0; c < cols; c++) {
        const s = src * cols + c - wobble;
        if (s < 0 || s >= f.code.length) continue;
        if (f.code[s] && hash(c * 3 + r * 11 + Math.floor(t * 6)) > 0.18)
          f.put(c, r, f.code[s] === 35 || f.code[s] === 37 ? "=" : f.code[s], f.color[s] === SUN ? SUN : WATER, f.lum[s] * 0.42 * fade + 0.02);
        else if (hash(c * 17 + r * 5) > 0.93) f.put(c, r, "-", WATER, 0.07 + 0.06 * Math.sin(t + c * 0.3));
      }
    }
    // Reeds at the water's edge, swaying.
    for (let c = 0; c < cols; c++) {
      if (hash(c * 5.1) < 0.62) continue;
      const tall = 2 + Math.floor(hash(c * 2.3) * (rows - reedTop + 1));
      const sway = Math.sin(t * 1.2 + c * 0.16) + noise1(t * 0.5 + c * 0.05, 4) * 0.8;
      for (let k = 0; k < tall; k++) {
        const r = rows - 1 - k, tip = k === tall - 1;
        const lean = sway * (k / tall);
        const g = tip ? (hash(c) > 0.85 ? "0" : "'") : lean > 0.35 ? "/" : lean < -0.35 ? "\\" : "|";
        f.put(c + Math.round(lean * 0.9), r, g, REED, 0.16 + (k / tall) * 0.14);
      }
    }
  }
}
