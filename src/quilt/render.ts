/**
 * The Quilt renderer: one document → CSS + HTML. The editor canvas, the preview and the download all use
 * these functions, so what you edit is what you ship.
 *
 *  siteCss(doc, ctx)          theme variables + fonts + base stylesheet
 *  sectionCss(section, …)     everything one section needs (background, seam, element placement, phone rules)
 *  elementInner(el, ctx)      the markup inside one element's wrapper (the editor renders wrappers itself)
 *  sectionHtml(section, …)    a whole section as a string (preview and export)
 *  pageDocument(doc, page, …) a complete HTML page
 */
import type { El, Frame, Page, QuiltDoc, Section, Seam } from "./model";
import { GRID, COL_PX, PHONE_MAX, pageSections, slugify, isGradient } from "./model";
import { css, paintCss, fontStack, fontFaceCss, hex, readableOn, SHADOWS, paintBase } from "./theme";
import { esc, escLines, linkAttrs, type RenderCtx } from "./util";
import { tree, floats, phoneOrder, phoneAlign, isBox, type Node } from "./layout";
import { shapeDef, shapeMask } from "./library/shapes";
import { iconSvg } from "./library/icons";
import { seamDef, patternDef, SEAMS } from "./library/seams";
import { SITE_CSS, PHONE } from "./site-css";
import { widget } from "./widgets";
import { pieceDef } from "./pieces";

/** Theme variables and font faces. */
export function themeCss(doc: QuiltDoc, ctx: RenderCtx, scope = ".q-site") {
  const t = ctx.theme, p = t.palette;
  const vars = Object.entries(p).map(([k, v]) => `--q-${k}:${v}`).join(";");
  const fonts = usedFonts(doc);
  return `${fontFaceCss(fonts, ctx.base)}${scope}{${vars};--q-f-head:${fontStack("heading", t)};--q-f-body:${fontStack("body", t)};--q-radius:${t.radius}px;--q-shadow-x:${SHADOWS[t.shadow] ?? SHADOWS[1]}}`;
}

export function usedFonts(doc: QuiltDoc): Set<string> {
  const ids = new Set([doc.theme.fonts.heading, doc.theme.fonts.body]);
  const visit = (s: Section) => {
    for (const e of s.elements) {
      if (e.type === "text" && !["heading", "body"].includes(e.style.font)) ids.add(e.style.font);
      if (e.type === "button" && e.style.font && !["heading", "body"].includes(e.style.font)) ids.add(e.style.font);
      if (e.type === "image" && e.frameStyle === "polaroid" && e.caption) ids.add("caveat");
    }
  };
  if (doc.header) visit(doc.header);
  if (doc.footer) visit(doc.footer);
  doc.pages.forEach((p) => p.sections.forEach(visit));
  return ids;
}

export function siteCss(doc: QuiltDoc, ctx: RenderCtx) {
  return themeCss(doc, ctx) + SITE_CSS;
}

export const anchorOf = (s: Section) => s.anchor || slugify(s.name);

const px = (n: number) => `${Math.round(n * 100) / 100}px`;
/** A design-pixel length that scales down with the screen. */
const scaled = (n: number) => `calc(${n} * var(--u))`;

/** Desktop text size → phone text size. Big type shrinks more than body copy. */
export function phoneSize(size: number, scale?: number) {
  if (scale) return Math.max(11, Math.round(size * scale));
  if (size <= 18) return Math.max(13, Math.round(size * 0.95));
  if (size <= 32) return Math.round(size * 0.8);
  return Math.max(28, Math.round(size * 0.5));
}

function gridArea(f: Frame, parent?: Frame) {
  const x = f.x - (parent?.x ?? 0), y = f.y - (parent?.y ?? 0);
  return `grid-area:${y + 1}/${x + 1}/span ${Math.max(1, f.h)}/span ${Math.max(1, f.w)}`;
}

