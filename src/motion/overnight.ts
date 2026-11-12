import type { MotionConfig } from "./catalog";

/**
 * Overnight: one night on a sleeper train, told in four generated pixel paintings that the
 * Diorama engine renders in depth. Scroll is the journey: a ticket is punched at each stop
 * and its clock runs from 22:40 to 08:10.
 */
const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (s: string) => esc("mailto:" + s.split("@").map(encodeURIComponent).join("@"));
const words = (s: string) =>
  `<span class="sr-only">${esc(s)}</span><span aria-hidden="true">${s.split(/\s+/).map((w) => `<span class="on-w"><span>${esc(w)}</span></span>`).join(" ")}</span>`;

export const OVERNIGHT_STOPS = [
  { id: "platform", time: "22:40", place: "Central, platform 9", alt: "A grand iron-and-glass station at night, a sleeper train with lit windows waiting at the platform" },
  { id: "forest", time: "01:15", place: "The lake", alt: "A moonlit forest lake at night, the sleeper train crossing a low bridge, its windows reflected in the water" },
  { id: "viaduct", time: "05:52", place: "The high viaduct", alt: "The sleeper train crossing a tall stone viaduct over a misty gorge with waterfalls at sunrise" },
  { id: "coast", time: "08:10", place: "Saltmarsh", alt: "A pastel seaside terminus in the morning, palm trees, the sea and a lighthouse beyond the train" },
] as const;

export function overnightAssets(): readonly string[] {
  return OVERNIGHT_STOPS.flatMap((s) => [`motion/art/overnight/${s.id}/painting.webp`, `motion/art/overnight/${s.id}/depth.webp`]);
}

const stage = (i: number, extra = "") =>
  `<div class="on-stage"><canvas class="on-art" data-stop="${OVERNIGHT_STOPS[i].id}" role="img" aria-label="${esc(OVERNIGHT_STOPS[i].alt)}"></canvas>${extra}</div>`;

const BERTHS = [
  { id: "seat", name: "Reclining seat", price: 39, note: "A blanket, a pillow, a window." },
  { id: "couchette", name: "Couchette", price: 89, note: "Four bunks, fresh linen, a curtain each." },
  { id: "cabin", name: "Private cabin", price: 189, note: "A real bed, a basin and breakfast in bed." },
];

