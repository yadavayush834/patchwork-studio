import { useEffect, useMemo, useRef, useState } from "react";
import { asciiStudies as asciiBackgrounds, createProject, defaultAscii, findBackground } from "./catalog";
import type { Background } from "./types";
import Preview from "./Preview";
import { COLLECTIONS } from "./shell/collections";
import { openBrandKit } from "./shell/brand";
import "./shell/shell.css";
import "./ascii-page.css";

/** ASCII studies as a collection page of its own, in Patchwork's look: two live cards a row. */
function Card({ b, i, onUse }: { b: Background; i: number; onUse: (b: Background) => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setOn(e.isIntersecting), { rootMargin: "150px" });
    io.observe(ref.current!);
    return () => io.disconnect();
  }, []);
  const project = useMemo(() => {
    const p = createProject("terminal");
    p.sections = p.sections.slice(0, 1);
    p.sections[0].background = b.id;
    p.sections[0].ascii = { ...defaultAscii(b), intensity: 100 };
    p.sections[0].elements = [];
    return p;
  }, [b]);
  const hint = ({ lotus: "Move to tilt the flower. Click and it opens.", aurora: "Your cursor steers the wind. Click to send a surge.", neon: "Your cursor carries an umbrella. Click for lightning.", koi: "Drag ripples through the pond. Click to feed the koi." } as Record<string, string>)[b.scene ?? ""] ?? "";
  return (
    <article className="ap-card">
      <div className="ap-cover" ref={ref}>
        {on ? <Preview project={project} artOnly preview width={1080} /> : <img src={b.preview} alt="" />}
        <span className="ap-live"><i />LIVE ASCII</span>
      </div>
      <div className="ap-meta"><span>{String(i + 1).padStart(2, "0")} / {b.scene}</span><span>{hint}</span></div>
      <h2>{b.name}</h2>
      <p>{b.description}</p>
      <div className="ap-actions">
        <button className="ap-use" onClick={() => onUse(b)}>Make a site with this</button>
        <a className="ap-dl" href={b.source} download={`${b.name.toLowerCase().replaceAll(" ", "-")}.webm`}>Video loop</a>
      </div>
    </article>
  );
}

export default function AsciiPage({ onClose, onUse, onPaint }: { onClose: () => void; onUse: (b: Background) => void; onPaint?: () => void }) {
  const painting = findBackground("ascii-paint");
  useEffect(() => {
    document.body.classList.add("pw-shell", "pw-in-ascii");
    return () => document.body.classList.remove("pw-shell", "pw-in-ascii");
  }, []);
  return (
    <div className="ap" role="region" aria-label="ASCII studies">
      <header className="pw-bar">
        <a className="pw-bar-logo" href="/" onClick={(e) => { e.preventDefault(); onClose(); }} aria-label="Patchwork home"><span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span>patchwork</a>
        <nav aria-label="Collections">{COLLECTIONS.map((c) => <a key={c.key} href={c.href} aria-current={c.key === "ascii" ? "page" : undefined}>{c.label}</a>)}</nav>
        <button type="button" className="pw-bar-brand" onClick={() => openBrandKit()}><span aria-hidden="true" className="pw-bar-swatch" />Brand kit</button>
      </header>
      <div className="ap-wrap">
        <header className="ap-top">
          <h1>ASCII studies, <em>a life between the letters</em></h1>
          <p>Living backgrounds drawn entirely in characters. Each one answers your cursor and a click. Put one behind any section of your site.</p>
        </header>
        <section className="ap-grid">{asciiBackgrounds.map((b, i) => <Card key={b.id} b={b} i={i} onUse={onUse} />)}</section>
        {painting && onPaint && (
          <section className="ap-paint">
            <img src={painting.preview} alt="" />
            <div>
              <span className="ap-paint-kicker">05 / YOURS</span>
              <h2>Paint your own</h2>
              <p>Draw with light, or start from a photo. Patchwork turns it into a living background made of characters, with a shimmer, a sweeping beam and sparkles, that your visitors can stir.</p>
              <button className="ap-use" onClick={onPaint}>Open the paint studio</button>
            </div>
          </section>
        )}
      </div>
    </div>
  );
}
