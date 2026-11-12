import { CellFrame, type AsciiScene } from "./cells";
import { Lotus } from "./lotus";
import { Aurora } from "./aurora";
import { NeonRain } from "./neon";
import { Koi } from "./koi";
import { Paint } from "./paint";
import { type Daylight, NIGHT, daylightAt } from "./daylight";

export type SceneKind = "lotus" | "aurora" | "neon" | "koi" | "paint";
const SCENES: Record<SceneKind, new (color: string, density: number, image?: string) => AsciiScene> = { lotus: Lotus, aurora: Aurora, neon: NeonRain, koi: Koi, paint: Paint };

/**
 * Living sites follow the visitor's clock: the site root gets data-daypart and
 * --night / --twilight for CSS, and every scene hears the time of day.
 * The editor previews a chosen hour through data-hour.
 */
let today: Daylight = NIGHT;
const listeners = new Set<(d: Daylight) => void>();
function living() {
  const root = document.querySelector<HTMLElement>(".pw-site");
  if (!root || root.dataset.living !== "true") return;
  const tick = () => {
    const fixed = root.dataset.hour;
    const now = new Date();
    today = daylightAt(fixed ? Number(fixed) : now.getHours() + now.getMinutes() / 60);
    root.dataset.daypart = today.part;
    root.style.setProperty("--night", today.night.toFixed(3));
    root.style.setProperty("--twilight", today.twilight.toFixed(3));
    listeners.forEach((fn) => fn(today));
  };
  tick();
  const timer = setInterval(tick, 60000);
  addEventListener("pagehide", () => clearInterval(timer), { once: true });
}

interface Settings {
  speed: number;
  density: number;
  color: string;
}
interface Controller {
  canvas: HTMLCanvasElement;
  resize: () => void;
  draw: (dt: number) => void;
  destroy: () => void;
  visible: boolean;
  time: number;
  frame: number;
}
const settings = (canvas: HTMLCanvasElement): Settings => ({
  speed: Number(canvas.dataset.speed) || 1,
  density: Number(canvas.dataset.density) || 1,
  color: canvas.dataset.color || "#90d7e9",
});
/** Every Patchwork ASCII scene shares one cell renderer and controller. */
function simulation(canvas: HTMLCanvasElement, kind: SceneKind): Controller {
  const cfg = settings(canvas);
  const Scene = SCENES[kind] ?? Lotus;
  const scene: AsciiScene = new Scene(cfg.color, cfg.density, canvas.dataset.image || undefined);
  if (scene.daylight) {
    const hear = scene.daylight.bind(scene);
    if (today !== NIGHT) hear(today);
    listeners.add(hear);
  }
  const frame = new CellFrame(canvas, scene.palette);
  frame.background = scene.background;
  let width = 0,
    height = 0;
  const paint = () => {
    frame.clear();
    scene.render(frame);
    frame.draw(scene.underlay ? (ctx) => scene.underlay!(ctx, frame) : undefined, scene.overlay ? (ctx) => scene.overlay!(ctx, frame) : undefined);
  };
  const control: Controller = {
    canvas,
    visible: true,
    time: 0,
    frame: 0,
    destroy: () => {},
    resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width < 1 || height < 1) return;
      frame.resize(width, height, cfg.density);
      frame.bloom = scene.bloom ?? 0;
      frame.gridAlpha = scene.grid ?? frame.gridAlpha;
      scene.resize(width, height, frame);
      paint();
    },
    draw(dt) {
      if (!frame.cols) return;
      const steps = Math.max(1, Math.round(dt * 30));
      for (let i = 0; i < steps; i++) scene.step((dt * cfg.speed) / steps);
      paint();
      control.time += dt * cfg.speed;
      control.frame++;
    },
  };
  const local = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    const x = ((e.clientX - r.left) * width) / (r.width || 1),
      y = ((e.clientY - r.top) * height) / (r.height || 1);
    const inside = e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom && e.pointerType !== "touch";
    return { x, y, inside };
  };
  const move = (e: PointerEvent) => {
    const p = local(e);
    scene.pointer(p.x, p.y, p.inside);
  };
  const down = (e: PointerEvent) => {
    const p = local(e);
    if (p.inside) scene.poke(p.x, p.y);
  };
  canvas.ownerDocument.addEventListener("pointermove", move, { passive: true });
  canvas.ownerDocument.addEventListener("pointerdown", down, { passive: true });
  control.destroy = () => {
    canvas.ownerDocument.removeEventListener("pointermove", move);
    canvas.ownerDocument.removeEventListener("pointerdown", down);
  };
  return control;
}

