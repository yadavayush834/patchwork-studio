import type { MotionConfig, MotionId } from "./catalog";
const esc = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
const range = (n: number, fn: (i: number) => string) =>
  Array.from({ length: n }, (_, i) => fn(i)).join("");
const email = (c: MotionConfig) =>
  esc("mailto:" + c.email.split("@").map(encodeURIComponent).join("@"));
const header = (c: MotionConfig) =>
  `<a class="mt-skip" href="#story">Skip to the story</a><header class="mt-nav"><a class="mt-brand" href="#top">${esc(c.brand)}<span>®</span></a><nav aria-label="Template navigation"><a href="#story">The journey</a><a href="#contact">Get in touch ↗</a></nav></header><div class="mt-progress" aria-hidden="true"><i></i></div>`;
const footer = (c: MotionConfig) =>
  `<footer class="mt-footer"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>AN INDEPENDENT CONCEPT</span><a href="#top">Back to the beginning ↑</a></footer>`;
const label = (s: string) => `<span class="ns-label">${s}</span>`;
const stars = () =>
  `<div class="ns-stars" aria-hidden="true">${range(65, (i) => `<i style="left:${(i * 43.17) % 100}%;top:${(i * 29.71) % 100}%;--s:${(i % 3) + 1}px;opacity:${0.15 + (i % 7) / 10}"></i>`)}</div>`;
const ticks = (n = 60) =>
  range(
    n,
    (i) =>
      `<i style="--a:${(i * 360) / n}deg;--l:${i % 5 === 0 ? 14 : 5}px"></i>`,
  );
const jelly = (variant = 0) =>
  `<svg viewBox="0 0 500 600" fill="none" aria-hidden="true"><defs><radialGradient id="jelly-${variant}"><stop stop-color="#e7fff4" stop-opacity=".8"/><stop offset=".45" stop-color="#7ef4d9" stop-opacity=".25"/><stop offset="1" stop-color="#63dfed" stop-opacity=".05"/></radialGradient></defs><g class="pl-bell"><path d="M80 255C55 90 191 39 250 58c89-21 215 53 170 197-81 36-255 35-340 0Z" fill="url(#jelly-${variant})" stroke="#a4ffeb" stroke-width="1.5"/>${range(16, (i) => `<path d="M${80 + i * 22.5} 255Q${120 + i * 17} ${50 + (i % 3) * 25} 250 58" stroke="#a4ffeb" opacity=".3"/>`)}<ellipse cx="250" cy="252" rx="170" ry="27" stroke="#b9fff0"/><ellipse cx="250" cy="242" rx="136" ry="18" stroke="#b9fff0" opacity=".4"/>${range(4, (i) => `<ellipse cx="${205 + (i % 2) * 83}" cy="${156 + Math.floor(i / 2) * 49}" rx="38" ry="27" stroke="#d8fc81" opacity=".65" transform="rotate(${i * 30} 250 180)"/>`)}</g><g class="pl-tentacles">${range(27, (i) => `<path d="M${95 + i * 12} 260C${30 + i * 18} 350 ${360 - i * 8} ${370 + (i % 4) * 25} ${145 + i * 8} ${480 + Math.sin(i) * 65}" stroke="${i % 4 === 0 ? "#d8fc81" : "#83ead9"}" opacity="${0.2 + (i % 5) * 0.12}" stroke-width="${i % 3 === 0 ? 2 : 1}"/>`)}</g></svg>`;
const contours = () =>
  `<svg viewBox="0 0 1000 760" fill="none" aria-hidden="true"><g class="pl-contours">${range(
    33,
    (i) => {
      const r = 25 + i * 13;
      return `<path pathLength="1" d="M${500 + r} 380C${500 + r * 0.8} ${380 - r * 0.7} ${500 + r * 0.3} ${380 - r * 1.1} ${500 - r * 0.2} ${380 - r * 0.9}S${500 - r * 1.4} ${380 - r * 0.35} ${500 - r} ${380 + r * 0.2}S${500 - r * 0.25} ${380 + r * 0.9} ${500 + r * 0.35} ${380 + r * 0.7}S${500 + r * 1.3} ${380 + r * 0.3} ${500 + r} 380Z" stroke="${i % 5 === 0 ? "#d8fc81" : "#39757b"}" stroke-width="${i % 5 === 0 ? 1.3 : 0.7}"/>`;
    },
  )}</g><path class="pl-route" pathLength="1" d="M180 600C180 390 400 510 430 330S730 250 820 120" stroke="#d8fc81" stroke-width="3" stroke-dasharray="8 8"/><g fill="#d8fc81"><circle cx="180" cy="600" r="6"/><circle cx="430" cy="330" r="6"/><circle cx="820" cy="120" r="6"/></g></svg>`;
function pelagic(c: MotionConfig) {
  return `${header(c)}
