import { cloudwhaleChapters } from "./cloudwhale-story";
import type { MotionConfig } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (email: string) => "mailto:" + email.split("@").map(encodeURIComponent).join("@");

/** Draw a sprite from a character grid; each character maps to a palette colour. */
export function sprite(rows: string[], colors: Record<string, string>, label = "") {
  const w = Math.max(...rows.map((r) => r.length));
  let rects = "";
  rows.forEach((row, y) =>
    [...row].forEach((ch, x) => {
      if (colors[ch]) rects += `<rect x="${x}" y="${y}" width="1.02" height="1.02" fill="${colors[ch]}"/>`;
    }),
  );
  return `<svg viewBox="0 0 ${w} ${rows.length}" shape-rendering="crispEdges" ${label ? `role="img" aria-label="${label}"` : 'aria-hidden="true"'}>${rects}</svg>`;
}
const P = { k: "#0b0d1f", n: "#262b5c", b: "#3b3f7a", l: "#5a5aa0", w: "#ffffff", c: "#e6ecf5", s: "#b9c4dc", y: "#ffd34d", o: "#ff8a3d", r: "#c4506b", p: "#f47c7c", h: "#ffcf8a", f: "#ffe9c2", g: "#5ba86a", d: "#2f6b4f", t: "#3ce0c4", v: "#8b7bc0", e: "#9a6a52" };
const mira = sprite(
  [
    "....nnnnn...",
    "..nnbbbbbnn.",
    ".nbbbbbbbbbn",
    ".nbbffffffbn",
    "nbbfffffffbn",
    "nbffkffkfffn",
    "nbffffffpffn",
    ".nfffppfffn.",
    "..nfffffffn.",
    "..oooyyoooo.",
    ".ooyyoooyyoo",
    ".llllllllll.",
  ],
  P,
  "Mira, the narrator",
);
const whaleIcon = sprite(
  [
    "...........ll.",
    "..llllllll.ll.",
    ".lbbbbbbbbll..",
    "lbbbbbbbbbbl..",
    "lbwkbbbbbbbbl.",
    "lsssssssbbbbbl",
    ".lsssssssbbll.",
    "..lllllllll...",
  ],
  P,
);
const icons = [
  sprite(["....yy....", "...ffff...", "..rrrrrr..", "..fyffyf..", "..ffffff..", "llllllllll", ".bbbbbbbb.", "..bbbbbb.."], P),
  sprite(["..bbbbbb..", ".bccccccb.", "bccckkcccb", "bcckwkkccb", "bccckkcccb", ".bccccccb.", "..bbbbbb..", "..........."], P),
  sprite(["..ssssss..", ".ssssssss.", "ssssssssss", "....yy....", "...yy.....", "..yyyyy...", "....yy....", "...y......"], P),
  sprite(["..........", "..ssssss..", ".s.s.s.s..", "..........", "tttttttttt", "nnnnnnnnnn", "bbbbbbbbbb", "kkkkkkkkkk"], P),
  sprite(["...tt.....", "...t.t....", "...t..t...", "...t......", ".ttt......", "tttt..vv..", ".tt..v..v.", ".....vvvv."], P),
  sprite(["....rr....", "...rrrr...", "..rrrrrr..", ".rrrrrrrr.", "..fyffff..", "..fyffkf..", "..ffffkf..", "lllllllll."], P),
  sprite(["...gggg...", "..gggggg..", ".gggdgggg.", ".ggggggdg.", "..gggggg..", "....ee....", "tttteetttt", "nnnnnnnnnn"], P),
];

export function renderCloudwhale(c: MotionConfig) {
  const words = c.headline.split(/\s+/).map((w) => `<span class="cw-l">${esc(w)}</span>`).join(" ");
  return `<a class="cw-skip" href="#story">Read the logbook</a>
<header class="cw-nav"><a href="#top" class="cw-brand">${whaleIcon}<span>${esc(c.brand)}</span></a><nav aria-label="Template"><a href="#story">LOGBOOK</a><a href="#contact" class="cw-btn">WRITE TO US ↗</a></nav></header>
<main id="top">
<section class="cw-journey" aria-label="A town that lives on the back of a sky whale finds a new home">
<div class="cw-stage">
  <div class="cw-world" data-scene="cloudwhale" role="img" aria-label="A pixel-art voxel whale carrying a tiny town above a sea of clouds"><div class="cw-fallback">${whaleIcon}<span>The whale is resting. The story is below.</span></div></div>
  <div class="cw-scan" aria-hidden="true"></div>
  <div class="cw-title"><span class="cw-kicker">A PIXEL FABLE IN SEVEN CHAPTERS</span><h1>${words}</h1><p>A small town lives on the back of a very old whale.<br>This is the year everything changed.</p><span class="cw-hint">SCROLL TO SET SAIL <i>▼</i></span></div>
  <dl class="cw-hud" aria-hidden="true"><div><dt>ALT</dt><dd><b class="cw-hud-alt">2400</b>M</dd></div><div><dt>WHALE</dt><dd><b class="cw-hud-age">212</b>YRS</dd></div><div><dt>LIGHTS</dt><dd><b class="cw-hud-lit">12/12</b></dd></div><div><dt>SKY</dt><dd><b class="cw-hud-weather">CLEAR</b></dd></div></dl>
  <div class="cw-card" aria-hidden="true"><small>CHAPTER I</small><b>THE TOWN ON THE WHALE</b></div>
  <div class="cw-dialog" aria-hidden="true"><div class="cw-face">${mira}</div><div class="cw-lines"><span class="cw-name">MIRA <em>· CH <span class="cw-chapter-no">I</span></em></span><p class="cw-say"></p></div><span class="cw-next">▼</span></div>
  <div class="cw-progress" aria-hidden="true">${"<i></i>".repeat(7)}</div>
</div>
</section>
<section id="story" class="cw-log"><header><span class="cw-kicker">MIRA'S LOGBOOK</span><h2>Seven pages,<br>one whale.</h2><p>The same story, written down by the girl who was there.</p></header><div class="cw-log-grid">${cloudwhaleChapters
    .map(([no, title, line], i) => `<article data-chapter="${esc(title)}"><div class="cw-icon">${icons[i]}</div><span>PAGE ${no}</span><h3>${esc(title)}</h3><p>${esc(line)}</p></article>`)
    .join("")}</div></section>
<footer id="contact" class="cw-end" data-chapter="Write to the town"><div class="cw-end-whale">${whaleIcon}</div><span class="cw-kicker">THE END / A NEW BEGINNING</span><h2>Home is something<br>that carries you.</h2><p>Letters to the town are delivered by whale, eventually.</p><a class="cw-btn cw-btn-big" href="${esc(mail(c.email))}">SEND A LETTER ↗</a><div class="cw-foot"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>AN INDEPENDENT PIXEL STORY</span><a href="#top">SAIL AGAIN ↑</a></div></footer>
</main>`;
}
