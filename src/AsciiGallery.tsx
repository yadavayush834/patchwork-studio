import { useMemo, useState } from "react";
import { X, ArrowUpRight, Download, Pause, Play, Sparkles } from "lucide-react";
import { asciiBackgrounds, createProject, defaultAscii } from "./catalog";
import type { Background } from "./types";
import Preview from "./Preview";
interface Props {
  onClose: () => void;
  onUse: (background: Background) => void;
  hasProject: boolean;
}
export default function AsciiGallery({ onClose, onUse, hasProject }: Props) {
  const [index, setIndex] = useState(0),
    [paused, setPaused] = useState(false);
  const active = asciiBackgrounds[index];
  const project = useMemo(() => {
    const p = createProject("terminal");
    p.sections = p.sections.slice(0, 1);
    p.sections[0].background = active.id;
    p.sections[0].ascii = { ...defaultAscii(active), intensity: 100 };
    p.sections[0].elements = [];
    return p;
  }, [active]);
  return (
    <div
      className="modal-backdrop ascii-gallery-backdrop"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="ascii-gallery"
        role="dialog"
        aria-modal="true"
        aria-labelledby="ascii-gallery-title"
      >
        <header>
          <span className="ascii-gallery-brand">
            <Sparkles size={14} />
            PATCHWORK / MOTION STUDIES
          </span>
          <button
            className="icon-button"
            aria-label="Close ASCII gallery"
            onClick={onClose}
          >
            <X size={19} />
          </button>
        </header>
        <div className="ascii-gallery-intro">
          <div>
            <span className="eyebrow">
              AN ENTIRE WORLD. ONE CHARACTER AT A TIME.
            </span>
            <h2 id="ascii-gallery-title">A little life between the letters.</h2>
          </div>
          <p>
            Living backgrounds, drawn entirely in ASCII.
            <br />
            {active.scene==='sharks'?'Move your cursor. The ocean reacts.':'Slow motion. A little atmosphere.'}
          </p>
        </div>
        <div className="ascii-gallery-stage">
          <Preview
            project={project}
            artOnly
            preview
            reduced={paused}
            width={1080}
          />
          <span className="ascii-live-badge">
            <i />
            {paused ? "STILL FRAME" : "LIVE ASCII"}
          </span>
          <button
            className="ascii-pause"
            aria-label={paused ? "Play ASCII preview" : "Pause ASCII preview"}
            onClick={() => setPaused(!paused)}
          >
            {paused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <span className="ascii-stage-caption">
            {String(index + 1).padStart(2, "0")} / {active.scene?.toUpperCase()}
            <span>A LIVING CHARACTER FIELD.</span>
          </span>
        </div>
        <div
          className="ascii-scene-tabs"
          role="tablist"
          aria-label="ASCII scenes"
          onKeyDown={e=>{let next=index;if(e.key==='ArrowRight')next=(index+1)%4;else if(e.key==='ArrowLeft')next=(index+3)%4;else if(e.key==='Home')next=0;else if(e.key==='End')next=3;else return;e.preventDefault();setIndex(next);e.currentTarget.querySelectorAll('button')[next]?.focus()}}
        >
          {asciiBackgrounds.map((b, i) => (
            <button
              key={b.id}
              role="tab"
              aria-selected={index === i}
              tabIndex={index===i?0:-1}
              onClick={() => setIndex(i)}
            >
              <img src={b.preview} alt="" />
              <div>
                <span>STUDY {String(i + 1).padStart(2, "0")}</span>
                <strong>{b.name}</strong>
              </div>
              {index === i && <i />}
            </button>
          ))}
        </div>
        <footer>
          <div>
            <h3>{active.name}</h3>
            <p>{active.description}</p>
            <small>
              {active.scene === "sharks"
                ? "Built with stackedlol/ascii-sharks · MIT"
                : "An original Patchwork motion study · CC0"}{" "}
              · Live canvas + WebM loop
            </small>
          </div>
          <div className="ascii-gallery-actions">
            <a
              className="ascii-download"
              href={active.source}
              download={`${active.name.toLowerCase().replaceAll(" ", "-")}.webm`}
            >
              <Download size={15} />
              Video loop
            </a>
            <button className="primary" onClick={() => onUse(active)}>
              {hasProject ? "Use this background" : "Make a site with this"}
              <ArrowUpRight size={16} />
            </button>
          </div>
        </footer>
      </div>
    </div>
  );
}
