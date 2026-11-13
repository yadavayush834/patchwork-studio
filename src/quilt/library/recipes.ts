/**
 * Section recipes. A recipe is a kind of section (hero, features, pricing…) with several layouts. Every
 * layout builds elements from the same Content, and tags each with a slot ("title", "i1-body"…).
 * That is what makes Rearrange work: read the content back out of the slots, build another layout,
 * keep everything the person wrote. To add a layout, add a `build` that places the same slots differently.
 *
 * Grid reminder: 96 columns across 1200px (12.5px each), rows of 8px.
 */
import type { El, Section, SectionBackground, Seam } from "../model";
import { uid } from "../model";
import { text, button, image, shape, icon, line, wid } from "./build";

export interface Item {
  title: string;
  body: string;
  icon?: string;
  image?: string;
  value?: string;
  extra?: string;
}
export interface Content {
  eyebrow?: string;
  title?: string;
  body?: string;
  cta?: string;
  cta2?: string;
  ctaLink?: string;
  images?: string[];
  items?: Item[];
  quote?: string;
  author?: string;
  brand?: string;
  date?: string;
  email?: string;
  /** Widget props carried across layouts (form fields, faq items…), by slot. */
  widgets?: Record<string, Record<string, unknown>>;
}

export interface Layout {
  id: string;
  name: string;
  build: (c: Content) => { rows: number; elements: El[]; bg?: Partial<SectionBackground>; fullscreen?: boolean; seam?: Seam; sticky?: boolean };
}
export interface Recipe {
  kind: string;
  name: string;
  line: string;
  icon: string;
  sample: Content;
  layouts: Layout[];
}

const img = (c: Content, i: number, fallback = "stock:hills") => c.images?.[i] ?? c.images?.[0] ?? fallback;
const items = (c: Content, n: number, fill: Item[]) => Array.from({ length: n }, (_, i) => c.items?.[i] ?? fill[i % fill.length]);
const w = (c: Content, slot: string) => c.widgets?.[slot] ?? {};

const FEATURES: Item[] = [
  { title: "Made by hand", body: "Every piece is shaped, fired and finished in our little studio.", icon: "pen" },
  { title: "Kind to the planet", body: "Local clay, recycled packaging and no plastic, ever.", icon: "leaf" },
  { title: "Here for good", body: "Chip something? Send it back and we'll mend it for free.", icon: "heart" },
];

