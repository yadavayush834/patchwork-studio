import { useCallback, useEffect, useRef, useState } from "react";
import {
  X,
  Brush,
  Sparkles,
  Eraser,
  Undo2,
  ImagePlus,
  Moon,
  Star,
  Mountain,
  Square,
  Wand2,
  Check,
} from "lucide-react";
import { CellFrame } from "./ascii/cells";
import { Paint, paintStarter } from "./ascii/paint";
import { rand } from "./ascii/kit";
import "./paint-studio.css";

/**
 * Paint in light: a small easel next to a live ASCII preview of the same
 * picture. Bright paint becomes characters, black stays empty, so glow on a
 * dark canvas reads best. Saves a PNG that the "Your painting" scene animates.
 */
const W = 640,
  H = 360,
  UNDO = 24;
const SWATCHES = [
  "#fff6e8",
  "#ffd08a",
  "#ff9a5c",
  "#ff5f8f",
  "#d77bff",
  "#7f8cff",
  "#5fd4ff",
  "#6dffb0",
  "#e8ff6a",
];
type Tool = "brush" | "glow" | "dark";
/** Ready-made pictures to start from: original generated artwork, see public/assets/paint/artwork.json. */
export const PAINT_STARTERS = [
  { id: "jellyfish", name: "Jellyfish" },
  { id: "lanterns", name: "Lantern canal" },
  { id: "blossom", name: "Night blossom" },
  { id: "moon", name: "Desert moon" },
  { id: "greenhouse", name: "Greenhouse" },
].map((s) => ({ ...s, src: `/assets/paint/${s.id}.webp` }));
interface Props {
  /** URL of the current painting, if this section already has one. */
  initial?: string;
  accent: string;
  onClose: () => void;
  onSave: (png: Blob) => Promise<void>;
}

