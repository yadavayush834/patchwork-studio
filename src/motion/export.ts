import { imageMotionAssets } from "./image-assets";
import JSZip from "jszip";
import { motionCSS, motionDocument, motionFonts } from "./document";
import type { MotionId, MotionConfig } from "./catalog";
export async function exportMotion(id: MotionId, config: MotionConfig) {
  const zip = new JSZip();
  zip.file("index.html", motionDocument(id, config));
  zip.file("styles.css", motionCSS());
  const files = [
    "/motion/engine.js",
    ...imageMotionAssets(id).map((path) => `/${path}`),
    ...motionFonts.map((f) => `/fonts/${f}.ttf`),
    ...motionFonts.map((f) => `/licenses/${f}-OFL.txt`),
    "/licenses/gsap-NOTICE.txt",
    "/licenses/three-MIT.txt",
  ];
  await Promise.all(
    files.map(async (path) => {
      const response = await fetch(path);
      if (!response.ok)
        throw new Error(`Could not package ${path}. Please try again.`);
      zip.file(path.slice(1), await response.blob());
    }),
  );
  zip.file(
    "recipe.json",
    JSON.stringify({ version: 1, template: id, config }, null, 2),
  );
  zip.file(
    "README.txt",
    `${config.brand} — Motion template\n\nExtract the complete ZIP. Serve this folder with any static HTTP server, or upload the folder to your static host. No account, API key, CDN, build step, or Patchwork server is required. All fonts and the GSAP + Three.js engine are local.\n\nEdit text and contact details in index.html. Change --accent on .mt-page to customize the accent. Keep existing classes and data attributes to preserve the animation choreography. The current configuration is recorded in recipe.json for reference. This is an independent template, not a Patchwork section document.\n\nUse a modern WebGL-capable browser for the 3D scenes. A graphic fallback remains when WebGL is unavailable. Reduced-motion mode removes pinned/scrubbed choreography and displays the story in reading order.\n\nGSAP, Three.js and fonts retain their respective notices in licenses/. Original template design and procedural 3D assets: Patchwork Studio. Reverie and Traverse use original ChatGPT-generated artwork; their prompts and generation provenance are included in motion/art/*-artwork.json. Concept copy does not represent a real product, business, or customer.\n`,
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}