<section class="pl-hero ns-stage" id="top" data-chapter="Leave the surface"><div class="pl-caustics"></div>${stars()}<div class="pl-depth-lines" aria-hidden="true">${range(18, (i) => `<i><span>${String(i * 200).padStart(4, "0")}</span></i>`)}</div><div class="pl-hero-copy">${label("AN INDEPENDENT OCEAN EXPLORATION JOURNAL")}<h1>${esc(c.headline)}</h1><p>There is another world<br>on the other side of the surface.</p></div><div class="ns-scene pl-capsule" data-scene="pelagic" role="img" aria-label="Original three-dimensional diving capsule with illuminated porthole and articulated survey arms"><div class="ns-graphic-fallback pl-sub-fallback"><i></i><b>01</b></div></div><div class="pl-depth-readout" aria-hidden="true"><span>DEPTH / METRES</span><strong class="pl-depth-number">0000</strong><small>SCROLL TO DESCEND ↓</small></div><div class="pl-descent-copy">${label("01 / THE TWILIGHT ZONE")}<h2>The light<br>leaves.<br><em>Wonder stays.</em></h2><p>Let your eyes adjust.<br>The story is only beginning.</p></div><div class="ns-bottom"><span>EXPEDITION 001 / THE UNSEEN</span><span>TAKE A DEEP BREATH ↓</span></div></section>
<section class="pl-intro ns-editorial" id="story" data-chapter="Read the unseen">${label("A JOURNAL FROM THE OTHER WORLD")}<h2>We know the shape<br>of the moon.<br><em>What about<br>the world below?</em></h2><div class="pl-intro-note"><span class="ns-cross">＋</span><p>A fictional expedition into unfamiliar waters. Follow the contours, linger in the dark, and meet the extraordinary forms that call it home.</p></div></section>
<section class="pl-survey" data-chapter="Read the unseen"><div class="pl-survey-pin ns-stage"><div class="pl-survey-copy">${label("02 / READING THE SEABED")}<h2>A landscape<br>made of <br><em>listening.</em></h2><p>Watch the sound become a map.<br>Every line, a little less unknown.</p></div><div class="pl-map"><div class="pl-map-grid"></div>${contours()}<div class="pl-scan"></div><span class="pl-map-coord">36° N / 014° W</span><span class="pl-map-scale">0 ━━━ 500 M</span></div><div class="pl-survey-notes"><article><span>01 / SOUND</span><h3>Send a question.</h3><p>A pulse travels into the dark.</p></article><article><span>02 / RETURN</span><h3>Read the echo.</h3><p>Distance becomes contour. Silence becomes shape.</p></article><article><span>03 / DISCOVER</span><h3>A new horizon.</h3><p>The edge of the map is a beginning.</p></article></div><div class="ns-bottom"><span>BATHYMETRIC STUDY / IMAGINED TERRAIN</span><span class="pl-scan-status">SONAR / ACTIVE</span></div></div></section>
<section class="pl-life" data-chapter="Life without sunlight"><div class="pl-life-pin ns-stage">${stars()}<div class="pl-life-title">${label("03 / LIFE WITHOUT SUNLIGHT")}<h2>Otherworldly.<br><em>Of this world.</em></h2></div><div class="pl-specimen pl-specimen-one">${jelly(0)}</div><div class="pl-specimen pl-specimen-two">${jelly(1)}</div><div class="pl-specimen pl-specimen-three">${jelly(2)}</div><div class="pl-life-orbit" aria-hidden="true">${ticks(40)}</div><div class="pl-life-notes"><article><span>OBSERVATION 01</span><h3>Soft architecture.</h3><p>No straight lines. No wasted movement.<br>A bell made to move with the water.</p></article><article><span>OBSERVATION 02</span><h3>Living light.</h3><p>In the absence of sunlight,<br>life finds another way to be seen.</p></article><article><span>OBSERVATION 03</span><h3>Everything is connected.</h3><p>A world held together by currents.<br>A reminder to tread lightly above.</p></article></div><span class="pl-life-caption">MEDUSA / FIELD OBSERVATION 001</span></div></section>
<section class="pl-contact ns-contact" id="contact" data-chapter="Stay curious"><div class="pl-horizon" aria-hidden="true"></div>${label("THE SURFACE IS ONLY THE BEGINNING.")}<h2>Stay<br><em>curious.</em></h2><a href="${email(c)}">Join the conversation <span>↗</span></a><p>A concept for explorers, journals, and people who look a little closer.</p></section>${footer(c)}`;
}
const sunDiagram = () =>
  `<div class="he-eclipse-art" role="img" aria-label="An amber solar corona aligned with a dark lunar disc"><div class="he-corona">${range(48, (i) => `<i style="--a:${i * 7.5}deg;--r:${(i % 3) * 8}px"></i>`)}</div><div class="he-sun"></div><div class="he-moon"></div><div class="he-diamond"></div><div class="he-eclipse-ring">${ticks()}</div></div>`;
const orbitPlate = (type: number) =>
  `<div class="he-plate he-plate-${type}" aria-hidden="true"><div class="he-plate-orbits">${range(9, (i) => `<i style="--n:${i};--a:${i * 20}deg"></i>`)}</div><div class="he-plate-core"></div><span>${["I", "II", "III"][type]}</span></div>`;
function heliograph(c: MotionConfig) {
  return `${header(c)}
