/** Patchwork spirits: small creatures that move into a page and get on with their lives there. */
export type OptionType = "color" | "text" | "number" | "select";
export interface Option { key: string; label: string; type: OptionType; default: string; max?: number; min?: number; choices?: string[] }

export const spirits = [
  {
    id: "spider",
    name: "Spider",
    tag: "pw-spider",
    job: "Lives on a section",
    description: "Drops in on a silk thread, then walks your page on eight two-jointed legs: every foot is planted and stepped in an alternating gait. A quick cursor sends it running; a still one makes it curious, and it creeps a little closer.",
    where: "Inside any section",
    palette: ["#14121a", "#2b2333", "#e8a23a", "#9a92a8"],
    options: [
      { key: "color", label: "Markings", type: "color", default: "#e8a23a" },
      { key: "size", label: "Size", type: "number", default: "2", min: 1, max: 3 },
    ],
  },
  {
    id: "monkey",
    name: "Monkey",
    tag: "pw-monkey",
    job: "Swings along an edge",
    description: "Swings hand over hand along the bottom of your nav, like monkey bars. Each swing is a pendulum about the hand that holds on, so the free hand meets the next grip just as the swing peaks. It turns at the ends, stops to scratch or wave, and reaches for your cursor.",
    where: "Inside a header or nav",
    palette: ["#f4efe4", "#8a5530", "#ecc9a0", "#4e2f1a"],
    options: [
      { key: "color", label: "Fur", type: "color", default: "#8a5530" },
      { key: "edge", label: "Swings along", type: "select", default: "bottom", choices: ["bottom", "top"] },
    ],
  },
  {
    id: "moth",
    name: "Moth",
    tag: "pw-moth",
    job: "Circles your cursor",
    description: "Moths that treat your cursor as a lamp. They circle in loose, uneven orbits, bump into the light now and then, and shed a little dust. When you leave they settle on the section's edge with their wings folded. Best on dark sections, with a warm glow.",
    where: "Inside a (dark) section",
    palette: ["#16131d", "#e9dcc3", "#ffd68c", "#6b5a48"],
    options: [
      { key: "count", label: "How many", type: "number", default: "2", min: 1, max: 5 },
      { key: "color", label: "Wings", type: "color", default: "#e9dcc3" },
      { key: "glow", label: "Light around the cursor", type: "select", default: "on", choices: ["on", "off"] },
    ],
  },
  {
    id: "wanderer",
    name: "Wanderer",
    tag: "pw-wanderer",
    job: "Lives on your content",
    description: "A tiny person who lives on top of your content. Headings, paragraphs, buttons, images and cards are their ground: they walk along them, jump between them on a real arc, sit on edges with legs hanging, read on headings and wave when you come near. Click beside them and they hop and say hi.",
    where: "Inside a section with text",
    palette: ["#f4efe4", "#e2574c", "#2f3346", "#e8b48a"],
    options: [
      { key: "name", label: "Their name", type: "text", default: "Pip", max: 16 },
      { key: "color", label: "Jumper", type: "color", default: "#e2574c" },
      { key: "size", label: "Size", type: "number", default: "2", min: 2, max: 3 },
    ],
  },
  {
    id: "hummingbird",
    name: "Hummingbird",
    tag: "pw-hummingbird",
    job: "Visits your links",
    description: "Keeps you company a little way from your cursor, darting to a new spot every so often, wings a blur. Point at a link or a button and it zips over to sip from its edge. Left alone it perches on the top of its section.",
    where: "Inside a section with links",
    palette: ["#f4efe4", "#2fbf71", "#26a1a6", "#e0245e"],
    options: [
      { key: "color", label: "Back feathers", type: "color", default: "#2fbf71" },
      { key: "throat", label: "Throat", type: "color", default: "#e0245e" },
    ],
  },
  {
    id: "magpie",
    name: "Magpie",
    tag: "pw-magpie",
    job: "Borrows your words",
    description: "Collects shiny words. Every so often it flies in, lands on a word in your text, pecks it and flies off holding it, leaving the gap. A few seconds later it brings the word back and drops it in. Come too close and it gives the word back; click while it is away and it hurries home.",
    where: "Inside an article",
    palette: ["#f4efe4", "#15141b", "#f4f1ea", "#2c7a8c"],
    options: [
      { key: "every", label: "Visits every (seconds)", type: "number", default: "9", min: 4, max: 60 },
      { key: "color", label: "Tail sheen", type: "color", default: "#2c7a8c" },
    ],
  },
] as const satisfies readonly { id: string; name: string; tag: string; job: string; description: string; where: string; palette: readonly string[]; options: readonly Option[] }[];

