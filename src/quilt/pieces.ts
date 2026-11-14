/**
 * Pieces: Patchwork's own hero sections and scenes, used as whole sections of a Quilt site.
 *
 * A piece is a complete page from its collection (heroes2/document.ts, heroes/document.ts,
 * scenes/document.ts) with the person's words in it. It is shown in the section's background layer as
 * an iframe, so its WebGL, fonts and scripts stay exactly as designed, and Quilt elements can still sit on
 * top. Two small things are injected into the piece page: an optional rule hiding its own menu (when the
 * site has a shared header), and a click relay so its buttons can reach the site's sections and pages.
 */
import type { Link, Piece, Section } from "./model";
import { uid } from "./model";
import { heroes2, isHero2, normalizeHero2, type Hero2Id } from "../heroes2/catalog";
import { hero2Document, hero2Files } from "../heroes2/document";
import { heroes, isHeroId, normalizeConfig, type HeroId } from "../heroes/catalog";
import { heroDocument } from "../heroes/document";
import { heroFiles } from "../heroes/files";
import { scenes, isScene, normalizeScene, type SceneId } from "../scenes/catalog";
import { sceneDocument, sceneFiles } from "../scenes/document";
import type { FieldDef } from "./widgets";

export type PieceKind = Piece["kind"];

export interface PieceDef {
  kind: PieceKind;
  id: string;
  name: string;
  line: string;
  technique: string;
  palette: readonly string[];
  /** A still picture to stand in for it in small thumbnails, when one exists. */
  cover?: string;
}

export const PIECES: PieceDef[] = [
  ...heroes2.map((h) => ({ kind: "hero" as const, id: h.id, name: h.name, line: h.description, technique: h.technique, palette: h.palette })),
  ...heroes.map((h) => ({ kind: "classic" as const, id: h.id, name: h.name, line: (h as { description?: string }).description ?? h.medium, technique: h.medium, palette: [(h as { accent?: string }).accent ?? "#795be6", "#111111", "#f4f1ea"], cover: `/heroes/covers/${h.id}.webp` })),
  ...scenes.map((s) => ({ kind: "scene" as const, id: s.id, name: s.name, line: s.description, technique: s.mood, palette: s.palette, cover: (s as { engine?: string }).engine === "diorama" ? `/scenes/${s.id}/painting.webp` : undefined })),
];
export const pieceDef = (p: Pick<Piece, "kind" | "id">) => PIECES.find((x) => x.kind === p.kind && x.id === p.id);
export const isPiece = (kind: unknown, id: unknown) =>
  (kind === "hero" && isHero2(id)) || (kind === "classic" && isHeroId(id)) || (kind === "scene" && isScene(id));

/** The words and options each kind of piece takes, for the inspector. */
export function pieceFields(kind: PieceKind): FieldDef[] {
  const words: FieldDef[] = [
    { key: "brand", label: "Name in the corner", kind: "text", max: 24 },
    ...(kind === "scene" ? [{ key: "eyebrow", label: "Small line above", kind: "text", max: 48 } as FieldDef] : []),
    { key: "headline", label: "Headline", kind: "text", max: kind === "classic" ? 80 : 60 },
    { key: kind === "classic" ? "body" : "sub", label: "Sentence", kind: "textarea", max: kind === "classic" ? 180 : 160 },
    { key: "cta", label: "Main button", kind: "text", max: 28 },
    ...(kind !== "classic" ? [{ key: "cta2", label: "Second button", kind: "text", max: 28 } as FieldDef] : []),
  ];
  if (kind === "scene") words.push({ key: "pixel", label: "Pixel size", kind: "select", options: [["0", "Clear (painted scenes)"], ["3", "Fine"], ["4", "Normal"], ["5", "Chunky"], ["6", "Very chunky"]] }, { key: "text", label: "Show the words", kind: "toggle" });
  if (kind === "classic") words.push({ key: "speed", label: "Speed", kind: "number", min: 0.25, max: 1.8, step: 0.05 }, { key: "intensity", label: "Intensity", kind: "number", min: 0.25, max: 1.8, step: 0.05 });
  return words;
}

