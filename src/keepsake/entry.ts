import "./keepsake.css";
import { SKIES, SnowGlobe, type Sky } from "./globe";
import { DEFAULT, decode, encode, normalize, type Keepsake } from "./data";

/**
 * Keepsake: make a snow globe for someone, send it as a link, and they unwrap it.
 * The maker and the receiver are the same page: a link with #g=… opens the receiver.
 */
const KEY = "patchwork-keepsake-draft";
const reduced = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const paintSky = (sky: Sky) => {
  const s = SKIES[sky];
  document.body.style.setProperty("--ks-top", s.top);
  document.body.style.setProperty("--ks-bottom", s.bottom);
  document.body.dataset.sky = sky;
};
const icon = {
  cabin: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M8 22 20 11l12 11v11H8Z" fill="none" stroke="currentColor" stroke-width="2"/><rect x="17" y="25" width="6" height="8" fill="currentColor"/><path d="M4 33h32" stroke="currentColor" stroke-width="2"/></svg>`,
  lighthouse: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M16 33 18 12h4l2 21Z" fill="none" stroke="currentColor" stroke-width="2"/><path d="M17 20h6M16.5 26h7" stroke="currentColor" stroke-width="2"/><path d="M18 12V8h4v4M22 9l12-3M22 11l12 3" stroke="currentColor" stroke-width="1.6"/><path d="M4 33h32" stroke="currentColor" stroke-width="2"/></svg>`,
  city: `<svg viewBox="0 0 40 40" aria-hidden="true"><path d="M6 33V18h7v15M13 33V9h8v24M21 33V15h6v18M27 33V21h7v12" fill="none" stroke="currentColor" stroke-width="2"/><path d="M4 33h32" stroke="currentColor" stroke-width="2"/></svg>`,
};

