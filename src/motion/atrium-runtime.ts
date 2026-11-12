import gsap from "gsap";
import { ATRIUM_DETAILS } from "./atrium";

/** Atrium's choreography: step back out of a painting, walk the collection, look closer, buy tickets. */
export function animateAtrium(reduced: boolean, mobile: boolean) {
  const cleanups: (() => void)[] = [];
  const on = <K extends keyof HTMLElementEventMap>(el: HTMLElement | Window, type: K, fn: (e: HTMLElementEventMap[K]) => void) => { el.addEventListener(type, fn as EventListener); cleanups.push(() => el.removeEventListener(type, fn as EventListener)); };

  /* Look closer: each number takes the camera to that part of the canvas. */
  const zoom = document.querySelector<HTMLElement>(".at-zoom")!, back = document.querySelector<HTMLButtonElement>(".at-back")!;
  const noteH = document.querySelector<HTMLElement>(".at-note-h")!, noteT = document.querySelector<HTMLElement>(".at-note-t")!;
  const spots = [...document.querySelectorAll<HTMLButtonElement>("[data-spot]")];
  const focus = (i: number | null) => {
    spots.forEach((b) => b.setAttribute("aria-pressed", String(b.dataset.spot === String(i))));
    if (i === null) {
      noteH.textContent = "Choose a number on the painting."; noteT.textContent = "Each one takes you right up to the canvas."; back.hidden = true;
      gsap.to(zoom, { scale: 1, duration: reduced ? 0 : 1.1, ease: "power3.inOut" }); zoom.classList.remove("is-zoomed");
      return;
    }
    const d = ATRIUM_DETAILS[i];
    noteH.textContent = `${String(i + 1).padStart(2, "0")} · ${d.label}`; noteT.textContent = d.note; back.hidden = false;
    zoom.classList.add("is-zoomed");
    gsap.to(zoom, { scale: 2.5, transformOrigin: `${d.x}% ${d.y}%`, duration: reduced ? 0 : 1.2, ease: "power3.inOut" });
  };
  spots.forEach((b) => on(b, "click", () => focus(Number(b.dataset.spot))));
  on(back, "click", () => focus(null));

  /* Tickets: counters and a running total. */
  const tickets = [...document.querySelectorAll<HTMLElement>(".at-ticket")], total = document.querySelector<HTMLElement>(".at-total b")!;
  const sum = () => { total.textContent = `€${tickets.reduce((s, t) => s + Number(t.dataset.price) * Number(t.querySelector("output")!.textContent), 0)}`; };
  tickets.forEach((t) => {
    const [minus, plus] = t.querySelectorAll("button"), out = t.querySelector("output")!;
    on(minus as HTMLElement, "click", () => { out.textContent = String(Math.max(0, Number(out.textContent) - 1)); sum(); });
    on(plus as HTMLElement, "click", () => { out.textContent = String(Math.min(9, Number(out.textContent) + 1)); sum(); });
  });
  sum();

  /* The loupe: a lens that shows the brushwork under the pointer at 2.6×. */
  const loupe = document.querySelector<HTMLElement>(".at-loupe")!, ZOOM = 2.6;
  document.querySelectorAll<HTMLElement>("[data-loupe]").forEach((frame) => {
    const canvas = frame.querySelector<HTMLElement>(".at-canvas")!;
    on(canvas, "pointerenter", () => { if (!mobile) { loupe.style.backgroundImage = `url("${frame.dataset.loupe}")`; loupe.classList.add("is-on"); } });
    on(canvas, "pointerleave", () => loupe.classList.remove("is-on"));
    on(canvas, "pointermove", (e) => {
      const r = canvas.getBoundingClientRect(), x = (e.clientX - r.left) / r.width, y = (e.clientY - r.top) / r.height, R = 95;
      loupe.style.transform = `translate(${e.clientX - R}px, ${e.clientY - R}px)`;
      loupe.style.backgroundSize = `${r.width * ZOOM}px ${r.height * ZOOM}px`;
      loupe.style.backgroundPosition = `${-(x * r.width * ZOOM - R)}px ${-(y * r.height * ZOOM - R)}px`;
    });
  });

  if (reduced) return () => cleanups.forEach((f) => f());

  /* 1. Inside a painting: it starts filling the screen, then steps back onto the wall. */
  const lead = document.querySelector<HTMLElement>(".at-lead")!;
  const fill = () => { const r = lead.getBoundingClientRect(), s = Number(gsap.getProperty(lead, "scale")) || 1; return Math.max(innerWidth / (r.width / s), innerHeight / (r.height / s)) * 1.16; };
  gsap.set(lead, { scale: fill() });
  const hero = gsap.timeline({ scrollTrigger: { trigger: ".at-hero", start: "top top", end: () => `+=${innerHeight * (mobile ? 1.6 : 2.4)}`, pin: true, scrub: .8, anticipatePin: 1, invalidateOnRefresh: true } });
  hero.fromTo(lead, { scale: () => fill() }, { scale: 1, duration: 2, ease: "power2.inOut" }, 0)
    .to(".at-ui", { autoAlpha: 0, duration: .5 }, .25)
    .fromTo(".at-wall", { opacity: 0 }, { opacity: 1, duration: .9 }, .6)
    .fromTo(".at-left", { xPercent: -60, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1 }, 1.1)
    .fromTo(".at-right", { xPercent: 60, autoAlpha: 0 }, { xPercent: 0, autoAlpha: 1, duration: 1 }, 1.1)
    .fromTo(".at-label", { y: 20, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: .6 }, 1.7);
  gsap.from(".at-hero-copy .at-w>span", { yPercent: 110, stagger: .06, duration: 1.2, ease: "expo.out", delay: .3 });
  gsap.from(".at-name", { autoAlpha: 0, letterSpacing: ".3em", duration: 2, ease: "expo.out" });

  /* 2. Now showing: a sideways walk; frames turn toward you as they reach the middle. */
  const track = document.querySelector<HTMLElement>(".at-track")!, works = [...track.querySelectorAll<HTMLElement>(".at-work")];
  const distance = () => Math.max(0, track.scrollWidth - innerWidth + innerWidth * .12);
  const turn = () => works.forEach((w) => {
    const r = w.getBoundingClientRect(), d = (r.left + r.width / 2 - innerWidth / 2) / innerWidth;
    gsap.set(w.querySelector(".at-frame"), { rotateY: Math.max(-28, Math.min(28, -d * 40)), scale: 1 - Math.min(.16, Math.abs(d) * .2) });
    gsap.set(w.querySelector(".at-caption"), { autoAlpha: 1 - Math.min(1, Math.abs(d) * 2.2) });
  });
  gsap.to(track, { x: () => -distance(), ease: "none", scrollTrigger: { trigger: ".at-show", start: "top top", end: () => `+=${distance()}`, pin: true, scrub: .6, invalidateOnRefresh: true, onUpdate: turn, onRefresh: turn } });
  turn();
  gsap.from(".at-show-head > *", { y: 50, autoAlpha: 0, stagger: .1, scrollTrigger: { trigger: ".at-show", start: "top 85%", end: "top 30%", scrub: 1 } });

  /* 3 & 4: gentle entrances. */
  gsap.from(".at-closer-art", { y: 80, rotate: -2, autoAlpha: 0, scrollTrigger: { trigger: ".at-closer", start: "top 85%", end: "top 35%", scrub: 1 } });
  gsap.from(".at-spot", { scale: 0, stagger: .1, ease: "back.out(2)", scrollTrigger: { trigger: ".at-closer", start: "top 45%" } });
  gsap.from(".at-visit-head > *, .at-hours > div, .at-ticket", { y: 40, autoAlpha: 0, stagger: .06, scrollTrigger: { trigger: ".at-visit", start: "top 80%", end: "top 30%", scrub: 1 } });

  return () => cleanups.forEach((f) => f());
}
