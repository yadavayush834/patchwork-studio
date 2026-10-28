export type Family =
  | "ASCII & Text"
  | "Pixel & Blocks"
  | "Print & Paper"
  | "Geometric"
  | "Glass"
  | "Light & Color"
  | "Material"
  | "Glitch"
  | "Blur"
  | "Distort";
export interface Settings {
  amount: number;
  cell: number;
  foreground: string;
  background: string;
  color: boolean;
  seed: number;
}
export interface Style {
  id: string;
  name: string;
  family: Family;
  text: boolean;
  stage: number;
}
const groups: [Family, string[]][] = [
  [
    "ASCII & Text",
    [
      "Characters|ascii",
      "Block Characters|blocks",
      "Dots, Halftone Print|dots",
      "Animated ASCII|animated-ascii",
      "Mixed Glyphs|mixed",
      "ASCII Studio|ascii-studio",
      "Braille|braille",
    ],
  ],
  [
    "Pixel & Blocks",
    [
      "Pixel Art|pixel",
      "Photo Mosaic|mosaic",
      "LEGO Bricks|lego",
      "Voxel Cubes|voxel",
      "Hex Mosaic|hex",
      "LED Matrix|led",
    ],
  ],
  [
    "Print & Paper",
    [
      "Dither, Retro Dithering|dither",
      "CMYK Drops|cmyk",
      "Comic|comic",
      "Crosshatch|crosshatch",
      "Cyanotype|cyanotype",
      "Engraving|engraving",
      "Halftone|halftone",
      "Mezzotint|mezzotint",
      "Pointillize|pointillize",
      "Posterize|posterize",
      "Risograph|risograph",
      "Sketch|sketch",
      "Stippling|stippling",
      "Warhol|warhol",
      "Woodblock|woodblock",
    ],
  ],
  [
    "Geometric",
    [
      "Cross Glyphs|cross",
      "Diagonal Strokes|diagonal",
      "Diamond Glyphs|diamond",
      "Lines, Vertical Strokes|lines",
      "Droste|droste",
      "Flow Field|flow",
      "Forms|forms",
      "Iso Extrude|iso",
      "Lattice|lattice",
      "Low Poly|lowpoly",
      "Neon Grid|neon",
      "Schematic|schematic",
      "Specimen|specimen",
      "Topography|topography",
      "Truchet|truchet",
    ],
  ],
  [
    "Glass",
    [
      "Fluted Glass|fluted",
      "Frosted Glass|frosted",
      "Glass Orb|orb",
      "Shatter|shatter",
      "Tinted Glass|tinted",
      "Vitrine|vitrine",
    ],
  ],
  [
    "Light & Color",
    [
      "Disco, Mirror Sphere|disco",
      "Aberration|aberration",
      "Anaglyph 3D|anaglyph",
      "Dreamdust|dreamdust",
      "Duotone|duotone",
      "Edge Glow|edgeglow",
      "Gradient Map|gradient",
      "Kaleidoscope|kaleidoscope",
      "Light Wind|lightwind",
      "Prism|prism",
      "Warpbloom|warpbloom",
    ],
  ],
  [
    "Material",
    [
      "Chrome|chrome",
      "Crystallize|crystallize",
      "Emboss|emboss",
      "Marble|marble",
      "Molten Metal|molten",
      "Oil Paint|oil",
      "Thin-Film|thinfilm",
      "Watercolor|watercolor",
      "Waves|waves",
    ],
  ],
  [
    "Glitch",
    [
      "Glitch, RGB Split & VHS|glitch",
      "Beacon|beacon",
      "CRT Screen|crt",
      "Datamosh|datamosh",
      "Digital Distortion|digital",
      "Forensics|forensics",
      "Lofi|lofi",
      "Pixel Sort|pixelsort",
      "RGB Split|rgb",
      "Scanline|scanline",
      "Thermal|thermal",
    ],
  ],
  [
    "Blur",
    [
    ],
  ],
  [
    "Distort",
    [
    ],
  ],
];
const first = new Set([
  "ascii",
  "blocks",
  "dots",
  "animated-ascii",
  "mixed",
  "ascii-studio",
  "braille",
  "pixel",
  "mosaic",
  "lego",
  "voxel",
  "hex",
  "led",
  "dither",
  "halftone",
  "posterize",
  "duotone",
  "gradient",
  "rgb",
  "scanline",
  "crt",
  "thermal",
  "gaussian",
  "ripple",
]);
const advanced = new Set(["droste", "flow", "iso", "neon", "schematic"]);
export const styles: Style[] = groups.flatMap(([family, names]) =>
  names.map((entry) => {
    const [name, id] = entry.split("|");
    return {
      id,
      name,
      family,
      text: [
        "ascii",
        "animated-ascii",
        "blocks",
        "mixed",
        "ascii-studio",
        "braille",
      ].includes(id),
      stage: first.has(id)
        ? 1
        : family === "Glass" || family === "Material" || advanced.has(id)
          ? 3
          : 2,
    };
  }),
);
export const families = groups.map(([family]) => family);
export function controls(id: string) {
  const ink = new Set([
    "ascii",
    "animated-ascii",
    "blocks",
    "mixed",
    "ascii-studio",
    "braille",
    "dots",
    "cross",
    "diagonal",
    "diamond",
    "lines",
    "forms",
    "lattice",
    "lowpoly",
    "neon",
    "schematic",
    "specimen",
    "truchet",
    "flow",
    "topography",
    "dither",
    "duotone",
    "edgeglow",
    "mosaic",
    "hex",
    "led",
  ]);
  const amount = new Set([
    "ascii",
    "animated-ascii",
    "blocks",
    "mixed",
    "ascii-studio",
    "braille",
    "dots",
    "pixel",
    "iso",
    "led",
    "halftone",
    "dither",
    "warhol",
    "flow",
    "topography",
    "lattice",
    "neon",
    "pointillize",
    "risograph",
    "forms",
  ]);
  const detailGPU = new Set([
    "fluted",
    "frosted",
    "shatter",
    "tinted",
    "vitrine",
    "datamosh",
    "digital",
    "pixelsort",
    "disco",
    "watercolor",
    "oil",
  ]);
  const gpu = new Set([
    "duotone",
    "gradient",
    "posterize",
    "thermal",
    "rgb",
    "scanline",
    "crt",
    "gaussian",
    "ripple",
    "fluted",
    "frosted",
    "orb",
    "shatter",
    "tinted",
    "vitrine",
    "aberration",
    "anaglyph",
    "dreamdust",
    "edgeglow",
    "kaleidoscope",
    "lightwind",
    "prism",
    "warpbloom",
    "chrome",
    "emboss",
    "marble",
    "molten",
    "thinfilm",
    "waves",
    "glitch",
    "beacon",
    "datamosh",
    "digital",
    "forensics",
    "lofi",
    "pixelsort",
    "motion",
    "radial",
    "tiltshift",
    "pinch",
    "polar",
    "shear",
    "smudge",
    "spherize",
    "twirl",
    "zigzag",
    "droste",
    "disco",
    "watercolor",
    "oil",
  ]);
  return {
    amount: amount.has(id) || gpu.has(id),
    cell: !gpu.has(id) || detailGPU.has(id),
    ink: ink.has(id),
    color:
      ink.has(id) &&
      !["duotone", "edgeglow", "topography", "dither"].includes(id),
    seed: [
      "crystallize",
      "flow",
      "mezzotint",
      "stippling",
      "pointillize",
      "risograph",
      "forms",
      "truchet",
      "frosted",
      "shatter",
      "tinted",
      "dreamdust",
      "disco",
      "glitch",
      "digital",
      "lofi",
      "datamosh",
      "watercolor",
    ].includes(id),
  };
}
export const defaults = (id: string): Settings => ({
  amount: 0.65,
  cell: ["braille", "stippling"].includes(id) ? 6 : 12,
  foreground: "#b5f4cb",
  background: "#15121e",
  color: ![
    "ascii",
    "animated-ascii",
    "mixed",
    "braille",
    "blocks",
    "cross",
    "lines",
    "diagonal",
    "diamond",
  ].includes(id),
  seed: 7,
});
export function noise(x: number, y: number, seed: number) {
  const n = Math.sin(x * 127.1 + y * 311.7 + seed * 74.7) * 43758.5453;
  return n - Math.floor(n);
}
export const luminance = (r: number, g: number, b: number) =>
  (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
export function dimensions(w: number, h: number, max: number) {
  const ratio = Math.min(1, max / Math.max(w, h));
  return {
    width: Math.max(2, Math.floor((w * ratio) / 2) * 2),
    height: Math.max(2, Math.floor((h * ratio) / 2) * 2),
  };
}
export function validateTrim(
  start: number,
  end: number,
  duration: number,
  gif = false,
) {
  if (
    ![start, end, duration].every(Number.isFinite) ||
    start < 0 ||
    end > duration + 0.001 ||
    end <= start ||
    end - start > (gif ? 10 : 60) + 0.001
  )
    throw new Error(`Choose a valid segment up to ${gif ? 10 : 60} seconds.`);
}
export function frameTimes(start: number, end: number, fps: number) {
  return Array.from(
    { length: Math.ceil((end - start) * fps - 1e-8) },
    (_, i) => start + i / fps,
  );
}
// GIF stores centiseconds: distribute rounding across frames rather than losing time per frame.
export function gifDelay(index: number, duration: number, fps = 12) {
  return Math.max(
    10,
    (Math.round(Math.min(duration, (index + 1) / fps) * 100) -
      Math.round((index / fps) * 100)) *
      10,
  );
}
export function parseRecipe(value: unknown, duration: number) {
  const r = value as {
    version?: unknown;
    style?: unknown;
    settings?: Settings;
    start?: number;
    end?: number;
  };
  if (
    !r ||
    r.version !== 1 ||
    !styles.some((s) => s.id === r.style) ||
    !r.settings
  )
    throw new Error("Choose a Video Lab recipe (version 1).");
  const s = r.settings;
  if (
    !Number.isFinite(s.amount) ||
    s.amount < 0 ||
    s.amount > 1 ||
    !Number.isFinite(s.cell) ||
    s.cell < 4 ||
    s.cell > 40 ||
    !Number.isInteger(s.seed) ||
    s.seed < 0 ||
    s.seed > 9999 ||
    typeof s.color !== "boolean" ||
    !/^#[0-9a-f]{6}$/i.test(s.foreground) ||
    !/^#[0-9a-f]{6}$/i.test(s.background)
  )
    throw new Error("This recipe contains invalid settings.");
  validateTrim(r.start!, r.end!, duration);
  return {
    style: r.style as string,
    settings: { ...s },
    start: r.start!,
    end: r.end!,
  };
}
