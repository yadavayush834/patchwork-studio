/* Afterglow. A collage: a dusk sky painted in canvas, a radial burst of glitch streaks behind a
   floating figure (a photographic cut-out with a paper edge), a little fairground below, and film
   damage over everything: scratches, dust, gate weave. The pointer steers the burst; a click
   glitches the whole frame: the streaks stutter backwards and the figure splits into colour. */
(() => {
  const root = document.querySelector(".hx-afterglow");
  if (!root) return;
  const sky = root.querySelector(".ag-sky"), film = root.querySelector(".ag-film"), fig = root.querySelector(".ag-figure"), wheel = root.querySelector(".ag-wheel");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const g = sky.getContext("2d"), f = film.getContext("2d");
  let W = 0, H = 0, t = 0, glitch = 0, cx = .55, cy = .42, tx = .55, ty = .42;
  const rays = Array.from({ length: 520 }, (_, i) => ({ a: Math.random() * Math.PI * 2, r0: .03 + Math.random() * .12, len: .2 + Math.random() * .9, w: .5 + Math.random() * 2.2, hue: [150, 300, 190, 330, 60][i % 5], sp: (Math.random() - .5) * .04, seg: Math.random() < .35 }));
  const blocks = Array.from({ length: 26 }, () => ({ a: Math.random() * 6.283, r: .15 + Math.random() * .5, w: 20 + Math.random() * 90, h: 4 + Math.random() * 16, hue: Math.random() < .5 ? 290 : 160 }));
  const dust = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: Math.random() * 1.6 + .3, life: Math.random() }));
  const resize = () => {
    const r = root.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 1.5);
    W = r.width; H = r.height;
    for (const c of [sky, film]) { c.width = Math.round(W * d); c.height = Math.round(H * d); }
    g.setTransform(d, 0, 0, d, 0, 0); f.setTransform(d, 0, 0, d, 0, 0);
  };
  const paintSky = () => {
    const gr = g.createLinearGradient(0, 0, 0, H);
    gr.addColorStop(0, "#3b2c8f"); gr.addColorStop(.45, "#7a5fd0"); gr.addColorStop(.8, "#d38ac7"); gr.addColorStop(1, "#f2b5a5");
    g.fillStyle = gr; g.fillRect(0, 0, W, H);
    const x = cx * W, y = cy * H, R = Math.hypot(W, H);
    // soft glow at the heart of the burst
    const hg = g.createRadialGradient(x, y, 0, x, y, R * .35); hg.addColorStop(0, "rgba(255,240,255,.55)"); hg.addColorStop(1, "rgba(255,240,255,0)");
    g.fillStyle = hg; g.fillRect(0, 0, W, H);
    g.save(); g.globalCompositeOperation = "screen";
    const back = glitch > 0 ? -1 : 1;
    for (const r of rays) {
      const a = r.a + t * r.sp * back * (glitch > 0 ? 6 : 1), c = Math.cos(a), s = Math.sin(a);
      const r0 = r.r0 * R, r1 = r0 + r.len * R * (glitch > 0 ? .4 + Math.random() * .8 : 1);
      g.strokeStyle = `hsla(${r.hue}, 90%, ${60 + (r.hue % 40)}%, ${.18 + (r.w / 2.7) * .3})`; g.lineWidth = r.w;
      g.beginPath();
      if (r.seg) { // broken, dashed streaks: the glitchy ones
        for (let k = 0; k < 6; k++) { const a0 = r0 + (r1 - r0) * (k / 6), a1 = a0 + (r1 - r0) / 12; g.moveTo(x + c * a0, y + s * a0); g.lineTo(x + c * a1, y + s * a1); }
      } else { g.moveTo(x + c * r0, y + s * r0); g.lineTo(x + c * r1, y + s * r1); }
      g.stroke();
    }
    // datamosh slabs sliding along the rays
    for (const b of blocks) {
      const rr = ((b.r + t * .03 * back) % .7 + .7) % .7 * R * .9, bx = x + Math.cos(b.a) * rr, by = y + Math.sin(b.a) * rr;
      g.fillStyle = `hsla(${b.hue}, 80%, 65%, ${.12 + glitch * .3})`; g.save(); g.translate(bx, by); g.rotate(b.a); g.fillRect(-b.w / 2, -b.h / 2, b.w, b.h); g.restore();
    }
    g.restore();
    // pink-white cloud bank at the bottom
    for (let i = 0; i < 9; i++) {
      const px = W * (i / 8) + Math.sin(t * .2 + i) * 20, py = H * .92 + Math.sin(i * 1.7) * 18, pr = 90 + (i % 3) * 50;
      const cg = g.createRadialGradient(px, py, 0, px, py, pr); cg.addColorStop(0, "rgba(255,235,245,.85)"); cg.addColorStop(1, "rgba(255,235,245,0)");
      g.fillStyle = cg; g.fillRect(px - pr, py - pr, pr * 2, pr * 2);
    }
  };
  const paintFilm = () => {
    f.clearRect(0, 0, W, H);
    // scratches: thin vertical lines that flicker in and out
    for (let i = 0; i < 4; i++) {
      if (Math.random() < .55) continue;
      const x = (Math.sin(t * 3.1 + i * 9.7) * .5 + .5) * W;
      f.strokeStyle = `rgba(255,255,255,${.15 + Math.random() * .25})`; f.lineWidth = Math.random() * 1.4 + .3;
      f.beginPath(); f.moveTo(x, 0); f.lineTo(x + (Math.random() - .5) * 8, H); f.stroke();
    }
    for (const d of dust) { d.life -= .03; if (d.life < 0) { d.x = Math.random(); d.y = Math.random(); d.life = Math.random(); } if (d.life > .5) { f.fillStyle = "rgba(20,10,30,.55)"; f.beginPath(); f.arc(d.x * W, d.y * H, d.r, 0, 6.283); f.fill(); } }
    // hair in the gate, now and then
    if (Math.random() < .03) { f.strokeStyle = "rgba(15,8,25,.5)"; f.lineWidth = 1; f.beginPath(); const x = Math.random() * W, y = Math.random() * H; f.moveTo(x, y); f.bezierCurveTo(x + 40, y - 30, x + 60, y + 40, x + 110, y + 10); f.stroke(); }
    // edge burn and vignette
    const v = f.createRadialGradient(W / 2, H / 2, Math.min(W, H) * .35, W / 2, H / 2, Math.max(W, H) * .75);
    v.addColorStop(0, "rgba(0,0,0,0)"); v.addColorStop(1, "rgba(30,10,40,.55)"); f.fillStyle = v; f.fillRect(0, 0, W, H);
  };
  root.addEventListener("pointermove", (e) => { const r = root.getBoundingClientRect(); tx = .55 + ((e.clientX - r.left) / r.width - .5) * .18; ty = .42 + ((e.clientY - r.top) / r.height - .5) * .12; });
  root.addEventListener("pointerdown", (e) => { if (e.target.closest("a,button")) return; glitch = .7; root.classList.add("is-glitch"); setTimeout(() => root.classList.remove("is-glitch"), 600); });
  new ResizeObserver(() => { resize(); paintSky(); paintFilm(); }).observe(root);
  resize(); paintSky(); paintFilm();
  if (reduced) return;
  let visible = true; new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
  let last = performance.now(), filmAcc = 0;
  const loop = (now) => {
    requestAnimationFrame(loop);
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (!visible || document.hidden) return;
    t += dt; glitch = Math.max(0, glitch - dt);
    cx += (tx - cx) * .04; cy += (ty - cy) * .04;
    paintSky();
    // film runs at 12 frames a second, like a projector
    if ((filmAcc += dt) > 1 / 12) { filmAcc = 0; paintFilm(); root.style.setProperty("--weave-x", `${(Math.random() - .5) * 2}px`); root.style.setProperty("--weave-y", `${(Math.random() - .5) * 2}px`); }
    // the figure floats, drifting toward the heart of the burst
    const fx = (cx - .55) * W, fy = (cy - .42) * H;
    fig.style.transform = `translate(calc(-50% + ${fx}px), calc(-50% + ${fy + Math.sin(t * .8) * 10}px)) rotate(${Math.sin(t * .5) * 4 - 6}deg)`;
    wheel.style.transform = `rotate(${Math.sin(t * .3) * 1.5}deg)`;
  };
  requestAnimationFrame(loop);
  if (window.gsap) gsap.timeline({ defaults: { ease: "back.out(1.6)" } })
    .from(".ag-strip", { y: 60, rotation: () => (Math.random() - .5) * 30, autoAlpha: 0, stagger: .08, duration: .9 }, .3)
    .from(".ag-figure-wrap", { scale: .6, autoAlpha: 0, duration: 1.4, ease: "expo.out" }, .1)
    .from(".ag-wheel", { y: 120, duration: 1.2, ease: "expo.out" }, .4)
    .from(".ag-sub,.hx-afterglow .hx-actions,.ag-ticket", { y: 20, autoAlpha: 0, stagger: .1, duration: .8, ease: "power3.out" }, .9);
})();
