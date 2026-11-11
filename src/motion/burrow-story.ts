/**
 * Burrow: scrolling flies you *into* the screen. A dive into the hole, a
 * forward flight through one winding tunnel and its chambers, an orbit of the
 * heart, then a reverse rush back to the surface behind the returning light.
 */
export const burrowChapters = [
  ["I", "THE GREY TREE", "The great tree has not bloomed for a hundred winters. Pip thinks the trouble is not in the branches.", "LANTERN"],
  ["II", "TOPSOIL", "Down past the worms and the stubborn roots, where the dirt still smells of rain.", "ACORN CAP"],
  ["III", "THE BONE HALL", "Old giants sleep here. Pip says excuse me to every single rib.", "FOSSIL TOOTH"],
  ["IV", "THE BLIND RIVER", "A river that has never seen the sky. Its fish make their own light.", "RIVER PEARL"],
  ["V", "THE CRYSTAL HALL", "Even this far down, things find a way to shine.", "CRYSTAL SHARD"],
  ["VI", "THE HEART ROOT", "At the bottom of everything, the tree's heart had gone cold. Pip gave it the lantern.", "EMBER"],
  ["VII", "BLOOM", "The light ran up every root at once. By morning the whole hill was pink.", "BLOSSOM"],
] as const;
export const burrowBeats = [0, 0.12, 0.26, 0.4, 0.54, 0.68, 0.82] as const;
/** When each inventory item is picked up (lantern is carried from the start). */
export const itemFoundAt = [0, 0.19, 0.33, 0.47, 0.61, 0.76, 0.95] as const;

export const clamp01 = (n: number) => Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));
export const smooth = (n: number) => {
  n = clamp01(n);
  return n * n * (3 - 2 * n);
};
const span = (p: number, a: number, b: number) => smooth((p - a) / (b - a));

export function burrowState(progress: number) {
  const p = clamp01(progress);
  let chapter = 0;
  burrowBeats.forEach((b, i) => p >= b && (chapter = i));
  const rewind = span(p, 0.82, 0.92);
  /** Forward travel along the tunnel, 0 at the burrow mouth, 1 at the heart. */
  const forward = clamp01((p - 0.13) / (0.69 - 0.13));
  return {
    p,
    chapter,
    /** Outside, descending to the burrow mouth. */
    dive: span(p, 0.05, 0.13),
    /** Where the camera is along the tunnel: forward, then rushed back. */
    along: rewind > 0 ? 1 - rewind : forward,
    orbit: span(p, 0.68, 0.74) * (1 - span(p, 0.8, 0.83)),
    give: span(p, 0.73, 0.79),
    /** The light pulse travelling up the root, heart (1) to tree (0). */
    pulse: rewind > 0 ? 1 - rewind : p > 0.79 ? 1 : 0,
    rewind,
    exit: span(p, 0.91, 0.97),
    bloom: span(p, 0.9, 0.99),
  };
}
export type BurrowState = ReturnType<typeof burrowState>;
