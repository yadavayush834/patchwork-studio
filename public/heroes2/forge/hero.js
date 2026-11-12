/* Forge. Diorama renders the smithy in depth. Holding the pointer down works the bellows: the coals
   brighten, embers fly faster and the gauge climbs through the colours a smith reads by eye.
   Letting go, the fire settles. A click strikes the blade: sparks and a shake. */
(() => {
  const root = document.querySelector(".hx-forge"), canvas = root && root.querySelector(".hx-art");
  if (!canvas || !window.Diorama) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const base = canvas.dataset.base || "";
  const embers = { kind: "embers", count: 320, color: [1, .48, .14], size: 3, speed: 1, region: [.6, .02, 1, .62], depth: [.4, .9], glow: 1.5 };
  const d = new Diorama(canvas, {
    color: base + "painting.webp", depth: base + "depth.webp", depthScale: .032, focus: .78, pointer: .9,
    glow: { threshold: .5, strength: 1.05, flicker: .55, tint: [1, .52, .22], bloom: 2 },
    rays: { x: .86, y: .42, strength: .45, decay: .95, color: [1, .45, .16] },
    grade: { contrast: 1.12, saturation: 1.05, vignette: .65 },
    particles: [embers,
      { kind: "steam", count: 34, color: [.5, .42, .38], size: 14, speed: .7, region: [.36, .2, .58, .56], depth: [.55, .7] },
      { kind: "sparks", count: 140, color: [1, .7, .3], size: 2.6, speed: 1, region: [0, 0, 1, .4], depth: [.8, 1], glow: 2, burst: true }],
  });
  d.light.x = .86; d.light.y = .42;
  const temp = root.querySelector(".f-temp"), colour = root.querySelector(".f-colour");
  const scale = [[600, "dark red"], [750, "blood red"], [850, "cherry"], [950, "bright cherry"], [1050, "orange"], [1150, "yellow"], [1250, "white heat"]];
  let heat = 0, pumping = false;
  const set = () => {
    const c = Math.round(640 + heat * 620);
    temp.textContent = c.toLocaleString("en") + " °C";
    colour.textContent = (scale.findLast(([t]) => c >= t) || scale[0])[1];
    root.style.setProperty("--heat", heat.toFixed(3));
    d.light.boost = heat * 1.4;
    d.options.glow.flicker = .55 - heat * .25;
    embers.speed = 1 + heat * 2.2;
    d.options.rays.strength = .45 + heat * .6;
  };
  set();
  const down = (e) => { if (e.target.closest("a,button")) return; pumping = true; d.burst(2, .63 + (Math.random() - .5) * .06, .6); shake(); };
  const up = () => (pumping = false);
  root.addEventListener("pointerdown", down);
  addEventListener("pointerup", up); addEventListener("pointercancel", up);
  root.addEventListener("keydown", (e) => { if (e.key === " " && !e.target.closest("a,button")) { e.preventDefault(); pumping = true; } });
  root.addEventListener("keyup", (e) => { if (e.key === " ") pumping = false; });
  const shake = () => { if (!window.gsap || reduced) return; gsap.fromTo(d.cam, { x: .35 }, { x: 0, duration: .5, ease: "elastic.out(1, .3)" }); };
  let last = performance.now();
  const tick = (now) => {
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    heat = Math.max(0, Math.min(1, heat + (pumping ? .55 : -.18) * dt));
    set();
    requestAnimationFrame(tick);
  };
  if (!reduced) requestAnimationFrame(tick);
  if (!window.gsap || reduced) return;
  d.cam.zoom = 1.2; d.cam.cx = .7; d.cam.cy = .55;
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .to(d.cam, { zoom: 1, duration: 3.4, ease: "power3.out" }, 0)
    .from(".f-label", { autoAlpha: 0, y: 14, duration: 1 }, .6)
    .from(".f-title .w>span", { yPercent: 115, duration: 1.3, stagger: .08 }, .7)
    .from(".f-sub,.hx-forge .hx-actions", { y: 24, autoAlpha: 0, duration: 1, stagger: .1 }, 1.3)
    .from(".hx-forge .hx-nav,.f-gauge,.f-hint", { autoAlpha: 0, duration: 1.2, stagger: .15 }, 1.6);
})();
