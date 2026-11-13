/**
 * The stylesheet every Quilt site ships with (and the editor canvas uses, so they always match).
 * Scoped under .q-site, sized with container query units so the editor's device frames behave exactly
 * like real screens. Per-site rules (theme, sections, elements) come from render.ts.
 */
import { SEAMS } from "./library/seams";

export const PHONE = "@container q (max-width: 640px)";

export const SITE_CSS = String.raw`
.q-site{container:q/inline-size;--pad:clamp(16px,4cqi,40px);--u:min(1px,calc((100cqi - 2 * var(--pad)) / 1200));background:var(--q-bg);color:var(--q-ink);font-family:var(--q-f-body);line-height:1.5;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;overflow-x:clip;position:relative}
.q-site *,.q-site *::before,.q-site *::after{box-sizing:border-box}
:where(.q-site) a{color:inherit}
.q-site img,.q-site video{max-width:none}
.q-sr{position:absolute!important;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}
.q-sec{position:relative;isolation:isolate}
.q-sec.q-full{min-height:var(--q-vh,100svh);display:grid;align-content:center}
.q-sec.q-sticky{position:sticky;top:0;z-index:900}
.q-bg{position:absolute;inset:0;z-index:-1;overflow:hidden;pointer-events:none}
.q-bg-scene{pointer-events:auto}
.q-bg>iframe{position:absolute;inset:0;width:100%;height:100%;border:0;display:block}
.q-bg::after{content:"";position:absolute;inset:0;background:var(--q-pc,transparent);opacity:var(--q-po,0);-webkit-mask:var(--q-pm,none);mask:var(--q-pm,none);pointer-events:none}
.q-dim{position:absolute;inset:0;pointer-events:none}
.q-grid{display:grid;grid-template-columns:repeat(96,minmax(0,1fr));max-width:1200px;margin:0 auto;padding:0 var(--pad);position:relative;box-sizing:content-box!important;pointer-events:none}
.q-e{position:relative;min-width:0;min-height:0;pointer-events:auto;rotate:var(--r,0deg)}
.q-box{display:grid;grid-template-columns:subgrid;grid-template-rows:subgrid}
.q-fill{position:absolute;inset:0;z-index:0;pointer-events:none}
.q-box>.q-e{z-index:1}
.q-cover{position:absolute;inset:0;z-index:5}
.q-thread{position:absolute;left:0;right:0;bottom:calc(var(--q-sd,0px) * .5);height:3px;z-index:3;pointer-events:none;background:repeating-linear-gradient(90deg,var(--q-tc) 0 14px,transparent 14px 24px);opacity:.85}
.q-seam-stitch .q-thread{bottom:10px}

/* Text */
.q-text{margin:0;font-weight:var(--fw,400);overflow-wrap:break-word;hyphens:manual}
.q-text .q-tx{-webkit-box-decoration-break:clone;box-decoration-break:clone}
.q-fx-highlight .q-tx{background:linear-gradient(transparent 58%,var(--fx) 58%,var(--fx) 92%,transparent 92%);padding:0 .08em}
.q-fx-scribble .q-tx{text-decoration:underline wavy var(--fx);text-decoration-thickness:.07em;text-underline-offset:.22em}
.q-fx-outline .q-tx{color:transparent;-webkit-text-stroke:max(1px,.025em) var(--fx)}
.q-fx-shadow .q-tx{text-shadow:.06em .06em 0 var(--fx)}
.q-fx-glow .q-tx{text-shadow:0 0 .25em var(--fx),0 0 .8em var(--fx)}
.q-fx-gradient .q-tx{background:linear-gradient(100deg,var(--fx),var(--fx2));-webkit-background-clip:text;background-clip:text;color:transparent}
.q-fx-stamp{display:inline-block!important;border:.08em solid var(--fx);padding:.12em .4em;border-radius:.12em;rotate:-2deg}

/* Buttons */
.q-btn{--bs:16;display:inline-flex;align-items:center;justify-content:center;gap:.55em;font-family:var(--bf,var(--q-f-body));font-weight:600;font-size:max(calc(var(--bs) * .9px),calc(var(--bs) * var(--u)));line-height:1.1;padding:.85em 1.5em;border-radius:var(--br,var(--q-radius));text-decoration:none;color:var(--bt);background:var(--bc);border:2px solid var(--bc);cursor:pointer;transition:translate .2s,box-shadow .2s,background .2s,color .2s,filter .2s;text-align:center;white-space:nowrap}
.q-e>.q-btn{width:100%;height:100%}
.q-btn svg{width:1.05em;height:1.05em;flex:none;transition:translate .2s}
.q-btn:hover svg{translate:3px 0}
.q-btn:hover{filter:brightness(1.06)}
.q-btn:focus-visible,.q-site a:focus-visible,.q-site summary:focus-visible{outline:3px solid var(--q-accent2);outline-offset:3px}
.q-btn-s{--bs:14}.q-btn-l{--bs:19}
.q-btn-outline{background:transparent;color:var(--bc)}
.q-btn-outline:hover{background:var(--bc);color:var(--bt)}
.q-btn-soft{background:color-mix(in srgb,var(--bc) 15%,transparent);border-color:transparent;color:var(--bc)}
.q-btn-link{background:none;border-color:transparent;color:var(--bc);padding:.4em 0;text-decoration:underline;text-underline-offset:.3em;text-decoration-thickness:2px}
.q-btn-underline{background:none;border:0;border-bottom:2px solid var(--bc);border-radius:0;color:var(--bc);padding:.4em 0}
.q-btn-pill{border-radius:999px}
.q-btn-sticker{border-color:var(--q-ink);box-shadow:4px 4px 0 var(--q-ink);border-radius:var(--br,10px)}
.q-btn-sticker:hover{translate:-2px -2px;box-shadow:6px 6px 0 var(--q-ink)}

/* Pictures */
.q-img{position:absolute;inset:0;overflow:hidden;border-radius:var(--ir,0)}
.q-img img,.q-img video{width:100%;height:100%;object-fit:var(--fit,cover);display:block}
.q-mask-circle{border-radius:50%}
.q-mask-pill{border-radius:999px}
.q-mask-arch{border-radius:999px 999px var(--ir,0) var(--ir,0)}
.q-mask-shape{border-radius:0;-webkit-mask:var(--mk) center/100% 100% no-repeat;mask:var(--mk) center/100% 100% no-repeat}
.q-mask-stamp{border-radius:0;-webkit-mask:linear-gradient(#000 0 0) center/calc(100% - 16px) calc(100% - 16px) no-repeat,radial-gradient(circle,#0000 4.6px,#000 5.2px) -7px -7px/14px 14px round;mask:linear-gradient(#000 0 0) center/calc(100% - 16px) calc(100% - 16px) no-repeat,radial-gradient(circle,#0000 4.6px,#000 5.2px) -7px -7px/14px 14px round;background:#fffdf7;padding:12px}
.q-mask-stamp img{border-radius:2px}
.q-frame-polaroid .q-img{background:#fffdf8;padding:5% 5% 17%;box-shadow:0 2px 3px rgba(0,0,0,.12),0 20px 40px -18px rgba(0,0,0,.4);border-radius:3px}
.q-frame-polaroid figcaption{position:absolute;left:0;right:0;bottom:4%;text-align:center;font-family:"Caveat",var(--q-f-head),cursive;font-size:max(15px,calc(26 * var(--u)));color:#3a3330}
.q-frame-shadow .q-img{box-shadow:var(--q-shadow-x)}
.q-frame-border .q-img{border:max(4px,calc(8 * var(--u))) solid var(--q-accent)}
.q-frame-stack::before,.q-frame-stack::after{content:"";position:absolute;inset:0;border-radius:var(--ir,0);background:var(--q-accent2);rotate:-4deg;z-index:-1}
.q-frame-stack::after{background:var(--q-accent3);rotate:3deg;inset:2% -1% -1% 2%}
.q-frame-tape::before,.q-frame-tape::after{content:"";position:absolute;z-index:3;width:28%;max-width:120px;height:max(18px,calc(30 * var(--u)));background:color-mix(in srgb,var(--q-accent3) 55%,#fff8);top:-3%;left:-4%;rotate:-28deg;box-shadow:0 1px 2px rgba(0,0,0,.08)}
.q-frame-tape::after{left:auto;right:-4%;rotate:26deg}
.q-flt-mono img{filter:grayscale(1) contrast(1.06)}
.q-flt-sepia img{filter:sepia(.65) contrast(1.02)}
.q-flt-warm img{filter:sepia(.22) saturate(1.3) hue-rotate(-6deg)}
.q-flt-cool img{filter:saturate(.85) hue-rotate(14deg) brightness(1.04)}
.q-flt-fade img{filter:contrast(.82) brightness(1.1) saturate(.75)}
.q-flt-vivid img{filter:saturate(1.5) contrast(1.08)}
.q-flt-duotone img{filter:grayscale(1) contrast(1.15)}
.q-flt-duotone::before,.q-flt-duotone::after{content:"";position:absolute;inset:0;pointer-events:none;z-index:1}
.q-flt-duotone::before{background:var(--d1);mix-blend-mode:lighten}
.q-flt-duotone::after{background:var(--d2);mix-blend-mode:multiply}

/* Shapes, icons, lines */
.q-shape{position:absolute;inset:0;background:var(--sf)}
.q-shape.q-masked{-webkit-mask:var(--mk) center/var(--ms,contain) no-repeat;mask:var(--mk) center/var(--ms,contain) no-repeat}
.q-icon{position:absolute;inset:0;display:grid;place-items:center;color:var(--ic)}
.q-icon svg{width:100%;height:100%}
.q-icon.q-chip{background:var(--ch);border-radius:50%;padding:22%}
.q-line{position:absolute;left:0;right:0;top:50%;translate:0 -50%;height:var(--lw);color:var(--lc)}
.q-line-solid{background:currentColor;border-radius:9px}
.q-line-dashed{background:repeating-linear-gradient(90deg,currentColor 0 18px,transparent 18px 30px)}
.q-line-dotted{background:radial-gradient(circle,currentColor 45%,transparent 50%) 0 50%/calc(var(--lw) * 2.4) 100% repeat-x}
.q-line-stitch{background:repeating-linear-gradient(90deg,currentColor 0 12px,transparent 12px 20px);rotate:-.4deg}
.q-line-double{height:calc(var(--lw) * 3.5);border-top:var(--lw) solid;border-bottom:var(--lw) solid}
.q-line-wave,.q-line-zigzag{height:calc(var(--lw) * 6);background:currentColor;-webkit-mask:var(--lm) 0 50%/calc(var(--lw) * 14) 100% repeat-x;mask:var(--lm) 0 50%/calc(var(--lw) * 14) 100% repeat-x}

/* Links on anything */
.q-hit{position:absolute;inset:0;z-index:4;border-radius:inherit}

/* Widgets */
.q-menu{display:flex;align-items:center;height:100%;font-weight:500;font-size:max(14px,calc(16 * var(--u)))}
.q-menu-start{justify-content:flex-start}.q-menu-center{justify-content:center}.q-menu-end{justify-content:flex-end}
.q-menu ul{list-style:none;margin:0;padding:0;display:flex;gap:max(14px,calc(32 * var(--u)))}
.q-menu-row{white-space:nowrap}
.q-menu a{text-decoration:none;position:relative;padding:.3em 0;color:var(--wc,inherit)}
.q-menu-row a::after{content:"";position:absolute;left:0;right:0;bottom:0;height:2px;background:var(--wa,var(--q-accent));scale:0 1;transform-origin:left;transition:scale .25s}
.q-menu-row a:hover::after{scale:1 1}
.q-burger{display:none;position:relative}
.q-burger summary{list-style:none;cursor:pointer;display:grid;gap:5px;padding:12px;border-radius:12px;background:color-mix(in srgb,currentColor 8%,transparent)}
.q-burger summary::-webkit-details-marker{display:none}
.q-burger summary span{display:block;width:22px;height:2px;background:currentColor;border-radius:2px;transition:rotate .2s,translate .2s,opacity .2s}
.q-burger[open] summary span:nth-child(1){translate:0 7px;rotate:45deg}.q-burger[open] summary span:nth-child(2){opacity:0}.q-burger[open] summary span:nth-child(3){translate:0 -7px;rotate:-45deg}
.q-burger ul{position:absolute;right:0;top:calc(100% + 8px);flex-direction:column;gap:2px;min-width:200px;padding:10px;background:var(--q-surface);color:var(--q-ink);border-radius:16px;box-shadow:0 20px 50px -20px rgba(0,0,0,.4);z-index:50}
.q-burger ul a{display:block;padding:10px 12px;border-radius:10px}
.q-burger ul a:hover{background:color-mix(in srgb,var(--q-accent) 12%,transparent)}
.q-countdown{height:100%;display:flex;align-items:center;color:var(--wc,inherit)}
.q-countdown time{display:flex;gap:max(8px,calc(18 * var(--u)));width:100%}
.q-cd-unit{flex:1;display:grid;place-items:center;padding:max(10px,calc(18 * var(--u))) 4px;border-radius:var(--q-radius)}
.q-cd-unit b{font-family:var(--q-f-head);font-size:max(30px,calc(56 * var(--u)));line-height:1;font-variant-numeric:tabular-nums;font-weight:600}
.q-cd-unit small{font-size:max(10px,calc(12 * var(--u)));letter-spacing:.14em;text-transform:uppercase;opacity:.7;margin-top:.5em}
.q-cd-cards .q-cd-unit{background:var(--wa,var(--q-surface));box-shadow:var(--q-shadow-x)}
.q-cd-flip .q-cd-unit{background:var(--wa,var(--q-accent));color:var(--q-bg);border-radius:6px;-webkit-mask:radial-gradient(circle at 0 50%,#0000 7px,#000 7.5px) left/51% 100% no-repeat,radial-gradient(circle at 100% 50%,#0000 7px,#000 7.5px) right/51% 100% no-repeat;mask:radial-gradient(circle at 0 50%,#0000 7px,#000 7.5px) left/51% 100% no-repeat,radial-gradient(circle at 100% 50%,#0000 7px,#000 7.5px) right/51% 100% no-repeat}
.q-cd-done{font-family:var(--q-f-head);font-size:max(26px,calc(44 * var(--u)))}
.q-marquee{overflow:hidden;height:100%;display:flex;align-items:center;color:var(--wc,inherit);font-size:max(calc(var(--q-mf) * .6px),calc(var(--q-mf) * var(--u)));line-height:1.1;white-space:nowrap;font-weight:500}
.q-marquee-track{display:flex;width:max-content;animation:q-marquee var(--q-ms) linear infinite}
.q-rev .q-marquee-track{animation-direction:reverse}
@keyframes q-marquee{to{translate:-50% 0}}
.q-faq{display:grid;gap:10px}
.q-faq-item{border-radius:var(--q-radius);background:var(--wa,var(--q-surface));padding:0 max(16px,calc(22 * var(--u)));color:var(--wc,inherit)}
.q-faq-item summary{list-style:none;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:16px;padding:max(14px,calc(20 * var(--u))) 0;font-weight:600;font-size:max(16px,calc(18 * var(--u)))}
.q-faq-item summary::-webkit-details-marker{display:none}
.q-faq-item summary i{flex:none;width:14px;height:14px;position:relative}
.q-faq-item summary i::before,.q-faq-item summary i::after{content:"";position:absolute;left:0;right:0;top:6px;height:2px;background:currentColor;transition:rotate .25s}
.q-faq-item summary i::after{rotate:90deg}
.q-faq-item[open] summary i::after{rotate:0deg}
.q-faq-item>div{padding:0 0 max(16px,calc(20 * var(--u)));opacity:.82}
.q-form{display:grid;gap:12px;color:var(--wc,inherit)}
.q-form-inline{grid-template-columns:1fr auto;align-items:end}
.q-form-inline .q-field span{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0)}
.q-field{display:grid;gap:6px;font-size:14px;font-weight:500}
.q-field input,.q-field textarea{font:inherit;font-weight:400;font-size:16px;color:var(--q-ink);background:var(--q-surface);border:1.5px solid color-mix(in srgb,var(--q-ink) 18%,transparent);border-radius:calc(var(--q-radius) * .6);padding:13px 14px;width:100%;resize:vertical}
.q-field input:focus,.q-field textarea:focus{outline:none;border-color:var(--q-accent);box-shadow:0 0 0 4px color-mix(in srgb,var(--q-accent) 22%,transparent)}
.q-form .q-btn{--bc:var(--wa,var(--q-accent));--bt:var(--q-bg);justify-self:start}
.q-form-done{margin:0;font-weight:600;color:var(--q-accent)}
.q-social{display:flex;flex-wrap:wrap;gap:10px;align-items:center;height:100%;color:var(--wc,inherit)}
.q-social a{text-decoration:none;font-weight:600;font-size:15px;display:inline-flex;gap:.35em}
.q-social-pills a{padding:.55em 1em;border-radius:999px;border:1.5px solid color-mix(in srgb,currentColor 30%,transparent)}
.q-social-pills a:hover{background:var(--wa,var(--q-accent));border-color:transparent;color:var(--q-bg)}
.q-social-stamps a{padding:.5em .9em;background:var(--wa,var(--q-accent3));color:var(--q-ink);border-radius:4px;rotate:-1.5deg}
.q-social-stamps a:nth-child(2n){rotate:1.5deg;background:var(--q-accent2)}
.q-social-text a{text-decoration:underline;text-underline-offset:.25em}
.q-list{list-style:none;margin:0;padding:0;display:grid;gap:.75em;color:var(--wc,inherit)}
.q-list li{display:flex;gap:.7em;align-items:flex-start}
.q-list li b{flex:none;width:1.3em;height:1.3em;color:var(--wa,var(--q-accent));display:grid;place-items:center;font-family:var(--q-f-head);font-size:.9em}
.q-list li b svg{width:100%;height:100%}
.q-list li b.q-dot::before{content:"";width:.45em;height:.45em;border-radius:50%;background:currentColor}
.q-stats{display:flex;justify-content:space-between;gap:24px;height:100%;align-items:center;color:var(--wc,inherit)}
.q-stat{display:grid;gap:4px}
.q-stat b{font-family:var(--q-f-head);font-size:max(38px,calc(68 * var(--u)));line-height:1;font-weight:600;color:var(--wa,inherit)}
.q-stat em{font-style:normal;font-size:.5em;margin-left:.1em}
.q-stat small{font-size:max(13px,calc(15 * var(--u)));opacity:.72}
.q-video{position:absolute;inset:0;border-radius:var(--q-radius);overflow:hidden;background:color-mix(in srgb,var(--q-ink) 8%,transparent)}
.q-video video{width:100%;height:100%;object-fit:cover;display:block}
.q-empty{display:grid;place-items:center;color:var(--q-muted);font-size:14px}
.q-empty span{display:grid;justify-items:center;gap:8px}.q-empty svg{width:28px;height:28px}

/* Phones: one column, in reading order, built from the desktop layout. */
${PHONE}{
.q-grid{display:flex;flex-wrap:wrap;align-items:center;align-content:flex-start;gap:var(--q-gap,14px) 12px;padding:var(--q-ppad,56px) 22px;max-width:none;box-sizing:border-box!important}
.q-grid.q-center{justify-content:center;text-align:center}
.q-bar .q-grid{flex-wrap:nowrap;justify-content:space-between;padding-top:14px;padding-bottom:14px}
.q-bar .q-e{flex:0 1 auto!important}
.q-e{grid-area:auto!important;flex:0 0 100%;rotate:calc(var(--r,0deg) * .5)}
.q-e.q-inline{flex:0 0 auto}
.q-e.q-float{position:absolute!important;z-index:0;opacity:.9}
.q-e.q-hide-phone,.q-e.q-hide-phone *{display:none!important}
.q-e.q-only-desktop{display:none!important}
.q-box{display:flex;flex-wrap:wrap;gap:12px;padding:22px;align-items:center}
.q-box>.q-e{flex:0 0 100%}
.q-box>.q-e.q-inline{flex:0 0 auto}
.q-e>.q-btn{width:auto;height:auto}
.q-e.q-full-btn>.q-btn{width:100%}
.q-menu-row{display:none!important}
.q-burger{display:block}
.q-stats{flex-wrap:wrap;justify-content:center;gap:28px 36px}
.q-cd-unit b{font-size:28px}
.q-form-inline{grid-template-columns:1fr}
.q-sec.q-full{min-height:min(var(--q-vh,100svh),760px)}
}
.q-e.q-only-phone{display:none}
${PHONE}{.q-e.q-only-phone{display:block}}

/* Motion: off until the runtime says the visitor is fine with it. */
.q-anim [data-enter]:not(.is-in){opacity:0}
.q-anim [data-enter].is-in{animation:var(--q-dur,.9s) cubic-bezier(.2,.75,.25,1) var(--q-delay,0s) backwards}
.q-anim [data-enter="fade"].is-in{animation-name:q-fade}
.q-anim [data-enter="rise"].is-in{animation-name:q-rise}
.q-anim [data-enter="drop"].is-in{animation-name:q-drop}
.q-anim [data-enter="slide-left"].is-in{animation-name:q-sl}
.q-anim [data-enter="slide-right"].is-in{animation-name:q-sr}
.q-anim [data-enter="pop"].is-in{animation-name:q-pop;animation-timing-function:cubic-bezier(.3,1.5,.5,1)}
.q-anim [data-enter="zoom"].is-in{animation-name:q-zoom}
.q-anim [data-enter="blur"].is-in{animation-name:q-blur}
.q-anim [data-enter="wipe"].is-in{animation-name:q-wipe}
.q-anim [data-enter="stitch"].is-in{animation-name:q-stitch}
.q-anim [data-enter="typewriter"].is-in{animation-name:q-type;animation-timing-function:steps(26,end)}
.q-anim [data-enter="spin-in"].is-in{animation-name:q-spin;animation-timing-function:cubic-bezier(.3,1.4,.5,1)}
@keyframes q-fade{from{opacity:0}}
@keyframes q-rise{from{opacity:0;translate:0 48px}}
@keyframes q-drop{from{opacity:0;translate:0 -48px}}
@keyframes q-sl{from{opacity:0;translate:72px 0}}
@keyframes q-sr{from{opacity:0;translate:-72px 0}}
@keyframes q-pop{from{opacity:0;scale:.55}}
@keyframes q-zoom{from{opacity:0;scale:1.18}}
@keyframes q-blur{from{opacity:0;filter:blur(18px)}}
@keyframes q-wipe{from{clip-path:inset(100% 0 0 0)}to{clip-path:inset(0)}}
@keyframes q-stitch{from{clip-path:polygon(0 0,0 0,0 100%,0 100%);translate:-12px 0}to{clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}}
@keyframes q-type{from{clip-path:inset(0 100% 0 0)}to{clip-path:inset(0 0 0 0)}}
@keyframes q-spin{from{opacity:0;scale:.4;rotate:-200deg}}
.q-loop-float{animation:q-float 5s ease-in-out infinite}
.q-loop-pulse{animation:q-pulse 2.6s ease-in-out infinite}
.q-loop-spin{animation:q-spinl 18s linear infinite}
.q-loop-wiggle{animation:q-wiggle 2.2s ease-in-out infinite}
.q-loop-sway{animation:q-sway 4s ease-in-out infinite;transform-origin:50% 0}
.q-loop-bounce{animation:q-bounce 1.8s cubic-bezier(.3,0,.4,1) infinite}
@keyframes q-float{50%{transform:translateY(-14px)}}
@keyframes q-pulse{50%{transform:scale(1.07)}}
@keyframes q-spinl{to{transform:rotate(360deg)}}
@keyframes q-wiggle{0%,100%{transform:rotate(0)}25%{transform:rotate(-5deg)}75%{transform:rotate(5deg)}}
@keyframes q-sway{50%{transform:rotate(4deg)}}
@keyframes q-bounce{0%,100%{transform:translateY(0)}45%{transform:translateY(-18px)}60%{transform:translateY(0)}72%{transform:translateY(-5px)}}
.q-hover-lift,.q-hover-grow,.q-hover-tilt,.q-hover-glow{transition:translate .3s cubic-bezier(.2,.8,.2,1),scale .3s cubic-bezier(.2,.8,.2,1),rotate .3s,filter .3s}
.q-hover-lift:hover{translate:0 -8px}
.q-hover-grow:hover{scale:1.05}
.q-hover-tilt:hover{rotate:calc(var(--r,0deg) - 3deg)}
.q-hover-glow:hover{filter:drop-shadow(0 0 18px color-mix(in srgb,var(--q-accent) 70%,transparent))}
.q-hover-shake:hover{animation:q-wiggle .5s ease-in-out 2}
[data-parallax]>*{translate:0 var(--q-py,0)}
@media (prefers-reduced-motion:reduce){.q-site *{animation:none!important;transition:none!important}.q-marquee-track{animation:none!important}}

/* Site-wide companions */
.q-progress{position:fixed;left:0;top:0;height:3px;width:100%;transform-origin:0 50%;scale:var(--q-p,0) 1;z-index:1000;background:repeating-linear-gradient(90deg,var(--q-accent) 0 10px,transparent 10px 15px)}
.q-spark{position:fixed;pointer-events:none;z-index:1001;width:10px;height:10px;margin:-5px 0 0 -5px;background:var(--q-accent);-webkit-mask:${SEAMS.sparkMask};mask:${SEAMS.sparkMask};animation:q-sparkf .8s ease-out forwards}
.q-spark.q-dot-t{border-radius:50%;-webkit-mask:none;mask:none;width:8px;height:8px}
@keyframes q-sparkf{to{opacity:0;translate:var(--dx,0) 30px;scale:.3;rotate:90deg}}
.q-intro{animation:q-fade .8s ease both}
`;
