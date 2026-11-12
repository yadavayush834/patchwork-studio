/* Copyshop. A photocopier, honestly simulated. The first copy turns a photo into toner: contrast
   pushed, grey dithered into speckle. Every click copies the last copy, so loss compounds: the
   blacks spread, toner noise grows, the sheet feeds a little crooked, a dirty drum leaves streaks.
   Copies land on a pile. Drag across the glass and the top sheet smears as if it moved mid-scan;
   the smear stays, because that's what a copier does. */
(() => {
  const root = document.querySelector(".hx-copyshop"), canvas = root && root.querySelector(".cs-glass");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const g = canvas.getContext("2d"), base = canvas.dataset.base || "";
  const PAPER = [246, 243, 234], TONER = [24, 21, 20];
  let W = 0, H = 0, pile = [], gen = 0, src = null, drag = null, raf = 0;
  const out = { n: root.querySelector(".cs-n"), loss: root.querySelector(".cs-loss"), bar: root.querySelector(".cs-bar i") };
  const SW = 760;
  const sheet = (w, h) => { const c = document.createElement("canvas"); c.width = w; c.height = h; return c; };
  /** Copy a sheet: misfeed, push contrast, dither to toner, add drum streaks and speckle. */
  const copyOf = (from, n) => {
    const w = from.width, h = from.height, c = sheet(w, h), x = c.getContext("2d", { willReadFrequently: true });
    x.fillStyle = `rgb(${PAPER})`; x.fillRect(0, 0, w, h);
    x.save(); x.translate(w / 2, h / 2); x.rotate((Math.random() - .5) * .008 * Math.min(1, n)); x.scale(1.0015, 1.0015); x.translate(-w / 2 + (Math.random() - .5) * 3, -h / 2 + (Math.random() - .5) * 3);
    x.drawImage(from, 0, 0); x.restore();
    const img = x.getImageData(0, 0, w, h), d = img.data;
    // loss compounds gently: each generation a little more contrast, a little more noise
    const contrast = 1.25 + n * .045, mid = .5 - n * .006, noise = .08 + n * .012;
    const streaks = Array.from({ length: Math.min(3, Math.floor(n / 2)) }, () => [Math.random() * w, .25 + Math.random() * .3]);
    for (let y = 0; y < h; y++) for (let px = 0; px < w; px++) {
      const i = (y * w + px) * 4;
      let l = (d[i] * .3 + d[i + 1] * .55 + d[i + 2] * .15) / 255;
      l = (l - mid) * contrast + .5;
      for (const [sx, k] of streaks) if (Math.abs(px - sx) < 1.2) l -= k * (.6 + .4 * Math.sin(y * .05));
      // ordered-ish dither with toner noise: grey becomes speckle
      const th = .5 + (Math.random() - .5) * noise * 2 + (((px & 3) * 4 + (y & 3)) / 16 - .47) * .5;
      const ink = l < th ? 1 : 0, k = ink ? TONER : PAPER;
      d[i] = k[0]; d[i + 1] = k[1]; d[i + 2] = k[2];
    }
    // the dark rim where the lid didn't close
    x.putImageData(img, 0, 0);
    const rim = x.createLinearGradient(0, 0, w, 0); rim.addColorStop(0, `rgba(24,21,20,${.25 + n * .05})`); rim.addColorStop(.04, "rgba(24,21,20,0)"); rim.addColorStop(.96, "rgba(24,21,20,0)"); rim.addColorStop(1, `rgba(24,21,20,${.2 + n * .05})`);
    x.fillStyle = rim; x.fillRect(0, 0, w, h);
    return c;
  };
  const place = (c) => {
    const k = pile.length;
    pile.push({ c, x: (Math.random() - .5) * 60 + k * 6, y: (Math.random() - .5) * 40 - k * 4, r: (Math.random() - .5) * .14, born: performance.now() });
    if (pile.length > 7) pile.shift();
  };
  const stats = () => {
    const loss = Math.round((1 - Math.pow(.93, gen)) * 100);
    out.n.textContent = `Nº ${String(gen + 1).padStart(2, "0")}`; out.loss.textContent = `${loss}%`; out.bar.style.width = `${loss}%`;
  };
  const resize = () => { const r = canvas.getBoundingClientRect(), dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr); g.setTransform(dpr, 0, 0, dpr, 0, 0); };
  const draw = (now = performance.now()) => {
    g.clearRect(0, 0, W, H);
    if (!pile.length) return;
    const sw = Math.min(W * .86, H * .86 * (pile[0].c.width / pile[0].c.height)), sh = sw * pile[0].c.height / pile[0].c.width;
    pile.forEach((p, i) => {
      const top = i === pile.length - 1, age = Math.min(1, (now - p.born) / 650), e = 1 - Math.pow(1 - age, 3);
      // new sheets feed in from above and settle
      const fy = (1 - e) * -H * .9, fr = (1 - e) * .3;
      g.save(); g.translate(W / 2 + p.x, H / 2 + p.y + fy); g.rotate(p.r + fr);
      g.shadowColor = "rgba(30,24,20,.28)"; g.shadowBlur = 18; g.shadowOffsetY = 8;
      g.fillStyle = `rgb(${PAPER})`; g.fillRect(-sw / 2 - 10, -sh / 2 - 10, sw + 20, sh + 20);
      g.shadowColor = "transparent";
      if (top && drag && drag.active) {
        // mid-scan smear: rows slide with the drag, more toward the leading edge
        const rows = 90, rh = sh / rows;
        for (let k = 0; k < rows; k++) {
          const off = drag.dx * (k / rows) * (.6 + .4 * Math.sin(k * .7));
          g.drawImage(p.c, 0, (k / rows) * p.c.height, p.c.width, p.c.height / rows + 1, -sw / 2 + off, -sh / 2 + k * rh, sw, rh + .6);
        }
      } else g.drawImage(p.c, -sw / 2, -sh / 2, sw, sh);
      g.restore();
    });
  };
  const anim = () => { cancelAnimationFrame(raf); const until = performance.now() + 900; const step = (now) => { draw(now); if (now < until) raf = requestAnimationFrame(step); }; raf = requestAnimationFrame(step); };
  const copy = () => { if (!pile.length) return; gen++; place(copyOf(pile[pile.length - 1].c, gen)); stats(); root.classList.remove("is-copying"); void root.offsetWidth; root.classList.add("is-copying"); reduced ? draw() : anim(); };
  root.querySelector(".cs-copy").addEventListener("click", copy);
  root.querySelector(".cs-clear").addEventListener("click", () => { if (!src) return; pile = []; gen = 0; place(copyOf(src, 0)); stats(); reduced ? draw() : anim(); });
  canvas.addEventListener("pointerdown", (e) => { drag = { x: e.clientX, dx: 0, active: false, moved: false }; canvas.setPointerCapture(e.pointerId); });
  canvas.addEventListener("pointermove", (e) => { if (!drag) return; drag.dx = e.clientX - drag.x; if (Math.abs(drag.dx) > 6) { drag.active = drag.moved = true; draw(); } });
  canvas.addEventListener("pointerup", () => {
    if (!drag) return;
    if (!drag.moved) { drag = null; copy(); return; }
    // bake the smear into the top sheet
    const top = pile[pile.length - 1], c = sheet(top.c.width, top.c.height), x = c.getContext("2d"), rows = 90, s = top.c.width / Math.min(W * .86, H * .86 * (top.c.width / top.c.height));
    x.fillStyle = `rgb(${PAPER})`; x.fillRect(0, 0, c.width, c.height);
    for (let k = 0; k < rows; k++) { const off = drag.dx * s * (k / rows) * (.6 + .4 * Math.sin(k * .7)); x.drawImage(top.c, 0, (k / rows) * c.height, c.width, c.height / rows + 1, off, (k / rows) * c.height, c.width, c.height / rows + 1); }
    top.c = c; drag = null; draw();
  });
  new ResizeObserver(() => { resize(); draw(); }).observe(canvas);
  const im = new Image();
  im.onload = () => {
    src = sheet(SW, Math.round(SW * im.naturalHeight / im.naturalWidth)); src.getContext("2d").drawImage(im, 0, 0, src.width, src.height);
    resize(); place(copyOf(src, 0)); stats(); draw(); canvas.dataset.ready = "true";
    if (!reduced) setTimeout(copy, 1400);
  };
  im.src = base + "original.webp";
  if (!reduced && window.gsap) gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(".cs-title .w>span", { yPercent: 110, stagger: .06, duration: 1.1 }, .2)
    .from(".cs-mark-hl", { scaleX: 0, transformOrigin: "left", stagger: .15, duration: .6, ease: "power3.out" }, .9)
    .from(".cs-kicker,.cs-sub,.hx-copyshop .hx-actions,.cs-panel", { y: 18, autoAlpha: 0, stagger: .08, duration: .8 }, .7);
})();
