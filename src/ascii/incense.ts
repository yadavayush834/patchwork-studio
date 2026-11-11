import { type AsciiScene, type CellFrame, type RGB, clamp, hash, hexRgb, noise1, smoothstep } from "./cells";

/**
 * Incense: one stick, one window, and the air of a quiet room.
 * The smoke is a real fluid simulation on the character grid (Stam's stable
 * fluids): heat makes it rise, vorticity confinement curls it, and a slow
 * draft bends the column until it breaks into ribbons. Moving the cursor
 * stirs the air; clicking puffs it. Where smoke crosses the light from the
 * window it glows.
 */
const HOT = 0, SMOKE = 1, COOL = 2, BEAM = 3, STICK = 4, DISH = 5, ASH = 6, TABLE = 7;
const RAMP = ".,:;~=+*x%#";

export class Incense implements AsciiScene {
  palette: RGB[];
  background = "#090706";
  private nx = 0; private ny = 0;
  private u = new Float32Array(0); private v = new Float32Array(0);
  private u0 = new Float32Array(0); private v0 = new Float32Array(0);
  private d = new Float32Array(0); private d0 = new Float32Array(0);
  private T = new Float32Array(0); private T0 = new Float32Array(0);
  private p = new Float32Array(0); private div = new Float32Array(0); private curl = new Float32Array(0);
  private time = 0;
  private tip = [0, 0];
  private impulses: [number, number, number, number, number][] = [];
  private ptr = { x: 0, y: 0, active: false, has: false };
  private cw = 10; private ch = 16;
  private ash: { x: number; y: number; vy: number; life: number }[] = [];
  private ready = false;
  private beamKey = "";
  private beamCanvas?: HTMLCanvasElement;

