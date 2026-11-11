import { useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, Code2, Copy, Download, Expand, Monitor, Pause, Play, RotateCcw, Search, SlidersHorizontal, Smartphone, X } from 'lucide-react';
import { resources, sourceFor } from './resources';
import { defaults, documentHTML, embed, integrationNotes } from './portable';
import { resourceZip, saveFile } from './export';
import type { ResourceKind, Values } from './types';
import './resource-studio.css';
const collections = {
  motion: { title: 'Made to move.', italic: 'Built to respond.', description: 'Tactile interactions, considered timing, and motion with a purpose. Small systems that make an interface feel alive.', label: 'Motion experiments', mark: '↝', note: 'POINTER · KEYBOARD · SCROLL' },
  svg: { title: 'A little geometry.', italic: 'A different world.', description: 'Draw with parameters. Shape a landscape, reroute a signal, or find an unexpected form. Every composition stays vector.', label: 'SVG experiments', mark: '✳', note: 'PARAMETRIC · SCALABLE · EDITABLE' },
  primitives: { title: 'Useful by nature.', italic: 'Considered in detail.', description: 'The difficult bits of an interface, thought through. Real state, thoughtful keyboard behavior, and room for your own data.', label: 'UI primitives', mark: '⌘', note: 'REAL STATE · OPEN SOURCE · COMPOSABLE' },
};
function updateLocation(id: string | null) {
  const url = new URL(location.href);
  if (id) url.searchParams.set('resource', id); else url.searchParams.delete('resource');
  history.replaceState(history.state, '', url);
}
export default function ResourceStudio({ kind }: { kind: ResourceKind }) {
  const items = useMemo(() => resources.filter(r => r.kind === kind), [kind]);
  const [selected, setSelected] = useState(() => items.find(r => r.id === new URLSearchParams(location.search).get('resource'))?.id ?? null);
  const [query, setQuery] = useState(''), [category, setCategory] = useState('all');
  const [values, setValues] = useState<Values>(() => defaults(items.find(r => r.id === selected) ?? items[0]));
  const [viewport, setViewport] = useState('100%'), [ready, setReady] = useState(false), [replay, setReplay] = useState(0);
  const [panel, setPanel] = useState<'embed' | 'source' | 'guide' | 'events'>('embed');
  const [events, setEvents] = useState<{ name: string; data: unknown; time: string }[]>([]);
  const [notice, setNotice] = useState(''), [busy, setBusy] = useState(false), [full, setFull] = useState(false);
  const iframe = useRef<HTMLIFrameElement>(null), heading = useRef<HTMLHeadingElement>(null);
  const entry = items.find(r => r.id === selected), collection = collections[kind];
  const source = useMemo(() => entry ? sourceFor(entry) : '', [entry]);
  const preview = useMemo(() => entry ? documentHTML(entry, defaults(entry), source, true) : '', [entry, source]);
  const filtered = items.filter(r => (category === 'all' || r.category === category) && `${r.name} ${r.description} ${r.category}`.toLowerCase().includes(query.toLowerCase()));
  useEffect(() => { setReady(false); setEvents([]); setNotice(''); }, [selected, replay]);
  useEffect(() => {
    function receive(event: MessageEvent) {
      if (event.source !== iframe.current?.contentWindow || event.data?.namespace !== 'patchwork-resource' || event.data.id !== entry?.id) return;
      if (event.data.type === 'ready') setReady(true);
      if (event.data.type === 'event') setEvents(previous => [{ ...event.data.detail, time: new Date().toLocaleTimeString() }, ...previous].slice(0, 12));
      if (event.data.type === 'svg' && typeof event.data.detail === 'string' && entry?.kind === 'svg') {
        saveFile(new Blob([event.data.detail], { type: 'image/svg+xml' }), `${entry.id}.svg`);
        setNotice('Current artwork saved as editable SVG.');
      }
    }
    addEventListener('message', receive);
    return () => removeEventListener('message', receive);
  }, [entry]);
  useEffect(() => {
    if (ready && entry) iframe.current?.contentWindow?.postMessage({ namespace: 'patchwork-resource', id: entry.id, type: 'configure', values: { ...values, paused: !!values.paused, reduced: !!values.reduced } }, '*');
  }, [ready, values, entry]);
  useEffect(() => {
    if (!entry || ready) return;
    const timer = setTimeout(() => setNotice('Preview is taking longer than expected. Use Restart to try again.'), 8000);
    return () => clearTimeout(timer);
  }, [entry, ready, replay]);
  function open(id: string) {
    const next = items.find(r => r.id === id)!;
    setSelected(id); setValues(defaults(next)); setReplay(0); setPanel('embed'); setViewport('100%'); setFull(false); updateLocation(id);
    requestAnimationFrame(() => heading.current?.focus());
  }
  function close() { setSelected(null); setFull(false); updateLocation(null); }
  async function copy(text: string) {
    try { await navigator.clipboard.writeText(text); setNotice('Copied to clipboard.'); }
    catch { setNotice('Clipboard unavailable. Select the code below and copy it manually.'); }
  }
  async function download() {
    if (!entry) return;
    setBusy(true);
    try { saveFile(await resourceZip(entry, values), `${entry.id}.zip`); setNotice('Component downloaded. Unzip and open index.html to try it.'); }
    catch (error) { setNotice(`Download failed: ${error instanceof Error ? error.message : 'Please try again.'}`); }
    finally { setBusy(false); }
  }
  const code = entry ? panel === 'source' ? source : panel === 'guide' ? integrationNotes(entry, values) : `<script src="./component.js" defer></script>\n${embed(entry, values)}\n\n<!-- Listen to real interactions -->\n<script>\n  document.querySelector('${entry.tag}')\n    .addEventListener('${entry.events.split(':')[0]}', event => {\n      console.log(event.detail);\n    });\n</script>` : '';
  return <section className={`resource-studio ${entry ? 'is-open' : ''} ${full ? 'is-expanded' : ''}`} aria-label={collection.label}>
    {!entry ? <>
      <header className="rs-intro"><div><p className="rs-eyebrow">THE INTERACTION COLLECTION / {String(items.length).padStart(2, '0')} ORIGINALS</p><h1>{collection.title}<br /><em>{collection.italic}</em></h1><p className="rs-description">{collection.description}</p><div className="rs-promises"><span><Check size={12} /> No dependencies</span><span><Check size={12} /> Take the source</span><span><Check size={12} /> Make it yours</span></div></div><div className={`rs-emblem rs-emblem-${kind}`} aria-hidden="true"><span>{collection.mark}</span><i /><i /><small>PATCHWORK / FIELD NOTES<br />{collection.note}</small></div></header>
      <div className="rs-filterbar"><label className="rs-search"><Search size={16} /><input aria-label={`Search ${collection.label}`} value={query} onChange={e => setQuery(e.target.value)} placeholder="Find your next useful thing…" />{query && <button aria-label="Clear search" onClick={() => setQuery('')}><X size={14}/></button>}</label><select aria-label="Resource category" value={category} onChange={e => setCategory(e.target.value)}><option value="all">All disciplines</option>{[...new Set(items.map(r => r.category))].map(c => <option key={c}>{c}</option>)}</select><span>{String(filtered.length).padStart(2, '0')} / {String(items.length).padStart(2, '0')} RESOURCES</span></div>
      <div className="rs-grid">{filtered.map(r => <button className="rs-card" key={r.id} onClick={() => open(r.id)} aria-label={`Explore ${r.name}`}><div className="rs-cover"><img src={`/resource-covers/${r.id}.webp`} alt="" loading="lazy" /><span className="rs-card-index">{String(items.indexOf(r) + 1).padStart(2, '0')}</span><span className="rs-card-open"><ArrowRight size={19}/></span></div><div className="rs-card-info"><div className="rs-card-meta"><span>{r.category}</span><span>{kind === 'svg' ? 'SVG + COMPONENT' : 'HTML / CSS / JS'}</span></div><h2>{r.name}</h2><p>{r.description}</p><span className="rs-card-bottom">Explore the interaction <ArrowRight size={13}/></span></div></button>)}</div>
      {!filtered.length && <div className="rs-empty"><Search size={25}/><h2>No matching resources.</h2><p>Try a broader search or another discipline.</p><button onClick={() => {setQuery(''); setCategory('all');}}>Clear filters</button></div>}
      <footer className="rs-footer"><span>Small systems. Plenty of possibility.</span><span>ORIGINAL WORK / OPEN TO ADAPT</span></footer>
    </> : <>
      <header className="rs-detail-head"><button className="rs-back" onClick={close}><ArrowLeft size={15}/> All {collection.label.toLowerCase()}</button><div className="rs-detail-actions"><span>{String(items.indexOf(entry) + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span><button aria-label="Previous resource" disabled={items.indexOf(entry) === 0} onClick={() => open(items[items.indexOf(entry) - 1].id)}><ArrowLeft size={16}/></button><button aria-label="Next resource" disabled={items.indexOf(entry) === items.length - 1} onClick={() => open(items[items.indexOf(entry) + 1].id)}><ArrowRight size={16}/></button></div></header>
      <div className="rs-resource-heading"><div><p className="rs-eyebrow">{collection.label.toUpperCase()} / {entry.category.toUpperCase()}</p><h1 ref={heading} tabIndex={-1}>{entry.name}<span>.</span></h1><p>{entry.description}</p></div><button className="rs-download" onClick={download} disabled={busy}><Download size={16}/>{busy ? 'Preparing…' : 'Download component'}<small>.ZIP</small></button></div>
      <div className="rs-workspace"><div className="rs-preview-panel"><div className="rs-preview-toolbar"><span className="rs-live"><i/> LIVE PLAYGROUND</span><div className="rs-viewports" aria-label="Preview viewport"><button aria-label="Desktop viewport" aria-pressed={viewport === '100%'} onClick={() => setViewport('100%')}><Monitor size={15}/></button><button aria-label="Phone viewport" aria-pressed={viewport === '375px'} onClick={() => setViewport('375px')}><Smartphone size={15}/></button></div><div className="rs-preview-actions">{kind === 'motion' && <button aria-label={values.paused ? 'Resume motion' : 'Pause motion'} aria-pressed={!!values.paused} onClick={() => setValues(v => ({...v, paused: !v.paused}))}>{values.paused ? <Play size={14}/> : <Pause size={14}/>}</button>}<button aria-label="Restart preview" onClick={() => setReplay(v => v + 1)}><RotateCcw size={14}/></button><button aria-label={full ? 'Exit expanded view' : 'Expand playground'} aria-pressed={full} onClick={() => setFull(v => !v)}><Expand size={14}/></button></div></div><div className={`rs-stage ${values.theme === 'light' ? 'is-light' : ''}`}><iframe key={`${entry.id}-${replay}`} ref={iframe} title={`${entry.name} interactive playground`} style={{ width: viewport }} srcDoc={preview} sandbox="allow-scripts allow-same-origin allow-downloads" /></div><div className="rs-preview-foot"><span>{entry.interaction}</span><span>{viewport === '100%' ? 'RESPONSIVE' : '375 PX'}</span></div></div>
      <aside className="rs-inspector"><div className="rs-inspector-title"><SlidersHorizontal size={14}/><h2>Make it your own</h2><button aria-label="Reset controls" onClick={() => setValues(defaults(entry))}><RotateCcw size={13}/></button></div><div className="rs-controls">{entry.controls.map(control => <label className={`rs-control type-${control.type}`} key={control.id}><span>{control.label}{control.type === 'number' && <output>{values[control.id]}</output>}</span>{control.type === 'select' ? <select value={String(values[control.id])} onChange={e => setValues(v => ({...v, [control.id]: e.target.value}))}>{control.options?.map(o => <option key={o}>{o}</option>)}</select> : control.type === 'number' ? <input type="range" min={control.min} max={control.max} step={control.step} value={Number(values[control.id])} onChange={e => setValues(v => ({...v, [control.id]: Number(e.target.value)}))}/> : control.type === 'color' ? <div className="rs-color"><input type="color" value={String(values[control.id])} onChange={e => setValues(v => ({...v, [control.id]: e.target.value}))}/><code>{values[control.id]}</code></div> : <input type="text" maxLength={180} value={String(values[control.id])} onChange={e => setValues(v => ({...v, [control.id]: e.target.value}))}/>}</label>)}
      {kind === 'motion' && <label className="rs-check"><input type="checkbox" checked={!!values.reduced} onChange={e => setValues(v => ({...v, reduced:e.target.checked}))}/> Reduce motion</label>}
      </div><div className="rs-takeaway"><Code2 size={19}/><h3>Yours beyond this preview.</h3><p>One custom element. Isolated styles. Real events. Add your own data and put it to work.</p>{kind === 'svg' && <button disabled={!ready} onClick={() => iframe.current?.contentWindow?.postMessage({ namespace: 'patchwork-resource', id: entry.id, type: 'svg' }, '*')}><Download size={13}/> Save current SVG</button>}<button onClick={() => {setPanel('guide'); document.querySelector('.rs-code-panel')?.scrollIntoView({behavior:'smooth',block:'nearest'});}}>Integration guide <ArrowRight size={13}/></button></div></aside></div>
      <div role="status" className={`rs-notice ${notice ? 'visible' : ''}`}>{notice || (ready ? 'Preview ready. Every interaction below is live.' : 'Preparing playground…')}</div>
      <section className="rs-code-panel" aria-label="Source and integration"><div className="rs-code-toolbar"><div className="rs-code-tabs" role="tablist" aria-label="Integration resources">{(['embed','source','guide','events'] as const).map(tab => <button key={tab} role="tab" id={`rs-tab-${tab}`} aria-selected={panel === tab} aria-controls="rs-code-content" tabIndex={panel === tab ? 0 : -1} onKeyDown={e => {if(e.key === 'ArrowRight' || e.key === 'ArrowLeft'){e.preventDefault(); const tabs=['embed','source','guide','events'] as const;const next=tabs[(tabs.indexOf(tab)+(e.key === 'ArrowRight'?1:3))%4];setPanel(next);document.getElementById(`rs-tab-${next}`)?.focus();}}} onClick={() => setPanel(tab)}>{tab === 'embed' ? 'Quick start' : tab === 'source' ? 'Component source' : tab === 'guide' ? 'API & integration' : `Live events${events.length ? ` · ${events.length}` : ''}`}</button>)}</div><button onClick={() => panel === 'events' ? setEvents([]) : copy(code)}>{panel === 'events' ? <><X size={13}/> Clear</> : <><Copy size={13}/> Copy</>}</button></div><div role="tabpanel" id="rs-code-content" aria-labelledby={`rs-tab-${panel}`} tabIndex={0}>{panel === 'events' ? <div className="rs-events">{events.length ? events.map((event, i) => <div key={`${event.time}-${i}`}><span>{event.time}</span><b>{event.name}</b><code>{JSON.stringify(event.data, null, 2)}</code></div>) : <p>Interact with the component to inspect its real event payloads.</p>}</div> : <pre><code>{code}</code></pre>}</div></section>
      <footer className="rs-footer"><span>Designed to be taken apart. Built to be put to work.</span><button onClick={close}>Back to the collection <ArrowRight size={13}/></button></footer>
    </>}
  </section>;
}
