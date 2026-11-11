/* <pw-moth>: moths that treat your cursor as a lamp. They circle it in loose, uneven orbits, now and then
   bump into it, and shed a little dust. When the cursor leaves they settle on the edge of their parent
   element, wings folded, twitching. Attributes: count (1-5), color (wings), glow ("on" adds a warm light
   around the cursor; nice on dark sections). */
(() => {
  class Moth extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement === document.body ? document.documentElement : this.parentElement;
      this.wing = this.getAttribute("color") || "#e9dcc3";
      const n = Math.max(1, Math.min(5, Math.round(PW.num(this, "count", 2))));
      this.moths = Array.from({ length: n }, (_, i) => ({ x: 0, y: 0, vx: 0, vy: 0, a: Math.random() * 6.28, R: 40, rest: null, seed: i * 1.7 + Math.random(), bonk: 0, set: false }));
      this.dust = [];
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    frame(ctx, dt, now) {
      const r = this.host.getBoundingClientRect();
      if (r.bottom < -40 || r.top > innerHeight + 40) return false;
      const P = PW.pointer, s = 2;
      const inside = P.on && P.x > r.left - 60 && P.x < r.right + 60 && P.y > r.top - 60 && P.y < r.bottom + 60 && (performance.now() - P.t) < 6000;
      if (inside && this.getAttribute("glow") === "on") {
        const g = ctx.createRadialGradient(P.x, P.y, 0, P.x, P.y, 120);
        g.addColorStop(0, "rgba(255,214,140,.32)"); g.addColorStop(1, "rgba(255,214,140,0)");
        ctx.fillStyle = g; ctx.fillRect(P.x - 120, P.y - 120, 240, 240);
      }
      for (const m of this.moths) {
        if (!m.set) { m.set = true; m.rest = { u: 0.15 + Math.random() * 0.7 }; m.x = r.left + r.width * m.rest.u; m.y = r.top + 2; }
        let tx, ty, folded = false;
        if (inside && !PW.reduced) {
          m.rest = null;
          // A wobbly orbit around the light, with the odd bump into it.
          m.a += dt * (2.2 + Math.sin(now * 0.7 + m.seed) * 1.4);
          m.R += ((m.bonk > 0 ? 3 : 28 + 26 * Math.sin(now * 0.9 + m.seed * 3)) - m.R) * Math.min(1, dt * 4);
          if (m.bonk > 0) m.bonk -= dt; else if (Math.random() < dt * 0.25) m.bonk = 0.35;
          tx = P.x + Math.cos(m.a) * m.R; ty = P.y + Math.sin(m.a * 1.3) * m.R * 0.65;
        } else {
          if (!m.rest) m.rest = { u: 0.1 + Math.random() * 0.8 };
          tx = r.left + r.width * m.rest.u; ty = r.top + 2;
          folded = Math.hypot(tx - m.x, ty - m.y) < 3;
        }
        const k = inside ? 9 : 3;
        m.vx += ((tx - m.x) * k - m.vx * 1.6) * dt * 3; m.vy += ((ty - m.y) * k - m.vy * 1.6) * dt * 3;
        m.vx += Math.sin(now * 13 + m.seed) * 30 * dt * (folded ? 0 : 1); m.vy += Math.cos(now * 11 + m.seed) * 30 * dt * (folded ? 0 : 1);
        if (PW.reduced) { m.x = tx; m.y = ty; m.vx = m.vy = 0; folded = !inside; }
        m.x += m.vx * dt; m.y += m.vy * dt;
        if (folded) { m.x = tx; m.y = ty; }
        if (!folded && Math.random() < dt * 6) this.dust.push({ x: m.x, y: m.y, t: 0 });
        if (m.bonk > 0.3) this.dust.push({ x: P.x, y: P.y, t: 0, star: true });
        // Draw: two pairs of wings that beat fast, folded to a little tent when resting.
        const flap = folded ? (Math.floor(now * 1.3 + m.seed) % 5 === 0 ? 0.4 : 0.05) : Math.abs(Math.sin(now * 26 + m.seed));
        const face = Math.atan2(m.vy, m.vx);
        const side = Math.cos(face) >= 0 ? 1 : -1;
        for (const sd of [-1, 1]) {
          const spread = folded ? 2 : 3 + flap * 6;
          PW.blob(ctx, m.x + sd * spread, m.y - 1 - flap * 2, 5 - (folded ? 2 : 0), 4 + flap * 1.5, s, this.wing, sd * (0.5 - flap * 0.5));
          PW.blob(ctx, m.x + sd * (spread - 1), m.y + 3, 3.5, 3, s, "#cbbd9f", sd * 0.3);
          PW.dot(ctx, m.x + sd * (spread + 1), m.y - 2, s, "#9c8a6a");
        }
        PW.blob(ctx, m.x, m.y + 1, 1.5, 4, s, "#6b5a48");
        PW.line(ctx, m.x, m.y - 4, m.x - 3 * side, m.y - 8, 1, "#6b5a48");
        PW.line(ctx, m.x, m.y - 4, m.x + 2 * side, m.y - 8, 1, "#6b5a48");
      }
      // Dust and little bump stars.
      this.dust = this.dust.filter((d) => (d.t += dt) < (d.star ? 0.35 : 1.2));
      for (const d of this.dust) {
        if (d.star) { const k = d.t * 50; ctx.fillStyle = "#fff3c4"; for (const [a, b] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) ctx.fillRect(Math.round(d.x + a * k), Math.round(d.y + b * k), 2, 2); }
        else { ctx.globalAlpha = 1 - d.t / 1.2; ctx.fillStyle = "#d9cbb0"; ctx.fillRect(Math.round(d.x), Math.round(d.y + d.t * 18), 2, 2); ctx.globalAlpha = 1; }
      }
      return !PW.reduced;
    }
  }
  customElements.get("pw-moth") || customElements.define("pw-moth", Moth);
})();
