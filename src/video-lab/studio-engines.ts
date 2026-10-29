import type { Settings } from "./catalog";
import {
  glyphSets,
  pixelPalettes,
  gridSize,
  grade,
  orderedOffset,
} from "./studio-settings";

type Context = OffscreenCanvasRenderingContext2D;
const clamp = (v: number) => Math.max(0, Math.min(1, v));
const luminance = (r: number, g: number, b: number) =>
  (r * 0.2126 + g * 0.7152 + b * 0.0722) / 255;
const rgb = (hex: string) =>
  [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));

/** Area sampling at the logical art resolution removes single-pixel aliasing.
 * Grid dimensions depend on framing, not preview/export bitmap resolution. */
class Sampler {
  canvas = new OffscreenCanvas(1, 1);
  context = this.canvas.getContext("2d", { willReadFrequently: true })!;
  read(image: CanvasImageSource, columns: number, rows: number) {
    this.canvas.width = columns;
    this.canvas.height = rows;
    this.context.imageSmoothingEnabled = true;
    this.context.imageSmoothingQuality = "high";
    this.context.drawImage(image, 0, 0, columns, rows);
    return this.context.getImageData(0, 0, columns, rows);
  }
}
function tones(data: Uint8ClampedArray, s: Settings) {
  const values = new Float32Array(data.length / 4);
  for (let i = 0; i < values.length; i++)
    values[i] = grade(
      luminance(data[i * 4], data[i * 4 + 1], data[i * 4 + 2]),
      s.exposure,
      s.contrast,
    );
  return values;
}
function neighbors(
  values: Float32Array,
  x: number,
  y: number,
  w: number,
  h: number,
) {
  const left = values[y * w + Math.max(0, x - 1)],
    right = values[y * w + Math.min(w - 1, x + 1)];
  const top = values[Math.max(0, y - 1) * w + x],
    bottom = values[Math.min(h - 1, y + 1) * w + x];
  return {
    gx: right - left,
    gy: bottom - top,
    average: (left + right + top + bottom) / 4,
  };
}

export class AsciiEngine {
  private sampler = new Sampler();
  private atlas = new OffscreenCanvas(1, 1);
  private key = "";
  private glyphs: { character: string; slot: number; coverage: number }[] = [];
  private slotWidth = 0;
  private slotHeight = 0;
  text = "";
  private prepare(characters: string, cw: number, ch: number) {
    // Cache a measured, coverage-sorted glyph atlas. No font fallback or assumed ramp order.
    const w = Math.max(2, Math.ceil(cw)),
      h = Math.max(3, Math.ceil(ch));
    const key = `${characters}:${w}:${h}`;
    if (key === this.key) return;
    this.key = key;
    this.slotWidth = w;
    this.slotHeight = h;
    const unique = [...new Set(characters + "|-/\\")];
    this.atlas.width = unique.length * w;
    this.atlas.height = h;
    const c = this.atlas.getContext("2d", { willReadFrequently: true })!;
    c.fillStyle = "#fff";
    c.textAlign = "center";
    c.textBaseline = "middle";
    c.font = `${Math.min(h * 0.94, w / 0.61)}px "Space Mono", monospace`;
    this.glyphs = unique.map((character, slot) => {
      c.fillText(character, slot * w + w / 2, h / 2);
      return { character, slot, coverage: 0 };
    });
    const pixels = c.getImageData(0, 0, this.atlas.width, h).data;
    for (const g of this.glyphs) {
      let sum = 0;
      for (let y = 0; y < h; y++)
        for (let x = 0; x < w; x++)
          sum += pixels[(y * this.atlas.width + g.slot * w + x) * 4 + 3];
      g.coverage = sum / (w * h * 255);
    }
    this.glyphs.sort((a, b) => a.coverage - b.coverage);
  }
  render(image: CanvasImageSource, output: OffscreenCanvas, s: Settings) {
    const { width, height } = output;
    const { columns, rows } = gridSize(width, height, s.cell, true);
    const cw = width / columns,
      ch = height / rows;
    const pixels = this.sampler.read(image, columns, rows);
    const luma = tones(pixels.data, s);
    const characters = glyphSets[s.glyphs ?? "dense"];
    this.prepare(characters, cw, ch);
    const ramp = this.glyphs.filter((g) => characters.includes(g.character));
    const maxCoverage = ramp.at(-1)!.coverage;
    const c = output.getContext("2d")!;
    c.save();
    c.clearRect(0, 0, width, height);
    c.imageSmoothingEnabled = true;
    const paper = rgb(s.background),
      ink = rgb(s.foreground);
    const lightPaper =
      luminance(...(paper as [number, number, number])) >
      luminance(...(ink as [number, number, number]));
    const lines: string[] = [];
    for (let y = 0; y < rows; y++) {
      let line = "";
      for (let x = 0; x < columns; x++) {
        const i = y * columns + x,
          n = neighbors(luma, x, y, columns, rows);
        const tone = clamp(
          luma[i] + (luma[i] - n.average) * (s.edge ?? 0.25) * 2,
        );
        // Ink coverage follows polarity; light paper no longer reverses the photograph.
        const brightness = lightPaper && !s.color ? 1 - tone : tone;
        const target = Math.pow(brightness, 0.7) * maxCoverage;
        let glyph = ramp.reduce(
          (best, g) =>
            Math.abs(g.coverage - target) < Math.abs(best.coverage - target)
              ? g
              : best,
          ramp[0],
        );
        if (
          s.glyphs === "contour" &&
          (s.edge ?? 0.7) > 0 &&
          Math.hypot(n.gx, n.gy) > 0.12 + (1 - (s.edge ?? 0.7)) * 0.25
        ) {
          const tangent =
            Math.abs(n.gx) > Math.abs(n.gy) * 2
              ? "|"
              : Math.abs(n.gy) > Math.abs(n.gx) * 2
                ? "-"
                : n.gx * n.gy > 0
                  ? "/"
                  : "\\";
          glyph = this.glyphs.find((g) => g.character === tangent)!;
        }
        line += glyph.character;
        c.drawImage(
          this.atlas,
          glyph.slot * this.slotWidth,
          0,
          this.slotWidth,
          this.slotHeight,
          x * cw,
          y * ch,
          cw,
          ch,
        );
      }
      lines.push(line);
    }
    this.text = lines.join("\n");
    // Color the glyph mask once. Source color is area-averaged and never sampled at a single point.
    c.globalCompositeOperation = "source-in";
    if (s.color) {
      for (let i = 0; i < pixels.data.length; i += 4) {
        for (let channel = 0; channel < 3; channel++)
          pixels.data[i + channel] =
            255 *
            Math.pow(
              grade(pixels.data[i + channel] / 255, s.exposure, s.contrast),
              0.75,
            );
        pixels.data[i + 3] = 255;
      }
      this.sampler.context.putImageData(pixels, 0, 0);
      c.imageSmoothingEnabled = false;
      c.drawImage(this.sampler.canvas, 0, 0, width, height);
    } else {
      c.fillStyle = s.foreground;
      c.fillRect(0, 0, width, height);
    }
    c.globalCompositeOperation = "destination-over";
    c.fillStyle = s.background;
    c.fillRect(0, 0, width, height);
    c.restore();
  }
}

