import { useEffect, useMemo, useRef, useState } from "react";
import { motionDocument } from "./document";
import { motionCardDocument } from "./card-preview-document";
import type { MotionConfig, MotionId } from "./catalog";

export default function MotionCardPreview({
  id,
  name,
  config,
  onStop,
}: {
  id: MotionId;
  name: string;
  config: MotionConfig;
  onStop: (id: MotionId) => void;
}) {
  const root = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLIFrameElement>(null);
  const [size, setSize] = useState({ width: 600, height: 666 }),
    [status, setStatus] = useState<"loading" | "ready" | "error">("loading");
  const documentHTML = useMemo(
    () =>
      motionCardDocument(id, motionDocument(id, config, true), location.origin),
    [id, config],
  );
  useEffect(() => {
    if (!root.current) return;
    const resize = new ResizeObserver(([entry]) =>
      setSize({
        width: entry.contentRect.width,
        height: entry.contentRect.height,
      }),
    );
    resize.observe(root.current);
    const intersection = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) onStop(id);
    });
    intersection.observe(root.current);
    return () => {
      resize.disconnect();
      intersection.disconnect();
    };
  }, [id, onStop]);
  useEffect(() => {
    setStatus("loading");
    const child = frame.current?.contentWindow;
    const timeout = setTimeout(() => setStatus("error"), 18000);
    const receive = (event: MessageEvent) => {
      if (
        event.source !== child ||
        event.origin !== location.origin ||
        event.data?.id !== id ||
        event.data.type !== "motion-ready"
      )
        return;
      clearTimeout(timeout);
      setStatus("ready");
      child?.postMessage({ type: "motion-card-start", id }, location.origin);
    };
    const visibility = () => {
      if (document.hidden) onStop(id);
    };
    addEventListener("message", receive);
    document.addEventListener("visibilitychange", visibility);
    return () => {
      clearTimeout(timeout);
      removeEventListener("message", receive);
      document.removeEventListener("visibilitychange", visibility);
      try {
        child?.dispatchEvent(new Event("pagehide"));
      } catch {
        /* The browsing context may already be gone. */
      }
    };
  }, [id, documentHTML, onStop]);
  const width = 1280,
    scale = size.width / width,
    height = Math.max(600, Math.round(size.height / Math.max(0.01, scale)));
  return (
    <div
      ref={root}
      className={`motion-card-live ${status === "ready" ? "is-ready" : ""}`}
      aria-hidden="true"
    >
      <iframe
        ref={frame}
        title={`${name} live gallery preview`}
        srcDoc={documentHTML}
        tabIndex={-1}
        sandbox="allow-scripts allow-same-origin"
        style={{ width, height, transform: `scale(${scale})` }}
      />
      <span className="motion-card-live-status">
        {status === "ready" ? (
          <>
            <i />
            Live preview
          </>
        ) : status === "error" ? (
          "Preview unavailable · Open site to explore"
        ) : (
          "Loading live preview…"
        )}
      </span>
    </div>
  );
}
