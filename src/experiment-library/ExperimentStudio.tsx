import { useEffect, useMemo, useRef, useState } from 'react';
import catalog from '../../vendor/design-library/src/library-catalog.json';
import './experiment-studio.css';
import propNames from './prop-names.json';

type Kind = 'motion' | 'svg';
type Control = {id:string; label:string; type:string; min?:number; max?:number; step?:number; options?:string[]; default?:unknown};
type Context = 'stage' | 'studio' | 'product' | 'editorial' | 'portfolio' | 'shop';
const contexts: {id:Context; title:string; label:string; headline:string; description:string}[] = [
  {id:'stage', title:'Stage', label:'Standalone', headline:'', description:''},
  {id:'studio', title:'Studio', label:'Creative agency', headline:'Ideas that move people.', description:'A creative studio making thoughtful work for a world in motion.'},
  {id:'product', title:'Product', label:'Digital product', headline:'Make room for better work.', description:'A little more clarity for everything you want to create.'},
  {id:'editorial', title:'Journal', label:'Editorial', headline:'A closer look at the world.', description:'Stories, ideas and the details that deserve your attention.'},
  {id:'portfolio', title:'Portfolio', label:'Personal site', headline:'Making ideas feel alive.', description:'Selected work and experiments by an independent creative.'},
  {id:'shop', title:'Shop', label:'Product story', headline:'Objects with a point of view.', description:'A collection of considered things for everyday life.'},
];
type Metadata = {controlsSchema?:Control[]; defaultControls?:Record<string, unknown>; reactUsage?:string; codeSample?:string; a11yNote?:string; perfNote?:string};
const lists = { motion: catalog.entries.filter(entry => entry.kind === 'motion'), svg: catalog.entries.filter(entry => entry.kind === 'svg') };

