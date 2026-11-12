/* Airmail. Each plane is a little folded model (two wings and a keel), lit by one light and drawn in
   perspective. It flies an oval loop around the giant word, so on the far half of its loop it is
   drawn on the canvas behind the letters and on the near half on the canvas in front of them.
   Planes bank into their turns, leave dashed pencil trails, and a click throws a new one from the
   pointer that glides in and joins the loop. A switch turns the paper into a night sky. */
(() => {
  const root = document.querySelector(".hx-airmail");
  if (!root) return;
  const back = root.querySelector(".am-back"), front = root.querySelector(".am-front"), word = root.querySelector(".am-word");
  const note = root.querySelector(".am-note"), toggle = root.querySelector(".am-theme");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const bx = back.getContext("2d"), fx = front.getContext("2d");
  let W = 0, H = 0, dpr = 1, cx = 0, cy = 0, R = 300, t = 0, raf = 0, visible = true;
  const dark = () => root.dataset.theme === "dark";
  // light and theme
  const stored = (() => { try { return localStorage.getItem("patchwork-airmail-theme"); } catch { return null; } })();
  root.dataset.theme = stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const icon = () => (toggle.innerHTML = dark()
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/><g stroke="currentColor" stroke-width="1.8" stroke-linecap="round"><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></g></svg><span class="hx-sr">Switch to day</span>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 14.5A8.5 8.5 0 0 1 9.5 4a8.5 8.5 0 1 0 10.5 10.5Z" fill="currentColor"/></svg><span class="hx-sr">Switch to night</span>');
  icon();
  toggle.addEventListener("click", () => { root.dataset.theme = dark() ? "light" : "dark"; icon(); try { localStorage.setItem("patchwork-airmail-theme", root.dataset.theme); } catch {} if (reduced) draw(); });

  // the giant word fills the width
  const fit = () => { word.style.fontSize = "200px"; const k = (W * 0.86) / word.getBoundingClientRect().width; word.style.fontSize = Math.min(200 * k, H * 0.46) + "px"; };
  const resize = () => {
    const r = root.getBoundingClientRect(); dpr = Math.min(devicePixelRatio || 1, 2);
    W = r.width; H = r.height;
    for (const c of [back, front]) { c.width = Math.round(W * dpr); c.height = Math.round(H * dpr); }
    bx.setTransform(dpr, 0, 0, dpr, 0, 0); fx.setTransform(dpr, 0, 0, dpr, 0, 0);
    fit();
    const wr = word.getBoundingClientRect();
    cx = W / 2; cy = wr.top - r.top + wr.height * .5; R = Math.max(220, wr.width * .5);
  };

  // A paper plane: nose, tail corners of both wings, top of the fold, bottom of the keel (local x forward, y up, z right).
  const N = [1.1, 0, 0], TL = [-.75, .06, -.62], TR = [-.75, .06, .62], TC = [-.75, 0, 0], K = [-.6, -.2, 0];
  const FACES = [[N, TL, TC, 1], [N, TC, TR, 1], [N, TC, K, .78]];
  const rot = (p, yaw, pitch, roll) => {
    let [x, y, z] = p;
    let c = Math.cos(roll), s = Math.sin(roll); [y, z] = [y * c - z * s, y * s + z * c];
    c = Math.cos(pitch); s = Math.sin(pitch); [x, y] = [x * c - y * s, x * s + y * c];
    c = Math.cos(yaw); s = Math.sin(yaw); [x, z] = [x * c - z * s, x * s + z * c];
    return [x, y, z];
  };
  const CAM = 1400;
  const project = (x, y, z) => { const k = CAM / (CAM - z); return [cx + x * k, cy - y * k, k]; };

  const planes = [];
  const loop = (p, s) => [Math.cos(s) * R * p.rx, p.y0 + Math.sin(s * 2 + p.ph) * p.h, Math.sin(s) * R * p.rz];
  const add = (i, launch) => {
    const p = { rx: .62 + (i * .37 % 1) * .45, rz: .5 + (i * .53 % 1) * .45, y0: (i * .29 % 1 - .5) * R * .5, h: 30 + (i * .71 % 1) * 60,
      ph: i * 1.9, speed: (.16 + (i * .43 % 1) * .12) * (i % 2 ? 1 : -1), s: i * 2.4, size: 46 + (i * .61 % 1) * 26, trail: [], launch };
    planes.push(p); return p;
  };
  for (let i = 0; i < 7; i++) add(i);

  root.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a,button")) return;
    const r = root.getBoundingClientRect();
    const p = add(planes.length + 3, { x: e.clientX - r.left - cx, y: cy - (e.clientY - r.top), z: 380, age: 0 });
    p.s = Math.atan2(p.launch.z / (R * p.rz), p.launch.x / (R * p.rx));
    if (planes.length > 15) planes.splice(7, 1);
    note.style.opacity = "0";
  });

  const shadeFace = (ctx, pts, light, depthK) => {
    const [a, b, c] = pts;
    // flat lighting from the face normal
    const u = [b[0] - a[0], b[1] - a[1], b[2] - a[2]], v = [c[0] - a[0], c[1] - a[1], c[2] - a[2]];
    const n = [u[1] * v[2] - u[2] * v[1], u[2] * v[0] - u[0] * v[2], u[0] * v[1] - u[1] * v[0]];
    const len = Math.hypot(...n) || 1, lam = Math.abs((n[0] * -.3 + n[1] * .8 + n[2] * .5) / len);
    const P = pts.map((q) => project(q[0], q[1], q[2]));
    const d = dark();
    const l = (.55 + .45 * lam) * light;
    ctx.fillStyle = d ? `rgb(${Math.round(150 + 90 * l)},${Math.round(160 + 80 * l)},${Math.round(200 + 55 * l)})` : `rgb(${Math.round(205 + 50 * l)},${Math.round(200 + 52 * l)},${Math.round(190 + 55 * l)})`;
    ctx.beginPath(); ctx.moveTo(P[0][0], P[0][1]); ctx.lineTo(P[1][0], P[1][1]); ctx.lineTo(P[2][0], P[2][1]); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = d ? "rgba(220,228,255,.55)" : "rgba(29,34,54,.55)"; ctx.lineWidth = .8; ctx.stroke();
  };

  const draw = () => {
    bx.clearRect(0, 0, W, H); fx.clearRect(0, 0, W, H);
    const d = dark();
    if (d) { // a few stars on the back canvas
      for (let i = 0; i < 90; i++) { const x = (i * 97.3 % 1) * W, y = (i * 53.7 % 1) * H * .8, tw = .4 + .6 * Math.abs(Math.sin(t * .8 + i)); bx.fillStyle = `rgba(230,236,255,${tw * .7})`; bx.fillRect(x, y, 1.6, 1.6); }
    }
    const list = planes.map((p) => {
      let pos;
      if (p.launch && p.launch.age < 2.2) {
        const k = Math.min(1, p.launch.age / 2.2), e = k * k * (3 - 2 * k), lp = loop(p, p.s);
        pos = [p.launch.x + (lp[0] - p.launch.x) * e, p.launch.y + (lp[1] - p.launch.y) * e + Math.sin(k * Math.PI) * 80, p.launch.z + (lp[2] - p.launch.z) * e];
      } else pos = loop(p, p.s);
      const nxt = loop(p, p.s + .02 * Math.sign(p.speed)), vel = [nxt[0] - pos[0], nxt[1] - pos[1], nxt[2] - pos[2]];
      const yaw = Math.atan2(vel[2], vel[0]), pitch = Math.atan2(vel[1], Math.hypot(vel[0], vel[2])) * .8, roll = -Math.sign(p.speed) * .55 + Math.sin(p.s * 2) * .15;
      return { p, pos, yaw, pitch, roll };
    }).sort((a, b) => a.pos[2] - b.pos[2]);
    for (const { p, pos, yaw, pitch, roll } of list) {
      // dashed pencil trail, each piece on the canvas its depth belongs to
      p.trail.push(pos); if (p.trail.length > 70) p.trail.shift();
      for (let i = 1; i < p.trail.length; i++) {
        const a = p.trail[i - 1], b = p.trail[i], ctx = (a[2] + b[2]) / 2 > 0 ? fx : bx;
        const A = project(...a), B = project(...b);
        ctx.strokeStyle = d ? `rgba(160,180,255,${(i / p.trail.length) * .5})` : `rgba(43,79,163,${(i / p.trail.length) * .55})`;
        ctx.lineWidth = 1.2; ctx.setLineDash([5, 6]); ctx.lineDashOffset = -t * 30;
        ctx.beginPath(); ctx.moveTo(A[0], A[1]); ctx.lineTo(B[0], B[1]); ctx.stroke();
      }
      fx.setLineDash([]); bx.setLineDash([]);
      const ctx = pos[2] > 0 ? fx : bx, s = p.size * (1 + pos[2] / 1400);
      const pts = (f) => f.slice(0, 3).map((v) => { const q = rot(v, -yaw, pitch, roll); return [pos[0] + q[0] * s, pos[1] + q[1] * s, pos[2] + q[2] * s]; });
      if (d) { const [x, y] = project(...pos); const g = ctx.createRadialGradient(x, y, 0, x, y, s * 1.3); g.addColorStop(0, "rgba(255,214,160,.16)"); g.addColorStop(1, "rgba(255,214,160,0)"); ctx.fillStyle = g; ctx.fillRect(x - s * 1.3, y - s * 1.3, s * 2.6, s * 2.6); }
      const faces = FACES.map((f) => ({ f, z: pts(f).reduce((m, q) => m + q[2], 0) })).sort((a, b) => a.z - b.z);
      for (const { f } of faces) shadeFace(ctx, pts(f), f[3], pos[2]);
    }
    // the handwritten note follows the first plane when it is in front
    const first = list.find((x) => x.p === planes[0]);
    if (first) { const [x, y] = project(...first.pos); note.style.transform = `translate(${x + 60}px, ${y - 60}px)`; note.style.left = "0"; note.style.top = "0"; if (planes.length <= 7) note.style.opacity = first.pos[2] > 60 ? "1" : "0"; }
  };
  let last = performance.now();
  const frame = (now) => {
    raf = 0; const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (visible && !document.hidden) {
      t += dt;
      for (const p of planes) { p.s += p.speed * dt; if (p.launch) p.launch.age += dt; }
      draw();
    }
    raf = requestAnimationFrame(frame);
  };
  resize(); new ResizeObserver(() => { resize(); if (reduced) draw(); }).observe(root);
  document.fonts?.ready.then(() => { resize(); if (reduced) draw(); });
  new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
  if (reduced) { draw(); root.querySelectorAll(".am-scribble path").forEach((p) => (p.style.strokeDashoffset = "0")); return; }
  raf = requestAnimationFrame(frame);
  if (!window.gsap) { root.querySelectorAll(".am-scribble path").forEach((p) => (p.style.strokeDashoffset = "0")); return; }
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(word, { yPercent: 18, autoAlpha: 0, duration: 1.6 }, 0)
    .from(".am-title .w>span", { yPercent: 110, stagger: .06, duration: 1.1 }, .5)
    .to(".am-scribble path", { strokeDashoffset: 0, duration: 1, ease: "power2.inOut" }, 1.2)
    .from(".am-sub,.hx-airmail .hx-actions", { y: 20, autoAlpha: 0, stagger: .1, duration: .9 }, 1)
    .from(".am-stamp", { y: 40, rotate: 18, autoAlpha: 0, duration: 1.2, ease: "back.out(1.6)" }, 1.3)
    .from(".am-postmark", { scale: 1.6, autoAlpha: 0, duration: .5, ease: "power3.in" }, 1.9);
})();
