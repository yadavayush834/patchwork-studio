import { build } from "esbuild";
import { copyFile, mkdir } from "node:fs/promises";
// One engine, three homes: heroes and scenes are downloaded as plain folders, so each carries its own copy.
await mkdir("public/diorama", { recursive: true });
await build({
  stdin: { contents: 'import { Diorama, screenPoint } from "./src/diorama/engine.ts"; Object.assign(globalThis, { Diorama, dioramaPoint: screenPoint });', resolveDir: ".", loader: "ts" },
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  outfile: "public/diorama/diorama.js",
  banner: { js: "/* Diorama: a painting and its depth map, rendered as a small 3D place. Patchwork Studio, CC0. */" },
});
await copyFile("public/diorama/diorama.js", "public/heroes2/vendor/diorama.js");
await copyFile("public/diorama/diorama.js", "public/scenes/diorama.js");
console.log("Built the Diorama engine.");