export const RECIPES: Recipe[] = [
  {
    kind: "header",
    name: "Header",
    line: "Your name and menu, on every page.",
    icon: "home",
    sample: { brand: "Little Studio", cta: "Say hello" },
    layouts: [
      { id: "classic", name: "Name left, menu right", build: (c) => ({ rows: 11, elements: [
        text("brand", c.brand ?? "Little Studio", [0, 3, 30, 5], "h3", { size: 22 }),
        wid("menu", "menu", [40, 3, 40, 5], w(c, "menu")),
        button("cta", c.cta ?? "Say hello", [82, 2, 14, 7], "pill", "$ink", { size: "s", icon: "none" }, c.ctaLink ?? "#contact"),
      ] }) },
      { id: "centered", name: "Name in the middle", build: (c) => ({ rows: 18, elements: [
        text("brand", c.brand ?? "Little Studio", [24, 2, 48, 7], "h3", { size: 30, align: "center" }),
        wid("menu", "menu", [16, 10, 64, 5], { ...w(c, "menu"), align: "center" }),
        button("cta", c.cta ?? "Say hello", [82, 4, 14, 7], "pill", "$ink", { size: "s", icon: "none" }, c.ctaLink ?? "#contact"),
      ] }) },
      { id: "minimal", name: "Just the essentials", build: (c) => ({ rows: 10, elements: [
        shape("asterisk", [0, 3, 3, 4], "$accent", { slot: "mark" }),
        text("brand", c.brand ?? "Little Studio", [4, 3, 30, 4], "h3", { size: 19 }),
        wid("menu", "menu", [38, 3, 42, 4], w(c, "menu")),
        button("cta", c.cta ?? "Say hello", [82, 2, 14, 6], "link", "$ink", { size: "s", icon: "arrow" }, c.ctaLink ?? "#contact"),
      ] }) },
    ],
  },
  {
    kind: "hero",
    name: "Opening",
    line: "The first thing people see. Make it count.",
    icon: "sparkle",
    sample: { eyebrow: "Hello, I'm glad you're here", title: "Small things, made with a lot of care.", body: "A short line that says what you do and who it's for. Keep it warm and simple.", cta: "See the work", cta2: "Get in touch", images: ["stock:ceramics"] },
    layouts: [
      { id: "split", name: "Words and a picture", build: (c) => ({ rows: 78, elements: [
        text("eyebrow", c.eyebrow ?? "", [0, 16, 44, 3], "label", { color: "$accent" }),
        text("title", c.title ?? "", [0, 21, 47, 24], "display", { size: 76 }),
        text("body", c.body ?? "", [0, 47, 40, 9], "body", { size: 19, color: "$muted" }),
        button("cta", c.cta ?? "Start here", [0, 59, 17, 7], "solid", "$accent", {}, c.ctaLink ?? "#"),
        button("cta2", c.cta2 ?? "Learn more", [18, 59, 15, 7], "outline", "$ink"),
        image("image", img(c, 0), "", [52, 7, 44, 66], { mask: "arch" }),
        shape("sparkle", [86, 4, 9, 11], "$accent2", { anim: { loop: "spin" } }),
        shape("circle", [48, 62, 7, 9], "$accent3"),
      ] }) },
      { id: "center", name: "Big and centred", build: (c) => ({ rows: 74, elements: [
        shape("blob", [-0, 8, 15, 22], "$accent3", { opacity: 70, anim: { loop: "float" } }),
        shape("star", [84, 46, 10, 13], "$accent2", { anim: { loop: "spin" } }),
        shape("squiggle", [72, 9, 14, 6], "$accent"),
        text("eyebrow", c.eyebrow ?? "", [24, 13, 48, 3], "label", { align: "center", color: "$accent" }),
        text("title", c.title ?? "", [8, 18, 80, 24], "display", { size: 92, align: "center" }),
        text("body", c.body ?? "", [24, 44, 48, 8], "body", { align: "center", size: 19, color: "$muted" }),
        button("cta", c.cta ?? "Start here", [31, 56, 16, 7], "solid", "$accent", {}, c.ctaLink ?? "#"),
        button("cta2", c.cta2 ?? "Learn more", [49, 56, 16, 7], "outline", "$ink"),
      ] }) },
      { id: "cover", name: "Full-screen photo", build: (c) => ({ rows: 80, fullscreen: true, bg: { image: img(c, 0), dim: 45, dimColor: "#120f14", fill: "#1a1720" }, elements: [
        text("eyebrow", c.eyebrow ?? "", [20, 22, 56, 3], "label", { align: "center", color: "#ffffff" }),
        text("title", c.title ?? "", [6, 27, 84, 24], "display", { size: 96, align: "center", color: "#ffffff" }),
        text("body", c.body ?? "", [24, 53, 48, 8], "body", { align: "center", size: 19, color: "#f1ece4" }),
        button("cta", c.cta ?? "Start here", [32, 64, 16, 7], "solid", "$accent", {}, c.ctaLink ?? "#"),
        button("cta2", c.cta2 ?? "Learn more", [49, 64, 15, 7], "outline", "#ffffff"),
      ] }) },
      { id: "collage", name: "Scrapbook collage", build: (c) => ({ rows: 84, elements: [
        text("eyebrow", c.eyebrow ?? "", [0, 18, 40, 3], "label", { color: "$accent" }),
        text("title", c.title ?? "", [0, 23, 44, 24], "display", { size: 70 }),
        shape("swoosh", [2, 48, 22, 4], "$accent2"),
        text("body", c.body ?? "", [0, 54, 38, 9], "body", { color: "$muted" }),
        button("cta", c.cta ?? "Start here", [0, 66, 17, 7], "sticker", "$accent3", { text: "$ink" }, c.ctaLink ?? "#"),
        button("cta2", c.cta2 ?? "Learn more", [19, 66, 14, 7], "link", "$ink"),
        image("image", img(c, 0), "", [50, 8, 28, 40, -5], { frameStyle: "polaroid", caption: "this week" }),
        image("image2", img(c, 1, "stock:flowers"), "", [70, 26, 26, 36, 6], { frameStyle: "tape" }),
        image("image3", img(c, 2, "stock:desk"), "", [52, 50, 26, 30, -2], { frameStyle: "polaroid" }),
        shape("heart", [84, 8, 7, 9], "$accent", { anim: { loop: "pulse" } }),
        shape("loop-arrow", [36, 70, 14, 10], "$ink", { opacity: 70 }),
      ] }) },
      { id: "poster", name: "Poster type", build: (c) => ({ rows: 86, elements: [
        text("eyebrow", c.eyebrow ?? "", [0, 8, 50, 3], "label", { color: "$accent" }),
        text("title", c.title ?? "", [0, 12, 96, 36], "display", { size: 140, lineHeight: 0.92 }),
        image("image", img(c, 0), "", [0, 51, 58, 30], { radius: 4 }),
        text("body", c.body ?? "", [62, 53, 34, 12], "body", { size: 20 }),
        button("cta", c.cta ?? "Start here", [62, 70, 18, 7], "solid", "$ink", {}, c.ctaLink ?? "#"),
        button("cta2", c.cta2 ?? "Learn more", [82, 70, 14, 7], "link", "$ink"),
        shape("burst", [84, 40, 12, 15], "$accent2", { anim: { loop: "spin" } }),
      ] }) },
    ],
  },
  {
    kind: "features",
    name: "Highlights",
    line: "Three things worth knowing, side by side.",
    icon: "star",
    sample: { title: "Why people love it", body: "A few honest reasons, in plain words.", items: FEATURES },
    layouts: [
      { id: "cards", name: "Cards", build: (c) => {
        const els: El[] = [
          text("title", c.title ?? "", [16, 9, 64, 7], "h2", { align: "center" }),
          text("body", c.body ?? "", [22, 17, 52, 4], "body", { align: "center", color: "$muted" }),
        ];
        items(c, 3, FEATURES).forEach((it, i) => {
          const x = i * 33;
          els.push(
            shape("rect", [x, 27, 30, 36], "$surface", { slot: `i${i}-box`, radius: 22 }),
            icon(`i${i}-icon`, it.icon ?? "star", [x + 3, 31, 5, 6], "$accent", "$bg"),
            text(`i${i}-title`, it.title, [x + 3, 41, 24, 4], "h3"),
            text(`i${i}-body`, it.body, [x + 3, 46, 24, 12], "small", { size: 16 }),
          );
        });
        return { rows: 72, elements: els };
      } },
      { id: "numbered", name: "Numbered columns", build: (c) => {
        const els: El[] = [
          text("title", c.title ?? "", [0, 9, 44, 12], "h2"),
          text("body", c.body ?? "", [56, 11, 40, 6], "body", { color: "$muted" }),
          line([0, 26, 96, 1], "stitch", "$ink", 2),
        ];
        items(c, 3, FEATURES).forEach((it, i) => {
          const x = i * 33;
          els.push(
            text(`i${i}-value`, `0${i + 1}`, [x, 31, 10, 7], "h2", { color: "$accent", size: 40 }),
            text(`i${i}-title`, it.title, [x, 40, 28, 4], "h3"),
            text(`i${i}-body`, it.body, [x, 45, 28, 10], "body", { size: 16, color: "$muted" }),
          );
        });
        return { rows: 62, elements: els };
      } },
      { id: "bento", name: "Bento", build: (c) => {
        const [a, b, d] = items(c, 3, FEATURES);
        return { rows: 84, elements: [
          text("title", c.title ?? "", [0, 8, 56, 7], "h2"),
          text("body", c.body ?? "", [62, 9, 34, 6], "body", { color: "$muted", align: "right" }),
          shape("rect", [0, 19, 47, 60], "$accent", { slot: "i0-box", radius: 26 }),
          image("i0-image", a.image ?? img(c, 0, "stock:desk"), "", [3, 22, 41, 30], { radius: 16 }),
          text("i0-title", a.title, [3, 55, 40, 5], "h3", { color: "$bg", size: 28 }),
          text("i0-body", a.body, [3, 61, 40, 12], "body", { color: "$bg", size: 16 }),
          shape("rect", [49, 19, 47, 29], "$surface", { slot: "i1-box", radius: 26 }),
          icon("i1-icon", b.icon ?? "leaf", [52, 23, 5, 6], "$accent", "$bg"),
          text("i1-title", b.title, [52, 32, 40, 4], "h3"),
          text("i1-body", b.body, [52, 37, 40, 8], "small", { size: 16 }),
          shape("rect", [49, 50, 47, 29], "$accent3", { slot: "i2-box", radius: 26 }),
          icon("i2-icon", d.icon ?? "heart", [52, 54, 5, 6], "$ink", "$bg"),
          text("i2-title", d.title, [52, 63, 40, 4], "h3"),
          text("i2-body", d.body, [52, 68, 40, 8], "small", { size: 16, color: "$ink" }),
        ] };
      } },
    ],
  },
  {
    kind: "about",
    name: "About",
    line: "A picture and a few honest paragraphs.",
    icon: "user",
    sample: { eyebrow: "About", title: "Hi, I'm Rosa. I make things slowly.", body: "I started with one wobbly bowl in a borrowed kiln. Ten years later the studio is still small, the kiln is mine, and every piece still goes through my hands.\n\nWhen I'm not at the wheel I'm walking the dog, or out looking for the next glaze colour.", cta: "Read the story", images: ["stock:portrait"], author: "Rosa" },
    layouts: [
      { id: "image-left", name: "Picture left", build: (c) => ({ rows: 76, elements: [
        image("image", img(c, 0, "stock:portrait"), "", [0, 9, 42, 58], { frameStyle: "stack" }),
        text("eyebrow", c.eyebrow ?? "", [50, 12, 40, 3], "label", { color: "$accent" }),
        text("title", c.title ?? "", [50, 17, 46, 14], "h2"),
        text("body", c.body ?? "", [50, 33, 42, 22], "body", { color: "$muted" }),
        text("author", c.author ?? "", [50, 56, 30, 5], "h3", { font: "caveat", size: 32, color: "$accent" }),
        button("cta", c.cta ?? "More about me", [50, 63, 18, 7], "link", "$ink", { icon: "arrow" }),
      ] }) },
      { id: "portrait", name: "Round portrait", build: (c) => ({ rows: 94, elements: [
        image("image", img(c, 0, "stock:portrait"), "", [38, 7, 20, 26], { mask: "circle" }),
        shape("asterisk", [56, 6, 5, 6], "$accent", { anim: { loop: "spin" } }),
        text("eyebrow", c.eyebrow ?? "", [24, 36, 48, 3], "label", { align: "center", color: "$accent" }),
        text("title", c.title ?? "", [12, 41, 72, 14], "h2", { align: "center" }),
        text("body", c.body ?? "", [20, 57, 56, 18], "body", { align: "center", color: "$muted" }),
        text("author", c.author ?? "with love", [30, 76, 36, 5], "h3", { align: "center", font: "caveat", size: 32, color: "$accent" }),
        button("cta", c.cta ?? "More about me", [40, 83, 16, 6], "link", "$ink", { icon: "arrow" }),
      ] }) },
      { id: "letter", name: "A letter", build: (c) => ({ rows: 80, bg: { pattern: "lines", patternColor: "$accent2", patternOpacity: 30 }, elements: [
        shape("rect", [14, 6, 68, 68], "$surface", { slot: "paper", radius: 4, frame: { x: 14, y: 6, w: 68, h: 68 } }),
        text("eyebrow", c.eyebrow ?? "", [20, 12, 50, 3], "label", { color: "$accent" }),
        text("title", c.title ?? "", [20, 17, 56, 12], "h2", { size: 40 }),
        text("body", c.body ?? "", [20, 31, 56, 28], "body", { size: 19 }),
        text("author", c.author ?? "With love", [20, 60, 40, 6], "h3", { font: "caveat", size: 40, color: "$accent" }),
        button("cta", c.cta ?? "Read more", [20, 67, 16, 5], "link", "$ink", { icon: "arrow" }),
        image("image", img(c, 0, "stock:portrait"), "", [66, 52, 18, 22, 8], { frameStyle: "polaroid" }),
      ] }) },
    ],
  },
  {
    kind: "gallery",
    name: "Gallery",
    line: "Show the work. Pictures do the talking.",
    icon: "camera",
    sample: { title: "Recent work", body: "A few favourites from this season.", images: ["stock:ceramics", "stock:desk", "stock:flowers", "stock:food", "stock:hills"] },
    layouts: [
      { id: "grid", name: "Tidy grid", build: (c) => ({ rows: 92, elements: [
        text("title", c.title ?? "", [0, 8, 50, 7], "h2"),
        text("body", c.body ?? "", [60, 9, 36, 5], "body", { color: "$muted", align: "right" }),
        image("image", img(c, 0), "", [0, 19, 31, 32]),
        image("image2", img(c, 1), "", [32.5 as number, 19, 31, 32]),
        image("image3", img(c, 2), "", [65, 19, 31, 32]),
        image("image4", img(c, 3), "", [0, 53, 47, 32]),
        image("image5", img(c, 4), "", [49, 53, 47, 32]),
      ].map((e) => ({ ...e, frame: { ...e.frame, x: Math.round(e.frame.x) } })) }) },
      { id: "polaroids", name: "Polaroids on a table", build: (c) => ({ rows: 90, bg: { pattern: "checks", patternColor: "$accent", patternOpacity: 14 }, elements: [
        text("title", c.title ?? "", [24, 7, 48, 7], "h2", { align: "center", font: "caveat", size: 56 }),
        text("body", c.body ?? "", [24, 15, 48, 4], "body", { align: "center", color: "$muted" }),
        image("image", img(c, 0), "", [2, 22, 26, 34, -6], { frameStyle: "polaroid", caption: "one" }),
        image("image2", img(c, 1), "", [26, 30, 26, 34, 4], { frameStyle: "polaroid", caption: "two" }),
        image("image3", img(c, 2), "", [50, 20, 26, 34, -3], { frameStyle: "polaroid", caption: "three" }),
        image("image4", img(c, 3), "", [72, 32, 24, 32, 7], { frameStyle: "tape" }),
        shape("heart", [46, 68, 5, 6], "$accent", { anim: { loop: "pulse" } }),
      ] }) },
      { id: "arches", name: "Arches", build: (c) => ({ rows: 76, elements: [
        text("title", c.title ?? "", [20, 8, 56, 7], "h2", { align: "center" }),
        text("body", c.body ?? "", [24, 16, 48, 4], "body", { align: "center", color: "$muted" }),
        image("image", img(c, 0), "", [0, 26, 22, 40], { mask: "arch" }),
        image("image2", img(c, 1), "", [24.6 as number, 30, 22, 40], { mask: "arch" }),
        image("image3", img(c, 2), "", [49, 26, 22, 40], { mask: "arch" }),
        image("image4", img(c, 3), "", [74, 30, 22, 40], { mask: "arch" }),
      ].map((e) => ({ ...e, frame: { ...e.frame, x: Math.round(e.frame.x) } })) }) },
    ],
  },
  {
    kind: "testimonial",
    name: "Kind words",
    line: "What people say about you.",
    icon: "chat",
    sample: { quote: "The mug I drink from every morning. It somehow makes the coffee taste better.", author: "Jun, a regular", items: [{ title: "Sam", body: "Wrapped like a present, arrived like a hug." }, { title: "Priya", body: "I've bought four now. One for me, three for people I love." }, { title: "Theo", body: "Beautiful, sturdy and honest. Exactly as promised." }] },
    layouts: [
      { id: "big-quote", name: "One big quote", build: (c) => ({ rows: 60, elements: [
        shape("asterisk", [44, 6, 8, 9], "$accent", { anim: { loop: "spin" } }),
        text("title", c.title ?? "Kind words", [30, 15, 36, 3], "label", { align: "center", color: "$accent" }),
        text("quote", c.quote ?? "", [10, 20, 76, 22], "quote", { size: 42, align: "center" }),
        text("author", c.author ?? "", [28, 46, 40, 4], "label", { align: "center" }),
      ] }) },
      { id: "cards", name: "Three cards", build: (c) => {
        const els: El[] = [
          text("title", c.title ?? "Kind words", [20, 8, 56, 7], "h2", { align: "center" }),
          text("quote", c.quote ?? "", [14, 17, 68, 5], "quote", { size: 22, align: "center", color: "$muted" }),
          text("author", c.author ?? "", [30, 23, 36, 3], "label", { align: "center" }),
        ];
        items(c, 3, [{ title: "Sam", body: "Wrapped like a present, arrived like a hug." }]).forEach((it, i) => {
          const x = i * 33;
          els.push(
            shape("rect", [x, 31, 30, 30], "$surface", { slot: `i${i}-box`, radius: 20 }),
            icon(`i${i}-icon`, "star", [x + 3, 34, 3, 4], "$accent2"),
            text(`i${i}-body`, `“${it.body.replace(/^“|”$/g, "")}”`, [x + 3, 39, 24, 13], "body", { size: 18 }),
            text(`i${i}-title`, it.title, [x + 3, 54, 24, 3], "label"),
          );
        });
        return { rows: 68, elements: els };
      } },
    ],
  },
  {
    kind: "pricing",
    name: "Prices",
    line: "Plans or packages, clearly laid out.",
    icon: "bag",
    sample: { title: "Simple prices", body: "No surprises. Change or cancel whenever you like.", items: [{ title: "Sprout", value: "£9", body: "For trying things out", extra: "One project\nEmail help\nAll the basics" }, { title: "Bloom", value: "£19", body: "For most people", extra: "Five projects\nPriority help\nEverything in Sprout" }, { title: "Orchard", value: "£49", body: "For teams", extra: "Unlimited projects\nA real human on call\nEverything in Bloom" }] },
    layouts: [
      { id: "tiers", name: "Three tiers", build: (c) => {
        const els: El[] = [
          text("title", c.title ?? "", [20, 8, 56, 7], "h2", { align: "center" }),
          text("body", c.body ?? "", [24, 16, 48, 4], "body", { align: "center", color: "$muted" }),
        ];
        items(c, 3, [{ title: "Plan", value: "£9", body: "For you", extra: "A thing\nAnother thing" }]).forEach((it, i) => {
          const x = i * 33, hot = i === 1;
          const ink = hot ? "$bg" : "$ink";
          els.push(
            shape("rect", [x, 26, 30, 54], hot ? "$ink" : "$surface", { slot: `i${i}-box`, radius: 24 }),
            text(`i${i}-title`, it.title, [x + 3, 30, 24, 3], "label", { color: hot ? "$accent2" : "$accent" }),
            text(`i${i}-value`, it.value ?? "", [x + 3, 35, 24, 8], "h1", { size: 56, color: ink }),
            text(`i${i}-body`, it.body, [x + 3, 44, 24, 3], "small", { color: hot ? "$accent3" : "$muted" }),
            wid(`i${i}-list`, "list", [x + 3, 50, 24, 16], { items: (it.extra ?? "").split("\n").filter(Boolean), marker: "check", size: 16 }, { color: ink, accent: hot ? "$accent2" : "$accent" }),
            button(`i${i}-cta`, "Choose", [x + 3, 70, 24, 7], hot ? "solid" : "outline", hot ? "$accent2" : "$ink", { full: true, icon: "none" }),
          );
        });
        return { rows: 88, elements: els };
      } },
    ],
  },
  {
    kind: "cta",
    name: "Call to action",
    line: "One clear thing for people to do next.",
    icon: "bolt",
    sample: { title: "Ready when you are.", body: "Pop in, write to us, or just say hello.", cta: "Say hello" },
    layouts: [
      { id: "banner", name: "Bold banner", build: (c) => ({ rows: 52, bg: { fill: "$accent" }, elements: [
        text("title", c.title ?? "", [12, 12, 72, 12], "h1", { align: "center", color: "$bg" }),
        text("body", c.body ?? "", [24, 26, 48, 4], "body", { align: "center", color: "$bg" }),
        button("cta", c.cta ?? "Go", [38, 35, 20, 7], "solid", "$bg", { text: "$ink" }, c.ctaLink ?? "#"),
        shape("sparkle", [6, 8, 8, 10], "$accent2", { anim: { loop: "spin" } }),
        shape("sparkle", [84, 30, 6, 8], "$bg", { opacity: 70, anim: { loop: "pulse" } }),
      ] }) },
      { id: "card", name: "Floating card", build: (c) => ({ rows: 56, elements: [
        shape("rect", [6, 8, 84, 40], "$ink", { slot: "box", radius: 32 }),
        text("title", c.title ?? "", [12, 15, 50, 14], "h2", { color: "$bg" }),
        text("body", c.body ?? "", [12, 31, 46, 4], "body", { color: "$accent3" }),
        button("cta", c.cta ?? "Go", [66, 22, 18, 8], "solid", "$accent2", { text: "$ink", size: "l" }, c.ctaLink ?? "#"),
        shape("burst", [80, 3, 10, 12], "$accent", { anim: { loop: "spin" } }),
      ] }) },
    ],
  },
  {
    kind: "contact",
    name: "Contact",
    line: "A form and the ways to find you.",
    icon: "mail",
    sample: { eyebrow: "Contact", title: "Let's make something together.", body: "Tell us a little about what you have in mind and we'll write back within two days.", email: "hello@example.com", items: [{ title: "Email", body: "hello@example.com", icon: "mail" }, { title: "Studio", body: "12 Kiln Lane, Bristol", icon: "pin" }, { title: "Hours", body: "Thu to Sat, 10 till 4", icon: "clock" }] },
    layouts: [
      { id: "form", name: "Form and details", build: (c) => {
        const els: El[] = [
          text("eyebrow", c.eyebrow ?? "", [0, 10, 40, 3], "label", { color: "$accent" }),
          text("title", c.title ?? "", [0, 15, 42, 14], "h2"),
          text("body", c.body ?? "", [0, 31, 40, 8], "body", { color: "$muted" }),
          shape("rect", [50, 8, 46, 64], "$surface", { slot: "box", radius: 24 }),
          wid("form", "form", [54, 12, 38, 56], w(c, "form")),
        ];
        items(c, 3, [{ title: "Email", body: "hello@example.com", icon: "mail" }]).forEach((it, i) => {
          els.push(icon(`i${i}-icon`, it.icon ?? "mail", [0, 43 + i * 8, 3, 4], "$accent"), text(`i${i}-body`, it.body, [5, 43 + i * 8, 38, 4], "body", { size: 17 }));
        });
        return { rows: 80, elements: els };
      } },
      { id: "big-email", name: "Big email", build: (c) => ({ rows: 62, elements: [
        text("eyebrow", c.eyebrow ?? "", [24, 10, 48, 3], "label", { align: "center", color: "$accent" }),
        text("title", c.title ?? "", [12, 15, 72, 10], "h2", { align: "center" }),
        { ...text("email", c.email ?? "hello@example.com", [6, 28, 84, 10], "h1", { align: "center", size: 64, effect: "scribble", effectColor: "$accent" }), link: { kind: "email", value: c.email ?? "hello@example.com" } },
        text("body", c.body ?? "", [20, 40, 56, 4], "body", { align: "center", color: "$muted" }),
        wid("social", "social", [26, 47, 44, 6], { ...w(c, "social"), style: "pills" }, { name: "Social links" }),
      ] }) },
    ],
  },
  {
    kind: "faq",
    name: "Questions",
    line: "Answers before anyone has to ask.",
    icon: "chat",
    sample: { title: "Good questions", body: "Still wondering? Write to us any time." },
    layouts: [
      { id: "side", name: "Title beside", build: (c) => ({ rows: 64, elements: [
        text("title", c.title ?? "", [0, 9, 34, 12], "h2"),
        text("body", c.body ?? "", [0, 23, 30, 6], "body", { color: "$muted" }),
        wid("faq", "faq", [40, 9, 56, 46], w(c, "faq")),
      ] }) },
      { id: "center", name: "Centred", build: (c) => ({ rows: 70, elements: [
        text("title", c.title ?? "", [20, 8, 56, 7], "h2", { align: "center" }),
        text("body", c.body ?? "", [24, 16, 48, 4], "body", { align: "center", color: "$muted" }),
        wid("faq", "faq", [16, 24, 64, 40], w(c, "faq")),
      ] }) },
    ],
  },
  {
    kind: "stats",
    name: "Numbers",
    line: "Proof, in big friendly numbers.",
    icon: "chart",
    sample: { title: "A decade of small things", body: "", widgets: {} },
    layouts: [
      { id: "row", name: "In a row", build: (c) => ({ rows: 44, elements: [
        text("title", c.title ?? "", [0, 9, 40, 12], "h2", { size: 38 }),
        wid("stats", "stats", [44, 10, 52, 14], w(c, "stats")),
        line([0, 34, 96, 1], "dashed", "$muted", 1),
      ] }) },
      { id: "band", name: "Colour band", build: (c) => ({ rows: 50, bg: { fill: "$ink" }, elements: [
        text("title", c.title ?? "", [16, 8, 64, 5], "label", { align: "center", color: "$accent2" }),
        wid("stats", "stats", [6, 18, 84, 16], w(c, "stats"), { color: "$bg", accent: "$accent2" }),
      ] }) },
    ],
  },
  {
    kind: "menu",
    name: "Menu & prices",
    line: "Dishes, services or products with prices.",
    icon: "coffee",
    sample: { title: "On the counter today", items: [{ title: "Flat white", body: "Our house blend, oat or dairy", value: "3.40" }, { title: "Cardamom bun", body: "Baked at seven every morning", value: "3.20" }, { title: "Sourdough toast", body: "Cultured butter, sea salt", value: "4.50" }, { title: "Seasonal salad", body: "Whatever's good at the market", value: "8.90" }, { title: "Iced hibiscus", body: "Bright, tart, a little sweet", value: "3.80" }, { title: "Lemon polenta cake", body: "Gluten free, still a treat", value: "4.20" }] },
    layouts: [
      { id: "two-col", name: "Two columns", build: (c) => {
        const els: El[] = [
          text("title", c.title ?? "", [20, 8, 56, 7], "h2", { align: "center" }),
          shape("swoosh", [40, 16, 16, 3], "$accent"),
        ];
        items(c, 6, [{ title: "Dish", body: "Description", value: "5.00" }]).forEach((it, i) => {
          const x = (i % 2) * 52, y = 26 + Math.floor(i / 2) * 15;
          els.push(
            text(`i${i}-title`, it.title, [x, y, 30, 4], "h3", { size: 22 }),
            { ...line([x + 26, y + 2, 10, 1], "dotted", "$muted", 2), phone: { hide: true } },
            text(`i${i}-value`, it.value ?? "", [x + 37, y, 7, 4], "h3", { size: 22, align: "right", color: "$accent" }),
            text(`i${i}-body`, it.body, [x, y + 5, 40, 4], "small"),
          );
        });
        return { rows: 76, elements: els };
      } },
    ],
  },
  {
    kind: "event",
    name: "Event",
    line: "A date, a countdown, a way to say yes.",
    icon: "calendar",
    sample: { eyebrow: "Save the date", title: "Summer night market", body: "Saturday 14 June · from 6pm till late · The Old Yard", cta: "Get tickets" },
    layouts: [
      { id: "countdown", name: "With a countdown", build: (c) => ({ rows: 70, elements: [
        text("eyebrow", c.eyebrow ?? "", [24, 10, 48, 3], "label", { align: "center", color: "$accent" }),
        text("title", c.title ?? "", [10, 15, 76, 12], "h1", { align: "center" }),
        text("body", c.body ?? "", [20, 29, 56, 4], "body", { align: "center", color: "$muted" }),
        wid("countdown", "countdown", [22, 37, 52, 15], w(c, "countdown")),
        button("cta", c.cta ?? "Count me in", [39, 56, 18, 7], "solid", "$accent", {}, c.ctaLink ?? "#"),
      ] }) },
      { id: "ticket", name: "Ticket", build: (c) => ({ rows: 64, elements: [
        shape("rect", [8, 9, 80, 44], "$accent2", { slot: "box", radius: 18 }),
        text("eyebrow", c.eyebrow ?? "", [13, 14, 40, 3], "label", { color: "$ink" }),
        text("title", c.title ?? "", [13, 19, 48, 14], "h1", { size: 54, color: "$ink" }),
        text("body", c.body ?? "", [13, 35, 46, 6], "body", { color: "$ink" }),
        line([64, 12, 1, 38], "dashed", "$ink", 2),
        wid("countdown", "countdown", [67, 16, 18, 22], { ...w(c, "countdown"), style: "plain" }, { color: "$ink" }),
        button("cta", c.cta ?? "Count me in", [67, 42, 18, 7], "solid", "$ink", { full: true }, c.ctaLink ?? "#"),
      ] }) },
    ],
  },
  {
    kind: "ticker",
    name: "Ticker band",
    line: "A moving band of words between sections.",
    icon: "wave",
    sample: { body: "Fresh every morning ✳ Open Thursday to Sunday ✳ Made by hand ✳" },
    layouts: [
      { id: "band", name: "Band", build: (c) => ({ rows: 12, bg: { fill: "$ink" }, elements: [
        wid("marquee", "marquee", [0, 2, 96, 8], { ...w(c, "marquee"), text: c.body ?? w(c, "marquee").text ?? "Hello ✳ Hello ✳" }, { color: "$bg" }),
      ] }) },
      { id: "tilted", name: "Tilted ribbon", build: (c) => ({ rows: 16, elements: [
        shape("rect", [-0, 4, 96, 8, -2], "$accent2", { slot: "ribbon" }),
        wid("marquee", "marquee", [0, 4, 96, 8, -2], { ...w(c, "marquee"), text: c.body ?? "Hello ✳ Hello ✳", size: 28 }, { color: "$ink" }),
      ] }) },
    ],
  },
  {
    kind: "newsletter",
    name: "Sign-up",
    line: "Collect emails from people who care.",
    icon: "mail",
    sample: { title: "Letters from the studio", body: "One short email a month. New pieces first, never spam." },
    layouts: [
      { id: "inline", name: "One line", build: (c) => ({ rows: 46, bg: { fill: "$surface", pattern: "dots", patternColor: "$accent", patternOpacity: 25 }, elements: [
        icon("icon", "mail", [46, 7, 4, 5], "$accent"),
        text("title", c.title ?? "", [16, 14, 64, 7], "h2", { align: "center", size: 40 }),
        text("body", c.body ?? "", [22, 22, 52, 4], "body", { align: "center", color: "$muted" }),
        wid("form", "form", [28, 29, 40, 8], { fields: [{ label: "Email", type: "email", required: true }], button: "Subscribe", inline: true, success: "You're on the list. Welcome!", ...w(c, "form") }),
      ] }) },
    ],
  },
  {
    kind: "footer",
    name: "Footer",
    line: "The bottom of every page.",
    icon: "home",
    sample: { brand: "Little Studio", body: "Made by hand in a small studio. © 2026" },
    layouts: [
      { id: "simple", name: "Simple", build: (c) => ({ rows: 22, elements: [
        line([0, 3, 96, 1], "solid", "$ink", 1),
        text("brand", c.brand ?? "Little Studio", [0, 8, 30, 5], "h3"),
        text("body", c.body ?? "", [0, 13, 40, 3], "small"),
        wid("social", "social", [52, 8, 44, 6], { ...w(c, "social"), style: "text" }, { name: "Social links" }),
      ] }) },
      { id: "giant", name: "Giant name", build: (c) => ({ rows: 46, bg: { fill: "$accent" }, elements: [
        wid("menu", "menu", [0, 6, 50, 5], { ...w(c, "menu"), align: "start" }, { color: "$bg", accent: "$bg" }),
        wid("social", "social", [56, 6, 40, 5], { ...w(c, "social"), style: "text" }, { color: "$bg" }),
        text("brand", c.brand ?? "Little Studio", [0, 15, 96, 22], "display", { size: 150, color: "$bg", lineHeight: 0.9, tracking: -0.04 }),
        text("body", c.body ?? "", [0, 39, 60, 3], "small", { color: "$bg" }),
      ] }) },
    ],
  },
];