<section class="he-hero ns-stage" id="top" data-chapter="An instrument for wonder">${stars()}<div class="he-hero-rules"></div><div class="he-hero-copy">${label("PRIVATE OBSERVATORY / PUBLIC WONDER")}<h1>${esc(c.headline)}</h1><p>An invitation to change your perspective.<br>One revolution at a time.</p></div><div class="ns-scene he-instrument" data-scene="heliograph" role="img" aria-label="An original brass armillary sphere with six engraved orbital rings and a luminous solar core"><div class="ns-graphic-fallback he-instrument-fallback">${orbitPlate(0)}</div></div><div class="he-instrument-label"><span>FIG. 01 / THE ARMILLARY</span><span>AN INSTRUMENT FOR WONDER</span></div><div class="he-unfold-copy">${label("AS ABOVE, SO WITHIN.")}<h2>A different<br><em>frame of<br>reference.</em></h2><p>Turn a circle into an orbit.<br>Turn an orbit into a possibility.</p></div><div class="ns-bottom"><span>HELIOCENTRIC STUDIES / VOL. 01</span><span>SCROLL TO SET IT IN MOTION ↓</span></div></section>
<section class="he-prologue ns-editorial" id="story" data-chapter="Between light and shadow">${label("ON THE ART OF LOOKING UP")}<h2>Not everything<br>needs an answer.<br><em>Some things<br>need an audience.</em></h2><p>A conceptual observatory for the endlessly curious. We collect moments of alignment: between science and feeling, the familiar and the infinite.</p><div class="he-prologue-seal" aria-hidden="true">${ticks(36)}<span>23.4°</span></div></section>
<section class="he-eclipse" data-chapter="Between light and shadow"><div class="he-eclipse-pin ns-stage">${stars()}<div class="he-eclipse-header">${label("02 / A STUDY IN ALIGNMENT")}<span>THE SLOWEST KIND OF SPECTACLE</span></div>${sunDiagram()}<div class="he-eclipse-copy"><h2>For a moment,<br><em>everything aligns.</em></h2><p>Keep scrolling. Follow the shadow.</p></div><div class="he-totality"><span>T O T A L I T Y</span><p>Darkness makes the light visible.</p></div><div class="he-eclipse-phases"><span>FIRST CONTACT</span><i></i><span>ALIGNMENT</span><i></i><span>AFTERLIGHT</span></div></div></section>
<section class="he-atlas" data-chapter="A field guide to infinity"><div class="he-atlas-pin ns-stage"><div class="he-atlas-track"><article class="he-atlas-intro">${label("03 / A FIELD GUIDE TO INFINITY")}<h2>Small notes.<br><em>Endless<br>sky.</em></h2><p>Three imagined observations.<br>Let the horizon carry you.</p><span>→</span></article>${[
    [
      "Dawn",
      "The first geometry.",
      "Light draws an edge where there was only darkness.",
      "01 / SOLAR STUDY",
    ],
    [
      "Orbit",
      "The beauty of returning.",
      "A journey can be a circle and still change everything.",
      "02 / CELESTIAL MECHANICS",
    ],
    [
      "Deep time",
      "A longer way of looking.",
      "We are brief visitors to a very old conversation.",
      "03 / SIDEREAL NOTES",
    ],
  ]
    .map(
      ([name, title, desc, n], i) =>
        `<article class="he-atlas-page">${label(n)}${orbitPlate(i)}<div class="he-atlas-page-copy"><h3>${name}</h3><div><h4>${title}</h4><p>${desc}</p></div></div></article>`,
    )
    .join("")}</div><div class="he-atlas-line"><i></i></div></div></section>
