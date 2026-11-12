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
import { CellFrame } from "../src/ascii/cells.ts";
import type { AsciiScene } from "../src/ascii/cells.ts";
import { Lotus } from "../src/ascii/lotus.ts";
import { Aurora } from "../src/ascii/aurora.ts";
import { NeonRain } from "../src/ascii/neon.ts";
import { Koi } from "../src/ascii/koi.ts";
import { readFileSync, existsSync } from "node:fs";
import { findBackground, legacyBackgroundIds } from "../src/catalog.ts";

const stubCanvas = () =>
  ({ width: 0, height: 0, getContext: () => new Proxy({}, { get: () => () => {} }) }) as unknown as HTMLCanvasElement;
function run(scene: AsciiScene, seconds: number) {
  const frame = new CellFrame(stubCanvas(), scene.palette);
  frame.resize(1280, 720, 1);
  scene.resize(1280, 720, frame);
  for (let i = 0; i < seconds * 30; i++) scene.step(1 / 30);
  frame.clear();
  scene.render(frame);
  return frame;
}
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
test("each scene fills a varied, finite character field that keeps changing", () => {
  // Lotus and Aurora paint part of their art on a canvas, which the test runner lacks; the rest still runs.
  for (const [make, min, kinds] of [[() => new Lotus("#ff7aa8", 1), 20, 1], [() => new Aurora("#7dff9b", 1), 300, 5], [() => new NeonRain("#ff4fa3", 1), 300, 5], [() => new Koi("#ff7a2f", 1), 300, 5]] as [() => AsciiScene, number, number][]) {
    const scene = make();
    const a = run(scene, 2);
    const first = Array.from(a.code);
    const lit = first.filter(Boolean).length;
    assert.ok(lit > min, `${scene.constructor.name} drew ${lit} cells`);
    assert.ok(Array.from(a.lum).every(Number.isFinite));
    assert.ok(new Set(first.filter(Boolean)).size > kinds, `${scene.constructor.name} uses a range of glyphs`);
    for (let i = 0; i < 45; i++) scene.step(1 / 30);
    a.clear();
    scene.render(a);
    const changed = first.filter((c, i) => c !== a.code[i]).length;
    assert.ok(changed > 10, `${scene.constructor.name} changed ${changed} cells`);
  }
});
test("pointer and click reach every scene without errors", () => {
  for (const scene of [new Lotus("#ff7aa8", 1), new Aurora("#7dff9b", 1), new NeonRain("#ff4fa3", 1), new Koi("#ff7a2f", 1)]) {
    run(scene, 0.5);
    scene.pointer(400, 300, true);
    scene.poke(400, 300);
    for (let i = 0; i < 30; i++) scene.step(1 / 30);
    assert.doesNotThrow(() => run(scene, 0.2));
  }
});
test("the koi swim for food", () => {
  const koi = new Koi("#ff7a2f", 1);
  run(koi, 0.2);
  koi.poke(640, 360);
  const food = () => (koi as unknown as { food: unknown[] }).food.length;
  const before = food();
  for (let i = 0; i < 30 * 25; i++) koi.step(1 / 30);
  assert.ok(food() < before, `food ${before} -> ${food()}`);
});
test("no third-party ASCII code remains", () => {
  assert.equal(existsSync("src/vendor/ascii-sharks"), false);
  assert.equal(existsSync("public/licenses/ascii-sharks-MIT.txt"), false);
  for (const f of ["src/ascii/entry.ts", "src/export.ts", "src/catalog.ts"]) assert.doesNotMatch(readFileSync(f, "utf8"), /ascii-sharks-MIT|vendor\/ascii-sharks/);
});
test("retired ASCII studies open as their replacements", () => {
  for (const [old, next] of Object.entries(legacyBackgroundIds)) {
    assert.equal(findBackground(old)?.id, next);
    const p = createProject("terminal");
    p.sections[0].background = old;
    assert.match(renderSite(p), new RegExp(`data-ascii="${findBackground(old)!.scene}"`));
  }
});
