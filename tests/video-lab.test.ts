import { test } from "node:test";
import assert from "node:assert/strict";
import {
  defaults,
  dimensions,
  families,
  frameTimes,
  gifDelay,
  luminance,
  noise,
  parseRecipe,
  styles,
  validateTrim,
} from "../src/video-lab/catalog";

test("Video Lab has exactly 92 stable, unique style IDs in the approved stages", () => {
  assert.equal(styles.length, 92);
  assert.equal(new Set(styles.map((s) => s.id)).size, 92);
  assert.deepEqual(
    [1, 2, 3].map((stage) => styles.filter((s) => s.stage === stage).length),
    [24, 48, 20],
  );
  assert.deepEqual(
    families.map((f) => styles.filter((s) => s.family === f).length),
    [7, 6, 15, 15, 6, 11, 9, 11, 4, 8],
  );
  assert.equal(styles.filter((s) => s.text).length, 6);
});
test("export dimensions retain portrait/landscape aspect and never upscale ordinary sources", () => {
  assert.deepEqual(dimensions(1920, 1080, 1280), { width: 1280, height: 720 });
  assert.deepEqual(dimensions(1080, 1920, 1280), { width: 720, height: 1280 });
  assert.deepEqual(dimensions(320, 180, 1280), { width: 320, height: 180 });
  assert.deepEqual(dimensions(321, 181, 1280), { width: 320, height: 180 });
});
test("trim boundaries reject nonfinite, reversed, excessive, or out-of-source segments", () => {
  validateTrim(5, 65, 100);
  validateTrim(1, 11, 20, true);
  for (const [start, end, duration] of [
    [-1, 5, 10],
    [5, 4, 10],
    [0, 61, 100],
    [0, 11, 10],
    [NaN, 5, 10],
    [0, Infinity, 10],
  ])
    assert.throws(() => validateTrim(start, end, duration));
  assert.throws(() => validateTrim(0, 10.1, 20, true));
});
test("frame schedule is start-inclusive and end-exclusive without floating point extra frames", () => {
  const times = frameTimes(1, 2, 24);
  assert.equal(times.length, 24);
  assert.equal(times[0], 1);
  assert.ok(times.at(-1)! < 2);
  assert.equal(frameTimes(0.1, 1.1, 12).length, 12);
  assert.equal(
    frameTimes(0, 1, 12).reduce((sum, _, i) => sum + gifDelay(i, 1), 0),
    1000,
  );
});
test("pattern sampling is deterministic and luminance preserves black/white order", () => {
  assert.equal(noise(3, 9, 7), noise(3, 9, 7));
  assert.notEqual(noise(3, 9, 7), noise(3, 9, 8));
  assert.ok(noise(3, 9, 7) >= 0 && noise(3, 9, 7) < 1);
  assert.equal(luminance(0, 0, 0), 0);
  assert.ok(Math.abs(luminance(255, 255, 255) - 1) < 1e-12);
});
test("recipes round-trip safe settings and reject unknown effects or hostile/invalid fields", () => {
  const recipe = {
    version: 1,
    style: "braille",
    settings: defaults("braille"),
    start: 2,
    end: 7,
  };
  assert.deepEqual(parseRecipe(recipe, 10), {
    style: "braille",
    settings: recipe.settings,
    start: 2,
    end: 7,
  });
  for (const invalid of [
    null,
    { ...recipe, version: 2 },
    { ...recipe, style: "script" },
    { ...recipe, settings: { ...recipe.settings, cell: 0 } },
    { ...recipe, settings: { ...recipe.settings, amount: NaN } },
    {
      ...recipe,
      settings: { ...recipe.settings, foreground: "url(javascript:x)" },
    },
    { ...recipe, end: 11 },
  ])
    assert.throws(() => parseRecipe(invalid, 10));
});

test("studio recipes retain new controls, accept legacy settings, and reject malformed fields", () => {
  for (const style of ["ascii-studio", "pixel"]) {
    const recipe = {
      version: 1,
      style,
      settings: defaults(style),
      start: 0,
      end: 1,
    };
    assert.deepEqual(parseRecipe(recipe, 2).settings, recipe.settings);
    for (const bad of [
      { glyphs: "unknown" },
      { palette: "unknown" },
      { exposure: Infinity },
      { contrast: 0 },
      { edge: -1 },
      { dither: 2 },
      { dither: "0.5" },
    ]) {
      assert.throws(() =>
        parseRecipe({ ...recipe, settings: { ...recipe.settings, ...bad } }, 2),
      );
    }
    const legacy = {
      amount: 0.65,
      cell: 12,
      foreground: "#b5f4cb",
      background: "#15121e",
      color: true,
      seed: 7,
    };
    assert.deepEqual(
      parseRecipe({ ...recipe, settings: legacy }, 2).settings,
      legacy,
    );
  }
});
