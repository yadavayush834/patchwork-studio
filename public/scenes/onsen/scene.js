/* Onsen: a hot spring high in the snow. Snow falls at every depth, steam rolls off the pool and the
   lanterns breathe. Move to look across the water; click the pool to drop a pebble; the button
   brings a heavier snowfall. */
(() => {
  const snow = { kind: "snow", count: 520, color: [.95, .97, 1], size: 3, speed: 1, region: [0, 0, 1, 1], depth: [.08, 1] };
  DioramaScene({
    depthScale: .05, focus: .45, pointer: 1,
    glow: { threshold: .72, strength: .85, flicker: .3, tint: [1, .74, .42], bloom: 1.4 },
    water: { y: .74, strength: 1 }, grade: { vignette: .3 },
    particles: [snow,
      { kind: "steam", count: 38, color: [.86, .93, .96], size: 12, speed: .55, region: [.18, .6, .82, .86], depth: [.5, .82] },
      { kind: "steam", count: 70, color: [.92, .97, 1], size: 9, speed: 2, region: [0, .55, 1, .9], depth: [.6, .9], burst: true }],
    action: "Heavier snow",
    onAction: (d) => { const heavy = snow.count < 900; snow.count = heavy ? 1400 : 520; snow.speed = heavy ? 1.6 : 1; },
    onClick: (d, x, y) => { d.pulse(x, y, 1.4); d.burst(2, x, y); },
  });
})();
