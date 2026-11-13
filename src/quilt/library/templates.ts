/**
 * Whole-site templates and the Quick start ("Sew me a site"). A template is a recipe for a site: a style
 * kit, pages made of section recipes, content, and a few living touches. `build` takes the person's name
 * and one-line description so Quick start can hand back a site that is already about them.
 */
import type { QuiltDoc, Page, Section } from "../model";
import { uid } from "../model";
import { kit, themeFromKit } from "../theme";
import { buildSection, type Content } from "./recipes";

export interface TemplateInput {
  name: string;
  line?: string;
}
export interface Template {
  id: string;
  name: string;
  line: string;
  kit: string;
  /** For Quick start: what someone might be making. */
  for: string;
  cover: string;
  build: (i: TemplateInput) => Omit<QuiltDoc, "id" | "createdAt" | "updatedAt" | "format" | "version" | "theme">;
}

type S = [kind: string, layout: string, content?: Content, extra?: Partial<Section>];
const page = (name: string, slug: string, sections: S[]): Page => ({
  id: uid("p"),
  name,
  slug,
  sections: sections.map(([k, l, c, x]) => ({ ...buildSection(k, l, c ?? {}), ...(x ?? {}) })),
});
const bar = (brand: string, layout = "classic", cta?: string, extra: Partial<Section> = {}) => ({ ...buildSection("header", layout, { brand, cta }), sticky: true, ...extra });
const foot = (brand: string, layout = "simple", body?: string, extra: Partial<Section> = {}) => ({ ...buildSection("footer", layout, { brand, body: body ?? `© ${new Date().getFullYear()} ${brand}. Made with Patchwork.` }), ...extra });

