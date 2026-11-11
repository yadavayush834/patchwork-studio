/* Your picture as dot art, layered into any hero: each cell's dot is sized by the picture's light,
   flickers on its own, and shies away from the pointer. Drawn in the hero's accent colour, blended
   so it sits inside the hero's own art. Reduced motion draws it once. */
(() => {
  const cv = document.querySelector("canvas.hx-dotphoto");
  if (!cv || !cv.dataset.image) return;
  const root = cv.closest("main"), reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const css = getComputedStyle(document.documentElement), accent = (css.getPropertyValue("--accent") || "#ffffff").trim();
  // Light hero or dark hero? Blend accordingly.
  const bg = getComputedStyle(document.body).backgroundColor.match(/\d+/g) || [0, 0, 0];
  const light = (0.3 * bg[0] + 0.59 * bg[1] + 0.11 * bg[2]) > 140;
  cv.style.mixBlendMode = light ? "multiply" : "screen";
  const ctx = cv.getContext("2d"), CELL = 8;
  let W = 0, H = 0, cols = 0, rows = 0, lum = new Float32Array(0), seed = new Float32Array(0), dpr = 1, raf = 0, on = true;
  const img = new Image();
  const sample = () => {
    if (!img.width || !W) return;
    cols = Math.ceil(W / CELL); rows = Math.ceil(H / CELL);
    const c = document.createElement("canvas"); c.width = cols; c.height = rows;
    const x = c.getContext("2d"), s = Math.max(cols / img.width, rows / img.height);
    x.filter = "grayscale(1) contrast(1.4)";
    x.drawImage(img, (cols - img.width * s) / 2, (rows - img.height * s) / 2, img.width * s, img.height * s);
    const d = x.getImageData(0, 0, cols, rows).data;
    lum = new Float32Array(cols * rows); seed = new Float32Array(cols * rows);
    for (let i = 0; i < cols * rows; i++) { lum[i] = d[i * 4] / 255; seed[i] = Math.random() * 40; }
  };
  const size = () => { const r = cv.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height; cv.width = Math.round(W * dpr); cv.height = Math.round(H * dpr); sample(); draw(0); };
  let px = -1e4, py = -1e4;
  root.addEventListener("pointermove", (e) => { const r = cv.getBoundingClientRect(); px = e.clientX - r.left; py = e.clientY - r.top; });
  root.addEventListener("pointerleave", () => { px = py = -1e4; });
  const draw = (t) => {
    if (!lum.length) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, W, H); ctx.fillStyle = accent;
    for (let j = 0; j < rows; j++) for (let i = 0; i < cols; i++) {
      const k = j * cols + i, L = lum[k];
      if (L < 0.08) continue;
      const fl = reduced ? 1 : 0.7 + 0.3 * Math.sin(t * (2 + (seed[k] % 4)) + seed[k]);
      let x = i * CELL + CELL / 2, y = j * CELL + CELL / 2;
      const dx = x - px, dy = y - py, d2 = dx * dx + dy * dy;
      if (d2 < 14000) { const f = (1 - d2 / 14000) * 22, d = Math.sqrt(d2) || 1; x += (dx / d) * f; y += (dy / d) * f; }
      const s = Math.sqrt(L) * (CELL - 1.5) * fl;
      ctx.fillRect(x - s / 2, y - s / 2, s, s);
    }
  };
  const loop = (now) => { raf = 0; draw(now / 1000); if (on && !reduced) raf = requestAnimationFrame(loop); };
  new IntersectionObserver(([e]) => { on = e.isIntersecting && !document.hidden; if (on && !raf && !reduced) raf = requestAnimationFrame(loop); }).observe(cv);
  document.addEventListener("visibilitychange", () => { on = !document.hidden; if (on && !raf && !reduced) raf = requestAnimationFrame(loop); });
  new ResizeObserver(size).observe(cv);
  img.onload = () => { sample(); draw(0); if (!reduced && !raf) raf = requestAnimationFrame(loop); };
  img.src = cv.dataset.image;
})();
