import { mkdir, copyFile, writeFile } from "node:fs/promises";
import JSZip from "jszip";
await mkdir("output/playwright", { recursive: true });
await copyFile(
  "public/assets/ascii/terrain.png",
  "output/playwright/upload.png",
);
const zip = new JSZip();
zip.file("project.json", JSON.stringify({ version: 999 }));
await writeFile(
  "output/playwright/invalid-project.zip",
  await zip.generateAsync({ type: "nodebuffer" }),
);
console.log(
  "Prepared upload image and invalid-import ZIP in output/playwright/.",
);
