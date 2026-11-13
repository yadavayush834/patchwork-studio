/**
 * Everything that comes from outside (an imported file, an old save) passes through here before the
 * editor or renderer sees it. Structure problems throw; individual bad values are repaired so one odd
 * colour never costs someone their site.
 */
import type { El, Paint, QuiltDoc, Section, Page, Theme, Link } from "./model";
import { TOKENS } from "./model";
import { isColorRef, isFont, isHex, KITS, themeFromKit } from "./theme";
import { isShape } from "./library/shapes";
import { isIcon } from "./library/icons";
import { widget } from "./widgets";
import { seamDef, patternDef } from "./library/seams";
import { isLivingScene, isResident } from "./library/media";

const LIMITS = { pages: 30, sections: 60, elements: 160, text: 8000 };
const isObj = (v: unknown): v is Record<string, unknown> => typeof v === "object" && v !== null && !Array.isArray(v);
const str = (v: unknown, max = 400, d = "") => (typeof v === "string" ? v.slice(0, max) : d);
const num = (v: unknown, min: number, max: number, d: number) => (typeof v === "number" && Number.isFinite(v) ? Math.min(max, Math.max(min, v)) : d);
const id = (v: unknown) => (typeof v === "string" && /^[\w-]{1,64}$/.test(v) ? v : null);
const color = (v: unknown, d = "$ink") => (isColorRef(v) ? (v as string) : d);
const oneOf = <T extends string>(v: unknown, list: readonly T[], d: T): T => (list.includes(v as T) ? (v as T) : d);
const opt = <T>(v: unknown, f: (x: unknown) => T): T | undefined => (v === undefined ? undefined : f(v));

/** Picture references: an upload, a bundled stock photo, or a known public path. */
export const isSrc = (v: unknown) =>
  typeof v === "string" && (/^asset:[\w-]{1,80}$/.test(v) || /^stock:[\w-]{1,40}$/.test(v) || /^\/(quilt|assets)\/[\w/.-]{1,120}\.(webp|png|jpe?g|gif|svg)$/.test(v));

function paint(v: unknown, d: Paint = "$bg"): Paint {
  if (isObj(v)) {
    const stops = Array.isArray(v.stops) ? v.stops.filter(isColorRef).slice(0, 4) : [];
    if (stops.length < 2) return d;
    return { kind: oneOf(v.kind, ["linear", "radial", "mesh"] as const, "linear"), stops: stops as string[], angle: num(v.angle, 0, 360, 135) };
  }
  return isColorRef(v) ? (v as string) : d;
}

function link(v: unknown): Link | undefined {
  if (!isObj(v)) return undefined;
  return { kind: oneOf(v.kind, ["url", "page", "section", "email", "phone"] as const, "url"), value: str(v.value, 500), newTab: v.newTab === true || undefined };
}

function props(v: unknown, depth = 0): Record<string, unknown> {
  // Widget props are plain JSON: strings, numbers, booleans, and lists of the same.
  if (!isObj(v) || depth > 3) return {};
  const out: Record<string, unknown> = {};
  for (const [k, x] of Object.entries(v).slice(0, 30)) {
    if (!/^[\w-]{1,40}$/.test(k)) continue;
    if (typeof x === "string") out[k] = x.slice(0, LIMITS.text);
    else if (typeof x === "number" && Number.isFinite(x)) out[k] = x;
    else if (typeof x === "boolean") out[k] = x;
    else if (Array.isArray(x)) out[k] = x.slice(0, 40).map((i) => (typeof i === "string" ? i.slice(0, 2000) : isObj(i) ? props(i, depth + 1) : null)).filter((i) => i !== null);
  }
  return out;
}

