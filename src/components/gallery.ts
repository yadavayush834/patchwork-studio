import JSZip from "jszip";
import "./gallery.css";
import { components, component, isComponent, normalizeComponent, type ComponentConfig, type ComponentId, type Option } from "./catalog";
import { componentDocument, componentFiles, componentSnippet, componentTag } from "./document";
import { mountShell } from "../shell/shell";
import { readBrand } from "../shell/brand";
/** With a brand kit, components start in its colours (your own changes still win). */
const brandDefaults = (): ComponentConfig => { const b = readBrand(); return b ? { color: b.primary, color2: b.secondary, wings: b.primary, box: b.primary, tail: b.secondary } : {}; };

const KEY = "patchwork-components-v1";
export function readComponentConfigs(): Partial<Record<ComponentId, ComponentConfig>> {
  try {
    const data = JSON.parse(localStorage.getItem(KEY) ?? "null");
    if (data?.version !== 1) return {};
    return Object.fromEntries(components.filter((c) => data.configs?.[c.id]).map((c) => [c.id, normalizeComponent(data.configs[c.id], c.id)]));
  } catch {
    return {};
  }
}
const saveConfigs = (configs: Partial<Record<ComponentId, ComponentConfig>>) => {
  try {
    localStorage.setItem(KEY, JSON.stringify({ version: 1, configs }));
  } catch {
    /* Storage can be unavailable (private windows); the session still works. */
  }
};
export const componentUrl = (id: ComponentId) => `/?component=${encodeURIComponent(id)}`;
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

