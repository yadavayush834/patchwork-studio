/**
 * Download a Quilt site as a folder that works anywhere: one HTML file per page, a stylesheet, the
 * runtime, and every font, photo, upload, scene and spirit it uses. No network requests at all.
 * Also: the editable project bundle (.quilt.zip) and importing it again.
 */
import JSZip from "jszip";
import type { QuiltDoc, Page, Section } from "./model";
import { pieceDocument, pieceFiles } from "./pieces";
import { href } from "./util";
import { allSections } from "./model";
import { siteCss, pageCss, pageDocument, pageNeeds, usedFonts } from "./render";
import { QUILT_RUNTIME } from "./runtime";
import { font } from "./theme";
import { stock } from "./library/media";
import { getAsset, assetRefs, putAsset } from "./storage";
import { validateDoc } from "./validate";
import { sceneDocument, sceneFiles } from "../scenes/document";
import type { SceneId } from "../scenes/catalog";
import type { RenderCtx } from "./util";

const ext = (type: string) => (type.split("/")[1] || "bin").replace("jpeg", "jpg").replace("svg+xml", "svg").replace(/[^\w]/g, "");
export const pageFile = (p: Page) => (p.slug === "index" ? "index.html" : `${p.slug}.html`);

/** Resolve a picture to a public path ("/quilt/stock/x.webp") or an upload path. */
export function publicPath(src: string): string {
  if (src.startsWith("stock:")) return stock(src.slice(6))?.src ?? "/quilt/stock/hills.webp";
  return src;
}

export async function exportSite(doc: QuiltDoc, fetchFile: (path: string) => Promise<Blob> = defaultFetch): Promise<Blob> {
  const zip = new JSZip();
  const uploads: Record<string, string> = {};
  for (const ref of assetRefs(doc)) {
    const a = await getAsset(ref);
    if (!a) throw new Error("A picture you uploaded is missing from this device. Replace it, then download again.");
    const path = `uploads/${ref.slice(6, 30)}.${ext(a.type)}`;
    uploads[ref] = path;
    zip.file(path, a.blob);
  }
  const files = new Set<string>();
  const ctxFor = (page: Page): RenderCtx => ({
    doc, theme: doc.theme, mode: "export", base: "", pageId: page.id,
    asset: (src) => {
      if (src.startsWith("asset:")) return uploads[src] ?? "";
      const p = publicPath(src);
      files.add(p);
      return p.slice(1);
    },
    scene: (id) => `living/${id}.html`,
    piece: (s) => pieceFile(s),
    page: (id) => pageFile(doc.pages.find((p) => p.id === id) ?? doc.pages[0]),
  });
  const shared = siteCss(doc, ctxFor(doc.pages[0]));
  zip.file("quilt.css", shared);
  zip.file("quilt.js", QUILT_RUNTIME);
  const pieceFile = (s: Section) => `living/piece-${s.id}.html`;
  let pals = false, kite = false;
  const scenes = new Set<string>();
  for (const page of doc.pages) {
    const ctx = ctxFor(page);
    const needs = pageNeeds(doc, page);
    pals ||= needs.pals;
    kite ||= needs.kite;
    needs.scenes.forEach((s) => scenes.add(s));
    for (const s of needs.pieces) {
      // The piece page lives in living/, so links back to the site go up one folder.
      const target = href(s.piece!.link, ctx);
      zip.file(pieceFile(s), pieceDocument(s.piece!, { heroes2: "../heroes2/", heroes: "../heroes/", scenes: "../scenes/" }, target));
      pieceFiles(s.piece!).forEach((f) => files.add(f));
    }
    zip.file(pageFile(page), pageDocument(doc, page, ctx, { stylesheet: "quilt.css", inlineCss: pageCss(doc, page, ctx), scripts: { runtime: "quilt.js", spirits: "spirits/", components: "components/" } }));
  }
  for (const id of usedFonts(doc)) {
    const f = font(id);
    files.add(f.file);
    if (f.italic) files.add(f.italic);
    files.add(f.license);
  }
  for (const id of scenes) {
    zip.file(`living/${id}.html`, sceneDocument(id as SceneId, { text: false }, "../scenes/"));
    for (const f of sceneFiles(id as SceneId)) files.add(`/scenes/${f}`);
  }
  if (pals) ["/spirits/kit.js", "/spirits/pals.js"].forEach((f) => files.add(f));
  if (kite) ["/components/kit.js", "/components/kite.js"].forEach((f) => files.add(f));
  if ([...files].some((f) => f.startsWith("/quilt/stock/"))) files.add("/quilt/stock/artwork.json");
  if ([...files].some((f) => f.startsWith("/assets/paint/"))) files.add("/licenses/ARTWORK.txt");
  await Promise.all([...files].map(async (path) => zip.file(path.slice(1), await fetchFile(path))));
  zip.file("README.txt", `${doc.name}\n\nMade with Patchwork Quilt. Open index.html in a browser, or upload this whole folder to any static host (Netlify, GitHub Pages, Cloudflare Pages, your own server).\nThere is no build step and nothing is loaded from the internet. Fonts are under the SIL Open Font License (see the licences next to them).\n`);
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}

async function defaultFetch(path: string) {
  const r = await fetch(path);
  if (!r.ok) throw new Error(`Couldn't pack ${path}. Check your connection to the studio and try again.`);
  return r.blob();
}

/** The editable project: site.json plus every upload it uses. */
export async function exportProject(doc: QuiltDoc): Promise<Blob> {
  const zip = new JSZip();
  zip.file("site.json", JSON.stringify(doc, null, 2));
  for (const ref of assetRefs(doc)) {
    const a = await getAsset(ref);
    if (a) zip.file(`assets/${ref.slice(6)}`, a.blob, { comment: JSON.stringify({ name: a.name, type: a.type }) });
  }
  zip.file("README.txt", "A Patchwork Quilt project. Open Patchwork, choose Make a site → Import, and pick this file to keep editing.\n");
  return zip.generateAsync({ type: "blob", compression: "DEFLATE" });
}

export async function importProject(file: Blob): Promise<QuiltDoc> {
  let zip: JSZip;
  try { zip = await JSZip.loadAsync(file); } catch { throw new Error("That file isn't a Quilt project."); }
  const json = zip.file("site.json");
  if (!json) throw new Error("That file isn't a Quilt project (site.json is missing).");
  const doc = validateDoc(JSON.parse(await json.async("string")));
  for (const ref of assetRefs(doc)) {
    const entry = zip.file(`assets/${ref.slice(6)}`);
    if (!entry) continue;
    let meta = { name: "Upload", type: "image/png" };
    try { meta = { ...meta, ...JSON.parse(entry.comment || "{}") }; } catch { /* keep defaults */ }
    if (!/^(image|video)\/[\w.+-]+$/.test(meta.type)) continue;
    const blob = new Blob([await entry.async("arraybuffer")], { type: meta.type });
    await putAsset({ id: ref, name: String(meta.name).slice(0, 120), type: meta.type, blob, createdAt: Date.now() });
  }
  return doc;
}

/** Make an imported or duplicated site its own: new ids so it never overwrites another. */
export function sectionCount(doc: QuiltDoc) {
  return allSections(doc).length;
}
