/* <pw-spider>: a small spider that lives on its parent element. It drops in on a silk thread, then
   walks the page on eight two-jointed legs (each foot is planted and stepped in an alternating gait).
   It runs from a quick cursor and creeps closer to a still one. Attributes: color (abdomen markings), size (1-3). */
(() => {
  const ROOT = [5, 2, -1, -4], FWD = [15, 6, -5, -13], OUT = [15, 19, 19, 15];
  class Spider extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement === document.body ? document.documentElement : this.parentElement;
      this.k = Math.max(1, Math.min(3, PW.num(this, "size", 2)));
      this.mark = this.getAttribute("color") || "#e8a23a";
      this.state = "wait"; this.t = 0; this.pause = 0.6; this.ang = Math.PI / 2; this.group = 0; this.stepT = 0;
      this.io = new IntersectionObserver(([e]) => { if (e.isIntersecting && this.state === "wait") this.begin(); }, { threshold: 0.2 });
      this.io.observe(this.host);
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); this.io?.disconnect(); }
    box() { const r = this.host.getBoundingClientRect(), root = this.host === document.documentElement; return { l: r.left, t: r.top, w: r.width, h: root ? Math.min(r.height, innerHeight) : r.height }; }
    // Dark section? Then a pale spider, so it can be seen.
    dark() {
      for (let el = this.host; el; el = el.parentElement) {
        const m = getComputedStyle(el).backgroundColor.match(/[\d.]+/g);
        if (m && (m[3] === undefined || +m[3] > 0.5)) return (0.3 * m[0] + 0.59 * m[1] + 0.11 * m[2]) < 110;
      }
      return false;
    }
    begin() {
      const d = this.dark();
      this.cols = d ? { leg: "#cfc6dc", ab: "#8e83a0", head: "#a79bb8" } : { leg: "#231d2b", ab: "#2b2333", head: "#3a3044" };
      const b = this.box();
      this.p = { x: b.w * (0.25 + Math.random() * 0.5), y: -30 };
      this.dropTo = Math.min(b.h - 30, 70 + Math.random() * Math.min(160, b.h * 0.4));
      this.state = PW.reduced ? "walk" : "drop"; this.t = 0;
      if (PW.reduced) this.p.y = this.dropTo;
      this.v = { x: 0, y: 0 }; this.feet = null; this.target = null;
      PW.wake();
    }
    rest(i, side) {
      const k = this.k, f = [Math.cos(this.ang), Math.sin(this.ang)], n = [-f[1], f[0]];
      return { x: this.p.x + f[0] * FWD[i] * k + n[0] * side * OUT[i] * k, y: this.p.y + f[1] * FWD[i] * k + n[1] * side * OUT[i] * k };
    }
    frame(ctx, dt, now) {
      if (this.state === "wait") return false;
      const b = this.box(), k = this.k, s = k;
      if (b.t + b.h < -50 || b.t > innerHeight + 50) return false;
      this.t += dt;
      const P = PW.pointer, px = P.x - b.l, py = P.y - b.t;
      const dP = Math.hypot(px - this.p.x, py - this.p.y);
      if (this.state === "drop") {
        // Down the thread, bobbing.
        this.p.y = Math.min(this.dropTo, this.p.y + dt * 90) + Math.sin(this.t * 5) * 1.5;
        if (this.p.y >= this.dropTo - 1 && this.t > 1) { this.state = "walk"; this.t = 0; this.threadFade = 1; }
      } else if (!PW.reduced) {
        // Decide where to go: away from a close pointer, toward a still one, or somewhere new.
        const still = (performance.now() - P.t) / 1000;
        let speed = 55;
        if (P.on && dP < 110) { const a = Math.atan2(this.p.y - py, this.p.x - px); this.target = { x: this.p.x + Math.cos(a) * 170, y: this.p.y + Math.sin(a) * 170 }; speed = 240; this.pause = 0; }
        else if (P.on && still > 1.2 && dP > 170 && dP < 420 && !this.target) { const a = Math.atan2(py - this.p.y, px - this.p.x); this.target = { x: px - Math.cos(a) * 130, y: py - Math.sin(a) * 130 }; speed = 30; }
        if (!this.target) { this.pause -= dt; if (this.pause <= 0) this.target = { x: 30 + Math.random() * (b.w - 60), y: 40 + Math.random() * (b.h - 80) }; }
        if (this.target) {
          this.target.x = Math.max(24, Math.min(b.w - 24, this.target.x)); this.target.y = Math.max(24, Math.min(b.h - 24, this.target.y));
          const dx = this.target.x - this.p.x, dy = this.target.y - this.p.y, d = Math.hypot(dx, dy);
          if (d < 4) { this.target = null; this.pause = 0.6 + Math.random() * 2.4; this.v.x *= 0.3; this.v.y *= 0.3; }
          else { const want = Math.min(speed, d * 3); this.v.x += (dx / d * want - this.v.x) * Math.min(1, dt * 8); this.v.y += (dy / d * want - this.v.y) * Math.min(1, dt * 8); }
        } else { this.v.x *= 0.8; this.v.y *= 0.8; }
        this.p.x += this.v.x * dt; this.p.y += this.v.y * dt;
        const sp = Math.hypot(this.v.x, this.v.y);
        if (sp > 5) { let da = Math.atan2(this.v.y, this.v.x) - this.ang; da = Math.atan2(Math.sin(da), Math.cos(da)); this.ang += da * Math.min(1, dt * 7); }
      }
      // Feet: planted in place, stepped in two alternating groups of four.
      if (!this.feet) this.feet = [0, 1, 2, 3].flatMap((i) => [-1, 1].map((side) => ({ i, side, ...this.rest(i, side), lift: 0, from: null })));
      const walking = this.state === "walk";
      this.stepT -= dt;
      if (walking && this.stepT <= 0) {
        let moved = false;
        for (const f of this.feet) {
          const grp = (f.i + (f.side > 0 ? 1 : 0)) % 2;
          if (grp !== this.group) continue;
          const r = this.rest(f.i, f.side), lead = { x: this.v.x * 0.12, y: this.v.y * 0.12 };
          if (Math.hypot(r.x + lead.x - f.x, r.y + lead.y - f.y) > 7 * k) { f.from = { x: f.x, y: f.y }; f.to = { x: r.x + lead.x, y: r.y + lead.y }; f.lift = 1e-3; moved = true; }
        }
        this.group = 1 - this.group; this.stepT = moved ? 0.09 : 0.05;
      }
      // Draw relative to the host's position on screen.
      const ox = b.l, oy = b.t, f = [Math.cos(this.ang), Math.sin(this.ang)], n = [-f[1], f[0]];
      if (this.state === "drop" || this.threadFade > 0) {
        if (this.state !== "drop") this.threadFade -= dt * 0.8;
        ctx.globalAlpha = this.state === "drop" ? 0.7 : Math.max(0, this.threadFade) * 0.7;
        PW.line(ctx, ox + this.p.x, Math.max(0, oy - 400), ox + this.p.x, oy + this.p.y, 1, "#9a92a8");
        ctx.globalAlpha = 1;
      }
      const leg = this.cols.leg;
      for (const ft of this.feet) {
        if (this.state === "drop") { const r = this.rest(ft.i, ft.side); ft.x = this.p.x + (r.x - this.p.x) * 0.55; ft.y = this.p.y + (r.y - this.p.y) * 0.55 + 4; }
        if (ft.lift > 0) { ft.lift += dt / 0.11; const e = Math.min(1, ft.lift); ft.x = ft.from.x + (ft.to.x - ft.from.x) * e; ft.y = ft.from.y + (ft.to.y - ft.from.y) * e; if (e >= 1) ft.lift = 0; }
        const hip = { x: this.p.x + f[0] * ROOT[ft.i] * k + n[0] * ft.side * 3 * k, y: this.p.y + f[1] * ROOT[ft.i] * k + n[1] * ft.side * 3 * k };
        const dx = ft.x - hip.x, dy = ft.y - hip.y, d = Math.min(Math.hypot(dx, dy), 29 * k);
        const L = 15 * k, h = Math.sqrt(Math.max(0, L * L - (d / 2) ** 2)) * (ft.lift > 0 ? 1.25 : 1);
        const nx = -dy / (Math.hypot(dx, dy) || 1), ny = dx / (Math.hypot(dx, dy) || 1);
        // Knees bend away from the body.
        const sgn = Math.sign(nx * n[0] * ft.side + ny * n[1] * ft.side) || 1;
        const knee = { x: hip.x + dx / 2 + nx * h * sgn * 0.55, y: hip.y + dy / 2 + ny * h * sgn * 0.55 };
        PW.line(ctx, ox + hip.x, oy + hip.y, ox + knee.x, oy + knee.y, s, leg);
        PW.line(ctx, ox + knee.x, oy + knee.y, ox + ft.x, oy + ft.y, s, leg);
      }
      // Abdomen with markings, then head and eyes.
      const ab = { x: this.p.x - f[0] * 8 * k, y: this.p.y - f[1] * 8 * k };
      PW.blob(ctx, ox + ab.x, oy + ab.y, 7 * k, 5.5 * k, s, this.cols.ab, this.ang);
      PW.blob(ctx, ox + ab.x - f[0] * k, oy + ab.y - f[1] * k, 3.2 * k, 2 * k, s, this.mark, this.ang);
      PW.dot(ctx, ox + ab.x - f[0] * 4 * k, oy + ab.y - f[1] * 4 * k, s, this.mark);
      PW.blob(ctx, ox + this.p.x + f[0] * 3 * k, oy + this.p.y + f[1] * 3 * k, 4.4 * k, 3.8 * k, s, this.cols.head, this.ang);
      for (const side of [-1, 1]) PW.dot(ctx, ox + this.p.x + f[0] * 6 * k + n[0] * side * 1.6 * k, oy + this.p.y + f[1] * 6 * k + n[1] * side * 1.6 * k, s, "#f4ecff");
      return true;
    }
  }
  customElements.get("pw-spider") || customElements.define("pw-spider", Spider);
})();
