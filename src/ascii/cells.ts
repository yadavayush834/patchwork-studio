/**
 * A frame of ASCII cells, drawn the way ascii-sharks draws its ocean: a dark
 * grid, optional shaded cell blocks, then glyphs batched by colour and
 * brightness so each frame costs one fillStyle change per bucket.
 */
export type RGB = readonly [number, number, number];
export const LEVELS = 12;
export const clamp = (n: number, a = 0, b = 1) => (n < a ? a : n > b ? b : n);
export const fract = (n: number) => n - Math.floor(n);
export const hash = (n: number) => fract(Math.sin(n * 127.1 + 311.7) * 43758.5453);
export const mix = (a: number, b: number, t: number) => a + (b - a) * t;
export const smoothstep = (a: number, b: number, x: number) => {
  const t = clamp((x - a) / (b - a));
  return t * t * (3 - 2 * t);
};
export function hexRgb(hex: string): RGB {
  const m = /^#([0-9a-f]{6})$/i.exec(hex);
  const n = m ? parseInt(m[1], 16) : 0x91dbe8;
  return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}
/** Smooth 1D value noise, used for wind, drafts and wandering. */
export function noise1(x: number, seed = 0) {
  const i = Math.floor(x), f = x - i, u = f * f * (3 - 2 * f);
  return mix(hash(i + seed * 57.3), hash(i + 1 + seed * 57.3), u) * 2 - 1;
}

export class CellFrame {
  cols = 0;
  rows = 0;
  cw = 10;
  ch = 16;
  width = 0;
  height = 0;
  /** Glyph char code per cell (0 = empty), its palette colour and brightness. */
  code = new Uint16Array(0);
  color = new Uint8Array(0);
  lum = new Float32Array(0);
  /** Optional shaded block behind the glyph (palette index + 1, 0 = none). */
  fill = new Uint8Array(0);
  fillLum = new Float32Array(0);
  private ctx: CanvasRenderingContext2D;
  private styles: string[] = [];
  private fillStyles: string[] = [];
  private order = new Int32Array(0);
  private bucket = new Uint16Array(0);
  private counts = new Int32Array(0);
  private chars: string[] = [];
  private font = "";
  background = "#020306";
  gridAlpha = 0.045;

