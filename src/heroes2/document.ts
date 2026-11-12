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

function dots(c: Hero2Config) {
  return `<main class="hx hx-dots"${c.image ? ` data-image="${c.image}"` : ""}><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, `<i class="d-mark" aria-hidden="true"></i>`, ["Species", "Dives", "Field notes"])}
<div class="d-copy"><p class="d-label">Field guide · Specimen 04</p><h1 class="d-title">${words(c.headline)}</h1><p class="d-sub">${esc(c.sub)}</p>${actions(c)}</div>
<p class="d-tag" aria-hidden="true"><b>${c.image ? "Your picture" : "Aurelia aurita"}</b><span>${c.image ? "rebuilt in dots" : "moon jelly · rendered live"}</span></p>
<p class="d-hint" aria-hidden="true">Move to scatter the dots · Click to send a ripple</p></main>`;
}
function prism(c: Hero2Config) {
  const [a, b] = halves(c.headline);
  return `<main class="hx hx-prism"><canvas class="hx-art" aria-hidden="true"></canvas>
${nav(c, `<i class="p-mark" aria-hidden="true"></i>`, ["Product", "Pricing", "Customers"])}
<div class="p-copy"><h1 class="p-title"><span class="hx-sr">${esc(c.headline)}</span><span class="p-line" aria-hidden="true">${masked(a)}</span><span class="p-line" aria-hidden="true">${masked(b)}</span></h1>
<div class="p-foot"><p class="p-sub">${esc(c.sub)}</p>${actions(c)}</div></div>
<p class="p-read" aria-hidden="true"><span>Prism <b class="p-angle">  0.0°</b></span><span>Move to turn it · Click to fire a pulse</span></p></main>`;
}

/** Heroes painted with generated artwork and rendered in depth by the Diorama engine. */
export const DIORAMA_HEROES = ["library", "forge", "teahouse"] as const;
const isDiorama = (id: Hero2Id) => (DIORAMA_HEROES as readonly string[]).includes(id);
const art = (id: Hero2Id, base: string, label: string) => `<canvas class="hx-art" role="img" aria-label="${esc(label)}" data-base="${base}${id}/"></canvas>`;
function library(c: Hero2Config, base: string) {
  const [a, b] = halves(c.headline);
  return `<main class="hx hx-library">${art("library", base, "A sunlit library hall with dust drifting through the light")}<div class="lr-shade" aria-hidden="true"></div>
${nav(c, `<i class="lr-mark" aria-hidden="true"></i>`, ["Library", "Margins", "Pricing"])}
<div class="lr-copy"><p class="lr-kicker">For slow readers</p><h1 class="lr-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(a)} <em>${masked(b)}</em></span></h1><p class="lr-sub">${esc(c.sub)}</p>${actions(c)}</div>
<p class="lr-note" aria-hidden="true">underlined, twice<svg viewBox="0 0 120 56"><path d="M4 6c30 4 58 18 76 36m0 0-3-12m3 12-12-2"/></svg></p>
<p class="lr-hint" aria-hidden="true">Move to walk the table · Click to stir the dust</p></main>`;
}
function forge(c: Hero2Config, base: string) {
  const w = c.headline.split(/\s+/), last = w.pop() || "";
  return `<main class="hx hx-forge" tabindex="-1">${art("forge", base, "A blacksmith's forge at night, coals glowing and a red-hot blade on the anvil")}
${nav(c, `<i class="f-mark" aria-hidden="true"></i>`, ["Knives", "The forge", "Journal"])}
<div class="f-copy"><p class="f-label">// Batch 041 · in the fire now</p><h1 class="f-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(w.join(" "))} <span class="f-hot">${masked(last)}</span></span></h1><p class="f-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="f-gauge" aria-live="off"><span class="f-bar" aria-hidden="true"><i></i></span><span>STEEL TEMPERATURE</span><span class="f-temp">640 °C</span><span class="f-colour">dark red</span></div>
<p class="f-hint" aria-hidden="true"><b>Hold</b> to work the bellows · <b>Click</b> to strike</p></main>`;
}
function teahouse(c: Hero2Config, base: string) {
  const w = c.headline.split(/\s+/), cut = Math.max(1, Math.ceil(w.length / 2));
  return `<main class="hx hx-teahouse">${art("teahouse", base, "A wooden tea house among bamboo in morning mist")}<div class="t-wash" aria-hidden="true"></div>
${nav(c, `<i class="t-mark" aria-hidden="true"></i>`, ["Teas", "Gardens", "Visit"])}
<div class="t-copy"><p class="t-label">First flush · picked in April</p><h1 class="t-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(w.slice(0, cut).join(" "))} <em>${masked(w.slice(cut).join(" "))}</em></span></h1><p class="t-sub">${esc(c.sub)}</p>${actions(c)}</div>
<button class="t-steep" type="button"><svg class="t-ring" viewBox="0 0 44 44" aria-hidden="true"><circle class="t-track" cx="22" cy="22" r="18"/><circle class="t-fill" cx="22" cy="22" r="18"/></svg><span><b class="t-time">3:00</b><small>Green tea, 80 °C</small></span><span class="hx-sr">Start a three minute steep timer</span></button></main>`;
}