/** Starting words: the piece's own, with the site's name in the corner. */
export function pieceDefaults(kind: PieceKind, id: string, brand: string): Record<string, string | number | boolean> {
  if (kind === "hero") { const c = normalizeHero2({}, id as Hero2Id); return { brand: brand || c.brand, headline: c.headline, sub: c.sub, cta: c.cta, cta2: c.cta2 }; }
  if (kind === "classic") { const c = normalizeConfig(id as HeroId, {}); return { brand: brand || c.brand, headline: c.headline, body: c.body, cta: c.cta, accent: c.accent, speed: c.speed, intensity: c.intensity }; }
  const c = normalizeScene({}, id as SceneId);
  return { brand: brand || c.brand, eyebrow: c.eyebrow, headline: c.headline, sub: c.sub, cta: c.cta, cta2: c.cta2, pixel: c.pixel, text: true };
}

/** A whole section made of a piece. */
export function pieceSection(kind: PieceKind, id: string, brand: string, hideNav = false, link?: Link): Section {
  const def = pieceDef({ kind, id })!;
  const [a, b = a, c = b] = def.palette;
  return {
    id: uid("s"),
    name: def.name,
    kind: "piece",
    rows: 90,
    fullscreen: true,
    bg: { fill: { kind: "mesh", stops: [a, b, c] } },
    piece: { kind, id, config: pieceDefaults(kind, id, brand), hideNav: hideNav || undefined, link: link ?? { kind: "section", value: "" } },
    elements: [],
  };
}

const CTA = "#quilt-cta";
const str = (v: unknown) => (typeof v === "string" ? v : undefined);
const num = (v: unknown) => (typeof v === "number" ? v : typeof v === "string" && v.trim() ? Number(v) : undefined);

/**
 * The piece as a complete page. `bases` are where each collection's files live relative to that page;
 * `href` is where the main button goes (already resolved for this context).
 */
export function pieceDocument(p: Piece, bases: { heroes2: string; heroes: string; scenes: string }, href: string): string {
  const c = p.config;
  let html: string;
  if (p.kind === "hero") html = hero2Document(p.id as Hero2Id, { brand: str(c.brand), headline: str(c.headline), sub: str(c.sub), cta: str(c.cta), cta2: str(c.cta2), href: CTA }, bases.heroes2);
  else if (p.kind === "classic") html = heroDocument(p.id as HeroId, normalizeConfig(p.id as HeroId, { brand: str(c.brand), headline: str(c.headline), body: str(c.body), cta: str(c.cta), href: CTA, accent: str(c.accent), speed: num(c.speed), intensity: num(c.intensity) }), bases.heroes);
  else html = sceneDocument(p.id as SceneId, { brand: str(c.brand), eyebrow: str(c.eyebrow), headline: str(c.headline), sub: str(c.sub), cta: str(c.cta), cta2: str(c.cta2), href: CTA, pixel: num(c.pixel), text: c.text !== false }, bases.scenes);
  const hide = p.hideNav ? `<style>.hx-nav,.sx-nav{display:none!important}</style>` : "";
  // Buttons inside the piece talk to the site around it instead of navigating the frame.
  const relay = `<script>(()=>{const cta=${JSON.stringify(href)};addEventListener("click",e=>{const a=e.composedPath().find(n=>n&&n.tagName==="A"&&n.getAttribute("href"));if(!a)return;e.preventDefault();let h=a.getAttribute("href");if(h===${JSON.stringify(CTA)})h=cta;if(!h||h==="#")return;parent.postMessage({quiltLink:h},"*")},true)})()</script>`;
  return html.replace("</head>", `${hide}</head>`).replace(/<\/body>\s*<\/html>\s*$/, `${relay}</body></html>`);
}

/** Public files a downloaded piece needs (absolute public paths). */
export function pieceFiles(p: Piece): string[] {
  if (p.kind === "hero") return hero2Files(p.id as Hero2Id).map((f) => `/heroes2/${f}`);
  if (p.kind === "classic") return heroFiles.map((f) => `/heroes/${f}`);
  return sceneFiles(p.id as SceneId).map((f) => `/scenes/${f}`);
}
