import type { Resource, Values } from './types';
export const escapeHTML = (value: unknown) => String(value ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]!);
export function defaults(resource: Resource): Values {
  return Object.fromEntries(resource.controls.map(c => [c.id, c.default]));
}
export function normalize(resource: Resource, input: Values): Values {
  const result = defaults(resource);
  for (const control of resource.controls) {
    const value = input[control.id];
    if (control.type === 'number' && typeof value === 'number' && Number.isFinite(value)) result[control.id] = Math.max(control.min ?? -Infinity, Math.min(control.max ?? Infinity, value));
    if (control.type === 'select' && typeof value === 'string' && control.options?.includes(value)) result[control.id] = value;
    if (control.type === 'text' && typeof value === 'string') result[control.id] = value.slice(0, 180);
    if (control.type === 'color' && typeof value === 'string' && /^#[a-f\d]{6}$/i.test(value)) result[control.id] = value;
  }
  for (const flag of ['paused', 'reduced']) if (input[flag] === true) result[flag] = true;
  return result;
}
export function embed(resource: Resource, values: Values) {
  const attrs = Object.entries(normalize(resource, values)).map(([key, value]) => typeof value === 'boolean' ? value ? ` ${key}` : '' : ` ${key}="${escapeHTML(value)}"`).join('');
  return `<${resource.tag}${attrs}></${resource.tag}>`;
}
export function bundle(resource: Resource, base: string, body: string) {
  return `/* ${resource.name} — Original Patchwork resource. MIT License. */\n(() => {\n'use strict';\nif (customElements.get('${resource.tag}')) return;\n${base}\n${body}\ncustomElements.define('${resource.tag}', Resource);\n})();\n`;
}
export function documentHTML(resource: Resource, values: Values, script: string, preview = false) {
  const events = resource.events.split(';').map(e => e.trim().split(':')[0]);
  const bridge = preview ? `
const widget = document.querySelector('${resource.tag}');
const send = (type, detail) => parent.postMessage({ namespace: 'patchwork-resource', id: ${JSON.stringify(resource.id)}, type, detail }, '*');
${JSON.stringify(events)}.forEach(name => widget.addEventListener(name, event => send('event', { name, data: event.detail })));
addEventListener('message', event => {
 if (event.source !== parent || event.data?.namespace !== 'patchwork-resource' || event.data.id !== ${JSON.stringify(resource.id)}) return;
 const { type, values } = event.data;
 if (type === 'configure' && values && typeof values === 'object') {
  for (const [key, value] of Object.entries(values)) {
   if (!${JSON.stringify([...resource.controls.map(c => c.id), 'paused', 'reduced'])}.includes(key)) continue;
   if (typeof value === 'boolean') widget.toggleAttribute(key, value); else widget.setAttribute(key, String(value));
  }
 }
 if (type === 'svg' && widget.getSVG) send('svg', widget.getSVG());
});
send('ready', {});` : '';
  const runtime = script.replace(/<\/script/gi, '<\\/script');
  return `<!doctype html>
<html lang="en"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="color-scheme" content="dark light"><title>${escapeHTML(resource.name)}</title>
<style>*,*::before,*::after{box-sizing:border-box}html{min-height:100%;background:${values.theme === 'light' ? '#efeee9' : '#111416'}}body{margin:0;padding:clamp(12px,4vw,36px);min-width:280px;min-height:100vh;display:grid;place-items:center}main{width:100%;max-width:960px;min-width:0}noscript{color:#b1b1b1;font:14px system-ui}</style>
${preview ? '' : '<script src="./component.js" defer></script>'}</head><body><main>${embed(resource, values)}<noscript>Enable JavaScript to use this interactive component.</noscript></main>${preview ? `<script>${runtime}\n${bridge}</script>` : ''}</body></html>`;
}
export function integrationNotes(resource: Resource, values: Values) {
  return `# ${resource.name}\n\n${resource.description}\n\n## Run\nOpen index.html in a current browser. No install, server, build step, fonts, or network required.\n\n## Embed\nLoad component.js once, then use the element anywhere in your HTML:\n\n\`\`\`html\n<script src="./component.js" defer></script>\n${embed(resource, values)}\n\`\`\`\n\nShadow DOM isolates styles. Multiple instances are supported. All data is local; attach events to connect your own application or backend. Example data is supplied to demonstrate behavior.\n\n## Attributes\n${resource.controls.map(c => `- ${c.id}: ${c.type}${c.options ? ' (' + c.options.join(', ') + ')' : ''}${c.type === 'number' ? `, ${c.min}–${c.max}` : ''}; default ${c.default}`).join('\n')}\n- paused, reduced: boolean attributes. Remove the attribute to turn it off. OS reduced motion is also respected.\n\n## API\n${resource.api}\n\nArray data can be assigned as element properties before attachment or after mount. Replacing a data array rebuilds the view and resets its transient interaction state. Treat IDs as stable unique strings.\n\n## Events\n${resource.events}\n\nListen with addEventListener on the custom element. Payloads are available as event.detail. Events bubble across the shadow boundary.\n\n\`\`\`js\nconst widget = document.querySelector('${resource.tag}');\nwidget.addEventListener('${resource.events.split(':')[0]}', event => {\n  console.log(event.detail); // Connect your application here.\n});\n\`\`\`\n\n## React / Vue / Svelte\nUse the custom tag in your markup. Assign structured data and subscribe to events through a DOM ref; remove listeners when your view unmounts. In React TypeScript, declare the custom tag in JSX.IntrinsicElements or create it with document.createElement in a ref-owned container. In Vue, add the pw- prefix to compilerOptions.isCustomElement.\n\n## Styling\nSet accent and theme attributes, and --pw-radius on the element. Exposed parts: surface, button, field (where present). Use ::part without leaking global CSS. Named slots and additional methods are listed in API above.\n\n## Accessibility & lifecycle\nKeyboard controls are built into each component. Dialogs use native modal focus handling. Canvas and motion preserve useful static states when reduced motion is requested. Hidden/offscreen animation stops; listeners, observers, animation frames and timers are released on removal. Verify contrast after changing colors and test with your target assistive technologies.\n\nMIT License — Copyright (c) 2026 Patchwork contributors. See LICENSE.\n`;
}