/** Rules for one element (desktop + phone), selector .q-e-<id>. */
function elementCss(el: El, z: number, parent: Frame | undefined, rows: number, ctx: RenderCtx, phone: string[]): string {
  const sel = `.q-e-${el.id}`, f = el.frame, t = ctx.theme;
  const decl: string[] = [gridArea(f, parent), `z-index:${z}`];
  if (f.r) decl.push(`--r:${f.r}deg`);
  if (el.opacity !== undefined && el.opacity < 100) decl.push(`opacity:${el.opacity / 100}`);
  if (el.anim?.enter && el.anim.enter !== "none") {
    if (el.anim.delay) decl.push(`--q-delay:${el.anim.delay}s`);
    if (el.anim.duration) decl.push(`--q-dur:${el.anim.duration}s`);
  }
  let out = "";
  const ph: string[] = [];
  const aspect = `aspect-ratio:${Math.round(f.w * COL_PX)}/${Math.round(f.h * GRID.row)};height:auto`;
  switch (el.type) {
    case "text": {
      const s = el.style;
      const fx = s.effectColor ?? (s.effect === "highlight" ? "$accent3" : "$accent");
      const inner = [
        `font-family:${fontStack(s.font, t)}`,
        `font-size:max(${px(phoneSize(s.size, el.phone?.scale))},${scaled(s.size)})`,
        `line-height:${s.lineHeight ?? (s.size >= 40 ? 1.05 : s.size >= 24 ? 1.2 : 1.55)}`,
        `--fw:${s.weight ?? (s.role === "body" || s.role === "small" ? 400 : s.font === "heading" && ["display", "h1", "h2"].includes(s.role) ? 500 : 600)}`,
        `color:${css(s.color)}`,
        `text-align:${s.align ?? "left"}`,
        `--fx:${css(fx)}`,
        `--fx2:${css(s.effect === "gradient" ? (s.effectColor ? "$accent2" : "$accent2") : "$accent2")}`,
      ];
      if (s.italic) inner.push("font-style:italic");
      if (s.underline) inner.push("text-decoration:underline;text-underline-offset:.18em;text-decoration-thickness:.06em");
      if (s.upper || (t.headingCase === "upper" && s.font === "heading" && s.role !== "body")) inner.push("text-transform:uppercase");
      if (s.tracking !== undefined) inner.push(`letter-spacing:${s.tracking}em`);
      else if (s.role === "label") inner.push("letter-spacing:.14em;text-transform:uppercase");
      else if (s.size >= 48) inner.push("letter-spacing:-.02em");
      if (s.background) inner.push(`background:${css(s.background)};padding:${px(s.pad ?? 18)};border-radius:${px(s.radius ?? t.radius)}`);
      if (s.role === "quote") inner.push("font-style:italic");
      out += `${sel} .q-text{${inner.join(";")}}`;
      break;
    }
    case "button": {
      const s = el.style;
      const solid = ["solid", "pill", "sticker"].includes(s.variant);
      const text = s.text ?? (solid ? readableOn(s.color, t) : s.color);
      decl.push(`--bc:${css(s.color)}`, `--bt:${css(text)}`);
      if (s.radius !== undefined) decl.push(`--br:${s.radius}px`);
      if (s.font) decl.push(`--bf:${fontStack(s.font, t)}`);
      ph.push(`${sel}{flex:0 0 auto}`);
      break;
    }
    case "image": {
      decl.push(`--ir:${px(el.radius ?? (el.mask === "none" || !el.mask ? t.radius : 0))}`);
      if (el.fit) decl.push(`--fit:${el.fit}`);
      if (el.filter === "duotone") decl.push(`--d1:${css(el.tone?.[0] ?? "$ink")}`, `--d2:${css(el.tone?.[1] ?? "$accent3")}`);
      ph.push(`${sel}{${aspect}}`);
      break;
    }
    case "shape": {
      const def = shapeDef(el.shape);
      decl.push(`--sf:${paintCss(el.fill)}`);
      if (def.id !== "rect") decl.push(`--mk:${shapeMask(def.id)}`, `--ms:${def.stretch || el.stretch ? "100% 100%" : "contain"}`);
      out += `${sel}>.q-shape,${sel}>.q-fill{background:${paintCss(el.fill)};${def.id === "rect" ? `border-radius:${px(el.radius ?? 0)};` : ""}${el.stroke ? `outline:${el.stroke.width}px ${el.stroke.dash ? "dashed" : "solid"} ${css(el.stroke.color)};outline-offset:-${el.stroke.width}px;` : ""}}`;
      if (isBox(el) && def.id !== "rect") out += `${sel}>.q-fill{-webkit-mask:${shapeMask(def.id)} center/100% 100% no-repeat;mask:${shapeMask(def.id)} center/100% 100% no-repeat}`;
      if (!isBox(el)) ph.push(`${sel}{${aspect}}`);
      break;
    }
    case "icon":
      decl.push(`--ic:${css(el.color)}`);
      if (el.chip) decl.push(`--ch:${css(el.chip)}`);
      ph.push(`${sel}{flex:0 0 auto;width:${px(Math.min(f.w * COL_PX, 72))};${aspect}}`);
      break;
    case "line":
      decl.push(`--lc:${css(el.color)}`, `--lw:${px(el.weight)}`);
      if (el.style === "wave") decl.push(`--lm:${SEAMS.waveLine}`);
      if (el.style === "zigzag") decl.push(`--lm:${SEAMS.zigLine}`);
      ph.push(`${sel}{height:${px(Math.max(12, el.weight * 6))}}`);
      break;
    case "widget":
      if (el.color) decl.push(`--wc:${css(el.color)}`);
      if (el.accent) decl.push(`--wa:${css(el.accent)}`);
      if (el.widget === "video") ph.push(`${sel}{${aspect}}`);
      if (el.widget === "marquee") ph.push(`${sel}{height:${px(Math.max(36, f.h * GRID.row * 0.6))};margin-inline:-22px;flex-basis:calc(100% + 44px)!important}`);
      if (el.widget === "menu") ph.push(`${sel}{flex:0 0 auto}`);
      break;
  }
  if (floats(el)) {
    // Decorations keep their place relative to the section, as a share of its size.
    // Decorations keep their distance from the nearest edge (top or bottom), shrunk to phone scale.
    const w = (f.w / GRID.cols) * 100;
    const top = f.y + f.h / 2 < rows / 2;
    const v = top ? `top:${Math.round(f.y * GRID.row * 0.6)}px` : `bottom:${Math.round(Math.max(0, rows - f.y - f.h) * GRID.row * 0.6)}px`;
    ph.push(`${sel}{left:${((f.x / GRID.cols) * 100).toFixed(2)}%;${v};width:${Math.max(w * 0.7, 6).toFixed(2)}%}`);
  }
  if (el.phone?.order !== undefined) ph.push(`${sel}{order:${el.phone.order}}`);
  phone.push(...ph);
  return `${sel}{${decl.join(";")}}` + out;
}

