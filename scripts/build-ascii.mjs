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
    js: "/* ASCII sharks portions: Copyright (c) 2026 drewdi, MIT. See licenses/ascii-sharks-MIT.txt. Patchwork original scenes: CC0. */",
  },
});
console.log("Built self-contained ASCII background runtime.");
