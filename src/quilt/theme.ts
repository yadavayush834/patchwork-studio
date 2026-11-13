/** Fonts, colours and style kits: the brand side of a Quilt site. */
import type { ColorRef, Gradient, Paint, Palette, Theme, Token } from "./model";
import { TOKENS, isGradient } from "./model";

export interface FontInfo {
  id: string;
  family: string;
  /** Public path of the font file (served by the studio, copied into exports). */
  file: string;
  italic?: string;
  license: string;
  kind: "serif" | "sans" | "mono" | "hand" | "pixel" | "display";
  /** Fallback stack. */
  fallback: string;
  /** Variable font weight range, or a single weight. */
  weights: [number, number];
}

export const FONTS: FontInfo[] = [
  { id: "instrument-serif", family: "Instrument Serif", file: "/scenes/fonts/InstrumentSerif.woff2", italic: "/scenes/fonts/InstrumentSerif-Italic.woff2", license: "/scenes/licenses/InstrumentSerif-OFL.txt", kind: "serif", fallback: "Georgia, serif", weights: [400, 400] },
  { id: "instrument-sans", family: "Instrument Sans", file: "/scenes/fonts/InstrumentSans.woff2", license: "/scenes/licenses/InstrumentSans-OFL.txt", kind: "sans", fallback: "system-ui, sans-serif", weights: [400, 700] },
  { id: "playfair", family: "Playfair Display", file: "/fonts/PlayfairDisplay.ttf", license: "/licenses/PlayfairDisplay-OFL.txt", kind: "serif", fallback: "Georgia, serif", weights: [400, 900] },
  { id: "baskerville", family: "Libre Baskerville", file: "/fonts/LibreBaskerville.ttf", license: "/licenses/LibreBaskerville-OFL.txt", kind: "serif", fallback: "Georgia, serif", weights: [400, 700] },
  { id: "dm-sans", family: "DM Sans", file: "/fonts/DMSans.ttf", license: "/licenses/DMSans-OFL.txt", kind: "sans", fallback: "system-ui, sans-serif", weights: [100, 1000] },
  { id: "outfit", family: "Outfit", file: "/fonts/Outfit.ttf", license: "/licenses/Outfit-OFL.txt", kind: "sans", fallback: "system-ui, sans-serif", weights: [100, 900] },
  { id: "space-grotesk", family: "Space Grotesk", file: "/fonts/SpaceGrotesk.ttf", license: "/licenses/SpaceGrotesk-OFL.txt", kind: "display", fallback: "system-ui, sans-serif", weights: [300, 700] },
  { id: "space-mono", family: "Space Mono", file: "/fonts/SpaceMono.ttf", license: "/licenses/SpaceMono-OFL.txt", kind: "mono", fallback: "ui-monospace, monospace", weights: [400, 400] },
  { id: "jetbrains", family: "JetBrains Mono", file: "/scenes/fonts/JetBrainsMono.woff2", license: "/scenes/licenses/JetBrainsMono-OFL.txt", kind: "mono", fallback: "ui-monospace, monospace", weights: [100, 800] },
  { id: "caveat", family: "Caveat", file: "/fonts/Caveat.ttf", license: "/licenses/Caveat-OFL.txt", kind: "hand", fallback: "cursive", weights: [400, 700] },
  { id: "pixelify", family: "Pixelify Sans", file: "/scenes/fonts/PixelifySans.woff2", license: "/scenes/licenses/PixelifySans-OFL.txt", kind: "pixel", fallback: "ui-monospace, monospace", weights: [400, 700] },
  { id: "silkscreen", family: "Silkscreen", file: "/fonts/Silkscreen.ttf", license: "/licenses/Silkscreen-OFL.txt", kind: "pixel", fallback: "ui-monospace, monospace", weights: [400, 400] },
];
export const font = (id: string) => FONTS.find((f) => f.id === id) ?? FONTS[1];
export const isFont = (id: unknown) => FONTS.some((f) => f.id === id);

/** CSS font-family for a text style's font: the kit's heading/body, or a named font. */
export function fontStack(id: string, theme: Theme) {
  const f = id === "heading" ? font(theme.fonts.heading) : id === "body" ? font(theme.fonts.body) : font(id);
  return `"${f.family}", ${f.fallback}`;
}
/** Every font a theme + document actually uses. */
export function fontFaceCss(ids: Iterable<string>, base = "") {
  const seen = new Set<string>();
  let css = "";
  for (const id of ids) {
    if (seen.has(id) || !isFont(id)) continue;
    seen.add(id);
    const f = font(id);
    const w = f.weights[0] === f.weights[1] ? `${f.weights[0]}` : `${f.weights[0]} ${f.weights[1]}`;
    css += `@font-face{font-family:"${f.family}";src:url("${base}${f.file.replace(/^\//, "")}");font-weight:${w};font-display:swap}`;
    if (f.italic) css += `@font-face{font-family:"${f.family}";src:url("${base}${f.italic.replace(/^\//, "")}");font-style:italic;font-display:swap}`;
  }
  return css;
}

