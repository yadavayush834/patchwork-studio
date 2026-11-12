/* Deep. The card holds a live sea painted on a canvas: depth-tinted water, slow light shafts and
   drifting particles. The diver (a cut-out) stands 110px in front of the card in 3D, the outlined
   word behind it, and the pointer tilts the whole stack so the layers separate. Bubbles rise from
   the helmet; a click lets out a burst. Three dives change the sea, the depth and the words. */
(() => {
  const root = document.querySelector(".hx-deep");
  if (!root) return;
  const stage = root.querySelector(".dp-stage"), water = root.querySelector(".dp-water"), bubbles = root.querySelector(".dp-bubbles");
  const word = root.querySelector(".dp-word"), toggle = root.querySelector(".dp-theme"), nums = [...root.querySelectorAll(".dp-num")];
  const depthEl = root.querySelector(".dp-depth b"), placeEl = root.querySelector(".dp-depth span"), label = root.querySelector(".dp-label");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const DIVES = [
    { name: "The wreck", depth: 42, top: [24, 120, 128], bot: [4, 32, 44], ray: [190, 255, 240], label: "Dive 01 · A cargo ship, 1911" },
    { name: "The trench", depth: 310, top: [16, 40, 92], bot: [2, 6, 22], ray: [140, 170, 255], label: "Dive 02 · Where the light gives up" },
    { name: "The kelp", depth: 18, top: [60, 140, 90], bot: [8, 44, 34], ray: [230, 255, 190], label: "Dive 03 · A forest that sways" },
  ];
  let dive = 0, from = DIVES[0], mix = 1, shown = { depth: DIVES[0].depth };
  const dark = () => root.dataset.theme === "dark";
  const stored = (() => { try { return localStorage.getItem("patchwork-deep-theme"); } catch { return null; } })();
  root.dataset.theme = stored || (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
  const icon = () => (toggle.innerHTML = dark()
    ? '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="4.5" fill="currentColor"/></svg><span class="hx-sr">Back to the surface</span>'
    : '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 9c3-2 6 2 9 0s6 2 9 0M3 15c3-2 6 2 9 0s6 2 9 0" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg><span class="hx-sr">Go into the abyss</span>');
  icon();
  toggle.addEventListener("click", () => { root.dataset.theme = dark() ? "light" : "dark"; icon(); try { localStorage.setItem("patchwork-deep-theme", root.dataset.theme); } catch {} });

  const choose = (i) => {
    from = blend(); mix = 0; dive = (i + DIVES.length) % DIVES.length;
    nums.forEach((n, k) => n.setAttribute("aria-current", String(k === dive)));
    label.textContent = DIVES[dive].label; placeEl.textContent = DIVES[dive].name;
    if (window.gsap && !reduced) gsap.to(shown, { depth: DIVES[dive].depth, duration: 1.2, ease: "power2.out", onUpdate: () => (depthEl.textContent = `${Math.round(shown.depth)} m`) });
    else depthEl.textContent = `${DIVES[dive].depth} m`;
    if (window.gsap && !reduced) gsap.fromTo(".dp-diver", { y: 30, rotate: -3 }, { y: 0, rotate: 0, duration: 1.4, ease: "elastic.out(1, .5)" });
  };
  nums.forEach((n, i) => n.addEventListener("click", () => choose(i)));
  root.querySelector(".dp-prev").addEventListener("click", () => choose(dive - 1));
  root.querySelector(".dp-next").addEventListener("click", () => choose(dive + 1));
  const lerp = (a, b, k) => a.map((v, i) => v + (b[i] - v) * k);
  const blend = () => { const d = DIVES[dive], k = mix; return { top: lerp(from.top, d.top, k), bot: lerp(from.bot, d.bot, k), ray: lerp(from.ray, d.ray, k) }; };

  // the sea inside the card
  const g = water.getContext("2d"), b = bubbles.getContext("2d");
  let ww = 0, wh = 0, BW = 0, BH = 0, t = 0;
  const motes = Array.from({ length: 70 }, (_, i) => ({ x: (i * .618) % 1, y: (i * .371) % 1, s: .5 + (i * .29) % 1 }));
  const resize = () => {
    const r = water.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 2);
    ww = r.width; wh = r.height; water.width = Math.round(ww * d); water.height = Math.round(wh * d); g.setTransform(d, 0, 0, d, 0, 0);
    const R = root.getBoundingClientRect(); BW = R.width; BH = R.height; bubbles.width = Math.round(BW * d); bubbles.height = Math.round(BH * d); b.setTransform(d, 0, 0, d, 0, 0);
    word.style.fontSize = "200px"; word.style.fontSize = Math.min(200 * (BW * .76) / word.getBoundingClientRect().width, BH * .36) + "px";
  };
  const paintSea = () => {
    const c = blend(), dk = dark() ? .55 : 1;
    const grad = g.createLinearGradient(0, 0, 0, wh);
    grad.addColorStop(0, `rgb(${c.top.map((v) => Math.round(v * dk)).join(",")})`); grad.addColorStop(1, `rgb(${c.bot.map((v) => Math.round(v * dk)).join(",")})`);
    g.fillStyle = grad; g.fillRect(0, 0, ww, wh);
    // light shafts from above, swaying
    g.save(); g.globalCompositeOperation = "lighter";
    for (let i = 0; i < 7; i++) {
      const x = ww * (.1 + i * .14) + Math.sin(t * .4 + i * 1.7) * 30, w = 18 + (i * 13 % 30);
      const sh = g.createLinearGradient(0, 0, 0, wh * .9);
      sh.addColorStop(0, `rgba(${c.ray.map(Math.round).join(",")},${.16 * dk})`); sh.addColorStop(1, `rgba(${c.ray.map(Math.round).join(",")},0)`);
      g.fillStyle = sh; g.beginPath(); g.moveTo(x - w * .4, 0); g.lineTo(x + w * .4, 0); g.lineTo(x + w * 2.6 + 40, wh); g.lineTo(x - w * .6 + 40, wh); g.closePath(); g.fill();
    }
    for (const m of motes) { const y = (m.y - t * .01 * m.s) % 1, yy = (y + 1) % 1; g.fillStyle = `rgba(220,255,245,${.25 + .35 * m.s})`; g.fillRect(m.x * ww + Math.sin(t + m.s * 9) * 4, yy * wh, 1.6 * m.s + .4, 1.6 * m.s + .4); }
    g.restore();
    // a seabed silhouette
    g.fillStyle = `rgba(0,0,0,${.35})`; g.beginPath(); g.moveTo(0, wh);
    for (let x = 0; x <= ww; x += 8) g.lineTo(x, wh * .86 - Math.sin(x * .03 + dive) * 10 - Math.sin(x * .09) * 4);
    g.lineTo(ww, wh); g.fill();
  };
  // bubbles from the helmet, in page space so they rise past the frame
  const rise = [];
  const helmet = () => { const r = root.querySelector(".dp-diver").getBoundingClientRect(), R = root.getBoundingClientRect(); return { x: r.left - R.left + r.width * .53, y: r.top - R.top + r.height * .2 }; };
  const puff = (n, x, y, big) => { for (let i = 0; i < n; i++) rise.push({ x: x + (Math.random() - .5) * 16, y, r: big ? 3 + Math.random() * 7 : 1.5 + Math.random() * 4, v: 30 + Math.random() * 50, w: Math.random() * 6.28, life: 1 }); };
  const paintBubbles = (dt) => {
    b.clearRect(0, 0, BW, BH);
    for (const p of rise) {
      p.y -= p.v * dt; p.x += Math.sin(t * 3 + p.w) * .4; p.life -= dt * .22;
      b.strokeStyle = `rgba(220,250,245,${Math.max(0, p.life) * .8})`; b.lineWidth = 1.2;
      b.beginPath(); b.arc(p.x, p.y, p.r, 0, 6.283); b.stroke();
      b.fillStyle = `rgba(255,255,255,${Math.max(0, p.life) * .7})`; b.beginPath(); b.arc(p.x - p.r * .35, p.y - p.r * .35, p.r * .25, 0, 6.283); b.fill();
    }
    for (let i = rise.length - 1; i >= 0; i--) if (rise[i].life <= 0 || rise[i].y < -20) rise.splice(i, 1);
  };
  root.addEventListener("pointerdown", (e) => { if (e.target.closest("a,button")) return; const h = helmet(); puff(26, h.x, h.y, true); });
  // the pointer tilts the stack; layers sit at different depths so they separate
  let rx = 0, ry = 0, trx = 0, try_ = 0;
  root.addEventListener("pointermove", (e) => { trx = (e.clientY / innerHeight - .5) * -14; try_ = (e.clientX / innerWidth - .5) * 18; });
  new ResizeObserver(resize).observe(root); resize();
  document.fonts?.ready.then(resize);
  let visible = true; new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
  let last = performance.now(), emit = 0;
  const frame = (now) => {
    requestAnimationFrame(frame);
    if (!visible || document.hidden) { last = now; return; }
    const dt = Math.min(.05, (now - last) / 1000); last = now; t += dt; mix = Math.min(1, mix + dt * .9);
    rx += (trx - rx) * .06; ry += (try_ - ry) * .06;
    stage.style.transform = `rotateX(${rx}deg) rotateY(${ry}deg)`;
    word.style.transform = `translate(-50%, -58%) translate(${-ry * 2}px, ${rx * 2}px)`;
    if ((emit += dt) > .5) { emit = 0; const h = helmet(); puff(2, h.x, h.y, false); }
    paintSea(); paintBubbles(dt);
  };
  if (reduced) { paintSea(); return; }
  requestAnimationFrame(frame);
  if (!window.gsap) return;
  gsap.timeline({ defaults: { ease: "expo.out" } })
    .from(word, { autoAlpha: 0, letterSpacing: ".2em", duration: 2 }, 0)
    .from(".dp-card", { y: 60, rotateX: 25, autoAlpha: 0, duration: 1.6 }, .2)
    .from(".dp-diver", { y: 120, scale: .8, autoAlpha: 0, duration: 1.8 }, .5)
    .from(".dp-label,.dp-title .w>span", { yPercent: 110, autoAlpha: 0, stagger: .06, duration: 1.1 }, .8)
    .from(".dp-sub,.hx-deep .hx-actions,.dp-dives", { y: 20, autoAlpha: 0, stagger: .1, duration: .9 }, 1.2);
})();
