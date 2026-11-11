import JSZip from "jszip";
import "./gallery.css";
import { scenes, scene, isScene, normalizeScene, PIXEL_SIZES, MAX_SCENE_IMAGE, type SceneConfig, type SceneId } from "./catalog";
import { sceneDocument, sceneFiles } from "./document";
import { mountShell } from "../shell/shell";
import { readBrand, brandStyle, withBrand, brandFontFiles } from "../shell/brand";
const branded = (html: string) => withBrand(html, brandStyle("scene", readBrand()));
const brandDefaults = () => { const b = readBrand(); return b?.name ? { brand: b.name } : {}; };

const KEY = "patchwork-scenes-v1";
export function readSceneConfigs(): Partial<Record<SceneId, SceneConfig>> {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (data?.version !== 1) return {};
    return Object.fromEntries(scenes.filter((s) => data.configs?.[s.id]).map((s) => [s.id, normalizeScene(data.configs[s.id], s.id)]));
  } catch {
    return {};
  }
}
const saveConfigs = (configs: Partial<Record<SceneId, SceneConfig>>) => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, configs }));
  } catch {
    /* Storage can be unavailable (private windows); the session still works. */
  }
};
export const sceneUrl = (id: SceneId) => `/?scene=${encodeURIComponent(id)}`;