export function renderOvernight(c: MotionConfig) {
  const [p, f, v, k] = OVERNIGHT_STOPS;
  const ticket = `<aside class="on-ticket" aria-label="Your ticket">
 <div class="on-ticket-head"><span>${esc(c.brand).toUpperCase()}</span><span>No. 0419</span></div>
 <div class="on-ticket-route"><b>CENTRAL</b><i aria-hidden="true"></i><b>SALTMARSH</b></div>
 <ol class="on-stops">${OVERNIGHT_STOPS.map((s, i) => `<li data-stop="${i}"><span class="on-punch" aria-hidden="true"></span><time>${s.time}</time><span>${esc(s.place)}</span></li>`).join("")}</ol>
 <div class="on-ticket-foot"><span>NOW</span><time class="on-clock">22:40</time><span class="on-berth-label">COUCHETTE</span></div>
</aside>`;
  return `<a class="mt-skip" href="#story">Skip to the journey</a>
<header class="mt-nav on-nav"><a class="mt-brand" href="#top"><span class="on-logo" aria-hidden="true"></span>${esc(c.brand)}</a><nav aria-label="Template navigation"><a href="#story">The journey</a><a href="#berths">Berths</a><a href="#contact">Book ↗</a></nav></header>
<div class="mt-progress" aria-hidden="true"><i></i></div>
${ticket}
<section class="on-chapter on-platform" id="top" data-scene="overnight" data-chapter="Boarding" data-stop="0">
 ${stage(0)}
 <div class="on-shade" aria-hidden="true"></div>
 <div class="on-copy on-hero-copy">
  <p class="on-label"><span class="on-dot" aria-hidden="true"></span>${p.time} · ${p.place.toUpperCase()}</p>
  <h1 class="on-title">${words(c.headline)}</h1>
  <p class="on-lede">A sleeper train with eleven cabins, a dining car that stays open until the lake, and one long night between the city and the coast.</p>
 </div>
 <div class="on-board" aria-hidden="true"><div class="on-board-row"><span>22:40</span><span class="on-flap" data-final="SALTMARSH">SALTMARSH</span><span>9</span><span class="on-flap on-status" data-final="BOARDING">BOARDING</span></div><div class="on-board-row on-dim"><span>23:05</span><span>NORTHPORT</span><span>4</span><span>ON TIME</span></div></div>
 <p class="on-scroll" aria-hidden="true">SCROLL TO BOARD ↓</p>
</section>
<section class="on-chapter on-forest" id="story" data-chapter="The lake" data-stop="1">
 ${stage(1, `<div class="on-window" aria-hidden="true"><i class="on-curtain on-left"></i><i class="on-curtain on-right"></i><i class="on-glass"></i></div>`)}
 <div class="on-copy on-side">
  <p class="on-label"><span class="on-dot" aria-hidden="true"></span>${f.time} · ${f.place.toUpperCase()}</p>
  <h2>You won’t sleep much <em>the first time.</em></h2>
  <p>Nobody does. Turn the light off, open the blind, and watch the lake go by at the speed of a slow thought.</p>
  <ul class="on-facts"><li><b>Linen</b><span>washed in the mill at Ashby</span></li><li><b>Cocoa</b><span>at midnight, from the dining car</span></li><li><b>Blinds</b><span>that actually close</span></li></ul>
 </div>
</section>
<section class="on-chapter on-viaduct" data-chapter="The viaduct" data-stop="2">
 ${stage(2)}
 <div class="on-shade on-shade-dawn" aria-hidden="true"></div>
 <div class="on-copy on-side">
  <p class="on-label"><span class="on-dot" aria-hidden="true"></span>${v.time} · ${v.place.toUpperCase()}</p>
  <h2>The sun comes up <em>underneath you.</em></h2>
  <p>Ninety metres above the gorge the train slows to a walk, so the dining car can watch. Coffee is on us.</p>
  <p class="on-altitude" aria-hidden="true"><span>ALTITUDE</span><b class="on-metres">0</b><span>M ABOVE THE RIVER</span></p>
 </div>
</section>
<section class="on-chapter on-coast" data-chapter="Saltmarsh" data-stop="3">
 ${stage(3)}
 <div class="on-shade on-shade-day" aria-hidden="true"></div>
 <div class="on-copy on-side on-light">
  <p class="on-label"><span class="on-dot" aria-hidden="true"></span>${k.time} · ${k.place.toUpperCase()}, END OF THE LINE</p>
  <h2>Breakfast <em>by the sea.</em></h2>
  <p>Step down onto the platform, leave your bag with the stationmaster, and the beach is four minutes away.</p>
 </div>
</section>
<section class="on-berths" id="berths" data-chapter="Choose a berth">
 <p class="on-label">CHOOSE YOUR BERTH</p>
 <h2>One night. <em>Three ways to spend it.</em></h2>
 <div class="on-berth-list" role="radiogroup" aria-label="Berth">${BERTHS.map((b, i) => `<button type="button" role="radio" class="on-berth" data-berth="${b.id}" data-price="${b.price}" aria-checked="${i === 1}"><span class="on-berth-name">${b.name}</span><span class="on-berth-price">€${b.price}</span><span class="on-berth-note">${b.note}</span><span class="on-berth-pick" aria-hidden="true">${i === 1 ? "SELECTED" : "CHOOSE"}</span></button>`).join("")}</div>
</section>
<section class="on-contact" id="contact" data-chapter="Book">
 <h2>The overnight leaves <em>every evening at 22:40.</em></h2>
 <a class="on-book" href="${mail(c.email)}"><span>Request a <b class="on-book-berth">couchette</b></span><span aria-hidden="true">↗</span></a>
 <p>We reply within a day with your cabin number. Tickets are fictional; the sea is not.</p>
</section>
<footer class="mt-footer on-footer"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>A SLEEPER TRAIN, PAINTED IN PIXELS AND RENDERED IN DEPTH</span><a href="#top">Back to platform 9 ↑</a></footer>`;
}
