import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import catalog from '../vendor/design-library/src/library-catalog.json';
import propNames from '../src/experiment-library/prop-names.json';

test('motion and SVG experiments have distinct, locally available components and usable control metadata', () => {
  for (const kind of ['motion', 'svg']) {
    const entries = catalog.entries.filter(entry => entry.kind === kind);
    assert.equal(entries.length, 40);
    assert.equal(new Set(entries.map(entry => entry.originalId)).size, 40);
    for (const entry of entries) {
      assert.ok(entry.source && existsSync(`vendor/design-library/${entry.source}`), entry.id);
      const metadata = entry.metadata as {controlsSchema: {id:string;type:string}[]; defaultControls:Record<string, unknown>};
      const known = (propNames as Record<string, string[]>)[entry.id];
      for (const control of metadata.controlsSchema.filter(control => !known || known.includes(control.id))) {
        assert.ok(Object.hasOwn(metadata.defaultControls, control.id), `${entry.id}: ${control.id} has no default`);
      }
    }
  }
});