<section class="he-contact ns-contact" id="contact" data-chapter="Keep looking up"><div class="he-contact-orbits" aria-hidden="true">${range(6, (i) => `<i style="--n:${i}"></i>`)}</div>${label("THERE IS ALWAYS MORE TO SEE.")}<h2>Keep<br><em>looking up.</em></h2><a href="${email(c)}">A conversation, in orbit <span>↗</span></a><p>An independent concept for observatories, exhibitions, and curious minds.</p></section>${footer(c)}`;
}
// Original vector scenes are shared by the hero, screening room, and contact sheet.
export const filmArt = (kind: number, suffix: string) => {
  const id = `film-${kind}-${suffix}`;
  return `<svg viewBox="0 0 1200 760" preserveAspectRatio="xMidYMid slice" fill="none" aria-hidden="true"><defs><linearGradient id="${id}" x2="0" y2="1"><stop stop-color="${["#456e76", "#203549", "#c9482c"][kind]}"/><stop offset="1" stop-color="${["#b8c4b2", "#708184", "#efba74"][kind]}"/></linearGradient><radialGradient id="${id}-light"><stop stop-color="#fff5cc" stop-opacity=".5"/><stop offset="1" stop-color="#fff5cc" stop-opacity="0"/></radialGradient></defs><rect width="1200" height="760" fill="url(#${id})"/>${kind === 0 ? `<circle class="af-film-sun" cx="830" cy="230" r="105" fill="#e5d7ae"/><g class="af-film-far"><path d="M0 480 200 300 330 430 520 220 760 510 980 390 1200 510V760H0Z" fill="#435c56"/><path d="M0 590 170 440 340 560 600 380 810 580 1020 420 1200 570V760H0Z" fill="#2f4947"/></g><g class="af-film-near">${range(15, (i) => `<path d="M${i * 100 - 60} 760V${410 + (i % 4) * 40}m-55 165 55-140 55 140m-100-35 45-105 45 105" stroke="#172d30" stroke-width="18"/>`)}</g><path d="M520 760 650 570 690 570 640 760" fill="#b7ba9d" opacity=".7"/>` : kind === 1 ? `<circle class="af-film-sun" cx="400" cy="220" r="150" fill="#d0c9aa" opacity=".75"/><g class="af-film-far">${range(16, (i) => `<rect x="${i * 90 - 50}" y="${220 + (i % 5) * 55}" width="${55 + (i % 3) * 15}" height="500" fill="${i % 2 ? "#233a48" : "#314c59"}"/>`)}</g><path d="M0 620H1200V760H0Z" fill="#102630"/><g class="af-film-near">${range(23, (i) => `<path d="M${i * 65} 760 540 490" stroke="#8a9992" opacity=".22"/>`)}<path d="M0 545H1200M0 565H1200" stroke="#a1aaa0" stroke-width="4"/><path d="M780 760V425M765 425H840" stroke="#11242e" stroke-width="9"/><circle cx="840" cy="425" r="9" fill="#f1ddaf"/></g>` : `<circle class="af-film-sun" cx="600" cy="300" r="155" fill="#f6d498"/><path class="af-film-far" d="M0 520Q250 340 530 580T1200 520V760H0Z" fill="#a14332"/><path class="af-film-near" d="M0 650Q300 430 650 650T1200 600V760H0Z" fill="#692f30"/>${range(12, (i) => `<path d="M0 ${600 + i * 15}Q300 ${400 + i * 25} 650 ${600 + i * 15}T1200 ${550 + i * 20}" stroke="#d77b4e" opacity=".25"/>`)}<path d="M920 590V490m0 30-18-17m18 5 15-20" stroke="#3e2b29" stroke-width="4"/>`}<rect width="1200" height="760" fill="url(#${id}-light)"/><g opacity=".09" stroke="#fff">${range(38, (i) => `<path d="M0 ${i * 21}H1200"/>`)}</g></svg>`;
};
const iris = () =>
  `<div class="af-iris" aria-hidden="true"><div class="af-lens-rim"><div class="af-lens-markings">${ticks(72)}</div><span>AF / OPTICAL STUDY 001</span><b>35 MM · 1:1.4</b></div><div class="af-iris-blades">${range(8, (i) => `<i style="--a:${i * 45}deg"></i>`)}</div><div class="af-lens-core"></div><div class="af-lens-glint"></div></div>`;