export async function exportScene(id: SceneId, config: SceneConfig) {
  const zip = new JSZip();
  const b = readBrand();
  zip.file("index.html", withBrand(sceneDocument(id, config, ""), brandStyle("scene", b, b?.font ? `brand/${b.font}.woff2` : undefined)));
  for (const f of brandFontFiles(b)) { const r = await fetch(`/heroes2/${f}`); if (r.ok) zip.file(`brand/${f.split("/").pop()}`, await r.blob()); }
  await Promise.all(
    sceneFiles(id).map(async (path) => {
      const res = await fetch(`/scenes/${path}`);
      if (!res.ok) throw new Error(`Could not package ${path}.`);
      zip.file(path, await res.blob());
    }),
  );
  zip.file("recipe.json", JSON.stringify({ version: 1, scene: id, config }, null, 2));
  zip.file(
    "README.txt",
    `${config.brand}: ${scene(id).name} scene (${scene(id).mood})\n\nOpen index.html through any static server, or drop the folder into your site.\nEverything is local: fonts, the pixel runtime and the scene. No build step, CDN or account.\n\nThe scene is painted in a fragment shader at 1/${config.pixel} resolution and snapped to its own palette with a 4x4 ordered dither.\nChange the pixel size with data-pixel on <main>. The palette and the picture live in ${id}/scene.js; words and colours of the text in index.html and base.css.\nReduced-motion visitors get a still frame; the words and buttons are plain HTML.\n\nFonts are under the SIL Open Font License; see licenses/.\n`,
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}

const fields: [Exclude<keyof SceneConfig, "pixel" | "text">, string, number][] = [["brand", "Brand", 24], ["eyebrow", "Small line above", 48], ["headline", "Headline", 60], ["sub", "Sentence", 160], ["cta", "Main button", 28], ["cta2", "Second button", 28], ["href", "Main button link", 300]];
const external = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

export function mountScenesGallery(initial?: SceneId) {
  document.title = "Scenes";
  const configs = readSceneConfigs();
  let active: SceneId = initial ?? scenes[0].id;
  const cfg = (id: SceneId) => configs[id] ?? normalizeScene(brandDefaults(), id);
  document.body.className = "sxg-body";
  document.body.innerHTML = `
<a class="sxg-skip" href="#sxg-editor">Skip to the editor</a>
<div class="sxg">
  <header class="sxg-top"><div class="sxg-intro"><button type="button" class="sxg-backall" hidden>← All scenes</button><h1>Scenes, <em>living places</em></h1><p>${scenes.length} small worlds in pixels, each painted live and snapped to its own palette. They answer the pointer and a click. Open one on its own page, or customise it here and download a folder you can drop into any site.</p></div><a class="sxg-logo" href="/" aria-label="Patchwork, back to the studio"><span class="sxg-logo-mark" aria-hidden="true">✳</span>patchwork<span class="sxg-logo-dot" aria-hidden="true">®</span></a></header>
  <section class="sxg-cards" aria-label="All scenes">${scenes
    .map(
      (it, i) => `<article class="sxg-card" data-id="${it.id}"><a class="sxg-cover" href="${sceneUrl(it.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${it.name} on its own page, in a new tab"><iframe tabindex="-1" aria-hidden="true" title="${it.name} preview"></iframe><span class="sxg-cover-open">Open in new tab<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a><div class="sxg-card-meta"><span>${String(i + 1).padStart(2, "0")} / ${it.mood}</span><span>${it.interaction}</span></div><h2 class="sxg-card-title"><a href="${sceneUrl(it.id)}" target="_blank" rel="noopener noreferrer">${it.name}</a><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></h2><p>${it.description.replace(/</g, "&lt;")}</p><div class="sxg-card-foot"><span class="sxg-sw" aria-hidden="true">${it.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span><button type="button" class="sxg-card-customize" data-id="${it.id}">Customize</button></div></article>`,
    )
    .join("")}</section>
  <nav class="sxg-list" aria-label="Scenes">${scenes
    .map(
      (s, i) => `<div class="sxg-entry" data-id="${s.id}"><a class="sxg-item" href="${sceneUrl(s.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${s.name} on its own page, in a new tab"><span class="sxg-n">${String(i + 1).padStart(2, "0")}</span><span class="sxg-name">${s.name}${external}</span><span class="sxg-meta">${s.mood}</span><span class="sxg-sw" aria-hidden="true">${s.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span></a><button type="button" class="sxg-customize" data-id="${s.id}" aria-pressed="false">Customize</button></div>`,
    )
    .join("")}</nav>
  <section class="sxg-stage" aria-label="Preview">
    <div class="sxg-frame"><iframe title="Scene preview" loading="eager"></iframe></div>
    <div class="sxg-under"><p class="sxg-desc"></p><a class="sxg-frame-open" target="_blank" rel="noopener noreferrer">Open in new tab${external}</a></div>
  </section>
  <form class="sxg-editor" id="sxg-editor" aria-label="Edit this scene">
    ${fields.map(([k, label, max]) => `<label><span>${label}</span>${k === "sub" ? `<textarea name="${k}" maxlength="${max}" rows="2"></textarea>` : `<input name="${k}" maxlength="${max}" ${k === "href" ? 'inputmode="url"' : ""}>`}</label>`).join("")}
    <label><span>Pixel size</span><select name="pixel">${PIXEL_SIZES.map((p) => `<option value="${p}">${p} px${p === 4 ? " (default)" : ""}</option>`).join("")}</select></label>
    <label class="sxg-check"><input type="checkbox" name="text"><span>Show the words (off: the scene alone, as a background)</span></label>
    <div class="sxg-upload"><span>Your photo, painted in this scene's palette</span><div><label class="sxg-btn sxg-file">Choose a photo<input type="file" name="photo" accept="image/png,image/jpeg,image/webp"></label><button type="button" class="sxg-reset sxg-clear-img">Use the painting</button></div><small>Resized and kept on this device; the download carries it inside index.html.</small></div>
    <div class="sxg-actions"><a class="sxg-btn sxg-open" target="_blank" rel="noopener noreferrer">Open on its own page</a><button type="button" class="sxg-btn sxg-dl">Download folder</button><button type="button" class="sxg-reset">Reset</button></div>
    <p class="sxg-status" role="status"></p>
  </form>
</div>`;
  const iframe = document.querySelector<HTMLIFrameElement>(".sxg-frame iframe")!;
  const form = document.querySelector<HTMLFormElement>(".sxg-editor")!;
  const status = document.querySelector<HTMLElement>(".sxg-status")!;
  const desc = document.querySelector<HTMLElement>(".sxg-desc")!;
  const opens = document.querySelectorAll<HTMLAnchorElement>(".sxg-open, .sxg-frame-open");
  const el = <T extends Element>(name: string) => form.elements.namedItem(name) as unknown as T;
  // The preview renders a true 1440x900 desktop page and scales it to fit the frame.
  const frame = document.querySelector<HTMLElement>(".sxg-frame")!;
  new ResizeObserver(() => frame.style.setProperty("--k", String(frame.clientWidth / 1440))).observe(frame);
  let timer = 0;
  const preview = () => {
    iframe.srcdoc = branded(sceneDocument(active, cfg(active), "/scenes/"));
  };
  const select = (id: SceneId) => {
    active = id;
    document.querySelectorAll<HTMLElement>(".sxg-entry").forEach((e) => {
      e.classList.toggle("is-selected", e.dataset.id === id);
      e.querySelector(".sxg-customize")!.setAttribute("aria-pressed", String(e.dataset.id === id));
    });
    const c = cfg(id);
    for (const [k] of fields) el<HTMLInputElement>(k).value = c[k];
    el<HTMLSelectElement>("pixel").value = String(c.pixel);
    el<HTMLInputElement>("text").checked = c.text;
    desc.textContent = scene(id).description;
    document.querySelector<HTMLElement>(".sxg-upload")!.hidden = id === "riso";
    opens.forEach((a) => (a.href = sceneUrl(id)));
    history.replaceState(null, "", `/?collection=scenes&pick=${id}`);
    status.textContent = "";
    preview();
  };
  document.querySelector(".sxg-list")!.addEventListener("click", (e) => {
    // The scene itself opens in a new tab (a plain link); "Customize" loads it into the editor.
    const b = (e.target as Element).closest<HTMLButtonElement>(".sxg-customize");
    if (b && isScene(b.dataset.id)) select(b.dataset.id);
  });
  const read = () => {
    const raw: Partial<SceneConfig> = Object.fromEntries(fields.map(([k]) => [k, el<HTMLInputElement>(k).value]));
    raw.pixel = Number(el<HTMLSelectElement>("pixel").value);
    raw.text = el<HTMLInputElement>("text").checked;
    raw.image = cfg(active).image;
    configs[active] = normalizeScene(raw, active);
    saveConfigs(configs);
  };
  form.addEventListener("input", (e) => {
    if ((e.target as Element).matches?.('input[type="file"]')) return;
    read();
    clearTimeout(timer);
    timer = window.setTimeout(preview, 350);
  });
  form.addEventListener("change", (e) => {
    if ((e.target as Element).matches?.('input[type="file"]')) return;
    read();
    preview();
  });
  form.addEventListener("submit", (e) => e.preventDefault());
  form.querySelector<HTMLInputElement>('input[name="photo"]')!.addEventListener("change", async (e) => {
    const file = (e.target as HTMLInputElement).files?.[0];
    if (!file) return;
    status.textContent = "Reading the photo…";
    try {
      const bmp = await createImageBitmap(file);
      const k = Math.min(1, 1000 / Math.max(bmp.width, bmp.height));
      const c = Object.assign(document.createElement("canvas"), { width: Math.round(bmp.width * k), height: Math.round(bmp.height * k) });
      c.getContext("2d")!.drawImage(bmp, 0, 0, c.width, c.height);
      let q = 0.82, url = c.toDataURL("image/jpeg", q);
      while (url.length > MAX_SCENE_IMAGE && q > 0.4) url = c.toDataURL("image/jpeg", (q -= 0.1));
      configs[active] = normalizeScene({ ...cfg(active), image: url }, active);
      if (!configs[active]!.image) throw new Error("That photo is too large. Try a smaller one.");
      saveConfigs(configs); preview();
      status.textContent = "Photo set. It is drawn with this scene's colours.";
    } catch (err) { status.textContent = err instanceof Error ? err.message : "Could not read that photo."; }
    (e.target as HTMLInputElement).value = "";
  });
  form.querySelector(".sxg-clear-img")!.addEventListener("click", () => { configs[active] = normalizeScene({ ...cfg(active), image: "" }, active); saveConfigs(configs); preview(); status.textContent = "Back to the painting."; });
  document.querySelector(".sxg-reset")!.addEventListener("click", () => {
    delete configs[active];
    saveConfigs(configs);
    select(active);
    status.textContent = "Reset to the original words.";
  });
  document.querySelector(".sxg-dl")!.addEventListener("click", async () => {
    status.textContent = "Packaging…";
    try {
      const blob = await exportScene(active, cfg(active));
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${active}-scene.zip` });
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      status.textContent = `Downloaded ${active}-scene.zip. Unzip it and open index.html.`;
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : "Could not package this scene.";
    }
  });
  // Two cards a row, like the motion templates; "Customize" opens the editor, "← All scenes" comes back.
  const shell = document.querySelector<HTMLElement>(".sxg")!;
  const back = document.querySelector<HTMLButtonElement>(".sxg-backall")!;
  const cards = document.querySelector<HTMLElement>(".sxg-cards")!;
  new ResizeObserver(() => {
    const c = cards.querySelector<HTMLElement>(".sxg-cover");
    if (c && c.clientWidth) cards.style.setProperty("--ck", String(c.clientWidth / 1440));
  }).observe(cards);
  // Live previews run only while their card is on screen.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const f = e.target.querySelector("iframe")!, id = (e.target as HTMLElement).dataset.id as SceneId;
      if (e.isIntersecting && !f.dataset.on) { f.dataset.on = "1"; f.srcdoc = branded(sceneDocument(id, cfg(id), "/scenes/")); }
      else if (!e.isIntersecting && f.dataset.on) { delete f.dataset.on; f.srcdoc = ""; }
    }
  }, { rootMargin: "200px 0px" });
  cards.querySelectorAll(".sxg-card").forEach((c) => io.observe(c));
  const setMode = (grid: boolean) => {
    shell.classList.toggle("is-grid", grid);
    back.hidden = grid;
    if (grid) { iframe.srcdoc = ""; history.replaceState(null, "", "/?collection=scenes"); }
    scrollTo(0, 0);
  };
  cards.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>(".sxg-card-customize");
    if (b && isScene(b.dataset.id)) { setMode(false); select(b.dataset.id); }
  });
  back.addEventListener("click", () => setMode(true));
  mountShell("scenes", () => { cards.querySelectorAll<HTMLIFrameElement>("iframe[data-on]").forEach((f) => { delete f.dataset.on; f.srcdoc = ""; }); io.disconnect(); cards.querySelectorAll(".sxg-card").forEach((c) => io.observe(c)); if (!shell.classList.contains("is-grid")) preview(); });
  if (initial) { setMode(false); select(active); } else setMode(true);
}

export function openStandaloneScene(id: SceneId) {
  const html = branded(sceneDocument(id, readSceneConfigs()[id] ?? brandDefaults(), "/scenes/"));
  document.open();
  document.write(html);
  document.close();
}
