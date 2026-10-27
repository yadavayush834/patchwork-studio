import { useEffect, useRef, useState } from "react";
import { renderSite } from "./render";
import { siteRuntime } from "./site-runtime";
import baseCss from "./site.css?raw";
import asciiCss from "./ascii.css?raw";
const css = baseCss + asciiCss;
import type { Project } from "./types";
interface Props {
  project: Project;
  assets?: Record<string, string>;
  width?: number;
  selected?: string;
  element?: string;
  reduced?: boolean;
  focus?: boolean;
  preview?: boolean;
  thumbnail?: boolean;
  artOnly?: boolean;
  onSelect?: (section: string, element?: string) => void;
  onMove?: (section: string, element: string, x: number, y: number) => void;
}
export default function Preview(props: Props) {
  const {
    project,
    assets = {},
    width = 1080,
    selected,
    element,
    reduced = false,
    preview = false,
    thumbnail = false,
  } = props;
  const host = useRef<HTMLDivElement>(null),
    frame = useRef<HTMLIFrameElement>(null),
    scroll = useRef(0),
    previousSelection = useRef("");
  const latest = useRef(props);
  latest.current = props;
  const [space, setSpace] = useState(900);
  useEffect(() => {
    if (!host.current) return;
    const ro = new ResizeObserver((e) => setSpace(e[0].contentRect.width));
    ro.observe(host.current);
    return () => ro.disconnect();
  }, []);
  const scale = thumbnail ? space / 1080 : Math.min(1, (space - 56) / width);
  const actual = Math.max(0.18, scale);
  const html = renderSite(project, {
    assetUrls: assets,
    selectedSection: preview || thumbnail ? undefined : selected,
    selectedElement: preview || thumbnail ? undefined : element,
    reducedMotion: reduced || thumbnail,
    mobile: width <= 600 && !thumbnail,
  });
  const srcDoc = `<!doctype html><html><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><style>body{margin:0}html{scrollbar-width:thin;scrollbar-color:#b9b1ce transparent}${css}${props.artOnly ? ".pw-content,.pw-scene,.pw-ascii-scrim,.pw-ascii-dimmer{display:none}.pw-section{min-height:100vh;padding:0}.pw-ascii-canvas{opacity:1}html{overflow:hidden}" : ""}${props.focus ? ".pw-site a{outline:2px solid var(--accent);outline-offset:4px}" : ""}${!preview && !thumbnail ? ".pw-section:hover{outline:1px solid #795be688;outline-offset:-2px}.pw-selected{outline:2px solid #795be6!important;outline-offset:-2px}.pw-decor{cursor:grab}" : ""}</style></head><body>${html}${!thumbnail ? `<script>${siteRuntime}</script>` : ""}</body></html>`;
  function loaded() {
    const doc = frame.current?.contentDocument,
      win = frame.current?.contentWindow;
    if (!doc || !win) return;
    const changed = selected && selected !== previousSelection.current;
    previousSelection.current = selected || "";
    const target = changed
      ? [...doc.querySelectorAll<HTMLElement>("[data-section]")].find(
          (el) => el.dataset.section === selected,
        )
      : undefined;
    win.scrollTo(
      0,
      target && !preview && !thumbnail ? target.offsetTop : scroll.current,
    );
    win.addEventListener("scroll", () => (scroll.current = win.scrollY));
    if (preview || thumbnail) return;
    doc.addEventListener("click", (e) => {
      const target = e.target as HTMLElement;
      const section = target.closest<HTMLElement>("[data-section]");
      if (section) {
        e.preventDefault();
        latest.current.onSelect?.(
          section.dataset.section!,
          target.closest<HTMLElement>("[data-element]")?.dataset.element,
        );
      }
    });
    doc.addEventListener("pointerdown", (e) => {
      const target = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-element]",
      );
      const section = target?.closest<HTMLElement>("[data-section]");
      if (!target || !section) return;
      e.preventDefault();
      const rect = section.getBoundingClientRect();
      let moved = false,
        x = 0,
        y = 0;
      const move = (ev: PointerEvent) => {
        moved = true;
        x = Math.max(
          0,
          Math.min(100, ((ev.clientX - rect.left) / rect.width) * 100),
        );
        y = Math.max(
          0,
          Math.min(100, ((ev.clientY - rect.top) / rect.height) * 100),
        );
        target.style.left = x + "%";
        target.style.top = y + "%";
      };
      const up = () => {
        doc.removeEventListener("pointermove", move);
        doc.removeEventListener("pointerup", up);
        if (moved)
          latest.current.onMove?.(
            section.dataset.section!,
            target.dataset.element!,
            Math.round(x),
            Math.round(y),
          );
        else
          latest.current.onSelect?.(
            section.dataset.section!,
            target.dataset.element,
          );
      };
      doc.addEventListener("pointermove", move);
      doc.addEventListener("pointerup", up);
    });
  }
  return (
    <div ref={host} className={thumbnail ? "thumbnail-host" : "preview-host"}>
      <div
        className="canvas-size"
        style={{
          width: 1080 * (thumbnail ? actual : 0) || width * actual,
          height: thumbnail ? 230 : "100%",
        }}
      >
        <iframe
          ref={frame}
          title={thumbnail ? `${project.name} preview` : "Website canvas"}
          sandbox={thumbnail ? "allow-same-origin" : undefined}
          srcDoc={srcDoc}
          onLoad={loaded}
          style={{
            width: thumbnail ? 1080 : width,
            height: thumbnail ? 780 : `${100 / actual}%`,
            transform: `scale(${actual})`,
            pointerEvents: thumbnail ? "none" : undefined,
          }}
          tabIndex={thumbnail ? -1 : 0}
        />
      </div>
    </div>
  );
}
