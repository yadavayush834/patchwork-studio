/** Patchwork components: small characters that live on a real page and do a real job there. */
export type OptionType = "color" | "text" | "number" | "select";
export interface Option { key: string; label: string; type: OptionType; default: string; max?: number; min?: number; choices?: string[]; demo?: boolean }

export const components = [
  {
    id: "lamplighter",
    name: "Lamplighter",
    tag: "pw-lamplighter",
    job: "Headline reveal",
    description: "When a heading scrolls into view, a lamplighter walks along the real tops of its letters (measured from your font), hops the gaps between words, jumps down to the next line and lights every letter with his pole. Screen readers get the plain heading; reduced motion shows it lit.",
    where: "Inside any heading",
    palette: ["#15121c", "#ffc56b", "#3a4a7a", "#e8b04a"],
    options: [
      { key: "headline", label: "Headline in the demo", type: "text", default: "Gaslight returns to the old quarter.", max: 60, demo: true },
      { key: "color", label: "Glow", type: "color", default: "#ffc56b" },
      { key: "speed", label: "Walking speed (px/s)", type: "number", default: "230", min: 120, max: 420 },
      { key: "replay", label: "Light again", type: "select", default: "once", choices: ["once", "scroll"] },
    ],
  },
  {
    id: "kite",
    name: "Kite",
    tag: "pw-kite",
    job: "Back to top",
    description: "Scroll down and a kid walks into the corner and lets a kite out. It climbs higher the further you read and leans with how fast you scroll; its tail swings on a little rope. Click the kid (a real button, keyboard too) or the kite and they reel it in, carrying you back to the top.",
    where: "Once, anywhere on the page",
    palette: ["#f4efe4", "#ff5a5f", "#ffd25a", "#5ac8fa"],
    options: [
      { key: "color", label: "Kite cloth", type: "color", default: "#ff5a5f" },
      { key: "color2", label: "Second cloth", type: "color", default: "#ffd25a" },
      { key: "tail", label: "Tail bows", type: "color", default: "#5ac8fa" },
      { key: "threshold", label: "Appears after (px)", type: "number", default: "600", min: 100, max: 2000 },
    ],
  },
  {
    id: "postie",
    name: "Postie",
    tag: "pw-postie",
    job: "Form feedback",
    description: "A postie stands by a pillar box in your form's corner and watches the field you are in. Send it with a mistake and she points at the field and says which one, out loud for screen readers too. Send it properly and the letter flies from your button into the box; she salutes and cycles off. Forms with an action still submit, right after the letter lands.",
    where: "Inside a <form>",
    palette: ["#efe7d8", "#2f5aa0", "#d33b2c", "#f0c24a"],
    options: [
      { key: "message", label: "Thank-you line", type: "text", default: "Sent. Thank you!", max: 40 },
      { key: "color", label: "Uniform", type: "color", default: "#2f5aa0" },
      { key: "box", label: "Pillar box", type: "color", default: "#d33b2c" },
    ],
  },
  {
    id: "cocoon",
    name: "Cocoon",
    tag: "pw-cocoon",
    job: "Progress and loading",
    description: "A progress bar that is a caterpillar. Silk wraps it from the bottom up as the value rises; at 100 the cocoon shakes and splits and a butterfly flies out across the whole page. Leave out the value and it spins as a loader. It is a real progressbar for assistive tech and fires an event when the butterfly comes out.",
    where: "Anywhere; set value from 0 to 100",
    palette: ["#f4efe4", "#7ac74f", "#f6efe0", "#ff8c2b"],
    options: [
      { key: "label", label: "Label", type: "text", default: "Uploading 12 photos", max: 32 },
      { key: "wings", label: "Butterfly", type: "color", default: "#ff8c2b" },
    ],
  },
  {
    id: "tightrope",
    name: "Tightrope",
    tag: "pw-tightrope",
    job: "Section divider",
    description: "A divider with an acrobat walking it. The rope bends into two straight runs under his feet and twangs when he lands. Scroll fast and his balance pole tips; scroll too fast and he slips, hangs on by his hands and climbs back. Click him for a flip.",
    where: "Between sections",
    palette: ["#f4efe4", "#e5484d", "#fff4e0", "#8a6a4a"],
    options: [
      { key: "color", label: "Costume", type: "color", default: "#e5484d" },
      { key: "rope", label: "Rope", type: "color", default: "#8a6a4a" },
      { key: "speed", label: "Walking speed (px/s)", type: "number", default: "42", min: 15, max: 100 },
    ],
  },
  {
    id: "mimeo",
    name: "Mimeo",
    tag: "pw-mimeo",
    job: "Copy button for code",
    description: "A tiny copying machine in the corner of a code block, as a real button. Press it and a light bar scans down your code, the drum turns and a copied slip prints out and floats away. If the clipboard is blocked it jams, smokes, and selects the code so Ctrl+C still works.",
    where: "Inside a <pre>",
    palette: ["#1d1a24", "#d9d4c7", "#7cf29a", "#ffbf47"],
    options: [
      { key: "label", label: "Button", type: "text", default: "Copy", max: 16 },
      { key: "done", label: "After copying", type: "text", default: "Copied", max: 16 },
      { key: "color", label: "Scan light", type: "color", default: "#7cf29a" },
    ],
  },
] as const satisfies readonly { id: string; name: string; tag: string; job: string; description: string; where: string; palette: readonly string[]; options: readonly Option[] }[];

export type ComponentId = (typeof components)[number]["id"];
export type ComponentConfig = Record<string, string>;
export const isComponent = (v: unknown): v is ComponentId => components.some((c) => c.id === v);
export const component = (id: ComponentId) => components.find((c) => c.id === id)!;
const options = (id: ComponentId) => component(id).options as readonly Option[];
export function defaultComponent(id: ComponentId): ComponentConfig {
  return Object.fromEntries(options(id).map((o) => [o.key, o.default]));
}
/** Keep only known options, each in its own shape: real colours, bounded numbers, offered choices, short text. */
export function normalizeComponent(value: Partial<ComponentConfig>, id: ComponentId): ComponentConfig {
  const out = defaultComponent(id);
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
export function componentAttributes(id: ComponentId, config: ComponentConfig) {
  const c = normalizeComponent(config, id);
  return options(id).filter((o) => !o.demo && (o.type === "text" || c[o.key] !== o.default)).map((o) => [o.key, c[o.key]] as const);
}
