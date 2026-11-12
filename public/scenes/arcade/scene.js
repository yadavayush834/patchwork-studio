/* Arcade: a neon arcade after closing time, rain on the front window. The screens flicker on their
   own; insert a coin and every cabinet flares at once while pixel confetti flies. */
(() => {
  DioramaScene({
    depthScale: .05, focus: .5, pointer: 1,
    glow: { threshold: .62, strength: .95, flicker: .55, tint: [1, .7, 1], bloom: 1.6 },
    grade: { contrast: 1.05, saturation: 1.08, vignette: .35 },
    particles: [
      { kind: "rain", count: 260, color: [.65, .8, 1], size: 3, speed: .9, region: [0, 0, .2, .62], depth: [.3, .55], glow: .4 },
      { kind: "dust", count: 300, color: [1, .55, .95], size: 2, speed: 1, region: [.2, 0, 1, .8], depth: [.3, .95], glow: .8 },
      { kind: "sparks", count: 160, color: [.4, 1, .95], size: 3, speed: 1, region: [0, 0, 1, .5], depth: [.75, 1], glow: 1.6, burst: true }],
    action: "Insert coin",
    onAction: (d) => { d.burst(2, .5 + (Math.random() - .5) * .4, .55); flare(d); },
    onClick: (d, x, y) => { d.burst(2, x, y); flare(d); },
  });
  function flare(d) {
    const start = performance.now();
    const step = (now) => { const t = (now - start) / 1000; d.light.boost = Math.max(0, 1.8 * Math.exp(-t * 2.2) * (1 + .4 * Math.sin(t * 40))); if (t < 2.5) requestAnimationFrame(step); else d.light.boost = 0; };
    requestAnimationFrame(step);
  }
})();
