/* Reading Room. The painting is rendered in depth by Diorama: the pointer walks the camera along the
   table and tilts the sun, so its rays swing through the dust; a click stirs a cloud of dust. */
(() => {
  const root = document.querySelector(".hx-library"), canvas = root && root.querySelector(".hx-art");
  if (!canvas || !window.Diorama) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const base = canvas.dataset.base || "";
  const d = new Diorama(canvas, {
    color: base + "painting.webp", depth: base + "depth.webp", depthScale: .055, focus: .5, pointer: 1.1,
    glow: { threshold: .78, strength: .75, flicker: .04, tint: [1, .84, .58], bloom: 1.8 },
    rays: { x: .86, y: .12, strength: .95, decay: .968, color: [1, .8, .52] },
    fog: [.32, .22, .12, .22], grade: { contrast: 1.04, saturation: 1.04, vignette: .45 },
    particles: [
      { kind: "dust", count: 1100, color: [1, .86, .62], size: 2.3, speed: 1, region: [.32, 0, 1, .85], depth: [.25, .97], glow: .7 },
      { kind: "dust", count: 260, color: [1, .9, .7], size: 3, speed: 2.4, region: [0, 0, 1, 1], depth: [.5, 1], glow: 1, burst: true },
    ],
  });
  d.light.x = .86; d.light.y = .12;
  // the sun follows the pointer a little: rays swing like the afternoon is moving
  let lx = .86, ly = .12;
  addEventListener("pointermove", (e) => { lx = .8 + (e.clientX / innerWidth) * .12; ly = .06 + (e.clientY / innerHeight) * .12; }, { passive: true });
  const tick = () => { d.light.x += (lx - d.light.x) * .04; d.light.y += (ly - d.light.y) * .04; requestAnimationFrame(tick); };
  if (!reduced) tick();
  root.addEventListener("pointerdown", (e) => { if (e.target.closest("a,button")) return; d.burst(1, e.clientX / innerWidth, e.clientY / innerHeight); });
  if (!window.gsap || reduced) return;
  d.cam.zoom = 1.14; d.cam.cx = .55; d.cam.cy = .55;
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
  tl.to(d.cam, { zoom: 1, duration: 3.2, ease: "power3.out" }, 0)
    .from(".lr-kicker", { y: 16, autoAlpha: 0, duration: 1 }, .5)
    .from(".lr-title .w>span", { yPercent: 110, duration: 1.4, stagger: .07 }, .6)
    .from(".lr-sub,.hx-library .hx-actions", { y: 24, autoAlpha: 0, duration: 1.1, stagger: .1 }, 1.1)
    .from(".hx-library .hx-nav", { y: -16, autoAlpha: 0, duration: 1 }, .9)
    .from(".lr-note", { autoAlpha: 0, x: 20, duration: 1 }, 2.2)
    .to(".lr-note path", { strokeDashoffset: 0, duration: 1.4, ease: "power2.inOut" }, 2.4)
    .from(".lr-hint", { autoAlpha: 0, duration: 1 }, 2.6);
})();