/** Everything one section needs. `index` is its place on the page (earlier sections sit above later ones). */
export function sectionCss(s: Section, index: number, total: number, ctx: RenderCtx): string {
  const sel = `.q-s-${s.id}`, b = s.bg, t = ctx.theme;
  const decl: string[] = [`z-index:${s.sticky ? 900 : total - index + 1}`];
  const bg: string[] = [`background:${paintCss(b.fill, "var(--q-bg)")}`];
  if (b.image) {
    const fit = b.imageFit ?? "cover";
    bg.push(`background-image:url("${esc(ctx.asset(b.image))}")${isGradient(b.fill) ? "," + paintCss(b.fill) : ""}`, `background-size:${fit === "tile" ? "auto" : fit}`, `background-position:center`, `background-repeat:${fit === "tile" ? "repeat" : "no-repeat"}`);
    if (!isGradient(b.fill)) bg.push(`background-color:${css(b.fill as string, "var(--q-bg)")}`);
  }
  const pat = patternDef(b.pattern ?? "none");
  if (pat.id !== "none") bg.push(`--q-pc:${css(b.patternColor ?? "$ink")}`, `--q-po:${(b.patternOpacity ?? pat.opacity) / 100}`, `--q-pm:${pat.mask} 0 0/${pat.size}px ${pat.size}px repeat`);
  let out = `${sel}>.q-bg{${bg.join(";")}}`;
  if (b.blur && b.image) out += `${sel}>.q-bg{filter:blur(${b.blur}px);inset:-${b.blur * 2}px}`;
  if ((b.dim ?? 0) > 0) out += `${sel}>.q-bg>.q-dim{background:${css(b.dimColor ?? "$ink")};opacity:${(b.dim ?? 0) / 100}}`;
  out += seamCss(s.seam, sel, decl, t);
  out += `${sel}{${decl.join(";")}}`;
  out += `${sel}>.q-grid{grid-template-rows:repeat(${Math.max(1, s.rows)},minmax(${scaled(GRID.row)},auto))}`;
  const phone: string[] = [];
  const walk = (nodes: Node[], parent?: Frame) => {
    nodes.forEach((n, i) => {
      out += elementCss(n.el, i + 1, parent, s.rows, ctx, phone);
      walk(n.children, n.el.frame);
    });
  };
  walk(tree(s.elements));
  const ppad = s.phone?.pad, gap = s.phone?.gap;
  if (ppad !== undefined || gap !== undefined) phone.push(`${sel}>.q-grid{${ppad !== undefined ? `--q-ppad:${ppad}px;` : ""}${gap !== undefined ? `--q-gap:${gap}px` : ""}}`);
  if (phone.length) out += `${PHONE}{${phone.join("")}}`;
  return out;
}

