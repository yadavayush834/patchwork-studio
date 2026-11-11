import { useEffect, useRef, useState } from 'react';
import { RotateCcw } from 'lucide-react';
import { studyURL, type Study } from './catalog';
export default function LiveStudy({ study, thumbnail = false, width = 1280, reload = 0, onBack }: {
  study: Study; thumbnail?: boolean; width?: number; reload?: number; onBack?: () => void;
}) {
  const root = useRef<HTMLDivElement>(null), frame = useRef<HTMLIFrameElement>(null);
  const [bounds, setBounds] = useState({ width: 900, height: 650 });
  const [status, setStatus] = useState<'loading' | 'ready' | 'error'>('loading');
  const [attempt, setAttempt] = useState(0);
  useEffect(() => {
    const node = root.current;
    if (!node) return;
    const observer = new ResizeObserver(([entry]) => setBounds({ width: entry.contentRect.width, height: entry.contentRect.height }));
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    setStatus('loading');
    let complete = false;
    const timer = setTimeout(() => { if (!complete) setStatus('error'); }, 15000);
    const receive = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== frame.current?.contentWindow) return;
      if (event.data?.type === 'style-study-ready' && event.data.id === study.id) { complete = true; clearTimeout(timer); setStatus('ready'); }
      if (event.data?.type === 'design-library-back') onBack?.();
    };
    addEventListener('message', receive);
    const visibility = () => frame.current?.contentWindow?.postMessage({ type: 'style-preview-visibility', active: !document.hidden }, location.origin);
    document.addEventListener('visibilitychange', visibility);
    return () => { clearTimeout(timer); removeEventListener('message', receive); document.removeEventListener('visibilitychange', visibility); };
  }, [study.id, reload, attempt, onBack]);
  const scale = Math.min(1, bounds.width / width);
  const height = thumbnail ? 800 : Math.max(500, Math.floor(bounds.height / scale));
  return <div className={`ss-live ${thumbnail ? 'is-thumbnail' : ''}`} ref={root} aria-busy={status === 'loading'}>
    {thumbnail && <img className="ss-live-poster" src={`/design-library/style-study-covers/${study.id}.jpg`} alt="" />}
    <div className="ss-scaled-page" style={{ width: width * scale, height: height * scale }}>
      <iframe ref={frame} key={`${study.id}-${reload}-${attempt}`} title={`${study.name} ${thumbnail ? 'live card preview' : 'interactive website'}`}
        src={studyURL(study.id, thumbnail)} tabIndex={thumbnail ? -1 : 0} aria-hidden={thumbnail || undefined}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox allow-downloads"
        style={{ width, height, transform: `scale(${scale})`, opacity: status === 'ready' ? 1 : 0 }} />
    </div>
    {status === 'loading' && <span className="ss-loading" role="status">Opening live preview…</span>}
    {status === 'error' && <div className="ss-preview-error" role="alert"><strong>Preview couldn’t load.</strong>{thumbnail ? <span>Stop the preview and start it again to retry.</span> : <><button onClick={() => setAttempt(n => n + 1)}><RotateCcw size={14}/> Try again</button><a href={studyURL(study.id)} target="_blank" rel="noopener noreferrer">Open website in a new tab</a></>}</div>}
    {thumbnail && status === 'ready' && <span className="ss-playing"><i/> Live preview</span>}
  </div>;
}