export interface StyleKit {
  id: string;
  name: string;
  mood: string;
  palette: Palette;
  fonts: { heading: string; body: string };
  radius: number;
  shadow: number;
  headingCase?: "normal" | "upper";
  dark?: boolean;
}

/** Curated looks. "Shuffle style" walks through these; every template starts from one. */
export const KITS: StyleKit[] = [
  { id: "linen", name: "Linen", mood: "Warm, literary, quiet", palette: { bg: "#f6f1e7", surface: "#fffaf1", ink: "#2b2620", muted: "#7a6f61", accent: "#c8553d", accent2: "#e9b44c", accent3: "#5b8c6b" }, fonts: { heading: "instrument-serif", body: "instrument-sans" }, radius: 14, shadow: 1 },
  { id: "midnight-garden", name: "Midnight Garden", mood: "Dark, lush, glowing", palette: { bg: "#0f1412", surface: "#18211d", ink: "#eef2e8", muted: "#9aa89d", accent: "#b6f36b", accent2: "#f0a6ca", accent3: "#7cc6fe" }, fonts: { heading: "playfair", body: "dm-sans" }, radius: 16, shadow: 2, dark: true },
  { id: "riso", name: "Riso Print", mood: "Loud, inky, graphic", palette: { bg: "#fff6e9", surface: "#ffffff", ink: "#1f2a6b", muted: "#5d6699", accent: "#ff5b3a", accent2: "#2f6bff", accent3: "#ffcc33" }, fonts: { heading: "space-grotesk", body: "space-grotesk" }, radius: 0, shadow: 0, headingCase: "upper" },
  { id: "pixel-daydream", name: "Pixel Daydream", mood: "Playful, retro, sweet", palette: { bg: "#efe9ff", surface: "#ffffff", ink: "#2a2140", muted: "#6f6690", accent: "#7c5cff", accent2: "#ff8fb1", accent3: "#49d6b0" }, fonts: { heading: "pixelify", body: "space-mono" }, radius: 4, shadow: 1 },
  { id: "soft-spoken", name: "Soft Spoken", mood: "Calm, natural, kind", palette: { bg: "#eef0e6", surface: "#f8f9f3", ink: "#2f3a2c", muted: "#6c7766", accent: "#4f6f52", accent2: "#d9a066", accent3: "#b5c99a" }, fonts: { heading: "baskerville", body: "dm-sans" }, radius: 20, shadow: 1 },
  { id: "terminal", name: "Terminal", mood: "Hacker, crisp, nocturnal", palette: { bg: "#0b0d0c", surface: "#121614", ink: "#d8ffd8", muted: "#7fa38a", accent: "#39ff88", accent2: "#ffd166", accent3: "#5ec8ff" }, fonts: { heading: "jetbrains", body: "jetbrains" }, radius: 2, shadow: 0, dark: true },
  { id: "sunday-paper", name: "Sunday Paper", mood: "Editorial, sharp, timeless", palette: { bg: "#f3efe6", surface: "#fbf8f2", ink: "#141414", muted: "#666058", accent: "#e63b2e", accent2: "#141414", accent3: "#d8cfbd" }, fonts: { heading: "playfair", body: "outfit" }, radius: 0, shadow: 0 },
  { id: "bubblegum", name: "Bubblegum", mood: "Bouncy, bright, friendly", palette: { bg: "#ffe8f1", surface: "#ffffff", ink: "#3a1630", muted: "#8a5a7c", accent: "#ff4f9a", accent2: "#ffb627", accent3: "#6c5ce7" }, fonts: { heading: "outfit", body: "outfit" }, radius: 28, shadow: 2 },
  { id: "scrapbook", name: "Scrapbook", mood: "Handmade, cosy, personal", palette: { bg: "#f4ead5", surface: "#fffaf0", ink: "#3b2f2a", muted: "#80705f", accent: "#e0704a", accent2: "#6aa6a0", accent3: "#f1c75b" }, fonts: { heading: "caveat", body: "outfit" }, radius: 6, shadow: 2 },
  { id: "studio-mono", name: "Studio Mono", mood: "Clean, confident, modern", palette: { bg: "#ffffff", surface: "#f4f4f6", ink: "#0e0e10", muted: "#6b6b74", accent: "#0e0e10", accent2: "#ff5b3a", accent3: "#d9d9e0" }, fonts: { heading: "space-grotesk", body: "dm-sans" }, radius: 12, shadow: 1 },
  { id: "ocean-hour", name: "Ocean Hour", mood: "Deep, dreamy, cinematic", palette: { bg: "#0d1b2a", surface: "#13283d", ink: "#eaf4ff", muted: "#93a9c2", accent: "#ffb86b", accent2: "#5fd0c8", accent3: "#9b8cff" }, fonts: { heading: "instrument-serif", body: "instrument-sans" }, radius: 18, shadow: 2, dark: true },
  { id: "matcha", name: "Matcha", mood: "Fresh, rounded, gentle", palette: { bg: "#f1f4ea", surface: "#ffffff", ink: "#1f2a1c", muted: "#5e6b58", accent: "#6f8f2f", accent2: "#e7c6a5", accent3: "#3d5a40" }, fonts: { heading: "outfit", body: "dm-sans" }, radius: 22, shadow: 1 },
  { id: "citrus", name: "Citrus", mood: "Zesty, sunny, energetic", palette: { bg: "#fffbea", surface: "#ffffff", ink: "#1d1b16", muted: "#6d665a", accent: "#ff7a1a", accent2: "#ffd400", accent3: "#2bb673" }, fonts: { heading: "space-grotesk", body: "outfit" }, radius: 24, shadow: 0 },
  { id: "velvet", name: "Velvet", mood: "Rich, romantic, after dark", palette: { bg: "#1b1020", surface: "#261831", ink: "#f7e9f0", muted: "#bba3b8", accent: "#ff6f91", accent2: "#ffc75f", accent3: "#c3a6ff" }, fonts: { heading: "playfair", body: "outfit" }, radius: 12, shadow: 3, dark: true },
  { id: "blueprint", name: "Blueprint", mood: "Technical, bold, precise", palette: { bg: "#1d3fbb", surface: "#2449c9", ink: "#eaf0ff", muted: "#b3c3f5", accent: "#ffffff", accent2: "#ffd34e", accent3: "#8fb0ff" }, fonts: { heading: "space-grotesk", body: "jetbrains" }, radius: 0, shadow: 0, dark: true, headingCase: "upper" },
  { id: "clay", name: "Clay", mood: "Earthy, crafted, warm", palette: { bg: "#efe4da", surface: "#f8f1ea", ink: "#3b2a22", muted: "#7f6a5d", accent: "#b5562f", accent2: "#6b7f5e", accent3: "#e3b78f" }, fonts: { heading: "baskerville", body: "outfit" }, radius: 30, shadow: 1 },
];
export const kit = (id: string) => KITS.find((k) => k.id === id) ?? KITS[0];

