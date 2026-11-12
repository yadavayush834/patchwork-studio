import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { normalizeBrand, brandStyle, withBrand, brandFontFiles } from "../src/shell/brand";
import { normalizeScene } from "../src/scenes/catalog";
import { COLLECTIONS } from "../src/shell/collections";

test("brand kit: validated, and only real colours and offered fonts get through", () => {
  const b = normalizeBrand({ name: "  Juniper Studio  ", primary: "#3A7BD5", secondary: "red", font: "Comic Sans" } as never);
  assert.equal(b.name, "Juniper Studio");
  assert.equal(b.primary, "#3a7bd5");
  assert.equal(b.secondary, "#ffc23d");
  assert.equal(b.font, "");
  assert.equal(normalizeBrand({ name: "x".repeat(99) }).name.length, 24);
});
test("brand kit: styles each kind of page, and downloads carry the font", () => {
  const b = normalizeBrand({ primary: "#123456", font: "Syne" });
  assert.match(brandStyle("hero", b), /--accent:#123456/);
  assert.match(brandStyle("hero", b), /--display:"PW Brand"/);
  assert.match(brandStyle("scene", b), /--sx-accent:#123456/);
  assert.match(brandStyle("hero", b, "brand/Syne.woff2"), /url\("brand\/Syne\.woff2"\)/);
  assert.deepEqual(brandFontFiles(b), ["fonts/Syne.woff2", "licenses/Syne-OFL.txt"]);
  assert.equal(brandStyle("hero", null), "");
  assert.equal(withBrand("<head></head>", ""), "<head></head>");
  assert.match(withBrand("<head></head>", "<style>x</style>"), /<style>x<\/style><\/head>/);
});
test("scenes take a safe photo, painted by the runtime through the palette", () => {
  const png = "data:image/png;base64,iVBORw0KGgo=";
  assert.equal(normalizeScene({ image: png }, "kelp").image, png);
  assert.equal(normalizeScene({ image: "data:text/html;base64,PHNj" }, "kelp").image, "");
  const rt = readFileSync("public/scenes/pixel.js", "utf8");
  assert.match(rt, /uImgOn>\.5\?photo\(uv\):scene\(uv,px\)/);
});
test("one shell: every collection is linked, heroes are one collection, ASCII is a page", () => {
  assert.deepEqual(COLLECTIONS.map((c) => c.key), ["heroes", "scenes", "components", "spirits", "ascii", "keepsakes", "motion", "library"]);
  const app = readFileSync("src/App.tsx", "utf8");
  assert.ok(!app.includes("Hero sections II"), "no second hero entry in the studio");
  assert.match(app, /<AsciiPage/);
  assert.match(readFileSync("src/heroes2/gallery.ts", "utf8"), /heroes1/);
  // The pal engine draws custom creatures from the maker.
  assert.match(readFileSync("public/spirits/pals.js", "utf8"), /kind"\) === "custom"/);
});