export function element(v: unknown): El | null {
  if (!isObj(v) || !id(v.id) || !isObj(v.frame)) return null;
  const f = v.frame;
  const base = {
    id: v.id as string,
    name: opt(v.name, (x) => str(x, 80)),
    frame: { x: num(f.x, 0, 95, 0), y: num(f.y, 0, 2000, 0), w: num(f.w, 1, 96, 10), h: num(f.h, 1, 2000, 4), r: opt(f.r, (x) => num(x, -360, 360, 0)) },
    locked: v.locked === true || undefined,
    hidden: v.hidden === true || undefined,
    hideDesktop: v.hideDesktop === true || undefined,
    opacity: opt(v.opacity, (x) => num(x, 0, 100, 100)),
    slot: opt(v.slot, (x) => str(x, 40)),
    link: link(v.link),
    anim: isObj(v.anim) ? {
      enter: opt(v.anim.enter, (x) => oneOf(x, ["none", "fade", "rise", "drop", "slide-left", "slide-right", "pop", "zoom", "blur", "stitch", "typewriter", "wipe", "spin-in"] as const, "none")),
      delay: opt(v.anim.delay, (x) => num(x, 0, 10, 0)),
      duration: opt(v.anim.duration, (x) => num(x, 0.1, 10, 0.9)),
      loop: opt(v.anim.loop, (x) => oneOf(x, ["none", "float", "pulse", "spin", "wiggle", "sway", "bounce"] as const, "none")),
      hover: opt(v.anim.hover, (x) => oneOf(x, ["none", "lift", "grow", "tilt", "glow", "shake"] as const, "none")),
      parallax: opt(v.anim.parallax, (x) => num(x, -1, 1, 0)),
    } : undefined,
    phone: isObj(v.phone) ? { hide: v.phone.hide === true || undefined, order: opt(v.phone.order, (x) => num(x, -100, 100, 0)), float: typeof v.phone.float === "boolean" ? v.phone.float : undefined, scale: opt(v.phone.scale, (x) => num(x, 0.3, 1.2, 1)) } : undefined,
  };
  switch (v.type) {
    case "text": {
      const s = isObj(v.style) ? v.style : {};
      return { ...base, type: "text", text: str(v.text, LIMITS.text), style: {
        role: oneOf(s.role, ["display", "h1", "h2", "h3", "body", "small", "label", "quote"] as const, "body"),
        font: s.font === "heading" || s.font === "body" || isFont(s.font) ? (s.font as string) : "body",
        size: num(s.size, 8, 400, 18), weight: opt(s.weight, (x) => num(x, 100, 1000, 400)), italic: s.italic === true || undefined, underline: s.underline === true || undefined, upper: s.upper === true || undefined,
        align: opt(s.align, (x) => oneOf(x, ["left", "center", "right"] as const, "left")), color: color(s.color), lineHeight: opt(s.lineHeight, (x) => num(x, 0.7, 3, 1.4)), tracking: opt(s.tracking, (x) => num(x, -0.2, 1, 0)),
        effect: opt(s.effect, (x) => oneOf(x, ["none", "highlight", "scribble", "outline", "shadow", "gradient", "glow", "stamp"] as const, "none")), effectColor: opt(s.effectColor, (x) => color(x, "$accent")),
        background: opt(s.background, (x) => color(x, "$surface")), pad: opt(s.pad, (x) => num(x, 0, 120, 18)), radius: opt(s.radius, (x) => num(x, 0, 200, 12)),
      } };
    }
    case "button": {
      const s = isObj(v.style) ? v.style : {};
      return { ...base, type: "button", label: str(v.label, 120, "Button"), style: {
        variant: oneOf(s.variant, ["solid", "outline", "soft", "link", "pill", "sticker", "underline"] as const, "solid"), color: color(s.color, "$accent"), text: opt(s.text, (x) => color(x, "$bg")),
        size: oneOf(s.size, ["s", "m", "l"] as const, "m"), font: opt(s.font, (x) => (x === "heading" || x === "body" || isFont(x) ? (x as string) : "body")), radius: opt(s.radius, (x) => num(x, 0, 999, 12)),
        icon: opt(s.icon, (x) => oneOf(x, ["none", "arrow", "arrow-up-right", "plus", "heart", "mail", "play", "download", "star"] as const, "none")), full: s.full === true || undefined,
      } };
    }
    case "image":
      return { ...base, type: "image", src: isSrc(v.src) ? (v.src as string) : "stock:hills", alt: str(v.alt, 300), fit: opt(v.fit, (x) => oneOf(x, ["cover", "contain"] as const, "cover")),
        focus: isObj(v.focus) ? { x: num(v.focus.x, 0, 100, 50), y: num(v.focus.y, 0, 100, 50) } : undefined,
        mask: opt(v.mask, (x) => oneOf(x, ["none", "circle", "arch", "blob", "stamp", "pill", "diamond", "scallop", "hexagon", "flower"] as const, "none")),
        frameStyle: opt(v.frameStyle, (x) => oneOf(x, ["none", "polaroid", "tape", "shadow", "border", "stack"] as const, "none")), radius: opt(v.radius, (x) => num(x, 0, 999, 0)),
        filter: opt(v.filter, (x) => oneOf(x, ["none", "mono", "sepia", "warm", "cool", "fade", "vivid", "duotone"] as const, "none")),
        tone: Array.isArray(v.tone) && v.tone.length === 2 ? [color(v.tone[0]), color(v.tone[1])] : undefined, caption: opt(v.caption, (x) => str(x, 120)) };
    case "shape":
      return { ...base, type: "shape", shape: isShape(v.shape) ? (v.shape as string) : "rect", fill: paint(v.fill, "$accent"), radius: opt(v.radius, (x) => num(x, 0, 999, 0)), stretch: v.stretch === true || undefined,
        stroke: isObj(v.stroke) ? { color: color(v.stroke.color), width: num(v.stroke.width, 0, 40, 2), dash: v.stroke.dash === true || undefined } : undefined };
    case "icon":
      return { ...base, type: "icon", icon: isIcon(v.icon) ? (v.icon as string) : "star", color: color(v.color, "$accent"), chip: opt(v.chip, (x) => color(x, "$surface")), stroke: opt(v.stroke, (x) => num(x, 0.5, 4, 1.8)) };
    case "line":
      return { ...base, type: "line", style: oneOf(v.style, ["solid", "dashed", "dotted", "stitch", "wave", "zigzag", "double"] as const, "solid"), color: color(v.color), weight: num(v.weight, 1, 24, 2) };
    case "widget":
      if (!widget(str(v.widget, 30))) return null;
      return { ...base, type: "widget", widget: v.widget as never, props: props(v.props), color: opt(v.color, (x) => color(x)), accent: opt(v.accent, (x) => color(x, "$accent")), font: opt(v.font, (x) => str(x, 30)) };
  }
  return null;
}

