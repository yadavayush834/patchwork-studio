import { test } from "node:test";
import assert from "node:assert/strict";
import { TEMPLATES, newSite } from "../src/quilt/library/templates";
import { RECIPES, buildSection, readContent, rearrange } from "../src/quilt/library/recipes";
import { validateDoc } from "../src/quilt/validate";
import { siteCss, pageCss, pageDocument, sectionHtml, elementInner } from "../src/quilt/render";
import { readingOrder, tree, phoneOrder } from "../src/quilt/layout";
import { duplicateElements, restack, addPage, removePage, makeHome, align } from "../src/quilt/ops";
import { WIDGETS } from "../src/quilt/widgets";
import { KITS, FONTS, readableOn, themeFromKit, paletteFrom } from "../src/quilt/theme";
import { text, shape } from "../src/quilt/library/build";
import { QUILT_RUNTIME } from "../src/quilt/runtime";
import { existsSync } from "node:fs";
import type { QuiltDoc } from "../src/quilt/model";
import type { RenderCtx } from "../src/quilt/util";

const ctxFor = (doc: QuiltDoc, pageId = doc.pages[0].id): RenderCtx => ({
  doc, theme: doc.theme, mode: "export", base: "", pageId,
  asset: (s) => s, scene: (id) => `living/${id}.html`, page: (id) => `${id}.html`,
});

test("every template builds a valid site that survives a save and load", () => {
  for (const t of TEMPLATES) {
    const doc = newSite(t.id, { name: "Test <b>site</b>", line: "One line" });
    const again = validateDoc(JSON.parse(JSON.stringify(doc)));
    assert.equal(again.pages.length, doc.pages.length, t.id);
    assert.deepEqual(again.pages[0].sections.map((s) => s.elements.length), doc.pages[0].sections.map((s) => s.elements.length), t.id);
    const html = pageDocument(again, again.pages[0], ctxFor(again), { stylesheet: "quilt.css", scripts: { runtime: "quilt.js" } });
    assert.ok(html.startsWith("<!doctype html>"));
    assert.ok(!html.includes("<b>site</b>"), `${t.id} must escape the name`);
  }
});

test("every recipe layout builds, and rearranging keeps the words", () => {
  for (const r of RECIPES) {
    for (const l of r.layouts) {
      const s = buildSection(r.kind, l.id, { title: "My own title", body: "My own words" });
      assert.ok(s.rows > 0 && s.elements.length > 0, `${r.kind}/${l.id}`);
      for (const e of s.elements) assert.ok(e.frame.x >= 0 && e.frame.x + e.frame.w <= 96, `${r.kind}/${l.id} ${e.slot} fits the grid`);
    }
    if (r.layouts.length < 2) continue;
    const s = buildSection(r.kind, r.layouts[0].id, { title: "Kept title", body: "Kept body" });
    // Walk through every layout and back: nothing the person wrote may be lost on the way.
    let cur = s;
    for (let i = 0; i < r.layouts.length; i++) cur = rearrange(cur);
    assert.equal(cur.layout, s.layout, r.kind);
    const before = readContent(s), after = readContent(cur);
    for (const k of ["title", "body", "eyebrow", "cta", "quote", "brand"] as const) assert.equal(after[k], before[k], `${r.kind}: ${k}`);
  }
});

