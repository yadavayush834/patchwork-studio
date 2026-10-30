"use strict";(()=>{function cr(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function Dp(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var ri={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},no={duration:.5,overwrite:!1,delay:0},tf,bn,Be,Ei=1e8,Le=1/Ei,Wu=Math.PI*2,u_=Wu/4,f_=0,Lp=Math.sqrt,d_=Math.cos,p_=Math.sin,on=function(t){return typeof t=="string"},Ye=function(t){return typeof t=="function"},ur=function(t){return typeof t=="number"},Wl=function(t){return typeof t>"u"},Zi=function(t){return typeof t=="object"},ii=function(t){return t!==!1},ef=function(){return typeof window<"u"},Fl=function(t){return Ye(t)||on(t)},Np=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Pn=Array.isArray,m_=/random\([^)]+\)/g,g_=/,\s*/g,Tp=/(?:-?\.?\d|\.)+/gi,nf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,gs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Ou=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,rf=/[+-]=-?[.\d]+/,__=/[^,'"\[\]\s]+/gi,x_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,He,qi,Xu,sf,ui={},kl={},Fp,Up=function(t){return(kl=io(t,ui))&&In},Xl=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},ua=function(t,e){return!e&&console.warn(t)},Op=function(t,e){return t&&(ui[t]=e)&&kl&&(kl[t]=e)||ui},fa=function(){return 0},v_={suppressEvents:!0,isStart:!0,kill:!1},Ul={suppressEvents:!0,kill:!1},y_={suppressEvents:!0},of={},Nr=[],qu={},Bp,ei={},Bu={},wp=30,Ol=[],af="",lf=function(t){var e=t[0],n,i;if(Zi(e)||Ye(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Ol.length;i--&&!Ol[i].targetTest(e););n=Ol[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new ff(t[i],n)))||t.splice(i,1);return t},Fr=function(t){return t._gsap||lf(Ai(t))[0]._gsap},cf=function(t,e,n){return(n=t[e])&&Ye(n)?t[e]():Wl(n)&&t.getAttribute&&t.getAttribute(e)||n},Vn=function(t,e){return(t=t.split(",")).forEach(e)||t},Ze=function(t){return Math.round(t*1e5)/1e5||0},Ve=function(t){return Math.round(t*1e7)/1e7||0},_s=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},M_=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},zl=function(){var t=Nr.length,e=Nr.slice(0),n,i;for(qu={},Nr.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},hf=function(t){return!!(t._initted||t._startAt||t.add)},kp=function(t,e,n,i){Nr.length&&!bn&&zl(),t.render(e,n,i||!!(bn&&e<0&&hf(t))),Nr.length&&!bn&&zl()},zp=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(__).length<2?e:on(t)?t.trim():t},Vp=function(t){return t},fi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},b_=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},io=function(t,e){for(var n in e)t[n]=e[n];return t},Ep=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=Zi(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},Vl=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},la=function(t){var e=t.parent||He,n=t.keyframes?b_(Pn(t.keyframes)):fi;if(ii(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},S_=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},Hp=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},ql=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},Ur=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},ds=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},T_=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},Yu=function(t,e,n,i){return t._startAt&&(bn?t._startAt.revert(Ul):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},w_=function r(t){return!t||t._ts&&r(t.parent)},Ap=function(t){return t._repeat?ro(t._tTime,t=t.duration()+t._rDelay)*t:0},ro=function(t,e){var n=Math.floor(t=Ve(t/e));return t&&n===t?n-1:n},Hl=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Yl=function(t){return t._end=Ve(t._start+(t._tDur/Math.abs(t._ts||t._rts||Le)||0))},Zl=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=Ve(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Yl(t),n._dirty||ds(n,t)),t},Gp=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=Hl(t.rawTime(),e),(!e._dur||ma(0,e.totalDuration(),n)-e._tTime>Le)&&e.render(n,!0)),ds(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Le}},Yi=function(t,e,n,i){return e.parent&&Ur(e),e._start=Ve((ur(n)?n:n||t!==He?wi(t,n,e):t._time)+e._delay),e._end=Ve(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Hp(t,e,"_first","_last",t._sort?"_start":0),Zu(e)||(t._recent=e),i||Gp(t,e),t._ts<0&&Zl(t,t._tTime),t},Wp=function(t,e){return(ui.ScrollTrigger||Xl("scrollTrigger",e))&&ui.ScrollTrigger.create(e,t)},Xp=function(t,e,n,i,s){if(mf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!bn&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&Bp!==ni.frame)return Nr.push(t),t._lazy=[s,i],1},E_=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},Zu=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},A_=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&E_(t)&&!(!t._initted&&Zu(t))||(t._ts<0||t._dp._ts<0)&&!Zu(t))?0:1,a=t._rDelay,l=0,c,h,u;if(a&&t._repeat&&(l=ma(0,t._tDur,e),h=ro(l,a),t._yoyo&&h&1&&(o=1-o),h!==ro(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||bn||i||t._zTime===Le||!e&&t._zTime){if(!t._initted&&Xp(t,e,i,n,l))return;for(u=t._zTime,t._zTime=e||(n?Le:0),n||(n=e&&!u),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&Yu(t,e,n,!0),t._onUpdate&&!n&&hi(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&hi(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&Ur(t,1),!n&&!bn&&(hi(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},C_=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},so=function(t,e,n,i){var s=t._repeat,o=Ve(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:Ve(o*(s+1)+t._rDelay*s):o,a>0&&!i&&Zl(t,t._tTime=t._tDur*a),t.parent&&Yl(t),n||ds(t.parent,t),t},Cp=function(t){return t instanceof Mn?ds(t):so(t,t._dur)},R_={_start:0,endTime:fa,totalDuration:fa},wi=function r(t,e,n){var i=t.labels,s=t._recent||R_,o=t.duration()>=Ei?s.endTime(!1):t._dur,a,l,c;return on(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Pn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},ca=function(t,e,n){var i=ur(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ii(l.vars.inherit)&&l.parent;o.immediateRender=ii(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new Qe(e[0],o,e[s+1])},Or=function(t,e){return t||t===0?e(t):e},ma=function(t,e,n){return n<t?t:n>e?e:n},Sn=function(t,e){return!on(t)||!(e=x_.exec(t))?"":e[1]},P_=function(t,e,n){return Or(n,function(i){return ma(t,e,i)})},$u=[].slice,qp=function(t,e){return t&&Zi(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&Zi(t[0]))&&!t.nodeType&&t!==qi},I_=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return on(i)&&!e||qp(i,1)?(s=n).push.apply(s,Ai(i)):n.push(i)})||n},Ai=function(t,e,n){return Be&&!e&&Be.selector?Be.selector(t):on(t)&&!n&&(Xu||!oo())?$u.call((e||sf).querySelectorAll(t),0):Pn(t)?I_(t,n):qp(t)?$u.call(t,0):t?[t]:[]},Ju=function(t){return t=Ai(t)[0]||ua("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Ai(e,n.querySelectorAll?n:n===t?ua("Invalid scope")||sf.createElement("div"):t)}},Yp=function(t){return t.sort(function(){return .5-Math.random()})},Zp=function(t){if(Ye(t))return t;var e=Zi(t)?t:{each:t},n=ps(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,h=i,u=i;return on(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,m){var g=(m||e).length,_=o[g],p,M,v,y,T,w,E,C,x;if(!_){if(x=e.grid==="auto"?0:(e.grid||[1,Ei])[1],!x){for(E=-Ei;E<(E=m[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(_=o[g]=[],p=l?Math.min(x,g)*h-.5:i%x,M=x===Ei?0:l?g*u/x-.5:i/x|0,E=0,C=Ei,w=0;w<g;w++)v=w%x-p,y=M-(w/x|0),_[w]=T=c?Math.abs(c==="y"?y:v):Lp(v*v+y*y),T>E&&(E=T),T<C&&(C=T);i==="random"&&Yp(_),_.max=E-C,_.min=C,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=Sn(e.amount||e.each)||0,n=n&&g<0?im(n):n}return g=(_[d]-_.min)/_.max||0,Ve(_.b+(n?n(g):g)*_.v)+_.u}},Ku=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=Ve(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(ur(n)?0:Sn(n))}},$p=function(t,e){var n=Pn(t),i,s;return!n&&Zi(t)&&(i=n=t.radius||Ei,t.values?(t=Ai(t.values),(s=!ur(t[0]))&&(i*=i)):t=Ku(t.increment)),Or(e,n?Ye(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ei,h=0,u=t.length,d,f;u--;)s?(d=t[u].x-a,f=t[u].y-l,d=d*d+f*f):d=Math.abs(t[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?t[h]:o,s||h===o||ur(o)?h:h+Sn(o)}:Ku(t))},Jp=function(t,e,n,i){return Or(Pn(t)?!e:n===!0?!!(n=0):!i,function(){return Pn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},D_=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},L_=function(t,e){return function(n){return t(parseFloat(n))+(e||Sn(n))}},N_=function(t,e,n){return Qp(t,e,0,1,n)},Kp=function(t,e,n){return Or(n,function(i){return t[~~e(i)]})},F_=function r(t,e,n){var i=e-t;return Pn(t)?Kp(t,r(0,t.length),e):Or(n,function(s){return(i+(s-t)%i)%i+t})},U_=function r(t,e,n){var i=e-t,s=i*2;return Pn(t)?Kp(t,r(0,t.length-1),e):Or(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},ao=function(t){return t.replace(m_,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(g_);return Jp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Qp=function(t,e,n,i,s){var o=e-t,a=i-n;return Or(s,function(l){return n+((l-t)/o*a||0)})},O_=function r(t,e,n,i){var s=isNaN(t+e)?0:function(f){return(1-f)*t+f*e};if(!s){var o=on(t),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Pn(t)&&!Pn(e)){for(h=[],u=t.length,d=u-2,c=1;c<u;c++)h.push(r(t[c-1],t[c]));u--,s=function(m){m*=u;var g=Math.min(d,~~m);return h[g](m-g)},n=e}else i||(t=io(Pn(t)?[]:{},t));if(!h){for(l in e)df.call(a,t,l,"get",e[l]);s=function(m){return xf(m,a)||(o?t.p:t)}}}return Or(n,s)},Rp=function(t,e,n){var i=t.labels,s=Ei,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},hi=function(t,e,n){var i=t.vars,s=i[e],o=Be,a=t._ctx,l,c,h;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&Nr.length&&zl(),a&&(Be=a),h=l?s.apply(c,l):s.call(c),Be=o,h},oa=function(t){return Ur(t),t.scrollTrigger&&t.scrollTrigger.kill(!!bn),t.progress()<1&&hi(t,"onInterrupt"),t},eo,jp=[],tm=function(t){if(t)if(t=!t.name&&t.default||t,ef()||t.headless){var e=t.name,n=Ye(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:fa,render:xf,add:df,kill:j_,modifier:Q_,rawVars:0},o={targetTest:0,get:0,getSetter:$l,aliases:{},register:0};if(oo(),t!==i){if(ei[e])return;fi(i,fi(Vl(t,s),o)),io(i.prototype,io(s,Vl(t,o))),ei[i.prop=e]=i,t.targetTest&&(Ol.push(i),of[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Op(e,i),t.register&&t.register(In,i,Hn)}else jp.push(t)},De=255,aa={aqua:[0,De,De],lime:[0,De,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,De],navy:[0,0,128],white:[De,De,De],olive:[128,128,0],yellow:[De,De,0],orange:[De,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[De,0,0],pink:[De,192,203],cyan:[0,De,De],transparent:[De,De,De,0]},ku=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*De+.5|0},em=function(t,e,n){var i=t?ur(t)?[t>>16,t>>8&De,t&De]:0:aa.black,s,o,a,l,c,h,u,d,f,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),aa[t])i=aa[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&De,i&De,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&De,t&De]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(Tp),!e)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=ku(l+1/3,s,o),i[1]=ku(l,s,o),i[2]=ku(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(nf),n&&i.length<4&&(i[3]=1),i}else i=t.match(Tp)||aa.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/De,o=i[1]/De,a=i[2]/De,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},nm=function(t){var e=[],n=[],i=-1;return t.split(hr).forEach(function(s){var o=s.match(gs)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},Pp=function(t,e,n){var i="",s=(t+i).match(hr),o=e?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return t;if(s=s.map(function(d){return(d=em(d,e,1))&&o+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=nm(t),l=n.c,l.join(i)!==h.c.join(i)))for(c=t.replace(hr,"1").split(gs),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=t.split(hr),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},hr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in aa)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),B_=/hsl[a]?\(/,uf=function(t){var e=t.join(" "),n;if(hr.lastIndex=0,hr.test(e))return n=B_.test(e),t[1]=Pp(t[1],n),t[0]=Pp(t[0],n,nm(t[1])),!0},da,ni=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,m=function g(_){var p=r()-i,M=_===!0,v,y,T,w;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,v=T-o,(v>0||M)&&(w=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=v+(v>=s?4:s-v),y=1),M||(l=c(g)),y)for(f=0;f<a.length;f++)a[f](T,d,w,_)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Fp&&(!Xu&&ef()&&(qi=Xu=window,sf=qi.document||{},ui.gsap=In,(qi.gsapVersions||(qi.gsapVersions=[])).push(In.version),Up(kl||qi.GreenSockGlobals||!qi.gsap&&qi||{}),jp.forEach(tm)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,o-u.time*1e3+1|0)},da=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),da=0,c=fa},lagSmoothing:function(_,p){t=_||1/0,e=Math.min(p||33,t)},fps:function(_){s=1e3/(_||240),o=u.time*1e3+s},add:function(_,p,M){var v=p?function(y,T,w,E){_(y,T,w,E),u.remove(v)}:_;return u.remove(_),a[M?"unshift":"push"](v),oo(),v},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),oo=function(){return!da&&ni.wake()},de={},k_=/^[\d.\-M][\d.\-,\s]/,z_=/["']/g,V_=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(z_,"").trim():+c,i=l.substr(a+1).trim();return e},H_=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},G_=function(t){var e=(t+"").split("("),n=de[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[V_(e[1])]:H_(t).split(",").map(zp)):de._CE&&k_.test(t)?de._CE("",t):n},im=function(t){return function(e){return 1-t(1-e)}},rm=function r(t,e){for(var n=t._first,i;n;)n instanceof Mn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},ps=function(t,e){return t&&(Ye(t)?t:de[t]||G_(t))||e},xs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Vn(t,function(a){de[a]=ui[a]=s,de[o=a.toLowerCase()]=n;for(var l in s)de[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=de[a+"."+l]=s[l]}),s},sm=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},zu=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/Wu*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*p_((h-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:sm(a);return s=Wu/s,l.config=function(c,h){return r(t,c,h)},l},Vu=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:sm(n);return i.config=function(s){return r(t,s)},i};Vn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;xs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});de.Linear.easeNone=de.none=de.Linear.easeIn;xs("Elastic",zu("in"),zu("out"),zu());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};xs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);xs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});xs("Circ",function(r){return-(Lp(1-r*r)-1)});xs("Sine",function(r){return r===1?1:-d_(r*u_)+1});xs("Back",Vu("in"),Vu("out"),Vu());de.SteppedEase=de.steps=ui.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Le;return function(a){return((i*ma(0,o,a)|0)+s)*n}}};no.ease=de["quad.out"];Vn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return af+=r+","+r+"Params,"});var ff=function(t,e){this.id=f_++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:cf,this.set=e?e.getSetter:$l},pa=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,so(this,+e.duration,1,1),this.data=e.data,Be&&(this._ctx=Be,Be.data.push(this)),da||ni.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,so(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(oo(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Zl(this,n),!s._dp||s.parent||Gp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Yi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Le||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),kp(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Ap(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Ap(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?ro(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Le?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Hl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Le?0:this._rts,this.totalTime(ma(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Yl(this),T_(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(oo(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Le&&(this._tTime-=Le)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=Ve(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Yi(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ii(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Hl(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=y_);var i=bn;return bn=n,hf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),bn=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Cp(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Cp(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(wi(this,n),ii(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ii(i)),this._dur||(this._zTime=-Le),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Le:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Le,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Le)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=Ye(n)?n:Vp,l=function(){var h=i.then;i.then=null,s&&s(),Ye(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){oa(this)},r})();fi(pa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Le,_prom:0,_ps:!1,_rts:1});var Mn=(function(r){Dp(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ii(n.sortChildren),He&&Yi(n.parent||He,cr(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Wp(cr(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return ca(0,arguments,this),this},e.from=function(i,s,o){return ca(1,arguments,this),this},e.fromTo=function(i,s,o,a){return ca(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,la(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Qe(i,s,wi(this,o),1),this},e.call=function(i,s,o){return Yi(this,Qe.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Qe(i,o,wi(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,la(o).immediateRender=ii(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},e.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,la(a).immediateRender=ii(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Ve(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,m,g,_,p,M,v,y,T,w,E;if(this!==He&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,v=this._ts,p=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(d=Ve(h%_),h===l?(g=this._repeat,d=c):(T=Ve(h/_),g=~~T,g&&g===T&&(d=c,g--),d>c&&(d=c)),T=ro(this._tTime,_),!a&&this._tTime&&T!==g&&this._tTime-T*_-this._dur<=0&&(T=g),w&&g&1&&(d=c-d,E=1),g!==T&&!this._lock){var C=w&&T&1,x=C===(w&&g&1);if(g<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(E?0:Ve(g*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&hi(this,"onRepeat"),this.vars.repeatRefresh&&!E&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!E&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;rm(this,E)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=C_(this,Ve(a),Ve(d)),M&&(h-=d-(d=M._start))),this._tTime=h,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(hi(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(m=f._next,(f._act||d>=f._start)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){M=0,m&&(h+=this._zTime=-Le);break}}f=m}else{f=this._last;for(var b=i<0?i:d;f;){if(m=f._prev,(f._act||b<=f._end)&&f._ts&&M!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,s,o||bn&&hf(f)),d!==this._time||!this._ts&&!p){M=0,m&&(h+=this._zTime=b?-Le:Le);break}}f=m}}if(M&&!s&&(this.pause(),M.render(d>=a?0:-Le)._zTime=d>=a?1:-1,this._ts))return this._start=y,Yl(this),this.render(i,s,o);this._onUpdate&&!s&&hi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ur(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(hi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(ur(s)||(s=wi(this,s,i)),!(i instanceof pa)){if(Pn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(on(i))return this.addLabel(i,s);if(Ye(i))i=Qe.delayedCall(0,i);else return this}return this!==i?Yi(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ei);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Qe?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return on(i)?this.removeLabel(i):Ye(i)?this.killTweensOf(i):(i.parent===this&&ql(this,i),i===this._recent&&(this._recent=this._last),ds(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Ve(ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=wi(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=Qe.delayedCall(0,s||fa,o);return a.data="isPause",this._hasPause=1,Yi(this,a,wi(this,i))},e.removePause=function(i){var s=this._first;for(i=wi(this,i);s;)s._start===i&&s.data==="isPause"&&Ur(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Lr!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Ai(i),l=this._first,c=ur(s),h;l;)l instanceof Qe?M_(l._targets,a)&&(c?(!Lr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=wi(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,m=Qe.to(o,fi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Le,onStart:function(){if(o.pause(),!f){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&so(m,_,0,1).render(m._time,!0,!0),f=1}h&&h.apply(m,u||[])}},s));return d?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,fi({startAt:{time:wi(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),Rp(this,wi(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),Rp(this,wi(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Le)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Ve(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return ds(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),ds(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ei,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Yi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Ve(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;so(o,o===He&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(He._ts&&(kp(He,Hl(i,He)),Bp=ni.frame),ni.frame>=wp){wp+=ri.autoSleep||120;var s=He._first;if((!s||!s._ts)&&ri.autoSleep&&ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ni.sleep()}}},t})(pa);fi(Mn.prototype,{_lock:0,_hasPause:0,_forcing:0});var W_=function(t,e,n,i,s,o,a){var l=new Hn(this._pt,t,e,0,1,_f,null,s),c=0,h=0,u,d,f,m,g,_,p,M;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=ao(i)),o&&(M=[n,i],o(M,t,e),n=M[0],i=M[1]),d=n.match(Ou)||[];u=Ou.exec(i);)m=u[0],g=i.substring(c,u.index),f?f=(f+1)%5:g.substr(-5)==="rgba("&&(f=1),m!==d[h++]&&(_=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:g||h===1?g:",",s:_,c:m.charAt(1)==="="?_s(_,m)-_:parseFloat(m)-_,m:f&&f<4?Math.round:0},c=Ou.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(rf.test(i)||p)&&(l.e=0),this._pt=l,l},df=function(t,e,n,i,s,o,a,l,c,h){Ye(i)&&(i=i(s||0,t,o));var u=t[e],d=n!=="get"?n:Ye(u)?c?t[e.indexOf("set")||!Ye(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():u,f=Ye(u)?c?$_:lm:gf,m;if(on(i)&&(~i.indexOf("random(")&&(i=ao(i)),i.charAt(1)==="="&&(m=_s(d,i)+(Sn(d)||0),(m||m===0)&&(i=m))),!h||d!==i||Qu)return!isNaN(d*i)&&i!==""?(m=new Hn(this._pt,t,e,+d||0,i-(d||0),typeof u=="boolean"?K_:cm,0,f),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!u&&!(e in t)&&Xl(e,i),W_.call(this,t,e,d,i,f,l||ri.stringFilter,c))},X_=function(t,e,n,i,s){if(Ye(t)&&(t=ha(t,s,e,n,i)),!Zi(t)||t.style&&t.nodeType||Pn(t)||Np(t))return on(t)?ha(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ha(t[a],s,e,n,i);return o},pf=function(t,e,n,i,s,o){var a,l,c,h;if(ei[t]&&(a=new ei[t]).init(s,a.rawVars?e[t]:X_(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Hn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==eo))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Lr,Qu,mf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,m=t._dur,g=t._startAt,_=t._targets,p=t.parent,M=p&&p.data==="nested"?p.vars.targets:_,v=t._overwrite==="auto"&&!tf,y=t.timeline,T,w,E,C,x,b,P,D,O,k,G,V,z;if(y&&(!d||!s)&&(s="none"),t._ease=ps(s,no.ease),t._yEase=u?im(ps(u===!0?s:u,no.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(D=_[0]?Fr(_[0]).harness:0,V=D&&i[D.prop],T=Vl(i,of),g&&(g._zTime<0&&g.progress(1),e<0&&h&&a&&!f?g.render(-1,!0):g.revert(h&&m?Ul:v_),g._lazy=0),o){if(Ur(t._startAt=Qe.set(_,fi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ii(l),startAt:null,delay:0,onUpdate:c&&function(){return hi(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(bn||!a&&!f)&&t._startAt.revert(Ul),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(h&&m&&!g){if(e&&(a=!1),E=fi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ii(l),immediateRender:a,stagger:0,parent:p},T),V&&(E[D.prop]=V),Ur(t._startAt=Qe.set(_,E)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(bn?t._startAt.revert(Ul):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Le,Le);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&ii(l)||l&&!m,w=0;w<_.length;w++){if(x=_[w],P=x._gsap||lf(_)[w]._gsap,t._ptLookup[w]=k={},qu[P.id]&&Nr.length&&zl(),G=M===_?w:M.indexOf(x),D&&(O=new D).init(x,V||T,t,G,M)!==!1&&(t._pt=C=new Hn(t._pt,x,O.name,0,1,O.render,O,0,O.priority),O._props.forEach(function(Y){k[Y]=C}),O.priority&&(b=1)),!D||V)for(E in T)ei[E]&&(O=pf(E,T,t,G,x,M))?O.priority&&(b=1):k[E]=C=df.call(t,x,E,"get",T[E],G,M,0,i.stringFilter);t._op&&t._op[w]&&t.kill(x,t._op[w]),v&&t._pt&&(Lr=t,He.killTweensOf(x,k,t.globalTime(e)),z=!t.parent,Lr=0),t._pt&&l&&(qu[P.id]=1)}b&&vf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!z,d&&e<=0&&y.render(Ei,!0,!0)},q_=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],h,u,d,f;if(!c)for(c=t._ptCache[e]=[],d=t._ptLookup,f=t._targets.length;f--;){if(h=d[f][e],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==e&&h.fp!==e;)h=h._next;if(!h)return Qu=1,t.vars[e]="+=0",mf(t,a),Qu=0,l?ua(e+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Ze(n)+Sn(u.e)),u.b&&(u.b=h.s+Sn(u.b))},Y_=function(t,e){var n=t[0]?Fr(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=io({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Z_=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Pn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ha=function(t,e,n,i,s){return Ye(t)?t.call(e,n,i,s):on(t)&&~t.indexOf("random(")?ao(t):t},om=af+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",am={};Vn(om+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return am[r]=1});var Qe=(function(r){Dp(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:la(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,M=i.parent||He,v=(Pn(n)||Np(n)?ur(n[0]):"length"in i)?[n]:Ai(n),y,T,w,E,C,x,b,P;if(a._targets=v.length?lf(v):ua("GSAP target "+n+" not found. https://gsap.com",!ri.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,m||d||Fl(c)||Fl(h)){if(i=a.vars,y=a.timeline=new Mn({data:"nested",defaults:g||{},targets:M&&M.data==="nested"?M.vars.targets:v}),y.kill(),y.parent=y._dp=cr(a),y._start=0,d||Fl(c)||Fl(h)){if(E=v.length,b=d&&Zp(d),Zi(d))for(C in d)~om.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(T=0;T<E;T++)w=Vl(i,am),w.stagger=0,p&&(w.yoyoEase=p),P&&io(w,P),x=v[T],w.duration=+ha(c,cr(a),T,x,v),w.delay=(+ha(h,cr(a),T,x,v)||0)-a._delay,!d&&E===1&&w.delay&&(a._delay=h=w.delay,a._start+=h,w.delay=0),y.to(x,w,b?b(T,x,v):0),y._ease=de.none;y.duration()?c=h=0:a.timeline=0}else if(m){la(fi(y.vars.defaults,{ease:"none"})),y._ease=ps(m.ease||i.ease||"none");var D=0,O,k,G;if(Pn(m))m.forEach(function(V){return y.to(v,V,">")}),y.duration();else{w={};for(C in m)C==="ease"||C==="easeEach"||Z_(C,m[C],w,m.easeEach);for(C in w)for(O=w[C].sort(function(V,z){return V.t-z.t}),D=0,T=0;T<O.length;T++)k=O[T],G={ease:k.e,duration:(k.t-(T?O[T-1].t:0))/100*c},G[C]=k.v,y.to(v,G,D),D+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!tf&&(Lr=cr(a),He.killTweensOf(v),Lr=0),Yi(M,cr(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===Ve(M._time)&&ii(u)&&w_(cr(a))&&M.data!=="nested")&&(a._tTime=-Le,a.render(Math.max(0,-h)||0)),_&&Wp(cr(a),_),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Le&&!h?l:i<Le?0:i,d,f,m,g,_,p,M,v,y;if(!c)A_(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(g*100+i,s,o);if(d=Ve(u%g),u===l?(m=this._repeat,d=c):(_=Ve(u/g),m=~~_,m&&m===_?(d=c,m--):d>c&&(d=c)),p=this._yoyo&&m&1,p&&(y=this._yEase,d=c-d),_=ro(this._tTime,g),d===a&&!o&&this._initted&&m===_)return this._tTime=u,this;m!==_&&(v&&this._yEase&&rm(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==g&&this._initted&&(this._lock=o=1,this.render(Ve(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(Xp(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=M=(y||this._ease)(d/c),this._from&&(this.ratio=M=1-M),!a&&u&&!s&&!_&&(hi(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(M,f.d),f=f._next;v&&v.render(i<0?i:v._dur*v._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Yu(this,i,s,o),hi(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&hi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Yu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ur(this,1),!s&&!(h&&!a)&&(u||a||p)&&(hi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){da||ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||mf(this,c),h=this._ease(c/this._dur),q_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Zl(this,0),this.parent||Hp(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?oa(this):this.scrollTrigger&&this.scrollTrigger.kill(!!bn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Lr&&Lr.vars.overwrite!==!0)._first||oa(this),this.parent&&o!==this.timeline.totalDuration()&&so(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ai(i):a,c=this._ptLookup,h=this._pt,u,d,f,m,g,_,p;if((!s||s==="all")&&S_(a,l))return s==="all"&&(this._pt=0),oa(this);for(u=this._op=this._op||[],s!=="all"&&(on(s)&&(g={},Vn(s,function(M){return g[M]=1}),s=g),s=Y_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,m=d,f={}):(f=u[p]=u[p]||{},m=s);for(g in m)_=d&&d[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&ql(this,_,"_pt"),delete d[g]),f!=="all"&&(f[g]=1)}return this._initted&&!this._pt&&h&&oa(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return ca(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return ca(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return He.killTweensOf(i,s,o)},t})(pa);fi(Qe.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Vn("staggerTo,staggerFrom,staggerFromTo",function(r){Qe[r]=function(){var t=new Mn,e=$u.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var gf=function(t,e,n){return t[e]=n},lm=function(t,e,n){return t[e](n)},$_=function(t,e,n,i){return t[e](i.fp,n)},J_=function(t,e,n){return t.setAttribute(e,n)},$l=function(t,e){return Ye(t[e])?lm:Wl(t[e])&&t.setAttribute?J_:gf},cm=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},K_=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},_f=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},xf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Q_=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},j_=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?ql(this,e,"_pt"):e.dep||(n=1),e=i;return!n},tx=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},vf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Hn=(function(){function r(e,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||cm,this.d=l||this,this.set=c||gf,this.pr=h||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=tx,this.m=n,this.mt=s,this.tween=i},r})();Vn(af+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return of[r]=1});ui.TweenMax=ui.TweenLite=Qe;ui.TimelineLite=ui.TimelineMax=Mn;He=new Mn({sortChildren:!1,defaults:no,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ri.stringFilter=uf;var ms=[],Bl={},ex=[],Ip=0,nx=0,Hu=function(t){return(Bl[t]||ex).map(function(e){return e()})},ju=function(){var t=Date.now(),e=[];t-Ip>2&&(Hu("matchMediaInit"),ms.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=qi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),Hu("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ip=t,Hu("matchMedia"))},hm=(function(){function r(e,n){this.selector=n&&Ju(n),this.data=[],this._r=[],this.isReverted=!1,this.id=nx++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){Ye(n)&&(s=i,i=n,n=Ye);var o=this,a=function(){var c=Be,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Ju(s)),Be=o,u=i.apply(o,arguments),Ye(u)&&o._r.push(u),Be=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===Ye?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Be;Be=null,n(this),Be=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Qe&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Mn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Qe)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ms.length;o--;)ms[o].id===this.id&&ms.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),ix=(function(){function r(e){this.contexts=[],this.scope=e,Be&&Be.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){Zi(n)||(n={matches:n});var o=new hm(0,s||this.scope),a=o.conditions={},l,c,h;Be&&!o.selector&&(o.selector=Be.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=qi.matchMedia(n[c]),l&&(ms.indexOf(o)<0&&ms.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(ju):l.addEventListener("change",ju)));return h&&i(o,function(u){return o.add(null,u)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Gl={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return tm(i)})},timeline:function(t){return new Mn(t)},getTweensOf:function(t,e){return He.getTweensOf(t,e)},getProperty:function(t,e,n,i){on(t)&&(t=Ai(t)[0]);var s=Fr(t||{}).get,o=n?Vp:zp;return n==="native"&&(n=""),t&&(e?o((ei[e]&&ei[e].get||s)(t,e,n,i)):function(a,l,c){return o((ei[a]&&ei[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Ai(t),t.length>1){var i=t.map(function(h){return In.quickSetter(h,e,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}t=t[0]||{};var o=ei[e],a=Fr(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(h){var u=new o;eo._pt=0,u.init(t,n?h+n:h,eo,0,[t]),u.render(1,u),eo._pt&&xf(1,eo)}:a.set(t,l);return o?c:function(h){return c(t,l,n?h+n:h,a,1)}},quickTo:function(t,e,n){var i,s=In.to(t,fi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(e,l,c,h)};return o.tween=s,o},isTweening:function(t){return He.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=ps(t.ease,no.ease)),Ep(no,t||{})},config:function(t){return Ep(ri,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ei[a]&&!ui[a]&&ua(e+" effect requires "+a+" plugin.")}),Bu[e]=function(a,l,c){return n(Ai(a),fi(l||{},s),c)},o&&(Mn.prototype[e]=function(a,l,c){return this.add(Bu[e](a,Zi(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){de[t]=ps(e)},parseEase:function(t,e){return arguments.length?ps(t,e):de},getById:function(t){return He.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Mn(t),i,s;for(n.smoothChildTiming=ii(t.smoothChildTiming),He.remove(n),n._dp=0,n._time=n._tTime=He._time,i=He._first;i;)s=i._next,(e||!(!i._dur&&i instanceof Qe&&i.vars.onComplete===i._targets[0]))&&Yi(n,i,i._start-i._delay),i=s;return Yi(He,n,0),n},context:function(t,e){return t?new hm(t,e):Be},matchMedia:function(t){return new ix(t)},matchMediaRefresh:function(){return ms.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||ju()},addEventListener:function(t,e){var n=Bl[t]||(Bl[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Bl[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:F_,wrapYoyo:U_,distribute:Zp,random:Jp,snap:$p,normalize:N_,getUnit:Sn,clamp:P_,splitColor:em,toArray:Ai,selector:Ju,mapRange:Qp,pipe:D_,unitize:L_,interpolate:O_,shuffle:Yp},install:Up,effects:Bu,ticker:ni,updateRoot:Mn.updateRoot,plugins:ei,globalTimeline:He,core:{PropTween:Hn,globals:Op,Tween:Qe,Timeline:Mn,Animation:pa,getCache:Fr,_removeLinkedListItem:ql,reverting:function(){return bn},context:function(t){return t&&Be&&(Be.data.push(t),t._ctx=Be),Be},suppressOverwrites:function(t){return tf=t}}};Vn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Gl[r]=Qe[r]});ni.add(Mn.updateRoot);eo=Gl.to({},{duration:0});var rx=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},sx=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=rx(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},Gu=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(on(s)&&(l={},Vn(s,function(h){return l[h]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}sx(a,s)}}}},In=Gl.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)bn?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},Gu("roundProps",Ku),Gu("modifiers"),Gu("snap",$p))||Gl;Qe.version=Mn.version=In.version="3.14.2";Fp=1;ef()&&oo();var ox=de.Power0,ax=de.Power1,lx=de.Power2,cx=de.Power3,hx=de.Power4,ux=de.Linear,fx=de.Quad,dx=de.Cubic,px=de.Quart,mx=de.Quint,gx=de.Strong,_x=de.Elastic,xx=de.Back,vx=de.SteppedEase,yx=de.Bounce,Mx=de.Sine,bx=de.Expo,Sx=de.Circ;var um,Br,co,wf,bs,Tx,fm,Ef,wx=function(){return typeof window<"u"},dr={},Ms=180/Math.PI,ho=Math.PI/180,lo=Math.atan2,dm=1e8,Af=/([A-Z])/g,Ex=/(left|right|width|margin|padding|x)/i,Ax=/[\s,\(]\S/,$i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Mf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Cx=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},Rx=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Px=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},Ix=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},Mm=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},bm=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},Dx=function(t,e,n){return t.style[e]=n},Lx=function(t,e,n){return t.style.setProperty(e,n)},Nx=function(t,e,n){return t._gsap[e]=n},Fx=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},Ux=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ox=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},Ge="transform",si=Ge+"Origin",Bx=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in dr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=$i[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=fr(i,a)}):this.tfm[t]=o.x?o[t]:fr(i,t),t===si&&(this.tfm.zOrigin=o.zOrigin);else return $i.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(Ge)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(si,e,"")),t=Ge}(s||e)&&this.props.push(t,e,s[t])},Sm=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},kx=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(Af,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Ef(),(!s||!s.isStart)&&!n[Ge]&&(Sm(n),i.zOrigin&&n[si]&&(n[si]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Tm=function(t,e){var n={target:t,props:[],revert:kx,save:Bx};return t._gsap||In.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},wm,bf=function(t,e){var n=Br.createElementNS?Br.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Br.createElement(t);return n&&n.style?n:Br.createElement(t)},di=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(Af,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,uo(e)||e,1)||""},pm="O,Moz,ms,Ms,Webkit".split(","),uo=function(t,e,n){var i=e||bs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(pm[o]+t in s););return o<0?null:(o===3?"ms":o>=0?pm[o]:"")+t},Sf=function(){wx()&&window.document&&(um=window,Br=um.document,co=Br.documentElement,bs=bf("div")||{style:{}},Tx=bf("div"),Ge=uo(Ge),si=Ge+"Origin",bs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wm=!!uo("perspective"),Ef=In.core.reverting,wf=1)},mm=function(t){var e=t.ownerSVGElement,n=bf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),co.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),co.removeChild(n),s},gm=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},Em=function(t){var e,n;try{e=t.getBBox()}catch{e=mm(t),n=1}return e&&(e.width||e.height)||n||(e=mm(t)),e&&!e.width&&!e.x&&!e.y?{x:+gm(t,["x","cx","x1"])||0,y:+gm(t,["y","cy","y1"])||0,width:0,height:0}:e},Am=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Em(t))},zr=function(t,e){if(e){var n=t.style,i;e in dr&&e!==si&&(e=Ge),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(Af,"-$1").toLowerCase())):n.removeAttribute(e)}},kr=function(t,e,n,i,s,o){var a=new Hn(t._pt,e,n,0,1,o?bm:Mm);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},_m={deg:1,rad:1,turn:1},zx={grid:1,flex:1},Vr=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=bs.style,l=Ex.test(e),c=t.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",m,g,_,p;if(i===o||!s||_m[i]||_m[o])return s;if(o!=="px"&&!d&&(s=r(t,e,n,"px")),p=t.getCTM&&Am(t),(f||o==="%")&&(dr[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[h],Ze(f?s/m*u:s/100*m);if(a[l?"width":"height"]=u+(d?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===Br||!g.appendChild)&&(g=Br.body),_=g._gsap,_&&f&&_.width&&l&&_.time===ni.time&&!_.uncache)return Ze(s/_.width*u);if(f&&(e==="height"||e==="width")){var M=t.style[e];t.style[e]=u+i,m=t[h],M?t.style[e]=M:zr(t,e)}else(f||o==="%")&&!zx[di(g,"display")]&&(a.position=di(t,"position")),g===t&&(a.position="static"),g.appendChild(bs),m=bs[h],g.removeChild(bs),a.position="absolute";return l&&f&&(_=Fr(g),_.time=ni.time,_.width=g[h]),Ze(d?m*s/u:m&&s?u/m*s:0)},fr=function(t,e,n,i){var s;return wf||Sf(),e in $i&&e!=="transform"&&(e=$i[e],~e.indexOf(",")&&(e=e.split(",")[0])),dr[e]&&e!=="transform"?(s=xa(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:Kl(di(t,si))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Jl[e]&&Jl[e](t,e,n)||di(t,e)||cf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Vr(t,e,s,n)+n:s},Vx=function(t,e,n,i){if(!n||n==="none"){var s=uo(e,t,1),o=s&&di(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=di(t,"borderTopColor"))}var a=new Hn(this._pt,t.style,e,0,1,_f),l=0,c=0,h,u,d,f,m,g,_,p,M,v,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=di(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=di(t,e)||i,g?t.style[e]=g:zr(t,e)),h=[n,i],uf(h),n=h[0],i=h[1],d=n.match(gs)||[],T=i.match(gs)||[],T.length){for(;u=gs.exec(i);)_=u[0],M=i.substring(l,u.index),m?m=(m+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(m=1),_!==(g=d[c++]||"")&&(f=parseFloat(g)||0,y=g.substr((f+"").length),_.charAt(1)==="="&&(_=_s(f,_)+y),p=parseFloat(_),v=_.substr((p+"").length),l=gs.lastIndex-v.length,v||(v=v||ri.units[e]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(f=Vr(t,e,g,v)||0),a._pt={_next:a._pt,p:M||c===1?M:",",s:f,c:p-f,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?bm:Mm;return rf.test(i)&&(a.e=0),this._pt=a,a},xm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Hx=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=xm[n]||n,e[1]=xm[i]||i,e.join(" ")},Gx=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],dr[a]&&(l=1,a=a==="transformOrigin"?si:Ge),zr(n,a);l&&(zr(n,Ge),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",xa(n,1),o.uncache=1,Sm(i)))}},Jl={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Hn(t._pt,e,n,0,0,Gx);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},_a=[1,0,0,1,0,0],Cm={},Rm=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},vm=function(t){var e=di(t,Ge);return Rm(e)?_a:e.substr(7).match(nf).map(Ze)},Cf=function(t,e){var n=t._gsap||Fr(t),i=t.style,s=vm(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?_a:s):(s===_a&&!t.offsetParent&&t!==co&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,co.appendChild(t)),s=vm(t),l?i.display=l:zr(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):co.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Tf=function(t,e,n,i,s,o){var a=t._gsap,l=s||Cf(t,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],m=l[1],g=l[2],_=l[3],p=l[4],M=l[5],v=e.split(" "),y=parseFloat(v[0])||0,T=parseFloat(v[1])||0,w,E,C,x;n?l!==_a&&(E=f*_-m*g)&&(C=y*(_/E)+T*(-g/E)+(g*M-_*p)/E,x=y*(-m/E)+T*(f/E)-(f*M-m*p)/E,y=C,T=x):(w=Em(t),y=w.x+(~v[0].indexOf("%")?y/100*w.width:y),T=w.y+(~(v[1]||v[0]).indexOf("%")?T/100*w.height:T)),i||i!==!1&&a.smooth?(p=y-c,M=T-h,a.xOffset=u+(p*f+M*g)-p,a.yOffset=d+(p*m+M*_)-M):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[si]="0px 0px",o&&(kr(o,a,"xOrigin",c,y),kr(o,a,"yOrigin",h,T),kr(o,a,"xOffset",u,a.xOffset),kr(o,a,"yOffset",d,a.yOffset)),t.setAttribute("data-svg-origin",y+" "+T)},xa=function(t,e){var n=t._gsap||new ff(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=di(t,si)||"0",h,u,d,f,m,g,_,p,M,v,y,T,w,E,C,x,b,P,D,O,k,G,V,z,Y,et,I,rt,Lt,Bt,zt,$t;return h=u=d=g=_=p=M=v=y=0,f=m=1,n.svg=!!(t.getCTM&&Am(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ge]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ge]!=="none"?l[Ge]:"")),i.scale=i.rotate=i.translate="none"),E=Cf(t,n.svg),n.svg&&(n.uncache?(Y=t.getBBox(),c=n.xOrigin-Y.x+"px "+(n.yOrigin-Y.y)+"px",z=""):z=!e&&t.getAttribute("data-svg-origin"),Tf(t,z||c,!!z||n.originIsAbsolute,n.smooth!==!1,E)),T=n.xOrigin||0,w=n.yOrigin||0,E!==_a&&(P=E[0],D=E[1],O=E[2],k=E[3],h=G=E[4],u=V=E[5],E.length===6?(f=Math.sqrt(P*P+D*D),m=Math.sqrt(k*k+O*O),g=P||D?lo(D,P)*Ms:0,M=O||k?lo(O,k)*Ms+g:0,M&&(m*=Math.abs(Math.cos(M*ho))),n.svg&&(h-=T-(T*P+w*O),u-=w-(T*D+w*k))):($t=E[6],Bt=E[7],I=E[8],rt=E[9],Lt=E[10],zt=E[11],h=E[12],u=E[13],d=E[14],C=lo($t,Lt),_=C*Ms,C&&(x=Math.cos(-C),b=Math.sin(-C),z=G*x+I*b,Y=V*x+rt*b,et=$t*x+Lt*b,I=G*-b+I*x,rt=V*-b+rt*x,Lt=$t*-b+Lt*x,zt=Bt*-b+zt*x,G=z,V=Y,$t=et),C=lo(-O,Lt),p=C*Ms,C&&(x=Math.cos(-C),b=Math.sin(-C),z=P*x-I*b,Y=D*x-rt*b,et=O*x-Lt*b,zt=k*b+zt*x,P=z,D=Y,O=et),C=lo(D,P),g=C*Ms,C&&(x=Math.cos(C),b=Math.sin(C),z=P*x+D*b,Y=G*x+V*b,D=D*x-P*b,V=V*x-G*b,P=z,G=Y),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),f=Ze(Math.sqrt(P*P+D*D+O*O)),m=Ze(Math.sqrt(V*V+$t*$t)),C=lo(G,V),M=Math.abs(C)>2e-4?C*Ms:0,y=zt?1/(zt<0?-zt:zt):0),n.svg&&(z=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!Rm(di(t,Ge)),z&&t.setAttribute("transform",z))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(f*=-1,M+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,M+=M<=0?180:-180)),e=e||n.uncache,n.x=h-((n.xPercent=h&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-h)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Ze(f),n.scaleY=Ze(m),n.rotation=Ze(g)+a,n.rotationX=Ze(_)+a,n.rotationY=Ze(p)+a,n.skewX=M+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[si]=Kl(c)),n.xOffset=n.yOffset=0,n.force3D=ri.force3D,n.renderTransform=n.svg?Xx:wm?Pm:Wx,n.uncache=0,n},Kl=function(t){return(t=t.split(" "))[0]+" "+t[1]},yf=function(t,e,n){var i=Sn(e);return Ze(parseFloat(e)+parseFloat(Vr(t,"x",n+"px",i)))+i},Wx=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Pm(t,e)},vs="0deg",ga="0px",ys=") ",Pm=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,m=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,M=n.target,v=n.zOrigin,y="",T=p==="auto"&&t&&t!==1||p===!0;if(v&&(u!==vs||h!==vs)){var w=parseFloat(h)*ho,E=Math.sin(w),C=Math.cos(w),x;w=parseFloat(u)*ho,x=Math.cos(w),o=yf(M,o,E*x*-v),a=yf(M,a,-Math.sin(w)*-v),l=yf(M,l,C*x*-v+v)}_!==ga&&(y+="perspective("+_+ys),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==ga||a!==ga||l!==ga)&&(y+=l!==ga||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+ys),c!==vs&&(y+="rotate("+c+ys),h!==vs&&(y+="rotateY("+h+ys),u!==vs&&(y+="rotateX("+u+ys),(d!==vs||f!==vs)&&(y+="skew("+d+", "+f+ys),(m!==1||g!==1)&&(y+="scale("+m+", "+g+ys),M.style[Ge]=y||"translate(0, 0)"},Xx=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,m=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,M=n.forceCSS,v=parseFloat(o),y=parseFloat(a),T,w,E,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=ho,c*=ho,T=Math.cos(l)*u,w=Math.sin(l)*u,E=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=ho,x=Math.tan(c-h),x=Math.sqrt(1+x*x),E*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,w*=x)),T=Ze(T),w=Ze(w),E=Ze(E),C=Ze(C)):(T=u,C=d,w=E=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Vr(f,"x",o,"px"),y=Vr(f,"y",a,"px")),(m||g||_||p)&&(v=Ze(v+m-(m*T+g*E)+_),y=Ze(y+g-(m*w+g*C)+p)),(i||s)&&(x=f.getBBox(),v=Ze(v+i/100*x.width),y=Ze(y+s/100*x.height)),x="matrix("+T+","+w+","+E+","+C+","+v+","+y+")",f.setAttribute("transform",x),M&&(f.style[Ge]=x)},qx=function(t,e,n,i,s){var o=360,a=on(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ms:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*dm)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*dm)%o-~~(c/o)*o)),t._pt=d=new Hn(t._pt,e,n,i,c,Cx),d.e=h,d.u="deg",t._props.push(n),d},ym=function(t,e){for(var n in e)t[n]=e[n];return t},Yx=function(t,e,n){var i=ym({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ge]=e,a=xa(n,1),zr(n,Ge),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ge],o[Ge]=e,a=xa(n,1),o[Ge]=c);for(l in dr)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Sn(c),m=Sn(h),u=f!==m?Vr(n,l,c,m):parseFloat(c),d=parseFloat(h),t._pt=new Hn(t._pt,a,l,u,d-u,Mf),t._pt.u=m||0,t._props.push(l));ym(a,i)};Vn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});Jl[t>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(m){return fr(a,m,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(m,g){return f[m]=d[g]=d[g]||d[(g-1)/2|0]}),a.init(l,f,u)}});var Rf={name:"css",register:Sf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,h,u,d,f,m,g,_,p,M,v,y,T,w,E,C,x;wf||Sf(),this.styles=this.styles||Tm(t),C=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(h=e[g],!(ei[g]&&pf(g,e,n,i,t,s)))){if(f=typeof h,m=Jl[g],f==="function"&&(h=h.call(n,i,t,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=ao(h)),m)m(this,t,g,h,n)&&(E=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),h+="",hr.lastIndex=0,hr.test(c)||(_=Sn(c),p=Sn(h),p?_!==p&&(c=Vr(t,g,c,p)+p):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(f!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],on(c)&&~c.indexOf("random(")&&(c=ao(c)),Sn(c+"")||c==="auto"||(c+=ri.units[g]||Sn(fr(t,g))||""),(c+"").charAt(1)==="="&&(c=fr(t,g))):c=fr(t,g),d=parseFloat(c),M=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),M&&(h=h.substr(2)),u=parseFloat(h),g in $i&&(g==="autoAlpha"&&(d===1&&fr(t,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),kr(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),g!=="scale"&&g!=="transform"&&(g=$i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in dr,v){if(this.styles.save(g),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=di(t,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=h,h=di(t,"perspective"),b?t.style.perspective=b:zr(t,"perspective")}u=parseFloat(h)}if(y||(T=t._gsap,T.renderTransform&&!e.parseTransform||xa(t,e.parseTransform),w=e.smoothOrigin!==!1&&T.smooth,y=this._pt=new Hn(this._pt,a,Ge,0,1,T.renderTransform,T,0,-1),y.dep=1),g==="scale")this._pt=new Hn(this._pt,T,"scaleY",T.scaleY,(M?_s(T.scaleY,M+u):u)-T.scaleY||0,Mf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(si,0,a[si]),h=Hx(h),T.svg?Tf(t,h,0,w,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&kr(this,T,"zOrigin",T.zOrigin,p),kr(this,a,g,Kl(c),Kl(h)));continue}else if(g==="svgOrigin"){Tf(t,h,1,w,0,this);continue}else if(g in Cm){qx(this,T,g,d,M?_s(d,M+h):h);continue}else if(g==="smoothOrigin"){kr(this,T,"smooth",T.smooth,h);continue}else if(g==="force3D"){T[g]=h;continue}else if(g==="transform"){Yx(this,h,t);continue}}else g in a||(g=uo(g)||g);if(v||(u||u===0)&&(d||d===0)&&!Ax.test(h)&&g in a)_=(c+"").substr((d+"").length),u||(u=0),p=Sn(h)||(g in ri.units?ri.units[g]:_),_!==p&&(d=Vr(t,g,c,p)),this._pt=new Hn(this._pt,v?T:a,g,d,(M?_s(d,M+u):u)-d,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?Ix:Mf),this._pt.u=p||0,v&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Px):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=Rx);else if(g in a)Vx.call(this,t,g,c,M?M+h:h);else if(g in t)this.add(t,g,c||t[g],M?M+h:h,i,s);else if(g!=="parseTransform"){Xl(g,h);continue}v||(g in a?C.push(g,0,a[g]):typeof t[g]=="function"?C.push(g,2,t[g]()):C.push(g,1,c||t[g])),o.push(g)}}E&&vf(this)},render:function(t,e){if(e.tween._time||!Ef())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:fr,aliases:$i,getSetter:function(t,e,n){var i=$i[e];return i&&i.indexOf(",")<0&&(e=i),e in dr&&e!==si&&(t._gsap.x||fr(t,"x"))?n&&fm===n?e==="scale"?Fx:Nx:(fm=n||{})&&(e==="scale"?Ux:Ox):t.style&&!Wl(t.style[e])?Dx:~e.indexOf("-")?Lx:$l(t,e)},core:{_removeProperty:zr,_getMatrix:Cf}};In.utils.checkPrefix=uo;In.core.getStyleSaver=Tm;(function(r,t,e,n){var i=Vn(r+","+t+","+e,function(s){dr[s]=1});Vn(t,function(s){ri.units[s]="deg",Cm[s]=1}),$i[i[13]]=r+","+t,Vn(n,function(s){var o=s.split(":");$i[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Vn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ri.units[r]="px"});In.registerPlugin(Rf);var st=In.registerPlugin(Rf)||In,aT=st.core.Tween;function Im(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function Zx(r,t,e){return t&&Im(r.prototype,t),e&&Im(r,e),r}var Tn,tc,$x,pi,Hr,Gr,po,Lm,Ss,ya,Nm,pr,Oi,Fm,Um=function(){return Tn||typeof window<"u"&&(Tn=window.gsap)&&Tn.registerPlugin&&Tn},Om=1,fo=[],se=[],Bi=[],Ma=Date.now,Pf=function(t,e){return e},Jx=function(){var t=ya.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,se),i.push.apply(i,Bi),se=n,Bi=i,Pf=function(o,a){return e[o](a)}},gr=function(t,e){return~Bi.indexOf(t)&&Bi[Bi.indexOf(t)+1][e]},ba=function(t){return!!~Nm.indexOf(t)},Wn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},Gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},Ql="scrollLeft",jl="scrollTop",If=function(){return pr&&pr.isPressed||se.cache++},ec=function(t,e){var n=function i(s){if(s||s===0){Om&&(pi.history.scrollRestoration="manual");var o=pr&&pr.isPressed;s=i.v=Math.round(s)||(pr&&pr.iOS?1:0),t(s),i.cacheID=se.cache,o&&Pf("ss",s)}else(e||se.cache!==i.cacheID||Pf("ref"))&&(i.cacheID=se.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Dn={s:Ql,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:ec(function(r){return arguments.length?pi.scrollTo(r,tn.sc()):pi.pageXOffset||Hr[Ql]||Gr[Ql]||po[Ql]||0})},tn={s:jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Dn,sc:ec(function(r){return arguments.length?pi.scrollTo(Dn.sc(),r):pi.pageYOffset||Hr[jl]||Gr[jl]||po[jl]||0})},Xn=function(t,e){return(e&&e._ctx&&e._ctx.selector||Tn.utils.toArray)(t)[0]||(typeof t=="string"&&Tn.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},Kx=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},mr=function(t,e){var n=e.s,i=e.sc;ba(t)&&(t=Hr.scrollingElement||Gr);var s=se.indexOf(t),o=i===tn.sc?1:2;!~s&&(s=se.push(t)-1),se[s+o]||Wn(t,"scroll",If);var a=se[s+o],l=a||(se[s+o]=ec(gr(t,n),!0)||(ba(t)?i:ec(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=Tn.getProperty(t,"scrollBehavior")==="smooth"),l},nc=function(t,e,n){var i=t,s=t,o=Ma(),a=o,l=e||50,c=Math.max(500,l*3),h=function(m,g){var _=Ma();g||_-o>l?(s=i,i=m,a=o,o=_):n?i+=m:i=s+(m-s)/(_-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(m){var g=a,_=s,p=Ma();return(m||m===0)&&m!==i&&h(m),o===a||p-a>c?0:(i+(n?_:-_))/((n?p:o)-g)*1e3};return{update:h,reset:u,getVelocity:d}},va=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Dm=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Bm=function(){ya=Tn.core.globals().ScrollTrigger,ya&&ya.core&&Jx()},km=function(t){return Tn=t||Um(),!tc&&Tn&&typeof document<"u"&&document.body&&(pi=window,Hr=document,Gr=Hr.documentElement,po=Hr.body,Nm=[pi,Hr,Gr,po],$x=Tn.utils.clamp,Fm=Tn.core.context||function(){},Ss="onpointerenter"in po?"pointer":"mouse",Lm=$e.isTouch=pi.matchMedia&&pi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in pi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Oi=$e.eventTypes=("ontouchstart"in Gr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Gr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Om=0},500),Bm(),tc=1),tc};Dn.op=tn;se.cache=0;var $e=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){tc||km(Tn)||console.warn("Please gsap.registerPlugin(Observer)"),ya||Bm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,m=n.wheelSpeed,g=n.event,_=n.onDragStart,p=n.onDragEnd,M=n.onDrag,v=n.onPress,y=n.onRelease,T=n.onRight,w=n.onLeft,E=n.onUp,C=n.onDown,x=n.onChangeX,b=n.onChangeY,P=n.onChange,D=n.onToggleX,O=n.onToggleY,k=n.onHover,G=n.onHoverEnd,V=n.onMove,z=n.ignoreCheck,Y=n.isNormalizer,et=n.onGestureStart,I=n.onGestureEnd,rt=n.onWheel,Lt=n.onEnable,Bt=n.onDisable,zt=n.onClick,$t=n.scrollSpeed,$=n.capture,Q=n.allowClicks,ut=n.lockAxis,It=n.onLockAxis;this.target=a=Xn(a)||Gr,this.vars=n,f&&(f=Tn.utils.toArray(f)),i=i||1e-9,s=s||0,m=m||1,$t=$t||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(pi.getComputedStyle(po).lineHeight)||22);var Mt,Gt,ue,mt,Ft,Kt,Ut,W=this,F=0,xe=0,re=n.passive||!h&&n.passive!==!1,Wt=mr(a,Dn),St=mr(a,tn),R=Wt(),S=St(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Oi[0]==="pointerdown",J=ba(a),K=a.ownerDocument||Hr,Z=[0,0,0],bt=[0,0,0],ot=0,Et=function(){return ot=Ma()},wt=function(Dt,ee){return(W.event=Dt)&&f&&Kx(Dt.target,f)||ee&&U&&Dt.pointerType!=="touch"||z&&z(Dt,ee)},it=function(){W._vx.reset(),W._vy.reset(),Gt.pause(),u&&u(W)},at=function(){var Dt=W.deltaX=Dm(Z),ee=W.deltaY=Dm(bt),gt=Math.abs(Dt)>=i,Jt=Math.abs(ee)>=i;P&&(gt||Jt)&&P(W,Dt,ee,Z,bt),gt&&(T&&W.deltaX>0&&T(W),w&&W.deltaX<0&&w(W),x&&x(W),D&&W.deltaX<0!=F<0&&D(W),F=W.deltaX,Z[0]=Z[1]=Z[2]=0),Jt&&(C&&W.deltaY>0&&C(W),E&&W.deltaY<0&&E(W),b&&b(W),O&&W.deltaY<0!=xe<0&&O(W),xe=W.deltaY,bt[0]=bt[1]=bt[2]=0),(mt||ue)&&(V&&V(W),ue&&(_&&ue===1&&_(W),M&&M(W),ue=0),mt=!1),Kt&&!(Kt=!1)&&It&&It(W),Ft&&(rt(W),Ft=!1),Mt=0},Tt=function(Dt,ee,gt){Z[gt]+=Dt,bt[gt]+=ee,W._vx.update(Dt),W._vy.update(ee),c?Mt||(Mt=requestAnimationFrame(at)):at()},At=function(Dt,ee){ut&&!Ut&&(W.axis=Ut=Math.abs(Dt)>Math.abs(ee)?"x":"y",Kt=!0),Ut!=="y"&&(Z[2]+=Dt,W._vx.update(Dt,!0)),Ut!=="x"&&(bt[2]+=ee,W._vy.update(ee,!0)),c?Mt||(Mt=requestAnimationFrame(at)):at()},lt=function(Dt){if(!wt(Dt,1)){Dt=va(Dt,h);var ee=Dt.clientX,gt=Dt.clientY,Jt=ee-W.x,Ot=gt-W.y,Qt=W.isDragging;W.x=ee,W.y=gt,(Qt||(Jt||Ot)&&(Math.abs(W.startX-ee)>=s||Math.abs(W.startY-gt)>=s))&&(ue||(ue=Qt?2:1),Qt||(W.isDragging=!0),At(Jt,Ot))}},Zt=W.onPress=function(xt){wt(xt,1)||xt&&xt.button||(W.axis=Ut=null,Gt.pause(),W.isPressed=!0,xt=va(xt),F=xe=0,W.startX=W.x=xt.clientX,W.startY=W.y=xt.clientY,W._vx.reset(),W._vy.reset(),Wn(Y?a:K,Oi[1],lt,re,!0),W.deltaX=W.deltaY=0,v&&v(W))},L=W.onRelease=function(xt){if(!wt(xt,1)){Gn(Y?a:K,Oi[1],lt,!0);var Dt=!isNaN(W.y-W.startY),ee=W.isDragging,gt=ee&&(Math.abs(W.x-W.startX)>3||Math.abs(W.y-W.startY)>3),Jt=va(xt);!gt&&Dt&&(W._vx.reset(),W._vy.reset(),h&&Q&&Tn.delayedCall(.08,function(){if(Ma()-ot>300&&!xt.defaultPrevented){if(xt.target.click)xt.target.click();else if(K.createEvent){var Ot=K.createEvent("MouseEvents");Ot.initMouseEvent("click",!0,!0,pi,1,Jt.screenX,Jt.screenY,Jt.clientX,Jt.clientY,!1,!1,!1,!1,0,null),xt.target.dispatchEvent(Ot)}}})),W.isDragging=W.isGesturing=W.isPressed=!1,u&&ee&&!Y&&Gt.restart(!0),ue&&at(),p&&ee&&p(W),y&&y(W,gt)}},ft=function(Dt){return Dt.touches&&Dt.touches.length>1&&(W.isGesturing=!0)&&et(Dt,W.isDragging)},nt=function(){return(W.isGesturing=!1)||I(W)},dt=function(Dt){if(!wt(Dt)){var ee=Wt(),gt=St();Tt((ee-R)*$t,(gt-S)*$t,1),R=ee,S=gt,u&&Gt.restart(!0)}},tt=function(Dt){if(!wt(Dt)){Dt=va(Dt,h),rt&&(Ft=!0);var ee=(Dt.deltaMode===1?l:Dt.deltaMode===2?pi.innerHeight:1)*m;Tt(Dt.deltaX*ee,Dt.deltaY*ee,0),u&&!Y&&Gt.restart(!0)}},j=function(Dt){if(!wt(Dt)){var ee=Dt.clientX,gt=Dt.clientY,Jt=ee-W.x,Ot=gt-W.y;W.x=ee,W.y=gt,mt=!0,u&&Gt.restart(!0),(Jt||Ot)&&At(Jt,Ot)}},ht=function(Dt){W.event=Dt,k(W)},kt=function(Dt){W.event=Dt,G(W)},me=function(Dt){return wt(Dt)||va(Dt,h)&&zt(W)};Gt=W._dc=Tn.delayedCall(d||.25,it).pause(),W.deltaX=W.deltaY=0,W._vx=nc(0,50,!0),W._vy=nc(0,50,!0),W.scrollX=Wt,W.scrollY=St,W.isDragging=W.isGesturing=W.isPressed=!1,Fm(this),W.enable=function(xt){return W.isEnabled||(Wn(J?K:a,"scroll",If),o.indexOf("scroll")>=0&&Wn(J?K:a,"scroll",dt,re,$),o.indexOf("wheel")>=0&&Wn(a,"wheel",tt,re,$),(o.indexOf("touch")>=0&&Lm||o.indexOf("pointer")>=0)&&(Wn(a,Oi[0],Zt,re,$),Wn(K,Oi[2],L),Wn(K,Oi[3],L),Q&&Wn(a,"click",Et,!0,!0),zt&&Wn(a,"click",me),et&&Wn(K,"gesturestart",ft),I&&Wn(K,"gestureend",nt),k&&Wn(a,Ss+"enter",ht),G&&Wn(a,Ss+"leave",kt),V&&Wn(a,Ss+"move",j)),W.isEnabled=!0,W.isDragging=W.isGesturing=W.isPressed=mt=ue=!1,W._vx.reset(),W._vy.reset(),R=Wt(),S=St(),xt&&xt.type&&Zt(xt),Lt&&Lt(W)),W},W.disable=function(){W.isEnabled&&(fo.filter(function(xt){return xt!==W&&ba(xt.target)}).length||Gn(J?K:a,"scroll",If),W.isPressed&&(W._vx.reset(),W._vy.reset(),Gn(Y?a:K,Oi[1],lt,!0)),Gn(J?K:a,"scroll",dt,$),Gn(a,"wheel",tt,$),Gn(a,Oi[0],Zt,$),Gn(K,Oi[2],L),Gn(K,Oi[3],L),Gn(a,"click",Et,!0),Gn(a,"click",me),Gn(K,"gesturestart",ft),Gn(K,"gestureend",nt),Gn(a,Ss+"enter",ht),Gn(a,Ss+"leave",kt),Gn(a,Ss+"move",j),W.isEnabled=W.isPressed=W.isDragging=!1,Bt&&Bt(W))},W.kill=W.revert=function(){W.disable();var xt=fo.indexOf(W);xt>=0&&fo.splice(xt,1),pr===W&&(pr=0)},fo.push(W),Y&&ba(a)&&(pr=W),W.enable(g)},Zx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();$e.version="3.14.2";$e.create=function(r){return new $e(r)};$e.register=km;$e.getAll=function(){return fo.slice()};$e.getById=function(r){return fo.filter(function(t){return t.vars.id===r})[0]};Um()&&Tn.registerPlugin($e);var Ct,_o,ce,Fe,_i,ve,qf,xc,Ua,Ra,Ta,ic,Ln,Mc,kf,Yn,zm,Vm,xo,i0,Df,r0,qn,zf,s0,o0,Wr,Vf,Yf,vo,Zf,Pa,Hf,Lf,rc=1,Nn=Date.now,Nf=Nn(),Pi=0,wa=0,Hm=function(t,e,n){var i=gi(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Gm=function(t,e){return e&&(!gi(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},Qx=function r(){return wa&&requestAnimationFrame(r)},Wm=function(){return Mc=1},Xm=function(){return Mc=0},Ji=function(t){return t},Ea=function(t){return Math.round(t*1e5)/1e5||0},a0=function(){return typeof window<"u"},l0=function(){return Ct||a0()&&(Ct=window.gsap)&&Ct.registerPlugin&&Ct},Rs=function(t){return!!~qf.indexOf(t)},c0=function(t){return(t==="Height"?Zf:ce["inner"+t])||_i["client"+t]||ve["client"+t]},h0=function(t){return gr(t,"getBoundingClientRect")||(Rs(t)?function(){return _c.width=ce.innerWidth,_c.height=Zf,_c}:function(){return _r(t)})},jx=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=gr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?c0(s):t["client"+s])||0}},tv=function(t,e){return!e||~Bi.indexOf(t)?h0(t):function(){return _c}},Ki=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=gr(t,n))?o()-h0(t)()[s]:Rs(t)?(_i[n]||ve[n])-c0(i):t[n]-t["offset"+i])},sc=function(t,e){for(var n=0;n<xo.length;n+=3)(!e||~e.indexOf(xo[n+1]))&&t(xo[n],xo[n+1],xo[n+2])},gi=function(t){return typeof t=="string"},Fn=function(t){return typeof t=="function"},Aa=function(t){return typeof t=="number"},Ts=function(t){return typeof t=="object"},Sa=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},Ff=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},mo=Math.abs,u0="left",f0="top",$f="right",Jf="bottom",Es="width",As="height",Ia="Right",Da="Left",La="Top",Na="Bottom",en="padding",Ci="margin",Mo="Width",Kf="Height",an="px",Ri=function(t){return ce.getComputedStyle(t)},ev=function(t){var e=Ri(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},qm=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},_r=function(t,e){var n=e&&Ri(t)[kf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ct.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},vc=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},d0=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},nv=function(t){return function(e){return Ct.utils.snap(d0(t),e)}},Qf=function(t){var e=Ct.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},iv=function(t){return function(e,n){return Qf(d0(t))(e,n.direction)}},oc=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},_n=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},gn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},ac=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Ym={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},lc={toggleActions:"play",anticipatePin:0},yc={top:0,left:0,center:.5,bottom:1,right:1},dc=function(t,e){if(gi(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in yc?yc[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},cc=function(t,e,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,m=Fe.createElement("div"),g=Rs(n)||gr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,p=g?ve:n,M=t.indexOf("start")!==-1,v=M?c:h,y="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(y+=(i===tn?$f:Jf)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=M,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=y,m.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],pc(m,0,i,M),m},pc=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+Mo]=1,s["border"+a+Mo]=0,s[n.p]=e+"px",Ct.set(t,s)},oe=[],Gf={},Oa,Zm=function(){return Nn()-Pi>34&&(Oa||(Oa=requestAnimationFrame(xr)))},go=function(){(!qn||!qn.isPressed||qn.startX>ve.clientWidth)&&(se.cache++,qn?Oa||(Oa=requestAnimationFrame(xr)):xr(),Pi||Is("scrollStart"),Pi=Nn())},Uf=function(){o0=ce.innerWidth,s0=ce.innerHeight},Ca=function(t){se.cache++,(t===!0||!Ln&&!r0&&!Fe.fullscreenElement&&!Fe.webkitFullscreenElement&&(!zf||o0!==ce.innerWidth||Math.abs(ce.innerHeight-s0)>ce.innerHeight*.25))&&xc.restart(!0)},Ps={},rv=[],p0=function r(){return gn(jt,"scrollEnd",r)||ws(!0)},Is=function(t){return Ps[t]&&Ps[t].map(function(e){return e()})||rv},mi=[],m0=function(t){for(var e=0;e<mi.length;e+=5)(!t||mi[e+4]&&mi[e+4].query===t)&&(mi[e].style.cssText=mi[e+1],mi[e].getBBox&&mi[e].setAttribute("transform",mi[e+2]||""),mi[e+3].uncache=1)},g0=function(){return se.forEach(function(t){return Fn(t)&&++t.cacheID&&(t.rec=t())})},jf=function(t,e){var n;for(Yn=0;Yn<oe.length;Yn++)n=oe[Yn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Pa=!0,e&&m0(e),e||Is("revert")},_0=function(t,e){se.cache++,(e||!Zn)&&se.forEach(function(n){return Fn(n)&&n.cacheID++&&(n.rec=0)}),gi(t)&&(ce.history.scrollRestoration=Yf=t)},Zn,Cs=0,$m,sv=function(){if($m!==Cs){var t=$m=Cs;requestAnimationFrame(function(){return t===Cs&&ws(!0)})}},x0=function(){ve.appendChild(vo),Zf=!qn&&vo.offsetHeight||ce.innerHeight,ve.removeChild(vo)},Jm=function(t){return Ua(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},ws=function(t,e){if(_i=Fe.documentElement,ve=Fe.body,qf=[ce,Fe,_i,ve],Pi&&!t&&!Pa){_n(jt,"scrollEnd",p0);return}x0(),Zn=jt.isRefreshing=!0,Pa||g0();var n=Is("refreshInit");i0&&jt.sort(),e||jf(),se.forEach(function(i){Fn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),oe.slice(0).forEach(function(i){return i.refresh()}),Pa=!1,oe.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Hf=1,Jm(!0),oe.forEach(function(i){var s=Ki(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Jm(!1),Hf=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),se.forEach(function(i){Fn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),_0(Yf,1),xc.pause(),Cs++,Zn=2,xr(2),oe.forEach(function(i){return Fn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Zn=jt.isRefreshing=!1,Is("refresh")},Wf=0,mc=1,Fa,xr=function(t){if(t===2||!Zn&&!Pa){jt.isUpdating=!0,Fa&&Fa.update(0);var e=oe.length,n=Nn(),i=n-Nf>=50,s=e&&oe[0].scroll();if(mc=Wf>s?-1:1,Zn||(Wf=s),i&&(Pi&&!Mc&&n-Pi>200&&(Pi=0,Is("scrollEnd")),Ta=Nf,Nf=n),mc<0){for(Yn=e;Yn-- >0;)oe[Yn]&&oe[Yn].update(0,i);mc=1}else for(Yn=0;Yn<e;Yn++)oe[Yn]&&oe[Yn].update(0,i);jt.isUpdating=!1}Oa=0},Xf=[u0,f0,Jf,$f,Ci+Na,Ci+Ia,Ci+La,Ci+Da,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],gc=Xf.concat([Es,As,"boxSizing","max"+Mo,"max"+Kf,"position",Ci,en,en+La,en+Ia,en+Na,en+Da]),ov=function(t,e,n){yo(n);var i=t._gsap;if(i.spacerIsNative)yo(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},Of=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=Xf.length,o=e.style,a=t.style,l;s--;)l=Xf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Jf]=a[$f]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Es]=vc(t,Dn)+an,o[As]=vc(t,tn)+an,o[en]=a[Ci]=a[f0]=a[u0]="0",yo(i),a[Es]=a["max"+Mo]=n[Es],a[As]=a["max"+Kf]=n[As],a[en]=n[en],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},av=/([A-Z])/g,yo=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Ct.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(av,"-$1").toLowerCase())}},hc=function(t){for(var e=gc.length,n=t.style,i=[],s=0;s<e;s++)i.push(gc[s],n[gc[s]]);return i.t=t,i},lv=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},_c={left:0,top:0},Km=function(t,e,n,i,s,o,a,l,c,h,u,d,f,m){Fn(t)&&(t=t(l)),gi(t)&&t.substr(0,3)==="max"&&(t=d+(t.charAt(4)==="="?dc("0"+t.substr(3),n):0));var g=f?f.time():0,_,p,M;if(f&&f.seek(0),isNaN(t)||(t=+t),Aa(t))f&&(t=Ct.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,t)),a&&pc(a,n,i,!0);else{Fn(e)&&(e=e(l));var v=(t||"0").split(" "),y,T,w,E;M=Xn(e,l)||ve,y=_r(M)||{},(!y||!y.left&&!y.top)&&Ri(M).display==="none"&&(E=M.style.display,M.style.display="block",y=_r(M),E?M.style.display=E:M.style.removeProperty("display")),T=dc(v[0],y[i.d]),w=dc(v[1]||"0",n),t=y[i.p]-c[i.p]-h+T+s-w,a&&pc(a,w,i,n-w<20||a._isStart&&w>20),n-=n-w}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var C=t+n,x=o._isStart;_="scroll"+i.d2,pc(o,C,i,x&&C>20||!x&&(u?Math.max(ve[_],_i[_]):o.parentNode[_])<=C+1),u&&(c=_r(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+an))}return f&&M&&(_=_r(M),f.seek(d),p=_r(M),f._caScrollDist=_[i.p]-p[i.p],t=t/f._caScrollDist*d),f&&f.seek(g),f?t:Math.round(t)},cv=/(webkit|moz|length|cssText|inset)/i,Qm=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===ve){t._stOrig=s.cssText,a=Ri(t);for(o in a)!+o&&!cv.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Ct.core.getCache(t).uncache=1,e.appendChild(t)}},v0=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},uc=function(t,e,n){var i={};i[e.p]="+="+n,Ct.set(t,i)},jm=function(t,e){var n=mr(t,e),i="_scroll"+e.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,m={};c=c||n();var g=v0(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return g(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){se.cache++,o.tween&&xr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ct.to(t,l),d};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},_n(t,"wheel",n.wheelHandler),jt.isTouch&&_n(t,"touchmove",n.wheelHandler),s},jt=(function(){function r(e,n){_o||r.register(Ct)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Vf(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!wa){this.update=this.refresh=this.kill=Ji;return}n=qm(gi(n)||Aa(n)||n.nodeType?{trigger:n}:n,lc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,M=s.onSnapComplete,v=s.once,y=s.snap,T=s.pinReparent,w=s.pinSpacer,E=s.containerAnimation,C=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Dn:tn,P=!u&&u!==0,D=Xn(n.scroller||ce),O=Ct.core.getCache(D),k=Rs(D),G=("pinType"in n?n.pinType:gr(D,"pinType")||k&&"fixed")==="fixed",V=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],z=P&&n.toggleActions.split(" "),Y="markers"in n?n.markers:lc.markers,et=k?0:parseFloat(Ri(D)["border"+b.p2+Mo])||0,I=this,rt=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Lt=jx(D,k,b),Bt=tv(D,k),zt=0,$t=0,$=0,Q=mr(D,b),ut,It,Mt,Gt,ue,mt,Ft,Kt,Ut,W,F,xe,re,Wt,St,R,S,U,J,K,Z,bt,ot,Et,wt,it,at,Tt,At,lt,Zt,L,ft,nt,dt,tt,j,ht,kt;if(I._startClamp=I._endClamp=!1,I._dir=b,_*=45,I.scroller=D,I.scroll=E?E.time.bind(E):Q,Gt=Q(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(i0=1,n.refreshPriority===-9999&&(Fa=I)),O.tweenScroll=O.tweenScroll||{top:jm(D,tn),left:jm(D,Dn)},I.tweenTo=ut=O.tweenScroll[b.p],I.scrubDuration=function(gt){ft=Aa(gt)&&gt,ft?L?L.duration(gt):L=Ct.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ft,paused:!0,onComplete:function(){return p&&p(I)}}):(L&&L.progress(1).kill(),L=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),lt=0,l||(l=i.vars.id)),y&&((!Ts(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in ve.style&&Ct.set(k?[ve,_i]:D,{scrollBehavior:"auto"}),se.forEach(function(gt){return Fn(gt)&&gt.target===(k?Fe.scrollingElement||_i:D)&&(gt.smooth=!1)}),Mt=Fn(y.snapTo)?y.snapTo:y.snapTo==="labels"?nv(i):y.snapTo==="labelsDirectional"?iv(i):y.directional!==!1?function(gt,Jt){return Qf(y.snapTo)(gt,Nn()-$t<500?0:Jt.direction)}:Ct.utils.snap(y.snapTo),nt=y.duration||{min:.1,max:2},nt=Ts(nt)?Ra(nt.min,nt.max):Ra(nt,nt),dt=Ct.delayedCall(y.delay||ft/2||.1,function(){var gt=Q(),Jt=Nn()-$t<500,Ot=ut.tween;if((Jt||Math.abs(I.getVelocity())<10)&&!Ot&&!Mc&&zt!==gt){var Qt=(gt-mt)/Wt,Ke=i&&!P?i.totalProgress():Qt,ae=Jt?0:(Ke-Zt)/(Nn()-Ta)*1e3||0,Se=Ct.utils.clamp(-Qt,1-Qt,mo(ae/2)*ae/.185),je=Qt+(y.inertia===!1?0:Se),Ue,Pe,ge=y,Qn=ge.onStart,we=ge.onInterrupt,Rn=ge.onComplete;if(Ue=Mt(je,I),Aa(Ue)||(Ue=je),Pe=Math.max(0,Math.round(mt+Ue*Wt)),gt<=Ft&&gt>=mt&&Pe!==gt){if(Ot&&!Ot._initted&&Ot.data<=mo(Pe-gt))return;y.inertia===!1&&(Se=Ue-Qt),ut(Pe,{duration:nt(mo(Math.max(mo(je-Ke),mo(Ue-Ke))*.185/ae/.05||0)),ease:y.ease||"power3",data:mo(Pe-gt),onInterrupt:function(){return dt.restart(!0)&&we&&we(I)},onComplete:function(){I.update(),zt=Q(),i&&!P&&(L?L.resetTo("totalProgress",Ue,i._tTime/i._tDur):i.progress(Ue)),lt=Zt=i&&!P?i.totalProgress():I.progress,M&&M(I),Rn&&Rn(I)}},gt,Se*Wt,Pe-gt-Se*Wt),Qn&&Qn(I,ut.tween)}}else I.isActive&&zt!==gt&&dt.restart(!0)}).pause()),l&&(Gf[l]=I),d=I.trigger=Xn(d||f!==!0&&f),kt=d&&d._gsap&&d._gsap.stRevert,kt&&(kt=kt(I)),f=f===!0?d:Xn(f),gi(a)&&(a={targets:d,className:a}),f&&(m===!1||m===Ci||(m=!m&&f.parentNode&&f.parentNode.style&&Ri(f.parentNode).display==="flex"?!1:en),I.pin=f,It=Ct.core.getCache(f),It.spacer?St=It.pinState:(w&&(w=Xn(w),w&&!w.nodeType&&(w=w.current||w.nativeElement),It.spacerIsNative=!!w,w&&(It.spacerState=hc(w))),It.spacer=U=w||Fe.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),It.pinState=St=hc(f)),n.force3D!==!1&&Ct.set(f,{force3D:!0}),I.spacer=U=It.spacer,At=Ri(f),Et=At[m+b.os2],K=Ct.getProperty(f),Z=Ct.quickSetter(f,b.a,an),Of(f,U,At),S=hc(f)),Y){xe=Ts(Y)?qm(Y,Ym):Ym,W=cc("scroller-start",l,D,b,xe,0),F=cc("scroller-end",l,D,b,xe,0,W),J=W["offset"+b.op.d2];var me=Xn(gr(D,"content")||D);Kt=this.markerStart=cc("start",l,me,b,xe,J,0,E),Ut=this.markerEnd=cc("end",l,me,b,xe,J,0,E),E&&(ht=Ct.quickSetter([Kt,Ut],b.a,an)),!G&&!(Bi.length&&gr(D,"fixedMarkers")===!0)&&(ev(k?ve:D),Ct.set([W,F],{force3D:!0}),it=Ct.quickSetter(W,b.a,an),Tt=Ct.quickSetter(F,b.a,an))}if(E){var xt=E.vars.onUpdate,Dt=E.vars.onUpdateParams;E.eventCallback("onUpdate",function(){I.update(0,0,1),xt&&xt.apply(E,Dt||[])})}if(I.previous=function(){return oe[oe.indexOf(I)-1]},I.next=function(){return oe[oe.indexOf(I)+1]},I.revert=function(gt,Jt){if(!Jt)return I.kill(!0);var Ot=gt!==!1||!I.enabled,Qt=Ln;Ot!==I.isReverted&&(Ot&&(tt=Math.max(Q(),I.scroll.rec||0),$=I.progress,j=i&&i.progress()),Kt&&[Kt,Ut,W,F].forEach(function(Ke){return Ke.style.display=Ot?"none":"block"}),Ot&&(Ln=I,I.update(Ot)),f&&(!T||!I.isActive)&&(Ot?ov(f,U,St):Of(f,U,Ri(f),wt)),Ot||I.update(Ot),Ln=Qt,I.isReverted=Ot)},I.refresh=function(gt,Jt,Ot,Qt){if(!((Ln||!I.enabled)&&!Jt)){if(f&&gt&&Pi){_n(r,"scrollEnd",p0);return}!Zn&&rt&&rt(I),Ln=I,ut.tween&&!Ot&&(ut.tween.kill(),ut.tween=0),L&&L.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(yt){return yt.vars.immediateRender&&yt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Ke=Lt(),ae=Bt(),Se=E?E.duration():Ki(D,b),je=Wt<=.01||!Wt,Ue=0,Pe=Qt||0,ge=Ts(Ot)?Ot.end:n.end,Qn=n.endTrigger||d,we=Ts(Ot)?Ot.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),Rn=I.pinnedContainer=n.pinnedContainer&&Xn(n.pinnedContainer,I),ai=d&&Math.max(0,oe.indexOf(I))||0,rn=ai,sn,pn,lr,js,mn,A,B,q,X,H,ct,vt,pt;for(Y&&Ts(Ot)&&(vt=Ct.getProperty(W,b.p),pt=Ct.getProperty(F,b.p));rn-- >0;)A=oe[rn],A.end||A.refresh(0,1)||(Ln=I),B=A.pin,B&&(B===d||B===f||B===Rn)&&!A.isReverted&&(H||(H=[]),H.unshift(A),A.revert(!0,!0)),A!==oe[rn]&&(ai--,rn--);for(Fn(we)&&(we=we(I)),we=Hm(we,"start",I),mt=Km(we,d,Ke,b,Q(),Kt,W,I,ae,et,G,Se,E,I._startClamp&&"_startClamp")||(f?-.001:0),Fn(ge)&&(ge=ge(I)),gi(ge)&&!ge.indexOf("+=")&&(~ge.indexOf(" ")?ge=(gi(we)?we.split(" ")[0]:"")+ge:(Ue=dc(ge.substr(2),Ke),ge=gi(we)?we:(E?Ct.utils.mapRange(0,E.duration(),E.scrollTrigger.start,E.scrollTrigger.end,mt):mt)+Ue,Qn=d)),ge=Hm(ge,"end",I),Ft=Math.max(mt,Km(ge||(Qn?"100% 0":Se),Qn,Ke,b,Q()+Ue,Ut,F,I,ae,et,G,Se,E,I._endClamp&&"_endClamp"))||-.001,Ue=0,rn=ai;rn--;)A=oe[rn]||{},B=A.pin,B&&A.start-A._pinPush<=mt&&!E&&A.end>0&&(sn=A.end-(I._startClamp?Math.max(0,A.start):A.start),(B===d&&A.start-A._pinPush<mt||B===Rn)&&isNaN(we)&&(Ue+=sn*(1-A.progress)),B===f&&(Pe+=sn));if(mt+=Ue,Ft+=Ue,I._startClamp&&(I._startClamp+=Ue),I._endClamp&&!Zn&&(I._endClamp=Ft||-.001,Ft=Math.min(Ft,Ki(D,b))),Wt=Ft-mt||(mt-=.01)&&.001,je&&($=Ct.utils.clamp(0,1,Ct.utils.normalize(mt,Ft,tt))),I._pinPush=Pe,Kt&&Ue&&(sn={},sn[b.a]="+="+Ue,Rn&&(sn[b.p]="-="+Q()),Ct.set([Kt,Ut],sn)),f&&!(Hf&&I.end>=Ki(D,b)))sn=Ri(f),js=b===tn,lr=Q(),bt=parseFloat(K(b.a))+Pe,!Se&&Ft>1&&(ct=(k?Fe.scrollingElement||_i:D).style,ct={style:ct,value:ct["overflow"+b.a.toUpperCase()]},k&&Ri(ve)["overflow"+b.a.toUpperCase()]!=="scroll"&&(ct.style["overflow"+b.a.toUpperCase()]="scroll")),Of(f,U,sn),S=hc(f),pn=_r(f,!0),q=G&&mr(D,js?Dn:tn)(),m?(wt=[m+b.os2,Wt+Pe+an],wt.t=U,rn=m===en?vc(f,b)+Wt+Pe:0,rn&&(wt.push(b.d,rn+an),U.style.flexBasis!=="auto"&&(U.style.flexBasis=rn+an)),yo(wt),Rn&&oe.forEach(function(yt){yt.pin===Rn&&yt.vars.pinSpacing!==!1&&(yt._subPinOffset=!0)}),G&&Q(tt)):(rn=vc(f,b),rn&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=rn+an)),G&&(mn={top:pn.top+(js?lr-mt:q)+an,left:pn.left+(js?q:lr-mt)+an,boxSizing:"border-box",position:"fixed"},mn[Es]=mn["max"+Mo]=Math.ceil(pn.width)+an,mn[As]=mn["max"+Kf]=Math.ceil(pn.height)+an,mn[Ci]=mn[Ci+La]=mn[Ci+Ia]=mn[Ci+Na]=mn[Ci+Da]="0",mn[en]=sn[en],mn[en+La]=sn[en+La],mn[en+Ia]=sn[en+Ia],mn[en+Na]=sn[en+Na],mn[en+Da]=sn[en+Da],R=lv(St,mn,T),Zn&&Q(0)),i?(X=i._initted,Df(1),i.render(i.duration(),!0,!0),ot=K(b.a)-bt+Wt+Pe,at=Math.abs(Wt-ot)>1,G&&at&&R.splice(R.length-2,2),i.render(0,!0,!0),X||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Df(0)):ot=Wt,ct&&(ct.value?ct.style["overflow"+b.a.toUpperCase()]=ct.value:ct.style.removeProperty("overflow-"+b.a));else if(d&&Q()&&!E)for(pn=d.parentNode;pn&&pn!==ve;)pn._pinOffset&&(mt-=pn._pinOffset,Ft-=pn._pinOffset),pn=pn.parentNode;H&&H.forEach(function(yt){return yt.revert(!1,!0)}),I.start=mt,I.end=Ft,Gt=ue=Zn?tt:Q(),!E&&!Zn&&(Gt<tt&&Q(tt),I.scroll.rec=0),I.revert(!1,!0),$t=Nn(),dt&&(zt=-1,dt.restart(!0)),Ln=0,i&&P&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(je||$!==I.progress||E||g||i&&!i._initted)&&(i&&!P&&(i._initted||$||i.vars.immediateRender!==!1)&&i.totalProgress(E&&mt<-.001&&!$?Ct.utils.normalize(mt,Ft,0):$,!0),I.progress=je||(Gt-mt)/Wt===$?0:$),f&&m&&(U._pinOffset=Math.round(I.progress*ot)),L&&L.invalidate(),isNaN(vt)||(vt-=Ct.getProperty(W,b.p),pt-=Ct.getProperty(F,b.p),uc(W,b,vt),uc(Kt,b,vt-(Qt||0)),uc(F,b,pt),uc(Ut,b,pt-(Qt||0))),je&&!Zn&&I.update(),h&&!Zn&&!re&&(re=!0,h(I),re=!1)}},I.getVelocity=function(){return(Q()-ue)/(Nn()-Ta)*1e3||0},I.endAnimation=function(){Sa(I.callbackAnimation),i&&(L?L.progress(1):i.paused()?P||Sa(i,I.direction<0,1):Sa(i,i.reversed()))},I.labelToScroll=function(gt){return i&&i.labels&&(mt||I.refresh()||mt)+i.labels[gt]/i.duration()*Wt||0},I.getTrailing=function(gt){var Jt=oe.indexOf(I),Ot=I.direction>0?oe.slice(0,Jt).reverse():oe.slice(Jt+1);return(gi(gt)?Ot.filter(function(Qt){return Qt.vars.preventOverlaps===gt}):Ot).filter(function(Qt){return I.direction>0?Qt.end<=mt:Qt.start>=Ft})},I.update=function(gt,Jt,Ot){if(!(E&&!Ot&&!gt)){var Qt=Zn===!0?tt:I.scroll(),Ke=gt?0:(Qt-mt)/Wt,ae=Ke<0?0:Ke>1?1:Ke||0,Se=I.progress,je,Ue,Pe,ge,Qn,we,Rn,ai;if(Jt&&(ue=Gt,Gt=E?Q():Qt,y&&(Zt=lt,lt=i&&!P?i.totalProgress():ae)),_&&f&&!Ln&&!rc&&Pi&&(!ae&&mt<Qt+(Qt-ue)/(Nn()-Ta)*_?ae=1e-4:ae===1&&Ft>Qt+(Qt-ue)/(Nn()-Ta)*_&&(ae=.9999)),ae!==Se&&I.enabled){if(je=I.isActive=!!ae&&ae<1,Ue=!!Se&&Se<1,we=je!==Ue,Qn=we||!!ae!=!!Se,I.direction=ae>Se?1:-1,I.progress=ae,Qn&&!Ln&&(Pe=ae&&!Se?0:ae===1?1:Se===1?2:3,P&&(ge=!we&&z[Pe+1]!=="none"&&z[Pe+1]||z[Pe],ai=i&&(ge==="complete"||ge==="reset"||ge in i))),x&&(we||ai)&&(ai||u||!i)&&(Fn(x)?x(I):I.getTrailing(x).forEach(function(lr){return lr.endAnimation()})),P||(L&&!Ln&&!rc?(L._dp._time-L._start!==L._time&&L.render(L._dp._time-L._start),L.resetTo?L.resetTo("totalProgress",ae,i._tTime/i._tDur):(L.vars.totalProgress=ae,L.invalidate().restart())):i&&i.totalProgress(ae,!!(Ln&&($t||gt)))),f){if(gt&&m&&(U.style[m+b.os2]=Et),!G)Z(Ea(bt+ot*ae));else if(Qn){if(Rn=!gt&&ae>Se&&Ft+1>Qt&&Qt+1>=Ki(D,b),T)if(!gt&&(je||Rn)){var rn=_r(f,!0),sn=Qt-mt;Qm(f,ve,rn.top+(b===tn?sn:0)+an,rn.left+(b===tn?0:sn)+an)}else Qm(f,U);yo(je||Rn?R:S),at&&ae<1&&je||Z(bt+(ae===1&&!Rn?ot:0))}}y&&!ut.tween&&!Ln&&!rc&&dt.restart(!0),a&&(we||v&&ae&&(ae<1||!Lf))&&Ua(a.targets).forEach(function(lr){return lr.classList[je||v?"add":"remove"](a.className)}),o&&!P&&!gt&&o(I),Qn&&!Ln?(P&&(ai&&(ge==="complete"?i.pause().totalProgress(1):ge==="reset"?i.restart(!0).pause():ge==="restart"?i.restart(!0):i[ge]()),o&&o(I)),(we||!Lf)&&(c&&we&&Ff(I,c),V[Pe]&&Ff(I,V[Pe]),v&&(ae===1?I.kill(!1,1):V[Pe]=0),we||(Pe=ae===1?1:3,V[Pe]&&Ff(I,V[Pe]))),C&&!je&&Math.abs(I.getVelocity())>(Aa(C)?C:2500)&&(Sa(I.callbackAnimation),L?L.progress(1):Sa(i,ge==="reverse"?1:!ae,1))):P&&o&&!Ln&&o(I)}if(Tt){var pn=E?Qt/E.duration()*(E._caScrollDist||0):Qt;it(pn+(W._isFlipped?1:0)),Tt(pn)}ht&&ht(-Qt/E.duration()*(E._caScrollDist||0))}},I.enable=function(gt,Jt){I.enabled||(I.enabled=!0,_n(D,"resize",Ca),k||_n(D,"scroll",go),rt&&_n(r,"refreshInit",rt),gt!==!1&&(I.progress=$=0,Gt=ue=zt=Q()),Jt!==!1&&I.refresh())},I.getTween=function(gt){return gt&&ut?ut.tween:L},I.setPositions=function(gt,Jt,Ot,Qt){if(E){var Ke=E.scrollTrigger,ae=E.duration(),Se=Ke.end-Ke.start;gt=Ke.start+Se*gt/ae,Jt=Ke.start+Se*Jt/ae}I.refresh(!1,!1,{start:Gm(gt,Ot&&!!I._startClamp),end:Gm(Jt,Ot&&!!I._endClamp)},Qt),I.update()},I.adjustPinSpacing=function(gt){if(wt&&gt){var Jt=wt.indexOf(b.d)+1;wt[Jt]=parseFloat(wt[Jt])+gt+an,wt[1]=parseFloat(wt[1])+gt+an,yo(wt)}},I.disable=function(gt,Jt){if(gt!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Jt||L&&L.pause(),tt=0,It&&(It.uncache=1),rt&&gn(r,"refreshInit",rt),dt&&(dt.pause(),ut.tween&&ut.tween.kill()&&(ut.tween=0)),!k)){for(var Ot=oe.length;Ot--;)if(oe[Ot].scroller===D&&oe[Ot]!==I)return;gn(D,"resize",Ca),k||gn(D,"scroll",go)}},I.kill=function(gt,Jt){I.disable(gt,Jt),L&&!Jt&&L.kill(),l&&delete Gf[l];var Ot=oe.indexOf(I);Ot>=0&&oe.splice(Ot,1),Ot===Yn&&mc>0&&Yn--,Ot=0,oe.forEach(function(Qt){return Qt.scroller===I.scroller&&(Ot=1)}),Ot||Zn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,gt&&i.revert({kill:!1}),Jt||i.kill()),Kt&&[Kt,Ut,W,F].forEach(function(Qt){return Qt.parentNode&&Qt.parentNode.removeChild(Qt)}),Fa===I&&(Fa=0),f&&(It&&(It.uncache=1),Ot=0,oe.forEach(function(Qt){return Qt.pin===f&&Ot++}),Ot||(It.spacer=0)),n.onKill&&n.onKill(I)},oe.push(I),I.enable(!1,!1),kt&&kt(I),i&&i.add&&!Wt){var ee=I.update;I.update=function(){I.update=ee,se.cache++,mt||Ft||I.refresh()},Ct.delayedCall(.01,I.update),Wt=.01,mt=Ft=0}else I.refresh();f&&sv()},r.register=function(n){return _o||(Ct=n||l0(),a0()&&window.document&&r.enable(),_o=wa),_o},r.defaults=function(n){if(n)for(var i in n)lc[i]=n[i];return lc},r.disable=function(n,i){wa=0,oe.forEach(function(o){return o[i?"kill":"disable"](n)}),gn(ce,"wheel",go),gn(Fe,"scroll",go),clearInterval(ic),gn(Fe,"touchcancel",Ji),gn(ve,"touchstart",Ji),oc(gn,Fe,"pointerdown,touchstart,mousedown",Wm),oc(gn,Fe,"pointerup,touchend,mouseup",Xm),xc.kill(),sc(gn);for(var s=0;s<se.length;s+=3)ac(gn,se[s],se[s+1]),ac(gn,se[s],se[s+2])},r.enable=function(){if(ce=window,Fe=document,_i=Fe.documentElement,ve=Fe.body,Ct&&(Ua=Ct.utils.toArray,Ra=Ct.utils.clamp,Vf=Ct.core.context||Ji,Df=Ct.core.suppressOverwrites||Ji,Yf=ce.history.scrollRestoration||"auto",Wf=ce.pageYOffset||0,Ct.core.globals("ScrollTrigger",r),ve)){wa=1,vo=document.createElement("div"),vo.style.height="100vh",vo.style.position="absolute",x0(),Qx(),$e.register(Ct),r.isTouch=$e.isTouch,Wr=$e.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),zf=$e.isTouch===1,_n(ce,"wheel",go),qf=[ce,Fe,_i,ve],Ct.matchMedia?(r.matchMedia=function(c){var h=Ct.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ct.addEventListener("matchMediaInit",function(){g0(),jf()}),Ct.addEventListener("matchMediaRevert",function(){return m0()}),Ct.addEventListener("matchMedia",function(){ws(0,1),Is("matchMedia")}),Ct.matchMedia().add("(orientation: portrait)",function(){return Uf(),Uf})):console.warn("Requires GSAP 3.11.0 or later"),Uf(),_n(Fe,"scroll",go);var n=ve.hasAttribute("style"),i=ve.style,s=i.borderTopStyle,o=Ct.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=_r(ve),tn.m=Math.round(a.top+tn.sc())||0,Dn.m=Math.round(a.left+Dn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(ve.setAttribute("style",""),ve.removeAttribute("style")),ic=setInterval(Zm,250),Ct.delayedCall(.5,function(){return rc=0}),_n(Fe,"touchcancel",Ji),_n(ve,"touchstart",Ji),oc(_n,Fe,"pointerdown,touchstart,mousedown",Wm),oc(_n,Fe,"pointerup,touchend,mouseup",Xm),kf=Ct.utils.checkPrefix("transform"),gc.push(kf),_o=Nn(),xc=Ct.delayedCall(.2,ws).pause(),xo=[Fe,"visibilitychange",function(){var c=ce.innerWidth,h=ce.innerHeight;Fe.hidden?(zm=c,Vm=h):(zm!==c||Vm!==h)&&Ca()},Fe,"DOMContentLoaded",ws,ce,"load",ws,ce,"resize",Ca],sc(_n),oe.forEach(function(c){return c.enable(0,1)}),l=0;l<se.length;l+=3)ac(gn,se[l],se[l+1]),ac(gn,se[l],se[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Lf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(ic)||(ic=i)&&setInterval(Zm,i),"ignoreMobileResize"in n&&(zf=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(sc(gn)||sc(_n,n.autoRefreshEvents||"none"),r0=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Xn(n),o=se.indexOf(s),a=Rs(s);~o&&se.splice(o,a?6:2),i&&(a?Bi.unshift(ce,i,ve,i,_i,i):Bi.unshift(s,i))},r.clearMatchMedia=function(n){oe.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(gi(n)?Xn(n):n).getBoundingClientRect(),a=o[s?Es:As]*i||0;return s?o.right-a>0&&o.left+a<ce.innerWidth:o.bottom-a>0&&o.top+a<ce.innerHeight},r.positionInViewport=function(n,i,s){gi(n)&&(n=Xn(n));var o=n.getBoundingClientRect(),a=o[s?Es:As],l=i==null?a/2:i in yc?yc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/ce.innerWidth:(o.top+l)/ce.innerHeight},r.killAll=function(n){if(oe.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Ps.killAll||[];Ps={},i.forEach(function(s){return s()})}},r})();jt.version="3.14.2";jt.saveStyles=function(r){return r?Ua(r).forEach(function(t){if(t&&t.style){var e=mi.indexOf(t);e>=0&&mi.splice(e,5),mi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Ct.core.getCache(t),Vf())}}):mi};jt.revert=function(r,t){return jf(!r,t)};jt.create=function(r,t){return new jt(r,t)};jt.refresh=function(r){return r?Ca(!0):(_o||jt.register())&&ws(!0)};jt.update=function(r){return++se.cache&&xr(r===!0?2:0)};jt.clearScrollMemory=_0;jt.maxScroll=function(r,t){return Ki(r,t?Dn:tn)};jt.getScrollFunc=function(r,t){return mr(Xn(r),t?Dn:tn)};jt.getById=function(r){return Gf[r]};jt.getAll=function(){return oe.filter(function(r){return r.vars.id!=="ScrollSmoother"})};jt.isScrolling=function(){return!!Pi};jt.snapDirectional=Qf;jt.addEventListener=function(r,t){var e=Ps[r]||(Ps[r]=[]);~e.indexOf(t)||e.push(t)};jt.removeEventListener=function(r,t){var e=Ps[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};jt.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Ct.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(m){u.length||f.restart(!0),u.push(m.trigger),d.push(m),s<=u.length&&f.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&Fn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return Fn(s)&&(s=s(),_n(jt,"refresh",function(){return s=t.batchMax()})),Ua(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(jt.create(c))}),e};var t0=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},Bf=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+($e.isTouch?" pinch-zoom":""):"none",t===_i&&r(ve,e)},fc={auto:1,scroll:1},hv=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Ct.core.getCache(s),a=Nn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==ve&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(fc[(l=Ri(s)).overflowY]||fc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Rs(s)&&(fc[(l=Ri(s)).overflowY]||fc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},y0=function(t,e,n,i){return $e.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&hv,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&_n(Fe,$e.eventTypes[0],n0,!1,!0)},onDisable:function(){return gn(Fe,$e.eventTypes[0],n0,!0)}})},uv=/(input|label|select|textarea)/i,e0,n0=function(t){var e=uv.test(t.target.tagName);(e||e0)&&(t._gsapAllow=!0,e0=e)},fv=function(t){Ts(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Xn(t.target)||_i,h=Ct.core.globals().ScrollSmoother,u=h&&h.get(),d=Wr&&(t.content&&Xn(t.content)||u&&t.content!==!1&&!u.smooth()&&u.content()),f=mr(c,tn),m=mr(c,Dn),g=1,_=($e.isTouch&&ce.visualViewport?ce.visualViewport.scale*ce.visualViewport.width:ce.outerWidth)/ce.innerWidth,p=0,M=Fn(i)?function(){return i(a)}:function(){return i||2.8},v,y,T=y0(c,t.type,!0,s),w=function(){return y=!1},E=Ji,C=Ji,x=function(){l=Ki(c,tn),C=Ra(Wr?1:0,l),n&&(E=Ra(0,Ki(c,Dn))),v=Cs},b=function(){d._gsap.y=Ea(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(y){requestAnimationFrame(w);var Y=Ea(a.deltaY/2),et=C(f.v-Y);if(d&&et!==f.v+f.offset){f.offset=et-f.v;var I=Ea((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=se.cache,xr()}return!0}f.offset&&b(),y=!0},D,O,k,G,V=function(){x(),D.isActive()&&D.vars.scrollY>l&&(f()>l?D.progress(1)&&f(l):D.resetTo("scrollY",l))};return d&&Ct.set(d,{y:"+=0"}),t.ignoreCheck=function(z){return Wr&&z.type==="touchmove"&&P(z)||g>1.05&&z.type!=="touchstart"||a.isGesturing||z.touches&&z.touches.length>1},t.onPress=function(){y=!1;var z=g;g=Ea((ce.visualViewport&&ce.visualViewport.scale||1)/_),D.pause(),z!==g&&Bf(c,g>1.01?!0:n?!1:"x"),O=m(),k=f(),x(),v=Cs},t.onRelease=t.onGestureStart=function(z,Y){if(f.offset&&b(),!Y)G.restart(!0);else{se.cache++;var et=M(),I,rt;n&&(I=m(),rt=I+et*.05*-z.velocityX/.227,et*=t0(m,I,rt,Ki(c,Dn)),D.vars.scrollX=E(rt)),I=f(),rt=I+et*.05*-z.velocityY/.227,et*=t0(f,I,rt,Ki(c,tn)),D.vars.scrollY=C(rt),D.invalidate().duration(et).play(.01),(Wr&&D.vars.scrollY>=l||I>=l-1)&&Ct.to({},{onUpdate:V,duration:et})}o&&o(z)},t.onWheel=function(){D._ts&&D.pause(),Nn()-p>1e3&&(v=0,p=Nn())},t.onChange=function(z,Y,et,I,rt){if(Cs!==v&&x(),Y&&n&&m(E(I[2]===Y?O+(z.startX-z.x):m()+Y-I[1])),et){f.offset&&b();var Lt=rt[2]===et,Bt=Lt?k+z.startY-z.y:f()+et-rt[1],zt=C(Bt);Lt&&Bt!==zt&&(k+=zt-Bt),f(zt)}(et||Y)&&xr()},t.onEnable=function(){Bf(c,n?!1:"x"),jt.addEventListener("refresh",V),_n(ce,"resize",V),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){Bf(c,!0),gn(ce,"resize",V),jt.removeEventListener("refresh",V),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new $e(t),a.iOS=Wr,Wr&&!f()&&f(1),Wr&&Ct.ticker.add(Ji),G=a._dc,D=Ct.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:v0(f,f(),function(){return D.pause()})},onUpdate:xr,onComplete:G.vars.onComplete}),a};jt.sort=function(r){if(Fn(r))return oe.sort(r);var t=ce.pageYOffset||0;return jt.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+ce.innerHeight}),oe.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};jt.observe=function(r){return new $e(r)};jt.normalizeScroll=function(r){if(typeof r>"u")return qn;if(r===!0&&qn)return qn.enable();if(r===!1){qn&&qn.kill(),qn=r;return}var t=r instanceof $e?r:fv(r);return qn&&qn.target===t.target&&qn.kill(),Rs(t.target)&&(qn=t),t};jt.core={_getVelocityProp:nc,_inputObserver:y0,_scrollers:se,_proxies:Bi,bridge:{ss:function(){Pi||Is("scrollStart"),Pi=Nn()},ref:function(){return Ln}}};l0()&&Ct.registerPlugin(jt);var td=Math.PI*2,bc=class{points=[[],[],[]];cols=164;rows=92;depth=new Float32Array(this.cols*this.rows);light=new Float32Array(this.cols*this.rows);ink=new Uint8Array(this.cols*this.rows);constructor(t=!1){t&&(this.cols=108,this.rows=82,this.depth=new Float32Array(this.cols*this.rows),this.light=new Float32Array(this.cols*this.rows),this.ink=new Uint8Array(this.cols*this.rows));let e=(o,a,l,c,h,u,d,f=0)=>this.points[o].push([a,l,c,h,u,d,f]);for(let o=1;o<85;o++)for(let a=0;a<190;a++){let l=a/190*td,c=o/85*Math.PI,h=.68+Math.sin(l*12)*Math.sin(c*9)*.025;e(0,Math.sin(c)*Math.cos(l)*h,Math.cos(c)*h,Math.sin(c)*Math.sin(l)*h,Math.sin(c)*Math.cos(l),Math.cos(c),Math.sin(c)*Math.sin(l),0)}for(let o=0;o<3;o++)for(let a=0;a<400;a++)for(let l=0;l<16;l++){let c=a/400*td,h=l/16*td,u=1.02+o*.23,d=(u+.055*Math.cos(h))*Math.cos(c),f=(u+.055*Math.cos(h))*Math.sin(c),m=.055*Math.sin(h);if(o===1){let g=f;f=m,m=g}if(o===2){let g=d;d=m,m=g}e(0,d,f,m,Math.cos(c)*Math.cos(h),Math.sin(c)*Math.cos(h),Math.sin(h),o+1)}for(let o=0;o<15;o++){let a=o*1.6;for(let l=0;l<150;l++)for(let c=0;c<9;c++){let h=l/149*Math.PI,u=1.45+c*.012;e(1,Math.cos(h)*u,-.25-Math.sin(h)*u,a,Math.cos(h),-Math.sin(h),.5,o%3)}for(let l=-1;l<=1;l+=2)for(let c=0;c<70;c++)for(let h=0;h<10;h++)e(1,l*(1.45+h*.013),-.25+c*.025,a,l,0,.6,o%3);for(let l=0;l<90;l++)for(let c=0;c<14;c++)e(1,(l/89-.5)*3.3,1.5,a+c*.1,0,-1,.4,3)}let n=document.createElement("canvas");n.width=700,n.height=220;let i=n.getContext("2d");i.fillStyle="white",i.font="900 100px monospace",i.textAlign="center",i.fillText("STAY",350,95),i.fillText("CURIOUS",350,200);let s=i.getImageData(0,0,700,220).data;for(let o=0;o<220;o+=3)for(let a=0;a<700;a+=3)s[(o*700+a)*4+3]>120&&e(2,(a-350)/180,(o-110)/180,0,0,0,1,1);for(let o=0;o<3500;o++){let a=o*2.399963,l=Math.acos(1-2*(o+.5)/3500);e(2,Math.sin(l)*Math.cos(a)*2,Math.cos(l)*2,Math.sin(l)*Math.sin(a)*2,0,0,1,0)}}render(t,e,n,i,s,o){let a=t.canvas.width,l=t.canvas.height,c=this.cols,h=this.rows;this.depth.fill(-1/0),this.light.fill(0),this.ink.fill(0);let u=n,d=o?0:i,f=e===1?Math.sin(u*5)*.09:e===2?.1*Math.sin(d*.12)*(1-u):.55+d*.09+u*1.7,m=e===1||e===2?0:.2+Math.sin(u*3)*.15,g=Math.cos(f),_=Math.sin(f),p=Math.cos(m),M=Math.sin(m);for(let b=0;b<this.points[e].length;b++){let P=this.points[e][b],[D,O,k,G,V,z,Y]=P;if(e===0){let mt=Math.sin(u*Math.PI)*.7;Y===1&&(D+=mt*1.2),Y===2&&(O-=mt),Y===3&&(k+=mt*2)}if(e===1&&(k-=u*17,k=((k+3)%24+24)%24-3,D+=Math.sin(u*5)*.15),e===2){if(Y===0&&b%3!==0)continue;let mt=Math.min(1,u/.78),Ft=1-mt,Kt=b*2.399,Ut=2+Math.sin(b*7)*.8;D=D*mt+Math.cos(Kt+d*.08)*Ut*Ft,O=O*mt+Math.sin(Kt+d*.08)*Ut*Ft,k=k*Ft+Math.sin(b)*Ft,Y===0&&(D*=1.3,O*=1.3,k=-3+k*.15)}let et=D*g+k*_,I=-D*_+k*g,rt=O*p-I*M,Lt=O*M+I*p,Bt=e===1?2.8:e===2?4.8:4.3-u*.25,zt=e===1?Lt+Bt:Bt-Lt;if(zt<.2)continue;let $t=(e===1?52:e===2?125:98)*(s?.72:1),$=Math.round(c/2+et*$t*1.5/zt),Q=Math.round(h/2+rt*$t/zt);if($<1||$>=c-1||Q<1||Q>=h-1)continue;let ut=Q*c+$,It=-zt;if(It<this.depth[ut])continue;this.depth[ut]=It;let Mt=G*g+z*_,Gt=-G*_+z*g,ue=e===1?Math.max(.15,1-zt/24):Math.max(.12,Mt*-.4+V*-.6+Gt*.65)*.8+.18;this.light[ut]=e===2?Y===1?1:.14:Math.min(1,ue+.2+(Y?.2:0)),this.ink[ut]=Y+1}t.fillStyle="#080b0b",t.fillRect(0,0,a,l);let v=Math.min(a/(c*8),l/(h*12)),y=8*v,T=12*v,w=(a-c*y)/2,E=(l-h*T)/2;t.font=`${Math.max(5,11*v)}px "Space Mono",monospace`,t.textAlign="center",t.textBaseline="middle";let C="\xB7:;-=+*#%@",x=["#35413c","#839a7d","#b2cc9c","#d5e6b7","#f5fad8"];for(let b=0;b<5;b++){t.fillStyle=x[b];for(let P=0;P<this.light.length;P++){let D=this.light[P];if(!D||Math.min(4,Math.floor(D*5))!==b)continue;let O=e===1&&this.ink[P]===4?"\u2500":C[Math.min(9,Math.floor(D*9))];t.fillText(O,w+P%c*y,E+Math.floor(P/c)*T)}}t.strokeStyle="#a9c69525",t.lineWidth=1;for(let[b,P]of[[a*.04,l*.08],[a*.96,l*.08],[a*.04,l*.92],[a*.96,l*.92]])t.beginPath(),t.moveTo(b-8,P),t.lineTo(b+8,P),t.moveTo(b,P-8),t.lineTo(b,P+8),t.stroke();o||(t.fillStyle="#dbffc805",t.fillRect(0,d*15%l,a,2)),t.canvas.dataset.artFrame=String(Number(t.canvas.dataset.artFrame||0)+1),t.canvas.dataset.artReady="true"}};var Rt={ink:"#232843",shadow:"#303b58",deep:"#405575",rock:"#5a6680",stone:"#aaa0a0",sand:"#d9bd9a",light:"#f8d9ab",roof:"#b15b78",roofLight:"#dc8a91",green:"#4c8172",leaf:"#81ae84",gold:"#f7c576",water:"#75bfc2"};function wn(r){return(Math.sin(r*127.1+311.7)*43758.5453%1+1)%1}var Sc=class{ctx;r(t,e,n,i,s){this.ctx.fillStyle=s,this.ctx.fillRect(Math.round(t),Math.round(e),Math.ceil(n),Math.ceil(i))}poly(t,e){this.ctx.fillStyle=e,this.ctx.beginPath(),t.forEach(([n,i],s)=>s?this.ctx.lineTo(Math.round(n),Math.round(i)):this.ctx.moveTo(Math.round(n),Math.round(i))),this.ctx.closePath(),this.ctx.fill()}tree(t,e,n=1){let i=this.r.bind(this);i(t-1,e,3,17*n,Rt.shadow);for(let s=0;s<4;s++){let o=(19-s*3)*n;i(t-o/2,e-8-s*5*n,o,8*n,s%2?Rt.leaf:Rt.green),i(t-o/2,e-8-s*5*n,o/3,4*n,"#b3c694")}i(t+3,e+5,8,2,Rt.ink)}house(t,e,n,i,s=Rt.roof){let o=this.r.bind(this);o(t+2,e+2,n,i,Rt.ink),o(t,e,n,i,Rt.sand),o(t+n*.65,e,n*.35,i,Rt.stone),o(t+2,e+3,n*.6,2,Rt.light),this.poly([[t-3,e],[t+n/2,e-n*.42],[t+n+3,e]],s),o(t-3,e,n+6,2,Rt.ink);for(let a=0;a<Math.floor(n/6);a++)o(t+a*6,e-n*.13,3,1,Rt.roofLight);for(let a=0;a<Math.floor(n/9);a++)o(t+4+a*9,e+7,3,6,Rt.ink),o(t+4+a*9,e+8,2,3,Rt.gold);o(t+n/2-2,e+i-8,5,8,Rt.shadow),o(t+n/2,e+i-8,1,8,Rt.light)}tower(t,e,n,i){let s=this.r.bind(this);s(t,e,n,i,Rt.stone),s(t,e,n*.6,i,Rt.sand);for(let o=0;o<i;o+=6)for(let a=0;a<n;a+=7)s(t+a+(o%12?3:0),e+o,4,1,"#bcae9c");for(let o=8;o<i;o+=14)s(t+n/2-2,e+o,4,8,Rt.shadow),s(t+n/2-1,e+o+1,2,4,Rt.gold);this.poly([[t-4,e],[t+n/2,e-15],[t+n+4,e]],Rt.roof),s(t+n/2,e-26,1,11,Rt.ink),this.poly([[t+n/2+1,e-26],[t+n/2+12,e-23],[t+n/2+1,e-20]],Rt.gold)}cloud(t,e,n){let i=this.r.bind(this);i(t,e,34*n,5*n,"#f6d9bd"),i(t+6*n,e-5*n,20*n,6*n,"#f6d9bd"),i(t+12*n,e-9*n,10*n,6*n,"#f6d9bd"),i(t+4*n,e+4*n,26*n,2*n,"#b9a6ba")}island(t,e,n,i,s,o=!0){let a=this.r.bind(this),l=n/2;this.poly([[t-l,e],[t-l*.8,e+12],[t-l*.45,e+n*.42],[t,e+n*.65],[t+l*.48,e+n*.26],[t+l,e+3]],Rt.ink),this.ctx.save(),this.ctx.clip();for(let c=0;c<60;c++){let h=t-l+wn(c+i)*n,u=e+wn(c*3+i)*n*.45,d=n*(.22+wn(c)*.2)*(1-(u-e)/(n*.6));a(h,u,Math.max(2,d),3+wn(c*4)*6,c%3?Rt.rock:Rt.shadow)}this.ctx.restore(),this.poly([[t-l,e],[t-l*.65,e-10],[t+l*.2,e-14],[t+l,e],[t+l*.7,e+8],[t-l*.6,e+10]],Rt.green);for(let c=0;c<80;c++){let h=t-l+wn(c+i)*n,u=e-5+wn(c*7)*12;a(h,u,1+wn(c*8)*3,1,c%4?Rt.leaf:Rt.light)}a(t+l*.57,e+3,7,n*.58,Rt.deep),a(t+l*.58,e+4,4,n*.57,Rt.water);for(let c=0;c<8;c++){let h=e+5+(c*7+s*9)%(n*.55);a(t+l*.58,h,3,2,"#dcf7da")}o&&(this.house(t-25,e-31,29,30),this.tower(t+8,e-58,17,60),this.house(t+33,e-21,20,21,"#757dab"),this.tree(t-l*.65,e-8,.8),this.tree(t+l*.78,e-1,.6))}render(t,e,n,i,s){this.ctx=t;let o=this.r.bind(this),a=s?0:i;o(0,0,480,300,e===1?"#212b4c":"#52678d");let l=e===1?["#202744","#2d3553","#414763","#65566c","#93737c"]:["#52678d","#6d7f9e","#93a0b5","#bab3bf","#e4c5bd"];for(let u=0;u<60;u++){let d=u/59*4,f=Math.min(3,Math.floor(d)),m=d-f,g=parseInt(l[f].slice(1),16),_=parseInt(l[f+1].slice(1),16),p=M=>Math.round((g>>M&255)*(1-m)+(_>>M&255)*m);o(0,u*5,480,5,`rgb(${p(16)},${p(8)},${p(0)})`)}for(let u=0;u<170;u++){let d=wn(u)*480,f=wn(u+500)*190;(e===1||u%5===0)&&(o(d,f,1,u%19?1:2,u%3?"#e8d6b3":"#9eb8c6"),u%29===0&&(o(d-2,f,5,1,"#e8d6b3"),o(d,f-2,1,5,"#e8d6b3")))}let c=e===1?365:92,h=47;for(let u=-14;u<=14;u++){let d=Math.floor(Math.sqrt(196-u*u));o(c-d,h+u,d*2+1,1,Rt.light)}if(e===1)for(let u=-13;u<=13;u++){let d=Math.floor(Math.sqrt(169-u*u));o(c-7-d,h-3+u,d*2+1,1,"#2d3553")}for(let u=0;u<3;u++){let d=[[0,300]];for(let f=0;f<=480;f+=2){let m=n*(u+1)*70,g=Math.abs(Math.sin((f+m)*.014+u*4))*36+Math.sin((f+m)*.033)*8;d.push([f,155+u*27-g])}d.push([480,300]),this.poly(d,["#7b829d","#5d6c8b","#435b7a"][u]);for(let f=0;f<30;f++){let m=wn(f+u*700)*480;o(m,150+u*25,2,1,"#b3bac030")}}if(e===0){for(let f=0;f<7;f++)this.cloud((f*94-n*30+a*.25)%640-50,50+f%3*31,.55+f%2*.3);let u=1+n*.6;t.save(),t.translate(300,176),t.scale(u,u),t.translate(-300,-176),this.island(300,174,185,24,a,!1),o(239,160,125,12,Rt.stone),o(236,157,131,4,Rt.sand);for(let f=0;f<9;f++)o(240+f*14,157,5,5,Rt.sand),o(240+f*14,165,10,1,Rt.light);this.house(250,133,24,25),this.house(279,117,30,40),this.house(316,138,22,21,"#6f7fa2"),this.tower(308,79,17,79),this.tower(345,117,13,43),o(292,145,16,16,Rt.ink),o(295,142,10,19,Rt.shadow),o(298,147,3,14,Rt.gold),o(312,89,9,9,Rt.light),o(316,91,1,5,Rt.shadow),o(316,94,3,1,Rt.shadow),o(232,124,5,32,Rt.sand);let d=a*.35+n*2;for(let f=0;f<4;f++){let m=d+f*Math.PI/2;this.poly([[234,126],[234+Math.cos(m)*18,126+Math.sin(m)*18],[234+Math.cos(m+.25)*14,126+Math.sin(m+.25)*14]],Rt.light)}this.tree(226,160,1),this.tree(365,159,.8),this.tree(275,169,.45);for(let f=0;f<12;f++)o(251+f*8,171+Math.sin(f)*2,2,2,f%3?"#f8d9ab":"#dc8a91");o(261,108,67,1,Rt.ink);for(let f=0;f<8;f++)this.poly([[262+f*8,108],[267+f*8,108],[264+f*8,114]],f%2?Rt.gold:Rt.roofLight);t.restore(),this.island(85-n*110,202,65,58,a),this.island(443+n*80,153,58,71,a);for(let f=0;f<18;f++){let m=wn(f)*480,g=215+wn(f+50)*70;o(m,g,4,1,"#222f48"),o(m+2,g-2,1,4,"#222f48")}}else if(e===1){let u=n*540;o(0,222,480,78,Rt.deep);for(let m=0;m<95;m++){let g=wn(m)*480,_=230+wn(m+9)*60;o(g,_,3+wn(m+88)*10,1,m%4?"#597f99":"#b4a6a4")}for(let m=-2;m<13;m++){let g=m*58-u%58;o(g,224,8,76,Rt.ink),o(g,224,8,2,Rt.stone),this.poly([[g+8,237],[g+29,254],[g+50,237],[g+50,243],[g+29,261],[g+8,243]],Rt.shadow)}o(0,211,480,12,Rt.ink),o(0,211,480,3,Rt.stone);for(let m=0;m<480;m+=6)o(m,209,2,3,Rt.sand);let d=140+Math.sin(n*Math.PI)*80;for(let m=0;m<3;m++){let g=d+m*38;o(g,193,35,16,Rt.roof),o(g+2,190,31,4,Rt.roofLight);for(let _=0;_<4;_++)o(g+4+_*7,196,4,5,Rt.gold);o(g+4,209,5,3,Rt.ink),o(g+26,209,5,3,Rt.ink)}for(let m=0;m<8;m++){let g=d-4-m*7,_=180-Math.sin(m*.6+a)*3-m*.8;o(g,_,7,4,"#b0a3af")}let f=390-n*180;this.tower(f,139,17,71),this.house(f-25,185,24,25);for(let m=0;m<14;m++){let g=((m*47-u*1.6)%680+680)%680-80;this.tree(g,285,1.6)}for(let m=0;m<24;m++)Math.sin(a*1.4+m)>0&&o(wn(m)*480,232+wn(m+99)*60,1,1,Rt.gold)}else{let u=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];t.strokeStyle="#f8d9ab66",t.setLineDash([2,4]),t.lineWidth=1,t.beginPath(),u.forEach(([v,y],T)=>T?t.lineTo(v,y):t.moveTo(v,y)),t.stroke(),t.setLineDash([]),u.forEach(([v,y],T)=>{let w=Math.max(0,1-n*2-T*.04)*100;this.island(v,y+w,45+T%3*9,T*57,a,!0),o(v-3,y-70+w,7,9,Rt.light);let E=["010110010010111","110001010100111","110001010001110","101101111001001","111100110001110","011100110101010","111001010010010"];for(let C=0;C<15;C++)E[T][C]==="1"&&o(v-1+C%3,y-68+w+Math.floor(C/3),1,1,Rt.shadow)});let d=Math.max(0,(n-.45)/.55)*(u.length-1),f=Math.min(5,Math.floor(d)),m=d-f,g=u[f],_=u[f+1],p=g[0]+(_[0]-g[0])*m,M=g[1]+(_[1]-g[1])*m+Math.max(0,1-n*2-f*.04)*100*(1-m)+Math.max(0,1-n*2-(f+1)*.04)*100*m-13;o(p-2,M-4,5,5,Rt.light),o(p-3,M+1,7,6,Rt.roofLight),o(p-2,M+7,2,3,Rt.ink),o(p+1,M+7,2,3,Rt.ink)}t.canvas.dataset.artFrame=String(Number(t.canvas.dataset.artFrame||0)+1),t.canvas.dataset.artReady="true"}};st.registerPlugin(jt);function M0(r=!1){let t=document.querySelector(".mt-nullsignal,.mt-bitquest");if(!t)return;let e=matchMedia("(max-width:760px)").matches,n=t.dataset.template==="nullsignal",i=n?new bc(e):null,s=n?null:new Sc,o=[...t.querySelectorAll("canvas[data-glyph]")].map((p,M)=>{p.width=n?e?800:1400:480,p.height=n?e?640:850:300;let v=p.getContext("2d");return v&&(v.imageSmoothingEnabled=!1),{canvas:p,ctx:v,phase:M,progress:r?[.25,.45,1][M]:0,visible:!1}}),a=[];r||o.forEach(p=>{let M=p.canvas.closest(".gl-sequence"),v=st.timeline({scrollTrigger:{trigger:M,start:"top top",end:()=>`+=${innerHeight*(e?1.65:2.5)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});v.to(p,{progress:1,duration:3,ease:"none"},0),p.phase===0?(v.to(M.querySelector(".gl-hero-copy"),{y:-55,opacity:0,duration:.8},.35),v.to(M.querySelector(".gl-art"),{left:"0%",right:"0%",top:e?"12%":"0%",bottom:e?"5%":"0%",height:e?"75%":"100%",duration:1.4,ease:"power2.inOut"},.6),v.to(M.querySelector(".gl-annotation"),{opacity:0,duration:.5},.3),v.to(M,{"--gl-veil":0,duration:1},.4)):p.phase===1?v.to(M.querySelector(".gl-plate"),{opacity:0,y:-35,duration:.7},1.6):(v.to(M.querySelector(".gl-map-heading"),{opacity:0,y:-40,duration:.7},.2),v.to(M.querySelector(".gl-art"),{top:"0%",duration:1.2},.6)),a.push(v)});let l=performance.now(),c=0,h=0,u=!1,d=(p,M=!1)=>{for(let v of o){if(!v.ctx||!v.visible&&!M)continue;n?i.render(v.ctx,v.phase,v.progress,p,e,r):s.render(v.ctx,v.phase,v.progress,p,r);let y=v.canvas.closest(".gl-sequence")?.querySelector(".gl-progress-label");y&&(y.textContent=`${String(Math.round(v.progress*100)).padStart(3,"0")} / 100`),v.canvas.dataset.scrollProgress=v.progress.toFixed(3)}},f=()=>{!u&&!document.hidden&&!c&&o.some(p=>p.visible)&&!r&&(c=requestAnimationFrame(m))};function m(p){c=0,!(u||document.hidden)&&(p-h>=50&&(d((p-l)*.001),h=p),f())}let g=new IntersectionObserver(p=>{for(let M of p){let v=o.find(y=>y.canvas===M.target);v&&(v.visible=M.isIntersecting)}f()},{threshold:0});o.forEach(p=>g.observe(p.canvas));let _=()=>{document.hidden?(cancelAnimationFrame(c),c=0):f()};return document.addEventListener("visibilitychange",_),d(0,!0),f(),()=>{u=!0,cancelAnimationFrame(c),g.disconnect(),document.removeEventListener("visibilitychange",_),a.forEach(p=>{p.scrollTrigger?.kill(),p.kill()})}}var Z0=0,Od=1,$0=2;var bl=1,J0=2,$o=3,Er=0,Cn=1,Si=2,rr=0,Os=1,Bd=2,kd=3,zd=4,K0=5,Qr=100,Q0=101,j0=102,tg=103,eg=104,ng=200,ig=201,rg=202,sg=203,Jc=204,Kc=205,og=206,ag=207,lg=208,cg=209,hg=210,ug=211,fg=212,dg=213,pg=214,Ih=0,Dh=1,Lh=2,Bs=3,Nh=4,Fh=5,Uh=6,Oh=7,Bh=0,mg=1,gg=2,Wi=0,Vd=1,Hd=2,Gd=3,Xs=4,Wd=5,Xd=6,qd=7;var Yd=300,ss=301,qs=302,kh=303,zh=304,Sl=306,Qc=1e3,tr=1001,jc=1002,yn=1003,_g=1004;var Tl=1005;var En=1006,Vh=1007;var os=1008;var oi=1009,Zd=1010,$d=1011,Jo=1012,Hh=1013,Xi=1014,Ni=1015,sr=1016,Gh=1017,Wh=1018,Ko=1020,Jd=35902,Kd=35899,Qd=1021,jd=1022,Fi=1023,er=1026,as=1027,Xh=1028,qh=1029,Ys=1030,Yh=1031;var Zh=1033,wl=33776,El=33777,Al=33778,Cl=33779,$h=35840,Jh=35841,Kh=35842,Qh=35843,jh=36196,tu=37492,eu=37496,nu=37488,iu=37489,ru=37490,su=37491,ou=37808,au=37809,lu=37810,cu=37811,hu=37812,uu=37813,fu=37814,du=37815,pu=37816,mu=37817,gu=37818,_u=37819,xu=37820,vu=37821,yu=36492,Mu=36494,bu=36495,Su=36283,Tu=36284,wu=36285,Eu=36286;var $a=2300,th=2301,$c=2302,Rd=2400,Pd=2401,Id=2402;var xg=3200;var Au=0,vg=1,Dr="",ln="srgb",ks="srgb-linear",Ja="linear",ye="srgb";var Us=7680;var Dd=519,yg=512,Mg=513,bg=514,Cu=515,Sg=516,Tg=517,Ru=518,wg=519,eh=35044;var tp="300 es",Hi=2e3,Ka=2001;function ep(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function dv(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Qa(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Eg(){let r=Qa("canvas");return r.style.display="block",r}var b0={},zo=null;function ja(...r){let t="THREE."+r.shift();zo?zo("log",t,...r):console.log(t,...r)}function Yt(...r){let t="THREE."+r.shift();zo?zo("warn",t,...r):console.warn(t,...r)}function Xt(...r){let t="THREE."+r.shift();zo?zo("error",t,...r):console.error(t,...r)}function Vo(...r){let t=r.join(" ");t in b0||(b0[t]=!0,Yt(...r))}function Ag(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var Ar=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var ed=Math.PI/180,nh=180/Math.PI;function Kr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[r&255]+Un[r>>8&255]+Un[r>>16&255]+Un[r>>24&255]+"-"+Un[t&255]+Un[t>>8&255]+"-"+Un[t>>16&15|64]+Un[t>>24&255]+"-"+Un[e&63|128]+Un[e>>8&255]+"-"+Un[e>>16&255]+Un[e>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function he(r,t,e){return Math.max(t,Math.min(e,r))}function pv(r,t){return(r%t+t)%t}function nd(r,t,e){return(1-e)*r+e*t}function ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Ae(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Pt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Cr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],m=s[o+2],g=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a>=1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=g;return}if(u!==g||l!==d||c!==f||h!==m){let _=l*d+c*f+h*m+u*g;_<0&&(d=-d,f=-f,m=-m,g=-g,_=-_);let p=1-a;if(_<.9995){let M=Math.acos(_),v=Math.sin(M);p=Math.sin(p*M)/v,a=Math.sin(a*M)/v,l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+g*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+m*a,u=u*p+g*a;let M=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=M,c*=M,h*=M,u*=M}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],m=s[o+3];return t[e]=a*m+h*u+l*f-c*d,t[e+1]=l*m+h*d+c*u-a*f,t[e+2]=c*m+h*f+a*d-l*u,t[e+3]=h*m-a*u-l*d-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"YXZ":this._x=d*h*u+c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"ZXY":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u-d*f*m;break;case"ZYX":this._x=d*h*u-c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u+d*f*m;break;case"YZX":this._x=d*h*u+c*f*m,this._y=c*f*u+d*h*m,this._z=c*h*m-d*f*u,this._w=c*h*u-d*f*m;break;case"XZY":this._x=d*h*u-c*f*m,this._y=c*f*u-d*h*m,this._z=c*h*m+d*f*u,this._w=c*h*u+d*f*m;break;default:Yt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(he(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},N=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(S0.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(S0.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),h=2*(a*e-s*i),u=2*(s*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return id.copy(this).projectOnVector(t),this.sub(id)}reflect(t){return this.sub(id.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(he(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},id=new N,S0=new Cr,te=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],m=n[8],g=i[0],_=i[3],p=i[6],M=i[1],v=i[4],y=i[7],T=i[2],w=i[5],E=i[8];return s[0]=o*g+a*M+l*T,s[3]=o*_+a*v+l*w,s[6]=o*p+a*y+l*E,s[1]=c*g+h*M+u*T,s[4]=c*_+h*v+u*w,s[7]=c*p+h*y+u*E,s[2]=d*g+f*M+m*T,s[5]=d*_+f*v+m*w,s[8]=d*p+f*y+m*E,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,m=e*u+n*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=u*g,t[1]=(i*c-h*n)*g,t[2]=(a*n-i*o)*g,t[3]=d*g,t[4]=(h*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=f*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(rd.makeScale(t,e)),this}rotate(t){return this.premultiply(rd.makeRotation(-t)),this}translate(t,e){return this.premultiply(rd.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},rd=new te,T0=new te().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),w0=new te().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function mv(){let r={enabled:!0,workingColorSpace:ks,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ye&&(i.r=wr(i.r),i.g=wr(i.g),i.b=wr(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ye&&(i.r=ko(i.r),i.g=ko(i.g),i.b=ko(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Dr?Ja:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Vo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Vo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ks]:{primaries:t,whitePoint:n,transfer:Ja,toXYZ:T0,fromXYZ:w0,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:t,whitePoint:n,transfer:ye,toXYZ:T0,fromXYZ:w0,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),r}var pe=mv();function wr(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ko(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var bo,ih=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{bo===void 0&&(bo=Qa("canvas")),bo.width=t.width,bo.height=t.height;let i=bo.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=bo}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=Qa("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=wr(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(wr(e[n]/255)*255):e[n]=wr(e[n]);return{data:e,width:t.width,height:t.height}}else return Yt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},gv=0,Ho=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:gv++}),this.uuid=Kr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(sd(i[o].image)):s.push(sd(i[o]))}else s=sd(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function sd(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ih.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Yt("Texture: Unable to serialize Texture."),{})}var _v=0,od=new N,Jn=class r extends Ar{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=tr,i=tr,s=En,o=os,a=Fi,l=oi,c=r.DEFAULT_ANISOTROPY,h=Dr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_v++}),this.uuid=Kr(),this.name="",this.source=new Ho(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Pt(0,0),this.repeat=new Pt(1,1),this.center=new Pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new te,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(od).x}get height(){return this.source.getSize(od).y}get depth(){return this.source.getSize(od).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Yt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Yd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Qc:t.x=t.x-Math.floor(t.x);break;case tr:t.x=t.x<0?0:1;break;case jc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Qc:t.y=t.y-Math.floor(t.y);break;case tr:t.y=t.y<0?0:1;break;case jc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Yd;Jn.DEFAULT_ANISOTROPY=1;var We=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,y=(f+1)/2,T=(p+1)/2,w=(h+d)/4,E=(u+g)/4,C=(m+_)/4;return v>y&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=w/n,s=E/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=w/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=E/s,i=C/s),this.set(n,i,s,e),this}let M=Math.sqrt((_-m)*(_-m)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(_-m)/M,this.y=(u-g)/M,this.z=(d-h)/M,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=he(this.x,t.x,e.x),this.y=he(this.y,t.y,e.y),this.z=he(this.z,t.z,e.z),this.w=he(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=he(this.x,t,e),this.y=he(this.y,t,e),this.z=he(this.z,t,e),this.w=he(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(he(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},rh=class extends Ar{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new We(0,0,t,e),this.scissorTest=!1,this.viewport=new We(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new Jn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ho(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},yi=class extends rh{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},tl=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var sh=class extends Jn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=yn,this.minFilter=yn,this.wrapR=tr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var nr=class{constructor(t=new N(1/0,1/0,1/0),e=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,ki):ki.fromBufferAttribute(s,o),ki.applyMatrix4(t.matrixWorld),this.expandByPoint(ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Tc.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Tc.copy(n.boundingBox)),Tc.applyMatrix4(t.matrixWorld),this.union(Tc)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ki),ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ba),wc.subVectors(this.max,Ba),So.subVectors(t.a,Ba),To.subVectors(t.b,Ba),wo.subVectors(t.c,Ba),Xr.subVectors(To,So),qr.subVectors(wo,To),Ds.subVectors(So,wo);let e=[0,-Xr.z,Xr.y,0,-qr.z,qr.y,0,-Ds.z,Ds.y,Xr.z,0,-Xr.x,qr.z,0,-qr.x,Ds.z,0,-Ds.x,-Xr.y,Xr.x,0,-qr.y,qr.x,0,-Ds.y,Ds.x,0];return!ad(e,So,To,wo,wc)||(e=[1,0,0,0,1,0,0,0,1],!ad(e,So,To,wo,wc))?!1:(Ec.crossVectors(Xr,qr),e=[Ec.x,Ec.y,Ec.z],ad(e,So,To,wo,wc))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(vr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),vr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),vr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),vr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),vr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),vr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),vr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),vr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(vr),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},vr=[new N,new N,new N,new N,new N,new N,new N,new N],ki=new N,Tc=new nr,So=new N,To=new N,wo=new N,Xr=new N,qr=new N,Ds=new N,Ba=new N,wc=new N,Ec=new N,Ls=new N;function ad(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Ls.fromArray(r,s);let a=i.x*Math.abs(Ls.x)+i.y*Math.abs(Ls.y)+i.z*Math.abs(Ls.z),l=t.dot(Ls),c=e.dot(Ls),h=n.dot(Ls);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var xv=new nr,ka=new N,ld=new N,Rr=class{constructor(t=new N,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):xv.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ka.subVectors(t,this.center);let e=ka.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ka,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ld.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ka.copy(t.center).add(ld)),this.expandByPoint(ka.copy(t.center).sub(ld))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},yr=new N,cd=new N,Ac=new N,Yr=new N,hd=new N,Cc=new N,ud=new N,el=class{constructor(t=new N,e=new N(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=yr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yr.copy(this.origin).addScaledVector(this.direction,e),yr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){cd.copy(t).add(e).multiplyScalar(.5),Ac.copy(e).sub(t).normalize(),Yr.copy(this.origin).sub(cd);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Ac),a=Yr.dot(this.direction),l=-Yr.dot(Ac),c=Yr.lengthSq(),h=Math.abs(1-o*o),u,d,f,m;if(h>0)if(u=o*l-a,d=o*a-l,m=s*h,u>=0)if(d>=-m)if(d<=m){let g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-m?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=m?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(cd).addScaledVector(Ac,d),f}intersectSphere(t,e){yr.subVectors(t.center,this.origin);let n=yr.dot(this.direction),i=yr.dot(yr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(t.min.x-d.x)*c,i=(t.max.x-d.x)*c):(n=(t.max.x-d.x)*c,i=(t.min.x-d.x)*c),h>=0?(s=(t.min.y-d.y)*h,o=(t.max.y-d.y)*h):(s=(t.max.y-d.y)*h,o=(t.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,yr)!==null}intersectTriangle(t,e,n,i,s){hd.subVectors(e,t),Cc.subVectors(n,t),ud.crossVectors(hd,Cc);let o=this.direction.dot(ud),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yr.subVectors(this.origin,t);let l=a*this.direction.dot(Cc.crossVectors(Yr,Cc));if(l<0)return null;let c=a*this.direction.dot(hd.cross(Yr));if(c<0||l+c>o)return null;let h=-a*Yr.dot(ud);return h<0?null:this.at(h/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ce=class r{constructor(t,e,n,i,s,o,a,l,c,h,u,d,f,m,g,_){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,g,_)}set(t,e,n,i,s,o,a,l,c,h,u,d,f,m,g,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/Eo.setFromMatrixColumn(t,0).length(),s=1/Eo.setFromMatrixColumn(t,1).length(),o=1/Eo.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(t.order==="XYZ"){let d=o*h,f=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=f+m*c,e[5]=d-g*c,e[9]=-a*l,e[2]=g-d*c,e[6]=m+f*c,e[10]=o*l}else if(t.order==="YXZ"){let d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d+g*a,e[4]=m*a-f,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=f*a-m,e[6]=g+d*a,e[10]=o*l}else if(t.order==="ZXY"){let d=l*h,f=l*u,m=c*h,g=c*u;e[0]=d-g*a,e[4]=-o*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=o*h,e[9]=g-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let d=o*h,f=o*u,m=a*h,g=a*u;e[0]=l*h,e[4]=m*c-f,e[8]=d*c+g,e[1]=l*u,e[5]=g*c+d,e[9]=f*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=g-d*u,e[8]=m*u+f,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=f*u+m,e[10]=d-g*u}else if(t.order==="XZY"){let d=o*l,f=o*c,m=a*l,g=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=d*u+g,e[5]=o*h,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*h,e[10]=g*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(vv,t,yv)}lookAt(t,e,n){let i=this.elements;return xi.subVectors(t,e),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),Zr.crossVectors(n,xi),Zr.lengthSq()===0&&(Math.abs(n.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),Zr.crossVectors(n,xi)),Zr.normalize(),Rc.crossVectors(xi,Zr),i[0]=Zr.x,i[4]=Rc.x,i[8]=xi.x,i[1]=Zr.y,i[5]=Rc.y,i[9]=xi.y,i[2]=Zr.z,i[6]=Rc.z,i[10]=xi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],m=n[2],g=n[6],_=n[10],p=n[14],M=n[3],v=n[7],y=n[11],T=n[15],w=i[0],E=i[4],C=i[8],x=i[12],b=i[1],P=i[5],D=i[9],O=i[13],k=i[2],G=i[6],V=i[10],z=i[14],Y=i[3],et=i[7],I=i[11],rt=i[15];return s[0]=o*w+a*b+l*k+c*Y,s[4]=o*E+a*P+l*G+c*et,s[8]=o*C+a*D+l*V+c*I,s[12]=o*x+a*O+l*z+c*rt,s[1]=h*w+u*b+d*k+f*Y,s[5]=h*E+u*P+d*G+f*et,s[9]=h*C+u*D+d*V+f*I,s[13]=h*x+u*O+d*z+f*rt,s[2]=m*w+g*b+_*k+p*Y,s[6]=m*E+g*P+_*G+p*et,s[10]=m*C+g*D+_*V+p*I,s[14]=m*x+g*O+_*z+p*rt,s[3]=M*w+v*b+y*k+T*Y,s[7]=M*E+v*P+y*G+T*et,s[11]=M*C+v*D+y*V+T*I,s[15]=M*x+v*O+y*z+T*rt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],d=t[10],f=t[14],m=t[3],g=t[7],_=t[11],p=t[15],M=l*f-c*d,v=a*f-c*u,y=a*d-l*u,T=o*f-c*h,w=o*d-l*h,E=o*u-a*h;return e*(g*M-_*v+p*y)-n*(m*M-_*T+p*w)+i*(m*v-g*T+p*E)-s*(m*y-g*w+_*E)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],d=t[10],f=t[11],m=t[12],g=t[13],_=t[14],p=t[15],M=u*_*c-g*d*c+g*l*f-a*_*f-u*l*p+a*d*p,v=m*d*c-h*_*c-m*l*f+o*_*f+h*l*p-o*d*p,y=h*g*c-m*u*c+m*a*f-o*g*f-h*a*p+o*u*p,T=m*u*l-h*g*l-m*a*d+o*g*d+h*a*_-o*u*_,w=e*M+n*v+i*y+s*T;if(w===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let E=1/w;return t[0]=M*E,t[1]=(g*d*s-u*_*s-g*i*f+n*_*f+u*i*p-n*d*p)*E,t[2]=(a*_*s-g*l*s+g*i*c-n*_*c-a*i*p+n*l*p)*E,t[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*E,t[4]=v*E,t[5]=(h*_*s-m*d*s+m*i*f-e*_*f-h*i*p+e*d*p)*E,t[6]=(m*l*s-o*_*s-m*i*c+e*_*c+o*i*p-e*l*p)*E,t[7]=(o*d*s-h*l*s+h*i*c-e*d*c-o*i*f+e*l*f)*E,t[8]=y*E,t[9]=(m*u*s-h*g*s-m*n*f+e*g*f+h*n*p-e*u*p)*E,t[10]=(o*g*s-m*a*s+m*n*c-e*g*c-o*n*p+e*a*p)*E,t[11]=(h*a*s-o*u*s-h*n*c+e*u*c+o*n*f-e*a*f)*E,t[12]=T*E,t[13]=(h*g*i-m*u*i+m*n*d-e*g*d-h*n*_+e*u*_)*E,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*_-e*a*_)*E,t[15]=(o*u*i-h*a*i+h*n*l-e*u*l-o*n*d+e*a*d)*E,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,m=s*u,g=o*h,_=o*u,p=a*u,M=l*c,v=l*h,y=l*u,T=n.x,w=n.y,E=n.z;return i[0]=(1-(g+p))*T,i[1]=(f+y)*T,i[2]=(m-v)*T,i[3]=0,i[4]=(f-y)*w,i[5]=(1-(d+p))*w,i[6]=(_+M)*w,i[7]=0,i[8]=(m+v)*E,i[9]=(_-M)*E,i[10]=(1-(d+g))*E,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=Eo.set(i[0],i[1],i[2]).length(),o=Eo.set(i[4],i[5],i[6]).length(),a=Eo.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),zi.copy(this);let c=1/s,h=1/o,u=1/a;return zi.elements[0]*=c,zi.elements[1]*=c,zi.elements[2]*=c,zi.elements[4]*=h,zi.elements[5]*=h,zi.elements[6]*=h,zi.elements[8]*=u,zi.elements[9]*=u,zi.elements[10]*=u,e.setFromRotationMatrix(zi),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Hi,l=!1){let c=this.elements,h=2*s/(e-t),u=2*s/(n-i),d=(e+t)/(e-t),f=(n+i)/(n-i),m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===Hi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ka)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Hi,l=!1){let c=this.elements,h=2/(e-t),u=2/(n-i),d=-(e+t)/(e-t),f=-(n+i)/(n-i),m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===Hi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ka)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},Eo=new N,zi=new Ce,vv=new N(0,0,0),yv=new N(1,1,1),Zr=new N,Rc=new N,xi=new N,E0=new Ce,A0=new Cr,Di=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(he(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-he(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(he(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-he(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(he(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-he(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Yt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return E0.makeRotationFromQuaternion(t),this.setFromRotationMatrix(E0,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return A0.setFromEuler(this),this.setFromQuaternion(A0,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Di.DEFAULT_ORDER="XYZ";var nl=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},Mv=0,C0=new N,Ao=new Cr,Mr=new Ce,Pc=new N,za=new N,bv=new N,Sv=new Cr,R0=new N(1,0,0),P0=new N(0,1,0),I0=new N(0,0,1),D0={type:"added"},Tv={type:"removed"},Co={type:"childadded",child:null},fd={type:"childremoved",child:null},un=class r extends Ar{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mv++}),this.uuid=Kr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new N,e=new Di,n=new Cr,i=new N(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ce},normalMatrix:{value:new te}}),this.matrix=new Ce,this.matrixWorld=new Ce,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new nl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.multiply(Ao),this}rotateOnWorldAxis(t,e){return Ao.setFromAxisAngle(t,e),this.quaternion.premultiply(Ao),this}rotateX(t){return this.rotateOnAxis(R0,t)}rotateY(t){return this.rotateOnAxis(P0,t)}rotateZ(t){return this.rotateOnAxis(I0,t)}translateOnAxis(t,e){return C0.copy(t).applyQuaternion(this.quaternion),this.position.add(C0.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(R0,t)}translateY(t){return this.translateOnAxis(P0,t)}translateZ(t){return this.translateOnAxis(I0,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Pc.copy(t):Pc.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),za.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(za,Pc,this.up):Mr.lookAt(Pc,za,this.up),this.quaternion.setFromRotationMatrix(Mr),i&&(Mr.extractRotation(i.matrixWorld),Ao.setFromRotationMatrix(Mr),this.quaternion.premultiply(Ao.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Xt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(D0),Co.child=t,this.dispatchEvent(Co),Co.child=null):Xt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Tv),fd.child=t,this.dispatchEvent(fd),fd.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Mr.multiply(t.parent.matrixWorld)),t.applyMatrix4(Mr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(D0),Co.child=t,this.dispatchEvent(Co),Co.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,t,bv),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(za,Sv,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(t.shapes,u)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),d=o(t.skeletons),f=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};un.DEFAULT_UP=new N(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Vi=new N,br=new N,dd=new N,Sr=new N,Ro=new N,Po=new N,L0=new N,pd=new N,md=new N,gd=new N,_d=new We,xd=new We,vd=new We,Tr=class r{constructor(t=new N,e=new N,n=new N){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),Vi.subVectors(t,e),i.cross(Vi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){Vi.subVectors(i,e),br.subVectors(n,e),dd.subVectors(t,e);let o=Vi.dot(Vi),a=Vi.dot(br),l=Vi.dot(dd),c=br.dot(br),h=br.dot(dd),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,m=(o*h-a*l)*d;return s.set(1-f-m,m,f)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,Sr)===null?!1:Sr.x>=0&&Sr.y>=0&&Sr.x+Sr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,Sr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Sr.x),l.addScaledVector(o,Sr.y),l.addScaledVector(a,Sr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return _d.setScalar(0),xd.setScalar(0),vd.setScalar(0),_d.fromBufferAttribute(t,e),xd.fromBufferAttribute(t,n),vd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(_d,s.x),o.addScaledVector(xd,s.y),o.addScaledVector(vd,s.z),o}static isFrontFacing(t,e,n,i){return Vi.subVectors(n,e),br.subVectors(t,e),Vi.cross(br).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Vi.subVectors(this.c,this.b),br.subVectors(this.a,this.b),Vi.cross(br).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;Ro.subVectors(i,n),Po.subVectors(s,n),pd.subVectors(t,n);let l=Ro.dot(pd),c=Po.dot(pd);if(l<=0&&c<=0)return e.copy(n);md.subVectors(t,i);let h=Ro.dot(md),u=Po.dot(md);if(h>=0&&u<=h)return e.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(Ro,o);gd.subVectors(t,s);let f=Ro.dot(gd),m=Po.dot(gd);if(m>=0&&f<=m)return e.copy(s);let g=f*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(Po,a);let _=h*m-f*u;if(_<=0&&u-h>=0&&f-m>=0)return L0.subVectors(s,i),a=(u-h)/(u-h+(f-m)),e.copy(i).addScaledVector(L0,a);let p=1/(_+g+d);return o=g*p,a=d*p,e.copy(n).addScaledVector(Ro,o).addScaledVector(Po,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Cg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$r={h:0,s:0,l:0},Ic={h:0,s:0,l:0};function yd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var ne=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ln){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=pe.workingColorSpace){return this.r=t,this.g=e,this.b=n,pe.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=pe.workingColorSpace){if(t=pv(t,1),e=he(e,0,1),n=he(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=yd(o,s,t+1/3),this.g=yd(o,s,t),this.b=yd(o,s,t-1/3)}return pe.colorSpaceToWorking(this,i),this}setStyle(t,e=ln){function n(s){s!==void 0&&parseFloat(s)<1&&Yt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Yt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Yt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ln){let n=Cg[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Yt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=wr(t.r),this.g=wr(t.g),this.b=wr(t.b),this}copyLinearToSRGB(t){return this.r=ko(t.r),this.g=ko(t.g),this.b=ko(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ln){return pe.workingToColorSpace(On.copy(this),t),Math.round(he(On.r*255,0,255))*65536+Math.round(he(On.g*255,0,255))*256+Math.round(he(On.b*255,0,255))}getHexString(t=ln){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.workingToColorSpace(On.copy(this),e);let n=On.r,i=On.g,s=On.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=pe.workingColorSpace){return pe.workingToColorSpace(On.copy(this),e),t.r=On.r,t.g=On.g,t.b=On.b,t}getStyle(t=ln){pe.workingToColorSpace(On.copy(this),t);let e=On.r,n=On.g,i=On.b;return t!==ln?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL($r),this.setHSL($r.h+t,$r.s+e,$r.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL($r),t.getHSL(Ic);let n=nd($r.h,Ic.h,e),i=nd($r.s,Ic.s,e),s=nd($r.l,Ic.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},On=new ne;ne.NAMES=Cg;var wv=0,Gi=class extends Ar{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wv++}),this.uuid=Kr(),this.name="",this.type="Material",this.blending=Os,this.side=Er,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Jc,this.blendDst=Kc,this.blendEquation=Qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ne(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Dd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Us,this.stencilZFail=Us,this.stencilZPass=Us,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Yt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Yt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Os&&(n.blending=this.blending),this.side!==Er&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Jc&&(n.blendSrc=this.blendSrc),this.blendDst!==Kc&&(n.blendDst=this.blendDst),this.blendEquation!==Qr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Dd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Us&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Us&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Us&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},jr=class extends Gi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var nn=new N,Dc=new Pt,Ev=0,hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ev++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=eh,this.updateRanges=[],this.gpuType=Ni,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Dc.fromBufferAttribute(this,e),Dc.applyMatrix3(t),this.setXY(e,Dc.x,Dc.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix3(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyMatrix4(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.applyNormalMatrix(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)nn.fromBufferAttribute(this,e),nn.transformDirection(t),this.setXYZ(e,nn.x,nn.y,nn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==eh&&(t.usage=this.usage),t}};var il=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var rl=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},Av=0,Ii=new Ce,Md=new un,Io=new N,vi=new nr,Va=new nr,xn=new N,ke=class r extends Ar{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Av++}),this.uuid=Kr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ep(t)?rl:il)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new te().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ii.makeRotationFromQuaternion(t),this.applyMatrix4(Ii),this}rotateX(t){return Ii.makeRotationX(t),this.applyMatrix4(Ii),this}rotateY(t){return Ii.makeRotationY(t),this.applyMatrix4(Ii),this}rotateZ(t){return Ii.makeRotationZ(t),this.applyMatrix4(Ii),this}translate(t,e,n){return Ii.makeTranslation(t,e,n),this.applyMatrix4(Ii),this}scale(t,e,n){return Ii.makeScale(t,e,n),this.applyMatrix4(Ii),this}lookAt(t){return Md.lookAt(t),Md.updateMatrix(),this.applyMatrix4(Md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Io).negate(),this.translate(Io.x,Io.y,Io.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Yt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];vi.setFromBufferAttribute(s),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,vi.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,vi.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(vi.min),this.boundingBox.expandByPoint(vi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Xt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Rr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Xt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(t){let n=this.boundingSphere.center;if(vi.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];Va.setFromBufferAttribute(a),this.morphTargetsRelative?(xn.addVectors(vi.min,Va.min),vi.expandByPoint(xn),xn.addVectors(vi.max,Va.max),vi.expandByPoint(xn)):(vi.expandByPoint(Va.min),vi.expandByPoint(Va.max))}vi.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)xn.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(xn));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)xn.fromBufferAttribute(a,c),l&&(Io.fromBufferAttribute(t,c),xn.add(Io)),i=Math.max(i,n.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Xt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Xt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new N,l[C]=new N;let c=new N,h=new N,u=new N,d=new Pt,f=new Pt,m=new Pt,g=new N,_=new N;function p(C,x,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),m.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),m.sub(d);let P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(g.copy(h).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),_.copy(u).multiplyScalar(f.x).addScaledVector(h,-m.x).multiplyScalar(P),a[C].add(g),a[x].add(g),a[b].add(g),l[C].add(_),l[x].add(_),l[b].add(_))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,x=M.length;C<x;++C){let b=M[C],P=b.start,D=b.count;for(let O=P,k=P+D;O<k;O+=3)p(t.getX(O+0),t.getX(O+1),t.getX(O+2))}let v=new N,y=new N,T=new N,w=new N;function E(C){T.fromBufferAttribute(i,C),w.copy(T);let x=a[C];v.copy(x),v.sub(T.multiplyScalar(T.dot(x))).normalize(),y.crossVectors(w,x);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,v.x,v.y,v.z,P)}for(let C=0,x=M.length;C<x;++C){let b=M[C],P=b.start,D=b.count;for(let O=P,k=P+D;O<k;O+=3)E(t.getX(O+0)),E(t.getX(O+1)),E(t.getX(O+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new N,s=new N,o=new N,a=new N,l=new N,c=new N,h=new N,u=new N;if(t)for(let d=0,f=t.count;d<f;d+=3){let m=t.getX(d+0),g=t.getX(d+1),_=t.getX(d+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),s.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)xn.fromBufferAttribute(t,e),xn.normalize(),t.setXYZ(e,xn.x,xn.y,xn.z)}toNonIndexed(){function t(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[m++]=c[f++]}return new hn(d,h,u)}if(this.index===null)return Yt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=t(d,n);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(t.data))}h.length>0&&(i[l]=h,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(e))}let s=t.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},N0=new Ce,Ns=new el,Lc=new Rr,F0=new N,Nc=new N,Fc=new N,Uc=new N,bd=new N,Oc=new N,U0=new N,Bc=new N,Re=class extends un{constructor(t=new ke,e=new jr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){Oc.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(bd.fromBufferAttribute(u,t),o?Oc.addScaledVector(bd,h):Oc.addScaledVector(bd.sub(e),h))}e.add(Oc)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Lc.copy(n.boundingSphere),Lc.applyMatrix4(s),Ns.copy(t.ray).recast(t.near),!(Lc.containsPoint(Ns.origin)===!1&&(Ns.intersectSphere(Lc,F0)===null||Ns.origin.distanceToSquared(F0)>(t.far-t.near)**2))&&(N0.copy(s).invert(),Ns.copy(t.ray).applyMatrix4(N0),!(n.boundingBox!==null&&Ns.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ns)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let _=d[m],p=o[_.materialIndex],M=Math.max(_.start,f.start),v=Math.min(a.count,Math.min(_.start+_.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let w=a.getX(y),E=a.getX(y+1),C=a.getX(y+2);i=kc(this,p,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){let M=a.getX(_),v=a.getX(_+1),y=a.getX(_+2);i=kc(this,o,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=d.length;m<g;m++){let _=d[m],p=o[_.materialIndex],M=Math.max(_.start,f.start),v=Math.min(l.count,Math.min(_.start+_.count,f.start+f.count));for(let y=M,T=v;y<T;y+=3){let w=y,E=y+1,C=y+2;i=kc(this,p,t,n,c,h,u,w,E,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let _=m,p=g;_<p;_+=3){let M=_,v=_+1,y=_+2;i=kc(this,o,t,n,c,h,u,M,v,y),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function Cv(r,t,e,n,i,s,o,a){let l;if(t.side===Cn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===Er,a),l===null)return null;Bc.copy(a),Bc.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Bc);return c<e.near||c>e.far?null:{distance:c,point:Bc.clone(),object:r}}function kc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,Nc),r.getVertexPosition(l,Fc),r.getVertexPosition(c,Uc);let h=Cv(r,t,e,n,Nc,Fc,Uc,U0);if(h){let u=new N;Tr.getBarycoord(U0,Nc,Fc,Uc,u),i&&(h.uv=Tr.getInterpolatedAttribute(i,a,l,c,u,new Pt)),s&&(h.uv1=Tr.getInterpolatedAttribute(s,a,l,c,u,new Pt)),o&&(h.normal=Tr.getInterpolatedAttribute(o,a,l,c,u,new N),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new N,materialIndex:0};Tr.getNormal(Nc,Fc,Uc,d.normal),h.face=d,h.barycoord=u}return h}var ze=class r extends ke{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(h,3)),this.setAttribute("uv",new fe(u,2));function m(g,_,p,M,v,y,T,w,E,C,x){let b=y/E,P=T/C,D=y/2,O=T/2,k=w/2,G=E+1,V=C+1,z=0,Y=0,et=new N;for(let I=0;I<V;I++){let rt=I*P-O;for(let Lt=0;Lt<G;Lt++){let Bt=Lt*b-D;et[g]=Bt*M,et[_]=rt*v,et[p]=k,c.push(et.x,et.y,et.z),et[g]=0,et[_]=0,et[p]=w>0?1:-1,h.push(et.x,et.y,et.z),u.push(Lt/E),u.push(1-I/C),z+=1}}for(let I=0;I<C;I++)for(let rt=0;rt<E;rt++){let Lt=d+rt+G*I,Bt=d+rt+G*(I+1),zt=d+(rt+1)+G*(I+1),$t=d+(rt+1)+G*I;l.push(Lt,Bt,$t),l.push(Bt,zt,$t),Y+=6}a.addGroup(f,Y,x),f+=Y,d+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Zs(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Yt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function kn(r){let t={};for(let e=0;e<r.length;e++){let n=Zs(r[e]);for(let i in n)t[i]=n[i]}return t}function Rv(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function np(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}var Rg={clone:Zs,merge:kn},Pv=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Iv=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Mi=class extends Gi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pv,this.fragmentShader=Iv,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Zs(t.uniforms),this.uniformsGroups=Rv(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},sl=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ce,this.projectionMatrix=new Ce,this.projectionMatrixInverse=new Ce,this.coordinateSystem=Hi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Jr=new N,O0=new Pt,B0=new Pt,cn=class extends sl{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=nh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(ed*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return nh*2*Math.atan(Math.tan(ed*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Jr.x,Jr.y).multiplyScalar(-t/Jr.z),Jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Jr.x,Jr.y).multiplyScalar(-t/Jr.z)}getViewSize(t,e){return this.getViewBounds(t,O0,B0),e.subVectors(B0,O0)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(ed*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Do=-90,Lo=1,oh=class extends un{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(Do,Lo,t,e);i.layers=this.layers,this.add(i);let s=new cn(Do,Lo,t,e);s.layers=this.layers,this.add(s);let o=new cn(Do,Lo,t,e);o.layers=this.layers,this.add(o);let a=new cn(Do,Lo,t,e);a.layers=this.layers,this.add(a);let l=new cn(Do,Lo,t,e);l.layers=this.layers,this.add(l);let c=new cn(Do,Lo,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Hi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ka)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,h),t.setRenderTarget(u,d,f),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},ol=class extends Jn{constructor(t=[],e=ss,n,i,s,o,a,l,c,h){super(t,e,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},al=class extends yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new ol(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new ze(5,5,5),s=new Mi({name:"CubemapFromEquirect",uniforms:Zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Cn,blending:rr});s.uniforms.tEquirect.value=e;let o=new Re(i,s),a=e.minFilter;return e.minFilter===os&&(e.minFilter=En),new oh(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},vn=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Dv={type:"move"},Go=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let _=e.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,m=.005;c.inputState.pinching&&d>f+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=f-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Dv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new vn;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Pr=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},ah=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=eh,this.updateRanges=[],this.version=0,this.uuid=Kr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},$n=new N,ll=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyMatrix4(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.applyNormalMatrix(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)$n.fromBufferAttribute(this,e),$n.transformDirection(t),this.setXYZ(e,$n.x,$n.y,$n.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Ae(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ji(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),n=Ae(n,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){ja("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){ja("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Wo=class extends Gi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},No,Ha=new N,Fo=new N,Uo=new N,Oo=new Pt,Ga=new Pt,Pg=new Ce,zc=new N,Wa=new N,Vc=new N,k0=new Pt,Sd=new Pt,z0=new Pt,Xo=class extends un{constructor(t=new Wo){if(super(),this.isSprite=!0,this.type="Sprite",No===void 0){No=new ke;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ah(e,5);No.setIndex([0,1,2,0,2,3]),No.setAttribute("position",new ll(n,3,0,!1)),No.setAttribute("uv",new ll(n,2,3,!1))}this.geometry=No,this.material=t,this.center=new Pt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Xt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Fo.setFromMatrixScale(this.matrixWorld),Pg.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Uo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Fo.multiplyScalar(-Uo.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Hc(zc.set(-.5,-.5,0),Uo,o,Fo,i,s),Hc(Wa.set(.5,-.5,0),Uo,o,Fo,i,s),Hc(Vc.set(.5,.5,0),Uo,o,Fo,i,s),k0.set(0,0),Sd.set(1,0),z0.set(1,1);let a=t.ray.intersectTriangle(zc,Wa,Vc,!1,Ha);if(a===null&&(Hc(Wa.set(-.5,.5,0),Uo,o,Fo,i,s),Sd.set(0,1),a=t.ray.intersectTriangle(zc,Vc,Wa,!1,Ha),a===null))return;let l=t.ray.origin.distanceTo(Ha);l<t.near||l>t.far||e.push({distance:l,point:Ha.clone(),uv:Tr.getInterpolation(Ha,zc,Wa,Vc,k0,Sd,z0,new Pt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function Hc(r,t,e,n,i,s){Oo.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(Ga.x=s*Oo.x-i*Oo.y,Ga.y=i*Oo.x+s*Oo.y):Ga.copy(Oo),r.copy(t),r.x+=Ga.x,r.y+=Ga.y,r.applyMatrix4(Pg)}var cl=class extends Jn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=yn,h=yn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var hl=class extends hn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},Bo=new Ce,V0=new Ce,Gc=[],H0=new nr,Lv=new Ce,Xa=new Re,qa=new Rr,ul=class extends Re{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new hl(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Lv)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new nr),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),H0.copy(t.boundingBox).applyMatrix4(Bo),this.boundingBox.union(H0)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Rr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,Bo),qa.copy(t.boundingSphere).applyMatrix4(Bo),this.boundingSphere.union(qa)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(Xa.geometry=this.geometry,Xa.material=this.material,Xa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),qa.copy(this.boundingSphere),qa.applyMatrix4(n),t.ray.intersectsSphere(qa)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Bo),V0.multiplyMatrices(n,Bo),Xa.matrixWorld=V0,Xa.raycast(t,Gc);for(let o=0,a=Gc.length;o<a;o++){let l=Gc[o];l.instanceId=s,l.object=this,e.push(l)}Gc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new hl(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new cl(new Float32Array(i*this.count),i,this.count,Xh,Ni));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Td=new N,Nv=new N,Fv=new te,Qi=class{constructor(t=new N(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=Td.subVectors(n,e).cross(Nv.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(Td),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||Fv.getNormalMatrix(t),i=this.coplanarPoint(Td).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},Fs=new Rr,Uv=new Pt(.5,.5),Wc=new N,qo=class{constructor(t=new Qi,e=new Qi,n=new Qi,i=new Qi,s=new Qi,o=new Qi){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Hi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],m=s[8],g=s[9],_=s[10],p=s[11],M=s[12],v=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-o,f-h,p-m,T-M).normalize(),i[1].setComponents(c+o,f+h,p+m,T+M).normalize(),i[2].setComponents(c+a,f+u,p+g,T+v).normalize(),i[3].setComponents(c-a,f-u,p-g,T-v).normalize(),n)i[4].setComponents(l,d,_,y).normalize(),i[5].setComponents(c-l,f-d,p-_,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-_,T-y).normalize(),e===Hi)i[5].setComponents(c+l,f+d,p+_,T+y).normalize();else if(e===Ka)i[5].setComponents(l,d,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fs)}intersectsSprite(t){Fs.center.set(0,0,0);let e=Uv.distanceTo(t.center);return Fs.radius=.7071067811865476+e,Fs.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(Wc.x=i.normal.x>0?t.max.x:t.min.x,Wc.y=i.normal.y>0?t.max.y:t.min.y,Wc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Wc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ts=class extends Gi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ne(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},G0=new Ce,Ld=new el,Xc=new Rr,qc=new N,Ir=class extends un{constructor(t=new ke,e=new ts){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Xc.copy(n.boundingSphere),Xc.applyMatrix4(i),Xc.radius+=s,t.ray.intersectsSphere(Xc)===!1)return;G0.copy(i).invert(),Ld.copy(t.ray).applyMatrix4(G0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let m=d,g=f;m<g;m++){let _=c.getX(m);qc.fromBufferAttribute(u,_),W0(qc,_,l,i,t,e,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let m=d,g=f;m<g;m++)qc.fromBufferAttribute(u,m),W0(qc,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function W0(r,t,e,n,i,s,o){let a=Ld.distanceSqToPoint(r);if(a<e){let l=new N;Ld.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var zs=class extends Jn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},es=class extends Jn{constructor(t,e,n=Xi,i,s,o,a=yn,l=yn,c,h=er,u=1){if(h!==er&&h!==as)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:t,height:e,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ho(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},lh=class extends es{constructor(t,e=Xi,n=ss,i,s,o=yn,a=yn,l,c=er){let h={width:t,height:t,depth:1},u=[h,h,h,h,h,h];super(t,t,e,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},fl=class extends Jn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var dl=class r extends ke{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new N,h=new Pt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=e;u++,d+=3){let f=n+u/e*i;c.x=t*Math.cos(f),c.y=t*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/t+1)/2,h.y=(o[d+1]/t+1)/2,l.push(h.x,h.y)}for(let u=1;u<=e;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Bn=class r extends ke{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],m=0,g=[],_=n/2,p=0;M(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function M(){let y=new N,T=new N,w=0,E=(e-t)/n;for(let C=0;C<=s;C++){let x=[],b=C/s,P=b*(e-t)+t;for(let D=0;D<=i;D++){let O=D/i,k=O*l+a,G=Math.sin(k),V=Math.cos(k);T.x=P*G,T.y=-b*n+_,T.z=P*V,u.push(T.x,T.y,T.z),y.set(G,E,V).normalize(),d.push(y.x,y.y,y.z),f.push(O,1-b),x.push(m++)}g.push(x)}for(let C=0;C<i;C++)for(let x=0;x<s;x++){let b=g[x][C],P=g[x+1][C],D=g[x+1][C+1],O=g[x][C+1];(t>0||x!==0)&&(h.push(b,P,O),w+=3),(e>0||x!==s-1)&&(h.push(P,D,O),w+=3)}c.addGroup(p,w,0),p+=w}function v(y){let T=m,w=new Pt,E=new N,C=0,x=y===!0?t:e,b=y===!0?1:-1;for(let D=1;D<=i;D++)u.push(0,_*b,0),d.push(0,b,0),f.push(.5,.5),m++;let P=m;for(let D=0;D<=i;D++){let k=D/i*l+a,G=Math.cos(k),V=Math.sin(k);E.x=x*V,E.y=_*b,E.z=x*G,u.push(E.x,E.y,E.z),d.push(0,b,0),w.x=G*.5+.5,w.y=V*.5*b+.5,f.push(w.x,w.y),m++}for(let D=0;D<i;D++){let O=T+D,k=P+D;y===!0?h.push(k,k+1,O):h.push(k+1,k,O),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var ch=class r extends ke{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(M){let v=new N,y=new N,T=new N;for(let w=0;w<e.length;w+=3)f(e[w+0],v),f(e[w+1],y),f(e[w+2],T),l(v,y,T,M)}function l(M,v,y,T){let w=T+1,E=[];for(let C=0;C<=w;C++){E[C]=[];let x=M.clone().lerp(y,C/w),b=v.clone().lerp(y,C/w),P=w-C;for(let D=0;D<=P;D++)D===0&&C===w?E[C][D]=x:E[C][D]=x.clone().lerp(b,D/P)}for(let C=0;C<w;C++)for(let x=0;x<2*(w-C)-1;x++){let b=Math.floor(x/2);x%2===0?(d(E[C][b+1]),d(E[C+1][b]),d(E[C][b])):(d(E[C][b+1]),d(E[C+1][b+1]),d(E[C+1][b]))}}function c(M){let v=new N;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(M),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){let M=new N;for(let v=0;v<s.length;v+=3){M.x=s[v+0],M.y=s[v+1],M.z=s[v+2];let y=_(M)/2/Math.PI+.5,T=p(M)/Math.PI+.5;o.push(y,1-T)}m(),u()}function u(){for(let M=0;M<o.length;M+=6){let v=o[M+0],y=o[M+2],T=o[M+4],w=Math.max(v,y,T),E=Math.min(v,y,T);w>.9&&E<.1&&(v<.2&&(o[M+0]+=1),y<.2&&(o[M+2]+=1),T<.2&&(o[M+4]+=1))}}function d(M){s.push(M.x,M.y,M.z)}function f(M,v){let y=M*3;v.x=t[y+0],v.y=t[y+1],v.z=t[y+2]}function m(){let M=new N,v=new N,y=new N,T=new N,w=new Pt,E=new Pt,C=new Pt;for(let x=0,b=0;x<s.length;x+=9,b+=6){M.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),w.set(o[b+0],o[b+1]),E.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),T.copy(M).add(v).add(y).divideScalar(3);let P=_(T);g(w,b+0,M,P),g(E,b+2,v,P),g(C,b+4,y,P)}}function g(M,v,y,T){T<0&&M.x===1&&(o[v]=M.x-1),y.x===0&&y.z===0&&(o[v]=T/2/Math.PI+.5)}function _(M){return Math.atan2(M.z,-M.x)}function p(M){return Math.atan2(-M.y,Math.sqrt(M.x*M.x+M.z*M.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Yt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Pt:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new N,i=[],s=[],o=[],a=new N,l=new Ce;for(let f=0;f<=t;f++){let m=f/t;i[f]=this.getTangentAt(m,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=t;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(he(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,m))}o[f].crossVectors(i[f],s[f])}if(e===!0){let f=Math.acos(he(s[0].dot(s[t]),-1,1));f/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(f=-f);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],f*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},pl=class extends Li{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Pt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},hh=class extends pl{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function ip(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var Yc=new N,wd=new ip,Ed=new ip,Ad=new ip,ns=class extends Li{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new N){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Yc.subVectors(i[0],i[1]).add(i[0]),c=Yc);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Yc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Yc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),_=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),wd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,m,g,_),Ed.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,m,g,_),Ad.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,m,g,_)}else this.curveType==="catmullrom"&&(wd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Ed.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Ad.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(wd.calc(l),Ed.calc(l),Ad.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new N().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function X0(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function Ov(r,t){let e=1-r;return e*e*t}function Bv(r,t){return 2*(1-r)*r*t}function kv(r,t){return r*r*t}function Ya(r,t,e,n){return Ov(r,t)+Bv(r,e)+kv(r,n)}function zv(r,t){let e=1-r;return e*e*e*t}function Vv(r,t){let e=1-r;return 3*e*e*r*t}function Hv(r,t){return 3*(1-r)*r*r*t}function Gv(r,t){return r*r*r*t}function Za(r,t,e,n,i){return zv(r,t)+Vv(r,e)+Hv(r,n)+Gv(r,i)}var uh=class extends Li{constructor(t=new Pt,e=new Pt,n=new Pt,i=new Pt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Za(t,i.x,s.x,o.x,a.x),Za(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},fh=class extends Li{constructor(t=new N,e=new N,n=new N,i=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new N){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Za(t,i.x,s.x,o.x,a.x),Za(t,i.y,s.y,o.y,a.y),Za(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},dh=class extends Li{constructor(t=new Pt,e=new Pt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Pt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Pt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ph=class extends Li{constructor(t=new N,e=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new N){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new N){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},mh=class extends Li{constructor(t=new Pt,e=new Pt,n=new Pt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Pt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ya(t,i.x,s.x,o.x),Ya(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ml=class extends Li{constructor(t=new N,e=new N,n=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new N){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(Ya(t,i.x,s.x,o.x),Ya(t,i.y,s.y,o.y),Ya(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},gh=class extends Li{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Pt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(X0(a,l.x,c.x,h.x,u.x),X0(a,l.y,c.y,h.y,u.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Pt().fromArray(i))}return this}},Wv=Object.freeze({__proto__:null,ArcCurve:hh,CatmullRomCurve3:ns,CubicBezierCurve:uh,CubicBezierCurve3:fh,EllipseCurve:pl,LineCurve:dh,LineCurve3:ph,QuadraticBezierCurve:mh,QuadraticBezierCurve3:ml,SplineCurve:gh});var gl=class r extends ch{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var _l=class r extends ke{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=t/a,d=e/l,f=[],m=[],g=[],_=[];for(let p=0;p<h;p++){let M=p*d-o;for(let v=0;v<c;v++){let y=v*u-s;m.push(y,-M,0),g.push(0,0,1),_.push(v/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){let v=M+c*p,y=M+c*(p+1),T=M+1+c*(p+1),w=M+1+c*p;f.push(v,y,w),f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Kn=class r extends ke{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new N,d=new N,f=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){let M=[],v=p/n,y=0;p===0&&o===0?y=.5/e:p===n&&l===Math.PI&&(y=-.5/e);for(let T=0;T<=e;T++){let w=T/e;u.x=-t*Math.cos(i+w*s)*Math.sin(o+v*a),u.y=t*Math.cos(o+v*a),u.z=t*Math.sin(i+w*s)*Math.sin(o+v*a),m.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),_.push(w+y,1-v),M.push(c++)}h.push(M)}for(let p=0;p<n;p++)for(let M=0;M<e;M++){let v=h[p][M+1],y=h[p][M],T=h[p+1][M],w=h[p+1][M+1];(p!==0||o>0)&&f.push(v,y,w),(p!==n-1||l<Math.PI)&&f.push(y,T,w)}this.setIndex(f),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var An=class r extends ke{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new N,u=new N,d=new N;for(let f=0;f<=n;f++)for(let m=0;m<=i;m++){let g=m/i*s,_=f/n*Math.PI*2;u.x=(t+e*Math.cos(_))*Math.cos(g),u.y=(t+e*Math.cos(_))*Math.sin(g),u.z=e*Math.sin(_),a.push(u.x,u.y,u.z),h.x=t*Math.cos(g),h.y=t*Math.sin(g),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(m/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let m=1;m<=i;m++){let g=(i+1)*f+m-1,_=(i+1)*(f-1)+m-1,p=(i+1)*(f-1)+m,M=(i+1)*f+m;o.push(g,_,M),o.push(_,p,M)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},xl=class r extends ke{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new N,d=new N,f=new N,m=new N,g=new N,_=new N,p=new N;for(let v=0;v<=n;++v){let y=v/n*s*Math.PI*2;M(y,s,o,t,f),M(y+.01,s,o,t,m),_.subVectors(m,f),p.addVectors(m,f),g.crossVectors(_,p),p.crossVectors(g,_),g.normalize(),p.normalize();for(let T=0;T<=i;++T){let w=T/i*Math.PI*2,E=-e*Math.cos(w),C=e*Math.sin(w);u.x=f.x+(E*p.x+C*g.x),u.y=f.y+(E*p.y+C*g.y),u.z=f.z+(E*p.z+C*g.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(v/n),h.push(T/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),E=(i+1)*v+y,C=(i+1)*(v-1)+y;a.push(T,w,C),a.push(w,E,C)}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(h,2));function M(v,y,T,w,E){let C=Math.cos(v),x=Math.sin(v),b=T/y*v,P=Math.cos(b);E.x=w*(2+P)*.5*C,E.y=w*(2+P)*x*.5,E.z=w*Math.sin(b)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},Vs=class r extends ke{constructor(t=new ml(new N(-1,-1,0),new N(-1,1,0),new N(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new N,l=new N,c=new Pt,h=new N,u=[],d=[],f=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new fe(u,3)),this.setAttribute("normal",new fe(d,3)),this.setAttribute("uv",new fe(f,2));function g(){for(let v=0;v<e;v++)_(v);_(s===!1?e:0),M(),p()}function _(v){h=t.getPointAt(v/e,h);let y=o.normals[v],T=o.binormals[v];for(let w=0;w<=i;w++){let E=w/i*Math.PI*2,C=Math.sin(E),x=-Math.cos(E);l.x=x*y.x+C*T.x,l.y=x*y.y+C*T.y,l.z=x*y.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let y=1;y<=i;y++){let T=(i+1)*(v-1)+(y-1),w=(i+1)*v+(y-1),E=(i+1)*v+y,C=(i+1)*(v-1)+y;m.push(T,w,C),m.push(w,E,C)}}function M(){for(let v=0;v<=e;v++)for(let y=0;y<=i;y++)c.x=v/e,c.y=y/i,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new Wv[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var _h=class extends Mi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Me=class extends Gi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ne(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Hs=class extends Me{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Pt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return he(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ne(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ne(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ne(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var vl=class extends Gi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ne(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ne(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Au,this.normalScale=new Pt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},xh=class extends Gi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=xg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},vh=class extends Gi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function Zc(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}var Gs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},yh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rd,endingEnd:Rd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Pd:s=t,a=2*e-n;break;case Id:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Pd:o=t,l=2*n-e;break;case Id:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,h=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,m=(n-e)/(i-e),g=m*m,_=g*m,p=-d*_+2*d*g-d*m,M=(1+d)*_+(-1.5-2*d)*g+(-.5+d)*m+1,v=(-1-f)*_+(1.5+f)*g+.5*m,y=f*_-f*g;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+M*o[c+T]+v*o[l+T]+y*o[u+T];return s}},Mh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,h=(n-e)/(i-e),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},bh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},bi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=Zc(e,this.TimeBufferType),this.values=Zc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:Zc(t.times,Array),values:Zc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new bh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Mh(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new yh(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case $a:e=this.InterpolantFactoryMethodDiscrete;break;case th:e=this.InterpolantFactoryMethodLinear;break;case $c:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Yt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return th;case this.InterpolantFactoryMethodSmooth:return $c}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Xt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Xt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Xt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Xt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&dv(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Xt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===$c,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],h=t[a+1];if(c!==h&&(a!==1||c!==t[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let m=0;m!==n;++m){let g=e[u+m];if(g!==e[d+m]||g!==e[f+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)e[d+f]=e[u+f]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};bi.prototype.ValueTypeName="";bi.prototype.TimeBufferType=Float32Array;bi.prototype.ValueBufferType=Float32Array;bi.prototype.DefaultInterpolation=th;var is=class extends bi{constructor(t,e,n){super(t,e,n)}};is.prototype.ValueTypeName="bool";is.prototype.ValueBufferType=Array;is.prototype.DefaultInterpolation=$a;is.prototype.InterpolantFactoryMethodLinear=void 0;is.prototype.InterpolantFactoryMethodSmooth=void 0;var Sh=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}};Sh.prototype.ValueTypeName="color";var Th=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}};Th.prototype.ValueTypeName="number";var wh=class extends Gs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let h=c+a;c!==h;c+=4)Cr.slerpFlat(s,0,o,c-a,o,c,l);return s}},yl=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new wh(this.times,this.values,this.getValueSize(),t)}};yl.prototype.ValueTypeName="quaternion";yl.prototype.InterpolantFactoryMethodSmooth=void 0;var rs=class extends bi{constructor(t,e,n){super(t,e,n)}};rs.prototype.ValueTypeName="string";rs.prototype.ValueBufferType=Array;rs.prototype.DefaultInterpolation=$a;rs.prototype.InterpolantFactoryMethodLinear=void 0;rs.prototype.InterpolantFactoryMethodSmooth=void 0;var Eh=class extends bi{constructor(t,e,n,i){super(t,e,n,i)}};Eh.prototype.ValueTypeName="vector";var Ah=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],m=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Ig=new Ah,Ch=class{constructor(t){this.manager=t!==void 0?t:Ig,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Ch.DEFAULT_MATERIAL_NAME="__DEFAULT";var Yo=class extends un{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new ne(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var Cd=new Ce,q0=new N,Y0=new N,Rh=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Pt(512,512),this.mapType=oi,this.map=null,this.mapPass=null,this.matrix=new Ce,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new qo,this._frameExtents=new Pt(1,1),this._viewportCount=1,this._viewports=[new We(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;q0.setFromMatrixPosition(t.matrixWorld),e.position.copy(q0),Y0.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Y0),e.updateMatrixWorld(),Cd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Cd,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Cd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var Nd=class extends Rh{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Ml=class extends Yo{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Nd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zo=class extends sl{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Fd=class extends Rh{constructor(){super(new Zo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ir=class extends Yo{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Fd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Ws=class extends Yo{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Ph=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var rp="\\[\\]\\.:\\/",Xv=new RegExp("["+rp+"]","g"),sp="[^"+rp+"]",qv="[^"+rp.replace("\\.","")+"]",Yv=/((?:WC+[\/:])*)/.source.replace("WC",sp),Zv=/(WCOD+)?/.source.replace("WCOD",qv),$v=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",sp),Jv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",sp),Kv=new RegExp("^"+Yv+Zv+$v+Jv+"$"),Qv=["material","materials","bones","map"],Ud=class{constructor(t,e,n){let i=n||Oe.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},Oe=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(Xv,"")}static parseTrackName(t){let e=Kv.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Qv.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Yt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Xt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Xt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Xt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Xt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Xt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Xt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Xt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Xt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Oe.Composite=Ud;Oe.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Oe.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Oe.prototype.GetterByBindingType=[Oe.prototype._getValue_direct,Oe.prototype._getValue_array,Oe.prototype._getValue_arrayElement,Oe.prototype._getValue_toArray];Oe.prototype.SetterByBindingTypeAndVersioning=[[Oe.prototype._setValue_direct,Oe.prototype._setValue_direct_setNeedsUpdate,Oe.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_array,Oe.prototype._setValue_array_setNeedsUpdate,Oe.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_arrayElement,Oe.prototype._setValue_arrayElement_setNeedsUpdate,Oe.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Oe.prototype._setValue_fromArray,Oe.prototype._setValue_fromArray_setNeedsUpdate,Oe.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var vT=new Float32Array(1);function op(r,t,e,n){let i=jv(n);switch(e){case Qd:return r*t;case Xh:return r*t/i.components*i.byteLength;case qh:return r*t/i.components*i.byteLength;case Ys:return r*t*2/i.components*i.byteLength;case Yh:return r*t*2/i.components*i.byteLength;case jd:return r*t*3/i.components*i.byteLength;case Fi:return r*t*4/i.components*i.byteLength;case Zh:return r*t*4/i.components*i.byteLength;case wl:case El:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Al:case Cl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Jh:case Qh:return Math.max(r,16)*Math.max(t,8)/4;case $h:case Kh:return Math.max(r,8)*Math.max(t,8)/2;case jh:case tu:case nu:case iu:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case eu:case ru:case su:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case ou:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case au:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case lu:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case cu:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case hu:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case uu:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case fu:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case du:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case pu:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case mu:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case gu:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case _u:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case xu:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case vu:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case yu:case Mu:case bu:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Su:case Tu:return Math.ceil(r/4)*Math.ceil(t/4)*8;case wu:case Eu:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function jv(r){switch(r){case oi:case Zd:return{byteLength:1,components:1};case Jo:case $d:case sr:return{byteLength:2,components:1};case Gh:case Wh:return{byteLength:2,components:4};case Xi:case Hh:case Ni:return{byteLength:4,components:1};case Jd:case Kd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Yt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function t_(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ey(r){let t=new WeakMap;function e(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){let m=u[d],g=u[f];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){let g=u[f];r.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ny=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,iy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ry=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,sy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,oy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ay=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ly=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,cy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,hy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,uy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,fy=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,dy=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,py=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,my=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,gy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_y=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,xy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,vy=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yy=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,My=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,by=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Sy=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Ty=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wy=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ey=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ay=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Cy=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ry=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Py=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iy=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Dy="gl_FragColor = linearToOutputTexel( gl_FragColor );",Ly=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ny=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fy=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Uy=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Oy=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,By=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ky=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,zy=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vy=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Hy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Gy=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Wy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Xy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,qy=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Yy=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$y=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Jy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ky=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Qy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jy=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,t1=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,e1=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,n1=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,i1=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,r1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,s1=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,o1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,a1=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,l1=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,c1=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,h1=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,u1=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,f1=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,d1=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,p1=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,m1=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,g1=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_1=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,x1=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,v1=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,y1=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,M1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,b1=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,S1=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,T1=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,w1=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,E1=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,A1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,C1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,R1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,P1=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,I1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,D1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,L1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,N1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,F1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,U1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,O1=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,B1=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,k1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,z1=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,V1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,H1=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,G1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,W1=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,X1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,q1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Y1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Z1=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$1=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,J1=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,K1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Q1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,j1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,eM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,nM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,oM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,lM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,cM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,hM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,uM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,fM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,pM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,gM=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_M=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xM=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vM=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,yM=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,MM=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,bM=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SM=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TM=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wM=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,EM=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,AM=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,CM=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RM=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,PM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,IM=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DM=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,LM=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,NM=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ie={alphahash_fragment:ny,alphahash_pars_fragment:iy,alphamap_fragment:ry,alphamap_pars_fragment:sy,alphatest_fragment:oy,alphatest_pars_fragment:ay,aomap_fragment:ly,aomap_pars_fragment:cy,batching_pars_vertex:hy,batching_vertex:uy,begin_vertex:fy,beginnormal_vertex:dy,bsdfs:py,iridescence_fragment:my,bumpmap_pars_fragment:gy,clipping_planes_fragment:_y,clipping_planes_pars_fragment:xy,clipping_planes_pars_vertex:vy,clipping_planes_vertex:yy,color_fragment:My,color_pars_fragment:by,color_pars_vertex:Sy,color_vertex:Ty,common:wy,cube_uv_reflection_fragment:Ey,defaultnormal_vertex:Ay,displacementmap_pars_vertex:Cy,displacementmap_vertex:Ry,emissivemap_fragment:Py,emissivemap_pars_fragment:Iy,colorspace_fragment:Dy,colorspace_pars_fragment:Ly,envmap_fragment:Ny,envmap_common_pars_fragment:Fy,envmap_pars_fragment:Uy,envmap_pars_vertex:Oy,envmap_physical_pars_fragment:Zy,envmap_vertex:By,fog_vertex:ky,fog_pars_vertex:zy,fog_fragment:Vy,fog_pars_fragment:Hy,gradientmap_pars_fragment:Gy,lightmap_pars_fragment:Wy,lights_lambert_fragment:Xy,lights_lambert_pars_fragment:qy,lights_pars_begin:Yy,lights_toon_fragment:$y,lights_toon_pars_fragment:Jy,lights_phong_fragment:Ky,lights_phong_pars_fragment:Qy,lights_physical_fragment:jy,lights_physical_pars_fragment:t1,lights_fragment_begin:e1,lights_fragment_maps:n1,lights_fragment_end:i1,logdepthbuf_fragment:r1,logdepthbuf_pars_fragment:s1,logdepthbuf_pars_vertex:o1,logdepthbuf_vertex:a1,map_fragment:l1,map_pars_fragment:c1,map_particle_fragment:h1,map_particle_pars_fragment:u1,metalnessmap_fragment:f1,metalnessmap_pars_fragment:d1,morphinstance_vertex:p1,morphcolor_vertex:m1,morphnormal_vertex:g1,morphtarget_pars_vertex:_1,morphtarget_vertex:x1,normal_fragment_begin:v1,normal_fragment_maps:y1,normal_pars_fragment:M1,normal_pars_vertex:b1,normal_vertex:S1,normalmap_pars_fragment:T1,clearcoat_normal_fragment_begin:w1,clearcoat_normal_fragment_maps:E1,clearcoat_pars_fragment:A1,iridescence_pars_fragment:C1,opaque_fragment:R1,packing:P1,premultiplied_alpha_fragment:I1,project_vertex:D1,dithering_fragment:L1,dithering_pars_fragment:N1,roughnessmap_fragment:F1,roughnessmap_pars_fragment:U1,shadowmap_pars_fragment:O1,shadowmap_pars_vertex:B1,shadowmap_vertex:k1,shadowmask_pars_fragment:z1,skinbase_vertex:V1,skinning_pars_vertex:H1,skinning_vertex:G1,skinnormal_vertex:W1,specularmap_fragment:X1,specularmap_pars_fragment:q1,tonemapping_fragment:Y1,tonemapping_pars_fragment:Z1,transmission_fragment:$1,transmission_pars_fragment:J1,uv_pars_fragment:K1,uv_pars_vertex:Q1,uv_vertex:j1,worldpos_vertex:tM,background_vert:eM,background_frag:nM,backgroundCube_vert:iM,backgroundCube_frag:rM,cube_vert:sM,cube_frag:oM,depth_vert:aM,depth_frag:lM,distance_vert:cM,distance_frag:hM,equirect_vert:uM,equirect_frag:fM,linedashed_vert:dM,linedashed_frag:pM,meshbasic_vert:mM,meshbasic_frag:gM,meshlambert_vert:_M,meshlambert_frag:xM,meshmatcap_vert:vM,meshmatcap_frag:yM,meshnormal_vert:MM,meshnormal_frag:bM,meshphong_vert:SM,meshphong_frag:TM,meshphysical_vert:wM,meshphysical_frag:EM,meshtoon_vert:AM,meshtoon_frag:CM,points_vert:RM,points_frag:PM,shadow_vert:IM,shadow_frag:DM,sprite_vert:LM,sprite_frag:NM},_t={common:{diffuse:{value:new ne(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new te}},envmap:{envMap:{value:null},envMapRotation:{value:new te},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new te}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new te}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new te},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new te},normalScale:{value:new Pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new te},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new te}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new te}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new te}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ne(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ne(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0},uvTransform:{value:new te}},sprite:{diffuse:{value:new ne(16777215)},opacity:{value:1},center:{value:new Pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new te},alphaMap:{value:null},alphaMapTransform:{value:new te},alphaTest:{value:0}}},ar={basic:{uniforms:kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ne(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:kn([_t.common,_t.specularmap,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,_t.lights,{emissive:{value:new ne(0)},specular:{value:new ne(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:kn([_t.common,_t.envmap,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.roughnessmap,_t.metalnessmap,_t.fog,_t.lights,{emissive:{value:new ne(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:kn([_t.common,_t.aomap,_t.lightmap,_t.emissivemap,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.gradientmap,_t.fog,_t.lights,{emissive:{value:new ne(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:kn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,_t.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:kn([_t.points,_t.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:kn([_t.common,_t.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:kn([_t.common,_t.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:kn([_t.common,_t.bumpmap,_t.normalmap,_t.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:kn([_t.sprite,_t.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new te},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new te}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distance:{uniforms:kn([_t.common,_t.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distance_vert,fragmentShader:ie.distance_frag},shadow:{uniforms:kn([_t.lights,_t.fog,{color:{value:new ne(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};ar.physical={uniforms:kn([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new te},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new te},clearcoatNormalScale:{value:new Pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new te},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new te},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new te},sheen:{value:0},sheenColor:{value:new ne(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new te},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new te},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new te},transmissionSamplerSize:{value:new Pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new te},attenuationDistance:{value:0},attenuationColor:{value:new ne(0)},specularColor:{value:new ne(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new te},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new te},anisotropyVector:{value:new Pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new te}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};var Pu={r:0,b:0,g:0},$s=new Di,FM=new Ce;function UM(r,t,e,n,i,s,o){let a=new ne(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function m(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?e:t).get(y)),y}function g(v){let y=!1,T=m(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let w=r.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,o):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,y){let T=m(y);T&&(T.isCubeTexture||T.mapping===Sl)?(h===void 0&&(h=new Re(new ze(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:Zs(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:Cn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(w,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),$s.copy(y.backgroundRotation),$s.x*=-1,$s.y*=-1,$s.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&($s.y*=-1,$s.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(FM.makeRotationFromEuler($s)),h.material.toneMapped=pe.getTransfer(T.colorSpace)!==ye,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Re(new _l(2,2),new Mi({name:"BackgroundMaterial",uniforms:Zs(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:Er,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=pe.getTransfer(T.colorSpace)!==ye,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,y){v.getRGB(Pu,np(r)),n.buffers.color.setClear(Pu.r,Pu.g,Pu.b,y,o)}function M(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:_,dispose:M}}function OM(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(b,P,D,O,k){let G=!1,V=u(O,D,P);s!==V&&(s=V,c(s.object)),G=f(b,O,D,k),G&&m(b,O,D,k),k!==null&&t.update(k,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(b,P,D,O),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(k).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,P,D){let O=D.wireframe===!0,k=n[b.id];k===void 0&&(k={},n[b.id]=k);let G=k[P.id];G===void 0&&(G={},k[P.id]=G);let V=G[O];return V===void 0&&(V=d(l()),G[O]=V),V}function d(b){let P=[],D=[],O=[];for(let k=0;k<e;k++)P[k]=0,D[k]=0,O[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:D,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,P,D,O){let k=s.attributes,G=P.attributes,V=0,z=D.getAttributes();for(let Y in z)if(z[Y].location>=0){let I=k[Y],rt=G[Y];if(rt===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor)),I===void 0||I.attribute!==rt||rt&&I.data!==rt.data)return!0;V++}return s.attributesNum!==V||s.index!==O}function m(b,P,D,O){let k={},G=P.attributes,V=0,z=D.getAttributes();for(let Y in z)if(z[Y].location>=0){let I=G[Y];I===void 0&&(Y==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),Y==="instanceColor"&&b.instanceColor&&(I=b.instanceColor));let rt={};rt.attribute=I,I&&I.data&&(rt.data=I.data),k[Y]=rt,V++}s.attributes=k,s.attributesNum=V,s.index=O}function g(){let b=s.newAttributes;for(let P=0,D=b.length;P<D;P++)b[P]=0}function _(b){p(b,0)}function p(b,P){let D=s.newAttributes,O=s.enabledAttributes,k=s.attributeDivisors;D[b]=1,O[b]===0&&(r.enableVertexAttribArray(b),O[b]=1),k[b]!==P&&(r.vertexAttribDivisor(b,P),k[b]=P)}function M(){let b=s.newAttributes,P=s.enabledAttributes;for(let D=0,O=P.length;D<O;D++)P[D]!==b[D]&&(r.disableVertexAttribArray(D),P[D]=0)}function v(b,P,D,O,k,G,V){V===!0?r.vertexAttribIPointer(b,P,D,k,G):r.vertexAttribPointer(b,P,D,O,k,G)}function y(b,P,D,O){g();let k=O.attributes,G=D.getAttributes(),V=P.defaultAttributeValues;for(let z in G){let Y=G[z];if(Y.location>=0){let et=k[z];if(et===void 0&&(z==="instanceMatrix"&&b.instanceMatrix&&(et=b.instanceMatrix),z==="instanceColor"&&b.instanceColor&&(et=b.instanceColor)),et!==void 0){let I=et.normalized,rt=et.itemSize,Lt=t.get(et);if(Lt===void 0)continue;let Bt=Lt.buffer,zt=Lt.type,$t=Lt.bytesPerElement,$=zt===r.INT||zt===r.UNSIGNED_INT||et.gpuType===Hh;if(et.isInterleavedBufferAttribute){let Q=et.data,ut=Q.stride,It=et.offset;if(Q.isInstancedInterleavedBuffer){for(let Mt=0;Mt<Y.locationSize;Mt++)p(Y.location+Mt,Q.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let Mt=0;Mt<Y.locationSize;Mt++)_(Y.location+Mt);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Mt=0;Mt<Y.locationSize;Mt++)v(Y.location+Mt,rt/Y.locationSize,zt,I,ut*$t,(It+rt/Y.locationSize*Mt)*$t,$)}else{if(et.isInstancedBufferAttribute){for(let Q=0;Q<Y.locationSize;Q++)p(Y.location+Q,et.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let Q=0;Q<Y.locationSize;Q++)_(Y.location+Q);r.bindBuffer(r.ARRAY_BUFFER,Bt);for(let Q=0;Q<Y.locationSize;Q++)v(Y.location+Q,rt/Y.locationSize,zt,I,rt*$t,rt/Y.locationSize*Q*$t,$)}}else if(V!==void 0){let I=V[z];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(Y.location,I);break;case 3:r.vertexAttrib3fv(Y.location,I);break;case 4:r.vertexAttrib4fv(Y.location,I);break;default:r.vertexAttrib1fv(Y.location,I)}}}}M()}function T(){C();for(let b in n){let P=n[b];for(let D in P){let O=P[D];for(let k in O)h(O[k].object),delete O[k];delete P[D]}delete n[b]}}function w(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let D in P){let O=P[D];for(let k in O)h(O[k].object),delete O[k];delete P[D]}delete n[b.id]}function E(b){for(let P in n){let D=n[P];if(D[b.id]===void 0)continue;let O=D[b.id];for(let k in O)h(O[k].object),delete O[k];delete D[b.id]}}function C(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:w,releaseStatesOfProgram:E,initAttributes:g,enableAttribute:_,disableUnusedAttributes:M}}function BM(r,t,e){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let m=0;m<u;m++)f+=h[m];e.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<c.length;m++)o(c[m],h[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let m=0;for(let g=0;g<u;g++)m+=h[g]*d[g];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function kM(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let E=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(E.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(E){return!(E!==Fi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(E){let C=E===sr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(E!==oi&&n.convert(E)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&E!==Ni&&!C)}function l(E){if(E==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";E="mediump"}return E==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(Yt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:M,maxVaryings:v,maxFragmentUniforms:y,maxSamples:T,samples:w}}function zM(r){let t=this,e=null,n=0,i=!1,s=!1,o=new Qi,a=new te,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){e=h(u,d,0)},this.setState=function(u,d,f){let m=u.clippingPlanes,g=u.clipIntersection,_=u.clipShadows,p=r.get(u);if(!i||m===null||m.length===0||s&&!_)s?h(null):c();else{let M=s?0:n,v=M*4,y=p.clippingState||null;l.value=y,y=h(m,d,v,f);for(let T=0;T!==v;++T)y[T]=e[T];p.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,d,f,m){let g=u!==null?u.length:0,_=null;if(g!==0){if(_=l.value,m!==!0||_===null){let p=f+g*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,y=f;v!==g;++v,y+=4)o.copy(u[v]).applyMatrix4(M,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function VM(r){let t=new WeakMap;function e(o,a){return a===kh?o.mapping=ss:a===zh&&(o.mapping=qs),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===kh||a===zh)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new al(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var ls=4,Dg=[.125,.215,.35,.446,.526,.582],Ks=20,HM=256,Rl=new Zo,Lg=new ne,ap=null,lp=0,cp=0,hp=!1,GM=new N,cs=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=GM}=s;ap=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ug(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Fg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(ap,lp,cp),this._renderer.xr.enabled=hp,t.scissorTest=!1,Qo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ss||t.mapping===qs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ap=this._renderer.getRenderTarget(),lp=this._renderer.getActiveCubeFace(),cp=this._renderer.getActiveMipmapLevel(),hp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:sr,format:Fi,colorSpace:ks,depthBuffer:!1},i=Ng(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ng(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=WM(s)),this._blurMaterial=qM(s,t,e),this._ggxMaterial=XM(s,t,e)}return i}_compileMaterial(t){let e=new Re(new ke,t);this._renderer.compile(e,Rl)}_sceneToCubeUV(t,e,n,i,s){let l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Lg),u.toneMapping=Wi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Re(new ze,new jr({name:"PMREM.Background",side:Cn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,_=g.material,p=!1,M=t.background;M?M.isColor&&(_.color.copy(M),t.background=null,p=!0):(_.color.copy(Lg),p=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));let T=this._cubeSize;Qo(i,y*T,v>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(g,l),u.render(t,l)}u.toneMapping=f,u.autoClear=d,t.background=M}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===ss||t.mapping===qs;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ug()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Fg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Qo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,Rl)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:m}=this,g=this._sizeLods[n],_=3*g*(n>m-ls?n-m+ls:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=m-e,Qo(s,_,p,3*g,2*g),i.setRenderTarget(s),i.render(a,Rl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Qo(t,_,p,3*g,2*g),i.setRenderTarget(t),i.render(a,Rl)}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Xt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Ks-1),g=s/m,_=isFinite(s)?1+Math.floor(h*g):Ks;_>Ks&&Yt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Ks}`);let p=[],M=0;for(let E=0;E<Ks;++E){let C=E/g,x=Math.exp(-C*C/2);p.push(x),E===0?M+=x:E<_&&(M+=2*x)}for(let E=0;E<p.length;E++)p[E]=p[E]/M;d.envMap.value=t.texture,d.samples.value=_,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:v}=this;d.dTheta.value=m,d.mipInt.value=v-n;let y=this._sizeLods[i],T=3*y*(i>v-ls?i-v+ls:0),w=4*(this._cubeSize-y);Qo(e,T,w,3*y,2*y),l.setRenderTarget(e),l.render(u,Rl)}};function WM(r){let t=[],e=[],n=[],i=r,s=r-ls+1+Dg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-ls?l=Dg[o-r+ls-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,m=6,g=3,_=2,p=1,M=new Float32Array(g*m*f),v=new Float32Array(_*m*f),y=new Float32Array(p*m*f);for(let w=0;w<f;w++){let E=w%3*2/3-1,C=w>2?0:-1,x=[E,C,0,E+2/3,C,0,E+2/3,C+1,0,E,C,0,E+2/3,C+1,0,E,C+1,0];M.set(x,g*m*w),v.set(d,_*m*w);let b=[w,w,w,w,w,w];y.set(b,p*m*w)}let T=new ke;T.setAttribute("position",new hn(M,g)),T.setAttribute("uv",new hn(v,_)),T.setAttribute("faceIndex",new hn(y,p)),n.push(new Re(T,null)),i>ls&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function Ng(r,t,e){let n=new yi(r,t,e);return n.texture.mapping=Sl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Qo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function XM(r,t,e){return new Mi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:HM,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Du(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function qM(r,t,e){let n=new Float32Array(Ks),i=new N(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:Ks,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Fg(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Ug(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Du(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:rr,depthTest:!1,depthWrite:!1})}function Du(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function YM(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===kh||l===zh,h=l===ss||l===qs;if(c||h){let u=t.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new cs(r)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(e===null&&(e=new cs(r)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function ZM(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Vo("WebGLRenderer: "+n+" extension not supported."),i}}}function $M(r,t,e,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&t.remove(d.index);for(let m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(t.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,e.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)t.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,m=u.attributes.position,g=0;if(f!==null){let M=f.array;g=f.version;for(let v=0,y=M.length;v<y;v+=3){let T=M[v+0],w=M[v+1],E=M[v+2];d.push(T,w,w,E,E,T)}}else if(m!==void 0){let M=m.array;g=m.version;for(let v=0,y=M.length/3-1;v<y;v+=3){let T=v+0,w=v+1,E=v+2;d.push(T,w,w,E,E,T)}}else return;let _=new(ep(d)?rl:il)(d,1);_.version=g;let p=s.get(u);p&&t.remove(p),s.set(u,_)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function JM(r,t,e){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),e.update(f,n,1)}function c(d,f,m){m!==0&&(r.drawElementsInstanced(n,f,s,d*o,m),e.update(f,n,m))}function h(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,m);let _=0;for(let p=0;p<m;p++)_+=f[p];e.update(_,n,1)}function u(d,f,m,g){if(m===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,g,0,m);let p=0;for(let M=0;M<m;M++)p+=f[M]*g[M];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function KM(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Xt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function QM(r,t,e){let n=new WeakMap,i=new We;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let x=function(){E.dispose(),n.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],M=a.morphAttributes.color||[],v=0;f===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let y=a.attributes.position.count*v,T=1;y>t.maxTextureSize&&(T=Math.ceil(y/t.maxTextureSize),y=t.maxTextureSize);let w=new Float32Array(y*T*4*u),E=new tl(w,y,T,u);E.type=Ni,E.needsUpdate=!0;let C=v*4;for(let b=0;b<u;b++){let P=_[b],D=p[b],O=M[b],k=y*T*4*b;for(let G=0;G<P.count;G++){let V=G*C;f===!0&&(i.fromBufferAttribute(P,G),w[k+V+0]=i.x,w[k+V+1]=i.y,w[k+V+2]=i.z,w[k+V+3]=0),m===!0&&(i.fromBufferAttribute(D,G),w[k+V+4]=i.x,w[k+V+5]=i.y,w[k+V+6]=i.z,w[k+V+7]=0),g===!0&&(i.fromBufferAttribute(O,G),w[k+V+8]=i.x,w[k+V+9]=i.y,w[k+V+10]=i.z,w[k+V+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:E,size:new Pt(y,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];let m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function jM(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=t.get(l,h);if(i.get(u)!==c&&(t.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var tb={[Vd]:"LINEAR_TONE_MAPPING",[Hd]:"REINHARD_TONE_MAPPING",[Gd]:"CINEON_TONE_MAPPING",[Xs]:"ACES_FILMIC_TONE_MAPPING",[Xd]:"AGX_TONE_MAPPING",[qd]:"NEUTRAL_TONE_MAPPING",[Wd]:"CUSTOM_TONE_MAPPING"};function eb(r,t,e,n,i){let s=new yi(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new yi(t,e,{type:sr,depthBuffer:!1,stencilBuffer:!1}),a=new ke;a.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fe([0,2,0,0,2,0],2));let l=new _h({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new Re(a,l),h=new Zo(-1,1,1,-1,0,1),u=null,d=null,f=!1,m,g=null,_=[],p=!1;this.setSize=function(M,v){s.setSize(M,v),o.setSize(M,v);for(let y=0;y<_.length;y++){let T=_[y];T.setSize&&T.setSize(M,v)}},this.setEffects=function(M){_=M,p=_.length>0&&_[0].isRenderPass===!0;let v=s.width,y=s.height;for(let T=0;T<_.length;T++){let w=_[T];w.setSize&&w.setSize(v,y)}},this.begin=function(M,v){if(f||M.toneMapping===Wi&&_.length===0)return!1;if(g=v,v!==null){let y=v.width,T=v.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return p===!1&&M.setRenderTarget(s),m=M.toneMapping,M.toneMapping=Wi,!0},this.hasRenderPass=function(){return p},this.end=function(M,v){M.toneMapping=m,f=!0;let y=s,T=o;for(let w=0;w<_.length;w++){let E=_[w];if(E.enabled!==!1&&(E.render(M,T,y,v),E.needsSwap!==!1)){let C=y;y=T,T=C}}if(u!==M.outputColorSpace||d!==M.toneMapping){u=M.outputColorSpace,d=M.toneMapping,l.defines={},pe.getTransfer(u)===ye&&(l.defines.SRGB_TRANSFER="");let w=tb[d];w&&(l.defines[w]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,M.setRenderTarget(g),M.render(c,h),g=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var e_=new Jn,dp=new es(1,1),n_=new tl,i_=new sh,r_=new ol,Og=[],Bg=[],kg=new Float32Array(16),zg=new Float32Array(9),Vg=new Float32Array(4);function ea(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Og[i];if(s===void 0&&(s=new Float32Array(i),Og[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function fn(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function dn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Lu(r,t){let e=Bg[t];e===void 0&&(e=new Int32Array(t),Bg[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function nb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function ib(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;r.uniform2fv(this.addr,t),dn(e,t)}}function rb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(fn(e,t))return;r.uniform3fv(this.addr,t),dn(e,t)}}function sb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;r.uniform4fv(this.addr,t),dn(e,t)}}function ob(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;Vg.set(n),r.uniformMatrix2fv(this.addr,!1,Vg),dn(e,n)}}function ab(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;zg.set(n),r.uniformMatrix3fv(this.addr,!1,zg),dn(e,n)}}function lb(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(fn(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(fn(e,n))return;kg.set(n),r.uniformMatrix4fv(this.addr,!1,kg),dn(e,n)}}function cb(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function hb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;r.uniform2iv(this.addr,t),dn(e,t)}}function ub(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;r.uniform3iv(this.addr,t),dn(e,t)}}function fb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;r.uniform4iv(this.addr,t),dn(e,t)}}function db(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function pb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(fn(e,t))return;r.uniform2uiv(this.addr,t),dn(e,t)}}function mb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(fn(e,t))return;r.uniform3uiv(this.addr,t),dn(e,t)}}function gb(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(fn(e,t))return;r.uniform4uiv(this.addr,t),dn(e,t)}}function _b(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(dp.compareFunction=e.isReversedDepthBuffer()?Ru:Cu,s=dp):s=e_,e.setTexture2D(t||s,i)}function xb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||i_,i)}function vb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||r_,i)}function yb(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||n_,i)}function Mb(r){switch(r){case 5126:return nb;case 35664:return ib;case 35665:return rb;case 35666:return sb;case 35674:return ob;case 35675:return ab;case 35676:return lb;case 5124:case 35670:return cb;case 35667:case 35671:return hb;case 35668:case 35672:return ub;case 35669:case 35673:return fb;case 5125:return db;case 36294:return pb;case 36295:return mb;case 36296:return gb;case 35678:case 36198:case 36298:case 36306:case 35682:return _b;case 35679:case 36299:case 36307:return xb;case 35680:case 36300:case 36308:case 36293:return vb;case 36289:case 36303:case 36311:case 36292:return yb}}function bb(r,t){r.uniform1fv(this.addr,t)}function Sb(r,t){let e=ea(t,this.size,2);r.uniform2fv(this.addr,e)}function Tb(r,t){let e=ea(t,this.size,3);r.uniform3fv(this.addr,e)}function wb(r,t){let e=ea(t,this.size,4);r.uniform4fv(this.addr,e)}function Eb(r,t){let e=ea(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function Ab(r,t){let e=ea(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function Cb(r,t){let e=ea(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function Rb(r,t){r.uniform1iv(this.addr,t)}function Pb(r,t){r.uniform2iv(this.addr,t)}function Ib(r,t){r.uniform3iv(this.addr,t)}function Db(r,t){r.uniform4iv(this.addr,t)}function Lb(r,t){r.uniform1uiv(this.addr,t)}function Nb(r,t){r.uniform2uiv(this.addr,t)}function Fb(r,t){r.uniform3uiv(this.addr,t)}function Ub(r,t){r.uniform4uiv(this.addr,t)}function Ob(r,t,e){let n=this.cache,i=t.length,s=Lu(e,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=dp:o=e_;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function Bb(r,t,e){let n=this.cache,i=t.length,s=Lu(e,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||i_,s[o])}function kb(r,t,e){let n=this.cache,i=t.length,s=Lu(e,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||r_,s[o])}function zb(r,t,e){let n=this.cache,i=t.length,s=Lu(e,i);fn(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||n_,s[o])}function Vb(r){switch(r){case 5126:return bb;case 35664:return Sb;case 35665:return Tb;case 35666:return wb;case 35674:return Eb;case 35675:return Ab;case 35676:return Cb;case 5124:case 35670:return Rb;case 35667:case 35671:return Pb;case 35668:case 35672:return Ib;case 35669:case 35673:return Db;case 5125:return Lb;case 36294:return Nb;case 36295:return Fb;case 36296:return Ub;case 35678:case 36198:case 36298:case 36306:case 35682:return Ob;case 35679:case 36299:case 36307:return Bb;case 35680:case 36300:case 36308:case 36293:return kb;case 36289:case 36303:case 36311:case 36292:return zb}}var pp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Mb(e.type)}},mp=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Vb(e.type)}},gp=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},up=/(\w+)(\])?(\[|\.)?/g;function Hg(r,t){r.seq.push(t),r.map[t.id]=t}function Hb(r,t,e){let n=r.name,i=n.length;for(up.lastIndex=0;;){let s=up.exec(n),o=up.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Hg(e,c===void 0?new pp(a,r,t):new mp(a,r,t));break}else{let u=e.map[a];u===void 0&&(u=new gp(a),Hg(e,u)),e=u}}}var jo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Hb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function Gg(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Gb=37297,Wb=0;function Xb(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Wg=new te;function qb(r){pe._getMatrix(Wg,pe.workingColorSpace,r);let t=`mat3( ${Wg.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(r)){case Ja:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return Yt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Xg(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+Xb(r.getShaderSource(t),a)}else return s}function Yb(r,t){let e=qb(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Zb={[Vd]:"Linear",[Hd]:"Reinhard",[Gd]:"Cineon",[Xs]:"ACESFilmic",[Xd]:"AgX",[qd]:"Neutral",[Wd]:"Custom"};function $b(r,t){let e=Zb[t];return e===void 0?(Yt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Iu=new N;function Jb(){pe.getLuminanceCoefficients(Iu);let r=Iu.x.toFixed(4),t=Iu.y.toFixed(4),e=Iu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Kb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Il).join(`
`)}function Qb(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function jb(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function Il(r){return r!==""}function qg(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Yg(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var tS=/^[ \t]*#include +<([\w\d./]+)>/gm;function _p(r){return r.replace(tS,nS)}var eS=new Map;function nS(r,t){let e=ie[t];if(e===void 0){let n=eS.get(t);if(n!==void 0)e=ie[n],Yt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return _p(e)}var iS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Zg(r){return r.replace(iS,rS)}function rS(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $g(r){let t=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?t+=`
#define HIGH_PRECISION`:r.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}var sS={[bl]:"SHADOWMAP_TYPE_PCF",[$o]:"SHADOWMAP_TYPE_VSM"};function oS(r){return sS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var aS={[ss]:"ENVMAP_TYPE_CUBE",[qs]:"ENVMAP_TYPE_CUBE",[Sl]:"ENVMAP_TYPE_CUBE_UV"};function lS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":aS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var cS={[qs]:"ENVMAP_MODE_REFRACTION"};function hS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":cS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var uS={[Bh]:"ENVMAP_BLENDING_MULTIPLY",[mg]:"ENVMAP_BLENDING_MIX",[gg]:"ENVMAP_BLENDING_ADD"};function fS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":uS[r.combine]||"ENVMAP_BLENDING_NONE"}function dS(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function pS(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=oS(e),c=lS(e),h=hS(e),u=fS(e),d=dS(e),f=Kb(e),m=Qb(s),g=i.createProgram(),_,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Il).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(Il).join(`
`),p.length>0&&(p+=`
`)):(_=[$g(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Il).join(`
`),p=[$g(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Wi?"#define TONE_MAPPING":"",e.toneMapping!==Wi?ie.tonemapping_pars_fragment:"",e.toneMapping!==Wi?$b("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,Yb("linearToOutputTexel",e.outputColorSpace),Jb(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Il).join(`
`)),o=_p(o),o=qg(o,e),o=Yg(o,e),a=_p(a),a=qg(a,e),a=Yg(a,e),o=Zg(o),a=Zg(a),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,_=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===tp?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===tp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=M+_+o,y=M+p+a,T=Gg(i,i.VERTEX_SHADER,v),w=Gg(i,i.FRAGMENT_SHADER,y);i.attachShader(g,T),i.attachShader(g,w),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function E(P){if(r.debug.checkShaderErrors){let D=i.getProgramInfoLog(g)||"",O=i.getShaderInfoLog(T)||"",k=i.getShaderInfoLog(w)||"",G=D.trim(),V=O.trim(),z=k.trim(),Y=!0,et=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Y=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,w);else{let I=Xg(i,T,"vertex"),rt=Xg(i,w,"fragment");Xt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+G+`
`+I+`
`+rt)}else G!==""?Yt("WebGLProgram: Program Info Log:",G):(V===""||z==="")&&(et=!1);et&&(P.diagnostics={runnable:Y,programLog:G,vertexShader:{log:V,prefix:_},fragmentShader:{log:z,prefix:p}})}i.deleteShader(T),i.deleteShader(w),C=new jo(i,g),x=jb(i,g)}let C;this.getUniforms=function(){return C===void 0&&E(this),C};let x;this.getAttributes=function(){return x===void 0&&E(this),x};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,Gb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Wb++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=w,this}var mS=0,xp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new vp(t),e.set(t,n)),n}},vp=class{constructor(t){this.id=mS++,this.code=t,this.usedTimes=0}};function gS(r,t,e,n,i,s,o){let a=new nl,l=new xp,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,P,D,O){let k=D.fog,G=O.geometry,V=x.isMeshStandardMaterial?D.environment:null,z=(x.isMeshStandardMaterial?e:t).get(x.envMap||V),Y=z&&z.mapping===Sl?z.image.height:null,et=m[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Yt("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let I=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,rt=I!==void 0?I.length:0,Lt=0;G.morphAttributes.position!==void 0&&(Lt=1),G.morphAttributes.normal!==void 0&&(Lt=2),G.morphAttributes.color!==void 0&&(Lt=3);let Bt,zt,$t,$;if(et){let xt=ar[et];Bt=xt.vertexShader,zt=xt.fragmentShader}else Bt=x.vertexShader,zt=x.fragmentShader,l.update(x),$t=l.getVertexShaderID(x),$=l.getFragmentShaderID(x);let Q=r.getRenderTarget(),ut=r.state.buffers.depth.getReversed(),It=O.isInstancedMesh===!0,Mt=O.isBatchedMesh===!0,Gt=!!x.map,ue=!!x.matcap,mt=!!z,Ft=!!x.aoMap,Kt=!!x.lightMap,Ut=!!x.bumpMap,W=!!x.normalMap,F=!!x.displacementMap,xe=!!x.emissiveMap,re=!!x.metalnessMap,Wt=!!x.roughnessMap,St=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,U=x.iridescence>0,J=x.sheen>0,K=x.transmission>0,Z=St&&!!x.anisotropyMap,bt=R&&!!x.clearcoatMap,ot=R&&!!x.clearcoatNormalMap,Et=R&&!!x.clearcoatRoughnessMap,wt=U&&!!x.iridescenceMap,it=U&&!!x.iridescenceThicknessMap,at=J&&!!x.sheenColorMap,Tt=J&&!!x.sheenRoughnessMap,At=!!x.specularMap,lt=!!x.specularColorMap,Zt=!!x.specularIntensityMap,L=K&&!!x.transmissionMap,ft=K&&!!x.thicknessMap,nt=!!x.gradientMap,dt=!!x.alphaMap,tt=x.alphaTest>0,j=!!x.alphaHash,ht=!!x.extensions,kt=Wi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(kt=r.toneMapping);let me={shaderID:et,shaderType:x.type,shaderName:x.name,vertexShader:Bt,fragmentShader:zt,defines:x.defines,customVertexShaderID:$t,customFragmentShaderID:$,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:Mt,batchingColor:Mt&&O._colorsTexture!==null,instancing:It,instancingColor:It&&O.instanceColor!==null,instancingMorph:It&&O.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:ks,alphaToCoverage:!!x.alphaToCoverage,map:Gt,matcap:ue,envMap:mt,envMapMode:mt&&z.mapping,envMapCubeUVHeight:Y,aoMap:Ft,lightMap:Kt,bumpMap:Ut,normalMap:W,displacementMap:F,emissiveMap:xe,normalMapObjectSpace:W&&x.normalMapType===vg,normalMapTangentSpace:W&&x.normalMapType===Au,metalnessMap:re,roughnessMap:Wt,anisotropy:St,anisotropyMap:Z,clearcoat:R,clearcoatMap:bt,clearcoatNormalMap:ot,clearcoatRoughnessMap:Et,dispersion:S,iridescence:U,iridescenceMap:wt,iridescenceThicknessMap:it,sheen:J,sheenColorMap:at,sheenRoughnessMap:Tt,specularMap:At,specularColorMap:lt,specularIntensityMap:Zt,transmission:K,transmissionMap:L,thicknessMap:ft,gradientMap:nt,opaque:x.transparent===!1&&x.blending===Os&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:tt,alphaHash:j,combine:x.combine,mapUv:Gt&&g(x.map.channel),aoMapUv:Ft&&g(x.aoMap.channel),lightMapUv:Kt&&g(x.lightMap.channel),bumpMapUv:Ut&&g(x.bumpMap.channel),normalMapUv:W&&g(x.normalMap.channel),displacementMapUv:F&&g(x.displacementMap.channel),emissiveMapUv:xe&&g(x.emissiveMap.channel),metalnessMapUv:re&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:Z&&g(x.anisotropyMap.channel),clearcoatMapUv:bt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:ot&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Et&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:at&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&g(x.sheenRoughnessMap.channel),specularMapUv:At&&g(x.specularMap.channel),specularColorMapUv:lt&&g(x.specularColorMap.channel),specularIntensityMapUv:Zt&&g(x.specularIntensityMap.channel),transmissionMapUv:L&&g(x.transmissionMap.channel),thicknessMapUv:ft&&g(x.thicknessMap.channel),alphaMapUv:dt&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(W||St),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!G.attributes.uv&&(Gt||dt),fog:!!k,useFog:x.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:ut,skinning:O.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:rt,morphTextureStride:Lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:kt,decodeVideoTexture:Gt&&x.map.isVideoTexture===!0&&pe.getTransfer(x.map.colorSpace)===ye,decodeVideoTextureEmissive:xe&&x.emissiveMap.isVideoTexture===!0&&pe.getTransfer(x.emissiveMap.colorSpace)===ye,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Si,flipSided:x.side===Cn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ht&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ht&&x.extensions.multiDraw===!0||Mt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return me.vertexUv1s=c.has(1),me.vertexUv2s=c.has(2),me.vertexUv3s=c.has(3),c.clear(),me}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(M(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function M(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){let b=m[x.type],P;if(b){let D=ar[b];P=Rg.clone(D.uniforms)}else P=x.uniforms;return P}function T(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new pS(r,b,x,s),h.push(P),u.set(b,P)),P}function w(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function E(x){l.remove(x)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:w,releaseShaderCache:E,programs:h,dispose:C}}function _S(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function xS(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function Jg(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function Kg(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(u,d,f,m,g,_){let p=r[t];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:g,group:_},r[t]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=m,p.renderOrder=u.renderOrder,p.z=g,p.group=_),t++,p}function a(u,d,f,m,g,_){let p=o(u,d,f,m,g,_);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):e.push(p)}function l(u,d,f,m,g,_){let p=o(u,d,f,m,g,_);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):e.unshift(p)}function c(u,d){e.length>1&&e.sort(u||xS),n.length>1&&n.sort(d||Jg),i.length>1&&i.sort(d||Jg)}function h(){for(let u=t,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function vS(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new Kg,r.set(n,[o])):i>=s.length?(o=new Kg,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function yS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new N,color:new ne};break;case"SpotLight":e={position:new N,direction:new N,color:new ne,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new N,color:new ne,distance:0,decay:0};break;case"HemisphereLight":e={direction:new N,skyColor:new ne,groundColor:new ne};break;case"RectAreaLight":e={color:new ne,position:new N,halfWidth:new N,halfHeight:new N};break}return r[t.id]=e,e}}}function MS(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var bS=0;function SS(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function TS(r){let t=new yS,e=MS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new N);let i=new N,s=new Ce,o=new Ce;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,m=0,g=0,_=0,p=0,M=0,v=0,y=0,T=0,w=0,E=0;c.sort(SS);for(let x=0,b=c.length;x<b;x++){let P=c[x],D=P.color,O=P.intensity,k=P.distance,G=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ys?G=P.shadow.map.texture:G=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=D.r*O,u+=D.g*O,d+=D.b*O;else if(P.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(P.sh.coefficients[V],O);E++}else if(P.isDirectionalLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let z=P.shadow,Y=e.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.directionalShadow[f]=Y,n.directionalShadowMap[f]=G,n.directionalShadowMatrix[f]=P.shadow.matrix,M++}n.directional[f]=V,f++}else if(P.isSpotLight){let V=t.get(P);V.position.setFromMatrixPosition(P.matrixWorld),V.color.copy(D).multiplyScalar(O),V.distance=k,V.coneCos=Math.cos(P.angle),V.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),V.decay=P.decay,n.spot[g]=V;let z=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,z.updateMatrices(P),P.castShadow&&w++),n.spotLightMatrix[g]=z.matrix,P.castShadow){let Y=e.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,n.spotShadow[g]=Y,n.spotShadowMap[g]=G,y++}g++}else if(P.isRectAreaLight){let V=t.get(P);V.color.copy(D).multiplyScalar(O),V.halfWidth.set(P.width*.5,0,0),V.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=V,_++}else if(P.isPointLight){let V=t.get(P);if(V.color.copy(P.color).multiplyScalar(P.intensity),V.distance=P.distance,V.decay=P.decay,P.castShadow){let z=P.shadow,Y=e.get(P);Y.shadowIntensity=z.intensity,Y.shadowBias=z.bias,Y.shadowNormalBias=z.normalBias,Y.shadowRadius=z.radius,Y.shadowMapSize=z.mapSize,Y.shadowCameraNear=z.camera.near,Y.shadowCameraFar=z.camera.far,n.pointShadow[m]=Y,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=P.shadow.matrix,v++}n.point[m]=V,m++}else if(P.isHemisphereLight){let V=t.get(P);V.skyColor.copy(P.color).multiplyScalar(O),V.groundColor.copy(P.groundColor).multiplyScalar(O),n.hemi[p]=V,p++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=_t.LTC_FLOAT_1,n.rectAreaLTC2=_t.LTC_FLOAT_2):(n.rectAreaLTC1=_t.LTC_HALF_1,n.rectAreaLTC2=_t.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==m||C.spotLength!==g||C.rectAreaLength!==_||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==v||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==E)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=M,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+T-w,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=w,n.numLightProbes=E,C.directionalLength=f,C.pointLength=m,C.spotLength=g,C.rectAreaLength=_,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=v,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=E,n.version=bS++)}function l(c,h){let u=0,d=0,f=0,m=0,g=0,_=h.matrixWorldInverse;for(let p=0,M=c.length;p<M;p++){let v=c[p];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),u++}else if(v.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),f++}else if(v.isRectAreaLight){let y=n.rectArea[m];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){let y=n.hemi[g];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function Qg(r){let t=new TS(r),e=[],n=[];function i(h){c.camera=h,e.length=0,n.length=0}function s(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function wS(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new Qg(r),t.set(i,[a])):s>=o.length?(a=new Qg(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var ES=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,AS=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,CS=[new N(1,0,0),new N(-1,0,0),new N(0,1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1)],RS=[new N(0,-1,0),new N(0,-1,0),new N(0,0,1),new N(0,0,-1),new N(0,-1,0),new N(0,-1,0)],jg=new Ce,Pl=new N,fp=new N;function PS(r,t,e){let n=new qo,i=new Pt,s=new Pt,o=new We,a=new xh,l=new vh,c={},h=e.maxTextureSize,u={[Er]:Cn,[Cn]:Er,[Si]:Si},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Pt},radius:{value:4}},vertexShader:ES,fragmentShader:AS}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let m=new ke;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Re(m,d),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=bl;let p=this.type;this.render=function(w,E,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||w.length===0)return;w.type===J0&&(Yt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),w.type=bl);let x=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),D=r.state;D.setBlending(rr),D.buffers.depth.getReversed()===!0?D.buffers.color.setClear(0,0,0,0):D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);let O=p!==this.type;O&&E.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=w.length;k<G;k++){let V=w[k],z=V.shadow;if(z===void 0){Yt("WebGLShadowMap:",V,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);let Y=z.getFrameExtents();if(i.multiply(Y),s.copy(z.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Y.x),i.x=s.x*Y.x,z.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Y.y),i.y=s.y*Y.y,z.mapSize.y=s.y)),z.map===null||O===!0){if(z.map!==null&&(z.map.depthTexture!==null&&(z.map.depthTexture.dispose(),z.map.depthTexture=null),z.map.dispose()),this.type===$o){if(V.isPointLight){Yt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}z.map=new yi(i.x,i.y,{format:Ys,type:sr,minFilter:En,magFilter:En,generateMipmaps:!1}),z.map.texture.name=V.name+".shadowMap",z.map.depthTexture=new es(i.x,i.y,Ni),z.map.depthTexture.name=V.name+".shadowMapDepth",z.map.depthTexture.format=er,z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn}else{V.isPointLight?(z.map=new al(i.x),z.map.depthTexture=new lh(i.x,Xi)):(z.map=new yi(i.x,i.y),z.map.depthTexture=new es(i.x,i.y,Xi)),z.map.depthTexture.name=V.name+".shadowMap",z.map.depthTexture.format=er;let I=r.state.buffers.depth.getReversed();this.type===bl?(z.map.depthTexture.compareFunction=I?Ru:Cu,z.map.depthTexture.minFilter=En,z.map.depthTexture.magFilter=En):(z.map.depthTexture.compareFunction=null,z.map.depthTexture.minFilter=yn,z.map.depthTexture.magFilter=yn)}z.camera.updateProjectionMatrix()}let et=z.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<et;I++){if(z.map.isWebGLCubeRenderTarget)r.setRenderTarget(z.map,I),r.clear();else{I===0&&(r.setRenderTarget(z.map),r.clear());let rt=z.getViewport(I);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),D.viewport(o)}if(V.isPointLight){let rt=z.camera,Lt=z.matrix,Bt=V.distance||rt.far;Bt!==rt.far&&(rt.far=Bt,rt.updateProjectionMatrix()),Pl.setFromMatrixPosition(V.matrixWorld),rt.position.copy(Pl),fp.copy(rt.position),fp.add(CS[I]),rt.up.copy(RS[I]),rt.lookAt(fp),rt.updateMatrixWorld(),Lt.makeTranslation(-Pl.x,-Pl.y,-Pl.z),jg.multiplyMatrices(rt.projectionMatrix,rt.matrixWorldInverse),z._frustum.setFromProjectionMatrix(jg,rt.coordinateSystem,rt.reversedDepth)}else z.updateMatrices(V);n=z.getFrustum(),y(E,C,z.camera,V,this.type)}z.isPointLightShadow!==!0&&this.type===$o&&M(z,C),z.needsUpdate=!1}p=this.type,_.needsUpdate=!1,r.setRenderTarget(x,b,P)};function M(w,E){let C=t.update(g);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null&&(w.mapPass=new yi(i.x,i.y,{format:Ys,type:sr})),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value=w.mapSize,d.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(E,null,C,d,g,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value=w.mapSize,f.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(E,null,C,f,g,null)}function v(w,E,C,x){let b=null,P=C.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:a,r.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0||E.alphaToCoverage===!0){let D=b.uuid,O=E.uuid,k=c[D];k===void 0&&(k={},c[D]=k);let G=k[O];G===void 0&&(G=b.clone(),k[O]=G,E.addEventListener("dispose",T)),b=G}if(b.visible=E.visible,b.wireframe=E.wireframe,x===$o?b.side=E.shadowSide!==null?E.shadowSide:E.side:b.side=E.shadowSide!==null?E.shadowSide:u[E.side],b.alphaMap=E.alphaMap,b.alphaTest=E.alphaToCoverage===!0?.5:E.alphaTest,b.map=E.map,b.clipShadows=E.clipShadows,b.clippingPlanes=E.clippingPlanes,b.clipIntersection=E.clipIntersection,b.displacementMap=E.displacementMap,b.displacementScale=E.displacementScale,b.displacementBias=E.displacementBias,b.wireframeLinewidth=E.wireframeLinewidth,b.linewidth=E.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let D=r.properties.get(b);D.light=C}return b}function y(w,E,C,x,b){if(w.visible===!1)return;if(w.layers.test(E.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&b===$o)&&(!w.frustumCulled||n.intersectsObject(w))){w.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,w.matrixWorld);let O=t.update(w),k=w.material;if(Array.isArray(k)){let G=O.groups;for(let V=0,z=G.length;V<z;V++){let Y=G[V],et=k[Y.materialIndex];if(et&&et.visible){let I=v(w,et,x,b);w.onBeforeShadow(r,w,E,C,O,I,Y),r.renderBufferDirect(C,null,O,I,w,Y),w.onAfterShadow(r,w,E,C,O,I,Y)}}}else if(k.visible){let G=v(w,k,x,b);w.onBeforeShadow(r,w,E,C,O,G,null),r.renderBufferDirect(C,null,O,G,w,null),w.onAfterShadow(r,w,E,C,O,G,null)}}let D=w.children;for(let O=0,k=D.length;O<k;O++)y(D[O],E,C,x,b)}function T(w){w.target.removeEventListener("dispose",T);for(let C in c){let x=c[C],b=w.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}var IS={[Ih]:Dh,[Lh]:Uh,[Nh]:Oh,[Bs]:Fh,[Dh]:Ih,[Uh]:Lh,[Oh]:Nh,[Fh]:Bs};function DS(r,t){function e(){let L=!1,ft=new We,nt=null,dt=new We(0,0,0,0);return{setMask:function(tt){nt!==tt&&!L&&(r.colorMask(tt,tt,tt,tt),nt=tt)},setLocked:function(tt){L=tt},setClear:function(tt,j,ht,kt,me){me===!0&&(tt*=kt,j*=kt,ht*=kt),ft.set(tt,j,ht,kt),dt.equals(ft)===!1&&(r.clearColor(tt,j,ht,kt),dt.copy(ft))},reset:function(){L=!1,nt=null,dt.set(-1,0,0,0)}}}function n(){let L=!1,ft=!1,nt=null,dt=null,tt=null;return{setReversed:function(j){if(ft!==j){let ht=t.get("EXT_clip_control");j?ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.ZERO_TO_ONE_EXT):ht.clipControlEXT(ht.LOWER_LEFT_EXT,ht.NEGATIVE_ONE_TO_ONE_EXT),ft=j;let kt=tt;tt=null,this.setClear(kt)}},getReversed:function(){return ft},setTest:function(j){j?Q(r.DEPTH_TEST):ut(r.DEPTH_TEST)},setMask:function(j){nt!==j&&!L&&(r.depthMask(j),nt=j)},setFunc:function(j){if(ft&&(j=IS[j]),dt!==j){switch(j){case Ih:r.depthFunc(r.NEVER);break;case Dh:r.depthFunc(r.ALWAYS);break;case Lh:r.depthFunc(r.LESS);break;case Bs:r.depthFunc(r.LEQUAL);break;case Nh:r.depthFunc(r.EQUAL);break;case Fh:r.depthFunc(r.GEQUAL);break;case Uh:r.depthFunc(r.GREATER);break;case Oh:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}dt=j}},setLocked:function(j){L=j},setClear:function(j){tt!==j&&(ft&&(j=1-j),r.clearDepth(j),tt=j)},reset:function(){L=!1,nt=null,dt=null,tt=null,ft=!1}}}function i(){let L=!1,ft=null,nt=null,dt=null,tt=null,j=null,ht=null,kt=null,me=null;return{setTest:function(xt){L||(xt?Q(r.STENCIL_TEST):ut(r.STENCIL_TEST))},setMask:function(xt){ft!==xt&&!L&&(r.stencilMask(xt),ft=xt)},setFunc:function(xt,Dt,ee){(nt!==xt||dt!==Dt||tt!==ee)&&(r.stencilFunc(xt,Dt,ee),nt=xt,dt=Dt,tt=ee)},setOp:function(xt,Dt,ee){(j!==xt||ht!==Dt||kt!==ee)&&(r.stencilOp(xt,Dt,ee),j=xt,ht=Dt,kt=ee)},setLocked:function(xt){L=xt},setClear:function(xt){me!==xt&&(r.clearStencil(xt),me=xt)},reset:function(){L=!1,ft=null,nt=null,dt=null,tt=null,j=null,ht=null,kt=null,me=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,M=null,v=null,y=null,T=null,w=null,E=new ne(0,0,0),C=0,x=!1,b=null,P=null,D=null,O=null,k=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,z=0,Y=r.getParameter(r.VERSION);Y.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(Y)[1]),V=z>=1):Y.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(Y)[1]),V=z>=2);let et=null,I={},rt=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Bt=new We().fromArray(rt),zt=new We().fromArray(Lt);function $t(L,ft,nt,dt){let tt=new Uint8Array(4),j=r.createTexture();r.bindTexture(L,j),r.texParameteri(L,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(L,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ht=0;ht<nt;ht++)L===r.TEXTURE_3D||L===r.TEXTURE_2D_ARRAY?r.texImage3D(ft,0,r.RGBA,1,1,dt,0,r.RGBA,r.UNSIGNED_BYTE,tt):r.texImage2D(ft+ht,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,tt);return j}let $={};$[r.TEXTURE_2D]=$t(r.TEXTURE_2D,r.TEXTURE_2D,1),$[r.TEXTURE_CUBE_MAP]=$t(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),$[r.TEXTURE_2D_ARRAY]=$t(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),$[r.TEXTURE_3D]=$t(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(Bs),Ut(!1),W(Od),Q(r.CULL_FACE),Ft(rr);function Q(L){h[L]!==!0&&(r.enable(L),h[L]=!0)}function ut(L){h[L]!==!1&&(r.disable(L),h[L]=!1)}function It(L,ft){return u[L]!==ft?(r.bindFramebuffer(L,ft),u[L]=ft,L===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=ft),L===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=ft),!0):!1}function Mt(L,ft){let nt=f,dt=!1;if(L){nt=d.get(ft),nt===void 0&&(nt=[],d.set(ft,nt));let tt=L.textures;if(nt.length!==tt.length||nt[0]!==r.COLOR_ATTACHMENT0){for(let j=0,ht=tt.length;j<ht;j++)nt[j]=r.COLOR_ATTACHMENT0+j;nt.length=tt.length,dt=!0}}else nt[0]!==r.BACK&&(nt[0]=r.BACK,dt=!0);dt&&r.drawBuffers(nt)}function Gt(L){return m!==L?(r.useProgram(L),m=L,!0):!1}let ue={[Qr]:r.FUNC_ADD,[Q0]:r.FUNC_SUBTRACT,[j0]:r.FUNC_REVERSE_SUBTRACT};ue[tg]=r.MIN,ue[eg]=r.MAX;let mt={[ng]:r.ZERO,[ig]:r.ONE,[rg]:r.SRC_COLOR,[Jc]:r.SRC_ALPHA,[hg]:r.SRC_ALPHA_SATURATE,[lg]:r.DST_COLOR,[og]:r.DST_ALPHA,[sg]:r.ONE_MINUS_SRC_COLOR,[Kc]:r.ONE_MINUS_SRC_ALPHA,[cg]:r.ONE_MINUS_DST_COLOR,[ag]:r.ONE_MINUS_DST_ALPHA,[ug]:r.CONSTANT_COLOR,[fg]:r.ONE_MINUS_CONSTANT_COLOR,[dg]:r.CONSTANT_ALPHA,[pg]:r.ONE_MINUS_CONSTANT_ALPHA};function Ft(L,ft,nt,dt,tt,j,ht,kt,me,xt){if(L===rr){g===!0&&(ut(r.BLEND),g=!1);return}if(g===!1&&(Q(r.BLEND),g=!0),L!==K0){if(L!==_||xt!==x){if((p!==Qr||y!==Qr)&&(r.blendEquation(r.FUNC_ADD),p=Qr,y=Qr),xt)switch(L){case Os:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bd:r.blendFunc(r.ONE,r.ONE);break;case kd:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case zd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Xt("WebGLState: Invalid blending: ",L);break}else switch(L){case Os:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Bd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case kd:Xt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case zd:Xt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Xt("WebGLState: Invalid blending: ",L);break}M=null,v=null,T=null,w=null,E.set(0,0,0),C=0,_=L,x=xt}return}tt=tt||ft,j=j||nt,ht=ht||dt,(ft!==p||tt!==y)&&(r.blendEquationSeparate(ue[ft],ue[tt]),p=ft,y=tt),(nt!==M||dt!==v||j!==T||ht!==w)&&(r.blendFuncSeparate(mt[nt],mt[dt],mt[j],mt[ht]),M=nt,v=dt,T=j,w=ht),(kt.equals(E)===!1||me!==C)&&(r.blendColor(kt.r,kt.g,kt.b,me),E.copy(kt),C=me),_=L,x=!1}function Kt(L,ft){L.side===Si?ut(r.CULL_FACE):Q(r.CULL_FACE);let nt=L.side===Cn;ft&&(nt=!nt),Ut(nt),L.blending===Os&&L.transparent===!1?Ft(rr):Ft(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),s.setMask(L.colorWrite);let dt=L.stencilWrite;a.setTest(dt),dt&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),xe(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):ut(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(L){b!==L&&(L?r.frontFace(r.CW):r.frontFace(r.CCW),b=L)}function W(L){L!==Z0?(Q(r.CULL_FACE),L!==P&&(L===Od?r.cullFace(r.BACK):L===$0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ut(r.CULL_FACE),P=L}function F(L){L!==D&&(V&&r.lineWidth(L),D=L)}function xe(L,ft,nt){L?(Q(r.POLYGON_OFFSET_FILL),(O!==ft||k!==nt)&&(r.polygonOffset(ft,nt),O=ft,k=nt)):ut(r.POLYGON_OFFSET_FILL)}function re(L){L?Q(r.SCISSOR_TEST):ut(r.SCISSOR_TEST)}function Wt(L){L===void 0&&(L=r.TEXTURE0+G-1),et!==L&&(r.activeTexture(L),et=L)}function St(L,ft,nt){nt===void 0&&(et===null?nt=r.TEXTURE0+G-1:nt=et);let dt=I[nt];dt===void 0&&(dt={type:void 0,texture:void 0},I[nt]=dt),(dt.type!==L||dt.texture!==ft)&&(et!==nt&&(r.activeTexture(nt),et=nt),r.bindTexture(L,ft||$[L]),dt.type=L,dt.texture=ft)}function R(){let L=I[et];L!==void 0&&L.type!==void 0&&(r.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function J(){try{r.texSubImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function K(){try{r.texSubImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function Z(){try{r.compressedTexSubImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function bt(){try{r.compressedTexSubImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function ot(){try{r.texStorage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function Et(){try{r.texStorage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function wt(){try{r.texImage2D(...arguments)}catch(L){Xt("WebGLState:",L)}}function it(){try{r.texImage3D(...arguments)}catch(L){Xt("WebGLState:",L)}}function at(L){Bt.equals(L)===!1&&(r.scissor(L.x,L.y,L.z,L.w),Bt.copy(L))}function Tt(L){zt.equals(L)===!1&&(r.viewport(L.x,L.y,L.z,L.w),zt.copy(L))}function At(L,ft){let nt=c.get(ft);nt===void 0&&(nt=new WeakMap,c.set(ft,nt));let dt=nt.get(L);dt===void 0&&(dt=r.getUniformBlockIndex(ft,L.name),nt.set(L,dt))}function lt(L,ft){let dt=c.get(ft).get(L);l.get(ft)!==dt&&(r.uniformBlockBinding(ft,dt,L.__bindingPointIndex),l.set(ft,dt))}function Zt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},et=null,I={},u={},d=new WeakMap,f=[],m=null,g=!1,_=null,p=null,M=null,v=null,y=null,T=null,w=null,E=new ne(0,0,0),C=0,x=!1,b=null,P=null,D=null,O=null,k=null,Bt.set(0,0,r.canvas.width,r.canvas.height),zt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:ut,bindFramebuffer:It,drawBuffers:Mt,useProgram:Gt,setBlending:Ft,setMaterial:Kt,setFlipSided:Ut,setCullFace:W,setLineWidth:F,setPolygonOffset:xe,setScissorTest:re,activeTexture:Wt,bindTexture:St,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:wt,texImage3D:it,updateUBOMapping:At,uniformBlockBinding:lt,texStorage2D:ot,texStorage3D:Et,texSubImage2D:J,texSubImage3D:K,compressedTexSubImage2D:Z,compressedTexSubImage3D:bt,scissor:at,viewport:Tt,reset:Zt}}function LS(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Pt,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(R,S){return f?new OffscreenCanvas(R,S):Qa("canvas")}function g(R,S,U){let J=1,K=St(R);if((K.width>U||K.height>U)&&(J=U/Math.max(K.width,K.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Z=Math.floor(J*K.width),bt=Math.floor(J*K.height);u===void 0&&(u=m(Z,bt));let ot=S?m(Z,bt):u;return ot.width=Z,ot.height=bt,ot.getContext("2d").drawImage(R,0,0,Z,bt),Yt("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Z+"x"+bt+")."),ot}else return"data"in R&&Yt("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function _(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function M(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(R,S,U,J,K=!1){if(R!==null){if(r[R]!==void 0)return r[R];Yt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z=S;if(S===r.RED&&(U===r.FLOAT&&(Z=r.R32F),U===r.HALF_FLOAT&&(Z=r.R16F),U===r.UNSIGNED_BYTE&&(Z=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.R8UI),U===r.UNSIGNED_SHORT&&(Z=r.R16UI),U===r.UNSIGNED_INT&&(Z=r.R32UI),U===r.BYTE&&(Z=r.R8I),U===r.SHORT&&(Z=r.R16I),U===r.INT&&(Z=r.R32I)),S===r.RG&&(U===r.FLOAT&&(Z=r.RG32F),U===r.HALF_FLOAT&&(Z=r.RG16F),U===r.UNSIGNED_BYTE&&(Z=r.RG8)),S===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RG8UI),U===r.UNSIGNED_SHORT&&(Z=r.RG16UI),U===r.UNSIGNED_INT&&(Z=r.RG32UI),U===r.BYTE&&(Z=r.RG8I),U===r.SHORT&&(Z=r.RG16I),U===r.INT&&(Z=r.RG32I)),S===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Z=r.RGB16UI),U===r.UNSIGNED_INT&&(Z=r.RGB32UI),U===r.BYTE&&(Z=r.RGB8I),U===r.SHORT&&(Z=r.RGB16I),U===r.INT&&(Z=r.RGB32I)),S===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Z=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Z=r.RGBA16UI),U===r.UNSIGNED_INT&&(Z=r.RGBA32UI),U===r.BYTE&&(Z=r.RGBA8I),U===r.SHORT&&(Z=r.RGBA16I),U===r.INT&&(Z=r.RGBA32I)),S===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Z=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Z=r.R11F_G11F_B10F)),S===r.RGBA){let bt=K?Ja:pe.getTransfer(J);U===r.FLOAT&&(Z=r.RGBA32F),U===r.HALF_FLOAT&&(Z=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Z=bt===ye?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Z=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Z=r.RGB5_A1)}return(Z===r.R16F||Z===r.R32F||Z===r.RG16F||Z===r.RG32F||Z===r.RGBA16F||Z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function y(R,S){let U;return R?S===null||S===Xi||S===Ko?U=r.DEPTH24_STENCIL8:S===Ni?U=r.DEPTH32F_STENCIL8:S===Jo&&(U=r.DEPTH24_STENCIL8,Yt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Xi||S===Ko?U=r.DEPTH_COMPONENT24:S===Ni?U=r.DEPTH_COMPONENT32F:S===Jo&&(U=r.DEPTH_COMPONENT16),U}function T(R,S){return _(R)===!0||R.isFramebufferTexture&&R.minFilter!==yn&&R.minFilter!==En?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function w(R){let S=R.target;S.removeEventListener("dispose",w),C(S),S.isVideoTexture&&h.delete(S)}function E(R){let S=R.target;S.removeEventListener("dispose",E),b(S)}function C(R){let S=n.get(R);if(S.__webglInit===void 0)return;let U=R.source,J=d.get(U);if(J){let K=J[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(R),Object.keys(J).length===0&&d.delete(U)}n.remove(R)}function x(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let U=R.source,J=d.get(U);delete J[S.__cacheKey],o.memory.textures--}function b(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let K=0;K<S.__webglFramebuffer[J].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[J][K]);else r.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)r.deleteFramebuffer(S.__webglFramebuffer[J]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=R.textures;for(let J=0,K=U.length;J<K;J++){let Z=n.get(U[J]);Z.__webglTexture&&(r.deleteTexture(Z.__webglTexture),o.memory.textures--),n.remove(U[J])}n.remove(R)}let P=0;function D(){P=0}function O(){let R=P;return R>=i.maxTextures&&Yt("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function k(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function G(R,S){let U=n.get(R);if(R.isVideoTexture&&re(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let J=R.image;if(J===null)Yt("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)Yt("WebGLRenderer: Texture marked for update but image is incomplete");else{$(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}function V(R,S){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,S);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)}function z(R,S){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){$(U,R,S);return}e.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)}function Y(R,S){let U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Q(U,R,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)}let et={[Qc]:r.REPEAT,[tr]:r.CLAMP_TO_EDGE,[jc]:r.MIRRORED_REPEAT},I={[yn]:r.NEAREST,[_g]:r.NEAREST_MIPMAP_NEAREST,[Tl]:r.NEAREST_MIPMAP_LINEAR,[En]:r.LINEAR,[Vh]:r.LINEAR_MIPMAP_NEAREST,[os]:r.LINEAR_MIPMAP_LINEAR},rt={[yg]:r.NEVER,[wg]:r.ALWAYS,[Mg]:r.LESS,[Cu]:r.LEQUAL,[bg]:r.EQUAL,[Ru]:r.GEQUAL,[Sg]:r.GREATER,[Tg]:r.NOTEQUAL};function Lt(R,S){if(S.type===Ni&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===En||S.magFilter===Vh||S.magFilter===Tl||S.magFilter===os||S.minFilter===En||S.minFilter===Vh||S.minFilter===Tl||S.minFilter===os)&&Yt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,et[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,et[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,et[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,rt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===yn||S.minFilter!==Tl&&S.minFilter!==os||S.type===Ni&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let U=t.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Bt(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",w));let J=S.source,K=d.get(J);K===void 0&&(K={},d.set(J,K));let Z=k(S);if(Z!==R.__cacheKey){K[Z]===void 0&&(K[Z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[Z].usedTimes++;let bt=K[R.__cacheKey];bt!==void 0&&(K[R.__cacheKey].usedTimes--,bt.usedTimes===0&&x(S)),R.__cacheKey=Z,R.__webglTexture=K[Z].texture}return U}function zt(R,S,U){return Math.floor(Math.floor(R/U)/S)}function $t(R,S,U,J){let Z=R.updateRanges;if(Z.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,U,J,S.data);else{Z.sort((it,at)=>it.start-at.start);let bt=0;for(let it=1;it<Z.length;it++){let at=Z[bt],Tt=Z[it],At=at.start+at.count,lt=zt(Tt.start,S.width,4),Zt=zt(at.start,S.width,4);Tt.start<=At+1&&lt===Zt&&zt(Tt.start+Tt.count-1,S.width,4)===lt?at.count=Math.max(at.count,Tt.start+Tt.count-at.start):(++bt,Z[bt]=Tt)}Z.length=bt+1;let ot=r.getParameter(r.UNPACK_ROW_LENGTH),Et=r.getParameter(r.UNPACK_SKIP_PIXELS),wt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let it=0,at=Z.length;it<at;it++){let Tt=Z[it],At=Math.floor(Tt.start/4),lt=Math.ceil(Tt.count/4),Zt=At%S.width,L=Math.floor(At/S.width),ft=lt,nt=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Zt),r.pixelStorei(r.UNPACK_SKIP_ROWS,L),e.texSubImage2D(r.TEXTURE_2D,0,Zt,L,ft,nt,U,J,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,ot),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Et),r.pixelStorei(r.UNPACK_SKIP_ROWS,wt)}}function $(R,S,U){let J=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=r.TEXTURE_3D);let K=Bt(R,S),Z=S.source;e.bindTexture(J,R.__webglTexture,r.TEXTURE0+U);let bt=n.get(Z);if(Z.version!==bt.__version||K===!0){e.activeTexture(r.TEXTURE0+U);let ot=pe.getPrimaries(pe.workingColorSpace),Et=S.colorSpace===Dr?null:pe.getPrimaries(S.colorSpace),wt=S.colorSpace===Dr||ot===Et?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,wt);let it=g(S.image,!1,i.maxTextureSize);it=Wt(S,it);let at=s.convert(S.format,S.colorSpace),Tt=s.convert(S.type),At=v(S.internalFormat,at,Tt,S.colorSpace,S.isVideoTexture);Lt(J,S);let lt,Zt=S.mipmaps,L=S.isVideoTexture!==!0,ft=bt.__version===void 0||K===!0,nt=Z.dataReady,dt=T(S,it);if(S.isDepthTexture)At=y(S.format===as,S.type),ft&&(L?e.texStorage2D(r.TEXTURE_2D,1,At,it.width,it.height):e.texImage2D(r.TEXTURE_2D,0,At,it.width,it.height,0,at,Tt,null));else if(S.isDataTexture)if(Zt.length>0){L&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,At,Zt[0].width,Zt[0].height);for(let tt=0,j=Zt.length;tt<j;tt++)lt=Zt[tt],L?nt&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,at,Tt,lt.data):e.texImage2D(r.TEXTURE_2D,tt,At,lt.width,lt.height,0,at,Tt,lt.data);S.generateMipmaps=!1}else L?(ft&&e.texStorage2D(r.TEXTURE_2D,dt,At,it.width,it.height),nt&&$t(S,it,at,Tt)):e.texImage2D(r.TEXTURE_2D,0,At,it.width,it.height,0,at,Tt,it.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){L&&ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,At,Zt[0].width,Zt[0].height,it.depth);for(let tt=0,j=Zt.length;tt<j;tt++)if(lt=Zt[tt],S.format!==Fi)if(at!==null)if(L){if(nt)if(S.layerUpdates.size>0){let ht=op(lt.width,lt.height,S.format,S.type);for(let kt of S.layerUpdates){let me=lt.data.subarray(kt*ht/lt.data.BYTES_PER_ELEMENT,(kt+1)*ht/lt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,kt,lt.width,lt.height,1,at,me)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,it.depth,at,lt.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,tt,At,lt.width,lt.height,it.depth,0,lt.data,0,0);else Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else L?nt&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,tt,0,0,0,lt.width,lt.height,it.depth,at,Tt,lt.data):e.texImage3D(r.TEXTURE_2D_ARRAY,tt,At,lt.width,lt.height,it.depth,0,at,Tt,lt.data)}else{L&&ft&&e.texStorage2D(r.TEXTURE_2D,dt,At,Zt[0].width,Zt[0].height);for(let tt=0,j=Zt.length;tt<j;tt++)lt=Zt[tt],S.format!==Fi?at!==null?L?nt&&e.compressedTexSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,at,lt.data):e.compressedTexImage2D(r.TEXTURE_2D,tt,At,lt.width,lt.height,0,lt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):L?nt&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,lt.width,lt.height,at,Tt,lt.data):e.texImage2D(r.TEXTURE_2D,tt,At,lt.width,lt.height,0,at,Tt,lt.data)}else if(S.isDataArrayTexture)if(L){if(ft&&e.texStorage3D(r.TEXTURE_2D_ARRAY,dt,At,it.width,it.height,it.depth),nt)if(S.layerUpdates.size>0){let tt=op(it.width,it.height,S.format,S.type);for(let j of S.layerUpdates){let ht=it.data.subarray(j*tt/it.data.BYTES_PER_ELEMENT,(j+1)*tt/it.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,it.width,it.height,1,at,Tt,ht)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,it.width,it.height,it.depth,at,Tt,it.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,At,it.width,it.height,it.depth,0,at,Tt,it.data);else if(S.isData3DTexture)L?(ft&&e.texStorage3D(r.TEXTURE_3D,dt,At,it.width,it.height,it.depth),nt&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,it.width,it.height,it.depth,at,Tt,it.data)):e.texImage3D(r.TEXTURE_3D,0,At,it.width,it.height,it.depth,0,at,Tt,it.data);else if(S.isFramebufferTexture){if(ft)if(L)e.texStorage2D(r.TEXTURE_2D,dt,At,it.width,it.height);else{let tt=it.width,j=it.height;for(let ht=0;ht<dt;ht++)e.texImage2D(r.TEXTURE_2D,ht,At,tt,j,0,at,Tt,null),tt>>=1,j>>=1}}else if(Zt.length>0){if(L&&ft){let tt=St(Zt[0]);e.texStorage2D(r.TEXTURE_2D,dt,At,tt.width,tt.height)}for(let tt=0,j=Zt.length;tt<j;tt++)lt=Zt[tt],L?nt&&e.texSubImage2D(r.TEXTURE_2D,tt,0,0,at,Tt,lt):e.texImage2D(r.TEXTURE_2D,tt,At,at,Tt,lt);S.generateMipmaps=!1}else if(L){if(ft){let tt=St(it);e.texStorage2D(r.TEXTURE_2D,dt,At,tt.width,tt.height)}nt&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,at,Tt,it)}else e.texImage2D(r.TEXTURE_2D,0,At,at,Tt,it);_(S)&&p(J),bt.__version=Z.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,U){if(S.image.length!==6)return;let J=Bt(R,S),K=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);let Z=n.get(K);if(K.version!==Z.__version||J===!0){e.activeTexture(r.TEXTURE0+U);let bt=pe.getPrimaries(pe.workingColorSpace),ot=S.colorSpace===Dr?null:pe.getPrimaries(S.colorSpace),Et=S.colorSpace===Dr||bt===ot?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Et);let wt=S.isCompressedTexture||S.image[0].isCompressedTexture,it=S.image[0]&&S.image[0].isDataTexture,at=[];for(let j=0;j<6;j++)!wt&&!it?at[j]=g(S.image[j],!0,i.maxCubemapSize):at[j]=it?S.image[j].image:S.image[j],at[j]=Wt(S,at[j]);let Tt=at[0],At=s.convert(S.format,S.colorSpace),lt=s.convert(S.type),Zt=v(S.internalFormat,At,lt,S.colorSpace),L=S.isVideoTexture!==!0,ft=Z.__version===void 0||J===!0,nt=K.dataReady,dt=T(S,Tt);Lt(r.TEXTURE_CUBE_MAP,S);let tt;if(wt){L&&ft&&e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Zt,Tt.width,Tt.height);for(let j=0;j<6;j++){tt=at[j].mipmaps;for(let ht=0;ht<tt.length;ht++){let kt=tt[ht];S.format!==Fi?At!==null?L?nt&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,kt.width,kt.height,At,kt.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Zt,kt.width,kt.height,0,kt.data):Yt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):L?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,0,0,kt.width,kt.height,At,lt,kt.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht,Zt,kt.width,kt.height,0,At,lt,kt.data)}}}else{if(tt=S.mipmaps,L&&ft){tt.length>0&&dt++;let j=St(at[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,dt,Zt,j.width,j.height)}for(let j=0;j<6;j++)if(it){L?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,at[j].width,at[j].height,At,lt,at[j].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Zt,at[j].width,at[j].height,0,At,lt,at[j].data);for(let ht=0;ht<tt.length;ht++){let me=tt[ht].image[j].image;L?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,me.width,me.height,At,lt,me.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Zt,me.width,me.height,0,At,lt,me.data)}}else{L?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,At,lt,at[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,Zt,At,lt,at[j]);for(let ht=0;ht<tt.length;ht++){let kt=tt[ht];L?nt&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,0,0,At,lt,kt.image[j]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ht+1,Zt,At,lt,kt.image[j])}}}_(S)&&p(r.TEXTURE_CUBE_MAP),Z.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function ut(R,S,U,J,K,Z){let bt=s.convert(U.format,U.colorSpace),ot=s.convert(U.type),Et=v(U.internalFormat,bt,ot,U.colorSpace),wt=n.get(S),it=n.get(U);if(it.__renderTarget=S,!wt.__hasExternalTextures){let at=Math.max(1,S.width>>Z),Tt=Math.max(1,S.height>>Z);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?e.texImage3D(K,Z,Et,at,Tt,S.depth,0,bt,ot,null):e.texImage2D(K,Z,Et,at,Tt,0,bt,ot,null)}e.bindFramebuffer(r.FRAMEBUFFER,R),xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,J,K,it.__webglTexture,0,F(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,J,K,it.__webglTexture,Z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function It(R,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let J=S.depthTexture,K=J&&J.isDepthTexture?J.type:null,Z=y(S.stencilBuffer,K),bt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;xe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(S),Z,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(S),Z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,bt,r.RENDERBUFFER,R)}else{let J=S.textures;for(let K=0;K<J.length;K++){let Z=J[K],bt=s.convert(Z.format,Z.colorSpace),ot=s.convert(Z.type),Et=v(Z.internalFormat,bt,ot,Z.colorSpace);xe(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(S),Et,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(S),Et,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Et,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Mt(R,S,U){let J=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),J){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",w)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,S.depthTexture);let wt=s.convert(S.depthTexture.format),it=s.convert(S.depthTexture.type),at;S.depthTexture.format===er?at=r.DEPTH_COMPONENT24:S.depthTexture.format===as&&(at=r.DEPTH24_STENCIL8);for(let Tt=0;Tt<6;Tt++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Tt,0,at,S.width,S.height,0,wt,it,null)}}else G(S.depthTexture,0);let Z=K.__webglTexture,bt=F(S),ot=J?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,Et=S.depthTexture.format===as?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===er)xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,ot,Z,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,Et,ot,Z,0);else if(S.depthTexture.format===as)xe(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Et,ot,Z,0,bt):r.framebufferTexture2D(r.FRAMEBUFFER,Et,ot,Z,0);else throw new Error("Unknown depthTexture format")}function Gt(R){let S=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",K)};J.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=J}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let J=0;J<6;J++)Mt(S.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?Mt(S.__webglFramebuffer[0],R,0):Mt(S.__webglFramebuffer,R,0)}else if(U){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=r.createRenderbuffer(),It(S.__webglDepthbuffer[J],R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),It(S.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Z),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Z)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function ue(R,S,U){let J=n.get(R);S!==void 0&&ut(J.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Gt(R)}function mt(R){let S=R.texture,U=n.get(R),J=n.get(S);R.addEventListener("dispose",E);let K=R.textures,Z=R.isWebGLCubeRenderTarget===!0,bt=K.length>1;if(bt||(J.__webglTexture===void 0&&(J.__webglTexture=r.createTexture()),J.__version=S.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[ot]=[];for(let Et=0;Et<S.mipmaps.length;Et++)U.__webglFramebuffer[ot][Et]=r.createFramebuffer()}else U.__webglFramebuffer[ot]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let ot=0;ot<S.mipmaps.length;ot++)U.__webglFramebuffer[ot]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(bt)for(let ot=0,Et=K.length;ot<Et;ot++){let wt=n.get(K[ot]);wt.__webglTexture===void 0&&(wt.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&xe(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let ot=0;ot<K.length;ot++){let Et=K[ot];U.__webglColorRenderbuffer[ot]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[ot]);let wt=s.convert(Et.format,Et.colorSpace),it=s.convert(Et.type),at=v(Et.internalFormat,wt,it,Et.colorSpace,R.isXRRenderTarget===!0),Tt=F(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Tt,at,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+ot,r.RENDERBUFFER,U.__webglColorRenderbuffer[ot])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),It(U.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Z){e.bindTexture(r.TEXTURE_CUBE_MAP,J.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,S);for(let ot=0;ot<6;ot++)if(S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ut(U.__webglFramebuffer[ot][Et],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,Et);else ut(U.__webglFramebuffer[ot],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);_(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(bt){for(let ot=0,Et=K.length;ot<Et;ot++){let wt=K[ot],it=n.get(wt),at=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(at=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(at,it.__webglTexture),Lt(at,wt),ut(U.__webglFramebuffer,R,wt,r.COLOR_ATTACHMENT0+ot,at,0),_(wt)&&p(at)}e.unbindTexture()}else{let ot=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ot=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),Lt(ot,S),S.mipmaps&&S.mipmaps.length>0)for(let Et=0;Et<S.mipmaps.length;Et++)ut(U.__webglFramebuffer[Et],R,S,r.COLOR_ATTACHMENT0,ot,Et);else ut(U.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,ot,0);_(S)&&p(ot),e.unbindTexture()}R.depthBuffer&&Gt(R)}function Ft(R){let S=R.textures;for(let U=0,J=S.length;U<J;U++){let K=S[U];if(_(K)){let Z=M(R),bt=n.get(K).__webglTexture;e.bindTexture(Z,bt),p(Z),e.unbindTexture()}}}let Kt=[],Ut=[];function W(R){if(R.samples>0){if(xe(R)===!1){let S=R.textures,U=R.width,J=R.height,K=r.COLOR_BUFFER_BIT,Z=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,bt=n.get(R),ot=S.length>1;if(ot)for(let wt=0;wt<S.length;wt++)e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,bt.__webglMultisampledFramebuffer);let Et=R.texture.mipmaps;Et&&Et.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglFramebuffer);for(let wt=0;wt<S.length;wt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),ot){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let it=n.get(S[wt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,it,0)}r.blitFramebuffer(0,0,U,J,0,0,U,J,K,r.NEAREST),l===!0&&(Kt.length=0,Ut.length=0,Kt.push(r.COLOR_ATTACHMENT0+wt),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Kt.push(Z),Ut.push(Z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Kt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),ot)for(let wt=0;wt<S.length;wt++){e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.RENDERBUFFER,bt.__webglColorRenderbuffer[wt]);let it=n.get(S[wt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,bt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+wt,r.TEXTURE_2D,it,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,bt.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function F(R){return Math.min(i.maxSamples,R.samples)}function xe(R){let S=n.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function re(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Wt(R,S){let U=R.colorSpace,J=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==ks&&U!==Dr&&(pe.getTransfer(U)===ye?(J!==Fi||K!==oi)&&Yt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Xt("WebGLTextures: Unsupported texture color space:",U)),S}function St(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=D,this.setTexture2D=G,this.setTexture2DArray=V,this.setTexture3D=z,this.setTextureCube=Y,this.rebindTextures=ue,this.setupRenderTarget=mt,this.updateRenderTargetMipmap=Ft,this.updateMultisampleRenderTarget=W,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=xe,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function NS(r,t){function e(n,i=Dr){let s,o=pe.getTransfer(i);if(n===oi)return r.UNSIGNED_BYTE;if(n===Gh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Wh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Jd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Kd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Zd)return r.BYTE;if(n===$d)return r.SHORT;if(n===Jo)return r.UNSIGNED_SHORT;if(n===Hh)return r.INT;if(n===Xi)return r.UNSIGNED_INT;if(n===Ni)return r.FLOAT;if(n===sr)return r.HALF_FLOAT;if(n===Qd)return r.ALPHA;if(n===jd)return r.RGB;if(n===Fi)return r.RGBA;if(n===er)return r.DEPTH_COMPONENT;if(n===as)return r.DEPTH_STENCIL;if(n===Xh)return r.RED;if(n===qh)return r.RED_INTEGER;if(n===Ys)return r.RG;if(n===Yh)return r.RG_INTEGER;if(n===Zh)return r.RGBA_INTEGER;if(n===wl||n===El||n===Al||n===Cl)if(o===ye)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Al)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Cl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Al)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Cl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===$h||n===Jh||n===Kh||n===Qh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===$h)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Jh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Kh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===jh||n===tu||n===eu||n===nu||n===iu||n===ru||n===su)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===jh||n===tu)return o===ye?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===eu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===nu)return s.COMPRESSED_R11_EAC;if(n===iu)return s.COMPRESSED_SIGNED_R11_EAC;if(n===ru)return s.COMPRESSED_RG11_EAC;if(n===su)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ou||n===au||n===lu||n===cu||n===hu||n===uu||n===fu||n===du||n===pu||n===mu||n===gu||n===_u||n===xu||n===vu)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ou)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===au)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===lu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===cu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===hu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===uu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===fu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===du)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===pu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===mu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===gu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===_u)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===xu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===vu)return o===ye?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===yu||n===Mu||n===bu)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===yu)return o===ye?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===bu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Su||n===Tu||n===wu||n===Eu)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Su)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Tu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Eu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ko?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var FS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,US=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,yp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new fl(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new Mi({vertexShader:FS,fragmentShader:US,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Re(new _l(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Mp=class extends Ar{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,m=null,g=typeof XRWebGLBinding<"u",_=new yp,p={},M=e.getContextAttributes(),v=null,y=null,T=[],w=[],E=new Pt,C=null,x=new cn;x.viewport=new We;let b=new cn;b.viewport=new We;let P=[x,b],D=new Ph,O=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let Q=T[$];return Q===void 0&&(Q=new Go,T[$]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function($){let Q=T[$];return Q===void 0&&(Q=new Go,T[$]=Q),Q.getGripSpace()},this.getHand=function($){let Q=T[$];return Q===void 0&&(Q=new Go,T[$]=Q),Q.getHandSpace()};function G($){let Q=w.indexOf($.inputSource);if(Q===-1)return;let ut=T[Q];ut!==void 0&&(ut.update($.inputSource,$.frame,c||o),ut.dispatchEvent({type:$.type,data:$.inputSource}))}function V(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",V),i.removeEventListener("inputsourceschange",z);for(let $=0;$<T.length;$++){let Q=w[$];Q!==null&&(w[$]=null,T[$].disconnect(Q))}O=null,k=null,_.reset();for(let $ in p)delete p[$];t.setRenderTarget(v),f=null,d=null,u=null,i=null,y=null,$t.stop(),n.isPresenting=!1,t.setPixelRatio(C),t.setSize(E.width,E.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){s=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&Yt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&g&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function($){if(i=$,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",V),i.addEventListener("inputsourceschange",z),M.xrCompatible!==!0&&await e.makeXRCompatible(),C=t.getPixelRatio(),t.getSize(E),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,It=null,Mt=null;M.depth&&(Mt=M.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=M.stencil?as:er,It=M.stencil?Ko:Xi);let Gt={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Gt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),y=new yi(d.textureWidth,d.textureHeight,{format:Fi,type:oi,depthTexture:new es(d.textureWidth,d.textureHeight,It,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:M.stencil,colorSpace:t.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let ut={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new yi(f.framebufferWidth,f.framebufferHeight,{format:Fi,type:oi,colorSpace:t.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$t.setContext(i),$t.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function z($){for(let Q=0;Q<$.removed.length;Q++){let ut=$.removed[Q],It=w.indexOf(ut);It>=0&&(w[It]=null,T[It].disconnect(ut))}for(let Q=0;Q<$.added.length;Q++){let ut=$.added[Q],It=w.indexOf(ut);if(It===-1){for(let Gt=0;Gt<T.length;Gt++)if(Gt>=w.length){w.push(ut),It=Gt;break}else if(w[Gt]===null){w[Gt]=ut,It=Gt;break}if(It===-1)break}let Mt=T[It];Mt&&Mt.connect(ut)}}let Y=new N,et=new N;function I($,Q,ut){Y.setFromMatrixPosition(Q.matrixWorld),et.setFromMatrixPosition(ut.matrixWorld);let It=Y.distanceTo(et),Mt=Q.projectionMatrix.elements,Gt=ut.projectionMatrix.elements,ue=Mt[14]/(Mt[10]-1),mt=Mt[14]/(Mt[10]+1),Ft=(Mt[9]+1)/Mt[5],Kt=(Mt[9]-1)/Mt[5],Ut=(Mt[8]-1)/Mt[0],W=(Gt[8]+1)/Gt[0],F=ue*Ut,xe=ue*W,re=It/(-Ut+W),Wt=re*-Ut;if(Q.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(Wt),$.translateZ(re),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Mt[10]===-1)$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let St=ue+re,R=mt+re,S=F-Wt,U=xe+(It-Wt),J=Ft*mt/R*St,K=Kt*mt/R*St;$.projectionMatrix.makePerspective(S,U,J,K,St,R),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function rt($,Q){Q===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(Q.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(i===null)return;let Q=$.near,ut=$.far;_.texture!==null&&(_.depthNear>0&&(Q=_.depthNear),_.depthFar>0&&(ut=_.depthFar)),D.near=b.near=x.near=Q,D.far=b.far=x.far=ut,(O!==D.near||k!==D.far)&&(i.updateRenderState({depthNear:D.near,depthFar:D.far}),O=D.near,k=D.far),D.layers.mask=$.layers.mask|6,x.layers.mask=D.layers.mask&3,b.layers.mask=D.layers.mask&5;let It=$.parent,Mt=D.cameras;rt(D,It);for(let Gt=0;Gt<Mt.length;Gt++)rt(Mt[Gt],It);Mt.length===2?I(D,x,b):D.projectionMatrix.copy(x.projectionMatrix),Lt($,D,It)};function Lt($,Q,ut){ut===null?$.matrix.copy(Q.matrixWorld):($.matrix.copy(ut.matrixWorld),$.matrix.invert(),$.matrix.multiply(Q.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(Q.projectionMatrix),$.projectionMatrixInverse.copy(Q.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=nh*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return D},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function($){l=$,d!==null&&(d.fixedFoveation=$),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(D)},this.getCameraTexture=function($){return p[$]};let Bt=null;function zt($,Q){if(h=Q.getViewerPose(c||o),m=Q,h!==null){let ut=h.views;f!==null&&(t.setRenderTargetFramebuffer(y,f.framebuffer),t.setRenderTarget(y));let It=!1;ut.length!==D.cameras.length&&(D.cameras.length=0,It=!0);for(let mt=0;mt<ut.length;mt++){let Ft=ut[mt],Kt=null;if(f!==null)Kt=f.getViewport(Ft);else{let W=u.getViewSubImage(d,Ft);Kt=W.viewport,mt===0&&(t.setRenderTargetTextures(y,W.colorTexture,W.depthStencilTexture),t.setRenderTarget(y))}let Ut=P[mt];Ut===void 0&&(Ut=new cn,Ut.layers.enable(mt),Ut.viewport=new We,P[mt]=Ut),Ut.matrix.fromArray(Ft.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Ft.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Kt.x,Kt.y,Kt.width,Kt.height),mt===0&&(D.matrix.copy(Ut.matrix),D.matrix.decompose(D.position,D.quaternion,D.scale)),It===!0&&D.cameras.push(Ut)}let Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){u=n.getBinding();let mt=u.getDepthInformation(ut[0]);mt&&mt.isValid&&mt.texture&&_.init(mt,i.renderState)}if(Mt&&Mt.includes("camera-access")&&g){t.state.unbindTexture(),u=n.getBinding();for(let mt=0;mt<ut.length;mt++){let Ft=ut[mt].camera;if(Ft){let Kt=p[Ft];Kt||(Kt=new fl,p[Ft]=Kt);let Ut=u.getCameraImage(Ft);Kt.sourceTexture=Ut}}}}for(let ut=0;ut<T.length;ut++){let It=w[ut],Mt=T[ut];It!==null&&Mt!==void 0&&Mt.update(It,Q,c||o)}Bt&&Bt($,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),m=null}let $t=new t_;$t.setAnimationLoop(zt),this.setAnimationLoop=function($){Bt=$},this.dispose=function(){}}},Js=new Di,OS=new Ce;function BS(r,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,np(r)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,M,v,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),u(_,p)):p.isMeshPhongMaterial?(s(_,p),h(_,p)):p.isMeshStandardMaterial?(s(_,p),d(_,p),p.isMeshPhysicalMaterial&&f(_,p,y)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,M,v):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Cn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Cn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let M=t.get(p),v=M.envMap,y=M.envMapRotation;v&&(_.envMap.value=v,Js.copy(y),Js.x*=-1,Js.y*=-1,Js.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Js.y*=-1,Js.z*=-1),_.envMapRotation.value.setFromMatrix4(OS.makeRotationFromEuler(Js)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,M,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*M,_.scale.value=v*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function h(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function u(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function d(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function f(_,p,M){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Cn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=M.texture,_.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){let M=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(M.matrixWorld),_.nearDistance.value=M.shadow.camera.near,_.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function kS(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(M,v){let y=v.program;n.uniformBlockBinding(M,y)}function c(M,v){let y=i[M.id];y===void 0&&(m(M),y=h(M),i[M.id]=y,M.addEventListener("dispose",_));let T=v.program;n.updateUBOMapping(M,T);let w=t.render.frame;s[M.id]!==w&&(d(M),s[M.id]=w)}function h(M){let v=u();M.__bindingPointIndex=v;let y=r.createBuffer(),T=M.__size,w=M.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,w),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return Xt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){let v=i[M.id],y=M.uniforms,T=M.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let w=0,E=y.length;w<E;w++){let C=Array.isArray(y[w])?y[w]:[y[w]];for(let x=0,b=C.length;x<b;x++){let P=C[x];if(f(P,w,x,T)===!0){let D=P.__offset,O=Array.isArray(P.value)?P.value:[P.value],k=0;for(let G=0;G<O.length;G++){let V=O[G],z=g(V);typeof V=="number"||typeof V=="boolean"?(P.__data[0]=V,r.bufferSubData(r.UNIFORM_BUFFER,D+k,P.__data)):V.isMatrix3?(P.__data[0]=V.elements[0],P.__data[1]=V.elements[1],P.__data[2]=V.elements[2],P.__data[3]=0,P.__data[4]=V.elements[3],P.__data[5]=V.elements[4],P.__data[6]=V.elements[5],P.__data[7]=0,P.__data[8]=V.elements[6],P.__data[9]=V.elements[7],P.__data[10]=V.elements[8],P.__data[11]=0):(V.toArray(P.__data,k),k+=z.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,D,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(M,v,y,T){let w=M.value,E=v+"_"+y;if(T[E]===void 0)return typeof w=="number"||typeof w=="boolean"?T[E]=w:T[E]=w.clone(),!0;{let C=T[E];if(typeof w=="number"||typeof w=="boolean"){if(C!==w)return T[E]=w,!0}else if(C.equals(w)===!1)return C.copy(w),!0}return!1}function m(M){let v=M.uniforms,y=0,T=16;for(let E=0,C=v.length;E<C;E++){let x=Array.isArray(v[E])?v[E]:[v[E]];for(let b=0,P=x.length;b<P;b++){let D=x[b],O=Array.isArray(D.value)?D.value:[D.value];for(let k=0,G=O.length;k<G;k++){let V=O[k],z=g(V),Y=y%T,et=Y%z.boundary,I=Y+et;y+=et,I!==0&&T-I<z.storage&&(y+=T-I),D.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=y,y+=z.storage}}}let w=y%T;return w>0&&(y+=T-w),M.__size=y,M.__cache={},this}function g(M){let v={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(v.boundary=4,v.storage=4):M.isVector2?(v.boundary=8,v.storage=8):M.isVector3||M.isColor?(v.boundary=16,v.storage=12):M.isVector4?(v.boundary=16,v.storage=16):M.isMatrix3?(v.boundary=48,v.storage=48):M.isMatrix4?(v.boundary=64,v.storage=64):M.isTexture?Yt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Yt("WebGLRenderer: Unsupported uniform value type.",M),v}function _(M){let v=M.target;v.removeEventListener("dispose",_);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let M in i)r.deleteBuffer(i[M]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var zS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),or=null;function VS(){return or===null&&(or=new cl(zS,16,16,Ys,sr),or.name="DFG_LUT",or.minFilter=En,or.magFilter=En,or.wrapS=tr,or.wrapT=tr,or.generateMipmaps=!1,or.needsUpdate=!0),or}var ta=class{constructor(t={}){let{canvas:e=Eg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=oi}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=f,_=new Set([Zh,Yh,qh]),p=new Set([oi,Xi,Jo,Ko,Gh,Wh]),M=new Uint32Array(4),v=new Int32Array(4),y=null,T=null,w=[],E=[],C=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=ln;let P=0,D=0,O=null,k=-1,G=null,V=new We,z=new We,Y=null,et=new ne(0),I=0,rt=e.width,Lt=e.height,Bt=1,zt=null,$t=null,$=new We(0,0,rt,Lt),Q=new We(0,0,rt,Lt),ut=!1,It=new qo,Mt=!1,Gt=!1,ue=new Ce,mt=new N,Ft=new We,Kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function W(){return O===null?Bt:1}let F=n;function xe(A,B){return e.getContext(A,B)}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"182"}`),e.addEventListener("webglcontextlost",kt,!1),e.addEventListener("webglcontextrestored",me,!1),e.addEventListener("webglcontextcreationerror",xt,!1),F===null){let B="webgl2";if(F=xe(B,A),F===null)throw xe(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Xt("WebGLRenderer: "+A.message),A}let re,Wt,St,R,S,U,J,K,Z,bt,ot,Et,wt,it,at,Tt,At,lt,Zt,L,ft,nt,dt,tt;function j(){re=new ZM(F),re.init(),nt=new NS(F,re),Wt=new kM(F,re,t,nt),St=new DS(F,re),Wt.reversedDepthBuffer&&d&&St.buffers.depth.setReversed(!0),R=new KM(F),S=new _S,U=new LS(F,re,St,S,Wt,nt,R),J=new VM(x),K=new YM(x),Z=new ey(F),dt=new OM(F,Z),bt=new $M(F,Z,R,dt),ot=new jM(F,bt,Z,R),Zt=new QM(F,Wt,U),Tt=new zM(S),Et=new gS(x,J,K,re,Wt,dt,Tt),wt=new BS(x,S),it=new vS,at=new wS(re),lt=new UM(x,J,K,St,ot,m,l),At=new PS(x,ot,Wt),tt=new kS(F,R,Wt,St),L=new BM(F,re,R),ft=new JM(F,re,R),R.programs=Et.programs,x.capabilities=Wt,x.extensions=re,x.properties=S,x.renderLists=it,x.shadowMap=At,x.state=St,x.info=R}j(),g!==oi&&(C=new eb(g,e.width,e.height,i,s));let ht=new Mp(x,F);this.xr=ht,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let A=re.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=re.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Bt},this.setPixelRatio=function(A){A!==void 0&&(Bt=A,this.setSize(rt,Lt,!1))},this.getSize=function(A){return A.set(rt,Lt)},this.setSize=function(A,B,q=!0){if(ht.isPresenting){Yt("WebGLRenderer: Can't change size while VR device is presenting.");return}rt=A,Lt=B,e.width=Math.floor(A*Bt),e.height=Math.floor(B*Bt),q===!0&&(e.style.width=A+"px",e.style.height=B+"px"),C!==null&&C.setSize(e.width,e.height),this.setViewport(0,0,A,B)},this.getDrawingBufferSize=function(A){return A.set(rt*Bt,Lt*Bt).floor()},this.setDrawingBufferSize=function(A,B,q){rt=A,Lt=B,Bt=q,e.width=Math.floor(A*q),e.height=Math.floor(B*q),this.setViewport(0,0,A,B)},this.setEffects=function(A){if(g===oi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let B=0;B<A.length;B++)if(A[B].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(V)},this.getViewport=function(A){return A.copy($)},this.setViewport=function(A,B,q,X){A.isVector4?$.set(A.x,A.y,A.z,A.w):$.set(A,B,q,X),St.viewport(V.copy($).multiplyScalar(Bt).round())},this.getScissor=function(A){return A.copy(Q)},this.setScissor=function(A,B,q,X){A.isVector4?Q.set(A.x,A.y,A.z,A.w):Q.set(A,B,q,X),St.scissor(z.copy(Q).multiplyScalar(Bt).round())},this.getScissorTest=function(){return ut},this.setScissorTest=function(A){St.setScissorTest(ut=A)},this.setOpaqueSort=function(A){zt=A},this.setTransparentSort=function(A){$t=A},this.getClearColor=function(A){return A.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(A=!0,B=!0,q=!0){let X=0;if(A){let H=!1;if(O!==null){let ct=O.texture.format;H=_.has(ct)}if(H){let ct=O.texture.type,vt=p.has(ct),pt=lt.getClearColor(),yt=lt.getClearAlpha(),Nt=pt.r,qt=pt.g,Vt=pt.b;vt?(M[0]=Nt,M[1]=qt,M[2]=Vt,M[3]=yt,F.clearBufferuiv(F.COLOR,0,M)):(v[0]=Nt,v[1]=qt,v[2]=Vt,v[3]=yt,F.clearBufferiv(F.COLOR,0,v))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT),q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",kt,!1),e.removeEventListener("webglcontextrestored",me,!1),e.removeEventListener("webglcontextcreationerror",xt,!1),lt.dispose(),it.dispose(),at.dispose(),S.dispose(),J.dispose(),K.dispose(),ot.dispose(),dt.dispose(),tt.dispose(),Et.dispose(),ht.dispose(),ht.removeEventListener("sessionstart",Ke),ht.removeEventListener("sessionend",ae),Se.stop()};function kt(A){A.preventDefault(),ja("WebGLRenderer: Context Lost."),b=!0}function me(){ja("WebGLRenderer: Context Restored."),b=!1;let A=R.autoReset,B=At.enabled,q=At.autoUpdate,X=At.needsUpdate,H=At.type;j(),R.autoReset=A,At.enabled=B,At.autoUpdate=q,At.needsUpdate=X,At.type=H}function xt(A){Xt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Dt(A){let B=A.target;B.removeEventListener("dispose",Dt),ee(B)}function ee(A){gt(A),S.remove(A)}function gt(A){let B=S.get(A).programs;B!==void 0&&(B.forEach(function(q){Et.releaseProgram(q)}),A.isShaderMaterial&&Et.releaseShaderCache(A))}this.renderBufferDirect=function(A,B,q,X,H,ct){B===null&&(B=Kt);let vt=H.isMesh&&H.matrixWorld.determinant()<0,pt=rn(A,B,q,X,H);St.setMaterial(X,vt);let yt=q.index,Nt=1;if(X.wireframe===!0){if(yt=bt.getWireframeAttribute(q),yt===void 0)return;Nt=2}let qt=q.drawRange,Vt=q.attributes.position,le=qt.start*Nt,Ee=(qt.start+qt.count)*Nt;ct!==null&&(le=Math.max(le,ct.start*Nt),Ee=Math.min(Ee,(ct.start+ct.count)*Nt)),yt!==null?(le=Math.max(le,0),Ee=Math.min(Ee,yt.count)):Vt!=null&&(le=Math.max(le,0),Ee=Math.min(Ee,Vt.count));let Xe=Ee-le;if(Xe<0||Xe===1/0)return;dt.setup(H,X,pt,q,yt);let qe,Ie=L;if(yt!==null&&(qe=Z.get(yt),Ie=ft,Ie.setIndex(qe)),H.isMesh)X.wireframe===!0?(St.setLineWidth(X.wireframeLinewidth*W()),Ie.setMode(F.LINES)):Ie.setMode(F.TRIANGLES);else if(H.isLine){let Ht=X.linewidth;Ht===void 0&&(Ht=1),St.setLineWidth(Ht*W()),H.isLineSegments?Ie.setMode(F.LINES):H.isLineLoop?Ie.setMode(F.LINE_LOOP):Ie.setMode(F.LINE_STRIP)}else H.isPoints?Ie.setMode(F.POINTS):H.isSprite&&Ie.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)Vo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ie.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(re.get("WEBGL_multi_draw"))Ie.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Ht=H._multiDrawStarts,Te=H._multiDrawCounts,_e=H._multiDrawCount,li=yt?Z.get(yt).bytesPerElement:1,to=S.get(X).currentProgram.getUniforms();for(let ci=0;ci<_e;ci++)to.setValue(F,"_gl_DrawID",ci),Ie.render(Ht[ci]/li,Te[ci])}else if(H.isInstancedMesh)Ie.renderInstances(le,Xe,H.count);else if(q.isInstancedBufferGeometry){let Ht=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,Te=Math.min(q.instanceCount,Ht);Ie.renderInstances(le,Xe,Te)}else Ie.render(le,Xe)};function Jt(A,B,q){A.transparent===!0&&A.side===Si&&A.forceSinglePass===!1?(A.side=Cn,A.needsUpdate=!0,we(A,B,q),A.side=Er,A.needsUpdate=!0,we(A,B,q),A.side=Si):we(A,B,q)}this.compile=function(A,B,q=null){q===null&&(q=A),T=at.get(q),T.init(B),E.push(T),q.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),A!==q&&A.traverseVisible(function(H){H.isLight&&H.layers.test(B.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();let X=new Set;return A.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let ct=H.material;if(ct)if(Array.isArray(ct))for(let vt=0;vt<ct.length;vt++){let pt=ct[vt];Jt(pt,q,H),X.add(pt)}else Jt(ct,q,H),X.add(ct)}),T=E.pop(),X},this.compileAsync=function(A,B,q=null){let X=this.compile(A,B,q);return new Promise(H=>{function ct(){if(X.forEach(function(vt){S.get(vt).currentProgram.isReady()&&X.delete(vt)}),X.size===0){H(A);return}setTimeout(ct,10)}re.get("KHR_parallel_shader_compile")!==null?ct():setTimeout(ct,10)})};let Ot=null;function Qt(A){Ot&&Ot(A)}function Ke(){Se.stop()}function ae(){Se.start()}let Se=new t_;Se.setAnimationLoop(Qt),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(A){Ot=A,ht.setAnimationLoop(A),A===null?Se.stop():Se.start()},ht.addEventListener("sessionstart",Ke),ht.addEventListener("sessionend",ae),this.render=function(A,B){if(B!==void 0&&B.isCamera!==!0){Xt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let q=ht.enabled===!0&&ht.isPresenting===!0,X=C!==null&&(O===null||q)&&C.begin(x,O);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),ht.enabled===!0&&ht.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ht.cameraAutoUpdate===!0&&ht.updateCamera(B),B=ht.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,B,O),T=at.get(A,E.length),T.init(B),E.push(T),ue.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),It.setFromProjectionMatrix(ue,Hi,B.reversedDepth),Gt=this.localClippingEnabled,Mt=Tt.init(this.clippingPlanes,Gt),y=it.get(A,w.length),y.init(),w.push(y),ht.enabled===!0&&ht.isPresenting===!0){let vt=x.xr.getDepthSensingMesh();vt!==null&&je(vt,B,-1/0,x.sortObjects)}je(A,B,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(zt,$t),Ut=ht.enabled===!1||ht.isPresenting===!1||ht.hasDepthSensing()===!1,Ut&&lt.addToRenderList(y,A),this.info.render.frame++,Mt===!0&&Tt.beginShadows();let H=T.state.shadowsArray;if(At.render(H,A,B),Mt===!0&&Tt.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){let vt=y.opaque,pt=y.transmissive;if(T.setupLights(),B.isArrayCamera){let yt=B.cameras;if(pt.length>0)for(let Nt=0,qt=yt.length;Nt<qt;Nt++){let Vt=yt[Nt];Pe(vt,pt,A,Vt)}Ut&&lt.render(A);for(let Nt=0,qt=yt.length;Nt<qt;Nt++){let Vt=yt[Nt];Ue(y,A,Vt,Vt.viewport)}}else pt.length>0&&Pe(vt,pt,A,B),Ut&&lt.render(A),Ue(y,A,B)}O!==null&&D===0&&(U.updateMultisampleRenderTarget(O),U.updateRenderTargetMipmap(O)),X&&C.end(x),A.isScene===!0&&A.onAfterRender(x,A,B),dt.resetDefaultState(),k=-1,G=null,E.pop(),E.length>0?(T=E[E.length-1],Mt===!0&&Tt.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,w.pop(),w.length>0?y=w[w.length-1]:y=null};function je(A,B,q,X){if(A.visible===!1)return;if(A.layers.test(B.layers)){if(A.isGroup)q=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(B);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||It.intersectsSprite(A)){X&&Ft.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ue);let vt=ot.update(A),pt=A.material;pt.visible&&y.push(A,vt,pt,q,Ft.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||It.intersectsObject(A))){let vt=ot.update(A),pt=A.material;if(X&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ft.copy(A.boundingSphere.center)):(vt.boundingSphere===null&&vt.computeBoundingSphere(),Ft.copy(vt.boundingSphere.center)),Ft.applyMatrix4(A.matrixWorld).applyMatrix4(ue)),Array.isArray(pt)){let yt=vt.groups;for(let Nt=0,qt=yt.length;Nt<qt;Nt++){let Vt=yt[Nt],le=pt[Vt.materialIndex];le&&le.visible&&y.push(A,vt,le,q,Ft.z,Vt)}}else pt.visible&&y.push(A,vt,pt,q,Ft.z,null)}}let ct=A.children;for(let vt=0,pt=ct.length;vt<pt;vt++)je(ct[vt],B,q,X)}function Ue(A,B,q,X){let{opaque:H,transmissive:ct,transparent:vt}=A;T.setupLightsView(q),Mt===!0&&Tt.setGlobalState(x.clippingPlanes,q),X&&St.viewport(V.copy(X)),H.length>0&&ge(H,B,q),ct.length>0&&ge(ct,B,q),vt.length>0&&ge(vt,B,q),St.buffers.depth.setTest(!0),St.buffers.depth.setMask(!0),St.buffers.color.setMask(!0),St.setPolygonOffset(!1)}function Pe(A,B,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let le=re.has("EXT_color_buffer_half_float")||re.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new yi(1,1,{generateMipmaps:!0,type:le?sr:oi,minFilter:os,samples:Wt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace})}let ct=T.state.transmissionRenderTarget[X.id],vt=X.viewport||V;ct.setSize(vt.z*x.transmissionResolutionScale,vt.w*x.transmissionResolutionScale);let pt=x.getRenderTarget(),yt=x.getActiveCubeFace(),Nt=x.getActiveMipmapLevel();x.setRenderTarget(ct),x.getClearColor(et),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Ut&&lt.render(q);let qt=x.toneMapping;x.toneMapping=Wi;let Vt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),Mt===!0&&Tt.setGlobalState(x.clippingPlanes,X),ge(A,q,X),U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct),re.has("WEBGL_multisampled_render_to_texture")===!1){let le=!1;for(let Ee=0,Xe=B.length;Ee<Xe;Ee++){let qe=B[Ee],{object:Ie,geometry:Ht,material:Te,group:_e}=qe;if(Te.side===Si&&Ie.layers.test(X.layers)){let li=Te.side;Te.side=Cn,Te.needsUpdate=!0,Qn(Ie,q,X,Ht,Te,_e),Te.side=li,Te.needsUpdate=!0,le=!0}}le===!0&&(U.updateMultisampleRenderTarget(ct),U.updateRenderTargetMipmap(ct))}x.setRenderTarget(pt,yt,Nt),x.setClearColor(et,I),Vt!==void 0&&(X.viewport=Vt),x.toneMapping=qt}function ge(A,B,q){let X=B.isScene===!0?B.overrideMaterial:null;for(let H=0,ct=A.length;H<ct;H++){let vt=A[H],{object:pt,geometry:yt,group:Nt}=vt,qt=vt.material;qt.allowOverride===!0&&X!==null&&(qt=X),pt.layers.test(q.layers)&&Qn(pt,B,q,yt,qt,Nt)}}function Qn(A,B,q,X,H,ct){A.onBeforeRender(x,B,q,X,H,ct),A.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),H.onBeforeRender(x,B,q,X,A,ct),H.transparent===!0&&H.side===Si&&H.forceSinglePass===!1?(H.side=Cn,H.needsUpdate=!0,x.renderBufferDirect(q,B,X,H,A,ct),H.side=Er,H.needsUpdate=!0,x.renderBufferDirect(q,B,X,H,A,ct),H.side=Si):x.renderBufferDirect(q,B,X,H,A,ct),A.onAfterRender(x,B,q,X,H,ct)}function we(A,B,q){B.isScene!==!0&&(B=Kt);let X=S.get(A),H=T.state.lights,ct=T.state.shadowsArray,vt=H.state.version,pt=Et.getParameters(A,H.state,ct,B,q),yt=Et.getProgramCacheKey(pt),Nt=X.programs;X.environment=A.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(A.isMeshStandardMaterial?K:J).get(A.envMap||X.environment),X.envMapRotation=X.environment!==null&&A.envMap===null?B.environmentRotation:A.envMapRotation,Nt===void 0&&(A.addEventListener("dispose",Dt),Nt=new Map,X.programs=Nt);let qt=Nt.get(yt);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===vt)return ai(A,pt),qt}else pt.uniforms=Et.getUniforms(A),A.onBeforeCompile(pt,x),qt=Et.acquireProgram(pt,yt),Nt.set(yt,qt),X.uniforms=pt.uniforms;let Vt=X.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Vt.clippingPlanes=Tt.uniform),ai(A,pt),X.needsLights=pn(A),X.lightsStateVersion=vt,X.needsLights&&(Vt.ambientLightColor.value=H.state.ambient,Vt.lightProbe.value=H.state.probe,Vt.directionalLights.value=H.state.directional,Vt.directionalLightShadows.value=H.state.directionalShadow,Vt.spotLights.value=H.state.spot,Vt.spotLightShadows.value=H.state.spotShadow,Vt.rectAreaLights.value=H.state.rectArea,Vt.ltc_1.value=H.state.rectAreaLTC1,Vt.ltc_2.value=H.state.rectAreaLTC2,Vt.pointLights.value=H.state.point,Vt.pointLightShadows.value=H.state.pointShadow,Vt.hemisphereLights.value=H.state.hemi,Vt.directionalShadowMap.value=H.state.directionalShadowMap,Vt.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Vt.spotShadowMap.value=H.state.spotShadowMap,Vt.spotLightMatrix.value=H.state.spotLightMatrix,Vt.spotLightMap.value=H.state.spotLightMap,Vt.pointShadowMap.value=H.state.pointShadowMap,Vt.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function Rn(A){if(A.uniformsList===null){let B=A.currentProgram.getUniforms();A.uniformsList=jo.seqWithValue(B.seq,A.uniforms)}return A.uniformsList}function ai(A,B){let q=S.get(A);q.outputColorSpace=B.outputColorSpace,q.batching=B.batching,q.batchingColor=B.batchingColor,q.instancing=B.instancing,q.instancingColor=B.instancingColor,q.instancingMorph=B.instancingMorph,q.skinning=B.skinning,q.morphTargets=B.morphTargets,q.morphNormals=B.morphNormals,q.morphColors=B.morphColors,q.morphTargetsCount=B.morphTargetsCount,q.numClippingPlanes=B.numClippingPlanes,q.numIntersection=B.numClipIntersection,q.vertexAlphas=B.vertexAlphas,q.vertexTangents=B.vertexTangents,q.toneMapping=B.toneMapping}function rn(A,B,q,X,H){B.isScene!==!0&&(B=Kt),U.resetTextureUnits();let ct=B.fog,vt=X.isMeshStandardMaterial?B.environment:null,pt=O===null?x.outputColorSpace:O.isXRRenderTarget===!0?O.texture.colorSpace:ks,yt=(X.isMeshStandardMaterial?K:J).get(X.envMap||vt),Nt=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,qt=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Vt=!!q.morphAttributes.position,le=!!q.morphAttributes.normal,Ee=!!q.morphAttributes.color,Xe=Wi;X.toneMapped&&(O===null||O.isXRRenderTarget===!0)&&(Xe=x.toneMapping);let qe=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Ie=qe!==void 0?qe.length:0,Ht=S.get(X),Te=T.state.lights;if(Mt===!0&&(Gt===!0||A!==G)){let zn=A===G&&X.id===k;Tt.setState(X,A,zn)}let _e=!1;X.version===Ht.__version?(Ht.needsLights&&Ht.lightsStateVersion!==Te.state.version||Ht.outputColorSpace!==pt||H.isBatchedMesh&&Ht.batching===!1||!H.isBatchedMesh&&Ht.batching===!0||H.isBatchedMesh&&Ht.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Ht.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Ht.instancing===!1||!H.isInstancedMesh&&Ht.instancing===!0||H.isSkinnedMesh&&Ht.skinning===!1||!H.isSkinnedMesh&&Ht.skinning===!0||H.isInstancedMesh&&Ht.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Ht.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Ht.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Ht.instancingMorph===!1&&H.morphTexture!==null||Ht.envMap!==yt||X.fog===!0&&Ht.fog!==ct||Ht.numClippingPlanes!==void 0&&(Ht.numClippingPlanes!==Tt.numPlanes||Ht.numIntersection!==Tt.numIntersection)||Ht.vertexAlphas!==Nt||Ht.vertexTangents!==qt||Ht.morphTargets!==Vt||Ht.morphNormals!==le||Ht.morphColors!==Ee||Ht.toneMapping!==Xe||Ht.morphTargetsCount!==Ie)&&(_e=!0):(_e=!0,Ht.__version=X.version);let li=Ht.currentProgram;_e===!0&&(li=we(X,B,H));let to=!1,ci=!1,sa=!1,Ne=li.getUniforms(),jn=Ht.uniforms;if(St.useProgram(li.program)&&(to=!0,ci=!0,sa=!0),X.id!==k&&(k=X.id,ci=!0),to||G!==A){St.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Ne.setValue(F,"projectionMatrix",A.projectionMatrix),Ne.setValue(F,"viewMatrix",A.matrixWorldInverse);let ti=Ne.map.cameraPosition;ti!==void 0&&ti.setValue(F,mt.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&Ne.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ne.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),G!==A&&(G=A,ci=!0,sa=!0)}if(Ht.needsLights&&(Te.state.directionalShadowMap.length>0&&Ne.setValue(F,"directionalShadowMap",Te.state.directionalShadowMap,U),Te.state.spotShadowMap.length>0&&Ne.setValue(F,"spotShadowMap",Te.state.spotShadowMap,U),Te.state.pointShadowMap.length>0&&Ne.setValue(F,"pointShadowMap",Te.state.pointShadowMap,U)),H.isSkinnedMesh){Ne.setOptional(F,H,"bindMatrix"),Ne.setOptional(F,H,"bindMatrixInverse");let zn=H.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Ne.setValue(F,"boneTexture",zn.boneTexture,U))}H.isBatchedMesh&&(Ne.setOptional(F,H,"batchingTexture"),Ne.setValue(F,"batchingTexture",H._matricesTexture,U),Ne.setOptional(F,H,"batchingIdTexture"),Ne.setValue(F,"batchingIdTexture",H._indirectTexture,U),Ne.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&Ne.setValue(F,"batchingColorTexture",H._colorsTexture,U));let Ti=q.morphAttributes;if((Ti.position!==void 0||Ti.normal!==void 0||Ti.color!==void 0)&&Zt.update(H,q,li),(ci||Ht.receiveShadow!==H.receiveShadow)&&(Ht.receiveShadow=H.receiveShadow,Ne.setValue(F,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(jn.envMap.value=yt,jn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(jn.envMapIntensity.value=B.environmentIntensity),jn.dfgLUT!==void 0&&(jn.dfgLUT.value=VS()),ci&&(Ne.setValue(F,"toneMappingExposure",x.toneMappingExposure),Ht.needsLights&&sn(jn,sa),ct&&X.fog===!0&&wt.refreshFogUniforms(jn,ct),wt.refreshMaterialUniforms(jn,X,Bt,Lt,T.state.transmissionRenderTarget[A.id]),jo.upload(F,Rn(Ht),jn,U)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(jo.upload(F,Rn(Ht),jn,U),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ne.setValue(F,"center",H.center),Ne.setValue(F,"modelViewMatrix",H.modelViewMatrix),Ne.setValue(F,"normalMatrix",H.normalMatrix),Ne.setValue(F,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let zn=X.uniformsGroups;for(let ti=0,Uu=zn.length;ti<Uu;ti++){let fs=zn[ti];tt.update(fs,li),tt.bind(fs,li)}}return li}function sn(A,B){A.ambientLightColor.needsUpdate=B,A.lightProbe.needsUpdate=B,A.directionalLights.needsUpdate=B,A.directionalLightShadows.needsUpdate=B,A.pointLights.needsUpdate=B,A.pointLightShadows.needsUpdate=B,A.spotLights.needsUpdate=B,A.spotLightShadows.needsUpdate=B,A.rectAreaLights.needsUpdate=B,A.hemisphereLights.needsUpdate=B}function pn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return D},this.getRenderTarget=function(){return O},this.setRenderTargetTextures=function(A,B,q){let X=S.get(A);X.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=B,S.get(A.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,B){let q=S.get(A);q.__webglFramebuffer=B,q.__useDefaultFramebuffer=B===void 0};let lr=F.createFramebuffer();this.setRenderTarget=function(A,B=0,q=0){O=A,P=B,D=q;let X=null,H=!1,ct=!1;if(A){let pt=S.get(A);if(pt.__useDefaultFramebuffer!==void 0){St.bindFramebuffer(F.FRAMEBUFFER,pt.__webglFramebuffer),V.copy(A.viewport),z.copy(A.scissor),Y=A.scissorTest,St.viewport(V),St.scissor(z),St.setScissorTest(Y),k=-1;return}else if(pt.__webglFramebuffer===void 0)U.setupRenderTarget(A);else if(pt.__hasExternalTextures)U.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let qt=A.depthTexture;if(pt.__boundDepthTexture!==qt){if(qt!==null&&S.has(qt)&&(A.width!==qt.image.width||A.height!==qt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(A)}}let yt=A.texture;(yt.isData3DTexture||yt.isDataArrayTexture||yt.isCompressedArrayTexture)&&(ct=!0);let Nt=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Nt[B])?X=Nt[B][q]:X=Nt[B],H=!0):A.samples>0&&U.useMultisampledRTT(A)===!1?X=S.get(A).__webglMultisampledFramebuffer:Array.isArray(Nt)?X=Nt[q]:X=Nt,V.copy(A.viewport),z.copy(A.scissor),Y=A.scissorTest}else V.copy($).multiplyScalar(Bt).floor(),z.copy(Q).multiplyScalar(Bt).floor(),Y=ut;if(q!==0&&(X=lr),St.bindFramebuffer(F.FRAMEBUFFER,X)&&St.drawBuffers(A,X),St.viewport(V),St.scissor(z),St.setScissorTest(Y),H){let pt=S.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,pt.__webglTexture,q)}else if(ct){let pt=B;for(let yt=0;yt<A.textures.length;yt++){let Nt=S.get(A.textures[yt]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+yt,Nt.__webglTexture,q,pt)}}else if(A!==null&&q!==0){let pt=S.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,pt.__webglTexture,q)}k=-1},this.readRenderTargetPixels=function(A,B,q,X,H,ct,vt,pt=0){if(!(A&&A.isWebGLRenderTarget)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let yt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt){St.bindFramebuffer(F.FRAMEBUFFER,yt);try{let Nt=A.textures[pt],qt=Nt.format,Vt=Nt.type;if(!Wt.textureFormatReadable(qt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Vt)){Xt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=A.width-X&&q>=0&&q<=A.height-H&&(A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt),F.readPixels(B,q,X,H,nt.convert(qt),nt.convert(Vt),ct))}finally{let Nt=O!==null?S.get(O).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,Nt)}}},this.readRenderTargetPixelsAsync=async function(A,B,q,X,H,ct,vt,pt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let yt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&vt!==void 0&&(yt=yt[vt]),yt)if(B>=0&&B<=A.width-X&&q>=0&&q<=A.height-H){St.bindFramebuffer(F.FRAMEBUFFER,yt);let Nt=A.textures[pt],qt=Nt.format,Vt=Nt.type;if(!Wt.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Vt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let le=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.bufferData(F.PIXEL_PACK_BUFFER,ct.byteLength,F.STREAM_READ),A.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+pt),F.readPixels(B,q,X,H,nt.convert(qt),nt.convert(Vt),0);let Ee=O!==null?S.get(O).__webglFramebuffer:null;St.bindFramebuffer(F.FRAMEBUFFER,Ee);let Xe=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await Ag(F,Xe,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,le),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ct),F.deleteBuffer(le),F.deleteSync(Xe),ct}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,B=null,q=0){let X=Math.pow(2,-q),H=Math.floor(A.image.width*X),ct=Math.floor(A.image.height*X),vt=B!==null?B.x:0,pt=B!==null?B.y:0;U.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,vt,pt,H,ct),St.unbindTexture()};let js=F.createFramebuffer(),mn=F.createFramebuffer();this.copyTextureToTexture=function(A,B,q=null,X=null,H=0,ct=null){ct===null&&(H!==0?(Vo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ct=H,H=0):ct=0);let vt,pt,yt,Nt,qt,Vt,le,Ee,Xe,qe=A.isCompressedTexture?A.mipmaps[ct]:A.image;if(q!==null)vt=q.max.x-q.min.x,pt=q.max.y-q.min.y,yt=q.isBox3?q.max.z-q.min.z:1,Nt=q.min.x,qt=q.min.y,Vt=q.isBox3?q.min.z:0;else{let Ti=Math.pow(2,-H);vt=Math.floor(qe.width*Ti),pt=Math.floor(qe.height*Ti),A.isDataArrayTexture?yt=qe.depth:A.isData3DTexture?yt=Math.floor(qe.depth*Ti):yt=1,Nt=0,qt=0,Vt=0}X!==null?(le=X.x,Ee=X.y,Xe=X.z):(le=0,Ee=0,Xe=0);let Ie=nt.convert(B.format),Ht=nt.convert(B.type),Te;B.isData3DTexture?(U.setTexture3D(B,0),Te=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(U.setTexture2DArray(B,0),Te=F.TEXTURE_2D_ARRAY):(U.setTexture2D(B,0),Te=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);let _e=F.getParameter(F.UNPACK_ROW_LENGTH),li=F.getParameter(F.UNPACK_IMAGE_HEIGHT),to=F.getParameter(F.UNPACK_SKIP_PIXELS),ci=F.getParameter(F.UNPACK_SKIP_ROWS),sa=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,qe.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,qe.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Nt),F.pixelStorei(F.UNPACK_SKIP_ROWS,qt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Vt);let Ne=A.isDataArrayTexture||A.isData3DTexture,jn=B.isDataArrayTexture||B.isData3DTexture;if(A.isDepthTexture){let Ti=S.get(A),zn=S.get(B),ti=S.get(Ti.__renderTarget),Uu=S.get(zn.__renderTarget);St.bindFramebuffer(F.READ_FRAMEBUFFER,ti.__webglFramebuffer),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,Uu.__webglFramebuffer);for(let fs=0;fs<yt;fs++)Ne&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(A).__webglTexture,H,Vt+fs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(B).__webglTexture,ct,Xe+fs)),F.blitFramebuffer(Nt,qt,vt,pt,le,Ee,vt,pt,F.DEPTH_BUFFER_BIT,F.NEAREST);St.bindFramebuffer(F.READ_FRAMEBUFFER,null),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||A.isRenderTargetTexture||S.has(A)){let Ti=S.get(A),zn=S.get(B);St.bindFramebuffer(F.READ_FRAMEBUFFER,js),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,mn);for(let ti=0;ti<yt;ti++)Ne?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ti.__webglTexture,H,Vt+ti):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Ti.__webglTexture,H),jn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,zn.__webglTexture,ct,Xe+ti):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,zn.__webglTexture,ct),H!==0?F.blitFramebuffer(Nt,qt,vt,pt,le,Ee,vt,pt,F.COLOR_BUFFER_BIT,F.NEAREST):jn?F.copyTexSubImage3D(Te,ct,le,Ee,Xe+ti,Nt,qt,vt,pt):F.copyTexSubImage2D(Te,ct,le,Ee,Nt,qt,vt,pt);St.bindFramebuffer(F.READ_FRAMEBUFFER,null),St.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else jn?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Te,ct,le,Ee,Xe,vt,pt,yt,Ie,Ht,qe.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Te,ct,le,Ee,Xe,vt,pt,yt,Ie,qe.data):F.texSubImage3D(Te,ct,le,Ee,Xe,vt,pt,yt,Ie,Ht,qe):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,ct,le,Ee,vt,pt,Ie,Ht,qe.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,ct,le,Ee,qe.width,qe.height,Ie,qe.data):F.texSubImage2D(F.TEXTURE_2D,ct,le,Ee,vt,pt,Ie,Ht,qe);F.pixelStorei(F.UNPACK_ROW_LENGTH,_e),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,li),F.pixelStorei(F.UNPACK_SKIP_PIXELS,to),F.pixelStorei(F.UNPACK_SKIP_ROWS,ci),F.pixelStorei(F.UNPACK_SKIP_IMAGES,sa),ct===0&&B.generateMipmaps&&F.generateMipmap(Te),St.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&U.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?U.setTextureCube(A,0):A.isData3DTexture?U.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?U.setTexture2DArray(A,0):U.setTexture2D(A,0),St.unbindTexture()},this.resetState=function(){P=0,D=0,O=null,St.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Hi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}};var ia=class extends Pr{constructor(){super(),this.name="RoomEnvironment";let t=new ze;t.deleteAttribute("uv");let e=new Me({side:Cn}),n=new Me,i=new Ml(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Re(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ul(t,n,6),a=new un;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Re(t,na(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Re(t,na(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Re(t,na(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Re(t,na(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Re(t,na(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Re(t,na(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function na(r){return new vl({color:0,emissive:16777215,emissiveIntensity:r})}var Dl=new N;function Ui(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Dl.copy(t),Dl[n]=0,Dl.normalize();let c=.5*o/(o+a),h=1-Dl.angleTo(r)/l;return Math.sign(Dl[e])===1?h*c:a/(o+a)+c+c*(1-h)}var hs=class r extends ze{constructor(t=1,e=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new N,c=new N,h=new N(t,e,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,m=u.length/6,g=new N,_=.5/o;for(let p=0,M=0;p<u.length;p+=3,M+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),f[M+0]=Ui(g,c,"z","y",s,n),f[M+1]=1-Ui(g,c,"y","z",s,e);break;case 1:g.set(-1,0,0),f[M+0]=1-Ui(g,c,"z","y",s,n),f[M+1]=1-Ui(g,c,"y","z",s,e);break;case 2:g.set(0,1,0),f[M+0]=1-Ui(g,c,"x","z",s,t),f[M+1]=Ui(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),f[M+0]=1-Ui(g,c,"x","z",s,t),f[M+1]=1-Ui(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),f[M+0]=1-Ui(g,c,"x","y",s,t),f[M+1]=1-Ui(g,c,"y","x",s,e);break;case 5:g.set(0,0,-1),f[M+0]=Ui(g,c,"x","y",s,t),f[M+1]=1-Ui(g,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var Qs=r=>{let t=Math.sin(r*127.1+31.7)*43758.54;return t-Math.floor(t)},be=(r,t,e,n=0,i=0,s=0)=>{let o=new Re(r,t);return o.position.set(n,i,s),e.add(o),o};function o_(r=1.25,t=.55){let e=new ke,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let h=l/o,u=c/a*2-1,d=Math.sin(Math.PI*h)**.5;if(n.push(u*t*d,h*r,.12+Math.sin(Math.PI*h)*.3+u*u*.18-Math.pow(h,5)*.2+Math.sin(h*36+u*4)*.017*d),s.push(c/a,h),l<o&&c<a){let f=l*(a+1)+c,m=f+a+1;i.push(f,m,f+1,m,m+1,f+1)}}return e.setAttribute("position",new fe(n,3)),e.setAttribute("uv",new fe(s,2)),e.setIndex(i),e.computeVertexNormals(),e}function HS(){let r=document.createElement("canvas");r.width=256,r.height=512;let t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#783f28"),e.addColorStop(.22,"#bc5845"),e.addColorStop(.65,"#dc8672"),e.addColorStop(1,"#f0ac91"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)t.strokeStyle=`rgba(91,34,35,${.025+Qs(i)*.06})`,t.lineWidth=.6,t.beginPath(),t.moveTo(128,0),t.quadraticCurveTo(i*.85,220,i,512),t.stroke();let n=new zs(r);return n.colorSpace=ln,n}var Nu=class{constructor(t,e,n){this.container=t;this.id=e;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new ta({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=Xs,this.renderer.toneMappingExposure=e==="monolith"?.9:e==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new cs(this.renderer),s=new ia;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new Ws(16777215,e==="floraison"||e==="monolith"?.65:1.3));let o=new ir(e==="offscript"?13238194:16771534,e==="floraison"||e==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new ir(e==="aether"?16757901:e==="offscript"?12175359:16764589,e==="floraison"||e==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new ir(16777215,e==="floraison"||e==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),e==="aether"?this.headphones():e==="offscript"?this.sculpture():e==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(t),this.observers.push(c);let h=new IntersectionObserver(u=>{this.visible=u[0].isIntersecting});h.observe(t),this.observers.push(h),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new Pr;camera=new cn(33,1,.1,60);root=new vn;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=t=>{this.tilt.x=(t.clientX/innerWidth-.5)*.12,this.tilt.y=(t.clientY/innerHeight-.5)*.08};contextLost=t=>{t.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let t=document.createElement("div");t.className="scene-fallback",this.container.append(t)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let t=new Me({color:"#cbd1ce",metalness:1,roughness:.22}),e=new Me({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new Me({color:"#373b36",roughness:.9,metalness:.05});this.band=new vn,this.root.add(this.band),be(new An(1.22,.072,20,100,Math.PI),t,this.band,0,.1);let i=be(new An(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let h of[-1,1]){let u=new vn;u.position.set(h*1.15,-.39,0),u.rotation.y=-h*.2,u.rotation.z=h*.1,this.root.add(u),this.cups.push(u),be(new hs(.12,.6,.13,4,.05),t,u,0,.65,-.06);let d=be(new hs(.68,1.03,.4,5,.2),t,u,0,0,-.12);this.shells.push(d),be(new hs(.61,.95,.09,5,.18),e,u,0,0,.1),be(new hs(.5,.82,.08,4,.17),n,u,0,0,.19),be(new An(.26,.082,16,64),n,u,0,0,.26).scale.set(.85,1.48,.85),be(new An(.255,.008,8,64),e,u,0,0,.28).scale.set(1.12,1.76,1),be(new Bn(.023,.023,.1,12),t,u,h*.3,-.18,.01).rotation.z=Math.PI/2;for(let g=0;g<5;g++)be(new Kn(.012,8,6),n,u,(g-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new zs(s);this.textures.push(l);let c=new Xo(new Wo({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let t=new Hs({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),e=new Me({color:"#c9ff54",metalness:.4,roughness:.28}),n=new Me({color:"#ddddcc",metalness:1,roughness:.18}),i=be(new xl(.87,.29,160,24,2,3),t,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=be(new An(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=be(new gl(.38,1),e,this.root,1.45,1.3,.25);this.objects.push(o);let a=be(new hs(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let d=0;d<16384;d++){let f=128+Qs(d)*35;n.data.set([f,f-4,f-12,255],d*4)}e.putImageData(n,0,0);let i=new zs(t);i.colorSpace=ln,this.textures.push(i);let s=new Me({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new Me({color:10048316,roughness:.38,metalness:.55}),a=new Me({color:3689543,roughness:.22,metalness:.65}),l=new Me({color:4606275,roughness:.9}),c=new ze(2.35,.11,2.35),h=new ze(.11,.32,.11);for(let d=0;d<7;d++){let f=new vn;if(f.userData.level=d,this.root.add(f),be(new ze(2.35,.13,.68),s,f,0,0,-.835),be(new ze(2.35,.13,.68),s,f,0,0,.835),be(new ze(.68,.13,1),s,f,-.835,0,0),be(new ze(.68,.13,1),s,f,.835,0,0),d<6){for(let m of[-1.04,1.04])for(let g of[-1.04,1.04])be(h,s,f,m,.22,g);for(let m=0;m<9;m++)be(new ze(.024,.25,.055),o,f,-.94+m*.235,.2,-1.08);be(new ze(.055,.25,1.58),a,f,1.06,.2,0)}this.objects.push(f)}be(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),be(new ze(.85,.055,.85),o,this.root,0,-1.3,0);for(let d=0;d<6;d++)be(new ze(.8,.05,.13),s,this.root,0,-1.35-d*.04,1.25+d*.13);let u=be(new Bn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);u.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let t=HS();this.textures.push(t);let e=new Me({map:t,side:Si,roughness:.9,metalness:0,envMapIntensity:.2}),n=new vn;n.position.y=.45,this.root.add(n);let i=o_();for(let u=0;u<2;u++)for(let d=0;d<6;d++){let f=new vn;f.rotation.z=d/6*Math.PI*2+u*.52,n.add(f);let m=be(i,e,f),g=1-u*.17;m.scale.set(g,g,g),m.position.set(0,.04+u*.035,u*.19),m.userData.ring=u,m.userData.phase=Qs(d+u*6),this.petals.push(m)}let s=new Me({color:"#5c4630",roughness:.85}),o=new Me({color:"#dfb45b",roughness:.65});be(new Kn(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let u=0;u<115;u++){let d=u*2.399963,f=Math.sqrt(u/115)*.28,m=be(new Kn(.015+Qs(u)*.007,6,5),u%3?o:s,n,Math.cos(d)*f,Math.sin(d)*f,.58+Math.sqrt(Math.max(0,.078-f*f))*.22);m.scale.z=1.7}let a=new Me({color:"#536742",roughness:.8,side:Si}),l=new ns([new N(.23,-2.5,-.15),new N(-.14,-1.3,-.13),new N(0,.4,0)]);be(new Vs(l,40,.028,9,!1),a,this.root);for(let u of[-1,1]){let d=be(o_(.95,.24),a,this.root,0,-1.05+u*.3,-.1);d.rotation.set(.3,u*.6,-u*.9),d.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let u=0;u<38;u++)c[u*3]=(Qs(u*3)-.5)*4.7,c[u*3+1]=(Qs(u*3+1)-.5)*4.5,c[u*3+2]=(Qs(u*3+2)-.5)*2;let h=new ke;h.setAttribute("position",new hn(c,3)),this.particles=new Ir(h,new ts({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:t,height:e}=this.container.getBoundingClientRect();!t||!e||(this.camera.aspect=t/e,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.render(0))}render(t){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||t>0&&t-this.lastFrame<1/30)return;this.lastFrame=t;let e=this.reduced?0:t,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(e*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(e*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(e*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=e*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(e*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(e*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(e*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let t=new Set,e=new Set;this.scene.traverse(n=>{if(n instanceof Re||n instanceof Ir){t.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>e.add(s))}else n instanceof Xo&&e.add(n.material)}),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var bp=r=>{let t=Math.sin(r*127.1+17.7)*43758.5;return t-Math.floor(t)},Fu=class{constructor(t,e,n){this.host=t;this.id=e;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new Ws(11258309,1.5));let i=new ir(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new ir(e==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),e==="pelagic"?this.capsule():this.armillary();try{this.renderer=new ta({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=ln,this.renderer.toneMapping=Xs,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new cs(this.renderer),a=new ia;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),t.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(t),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new Pr;camera=new cn(34,1,.1,100);model=new vn;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(t,e,n=this.model,i=0,s=0,o=0){let a=new Re(t,e);return a.position.set(i,s,o),n.add(a),a}tube(t,e,n,i=this.model){return this.add(new Vs(new ns(t),40,e,8,!1),n,i)}capsule(){let t=new Me({color:12240827,metalness:.86,roughness:.27}),e=new Me({color:1387827,metalness:.7,roughness:.32}),n=new Me({color:11838307,metalness:.85,roughness:.24}),i=new Me({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new Kn(1.4,64,48),t).scale.set(1,1.13,.87),this.add(new Bn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new An(.64,.075,12,64),e,this.model,0,.12,1.28);let o=this.add(new Kn(.59,48,32),new Hs({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new An(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new dl(.33,48),new jr({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new An(.42,.012,6,48,Math.PI*.55),new jr({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let d=0;d<16;d++){let f=d*Math.PI/8;this.add(new Bn(.035,.035,.055,6),e,this.model,Math.cos(f)*.71,.12+Math.sin(f)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new An(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new Bn(.46,.56,.27,32),e,this.model,0,1.55,0),this.add(new Bn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new Bn(.018,.018,.8,8),t,this.model,.2,2.1,0),this.add(new Kn(.055,12,8),i,this.model,.2,2.52,0);for(let d of[-1,1]){let f=new vn;f.position.set(d*1.2,-.55,.2),this.model.add(f),this.arms.push(f),this.add(new Kn(.16,16,12),n,f),this.tube([new N,new N(d*.55,-.2,.3),new N(d*.6,-.55,.8)],.055,t,f),this.add(new ze(.23,.14,.36),e,f,d*.6,-.55,.9);for(let m of[-1,1])this.tube([new N(d*.6+m*.09,-.55,1),new N(d*.6+m*.14,-.7,1.2),new N(d*.6+m*.05,-.75,1.3)],.025,n,f);this.tube([new N(d*.85,-1.2,-.6),new N(d*1.1,-1.7,-.4),new N(d*1.1,-1.7,1.1)],.055,t),this.add(new Bn(.21,.21,.5,24),e,this.model,d*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new Kn(.12,12,8),i,this.model,d*.87,-.5,1.06)}let h=new Float32Array(650*3);for(let d=0;d<650;d++)h[d*3]=(bp(d*3)-.5)*14,h[d*3+1]=(bp(d*3+1)-.5)*14,h[d*3+2]=(bp(d*3+2)-.5)*8-2;let u=new ke;u.setAttribute("position",new hn(h,3)),this.particles=new Ir(u,new ts({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let t=new Me({color:13673053,metalness:.95,roughness:.25}),e=new Me({color:13221281,metalness:.9,roughness:.3}),n=new Me({color:4867381,metalness:.85,roughness:.27}),i=new Me({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new Kn(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new An(.686,.005,4,96),t);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new vn;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new An(l,o===5?.055:.029,8,128),o%2?t:e,a),o===5&&this.add(new An(l+.1,.012,6,128),t,a);for(let c=0;c<72;c++){let h=c*Math.PI/36,u=l+(c%6===0?.055:.027),d=this.add(new ze(.008,c%6===0?.09:.035,.018),n,a,Math.sin(h)*u,Math.cos(h)*u,0);d.rotation.z=-h}this.add(new Kn(.07+o*.013,16,12),o%2?t:e,a,l,0,0)}let s=this.add(new Bn(.055,.1,1.2,24),t,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new Bn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new Bn(.62,.62,.04,64),t,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let t=this.host.getBoundingClientRect();t.width<1||t.height<1||(this.camera.aspect=t.width/t.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(t.width,t.height,!1),this.render(0,!0))}render(t,e=!1){if(!this.renderer||this.disposed||!e&&(!this.visible||document.hidden||t-this.last<1/30))return;this.last=t;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(t*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(t=>{(t instanceof Re||t instanceof Ir)&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var ra=(r,t,e)=>st.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*t*(e?.8:1)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});function a_(r){st.from(`${r} h2`,{y:90,rotationX:12,transformOrigin:"50% 100%",opacity:.35,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}})}function GS(){let r=document.querySelector(".rv-hero"),t=r.querySelector(".rv-desert img"),e=r.clientWidth,n=r.clientHeight,i=(t.naturalWidth||1792)/(t.naturalHeight||1008),s=Math.max(e,n*i),o=s/i,a=(e-s)/2,l=(n-o)/2,c=(s*.415+a)/e*100,h=100-(s*.58+a)/e*100,u=(o*.175+l)/n*100,d=100-(o*.79+l)/n*100,f=Math.max(0,s*.165/2);return`inset(${u}% ${h}% ${d}% ${c}% round ${f}px ${f}px 0px 0px)`}function WS(r){st.set(".rv-portal-copy",{autoAlpha:0}),ra(".rv-hero",4,r).to(".rv-hero-copy .im-word",{yPercent:-80,rotationX:60,rotation:-5,autoAlpha:0,stagger:.07,duration:.8},.12).to(".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",{autoAlpha:0,y:-25,duration:.5},.12).to(".rv-seal",{rotation:140,scale:.75,autoAlpha:0,duration:1},0).to(".rv-world",{scale:1.45,transformOrigin:"50% 47%",duration:2.2,ease:"power1.inOut"},.15).fromTo(".rv-portal-window",{clipPath:GS},{clipPath:"inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",duration:1.9,ease:"power2.inOut"},.7).fromTo(".rv-portal-window img",{scale:1.12},{scale:1,duration:2.8,ease:"none"},.6).to(".rv-desert",{autoAlpha:0,duration:.45},2.05).to(".rv-world",{scale:1,duration:1.4,ease:"sine.out"},2.3).fromTo(".rv-portal-copy",{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.7},2.5).to(".rv-hero-shade",{backgroundColor:"#0e29252a",duration:1},2).to(".rv-portal-copy",{autoAlpha:0,y:-35,duration:.5},3.55),a_(".rv-prologue"),st.to(".rv-asterisk",{rotation:140,scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:1.2}}),st.to(".rv-word-ribbon span",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:.7}}),st.set(".rv-room-1,.rv-room-2",{autoAlpha:0,rotationY:72,xPercent:r?20:12}),st.set(".rv-room-rail>div:first-child",{opacity:1}),ra(".rv-rooms-pin",5,r).fromTo(".rv-room-0 .rv-room-photo img",{scale:1.12,xPercent:2},{scale:1,xPercent:-2,duration:1.3,ease:"none"},0).to(".rv-room-rail>div:nth-child(1) i",{scaleX:1,duration:1.3,ease:"none"},0).to(".rv-room-0",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},1).to(".rv-room-1",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},1.2).fromTo(".rv-room-1 .rv-room-photo img",{scale:1.18,xPercent:3},{scale:1,xPercent:-2,duration:2,ease:"none"},1.2).to(".rv-room-rail>div:nth-child(1)",{opacity:.35,duration:.4},1.3).to(".rv-room-rail>div:nth-child(2)",{opacity:1,duration:.4},1.5).to(".rv-room-rail>div:nth-child(2) i",{scaleX:1,duration:1.2,ease:"none"},2).to(".rv-room-1",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},3).to(".rv-room-2",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},3.2).fromTo(".rv-room-2 .rv-room-photo img",{scale:1.15,yPercent:3},{scale:1,yPercent:-2,duration:1.8,ease:"none"},3.2).to(".rv-room-rail>div:nth-child(2)",{opacity:.35,duration:.4},3.3).to(".rv-room-rail>div:nth-child(3)",{opacity:1,duration:.4},3.5).to(".rv-room-rail>div:nth-child(3) i",{scaleX:1,duration:1,ease:"none"},4),st.set(".rv-postcard-border,.rv-keepsake-note",{autoAlpha:0}),ra(".rv-keepsake-pin",3.8,r).fromTo(".rv-fragment",{x:i=>(i%3-1)*(r?130:280),y:i=>(Math.floor(i/3)-1)*(r?100:200),z:i=>i%2?-160:180,rotation:i=>(i-4)*9,rotationY:i=>(i%3-1)*30,scale:.75,autoAlpha:.55},{x:0,y:0,z:0,rotation:0,rotationY:0,scale:1,autoAlpha:1,stagger:{each:.1,from:"center"},duration:1.5,ease:"power2.inOut"},0).to(".rv-postcard",{rotation:0,scale:1.02,duration:2.2},0).to(".rv-keepsake-heading",{y:-30,autoAlpha:r?.7:.35,duration:1.3},1).to(".rv-postcard-border",{autoAlpha:1,rotation:0,scale:1.02,duration:.6},2.1).fromTo(".rv-keepsake-note",{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.6},2.6).to(".rv-postcard,.rv-postcard-border",{y:r?-10:-35,rotation:-3,duration:.8},3),st.fromTo(".rv-contact-circle",{scale:.7,y:130},{scale:1.2,y:-80,scrollTrigger:{trigger:".rv-contact",start:"top bottom",end:"bottom bottom",scrub:1}}),st.from(".rv-contact h2",{yPercent:60,rotationX:40,opacity:.2,stagger:.1,scrollTrigger:{trigger:".rv-contact",start:"top 85%",end:"top 10%",scrub:1}})}function XS(r){st.set(".tv-ascent-copy",{autoAlpha:0});let t={value:1200},e=document.querySelector(".tv-altitude strong");ra(".tv-hero",3.8,r).to(".tv-hero-copy .im-word",{yPercent:-120,rotationX:60,autoAlpha:0,stagger:.1,duration:.8},.1).to(".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",{y:-30,autoAlpha:0,duration:.5},.1).to(".tv-ridge-plane img",{scale:1.16,transformOrigin:"65% 25%",duration:1.5},0).to(".tv-ridge-plane",{yPercent:u=>(u-2)*(r?12:18),rotationY:u=>(u-2)*-9,rotationZ:u=>(u-2)*2,z:u=>Math.abs(u-2)*-90,xPercent:u=>(u-2)*8,duration:1.8,ease:"power2.inOut"},1).to(".tv-hero-shade",{backgroundColor:"#08162077",duration:1.4},1).to(".tv-grid",{autoAlpha:0,duration:.5},1).to(".tv-vertical-rule",{yPercent:-60,duration:3.8,ease:"none"},0).to(t,{value:4860,duration:3.8,ease:"none",onUpdate:()=>{e.textContent=Math.round(t.value).toLocaleString("en-US")}},0).fromTo(".tv-ascent-copy",{autoAlpha:0,y:70},{autoAlpha:1,y:0,duration:.8},1.8).to(".tv-ascent-copy",{autoAlpha:0,y:-35,duration:.5},3.3),a_(".tv-belief"),st.to(".tv-belief-compass",{rotation:110,scrollTrigger:{trigger:".tv-belief",start:"top bottom",end:"bottom top",scrub:1}}),st.set(".tv-route-notes article:not(:first-child)",{autoAlpha:0,y:20}),st.set(".tv-map-fold",{rotationY:u=>u%2?-35:35});let i=document.querySelector(".tv-route-line"),s=document.querySelector(".tv-route-traveller"),o={progress:0},a=i.getTotalLength(),l=()=>{let u=i.getPointAtLength(o.progress*a);st.set(s,{x:u.x,y:u.y})};l(),ra(".tv-route-pin",4,r).to(".tv-map-fold",{rotationY:0,stagger:.1,duration:1.2,ease:"power2.inOut"},0).fromTo(".tv-fold-map",{rotationX:43,rotationZ:-20,scale:.8},{rotationX:0,rotationZ:0,scale:1,duration:1.8},0).fromTo(".tv-map-drawing",{autoAlpha:0},{autoAlpha:1,duration:.6},.8).fromTo(".tv-contour-lines path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.1,ease:"none"},.6).fromTo(".tv-route-line",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:2.4,ease:"none"},1.2).to(o,{progress:1,duration:2.4,ease:"none",onUpdate:l},1.2).to(".tv-route-progress i",{scaleX:1,duration:3.8,ease:"none"},0).to(".tv-route-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1.2).to(".tv-route-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".tv-route-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.5).to(".tv-route-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.85).to(".tv-fold-map",{rotationX:r?8:15,rotationZ:8,scale:1.05,duration:.8},3.2),st.set(".tv-summit-copy,.tv-summit-stamp",{autoAlpha:0}),ra(".tv-crossing-pin",5,r).fromTo(".tv-ice-plane img",{scale:1.2,transformOrigin:"50% 35%"},{scale:1,transformOrigin:"50% 35%",duration:1.5},0).to(".tv-crossing-heading",{y:-50,autoAlpha:0,duration:.7},.8).to(".tv-crossing-details",{autoAlpha:0,duration:.5},1).to(".tv-crossing-aperture i",{scaleY:0,duration:1},.7).to(".tv-ice-plane",{xPercent:u=>u<3?-850:u>3?850:0,yPercent:u=>u===3?-135:u%2?14:-14,rotationY:u=>u<3?-35:u>3?35:0,rotationX:u=>u===3?35:0,autoAlpha:0,stagger:{each:.13,from:"center"},duration:1.7,ease:"power2.inOut"},1.4).to(".tv-summit-photo img",{scale:1,duration:3.8,ease:"none"},.6).to(".tv-crossing-shade",{backgroundColor:"#0d182b22",duration:1},2).fromTo(".tv-summit-copy",{autoAlpha:0,y:75},{autoAlpha:1,y:0,duration:.8},3).fromTo(".tv-summit-stamp",{autoAlpha:0,scale:.7,rotation:-35},{autoAlpha:1,scale:1,rotation:0,duration:.9},3.5).to(".tv-summit-copy h2",{y:-25,duration:1.2},3.7).to(".tv-summit-stamp svg",{rotation:30,duration:1.5},3.5),st.from(".tv-contact h2",{x:-80,rotation:-4,opacity:.2,scrollTrigger:{trigger:".tv-contact",start:"top 85%",end:"top 10%",scrub:1}}),st.from(".tv-end-altitude i",{y:100,rotation:-35,scrollTrigger:{trigger:".tv-contact",start:"top 80%",end:"bottom bottom",scrub:1}})}function l_(r,t){r==="reverie"?WS(t):r==="traverse"&&XS(t)}var us=(r,t,e)=>st.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*t*(e?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function Sp(r){st.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),st.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function qS(r,t){st.set(".pl-descent-copy",{autoAlpha:0});let e={value:0},n=document.querySelector(".pl-depth-number");us(".pl-hero",3.8,t).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:t?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(e,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(e.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:t?17:7,xPercent:t?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),Sp(".pl-intro"),st.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),us(".pl-survey-pin",3.6,t).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:t?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),st.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),us(".pl-life-pin",4,t).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),st.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function YS(r,t){st.set(".he-unfold-copy",{autoAlpha:0}),us(".he-hero",3.8,t).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:t?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:t?15:6,yPercent:t?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),Sp(".he-prologue"),st.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),st.set(".he-totality",{autoAlpha:0}),us(".he-eclipse-pin",4.5,t).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=st.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});st.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{st.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),st.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),st.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),st.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function ZS(r){st.set(".af-through-copy",{autoAlpha:0}),us(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),Sp(".af-intro"),us(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),st.set(".af-select-frame",{autoAlpha:0}),us(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),st.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function c_(r,t,e){r==="pelagic"&&t?qS(t,e):r==="heliograph"&&t?YS(t,e):r==="afterimage"&&ZS(e)}var $S=[{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]},{id:"reverie",cover:"/motion/reverie-cover.jpg",number:"08",name:"Reverie",category:"ART / IMAGINED PLACES",headline:"Leave the ordinary behind.",description:"A passage through the impossible. Step inside a desert portal, turn the walls of a dream gallery, and piece together a place that only exists in your imagination.",color:"#b94d37",background:"#f0debd",tags:["Portal passage","Rotating dream gallery","Image assembly"],chapters:["The threshold","A different way of seeing","Rooms without rules","A place to keep"]},{id:"traverse",cover:"/motion/traverse-cover.jpg",number:"09",name:"Traverse",category:"EXPEDITION / ALPINE",headline:"A little further.",description:"An alpine story you move through. A fractured mountain panorama, a folding expedition map, and a glacier passage that opens onto the first light of a summit.",color:"#e1fc80",background:"#101e27",tags:["Fractured panorama","Folding terrain","Glacier-to-summit passage"],chapters:["Beyond the familiar","Find your own line","Through the blue","The long way up"]},{id:"nullsignal",name:"Null Signal",number:"10",headline:"A world between the lines.",color:"#c7eaa4",background:"#080b0b",cover:"/motion/nullsignal-cover.jpg",category:"ASCII / GLYPH OBSERVATORY",description:"A cabinet of character-built curiosities. Disassemble an ASCII armillary instrument, travel through a vaulted arcade, and draw a message from a scattered constellation.",tags:["ASCII sculpture","Depth-projected arcade","Character assembly"],chapters:["Anatomy of a signal","Inside the transmission","A message reassembled","Stay curious"]},{id:"bitquest",name:"Bitquest",number:"11",headline:"Beyond the edge of the map.",color:"#f0bb87",background:"#202940",cover:"/motion/bitquest-cover.jpg",category:"PIXEL ART / IMAGINED PLACES",description:"A hand-coded pixel expedition. Approach a floating clock-tower town, ride a moonlit railway, and unfold a seven-island atlas with a tiny traveler following your scroll.",tags:["Pixel town","Parallax railway","Unfolding island map"],chapters:["The skyward city","The midnight railway","An atlas of elsewhere","Make room for wonder"]}];function h_(r){return $S.some(t=>t.id===r)}st.registerPlugin(jt);jt.config({ignoreMobileResize:!0});var Ll=document.querySelector(".mt-page"),Je=Ll?.dataset.template,Nl=r=>{parent!==window&&parent.postMessage(r,"*")};function JS(r,t){st.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),st.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(t?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:t?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:t?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),st.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),st.fromTo(".ae-reveal em",{x:t?30:150},{x:t?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),st.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),st.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),st.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(t?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:t?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),st.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),st.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),st.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function KS(r,t){st.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(t?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(t?75:130):t?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),st.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(t?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=st.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(t?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{st.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),st.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),st.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),st.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(t?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),st.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),st.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function QS(r,t){st.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,st.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(t?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:t?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),st.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),st.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),st.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),st.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(t?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:t?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:t?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),st.from(".fl-season",{rotationY:t?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),st.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),st.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),st.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function jS(r,t){st.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),st.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(t?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:t?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:t?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),st.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),st.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),st.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(t?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:t?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),st.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(t?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),st.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),st.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),st.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),st.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),Nl({type:"motion-back",id:Je})),r.key==="Tab"){let t=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===t.at(-1)?(r.preventDefault(),Nl({type:"motion-focus",id:Je,direction:"next"})):r.shiftKey&&document.activeElement===t[0]&&(r.preventDefault(),Nl({type:"motion-focus",id:Je,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(Ll&&h_(Je)){let r=st.matchMedia(),t=-1;Promise.all([document.fonts.ready,...Array.from(Ll.querySelectorAll("img[data-critical]")).map(e=>e.decode().catch(()=>{}))]).then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},e=>{let n=!!e.conditions?.reduce,i=!!e.conditions?.mobile;Ll.classList.toggle("mt-reduced",n);let s=Ll.querySelector(".mt-scene,.ns-scene"),o=s?Je==="pelagic"||Je==="heliograph"?new Fu(s,Je,n):new Nu(s,Je,n):void 0,a=d=>o?.render(d),l=Je==="nullsignal"||Je==="bitquest"?M0(n):void 0;n?o&&(o.pose.bloom=1,o.render(0)):(st.ticker.add(a),Je==="aether"&&o?JS(o,i):Je==="offscript"&&o?KS(o,i):Je==="floraison"&&o?QS(o,i):Je==="monolith"&&o?jS(o,i):Je==="reverie"||Je==="traverse"?l_(Je,i):Je!=="nullsignal"&&Je!=="bitquest"&&c_(Je,o,i),st.utils.toArray(".mt-reveal").forEach(d=>st.from(d,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:d,start:"top 85%",end:"top 30%",scrub:.8}})),st.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let c=jt.create({start:0,end:"max",onUpdate:d=>{st.set(".mt-progress i",{scaleX:d.progress}),Math.abs(t-d.progress)>.005&&(t=d.progress,Nl({type:"motion-progress",id:Je,progress:d.progress}))}}),h=!1,u=()=>{h||(h=!0,l?.(),st.ticker.remove(a),o?.dispose(),c.kill())};return window.addEventListener("pagehide",u,{once:!0}),requestAnimationFrame(()=>{jt.refresh(),document.documentElement.dataset.motionReady="true",Nl({type:"motion-ready",id:Je})}),()=>{u(),window.removeEventListener("pagehide",u)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
/*! Bundled license information:

gsap/gsap-core.js:
  (*!
   * GSAP 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/CSSPlugin.js:
  (*!
   * CSSPlugin 3.14.2
   * https://gsap.com
   *
   * Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/Observer.js:
  (*!
   * Observer 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

gsap/ScrollTrigger.js:
  (*!
   * ScrollTrigger 3.14.2
   * https://gsap.com
   *
   * @license Copyright 2008-2025, GreenSock. All rights reserved.
   * Subject to the terms at https://gsap.com/standard-license
   * @author: Jack Doyle, jack@greensock.com
  *)

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