export const TEMPLATES: Template[] = [
  {
    id: "cafe", name: "Corner Café", line: "A neighbourhood café with a menu, opening hours and a warm welcome.", kit: "linen", for: "Café, bakery or restaurant", cover: "stock:cafe",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "classic", "Find us"),
      pages: [page("Home", "index", [
        ["hero", "split", { eyebrow: "Open Thursday to Sunday", title: "Good coffee, slow mornings.", body: line || "A small café on the corner, with bread from the oven, beans we roast ourselves and a seat by the window.", cta: "See the menu", cta2: "Find us", ctaLink: "#menu", images: ["stock:cafe"] }, { seam: { shape: "scallop" }, bg: { fill: "$bg" } }],
        ["ticker", "band", { body: "Fresh bread at 7am ✳ Beans roasted on Mondays ✳ Dogs welcome ✳ Oat milk at no extra cost ✳" }],
        ["features", "numbered", { title: "A few things we care about", body: "Simple food, done properly, in a room that feels like a friend's kitchen.", items: [{ title: "Baked here", body: "Everything sweet and savoury comes out of our oven, the same morning." }, { title: "Roasted nearby", body: "Our beans come from a tiny roastery two streets away." }, { title: "Stay a while", body: "No time limits, good wifi, and a shelf of books to borrow." }] }],
        ["menu", "two-col", { title: "On the counter today" }, { bg: { fill: "$surface", pattern: "paper" }, seam: { shape: "wave" }, residents: [{ kind: "hedgehog" }] }],
        ["testimonial", "big-quote", { quote: "The cardamom buns are worth crossing the city for. I'd know: I do it every Saturday.", author: "Mira, a regular" }],
        ["contact", "form", { eyebrow: "Visit", title: "Come and say hello.", body: "Booking for a group of six or more? Send us a note and we'll save a table.", items: [{ title: "Where", body: "3 Mill Lane, on the corner", icon: "pin" }, { title: "When", body: "Thu to Sun, 8am till 4pm", icon: "clock" }, { title: "Email", body: "hello@cornercafe.example", icon: "mail" }] }],
      ])],
      footer: foot(name, "simple", undefined, { residents: [{ kind: "fox" }] }),
      settings: { progress: true, kite: true },
      template: "cafe",
    }),
  },
  {
    id: "portfolio", name: "Studio Portfolio", line: "A confident portfolio for designers, illustrators and makers.", kit: "studio-mono", for: "Portfolio", cover: "stock:desk",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "minimal"),
      pages: [
        page("Work", "index", [
          ["hero", "poster", { eyebrow: "Designer & illustrator", title: "I draw things that make people curious.", body: line || "Brand identities, picture books and the odd mural, for people with stories worth telling.", cta: "Start a project", images: ["stock:desk"] }],
          ["gallery", "grid", { title: "Selected work", body: "2023–2026", images: ["stock:desk", "stock:shapes", "stock:ceramics", "stock:flowers", "stock:hills"] }],
          ["testimonial", "cards", { title: "From the people I've worked with" }],
          ["contact", "big-email", { eyebrow: "Got a project?", title: "Let's talk about it.", email: "studio@example.com" }],
        ]),
        page("About", "about", [
          ["about", "image-left", { eyebrow: "About", title: `Hello, I'm ${name}.`, body: "I've been drawing since I could hold a crayon, and making it my job for twelve years. I work from a small studio full of plants and paper, with clients all over the world.", images: ["stock:portrait"] }],
          ["stats", "row", { title: "A few numbers" }],
          ["faq", "side", { title: "Working together", body: "The usual questions, answered honestly.", widgets: { faq: { items: [{ q: "How long does a project take?", a: "Most identities take six to eight weeks. Illustrations depend on how many there are." }, { q: "What does it cost?", a: "Every project is different. Tell me about yours and I'll send a clear quote within two days." }, { q: "Do you work with people abroad?", a: "All the time. Most of my clients are in other countries." }] } } }],
        ]),
      ],
      footer: foot(name, "giant"),
      settings: { cursor: "dot", progress: true },
      template: "portfolio",
    }),
  },
  {
    id: "launch", name: "Bright Launch", line: "A cheerful page for an app, a product or a big idea.", kit: "bubblegum", for: "App, product or startup", cover: "stock:shapes",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "classic", "Get early access"),
      pages: [page("Home", "index", [
        ["hero", "center", { eyebrow: "Now in early access", title: "Plans that plan themselves.", body: line || `${name} turns your scattered notes into a calm, simple week. No setup, no learning curve.`, cta: "Join the waitlist", cta2: "See how it works" }, { bg: { fill: { kind: "mesh", stops: ["$bg", "$accent3", "$accent2", "$surface"] } }, seam: { shape: "curve" } }],
        ["features", "bento", { title: "Everything in its right place", images: ["stock:shapes"], items: [{ title: "Drop it in, it's sorted", body: "Paste anything: notes, links, voice memos. It finds the to-dos for you.", image: "stock:shapes" }, { title: "Your week, at a glance", body: "One page, every plan.", icon: "calendar" }, { title: "Private by default", body: "Your notes stay yours.", icon: "shield" }] }],
        ["stats", "band", {}],
        ["pricing", "tiers", {}],
        ["faq", "center", { title: "Questions, answered", widgets: { faq: { items: [{ q: "When can I start?", a: "Invites go out every Monday. Join the waitlist and you'll hear from us within a week or two." }, { q: "Does it work on my phone?", a: "Yes, on any phone, tablet or computer, and your plans stay in sync." }, { q: "Can I cancel any time?", a: "Of course. Two clicks, no emails asking you to stay." }] } } }],
        ["newsletter", "inline", { title: "Be the first to know", body: "We'll send one email when your invite is ready. That's it." }],
      ])],
      footer: foot(name),
      settings: { cursor: "sparkle" },
      template: "launch",
    }),
  },
  {
    id: "maker", name: "Maker's Shop", line: "A handmade shop with a scrapbook feel.", kit: "clay", for: "Handmade shop or craft studio", cover: "stock:ceramics",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "centered"),
      pages: [page("Home", "index", [
        ["hero", "collage", { eyebrow: "Small batch ceramics", title: "Made slowly, used every day.", body: line || "Mugs, bowls and vases thrown by hand in a little studio by the sea.", cta: "Visit the shop", images: ["stock:ceramics", "stock:flowers", "stock:desk"] }, { bg: { fill: "$bg", pattern: "paper" }, seam: { shape: "torn" } }],
        ["features", "cards", { title: "The way we make", body: "Nothing rushed, nothing wasted." }, { bg: { fill: "$surface" } }],
        ["gallery", "arches", { title: "Fresh from the kiln", body: "New pieces every first Friday of the month.", images: ["stock:ceramics", "stock:food", "stock:flowers", "stock:cafe"] }],
        ["testimonial", "big-quote", { quote: "My favourite mug cracked after eight years of daily use. They mended it with gold.", author: "Hannah, Glasgow" }, { bg: { fill: "$accent3" }, seam: { shape: "zigzag" } }],
        ["newsletter", "inline", { title: "Kiln day letters", body: "Hear about new pieces before they sell out." }],
      ])],
      footer: foot(name, "simple", undefined, { residents: [{ kind: "ladybug" }] }),
      settings: { kite: true },
      template: "maker",
    }),
  },
  {
    id: "gig", name: "Night Set", line: "For a band, a DJ or a one-night event.", kit: "velvet", for: "Music, gig or event", cover: "stock:stage",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "classic", "Tickets", { bg: { fill: "$bg" } }),
      pages: [page("Home", "index", [
        ["hero", "cover", { eyebrow: "Live this summer", title: name, body: line || "Songs about late trains, small towns and big skies. Come and sing along.", cta: "Get tickets", cta2: "Listen", images: ["stock:stage"] }],
        ["event", "countdown", { eyebrow: "Next show", title: "The Lantern Room, 21 June", body: "Doors at 7pm · Support from Quiet Harbour · All ages", cta: "Get tickets" }, { bg: { fill: "$surface", pattern: "stars", patternColor: "$accent2" }, seam: { shape: "drip" } }],
        ["ticker", "tilted", { body: "21 June · The Lantern Room ✳ 28 June · Harbour Hall ✳ 5 July · The Old Mill ✳" }],
        ["gallery", "polaroids", { title: "Last tour", images: ["stock:stage", "stock:hills", "stock:cafe", "stock:flowers"] }, { bg: { fill: "$bg", pattern: "checks", patternColor: "$accent", patternOpacity: 8 } }],
        ["newsletter", "inline", { title: "Never miss a show", body: "Tour dates and new songs, straight to your inbox." }],
      ])],
      footer: foot(name, "giant"),
      settings: { cursor: "sparkle", progress: true },
      template: "gig",
    }),
  },
  {
    id: "wedding", name: "Two Hearts", line: "A wedding or celebration with RSVP, story and countdown.", kit: "soft-spoken", for: "Wedding or celebration", cover: "stock:flowers",
    build: ({ name, line }) => ({
      name,
      pages: [page("Home", "index", [
        ["hero", "center", { eyebrow: "We're getting married", title: name, body: line || "Saturday 12 September · Hartley Barn, Somerset", cta: "RSVP", cta2: "Our story" }, { bg: { fill: "$bg", image: "stock:flowers", dim: 78, dimColor: "$bg" }, fullscreen: true, seam: { shape: "scallop" } }],
        ["event", "countdown", { eyebrow: "The big day", title: "Counting the sleeps", body: "Ceremony at 2pm, dinner and dancing until late.", cta: "Add to calendar" }],
        ["about", "letter", { eyebrow: "Our story", title: "It started with a borrowed umbrella.", body: "Eight years, two cats and one very long walk later, we're making it official. We would love you to be there.", author: "Ana & Leo", images: ["stock:flowers"] }],
        ["faq", "center", { title: "Good to know", widgets: { faq: { items: [{ q: "Can I bring a plus one?", a: "If your invitation says so, yes please! If you're unsure, just ask us." }, { q: "Are children welcome?", a: "Absolutely. There's a quiet room with games and blankets for little ones." }, { q: "Where should I stay?", a: "There are rooms at the Hartley Arms and a few cottages nearby. We've held some for guests until July." }, { q: "Is there parking?", a: "Plenty, right next to the barn. Taxis are booked for midnight." }] } } }, { bg: { fill: "$surface" } }],
        ["contact", "form", { eyebrow: "RSVP", title: "Will you join us?", body: "Please let us know by 1 August.", items: [{ title: "Where", body: "Hartley Barn, Somerset", icon: "pin" }, { title: "When", body: "12 September, 2pm", icon: "calendar" }, { title: "Dress", body: "Garden party", icon: "flower" }] }],
      ])],
      footer: foot(name, "simple", "With love, see you there."),
      settings: { intro: true },
      template: "wedding",
    }),
  },
  {
    id: "pixel", name: "Pixel Quest", line: "An indie game page with a living pixel world behind it.", kit: "pixel-daydream", for: "Game or creative project", cover: "scene:skyisle",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "minimal", undefined, { bg: { fill: "$surface" } }),
      pages: [page("Home", "index", [
        ["hero", "center", { eyebrow: "Coming to a computer near you", title: name, body: line || "A cosy adventure across floating islands. Fix the old windmills, befriend the birds, find out where the sky ends.", cta: "Wishlist now", cta2: "Watch the trailer" }, { fullscreen: true, bg: { fill: "#1d1b3a", scene: "skyisle", dim: 20, dimColor: "#1d1b3a" }, elements: buildSection("hero", "center", { eyebrow: "Coming to a computer near you", title: name, body: line || "A cosy adventure across floating islands. Fix the old windmills, befriend the birds, find out where the sky ends.", cta: "Wishlist now", cta2: "Watch the trailer" }).elements.filter((e) => e.type !== "shape").map((e) => (e.type === "text" ? { ...e, style: { ...e.style, color: "#ffffff" } } : e.type === "button" && e.style.variant === "outline" ? { ...e, style: { ...e.style, color: "#ffffff" } } : e)) }],
        ["features", "cards", { title: "What's inside", body: "Hand-drawn pixels, gentle puzzles, no fail states.", items: [{ title: "Twelve islands", body: "Each with its own weather, music and secrets.", icon: "cloud" }, { title: "Friendly birds", body: "Some will help you. Some just want snacks.", icon: "heart" }, { title: "Your own pace", body: "No timers, no game overs. Just you and the sky.", icon: "clock" }] }, { seam: { shape: "steps" }, residents: [{ kind: "chick" }] }],
        ["newsletter", "inline", { title: "Join the devlog", body: "Behind-the-scenes notes every fortnight." }],
      ])],
      footer: foot(name),
      settings: { cursor: "sparkle" },
      template: "pixel",
    }),
  },
  {
    id: "terminal", name: "Command Line", line: "A developer's home page that looks like a terminal.", kit: "terminal", for: "Developer or tech portfolio", cover: "kit:terminal",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "minimal"),
      pages: [page("Home", "index", [
        ["hero", "split", { eyebrow: "$ whoami", title: `${name}: I build fast, quiet software.`, body: line || "Backend engineer. Open source tinkerer. Writes about databases on rainy Sundays.", cta: "Read the blog", cta2: "GitHub", images: ["stock:desk"] }, { bg: { fill: "$bg", pattern: "grid", patternColor: "$accent", patternOpacity: 10 } }],
        ["stats", "row", { title: "Shipped so far", widgets: { stats: { items: [{ value: "48", suffix: "", label: "Open source repos" }, { value: "9", suffix: "yrs", label: "In production" }, { value: "99.99", suffix: "%", label: "Uptime, last year" }] } } }],
        ["features", "numbered", { title: "Things I'm good at", body: "And a few I'm still learning.", items: [{ title: "Distributed systems", body: "Queues, consensus and the occasional heroic debugging session." }, { title: "Developer tools", body: "CLIs and libraries people actually enjoy using." }, { title: "Writing", body: "Long-form notes on what I learn, in plain language." }] }],
        ["contact", "big-email", { eyebrow: "$ mail", title: "Say hi, I reply to everyone.", email: "dev@example.com" }],
      ])],
      footer: foot(name),
      settings: { cursor: "thread" },
      template: "terminal",
    }),
  },
  {
    id: "journal", name: "Field Journal", line: "A travel journal or photography site, quiet and cinematic.", kit: "ocean-hour", for: "Photography, travel or writing", cover: "stock:hills",
    build: ({ name, line }) => ({
      name,
      header: bar(name, "classic", "Subscribe", { bg: { fill: "$bg" } }),
      pages: [page("Home", "index", [
        ["hero", "cover", { eyebrow: "Notes from the long way round", title: "Walk slowly. Look twice.", body: line || "Photographs and short essays from footpaths, harbours and the quiet places in between.", cta: "Read the latest", images: ["stock:hills"] }],
        ["gallery", "grid", { title: "From the road", body: "Autumn 2026", images: ["stock:hills", "stock:flowers", "stock:food", "stock:cafe", "stock:stage"] }],
        ["about", "letter", { eyebrow: "Why I walk", title: "The best views are never from the car.", body: "Three years ago I sold the car and started walking everywhere. This is where I write about it, one footpath at a time.", author: name, images: ["stock:portrait"] }, { bg: { fill: "$surface", pattern: "lines", patternColor: "$accent", patternOpacity: 12 } }],
        ["newsletter", "inline", { title: "Postcards by email", body: "One photograph and one paragraph, every Sunday." }],
      ])],
      footer: foot(name, "simple", undefined, { residents: [{ kind: "jellyfish" }] }),
      settings: { progress: true },
      template: "journal",
    }),
  },
];

export const template = (id: string) => TEMPLATES.find((t) => t.id === id);

/** A brand-new site from a template (or a blank page), with a theme from its kit or a chosen one. */
export function newSite(templateId: string | null, input: TemplateInput, kitId?: string): QuiltDoc {
  const now = Date.now();
  const t = templateId ? template(templateId) : undefined;
  const k = kit(kitId ?? t?.kit ?? "linen");
  if (!t) {
    return {
      format: "patchwork-quilt", version: 1, id: uid("q"), name: input.name || "Untitled site", createdAt: now, updatedAt: now,
      theme: themeFromKit(k),
      pages: [{ id: uid("p"), name: "Home", slug: "index", sections: [buildSection("hero", "center", { title: input.name || "A fresh start.", body: input.line || "Double-click any words to change them. Drag anything anywhere.", eyebrow: "Hello", cta: "Say hello", cta2: "Learn more" })] }],
      settings: {},
    };
  }
  return { format: "patchwork-quilt", version: 1, id: uid("q"), createdAt: now, updatedAt: now, theme: themeFromKit(k), ...t.build({ name: input.name || t.name, line: input.line }) };
}
