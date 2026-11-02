import { renderLightkeeper } from "./lightkeeper";
import { renderGlyphStudy } from "./glyph-studies";
import { renderImageMotion } from "./image-studies";
import { renderNewMotion } from "./studies";
import {
  type MotionId,
  type MotionConfig,
  normalizeMotionConfig,
} from "./catalog";
const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const mail = (email: string) =>
  "mailto:" + email.split("@").map(encodeURIComponent).join("@");
export const star = `<svg viewBox="0 0 100 100" fill="currentColor" aria-hidden="true"><path d="M46 0h8l4 33L83 9l7 7-24 25 34 5v8l-34 5 24 25-7 7-25-24-4 33h-8l-5-33-25 24-7-7 24-25L0 54v-8l33-5L9 16l7-7 25 24z"/></svg>`;
export const leaf = `<svg viewBox="0 0 160 260" fill="none" aria-hidden="true"><path d="M80 250C18 207-17 115 88 7c84 66 104 177-8 243Z" fill="currentColor"/><path d="M80 258C103 181 83 107 88 7M85 192l-45-35m51-4 40-38m-41-8-32-30" stroke="#f3eedf" stroke-width="1.2" opacity=".5"/></svg>`;
export const butterfly = `<svg viewBox="0 0 120 100" aria-hidden="true"><path d="M58 53C6-26-21 35 41 62 0 72 31 118 59 62c29 57 61 9 19 0 63-29 33-88-17-9Z" fill="currentColor"/><path d="m58 76 3-40m-2 8-8-19m11 18 10-16" fill="none" stroke="#302b25" stroke-width="2"/></svg>`;
const split = (text: string) =>
  `<span class="sr-only">${escape(text)}</span><span aria-hidden="true" class="split-line">${text
    .split(/\s+/)
    .map(
      (word) =>
        `<span class="word">${Array.from(word)
          .map((c) => `<span class="char">${escape(c)}</span>`)
          .join("")}</span>`,
    )
    .join(" ")}</span>`;
const nav = (c: MotionConfig, id: MotionId) =>
  `<a class="mt-skip" href="#story">Skip to the story</a><header class="mt-nav"><a class="mt-brand" href="#top">${escape(c.brand)}<span>®</span></a><nav aria-label="Template navigation"><a href="#story">${id === "offscript" ? "Work" : id === "floraison" ? "Field notes" : id === "monolith" ? "The practice" : "The story"}</a><a href="#contact">${id === "offscript" ? "Get in touch" : id === "floraison" ? "Stay curious" : id === "monolith" ? "Let’s talk" : "Get closer"} <span>↗</span></a></nav></header><div class="mt-progress" aria-hidden="true"><i></i></div>`;
const footer = (c: MotionConfig, id: MotionId) =>
  `<footer class="mt-footer"><span>${escape(c.brand)} © ${new Date().getFullYear()}</span><span>AN INDEPENDENT ${id === "offscript" ? "CREATIVE" : id === "floraison" ? "BOTANICAL" : id === "monolith" ? "ARCHITECTURAL" : "PRODUCT"} CONCEPT</span><a href="#top">Back to the beginning ↑</a></footer>`;
