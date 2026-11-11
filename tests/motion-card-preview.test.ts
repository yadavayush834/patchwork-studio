import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Script } from 'node:vm';
import { motionTemplates } from '../src/motion/catalog';
import { motionCardDocument } from '../src/motion/card-preview-document';

test('every Motion Study gets the same isolated live-tour adapter without replacing its markup', () => {
  for (const site of motionTemplates) {
    const original = `<html><head></head><body><main>${site.id}</main><script src="/motion/engine.js"></script></body></html>`;
    const html = motionCardDocument(site.id, original, 'https://patchwork.example');
    assert.ok(html.includes(`<main>${site.id}</main>`));
    assert.ok(html.includes('src="/motion/engine.js"'));
    const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
    assert.equal(scripts.length, 2);
    for (const script of scripts) new Script(script[1], { filename: `${site.id}-card-tour` });
    assert.ok(html.includes('event.source !== parent'));
    assert.ok(html.includes(`event.data?.id !== "${site.id}"`));
    assert.ok(html.includes('prefers-reduced-motion: reduce'));
    assert.ok(html.includes('cancelAnimationFrame(frame)'));
    assert.ok(html.includes('document.hidden'));
  }
});