function mount() {
  living();
  const canvases = [
    ...document.querySelectorAll<HTMLCanvasElement>("canvas[data-ascii]"),
  ];
  if (!canvases.length) return;
  const controllers: Controller[] = [];
  const mq = matchMedia("(prefers-reduced-motion: reduce)");
  let raf = 0,
    last = 0,
    elapsed = 0;
  const ro = new ResizeObserver((entries) =>
    entries.forEach((entry) =>
      controllers.find((c) => c.canvas === entry.target)?.resize(),
    ),
  );
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        const c = controllers.find((c) => c.canvas === entry.target);
        if (c) c.visible = entry.isIntersecting;
      }
      schedule();
    },
    { rootMargin: "40px" },
  );
  const reduced = () =>
    mq.matches ||
    document.querySelector(".pw-site")?.getAttribute("data-reduced") === "true";
  function loop(now: number) {
    raf = 0;
    if (document.hidden || reduced()) {for(const c of controllers)c.canvas.dataset.paused='true';return;}
    const dt = Math.min((now - last) / 1000, 0.1);
    last = now;
    elapsed += dt;
    // Render at 30 fps; no work while offscreen, and no catch-up burst on resume.
    if (elapsed >= 1 / 30) {
      const step = Math.min(elapsed, 0.067);
      elapsed = 0;
      for (const c of controllers)
        if (c.visible) {
          c.draw(step);
          c.canvas.dataset.frame = String(c.frame);
        }
    }
    if (controllers.some((c) => c.visible)) raf = requestAnimationFrame(loop);
  }
  function schedule() {
    cancelAnimationFrame(raf);
    raf = 0;
    last = performance.now();
    elapsed = 0;
    for (const c of controllers)
      c.canvas.dataset.paused = String(
        document.hidden || reduced() || !c.visible,
      );
    if (!document.hidden && !reduced() && controllers.some((c) => c.visible))
      raf = requestAnimationFrame(loop);
  }
  for (const canvas of canvases) {
    try {
      const c = simulation(canvas, canvas.dataset.ascii as SceneKind);
      controllers.push(c);
      c.resize();
      canvas.dataset.ready = "true";
      canvas.closest(".pw-section")?.classList.add("pw-ascii-ready");
      ro.observe(canvas);
      io.observe(canvas);
    } catch (error) {
      console.error("ASCII background unavailable:", error);
      canvas.hidden = true;
    }
  }
  document.fonts.load('16px "Space Mono"').then(() => {
    for (const c of controllers) c.resize();
    schedule();
  });
  document.addEventListener("visibilitychange", schedule);
  mq.addEventListener("change", schedule);
  const mo = new MutationObserver(schedule);
  const root = document.querySelector(".pw-site");
  if (root)
    mo.observe(root, { attributes: true, attributeFilter: ["data-reduced", "class"] });
  const onPageHide = () => {
    cancelAnimationFrame(raf);
    ro.disconnect();
    io.disconnect();
    mo.disconnect();
    controllers.forEach((c) => c.destroy());
    document.removeEventListener("visibilitychange", schedule);
    mq.removeEventListener("change", schedule);
  };
  addEventListener("pagehide", onPageHide, { once: true });
  schedule();
  // Expose only on the recording fixture, never as an editor dependency.
  if (document.documentElement.dataset.recordAscii === "true")
    Object.assign(window, {
      patchworkAsciiCapture: {
        controllers,
        stop() {
          cancelAnimationFrame(raf);
        },
        advance(dt: number) {
          controllers.forEach((c) => c.draw(dt));
        },
      },
    });
}
if (document.readyState === "loading")
  document.addEventListener("DOMContentLoaded", mount, { once: true });
else mount();
