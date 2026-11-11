/* <pw-kite>: back to top, flown. Once you have scrolled down, a kid walks into the bottom-right corner
   and lets a kite out; it climbs higher the further you read and leans with how fast you scroll.
   Click the kid (a real button, keyboard too) or the kite and they reel it in, carrying you to the top.
   Attributes: color, color2 (the kite's two cloths), tail (ribbon colour), threshold (px scrolled before it appears). */
(() => {
  const kidPal = { h: "#3b2a20", s: "#f2c39b", e: "#1b1622", r: "#d9534f", j: "#3c5a8a", f: "#2a2230", w: "#fff4e0", b: "#a8743f" };
  const kidRows = (arm) => [
    "..hhhh....",
    ".hhhhhh...",
    ".hsssshh..",
    ".sssesh...",
    "..ssss....",
    ".rrrrrr...",
    arm ? "rrrrrrrsb." : "rrrrrrr...",
    arm ? "rrrrrr..b." : "rrrrrrrsb.",
    ".rrrrr....",
    ".jjjjj....",
    ".jj.jj....",
    ".jj.jj....",
    ".ff.ff....",
  ];
  const KID = PW.sprite(kidRows(false), kidPal), CRANK = PW.sprite(kidRows(true), kidPal);
  const kiteSprite = (a, b) => {
    const rows = [];
    for (let y = 0; y < 19; y++) {
      let r = "";
      const hw = y <= 7 ? y : Math.round((18 - y) * 7 / 11);
      for (let x = 0; x < 15; x++) {
        const dx = x - 7;
        if (Math.abs(dx) > hw) { r += "."; continue; }
        if (Math.abs(dx) === hw) { r += "k"; continue; }
        if (dx === 0 || y === 7) { r += "s"; continue; }
        r += (dx < 0) === (y < 7) ? "a" : "b";
      }
      rows.push(r);
    }
    return PW.sprite(rows, { a, b, k: "#2a2230", s: "#7a5232" });
  };
  PW.css("pw-kite", `.pw-kite-btn{position:fixed;right:10px;bottom:6px;width:64px;height:72px;border:0;padding:0;background:transparent;cursor:pointer;z-index:2147482001;border-radius:12px}
.pw-kite-btn:focus-visible{outline:3px solid #ffbf47;outline-offset:2px}
.pw-kite-btn[hidden]{display:none}
.pw-kite-hit{position:fixed;width:56px;height:64px;cursor:pointer;z-index:2147482001;transform:translate(-50%,-80%)}
.pw-kite-hit[hidden]{display:none}`);

  class Kite extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      this.style.display = "none";
      this.s = 3;
      this.thr = PW.num(this, "threshold", 600);
      this.spr = kiteSprite(this.getAttribute("color") || "#ff5a5f", this.getAttribute("color2") || "#ffd25a");
      this.tailCol = this.getAttribute("tail") || "#5ac8fa";
      this.btn = Object.assign(document.createElement("button"), { className: "pw-kite-btn", type: "button", hidden: true, title: "Back to top" });
      this.btn.setAttribute("aria-label", "Back to top");
      this.hit = Object.assign(document.createElement("div"), { className: "pw-kite-hit", hidden: true });
      this.hit.setAttribute("aria-hidden", "true");
      document.body.append(this.btn, this.hit);
      const go = () => this.reel();
      this.btn.addEventListener("click", go); this.hit.addEventListener("click", go);
      this.v = 0; this.kite = null; this.tail = []; this.mode = "idle";
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); this.btn?.remove(); this.hit?.remove(); }
    reel() {
      if (this.mode === "reel") return;
      this.mode = "reel"; this.reelT = 0;
      PW.say("Back to the top");
      scrollTo({ top: 0, behavior: PW.reduced ? "auto" : "smooth" });
      PW.wake();
    }
    frame(ctx, dt, t) {
      const s = this.s, W = innerWidth, H = innerHeight;
      const max = Math.max(1, document.documentElement.scrollHeight - H);
      const want = scrollY > this.thr ? 1 : 0;
      if (this.mode === "reel" && scrollY < 4) { this.mode = "idle"; }
      this.v += (want - this.v) * Math.min(1, dt * (want ? 2.5 : 1.6));
      if (PW.reduced) this.v = want;
      const showing = this.v > 0.02;
      this.btn.hidden = !showing || want === 0; this.hit.hidden = this.btn.hidden;
      if (!showing) { this.kite = null; this.tail = []; return want === 1; }
      // The kid walks in from the right edge.
      const kx = W - 40 + (1 - this.v) * 90, ky = H - 10;
      const hand = [kx - 13, ky - 21];
      const p = Math.min(1, scrollY / max);
      const wind = Math.max(-1, Math.min(1, PW.scroll.v / 1800));
      let tx = W - 170 - 160 * p - wind * 90 + (PW.reduced ? 0 : 26 * Math.sin(t * 0.7) + 10 * Math.sin(t * 1.9));
      let ty = H - 190 - 300 * p + (PW.reduced ? 0 : 14 * Math.sin(t * 1.1));
      if (this.mode === "reel") { this.reelT += dt; tx = hand[0] - 30; ty = hand[1] - 40; }
      if (this.v < 0.99 && want) { const k = this.v; tx = hand[0] + (tx - hand[0]) * k; ty = hand[1] + (ty - hand[1]) * k; }
      if (!this.kite || PW.reduced) this.kite = { x: tx, y: ty, vx: 0, vy: 0 };
      const K = this.kite;
      const k = this.mode === "reel" ? 5 : 2.4;
      K.vx += ((tx - K.x) * k * k - K.vx * 2 * k) * dt; K.vy += ((ty - K.y) * k * k - K.vy * 2 * k) * dt;
      K.x += K.vx * dt; K.y += K.vy * dt;
      const tilt = Math.max(-0.5, Math.min(0.5, K.vx * 0.0025 + wind * 0.25 + (PW.reduced ? 0 : 0.08 * Math.sin(t * 1.7))));
      this.hit.style.left = `${K.x}px`; this.hit.style.top = `${K.y}px`;
      // String: from the hand to the kite's bridle, sagging more when it is slack.
      const bx = K.x + Math.sin(tilt) * 8, by = K.y - 18;
      const slack = this.mode === "reel" ? 6 : 40 - 25 * p;
      ctx.strokeStyle = "rgba(40,34,48,.75)"; ctx.lineWidth = 1;
      ctx.beginPath(); ctx.moveTo(hand[0], hand[1]);
      ctx.quadraticCurveTo((hand[0] + bx) / 2 + 20, (hand[1] + by) / 2 + slack, bx, by); ctx.stroke();
      // Tail: a little rope that swings, with bows.
      const anchor = [K.x - Math.sin(tilt) * 2 * s, K.y];
      if (!this.tail.length) for (let i = 0; i < 9; i++) this.tail.push({ x: anchor[0], y: anchor[1] + i * 9, px: anchor[0], py: anchor[1] + i * 9 });
      const T = this.tail;
      T[0].x = anchor[0]; T[0].y = anchor[1];
      for (let i = 1; i < T.length; i++) {
        const n = T[i], vx = (n.x - n.px) * 0.96, vy = (n.y - n.py) * 0.96;
        n.px = n.x; n.py = n.y;
        n.x += vx + (PW.reduced ? 0 : (12 + 30 * Math.abs(wind)) * dt * dt * 60 * (0.6 + 0.4 * Math.sin(t * 3 + i)));
        n.y += vy + 260 * dt * dt;
      }
      for (let it = 0; it < 4; it++) for (let i = 1; i < T.length; i++) {
        const a = T[i - 1], b = T[i], dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy) || 1, f = (d - 9) / d;
        if (i > 1) { a.x += dx * f * 0.5; a.y += dy * f * 0.5; b.x -= dx * f * 0.5; b.y -= dy * f * 0.5; } else { b.x -= dx * f; b.y -= dy * f; }
      }
      ctx.strokeStyle = "rgba(40,34,48,.7)"; ctx.beginPath(); T.forEach((n, i) => (i ? ctx.lineTo(n.x, n.y) : ctx.moveTo(n.x, n.y))); ctx.stroke();
      ctx.fillStyle = this.tailCol;
      for (let i = 2; i < T.length; i += 2) { ctx.fillRect(Math.round(T[i].x - 4), Math.round(T[i].y - 1), 3, 3); ctx.fillRect(Math.round(T[i].x + 1), Math.round(T[i].y - 1), 3, 3); }
      PW.draw(ctx, this.spr, K.x, K.y, s, false, tilt);
      // The kid, cranking the spool while reeling.
      const crank = this.mode === "reel" && Math.floor(t * 8) % 2;
      PW.draw(ctx, crank ? CRANK : KID, kx, ky + s, s, true);
      if (this.mode === "reel" && this.reelT < 1.4) PW.bubble(ctx, "Up we go!", Math.min(kx - 6, W - 40), ky - 42, 2);
      return true;
    }
  }
  customElements.get("pw-kite") || customElements.define("pw-kite", Kite);
})();
