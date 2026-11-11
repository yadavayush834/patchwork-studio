import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { studies, findStudies, studyURL } from '../src/style-library/catalog';
test('style studies preserve all 28 distinct websites, design notes and local covers', () => {
  assert.equal(studies.length, 28);
  assert.equal(new Set(studies.map(s => s.id)).size, 28);
  for (const study of studies) {
    assert.ok(study.name && study.concept && study.typography);
    assert.ok(study.colors.length >= 3, study.id);
    assert.ok(existsSync(`vendor/design-library/${study.source}`), study.id);
    assert.ok(readFileSync(`public/design-library/style-study-covers/${study.id}.jpg`).length > 1000, study.id);
  }
  assert.ok(studies.some(s => s.id === 'swiss'));
  assert.ok(studies.some(s => s.id === 'swiss-grid'));
});
test('style search combines words, family and saved IDs without leaking other collections', () => {
  assert.equal(findStudies('', 'all').length, 28);
  assert.equal(findStudies('  KAELEN  minimalist ', 'all')[0]?.id, 'minimalist');
  const family = studies[0].category;
  assert.ok(findStudies('', family).every(s => s.category === family));
  assert.deepEqual(findStudies('', 'all', ['styles:swiss', 'motion:swiss']).map(s => s.id), ['swiss']);
  assert.equal(findStudies('definitely-no-such-study', 'all').length, 0);
  assert.equal(findStudies('', 'all', []).length, 0);
});
test('preview routes distinguish automatic thumbnail tours and interactive websites', () => {
  assert.equal(studyURL('swiss'), '/design-library/index.html?embedded=1#render/styles/swiss');
  assert.equal(studyURL('swiss', true), '/design-library/index.html?preview=1&embedded=1#render/styles/swiss');
  assert.ok(studyURL('a/b').endsWith('a%2Fb'));
});
