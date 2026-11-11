/** Hero Sections II: five single-screen heroes, each its own technique, typeface and palette. */
export const heroes2 = [
  {
    id: "mercury",
    name: "Mercury",
    technique: "Raymarched GLSL",
    type: "Unbounded",
    description: "Liquid chrome raymarched in a fragment shader. The metal leans toward your cursor and swallows the edge of the headline.",
    palette: ["#0a0a0b", "#e9e7e2", "#ff5a1f"],
    fonts: ["Unbounded", "InstrumentSans"],
    defaults: { brand: "Mercury", headline: "Matter that listens.", sub: "A studio for interfaces that behave like materials: weight, surface tension and a little recoil.", cta: "Start a project", cta2: "See the work" },
  },
  {
    id: "ink",
    name: "Ink",
    technique: "GPU fluid simulation",
    type: "Instrument Serif",
    description: "A real-time fluid solver. Drops of sumi ink and one vermilion bloom spread through milky water; your cursor stirs it.",
    palette: ["#efe9dc", "#16161d", "#d63a1e"],
    fonts: ["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans"],
    defaults: { brand: "Sumi", headline: "Ideas, like ink, need room to spread.", sub: "A slow notebook for thinking on paper. Write a line, leave it, and watch it reach the next one.", cta: "Get Sumi", cta2: "Read the manifesto" },
  },
  {
    id: "atlas",
    name: "Paper Terminal",
    technique: "3D in ASCII",
    type: "JetBrains Mono + Instrument Serif",
    description: "A rotating globe drawn only in characters on paper. Your cursor is a lens: inside it the graticule and live coordinates appear.",
    palette: ["#f1ede4", "#191919", "#2340ff"],
    fonts: ["JetBrainsMono", "InstrumentSerif", "InstrumentSans"],
    defaults: { brand: "Meridian", headline: "The whole world, in plain text.", sub: "Live geodata as text you can grep, diff and ship. No tiles, no SDK, just characters.", cta: "Get an API key", cta2: "Read the docs" },
  },
  {
    id: "lowtide",
    name: "Lowtide",
    technique: "1-bit ordered dither",
    type: "Pixelify Sans",
    description: "A moonlit sea in two colours, dithered every frame like early desktop art. Move the moon and the tide's reflection follows.",
    palette: ["#0e0e10", "#e9e5d7", "#e9e5d7"],
    fonts: ["PixelifySans", "InstrumentSans"],
    defaults: { brand: "Lowtide", headline: "The web was quieter at 72 dpi.", sub: "A one-bit reader for the internet. No ads, no autoplay, just the words and the tide coming in.", cta: "Download Lowtide", cta2: "How it works" },
  },
  {
    id: "breath",
    name: "Breath",
    technique: "Variable-font kinetics",
    type: "Fraunces (wght, opsz, SOFT, WONK)",
    description: "No canvas at all: every letter is a variable font that swells, softens and wonks as you come near. Press the button and the headline breathes with you.",
    palette: ["#113528", "#f3e7cf", "#f2a33a"],
    fonts: ["Fraunces", "InstrumentSans"],
    defaults: { brand: "Fernhouse", headline: "Breathe in. Breathe out.", sub: "A breathing coach that fits in your pocket. Four minutes a day, no streaks, no noise.", cta: "Take one breath", cta2: "How it works" },
  },
  {
    id: "dots",
    name: "Specimen",
    technique: "Live 3D in dot art",
    type: "Bricolage Grotesque",
    description: "A moon jelly raymarched live in 3D, then rebuilt from single-colour dots: every dot flickers on its own clock, a scan rolls down, dots shy away from your pointer and a click sends a ripple through them. Upload a picture of your own and it becomes the dots instead.",
    palette: ["#050505", "#d4ff3a", "#eef3e2"],
    fonts: ["BricolageGrotesque", "JetBrainsMono", "InstrumentSans"],
    defaults: { brand: "Lumen Deep", headline: "Things that glow down here.", sub: "A field guide to the bioluminescent ocean, mapped one light at a time by divers and drones.", cta: "Explore the guide", cta2: "Watch the dives" },
  },
  {
    id: "prism",
    name: "Prism",
    technique: "Dispersion by Snell's law",
    type: "Syne",
    description: "A white beam meets a glass prism and leaves as a spectrum. Every wavelength is traced with Snell's law and its own index, total internal reflection included. Move to turn the prism; click to fire a pulse of light down the beam.",
    palette: ["#07070a", "#f4f2ee", "#ff3b3b", "#4dff7a", "#5b6bff"],
    fonts: ["Syne", "JetBrainsMono", "InstrumentSans"],
    defaults: { brand: "Spectra", headline: "Every colour was already there.", sub: "Colour management for teams who print, screen and ship: one source of truth, from the file to the shelf.", cta: "Start a free trial", cta2: "See it work" },
  },
] as const;
export type Hero2Id = (typeof heroes2)[number]["id"];
/** `image` is only used by Specimen: an optional picture of your own, kept as a small data URL. */
export interface Hero2Config { brand: string; headline: string; sub: string; cta: string; cta2: string; href: string; image: string }
export const isHero2 = (v: unknown): v is Hero2Id => heroes2.some((h) => h.id === v);
export const hero2 = (id: Hero2Id) => heroes2.find((h) => h.id === id)!;
export function defaultHero2(id: Hero2Id): Hero2Config {
  return { ...hero2(id).defaults, href: "#", image: "" };
}
const limits: Record<Exclude<keyof Hero2Config, "image">, number> = { brand: 24, headline: 60, sub: 160, cta: 28, cta2: 28, href: 300 };
export const MAX_IMAGE = 700_000;
/** Trim, cap lengths and only allow safe link schemes. */
export function normalizeHero2(value: Partial<Hero2Config>, id: Hero2Id): Hero2Config {
  const d = defaultHero2(id);
  const out = { ...d };
  for (const k of Object.keys(limits) as (keyof typeof limits)[]) {
    const v = value[k];
    if (typeof v === "string" && v.trim()) out[k] = v.trim().slice(0, limits[k]);
  }
  if (!/^(https?:\/\/|mailto:|#|\/)/i.test(out.href) || /^\/\//.test(out.href)) out.href = "#";
  const img = value.image;
  if (typeof img === "string" && img.length <= MAX_IMAGE && /^data:image\/(jpeg|png|webp);base64,[A-Za-z0-9+/=]+$/.test(img)) out.image = img;
  return out;
}
