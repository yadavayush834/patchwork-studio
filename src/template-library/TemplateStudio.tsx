import { useEffect, useRef, useState } from "react";
import {
  ArrowLeft,
  ArrowUpRight,
  Monitor,
  Tablet,
  Smartphone,
  Search,
  RotateCcw,
} from "lucide-react";
import templates from "./catalog.json";
import "./studio.css";
function LiveTemplatePreview({ id }: { id: string }) {
  const root = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(0.33);
  useEffect(() => {
    if (!root.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setScale(entry.contentRect.width / 1080),
    );
    observer.observe(root.current);
    return () => observer.disconnect();
  }, []);
  return (
    <div ref={root} className="nt-hover-preview" aria-hidden="true">
      <iframe
        title={`${id} hover preview`}
        src={`/template-library/template.html?template=${id}&hover=1`}
        style={{ transform: `scale(${scale})` }}
        tabIndex={-1}
        sandbox="allow-scripts allow-same-origin"
      />
    </div>
  );
}
export default function TemplateStudio() {
  const [selected, setSelected] = useState(() => {
    const id = new URLSearchParams(location.search).get("template");
    return templates.some((t) => t.id === id) ? id : null;
  });
  const [query, setQuery] = useState(""),
    [category, setCategory] = useState("all"),
    [hovered, setHovered] = useState<string | null>(null),
    [width, setWidth] = useState(1080),
    [ready, setReady] = useState(false),
    [replay, setReplay] = useState(0);
  const frame = useRef<HTMLIFrameElement>(null),
    canvas = useRef<HTMLDivElement>(null);
  const [bounds, setBounds] = useState({ width: 900, height: 600 });
  const active = templates.find((t) => t.id === selected);
  useEffect(() => {
    if (!canvas.current) return;
    const observer = new ResizeObserver(([entry]) =>
      setBounds({
        width: Math.max(200, entry.contentRect.width - 48),
        height: Math.max(300, entry.contentRect.height - 48),
      }),
    );
    observer.observe(canvas.current);
    return () => observer.disconnect();
  }, [selected]);
  useEffect(() => {
    setReady(false);
  }, [selected, replay]);
  useEffect(() => {
    const receive = (e: MessageEvent) => {
      if (
        e.origin !== location.origin ||
        e.source !== frame.current?.contentWindow ||
        e.data?.id !== selected
      )
        return;
      if (e.data.type === "template-ready") setReady(true);
      if (e.data.type === "template-back") choose(null);
    };
    addEventListener("message", receive);
    return () => removeEventListener("message", receive);
  }, [selected]);
  function choose(id: string | null) {
    setSelected(id);
    setHovered(null);
    setWidth(1080);
    const url = new URL(location.href);
    if (id) url.searchParams.set("template", id);
    else url.searchParams.delete("template");
    history.replaceState(null, "", url);
  }
  const filtered = templates.filter(
    (t) =>
      (category === "all" || t.category === category) &&
      `${t.name} ${t.description} ${t.tags.join(" ")}`
        .toLowerCase()
        .includes(query.toLowerCase()),
  );
  const scale = Math.min(1, bounds.width / width),
    frameHeight = bounds.height / scale;
  if (active)
    return (
      <div
        className="nt-studio"
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            choose(null);
          }
        }}
      >
        <header className="nt-toolbar">
          <button className="nt-back" onClick={() => choose(null)}>
            <ArrowLeft size={15} /> All templates
          </button>
          <div className="nt-project-name">
            <strong>{active.name}</strong>
            <small>{ready ? "Interactive preview" : "Opening template…"}</small>
          </div>
          <div className="nt-devices">
            {[
              { value: 1080, Icon: Monitor, label: "Desktop" },
              { value: 768, Icon: Tablet, label: "Tablet" },
              { value: 375, Icon: Smartphone, label: "Phone" },
            ].map(({ value, Icon, label }) => (
              <button
                key={value}
                aria-label={`${label} preview`}
                aria-pressed={width === value}
                onClick={() => setWidth(value)}
              >
                <Icon size={16} />
                <span>{label}</span>
              </button>
            ))}
          </div>
          <button
            onClick={() => setReplay((v) => v + 1)}
            aria-label="Replay template"
          >
            <RotateCcw size={15} />
            <span>Replay</span>
          </button>
        </header>
        <div className="nt-canvas-area">
          <div className="nt-canvas-caption">
            <span>{active.category}</span>
            <span>
              {width}px · {ready ? "Ready" : "Opening…"}
            </span>
          </div>
          <div className="nt-canvas-scroll" ref={canvas}>
            <div
              className="nt-canvas-fit"
              style={{ width: width * scale, height: frameHeight * scale }}
            >
              <iframe
                key={`${selected}-${replay}`}
                ref={frame}
                title={`${active.name} website preview`}
                src={`/template-library/template.html?template=${active.id}`}
                style={{
                  width,
                  height: frameHeight,
                  transform: `scale(${scale})`,
                  transformOrigin: "top left",
                }}
                sandbox="allow-scripts allow-same-origin allow-popups"
              />
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <div className="nt-gallery">
      <div className="nt-intro">
        <span className="eyebrow muted">
          THE TEMPLATE COLLECTION / {templates.length} WEBSITES
        </span>
        <h1>
          A starting point.
          <br />
          <em>A world of possibility.</em>
        </h1>
        <p>
          Hover to explore a living preview. Open any template to try it right
          here in Patchwork.
        </p>
      </div>
      <div className="nt-filters">
        <label>
          <Search size={16} />
          <input
            aria-label="Search templates"
            placeholder="Find a template…"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </label>
        <select
          aria-label="Template category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="all">All categories</option>
          {[...new Set(templates.map((t) => t.category))].map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <span>{filtered.length} templates</span>
      </div>
      <div className="nt-grid">
        {filtered.map((t, i) => (
          <button
            className="nt-card"
            key={t.id}
            onClick={() => choose(t.id)}
            onMouseEnter={() => setHovered(t.id)}
            onMouseLeave={() => setHovered(null)}
            onFocus={() => setHovered(t.id)}
            onBlur={() => setHovered(null)}
            aria-label={`Open ${t.name}`}
          >
            <div
              className="nt-card-cover"
              style={{ "--nt-accent": t.accent } as React.CSSProperties}
            >
              <img
                className="nt-real-cover"
                src={`/template-covers/${t.id}.jpg`}
                loading="lazy"
                alt=""
              />
              {hovered === t.id && <LiveTemplatePreview id={t.id} />}
              <span className="nt-card-index">
                {String(i + 1).padStart(2, "0")} / {t.category}
              </span>
              <span className="nt-card-action">
                {hovered === t.id ? "LIVE PREVIEW" : "HOVER TO EXPLORE"}{" "}
                <ArrowUpRight size={15} />
              </span>
            </div>
            <div className="nt-card-details">
              <small>{t.category}</small>
              <h2>
                {t.name}
                <ArrowUpRight size={17} />
              </h2>
              <p>{t.description}</p>
              <footer>
                Interactive website <span>Open in Patchwork ↗</span>
              </footer>
            </div>
          </button>
        ))}
      </div>
      {!filtered.length && (
        <div className="nt-empty">
          No templates match your search.
          <button
            onClick={() => {
              setQuery("");
              setCategory("all");
            }}
          >
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
