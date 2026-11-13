/**
 * Shapes and doodles. Each is an SVG drawn in black that the renderer uses as a CSS mask, so any
 * paint (theme colour, hex or gradient) can fill it and it stays crisp at any size.
 * Add a shape: give it an id, a name, a group and SVG content; `stretch` shapes fill their box,
 * the rest keep their proportions.
 */
export interface ShapeDef {
  id: string;
  name: string;
  group: "basic" | "organic" | "doodle" | "symbol";
  svg: string;
  viewBox?: string;
  stretch?: boolean;
}

const poly = (n: number, r1: number, r2: number, rot = -90) => {
  const pts: string[] = [];
  for (let i = 0; i < n * 2; i++) {
    const r = i % 2 ? r2 : r1, a = ((rot + (i * 180) / n) * Math.PI) / 180;
    pts.push(`${(50 + r * Math.cos(a)).toFixed(2)},${(50 + r * Math.sin(a)).toFixed(2)}`);
  }
  return `<polygon points="${pts.join(" ")}"/>`;
};
const ring = (n: number, r: number, size: number) =>
  Array.from({ length: n }, (_, i) => {
    const a = (i / n) * Math.PI * 2;
    return `<circle cx="${(50 + r * Math.cos(a)).toFixed(2)}" cy="${(50 + r * Math.sin(a)).toFixed(2)}" r="${size}"/>`;
  }).join("");
const stroke = (d: string, w = 9) => `<path d="${d}" fill="none" stroke="#000" stroke-width="${w}" stroke-linecap="round" stroke-linejoin="round"/>`;
const spiral = () => {
  let d = "M50 50";
  for (let t = 0.4; t < 6 * Math.PI; t += 0.25) {
    const r = 2.4 * t;
    d += ` L${(50 + r * Math.cos(t)).toFixed(1)} ${(50 + r * Math.sin(t)).toFixed(1)}`;
  }
  return stroke(d, 6);
};

