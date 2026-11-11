import { test } from 'node:test';
import { strict as assert } from 'node:assert';
import { readFile } from 'node:fs/promises';
import JSZip from 'jszip';

test('Mosslight download contains the current standalone demo and reusable component', async () => {
  const root = new URL('../public/motion/', import.meta.url);
  const zip = await JSZip.loadAsync(await readFile(new URL('mosslight-template.zip', root)));
  for (const name of ['index.html', 'style.css', 'demo.js', 'mosslight.js', 'README.md', 'preview/plain.html', 'fonts/dm-sans.woff2', 'fonts/instrument-serif.woff2', 'fonts/instrument-serif-italic.woff2', 'fonts/DMSans-OFL.txt', 'fonts/InstrumentSerif-OFL.txt']) {
    const entry = zip.file(name);
    assert.ok(entry, `Missing ${name}`);
    assert.deepEqual(await entry.async('nodebuffer'), await readFile(new URL(`mosslight/${name}`, root)), `${name} differs from the live motion template`);
  }
});
