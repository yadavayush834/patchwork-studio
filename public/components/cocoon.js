/* <pw-cocoon value="40" label="Uploading">: a progress bar that is a caterpillar. It hangs from a twig
   and silk wraps it from the bottom up as the value rises. At 100 the cocoon shakes, splits, and a
   butterfly flies out across your whole page. Without a value it spins in place (indeterminate).
   It is a real progressbar for assistive tech. Attributes: value (0-100), label, wings (butterfly colour).
   Fires "pw-emerge" when the butterfly comes out. */
(() => {
  const W = 44, H = 38;
  const flyRows = (open) => open
    ? ["kk.......kk", "kaak...kaak", "kaaak.kaaak", "kaaaakaaaak", ".kaaakkaaak.", ".kbbk.kbbk.", "..kk...kk.."].map((r) => r.slice(0, 11))
    : ["....k.k....", "...kaka....", "...kaaak...", "...kaaak...", "....kkk....", "....kbk....", ".....k....."];
  class Cocoon extends HTMLElement {
    static get observedAttributes() { return ["value", "label"]; }
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `<style>
:host{display:inline-flex;align-items:center;gap:14px;font:inherit;color:inherit;vertical-align:middle}
canvas{width:${W * 3}px;height:${H * 3}px;image-rendering:pixelated;flex:none}
.meta{display:grid;gap:4px}
.label{font-size:.95em;opacity:.8}
.pct{font:600 1.6em/1 "Pixelify Sans",ui-monospace,monospace;font-variant-numeric:tabular-nums}
</style><canvas width="${W}" height="${H}" aria-hidden="true"></canvas><div class="meta"><span class="label"></span><span class="pct"></span></div>`;
      this.cv = root.querySelector("canvas"); this.ctx = this.cv.getContext("2d");
      this.$label = root.querySelector(".label"); this.$pct = root.querySelector(".pct");
      this.setAttribute("role", "progressbar");
      this.shown = 0; this.phase = "grow"; this.t = 0;
      const wings = this.getAttribute("wings") || "#ff8c2b";
      this.FLY = [PW.sprite(flyRows(true), { k: "#1b1622", a: wings, b: "#fff4e0" }), PW.sprite(flyRows(false), { k: "#1b1622", a: wings, b: "#fff4e0" })];
      this.sync();
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); }
    attributeChangedCallback() { if (this._ready) { this.sync(); PW.wake(); } }
    get value() { return this.target; }
    set value(v) { v == null ? this.removeAttribute("value") : this.setAttribute("value", String(v)); }
    sync() {
      const raw = this.getAttribute("value");
      this.indeterminate = raw === null || raw === "";
      this.target = this.indeterminate ? 0 : Math.max(0, Math.min(100, parseFloat(raw) || 0));
      const label = this.getAttribute("label") || "Loading";
      this.setAttribute("aria-label", label);
      this.$label.textContent = label;
      if (this.indeterminate) { this.removeAttribute("aria-valuenow"); this.$pct.textContent = "…"; }
      else {
        this.setAttribute("aria-valuemin", "0"); this.setAttribute("aria-valuemax", "100"); this.setAttribute("aria-valuenow", String(Math.round(this.target)));
        this.$pct.textContent = this.target >= 100 ? "Done" : `${Math.round(this.target)}%`;
      }
      // Going back below 100 brings a new caterpillar.
      if (this.target < 100 && this.phase !== "grow") { this.phase = "grow"; this.t = 0; }
      if (PW.reduced) this.shown = this.target;
    }
    paint(now) {
      const x = this.ctx; x.clearRect(0, 0, W, H);
      const px = (c, X, Y, w = 1, h = 1) => { x.fillStyle = c; x.fillRect(X, Y, w, h); };
      // The twig, with a leaf.
      for (let i = 0; i < W; i++) px(i % 9 === 4 ? "#6b4428" : "#8a5a33", i, 3 + (i > 30 ? 1 : 0), 1, 2);
      px("#5d9b3a", 32, 6, 5, 3); px("#79b84c", 33, 7, 4, 2); px("#4a7f2c", 31, 5, 2, 2);
      const sway = this.indeterminate && !PW.reduced ? Math.round(Math.sin(now * 2) * 1) : 0;
      const cx = 15 + sway, top = 10, len = 22;
      // Silk thread.
      for (let y = 5; y < top; y++) px("#f6efe0", 15 + (y > 7 ? sway : 0), y);
      if (this.phase === "husk") {
        // The empty, split cocoon.
        for (let y = 0; y < len; y++) { const w = 3 + Math.round(Math.sin((y / len) * Math.PI) * 2); px(y < 6 ? "#00000000" : "#cdbf9f", cx - w, top + y, 1, 1); px("#cdbf9f", cx + w, top + y, 1, 1); if (y > 5) px("#b9aa88", cx - w + 1, top + y, 2 * w - 1, 1); }
        return;
      }
      const shake = this.phase === "crack" && !PW.reduced ? Math.round(Math.sin(now * 60)) : 0;
      // The caterpillar, hanging in a J: striped body, head curled at the bottom.
      for (let y = 0; y < len; y++) {
        const w = 2 + (y > 2 && y < len - 3 ? 1 : 0);
        const seg = Math.floor(y / 3) % 2;
        px(seg ? "#5fa83a" : "#7ac74f", cx - w + shake, top + y, w * 2 + 1, 1);
        if (y % 3 === 1) { px("#f0c24a", cx - w + shake, top + y); px("#f0c24a", cx + w + shake, top + y); }
      }
      px("#7ac74f", cx + 2 + shake, top + len - 2, 3, 3); px("#1b1622", cx + 3 + shake, top + len - 1); px("#1b1622", cx + 4 + shake, top + len - 1);
      // Silk wraps from the bottom up; its stripes turn while it spins.
      const p = this.indeterminate ? 0.35 + 0.3 * Math.sin(now * 1.6) : this.shown / 100;
      const h = Math.round(len * p) + (p > 0 ? 2 : 0);
      for (let i = 0; i < h; i++) {
        const y = top + len + 1 - i;
        const w = 3 + Math.round(Math.sin(((y - top) / (len + 2)) * Math.PI) * 2);
        for (let X = -w; X <= w; X++) {
          const stripe = (X + i * 2 + Math.floor(now * (this.indeterminate || this.shown < this.target ? 12 : 3))) % 5 === 0;
          px(stripe ? "#dccfb0" : "#f6efe0", cx + X + shake, y);
        }
        px("#c2b28d", cx - w + shake, y); px("#c2b28d", cx + w + shake, y);
      }
      if (this.phase === "crack") {
        const k = Math.min(1, this.t / 0.6);
        for (let i = 0; i < Math.round(8 * k); i++) px("#7a6a4a", cx + (i % 2 ? 1 : 0) + shake, top + 2 + i * 2);
      }
    }
    frame(ctx, dt, now) {
      this.t += dt;
      if (!this.indeterminate) this.shown += (this.target - this.shown) * Math.min(1, dt * (PW.reduced ? 99 : 4));
      if (this.phase === "grow" && !this.indeterminate && this.target >= 100 && this.shown > 99.5) { this.phase = "crack"; this.t = 0; }
      if (this.phase === "crack" && this.t > (PW.reduced ? 0 : 0.7)) {
        this.phase = "husk"; this.t = 0;
        const r = this.cv.getBoundingClientRect();
        this.fly = PW.reduced ? null : { x: r.left + 15 * 3, y: r.top + 14 * 3, vx: 150, vy: -110, t: 0 };
        this.dispatchEvent(new CustomEvent("pw-emerge", { bubbles: true }));
        PW.say(`${this.getAttribute("label") || "Loading"}: done`);
      }
      const r = this.cv.getBoundingClientRect();
      const onScreen = r.bottom > 0 && r.top < innerHeight;
      if (onScreen) this.paint(now);
      // The butterfly crosses the page on its own wandering path.
      if (this.fly) {
        const f = this.fly; f.t += dt;
        f.vx += (Math.sin(f.t * 1.7) * 90 + 30) * dt; f.vy += (Math.cos(f.t * 2.3) * 120 - 25) * dt;
        f.vx *= 0.99; f.vy *= 0.99;
        f.x += f.vx * dt; f.y += f.vy * dt;
        const flap = Math.floor(f.t * 9) % 2;
        PW.draw(ctx, this.FLY[flap], f.x, f.y, 3, f.vx < 0);
        if (f.x > innerWidth + 40 || f.y < -40 || f.t > 12) this.fly = null;
      }
      return !!this.fly || (onScreen && (this.indeterminate || Math.abs(this.target - this.shown) > 0.05 || this.phase === "crack" || this.shown < this.target));
    }
  }
  customElements.get("pw-cocoon") || customElements.define("pw-cocoon", Cocoon);
})();
