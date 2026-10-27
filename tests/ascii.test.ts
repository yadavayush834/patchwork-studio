import "fake-indexeddb/auto";
import test from "node:test";
import assert from "node:assert/strict";
import {
  asciiBackgrounds,
  createProject,
  defaultAscii,
} from "../src/catalog.ts";
import { renderSite } from "../src/render.ts";
import { validateProject } from "../src/storage.ts";
import { jellyCells, galaxyCells, terrainCells } from "../src/ascii/field.ts";
test("four ASCII scenes render with safe defaults, a poster, and editable data", () => {
  assert.equal(asciiBackgrounds.length, 4);
  for (const bg of asciiBackgrounds) {
    const p = createProject("terminal");
    p.sections[0].background = bg.id;
    p.sections[0].ascii = defaultAscii(bg);
    assert.doesNotThrow(() => validateProject(p));
    const html = renderSite(p);
    assert.match(html, new RegExp(`data-ascii="${bg.scene}"`));
    assert.match(html, /pw-ascii-poster/);
    assert.ok(html.includes(bg.preview));
    assert.ok(!html.includes("<video"));
  }
});
test("recorded mode switches to a locally packaged video and retains speed", () => {
  const bg = asciiBackgrounds[0];
  const p = createProject("pixel");
  p.sections[0].background = bg.id;
  p.sections[0].ascii = { ...defaultAscii(bg), mode: "video", speed: 0.5 };
  const html = renderSite(p);
  assert.match(html, /<video/);
  assert.match(html, /data-speed="0.5"/);
  assert.ok(html.includes(bg.source!));
  assert.ok(!html.includes("<canvas"));
});
test("old projects stay valid and invalid ASCII settings do not enter imports", () => {
  const p = createProject("editorial");
  assert.doesNotThrow(() => validateProject(p));
  p.sections[0].ascii = { ...defaultAscii(asciiBackgrounds[0]), speed: 100 };
  assert.throws(() => validateProject(p), /ASCII/);
});
test("original sculptures evolve over time and produce finite, varied glyph fields", () => {
  for (const draw of [jellyCells, galaxyCells, terrainCells]) {
    const a = draw(1, 150, 60, 1),
      b = draw(8, 150, 60, 1);
    assert.ok(a.length > 300);
    assert.ok(
      a.every(
        (c) =>
          Number.isFinite(c.x) &&
          Number.isFinite(c.y) &&
          Number.isFinite(c.light),
      ),
    );
    assert.notDeepEqual(a.slice(0, 100), b.slice(0, 100));
    assert.ok(new Set(a.map((c) => Math.round(c.light * 10))).size > 4);
  }
});
