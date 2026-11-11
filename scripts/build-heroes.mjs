import { build } from "esbuild";
import { copyFileSync, mkdirSync } from "node:fs";
mkdirSync("public/heroes/licenses", { recursive: true });
await build({
  entryPoints: ["src/heroes/runtime.ts"],
  outfile: "public/heroes/hero.js",
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2020",
  loader: { ".css": "text" },
  plugins: [
    {
      name: "raw-css",
      setup(build) {
        build.onResolve({ filter: /\.css\?raw$/ }, (args) => ({
          path: new URL("../src/heroes/hero.css", import.meta.url).pathname,
          namespace: "raw-css",
        }));
        build.onLoad({ filter: /.*/, namespace: "raw-css" }, async (args) => ({
          contents: await (
            await import("node:fs/promises")
          ).readFile(args.path, "utf8"),
          loader: "text",
        }));
      },
    },
  ],
  legalComments: "inline",
});
copyFileSync(
  "public/licenses/gsap-NOTICE.txt",
  "public/heroes/licenses/gsap-NOTICE.txt",
);
console.log("Built five independent, reusable hero compositions.");
