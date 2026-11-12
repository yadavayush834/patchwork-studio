/* Night Train: a sleeper crossing a stone viaduct above a lake town. The title hangs among the
   stars, in front of the mountains and behind the oak and the signal post on the near hill.
   Fireflies in the grass, steam from the engine, warm windows that glow; a click wakes the fireflies. */
(() => {
  const d = DioramaScene({
    depthScale: .05, focus: .42, pointer: 1,
    title: { depth: .34, glow: .5, shadow: .3 },
    glow: { threshold: .7, strength: 1, flicker: .25, tint: [1, .8, .45], bloom: 1.7 },
    grade: { vignette: .38 },
    particles: [
      { kind: "fireflies", count: 90, color: [.85, 1, .5], size: 3, speed: .8, region: [0, .7, 1, 1], depth: [.7, 1], glow: 1.6 },
      { kind: "steam", count: 26, color: [.75, .8, .9], size: 9, speed: .5, region: [.55, .36, .66, .48], depth: [.38, .46] },
      { kind: "fireflies", count: 140, color: [.95, 1, .6], size: 4, speed: 2.2, region: [0, 0, 1, 1], depth: [.75, 1], burst: true, glow: 2 },
    ],
    action: "Play the titles",
    onAction: () => card?.play(),
    onClick: (d, x, y) => { d.pulse(x, y, .7); d.burst(2, x, y); },
  });
  const card = TitleCard(d, { box: [.53, .27, .46, .2], phoneY: .2, color: "#ffeab8", ink: "rgba(0,0,30,.6)", push: 1.14 });
})();
