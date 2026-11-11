import JSZip from "jszip";
import "./gallery.css";
import { heroes2, hero2, isHero2, normalizeHero2, MAX_IMAGE, type Hero2Config, type Hero2Id } from "./catalog";
import { hero2Document, hero2Files } from "./document";
import { heroes as heroes1, readConfig as readHero1, type HeroId as Hero1Id } from "../heroes/catalog";
import { heroDocument } from "../heroes/document";
import { mountShell } from "../shell/shell";
import { readBrand, brandStyle, withBrand, brandFontFiles } from "../shell/brand";
/** Brand kit on a hero page (studio previews load the font from /heroes2/fonts). */
const branded = (html: string) => withBrand(html, brandStyle("hero", readBrand()));
const brandDefaults = () => { const b = readBrand(); return b?.name ? { brand: b.name } : {}; };

const KEY = "patchwork-heroes2-v1";
export function readHero2Configs(): Partial<Record<Hero2Id, Hero2Config>> {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (data?.version !== 1) return {};
    return Object.fromEntries(heroes2.filter((h) => data.configs?.[h.id]).map((h) => [h.id, normalizeHero2(data.configs[h.id], h.id)]));
  } catch {
    return {};
  }
}
const saveConfigs = (configs: Partial<Record<Hero2Id, Hero2Config>>) => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, configs }));
  } catch {
    /* Storage can be unavailable (private windows); the session still works. */
  }
};
export const hero2Url = (id: Hero2Id) => `/?hero2=${encodeURIComponent(id)}`;

