import { build } from "esbuild";
await build({
  entryPoints: ["src/ascii/entry.ts"],
  outfile: "src/ascii/runtime.generated.js",
  bundle: true,
  format: "iife",
  target: "es2020",
  minify: true,
  legalComments: "inline",
  banner: {
    js: "/* Patchwork ASCII scenes: original work, CC0. */",
  },
});
console.log("Built self-contained ASCII background runtime.");
