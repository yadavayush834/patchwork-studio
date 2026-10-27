import { World } from "../vendor/ascii-sharks/world";
import { AsciiRenderer } from "../vendor/ascii-sharks/renderer";
import {
  jellyCells,
  galaxyCells,
  terrainCells,
  hash,
  ramp,
  clamp,
  type SceneKind,
} from "./field";

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
function sculpture(canvas: HTMLCanvasElement, kind: SceneKind): Controller {
  const ctx = canvas.getContext("2d", { alpha: false });
  if (!ctx) throw new Error("Canvas 2D is not available");
  const cfg = settings(canvas);
  let width = 0,
    height = 0,
    cols = 0,
    rows = 0,
    cw = 8,
    ch = 13;
  let buffer: Float32Array, hues: Uint8Array, glyphs: string[];
  const base: Record<string, string> = {
    jellies: "#030811",
    galaxy: "#060510",
    terrain: "#080811",
  };
  const toRgb = (hex: string) =>
    [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16));
  const tint = toRgb(cfg.color);
  const warm =
    kind === "galaxy"
      ? [255, 217, 171]
      : kind === "terrain"
        ? [224, 186, 255]
        : [170, 164, 255];
  const palettes = [tint, warm].map((rgb) =>
    Array.from(
      { length: 16 },
      (_, i) =>
        `rgb(${rgb.map((v) => Math.round(v * (0.16 + i * 0.056))).join(",")})`,
    ),
  );
  const control: Controller = {
    canvas,
    visible: true,
    time: kind === "galaxy" ? 6 : 0,
    frame: 0,
    destroy: () => {},
    resize() {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      if (width < 1 || height < 1) return;
      const dpr = Math.min(devicePixelRatio || 1, 1.5);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      cw = clamp(Math.round(width / (150 * cfg.density)), 6, 11);
      ch = Math.round(cw * 1.5);
      cols = Math.ceil(width / cw);
      rows = Math.ceil(height / ch);
      buffer = new Float32Array(cols * rows);
      hues = new Uint8Array(cols * rows);
      glyphs = Array(cols * rows).fill("");
      control.draw(0);
    },
    draw(dt) {
      if (!cols) return;
      control.time += dt * cfg.speed;
      const t = control.time;
      ctx.fillStyle = base[kind];
      ctx.fillRect(0, 0, width, height);
      buffer.fill(0);
      hues.fill(0);
      glyphs.fill("");
      const cells =
        kind === "jellies"
          ? jellyCells(t, cols, rows, cfg.density)
          : kind === "galaxy"
            ? galaxyCells(t, cols, rows, cfg.density)
            : terrainCells(t, cols, rows, cfg.density);
      for (const c of cells) {
        if (c.x < 0 || c.y < 0 || c.x >= cols || c.y >= rows) continue;
        const idx = c.y * cols + c.x;
        if (c.light >= buffer[idx]) {
          buffer[idx] = c.light;
          hues[idx] = c.hue || 0;
          glyphs[idx] = c.glyph || "";
        }
      }
      ctx.font = `${Math.round(ch * 0.78)}px "Space Mono",monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      for (let bucket = 0; bucket < 32; bucket++) {
        ctx.fillStyle = palettes[bucket >> 4][bucket % 16];
        for (let i = 0; i < buffer.length; i++) {
          const light = buffer[i];
          if (
            light < 0.1 ||
            Math.floor(clamp(light) * 15) + (hues[i] ? 16 : 0) !== bucket
          )
            continue;
          ctx.fillText(
            glyphs[i] ||
              ramp[
                Math.min(ramp.length - 1, Math.floor(light * (ramp.length - 1)))
              ],
            ((i % cols) + 0.5) * cw,
            (Math.floor(i / cols) + 0.5) * ch,
          );
        }
      }
      // Restrained particulate depth, all made from literal keyboard characters.
      ctx.font = `${Math.round(ch * 0.65)}px "Space Mono",monospace`;
      for (let i = 0; i < Math.round(70 * cfg.density); i++) {
        const x = hash(i + 70) * width,
          y =
            (((hash(i + 140) * height - t * (kind === "jellies" ? 3 : 0)) %
              height) +
              height) %
            height;
        ctx.fillStyle = `rgba(${tint.join(",")},${0.12 + hash(i + 20) * 0.23})`;
        ctx.fillText(i % 9 === 0 ? "+" : ".", x, y);
      }
      control.frame++;
    },
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
          : sculpture(canvas, canvas.dataset.ascii as SceneKind);
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
