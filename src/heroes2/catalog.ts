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
  {
    id: "library",
    name: "Reading Room",
    technique: "Painting + depth map in WebGL2",
    type: "Instrument Serif",
    description: "A painted library rendered in real depth by Patchwork's Diorama engine. Walk the camera along the reading table with your cursor; the sun follows, its rays swinging through a thousand motes of dust. Click to stir the dust.",
    palette: ["#120c07", "#f6ead2", "#ffcf7a"],
    fonts: ["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans"],
    defaults: { brand: "Marginalia", headline: "Read as if the afternoon is long.", sub: "A quiet reading app. No feeds, no streaks, no badges: the book, your notes in the margin, and the light moving across the page.", cta: "Start reading", cta2: "See a page" },
  },
  {
    id: "forge",
    name: "Forge",
    technique: "Painting + depth map, heat simulation",
    type: "Syne",
    description: "A smithy painted in fire and shadow, rendered in depth. Hold down to work the bellows: the coals brighten, embers fly faster and a gauge reads the heat by its colour. Click to strike the blade and throw sparks.",
    palette: ["#060403", "#f3ece4", "#ff6a1f"],
    fonts: ["Syne", "JetBrainsMono", "InstrumentSans"],
    defaults: { brand: "Ironwood", headline: "Made the slow way.", sub: "Hand-forged kitchen knives from reclaimed steel. One blade a week, sharpened for a lifetime of dinners.", cta: "Join the waitlist", cta2: "How a blade is made" },
  },
  {
    id: "teahouse",
    name: "Tea House",
    technique: "Painting + depth map, living mist",
    type: "Fraunces",
    description: "A tea house in a bamboo grove, rendered in depth, with mist that breathes between the stems and leaves falling at their own distances. Look around with the cursor; start the steep timer and the kettle steams harder until your tea is ready.",
    palette: ["#dfe5dd", "#1d2a22", "#b5652c"],
    fonts: ["Fraunces", "InstrumentSans"],
    defaults: { brand: "Kettle & Kin", headline: "Slow water, good leaves.", sub: "Small-lot teas from mountain gardens, packed by hand and sent with a note on how long to wait.", cta: "Shop the first flush", cta2: "Visit the tea house" },
  },
  {
    id: "airmail",
    name: "Airmail",
    technique: "Hand-built 3D paper planes",
    type: "Bricolage Grotesque",
    description: "Folded paper planes, modelled and lit in a few lines of canvas, loop around a giant word: behind some letters, in front of others, leaving dashed pencil trails. Click to throw another one. A switch turns the paper into a night sky.",
    palette: ["#f2ece0", "#1d2236", "#d8402f", "#2b4fa3"],
    fonts: ["BricolageGrotesque", "InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Airmail", headline: "Write slowly. Send far.", sub: "Letters for the people you miss, written on your phone, delivered on real paper a week later.", cta: "Write a letter", cta2: "How it works" },
  },
  {
    id: "murmur",
    name: "Murmuration",
    technique: "3D flocking through type",
    type: "Fraunces",
    description: "Fourteen hundred starlings, each following three simple rules, flow through a giant word: in front of the letters and behind them. Your pointer is a falcon they part around, a click is a shock wave, and one button makes the flock spell the word.",
    palette: ["#f4d9c3", "#1b1626", "#c4271b"],
    fonts: ["Fraunces", "InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Murmur", headline: "We study how many become one.", sub: "A field lab for collective behaviour: starlings, shoals, crowds and the quiet rules that move them together.", cta: "Read the field notes", cta2: "Join a dusk count" },
  },
  {
    id: "deep",
    name: "Deep",
    technique: "Cut-out breaking a 3D frame",
    type: "Unbounded",
    description: "A diver steps out of a framed card in 3D while the sea inside the card moves: light shafts, drifting motes, a different colour for every dive. Tilt it with the pointer, pick a dive, click to let out a burst of bubbles.",
    palette: ["#dfeee9", "#0d2a2c", "#d8663a"],
    fonts: ["Unbounded", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Fathom", headline: "Go a little deeper.", sub: "A diving school for curious people. Small groups, old wrecks and an instructor who has never once been in a hurry.", cta: "Book a first dive", cta2: "See the sites" },
  },
  {
    id: "runner",
    name: "Night Run",
    technique: "Particle creature + playable game",
    type: "Unbounded",
    description: "A fox made of five thousand glowing particles gallops through a wireframe forest, shedding a trail as it goes. It runs on its own until you press Space or tap: then it is yours. Jump the logs and rocks, catch fireflies that burst toward you, beat your best distance.",
    palette: ["#05060d", "#eef0ff", "#ff8a3d"],
    fonts: ["Unbounded", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Nightrun", headline: "Run after dark.", sub: "A running club for people who would rather go at midnight. Lit routes, small groups, and hot chocolate at the end.", cta: "Join a night run", cta2: "See the routes" },
  },
  {
    id: "owl",
    name: "Nocturne",
    technique: "Painting rebuilt as a point cloud",
    type: "Instrument Serif",
    description: "A painted owl turned into forty thousand points in 3D: its depth map sets how near each one sits, and a shader beats the wings. Move to fly around it, click to scatter it into dust and watch it gather again, and switch between the feathers' colour, depth as light and heat.",
    palette: ["#020308", "#eef0ff", "#38d6e0"],
    fonts: ["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Nocturne", headline: "See in the dark.", sub: "A field guide to the animals on the night shift: owls, moths, foxes and bats, and where to find them after the lights go out.", cta: "Open the field guide", cta2: "Book a night walk" },
  },
  {
    id: "lateset",
    name: "Late Set",
    technique: "Posterised stop-motion boil",
    type: "Instrument Serif",
    description: "A painted trumpeter, snapped to five inks with grain that changes every frame, boiling between hand-painted drawings like stop-motion. Click to blow a note and send speed lines out of the bell; change the key to swap the inks.",
    palette: ["#070a24", "#f3e6c8", "#e8a93a", "#c0182a"],
    fonts: ["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Late Set", headline: "The last set starts at midnight.", sub: "A forty-seat jazz room under the bridge. Two sets a night, no phones on the tables, the good chairs go first.", cta: "Reserve a table", cta2: "Tonight's lineup" },
  },
  {
    id: "afterglow",
    name: "Afterglow",
    technique: "Collage, glitch burst and film damage",
    type: "Bricolage Grotesque",
    description: "A paper collage that won't sit still: a figure floating in a radial burst of glitch streaks over a little fairground, with scratches, dust and gate weave running at projector speed. Steer the burst with the pointer; click to glitch the frame.",
    palette: ["#3b2c8f", "#fbf6ea", "#ff3ea5", "#3ee0c0"],
    fonts: ["BricolageGrotesque", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Afterglow", headline: "Float a little longer", sub: "Three nights of music in an old fairground. The rides stay on until sunrise and nobody checks what time it is.", cta: "Get tickets", cta2: "See the lineup" },
  },
  {
    id: "copyshop",
    name: "Copyshop",
    technique: "Photocopier generation loss",
    type: "Bricolage Grotesque",
    description: "A photocopier, honestly simulated. Each copy is made from the last, so the toner spreads, speckle grows and a dirty drum leaves streaks; copies pile up on the glass. Drag a sheet mid-scan to smear it, the way copier art is made.",
    palette: ["#eeebe3", "#171413", "#ff3ea5", "#7dff9a"],
    fonts: ["BricolageGrotesque", "InstrumentSans", "JetBrainsMono"],
    defaults: { brand: "Copyshop", headline: "Make a hundred copies of anything.", sub: "A weekend for small presses and photocopied zines. Bring your work, take a table, trade with everyone.", cta: "Get a table", cta2: "Read the zines" },
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