export function section(v: unknown): Section | null {
  if (!isObj(v) || !id(v.id)) return null;
  const b = isObj(v.bg) ? v.bg : {};
  const seen = new Set<string>();
  const elements = (Array.isArray(v.elements) ? v.elements : []).slice(0, LIMITS.elements).map(element).filter((e): e is El => {
    if (!e || seen.has(e.id)) return false;
    seen.add(e.id);
    return true;
  });
  return {
    id: v.id as string,
    name: str(v.name, 80, "Section"),
    kind: opt(v.kind, (x) => str(x, 40)),
    layout: opt(v.layout, (x) => str(x, 40)),
    rows: num(v.rows, 4, 2000, 60),
    fullscreen: v.fullscreen === true || undefined,
    sticky: v.sticky === true || undefined,
    hidden: v.hidden === true || undefined,
    anchor: opt(v.anchor, (x) => str(x, 60).replace(/[^\w-]/g, "")),
    bg: {
      fill: paint(b.fill, "$bg"),
      image: isSrc(b.image) ? (b.image as string) : undefined,
      imageFit: opt(b.imageFit, (x) => oneOf(x, ["cover", "contain", "tile"] as const, "cover")),
      dim: opt(b.dim, (x) => num(x, 0, 100, 0)),
      dimColor: opt(b.dimColor, (x) => color(x)),
      pattern: opt(b.pattern, (x) => patternDef(str(x, 20)).id),
      patternColor: opt(b.patternColor, (x) => color(x)),
      patternOpacity: opt(b.patternOpacity, (x) => num(x, 0, 100, 30)),
      scene: isLivingScene(b.scene) ? (b.scene as string) : undefined,
      blur: opt(b.blur, (x) => num(x, 0, 40, 0)),
    },
    seam: isObj(v.seam) ? { shape: seamDef(str(v.seam.shape, 20)).id, depth: opt(v.seam.depth, (x) => num(x, 4, 200, 30)), flip: v.seam.flip === true || undefined, thread: opt(v.seam.thread, (x) => color(x, "$accent")) } : undefined,
    residents: Array.isArray(v.residents) ? v.residents.filter((r) => isObj(r) && isResident(r.kind)).slice(0, 6).map((r) => ({ kind: (r as { kind: string }).kind, color: isHex((r as { color?: string }).color) ? (r as { color: string }).color : undefined })) : undefined,
    phone: isObj(v.phone) ? { gap: opt(v.phone.gap, (x) => num(x, 0, 80, 14)), pad: opt(v.phone.pad, (x) => num(x, 0, 200, 56)), align: opt(v.phone.align, (x) => oneOf(x, ["start", "center"] as const, "start")) } : undefined,
    elements,
  };
}

