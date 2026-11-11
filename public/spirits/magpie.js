/* <pw-magpie>: a magpie that collects shiny words. Every so often it flies in, lands on a word in its
   parent's text, pecks it, and flies off holding it in its beak (the word's place stays open). A few
   seconds later it brings the word back and drops it in. Come too close and it drops the word and
   flees; click while it is away and it hurries back. The text stays in the page for screen readers.
   Attributes: every (seconds between visits), color (tail sheen). */
(() => {
  PW.css("pw-magpie", `.pw-mp-word{transition:opacity .15s steps(2)}.pw-mp-gone{opacity:0}.pw-mp-back{animation:pw-mp-land .45s cubic-bezier(.3,1.6,.5,1)}@keyframes pw-mp-land{from{transform:translateY(-10px)}}`);
  const ease = (k) => k * k * (3 - 2 * k);
  class Magpie extends HTMLElement {
    connectedCallback() {
      if (this._ready) return;
      this._ready = true; this.style.display = "none";
      this.host = this.parentElement;
      this.sheen = this.getAttribute("color") || "#2c7a8c";
      this.every = Math.max(4, PW.num(this, "every", 9));
      this.state = "off"; this.t = this.every - 2.5; this.b = { x: -40, y: 80 };
      document.addEventListener("click", () => { if (this.state === "away") { this.state = "back"; this.t = 0; this.from = { ...this.b }; PW.wake(); } });
      this._off = PW.stage(this);
    }
    disconnectedCallback() { this._off?.(); this.restore(); }
    // A word of 4-10 letters that is on screen right now.
    pickWord() {
      const walker = document.createTreeWalker(this.host, NodeFilter.SHOW_TEXT);
      const found = [];
      while (walker.nextNode()) {
        const n = walker.currentNode, el = n.parentElement;
        if (!el || el.closest("pw-magpie,script,style,button,a,input,textarea,.pw-ll-word")) continue;
        for (const m of n.textContent.matchAll(/[A-Za-z]{4,10}/g)) {
          const rg = document.createRange(); rg.setStart(n, m.index); rg.setEnd(n, m.index + m[0].length);
          const rc = rg.getBoundingClientRect();
          if (rc.top > 60 && rc.bottom < innerHeight - 40 && rc.width > 10) found.push(rg);
        }
      }
      return found.length ? found[Math.floor(Math.random() * found.length)] : null;
    }
    take() {
      const rg = this.pickWord();
      if (!rg) return false;
      const span = document.createElement("span"); span.className = "pw-mp-word";
      rg.surroundContents(span);
      const cs = getComputedStyle(span);
      this.word = { span, text: span.textContent, font: `${cs.fontStyle} ${cs.fontWeight} ${cs.fontSize} ${cs.fontFamily}`, color: cs.color };
      return true;
    }
    restore(bounce) {
      const w = this.word; if (!w) return;
      w.span.classList.remove("pw-mp-gone");
      if (bounce) { w.span.classList.add("pw-mp-back"); w.span.style.display = "inline-block"; }
      setTimeout(() => { if (w.span.parentNode) { const p = w.span.parentNode; w.span.replaceWith(...w.span.childNodes); p.normalize(); } }, bounce ? 500 : 0);
      this.word = null;
    }
    spot() { const r = this.word.span.getBoundingClientRect(); return { x: r.left + r.width / 2, y: r.top + 2, w: r.width }; }
    frame(ctx, dt, now) {
      this.t += dt;
      const hr = this.host.getBoundingClientRect();
      if (PW.reduced) return false;
      const P = PW.pointer;
      let flying = true, peck = 0, carry = false;
      const side = (this.side ??= 1);
      const offX = side > 0 ? innerWidth + 50 : -50;
      if (this.state === "off") {
        if (this.t > this.every && hr.bottom > 0 && hr.top < innerHeight && this.take()) { this.state = "in"; this.t = 0; this.side = Math.random() < 0.5 ? 1 : -1; this.from = { x: this.side > 0 ? innerWidth + 50 : -50, y: 60 + Math.random() * 120 }; }
        else { if (this.t > this.every) this.t = this.every - 2; return true; }
      }
      if (this.state !== "off" && this.word && !this.word.span.isConnected) { this.word = null; this.state = "leave"; this.t = 0; this.from = { ...this.b }; }
      const S = this.word ? this.spot() : this.b;
      if (this.state === "in") {
        const k = Math.min(1, this.t / 1.6), e = ease(k);
        this.b = { x: this.from.x + (S.x - this.from.x) * e, y: this.from.y + (S.y - this.from.y) * e - Math.sin(k * Math.PI) * 60 };
        if (k >= 1) { this.state = "peck"; this.t = 0; }
      } else if (this.state === "peck") {
        this.b = { x: S.x, y: S.y }; flying = false;
        peck = Math.max(0, Math.sin(this.t * 14)) * (this.t < 1 ? 1 : 0);
        if (this.t > 1.2) { this.state = "lift"; this.t = 0; this.word.span.classList.add("pw-mp-gone"); this.from = { ...this.b }; }
      } else if (this.state === "lift") {
        carry = true;
        const k = Math.min(1, this.t / 1.7), e = ease(k);
        const to = { x: offX, y: -20 };
        this.b = { x: this.from.x + (to.x - this.from.x) * e, y: this.from.y + (to.y - this.from.y) * e - Math.sin(k * Math.PI) * 30 };
        if (k >= 1) { this.state = "away"; this.t = 0; }
      } else if (this.state === "away") {
        if (this.t > 3.5) { this.state = "back"; this.t = 0; this.from = { x: offX, y: -20 }; }
        return true;
      } else if (this.state === "back") {
        carry = true;
        const k = Math.min(1, this.t / 1.7), e = ease(k);
        this.b = { x: this.from.x + (S.x - this.from.x) * e, y: this.from.y + (S.y - this.from.y) * e - Math.sin(k * Math.PI) * 40 };
        if (k >= 1) { this.restore(true); this.state = "leave"; this.t = 0; this.from = { ...this.b }; }
      } else if (this.state === "leave") {
        const k = Math.min(1, this.t / 1.4), e = ease(k);
        this.b = { x: this.from.x + (offX - this.from.x) * e, y: this.from.y + (-30 - this.from.y) * e };
        if (k >= 1) { this.state = "off"; this.t = 0; return false; }
      }
      // Startled by a close pointer: drop it and go.
      if ((this.state === "peck" || this.state === "in") && P.on && Math.hypot(P.x - this.b.x, P.y - this.b.y) < 70) { this.restore(true); this.state = "leave"; this.t = 0; this.from = { ...this.b }; PW.say("The magpie gave the word back"); }
      this.draw(ctx, now, flying, peck, carry);
      return true;
    }
    draw(ctx, now, flying, peck, carry) {
      // 2px art drawn at 1.5x around the bird, so it is readable and still crisp.
      ctx.save(); ctx.translate(Math.round(this.b.x), Math.round(this.b.y)); ctx.scale(1.5, 1.5);
      const s = 2, x = 0, y = 0;
      const f = this.state === "lift" || this.state === "leave" ? Math.sign((this.side > 0 ? innerWidth + 50 : -50) - this.from.x) || 1 : this.state === "back" || this.state === "in" ? Math.sign(this.spotX() - this.from.x) || 1 : 1;
      const by = y - 9;
      // Long tail with a blue-green sheen, body, white belly and shoulder patch, head and beak.
      PW.line(ctx, x - f * 6, by + 2, x - f * 20, by - (flying ? 0 : 6), s, this.sheen);
      PW.line(ctx, x - f * 6, by + 4, x - f * 19, by + 1 - (flying ? -2 : 6), s, "#15141b");
      PW.blob(ctx, x, by + 2, 8, 5, s, "#15141b", f * -0.15);
      PW.blob(ctx, x + f * 1, by + 4, 5, 3, s, "#f4f1ea");
      PW.blob(ctx, x - f * 2, by, 3, 2, s, "#f4f1ea");
      const hy = by - 4 + peck * 7;
      PW.blob(ctx, x + f * 7, hy, 4, 4, s, "#15141b");
      PW.dot(ctx, x + f * 8, hy - 1, s, "#e9e4ff");
      PW.line(ctx, x + f * 10, hy + 1, x + f * 14, hy + 2, s, "#2a2830");
      if (flying) {
        const up = Math.sin(now * 16) > 0;
        PW.blob(ctx, x - f * 1, by - (up ? 7 : -5), 8, 3, s, up ? "#15141b" : this.sheen, up ? -0.5 * f : 0.5 * f);
        PW.blob(ctx, x - f * 3, by - (up ? 8 : -6), 3, 2, s, "#f4f1ea");
      } else {
        PW.line(ctx, x - 2, by + 7, x - 2, y, 1, "#2a2830"); PW.line(ctx, x + 2, by + 7, x + 2, y, 1, "#2a2830");
      }
      if (carry && this.word) {
        ctx.save(); ctx.scale(1 / 1.5, 1 / 1.5); ctx.font = this.word.font; ctx.fillStyle = this.word.color; ctx.textAlign = "center"; ctx.textBaseline = "top";
        ctx.fillText(this.word.text, Math.round((x + f * 14) * 1.5), Math.round((hy + 3) * 1.5 + Math.sin(now * 8) * 1.5));
        ctx.restore();
      }
      ctx.restore();
    }
    spotX() { return this.word ? this.spot().x : this.b.x; }
  }
  customElements.get("pw-magpie") || customElements.define("pw-magpie", Magpie);
})();
