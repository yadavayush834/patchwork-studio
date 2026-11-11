/* Paper Terminal: a rotating globe drawn only in characters. The cursor is a lens that shows the graticule and live coordinates. */
(() => {
  const root = document.querySelector(".hx-atlas"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const css = getComputedStyle(document.documentElement);
  const INK = css.getPropertyValue("--ink").trim() || "#191919", BLUE = css.getPropertyValue("--accent").trim() || "#2340ff", PAPER = css.getPropertyValue("--bg").trim() || "#f1ede4";
  const readout = root.querySelector(".a-readout"), latEl = root.querySelector(".a-lat"), lonEl = root.querySelector(".a-lon"), hitEl = root.querySelector(".a-hit"), meter = root.querySelector(".a-glyphs");
  const OCEAN = " .,:", LAND = "-=+*#%@", NIGHT = " .";
  // Smooth 3D value noise for continents that do not repeat.
  const hash = (x, y, z) => { const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return h - Math.floor(h); };
  const noise = (x, y, z) => {
    const xi = Math.floor(x), yi = Math.floor(y), zi = Math.floor(z), xf = x - xi, yf = y - yi, zf = z - zi;
    const u = xf * xf * (3 - 2 * xf), v = yf * yf * (3 - 2 * yf), w = zf * zf * (3 - 2 * zf);
    const l = (a, b, t) => a + (b - a) * t;
    return l(l(l(hash(xi, yi, zi), hash(xi + 1, yi, zi), u), l(hash(xi, yi + 1, zi), hash(xi + 1, yi + 1, zi), u), v), l(l(hash(xi, yi, zi + 1), hash(xi + 1, yi, zi + 1), u), l(hash(xi, yi + 1, zi + 1), hash(xi + 1, yi + 1, zi + 1), u), v), w);
  };
  const land = (x, y, z) => {
    let s = 0, a = 0.5, f = 1.6;
    for (let o = 0; o < 4; o++) { s += a * noise(x * f + 11, y * f + 7, z * f + 3); a *= 0.5; f *= 2.1; }
    return s - 0.52 + Math.abs(y) * 0.08;
  };
  // Continents never change, only turn: bake them once into an equirectangular map.
  const MW = 512, MH = 256, map = new Float32Array(MW * MH);
  for (let j = 0; j < MH; j++) {
    const lat = (j / (MH - 1) - 0.5) * Math.PI, cl = Math.cos(lat), sl = Math.sin(lat);
    for (let i = 0; i < MW; i++) {
      const lon = (i / MW) * Math.PI * 2 - Math.PI;
      map[j * MW + i] = land(cl * Math.sin(lon), sl, cl * Math.cos(lon));
    }
  }
  const landAt = (lat, lon) => {
    const fx = ((lon + Math.PI) / (Math.PI * 2)) * MW, fy = (lat / Math.PI + 0.5) * (MH - 1);
    const i = Math.floor(fx), j = Math.min(MH - 2, Math.max(0, Math.floor(fy))), u = fx - i, v = fy - j;
    const i0 = ((i % MW) + MW) % MW, i1 = (i0 + 1) % MW;
    const a = map[j * MW + i0], b = map[j * MW + i1], c = map[(j + 1) * MW + i0], d = map[(j + 1) * MW + i1];
    return (a + (b - a) * u) * (1 - v) + (c + (d - c) * u) * v;
  };
  let W = 0, H = 0, CW = 8, CH = 15, dpr = 1;
  const resize = () => {
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = canvas.clientWidth; H = canvas.clientHeight;
    canvas.width = Math.round(W * dpr); canvas.height = Math.round(H * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    CW = W < 760 ? 7 : 8.4; CH = CW * 1.8;
  };
  // Glyph atlas: every character in every style, drawn once; frames stamp them with drawImage.
  const CHARS = " .,:-=+*#%@|~·[]o", atlas = document.createElement("canvas"), actx = atlas.getContext("2d");
  const styles = new Map();
  let gw = 0, gh = 0;
  const buildAtlas = () => {
    gw = Math.ceil(CW * 1.25 * dpr); gh = Math.ceil(CH * dpr);
    const keys = [[INK, 1], [INK, 0.55], [INK, 0.22], [BLUE, 1], [BLUE, 0.6]];
    atlas.width = gw * CHARS.length; atlas.height = gh * keys.length;
    actx.clearRect(0, 0, atlas.width, atlas.height);
    actx.font = `${Math.round(CW * 1.55 * dpr)}px "JetBrains Mono", monospace`;
    actx.textAlign = "center"; actx.textBaseline = "middle";
    styles.clear();
    keys.forEach(([color, alpha], row) => {
      actx.globalAlpha = alpha; actx.fillStyle = color;
      for (let k = 0; k < CHARS.length; k++) actx.fillText(CHARS[k], k * gw + gw / 2, row * gh + gh / 2);
      styles.set(color + alpha, row);
    });
    actx.globalAlpha = 1;
  };
  const pointer = { x: -999, y: -999, on: false };
  addEventListener("pointermove", (e) => { const r = canvas.getBoundingClientRect(); pointer.x = e.clientX - r.left; pointer.y = e.clientY - r.top; pointer.on = e.pointerType !== "touch"; }, { passive: true });
  root.addEventListener("pointerleave", () => (pointer.on = false));
  const state = { reveal: reduced ? 1 : 0, spin: 0 };
  const draw = (time) => {
    ctx.fillStyle = PAPER;
    ctx.fillRect(0, 0, W, H);
    const cx = W < 760 ? W * 0.5 : W * 0.7, cy = W < 760 ? H * 0.36 : H * 0.52, R = Math.min(H * 0.38, W * (W < 760 ? 0.42 : 0.25));
    const yaw = state.spin, tilt = 0.38, cyaw = Math.cos(yaw), syaw = Math.sin(yaw), ct = Math.cos(tilt), st = Math.sin(tilt);
    const L = [-0.55, 0.55, 0.62], LR = 90;
    const font = `${Math.round(CW * 1.55)}px "JetBrains Mono", monospace`;
    ctx.font = font; ctx.textBaseline = "middle"; ctx.textAlign = "center";
    let count = 0, under = null;
    const buckets = new Map();
    const cols = Math.ceil(W / CW), rows = Math.ceil(H / CH);
    const reveal = state.reveal * (rows + 6);
    for (let r = 0; r < rows; r++) {
      if (r > reveal) break;
      for (let c = 0; c < cols; c++) {
        const px = (c + 0.5) * CW, py = (r + 0.5) * CH;
        const sx = (px - cx) / R, sy = (py - cy) / R, d2 = sx * sx + sy * sy;
        const lensD = pointer.on ? Math.hypot(px - pointer.x, py - pointer.y) : 999, inLens = lensD < LR;
        let ch = "", color = INK, alpha = 1;
        if (d2 <= 1) {
          const z = Math.sqrt(1 - d2);
          // View space to globe space: undo tilt, then the spin.
          // Undo the axial tilt (about x), then the spin (about y).
          const vy = -sy, ty = vy * ct + z * st, tz = -vy * st + z * ct;
          const gx = sx * cyaw - tz * syaw, gz = sx * syaw + tz * cyaw, gy = ty;
          const light = Math.max(0, sx * L[0] + -sy * L[1] + z * L[2]);
          const lat = Math.asin(Math.max(-1, Math.min(1, gy))), lon = Math.atan2(gx, gz);
          const h = landAt(lat, lon);
          if (inLens) {
            const glat = Math.abs(((lat * 180) / Math.PI) % 15) < 1.4, glon = Math.abs(((lon * 180) / Math.PI) % 15) < 1.4 * (1 / Math.max(0.2, Math.cos(lat)));
            color = BLUE;
            ch = glat && glon ? "+" : glat ? "-" : glon ? "|" : h > 0.02 ? "#" : h > -0.02 ? "~" : "·";
            if (lensD < 3 + CW) under = { lat, lon, h };
          } else if (h > 0) {
            // Land carries the shape: dense glyphs by light, a darker rim at the coast.
            ch = light < 0.06 ? NIGHT[(h * 20) % 2 | 0] : h < 0.025 ? "%" : LAND[Math.min(LAND.length - 1, Math.floor((0.25 + light * 0.8) * LAND.length))];
            if (light < 0.06 && h > 0.06 && hash(c, r, 1) > 0.8) { ch = "*"; color = BLUE; }
          } else {
            // Ocean stays quiet: a sparse stipple that thins into the night side.
            ch = light > 0.45 ? (hash(c, r, 4) > 0.3 ? "." : ",") : light > 0.12 ? (hash(c, r, 4) > 0.55 ? "." : "") : "";
            alpha = 0.55;
          }
        } else if (d2 < 1.09) {
          ch = hash(c, r, 2) > 0.45 ? "." : "";
          alpha = 0.55;
        } else if (inLens) {
          ch = (c % 4 === 0 && r % 2 === 0) ? "+" : "";
          color = BLUE;
          alpha = 0.6;
        } else if ((c + r * 3) % 11 === 0 && hash(c, r, 3) > 0.7) {
          ch = "."; alpha = 0.22;
        }
        if (inLens && lensD > LR - CW * 1.1) { ch = "·"; color = BLUE; alpha = 1; }
        if (!ch || ch === " ") continue;
        // Batch by style: one fillStyle/alpha change per bucket, not per glyph.
        const key = color + alpha;
        (buckets.get(key) ?? buckets.set(key, { color, alpha, items: [] }).get(key)).items.push(ch, px, py);
        count++;
      }
    }
    const dw = gw / dpr, dh = gh / dpr;
    for (const [key, { items }] of buckets) {
      const row = styles.get(key) ?? 0;
      for (let i = 0; i < items.length; i += 3) {
        const k = CHARS.indexOf(items[i]);
        if (k > 0) ctx.drawImage(atlas, k * gw, row * gh, gw, gh, items[i + 1] - dw / 2, items[i + 2] - dh / 2, dw, dh);
      }
    }
    // A satellite on a tilted orbit, behind the globe on its far side.
    const a = time * 0.45, ox = Math.cos(a) * R * 1.32, oy = Math.sin(a) * R * 0.38 - Math.cos(a) * R * 0.12, behind = Math.sin(a) < 0 && Math.hypot(ox, oy) < R;
    if (!behind && state.reveal > 0.9) {
      ctx.globalAlpha = 1; ctx.fillStyle = BLUE;
      ctx.fillText("[o]", cx + ox, cy + oy);
      for (let k = 1; k < 9; k++) {
        const b = a - k * 0.06, tx = Math.cos(b) * R * 1.32, ty = Math.sin(b) * R * 0.38 - Math.cos(b) * R * 0.12;
        if (!(Math.sin(b) < 0 && Math.hypot(tx, ty) < R)) { ctx.globalAlpha = 0.5 - k * 0.05; ctx.fillText(".", cx + tx, cy + ty); }
      }
    }
    ctx.globalAlpha = 1;
    if (meter) meter.textContent = count.toLocaleString("en");
    if (readout) {
      readout.classList.toggle("is-on", !!under);
      if (under) {
        const la = (under.lat * 180) / Math.PI, lo = (under.lon * 180) / Math.PI;
        latEl.textContent = `${Math.abs(la).toFixed(3).padStart(6, "0")} ${la >= 0 ? "N" : "S"}`;
        lonEl.textContent = `${Math.abs(lo).toFixed(3).padStart(7, "0")} ${lo >= 0 ? "E" : "W"}`;
        hitEl.textContent = under.h > 0 ? "land" : "ocean";
        readout.style.transform = `translate(${pointer.x + 18}px, ${pointer.y + 18}px)`;
      }
    }
  };
  resize();
  addEventListener("resize", () => { resize(); buildAtlas(); if (reduced) draw(0); });
  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.to(state, { reveal: 1, duration: 1.8, ease: "power2.inOut", delay: 0.2 });
    gsap.from(".a-title .w > span", { yPercent: 110, duration: 1.1, ease: "power4.out", stagger: 0.05, delay: 0.5 });
    gsap.from(".a-sub, .a-copy .hx-actions, .hx-nav > *, .a-meter", { autoAlpha: 0, y: 12, duration: 0.9, ease: "power2.out", stagger: 0.08, delay: 0.9 });
    const prompt = root.querySelector(".a-prompt"), text = prompt.textContent;
    prompt.textContent = "";
    gsap.to({ n: 0 }, { n: text.length, duration: 1.2, ease: "none", delay: 0.3, onUpdate() { prompt.textContent = text.slice(0, Math.round(this.targets()[0].n)); } });
  };
  let raf = 0, visible = true, last = 0;
  const loop = () => { cancelAnimationFrame(raf); if (reduced || !visible || document.hidden) return; raf = requestAnimationFrame((t) => { const dt = Math.min(0.05, (t - last) / 1000 || 0.016); last = t; state.spin += dt * 0.18; draw(t / 1000); loop(); }); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(root);
  document.addEventListener("visibilitychange", loop);
  (document.fonts ? document.fonts.load('16px "JetBrains Mono"') : Promise.resolve()).then(() => {
    buildAtlas();
    enter();
    if (reduced) { state.spin = 1.2; draw(0); } else loop();
  });
})();