function theme(v: unknown): Theme {
  if (!isObj(v) || !isObj(v.palette) || !isObj(v.fonts)) return themeFromKit(KITS[0]);
  const base = themeFromKit(KITS[0]);
  const palette = { ...base.palette };
  for (const k of TOKENS) if (isHex(v.palette[k])) palette[k] = v.palette[k] as string;
  return {
    palette,
    fonts: { heading: isFont(v.fonts.heading) ? (v.fonts.heading as string) : base.fonts.heading, body: isFont(v.fonts.body) ? (v.fonts.body as string) : base.fonts.body },
    radius: num(v.radius, 0, 60, 12),
    shadow: num(v.shadow, 0, 3, 1),
    kit: opt(v.kit, (x) => str(x, 40)),
    headingCase: opt(v.headingCase, (x) => oneOf(x, ["normal", "upper"] as const, "normal")),
  };
}

export function validateDoc(v: unknown): QuiltDoc {
  if (!isObj(v) || v.format !== "patchwork-quilt") throw new Error("This isn't a Patchwork Quilt site file.");
  if (v.version !== 1) throw new Error("This site was made with a newer Patchwork. Update the studio to open it.");
  if (!id(v.id)) throw new Error("This site file has no valid id.");
  const pages: Page[] = [];
  const sectionIds = new Set<string>();
  const uniqueSection = (s: Section | null) => {
    if (!s || sectionIds.has(s.id)) return null;
    sectionIds.add(s.id);
    return s;
  };
  for (const p of (Array.isArray(v.pages) ? v.pages : []).slice(0, LIMITS.pages)) {
    if (!isObj(p) || !id(p.id) || pages.some((x) => x.id === p.id)) continue;
    const sections = (Array.isArray(p.sections) ? p.sections : []).slice(0, LIMITS.sections).map((s) => uniqueSection(section(s))).filter((s): s is Section => !!s);
    let slug = str(p.slug, 60, "page").toLowerCase().replace(/[^\w-]/g, "") || "page";
    while (pages.some((x) => x.slug === slug)) slug += "-2";
    pages.push({ id: p.id as string, name: str(p.name, 60, "Page"), slug, sections, title: opt(p.title, (x) => str(x, 120)), description: opt(p.description, (x) => str(x, 300)) });
  }
  if (!pages.length) throw new Error("This site has no pages.");
  if (!pages.some((p) => p.slug === "index")) pages[0].slug = "index";
  const s = isObj(v.settings) ? v.settings : {};
  return {
    format: "patchwork-quilt",
    version: 1,
    id: v.id as string,
    name: str(v.name, 120, "Untitled site") || "Untitled site",
    createdAt: num(v.createdAt, 0, 1e15, Date.now()),
    updatedAt: num(v.updatedAt, 0, 1e15, Date.now()),
    theme: theme(v.theme),
    pages,
    header: uniqueSection(section(v.header)) ?? undefined,
    footer: uniqueSection(section(v.footer)) ?? undefined,
    settings: {
      lang: opt(s.lang, (x) => str(x, 12).replace(/[^\w-]/g, "") || "en"),
      kite: s.kite === true || undefined,
      progress: s.progress === true || undefined,
      intro: s.intro === true || undefined,
      cursor: opt(s.cursor, (x) => oneOf(x, ["none", "sparkle", "thread", "dot"] as const, "none")),
    },
    template: opt(v.template, (x) => str(x, 40)),
  };
}
