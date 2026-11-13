/**
 * Quilt: the Patchwork site maker. This file is the document model, the single source of truth for
 * what a site *is*. Everything else (renderer, editor, export, recipes) reads and writes these types.
 *
 * Geometry: every section is a grid of GRID.cols columns across GRID.width design pixels, and rows of
 * GRID.row design pixels. Elements sit on that grid (x/w in columns, y/h in rows), so a free, Canva-like
 * canvas compiles straight to a responsive CSS grid. Phones get a "smart stack" (see layout.ts).
 *
 * Adding a field: make it optional, give it a default in the renderer, and teach validate.ts about it.
 * Old documents must keep opening.
 */

export const GRID = { cols: 96, row: 8, width: 1200 } as const;
/** One design column in design pixels (12.5). */
export const COL_PX = GRID.width / GRID.cols;
/** Below this container width the site switches to the phone layout. */
export const PHONE_MAX = 640;

export type Device = "desktop" | "tablet" | "phone";
export const DEVICE_WIDTH: Record<Device, number> = { desktop: 1280, tablet: 820, phone: 390 };

/** A colour: a theme token ("$accent") or a hex value ("#ff5b3a"). Tokens follow the brand kit. */
export type ColorRef = string;
export const TOKENS = ["bg", "surface", "ink", "muted", "accent", "accent2", "accent3"] as const;
export type Token = (typeof TOKENS)[number];

export interface Gradient {
  kind: "linear" | "radial" | "mesh";
  stops: ColorRef[];
  angle?: number;
}
/** What fills a shape or a section: a colour or a gradient. */
export type Paint = ColorRef | Gradient;

export interface Frame {
  /** Column of the left edge, 0..cols. */
  x: number;
  /** Row of the top edge. */
  y: number;
  /** Width in columns. */
  w: number;
  /** Height in rows. Text treats it as a minimum and grows to fit. */
  h: number;
  /** Rotation in degrees. */
  r?: number;
}

export type Enter =
  | "none" | "fade" | "rise" | "drop" | "slide-left" | "slide-right" | "pop" | "zoom" | "blur"
  | "stitch" | "typewriter" | "wipe" | "spin-in";
export type Loop = "none" | "float" | "pulse" | "spin" | "wiggle" | "sway" | "bounce";
export type Hover = "none" | "lift" | "grow" | "tilt" | "glow" | "shake";
export interface Animation {
  enter?: Enter;
  /** Seconds. */
  delay?: number;
  duration?: number;
  loop?: Loop;
  hover?: Hover;
  /** Parallax strength, -1..1. Positive drifts slower than the page, negative faster. */
  parallax?: number;
}

export type LinkKind = "url" | "page" | "section" | "email" | "phone";
export interface Link {
  kind: LinkKind;
  value: string;
  newTab?: boolean;
}

export interface PhoneOptions {
  hide?: boolean;
  /** Position in the phone's reading order (lower first). Defaults to reading order on desktop. */
  order?: number;
  /** Decorations float over the stack instead of taking a place in it. */
  float?: boolean;
  /** Text size on phones as a share of the desktop size (0.3..1.2). */
  scale?: number;
}

interface Base {
  id: string;
  name?: string;
  frame: Frame;
  locked?: boolean;
  hidden?: boolean;
  opacity?: number;
  anim?: Animation;
  link?: Link;
  phone?: PhoneOptions;
  /** Which part of a section recipe this element plays (headline, image, cta…). Used by Rearrange. */
  slot?: string;
  /** Hide from desktop and tablet: phone-only element. */
  hideDesktop?: boolean;
}

export type TextRole = "display" | "h1" | "h2" | "h3" | "body" | "small" | "label" | "quote";
export type TextEffect = "none" | "highlight" | "scribble" | "outline" | "shadow" | "gradient" | "glow" | "stamp";
export interface TextStyle {
  role: TextRole;
  /** "heading" and "body" follow the brand kit; anything else is a font id from fonts.ts. */
  font: string;
  /** Desktop size in design pixels. */
  size: number;
  weight?: number;
  italic?: boolean;
  underline?: boolean;
  upper?: boolean;
  align?: "left" | "center" | "right";
  color: ColorRef;
  lineHeight?: number;
  /** Letter spacing in em. */
  tracking?: number;
  effect?: TextEffect;
  effectColor?: ColorRef;
  /** Background behind the text box (cards, labels). */
  background?: ColorRef;
  pad?: number;
  radius?: number;
}
export interface TextEl extends Base {
  type: "text";
  text: string;
  style: TextStyle;
}