function seamCss(seam: Seam | undefined, sel: string, decl: string[], _t: unknown) {
  if (!seam || seam.shape === "none") return "";
  const def = seamDef(seam.shape);
  let out = "";
  if (seam.shape === "stitch" || seam.thread) out += `${sel}{--q-tc:${css(seam.thread ?? "$accent")}}`;
  if (seam.shape === "stitch") return out;
  const d = seam.depth ?? def.depth;
  decl.push(`--q-sd:${d}px`, `margin-bottom:-${d}px`);
  const edge = def.tile ? `${def.mask(!!seam.flip)} left bottom/${def.tile}px ${d}px repeat-x` : `${def.mask(!!seam.flip)} center bottom/100% ${d}px no-repeat`;
  const m = `linear-gradient(#000 0 0) top/100% calc(100% - ${d}px + 1px) no-repeat,${edge}`;
  decl.push(`-webkit-mask:${m}`, `mask:${m}`);
  return out;
}

/** Classes on an element's wrapper. */
export function elementClasses(el: El, isFloat: boolean): string {
  const c = ["q-e", `q-e-${el.id}`, `q-k-${el.type}`];
  if (isBox(el)) c.push("q-box");
  if (el.type === "button" || el.type === "icon" || (el.type === "widget" && el.widget === "menu")) c.push("q-inline");
  if (el.type === "button" && el.style.full) c.push("q-full-btn");
  if (isFloat) c.push("q-float");
  if (el.phone?.hide) c.push("q-hide-phone");
  if (el.hideDesktop) c.push("q-only-phone");
  if (el.type === "image" && el.frameStyle && el.frameStyle !== "none") c.push(`q-frame-${el.frameStyle}`);
  if (el.anim?.hover && el.anim.hover !== "none") c.push(`q-hover-${el.anim.hover}`);
  return c.join(" ");
}
export function elementData(el: El): Record<string, string> {
  const d: Record<string, string> = {};
  if (el.anim?.enter && el.anim.enter !== "none") d["data-enter"] = el.anim.enter;
  if (el.anim?.parallax) d["data-parallax"] = String(el.anim.parallax);
  return d;
}