function aether(c: MotionConfig) {
  return `${nav(c, "aether")}
<section class="ae-hero mt-hero" id="top" data-chapter="First contact">
  <div class="ae-grain"></div><div class="ae-orbit ae-orbit-one"></div><div class="ae-orbit ae-orbit-two"></div>
  <div class="mt-scene" data-scene="aether" role="img" aria-label="Interactive sculptural chrome over-ear headphones"></div>
  <div class="ae-hero-copy"><span class="mt-eyebrow">FORM 001 / A NEW FREQUENCY</span><h1>${split(c.headline)}</h1><p>Leave the noise.<br>Take the feeling.</p></div>
  <span class="ae-side-label">DESIGNED TO DISAPPEAR. BUILT TO FEEL.</span>
  <div class="ae-annotation ae-ann-one"><i></i><span>Precision in every curve.<small>SCULPTED ALUMINUM</small></span></div>
  <div class="ae-annotation ae-ann-two"><span>A world of your own.<small>ACOUSTIC CORE</small></span><i></i></div>
  <div class="ae-explode-copy"><span class="mt-eyebrow">01 / BENEATH THE SURFACE</span><h2>Beautiful.<br>Inside out.</h2><p>Every layer has a purpose.<br>Nothing here by accident.</p></div>
  <div class="ae-scroll"><span>SCROLL TO EXPLORE</span><i>↓</i></div><span class="ae-model-tag">Æ / OBJECT STUDY 001</span>
</section>
<section class="ae-manifesto mt-section" id="story" data-chapter="Inside the object"><div class="mt-section-index">01 — THE PHILOSOPHY</div><h2 class="ae-reveal">Less between<br>you and<br><em>the moment.</em></h2><div class="ae-manifesto-bottom"><p>Some things don’t need more.<br>They need more thought.<br>A considered object for an<br>uninterrupted state of mind.</p><div class="ae-disc"><span>MADE FOR THE IN-BETWEEN</span><i>${star}</i></div></div><div class="ae-ribbon"><span>FEEL EVERYTHING. CARRY NOTHING. FEEL EVERYTHING. CARRY NOTHING.</span></div></section>
<section class="ae-frequency" data-chapter="A different frequency"><div class="ae-freq-inner"><span class="mt-eyebrow">02 / A DIFFERENT FREQUENCY</span><h2>Not louder.<br><em>Closer.</em></h2><div class="ae-wave" aria-hidden="true">${Array.from({ length: 33 }, (_, i) => `<i style="--bar:${i};--height:${15 + Math.sin(i * 0.43) ** 2 * 75}%"></i>`).join("")}</div><div class="ae-freq-notes"><article><span>01</span><h3>Room to breathe.</h3><p>A spacious composition.<br>A little distance from the everyday.</p></article><article><span>02</span><h3>All the small things.</h3><p>Soft edges. Quiet details.<br>Designed around how you feel.</p></article><article><span>03</span><h3>Always in balance.</h3><p>The right weight.<br>Nothing more than you need.</p></article></div><div class="ae-frequency-orb"><span>FEEL</span></div></div></section>
<section class="ae-finishes mt-section"><div class="mt-section-index">03 — THREE STATES OF MIND</div><h2 class="mt-reveal">Find your<br><em>frequency.</em></h2><div class="ae-finishes-grid">${[
    ["01", "Lunar silver", "silver"],
    ["02", "Warm earth", "earth"],
    ["03", "After dark", "dark"],
  ]
    .map(
      ([n, name, cl]) =>
        `<article class="ae-finish-card ${cl}"><span>${n} / OBJECT STUDY</span><div class="ae-mini-headphone"><i></i><b></b><b></b></div><h3>${name}</h3><p>A different shade. The same considered form.</p></article>`,
    )
    .join("")}</div></section>
<section class="ae-contact mt-contact" id="contact" data-chapter="Find your space"><div class="ae-contact-orbit"></div><span class="mt-eyebrow">YOUR WORLD. AT YOUR FREQUENCY.</span><h2>${split("Get a little closer.")}</h2><a class="mt-round-link" href="${escape(mail(c.email))}">Start a conversation <span>↗</span></a><p>Concept study / Personalize this space for your launch.</p></section>${footer(c, "aether")}`;
}
function offscript(c: MotionConfig) {
  return `${nav(c, "offscript")}
<section class="of-hero mt-hero" id="top" data-chapter="Make some noise"><div class="of-hero-top"><span>INDEPENDENT MINDS.<br>UNREASONABLE IDEAS.</span><span>AVAILABLE FOR<br>THE UNEXPECTED ↙</span></div><div class="of-heading"><h1>${split(c.headline)}</h1><span class="of-hero-sub">STRATEGY × DESIGN × DIGITAL</span></div><div class="mt-scene" data-scene="offscript" role="img" aria-label="Sculptural cobalt torus knot and floating geometric forms"></div><div class="of-sticker">BORING<br>ISN’T<br>IN THE BRIEF.</div><div class="of-hero-bottom"><span>SCROLL TO MAKE A LITTLE TROUBLE</span><span>↓</span><span>© CREATIVE CONCEPT / 001</span></div><div class="of-cross">${star}</div></section>
<section class="of-statement" id="story" data-chapter="Selected experiments"><div class="of-statement-stage"><span class="mt-eyebrow">01 / WHAT WE BELIEVE</span><div class="of-type-row"><span>IDEAS</span><i>${star}</i></div><div class="of-type-row of-type-middle"><em>WITH</em><span class="of-type-outline">WITH</span></div><div class="of-type-row of-type-last"><span>TEETH.</span><small>We build identities that<br>refuse to sit quietly.</small></div><div class="of-statement-tag">A USEFUL KIND OF DIFFERENT.</div></div></section>
<section class="of-work" data-chapter="Selected experiments"><div class="of-work-pin"><div class="of-work-track">
<article class="of-work-panel of-work-intro"><span class="mt-eyebrow">02 / SELECTED EXPERIMENTS</span><h2>Same planet.<br><em>Different<br>perspective.</em></h2><p>A few imaginary worlds.<br>A very real point of view.</p><span class="of-work-arrow">→</span></article>
<article class="of-work-panel of-work-one"><div class="of-project-meta"><span>01 / IDENTITY EXPERIMENT</span><span>ROOM 404 ↗</span></div><div class="of-work-art of-poster-stack"><div><span>ROOM</span><strong>404</strong><small>NOT FOUND. NEVER BORING.</small></div><div><span>ROOM</span><strong>404</strong></div><div><span>ROOM</span><strong>404</strong></div></div><h3>A little lost.<br>A lot more interesting.</h3></article>
<article class="of-work-panel of-work-two"><div class="of-project-meta"><span>02 / DIGITAL EXPERIMENT</span><span>GOOD COMPANY ↗</span></div><div class="of-work-art of-type-sphere"><span>good<br><em>company.</em></span><i></i><i></i><i></i></div><h3>People first.<br>Everything follows.</h3></article>
<article class="of-work-panel of-work-three"><div class="of-project-meta"><span>03 / CAMPAIGN EXPERIMENT</span><span>OFF HOURS ↗</span></div><div class="of-work-art of-cube-space"><div class="of-css-cube">${["OFF", "HRS", "OFF", "HRS", "✳", "✳"].map((t, i) => `<span class="cube-face face-${i}">${t}</span>`).join("")}</div></div><h3>Clock out.<br>Turn up.</h3></article>
</div><div class="of-work-counter"><span>SCROLL SIDEWAYS IN SPIRIT</span><i></i><span>KEEP GOING →</span></div></div></section>
<section class="of-services" data-chapter="A useful kind of chaos"><div class="of-services-pin"><div><span class="mt-eyebrow">03 / CONNECT THE DOTS</span><h2>A useful<br>kind of<br><em>chaos.</em></h2><p>One good conversation.<br>A hundred possible directions.</p></div><div class="of-deck">${[
    ["01", "THINK", "Find the interesting question.", "#eeeeE4"],
    ["02", "MAKE", "Give the idea a point of view.", "#c9ff53"],
    ["03", "MOVE", "Build it to live in the world.", "#6b59ec"],
  ]
    .map(
      ([n, title, txt, color]) =>
        `<article class="of-service-card" style="--card:${color}"><span>${n} / THE PROCESS</span><h3>${title}</h3><div>${star}</div><p>${txt}</p></article>`,
    )
    .join("")}</div></div></section>
<section class="of-contact mt-contact" id="contact" data-chapter="Start something"><span class="mt-eyebrow">GOT A BEAUTIFULLY UNREASONABLE IDEA?</span><h2>${split("Let’s make some noise.")}</h2><a href="${escape(mail(c.email))}" class="of-contact-link">${escape(c.email)} <span>↗</span></a><div class="of-footer-stamp">NO<br>SMALL<br>IDEAS.</div></section>${footer(c, "offscript")}`;
}
function floraison(c: MotionConfig) {
  return `${nav(c, "floraison")}
<section class="fl-hero mt-hero" id="top" data-chapter="A small beginning"><div class="fl-frame"><span>THE ART OF PAYING ATTENTION</span><span>VOL. 01 / A BOTANICAL JOURNAL</span></div><div class="mt-scene" data-scene="floraison" role="img" aria-label="Sculpted terracotta flower unfolding its petals in three dimensions"></div><div class="fl-hero-copy"><span class="mt-eyebrow">A SMALL BEGINNING</span><h1>${split(c.headline)}</h1><p>Notes on nature, quiet rituals,<br>and the extraordinary in the everyday.</p></div><span class="fl-specimen-label">SPECIMEN 001<br><em>Papaver / a study in becoming</em></span><div class="fl-butterfly">${butterfly}</div><div class="fl-floating-leaf">${leaf}</div><div class="fl-scroll">TAKE YOUR TIME <span>↓</span></div><div class="fl-bloom-copy"><span class="mt-eyebrow">01 / A LITTLE CLOSER</span><h2>A world<br>within<br><em>a flower.</em></h2><p>Follow the fold of a petal.<br>Notice where the light lands.<br>There is always more to see.</p></div></section>
<section class="fl-intro mt-section" id="story" data-chapter="Anatomy of a bloom"><div class="mt-section-index">FIELD NOTE / 001</div><h2 class="fl-line-reveal">The world is full of<br>quiet things.<br><em>Let’s notice them.</em></h2><div class="fl-intro-bottom"><span class="fl-handwriting">a practice, not a destination</span><p>A journal for the curious. We collect shapes,<br>follow the seasons, and make a little room<br>for things that grow at their own pace.</p></div><div class="fl-vine">${leaf}${leaf}${leaf}</div></section>
<section class="fl-herbarium" data-chapter="Collected in the field"><div class="fl-herb-pin"><div class="fl-herb-heading"><span class="mt-eyebrow">02 / COLLECTED IN THE FIELD</span><h2>An imperfect<br><em>collection.</em></h2><p>Not everything needs to be<br>useful to be worth keeping.</p></div><div class="fl-specimens">${[
    ["01", "A study in light", "FOLIUM / THE LEAF", "leaf"],
    ["02", "A moment of color", "PAPILIO / THE WING", "wing"],
    ["03", "Something becoming", "SEMEN / THE SEED", "seed"],
  ]
    .map(
      ([n, title, latin, kind]) =>
        `<article class="fl-specimen fl-${kind}"><div class="fl-specimen-top"><span>PLATE ${n}</span><span>↗</span></div><div class="fl-specimen-art">${kind === "leaf" ? leaf : kind === "wing" ? butterfly : `<svg viewBox="0 0 180 240" aria-hidden="true"><path d="M90 211Q25 170 90 84q65 86 0 127" fill="#8a623b"/><path d="M90 84V8m0 45Q30 15 28 62q20 27 62-9m0-4q57-40 65 9-26 31-65-9" fill="#597050" stroke="#4d6545" stroke-width="3"/></svg>`}</div><span class="fl-latin">${latin}</span><h3>${title}</h3><p>Gathered slowly. Kept with care.</p></article>`,
    )
    .join("")}</div></div></section>
<section class="fl-seasons mt-section"><div class="mt-section-index">03 — NOTHING STAYS THE SAME</div><h2 class="mt-reveal">A time<br>for <em>everything.</em></h2><div class="fl-season-grid">${[
    ["I", "Begin", "A small thing. A new possibility.", "spring"],
    ["II", "Become", "Find the light. Take up space.", "summer"],
    ["III", "Release", "Let go of what has had its season.", "autumn"],
    ["IV", "Rest", "There is growth in the stillness, too.", "winter"],
  ]
    .map(
      ([n, title, p, cl]) =>
        `<article class="fl-season ${cl}"><span>${n}</span><div class="fl-season-icon">${leaf}</div><h3>${title}</h3><p>${p}</p></article>`,
    )
    .join("")}</div></section>
<section class="fl-contact mt-contact" id="contact" data-chapter="Let things grow"><div class="fl-contact-sprig">${leaf}${leaf}</div><span class="mt-eyebrow">THE NEXT PAGE IS STILL UNWRITTEN.</span><h2>${split("Leave a little room for wonder.")}</h2><a class="fl-contact-link" href="${escape(mail(c.email))}">Send a field note <span>↗</span></a><span class="fl-handwriting">until next season.</span></section>${footer(c, "floraison")}`;
}
// Original architectural plates: the same vector drawings ship in preview and export.
const plan = `<svg class="mn-plan" viewBox="0 0 600 600" fill="none" aria-hidden="true"><g class="mn-plan-grid" stroke="currentColor" opacity=".18"><path d="M0 100H600M0 200H600M0 300H600M0 400H600M0 500H600M100 0V600M200 0V600M300 0V600M400 0V600M500 0V600"/></g><g class="mn-draw" stroke="currentColor" stroke-width="2"><path pathLength="1" d="M100 100H500V500H100Z"/><path pathLength="1" d="M115 115H485V485H115ZM270 115V230H370V115M115 270H230V370H115M270 485V370H370V485M485 270H370V230"/><path pathLength="1" d="M230 230H370V370H230Z"/><path pathLength="1" d="M390 290H470M390 302H470M390 314H470M390 326H470M390 338H470M390 350H470"/><path pathLength="1" d="M60 100V500M50 100H70M50 500H70M100 540H500M100 530V550M500 530V550"/></g><circle class="mn-plan-sun" cx="300" cy="300" r="48" fill="currentColor" opacity=".18"/><g fill="currentColor" font-family="monospace" font-size="10"><text x="278" y="305">COURT</text><text x="265" y="563">18 000</text><text x="116" y="93">A</text><text x="480" y="93">A′</text></g></svg>`;
const building = (kind: number) =>
  `<div class="mn-building mn-building-${kind}" aria-hidden="true">${Array.from({ length: kind === 2 ? 9 : 6 }, (_, i) => `<i style="--level:${i}"><b></b><b></b><b></b></i>`).join("")}</div>`;
