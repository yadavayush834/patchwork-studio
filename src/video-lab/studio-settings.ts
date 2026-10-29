/** Optional fields keep existing version-1 recipes compatible. */
export interface StudioSettings {
  glyphs?: "classic" | "dense" | "typewriter" | "contour";
  palette?: "original" | "studio" | "handheld" | "ember";
  exposure?: number;
  contrast?: number;
  edge?: number;
  dither?: number;
}
export const glyphSets = {
  classic: " .,:;irsXA253hMHGS#9B&@",
  dense: ' .`^",:;Il!i~+_-?][}{1)(|\\/tfjrxnuvczXYUJCLQ0OZmwqpdbkhao*#MW&8%B@$',
  typewriter: " .:-=+*#%@",
  contour: " .,:;+=ox%#@",
};
export const pixelPalettes = {
  studio: [
    "#10121c",
    "#2c1e31",
    "#6b2643",
    "#ac2847",
    "#ec4b4b",
    "#ff9a5c",
    "#ffda8a",
    "#fff4cf",
    "#b4d645",
    "#62a64f",
    "#287450",
    "#193c3e",
    "#1b2447",
    "#254f80",
    "#3978a8",
    "#56b9cf",
    "#b1e5e5",
    "#ffffff",
    "#b8b5c0",
    "#817c91",
    "#544c65",
    "#3d314a",
    "#71443b",
    "#b46f50",
    "#e6aa79",
    "#f5cfac",
    "#6d3d85",
    "#a25ba5",
    "#d78ec0",
    "#f4c5dc",
    "#7c8cc4",
    "#b1b8e2",
  ],
  handheld: ["#102b24", "#365c3d", "#8aab61", "#d9e6a2"],
  ember: [
    "#141322",
    "#302448",
    "#554363",
    "#845a70",
    "#b47877",
    "#df9b83",
    "#f2c6a0",
    "#fff0cd",
  ],
};
export const isStudio = (id: string) => id === "ascii-studio" || id === "pixel";
export function validateStudioSettings(s: StudioSettings) {
  if (s.glyphs !== undefined && !Object.hasOwn(glyphSets, s.glyphs))
    throw new Error("Invalid character set.");
  if (
    s.palette !== undefined &&
    s.palette !== "original" &&
    !Object.hasOwn(pixelPalettes, s.palette)
  )
    throw new Error("Invalid pixel palette.");
  for (const [key, min, max] of [
    ["exposure", -2, 2],
    ["contrast", 0.5, 2],
    ["edge", 0, 1],
    ["dither", 0, 1],
  ] as const) {
    const v = s[key];
    if (
      v !== undefined &&
      (typeof v !== "number" || !Number.isFinite(v) || v < min || v > max)
    )
      throw new Error(`Invalid ${key}.`);
  }
}
export function grade(value: number, exposure = 0, contrast = 1) {
  return Math.max(
    0,
    Math.min(1, (value * 2 ** exposure - 0.5) * contrast + 0.5),
  );
}
export const bayer = [0, 8, 2, 10, 12, 4, 14, 6, 3, 11, 1, 9, 15, 7, 13, 5];
export function orderedOffset(x: number, y: number, strength: number) {
  return ((bayer[(y % 4) * 4 + (x % 4)] + 0.5) / 16 - 0.5) * strength;
}
export function gridSize(
  width: number,
  height: number,
  cell: number,
  ascii: boolean,
) {
  const columns = Math.max(1, Math.min(width, Math.round(720 / cell)));
  const rows = Math.max(
    1,
    Math.min(
      height,
      Math.round((columns * height) / width / (ascii ? 1.65 : 1)),
    ),
  );
  return { columns, rows };
}
export const studioPresets = {
  "ascii-studio": [
    {
      name: "Silver screen",
      description: "Fine monochrome characters with clear midtones.",
      settings: {
        glyphs: "dense",
        cell: 4,
        color: false,
        foreground: "#e8edf5",
        background: "#080c14",
        exposure: 0.15,
        contrast: 1.15,
        edge: 0.25,
      },
    },
    {
      name: "True color",
      description: "Source colors, fine type, and a dark backdrop.",
      settings: {
        glyphs: "classic",
        cell: 5,
        color: true,
        background: "#080c14",
        exposure: 0.25,
        contrast: 1.1,
        edge: 0.2,
      },
    },
    {
      name: "Terminal",
      description: "Phosphor green, bold text, deep shadows.",
      settings: {
        glyphs: "typewriter",
        cell: 6,
        color: false,
        foreground: "#a6ffbf",
        background: "#07140e",
        exposure: 0.1,
        contrast: 1.3,
        edge: 0.3,
      },
    },
    {
      name: "Contour",
      description: "Directional characters trace strong silhouettes.",
      settings: {
        glyphs: "contour",
        cell: 5,
        color: false,
        foreground: "#1c2340",
        background: "#f2ead8",
        exposure: 0,
        contrast: 1.15,
        edge: 0.7,
      },
    },
  ],
  pixel: [
    {
      name: "Studio 32",
      description: "A coordinated 32-color palette with gentle dithering.",
      settings: {
        palette: "studio",
        cell: 5,
        exposure: 0,
        contrast: 1.1,
        edge: 0.3,
        dither: 0.25,
      },
    },
    {
      name: "Source color",
      description: "Keep the footage’s colors with crisp square pixels.",
      settings: {
        palette: "original",
        cell: 4,
        exposure: 0,
        contrast: 1,
        edge: 0.2,
        dither: 0,
      },
    },
    {
      name: "Handheld",
      description: "Four greens and a fixed retro dither pattern.",
      settings: {
        palette: "handheld",
        cell: 6,
        exposure: 0,
        contrast: 1.05,
        edge: 0.25,
        dither: 0.7,
      },
    },
    {
      name: "Ember",
      description: "Eight warm cinematic tones.",
      settings: {
        palette: "ember",
        cell: 5,
        exposure: 0.1,
        contrast: 1.05,
        edge: 0.25,
        dither: 0.4,
      },
    },
  ],
} satisfies Record<
  string,
  {
    name: string;
    description: string;
    settings: StudioSettings & {
      cell: number;
      color?: boolean;
      foreground?: string;
      background?: string;
    };
  }[]
>;
