/** Original Patchwork ASCII sculptures. Rasterized glyphs, rather than flat sprites. */
export type SceneKind = "sharks" | "jellies" | "galaxy" | "terrain";
export const fract = (n: number) => n - Math.floor(n);
export const hash = (n: number) =>
  fract(Math.sin(n * 127.1 + 311.7) * 43758.5453);
export const clamp = (n: number, a = 0, b = 1) => Math.max(a, Math.min(b, n));
export const ramp = " .,:;irsXA253hMHGS#9B&@";
export interface Cell {
  x: number;
  y: number;
  light: number;
  glyph?: string;
  hue?: number;
}

export function jellyCells(
  t: number,
  cols: number,
  rows: number,
  density: number,
): Cell[] {
  const out: Cell[] = [];
  const count = Math.min(5, Math.round(3 + density * 2));
  const aspect = 0.57;
  for (let j = 0; j < count; j++) {
    const anchors = [
      [0.76, 0.42, 1.04],
      [0.19, 0.52, 0.68],
      [0.48, 0.76, 0.8],
      [0.93, 0.78, 0.45],
      [0.09, 0.15, 0.42],
    ];
    const [ax, ay, depth] = anchors[j % anchors.length];
    const radius =
      (10 + hash(j + 8) * 6) * depth * Math.min(cols / 150, rows / 48);
    const cx = cols * ax + Math.sin(t * 0.15 + j * 2) * cols * 0.025;
    const cy = rows * ay + Math.cos(t * 0.24 + j * 3) * rows * 0.035;
    const pulse = 1 + Math.sin(t * 1.2 + j * 1.7) * 0.075;
    const rx = radius * pulse,
      ry = ((radius * 0.52) / aspect) * (2 - pulse);
    for (let y = Math.floor(cy - ry - 2); y <= cy + 2; y++)
      for (let x = Math.floor(cx - rx - 2); x <= cx + rx + 2; x++) {
        const nx = (x - cx) / rx,
          ny = (y - cy) / ry;
        if (ny > 0 || nx * nx + ny * ny > 1) continue;
        const z = Math.sqrt(Math.max(0, 1 - nx * nx - ny * ny));
        const rim = Math.exp(
          -Math.pow((Math.sqrt(nx * nx + ny * ny) - 0.96) * 15, 2),
        );
        const ribs = Math.pow(
          0.5 + 0.5 * Math.cos(Math.atan2(nx, ny) * 9 + t * 0.18),
          6,
        );
        const lobes = Math.exp(-Math.pow((ny + 0.22) * 9, 2)) * 0.25;
        out.push({
          x,
          y,
          light:
            clamp(0.22 + z * 0.4 + rim * 0.6 + ribs * 0.18 + lobes) * depth,
          hue: j % 2,
        });
      }
    // A folded, luminous rim, oral arms, and eight streaming tentacles.
    for (let k = 0; k < 9; k++) {
      const base = (k / 8 - 0.5) * 1.8;
      const len = (radius * (1.2 + hash(j * 20 + k) * 1.8)) / aspect;
      for (let n = 0; n < len; n++) {
        const p = n / len;
        const x = Math.round(
          cx +
            base * rx +
            Math.sin(t * 0.65 + n * 0.14 + j + k * 0.5) * (1.4 + p * rx * 0.22),
        );
        const y = Math.round(cy + n);
        out.push({
          x,
          y,
          light: (1 - p) * (0.35 + depth * 0.3),
          glyph: p > 0.75 ? "." : k % 2 ? "|" : ":",
          hue: j % 2,
        });
      }
    }
    for (let x = -rx; x <= rx; x++)
      out.push({
        x: Math.round(cx + x),
        y: Math.round(cy + Math.sin((x / rx) * Math.PI * 3 + t) * 0.7),
        light: 0.65 * depth,
        glyph: "~",
        hue: j % 2,
      });
  }
  return out;
}