export const recipe = (kind: string) => RECIPES.find((r) => r.kind === kind);

/** A whole section from a recipe layout. */
export function buildSection(kind: string, layoutId: string | undefined, content: Content, name?: string): Section {
  const r = recipe(kind) ?? RECIPES[1];
  const l = r.layouts.find((x) => x.id === layoutId) ?? r.layouts[0];
  const built = l.build({ ...r.sample, ...content });
  const base = kind === "header" ? "Header" : kind === "footer" ? "Footer" : r.name;
  return {
    id: uid("s"),
    name: name ?? base,
    kind: r.kind,
    layout: l.id,
    rows: built.rows,
    fullscreen: built.fullscreen,
    sticky: built.sticky,
    bg: { fill: "$bg", ...built.bg },
    seam: built.seam,
    elements: built.elements,
  };
}

/** Read the content back out of a section's slots, so another layout can be built from it. */
export function readContent(s: Section): Content {
  const c: Content = { images: [], items: [], widgets: {} };
  const item = (i: number) => (c.items![i] ??= { title: "", body: "" });
  for (const e of s.elements) {
    if (!e.slot) continue;
    const m = /^i(\d+)-(\w+)$/.exec(e.slot);
    if (m) {
      const it = item(+m[1]), k = m[2];
      if (e.type === "text") (k === "title" ? (it.title = e.text) : k === "body" ? (it.body = e.text.replace(/^“|”$/g, "")) : k === "value" ? (it.value = e.text) : null);
      if (e.type === "icon" && k === "icon") it.icon = e.icon;
      if (e.type === "image") it.image = e.src;
      if (e.type === "widget" && e.widget === "list") it.extra = (e.props.items as unknown[] ?? []).map((x) => (typeof x === "string" ? x : String((x as { text?: string }).text ?? ""))).join("\n");
      continue;
    }
    if (e.type === "text") {
      if (["eyebrow", "title", "body", "quote", "author", "brand", "email"].includes(e.slot)) (c as Record<string, unknown>)[e.slot] = e.text;
    } else if (e.type === "button") {
      if (e.slot === "cta") { c.cta = e.label; if (e.link?.value) c.ctaLink = (e.link.kind === "section" ? "#" : "") + e.link.value; }
      if (e.slot === "cta2") c.cta2 = e.label;
    } else if (e.type === "image") {
      const n = e.slot === "image" ? 0 : Number(e.slot.replace("image", "")) - 1;
      if (Number.isFinite(n) && n >= 0) c.images![n] = e.src;
    } else if (e.type === "widget") {
      c.widgets![e.slot] = structuredClone(e.props);
    }
  }
  c.images = c.images!.filter(Boolean);
  if (!c.items!.length) delete c.items;
  return c;
}