export function themeFromKit(k: StyleKit): Theme {
  return { palette: { ...k.palette }, fonts: { ...k.fonts }, radius: k.radius, shadow: k.shadow, kit: k.id, headingCase: k.headingCase ?? "normal" };
}

/** Curated font pairings for the Brand panel. */
export const PAIRINGS: { name: string; heading: string; body: string }[] = [
  { name: "Gallery", heading: "instrument-serif", body: "instrument-sans" },
  { name: "Broadsheet", heading: "playfair", body: "outfit" },
  { name: "Bookshop", heading: "baskerville", body: "dm-sans" },
  { name: "Studio", heading: "space-grotesk", body: "dm-sans" },
  { name: "Rounded", heading: "outfit", body: "dm-sans" },
  { name: "Notebook", heading: "caveat", body: "outfit" },
  { name: "Arcade", heading: "pixelify", body: "space-mono" },
  { name: "Console", heading: "jetbrains", body: "jetbrains" },
  { name: "Bitmap", heading: "silkscreen", body: "dm-sans" },
  { name: "Typewriter", heading: "space-mono", body: "space-mono" },
];

const HEX = /^#[0-9a-f]{6}$/i;
export const isHex = (v: unknown): v is string => typeof v === "string" && HEX.test(v);
export const isToken = (v: unknown): v is `$${Token}` => typeof v === "string" && v.startsWith("$") && (TOKENS as readonly string[]).includes(v.slice(1));
export const isColorRef = (v: unknown): v is ColorRef => isHex(v) || isToken(v) || v === "transparent";

