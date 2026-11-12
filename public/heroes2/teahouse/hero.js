/* Tea House. Diorama renders the grove in depth; the mist breathes, leaves drift down at their own
   depths, and the pointer lets you look between the bamboo. The steep button runs a real timer:
   while it runs the kettle steams harder and the lanterns warm; when it ends, it tells you to pour. */
(() => {
  const root = document.querySelector(".hx-teahouse"), canvas = root && root.querySelector(".hx-art");
  if (!canvas || !window.Diorama) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const base = canvas.dataset.base || "";
  const steam = { kind: "steam", count: 26, color: [.96, .97, .95], size: 18, speed: .45, region: [.62, .4, .74, .56], depth: [.6, .72] };
  const fog = [.88, .91, .88, .32];
  const d = new Diorama(canvas, {
    color: base + "painting.webp", depth: base + "depth.webp", depthScale: .05, focus: .45, pointer: 1.2,
    glow: { threshold: .82, strength: .6, flicker: .22, tint: [1, .78, .48], bloom: 2 },
    fog, grade: { contrast: 1.02, saturation: .98, vignette: .18 },
    particles: [
      { kind: "steam", count: 40, color: [.95, .97, .95], size: 34, speed: .25, region: [0, .25, .75, 1], depth: [.15, .6] },
      { kind: "petals", count: 60, color: [.52, .66, .32], size: 4, speed: .55, region: [0, 0, 1, 1], depth: [.45, 1] },
      steam,
    ],
  });
  // the mist breathes: thicker, then thinner, over about twenty seconds
  if (!reduced) { let t = 0; const breathe = () => { t += 1 / 60; fog[3] = .3 + .1 * Math.sin(t * .3); requestAnimationFrame(breathe); }; breathe(); }
  const btn = root.querySelector(".t-steep"), fill = root.querySelector(".t-fill"), time = root.querySelector(".t-time"), note = root.querySelector(".t-steep small");
  const total = 180; let left = 0, timer = 0;
  const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  const show = () => {
    fill.style.strokeDashoffset = String(113.1 * (left ? left / total : 1));
    time.textContent = left ? fmt(left) : "3:00";
  };
  btn.addEventListener("click", () => {
    clearInterval(timer);
    if (left) { left = 0; note.textContent = "Green tea, 80 °C"; steam.count = 26; d.light.boost = 0; show(); return; }
    left = total; note.textContent = "Steeping. Tap to stop."; steam.count = 70; d.light.boost = .6; show();
    timer = setInterval(() => {
      left--; show();
      if (!left) { clearInterval(timer); note.textContent = "Ready. Pour slowly."; steam.count = 26; d.light.boost = 0; time.textContent = "0:00"; fill.style.strokeDashoffset = "0"; }
    }, 1000);
  });
  if (!window.gsap || reduced) return;
  d.cam.zoom = 1.18; d.cam.cx = .7; d.cam.cy = .6; d.cam.x = -.6;
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .to(d.cam, { zoom: 1, x: 0, duration: 4.2, ease: "power2.out" }, 0)
    .from(".t-label", { autoAlpha: 0, y: 12, duration: 1.2 }, .8)
    .from(".t-title .w>span", { yPercent: 110, duration: 1.6, stagger: .09 }, .9)
    .from(".t-sub,.hx-teahouse .hx-actions", { y: 20, autoAlpha: 0, duration: 1.2, stagger: .12 }, 1.5)
    .from(".hx-teahouse .hx-nav,.t-steep", { autoAlpha: 0, duration: 1.4, stagger: .2 }, 1.9);
})();
