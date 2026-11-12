import type { MotionConfig } from "./catalog";

/**
 * Atrium: the website of an imagined museum, where the paintings are the interface.
 * You start inside a painting; scrolling steps back until it hangs on the wall. Then a walk past
 * the collection with a loupe for the brushwork, a painting you can zoom into detail by detail,
 * and a ticket desk. Every painting is new, made for this template; the artists are fictional.
 */
const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (s: string) => esc("mailto:" + s.split("@").map(encodeURIComponent).join("@"));
const words = (s: string) => `<span class="sr-only">${esc(s)}</span><span aria-hidden="true">${s.split(/\s+/).map((w) => `<span class="at-w"><span>${esc(w)}</span></span>`).join(" ")}</span>`;

export const ATRIUM_WORKS = [
  { id: "allegory", title: "Dawn Lets Go", artist: "Ilse van Aert", year: "1638", medium: "Oil on canvas, 212 × 340 cm", room: "Room 1 · The open sky", w: 16, h: 9, alt: "Figures in billowing rose and blue silk among dawn clouds, one releasing a white dove" },
  { id: "astronomer", title: "The Night Reader", artist: "Cornelis Brandt", year: "1659", medium: "Oil on oak panel, 96 × 72 cm", room: "Room 2 · Small hours", w: 3, h: 4, alt: "An old astronomer by candlelight holding a brass astrolabe to a leaded window" },
  { id: "abbey", title: "Light over Saint Aud", artist: "Thomas Harrow", year: "1829", medium: "Oil on canvas, 140 × 248 cm", room: "Room 3 · Weather", w: 16, h: 9, alt: "A ruined abbey on a sea cliff, struck by a shaft of sunlight through a storm" },
  { id: "stilllife", title: "Vanitas with a Lemon", artist: "Geertruid Molen", year: "1664", medium: "Oil on canvas, 74 × 58 cm", room: "Room 2 · Small hours", w: 3, h: 4, alt: "Tulips, a peony, a half-peeled lemon and an open pocket watch on a marble ledge" },
  { id: "lagoon", title: "Festa on the Lagoon", artist: "Lucia Ferri", year: "1752", medium: "Oil on canvas, 118 × 210 cm", room: "Room 4 · Celebration", w: 16, h: 9, alt: "Lantern-lit boats on a lagoon at night beneath fireworks over distant domes" },
] as const;
export const atriumAssets = () => ATRIUM_WORKS.map((w) => `motion/art/atrium/${w.id}.webp`);
const img = (id: string, alt: string, extra = "") => `<img src="motion/art/atrium/${id}.webp" alt="${esc(alt)}" decoding="async"${extra}>`;

/** Points of interest in The Night Reader, in percentages of the painting, with what the guide says. */
export const ATRIUM_DETAILS = [
  { x: 42, y: 27, label: "The astrolabe", note: "Brandt painted the brass with almost no yellow: it is grey and white, and your eye supplies the gold. Look at the tiny ring of reflected candle on the rim." },
  { x: 74, y: 51, label: "One candle", note: "The only light in the room. Everything else is a guess the painter makes for you: the shadows are warm on the near side, cool where the window reaches." },
  { x: 88, y: 15, label: "The window", note: "Leaded panes, each one a slightly different blue. Infrared shows he first painted the window open, then changed his mind and shut out the night." },
  { x: 34, y: 76, label: "The books", note: "Two are open to star charts that do not exist. A painter's joke, or a private map: nobody has worked it out." },
] as const;

