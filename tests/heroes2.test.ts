import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { heroes2, normalizeHero2, defaultHero2 } from "../src/heroes2/catalog";
import { hero2Document, hero2Files } from "../src/heroes2/document";
import { heroes2Route } from "../src/heroes2/route";

test("hero sections II: seven distinct heroes, each a complete one-screen page", () => {
  assert.equal(heroes2.length, 7);
  assert.equal(new Set(heroes2.map((h) => h.id)).size, 7);
  assert.equal(new Set(heroes2.map((h) => h.technique)).size, 7, "every hero uses its own technique");
  for (const h of heroes2) {
    const html = hero2Document(h.id);
    assert.match(html, /<h1/);
    assert.match(html, /class="hx-btn/);
    assert.match(html, new RegExp(`${h.id}/hero.js`));
    assert.ok(!/https?:\/\//.test(html.replace(/href="#"/g, "")), "no external requests");
    // Every packaged file exists, so downloads are complete.
    for (const f of hero2Files(h.id)) assert.ok(existsSync(`public/heroes2/${f}`), `${h.id}: missing ${f}`);
    // Reduced motion is respected by every runtime.
    assert.match(readFileSync(`public/heroes2/${h.id}/hero.js`, "utf8"), /prefers-reduced-motion/);
  }
});
test("hero sections II escapes words and refuses unsafe links", () => {
  const html = hero2Document("ink", { brand: "<b>x</b>", headline: "A <script>b</script> c", sub: "\"q\"", cta: "Go", cta2: "More", href: "javascript:alert(1)" });
  assert.ok(!html.includes("<script>b") && !html.includes("<b>x</b>"));
  assert.ok(!html.includes("javascript:"));
  assert.equal(normalizeHero2({ href: "//evil.example" }, "ink").href, "#");
  assert.equal(normalizeHero2({ href: "https://ok.example" }, "ink").href, "https://ok.example");
  assert.equal(normalizeHero2({ headline: "a".repeat(400) }, "mercury").headline.length, 60);
  assert.deepEqual(normalizeHero2({}, "breath"), defaultHero2("breath"));
});
test("hero sections II routes stay separate from the first hero section", () => {
  assert.equal(heroes2Route("?collection=heroes2"), "gallery");
  assert.equal(heroes2Route("?hero2=lowtide"), "page");
  assert.equal(heroes2Route("?hero2=nope"), null);
  assert.equal(heroes2Route("?collection=heroes"), null);
  assert.equal(heroes2Route("?hero=mercury"), null);
});
test("hero sections II route list matches the catalog", () => {
  for (const h of heroes2) assert.equal(heroes2Route(`?hero2=${h.id}`), "page");
});
test("hero sections: any hero takes only a safe picture of your own", () => {
  const png = "data:image/png;base64,iVBORw0KGgo=";
  assert.equal(normalizeHero2({ image: png }, "dots").image, png);
  // Every hero takes a picture now: Specimen builds itself from it, the others get a dot-art layer.
  assert.equal(normalizeHero2({ image: png }, "prism").image, png);
  assert.match(hero2Document("prism", { image: png }), /class="hx-dotphoto"[^>]*data-image=/);
  assert.match(hero2Document("prism", { image: png }), /dotphoto\.js/);
  assert.ok(!hero2Document("prism").includes("dotphoto"));
  assert.equal(normalizeHero2({ image: "data:text/html;base64,PHNjcmlwdD4=" }, "dots").image, "");
  assert.equal(normalizeHero2({ image: 'data:image/png;base64,AA"><script>' }, "dots").image, "");
  assert.equal(normalizeHero2({ image: "data:image/png;base64," + "A".repeat(800_000) }, "dots").image, "");
  assert.match(hero2Document("dots", { image: png }), /data-image="data:image\/png;base64,iVBORw0KGgo="/);
  assert.ok(!hero2Document("dots").includes("data-image"));
});
