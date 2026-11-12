import { useCallback, useEffect, useRef, useState } from "react";
import "./library.css";
import ShellBar, { PatchStrip } from "./shell/ShellBar";
import { shelves, pieces, piecesOn, pieceUrl, findPiece, type Piece, type ShelfId } from "./library/catalog";
import { exportPiece, pieceSource, portable } from "./library/export";
import { download } from "./storage";

const ARROW = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>;
const shelfOf = (id: ShelfId) => shelves.find((s) => s.id === id)!;

/** A piece running live inside a card: a real 1440×900 page, scaled to fit, mounted only while on screen. */
function Live({ id, title }: { id: string; title: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false), [k, setK] = useState(0.3);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "200px" });
    const ro = new ResizeObserver(() => setK(el.clientWidth / 1440));
    io.observe(el); ro.observe(el);
    return () => { io.disconnect(); ro.disconnect(); };
  }, []);
  return (
    <span className="lb-live" ref={ref}>
      {on && <iframe title={`${title} live preview`} tabIndex={-1} aria-hidden="true" scrolling="no" src={pieceUrl(id)} style={{ transform: `scale(${k})` }} />}
    </span>
  );
}

function Card({ p, n, big, onOpen }: { p: Piece; n: number; big?: boolean; onOpen: (id: string) => void }) {
  const shelf = shelfOf(p.shelf);
  return (
    <article className={`lb-card${big ? " is-big" : ""}`} style={{ "--n": n, "--c": shelf.color } as React.CSSProperties}>
      <button className="lb-cover" onClick={() => onOpen(p.id)} aria-label={`Open ${p.name}`}>
        <Live id={p.id} title={p.name} />
        <span className="lb-cover-open">Open {ARROW}</span>
        <span className="lb-cover-tag">{String(pieces.indexOf(p) + 1).padStart(2, "0")} · {shelf.label}</span>
      </button>
      <div className="lb-card-body">
        <div className="lb-card-meta"><span>{p.line}</span><span className="lb-dots" aria-hidden="true">{p.palette.map((c) => <i key={c} style={{ background: c }} />)}</span></div>
        <h3><button onClick={() => onOpen(p.id)}>{p.name}</button></h3>
        {big && <p>{p.description}</p>}
        <div className="lb-card-foot">
          <span className="lb-tags">{p.tags.map((t) => <span key={t}>{t}</span>)}</span>
          <a className="lb-icon" href={pieceUrl(p.id)} target="_blank" rel="noopener noreferrer" aria-label={`Open ${p.name} in a new tab`}>{ARROW}</a>
        </div>
      </div>
    </article>
  );
}

const DEVICES = [{ id: "desktop", w: 1440, label: "Desktop" }, { id: "tablet", w: 820, label: "Tablet" }, { id: "phone", w: 390, label: "Phone" }] as const;

