import { useEffect, useRef } from "react";
import "./redesign.css";
import "./expressive.css";
export function Sprites({
  symbols = ["✳", "↗", "+", "◌"],
  className = "",
}: {
  symbols?: string[];
  className?: string;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = root.current!;
    const observer = new IntersectionObserver(([e]) =>
      el.style.setProperty(
        "--sprite-play",
        e.isIntersecting ? "running" : "paused",
      ),
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return (
    <div className={`ex-sprites ${className}`} ref={root} aria-hidden="true">
      {symbols.map((s, i) => (
        <span key={i} style={{ "--i": i } as React.CSSProperties}>
          {s}
        </span>
      ))}
    </div>
  );
}
export function Tape({ text }: { text: string }) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = root.current!;
    let visible = false;
    const update = () => element.style.setProperty("--sprite-play", visible && !document.hidden ? "running" : "paused");
    const observer = new IntersectionObserver(([entry]) => { visible = entry.isIntersecting; update(); });
    observer.observe(element);
    document.addEventListener("visibilitychange", update);
    return () => { observer.disconnect(); document.removeEventListener("visibilitychange", update); };
  }, []);
  return (
    <div className="ex-tape" ref={root} aria-hidden="true" style={{ "--sprite-play": "paused" } as React.CSSProperties}>
      <div>
        {[0, 1, 2, 3].map((i) => (
          <span key={i}>{text} <b>✳</b></span>
        ))}
      </div>
    </div>
  );
}
export function ExFooter({ brand, note }: { brand: string; note: string }) {
  return (
    <footer className="ex-footer">
      <a href="#top">{brand}</a>
      <span>{note}</span>
      <a href="#top">↑ BACK TO TOP</a>
    </footer>
  );
}