test("validation repairs bad values and rejects foreign files", () => {
  assert.throws(() => validateDoc({ format: "something-else" }));
  const doc = newSite("cafe", { name: "Café" });
  const bad = JSON.parse(JSON.stringify(doc));
  bad.theme.palette.accent = "javascript:alert(1)";
  const el = bad.pages[0].sections[0].elements[0];
  el.style = { ...el.style, color: "red; background:url(x)" };
  bad.pages[0].sections[0].elements.push({ id: "x1", type: "image", src: "https://evil.example/x.png", alt: "", frame: { x: 0, y: 0, w: 10, h: 10 } });
  const ok = validateDoc(bad);
  assert.match(ok.theme.palette.accent, /^#[0-9a-f]{6}$/);
  const img = ok.pages[0].sections[0].elements.find((e) => e.id === "x1");
  assert.equal(img?.type === "image" && img.src, "stock:hills");
});

test("links that could run script never reach the page", () => {
  const doc = newSite(null, { name: "Links" });
  const s = doc.pages[0].sections[0];
  const el = { ...text(undefined, "Click", [0, 0, 10, 4], "body"), link: { kind: "url" as const, value: "javascript:alert(1)" } };
  const html = elementInner(el, ctxFor(doc));
  assert.ok(!html.includes("javascript:"));
  assert.ok(sectionHtml(s, ctxFor(doc)).includes("q-grid"));
});

test("phones read a two-column layout column by column", () => {
  const items = [
    { id: "title", f: { x: 0, y: 10, w: 40, h: 10 } },
    { id: "body", f: { x: 0, y: 22, w: 40, h: 6 } },
    { id: "image", f: { x: 50, y: 4, w: 46, h: 40 } },
  ];
  assert.deepEqual(readingOrder(items), ["title", "body", "image"]);
  // Three cards under a full-width heading: heading, then each card top to bottom.
  const cards = [
    { id: "h", f: { x: 10, y: 2, w: 76, h: 6 } },
    ...[0, 1, 2].flatMap((i) => [{ id: `n${i}`, f: { x: i * 33, y: 12, w: 8, h: 6 } }, { id: `t${i}`, f: { x: i * 33, y: 20, w: 28, h: 4 } }]),
  ];
  assert.deepEqual(readingOrder(cards), ["h", "n0", "t0", "n1", "t1", "n2", "t2"]);
});

test("a box behind elements becomes their card", () => {
  const card = shape("rect", [0, 0, 30, 30], "$surface");
  const inside = text(undefined, "In", [2, 2, 10, 4], "body");
  const outside = text(undefined, "Out", [40, 2, 10, 4], "body");
  const nodes = tree([card, inside, outside]);
  assert.equal(nodes.length, 2);
  assert.equal(nodes[0].children[0].el.id, inside.id);
  assert.equal(phoneOrder(nodes).length, 2);
});

test("document operations", () => {
  let doc = newSite("launch", { name: "Ops" });
  const s = doc.pages[0].sections[1];
  const ids = s.elements.slice(0, 2).map((e) => e.id);
  const dup = duplicateElements(doc, s.id, ids);
  assert.equal(dup.ids.length, 2);
  doc = restack(dup.doc, s.id, [dup.ids[0]], "bottom");
  const sec = doc.pages[0].sections[1];
  assert.equal(sec.elements[0].id, dup.ids[0]);
  doc = align(doc, s.id, [sec.elements[0].id], "center");
  const added = addPage(doc, "About us");
  assert.equal(added.doc.pages.at(-1)!.slug, "about-us");
  const home = makeHome(added.doc, added.id);
  assert.equal(home.pages[0].slug, "index");
  assert.equal(home.pages.filter((p) => p.slug === "index").length, 1);
  assert.equal(removePage(home, home.pages[0].id).pages[0].slug, "index");
});

test("style kits, fonts and widgets are complete", () => {
  for (const k of KITS) {
    const th = themeFromKit(k);
    assert.ok(FONTS.some((f) => f.id === th.fonts.heading) && FONTS.some((f) => f.id === th.fonts.body), k.id);
    assert.ok(["$ink", "$bg"].includes(readableOn("$accent", th)));
  }
  for (const f of FONTS) {
    assert.ok(existsSync(`public${f.file}`), f.file);
    assert.ok(existsSync(`public${f.license}`), f.license);
  }
  for (const w of WIDGETS) assert.ok(w.fields.length > 0 && Object.keys(w.defaults()).length > 0, w.kind);
  assert.match(paletteFrom("#ff5b3a").bg, /^#[0-9a-f]{6}$/);
});

test("the site stylesheet and runtime are self-contained", () => {
  const doc = newSite("gig", { name: "Gig" });
  const css = siteCss(doc, ctxFor(doc)) + pageCss(doc, doc.pages[0], ctxFor(doc));
  assert.ok(!/url\(["']?https?:/.test(css), "no network fonts or images");
  assert.ok(css.includes("@container q"));
  assert.ok(!/fetch\(|XMLHttpRequest|https?:\/\//.test(QUILT_RUNTIME), "runtime makes no requests");
});
