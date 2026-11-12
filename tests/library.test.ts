import { test } from "node:test";
import assert from "node:assert/strict";
import { existsSync, readFileSync } from "node:fs";
import { shelves, pieces, piecesOn } from "../src/library/catalog";
import { fontsIn, licenseFor, portable } from "../src/library/export";

test("the library has three pieces on each of its first five shelves and four UI kits", () => {
  assert.equal(shelves.length, 6);
  for (const s of shelves) assert.equal(piecesOn(s.id).length, s.id === "kits" ? 4 : 3, s.id);
  assert.equal(new Set(pieces.map((p) => p.id)).size, pieces.length);
});

test("every piece is a self-contained page with its fonts and licences", () => {
  for (const p of pieces) {
    const file = `public/library/${p.id}/index.html`;
    assert.ok(existsSync(file), file);
    const html = readFileSync(file, "utf8");
    assert.match(html, /<title>[^<]+<\/title>/, p.id);
    assert.match(html, /name="viewport"/, p.id);
    // no network: the only absolute URLs allowed are XML namespaces
    const remote = [...html.matchAll(/https?:\/\/[^\s"')]+/g)].map((m) => m[0]).filter((u) => !u.startsWith("http://www.w3.org/"));
    assert.deepEqual(remote, [], p.id);
    const fonts = fontsIn(html);
    assert.ok(fonts.length > 0, p.id);
    for (const f of fonts) {
      assert.ok(existsSync(`public/library/fonts/${f}`), `${p.id}: ${f}`);
      assert.ok(existsSync(`public/library/licenses/${licenseFor(f)}`), `${p.id}: licence for ${f}`);
    }
    assert.doesNotMatch(portable(html), /\.\.\/fonts\//);
    assert.ok(p.palette.length >= 4 && p.inside.length >= 3, p.id);
  }
});

test("the old library is gone", () => {
  for (const old of ["vendor/design-library", "public/design-library", "src/template-library", "src/style-library", "src/color-library", "src/resource-library"]) assert.equal(existsSync(old), false, old);
});
