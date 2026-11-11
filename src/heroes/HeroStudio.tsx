import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Check,
  Code2,
  Copy,
  Download,
  Monitor,
  Pause,
  Play,
  RotateCcw,
  Smartphone,
} from "lucide-react";
import {
  heroes,
  defaultConfig,
  readConfig,
  type HeroId,
  type HeroConfig,
} from "./catalog";
import { heroDocument, heroEmbed } from "./document";
import { exportHero, downloadHero } from "./export";
import "./studio.css";
export default function HeroStudio({ onClose }: { onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null),
    stage = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLIFrameElement>(null);
  const [selected, setSelected] = useState<HeroId | null>(() => {
    const id = new URLSearchParams(location.search).get("hero");
    return heroes.find((h) => h.id === id)?.id || null;
  });
  const [config, setConfig] = useState<HeroConfig>(() =>
      readConfig(selected || "facet"),
    ),
    [device, setDevice] = useState<"desktop" | "phone">("desktop");
  const [ready, setReady] = useState(false),
    [reload, setReload] = useState(0),
    [paused, setPaused] = useState(false),
    [notice, setNotice] = useState(""),
    [busy, setBusy] = useState(false),
    [saved, setSaved] = useState(true);
  const [bounds, setBounds] = useState({ width: 1000, height: 700 });
  const active = heroes.find((h) => h.id === selected);
  const preview = useMemo(
    () =>
      active
        ? heroDocument(active.id, defaultConfig(active.id), "/heroes/", true)
        : "",
    [active],
  );
  const closeDetail = useCallback(() => {
    setSelected(null);
    const url = new URL(location.href);
    url.searchParams.delete("hero");
    history.replaceState(history.state, "", url);
  }, []);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const previous = document.activeElement as HTMLElement | null;
    const siblings = [...node.parentElement!.children].filter(
      (n) => n !== node,
    ) as HTMLElement[];
    const states = siblings.map((n) => ({
      inert: n.inert,
      hidden: n.hidden,
      display: n.style.display,
    }));
    siblings.forEach((n) => {
      n.inert = true;
      n.hidden = true;
      n.style.display = "none";
    });
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    node.querySelector("button")?.focus();
    return () => {
      siblings.forEach((n, i) => {
        n.inert = states[i].inert;
        n.hidden = states[i].hidden;
        n.style.display = states[i].display;
      });
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  useEffect(() => {
    const key = (event: KeyboardEvent) => {
      if (event.key === "Escape" && !event.defaultPrevented) {
        selected ? closeDetail() : onClose();
      }
    };
    addEventListener("keydown", key);
    return () => removeEventListener("keydown", key);
  }, [selected, closeDetail, onClose]);
  useEffect(() => {
    if (!stage.current) return;
    const observer = new ResizeObserver(([e]) =>
      setBounds({
        width: e.contentRect.width - 28,
        height: e.contentRect.height - 28,
      }),
    );
    observer.observe(stage.current);
    return () => observer.disconnect();
  }, [selected]);
  useEffect(() => {
    setReady(false);
    const timeout = setTimeout(
      () =>
        setNotice(
          "The preview is taking longer than expected. Restart it or open the hero in its own tab.",
        ),
      12000,
    );
    const receive = (event: MessageEvent) => {
      if (
        event.source !== frame.current?.contentWindow ||
        event.origin !== location.origin ||
        event.data?.id !== selected
      )
        return;
      if (event.data?.type === "patchwork-hero-motion") {
        setPaused(event.data.detail.paused === true);
        return;
      }
      if (event.data?.type !== "patchwork-hero-ready") return;
      clearTimeout(timeout);
      setReady(true);
      if (event.data.detail?.renderer === "fallback")
        setNotice("WebGL is unavailable. The readable fallback is shown.");
      else
        setNotice((current) =>
          current.startsWith("The preview") ||
          current.startsWith("WebGL is unavailable")
            ? ""
            : current,
        );
    };
    addEventListener("message", receive);
    return () => {
      clearTimeout(timeout);
      removeEventListener("message", receive);
    };
  }, [selected, reload]);
  useEffect(() => {
    if (!selected) return;
    try {
      localStorage.setItem(
        `patchwork:hero:v1:${selected}`,
        JSON.stringify(config),
      );
      setSaved(true);
    } catch {
      setSaved(false);
    }
  }, [selected, config]);
  useEffect(() => {
    if (ready && selected)
      frame.current?.contentWindow?.postMessage(
        {
          type: "patchwork-hero-config",
          id: selected,
          config: { ...config, paused },
        },
        location.origin,
      );
  }, [ready, config, paused, selected]);
  function open(id: HeroId) {
    setConfig(readConfig(id));
    setSelected(id);
    setReady(false);
    setPaused(false);
    setDevice("desktop");
    setReload(0);
    setNotice("");
    const url = new URL(location.href);
    url.searchParams.set("hero", id);
    history.replaceState(history.state, "", url);
    root.current?.scrollTo(0, 0);
  }
  async function download() {
    if (!selected) return;
    setBusy(true);
    setNotice("");
    try {
      downloadHero(await exportHero(selected, config), `${selected}-hero.zip`);
      setNotice(
        "Downloaded. The ZIP includes the hero, editable source, fonts and licenses.",
      );
    } catch (e) {
      setNotice((e as Error).message);
    } finally {
      setBusy(false);
    }
  }
  async function copy() {
    if (!selected) return;
    try {
      await navigator.clipboard.writeText(
        `<script src="./hero.js" defer></script>\n${heroEmbed(selected, config)}`,
      );
      setNotice(
        "Embed copied. Keep hero.js, fonts.css and the fonts from the download together.",
      );
    } catch {
      setNotice(
        "Clipboard unavailable. The embed code is available in the downloaded README.",
      );
    }
  }
  const width = device === "desktop" ? 1280 : 390,
    height = device === "desktop" ? 800 : 844,
    scale = Math.max(
      0.1,
      Math.min(1, bounds.width / width, bounds.height / height),
    );
  return (
    <div
      className="hero-studio"
      ref={root}
      role="dialog"
      aria-modal="true"
      aria-label="Hero sections"
    >
      <header className="hs-toolbar">
        <button onClick={onClose}>
          <ArrowLeft size={15} /> Back to Patchwork
        </button>
        <span>Hero sections</span>
        <small>Five original openings</small>
      </header>
      {!active ? (
        <main className="hs-gallery">
          <div className="hs-intro">
            <h1>Make an entrance.</h1>
            <p>
              Five hero sections, each with a world of its own. One screen. Live
              motion. Ready to become part of your website.
            </p>
          </div>
          <div className="hs-gallery-grid">
            {heroes.map((h) => (
              <article className="hs-card" key={h.id}>
                <button
                  className="hs-cover"
                  aria-label={`Customize ${h.name}`}
                  onClick={() => open(h.id)}
                >
                  <img
                    src={`/heroes/covers/${h.id}.webp`}
                    alt={`${h.name} hero preview`}
                    width="1280"
                    height="800"
                    loading="lazy"
                  />
                  <span>
                    Customize <ArrowUpRight size={16} />
                  </span>
                </button>
                <div className="hs-card-body">
                  <div>
                    <h2>{h.name}</h2>
                    <span>{h.medium}</span>
                  </div>
                  <p>{h.description}</p>
                  <footer>
                    <button onClick={() => open(h.id)}>
                      Make it yours <ArrowUpRight size={14} />
                    </button>
                    <a
                      href={`/?view=hero&hero=${h.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Open hero <ArrowUpRight size={14} />
                      <span className="hs-sr-only"> in a new tab</span>
                    </a>
                  </footer>
                </div>
              </article>
            ))}
          </div>
          <p className="hs-gallery-note">
            Every download includes a reusable custom element, editable code,
            local fonts and license notices.
          </p>
        </main>
      ) : (
        <main className="hs-editor">
          <div className="hs-editor-title">
            <div>
              <button className="hs-back" onClick={closeDetail}>
                <ArrowLeft size={14} /> All hero sections
              </button>
              <h1>
                {active.name}
                <span>{active.medium}</span>
              </h1>
            </div>
            <div>
              <a
                className="hs-open"
                href={`/?view=hero&hero=${active.id}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                Open hero <ArrowUpRight size={15} />
              </a>
              <button
                className="hs-download"
                disabled={busy}
                onClick={download}
              >
                <Download size={15} />
                {busy ? "Packaging…" : "Download hero"}
              </button>
            </div>
          </div>
          <div className="hs-workbench">
            <section className="hs-preview">
              <div className="hs-preview-bar">
                <span>
                  <i />
                  {ready ? "Live preview" : "Opening scene…"}
                </span>
                <div>
                  <button
                    aria-label="Desktop preview"
                    aria-pressed={device === "desktop"}
                    onClick={() => setDevice("desktop")}
                  >
                    <Monitor size={15} />
                  </button>
                  <button
                    aria-label="Phone preview"
                    aria-pressed={device === "phone"}
                    onClick={() => setDevice("phone")}
                  >
                    <Smartphone size={15} />
                  </button>
                </div>
                <div>
                  <button
                    aria-label={paused ? "Resume preview" : "Pause preview"}
                    aria-pressed={paused}
                    onClick={() => setPaused((p) => !p)}
                  >
                    {paused ? <Play size={14} /> : <Pause size={14} />}
                  </button>
                  <button
                    aria-label="Restart preview"
                    onClick={() => {
                      setReady(false);
                      setNotice("");
                      setReload((n) => n + 1);
                    }}
                  >
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
              <div
                className={`hs-stage ${device === "phone" ? "is-phone" : ""}`}
                ref={stage}
              >
                <div style={{ width: width * scale, height: height * scale }}>
                  <iframe
                    key={`${active.id}-${reload}`}
                    ref={frame}
                    title={`${active.name} live hero`}
                    srcDoc={preview}
                    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
                    style={{ width, height, transform: `scale(${scale})` }}
                  />
                </div>
              </div>
              <div className="hs-preview-bottom">
                <span>{active.uses}</span>
                <span>
                  {width} × {height}
                </span>
              </div>
            </section>
            <aside className="hs-inspector">
              <h2>Your version</h2>
              <div className="hs-text-controls">
                {(
                  [
                    ["brand", "Brand"],
                    ["headline", "Headline"],
                    ["body", "Description"],
                    ["cta", "Button label"],
                    ["href", "Button link (optional)"],
                  ] as const
                ).map(([key, label]) => (
                  <label key={key}>
                    {label}
                    {key === "headline" || key === "body" ? (
                      <textarea
                        aria-label={label}
                        rows={key === "headline" ? 2 : 3}
                        maxLength={key === "headline" ? 80 : 180}
                        value={config[key]}
                        onChange={(e) =>
                          setConfig((c) => ({ ...c, [key]: e.target.value }))
                        }
                      />
                    ) : (
                      <input
                        aria-label={label}
                        type={key === "href" ? "text" : "text"}
                        value={config[key]}
                        maxLength={
                          key === "brand" ? 28 : key === "cta" ? 32 : 500
                        }
                        onChange={(e) =>
                          setConfig((c) => ({ ...c, [key]: e.target.value }))
                        }
                        placeholder={
                          key === "href"
                            ? "https://your-website.com"
                            : undefined
                        }
                      />
                    )}
                  </label>
                ))}
              </div>
              <small className="hs-link-note">
                Leave the link empty to keep the artwork interaction.
              </small>
              <label className="hs-accent">
                Accent{" "}
                <input
                  type="color"
                  aria-label="Accent color"
                  value={config.accent}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, accent: e.target.value }))
                  }
                />
                <code>{config.accent}</code>
              </label>
              {(["speed", "intensity"] as const).map((key) => (
                <label className="hs-range" key={key}>
                  <span>
                    {key === "speed" ? "Motion speed" : "Art intensity"}
                    <output>{config[key].toFixed(2)}</output>
                  </span>
                  <input
                    type="range"
                    min="0.25"
                    max="1.8"
                    step="0.05"
                    value={config[key]}
                    onChange={(e) =>
                      setConfig((c) => ({
                        ...c,
                        [key]: Number(e.target.value),
                      }))
                    }
                  />
                </label>
              ))}
              <label className="hs-reduced">
                <input
                  type="checkbox"
                  checked={config.reduced}
                  onChange={(e) =>
                    setConfig((c) => ({ ...c, reduced: e.target.checked }))
                  }
                />{" "}
                Reduce motion
              </label>
              <div className="hs-saved">
                <Check size={12} />
                {saved
                  ? "Saved on this browser"
                  : "Changes stay in this session"}
              </div>
              <button
                className="hs-reset"
                onClick={() => {
                  setConfig(defaultConfig(active.id));
                  setPaused(false);
                }}
              >
                <RotateCcw size={13} /> Reset this hero
              </button>
            </aside>
          </div>
          <p className="hs-notice" role="status">
            {notice}
          </p>
          <section className="hs-reuse">
            <div>
              <Code2 size={21} />
              <h2>A hero that travels.</h2>
              <p>
                Drop one custom element into plain HTML or your framework.
                Styles stay isolated; text and actions stay editable. The
                download includes the original shaders and source.
              </p>
            </div>
            <div>
              <code>&lt;patchwork-hero scene="{active.id}" /&gt;</code>
              <button onClick={copy}>
                <Copy size={14} /> Copy embed
              </button>
              <span>Use with the files in your download.</span>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}
