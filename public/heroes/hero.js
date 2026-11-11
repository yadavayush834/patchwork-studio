"use strict";(()=>{var Jr=Object.defineProperty;var tn=(a,t,e)=>t in a?Jr(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e;var U=(a,t,e)=>tn(a,typeof t!="symbol"?t+"":t,e);function gt(a){if(a===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return a}function Ui(a,t){a.prototype=Object.create(t.prototype),a.prototype.constructor=a,a.__proto__=t}/*!
 * GSAP 3.14.2
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var it={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Wt={duration:.5,overwrite:!1,delay:0},ei,X,E,lt=1e8,z=1/lt,We=Math.PI*2,en=We/4,rn=0,Vi=Math.sqrt,nn=Math.cos,sn=Math.sin,Y=function(t){return typeof t=="string"},L=function(t){return typeof t=="function"},yt=function(t){return typeof t=="number"},Pe=function(t){return typeof t>"u"},pt=function(t){return typeof t=="object"},et=function(t){return t!==!1},ii=function(){return typeof window<"u"},ge=function(t){return L(t)||Y(t)},Yi=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},j=Array.isArray,on=/random\([^)]+\)/g,an=/,\s*/g,Di=/(?:-?\.?\d|\.)+/gi,ri=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Lt=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,qe=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,ni=/[+-]=-?[.\d]+/,hn=/[^,'"\[\]\s]+/gi,ln=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,F,ut,Ge,si,st={},be={},Wi,Gi=function(t){return(be=Gt(t,st))&&Q},Ce=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},he=function(t,e){return!e&&console.warn(t)},Xi=function(t,e){return t&&(st[t]=e)&&be&&(be[t]=e)||st},le=function(){return 0},cn={suppressEvents:!0,isStart:!0,kill:!1},xe={suppressEvents:!0,kill:!1},fn={suppressEvents:!0},oi={},kt=[],Xe={},$i,J={},Be={},Fi=30,ye=[],ai="",hi=function(t){var e=t[0],i,r;if(pt(e)||L(e)||(t=[t]),!(i=(e._gsap||{}).harness)){for(r=ye.length;r--&&!ye[r].targetTest(e););i=ye[r]}for(r=t.length;r--;)t[r]&&(t[r]._gsap||(t[r]._gsap=new ui(t[r],i)))||t.splice(r,1);return t},Tt=function(t){return t._gsap||hi(ct(t))[0]._gsap},li=function(t,e,i){return(i=t[e])&&L(i)?t[e]():Pe(i)&&t.getAttribute&&t.getAttribute(e)||i},K=function(t,e){return(t=t.split(",")).forEach(e)||t},q=function(t){return Math.round(t*1e5)/1e5||0},D=function(t){return Math.round(t*1e7)/1e7||0},qt=function(t,e){var i=e.charAt(0),r=parseFloat(e.substr(2));return t=parseFloat(t),i==="+"?t+r:i==="-"?t-r:i==="*"?t*r:t/r},un=function(t,e){for(var i=e.length,r=0;t.indexOf(e[r])<0&&++r<i;);return r<i},we=function(){var t=kt.length,e=kt.slice(0),i,r;for(Xe={},kt.length=0,i=0;i<t;i++)r=e[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},ci=function(t){return!!(t._initted||t._startAt||t.add)},ji=function(t,e,i,r){kt.length&&!X&&we(),t.render(e,i,r||!!(X&&e<0&&ci(t))),kt.length&&!X&&we()},Qi=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(hn).length<2?e:Y(t)?t.trim():t},Ki=function(t){return t},ot=function(t,e){for(var i in e)i in t||(t[i]=e[i]);return t},dn=function(t){return function(e,i){for(var r in i)r in e||r==="duration"&&t||r==="ease"||(e[r]=i[r])}},Gt=function(t,e){for(var i in e)t[i]=e[i];return t},Ii=function a(t,e){for(var i in e)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(t[i]=pt(e[i])?a(t[i]||(t[i]={}),e[i]):e[i]);return t},ke=function(t,e){var i={},r;for(r in t)r in e||(i[r]=t[r]);return i},se=function(t){var e=t.parent||F,i=t.keyframes?dn(j(t.keyframes)):ot;if(et(t.inherit))for(;e;)i(t,e.vars.defaults),e=e.parent||e._dp;return t},pn=function(t,e){for(var i=t.length,r=i===e.length;r&&i--&&t[i]===e[i];);return i<0},Zi=function(t,e,i,r,n){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t[r],o;if(n)for(o=e[n];s&&s[n]>o;)s=s._prev;return s?(e._next=s._next,s._next=e):(e._next=t[i],t[i]=e),e._next?e._next._prev=e:t[r]=e,e._prev=s,e.parent=e._dp=t,e},Me=function(t,e,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var n=e._prev,s=e._next;n?n._next=s:t[i]===e&&(t[i]=s),s?s._prev=n:t[r]===e&&(t[r]=n),e._next=e._prev=e.parent=null},St=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Dt=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var i=t;i;)i._dirty=1,i=i.parent;return t},_n=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},$e=function(t,e,i,r){return t._startAt&&(X?t._startAt.revert(xe):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,r))},mn=function a(t){return!t||t._ts&&a(t.parent)},Li=function(t){return t._repeat?Xt(t._tTime,t=t.duration()+t._rDelay)*t:0},Xt=function(t,e){var i=Math.floor(t=D(t/e));return t&&i===t?i-1:i},Te=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},Ae=function(t){return t._end=D(t._start+(t._tDur/Math.abs(t._ts||t._rts||z)||0))},Oe=function(t,e){var i=t._dp;return i&&i.smoothChildTiming&&t._ts&&(t._start=D(i._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),Ae(t),i._dirty||Dt(i,t)),t},Ji=function(t,e){var i;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(i=Te(t.rawTime(),e),(!e._dur||ue(0,e.totalDuration(),i)-e._tTime>z)&&e.render(i,!0)),Dt(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(i=t;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;t._zTime=-z}},dt=function(t,e,i,r){return e.parent&&St(e),e._start=D((yt(i)?i:i||t!==F?ht(t,i,e):t._time)+e._delay),e._end=D(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),Zi(t,e,"_first","_last",t._sort?"_start":0),je(e)||(t._recent=e),r||Ji(t,e),t._ts<0&&Oe(t,t._tTime),t},tr=function(t,e){return(st.ScrollTrigger||Ce("scrollTrigger",e))&&st.ScrollTrigger.create(e,t)},er=function(t,e,i,r,n){if(_i(t,e,n),!t._initted)return 1;if(!i&&t._pt&&!X&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&$i!==tt.frame)return kt.push(t),t._lazy=[n,r],1},gn=function a(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||a(e))},je=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},xn=function(t,e,i,r){var n=t.ratio,s=e<0||!e&&(!t._start&&gn(t)&&!(!t._initted&&je(t))||(t._ts<0||t._dp._ts<0)&&!je(t))?0:1,o=t._rDelay,h=0,l,c,u;if(o&&t._repeat&&(h=ue(0,t._tDur,e),c=Xt(h,o),t._yoyo&&c&1&&(s=1-s),c!==Xt(t._tTime,o)&&(n=1-s,t.vars.repeatRefresh&&t._initted&&t.invalidate())),s!==n||X||r||t._zTime===z||!e&&t._zTime){if(!t._initted&&er(t,e,r,i,h))return;for(u=t._zTime,t._zTime=e||(i?z:0),i||(i=e&&!u),t.ratio=s,t._from&&(s=1-s),t._time=0,t._tTime=h,l=t._pt;l;)l.r(s,l.d),l=l._next;e<0&&$e(t,e,i,!0),t._onUpdate&&!i&&nt(t,"onUpdate"),h&&t._repeat&&!i&&t.parent&&nt(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===s&&(s&&St(t,1),!i&&!X&&(nt(t,s?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},yn=function(t,e,i){var r;if(i>e)for(r=t._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>e)return r;r=r._next}else for(r=t._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<e)return r;r=r._prev}},$t=function(t,e,i,r){var n=t._repeat,s=D(e)||0,o=t._tTime/t._tDur;return o&&!r&&(t._time*=s/t._dur),t._dur=s,t._tDur=n?n<0?1e10:D(s*(n+1)+t._rDelay*n):s,o>0&&!r&&Oe(t,t._tTime=t._tDur*o),t.parent&&Ae(t),i||Dt(t.parent,t),t},qi=function(t){return t instanceof G?Dt(t):$t(t,t._dur)},vn={_start:0,endTime:le,totalDuration:le},ht=function a(t,e,i){var r=t.labels,n=t._recent||vn,s=t.duration()>=lt?n.endTime(!1):t._dur,o,h,l;return Y(e)&&(isNaN(e)||e in r)?(h=e.charAt(0),l=e.substr(-1)==="%",o=e.indexOf("="),h==="<"||h===">"?(o>=0&&(e=e.replace(/=/,"")),(h==="<"?n._start:n.endTime(n._repeat>=0))+(parseFloat(e.substr(1))||0)*(l?(o<0?n:i).totalDuration()/100:1)):o<0?(e in r||(r[e]=s),r[e]):(h=parseFloat(e.charAt(o-1)+e.substr(o+1)),l&&i&&(h=h/100*(j(i)?i[0]:i).totalDuration()),o>1?a(t,e.substr(0,o-1),i)+h:s+h)):e==null?s:+e},oe=function(t,e,i){var r=yt(e[1]),n=(r?2:1)+(t<2?0:1),s=e[n],o,h;if(r&&(s.duration=e[1]),s.parent=i,t){for(o=s,h=i;h&&!("immediateRender"in o);)o=h.vars.defaults||{},h=et(h.vars.inherit)&&h.parent;s.immediateRender=et(o.immediateRender),t<2?s.runBackwards=1:s.startAt=e[n-1]}return new N(e[0],s,e[n+1])},Pt=function(t,e){return t||t===0?e(t):e},ue=function(t,e,i){return i<t?t:i>e?e:i},$=function(t,e){return!Y(t)||!(e=ln.exec(t))?"":e[1]},bn=function(t,e,i){return Pt(i,function(r){return ue(t,e,r)})},Qe=[].slice,ir=function(t,e){return t&&pt(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&pt(t[0]))&&!t.nodeType&&t!==ut},wn=function(t,e,i){return i===void 0&&(i=[]),t.forEach(function(r){var n;return Y(r)&&!e||ir(r,1)?(n=i).push.apply(n,ct(r)):i.push(r)})||i},ct=function(t,e,i){return E&&!e&&E.selector?E.selector(t):Y(t)&&!i&&(Ge||!jt())?Qe.call((e||si).querySelectorAll(t),0):j(t)?wn(t,i):ir(t)?Qe.call(t,0):t?[t]:[]},Ke=function(t){return t=ct(t)[0]||he("Invalid scope")||{},function(e){var i=t.current||t.nativeElement||t;return ct(e,i.querySelectorAll?i:i===t?he("Invalid scope")||si.createElement("div"):t)}},rr=function(t){return t.sort(function(){return .5-Math.random()})},nr=function(t){if(L(t))return t;var e=pt(t)?t:{each:t},i=Ft(e.ease),r=e.from||0,n=parseFloat(e.base)||0,s={},o=r>0&&r<1,h=isNaN(r)||o,l=e.axis,c=r,u=r;return Y(r)?c=u={center:.5,edges:.5,end:1}[r]||0:!o&&h&&(c=r[0],u=r[1]),function(d,p,m){var f=(m||e).length,_=s[f],g,y,v,b,x,k,T,S,w;if(!_){if(w=e.grid==="auto"?0:(e.grid||[1,lt])[1],!w){for(T=-lt;T<(T=m[w++].getBoundingClientRect().left)&&w<f;);w<f&&w--}for(_=s[f]=[],g=h?Math.min(w,f)*c-.5:r%w,y=w===lt?0:h?f*u/w-.5:r/w|0,T=0,S=lt,k=0;k<f;k++)v=k%w-g,b=y-(k/w|0),_[k]=x=l?Math.abs(l==="y"?b:v):Vi(v*v+b*b),x>T&&(T=x),x<S&&(S=x);r==="random"&&rr(_),_.max=T-S,_.min=S,_.v=f=(parseFloat(e.amount)||parseFloat(e.each)*(w>f?f-1:l?l==="y"?f/w:w:Math.max(w,f/w))||0)*(r==="edges"?-1:1),_.b=f<0?n-f:n,_.u=$(e.amount||e.each)||0,i=i&&f<0?dr(i):i}return f=(_[d]-_.min)/_.max||0,D(_.b+(i?i(f):f)*_.v)+_.u}},Ze=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(i){var r=D(Math.round(parseFloat(i)/t)*t*e);return(r-r%1)/e+(yt(i)?0:$(i))}},sr=function(t,e){var i=j(t),r,n;return!i&&pt(t)&&(r=i=t.radius||lt,t.values?(t=ct(t.values),(n=!yt(t[0]))&&(r*=r)):t=Ze(t.increment)),Pt(e,i?L(t)?function(s){return n=t(s),Math.abs(n-s)<=r?n:s}:function(s){for(var o=parseFloat(n?s.x:s),h=parseFloat(n?s.y:0),l=lt,c=0,u=t.length,d,p;u--;)n?(d=t[u].x-o,p=t[u].y-h,d=d*d+p*p):d=Math.abs(t[u]-o),d<l&&(l=d,c=u);return c=!r||l<=r?t[c]:s,n||c===s||yt(s)?c:c+$(s)}:Ze(t))},or=function(t,e,i,r){return Pt(j(t)?!e:i===!0?!!(i=0):!r,function(){return j(t)?t[~~(Math.random()*t.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((t-i/2+Math.random()*(e-t+i*.99))/i)*i*r)/r})},kn=function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return function(r){return e.reduce(function(n,s){return s(n)},r)}},Tn=function(t,e){return function(i){return t(parseFloat(i))+(e||$(i))}},Sn=function(t,e,i){return hr(t,e,0,1,i)},ar=function(t,e,i){return Pt(i,function(r){return t[~~e(r)]})},Pn=function a(t,e,i){var r=e-t;return j(t)?ar(t,a(0,t.length),e):Pt(i,function(n){return(r+(n-t)%r)%r+t})},Cn=function a(t,e,i){var r=e-t,n=r*2;return j(t)?ar(t,a(0,t.length-1),e):Pt(i,function(s){return s=(n+(s-t)%n)%n||0,t+(s>r?n-s:s)})},Qt=function(t){return t.replace(on,function(e){var i=e.indexOf("[")+1,r=e.substring(i||7,i?e.indexOf("]"):e.length-1).split(an);return or(i?r:+r[0],i?0:+r[1],+r[2]||1e-5)})},hr=function(t,e,i,r,n){var s=e-t,o=r-i;return Pt(n,function(h){return i+((h-t)/s*o||0)})},Mn=function a(t,e,i,r){var n=isNaN(t+e)?0:function(p){return(1-p)*t+p*e};if(!n){var s=Y(t),o={},h,l,c,u,d;if(i===!0&&(r=1)&&(i=null),s)t={p:t},e={p:e};else if(j(t)&&!j(e)){for(c=[],u=t.length,d=u-2,l=1;l<u;l++)c.push(a(t[l-1],t[l]));u--,n=function(m){m*=u;var f=Math.min(d,~~m);return c[f](m-f)},i=e}else r||(t=Gt(j(t)?[]:{},t));if(!c){for(h in e)di.call(o,t,h,"get",e[h]);n=function(m){return xi(m,o)||(s?t.p:t)}}}return Pt(i,n)},Bi=function(t,e,i){var r=t.labels,n=lt,s,o,h;for(s in r)o=r[s]-e,o<0==!!i&&o&&n>(o=Math.abs(o))&&(h=s,n=o);return h},nt=function(t,e,i){var r=t.vars,n=r[e],s=E,o=t._ctx,h,l,c;if(n)return h=r[e+"Params"],l=r.callbackScope||t,i&&kt.length&&we(),o&&(E=o),c=h?n.apply(l,h):n.call(l),E=s,c},re=function(t){return St(t),t.scrollTrigger&&t.scrollTrigger.kill(!!X),t.progress()<1&&nt(t,"onInterrupt"),t},Yt,lr=[],cr=function(t){if(t)if(t=!t.name&&t.default||t,ii()||t.headless){var e=t.name,i=L(t),r=e&&!i&&t.init?function(){this._props=[]}:t,n={init:le,render:xi,add:di,kill:Yn,modifier:Vn,rawVars:0},s={targetTest:0,get:0,getSetter:Re,aliases:{},register:0};if(jt(),t!==r){if(J[e])return;ot(r,ot(ke(t,n),s)),Gt(r.prototype,Gt(n,ke(t,s))),J[r.prop=e]=r,t.targetTest&&(ye.push(r),oi[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}Xi(e,r),t.register&&t.register(Q,r,Z)}else lr.push(t)},R=255,ne={aqua:[0,R,R],lime:[0,R,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,R],navy:[0,0,128],white:[R,R,R],olive:[128,128,0],yellow:[R,R,0],orange:[R,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[R,0,0],pink:[R,192,203],cyan:[0,R,R],transparent:[R,R,R,0]},Ne=function(t,e,i){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(i-e)*t*6:t<.5?i:t*3<2?e+(i-e)*(2/3-t)*6:e)*R+.5|0},fr=function(t,e,i){var r=t?yt(t)?[t>>16,t>>8&R,t&R]:0:ne.black,n,s,o,h,l,c,u,d,p,m;if(!r){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),ne[t])r=ne[t];else if(t.charAt(0)==="#"){if(t.length<6&&(n=t.charAt(1),s=t.charAt(2),o=t.charAt(3),t="#"+n+n+s+s+o+o+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return r=parseInt(t.substr(1,6),16),[r>>16,r>>8&R,r&R,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),r=[t>>16,t>>8&R,t&R]}else if(t.substr(0,3)==="hsl"){if(r=m=t.match(Di),!e)h=+r[0]%360/360,l=+r[1]/100,c=+r[2]/100,s=c<=.5?c*(l+1):c+l-c*l,n=c*2-s,r.length>3&&(r[3]*=1),r[0]=Ne(h+1/3,n,s),r[1]=Ne(h,n,s),r[2]=Ne(h-1/3,n,s);else if(~t.indexOf("="))return r=t.match(ri),i&&r.length<4&&(r[3]=1),r}else r=t.match(Di)||ne.transparent;r=r.map(Number)}return e&&!m&&(n=r[0]/R,s=r[1]/R,o=r[2]/R,u=Math.max(n,s,o),d=Math.min(n,s,o),c=(u+d)/2,u===d?h=l=0:(p=u-d,l=c>.5?p/(2-u-d):p/(u+d),h=u===n?(s-o)/p+(s<o?6:0):u===s?(o-n)/p+2:(n-s)/p+4,h*=60),r[0]=~~(h+.5),r[1]=~~(l*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},ur=function(t){var e=[],i=[],r=-1;return t.split(xt).forEach(function(n){var s=n.match(Lt)||[];e.push.apply(e,s),i.push(r+=s.length+1)}),e.c=i,e},Ni=function(t,e,i){var r="",n=(t+r).match(xt),s=e?"hsla(":"rgba(",o=0,h,l,c,u;if(!n)return t;if(n=n.map(function(d){return(d=fr(d,e,1))&&s+(e?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),i&&(c=ur(t),h=i.c,h.join(r)!==c.c.join(r)))for(l=t.replace(xt,"1").split(Lt),u=l.length-1;o<u;o++)r+=l[o]+(~h.indexOf(o)?n.shift()||s+"0,0,0,0)":(c.length?c:n.length?n:i).shift());if(!l)for(l=t.split(xt),u=l.length-1;o<u;o++)r+=l[o]+n[o];return r+l[u]},xt=(function(){var a="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in ne)a+="|"+t+"\\b";return new RegExp(a+")","gi")})(),An=/hsl[a]?\(/,fi=function(t){var e=t.join(" "),i;if(xt.lastIndex=0,xt.test(e))return i=An.test(e),t[1]=Ni(t[1],i),t[0]=Ni(t[0],i,ur(t[1])),!0},ce,tt=(function(){var a=Date.now,t=500,e=33,i=a(),r=i,n=1e3/240,s=n,o=[],h,l,c,u,d,p,m=function f(_){var g=a()-r,y=_===!0,v,b,x,k;if((g>t||g<0)&&(i+=g-e),r+=g,x=r-i,v=x-s,(v>0||y)&&(k=++u.frame,d=x-u.time*1e3,u.time=x=x/1e3,s+=v+(v>=n?4:n-v),b=1),y||(h=l(f)),b)for(p=0;p<o.length;p++)o[p](x,d,k,_)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return d/(1e3/(_||60))},wake:function(){Wi&&(!Ge&&ii()&&(ut=Ge=window,si=ut.document||{},st.gsap=Q,(ut.gsapVersions||(ut.gsapVersions=[])).push(Q.version),Gi(be||ut.GreenSockGlobals||!ut.gsap&&ut||{}),lr.forEach(cr)),c=typeof requestAnimationFrame<"u"&&requestAnimationFrame,h&&u.sleep(),l=c||function(_){return setTimeout(_,s-u.time*1e3+1|0)},ce=1,m(2))},sleep:function(){(c?cancelAnimationFrame:clearTimeout)(h),ce=0,l=le},lagSmoothing:function(_,g){t=_||1/0,e=Math.min(g||33,t)},fps:function(_){n=1e3/(_||240),s=u.time*1e3+n},add:function(_,g,y){var v=g?function(b,x,k,T){_(b,x,k,T),u.remove(v)}:_;return u.remove(_),o[y?"unshift":"push"](v),jt(),v},remove:function(_,g){~(g=o.indexOf(_))&&o.splice(g,1)&&p>=g&&p--},_listeners:o},u})(),jt=function(){return!ce&&tt.wake()},C={},On=/^[\d.\-M][\d.\-,\s]/,Rn=/["']/g,zn=function(t){for(var e={},i=t.substr(1,t.length-3).split(":"),r=i[0],n=1,s=i.length,o,h,l;n<s;n++)h=i[n],o=n!==s-1?h.lastIndexOf(","):h.length,l=h.substr(0,o),e[r]=isNaN(l)?l.replace(Rn,"").trim():+l,r=h.substr(o+1).trim();return e},En=function(t){var e=t.indexOf("(")+1,i=t.indexOf(")"),r=t.indexOf("(",e);return t.substring(e,~r&&r<i?t.indexOf(")",i+1):i)},Dn=function(t){var e=(t+"").split("("),i=C[e[0]];return i&&e.length>1&&i.config?i.config.apply(null,~t.indexOf("{")?[zn(e[1])]:En(t).split(",").map(Qi)):C._CE&&On.test(t)?C._CE("",t):i},dr=function(t){return function(e){return 1-t(1-e)}},pr=function a(t,e){for(var i=t._first,r;i;)i instanceof G?a(i,e):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==e&&(i.timeline?a(i.timeline,e):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=e)),i=i._next},Ft=function(t,e){return t&&(L(t)?t:C[t]||Dn(t))||e},Bt=function(t,e,i,r){i===void 0&&(i=function(h){return 1-e(1-h)}),r===void 0&&(r=function(h){return h<.5?e(h*2)/2:1-e((1-h)*2)/2});var n={easeIn:e,easeOut:i,easeInOut:r},s;return K(t,function(o){C[o]=st[o]=n,C[s=o.toLowerCase()]=i;for(var h in n)C[s+(h==="easeIn"?".in":h==="easeOut"?".out":".inOut")]=C[o+"."+h]=n[h]}),n},_r=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},He=function a(t,e,i){var r=e>=1?e:1,n=(i||(t?.3:.45))/(e<1?e:1),s=n/We*(Math.asin(1/r)||0),o=function(c){return c===1?1:r*Math.pow(2,-10*c)*sn((c-s)*n)+1},h=t==="out"?o:t==="in"?function(l){return 1-o(1-l)}:_r(o);return n=We/n,h.config=function(l,c){return a(t,l,c)},h},Ue=function a(t,e){e===void 0&&(e=1.70158);var i=function(s){return s?--s*s*((e+1)*s+e)+1:0},r=t==="out"?i:t==="in"?function(n){return 1-i(1-n)}:_r(i);return r.config=function(n){return a(t,n)},r};K("Linear,Quad,Cubic,Quart,Quint,Strong",function(a,t){var e=t<5?t+1:t;Bt(a+",Power"+(e-1),t?function(i){return Math.pow(i,e)}:function(i){return i},function(i){return 1-Math.pow(1-i,e)},function(i){return i<.5?Math.pow(i*2,e)/2:1-Math.pow((1-i)*2,e)/2})});C.Linear.easeNone=C.none=C.Linear.easeIn;Bt("Elastic",He("in"),He("out"),He());(function(a,t){var e=1/t,i=2*e,r=2.5*e,n=function(o){return o<e?a*o*o:o<i?a*Math.pow(o-1.5/t,2)+.75:o<r?a*(o-=2.25/t)*o+.9375:a*Math.pow(o-2.625/t,2)+.984375};Bt("Bounce",function(s){return 1-n(1-s)},n)})(7.5625,2.75);Bt("Expo",function(a){return Math.pow(2,10*(a-1))*a+a*a*a*a*a*a*(1-a)});Bt("Circ",function(a){return-(Vi(1-a*a)-1)});Bt("Sine",function(a){return a===1?1:-nn(a*en)+1});Bt("Back",Ue("in"),Ue("out"),Ue());C.SteppedEase=C.steps=st.SteppedEase={config:function(t,e){t===void 0&&(t=1);var i=1/t,r=t+(e?0:1),n=e?1:0,s=1-z;return function(o){return((r*ue(0,s,o)|0)+n)*i}}};Wt.ease=C["quad.out"];K("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(a){return ai+=a+","+a+"Params,"});var ui=function(t,e){this.id=rn++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:li,this.set=e?e.getSetter:Re},fe=(function(){function a(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,$t(this,+e.duration,1,1),this.data=e.data,E&&(this._ctx=E,E.data.push(this)),ce||tt.wake()}var t=a.prototype;return t.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},t.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},t.totalDuration=function(i){return arguments.length?(this._dirty=0,$t(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(i,r){if(jt(),!arguments.length)return this._tTime;var n=this._dp;if(n&&n.smoothChildTiming&&this._ts){for(Oe(this,i),!n._dp||n.parent||Ji(n,this);n&&n.parent;)n.parent._time!==n._start+(n._ts>=0?n._tTime/n._ts:(n.totalDuration()-n._tTime)/-n._ts)&&n.totalTime(n._tTime,!0),n=n.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&dt(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===z||!this._initted&&this._dur&&i||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),ji(this,i,r)),this},t.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+Li(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},t.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+Li(this),r):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(i,r){var n=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*n,r):this._repeat?Xt(this._tTime,n)+1:1},t.timeScale=function(i,r){if(!arguments.length)return this._rts===-z?0:this._rts;if(this._rts===i)return this;var n=this.parent&&this._ts?Te(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-z?0:this._rts,this.totalTime(ue(-Math.abs(this._delay),this.totalDuration(),n),r!==!1),Ae(this),_n(this)},t.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(jt(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==z&&(this._tTime-=z)))),this):this._ps},t.startTime=function(i){if(arguments.length){this._start=D(i);var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&dt(r,this,this._start-this._delay),this}return this._start},t.endTime=function(i){return this._start+(et(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Te(r.rawTime(i),this):this._tTime:this._tTime},t.revert=function(i){i===void 0&&(i=fn);var r=X;return X=i,ci(this)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),X=r,this},t.globalTime=function(i){for(var r=this,n=arguments.length?i:r.rawTime();r;)n=r._start+n/(Math.abs(r._ts)||1),r=r._dp;return!this.parent&&this._sat?this._sat.globalTime(i):n},t.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,qi(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,qi(this),r?this.time(r):this}return this._rDelay},t.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},t.seek=function(i,r){return this.totalTime(ht(this,i),et(r))},t.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,et(r)),this._dur||(this._zTime=-z),this},t.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},t.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},t.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-z:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-z,this},t.isActive=function(){var i=this.parent||this._dp,r=this._start,n;return!!(!i||this._ts&&this._initted&&i.isActive()&&(n=i.rawTime(!0))>=r&&n<this.endTime(!0)-z)},t.eventCallback=function(i,r,n){var s=this.vars;return arguments.length>1?(r?(s[i]=r,n&&(s[i+"Params"]=n),i==="onUpdate"&&(this._onUpdate=r)):delete s[i],this):s[i]},t.then=function(i){var r=this,n=r._prom;return new Promise(function(s){var o=L(i)?i:Ki,h=function(){var c=r.then;r.then=null,n&&n(),L(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=c),s(o),r.then=c};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?h():r._prom=h})},t.kill=function(){re(this)},a})();ot(fe.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-z,_prom:0,_ps:!1,_rts:1});var G=(function(a){Ui(t,a);function t(i,r){var n;return i===void 0&&(i={}),n=a.call(this,i)||this,n.labels={},n.smoothChildTiming=!!i.smoothChildTiming,n.autoRemoveChildren=!!i.autoRemoveChildren,n._sort=et(i.sortChildren),F&&dt(i.parent||F,gt(n),r),i.reversed&&n.reverse(),i.paused&&n.paused(!0),i.scrollTrigger&&tr(gt(n),i.scrollTrigger),n}var e=t.prototype;return e.to=function(r,n,s){return oe(0,arguments,this),this},e.from=function(r,n,s){return oe(1,arguments,this),this},e.fromTo=function(r,n,s,o){return oe(2,arguments,this),this},e.set=function(r,n,s){return n.duration=0,n.parent=this,se(n).repeatDelay||(n.repeat=0),n.immediateRender=!!n.immediateRender,new N(r,n,ht(this,s),1),this},e.call=function(r,n,s){return dt(this,N.delayedCall(0,r,n),s)},e.staggerTo=function(r,n,s,o,h,l,c){return s.duration=n,s.stagger=s.stagger||o,s.onComplete=l,s.onCompleteParams=c,s.parent=this,new N(r,s,ht(this,h)),this},e.staggerFrom=function(r,n,s,o,h,l,c){return s.runBackwards=1,se(s).immediateRender=et(s.immediateRender),this.staggerTo(r,n,s,o,h,l,c)},e.staggerFromTo=function(r,n,s,o,h,l,c,u){return o.startAt=s,se(o).immediateRender=et(o.immediateRender),this.staggerTo(r,n,o,h,l,c,u)},e.render=function(r,n,s){var o=this._time,h=this._dirty?this.totalDuration():this._tDur,l=this._dur,c=r<=0?0:D(r),u=this._zTime<0!=r<0&&(this._initted||!l),d,p,m,f,_,g,y,v,b,x,k,T;if(this!==F&&c>h&&r>=0&&(c=h),c!==this._tTime||s||u){if(o!==this._time&&l&&(c+=this._time-o,r+=this._time-o),d=c,b=this._start,v=this._ts,g=!v,u&&(l||(o=this._zTime),(r||!n)&&(this._zTime=r)),this._repeat){if(k=this._yoyo,_=l+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(_*100+r,n,s);if(d=D(c%_),c===h?(f=this._repeat,d=l):(x=D(c/_),f=~~x,f&&f===x&&(d=l,f--),d>l&&(d=l)),x=Xt(this._tTime,_),!o&&this._tTime&&x!==f&&this._tTime-x*_-this._dur<=0&&(x=f),k&&f&1&&(d=l-d,T=1),f!==x&&!this._lock){var S=k&&x&1,w=S===(k&&f&1);if(f<x&&(S=!S),o=S?0:c%l?l:c,this._lock=1,this.render(o||(T?0:D(f*_)),n,!l)._lock=0,this._tTime=c,!n&&this.parent&&nt(this,"onRepeat"),this.vars.repeatRefresh&&!T&&(this.invalidate()._lock=1,x=f),o&&o!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,h=this._tDur,w&&(this._lock=2,o=S?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!T&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;pr(this,T)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=yn(this,D(o),D(d)),y&&(c-=d-(d=y._start))),this._tTime=c,this._time=d,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,o=0),!o&&c&&l&&!n&&!x&&(nt(this,"onStart"),this._tTime!==c))return this;if(d>=o&&r>=0)for(p=this._first;p;){if(m=p._next,(p._act||d>=p._start)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,n,s);if(p.render(p._ts>0?(d-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(d-p._start)*p._ts,n,s),d!==this._time||!this._ts&&!g){y=0,m&&(c+=this._zTime=-z);break}}p=m}else{p=this._last;for(var P=r<0?r:d;p;){if(m=p._prev,(p._act||P<=p._end)&&p._ts&&y!==p){if(p.parent!==this)return this.render(r,n,s);if(p.render(p._ts>0?(P-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(P-p._start)*p._ts,n,s||X&&ci(p)),d!==this._time||!this._ts&&!g){y=0,m&&(c+=this._zTime=P?-z:z);break}}p=m}}if(y&&!n&&(this.pause(),y.render(d>=o?0:-z)._zTime=d>=o?1:-1,this._ts))return this._start=b,Ae(this),this.render(r,n,s);this._onUpdate&&!n&&nt(this,"onUpdate",!0),(c===h&&this._tTime>=this.totalDuration()||!c&&o)&&(b===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((r||!l)&&(c===h&&this._ts>0||!c&&this._ts<0)&&St(this,1),!n&&!(r<0&&!o)&&(c||o||!h)&&(nt(this,c===h&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<h&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(r,n){var s=this;if(yt(n)||(n=ht(this,n,r)),!(r instanceof fe)){if(j(r))return r.forEach(function(o){return s.add(o,n)}),this;if(Y(r))return this.addLabel(r,n);if(L(r))r=N.delayedCall(0,r);else return this}return this!==r?dt(this,r,n):this},e.getChildren=function(r,n,s,o){r===void 0&&(r=!0),n===void 0&&(n=!0),s===void 0&&(s=!0),o===void 0&&(o=-lt);for(var h=[],l=this._first;l;)l._start>=o&&(l instanceof N?n&&h.push(l):(s&&h.push(l),r&&h.push.apply(h,l.getChildren(!0,n,s)))),l=l._next;return h},e.getById=function(r){for(var n=this.getChildren(1,1,1),s=n.length;s--;)if(n[s].vars.id===r)return n[s]},e.remove=function(r){return Y(r)?this.removeLabel(r):L(r)?this.killTweensOf(r):(r.parent===this&&Me(this,r),r===this._recent&&(this._recent=this._last),Dt(this))},e.totalTime=function(r,n){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=D(tt.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),a.prototype.totalTime.call(this,r,n),this._forcing=0,this):this._tTime},e.addLabel=function(r,n){return this.labels[r]=ht(this,n),this},e.removeLabel=function(r){return delete this.labels[r],this},e.addPause=function(r,n,s){var o=N.delayedCall(0,n||le,s);return o.data="isPause",this._hasPause=1,dt(this,o,ht(this,r))},e.removePause=function(r){var n=this._first;for(r=ht(this,r);n;)n._start===r&&n.data==="isPause"&&St(n),n=n._next},e.killTweensOf=function(r,n,s){for(var o=this.getTweensOf(r,s),h=o.length;h--;)wt!==o[h]&&o[h].kill(r,n);return this},e.getTweensOf=function(r,n){for(var s=[],o=ct(r),h=this._first,l=yt(n),c;h;)h instanceof N?un(h._targets,o)&&(l?(!wt||h._initted&&h._ts)&&h.globalTime(0)<=n&&h.globalTime(h.totalDuration())>n:!n||h.isActive())&&s.push(h):(c=h.getTweensOf(o,n)).length&&s.push.apply(s,c),h=h._next;return s},e.tweenTo=function(r,n){n=n||{};var s=this,o=ht(s,r),h=n,l=h.startAt,c=h.onStart,u=h.onStartParams,d=h.immediateRender,p,m=N.to(s,ot({ease:n.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:n.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale())||z,onStart:function(){if(s.pause(),!p){var _=n.duration||Math.abs((o-(l&&"time"in l?l.time:s._time))/s.timeScale());m._dur!==_&&$t(m,_,0,1).render(m._time,!0,!0),p=1}c&&c.apply(m,u||[])}},n));return d?m.render(0):m},e.tweenFromTo=function(r,n,s){return this.tweenTo(n,ot({startAt:{time:ht(this,r)}},s))},e.recent=function(){return this._recent},e.nextLabel=function(r){return r===void 0&&(r=this._time),Bi(this,ht(this,r))},e.previousLabel=function(r){return r===void 0&&(r=this._time),Bi(this,ht(this,r),1)},e.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+z)},e.shiftChildren=function(r,n,s){s===void 0&&(s=0);var o=this._first,h=this.labels,l;for(r=D(r);o;)o._start>=s&&(o._start+=r,o._end+=r),o=o._next;if(n)for(l in h)h[l]>=s&&(h[l]+=r);return Dt(this)},e.invalidate=function(r){var n=this._first;for(this._lock=0;n;)n.invalidate(r),n=n._next;return a.prototype.invalidate.call(this,r)},e.clear=function(r){r===void 0&&(r=!0);for(var n=this._first,s;n;)s=n._next,this.remove(n),n=s;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),Dt(this)},e.totalDuration=function(r){var n=0,s=this,o=s._last,h=lt,l,c,u;if(arguments.length)return s.timeScale((s._repeat<0?s.duration():s.totalDuration())/(s.reversed()?-r:r));if(s._dirty){for(u=s.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),c=o._start,c>h&&s._sort&&o._ts&&!s._lock?(s._lock=1,dt(s,o,c-o._delay,1)._lock=0):h=c,c<0&&o._ts&&(n-=c,(!u&&!s._dp||u&&u.smoothChildTiming)&&(s._start+=D(c/s._ts),s._time-=c,s._tTime-=c),s.shiftChildren(-c,!1,-1/0),h=0),o._end>n&&o._ts&&(n=o._end),o=l;$t(s,s===F&&s._time>n?s._time:n,1,1),s._dirty=0}return s._tDur},t.updateRoot=function(r){if(F._ts&&(ji(F,Te(r,F)),$i=tt.frame),tt.frame>=Fi){Fi+=it.autoSleep||120;var n=F._first;if((!n||!n._ts)&&it.autoSleep&&tt._listeners.length<2){for(;n&&!n._ts;)n=n._next;n||tt.sleep()}}},t})(fe);ot(G.prototype,{_lock:0,_hasPause:0,_forcing:0});var Fn=function(t,e,i,r,n,s,o){var h=new Z(this._pt,t,e,0,1,gi,null,n),l=0,c=0,u,d,p,m,f,_,g,y;for(h.b=i,h.e=r,i+="",r+="",(g=~r.indexOf("random("))&&(r=Qt(r)),s&&(y=[i,r],s(y,t,e),i=y[0],r=y[1]),d=i.match(qe)||[];u=qe.exec(r);)m=u[0],f=r.substring(l,u.index),p?p=(p+1)%5:f.substr(-5)==="rgba("&&(p=1),m!==d[c++]&&(_=parseFloat(d[c-1])||0,h._pt={_next:h._pt,p:f||c===1?f:",",s:_,c:m.charAt(1)==="="?qt(_,m)-_:parseFloat(m)-_,m:p&&p<4?Math.round:0},l=qe.lastIndex);return h.c=l<r.length?r.substring(l,r.length):"",h.fp=o,(ni.test(r)||g)&&(h.e=0),this._pt=h,h},di=function(t,e,i,r,n,s,o,h,l,c){L(r)&&(r=r(n||0,t,s));var u=t[e],d=i!=="get"?i:L(u)?l?t[e.indexOf("set")||!L(t["get"+e.substr(3)])?e:"get"+e.substr(3)](l):t[e]():u,p=L(u)?l?Nn:xr:mi,m;if(Y(r)&&(~r.indexOf("random(")&&(r=Qt(r)),r.charAt(1)==="="&&(m=qt(d,r)+($(d)||0),(m||m===0)&&(r=m))),!c||d!==r||Je)return!isNaN(d*r)&&r!==""?(m=new Z(this._pt,t,e,+d||0,r-(d||0),typeof u=="boolean"?Un:yr,0,p),l&&(m.fp=l),o&&m.modifier(o,this,t),this._pt=m):(!u&&!(e in t)&&Ce(e,r),Fn.call(this,t,e,d,r,p,h||it.stringFilter,l))},In=function(t,e,i,r,n){if(L(t)&&(t=ae(t,n,e,i,r)),!pt(t)||t.style&&t.nodeType||j(t)||Yi(t))return Y(t)?ae(t,n,e,i,r):t;var s={},o;for(o in t)s[o]=ae(t[o],n,e,i,r);return s},pi=function(t,e,i,r,n,s){var o,h,l,c;if(J[t]&&(o=new J[t]).init(n,o.rawVars?e[t]:In(e[t],r,n,s,i),i,r,s)!==!1&&(i._pt=h=new Z(i._pt,n,t,0,1,o.render,o,0,o.priority),i!==Yt))for(l=i._ptLookup[i._targets.indexOf(n)],c=o._props.length;c--;)l[o._props[c]]=h;return o},wt,Je,_i=function a(t,e,i){var r=t.vars,n=r.ease,s=r.startAt,o=r.immediateRender,h=r.lazy,l=r.onUpdate,c=r.runBackwards,u=r.yoyoEase,d=r.keyframes,p=r.autoRevert,m=t._dur,f=t._startAt,_=t._targets,g=t.parent,y=g&&g.data==="nested"?g.vars.targets:_,v=t._overwrite==="auto"&&!ei,b=t.timeline,x,k,T,S,w,P,O,M,A,V,B,H,W;if(b&&(!d||!n)&&(n="none"),t._ease=Ft(n,Wt.ease),t._yEase=u?dr(Ft(u===!0?n:u,Wt.ease)):0,u&&t._yoyo&&!t._repeat&&(u=t._yEase,t._yEase=t._ease,t._ease=u),t._from=!b&&!!r.runBackwards,!b||d&&!r.stagger){if(M=_[0]?Tt(_[0]).harness:0,H=M&&r[M.prop],x=ke(r,oi),f&&(f._zTime<0&&f.progress(1),e<0&&c&&o&&!p?f.render(-1,!0):f.revert(c&&m?xe:cn),f._lazy=0),s){if(St(t._startAt=N.set(_,ot({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!f&&et(h),startAt:null,delay:0,onUpdate:l&&function(){return nt(t,"onUpdate")},stagger:0},s))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(X||!o&&!p)&&t._startAt.revert(xe),o&&m&&e<=0&&i<=0){e&&(t._zTime=e);return}}else if(c&&m&&!f){if(e&&(o=!1),T=ot({overwrite:!1,data:"isFromStart",lazy:o&&!f&&et(h),immediateRender:o,stagger:0,parent:g},x),H&&(T[M.prop]=H),St(t._startAt=N.set(_,T)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(X?t._startAt.revert(xe):t._startAt.render(-1,!0)),t._zTime=e,!o)a(t._startAt,z,z);else if(!e)return}for(t._pt=t._ptCache=0,h=m&&et(h)||h&&!m,k=0;k<_.length;k++){if(w=_[k],O=w._gsap||hi(_)[k]._gsap,t._ptLookup[k]=V={},Xe[O.id]&&kt.length&&we(),B=y===_?k:y.indexOf(w),M&&(A=new M).init(w,H||x,t,B,y)!==!1&&(t._pt=S=new Z(t._pt,w,A.name,0,1,A.render,A,0,A.priority),A._props.forEach(function(ft){V[ft]=S}),A.priority&&(P=1)),!M||H)for(T in x)J[T]&&(A=pi(T,x,t,B,w,y))?A.priority&&(P=1):V[T]=S=di.call(t,w,T,"get",x[T],B,y,0,r.stringFilter);t._op&&t._op[k]&&t.kill(w,t._op[k]),v&&t._pt&&(wt=t,F.killTweensOf(w,V,t.globalTime(e)),W=!t.parent,wt=0),t._pt&&h&&(Xe[O.id]=1)}P&&yi(t),t._onInit&&t._onInit(t)}t._onUpdate=l,t._initted=(!t._op||t._pt)&&!W,d&&e<=0&&b.render(lt,!0,!0)},Ln=function(t,e,i,r,n,s,o,h){var l=(t._pt&&t._ptCache||(t._ptCache={}))[e],c,u,d,p;if(!l)for(l=t._ptCache[e]=[],d=t._ptLookup,p=t._targets.length;p--;){if(c=d[p][e],c&&c.d&&c.d._pt)for(c=c.d._pt;c&&c.p!==e&&c.fp!==e;)c=c._next;if(!c)return Je=1,t.vars[e]="+=0",_i(t,o),Je=0,h?he(e+" not eligible for reset"):1;l.push(c)}for(p=l.length;p--;)u=l[p],c=u._pt||u,c.s=(r||r===0)&&!n?r:c.s+(r||0)+s*c.c,c.c=i-c.s,u.e&&(u.e=q(i)+$(u.e)),u.b&&(u.b=c.s+$(u.b))},qn=function(t,e){var i=t[0]?Tt(t[0]).harness:0,r=i&&i.aliases,n,s,o,h;if(!r)return e;n=Gt({},e);for(s in r)if(s in n)for(h=r[s].split(","),o=h.length;o--;)n[h[o]]=n[s];return n},Bn=function(t,e,i,r){var n=e.ease||r||"power1.inOut",s,o;if(j(e))o=i[t]||(i[t]=[]),e.forEach(function(h,l){return o.push({t:l/(e.length-1)*100,v:h,e:n})});else for(s in e)o=i[s]||(i[s]=[]),s==="ease"||o.push({t:parseFloat(t),v:e[s],e:n})},ae=function(t,e,i,r,n){return L(t)?t.call(e,i,r,n):Y(t)&&~t.indexOf("random(")?Qt(t):t},mr=ai+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",gr={};K(mr+",id,stagger,delay,duration,paused,scrollTrigger",function(a){return gr[a]=1});var N=(function(a){Ui(t,a);function t(i,r,n,s){var o;typeof r=="number"&&(n.duration=r,r=n,n=null),o=a.call(this,s?r:se(r))||this;var h=o.vars,l=h.duration,c=h.delay,u=h.immediateRender,d=h.stagger,p=h.overwrite,m=h.keyframes,f=h.defaults,_=h.scrollTrigger,g=h.yoyoEase,y=r.parent||F,v=(j(i)||Yi(i)?yt(i[0]):"length"in r)?[i]:ct(i),b,x,k,T,S,w,P,O;if(o._targets=v.length?hi(v):he("GSAP target "+i+" not found. https://gsap.com",!it.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=p,m||d||ge(l)||ge(c)){if(r=o.vars,b=o.timeline=new G({data:"nested",defaults:f||{},targets:y&&y.data==="nested"?y.vars.targets:v}),b.kill(),b.parent=b._dp=gt(o),b._start=0,d||ge(l)||ge(c)){if(T=v.length,P=d&&nr(d),pt(d))for(S in d)~mr.indexOf(S)&&(O||(O={}),O[S]=d[S]);for(x=0;x<T;x++)k=ke(r,gr),k.stagger=0,g&&(k.yoyoEase=g),O&&Gt(k,O),w=v[x],k.duration=+ae(l,gt(o),x,w,v),k.delay=(+ae(c,gt(o),x,w,v)||0)-o._delay,!d&&T===1&&k.delay&&(o._delay=c=k.delay,o._start+=c,k.delay=0),b.to(w,k,P?P(x,w,v):0),b._ease=C.none;b.duration()?l=c=0:o.timeline=0}else if(m){se(ot(b.vars.defaults,{ease:"none"})),b._ease=Ft(m.ease||r.ease||"none");var M=0,A,V,B;if(j(m))m.forEach(function(H){return b.to(v,H,">")}),b.duration();else{k={};for(S in m)S==="ease"||S==="easeEach"||Bn(S,m[S],k,m.easeEach);for(S in k)for(A=k[S].sort(function(H,W){return H.t-W.t}),M=0,x=0;x<A.length;x++)V=A[x],B={ease:V.e,duration:(V.t-(x?A[x-1].t:0))/100*l},B[S]=V.v,b.to(v,B,M),M+=B.duration;b.duration()<l&&b.to({},{duration:l-b.duration()})}}l||o.duration(l=b.duration())}else o.timeline=0;return p===!0&&!ei&&(wt=gt(o),F.killTweensOf(v),wt=0),dt(y,gt(o),n),r.reversed&&o.reverse(),r.paused&&o.paused(!0),(u||!l&&!m&&o._start===D(y._time)&&et(u)&&mn(gt(o))&&y.data!=="nested")&&(o._tTime=-z,o.render(Math.max(0,-c)||0)),_&&tr(gt(o),_),o}var e=t.prototype;return e.render=function(r,n,s){var o=this._time,h=this._tDur,l=this._dur,c=r<0,u=r>h-z&&!c?h:r<z?0:r,d,p,m,f,_,g,y,v,b;if(!l)xn(this,r,n,s);else if(u!==this._tTime||!r||s||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c||this._lazy){if(d=u,v=this.timeline,this._repeat){if(f=l+this._rDelay,this._repeat<-1&&c)return this.totalTime(f*100+r,n,s);if(d=D(u%f),u===h?(m=this._repeat,d=l):(_=D(u/f),m=~~_,m&&m===_?(d=l,m--):d>l&&(d=l)),g=this._yoyo&&m&1,g&&(b=this._yEase,d=l-d),_=Xt(this._tTime,f),d===o&&!s&&this._initted&&m===_)return this._tTime=u,this;m!==_&&(v&&this._yEase&&pr(v,g),this.vars.repeatRefresh&&!g&&!this._lock&&d!==f&&this._initted&&(this._lock=s=1,this.render(D(f*m),!0).invalidate()._lock=0))}if(!this._initted){if(er(this,c?r:d,s,n,u))return this._tTime=0,this;if(o!==this._time&&!(s&&this.vars.repeatRefresh&&m!==_))return this;if(l!==this._dur)return this.render(r,n,s)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(b||this._ease)(d/l),this._from&&(this.ratio=y=1-y),!o&&u&&!n&&!_&&(nt(this,"onStart"),this._tTime!==u))return this;for(p=this._pt;p;)p.r(y,p.d),p=p._next;v&&v.render(r<0?r:v._dur*v._ease(d/this._dur),n,s)||this._startAt&&(this._zTime=r),this._onUpdate&&!n&&(c&&$e(this,r,n,s),nt(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!n&&this.parent&&nt(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(c&&!this._onUpdate&&$e(this,r,!0,!0),(r||!l)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&St(this,1),!n&&!(c&&!o)&&(u||o||g)&&(nt(this,u===h?"onComplete":"onReverseComplete",!0),this._prom&&!(u<h&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),a.prototype.invalidate.call(this,r)},e.resetTo=function(r,n,s,o,h){ce||tt.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),c;return this._initted||_i(this,l),c=this._ease(l/this._dur),Ln(this,r,n,s,o,c,l,h)?this.resetTo(r,n,s,o,1):(Oe(this,0),this.parent||Zi(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(r,n){if(n===void 0&&(n="all"),!r&&(!n||n==="all"))return this._lazy=this._pt=0,this.parent?re(this):this.scrollTrigger&&this.scrollTrigger.kill(!!X),this;if(this.timeline){var s=this.timeline.totalDuration();return this.timeline.killTweensOf(r,n,wt&&wt.vars.overwrite!==!0)._first||re(this),this.parent&&s!==this.timeline.totalDuration()&&$t(this,this._dur*this.timeline._tDur/s,0,1),this}var o=this._targets,h=r?ct(r):o,l=this._ptLookup,c=this._pt,u,d,p,m,f,_,g;if((!n||n==="all")&&pn(o,h))return n==="all"&&(this._pt=0),re(this);for(u=this._op=this._op||[],n!=="all"&&(Y(n)&&(f={},K(n,function(y){return f[y]=1}),n=f),n=qn(o,n)),g=o.length;g--;)if(~h.indexOf(o[g])){d=l[g],n==="all"?(u[g]=n,m=d,p={}):(p=u[g]=u[g]||{},m=n);for(f in m)_=d&&d[f],_&&((!("kill"in _.d)||_.d.kill(f)===!0)&&Me(this,_,"_pt"),delete d[f]),p!=="all"&&(p[f]=1)}return this._initted&&!this._pt&&c&&re(this),this},t.to=function(r,n){return new t(r,n,arguments[2])},t.from=function(r,n){return oe(1,arguments)},t.delayedCall=function(r,n,s,o){return new t(n,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:n,onReverseComplete:n,onCompleteParams:s,onReverseCompleteParams:s,callbackScope:o})},t.fromTo=function(r,n,s){return oe(2,arguments)},t.set=function(r,n){return n.duration=0,n.repeatDelay||(n.repeat=0),new t(r,n)},t.killTweensOf=function(r,n,s){return F.killTweensOf(r,n,s)},t})(fe);ot(N.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});K("staggerTo,staggerFrom,staggerFromTo",function(a){N[a]=function(){var t=new G,e=Qe.call(arguments,0);return e.splice(a==="staggerFromTo"?5:4,0,0),t[a].apply(t,e)}});var mi=function(t,e,i){return t[e]=i},xr=function(t,e,i){return t[e](i)},Nn=function(t,e,i,r){return t[e](r.fp,i)},Hn=function(t,e,i){return t.setAttribute(e,i)},Re=function(t,e){return L(t[e])?xr:Pe(t[e])&&t.setAttribute?Hn:mi},yr=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Un=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},gi=function(t,e){var i=e._pt,r="";if(!t&&e.b)r=e.b;else if(t===1&&e.e)r=e.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*t):Math.round((i.s+i.c*t)*1e4)/1e4)+r,i=i._next;r+=e.c}e.set(e.t,e.p,r,e)},xi=function(t,e){for(var i=e._pt;i;)i.r(t,i.d),i=i._next},Vn=function(t,e,i,r){for(var n=this._pt,s;n;)s=n._next,n.p===r&&n.modifier(t,e,i),n=s},Yn=function(t){for(var e=this._pt,i,r;e;)r=e._next,e.p===t&&!e.op||e.op===t?Me(this,e,"_pt"):e.dep||(i=1),e=r;return!i},Wn=function(t,e,i,r){r.mSet(t,e,r.m.call(r.tween,i,r.mt),r)},yi=function(t){for(var e=t._pt,i,r,n,s;e;){for(i=e._next,r=n;r&&r.pr>e.pr;)r=r._next;(e._prev=r?r._prev:s)?e._prev._next=e:n=e,(e._next=r)?r._prev=e:s=e,e=i}t._pt=n},Z=(function(){function a(e,i,r,n,s,o,h,l,c){this.t=i,this.s=n,this.c=s,this.p=r,this.r=o||yr,this.d=h||this,this.set=l||mi,this.pr=c||0,this._next=e,e&&(e._prev=this)}var t=a.prototype;return t.modifier=function(i,r,n){this.mSet=this.mSet||this.set,this.set=Wn,this.m=i,this.mt=n,this.tween=r},a})();K(ai+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(a){return oi[a]=1});st.TweenMax=st.TweenLite=N;st.TimelineLite=st.TimelineMax=G;F=new G({sortChildren:!1,defaults:Wt,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});it.stringFilter=fi;var It=[],ve={},Gn=[],Hi=0,Xn=0,Ve=function(t){return(ve[t]||Gn).map(function(e){return e()})},ti=function(){var t=Date.now(),e=[];t-Hi>2&&(Ve("matchMediaInit"),It.forEach(function(i){var r=i.queries,n=i.conditions,s,o,h,l;for(o in r)s=ut.matchMedia(r[o]).matches,s&&(h=1),s!==n[o]&&(n[o]=s,l=1);l&&(i.revert(),h&&e.push(i))}),Ve("matchMediaRevert"),e.forEach(function(i){return i.onMatch(i,function(r){return i.add(null,r)})}),Hi=t,Ve("matchMedia"))},vr=(function(){function a(e,i){this.selector=i&&Ke(i),this.data=[],this._r=[],this.isReverted=!1,this.id=Xn++,e&&this.add(e)}var t=a.prototype;return t.add=function(i,r,n){L(i)&&(n=r,r=i,i=L);var s=this,o=function(){var l=E,c=s.selector,u;return l&&l!==s&&l.data.push(s),n&&(s.selector=Ke(n)),E=s,u=r.apply(s,arguments),L(u)&&s._r.push(u),E=l,s.selector=c,s.isReverted=!1,u};return s.last=o,i===L?o(s,function(h){return s.add(null,h)}):i?s[i]=o:o},t.ignore=function(i){var r=E;E=null,i(this),E=r},t.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof a?i.push.apply(i,r.getTweens()):r instanceof N&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(i,r){var n=this;if(i?(function(){for(var o=n.getTweens(),h=n.data.length,l;h--;)l=n.data[h],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(c){return o.splice(o.indexOf(c),1)}));for(o.map(function(c){return{g:c._dur||c._delay||c._sat&&!c._sat.vars.immediateRender?c.globalTime(0):-1/0,t:c}}).sort(function(c,u){return u.g-c.g||-1/0}).forEach(function(c){return c.t.revert(i)}),h=n.data.length;h--;)l=n.data[h],l instanceof G?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof N)&&l.revert&&l.revert(i);n._r.forEach(function(c){return c(i,n)}),n.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),r)for(var s=It.length;s--;)It[s].id===this.id&&It.splice(s,1)},t.revert=function(i){this.kill(i||{})},a})(),$n=(function(){function a(e){this.contexts=[],this.scope=e,E&&E.data.push(this)}var t=a.prototype;return t.add=function(i,r,n){pt(i)||(i={matches:i});var s=new vr(0,n||this.scope),o=s.conditions={},h,l,c;E&&!s.selector&&(s.selector=E.selector),this.contexts.push(s),r=s.add("onMatch",r),s.queries=i;for(l in i)l==="all"?c=1:(h=ut.matchMedia(i[l]),h&&(It.indexOf(s)<0&&It.push(s),(o[l]=h.matches)&&(c=1),h.addListener?h.addListener(ti):h.addEventListener("change",ti)));return c&&r(s,function(u){return s.add(null,u)}),this},t.revert=function(i){this.kill(i||{})},t.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},a})(),Se={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];e.forEach(function(r){return cr(r)})},timeline:function(t){return new G(t)},getTweensOf:function(t,e){return F.getTweensOf(t,e)},getProperty:function(t,e,i,r){Y(t)&&(t=ct(t)[0]);var n=Tt(t||{}).get,s=i?Ki:Qi;return i==="native"&&(i=""),t&&(e?s((J[e]&&J[e].get||n)(t,e,i,r)):function(o,h,l){return s((J[o]&&J[o].get||n)(t,o,h,l))})},quickSetter:function(t,e,i){if(t=ct(t),t.length>1){var r=t.map(function(c){return Q.quickSetter(c,e,i)}),n=r.length;return function(c){for(var u=n;u--;)r[u](c)}}t=t[0]||{};var s=J[e],o=Tt(t),h=o.harness&&(o.harness.aliases||{})[e]||e,l=s?function(c){var u=new s;Yt._pt=0,u.init(t,i?c+i:c,Yt,0,[t]),u.render(1,u),Yt._pt&&xi(1,Yt)}:o.set(t,h);return s?l:function(c){return l(t,h,i?c+i:c,o,1)}},quickTo:function(t,e,i){var r,n=Q.to(t,ot((r={},r[e]="+=0.1",r.paused=!0,r.stagger=0,r),i||{})),s=function(h,l,c){return n.resetTo(e,h,l,c)};return s.tween=n,s},isTweening:function(t){return F.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Ft(t.ease,Wt.ease)),Ii(Wt,t||{})},config:function(t){return Ii(it,t||{})},registerEffect:function(t){var e=t.name,i=t.effect,r=t.plugins,n=t.defaults,s=t.extendTimeline;(r||"").split(",").forEach(function(o){return o&&!J[o]&&!st[o]&&he(e+" effect requires "+o+" plugin.")}),Be[e]=function(o,h,l){return i(ct(o),ot(h||{},n),l)},s&&(G.prototype[e]=function(o,h,l){return this.add(Be[e](o,pt(h)?h:(l=h)&&{},this),l)})},registerEase:function(t,e){C[t]=Ft(e)},parseEase:function(t,e){return arguments.length?Ft(t,e):C},getById:function(t){return F.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var i=new G(t),r,n;for(i.smoothChildTiming=et(t.smoothChildTiming),F.remove(i),i._dp=0,i._time=i._tTime=F._time,r=F._first;r;)n=r._next,(e||!(!r._dur&&r instanceof N&&r.vars.onComplete===r._targets[0]))&&dt(i,r,r._start-r._delay),r=n;return dt(F,i,0),i},context:function(t,e){return t?new vr(t,e):E},matchMedia:function(t){return new $n(t)},matchMediaRefresh:function(){return It.forEach(function(t){var e=t.conditions,i,r;for(r in e)e[r]&&(e[r]=!1,i=1);i&&t.revert()})||ti()},addEventListener:function(t,e){var i=ve[t]||(ve[t]=[]);~i.indexOf(e)||i.push(e)},removeEventListener:function(t,e){var i=ve[t],r=i&&i.indexOf(e);r>=0&&i.splice(r,1)},utils:{wrap:Pn,wrapYoyo:Cn,distribute:nr,random:or,snap:sr,normalize:Sn,getUnit:$,clamp:bn,splitColor:fr,toArray:ct,selector:Ke,mapRange:hr,pipe:kn,unitize:Tn,interpolate:Mn,shuffle:rr},install:Gi,effects:Be,ticker:tt,updateRoot:G.updateRoot,plugins:J,globalTimeline:F,core:{PropTween:Z,globals:Xi,Tween:N,Timeline:G,Animation:fe,getCache:Tt,_removeLinkedListItem:Me,reverting:function(){return X},context:function(t){return t&&E&&(E.data.push(t),t._ctx=E),E},suppressOverwrites:function(t){return ei=t}}};K("to,from,fromTo,delayedCall,set,killTweensOf",function(a){return Se[a]=N[a]});tt.add(G.updateRoot);Yt=Se.to({},{duration:0});var jn=function(t,e){for(var i=t._pt;i&&i.p!==e&&i.op!==e&&i.fp!==e;)i=i._next;return i},Qn=function(t,e){var i=t._targets,r,n,s;for(r in e)for(n=i.length;n--;)s=t._ptLookup[n][r],s&&(s=s.d)&&(s._pt&&(s=jn(s,r)),s&&s.modifier&&s.modifier(e[r],t,i[n],r))},Ye=function(t,e){return{name:t,headless:1,rawVars:1,init:function(r,n,s){s._onInit=function(o){var h,l;if(Y(n)&&(h={},K(n,function(c){return h[c]=1}),n=h),e){h={};for(l in n)h[l]=e(n[l]);n=h}Qn(o,n)}}}},Q=Se.registerPlugin({name:"attr",init:function(t,e,i,r,n){var s,o,h;this.tween=i;for(s in e)h=t.getAttribute(s)||"",o=this.add(t,"setAttribute",(h||0)+"",e[s],r,n,0,0,s),o.op=s,o.b=h,this._props.push(s)},render:function(t,e){for(var i=e._pt;i;)X?i.set(i.t,i.p,i.b,i):i.r(t,i.d),i=i._next}},{name:"endArray",headless:1,init:function(t,e){for(var i=e.length;i--;)this.add(t,i,t[i]||0,e[i],0,0,0,0,0,1)}},Ye("roundProps",Ze),Ye("modifiers"),Ye("snap",sr))||Se;N.version=G.version=Q.version="3.14.2";Wi=1;ii()&&jt();var Kn=C.Power0,Zn=C.Power1,Jn=C.Power2,ts=C.Power3,es=C.Power4,is=C.Linear,rs=C.Quad,ns=C.Cubic,ss=C.Quart,os=C.Quint,as=C.Strong,hs=C.Elastic,ls=C.Back,cs=C.SteppedEase,fs=C.Bounce,us=C.Sine,ds=C.Expo,ps=C.Circ;/*!
 * CSSPlugin 3.14.2
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
*/var br,Ct,Zt,Si,Vt,_s,wr,Pi,ms=function(){return typeof window<"u"},bt={},Ut=180/Math.PI,Jt=Math.PI/180,Kt=Math.atan2,kr=1e8,Ci=/([A-Z])/g,gs=/(left|right|width|margin|padding|x)/i,xs=/[\s,\(]\S/,_t={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},bi=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},ys=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},vs=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},bs=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},ws=function(t,e){var i=e.s+e.c*t;e.set(e.t,e.p,~~(i+(i<0?-.5:.5))+e.u,e)},Rr=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},zr=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},ks=function(t,e,i){return t.style[e]=i},Ts=function(t,e,i){return t.style.setProperty(e,i)},Ss=function(t,e,i){return t._gsap[e]=i},Ps=function(t,e,i){return t._gsap.scaleX=t._gsap.scaleY=i},Cs=function(t,e,i,r,n){var s=t._gsap;s.scaleX=s.scaleY=i,s.renderTransform(n,s)},Ms=function(t,e,i,r,n){var s=t._gsap;s[e]=i,s.renderTransform(n,s)},I="transform",rt=I+"Origin",As=function a(t,e){var i=this,r=this.target,n=r.style,s=r._gsap;if(t in bt&&n){if(this.tfm=this.tfm||{},t!=="transform")t=_t[t]||t,~t.indexOf(",")?t.split(",").forEach(function(o){return i.tfm[o]=vt(r,o)}):this.tfm[t]=s.x?s[t]:vt(r,t),t===rt&&(this.tfm.zOrigin=s.zOrigin);else return _t.transform.split(",").forEach(function(o){return a.call(i,o,e)});if(this.props.indexOf(I)>=0)return;s.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(rt,e,"")),t=I}(n||e)&&this.props.push(t,e,n[t])},Er=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},Os=function(){var t=this.props,e=this.target,i=e.style,r=e._gsap,n,s;for(n=0;n<t.length;n+=3)t[n+1]?t[n+1]===2?e[t[n]](t[n+2]):e[t[n]]=t[n+2]:t[n+2]?i[t[n]]=t[n+2]:i.removeProperty(t[n].substr(0,2)==="--"?t[n]:t[n].replace(Ci,"-$1").toLowerCase());if(this.tfm){for(s in this.tfm)r[s]=this.tfm[s];r.svg&&(r.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),n=Pi(),(!n||!n.isStart)&&!i[I]&&(Er(i),r.zOrigin&&i[rt]&&(i[rt]+=" "+r.zOrigin+"px",r.zOrigin=0,r.renderTransform()),r.uncache=1)}},Dr=function(t,e){var i={target:t,props:[],revert:Os,save:As};return t._gsap||Q.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(r){return i.save(r)}),i},Fr,wi=function(t,e){var i=Ct.createElementNS?Ct.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):Ct.createElement(t);return i&&i.style?i:Ct.createElement(t)},at=function a(t,e,i){var r=getComputedStyle(t);return r[e]||r.getPropertyValue(e.replace(Ci,"-$1").toLowerCase())||r.getPropertyValue(e)||!i&&a(t,te(e)||e,1)||""},Tr="O,Moz,ms,Ms,Webkit".split(","),te=function(t,e,i){var r=e||Vt,n=r.style,s=5;if(t in n&&!i)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);s--&&!(Tr[s]+t in n););return s<0?null:(s===3?"ms":s>=0?Tr[s]:"")+t},ki=function(){ms()&&window.document&&(br=window,Ct=br.document,Zt=Ct.documentElement,Vt=wi("div")||{style:{}},_s=wi("div"),I=te(I),rt=I+"Origin",Vt.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Fr=!!te("perspective"),Pi=Q.core.reverting,Si=1)},Sr=function(t){var e=t.ownerSVGElement,i=wi("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),r=t.cloneNode(!0),n;r.style.display="block",i.appendChild(r),Zt.appendChild(i);try{n=r.getBBox()}catch{}return i.removeChild(r),Zt.removeChild(i),n},Pr=function(t,e){for(var i=e.length;i--;)if(t.hasAttribute(e[i]))return t.getAttribute(e[i])},Ir=function(t){var e,i;try{e=t.getBBox()}catch{e=Sr(t),i=1}return e&&(e.width||e.height)||i||(e=Sr(t)),e&&!e.width&&!e.x&&!e.y?{x:+Pr(t,["x","cx","x1"])||0,y:+Pr(t,["y","cy","y1"])||0,width:0,height:0}:e},Lr=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&Ir(t))},At=function(t,e){if(e){var i=t.style,r;e in bt&&e!==rt&&(e=I),i.removeProperty?(r=e.substr(0,2),(r==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),i.removeProperty(r==="--"?e:e.replace(Ci,"-$1").toLowerCase())):i.removeAttribute(e)}},Mt=function(t,e,i,r,n,s){var o=new Z(t._pt,e,i,0,1,s?zr:Rr);return t._pt=o,o.b=r,o.e=n,t._props.push(i),o},Cr={deg:1,rad:1,turn:1},Rs={grid:1,flex:1},Ot=function a(t,e,i,r){var n=parseFloat(i)||0,s=(i+"").trim().substr((n+"").length)||"px",o=Vt.style,h=gs.test(e),l=t.tagName.toLowerCase()==="svg",c=(l?"client":"offset")+(h?"Width":"Height"),u=100,d=r==="px",p=r==="%",m,f,_,g;if(r===s||!n||Cr[r]||Cr[s])return n;if(s!=="px"&&!d&&(n=a(t,e,i,"px")),g=t.getCTM&&Lr(t),(p||s==="%")&&(bt[e]||~e.indexOf("adius")))return m=g?t.getBBox()[h?"width":"height"]:t[c],q(p?n/m*u:n/100*m);if(o[h?"width":"height"]=u+(d?s:r),f=r!=="rem"&&~e.indexOf("adius")||r==="em"&&t.appendChild&&!l?t:t.parentNode,g&&(f=(t.ownerSVGElement||{}).parentNode),(!f||f===Ct||!f.appendChild)&&(f=Ct.body),_=f._gsap,_&&p&&_.width&&h&&_.time===tt.time&&!_.uncache)return q(n/_.width*u);if(p&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=u+r,m=t[c],y?t.style[e]=y:At(t,e)}else(p||s==="%")&&!Rs[at(f,"display")]&&(o.position=at(t,"position")),f===t&&(o.position="static"),f.appendChild(Vt),m=Vt[c],f.removeChild(Vt),o.position="absolute";return h&&p&&(_=Tt(f),_.time=tt.time,_.width=f[c]),q(d?m*n/u:m&&n?u/m*n:0)},vt=function(t,e,i,r){var n;return Si||ki(),e in _t&&e!=="transform"&&(e=_t[e],~e.indexOf(",")&&(e=e.split(",")[0])),bt[e]&&e!=="transform"?(n=_e(t,r),n=e!=="transformOrigin"?n[e]:n.svg?n.origin:Ee(at(t,rt))+" "+n.zOrigin+"px"):(n=t.style[e],(!n||n==="auto"||r||~(n+"").indexOf("calc("))&&(n=ze[e]&&ze[e](t,e,i)||at(t,e)||li(t,e)||(e==="opacity"?1:0))),i&&!~(n+"").trim().indexOf(" ")?Ot(t,e,n,i)+i:n},zs=function(t,e,i,r){if(!i||i==="none"){var n=te(e,t,1),s=n&&at(t,n,1);s&&s!==i?(e=n,i=s):e==="borderColor"&&(i=at(t,"borderTopColor"))}var o=new Z(this._pt,t.style,e,0,1,gi),h=0,l=0,c,u,d,p,m,f,_,g,y,v,b,x;if(o.b=i,o.e=r,i+="",r+="",r.substring(0,6)==="var(--"&&(r=at(t,r.substring(4,r.indexOf(")")))),r==="auto"&&(f=t.style[e],t.style[e]=r,r=at(t,e)||r,f?t.style[e]=f:At(t,e)),c=[i,r],fi(c),i=c[0],r=c[1],d=i.match(Lt)||[],x=r.match(Lt)||[],x.length){for(;u=Lt.exec(r);)_=u[0],y=r.substring(h,u.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),_!==(f=d[l++]||"")&&(p=parseFloat(f)||0,b=f.substr((p+"").length),_.charAt(1)==="="&&(_=qt(p,_)+b),g=parseFloat(_),v=_.substr((g+"").length),h=Lt.lastIndex-v.length,v||(v=v||it.units[e]||b,h===r.length&&(r+=v,o.e+=v)),b!==v&&(p=Ot(t,e,f,v)||0),o._pt={_next:o._pt,p:y||l===1?y:",",s:p,c:g-p,m:m&&m<4||e==="zIndex"?Math.round:0});o.c=h<r.length?r.substring(h,r.length):""}else o.r=e==="display"&&r==="none"?zr:Rr;return ni.test(r)&&(o.e=0),this._pt=o,o},Mr={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Es=function(t){var e=t.split(" "),i=e[0],r=e[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(t=i,i=r,r=t),e[0]=Mr[i]||i,e[1]=Mr[r]||r,e.join(" ")},Ds=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var i=e.t,r=i.style,n=e.u,s=i._gsap,o,h,l;if(n==="all"||n===!0)r.cssText="",h=1;else for(n=n.split(","),l=n.length;--l>-1;)o=n[l],bt[o]&&(h=1,o=o==="transformOrigin"?rt:I),At(i,o);h&&(At(i,I),s&&(s.svg&&i.removeAttribute("transform"),r.scale=r.rotate=r.translate="none",_e(i,1),s.uncache=1,Er(r)))}},ze={clearProps:function(t,e,i,r,n){if(n.data!=="isFromStart"){var s=t._pt=new Z(t._pt,e,i,0,0,Ds);return s.u=r,s.pr=-10,s.tween=n,t._props.push(i),1}}},pe=[1,0,0,1,0,0],qr={},Br=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},Ar=function(t){var e=at(t,I);return Br(e)?pe:e.substr(7).match(ri).map(q)},Mi=function(t,e){var i=t._gsap||Tt(t),r=t.style,n=Ar(t),s,o,h,l;return i.svg&&t.getAttribute("transform")?(h=t.transform.baseVal.consolidate().matrix,n=[h.a,h.b,h.c,h.d,h.e,h.f],n.join(",")==="1,0,0,1,0,0"?pe:n):(n===pe&&!t.offsetParent&&t!==Zt&&!i.svg&&(h=r.display,r.display="block",s=t.parentNode,(!s||!t.offsetParent&&!t.getBoundingClientRect().width)&&(l=1,o=t.nextElementSibling,Zt.appendChild(t)),n=Ar(t),h?r.display=h:At(t,"display"),l&&(o?s.insertBefore(t,o):s?s.appendChild(t):Zt.removeChild(t))),e&&n.length>6?[n[0],n[1],n[4],n[5],n[12],n[13]]:n)},Ti=function(t,e,i,r,n,s){var o=t._gsap,h=n||Mi(t,!0),l=o.xOrigin||0,c=o.yOrigin||0,u=o.xOffset||0,d=o.yOffset||0,p=h[0],m=h[1],f=h[2],_=h[3],g=h[4],y=h[5],v=e.split(" "),b=parseFloat(v[0])||0,x=parseFloat(v[1])||0,k,T,S,w;i?h!==pe&&(T=p*_-m*f)&&(S=b*(_/T)+x*(-f/T)+(f*y-_*g)/T,w=b*(-m/T)+x*(p/T)-(p*y-m*g)/T,b=S,x=w):(k=Ir(t),b=k.x+(~v[0].indexOf("%")?b/100*k.width:b),x=k.y+(~(v[1]||v[0]).indexOf("%")?x/100*k.height:x)),r||r!==!1&&o.smooth?(g=b-l,y=x-c,o.xOffset=u+(g*p+y*f)-g,o.yOffset=d+(g*m+y*_)-y):o.xOffset=o.yOffset=0,o.xOrigin=b,o.yOrigin=x,o.smooth=!!r,o.origin=e,o.originIsAbsolute=!!i,t.style[rt]="0px 0px",s&&(Mt(s,o,"xOrigin",l,b),Mt(s,o,"yOrigin",c,x),Mt(s,o,"xOffset",u,o.xOffset),Mt(s,o,"yOffset",d,o.yOffset)),t.setAttribute("data-svg-origin",b+" "+x)},_e=function(t,e){var i=t._gsap||new ui(t);if("x"in i&&!e&&!i.uncache)return i;var r=t.style,n=i.scaleX<0,s="px",o="deg",h=getComputedStyle(t),l=at(t,rt)||"0",c,u,d,p,m,f,_,g,y,v,b,x,k,T,S,w,P,O,M,A,V,B,H,W,ft,me,ee,ie,zt,Ei,mt,Et;return c=u=d=f=_=g=y=v=b=0,p=m=1,i.svg=!!(t.getCTM&&Lr(t)),h.translate&&((h.translate!=="none"||h.scale!=="none"||h.rotate!=="none")&&(r[I]=(h.translate!=="none"?"translate3d("+(h.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(h.rotate!=="none"?"rotate("+h.rotate+") ":"")+(h.scale!=="none"?"scale("+h.scale.split(" ").join(",")+") ":"")+(h[I]!=="none"?h[I]:"")),r.scale=r.rotate=r.translate="none"),T=Mi(t,i.svg),i.svg&&(i.uncache?(ft=t.getBBox(),l=i.xOrigin-ft.x+"px "+(i.yOrigin-ft.y)+"px",W=""):W=!e&&t.getAttribute("data-svg-origin"),Ti(t,W||l,!!W||i.originIsAbsolute,i.smooth!==!1,T)),x=i.xOrigin||0,k=i.yOrigin||0,T!==pe&&(O=T[0],M=T[1],A=T[2],V=T[3],c=B=T[4],u=H=T[5],T.length===6?(p=Math.sqrt(O*O+M*M),m=Math.sqrt(V*V+A*A),f=O||M?Kt(M,O)*Ut:0,y=A||V?Kt(A,V)*Ut+f:0,y&&(m*=Math.abs(Math.cos(y*Jt))),i.svg&&(c-=x-(x*O+k*A),u-=k-(x*M+k*V))):(Et=T[6],Ei=T[7],ee=T[8],ie=T[9],zt=T[10],mt=T[11],c=T[12],u=T[13],d=T[14],S=Kt(Et,zt),_=S*Ut,S&&(w=Math.cos(-S),P=Math.sin(-S),W=B*w+ee*P,ft=H*w+ie*P,me=Et*w+zt*P,ee=B*-P+ee*w,ie=H*-P+ie*w,zt=Et*-P+zt*w,mt=Ei*-P+mt*w,B=W,H=ft,Et=me),S=Kt(-A,zt),g=S*Ut,S&&(w=Math.cos(-S),P=Math.sin(-S),W=O*w-ee*P,ft=M*w-ie*P,me=A*w-zt*P,mt=V*P+mt*w,O=W,M=ft,A=me),S=Kt(M,O),f=S*Ut,S&&(w=Math.cos(S),P=Math.sin(S),W=O*w+M*P,ft=B*w+H*P,M=M*w-O*P,H=H*w-B*P,O=W,B=ft),_&&Math.abs(_)+Math.abs(f)>359.9&&(_=f=0,g=180-g),p=q(Math.sqrt(O*O+M*M+A*A)),m=q(Math.sqrt(H*H+Et*Et)),S=Kt(B,H),y=Math.abs(S)>2e-4?S*Ut:0,b=mt?1/(mt<0?-mt:mt):0),i.svg&&(W=t.getAttribute("transform"),i.forceCSS=t.setAttribute("transform","")||!Br(at(t,I)),W&&t.setAttribute("transform",W))),Math.abs(y)>90&&Math.abs(y)<270&&(n?(p*=-1,y+=f<=0?180:-180,f+=f<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||i.uncache,i.x=c-((i.xPercent=c&&(!e&&i.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-c)?-50:0)))?t.offsetWidth*i.xPercent/100:0)+s,i.y=u-((i.yPercent=u&&(!e&&i.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-u)?-50:0)))?t.offsetHeight*i.yPercent/100:0)+s,i.z=d+s,i.scaleX=q(p),i.scaleY=q(m),i.rotation=q(f)+o,i.rotationX=q(_)+o,i.rotationY=q(g)+o,i.skewX=y+o,i.skewY=v+o,i.transformPerspective=b+s,(i.zOrigin=parseFloat(l.split(" ")[2])||!e&&i.zOrigin||0)&&(r[rt]=Ee(l)),i.xOffset=i.yOffset=0,i.force3D=it.force3D,i.renderTransform=i.svg?Is:Fr?Nr:Fs,i.uncache=0,i},Ee=function(t){return(t=t.split(" "))[0]+" "+t[1]},vi=function(t,e,i){var r=$(e);return q(parseFloat(e)+parseFloat(Ot(t,"x",i+"px",r)))+r},Fs=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,Nr(t,e)},Nt="0deg",de="0px",Ht=") ",Nr=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,h=i.z,l=i.rotation,c=i.rotationY,u=i.rotationX,d=i.skewX,p=i.skewY,m=i.scaleX,f=i.scaleY,_=i.transformPerspective,g=i.force3D,y=i.target,v=i.zOrigin,b="",x=g==="auto"&&t&&t!==1||g===!0;if(v&&(u!==Nt||c!==Nt)){var k=parseFloat(c)*Jt,T=Math.sin(k),S=Math.cos(k),w;k=parseFloat(u)*Jt,w=Math.cos(k),s=vi(y,s,T*w*-v),o=vi(y,o,-Math.sin(k)*-v),h=vi(y,h,S*w*-v+v)}_!==de&&(b+="perspective("+_+Ht),(r||n)&&(b+="translate("+r+"%, "+n+"%) "),(x||s!==de||o!==de||h!==de)&&(b+=h!==de||x?"translate3d("+s+", "+o+", "+h+") ":"translate("+s+", "+o+Ht),l!==Nt&&(b+="rotate("+l+Ht),c!==Nt&&(b+="rotateY("+c+Ht),u!==Nt&&(b+="rotateX("+u+Ht),(d!==Nt||p!==Nt)&&(b+="skew("+d+", "+p+Ht),(m!==1||f!==1)&&(b+="scale("+m+", "+f+Ht),y.style[I]=b||"translate(0, 0)"},Is=function(t,e){var i=e||this,r=i.xPercent,n=i.yPercent,s=i.x,o=i.y,h=i.rotation,l=i.skewX,c=i.skewY,u=i.scaleX,d=i.scaleY,p=i.target,m=i.xOrigin,f=i.yOrigin,_=i.xOffset,g=i.yOffset,y=i.forceCSS,v=parseFloat(s),b=parseFloat(o),x,k,T,S,w;h=parseFloat(h),l=parseFloat(l),c=parseFloat(c),c&&(c=parseFloat(c),l+=c,h+=c),h||l?(h*=Jt,l*=Jt,x=Math.cos(h)*u,k=Math.sin(h)*u,T=Math.sin(h-l)*-d,S=Math.cos(h-l)*d,l&&(c*=Jt,w=Math.tan(l-c),w=Math.sqrt(1+w*w),T*=w,S*=w,c&&(w=Math.tan(c),w=Math.sqrt(1+w*w),x*=w,k*=w)),x=q(x),k=q(k),T=q(T),S=q(S)):(x=u,S=d,k=T=0),(v&&!~(s+"").indexOf("px")||b&&!~(o+"").indexOf("px"))&&(v=Ot(p,"x",s,"px"),b=Ot(p,"y",o,"px")),(m||f||_||g)&&(v=q(v+m-(m*x+f*T)+_),b=q(b+f-(m*k+f*S)+g)),(r||n)&&(w=p.getBBox(),v=q(v+r/100*w.width),b=q(b+n/100*w.height)),w="matrix("+x+","+k+","+T+","+S+","+v+","+b+")",p.setAttribute("transform",w),y&&(p.style[I]=w)},Ls=function(t,e,i,r,n){var s=360,o=Y(n),h=parseFloat(n)*(o&&~n.indexOf("rad")?Ut:1),l=h-r,c=r+l+"deg",u,d;return o&&(u=n.split("_")[1],u==="short"&&(l%=s,l!==l%(s/2)&&(l+=l<0?s:-s)),u==="cw"&&l<0?l=(l+s*kr)%s-~~(l/s)*s:u==="ccw"&&l>0&&(l=(l-s*kr)%s-~~(l/s)*s)),t._pt=d=new Z(t._pt,e,i,r,l,ys),d.e=c,d.u="deg",t._props.push(i),d},Or=function(t,e){for(var i in e)t[i]=e[i];return t},qs=function(t,e,i){var r=Or({},i._gsap),n="perspective,force3D,transformOrigin,svgOrigin",s=i.style,o,h,l,c,u,d,p,m;r.svg?(l=i.getAttribute("transform"),i.setAttribute("transform",""),s[I]=e,o=_e(i,1),At(i,I),i.setAttribute("transform",l)):(l=getComputedStyle(i)[I],s[I]=e,o=_e(i,1),s[I]=l);for(h in bt)l=r[h],c=o[h],l!==c&&n.indexOf(h)<0&&(p=$(l),m=$(c),u=p!==m?Ot(i,h,l,m):parseFloat(l),d=parseFloat(c),t._pt=new Z(t._pt,o,h,u,d-u,bi),t._pt.u=m||0,t._props.push(h));Or(o,r)};K("padding,margin,Width,Radius",function(a,t){var e="Top",i="Right",r="Bottom",n="Left",s=(t<3?[e,i,r,n]:[e+n,e+i,r+i,r+n]).map(function(o){return t<2?a+o:"border"+o+a});ze[t>1?"border"+a:a]=function(o,h,l,c,u){var d,p;if(arguments.length<4)return d=s.map(function(m){return vt(o,m,l)}),p=d.join(" "),p.split(d[0]).length===5?d[0]:p;d=(c+"").split(" "),p={},s.forEach(function(m,f){return p[m]=d[f]=d[f]||d[(f-1)/2|0]}),o.init(h,p,u)}});var Ai={name:"css",register:ki,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,i,r,n){var s=this._props,o=t.style,h=i.vars.startAt,l,c,u,d,p,m,f,_,g,y,v,b,x,k,T,S,w;Si||ki(),this.styles=this.styles||Dr(t),S=this.styles.props,this.tween=i;for(f in e)if(f!=="autoRound"&&(c=e[f],!(J[f]&&pi(f,e,i,r,t,n)))){if(p=typeof c,m=ze[f],p==="function"&&(c=c.call(i,r,t,n),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Qt(c)),m)m(this,t,f,c,i)&&(T=1);else if(f.substr(0,2)==="--")l=(getComputedStyle(t).getPropertyValue(f)+"").trim(),c+="",xt.lastIndex=0,xt.test(l)||(_=$(l),g=$(c),g?_!==g&&(l=Ot(t,f,l,g)+g):_&&(c+=_)),this.add(o,"setProperty",l,c,r,n,0,0,f),s.push(f),S.push(f,0,o[f]);else if(p!=="undefined"){if(h&&f in h?(l=typeof h[f]=="function"?h[f].call(i,r,t,n):h[f],Y(l)&&~l.indexOf("random(")&&(l=Qt(l)),$(l+"")||l==="auto"||(l+=it.units[f]||$(vt(t,f))||""),(l+"").charAt(1)==="="&&(l=vt(t,f))):l=vt(t,f),d=parseFloat(l),y=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),y&&(c=c.substr(2)),u=parseFloat(c),f in _t&&(f==="autoAlpha"&&(d===1&&vt(t,"visibility")==="hidden"&&u&&(d=0),S.push("visibility",0,o.visibility),Mt(this,o,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),f!=="scale"&&f!=="transform"&&(f=_t[f],~f.indexOf(",")&&(f=f.split(",")[0]))),v=f in bt,v){if(this.styles.save(f),w=c,p==="string"&&c.substring(0,6)==="var(--"){if(c=at(t,c.substring(4,c.indexOf(")"))),c.substring(0,5)==="calc("){var P=t.style.perspective;t.style.perspective=c,c=at(t,"perspective"),P?t.style.perspective=P:At(t,"perspective")}u=parseFloat(c)}if(b||(x=t._gsap,x.renderTransform&&!e.parseTransform||_e(t,e.parseTransform),k=e.smoothOrigin!==!1&&x.smooth,b=this._pt=new Z(this._pt,o,I,0,1,x.renderTransform,x,0,-1),b.dep=1),f==="scale")this._pt=new Z(this._pt,x,"scaleY",x.scaleY,(y?qt(x.scaleY,y+u):u)-x.scaleY||0,bi),this._pt.u=0,s.push("scaleY",f),f+="X";else if(f==="transformOrigin"){S.push(rt,0,o[rt]),c=Es(c),x.svg?Ti(t,c,0,k,0,this):(g=parseFloat(c.split(" ")[2])||0,g!==x.zOrigin&&Mt(this,x,"zOrigin",x.zOrigin,g),Mt(this,o,f,Ee(l),Ee(c)));continue}else if(f==="svgOrigin"){Ti(t,c,1,k,0,this);continue}else if(f in qr){Ls(this,x,f,d,y?qt(d,y+c):c);continue}else if(f==="smoothOrigin"){Mt(this,x,"smooth",x.smooth,c);continue}else if(f==="force3D"){x[f]=c;continue}else if(f==="transform"){qs(this,c,t);continue}}else f in o||(f=te(f)||f);if(v||(u||u===0)&&(d||d===0)&&!xs.test(c)&&f in o)_=(l+"").substr((d+"").length),u||(u=0),g=$(c)||(f in it.units?it.units[f]:_),_!==g&&(d=Ot(t,f,l,g)),this._pt=new Z(this._pt,v?x:o,f,d,(y?qt(d,y+u):u)-d,!v&&(g==="px"||f==="zIndex")&&e.autoRound!==!1?ws:bi),this._pt.u=g||0,v&&w!==c?(this._pt.b=l,this._pt.e=w,this._pt.r=bs):_!==g&&g!=="%"&&(this._pt.b=l,this._pt.r=vs);else if(f in o)zs.call(this,t,f,l,y?y+c:c);else if(f in t)this.add(t,f,l||t[f],y?y+c:c,r,n);else if(f!=="parseTransform"){Ce(f,c);continue}v||(f in o?S.push(f,0,o[f]):typeof t[f]=="function"?S.push(f,2,t[f]()):S.push(f,1,l||t[f])),s.push(f)}}T&&yi(this)},render:function(t,e){if(e.tween._time||!Pi())for(var i=e._pt;i;)i.r(t,i.d),i=i._next;else e.styles.revert()},get:vt,aliases:_t,getSetter:function(t,e,i){var r=_t[e];return r&&r.indexOf(",")<0&&(e=r),e in bt&&e!==rt&&(t._gsap.x||vt(t,"x"))?i&&wr===i?e==="scale"?Ps:Ss:(wr=i||{})&&(e==="scale"?Cs:Ms):t.style&&!Pe(t.style[e])?ks:~e.indexOf("-")?Ts:Re(t,e)},core:{_removeProperty:At,_getMatrix:Mi}};Q.utils.checkPrefix=te;Q.core.getStyleSaver=Dr;(function(a,t,e,i){var r=K(a+","+t+","+e,function(n){bt[n]=1});K(t,function(n){it.units[n]="deg",qr[n]=1}),_t[r[13]]=a+","+t,K(i,function(n){var s=n.split(":");_t[s[1]]=r[s[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");K("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(a){it.units[a]="px"});Q.registerPlugin(Ai);var Oi=Q.registerPlugin(Ai)||Q,Qs=Oi.core.Tween;var Hr=`/* Five original one-screen hero compositions. No host-page selectors escape the shadow root. */
:host {
  display: block;
  width: 100%;
  height: 100svh;
  min-height: 0;
  contain: layout style;
  --accent: #4566d5;
  color: #15201c;
  font-family: PwHeroBody, sans-serif;
  font-synthesis: none;
}
* {
  box-sizing: border-box;
}
button,
a {
  -webkit-tap-highlight-color: transparent;
  touch-action: manipulation;
}
button {
  font: inherit;
  cursor: pointer;
}
a {
  color: inherit;
  text-decoration: none;
}
button:focus-visible,
a:focus-visible {
  outline: 2px solid currentColor;
  outline-offset: 6px;
}
::selection {
  background: var(--accent);
  color: #f4f5ec;
}
.hero {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  isolation: isolate;
  display: grid;
  grid-template-rows: auto 1fr auto;
  padding: 30px 4.3%;
  background: #e4e8e8;
  color: #192328;
}
.visual {
  position: absolute;
  inset: 0;
  z-index: -1;
  pointer-events: none;
}
.visual canvas {
  width: 100%;
  height: 100%;
  display: block;
}
.fallback {
  display: none;
  position: absolute;
  inset: 0;
  opacity: 0.4;
  background: radial-gradient(
    ellipse at 68% 42%,
    var(--accent),
    transparent 55%
  );
}
.visual.failed .fallback {
  display: block;
}
.visual.failed canvas {
  display: none;
}
header,
footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  position: relative;
  z-index: 3;
}
.wordmark {
  display: flex;
  align-items: center;
  gap: 11px;
  font:
    650 23px/1 PwHeroSyne,
    sans-serif;
  letter-spacing: -0.04em;
}
.wordmark svg {
  width: 27px;
  height: 27px;
}
.pause {
  border: 1px solid #18202833;
  border-radius: 30px;
  display: flex;
  gap: 7px;
  align-items: center;
  padding: 10px 15px;
  font-size: 11px;
  line-height: 1;
  color: inherit;
  background: transparent;
}
.pause:hover {
  background: #1820280a;
}
.pause svg {
  width: 15px;
  height: 15px;
}
.composition {
  position: relative;
  min-height: 0;
  display: flex;
  align-items: center;
}
.copy {
  width: 100%;
  position: relative;
  z-index: 2;
}
h1 {
  font:
    600 clamp(54px, 6.7vw, 110px) / 0.98 PwHeroSyne,
    sans-serif;
  letter-spacing: -0.055em;
  margin: 0;
  max-width: 12ch;
  overflow-wrap: anywhere;
}
.line {
  display: block;
  overflow: hidden;
  padding-bottom: 0.1em;
  margin-bottom: -0.1em;
}
.line > span {
  display: block;
  will-change: transform;
}
.copy-bottom {
  margin-top: 30px;
  max-width: 350px;
}
.copy p {
  font-size: clamp(12px, 1.1vw, 15px);
  line-height: 1.8;
  margin: 0 0 25px;
  max-width: 36ch;
  text-wrap: pretty;
}
.action {
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border: 0;
  border-radius: 40px;
  background: #1b262b;
  color: #f3f4ee;
  font:
    500 12px/1.3 PwHeroBody,
    sans-serif;
  padding: 16px 20px;
  min-height: 48px;
  transition:
    background 0.2s,
    transform 0.2s;
}
.action:hover {
  background: #354549;
  transform: translateY(-2px);
}
.action:active {
  transform: translateY(0);
}
.action svg {
  width: 19px;
  height: 19px;
}
.action:focus-visible {
  outline-color: var(--accent);
}
footer {
  font-size: 10px;
  line-height: 1.6;
  min-height: 20px;
}
.interaction-note {
  display: flex;
  align-items: center;
  gap: 7px;
}
.live-dot {
  width: 5px;
  height: 5px;
  border-radius: 50%;
  background: currentColor;
}
.sr-only {
  position: absolute;
  left: -9999px;
  width: 1px;
  height: 1px;
  overflow: hidden;
}
.hero-facet .copy {
  padding-bottom: 15px;
}
.hero-facet .visual {
  left: 24%;
}
.hero-facet .copy-bottom {
  margin-top: 35px;
}
.hero-facet .scene-note {
  max-width: 250px;
}
.hero-undertow {
  background: #151b1d;
  color: #ede8d9;
  padding: 33px 4.5%;
}
.hero-undertow .wordmark {
  font:
    400 32px PwHeroInstrument,
    serif;
  letter-spacing: -0.035em;
}
.hero-undertow .wordmark svg {
  display: none;
}
.hero-undertow .pause {
  border-color: #ede8d944;
}
.hero-undertow .pause:hover {
  background: #ede8d910;
}
.hero-undertow .composition {
  align-items: flex-end;
  padding-bottom: 45px;
}
.hero-undertow h1 {
  font:
    400 clamp(74px, 10.2vw, 170px) / 0.86 PwHeroInstrument,
    serif;
  letter-spacing: -0.035em;
  max-width: 10ch;
}
.hero-undertow .copy {
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  gap: 40px;
}
.hero-undertow .copy-bottom {
  max-width: 270px;
  margin: 0 0 0 auto;
  padding-bottom: 8px;
}
.hero-undertow .copy p {
  font-size: 13px;
  color: #c7c8bb;
}
.hero-undertow .action {
  border: 1px solid #c5baa455;
  background: transparent;
  color: #e5d7bd;
  border-radius: 0;
  padding: 15px 0;
  border-width: 0 0 1px;
  min-width: 210px;
}
.hero-undertow .action:hover {
  color: var(--accent);
  background: none;
}
.hero-undertow footer {
  color: #adb1a5;
}
.hero-undertow .visual {
  inset: 3% 0 6% 14%;
}
.hero-daybreak {
  background: #e8e7cc;
  color: #243b32;
}
.hero-daybreak .composition {
  align-items: flex-start;
  justify-content: center;
  text-align: center;
  padding-top: 30px;
}
.hero-daybreak h1 {
  font:
    400 clamp(31px, 4.2vw, 68px) / 1.18 PwHeroPixel,
    monospace;
  letter-spacing: -0.06em;
  max-width: none;
}
.hero-daybreak .wordmark {
  font:
    400 19px PwHeroPixel,
    monospace;
  letter-spacing: -0.07em;
}
.hero-daybreak .wordmark svg {
  display: none;
}
.hero-daybreak .copy-bottom {
  margin: 20px auto 0;
  max-width: 400px;
}
.hero-daybreak .copy p {
  margin: 0 auto 20px;
  max-width: 43ch;
  font-size: 13px;
  line-height: 1.6;
}
.hero-daybreak .action {
  background: #284d3f;
  color: #f4f0d5;
  border-radius: 0;
  border: 2px solid #224536;
  box-shadow: 3px 3px 0 #142e2540;
  padding: 13px 18px;
  font-size: 11px;
}
.hero-daybreak canvas {
  image-rendering: pixelated;
}
.hero-daybreak .pause {
  border-color: #29433355;
}
.hero-daybreak footer {
  color: #f4ead3;
  text-shadow: 0 1px 2px #142c23;
}
.hero-lattice {
  background: var(--accent);
  color: #fff1dd;
}
.hero-lattice .wordmark {
  font:
    700 27px PwHeroBricolage,
    sans-serif;
  letter-spacing: -0.05em;
}
.hero-lattice .wordmark svg {
  width: 23px;
}
.hero-lattice .pause {
  border-color: #fff1dd66;
}
.hero-lattice .pause:hover {
  background: #fff1dd12;
}
.hero-lattice .composition {
  align-items: center;
  justify-content: flex-end;
}
.hero-lattice .copy {
  width: 47%;
  padding-bottom: 20px;
}
.hero-lattice h1 {
  font:
    700 clamp(60px, 6.5vw, 106px) / 0.95 PwHeroBricolage,
    sans-serif;
  letter-spacing: -0.05em;
  max-width: 10ch;
}
.hero-lattice .copy p {
  max-width: 32ch;
  font-size: 13px;
}
.hero-lattice .copy-bottom {
  margin-top: 27px;
}
.hero-lattice .action {
  background: #fff1dd;
  color: #8d251b;
  border-radius: 5px;
  min-width: 220px;
}
.hero-lattice .action:hover {
  background: #ffe8b7;
}
.hero-lattice .visual {
  right: 33%;
  left: -10%;
}
.hero-lattice footer {
  color: #fff1ddcc;
}
.hero-frequency {
  background: #101319;
  color: #f4f1e9;
}
.hero-frequency .wordmark {
  font: 500 21px PwHeroSyne;
  letter-spacing: -0.05em;
}
.hero-frequency .wordmark svg {
  width: 23px;
}
.hero-frequency .pause {
  border-color: #f4f1e955;
}
.hero-frequency .pause:hover {
  background: #f4f1e910;
}
.hero-frequency .composition {
  align-items: center;
  text-align: center;
  justify-content: center;
}
.hero-frequency h1 {
  font:
    600 clamp(61px, 8.8vw, 145px) / 0.96 PwHeroSyne,
    sans-serif;
  letter-spacing: -0.06em;
  max-width: 14ch;
  margin: auto;
  text-shadow: 0 3px 25px #080b1244;
}
.hero-frequency .copy-bottom {
  margin: 27px auto 0;
  max-width: 330px;
}
.hero-frequency .copy p {
  color: #e8e3d8;
  font-size: 13px;
  margin-inline: auto;
}
.hero-frequency .action {
  background: #efeadb;
  color: #25241f;
}
.hero-frequency .action:hover {
  background: #f8f2df;
}
.hero-frequency footer {
  color: #d8d3c4;
}
.hero-frequency .visual::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(#10131933, #1013190a 40%, #10131955);
  pointer-events: none;
}
@media (max-width: 800px) {
  .hero {
    padding: 23px 5%;
  }
  .wordmark {
    font-size: 20px;
  }
  .pause {
    padding: 9px 11px;
    font-size: 10px;
  }
  .copy p {
    font-size: 12px;
  }
  h1 {
    font-size: clamp(43px, 8vw, 76px);
  }
  .copy-bottom {
    max-width: 280px;
  }
  .hero-undertow h1 {
    font-size: clamp(65px, 12vw, 120px);
  }
  .hero-undertow .copy {
    gap: 24px;
  }
  .hero-undertow .copy-bottom {
    max-width: 210px;
  }
  .hero-undertow .copy p {
    font-size: 11px;
  }
  .hero-undertow .composition {
    padding-bottom: 25px;
  }
  .hero-lattice h1 {
    font-size: clamp(46px, 7vw, 79px);
  }
  .hero-lattice .copy {
    width: 49%;
  }
  .hero-lattice .copy p {
    font-size: 12px;
  }
  .hero-lattice .action {
    min-width: 0;
  }
  .hero-daybreak h1 {
    font-size: clamp(30px, 5.2vw, 48px);
  }
  .hero-frequency h1 {
    font-size: clamp(54px, 9vw, 90px);
  }
}
@media (max-width: 540px) {
  .hero {
    padding: 21px 6%;
    grid-template-rows: auto 1fr auto;
  }
  .wordmark {
    font-size: 21px;
  }
  .wordmark svg {
    width: 24px;
  }
  .pause {
    min-height: 37px;
    padding: 9px 10px;
  }
  .pause > span {
    font-size: 9px;
  }
  .copy h1 {
    font-size: clamp(39px, 10.8vw, 62px);
    letter-spacing: -0.05em;
  }
  .copy-bottom {
    margin-top: 19px;
    max-width: 300px;
  }
  .copy p {
    font-size: 12px;
    line-height: 1.65;
    margin-bottom: 17px;
  }
  .action {
    min-height: 45px;
    padding: 13px 17px;
    font-size: 11px;
  }
  .action svg {
    width: 17px;
  }
  .hero-facet .composition {
    align-items: flex-end;
    padding-bottom: 27px;
  }
  .hero-facet .copy-bottom {
    margin-top: 18px;
    max-width: 275px;
  }
  .hero-facet .visual {
    inset: -7% -22% 20% -25%;
  }
  .hero-facet h1 {
    font-size: clamp(40px, 11vw, 60px);
  }
  footer {
    font-size: 8px;
    gap: 13px;
  }
  .scene-note {
    max-width: 180px;
  }
  .interaction-note {
    font-size: 8px;
    white-space: nowrap;
  }
  .hero-undertow {
    padding: 20px 6%;
  }
  .hero-undertow .composition {
    padding-bottom: 22px;
  }
  .hero-undertow .copy {
    display: block;
  }
  .hero-undertow h1 {
    font-size: clamp(62px, 17vw, 90px);
    line-height: 0.87;
    max-width: 10ch;
  }
  .hero-undertow .copy-bottom {
    max-width: 270px;
    margin: 22px 0 0;
    padding: 0;
  }
  .hero-undertow .copy p {
    font-size: 12px;
    max-width: 30ch;
  }
  .hero-undertow .visual {
    inset: -8% -35% 20% -10%;
  }
  .hero-undertow .wordmark {
    font-size: 29px;
  }
  .hero-daybreak .composition {
    padding-top: 30px;
    align-items: flex-start;
  }
  .hero-daybreak h1 {
    font-size: clamp(25px, 7vw, 37px);
    line-height: 1.25;
    letter-spacing: -0.08em;
  }
  .hero-daybreak .copy-bottom {
    margin-top: 17px;
    max-width: 290px;
  }
  .hero-daybreak .copy p {
    font-size: 12px;
    max-width: 28ch;
  }
  .hero-daybreak footer .scene-note {
    max-width: 160px;
  }
  .hero-lattice .composition {
    align-items: flex-end;
    padding-bottom: 25px;
  }
  .hero-lattice .copy {
    width: 100%;
    padding: 0;
  }
  .hero-lattice h1 {
    font-size: clamp(46px, 13vw, 66px);
    max-width: 12ch;
  }
  .hero-lattice .visual {
    inset: -12% -30% 22% -15%;
  }
  .hero-lattice .copy-bottom {
    margin-top: 19px;
    max-width: 300px;
  }
  .hero-lattice .copy p {
    max-width: 30ch;
    font-size: 12px;
  }
  .hero-lattice .wordmark {
    font-size: 25px;
  }
  .hero-frequency .copy h1 {
    font-size: clamp(41px, 11vw, 65px);
    max-width: 11ch;
    letter-spacing: -0.06em;
  }
  .hero-frequency .copy p {
    font-size: 12px;
    max-width: 28ch;
  }
  .hero-frequency .copy-bottom {
    margin-top: 24px;
  }
  .hero-frequency footer .scene-note {
    max-width: 180px;
  }
}
@media (max-height: 640px) {
  .hero {
    padding-top: 16px;
    padding-bottom: 16px;
  }
  .composition {
    padding-block: 8px !important;
  }
  .hero .copy h1 {
    font-size: clamp(32px, 7vw, 70px);
  }
  .hero .copy-bottom {
    margin-top: 16px;
  }
  .copy p {
    font-size: 11px;
    line-height: 1.5;
    margin-bottom: 12px;
  }
  .hero-undertow .copy h1 {
    font-size: clamp(48px, 9vw, 100px);
  }
  .hero-daybreak .copy h1 {
    font-size: clamp(24px, 4vw, 44px);
  }
  .action {
    padding: 11px 16px;
    min-height: 40px;
  }
  .hero-facet .visual,
  .hero-lattice .visual {
    opacity: 0.8;
  }
  .hero-daybreak .copy-bottom {
    max-width: 350px;
  }
  .hero-daybreak .copy p {
    font-size: 11px;
  }
  .wordmark {
    font-size: 20px;
  }
}
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    animation: none !important;
    transition: none !important;
    scroll-behavior: auto !important;
  }
  .line > span {
    will-change: auto;
  }
}
:host([reduced]) * {
  animation: none !important;
  transition: none !important;
}

.hero-facet .visual {
  mask-image: linear-gradient(90deg, transparent, black 12%);
}
.hero-daybreak[data-dusk] {
  color: #f4ebd1;
}
.hero-daybreak[data-dusk] .pause {
  border-color: #f4ebd166;
}
.hero-daybreak[data-dusk] .action {
  background: #f4ebd1;
  color: #284d3f;
  border-color: #f4ebd1;
}
@media (max-width: 540px) {
  .hero-facet .visual {
    mask-image: linear-gradient(to bottom, black 65%, transparent 100%);
  }
}

.wordmark {
  min-width: 0;
  max-width: 65%;
}
.wordmark > span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.wordmark svg {
  flex-shrink: 0;
}
.hero-undertow .wordmark {
  max-width: 60%;
}
.copy p {
  overflow-wrap: anywhere;
}
.action {
  max-width: 100%;
}
.action > span {
  min-width: 0;
  overflow-wrap: anywhere;
}
.action svg {
  flex-shrink: 0;
}
.hero {
  grid-template-columns: minmax(0, 1fr);
}
header,
footer,
.composition,
.copy {
  min-width: 0;
}
`;var De=[{id:"facet",name:"Facet",medium:"Sculptural GLSL",description:"A twisted chrome ribbon catches a moving studio light. Change its form with a click.",font:"Syne",accent:"#4566d5",brand:"facet",headline:`Ideas take
physical form.`,body:"An independent practice at the intersection of objects, identity and digital space.",cta:"Reshape the form",note:"Form is a starting point.",uses:"Design studios \xB7 Creative portfolios \xB7 Product launches"},{id:"undertow",name:"Undertow",medium:"Spatial ASCII",description:"Thousands of depth-sorted characters trace a rotating nautilus, suspended in a quiet typographic composition.",font:"InstrumentSerif",accent:"#d4aa7d",brand:"undertow",headline:`Follow a
quieter current.`,body:"A space for considered work, unexpected connections and a different pace of making.",cta:"Turn the current",note:"Some things ask for a closer look.",uses:"Editorial projects \xB7 Art portfolios \xB7 Independent publications"},{id:"daybreak",name:"Daybreak",medium:"Pixel landscape",description:"A miniature landscape of drifting clouds, layered hills and reflected light, with a day-to-dusk transition.",font:"Silkscreen",accent:"#d78157",brand:"daybreak",headline:`A small world.
Yours to shape.`,body:"For the projects that start with a little curiosity and grow into somewhere new.",cta:"Shift to dusk",note:"There is room for your idea here.",uses:"Indie games \xB7 Creative tools \xB7 Communities"},{id:"lattice",name:"Lattice",medium:"Deforming WebGL mesh",description:"A live wire surface folds between a flowing sheet and a structured sculpture.",font:"BricolageGrotesque",accent:"#d94c35",brand:"Lattice",headline:`Order is an
experiment.`,body:"Tools and ideas for people who see a system as something to play with.",cta:"Fold the grid",note:"Change the shape of the familiar.",uses:"Developer tools \xB7 Design systems \xB7 Experimental portfolios"},{id:"frequency",name:"Frequency",medium:"Refractive light shader",description:"Fluted light bends across a dark chamber. A change of perspective sends a new spectrum through it.",font:"Syne",accent:"#cba66c",brand:"frequency",headline:`Light, bent into
possibility.`,body:"A digital playground for new perspectives. Bring an idea and see where it takes you.",cta:"Bend the light",note:"A different angle changes everything.",uses:"Digital experiences \xB7 Music projects \xB7 Creative technology"}];function Ur(a){return De.some(t=>t.id===a)}function Fe(a){let t=De.find(e=>e.id===a);return{brand:t.brand,headline:t.headline,body:t.body,cta:t.cta,href:"",accent:t.accent,speed:1,intensity:1,reduced:!1}}function Ns(a){if(typeof a!="string")return"";let t=a.trim();return/^(https?:\/\/|mailto:|tel:|#[\w-]+)/i.test(t)&&!/[\u0000-\u0020<>"']/.test(t)?t:""}function Ie(a,t){let e=Fe(a);for(let[i,r]of[["brand",28],["headline",80],["body",180],["cta",32]])typeof t[i]=="string"&&t[i].trim()&&(e[i]=t[i].slice(0,r));/^#[a-f\d]{6}$/i.test(t.accent||"")&&(e.accent=t.accent),e.href=Ns(t.href);for(let i of["speed","intensity"])typeof t[i]=="number"&&Number.isFinite(t[i])&&(e[i]=Math.max(.25,Math.min(1.8,t[i])));return e.reduced=t.reduced===!0,e}var Rt=a=>String(a??"").replace(/[&<>"']/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[t]);function Ri(a){return a.split(`
`).slice(0,3).map(t=>`<span class="line"><span>${Rt(t)}</span></span>`).join("")}function Vr(a,t){let e=Ie(a,t),i=De.find(r=>r.id===a);return`<section part="hero" class="hero hero-${a}" id="hero" aria-label="${Rt(e.brand)}"><div class="visual" aria-hidden="true"><canvas></canvas><div class="fallback"></div></div><header part="header"><a class="wordmark" href="#hero" aria-label="${Rt(e.brand)} home"><svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16 3 29 16 16 29 3 16Z M16 3V29 M3 16H29" fill="none" stroke="currentColor" stroke-width="1.5"/></svg><span>${Rt(e.brand)}</span></a><button class="pause" aria-label="Pause animation" aria-pressed="false"><svg viewBox="0 0 20 20" aria-hidden="true"><path d="M7 5v10m6-10v10" stroke="currentColor" stroke-width="1.5"/></svg><span>Pause motion</span></button></header><div class="composition"><div class="copy"><h1 part="headline">${Ri(e.headline)}</h1><div class="copy-bottom"><p part="description">${Rt(e.body)}</p>${e.href?`<a part="action" class="action" href="${Rt(e.href)}">`:'<button part="action" class="action" type="button">'}<span>${Rt(e.cta)}</span><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>${e.href?"</a>":"</button>"}</div></div></div><footer part="footer"><span class="scene-note">${Rt(i.note)}</span><div class="interaction-note"><span class="live-dot"></span><span class="mode-label">Move to explore</span></div></footer><div class="sr-only" role="status" aria-live="polite"></div></section>`}var Yr="attribute vec2 position;varying vec2 uv;void main(){uv=position*.5+.5;gl_Position=vec4(position,0.,1.);}",zi=`precision highp float;varying vec2 uv;uniform vec2 resolution;uniform vec2 pointer;uniform float time;uniform float shift;uniform float intensity;uniform vec3 accent;
float hash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*noise(p);p=p*2.03+17.3;a*=.5;}return s;}mat2 rot(float a){return mat2(cos(a),-sin(a),sin(a),cos(a));}vec3 palette(float t){return .53+.47*cos(6.28318*(vec3(.04,.28,.53)+t));}
`,Wr=zi+`
float field(vec3 p){p.xz=rot(time*.12+pointer.x*.32)*p.xz;p.yz=rot(.6+pointer.y*.2)*p.yz;float a=atan(p.y,p.x);vec2 q=vec2(length(p.xy)-1.08,p.z);q=rot(a*(1.5+shift*.5)+time*.1)*q;return length(max(abs(q)-vec2(.19+.12*shift,.045*intensity),0.))-.095;}
vec3 normalAt(vec3 p){vec2 e=vec2(.002,-.002);return normalize(e.xyy*field(p+e.xyy)+e.yyx*field(p+e.yyx)+e.yxy*field(p+e.yxy)+e.xxx*field(p+e.xxx));}
void main(){vec2 p=(uv-.5)*vec2(resolution.x/resolution.y,1.);p.y+=.02;p.x-=resolution.x>resolution.y?.18:0.;vec3 ro=vec3(0,0,4.6),rd=normalize(vec3(p*2.8,-4.));float t=0.,d=0.;for(int i=0;i<72;i++){d=field(ro+rd*t);if(d<.0015||t>8.)break;t+=d*.8;}vec3 bg=vec3(.894,.91,.91);bg-=.035*length(p);vec3 col=bg;if(t<8.){vec3 pos=ro+rd*t,n=normalAt(pos),r=reflect(rd,n);float f=pow(1.-max(dot(n,-rd),0.),3.);float bands=pow(.5+.5*sin(r.y*6.5+r.x*2.+time*.08),6.);float spec=pow(max(dot(reflect(normalize(vec3(2.,3.,4.)),n),rd),0.),35.);vec3 metal=mix(vec3(.10,.15,.20),vec3(.87,.91,.88),smoothstep(-.45,.75,r.y));metal=mix(metal,vec3(.92,.91,.83),bands*.8);vec3 film=palette(dot(n,vec3(.3,.6,.5))*1.8+time*.025);col=metal*.82+film*.16+accent*(f*.6+bands*.13)+spec*.7;col=mix(col,bg,clamp(pow(t/10.,3.),0.,.2));}else{float shade=exp(-pow(p.x*1.1,2.)-pow((p.y+.52)*9.,2.))*.12;col-=shade;}gl_FragColor=vec4(pow(max(col,0.),vec3(.96)),1.);}`,Gr=zi+`
void main(){vec2 p=uv;p.x+=(pointer.x*.045);float a=shift*.4;vec3 col=vec3(.035,.046,.066);float x=(p.x-.5)*1.6;float warp=sin(p.y*4.+time*.18+shift*2.)*.1*intensity;float fin=fract((x+warp)*13.);float slope=pow(max(sin(fin*3.14159),0.),6.);float bend=sin(x*5.+p.y*3.+time*.13)*.14;float beam=exp(-pow((x+warp+bend+a-.15)*3.,2.));float beam2=exp(-pow((x-warp+.3-a)*4.5,2.));vec3 warm=mix(vec3(.65,.29,.12),accent,clamp(p.y+.1,0.,1.));vec3 cool=vec3(.23,.38,.46);col+=beam*slope*warm*1.55+beam2*slope*cool*.8;float strip=pow(max(1.-abs(fin-.13)*14.,0.),3.);col+=strip*(beam+beam2)*vec3(.88,.80,.61)*.7;col+=vec3(.009)*noise(p*resolution*.6);float vignette=smoothstep(.9,.2,length((uv-.5)*vec2(.7,1.)));col*=.5+.5*vignette;gl_FragColor=vec4(pow(col,vec3(.91)),1.);}`,Xr=zi+`
float ridge(float x,float depth){return fbm(vec2(x*depth+19.,depth*3.))*.13;}
void main(){vec2 p=uv;float aspect=resolution.x/resolution.y;float sunx=.73+pointer.x*.025;float night=shift;vec3 sky=mix(vec3(.91,.90,.78),vec3(.22,.29,.38),night);vec3 horizon=mix(mix(vec3(.94,.79,.58),accent,.15),vec3(.56,.40,.46),night);vec3 col=mix(horizon,sky,smoothstep(.25,.8,p.y));vec2 sp=(p-vec2(sunx,.48))*vec2(aspect,1.);float sun=1.-smoothstep(.064,.069,length(sp));col=mix(col,mix(accent,vec3(.95,.82,.62),night),sun);float cloud=fbm(vec2(p.x*6.+time*.025,p.y*12.));float clouds=smoothstep(.60,.69,cloud)*smoothstep(.57,.75,p.y);col=mix(col,mix(vec3(.97,.96,.83),vec3(.45,.43,.47),night),clouds*.65);
for(int i=0;i<5;i++){float k=float(i),x=p.x*aspect+pointer.x*.008*k;float height=.28-k*.035+ridge(x+float(i)*3.,3.+k*.7)*intensity+sin(x*4.+k)*.017;vec3 hills=mix(vec3(.43,.59,.48),vec3(.11,.28,.23),k/4.);hills=mix(hills,hills*vec3(.5,.68,.9),night*.55);col=mix(col,hills,step(p.y,height));}
float river=.5+sin(p.y*13.)*.18;float riverWidth=.012+pow(max(.36-p.y,0.),1.5)*.95;float water=step(abs(p.x-river),riverWidth)*step(p.y,.33);vec3 waterCol=mix(vec3(.56,.70,.59),vec3(.31,.46,.49),night);float shimmer=step(.84,hash(floor(vec2(p.x*180.,p.y*160.+time*2.))))*.25;col=mix(col,waterCol+shimmer,water);
float gridx=floor(p.x*aspect*27.),localx=fract(p.x*aspect*27.)-.5;float treex=gridx/27.;float treeBase=.12+hash(vec2(gridx,7.))*.1;float treeHeight=.04+hash(vec2(gridx,19.))*.065;float tree=step(abs(localx),(.5-(p.y-treeBase)/treeHeight)*.72)*step(treeBase,p.y)*step(p.y,treeBase+treeHeight);tree*=step(.32,hash(vec2(gridx,5.)))*step(.11,abs(treex/aspect-river));col=mix(col,mix(vec3(.12,.29,.22),vec3(.08,.16,.20),night),tree);float dither=(mod(gl_FragCoord.x+mod(gl_FragCoord.y,2.)*2.,4.)-1.5)/150.;col=floor((col+dither)*24.)/24.;gl_FragColor=vec4(col,1.);}`,$r="precision highp float;attribute vec2 position;uniform vec2 resolution;uniform vec2 pointer;uniform float time;uniform float shift;uniform float intensity;varying float depth;void main(){vec2 p=position;float wave=sin(p.x*1.4+time*.6)*cos(p.y*1.15-time*.35)*.48*intensity;float fold=abs(p.x)*.65-abs(p.y)*.35;vec3 q=vec3(p.x,p.y,mix(wave,fold,shift));float a=.35+pointer.x*.2;float b=.6+pointer.y*.17;vec3 r=vec3(q.x*cos(a)+q.z*sin(a),q.y,-q.x*sin(a)+q.z*cos(a));q=vec3(r.x,r.y*cos(b)-r.z*sin(b),r.y*sin(b)+r.z*cos(b));float perspective=4.5/(6.-q.z);gl_Position=vec4(q.x*perspective*.52/(resolution.x/resolution.y),q.y*perspective*.52,0.,1.);depth=q.z;}",jr="precision highp float;varying float depth;void main(){gl_FragColor=vec4(vec3(.99,.91,.78),clamp(.42+depth*.14,.15,.95));}";function Qr(a,t){let e=a.getContext("webgl",{alpha:!1,antialias:t==="lattice",powerPreference:"low-power",preserveDrawingBuffer:!1});if(!e)throw new Error("WebGL unavailable");let i=e,r=(m,f)=>{let _=i.createShader(m);if(i.shaderSource(_,f),i.compileShader(_),!i.getShaderParameter(_,i.COMPILE_STATUS)){let g=i.getShaderInfoLog(_);throw i.deleteShader(_),new Error(g||"Shader compilation failed")}return _},n=r(i.VERTEX_SHADER,t==="lattice"?$r:Yr),s=r(i.FRAGMENT_SHADER,t==="lattice"?jr:{facet:Wr,frequency:Gr,daybreak:Xr}[t]),o=i.createProgram();if(i.attachShader(o,n),i.attachShader(o,s),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))throw new Error(i.getProgramInfoLog(o)||"Shader linking failed");i.useProgram(o);let h=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,h);let l=3;if(t==="lattice"){let m=[];for(let _=0;_<=68;_++)for(let g=0;g<68;g++){let y=g/68*4.5-2.25,v=_/68*4.5-2.25;m.push(y,v,y+4.5/68,v,v,y,v,y+4.5/68)}l=m.length/2,i.bufferData(i.ARRAY_BUFFER,new Float32Array(m),i.STATIC_DRAW),i.enable(i.BLEND),i.blendFunc(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA)}else i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),i.STATIC_DRAW);let c=i.getAttribLocation(o,"position");i.enableVertexAttribArray(c),i.vertexAttribPointer(c,2,i.FLOAT,!1,0,0);let u=Object.fromEntries(["resolution","time","pointer","shift","accent","intensity"].map(m=>[m,i.getUniformLocation(o,m)]));function d(){let m=t==="daybreak"?360:1100,f=a.clientWidth,_=a.clientHeight,g=Math.min(1.25,m/Math.max(f,_));a.width=Math.max(1,Math.round(f*g)),a.height=Math.max(1,Math.round(_*g)),i.viewport(0,0,a.width,a.height)}function p(m,f,_,g,y){let v=g.match(/[a-f\d]{2}/gi).map(b=>parseInt(b,16)/255);t==="lattice"&&(i.clearColor(v[0],v[1],v[2],1),i.clear(i.COLOR_BUFFER_BIT)),i.useProgram(o),i.uniform2f(u.resolution,a.width,a.height),i.uniform2f(u.pointer,f.x,f.y),i.uniform1f(u.time,m),i.uniform1f(u.shift,_),i.uniform1f(u.intensity,y),i.uniform3f(u.accent,v[0],v[1],v[2]),i.drawArrays(t==="lattice"?i.LINES:i.TRIANGLES,0,l)}return{resize:d,draw:p,dispose:()=>{i.deleteBuffer(h),i.deleteProgram(o),i.deleteShader(n),i.deleteShader(s),i.getExtension("WEBGL_lose_context")?.loseContext()}}}function Kr(a){let t=a.getContext("2d");if(!t)throw new Error("Canvas 2D is unavailable.");let e=0,i=0,r=" .,:;i!+*#%@";function n(){e=a.width=Math.min(1400,Math.max(300,a.clientWidth)),i=a.height=Math.min(1e3,Math.max(250,a.clientHeight))}function s(o,h,l,c,u){e||n();let d=t;d.fillStyle="#151b1d",d.fillRect(0,0,e,i);let p=Math.min(e,i)*.36,m=e*.58,f=i*.44,_=[],g=o*.12*(1-l*2)+l*.8+h.x*.22,y=.3+h.y*.18;for(let b=0;b<115;b++){let x=b/114*Math.PI*4.1,k=.1+Math.pow(b/114,1.7)*1.35,T=k*.44;for(let S=0;S<63;S++){let w=S/63*Math.PI*2,P=(k+T*Math.cos(w))*Math.cos(x),O=(k+T*Math.cos(w))*Math.sin(x),M=T*Math.sin(w)+(x/13-.5)*.3,A=P*Math.cos(g)+M*Math.sin(g);M=-P*Math.sin(g)+M*Math.cos(g);let V=O*Math.cos(y)-M*Math.sin(y);M=O*Math.sin(y)+M*Math.cos(y);let B=.35+.65*Math.max(0,Math.sin(w+.4)*.6+Math.cos(x-g)*.4);_.push({x:m+A*p,y:f+V*p,z:M,b:B,char:r[Math.min(r.length-1,Math.floor(B*10))]})}}_.sort((b,x)=>b.z-x.z),d.font=`${Math.max(7,Math.min(12,e/115))}px PwHeroMono,monospace`,d.textAlign="center";let v=c.match(/[a-f\d]{2}/gi).map(b=>parseInt(b,16));for(let b of _)d.globalAlpha=Math.min(.95,(.15+b.b*.72+(b.z+1)*.1)*u),d.fillStyle=`rgb(${v[0]},${v[1]},${v[2]})`,d.fillText(b.char,b.x,b.y);d.globalAlpha=1}return{resize:n,draw:s,dispose:()=>{a.width=a.height=1}}}var Hs=document.currentScript?.src||new URL("/heroes/hero.js",location.href).href,Zr=new URL("fonts.css",Hs).href;if(![...document.querySelectorAll("link[rel=stylesheet]")].some(a=>a.href===Zr)){let a=document.createElement("link");a.rel="stylesheet",a.href=Zr,document.head.append(a)}var Le=class extends HTMLElement{constructor(){super();U(this,"sceneId","facet");U(this,"config",Fe("facet"));U(this,"defaultCTA","");U(this,"abort");U(this,"observer");U(this,"intersection");U(this,"renderer");U(this,"media",matchMedia("(prefers-reduced-motion: reduce)"));U(this,"visible",!0);U(this,"raf",0);U(this,"last",0);U(this,"time",0);U(this,"shift",0);U(this,"targetShift",0);U(this,"target",{x:0,y:0});U(this,"pointer",{x:0,y:0});U(this,"connected",!1);U(this,"intro");this.attachShadow({mode:"open"})}connectedCallback(){if(this.connected)return;this.connected=!0;let e=this.getAttribute("scene");this.sceneId=Ur(e)?e:"facet",this.config=this.read(),this.defaultCTA=Fe(this.sceneId).cta,this.abort=new AbortController,this.shadowRoot.innerHTML=`<style>${Hr}</style>${Vr(this.sceneId,this.config)}`,this.style.setProperty("--accent",this.config.accent);let i=this.shadowRoot.querySelector("canvas");try{this.renderer=this.sceneId==="undertow"?Kr(i):Qr(i,this.sceneId),this.dataset.renderer=this.sceneId==="undertow"?"ascii":"webgl"}catch(r){this.shadowRoot.querySelector(".visual").classList.add("failed"),this.dataset.renderer="fallback",this.emit("hero-renderer",{mode:"fallback",reason:String(r)})}this.listen(this.shadowRoot.querySelector(".wordmark"),"click",r=>{r.preventDefault(),this.scrollIntoView({block:"start",behavior:this.reduced?"instant":"smooth"})}),this.listen(this.shadowRoot.querySelector(".pause"),"click",()=>{this.toggleAttribute("paused"),this.emit("hero-motion",{paused:this.hasAttribute("paused")})}),this.listen(this.shadowRoot.querySelector(".action"),"click",()=>{this.config.href||(this.targetShift=this.targetShift?0:1,(this.reduced||this.hasAttribute("paused"))&&(this.shift=this.targetShift,this.draw()),this.shadowRoot.querySelector("[role=status]").textContent=`${this.sceneId==="daybreak"?this.targetShift?"Dusk":"Day":"Composition"} ${this.sceneId==="daybreak"?"selected.":"changed."}`,this.emit("hero-action",{scene:this.sceneId,variation:this.targetShift}))}),this.listen(this,"pointermove",r=>{let n=r,s=this.getBoundingClientRect();this.target={x:(n.clientX-s.left)/s.width*2-1,y:1-(n.clientY-s.top)/s.height*2},this.reduced&&(this.pointer={x:0,y:0})}),this.listen(this,"pointerleave",()=>this.target={x:0,y:0}),this.listen(document,"visibilitychange",()=>this.schedule()),this.listen(this.media,"change",()=>{this.intro?.progress(1),this.schedule()}),this.listen(i,"webglcontextlost",r=>{r.preventDefault(),cancelAnimationFrame(this.raf),this.shadowRoot.querySelector(".visual").classList.add("failed"),this.dataset.renderer="fallback"}),this.observer=new ResizeObserver(()=>{this.renderer?.resize(),this.fit(),this.draw()}),this.observer.observe(this),this.intersection=new IntersectionObserver(([r])=>{this.visible=r.isIntersecting,this.schedule()}),this.intersection.observe(this),this.renderer?.resize(),this.schedule(),this.reduced||(this.intro=Oi.timeline({defaults:{ease:"power3.out"}}).fromTo(this.shadowRoot.querySelectorAll(".line>span"),{yPercent:110},{yPercent:0,duration:1.15,stagger:.1,clearProps:"transform"},.08).fromTo(this.shadowRoot.querySelector(".copy-bottom"),{opacity:0,y:16},{opacity:1,y:0,duration:.9,clearProps:"opacity,transform"},.4)),document.fonts.ready.then(()=>{this.connected&&(this.fit(),this.draw(),this.emit("hero-ready",{scene:this.sceneId,renderer:this.dataset.renderer}))})}listen(e,i,r){e.addEventListener(i,r,{signal:this.abort?.signal})}emit(e,i){this.dispatchEvent(new CustomEvent(e,{detail:i,bubbles:!0,composed:!0}))}get reduced(){return this.media.matches||this.hasAttribute("reduced")}read(){let e={};for(let i of["brand","headline","body","cta","href","accent"])this.hasAttribute(i)&&(e[i]=this.getAttribute(i));for(let i of["speed","intensity"])this.hasAttribute(i)&&(e[i]=Number(this.getAttribute(i)));return e.reduced=this.hasAttribute("reduced"),Ie(this.sceneId,e)}attributeChangedCallback(e,i,r){if(!this.connected||i===r)return;if(e==="scene"){this.disconnectedCallback(),this.connectedCallback();return}let n=this.read();if((e==="paused"||e==="reduced")&&(this.intro?.progress(1),this.schedule()),["brand","headline","body","cta","href"].includes(e)&&(e==="brand"&&(this.shadowRoot.querySelector(".wordmark>span").textContent=n.brand,this.shadowRoot.querySelector(".wordmark").setAttribute("aria-label",n.brand+" home"),this.shadowRoot.querySelector(".hero").setAttribute("aria-label",n.brand)),e==="headline"&&(this.shadowRoot.querySelector("h1").innerHTML=Ri(n.headline)),e==="body"&&(this.shadowRoot.querySelector(".copy p").textContent=n.body),e==="cta"&&(this.shadowRoot.querySelector(".action>span").textContent=n.cta),e==="href")){this.config=n,this.disconnectedCallback(),this.connectedCallback();return}this.config=n,this.style.setProperty("--accent",n.accent),this.fit(),this.draw()}fit(){let e=this.shadowRoot?.querySelector("h1"),i=this.shadowRoot?.querySelector(".composition"),r=this.shadowRoot?.querySelector(".copy");if(!e||!i||!r)return;e.style.fontSize="";let n=parseFloat(getComputedStyle(e).fontSize);for(let s=0;s<12&&r.scrollHeight>i.clientHeight-16&&n>24;s++)n*=.92,e.style.fontSize=n+"px"}draw(){if(!this.config.href&&this.config.cta===this.defaultCTA){let e=this.sceneId==="daybreak"?this.shift>.5?"Return to daylight":this.defaultCTA:this.sceneId==="lattice"?this.shift>.5?"Release the grid":this.defaultCTA:this.defaultCTA,i=this.shadowRoot?.querySelector(".action>span");i&&i.textContent!==e&&(i.textContent=e)}this.sceneId==="daybreak"&&this.shadowRoot?.querySelector(".hero")?.toggleAttribute("data-dusk",this.shift>.45),this.renderer?.draw(this.time,this.pointer,this.shift,this.config.accent,this.config.intensity)}schedule(){cancelAnimationFrame(this.raf),this.last=0;let e=this.hasAttribute("paused"),i=this.shadowRoot?.querySelector(".pause");i?.setAttribute("aria-pressed",String(e)),i?.setAttribute("aria-label",e?"Resume animation":"Pause animation");let r=i?.querySelector("span");r&&(r.textContent=e?"Resume motion":"Pause motion");let n=this.shadowRoot?.querySelector(".mode-label");n&&(n.textContent=this.reduced?"Still composition":e?"Motion held":"Move to explore"),this.connected&&(this.intro&&(document.hidden||!this.visible||e||this.reduced?this.intro.pause():this.intro.resume()),this.draw(),!document.hidden&&this.visible&&!e&&!this.reduced&&(this.raf=requestAnimationFrame(s=>this.tick(s))))}tick(e){let i=this.last?Math.min((e-this.last)/1e3,.05):0;if(this.last&&i<1/32){this.raf=requestAnimationFrame(n=>this.tick(n));return}this.last=e,this.time+=i*this.config.speed;let r=1-Math.exp(-i*5);this.pointer.x+=(this.target.x-this.pointer.x)*r,this.pointer.y+=(this.target.y-this.pointer.y)*r,this.shift+=(this.targetShift-this.shift)*r,this.draw(),this.raf=requestAnimationFrame(n=>this.tick(n))}disconnectedCallback(){this.connected=!1,this.abort?.abort(),cancelAnimationFrame(this.raf),this.observer?.disconnect(),this.intersection?.disconnect(),this.intro?.kill(),this.renderer?.dispose(),this.renderer=void 0}};U(Le,"observedAttributes",["scene","brand","headline","body","cta","href","accent","speed","intensity","reduced","paused"]);customElements.get("patchwork-hero")||customElements.define("patchwork-hero",Le);})();
