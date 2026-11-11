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
import { Starlings } from "../src/ascii/starlings.ts";
import { Fireflies } from "../src/ascii/fireflies.ts";
import { Incense } from "../src/ascii/incense.ts";
import { findBackground, legacyBackgroundIds } from "../src/catalog.ts";

const stubCanvas = () =>
  ({ width: 0, height: 0, getContext: () => new Proxy({}, { get: () => () => {} }) }) as unknown as HTMLCanvasElement;
function run(scene: Starlings | Fireflies | Incense, seconds: number) {
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
test("each original simulation fills a varied, finite character field that keeps changing", () => {
  for (const make of [() => new Starlings("#e9e1ff", 1), () => new Fireflies("#b9f27c", 1), () => new Incense("#9fb4e8", 1)]) {
    const scene = make();
    const a = run(scene, 2);
    const first = Array.from(a.code);
    const lit = first.filter(Boolean).length;
    assert.ok(lit > 300, `${scene.constructor.name} drew ${lit} cells`);
    assert.ok(Array.from(a.lum).every(Number.isFinite));
    assert.ok(new Set(first.filter(Boolean)).size > 8, "uses a range of glyphs");
    for (let i = 0; i < 45; i++) scene.step(1 / 30);
    a.clear();
    scene.render(a);
    const changed = first.filter((c, i) => c !== a.code[i]).length;
    assert.ok(changed > 100, `${scene.constructor.name} changed ${changed} cells`);
  }
});
test("fireflies fall into step with each other over time", () => {
  const scene = new Fireflies("#b9f27c", 1);
  run(scene, 1);
  const early = scene.sync;
  run(scene, 0);
  for (let i = 0; i < 90 * 30; i++) scene.step(1 / 30);
  assert.ok(scene.sync > 0.8 && scene.sync > early + 0.3, `sync ${early.toFixed(2)} -> ${scene.sync.toFixed(2)}`);
});
test("retired ASCII studies open as their replacements", () => {
  for (const [old, next] of Object.entries(legacyBackgroundIds)) {
    assert.equal(findBackground(old)?.id, next);
    const p = createProject("terminal");
    p.sections[0].background = old;
    assert.match(renderSite(p), new RegExp(`data-ascii="${findBackground(old)!.scene}"`));
  }
});