function afterimage(c: MotionConfig) {
  return `${header(c)}
<section class="af-hero ns-stage" id="top" data-chapter="Open your eyes"><div class="af-hero-grid"></div><div class="af-hero-copy">${label("AN INDEPENDENT CINEMA & VISUAL CULTURE JOURNAL")}<h1>${esc(c.headline)}</h1></div><div class="af-optical" data-scene="afterimage" role="img" aria-label="Mechanical camera aperture opening onto an original illustrated mountain landscape"><div class="af-iris-image">${filmArt(0, "hero")}</div>${iris()}</div><div class="af-hero-note"><span>THE EYE REMEMBERS<br>WHAT THE MIND FORGETS.</span><p>Stories in light.<br>Made to linger.</p></div><div class="af-through-copy">${label("01 / A DIFFERENT WAY OF SEEING")}<h2>Step<br><em>inside<br>the frame.</em></h2></div><div class="ns-bottom"><span>VOLUME 01 / PERSISTENCE OF VISION</span><span>SCROLL TO OPEN YOUR EYES ↓</span></div></section>
<section class="af-intro ns-editorial" id="story" data-chapter="Three short stories">${label("NOT A FEED. A FEELING.")}<h2>The cut.<br>The color.<br><em>The feeling<br>in between.</em></h2><div><span>24 / A SECOND CAN HOLD A WORLD.</span><p>A fictional film journal about the images that follow us home. Three original illustrated sequences. No play button. Your scroll is the edit.</p></div></section>
<section class="af-screening" data-chapter="Three short stories"><div class="af-screening-pin ns-stage"><div class="af-screening-top">${label("02 / THREE SHORT STORIES")}<span>SCROLL TO DIRECT THE SCENE ↓</span></div><div class="af-screen">${[
    ["The long way home", "A landscape in three breaths.", "FOREST / 01"],
    [
      "The city, after",
      "A place between arriving and leaving.",
      "NOCTURNE / 02",
    ],
    ["An empty horizon", "A little room for the unexpected.", "DESERT / 03"],
  ]
    .map(
      ([title, desc, n], i) =>
        `<article class="af-sequence af-sequence-${i}"><div class="af-sequence-image">${filmArt(i, "screen")}</div><div class="af-sequence-shade"></div><div class="af-sequence-copy">${label(n)}<h3>${title}</h3><p>${desc}</p></div></article>`,
    )
    .join(
      "",
    )}<div class="af-viewfinder" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="af-shutter" aria-hidden="true">${range(7, (i) => `<i style="--n:${i}"></i>`)}</div></div><div class="af-film-timeline"><span>IN</span><div>${range(48, (i) => `<i style="--n:${i}"></i>`)}<b></b></div><span>OUT</span></div></div></section>
<section class="af-edit" data-chapter="Between the frames"><div class="af-edit-pin ns-stage"><div class="af-edit-copy">${label("03 / BETWEEN THE FRAMES")}<h2>Every frame.<br><em>A possibility.</em></h2><p>Pull a story apart.<br>Find the one moment that stays.</p></div><div class="af-contact-sheet">${range(9, (i) => `<figure class="af-negative" style="--n:${i}"><div>${filmArt(i % 3, `negative-${i}`)}</div><figcaption><span>${String(i + 1).padStart(2, "0")} A</span><span>AF / VOL. 01</span></figcaption></figure>`)}</div><div class="af-select-frame" aria-hidden="true"><i></i><i></i><i></i><i></i></div><span class="af-edit-caption">THE CONTACT SHEET / NINE WAYS OF LOOKING</span></div></section>
<section class="af-contact ns-contact" id="contact" data-chapter="Make a lasting impression">${label("SOME STORIES DESERVE A SECOND LOOK.")}<h2>Make it<br><em>stay.</em></h2><a href="${email(c)}">Send us a story <span>↗</span></a><div class="af-end-mark" aria-hidden="true">END<br>↗</div><p>An original concept for filmmakers, creative studios, and visual journals.</p></section>${footer(c)}`;
}
export function renderNewMotion(id: MotionId, c: MotionConfig) {
  if (id === "pelagic") return pelagic(c);
  if (id === "heliograph") return heliograph(c);
  return afterimage(c);
}
