export const heroes = [
  {
    id: "facet",
    name: "Facet",
    medium: "Sculptural GLSL",
    description:
      "A twisted chrome ribbon catches a moving studio light. Change its form with a click.",
    font: "Syne",
    accent: "#4566d5",
    brand: "facet",
    headline: "Ideas take\nphysical form.",
    body: "An independent practice at the intersection of objects, identity and digital space.",
    cta: "Reshape the form",
    note: "Form is a starting point.",
    uses: "Design studios · Creative portfolios · Product launches",
  },
  {
    id: "undertow",
    name: "Undertow",
    medium: "Spatial ASCII",
    description:
      "Thousands of depth-sorted characters trace a rotating nautilus, suspended in a quiet typographic composition.",
    font: "InstrumentSerif",
    accent: "#d4aa7d",
    brand: "undertow",
    headline: "Follow a\nquieter current.",
    body: "A space for considered work, unexpected connections and a different pace of making.",
    cta: "Turn the current",
    note: "Some things ask for a closer look.",
    uses: "Editorial projects · Art portfolios · Independent publications",
  },
  {
    id: "daybreak",
    name: "Daybreak",
    medium: "Pixel landscape",
    description:
      "A miniature landscape of drifting clouds, layered hills and reflected light, with a day-to-dusk transition.",
    font: "Silkscreen",
    accent: "#d78157",
    brand: "daybreak",
    headline: "A small world.\nYours to shape.",
    body: "For the projects that start with a little curiosity and grow into somewhere new.",
    cta: "Shift to dusk",
    note: "There is room for your idea here.",
    uses: "Indie games · Creative tools · Communities",
  },
  {
    id: "lattice",
    name: "Lattice",
    medium: "Deforming WebGL mesh",
    description:
      "A live wire surface folds between a flowing sheet and a structured sculpture.",
    font: "BricolageGrotesque",
    accent: "#d94c35",
    brand: "Lattice",
    headline: "Order is an\nexperiment.",
    body: "Tools and ideas for people who see a system as something to play with.",
    cta: "Fold the grid",
    note: "Change the shape of the familiar.",
    uses: "Developer tools · Design systems · Experimental portfolios",
  },
  {
    id: "frequency",
    name: "Frequency",
    medium: "Refractive light shader",
    description:
      "Fluted light bends across a dark chamber. A change of perspective sends a new spectrum through it.",
    font: "Syne",
    accent: "#cba66c",
    brand: "frequency",
    headline: "Light, bent into\npossibility.",
    body: "A digital playground for new perspectives. Bring an idea and see where it takes you.",
    cta: "Bend the light",
    note: "A different angle changes everything.",
    uses: "Digital experiences · Music projects · Creative technology",
  },
] as const;
export type HeroId = (typeof heroes)[number]["id"];
export interface HeroConfig {
  brand: string;
  headline: string;
  body: string;
  cta: string;
  href: string;
  accent: string;
  speed: number;
  intensity: number;
  reduced: boolean;
}
export function isHeroId(id: unknown): id is HeroId {
  return heroes.some((h) => h.id === id);
}
export function defaultConfig(id: HeroId): HeroConfig {
  const h = heroes.find((h) => h.id === id)!;
  return {
    brand: h.brand,
    headline: h.headline,
    body: h.body,
    cta: h.cta,
    href: "",
    accent: h.accent,
    speed: 1,
    intensity: 1,
    reduced: false,
  };
}
export function safeHref(value: unknown) {
  if (typeof value !== "string") return "";
  const text = value.trim();
  return /^(https?:\/\/|mailto:|tel:|#[\w-]+)/i.test(text) &&
    !/[\u0000-\u0020<>"']/.test(text)
    ? text
    : "";
}
export function normalizeConfig(
  id: HeroId,
  input: Partial<HeroConfig>,
): HeroConfig {
  const result = defaultConfig(id);
  for (const [key, max] of [
    ["brand", 28],
    ["headline", 80],
    ["body", 180],
    ["cta", 32],
  ] as const)
    if (typeof input[key] === "string" && input[key]!.trim())
      result[key] = input[key]!.slice(0, max);
  if (/^#[a-f\d]{6}$/i.test(input.accent || "")) result.accent = input.accent!;
  result.href = safeHref(input.href);
  for (const key of ["speed", "intensity"] as const)
    if (typeof input[key] === "number" && Number.isFinite(input[key]))
      result[key] = Math.max(0.25, Math.min(1.8, input[key]!));
  result.reduced = input.reduced === true;
  return result;
}
export function readConfig(id: HeroId): HeroConfig {
  try {
    return normalizeConfig(
      id,
      JSON.parse(localStorage.getItem(`patchwork:hero:v1:${id}`) || "{}"),
    );
  } catch {
    return defaultConfig(id);
  }
}
