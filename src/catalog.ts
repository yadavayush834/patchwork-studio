import type {
  World,
  WorldInfo,
  Background,
  Decoration,
  FontPair,
  Motion,
  SectionKind,
  Project,
  SiteSection,
} from "./types";
export const uid = () => crypto.randomUUID();
export const worlds: WorldInfo[] = [
  {
    id: "pixel",
    name: "Pixel daydream",
    description: "Little pixels. Big main-character energy.",
    accent: "#8560b8",
    background: "#eee5fa",
    foreground: "#39284c",
    font: "pixel",
    tags: ["Nostalgic", "Playful"],
  },
  {
    id: "terminal",
    name: "After hours",
    description: "For the beautifully curious corners of the web.",
    accent: "#a2ecc0",
    background: "#11251e",
    foreground: "#e2eee5",
    font: "terminal",
    tags: ["ASCII", "Experimental"],
  },
  {
    id: "scrapbook",
    name: "Paper & things",
    description: "A place for your beautifully imperfect ideas.",
    accent: "#b35b3f",
    background: "#faeee2",
    foreground: "#583c31",
    font: "scrapbook",
    tags: ["Tactile", "Expressive"],
  },
  {
    id: "editorial",
    name: "Soft spoken",
    description: "A little less noise. A lot more you.",
    accent: "#526a50",
    background: "#e8eddf",
    foreground: "#28372e",
    font: "editorial",
    tags: ["Editorial", "Considered"],
  },
];
export const sectionKinds: {
  id: SectionKind;
  name: string;
  description: string;
}[] = [
  { id: "hero", name: "Hero", description: "Make an entrance" },
  { id: "about", name: "About", description: "A little of your story" },
  { id: "gallery", name: "Projects", description: "Give your work a home" },
  {
    id: "skills",
    name: "Skills & services",
    description: "What you bring to the table",
  },
  { id: "contact", name: "Contact", description: "Start a conversation" },
  { id: "footer", name: "Footer", description: "A thoughtful sign-off" },
];
export const fontPairs: FontPair[] = [
  {
    id: "pixel",
    name: "Pixel & friendly",
    heading: "Silkscreen",
    body: "DM Sans",
    files: ["Silkscreen", "DMSans"],
  },
  {
    id: "terminal",
    name: "Terminal notes",
    heading: "Space Mono",
    body: "Space Mono",
    files: ["SpaceMono"],
  },
  {
    id: "scrapbook",
    name: "Written by hand",
    heading: "Caveat",
    body: "DM Sans",
    files: ["Caveat", "DMSans"],
  },
  {
    id: "editorial",
    name: "The Sunday edition",
    heading: "Playfair Display",
    body: "DM Sans",
    files: ["PlayfairDisplay", "DMSans"],
  },
  {
    id: "geometric",
    name: "Friendly geometry",
    heading: "Space Grotesk",
    body: "DM Sans",
    files: ["SpaceGrotesk", "DMSans"],
  },
  {
    id: "outfit",
    name: "Studio essentials",
    heading: "Outfit",
    body: "Outfit",
    files: ["Outfit"],
  },
  {
    id: "literary",
    name: "Literary club",
    heading: "Libre Baskerville",
    body: "DM Sans",
    files: ["LibreBaskerville", "DMSans"],
  },
  {
    id: "technical",
    name: "Human / machine",
    heading: "Space Grotesk",
    body: "Space Mono",
    files: ["SpaceGrotesk", "SpaceMono"],
  },
];
const bgNames: Record<World, string[]> = {
  pixel: ["Lavender valley", "Peach horizon", "Midnight meadow", "Cloud drift"],
  terminal: ["Dot matrix", "Quiet signals", "Orbit grid", "Signal loop"],
  scrapbook: ["Graph paper", "Peach notebook", "Greenhouse", "Paper drift"],
  editorial: [
    "Sage architecture",
    "Quiet curves",
    "Gallery wall",
    "Light study",
  ],
};
export const asciiBackgrounds: Background[] = [
  {
    id: "ascii-lotus",
    name: "Night lotus",
    scene: "lotus",
    description:
      "A lotus of light over black water. Its petals glow from the heart and smear into long streaks; rays turn slowly behind it. Tilt it with the cursor, click to make it open.",
    tint: "#ff7aa8",
  },
  {
    id: "ascii-aurora",
    name: "Aurora",
    scene: "aurora",
    description:
      "Northern lights over a mountain lake. Curtains of green and violet rays ripple across the sky and break up in the water. The cursor steers the wind; click to send a surge.",
    tint: "#7dff9b",
  },
  {
    id: "ascii-neon",
    name: "Neon rain",
    scene: "neon",
    description:
      "A city street at night: humming neon signs, windows switching on and off, rain on a slant and a wet street full of reflections. Your cursor carries an umbrella; click for lightning.",
    tint: "#ff4fa3",
  },
  {
    id: "ascii-koi",
    name: "Koi pond",
    scene: "koi",
    description:
      "A garden pond from above. Patterned koi glide under lily pads while light ripples over the floor. Drag ripples through the water; click to drop food and they come for it.",
    tint: "#ff7a2f",
  },
].map((b) => ({
  ...b,
  scene: b.scene as NonNullable<Background["scene"]>,
  type: "ascii",
  world: "terminal",
  preview: `/assets/ascii/${b.scene}.png`,
  source: `/assets/ascii/${b.scene}.webm`,
  css: "",
  license: "CC0-1.0",
}));
/** Retired ASCII studies map to their replacements, so saved projects keep a living background. */
export const legacyBackgroundIds: Record<string, string> = {
  "ascii-sharks": "ascii-koi",
  "ascii-starlings": "ascii-aurora",
  "ascii-fireflies": "ascii-lotus",
  "ascii-incense": "ascii-neon",
  "ascii-jellies": "ascii-lotus",
  "ascii-galaxy": "ascii-aurora",
  "ascii-terrain": "ascii-neon",
};
export const findBackground = (id: string | undefined) =>
  id ? backgrounds.find((b) => b.id === (legacyBackgroundIds[id] ?? id)) : undefined;