/** CSS for a colour reference. Tokens become variables so a new brand kit restyles the site at once. */
export function css(ref: ColorRef | undefined, fallback = "inherit"): string {
  if (!ref) return fallback;
  if (ref === "transparent") return "transparent";
  if (isToken(ref)) return `var(--q-${ref.slice(1)})`;
  return isHex(ref) ? ref : fallback;
}
/** The actual hex a reference stands for under a theme (for contrast maths). */
export function hex(ref: ColorRef | undefined, theme: Theme, fallback = "#000000"): string {
  if (!ref) return fallback;
  if (isToken(ref)) return theme.palette[ref.slice(1) as Token];
  if (ref === "transparent") return theme.palette.bg;
  return isHex(ref) ? ref : fallback;
}
export function paintCss(p: Paint | undefined, fallback = "transparent"): string {
  if (!p) return fallback;
  if (!isGradient(p)) return css(p, fallback);
  return gradientCss(p);
}
export function gradientCss(g: Gradient): string {
  const stops = g.stops.map((s) => css(s, "transparent"));
  if (g.kind === "radial") return `radial-gradient(circle at 30% 20%, ${stops.join(", ")})`;
  if (g.kind === "mesh") {
    const [a, b = a, c = b, d = a] = stops;
    return `radial-gradient(at 12% 18%, ${b} 0, transparent 55%), radial-gradient(at 88% 12%, ${c} 0, transparent 50%), radial-gradient(at 70% 92%, ${d} 0, transparent 55%), ${a}`;
  }
  return `linear-gradient(${g.angle ?? 135}deg, ${stops.join(", ")})`;
}
/** First solid colour of a paint, for things that need one colour. */
export const paintBase = (p: Paint): ColorRef => (isGradient(p) ? p.stops[0] : p);

export function luminance(h: string) {
  const n = parseInt(h.slice(1), 16), c = [(n >> 16) & 255, (n >> 8) & 255, n & 255].map((v) => {
    const s = v / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
}
export const contrast = (a: string, b: string) => {
  const [x, y] = [luminance(a), luminance(b)].sort((m, n) => n - m);
  return (x + 0.05) / (y + 0.05);
};
/** Whichever of the theme's ink or background reads better on a colour. */
export function readableOn(ref: ColorRef, theme: Theme): ColorRef {
  const h = hex(ref, theme);
  const ink = theme.palette.ink, bg = theme.palette.bg;
  if (contrast(h, ink) >= contrast(h, bg)) return "$ink";
  return "$bg";
}
export const isDark = (h: string) => luminance(h) < 0.2;

export function mix(a: string, b: string, t: number) {
  const p = (h: string) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16));
  const [x, y] = [p(a), p(b)];
  return "#" + x.map((v, i) => Math.round(v + (y[i] - v) * t).toString(16).padStart(2, "0")).join("");
}

/** Make a whole palette from one colour: the "From one colour" feature in the Brand panel. */
export function paletteFrom(seed: string, dark = false): Palette {
  const [h, s] = hsl(seed);
  const tone = (hh: number, ss: number, ll: number) => fromHsl(((hh % 360) + 360) % 360, ss, ll);
  return dark
    ? { bg: tone(h, Math.min(s, 0.35), 0.08), surface: tone(h, Math.min(s, 0.3), 0.13), ink: tone(h, 0.25, 0.94), muted: tone(h, 0.15, 0.68), accent: seed, accent2: tone(h + 40, Math.max(s, 0.6), 0.68), accent3: tone(h - 140, 0.5, 0.65) }
    : { bg: tone(h, Math.min(s, 0.45), 0.96), surface: tone(h, 0.4, 0.99), ink: tone(h, 0.35, 0.14), muted: tone(h, 0.12, 0.42), accent: seed, accent2: tone(h + 40, Math.max(s, 0.65), 0.6), accent3: tone(h - 140, 0.45, 0.45) };
}
function hsl(h: string): [number, number, number] {
  const n = parseInt(h.slice(1), 16);
  const r = ((n >> 16) & 255) / 255, g = ((n >> 8) & 255) / 255, b = (n & 255) / 255;
  const max = Math.max(r, g, b), min = Math.min(r, g, b), l = (max + min) / 2;
  if (max === min) return [0, 0, l];
  const d = max - min, s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
  const hh = max === r ? (g - b) / d + (g < b ? 6 : 0) : max === g ? (b - r) / d + 2 : (r - g) / d + 4;
  return [hh * 60, s, l];
}
function fromHsl(h: number, s: number, l: number) {
  const k = (n: number) => (n + h / 30) % 12, a = s * Math.min(l, 1 - l);
  const f = (n: number) => l - a * Math.max(-1, Math.min(k(n) - 3, Math.min(9 - k(n), 1)));
  return "#" + [f(0), f(8), f(4)].map((v) => Math.round(v * 255).toString(16).padStart(2, "0")).join("");
}

export const SHADOWS = [
  "none",
  "0 1px 2px rgba(20,16,30,.08), 0 8px 24px -12px rgba(20,16,30,.18)",
  "0 2px 4px rgba(20,16,30,.08), 0 18px 40px -16px rgba(20,16,30,.32)",
  "0 4px 8px rgba(20,16,30,.12), 0 36px 70px -24px rgba(20,16,30,.45)",
];
