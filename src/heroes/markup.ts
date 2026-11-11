import {
  heroes,
  normalizeConfig,
  type HeroConfig,
  type HeroId,
} from "./catalog";
export const escape = (value: unknown) =>
  String(value ?? "").replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function headlineHTML(text: string) {
  return text
    .split("\n")
    .slice(0, 3)
    .map((line) => `<span class="line"><span>${escape(line)}</span></span>`)
    .join("");
}
export function heroMarkup(id: HeroId, input: HeroConfig) {
  const c = normalizeConfig(id, input),
    h = heroes.find((h) => h.id === id)!;
  return `<section part="hero" class="hero hero-${id}" id="hero" aria-label="${escape(c.brand)}"><div class="visual" aria-hidden="true"><canvas></canvas><div class="fallback"></div></div><header part="header"><a class="wordmark" href="#hero" aria-label="${escape(c.brand)} home"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 29 16 16 29 3 16Z M16 3V29 M3 16H29" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span>${escape(c.brand)}</span></a><button class="pause" aria-label="Pause animation" aria-pressed="false"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10m6-10v10" stroke="currentColor" stroke-width="1.5"/></svg><span>Pause motion</span></button></header><div class="composition"><div class="copy"><h1 part="headline">${headlineHTML(c.headline)}</h1><div class="copy-bottom"><p part="description">${escape(c.body)}</p>${c.href ? `<a part="action" class="action" href="${escape(c.href)}">` : '<button part="action" class="action" type="button">'}<span>${escape(c.cta)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>${c.href ? "</a>" : "</button>"}</div></div></div><footer part="footer"><span class="scene-note">${escape(h.note)}</span><div class="interaction-note"><span class="live-dot"></span><span class="mode-label">Move to explore</span></div></footer><div class="sr-only" role="status" aria-live="polite"></div></section>`;
}
