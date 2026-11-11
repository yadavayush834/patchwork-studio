/* Prism: a white beam meets a glass prism and comes out as a spectrum. Every wavelength is traced
   with Snell's law and its own refractive index (exaggerated dispersion), including total internal
   reflection. The pointer turns the prism; a click fires a pulse of light down the beam. */
(() => {
  const root = document.querySelector(".hx-prism"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const ctx = canvas.getContext("2d");
  const N = 28;
  const st = { aim: 0, taim: 0, lift: 0, tlift: 0, pulse: 99, fade: reduced ? 1 : 0, visible: true, raf: 0 };
  let W = 0, H = 0, dpr = 1;
  const resize = () => {
    const r = canvas.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.width = Math.round(r.width * dpr); H = canvas.height = Math.round(r.height * dpr);
  };
  const sub = (a, b) => [a[0] - b[0], a[1] - b[1]], add = (a, b) => [a[0] + b[0], a[1] + b[1]], mul = (a, s) => [a[0] * s, a[1] * s];
  const dot = (a, b) => a[0] * b[0] + a[1] * b[1], norm = (a) => { const l = Math.hypot(a[0], a[1]) || 1; return [a[0] / l, a[1] / l]; };
  const cross = (a, b) => a[0] * b[1] - a[1] * b[0];
  // Hit the nearest prism edge from p along d (ignoring the edge we start on).
  const hit = (p, d, tri, skip) => {
    let best = null;
    for (let i = 0; i < 3; i++) {
      if (i === skip) continue;
      const a = tri[i], b = tri[(i + 1) % 3], e = sub(b, a), den = cross(d, e);
      if (Math.abs(den) < 1e-9) continue;
      const t = cross(sub(a, p), e) / den, u = cross(sub(a, p), d) / den;
      if (t > 1e-6 && u >= 0 && u <= 1 && (!best || t < best.t)) best = { t, i, at: add(p, mul(d, t)), n: norm([e[1], -e[0]]) };
    }
    return best;
  };
  // Snell: d into a surface with outward normal n, going from index n1 to n2. Null on total internal reflection.
  const refract = (d, n, n1, n2) => {
    let N_ = n, cosi = -dot(d, N_);
    if (cosi < 0) { N_ = mul(n, -1); cosi = -cosi; }
    const eta = n1 / n2, k = 1 - eta * eta * (1 - cosi * cosi);
    if (k < 0) return null;
    return norm(add(mul(d, eta), mul(N_, eta * cosi - Math.sqrt(k))));
  };
  const reflect = (d, n) => sub(d, mul(n, 2 * dot(d, n)));
  const colour = (k, a) => `hsla(${(1 - k) * 0 + k * 275},100%,${58 + 8 * Math.sin(k * 3)}%,${a})`;

  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.to(st, { fade: 1, duration: 1.6, ease: "power2.inOut", delay: 0.2 });
    gsap.from(".p-title .w > span", { yPercent: 105, duration: 1.1, ease: "expo.out", stagger: 0.08, delay: 0.6 });
    gsap.from(".p-sub, .p-copy .hx-actions, .hx-nav > *, .p-read", { autoAlpha: 0, y: 14, duration: 0.8, ease: "power3.out", stagger: 0.07, delay: 1 });
  };
  const draw = (t) => {
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.globalCompositeOperation = "source-over";
    const bg = ctx.createRadialGradient(W * 0.66, H * 0.45, 0, W * 0.66, H * 0.45, Math.max(W, H) * 0.8);
    bg.addColorStop(0, "#111118"); bg.addColorStop(1, "#060609");
    ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
    // The prism.
    const C = [W * 0.6, H * 0.4 + st.lift * H * 0.04], side = Math.min(W, H) * 0.36;
    // Turned only within the range where the light always leaves as a clean fan.
    const ang = -Math.PI / 2 + 0.22 + st.aim * 0.1 + (reduced ? 0 : 0.03 * Math.sin(t * 0.4));
    const R = side / Math.sqrt(3);
    const tri = [0, 1, 2].map((i) => [C[0] + R * Math.cos(ang + i * 2.0944), C[1] + R * Math.sin(ang + i * 2.0944)]);
    // The beam: from beyond the top-left corner toward the prism's middle.
    const O = [-W * 0.04, H * 0.3], d0 = norm(sub(add(C, [-side * 0.08, side * 0.02]), O));
    const entry = hit(O, d0, tri, -1);
    const f = st.fade;
    ctx.globalCompositeOperation = "lighter";
    ctx.lineCap = "round";
    const beamTo = entry ? entry.at : add(O, mul(d0, W * 2));
    // Incoming white light, with a soft halo.
    for (const [w, a] of [[26, 0.04], [9, 0.1], [2.2, 0.85]]) {
      ctx.strokeStyle = `rgba(255,252,245,${a * f})`; ctx.lineWidth = w * dpr;
      ctx.beginPath(); ctx.moveTo(O[0], O[1]); ctx.lineTo(beamTo[0], beamTo[1]); ctx.stroke();
    }
    const paths = [];
    if (entry) {
      for (let i = 0; i < N; i++) {
        const k = i / (N - 1);
        const n = 1.42 + 0.3 * Math.pow(k, 1.1);
        let d = refract(d0, entry.n, 1, n), p = entry.at, skip = entry.i, inside = [p], out = null;
        for (let b = 0; b < 4 && d; b++) {
          const h = hit(p, d, tri, skip);
          if (!h) break;
          inside.push(h.at);
          const o = refract(d, h.n, n, 1);
          // Light leaving backwards (after a reflection inside) would cross the words; let it go.
          if (o) { out = o[0] > -0.15 ? [h.at, o] : null; break; }
          d = reflect(d, dot(d, h.n) > 0 ? h.n : mul(h.n, -1)); p = h.at; skip = h.i;
        }
        paths.push({ k, inside, out });
      }
      // Inside the glass: faint, already coloured.
      for (const { k, inside } of paths) {
        ctx.strokeStyle = colour(k, 0.16 * f); ctx.lineWidth = 1.4 * dpr;
        ctx.beginPath(); inside.forEach((q, j) => (j ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.stroke();
      }
      // Out into the room: a wash of colour, then the bright rays on top.
      for (const pass of [[44, 0.035], [12, 0.07], [2, 0.6]]) {
        for (const { k, out } of paths) {
          if (!out) continue;
          const end = add(out[0], mul(out[1], W * 1.5));
          const g = ctx.createLinearGradient(out[0][0], out[0][1], end[0], end[1]);
          g.addColorStop(0, colour(k, pass[1] * f)); g.addColorStop(0.45, colour(k, pass[1] * 0.75 * f)); g.addColorStop(1, colour(k, 0));
          ctx.strokeStyle = g; ctx.lineWidth = pass[0] * dpr * (pass[0] > 20 ? 1 + k * 0.4 : 1);
          ctx.beginPath(); ctx.moveTo(out[0][0], out[0][1]); ctx.lineTo(end[0], end[1]); ctx.stroke();
        }
      }
      // A pulse of light: white along the beam, then splitting into colour.
      if (st.pulse < 3) {
        const speed = W * 0.9, s = st.pulse * speed, L0 = Math.hypot(...sub(beamTo, O));
        const blob = (q, c, r) => { const g = ctx.createRadialGradient(q[0], q[1], 0, q[0], q[1], r); g.addColorStop(0, c); g.addColorStop(1, "rgba(0,0,0,0)"); ctx.fillStyle = g; ctx.fillRect(q[0] - r, q[1] - r, r * 2, r * 2); };
        if (s < L0) blob(add(O, mul(d0, s)), "rgba(255,255,255,.9)", 26 * dpr);
        else for (const { k, out } of paths) if (out) blob(add(out[0], mul(out[1], (s - L0) * 1.1)), colour(k, 0.8), 16 * dpr);
      }
      // A glint where the light enters.
      const g = ctx.createRadialGradient(entry.at[0], entry.at[1], 0, entry.at[0], entry.at[1], 40 * dpr);
      g.addColorStop(0, `rgba(255,255,255,${0.7 * f})`); g.addColorStop(1, "rgba(255,255,255,0)");
      ctx.fillStyle = g; ctx.fillRect(entry.at[0] - 40 * dpr, entry.at[1] - 40 * dpr, 80 * dpr, 80 * dpr);
    }
    // Glass: a cool body, bright edges, a highlight running down one face.
    ctx.globalCompositeOperation = "source-over";
    const body = ctx.createLinearGradient(tri[0][0], tri[0][1], tri[1][0], tri[1][1]);
    body.addColorStop(0, "rgba(255,255,255,.075)"); body.addColorStop(1, "rgba(160,180,255,.03)");
    ctx.fillStyle = body;
    ctx.beginPath(); tri.forEach((q, j) => (j ? ctx.lineTo(q[0], q[1]) : ctx.moveTo(q[0], q[1]))); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = `rgba(255,255,255,${0.28 + 0.2 * f})`; ctx.lineWidth = 1.3 * dpr; ctx.lineJoin = "round"; ctx.stroke();
    const e0 = tri[0], e1 = tri[1];
    const hl = ctx.createLinearGradient(e0[0], e0[1], e1[0], e1[1]);
    hl.addColorStop(0, "rgba(255,255,255,0)"); hl.addColorStop(0.5, "rgba(255,255,255,.55)"); hl.addColorStop(1, "rgba(255,255,255,0)");
    ctx.strokeStyle = hl; ctx.lineWidth = 2.5 * dpr; ctx.beginPath(); ctx.moveTo(e0[0], e0[1]); ctx.lineTo(e1[0], e1[1]); ctx.stroke();
    // Dust motes drifting through the beam.
    if (entry) {
      for (let i = 0; i < 26; i++) {
        const u = ((i * 0.618 + t * 0.012 * (1 + (i % 5) * 0.2)) % 1), q = add(O, mul(sub(beamTo, O), u));
        const off = Math.sin(i * 12.9 + t * 0.6) * 10 * dpr;
        ctx.fillStyle = `rgba(255,250,235,${(0.25 + 0.35 * Math.abs(Math.sin(t + i))) * f})`;
        ctx.fillRect(q[0] - d0[1] * off, q[1] + d0[0] * off, 1.6 * dpr, 1.6 * dpr);
      }
    }
    const read = root.querySelector(".p-angle");
    if (read) read.textContent = `${((ang + Math.PI / 2) * 57.3).toFixed(1).padStart(5, " ")}°`;
  };
  resize(); new ResizeObserver(() => { resize(); if (reduced) draw(2); }).observe(canvas);
  root.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    st.taim = ((e.clientX - r.left) / r.width - 0.5) * 2; st.tlift = ((e.clientY - r.top) / r.height - 0.5) * 2;
  });
  root.addEventListener("pointerdown", (e) => { if (!e.target.closest("a,button")) st.pulse = 0; });
  let last = performance.now(); const t0 = last;
  const frame = (now) => {
    st.raf = 0;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    const k = 1 - Math.exp(-dt * 3);
    st.aim += (st.taim - st.aim) * k; st.lift += (st.tlift - st.lift) * k; st.pulse += dt;
    draw((now - t0) / 1000);
    if (st.visible) st.raf = requestAnimationFrame(frame);
  };
  const run = () => { if (!st.raf && st.visible && !reduced) { last = performance.now(); st.raf = requestAnimationFrame(frame); } };
  new IntersectionObserver(([e]) => { st.visible = e.isIntersecting && !document.hidden; run(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { st.visible = !document.hidden; run(); });
  enter();
  if (reduced) draw(2); else run();
})();