export async function exportHero2(id: Hero2Id, config: Hero2Config) {
  const zip = new JSZip();
  const b = readBrand();
  zip.file("index.html", withBrand(hero2Document(id, config, ""), brandStyle("hero", b, b?.font ? `brand/${b.font}.woff2` : undefined)));
  for (const f of brandFontFiles(b)) { const r = await fetch(`/heroes2/${f}`); if (r.ok) zip.file(`brand/${f.split("/").pop()}`, await r.blob()); }
  await Promise.all(
    hero2Files(id).map(async (path) => {
      const res = await fetch(`/heroes2/${path}`);
      if (!res.ok) throw new Error(`Could not package ${path}.`);
      zip.file(path, await res.blob());
    }),
  );
  zip.file("recipe.json", JSON.stringify({ version: 1, hero: id, config }, null, 2));
  zip.file(
    "README.txt",
    `${config.brand}: ${hero2(id).name} hero (${hero2(id).technique})\n\nOpen index.html through any static server, or drop the folder into your site.\nEverything is local: fonts, GSAP and the hero script. No build step, CDN or account.\n\nEdit the words in index.html. Colours and fonts are tokens at the top of ${id}/hero.css.\nReduced-motion visitors get a still frame; the words and buttons are plain HTML.\n\nFonts are under the SIL Open Font License and GSAP under its standard licence; see licenses/.\n`,
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}

const fields: [Exclude<keyof Hero2Config, "image">, string, number][] = [["brand", "Brand", 24], ["headline", "Headline", 60], ["sub", "Sentence", 160], ["cta", "Main button", 28], ["cta2", "Second button", 28], ["href", "Main button link", 300]];

export function mountHeroes2Gallery(initial?: Hero2Id) {
  document.title = "Hero Sections II";
  const configs = readHero2Configs();
  let active: Hero2Id = initial ?? heroes2[0].id;
  const cfg = (id: Hero2Id) => configs[id] ?? normalizeHero2(brandDefaults(), id);
  document.body.className = "h2g-body";
  document.body.innerHTML = `
<a class="h2g-skip" href="#h2g-editor">Skip to the editor</a>
<div class="h2g">
  <header class="h2g-top"><div class="h2g-intro"><button type="button" class="h2g-backall" hidden>← All heroes</button><h1>Hero sections, <em>make an entrance</em></h1><p>Every opening in one place: shaders, fluids, ASCII, pixels, dot art and light. Open any of them on its own page, or customise it here and download a folder you can drop into any site.</p></div><a class="h2g-logo" href="/" aria-label="Patchwork, back to the studio"><span class="h2g-logo-mark" aria-hidden="true">✳</span>patchwork<span class="h2g-logo-dot" aria-hidden="true">®</span></a></header>
  <section class="h2g-cards" aria-label="All heroes">${heroes2
    .map(
      (it, i) => `<article class="h2g-card" data-id="${it.id}"><a class="h2g-cover" href="${hero2Url(it.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${it.name} on its own page, in a new tab"><iframe tabindex="-1" aria-hidden="true" title="${it.name} preview"></iframe><span class="h2g-cover-open">Open in new tab<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a><div class="h2g-card-meta"><span>0${i + 1} / ${it.technique}</span><span>${it.type}</span></div><h2 class="h2g-card-title"><a href="${hero2Url(it.id)}" target="_blank" rel="noopener noreferrer">${it.name}</a><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></h2><p>${it.description.replace(/</g, "&lt;")}</p><div class="h2g-card-foot"><span class="h2g-sw" aria-hidden="true">${it.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span><button type="button" class="h2g-card-customize" data-id="${it.id}">Customize</button></div></article>`,
    )
    .join("")}${heroes1
    .map(
      (h, i) => `<article class="h2g-card" data-id="${h.id}" data-h1="${h.id}"><a class="h2g-cover" href="/?view=hero&hero=${h.id}" target="_blank" rel="noopener noreferrer" aria-label="Open ${h.name} on its own page, in a new tab"><iframe tabindex="-1" aria-hidden="true" title="${h.name} preview"></iframe><span class="h2g-cover-open">Open in new tab</span></a><div class="h2g-card-meta"><span>${String(heroes2.length + i + 1).padStart(2, "0")} / ${h.medium}</span><span>${h.font}</span></div><h2 class="h2g-card-title"><a href="/?view=hero&hero=${h.id}" target="_blank" rel="noopener noreferrer">${h.name}</a></h2><p>${h.description.replace(/</g, "&lt;")}</p><div class="h2g-card-foot"><span class="h2g-sw" aria-hidden="true"><i style="background:${h.accent}"></i></span><button type="button" class="h2g-card-customize" data-h1="${h.id}">Customize</button></div></article>`,
    )
    .join("")}</section>
  <nav class="h2g-list" aria-label="Heroes">${heroes2
    .map(
      (h, i) => `<div class="h2g-entry" data-id="${h.id}"><a class="h2g-item" href="${hero2Url(h.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${h.name} on its own page, in a new tab"><span class="h2g-n">0${i + 1}</span><span class="h2g-name">${h.name}<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span><span class="h2g-meta">${h.technique} · ${h.type}</span><span class="h2g-sw" aria-hidden="true">${h.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span></a><button type="button" class="h2g-customize" data-id="${h.id}" aria-pressed="false">Customize</button></div>`,
    )
    .join("")}</nav>
  <section class="h2g-stage" aria-label="Preview">
    <div class="h2g-frame"><iframe title="Hero preview" loading="eager"></iframe></div>
    <div class="h2g-under"><p class="h2g-desc"></p><a class="h2g-frame-open" target="_blank" rel="noopener noreferrer">Open in new tab<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></a></div>
  </section>
  <form class="h2g-editor" id="h2g-editor" aria-label="Edit this hero">
    ${fields.map(([k, label, max]) => `<label><span>${label}</span>${k === "sub" ? `<textarea name="${k}" maxlength="${max}" rows="2"></textarea>` : `<input name="${k}" maxlength="${max}" ${k === "href" ? 'inputmode="url"' : ""}>`}</label>`).join("")}
    <div class="h2g-upload" hidden><span>Your picture, as dot art inside this hero</span><div><label class="h2g-btn h2g-file">Choose a picture<input type="file" name="picture" accept="image/png,image/jpeg,image/webp"></label><button type="button" class="h2g-reset h2g-clear-img">Remove the picture</button></div><small>It is resized and stays on this device; the download keeps it inside index.html.</small></div>
    <div class="h2g-actions"><a class="h2g-btn h2g-open" target="_blank" rel="noopener noreferrer">Open on its own page</a><button type="button" class="h2g-btn h2g-dl">Download folder</button><button type="button" class="h2g-reset">Reset words</button></div>
    <p class="h2g-status" role="status"></p>
  </form>
</div>`;
  const iframe = document.querySelector<HTMLIFrameElement>(".h2g-frame iframe")!;
  const form = document.querySelector<HTMLFormElement>(".h2g-editor")!;
  const status = document.querySelector<HTMLElement>(".h2g-status")!;
  const desc = document.querySelector<HTMLElement>(".h2g-desc")!;
  const upload = document.querySelector<HTMLElement>(".h2g-upload")!;
  const opens = document.querySelectorAll<HTMLAnchorElement>(".h2g-open, .h2g-frame-open");
  let timer = 0;
  const preview = () => {
    iframe.srcdoc = branded(hero2Document(active, cfg(active), "/heroes2/"));
  };
  const select = (id: Hero2Id) => {
    active = id;
    document.querySelectorAll<HTMLElement>(".h2g-entry").forEach((e) => {
      e.classList.toggle("is-selected", e.dataset.id === id);
      e.querySelector(".h2g-customize")!.setAttribute("aria-pressed", String(e.dataset.id === id));
    });
    const c = cfg(id);
    for (const [k] of fields) (form.elements.namedItem(k) as HTMLInputElement).value = c[k];
    desc.textContent = hero2(id).description;
    upload.hidden = false;
    opens.forEach((a) => (a.href = hero2Url(id)));
    history.replaceState(null, "", `/?collection=heroes2&hero=${id}`);
    status.textContent = "";
    preview();
  };
  document.querySelector(".h2g-list")!.addEventListener("click", (e) => {
    // The hero itself opens in a new tab (a plain link); "Customize" loads it into the editor.
    const b = (e.target as Element).closest<HTMLButtonElement>(".h2g-customize");
    if (b && isHero2(b.dataset.id)) select(b.dataset.id);
  });
  form.addEventListener("input", (e) => {
    if ((e.target as Element).matches?.('input[type="file"]')) return;
    const raw = Object.fromEntries(fields.map(([k]) => [k, (form.elements.namedItem(k) as HTMLInputElement).value])) as Partial<Hero2Config>;
    raw.image = cfg(active).image;
    configs[active] = normalizeHero2(raw, active);
    saveConfigs(configs);
    clearTimeout(timer);
    timer = window.setTimeout(preview, 350);
  });
  form.addEventListener("submit", (e) => e.preventDefault());
  // A picture of your own for Specimen: scaled down to a small JPEG so it fits in storage and the page.
  form.querySelector<HTMLInputElement>('input[name="picture"]')!.addEventListener("change", async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    status.textContent = "Reading the picture…";
    try {
      const bmp = await createImageBitmap(file);
      const scale = Math.min(1, 900 / Math.max(bmp.width, bmp.height));
      const c = Object.assign(document.createElement("canvas"), { width: Math.round(bmp.width * scale), height: Math.round(bmp.height * scale) });
      c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
      let q = 0.82, url = c.toDataURL("image/jpeg", q);
      while (url.length > MAX_IMAGE && q > 0.4) url = c.toDataURL("image/jpeg", (q -= 0.1));
      configs[active] = normalizeHero2({ ...cfg(active), image: url }, active);
      if (!configs[active]!.image) throw new Error("That picture is too large. Try a smaller one.");
      saveConfigs(configs);
      preview();
      status.textContent = "Picture set. Move over the preview to scatter it.";
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : "Could not read that picture.";
    }
    (e.target as HTMLInputElement).value = "";
  });
  form.querySelector(".h2g-clear-img")!.addEventListener("click", () => {
    configs[active] = normalizeHero2({ ...cfg(active), image: "" }, active);
    saveConfigs(configs);
    preview();
    status.textContent = active === "dots" ? "Back to the jellyfish." : "Picture removed.";
  });
  document.querySelector(".h2g-reset")!.addEventListener("click", () => {
    delete configs[active];
    saveConfigs(configs);
    select(active);
    status.textContent = "Words reset.";
  });
  document.querySelector(".h2g-dl")!.addEventListener("click", async () => {
    status.textContent = "Packaging…";
    try {
      const blob = await exportHero2(active, cfg(active));
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${active}-hero.zip` });
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      status.textContent = `Downloaded ${active}-hero.zip. Unzip it and open index.html.`;
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : "Could not package this hero.";
    }
  });
  // Two cards a row, like the motion templates; "Customize" opens the editor, "← All heroes" comes back.
  const shell = document.querySelector<HTMLElement>(".h2g")!;
  const back = document.querySelector<HTMLButtonElement>(".h2g-backall")!;
  const cards = document.querySelector<HTMLElement>(".h2g-cards")!;
  new ResizeObserver(() => {
    const c = cards.querySelector<HTMLElement>(".h2g-cover");
    if (c && c.clientWidth) cards.style.setProperty("--ck", String(c.clientWidth / 1440));
  }).observe(cards);
  // Live previews run only while their card is on screen.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const f = e.target.querySelector("iframe")!, id = (e.target as HTMLElement).dataset.id as Hero2Id;
      if (e.isIntersecting && !f.dataset.on) { f.dataset.on = "1"; const h1 = (e.target as HTMLElement).dataset.h1 as Hero1Id | undefined;
        f.srcdoc = h1 ? heroDocument(h1, readHero1(h1), "/heroes/") : branded(hero2Document(id, cfg(id), "/heroes2/")); }
      else if (!e.isIntersecting && f.dataset.on) { delete f.dataset.on; f.srcdoc = ""; }
    }
  }, { rootMargin: "200px 0px" });
  cards.querySelectorAll(".h2g-card").forEach((c) => io.observe(c));
  const setMode = (grid: boolean) => {
    shell.classList.toggle("is-grid", grid);
    back.hidden = grid;
    if (grid) { iframe.srcdoc = ""; history.replaceState(null, "", "/?collection=heroes2"); }
    scrollTo(0, 0);
  };
  cards.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>(".h2g-card-customize");
    // Heroes from the first collection are customised in their own studio.
    if (b?.dataset.h1) { location.assign(`/?collection=heroes&hero=${b.dataset.h1}&edit=1`); return; }
    if (b && isHero2(b.dataset.id)) { setMode(false); select(b.dataset.id); }
  });
  back.addEventListener("click", () => setMode(true));
  mountShell("heroes", () => { cards.querySelectorAll<HTMLIFrameElement>("iframe[data-on]").forEach((f) => { delete f.dataset.on; f.srcdoc = ""; io.disconnect(); }); cards.querySelectorAll(".h2g-card").forEach((c) => io.observe(c)); if (!shell.classList.contains("is-grid")) preview(); });
  if (initial) { setMode(false); select(active); } else setMode(true);
}

export function openStandaloneHero2(id: Hero2Id) {
  const html = branded(hero2Document(id, readHero2Configs()[id] ?? brandDefaults(), "/heroes2/"));
  document.open();
  document.write(html);
  document.close();
}
