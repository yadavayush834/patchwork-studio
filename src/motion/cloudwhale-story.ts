/** Story copy and the pure scroll → story-state map for Cloudwhale. */
export const cloudwhaleChapters = [
  ["I", "THE TOWN ON THE WHALE", "My town has forty-two people, twelve houses and one whale. None of us has ever touched the ground."],
  ["II", "OLD SILVERBACK", "Grandma says the whale is two hundred and twelve years old. Lately she sleeps more than she swims."],
  ["III", "THE STORM", "The storm came at noon. She did not climb above it the way she used to. She went straight through."],
  ["IV", "BELOW THE CLOUDS", "Under the clouds there was a whole sea. None of us had ever seen that much water, or that much dark."],
  ["V", "THE SONG", "That night she sang. It shook every lantern in town. And far away, something sang back."],
  ["VI", "THE YOUNG ONE", "A young whale came out of the dark. One by one, our houses flew across to her back."],
  ["VII", "HOME", "Silverback stayed. Trees grew where our houses stood. Now she is an island, and we visit every spring."],
] as const;
export const cloudwhaleBeats = [0, 0.13, 0.27, 0.42, 0.56, 0.71, 0.86] as const;

export const clamp01 = (n: number) => Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));
export const smooth = (n: number) => {
  n = clamp01(n);
  return n * n * (3 - 2 * n);
};
const span = (p: number, a: number, b: number) => smooth((p - a) / (b - a));

export function cloudwhaleState(progress: number) {
  const p = clamp01(progress);
  let chapter = 0;
  cloudwhaleBeats.forEach((b, i) => p >= b && (chapter = i));
  const storm = span(p, 0.27, 0.33) * (1 - span(p, 0.42, 0.47));
  return {
    p,
    chapter,
    /** Close-up on the old whale's eye. */
    close: span(p, 0.12, 0.2) * (1 - span(p, 0.25, 0.3)),
    storm,
    /** Descent through the cloud sea, 0 above to 1 at the water. */
    dive: span(p, 0.41, 0.53),
    night: span(p, 0.38, 0.47) * (1 - span(p, 0.86, 0.94)),
    /** Clouds part above the sea to show the sky. */
    part: span(p, 0.52, 0.6),
    song: span(p, 0.58, 0.68),
    answer: span(p, 0.62, 0.71),
    aurora: span(p, 0.57, 0.63) * (1 - span(p, 0.84, 0.9)),
    young: span(p, 0.7, 0.76),
    transfer: clamp01((p - 0.74) / (0.85 - 0.74)),
    dawn: span(p, 0.86, 0.93),
    settle: span(p, 0.86, 0.95),
    grow: span(p, 0.89, 0.97),
    depart: span(p, 0.92, 1),
  };
}
export type CloudwhaleState = ReturnType<typeof cloudwhaleState>;