export const defaultAscii = (
  b: Background,
): NonNullable<SiteSection["ascii"]> => ({
  mode: "live",
  speed: 1,
  density: 1,
  intensity: 85,
  color: b.tint || "#91dbe8",
});
export const matchesBackground = (b: Background, q: string) =>
  `${b.name} ${b.description || ""} ${b.type} ${b.scene || ""}`
    .toLowerCase()
    .includes(q.toLowerCase());
export const backgrounds: Background[] = [
  ...asciiBackgrounds,
  ...worlds.flatMap((w) =>
    bgNames[w.id].map((name, i) => ({
      id: `${w.id}-${i + 1}`,
      name,
      world: w.id,
      type:
        i === 3
          ? ("video" as const)
          : i === 1
            ? ("css" as const)
            : ("svg" as const),
      preview: `/assets/backgrounds/${w.id}-${i + 1}.svg`,
      source: i === 3 ? `/assets/backgrounds/${w.id}-4.webm` : undefined,
      css:
        i === 1
          ? `linear-gradient(145deg, ${w.background}, ${w.accent}44)`
          : "",
      license: "CC0-1.0",
    })),
  ),
];
const decorIds: Record<World, string[]> = {
  pixel: ["sprout", "mushroom", "cloud", "star", "ghost", "heart"],
  terminal: ["cursor", "orbit", "brackets", "globe", "spark", "cube"],
  scrapbook: ["flower", "tape", "butterfly", "stamp", "sun", "leaf"],
  editorial: ["ring", "arch", "asterisk", "wave", "diamond", "grid"],
};
export const decorations: Decoration[] = worlds.flatMap((w) =>
  decorIds[w.id].map((id, i) => ({
    id,
    name: id[0].toUpperCase() + id.slice(1),
    world: w.id,
    source: `/assets/decor/${id}.svg`,
    animated: i % 2 === 0,
    license: "CC0-1.0",
  })),
);
export const interactions: { id: Motion; name: string; description: string }[] =
  [
    { id: "none", name: "Still", description: "A quiet moment" },
    {
      id: "reveal",
      name: "Soft entrance",
      description: "Appear as you scroll",
    },
    { id: "lift", name: "Hover lift", description: "A little lift on hover" },
    { id: "float", name: "Gentle float", description: "A slow, airy movement" },
    { id: "idle", name: "Sprite idle", description: "A playful little bob" },
    {
      id: "track",
      name: "Follow along",
      description: "A bounded response to your cursor",
    },
    {
      id: "feedback",
      name: "Click feedback",
      description: "A satisfying press",
    },
  ];
