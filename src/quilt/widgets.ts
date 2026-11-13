/**
 * Widgets: the working parts of a site (menus, forms, countdowns…). Each widget is declared once here:
 * defaults, a field schema the inspector turns into controls automatically, and a renderer.
 * To add a widget: add its kind to WidgetKind in model.ts, add an entry to WIDGETS, and (if it needs
 * behaviour) a few lines in runtime.ts. Nothing in the editor needs to change.
 */
import type { WidgetEl, WidgetKind } from "./model";
import { pageSections, slugify } from "./model";
import { esc, escLines, safeUrl, type RenderCtx } from "./util";
import { iconSvg, ICONS } from "./library/icons";

export type FieldDef =
  | { key: string; label: string; kind: "text" | "textarea" | "url" | "datetime"; max?: number; placeholder?: string }
  | { key: string; label: string; kind: "number"; min: number; max: number; step?: number }
  | { key: string; label: string; kind: "toggle" }
  | { key: string; label: string; kind: "select"; options: [string, string][] }
  | { key: string; label: string; kind: "list"; item: FieldDef[]; max: number; blank: Record<string, unknown>; itemLabel: string };

export interface WidgetDef {
  kind: WidgetKind;
  name: string;
  line: string;
  icon: string;
  size: { w: number; h: number };
  defaults: () => Record<string, unknown>;
  fields: FieldDef[];
  render: (el: WidgetEl, ctx: RenderCtx) => string;
}

const str = (v: unknown, d = "") => (typeof v === "string" ? v : d);
const num = (v: unknown, d: number) => (typeof v === "number" && Number.isFinite(v) ? v : d);
const list = <T>(v: unknown): T[] => (Array.isArray(v) ? (v as T[]) : []);

const NOT_IN_MENU = new Set(["ticker", "cta", "stats", "newsletter", "header", "footer"]);

/** Links for a menu: the site's pages, this page's sections, or a custom list. */
export function menuLinks(el: WidgetEl, ctx: RenderCtx): { label: string; href: string }[] {
  const source = str(el.props.source, "pages");
  if (source === "custom")
    return list<{ label: string; href: string }>(el.props.links).map((l) => ({ label: str(l.label), href: safeUrl(str(l.href, "#")) }));
  if (source === "pages" && ctx.doc.pages.length > 1)
    return ctx.doc.pages.map((p) => ({ label: p.name, href: ctx.page(p.id) }));
  const page = ctx.doc.pages.find((p) => p.id === ctx.pageId) ?? ctx.doc.pages[0];
  return pageSections(ctx.doc, page)
    .filter(({ ref, section }) => ref.where === "page" && !section.hidden && !NOT_IN_MENU.has(section.kind ?? ""))
    .slice(1, 5)
    .map(({ section }) => ({ label: section.name, href: `#${section.anchor || slugify(section.name)}` }));
}

const SOCIAL: [string, string][] = [
  ["instagram", "Instagram"], ["tiktok", "TikTok"], ["youtube", "YouTube"], ["x", "X"], ["bluesky", "Bluesky"], ["threads", "Threads"],
  ["linkedin", "LinkedIn"], ["github", "GitHub"], ["dribbble", "Dribbble"], ["behance", "Behance"], ["spotify", "Spotify"],
  ["bandcamp", "Bandcamp"], ["substack", "Substack"], ["email", "Email"], ["website", "Website"],
];

