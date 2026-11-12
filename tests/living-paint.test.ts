import "fake-indexeddb/auto";
import test from "node:test";
import assert from "node:assert/strict";
import { createProject, defaultAscii, findBackground } from "../src/catalog.ts";
import { renderSite } from "../src/render.ts";
import { assetIds, validateProject } from "../src/storage.ts";
import { daylightAt, NIGHT, PREVIEW_HOURS } from "../src/ascii/daylight.ts";
import { CellFrame } from "../src/ascii/cells.ts";
import type { AsciiScene } from "../src/ascii/cells.ts";
import { Paint } from "../src/ascii/paint.ts";
import { Lotus } from "../src/ascii/lotus.ts";
import { Aurora } from "../src/ascii/aurora.ts";
import { NeonRain } from "../src/ascii/neon.ts";
import { Koi } from "../src/ascii/koi.ts";

const stubCanvas = () =>
  ({ width: 0, height: 0, getContext: () => new Proxy({}, { get: () => () => {} }) }) as unknown as HTMLCanvasElement;

test("the visitor's clock maps to dawn, day, dusk and night", () => {
  assert.equal(daylightAt(6.5).part, "dawn");
  assert.equal(daylightAt(13).part, "day");
  assert.equal(daylightAt(19.5).part, "dusk");
  assert.equal(daylightAt(23.5).part, "night");
  assert.equal(daylightAt(3).part, "night");
  for (const [part, hour] of Object.entries(PREVIEW_HOURS)) assert.equal(daylightAt(hour).part, part);
  assert.ok(daylightAt(13).night < 0.05 && daylightAt(1).night > 0.95);
  assert.ok(daylightAt(19.5).twilight > 0.9 && daylightAt(13).twilight < 0.05);
  // hours wrap and stay finite
  for (const h of [-5, 0, 24, 47.25]) assert.ok(Number.isFinite(daylightAt(h).night));
});

test("a living site carries its clock hook, and only the editor fixes an hour", () => {
  const p = createProject("pixel");
  assert.doesNotMatch(renderSite(p), /data-living|pw-sky/);
  p.living = true;
  const exported = renderSite(p);
  assert.match(exported, /data-living="true"/);
  assert.doesNotMatch(exported, /data-hour/);
  assert.equal(exported.match(/class="pw-sky"/g)?.length, p.sections.filter((s) => s.visible).length);
  const previewed = renderSite(p, { hour: PREVIEW_HOURS.dusk });
  assert.match(previewed, /data-hour="19.5" data-daypart="dusk"/);
  assert.doesNotThrow(() => validateProject(p));
  assert.throws(() => validateProject({ ...p, living: "yes" }), /settings/);
});

test("Your painting renders live from the uploaded picture, inline for exports", () => {
  const bg = findBackground("ascii-paint")!;
  assert.equal(bg.scene, "paint");
  assert.equal(bg.source, undefined, "a painting has no recorded loop");
  const p = createProject("terminal");
  p.sections[0].background = bg.id;
  p.sections[0].ascii = { ...defaultAscii(bg), mode: "video", image: "asset:abc-123" };
  assert.deepEqual(assetIds(p), ["asset:abc-123"]);
  assert.doesNotThrow(() => validateProject(p));
  const editor = renderSite(p, { assetUrls: { "asset:abc-123": "blob:x/1" } });
  assert.match(editor, /data-ascii="paint" data-image="blob:x\/1"/);
  assert.ok(!editor.includes("<video"), "paintings are always live");
  assert.match(editor, /pw-ascii-poster" style="background-image:url\('blob:x\/1'\)/);
  const exported = renderSite(p, {
    assetUrls: { "asset:abc-123": "assets/uploads/abc-123.png" },
    pixelUrls: { "asset:abc-123": "data:image/png;base64,AAAA" },
  });
  assert.match(exported, /data-image="data:image\/png;base64,AAAA"/);
  assert.match(exported, /url\('assets\/uploads\/abc-123.png'\)/);
  // a painting reference must be a stored asset, nothing else
  p.sections[0].ascii.image = "javascript:alert(1)";
  assert.throws(() => validateProject(p), /ASCII/);
});

test("every scene hears the time of day and keeps drawing", () => {
  const make: (() => AsciiScene)[] = [
    () => new Paint("#ffd08a", 1),
    () => new Lotus("#ff7aa8", 1),
    () => new Aurora("#7dff9b", 1),
    () => new NeonRain("#ff4fa3", 1),
    () => new Koi("#ff7a2f", 1),
  ];
  for (const m of make) {
    for (const hour of [6.5, 13, 19.5, 23.5]) {
      const scene = m();
      assert.equal(typeof scene.daylight, "function", `${scene.constructor.name} follows the clock`);
      const frame = new CellFrame(stubCanvas(), scene.palette);
      frame.resize(1280, 720, 1);
      scene.resize(1280, 720, frame);
      scene.daylight!(daylightAt(hour));
      for (let i = 0; i < 20; i++) scene.step(1 / 30);
      scene.pointer(400, 300, true);
      scene.poke(400, 300);
      frame.clear();
      assert.doesNotThrow(() => scene.render(frame));
      assert.ok(Array.from(frame.lum).every(Number.isFinite));
      assert.ok(Number.isFinite(frame.bloom));
    }
  }
  assert.equal(NIGHT.part, "night");
});

test("neon signs mostly switch off by day and all light up at night", () => {
  const lit = (hour: number) => {
    const scene = new NeonRain("#ff4fa3", 1);
    const frame = new CellFrame(stubCanvas(), scene.palette);
    frame.resize(1280, 720, 1);
    scene.resize(1280, 720, frame);
    scene.daylight(daylightAt(hour));
    scene.step(1 / 30);
    frame.clear();
    scene.render(frame);
    return Array.from(frame.lum).filter((l) => l > 0.5).length;
  };
  assert.ok(lit(23.5) > lit(13) * 1.3, `night ${lit(23.5)} vs day ${lit(13)}`);
});