export type ButtonVariant = "solid" | "outline" | "soft" | "link" | "pill" | "sticker" | "underline";
export interface ButtonEl extends Base {
  type: "button";
  label: string;
  style: {
    variant: ButtonVariant;
    color: ColorRef;
    text?: ColorRef;
    size: "s" | "m" | "l";
    font?: string;
    radius?: number;
    icon?: "none" | "arrow" | "arrow-up-right" | "plus" | "heart" | "mail" | "play" | "download" | "star";
    full?: boolean;
  };
}

export type ImageMask = "none" | "circle" | "arch" | "blob" | "stamp" | "pill" | "diamond" | "scallop" | "hexagon" | "flower";
export type ImageFrame = "none" | "polaroid" | "tape" | "shadow" | "border" | "stack";
export type ImageFilter = "none" | "mono" | "sepia" | "warm" | "cool" | "fade" | "vivid" | "duotone";
export interface ImageEl extends Base {
  type: "image";
  /** asset:<uuid> (an upload), stock:<id> (bundled photo) or a site-relative path. */
  src: string;
  alt: string;
  fit?: "cover" | "contain";
  /** Focal point, 0..100. */
  focus?: { x: number; y: number };
  mask?: ImageMask;
  frameStyle?: ImageFrame;
  radius?: number;
  filter?: ImageFilter;
  /** Duotone colours (dark, light). */
  tone?: [ColorRef, ColorRef];
  caption?: string;
}

export interface ShapeEl extends Base {
  type: "shape";
  shape: string;
  fill: Paint;
  stroke?: { color: ColorRef; width: number; dash?: boolean };
  radius?: number;
  /** Shapes keep their proportions by default; free shapes (rectangles) stretch. */
  stretch?: boolean;
}

export interface IconEl extends Base {
  type: "icon";
  icon: string;
  color: ColorRef;
  /** Filled chip behind the icon. */
  chip?: ColorRef;
  stroke?: number;
}

export interface LineEl extends Base {
  type: "line";
  style: "solid" | "dashed" | "dotted" | "stitch" | "wave" | "zigzag" | "double";
  color: ColorRef;
  weight: number;
}

/** Small working parts of a site. Props are typed per widget in widgets.ts. */
export type WidgetKind = "menu" | "countdown" | "marquee" | "faq" | "form" | "social" | "list" | "stats" | "video";
export interface WidgetEl extends Base {
  type: "widget";
  widget: WidgetKind;
  props: Record<string, unknown>;
  color?: ColorRef;
  accent?: ColorRef;
  font?: string;
}

export type El = TextEl | ButtonEl | ImageEl | ShapeEl | IconEl | LineEl | WidgetEl;
export type ElType = El["type"];

export type Pattern = "none" | "dots" | "grid" | "lines" | "checks" | "noise" | "quilt" | "waves" | "stars" | "confetti" | "paper";
export type SeamShape = "none" | "wave" | "zigzag" | "scallop" | "torn" | "curve" | "slant" | "stitch" | "steps" | "drip";
export interface Seam {
  shape: SeamShape;
  /** Seam depth in design pixels. */
  depth?: number;
  flip?: boolean;
  /** Colour of the stitch thread for "stitch" (and the running stitch drawn along other seams). */
  thread?: ColorRef;
}

export interface Resident {
  /** A pal id from the spirits collection (fox, hedgehog, ghost…). */
  kind: string;
  color?: string;
}

export interface SectionBackground {
  fill: Paint;
  image?: string;
  imageFit?: "cover" | "contain" | "tile";
  /** 0..100: colour wash over a picture or scene so words stay readable. */
  dim?: number;
  dimColor?: ColorRef;
  pattern?: Pattern;
  patternColor?: ColorRef;
  /** 0..100 */
  patternOpacity?: number;
  /** A Patchwork Scene (living pixel place) painted behind the section. */
  scene?: string;
  blur?: number;
}

