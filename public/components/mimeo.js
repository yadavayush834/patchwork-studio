/* <pw-mimeo>: put it inside a <pre>. A tiny copying machine sits in the top-right corner as a real
   button. Press it and it copies the code: a light bar scans down your block, the drum turns and a
   "copied" slip prints out and floats away. If the clipboard is blocked it jams, smokes, and selects
   the text so Ctrl+C still works. Attributes: label, done (label after copying), color (scan light). */
(() => {
  const CW = 26, CH = 17;
  class Mimeo extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true;
      const pre = this.closest("pre") || this.parentElement;
      if (!pre) return;
      this.pre = pre;
      if (getComputedStyle(pre).position === "static") pre.style.position = "relative";
      const root = this.attachShadow({ mode: "open" });
      root.innerHTML = `<style>
:host{position:absolute;top:10px;right:10px;z-index:2}
button{display:inline-flex;align-items:center;gap:8px;padding:5px 10px 5px 6px;border:0;border-radius:8px;background:rgba(255,255,255,.08);color:inherit;font:600 12px "Pixelify Sans",ui-monospace,monospace;letter-spacing:.04em;cursor:pointer;transition:background-color .2s ease,transform .12s ease}
button:hover{background:rgba(255,255,255,.16)}
button:active{transform:translateY(1px)}
button:focus-visible{outline:2px solid var(--pw-scan,#7cf29a);outline-offset:2px}
canvas{width:${CW * 2}px;height:${CH * 2}px;image-rendering:pixelated}
</style><button type="button"><canvas width="${CW}" height="${CH}" aria-hidden="true"></canvas><span></span></button>`;
      this.btn = root.querySelector("button"); this.cv = root.querySelector("canvas"); this.ctx = this.cv.getContext("2d");
      this.$text = root.querySelector("span");
      this.label = this.getAttribute("label") || "Copy";
      this.$text.textContent = this.label;
      this.btn.setAttribute("aria-label", `${this.label} code`);
      this.scan = this.getAttribute("color") || "#7cf29a";
      this.state = "idle"; this.t = 0;
      this.btn.addEventListener("click", () => this.copy());
      this.btn.addEventListener("pointerenter", () => { this.hover = true; PW.wake(); });
      this.btn.addEventListener("pointerleave", () => { this.hover = false; });
      this._off = PW.stage(this);
      this.paint(0);
    }
    disconnectedCallback() { this._off?.(); }
    async copy() {
      if (this.state === "scan" || this.state === "print") return;
      const text = (this.pre.querySelector("code") || this.pre).innerText.replace(/\n$/, "");
      this.state = "scan"; this.t = 0; this.ok = null; PW.wake();
      try { await navigator.clipboard.writeText(text); this.ok = true; }
      catch { this.ok = false; }
    }
    // The machine, drawn fresh each frame: body, paper tray, turning drum, status light, slip.
    paint(now) {
      const x = this.ctx, px = (c, X, Y, w = 1, h = 1) => { x.fillStyle = c; x.fillRect(X, Y, w, h); };
      x.clearRect(0, 0, CW, CH);
      const work = this.state === "scan" || this.state === "print";
      // A sheet rises out of the top while printing.
      if (this.state === "print") { const k = Math.min(1, this.t / 0.5); const h = Math.round(6 * k); px("#fffaf0", 7, 4 - h + 2, 10, h); px("#c9c0ad", 8, 5 - h + 2, 6, 1); }
      px("#2b2735", 2, 5, 22, 10); px("#d9d4c7", 3, 6, 20, 8); px("#bdb6a6", 3, 12, 20, 2);
      px("#2b2735", 6, 4, 14, 2); px("#4b4560", 7, 4, 12, 1);
      // Drum window with turning stripes.
      px("#2b2735", 5, 8, 10, 3);
      for (let i = 0; i < 10; i++) if ((i + Math.floor(now * (work ? 20 : 0))) % 3 === 0) px("#6b6480", 5 + i, 9);
      // Status light.
      const led = this.state === "jam" ? (Math.floor(now * 6) % 2 ? "#ff5d5d" : "#7a2a2a") : work ? (Math.floor(now * 12) % 2 ? "#ffbf47" : "#7a5a1a") : this.state === "done" ? "#7cf29a" : this.hover || Math.floor(now * 0.8) % 3 ? "#7cf29a" : "#2f6b40";
      px(led, 19, 8, 2, 2);
      // Out tray.
      px("#2b2735", 1, 14, 24, 1); px("#8a8396", 0, 15, 26, 1);
      if (this.state === "jam") for (let i = 0; i < 3; i++) { const k = (now * 0.8 + i / 3) % 1; px(`rgba(200,200,210,${1 - k})`, 17 + i * 2 + Math.round(Math.sin(k * 6) * 1), Math.round(4 - k * 4), 2, 2); }
    }
    frame(ctx, dt, now) {
      this.t += dt;
      const r = this.pre.getBoundingClientRect();
      const vis = r.bottom > 0 && r.top < innerHeight;
      if (this.state === "scan") {
        // A band of light runs down the code block.
        const k = Math.min(1, this.t / (PW.reduced ? 0.01 : 0.7));
        const y = r.top + r.height * k;
        ctx.save();
        ctx.beginPath(); ctx.rect(r.left, r.top, r.width, r.height); ctx.clip();
        ctx.globalAlpha = 0.08; ctx.fillStyle = this.scan; ctx.fillRect(r.left, r.top, r.width, y - r.top);
        const g = ctx.createLinearGradient(0, y - 26, 0, y + 4);
        g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, this.scan);
        ctx.globalAlpha = 0.35; ctx.fillStyle = g; ctx.fillRect(r.left, y - 26, r.width, 30);
        ctx.globalAlpha = 0.9; ctx.fillRect(r.left, Math.round(y), r.width, 2);
        ctx.restore();
        if (k >= 1 && this.ok !== null) {
          this.state = this.ok ? "print" : "jam"; this.t = 0;
          if (this.ok) { this.$text.textContent = this.getAttribute("done") || "Copied"; PW.say("Code copied to the clipboard"); }
          else {
            const sel = getSelection(), range = document.createRange(); range.selectNodeContents(this.pre.querySelector("code") || this.pre); sel.removeAllRanges(); sel.addRange(range);
            this.$text.textContent = "Press Ctrl+C"; PW.say("Could not copy. The code is selected: press Control C");
          }
        }
      }
      if (this.state === "print") {
        // The printed slip floats up and away.
        const b = this.cv.getBoundingClientRect(), k = Math.min(1, this.t / 1.2);
        if (this.t > 0.45 && !PW.reduced) {
          const sx = b.left + b.width / 2 - 8 + Math.sin(k * 5) * 6, sy = b.top - 6 - k * 50;
          ctx.save(); ctx.globalAlpha = 1 - k; ctx.translate(sx, sy); ctx.rotate(Math.sin(k * 4) * 0.15);
          ctx.fillStyle = "#fffaf0"; ctx.fillRect(-18, -12, 36, 24); ctx.fillStyle = "#c9c0ad"; ctx.fillRect(-14, -8, 18, 2); ctx.fillRect(-14, -4, 24, 2); ctx.fillRect(-14, 0, 14, 2);
          ctx.strokeStyle = this.scan; ctx.lineWidth = 2; ctx.strokeRect(2, 0, 14, 9); ctx.fillStyle = this.scan; ctx.fillRect(5, 3, 8, 3);
          ctx.restore();
        }
        if (this.t > 1.25) { this.state = "done"; this.t = 0; }
      }
      if (this.state === "done" && this.t > 1.6) { this.state = "idle"; this.$text.textContent = this.label; }
      if (this.state === "jam" && this.t > 3) { this.state = "idle"; this.$text.textContent = this.label; }
      if (vis) this.paint(now);
      return vis && (this.state !== "idle" || this.hover || true);
    }
  }
  customElements.get("pw-mimeo") || customElements.define("pw-mimeo", Mimeo);
})();