/** A header with a day/night switch next to the links. */
const navWithTheme = (c: Hero2Config, mark: string, links: string[], cls: string) =>
  nav(c, mark, links).replace("</nav></header>", `</nav><button class="${cls}" type="button"></button></header>`);
function airmail(c: Hero2Config) {
  const stamp = `<svg viewBox="0 0 64 40" aria-hidden="true"><path d="M2 22 62 4 34 36 28 24Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linejoin="round"/><path d="m28 24 34-20" stroke="currentColor" stroke-width="1.5"/></svg>`;
  const post = `<svg class="am-postmark" viewBox="0 0 120 120" aria-hidden="true"><circle cx="60" cy="60" r="44" fill="none" stroke="currentColor" stroke-width="2"/><circle cx="60" cy="60" r="34" fill="none" stroke="currentColor" stroke-width="1"/><text x="60" y="56" text-anchor="middle" font-family="JetBrains Mono" font-size="10" fill="currentColor">SENT</text><text x="60" y="70" text-anchor="middle" font-family="JetBrains Mono" font-size="9" fill="currentColor">BY HAND</text><path d="M108 40h40M108 50h40M108 60h40M108 70h40M108 80h40" stroke="currentColor" stroke-width="2" transform="translate(-20)"/></svg>`;
  return `<main class="hx hx-airmail"><canvas class="am-back" aria-hidden="true"></canvas><p class="am-word" aria-hidden="true">${esc(c.brand)}</p><canvas class="am-front" aria-hidden="true"></canvas><div class="am-border" aria-hidden="true"></div>
${navWithTheme(c, "", ["Letters", "Paper", "Pricing"], "am-theme")}
<p class="am-hint" aria-hidden="true">Click anywhere to throw a plane</p>
<div class="am-copy"><h1 class="am-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(c.headline)}</span><svg class="am-scribble" viewBox="0 0 320 18" preserveAspectRatio="none" aria-hidden="true"><path d="M3 12c40-6 90-9 140-6s96 5 120-1c18-4 34-3 54 1"/></svg></h1><p class="am-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="am-stamp" aria-hidden="true"><div class="am-stamp-in">${stamp}<b>PAR AVION</b><span>BY AIR · 0.50</span></div></div>${post}
<p class="am-note" aria-hidden="true"><svg viewBox="0 0 52 30"><path d="M50 4C34 2 18 8 6 24m0 0 2-10m-2 10 10-3"/></svg>this one is yours</p></main>`;
}
function murmur(c: Hero2Config) {
  return `<main class="hx hx-murmur"><canvas class="mm-back" aria-hidden="true"></canvas><p class="mm-word" aria-hidden="true">${esc(c.brand)}</p><canvas class="mm-front" aria-hidden="true"></canvas>
${navWithTheme(c, `<i class="mm-mark" aria-hidden="true"></i>`, ["Field notes", "Methods", "Counts"], "mm-theme")}
<p class="mm-issue">Field note 07<br>Dusk count · Reed beds</p>
<svg class="mm-ring" viewBox="0 0 260 150" aria-hidden="true"><ellipse cx="130" cy="75" rx="100" ry="60" transform="rotate(-6 130 75)"/><text x="130" y="0" text-anchor="middle">one decision, many birds</text></svg>
<div class="mm-copy"><h1 class="mm-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(c.headline)}</span></h1><p class="mm-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="mm-panel"><div class="mm-row"><span>STARLINGS</span><b class="mm-n">0</b></div><div class="mm-row"><span>ORDER</span><b class="mm-order">0.00</b></div><div class="mm-meter" aria-hidden="true"><i></i></div><div class="mm-row"><span>SPREAD</span><b class="mm-spread">0 m</b></div><button class="mm-spell" type="button" aria-pressed="false">Spell it with birds</button></div></main>`;
}
function deep(c: Hero2Config, base: string) {
  return `<main class="hx hx-deep"><p class="dp-word" aria-hidden="true">${esc(c.brand)}</p>
${navWithTheme(c, `<i class="dp-mark" aria-hidden="true"></i>`, ["Dives", "Courses", "The boat"], "dp-theme")}
<div class="dp-stage"><div class="dp-card"><canvas class="dp-water" aria-hidden="true"></canvas><p class="dp-depth"><b>42 m</b><span>The wreck</span></p></div><img class="dp-diver" src="${base}deep/diver.webp" alt="A deep-sea diver in a brass helmet stepping out of the frame" width="1254" height="1254"></div>
<canvas class="dp-bubbles" aria-hidden="true"></canvas>
<div class="dp-copy"><p class="dp-label">Dive 01 · A cargo ship, 1911</p><h1 class="dp-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(c.headline)}</span></h1><p class="dp-sub">${esc(c.sub)}</p>${actions(c)}</div>
<nav class="dp-dives" aria-label="Dives"><button class="dp-num" type="button" aria-current="true">01<small>The wreck</small></button><button class="dp-num" type="button" aria-current="false">02<small>The trench</small></button><button class="dp-num" type="button" aria-current="false">03<small>The kelp</small></button><div class="dp-arrows"><button class="dp-prev" type="button" aria-label="Previous dive">←</button><button class="dp-next" type="button" aria-label="Next dive">→</button></div></nav></main>`;
}