  constructor(color: string, _density: number) {
    const tint = hexRgb(color);
    this.palette = [[255, 158, 92], [222, 212, 198], tint, [255, 226, 180], [140, 96, 70], [190, 180, 168], [150, 140, 130], [96, 82, 70]];
  }
  private ix = (i: number, j: number) => i + (this.nx + 2) * j;
  resize(_w: number, _h: number, f: CellFrame) {
    this.cw = f.cw;
    this.ch = f.ch;
    const first = !this.ready || this.nx !== f.cols || this.ny !== f.rows;
    this.nx = f.cols;
    this.ny = f.rows;
    const size = (this.nx + 2) * (this.ny + 2), a = () => new Float32Array(size);
    if (first) {
      this.u = a(); this.v = a(); this.u0 = a(); this.v0 = a();
      this.d = a(); this.d0 = a(); this.T = a(); this.T0 = a();
      this.p = a(); this.div = a(); this.curl = a();
    }
    this.tip = [Math.round(this.nx * 0.66), Math.round(this.ny * 0.6)];
    if (first) {
      this.ready = true;
      for (let k = 0; k < 150; k++) this.step(1 / 30);
    }
  }
  pointer(x: number, y: number, active: boolean) {
    const p = this.ptr;
    if (active && p.has && p.active) {
      const dx = (x - p.x) / this.cw, dy = (y - p.y) / this.ch;
      if (dx || dy) this.impulses.push([x / this.cw, y / this.ch, dx * 22, dy * 22, 3.2]);
    }
    p.x = x; p.y = y; p.active = active; p.has = true;
  }
  poke(x: number, y: number) {
    const cx = x / this.cw, cy = y / this.ch;
    for (let k = 0; k < 10; k++) {
      const a = (k / 10) * Math.PI * 2;
      this.impulses.push([cx + Math.cos(a) * 2, cy + Math.sin(a) * 1.3, Math.cos(a) * 40, Math.sin(a) * 26, 2.2]);
    }
  }
  private bnd(b: number, x: Float32Array) {
    const { nx, ny, ix } = this;
    for (let j = 1; j <= ny; j++) {
      x[ix(0, j)] = b === 1 ? -x[ix(1, j)] : x[ix(1, j)];
      x[ix(nx + 1, j)] = b === 1 ? -x[ix(nx, j)] : x[ix(nx, j)];
    }
    for (let i = 1; i <= nx; i++) {
      // The ceiling is open: smoke leaves the frame instead of pooling.
      x[ix(i, 0)] = b === 0 ? 0 : x[ix(i, 1)];
      x[ix(i, ny + 1)] = b === 2 ? -x[ix(i, ny)] : x[ix(i, ny)];
    }
  }
  private advect(b: number, d: Float32Array, d0: Float32Array, u: Float32Array, v: Float32Array, dt: number) {
    const { nx, ny } = this, w = nx + 2;
    for (let j = 1; j <= ny; j++)
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j;
        let x = i - dt * u[k], y = j - dt * v[k];
        x = clamp(x, 0.5, nx + 0.5);
        y = clamp(y, 0.5, ny + 0.5);
        const i0 = x | 0, j0 = y | 0, s1 = x - i0, t1 = y - j0, s0 = 1 - s1, t0 = 1 - t1;
        const a = i0 + w * j0;
        d[k] = s0 * (t0 * d0[a] + t1 * d0[a + w]) + s1 * (t0 * d0[a + 1] + t1 * d0[a + 1 + w]);
      }
    this.bnd(b, d);
  }
  private project() {
    const { nx, ny, u, v, p, div } = this, w = nx + 2;
    for (let j = 1; j <= ny; j++)
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j;
        div[k] = -0.5 * (u[k + 1] - u[k - 1] + v[k + w] - v[k - w]);
        p[k] = 0;
      }
    this.bnd(0, div);
    this.bnd(0, p);
    for (let it = 0; it < 18; it++) {
      for (let j = 1; j <= ny; j++)
        for (let i = 1; i <= nx; i++) {
          const k = i + w * j;
          p[k] = (div[k] + p[k - 1] + p[k + 1] + p[k - w] + p[k + w]) / 4;
        }
      this.bnd(0, p);
    }
    for (let j = 1; j <= ny; j++)
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j;
        u[k] -= 0.5 * (p[k + 1] - p[k - 1]);
        v[k] -= 0.5 * (p[k + w] - p[k - w]);
      }
    this.bnd(1, u);
    this.bnd(2, v);
  }
  step(dt: number) {
    dt = Math.min(dt, 1 / 24);
    this.time += dt;
    const { nx, ny, u, v, d, T, curl } = this, w = nx + 2, t = this.time;
    const [tx, ty] = this.tip;
    // Source: a thin, hot thread from the ember, with a little turbulence at birth.
    const flick = noise1(t * 3.1, 1) * 1.2 + noise1(t * 0.7, 2) * 0.6;
    for (let k = -1; k <= 1; k++) {
      const idx = this.ix(clamp(tx + k, 1, nx), clamp(ty - 1, 1, ny)), core = k === 0 ? 1 : 0.35;
      d[idx] += dt * 11 * core;
      T[idx] += dt * 7 * core;
      v[idx] -= dt * 40 * core;
      u[idx] += flick * dt * 16;
    }
    // Buoyancy, a slow room draft, and the reader's hand.
    const draft = noise1(t * 0.12, 7) * 3.4 + Math.sin(t * 0.05) * 1.2;
    for (let j = 1; j <= ny; j++) {
      const high = 1 - j / ny;
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j;
        v[k] -= T[k] * 30 * dt;
        u[k] += draft * high * high * dt * 1.6;
        // A slow sway travels up the thread, so it climbs in lazy S-curves.
        // Laminar at the ember, then a sway that grows with height and travels upward.
        const above = smoothstep(0.04, 0.35, (ty - j) / ny);
        if (d[k] > 0.01) u[k] += (Math.sin(j * 0.21 + t * 1.5 + noise1(t * 0.25, 5) * 2.5) * 13 + noise1(t * 0.6 + j * 0.1, 11) * 6) * above * dt;
      }
    }
    for (const [cx, cy, fx, fy, r] of this.impulses.splice(0)) {
      for (let j = Math.floor(cy - r); j <= cy + r; j++)
        for (let i = Math.floor(cx - r * 1.6); i <= cx + r * 1.6; i++) {
          if (i < 1 || j < 1 || i > nx || j > ny) continue;
          const dd = Math.hypot((i - cx) / 1.6, j - cy);
          if (dd > r) continue;
          const k = i + w * j, fall = 1 - dd / r;
          u[k] += fx * fall * 0.35;
          v[k] += fy * fall * 0.35;
        }
    }
    // Vorticity confinement: give back the curls that the coarse grid smooths away.
    for (let j = 1; j <= ny; j++)
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j;
        curl[k] = (v[k + 1] - v[k - 1] - (u[k + w] - u[k - w])) * 0.5;
      }
    const eps = 4.4;
    for (let j = 2; j < ny; j++)
      for (let i = 2; i < nx; i++) {
        const k = i + w * j;
        const gx = Math.abs(curl[k + 1]) - Math.abs(curl[k - 1]), gy = Math.abs(curl[k + w]) - Math.abs(curl[k - w]);
        const len = Math.hypot(gx, gy) + 1e-5;
        u[k] += eps * (gy / len) * curl[k] * dt;
        v[k] -= eps * (gx / len) * curl[k] * dt;
      }
    this.project();
    this.u0.set(u);
    this.v0.set(v);
    this.advect(1, u, this.u0, this.u0, this.v0, dt);
    this.advect(2, v, this.v0, this.u0, this.v0, dt);
    this.project();
    this.d0.set(d);
    this.T0.set(T);
    this.advect(0, d, this.d0, u, v, dt);
    this.advect(0, T, this.T0, u, v, dt);
    const dk = Math.exp(-dt * 0.2), tk = Math.exp(-dt * 0.45);
    for (let k = 0; k < d.length; k++) { d[k] *= dk; T[k] *= tk; }
    // Ash flakes: now and then, a grey fleck falls from the ember.
    if (hash(Math.floor(t * 3)) > 0.93 && this.ash.length < 6 && hash(t * 11) > 0.6)
      this.ash.push({ x: tx, y: ty + 0.6, vy: 0, life: 0 });
    for (const a of this.ash) { a.vy += dt * 9; a.y += a.vy * dt; a.x += Math.sin(a.life * 5) * dt * 0.6; a.life += dt; }
    this.ash = this.ash.filter((a) => a.life < 4);
  }
  underlay(ctx: CanvasRenderingContext2D, f: CellFrame) {
    const { cw, ch, cols, rows } = f, [tx, ty] = this.tip;
    const dishY = Math.min(rows - 3, Math.round(rows * 0.84)) * ch;
    // The window beam (matching shaftAt) is soft-edged, so it is painted once per size.
    const key = `${f.width}x${f.height}`;
    if (this.beamKey !== key) {
      this.beamKey = key;
      const off = document.createElement("canvas");
      off.width = Math.max(1, Math.round(f.width / 2));
      off.height = Math.max(1, Math.round(f.height / 2));
      const o = off.getContext("2d")!;
      o.scale(0.5, 0.5);
      o.filter = `blur(${Math.round(cw * 1.4)}px)`;
      const cx = (y: number) => (cols * 0.32 + (y / ch) * 1.05) * cw, half = cols * 0.1 * cw;
      const beam = o.createLinearGradient(cx(0), 0, cx(dishY), dishY);
      beam.addColorStop(0, "rgba(255,214,160,0.13)");
      beam.addColorStop(1, "rgba(255,214,160,0.03)");
      o.fillStyle = beam;
      o.beginPath();
      o.moveTo(cx(-ch * 4) - half, -ch * 4);
      o.lineTo(cx(-ch * 4) + half, -ch * 4);
      o.lineTo(cx(dishY) + half * 1.3, dishY);
      o.lineTo(cx(dishY) - half * 1.3, dishY);
      o.closePath();
      o.fill();
      const pr = half * 2.2, pool = o.createRadialGradient(cx(dishY), dishY + ch, 0, cx(dishY), dishY + ch, pr);
      pool.addColorStop(0, "rgba(255,214,160,0.09)");
      pool.addColorStop(1, "rgba(255,214,160,0)");
      o.fillStyle = pool;
      o.fillRect(cx(dishY) - pr, dishY + ch - pr, pr * 2, pr * 2);
      this.beamCanvas = off;
    }
    if (this.beamCanvas) ctx.drawImage(this.beamCanvas, 0, 0, f.width, f.height);
    // The ember warms the air around it.
    const ex = (tx + 0.5) * cw, ey = (ty + 0.5) * ch, glow = 0.16 + 0.05 * Math.sin(this.time * 2.3);
    const g = ctx.createRadialGradient(ex, ey, 0, ex, ey, ch * 4);
    g.addColorStop(0, `rgba(255,150,80,${glow})`);
    g.addColorStop(1, "rgba(255,150,80,0)");
    ctx.fillStyle = g;
    ctx.fillRect(ex - ch * 4, ey - ch * 4, ch * 8, ch * 8);
  }
  render(f: CellFrame) {
    const { cols, rows } = f, { nx, d, u, v } = this, w = nx + 2, t = this.time;
    const [tx, ty] = this.tip;
    const dishRow = Math.min(rows - 3, Math.round(rows * 0.84));
    // Window light: a slanted shaft from the upper left, with drifting dust.
    const shaftAt = (c: number, r: number) => {
      const lx = cols * 0.32 + r * 1.05;
      return 1 - smoothstep(cols * 0.06, cols * 0.13, Math.abs(c - lx));
    };
    for (let r = 0; r < dishRow; r++)
      for (let c = 0; c < cols; c++) {
        const s = shaftAt(c, r);
        if (s <= 0.01) continue;
        f.shade(c, r, BEAM, s * 0.075 * (1 - r / rows));
        // Dust drifts through the light on its own slow current.
        const h = hash(c * 13 + Math.floor(r + t * 0.35) * 71);
        if (h > 0.955) {
          const drift = Math.sin(t * 0.6 + h * 30) * 0.5 + 0.5;
          f.put(c, r, h > 0.992 ? "*" : h > 0.975 ? "'" : ".", BEAM, s * (0.1 + drift * 0.3));
        }
      }
    // Smoke.
    for (let j = 1; j <= this.ny; j++)
      for (let i = 1; i <= nx; i++) {
        const k = i + w * j, den = d[k];
        if (den < 0.02) continue;
        const c = i - 1, r = j - 1, beam = shaftAt(c, r);
        const lum = clamp(Math.pow(den, 0.5) * 1.5) * (0.8 + beam * 0.7);
        let g: string;
        if (den < 0.14) {
          // Thin wisps follow the flow, which reads as silk.
          const a = Math.atan2(v[k] * 1.6, u[k]);
          const q = ((Math.round((a / Math.PI) * 4) % 4) + 4) % 4;
          g = den < 0.045 ? (hash(i * 7 + j * 3) > 0.5 ? "." : "'") : q === 0 ? "-" : q === 1 ? "\\" : q === 2 ? "|" : "/";
        } else g = RAMP[Math.min(RAMP.length - 1, Math.floor(clamp(den * 1.6) * RAMP.length))];
        // Warm white low in the room, cooling to blue-grey as it climbs; gold in the window light.
        const near = Math.hypot(c - tx, (r - ty) * 1.6) < 3;
        const color = near ? HOT : beam > 0.45 ? BEAM : r > ty - this.ny * 0.3 ? SMOKE : COOL;
        f.put(c, r, g, color, lum);
        if (den > 0.06) f.shade(c, r, color, clamp(Math.pow(den, 0.7) * 0.75) * (0.6 + beam * 0.6));
      }
    // The stick, leaning in its dish, and the ember breathing.
    const base = [tx + Math.round((dishRow - ty) * 0.28), dishRow];
    for (let r = ty + 1; r < dishRow; r++) {
      const c = tx + ((r - ty) * 0.28 + 0.5) | 0;
      const shifted = c !== ((tx + (r - 1 - ty) * 0.28 + 0.5) | 0);
      f.put(c, r, r < ty + 2 ? '"' : shifted ? "\\" : "|", r < ty + 2 ? ASH : STICK, r < ty + 2 ? 0.5 : 0.45);
    }
    const breath = 0.75 + 0.25 * Math.sin(t * 2.3) + noise1(t * 4, 3) * 0.1;
    f.put(tx, ty, "*", HOT, breath);
    f.shade(tx, ty, HOT, 0.35 * breath);
    for (const [dx, dy] of [[-1, 0], [1, 0], [0, -1]]) f.shade(tx + dx, ty + dy, HOT, 0.1 * breath);
    for (let k = -5; k <= 5; k++) {
      const c = base[0] + k;
      f.put(c, dishRow, k === -5 ? "(" : k === 5 ? ")" : "_", DISH, 0.42);
      f.shade(c, dishRow, DISH, 0.06);
    }
    f.put(base[0] - 2, dishRow - 1, ".", ASH, 0.3);
    f.put(base[0] + 3, dishRow - 1, ",", ASH, 0.28);
    for (const a of this.ash) f.put(a.x + (a.y - ty) * 0.28, Math.min(a.y, dishRow - 1), ".", ASH, 0.55 - a.life * 0.1);
    // Table edge.
    for (let c = 0; c < cols; c++) {
      f.put(c, dishRow + 1, hash(c) > 0.5 ? "_" : "-", TABLE, 0.16 + shaftAt(c, dishRow) * 0.2);
      for (let r = dishRow + 2; r < rows; r++) f.shade(c, r, TABLE, 0.05);
    }
  }
}
