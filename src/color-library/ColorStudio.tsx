import { useMemo, useState, type CSSProperties } from 'react';
import { palettesBatch1 } from '../../vendor/design-library/src/color-lab/data/palettes-batch1';
import { palettesBatch2 } from '../../vendor/design-library/src/color-lab/data/palettes-batch2';
import { palettesBatch3 } from '../../vendor/design-library/src/color-lab/data/palettes-batch3';
import './color-studio.css';
import { extraPalettes } from './extra-palettes';
import SampleTemplate, { examples, type ExampleId } from './SampleTemplates';

export const palettes = [...palettesBatch1, ...palettesBatch2, ...palettesBatch3, ...extraPalettes];
type Page = 'Home' | 'Journal' | 'About';
const pages: Page[] = ['Home', 'Journal', 'About'];

export default function ColorStudio() {
  const [selectedId, setSelectedId] = useState(palettes.find((p) => p.id === 'minimalist-subtle-stone')?.id ?? palettes[0].id);
  const [query, setQuery] = useState('');
  const [family, setFamily] = useState('all');
  const [page, setPage] = useState<Page>('Home');
  const [example, setExample] = useState<ExampleId>('studio');
  const [copied, setCopied] = useState('');
  const selected = palettes.find((p) => p.id === selectedId) ?? palettes[0];
  const families = useMemo(() => [...new Set(palettes.map((p) => p.family))], []);
  const filtered = useMemo(() => palettes.filter((p) => (family === 'all' || (family === 'new' ? p.tags.includes('new') : p.family === family)) && `${p.name} ${p.family} ${p.tags.join(' ')} ${p.mood.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim())), [query, family]);
  const t = selected.tokens;
  const theme = {
    '--sample-bg': t.background, '--sample-surface': t.surface, '--sample-raised': t.surfaceElevated,
    '--sample-ink': t.textPrimary, '--sample-muted': t.textSecondary, '--sample-border': t.border,
    '--sample-primary': t.primary, '--sample-primary-text': t.primaryForeground,
    '--sample-accent': t.accent, '--sample-accent-text': t.accentForeground,
    '--sample-button': t.buttonPrimary, '--sample-button-text': t.buttonPrimaryText,
  } as CSSProperties;
  const colors = [
    ['Background', t.background], ['Surface', t.surface], ['Text', t.textPrimary],
    ['Primary', t.primary], ['Accent', t.accent],
  ];
  async function copyColor(hex: string) {
    try { await navigator.clipboard.writeText(hex); setCopied(`${hex} copied`); }
    catch { setCopied(`Could not copy ${hex}. Select the hex value to copy it.`); }
  }
  return <div className="color-studio">
    <aside className="color-picker" aria-label="Palette collection">
      <div className="color-picker-head"><div><span className="color-kicker">THE COLOR COLLECTION</span><h1>Find your colors<span>.</span></h1><p>Choose a palette and see it come to life.</p></div><span className="color-total">{palettes.length}</span></div>
      <label className="color-search"><span aria-hidden="true">⌕</span><input aria-label="Search palettes" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search palettes or moods" /></label>
      <label className="color-filter"><span>Explore by style</span><select value={family} onChange={(e) => setFamily(e.target.value)}><option value="all">All styles</option><option value="new">New palettes</option>{families.map((item) => <option key={item} value={item}>{item}</option>)}</select></label>
      <div className="color-list-heading"><span>THE PALETTES</span><span>{filtered.length} {filtered.length === 1 ? 'PALETTE' : 'PALETTES'}</span></div>
      <div className="color-list">{filtered.length ? filtered.map((p) => <button type="button" className="color-option" aria-pressed={p.id === selected.id} key={p.id} onClick={() => { setSelectedId(p.id); setCopied(''); }}><span className="color-option-swatches" aria-hidden="true">{[p.tokens.background, p.tokens.surfaceElevated, p.tokens.primary, p.tokens.secondary, p.tokens.accent].map((color, i) => <i key={i} style={{background: color}} />)}</span><span className="color-option-info"><strong>{p.name}</strong><small>{p.style} · {p.theme}</small></span><span className="color-selected" aria-hidden="true">{p.id === selected.id ? '✓' : '↗'}</span></button>) : <p className="color-empty">No palettes match that search. Try a different word or style.</p>}</div>
    </aside>
    <main className="color-workspace">
      <header className="color-workspace-head"><div><span className="color-kicker">A LITTLE COLOR EXPERIMENT</span><h2>See the possibilities.</h2><p>A sample website, made new with every palette.</p></div><div className="color-current"><span>NOW SHOWING</span><strong>{selected.name}</strong><small>{selected.style} / {selected.theme}</small></div></header>
      <div className="example-picker"><div><span className="color-kicker">CHOOSE A WEBSITE</span><p>See the same colors in different designs.</p></div><div className="example-picker-list" aria-label="Sample website templates">{examples.map((item) => <button type="button" key={item.id} aria-pressed={example === item.id} onClick={() => setExample(item.id)}><strong>{item.name}</strong><span>{item.description}</span></button>)}</div></div>
      <div className="color-preview-bar"><div><span className="color-live-dot" /> LIVE PREVIEW <span className="color-preview-caption">/ a sample website</span></div><span className="color-preview-note">Select a palette to change the whole site</span></div>
      <div className="color-canvas"><div className="sample-site" style={theme}>
        {example !== 'studio' ? <SampleTemplate key={example} id={example} /> : <>
        <nav className="sample-nav"><button type="button" className="sample-logo" onClick={() => setPage('Home')} aria-label="Sample website home"><span>✳</span> goodform<span className="sample-period">.</span></button><div className="sample-nav-links">{pages.map((name) => <button type="button" key={name} aria-current={page === name ? 'page' : undefined} onClick={() => setPage(name)}>{name}</button>)}</div><button type="button" className="sample-contact" onClick={() => setPage('About')}>Get in touch <span>↗</span></button></nav>
        {page === 'Home' && <><section className="sample-hero"><div className="sample-hero-copy"><p className="sample-eyebrow">A CREATIVE STUDIO FOR GOOD IDEAS</p><h3>Make room for <em>better things.</em></h3><p>Thoughtful design for the ideas you can’t stop thinking about. Made with care, from the first sketch to the finishing touch.</p><button type="button" className="sample-primary" onClick={() => setPage('Journal')}>Explore our work <span>↗</span></button></div><div className="sample-art" aria-hidden="true"><div className="sample-art-card"><span>FORM<br/>FOLLOWS<br/><i>feeling.</i></span><div className="sample-art-circle">✳</div><small>GOOD THINGS TAKE SHAPE HERE</small></div><span className="sample-art-caption">A LITTLE MORE CONSIDERED <b>✳</b></span></div></section><section className="sample-feature"><div><span className="sample-eyebrow">WHAT WE BELIEVE</span><h4>Good ideas deserve a good home.</h4></div><p>We bring strategy, identity and digital experiences together to make something that feels unmistakably yours.</p><button type="button" onClick={() => setPage('About')}>A little about us ↗</button></section></>}
        {page === 'Journal' && <section className="sample-inner"><p className="sample-eyebrow">NOTES FROM THE STUDIO</p><h3>Ideas worth<br/><em>spending time with.</em></h3><p>Stories, sketches and small observations from the work we love.</p><div className="sample-stories"><article><div className="sample-story-art art-one">✳</div><small>PROCESS · 6 MIN READ</small><h4>Making space for a new point of view.</h4></article><article><div className="sample-story-art art-two">Aa</div><small>DESIGN · 4 MIN READ</small><h4>A little more feeling, a little less noise.</h4></article></div></section>}
        {page === 'About' && <section className="sample-inner sample-about"><p className="sample-eyebrow">A LITTLE ABOUT US</p><h3>Good work starts<br/><em>with good people.</em></h3><p>We’re a small creative studio with a big belief: the best things are made together, with curiosity and care.</p><div className="sample-about-block"><span>✳</span><div><small>OUR APPROACH</small><h4>Thoughtful by nature.<br/>Playful by design.</h4><p>We work closely with people who want to make something meaningful, useful and a little unexpected.</p></div></div></section>}
        <footer className="sample-footer"><b>goodform<span>.</span></b><span>Made for good ideas, wherever they begin.</span><button type="button" onClick={() => setPage('Home')}>Back to top ↑</button></footer></>}
      </div></div>
      <div className="color-details"><div className="color-details-title"><span className="color-kicker">THE INGREDIENTS</span><h3>{selected.name}</h3><p>{selected.description}</p></div><div className="color-chip-list">{colors.map(([label, hex]) => <button type="button" key={label} onClick={() => void copyColor(hex)} title={`Copy ${label} ${hex}`}><i style={{background: hex}} /><span>{label}<strong>{hex.toUpperCase()}</strong></span><b aria-hidden="true">↗</b></button>)}</div><p className="color-copy-status" role="status">{copied || 'Click a color to copy its hex code.'}</p></div>
    </main>
  </div>;
}