export function startKeepsake() {
  document.title = "Keepsake — a snow globe for someone";
  const code = location.hash.match(/^#g=([A-Za-z0-9_-]+)/)?.[1];
  const sent = code ? decode(code) : null;
  if (sent) receive(sent);
  else make();
}

function make() {
  let k: Keepsake = (() => { try { return normalize(JSON.parse(localStorage.getItem(KEY) || "{}")); } catch { return { ...DEFAULT }; } })();
  document.body.className = "ks ks-make";
  document.body.innerHTML = `
<header class="ks-bar"><a class="ks-logo" href="/" aria-label="Patchwork home"><span class="ks-mark" aria-hidden="true"></span>patchwork <em>keepsakes</em></a><span class="ks-step">Make · Send · Unwrap</span></header>
<main class="ks-stage"><canvas class="ks-canvas" aria-label="Your snow globe. Drag to shake it." role="img"></canvas><p class="ks-drag" aria-hidden="true"><span></span>Drag the globe to shake it</p></main>
<aside class="ks-panel" aria-label="Make a snow globe">
 <p class="ks-kicker">A small present, made in a minute</p>
 <h1 class="ks-h">Shake up <em>someone's day.</em></h1>
 <fieldset><legend>What lives inside</legend><div class="ks-tiles" role="radiogroup" aria-label="World">${(["cabin", "lighthouse", "city"] as const).map((w) => `<button type="button" role="radio" data-world="${w}">${icon[w]}<span>${w === "cabin" ? "Winter cabin" : w === "lighthouse" ? "Lighthouse" : "Little city"}</span></button>`).join("")}</div></fieldset>
 <div class="ks-row">
  <fieldset><legend>Sky</legend><div class="ks-swatches" role="radiogroup" aria-label="Sky">${(["night", "dusk", "day"] as const).map((s) => `<button type="button" role="radio" data-sky="${s}" aria-label="${s}" style="background:linear-gradient(${SKIES[s].top},${SKIES[s].bottom})"></button>`).join("")}</div></fieldset>
  <fieldset><legend>Snow</legend><div class="ks-swatches" role="radiogroup" aria-label="Snow">${([["white", "#ffffff"], ["gold", "#ffd27a"], ["rose", "#ffb3cf"]] as const).map(([s, c]) => `<button type="button" role="radio" data-snow="${s}" aria-label="${s} snow" style="background:radial-gradient(circle at 35% 35%,#fff,${c} 55%,${c})"></button>`).join("")}</div></fieldset>
 </div>
 <label class="ks-field"><span>Engraved on the base <small><b class="ks-count">0</b>/60</small></span><input name="message" maxlength="60" autocomplete="off"></label>
 <div class="ks-row"><label class="ks-field"><span>For</span><input name="to" maxlength="30" autocomplete="off"></label><label class="ks-field"><span>From</span><input name="from" maxlength="30" autocomplete="off"></label></div>
 <div class="ks-actions"><button class="ks-primary ks-send" type="button">Wrap it and make a link</button><button class="ks-ghost ks-shake" type="button">Shake it</button></div>
 <div class="ks-share" hidden><p class="ks-share-h">It's wrapped. Send this link:</p><div class="ks-linkrow"><input class="ks-link" readonly aria-label="Link to your snow globe"><button class="ks-primary ks-copy" type="button">Copy</button></div><p class="ks-share-note">Everything is inside the link: nothing is uploaded anywhere. <a class="ks-preview" target="_blank" rel="noopener">Unwrap it as they will ↗</a></p></div>
</aside>`;
  const canvas = document.querySelector<HTMLCanvasElement>(".ks-canvas")!;
  const globe = new SnowGlobe(canvas, k);
  const $ = <T extends Element>(s: string) => document.querySelector<T>(s)!;
  const inputs = { message: $<HTMLInputElement>("[name=message]"), to: $<HTMLInputElement>("[name=to]"), from: $<HTMLInputElement>("[name=from]") };
  inputs.message.value = k.message; inputs.to.value = k.to === DEFAULT.to ? "" : k.to; inputs.from.value = k.from === DEFAULT.from ? "" : k.from;
  inputs.to.placeholder = "Their name"; inputs.from.placeholder = "Your name";
  const sync = () => {
    document.querySelectorAll<HTMLButtonElement>("[data-world]").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.world === k.world)));
    document.querySelectorAll<HTMLButtonElement>("[data-sky]").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.sky === k.sky)));
    document.querySelectorAll<HTMLButtonElement>("[data-snow]").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.snow === k.snow)));
    $(".ks-count").textContent = String(inputs.message.value.length);
    paintSky(k.sky);
    try { localStorage.setItem(KEY, JSON.stringify(k)); } catch {}
    $<HTMLElement>(".ks-share").hidden = true;
  };
  const update = (patch: Partial<Keepsake>) => { k = normalize({ ...k, ...patch }); globe.setLook(k); sync(); };
  document.querySelectorAll<HTMLButtonElement>("[data-world]").forEach((b) => b.addEventListener("click", () => { update({ world: b.dataset.world as Keepsake["world"] }); globe.shake(30, -20); }));
  document.querySelectorAll<HTMLButtonElement>("[data-sky]").forEach((b) => b.addEventListener("click", () => update({ sky: b.dataset.sky as Sky })));
  document.querySelectorAll<HTMLButtonElement>("[data-snow]").forEach((b) => b.addEventListener("click", () => { update({ snow: b.dataset.snow as Keepsake["snow"] }); globe.shake(24, -16); }));
  inputs.message.addEventListener("input", () => update({ message: inputs.message.value || " " }));
  inputs.to.addEventListener("input", () => update({ to: inputs.to.value }));
  inputs.from.addEventListener("input", () => update({ from: inputs.from.value }));
  $(".ks-shake").addEventListener("click", () => { globe.shake(40, -30); setTimeout(() => globe.shake(-40, -20), 140); });
  $(".ks-send").addEventListener("click", () => {
    const url = `${location.origin}${location.pathname}?keepsake=globe#g=${encode(k)}`;
    $<HTMLInputElement>(".ks-link").value = url; $<HTMLAnchorElement>(".ks-preview").href = url;
    const share = $<HTMLElement>(".ks-share"); share.hidden = false;
    $<HTMLInputElement>(".ks-link").select();
  });
  $(".ks-copy").addEventListener("click", async () => {
    const btn = $<HTMLButtonElement>(".ks-copy");
    try { await navigator.clipboard.writeText($<HTMLInputElement>(".ks-link").value); btn.textContent = "Copied"; } catch { $<HTMLInputElement>(".ks-link").select(); btn.textContent = "Press Ctrl+C"; }
    setTimeout(() => (btn.textContent = "Copy"), 1800);
  });
  dragToShake(canvas, globe);
  sync();
  if (reduced()) globe.still(); else { globe.start(); setTimeout(() => globe.shake(36, -24), 500); }
}