export function galaxyCells(
  t: number,
  cols: number,
  rows: number,
  density: number,
): Cell[] {
  const out: Cell[] = [];
  const count = Math.round(2000 * density);
  const r = Math.min(cols * 0.4, rows * 0.78);
  const a = t * 0.045;
  for (let i = 0; i < count; i++) {
    const u = hash(i + 1),
      rad = Math.pow(u, 0.65) * r;
    const arm = i % 4;
    const theta =
      (arm * Math.PI) / 2 +
      rad * 0.115 +
      a +
      (hash(i + 44) - 0.5) * (0.18 + u * 0.8);
    const x3 = Math.cos(theta) * rad,
      z3 = Math.sin(theta) * rad,
      y3 = (hash(i + 100) - 0.5) * (1 - u) * r * 0.15;
    const yaw = 0.3 + Math.sin(t * 0.06) * 0.1;
    const px = x3 * Math.cos(yaw) - z3 * Math.sin(yaw),
      pz = x3 * Math.sin(yaw) + z3 * Math.cos(yaw);
    const x = Math.round(cols * 0.59 + px),
      y = Math.round(rows * 0.49 + pz * 0.3 + y3);
    const light = clamp(0.18 + Math.pow(1 - u, 3) * 0.8 + hash(i + 92) * 0.3);
    out.push({
      x,
      y,
      light,
      glyph:
        light > 0.75
          ? ["+", "*", ":", "x"][Math.floor(hash(i + 208) * 4)]
          : undefined,
      hue: u < 0.24 ? 1 : 0,
    });
  }
  // A slowly precessing orbit crossing the galactic disc.
  for (let i = 0; i < 360; i++) {
    const p = (i / 360) * Math.PI * 2;
    const x = Math.cos(p) * r * 1.08,
      y = Math.sin(p) * r * 0.34;
    out.push({
      x: Math.round(cols * 0.59 + x * Math.cos(-0.45) - y * Math.sin(-0.45)),
      y: Math.round(
        rows * 0.49 + x * Math.sin(-0.45) * 0.5 + y * Math.cos(-0.45),
      ),
      light: 0.2,
      glyph: ".",
    });
  }
  return out;
}

export function terrainCells(
  t: number,
  cols: number,
  rows: number,
  density: number,
): Cell[] {
  const out: Cell[] = [];
  const h = (x: number, z: number) =>
    Math.sin(x * 0.075 + t * 0.23) * 2.8 +
    Math.cos(z * 0.12 + t * 0.18) * 2 +
    Math.sin(x * 0.045 + z * 0.08 + t * 0.11) * 4.5 +
    Math.cos(x * 0.13 - z * 0.07 - t * 0.24) * 1.2;
  const center = cols * 0.52;
  const horizon = rows * 0.26;
  const yaw = Math.sin(t * 0.08) * 0.08;
  // Far rows first; perspective compresses thousands of cells into a sculpted horizon.
  for (let zi = 85; zi >= 0; zi -= density < 0.8 ? 2 : 1) {
    const z = zi + 5,
      scale = 34 / (z + 26);
    const spacing = density > 1.2 ? 0.8 : 1;
    for (let xi = -110; xi <= 110; xi += spacing) {
      const x = xi * Math.cos(yaw) - z * Math.sin(yaw),
        y = h(x, z);
      const sx = center + x * scale * (cols / 145),
        sy = horizon + rows * 0.7 * (1 - zi / 100) - y * scale * 0.55;
      const nx = h(x + 0.5, z) - h(x - 0.5, z);
      const nz = h(x, z + 0.5) - h(x, z - 0.5);
      const light = clamp((0.5 - nx * 0.6 + nz * 0.22) * (1 - zi / 140) + 0.12);
      if (sy < rows)
        out.push({
          x: Math.round(sx),
          y: Math.round(sy),
          light,
          hue: zi < 30 ? 1 : 0,
        });
    }
  }
  return out;
}
