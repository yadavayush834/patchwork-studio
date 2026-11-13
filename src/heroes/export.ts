import JSZip from "jszip";
import { heroFiles } from "./files";
export { heroFiles };
import { heroDocument, heroEmbed } from "./document";
import {
  heroes,
  normalizeConfig,
  type HeroConfig,
  type HeroId,
} from "./catalog";
const sources = import.meta.glob("./*.{ts,css}", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;
export async function exportHero(id: HeroId, input: HeroConfig) {
  const c = normalizeConfig(id, input),
    zip = new JSZip();
  zip.file("index.html", heroDocument(id, c));
  zip.file(
    "config.json",
    JSON.stringify({ version: 1, hero: id, config: c }, null, 2),
  );
  await Promise.all(
    heroFiles.map(async (name) => {
      const response = await fetch(`/heroes/${name}`);
      if (!response.ok)
        throw new Error(`Could not package ${name}. Retry the download.`);
      zip.file(name, await response.blob());
    }),
  );
  for (const [path, source] of Object.entries(sources))
    if (!["./export.ts", "./document.ts", "./standalone.ts"].includes(path))
      zip.file(`source/src/heroes/${path.slice(2)}`, source);
  zip.file(
    "source/package.json",
    JSON.stringify(
      {
        private: true,
        type: "module",
        scripts: { build: "node build.mjs" },
        dependencies: { gsap: "3.14.2" },
        devDependencies: { esbuild: "0.28.2" },
      },
      null,
      2,
    ),
  );
  zip.file(
    "source/build.mjs",
    `import {build} from 'esbuild';import fs from 'node:fs/promises';import path from 'node:path';await build({entryPoints:['src/heroes/runtime.ts'],outfile:'../hero.js',bundle:true,minify:true,format:'iife',target:'es2020',plugins:[{name:'raw',setup(b){b.onResolve({filter:/\\.css\\?raw$/},a=>({path:path.resolve(a.resolveDir,a.path.replace('?raw','')),namespace:'raw'}));b.onLoad({filter:/.*/,namespace:'raw'},async a=>({contents:await fs.readFile(a.path,'utf8'),loader:'text'}));}}]});`,
  );
  zip.file(
    "README.md",
    `# ${heroes.find((h) => h.id === id)!.name}\n\nAn original, one-screen Patchwork hero. Serve this folder with any static HTTP server or static host. No CDN, API key, React, Patchwork installation or network service is needed.\n\n## Use in your site\nLoad hero.js once and insert the element wherever it belongs:\n\n\`\`\`html\n<script src="./hero.js" defer></script>\n${heroEmbed(id, c)}\n\`\`\`\n\nThe element uses Shadow DOM to isolate its styles. The script loads fonts.css relative to its own URL. Keep fonts, licenses and hero.js together. Exposed CSS parts: hero, header, headline, description, action and footer; use ::part to adapt styles. Multiple elements may coexist; offscreen instances stop animating. Default height is 100svh; override the element height to fit a container.\n\n## Customize\nAttributes: scene (facet / undertow / daybreak / lattice / frequency), brand, headline (newlines supported), body, cta, href, accent (six-digit hex), speed and intensity (0.25–1.8). paused and reduced are boolean attributes: remove to disable. OS reduced motion is respected.\n\nWhen href is empty, the primary button changes the artwork. Set href to a real https, mailto, tel or anchor target and cta to your link label to connect your product. No backend, subscription or analytics is implied.\n\nReact/Vue/Svelte: use a DOM ref or the custom tag; set attributes and subscribe to native CustomEvents. TypeScript projects can declare patchwork-hero in JSX.IntrinsicElements or mount document.createElement('patchwork-hero') in a ref-owned container. Vue should allow this tag through isCustomElement.\n\n## Events\nhero-ready: {scene,renderer}, hero-action: {scene,variation}, hero-renderer: fallback details. Events bubble and are composed.\n\n## Source\nOriginal TypeScript, CSS and shaders are in source/src/heroes. To rebuild the runtime: cd source, npm install, npm run build. This rewrites ../hero.js. Customize attributes in index.html without rebuilding.\n\n## Runtime\nAnimation frames stop offscreen, when paused, and on hidden tabs. All observers, WebGL resources, listeners and GSAP timelines are disposed on element removal. The text and actions remain usable if WebGL is unavailable. Canvas visuals are decorative; the headline and buttons are semantic HTML. Test contrast after changing colors.\n\nOriginal scene code/design: MIT License, copyright 2026 Patchwork contributors. GSAP and fonts retain their own notices under licenses/.\n`,
  );
  zip.file(
    "LICENSE",
    'MIT License\n\nCopyright (c) 2026 Patchwork contributors\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n',
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}
export function downloadHero(blob: Blob, name: string) {
  const url = URL.createObjectURL(blob),
    a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}