export default function ExperimentStudio({kind}: {kind:Kind}) {
  const items = lists[kind];
  const [selectedId, setSelectedId] = useState(items[0].originalId);
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [values, setValues] = useState<Record<string, unknown>>({});
  const [loaded, setLoaded] = useState(false);
  const [replay, setReplay] = useState(0);
  const [context, setContext] = useState<Context>('stage');
  const [copied, setCopied] = useState('');
  const frame = useRef<HTMLIFrameElement>(null);
  const active = items.find(item => item.originalId === selectedId) ?? items[0];
  const meta = active.metadata as Metadata;
  const knownProps = (propNames as Record<string, string[]>)[active.id];
  const controls = (meta.controlsSchema ?? []).filter(control => !knownProps || knownProps.includes(control.id));
  const categories = useMemo(() => [...new Set(items.map(item => item.category))].sort(), [items]);
  const filtered = useMemo(() => items.filter(item => (category === 'all' || item.category === category) && `${item.name} ${item.description} ${item.category} ${item.tags.join(' ')}`.toLowerCase().includes(query.toLowerCase().trim())), [items, category, query]);
  useEffect(() => { setValues({...meta.defaultControls}); setCopied(''); }, [selectedId]);
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin === location.origin && event.source === frame.current?.contentWindow && event.data?.type === 'patchwork-experiment-ready' && event.data.id === selectedId) setLoaded(true);
    };
    addEventListener('message', receive);
    return () => removeEventListener('message', receive);
  }, [selectedId]);
  useEffect(() => {
    if (loaded) frame.current?.contentWindow?.postMessage({type:'patchwork-experiment-controls', id:selectedId, values}, location.origin);
  }, [loaded, selectedId, values]);
  const choose = (id:string) => { if (id === selectedId) return; setLoaded(false); setSelectedId(id); };
  async function copy() {
    try { await navigator.clipboard.writeText(meta.reactUsage || meta.codeSample || ''); setCopied('Code copied'); }
    catch { setCopied('Could not copy. Select the code below to copy it.'); }
  }
  return <div className="experiment-studio">
    <aside className="experiment-picker" aria-label={`${kind === 'motion' ? 'Motion' : 'SVG'} collection`}>
      <div className="experiment-picker-head"><div><span className="exp-kicker">THE {kind === 'motion' ? 'MOTION' : 'SVG'} COLLECTION</span><h1>{kind === 'motion' ? 'Made to move.' : 'Lines with life.'}</h1><p>Choose an experiment to explore.</p></div><span className="experiment-total">{items.length}</span></div>
      <label className="experiment-search"><span aria-hidden="true">⌕</span><input aria-label="Search experiments" placeholder="Search experiments" value={query} onChange={event => setQuery(event.target.value)} /></label>
      <label className="experiment-filter"><span>Explore by type</span><select value={category} onChange={event => setCategory(event.target.value)}><option value="all">All types</option>{categories.map(value => <option key={value}>{value}</option>)}</select></label>
      <div className="experiment-list-heading"><span>THE EXPERIMENTS</span><span>{filtered.length} RESULTS</span></div>
      <div className="experiment-list">{filtered.length ? filtered.map((item, i) => <button className="experiment-option" type="button" key={item.id} aria-pressed={item.originalId === active.originalId} onClick={() => choose(item.originalId)}><span className={`experiment-symbol ${kind}`} aria-hidden="true">{kind === 'motion' ? ['◒','✳','≈','◌','↗'][i % 5] : ['✳','◌','⌁','◒','◇'][i % 5]}</span><span className="experiment-option-info"><strong>{item.name}</strong><small>{item.category}</small></span><span className="experiment-check" aria-hidden="true">{item.originalId === active.originalId ? '✓' : '↗'}</span></button>) : <p className="experiment-empty">No experiments match. Try another search or type.</p>}</div>
    </aside>
    <main className="experiment-workspace">
      <header className="experiment-heading"><div><span className="exp-kicker">{kind === 'motion' ? 'A LITTLE MOTION EXPERIMENT' : 'A LITTLE VECTOR EXPERIMENT'}</span><h2>{kind === 'motion' ? 'Find your movement.' : 'See what lines can do.'}</h2><p>Pick a piece, play with its settings, and see it come alive.</p></div><div className="experiment-count"><span>THE COLLECTION</span><strong>{items.length} experiments</strong><small>Made to explore</small></div></header>
      <div className="experiment-current"><div><span className="exp-kicker">NOW PLAYING / {active.category.toUpperCase()}</span><h3>{active.name}</h3><p>{active.description}</p></div><button type="button" onClick={() => {setLoaded(false); setReplay(value => value + 1);}}>↻ <span>Replay</span></button></div>
      <div className="exp-context-picker"><div><span className="exp-kicker">CHOOSE A VIEW</span><p>See it on its own or in a sample website.</p></div><div className="exp-context-list" aria-label="Experiment preview layouts">{contexts.map(item => <button type="button" key={item.id} aria-pressed={context === item.id} onClick={() => setContext(item.id)}><strong>{item.title}</strong><span>{item.label}</span></button>)}</div></div>
      <div className="experiment-stage-bar"><span><i /> LIVE PREVIEW</span><span>INTERACT WITH THE STAGE</span></div>
      <div className={`experiment-stage ${context !== 'stage' ? `has-context context-${context}` : ''}`}>
        {context !== 'stage' && <div className="exp-sample-nav"><strong>{context === 'studio' ? 'GOODFORM.' : context === 'product' ? '◒ orbit' : context === 'editorial' ? 'the common thread' : context === 'portfolio' ? 'MIRA / WU' : 'tandem.'}</strong><span>Home &nbsp;&nbsp; / &nbsp;&nbsp; About &nbsp;&nbsp; / &nbsp;&nbsp; Explore</span><small>SAMPLE WEBSITE</small></div>}
        <div className="exp-sample-body">{context !== 'stage' && <div className="exp-sample-copy"><span>{contexts.find(item => item.id === context)?.label.toUpperCase()} / AN EXPERIMENT IN MOTION</span><h4>{contexts.find(item => item.id === context)?.headline}</h4><p>{contexts.find(item => item.id === context)?.description}</p><span className="exp-sample-link">DISCOVER MORE ↗</span></div>}<div className="exp-frame-wrap"><iframe key={`${kind}-${selectedId}-${replay}`} ref={frame} title={`${active.name} live preview`} src={`/design-library/index.html#stage/${kind}/${encodeURIComponent(active.originalId)}`} /></div></div>
      </div>
      <div className="experiment-inspector"><div className="experiment-inspector-heading"><div><span className="exp-kicker">MAKE IT YOURS</span><h3>Play with the details.</h3><p>Adjust the available settings and watch the preview change.</p></div><button type="button" onClick={() => setValues({...meta.defaultControls})}>Reset settings ↺</button></div>
        {controls.length ? <div className="experiment-controls">{controls.map(control => <label key={control.id}><span>{control.label}</span>{control.type === 'boolean' ? <input type="checkbox" checked={Boolean(values[control.id] ?? control.default)} onChange={event => setValues(current => ({...current,[control.id]:event.target.checked}))} /> : control.type === 'select' ? <select value={String(values[control.id] ?? control.default ?? '')} onChange={event => setValues(current => ({...current,[control.id]:event.target.value}))}>{control.options?.map(option => <option key={option}>{option}</option>)}</select> : control.type === 'number' ? <div className="exp-range"><input type="range" min={control.min} max={control.max} step={control.step ?? 1} value={Number(values[control.id] ?? control.default ?? 0)} onChange={event => setValues(current => ({...current,[control.id]:Number(event.target.value)}))} /><output>{String(values[control.id] ?? control.default ?? '')}</output></div> : <input type={control.type === 'color' ? 'color' : 'text'} value={String(values[control.id] ?? control.default ?? '')} onChange={event => setValues(current => ({...current,[control.id]:event.target.value}))} />}</label>)}</div> : <p className="experiment-empty">This experiment has no adjustable settings.</p>}
        {(meta.reactUsage || meta.codeSample) && <details className="experiment-code"><summary>View React usage <span>+</span></summary><pre><code>{meta.reactUsage || meta.codeSample}</code></pre><button type="button" onClick={() => void copy()}>Copy code</button><span role="status">{copied}</span><p>This is a usage example. The component and its dependencies are available in the Design Library source download.</p></details>}
      </div>
    </main>
  </div>;
}
