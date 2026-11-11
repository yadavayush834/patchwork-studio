import JSZip from "jszip";
import "./gallery.css";
import { spirits, pals, spirit, isSpirit, palTag, type SpiritId, type PalId } from "./catalog";
import { spiritDocument, spiritSnippet, spiritTag } from "./document";
import { mountShell } from "../shell/shell";
import { openPalMaker, readCustomPals, customTag, deleteCustomPal, type CustomPal } from "./maker";
import { readBrand } from "../shell/brand";

/** One card per creature: a little live stage, a name, a line, and Use. */
type Card = { id: string; name: string; tag: string; line: string; dark: boolean; big: boolean; color: string };
const cards: Card[] = [
  ...spirits.map((s) => ({ id: s.id, name: s.name, tag: s.tag, line: s.description.split(/(?<=\.)\s/)[0], dark: s.id === "spider" || s.id === "moth", big: true, color: (s.options as readonly { key: string; default: string }[]).find((o) => o.key === "color")?.default ?? "" })),
  ...pals.map((p) => ({ id: p.id, name: p.name, tag: `pw-pal kind="${p.id}"`, line: p.line, dark: p.id === "ghost" || p.id === "bat" || p.id === "jellyfish" || p.id === "owl", big: false, color: p.color })),
];
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/** What lives in each card's stage, and which part of the stage it lives on. */
function stage(c: Card) {
  if (!c.big) {
    const move = pals.find((p) => p.id === c.id)!.move;
    const tag = `<pw-pal kind="${c.id}"></pw-pal>`;
    const into = move === "hang" || move === "hangwalk" ? "branch" : move === "fly" || move === "crawl" ? "air" : "ground";
    return `<div class="spg-branch">${into === "branch" ? tag : ""}</div><div class="spg-air">${into === "air" ? tag : ""}</div><div class="spg-ground">${into === "ground" ? tag : ""}</div>`;
  }
  switch (c.id as SpiritId) {
    case "spider": return `<div class="spg-air"><pw-spider size="1"></pw-spider></div>`;
    case "moth": return `<div class="spg-air"><pw-moth count="2" glow="on"></pw-moth></div>`;
    case "monkey": return `<div class="spg-branch"><pw-monkey edge="bottom"></pw-monkey></div>`;
    case "wanderer": return `<div class="spg-air"><p class="spg-words">A small page<br>with a resident</p><div class="spg-ground" data-platform></div><pw-wanderer name="Pip"></pw-wanderer></div>`;
    case "hummingbird": return `<div class="spg-air"><a class="spg-flower" href="#" onclick="return false">Point at me</a><pw-hummingbird></pw-hummingbird></div>`;
    case "magpie": return `<div class="spg-air"><p class="spg-words">Shiny words make lovely gifts for patient birds.</p><pw-magpie every="4"></pw-magpie></div>`;
  }
}
function snippet(c: Card, color: string) {
  if (c.big) return spiritSnippet(c.id as SpiritId, color ? { color } : {});
  return `<!-- once per page -->\n<script src="spirits/kit.js" defer></script>\n<script src="spirits/pals.js" defer></script>\n\n<!-- inside the element it should live on -->\n<section>\n  …\n  ${palTag(c.id as PalId, color)}\n</section>`;
}
async function download(c: Card, color: string) {
  const zip = new JSZip(), script = c.big ? `${c.id}.js` : "pals.js";
  for (const f of ["kit.js", script]) {
    const res = await fetch(`/spirits/${f}`);
    if (!res.ok) throw new Error(`Could not package ${f}.`);
    zip.file(`spirits/${f}`, await res.blob());
  }
  const html = c.big
    ? spiritDocument(c.id as SpiritId, color ? { color } : {}, "spirits/").replace('href="spirits/demo.css"', 'href="spirits/demo.css"')
    : `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${c.name}</title><style>body{margin:0;font:18px/1.6 system-ui,sans-serif;background:#f4efe4;color:#221d2b}section{position:relative;max-width:720px;margin:12vh auto;padding:48px;border-radius:20px;background:#fff;min-height:260px}h1{margin:0 0 12px;font-size:44px}</style></head><body><section><h1>Meet the ${c.name.toLowerCase()}.</h1><p>${esc(c.line)}</p>${palTag(c.id as PalId, color)}</section><script src="spirits/kit.js"></script><script src="spirits/pals.js"></script></body></html>`;
  zip.file("index.html", html);
  if (c.big) for (const f of ["demo.css", "fonts/InstrumentSerif.woff2", "fonts/InstrumentSans.woff2", "fonts/PixelifySans.woff2", "fonts/JetBrainsMono.woff2", "fonts/InstrumentSerif-Italic.woff2"]) { const r = await fetch(`/spirits/${f}`); if (r.ok) zip.file(`spirits/${f}`, await r.blob()); }
  zip.file("README.txt", `${c.name}\n\n${c.line}\n\nOpen index.html to see it. To use it on your own site, copy the spirits/ folder next to your page and paste:\n\n${snippet(c, color)}\n\nNo build step, no dependencies, no network requests. Reduced-motion visitors get a still creature.\n`);
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}
const loadScripts = () =>
  ["/spirits/kit.js", "/spirits/pals.js", ...spirits.map((s) => `/spirits/${s.id}.js`), "/components/mimeo.js"].reduce<Promise<unknown>>((p, src) => p.then(() => new Promise((ok) => { const s = Object.assign(document.createElement("script"), { src }); s.onload = s.onerror = ok; document.head.append(s); })), Promise.resolve());

