import { World } from "../vendor/ascii-sharks/world";
import { AsciiRenderer } from "../vendor/ascii-sharks/renderer";
import { CellFrame, type AsciiScene } from "./cells";
import { Starlings } from "./starlings";
import { Fireflies } from "./fireflies";
import { Incense } from "./incense";

export type SceneKind = "starlings" | "fireflies" | "incense";

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
function ocean(canvas: HTMLCanvasElement): Controller {
  const cfg = settings(canvas);
  const world = new World(
    [
      { kind: "hammerhead", size: 1 },
      { kind: "mako", size: 0.77 },
      { kind: "thresher", size: 0.82 },
    ],
    Math.round(115 * cfg.density),
  );
  const renderer = new AsciiRenderer(canvas);
  renderer.setFontFamily('"Space Mono", monospace');
  renderer.setAccent(cfg.color);
  let width = 0,
    height = 0;
  const control: Controller = {
    canvas,
    visible: true,
    time: 0,
    frame: 0,
    destroy: () => {},
    resize() {
      const rect = canvas.getBoundingClientRect();
      if (!rect.width || !rect.height) return;
      // CSS-scaled editor frames report local CSS pixels here, keeping exported framing consistent.
      width = canvas.clientWidth || rect.width;
      height = canvas.clientHeight || rect.height;
      renderer.resize(width, height, Math.min(devicePixelRatio || 1, 1.5));
      world.resize(width, height, renderer.cellWidth, renderer.cellHeight);
      if (control.time === 0) {
        for (let i = 0; i < 120; i++) world.step(1 / 60);
        control.time = 2;
      }
      renderer.render(world, 1 / 30);
    },
    draw(dt) {
      const steps = Math.max(1, Math.round(dt * 60));
      for (let i = 0; i < steps; i++) world.step((dt * cfg.speed) / steps);
      renderer.render(world, dt);
      control.time += dt * cfg.speed;
      control.frame++;
    },
  };
  const pointer = (e: PointerEvent) => {
    const r = canvas.getBoundingClientRect();
    world.pointer = {
      x: ((e.clientX - r.left) * width) / r.width,
      y: ((e.clientY - r.top) * height) / r.height,
      active:
        e.clientX >= r.left &&
        e.clientX <= r.right &&
        e.clientY >= r.top &&
        e.clientY <= r.bottom &&
        e.pointerType !== "touch",
    };
  };
  const splash = (e: PointerEvent) => {
    pointer(e);
    if (world.pointer.active) world.splash(world.pointer.x, world.pointer.y);
  };
  canvas.ownerDocument.addEventListener("pointermove", pointer, {
    passive: true,
  });
  canvas.ownerDocument.addEventListener("pointerdown", splash, {
    passive: true,
  });
  control.destroy = () => {
    canvas.ownerDocument.removeEventListener("pointermove", pointer);
    canvas.ownerDocument.removeEventListener("pointerdown", splash);
  };
  return control;
}
/** The three original Patchwork simulations share one cell renderer and controller. */
function simulation(canvas: HTMLCanvasElement, kind: SceneKind): Controller {
  const cfg = settings(canvas);
  const scene: AsciiScene =
    kind === "starlings"
      ? new Starlings(cfg.color, cfg.density)
      : kind === "fireflies"
        ? new Fireflies(cfg.color, cfg.density)
        : new Incense(cfg.color, cfg.density);
  const frame = new CellFrame(canvas, scene.palette);
  frame.background = scene.background;
  let width = 0,
    height = 0;
  const paint = () => {
    frame.clear();
    scene.render(frame);
    frame.draw(scene.underlay ? (ctx) => scene.underlay!(ctx, frame) : undefined);
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
      const c =
        canvas.dataset.ascii === "sharks"
          ? ocean(canvas)
          : simulation(canvas, canvas.dataset.ascii as SceneKind);
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
