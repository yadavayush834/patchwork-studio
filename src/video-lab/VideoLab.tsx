import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  Upload,
  Play,
  Pause,
  Download,
  Plus,
  X,
  Search,
  SlidersHorizontal,
  Film,
  Check,
  RotateCcw,
} from "lucide-react";
import {
  controls,
  defaults,
  dimensions,
  families,
  parseRecipe,
  styles,
  validateTrim,
  type Settings,
} from "./catalog";
import { inspectVideo, saveFile, type VideoInfo } from "./media";
import type { ExportJob } from "./export.worker";
import "./video-lab.css";

interface Props {
  open: boolean;
  onClose: () => void;
  sections: { id: string; title: string }[];
  onAdd: (
    section: string,
    blob: Blob,
    poster: Blob,
    name: string,
  ) => Promise<void>;
}
interface Result {
  id: string;
  style: string;
  name: string;
  blob: Blob;
  poster: Blob;
  format: string;
}
const clock = (t: number) =>
  `${Math.floor(t / 60)}:${(t % 60).toFixed(1).padStart(4, "0")}`;
export default function VideoLab({ open, onClose, sections, onAdd }: Props) {
  const [file, setFile] = useState<File | null>(null),
    [info, setInfo] = useState<VideoInfo | null>(null),
    [url, setUrl] = useState("");
  const [style, setStyle] = useState("ascii"),
    [settings, setSettings] = useState<Settings>(defaults("ascii"));
  const [family, setFamily] = useState("All styles"),
    [query, setQuery] = useState(""),
    [thumbs, setThumbs] = useState<Record<string, string>>({});
  const [time, setTime] = useState(0),
    [playing, setPlaying] = useState(false),
    [compare, setCompare] = useState(false),
    [start, setStart] = useState(0),
    [end, setEnd] = useState(0);
  const [format, setFormat] = useState<"mp4" | "webm" | "gif">("mp4"),
    [resolution, setResolution] = useState(720),
    [audio, setAudio] = useState(true);
  const [selected, setSelected] = useState<string[]>([]),
    [results, setResults] = useState<Result[]>([]),
    [target, setTarget] = useState("");
  const [status, setStatus] = useState(""),
    [error, setError] = useState(""),
    [busy, setBusy] = useState(false),
    [loading, setLoading] = useState(false),
    [progress, setProgress] = useState(0),
    [jobLabel, setJobLabel] = useState(""),
    [text, setText] = useState(""),
    [thumbTime, setThumbTime] = useState(0);
  const root = useRef<HTMLDivElement>(null),
    video = useRef<HTMLVideoElement>(null),
    canvas = useRef<HTMLCanvasElement>(null),
    input = useRef<HTMLInputElement>(null),
    recipeInput = useRef<HTMLInputElement>(null);
  const worker = useRef<Worker | null>(null),
    cancelled = useRef(false),
    sourceVersion = useRef(0),
    rejectJob = useRef<((reason: Error) => void) | null>(null),
    renderRef = useRef<() => void>(() => {});
  const active = styles.find((s) => s.id === style)!;
  const knobs = controls(style);
  const visible = styles.filter(
    (s) =>
      (family === "All styles" || s.family === family) &&
      s.name.toLowerCase().includes(query.toLowerCase()),
  );

  useEffect(() => {
    if (url) return () => URL.revokeObjectURL(url);
  }, [url]);
  useEffect(
    () => () => {
      sourceVersion.current++;
      worker.current?.terminate();
    },
    [],
  );
  useEffect(() => {
    if (!target && sections.length) setTarget(sections[0].id);
  }, [sections, target]);
  useEffect(() => {
    if (!open) {
      video.current?.pause();
      setPlaying(false);
      cancel();
      return;
    }
    const previous = document.activeElement as HTMLElement | null;
    // The Lab is a sibling overlay; make the existing workbench inaccessible while open.
    const siblings = [...(root.current?.parentElement?.children || [])].filter(
      (el) => el !== root.current,
    ) as HTMLElement[];
    const previousInert = siblings.map((el) => el.inert),
      previousHidden = siblings.map((el) => el.hidden);
    siblings.forEach((el) => {
      el.inert = true;
      el.hidden = true;
    });
    const timer = setTimeout(
      () => root.current?.querySelector<HTMLButtonElement>("button")?.focus(),
      0,
    );
    const trap = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        event.stopPropagation();
        onClose();
      }
      if (event.key === "Tab") {
        const nodes = [
          ...(root.current?.querySelectorAll<HTMLElement>(
            "button:not(:disabled),input:not(:disabled),select:not(:disabled),a[href]",
          ) || []),
        ].filter((el) => el.getClientRects().length > 0);
        const first = nodes[0],
          last = nodes.at(-1);
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last?.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first?.focus();
        }
      }
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "z")
        event.stopPropagation();
    };
    document.addEventListener("keydown", trap, true);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.removeEventListener("keydown", trap, true);
      document.body.style.overflow = overflow;
      siblings.forEach((el, i) => {
        el.inert = previousInert[i];
        el.hidden = previousHidden[i];
      });
      previous?.focus();
    };
  }, [open, onClose]);

  const previewMax = useRef(854),
    previewDensity = useRef(1),
    revision = useRef(0),
    thumbnailUrls = useRef<string[]>([]);
  useEffect(() => () => thumbnailUrls.current.forEach(URL.revokeObjectURL), []);
  const renderOptions = useRef({
    style,
    settings,
    compare,
    start,
    end,
    playing,
  });
  renderOptions.current = { style, settings, compare, start, end, playing };
  useEffect(() => {
    if (!open || !url || !info) return;
    let stopped = false,
      inFlight = false,
      frame = 0,
      last = 0,
      lastUI = 0;
    const w = new Worker(new URL("./preview.worker.ts", import.meta.url), {
      type: "module",
    });
    const draw = async () => {
      const v = video.current;
      if (stopped || inFlight || !v || v.readyState < 2) return;
      inFlight = true;
      const currentRevision = revision.current;
      try {
        const image = await createImageBitmap(v);
        if (stopped) {
          image.close();
          return;
        }
        const size = dimensions(info.width, info.height, previewMax.current);
        const opts = renderOptions.current;
        if (opts.compare) {
          const c = canvas.current;
          if (c) {
            c.width = size.width;
            c.height = size.height;
            c.getContext("2d")!.drawImage(image, 0, 0, c.width, c.height);
          }
          image.close();
          inFlight = false;
          return;
        }
        w.postMessage(
          {
            image,
            ...size,
            style: opts.style,
            settings: !v.paused
              ? {
                  ...opts.settings,
                  cell: opts.settings.cell * previewDensity.current,
                }
              : opts.settings,
            time: v.currentTime,
            revision: currentRevision,
            file: opts.style === "datamosh" ? file : undefined,
          },
          [image],
        );
      } catch (e) {
        inFlight = false;
        if (!stopped) setError((e as Error).message);
      }
    };
    w.onmessage = ({ data }) => {
      inFlight = false;
      if (stopped) {
        data.image?.close();
        return;
      }
      if (data.type === "error") {
        setError(data.message);
        video.current?.pause();
        setPlaying(false);
        return;
      }
      const c = canvas.current;
      if (c && data.revision === revision.current) {
        c.width = data.image.width;
        c.height = data.image.height;
        c.getContext("2d")!.drawImage(data.image, 0, 0);
        setText(data.text);
        if (data.ms > 70) {
          previewMax.current = 480;
          previewDensity.current = Math.min(3, previewDensity.current * 1.5);
        }
      }
      data.image?.close();
      if (data.revision !== revision.current) void draw();
    };
    w.onerror = (e) => {
      inFlight = false;
      setError(e.message || "Preview worker failed. Close and reopen the Lab.");
      video.current?.pause();
      setPlaying(false);
    };
    renderRef.current = () => {
      void draw();
    };
    void draw();
    const tick = (now: number) => {
      const opts = renderOptions.current,
        v = video.current;
      if (!document.hidden && v && !v.paused && now - last > 1000 / 24) {
        last = now;
        void draw();
        if (now - lastUI > 200) {
          setTime(v.currentTime);
          lastUI = now;
        }
        if (v.currentTime >= opts.end) v.currentTime = opts.start;
      }
      frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    const visibility = () => {
      if (document.hidden) {
        video.current?.pause();
        setPlaying(false);
      }
    };
    document.addEventListener("visibilitychange", visibility);
    return () => {
      stopped = true;
      w.terminate();
      cancelAnimationFrame(frame);
      document.removeEventListener("visibilitychange", visibility);
    };
  }, [open, url, info, file]);
  useEffect(() => {
    revision.current++;
    renderRef.current();
  }, [style, settings, compare]);
  useEffect(() => {
    if (!playing) {
      revision.current++;
      renderRef.current();
    }
  }, [playing]);

  useEffect(() => {
    if (!open || !info || !url || playing) return;
    let stopped = false;
    const urls: string[] = [];
    let w: Worker | undefined;
    const timer = setTimeout(async () => {
      const v = video.current;
      if (!v || v.readyState < 2) return;
      const image = await createImageBitmap(v);
      if (stopped) {
        image.close();
        return;
      }
      w = new Worker(new URL("./preview.worker.ts", import.meta.url), {
        type: "module",
      });
      const images: Record<string, string> = {};
      w.onmessage = ({ data }) => {
        if (stopped) return;
        if (data.type === "error") {
          setError(`Style previews: ${data.message}`);
          return;
        }
        if (data.type === "thumbnail") {
          const u = URL.createObjectURL(data.blob);
          urls.push(u);
          images[data.id] = u;
        } else if (data.type === "thumbnails-done") {
          thumbnailUrls.current.forEach(URL.revokeObjectURL);
          thumbnailUrls.current = urls;
          setThumbs({ ...images });
          w?.terminate();
        }
      };
      w.onerror = (e) => {
        if (!stopped) setError(e.message || "Style preview failed.");
      };
      const size = dimensions(info.width, info.height, 160);
      w.postMessage({ image, ...size, time: v.currentTime, thumbnails: true }, [
        image,
      ]);
    }, 220);
    return () => {
      stopped = true;
      clearTimeout(timer);
      w?.terminate();
      if (thumbnailUrls.current !== urls) urls.forEach(URL.revokeObjectURL);
    };
  }, [open, info, url, thumbTime, playing]);

  async function load(next: File) {
    const version = ++sourceVersion.current;
    setLoading(true);
    setError("");
    setStatus("Reading your video…");
    try {
      const metadata = await inspectVideo(next);
      if (version !== sourceVersion.current) return;
      video.current?.pause();
      setPlaying(false);
      setFile(next);
      setInfo(metadata);
      setUrl(URL.createObjectURL(next));
      setStart(0);
      setEnd(Math.min(10, metadata.duration));
      setTime(0);
      setThumbs({});
      setResults([]);
      previewMax.current = 854;
      previewDensity.current = 1;
      setStatus("Ready. Choose a style and make it yours.");
    } catch (e) {
      if (version === sourceVersion.current) {
        setError(`Could not open video: ${(e as Error).message}`);
        setStatus("");
      }
    } finally {
      if (version === sourceVersion.current) setLoading(false);
    }
  }
  function choose(id: string) {
    setStyle(id);
    setSettings(defaults(id));
    setError("");
  }
  function seek(t: number) {
    if (video.current) {
      revision.current++;
      video.current.currentTime = t;
      setTime(t);
    }
  }
  function cancel() {
    cancelled.current = true;
    worker.current?.terminate();
    worker.current = null;
    rejectJob.current?.(
      new Error("Export cancelled. Completed clips are still available."),
    );
    rejectJob.current = null;
  }
  async function exportQueue() {
    if (!file || !info || busy) return;
    setError("");
    try {
      validateTrim(start, end, info.duration, format === "gif");
    } catch (e) {
      setError((e as Error).message);
      return;
    }
    setBusy(true);
    setProgress(0);
    cancelled.current = false;
    video.current?.pause();
    setPlaying(false);
    const queue = selected.length ? selected : [style];
    try {
      for (let i = 0; i < queue.length; i++) {
        if (cancelled.current) break;
        const id = queue[i],
          name = styles.find((s) => s.id === id)!.name;
        setJobLabel(`${i + 1}/${queue.length} · ${name}`);
        setProgress(0);
        const result = await new Promise<{ blob: Blob; poster: Blob }>(
          (resolve, reject) => {
            const w = new Worker(
              new URL("./export.worker.ts", import.meta.url),
              { type: "module" },
            );
            worker.current = w;
            rejectJob.current = reject;
            w.onmessage = ({ data }) => {
              if (data.type === "progress") setProgress(data.progress);
              else if (data.type === "error") reject(new Error(data.message));
              else if (data.type === "done") resolve(data);
            };
            w.onerror = (event) =>
              reject(new Error(event.message || "Export worker failed."));
            const job: ExportJob = {
              file,
              style: id,
              settings: id === style ? settings : defaults(id),
              start,
              end,
              format,
              resolution,
              audio,
            };
            w.postMessage(job);
          },
        );
        worker.current?.terminate();
        worker.current = null;
        rejectJob.current = null;
        if (cancelled.current) break;
        setResults((old) => [
          ...old,
          {
            ...result,
            id: crypto.randomUUID(),
            style: id,
            name: `${file.name.replace(/\.[^.]+$/, "")}-${id}`,
            format,
          },
        ]);
      }
      setStatus(
        cancelled.current ? "Export cancelled." : "Your clips are ready below.",
      );
    } catch (e) {
      setError((e as Error).message);
    } finally {
      worker.current?.terminate();
      worker.current = null;
      rejectJob.current = null;
      setBusy(false);
      setJobLabel("");
    }
  }
  async function snapshot() {
    try {
      const c = canvas.current;
      if (c)
        await new Promise<void>((resolve, reject) =>
          c.toBlob((blob) => {
            if (blob) {
              saveFile(blob, `${style}-frame.png`);
              resolve();
            } else reject(new Error("Could not save frame."));
          }, "image/png"),
        );
    } catch (e) {
      setError((e as Error).message);
    }
  }
  async function add(result: Result) {
    if (!target) return;
    setError("");
    try {
      await onAdd(target, result.blob, result.poster, result.name);
      setStatus("Clip added to your website. Return to the editor to see it.");
    } catch (e) {
      setError(`Could not add clip: ${(e as Error).message}`);
    }
  }
  const update = (key: keyof Settings, value: Settings[keyof Settings]) =>
    setSettings((old) => ({ ...old, [key]: value }));
  if (!open) return null;
  return (
    <div
      className="vl"
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label="Video Lab"
    >
      <header className="vl-header">
        <button className="vl-back" onClick={onClose}>
          <ArrowLeft size={17} /> Back to studio
        </button>
        <div className="vl-brand">
          <span>✳</span> patchwork <b>/</b> <strong>Video Lab</strong>
        </div>
        <span className="vl-private">● On your device. Entirely yours.</span>
      </header>
      <div className="vl-heading">
        <div>
          <p className="vl-eyebrow">A DIFFERENT WAY TO SEE</p>
          <h1>Same footage. New feeling.</h1>
          <p>
            Turn a little moment into characters, ink, glass, and everything
            between.
          </p>
        </div>
        <button
          className="vl-primary"
          disabled={busy || loading}
          onClick={() => input.current?.click()}
        >
          <Upload size={16} />
          {file ? "Replace video" : "Choose a video"}
        </button>
      </div>
      <input
        hidden
        ref={input}
        type="file"
        accept="video/mp4,video/webm,.mp4,.webm"
        onChange={(e) => {
          const f = e.target.files?.[0];
          if (f) void load(f);
          e.target.value = "";
        }}
      />
      <input
        hidden
        ref={recipeInput}
        type="file"
        accept=".json,application/json"
        onChange={async (e) => {
          const f = e.target.files?.[0];
          e.target.value = "";
          if (!f || !info) return;
          try {
            if (f.size > 16000) throw new Error("Recipe is too large.");
            const r = parseRecipe(JSON.parse(await f.text()), info.duration);
            setStyle(r.style);
            setSettings(r.settings);
            setStart(r.start);
            setEnd(r.end);
            seek(r.start);
            setStatus("Recipe restored.");
          } catch (e) {
            setError((e as Error).message);
          }
        }}
      />
      {error && (
        <div className="vl-message vl-error" role="alert">
          {error}
          <button aria-label="Dismiss error" onClick={() => setError("")}>
            <X size={16} />
          </button>
        </div>
      )}
      <div className="vl-workspace">
        <aside className="vl-library">
          <div className="vl-panel-title">
            <strong>The style cabinet</strong>
            <span>{styles.length} styles</span>
          </div>
          <label className="vl-search">
            <Search size={15} />
            <input
              aria-label="Search styles"
              placeholder="Find a look…"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </label>
          <select
            aria-label="Style family"
            value={family}
            onChange={(e) => setFamily(e.target.value)}
          >
            <option>All styles</option>
            {families.map((f) => (
              <option key={f}>{f}</option>
            ))}
          </select>
          <div className="vl-style-list">
            {visible.map((item) => (
              <div
                key={item.id}
                className={`vl-style ${style === item.id ? "is-active" : ""}`}
              >
                <button
                  disabled={busy}
                  onClick={() => choose(item.id)}
                  aria-pressed={style === item.id}
                >
                  {thumbs[item.id] ? (
                    <img src={thumbs[item.id]} alt="" />
                  ) : (
                    <span className="vl-thumb-placeholder">
                      {item.family === "ASCII & Text" ? "aA@" : "◒"}
                    </span>
                  )}
                  <span>
                    <strong>{item.name}</strong>
                    <small>{item.family}</small>
                  </span>
                </button>
                <button
                  className="vl-queue-toggle"
                  disabled={busy}
                  aria-label={`${selected.includes(item.id) ? "Unqueue" : "Queue"} ${item.name}`}
                  aria-pressed={selected.includes(item.id)}
                  onClick={() =>
                    setSelected((old) =>
                      old.includes(item.id)
                        ? old.filter((id) => id !== item.id)
                        : [...old, item.id],
                    )
                  }
                >
                  {selected.includes(item.id) ? (
                    <Check size={14} />
                  ) : (
                    <Plus size={14} />
                  )}
                </button>
              </div>
            ))}
            {!visible.length && (
              <p className="vl-muted">
                No styles match. Try another name or family.
              </p>
            )}
          </div>
          <p className="vl-library-note">
            All 10 families available. Original procedural effects, free to use.{" "}
            <a
              href="/licenses/mediabunny-MPL-2.0.txt"
              target="_blank"
              rel="noreferrer"
            >
              Media engine license
            </a>{" "}
            ·{" "}
            <a href="/licenses/gifenc-MIT.txt" target="_blank" rel="noreferrer">
              GIF encoder license
            </a>
          </p>
        </aside>
        <main className="vl-center">
          <div className="vl-preview-title">
            <span>
              <Film size={15} />
              {active.name}
            </span>
            <button
              disabled={!file || busy}
              aria-pressed={compare}
              onClick={() => setCompare(!compare)}
            >
              {compare ? "Show transformed" : "Compare original"}
            </button>
          </div>
          <div
            className={`vl-stage ${!file ? "is-empty" : ""}`}
            onDragOver={(e) => e.preventDefault()}
            onDrop={(e) => {
              e.preventDefault();
              if (!busy && !loading && e.dataTransfer.files[0])
                void load(e.dataTransfer.files[0]);
            }}
          >
            {url ? (
              <>
                <video
                  ref={video}
                  src={url}
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={() => {
                    if (video.current)
                      video.current.currentTime = Math.min(
                        time,
                        info?.duration || 0,
                      );
                  }}
                  onLoadedData={() => {
                    renderRef.current();
                    setThumbTime((t) => t + 1);
                  }}
                  onSeeked={() => {
                    revision.current++;
                    renderRef.current();
                    if (!playing) setThumbTime((t) => t + 1);
                  }}
                  onEnded={() => {
                    setPlaying(false);
                    seek(start);
                  }}
                  onError={() => {
                    setError(
                      "Browser playback failed. Try another MP4 or WebM codec.",
                    );
                    setPlaying(false);
                  }}
                />
                <canvas
                  ref={canvas}
                  aria-label={`${active.name} video preview`}
                />
                <span className="vl-preview-badge">
                  {compare ? "ORIGINAL" : "TRANSFORMED"} · {clock(time)}
                </span>
              </>
            ) : (
              <div className="vl-empty">
                <div className="vl-film-art" aria-hidden="true">
                  <span>· : + * #</span>
                  <span>░ ▒ ▓ █ ▓ ▒ ░</span>
                  <span>⠿ ⠷ ⠟ ⠯ ⠻ ⠽</span>
                </div>
                <h2>Bring your own little moment.</h2>
                <p>
                  Drop an MP4 or WebM here.
                  <br />
                  Your video stays on this device.
                </p>
                <button
                  className="vl-primary"
                  disabled={loading}
                  onClick={() => input.current?.click()}
                >
                  Choose a video <Upload size={15} />
                </button>
                <button
                  className="vl-link"
                  disabled={loading}
                  onClick={async () => {
                    try {
                      const blob = await (
                        await fetch("/assets/backgrounds/pixel-4.webm")
                      ).blob();
                      void load(
                        new File([blob], "patchwork-sample.webm", {
                          type: "video/webm",
                        }),
                      );
                    } catch (e) {
                      setError((e as Error).message);
                    }
                  }}
                >
                  Or try a Patchwork sample →
                </button>
                <small>Up to 250 MB · export segments up to 60 seconds</small>
              </div>
            )}
          </div>
          <div className="vl-transport">
            <button
              aria-label={playing ? "Pause video" : "Play video"}
              disabled={!file || busy}
              onClick={async () => {
                const v = video.current;
                if (!v) return;
                if (playing) {
                  v.pause();
                  setPlaying(false);
                } else {
                  if (v.currentTime < start || v.currentTime >= end)
                    v.currentTime = start;
                  try {
                    await v.play();
                    setPlaying(true);
                  } catch (e) {
                    setError((e as Error).message);
                  }
                }
              }}
            >
              {playing ? <Pause size={18} /> : <Play size={18} />}
            </button>
            <input
              aria-label="Video position"
              type="range"
              min="0"
              max={info?.duration || 1}
              step="0.01"
              value={time}
              disabled={!file || busy}
              onChange={(e) => seek(+e.target.value)}
            />
            <span>
              {clock(time)} / {clock(info?.duration || 0)}
            </span>
          </div>
          {playing && (
            <p className="vl-muted">
              Playback adapts fine detail to your device. Pause to see full
              detail; exports keep your settings.
            </p>
          )}
          {info && (
            <div className="vl-source">
              <span title={file?.name}>{file?.name}</span>
              <span>
                {info.width} × {info.height} ·{" "}
                {info.audio ? "With audio" : "Silent video"}
              </span>
            </div>
          )}
          <div className="vl-trim">
            <div>
              <strong>Keep the good part</strong>
              <small>Select the segment to export.</small>
            </div>
            <label>
              From{" "}
              <input
                aria-label="Trim start"
                type="number"
                step="0.1"
                min="0"
                max={info?.duration || 0}
                value={start}
                disabled={!file || busy}
                onChange={(e) => {
                  setStart(+e.target.value);
                  seek(
                    Math.min(info?.duration || 0, Math.max(0, +e.target.value)),
                  );
                }}
              />
            </label>
            <label>
              To{" "}
              <input
                aria-label="Trim end"
                type="number"
                step="0.1"
                min="0"
                max={info?.duration || 0}
                value={end}
                disabled={!file || busy}
                onChange={(e) => setEnd(+e.target.value)}
              />
            </label>
            <span>{Math.max(0, end - start).toFixed(1)}s</span>
          </div>
          <div className="vl-status" role="status">
            {loading
              ? "Reading your video…"
              : busy
                ? `Rendering ${jobLabel} · ${Math.round(progress * 100)}%`
                : status || "Choose a video to begin."}
            {busy && <progress max="1" value={progress} />}
          </div>
          {results.length > 0 && (
            <section className="vl-results">
              <div className="vl-panel-title">
                <strong>Your transformed clips</strong>
                <button disabled={busy} onClick={() => setResults([])}>
                  Clear results
                </button>
              </div>
              {sections.length > 0 && (
                <label className="vl-target">
                  Add clips to{" "}
                  <select
                    aria-label="Website section"
                    value={target}
                    onChange={(e) => setTarget(e.target.value)}
                  >
                    {sections.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.title || "Untitled section"}
                      </option>
                    ))}
                  </select>
                </label>
              )}
              {results.map((result) => (
                <ResultCard
                  key={result.id}
                  result={result}
                  canAdd={!!sections.length && result.format !== "gif"}
                  onAdd={() => add(result)}
                />
              ))}
            </section>
          )}
        </main>
        <aside className="vl-settings">
          <div className="vl-panel-title">
            <strong>
              <SlidersHorizontal size={15} /> Make it yours
            </strong>
            <button
              disabled={busy}
              aria-label="Reset style settings"
              onClick={() => setSettings(defaults(style))}
            >
              <RotateCcw size={15} />
            </button>
          </div>
          <p className="vl-setting-name">{active.name}</p>
          <fieldset disabled={busy}>
            {knobs.amount && (
              <label>
                Intensity <span>{Math.round(settings.amount * 100)}%</span>
                <input
                  aria-label="Effect intensity"
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={settings.amount}
                  onChange={(e) => update("amount", +e.target.value)}
                />
              </label>
            )}
            {knobs.cell && (
              <label>
                Detail / cell size <span>{settings.cell}</span>
                <input
                  aria-label="Cell size"
                  type="range"
                  min="4"
                  max="40"
                  step="1"
                  value={settings.cell}
                  onChange={(e) => update("cell", +e.target.value)}
                />
              </label>
            )}
            {knobs.ink && (
              <div className="vl-colors">
                <label>
                  Ink
                  <input
                    aria-label="Ink color"
                    type="color"
                    disabled={settings.color && knobs.color}
                    title={
                      settings.color && knobs.color
                        ? "Turn off source colors to choose an ink color."
                        : "Ink color"
                    }
                    value={settings.foreground}
                    onChange={(e) => update("foreground", e.target.value)}
                  />
                </label>
                <label>
                  Paper
                  <input
                    aria-label="Paper color"
                    type="color"
                    value={settings.background}
                    onChange={(e) => update("background", e.target.value)}
                  />
                </label>
              </div>
            )}
            {knobs.color && (
              <label className="vl-check">
                <input
                  type="checkbox"
                  checked={settings.color}
                  onChange={(e) => update("color", e.target.checked)}
                />{" "}
                Use source colors
              </label>
            )}
            {knobs.seed && (
              <label>
                Pattern seed
                <input
                  aria-label="Pattern seed"
                  type="number"
                  min="0"
                  max="9999"
                  step="1"
                  value={settings.seed}
                  onChange={(e) =>
                    update(
                      "seed",
                      Math.max(0, Math.min(9999, Math.round(+e.target.value))),
                    )
                  }
                />
              </label>
            )}
          </fieldset>
          {[
            "datamosh",
            "forensics",
            "oil",
            "watercolor",
            "chrome",
            "molten",
            "marble",
          ].includes(style) && (
            <p className="vl-muted">
              {style === "forensics"
                ? "An artistic error-level look, not tampering detection."
                : style === "datamosh"
                  ? "Temporal block smears blend frames from 0.2 seconds earlier; no file corruption is applied."
                  : "A procedural material interpretation of your footage."}
            </p>
          )}
          <div className="vl-section-heading">Take it with you</div>
          <fieldset disabled={busy || !file}>
            <label>
              Format
              <select
                aria-label="Export format"
                value={format}
                onChange={(e) => setFormat(e.target.value as typeof format)}
              >
                <option value="mp4">MP4 · H.264</option>
                <option value="webm">WebM · VP9 / VP8</option>
                <option value="gif">GIF · silent animation</option>
              </select>
            </label>
            <label>
              Resolution
              <select
                aria-label="Export resolution"
                value={resolution}
                disabled={format === "gif"}
                onChange={(e) => setResolution(+e.target.value)}
              >
                <option value="480">480p · smaller file</option>
                <option value="720">720p · balanced</option>
                <option value="1080">1080p · more detail</option>
              </select>
            </label>
            <label className="vl-check">
              <input
                type="checkbox"
                checked={audio}
                disabled={format === "gif" || !info?.audio}
                onChange={(e) => setAudio(e.target.checked)}
              />{" "}
              Keep source audio
            </label>
          </fieldset>
          <p className="vl-muted">
            {format === "gif"
              ? "GIF: 480px wide, 12 fps, up to 10 seconds."
              : "24 fps · aspect ratio preserved · no upscaling. Available codecs are checked before rendering."}
          </p>
          <button
            className="vl-primary vl-export"
            disabled={!file || busy || loading}
            onClick={() => void exportQueue()}
          >
            <Download size={16} />
            {selected.length
              ? `Render ${selected.length} selected styles`
              : "Render this style"}
          </button>
          {selected.length > 0 && (
            <button
              className="vl-link"
              disabled={busy}
              onClick={() => setSelected([])}
            >
              Clear selection · other styles use their defaults
            </button>
          )}
          {busy && (
            <button className="vl-cancel" onClick={cancel}>
              Cancel export
            </button>
          )}
          <div className="vl-frame-actions">
            <button disabled={!file || busy} onClick={() => void snapshot()}>
              Save frame PNG
            </button>
            {active.text && (
              <>
                <button
                  disabled={!text || busy}
                  onClick={() =>
                    saveFile(
                      new Blob([text], { type: "text/plain;charset=utf-8" }),
                      `${style}.txt`,
                    )
                  }
                >
                  Save text frame
                </button>
                <button
                  disabled={!text || busy}
                  onClick={async () => {
                    try {
                      await navigator.clipboard.writeText(text);
                      setStatus("Text frame copied.");
                    } catch {
                      setError(
                        "Clipboard access unavailable. Use Save text frame.",
                      );
                    }
                  }}
                >
                  Copy text frame
                </button>
              </>
            )}
          </div>
          <div className="vl-section-heading">Keep your recipe</div>
          <p className="vl-muted">
            Save the settings. Reselect the same video when you come back.
          </p>
          <div className="vl-frame-actions">
            <button
              disabled={!file || busy}
              onClick={() =>
                saveFile(
                  new Blob(
                    [
                      JSON.stringify(
                        { version: 1, style, settings, start, end },
                        null,
                        2,
                      ),
                    ],
                    { type: "application/json" },
                  ),
                  "patchwork-video-recipe.json",
                )
              }
            >
              Save recipe
            </button>
            <button
              disabled={!file || busy}
              onClick={() => recipeInput.current?.click()}
            >
              Load recipe
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
}
function ResultCard({
  result,
  canAdd,
  onAdd,
}: {
  result: Result;
  canAdd: boolean;
  onAdd: () => Promise<void>;
}) {
  const [url, setUrl] = useState(""),
    [poster, setPoster] = useState(""),
    [adding, setAdding] = useState(false);
  useEffect(() => {
    const u = URL.createObjectURL(result.blob),
      p = URL.createObjectURL(result.poster);
    setUrl(u);
    setPoster(p);
    return () => {
      URL.revokeObjectURL(u);
      URL.revokeObjectURL(p);
    };
  }, [result]);
  return (
    <article className="vl-result">
      {result.format === "gif" ? (
        <img
          src={url || undefined}
          alt={`${result.style} rendered animation`}
        />
      ) : (
        <video
          src={url || undefined}
          poster={poster || undefined}
          controls
          preload="metadata"
        />
      )}
      <div>
        <strong>{styles.find((s) => s.id === result.style)?.name}</strong>
        <small>
          {result.format.toUpperCase()} ·{" "}
          {(result.blob.size / 1024 / 1024).toFixed(1)} MB
        </small>
        <button
          onClick={() =>
            saveFile(result.blob, `${result.name}.${result.format}`)
          }
        >
          <Download size={14} /> Download
        </button>
        {canAdd && (
          <button
            disabled={adding}
            onClick={async () => {
              setAdding(true);
              try {
                await onAdd();
              } finally {
                setAdding(false);
              }
            }}
          >
            <Plus size={14} /> Add to website
          </button>
        )}
      </div>
    </article>
  );
}