const titles: Record<World, string[]> = {
  pixel: [
    "A little curious.\nA little creative.",
    "Small things,\nbig feelings.",
    "Things I’ve made",
    "A few of my superpowers",
    "Let’s make\nsomething lovely.",
    "See you around the internet.",
  ],
  terminal: [
    "HELLO,\nCURIOUS HUMAN_",
    "A human behind\nthe keyboard.",
    "Selected experiments",
    "Tools in my orbit",
    "OPEN A\nCONVERSATION_",
    "END OF PAGE / START OF SOMETHING",
  ],
  scrapbook: [
    "A collection of\nlittle obsessions.",
    "Some notes\nabout me.",
    "Made with a little love",
    "Good things I can help with",
    "Have an idea?\nLet’s scribble.",
    "Made slowly, with feeling.",
  ],
  editorial: [
    "Thoughtful work.\nA curious mind.",
    "Making room for\nwhat matters.",
    "Selected work",
    "A considered approach",
    "Good things begin\nwith a conversation.",
    "Thank you for spending a moment.",
  ],
};
export function createSection(kind: SectionKind, world: World): SiteSection {
  const wi = worlds.find((w) => w.id === world)!;
  const idx = sectionKinds.findIndex((s) => s.id === kind);
  const body =
    kind === "hero"
      ? "I’m Alex, a designer, maker, and collector of small wonders. Welcome to my little corner of the internet."
      : kind === "about"
        ? "I follow my curiosity wherever it goes. Sometimes that means designing a thoughtful experience, sometimes making something just for the joy of it. This is a home for the things I’m learning, building, and becoming."
        : kind === "contact"
          ? "Have something in mind, or just want to say hello? My inbox is a friendly place."
          : "A few things I’ve been putting my heart into lately. Always exploring, always making.";
  return {
    id: uid(),
    kind,
    world,
    title: titles[world][idx],
    eyebrow:
      kind === "hero"
        ? "DESIGNER, MAKER & DAYDREAMER"
        : kind === "about"
          ? "A LITTLE INTRODUCTION"
          : kind === "gallery"
            ? "SELECTED WORK"
            : kind === "skills"
              ? "WHAT I DO"
              : kind === "contact"
                ? "SAY HELLO"
                : "ALEX STUDIO",
    body,
    button:
      kind === "hero"
        ? "Explore my work"
        : kind === "contact"
          ? "hello@alex.studio"
          : "Learn more",
    link:
      kind === "hero"
        ? "#work"
        : kind === "contact"
          ? "mailto:hello@alex.studio"
          : "#contact",
    imageAlt: "",
    background: kind === "hero" ? `${world}-1` : "none",
    videoFit: "cover",
    videoPosition: 50,
    overlay: 0,
    visible: true,
    padding: kind === "hero" ? 80 : 64,
    width: 1080,
    align: kind === "hero" ? "center" : "left",
    radius: 16,
    shadow: 0,
    motion: "none",
    duration: 3,
    variation: 0,
    locks: { background: false, world: false, motion: false },
    elements:
      kind === "hero"
        ? [
            {
              id: uid(),
              asset: decorIds[world][0],
              x: 12,
              y: 65,
              mobileX: 10,
              mobileY: 82,
              size: 75,
              rotation: -12,
              layer: 1,
              hideMobile: false,
              color: wi.accent,
              motion: "float",
            },
            {
              id: uid(),
              asset: decorIds[world][3],
              x: 85,
              y: 28,
              mobileX: 87,
              mobileY: 15,
              size: 65,
              rotation: 12,
              layer: 1,
              hideMobile: false,
              color: wi.accent,
              motion: "idle",
            },
          ]
        : [],
    items:
      kind === "skills"
        ? [
            {
              title: "Design & direction",
              body: "Thoughtful ideas, brought to life.",
            },
            {
              title: "Creative development",
              body: "Experiences with a little personality.",
            },
            {
              title: "Art & exploration",
              body: "Curiosity is part of the process.",
            },
          ]
        : [
            { title: "A study in slow", body: "Identity / Art direction" },
            { title: "Everyday wonders", body: "Digital / Exploration" },
            { title: "Somewhere new", body: "Personal / Experiments" },
          ],
  };
}
export function createProject(world: World, blank = false): Project {
  const w = worlds.find((v) => v.id === world)!;
  return {
    version: 1,
    id: uid(),
    name: blank ? "Untitled little website" : `${w.name} — my website`,
    createdAt: Date.now(),
    updatedAt: Date.now(),
    world,
    theme: {
      accent: w.accent,
      background: w.background,
      foreground: w.foreground,
      font: w.font,
    },
    sections: blank ? [] : sectionKinds.map((s) => createSection(s.id, world)),
  };
}
