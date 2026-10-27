import JSZip from "jszip";
import { renderSite, escapeHtml } from "./render";
import { siteRuntime } from "./site-runtime";
import baseCss from "./site.css?raw";
import asciiCss from "./ascii.css?raw";
const siteCss = baseCss + asciiCss;
import { loadAssets, assetIds } from "./storage";
import type { Project } from "./types";
const fontNames = [
  "DMSans",
  "SpaceGrotesk",
  "SpaceMono",
  "Silkscreen",
  "Caveat",
  "PlayfairDisplay",
  "Outfit",
  "LibreBaskerville",
];
export async function exportWebsite(p: Project): Promise<Blob> {
  const zip = new JSZip();
  const urls: Record<string, string> = {};
  const assets = await loadAssets(p);
  if (assets.length !== assetIds(p).length)
    throw new Error(
      "An uploaded asset is missing. Replace it before exporting.",
    );
  for (const a of assets) {
    const ext = a.type.split("/")[1].replace("jpeg", "jpg");
    const path = `assets/uploads/${a.id.slice(6)}.${ext}`;
    urls[a.id] = path;
    zip.file(path, a.blob);
  }
  const html = renderSite(p, { assetUrls: urls });
  const paths = [
    ...new Set(
      [
        ...html.matchAll(/(?:src=\"|url\(')(\/(?:assets|fonts)\/[^\"')]+)/g),
      ].map((m) => m[1]),
    ),
  ];
  const resources = [
    ...paths,
    ...fontNames.map((n) => `/fonts/${n}.ttf`),
    ...fontNames.map((n) => `/licenses/${n}-OFL.txt`),
    "/licenses/ARTWORK.txt",
    "/licenses/ascii-sharks-MIT.txt",
    "/licenses/ASCII-SCENES.txt",
  ];
  await Promise.all(
    resources.map(async (path) => {
      const r = await fetch(path);
      if (!r.ok)
        throw new Error(`Could not bundle ${path}. Try exporting again.`);
      zip.file(path.slice(1), await r.blob());
    }),
  );
  const markup = html.replace(/(["'(])\/(assets|fonts)\//g, "$1$2/");
  zip.file(
    "index.html",
    `<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="description" content="${escapeHtml(p.sections[0]?.body || p.name)}"><title>${escapeHtml(p.name)}</title><link rel="icon" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext y='52' font-size='58'%3E✳%3C/text%3E%3C/svg%3E"><link rel="stylesheet" href="styles.css"></head><body style="margin:0">${markup}<script src="site.js"></script></body></html>`,
  );
  zip.file(
    "styles.css",
    siteCss.replace(/url\((["']?)\/fonts\//g, "url($1fonts/"),
  );
  zip.file("site.js", siteRuntime);
  zip.file(
    "README.txt",
    "Your website is ready. Open index.html in your browser, or upload this folder to any static host. Keep the assets, fonts, and licenses folders alongside index.html. No build, server, or Patchwork account is required.\n",
  );
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}
