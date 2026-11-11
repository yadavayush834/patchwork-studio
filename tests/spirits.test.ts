import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { spirits, normalizeSpirit, defaultSpirit } from "../src/spirits/catalog";
import { spiritDocument, spiritFiles, spiritSnippet, spiritTag } from "../src/spirits/document";
import { spiritsRoute } from "../src/spirits/route";

test("spirits: six creatures, each with a working demo page", () => {
  assert.equal(spirits.length, 6);
  assert.equal(new Set(spirits.map((s) => s.id)).size, 6);
  for (const s of spirits) {
    const html = spiritDocument(s.id);
    assert.match(html, new RegExp(`<${s.tag}[ >]`));
    assert.ok(!/(src|href)="https?:\/\//.test(html), "no external requests");
    for (const f of spiritFiles(s.id)) assert.ok(existsSync(`public/spirits/${f}`), `${s.id}: missing ${f}`);
    const src = readFileSync(`public/spirits/${s.id}.js`, "utf8");
    assert.match(src, new RegExp(`customElements\\.define\\("${s.tag}"`));
    assert.match(src, /PW\.reduced/, `${s.id}: calm path for reduced motion`);
    assert.match(spiritSnippet(s.id), new RegExp(`spirits/${s.id}\\.js`));
  }
});
test("spirits: their kit is the same kit the components use", () => {
  assert.equal(readFileSync("public/spirits/kit.js", "utf8"), readFileSync("public/components/kit.js", "utf8"));
});
test("spirits: no element property names are reused as state", () => {
  // `dir`, `title`, `hidden` and `lang` are real HTMLElement properties; using them as state silently breaks.
  for (const s of spirits) assert.ok(!/this\.(dir|title|hidden|lang)\s*=/.test(readFileSync(`public/spirits/${s.id}.js`, "utf8")), s.id);
  for (const f of ["tightrope", "kite", "postie", "cocoon", "lamplighter", "mimeo"]) assert.ok(!/this\.(dir|title|hidden|lang)\s*=/.test(readFileSync(`public/components/${f}.js`, "utf8")), f);
});
test("spirits: options are validated and escaped; routes stay separate", () => {
  assert.equal(normalizeSpirit({ count: "99" }, "moth").count, "5");
  assert.equal(normalizeSpirit({ edge: "left" }, "monkey").edge, "bottom");
  assert.equal(normalizeSpirit({ color: "javascript:" }, "spider").color, "#e8a23a");
  assert.deepEqual(normalizeSpirit({}, "magpie"), defaultSpirit("magpie"));
  assert.ok(!spiritTag("wanderer", { name: '"><script>' }).includes("<script>"));
  assert.equal(spiritsRoute("?collection=spirits"), "gallery");
  assert.equal(spiritsRoute("?collection=components"), null);
  for (const s of spirits) assert.equal(spiritsRoute(`?spirit=${s.id}`), "page");
});
test("pals: every pal in the catalog exists in the engine, with frames that agree in width", async () => {
  const { pals } = await import("../src/spirits/catalog");
  const src = readFileSync("public/spirits/pals.js", "utf8");
  for (const p of pals) assert.match(src, new RegExp(`\\n\\s+${p.id}: \\{ move: "${p.move}"`), p.id);
  assert.ok(pals.length >= 16);
  // No behaviour word is overwritten by frame rows (the bug that broke the first run).
  assert.ok(!/\n\s+react: \[/.test(src));
});
test("home: replaces the old overview and reaches every collection", () => {
  const home = readFileSync("src/home/Home.tsx", "utf8"), app = readFileSync("src/App.tsx", "utf8");
  assert.match(app, /dashTab === "home" \? \(\s*<Home/);
  for (const c of ["heroes2", "scenes", "components", "spirits"]) assert.match(home, new RegExp(`collection=${c}`));
  for (const f of ["openLibrary", "openMotion", "openVideoLab", "openAscii", "onWorld", "onProjects", "onScratch", "onMake"]) assert.match(home, new RegExp(`p\\.${f}`));
  // The hero's pixel quilt and thread respect reduced motion and pause offscreen.
  const art = readFileSync("src/home/HeroArt.tsx", "utf8");
  assert.match(art, /prefers-reduced-motion/);
  assert.match(art, /IntersectionObserver/);
});