/** Perceptual palette distance (OKLab), with a reusable 5-bit RGB lookup. */
export function oklab(rgb: number[]) {
  const [r, g, b] = rgb.map((v) => {
    const s = v / 255;
    return s <= 0.04045 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  const l = Math.cbrt(0.4122214708 * r + 0.5363325363 * g + 0.0514459929 * b);
  const m = Math.cbrt(0.2119034982 * r + 0.6806995451 * g + 0.1073969566 * b);
  const s = Math.cbrt(0.0883024619 * r + 0.2817188376 * g + 0.6299787005 * b);
  return [
    0.2104542553 * l + 0.793617785 * m - 0.0040720468 * s,
    1.9779984951 * l - 2.428592205 * m + 0.4505937099 * s,
    0.0259040371 * l + 0.7827717662 * m - 0.808675766 * s,
  ];
}
export class PixelEngine {
  private sampler = new Sampler();
  private paletteKey = "";
  private palette: number[][] = [];
  private labs: number[][] = [];
  private lookup = new Int16Array(32768).fill(-1);
  private nearest(r: number, g: number, b: number) {
    const key = (r >> 3) * 1024 + (g >> 3) * 32 + (b >> 3);
    if (this.lookup[key] >= 0) return this.palette[this.lookup[key]];
    // Quantized key center, not the first pixel to visit it: order-independent across frames/seeks.
    const color = oklab([(r >> 3) * 8 + 4, (g >> 3) * 8 + 4, (b >> 3) * 8 + 4]);
    let best = 0,
      distance = Infinity;
    this.labs.forEach((p, i) => {
      const d =
        (p[0] - color[0]) ** 2 * 1.5 +
        (p[1] - color[1]) ** 2 +
        (p[2] - color[2]) ** 2;
      if (d < distance) {
        distance = d;
        best = i;
      }
    });
    this.lookup[key] = best;
    return this.palette[best];
  }
  render(image: CanvasImageSource, output: OffscreenCanvas, s: Settings) {
    const { width, height } = output;
    const { columns, rows } = gridSize(width, height, s.cell, false);
    const pixels = this.sampler.read(image, columns, rows),
      luma = tones(pixels.data, s);
    const palette = s.palette ?? "studio";
    if (this.paletteKey !== palette) {
      this.paletteKey = palette;
      this.palette =
        palette === "original" ? [] : pixelPalettes[palette].map(rgb);
      this.labs = this.palette.map(oklab);
      this.lookup.fill(-1);
    }
    for (let y = 0; y < rows; y++)
      for (let x = 0; x < columns; x++) {
        const i = y * columns + x,
          n = neighbors(luma, x, y, columns, rows);
        const edge = (luma[i] - n.average) * (s.edge ?? 0.3) * 1.5;
        const dither = orderedOffset(
          x,
          y,
          (palette === "original" ? 0 : (s.dither ?? 0.25)) *
            (palette === "handheld" ? 0.3 : 0.12),
        );
        const color = [0, 1, 2].map((ch) =>
          Math.round(
            clamp(
              grade(pixels.data[i * 4 + ch] / 255, s.exposure, s.contrast) +
                edge +
                dither,
            ) * 255,
          ),
        );
        const chosen =
          palette === "original"
            ? color
            : this.nearest(...(color as [number, number, number]));
        pixels.data.set([...chosen, 255], i * 4);
      }
    this.sampler.context.putImageData(pixels, 0, 0);
    const c: Context = output.getContext("2d")!;
    c.save();
    c.imageSmoothingEnabled = false;
    c.clearRect(0, 0, width, height);
    c.drawImage(this.sampler.canvas, 0, 0, width, height);
    c.restore();
  }
}