export function mountSpiritsGallery() {
  document.title = "Spirits";
  document.body.className = "spg-body";
  document.body.innerHTML = `
<div class="spg">
  <header class="spg-top"><div class="spg-intro"><h1>Spirits, <em>the page is alive</em></h1><p>${cards.length} small creatures that move into your pages: they walk your edges, hang from your headers, fly round your sections and react when you come near. Each one is a single tag. Press <b>Use</b> to take one home.</p></div><a class="spg-logo" href="/" aria-label="Patchwork, back to the studio"><span class="spg-logo-mark" aria-hidden="true">✳</span>patchwork<span class="spg-logo-dot" aria-hidden="true">®</span></a></header>
  <section class="spg-grid" aria-label="Spirits"><article class="spg-card spg-maker"><div class="spg-stage is-dark spg-maker-art"><span aria-hidden="true">+</span></div><div class="spg-info"><div class="spg-row"><h2>Make your own</h2><code>pal maker</code></div><p>Draw a creature on a little grid, choose how it moves, and it lives on your pages like the others.</p><button type="button" class="spg-use spg-make">Make a pal</button></div></article><div class="spg-mine" style="display:contents"></div>${cards.map((c) => `<article class="spg-card"><div class="spg-stage${c.dark ? " is-dark" : ""}">${stage(c)}</div><div class="spg-info"><div class="spg-row"><h2>${c.name}</h2><code>${c.big ? c.tag : "pw-pal"}</code></div><p>${esc(c.line)}</p><button type="button" class="spg-use" data-id="${c.id}">Use</button></div></article>`).join("")}</section>
</div>
<dialog class="spg-dialog" aria-labelledby="spg-d-title"><form method="dialog" class="spg-d"><div class="spg-d-head"><h2 id="spg-d-title"></h2><button class="spg-x" value="close" aria-label="Close">×</button></div><p class="spg-d-line"></p><label class="spg-d-color"><span>Colour</span><input type="color" name="color"><button type="button" class="spg-brandc" hidden>Use my brand colour</button></label><pre class="spg-code"><code></code><pw-mimeo label="Copy" done="Copied"></pw-mimeo></pre><div class="spg-d-actions"><button type="button" class="spg-dl">Download folder</button><span class="spg-status" role="status"></span></div></form></dialog>`;
  mountShell("spirits");
  // Pals you made: shown first, with Use and Delete.
  const mine = document.querySelector<HTMLElement>(".spg-mine")!;
  const drawMine = () => {
    const list = readCustomPals();
    mine.innerHTML = list.map((p) => {
      const host = p.move === "hang" ? "branch" : p.move === "fly" || p.move === "crawl" ? "air" : "ground";
      const tag = customTag(p);
      return `<article class="spg-card"><div class="spg-stage"><div class="spg-branch">${host === "branch" ? tag : ""}</div><div class="spg-air">${host === "air" ? tag : ""}</div><div class="spg-ground">${host === "ground" ? tag : ""}</div></div><div class="spg-info"><div class="spg-row"><h2>${esc(p.name)}</h2><code>your pal</code></div><p>Made by you. Moves by ${({ walk: "walking", hop: "hopping", crawl: "crawling", fly: "flying", hang: "hanging", sit: "sitting and watching" } as Record<string, string>)[p.move]}.</p><div class="spg-mine-actions"><button type="button" class="spg-use" data-mine="${p.id}">Use</button><button type="button" class="spg-edit" data-edit="${p.id}">Edit</button><button type="button" class="spg-del" data-del="${p.id}" aria-label="Delete ${esc(p.name)}">Delete</button></div></div></article>`;
    }).join("");
  };
  drawMine();
  document.querySelector(".spg-make")!.addEventListener("click", () => openPalMaker(drawMine));
  mine.addEventListener("click", (e) => {
    const t = e.target as HTMLElement, list = readCustomPals();
    const del = t.closest<HTMLElement>("[data-del]"), ed = t.closest<HTMLElement>("[data-edit]");
    if (del) { deleteCustomPal(del.dataset.del!); drawMine(); }
    if (ed) { const p = list.find((x) => x.id === ed.dataset.edit); if (p) openPalMaker(drawMine, p); }
  });
  void loadScripts();
  const dlg = document.querySelector<HTMLDialogElement>(".spg-dialog")!;
  const code = dlg.querySelector("code")!, colorIn = dlg.querySelector<HTMLInputElement>('input[name="color"]')!, status = dlg.querySelector<HTMLElement>(".spg-status")!;
  let cur: Card | null = null;
  const show = () => { if (cur) code.textContent = snippet(cur, colorIn.value); };
  document.querySelector(".spg-grid")!.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>(".spg-use");
    if (!b || b.classList.contains("spg-make")) return;
    if (b.dataset.mine) { const p = readCustomPals().find((x) => x.id === b.dataset.mine); if (p) useMine(p); return; }
    cur = cards.find((c) => c.id === b.dataset.id)!;
    dlg.querySelector("h2")!.textContent = cur.name;
    dlg.querySelector(".spg-d-line")!.textContent = cur.line;
    colorIn.value = cur.color || "#795be6";
    dlg.querySelector<HTMLElement>(".spg-d-color")!.hidden = !cur.color;
    dlg.querySelector<HTMLElement>(".spg-brandc")!.hidden = !readBrand();
    status.textContent = "";
    dlg.querySelector<HTMLElement>(".spg-dl")!.hidden = false;
    show();
    dlg.showModal();
  });
  colorIn.addEventListener("input", show);
  // Your own pals: their tag already carries their drawing and colours.
  const useMine = (p: CustomPal) => {
    cur = null;
    dlg.querySelector("h2")!.textContent = p.name;
    dlg.querySelector(".spg-d-line")!.textContent = "Your pal, ready to paste. Everything it needs is in the tag.";
    dlg.querySelector<HTMLElement>(".spg-d-color")!.hidden = true;
    code.textContent = `<!-- once per page -->\n<script src="spirits/kit.js" defer></script>\n<script src="spirits/pals.js" defer></script>\n\n<section>\n  …\n  ${customTag(p)}\n</section>`;
    dlg.querySelector<HTMLElement>(".spg-dl")!.hidden = true;
    status.textContent = "";
    dlg.showModal();
  };
  dlg.querySelector(".spg-brandc")!.addEventListener("click", () => { const b = readBrand(); if (b) { colorIn.value = b.primary; show(); } });
  dlg.querySelector(".spg-dl")!.addEventListener("click", async () => {
    if (!cur) return;
    status.textContent = "Packaging…";
    try {
      const blob = await download(cur, cur.color ? colorIn.value : "");
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${cur.id}-spirit.zip` });
      a.click(); setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      status.textContent = `Downloaded ${cur.id}-spirit.zip`;
    } catch (err) { status.textContent = err instanceof Error ? err.message : "Could not package it."; }
  });
}

export function openStandaloneSpirit(id: SpiritId) {
  document.open();
  document.write(spiritDocument(id, {}, "/spirits/"));
  document.close();
}
export { isSpirit, spirit, spiritTag };
