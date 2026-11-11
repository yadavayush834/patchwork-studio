import { useEffect, type CSSProperties } from "react";
import { websitesRegistry } from "../websites/registry";
import "./styles.css";
export default function Demo({ id, onBack }: { id: string; onBack: () => void }) {
  const study = websitesRegistry.find((entry) => entry.id === id);
  useEffect(() => {
    if (!study || parent === window) return;
    const readyFrame = requestAnimationFrame(() => {
      parent.postMessage({ type: "style-study-ready", id }, location.origin);
      parent.postMessage({ type: "style-preview-ready", id }, location.origin);
    });
    if (!new URLSearchParams(location.search).has("preview")) return () => cancelAnimationFrame(readyFrame);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0, last = 0, position = 0, direction = 1, pauseUntil = 0;
    let visible = true;
    let target: Element | null = null, axis: "x" | "y" = "y", nextScan = 0;

    // Most studies scroll the document; a few use their own vertical or horizontal panel.
    const findScrollArea = () => {
      const root = document.scrollingElement;
      let best: Element | null = root;
      let bestAxis: "x" | "y" = "y";
      let distance = root ? root.scrollHeight - root.clientHeight : 0;
      for (const element of document.querySelectorAll(".style-study *")) {
        const style = getComputedStyle(element);
        const vertical = element.scrollHeight - element.clientHeight;
        const horizontal = element.scrollWidth - element.clientWidth;
        if (element.clientWidth < 200 || element.clientHeight < 160) continue;
        if (/(auto|scroll)/.test(style.overflowY) && vertical > distance + 20) {
          best = element; bestAxis = "y"; distance = vertical;
        }
        if (/(auto|scroll)/.test(style.overflowX) && horizontal > distance + 20) {
          best = element; bestAxis = "x"; distance = horizontal;
        }
      }
      if (target !== best || axis !== bestAxis) {
        target = best; axis = bestAxis;
        position = target ? (axis === "y" ? target.scrollTop : target.scrollLeft) : 0;
        direction = 1; pauseUntil = 0;
      }
    };
    const tick = (now: number) => {
      if (document.hidden || !visible || reduced.matches) { frame = 0; last = 0; return; }
      if (now >= nextScan) { findScrollArea(); nextScan = now + 1500; }
      const delta = last ? Math.min(now - last, 50) : 0;
      last = now;
      if (target && now >= pauseUntil) {
        const max = axis === "y" ? target.scrollHeight - target.clientHeight : target.scrollWidth - target.clientWidth;
        if (max > 1) {
          position = Math.max(0, Math.min(max, position + delta * 0.075 * direction));
          if (axis === "y") target.scrollTop = position; else target.scrollLeft = position;
          if (position >= max || position <= 0) { direction *= -1; pauseUntil = now + 1000; }
        }
      }
      frame = requestAnimationFrame(tick);
    };
    const sync = () => {
      if (document.hidden || !visible || reduced.matches) {
        cancelAnimationFrame(frame); frame = 0; last = 0;
      } else if (!frame) {
        frame = requestAnimationFrame(tick);
      }
    };
    const receive = (event: MessageEvent) => {
      if (event.origin === location.origin && event.source === parent && event.data?.type === "style-preview-visibility") {
        visible = event.data.active === true; sync();
      }
    };
    addEventListener("message", receive);
    document.addEventListener("visibilitychange", sync);
    reduced.addEventListener("change", sync);
    sync();
    return () => {
      cancelAnimationFrame(readyFrame); cancelAnimationFrame(frame);
      removeEventListener("message", receive);
      document.removeEventListener("visibilitychange", sync);
      reduced.removeEventListener("change", sync);
    };
  }, [id, study]);
  if (!study) return <div role="alert">This style study could not be found.</div>;
  const Study = study.component;
  const thumbnail = new URLSearchParams(location.search).has("preview");
  return <div className="style-study" data-study={study.id} style={{ "--study-accent": study.palette[2]?.hex || "#7857b5" } as CSSProperties}><Study onBackToGallery={thumbnail || new URLSearchParams(location.search).has("embedded") ? undefined : onBack} /></div>;
}
