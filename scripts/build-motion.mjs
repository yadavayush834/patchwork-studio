import { build } from "esbuild";
import { copyFile, mkdir, writeFile } from "node:fs/promises";
await mkdir("public/motion", { recursive: true });
await build({
  entryPoints: ["src/motion/runtime.ts"],
  bundle: true,
  minify: true,
  format: "iife",
  target: "es2022",
  outfile: "public/motion/engine.js",
  legalComments: "eof",
});
await writeFile(
  "public/licenses/gsap-NOTICE.txt",
  "GSAP 3.14.2 / Copyright 2008-2025, GreenSock. All rights reserved.\nDistributed under the GSAP Standard License: https://gsap.com/standard-license/\nOriginal licensing notices are retained in motion/engine.js.\nSource: https://github.com/greensock/GSAP\n",
);
await copyFile("node_modules/three/LICENSE", "public/licenses/three-MIT.txt");
console.log("Built local GSAP + Three.js motion template engine.");
