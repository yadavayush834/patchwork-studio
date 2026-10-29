export const motionTemplates = [
  {
    id: "aether",
    cover: "/motion/aether-cover.png",
    number: "01",
    name: "Æther",
    category: "PRODUCT / OBJECT",
    headline: "Sound, untethered.",
    description:
      "A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",
    color: "#ee794c",
    background: "#ede8df",
    tags: ["3D assembly", "Pinned storytelling", "Orbiting type"],
    chapters: [
      "First contact",
      "Inside the object",
      "A different frequency",
      "Find your space",
    ],
  },
  {
    id: "offscript",
    cover: "/motion/offscript-cover.png",
    number: "02",
    name: "Offscript",
    category: "STUDIO / EXPRESSION",
    headline: "Good ideas misbehave.",
    description:
      "A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",
    color: "#cbff54",
    background: "#171916",
    tags: ["Kinetic typography", "Horizontal scroll", "3D card stack"],
    chapters: [
      "Make some noise",
      "Selected experiments",
      "A useful kind of chaos",
      "Start something",
    ],
  },
  {
    id: "floraison",
    cover: "/motion/floraison-cover.png",
    number: "03",
    name: "Floraison",
    category: "JOURNAL / NATURE",
    headline: "Nothing blooms in a hurry.",
    description:
      "An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",
    color: "#9e4a38",
    background: "#f3eedf",
    tags: ["3D bloom", "Layered parallax", "Field-note journey"],
    chapters: [
      "A small beginning",
      "Anatomy of a bloom",
      "Collected in the field",
      "Let things grow",
    ],
  },
  {
    id: "monolith",
    cover: "/motion/monolith-cover.png",
    number: "04",
    name: "Monolith",
    category: "ARCHITECTURE / SPACE",
    headline: "Space is a feeling.",
    description:
      "An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",
    color: "#c34f32",
    background: "#dedbd2",
    tags: ["Exploded architecture", "Living blueprints", "Spatial transitions"],
    chapters: [
      "A sense of place",
      "Drawn from the inside",
      "Studies in space",
      "Build a possibility",
    ],
  },
  {
    id: "pelagic",
    cover: "/motion/pelagic-cover.jpg",
    number: "05",
    name: "Pelagic",
    category: "EXPEDITION / OCEAN",
    headline: "Below the known.",
    description:
      "A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",
    color: "#d8fc81",
    background: "#051c29",
    tags: ["Cinematic descent", "Sonar cartography", "Specimen theatre"],
    chapters: [
      "Leave the surface",
      "Read the unseen",
      "Life without sunlight",
      "Stay curious",
    ],
  },
  {
    id: "heliograph",
    cover: "/motion/heliograph-cover.jpg",
    number: "06",
    name: "Heliograph",
    category: "OBSERVATORY / COSMOS",
    headline: "A closer kind of infinity.",
    description:
      "An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",
    color: "#ed9f51",
    background: "#171819",
    tags: ["Orbital mechanics", "Scroll-built eclipse", "Celestial atlas"],
    chapters: [
      "An instrument for wonder",
      "Between light and shadow",
      "A field guide to infinity",
      "Keep looking up",
    ],
  },
  {
    id: "afterimage",
    cover: "/motion/afterimage-cover.jpg",
    number: "07",
    name: "Afterimage",
    category: "CINEMA / VISUAL CULTURE",
    headline: "Some things stay with you.",
    description:
      "A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",
    color: "#ef623d",
    background: "#e7e1d3",
    tags: [
      "Mechanical iris",
      "Scroll-directed film",
      "Unspooling contact sheet",
    ],
    chapters: [
      "Open your eyes",
      "Three short stories",
      "Between the frames",
      "Make a lasting impression",
    ],
  },
] as const;
export type MotionId = (typeof motionTemplates)[number]["id"];
export interface MotionConfig {
  brand: string;
  headline: string;
  accent: string;
  email: string;
}
export function defaultMotionConfig(id: MotionId): MotionConfig {
  const t = motionTemplates.find((t) => t.id === id)!;
  return {
    brand: t.name,
    headline: t.headline,
    accent: t.color,
    email: "hello@example.com",
  };
}
export function isMotionId(value: unknown): value is MotionId {
  return motionTemplates.some((t) => t.id === value);
}
export function normalizeMotionConfig(
  value: Partial<MotionConfig>,
  id: MotionId,
): MotionConfig {
  const fallback = defaultMotionConfig(id);
  const text = (v: unknown, max: number, defaultValue: string) =>
    typeof v === "string" && v.trim() ? v.trim().slice(0, max) : defaultValue;
  return {
    brand: text(value.brand, 32, fallback.brand),
    headline: text(value.headline, 85, fallback.headline),
    accent: /^#[0-9a-f]{6}$/i.test(value.accent ?? "")
      ? value.accent!
      : fallback.accent,
    email:
      typeof value.email === "string" &&
      /^[a-z\d.!#$%&'*+\/=?^_`{|}~-]+@[a-z\d.-]+\.[a-z]{2,}$/i.test(value.email)
        ? value.email.slice(0, 120)
        : fallback.email,
  };
}
