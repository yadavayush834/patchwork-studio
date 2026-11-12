/* Hayfield: late summer at golden hour. The title hangs in the sky between the far hills and the
   old oak, so the leaves move across the letters as you look around. Pollen drifts in the low sun,
   fireflies start up in the grass, and a click sends a gust of petals off the meadow. */
(() => {
  const d = DioramaScene({
    depthScale: .055, focus: .4, pointer: 1,
    title: { depth: .32, glow: .25, shadow: .35 },
    glow: { threshold: .8, strength: .6, flicker: .08, tint: [1, .82, .6], bloom: 1.8 },
    rays: { x: .3, y: .58, strength: .55, decay: .97, color: [1, .8, .55] },
    grade: { vignette: .32, saturation: 1.05 },
    particles: [
      { kind: "dust", count: 90, color: [1, .86, .55], size: 2, speed: .6, region: [0, .3, 1, .9], depth: [.4, .95], glow: .6 },
      { kind: "fireflies", count: 60, color: [1, .92, .5], size: 3, speed: .8, region: [0, .66, 1, 1], depth: [.75, 1], glow: 1.4 },
      { kind: "petals", count: 120, color: [.96, .8, .9], size: 4, speed: 2.4, region: [0, .55, 1, 1], depth: [.6, 1], burst: true },
    ],
    light: [.3, .58],
    action: "Play the titles",
    onAction: () => card?.play(),
    onClick: (d, x, y) => { d.pulse(x, y, .8); d.burst(2, x, y); },
  });
  const card = TitleCard(d, { box: [.42, .33, .6, .26], phoneY: .2, color: "#fff2da", ink: "rgba(90,40,60,.45)", push: 1.16 });
})();
