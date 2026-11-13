/**
 * The tiny script every Quilt site ships with (≈3 KB). Everything works without it; it only adds motion
 * and the live bits: entrance animations, parallax, countdowns, counting numbers, forms that have
 * nowhere to send yet, the scroll thread and the cursor trail. Honours prefers-reduced-motion and
 * pauses work offscreen.
 */
export const QUILT_RUNTIME = String.raw`(()=>{
const d=document,root=d.documentElement,calm=matchMedia("(prefers-reduced-motion: reduce)").matches;
const site=d.querySelector(".q-site");if(!site)return;
if(!calm)site.classList.add("q-anim");
const io=new IntersectionObserver(es=>{for(const e of es){if(e.isIntersecting){e.target.classList.add("is-in");io.unobserve(e.target)}}},{rootMargin:"0px 0px -8% 0px",threshold:.12});
d.querySelectorAll("[data-enter]").forEach(el=>calm?el.classList.add("is-in"):io.observe(el));
const px=[...d.querySelectorAll("[data-parallax]")];
let ticking=false;
const bar=d.querySelector(".q-progress");
function frame(){ticking=false;const h=innerHeight;
for(const el of px){const r=el.getBoundingClientRect();if(r.bottom<-200||r.top>h+200)continue;const k=parseFloat(el.dataset.parallax)||0;el.style.setProperty("--q-py",((r.top+r.height/2-h/2)*k*-.35).toFixed(1)+"px")}
if(bar){const m=root.scrollHeight-h;bar.style.setProperty("--q-p",m>0?(scrollY/m).toFixed(4):"0")}}
if(!calm&&(px.length||bar)){addEventListener("scroll",()=>{if(!ticking){ticking=true;requestAnimationFrame(frame)}},{passive:true});frame()}
const cds=[...d.querySelectorAll("[data-countdown]")];
function tick(){const now=Date.now();for(const el of cds){const t=new Date(el.dataset.countdown).getTime();if(!isFinite(t))continue;let s=Math.max(0,Math.floor((t-now)/1000));
if(s===0&&el.dataset.done){el.innerHTML="";const p=d.createElement("p");p.className="q-cd-done";p.textContent=el.dataset.done;el.append(p);el.removeAttribute("data-countdown");continue}
const v=[Math.floor(s/86400),Math.floor(s%86400/3600),Math.floor(s%3600/60),s%60];el.querySelectorAll("b").forEach((b,i)=>b.textContent=String(v[i]).padStart(2,"0"))}}
if(cds.length){tick();setInterval(()=>{if(!d.hidden)tick()},1000)}
const counts=new IntersectionObserver(es=>{for(const e of es){if(!e.isIntersecting)continue;counts.unobserve(e.target);const el=e.target,to=parseFloat(el.dataset.count),dec=(el.dataset.count.split(".")[1]||"").length,t0=performance.now();
const step=t=>{const k=Math.min(1,(t-t0)/1400),v=to*(1-Math.pow(1-k,3));el.textContent=v.toLocaleString(undefined,{minimumFractionDigits:dec,maximumFractionDigits:dec});if(k<1)requestAnimationFrame(step)};requestAnimationFrame(step)}},{threshold:.5});
if(!calm)d.querySelectorAll("[data-count]").forEach(el=>counts.observe(el));
d.querySelectorAll("form[data-q-form]").forEach(f=>f.addEventListener("submit",e=>{const done=f.querySelector(".q-form-done");if(!f.getAttribute("action")){e.preventDefault();if(done){done.textContent=f.dataset.success||"Thank you!";done.hidden=false}f.reset()}else if(done){setTimeout(()=>{done.textContent=f.dataset.success||"Thank you!";done.hidden=false},300)}}));
addEventListener("message",e=>{const h=e.data&&e.data.quiltLink;if(typeof h!=="string"||![...d.querySelectorAll("iframe.q-piece")].some(f=>f.contentWindow===e.source))return;
if(h.startsWith("#")){const t=d.getElementById(decodeURIComponent(h.slice(1)));if(t)t.scrollIntoView({behavior:calm?"auto":"smooth"})}
else if(/^(https?:|mailto:|tel:)/i.test(h))open(h,"_blank","noopener");else if(/^[\w-]+\.html$/.test(h))location.href=h});
const cur=site.dataset.cursor;
if(!calm&&cur&&cur!=="none"&&matchMedia("(pointer: fine)").matches){let last=0;addEventListener("pointermove",e=>{const now=performance.now();if(now-last<(cur==="thread"?16:45))return;last=now;const s=d.createElement("i");s.className="q-spark"+(cur==="sparkle"?"":" q-dot-t");s.style.left=e.clientX+"px";s.style.top=e.clientY+"px";s.style.setProperty("--dx",(Math.random()*30-15).toFixed(0)+"px");if(cur==="thread"){s.style.animationDuration=".5s"}site.append(s);setTimeout(()=>s.remove(),820)},{passive:true})}
})();`;
