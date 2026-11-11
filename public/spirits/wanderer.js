/* <pw-wanderer>: a tiny person who lives on top of your content. The tops of headings, paragraphs,
   buttons, images and cards inside the parent element are their ground: they walk along them, jump
   between them on a real arc, sit on edges with their legs hanging, read a book on headings, and wave
   when your cursor comes near. Click close to them and they hop and say hi.
   Attributes: color (jumper), name (what they say). */
(() => {
  const mk = (c) => {
    const pal = { h: "#2b1d14", s: "#e8b48a", e: "#1b1622", c, d: "#00000040", p: "#2f3346", f: "#1b1622", b: "#c0392b", w: "#fff4e0" };
    const head = ["..hhhh..", ".hhhhhh.", ".hsssss.", ".hssses.", "..ssss..", "...ss..."];
    const S = (rows) => PW.sprite(rows, pal);
    return {
      STAND: S([...head, "..cccc..", ".cccccc.", ".cccccc.", ".s.cc.s.", "..cccc..", "..pppp..", "..p..p..", "..p..p..", "..f..ff."]),
      WALK1: S([...head, "..cccc..", ".cccccc.", "scccccc.", "...cc.s.", "..cccc..", "..pppp..", ".pp..p..", ".p....p.", "ff....ff"]),
      WALK2: S([...head, "..cccc..", ".cccccc.", ".ccccccs", ".s.cc...", "..cccc..", "..pppp..", "..pp.p..", "..p.pp..", "..ffff.."]),
      JUMP: S([...head, "s.cccc.s", ".cccccc.", "..cccc..", "..cccc..", "..cccc..", "..pppp..", ".pp..pp.", "ff....ff", "........"]),
      WAVE: S(["......s.", ...head.map((r) => r), "..cccc.s", ".ccccccs", ".cccccc.", ".s.cc...", "..cccc..", "..pppp..", "..p..p..", "..p..p..", "..f..ff."].slice(0, 16)),
      SIT: S([...head, "..cccc..", ".cccccc.", ".cccccc.", ".s.cc.s.", "..cccc..", "..ppppp.", "......pp", "......p.", "......f."]),
      READ: S([...head, "..cccc..", ".cbbbbc.", ".bwwwwb.", ".bwwwwb.", "..cccc..", "..ppppp.", "......pp", "......p.", "......f."]),
    };
  };
  const PICK = "h1,h2,h3,h4,p,li,blockquote,img,figure,button,a,input,textarea,[data-platform],.card";
  class Wanderer extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement;
      this.spr = mk(this.getAttribute("color") || "#e2574c");
      this.say = this.getAttribute("name") ? `Hi, I'm ${this.getAttribute("name")}!` : "Hi!";
      this.size = Math.max(2, Math.min(3, Math.round(PW.num(this, "size", 2)))); this.state = "spawn"; this.t = 0; this.face = 1; this.plats = []; this.measured = 0;
      this.host.addEventListener("click", (e) => {
        if (!this.pos) return;
        const x = e.clientX + scrollX, y = e.clientY + scrollY;
        if (Math.hypot(x - this.pos.x, y - (this.pos.y - 16)) < 40 && (this.state === "walk" || this.state === "idle")) { this.hop = 0; this.bubble = 1.6; PW.say(this.say); PW.wake(); }
      });
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    // Every visible block inside the host becomes a ledge: its top edge, in page coordinates.
    measure() {
      const out = [];
      for (const el of this.host.querySelectorAll(PICK)) {
        const r = el.getBoundingClientRect();
        if (r.width < 48 || r.height < 10 || el.closest("pw-wanderer")) continue;
        const cs = getComputedStyle(el);
        if (cs.visibility === "hidden" || cs.display === "none") continue;
        let l = r.left, w = r.width;
        // Text blocks: walk on the first line's real text width, not the whole column.
        if (/^(P|LI|H\d|BLOCKQUOTE)$/.test(el.tagName)) {
          const rg = document.createRange(); rg.selectNodeContents(el); const rr = rg.getClientRects()[0];
          if (rr) { l = rr.left; w = rr.width; }
        }
        if (w < 40) continue;
        out.push({ l: l + scrollX + 4, r: l + w + scrollX - 4, y: r.top + scrollY });
      }
      const hr = this.host.getBoundingClientRect();
      out.push({ l: hr.left + scrollX + 8, r: hr.right + scrollX - 8, y: hr.bottom + scrollY - 2, ground: true });
      this.plats = out;
    }
    near(px) { return this.plats.reduce((b, p) => (px.x >= p.l && px.x <= p.r && p.y >= px.y - 2 && (!b || p.y < b.y) ? p : b), null); }
    frame(ctx, dt, now) {
      const hr = this.host.getBoundingClientRect();
      if (hr.bottom < -60 || hr.top > innerHeight + 60) return false;
      this.measured -= dt;
      if (this.measured <= 0) { this.measure(); this.measured = 0.6; }
      const s = this.size;
      this.t += dt;
      if (this.state === "spawn") {
        const tops = this.plats.filter((p) => !p.ground && p.y > scrollY + 40 && p.y < scrollY + innerHeight - 40);
        const p = tops[0] || this.plats[this.plats.length - 1];
        this.on = p; this.pos = { x: p.l + 10, y: p.y }; this.state = "walk"; this.goal = p.r - 10; this.t = 0;
      }
      // Keep standing on the same ledge if the layout moved.
      if (this.on && this.state !== "jump") {
        const same = this.plats.find((p) => Math.abs(p.y - this.on.y) < 30 && this.pos.x >= p.l - 12 && this.pos.x <= p.r + 12) || this.near(this.pos);
        if (same) { this.on = same; this.pos.y = same.y; }
        else { this.state = "spawn"; return true; } // its ledge moved away (the layout changed): start again on its own content
      }
      const P = PW.pointer, pp = { x: P.x + scrollX, y: P.y + scrollY };
      const close = P.on && Math.hypot(pp.x - this.pos.x, pp.y - (this.pos.y - 16)) < 110;
      let spr = this.spr.STAND, yOff = 0;
      if (this.bubble > 0) this.bubble -= dt;
      if (this.hop != null) { this.hop += dt; yOff = -Math.sin(Math.min(1, this.hop / 0.35) * Math.PI) * 14; if (this.hop > 0.35) this.hop = null; }
      if (PW.reduced) { this.state = "idle"; }
      if (this.state === "walk") {
        const dx = this.goal - this.pos.x;
        this.face = Math.sign(dx) || this.face;
        this.pos.x += Math.sign(dx) * Math.min(Math.abs(dx), 56 * dt);
        spr = Math.floor(this.t * 7) % 2 ? this.spr.WALK1 : this.spr.WALK2;
        if (close) { this.state = "idle"; this.t = 0; this.act = "wave"; }
        else if (Math.abs(dx) < 1) this.decide();
      } else if (this.state === "jump") {
        const k = Math.min(1, this.t / this.j.d);
        this.pos.x = this.j.x0 + (this.j.x1 - this.j.x0) * k;
        this.pos.y = this.j.y0 + (this.j.y1 - this.j.y0) * k - Math.sin(k * Math.PI) * this.j.h;
        spr = this.spr.JUMP;
        if (k >= 1) { this.on = this.j.to; this.pos.y = this.j.to.y; this.state = "walk"; this.t = 0; this.goal = this.pickGoal(this.j.to); }
      } else if (this.state === "idle") {
        if (this.act === "wave" || close) { spr = Math.floor(now * 4) % 2 ? this.spr.WAVE : this.spr.STAND; this.face = Math.sign(pp.x - this.pos.x) || this.face; }
        else if (this.act === "sit") spr = this.spr.SIT;
        else if (this.act === "read") spr = this.spr.READ;
        if (!PW.reduced && this.t > (this.act === "wave" ? 1.8 : 3.5) && !close) { this.state = "walk"; this.t = 0; this.goal = this.pickGoal(this.on); }
      }
      const sx = this.pos.x - scrollX, sy = this.pos.y - scrollY + yOff;
      PW.draw(ctx, spr, sx, sy + 1, s, this.face < 0);
      if (this.bubble > 0) PW.bubble(ctx, this.say, sx, sy - 18 * s, 2);
      return !PW.reduced;
    }
    pickGoal(p) { const x = (this.pos?.x ?? p.l) + (Math.random() - 0.5) * 320; return Math.max(p.l + 6, Math.min(p.r - 6, x)); }
    // At a stopping point: sometimes rest, sometimes jump to another ledge, sometimes just turn around.
    decide() {
      const p = this.on, atEdge = this.pos.x <= p.l + 8 || this.pos.x >= p.r - 8;
      const r = Math.random();
      if (r < 0.28) { this.state = "idle"; this.t = 0; this.act = atEdge && !p.ground ? "sit" : this.isHeading() ? "read" : "wave"; return; }
      const options = this.plats.filter((q) => q !== p && q.y > scrollY - 40 && q.y < scrollY + innerHeight + 40 && q.y - p.y < 260 && p.y - q.y < 150 && Math.min(Math.abs(q.l - this.pos.x), Math.abs(q.r - this.pos.x), q.l < this.pos.x && q.r > this.pos.x ? 0 : 1e9) < 160);
      if (options.length && r < 0.85) {
        const q = options[Math.floor(Math.random() * options.length)];
        const x1 = Math.max(q.l + 6, Math.min(q.r - 6, this.pos.x + (Math.random() - 0.5) * 120));
        const h = Math.max(24, this.pos.y - q.y + 30);
        this.j = { x0: this.pos.x, y0: this.pos.y, x1, y1: q.y, h: Math.min(h, 80), d: 0.45 + Math.min(0.4, Math.abs(x1 - this.pos.x) / 400), to: q };
        this.face = Math.sign(x1 - this.pos.x) || this.face;
        this.state = "jump"; this.t = 0; return;
      }
      this.goal = this.pickGoal(p);
    }
    isHeading() { return [...this.host.querySelectorAll("h1,h2,h3")].some((h) => Math.abs(h.getBoundingClientRect().top + scrollY - this.on.y) < 4); }
  }
  customElements.get("pw-wanderer") || customElements.define("pw-wanderer", Wanderer);
})();
