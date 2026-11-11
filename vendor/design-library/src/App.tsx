import {
  lazy,
  Suspense,
  Component,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
} from "react";

import catalog from "./library-catalog.json";
import "./library.css";
type Entry = (typeof catalog.entries)[number];
const visibleCollections = catalog.collections.filter((collection) => collection.id !== "interfaces");
const visibleEntries = catalog.entries.filter((entry) => entry.kind !== "interfaces");

const Demos = {
  templates: lazy(() => import("./library-demos/templates")),
  styles: lazy(() => import("./library-demos/styles")),
  interfaces: lazy(() => import("./library-demos/interfaces")),
  colors: lazy(() => import("./library-demos/colors")),
  motion: lazy(() => import("./library-demos/motion")),
  svg: lazy(() => import("./library-demos/svg")),
  primitives: lazy(() => import("./library-demos/primitives")),
};
function download(data: string, name: string, type = "application/json") {
  const url = URL.createObjectURL(new Blob([data], { type }));
  const a = document.createElement("a");
  a.href = url;
  a.download = name;
  a.click();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
class Boundary extends Component<{ children: ReactNode }, { failed: boolean }> {
  state = { failed: false };
  static getDerivedStateFromError() {
    return { failed: true };
  }
  render() {
    return this.state.failed ? (
      <div className="lib-empty">
        <h2>This example could not render.</h2>
        <p>Try another example, or download the source to inspect it.</p>
      </div>
    ) : (
      this.props.children
    );
  }
}
function readFavorites(): string[] {
  try {
    const v = JSON.parse(
      localStorage.getItem("patchwork-design-library:favorites:v1") || "[]",
    );
    return Array.isArray(v) ? v.filter((x) => typeof x === "string") : [];
  } catch {
    return [];
  }
}
function StyleCardPreview({ entry, active }: { entry: Entry; active: boolean }) {
  const frame = useRef<HTMLDivElement>(null);
  const previewFrame = useRef<HTMLIFrameElement>(null);
  const [ready, setReady] = useState(false);
  const [scale, setScale] = useState(0.25);
  useEffect(() => {
    if (!active) { setReady(false); return; }
    const receive = (event: MessageEvent) => {
      if (event.origin === location.origin && event.source === previewFrame.current?.contentWindow &&
          event.data?.type === "style-preview-ready" && event.data?.id === entry.originalId) setReady(true);
    };
    addEventListener("message", receive);
    return () => removeEventListener("message", receive);
  }, [active, entry.originalId]);
  useEffect(() => {
    const element = frame.current;
    if (!element) return;
    const observer = new ResizeObserver(([measurement]) => setScale(measurement.contentRect.width / 1280));
    observer.observe(element);
    return () => observer.disconnect();
  }, []);
  return <div className="lib-style-preview" ref={frame}>
    <img className="lib-style-cover" src={`./style-study-covers/${encodeURIComponent(entry.originalId)}.jpg`} loading="lazy" alt="" />
    {active && <iframe ref={previewFrame} aria-hidden="true" tabIndex={-1} title={`${entry.name} preview`} className="lib-style-frame" style={{transform: `scale(${scale})`, opacity: ready ? 1 : 0}} src={`./index.html?preview=1#render/styles/${encodeURIComponent(entry.originalId)}`} />}
  </div>;
}
export default function App() {
  const [route, setRoute] = useState(() =>
    decodeURIComponent(location.hash.slice(1)),
  );
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [favorites, setFavorites] = useState(readFavorites);
  const [onlySaved, setOnlySaved] = useState(false);
  const [size, setSize] = useState("100%");
  const [notice, setNotice] = useState("");
  const [previewId, setPreviewId] = useState<string | null>(null);
  useEffect(() => {
    const change = () => {
      setPreviewId(null);
      setRoute(decodeURIComponent(location.hash.slice(1)));
      setCategory("all");
      setQuery("");
    };
    addEventListener("hashchange", change);
    return () => removeEventListener("hashchange", change);
  }, []);
  useEffect(() => {
    const back = (e: MessageEvent) => {
      if (
        e.origin === location.origin &&
        e.source ===
          document.querySelector<HTMLIFrameElement>(".lib-demo")
            ?.contentWindow &&
        e.data?.type === "design-library-back" &&
        visibleCollections.some((c) => c.id === e.data.kind)
      )
        location.hash = e.data.kind;
    };
    addEventListener("message", back);
    return () => removeEventListener("message", back);
  }, []);
  const isRender = route.startsWith("render/");
  const [group = "all", itemId] = (isRender ? route.slice(7) : route).split(
    "/",
  );
  const entry = visibleEntries.find(
    (e) => e.kind === group && e.originalId === itemId,
  );
  const selected = visibleCollections.find((c) => c.id === group);
  const items = useMemo(
    () =>
      visibleEntries.filter(
        (e) =>
          (group === "all" || !selected || e.kind === group) &&
          (category === "all" || e.category === category) &&
          (!onlySaved || favorites.includes(e.id)) &&
          `${e.name} ${e.originalName} ${e.description} ${e.category} ${e.tags.join(" ")}`
            .toLowerCase()
            .includes(query.toLowerCase()),
      ),
    [group, selected, query, category, onlySaved, favorites],
  );
  const categories = [
    ...new Set(
      visibleEntries
        .filter((e) => !selected || e.kind === group)
        .map((e) => e.category),
    ),
  ]
    .filter(Boolean)
    .sort();
  function navigate(value: string) {
    const [section, resource] = value.split("/");
    if (["colors", "motion", "svg", "primitives"].includes(section) && window.parent !== window) {
      window.parent.postMessage({ type: "patchwork-open-collection", section, resource }, location.origin);
      return;
    }
    location.hash = value;
    setSize("100%");
    window.scrollTo(0, 0);
  }
  function toggle(id: string) {
    const next = favorites.includes(id)
      ? favorites.filter((x) => x !== id)
      : [...favorites, id];
    setFavorites(next);
    try {
      localStorage.setItem(
        "patchwork-design-library:favorites:v1",
        JSON.stringify(next),
      );
    } catch {
      setNotice("Favorites could not be saved on this device.");
    }
  }
  function demo(e: Entry) {
    const Demo = Demos[e.kind as keyof typeof Demos];
    return (
      <Suspense
        fallback={
          <p className="lib-empty" role="status">
            Opening example…
          </p>
        }
      >
        <Demo
          id={e.originalId}
          onBack={() => {
            if (!isRender) return navigate(e.kind);
            if (window.parent !== window) {
              window.parent.postMessage(
                { type: "design-library-back", kind: e.kind },
                location.origin,
              );
            } else {
              window.location.assign(`/?collection=library&library=${encodeURIComponent(e.kind)}`);
            }
          }}
        />
      </Suspense>
    );
  }
  if (isRender && entry)
    return <Boundary key={entry.id}>{demo(entry)}</Boundary>;
  return (
    <div className={`library-app${group === "styles" ? " is-styles" : ""}`}>
      <header className="lib-header">
        <a href="#all" className="lib-brand">
          ✳ <b>patchwork</b>
          <span>/ design library</span>
        </a>
        <span className="lib-local">● PERSONAL COLLECTION</span>
      </header>
      {entry ? (
        <>
          <div className="lib-previewbar">
            <button onClick={() => navigate(group)}>← {selected?.name}</button>
            <strong>{entry.name}</strong>
            <label>
              Viewport{" "}
              <select value={size} onChange={(e) => setSize(e.target.value)}>
                <option value="100%">Desktop</option>
                <option value="768px">Tablet · 768</option>
                <option value="375px">Phone · 375</option>
              </select>
            </label>
            <button
              onClick={() =>
                download(
                  JSON.stringify(entry, null, 2),
                  `${entry.originalId}-reference.json`,
                )
              }
            >
              Download reference ↓
            </button>
          </div>
          {entry.kind === "styles" && <div className="lib-study-intro"><span>STYLE STUDY / {entry.category}</span><h1>{entry.name}</h1><p>{entry.description}</p><div className="lib-study-swatches" aria-label="Study palette">{entry.colors.slice(0, 5).map((color, i) => <span key={i} title={color} style={{background: color}} />)}</div><small>TYPE / {(entry.metadata as { typography?: string }).typography || "A distinctive type system"} <span aria-hidden="true"> · </span> EXPLORE THE INTERACTIVE STUDY BELOW ↓</small></div>}
          <div className="lib-demowrap">
            <iframe
              title={`${entry.name} live preview`}
              className="lib-demo"
              style={{
                width: size,
                height: "78vh",
                display: "block",
                border: 0,
              }}
              src={`./index.html#render/${entry.kind}/${entry.originalId}`}
            />
          </div>
          <details className="lib-source">
            <summary>About this example & source</summary>
            <p>{entry.description}</p>
            <p>
              {entry.source ||
                `src/${entry.kind === "motion" ? "motion-lab" : "svg-lab"}/registry.ts`}
            </p>
            <p>Original name: {entry.originalName}</p>
            <p>
              Interface studies are independent recreations. Demo data and
              simulated actions are examples.
            </p>
            <a href="./library-source.zip" download>
              Download complete React source ↓
            </a>
          </details>
        </>
      ) : (
        <div className="lib-layout">
          <aside className="lib-sidebar">
            <p>THE COLLECTION</p>
            <button
              className={!selected ? "active" : ""}
              onClick={() => navigate("all")}
            >
              All resources <span>{visibleEntries.length}</span>
            </button>
            {visibleCollections.map((c) => (
              <button
                key={c.id}
                className={group === c.id ? "active" : ""}
                onClick={() => navigate(c.id)}
              >
                {c.name}
                <span>{c.count}</span>
              </button>
            ))}
            <div className="lib-sidebar-foot">
              <span>
                Collected. Considered.
                <br />
                Ready to explore.
              </span>
              <a href="./library-source.zip" download>
                Download source ↗
              </a>
              <a href="./catalog.json" download>
                Download catalog ↗
              </a>
            </div>
          </aside>
          <main className="lib-main">
            <div className="lib-intro">
              <div>
                <p className="lib-eyebrow">{group === "styles" ? "THE STYLE COLLECTION / 28 WEBSITES" : "A FIELD GUIDE TO DIGITAL DESIGN"}</p>
                <h1>
                  {group === "styles" ? <><span>Different ways to see.</span><br /><em>Endless ways to make.</em></> : selected?.name || (
                    <>
                      A little library.
                      <br />
                      <em>A lot of possibility.</em>
                    </>
                  )}
                </h1>
                <p>
                  {group === "styles" ? "Explore 28 distinct approaches to design, from quiet typography to bold interactive worlds." : selected?.description ||
                    "Sites, systems, colors and experiments. One considered collection, with room for every kind of idea."}
                </p>
              </div>
              <div className="lib-index-art" aria-hidden="true">
                <i />
                <i />
                <i />
                <span>✳</span>
                <small>
                  THE DESIGN INDEX
                  <br />
                  VOL. 01 — {visibleEntries.length} RESOURCES
                </small>
              </div>
            </div>
            <div className="lib-tools">
              <label className="lib-search">
                <span>⌕</span>
                <input
                  aria-label="Search library"
                  placeholder="Search names, styles, techniques…"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
              </label>
              <select
                aria-label="Category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="all">All categories</option>
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
              <button
                aria-pressed={onlySaved}
                onClick={() => setOnlySaved(!onlySaved)}
              >
                {onlySaved ? "★" : "☆"} Saved
              </button>
            </div>
            <div className="lib-results">
              <span>
                {items.length} {items.length === 1 ? "resource" : "resources"}
              </span>
              <span>CURATED BY TYPE · ORIGINAL WORK PRESERVED</span>
            </div>
            {notice && <p role="status">{notice}</p>}
            <div className="lib-grid">
              {items.map((e, i) => (
                <article key={e.id} className="lib-card"
                  onMouseEnter={() => { if (e.kind === "styles") setPreviewId(e.id); }}
                  onMouseLeave={() => setPreviewId((current) => current === e.id ? null : current)}
                  onFocus={() => { if (e.kind === "styles") setPreviewId(e.id); }}
                  onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPreviewId((current) => current === e.id ? null : current); }}
                >
                  <a
                    className="lib-card-open"
                    aria-label={`Explore ${e.name}${e.kind === "styles" ? " (opens in a new tab)" : ""}`}
                    href={e.kind === "styles" ? `./index.html#render/styles/${encodeURIComponent(e.originalId)}` : `#${e.kind}/${encodeURIComponent(e.originalId)}`}
                    target={e.kind === "styles" ? "_blank" : undefined}
                    rel={e.kind === "styles" ? "noopener noreferrer" : undefined}
                    onClick={e.kind === "styles" ? undefined : (event) => {
                      event.preventDefault();
                      navigate(`${e.kind}/${e.originalId}`);
                    }}
                  >
                    <div
                      className={`lib-card-art kind-${e.kind}`}
                      style={
                        {
                          "--ink": e.colors[0] || "#a391d3",
                        } as React.CSSProperties
                      }
                    >
                      {e.kind === "styles" ? (
                        <StyleCardPreview entry={e} active={previewId === e.id} />
                      ) : e.kind === "colors" ? (
                        <div className="lib-swatches">
                          {e.colors.slice(0, 5).map((color, n) => (
                            <i key={n} style={{ background: color }} />
                          ))}
                        </div>
                      ) : (
                        <>
                          <span className="lib-art-number">
                            {String(i + 1).padStart(2, "0")}
                          </span>
                          <span className="lib-art-symbol">
                            {e.kind === "svg"
                              ? "❋"
                              : e.kind === "motion"
                                ? "◎"
                                : e.kind === "primitives"
                                  ? "▦"
                                  : "Aa"}
                          </span>
                          <span className="lib-art-caption">{e.category}</span>
                        </>
                      )}
                    </div>
                    <div className="lib-card-copy">
                      <small>
                        {visibleCollections.find((c) => c.id === e.kind)?.name}
                      </small>
                      <h2>
                        {e.name}
                        <span>↗</span>
                      </h2>
                      <p>{e.description}</p>
                    </div>
                  </a>
                  <div className="lib-card-footer">
                    <span>{e.category}</span>
                    <button
                      aria-label={`${favorites.includes(e.id) ? "Unsave" : "Save"} ${e.name}`}
                      aria-pressed={favorites.includes(e.id)}
                      onClick={() => toggle(e.id)}
                    >
                      {favorites.includes(e.id) ? "★" : "☆"}
                    </button>
                  </div>
                </article>
              ))}
            </div>
            {items.length === 0 && (
              <div className="lib-empty">
                <h2>No matching resources.</h2>
                <button
                  onClick={() => {
                    setQuery("");
                    setCategory("all");
                    setOnlySaved(false);
                  }}
                >
                  Clear filters
                </button>
              </div>
            )}
            <footer className="lib-footer">
              <span>Six collections. One consistent index.</span>
              <span>Source snapshot · {catalog.source.commit.slice(0, 7)}</span>
            </footer>
          </main>
        </div>
      )}
    </div>
  );
}
