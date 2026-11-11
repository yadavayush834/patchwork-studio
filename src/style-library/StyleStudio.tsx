import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Bookmark, Check, Copy, Download, Maximize2, Monitor, Pause, Play, RotateCcw, Search, Smartphone, Tablet, X } from 'lucide-react';
import LiveStudy from './LiveStudy';
import { findStudies, studies, studyURL, type Study } from './catalog';
import './styles.css';
const favoriteKey = 'patchwork-design-library:favorites:v1';
function readSaved(): string[] {
  try { const value = JSON.parse(localStorage.getItem(favoriteKey) || '[]'); return Array.isArray(value) ? value.filter((id): id is string => typeof id === 'string') : []; } catch { return []; }
}
function locationStudy(id: string | null) {
  const url = new URL(location.href);
  if (id) url.searchParams.set('study', id); else url.searchParams.delete('study');
  history.replaceState(history.state, '', url);
}
function StudyCard({ study, live, onLive, onStop, onOpen, saved, onSave }: {
  study: Study; live: boolean; onLive: () => void; onStop: () => void; onOpen: () => void; saved: boolean; onSave: () => void;
}) {
  const root = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!live || !root.current) return;
    const observer = new IntersectionObserver(([entry]) => { if (!entry.isIntersecting) onStop(); });
    observer.observe(root.current);
    return () => observer.disconnect();
  }, [live, onStop]);
  return <article className="ss-card" ref={root}>
    <div className="ss-card-art" onMouseEnter={onLive} onMouseLeave={onStop}>
      <button className="ss-card-open" onClick={onOpen} aria-label={`Explore ${study.name}`}>
        <img src={`/design-library/style-study-covers/${study.id}.jpg`} alt={`${study.name} website in ${study.style.toLowerCase()}`} loading="lazy" width="1280" height="800" />
        <span className="ss-explore">Explore website <ArrowUpRight size={16}/></span>
      </button>
      {live && <LiveStudy study={study} thumbnail />}
      <button className="ss-live-toggle" aria-label={`${live ? 'Stop' : 'Start'} live preview of ${study.name}`} aria-pressed={live} onClick={live ? onStop : onLive}>{live ? <Pause size={13}/> : <Play size={13}/>}<span>{live ? 'Stop preview' : 'Live preview'}</span></button>
    </div>
    <div className="ss-card-copy"><div className="ss-card-title"><div><p>{study.style}</p><h2><button onClick={onOpen}>{study.name}</button></h2></div><button className="ss-save" aria-label={`${saved ? 'Unsave' : 'Save'} ${study.name}`} aria-pressed={saved} onClick={onSave}><Bookmark size={18} fill={saved ? 'currentColor' : 'none'}/></button></div><p className="ss-concept">{study.concept}</p><div className="ss-card-footer"><span>{study.category}</span><div className="ss-swatches" aria-label="Study colors">{study.colors.slice(0,4).map((color,i) => <span key={i} style={{background:color}} title={color}/>)}</div></div></div>
  </article>;
}
export default function StyleStudio() {
  const [selected, setSelected] = useState(() => studies.find(s => s.id === new URLSearchParams(location.search).get('study'))?.id ?? null);
  const [query, setQuery] = useState(''), [category, setCategory] = useState('all'), [savedOnly, setSavedOnly] = useState(false);
  const [saved, setSaved] = useState(readSaved), [liveId, setLiveId] = useState<string | null>(null);
  const [width, setWidth] = useState(1280), [reload, setReload] = useState(0), [expanded, setExpanded] = useState(false);
  const [notice, setNotice] = useState(''), [info, setInfo] = useState(true);
  const scroller = useRef<HTMLElement>(null), galleryPosition = useRef(0), lastCard = useRef('');
  const title = useRef<HTMLHeadingElement>(null);
  const active = studies.find(s => s.id === selected);
  const filtered = useMemo(() => findStudies(query, category, savedOnly ? saved : null), [query, category, savedOnly, saved]);
  const stopLive = useCallback(() => setLiveId(null), []);
  const close = useCallback(() => { setSelected(null); setExpanded(false); locationStudy(null); requestAnimationFrame(() => { if(scroller.current) scroller.current.scrollTop=galleryPosition.current; (document.querySelector<HTMLButtonElement>(`.ss-card-open[aria-label="Explore ${CSS.escape(lastCard.current)}"]`) || document.querySelector<HTMLButtonElement>(".ss-card-open"))?.focus({preventScroll:true}); }); }, []);
  useEffect(() => {
    const visibility = () => { if(document.hidden) stopLive(); };
    document.addEventListener('visibilitychange', visibility);
    return () => document.removeEventListener('visibilitychange', visibility);
  }, [stopLive]);
  useEffect(() => {
    const escape = (event: KeyboardEvent) => { if(event.key === 'Escape' && selected){event.preventDefault();event.stopPropagation();expanded ? setExpanded(false) : close();} };
    window.addEventListener('keydown', escape, true);
    return () => window.removeEventListener('keydown', escape, true);
  }, [selected, expanded, close]);
  function open(study: Study) {
    if (!selected) galleryPosition.current = scroller.current?.scrollTop || 0;
    lastCard.current=study.name;setSelected(study.id);setLiveId(null);setReload(0);setNotice('');locationStudy(study.id);
    requestAnimationFrame(() => { if(scroller.current)scroller.current.scrollTop=0;title.current?.focus(); });
  }
  function toggleSaved(study: Study) {
    const id=`styles:${study.id}`, next=saved.includes(id)?saved.filter(s=>s!==id):[...saved,id];
    setSaved(next);
    try {localStorage.setItem(favoriteKey,JSON.stringify(next));setNotice(next.includes(id)?`${study.name} saved.`:`${study.name} removed from saved studies.`);}catch{setNotice('Saved for this session. Browser storage is unavailable.');}
  }
  async function copy(text: string) {
    try {await navigator.clipboard.writeText(text);setNotice('Link copied.');}catch{setNotice(`Copy this link: ${text}`);}
  }
  const shareURL=active ? `${location.origin}/?collection=library&library=styles&study=${encodeURIComponent(active.id)}` : '';
  const position=active?studies.indexOf(active):0;
  return <section className={`style-studio ${active?'ss-detail':''} ${expanded?'ss-expanded':''}`} ref={scroller} aria-label="Style studies">
    {!active ? <>
      <header className="ss-intro"><div><h1>Style studies<span>.</span></h1><p>Explore 28 ways to build a website. See how type, color, layout and motion work together—then try the real thing.</p></div><div className="ss-intro-note"><span className="ss-status-dot"/>Live websites, ready to explore</div></header>
      <div className="ss-filterbar"><label className="ss-search"><Search size={17}/><input value={query} onChange={e=>setQuery(e.target.value)} aria-label="Search style studies" placeholder="Search styles, websites or ideas…"/>{query&&<button aria-label="Clear search" onClick={()=>setQuery('')}><X size={15}/></button>}</label><label className="ss-category"><span className="ss-sr-only">Style family</span><select value={category} onChange={e=>setCategory(e.target.value)}><option value="all">All style families</option>{[...new Set(studies.map(s=>s.category))].map(c=><option key={c}>{c}</option>)}</select></label><button className="ss-saved-filter" aria-pressed={savedOnly} onClick={()=>setSavedOnly(s=>!s)}><Bookmark size={15}/>{savedOnly?'Saved studies':'Saved'}<span>{studies.filter(s=>saved.includes(`styles:${s.id}`)).length}</span></button></div>
      <div className="ss-results"><span role="status">{filtered.length} {filtered.length===1?'study':'studies'}{savedOnly?' saved':''}</span><span>Hover a website or press Live preview to see it move.</span></div>
      {notice&&<p className="ss-notice" role="status">{notice}</p>}
      {filtered.length ? <div className="ss-grid">{filtered.map(study=><StudyCard key={study.id} study={study} live={liveId===study.id} onLive={()=>setLiveId(study.id)} onStop={stopLive} onOpen={()=>open(study)} saved={saved.includes(`styles:${study.id}`)} onSave={()=>toggleSaved(study)}/>)}</div> : <div className="ss-empty"><Search size={30}/><h2>{savedOnly&&!query&&category==='all'?'Your saved studies will appear here.':'No studies found.'}</h2><p>{savedOnly?'Save a website with its bookmark button, or broaden your filters.':'Try another name or a broader style family.'}</p><button onClick={()=>{setQuery('');setCategory('all');setSavedOnly(false);}}>Show all studies</button></div>}
      <footer className="ss-footer"><span>Different styles. Working websites.</span><a href="/design-library/library-source.zip" download><Download size={14}/> Download library source</a></footer>
    </> : <>
      <header className="ss-detail-toolbar"><button onClick={close}><ArrowLeft size={16}/> All style studies</button><div className="ss-study-nav"><span>{position+1} of {studies.length}</span><button aria-label="Previous style study" disabled={position===0} onClick={()=>open(studies[position-1])}><ArrowLeft size={16}/></button><button aria-label="Next style study" disabled={position===studies.length-1} onClick={()=>open(studies[position+1])}><ArrowRight size={16}/></button></div><button className="ss-save-detail" aria-pressed={saved.includes(`styles:${active.id}`)} onClick={()=>toggleSaved(active)}><Bookmark size={15} fill={saved.includes(`styles:${active.id}`)?'currentColor':'none'}/>{saved.includes(`styles:${active.id}`)?'Saved':'Save study'}</button></header>
      <div className="ss-detail-intro"><div><h1 tabIndex={-1} ref={title}>{active.name}</h1><p>{active.style}<span> / </span>{active.concept}</p></div><a className="ss-open-site" href={studyURL(active.id)} target="_blank" rel="noopener noreferrer">Open website <ArrowUpRight size={16}/><span className="ss-sr-only"> in a new tab</span></a></div>
      <div className="ss-preview-shell"><div className="ss-preview-toolbar"><span className="ss-preview-label"><span className="ss-status-dot"/>Interactive preview</span><div className="ss-devices" aria-label="Preview width">{[[1280,'Desktop',Monitor],[768,'Tablet',Tablet],[390,'Phone',Smartphone]].map(([value,label,Icon])=>{const DeviceIcon=Icon as typeof Monitor;return <button key={String(value)} aria-label={`${label} preview`} aria-pressed={width===value} onClick={()=>setWidth(Number(value))}><DeviceIcon size={15}/><span>{String(label)}</span></button>;})}</div><div className="ss-preview-tools"><span>{width} px</span><button aria-label="Restart website preview" onClick={()=>setReload(n=>n+1)}><RotateCcw size={15}/></button><button aria-label={expanded?'Exit expanded preview':'Expand preview'} aria-pressed={expanded} onClick={()=>setExpanded(v=>!v)}>{expanded?<X size={15}/>:<Maximize2 size={15}/>}</button></div></div><div className="ss-preview-stage"><LiveStudy study={active} width={width} reload={reload} onBack={close}/></div><div className="ss-preview-help"><span>Scroll, click and explore inside the website.</span><button aria-expanded={info} onClick={()=>setInfo(v=>!v)}>{info?'Hide study notes':'Show study notes'}</button></div></div>
      {notice&&<p className="ss-notice" role="status">{notice}</p>}
      {info&&<section className="ss-notes" aria-label="Study notes"><div className="ss-about"><h2>About this study</h2><p>{active.description}</p><p className="ss-demo-note">A concept website with example content. Forms and product actions demonstrate the interface; they don’t create real bookings, purchases or accounts.</p><button className="ss-copy-link" onClick={()=>copy(shareURL)}><Copy size={14}/> Copy study link</button></div><div><h2>Design palette</h2><div className="ss-palette">{active.colors.map((color,i)=><div key={i}><span style={{background:color}}/><code>{color}</code></div>)}</div><h2 className="ss-type-heading">Typography direction</h2><p>{active.typography}</p><small>Some original typefaces use locally bundled substitutes.</small></div><div className="ss-source-note"><h2>Take a closer look</h2><p>Download the React library to explore and adapt this study.</p><code>{active.source}</code><a href="/design-library/library-source.zip" download><Download size={15}/> Download library source</a><span><Check size={12}/> Includes all studies and font licenses</span></div></section>}
    </>}
  </section>;
}
