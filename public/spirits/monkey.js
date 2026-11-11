/* <pw-monkey>: a monkey that swings hand over hand along an edge of its parent element, like monkey bars.
   Each swing is a pendulum about the hand that holds on; the free hand reaches the next grip exactly as
   the swing peaks. It turns at the ends, stops now and then to scratch or wave, and reaches for the
   pointer when it comes close. Attributes: edge ("bottom" | "top"), color (fur). */
(() => {
  const A = 17, PHI = 0.6, D = 2 * A * Math.sin(PHI) + 0.01;
  class Monkey extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement;
      this.fur = this.getAttribute("color") || "#8a5530";
      this.edge = this.getAttribute("edge") === "top" ? "top" : "bottom";
      this.gx = null; this.way = 1; this.p = 0; this.state = "swing"; this.t = 0; this.pause = 3 + Math.random() * 4;
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    frame(ctx, dt, now) {
      const r = this.host.getBoundingClientRect();
      const barY = this.edge === "bottom" ? r.bottom : r.top;
      if (barY < -80 || barY > innerHeight + 20) return false;
      // Drawn in its own small units (2px art) and scaled 1.5x: big enough to read, still on the pixel grid.
      const K = 1.5, s = 2, dark = "#4e2f1a", face = "#ecc9a0", ox = Math.round(r.left), oy = Math.round(barY), W = r.width / K;
      if (this.gx === null) this.gx = W * 0.2;
      this.t += dt;
      // Where would the shoulder be now?
      const shoulder = (gx, phi) => ({ x: gx + Math.sin(phi) * A * this.way, y: Math.cos(phi) * A });
      const P = { on: PW.pointer.on, x: (PW.pointer.x - ox) / K, y: (PW.pointer.y - oy) / K };
      let phi, free = null, wave = 0;
      const S0 = shoulder(this.gx, 0);
      const near = P.on && Math.hypot(P.x - S0.x, P.y - S0.y) < 130;
      if (this.state === "swing" && !PW.reduced) {
        this.p += dt / 0.72;
        if (this.p >= 1) {
          this.p -= 1; this.gx += D * this.way;
          // Turn at the ends; sometimes stop for a while.
          if (this.gx + D * this.way > W - 12 || this.gx + D * this.way < 12) this.way *= -1;
          this.pause -= 0.72;
          if (this.pause <= 0 || near) { this.state = "hang"; this.t = 0; this.act = near ? "reach" : Math.random() < 0.5 ? "wave" : "scratch"; this.hold = 2 + Math.random() * 1.5; }
        }
        phi = -PHI * Math.cos(Math.PI * this.p);
        if (this.p > 0.55) { const k = (this.p - 0.55) / 0.45; const nx = this.gx + D * this.way; const S = shoulder(this.gx, phi); free = { x: S.x + (nx - S.x) * k, y: S.y - 6 + (0 - S.y + 6) * k }; }
      } else {
        // Hanging from one hand, swaying to rest.
        phi = PHI * 0.35 * Math.exp(-this.t * 1.5) * Math.cos(this.t * 5);
        if (near) this.act = "reach";
        if (!PW.reduced && this.t > this.hold && !near) { this.state = "swing"; this.p = 0; this.pause = 3 + Math.random() * 5; }
      }
      const S = shoulder(this.gx, phi);
      const face_ = near ? Math.sign(P.x - S.x) || this.way : this.way;
      if (!free) {
        if (this.act === "reach" && near) { const a = Math.atan2(P.y - S.y, P.x - S.x); free = { x: S.x + Math.cos(a) * 15, y: S.y + Math.sin(a) * 15 }; }
        else if (this.act === "wave") { wave = Math.sin(this.t * 9); free = { x: S.x + face_ * (8 + wave * 4), y: S.y - 12 }; }
        else free = { x: S.x + face_ * 3, y: S.y - 13 + Math.sin(this.t * 14) * 1.5 };
      }
      // Body hangs below the shoulder, lagging the swing a little.
      const tilt = phi * 0.55 * this.way;
      const hip = { x: S.x + Math.sin(tilt) * 15, y: S.y + Math.cos(tilt) * 15 };
      const leg = phi * -0.5 * this.way;
      ctx.save(); ctx.translate(ox, oy); ctx.scale(K, K);
      // Tail: a curl that trails the swing.
      let tx = hip.x, ty = hip.y;
      for (let i = 1; i <= 8; i++) {
        const a = Math.PI / 2 + this.way * (-0.4 - i * 0.32) + Math.sin(now * 2 + i * 0.5) * 0.15 - phi * 0.6;
        const nx = tx + Math.cos(a) * 3.2 * -this.way, ny = ty + Math.sin(a) * 3.2;
        PW.line(ctx, tx, ty, nx, ny, s, dark); tx = nx; ty = ny;
      }
      // Legs.
      for (const side of [-1, 1]) {
        const knee = { x: hip.x + side * 4 + Math.sin(leg) * 6, y: hip.y + 7 };
        PW.line(ctx, hip.x + side * 2, hip.y, knee.x, knee.y, s, this.fur);
        PW.line(ctx, knee.x, knee.y, knee.x + Math.sin(leg + side * 0.3) * 6, knee.y + 6, s, this.fur);
      }
      // Torso and belly.
      PW.blob(ctx, (S.x + hip.x) / 2, (S.y + hip.y) / 2 + 1, 6.5, 9.5, s, this.fur, tilt);
      PW.blob(ctx, (S.x + hip.x) / 2 + face_ * 1.5, (S.y + hip.y) / 2 + 3, 3.5, 5, s, face, tilt);
      // Arms: one holding the bar, one free.
      PW.line(ctx, S.x, S.y, this.gx, 1, s, this.fur);
      PW.line(ctx, S.x, S.y, free.x, free.y, s, this.fur);
      PW.blob(ctx, this.gx, 2, 2.5, 2.5, s, dark);
      PW.blob(ctx, free.x, free.y, 2.5, 2.5, s, dark);
      // Head beside the raised arm, looking where it is going (or at you).
      const H = { x: S.x + face_ * 4, y: S.y - 3 };
      for (const side of [-1, 1]) PW.blob(ctx, H.x + side * 8, H.y - 1, 3, 3, s, side === face_ ? face : this.fur);
      PW.blob(ctx, H.x, H.y, 8, 7, s, this.fur);
      PW.blob(ctx, H.x + face_ * 2, H.y + 2, 5.5, 4.5, s, face);
      const blink = Math.floor(now * 0.7 + this.gx) % 6 === 0 && (now % 1) < 0.15;
      for (const side of [0, 1]) PW.dot(ctx, H.x + face_ * (side ? 4.5 : 0.2), H.y + (blink ? 1 : 0), s, "#1b1622");
      PW.dot(ctx, H.x + face_ * 3, H.y + 5, s, "#a0603a");
      ctx.restore();
      return !PW.reduced || this.t < 1;
    }
  }
  customElements.get("pw-monkey") || customElements.define("pw-monkey", Monkey);
})();