const TEXT_TAG: Record<string, string> = { display: "h1", h1: "h1", h2: "h2", h3: "h3", body: "p", small: "p", label: "p", quote: "blockquote" };

/** What goes inside an element's wrapper. */
export function elementInner(el: El, ctx: RenderCtx): string {
  const loop = el.anim?.loop && el.anim.loop !== "none" ? ` q-loop-${el.anim.loop}` : "";
  const hit = el.link && el.type !== "button" ? `<a class="q-hit" ${linkAttrs(el.link, ctx)} aria-label="${esc(el.name || "Open link")}"></a>` : "";
  switch (el.type) {
    case "text": {
      const tag = TEXT_TAG[el.style.role] ?? "p";
      const fx = el.style.effect && el.style.effect !== "none" ? ` q-fx-${el.style.effect}` : "";
      return `<${tag} class="q-text q-r-${el.style.role}${fx}${el.style.role === "quote" ? " q-quote" : ""}${loop}"><span class="q-tx">${escLines(el.text)}</span></${tag}>${hit}`;
    }
    case "button": {
      const icon = el.style.icon && el.style.icon !== "none" ? iconSvg(el.style.icon === "arrow-up-right" ? "arrow-up-right" : el.style.icon, 2.2) : "";
      return `<a class="q-btn q-btn-${el.style.variant} q-btn-${el.style.size}${loop}" ${linkAttrs(el.link, ctx)}>${esc(el.label)}${icon}</a>`;
    }
    case "image": {
      const mask = el.mask && el.mask !== "none" ? el.mask : "";
      const shaped = ["blob", "diamond", "hexagon", "flower", "scallop"].includes(mask);
      const maskShape = { blob: "blob", diamond: "diamond", hexagon: "hexagon", flower: "daisy", scallop: "badge" }[mask as "blob"];
      const cls = ["q-img", mask ? (shaped ? "q-mask-shape" : `q-mask-${mask}`) : "", el.filter && el.filter !== "none" ? `q-flt-${el.filter}` : ""].filter(Boolean).join(" ");
      const style = [shaped ? `--mk:${shapeMask(maskShape)}` : "", el.focus ? `object-position:${el.focus.x}% ${el.focus.y}%` : ""];
      const cap = el.frameStyle === "polaroid" && el.caption ? `<figcaption>${esc(el.caption)}</figcaption>` : "";
      const tag = cap ? "figure" : "div";
      const st = [style[0], cap ? "margin:0" : ""].filter(Boolean).join(";");
      return `<${tag} class="${cls}${loop}"${st ? ` style="${st}"` : ""}><img src="${esc(ctx.asset(el.src))}" alt="${esc(el.alt)}" loading="lazy" decoding="async"${style[1] ? ` style="${style[1]}"` : ""}>${cap}</${tag}>${hit}`;
    }
    case "shape":
      if (isBox(el)) return `<div class="q-fill${loop}" aria-hidden="true"></div>${hit}`;
      return `<div class="q-shape${shapeDef(el.shape).id === "rect" ? "" : " q-masked"}${loop}" aria-hidden="true"></div>${hit}`;
    case "icon":
      return `<span class="q-icon${el.chip ? " q-chip" : ""}${loop}" aria-hidden="true">${iconSvg(el.icon, el.stroke ?? 1.8)}</span>${hit}`;
    case "line":
      return `<div class="q-line q-line-${el.style}${loop}" role="separator"></div>`;
    case "widget": {
      const w = widget(el.widget);
      return w ? w.render(el, ctx) : "";
    }
  }
}

function attrs(d: Record<string, string>) {
  return Object.entries(d).map(([k, v]) => ` ${k}="${esc(v)}"`).join("");
}

