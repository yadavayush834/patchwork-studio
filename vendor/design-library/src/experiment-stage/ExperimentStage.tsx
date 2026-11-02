import { useEffect, useState } from 'react';
import { MOTION_COMPONENTS } from '../motion-lab/registry';
import { SVG_COMPONENTS } from '../svg-lab/registry';

export default function ExperimentStage({ kind, id }: {kind: 'motion' | 'svg'; id: string}) {
  const entry = (kind === 'motion' ? MOTION_COMPONENTS : SVG_COMPONENTS).find(item => item.id === id);
  const [props, setProps] = useState<Record<string, unknown>>(() => ({...entry?.defaultControls}));
  useEffect(() => {
    const receive = (event: MessageEvent) => {
      if (event.origin !== location.origin || event.source !== window.parent || event.data?.type !== 'patchwork-experiment-controls' || event.data.id !== id || !event.data.values || typeof event.data.values !== 'object') return;
      const values: Record<string, unknown> = {};
      for (const control of entry?.controlsSchema || []) {
        const value = event.data.values[control.id];
        if (control.type === 'boolean' && typeof value === 'boolean') values[control.id] = value;
        else if (control.type === 'number' && typeof value === 'number' && Number.isFinite(value)) values[control.id] = Math.max(control.min ?? -Infinity, Math.min(control.max ?? Infinity, value));
        else if ((control.type === 'text' || control.type === 'color' || control.type === 'select') && typeof value === 'string' && value.length <= 256 && (control.type !== 'select' || control.options?.includes(value))) values[control.id] = value;
      }
      setProps(values);
    };
    addEventListener('message', receive);
    window.parent.postMessage({type: 'patchwork-experiment-ready', id}, location.origin);
    return () => removeEventListener('message', receive);
  }, [id, entry]);
  if (!entry) return <div style={{color:'#fff', padding:24}}>Experiment unavailable.</div>;
  const Component = entry.component;
  return <div style={{height:'100vh', width:'100%', overflow:'auto', display:'flex', alignItems:'center', justifyContent:'center', background:'#090b12'}}><div style={{width:'100%', height:'100%', minHeight:320, display:'flex', alignItems:'center', justifyContent:'center'}}><Component {...props} /></div></div>;
}
