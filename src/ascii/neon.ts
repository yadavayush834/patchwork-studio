import { type AsciiScene, type CellFrame, type RGB, clamp, hexRgb } from "./cells";
import { Light, noise2, rand } from "./kit";

/**
 * Neon rain: a city street at night in characters.
 * Blocks of buildings with windows that switch on and off, vertical neon signs
 * that hum and flicker, rain falling on a slant and splashing on the wet street,
 * which mirrors the signs as long trembling streaks. The cursor carries an
 * umbrella that keeps the rain off; a click brings lightning.
 */
const WIN = 3, WALL = 4, RAIN = 5, WHITE = 6, RED = 7, STREET = 8;
const SIGNS = ["NOODLES", "HOTEL", "OPEN", "BAR", "24H", "TAXI", "RAMEN", "LAUNDRY"];

interface Block { x0: number; x1: number; top: number; shade: number; seed: number }
interface Sign { x: number; y: number; text: string; color: number; vertical: boolean; seed: number }

export class NeonRain implements AsciiScene {
  palette: RGB[];
  background = "#05030c";
  bloom = 0.9;
  grid = 0;
  private light = new Light();
  private W = 0; private H = 0; private cw = 10; private ch = 16;
  private t = 0; private flash = 0; private bolt: [number, number][] = [];
  private blocks: Block[] = []; private signs: Sign[] = [];
  private drops: { x: number; y: number; v: number }[] = [];
  private splashes: { x: number; y: number; life: number }[] = [];
  private ptr = { x: -99, y: -99, on: false };
  private density: number;

