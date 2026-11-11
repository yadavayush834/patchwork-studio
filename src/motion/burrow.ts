import { burrowChapters } from "./burrow-story";
import { sprite } from "./cloudwhale";
import type { MotionConfig } from "./catalog";

const esc = (s: string) => s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);
const mail = (email: string) => "mailto:" + email.split("@").map(encodeURIComponent).join("@");
const P = { k: "#1c1410", d: "#4a3020", b: "#6b4a2e", l: "#9a6a52", c: "#e6dcc0", w: "#ffffff", y: "#ffd34d", o: "#ff8a3d", p: "#f7a8c4", r: "#e07aa8", s: "#9aa0b4", u: "#3d8fbf", t: "#3ce0c4", v: "#8b7bc0", g: "#5ba86a", n: "#f47c7c", m: "#4a3b38" };
const items = [
  sprite(["...kk...", "..kyyk..", ".kyooyk.", ".kyooyk.", ".kyyyyk.", "..kkkk..", "...bb...", "...bb..."], P, "Lantern"),
  sprite(["...bb...", ".dlllld.", "dlllllld", "dbbbbbbd", ".kkkkkk.", "........", "........", "........"], P, "Acorn cap"),
  sprite(["..cccc..", ".cwwwwc.", ".cwwwwc.", "..cwwc..", "..cwwc..", "...cc...", "...c....", "........"], P, "Fossil tooth"),
  sprite(["........", "..wwww..", ".wcwwwc.", ".wwwwws.", ".wwwwws.", "..ssss..", "........", "........"], P, "River pearl"),
  sprite(["...tt...", "..twtt..", "..twtt..", ".vtwttv.", ".vvttvv.", "..vvvv..", "...vv...", "........"], P, "Crystal shard"),
  sprite(["..p..p..", ".pprpp..", "pprryrp.", ".prrrpp.", "..pppp..", "...g....", "..gg....", "...g...."], P, "Blossom"),
];
const pip = sprite(["...mmmm...", "..mmmmmm..", ".mmkmmkmm.", ".mmmnnmmm.", "..mmmmmm..", ".nmmmmmmn.", "..mm..mm.."], P, "Pip the mole");
const bands = [["SURFACE", "#5ba86a"], ["TOPSOIL", "#6b4a2e"], ["BONE HALL", "#9a6a52"], ["BLIND RIVER", "#1f5f8f"], ["CRYSTAL HALL", "#8b7bc0"], ["HEART ROOT", "#c4506b"]];

export function renderBurrow(c: MotionConfig) {
  const words = c.headline.split(/\s+/).map((w) => `<span class="bw-l">${esc(w)}</span>`).join(" ");
  return `<a class="bw-skip" href="#story">Read the field notes</a>
<header class="bw-nav"><a href="#top" class="bw-brand">${pip}<span>${esc(c.brand)}</span></a><nav aria-label="Template"><a href="#story">FIELD NOTES</a><a href="#contact" class="bw-btn">DIG IN ↗</a></nav></header>
<main id="top">
<section class="bw-journey" aria-label="A mole carries a lantern down to the heart of a tree and brings it back to bloom">
<div class="bw-stage">
  <div class="bw-world" data-scene="burrow" role="img" aria-label="A pixel-art flight down a voxel tunnel beneath a tree, through fossil, river and crystal chambers"><div class="bw-fallback">${pip}<span>The tunnel is dark. The notes are below.</span></div></div>
  <div class="bw-vignette" aria-hidden="true"></div>
  <div class="bw-title"><span class="bw-kicker">A PIXEL DESCENT IN SEVEN SPECIMENS</span><h1>${words}</h1><p>A mole, a lantern and a tree that forgot how to bloom.</p><span class="bw-hint">SCROLL TO DIG <i>▼</i></span></div>
  <div class="bw-gauge" aria-hidden="true"><span class="bw-depth"><b>000</b> M</span><div class="bw-ruler">${bands.map(([n, col]) => `<i style="--c:${col}" title="${n}"></i>`).join("")}<span class="bw-marker">${pip}</span></div><span class="bw-layer">SURFACE</span></div>
  <article class="bw-card" aria-hidden="true"><small>SPECIMEN I / VII</small><h2>THE GREY TREE</h2><p>${esc(burrowChapters[0][2])}</p><span class="bw-found">FOUND ▸ <b>LANTERN</b></span></article>
  <div class="bw-bar" aria-hidden="true">${items.map((s, i) => `<div class="bw-slot" data-slot="${i}">${s}<span>${i + 1}</span></div>`).join("")}</div>
  <div class="bw-flash" aria-hidden="true"></div>
</div>
</section>
<section id="story" class="bw-notes"><header><span class="bw-kicker">PIP'S FIELD NOTES</span><h2>Seven specimens,<br>one lantern.</h2><p>Everything Pip found on the way down, and the one thing left behind.</p></header><div class="bw-notes-grid">${burrowChapters
    .map(([no, title, text, item], i) => `<article data-chapter="${esc(title)}"><div class="bw-note-item">${items[Math.min(i, 5)] ?? ""}</div><span>SPECIMEN ${no}</span><h3>${esc(title)}</h3><p>${esc(text)}</p><small>FOUND ▸ ${item}</small></article>`)
    .join("")}</div></section>
<footer id="contact" class="bw-end" data-chapter="Dig in"><div class="bw-end-tree" aria-hidden="true">${sprite(["....pprpp....", "..pprryrpp...", ".prryrrrrpp..", "pprrrrryrrpp.", ".pprrrrrrpp..", "...ppbbpp....", ".....bb......", ".....bb......", "....bbbb.....", "ggggggggggggg"], P)}</div><span class="bw-kicker">THE HILL IS PINK AGAIN</span><h2>The light was under<br>our feet all along.</h2><p>Write to Pip. Letters are left at the burrow, under the third root.</p><a class="bw-btn bw-btn-big" href="${esc(mail(c.email))}">LEAVE A LETTER ↗</a><div class="bw-foot"><span>${esc(c.brand)} © ${new Date().getFullYear()}</span><span>AN INDEPENDENT PIXEL STORY</span><a href="#top">DIG AGAIN ↑</a></div></footer>
</main>`;
}
