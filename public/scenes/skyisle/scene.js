/* Sky Isle: a floating temple island at sunrise. Rocks hang at different depths, so the whole place
   turns in 3D as you move; the sun throws rays through the trees and blossom drifts past. A gust
   sends a cloud of petals and a ripple through the morning. */
(() => {
  DioramaScene({
    depthScale: .065, focus: .55, pointer: 1.1, light: [.88, .33],
    glow: { threshold: .8, strength: .7, flicker: .08, tint: [1, .82, .55], bloom: 1.8 },
    rays: { x: .88, y: .33, strength: .8, decay: .965, color: [1, .8, .55] },
    grade: { vignette: .25 },
    particles: [
      { kind: "petals", count: 90, color: [1, .62, .78], size: 3, speed: .6, region: [.2, 0, 1, 1], depth: [.4, 1] },
      { kind: "dust", count: 260, color: [1, .9, .65], size: 2, speed: .8, region: [.3, .1, 1, .9], depth: [.3, .9], glow: .7 },
      { kind: "steam", count: 30, color: [1, .95, .92], size: 14, speed: .5, region: [.25, .6, .65, .9], depth: [.4, .7] },
      { kind: "petals", count: 160, color: [1, .7, .85], size: 3, speed: 1, region: [0, 0, 1, 1], depth: [.6, 1], burst: true }],
    action: "Send a gust",
    onAction: (d) => { d.burst(3, .3, .4); d.pulse(.5, .5, .8); },
    onClick: (d, x, y) => { d.burst(3, x, y); d.pulse(x, y, .8); },
  });
})();