function receive(k: Keepsake) {
  paintSky(k.sky);
  document.title = `A snow globe for ${k.to}`;
  document.body.className = "ks ks-receive";
  document.body.innerHTML = `
<header class="ks-bar"><a class="ks-logo" href="/?keepsake=globe"><span class="ks-mark" aria-hidden="true"></span>patchwork <em>keepsakes</em></a><span class="ks-step">Something arrived</span></header>
<div class="ks-track"><div class="ks-sticky"><canvas class="ks-canvas" aria-label="A snow globe in a gift box" role="img"></canvas>
 <div class="ks-arrive"><p class="ks-kicker">A small parcel for</p><h1 class="ks-to"></h1><p class="ks-tag">from <b class="ks-from"></b></p><p class="ks-scroll" aria-hidden="true">Scroll to unwrap ↓</p></div>
 <div class="ks-open"><p class="ks-kicker">Engraved on the base</p><p class="ks-message"></p><p class="ks-sign">— <span class="ks-from"></span></p><div class="ks-actions"><button class="ks-primary ks-shake" type="button">Shake it</button><a class="ks-ghost" href="/?keepsake=globe">Make one back</a></div></div>
 <p class="ks-drag ks-drag-r" aria-hidden="true"><span></span>Drag the globe to shake it</p>
</div></div>`;
  document.querySelector(".ks-to")!.textContent = k.to;
  document.querySelectorAll(".ks-from").forEach((e) => (e.textContent = k.from));
  document.querySelector(".ks-message")!.textContent = `“${k.message}”`;
  const canvas = document.querySelector<HTMLCanvasElement>(".ks-canvas")!;
  const globe = new SnowGlobe(canvas, k, { gift: true });
  const arrive = document.querySelector<HTMLElement>(".ks-arrive")!, open = document.querySelector<HTMLElement>(".ks-open")!, hint = document.querySelector<HTMLElement>(".ks-drag-r")!;
  document.querySelector(".ks-shake")!.addEventListener("click", () => { globe.shake(40, -30); setTimeout(() => globe.shake(-40, -20), 140); });
  dragToShake(canvas, globe);
  if (reduced()) {
    document.body.classList.add("ks-still"); globe.reveal = 1; globe.still();
    arrive.style.opacity = "0"; open.style.opacity = "1"; open.style.pointerEvents = "auto";
    return;
  }
  let target = 0, shown = 0, shook = false;
  const read = () => { const max = document.documentElement.scrollHeight - innerHeight; target = max > 0 ? scrollY / max : 1; };
  addEventListener("scroll", read, { passive: true }); read();
  const tick = () => {
    shown += (target - shown) * .08;
    globe.reveal = Math.min(1, shown * 1.12);
    const a = Math.max(0, 1 - shown * 6), o = Math.max(0, Math.min(1, (shown - .82) / .12));
    arrive.style.opacity = String(a); arrive.style.transform = `translateY(${-shown * 120}px)`;
    open.style.opacity = String(o); open.style.transform = `translateY(${(1 - o) * 30}px)`; open.style.pointerEvents = o > .5 ? "auto" : "none";
    hint.style.opacity = String(o * .9);
    if (o > .9 && !shook) { shook = true; globe.shake(40, -26); setTimeout(() => globe.shake(-36, -20), 160); }
    requestAnimationFrame(tick);
  };
  globe.start(); tick();
}

/** Dragging the globe shakes it: each move's speed becomes a jolt. Touch works the same. */
function dragToShake(canvas: HTMLCanvasElement, globe: SnowGlobe) {
  let down = false, lx = 0, ly = 0;
  canvas.addEventListener("pointerdown", (e) => { down = true; lx = e.clientX; ly = e.clientY; canvas.setPointerCapture(e.pointerId); canvas.classList.add("is-grabbing"); });
  canvas.addEventListener("pointermove", (e) => { if (!down) return; const dx = e.clientX - lx, dy = e.clientY - ly; lx = e.clientX; ly = e.clientY; globe.shake(dx, dy); });
  const up = () => { down = false; canvas.classList.remove("is-grabbing"); };
  canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
  // a phone shaken for real
  addEventListener("devicemotion", (e) => { const a = e.acceleration; if (a && Math.hypot(a.x || 0, a.y || 0) > 14) globe.shake((a.x || 0) * 2, -(a.y || 0) * 2); });
}
