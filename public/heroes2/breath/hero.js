/* Breath: every letter is a variable font (wght, SOFT, WONK, opsz) driven by the cursor, an idle breathing wave and a guided breath. */
(() => {
  const root = document.querySelector(".hx-breath");
  if (!root) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const letters = Array.from(root.querySelectorAll(".b-l"));
  const guide = root.querySelector(".b-guide"), go = root.querySelector(".b-go"), dot = root.querySelector(".b-dot");
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#f2a33a";
  const pointer = { x: -9999, y: -9999, on: 0 };
  const state = { breath: 0, intro: reduced ? 1 : 0, guiding: false };
  addEventListener("pointermove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.on = e.pointerType === "touch" ? 0 : 1; }, { passive: true });
  root.addEventListener("pointerleave", () => (pointer.on = 0));
  let centres = [];
  const measure = () => { centres = letters.map((l) => { const r = l.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; }); };
  const apply = (t) => {
    const R = Math.max(160, innerWidth * 0.14);
    letters.forEach((l, i) => {
      const [cx, cy] = centres[i] || [0, 0];
      const d = Math.hypot(pointer.x - cx, pointer.y - cy), near = pointer.on * Math.exp(-(d * d) / (R * R));
      // Idle: a slow wave of weight passes through the words, like breathing.
      const idle = reduced ? 0 : Math.sin(t * 0.9 - i * 0.32) * 0.5 + 0.5;
      const b = state.breath;
      const wght = Math.round((140 + idle * 110) * (1 - b) + 860 * b + near * 620 * (1 - b * 0.5));
      const soft = Math.round(Math.min(100, near * 100 + b * 100));
      const wonk = near > 0.45 || b > 0.6 ? 1 : 0;
      l.style.fontVariationSettings = `"wght" ${Math.min(900, wght)}, "SOFT" ${soft}, "WONK" ${wonk}, "opsz" 144`;
      const lift = near * -0.06 + Math.sin(t * 0.9 - i * 0.32) * 0.012 * (1 - b);
      l.style.transform = `translateY(${(lift * 100).toFixed(2)}%) scale(${(1 + b * 0.04 + near * 0.05).toFixed(3)})`;
      l.style.color = near > 0.55 || b > 0.85 ? accent : "";
      l.style.opacity = String(Math.min(1, state.intro * 1.4 - (i / letters.length) * 0.4));
    });
    root.style.setProperty("--glow", (state.breath * 0.9 + pointer.on * 0.1).toFixed(3));
  };
  // A guided breath: in for four, hold for two, out for six.
  const breathe = () => {
    if (state.guiding || !window.gsap) return;
    state.guiding = true;
    go.setAttribute("aria-pressed", "true");
    const tl = gsap.timeline({ onComplete: () => { state.guiding = false; go.removeAttribute("aria-pressed"); guide.textContent = ""; dot.style.setProperty("--fill", 0); } });
    const count = (label, from, dur) => tl.to({ n: from }, { n: 0, duration: dur, ease: "none", onStart: () => (guide.textContent = label), onUpdate() { const n = Math.ceil(this.targets()[0].n); guide.textContent = `${label} ${n || ""}`.trim(); } }, "<");
    tl.to(state, { breath: 1, duration: reduced ? 0.01 : 4, ease: "sine.inOut" });
    count("Breathe in", 4, 4);
    tl.to(state, { breath: 1, duration: 2 });
    count("Hold", 2, 2);
    tl.to(state, { breath: 0, duration: reduced ? 0.01 : 6, ease: "sine.inOut" });
    count("And out", 6, 6);
    tl.to({}, { duration: 12, onUpdate() { dot.style.setProperty("--fill", this.progress()); } }, 0);
  };
  go && go.addEventListener("click", breathe);
  addEventListener("resize", measure);
  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.to(state, { intro: 1, duration: 1.8, ease: "power2.out", delay: 0.2 });
    gsap.from(".b-foot > *, .hx-nav > *", { autoAlpha: 0, y: 14, duration: 1, ease: "power3.out", stagger: 0.1, delay: 0.9 });
  };
  let raf = 0, visible = true, frames = 0;
  const loop = () => {
    cancelAnimationFrame(raf);
    if (!visible || document.hidden) return;
    raf = requestAnimationFrame((t) => {
      // Widths change with weight: re-measure a few times a second, not every frame.
      if (frames++ % 12 === 0) measure();
      apply(t / 1000);
      loop();
    });
  };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(root);
  document.addEventListener("visibilitychange", loop);
  (document.fonts ? document.fonts.load('300 64px "Fraunces"') : Promise.resolve()).then(() => {
    measure();
    enter();
    apply(0);
    loop();
  });
})();
