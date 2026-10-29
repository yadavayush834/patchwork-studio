import type { MotionConfig, MotionId } from "./catalog";
const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const mail = (s: string) =>
  esc("mailto:" + s.split("@").map(encodeURIComponent).join("@"));
const repeat = (n: number, fn: (i: number) => string) =>
  Array.from({ length: n }, (_, i) => fn(i)).join("");
const words = (s: string) =>
  `<span class="sr-only">${esc(s)}</span><span aria-hidden="true">${s
    .split(/\s+/)
    .map((word) => `<span class="im-word">${esc(word)}</span>`)
    .join(" ")}</span>`;
const art = (name: string, alt: string, extra = "") =>
  `<img src="motion/art/${name}.webp" alt="${esc(alt)}" width="1672" height="941" decoding="async" ${extra}>`;
const label = (s: string) => `<span class="im-label">${s}</span>`;
const header = (c: MotionConfig, link: string) =>
  `<a class="mt-skip" href="#story">Skip to the story</a><header class="mt-nav im-nav"><a class="mt-brand" href="#top">${esc(c.brand)}<sup>®</sup></a><nav aria-label="Template navigation"><a href="#story">The journal</a><a href="#chapters">${link}</a><a href="#contact">Say hello ↗</a></nav></header><div class="mt-progress" aria-hidden="true"><i></i></div>`;
const footer = (c: MotionConfig) =>
  `<footer class="mt-footer im-footer"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>IMAGINED PLACES / INDEPENDENT JOURNAL</span><a href="#top">Back to the beginning ↑</a></footer>`;
const compass = `<svg viewBox="0 0 120 120" fill="none" aria-hidden="true"><circle cx="60" cy="60" r="57" stroke="currentColor" opacity=".3"/><circle cx="60" cy="60" r="45" stroke="currentColor" opacity=".3"/><path d="m60 7 9 44 44 9-44 9-9 44-9-44L7 60l44-9Z" fill="currentColor"/><circle cx="60" cy="60" r="4" fill="#f2e8d6"/></svg>`;
const bottom = (left: string, right: string) =>
  `<div class="im-bottom"><span>${left}</span><span>${right}</span></div>`;
