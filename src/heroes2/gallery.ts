import JSZip from "jszip";
import "./gallery.css";
import { heroes2, hero2, isHero2, normalizeHero2, type Hero2Config, type Hero2Id } from "./catalog";
import { hero2Document, hero2Files } from "./document";

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
  zip.file("index.html", hero2Document(id, config, ""));
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

const fields: [keyof Hero2Config, string, number][] = [["brand", "Brand", 24], ["headline", "Headline", 60], ["sub", "Sentence", 160], ["cta", "Main button", 28], ["cta2", "Second button", 28], ["href", "Main button link", 300]];

export function mountHeroes2Gallery(initial?: Hero2Id) {
  document.title = "Hero Sections II";
  const configs = readHero2Configs();
  let active: Hero2Id = initial ?? heroes2[0].id;
  const cfg = (id: Hero2Id) => configs[id] ?? normalizeHero2({}, id);
  document.body.className = "h2g-body";
  document.body.innerHTML = `
<a class="h2g-skip" href="#h2g-editor">Skip to the editor</a>
<div class="h2g">
  <header class="h2g-top"><a class="h2g-back" href="/">Patchwork</a><h1>Hero sections, <em>second take</em></h1><p>Five single-screen openings. Each one is its own technique, typeface and palette, and each downloads as a folder you can drop into any site.</p></header>
  <nav class="h2g-list" aria-label="Heroes">${heroes2
    .map(
      (h, i) => `<button type="button" class="h2g-item" data-id="${h.id}" aria-pressed="false"><span class="h2g-n">0${i + 1}</span><span class="h2g-name">${h.name}</span><span class="h2g-meta">${h.technique} · ${h.type}</span><span class="h2g-sw" aria-hidden="true">${h.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span></button>`,
    )
    .join("")}</nav>
  <section class="h2g-stage" aria-label="Preview">
    <div class="h2g-frame"><iframe title="Hero preview" loading="eager"></iframe></div>
    <p class="h2g-desc"></p>
  </section>
  <form class="h2g-editor" id="h2g-editor" aria-label="Edit this hero">
    ${fields.map(([k, label, max]) => `<label><span>${label}</span>${k === "sub" ? `<textarea name="${k}" maxlength="${max}" rows="2"></textarea>` : `<input name="${k}" maxlength="${max}" ${k === "href" ? 'inputmode="url"' : ""}>`}</label>`).join("")}
    <div class="h2g-actions"><a class="h2g-btn h2g-open" target="_blank" rel="noopener">Open full screen</a><button type="button" class="h2g-btn h2g-dl">Download folder</button><button type="button" class="h2g-reset">Reset words</button></div>
    <p class="h2g-status" role="status"></p>
  </form>
</div>`;
  const iframe = document.querySelector<HTMLIFrameElement>(".h2g-frame iframe")!;
  const form = document.querySelector<HTMLFormElement>(".h2g-editor")!;
  const status = document.querySelector<HTMLElement>(".h2g-status")!;
  const desc = document.querySelector<HTMLElement>(".h2g-desc")!;
  const open = document.querySelector<HTMLAnchorElement>(".h2g-open")!;
  let timer = 0;
  const preview = () => {
    iframe.srcdoc = hero2Document(active, cfg(active), "/heroes2/");
  };
  const select = (id: Hero2Id) => {
    active = id;
    document.querySelectorAll<HTMLButtonElement>(".h2g-item").forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.id === id)));
    const c = cfg(id);
    for (const [k] of fields) (form.elements.namedItem(k) as HTMLInputElement).value = c[k];
    desc.textContent = hero2(id).description;
    open.href = hero2Url(id);
    history.replaceState(null, "", `/?collection=heroes2&hero=${id}`);
    status.textContent = "";
    preview();
  };
  document.querySelector(".h2g-list")!.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>(".h2g-item");
    if (b && isHero2(b.dataset.id)) select(b.dataset.id);
  });
  form.addEventListener("input", () => {
    const raw = Object.fromEntries(fields.map(([k]) => [k, (form.elements.namedItem(k) as HTMLInputElement).value])) as Partial<Hero2Config>;
    configs[active] = normalizeHero2(raw, active);
    saveConfigs(configs);
    clearTimeout(timer);
    timer = window.setTimeout(preview, 350);
  });
  form.addEventListener("submit", (e) => e.preventDefault());
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
  select(active);
}

export function openStandaloneHero2(id: Hero2Id) {
  const html = hero2Document(id, readHero2Configs()[id] ?? {}, "/heroes2/");
  document.open();
  document.write(html);
  document.close();
}
