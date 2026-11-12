import "./shell.css";
import "./page.css";
import { openBrandKit } from "./brand";
import { COLLECTIONS, type CollectionKey } from "./collections";

/** The same Patchwork top bar the vanilla collection pages use (shellBar), for the React pages. */
export default function ShellBar({ active, onBrand }: { active: CollectionKey | ""; onBrand?: () => void }) {
  return (
    <header className="pw-bar">
      <a className="pw-bar-logo" href="/" aria-label="Patchwork home">
        <span className="pw-mark" aria-hidden="true"><i /><i /><i /><i /></span>patchwork
      </a>
      <nav aria-label="Collections">
        {COLLECTIONS.map((c) => (
          <a key={c.key} href={c.href} aria-current={c.key === active ? "page" : undefined}>{c.label}</a>
        ))}
      </nav>
      <button type="button" className="pw-bar-brand" onClick={() => openBrandKit(onBrand)}>
        <span aria-hidden="true" className="pw-bar-swatch" />Brand kit
      </button>
    </header>
  );
}

/** A collection page heading: Bricolage headline, serif italic accent, a short lede and a strip of pixel patches. */
export function PageHead({ title, accent, lede, children }: { title: string; accent: string; lede: React.ReactNode; children?: React.ReactNode }) {
  return (
    <header className="pw-head">
      <div className="pw-head-copy">
        <h1>{title}, <em>{accent}</em></h1>
        <p>{lede}</p>
      </div>
      {children}
      <PatchStrip />
    </header>
  );
}

/** Twelve little pixel patches that blink in turn along the heading's stitched edge. */
export function PatchStrip() {
  return (
    <span className="pw-patches" aria-hidden="true">
      {Array.from({ length: 12 }, (_, i) => <i key={i} style={{ "--i": i } as React.CSSProperties} />)}
    </span>
  );
}
