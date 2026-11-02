import { test } from 'node:test';
import assert from 'node:assert/strict';
import { palettesBatch1 } from '../vendor/design-library/src/color-lab/data/palettes-batch1';
import { palettesBatch2 } from '../vendor/design-library/src/color-lab/data/palettes-batch2';
import { extraPalettes } from '../src/color-library/extra-palettes';
import { palettesBatch3 } from '../vendor/design-library/src/color-lab/data/palettes-batch3';

test('each palette has a unique identity and the colors needed to theme the sample site', () => {
  const palettes = [...palettesBatch1, ...palettesBatch2, ...palettesBatch3, ...extraPalettes];
  assert.equal(extraPalettes.length, 50);
  assert.equal(palettes.length, 155);
  assert.equal(new Set(palettes.map((p) => p.id)).size, palettes.length);
  for (const palette of palettes) {
    for (const key of ['background', 'surface', 'surfaceElevated', 'textPrimary', 'textSecondary', 'border', 'primary', 'primaryForeground', 'accent', 'accentForeground', 'buttonPrimary', 'buttonPrimaryText'] as const) {
      assert.match(palette.tokens[key], /^#[\da-f]{6}$/i, `${palette.id}: ${key}`);
    }
  }
});
