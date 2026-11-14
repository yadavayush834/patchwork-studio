import { runInNewContext } from "node:vm";
import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { scenes, normalizeScene, defaultScene, isDioramaScene, isTitleCardScene } from "../src/scenes/catalog";
import { sceneDocument, sceneFiles } from "../src/scenes/document";
import { scenesRoute } from "../src/scenes/route";

test("scenes: sixteen distinct living places, each a complete page", () => {
  assert.equal(scenes.length, 16);
  assert.equal(new Set(scenes.map((s) => s.id)).size, 16);
  for (const s of scenes) {
    const html = sceneDocument(s.id);
    assert.match(html, /<h1/);
    assert.match(html, /class="sx-btn/);
    assert.match(html, new RegExp(`data-pixel="${isDioramaScene(s.id) ? 0 : 4}"`));
    assert.match(html, new RegExp(`${s.id}/scene.js`));
    assert.ok(!/https?:\/\//.test(html.replace(/href="#"/g, "")), "no external requests");
    for (const f of sceneFiles(s.id)) assert.ok(existsSync(`public/scenes/${f}`), `${s.id}: missing ${f}`);
    // Every scene answers the pointer and a click, through the shared runtime.
    const src = readFileSync(`public/scenes/${s.id}/scene.js`, "utf8");
    if (isDioramaScene(s.id)) { assert.match(src, /DioramaScene\(/); assert.match(src, /onClick/); continue; }
    assert.match(src, /PixelScene\(/);
    assert.match(src, /uMouse/);
    assert.match(src, /uClick|st\.click/);
  }
  // Palettes are capped at what the shader can hold.
  for (const s of scenes.filter((x) => !isDioramaScene(x.id))) {
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
  assert.deepEqual(scenes.slice(6, 10).map(s => s.id), ["tidewatch", "cloudline", "glasshouse", "courtyard"]);
  for (const s of scenes.slice(6, 10)) {
    const source = readFileSync(`public/scenes/${s.id}/scene.js`, "utf8");
    assert.match(source, /controls:\s*"[^"]+"/);
    assert.doesNotMatch(source, /piixpal|https?:\/\//i);
    const exported = sceneDocument(s.id, { text: false, pixel: 6 });
    assert.match(exported, /sx-bare/);
    assert.match(exported, /data-pixel="6"/);
    assert.ok(exported.includes(`${s.id}/scene.js`));
  }
});

test("painted scenes: a generated painting and its depth map in pixels, with working controls", () => {
  assert.deepEqual(scenes.slice(10, 13).map((s) => s.id), ["onsen", "arcade", "skyisle"]);
  const engine = readFileSync("public/scenes/diorama.js", "utf8");
  assert.match(engine, /prefers-reduced-motion/);
  assert.match(engine, /IntersectionObserver/);
  assert.match(engine, /visibilitychange/);
  const shared = readFileSync("public/scenes/diorama-scene.js", "utf8");
  assert.match(shared, /data(set)?\.?pixel/i);
  assert.match(shared, /Pause motion/);
  for (const s of scenes.slice(10)) {
    assert.ok(isDioramaScene(s.id));
    const html = sceneDocument(s.id, { pixel: 5 });
    assert.match(html, /diorama\.js/);
    assert.doesNotMatch(html, /pixel\.js/);
    assert.match(html, /data-pixel="5"/);
    for (const f of sceneFiles(s.id)) assert.ok(existsSync(`public/scenes/${f}`), `${s.id}: missing ${f}`);
    assert.match(readFileSync(`public/scenes/${s.id}/scene.js`, "utf8"), /action: "[^"]+"/);
  }
});

test("title-card scenes paint the headline into the picture and keep it in the page", () => {
  const cards = scenes.filter((s) => isTitleCardScene(s.id)).map((s) => s.id);
  assert.deepEqual(cards, ["hayfield", "aquarium", "nighttrain"]);
  const engine = readFileSync("src/diorama/engine.ts", "utf8");
  assert.match(engine, /setTitle\(/);
  assert.match(engine, /uTitleP/);
  const runtime = readFileSync("public/scenes/titlecard.js", "utf8");
  assert.match(runtime, /prefers-reduced-motion/);
  assert.match(runtime, /Skip intro/);
  assert.match(runtime, /Escape/);
  for (const id of cards) {
    const html = sceneDocument(id, { headline: "Our <b>Film</b>" });
    // the words stay real text for search and screen readers
    assert.match(html, /<h1 class="sx-title sx-sr">Our &lt;b&gt;Film&lt;\/b&gt;<\/h1>/);
    assert.match(html, /titlecard\.js/);
    assert.ok(sceneFiles(id).includes("titlecard.js"));
    const src = readFileSync(`public/scenes/${id}/scene.js`, "utf8");
    assert.match(src, /title: \{ depth:/);
    assert.match(src, /TitleCard\(/);
    // with the words off there is no title card at all
    assert.doesNotMatch(sceneDocument(id, { text: false }), /class="sx-title/);
  }
});


test("painted scene runtime keeps full detail by default and preserves optional pixelation", () => {
  const runtime = readFileSync("public/scenes/diorama-scene.js", "utf8");
  for (const id of ["onsen", "arcade", "skyisle", "hayfield", "aquarium", "nighttrain"] as const) {
    assert.equal(normalizeScene({}, id).pixel, 0);
    assert.equal(normalizeScene({ pixel: 0 }, id).pixel, 0);
    for (const pixel of [0, 4, undefined]) {
      const canvas = { style: { imageRendering: "pixelated" } };
      const element = () => ({ setAttribute() {}, addEventListener() {}, append() {} });
      const root = { ...element(), dataset: { scene: id, pixel }, querySelector: () => canvas };
      let options: any;
      const window: any = { Diorama: true };
      runInNewContext(runtime, {
        window,
        document: { querySelector: () => root, currentScript: { src: `http://localhost/scenes/${id}/scene.js` }, createElement: element },
        Diorama: class { constructor(_canvas: unknown, opts: unknown) { options = opts; } },
      });
      window.DioramaScene({ action: "Activate" });
      assert.equal(options.pixel, pixel === 4 ? 4 : 0);
      assert.equal(canvas.style.imageRendering, pixel === 4 ? "pixelated" : "auto");
      assert.equal(options.color, `http://localhost/scenes/${id}/painting.webp`);
    }
  }
  assert.equal(normalizeScene({ pixel: 0 }, "kelp").pixel, 4);
});