export default function PaintStudio({ initial, accent, onClose, onSave }: Props) {
  const easel = useRef<HTMLCanvasElement>(null),
    live = useRef<HTMLCanvasElement>(null),
    photo = useRef<HTMLInputElement>(null),
    scene = useRef<Paint | null>(null),
    undo = useRef<ImageData[]>([]),
    last = useRef<{ x: number; y: number } | null>(null),
    lastRefresh = useRef(0);
  const [tool, setTool] = useState<Tool>("glow"),
    [size, setSize] = useState(22),
    [color, setColor] = useState("#ffd08a"),
    [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [, setUndoCount] = useState(0);
  const ctx = () => easel.current?.getContext("2d", { willReadFrequently: true }) ?? null;
  /** Tell the live preview the painting changed (throttled while a stroke is moving). */
  const refresh = useCallback((force = false) => {
    const now = performance.now();
    if (!force && now - lastRefresh.current < 90) return;
    lastRefresh.current = now;
    scene.current?.refresh();
  }, []);
  const remember = () => {
    const g = ctx();
    if (!g) return;
    undo.current = [...undo.current.slice(-(UNDO - 1)), g.getImageData(0, 0, W, H)];
    setUndoCount(undo.current.length);
  };
  const stepBack = useCallback(() => {
    const g = ctx(),
      snap = undo.current.pop();
    if (!g || !snap) return;
    g.putImageData(snap, 0, 0);
    setUndoCount(undo.current.length);
    refresh(true);
  }, [refresh]);
  const cover = (img: CanvasImageSource, w: number, h: number) => {
    const g = ctx();
    if (!g) return;
    const k = Math.max(W / w, H / h);
    g.save();
    g.globalCompositeOperation = "source-over";
    g.fillStyle = "#000";
    g.fillRect(0, 0, W, H);
    g.drawImage(img, (W - w * k) / 2, (H - h * k) / 2, w * k, h * k);
    g.restore();
    refresh(true);
  };

  // The easel starts with the section's painting, or the moonlit starter.
  useEffect(() => {
    const g = ctx();
    if (!g) return;
    paintStarter(g, W, H, accent);
    if (initial) {
      const img = new Image();
      img.onload = () => cover(img, img.naturalWidth, img.naturalHeight);
      img.src = initial;
    }
    refresh(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // The live ASCII preview runs the real scene, fed straight from the easel.
  useEffect(() => {
    const canvas = live.current,
      source = easel.current;
    if (!canvas || !source) return;
    const s = new Paint(accent, 1, source);
    scene.current = s;
    const frame = new CellFrame(canvas, s.palette);
    frame.background = s.background;
    const fit = () => {
      const w = canvas.clientWidth,
        h = canvas.clientHeight;
      if (w < 1 || h < 1) return;
      frame.resize(w, h, 1);
      frame.bloom = s.bloom;
      frame.gridAlpha = 0;
      s.resize(w, h, frame);
    };
    const paint = () => {
      frame.clear();
      s.render(frame);
      frame.draw((c) => s.underlay(c));
    };
    fit();
    const ro = new ResizeObserver(fit);
    ro.observe(canvas);
    const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf = 0,
      prev = performance.now();
    const loop = (now: number) => {
      const dt = Math.min(0.1, (now - prev) / 1000);
      if (dt >= 1 / 30 || still) {
        prev = now;
        if (!still) s.step(dt);
        paint();
      }
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    const local = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };
    const move = (e: PointerEvent) => {
      const p = local(e);
      s.pointer(p.x, p.y, true);
    };
    const leave = () => s.pointer(-99, -99, false);
    const down = (e: PointerEvent) => {
      const p = local(e);
      s.poke(p.x, p.y);
    };
    canvas.addEventListener("pointermove", move);
    canvas.addEventListener("pointerleave", leave);
    canvas.addEventListener("pointerdown", down);
    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      canvas.removeEventListener("pointermove", move);
      canvas.removeEventListener("pointerleave", leave);
      canvas.removeEventListener("pointerdown", down);
      scene.current = null;
    };
  }, [accent]);

  useEffect(() => {
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "z") {
        e.preventDefault();
        stepBack();
      }
    };
    document.addEventListener("keydown", key);
    return () => document.removeEventListener("keydown", key);
  }, [onClose, stepBack]);

  /** One dab of the current tool; strokes are dabs along the path. */
  const dab = (g: CanvasRenderingContext2D, x: number, y: number) => {
    if (tool === "glow") {
      const r = size * 1.7,
        gr = g.createRadialGradient(x, y, 0, x, y, r);
      gr.addColorStop(0, color + "66");
      gr.addColorStop(0.35, color + "26");
      gr.addColorStop(1, color + "00");
      g.globalCompositeOperation = "lighter";
      g.fillStyle = gr;
      g.fillRect(x - r, y - r, r * 2, r * 2);
      return;
    }
    g.globalCompositeOperation = "source-over";
    g.fillStyle = tool === "dark" ? "#000" : color;
    g.beginPath();
    g.arc(x, y, size / 2, 0, Math.PI * 2);
    g.fill();
  };
  const at = (e: React.PointerEvent<HTMLCanvasElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    return { x: ((e.clientX - r.left) / r.width) * W, y: ((e.clientY - r.top) / r.height) * H };
  };
  const stroke = (to: { x: number; y: number }) => {
    const g = ctx(),
      from = last.current ?? to;
    if (!g) return;
    const d = Math.hypot(to.x - from.x, to.y - from.y),
      gap = Math.max(1, size * (tool === "glow" ? 0.35 : 0.25)),
      n = Math.max(1, Math.ceil(d / gap));
    for (let i = 1; i <= n; i++) dab(g, from.x + ((to.x - from.x) * i) / n, from.y + ((to.y - from.y) * i) / n);
    last.current = to;
    refresh();
  };

  const stamp = (kind: "moon" | "stars" | "hills" | "black" | "starter") => {
    const g = ctx();
    if (!g) return;
    remember();
    g.save();
    g.globalCompositeOperation = "source-over";
    const seed = performance.now() % 1000;
    if (kind === "black") {
      g.fillStyle = "#000";
      g.fillRect(0, 0, W, H);
    } else if (kind === "starter") paintStarter(g, W, H, accent);
    else if (kind === "moon") {
      const x = W * (0.2 + rand(seed) * 0.6),
        y = H * (0.18 + rand(seed + 1) * 0.25),
        r = 26 + rand(seed + 2) * 18;
      const halo = g.createRadialGradient(x, y, r * 0.5, x, y, r * 4);
      halo.addColorStop(0, color + "88");
      halo.addColorStop(1, color + "00");
      g.globalCompositeOperation = "lighter";
      g.fillStyle = halo;
      g.fillRect(0, 0, W, H);
      g.globalCompositeOperation = "source-over";
      g.fillStyle = "#fffaf0";
      g.beginPath();
      g.arc(x, y, r, 0, Math.PI * 2);
      g.fill();
    } else if (kind === "stars") {
      for (let i = 0; i < 70; i++) {
        const x = rand(seed + i * 3.1) * W,
          y = rand(seed + i * 7.7) * H * 0.7,
          s = 1 + rand(seed + i * 1.9) * 2.4;
        g.fillStyle = i % 9 === 0 ? color : "#fff8ec";
        g.globalAlpha = 0.5 + rand(seed + i) * 0.5;
        g.fillRect(x, y, s, s);
      }
    } else {
      const base = 0.62 + rand(seed) * 0.12,
        f = 0.01 + rand(seed + 1) * 0.015;
      g.beginPath();
      g.moveTo(0, H);
      for (let x = 0; x <= W; x += 4)
        g.lineTo(x, H * base - Math.sin(x * f + seed) * H * 0.07 - Math.sin(x * f * 2.6 + seed * 2) * H * 0.025);
      g.lineTo(W, H);
      g.closePath();
      g.fillStyle = "#08040e";
      g.fill();
      g.strokeStyle = color;
      g.lineWidth = 2.5;
      g.stroke();
    }
    g.restore();
    refresh(true);
  };

  const loadPhoto = (file: File) => {
    setError("");
    if (!["image/png", "image/jpeg", "image/webp", "image/gif"].includes(file.type))
      return setError("Choose a PNG, JPEG, WebP, or GIF picture.");
    if (file.size > 10 * 1024 * 1024) return setError("Choose a picture smaller than 10 MB.");
    const url = URL.createObjectURL(file),
      img = new Image();
    img.onload = () => {
      remember();
      cover(img, img.naturalWidth, img.naturalHeight);
      URL.revokeObjectURL(url);
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      setError("This picture could not be read. Try another file.");
    };
    img.src = url;
  };

  const fromPicture = (src: string) => {
    setError("");
    const img = new Image();
    img.onload = () => {
      remember();
      cover(img, img.naturalWidth, img.naturalHeight);
    };
    img.onerror = () => setError("That picture could not be loaded.");
    img.src = src;
  };
  const save = async () => {
    const c = easel.current;
    if (!c) return;
    setBusy(true);
    setError("");
    try {
      const blob = await new Promise<Blob | null>((r) => c.toBlob(r, "image/png"));
      if (!blob) throw new Error("The painting could not be saved.");
      await onSave(blob);
    } catch (e) {
      setError((e as Error).message);
      setBusy(false);
    }
  };

  const tools: [Tool, string, typeof Brush, string][] = [
    ["glow", "Glow", Sparkles, "Soft light that builds up"],
    ["brush", "Brush", Brush, "Solid colour"],
    ["dark", "Darkness", Eraser, "Black reads as empty"],
  ];
  return (
    <div
      className="modal-backdrop ascii-gallery-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="ascii-gallery paint-studio" role="dialog" aria-modal="true" aria-labelledby="paint-title">
        <header>
          <span className="ascii-gallery-brand">
            <Wand2 size={14} />
            PATCHWORK / PAINT IN LIGHT
          </span>
          <button className="icon-button" aria-label="Close paint studio" onClick={onClose}>
            <X size={19} />
          </button>
        </header>
        <div className="ascii-gallery-intro">
          <div>
            <span className="eyebrow">YOUR OWN LIVING BACKGROUND</span>
            <h2 id="paint-title">Paint something. Watch it turn to light.</h2>
          </div>
          <p>
            Bright paint becomes characters; black stays empty.
            <br />
            Glow on a dark canvas looks best. Or start from a photo.
          </p>
        </div>
        <div className="ps-stage">
          <figure className="ps-pane">
            <canvas
              ref={easel}
              className="ps-easel"
              width={W}
              height={H}
              aria-label="Painting canvas"
              style={{ cursor: "crosshair" }}
              onPointerDown={(e) => {
                e.currentTarget.setPointerCapture(e.pointerId);
                remember();
                last.current = null;
                stroke(at(e));
              }}
              onPointerMove={(e) => {
                if (e.buttons & 1) stroke(at(e));
              }}
              onPointerUp={() => {
                last.current = null;
                refresh(true);
              }}
            />
            <figcaption>YOUR PAINTING</figcaption>
          </figure>
          <figure className="ps-pane ps-live">
            <canvas ref={live} aria-label="Live ASCII preview of your painting" />
            <figcaption>
              <i />
              LIVE ASCII · HOVER TO STIR, CLICK FOR A RIPPLE
            </figcaption>
          </figure>
        </div>
        <div className="ps-tools">
          <div className="ps-group" role="radiogroup" aria-label="Paint tool">
            {tools.map(([id, label, Icon, hint]) => (
              <button
                key={id}
                role="radio"
                aria-checked={tool === id}
                title={hint}
                className={tool === id ? "on" : ""}
                onClick={() => setTool(id)}
              >
                <Icon size={14} />
                {label}
              </button>
            ))}
          </div>
          <label className="ps-size">
            Size
            <input type="range" min={3} max={80} value={size} onChange={(e) => setSize(+e.target.value)} />
          </label>
          <div className="ps-swatches" role="radiogroup" aria-label="Paint colour">
            {SWATCHES.map((c) => (
              <button
                key={c}
                role="radio"
                aria-checked={color === c}
                aria-label={`Colour ${c}`}
                className={color === c ? "on" : ""}
                style={{ background: c }}
                onClick={() => setColor(c)}
              />
            ))}
            <input type="color" aria-label="Custom paint colour" value={color} onChange={(e) => setColor(e.target.value)} />
          </div>
        </div>
        <div className="ps-starters" role="group" aria-label="Start from a picture">
          <span>START FROM A PICTURE</span>
          {PAINT_STARTERS.map((p) => (
            <button key={p.id} onClick={() => fromPicture(p.src)} title={`Start from “${p.name}”`}>
              <img src={p.src} alt="" loading="lazy" />
              <b>{p.name}</b>
            </button>
          ))}
        </div>
        <div className="ps-tools ps-tools-2">
          <div className="ps-group" aria-label="Add to the painting">
            <button onClick={() => stamp("moon")}>
              <Moon size={14} />
              Moon
            </button>
            <button onClick={() => stamp("stars")}>
              <Star size={14} />
              Stars
            </button>
            <button onClick={() => stamp("hills")}>
              <Mountain size={14} />
              Hills
            </button>
          </div>
          <div className="ps-group" aria-label="Start again">
            <button onClick={() => photo.current?.click()}>
              <ImagePlus size={14} />
              Start from a photo
            </button>
            <button onClick={() => stamp("black")}>
              <Square size={14} />
              Black canvas
            </button>
            <button onClick={() => stamp("starter")}>
              <Moon size={14} />
              Moonlit starter
            </button>
          </div>
          <button className="ps-undo" onClick={stepBack} disabled={!undo.current.length}>
            <Undo2 size={14} />
            Undo
          </button>
          <input
            ref={photo}
            type="file"
            hidden
            accept="image/png,image/jpeg,image/webp,image/gif"
            onChange={(e) => {
              const f = e.target.files?.[0];
              if (f) loadPhoto(f);
              e.target.value = "";
            }}
          />
        </div>
        <footer>
          <div>
            <h3>Your painting</h3>
            <p>
              It stays live on your site: a shimmer runs through it, a beam of light sweeps across, the brightest strokes
              sparkle. Visitors can stir it with the cursor and click to send a ripple.
            </p>
            {error ? (
              <small className="ps-error" role="alert">
                {error}
              </small>
            ) : (
              <small>Saved with your project and included when you export.</small>
            )}
          </div>
          <div className="ascii-gallery-actions">
            <button className="ascii-download" onClick={onClose}>
              Cancel
            </button>
            <button className="primary" onClick={save} disabled={busy}>
              <Check size={16} />
              {busy ? "Saving…" : "Use as background"}
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
