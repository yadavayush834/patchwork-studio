/* <pw-hummingbird>: a hummingbird that keeps you company. It hovers a little way from your cursor,
   darting to a new spot every so often, wings a blur. Point at a link or button inside its parent and it
   zips over to sip from the edge of it. Left alone it perches on the parent's top edge.
   Attributes: color (back feathers), throat (gorget colour). */
(() => {
  class Hummingbird extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement === document.body ? document.documentElement : this.parentElement;
      this.back = this.getAttribute("color") || "#2fbf71";
      this.throat = this.getAttribute("throat") || "#e0245e";
      this.b = null; this.v = { x: 0, y: 0 }; this.off = { x: -70, y: -40 }; this.dart = 0; this.face = 1; this.flower = null;
      this.host.addEventListener("pointerover", (e) => { const a = e.target.closest?.("a,button"); if (a && this.host.contains(a)) { this.flower = a; PW.wake(); } });
      this.host.addEventListener("pointerout", (e) => { const a = e.target.closest?.("a,button"); if (a && a === this.flower && !a.contains(e.relatedTarget)) this.flower = null; });
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    frame(ctx, dt, now) {
      const r = this.host.getBoundingClientRect();
      if (r.bottom < -60 || r.top > innerHeight + 60) return false;
      const P = PW.pointer, s = 2;
      if (!this.b) this.b = { x: r.left + r.width * 0.3, y: r.top + 4 };
      const active = P.on && (performance.now() - P.t) < 5000 && P.y > r.top - 80 && P.y < r.bottom + 80;
      let tx, ty, perched = false, sipping = false;
      if (this.flower && !PW.reduced) {
        // Sip at the nearer side edge of the link or button, beak first.
        const f = this.flower.getBoundingClientRect(), left = Math.abs(this.b.x - f.left) < Math.abs(this.b.x - f.right);
        tx = left ? f.left - 22 : f.right + 22; ty = f.top + f.height / 2 + 3;
        this.face = left ? 1 : -1;
        sipping = Math.hypot(tx - this.b.x, ty - this.b.y) < 6;
        if (sipping) tx += this.face * Math.sin(now * 9) * 2;
      } else if (active && !PW.reduced) {
        this.dart -= dt;
        if (this.dart <= 0) { this.dart = 0.8 + Math.random() * 1.6; this.off = { x: (Math.random() < 0.5 ? -1 : 1) * (50 + Math.random() * 50), y: -30 - Math.random() * 50 }; }
        tx = P.x + this.off.x; ty = P.y + this.off.y; this.face = Math.sign(P.x - this.b.x) || this.face;
      } else { tx = r.left + r.width * 0.3; ty = r.top + 1; perched = Math.hypot(tx - this.b.x, ty - this.b.y) < 4; }
      // Darting: a stiff spring, so it flicks between spots and then holds still in the air.
      const k = this.flower ? 14 : 10;
      this.v.x += ((tx - this.b.x) * k * k - this.v.x * 2 * k) * dt; this.v.y += ((ty - this.b.y) * k * k - this.v.y * 2 * k) * dt;
      if (PW.reduced) { this.b = { x: tx, y: ty }; this.v = { x: 0, y: 0 }; perched = !this.flower && !active; }
      this.b.x += this.v.x * dt; this.b.y += this.v.y * dt;
      if (Math.abs(this.v.x) > 40) this.face = Math.sign(this.v.x);
      // Drawn in 2px art at 1.5x around its own position, so it stays crisp.
      ctx.save(); ctx.translate(Math.round(this.b.x), Math.round(this.b.y + (perched ? 0 : Math.sin(now * 6) * 1.5))); ctx.scale(1.5, 1.5);
      const x = 0, y = 0, f = this.face;
      const tilt = perched ? 0 : Math.max(-0.5, Math.min(0.5, this.v.x * 0.0012 * f));
      // Wings: a blur that alternates up and down; folded along the back when perched.
      if (!perched) {
        const up = Math.floor(now * 50) % 2;
        ctx.globalAlpha = 0.5;
        PW.blob(ctx, x - f * 1, y - (up ? 7 : -1), 7, 2.5, s, "#cfe9df", up ? -0.4 * f : 0.4 * f);
        ctx.globalAlpha = 1;
      }
      // Tail, body, iridescent back that shifts as it moves, throat, head, beak.
      PW.line(ctx, x - f * 6, y + 3, x - f * 11, y + 7, s, "#1f6f4a");
      PW.blob(ctx, x - f * 1, y + 1, 6, 4, s, "#e9efe4", tilt);
      PW.blob(ctx, x - f * 2, y - 1, 5, 3, s, Math.sin(now * 3 + x * 0.05) > 0 ? this.back : "#26a1a6", tilt);
      PW.blob(ctx, x + f * 4, y - 3, 3.5, 3.5, s, this.back);
      PW.blob(ctx, x + f * 4, y, 2.5, 2, s, sipping || Math.sin(now * 4) > 0.3 ? this.throat : "#8a1e3e");
      PW.dot(ctx, x + f * 5, y - 4, s, "#14121a");
      PW.line(ctx, x + f * 7, y - 3, x + f * 14, y - 2, 1, "#14121a");
      if (perched) { PW.blob(ctx, x - f * 3, y - 1, 5, 2, s, "#1f6f4a"); PW.line(ctx, x, y + 4, x, y + 6, 1, "#14121a"); }
      if (sipping && Math.random() < dt * 8) this.spark = { x: x + f * 15, y: y - 2, t: 0 };
      if (this.spark && (this.spark.t += dt) < 0.4) { ctx.fillStyle = "#fff3a8"; const k2 = this.spark.t * 30; ctx.fillRect(Math.round(this.spark.x + k2 * f), Math.round(this.spark.y - k2), 2, 2); }
      ctx.restore();
      return !PW.reduced;
    }
  }
  customElements.get("pw-hummingbird") || customElements.define("pw-hummingbird", Hummingbird);
})();