export async function exportComponent(id: ComponentId, config: ComponentConfig) {
  const zip = new JSZip();
  // Everything lives in components/, exactly where the snippet expects it.
  zip.file("index.html", componentDocument(id, config, "components/"));
  await Promise.all(
    componentFiles(id).map(async (path) => {
      const res = await fetch(`/components/${path}`);
      if (!res.ok) throw new Error(`Could not package ${path}.`);
      zip.file(`components/${path}`, await res.blob());
    }),
  );
  const k = component(id);
  zip.file("recipe.json", JSON.stringify({ version: 1, component: id, config }, null, 2));
  zip.file(
    "README.txt",
    `${k.name} (<${k.tag}>): ${k.job}\n\n${k.description}\n\nOpen index.html for a working demo (any static server, or just double-click).\n\nTo use it on your own site, copy the components/ folder next to your page and paste:\n\n${componentSnippet(id, config)}\n\nNo build step, no dependencies, no network requests. Visitors who ask for reduced motion get a still version that still does the job.\nFonts used by the demo page are under the SIL Open Font License; see components/licenses/.\n`,
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}

const external = `<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const control = (o: Option) => {
  const common = `name="${o.key}" id="cp-${o.key}"`;
  const input =
    o.type === "color" ? `<input type="color" ${common}>`
      : o.type === "number" ? `<input type="number" inputmode="numeric" min="${o.min}" max="${o.max}" ${common}>`
        : o.type === "select" ? `<select ${common}>${o.choices!.map((c) => `<option value="${c}">${c}</option>`).join("")}</select>`
          : `<input maxlength="${o.max ?? 60}" ${common}>`;
  return `<label for="cp-${o.key}"><span>${o.label}</span>${input}</label>`;
};

/** Mimeo copies the snippet: the gallery uses one of its own components. */
const loadMimeo = () =>
  ["/components/kit.js", "/components/mimeo.js"].reduce<Promise<unknown>>((p, src) => p.then(() => new Promise((ok) => { const s = Object.assign(document.createElement("script"), { src }); s.onload = s.onerror = ok; document.head.append(s); })), Promise.resolve());

export function mountComponentsGallery(initial?: ComponentId) {
  document.title = "Components";
  const configs = readComponentConfigs();
  let active: ComponentId = initial ?? components[0].id;
  const cfg = (id: ComponentId) => configs[id] ?? normalizeComponent(brandDefaults(), id);
  document.body.className = "cpg-body";
  document.body.innerHTML = `
<a class="cpg-skip" href="#cpg-editor">Skip to the editor</a>
<div class="cpg">
  <header class="cpg-top"><div class="cpg-intro"><button type="button" class="cpg-backall" hidden>← All components</button><h1>Components, <em>with a job to do</em></h1><p>Small pixel characters that live on a real page and do real work there: reveal a headline, take you back to the top, answer a form, show progress, divide sections, copy code. Each is one tag plus a tiny script, keyboard and screen-reader friendly. Open one to try it, or customise it here and download it.</p></div><a class="cpg-logo" href="/" aria-label="Patchwork, back to the studio"><span class="cpg-logo-mark" aria-hidden="true">✳</span>patchwork<span class="cpg-logo-dot" aria-hidden="true">®</span></a></header>
  <section class="cpg-cards" aria-label="All components">${components
    .map(
      (it, i) => `<article class="cpg-card" data-id="${it.id}"><a class="cpg-cover" href="${componentUrl(it.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open ${it.name} on its own page, in a new tab"><iframe tabindex="-1" aria-hidden="true" title="${it.name} preview"></iframe><span class="cpg-cover-open">Open in new tab<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 11 11 5M6 5h5v5" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg></span></a><div class="cpg-card-meta"><span>0${i + 1} / ${it.job}</span><span>&lt;${it.tag}&gt;</span></div><h2 class="cpg-card-title"><a href="${componentUrl(it.id)}" target="_blank" rel="noopener noreferrer">${it.name}</a><svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" stroke-width="1.3"/></svg></h2><p>${it.description.replace(/</g, "&lt;")}</p><div class="cpg-card-foot"><span class="cpg-sw" aria-hidden="true">${it.palette.map((c) => `<i style="background:${c}"></i>`).join("")}</span><button type="button" class="cpg-card-customize" data-id="${it.id}">Customize</button></div></article>`,
    )
    .join("")}</section>
  <nav class="cpg-list" aria-label="Components">${components
    .map(
      (c, i) => `<div class="cpg-entry" data-id="${c.id}"><a class="cpg-item" href="${componentUrl(c.id)}" target="_blank" rel="noopener noreferrer" aria-label="Open the ${c.name} demo on its own page, in a new tab"><span class="cpg-n">0${i + 1}</span><span class="cpg-name">${c.name}${external}</span><span class="cpg-meta">${c.job} · &lt;${c.tag}&gt;</span><span class="cpg-sw" aria-hidden="true">${c.palette.map((p) => `<i style="background:${p}"></i>`).join("")}</span></a><button type="button" class="cpg-customize" data-id="${c.id}" aria-pressed="false">Customize</button></div>`,
    )
    .join("")}</nav>
  <section class="cpg-stage" aria-label="Preview">
    <div class="cpg-frame"><iframe title="Component demo" loading="eager"></iframe></div>
    <div class="cpg-under"><div><p class="cpg-desc"></p><div class="cpg-meta"><span class="cpg-where"></span></div></div><a class="cpg-frame-open" target="_blank" rel="noopener noreferrer">Open in new tab${external}</a></div>
  </section>
  <form class="cpg-editor" id="cpg-editor" aria-label="Customise this component">
    <div class="cpg-fields" style="display:contents"></div>
    <div class="cpg-code-head"><span>Paste this into your page</span><span class="cpg-tag"></span></div>
    <pre class="cpg-code"><code></code><pw-mimeo label="Copy" done="Copied"></pw-mimeo></pre>
    <div class="cpg-actions"><a class="cpg-btn cpg-open" target="_blank" rel="noopener noreferrer">Open the demo</a><button type="button" class="cpg-btn cpg-dl">Download folder</button><button type="button" class="cpg-reset">Reset</button></div>
    <p class="cpg-status" role="status"></p>
  </form>
</div>`;
  void loadMimeo();
  const frame = document.querySelector<HTMLElement>(".cpg-frame")!;
  new ResizeObserver(() => frame.style.setProperty("--k", String(frame.clientWidth / 1440))).observe(frame);
  const iframe = frame.querySelector("iframe")!;
  const form = document.querySelector<HTMLFormElement>(".cpg-editor")!;
  const fields = form.querySelector<HTMLElement>(".cpg-fields")!;
  const code = form.querySelector<HTMLElement>(".cpg-code code")!;
  const status = document.querySelector<HTMLElement>(".cpg-status")!;
  const opens = document.querySelectorAll<HTMLAnchorElement>(".cpg-open, .cpg-frame-open");
  let timer = 0;
  const preview = () => { iframe.srcdoc = componentDocument(active, cfg(active), "/components/"); };
  const showCode = () => {
    code.innerHTML = esc(componentSnippet(active, cfg(active)));
    form.querySelector(".cpg-tag")!.textContent = componentTag(active, cfg(active));
  };
  const select = (id: ComponentId) => {
    active = id;
    document.querySelectorAll<HTMLElement>(".cpg-entry").forEach((e) => {
      e.classList.toggle("is-selected", e.dataset.id === id);
      e.querySelector(".cpg-customize")!.setAttribute("aria-pressed", String(e.dataset.id === id));
    });
    const k = component(id), c = cfg(id);
    fields.innerHTML = (k.options as readonly Option[]).map(control).join("");
    for (const o of k.options as readonly Option[]) (form.elements.namedItem(o.key) as HTMLInputElement).value = c[o.key];
    document.querySelector(".cpg-desc")!.textContent = k.description;
    document.querySelector(".cpg-where")!.textContent = `Goes: ${k.where}`;
    opens.forEach((a) => (a.href = componentUrl(id)));
    history.replaceState(null, "", `/?collection=components&pick=${id}`);
    status.textContent = "";
    showCode();
    preview();
  };
  document.querySelector(".cpg-list")!.addEventListener("click", (e) => {
    // The component's demo opens in a new tab (a plain link); "Customize" loads it into the editor.
    const b = (e.target as Element).closest<HTMLButtonElement>(".cpg-customize");
    if (b && isComponent(b.dataset.id)) select(b.dataset.id);
  });
  const read = () => {
    const raw: ComponentConfig = {};
    for (const o of component(active).options as readonly Option[]) raw[o.key] = (form.elements.namedItem(o.key) as HTMLInputElement).value;
    configs[active] = normalizeComponent(raw, active);
    saveConfigs(configs);
    showCode();
  };
  form.addEventListener("input", (e) => {
    if ((e.target as Element).closest("pw-mimeo")) return;
    read();
    clearTimeout(timer);
    timer = window.setTimeout(preview, 450);
  });
  form.addEventListener("submit", (e) => e.preventDefault());
  document.querySelector(".cpg-reset")!.addEventListener("click", () => {
    delete configs[active];
    saveConfigs(configs);
    select(active);
    status.textContent = "Back to the original settings.";
  });
  document.querySelector(".cpg-dl")!.addEventListener("click", async () => {
    status.textContent = "Packaging…";
    try {
      const blob = await exportComponent(active, cfg(active));
      const a = Object.assign(document.createElement("a"), { href: URL.createObjectURL(blob), download: `${active}-component.zip` });
      a.click();
      setTimeout(() => URL.revokeObjectURL(a.href), 2000);
      status.textContent = `Downloaded ${active}-component.zip. Open index.html for the demo; the README has the snippet.`;
    } catch (err) {
      status.textContent = err instanceof Error ? err.message : "Could not package this component.";
    }
  });
  // Two cards a row, like the motion templates; "Customize" opens the editor, "← All components" comes back.
  const shell = document.querySelector<HTMLElement>(".cpg")!;
  const back = document.querySelector<HTMLButtonElement>(".cpg-backall")!;
  const cards = document.querySelector<HTMLElement>(".cpg-cards")!;
  new ResizeObserver(() => {
    const c = cards.querySelector<HTMLElement>(".cpg-cover");
    if (c && c.clientWidth) cards.style.setProperty("--ck", String(c.clientWidth / 1440));
  }).observe(cards);
  // Live previews run only while their card is on screen.
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      const f = e.target.querySelector("iframe")!, id = (e.target as HTMLElement).dataset.id as ComponentId;
      if (e.isIntersecting && !f.dataset.on) { f.dataset.on = "1"; f.srcdoc = componentDocument(id, cfg(id), "/components/"); }
      else if (!e.isIntersecting && f.dataset.on) { delete f.dataset.on; f.srcdoc = ""; }
    }
  }, { rootMargin: "200px 0px" });
  cards.querySelectorAll(".cpg-card").forEach((c) => io.observe(c));
  const setMode = (grid: boolean) => {
    shell.classList.toggle("is-grid", grid);
    back.hidden = grid;
    if (grid) { iframe.srcdoc = ""; history.replaceState(null, "", "/?collection=components"); }
    scrollTo(0, 0);
  };
  cards.addEventListener("click", (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>(".cpg-card-customize");
    if (b && isComponent(b.dataset.id)) { setMode(false); select(b.dataset.id); }
  });
  back.addEventListener("click", () => setMode(true));
  mountShell("components", () => { cards.querySelectorAll<HTMLIFrameElement>("iframe[data-on]").forEach((f) => { delete f.dataset.on; f.srcdoc = ""; }); io.disconnect(); cards.querySelectorAll(".cpg-card").forEach((c) => io.observe(c)); if (!shell.classList.contains("is-grid")) select(active); });
  if (initial) { setMode(false); select(active); } else setMode(true);
}

export function openStandaloneComponent(id: ComponentId) {
  const html = componentDocument(id, readComponentConfigs()[id] ?? {}, "/components/");
  document.open();
  document.write(html);
  document.close();
}