function monolith(c: MotionConfig) {
  return `${nav(c, "monolith")}
<section class="mn-hero mt-hero" id="top" data-chapter="A sense of place"><div class="mn-coordinate">CONCEPT ARCHITECTURE<br>FORM / LIGHT / HUMAN EXPERIENCE</div><div class="mn-hero-copy"><span class="mt-eyebrow">A PRACTICE IN POSSIBILITY</span><h1>${split(c.headline)}</h1></div><div class="mn-sun" aria-hidden="true"></div><div class="mn-axis" aria-hidden="true"><i></i><i></i></div><div class="mt-scene" data-scene="monolith" role="img" aria-label="Concrete pavilion with copper courtyard and seven sculpted floors separating into an architectural model"></div><div class="mn-model-caption"><span>FIG. 001 — THE OPEN HOUSE</span><span>AXONOMETRIC STUDY / NOT TO SCALE</span></div><div class="mn-section-copy"><span class="mt-eyebrow">SOLID → SPACE</span><h2>Less mass.<br>More <em>possibility.</em></h2><p>A floor becomes a horizon.<br>A void becomes a place to belong.</p></div><div class="mn-floor-notes"><span>07 / SKY TERRACE</span><span>04 / OPEN COURT</span><span>01 / COMMON GROUND</span></div><div class="mn-hero-bottom"><span>SCROLL TO TAKE IT APART ↓</span><span>AN INDEPENDENT SPATIAL PRACTICE</span></div></section>
<section class="mn-belief" id="story" data-chapter="Drawn from the inside"><div class="mn-section-label">01 / THE SPACE BETWEEN</div><h2><span>We shape the walls.</span><span>The light does</span><em>the rest.</em></h2><div class="mn-belief-bottom"><div class="mn-window" aria-hidden="true"><i></i><i></i><i></i></div><p>Architecture starts with a question:<br>how do we want to feel here?<br><br>These imagined spaces explore what happens when we leave room for light, for pause, and for each other.</p><span class="mn-small-mark">M /<br>STUDIES IN<br>INHABITING</span></div></section>
<section class="mn-drawing" data-chapter="Drawn from the inside"><div class="mn-drawing-pin"><div class="mn-drawing-heading"><span class="mt-eyebrow">02 / FROM LINE TO LIFE</span><h2>Drawn from<br>the <em>inside.</em></h2><p>The plan is only the beginning.<br>The life inside is the point.</p></div><div class="mn-blueprint">${plan}<span class="mn-plan-caption">GROUND PLAN / 1:200</span><div class="mn-plan-compass">N ↑</div></div><div class="mn-drawing-notes"><article><span>01 / SUBTRACT</span><h3>Make room.</h3><p>Carve a courtyard from the solid. Let the sky into the center.</p></article><article><span>02 / CONNECT</span><h3>Find a rhythm.</h3><p>A continuous path turns separate rooms into a shared experience.</p></article><article><span>03 / OPEN</span><h3>Follow the light.</h3><p>Orient every threshold toward the changing day.</p></article></div><div class="mn-drawing-rule"><i></i><span>IDEA → DRAWING → EXPERIENCE</span></div></div></section>
<section class="mn-projects" data-chapter="Studies in space"><div class="mn-project-pin"><div class="mn-project-header"><span>03 / SPATIAL STUDIES</span><span>THREE IMAGINED PLACES</span></div>${[
    [
      "01",
      "The quiet house",
      "A place to step out of the noise.",
      "RESIDENTIAL / COURTYARD STUDY",
      "quiet",
    ],
    [
      "02",
      "A common ground",
      "Many lives. One shared horizon.",
      "CULTURAL / PUBLIC PAVILION",
      "common",
    ],
    [
      "03",
      "Above the everyday",
      "A different view of what comes next.",
      "EXPERIMENTAL / VERTICAL GARDEN",
      "above",
    ],
  ]
    .map(
      ([n, title, copy, meta, kind], i) =>
        `<article class="mn-project mn-project-${kind}"><div class="mn-project-art"><div class="mn-project-disc"></div><div class="mn-terrain"></div>${building(i)}<div class="mn-project-shadow"></div></div><div class="mn-project-copy"><span class="mt-eyebrow">${meta}</span><h2>${title}</h2><p>${copy}</p></div><span class="mn-project-number">${n}<small>/ 03</small></span></article>`,
    )
    .join("")}</div></section>
<section class="mn-materials"><div class="mn-section-label">04 / AN HONEST PALETTE</div><h2 class="mt-reveal">Nothing to hide.<br><em>Everything to feel.</em></h2><div class="mn-material-grid">${[
    ["01", "Earth", "Pigment, texture, imperfection.", "earth"],
    ["02", "Stone", "A memory of the landscape.", "stone"],
    ["03", "Light", "Our most important material.", "light"],
  ]
    .map(
      ([n, name, copy, cl]) =>
        `<article class="mn-material mn-material-${cl}"><div class="mn-material-swatch"><i></i><span>${n}</span></div><h3>${name}</h3><p>${copy}</p></article>`,
    )
    .join("")}</div></section>
<section class="mn-contact" id="contact" data-chapter="Build a possibility"><div class="mn-door" aria-hidden="true"><i></i><i></i><i></i><i></i></div><span class="mt-eyebrow">EVERY POSSIBILITY STARTS WITH A CONVERSATION.</span><h2>${split("Leave the door open.")}</h2><a href="${escape(mail(c.email))}">Build a possibility <span>↗</span></a><p>A conceptual architecture template.<br>Make the next space your own.</p></section>${footer(c, "monolith")}`;
}
export function renderMotion(
  id: MotionId,
  config: Partial<MotionConfig> = {},
): string {
  const c = normalizeMotionConfig(config, id);
  return `<div class="mt-page mt-${id}" style="--accent:${c.accent}" data-template="${id}">${id === "lightkeeper" ? renderLightkeeper(c) : id === "nullsignal" || id === "bitquest" ? renderGlyphStudy(id,c) : id === "aether" ? aether(c) : id === "offscript" ? offscript(c) : id === "floraison" ? floraison(c) : id === "monolith" ? monolith(c) : id === "reverie" || id === "traverse" ? renderImageMotion(id, c) : renderNewMotion(id, c)}</div>`;
}