  constructor(private canvas: HTMLCanvasElement, palette: RGB[]) {
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) throw new Error("Canvas 2D is not available");
    this.ctx = ctx;
    this.setPalette(palette);
  }
  setPalette(palette: RGB[]) {
    this.styles = [];
    this.fillStyles = [];
    for (const [r, g, b] of palette)
      for (let l = 0; l < LEVELS; l++) {
        const a = (l + 1) / LEVELS;
        this.styles.push(`rgba(${r},${g},${b},${a.toFixed(3)})`);
        this.fillStyles.push(`rgba(${r},${g},${b},${(a * a * 0.7).toFixed(4)})`);
      }
    this.counts = new Int32Array(this.styles.length + 1);
  }
  resize(width: number, height: number, density: number) {
    const dpr = Math.min(globalThis.devicePixelRatio || 1, 1.5);
    this.width = width;
    this.height = height;
    this.canvas.width = Math.round(width * dpr);
    this.canvas.height = Math.round(height * dpr);
    this.ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    this.cw = clamp(Math.round(width / (124 + 34 * (density - 1))), 7, 12);
    this.ch = Math.round(this.cw * 1.6);
    this.cols = Math.ceil(width / this.cw);
    this.rows = Math.ceil(height / this.ch);
    const n = this.cols * this.rows;
    this.code = new Uint16Array(n);
    this.color = new Uint8Array(n);
    this.lum = new Float32Array(n);
    this.fill = new Uint8Array(n);
    this.fillLum = new Float32Array(n);
    this.order = new Int32Array(n);
    this.bucket = new Uint16Array(n);
    this.font = `${Math.round(this.ch * 0.78)}px "Space Mono", ui-monospace, monospace`;
  }
  clear() {
    this.code.fill(0);
    this.lum.fill(0);
    this.fill.fill(0);
    this.fillLum.fill(0);
  }
  /** Place a glyph; the brighter claim on a cell wins. */
  put(x: number, y: number, glyph: string | number, color: number, lum: number) {
    x = x | 0;
    y = y | 0;
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows || lum < 0.035) return;
    const i = y * this.cols + x;
    if (lum < this.lum[i]) return;
    this.lum[i] = lum > 1 ? 1 : lum;
    this.code[i] = typeof glyph === "number" ? glyph : glyph.charCodeAt(0);
    this.color[i] = color;
  }
  shade(x: number, y: number, color: number, lum: number) {
    x = x | 0;
    y = y | 0;
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows || lum < 0.02) return;
    const i = y * this.cols + x;
    if (lum < this.fillLum[i]) return;
    this.fillLum[i] = lum > 1 ? 1 : lum;
    this.fill[i] = color + 1;
  }
  private char(code: number) {
    return this.chars[code] ?? (this.chars[code] = String.fromCharCode(code));
  }
  /** Bucket cells by style with a counting sort, then draw each bucket in one pass. */
  private sortBy(active: (i: number) => number) {
    const { counts, order, bucket } = this;
    counts.fill(0);
    const n = this.cols * this.rows, empty = this.styles.length;
    for (let i = 0; i < n; i++) {
      const b = active(i);
      bucket[i] = b < 0 ? empty : b;
      counts[bucket[i]]++;
    }
    let sum = 0;
    for (let b = 0; b <= empty; b++) {
      const c = counts[b];
      counts[b] = sum;
      sum += c;
    }
    for (let i = 0; i < n; i++) order[counts[bucket[i]]++] = i;
    // counts[b] now holds the end of bucket b.
  }
  draw(underlay?: (ctx: CanvasRenderingContext2D) => void) {
    const { ctx, cols, rows, cw, ch, width, height } = this;
    ctx.fillStyle = this.background;
    ctx.fillRect(0, 0, width, height);
    underlay?.(ctx);
    if (this.gridAlpha > 0) {
      ctx.fillStyle = `rgba(150,170,210,${this.gridAlpha})`;
      for (let c = 0; c <= cols; c++) ctx.fillRect(c * cw, 0, 1, height);
      for (let r = 0; r <= rows; r++) ctx.fillRect(0, r * ch, width, 1);
    }
    const empty = this.styles.length;
    const levelOf = (l: number) => Math.min(LEVELS - 1, (l * LEVELS) | 0);
    // Shaded blocks.
    this.sortBy((i) => (this.fill[i] ? (this.fill[i] - 1) * LEVELS + levelOf(this.fillLum[i]) : -1));
    let start = 0;
    for (let b = 0; b < empty; b++) {
      const end = this.counts[b];
      if (end > start) {
        ctx.fillStyle = this.fillStyles[b];
        for (let k = start; k < end; k++) {
          const i = this.order[k];
          ctx.fillRect((i % cols) * cw + 1, ((i / cols) | 0) * ch + 1, cw - 1, ch - 1);
        }
      }
      start = end;
    }
    // Glyphs.
    ctx.font = this.font;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    this.sortBy((i) => (this.code[i] ? this.color[i] * LEVELS + levelOf(this.lum[i]) : -1));
    start = 0;
    for (let b = 0; b < empty; b++) {
      const end = this.counts[b];
      if (end > start) {
        ctx.fillStyle = this.styles[b];
        for (let k = start; k < end; k++) {
          const i = this.order[k];
          ctx.fillText(this.char(this.code[i]), ((i % cols) + 0.5) * cw, (((i / cols) | 0) + 0.55) * ch);
        }
      }
      start = end;
    }
    void rows;
  }
}

/** A world drawn into a CellFrame. Pixels in, cells out. */
export interface AsciiScene {
  palette: RGB[];
  background: string;
  resize(width: number, height: number, frame: CellFrame): void;
  step(dt: number): void;
  render(frame: CellFrame, ctx?: CanvasRenderingContext2D): void;
  underlay?(ctx: CanvasRenderingContext2D, frame: CellFrame): void;
  pointer(x: number, y: number, active: boolean): void;
  poke(x: number, y: number): void;
}
