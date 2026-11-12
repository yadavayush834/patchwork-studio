import { useEffect, useRef, useState, type ReactNode } from "react";
import "./home.css";
import { heroes2 } from "../heroes2/catalog";
import { hero2Document } from "../heroes2/document";
import { scenes } from "../scenes/catalog";
import { sceneDocument } from "../scenes/document";
import { components } from "../components/catalog";
import { componentDocument } from "../components/document";
import { spirits, pals } from "../spirits/catalog";
import { motionTemplates } from "../motion/catalog";
import { openBrandKit } from "../shell/brand";
import { Field, Sewing } from "./HeroArt";

interface World { id: string; name: string; description: string; accent: string }
interface Props {
  /** True while a collection is open on top of the home: residents go home and the quilt stops. */
  paused?: boolean;
  worlds: World[];
  worldPreview: (i: number) => ReactNode;
  recent: { id: string; name: string; updatedAt: number }[];
  projectCount: number;
  projectThumb: (id: string) => ReactNode;
  onOpenProject: (id: string) => void;
  onWorld: (id: string) => void;
  onMake: () => void;
  onScratch: () => void;
  onProjects: () => void;
  onHelp: () => void;
  openLibrary: () => void;
  openHeroes: () => void;
  openMotion: () => void;
  openVideoLab: () => void;
  openAscii: () => void;
}

const PATCH = ["#ff5b3a", "#ffc23d", "#6fe3b5", "#7fa8ff", "#b79bff", "#f4efe6", "#1d1a24"];
const ARROW = <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M4.5 11.5 11.5 4.5M5.5 4.5h6v6" fill="none" stroke="currentColor" strokeWidth="1.6" /></svg>;

/** A real page shown inside a card: rendered at 1440x900, scaled to fit, and only while on screen. */
function Live({ html, title, src }: { html?: string; title: string; src?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [on, setOn] = useState(false), [k, setK] = useState(0.3);
  useEffect(() => {
    const el = ref.current!;
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "120px" });
    const ro = new ResizeObserver(() => setK(el.clientWidth / 1440));
    io.observe(el); ro.observe(el);
    return () => { io.disconnect(); ro.disconnect(); };
  }, []);
  return <span className="hm-live" ref={ref}>{on && <iframe title={title} tabIndex={-1} aria-hidden="true" scrolling="no" srcDoc={src ? undefined : html} src={src} style={{ transform: `scale(${k})` }} />}</span>;
}

/** Load the shared kit, the pals and the kite once. */
let loading: Promise<void> | null = null;
const loadLiving = () => (loading ??= ["/spirits/kit.js", "/spirits/pals.js", "/spirits/wanderer.js", "/components/kite.js"].reduce<Promise<void>>(
  (p, src) => p.then(() => new Promise<void>((ok) => { if (document.querySelector(`script[src="${src}"]`)) return ok(); const s = Object.assign(document.createElement("script"), { src }); s.onload = s.onerror = () => ok(); document.head.append(s); })), Promise.resolve()));

