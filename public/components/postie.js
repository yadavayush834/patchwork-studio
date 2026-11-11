/* <pw-postie>: put it inside a <form>. A postie stands by a pillar box in the form's bottom-right corner
   and watches whichever field you are in. Submit with a mistake and she shakes her head and points at
   the field (and says which one to screen readers). Submit properly and your letter flies from the
   button into the box, she salutes and cycles off with it. Forms with an action still submit, just
   after the letter lands; forms without one get a "pw-posted" event instead.
   Attributes: message (said when sent), color (uniform), box (pillar-box colour). */
(() => {
  const mk = (u, box) => {
    const pal = { c: u, b: "#142a50", y: "#f0c24a", s: "#f2c39b", e: "#1b1622", u, d: "#1d3d72", g: "#8b5a2b", t: "#26324f", f: "#1b1622", w: "#ffffff" };
    const top = ["...cccc....", "..ccyccc...", "..bbbbbbbb.", "...sssss...", "...ssses...", "...sssss..."];
    const torso = (hand) => ["..uuuuuu...", ".uuuuuuuu..", hand === "point" ? ".uuyuuuussss" : hand === "salute" ? ".uuyuuuu.s.." : ".uuyuuuus...", ".ugguuuu....", ".ugguuuu....", "..uuuuuu..."];
    const legs = (walk) => (walk ? ["..tt..tt...", ".tt....tt..", ".ff....ff.."] : ["..ttt.tt...", "..tt..tt...", "..ff..ff..."]);
    const S = (rows) => PW.sprite(rows, pal);
    const saluteTop = ["...cccc....", "..ccyccc.s.", "..bbbbbbbs.", "...sssss...", "...ssses...", "...sssss..."];
    const boxPal = { r: box, R: "#00000033", k: "#2a1a1a", w: "#f4e9d2", y: "#f0c24a" };
    return {
      STAND: S([...top, ...torso(), ...legs(false)]),
      WALK: S([...top, ...torso(), ...legs(true)]),
      POINT: S([...top, ...torso("point"), ...legs(false)]),
      SALUTE: S([...saluteTop, ...torso("salute"), ...legs(false)]),
      BOX: PW.sprite(["...rrrr...", ".rrrrrrrr.", "rrrrrrrrrr", "rRRRRRRRRr", "rrkkkkkkrr", "rrrrrrrrrr", "rrrwwwwrrr", "rrrwyywrrr", "rrrwwwwrrr", "rrrrrrrrrr", "rrrrrrrrrr", "rrrrrrrrrr", "rrrrrrrrrr", "rrrrrrrrrr", "rRRRRRRRRr", "kkkkkkkkkk"], boxPal),
      BIKE: PW.sprite(["......uu........", ".....uuuu.......", "......ss........", ".....uuuu..g....", "....uuuuuuug....", "..kk.tt.ttkk....", ".k..k.tt..k.k...", "k....kkkkk...k..", ".k..k.....k.k...", "..kk.......kk..."], { ...pal, k: "#2a2230" }),
      LETTER: PW.sprite(["wwwwwww", "wkwwwkw", "wwkwkww", "wwwkwww", "wwwwwww"], { w: "#fffaf0", k: "#c9b48a" }),
    };
  };
  class Postie extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      this.style.display = "none";
      const form = this.closest("form");
      if (!form) return;
      this.form = form; this.s = 3;
      this.spr = mk(this.getAttribute("color") || "#2f5aa0", this.getAttribute("box") || "#d33b2c");
      this.state = "idle"; this.t = 0; this.focus = null;
      form.addEventListener("focusin", (e) => { this.focus = e.target; PW.wake(); });
      form.addEventListener("input", () => { this.nod = 0.25; PW.wake(); });
      form.addEventListener("invalid", (e) => {
        if (this.state === "nope" && this.t < 0.1) return;
        this.state = "nope"; this.t = 0; this.bad = e.target;
        const label = e.target.labels?.[0]?.textContent.trim() || e.target.name || "this field";
        PW.say(`Please check ${label}: ${e.target.validationMessage}`);
        PW.wake();
      }, true);
      form.addEventListener("submit", (e) => this.send(e));
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    send(e) {
      const real = this.form.getAttribute("action") && this.form.getAttribute("action") !== "#" && !this.hasAttribute("hold");
      e.preventDefault();
      if (this.state === "send" || this.state === "ride") return;
      const b = (e.submitter || this.form.querySelector("[type=submit],button")).getBoundingClientRect();
      this.from = { x: b.left + b.width / 2, y: b.top + b.height / 2 };
      this.state = "send"; this.t = 0; this.real = real;
      PW.wake();
    }
    frame(ctx, dt, t) {
      const r = this.form.getBoundingClientRect();
      if (r.bottom < -100 || r.top > innerHeight + 100) return false;
      const s = this.s, S = this.spr, ground = r.bottom - 12;
      const boxX = r.right - 34, home = r.right - 78;
      this.t += dt; if (this.nod) this.nod = Math.max(0, this.nod - dt);
      let x = home, spr = S.STAND, flip = true, alpha = 1, bubble = null, jitter = 0;
      // Watch the field you are in.
      if (this.focus && this.form.contains(this.focus)) { const fr = this.focus.getBoundingClientRect(); flip = fr.left + fr.width / 2 < x; }
      let boxSquash = 0;
      if (this.state === "nope") {
        spr = this.t < 1.6 ? S.POINT : S.STAND;
        jitter = this.t < 0.5 ? Math.sin(this.t * 40) * 2 : 0;
        if (this.bad) {
          const fr = this.bad.getBoundingClientRect(); flip = fr.left + fr.width / 2 < x;
          // A red pixel arrow bobbing at the field's right end.
          if (this.t < 2.4) {
            const ax = fr.right - 18 + Math.sin(t * 10) * 3, ay = fr.top + fr.height / 2;
            ctx.fillStyle = "#e5484d";
            for (let i = 0; i < 4; i++) ctx.fillRect(Math.round(ax + i * s), Math.round(ay - i * s), s, (2 * i + 1) * s);
            ctx.fillRect(Math.round(ax + 4 * s), Math.round(ay - s), 5 * s, 3 * s);
          }
        }
        if (this.t < 2) bubble = "Not quite!";
        if (this.t > 2.4) this.state = "idle";
      }
      if (this.state === "send") {
        // The letter's flight from the button to the slot.
        const k = Math.min(1, this.t / 0.85), e = k * k * (3 - 2 * k);
        const to = { x: boxX, y: ground - 12 * s };
        const lx = this.from.x + (to.x - this.from.x) * e, ly = this.from.y + (to.y - this.from.y) * e - Math.sin(k * Math.PI) * 90;
        if (k < 1) PW.draw(ctx, S.LETTER, lx, ly, s, false, (1 - k) * 6.28 * 0.5);
        if (k >= 1) boxSquash = Math.max(0, 1 - (this.t - 0.85) * 5);
        spr = this.t > 1 ? S.SALUTE : S.STAND; flip = false;
        if (this.t > 1) bubble = "Posted!";
        if (this.t > 0.95 && !this.said) { this.said = true; PW.say(this.getAttribute("message") || "Sent. Thank you!"); }
        if (this.t > 1.05 && this.real && !this.submitted) { this.submitted = true; HTMLFormElement.prototype.submit.call(this.form); }
        if (this.t > 1.9) { this.state = "ride"; this.t = 0; this.form.dispatchEvent(new CustomEvent("pw-posted", { bubbles: true })); }
      }
      if (this.state === "ride") {
        // Off on the bicycle, then back on foot.
        if (this.t < 2.6) { x = home + this.t * this.t * 140; spr = S.BIKE; flip = false; }
        else if (this.t < 5.5) { const k = (this.t - 2.6) / 2.9; x = r.right + 120 - (r.right + 120 - home) * k; spr = Math.floor(this.t * 6) % 2 ? S.WALK : S.STAND; flip = true; }
        else { this.state = "idle"; this.said = false; this.submitted = false; }
        if (this.t < 0.8) bubble = this.getAttribute("message") || "Sent. Thank you!";
      }
      // Pillar box (squashes as it swallows the letter).
      ctx.save(); ctx.translate(boxX, ground + s); ctx.scale(1 + boxSquash * 0.12, 1 - boxSquash * 0.1);
      PW.draw(ctx, S.BOX, 0, 0, s); ctx.restore();
      const bob = this.nod ? -s : !PW.reduced && Math.floor(t * 1.4) % 4 === 0 ? -s * 0 : 0;
      ctx.save();
      // Keep the ride-off inside the form's right edge region so it does not cover the page.
      PW.draw(ctx, spr, x + jitter, ground + s + bob, s, flip, 0, alpha);
      ctx.restore();
      if (bubble) PW.bubble(ctx, bubble, Math.min(x, innerWidth - 50), ground - 19 * s, 2);
      return this.state !== "idle" || !!this.nod || true;
    }
  }
  customElements.get("pw-postie") || customElements.define("pw-postie", Postie);
})();