function runner(c: Hero2Config) {
  return `<main class="hx hx-runner"><canvas class="rn-art" role="img" aria-label="A fox made of glowing particles running through a wireframe forest at night"></canvas>
${nav(c, `<i class="rn-mark" aria-hidden="true"></i>`, ["Routes", "Club", "Kit"])}
<div class="rn-hud" aria-live="polite"><span class="rn-count"></span><span class="rn-state">PRESS SPACE TO PLAY</span><span class="rn-meta"><span class="rn-best">BEST 0 m</span><span class="rn-flies"></span></span></div>
<div class="rn-copy"><h1 class="rn-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(c.headline)}</span></h1><p class="rn-sub">${esc(c.sub)}</p>${actions(c)}</div>
<button class="rn-play" type="button"><kbd>SPACE</kbd>Play · jump</button></main>`;
}

function owl(c: Hero2Config, base: string) {
  const w = c.headline.split(/\s+/), last = w.pop() || "";
  return `<main class="hx hx-owl" data-mode="1"><canvas class="ow-art" role="img" aria-label="A great horned owl in flight, drawn as tens of thousands of glowing points" data-base="${base}owl/"></canvas>
${nav(c, `<i class="ow-mark" aria-hidden="true"></i>`, ["Species", "Night walks", "Sounds"])}
<div class="ow-copy"><p class="ow-label">Specimen 12 · Bubo virginianus</p><h1 class="ow-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(w.join(" "))} <em>${masked(last)}</em></span></h1><p class="ow-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="ow-panel"><div class="ow-modes" role="radiogroup" aria-label="Colour"><button class="ow-mode" type="button" role="radio">Feathers</button><button class="ow-mode" type="button" role="radio">Depth</button><button class="ow-mode" type="button" role="radio">Heat</button></div><span class="ow-stat"><b class="ow-count">0</b> points · move to orbit · click to scatter</span></div></main>`;
}

