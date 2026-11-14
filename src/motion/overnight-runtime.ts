import gsap from "gsap";
import { Diorama, type DioramaOptions } from "../diorama/engine";

/**
 * Overnight's choreography. Each stop is a Diorama (painting + depth map, at full resolution) whose camera
 * the scroll drives: down the platform, past the lake as if from a moving window, up over the
 * viaduct as the sun rises, into the station by the sea. Between stops the train goes through a
 * tunnel (the picture darkens), and the ticket punches the stop and moves its clock.
 */
type Stop = "platform" | "forest" | "viaduct" | "coast";
const SETUP: Record<Stop, Omit<DioramaOptions, "color" | "depth">> = {
  platform: {
    pixel: 0, depthScale: .045, focus: .3, pointer: .7,
    glow: { threshold: .68, strength: .95, flicker: .22, tint: [1, .74, .4], bloom: 1.4 },
    grade: { vignette: .45 },
    particles: [
      { kind: "steam", count: 46, color: [.72, .74, .86], size: 14, speed: .45, region: [.55, .3, 1, .9], depth: [.35, .85] },
      { kind: "dust", count: 160, color: [1, .82, .5], size: 2, speed: .7, region: [.3, .05, .8, .7], depth: [.3, .8], glow: .6 },
    ],
  },
  forest: {
    pixel: 0, depthScale: .07, focus: .3, pointer: .5,
    glow: { threshold: .72, strength: .9, flicker: .3, tint: [1, .78, .45], bloom: 1.4 },
    water: { y: .55, strength: .9 }, grade: { vignette: .35 },
    particles: [{ kind: "fireflies", count: 90, color: [1, .9, .45], size: 3, speed: 1, region: [0, .45, 1, 1], depth: [.45, .95], glow: 1.6 }],
  },
  viaduct: {
    pixel: 0, depthScale: .06, focus: .35, pointer: .5,
    glow: { threshold: .8, strength: .7, flicker: .06, tint: [1, .82, .55], bloom: 1.6 },
    rays: { x: .9, y: .3, strength: .2, decay: .965, color: [1, .78, .5] },
    grade: { vignette: .3 },
    particles: [{ kind: "steam", count: 40, color: [.95, .96, 1], size: 16, speed: .4, region: [.15, .55, 1, .95], depth: [.2, .6] }],
  },
  coast: {
    pixel: 0, depthScale: .05, focus: .4, pointer: .6,
    glow: { threshold: .88, strength: .5, flicker: .05, tint: [1, .9, .7] },
    water: { y: .43, strength: .6 }, grade: { saturation: 1.05, vignette: .2 },
    particles: [{ kind: "petals", count: 40, color: [1, .55, .75], size: 3, speed: .5, region: [0, .2, .4, 1], depth: [.6, 1] }],
  },
};
const TIMES = [22 * 60 + 40, 25 * 60 + 15, 29 * 60 + 52, 32 * 60 + 10];
const clock = (m: number) => { const h = Math.floor(m / 60) % 24, mm = Math.floor(m % 60); return `${String(h).padStart(2, "0")}:${String(mm).padStart(2, "0")}`; };

/** Letters settle one by one, like a split-flap departures board. */
function flap(el: HTMLElement) {
  const final = el.dataset.final || el.textContent || "", chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let frame = 0;
  const id = setInterval(() => {
    frame++;
    el.textContent = [...final].map((ch, i) => (ch === " " || i < frame / 2 ? ch : chars[(Math.random() * chars.length) | 0])).join("");
    if (frame / 2 > final.length) { clearInterval(id); el.textContent = final; }
  }, 45);
}