function nodesHtml(nodes: Node[], ctx: RenderCtx): string {
  return nodes
    .map((n) => {
      const el = n.el;
      const children = n.children.length ? nodesHtml(n.children, ctx) : "";
      return `<div class="${elementClasses(el, floats(el))}"${attrs(elementData(el))}>${elementInner(el, ctx)}${children}</div>`;
    })
    .join("");
}

/** The phone order is expressed with CSS `order`, so the DOM keeps desktop paint order. */
export function phoneOrderCss(s: Section): string {
  const rules: string[] = [];
  const walk = (nodes: Node[]) => {
    phoneOrder(nodes).forEach((n, i) => {
      if (n.el.phone?.order === undefined) rules.push(`.q-e-${n.el.id}{order:${i}}`);
    });
    nodes.forEach((n) => walk(n.children));
  };
  walk(tree(s.elements));
  return rules.length ? `${PHONE}{${rules.join("")}}` : "";
}

export function sectionClasses(s: Section): string {
  const c = ["q-sec", `q-s-${s.id}`];
  if (s.fullscreen) c.push("q-full");
  if (s.sticky) c.push("q-sticky");
  if (s.kind === "header") c.push("q-bar");
  if (s.piece) c.push("q-has-piece");
  if (s.seam && s.seam.shape !== "none") c.push(`q-seam-${s.seam.shape}`);
  return c.join(" ");
}

export function sectionBgHtml(s: Section, ctx: RenderCtx): string {
  if (s.piece) {
    const def = pieceDef(s.piece);
    const live = ctx.piece?.(s);
    // The piece is the section's main content, so unlike a backdrop it is announced and focusable.
    const inner = live
      ? `<iframe class="q-piece" src="${esc(live)}" title="${esc(String(s.piece.config.headline ?? def?.name ?? "Hero"))}" allow="autoplay"></iframe>`
      : def?.cover ? `<img class="q-piece-still" src="${esc(def.cover)}" alt="">` : "";
    return `<div class="q-bg q-bg-scene q-bg-piece">${inner}<div class="q-dim"></div></div>`;
  }
  const scene = s.bg.scene ? `<iframe src="${esc(ctx.scene(s.bg.scene))}" title="" tabindex="-1" loading="lazy" aria-hidden="true"></iframe>` : "";
  return `<div class="q-bg${scene ? " q-bg-scene" : ""}" aria-hidden="true">${scene}<div class="q-dim"></div></div>`;
}
export function residentsHtml(s: Section): string {
  return (s.residents ?? []).map((r) => `<pw-pal kind="${esc(r.kind)}"${r.color ? ` color="${esc(r.color)}"` : ""}></pw-pal>`).join("");
}
export function threadHtml(s: Section): string {
  return s.seam && (s.seam.shape === "stitch" || s.seam.thread) ? `<div class="q-thread" aria-hidden="true"></div>` : "";
}

export function sectionHtml(s: Section, ctx: RenderCtx): string {
  const tag = s.kind === "header" ? "header" : s.kind === "footer" ? "footer" : "section";
  const center = phoneAlign(s) === "center" ? " q-center" : "";
  return `<${tag} id="${esc(anchorOf(s))}" class="${sectionClasses(s)}">${sectionBgHtml(s, ctx)}<div class="q-grid${center}">${nodesHtml(tree(s.elements), ctx)}</div>${threadHtml(s)}${residentsHtml(s)}</${tag}>`;
}

/** CSS for every section shown on a page. */
export function pageCss(doc: QuiltDoc, page: Page, ctx: RenderCtx) {
  const list = pageSections(doc, page).filter((x) => !x.section.hidden);
  return list.map((x, i) => sectionCss(x.section, i, list.length, ctx) + phoneOrderCss(x.section)).join("");
}

