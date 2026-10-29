import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync, readdirSync } from "node:fs";
import path from "node:path";
import JSZip from "jszip";
const root = path.resolve(import.meta.dirname, "..");
const vendor = path.join(root, "vendor/design-library");
execFileSync(process.execPath, ["scripts/import-design-library.mjs"], {
  cwd: root,
  stdio: "inherit",
});
if (!existsSync(path.join(vendor, "node_modules/.package-lock.json")))
  execFileSync("npm", ["ci", "--ignore-scripts"], {
    cwd: vendor,
    stdio: "inherit",
  });
execFileSync(process.execPath, ["scripts/prepare-native-templates.mjs"], {
  cwd: root,
  stdio: "inherit",
});
execFileSync("npm", ["run", "build"], {
  cwd: vendor,
  stdio: "inherit",
  env: {
    ...process.env,
    PATCHWORK_LIBRARY_OUTPUT: path.join(root, "public/design-library"),
  },
});
const zip = new JSZip();
function add(dir, relative = "") {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (
      ["node_modules", ".git", "dist"].includes(entry.name) ||
      entry.name.endsWith(".tsbuildinfo")
    )
      continue;
    const name = path.join(relative, entry.name);
    if (entry.isDirectory()) add(path.join(dir, entry.name), name);
    else zip.file(name, readFileSync(path.join(dir, entry.name)));
  }
}
add(vendor);
writeFileSync(
  path.join(root, "public/design-library/library-source.zip"),
  await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }),
);
writeFileSync(
  path.join(root, "public/design-library/catalog.json"),
  readFileSync(path.join(vendor, "src/library-catalog.json")),
);

execFileSync(
  process.execPath,
  [
    path.join(vendor, "node_modules/vite/bin/vite.js"),
    "build",
    "--config",
    "vite.templates.config.ts",
  ],
  {
    cwd: vendor,
    stdio: "inherit",
    env: {
      ...process.env,
      PATCHWORK_TEMPLATE_OUTPUT: path.join(root, "public/template-library"),
    },
  },
);
const templateOutput = path.join(root, "public/template-library");
const assets = readdirSync(path.join(templateOutput, "assets")).map(
  (name) => "assets/" + name,
);
writeFileSync(
  path.join(templateOutput, "bundle.json"),
  JSON.stringify({ assets }, null, 2),
);
const licenses = path.join(templateOutput, "licenses");
const { mkdirSync, copyFileSync } = await import("node:fs");
mkdirSync(licenses, { recursive: true });
for (const [pkg, name] of [
  ["react", "react"],
  ["lucide-react", "lucide"],
  ["tailwindcss", "tailwind"],
  ["three", "three"],
])
  copyFileSync(
    path.join(vendor, "node_modules", pkg, "LICENSE"),
    path.join(licenses, name + "-LICENSE.txt"),
  );

for (const font of ["Outfit", "SpaceGrotesk", "PlayfairDisplay", "SpaceMono"]) {
  copyFileSync(path.join(vendor,"src/redesign/fonts",font+"-OFL.txt"),path.join(licenses,font+"-OFL.txt"));
}
