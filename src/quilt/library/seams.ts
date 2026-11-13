/**
 * Seams and patterns: the "patchwork" part of a Quilt site.
 * A seam cuts the bottom edge of a section into a shape (wave, scallop, torn paper…). The section is
 * masked and overlaps the next one by the seam's depth, so whatever is next (colour, photo, living scene)
 * shows through the cut. Patterns are tiles used as masks, so they can be painted any theme colour.
 */
import type { Pattern, SeamShape } from "../model";

const url = (svg: string) =>
  `url("data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")}")`;
const svg = (vb: string, body: string, stretch = true) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${vb}" preserveAspectRatio="${stretch ? "none" : "xMidYMid meet"}">${body}</svg>`;

export interface SeamDef {
  id: SeamShape;
  name: string;
  /** Tile width in px for repeating seams; 0 for seams stretched across the whole width. */
  tile: number;
  mask: (flip: boolean) => string;
  depth: number;
}

export const SEAM_DEFS: SeamDef[] = [
  { id: "none", name: "Straight", tile: 0, depth: 0, mask: () => "" },
  { id: "stitch", name: "Stitched", tile: 0, depth: 0, mask: () => "" },
  { id: "wave", name: "Wave", tile: 160, depth: 36, mask: () => url(svg("0 0 120 40", `<path d="M0 0H120V20C90 40 30 0 0 20Z"/>`)) },
  { id: "zigzag", name: "Zigzag", tile: 36, depth: 22, mask: () => url(svg("0 0 40 30", `<path d="M0 0H40V6L20 30 0 6Z"/>`)) },
  { id: "scallop", name: "Scallop", tile: 48, depth: 22, mask: () => url(svg("0 0 40 20", `<path d="M0 0H40V0A20 20 0 0 1 0 0Z"/>`)) },
  { id: "torn", name: "Torn paper", tile: 300, depth: 22, mask: () => url(svg("0 0 240 32", `<path d="M0 0H240V18L228 26 214 15 200 28 188 19 170 30 158 17 140 24 126 14 110 27 96 18 80 29 66 16 50 25 36 15 22 27 10 19 0 18Z"/>`)) },
  { id: "steps", name: "Steps", tile: 64, depth: 20, mask: () => url(svg("0 0 80 30", `<path d="M0 0H80V30H40V6H0Z"/>`)) },
  { id: "drip", name: "Drip", tile: 180, depth: 40, mask: () => url(svg("0 0 120 34", `<path d="M0 0H120V8C110 8 108 30 100 30S92 8 82 8H60C52 8 52 22 46 22S40 8 32 8H0Z"/>`)) },
  { id: "curve", name: "Curve", tile: 0, depth: 70, mask: (f) => url(svg("0 0 100 50", f ? `<path d="M0 0H100V50Q50 -50 0 50Z"/>` : `<path d="M0 0H100Q50 100 0 0Z"/>`)) },
  { id: "slant", name: "Slant", tile: 0, depth: 80, mask: (f) => url(svg("0 0 100 50", f ? `<path d="M0 0H100V50Z"/>` : `<path d="M0 0H100L0 50Z"/>`)) },
];
export const seamDef = (id: string) => SEAM_DEFS.find((s) => s.id === id) ?? SEAM_DEFS[0];

const noise = (freq: number) =>
  `<filter id="n"><feTurbulence type="fractalNoise" baseFrequency="${freq}" numOctaves="2" stitchTiles="stitch"/><feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1.3 0 0 0 -.38"/></filter><rect width="100%" height="100%" filter="url(#n)"/>`;
const sparkle = (x: number, y: number, s: number) =>
  `<path transform="translate(${x} ${y}) scale(${s})" d="M0-10C1 -3 3 -1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10Z"/>`;

export interface PatternDef {
  id: Pattern;
  name: string;
  size: number;
  mask: string;
  opacity: number;
}
export const PATTERNS: PatternDef[] = [
  { id: "none", name: "None", size: 0, mask: "none", opacity: 0 },
  { id: "dots", name: "Dots", size: 22, mask: url(svg("0 0 20 20", `<circle cx="10" cy="10" r="1.7"/>`, false)), opacity: 35 },
  { id: "grid", name: "Grid", size: 36, mask: url(svg("0 0 32 32", `<path d="M0 .5H32M.5 0V32" stroke="#000"/>`, false)), opacity: 22 },
  { id: "lines", name: "Ruled", size: 34, mask: url(svg("0 0 32 32", `<rect y="31" width="32" height="1"/>`, false)), opacity: 30 },
  { id: "checks", name: "Gingham", size: 44, mask: url(svg("0 0 32 32", `<rect width="16" height="32" fill-opacity=".5"/><rect width="32" height="16" fill-opacity=".5"/>`, false)), opacity: 22 },
  { id: "quilt", name: "Quilt", size: 64, mask: url(svg("0 0 48 48", `<path d="M0 0h24v24H0z" fill-opacity=".55"/><path d="M24 24h24v24H24z" fill-opacity=".3"/><path d="M3 3h18v18H3zM27 3h18v18H27zM3 27h18v18H3zM27 27h18v18H27z" fill="none" stroke="#000" stroke-width=".8" stroke-dasharray="2.2 2"/>`, false)), opacity: 20 },
  { id: "waves", name: "Waves", size: 44, mask: url(svg("0 0 40 16", `<path d="M0 8Q10 0 20 8T40 8" fill="none" stroke="#000" stroke-width="1.4"/>`, false)), opacity: 30 },
  { id: "stars", name: "Sparkles", size: 120, mask: url(svg("0 0 120 120", sparkle(22, 26, 0.9) + sparkle(84, 70, 0.6) + sparkle(46, 96, 0.4) + sparkle(100, 16, 0.35), false)), opacity: 40 },
  { id: "confetti", name: "Confetti", size: 140, mask: url(svg("0 0 120 120", `<rect x="14" y="20" width="10" height="4" rx="2" transform="rotate(30 19 22)"/><rect x="80" y="12" width="10" height="4" rx="2" transform="rotate(-40 85 14)"/><circle cx="56" cy="50" r="3"/><rect x="94" y="78" width="10" height="4" rx="2" transform="rotate(70 99 80)"/><rect x="28" y="88" width="10" height="4" rx="2" transform="rotate(-15 33 90)"/><circle cx="104" cy="44" r="2.4"/><circle cx="14" cy="64" r="2.4"/>`, false)), opacity: 55 },
  { id: "noise", name: "Grain", size: 220, mask: url(`<svg xmlns="http://www.w3.org/2000/svg" width="220" height="220">${noise(0.85)}</svg>`), opacity: 40 },
  { id: "paper", name: "Paper", size: 300, mask: url(`<svg xmlns="http://www.w3.org/2000/svg" width="300" height="300">${noise(0.45)}</svg>`), opacity: 18 },
];
export const patternDef = (id: string) => PATTERNS.find((p) => p.id === id) ?? PATTERNS[0];

export const SEAMS = {
  sparkMask: url(svg("-10 -10 20 20", `<path d="M0-10C1 -3 3 -1 10 0 3 1 1 3 0 10-1 3-3 1-10 0-3-1-1-3 0-10Z"/>`, false)) + " center/contain no-repeat",
  waveLine: url(svg("0 0 28 12", `<path d="M0 6Q7 0 14 6T28 6" fill="none" stroke="#000" stroke-width="2.4"/>`)),
  zigLine: url(svg("0 0 28 12", `<path d="M0 9 7 3 14 9 21 3 28 9" fill="none" stroke="#000" stroke-width="2.4" stroke-linejoin="round"/>`)),
};
