import { spirit, spiritAttributes, normalizeSpirit, type SpiritConfig, type SpiritId } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
/** The tag exactly as someone would paste it. */
export function spiritTag(id: SpiritId, config: SpiritConfig = {}) {
  const t = spirit(id).tag;
  return `<${t}${spiritAttributes(id, config).map(([k, v]) => ` ${k}="${esc(v)}"`).join("")}></${t}>`;
}
/** What to paste into a site: the two scripts once, then the tag inside the element it should live in. */
export function spiritSnippet(id: SpiritId, config: SpiritConfig = {}) {
  const tag = spiritTag(id, config);
  const where: Record<SpiritId, string> = {
    spider: `<section>\n  …your content…\n  ${tag}\n</section>`,
    monkey: `<header>\n  …your nav…\n  ${tag}\n</header>`,
    moth: `<section class="dark">\n  …\n  ${tag}\n</section>`,
    wanderer: `<main>\n  <h1>…</h1> <p>…</p>\n  ${tag}\n</main>`,
    hummingbird: `<nav>\n  <a href="#">…</a> <a href="#">…</a>\n  ${tag}\n</nav>`,
    magpie: `<article>\n  <p>…your words…</p>\n  ${tag}\n</article>`,
  };
  return `<!-- once per page -->\n<script src="spirits/kit.js" defer></script>\n<script src="spirits/${id}.js" defer></script>\n\n${where[id]}`;
}

const nav = (brand: string, links: string[], extra = "", cls = "") => `<header class="d-nav${cls}" style="position:relative"><b>${brand}</b><nav aria-label="Primary">${links.map((l) => `<a href="#">${l}</a>`).join("")}</nav>${extra}</header>`;
function body(id: SpiritId, c: SpiritConfig) {
  const tag = spiritTag(id, c);
  switch (id) {
    case "spider":
      return `<div class="night" style="min-height:100vh;background:var(--paper)">${nav("The Night Garden", ["Plants", "Visit", "Journal"])}<main class="d-wrap" style="min-height:85vh;position:relative"><p class="d-eyebrow">Open after dark</p><h1 class="d-h1">Who lives in the corners.</h1><p class="d-lede">Move your cursor fast and it runs. Keep still for a moment and it will come and see what you are.</p><p class="d-note">A spider lives on this section</p>${tag}</main></div>`;
    case "monkey":
      return `${nav("Canopy Coffee", ["Menu", "Beans", "Find us"], tag, "")}<main class="d-wrap"><p class="d-eyebrow">Roasted up in the trees</p><h1 class="d-h1">Coffee with a view from the branches.</h1><p class="d-lede">Someone has been swinging along the bottom of our navigation all morning. Bring your cursor close and it will reach for it.</p></main>`;
    case "moth":
      return `<div class="night" style="min-height:100vh;background:var(--paper)">${nav("Porch Light", ["Stories", "Listen", "About"])}<main class="d-wrap" style="min-height:85vh;position:relative"><p class="d-eyebrow">Evening podcast</p><h1 class="d-h1">Stories told under the porch light.</h1><p class="d-lede">Move your cursor around: it is the only lamp out here.</p>${tag}</main></div>`;
    case "wanderer":
      return `${nav("Small Hours", ["Notes", "Places", "About"])}<main class="d-wrap" style="position:relative"><p class="d-eyebrow">A field guide to staying put</p><h1 class="d-h2">Somebody lives on this page.</h1><p class="d-lede" style="max-width:46ch">They walk along the tops of the words, jump down to the next paragraph and sit on the edge of things. Click right beside them to say hello.</p><div class="d-grid"><div class="d-card"><h3 style="margin:0 0 8px;font:400 30px var(--display)">Morning</h3><p style="margin:0;color:var(--muted)">Coffee, the window, the street waking up slowly.</p></div><div class="d-card"><h3 style="margin:0 0 8px;font:400 30px var(--display)">Evening</h3><p style="margin:0;color:var(--muted)">A walk around the block, then the long light.</p></div></div><p style="margin-top:36px"><button class="d-btn" type="button">Read the notes</button></p>${tag}</main>`;
    case "hummingbird":
      return `${nav("Flower Market", ["Bouquets", "Plants", "Delivery"])}<main class="d-wrap" style="position:relative"><p class="d-eyebrow">Open every day from six</p><h1 class="d-h1">Fresh flowers, still wet.</h1><p class="d-lede">Point at any button or link and the hummingbird will come and sip from it.</p><p style="display:flex;gap:14px;flex-wrap:wrap;margin-top:36px"><a class="d-btn" href="#">Order a bouquet</a><a class="d-btn" href="#" style="background:var(--accent)">See today's stems</a><a class="d-btn" href="#">Subscribe weekly</a></p>${tag}</main>`;
    case "magpie":
      return `${nav("The Long Desk", ["Essays", "Letters", "Archive"])}<main class="d-wrap"><article class="d-article" style="position:relative"><p class="d-eyebrow">Essay · 4 minutes</p><h1 class="d-h2">On the borrowing of shiny things</h1><p>Every morning the magpie comes down from the chestnut and inspects the garden like a landlord. It is not looking for food. It is looking for anything that catches the light: a ring pull, a foil corner, a button that came off a coat years ago.</p><p>Watch the paragraphs here for a few seconds. Sooner or later it will land on a word it likes, peck at it, and carry it away. It always brings the word back. Mostly to the right place.</p><p>If you want a word returned sooner, click anywhere while it is gone. If you move close while it is pecking, it will drop the word and leave in a huff.</p><p>Nobody knows what magpies do with shiny things once they have them. Perhaps they simply like to hold them for a while, the way we keep a sentence we read once and could not let go of.</p>${tag}</article></main>`;
  }
}
/** A complete demo page. `base` is "" in a download and "/spirits/" in the studio. */
export function spiritDocument(id: SpiritId, config: Partial<SpiritConfig> = {}, base = "") {
  const c = normalizeSpirit(config as SpiritConfig, id);
  const k = spirit(id);
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${k.name}: ${esc(k.job)}</title><link rel="stylesheet" href="${base}demo.css"></head><body${id === "spider" || id === "moth" ? ' class="night"' : ""}>${body(id, c)}<script src="${base}kit.js"></script><script src="${base}${id}.js"></script></body></html>`;
}
/** Files a downloaded spirit needs, relative to the public spirits folder. */
export function spiritFiles(id: SpiritId) {
  return ["kit.js", `${id}.js`, "demo.css", ...["InstrumentSerif", "InstrumentSerif-Italic", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `fonts/${f}.woff2`), ...["InstrumentSerif", "InstrumentSans", "PixelifySans", "JetBrainsMono"].map((f) => `licenses/${f}-OFL.txt`)];
}