/** A Patchwork hero or scene used as a whole section (see pieces.ts). */
export interface Piece {
  kind: "hero" | "classic" | "scene";
  id: string;
  /** Its words and options (validated by its own collection when rendered). */
  config: Record<string, string | number | boolean>;
  /** Where its main button goes. */
  link?: Link;
  /** Hide the piece's own menu, for sites with a shared header. */
  hideNav?: boolean;
}

export interface Section {
  id: string;
  name: string;
  /** Recipe this section came from (hero, features…). Rearrange cycles its layouts. */
  kind?: string;
  layout?: string;
  /** Desktop height in rows (minimum: content can grow it). */
  rows: number;
  /** Fill the screen height on any device. */
  fullscreen?: boolean;
  /** Vertically centre the grid in a fullscreen section. */
  bg: SectionBackground;
  /** A Patchwork hero or scene filling the section. */
  piece?: Piece;
  seam?: Seam;
  residents?: Resident[];
  elements: El[];
  /** URL fragment (#about). Defaults to a slug of the name. */
  anchor?: string;
  hidden?: boolean;
  /** Sticky header behaviour for the shared header. */
  sticky?: boolean;
  /** Phone layout tuning. */
  phone?: { gap?: number; pad?: number; align?: "start" | "center" };
}

export interface Page {
  id: string;
  name: string;
  /** "index" for the home page. */
  slug: string;
  sections: Section[];
  title?: string;
  description?: string;
}

export interface Palette {
  bg: string;
  surface: string;
  ink: string;
  muted: string;
  accent: string;
  accent2: string;
  accent3: string;
}

export interface Theme {
  palette: Palette;
  fonts: { heading: string; body: string };
  /** Corner radius used by buttons, cards and images that ask for "theme" corners. Design px. */
  radius: number;
  /** 0 flat .. 3 deep. */
  shadow: number;
  /** Name of the style kit this theme came from, if any. */
  kit?: string;
  /** Heading letter-case/tracking flavour. */
  headingCase?: "normal" | "upper";
}

export interface SiteSettings {
  lang?: string;
  /** The kite back-to-top companion from the Components collection. */
  kite?: boolean;
  /** A page-wide cursor trail. */
  cursor?: "none" | "sparkle" | "thread" | "dot";
  /** Smooth reveal of each page on load. */
  intro?: boolean;
  favicon?: string;
  /** Scroll progress thread across the top. */
  progress?: boolean;
}

export interface QuiltDoc {
  format: "patchwork-quilt";
  version: 1;
  id: string;
  name: string;
  createdAt: number;
  updatedAt: number;
  theme: Theme;
  pages: Page[];
  /** Shared on every page, above the page's own sections. */
  header?: Section;
  /** Shared on every page, after the page's own sections. */
  footer?: Section;
  settings: SiteSettings;
  /** Which template the site started from. */
  template?: string;
}

/** Where a section lives in the document. */
export type SectionRef = { where: "header" | "footer" } | { where: "page"; page: string; id: string };

export const uid = (p = "e") =>
  `${p}${Math.random().toString(36).slice(2, 8)}${Date.now().toString(36).slice(-3)}`;

export const isGradient = (p: Paint): p is Gradient => typeof p === "object" && p !== null;

export const slugify = (s: string) =>
  s.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/[\s_]+/g, "-").replace(/-+/g, "-").slice(0, 48) || "page";

/** Every section on a page in the order a visitor sees them, including the shared header and footer. */
export function pageSections(doc: QuiltDoc, page: Page): { section: Section; ref: SectionRef }[] {
  const out: { section: Section; ref: SectionRef }[] = [];
  if (doc.header) out.push({ section: doc.header, ref: { where: "header" } });
  for (const s of page.sections) out.push({ section: s, ref: { where: "page", page: page.id, id: s.id } });
  if (doc.footer) out.push({ section: doc.footer, ref: { where: "footer" } });
  return out;
}

export function allSections(doc: QuiltDoc): Section[] {
  return [...(doc.header ? [doc.header] : []), ...doc.pages.flatMap((p) => p.sections), ...(doc.footer ? [doc.footer] : [])];
}

export function findSection(doc: QuiltDoc, id: string): Section | undefined {
  return allSections(doc).find((s) => s.id === id);
}

/** Lowest row any element reaches. */
export const contentRows = (s: Section) => s.elements.reduce((m, e) => Math.max(m, e.frame.y + e.frame.h), 0);