  constructor(color: string, density: number) {
    this.palette = [hexRgb(color), [80, 230, 255], [255, 184, 80], [255, 214, 140], [44, 36, 70], [150, 170, 230], [240, 240, 255], [255, 70, 80], [70, 60, 110]];
    this.density = clamp(density, 0.5, 1.6);
  }
  resize(width: number, height: number, frame: CellFrame) {
    this.W = width; this.H = height; this.cw = frame.cw; this.ch = frame.ch;
    this.light.resize(frame);
    const cols = frame.cols, rows = frame.rows, street = Math.round(rows * 0.78);
    this.blocks = []; this.signs = [];
    for (let x = 0, k = 0; x < cols; k++) {
      const w = 7 + Math.floor(rand(k * 3.3) * 12), top = Math.round(rows * (0.12 + rand(k * 7.7) * 0.42));
      this.blocks.push({ x0: x, x1: Math.min(cols, x + w), top, shade: 0.12 + rand(k * 2.1) * 0.1, seed: k * 13.1 });
      if (rand(k * 5.9) > 0.35) {
        const vertical = rand(k * 4.4) > 0.4, text = SIGNS[Math.floor(rand(k * 6.6) * SIGNS.length)];
        const sy = vertical ? Math.round(top + 3 + rand(k) * Math.max(1, street - top - text.length - 5)) : Math.round(top + 2 + rand(k * 1.9) * 5);
        const sx = vertical ? x + (rand(k * 8.8) > 0.5 ? 1 : w - 2) : x + Math.max(1, Math.floor((w - text.length) / 2));
        this.signs.push({ x: sx, y: sy, text, vertical, color: [0, 1, 2, 7][Math.floor(rand(k * 9.2) * 4)], seed: k * 3.7 });
      }
      x += w + (rand(k * 1.1) > 0.7 ? 1 : 0);
    }
    this.drops = [];
    for (let i = 0; i < Math.round(cols * 1.6 * this.density); i++) this.drops.push({ x: rand(i * 1.7) * cols, y: rand(i * 4.3) * rows, v: 26 + rand(i * 2.9) * 20 });
  }
  pointer(x: number, y: number, active: boolean) { this.ptr = { x: x / this.cw, y: y / this.ch, on: active }; }
  poke(x: number) {
    this.flash = 1;
    const cols = this.light.cols, rows = this.light.rows;
    let bx = x / this.cw; this.bolt = [];
    for (let y = 0; y < rows * 0.5; y++) { bx += Math.round((rand(y * 7.1 + this.t * 13) - 0.5) * 3); this.bolt.push([clamp(bx, 0, cols - 1), y]); }
  }
  step(dt: number) {
    this.t += dt;
    this.flash = Math.max(0, this.flash - dt * 1.8);
    const rows = this.light.rows, cols = this.light.cols, street = Math.round(rows * 0.78), p = this.ptr;
    for (const d of this.drops) {
      d.y += d.v * dt; d.x += d.v * dt * 0.22;
      // the umbrella keeps a dry patch under the cursor
      const under = p.on && Math.abs(d.x - p.x) < 7 && d.y > p.y - 2 && d.y < p.y + 1;
      if (d.y > street + (d.x * 7 % 6) || under) {
        if (this.splashes.length < 160) this.splashes.push({ x: d.x, y: under ? p.y - 2 : street + (d.x * 7 % 6), life: 1 });
        d.y = -rand(d.x * 9 + this.t) * 6; d.x = rand(d.v + this.t * 3) * (cols + 10) - 10;
      }
    }
    for (const s of this.splashes) s.life -= dt * 3.2;
    this.splashes = this.splashes.filter((s) => s.life > 0);
  }
  /** How a sign is lit right now: steady hum, with the odd broken flicker. */
  private hum(s: Sign) {
    const n = noise2(this.t * 6, s.seed, 3);
    return n < -0.72 ? 0.15 : 0.85 + 0.15 * Math.sin(this.t * 50 + s.seed);
  }
  render(frame: CellFrame) {
    const L = this.light; L.clear();
    const { cols, rows } = L; if (!cols) return;
    const street = Math.round(rows * 0.78), f = this.flash;
    // sky haze: distant towers in fine dots
    for (let x = 0; x < cols; x++) {
      const far = Math.round(rows * (0.3 + 0.12 * noise2(x * 0.08, 1, 2)));
      for (let y = far; y < street; y++) if ((x + y) % 2 === 0) L.add(x, y, 0.07 + f * 0.25, WALL, ".");
    }
    // buildings with windows
    for (const b of this.blocks) {
      for (let y = b.top; y < street; y++) for (let x = b.x0; x < b.x1; x++) {
        const edge = x === b.x0 || x === b.x1 - 1, roof = y === b.top;
        if (roof) { L.set(x, y, 0.35 + f * 0.5, WALL, "_"); continue; }
        if (edge) { L.set(x, y, 0.22 + f * 0.4, WALL, "|"); continue; }
        const wx = (x - b.x0) % 3, wy = (y - b.top) % 3;
        if (wx === 1 && wy === 1) {
          const on = noise2(x * 0.7 + b.seed, y * 0.9 + this.t * 0.04, 5) > 0.1;
          L.set(x, y, on ? 0.55 + 0.1 * Math.sin(this.t + x) : 0.1 + f * 0.3, on ? WIN : WALL, on ? "#" : "=");
        } else L.set(x, y, b.shade * 0.5 + f * 0.3, WALL, " ");
      }
      // a blinking aircraft light on tall roofs
      if (b.top < rows * 0.3) L.set(Math.round((b.x0 + b.x1) / 2), b.top - 1, Math.sin(this.t * 3 + b.seed) > 0.4 ? 1 : 0.15, RED, "*");
    }
    // neon signs: letters with a buzz of light around them
    for (const s of this.signs) {
      const h = this.hum(s);
      // a dark backboard with a lit tube border, then the letters
      const w = s.vertical ? 1 : s.text.length, hgt = s.vertical ? s.text.length : 1;
      for (let yy = -1; yy <= hgt; yy++) for (let xx = -1; xx <= w; xx++) {
        const border = yy === -1 || yy === hgt || xx === -1 || xx === w;
        if (border && s.y + yy < street) L.set(s.x + xx, s.y + yy, h * 0.55, s.color, (yy === -1 || yy === hgt) ? (xx === -1 || xx === w ? "+" : "-") : "|");
      }
      [...s.text].forEach((ch, i) => {
        const x = s.vertical ? s.x : s.x + i, y = s.vertical ? s.y + i : s.y;
        if (y >= street) return;
        L.set(x, y, h, s.color, ch);
      });
    }
    // the street: wet, catching every sign as a long trembling streak
    for (let y = street; y < rows; y++) {
      const d = y - street;
      for (let x = 0; x < cols; x++) {
        const wob = Math.round(noise2(x * 0.3, y * 1.4 - this.t * 2.5, 9) * (1 + d * 0.3));
        const sy = street - 1 - Math.round(d * 1.6), sx = clamp(x + wob, 0, cols - 1);
        const j = sy * cols + sx, src = sy >= 0 ? L.lum[j] : 0;
        const c = sy >= 0 ? L.col[j] : STREET;
        const l = (c === WALL ? src * 0.2 : src * 0.85) * (1 - d / (rows - street + 2));
        if (l > 0.05) L.set(x, y, l, c === WALL ? STREET : c, l > 0.25 ? "|" : ":");
        else L.set(x, y, 0.06, STREET, (x + y * 3) % 7 === 0 ? "_" : " ");
      }
    }
    // rain and splashes
    for (const d of this.drops) { L.add(d.x, d.y, 0.32 + f * 0.4, RAIN, "/"); L.add(d.x - 0.22, d.y - 1, 0.14, RAIN, "/"); }
    for (const s of this.splashes) L.add(s.x, s.y, s.life * 0.55, RAIN, s.life > 0.6 ? "o" : s.life > 0.3 ? "." : "'");
    // the umbrella
    const p = this.ptr;
    if (p.on) {
      const ux = Math.round(p.x), uy = Math.round(p.y);
      const shape = [["  .-^^^-.  ", -3], [" /_______\\ ", -2], ["     |     ", -1], ["     J     ", 0]] as const;
      for (const [row, dy] of shape) [...row].forEach((ch, i) => { if (ch !== " ") L.set(ux - 5 + i, uy + dy, 0.95, dy < -1 ? 0 : WHITE, ch); });
    }
    // lightning
    if (f > 0.2) for (const [x, y] of this.bolt) L.set(x, y, f, WHITE, "\\/|"[(x + y) % 3]);
    L.emit(frame, " .:-=+*#", 0.8);
  }
  underlay(ctx: CanvasRenderingContext2D) {
    const { W, H } = this;
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, `rgba(${40 + this.flash * 140},${20 + this.flash * 120},${70 + this.flash * 140},1)`); sky.addColorStop(0.75, "rgba(12,6,24,1)"); sky.addColorStop(1, "rgba(8,4,16,1)");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    // solid silhouettes, so the towers stand in front of the sky
    const street = Math.round(this.light.rows * 0.78) * this.ch;
    for (const b of this.blocks) { ctx.fillStyle = `rgb(${11 + b.shade * 40},${8 + b.shade * 30},${22 + b.shade * 60})`; ctx.fillRect(b.x0 * this.cw, b.top * this.ch, (b.x1 - b.x0) * this.cw, street - b.top * this.ch); }
    ctx.fillStyle = "#0a0614"; ctx.fillRect(0, street, W, H - street);
    // neon spill on the walls
    ctx.save(); ctx.globalCompositeOperation = "lighter";
    for (const s of this.signs) {
      const h = this.hum(s), x = (s.x + (s.vertical ? 0.5 : s.text.length / 2)) * this.cw, y = (s.y + (s.vertical ? s.text.length / 2 : 0.5)) * this.ch;
      const [r, g, b] = this.palette[s.color], R = this.cw * (s.vertical ? 6 : s.text.length * 0.9);
      const gr = ctx.createRadialGradient(x, y, 0, x, y, R);
      gr.addColorStop(0, `rgba(${r},${g},${b},${0.22 * h})`); gr.addColorStop(1, `rgba(${r},${g},${b},0)`);
      ctx.fillStyle = gr; ctx.fillRect(x - R, y - R, R * 2, R * 2);
    }
    ctx.restore();
  }
}