export const SHAPES: ShapeDef[] = [
  { id: "rect", name: "Rectangle", group: "basic", svg: `<rect width="100" height="100"/>`, stretch: true },
  { id: "circle", name: "Circle", group: "basic", svg: `<circle cx="50" cy="50" r="50"/>` },
  { id: "pill", name: "Pill", group: "basic", svg: `<rect width="100" height="40" y="30" rx="20"/>`, viewBox: "0 30 100 40", stretch: true },
  { id: "triangle", name: "Triangle", group: "basic", svg: `<path d="M50 4 98 92H2z"/>` },
  { id: "diamond", name: "Diamond", group: "basic", svg: `<path d="M50 0 100 50 50 100 0 50z"/>` },
  { id: "hexagon", name: "Hexagon", group: "basic", svg: `<path d="M25 6h50l25 44-25 44H25L0 50z"/>` },
  { id: "arch", name: "Arch", group: "basic", svg: `<path d="M0 100V50a50 50 0 0 1 100 0v50z"/>`, stretch: true },
  { id: "half", name: "Half circle", group: "basic", svg: `<path d="M0 100a50 50 0 0 1 100 0z"/>`, viewBox: "0 50 100 50" },
  { id: "quarter", name: "Quarter", group: "basic", svg: `<path d="M0 100V0a100 100 0 0 1 100 100z"/>` },
  { id: "star", name: "Star", group: "symbol", svg: poly(5, 50, 21) },
  { id: "sparkle", name: "Sparkle", group: "symbol", svg: `<path d="M50 0C54 36 64 46 100 50 64 54 54 64 50 100 46 64 36 54 0 50 36 46 46 36 50 0z"/>` },
  { id: "burst", name: "Burst", group: "symbol", svg: poly(16, 50, 38) },
  { id: "badge", name: "Badge", group: "symbol", svg: poly(24, 50, 44) },
  { id: "heart", name: "Heart", group: "symbol", svg: `<path d="M50 92C20 70 2 52 2 32 2 16 14 6 28 6c10 0 18 6 22 14 4-8 12-14 22-14 14 0 26 10 26 26 0 20-18 38-48 60z"/>` },
  { id: "flower", name: "Flower", group: "organic", svg: ring(6, 26, 24) + `<circle cx="50" cy="50" r="26"/>` },
  { id: "daisy", name: "Daisy", group: "organic", svg: ring(10, 34, 15) + `<circle cx="50" cy="50" r="22"/>` },
  { id: "sun", name: "Sun", group: "organic", svg: `<circle cx="50" cy="50" r="24"/>` + Array.from({ length: 12 }, (_, i) => `<rect x="47" y="2" width="6" height="16" rx="3" transform="rotate(${i * 30} 50 50)"/>`).join("") },
  { id: "moon", name: "Moon", group: "organic", svg: `<path d="M62 4a46 46 0 1 0 34 60A36 36 0 1 1 62 4z"/>` },
  { id: "cloud", name: "Cloud", group: "organic", svg: `<path d="M25 80C10 80 2 70 2 58s10-20 22-20c2-16 14-26 30-26s28 12 30 26c10 2 16 10 16 20 0 12-8 22-20 22z"/>`, viewBox: "0 10 100 72" },
  { id: "leaf", name: "Leaf", group: "organic", svg: `<path d="M8 92C8 40 40 8 92 8c0 52-32 84-84 84z"/>` },
  { id: "blob", name: "Blob", group: "organic", svg: `<path d="M45 4.5c15-2 34 5 44.5 18.2S101 56.2 93.2 71.8 68.4 98.6 50.6 98.9 14.2 88.7 5.9 73.3-.4 37.7 8.9 23.6 30 6.4 45 4.5z"/>`, stretch: true },
  { id: "blob2", name: "Pebble", group: "organic", svg: `<path d="M58 3c17 3 35 16 39 35s-7 33-18 45-25 18-41 14S6 80 2 62s6-37 20-48C33 6 44 1 58 3z"/>`, stretch: true },
  { id: "blob3", name: "Bean", group: "organic", svg: `<path d="M30 8c16-8 34 2 44 12 12 12 26 20 24 38s-20 36-40 38-36-6-48-20S0 44 6 30c4-10 12-16 24-22z"/>`, stretch: true },
  { id: "asterisk", name: "Patchwork mark", group: "symbol", svg: [0, 45, 90, 135].map((a) => `<rect x="44" y="4" width="12" height="92" rx="6" transform="rotate(${a} 50 50)"/>`).join("") },
  { id: "plus", name: "Plus", group: "symbol", svg: `<path d="M38 0h24v38h38v24H62v38H38V62H0V38h38z"/>` },
  { id: "ring", name: "Ring", group: "basic", svg: `<circle cx="50" cy="50" r="42" fill="none" stroke="#000" stroke-width="12"/>` },
  { id: "squiggle", name: "Squiggle", group: "doodle", svg: stroke("M6 50c8-30 18-30 26 0s18 30 26 0 18-30 26 0 10 22 10 22"), viewBox: "0 14 100 72", stretch: true },
  { id: "arrow", name: "Hand arrow", group: "doodle", svg: stroke("M10 78C22 34 58 18 86 40") + stroke("M66 34l21 6-6 20") },
  { id: "loop-arrow", name: "Loop arrow", group: "doodle", svg: stroke("M8 60c20 2 34-6 34-22s-14-22-22-10 8 34 34 34 30-14 36-30") + stroke("M78 26l12 8-12 6") },
  { id: "swoosh", name: "Underline", group: "doodle", svg: stroke("M4 62c26-20 62-24 92-10", 10), viewBox: "0 30 100 50", stretch: true },
  { id: "circle-scribble", name: "Circled", group: "doodle", svg: stroke("M60 12C32 6 6 22 8 48s32 42 58 38 32-26 28-44S70 10 44 16", 5), stretch: true },
  { id: "zigzag", name: "Zigzag", group: "doodle", svg: stroke("M4 60l12-20 12 20 12-20 12 20 12-20 12 20 12-20", 8), viewBox: "0 30 100 40", stretch: true },
  { id: "spiral", name: "Spiral", group: "doodle", svg: spiral() },
  { id: "dots", name: "Dot cluster", group: "doodle", svg: Array.from({ length: 16 }, (_, i) => `<circle cx="${14 + (i % 4) * 24}" cy="${14 + Math.floor(i / 4) * 24}" r="6"/>`).join("") },
  { id: "rays", name: "Rays", group: "doodle", svg: Array.from({ length: 7 }, (_, i) => `<rect x="47" y="0" width="6" height="28" rx="3" transform="rotate(${-60 + i * 20} 50 100)"/>`).join(""), viewBox: "0 0 100 60" },
  { id: "x-mark", name: "Cross", group: "doodle", svg: stroke("M18 18l64 64M82 18 18 82", 12) },
  { id: "check", name: "Tick", group: "doodle", svg: stroke("M14 54l22 22 50-54", 12) },
];

export const shapeDef = (id: string) => SHAPES.find((s) => s.id === id) ?? SHAPES[0];
export const isShape = (id: unknown) => SHAPES.some((s) => s.id === id);

/** The SVG of a shape as a CSS url() for masks. */
export function shapeMask(id: string) {
  const s = shapeDef(id);
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${s.viewBox ?? "0 0 100 100"}" preserveAspectRatio="${s.stretch ? "none" : "xMidYMid meet"}">${s.svg}</svg>`;
  return `url("data:image/svg+xml,${encodeURIComponent(svg).replace(/'/g, "%27").replace(/\(/g, "%28").replace(/\)/g, "%29")}")`;
}
/** A small preview for the editor's shape picker. */
export function shapePreview(id: string, color = "currentColor") {
  const s = shapeDef(id);
  return `<svg viewBox="${s.viewBox ?? "0 0 100 100"}" fill="${color}" aria-hidden="true">${s.svg.replace(/stroke="#000"/g, `stroke="${color}"`)}</svg>`;
}