export type SpiritId = (typeof spirits)[number]["id"];
export type SpiritConfig = Record<string, string>;
export const isSpirit = (v: unknown): v is SpiritId => spirits.some((c) => c.id === v);
export const spirit = (id: SpiritId) => spirits.find((c) => c.id === id)!;
const options = (id: SpiritId) => spirit(id).options as readonly Option[];
export function defaultSpirit(id: SpiritId): SpiritConfig {
  return Object.fromEntries(options(id).map((o) => [o.key, o.default]));
}
/** Keep only known options, each in its own shape: real colours, bounded numbers, offered choices, short text. */
export function normalizeSpirit(value: Partial<SpiritConfig>, id: SpiritId): SpiritConfig {
  const out = defaultSpirit(id);
  for (const o of options(id)) {
    const v = value?.[o.key];
    if (typeof v !== "string") continue;
    const t = v.trim();
    if (o.type === "color" && /^#[0-9a-f]{6}$/i.test(t)) out[o.key] = t.toLowerCase();
    if (o.type === "text" && t) out[o.key] = t.slice(0, o.max ?? 60);
    if (o.type === "number" && t !== "" && Number.isFinite(Number(t))) out[o.key] = String(Math.round(Math.min(o.max ?? 1e6, Math.max(o.min ?? 0, Number(t)))));
    if (o.type === "select" && o.choices?.includes(t)) out[o.key] = t;
  }
  return out;
}
/** The attributes that go on the tag. Words are always written out; other options only when changed. */
export function spiritAttributes(id: SpiritId, config: SpiritConfig) {
  const c = normalizeSpirit(config, id);
  return options(id).filter((o) => o.type === "text" || c[o.key] !== o.default || (id === "moth" && o.key === "glow")).map((o) => [o.key, c[o.key]] as const);
}

/** Small pals: one shared engine (`pals.js`, `<pw-pal kind="…">`), each a creature with its own way of moving. */
export const pals = [
  { id: "hedgehog", name: "Hedgehog", move: "walk", color: "#7a5232", line: "Trundles along an edge and curls into a ball when you come close." },
  { id: "fox", name: "Fox", move: "walk", color: "#ef7d32", line: "Trots about, then sits down with its tail curled round its feet." },
  { id: "raccoon", name: "Raccoon", move: "walk", color: "#8e8a98", line: "Patrols the edge and stands up on its back legs to look at you." },
  { id: "chick", name: "Chick", move: "hop", color: "#ffd23f", line: "Hops along, and flaps its tiny wings when you say hello." },
  { id: "bunny", name: "Bunny", move: "hop", color: "#f4f1ea", line: "Bounces about and bolts the other way if your cursor gets near." },
  { id: "squirrel", name: "Squirrel", move: "hop", color: "#c8642f", line: "Quick hops, big tail, and no intention of being caught." },
  { id: "axolotl", name: "Axolotl", move: "crawl", color: "#f6a6c1", line: "Shuffles along the bottom of a section with its gills waving." },
  { id: "turtle", name: "Turtle", move: "crawl", color: "#5a8f3c", line: "Takes its time along the floor and hides in its shell when you come near." },
  { id: "ladybug", name: "Ladybug", move: "crawl", color: "#e5484d", line: "Walks the edge; click it and it opens its wings and takes off." },
  { id: "ghost", name: "Ghost", move: "fly", color: "#f2f0ff", line: "Drifts around a section and goes see-through when you get close." },
  { id: "jellyfish", name: "Jellyfish", move: "fly", color: "#9bd7ff", line: "Pulses slowly through the section, rising and sinking." },
  { id: "dragonfly", name: "Dragonfly", move: "fly", color: "#2fbf9f", line: "Hovers, then darts, then hovers. Darts away from your cursor." },
  { id: "bat", name: "Bat", move: "hang", color: "#4b3b5c", line: "Sleeps upside down under an edge until your cursor wakes it." },
  { id: "sloth", name: "Sloth", move: "hangwalk", color: "#a08262", line: "Hangs under an edge and moves along it, extremely slowly." },
  { id: "owl", name: "Owl", move: "sit", color: "#8a6a4a", line: "Sits in the corner, turns to watch you, and spreads its wings on a click." },
  { id: "octopus", name: "Octopus", move: "sit", color: "#a98bff", line: "Lounges on a corner waving its arms, and waves them all at you." },
] as const;
export type PalId = (typeof pals)[number]["id"];
export const isPal = (v: unknown): v is PalId => pals.some((p) => p.id === v);
export function palTag(id: PalId, color?: string) {
  const p = pals.find((x) => x.id === id)!;
  const c = color && /^#[0-9a-f]{6}$/i.test(color) && color.toLowerCase() !== p.color ? ` color="${color.toLowerCase()}"` : "";
  return `<pw-pal kind="${id}"${c}></pw-pal>`;
}
