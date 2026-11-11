import { hero2, normalizeHero2, type Hero2Config, type Hero2Id } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const arrow = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2 8h11M9 3.5 13.5 8 9 12.5" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
/** Split a headline into masked words for staggered entrances; screen readers get the plain sentence. */
const words = (text: string, cls = "w") =>
  `<span class="hx-sr">${esc(text)}</span><span aria-hidden="true">${text.split(/\s+/).map((w) => `<span class="${cls}"><span>${esc(w)}</span></span>`).join(" ")}</span>`;
/** Masked words without the screen-reader copy, for headlines split across lines. */
const masked = (text: string) => text.split(/\s+/).filter(Boolean).map((w) => `<span class="w"><span>${esc(w)}</span></span>`).join(" ");
const halves = (text: string) => {
  const w = text.split(/\s+/), cut = Math.ceil(w.length / 2);
  return [w.slice(0, cut).join(" "), w.slice(cut).join(" ")];
};
const nav = (c: Hero2Config, mark: string, links: string[]) =>
  `<header class="hx-nav"><a class="hx-brand" href="#">${mark}<span>${esc(c.brand)}</span></a><nav aria-label="Primary">${links.map((l) => `<a class="hx-link" href="#">${l}</a>`).join("")}</nav></header>`;
const actions = (c: Hero2Config, extra = "") =>
  `<div class="hx-actions"><a class="hx-btn" href="${esc(c.href)}"${extra}>${esc(c.cta)}${arrow}</a><a class="hx-btn hx-ghost" href="#">${esc(c.cta2)}</a></div>`;

function mercury(c: Hero2Config) {
  const [a, b] = halves(c.headline);
  return `<main class="hx hx-mercury"><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, `<i class="m-dot" aria-hidden="true"></i>`, ["Work", "Studio", "Journal"])}
<div class="m-copy"><h1 class="m-title"><span class="hx-sr">${esc(c.headline)}</span><span class="m-line" aria-hidden="true">${masked(a)}</span><span class="m-line" aria-hidden="true">${masked(b)}</span></h1>
<div class="m-foot"><p class="m-sub">${esc(c.sub)}</p>${actions(c)}</div></div>
<p class="m-hint" aria-hidden="true"><span></span>Move to disturb the surface</p></main>`;
}
function ink(c: Hero2Config) {
  const [a, b] = halves(c.headline);
  const seal = `<svg class="i-seal" viewBox="0 0 80 80" aria-hidden="true"><rect x="3" y="3" width="74" height="74" rx="6" fill="var(--accent)"/><rect x="9" y="9" width="62" height="62" rx="3" fill="none" stroke="var(--bg)" stroke-width="2.5"/><text x="40" y="52" text-anchor="middle" font-family="Instrument Serif, serif" font-size="38" fill="var(--bg)">${esc(c.brand.slice(0, 1))}</text></svg>`;
  return `<main class="hx hx-ink"><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, "", ["Notebook", "Manifesto", "Pricing"])}
<div class="i-copy">${seal}<h1 class="i-title"><span class="hx-sr">${esc(c.headline)}</span><span class="i-line" aria-hidden="true">${esc(a)}</span><em class="i-line" aria-hidden="true">${esc(b)}</em></h1><p class="i-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="hx-grain" aria-hidden="true"></div></main>`;
}
function atlas(c: Hero2Config) {
  return `<main class="hx hx-atlas"><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, `<span class="a-mark" aria-hidden="true">[+]</span>`, ["Docs", "Pricing", "Changelog"])}
<div class="a-copy"><span class="a-prompt" aria-hidden="true">$ curl meridian.example/v1/earth</span><h1 class="a-title">${words(c.headline)}</h1><p class="a-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="a-readout" aria-hidden="true"><span class="a-lat">00.000 N</span><span class="a-lon">000.000 E</span><span class="a-hit">ocean</span></div>
<div class="a-meter" aria-hidden="true"><span class="a-glyphs">0</span> glyphs this frame</div></main>`;
}
function lowtide(c: Hero2Config) {
  return `<main class="hx hx-lowtide"><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, `<span class="l-moon" aria-hidden="true"></span>`, ["Reader", "Why 1-bit", "Download"])}
<div class="l-copy"><h1 class="l-title">${words(c.headline)}</h1><p class="l-sub">${esc(c.sub)}</p>${actions(c)}</div>
<p class="l-hint" aria-hidden="true">Drag the moon. The tide follows.</p></main>`;
}
function breath(c: Hero2Config) {
  const letters = (text: string) =>
    `<span class="hx-sr">${esc(text)}</span><span aria-hidden="true" class="b-letters">${text
      .split(/(\s+)/)
      .map((part) => (/\s/.test(part) ? `<span class="b-space"> </span>` : `<span class="b-word">${Array.from(part).map((ch) => `<span class="b-l">${esc(ch)}</span>`).join("")}</span>`))
      .join("")}</span>`;
  return `<main class="hx hx-breath">
${nav(c, `<svg class="b-mark" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21c0-7 0-11 0-18M12 8c-3-1-5-3-6-5 3 0 5 1 6 3m0 4c3-1 5-3 6-5-3 0-5 1-6 3m0 5c-3-1-6-2-7-5 3 0 6 1 7 3m0 1c3-1 6-2 7-5-3 0-6 1-7 3" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/></svg>`, ["Method", "Science", "Pricing"])}
<div class="b-stage"><h1 class="b-title"><span class="hx-sr">${esc(c.headline)}</span>${halves(c.headline).filter(Boolean).map((line) => `<span class="b-line">${letters(line).replace(/<span class="hx-sr">.*?<\/span>/, "")}</span>`).join("")}</h1>
<div class="b-foot"><p class="b-sub">${esc(c.sub)}</p><div class="hx-actions"><button class="hx-btn b-go" type="button">${esc(c.cta)}<span class="b-dot" aria-hidden="true"></span></button><a class="hx-btn hx-ghost" href="${esc(c.href)}">${esc(c.cta2)}</a></div></div>
<p class="b-guide" aria-live="polite"></p></div>
<div class="hx-grain" aria-hidden="true"></div></main>`;
}

const markup: Record<Hero2Id, (c: Hero2Config) => string> = { mercury, ink, atlas, lowtide, breath };

/** A complete, self-contained page. `base` is "" in a download and "/heroes2/" in the studio. */
export function hero2Document(id: Hero2Id, config: Partial<Hero2Config> = {}, base = "") {
  const c = normalizeHero2(config, id);
  const h = hero2(id);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.brand)} | ${esc(c.headline)}</title><meta name="description" content="${esc(c.sub)}"><link rel="stylesheet" href="${base}base.css"><link rel="stylesheet" href="${base}${id}/hero.css"></head><body data-hero="${id}" data-technique="${esc(h.technique)}">${markup[id](c)}<script src="${base}vendor/gsap.min.js" defer></script><script src="${base}${id}/hero.js" defer></script></body></html>`;
}
/** Files a downloaded hero needs, relative to the public heroes2 folder. */
export function hero2Files(id: Hero2Id) {
  return ["base.css", `${id}/hero.css`, `${id}/hero.js`, "vendor/gsap.min.js", ...hero2(id).fonts.map((f) => `fonts/${f}.woff2`), ...[...new Set(hero2(id).fonts.map((f) => f.replace("-Italic", "")))].map((f) => `licenses/${f}-OFL.txt`), "licenses/GSAP-NOTICE.txt"];
}
