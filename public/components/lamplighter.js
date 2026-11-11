/* <pw-lamplighter>: put it inside a heading. When the heading scrolls into view, a lamplighter walks
   along the real tops of your letters (measured from the font), hopping over word gaps and down to the
   next line, and lights each letter with his pole as he passes. Screen readers get the plain heading.
   Attributes: color (glow of the lit letters), size (pixel scale, 2-4), speed (px/s), replay ("once" | "scroll"). */
(() => {
  const pal = { f: "#7a4a2a", t: "#4b4560", k: "#1b1622", h: "#2a2233", b: "#e8b04a", s: "#f0c39b", e: "#1b1622", c: "#3a4a7a", d: "#28335a", w: "#f6e7c8" };
  const body = [
    "...kkkkk...",
    "...hhhhh...",
    "...hbbbh...",
    ".kkkkkkkkk.",
    "...sssss...",
    "...sssesk..",
    "...sssss...",
    "....sss....",
    "..ddcccdd..",
    ".dccccccss.",
    ".dcccwcccd.",
    ".dccccccdd.",
    "..cccwccc..",
    "..ccccccc..",
  ];
  const legsA = ["...tt.tt...", "...tt.tt...", "..fff.fff.."];
  const legsB = ["..tt...tt..", ".tt.....tt.", "fff.....fff"];
  const tip = ["...kkkkk...", "...hhhhh...", ".kkhbbbh...", "..kkkkkkkk."];
  const S = (rows) => PW.sprite(rows, pal);
  const STAND = S([...body, ...legsA]), WALK = S([...body, ...legsB]), BOW = S([...tip, ...body.slice(4), ...legsA]);

  PW.css("pw-lamplighter", `
.pw-ll-word{white-space:nowrap}
.pw-ll-ch{transition:opacity .45s ease,text-shadow .9s ease}
.pw-ll-dim .pw-ll-ch{opacity:.26}
.pw-ll-dim .pw-ll-ch.pw-lit{opacity:1;text-shadow:0 0 .18em var(--pw-glow),0 0 .7em color-mix(in srgb,var(--pw-glow) 40%,transparent)}
.pw-ll-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
@media (prefers-reduced-motion:reduce){.pw-ll-ch{transition:none}}`);

  class Lamplighter extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      this.style.display = "none";
      requestAnimationFrame(() => this.setup());
    }
    disconnectedCallback() { this._off?.(); this._io?.disconnect(); }
    setup() {
      const host = this.parentElement;
      if (!host) return;
      this.host = host;
      host.style.setProperty("--pw-glow", this.getAttribute("color") || "#ffc56b");
      // Split the heading's text into letters, kept in words so lines still break between words.
      const sr = document.createElement("span"); sr.className = "pw-ll-sr"; sr.textContent = host.textContent.trim();
      const walker = document.createTreeWalker(host, NodeFilter.SHOW_TEXT, { acceptNode: (n) => (n.parentElement.closest("pw-lamplighter") ? NodeFilter.FILTER_REJECT : NodeFilter.FILTER_ACCEPT) });
      const nodes = []; while (walker.nextNode()) nodes.push(walker.currentNode);
      for (const n of nodes) {
        const wrap = document.createElement("span"); wrap.setAttribute("aria-hidden", "true");
        for (const part of n.textContent.split(/(\s+)/)) {
          if (!part) continue;
          if (/^\s+$/.test(part)) { wrap.append(part); continue; }
          const w = document.createElement("span"); w.className = "pw-ll-word";
          for (const ch of part) { const c = document.createElement("span"); c.className = "pw-ll-ch"; c.textContent = ch; w.append(c); }
          wrap.append(w);
        }
        n.replaceWith(wrap);
      }
      host.prepend(sr);
      this.chars = [...host.querySelectorAll(".pw-ll-ch")];
      this.measure();
      this.s = Math.max(2, Math.min(5, Math.round(PW.num(this, "size", this.fs / 34))));
      this.speed = PW.num(this, "speed", 230);
      this.state = "waiting";
      if (PW.reduced) { this.chars.forEach((c) => c.classList.add("pw-lit")); host.classList.add("pw-ll-dim"); this.state = "done"; this.t = 1e3; }
      else host.classList.add("pw-ll-dim");
      this._io = new IntersectionObserver(([e]) => {
        if (e.isIntersecting && this.state === "waiting") this.start();
        if (!e.isIntersecting && this.getAttribute("replay") === "scroll" && this.state === "done" && !PW.reduced) this.reset();
        PW.wake();
      }, { threshold: 0.6 });
      this._io.observe(host);
      this._off = PW.stage(this);
      document.fonts?.ready.then(() => { this.measure(); PW.wake(); });
    }
    // How far above the baseline each glyph really reaches, from the font itself.
    measure() {
      const cs = getComputedStyle(this.host);
      const ctx = document.createElement("canvas").getContext("2d");
      ctx.font = `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`;
      const m0 = ctx.measureText("Hg");
      this.fDesc = m0.fontBoundingBoxDescent ?? parseFloat(cs.fontSize) * 0.22;
      this.asc = this.chars.map((c) => ctx.measureText(c.textContent).actualBoundingBoxAscent || parseFloat(cs.fontSize) * 0.7);
      this.fs = parseFloat(cs.fontSize);
    }
    reset() { this.chars.forEach((c) => c.classList.remove("pw-lit")); this.state = "waiting"; }
    start() { this.state = "walk"; this.p = -1; this.t = 0; }
    points() {
      return this.chars.map((c, i) => {
        const r = c.getBoundingClientRect();
        return { x: r.left + r.width / 2, w: r.width, top: r.bottom - this.fDesc - this.asc[i], line: Math.round(r.top) };
      });
    }
    frame(ctx, dt, now) {
      if (!this.chars?.length) return false;
      const hr = this.host.getBoundingClientRect();
      if (hr.bottom < -200 || hr.top > innerHeight + 200) return false;
      const pts = this.points(), s = this.s, n = pts.length;
      // The path: in from the left, letter to letter, out to a resting spot after the last one.
      const first = pts[0], last = pts[n - 1];
      const way = [{ x: first.x - first.w - 26, top: first.top, line: first.line }, ...pts, { x: last.x + last.w * 0.5 + 10 * s, top: last.top, line: last.line }];
      let x, y, frameSpr = STAND, flip = false;
      if (this.state === "waiting") return false;
      if (this.state === "walk") {
        const i = Math.max(0, Math.floor(this.p + 1)), a = way[i], b = way[Math.min(i + 1, way.length - 1)];
        const dist = Math.hypot(b.x - a.x, b.top - a.top);
        const jump = a.line !== b.line || Math.abs(b.x - a.x) > Math.max(a.w, b.w) * 2.2;
        const segT = Math.max(0.12, (jump ? dist * 0.6 + 30 : dist) / this.speed);
        this.p += dt / segT;
        const f = Math.min(1, this.p + 1 - i);
        const e = f * f * (3 - 2 * f);
        x = a.x + (b.x - a.x) * (jump ? e : f);
        const dy = b.top - a.top;
        y = a.top + dy * (jump ? e : Math.min(1, Math.max(0, (f - 0.3) / 0.4)));
        const arc = jump ? Math.max(16, dist * 0.1) : Math.abs(dy) > 1 ? Math.abs(dy) * 0.5 + 3 : 0;
        y -= Math.sin(f * Math.PI) * arc;
        frameSpr = jump && f > 0.15 && f < 0.85 ? WALK : Math.floor(this.p * 4) % 2 ? WALK : STAND;
        flip = b.x < a.x;
        // The pole reaches a letter ahead: light whatever its tip has passed.
        const lit = Math.floor(this.p + 1.55);
        for (let k = 0; k < Math.min(lit, n); k++) if (!this.chars[k].classList.contains("pw-lit")) { this.chars[k].classList.add("pw-lit"); this.spark = { x: pts[k].x, y: pts[k].top, t: 0 }; }
        if (this.p >= way.length - 2) { this.state = "done"; this.t = 0; this.chars.forEach((c) => c.classList.add("pw-lit")); }
      }
      if (this.state === "done") {
        const end = way[way.length - 1];
        x = end.x; y = end.top; this.t += dt;
        frameSpr = this.t > 0.3 && this.t < 1.3 ? BOW : STAND;
      }
      // Pole and flame.
      const hx = x + (flip ? -3 : 3) * s, hy = y - 8 * s;
      const tx = x + (flip ? -9 : 9) * s, ty = y - 20 * s;
      ctx.strokeStyle = "#5a3d24"; ctx.lineWidth = s; ctx.lineCap = "square";
      ctx.beginPath(); ctx.moveTo(Math.round(hx), Math.round(hy)); ctx.lineTo(Math.round(tx), Math.round(ty)); ctx.stroke();
      const fl = 0.7 + 0.3 * Math.sin(now * 23) * Math.sin(now * 7.3);
      const g = ctx.createRadialGradient(tx, ty - 2 * s, 0, tx, ty - 2 * s, 9 * s);
      g.addColorStop(0, `rgba(255,200,110,${0.55 * fl})`); g.addColorStop(1, "rgba(255,200,110,0)");
      ctx.fillStyle = g; ctx.fillRect(tx - 9 * s, ty - 11 * s, 18 * s, 18 * s);
      ctx.fillStyle = "#ff9a3c"; ctx.fillRect(Math.round(tx - s), Math.round(ty - 3 * s), 2 * s, 3 * s);
      ctx.fillStyle = "#ffe08a"; ctx.fillRect(Math.round(tx - (fl > 0.8 ? 0 : s) * 0.5), Math.round(ty - (2 + fl) * s), s, Math.round((1 + fl) * s));
      PW.draw(ctx, frameSpr, x, y + s, s, flip);
      // A burst of sparks on the letter that just caught.
      if (this.spark && this.spark.t < 0.5) {
        this.spark.t += dt;
        for (let k = 0; k < 6; k++) {
          const a = k * 1.05 + 0.3, r = this.spark.t * 60;
          ctx.fillStyle = k % 2 ? "#ffe08a" : "#ff9a3c";
          ctx.fillRect(Math.round(this.spark.x + Math.cos(a) * r), Math.round(this.spark.y - 4 + Math.sin(a) * r * 0.6 - this.spark.t * 20), s, s);
        }
      }
      return true;
    }
  }
  customElements.get("pw-lamplighter") || customElements.define("pw-lamplighter", Lamplighter);
})();
