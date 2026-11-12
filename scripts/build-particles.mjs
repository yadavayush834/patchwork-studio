import { build } from "esbuild";
// Particle heroes are written in TypeScript with three.js; each is bundled into its own hero.js so a
// downloaded hero stays a plain folder with no build step.
for (const [src, out] of [["src/particles/runner.ts", "public/heroes2/runner/hero.js"], ["src/particles/owl.ts", "public/heroes2/owl/hero.js"]]) {
  try {
    await build({ entryPoints: [src], bundle: true, minify: true, format: "iife", target: "es2020", outfile: out, legalComments: "eof", banner: { js: "/* Patchwork Studio, CC0. Includes three.js (MIT), see licenses/three-MIT.txt */" } });
  } catch (e) { if (!String(e).includes("Could not resolve")) throw e; }
}
console.log("Built the particle heroes.");
