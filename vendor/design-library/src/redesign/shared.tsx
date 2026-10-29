import { useEffect, useRef, type ReactNode } from "react";
import "./redesign.css";
export function Arrow({ diagonal = false }: { diagonal?: boolean }) {
  return <span aria-hidden="true">{diagonal ? "↗" : "↗"}</span>;
}
export function Modal({
  title,
  onClose,
  children,
}: {
  title: string;
  onClose: () => void;
  children: ReactNode;
}) {
  const root = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    root.current?.querySelector<HTMLElement>("button,input")?.focus();
    return () => {
      document.body.style.overflow = overflow;
      previous?.focus();
    };
  }, []);
  return (
    <div
      className="rd-modal"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        className="rd-modal-card"
        role="dialog"
        aria-modal="true"
        aria-label={title}
        ref={root}
        onKeyDown={(e) => {
          if (e.key === "Escape") {
            e.stopPropagation();
            onClose();
          }
          if (e.key === "Tab") {
            const nodes = [
              ...root.current!.querySelectorAll<HTMLElement>(
                "button,input,select,textarea,a[href]",
              ),
            ].filter((el) => !el.hasAttribute("disabled"));
            if (e.shiftKey && document.activeElement === nodes[0]) {
              e.preventDefault();
              nodes.at(-1)?.focus();
            } else if (!e.shiftKey && document.activeElement === nodes.at(-1)) {
              e.preventDefault();
              nodes[0]?.focus();
            }
          }
        }}
      >
        <header>
          <span>{title}</span>
          <button aria-label="Close dialog" onClick={onClose}>
            ×
          </button>
        </header>
        {children}
      </div>
    </div>
  );
}
export function useChime() {
  const audio = useRef<AudioContext | null>(null);
  useEffect(
    () => () => {
      audio.current?.close();
    },
    [],
  );
  return (frequency = 440) => {
    const ctx = (audio.current ??= new AudioContext());
    if (ctx.state === "suspended") void ctx.resume();
    const gain = ctx.createGain(),
      osc = ctx.createOscillator();
    osc.type = "sine";
    osc.frequency.value = frequency;
    gain.gain.setValueAtTime(0.0001, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.12, ctx.currentTime + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.8);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + 1.85);
    osc.onended = () => {
      osc.disconnect();
      gain.disconnect();
    };
  };
}
export function Footer({ brand, note }: { brand: string; note: string }) {
  return (
    <footer className="rd-footer">
      <strong>{brand}</strong>
      <span>{note}</span>
      <a href="#top">Back to top ↑</a>
    </footer>
  );
}
