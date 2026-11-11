import { goldseamChapters } from "./goldseam-story";
import type { MotionConfig } from "./catalog";

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (email: string) => "mailto:" + email.split("@").map(encodeURIComponent).join("@");
/** Word-masked type: the screen reader gets the sentence, the eye gets the reveal. */
const words = (text: string) =>
  `<span class="sr-only">${esc(text)}</span><span aria-hidden="true">${text
    .split(/\s+/)
    .map((w) => `<span class="gs-w"><span class="gs-c">${esc(w)}</span></span>`)
    .join(" ")}</span>`;
const fallback = `<svg viewBox="0 0 400 260" aria-hidden="true"><path d="M60 70c0 90 60 150 140 150s140-60 140-150Z" fill="#efe6d6"/><ellipse cx="200" cy="70" rx="140" ry="22" fill="#d9cdb8"/><path d="M95 92l40 38 22-20 30 62m58-80-22 58 52 22m-8-96-10 30" fill="none" stroke="#e0b25c" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><rect x="160" y="218" width="80" height="12" rx="3" fill="#b58f6c"/></svg>`;
const steps = [
  ["Clean every edge", "Brush away dust. Sand the break just enough to hold lacquer."],
  ["Join with urushi", "Sap of the lacquer tree, thickened with rice paste."],
  ["Let it cure", "Weeks in a humid box. The lacquer hardens only when the air is wet."],
  ["Dust with gold", "Fine powder brushed into the final coat while it is tacky."],
];

export function renderGoldseam(c: MotionConfig) {
  const chapters = goldseamChapters.map(([label, title, copy, note], i) => {
    const side = i === 5 ? "gs-chapter--statement" : "gs-chapter--left";
    return `<article class="gs-chapter ${side}" data-index="${i}" data-chapter="${esc(title)}"><span class="gs-num gs-fade">${String(i + 1).padStart(2, "0")} — ${label}</span><h2>${words(title)}</h2><p class="gs-fade">${esc(copy)}</p><span class="gs-note gs-fade">${esc(note)}</span></article>`;
  });
  const labels = Array.from({ length: 13 }, (_, i) => `<div class="gs-label"><span>Nº ${String(i + 1).padStart(2, "0")}</span><b></b></div>`).join("");
  return `<a class="gs-skip" href="#story">Read the story as text</a>
<header class="gs-nav"><a href="#top" class="gs-brand">${esc(c.brand)}<i aria-hidden="true"></i></a><span>A STORY OF REPAIR, IN SEVEN CHAPTERS</span><a href="#contact">Bring us something broken <span aria-hidden="true">↗</span></a></header>
<main id="top">
<section class="gs-journey" aria-label="A tea bowl breaks, and is mended with gold">
<div class="gs-stage">
  <div class="gs-world" data-scene="goldseam" role="img" aria-label="A cream tea bowl on a stone plinth. It falls, shatters into thirteen pieces, and is rebuilt with seams of gold."><div class="gs-fallback">${fallback}</div></div>
  <div class="gs-vignette" aria-hidden="true"></div><div class="gs-grain" aria-hidden="true"></div>
  <div class="gs-hero"><span class="gs-eyebrow gs-fade">KINTSUGI / THE ART OF GOLDEN REPAIR</span><h1>${words(c.headline)}</h1><p class="gs-fade">This is the story of one tea bowl,<br>a very bad second, and forty-seven days of patience.</p></div>
  <dl class="gs-hero-aside"><div><dt>OBJECT</dt><dd>Shino chawan, Nº 0412</dd></div><div><dt>MADE</dt><dd>Mino, Japan · 1984</dd></div><div><dt>BODY</dt><dd>Stoneware, feldspar glaze</dd></div><div><dt>CONDITION</dt><dd>Whole, for now</dd></div></dl>
  ${chapters.join("")}
  <div class="gs-flash" aria-hidden="true"></div>
  <div class="gs-impact" aria-hidden="true"><b>0.41</b><span>SECONDS</span></div>
  <div class="gs-labels" aria-hidden="true">${labels}</div>
  <div class="gs-process" aria-hidden="true"><div class="gs-day">DAY <b>01</b><small>OF 47</small></div><ol class="gs-steps">${steps.map(([t, d]) => `<li><span>${t}</span><small>${d}</small></li>`).join("")}</ol></div>
  <div class="gs-meter" aria-hidden="true"><span>GOLD LAID INTO THE SEAMS</span><b>0.0</b><small>OF 0 CM</small><i></i></div>
  <div class="gs-hud" aria-hidden="true"><span class="gs-hud-chapter">THE RITUAL</span><span class="gs-dots">${"<i></i>".repeat(7)}</span><span class="gs-hud-count">01 / 07</span><span class="gs-track"><i></i></span><span class="gs-scroll-hint">SCROLL SLOWLY ↓</span></div>
</div>
</section>
<section id="story" class="gs-log"><header><span>THE REPAIR LOG</span><h2>Seven chapters,<br>one bowl.</h2><p>The same story, written down. Kintsugi treats breakage as part of an object’s history, rather than something to disguise.</p></header><div class="gs-log-grid">${goldseamChapters
    .map(([label, title, copy, note], i) => `<article data-chapter="${esc(title)}"><span>${String(i + 1).padStart(2, "0")} / ${label}</span><h3>${esc(title)}</h3><p>${esc(copy)}</p><small>${esc(note)}</small></article>`)
    .join("")}</div></section>
<footer id="contact" class="gs-ending" data-chapter="Bring us something broken"><svg class="gs-seam-line" viewBox="0 0 400 1000" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><path d="M226 0l14 64-31 58 41 76-16 58 50 70-30 74 18 66-52 72 31 70-19 78 43 70-31 80 22 82-20 32"/><path d="M250 198l66 30 30 66 44 22"/><path d="M216 542l-62 38-28 70-58 30-40 58"/></svg><span class="gs-eyebrow">EVERY REPAIR BEGINS WITH A CONVERSATION</span><h2>${words("Bring us something broken.")}</h2><p>We mend ceramics with lacquer and gold, slowly, and send them home carrying their story.</p><a href="${esc(mail(c.email))}">Begin a repair <span aria-hidden="true">↗</span></a><div class="gs-foot"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>AN INDEPENDENT KINTSUGI CONCEPT</span><a href="#top">Watch it mend again ↑</a></div></footer>
</main>`;
}
