/* <pw-tightrope>: a section divider with an acrobat on it. The rope is a real rope: it bends into two
   straight runs under his feet and twangs when he lands. Scroll fast and his pole tips; scroll too
   fast and he slips, hangs by his hands and climbs back up. Click him for a flip.
   Attributes: color (costume), rope (rope colour), speed (walking px/s). */
(() => {
  const mk = (c) => {
    const pal = { h: "#3b2a20", s: "#f2c39b", e: "#1b1622", r: c, w: "#fff4e0", k: "#2a2230" };
    const head = ["...hhh...", "..hhhhh..", "..hssss..", "...sses..", "...ssss..", "....ss..."];
    const body = ["..rwrwr..", ".srwrwrs.", "..rwrwr..", "..rwrwr..", "...kkk..."];
    return {
      A: PW.sprite([...head, ...body, "...k.k...", "...k.k...", "..ss.ss.."], pal),
      B: PW.sprite([...head, ...body, "..k...k..", ".k.....k.", "ss.....ss"], pal),
      HANG: PW.sprite([".s.....s.", ".s.hhh.s.", "..shhhs..", "..hssss..", "...sses..", "...ssss..", "..rwrwr..", "..rwrwr..", "..rwrwr..", "...kkk...", "...k.k...", "..k...k..", ".ss...ss."], pal),
    };
  };
  class Tightrope extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `<style>:host{display:block;position:relative;height:120px;margin:24px 0;cursor:pointer}canvas{position:absolute;inset:0;width:100%;height:100%}</style><canvas aria-hidden="true"></canvas>`;
      this.setAttribute("role", "separator");
      this.cv = root.querySelector("canvas"); this.ctx = this.cv.getContext("2d");
      this.spr = mk(this.getAttribute("color") || "#e5484d");
      this.rope = this.getAttribute("rope") || "#8a6a4a";
      this.speed = PW.num(this, "speed", 42);
      this.x = 0.5; this.way = 1; this.th = 0; this.om = 0; this.b = 0; this.bv = 0; this.state = "walk"; this.t = 0; this.face = 1;
      this.addEventListener("click", () => { if (this.state === "walk" && !PW.reduced) { this.state = "flip"; this.t = 0; PW.wake(); } });
      this.addEventListener("pointermove", (e) => { const r = this.getBoundingClientRect(); this.ptr = e.clientX - r.left; });
      this.addEventListener("pointerleave", () => (this.ptr = null));
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    frame(_, dt, now) {
      const r = this.getBoundingClientRect();
      if (r.bottom < 0 || r.top > innerHeight) return false;
      const dpr = Math.min(devicePixelRatio || 1, 2), W = r.width, H = r.height;
      if (this.cv.width !== Math.round(W * dpr)) { this.cv.width = Math.round(W * dpr); this.cv.height = Math.round(H * dpr); }
      const c = this.ctx; c.setTransform(dpr, 0, 0, dpr, 0, 0); c.clearRect(0, 0, W, H); c.imageSmoothingEnabled = false;
      const s = 3, x0 = 22, x1 = W - 22, A = 46;
      const span = x1 - x0 - 60;
      this.t += dt;
      // Balance: a damped pendulum pushed by scroll speed and a little breeze.
      const push = PW.reduced ? 0 : PW.scroll.v / 900 + 0.25 * Math.sin(now * 1.3) * Math.sin(now * 0.7);
      this.om += (-9 * this.th - 2.2 * this.om + push * 4) * dt; this.th += this.om * dt;
      if (PW.reduced) { this.th = 0; this.om = 0; }
      if (this.state === "walk" && Math.abs(this.th) > 0.85) { this.state = "hang"; this.t = 0; this.bv += 140; PW.wake(); }
      if (this.state === "walk" && !PW.reduced) {
        this.x += (this.way * this.speed * dt) / span;
        if (this.x > 1 || this.x < 0) { this.x = Math.max(0, Math.min(1, this.x)); this.way *= -1; }
      }
      this.face = this.ptr != null ? (this.ptr > x0 + 30 + this.x * span ? 1 : -1) : this.way;
      // Rope bounce.
      this.bv += (-60 * this.b - 3 * this.bv) * dt; this.b += this.bv * dt;
      const wx = x0 + 30 + this.x * span, sag = 7 + this.b * 0.06;
      const ry = A + sag;
      // Posts with little platforms.
      for (const px of [x0, x1]) {
        c.fillStyle = "#5a3d24"; c.fillRect(Math.round(px - s), A - 6, 2 * s, H - A);
        c.fillStyle = "#7a5232"; c.fillRect(Math.round(px - 4 * s), A - 6, 8 * s, s);
      }
      // The rope: two straight runs meeting under his feet, drawn in rope-coloured pixels.
      c.fillStyle = this.rope;
      const seg = (ax, ay, bx, by) => { const n = Math.ceil(Math.abs(bx - ax)); for (let i = 0; i <= n; i++) { const k = i / n; c.fillRect(Math.round(ax + (bx - ax) * k), Math.round(ay + (by - ay) * k), 2, 2); } };
      seg(x0, A, wx, ry); seg(wx, ry, x1, A);
      let y = ry, rot = 0, spr = Math.floor(this.x * span / 10) % 2 ? this.spr.A : this.spr.B;
      if (PW.reduced) spr = this.spr.A;
      if (this.state === "flip") {
        const k = Math.min(1, this.t / 0.75);
        y = ry - Math.sin(k * Math.PI) * 46; rot = k * Math.PI * 2 * this.face;
        if (k >= 1) { this.state = "walk"; this.bv += 160; }
      }
      if (this.state === "hang") {
        // Hanging under the rope, swinging, then climbing back up.
        spr = this.spr.HANG;
        const climb = Math.max(0, Math.min(1, (this.t - 1.6) / 0.5));
        y = ry + 13 * s * (1 - climb) + 1; rot = Math.sin(this.t * 4) * 0.15 * (1 - climb);
        if (climb >= 1) { this.state = "walk"; this.th = 0; this.om = 0; spr = this.spr.A; y = ry; }
      }
      if (this.state !== "hang") {
        // The balance pole, tipping with him.
        const th = this.th + (this.state === "flip" ? rot : 0);
        const hx = wx, hy = y - 8 * s + (this.state === "flip" ? 0 : 0);
        const L = 26 * s / 2, cx = Math.cos(th) * L, cy = Math.sin(th) * L;
        c.fillStyle = "#3a2a1c";
        const n = 26; for (let i = 0; i <= n; i++) { const k = i / n * 2 - 1; c.fillRect(Math.round(hx + cx * k - 1), Math.round(hy + cy * k - 1), 2, 2); }
        c.fillStyle = this.getAttribute("color") || "#e5484d";
        c.fillRect(Math.round(hx - cx - 3), Math.round(hy - cy - 3), 6, 6); c.fillRect(Math.round(hx + cx - 3), Math.round(hy + cy - 3), 6, 6);
      }
      if (this.state === "hang") PW.draw(c, spr, wx, y, s, this.face < 0, rot);
      else {
        c.save(); c.translate(wx, y - 7 * s); c.rotate(rot + this.th * 0.35); PW.draw(c, spr, 0, 7 * s, s, this.face < 0); c.restore();
      }
      return !PW.reduced;
    }
  }
  customElements.get("pw-tightrope") || customElements.define("pw-tightrope", Tightrope);
})();
