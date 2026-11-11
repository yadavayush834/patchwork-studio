import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { scenes, normalizeScene, defaultScene } from "../src/scenes/catalog";
import { sceneDocument, sceneFiles } from "../src/scenes/document";
import { scenesRoute } from "../src/scenes/route";

test("scenes: ten distinct living places, each a complete page", () => {
  assert.equal(scenes.length, 10);
  assert.equal(new Set(scenes.map((s) => s.id)).size, 10);
  for (const s of scenes) {
    const html = sceneDocument(s.id);
    assert.match(html, /<h1/);
    assert.match(html, /class="sx-btn/);
    assert.match(html, /data-pixel="4"/);
    assert.match(html, new RegExp(`${s.id}/scene.js`));
    assert.ok(!/https?:\/\//.test(html.replace(/href="#"/g, "")), "no external requests");
    for (const f of sceneFiles(s.id)) assert.ok(existsSync(`public/scenes/${f}`), `${s.id}: missing ${f}`);
    // Every scene answers the pointer and a click, through the shared runtime.
    const src = readFileSync(`public/scenes/${s.id}/scene.js`, "utf8");
    assert.match(src, /PixelScene\(/);
    assert.match(src, /uMouse/);
    assert.match(src, /uClick|st\.click/);
  }
  // Palettes are capped at what the shader can hold.
  for (const s of scenes) {
    const src = readFileSync(`public/scenes/${s.id}/scene.js`, "utf8");
    const pal = src.match(/palette:\s*\[([^\]]*)\]/)![1].match(/#[0-9a-f]{6}/gi)!;
    assert.ok(pal.length >= 1 && pal.length <= 16, `${s.id}: palette size ${pal.length}`);
  }
});
test("scenes runtime respects reduced motion and pauses offscreen", () => {
  const rt = readFileSync("public/scenes/pixel.js", "utf8");
  assert.match(rt, /prefers-reduced-motion/);
  assert.match(rt, /IntersectionObserver/);
  assert.match(rt, /visibilitychange/);
  assert.match(readFileSync("public/scenes/base.css", "utf8"), /prefers-reduced-motion/);
});
test("scenes escape words, refuse unsafe links and only take offered pixel sizes", () => {
  const html = sceneDocument("kelp", { brand: "<b>x</b>", headline: "A <script>b</script> c", eyebrow: "\"q\"", href: "javascript:alert(1)" });
  assert.ok(!html.includes("<script>b") && !html.includes("<b>x</b>"));
  assert.ok(!html.includes("javascript:"));
  assert.equal(normalizeScene({ href: "//evil.example" }, "kelp").href, "#");
  assert.equal(normalizeScene({ pixel: 99 }, "kelp").pixel, 4);
  assert.equal(normalizeScene({ pixel: 6 }, "kelp").pixel, 6);
  assert.equal(normalizeScene({ headline: "a".repeat(400) }, "riso").headline.length, 60);
  assert.deepEqual(normalizeScene({}, "lanterns"), defaultScene("lanterns"));
  // With the words off, the scene stays a background but keeps an accessible heading.
  const bare = sceneDocument("riso", { text: false });
  assert.match(bare, /sx-bare/);
  assert.match(bare, /class="sx-sr"/);
  assert.ok(!bare.includes("sx-btn"));
});
test("scenes routes stay separate from every hero collection", () => {
  assert.equal(scenesRoute("?collection=scenes"), "gallery");
  assert.equal(scenesRoute("?scene=castle"), null);
  assert.equal(scenesRoute("?collection=heroes2"), null);
  assert.equal(scenesRoute("?hero2=ink"), null);
  for (const s of scenes) assert.equal(scenesRoute(`?scene=${s.id}`), "page");
});

test("scene expansion preserves the original six in order and adds exactly four original places", () => {
  assert.deepEqual(scenes.slice(0, 6).map(s => s.id), ["lastbus", "kelp", "longnight", "rooftops", "riso", "lanterns"]);
  assert.deepEqual(scenes.slice(6).map(s => s.id), ["tidewatch", "cloudline", "glasshouse", "courtyard"]);
  for (const s of scenes.slice(6)) {
    const source = readFileSync(`public/scenes/${s.id}/scene.js`, "utf8");
    assert.match(source, /controls:\s*"[^"]+"/);
    assert.doesNotMatch(source, /piixpal|https?:\/\//i);
    const exported = sceneDocument(s.id, { text: false, pixel: 6 });
    assert.match(exported, /sx-bare/);
    assert.match(exported, /data-pixel="6"/);
    assert.ok(exported.includes(`${s.id}/scene.js`));
  }
});