function Viewer({ p, onBack, onGo }: { p: Piece; onBack: () => void; onGo: (id: string) => void }) {
  const shelf = shelfOf(p.shelf), i = pieces.indexOf(p);
  const prev = pieces[(i + pieces.length - 1) % pieces.length], next = pieces[(i + 1) % pieces.length];
  const stage = useRef<HTMLDivElement>(null);
  const [device, setDevice] = useState<(typeof DEVICES)[number]["id"]>("desktop"), [box, setBox] = useState({ w: 1200, h: 700 });
  const [busy, setBusy] = useState(false), [note, setNote] = useState(""), [reload, setReload] = useState(0);
  useEffect(() => {
    const ro = new ResizeObserver(([e]) => setBox({ w: e.contentRect.width, h: e.contentRect.height }));
    ro.observe(stage.current!); return () => ro.disconnect();
  }, []);
  useEffect(() => { if (!note) return; const t = setTimeout(() => setNote(""), 2600); return () => clearTimeout(t); }, [note]);
  const w = DEVICES.find((d) => d.id === device)!.w, k = Math.min(1, (box.w - 40) / w), h = (box.h - 40) / k;
  const take = async () => {
    setBusy(true);
    try { download(await exportPiece(p.id), `${p.id}.zip`); setNote("Downloaded: a folder with index.html, fonts and licences."); }
    catch (e) { setNote((e as Error).message); }
    finally { setBusy(false); }
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(portable(await pieceSource(p.id))); setNote("HTML copied. Put the fonts/ folder from the download next to it."); }
    catch { setNote("Copy isn't allowed here. Use Download instead."); }
  };
  return (
    <div className="lb-viewer" style={{ "--c": shelf.color } as React.CSSProperties}>
      <header className="lb-vbar">
        <a className="pw-bar-logo" href="/" aria-label="Patchwork home"><span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span></a>
        <button className="pw-ghost" onClick={onBack}><svg viewBox="0 0 16 16" width="14" aria-hidden="true"><path d="M10 3 5 8l5 5" fill="none" stroke="currentColor" strokeWidth="1.8" /></svg>Library</button>
        <div className="lb-vtitle"><i /><b>{p.name}</b><small>{shelf.label} · {String(i + 1).padStart(2, "0")} of {pieces.length}</small></div>
        <div className="lb-devices" role="group" aria-label="Preview size">
          {DEVICES.map((d) => <button key={d.id} aria-pressed={device === d.id} onClick={() => setDevice(d.id)}>{d.label}</button>)}
        </div>
        <div className="lb-vactions">
          <button className="pw-ghost" onClick={() => setReload((r) => r + 1)} aria-label="Replay">↻</button>
          <a className="pw-ghost" href={pieceUrl(p.id)} target="_blank" rel="noopener noreferrer">New tab {ARROW}</a>
          <button className="pw-ghost" onClick={() => void copy()}>Copy HTML</button>
          <button className="pw-btn" onClick={() => void take()} disabled={busy}>{busy ? "Packing…" : "Download"}</button>
        </div>
      </header>
      <div className="lb-vbody">
        <div className="lb-stage" ref={stage}>
          <div className="lb-frame" style={{ width: w * k, height: h * k }}>
            <iframe key={`${p.id}-${reload}`} title={`${p.name}`} src={pieceUrl(p.id)} style={{ width: w, height: h, transform: `scale(${k})` }} />
          </div>
        </div>
        <aside className="lb-notes">
          <p className="lb-kicker">{shelf.label}</p>
          <h2>{p.name}</h2>
          <p className="lb-line">{p.line}</p>
          <p>{p.description}</p>
          <h3>What's inside</h3>
          <ul>{p.inside.map((x) => <li key={x}>{x}</li>)}</ul>
          <h3>Palette</h3>
          <div className="lb-swatches">{p.palette.map((c) => <button key={c} style={{ background: c }} title={`Copy ${c}`} aria-label={`Copy colour ${c}`} onClick={() => { void navigator.clipboard?.writeText(c).then(() => setNote(`${c} copied.`), () => setNote(c)); }} />)}</div>
          <p className="lb-small">One self-contained page: HTML, CSS and a little JavaScript. No framework, no build step, no network requests. Fonts are under the SIL Open Font License.</p>
          <nav className="lb-pn" aria-label="Other pieces">
            <button onClick={() => onGo(prev.id)}><small>Previous</small>{prev.name}</button>
            <button onClick={() => onGo(next.id)}><small>Next</small>{next.name}</button>
          </nav>
        </aside>
      </div>
      {note && <div className="lb-note" role="status">{note}</div>}
    </div>
  );
}

