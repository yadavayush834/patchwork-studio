import { type CellFrame, clamp, fract, hash } from "./cells";

/** Brightness ramps: each scene picks the alphabet that suits its material. */
export const RAMP = " .,:;-~=+*o%#@";
export const STREAK = " .:'|!|¦";
export const glyphOf = (lum: number, ramp = RAMP) => ramp[Math.min(ramp.length - 1, 1 + ((clamp(lum) * (ramp.length - 1)) | 0))];

/** Smooth 2D value noise in [-1, 1] and a few octaves of it. */
const h2 = (x: number, y: number, s: number) => fract(Math.sin(x * 127.1 + y * 311.7 + s * 74.7) * 43758.5453);
export function noise2(x: number, y: number, seed = 0) {
  const ix = Math.floor(x), iy = Math.floor(y), fx = x - ix, fy = y - iy;
  const u = fx * fx * (3 - 2 * fx), v = fy * fy * (3 - 2 * fy);
  const a = h2(ix, iy, seed), b = h2(ix + 1, iy, seed), c = h2(ix, iy + 1, seed), d = h2(ix + 1, iy + 1, seed);
  return (a + (b - a) * u + (c - a) * v + (a - b - c + d) * u * v) * 2 - 1;
}
export function fbm(x: number, y: number, seed = 0, oct = 4) {
  let s = 0, a = 0.5, f = 1;
  for (let i = 0; i < oct; i++) { s += a * noise2(x * f, y * f, seed + i * 13); f *= 2.03; a *= 0.5; }
  return s;
}
export const rand = (n: number) => hash(n);

/**
 * A light buffer the size of the cell grid. Scenes paint light and colour into it,
 * optionally smear bright cells into vertical streaks (the "long exposure" look),
 * then emit glyphs to the frame in one pass.
 */
export class Light {
  cols = 0; rows = 0;
  lum = new Float32Array(0);
  col = new Uint8Array(0);
  glyph = new Uint16Array(0);
  resize(frame: CellFrame) {
    this.cols = frame.cols; this.rows = frame.rows;
    const n = this.cols * this.rows;
    this.lum = new Float32Array(n); this.col = new Uint8Array(n); this.glyph = new Uint16Array(n);
  }
  clear() { this.lum.fill(0); this.glyph.fill(0); }
  /** Add light to a cell; the colour of the stronger contribution wins. */
  add(x: number, y: number, lum: number, color: number, glyph?: string) {
    x |= 0; y |= 0;
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows || lum <= 0) return;
    const i = y * this.cols + x;
    if (lum >= this.lum[i] * 0.6) this.col[i] = color;
    this.lum[i] = Math.min(1.4, this.lum[i] + lum);
    if (glyph) this.glyph[i] = glyph.charCodeAt(0);
  }
  /** Set a cell outright (opaque things in front: silhouettes, fish, signs). */
  set(x: number, y: number, lum: number, color: number, glyph: string) {
    x |= 0; y |= 0;
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) return;
    const i = y * this.cols + x;
    this.lum[i] = lum; this.col[i] = color; this.glyph[i] = glyph.charCodeAt(0);
  }
  /** Set a cell's light, letting the ramp pick the glyph (for opaque surfaces drawn back to front). */
  paint(x: number, y: number, lum: number, color: number) {
    x |= 0; y |= 0;
    if (x < 0 || y < 0 || x >= this.cols || y >= this.rows) return;
    const i = y * this.cols + x;
    this.lum[i] = lum; this.col[i] = color; this.glyph[i] = 0;
  }
  /** Smear light downward (and a little upward) from bright cells, like a slow shutter. */
  streak(threshold: number, down: number, up = down * 0.35) {
    const { cols, rows, lum, col } = this;
    const src = lum.slice();
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const i = y * cols + x, l = src[i];
      if (l < threshold) continue;
      const k = (l - threshold) / (1.2 - threshold);
      const nd = (down * k) | 0, nu = (up * k) | 0;
      for (let d = 1; d <= nd; d++) { const j = i + d * cols; if (y + d >= rows) break; const v = l * 0.55 * (1 - d / (nd + 1)); if (v > lum[j]) { lum[j] = v; col[j] = col[i]; this.glyph[j] = v > 0.3 ? 124 : v > 0.15 ? 58 : 46; } }
      for (let d = 1; d <= nu; d++) { const j = i - d * cols; if (y - d < 0) break; const v = l * 0.45 * (1 - d / (nu + 1)); if (v > lum[j]) { lum[j] = v; col[j] = col[i]; this.glyph[j] = v > 0.3 ? 124 : v > 0.15 ? 39 : 46; } }
    }
  }
  /** Write everything to the frame. Cells without a fixed glyph take one from the ramp. */
  emit(frame: CellFrame, ramp = RAMP, shadeAbove = 0.55) {
    const { cols, rows, lum, col, glyph } = this;
    for (let y = 0; y < rows; y++) for (let x = 0; x < cols; x++) {
      const i = y * cols + x, l = lum[i];
      if (l < 0.04) continue;
      const g = glyph[i] ? glyph[i] : glyphOf(Math.min(1, l), ramp).charCodeAt(0);
      frame.put(x, y, g, col[i], Math.min(1, l));
      if (l > shadeAbove) frame.shade(x, y, col[i], Math.min(1, (l - shadeAbove) * 1.4));
    }
  }
}
