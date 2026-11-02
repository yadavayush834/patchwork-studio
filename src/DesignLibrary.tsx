import { useEffect, useRef, useState } from "react";
import "./design-library.css";
import TemplateStudio from "./template-library/TemplateStudio";
export default function DesignLibrary({ onClose }: { onClose: () => void }) {
  const root = useRef<HTMLDivElement>(null);
  const [section, setSection] = useState(() => {
    const requested = new URLSearchParams(location.search).get("library");
    return requested === "styles" ? requested : "templates";
  });
  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    addEventListener("keydown", escape);
    return () => removeEventListener("keydown", escape);
  }, [onClose]);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const siblings = [...(root.current?.parentElement?.children || [])].filter(
      (el) => el !== root.current,
    ) as HTMLElement[];
    const states = siblings.map((el) => ({
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
    root.current?.querySelector("button")?.focus();
    return () => {
      siblings.forEach((el, i) =>
        Object.assign(el, { inert: states[i].inert, hidden: states[i].hidden }),
      );
      siblings.forEach((el, i) => (el.style.display = states[i].display));
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <div
      ref={root}
      className="design-library-workspace"
      role="dialog"
      aria-modal="true"
      aria-label="Design Library"
    >
      <div className="design-library-toolbar">
        <button onClick={onClose}>← Back to Patchwork</button>
        <span>
          DESIGN LIBRARY <small>Your templates, tools & experiments</small>
        </span>
      </div>
      <nav className="design-library-tabs" aria-label="Library collections">
        {[
          ["templates", "Templates"],
          ["styles", "Style studies"],
          ["interfaces", "Interface studies"],
          ["colors", "Color palettes"],
          ["motion", "Motion experiments"],
          ["svg", "SVG experiments"],
          ["primitives", "UI primitives"],
        ].map(([id, label]) => (
          <button
            key={id}
            aria-pressed={section === id}
            onClick={() => setSection(id)}
          >
            {label}
          </button>
        ))}
      </nav>
      {section === "templates" ? (
        <TemplateStudio />
      ) : (
        <iframe
          key={section}
          title="Design Library collections"
          src={`/design-library/index.html#${section}`}
        />
      )}
    </div>
  );
}
