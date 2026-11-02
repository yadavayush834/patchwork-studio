import lightkeeperCSS from "./lightkeeper.css?raw";
import glyphCSS from "./glyph-studies.css?raw";
import imageStudiesCSS from "./image-studies.css?raw";
import studiesCSS from "./studies.css?raw";
import templateCSS from "./template.css?raw";
import { renderMotion } from "./templates";
import {
  normalizeMotionConfig,
  type MotionId,
  type MotionConfig,
} from "./catalog";
const fonts = [
  "DMSans",
  "Outfit",
  "SpaceGrotesk",
  "SpaceMono",
  "PlayfairDisplay",
  "Caveat",
  "Silkscreen",
] as const;
const familyNames = [
  "DM Sans",
  "Outfit",
  "Space Grotesk",
  "Space Mono",
  "Playfair Display",
  "Caveat",
  "Silkscreen",
];
const escape = (s: string) =>
  s.replace(
    /[&<>"']/g,
    (c) =>
      ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[
        c
      ]!,
  );
export function motionCSS(base = "") {
  return (
    fonts
      .map(
        (f, i) =>
          `@font-face{font-family:'${familyNames[i]}';src:url('${base}fonts/${f}.ttf') format('truetype');font-weight:100 900;font-display:swap}`,
      )
      .join("\n") +
    "\n" +
    templateCSS +
    "\n" +
    studiesCSS +
    "\n" +
    imageStudiesCSS + "\n" + glyphCSS + "\n" + lightkeeperCSS
  );
}
export function motionDocument(
  id: MotionId,
  config: Partial<MotionConfig>,
  preview = false,
) {
  const c = normalizeMotionConfig(config, id);
  const base = preview ? `${location.origin}/` : "";
  return `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escape(c.headline)} — an independent motion concept."><title>${escape(c.brand)} — ${escape(c.headline)}</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='51' font-size='52'%3E✳%3C/text%3E%3C/svg%3E">${preview ? `<style>${motionCSS(base)}</style>` : '<link rel="stylesheet" href="styles.css">'}<script defer src="${base}motion/engine.js"></script></head><body>${renderMotion(id, c)}</body></html>`;
}
export { fonts as motionFonts };
