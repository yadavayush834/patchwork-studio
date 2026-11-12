/* Blue Room: an aquarium after closing. The title floats inside the tank, behind the nearest
   jellyfish and in front of the far ones, glowing a little in the water. Plankton hangs in the
   light shafts and bubbles rise; a click on the glass sends a ripple and a burst of bubbles. */
(() => {
  const d = DioramaScene({
    depthScale: .06, focus: .5, pointer: 1,
    title: { depth: .3, glow: .9, shadow: .2 },
    glow: { threshold: .66, strength: 1, flicker: .2, tint: [.7, .85, 1], bloom: 2 },
    rays: { x: .5, y: .04, strength: .45, decay: .975, color: [.6, .85, 1] },
    fog: [.03, .12, .25, .25],
    grade: { vignette: .4 },
    particles: [
      { kind: "dust", count: 300, color: [.7, .9, 1], size: 2, speed: .5, region: [.03, .03, .97, .86], depth: [.05, .7], glow: .7 },
      { kind: "bubbles", count: 90, color: [.85, .95, 1], size: 3, speed: .7, region: [.04, .1, .96, .88], depth: [.1, .75] },
      { kind: "bubbles", count: 120, color: [.9, .97, 1], size: 4, speed: 2, region: [0, 0, 1, 1], depth: [.4, .8], burst: true },
    ],
    light: [.5, .04],
    action: "Play the titles",
    onAction: () => card?.play(),
    onClick: (d, x, y) => { d.pulse(x, y, 1.6); d.burst(2, x, y); },
  });
  const card = TitleCard(d, { box: [.5, .42, .62, .3], phoneY: .36, color: "#e6f8ff", ink: "rgba(0,20,60,.55)", push: 1.12 });
})();
