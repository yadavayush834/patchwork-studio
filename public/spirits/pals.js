/* <pw-pal kind="hedgehog">: small pixel creatures that live on their parent element. One engine, many
   creatures; each has a way of moving (walk, hop, crawl, fly, hang, sit) and a way of reacting to you.
   Attributes: kind, size (2-4), color (replaces the creature's main colour). */
(() => {
  const K = "#2a2230", E = "#1b1622", W = "#fffaf0";
  // Each creature: palette, frames (a/b move, idle, react), how it moves and how it reacts.
  const PALS = {
    axolotl: { move: "crawl", speed: 14, react: "stop", pal: { c: "#f6a6c1", d: "#e0709a", g: "#ff6f91", e: E, w: W },
      a: ["......g.g...", ".....gcccg..", "cc..ccccccg.", "dcccccccecc.", ".dccccccccw.", "..c.c..c.c.."],
      b: ["......g.g...", ".....gcccg..", "cc..ccccccg.", "dcccccccecc.", ".dccccccccw.", ".c.c..c.c..."] },
    hedgehog: { move: "walk", speed: 26, react: "react", pal: { c: "#7a5232", t: "#e8c39a", k: E, e: E },
      a: ["..c.c.c.....", ".cccccccc...", "ccccccccct..", "cccccccctte.", "ccccccctttttk", ".ttttttttt..", "..t..t.t..t."],
      b: ["..c.c.c.....", ".cccccccc...", "ccccccccct..", "cccccccctte.", "ccccccctttttk", ".ttttttttt..", ".t..t...t.t."],
      rf: [".............", "...c.c.c.....", "..ccccccc....", ".ccccccccc...", "ccccccccccc..", "ccccccccccc..", ".ccccccccc...", "..ccccccc...."] },
    fox: { move: "walk", speed: 40, react: "idle", pal: { c: "#ef7d32", w: W, k: E, e: E },
      a: ["........c.c.", "........ccc.", ".ww.....ceck", "wccc...ccww.", ".cccccccc...", "..cccccc....", "..k.k..k.k.."],
      b: ["........c.c.", "........ccc.", ".ww.....ceck", "wccc...ccww.", ".cccccccc...", "..cccccc....", ".k..k.k..k.."],
      idle: ["......c.c..", "......ccc..", "......ceck.", "..w..ccww..", ".wc..ccc...", ".ccc.ccc...", "..ccccccc..", "...k..k...."] },
    raccoon: { move: "walk", speed: 30, react: "react", pal: { c: "#8e8a98", d: "#3b3742", w: W, k: E, e: E },
      a: ["........c.c.", "........cccc", "........wdwd", "d.d.....ceck", ".dcdccccccc.", "..ccccccccc.", "..c.c..c.c.."],
      b: ["........c.c.", "........cccc", "........wdwd", "d.d.....ceck", ".dcdccccccc.", "..ccccccccc.", ".c.c..c.c..."],
      rf: ["..c.c..", "..cccc.", "..wdwd.", "..ceck.", "..cccw.", "...ccc.", ".d.ccc.", "dcdccc.", "..cccc.", "..c..c."] },
    chick: { move: "hop", speed: 34, react: "react", pal: { c: "#ffd23f", o: "#ff8c2b", e: E },
      a: ["...ccc..", "..cccec.", "..cccccco", "cccccccc.", ".cccccc..", "..cccc...", "..o..o..."],
      b: ["...ccc..", "..cccec.", "..cccccco", "cccccccc.", ".cccccc..", "..cccc...", "..oo.oo.."],
      rf: ["...ccc...", "..cccec..", "c.cccccco", "cccccccc.", ".cccccc..", "..cccc...", "..o..o..."] },
    bunny: { move: "hop", speed: 46, react: "flee", pal: { c: "#f4f1ea", p: "#f6a6c1", g: "#c9c3d6", e: E },
      a: [".....c.c.", ".....c.c.", ".....cpcp", "....ccccc", "....ccecp", "cccccccc.", "gcccccccc", ".cccccc..", ".gg..gg.."],
      b: [".....c.c.", ".....c.c.", ".....cpcp", "....ccccc", "....ccecp", "cccccccc.", "gcccccccc", ".cccccc..", "gg....gg."] },
    squirrel: { move: "hop", speed: 50, react: "flee", pal: { c: "#c8642f", t: "#f0c9a0", e: E },
      a: [".cc.......", "cccc...c.c", "cc.cc..ccc", "c...c.ccec", ".c..cccccT", "..cccccctt", "...ccccc..", "...c...c.."].map((r) => r.replace("T", "t")),
      b: [".cc.......", "cccc...c.c", "cc.cc..ccc", "c...c.ccec", ".c..ccccct", "..cccccctt", "...ccccc..", "..c.....c."] },
    turtle: { move: "crawl", speed: 9, react: "react", pal: { c: "#5a8f3c", d: "#3f6b2a", g: "#9bc56b", e: E },
      a: ["...ccccc.....", "..cdcccdc....", ".cccdccccd...", ".ccccccccccgg", "gdddddddddgge", "..g..g..g..g."],
      b: ["...ccccc.....", "..cdcccdc....", ".cccdccccd...", ".ccccccccccgg", "gdddddddddgge", ".g..g..g..g.."],
      rf: ["...ccccc....", "..cdcccdc...", ".cccdccccd..", ".cccccccccc.", ".dddddddddd."] },
    ladybug: { move: "crawl", speed: 16, react: "fly", pal: { c: "#e5484d", k: E, w: W },
      a: ["...ccccc....", "..cckcccck..", ".cccccckcckk", ".ckcccccckwk", "..kkkkkkkkk.", "..k.k.k.k..."],
      b: ["...ccccc....", "..cckcccck..", ".cccccckcckk", ".ckcccccckwk", "..kkkkkkkkk.", "...k.k.k.k.."],
      rf: ["w..ccccc..w.", "ww.cckccc.ww", "wwcccccckckw", "..ckcccccckk", "..kkkkkkkkk."] },
    ghost: { move: "fly", speed: 30, react: "fade", pal: { c: "#f2f0ff", s: "#c9c3e6", e: E },
      a: ["..cccccc..", ".cccccccc.", "cccecceccc", "cccecceccc", "cccccccccc", "ccccsscccc", "cccccccccc", "cc.cc.cc.c"],
      b: ["..cccccc..", ".cccccccc.", "cccecceccc", "cccecceccc", "cccccccccc", "ccccsscccc", "cccccccccc", ".cc.cc.cc."] },
    jellyfish: { move: "fly", speed: 12, react: "rise", pal: { c: "#9bd7ff", l: "#d7f0ff", t: "#6aa8e8" },
      a: ["..ccccc..", ".cllcccc.", "clcccccccc", "cccccccccc", "t.t.t.t.t.", ".t.t.t.t..", "t.t.t.t.t."],
      b: ["...ccc...", "..cllcc...", ".ccccccc..", ".ccccccc..", ".t.t.t.t..", "..t.t.t...", ".t.t.t.t..", "..t.t.t..."] },
    dragonfly: { move: "fly", speed: 90, react: "dart", pal: { c: "#2fbf9f", w: "#cfeef0", e: E },
      a: ["..ww.ww....", "...wwww....", "cccccccccee", "...wwww....", "..ww.ww...."],
      b: ["...w..w....", "..ww.ww....", "cccccccccee", "..ww.ww....", "...w..w...."] },
    bat: { move: "hang", speed: 70, react: "fly", pal: { c: "#4b3b5c", w: "#6b5a80", e: "#ff5d5d", k: E },
      a: ["w.........w", "ww.......ww", "www.c.c.www", "wwwcccccwww", ".wwcececww.", "...ccccc...", "....c.c...."],
      b: ["...c...c...", "...ccccc...", "..wcececw..", ".wwcccccww.", "wwww.c.wwww", "ww.......ww"],
      idle: ["...k.k...", "...ccc...", "..wcccw..", "..wwcww..", "..wcecw..", "...wcw...", "....c...."] },
    sloth: { move: "hangwalk", speed: 6, react: "idle", pal: { c: "#a08262", t: "#e8d5b0", k: E, e: E },
      a: ["k.k...k.k", "ccc...ccc", ".ccccccc.", "ccccccccc", "cctttttcc", "ctekttekc", "cctttttcc", ".ccccccc.", "..ccccc.."],
      b: ["k.k..k.k.", "ccc..ccc.", ".ccccccc.", "ccccccccc", "cctttttcc", "ctekttekc", "cctttttcc", ".ccccccc.", "..ccccc.."],
      idle: ["k.k...k.k", "ccc...ccc", ".ccccccc.", "ccccccccc", "cctttttcc", "ctkkttkkc", "cctttttcc", ".ccccccc.", "..ccccc.."] },
    owl: { move: "sit", speed: 0, react: "react", pal: { c: "#8a6a4a", l: "#e8d5b0", y: "#ffd23f", k: E },
      a: ["c........c", "cc......cc", ".cccccccc.", "cyykccyykc", "cyyyccyyyc", ".ccckkccc.", ".cllllllc.", ".cllcllllc", "..cllllc..", "..k....k.."],
      b: ["c........c", "cc......cc", ".cccccccc.", "ckkkcckkkc", "cyyyccyyyc", ".ccckkccc.", ".cllllllc.", ".cllcllllc", "..cllllc..", "..k....k.."],
      rf: ["c............c", "cc..........cc", "..cccccccccc..", "c.cyykccyykc.c", "ccyyyccyyyccc.", ".cccckkcccc...", "..cllllllc....", "...cllllc.....", "...k....k....."] },
    octopus: { move: "sit", speed: 0, react: "react", pal: { c: "#a98bff", d: "#7a5fd6", w: W, e: E },
      a: ["..cccccc..", ".cccccccc.", "ccweccwecc", "cccccccccc", ".cccccccc.", "c.cc.cc.c.", ".c..c..c.c"],
      b: ["..cccccc..", ".cccccccc.", "ccweccwecc", "cccccccccc", ".cccccccc.", ".c.cc.cc.c", "c.c..c..c."],
      rf: ["c.cccccc.c", "ccccccccc.", "ccweccwecc", "cccccccccc", ".cccccccc.", "c.cc.cc.c.", ".c..c..c.c"] },
  };
  // A pal drawn in the Pal maker: rows of letters (c d e f g, "." for empty) and a colour for each letter.
  const MOVES = { walk: [30, "flee"], hop: [44, "flee"], crawl: [14, "stop"], fly: [30, "fade"], hang: [60, "fly"], sit: [0, "react"] };
  const custom = (el) => {
    const move = MOVES[el.getAttribute("move")] ? el.getAttribute("move") : "walk";
    const rows = (v) => (v || "").split("/").map((r) => r.replace(/[^cdefg.]/g, ".").slice(0, 16)).slice(0, 14);
    const pal = {};
    for (const part of (el.getAttribute("colors") || "").split(",")) { const [k, v] = part.split(":"); if (/^[cdefg]$/.test(k) && /^#[0-9a-f]{6}$/i.test(v || "")) pal[k] = v; }
    const a = rows(el.getAttribute("a")), b = el.getAttribute("b") ? rows(el.getAttribute("b")) : a;
    if (!a.length || !a.some((r) => /[cdefg]/.test(r))) return null;
    return { move, speed: MOVES[move][0], react: MOVES[move][1], pal, a, b, idle: move === "hang" ? a : undefined };
  };
  const build = (def, color) => {
    const pal = { ...def.pal, ...(color ? { c: color } : {}) };
    const out = {};
    for (const k of ["a", "b", "idle", "rf"]) if (def[k]) out[k] = PW.sprite(def[k], pal);
    return out;
  };
  class Pal extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this.def = this.getAttribute("kind") === "custom" ? custom(this) : PALS[this.getAttribute("kind")];
      if (!this.def) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement === document.body ? document.documentElement : this.parentElement;
      this.spr = build(this.def, /^#[0-9a-f]{6}$/i.test(this.getAttribute("color") || "") ? this.getAttribute("color") : null);
      this.s = Math.max(2, Math.min(4, Math.round(PW.num(this, "size", 3))));
      this.x = null; this.way = Math.random() < 0.5 ? -1 : 1; this.pause = Math.random() * 2; this.t = 0; this.reactT = 0; this.alpha = 1;
      this.host.addEventListener("click", (e) => {
        if (this.x === null) return;
        const r = this.host.getBoundingClientRect();
        if (Math.hypot(e.clientX - (r.left + this.x), e.clientY - (r.top + this.y - 12)) < 50) { this.reactT = 1.2; PW.wake(); }
      });
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    frame(ctx, dt, now) {
      const r = this.host.getBoundingClientRect();
      if (r.bottom < -40 || r.top > innerHeight + 40 || r.width < 20) return false;
      const d = this.def, s = this.s, S = this.spr, P = PW.pointer;
      const w = S.a.width * s, h = S.a.height * s;
      this.t += dt; if (this.reactT > 0) this.reactT -= dt;
      if (this.x === null) { this.x = w + Math.random() * Math.max(1, r.width - 2 * w); this.y = d.move === "fly" ? r.height * (0.3 + Math.random() * 0.4) : 0; this.fy = this.y; }
      const px = P.x - r.left, py = P.y - r.top;
      const near = P.on && Math.hypot(px - this.x, py - (this.y - h / 2)) < 80;
      let spr = Math.floor(this.t * (d.move === "fly" || d.move === "hang" ? 8 : 5)) % 2 ? S.b : S.a, y = 0, flip = this.way < 0, alpha = 1;
      const minX = w / 2 + 2, maxX = r.width - w / 2 - 2;
      const reacting = this.reactT > 0 || (near && d.react !== "fade" && d.react !== "fly");
      if (PW.reduced) { spr = S.idle || S.a; }
      else if (d.move === "walk" || d.move === "crawl" || d.move === "hop" || d.move === "hangwalk") {
        let moving = true;
        if (reacting && d.react === "flee") { this.way = Math.sign(this.x - px) || this.way; this.x += this.way * d.speed * 3 * dt; }
        else if (reacting) { moving = false; spr = S.rf || S.idle || S.a; }
        else {
          if (this.pause > 0) { this.pause -= dt; moving = false; spr = S.idle || S.a; }
          else { this.x += this.way * d.speed * dt; if (Math.random() < dt * 0.15) this.pause = 1 + Math.random() * 2.5; }
        }
        if (this.x < minX || this.x > maxX) { this.x = Math.max(minX, Math.min(maxX, this.x)); this.way *= -1; }
        if (d.move === "hop" && moving) { const ph = (this.t * 2.2) % 1; y = -Math.abs(Math.sin(ph * Math.PI)) * 16; spr = ph < 0.5 ? S.b : S.a; }
        flip = this.way < 0;
      } else if (d.move === "fly" || (d.move === "hang" && (near || this.reactT > 0 || this.flying > 0))) {
        // Wander about the element on a smooth path; dragonflies dart, ghosts fade, jellyfish rise and sink.
        if (d.move === "hang") this.flying = near || this.reactT > 0 ? 2.5 : this.flying - dt;
        this.goal ??= { x: this.x, y: r.height / 2 };
        if (!this.gt || this.gt <= 0 || (d.react === "dart" && Math.random() < dt * 1.5)) { this.goal = { x: minX + Math.random() * (maxX - minX), y: h + Math.random() * Math.max(10, r.height - 2 * h) }; this.gt = 1.5 + Math.random() * 3; }
        this.gt -= dt;
        if (near && d.react === "dart") this.goal = { x: Math.max(minX, Math.min(maxX, this.x - (px - this.x) * 2)), y: this.goal.y };
        const k = d.react === "dart" ? 6 : 1.2, sp = d.speed;
        const dx = this.goal.x - this.x, dy = this.goal.y - this.fy, dist = Math.hypot(dx, dy) || 1;
        const v = Math.min(sp * (d.react === "dart" ? 3 : 1), dist * k);
        this.x += (dx / dist) * v * dt; this.fy += (dy / dist) * v * dt + (d.react === "rise" ? Math.sin(now * 1.6) * 8 * dt : 0);
        if (Math.abs(dx) > 2) this.way = Math.sign(dx);
        this.y = this.fy; flip = this.way < 0;
        if (d.react === "fade") alpha = near ? 0.25 : 0.95;
        if (d.move === "hang" && this.flying <= 0) { this.goal = { x: this.x, y: 0 }; if (this.fy < 4) { this.fy = 0; this.y = 0; } }
      } else if (d.move === "hang") { spr = S.idle; this.y = 0; }
      else if (d.move === "sit") {
        this.x = Math.max(minX, Math.min(maxX, r.width - w)); this.y = 0;
        flip = P.on ? px < this.x : false;
        spr = this.reactT > 0 || near ? S.rf || S.a : Math.floor(now * 0.8 + this.x) % 5 === 0 && now % 1 < 0.2 ? S.b : S.a;
      }
      if (d.react === "fly" && d.move === "crawl" && this.reactT > 0) { spr = S.rf; y = -Math.sin((1.2 - this.reactT) / 1.2 * Math.PI) * 40; }
      this.alpha += (alpha - this.alpha) * Math.min(1, dt * 5);
      // Ground: walkers stand on the top edge, crawlers on the bottom edge, hangers hang under the top edge.
      const gx = r.left + this.x;
      let gy = r.top + (d.move === "crawl" ? r.height : 0);
      if (d.move === "fly" || (d.move === "hang" && this.flying > 0)) gy = r.top + this.y;
      if (d.move === "hangwalk" || (d.move === "hang" && !(this.flying > 0))) gy = r.top + spr.height * s;
      PW.draw(ctx, spr, gx, gy + y + (d.move === "crawl" ? 0 : 1), s, flip, 0, this.alpha);
      return !PW.reduced;
    }
  }
  window.PW_PALS = Object.keys(PALS);
  customElements.get("pw-pal") || customElements.define("pw-pal", Pal);
})();
