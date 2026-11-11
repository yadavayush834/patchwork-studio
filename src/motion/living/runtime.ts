import gsap from "gsap";
import { LivingArt, type Look, type Subject } from "./look";
import { butterfly } from "./butterfly";
import { meadow } from "./meadow";
import { lotus } from "./lotus";
import type { LivingId } from "./pages";

const looks: Record<LivingId, [() => Subject, Look]> = {
  halcyon: [butterfly, { cell: 5, shape: "pixel", gap: 0.06, levels: 4, saturation: 1.25, exposure: 0.9, twinkle: 0.45, bloom: [0.35, 0.4, 0.62], background: "#141414" }],
  bloomfield: [meadow, { cell: 7, shape: "pixel", gap: 0.13, levels: 7, mono: { ink: "#f2f2ee", paper: "#0b0b0b" }, contrast: 1.2, exposure: 1.05, twinkle: 0.25, bloom: [0.32, 0.4, 0.55], background: "#050505" }],
  aurelle: [lotus, { cell: 4, shape: "streak", gap: 0.1, levels: 5, smear: 0.045, rays: 0.5, saturation: 1.15, exposure: 0.85, twinkle: 0.35, bloom: [0.7, 0.6, 0.45], background: "#0a0809" }],
};

export function animateLiving(id: LivingId, reduced: boolean) {
  const host = document.querySelector<HTMLElement>(".lv-art");
  if (!host) return;
  let art: LivingArt;
  try {
    const [make, look] = looks[id];
    art = new LivingArt(host, make(), look);
  } catch {
    host.classList.add("is-fallback");
    return;
  }
  const pointer = { x: 0, y: 0, on: 0 };
  const onMove = (e: PointerEvent) => {
    const r = host.getBoundingClientRect();
    pointer.x = ((e.clientX - r.left) / r.width) * 2 - 1;
    pointer.y = ((e.clientY - r.top) / r.height) * 2 - 1;
    pointer.on = e.clientY >= r.top && e.clientY <= r.bottom && e.pointerType !== "touch" ? 1 : 0;
  };
  window.addEventListener("pointermove", onMove, { passive: true });
  const start = performance.now();
  let frame = 0, visible = true;
  // Reduced motion: one still frame, after the subject has arrived.
  const still = () => art.render(7, pointer);
  const tick = (now: number) => {
    frame = 0;
    if (!visible || document.hidden) return;
    art.render((now - start) / 1000, pointer);
    frame = requestAnimationFrame(tick);
  };
  const schedule = () => {
    if (!frame && visible && !document.hidden && !reduced) frame = requestAnimationFrame(tick);
  };
  const observer = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) schedule();
  });
  observer.observe(host);
  const onResize = () => {
    art.resize();
    if (reduced) still();
  };
  const onVisibility = () => (document.hidden ? (cancelAnimationFrame(frame), (frame = 0)) : schedule());
  window.addEventListener("resize", onResize);
  document.addEventListener("visibilitychange", onVisibility);
  if (reduced) still();
  else {
    schedule();
    gsap.from(".lv-nav", { autoAlpha: 0, y: -14, duration: 0.9, ease: "power2.out", delay: 0.2 });
    gsap.from(".lv-rise", { autoAlpha: 0, y: 34, duration: 1.3, stagger: 0.12, ease: "power3.out", delay: 0.45 });
    gsap.utils.toArray<HTMLElement>(".lv-reveal").forEach((el) =>
      gsap.from(el, { autoAlpha: 0, y: 50, duration: 1.1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 86%" } }),
    );
    gsap.from(".lv-marks .wm", { autoAlpha: 0, y: 16, stagger: 0.08, duration: 0.8, scrollTrigger: { trigger: ".lv-band", start: "top 85%" } });
  }
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    window.removeEventListener("pointermove", onMove);
    window.removeEventListener("resize", onResize);
    document.removeEventListener("visibilitychange", onVisibility);
    art.dispose();
  };
}
