import { findBackground, decorations, fontPairs, defaultAscii } from "./catalog";
import artwork from "./artwork.json";
import type { Project, SiteSection, RenderOptions } from "./types";
export const escapeHtml = (v: unknown) =>
  String(v ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function safeLink(link: string) {
  return /^(https?:\/\/|mailto:|tel:|#)/i.test(link.trim()) ? link.trim() : "#";
}
const color = (s: string) => (/^#[0-9a-f]{3,8}$/i.test(s) ? s : "#795be6");
export function renderSite(p: Project, o: RenderOptions = {}) {
  const a = (id: string | undefined) =>
    id
      ? escapeHtml(
          o.assetUrls?.[id] ??
            (id.startsWith("asset:")
              ? "data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs="
              : id),
        )
      : "";
  const font = fontPairs.find((f) => f.id === p.theme.font) ?? fontPairs[0];
  const title = (s: SiteSection, tag = "h2") =>
    `<${tag}>${escapeHtml(s.title).replace(/\n/g, "<br>")}</${tag}>`;
  const button = (s: SiteSection) =>
    `<a class="pw-button" href="${escapeHtml(safeLink(s.link))}">${escapeHtml(s.button)} <span aria-hidden="true">↗</span></a>`;
  const visible = p.sections.filter((s) => s.visible);
  const anchor = (s: SiteSection) => {
    const base =
      s.kind === "hero" ? "top" : s.kind === "gallery" ? "work" : s.kind;
    return visible.find((x) => x.kind === s.kind)?.id === s.id
      ? base
      : `${base}-${s.id}`;
  };
  const parts = visible
    .map((s) => {
      const bg = findBackground(s.background);
      const ascii =
        bg?.type === "ascii" ? { ...defaultAscii(bg), ...s.ascii } : null;
      const video = s.video
        ? o.assetUrls?.[s.video]
          ? a(s.video)
          : ""
        : bg?.type === "video" || ascii?.mode === "video"
          ? a(bg?.source)
          : "";
      const poster = s.poster ? a(s.poster) : bg ? a(bg.preview) : "";
      const asciiMarkup =
        ascii && bg?.scene && ascii.mode === "live" && !s.video
          ? `<div class="pw-ascii-poster" style="background-image:url('${a(bg.preview)}')"></div><canvas class="pw-ascii-canvas" data-ascii="${bg.scene}" data-speed="${ascii.speed}" data-density="${ascii.density}" data-color="${color(ascii.color)}" aria-hidden="true"></canvas><div class="pw-ascii-dimmer" style="opacity:${1 - ascii.intensity / 100}"></div><div class="pw-ascii-scrim"></div>`
          : "";
      const nav = visible
        .filter(
          (x) =>
            ["about", "gallery", "contact"].includes(x.kind) &&
            visible.find((v) => v.kind === x.kind)?.id === x.id,
        )
        .map(
          (x) =>
            `<a href="#${anchor(x)}">${escapeHtml(x.kind === "gallery" ? "Work" : x.kind === "about" ? "About" : "Contact")}</a>`,
        )
        .join("");
      let content = "";
      if (s.kind === "hero")
        content = `<header class="pw-nav"><a class="pw-brand" href="#top">${escapeHtml(s.eyebrow.split(",")[0] || "MY LITTLE WEBSITE")}<span>✳</span></a><nav aria-label="Site">${nav}</nav></header><div class="pw-hero-content"><p class="pw-eyebrow">${escapeHtml(s.eyebrow)}</p>${title(s, "h1")}<p class="pw-body">${escapeHtml(s.body)}</p>${button(s)}${s.image ? `<img class="pw-hero-image" src="${a(s.image)}" alt="${escapeHtml(s.imageAlt)}">` : ""}<div class="pw-small-note">SCROLL A LITTLE, STAY A WHILE ↓</div></div>`;
      if (s.kind === "about")
        content = `<div class="pw-about"><div><p class="pw-eyebrow">${escapeHtml(s.eyebrow)}</p>${title(s)}<p class="pw-body">${escapeHtml(s.body)}</p></div>${s.image ? `<img src="${a(s.image)}" alt="${escapeHtml(s.imageAlt)}">` : `<div class="pw-art pw-art-about"><span>✳</span><small>ALWAYS A WORK IN PROGRESS</small></div>`}</div>`;
      if (s.kind === "gallery")
        content = `<p class="pw-eyebrow">${escapeHtml(s.eyebrow)}</p>${title(s)}<p class="pw-body">${escapeHtml(s.body)}</p><div class="pw-grid">${s.items.map((item, i) => `<article class="pw-card"><a href="${escapeHtml(safeLink(item.link || "#contact"))}">${item.image ? `<img src="${a(item.image)}" alt="${escapeHtml(item.alt || "")}">` : `<div class="pw-art pw-art-${i % 3}"><span>${["✳", "◒", "↗"][i % 3]}</span><small>${["SLOW STUDIO", "EVERYDAY WONDERS", "SOMEWHERE NEW"][i % 3]}</small></div>`}<div class="pw-card-text"><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p><span aria-hidden="true">↗</span></div></a></article>`).join("")}</div>`;
      if (s.kind === "skills")
        content = `<p class="pw-eyebrow">${escapeHtml(s.eyebrow)}</p>${title(s)}<div class="pw-grid pw-skills">${s.items.map((item, i) => `<article><span class="pw-skill-symbol" aria-hidden="true">${["✳", "◈", "↗"][i % 3]}</span><h3>${escapeHtml(item.title)}</h3><p>${escapeHtml(item.body)}</p></article>`).join("")}</div>`;
      if (s.kind === "contact")
        content = `<div class="pw-contact"><p class="pw-eyebrow">${escapeHtml(s.eyebrow)}</p>${title(s)}<p class="pw-body">${escapeHtml(s.body)}</p>${button(s)}</div>`;
      if (s.kind === "footer")
        content = `<footer class="pw-footer"><p>${escapeHtml(s.title)}</p><a href="${escapeHtml(safeLink(s.link))}">${escapeHtml(s.button)} ↗</a><small>${escapeHtml(s.eyebrow)}</small></footer>`;
      const elems = s.elements
        .map((e) => {
          const d = decorations.find((d) => d.id === e.asset);
          if (!d) return "";
          return `<div aria-hidden="true" data-element="${escapeHtml(e.id)}" data-motion="${e.motion}" class="pw-decor ${e.hideMobile ? "pw-hide-mobile" : ""} ${o.selectedElement === e.id ? "pw-element-selected" : ""}" style="--x:${e.x}%;--y:${e.y}%;--mx:${e.mobileX}%;--my:${e.mobileY}%;--size:${e.size}px;--rotation:${e.rotation}deg;--layer:${e.layer};color:${color(e.color)}"><span>${(artwork as Record<string, string>)[d.id] || ""}</span></div>`;
        })
        .join("");
      return `<section id="${escapeHtml(anchor(s))}" data-section="${escapeHtml(s.id)}" data-kind="${s.kind}" data-world="${s.world}" data-motion="${s.motion}" class="pw-section pw-section-${s.kind} pw-variation-${s.variation} ${ascii ? "pw-ascii-section" : ""} ${o.selectedSection === s.id ? "pw-selected" : ""}" style="--pad:${s.padding}px;--width:${s.width}px;--radius:${s.radius}px;--shadow:${s.shadow}px;--duration:${s.duration}s;text-align:${s.align};${ascii ? `--ink:#eef4ff;--paper:#030710;--accent:${color(ascii.color)};color:#eef4ff;background-color:#030710;` : ""}${video ? `background-image:url('${poster || a(`/assets/backgrounds/${s.world}-4.svg`)}');` : bg && !ascii ? `background-image:${bg.css || `url('${a(bg.preview)}')`};` : ""}">${asciiMarkup}${video ? `<video class="pw-bg-video" src="${video}" ${poster ? `poster="${poster}"` : ""} ${ascii ? `data-speed="${ascii.speed}"` : ""} autoplay muted loop playsinline style="object-fit:${s.videoFit};object-position:${s.videoPosition}% center"></video><div class="pw-video-shade" style="opacity:${ascii ? Math.max(s.overlay / 100, 1 - ascii.intensity / 100) : s.overlay / 100}"></div>${ascii ? '<div class="pw-ascii-scrim"></div>' : ""}` : ""}<div class="pw-content">${content}</div><div class="pw-scene">${elems}</div></section>`;
    })
    .join("");
  return `<main class="pw-site ${o.reducedMotion ? "pw-reduced" : ""} ${o.mobile ? "pw-mobile" : ""}" data-reduced="${!!o.reducedMotion}" style="--accent:${color(p.theme.accent)};--paper:${color(p.theme.background)};--ink:${color(p.theme.foreground)};--heading:'${font.heading}';--body:'${font.body}'">${parts || '<div class="pw-empty"><span>✳</span><h1>A little space for your ideas.</h1><p>Add your first section from the library.</p></div>'}</main>`;
}
