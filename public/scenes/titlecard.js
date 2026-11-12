/* Title cards: the page's headline painted into the scene as a film title.
   The lettering is drawn on a transparent canvas the size of the painting and handed to Diorama's
   title plane, which hangs it at a real depth: nearer things (a branch, a jellyfish, a signal post)
   pass in front of the letters, and the letters cast a soft shadow on what lies behind.
   Opening: black, a "presents" credit, the picture fades up with a slow push-in, then the
   kicker, the title and the credit write themselves on. Esc or the skip button jumps to the end.
   TitleCard(diorama, { box: [cx, cy, w], color, kicker, credit, ink }) */
(() => {
  const ease = (t) => (t <= 0 ? 0 : t >= 1 ? 1 : t * t * (3 - 2 * t));
  const span = (t, a, b) => ease((t - a) / (b - a));

  window.TitleCard = (d, opts = {}) => {
    if (!d) return;
    const root = d.canvas.closest("main.sx");
    const text = (sel) => (root.querySelector(sel)?.textContent || "").trim();
    const title = text(".sx-title"), kicker = text(".sx-eyebrow"), brand = text(".sx-brand span") || title;
    if (!title) return; // words switched off: the scene is a plain background
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const W = 1672, H = 941; // every painting is this size; the canvas matches it texel for texel
    const cv = document.createElement("canvas"); cv.width = W; cv.height = H;
    const g = cv.getContext("2d");
    const color = opts.color || "#fff4dd", ink = opts.ink || "rgba(0,0,0,.35)";

    // How much of the painting is on screen: on a phone only a narrow middle strip shows.
    const visibleWidth = () => {
      const r = d.canvas.getBoundingClientRect(), a = r.width / Math.max(1, r.height), img = W / H;
      return Math.min(1, a / img) / 1.08;
    };
    // Break the title into at most three balanced lines that fit the width at the largest size.
    function layout() {
      const vis = visibleWidth(), narrow = vis < (opts.box?.[2] ?? .6) + .04;
      const cx = narrow ? .5 : opts.box?.[0] ?? .5, cy = narrow ? (opts.phoneY ?? opts.box?.[1] ?? .3) : opts.box?.[1] ?? .3;
      const w = (narrow ? vis * .86 : opts.box?.[2] ?? .6) * W;
      const words = title.split(/\s+/);
      let best = null;
      for (let lines = 1; lines <= 3; lines++) {
        // greedy balance: aim for equal character counts per line
        const target = title.length / lines, out = [];
        let cur = "";
        for (const wd of words) { if (cur && (cur + " " + wd).length > target * 1.15 && out.length < lines - 1) { out.push(cur); cur = wd; } else cur = cur ? cur + " " + wd : wd; }
        out.push(cur);
        g.font = `italic 100px "Instrument Serif"`;
        const widest = Math.max(...out.map((l) => g.measureText(l).width));
        const tall = ((narrow ? opts.phoneH ?? .34 : opts.box?.[3] ?? .3) * H) / (out.length * .92);
        const size = Math.min((w / widest) * 100, tall, 260) * (opts.scale ?? 1);
        const score = size * (1 - .1 * (out.length - 1));
        if (!best || score > best.score) best = { lines: out, size, score };
      }
      // keep the kicker clear of the navigation: the block's top stays below ~15% of the visible picture
      const block = best.lines.length * best.size * .92, minTop = H * .15 + best.size * .45;
      const y = Math.max(cy * H, minTop + block / 2);
      return { cx: cx * W, cy: y, w, ...best, narrow };
    }
    let L = layout();

    // The card at a moment t (0 → nothing, 1 → complete).
    function paint(t) {
      g.clearRect(0, 0, W, H);
      const { cx, cy, size, lines, narrow } = L, lh = size * .92, block = lines.length * lh;
      const top = cy - block / 2;
      // the small lines are set in the pixel face, at a whole number of screen texels so they stay crisp
      const texel = (visibleWidth() * W) / Math.max(1, d.canvas.width);
      let capsSize = Math.max(Math.round(10 * texel), Math.min(46, size * .2));
      // the longest small line must fit the card's width, spacing and rules included
      g.font = `500 100px "Pixelify Sans"`;
      const longest = Math.max(...[kicker, opts.credit || `a ${brand} picture`].map((x) => g.measureText(x.toUpperCase()).width / 100 + x.length * .3));
      capsSize = Math.max(Math.round(7 * texel), Math.min(capsSize, (L.w * (narrow ? 1 : .8)) / longest));
      g.textAlign = "center"; g.textBaseline = "alphabetic";
      // kicker: spaced capitals that close up as they arrive, with rules either side
      const k = span(t, .05, .35);
      // on a phone the small lines would be a few pixels tall; the page shows the kicker as text instead
      if (kicker && k > 0 && !narrow) {
        const spacing = (.45 - .25 * k) * capsSize;
        g.font = `500 ${capsSize}px "Pixelify Sans"`; g.letterSpacing = spacing + "px";
        g.globalAlpha = k; g.fillStyle = color;
        const ky = top - capsSize * .9;
        g.fillText(kicker.toUpperCase(), cx + spacing / 2, ky);
        const kw = g.measureText(kicker.toUpperCase()).width, rl = narrow ? 0 : capsSize * 2.6 * k;
        g.fillRect(cx - kw / 2 - capsSize * .8 - rl, ky - capsSize * .36, rl, 2);
        g.fillRect(cx + kw / 2 + capsSize * .8, ky - capsSize * .36, rl, 2);
        g.letterSpacing = "0px";
      }
      // title: written on left to right through a soft wipe, rising a little as it goes
      const tt = span(t, .2, .85);
      if (tt > 0) {
        g.font = `italic ${size}px "Instrument Serif"`;
        lines.forEach((line, i) => {
          const y = top + lh * (i + .82) + (1 - tt) * size * .08;
          const lw = g.measureText(line).width, x0 = cx - lw / 2;
          // each line starts a little after the one above
          const lt = Math.max(0, Math.min(1, tt * lines.length - i * .7));
          if (lt <= 0) return;
          const edge = x0 + (lw + size) * lt - size * .5;
          const grad = g.createLinearGradient(edge - size * .5, 0, edge + size * .1, 0);
          grad.addColorStop(0, color); grad.addColorStop(1, "rgba(255,255,255,0)");
          g.globalAlpha = 1;
          // a faint inked edge under the letters keeps them readable over busy painting
          g.save(); g.shadowColor = ink; g.shadowBlur = size * .08; g.shadowOffsetY = size * .02;
          g.fillStyle = lt >= 1 ? color : grad; g.fillText(line, cx, y); g.restore();
        });
      }
      // credit: brand in small capitals under a short rule
      const c = span(t, .72, 1);
      if (c > 0 && opts.credit !== false && !narrow) {
        const cs = capsSize * .9, y = top + block + cs * 2.1;
        g.globalAlpha = c; g.fillStyle = color;
        g.fillRect(cx - cs * 1.4, y - cs * 1.9, cs * 2.8 * c, 2);
        g.font = `500 ${cs}px "Pixelify Sans"`; g.letterSpacing = cs * .22 + "px";
        g.fillText((opts.credit || `a ${brand} picture`).toUpperCase(), cx + cs * .11, y);
        g.letterSpacing = "0px";
      }
      g.globalAlpha = 1;
      d.setTitle(cv);
    }

    // Opening credits on a black card, then the push-in.
    const open = document.createElement("div");
    open.className = "tc-open"; open.setAttribute("aria-hidden", "true");
    open.innerHTML = `<i class="tc-bar"></i><i class="tc-bar"></i><p class="tc-present"></p>`;
    open.querySelector(".tc-present").textContent = opts.presents || `${brand} presents`;
    root.append(open);
    const skip = document.createElement("button");
    skip.type = "button"; skip.className = "tc-skip"; skip.textContent = "Skip intro";
    root.append(skip);

    let t0 = 0, raf = 0, done = false;
    const DUR = 7.2, zoom0 = opts.push ?? 1.14;
    function frame(now) {
      if (!t0) t0 = now;
      const s = (now - t0) / 1000;
      root.classList.toggle("tc-presenting", s < 2.2);
      open.style.setProperty("--black", String(1 - span(s, 2.1, 3.4)));
      open.style.setProperty("--bars", String(1 - span(s, 4.6, 6.4)));
      d.cam.zoom = 1 + (zoom0 - 1) * (1 - span(s, 2.1, 7.2));
      paint(span(s, 3.4, 6.2));
      if (s < DUR) raf = requestAnimationFrame(frame); else finish();
    }
    function finish() {
      cancelAnimationFrame(raf); done = true;
      d.cam.zoom = 1; open.style.setProperty("--black", "0"); open.style.setProperty("--bars", "0");
      root.classList.remove("tc-presenting"); root.classList.add("tc-done");
      skip.hidden = true; paint(1);
    }
    function play() {
      done = false; t0 = 0; skip.hidden = false; root.classList.remove("tc-done");
      if (reduced) return finish();
      raf = requestAnimationFrame(frame);
    }
    skip.addEventListener("click", finish);
    addEventListener("keydown", (e) => { if (e.key === "Escape" && !done) finish(); });
    let resizeT = 0;
    addEventListener("resize", () => { clearTimeout(resizeT); resizeT = setTimeout(() => { L = layout(); if (done) paint(1); }, 120); });

    const fonts = Promise.all([`italic 100px "Instrument Serif"`, `500 20px "Pixelify Sans"`].map((f) => document.fonts.load(f))).catch(() => {});
    // Previews (framed) and return visits in the same session start on the finished card; the button replays it.
    let seen = false;
    try { seen = window.top !== window.self || sessionStorage.getItem("tc-seen-" + root.dataset.scene) === "1"; sessionStorage.setItem("tc-seen-" + root.dataset.scene, "1"); } catch { seen = true; }
    Promise.all([d.ready, fonts]).then(() => { L = layout(); seen ? finish() : play(); });
    return { play, finish };
  };
})();
