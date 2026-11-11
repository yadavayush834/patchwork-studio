import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { Script } from 'node:vm';
import rawCatalog from '../vendor/design-library/src/resources/catalog.json';
import { bundle, defaults, documentHTML, embed, normalize, integrationNotes } from '../src/resource-library/portable';
import type { Resource } from '../src/resource-library/types';
const resources = rawCatalog as Resource[];
const base = readFileSync('vendor/design-library/src/resources/base.js', 'utf8');
test('the replacement collection ships 25 distinct compilable standalone components', () => {
  assert.deepEqual(['motion', 'svg', 'primitives'].map(kind => resources.filter(r => r.kind === kind).length), [8, 8, 9]);
  assert.equal(new Set(resources.map(r => r.tag)).size, 25);
  for (const resource of resources) {
    const body = readFileSync(`vendor/design-library/${resource.source}`, 'utf8');
    const source = bundle(resource, base, body);
    new Script(source, { filename: resource.id });
    assert.doesNotMatch(source, /(?:import\s|https?:\/\/[^'"\s]*\.(?:js|css))/);
    const html = documentHTML(resource, defaults(resource), '');
    assert.match(html, /src="\.\/component.js" defer/);
    assert.ok(html.includes(`<${resource.tag} `));
    assert.doesNotMatch(html, /iframe|patchwork-resource|https?:\/\//);
    assert.ok(integrationNotes(resource, defaults(resource)).includes(resource.events));
    for (const control of resource.controls) assert.equal(normalize(resource, defaults(resource))[control.id], control.default);
  }
  for (const removed of ['src/experiment-library', 'vendor/design-library/src/motion-lab', 'vendor/design-library/src/svg-lab', 'vendor/design-library/src/experiment-stage', 'vendor/design-library/src/app/components-explorer.tsx']) assert.equal(existsSync(removed), false, removed);
});
test('export configuration clamps numeric inputs, restricts options and escapes authored text', () => {
  const kinetic = resources.find(r => r.id === 'kinetic-type')!;
  const values = normalize(kinetic, { text: '"><script>alert(1)</script>', theme: 'invalid', speed: Infinity, accent: 'red;}' });
  assert.equal(values.theme, 'dark');
  assert.equal(values.speed, defaults(kinetic).speed);
  assert.equal(values.accent, '#c6e6b0');
  assert.ok(embed(kinetic, values).includes('&lt;script&gt;'));
  assert.doesNotMatch(embed(kinetic, values), /<script>/);
  const numeric = kinetic.controls.find(c => c.type === 'number')!;
  assert.equal(normalize(kinetic, {[numeric.id]: 1e6})[numeric.id], numeric.max);
  assert.ok(embed(kinetic, {paused:true}).includes(' paused'));
  assert.ok(!embed(kinetic, {paused:false}).includes(' paused'));
});
test('inline previews safely contain script terminators and authenticate their message source', () => {
  const resource = resources[0];
  const html = documentHTML(resource, defaults(resource), 'console.log("</script><script>bad()");', true);
  assert.equal(html.match(/<\/script>/g)?.length, 1);
  assert.ok(html.includes('<\\/script>'));
  assert.ok(html.includes('event.source !== parent'));
  assert.ok(html.includes("namespace: 'patchwork-resource'"));
});
