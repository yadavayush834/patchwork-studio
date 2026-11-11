import { normalizeScene, scene, type SceneConfig, type SceneId } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const arrow = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3 8h9M8.5 4.5 12 8l-3.5 3.5" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="square"/></svg>`;
const links: Record<SceneId, string[]> = {
  lastbus: ["Routes", "Night buses", "Cafés"],
  kelp: ["Field notes", "Species", "Dive maps"],
  longnight: ["Cabins", "Dark skies", "Journal"],
  rooftops: ["Menu", "Roofs", "Hosts"],
  riso: ["Prints", "Inks", "Studio"],
  lanterns: ["Programme", "The river", "Volunteer"],
  tidewatch: ["Coast", "Weather", "Journal"],
  cloudline: ["The valley", "Routes", "Journal"],
  glasshouse: ["Garden", "Plants", "Notebook"],
  courtyard: ["The court", "Stories", "Visit"],
};
/** A small pixel mark drawn in the scene's accent, so the brand sits inside the world. */
const mark = `<svg class="sx-mark" viewBox="0 0 8 8" aria-hidden="true" shape-rendering="crispEdges"><path d="M3 0h2v1h1v1h1v2h1v1H7v1H6v1H5v1H3V7H2V6H1V5H0V4h1V2h1V1h1z" fill="currentColor"/><path d="M3 2h2v1h1v2H5v1H3V5H2V3h1z" fill="var(--sx-bg)"/></svg>`;

/** A complete, self-contained page. `base` is "" in a download and "/scenes/" in the studio. */
export function sceneDocument(id: SceneId, config: Partial<SceneConfig> = {}, base = "") {
  const c = normalizeScene(config, id);
  const s = scene(id);
  const copy = c.text
    ? `<header class="sx-nav"><a class="sx-brand" href="#">${mark}<span>${esc(c.brand)}</span></a><nav aria-label="Primary">${links[id].map((l) => `<a class="sx-link" href="#">${l}</a>`).join("")}</nav></header>
<div class="sx-copy sx-at-${s.layout}"><p class="sx-eyebrow">${esc(c.eyebrow)}</p><h1 class="sx-title">${esc(c.headline)}</h1><p class="sx-sub">${esc(c.sub)}</p><div class="sx-actions"><a class="sx-btn" href="${esc(c.href)}">${esc(c.cta)}${arrow}</a><a class="sx-btn sx-ghost" href="#">${esc(c.cta2)}</a></div></div>`
    : `<h1 class="sx-sr">${esc(c.headline)}</h1>`;
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(c.brand)} | ${esc(c.headline)}</title><meta name="description" content="${esc(c.sub)}"><link rel="stylesheet" href="${base}base.css"></head><body><main class="sx sx-${id}${c.text ? "" : " sx-bare"}" data-pixel="${c.pixel}" data-scene="${id}"${c.image ? ` data-image="${c.image}"` : ""}><canvas class="sx-art" aria-label="${esc(s.name)}: ${esc(s.mood)}, animated pixel art" role="img"></canvas><div class="sx-scrim" aria-hidden="true"></div>
${copy}
<p class="sx-hint" aria-hidden="true">${esc(s.interaction)}</p></main><script src="${base}pixel.js"></script><script src="${base}${id}/scene.js"></script></body></html>`;
}
/** Files a downloaded scene needs, relative to the public scenes folder. */
export function sceneFiles(id: SceneId) {
  return ["base.css", "pixel.js", `${id}/scene.js`, ...["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `fonts/${f}.woff2`), ...["InstrumentSerif", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `licenses/${f}-OFL.txt`)];
}
