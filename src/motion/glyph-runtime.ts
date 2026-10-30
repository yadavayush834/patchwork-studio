import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { GlyphObservatory } from './glyph-ascii';
import { PixelExpedition } from './glyph-pixel';
gsap.registerPlugin(ScrollTrigger);
export function animateGlyphStudy(reduced = false) {
  const root = document.querySelector<HTMLElement>('.mt-nullsignal,.mt-bitquest');
  if (!root) return;
  const mobile = matchMedia('(max-width:760px)').matches;
  const ascii = root.dataset.template === 'nullsignal';
  const observatory = ascii ? new GlyphObservatory(mobile) : null;
  const expedition = ascii ? null : new PixelExpedition();
  const states = [...root.querySelectorAll<HTMLCanvasElement>('canvas[data-glyph]')].map((canvas, i) => {
    canvas.width = ascii ? (mobile ? 800 : 1400) : 480;
    canvas.height = ascii ? (mobile ? 640 : 850) : 300;
    const ctx = canvas.getContext('2d');
    if (ctx) ctx.imageSmoothingEnabled = false;
    return { canvas, ctx, phase: i, progress: reduced ? [.25,.45,1][i] : 0, visible: false };
  });
  const timelines: gsap.core.Timeline[] = [];
  if (!reduced) states.forEach(state => {
    const section = state.canvas.closest<HTMLElement>('.gl-sequence')!;
    const tl = gsap.timeline({scrollTrigger:{trigger:section,start:'top top',end:()=>`+=${innerHeight*(mobile?1.65:2.5)}`,pin:true,scrub:.65,anticipatePin:1,invalidateOnRefresh:true}});
    tl.to(state,{progress:1,duration:3,ease:'none'},0);
    if(state.phase===0){
      tl.to(section.querySelector('.gl-hero-copy'),{y:-55,opacity:0,duration:.8},.35);
      tl.to(section.querySelector('.gl-art'),{left:mobile?'0%':'0%',right:'0%',top:mobile?'12%':'0%',bottom:mobile?'5%':'0%',height:mobile?'75%':'100%',duration:1.4,ease:'power2.inOut'},.6);
      tl.to(section.querySelector('.gl-annotation'),{opacity:0,duration:.5},.3);
      tl.to(section,{'--gl-veil':0,duration:1},.4);
    } else if(state.phase===1){
      tl.to(section.querySelector('.gl-plate'),{opacity:0,y:-35,duration:.7},1.6);
    } else {
      tl.to(section.querySelector('.gl-map-heading'),{opacity:0,y:-40,duration:.7},.2);
      tl.to(section.querySelector('.gl-art'),{top:'0%',duration:1.2},.6);
    }
    timelines.push(tl);
  });
  const started = performance.now();
  let frame=0,last=0,disposed=false;
  const paint=(time:number,all=false)=>{
    for(const state of states){
      if(!state.ctx||(!state.visible&&!all))continue;
      if(ascii)observatory!.render(state.ctx,state.phase,state.progress,time,mobile,reduced);
      else expedition!.render(state.ctx,state.phase,state.progress,time,reduced);
      const label=state.canvas.closest('.gl-sequence')?.querySelector('.gl-progress-label');
      if(label)label.textContent=`${String(Math.round(state.progress*100)).padStart(3,'0')} / 100`;
      state.canvas.dataset.scrollProgress=state.progress.toFixed(3);
    }
  };
  const schedule=()=>{if(!disposed&&!document.hidden&&!frame&&states.some(s=>s.visible)&&!reduced)frame=requestAnimationFrame(tick)};
  function tick(time:number){frame=0;if(disposed||document.hidden)return;if(time-last>=50){paint((time-started)*.001);last=time}schedule()}
  const observer=new IntersectionObserver(entries=>{for(const entry of entries){const state=states.find(s=>s.canvas===entry.target);if(state)state.visible=entry.isIntersecting}schedule()},{threshold:0});
  states.forEach(s=>observer.observe(s.canvas));
  const visibility=()=>{if(document.hidden){cancelAnimationFrame(frame);frame=0}else schedule()};
  document.addEventListener('visibilitychange',visibility);
  paint(0,true);schedule();
  return()=>{disposed=true;cancelAnimationFrame(frame);observer.disconnect();document.removeEventListener('visibilitychange',visibility);timelines.forEach(t=>{t.scrollTrigger?.kill();t.kill()})};
}