export function pageBody(doc: QuiltDoc, page: Page, ctx: RenderCtx) {
  const list = pageSections(doc, page).filter((x) => !x.section.hidden);
  const html = list.map((x) => sectionHtml(x.section, ctx)).join("");
  const extras = [
    doc.settings.progress ? `<div class="q-progress" aria-hidden="true"></div>` : "",
    doc.settings.kite ? `<pw-kite color="${esc(hex("$accent", ctx.theme))}" color2="${esc(hex("$accent2", ctx.theme))}" tail="${esc(hex("$accent3", ctx.theme))}" threshold="700"></pw-kite>` : "",
  ].join("");
  return `<div class="q-site${doc.settings.intro ? " q-intro" : ""}" data-cursor="${esc(doc.settings.cursor ?? "none")}"><main>${html}</main>${extras}</div>`;
}

/** Does this page need the spirits / components scripts? */
export function pageNeeds(doc: QuiltDoc, page: Page) {
  const secs = pageSections(doc, page).map((x) => x.section).filter((s) => !s.hidden);
  return {
    pals: secs.some((s) => (s.residents?.length ?? 0) > 0),
    kite: !!doc.settings.kite,
    scenes: [...new Set(secs.map((s) => s.bg.scene).filter((x): x is string => !!x))],
    pieces: secs.filter((s) => s.piece),
  };
}

export interface DocumentOptions {
  /** Where scripts live, relative to the page. */
  scripts: { runtime: string; spirits?: string; components?: string };
  /** Inline CSS (preview) or a stylesheet link (export). */
  stylesheet?: string;
  inlineCss?: string;
  inlineRuntime?: string;
  headExtra?: string;
}
export function pageDocument(doc: QuiltDoc, page: Page, ctx: RenderCtx, o: DocumentOptions) {
  const needs = pageNeeds(doc, page);
  const title = page.title || (page.slug === "index" ? doc.name : `${page.name} · ${doc.name}`);
  const desc = page.description || firstText(page) || doc.name;
  const sp = o.scripts.spirits, cp = o.scripts.components;
  const scripts = [
    needs.pals && sp ? `<script src="${sp}kit.js"></script><script src="${sp}pals.js"></script>` : "",
    needs.kite && cp ? `<script src="${cp}kit.js"></script><script src="${cp}kite.js"></script>` : "",
    o.inlineRuntime ? `<script>${o.inlineRuntime}</script>` : `<script src="${o.scripts.runtime}"></script>`,
  ].join("");
  const fav = `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><rect width="64" height="64" rx="16" fill="${hex("$accent", ctx.theme)}"/><path d="M32 12v40M12 32h40M18 18l28 28M46 18 18 46" stroke="${hex(readableOn("$accent", ctx.theme), ctx.theme)}" stroke-width="6" stroke-linecap="round"/></svg>`)}`;
  return `<!doctype html><html lang="${esc(doc.settings.lang || "en")}"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)}</title><meta name="description" content="${esc(desc.slice(0, 300))}"><meta name="theme-color" content="${esc(hex(paintBase(firstFill(doc, page)), ctx.theme))}"><meta name="generator" content="Patchwork Quilt"><link rel="icon" href="${fav}">${o.stylesheet ? `<link rel="stylesheet" href="${o.stylesheet}">` : ""}${o.inlineCss ? `<style>${o.inlineCss}</style>` : ""}${o.headExtra ?? ""}<style>html,body{margin:0;background:${esc(hex(paintBase(firstFill(doc, page)), ctx.theme))}}</style></head><body>${pageBody(doc, page, ctx)}${scripts}</body></html>`;
}

function firstText(page: Page) {
  for (const s of page.sections) for (const e of s.elements) if (e.type === "text" && e.style.role === "body") return e.text;
  return "";
}
function firstFill(doc: QuiltDoc, page: Page) {
  return (page.sections[0] ?? doc.header)?.bg.fill ?? "$bg";
}

export const PHONE_QUERY_MAX = PHONE_MAX;