export function animateOvernight(reduced: boolean, mobile: boolean) {
  const views = new Map<Stop, Diorama>();
  document.querySelectorAll<HTMLCanvasElement>(".on-art").forEach((canvas) => {
    const stop = canvas.dataset.stop as Stop;
    const base = `motion/art/overnight/${stop}/`;
    views.set(stop, new Diorama(canvas, { ...SETUP[stop], color: base + "painting.webp", depth: base + "depth.webp", still: reduced }));
  });
  const v = (s: Stop) => views.get(s)!;
  const stops = [...document.querySelectorAll<HTMLElement>(".on-stops li")];
  const clockEl = document.querySelector<HTMLElement>(".on-clock")!;
  const punch = (i: number) => stops.forEach((li, k) => { li.classList.toggle("is-done", k < i); li.classList.toggle("is-now", k === i); });
  punch(0);

  // Choosing a berth updates the ticket and the booking link (works with or without motion).
  const berths = [...document.querySelectorAll<HTMLButtonElement>(".on-berth")];
  const choose = (b: HTMLButtonElement) => {
    berths.forEach((x) => { const on = x === b; x.setAttribute("aria-checked", String(on)); x.querySelector(".on-berth-pick")!.textContent = on ? "SELECTED" : "CHOOSE"; });
    const name = b.querySelector(".on-berth-name")!.textContent || "";
    document.querySelector(".on-berth-label")!.textContent = name.toUpperCase();
    document.querySelector(".on-book-berth")!.textContent = name.toLowerCase();
    if (!reduced) gsap.fromTo(".on-ticket", { rotate: -2 }, { rotate: 0, duration: .6, ease: "elastic.out(1, .4)" });
  };
  berths.forEach((b) => b.addEventListener("click", () => choose(b)));
  document.querySelector(".on-berth-list")?.addEventListener("keydown", (e) => {
    const k = (e as KeyboardEvent).key, i = berths.findIndex((b) => b.getAttribute("aria-checked") === "true");
    if (k !== "ArrowRight" && k !== "ArrowLeft") return;
    e.preventDefault();
    const next = berths[(i + (k === "ArrowRight" ? 1 : berths.length - 1)) % berths.length];
    choose(next); next.focus();
  });

  if (reduced) return () => views.forEach((d) => d.destroy());

  document.querySelectorAll<HTMLElement>(".on-flap").forEach((el, i) => setTimeout(() => flap(el), 600 + i * 300));
  const screens = mobile ? 0.75 : 1;
  const pin = (trigger: string, length: number) => gsap.timeline({ scrollTrigger: { trigger, start: "top top", end: () => `+=${innerHeight * length * screens}`, pin: true, scrub: .8, anticipatePin: 1, invalidateOnRefresh: true } });
  // A tunnel between stops: the picture fades to black and back.
  const tunnel = (s: Stop, out: number, tl: gsap.core.Timeline, at: number) => tl.to(v(s).options.grade!, { exposure: out, duration: .5, ease: "power1.in" }, at);

  // 1. Boarding: the camera walks down the platform; at the end the train pulls away into a tunnel.
  const p = v("platform");
  p.cam.cx = .47; p.cam.cy = .64;
  p.options.grade!.exposure = 1;
  const t1 = pin(".on-platform", 2.6);
  t1.to(".on-hero-copy .on-w>span", { yPercent: -110, stagger: .04, duration: .5, ease: "power2.in" }, .25)
    .to(".on-hero-copy .on-lede,.on-hero-copy .on-label,.on-scroll", { autoAlpha: 0, y: -20, duration: .4 }, .25)
    .to(".on-board", { y: -40, autoAlpha: 0, duration: .5 }, .4)
    .to(p.cam, { zoom: 1.75, dolly: .55, duration: 2, ease: "power1.inOut" }, 0)
    .to(p.light, { boost: .6, duration: 1 }, 1);
  tunnel("platform", 0, t1, 1.7);

  // 2. The lake from the compartment window: curtains open, the world slides past.
  const f = v("forest");
  f.options.grade!.exposure = 0;
  const t2 = pin(".on-forest", 3.2);
  t2.fromTo(".on-curtain.on-left", { scaleX: 1 }, { scaleX: .16, duration: .7, ease: "power2.inOut" }, .1)
    .fromTo(".on-curtain.on-right", { scaleX: 1 }, { scaleX: .16, duration: .7, ease: "power2.inOut" }, .1)
    .fromTo(f.cam, { x: -1.3, zoom: 1.12 }, { x: 1.3, zoom: 1.04, duration: 3, ease: "none" }, 0)
    .from(".on-forest .on-copy > *", { y: 40, autoAlpha: 0, stagger: .12, duration: .5 }, .5)
    .from(".on-facts li", { x: -30, autoAlpha: 0, stagger: .15, duration: .4 }, 1.1);
  tunnel("forest", 0, t2, 2.7);

  // 3. The viaduct at dawn: the camera rises and pulls back while the sun climbs into rays.
  const d = v("viaduct");
  d.options.grade!.exposure = 0;
  d.light.x = .9; d.light.y = .3;
  const metres = { m: 0 }, metresEl = document.querySelector<HTMLElement>(".on-metres")!;
  const t3 = pin(".on-viaduct", 3);
  t3.fromTo(d.cam, { zoom: 1.6, cx: .55, cy: .62, y: -1.2 }, { zoom: 1, y: .6, duration: 3, ease: "power1.inOut" }, 0)
    .to(d.options.rays!, { strength: 1.1, duration: 2.6 }, .2)
    .fromTo(d.light, { y: .55 }, { y: .22, duration: 2.6 }, .2)
    .to(metres, { m: 90, duration: 2, onUpdate: () => { metresEl.textContent = String(Math.round(metres.m)); } }, .3)
    .from(".on-viaduct .on-copy > *", { y: 40, autoAlpha: 0, stagger: .12, duration: .5 }, .4);
  tunnel("viaduct", 0, t3, 2.6);

  // 4. Arrival: out of the last tunnel into the morning, the camera eases into the station.
  const k = v("coast");
  k.options.grade!.exposure = 0;
  const t4 = pin(".on-coast", 2);
  t4.fromTo(k.cam, { zoom: 1.4, cx: .35, cy: .55, x: .8 }, { zoom: 1, x: 0, duration: 2, ease: "power2.out" }, 0)
    .from(".on-coast .on-copy > *", { y: 40, autoAlpha: 0, stagger: .12, duration: .5 }, .4);

  // Created after the pins, so their positions include the pinned distance.
  // The clock runs with the scroll through the whole journey.
  const time = { m: TIMES[0] };
  gsap.to(time, { m: TIMES[3], ease: "none", scrollTrigger: { trigger: ".on-platform", start: "top top", endTrigger: ".on-berths", end: "top 60%", scrub: true }, onUpdate: () => { clockEl.textContent = clock(time.m); } });
  document.querySelectorAll<HTMLElement>(".on-chapter").forEach((el) => {
    const i = Number(el.dataset.stop);
    gsap.timeline({ scrollTrigger: { trigger: el, start: "top 55%", end: "bottom 45%", onToggle: (self) => self.isActive && punch(i) } });
  });
  // Out of each tunnel: the next stop brightens while it scrolls up into view.
  ([["forest", ".on-forest", 1], ["viaduct", ".on-viaduct", 1], ["coast", ".on-coast", 1.02]] as const).forEach(([s, sel, to]) =>
    gsap.to(v(s).options.grade!, { exposure: to, ease: "none", scrollTrigger: { trigger: sel, start: "top 75%", end: "top top", scrub: true } }));
  gsap.fromTo(".on-shade-day", { opacity: 0 }, { opacity: 1, ease: "none", scrollTrigger: { trigger: ".on-coast", start: "top 60%", end: "top top", scrub: true } });
  gsap.from(".on-berth", { y: 60, autoAlpha: 0, stagger: .12, scrollTrigger: { trigger: ".on-berths", start: "top 80%", end: "top 30%", scrub: 1 } });
  gsap.from(".on-contact h2", { y: 80, autoAlpha: .2, scrollTrigger: { trigger: ".on-contact", start: "top 85%", end: "top 35%", scrub: 1 } });
  gsap.from(".on-ticket", { x: 60, autoAlpha: 0, duration: 1, delay: .8, ease: "power3.out" });
  gsap.from(".on-hero-copy .on-w>span", { yPercent: 110, stagger: .06, duration: 1.1, ease: "expo.out", delay: .3 });

  return () => views.forEach((x) => x.destroy());
}
