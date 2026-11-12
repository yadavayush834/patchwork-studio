import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Download,
  RotateCcw,
  SlidersHorizontal,
  X,
  Check,
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
import "./collection.css";
import ShellBar, { PageHead } from "../shell/ShellBar";
import MotionCardPreview from "./MotionCardPreview";
type Group = "all" | "pixel" | "living" | "journeys" | "studio";
const GROUPS: { id: Group; label: string; color: string }[] = [
  { id: "all", label: "Every world", color: "#f4efe6" },
  { id: "pixel", label: "Pixel worlds", color: "#ff5b3a" },
  { id: "living", label: "Living art", color: "#ffc23d" },
  { id: "journeys", label: "Journeys", color: "#7fa8ff" },
  { id: "studio", label: "Studios & objects", color: "#6fe3b5" },
];
const groupOf = (category: string): Group =>
  /PIXEL/.test(category) ? "pixel" : /LIVING/.test(category) ? "living" : /EXPEDITION|JOURNAL|OBSERVATORY|ART \//.test(category) ? "journeys" : "studio";
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
  const [filter, setFilter] = useState<Group>("all");
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
    if (id) {
      url.searchParams.set("motion", id); url.searchParams.set("edit", "1");
      // A template is its own page: Back returns to the collection.
      if (url.href !== location.href) history.pushState({ pw: 1, motion: 1 }, "", url);
    } else if (history.state?.motion) {
      history.back();
    } else {
      url.searchParams.delete("motion"); url.searchParams.delete("edit");
      history.replaceState(history.state, "", url);
    }
    root.current?.scrollTo(0, 0);
  }, []);
  // Back/Forward between the collection and a template.
  useEffect(() => {
    const sync = () => {
      const id = new URLSearchParams(location.search).get("motion");
      setSelected(isMotionId(id) ? id : null);
      setEditing(false);
      setError("");
      setProgress(0);
      setReady(false);
    };
    addEventListener("popstate", sync);
    return () => removeEventListener("popstate", sync);
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
    root.current?.focus();
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
  // Pixel worlds lead: they are the collection's strongest pieces.
  const ordered = [...motionTemplates].sort((a, b) => Number(groupOf(b.category) === "pixel") - Number(groupOf(a.category) === "pixel"));
  const shown = ordered.filter((t) => filter === "all" || groupOf(t.category) === filter);
  return (
    <div
      className={`motion-studio pw-page is-motion ${selected ? "is-viewing" : ""}`}
      ref={root}
      onKeyDown={keyboard}
      role="dialog"
      aria-modal="true"
      aria-label="Motion templates"
      tabIndex={-1}
    >
      {selected && active ? (
        <header className="motion-topbar">
          <a className="pw-bar-logo" href="/" aria-label="Patchwork home">
            <span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span>patchwork
          </a>
          <button className="motion-back" onClick={() => choose(null)}>
            <ArrowLeft size={16} />
            <span>All motion templates</span>
          </button>
          <div className="motion-now">
            <span className="motion-now-dot" style={{ background: active.color }} />
            <b>{active.name}</b>
            <small>{active.category}</small>
          </div>
          <div className="motion-top-actions">
            <button
              className="pw-ghost"
              aria-label="Replay template"
              onClick={() =>
                frame.current?.contentWindow?.scrollTo({
                  top: 0,
                  behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth",
                })
              }
            >
              <RotateCcw size={15} />
              <span>Replay</span>
            </button>
            <button
              className="pw-ghost"
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
            <button className="pw-btn motion-download" disabled={busy} onClick={() => void take()}>
              <Download size={14} />
              <span>{busy ? "Packaging…" : "Get template"}</span>
            </button>
          </div>
        </header>
      ) : (
        <ShellBar active="motion" />
      )}
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
                {ready ? active.name : `Loading ${active.name}…`}
              </span>
              {selected === "mosslight" ? (
                <span>Interactive pixel horizon</span>
              ) : (
                <span className="motion-progress" aria-label={`${Math.round(progress * 100)}% scrolled`}>
                  <span className="motion-progress-bar">
                    {Array.from({ length: 10 }, (_, k) => <i key={k} className={progress * 10 > k ? "on" : ""} />)}
                  </span>
                  {String(Math.round(progress * 100)).padStart(2, "0")}% · scroll to explore
                </span>
              )}
            </div>
          </div>
          {editing && (
            <div className="motion-customize" ref={panel}>
              <header>
                <span>Make it <em>yours</em></span>
                <button aria-label="Close customization" onClick={() => setEditing(false)}>
                  <X size={18} />
                </button>
              </header>
              <p>The composition stays as it is. The words and the colour become yours.</p>
              <label>
                Name
                <input aria-label="Name" maxLength={32} value={draft.brand} onChange={(e) => setDraft({ ...draft, brand: e.target.value })} />
              </label>
              <label>
                Opening line
                <textarea aria-label="Opening line" rows={3} maxLength={85} value={draft.headline} onChange={(e) => setDraft({ ...draft, headline: e.target.value })} />
              </label>
              {selected !== "mosslight" && (
                <label>
                  Contact email
                  <input aria-label="Contact email" type="email" maxLength={120} value={draft.email} onChange={(e) => setDraft({ ...draft, email: e.target.value })} />
                </label>
              )}
              <label className="motion-color-field">
                Accent colour
                <span>
                  <input aria-label="Accent color" type="color" value={draft.accent} onChange={(e) => setDraft({ ...draft, accent: e.target.value })} />
                  <code>{draft.accent}</code>
                </span>
              </label>
              <button className="pw-btn motion-apply" onClick={apply}>
                Apply your changes <ArrowUpRight size={16} />
              </button>
              <button className="pw-link motion-reset" onClick={() => setDraft(defaultMotionConfig(selected))}>
                Restore the original words and colour
              </button>
              <small>Saved on this device. Your download includes the complete site, fonts, animation engine and source HTML.</small>
            </div>
          )}
        </>
      ) : (
        <main className="pw-wrap motion-collection">
          <PageHead
            title="Motion"
            accent="scroll-led worlds"
            lede={<>{motionTemplates.length} whole websites where the scroll tells the story: voxel fables, living art, expeditions and sculpted objects. Step inside one in a new tab, or customise its words and colour here and download the finished site.</>}
          >
            <div className="pw-stats">
              <span className="pw-stat"><b>{motionTemplates.length}</b><span>Worlds</span></span>
              <span className="pw-stat"><b>{motionTemplates.filter((t) => groupOf(t.category) === "pixel").length}</b><span>In pixels</span></span>
            </div>
          </PageHead>
          <div className="pw-tabs" role="group" aria-label="Filter motion templates">
            {GROUPS.map((g) => (
              <button key={g.id} aria-pressed={filter === g.id} onClick={() => setFilter(g.id)}>
                <i style={{ background: g.color }} />
                {g.label}
                <small>{g.id === "all" ? motionTemplates.length : motionTemplates.filter((t) => groupOf(t.category) === g.id).length}</small>
              </button>
            ))}
          </div>
          <div className="pw-cards">
            {shown.map((t, n) => (
              <article
                className={`pw-card motion-template-card motion-${t.id}`}
                key={t.id}
                style={{ "--n": n } as React.CSSProperties}
                onPointerLeave={(event) => { if (!event.currentTarget.contains(document.activeElement)) stopCardPreview(t.id); }}
                onFocusCapture={(event) => { if ((event.target as HTMLElement).closest("a")) setPreviewId(t.id); }}
                onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) stopCardPreview(t.id); }}
              >
                <a
                  className="pw-cover motion-template-card-cover"
                  href={motionWebsiteUrl(t.id)}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Explore ${t.name} in a new tab`}
                  onPointerEnter={(event) => { if (event.pointerType === "mouse") setPreviewId(t.id); }}
                  style={{ background: t.background }}
                >
                  <img
                    src={t.cover}
                    loading="lazy"
                    decoding="async"
                    alt={`${t.name} template cover`}
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  {previewId === t.id && (
                    <MotionCardPreview id={t.id} name={t.name} config={configs[t.id] ?? defaultMotionConfig(t.id)} onStop={stopCardPreview} />
                  )}
                  <span className="pw-cover-open">Step inside <ArrowUpRight size={14} /></span>
                </a>
                <div className="pw-card-meta">
                  <span>{t.number} / {t.category}</span>
                  <button
                    className="motion-card-live-toggle"
                    aria-label={`${previewId === t.id ? "Stop" : "Start"} live preview of ${t.name}`}
                    aria-pressed={previewId === t.id}
                    onClick={() => setPreviewId((current) => (current === t.id ? null : t.id))}
                  >
                    {previewId === t.id ? <Pause size={11} /> : <Play size={11} />}
                    {previewId === t.id ? "Stop preview" : "Live preview"}
                  </button>
                </div>
                <h2 className="pw-card-title">
                  <a href={motionWebsiteUrl(t.id)} target="_blank" rel="noopener noreferrer">{t.name}</a>
                  <ArrowUpRight size={22} />
                </h2>
                <p>{t.description}</p>
                <div className="pw-card-foot">
                  <div className="pw-chips">
                    {t.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <button
                    className="pw-btn motion-card-customize"
                    onClick={() => {
                      choose(t.id);
                      setDraft(configs[t.id] ?? defaultMotionConfig(t.id));
                      setEditing(true);
                    }}
                  >
                    <SlidersHorizontal size={13} /> Customize
                  </button>
                </div>
              </article>
            ))}
          </div>
          <footer className="pw-foot">
            <b>Explore it. Customise it. Keep it.</b>
            <span>Every template downloads as an independent website · all assets stay local · built with GSAP + three.js</span>
          </footer>
        </main>
      )}
    </div>
  );
}
