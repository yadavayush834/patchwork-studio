/* Patchwork components: the shared kit. Every component file needs this one first.
   - PW.sprite(rows, palette): pixel art from strings ("." is transparent), drawn once to a tiny canvas.
   - PW.stage(actor): one shared, click-through canvas over the page; actors draw in viewport pixels.
   - PW.scroll.v: smoothed scroll speed (px/s). PW.say(text): polite screen-reader announcement.
   - PW.reduced: true when the visitor asked for less motion; components then show a still pose. */
(() => {
  if (window.PW) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const sprite = (rows, pal) => {
    const w = Math.max(...rows.map((r) => r.length)), h = rows.length;
    const c = document.createElement("canvas"); c.width = w; c.height = h;
    const x = c.getContext("2d");
    rows.forEach((r, y) => [...r].forEach((ch, X) => { if (pal[ch]) { x.fillStyle = pal[ch]; x.fillRect(X, y, 1, 1); } }));
    return c;
  };
  // Draw a sprite at (x, y) = its bottom centre, scaled by s, optionally mirrored and rotated.
  const draw = (ctx, spr, x, y, s, flip = false, rot = 0, alpha = 1) => {
    ctx.save(); ctx.globalAlpha = alpha; ctx.translate(Math.round(x), Math.round(y));
    if (rot) ctx.rotate(rot);
    if (flip) ctx.scale(-1, 1);
    ctx.imageSmoothingEnabled = false;
    ctx.drawImage(spr, Math.round(-spr.width * s / 2), -spr.height * s, spr.width * s, spr.height * s);
    ctx.restore();
  };
  let cv = null, ctx = null, dpr = 1, raf = 0, last = 0;
  const actors = new Set();
  const size = () => { dpr = Math.min(devicePixelRatio || 1, 2); cv.width = Math.round(innerWidth * dpr); cv.height = Math.round(innerHeight * dpr); };
  const ensure = () => {
    if (cv) return;
    cv = document.createElement("canvas");
    cv.setAttribute("aria-hidden", "true");
    cv.className = "pw-stage";
    Object.assign(cv.style, { position: "fixed", left: "0", top: "0", width: "100vw", height: "100vh", pointerEvents: "none", zIndex: "2147482000" });
    document.body.appendChild(cv);
    ctx = cv.getContext("2d");
    size(); addEventListener("resize", () => { size(); wake(); });
    document.addEventListener("visibilitychange", () => { if (!document.hidden) wake(); });
  };
  let sy = scrollY, vel = 0;
  const loop = (now) => {
    raf = 0;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    if (dt > 0) { const raw = (scrollY - sy) / dt; vel += (raw - vel) * Math.min(1, dt * 10); sy = scrollY; }
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, innerWidth, innerHeight); ctx.imageSmoothingEnabled = false;
    let busy = Math.abs(vel) > 2;
    for (const a of actors) if (a.frame(ctx, dt, now / 1000) !== false) busy = true;
    if (busy && !document.hidden) raf = requestAnimationFrame(loop);
  };
  const wake = () => { if (!raf && cv) { last = performance.now(); raf = requestAnimationFrame(loop); } };
  addEventListener("scroll", wake, { passive: true });
  const stage = (actor) => { ensure(); actors.add(actor); wake(); return () => { actors.delete(actor); wake(); }; };
  let live = null;
  const say = (text) => {
    if (!live) {
      live = document.createElement("div");
      live.setAttribute("role", "status"); live.setAttribute("aria-live", "polite");
      Object.assign(live.style, { position: "fixed", width: "1px", height: "1px", overflow: "hidden", clip: "rect(0 0 0 0)", whiteSpace: "nowrap" });
      document.body.appendChild(live);
    }
    live.textContent = ""; setTimeout(() => (live.textContent = text), 30);
  };
  // A small pixel speech bubble, drawn on the stage.
  const bubble = (ctx, text, x, y, s, fg = "#1d1a24", bg = "#fffaf0") => {
    ctx.save();
    ctx.font = `600 ${Math.round(5 * s)}px "Pixelify Sans", ui-monospace, monospace`;
    const w = Math.ceil(ctx.measureText(text).width) + 6 * s, h = 9 * s;
    const L = Math.round(x - w / 2), T = Math.round(y - h - 3 * s);
    ctx.fillStyle = fg; ctx.fillRect(L - s, T, w + 2 * s, h); ctx.fillRect(L, T - s, w, h + 2 * s);
    ctx.fillStyle = bg; ctx.fillRect(L, T, w, h);
    ctx.fillStyle = fg; ctx.fillRect(Math.round(x - s), T + h + s, 2 * s, s); ctx.fillRect(Math.round(x), T + h + 2 * s, s, s);
    ctx.fillStyle = bg; ctx.fillRect(Math.round(x - s), T + h, 2 * s, s);
    ctx.fillStyle = fg; ctx.textBaseline = "middle"; ctx.textAlign = "center";
    ctx.fillText(text, Math.round(x), Math.round(T + h / 2 + s * 0.5));
    ctx.restore();
  };
  const num = (el, name, d) => { const v = parseFloat(el.getAttribute(name)); return Number.isFinite(v) ? v : d; };
  const css = (id, text) => { if (document.getElementById(id)) return; const s = document.createElement("style"); s.id = id; s.textContent = text; document.head.appendChild(s); };
  // Procedural pixel art: everything snaps to a grid of s, so drawn creatures stay crisp like sprites.
  const snap = (v, s) => Math.round(v / s) * s;
  const dot = (ctx, x, y, s, c) => { ctx.fillStyle = c; ctx.fillRect(snap(x, s), snap(y, s), s, s); };
  const line = (ctx, x0, y0, x1, y1, s, c, w = 1) => {
    ctx.fillStyle = c;
    const n = Math.max(1, Math.ceil(Math.hypot(x1 - x0, y1 - y0) / s));
    for (let i = 0; i <= n; i++) { const k = i / n; ctx.fillRect(snap(x0 + (x1 - x0) * k, s), snap(y0 + (y1 - y0) * k, s), s * w, s * w); }
  };
  const blob = (ctx, cx, cy, rx, ry, s, c, rot = 0) => {
    ctx.fillStyle = c;
    const R = Math.ceil(Math.max(rx, ry) / s) + 1, co = Math.cos(rot), si = Math.sin(rot);
    for (let j = -R; j <= R; j++) for (let i = -R; i <= R; i++) {
      const x = i * s, y = j * s, u = (x * co + y * si) / rx, v = (-x * si + y * co) / ry;
      if (u * u + v * v <= 1) ctx.fillRect(snap(cx, s) + x, snap(cy, s) + y, s, s);
    }
  };
  // Pointer in viewport coordinates, shared by every creature (null when it has left the window).
  const pointer = { x: 0, y: 0, on: false, still: 0, t: 0 };
  addEventListener("pointermove", (e) => { pointer.x = e.clientX; pointer.y = e.clientY; pointer.on = true; pointer.t = performance.now(); wake(); }, { passive: true });
  document.addEventListener("pointerleave", () => { pointer.on = false; });
  window.PW = { reduced, sprite, draw, stage, wake, say, bubble, num, css, snap, dot, line, blob, pointer, scroll: { get v() { return vel; } } };
})();
