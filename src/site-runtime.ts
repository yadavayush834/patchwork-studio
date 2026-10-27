import asciiRuntime from "./ascii/runtime.generated.js?raw";
export const siteRuntime =
  asciiRuntime +
  "\n" +
  String.raw`
(()=>{
const root=document.querySelector('.pw-site');if(!root)return;
const mq=matchMedia('(prefers-reduced-motion: reduce)');
const reduced=()=>mq.matches||root.dataset.reduced==='true';
const sync=()=>{root.classList.toggle('pw-reduced',reduced());root.classList.toggle('pw-inactive',document.hidden);document.querySelectorAll('video').forEach(v=>{v.playbackRate=Number(v.dataset.speed)||1;if(reduced()||document.hidden||v.dataset.offscreen==='true'){v.pause()}else{v.play().catch(()=>{})}})};
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{e.target.classList.toggle('pw-offscreen',!e.isIntersecting);e.target.classList.toggle('pw-seen',e.isIntersecting);e.target.querySelectorAll('video').forEach(v=>v.dataset.offscreen=String(!e.isIntersecting));sync()}),{rootMargin:'50px'});
root.querySelectorAll('[data-section]').forEach(el=>observer.observe(el));
root.addEventListener('pointermove',e=>{if(reduced())return;const s=e.target.closest('[data-section]');if(!s)return;const r=s.getBoundingClientRect();[s,...s.querySelectorAll('[data-motion="track"]')].filter(el=>el.dataset.motion==='track').forEach(el=>{el.style.setProperty('--track-x',((e.clientX-r.left)/r.width-.5)*18+'px');el.style.setProperty('--track-y',((e.clientY-r.top)/r.height-.5)*18+'px')})});
root.addEventListener('pointerleave',()=>root.querySelectorAll('[data-motion="track"]').forEach(el=>{el.style.setProperty('--track-x','0px');el.style.setProperty('--track-y','0px')}));
document.addEventListener('visibilitychange',sync);mq.addEventListener('change',sync);sync();
})();`;
