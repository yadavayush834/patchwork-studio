/** Story copy and the pure scroll → story-state map shared by the runtime and tests. */
export const goldseamChapters = [
  ["THE RITUAL", "Forty-one winters of tea.", "Every morning began with this bowl. Warm in two hands, glazed the colour of first snow, never once chipped.", "made by hand, 1984"],
  ["THE FALL", "It took less than a second.", "A sleeve catches the shelf. The bowl tips, turns once in the air, and a lifetime of mornings becomes thirteen pieces.", "0.41 seconds"],
  ["THE GATHERING", "Keep every piece.", "Nothing is swept away. Each fragment is lifted, numbered and weighed. Even the smallest one belongs to the whole.", "13 of 13 found"],
  ["THE MENDING", "Repair is a kind of patience.", "Joined with sap from the urushi tree, the pieces cure for weeks in a damp, dark box. You cannot hurry lacquer.", "day 47, still waiting"],
  ["THE GOLD", "Don’t hide the break.", "Powdered gold is brushed into every seam. The cracks become the most beautiful lines on the bowl.", "every crack, illuminated"],
  ["THE RETURN", "More beautiful for having been broken.", "Whole again, but not the same. The bowl now carries its history where everyone can see it.", "nothing hidden"],
  ["THE MORNING", "And tomorrow, tea.", "The kettle sings. The bowl is warm in two hands again, and every morning now begins with gold.", "the ritual continues"],
] as const;

/** Chapter start positions in overall journey progress (0..1). */
export const goldseamBeats = [0, 0.12, 0.26, 0.4, 0.58, 0.74, 0.88] as const;

export const clamp01 = (n: number) => Math.max(0, Math.min(1, Number.isFinite(n) ? n : 0));
export const smooth = (n: number) => {
  n = clamp01(n);
  return n * n * (3 - 2 * n);
};
const span = (p: number, a: number, b: number) => clamp01((p - a) / (b - a));

export interface GoldseamState {
  p: number;
  chapter: number;
  /** Bowl shuffles toward the plinth edge. */
  wobble: number;
  /** Free fall to the floor, linear in time so gravity can be applied by the caller. */
  drop: number;
  /** Burst and slow-motion hang after impact. */
  shatter: number;
  /** Fragments are laid out and catalogued. */
  gather: number;
  labels: number;
  /** Fragments return home; the caller staggers each piece across this range. */
  mend: number;
  urushi: number;
  dust: number;
  gold: number;
  sweep: number;
  turn: number;
  settle: number;
  tea: number;
  /** 0 = warm paper morning, 1 = night studio. */
  dark: number;
  /** 1 = deepest black, used only while the gold is laid. */
  deep: number;
}

export function goldseamState(progress: number): GoldseamState {
  const p = clamp01(progress);
  let chapter = 0;
  goldseamBeats.forEach((beat, i) => {
    if (p >= beat) chapter = i;
  });
  return {
    p,
    chapter,
    wobble: smooth(span(p, 0.12, 0.165)),
    drop: span(p, 0.165, 0.195),
    shatter: span(p, 0.195, 0.262),
    gather: smooth(span(p, 0.268, 0.355)),
    labels: smooth(span(p, 0.31, 0.345)) * (1 - smooth(span(p, 0.385, 0.405))),
    mend: span(p, 0.405, 0.555),
    urushi: smooth(span(p, 0.548, 0.6)),
    dust: span(p, 0.6, 0.705),
    gold: smooth(span(p, 0.625, 0.725)),
    sweep: smooth(span(p, 0.7, 0.86)),
    turn: smooth(span(p, 0.74, 0.88)),
    settle: smooth(span(p, 0.86, 0.92)),
    tea: smooth(span(p, 0.905, 0.975)),
    dark: smooth(span(p, 0.15, 0.2)) * (1 - smooth(span(p, 0.86, 0.94))),
    deep: smooth(span(p, 0.58, 0.64)) * (1 - smooth(span(p, 0.8, 0.88))),
  };
}