export default function DesignLibrary({ onClose }: { onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<string | null>(() => findPiece(new URLSearchParams(location.search).get("piece"))?.id ?? null);
  const [shelf, setShelf] = useState<ShelfId>("templates");
  const piece = findPiece(open);

  // Opening a piece is its own page in the browser history.
  const openPiece = useCallback((id: string) => {
    const url = new URL(location.href); url.searchParams.set("piece", id);
    if (history.state?.piece) history.replaceState(history.state, "", url); else history.pushState({ pw: 1, piece: 1 }, "", url);
    setOpen(id); root.current?.scrollTo(0, 0);
  }, []);
  const closePiece = useCallback(() => {
    if (history.state?.piece) { history.back(); return; }
    const url = new URL(location.href); url.searchParams.delete("piece"); history.replaceState(history.state, "", url); setOpen(null);
  }, []);
  useEffect(() => {
    const sync = () => setOpen(findPiece(new URLSearchParams(location.search).get("piece"))?.id ?? null);
    addEventListener("popstate", sync); return () => removeEventListener("popstate", sync);
  }, []);
  useEffect(() => {
    const url = new URL(location.href);
    for (const old of ["library", "resource", "study", "template"]) url.searchParams.delete(old);
    if (url.href !== location.href) history.replaceState(history.state, "", url);
  }, []);
  useEffect(() => {
    const esc = (e: KeyboardEvent) => { if (e.key !== "Escape" || e.defaultPrevented) return; if (open) closePiece(); else onClose(); };
    addEventListener("keydown", esc); return () => removeEventListener("keydown", esc);
  }, [open, onClose, closePiece]);
  // The library covers the studio: hide and inert everything else while it is open.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const siblings = [...(root.current?.parentElement?.children || [])].filter((el) => el !== root.current) as HTMLElement[];
    const states = siblings.map((el) => ({ inert: el.inert, hidden: el.hidden, display: el.style.display }));
    siblings.forEach((el) => { el.inert = true; el.hidden = true; el.style.display = "none"; });
    const overflow = document.body.style.overflow; document.body.style.overflow = "hidden";
    root.current?.focus();
    return () => {
      siblings.forEach((el, i) => { el.inert = states[i].inert; el.hidden = states[i].hidden; el.style.display = states[i].display; });
      document.body.style.overflow = overflow; previous?.focus();
    };
  }, []);
  // Shelf tabs follow the chapter you are reading.
  useEffect(() => {
    if (open) return;
    const io = new IntersectionObserver((entries) => { for (const e of entries) if (e.isIntersecting) setShelf(e.target.id.replace("shelf-", "") as ShelfId); }, { root: root.current, rootMargin: "-30% 0px -60% 0px" });
    root.current?.querySelectorAll(".lb-chapter").forEach((c) => io.observe(c));
    return () => io.disconnect();
  }, [open]);
  const jump = (id: ShelfId) => { setShelf(id); root.current?.querySelector(`#shelf-${id}`)?.scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" }); };

  return (
    <div ref={root} className="design-library-workspace pw-page is-library" role="dialog" aria-modal="true" aria-label="Design Library" tabIndex={-1}>
      {piece ? (
        <Viewer p={piece} onBack={closePiece} onGo={openPiece} />
      ) : (
        <>
          <ShellBar active="library" />
          <main className="pw-wrap lb">
            <header className="lb-hero">
              <div className="lb-hero-copy">
                <p className="lb-kicker">The Design Library · {pieces.length} pieces · 0 dependencies</p>
                <h1>Library, <em>made by hand.</em></h1>
                <p>Pieces we would be proud to ship: three whole websites, three style studies, three motion experiments, three SVG experiments, three small controls and four complete UI kits. Every one is live below, opens full size, and downloads as a single page you can drop into any site.</p>
              </div>
              <div className="lb-hero-grid" role="group" aria-label="Every piece">
                {[0, 1, 2].flatMap((row) => shelves.map((sh) => piecesOn(sh.id)[row])).map((p, i) => (
                  <button key={p.id} onClick={() => openPiece(p.id)} style={{ "--c": shelfOf(p.shelf).color, "--i": i } as React.CSSProperties}><b>{p.name}</b></button>
                ))}
              </div>
              <PatchStrip />
            </header>
            <nav className="lb-shelves" aria-label="Shelves">
              {shelves.map((s, i) => (
                <button key={s.id} aria-current={shelf === s.id ? "true" : undefined} onClick={() => jump(s.id)} style={{ "--c": s.color } as React.CSSProperties}>
                  <small>{String(i + 1).padStart(2, "0")}</small>{s.label}<i>{piecesOn(s.id).length}</i>
                </button>
              ))}
            </nav>
            {shelves.map((s, si) => (
              <section key={s.id} id={`shelf-${s.id}`} className="lb-chapter" style={{ "--c": s.color } as React.CSSProperties} aria-labelledby={`h-${s.id}`}>
                <div className="lb-chapter-head">
                  <span className="lb-num">{String(si + 1).padStart(2, "0")}</span>
                  <h2 id={`h-${s.id}`}>{s.title} <em>{s.accent}</em></h2>
                  <p>{s.line}</p>
                </div>
                <div className="lb-cards">
                  {piecesOn(s.id).map((p, i, all) => <Card key={p.id} p={p} n={i} big={i === 0 && all.length % 2 === 1} onOpen={openPiece} />)}
                </div>
              </section>
            ))}
            <footer className="pw-foot">
              <b>Everything here is yours to use.</b>
              <span>Open any piece to download it · Esc goes back · nothing leaves this computer</span>
            </footer>
          </main>
        </>
      )}
    </div>
  );
}