export function renderAtrium(c: MotionConfig) {
  const [hero, ...rest] = ATRIUM_WORKS;
  const frame = (w: (typeof ATRIUM_WORKS)[number], cls = "", extra = "") =>
    `<figure class="at-frame ${cls}" style="--ar:${w.w}/${w.h}"${extra}><div class="at-canvas">${img(w.id, w.alt, ' loading="lazy"')}</div></figure>`;
  return `<a class="mt-skip" href="#story">Skip to the collection</a>
<header class="mt-nav at-nav"><a class="mt-brand" href="#top">${esc(c.brand)}</a><nav aria-label="Template navigation"><a href="#story">Now showing</a><a href="#closer">Look closer</a><a href="#contact">Visit ↗</a></nav></header>
<div class="mt-progress" aria-hidden="true"><i></i></div>
<section class="at-hero" id="top" data-scene="atrium" data-chapter="Inside a painting">
 <div class="at-wall" aria-hidden="true"></div>
 <figure class="at-frame at-lead" style="--ar:16/9"><div class="at-canvas">${img(hero.id, hero.alt, ' fetchpriority="high" data-critical')}</div></figure>
 <figure class="at-frame at-side at-left" style="--ar:16/9" aria-hidden="true"><div class="at-canvas">${img("abbey", "", ' loading="lazy"')}</div></figure>
 <figure class="at-frame at-side at-right" style="--ar:16/9" aria-hidden="true"><div class="at-canvas">${img("lagoon", "", ' loading="lazy"')}</div></figure>
 <div class="at-label" aria-hidden="true"><b>${hero.title}</b><span>${hero.artist}, ${hero.year}</span><span>${hero.medium}</span></div>
 <div class="at-ui">
  <div class="at-grid" aria-hidden="true"><i></i><i></i><i></i></div>
  <p class="at-room">${hero.room}</p>
  <p class="at-name" aria-hidden="true">${esc(c.brand)}</p>
  <div class="at-hero-copy"><h1>${words(c.headline)}</h1><p>A museum of paintings nobody had seen until now. Five rooms, open late on Thursdays.</p></div>
  <p class="at-cat" aria-hidden="true"><span>Nº 001</span><span>${hero.title}</span><span>${hero.artist}, ${hero.year}</span><span>Scroll to step back ↓</span></p>
 </div>
</section>
<section class="at-show" id="story" data-chapter="Now showing">
 <div class="at-show-head"><p class="at-kicker">Now showing · the permanent collection</p><h2>Five rooms. <em>Take your time.</em></h2></div>
 <div class="at-track">${ATRIUM_WORKS.map((w, i) => `<article class="at-work" data-work="${w.id}">${frame(w, "", ` data-loupe="motion/art/atrium/${w.id}.webp"`)}<div class="at-caption"><span>Nº ${String(i + 1).padStart(3, "0")} · ${w.room}</span><h3>${w.title}</h3><p>${w.artist}, ${w.year} · ${w.medium}</p></div></article>`).join("")}</div>
 <div class="at-loupe" aria-hidden="true"></div>
 <p class="at-hint" aria-hidden="true">Hover a painting to look through the loupe</p>
</section>
<section class="at-closer" id="closer" data-chapter="Look closer">
 <div class="at-closer-art"><div class="at-zoom" style="--ar:3/4">${img("astronomer", rest[0].alt, ' loading="lazy"')}${ATRIUM_DETAILS.map((d, i) => `<button class="at-spot" type="button" style="left:${d.x}%;top:${d.y}%" data-spot="${i}" aria-label="${d.label}">${i + 1}</button>`).join("")}</div></div>
 <div class="at-guide" aria-live="polite">
  <p class="at-kicker">Look closer · audio guide, without the audio</p>
  <h2>${rest[0].title}</h2><p class="at-by">${rest[0].artist}, ${rest[0].year}</p>
  <ol class="at-notes">${ATRIUM_DETAILS.map((d, i) => `<li><button type="button" data-spot="${i}"><b>${String(i + 1).padStart(2, "0")}</b>${d.label}</button></li>`).join("")}</ol>
  <div class="at-note"><p class="at-note-h">Choose a number on the painting.</p><p class="at-note-t">Each one takes you right up to the canvas.</p></div>
  <button class="at-back" type="button" hidden>Back to the whole painting</button>
 </div>
</section>
<section class="at-visit" id="contact" data-chapter="Visit">
 <div class="at-visit-head"><p class="at-kicker">Plan a visit</p><h2>Open every day. <em>Late on Thursdays.</em></h2></div>
 <div class="at-visit-grid">
  <dl class="at-hours"><div><dt>Tuesday – Sunday</dt><dd>10:00 – 18:00</dd></div><div><dt>Thursday</dt><dd>10:00 – 22:00</dd></div><div><dt>Monday</dt><dd>Closed, except holidays</dd></div></dl>
  <div class="at-tickets" role="group" aria-label="Tickets">
   ${[["adult", "Adult", 16], ["student", "Student", 8], ["child", "Under 18", 0]].map(([id, name, price]) => `<div class="at-ticket" data-ticket="${id}" data-price="${price}"><span>${name}<small>${price ? `€${price}` : "Free"}</small></span><div class="at-step"><button type="button" aria-label="One fewer ${name} ticket">−</button><output>${id === "adult" ? 2 : 0}</output><button type="button" aria-label="One more ${name} ticket">+</button></div></div>`).join("")}
   <div class="at-total"><span>Total</span><b>€32</b></div>
   <a class="at-book" href="${mail(c.email)}">Reserve these tickets <span aria-hidden="true">↗</span></a>
  </div>
 </div>
</section>
<footer class="mt-footer at-footer"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>An imagined museum. Every painting here was made new for this template; the artists are fictional.</span><a href="#top">Back to the first room ↑</a></footer>`;
}
