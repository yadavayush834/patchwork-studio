/* Murmuration. 3D boids (separation, alignment, cohesion) on a spatial grid. Birds with z > 0 are
   drawn on the canvas in front of the word, the rest behind it, so the flock flows through the
   letters. The pointer is a falcon the flock parts around; a click is a shock wave; "Spell it" gives
   every bird a point inside the letters until the flock writes the word, then lets them go.
   A pencil ellipse follows the flock and the panel reads its order (how aligned it is) live. */
(() => {
  const root = document.querySelector(".hx-murmur");
  if (!root) return;
  const back = root.querySelector(".mm-back"), front = root.querySelector(".mm-front"), word = root.querySelector(".mm-word");
  const ring = root.querySelector(".mm-ring"), spell = root.querySelector(".mm-spell"), toggle = root.querySelector(".mm-theme");
  const out = { n: root.querySelector(".mm-n"), order: root.querySelector(".mm-order"), spread: root.querySelector(".mm-spread"), meter: root.querySelector(".mm-meter i") };
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bx = back.getContext("2d"), fx = front.getContext("2d");
  let W = 0, H = 0, dpr = 1, raf = 0, visible = true, t = 0;
  const dark = () => root.dataset.theme === "dark";
  const stored = (() => { try { return localStorage.getItem("patchwork-murmur-theme"); } catch { return null; } })();
  root.dataset.theme = stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const icon = () => (toggle.innerHTML = dark()
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/></svg><span class="hx-sr">Switch to dusk</span>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor"/></svg><span class="hx-sr">Switch to night</span>');
  icon();
  toggle.addEventListener("click", () => { root.dataset.theme = dark() ? "light" : "dark"; icon(); try { localStorage.setItem("patchwork-murmur-theme", root.dataset.theme); } catch {} });

  const COUNT = innerWidth < 760 ? 600 : 1400;
  const px = new Float32Array(COUNT), py = new Float32Array(COUNT), pz = new Float32Array(COUNT);
  const vx = new Float32Array(COUNT), vy = new Float32Array(COUNT), vz = new Float32Array(COUNT), ph = new Float32Array(COUNT);
  const tx = new Float32Array(COUNT), ty = new Float32Array(COUNT);
  let spelling = 0, falcon = { x: -999, y: -999 }, ring2 = { x: 0, y: 0, rx: 100, ry: 60 };
  const fit = () => { word.style.fontSize = "200px"; const k = (W * .88) / word.getBoundingClientRect().width; word.style.fontSize = Math.min(200 * k, H * .44) + "px"; };
  const resize = () => {
    const r = root.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2); W = r.width; H = r.height;
    for (const c of [back, front]) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    bx.setTransform(dpr, 0, 0, dpr, 0, 0); fx.setTransform(dpr, 0, 0, dpr, 0, 0); fit();
  };
  resize();
  for (let i = 0; i < COUNT; i++) {
    const a = Math.random() * 6.283, r = Math.random() * 160;
    px[i] = W * .55 + Math.cos(a) * r * 1.6; py[i] = H * .35 + Math.sin(a) * r * .6; pz[i] = (Math.random() - .5) * 160;
    vx[i] = 2 + Math.random(); vy[i] = (Math.random() - .5); vz[i] = (Math.random() - .5); ph[i] = Math.random() * 6.283;
  }
  // targets inside the letters: render the word to a small canvas and sample its ink
  const sampleWord = () => {
    const wr = word.getBoundingClientRect(), rr = root.getBoundingClientRect();
    const c = document.createElement("canvas"), s = .25; c.width = Math.ceil(W * s); c.height = Math.ceil(H * s);
    const g = c.getContext("2d"), cs = getComputedStyle(word);
    g.font = `${cs.fontWeight} ${parseFloat(cs.fontSize) * s}px ${cs.fontFamily}`; g.textAlign = "center"; g.textBaseline = "alphabetic";
    g.fillText(word.textContent || "", (wr.left - rr.left + wr.width / 2) * s, (wr.top - rr.top) * s + parseFloat(cs.fontSize) * s * .78);
    const d = g.getImageData(0, 0, c.width, c.height).data, pts = [];
    for (let y = 0; y < c.height; y++) for (let x = 0; x < c.width; x++) if (d[(y * c.width + x) * 4 + 3] > 128) pts.push([x / s, y / s]);
    for (let i = 0; i < COUNT; i++) { const p = pts[(Math.random() * pts.length) | 0] || [W / 2, H / 3]; tx[i] = p[0] + Math.random() * 3; ty[i] = p[1] + Math.random() * 3; }
  };
  spell.addEventListener("click", () => {
    if (spelling > 0) { spelling = 0; spell.setAttribute("aria-pressed", "false"); return; }
    sampleWord(); spelling = 4.5; spell.setAttribute("aria-pressed", "true");
  });
  root.addEventListener("pointermove", (e) => { const r = root.getBoundingClientRect(); falcon = { x: e.clientX - r.left, y: e.clientY - r.top }; });
  root.addEventListener("pointerleave", () => (falcon = { x: -999, y: -999 }));
  root.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a,button")) return;
    const r = root.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    for (let i = 0; i < COUNT; i++) { const dx = px[i] - x, dy = py[i] - y, d = Math.hypot(dx, dy) + 1; if (d < 260) { const k = (1 - d / 260) * 9; vx[i] += dx / d * k; vy[i] += dy / d * k; } }
  });

  // spatial grid for neighbour lookups
  const CELL = 34, head = new Map(), next = new Int32Array(COUNT);
  const step = (dt) => {
    head.clear();
    for (let i = 0; i < COUNT; i++) { const k = ((px[i] / CELL) | 0) * 4096 + ((py[i] / CELL) | 0); next[i] = head.has(k) ? head.get(k) : -1; head.set(k, i); }
    // the flock's home wanders slowly through the upper half, looping around the word
    const hx = W * (.5 + .3 * Math.sin(t * .13)), hy = H * (.34 + .1 * Math.sin(t * .21 + 1)), hz = 120 * Math.sin(t * .17);
    let ax = 0, ay = 0, sx = 0, sy = 0;
    for (let i = 0; i < COUNT; i++) {
      let cxs = 0, cys = 0, czs = 0, axs = 0, ays = 0, azs = 0, sepx = 0, sepy = 0, sepz = 0, n = 0;
      const gx = (px[i] / CELL) | 0, gy = (py[i] / CELL) | 0;
      for (let ox = -1; ox <= 1; ox++) for (let oy = -1; oy <= 1; oy++) {
        let j = head.has((gx + ox) * 4096 + gy + oy) ? head.get((gx + ox) * 4096 + gy + oy) : -1, seen = 0;
        while (j >= 0 && seen < 14) {
          if (j !== i) {
            const dx = px[j] - px[i], dy = py[j] - py[i], dz = (pz[j] - pz[i]) * .5, d2 = dx * dx + dy * dy + dz * dz;
            if (d2 < CELL * CELL) { n++; cxs += px[j]; cys += py[j]; czs += pz[j]; axs += vx[j]; ays += vy[j]; azs += vz[j]; if (d2 < 340) { sepx -= dx / (d2 + 4); sepy -= dy / (d2 + 4); sepz -= dz / (d2 + 4); } }
          }
          j = next[j]; seen++;
        }
      }
      let fx2 = 0, fy2 = 0, fz2 = 0;
      if (n) { fx2 += (cxs / n - px[i]) * .0016 + (axs / n - vx[i]) * .05 + sepx * 5; fy2 += (cys / n - py[i]) * .0016 + (ays / n - vy[i]) * .05 + sepy * 5; fz2 += (czs / n - pz[i]) * .0016 + (azs / n - vz[i]) * .05 + sepz * 5; }
      // a loose pull home, only felt far from it, so the flock can stretch into ribbons
      const hd = Math.hypot(hx - px[i], (hy - py[i]) * 1.8);
      if (hd > W * .22) { fx2 += (hx - px[i]) * .0012; fy2 += (hy - py[i]) * .0016; }
      fz2 += (hz - pz[i]) * .0005;
      const dx = px[i] - falcon.x, dy = py[i] - falcon.y, d = Math.hypot(dx, dy) + 1;
      if (d < 150) { const k = (1 - d / 150) * 1.4; fx2 += dx / d * k; fy2 += dy / d * k; }
      if (spelling > 0) { fx2 = (tx[i] - px[i]) * .06 - vx[i] * .25; fy2 = (ty[i] - py[i]) * .06 - vy[i] * .25; fz2 = -pz[i] * .03; }
      vx[i] += fx2; vy[i] += fy2; vz[i] += fz2;
      const sp = Math.hypot(vx[i], vy[i], vz[i]), max = spelling > 0 ? 9 : 4.2, min = spelling > 0 ? 0 : 1.6;
      if (sp > max) { vx[i] *= max / sp; vy[i] *= max / sp; vz[i] *= max / sp; } else if (sp < min) { vx[i] *= min / sp; vy[i] *= min / sp; vz[i] *= min / sp; }
      px[i] += vx[i] * dt * 60; py[i] += vy[i] * dt * 60; pz[i] = Math.max(-240, Math.min(240, pz[i] + vz[i] * dt * 60));
      ax += vx[i] / (sp || 1); ay += vy[i] / (sp || 1); sx += px[i]; sy += py[i]; ph[i] += dt * (12 + sp * 2);
    }
    if (spelling > 0) { spelling -= dt; if (spelling <= 0) spell.setAttribute("aria-pressed", "false"); }
    return { order: Math.hypot(ax, ay) / COUNT, cx: sx / COUNT, cy: sy / COUNT };
  };
  const draw = () => {
    bx.clearRect(0, 0, W, H); fx.clearRect(0, 0, W, H);
    const col = dark() ? "rgba(235,230,255," : "rgba(27,22,38,";
    for (let i = 0; i < COUNT; i++) {
      const ctx = pz[i] > 0 ? fx : bx, k = 1 + pz[i] / 400, s = 3.4 * k, sp = Math.hypot(vx[i], vy[i]) || 1;
      const ux = vx[i] / sp, uy = vy[i] / sp, flap = Math.sin(ph[i]) * .9;
      ctx.strokeStyle = col + (.45 + .5 * (k - .4)) + ")"; ctx.lineWidth = Math.max(.8, 1.3 * k);
      ctx.beginPath();
      ctx.moveTo(px[i] - ux * s - uy * s * (1 + flap), py[i] - uy * s + ux * s * (1 + flap));
      ctx.lineTo(px[i] + ux * s * .6, py[i] + uy * s * .6);
      ctx.lineTo(px[i] - ux * s + uy * s * (1 + flap), py[i] - uy * s - ux * s * (1 + flap));
      ctx.stroke();
    }
  };
  let last = performance.now(), slow = 0;
  const frame = (now) => {
    raf = requestAnimationFrame(frame);
    if (!visible || document.hidden) { last = now; return; }
    const dt = Math.min(.033, (now - last) / 1000); last = now; t += dt;
    const s = step(dt); draw();
    // the pencil ring and the panel follow the flock, smoothly
    let spread = 0; for (let i = 0; i < COUNT; i += 7) spread += Math.hypot(px[i] - s.cx, py[i] - s.cy); spread /= COUNT / 7;
    ring2.x += (s.cx - ring2.x) * .05; ring2.y += (s.cy - ring2.y) * .05; ring2.rx += (Math.min(250, spread * 1.1) - ring2.rx) * .05; ring2.ry += (Math.min(130, spread * .7) - ring2.ry) * .05;
    ring2.y = Math.max(ring2.y, Math.max(26, ring2.ry) + 150);
    ring.style.transform = `translate(${ring2.x - 130}px, ${ring2.y - 75}px)`;
    const el = ring.querySelector("ellipse"); el.setAttribute("rx", String(Math.max(40, ring2.rx))); el.setAttribute("ry", String(Math.max(26, ring2.ry)));
    ring.querySelector("text").setAttribute("y", String(75 - Math.max(26, ring2.ry) - 12));
    if ((slow += dt) > .25) { slow = 0; out.order.textContent = s.order.toFixed(2); out.spread.textContent = `${Math.round(spread * 1.6)} m`; out.meter.style.width = `${Math.round(s.order * 100)}%`; }
  };
  out.n.textContent = COUNT.toLocaleString("en");
  new ResizeObserver(resize).observe(root);
  document.fonts?.ready.then(resize);
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
  if (reduced) { for (let k = 0; k < 120; k++) { t += 1 / 60; step(1 / 60); } draw(); return; }
  raf = requestAnimationFrame(frame);
  if (!window.gsap) return;
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(word, { autoAlpha: 0, scale: 1.04, duration: 2 }, 0)
    .from(".mm-issue,.mm-title .w>span", { yPercent: 110, autoAlpha: 0, stagger: .05, duration: 1.1 }, .4)
    .from(".mm-sub,.hx-murmur .hx-actions,.mm-panel", { y: 20, autoAlpha: 0, stagger: .1, duration: .9 }, .9)
    .from(".mm-ring", { autoAlpha: 0, duration: 1 }, 1.6);
})();
