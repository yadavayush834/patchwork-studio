import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";
import {
  heroes,
  defaultConfig,
  normalizeConfig,
  safeHref,
} from "../src/heroes/catalog";
import {
  heroDocument,
  heroEmbed,
  standaloneHero,
} from "../src/heroes/document";
test("five distinct hero scenes ship local runtime, source and licensed fonts", () => {
  assert.deepEqual(
    heroes.map((h) => h.id),
    ["facet", "undertow", "daybreak", "lattice", "frequency"],
  );
  assert.equal(new Set(heroes.map((h) => h.medium)).size, 5);
  for (const h of heroes) {
    const c = defaultConfig(h.id);
    assert.ok(c.headline.includes("\n"));
    assert.ok(existsSync(`public/heroes/fonts/${h.font}.ttf`));
    assert.match(
      readFileSync(`public/heroes/licenses/${h.font}-OFL.txt`, "utf8"),
      /SIL OPEN FONT LICENSE/i,
    );
    const document = heroDocument(h.id, c);
    assert.match(document, /<patchwork-hero scene=/);
    assert.match(document, /src="\.\/hero.js"/);
    assert.doesNotMatch(document, /iframe|https?:\/\/[^" ]+\.(?:js|css)/);
    assert.match(document, /height:100svh/);
    assert.match(document, /overflow:hidden/);
  }
  assert.ok(readFileSync("public/heroes/hero.js").length > 20000);
});
test("hero configuration limits text/numbers, escapes markup and blocks executable targets", () => {
  const config = normalizeConfig("facet", {
    brand: "A".repeat(100),
    headline: "<img src=x onerror=alert(1)>",
    href: "javascript:alert(1)",
    speed: Infinity,
    intensity: 1e8,
    accent: "red; background:url(x)",
  });
  assert.equal(config.brand.length, 28);
  assert.equal(config.href, "");
  assert.equal(config.speed, 1);
  assert.equal(config.intensity, 1.8);
  assert.equal(config.accent, defaultConfig("facet").accent);
  assert.doesNotMatch(heroEmbed("facet", config), /<img/);
  assert.match(heroEmbed("facet", config), /&lt;img/);
  assert.equal(
    safeHref("https://example.com/work"),
    "https://example.com/work",
  );
  assert.equal(
    safeHref("mailto:studio@example.com"),
    "mailto:studio@example.com",
  );
  assert.equal(safeHref("data:text/html,test"), "");
  assert.equal(safeHref("https://example.com/\nfoo"), "");
  assert.ok(
    heroEmbed("facet", { ...config, reduced: true }).includes(" reduced"),
  );
  assert.ok(
    !heroEmbed("facet", { ...config, reduced: false }).includes(" reduced"),
  );
});
test("hero standalone routes are explicit and do not hijack normal studio collections", () => {
  assert.equal(standaloneHero("?view=hero&hero=facet"), "facet");
  assert.equal(standaloneHero("?collection=heroes&hero=facet"), null);
  assert.equal(standaloneHero("?view=hero&hero=unknown"), null);
  assert.equal(standaloneHero("?view=motion&motion=aether"), null);
});
test("preview messages target the real parent origin and verify source and hero identity", () => {
  const doc = heroDocument(
    "facet",
    defaultConfig("facet"),
    "https://patchwork.example/heroes/",
    true,
  );
  assert.ok(doc.includes("event.source!==parent"));
  assert.ok(doc.includes('event.origin!=="https://patchwork.example"'));
  assert.ok(doc.includes("event.data.id!=='facet'"));
  assert.doesNotMatch(doc, /\},location.origin/);
});