export default function Home(p: Props) {
  const KEY = "patchwork-home-spirits";
  const [awake, setAwake] = useState(() => { try { return localStorage.getItem(KEY) !== "off"; } catch { return true; } });
  const card = useRef<HTMLDivElement>(null), hoop = useRef<HTMLDivElement>(null), stage = useRef<HTMLSpanElement>(null), nav = useRef<HTMLElement>(null);
  const covers = motionTemplates.map((m) => (m as { cover?: string }).cover).filter(Boolean).slice(0, 5) as string[];
  useEffect(() => {
    let off: (() => void)[] = [], gone = false;
    if (p.paused) return;
    void loadLiving().then(() => {
      if (gone) return;
      const put = (parent: Element | null, tag: string, attrs: Record<string, string>) => { if (!parent) return; const el = document.createElement(tag); for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v); parent.append(el); off.push(() => el.remove()); };
      put(document.body, "pw-kite", { color: "#ff5b3a", color2: "#ffc23d", tail: "#6fe3b5", threshold: "700" });
      // The spirits card always shows a few residents; the hero's are switchable.
      const ground = stage.current?.querySelector("i") ?? null;
      put(ground, "pw-pal", { kind: "fox" }); put(ground, "pw-pal", { kind: "hedgehog" }); put(ground, "pw-pal", { kind: "chick" });
      if (awake) { put(card.current, "pw-wanderer", { name: "Pip", color: "#ff5b3a" }); put(hoop.current, "pw-pal", { kind: "fox", size: "3" }); put(hoop.current, "pw-pal", { kind: "owl", size: "3" }); }
    });
    try { localStorage.setItem(KEY, awake ? "on" : "off"); } catch { /* storage can be unavailable */ }
    return () => { gone = true; off.forEach((f) => f()); };
  }, [awake, p.paused]);
  const go = (href: string) => () => location.assign(href);
  const all = heroes2.length + scenes.length + components.length + spirits.length + pals.length + motionTemplates.length;
  const tiles: { key: string; title: string; line: string; meta: string; act: () => void; cover: ReactNode; tone?: string }[] = [
    { key: "heroes2", title: "Hero sections", line: "One-screen openings with shaders, fluids, ASCII, pixels, dot art and light.", meta: `${heroes2.length + 5} heroes`, act: go("/?collection=heroes2"), cover: <Live title="Prism hero" html={hero2Document("prism", {}, "/heroes2/")} /> },
    { key: "scenes", title: "Scenes", line: "Living pixel places that answer the pointer and a click.", meta: `${scenes.length} scenes`, act: go("/?collection=scenes"), cover: <Live title="Lantern River" html={sceneDocument("lanterns", { text: false }, "/scenes/")} /> },
    { key: "components", title: "Components", line: "Characters that do real jobs: reveal, copy, progress, back to top.", meta: `${components.length} components`, act: go("/?collection=components"), cover: <Live title="Lamplighter demo" html={componentDocument("lamplighter", {}, "/components/")} /> },
    { key: "spirits", title: "Spirits", line: "Little creatures that move into your pages and live there.", meta: `${spirits.length + pals.length} spirits`, act: go("/?collection=spirits"), cover: <span className="hm-stage" ref={stage}><i /></span>, tone: "light" },
    { key: "motion", title: "Motion templates", line: "Whole scroll-led worlds, built to be customised.", meta: `${motionTemplates.length} worlds`, act: p.openMotion, cover: <span className="hm-covers">{covers.map((src, i) => <img key={src} src={src} alt="" style={{ animationDelay: `${i * 3.5}s`, animationDuration: `${covers.length * 3.5}s` }} />)}</span> },
    { key: "library", title: "Design Library", line: "Fifteen hand-made pieces: websites, style studies, motion, SVG and controls.", meta: "15 pieces", act: p.openLibrary, cover: <Live title="Low Orbit" src="/library/low-orbit/index.html" /> },
    { key: "brand", title: "Brand kit", line: "Your name, colours and font, set once and used by every piece.", meta: "Settings", act: () => openBrandKit(), cover: <span className="hm-brandcover" aria-hidden="true"><i /><i /><i /><b>Aa</b></span> },
    { key: "video", title: "Video Lab", line: "Cut, crop and caption video right in the browser.", meta: "Editor", act: p.openVideoLab, cover: <span className="hm-film" aria-hidden="true">{Array.from({ length: 14 }, (_, i) => <i key={i} />)}</span> },
    { key: "ascii", title: "ASCII studies", line: "Living backgrounds drawn entirely in characters.", meta: "Backgrounds", act: p.openAscii, cover: <span className="hm-ascii" aria-hidden="true">{"·:;+*x%@#".repeat(6)}</span> },
  ];
  const ticker = [...heroes2.map((h) => h.name), ...scenes.map((s) => s.name), ...components.map((c) => c.name), ...pals.slice(0, 8).map((q) => q.name), ...motionTemplates.slice(0, 6).map((m) => m.name)];
  return (
    <div className={`hm${p.paused ? " is-away" : ""}`}>
      <header className="hm-nav" ref={nav}>
        <a className="hm-logo" href="/" aria-label="Patchwork home"><span className="hm-mark" aria-hidden="true"><i /><i /><i /><i /></span>patchwork</a>
        <nav aria-label="Home">
          <a href="#collections">Collections</a><a href="#worlds">Worlds</a>
          <button onClick={p.onProjects}>Projects<span>{p.projectCount}</span></button>
          <button onClick={p.onHelp}>Help</button>
        </nav>
        <button className="hm-cta" onClick={p.onMake}>Start a site</button>
      </header>

      <section className="hm-hero">
        <Field />
        <div className="hm-copy" ref={card}>
          <p className="hm-kicker"><span className="hm-dot" />A creative studio for making websites</p>
          <h1><span className="hm-line">Make the internet</span> <span className="hm-line">feel <em>handmade</em> again.</span></h1>
          <p className="hm-lede">Pick a world, stitch in living scenes, characters with real jobs and little creatures that wander your pages. It all stays on your computer and exports as a site you own.</p>
          <div className="hm-actions">
            <button className="hm-primary" onClick={p.openMotion}>Explore motion templates {ARROW}</button>
            <button className="hm-ghost dark" onClick={p.onScratch}>Begin with a blank page</button>
          </div>
          <div className="hm-hero-foot">
            <span className="hm-count"><b>{all}+</b> pieces to use</span>
            <button className="hm-wake" aria-pressed={awake} onClick={() => setAwake((v) => !v)}><span />{awake ? "Residents are out" : "Residents are asleep"}</button>
          </div>
        </div>
        <div className="hm-hoop" ref={hoop}>
          <Sewing />
          <p className="hm-hoop-note" aria-hidden="true">sewn live · run your cursor over a square</p>
        </div>
      </section>

      <div className="hm-band" aria-label="Some of what is inside">
        <div className="hm-band-track">{[0, 1].map((d) => <span key={d} aria-hidden={d ? "true" : undefined}>{ticker.map((t) => <b key={t}>{t}<i>✳</i></b>)}</span>)}</div>
      </div>

      <section className="hm-section" id="collections">
        <div className="hm-head"><p className="hm-kicker">{all}+ pieces, all yours to use</p><h2>Everything in the studio</h2></div>
        <div className="hm-grid">
          {tiles.map((t, i) => (
            <button key={t.key} className={`hm-tile${t.tone ? ` is-${t.tone}` : ""}`} onClick={t.act}>
              <span className="hm-cover">{t.cover}</span>
              <span className="hm-tile-meta"><span>{String(i + 1).padStart(2, "0")}</span><span>{t.meta}</span></span>
              <span className="hm-tile-title">{t.title}{ARROW}</span>
              <span className="hm-tile-line">{t.line}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="hm-section hm-worlds" id="worlds">
        <div className="hm-head"><p className="hm-kicker">Start here</p><h2>Start from a world</h2><p>Each world is a whole site: sections, type and colours that belong together. Pick one and make it yours.</p></div>
        <div className="hm-world-grid">
          {p.worlds.map((w, i) => (
            <button key={w.id} className="hm-world" onClick={() => p.onWorld(w.id)}>
              <span className="hm-world-preview">{p.worldPreview(i)}</span>
              <span className="hm-world-row"><b>{w.name}</b><i style={{ background: w.accent }} /></span>
              <span className="hm-tile-line">{w.description}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="hm-section">
        <div className="hm-head hm-head-row"><div><p className="hm-kicker">Work in progress is still work of art</p><h2>Your projects</h2></div><button className="hm-ghost dark" onClick={p.onProjects}>See all {p.projectCount}</button></div>
        <div className="hm-projects">
          <button className="hm-new" onClick={p.onScratch}><span>+</span>A fresh page</button>
          {p.recent.slice(0, 3).map((r) => (
            <button key={r.id} className="hm-project" onClick={() => p.onOpenProject(r.id)}>
              <span className="hm-project-thumb">{p.projectThumb(r.id)}</span>
              <b>{r.name}</b><small>Edited {new Date(r.updatedAt).toLocaleDateString(undefined, { month: "short", day: "numeric" })}</small>
            </button>
          ))}
        </div>
      </section>

      <footer className="hm-foot">
        <div className="hm-foot-word" aria-hidden="true">{"patchwork".split("").map((ch, i) => <span key={i} style={{ background: PATCH[i % 5] }}>{ch}</span>)}</div>
        <div className="hm-foot-row"><span>Local-first. Yours forever.</span><span>Made for people who make things.</span></div>
      </footer>
    </div>
  );
}