function lateset(c: Hero2Config, base: string) {
  const w = c.headline.split(/\s+/), last = w.pop() || "";
  const tape = ["<b>21:00</b> doors", "<b>22:00</b> first set · the house trio", "<b>00:00</b> the late set", "<b>01:30</b> jam, anyone can sit in"].join(" &nbsp;·&nbsp; ");
  return `<main class="hx hx-lateset" data-key="0"><canvas class="ls-art" role="img" aria-label="A painting of a jazz trumpeter mid-solo, flickering like stop-motion" data-base="${base}lateset/"></canvas><div class="ls-shade" aria-hidden="true"></div>
${nav(c, `<i class="ls-mark" aria-hidden="true"></i>`, ["Tonight", "The room", "Members"])}
<button class="ls-key" type="button">Change the key · <b>Blue note</b></button>
<div class="ls-copy"><p class="ls-kicker">Live every night · under the bridge</p><h1 class="ls-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${masked(w.join(" "))} <em>${masked(last)}</em></span></h1><p class="ls-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="ls-tape" aria-hidden="true"><span>${tape} &nbsp;·&nbsp; ${tape} &nbsp;·&nbsp; </span></div></main>`;
}
function afterglow(c: Hero2Config, base: string) {
  const strips = c.headline.split(/\s+/).map((w) => `<span class="ag-strip">${esc(w)}</span>`).join("");
  return `<main class="hx hx-afterglow"><div class="ag-stage"><canvas class="ag-sky" aria-hidden="true"></canvas>
<img class="ag-wheel ag-cut" src="${base}afterglow/wheel.webp" alt="" width="900" height="900">
<div class="ag-figure-wrap"><div class="ag-figure"><img class="ag-cut" src="${base}afterglow/float.webp" alt="A figure in white floating in the air, arms open" width="900" height="900" style="width:100%"><img class="ag-ghost r" src="${base}afterglow/float.webp" alt="" aria-hidden="true"><img class="ag-ghost c" src="${base}afterglow/float.webp" alt="" aria-hidden="true"></div></div>
<canvas class="ag-film" aria-hidden="true"></canvas><div class="ag-grain" aria-hidden="true"></div></div>
${nav(c, `<i class="ag-mark" aria-hidden="true"></i>`, ["Lineup", "The rides", "Tickets"])}
<div class="ag-ticket" aria-hidden="true">Admit one<b>3 nights</b>Fairground · gates 18:00</div>
<div class="ag-copy"><h1 class="ag-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true" style="display:contents">${strips}</span></h1><p class="ag-sub">${esc(c.sub)}</p>${actions(c)}</div>
<p class="ag-hint" aria-hidden="true">Move to steer the burst · click to glitch</p></main>`;
}
function copyshop(c: Hero2Config, base: string) {
  const w = c.headline.split(/\s+/), i = Math.min(w.length - 1, 2);
  const title = w.map((x, k) => (k === i ? `<span class="cs-hl"><span class="cs-mark-hl" aria-hidden="true"></span>${masked(x)}</span>` : masked(x))).join(" ");
  return `<main class="hx hx-copyshop">
${nav(c, `<i class="cs-logo" aria-hidden="true"></i>`, ["Exhibitors", "Programme", "Visit"])}
<p class="cs-hint" aria-hidden="true">Click the glass to copy the copy · drag to smear</p>
<canvas class="cs-glass" role="img" aria-label="A photograph of a skateboarder being photocopied, each copy made from the last" data-base="${base}copyshop/"></canvas><div class="cs-scanbar" aria-hidden="true"></div>
<div class="cs-copy-area"><p class="cs-kicker"><b>Small press weekend</b> · 14–15 March</p><h1 class="cs-title"><span class="hx-sr">${esc(c.headline)}</span><span aria-hidden="true">${title}</span></h1><p class="cs-sub">${esc(c.sub)}</p>${actions(c)}</div>
<div class="cs-panel"><div><span>Copy</span><b class="cs-n">Nº 01</b></div><div><span>Generation loss <b class="cs-loss" style="font:inherit">0%</b></span><span class="cs-bar"><i></i></span></div><button class="cs-copy" type="button">Copy it</button><button class="cs-clear" type="button">Clear the glass</button></div></main>`;
}

const markup: Record<Hero2Id, (c: Hero2Config, base: string) => string> = { runner, owl, lateset, afterglow, copyshop, mercury, ink, atlas, lowtide, breath, dots, prism, library, forge, teahouse, airmail, murmur, deep };

/** A complete, self-contained page. `base` is "" in a download and "/heroes2/" in the studio. */
export function hero2Document(id: Hero2Id, config: Partial<Hero2Config> = {}, base = "") {
  const c = normalizeHero2(config, id);
  const h = hero2(id);
  // A picture of your own: Specimen builds itself from it; every other hero gets it as a dot-art layer.
  const photo = c.image && id !== "dots" ? `<canvas class="hx-dotphoto" aria-hidden="true" data-image="${c.image}"></canvas>` : "";
  const body = markup[id](c, base);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.brand)} | ${esc(c.headline)}</title><meta name="description" content="${esc(c.sub)}"><link rel="stylesheet" href="${base}base.css"><link rel="stylesheet" href="${base}${id}/hero.css"></head><body data-hero="${id}" data-technique="${esc(h.technique)}">${photo ? body.replace(/<\/main>$/, `${photo}</main>`) : body}<script src="${base}vendor/gsap.min.js" defer></script>${isDiorama(id) ? `<script src="${base}vendor/diorama.js" defer></script>` : ""}<script src="${base}${id}/hero.js" defer></script>${photo ? `<script src="${base}dotphoto.js" defer></script>` : ""}</body></html>`;
}
/** Files a downloaded hero needs, relative to the public heroes2 folder. */
export function hero2Files(id: Hero2Id) {
  return ["base.css", "dotphoto.js", `${id}/hero.css`, `${id}/hero.js`, "vendor/gsap.min.js", ...(isDiorama(id) ? ["vendor/diorama.js", `${id}/painting.webp`, `${id}/depth.webp`] : []), ...(id === "deep" ? ["deep/diver.webp"] : []), ...(id === "runner" || id === "owl" ? ["licenses/three-MIT.txt"] : []), ...(id === "owl" ? ["owl/painting.webp", "owl/depth.webp"] : []), ...(id === "lateset" ? ["lateset/frame-1.webp", "lateset/frame-2.webp"] : []), ...(id === "afterglow" ? ["afterglow/float.webp", "afterglow/wheel.webp"] : []), ...(id === "copyshop" ? ["copyshop/original.webp"] : []), ...hero2(id).fonts.map((f) => `fonts/${f}.woff2`), ...[...new Set(hero2(id).fonts.map((f) => f.replace("-Italic", "")))].map((f) => `licenses/${f}-OFL.txt`), "licenses/GSAP-NOTICE.txt"];
}
