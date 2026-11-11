import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  RotateCcw,
  SlidersHorizontal,
  X,
  Check,
  Sparkles,
  Play,
  Pause,
} from "lucide-react";
import {
  defaultMotionConfig,
  isMotionId,
  motionTemplates,
  normalizeMotionConfig,
  type MotionId,
  type MotionConfig,
} from "./catalog";
import { motionDocument } from "./document";
import { readMotionConfigs } from "./config-storage";
import { motionWebsiteUrl } from "./navigation";
import { exportMotion } from "./export";
import { download } from "../storage";
import "./studio.css";
import MotionCardPreview from "./MotionCardPreview";
interface Props {
  onClose: () => void;
}
export default function MotionStudio({ onClose }: Props) {
  const panel = useRef<HTMLDivElement>(null),
    customizeButton = useRef<HTMLButtonElement>(null);
  const root = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLIFrameElement>(null);
  const [selected, setSelected] = useState<MotionId | null>(() => {
    const id = new URLSearchParams(location.search).get("motion");
    return isMotionId(id) ? id : null;
  });
  const [previewId, setPreviewId] = useState<MotionId | null>(null);
  const stopCardPreview = useCallback((id: MotionId) => setPreviewId(current => current === id ? null : current), []);
  useEffect(() => { setPreviewId(null); }, [selected]);
  const [configs, setConfigs] = useState(readMotionConfigs),
    [editing, setEditing] = useState(false),
    [draft, setDraft] = useState<MotionConfig>(defaultMotionConfig("aether"));
  const [busy, setBusy] = useState(false),
    [error, setError] = useState(""),
    [progress, setProgress] = useState(0),
    [ready, setReady] = useState(false),
    [notice, setNotice] = useState("");
  const config = useMemo(
    () =>
      selected
        ? (configs[selected] ?? defaultMotionConfig(selected))
        : defaultMotionConfig("aether"),
    [selected, configs],
  );
  const documentHTML = useMemo(
    () => (selected ? motionDocument(selected, config, true) : ""),
    [selected, config],
  );
  const active = motionTemplates.find((t) => t.id === selected);
  const choose = useCallback((id: MotionId | null) => {
    setSelected(id);
    setEditing(false);
    setError("");
    setProgress(0);
    setReady(false);
    const url = new URL(location.href);
    url.searchParams.set("collection", "motion");
    if (id) { url.searchParams.set("motion", id); url.searchParams.set("edit", "1"); }
    else { url.searchParams.delete("motion"); url.searchParams.delete("edit"); }
    history.replaceState(null, "", url);
    root.current?.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const siblings = [...(root.current?.parentElement?.children ?? [])].filter(
      (el) => el !== root.current,
    ) as HTMLElement[];
    const state = siblings.map((el) => ({
      inert: el.inert,
      hidden: el.hidden,
      display: el.style.display,
    }));
    siblings.forEach((el) => {
      el.inert = true;
      el.hidden = true;
      el.style.display = "none";
    });
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root.current?.querySelector<HTMLButtonElement>("button")?.focus();
    return () => {
      siblings.forEach((el, i) => {
        el.inert = state[i].inert;
        el.hidden = state[i].hidden;
        el.style.display = state[i].display;
      });
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  useEffect(() => {
    const receive = (e: MessageEvent) => {
      if (e.source !== frame.current?.contentWindow || e.data?.id !== selected)
        return;
      if (e.data.type === "motion-back") {
        if (editing) setEditing(false);
        else choose(null);
      }
      if (e.data.type === "motion-focus") {
        const buttons = [
          ...(root.current?.querySelectorAll<HTMLButtonElement>(
            ".motion-topbar button",
          ) ?? []),
        ];
        (e.data.direction === "next" ? buttons[0] : buttons.at(-1))?.focus();
      }
      if (e.data.type === "motion-ready") setReady(true);
      if (e.data.type === "motion-progress" && Number.isFinite(e.data.progress))
        setProgress(Math.max(0, Math.min(1, e.data.progress)));
    };
    window.addEventListener("message", receive);
    return () => window.removeEventListener("message", receive);
  }, [selected, editing, choose]);
  useEffect(() => {
    setReady(false);
    setProgress(0);
  }, [documentHTML]);
  useEffect(() => {
    if (!notice) return;
    const timer = setTimeout(() => setNotice(""), 3500);
    return () => clearTimeout(timer);
  }, [notice]);
  useEffect(() => {
    if (!editing) return;
    panel.current?.querySelector<HTMLInputElement>("input")?.focus();
    return () => customizeButton.current?.focus();
  }, [editing]);
  const apply = () => {
    if (!selected) return;
    const c = normalizeMotionConfig(draft, selected),
      next = { ...configs, [selected]: c };
    if (c.email !== draft.email.trim()) {
      setError("Enter a valid contact email address before applying.");
      return;
    }
    setError("");
    setConfigs(next);
    setEditing(false);
    try {
      localStorage.setItem(
        "patchwork-motion-v1",
        JSON.stringify({ version: 1, configs: next }),
      );
      setNotice("Your version is saved on this device.");
    } catch {
      setNotice("Changes applied. Download your template to keep a copy.");
    }
  };
  const take = async () => {
    if (!selected) return;
    setBusy(true);
    setError("");
    try {
      download(
        await exportMotion(selected, config),
        `${selected}-motion-template.zip`,
      );
      setNotice("Template downloaded. Extract the ZIP to get started.");
    } catch (e) {
      setError((e as Error).message);
    } finally {
      setBusy(false);
    }
  };
  const keyboard = (e: React.KeyboardEvent) => {
    if (e.key === "Tab" && editing) {
      const nodes = [
        ...(panel.current?.querySelectorAll<HTMLElement>(
          "button:not(:disabled),input,textarea",
        ) ?? []),
      ];
      if (e.shiftKey && document.activeElement === nodes[0]) {
        e.preventDefault();
        nodes.at(-1)?.focus();
      } else if (!e.shiftKey && document.activeElement === nodes.at(-1)) {
        e.preventDefault();
        nodes[0]?.focus();
      }
    }
    if (e.key === "Escape") {
      e.stopPropagation();
      if (editing) setEditing(false);
      else if (selected) choose(null);
      else onClose();
    }
  };
  return (
    <div
      className={`motion-studio ${selected ? "is-viewing" : ""}`}
      ref={root}
      onKeyDown={keyboard}
      role="dialog"
      aria-modal="true"
      aria-label="Motion templates"
    >
      <header className="motion-topbar">
        <button
          className="motion-back"
          onClick={() => (selected ? choose(null) : onClose())}
        >
          <ArrowLeft size={16} />
          <span>{selected ? "The collection" : "Back to studio"}</span>
        </button>
        <div className="motion-wordmark">
          patchwork <span>/</span> <strong>motion studies</strong>
          <sup>{String(motionTemplates.length).padStart(2, "0")}</sup>
        </div>
        <div className="motion-top-actions">
          {selected ? (
            <>
              <button
                aria-label="Replay template"
                onClick={() =>
                  frame.current?.contentWindow?.scrollTo({
                    top: 0,
                    behavior: matchMedia("(prefers-reduced-motion: reduce)")
                      .matches
                      ? "auto"
                      : "smooth",
                  })
                }
              >
                <RotateCcw size={15} />
                <span>Replay</span>
              </button>
              <button
                ref={customizeButton}
                aria-pressed={editing}
                onClick={() => {
                  setDraft(config);
                  setEditing((v) => !v);
                }}
              >
                <SlidersHorizontal size={15} />
                <span>Customize</span>
              </button>
              <button
                className="motion-download"
                disabled={busy}
                onClick={() => void take()}
              >
                <Download size={14} />
                <span>{busy ? "Packaging…" : "Get template"}</span>
              </button>
            </>
          ) : (
            <span className="motion-edition">
              INDEPENDENT WEB EXPERIENCES / VOL. 01
            </span>
          )}
        </div>
      </header>
      {error && (
        <div className="motion-error" role="alert">
          {error}
          <button aria-label="Dismiss error" onClick={() => setError("")}>
            <X size={15} />
          </button>
        </div>
      )}
      {notice && (
        <div className="motion-notice" role="status">
          <Check size={15} />
          {notice}
        </div>
      )}
      {selected && active ? (
        <>
          <div className="motion-preview">
            <iframe
              key={selected}
              ref={frame}
              title={`${active.name} interactive template`}
              srcDoc={documentHTML}
              sandbox="allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
            />
            <div className="motion-preview-info">
              <span>
                <i className={ready ? "is-ready" : ""} />
                {active.name}
              </span>
              <span>
                {selected === "mosslight" ? "INTERACTIVE PIXEL HORIZON" : <>{Math.round(progress * 100)
                  .toString()
                  .padStart(2, "0")}
                % / SCROLL TO EXPLORE</>}
              </span>
            </div>
          </div>
          {editing && (
            <div className="motion-customize" ref={panel}>
              <header>
                <span>Make it yours.</span>
                <button
                  aria-label="Close customization"
                  onClick={() => setEditing(false)}
                >
                  <X size={18} />
                </button>
              </header>
              <p>
                The composition stays considered.
                <br />
                The words and color become yours.
              </p>
              <label>
                Name
                <input
                  aria-label="Name"
                  maxLength={32}
                  value={draft.brand}
                  onChange={(e) =>
                    setDraft({ ...draft, brand: e.target.value })
                  }
                />
              </label>
              <label>
                Opening line
                <textarea
                  aria-label="Opening line"
                  rows={3}
                  maxLength={85}
                  value={draft.headline}
                  onChange={(e) =>
                    setDraft({ ...draft, headline: e.target.value })
                  }
                />
              </label>
              {selected !== "mosslight" && <label>
                Contact email
                <input
                  aria-label="Contact email"
                  type="email"
                  maxLength={120}
                  value={draft.email}
                  onChange={(e) =>
                    setDraft({ ...draft, email: e.target.value })
                  }
                />
              </label>}
              <label className="motion-color-field">
                Accent color
                <input
                  aria-label="Accent color"
                  type="color"
                  value={draft.accent}
                  onChange={(e) =>
                    setDraft({ ...draft, accent: e.target.value })
                  }
                />
              </label>
              <button className="motion-apply" onClick={apply}>
                Apply your changes <ArrowUpRight size={16} />
              </button>
              <button
                className="motion-reset"
                onClick={() => setDraft(defaultMotionConfig(selected))}
              >
                Restore the original words & color
              </button>
              <small>
                Saved on this device. Your download includes the complete site,
                fonts, animation engine, and source HTML.
              </small>
            </div>
          )}
        </>
      ) : (
        <main className="motion-collection">
          <div className="motion-intro">
            <div>
              <span className="motion-eyebrow">THE SCROLL IS THE STORY.</span>
              <h1>
                Made to
                <br />
                <em>move you.</em>
                <span className="motion-intro-star">✳</span>
              </h1>
            </div>
            <div className="motion-intro-note">
              <span>NOT JUST A FIRST IMPRESSION.</span>
              <p>
                {motionTemplates.length} worlds to get lost in.
                <br />
                Sculpted objects. Type with a pulse.
                <br />
                Stories that unfold in your hands.
              </p>
              <div>
                <span>{motionTemplates.length} TEMPLATES</span>
                <i></i>
                <span>ENDLESS POSSIBILITIES</span>
              </div>
            </div>
          </div>
          <div className="motion-catalog-head">
            <span>THE COLLECTION</span>
            <span>01 — {String(motionTemplates.length).padStart(2, "0")} / INTERACTIVE EXPERIENCES</span>
          </div>
          <div className="motion-template-card-grid">
            {motionTemplates.map((t) => (
              <article
                className={`motion-template-card motion-${t.id}`}
                key={t.id}
                onPointerLeave={event => {if (!event.currentTarget.contains(document.activeElement)) stopCardPreview(t.id);}}
                onFocusCapture={event => {if ((event.target as HTMLElement).closest('a')) setPreviewId(t.id);}}
                onBlur={event => {if (!event.currentTarget.contains(event.relatedTarget as Node | null)) stopCardPreview(t.id);}}
              >
                <a
                  className="motion-template-card-cover"
                  href={motionWebsiteUrl(t.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${t.name}`}
                  onPointerEnter={event => {if (event.pointerType === 'mouse') setPreviewId(t.id);}}
                >
                  <img
                    src={t.cover}
                    loading="lazy"
                    decoding="async"
                    onLoad={(e) => {
                      e.currentTarget.style.display = "";
                    }}
                    alt={`${t.name} template cover`}
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                  <div className="motion-cover-fallback">
                    <span>{t.name}</span>
                    <i>
                      {t.id === "offscript"
                        ? "✳"
                        : t.id === "aether"
                          ? "Æ"
                          : "✿"}
                    </i>
                  </div>
                  {previewId === t.id && <MotionCardPreview id={t.id} name={t.name} config={configs[t.id] ?? defaultMotionConfig(t.id)} onStop={stopCardPreview}/>}
                  <span className="motion-cover-open">
                    Step inside <ArrowUpRight size={16} />
                  </span>
                </a>
                <button className="motion-card-live-toggle" aria-label={`${previewId === t.id ? 'Stop' : 'Start'} live preview of ${t.name}`} aria-pressed={previewId === t.id} onClick={() => setPreviewId(current => current === t.id ? null : t.id)}>
                  {previewId === t.id ? <Pause size={12}/> : <Play size={12}/>}
                  {previewId === t.id ? 'Stop preview' : 'Live preview'}
                </button>
                <div className="motion-template-card-meta">
                  <span>{t.category}</span>
                  <span>{t.number}</span>
                </div>
                <h2>
                  <a href={motionWebsiteUrl(t.id)} target="_blank" rel="noopener noreferrer">
                    {t.name} <ArrowUpRight size={26} />
                  </a>
                </h2>
                <p>{t.description}</p>
                <div className="motion-tags">
                  {t.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
                <a className="motion-explore" href={motionWebsiteUrl(t.id)} target="_blank" rel="noopener noreferrer">
                  Explore this world <span>↗</span>
                </a>
                <button className="motion-card-customize" onClick={() => {
                  choose(t.id);
                  setDraft(configs[t.id] ?? defaultMotionConfig(t.id));
                  setEditing(true);
                }}>
                  <SlidersHorizontal size={12} /> Customize & download
                </button>
              </article>
            ))}
          </div>
          <div className="motion-collection-footer">
            <Sparkles size={19} />
            <p>
              Explore the experience. Customize to make it yours.
              <br />
              <span>
                Every template downloads as an independent website. All assets
                stay local.
              </span>
            </p>
            <span>BUILT WITH GSAP + THREE.JS</span>
          </div>
        </main>
      )}
    </div>
  );
}
