import JSZip from 'jszip';
import { documentHTML, integrationNotes, normalize } from './portable';
import { sourceFor } from './resources';
import type { Resource, Values } from './types';
const license = `MIT License\n\nCopyright (c) 2026 Patchwork contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n`;
export async function resourceZip(resource: Resource, input: Values) {
  const values = normalize(resource, input), zip = new JSZip();
  zip.file('index.html', documentHTML(resource, values, ''));
  zip.file('component.js', sourceFor(resource));
  zip.file('README.md', integrationNotes(resource, values));
  zip.file('resource.json', JSON.stringify({ ...resource, values }, null, 2));
  zip.file('LICENSE', license);
  return zip.generateAsync({ type: 'blob', compression: 'DEFLATE' });
}
export function saveFile(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob), link = document.createElement('a');
  link.href = url; link.download = name; link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