const roomData = [
  {
    name: "The threshold",
    tag: "ROOM 01 / DESERT",
    title: "An invitation<br>without an address.",
    copy: "Some places begin with a question.<br>What happens if you step a little closer?",
    image: "reverie-desert",
    alt: "A monumental travertine arch standing alone on apricot dunes at sunset",
  },
  {
    name: "The sunken garden",
    tag: "ROOM 02 / STILL WATER",
    title: "A little less hurry.<br>A little more wonder.",
    copy: "Light finds its way through the leaves.<br>The water keeps a different kind of time.",
    image: "reverie-garden",
    alt: "A jade-water garden enclosed by pale stone arcades and lush climbing plants",
  },
  {
    name: "The other side",
    tag: "ROOM 03 / OPEN SKY",
    title: "Who said the sky<br>was the limit?",
    copy: "A stairway with nowhere ordinary to go.<br>Leave a little room for the impossible.",
    image: "reverie-sky",
    alt: "A stone stairway and cobalt door on a floating island above peach clouds",
  },
];
function reverie(c: MotionConfig) {
  return `${header(c, "The rooms")}
<section class="rv-hero im-stage" id="top" data-chapter="The threshold" style="--title-scale:${Math.min(1, Math.sqrt(32 / c.headline.length))}">
 <div class="rv-world" data-scene="reverie" role="group" aria-label="A desert threshold opening into an imagined garden">
  <div class="rv-desert im-fill">${art("reverie-desert", roomData[0].alt, 'data-critical fetchpriority="high"')}</div>
  <div class="rv-portal-window im-fill">${art("reverie-garden", roomData[1].alt, "data-critical")}</div>
 </div><div class="rv-hero-shade im-fill"></div>
 <div class="rv-hero-top">${label("A JOURNAL OF IMAGINED PLACES")}<span>EST. IN YOUR IMAGINATION<br>VOL. 01 / ELSEWHERE</span></div>
 <div class="rv-hero-copy"><h1>${words(c.headline)}</h1><p>A collection of places that don’t exist.<br>And the feelings that do.</p></div>
 <div class="rv-portal-copy">${label("01 / THE OTHER SIDE OF ORDINARY")}<h2>There is<br><em>another way<br>to see.</em></h2><p>Keep going.<br>You’re allowed to get a little lost.</p></div>
 <div class="rv-seal" aria-hidden="true">${compass}<span>A LITTLE FURTHER FROM EVERYDAY.</span></div>
 ${bottom("OPEN YOUR MIND. THEN THE DOOR.", "SCROLL TO STEP THROUGH ↓")}
</section>
<section class="rv-prologue im-editorial" id="story" data-chapter="A different way of seeing">
 ${label("NOT A DESTINATION. A DIFFERENT STATE OF MIND.")}<div class="rv-prologue-heading"><h2>Somewhere<br>between <em>here</em><br>and <em>what if.</em></h2><span class="rv-asterisk" aria-hidden="true">✳</span></div>
 <div class="rv-prologue-bottom"><span>ART / PLACE / POSSIBILITY</span><p>We follow a feeling, not a map. Through quiet thresholds, sunken gardens, and skies that keep their doors open. A journal for the part of you that still wonders.</p></div>
 <div class="rv-word-ribbon" aria-hidden="true"><span>THINK LESS STRAIGHT. FEEL MORE DEEPLY. THINK LESS STRAIGHT.</span></div>
</section>
<section class="rv-rooms" id="chapters" data-chapter="Rooms without rules"><div class="rv-rooms-pin im-stage">
 <div class="rv-rooms-header">${label("02 / ROOMS WITHOUT RULES")}<span>ONE PLACE. THREE WAYS OF GETTING LOST.</span></div>
 <div class="rv-gallery">${roomData.map((r, i) => `<article class="rv-room rv-room-${i}"><div class="rv-room-photo">${art(r.image, r.alt)}</div><div class="rv-room-scrim im-fill"></div><div class="rv-room-copy">${label(r.tag)}<h3>${r.title}</h3><p>${r.copy}</p></div><div class="rv-room-edge" aria-hidden="true">${String(i + 1).padStart(2, "0")}</div></article>`).join("")}</div>
 <div class="rv-room-rail" aria-hidden="true">${roomData.map((r, i) => `<div><span>0${i + 1}</span><b>${r.name}</b><i></i></div>`).join("")}</div>
 ${bottom("THE GALLERY / TURN A LITTLE POSSIBILITY", "SCROLL TO TURN THE ROOM →")}
</div></section>
<section class="rv-keepsake" data-chapter="A place to keep"><div class="rv-keepsake-pin im-stage">
 <div class="rv-keepsake-heading">${label("03 / A PLACE TO KEEP")}<h2>You don’t have<br>to go far<br><em>to go elsewhere.</em></h2><p>Gather the fragments.<br>Keep the feeling.</p></div>
 <div class="rv-postcard" role="img" aria-label="Nine fragments of the floating stairway photograph assembling into one postcard">${repeat(9, (i) => `<div class="rv-fragment" style="--x:${i % 3};--y:${Math.floor(i / 3)};--n:${i}"><div>${art("reverie-sky", "")}</div></div>`)}</div>
 <div class="rv-postcard-border" aria-hidden="true"><span>TO / YOUR NEXT DAYDREAM</span><span>FROM / SOMEWHERE ELSE</span></div>
 <div class="rv-keepsake-note">No fixed address.<br><em>No ordinary ending.</em></div>
 ${bottom("POSTCARD 001 / THE OTHER SIDE", "KEEP A LITTLE POSSIBILITY WITH YOU.")}
</div></section>
<section class="rv-contact im-contact" id="contact" data-chapter="A place to keep"><div class="rv-contact-circle" aria-hidden="true"></div>${label("WHAT HAVE YOU BEEN DREAMING ABOUT?")}<h2>A good place<br><em>to begin.</em></h2><a href="${mail(c.email)}">Start a conversation <span>↗</span></a><p>For art, stories, and beautifully improbable ideas.</p><div class="rv-contact-mark" aria-hidden="true">rêver<br><small>verb. / to dream</small></div></section>${footer(c)}`;
}
const routeSVG = `<svg class="tv-route-map" viewBox="0 0 1000 680" fill="none" aria-hidden="true"><defs><pattern id="tv-grid" width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" stroke="currentColor" stroke-width=".7" opacity=".2"/></pattern></defs><rect width="1000" height="680" fill="url(#tv-grid)"/><g class="tv-contour-lines" stroke="currentColor" opacity=".35">${repeat(
  24,
  (i) => {
    const d = i * 14;
    return `<path pathLength="1" d="M${170 - d * 0.3} ${490 + d * 0.4}C${230 - d} ${130 - d * 0.2} ${350 + d * 0.7} ${320 - d * 0.7} ${550 + d * 0.3} ${210 - d * 0.4}S${930 + d * 0.2} ${360 + d * 0.4} ${700 + d * 0.3} ${530 + d * 0.3}S${390 - d * 0.5} ${630 + d * 0.1} ${170 - d * 0.3} ${490 + d * 0.4}Z"/>`;
  },
)}</g><path class="tv-route-line" pathLength="1" d="M140 540C270 550 220 380 370 390S460 200 580 240 700 380 820 120" stroke="var(--accent)" stroke-width="3"/><g class="tv-route-markers" fill="var(--accent)"><circle cx="140" cy="540" r="7"/><circle cx="370" cy="390" r="7"/><circle cx="580" cy="240" r="7"/><circle cx="820" cy="120" r="7"/></g><g fill="currentColor" font-size="12" font-family="monospace"><text x="95" y="577">BASE / 1 200</text><text x="310" y="430">THE RIDGE</text><text x="590" y="218">BLUE CROSSING</text><text x="830" y="100">FIRST LIGHT</text></g><g class="tv-route-traveller"><circle r="16" fill="var(--accent)" opacity=".18"/><circle r="5" fill="var(--accent)"/></g></svg>`;
function traverse(c: MotionConfig) {
  return `${header(c, "The route")}
<section class="tv-hero im-stage" id="top" data-chapter="Beyond the familiar" style="--title-scale:${Math.min(1, Math.sqrt(23 / c.headline.length))}">
 <div class="tv-panorama" data-scene="traverse" role="img" aria-label="A sunrise mountain panorama separating into five planes as you ascend">${repeat(5, (i) => `<div class="tv-ridge-plane" style="--n:${i}"><div>${art("traverse-ridge", "", i === 0 ? 'data-critical fetchpriority="high"' : "")}</div></div>`)}</div>
 <div class="tv-hero-shade im-fill"></div><div class="tv-grid im-fill" aria-hidden="true"></div>
 <div class="tv-hero-caption">${label("AN INDEPENDENT FIELD JOURNAL")}<span>OUTSIDE THE FAMILIAR.<br>INSIDE THE MOMENT.</span></div>
 <div class="tv-hero-copy"><h1>${words(c.headline)}</h1><p>Some things only make sense<br>when you take the long way.</p></div>
 <div class="tv-altitude" aria-hidden="true"><span>ELEVATION / M</span><strong>1,200</strong><small>THE ASCENT / 001</small></div>
 <div class="tv-ascent-copy">${label("01 / ABOVE THE EVERYDAY")}<h2>Distance changes<br><em>your perspective.</em></h2><p>One ridge becomes a horizon.<br>One step becomes a different way of seeing.</p></div>
 <div class="tv-vertical-rule" aria-hidden="true">${repeat(25, (i) => `<i><span>${String(i * 200).padStart(4, "0")}</span></i>`)}</div>
 ${bottom("TRAVERSE / IMAGINED EXPEDITION 001", "SCROLL TO LEAVE THE FAMILIAR ↓")}
</section>
<section class="tv-belief im-editorial" id="story" data-chapter="Find your own line">${label("NO SHORTCUT TO A DIFFERENT POINT OF VIEW.")}<h2>The route is<br>never a<br><em>straight line.</em></h2><div class="tv-belief-bottom"><div class="tv-belief-compass" aria-hidden="true">${compass}</div><p>A fictional field journal for people who follow their curiosity. We collect the moments between departure and arrival. The detours. The changes in weather. The view you didn’t know you needed.</p></div><span class="tv-belief-coordinate">N 00° / E 00°<br>BEYOND THE EVERYDAY</span></section>
<section class="tv-route" id="chapters" data-chapter="Find your own line"><div class="tv-route-pin im-stage">
 <div class="tv-route-heading">${label("02 / FIND YOUR OWN LINE")}<h2>A map is <br>only the<br><em>beginning.</em></h2></div>
 <div class="tv-map-scene"><div class="tv-fold-map">${repeat(6, (i) => `<div class="tv-map-fold" style="--n:${i}"><div class="tv-map-fold-photo">${art("traverse-ridge", "")}</div><div class="tv-map-fold-light"></div></div>`)}<div class="tv-map-drawing">${routeSVG}</div></div></div>
 <div class="tv-route-notes"><article><span>01 / FIND YOUR BEARING</span><h3>Begin with a question.</h3><p>Not all routes are marked.<br>Not all good things are planned.</p></article><article><span>02 / FOLLOW THE RIDGE</span><h3>Hold your own line.</h3><p>The map unfolds.<br>The distance becomes a story.</p></article><article><span>03 / GO BEYOND</span><h3>Leave room for the unknown.</h3><p>A destination is one possibility.<br>The journey is everything around it.</p></article></div>
 <div class="tv-route-progress"><span>DEPARTURE</span><div><i></i></div><span>FIRST LIGHT</span></div>
 ${bottom("ROUTE STUDY / AN IMAGINED LANDSCAPE", "THE MAP DOESN’T KNOW THE WHOLE STORY.")}
</div></section>
<section class="tv-crossing" data-chapter="Through the blue"><div class="tv-crossing-pin im-stage">
 <div class="tv-summit-photo im-fill">${art("traverse-summit", "A narrow snowy summit ridge pointing into an ocean of clouds at sunrise")}</div>
 <div class="tv-ice-planes im-fill">${repeat(7, (i) => `<div class="tv-ice-plane" style="--n:${i}"><div>${art("traverse-glacier", "", i === 3 ? "data-critical" : "")}</div></div>`)}</div>
 <div class="tv-crossing-shade im-fill"></div><div class="tv-crossing-heading">${label("03 / THROUGH THE BLUE")}<h2>The way through<br><em>is a way forward.</em></h2></div>
 <div class="tv-crossing-details"><span>FOLLOW THE LIGHT.</span><span>A PASSAGE, NOT A PAUSE.</span></div>
 <div class="tv-summit-copy">${label("04 / FIRST LIGHT")}<h2>You came<br><em>all this way.</em></h2><p>Take a moment.<br>Some views ask for nothing else.</p></div>
 <div class="tv-summit-stamp" aria-hidden="true">${compass}<span>THE LONG WAY UP.<br>THE GOOD WAY HOME.</span></div>
 <div class="tv-crossing-aperture" aria-hidden="true"><i></i><i></i></div>
 ${bottom("GLACIER → RIDGELINE → FIRST LIGHT", "KEEP GOING. THE VIEW CHANGES.")}
</div></section>
<section class="tv-contact im-contact" id="contact" data-chapter="The long way up">${label("THERE IS ALWAYS A LITTLE FURTHER.")}<h2>Where<br><em>to next?</em></h2><a href="${mail(c.email)}">Tell us your story <span>↗</span></a><p>A journal for journeys, creative expeditions,<br>and the things you find along the way.</p><div class="tv-end-altitude" aria-hidden="true"><span>END OF THE PAGE.</span><b>NOT THE JOURNEY.</b><i>↗</i></div></section>${footer(c)}`;
}
export function renderImageMotion(id: MotionId, c: MotionConfig) {
  return id === "reverie" ? reverie(c) : traverse(c);
}
