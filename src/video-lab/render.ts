import { AsciiEngine, PixelEngine } from "./studio-engines";
import { luminance, noise, type Settings } from "./catalog";
import { GPU, gpuStyles } from "./gpu";
type Ctx = OffscreenCanvasRenderingContext2D;
export class Renderer {
  readonly output = new OffscreenCanvas(2, 2);
  private source = new OffscreenCanvas(2, 2);
  private reference = new OffscreenCanvas(2, 2);
  private gpu?: GPU;
  private asciiEngine?: AsciiEngine;
  private pixelEngine?: PixelEngine;
  private data = new Uint8ClampedArray();
  private w = 2;
  private h = 2;
  text = "";
  private sample(x: number, y: number) {
    const i =
      (Math.max(0, Math.min(this.h - 1, Math.floor(y))) * this.w +
        Math.max(0, Math.min(this.w - 1, Math.floor(x)))) *
      4;
    return [this.data[i], this.data[i + 1], this.data[i + 2]];
  }
  render(
    image: CanvasImageSource,
    width: number,
    height: number,
    id: string,
    settings: Settings,
    time = 0,
    reference?: CanvasImageSource,
  ) {
    this.w = width;
    this.h = height;
    this.text = "";
    if (this.output.width !== width || this.output.height !== height) {
      this.output.width = width;
      this.output.height = height;
      this.source.width = width;
      this.source.height = height;
    }
    // Normalize decoded VideoFrames and preview ImageBitmaps to the same RGBA
    // sampling path before reducing the logical grid. Direct video downsampling
    // can otherwise choose different glyphs than CanvasSink/poster frames.
    const src = this.source.getContext("2d", { willReadFrequently: true })!;
    src.drawImage(image, 0, 0, width, height);
    if (id === "ascii-studio") {
      this.asciiEngine ??= new AsciiEngine();
      this.asciiEngine.render(this.source, this.output, settings);
      this.text = this.asciiEngine.text;
      return this.output;
    }
    if (id === "pixel") {
      this.pixelEngine ??= new PixelEngine();
      this.pixelEngine.render(this.source, this.output, settings);
      return this.output;
    }

    const c = this.output.getContext("2d")!;
    if (gpuStyles.includes(id) && id !== "pixelsort") {
      this.gpu ??= new GPU();
      if (reference) {
        this.reference.width = width;
        this.reference.height = height;
        this.reference
          .getContext("2d")!
          .drawImage(reference, 0, 0, width, height);
      }
      c.drawImage(
        this.gpu.render(
          this.source,
          id,
          { ...settings, cell: (settings.cell * width) / 720 },
          time,
          reference ? this.reference : undefined,
        ),
        0,
        0,
      );
      return this.output;
    }
    this.data = src.getImageData(0, 0, width, height).data;
    if (id === "pixelsort") {
      const out = new Uint8ClampedArray(this.data),
        maxRun = Math.max(8, Math.round(((settings.cell * width) / 720) * 14));
      const lum = (index: number) =>
        luminance(this.data[index], this.data[index + 1], this.data[index + 2]);
      for (let y = 0; y < height; y++)
        for (let x = 0; x < width;) {
          const first = (y * width + x) * 4;
          if (
            lum(first) < 0.15 + (1 - settings.amount) * 0.3 ||
            lum(first) > 0.92
          ) {
            x++;
            continue;
          }
          const indices: number[] = [];
          while (x < width && indices.length < maxRun) {
            const i = (y * width + x) * 4,
              l = lum(i);
            if (l < 0.15 + (1 - settings.amount) * 0.3 || l > 0.92) break;
            indices.push(i);
            x++;
          }
          const sorted = [...indices].sort((a, b) => lum(a) - lum(b));
          indices.forEach((dest, j) => {
            for (let ch = 0; ch < 3; ch++)
              out[dest + ch] = this.data[sorted[j] + ch];
          });
        }
      c.putImageData(new ImageData(out, width, height), 0, 0);
      return this.output;
    }
    const s = { ...settings, cell: Math.max(2, (settings.cell * width) / 720) },
      cell = s.cell,
      k = s.amount;
    c.globalAlpha = 1;
    c.shadowBlur = 0;
    c.fillStyle = [
      "cmyk",
      "halftone",
      "crosshatch",
      "engraving",
      "mezzotint",
      "risograph",
      "sketch",
      "stippling",
      "woodblock",
    ].includes(id)
      ? "#f7efdc"
      : id === "cyanotype"
        ? "#123c78"
        : s.background;
    c.fillRect(0, 0, width, height);
    const rgb = (v: number[], factor = 1) =>
      `rgb(${v.map((x) => Math.round(x * factor)).join(",")})`;
    const tone = (x: number, y: number) =>
      luminance(...(this.sample(x, y) as [number, number, number]));
    const stroke = (x: number, y: number, x2: number, y2: number) => {
      c.beginPath();
      c.moveTo(x, y);
      c.lineTo(x2, y2);
      c.stroke();
    };
    if (id === "braille") {
      const rows: string[] = [];
      const dots = [
        [0, 0, 1],
        [0, 1, 2],
        [0, 2, 4],
        [1, 0, 8],
        [1, 1, 16],
        [1, 2, 32],
        [0, 3, 64],
        [1, 3, 128],
      ];
      c.font = `${cell * 2}px "Space Mono", monospace`;
      c.textBaseline = "top";
      c.fillStyle = s.foreground;
      for (let y = 0; y < height; y += cell * 2) {
        let row = "";
        for (let x = 0; x < width; x += cell) {
          let bits = 0;
          for (const [dx, dy, bit] of dots)
            if (
              tone(x + ((dx + 0.5) * cell) / 2, y + ((dy + 0.5) * cell) / 2) >
              1 - k
            )
              bits |= bit;
          const ch = String.fromCharCode(0x2800 + bits);
          row += ch;
          c.fillStyle = s.color ? rgb(this.sample(x, y)) : s.foreground;
          c.fillText(ch, x, y);
        }
        rows.push(row);
      }
      this.text = rows.join("\n");
      return this.output;
    }
    if (["ascii", "animated-ascii", "blocks", "mixed"].includes(id)) {
      const ramp =
        id === "blocks"
          ? " ░▒▓█"
          : id === "mixed"
            ? " .·:+*ox%#@▓█"
            : id === "animated-ascii"
              ? " .:-=+*#%@"
              : " .,:;irsXA253hMHGS#9B&@";
      const ch = cell * 1.8,
        rows: string[] = [];
      c.textBaseline = "top";
      c.font = `${ch}px "Space Mono", monospace`;
      for (let y = 0; y < height; y += ch) {
        let row = "";
        for (let x = 0; x < width; x += cell) {
          const v = this.sample(x + cell / 2, y + ch / 2);
          const l = Math.min(
            1,
            luminance(...(v as [number, number, number])) * (0.5 + k),
          );
          const glyph = ramp[Math.floor(l * (ramp.length - 1))];
          row += glyph;
          c.fillStyle = s.color ? rgb(v) : s.foreground;
          c.fillText(glyph, x, y);
        }
        rows.push(row);
      }
      this.text = rows.join("\n");
      return this.output;
    }
    if (id === "dither") {
      const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
      for (let y = 0; y < height; y += cell / 2)
        for (let x = 0; x < width; x += cell / 2) {
          const l = tone(x, y),
            threshold =
              (bayer[
                (Math.floor(y / (cell / 2)) % 4) * 4 +
                  (Math.floor(x / (cell / 2)) % 4)
              ] +
                0.5) /
              16;
          c.fillStyle = l > threshold * (0.5 + k) ? s.foreground : s.background;
          c.fillRect(x, y, cell / 2 + 1, cell / 2 + 1);
        }
      return this.output;
    }
    if (id === "warhol") {
      const pairs = [
        ["#ffdd41", "#b20a7b"],
        ["#39e5c8", "#202891"],
        ["#ff876e", "#654bd4"],
        ["#b7f154", "#ef256e"],
      ];
      for (let q = 0; q < 4; q++) {
        const ox = ((q % 2) * width) / 2,
          oy = (Math.floor(q / 2) * height) / 2;
        for (let y = 0; y < height / 2; y += cell / 2)
          for (let x = 0; x < width / 2; x += cell / 2) {
            const l = tone(x * 2, y * 2);
            c.fillStyle = pairs[q][l > k ? 0 : 1];
            c.fillRect(ox + x, oy + y, cell / 2 + 1, cell / 2 + 1);
          }
      }
      return this.output;
    }
    if (id === "mezzotint" || id === "stippling") {
      const step = cell * 0.6,
        count = id === "mezzotint" ? 5 : 3;
      c.fillStyle = "#23212c";
      c.beginPath();
      for (let y = 0; y < height; y += step)
        for (let x = 0; x < width; x += step) {
          const dark = 1 - tone(x + step / 2, y + step / 2);
          for (let j = 0; j < count; j++)
            if (noise(x + j * 13, y, s.seed) < dark) {
              const cx = x + noise(x, y + j, s.seed) * step,
                cy = y + noise(y, x + j, s.seed) * step,
                r = Math.max(0.35, step * (id === "mezzotint" ? 0.13 : 0.18));
              c.moveTo(cx + r, cy);
              c.arc(cx, cy, r, 0, Math.PI * 2);
            }
        }
      c.fill();
      return this.output;
    }
    if (id === "cmyk") {
      c.globalCompositeOperation = "multiply";
      ["#00bad5", "#e82c89", "#ffe32d", "#222222"].forEach((col, i) => {
        c.fillStyle = col;
        c.beginPath();
        for (let y = 0; y < height; y += cell)
          for (let x = 0; x < width; x += cell) {
            const v = this.sample(x + cell / 2, y + cell / 2),
              coverage =
                i === 3
                  ? (1 - luminance(...(v as [number, number, number]))) * 0.5
                  : 1 - v[i] / 255;
            const cx = x + cell * (0.3 + (i % 2) * 0.3),
              cy = y + cell * (0.3 + Math.floor(i / 2) * 0.3),
              r = cell * 0.38 * Math.sqrt(coverage);
            c.moveTo(cx + r, cy);
            c.arc(cx, cy, r, 0, Math.PI * 2);
          }
        c.fill();
      });
      c.globalCompositeOperation = "source-over";
      return this.output;
    }
    if (id === "risograph") {
      c.globalCompositeOperation = "multiply";
      c.globalAlpha = 0.75;
      for (const [index, color] of [
        "#2146ae",
        "#f05a70",
        "#efad36",
      ].entries()) {
        c.fillStyle = color;
        c.beginPath();
        for (let y = 0; y < height; y += cell)
          for (let x = 0; x < width; x += cell) {
            const l = tone(x + cell / 2, y + cell / 2);
            if ((index === 0 && l >= 0.5) || (index === 1 && l < 0.5)) continue;
            const cx = x + cell * (index === 2 ? 0.3 : 0.5) + k * cell * 0.2,
              cy = y + cell * (index === 2 ? 0.4 : 0.5),
              r =
                cell *
                (index === 2 ? 0.3 * l : 0.48 * Math.sqrt(1 - l) + 0.1) *
                (0.8 + noise(x, y, s.seed) * 0.25);
            c.moveTo(cx + r, cy);
            c.arc(cx, cy, r, 0, Math.PI * 2);
          }
        c.fill();
      }
      c.globalAlpha = 1;
      c.globalCompositeOperation = "source-over";
      return this.output;
    }
    if (id === "crystallize") {
      const step = cell * 2,
        sites: { x: number; y: number; v: number[] }[] = [];
      for (let y = -step; y < height + step; y += step)
        for (let x = -step; x < width + step; x += step) {
          const sx = x + noise(x, y, s.seed) * step,
            sy = y + noise(y, x, s.seed + 1) * step;
          sites.push({ x: sx, y: sy, v: this.sample(sx, sy) });
        }
      // Clip a cell against nearby sites to build true planar Voronoi polygons.
      for (const site of sites) {
        let poly = [
          [0, 0],
          [width, 0],
          [width, height],
          [0, height],
        ];
        for (const other of sites) {
          if (
            site === other ||
            Math.abs(site.x - other.x) > step * 3 ||
            Math.abs(site.y - other.y) > step * 3
          )
            continue;
          const nx = other.x - site.x,
            ny = other.y - site.y,
            b = (other.x ** 2 + other.y ** 2 - site.x ** 2 - site.y ** 2) / 2;
          const next: number[][] = [];
          for (let i = 0; i < poly.length; i++) {
            const a = poly[i],
              z = poly[(i + 1) % poly.length],
              da = a[0] * nx + a[1] * ny - b,
              dz = z[0] * nx + z[1] * ny - b;
            if (da <= 0) next.push(a);
            if (da <= 0 !== dz <= 0) {
              const t = da / (da - dz);
              next.push([a[0] + (z[0] - a[0]) * t, a[1] + (z[1] - a[1]) * t]);
            }
          }
          poly = next;
          if (!poly.length) break;
        }
        if (poly.length) {
          polygon(c, poly);
          c.fillStyle = rgb(site.v);
          c.fill();
          c.strokeStyle = "rgba(255,255,255,.18)";
          c.stroke();
        }
      }
      return this.output;
    }
    if (id === "flow") {
      c.strokeStyle = s.foreground;
      c.lineWidth = Math.max(0.6, cell * 0.12);
      for (let y = 0; y < height; y += cell * 1.5)
        for (let x = 0; x < width; x += cell * 1.5) {
          let xx = x + noise(x, y, s.seed) * cell,
            yy = y;
          const v = this.sample(xx, yy);
          c.strokeStyle = s.color ? rgb(v) : s.foreground;
          c.globalAlpha = 0.2 + tone(xx, yy) * 0.8;
          c.beginPath();
          c.moveTo(xx, yy);
          for (let j = 0; j < 18; j++) {
            const gx = tone(xx + 2, yy) - tone(xx - 2, yy),
              gy = tone(xx, yy + 2) - tone(xx, yy - 2);
            const a =
              Math.atan2(gy, gx) +
              Math.PI / 2 +
              Math.sin(time * 0.3 + xx / 100) * 0.2 * k;
            xx += Math.cos(a) * cell * 0.4;
            yy += Math.sin(a) * cell * 0.4;
            c.lineTo(xx, yy);
          }
          c.stroke();
        }
      c.globalAlpha = 1;
      return this.output;
    }
    if (id === "topography") {
      c.strokeStyle = s.foreground;
      c.lineWidth = Math.max(0.7, cell * 0.1);
      for (let level = 0.1; level < 1; level += 0.08 + 0.05 * (1 - k))
        for (let y = 0; y < height - cell; y += cell / 2)
          for (let x = 0; x < width - cell; x += cell / 2) {
            const step = cell / 2,
              pts = [
                [x, y],
                [x + step, y],
                [x + step, y + step],
                [x, y + step],
              ],
              v = pts.map(([a, b]) => tone(a, b)),
              cross: number[][] = [];
            for (let i = 0; i < 4; i++) {
              const j = (i + 1) % 4;
              if (v[i] < level !== v[j] < level) {
                const t = (level - v[i]) / (v[j] - v[i]);
                cross.push([
                  pts[i][0] + (pts[j][0] - pts[i][0]) * t,
                  pts[i][1] + (pts[j][1] - pts[i][1]) * t,
                ]);
              }
            }
            for (let i = 0; i + 1 < cross.length; i += 2)
              stroke(
                ...(cross[i] as [number, number]),
                ...(cross[i + 1] as [number, number]),
              );
          }
      return this.output;
    }
    const step = id === "stippling" || id === "mezzotint" ? cell * 0.45 : cell;
    for (let y = 0; y < height; y += step)
      for (let x = 0; x < width; x += step) {
        const v = this.sample(x + step / 2, y + step / 2),
          l = luminance(...(v as [number, number, number])),
          dark = 1 - l,
          n = noise(x / step, y / step, s.seed),
          radius = step * 0.48 * Math.sqrt(l) * (0.5 + k),
          ink = step * 0.48 * Math.sqrt(dark) * (0.5 + k);
        c.fillStyle = s.color ? rgb(v) : s.foreground;
        c.strokeStyle = c.fillStyle;
        c.lineWidth = Math.max(0.6, step * 0.1);
        if (id === "mosaic") {
          c.fillRect(x + 1, y + 1, step - 2, step - 2);
        } else if (id === "lego") {
          c.fillRect(x, y, step - 1, step - 1);
          circle(c, x + step / 2, y + step / 2, step * 0.28);
          c.fillStyle = rgb(v, 0.7);
          c.fill();
          circle(c, x + step * 0.47, y + step * 0.43, step * 0.22);
          c.fillStyle = rgb(v, 1.2);
          c.fill();
        } else if (id === "voxel" || id === "iso") {
          const h = id === "iso" ? l * step * 5 * k : step * 0.65;
          polygon(c, [
            [x, y - h],
            [x + step * 0.5, y - h - step * 0.3],
            [x + step, y - h],
            [x + step * 0.5, y - h + step * 0.3],
          ]);
          c.fillStyle = rgb(v, 1.15);
          c.fill();
          polygon(c, [
            [x, y - h],
            [x + step * 0.5, y - h + step * 0.3],
            [x + step * 0.5, y + step * 0.4],
            [x, y],
          ]);
          c.fillStyle = rgb(v, 0.6);
          c.fill();
          polygon(c, [
            [x + step * 0.5, y - h + step * 0.3],
            [x + step, y - h],
            [x + step, y],
            [x + step * 0.5, y + step * 0.4],
          ]);
          c.fillStyle = rgb(v, 0.85);
          c.fill();
        } else if (id === "hex") {
          const cx = x + ((Math.round(y / step) % 2) * step) / 2;
          polygon(
            c,
            Array.from({ length: 6 }, (_, i) => [
              cx + step * 0.55 * Math.cos((i * Math.PI) / 3),
              y + step * 0.55 * Math.sin((i * Math.PI) / 3),
            ]),
          );
          c.fill();
          c.strokeStyle = s.background;
          c.stroke();
        } else if (id === "led") {
          circle(c, x + step / 2, y + step / 2, step * 0.32);
          c.fill();
          circle(c, x + step * 0.44, y + step * 0.42, step * 0.08);
          c.fillStyle = "#ffffff88";
          c.fill();
        } else if (id === "dots") {
          circle(c, x + step / 2, y + step / 2, radius);
          c.fill();
        } else if (id === "halftone") {
          c.fillStyle = s.color ? rgb(v, 0.4) : "#1c2430";
          circle(c, x + step / 2, y + step / 2, ink);
          c.fill();
        } else if (id === "cmyk") {
          c.globalCompositeOperation = "multiply";
          const values = [
            1 - v[0] / 255,
            1 - v[1] / 255,
            1 - v[2] / 255,
            dark * 0.5,
          ];
          ["#00bad5", "#e82c89", "#ffe32d", "#222222"].forEach((col, i) => {
            c.fillStyle = col;
            circle(
              c,
              x + step * (0.3 + (i % 2) * 0.3),
              y + step * (0.3 + Math.floor(i / 2) * 0.3),
              step * 0.38 * Math.sqrt(values[i]),
            );
            c.fill();
          });
          c.globalCompositeOperation = "source-over";
        } else if (id === "comic") {
          const gx =
            Math.abs(tone(x + step, y) - tone(x - step, y)) +
            Math.abs(tone(x, y + step) - tone(x, y - step));
          c.fillStyle =
            gx > 0.25 ? "#161222" : rgb(v.map((t) => Math.round(t / 64) * 64));
          c.fillRect(x, y, step + 1, step + 1);
          if (l < 0.6) {
            c.fillStyle = "#161222";
            circle(c, x + step * 0.5, y + step * 0.5, step * 0.13);
            c.fill();
          }
        } else if (id === "crosshatch") {
          c.strokeStyle = "#282124";
          if (dark > 0.15) stroke(x, y, x + step, y + step);
          if (dark > 0.4) stroke(x + step, y, x, y + step);
          if (dark > 0.7) stroke(x + step / 2, y, x + step / 2, y + step);
        } else if (id === "cyanotype") {
          const e =
            Math.abs(tone(x + step, y) - l) + Math.abs(tone(x, y + step) - l);
          c.strokeStyle = `rgba(235,247,255,${Math.min(1, e * 3 + l * 0.3)})`;
          stroke(x, y + step / 2, x + step, y + step / 2);
        } else if (id === "engraving" || id === "woodblock") {
          const gx = tone(x + step, y) - tone(x - step, y),
            gy = tone(x, y + step) - tone(x, y - step),
            a = Math.atan2(gy, gx) + Math.PI / 2;
          if (id === "woodblock") {
            c.fillStyle = rgb(v.map((t) => Math.round(t / 85) * 85));
            c.fillRect(x, y, step + 1, step + 1);
          }
          c.strokeStyle = id === "woodblock" ? "#251c1b" : "#37312b";
          c.lineWidth = Math.max(0.5, step * dark * 0.3);
          c.beginPath();
          c.moveTo(x, y);
          c.quadraticCurveTo(
            x + step * Math.cos(a),
            y + step * Math.sin(a),
            x + step,
            y + Math.sin(l * 15) * step * 0.3,
          );
          c.stroke();
        } else if (id === "mezzotint" || id === "stippling") {
          const count = id === "mezzotint" ? 5 : 3;
          for (let j = 0; j < count; j++) {
            const nn = noise(x + j * 13, y, s.seed);
            if (nn < dark) {
              c.fillStyle = "#23212c";
              circle(
                c,
                x + noise(x, y + j, s.seed) * step,
                y + noise(y, x + j, s.seed) * step,
                Math.max(0.35, step * (id === "mezzotint" ? 0.13 : 0.18)),
              );
              c.fill();
            }
          }
        } else if (id === "pointillize") {
          circle(
            c,
            x + n * step,
            y + noise(y, x, s.seed) * step,
            step * (0.3 + k * 0.25),
          );
          c.fill();
        } else if (id === "risograph") {
          c.globalCompositeOperation = "multiply";
          c.globalAlpha = 0.5 + n * 0.4;
          c.fillStyle = l < 0.5 ? "#2146ae" : "#f05a70";
          circle(c, x + step * 0.5 + k * 2, y + step * 0.5, ink + step * 0.1);
          c.fill();
          c.fillStyle = "#efad36";
          circle(c, x + step * 0.3, y + step * 0.4, step * 0.3 * l);
          c.fill();
          c.globalAlpha = 1;
          c.globalCompositeOperation = "source-over";
        } else if (id === "sketch") {
          const gx = tone(x + step, y) - tone(x - step, y),
            gy = tone(x, y + step) - tone(x, y - step),
            a = Math.atan2(gy, gx) + Math.PI / 2;
          c.strokeStyle = `rgba(50,43,48,${Math.min(0.9, dark * 0.5 + Math.hypot(gx, gy) * 2)})`;
          stroke(
            x,
            y,
            x + Math.cos(a) * step * 1.5,
            y + Math.sin(a) * step * 1.5,
          );
        } else if (
          id === "cross" ||
          id === "diagonal" ||
          id === "diamond" ||
          id === "lines"
        ) {
          const rr = radius;
          c.lineWidth = Math.max(0.7, step * 0.09);
          if (id === "cross") {
            stroke(
              x + step / 2 - rr,
              y + step / 2,
              x + step / 2 + rr,
              y + step / 2,
            );
            stroke(
              x + step / 2,
              y + step / 2 - rr,
              x + step / 2,
              y + step / 2 + rr,
            );
          }
          if (id === "diagonal") stroke(x, y + rr * 2, x + rr * 2, y);
          if (id === "lines")
            stroke(
              x + step / 2,
              y + step / 2 - rr,
              x + step / 2,
              y + step / 2 + rr,
            );
          if (id === "diamond") {
            polygon(c, [
              [x + step / 2, y + step / 2 - rr],
              [x + step / 2 + rr, y + step / 2],
              [x + step / 2, y + step / 2 + rr],
              [x + step / 2 - rr, y + step / 2],
            ]);
            c.fill();
          }
        } else if (id === "forms") {
          if (n < 0.33) c.fillRect(x, y, step * l, step * l);
          else if (n < 0.66) {
            circle(c, x + step / 2, y + step / 2, radius);
            c.fill();
          } else {
            polygon(c, [
              [x, y + step],
              [x + step / 2, y + step * (1 - l)],
              [x + step, y + step],
            ]);
            c.fill();
          }
        } else if (id === "lattice") {
          const warp = Math.sin(l * 6) * step * k;
          c.globalAlpha = 0.3 + l * 0.7;
          stroke(x, y + warp, x + step, y + step - warp);
          stroke(x + step, y + warp, x, y + step - warp);
          c.globalAlpha = 1;
        } else if (id === "lowpoly") {
          polygon(c, [
            [x, y],
            [x + step, y],
            [x, y + step],
          ]);
          c.fill();
          polygon(c, [
            [x + step, y],
            [x + step, y + step],
            [x, y + step],
          ]);
          c.fillStyle = s.color
            ? rgb(this.sample(x + step * 0.8, y + step * 0.8))
            : s.foreground;
          c.fill();
        } else if (id === "neon") {
          c.strokeStyle = s.color ? rgb(v) : s.foreground;
          const lift = l * step * k;
          stroke(x, y - lift, x + step, y - tone(x + step, y) * step * k);
          stroke(x, y - lift, x, y + step - tone(x, y + step) * step * k);
        } else if (id === "schematic") {
          if (l > 0.25) {
            circle(c, x + step / 2, y + step / 2, Math.max(1, radius * 0.35));
            c.stroke();
            if (tone(x + step, y) > 0.25)
              stroke(x + step / 2, y + step / 2, x + step * 1.5, y + step / 2);
            if (tone(x, y + step) > 0.25)
              stroke(x + step / 2, y + step / 2, x + step / 2, y + step * 1.5);
          }
        } else if (id === "specimen") {
          c.fillRect(x + step * 0.12, y + step * 0.1, step * 0.76, step * 0.55);
          c.strokeStyle = "#9c90ae";
          c.strokeRect(x + 1, y + 1, step - 2, step - 2);
          c.fillStyle = s.foreground;
          c.font = `${Math.max(3, step * 0.16)}px monospace`;
          c.fillText(
            Math.round(l * 255)
              .toString(16)
              .padStart(2, "0"),
            x + step * 0.15,
            y + step * 0.88,
          );
        } else if (id === "truchet") {
          c.lineWidth = Math.max(1, l * step * 0.4);
          c.save();
          c.beginPath();
          c.rect(x, y, step, step);
          c.clip();
          c.beginPath();
          if (n > 0.5) {
            c.arc(x, y, step / 2, 0, Math.PI / 2);
            c.moveTo(x + step / 2, y + step);
            c.arc(x + step, y + step, step / 2, Math.PI, Math.PI * 1.5);
          } else {
            c.arc(x + step, y, step / 2, Math.PI / 2, Math.PI);
            c.moveTo(x + step / 2, y + step);
            c.arc(x, y + step, step / 2, Math.PI * 1.5, Math.PI * 2);
          }
          c.stroke();
          c.restore();
        } else throw new Error(`Unknown renderer: ${id}`);
      }
    if (id === "neon" || id === "led") {
      c.save();
      c.globalCompositeOperation = "screen";
      c.filter = `blur(${Math.max(0.5, cell * k * 0.3)}px)`;
      c.drawImage(this.output, 0, 0);
      c.restore();
    }
    return this.output;
  }
  dispose() {
    this.gpu?.dispose();
    this.output.width = 2;
    this.source.width = 2;
  }
}
function circle(c: Ctx, x: number, y: number, r: number) {
  c.beginPath();
  c.arc(x, y, Math.max(0, r), 0, Math.PI * 2);
}
function polygon(c: Ctx, points: number[][]) {
  c.beginPath();
  points.forEach(([x, y], i) => (i ? c.lineTo(x, y) : c.moveTo(x, y)));
  c.closePath();
}
