import { test } from "node:test";
import assert from "node:assert/strict";
import {
  grade,
  gridSize,
  orderedOffset,
  studioPresets,
  validateStudioSettings,
} from "../src/video-lab/studio-settings";
import { oklab } from "../src/video-lab/studio-engines";

test("logical art grid remains identical at preview and export sizes for both engines", () => {
  for (const ascii of [true, false])
    for (const cell of [4, 5, 12, 40]) {
      assert.deepEqual(
        gridSize(960, 540, cell, ascii),
        gridSize(1920, 1080, cell, ascii),
      );
      assert.deepEqual(
        gridSize(540, 960, cell, ascii),
        gridSize(1080, 1920, cell, ascii),
      );
    }
});
test("exposure, contrast, and palette distance preserve tonal order", () => {
  assert.equal(grade(0), 0);
  assert.equal(grade(1), 1);
  assert.equal(grade(0.25, 1), 0.5);
  assert.ok(grade(0.25, 0, 1.5) < grade(0.25));
  assert.ok(grade(0.75, 0, 1.5) > grade(0.75));
  assert.ok(oklab([0, 0, 0])[0] < oklab([128, 128, 128])[0]);
  assert.ok(oklab([128, 128, 128])[0] < oklab([255, 255, 255])[0]);
});
test("ordered dither is spatially anchored, zero mean, and controllable", () => {
  let total = 0;
  for (let y = 0; y < 4; y++)
    for (let x = 0; x < 4; x++) {
      total += orderedOffset(x, y, 1);
      assert.equal(orderedOffset(x, y, 1), orderedOffset(x + 4, y + 4, 1));
      assert.ok(Math.abs(orderedOffset(x, y, 0)) === 0);
    }
  assert.equal(total, 0);
});
test("all eight curated engine presets have valid recipe settings", () => {
  for (const presets of Object.values(studioPresets)) {
    assert.equal(presets.length, 4);
    for (const preset of presets)
      assert.doesNotThrow(() => validateStudioSettings(preset.settings));
  }
});
