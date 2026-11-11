import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { components, normalizeComponent, defaultComponent, componentAttributes } from "../src/components/catalog";
import { componentDocument, componentFiles, componentSnippet, componentTag } from "../src/components/document";
import { componentsRoute } from "../src/components/route";

test("components: six characters, each with its own job and a working demo page", () => {
  assert.equal(components.length, 6);
  assert.equal(new Set(components.map((c) => c.id)).size, 6);
  assert.equal(new Set(components.map((c) => c.job)).size, 6, "every component does a different job");
  for (const c of components) {
    const html = componentDocument(c.id);
    assert.match(html, new RegExp(`<${c.tag}[ >]`), `${c.id}: demo uses the tag`);
    assert.match(html, /kit\.js/);
    assert.match(html, new RegExp(`${c.id}\\.js`));
    assert.ok(!/(src|href)="https?:\/\//.test(html), "no external requests");
    for (const f of componentFiles(c.id)) assert.ok(existsSync(`public/components/${f}`), `${c.id}: missing ${f}`);
    const src = readFileSync(`public/components/${c.id}.js`, "utf8");
    assert.match(src, new RegExp(`customElements\\.define\\("${c.tag}"`), `${c.id}: defines its element`);
    assert.match(src, /PW\.reduced/, `${c.id}: has a reduced-motion path`);
    // The snippet is exactly what a site needs: the kit, the component, and the tag.
    const snip = componentSnippet(c.id);
    assert.match(snip, /components\/kit\.js/);
    assert.match(snip, new RegExp(`components/${c.id}\\.js`));
    assert.match(snip, new RegExp(`<${c.tag}`));
  }
});
test("components: the shared kit pauses offscreen work and announces to screen readers", () => {
  const kit = readFileSync("public/components/kit.js", "utf8");
  assert.match(kit, /prefers-reduced-motion/);
  assert.match(kit, /aria-live/);
  assert.match(kit, /pointerEvents: "none"/, "the stage never blocks clicks");
  // Jobs that need real controls get real controls.
  assert.match(readFileSync("public/components/kite.js", "utf8"), /aria-label", "Back to top"/);
  assert.match(readFileSync("public/components/mimeo.js", "utf8"), /<button type="button">/);
  assert.match(readFileSync("public/components/cocoon.js", "utf8"), /"progressbar"/);
  assert.match(readFileSync("public/components/postie.js", "utf8"), /"invalid"/);
});
test("components: options are validated and escaped", () => {
  assert.equal(normalizeComponent({ color: "red;}" }, "kite").color, "#ff5a5f");
  assert.equal(normalizeComponent({ color: "#3A7BD5" }, "kite").color, "#3a7bd5");
  assert.equal(normalizeComponent({ threshold: "99999" }, "kite").threshold, "2000");
  assert.equal(normalizeComponent({ threshold: "abc" }, "kite").threshold, "600");
  assert.equal(normalizeComponent({ replay: "always" }, "lamplighter").replay, "once");
  assert.equal(normalizeComponent({ unknown: "x" } as Record<string, string>, "mimeo").unknown, undefined);
  assert.deepEqual(normalizeComponent({}, "postie"), defaultComponent("postie"));
  const tag = componentTag("postie", { message: '"><script>alert(1)</script>' });
  assert.ok(!tag.includes("<script>") && tag.includes("&quot;&gt;"));
  const html = componentDocument("lamplighter", { headline: "<img src=x onerror=alert(1)>" });
  assert.ok(!html.includes("<img src=x"));
  // Unchanged colours and numbers stay off the tag; words are always written out.
  assert.deepEqual(componentAttributes("kite", {}), []);
  assert.deepEqual(componentAttributes("cocoon", {}), [["label", "Uploading 12 photos"]]);
});
test("components routes stay separate from scenes and heroes", () => {
  assert.equal(componentsRoute("?collection=components"), "gallery");
  assert.equal(componentsRoute("?collection=scenes"), null);
  assert.equal(componentsRoute("?component=nope"), null);
  for (const c of components) assert.equal(componentsRoute(`?component=${c.id}`), "page");
});