export const WIDGETS: WidgetDef[] = [
  {
    kind: "menu",
    name: "Menu",
    line: "Links to your pages or sections. Folds into a button on phones.",
    icon: "home",
    size: { w: 40, h: 5 },
    defaults: () => ({ source: "pages", links: [{ label: "About", href: "#about" }, { label: "Work", href: "#work" }, { label: "Contact", href: "#contact" }], align: "end" }),
    fields: [
      { key: "source", label: "Links to", kind: "select", options: [["pages", "My pages"], ["sections", "Sections on this page"], ["custom", "My own list"]] },
      { key: "align", label: "Line up", kind: "select", options: [["start", "Left"], ["center", "Centre"], ["end", "Right"]] },
      { key: "links", label: "Custom links", kind: "list", max: 8, itemLabel: "Link", blank: { label: "New link", href: "#" }, item: [{ key: "label", label: "Label", kind: "text", max: 40 }, { key: "href", label: "Goes to", kind: "url" }] },
    ],
    render(el, ctx) {
      const links = menuLinks(el, ctx).map((l) => `<li><a href="${esc(l.href)}">${esc(l.label)}</a></li>`).join("");
      return `<nav class="q-menu q-menu-${esc(str(el.props.align, "end"))}" aria-label="Main"><ul class="q-menu-row">${links}</ul><details class="q-burger"><summary aria-label="Open menu"><span></span><span></span><span></span></summary><ul>${links}</ul></details></nav>`;
    },
  },
  {
    kind: "countdown",
    name: "Countdown",
    line: "Days, hours, minutes and seconds to your big day.",
    icon: "clock",
    size: { w: 52, h: 14 },
    defaults: () => ({ to: new Date(Date.now() + 1000 * 60 * 60 * 24 * 40).toISOString().slice(0, 16), style: "cards", done: "It's happening!" }),
    fields: [
      { key: "to", label: "Counting down to", kind: "datetime" },
      { key: "style", label: "Look", kind: "select", options: [["cards", "Cards"], ["plain", "Plain numbers"], ["flip", "Ticket stubs"]] },
      { key: "done", label: "When it arrives", kind: "text", max: 60 },
    ],
    render(el) {
      const to = str(el.props.to);
      const units = ["Days", "Hours", "Minutes", "Seconds"].map((u) => `<span class="q-cd-unit"><b>00</b><small>${u}</small></span>`).join("");
      return `<div class="q-countdown q-cd-${esc(str(el.props.style, "cards"))}" data-countdown="${esc(to)}" data-done="${esc(str(el.props.done))}"><time datetime="${esc(to)}">${units}</time></div>`;
    },
  },
  {
    kind: "marquee",
    name: "Ticker",
    line: "A band of words that never stops scrolling.",
    icon: "wave",
    size: { w: 96, h: 8 },
    defaults: () => ({ text: "Made by hand ✳ Open every day ✳ Say hello ✳", speed: 30, size: 32, reverse: false }),
    fields: [
      { key: "text", label: "Words", kind: "text", max: 200 },
      { key: "size", label: "Size", kind: "number", min: 12, max: 120 },
      { key: "speed", label: "Seconds per loop", kind: "number", min: 6, max: 120 },
      { key: "reverse", label: "Run the other way", kind: "toggle" },
    ],
    render(el) {
      const t = esc(str(el.props.text));
      const size = num(el.props.size, 32);
      return `<div class="q-marquee${el.props.reverse ? " q-rev" : ""}" style="--q-ms:${num(el.props.speed, 30)}s;--q-mf:${size};font-family:${fontFor(el)}"><div class="q-marquee-track" aria-hidden="true"><span>${t}&nbsp;</span><span>${t}&nbsp;</span><span>${t}&nbsp;</span><span>${t}&nbsp;</span></div><span class="q-sr">${t}</span></div>`;
    },
  },
  {
    kind: "faq",
    name: "Questions",
    line: "Questions that open to show their answers.",
    icon: "chat",
    size: { w: 56, h: 36 },
    defaults: () => ({ items: [{ q: "Do you ship worldwide?", a: "Yes. Everything is packed by hand and sent with tracking." }, { q: "Can I visit?", a: "The studio is open on Saturdays from ten until four." }, { q: "Do you take commissions?", a: "A few each season. Write to us and say what you have in mind." }] }),
    fields: [{ key: "items", label: "Questions", kind: "list", max: 20, itemLabel: "Question", blank: { q: "A new question?", a: "The answer." }, item: [{ key: "q", label: "Question", kind: "text", max: 200 }, { key: "a", label: "Answer", kind: "textarea", max: 2000 }] }],
    render(el) {
      const items = list<{ q: string; a: string }>(el.props.items).map((i, n) => `<details class="q-faq-item"${n === 0 ? " open" : ""}><summary><span>${esc(i.q)}</span><i aria-hidden="true"></i></summary><div>${escLines(i.a)}</div></details>`).join("");
      return `<div class="q-faq">${items}</div>`;
    },
  },
  {
    kind: "form",
    name: "Form",
    line: "A contact or sign-up form. Sends to your email or form service.",
    icon: "mail",
    size: { w: 44, h: 40 },
    defaults: () => ({ fields: [{ label: "Your name", type: "text", required: true }, { label: "Email", type: "email", required: true }, { label: "Message", type: "textarea", required: false }], button: "Send it", action: "", success: "Thank you! We'll write back soon.", inline: false }),
    fields: [
      { key: "action", label: "Send to (your email, or a form service URL)", kind: "url", placeholder: "you@example.com" },
      { key: "button", label: "Button", kind: "text", max: 40 },
      { key: "success", label: "Thank-you message", kind: "text", max: 200 },
      { key: "inline", label: "One line (sign-up style)", kind: "toggle" },
      { key: "fields", label: "Fields", kind: "list", max: 10, itemLabel: "Field", blank: { label: "New field", type: "text", required: false }, item: [{ key: "label", label: "Label", kind: "text", max: 60 }, { key: "type", label: "Kind", kind: "select", options: [["text", "Short text"], ["email", "Email"], ["tel", "Phone"], ["textarea", "Long text"], ["date", "Date"]] }, { key: "required", label: "Required", kind: "toggle" }] },
    ],
    render(el) {
      const raw = str(el.props.action).trim();
      const action = /^[^@\s]+@[^@\s]+\.[a-z]{2,}$/i.test(raw) ? `mailto:${raw}` : /^https:\/\//i.test(raw) ? raw : "";
      const fields = list<{ label: string; type: string; required?: boolean }>(el.props.fields).map((f, i) => {
        const id = `${el.id}-f${i}`, name = slugify(f.label) || `field-${i}`, req = f.required ? " required" : "";
        const input = f.type === "textarea" ? `<textarea id="${id}" name="${esc(name)}" rows="4"${req}></textarea>` : `<input id="${id}" name="${esc(name)}" type="${["email", "tel", "date"].includes(f.type) ? f.type : "text"}"${req}>`;
        return `<label class="q-field" for="${id}"><span>${esc(f.label)}${f.required ? " *" : ""}</span>${input}</label>`;
      }).join("");
      const method = action.startsWith("mailto:") ? ` method="post" enctype="text/plain"` : action ? ` method="post"` : "";
      return `<form class="q-form${el.props.inline ? " q-form-inline" : ""}"${action ? ` action="${esc(action)}"` : ""}${method} data-q-form data-success="${esc(str(el.props.success))}">${fields}<button class="q-btn q-btn-solid q-btn-m" type="submit">${esc(str(el.props.button, "Send"))}</button><p class="q-form-done" role="status" hidden></p></form>`;
    },
  },
  {
    kind: "social",
    name: "Social links",
    line: "Where else people can find you.",
    icon: "link",
    size: { w: 44, h: 6 },
    defaults: () => ({ links: [{ kind: "instagram", url: "https://instagram.com/" }, { kind: "email", url: "hello@example.com" }], style: "pills" }),
    fields: [
      { key: "style", label: "Look", kind: "select", options: [["pills", "Pills"], ["text", "Plain words"], ["stamps", "Stamps"]] },
      { key: "links", label: "Links", kind: "list", max: 12, itemLabel: "Link", blank: { kind: "website", url: "https://" }, item: [{ key: "kind", label: "Where", kind: "select", options: SOCIAL }, { key: "url", label: "Address", kind: "url" }] },
    ],
    render(el) {
      const links = list<{ kind: string; url: string }>(el.props.links).map((l) => {
        const name = SOCIAL.find(([k]) => k === l.kind)?.[1] ?? "Link";
        const u = l.kind === "email" && !/^mailto:/i.test(l.url) ? `mailto:${l.url}` : safeUrl(str(l.url));
        return `<a href="${esc(u)}" rel="me noopener" target="_blank">${esc(name)}<span aria-hidden="true">↗</span></a>`;
      }).join("");
      return `<div class="q-social q-social-${esc(str(el.props.style, "pills"))}">${links}</div>`;
    },
  },
  {
    kind: "list",
    name: "List",
    line: "A list with ticks, stars, numbers or any icon.",
    icon: "check",
    size: { w: 36, h: 18 },
    defaults: () => ({ items: ["Made in small batches", "Packed without plastic", "Free repairs for life"], marker: "check", size: 18 }),
    fields: [
      { key: "marker", label: "Marker", kind: "select", options: [["check", "Tick"], ["star", "Star"], ["sparkle", "Sparkle"], ["heart", "Heart"], ["arrow", "Arrow"], ["number", "Numbers"], ["dot", "Dots"]] },
      { key: "size", label: "Text size", kind: "number", min: 12, max: 40 },
      { key: "items", label: "Items", kind: "list", max: 20, itemLabel: "Item", blank: { text: "Another thing" }, item: [{ key: "text", label: "Text", kind: "text", max: 200 }] },
    ],
    render(el) {
      const marker = str(el.props.marker, "check");
      const items = list<string | { text: string }>(el.props.items).map((i, n) => {
        const t = typeof i === "string" ? i : str(i.text);
        const m = marker === "number" ? `<b>${String(n + 1).padStart(2, "0")}</b>` : marker === "dot" ? `<b class="q-dot"></b>` : `<b>${iconSvg(marker in ICONS ? marker : "check", 2.2)}</b>`;
        return `<li>${m}<span>${esc(t)}</span></li>`;
      }).join("");
      return `<ul class="q-list" style="font-size:max(${Math.round(num(el.props.size, 18) * 0.9)}px, calc(${num(el.props.size, 18)} * var(--u)))">${items}</ul>`;
    },
  },
  {
    kind: "stats",
    name: "Numbers",
    line: "Big numbers that count up when they come into view.",
    icon: "chart",
    size: { w: 72, h: 14 },
    defaults: () => ({ items: [{ value: "12", suffix: "yrs", label: "Making things" }, { value: "4800", suffix: "+", label: "Happy people" }, { value: "36", suffix: "", label: "Cities" }] }),
    fields: [{ key: "items", label: "Numbers", kind: "list", max: 6, itemLabel: "Number", blank: { value: "100", suffix: "%", label: "Something good" }, item: [{ key: "value", label: "Number", kind: "text", max: 12 }, { key: "suffix", label: "After it", kind: "text", max: 8 }, { key: "label", label: "Label", kind: "text", max: 60 }] }],
    render(el) {
      const items = list<{ value: string; suffix: string; label: string }>(el.props.items).map((i) => {
        const n = str(i.value).replace(/[^\d.]/g, "");
        return `<div class="q-stat"><b><span${n ? ` data-count="${esc(n)}"` : ""}>${esc(i.value)}</span><em>${esc(i.suffix)}</em></b><small>${esc(i.label)}</small></div>`;
      }).join("");
      return `<div class="q-stats">${items}</div>`;
    },
  },
  {
    kind: "video",
    name: "Video",
    line: "Your own video file, looping quietly or with controls.",
    icon: "film",
    size: { w: 48, h: 34 },
    defaults: () => ({ src: "", autoplay: true, controls: false }),
    fields: [
      { key: "autoplay", label: "Play quietly on loop", kind: "toggle" },
      { key: "controls", label: "Show controls", kind: "toggle" },
    ],
    render(el, ctx) {
      const src = str(el.props.src);
      if (!src) return `<div class="q-video q-empty"><span>${iconSvg("film")}Choose a video in the panel</span></div>`;
      const auto = el.props.autoplay ? " autoplay muted loop playsinline" : "";
      return `<div class="q-video"><video src="${esc(ctx.asset(src))}"${auto}${el.props.controls ? " controls" : ""} preload="metadata"></video></div>`;
    },
  },
];

function fontFor(el: WidgetEl) {
  return el.font ? `var(--q-f-${el.font === "body" ? "body" : "head"})` : "var(--q-f-head)";
}

export const widget = (k: string) => WIDGETS.find((w) => w.kind === k);
