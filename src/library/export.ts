import JSZip from "jszip";
import { findPiece, pieceUrl } from "./catalog";

/** Font files a piece uses, from its ../fonts/ references. */
export const fontsIn = (html: string) => [...new Set([...html.matchAll(/\.\.\/fonts\/([\w.-]+\.(?:woff2|ttf))/g)].map((m) => m[1]))];
/** The OFL licence file that covers a font file (InstrumentSerif-Italic.woff2 → InstrumentSerif-OFL.txt). */
export const licenseFor = (font: string) => `${font.replace(/\.(woff2|ttf)$/, "").replace(/-Italic$/, "")}-OFL.txt`;
/** The piece's page as it lives in a downloaded folder: fonts next to it instead of one level up. */
export const portable = (html: string) => html.replace(/\.\.\/fonts\//g, "fonts/");

export async function pieceSource(id: string) {
  const res = await fetch(pieceUrl(id));
  if (!res.ok) throw new Error(`Could not load ${id}.`);
  return res.text();
}

/** A folder you can open or drop into any site: index.html, its fonts and their licences. */
export async function exportPiece(id: string) {
  const piece = findPiece(id);
  if (!piece) throw new Error("Unknown piece.");
  const html = await pieceSource(id);
  const zip = new JSZip();
  const root = zip.folder(id)!;
  root.file("index.html", portable(html));
  for (const font of fontsIn(html)) {
    const f = await fetch(`/library/fonts/${font}`);
    if (!f.ok) throw new Error(`Could not package ${font}.`);
    root.file(`fonts/${font}`, await f.blob());
    const l = await fetch(`/library/licenses/${licenseFor(font)}`);
    if (l.ok) root.file(`licenses/${licenseFor(font)}`, await l.text());
  }
  root.file("README.txt", `${piece.name} — ${piece.line}\nFrom the Patchwork Design Library.\n\nOpen index.html in a browser, or copy it into your site. It is one self-contained file: HTML, CSS and a little JavaScript, with no build step, framework or network requests. Fonts sit in fonts/ and are under the SIL Open Font License (see licenses/).\n\nWhat's inside:\n${piece.inside.map((i) => `- ${i}`).join("\n")}\n`);
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}