/**
 * Rearrange: rebuild a section with another layout of its recipe, keeping the words and pictures.
 * Elements the person added themselves (no slot) stay where they are.
 */
export function rearrange(s: Section, layoutId?: string): Section {
  const r = s.kind ? recipe(s.kind) : undefined;
  if (!r || r.layouts.length < 2) return s;
  const i = r.layouts.findIndex((l) => l.id === s.layout);
  const next = layoutId ? r.layouts.find((l) => l.id === layoutId)! : r.layouts[(i + 1) % r.layouts.length];
  const content = readContent(s);
  const built = next.build({ ...r.sample, ...content, images: content.images?.length ? content.images : r.sample.images, items: content.items ?? r.sample.items });
  const own = s.elements.filter((e) => !e.slot && !["shape", "line"].includes(e.type));
  // Keep each slot's entrance animation and link, so motion the person set up survives.
  const old = new Map(s.elements.filter((e) => e.slot).map((e) => [e.slot!, e]));
  const elements = built.elements.map((e) => {
    const o = e.slot ? old.get(e.slot) : undefined;
    return o ? { ...e, anim: o.anim ?? e.anim, link: o.link ?? e.link } : e;
  });
  // A layout that brought its own background (a photo, a colour band) hands back a plain one when you move on.
  const hadBg = i >= 0 && !!r.layouts[i].build(r.sample).bg;
  const bg = built.bg ? { fill: "$bg", ...built.bg } : hadBg ? { fill: "$bg" } : s.bg;
  return { ...s, layout: next.id, rows: Math.max(built.rows, ...own.map((e) => e.frame.y + e.frame.h + 4)), fullscreen: built.fullscreen, bg, elements: [...elements, ...own] as El[] };
}
