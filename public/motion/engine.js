"use strict";(()=>{function ar(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function wp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},eo={duration:.5,overwrite:!1,delay:0},Ju,vn,Ot,Ti=1e8,Dt=1/Ti,ku=Math.PI*2,n_=ku/4,i_=0,Ap=Math.sqrt,r_=Math.cos,s_=Math.sin,rn=function(e){return typeof e=="string"},qt=function(e){return typeof e=="function"},cr=function(e){return typeof e=="number"},zl=function(e){return typeof e>"u"},qi=function(e){return typeof e=="object"},ti=function(e){return e!==!1},$u=function(){return typeof window<"u"},Il=function(e){return qt(e)||rn(e)},Cp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},An=Array.isArray,o_=/random\([^)]+\)/g,a_=/,\s*/g,xp=/(?:-?\.?\d|\.)+/gi,Ku=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ps=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Du=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Qu=/[+-]=-?[.\d]+/,l_=/[^,'"\[\]\s]+/gi,c_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Vt,Wi,zu,ju,ci={},Fl={},Rp,Pp=function(e){return(Fl=to(e,ci))&&Cn},Vl=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},la=function(e,t){return!t&&console.warn(e)},Ip=function(e,t){return e&&(ci[e]=t)&&Fl&&(Fl[e]=t)||ci},ca=function(){return 0},h_={suppressEvents:!0,isStart:!0,kill:!1},Dl={suppressEvents:!0,kill:!1},u_={suppressEvents:!0},ef={},Dr=[],Vu={},Dp,jn={},Lu={},yp=30,Ll=[],tf="",nf=function(e){var t=e[0],n,i;if(qi(t)||qt(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Ll.length;i--&&!Ll[i].targetTest(t););n=Ll[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new af(e[i],n)))||e.splice(i,1);return e},Lr=function(e){return e._gsap||nf(Ei(e))[0]._gsap},rf=function(e,t,n){return(n=e[t])&&qt(n)?e[t]():zl(n)&&e.getAttribute&&e.getAttribute(t)||n},Bn=function(e,t){return(e=e.split(",")).forEach(t)||e},Yt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},ms=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},f_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ul=function(){var e=Dr.length,t=Dr.slice(0),n,i;for(Vu={},Dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},sf=function(e){return!!(e._initted||e._startAt||e.add)},Lp=function(e,t,n,i){Dr.length&&!vn&&Ul(),e.render(t,n,i||!!(vn&&t<0&&sf(e))),Dr.length&&!vn&&Ul()},Np=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(l_).length<2?t:rn(e)?e.trim():e},Fp=function(e){return e},hi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},d_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},to=function(e,t){for(var n in t)e[n]=t[n];return e},vp=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=qi(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Ol=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},sa=function(e){var t=e.parent||Vt,n=e.keyframes?d_(An(e.keyframes)):hi;if(ti(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},p_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Up=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Hl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Nr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},us=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},m_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Hu=function(e,t,n,i){return e._startAt&&(vn?e._startAt.revert(Dl):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},g_=function r(e){return!e||e._ts&&r(e.parent)},Mp=function(e){return e._repeat?no(e._tTime,e=e.duration()+e._rDelay)*e:0},no=function(e,t){var n=Math.floor(e=zt(e/t));return e&&n===e?n-1:n},Bl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Gl=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Dt)||0))},Wl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=zt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Gl(e),n._dirty||us(n,e)),e},Op=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Bl(e.rawTime(),t),(!t._dur||fa(0,t.totalDuration(),n)-t._tTime>Dt)&&t.render(n,!0)),us(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Dt}},Xi=function(e,t,n,i){return t.parent&&Nr(t),t._start=zt((cr(n)?n:n||e!==Vt?bi(e,n,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Up(e,t,"_first","_last",e._sort?"_start":0),Gu(t)||(e._recent=t),i||Op(e,t),e._ts<0&&Wl(e,e._tTime),e},Bp=function(e,t){return(ci.ScrollTrigger||Vl("scrollTrigger",t))&&ci.ScrollTrigger.create(t,e)},kp=function(e,t,n,i,s){if(hf(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!vn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Dp!==ei.frame)return Dr.push(e),e._lazy=[s,i],1},__=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gu=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},x_=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&__(e)&&!(!e._initted&&Gu(e))||(e._ts<0||e._dp._ts<0)&&!Gu(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=fa(0,e._tDur,t),h=no(l,a),e._yoyo&&h&1&&(o=1-o),h!==no(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||vn||i||e._zTime===Dt||!t&&e._zTime){if(!e._initted&&kp(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?Dt:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&Hu(e,t,n,!0),e._onUpdate&&!n&&li(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&li(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Nr(e,1),!n&&!vn&&(li(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},y_=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},io=function(e,t,n,i){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Wl(e,e._tTime=e._tDur*a),e.parent&&Gl(e),n||us(e.parent,e),e},Sp=function(e){return e instanceof yn?us(e):io(e,e._dur)},v_={_start:0,endTime:ca,totalDuration:ca},bi=function r(e,t,n){var i=e.labels,s=e._recent||v_,o=e.duration()>=Ti?s.endTime(!1):e._dur,a,l,c;return rn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(An(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},oa=function(e,t,n){var i=cr(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ti(l.vars.inherit)&&l.parent;o.immediateRender=ti(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new $t(t[0],o,t[s+1])},Fr=function(e,t){return e||e===0?t(e):t},fa=function(e,t,n){return n<e?e:n>t?t:n},Mn=function(e,t){return!rn(e)||!(t=c_.exec(e))?"":t[1]},M_=function(e,t,n){return Fr(n,function(i){return fa(e,t,i)})},Wu=[].slice,zp=function(e,t){return e&&qi(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&qi(e[0]))&&!e.nodeType&&e!==Wi},S_=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return rn(i)&&!t||zp(i,1)?(s=n).push.apply(s,Ei(i)):n.push(i)})||n},Ei=function(e,t,n){return Ot&&!t&&Ot.selector?Ot.selector(e):rn(e)&&!n&&(zu||!ro())?Wu.call((t||ju).querySelectorAll(e),0):An(e)?S_(e,n):zp(e)?Wu.call(e,0):e?[e]:[]},Xu=function(e){return e=Ei(e)[0]||la("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return Ei(t,n.querySelectorAll?n:n===e?la("Invalid scope")||ju.createElement("div"):e)}},Vp=function(e){return e.sort(function(){return .5-Math.random()})},Hp=function(e){if(qt(e))return e;var t=qi(e)?e:{each:e},n=fs(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return rn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(d,f,_){var m=(_||t).length,g=o[m],p,v,M,y,T,E,A,C,x;if(!g){if(x=t.grid==="auto"?0:(t.grid||[1,Ti])[1],!x){for(A=-Ti;A<(A=_[x++].getBoundingClientRect().left)&&x<m;);x<m&&x--}for(g=o[m]=[],p=l?Math.min(x,m)*h-.5:i%x,v=x===Ti?0:l?m*u/x-.5:i/x|0,A=0,C=Ti,E=0;E<m;E++)M=E%x-p,y=v-(E/x|0),g[E]=T=c?Math.abs(c==="y"?y:M):Ap(M*M+y*y),T>A&&(A=T),T<C&&(C=T);i==="random"&&Vp(g),g.max=A-C,g.min=C,g.v=m=(parseFloat(t.amount)||parseFloat(t.each)*(x>m?m-1:c?c==="y"?m/x:x:Math.max(x,m/x))||0)*(i==="edges"?-1:1),g.b=m<0?s-m:s,g.u=Mn(t.amount||t.each)||0,n=n&&m<0?Kp(n):n}return m=(g[d]-g.min)/g.max||0,zt(g.b+(n?n(m):m)*g.v)+g.u}},qu=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=zt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(cr(n)?0:Mn(n))}},Gp=function(e,t){var n=An(e),i,s;return!n&&qi(e)&&(i=n=e.radius||Ti,e.values?(e=Ei(e.values),(s=!cr(e[0]))&&(i*=i)):e=qu(e.increment)),Fr(t,n?qt(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Ti,h=0,u=e.length,d,f;u--;)s?(d=e[u].x-a,f=e[u].y-l,d=d*d+f*f):d=Math.abs(e[u]-a),d<c&&(c=d,h=u);return h=!i||c<=i?e[h]:o,s||h===o||cr(o)?h:h+Mn(o)}:qu(e))},Wp=function(e,t,n,i){return Fr(An(e)?!t:n===!0?!!(n=0):!i,function(){return An(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},b_=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},T_=function(e,t){return function(n){return e(parseFloat(n))+(t||Mn(n))}},E_=function(e,t,n){return qp(e,t,0,1,n)},Xp=function(e,t,n){return Fr(n,function(i){return e[~~t(i)]})},w_=function r(e,t,n){var i=t-e;return An(e)?Xp(e,r(0,e.length),t):Fr(n,function(s){return(i+(s-e)%i)%i+e})},A_=function r(e,t,n){var i=t-e,s=i*2;return An(e)?Xp(e,r(0,e.length-1),t):Fr(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},so=function(e){return e.replace(o_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(a_);return Wp(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},qp=function(e,t,n,i,s){var o=t-e,a=i-n;return Fr(s,function(l){return n+((l-e)/o*a||0)})},C_=function r(e,t,n,i){var s=isNaN(e+t)?0:function(f){return(1-f)*e+f*t};if(!s){var o=rn(e),a={},l,c,h,u,d;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(An(e)&&!An(t)){for(h=[],u=e.length,d=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(_){_*=u;var m=Math.min(d,~~_);return h[m](_-m)},n=t}else i||(e=to(An(e)?[]:{},e));if(!h){for(l in t)lf.call(a,e,l,"get",t[l]);s=function(_){return df(_,a)||(o?e.p:e)}}}return Fr(n,s)},bp=function(e,t,n){var i=e.labels,s=Ti,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},li=function(e,t,n){var i=e.vars,s=i[t],o=Ot,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Dr.length&&Ul(),a&&(Ot=a),h=l?s.apply(c,l):s.call(c),Ot=o,h},ia=function(e){return Nr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!vn),e.progress()<1&&li(e,"onInterrupt"),e},js,Yp=[],Zp=function(e){if(e)if(e=!e.name&&e.default||e,$u()||e.headless){var t=e.name,n=qt(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ca,render:df,add:lf,kill:W_,modifier:G_,rawVars:0},o={targetTest:0,get:0,getSetter:Xl,aliases:{},register:0};if(ro(),e!==i){if(jn[t])return;hi(i,hi(Ol(e,s),o)),to(i.prototype,to(s,Ol(e,o))),jn[i.prop=t]=i,e.targetTest&&(Ll.push(i),ef[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Ip(t,i),e.register&&e.register(Cn,i,kn)}else Yp.push(e)},It=255,ra={aqua:[0,It,It],lime:[0,It,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,It],navy:[0,0,128],white:[It,It,It],olive:[128,128,0],yellow:[It,It,0],orange:[It,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[It,0,0],pink:[It,192,203],cyan:[0,It,It],transparent:[It,It,It,0]},Nu=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*It+.5|0},Jp=function(e,t,n){var i=e?cr(e)?[e>>16,e>>8&It,e&It]:0:ra.black,s,o,a,l,c,h,u,d,f,_;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ra[e])i=ra[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&It,i&It,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&It,e&It]}else if(e.substr(0,3)==="hsl"){if(i=_=e.match(xp),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Nu(l+1/3,s,o),i[1]=Nu(l,s,o),i[2]=Nu(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(Ku),n&&i.length<4&&(i[3]=1),i}else i=e.match(xp)||ra.transparent;i=i.map(Number)}return t&&!_&&(s=i[0]/It,o=i[1]/It,a=i[2]/It,u=Math.max(s,o,a),d=Math.min(s,o,a),h=(u+d)/2,u===d?l=c=0:(f=u-d,c=h>.5?f/(2-u-d):f/(u+d),l=u===s?(o-a)/f+(o<a?6:0):u===o?(a-s)/f+2:(s-o)/f+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},$p=function(e){var t=[],n=[],i=-1;return e.split(lr).forEach(function(s){var o=s.match(ps)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},Tp=function(e,t,n){var i="",s=(e+i).match(lr),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(d){return(d=Jp(d,t,1))&&o+(t?d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:d.join(","))+")"}),n&&(h=$p(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(lr,"1").split(ps),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(lr),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},lr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ra)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),R_=/hsl[a]?\(/,of=function(e){var t=e.join(" "),n;if(lr.lastIndex=0,lr.test(t))return n=R_.test(t),e[1]=Tp(e[1],n),e[0]=Tp(e[0],n,$p(e[1])),!0},ha,ei=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,d,f,_=function m(g){var p=r()-i,v=g===!0,M,y,T,E;if((p>e||p<0)&&(n+=p-t),i+=p,T=i-n,M=T-o,(M>0||v)&&(E=++u.frame,d=T-u.time*1e3,u.time=T=T/1e3,o+=M+(M>=s?4:s-M),y=1),v||(l=c(m)),y)for(f=0;f<a.length;f++)a[f](T,d,E,g)};return u={time:0,frame:0,tick:function(){_(!0)},deltaRatio:function(g){return d/(1e3/(g||60))},wake:function(){Rp&&(!zu&&$u()&&(Wi=zu=window,ju=Wi.document||{},ci.gsap=Cn,(Wi.gsapVersions||(Wi.gsapVersions=[])).push(Cn.version),Pp(Fl||Wi.GreenSockGlobals||!Wi.gsap&&Wi||{}),Yp.forEach(Zp)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(g){return setTimeout(g,o-u.time*1e3+1|0)},ha=1,_(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),ha=0,c=ca},lagSmoothing:function(g,p){e=g||1/0,t=Math.min(p||33,e)},fps:function(g){s=1e3/(g||240),o=u.time*1e3+s},add:function(g,p,v){var M=p?function(y,T,E,A){g(y,T,E,A),u.remove(M)}:g;return u.remove(g),a[v?"unshift":"push"](M),ro(),M},remove:function(g,p){~(p=a.indexOf(g))&&a.splice(p,1)&&f>=p&&f--},_listeners:a},u})(),ro=function(){return!ha&&ei.wake()},ut={},P_=/^[\d.\-M][\d.\-,\s]/,I_=/["']/g,D_=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(I_,"").trim():+c,i=l.substr(a+1).trim();return t},L_=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},N_=function(e){var t=(e+"").split("("),n=ut[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[D_(t[1])]:L_(e).split(",").map(Np)):ut._CE&&P_.test(e)?ut._CE("",e):n},Kp=function(e){return function(t){return 1-e(1-t)}},Qp=function r(e,t){for(var n=e._first,i;n;)n instanceof yn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},fs=function(e,t){return e&&(qt(e)?e:ut[e]||N_(e))||t},gs=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return Bn(e,function(a){ut[a]=ci[a]=s,ut[o=a.toLowerCase()]=n;for(var l in s)ut[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=ut[a+"."+l]=s[l]}),s},jp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Fu=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/ku*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*s_((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:jp(a);return s=ku/s,l.config=function(c,h){return r(e,c,h)},l},Uu=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:jp(n);return i.config=function(s){return r(e,s)},i};Bn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;gs(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});ut.Linear.easeNone=ut.none=ut.Linear.easeIn;gs("Elastic",Fu("in"),Fu("out"),Fu());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};gs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);gs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});gs("Circ",function(r){return-(Ap(1-r*r)-1)});gs("Sine",function(r){return r===1?1:-r_(r*n_)+1});gs("Back",Uu("in"),Uu("out"),Uu());ut.SteppedEase=ut.steps=ci.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-Dt;return function(a){return((i*fa(0,o,a)|0)+s)*n}}};eo.ease=ut["quad.out"];Bn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return tf+=r+","+r+"Params,"});var af=function(e,t){this.id=i_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:rf,this.set=t?t.getSetter:Xl},ua=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,io(this,+t.duration,1,1),this.data=t.data,Ot&&(this._ctx=Ot,Ot.data.push(this)),ha||ei.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,io(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(ro(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Wl(this,n),!s._dp||s.parent||Op(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Xi(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Dt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),Lp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+Mp(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+Mp(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?no(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Dt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Bl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Dt?0:this._rts,this.totalTime(fa(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Gl(this),m_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(ro(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Dt&&(this._tTime-=Dt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=zt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Xi(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(ti(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Bl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=u_);var i=vn;return vn=n,sf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),vn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,Sp(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,Sp(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(bi(this,n),ti(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ti(i)),this._dur||(this._zTime=-Dt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Dt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Dt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Dt)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=qt(n)?n:Fp,l=function(){var h=i.then;i.then=null,s&&s(),qt(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){ia(this)},r})();hi(ua.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Dt,_prom:0,_ps:!1,_rts:1});var yn=(function(r){wp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ti(n.sortChildren),Vt&&Xi(n.parent||Vt,ar(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Bp(ar(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return oa(0,arguments,this),this},t.from=function(i,s,o){return oa(1,arguments,this),this},t.fromTo=function(i,s,o,a){return oa(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new $t(i,s,bi(this,o),1),this},t.call=function(i,s,o){return Xi(this,$t.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new $t(i,o,bi(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,sa(o).immediateRender=ti(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,sa(a).immediateRender=ti(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:zt(i),u=this._zTime<0!=i<0&&(this._initted||!c),d,f,_,m,g,p,v,M,y,T,E,A;if(this!==Vt&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),d=h,y=this._start,M=this._ts,p=!M,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,g=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(g*100+i,s,o);if(d=zt(h%g),h===l?(m=this._repeat,d=c):(T=zt(h/g),m=~~T,m&&m===T&&(d=c,m--),d>c&&(d=c)),T=no(this._tTime,g),!a&&this._tTime&&T!==m&&this._tTime-T*g-this._dur<=0&&(T=m),E&&m&1&&(d=c-d,A=1),m!==T&&!this._lock){var C=E&&T&1,x=C===(E&&m&1);if(m<T&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(A?0:zt(m*g)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&li(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,T=m),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;Qp(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(v=y_(this,zt(a),zt(d)),v&&(h-=d-(d=v._start))),this._tTime=h,this._time=d,this._act=!M,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!T&&(li(this,"onStart"),this._tTime!==h))return this;if(d>=a&&i>=0)for(f=this._first;f;){if(_=f._next,(f._act||d>=f._start)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(d-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(d-f._start)*f._ts,s,o),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=-Dt);break}}f=_}else{f=this._last;for(var b=i<0?i:d;f;){if(_=f._prev,(f._act||b<=f._end)&&f._ts&&v!==f){if(f.parent!==this)return this.render(i,s,o);if(f.render(f._ts>0?(b-f._start)*f._ts:(f._dirty?f.totalDuration():f._tDur)+(b-f._start)*f._ts,s,o||vn&&sf(f)),d!==this._time||!this._ts&&!p){v=0,_&&(h+=this._zTime=b?-Dt:Dt);break}}f=_}}if(v&&!s&&(this.pause(),v.render(d>=a?0:-Dt)._zTime=d>=a?1:-1,this._ts))return this._start=y,Gl(this),this.render(i,s,o);this._onUpdate&&!s&&li(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(M)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Nr(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(li(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(cr(s)||(s=bi(this,s,i)),!(i instanceof ua)){if(An(i))return i.forEach(function(a){return o.add(a,s)}),this;if(rn(i))return this.addLabel(i,s);if(qt(i))i=$t.delayedCall(0,i);else return this}return this!==i?Xi(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Ti);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof $t?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return rn(i)?this.removeLabel(i):qt(i)?this.killTweensOf(i):(i.parent===this&&Hl(this,i),i===this._recent&&(this._recent=this._last),us(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(ei.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=bi(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=$t.delayedCall(0,s||ca,o);return a.data="isPause",this._hasPause=1,Xi(this,a,bi(this,i))},t.removePause=function(i){var s=this._first;for(i=bi(this,i);s;)s._start===i&&s.data==="isPause"&&Nr(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ir!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=Ei(i),l=this._first,c=cr(s),h;l;)l instanceof $t?f_(l._targets,a)&&(c?(!Ir||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=bi(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,d=l.immediateRender,f,_=$t.to(o,hi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Dt,onStart:function(){if(o.pause(),!f){var g=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());_._dur!==g&&io(_,g,0,1).render(_._time,!0,!0),f=1}h&&h.apply(_,u||[])}},s));return d?_.render(0):_},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,hi({startAt:{time:bi(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),bp(this,bi(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),bp(this,bi(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Dt)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=zt(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return us(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),us(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=Ti,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,Xi(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=zt(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;io(o,o===Vt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(Vt._ts&&(Lp(Vt,Bl(i,Vt)),Dp=ei.frame),ei.frame>=yp){yp+=ni.autoSleep||120;var s=Vt._first;if((!s||!s._ts)&&ni.autoSleep&&ei._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ei.sleep()}}},e})(ua);hi(yn.prototype,{_lock:0,_hasPause:0,_forcing:0});var F_=function(e,t,n,i,s,o,a){var l=new kn(this._pt,e,t,0,1,ff,null,s),c=0,h=0,u,d,f,_,m,g,p,v;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=so(i)),o&&(v=[n,i],o(v,e,t),n=v[0],i=v[1]),d=n.match(Du)||[];u=Du.exec(i);)_=u[0],m=i.substring(c,u.index),f?f=(f+1)%5:m.substr(-5)==="rgba("&&(f=1),_!==d[h++]&&(g=parseFloat(d[h-1])||0,l._pt={_next:l._pt,p:m||h===1?m:",",s:g,c:_.charAt(1)==="="?ms(g,_)-g:parseFloat(_)-g,m:f&&f<4?Math.round:0},c=Du.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Qu.test(i)||p)&&(l.e=0),this._pt=l,l},lf=function(e,t,n,i,s,o,a,l,c,h){qt(i)&&(i=i(s||0,e,o));var u=e[t],d=n!=="get"?n:qt(u)?c?e[t.indexOf("set")||!qt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,f=qt(u)?c?z_:nm:uf,_;if(rn(i)&&(~i.indexOf("random(")&&(i=so(i)),i.charAt(1)==="="&&(_=ms(d,i)+(Mn(d)||0),(_||_===0)&&(i=_))),!h||d!==i||Yu)return!isNaN(d*i)&&i!==""?(_=new kn(this._pt,e,t,+d||0,i-(d||0),typeof u=="boolean"?H_:im,0,f),c&&(_.fp=c),a&&_.modifier(a,this,e),this._pt=_):(!u&&!(t in e)&&Vl(t,i),F_.call(this,e,t,d,i,f,l||ni.stringFilter,c))},U_=function(e,t,n,i,s){if(qt(e)&&(e=aa(e,s,t,n,i)),!qi(e)||e.style&&e.nodeType||An(e)||Cp(e))return rn(e)?aa(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=aa(e[a],s,t,n,i);return o},cf=function(e,t,n,i,s,o){var a,l,c,h;if(jn[e]&&(a=new jn[e]).init(s,a.rawVars?t[e]:U_(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new kn(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==js))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ir,Yu,hf=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,d=i.keyframes,f=i.autoRevert,_=e._dur,m=e._startAt,g=e._targets,p=e.parent,v=p&&p.data==="nested"?p.vars.targets:g,M=e._overwrite==="auto"&&!Ju,y=e.timeline,T,E,A,C,x,b,P,N,B,V,W,z,k;if(y&&(!d||!s)&&(s="none"),e._ease=fs(s,eo.ease),e._yEase=u?Kp(fs(u===!0?s:u,eo.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||d&&!i.stagger){if(N=g[0]?Lr(g[0]).harness:0,z=N&&i[N.prop],T=Ol(i,ef),m&&(m._zTime<0&&m.progress(1),t<0&&h&&a&&!f?m.render(-1,!0):m.revert(h&&_?Dl:h_),m._lazy=0),o){if(Nr(e._startAt=$t.set(g,hi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!m&&ti(l),startAt:null,delay:0,onUpdate:c&&function(){return li(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn||!a&&!f)&&e._startAt.revert(Dl),a&&_&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&_&&!m){if(t&&(a=!1),A=hi({overwrite:!1,data:"isFromStart",lazy:a&&!m&&ti(l),immediateRender:a,stagger:0,parent:p},T),z&&(A[N.prop]=z),Nr(e._startAt=$t.set(g,A)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(vn?e._startAt.revert(Dl):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,Dt,Dt);else if(!t)return}for(e._pt=e._ptCache=0,l=_&&ti(l)||l&&!_,E=0;E<g.length;E++){if(x=g[E],P=x._gsap||nf(g)[E]._gsap,e._ptLookup[E]=V={},Vu[P.id]&&Dr.length&&Ul(),W=v===g?E:v.indexOf(x),N&&(B=new N).init(x,z||T,e,W,v)!==!1&&(e._pt=C=new kn(e._pt,x,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(Z){V[Z]=C}),B.priority&&(b=1)),!N||z)for(A in T)jn[A]&&(B=cf(A,T,e,W,x,v))?B.priority&&(b=1):V[A]=C=lf.call(e,x,A,"get",T[A],W,v,0,i.stringFilter);e._op&&e._op[E]&&e.kill(x,e._op[E]),M&&e._pt&&(Ir=e,Vt.killTweensOf(x,V,e.globalTime(t)),k=!e.parent,Ir=0),e._pt&&l&&(Vu[P.id]=1)}b&&pf(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,d&&t<=0&&y.render(Ti,!0,!0)},O_=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,d,f;if(!c)for(c=e._ptCache[t]=[],d=e._ptLookup,f=e._targets.length;f--;){if(h=d[f][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return Yu=1,e.vars[t]="+=0",hf(e,a),Yu=0,l?la(t+" not eligible for reset"):1;c.push(h)}for(f=c.length;f--;)u=c[f],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Yt(n)+Mn(u.e)),u.b&&(u.b=h.s+Mn(u.b))},B_=function(e,t){var n=e[0]?Lr(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=to({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},k_=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(An(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},aa=function(e,t,n,i,s){return qt(e)?e.call(t,n,i,s):rn(e)&&~e.indexOf("random(")?so(e):e},em=tf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",tm={};Bn(em+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return tm[r]=1});var $t=(function(r){wp(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:sa(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,d=l.stagger,f=l.overwrite,_=l.keyframes,m=l.defaults,g=l.scrollTrigger,p=l.yoyoEase,v=i.parent||Vt,M=(An(n)||Cp(n)?cr(n[0]):"length"in i)?[n]:Ei(n),y,T,E,A,C,x,b,P;if(a._targets=M.length?nf(M):la("GSAP target "+n+" not found. https://gsap.com",!ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=f,_||d||Il(c)||Il(h)){if(i=a.vars,y=a.timeline=new yn({data:"nested",defaults:m||{},targets:v&&v.data==="nested"?v.vars.targets:M}),y.kill(),y.parent=y._dp=ar(a),y._start=0,d||Il(c)||Il(h)){if(A=M.length,b=d&&Hp(d),qi(d))for(C in d)~em.indexOf(C)&&(P||(P={}),P[C]=d[C]);for(T=0;T<A;T++)E=Ol(i,tm),E.stagger=0,p&&(E.yoyoEase=p),P&&to(E,P),x=M[T],E.duration=+aa(c,ar(a),T,x,M),E.delay=(+aa(h,ar(a),T,x,M)||0)-a._delay,!d&&A===1&&E.delay&&(a._delay=h=E.delay,a._start+=h,E.delay=0),y.to(x,E,b?b(T,x,M):0),y._ease=ut.none;y.duration()?c=h=0:a.timeline=0}else if(_){sa(hi(y.vars.defaults,{ease:"none"})),y._ease=fs(_.ease||i.ease||"none");var N=0,B,V,W;if(An(_))_.forEach(function(z){return y.to(M,z,">")}),y.duration();else{E={};for(C in _)C==="ease"||C==="easeEach"||k_(C,_[C],E,_.easeEach);for(C in E)for(B=E[C].sort(function(z,k){return z.t-k.t}),N=0,T=0;T<B.length;T++)V=B[T],W={ease:V.e,duration:(V.t-(T?B[T-1].t:0))/100*c},W[C]=V.v,y.to(M,W,N),N+=W.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return f===!0&&!Ju&&(Ir=ar(a),Vt.killTweensOf(M),Ir=0),Xi(v,ar(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!_&&a._start===zt(v._time)&&ti(u)&&g_(ar(a))&&v.data!=="nested")&&(a._tTime=-Dt,a.render(Math.max(0,-h)||0)),g&&Bp(ar(a),g),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-Dt&&!h?l:i<Dt?0:i,d,f,_,m,g,p,v,M,y;if(!c)x_(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(d=u,M=this.timeline,this._repeat){if(m=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(m*100+i,s,o);if(d=zt(u%m),u===l?(_=this._repeat,d=c):(g=zt(u/m),_=~~g,_&&_===g?(d=c,_--):d>c&&(d=c)),p=this._yoyo&&_&1,p&&(y=this._yEase,d=c-d),g=no(this._tTime,m),d===a&&!o&&this._initted&&_===g)return this._tTime=u,this;_!==g&&(M&&this._yEase&&Qp(M,p),this.vars.repeatRefresh&&!p&&!this._lock&&d!==m&&this._initted&&(this._lock=o=1,this.render(zt(m*_),!0).invalidate()._lock=0))}if(!this._initted){if(kp(this,h?i:d,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&_!==g))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=d,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=v=(y||this._ease)(d/c),this._from&&(this.ratio=v=1-v),!a&&u&&!s&&!g&&(li(this,"onStart"),this._tTime!==u))return this;for(f=this._pt;f;)f.r(v,f.d),f=f._next;M&&M.render(i<0?i:M._dur*M._ease(d/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&Hu(this,i,s,o),li(this,"onUpdate")),this._repeat&&_!==g&&this.vars.onRepeat&&!s&&this.parent&&li(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&Hu(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Nr(this,1),!s&&!(h&&!a)&&(u||a||p)&&(li(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){ha||ei.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||hf(this,c),h=this._ease(c/this._dur),O_(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Wl(this,0),this.parent||Up(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ia(this):this.scrollTrigger&&this.scrollTrigger.kill(!!vn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ir&&Ir.vars.overwrite!==!0)._first||ia(this),this.parent&&o!==this.timeline.totalDuration()&&io(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Ei(i):a,c=this._ptLookup,h=this._pt,u,d,f,_,m,g,p;if((!s||s==="all")&&p_(a,l))return s==="all"&&(this._pt=0),ia(this);for(u=this._op=this._op||[],s!=="all"&&(rn(s)&&(m={},Bn(s,function(v){return m[v]=1}),s=m),s=B_(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){d=c[p],s==="all"?(u[p]=s,_=d,f={}):(f=u[p]=u[p]||{},_=s);for(m in _)g=d&&d[m],g&&((!("kill"in g.d)||g.d.kill(m)===!0)&&Hl(this,g,"_pt"),delete d[m]),f!=="all"&&(f[m]=1)}return this._initted&&!this._pt&&h&&ia(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return oa(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return oa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return Vt.killTweensOf(i,s,o)},e})(ua);hi($t.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Bn("staggerTo,staggerFrom,staggerFromTo",function(r){$t[r]=function(){var e=new yn,t=Wu.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var uf=function(e,t,n){return e[t]=n},nm=function(e,t,n){return e[t](n)},z_=function(e,t,n,i){return e[t](i.fp,n)},V_=function(e,t,n){return e.setAttribute(t,n)},Xl=function(e,t){return qt(e[t])?nm:zl(e[t])&&e.setAttribute?V_:uf},im=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},H_=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},ff=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},df=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},G_=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},W_=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Hl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},X_=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},pf=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},kn=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||im,this.d=l||this,this.set=c||uf,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=X_,this.m=n,this.mt=s,this.tween=i},r})();Bn(tf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return ef[r]=1});ci.TweenMax=ci.TweenLite=$t;ci.TimelineLite=ci.TimelineMax=yn;Vt=new yn({sortChildren:!1,defaults:eo,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});ni.stringFilter=of;var ds=[],Nl={},q_=[],Ep=0,Y_=0,Ou=function(e){return(Nl[e]||q_).map(function(t){return t()})},Zu=function(){var e=Date.now(),t=[];e-Ep>2&&(Ou("matchMediaInit"),ds.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Wi.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),Ou("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Ep=e,Ou("matchMedia"))},rm=(function(){function r(t,n){this.selector=n&&Xu(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Y_++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){qt(n)&&(s=i,i=n,n=qt);var o=this,a=function(){var c=Ot,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=Xu(s)),Ot=o,u=i.apply(o,arguments),qt(u)&&o._r.push(u),Ot=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===qt?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=Ot;Ot=null,n(this),Ot=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof $t&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof yn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof $t)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=ds.length;o--;)ds[o].id===this.id&&ds.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),Z_=(function(){function r(t){this.contexts=[],this.scope=t,Ot&&Ot.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){qi(n)||(n={matches:n});var o=new rm(0,s||this.scope),a=o.conditions={},l,c,h;Ot&&!o.selector&&(o.selector=Ot.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Wi.matchMedia(n[c]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(Zu):l.addEventListener("change",Zu)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),kl={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Zp(i)})},timeline:function(e){return new yn(e)},getTweensOf:function(e,t){return Vt.getTweensOf(e,t)},getProperty:function(e,t,n,i){rn(e)&&(e=Ei(e)[0]);var s=Lr(e||{}).get,o=n?Fp:Np;return n==="native"&&(n=""),e&&(t?o((jn[t]&&jn[t].get||s)(e,t,n,i)):function(a,l,c){return o((jn[a]&&jn[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=Ei(e),e.length>1){var i=e.map(function(h){return Cn.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=jn[t],a=Lr(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;js._pt=0,u.init(e,n?h+n:h,js,0,[e]),u.render(1,u),js._pt&&df(1,js)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=Cn.to(e,hi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return Vt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,eo.ease)),vp(eo,e||{})},config:function(e){return vp(ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!jn[a]&&!ci[a]&&la(t+" effect requires "+a+" plugin.")}),Lu[t]=function(a,l,c){return n(Ei(a),hi(l||{},s),c)},o&&(yn.prototype[t]=function(a,l,c){return this.add(Lu[t](a,qi(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){ut[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):ut},getById:function(e){return Vt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new yn(e),i,s;for(n.smoothChildTiming=ti(e.smoothChildTiming),Vt.remove(n),n._dp=0,n._time=n._tTime=Vt._time,i=Vt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof $t&&i.vars.onComplete===i._targets[0]))&&Xi(n,i,i._start-i._delay),i=s;return Xi(Vt,n,0),n},context:function(e,t){return e?new rm(e,t):Ot},matchMedia:function(e){return new Z_(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||Zu()},addEventListener:function(e,t){var n=Nl[e]||(Nl[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Nl[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:w_,wrapYoyo:A_,distribute:Hp,random:Wp,snap:Gp,normalize:E_,getUnit:Mn,clamp:M_,splitColor:Jp,toArray:Ei,selector:Xu,mapRange:qp,pipe:b_,unitize:T_,interpolate:C_,shuffle:Vp},install:Pp,effects:Lu,ticker:ei,updateRoot:yn.updateRoot,plugins:jn,globalTimeline:Vt,core:{PropTween:kn,globals:Ip,Tween:$t,Timeline:yn,Animation:ua,getCache:Lr,_removeLinkedListItem:Hl,reverting:function(){return vn},context:function(e){return e&&Ot&&(Ot.data.push(e),e._ctx=Ot),Ot},suppressOverwrites:function(e){return Ju=e}}};Bn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return kl[r]=$t[r]});ei.add(yn.updateRoot);js=kl.to({},{duration:0});var J_=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},$_=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=J_(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},Bu=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(rn(s)&&(l={},Bn(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}$_(a,s)}}}},Cn=kl.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)vn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Bu("roundProps",qu),Bu("modifiers"),Bu("snap",Gp))||kl;$t.version=yn.version=Cn.version="3.14.2";Rp=1;$u()&&ro();var K_=ut.Power0,Q_=ut.Power1,j_=ut.Power2,ex=ut.Power3,tx=ut.Power4,nx=ut.Linear,ix=ut.Quad,rx=ut.Cubic,sx=ut.Quart,ox=ut.Quint,ax=ut.Strong,lx=ut.Elastic,cx=ut.Back,hx=ut.SteppedEase,ux=ut.Bounce,fx=ut.Sine,dx=ut.Expo,px=ut.Circ;var sm,Ur,ao,vf,vs,mx,om,Mf,gx=function(){return typeof window<"u"},ur={},ys=180/Math.PI,lo=Math.PI/180,oo=Math.atan2,am=1e8,Sf=/([A-Z])/g,_x=/(left|right|width|margin|padding|x)/i,xx=/[\s,\(]\S/,Yi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},gf=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},yx=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},vx=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Mx=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Sx=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},mm=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},gm=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},bx=function(e,t,n){return e.style[t]=n},Tx=function(e,t,n){return e.style.setProperty(t,n)},Ex=function(e,t,n){return e._gsap[t]=n},wx=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Ax=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Cx=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Ht="transform",ii=Ht+"Origin",Rx=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in ur&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Yi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=hr(i,a)}):this.tfm[e]=o.x?o[e]:hr(i,e),e===ii&&(this.tfm.zOrigin=o.zOrigin);else return Yi.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Ht)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ii,t,"")),e=Ht}(s||t)&&this.props.push(e,t,s[e])},_m=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Px=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Sf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Mf(),(!s||!s.isStart)&&!n[Ht]&&(_m(n),i.zOrigin&&n[ii]&&(n[ii]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},xm=function(e,t){var n={target:e,props:[],revert:Px,save:Rx};return e._gsap||Cn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},ym,_f=function(e,t){var n=Ur.createElementNS?Ur.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Ur.createElement(e);return n&&n.style?n:Ur.createElement(e)},ui=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Sf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,co(t)||t,1)||""},lm="O,Moz,ms,Ms,Webkit".split(","),co=function(e,t,n){var i=t||vs,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(lm[o]+e in s););return o<0?null:(o===3?"ms":o>=0?lm[o]:"")+e},xf=function(){gx()&&window.document&&(sm=window,Ur=sm.document,ao=Ur.documentElement,vs=_f("div")||{style:{}},mx=_f("div"),Ht=co(Ht),ii=Ht+"Origin",vs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",ym=!!co("perspective"),Mf=Cn.core.reverting,vf=1)},cm=function(e){var t=e.ownerSVGElement,n=_f("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ao.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ao.removeChild(n),s},hm=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},vm=function(e){var t,n;try{t=e.getBBox()}catch{t=cm(e),n=1}return t&&(t.width||t.height)||n||(t=cm(e)),t&&!t.width&&!t.x&&!t.y?{x:+hm(e,["x","cx","x1"])||0,y:+hm(e,["y","cy","y1"])||0,width:0,height:0}:t},Mm=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&vm(e))},Br=function(e,t){if(t){var n=e.style,i;t in ur&&t!==ii&&(t=Ht),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Sf,"-$1").toLowerCase())):n.removeAttribute(t)}},Or=function(e,t,n,i,s,o){var a=new kn(e._pt,t,n,0,1,o?gm:mm);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},um={deg:1,rad:1,turn:1},Ix={grid:1,flex:1},kr=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=vs.style,l=_x.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,d=i==="px",f=i==="%",_,m,g,p;if(i===o||!s||um[i]||um[o])return s;if(o!=="px"&&!d&&(s=r(e,t,n,"px")),p=e.getCTM&&Mm(e),(f||o==="%")&&(ur[t]||~t.indexOf("adius")))return _=p?e.getBBox()[l?"width":"height"]:e[h],Yt(f?s/_*u:s/100*_);if(a[l?"width":"height"]=u+(d?o:i),m=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,p&&(m=(e.ownerSVGElement||{}).parentNode),(!m||m===Ur||!m.appendChild)&&(m=Ur.body),g=m._gsap,g&&f&&g.width&&l&&g.time===ei.time&&!g.uncache)return Yt(s/g.width*u);if(f&&(t==="height"||t==="width")){var v=e.style[t];e.style[t]=u+i,_=e[h],v?e.style[t]=v:Br(e,t)}else(f||o==="%")&&!Ix[ui(m,"display")]&&(a.position=ui(e,"position")),m===e&&(a.position="static"),m.appendChild(vs),_=vs[h],m.removeChild(vs),a.position="absolute";return l&&f&&(g=Lr(m),g.time=ei.time,g.width=m[h]),Yt(d?_*s/u:_&&s?u/_*s:0)},hr=function(e,t,n,i){var s;return vf||xf(),t in Yi&&t!=="transform"&&(t=Yi[t],~t.indexOf(",")&&(t=t.split(",")[0])),ur[t]&&t!=="transform"?(s=ma(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yl(ui(e,ii))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ql[t]&&ql[t](e,t,n)||ui(e,t)||rf(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?kr(e,t,s,n)+n:s},Dx=function(e,t,n,i){if(!n||n==="none"){var s=co(t,e,1),o=s&&ui(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=ui(e,"borderTopColor"))}var a=new kn(this._pt,e.style,t,0,1,ff),l=0,c=0,h,u,d,f,_,m,g,p,v,M,y,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=ui(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(m=e.style[t],e.style[t]=i,i=ui(e,t)||i,m?e.style[t]=m:Br(e,t)),h=[n,i],of(h),n=h[0],i=h[1],d=n.match(ps)||[],T=i.match(ps)||[],T.length){for(;u=ps.exec(i);)g=u[0],v=i.substring(l,u.index),_?_=(_+1)%5:(v.substr(-5)==="rgba("||v.substr(-5)==="hsla(")&&(_=1),g!==(m=d[c++]||"")&&(f=parseFloat(m)||0,y=m.substr((f+"").length),g.charAt(1)==="="&&(g=ms(f,g)+y),p=parseFloat(g),M=g.substr((p+"").length),l=ps.lastIndex-M.length,M||(M=M||ni.units[t]||y,l===i.length&&(i+=M,a.e+=M)),y!==M&&(f=kr(e,t,m,M)||0),a._pt={_next:a._pt,p:v||c===1?v:",",s:f,c:p-f,m:_&&_<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?gm:mm;return Qu.test(i)&&(a.e=0),this._pt=a,a},fm={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Lx=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=fm[n]||n,t[1]=fm[i]||i,t.join(" ")},Nx=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],ur[a]&&(l=1,a=a==="transformOrigin"?ii:Ht),Br(n,a);l&&(Br(n,Ht),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",ma(n,1),o.uncache=1,_m(i)))}},ql={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new kn(e._pt,t,n,0,0,Nx);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},pa=[1,0,0,1,0,0],Sm={},bm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},dm=function(e){var t=ui(e,Ht);return bm(t)?pa:t.substr(7).match(Ku).map(Yt)},bf=function(e,t){var n=e._gsap||Lr(e),i=e.style,s=dm(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?pa:s):(s===pa&&!e.offsetParent&&e!==ao&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ao.appendChild(e)),s=dm(e),l?i.display=l:Br(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ao.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},yf=function(e,t,n,i,s,o){var a=e._gsap,l=s||bf(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,d=a.yOffset||0,f=l[0],_=l[1],m=l[2],g=l[3],p=l[4],v=l[5],M=t.split(" "),y=parseFloat(M[0])||0,T=parseFloat(M[1])||0,E,A,C,x;n?l!==pa&&(A=f*g-_*m)&&(C=y*(g/A)+T*(-m/A)+(m*v-g*p)/A,x=y*(-_/A)+T*(f/A)-(f*v-_*p)/A,y=C,T=x):(E=vm(e),y=E.x+(~M[0].indexOf("%")?y/100*E.width:y),T=E.y+(~(M[1]||M[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(p=y-c,v=T-h,a.xOffset=u+(p*f+v*m)-p,a.yOffset=d+(p*_+v*g)-v):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=T,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ii]="0px 0px",o&&(Or(o,a,"xOrigin",c,y),Or(o,a,"yOrigin",h,T),Or(o,a,"xOffset",u,a.xOffset),Or(o,a,"yOffset",d,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+T)},ma=function(e,t){var n=e._gsap||new af(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=ui(e,ii)||"0",h,u,d,f,_,m,g,p,v,M,y,T,E,A,C,x,b,P,N,B,V,W,z,k,Z,ie,I,re,Ne,ke,Ye,$e;return h=u=d=m=g=p=v=M=y=0,f=_=1,n.svg=!!(e.getCTM&&Mm(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Ht]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Ht]!=="none"?l[Ht]:"")),i.scale=i.rotate=i.translate="none"),A=bf(e,n.svg),n.svg&&(n.uncache?(Z=e.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),yf(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,A)),T=n.xOrigin||0,E=n.yOrigin||0,A!==pa&&(P=A[0],N=A[1],B=A[2],V=A[3],h=W=A[4],u=z=A[5],A.length===6?(f=Math.sqrt(P*P+N*N),_=Math.sqrt(V*V+B*B),m=P||N?oo(N,P)*ys:0,v=B||V?oo(B,V)*ys+m:0,v&&(_*=Math.abs(Math.cos(v*lo))),n.svg&&(h-=T-(T*P+E*B),u-=E-(T*N+E*V))):($e=A[6],ke=A[7],I=A[8],re=A[9],Ne=A[10],Ye=A[11],h=A[12],u=A[13],d=A[14],C=oo($e,Ne),g=C*ys,C&&(x=Math.cos(-C),b=Math.sin(-C),k=W*x+I*b,Z=z*x+re*b,ie=$e*x+Ne*b,I=W*-b+I*x,re=z*-b+re*x,Ne=$e*-b+Ne*x,Ye=ke*-b+Ye*x,W=k,z=Z,$e=ie),C=oo(-B,Ne),p=C*ys,C&&(x=Math.cos(-C),b=Math.sin(-C),k=P*x-I*b,Z=N*x-re*b,ie=B*x-Ne*b,Ye=V*b+Ye*x,P=k,N=Z,B=ie),C=oo(N,P),m=C*ys,C&&(x=Math.cos(C),b=Math.sin(C),k=P*x+N*b,Z=W*x+z*b,N=N*x-P*b,z=z*x-W*b,P=k,W=Z),g&&Math.abs(g)+Math.abs(m)>359.9&&(g=m=0,p=180-p),f=Yt(Math.sqrt(P*P+N*N+B*B)),_=Yt(Math.sqrt(z*z+$e*$e)),C=oo(W,z),v=Math.abs(C)>2e-4?C*ys:0,y=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!bm(ui(e,Ht)),k&&e.setAttribute("transform",k))),Math.abs(v)>90&&Math.abs(v)<270&&(s?(f*=-1,v+=m<=0?180:-180,m+=m<=0?180:-180):(_*=-1,v+=v<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=d+o,n.scaleX=Yt(f),n.scaleY=Yt(_),n.rotation=Yt(m)+a,n.rotationX=Yt(g)+a,n.rotationY=Yt(p)+a,n.skewX=v+a,n.skewY=M+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ii]=Yl(c)),n.xOffset=n.yOffset=0,n.force3D=ni.force3D,n.renderTransform=n.svg?Ux:ym?Tm:Fx,n.uncache=0,n},Yl=function(e){return(e=e.split(" "))[0]+" "+e[1]},mf=function(e,t,n){var i=Mn(t);return Yt(parseFloat(t)+parseFloat(kr(e,"x",n+"px",i)))+i},Fx=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Tm(e,t)},_s="0deg",da="0px",xs=") ",Tm=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,d=n.skewX,f=n.skewY,_=n.scaleX,m=n.scaleY,g=n.transformPerspective,p=n.force3D,v=n.target,M=n.zOrigin,y="",T=p==="auto"&&e&&e!==1||p===!0;if(M&&(u!==_s||h!==_s)){var E=parseFloat(h)*lo,A=Math.sin(E),C=Math.cos(E),x;E=parseFloat(u)*lo,x=Math.cos(E),o=mf(v,o,A*x*-M),a=mf(v,a,-Math.sin(E)*-M),l=mf(v,l,C*x*-M+M)}g!==da&&(y+="perspective("+g+xs),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(T||o!==da||a!==da||l!==da)&&(y+=l!==da||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+xs),c!==_s&&(y+="rotate("+c+xs),h!==_s&&(y+="rotateY("+h+xs),u!==_s&&(y+="rotateX("+u+xs),(d!==_s||f!==_s)&&(y+="skew("+d+", "+f+xs),(_!==1||m!==1)&&(y+="scale("+_+", "+m+xs),v.style[Ht]=y||"translate(0, 0)"},Ux=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,d=n.scaleY,f=n.target,_=n.xOrigin,m=n.yOrigin,g=n.xOffset,p=n.yOffset,v=n.forceCSS,M=parseFloat(o),y=parseFloat(a),T,E,A,C,x;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=lo,c*=lo,T=Math.cos(l)*u,E=Math.sin(l)*u,A=Math.sin(l-c)*-d,C=Math.cos(l-c)*d,c&&(h*=lo,x=Math.tan(c-h),x=Math.sqrt(1+x*x),A*=x,C*=x,h&&(x=Math.tan(h),x=Math.sqrt(1+x*x),T*=x,E*=x)),T=Yt(T),E=Yt(E),A=Yt(A),C=Yt(C)):(T=u,C=d,E=A=0),(M&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(M=kr(f,"x",o,"px"),y=kr(f,"y",a,"px")),(_||m||g||p)&&(M=Yt(M+_-(_*T+m*A)+g),y=Yt(y+m-(_*E+m*C)+p)),(i||s)&&(x=f.getBBox(),M=Yt(M+i/100*x.width),y=Yt(y+s/100*x.height)),x="matrix("+T+","+E+","+A+","+C+","+M+","+y+")",f.setAttribute("transform",x),v&&(f.style[Ht]=x)},Ox=function(e,t,n,i,s){var o=360,a=rn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?ys:1),c=l-i,h=i+c+"deg",u,d;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*am)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*am)%o-~~(c/o)*o)),e._pt=d=new kn(e._pt,t,n,i,c,yx),d.e=h,d.u="deg",e._props.push(n),d},pm=function(e,t){for(var n in t)e[n]=t[n];return e},Bx=function(e,t,n){var i=pm({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,d,f,_;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Ht]=t,a=ma(n,1),Br(n,Ht),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Ht],o[Ht]=t,a=ma(n,1),o[Ht]=c);for(l in ur)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(f=Mn(c),_=Mn(h),u=f!==_?kr(n,l,c,_):parseFloat(c),d=parseFloat(h),e._pt=new kn(e._pt,a,l,u,d-u,gf),e._pt.u=_||0,e._props.push(l));pm(a,i)};Bn("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});ql[e>1?"border"+r:r]=function(a,l,c,h,u){var d,f;if(arguments.length<4)return d=o.map(function(_){return hr(a,_,c)}),f=d.join(" "),f.split(d[0]).length===5?d[0]:f;d=(h+"").split(" "),f={},o.forEach(function(_,m){return f[_]=d[m]=d[m]||d[(m-1)/2|0]}),a.init(l,f,u)}});var Tf={name:"css",register:xf,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,d,f,_,m,g,p,v,M,y,T,E,A,C,x;vf||xf(),this.styles=this.styles||xm(e),C=this.styles.props,this.tween=n;for(m in t)if(m!=="autoRound"&&(h=t[m],!(jn[m]&&cf(m,t,n,i,e,s)))){if(f=typeof h,_=ql[m],f==="function"&&(h=h.call(n,i,e,s),f=typeof h),f==="string"&&~h.indexOf("random(")&&(h=so(h)),_)_(this,e,m,h,n)&&(A=1);else if(m.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(m)+"").trim(),h+="",lr.lastIndex=0,lr.test(c)||(g=Mn(c),p=Mn(h),p?g!==p&&(c=kr(e,m,c,p)+p):g&&(h+=g)),this.add(a,"setProperty",c,h,i,s,0,0,m),o.push(m),C.push(m,0,a[m]);else if(f!=="undefined"){if(l&&m in l?(c=typeof l[m]=="function"?l[m].call(n,i,e,s):l[m],rn(c)&&~c.indexOf("random(")&&(c=so(c)),Mn(c+"")||c==="auto"||(c+=ni.units[m]||Mn(hr(e,m))||""),(c+"").charAt(1)==="="&&(c=hr(e,m))):c=hr(e,m),d=parseFloat(c),v=f==="string"&&h.charAt(1)==="="&&h.substr(0,2),v&&(h=h.substr(2)),u=parseFloat(h),m in Yi&&(m==="autoAlpha"&&(d===1&&hr(e,"visibility")==="hidden"&&u&&(d=0),C.push("visibility",0,a.visibility),Or(this,a,"visibility",d?"inherit":"hidden",u?"inherit":"hidden",!u)),m!=="scale"&&m!=="transform"&&(m=Yi[m],~m.indexOf(",")&&(m=m.split(",")[0]))),M=m in ur,M){if(this.styles.save(m),x=h,f==="string"&&h.substring(0,6)==="var(--"){if(h=ui(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var b=e.style.perspective;e.style.perspective=h,h=ui(e,"perspective"),b?e.style.perspective=b:Br(e,"perspective")}u=parseFloat(h)}if(y||(T=e._gsap,T.renderTransform&&!t.parseTransform||ma(e,t.parseTransform),E=t.smoothOrigin!==!1&&T.smooth,y=this._pt=new kn(this._pt,a,Ht,0,1,T.renderTransform,T,0,-1),y.dep=1),m==="scale")this._pt=new kn(this._pt,T,"scaleY",T.scaleY,(v?ms(T.scaleY,v+u):u)-T.scaleY||0,gf),this._pt.u=0,o.push("scaleY",m),m+="X";else if(m==="transformOrigin"){C.push(ii,0,a[ii]),h=Lx(h),T.svg?yf(e,h,0,E,0,this):(p=parseFloat(h.split(" ")[2])||0,p!==T.zOrigin&&Or(this,T,"zOrigin",T.zOrigin,p),Or(this,a,m,Yl(c),Yl(h)));continue}else if(m==="svgOrigin"){yf(e,h,1,E,0,this);continue}else if(m in Sm){Ox(this,T,m,d,v?ms(d,v+h):h);continue}else if(m==="smoothOrigin"){Or(this,T,"smooth",T.smooth,h);continue}else if(m==="force3D"){T[m]=h;continue}else if(m==="transform"){Bx(this,h,e);continue}}else m in a||(m=co(m)||m);if(M||(u||u===0)&&(d||d===0)&&!xx.test(h)&&m in a)g=(c+"").substr((d+"").length),u||(u=0),p=Mn(h)||(m in ni.units?ni.units[m]:g),g!==p&&(d=kr(e,m,c,p)),this._pt=new kn(this._pt,M?T:a,m,d,(v?ms(d,v+u):u)-d,!M&&(p==="px"||m==="zIndex")&&t.autoRound!==!1?Sx:gf),this._pt.u=p||0,M&&x!==h?(this._pt.b=c,this._pt.e=x,this._pt.r=Mx):g!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=vx);else if(m in a)Dx.call(this,e,m,c,v?v+h:h);else if(m in e)this.add(e,m,c||e[m],v?v+h:h,i,s);else if(m!=="parseTransform"){Vl(m,h);continue}M||(m in a?C.push(m,0,a[m]):typeof e[m]=="function"?C.push(m,2,e[m]()):C.push(m,1,c||e[m])),o.push(m)}}A&&pf(this)},render:function(e,t){if(t.tween._time||!Mf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:hr,aliases:Yi,getSetter:function(e,t,n){var i=Yi[t];return i&&i.indexOf(",")<0&&(t=i),t in ur&&t!==ii&&(e._gsap.x||hr(e,"x"))?n&&om===n?t==="scale"?wx:Ex:(om=n||{})&&(t==="scale"?Ax:Cx):e.style&&!zl(e.style[t])?bx:~t.indexOf("-")?Tx:Xl(e,t)},core:{_removeProperty:Br,_getMatrix:bf}};Cn.utils.checkPrefix=co;Cn.core.getStyleSaver=xm;(function(r,e,t,n){var i=Bn(r+","+e+","+t,function(s){ur[s]=1});Bn(e,function(s){ni.units[s]="deg",Sm[s]=1}),Yi[i[13]]=r+","+e,Bn(n,function(s){var o=s.split(":");Yi[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Bn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){ni.units[r]="px"});Cn.registerPlugin(Tf);var be=Cn.registerPlugin(Tf)||Cn,J1=be.core.Tween;function Em(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function kx(r,e,t){return e&&Em(r.prototype,e),t&&Em(r,t),r}var Sn,$l,zx,fi,zr,Vr,uo,Am,Ms,_a,Cm,fr,Fi,Rm,Pm=function(){return Sn||typeof window<"u"&&(Sn=window.gsap)&&Sn.registerPlugin&&Sn},Im=1,ho=[],rt=[],Ui=[],xa=Date.now,Ef=function(e,t){return t},Vx=function(){var e=_a.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,rt),i.push.apply(i,Ui),rt=n,Ui=i,Ef=function(o,a){return t[o](a)}},pr=function(e,t){return~Ui.indexOf(e)&&Ui[Ui.indexOf(e)+1][t]},ya=function(e){return!!~Cm.indexOf(e)},Vn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},zn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},Zl="scrollLeft",Jl="scrollTop",wf=function(){return fr&&fr.isPressed||rt.cache++},Kl=function(e,t){var n=function i(s){if(s||s===0){Im&&(fi.history.scrollRestoration="manual");var o=fr&&fr.isPressed;s=i.v=Math.round(s)||(fr&&fr.iOS?1:0),e(s),i.cacheID=rt.cache,o&&Ef("ss",s)}else(t||rt.cache!==i.cacheID||Ef("ref"))&&(i.cacheID=rt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},Rn={s:Zl,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:Kl(function(r){return arguments.length?fi.scrollTo(r,Qt.sc()):fi.pageXOffset||zr[Zl]||Vr[Zl]||uo[Zl]||0})},Qt={s:Jl,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Rn,sc:Kl(function(r){return arguments.length?fi.scrollTo(Rn.sc(),r):fi.pageYOffset||zr[Jl]||Vr[Jl]||uo[Jl]||0})},Hn=function(e,t){return(t&&t._ctx&&t._ctx.selector||Sn.utils.toArray)(e)[0]||(typeof e=="string"&&Sn.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},Hx=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},dr=function(e,t){var n=t.s,i=t.sc;ya(e)&&(e=zr.scrollingElement||Vr);var s=rt.indexOf(e),o=i===Qt.sc?1:2;!~s&&(s=rt.push(e)-1),rt[s+o]||Vn(e,"scroll",wf);var a=rt[s+o],l=a||(rt[s+o]=Kl(pr(e,n),!0)||(ya(e)?i:Kl(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=Sn.getProperty(e,"scrollBehavior")==="smooth"),l},Ql=function(e,t,n){var i=e,s=e,o=xa(),a=o,l=t||50,c=Math.max(500,l*3),h=function(_,m){var g=xa();m||g-o>l?(s=i,i=_,a=o,o=g):n?i+=_:i=s+(_-s)/(g-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},d=function(_){var m=a,g=s,p=xa();return(_||_===0)&&_!==i&&h(_),o===a||p-a>c?0:(i+(n?g:-g))/((n?p:o)-m)*1e3};return{update:h,reset:u,getVelocity:d}},ga=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},wm=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Dm=function(){_a=Sn.core.globals().ScrollTrigger,_a&&_a.core&&Vx()},Lm=function(e){return Sn=e||Pm(),!$l&&Sn&&typeof document<"u"&&document.body&&(fi=window,zr=document,Vr=zr.documentElement,uo=zr.body,Cm=[fi,zr,Vr,uo],zx=Sn.utils.clamp,Rm=Sn.core.context||function(){},Ms="onpointerenter"in uo?"pointer":"mouse",Am=Zt.isTouch=fi.matchMedia&&fi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in fi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Fi=Zt.eventTypes=("ontouchstart"in Vr?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in Vr?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Im=0},500),Dm(),$l=1),$l};Rn.op=Qt;rt.cache=0;var Zt=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){$l||Lm(Sn)||console.warn("Please gsap.registerPlugin(Observer)"),_a||Dm();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,d=n.onStopDelay,f=n.ignore,_=n.wheelSpeed,m=n.event,g=n.onDragStart,p=n.onDragEnd,v=n.onDrag,M=n.onPress,y=n.onRelease,T=n.onRight,E=n.onLeft,A=n.onUp,C=n.onDown,x=n.onChangeX,b=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,V=n.onHover,W=n.onHoverEnd,z=n.onMove,k=n.ignoreCheck,Z=n.isNormalizer,ie=n.onGestureStart,I=n.onGestureEnd,re=n.onWheel,Ne=n.onEnable,ke=n.onDisable,Ye=n.onClick,$e=n.scrollSpeed,J=n.capture,Q=n.allowClicks,fe=n.lockAxis,Ie=n.onLockAxis;this.target=a=Hn(a)||Vr,this.vars=n,f&&(f=Sn.utils.toArray(f)),i=i||1e-9,s=s||0,_=_||1,$e=$e||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(fi.getComputedStyle(uo).lineHeight)||22);var ve,Ge,ft,Ee,ze,Ke,Ue,G=this,F=0,_t=0,it=n.passive||!h&&n.passive!==!1,Ve=dr(a,Rn),Me=dr(a,Qt),R=Ve(),S=Me(),U=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Fi[0]==="pointerdown",$=ya(a),K=a.ownerDocument||zr,Y=[0,0,0],ye=[0,0,0],se=0,we=function(){return se=xa()},Te=function(Pe,je){return(G.event=Pe)&&f&&Hx(Pe.target,f)||je&&U&&Pe.pointerType!=="touch"||k&&k(Pe,je)},ne=function(){G._vx.reset(),G._vy.reset(),Ge.pause(),u&&u(G)},oe=function(){var Pe=G.deltaX=wm(Y),je=G.deltaY=wm(ye),pe=Math.abs(Pe)>=i,Ze=Math.abs(je)>=i;P&&(pe||Ze)&&P(G,Pe,je,Y,ye),pe&&(T&&G.deltaX>0&&T(G),E&&G.deltaX<0&&E(G),x&&x(G),N&&G.deltaX<0!=F<0&&N(G),F=G.deltaX,Y[0]=Y[1]=Y[2]=0),Ze&&(C&&G.deltaY>0&&C(G),A&&G.deltaY<0&&A(G),b&&b(G),B&&G.deltaY<0!=_t<0&&B(G),_t=G.deltaY,ye[0]=ye[1]=ye[2]=0),(Ee||ft)&&(z&&z(G),ft&&(g&&ft===1&&g(G),v&&v(G),ft=0),Ee=!1),Ke&&!(Ke=!1)&&Ie&&Ie(G),ze&&(re(G),ze=!1),ve=0},Se=function(Pe,je,pe){Y[pe]+=Pe,ye[pe]+=je,G._vx.update(Pe),G._vy.update(je),c?ve||(ve=requestAnimationFrame(oe)):oe()},Ae=function(Pe,je){fe&&!Ue&&(G.axis=Ue=Math.abs(Pe)>Math.abs(je)?"x":"y",Ke=!0),Ue!=="y"&&(Y[2]+=Pe,G._vx.update(Pe,!0)),Ue!=="x"&&(ye[2]+=je,G._vy.update(je,!0)),c?ve||(ve=requestAnimationFrame(oe)):oe()},ae=function(Pe){if(!Te(Pe,1)){Pe=ga(Pe,h);var je=Pe.clientX,pe=Pe.clientY,Ze=je-G.x,Le=pe-G.y,Je=G.isDragging;G.x=je,G.y=pe,(Je||(Ze||Le)&&(Math.abs(G.startX-je)>=s||Math.abs(G.startY-pe)>=s))&&(ft||(ft=Je?2:1),Je||(G.isDragging=!0),Ae(Ze,Le))}},qe=G.onPress=function(ge){Te(ge,1)||ge&&ge.button||(G.axis=Ue=null,Ge.pause(),G.isPressed=!0,ge=ga(ge),F=_t=0,G.startX=G.x=ge.clientX,G.startY=G.y=ge.clientY,G._vx.reset(),G._vy.reset(),Vn(Z?a:K,Fi[1],ae,it,!0),G.deltaX=G.deltaY=0,M&&M(G))},D=G.onRelease=function(ge){if(!Te(ge,1)){zn(Z?a:K,Fi[1],ae,!0);var Pe=!isNaN(G.y-G.startY),je=G.isDragging,pe=je&&(Math.abs(G.x-G.startX)>3||Math.abs(G.y-G.startY)>3),Ze=ga(ge);!pe&&Pe&&(G._vx.reset(),G._vy.reset(),h&&Q&&Sn.delayedCall(.08,function(){if(xa()-se>300&&!ge.defaultPrevented){if(ge.target.click)ge.target.click();else if(K.createEvent){var Le=K.createEvent("MouseEvents");Le.initMouseEvent("click",!0,!0,fi,1,Ze.screenX,Ze.screenY,Ze.clientX,Ze.clientY,!1,!1,!1,!1,0,null),ge.target.dispatchEvent(Le)}}})),G.isDragging=G.isGesturing=G.isPressed=!1,u&&je&&!Z&&Ge.restart(!0),ft&&oe(),p&&je&&p(G),y&&y(G,pe)}},he=function(Pe){return Pe.touches&&Pe.touches.length>1&&(G.isGesturing=!0)&&ie(Pe,G.isDragging)},te=function(){return(G.isGesturing=!1)||I(G)},ue=function(Pe){if(!Te(Pe)){var je=Ve(),pe=Me();Se((je-R)*$e,(pe-S)*$e,1),R=je,S=pe,u&&Ge.restart(!0)}},ee=function(Pe){if(!Te(Pe)){Pe=ga(Pe,h),re&&(ze=!0);var je=(Pe.deltaMode===1?l:Pe.deltaMode===2?fi.innerHeight:1)*_;Se(Pe.deltaX*je,Pe.deltaY*je,0),u&&!Z&&Ge.restart(!0)}},j=function(Pe){if(!Te(Pe)){var je=Pe.clientX,pe=Pe.clientY,Ze=je-G.x,Le=pe-G.y;G.x=je,G.y=pe,Ee=!0,u&&Ge.restart(!0),(Ze||Le)&&Ae(Ze,Le)}},ce=function(Pe){G.event=Pe,V(G)},Fe=function(Pe){G.event=Pe,W(G)},pt=function(Pe){return Te(Pe)||ga(Pe,h)&&Ye(G)};Ge=G._dc=Sn.delayedCall(d||.25,ne).pause(),G.deltaX=G.deltaY=0,G._vx=Ql(0,50,!0),G._vy=Ql(0,50,!0),G.scrollX=Ve,G.scrollY=Me,G.isDragging=G.isGesturing=G.isPressed=!1,Rm(this),G.enable=function(ge){return G.isEnabled||(Vn($?K:a,"scroll",wf),o.indexOf("scroll")>=0&&Vn($?K:a,"scroll",ue,it,J),o.indexOf("wheel")>=0&&Vn(a,"wheel",ee,it,J),(o.indexOf("touch")>=0&&Am||o.indexOf("pointer")>=0)&&(Vn(a,Fi[0],qe,it,J),Vn(K,Fi[2],D),Vn(K,Fi[3],D),Q&&Vn(a,"click",we,!0,!0),Ye&&Vn(a,"click",pt),ie&&Vn(K,"gesturestart",he),I&&Vn(K,"gestureend",te),V&&Vn(a,Ms+"enter",ce),W&&Vn(a,Ms+"leave",Fe),z&&Vn(a,Ms+"move",j)),G.isEnabled=!0,G.isDragging=G.isGesturing=G.isPressed=Ee=ft=!1,G._vx.reset(),G._vy.reset(),R=Ve(),S=Me(),ge&&ge.type&&qe(ge),Ne&&Ne(G)),G},G.disable=function(){G.isEnabled&&(ho.filter(function(ge){return ge!==G&&ya(ge.target)}).length||zn($?K:a,"scroll",wf),G.isPressed&&(G._vx.reset(),G._vy.reset(),zn(Z?a:K,Fi[1],ae,!0)),zn($?K:a,"scroll",ue,J),zn(a,"wheel",ee,J),zn(a,Fi[0],qe,J),zn(K,Fi[2],D),zn(K,Fi[3],D),zn(a,"click",we,!0),zn(a,"click",pt),zn(K,"gesturestart",he),zn(K,"gestureend",te),zn(a,Ms+"enter",ce),zn(a,Ms+"leave",Fe),zn(a,Ms+"move",j),G.isEnabled=G.isPressed=G.isDragging=!1,ke&&ke(G))},G.kill=G.revert=function(){G.disable();var ge=ho.indexOf(G);ge>=0&&ho.splice(ge,1),fr===G&&(fr=0)},ho.push(G),Z&&ya(a)&&(fr=G),G.enable(m)},kx(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Zt.version="3.14.2";Zt.create=function(r){return new Zt(r)};Zt.register=Lm;Zt.getAll=function(){return ho.slice()};Zt.getById=function(r){return ho.filter(function(e){return e.vars.id===r})[0]};Pm()&&Sn.registerPlugin(Zt);var Ce,mo,lt,Nt,mi,xt,Vf,pc,La,wa,Ma,jl,Pn,_c,Nf,Wn,Nm,Fm,go,Km,Af,Qm,Gn,Ff,jm,e0,Hr,Uf,Hf,_o,Gf,Aa,Of,Cf,ec=1,In=Date.now,Rf=In(),Ci=0,Sa=0,Um=function(e,t,n){var i=pi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Om=function(e,t){return t&&(!pi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},Gx=function r(){return Sa&&requestAnimationFrame(r)},Bm=function(){return _c=1},km=function(){return _c=0},Zi=function(e){return e},ba=function(e){return Math.round(e*1e5)/1e5||0},t0=function(){return typeof window<"u"},n0=function(){return Ce||t0()&&(Ce=window.gsap)&&Ce.registerPlugin&&Ce},As=function(e){return!!~Vf.indexOf(e)},i0=function(e){return(e==="Height"?Gf:lt["inner"+e])||mi["client"+e]||xt["client"+e]},r0=function(e){return pr(e,"getBoundingClientRect")||(As(e)?function(){return dc.width=lt.innerWidth,dc.height=Gf,dc}:function(){return mr(e)})},Wx=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=pr(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?i0(s):e["client"+s])||0}},Xx=function(e,t){return!t||~Ui.indexOf(e)?r0(e):function(){return dc}},Ji=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=pr(e,n))?o()-r0(e)()[s]:As(e)?(mi[n]||xt[n])-i0(i):e[n]-e["offset"+i])},tc=function(e,t){for(var n=0;n<go.length;n+=3)(!t||~t.indexOf(go[n+1]))&&e(go[n],go[n+1],go[n+2])},pi=function(e){return typeof e=="string"},Dn=function(e){return typeof e=="function"},Ta=function(e){return typeof e=="number"},Ss=function(e){return typeof e=="object"},va=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},Pf=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},fo=Math.abs,s0="left",o0="top",Wf="right",Xf="bottom",Ts="width",Es="height",Ca="Right",Ra="Left",Pa="Top",Ia="Bottom",jt="padding",wi="margin",yo="Width",qf="Height",sn="px",Ai=function(e){return lt.getComputedStyle(e)},qx=function(e){var t=Ai(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},zm=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},mr=function(e,t){var n=t&&Ai(e)[Nf]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ce.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},mc=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},a0=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},Yx=function(e){return function(t){return Ce.utils.snap(a0(e),t)}},Yf=function(e){var t=Ce.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Zx=function(e){return function(t,n){return Yf(a0(e))(t,n.direction)}},nc=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},mn=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},pn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},ic=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Vm={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},rc={toggleActions:"play",anticipatePin:0},gc={top:0,left:0,center:.5,bottom:1,right:1},cc=function(e,t){if(pi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in gc?gc[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},sc=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,d=s.indent,f=s.fontWeight,_=Nt.createElement("div"),m=As(n)||pr(n,"pinType")==="fixed",g=e.indexOf("scroller")!==-1,p=m?xt:n,v=e.indexOf("start")!==-1,M=v?c:h,y="border-color:"+M+";font-size:"+u+";color:"+M+";font-weight:"+f+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((g||l)&&m?"fixed;":"absolute;"),(g||l||!m)&&(y+=(i===Qt?Wf:Xf)+":"+(o+parseFloat(d))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),_._isStart=v,_.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),_.style.cssText=y,_.innerText=t||t===0?e+"-"+t:e,p.children[0]?p.insertBefore(_,p.children[0]):p.appendChild(_),_._offset=_["offset"+i.op.d2],hc(_,0,i,v),_},hc=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+yo]=1,s["border"+a+yo]=0,s[n.p]=t+"px",Ce.set(e,s)},st=[],Bf={},Na,Hm=function(){return In()-Ci>34&&(Na||(Na=requestAnimationFrame(gr)))},po=function(){(!Gn||!Gn.isPressed||Gn.startX>xt.clientWidth)&&(rt.cache++,Gn?Na||(Na=requestAnimationFrame(gr)):gr(),Ci||Rs("scrollStart"),Ci=In())},If=function(){e0=lt.innerWidth,jm=lt.innerHeight},Ea=function(e){rt.cache++,(e===!0||!Pn&&!Qm&&!Nt.fullscreenElement&&!Nt.webkitFullscreenElement&&(!Ff||e0!==lt.innerWidth||Math.abs(lt.innerHeight-jm)>lt.innerHeight*.25))&&pc.restart(!0)},Cs={},Jx=[],l0=function r(){return pn(et,"scrollEnd",r)||bs(!0)},Rs=function(e){return Cs[e]&&Cs[e].map(function(t){return t()})||Jx},di=[],c0=function(e){for(var t=0;t<di.length;t+=5)(!e||di[t+4]&&di[t+4].query===e)&&(di[t].style.cssText=di[t+1],di[t].getBBox&&di[t].setAttribute("transform",di[t+2]||""),di[t+3].uncache=1)},h0=function(){return rt.forEach(function(e){return Dn(e)&&++e.cacheID&&(e.rec=e())})},Zf=function(e,t){var n;for(Wn=0;Wn<st.length;Wn++)n=st[Wn],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));Aa=!0,t&&c0(t),t||Rs("revert")},u0=function(e,t){rt.cache++,(t||!Xn)&&rt.forEach(function(n){return Dn(n)&&n.cacheID++&&(n.rec=0)}),pi(e)&&(lt.history.scrollRestoration=Hf=e)},Xn,ws=0,Gm,$x=function(){if(Gm!==ws){var e=Gm=ws;requestAnimationFrame(function(){return e===ws&&bs(!0)})}},f0=function(){xt.appendChild(_o),Gf=!Gn&&_o.offsetHeight||lt.innerHeight,xt.removeChild(_o)},Wm=function(e){return La(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},bs=function(e,t){if(mi=Nt.documentElement,xt=Nt.body,Vf=[lt,Nt,mi,xt],Ci&&!e&&!Aa){mn(et,"scrollEnd",l0);return}f0(),Xn=et.isRefreshing=!0,Aa||h0();var n=Rs("refreshInit");Km&&et.sort(),t||Zf(),rt.forEach(function(i){Dn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),st.slice(0).forEach(function(i){return i.refresh()}),Aa=!1,st.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),Of=1,Wm(!0),st.forEach(function(i){var s=Ji(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Wm(!1),Of=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),rt.forEach(function(i){Dn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),u0(Hf,1),pc.pause(),ws++,Xn=2,gr(2),st.forEach(function(i){return Dn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Xn=et.isRefreshing=!1,Rs("refresh")},kf=0,uc=1,Da,gr=function(e){if(e===2||!Xn&&!Aa){et.isUpdating=!0,Da&&Da.update(0);var t=st.length,n=In(),i=n-Rf>=50,s=t&&st[0].scroll();if(uc=kf>s?-1:1,Xn||(kf=s),i&&(Ci&&!_c&&n-Ci>200&&(Ci=0,Rs("scrollEnd")),Ma=Rf,Rf=n),uc<0){for(Wn=t;Wn-- >0;)st[Wn]&&st[Wn].update(0,i);uc=1}else for(Wn=0;Wn<t;Wn++)st[Wn]&&st[Wn].update(0,i);et.isUpdating=!1}Na=0},zf=[s0,o0,Xf,Wf,wi+Ia,wi+Ca,wi+Pa,wi+Ra,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],fc=zf.concat([Ts,Es,"boxSizing","max"+yo,"max"+qf,"position",wi,jt,jt+Pa,jt+Ca,jt+Ia,jt+Ra]),Kx=function(e,t,n){xo(n);var i=e._gsap;if(i.spacerIsNative)xo(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},Df=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=zf.length,o=t.style,a=e.style,l;s--;)l=zf[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Xf]=a[Wf]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Ts]=mc(e,Rn)+sn,o[Es]=mc(e,Qt)+sn,o[jt]=a[wi]=a[o0]=a[s0]="0",xo(i),a[Ts]=a["max"+yo]=n[Ts],a[Es]=a["max"+qf]=n[Es],a[jt]=n[jt],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},Qx=/([A-Z])/g,xo=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ce.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(Qx,"-$1").toLowerCase())}},oc=function(e){for(var t=fc.length,n=e.style,i=[],s=0;s<t;s++)i.push(fc[s],n[fc[s]]);return i.t=e,i},jx=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},dc={left:0,top:0},Xm=function(e,t,n,i,s,o,a,l,c,h,u,d,f,_){Dn(e)&&(e=e(l)),pi(e)&&e.substr(0,3)==="max"&&(e=d+(e.charAt(4)==="="?cc("0"+e.substr(3),n):0));var m=f?f.time():0,g,p,v;if(f&&f.seek(0),isNaN(e)||(e=+e),Ta(e))f&&(e=Ce.utils.mapRange(f.scrollTrigger.start,f.scrollTrigger.end,0,d,e)),a&&hc(a,n,i,!0);else{Dn(t)&&(t=t(l));var M=(e||"0").split(" "),y,T,E,A;v=Hn(t,l)||xt,y=mr(v)||{},(!y||!y.left&&!y.top)&&Ai(v).display==="none"&&(A=v.style.display,v.style.display="block",y=mr(v),A?v.style.display=A:v.style.removeProperty("display")),T=cc(M[0],y[i.d]),E=cc(M[1]||"0",n),e=y[i.p]-c[i.p]-h+T+s-E,a&&hc(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(_&&(l[_]=e||-.001,e<0&&(e=0)),o){var C=e+n,x=o._isStart;g="scroll"+i.d2,hc(o,C,i,x&&C>20||!x&&(u?Math.max(xt[g],mi[g]):o.parentNode[g])<=C+1),u&&(c=mr(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+sn))}return f&&v&&(g=mr(v),f.seek(d),p=mr(v),f._caScrollDist=g[i.p]-p[i.p],e=e/f._caScrollDist*d),f&&f.seek(m),f?e:Math.round(e)},ey=/(webkit|moz|length|cssText|inset)/i,qm=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===xt){e._stOrig=s.cssText,a=Ai(e);for(o in a)!+o&&!ey.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ce.core.getCache(e).uncache=1,t.appendChild(e)}},d0=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},ac=function(e,t,n){var i={};i[t.p]="+="+n,Ce.set(e,i)},Ym=function(e,t){var n=dr(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,u){var d=o.tween,f=l.onComplete,_={};c=c||n();var m=d0(n,c,function(){d.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,d&&d.kill(),l[i]=a,l.inherit=!1,l.modifiers=_,_[i]=function(){return m(c+h*d.ratio+u*d.ratio*d.ratio)},l.onUpdate=function(){rt.cache++,o.tween&&gr()},l.onComplete=function(){o.tween=0,f&&f.call(d)},d=o.tween=Ce.to(e,l),d};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},mn(e,"wheel",n.wheelHandler),et.isTouch&&mn(e,"touchmove",n.wheelHandler),s},et=(function(){function r(t,n){mo||r.register(Ce)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),Uf(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sa){this.update=this.refresh=this.kill=Zi;return}n=zm(pi(n)||Ta(n)||n.nodeType?{trigger:n}:n,rc);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,d=s.trigger,f=s.pin,_=s.pinSpacing,m=s.invalidateOnRefresh,g=s.anticipatePin,p=s.onScrubComplete,v=s.onSnapComplete,M=s.once,y=s.snap,T=s.pinReparent,E=s.pinSpacer,A=s.containerAnimation,C=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Rn:Qt,P=!u&&u!==0,N=Hn(n.scroller||lt),B=Ce.core.getCache(N),V=As(N),W=("pinType"in n?n.pinType:pr(N,"pinType")||V&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=P&&n.toggleActions.split(" "),Z="markers"in n?n.markers:rc.markers,ie=V?0:parseFloat(Ai(N)["border"+b.p2+yo])||0,I=this,re=n.onRefreshInit&&function(){return n.onRefreshInit(I)},Ne=Wx(N,V,b),ke=Xx(N,V),Ye=0,$e=0,J=0,Q=dr(N,b),fe,Ie,ve,Ge,ft,Ee,ze,Ke,Ue,G,F,_t,it,Ve,Me,R,S,U,$,K,Y,ye,se,we,Te,ne,oe,Se,Ae,ae,qe,D,he,te,ue,ee,j,ce,Fe;if(I._startClamp=I._endClamp=!1,I._dir=b,g*=45,I.scroller=N,I.scroll=A?A.time.bind(A):Q,Ge=Q(),I.vars=n,i=i||n.animation,"refreshPriority"in n&&(Km=1,n.refreshPriority===-9999&&(Da=I)),B.tweenScroll=B.tweenScroll||{top:Ym(N,Qt),left:Ym(N,Rn)},I.tweenTo=fe=B.tweenScroll[b.p],I.scrubDuration=function(pe){he=Ta(pe)&&pe,he?D?D.duration(pe):D=Ce.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:he,paused:!0,onComplete:function(){return p&&p(I)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!I.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),I.animation=i.pause(),i.scrollTrigger=I,I.scrubDuration(u),ae=0,l||(l=i.vars.id)),y&&((!Ss(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in xt.style&&Ce.set(V?[xt,mi]:N,{scrollBehavior:"auto"}),rt.forEach(function(pe){return Dn(pe)&&pe.target===(V?Nt.scrollingElement||mi:N)&&(pe.smooth=!1)}),ve=Dn(y.snapTo)?y.snapTo:y.snapTo==="labels"?Yx(i):y.snapTo==="labelsDirectional"?Zx(i):y.directional!==!1?function(pe,Ze){return Yf(y.snapTo)(pe,In()-$e<500?0:Ze.direction)}:Ce.utils.snap(y.snapTo),te=y.duration||{min:.1,max:2},te=Ss(te)?wa(te.min,te.max):wa(te,te),ue=Ce.delayedCall(y.delay||he/2||.1,function(){var pe=Q(),Ze=In()-$e<500,Le=fe.tween;if((Ze||Math.abs(I.getVelocity())<10)&&!Le&&!_c&&Ye!==pe){var Je=(pe-Ee)/Ve,Jt=i&&!P?i.totalProgress():Je,ot=Ze?0:(Jt-qe)/(In()-Ma)*1e3||0,St=Ce.utils.clamp(-Je,1-Je,fo(ot/2)*ot/.185),Kt=Je+(y.inertia===!1?0:St),Ft,Rt,mt=y,$n=mt.onStart,Tt=mt.onInterrupt,wn=mt.onComplete;if(Ft=ve(Kt,I),Ta(Ft)||(Ft=Kt),Rt=Math.max(0,Math.round(Ee+Ft*Ve)),pe<=ze&&pe>=Ee&&Rt!==pe){if(Le&&!Le._initted&&Le.data<=fo(Rt-pe))return;y.inertia===!1&&(St=Ft-Je),fe(Rt,{duration:te(fo(Math.max(fo(Kt-Jt),fo(Ft-Jt))*.185/ot/.05||0)),ease:y.ease||"power3",data:fo(Rt-pe),onInterrupt:function(){return ue.restart(!0)&&Tt&&Tt(I)},onComplete:function(){I.update(),Ye=Q(),i&&!P&&(D?D.resetTo("totalProgress",Ft,i._tTime/i._tDur):i.progress(Ft)),ae=qe=i&&!P?i.totalProgress():I.progress,v&&v(I),wn&&wn(I)}},pe,St*Ve,Rt-pe-St*Ve),$n&&$n(I,fe.tween)}}else I.isActive&&Ye!==pe&&ue.restart(!0)}).pause()),l&&(Bf[l]=I),d=I.trigger=Hn(d||f!==!0&&f),Fe=d&&d._gsap&&d._gsap.stRevert,Fe&&(Fe=Fe(I)),f=f===!0?d:Hn(f),pi(a)&&(a={targets:d,className:a}),f&&(_===!1||_===wi||(_=!_&&f.parentNode&&f.parentNode.style&&Ai(f.parentNode).display==="flex"?!1:jt),I.pin=f,Ie=Ce.core.getCache(f),Ie.spacer?Me=Ie.pinState:(E&&(E=Hn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ie.spacerIsNative=!!E,E&&(Ie.spacerState=oc(E))),Ie.spacer=U=E||Nt.createElement("div"),U.classList.add("pin-spacer"),l&&U.classList.add("pin-spacer-"+l),Ie.pinState=Me=oc(f)),n.force3D!==!1&&Ce.set(f,{force3D:!0}),I.spacer=U=Ie.spacer,Ae=Ai(f),we=Ae[_+b.os2],K=Ce.getProperty(f),Y=Ce.quickSetter(f,b.a,sn),Df(f,U,Ae),S=oc(f)),Z){_t=Ss(Z)?zm(Z,Vm):Vm,G=sc("scroller-start",l,N,b,_t,0),F=sc("scroller-end",l,N,b,_t,0,G),$=G["offset"+b.op.d2];var pt=Hn(pr(N,"content")||N);Ke=this.markerStart=sc("start",l,pt,b,_t,$,0,A),Ue=this.markerEnd=sc("end",l,pt,b,_t,$,0,A),A&&(ce=Ce.quickSetter([Ke,Ue],b.a,sn)),!W&&!(Ui.length&&pr(N,"fixedMarkers")===!0)&&(qx(V?xt:N),Ce.set([G,F],{force3D:!0}),ne=Ce.quickSetter(G,b.a,sn),Se=Ce.quickSetter(F,b.a,sn))}if(A){var ge=A.vars.onUpdate,Pe=A.vars.onUpdateParams;A.eventCallback("onUpdate",function(){I.update(0,0,1),ge&&ge.apply(A,Pe||[])})}if(I.previous=function(){return st[st.indexOf(I)-1]},I.next=function(){return st[st.indexOf(I)+1]},I.revert=function(pe,Ze){if(!Ze)return I.kill(!0);var Le=pe!==!1||!I.enabled,Je=Pn;Le!==I.isReverted&&(Le&&(ee=Math.max(Q(),I.scroll.rec||0),J=I.progress,j=i&&i.progress()),Ke&&[Ke,Ue,G,F].forEach(function(Jt){return Jt.style.display=Le?"none":"block"}),Le&&(Pn=I,I.update(Le)),f&&(!T||!I.isActive)&&(Le?Kx(f,U,Me):Df(f,U,Ai(f),Te)),Le||I.update(Le),Pn=Je,I.isReverted=Le)},I.refresh=function(pe,Ze,Le,Je){if(!((Pn||!I.enabled)&&!Ze)){if(f&&pe&&Ci){mn(r,"scrollEnd",l0);return}!Xn&&re&&re(I),Pn=I,fe.tween&&!Le&&(fe.tween.kill(),fe.tween=0),D&&D.pause(),m&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(xe){return xe.vars.immediateRender&&xe.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),I.isReverted||I.revert(!0,!0),I._subPinOffset=!1;var Jt=Ne(),ot=ke(),St=A?A.duration():Ji(N,b),Kt=Ve<=.01||!Ve,Ft=0,Rt=Je||0,mt=Ss(Le)?Le.end:n.end,$n=n.endTrigger||d,Tt=Ss(Le)?Le.start:n.start||(n.start===0||!d?0:f?"0 0":"0 100%"),wn=I.pinnedContainer=n.pinnedContainer&&Hn(n.pinnedContainer,I),si=d&&Math.max(0,st.indexOf(I))||0,tn=si,nn,fn,or,Ks,dn,w,O,q,X,H,le,_e,de;for(Z&&Ss(Le)&&(_e=Ce.getProperty(G,b.p),de=Ce.getProperty(F,b.p));tn-- >0;)w=st[tn],w.end||w.refresh(0,1)||(Pn=I),O=w.pin,O&&(O===d||O===f||O===wn)&&!w.isReverted&&(H||(H=[]),H.unshift(w),w.revert(!0,!0)),w!==st[tn]&&(si--,tn--);for(Dn(Tt)&&(Tt=Tt(I)),Tt=Um(Tt,"start",I),Ee=Xm(Tt,d,Jt,b,Q(),Ke,G,I,ot,ie,W,St,A,I._startClamp&&"_startClamp")||(f?-.001:0),Dn(mt)&&(mt=mt(I)),pi(mt)&&!mt.indexOf("+=")&&(~mt.indexOf(" ")?mt=(pi(Tt)?Tt.split(" ")[0]:"")+mt:(Ft=cc(mt.substr(2),Jt),mt=pi(Tt)?Tt:(A?Ce.utils.mapRange(0,A.duration(),A.scrollTrigger.start,A.scrollTrigger.end,Ee):Ee)+Ft,$n=d)),mt=Um(mt,"end",I),ze=Math.max(Ee,Xm(mt||($n?"100% 0":St),$n,Jt,b,Q()+Ft,Ue,F,I,ot,ie,W,St,A,I._endClamp&&"_endClamp"))||-.001,Ft=0,tn=si;tn--;)w=st[tn]||{},O=w.pin,O&&w.start-w._pinPush<=Ee&&!A&&w.end>0&&(nn=w.end-(I._startClamp?Math.max(0,w.start):w.start),(O===d&&w.start-w._pinPush<Ee||O===wn)&&isNaN(Tt)&&(Ft+=nn*(1-w.progress)),O===f&&(Rt+=nn));if(Ee+=Ft,ze+=Ft,I._startClamp&&(I._startClamp+=Ft),I._endClamp&&!Xn&&(I._endClamp=ze||-.001,ze=Math.min(ze,Ji(N,b))),Ve=ze-Ee||(Ee-=.01)&&.001,Kt&&(J=Ce.utils.clamp(0,1,Ce.utils.normalize(Ee,ze,ee))),I._pinPush=Rt,Ke&&Ft&&(nn={},nn[b.a]="+="+Ft,wn&&(nn[b.p]="-="+Q()),Ce.set([Ke,Ue],nn)),f&&!(Of&&I.end>=Ji(N,b)))nn=Ai(f),Ks=b===Qt,or=Q(),ye=parseFloat(K(b.a))+Rt,!St&&ze>1&&(le=(V?Nt.scrollingElement||mi:N).style,le={style:le,value:le["overflow"+b.a.toUpperCase()]},V&&Ai(xt)["overflow"+b.a.toUpperCase()]!=="scroll"&&(le.style["overflow"+b.a.toUpperCase()]="scroll")),Df(f,U,nn),S=oc(f),fn=mr(f,!0),q=W&&dr(N,Ks?Rn:Qt)(),_?(Te=[_+b.os2,Ve+Rt+sn],Te.t=U,tn=_===jt?mc(f,b)+Ve+Rt:0,tn&&(Te.push(b.d,tn+sn),U.style.flexBasis!=="auto"&&(U.style.flexBasis=tn+sn)),xo(Te),wn&&st.forEach(function(xe){xe.pin===wn&&xe.vars.pinSpacing!==!1&&(xe._subPinOffset=!0)}),W&&Q(ee)):(tn=mc(f,b),tn&&U.style.flexBasis!=="auto"&&(U.style.flexBasis=tn+sn)),W&&(dn={top:fn.top+(Ks?or-Ee:q)+sn,left:fn.left+(Ks?q:or-Ee)+sn,boxSizing:"border-box",position:"fixed"},dn[Ts]=dn["max"+yo]=Math.ceil(fn.width)+sn,dn[Es]=dn["max"+qf]=Math.ceil(fn.height)+sn,dn[wi]=dn[wi+Pa]=dn[wi+Ca]=dn[wi+Ia]=dn[wi+Ra]="0",dn[jt]=nn[jt],dn[jt+Pa]=nn[jt+Pa],dn[jt+Ca]=nn[jt+Ca],dn[jt+Ia]=nn[jt+Ia],dn[jt+Ra]=nn[jt+Ra],R=jx(Me,dn,T),Xn&&Q(0)),i?(X=i._initted,Af(1),i.render(i.duration(),!0,!0),se=K(b.a)-ye+Ve+Rt,oe=Math.abs(Ve-se)>1,W&&oe&&R.splice(R.length-2,2),i.render(0,!0,!0),X||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),Af(0)):se=Ve,le&&(le.value?le.style["overflow"+b.a.toUpperCase()]=le.value:le.style.removeProperty("overflow-"+b.a));else if(d&&Q()&&!A)for(fn=d.parentNode;fn&&fn!==xt;)fn._pinOffset&&(Ee-=fn._pinOffset,ze-=fn._pinOffset),fn=fn.parentNode;H&&H.forEach(function(xe){return xe.revert(!1,!0)}),I.start=Ee,I.end=ze,Ge=ft=Xn?ee:Q(),!A&&!Xn&&(Ge<ee&&Q(ee),I.scroll.rec=0),I.revert(!1,!0),$e=In(),ue&&(Ye=-1,ue.restart(!0)),Pn=0,i&&P&&(i._initted||j)&&i.progress()!==j&&i.progress(j||0,!0).render(i.time(),!0,!0),(Kt||J!==I.progress||A||m||i&&!i._initted)&&(i&&!P&&(i._initted||J||i.vars.immediateRender!==!1)&&i.totalProgress(A&&Ee<-.001&&!J?Ce.utils.normalize(Ee,ze,0):J,!0),I.progress=Kt||(Ge-Ee)/Ve===J?0:J),f&&_&&(U._pinOffset=Math.round(I.progress*se)),D&&D.invalidate(),isNaN(_e)||(_e-=Ce.getProperty(G,b.p),de-=Ce.getProperty(F,b.p),ac(G,b,_e),ac(Ke,b,_e-(Je||0)),ac(F,b,de),ac(Ue,b,de-(Je||0))),Kt&&!Xn&&I.update(),h&&!Xn&&!it&&(it=!0,h(I),it=!1)}},I.getVelocity=function(){return(Q()-ft)/(In()-Ma)*1e3||0},I.endAnimation=function(){va(I.callbackAnimation),i&&(D?D.progress(1):i.paused()?P||va(i,I.direction<0,1):va(i,i.reversed()))},I.labelToScroll=function(pe){return i&&i.labels&&(Ee||I.refresh()||Ee)+i.labels[pe]/i.duration()*Ve||0},I.getTrailing=function(pe){var Ze=st.indexOf(I),Le=I.direction>0?st.slice(0,Ze).reverse():st.slice(Ze+1);return(pi(pe)?Le.filter(function(Je){return Je.vars.preventOverlaps===pe}):Le).filter(function(Je){return I.direction>0?Je.end<=Ee:Je.start>=ze})},I.update=function(pe,Ze,Le){if(!(A&&!Le&&!pe)){var Je=Xn===!0?ee:I.scroll(),Jt=pe?0:(Je-Ee)/Ve,ot=Jt<0?0:Jt>1?1:Jt||0,St=I.progress,Kt,Ft,Rt,mt,$n,Tt,wn,si;if(Ze&&(ft=Ge,Ge=A?Q():Je,y&&(qe=ae,ae=i&&!P?i.totalProgress():ot)),g&&f&&!Pn&&!ec&&Ci&&(!ot&&Ee<Je+(Je-ft)/(In()-Ma)*g?ot=1e-4:ot===1&&ze>Je+(Je-ft)/(In()-Ma)*g&&(ot=.9999)),ot!==St&&I.enabled){if(Kt=I.isActive=!!ot&&ot<1,Ft=!!St&&St<1,Tt=Kt!==Ft,$n=Tt||!!ot!=!!St,I.direction=ot>St?1:-1,I.progress=ot,$n&&!Pn&&(Rt=ot&&!St?0:ot===1?1:St===1?2:3,P&&(mt=!Tt&&k[Rt+1]!=="none"&&k[Rt+1]||k[Rt],si=i&&(mt==="complete"||mt==="reset"||mt in i))),x&&(Tt||si)&&(si||u||!i)&&(Dn(x)?x(I):I.getTrailing(x).forEach(function(or){return or.endAnimation()})),P||(D&&!Pn&&!ec?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",ot,i._tTime/i._tDur):(D.vars.totalProgress=ot,D.invalidate().restart())):i&&i.totalProgress(ot,!!(Pn&&($e||pe)))),f){if(pe&&_&&(U.style[_+b.os2]=we),!W)Y(ba(ye+se*ot));else if($n){if(wn=!pe&&ot>St&&ze+1>Je&&Je+1>=Ji(N,b),T)if(!pe&&(Kt||wn)){var tn=mr(f,!0),nn=Je-Ee;qm(f,xt,tn.top+(b===Qt?nn:0)+sn,tn.left+(b===Qt?0:nn)+sn)}else qm(f,U);xo(Kt||wn?R:S),oe&&ot<1&&Kt||Y(ye+(ot===1&&!wn?se:0))}}y&&!fe.tween&&!Pn&&!ec&&ue.restart(!0),a&&(Tt||M&&ot&&(ot<1||!Cf))&&La(a.targets).forEach(function(or){return or.classList[Kt||M?"add":"remove"](a.className)}),o&&!P&&!pe&&o(I),$n&&!Pn?(P&&(si&&(mt==="complete"?i.pause().totalProgress(1):mt==="reset"?i.restart(!0).pause():mt==="restart"?i.restart(!0):i[mt]()),o&&o(I)),(Tt||!Cf)&&(c&&Tt&&Pf(I,c),z[Rt]&&Pf(I,z[Rt]),M&&(ot===1?I.kill(!1,1):z[Rt]=0),Tt||(Rt=ot===1?1:3,z[Rt]&&Pf(I,z[Rt]))),C&&!Kt&&Math.abs(I.getVelocity())>(Ta(C)?C:2500)&&(va(I.callbackAnimation),D?D.progress(1):va(i,mt==="reverse"?1:!ot,1))):P&&o&&!Pn&&o(I)}if(Se){var fn=A?Je/A.duration()*(A._caScrollDist||0):Je;ne(fn+(G._isFlipped?1:0)),Se(fn)}ce&&ce(-Je/A.duration()*(A._caScrollDist||0))}},I.enable=function(pe,Ze){I.enabled||(I.enabled=!0,mn(N,"resize",Ea),V||mn(N,"scroll",po),re&&mn(r,"refreshInit",re),pe!==!1&&(I.progress=J=0,Ge=ft=Ye=Q()),Ze!==!1&&I.refresh())},I.getTween=function(pe){return pe&&fe?fe.tween:D},I.setPositions=function(pe,Ze,Le,Je){if(A){var Jt=A.scrollTrigger,ot=A.duration(),St=Jt.end-Jt.start;pe=Jt.start+St*pe/ot,Ze=Jt.start+St*Ze/ot}I.refresh(!1,!1,{start:Om(pe,Le&&!!I._startClamp),end:Om(Ze,Le&&!!I._endClamp)},Je),I.update()},I.adjustPinSpacing=function(pe){if(Te&&pe){var Ze=Te.indexOf(b.d)+1;Te[Ze]=parseFloat(Te[Ze])+pe+sn,Te[1]=parseFloat(Te[1])+pe+sn,xo(Te)}},I.disable=function(pe,Ze){if(pe!==!1&&I.revert(!0,!0),I.enabled&&(I.enabled=I.isActive=!1,Ze||D&&D.pause(),ee=0,Ie&&(Ie.uncache=1),re&&pn(r,"refreshInit",re),ue&&(ue.pause(),fe.tween&&fe.tween.kill()&&(fe.tween=0)),!V)){for(var Le=st.length;Le--;)if(st[Le].scroller===N&&st[Le]!==I)return;pn(N,"resize",Ea),V||pn(N,"scroll",po)}},I.kill=function(pe,Ze){I.disable(pe,Ze),D&&!Ze&&D.kill(),l&&delete Bf[l];var Le=st.indexOf(I);Le>=0&&st.splice(Le,1),Le===Wn&&uc>0&&Wn--,Le=0,st.forEach(function(Je){return Je.scroller===I.scroller&&(Le=1)}),Le||Xn||(I.scroll.rec=0),i&&(i.scrollTrigger=null,pe&&i.revert({kill:!1}),Ze||i.kill()),Ke&&[Ke,Ue,G,F].forEach(function(Je){return Je.parentNode&&Je.parentNode.removeChild(Je)}),Da===I&&(Da=0),f&&(Ie&&(Ie.uncache=1),Le=0,st.forEach(function(Je){return Je.pin===f&&Le++}),Le||(Ie.spacer=0)),n.onKill&&n.onKill(I)},st.push(I),I.enable(!1,!1),Fe&&Fe(I),i&&i.add&&!Ve){var je=I.update;I.update=function(){I.update=je,rt.cache++,Ee||ze||I.refresh()},Ce.delayedCall(.01,I.update),Ve=.01,Ee=ze=0}else I.refresh();f&&$x()},r.register=function(n){return mo||(Ce=n||n0(),t0()&&window.document&&r.enable(),mo=Sa),mo},r.defaults=function(n){if(n)for(var i in n)rc[i]=n[i];return rc},r.disable=function(n,i){Sa=0,st.forEach(function(o){return o[i?"kill":"disable"](n)}),pn(lt,"wheel",po),pn(Nt,"scroll",po),clearInterval(jl),pn(Nt,"touchcancel",Zi),pn(xt,"touchstart",Zi),nc(pn,Nt,"pointerdown,touchstart,mousedown",Bm),nc(pn,Nt,"pointerup,touchend,mouseup",km),pc.kill(),tc(pn);for(var s=0;s<rt.length;s+=3)ic(pn,rt[s],rt[s+1]),ic(pn,rt[s],rt[s+2])},r.enable=function(){if(lt=window,Nt=document,mi=Nt.documentElement,xt=Nt.body,Ce&&(La=Ce.utils.toArray,wa=Ce.utils.clamp,Uf=Ce.core.context||Zi,Af=Ce.core.suppressOverwrites||Zi,Hf=lt.history.scrollRestoration||"auto",kf=lt.pageYOffset||0,Ce.core.globals("ScrollTrigger",r),xt)){Sa=1,_o=document.createElement("div"),_o.style.height="100vh",_o.style.position="absolute",f0(),Gx(),Zt.register(Ce),r.isTouch=Zt.isTouch,Hr=Zt.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),Ff=Zt.isTouch===1,mn(lt,"wheel",po),Vf=[lt,Nt,mi,xt],Ce.matchMedia?(r.matchMedia=function(c){var h=Ce.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ce.addEventListener("matchMediaInit",function(){h0(),Zf()}),Ce.addEventListener("matchMediaRevert",function(){return c0()}),Ce.addEventListener("matchMedia",function(){bs(0,1),Rs("matchMedia")}),Ce.matchMedia().add("(orientation: portrait)",function(){return If(),If})):console.warn("Requires GSAP 3.11.0 or later"),If(),mn(Nt,"scroll",po);var n=xt.hasAttribute("style"),i=xt.style,s=i.borderTopStyle,o=Ce.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=mr(xt),Qt.m=Math.round(a.top+Qt.sc())||0,Rn.m=Math.round(a.left+Rn.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(xt.setAttribute("style",""),xt.removeAttribute("style")),jl=setInterval(Hm,250),Ce.delayedCall(.5,function(){return ec=0}),mn(Nt,"touchcancel",Zi),mn(xt,"touchstart",Zi),nc(mn,Nt,"pointerdown,touchstart,mousedown",Bm),nc(mn,Nt,"pointerup,touchend,mouseup",km),Nf=Ce.utils.checkPrefix("transform"),fc.push(Nf),mo=In(),pc=Ce.delayedCall(.2,bs).pause(),go=[Nt,"visibilitychange",function(){var c=lt.innerWidth,h=lt.innerHeight;Nt.hidden?(Nm=c,Fm=h):(Nm!==c||Fm!==h)&&Ea()},Nt,"DOMContentLoaded",bs,lt,"load",bs,lt,"resize",Ea],tc(mn),st.forEach(function(c){return c.enable(0,1)}),l=0;l<rt.length;l+=3)ic(pn,rt[l],rt[l+1]),ic(pn,rt[l],rt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(Cf=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(jl)||(jl=i)&&setInterval(Hm,i),"ignoreMobileResize"in n&&(Ff=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(tc(pn)||tc(mn,n.autoRefreshEvents||"none"),Qm=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Hn(n),o=rt.indexOf(s),a=As(s);~o&&rt.splice(o,a?6:2),i&&(a?Ui.unshift(lt,i,xt,i,mi,i):Ui.unshift(s,i))},r.clearMatchMedia=function(n){st.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(pi(n)?Hn(n):n).getBoundingClientRect(),a=o[s?Ts:Es]*i||0;return s?o.right-a>0&&o.left+a<lt.innerWidth:o.bottom-a>0&&o.top+a<lt.innerHeight},r.positionInViewport=function(n,i,s){pi(n)&&(n=Hn(n));var o=n.getBoundingClientRect(),a=o[s?Ts:Es],l=i==null?a/2:i in gc?gc[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/lt.innerWidth:(o.top+l)/lt.innerHeight},r.killAll=function(n){if(st.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=Cs.killAll||[];Cs={},i.forEach(function(s){return s()})}},r})();et.version="3.14.2";et.saveStyles=function(r){return r?La(r).forEach(function(e){if(e&&e.style){var t=di.indexOf(e);t>=0&&di.splice(t,5),di.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ce.core.getCache(e),Uf())}}):di};et.revert=function(r,e){return Zf(!r,e)};et.create=function(r,e){return new et(r,e)};et.refresh=function(r){return r?Ea(!0):(mo||et.register())&&bs(!0)};et.update=function(r){return++rt.cache&&gr(r===!0?2:0)};et.clearScrollMemory=u0;et.maxScroll=function(r,e){return Ji(r,e?Rn:Qt)};et.getScrollFunc=function(r,e){return dr(Hn(r),e?Rn:Qt)};et.getById=function(r){return Bf[r]};et.getAll=function(){return st.filter(function(r){return r.vars.id!=="ScrollSmoother"})};et.isScrolling=function(){return!!Ci};et.snapDirectional=Yf;et.addEventListener=function(r,e){var t=Cs[r]||(Cs[r]=[]);~t.indexOf(e)||t.push(e)};et.removeEventListener=function(r,e){var t=Cs[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};et.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],d=[],f=Ce.delayedCall(i,function(){h(u,d),u=[],d=[]}).pause();return function(_){u.length||f.restart(!0),u.push(_.trigger),d.push(_),s<=u.length&&f.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&Dn(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return Dn(s)&&(s=s(),mn(et,"refresh",function(){return s=e.batchMax()})),La(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(et.create(c))}),t};var Zm=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},Lf=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Zt.isTouch?" pinch-zoom":""):"none",e===mi&&r(xt,t)},lc={auto:1,scroll:1},ty=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ce.core.getCache(s),a=In(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(lc[(l=Ai(s)).overflowY]||lc[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!As(s)&&(lc[(l=Ai(s)).overflowY]||lc[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},p0=function(e,t,n,i){return Zt.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&ty,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&mn(Nt,Zt.eventTypes[0],$m,!1,!0)},onDisable:function(){return pn(Nt,Zt.eventTypes[0],$m,!0)}})},ny=/(input|label|select|textarea)/i,Jm,$m=function(e){var t=ny.test(e.target.tagName);(t||Jm)&&(e._gsapAllow=!0,Jm=t)},iy=function(e){Ss(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Hn(e.target)||mi,h=Ce.core.globals().ScrollSmoother,u=h&&h.get(),d=Hr&&(e.content&&Hn(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),f=dr(c,Qt),_=dr(c,Rn),m=1,g=(Zt.isTouch&&lt.visualViewport?lt.visualViewport.scale*lt.visualViewport.width:lt.outerWidth)/lt.innerWidth,p=0,v=Dn(i)?function(){return i(a)}:function(){return i||2.8},M,y,T=p0(c,e.type,!0,s),E=function(){return y=!1},A=Zi,C=Zi,x=function(){l=Ji(c,Qt),C=wa(Hr?1:0,l),n&&(A=wa(0,Ji(c,Rn))),M=ws},b=function(){d._gsap.y=ba(parseFloat(d._gsap.y)+f.offset)+"px",d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(d._gsap.y)+", 0, 1)",f.offset=f.cacheID=0},P=function(){if(y){requestAnimationFrame(E);var Z=ba(a.deltaY/2),ie=C(f.v-Z);if(d&&ie!==f.v+f.offset){f.offset=ie-f.v;var I=ba((parseFloat(d&&d._gsap.y)||0)-f.offset);d.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+I+", 0, 1)",d._gsap.y=I+"px",f.cacheID=rt.cache,gr()}return!0}f.offset&&b(),y=!0},N,B,V,W,z=function(){x(),N.isActive()&&N.vars.scrollY>l&&(f()>l?N.progress(1)&&f(l):N.resetTo("scrollY",l))};return d&&Ce.set(d,{y:"+=0"}),e.ignoreCheck=function(k){return Hr&&k.type==="touchmove"&&P(k)||m>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=m;m=ba((lt.visualViewport&&lt.visualViewport.scale||1)/g),N.pause(),k!==m&&Lf(c,m>1.01?!0:n?!1:"x"),B=_(),V=f(),x(),M=ws},e.onRelease=e.onGestureStart=function(k,Z){if(f.offset&&b(),!Z)W.restart(!0);else{rt.cache++;var ie=v(),I,re;n&&(I=_(),re=I+ie*.05*-k.velocityX/.227,ie*=Zm(_,I,re,Ji(c,Rn)),N.vars.scrollX=A(re)),I=f(),re=I+ie*.05*-k.velocityY/.227,ie*=Zm(f,I,re,Ji(c,Qt)),N.vars.scrollY=C(re),N.invalidate().duration(ie).play(.01),(Hr&&N.vars.scrollY>=l||I>=l-1)&&Ce.to({},{onUpdate:z,duration:ie})}o&&o(k)},e.onWheel=function(){N._ts&&N.pause(),In()-p>1e3&&(M=0,p=In())},e.onChange=function(k,Z,ie,I,re){if(ws!==M&&x(),Z&&n&&_(A(I[2]===Z?B+(k.startX-k.x):_()+Z-I[1])),ie){f.offset&&b();var Ne=re[2]===ie,ke=Ne?V+k.startY-k.y:f()+ie-re[1],Ye=C(ke);Ne&&ke!==Ye&&(V+=Ye-ke),f(Ye)}(ie||Z)&&gr()},e.onEnable=function(){Lf(c,n?!1:"x"),et.addEventListener("refresh",z),mn(lt,"resize",z),f.smooth&&(f.target.style.scrollBehavior="auto",f.smooth=_.smooth=!1),T.enable()},e.onDisable=function(){Lf(c,!0),pn(lt,"resize",z),et.removeEventListener("refresh",z),T.kill()},e.lockAxis=e.lockAxis!==!1,a=new Zt(e),a.iOS=Hr,Hr&&!f()&&f(1),Hr&&Ce.ticker.add(Zi),W=a._dc,N=Ce.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:d0(f,f(),function(){return N.pause()})},onUpdate:gr,onComplete:W.vars.onComplete}),a};et.sort=function(r){if(Dn(r))return st.sort(r);var e=lt.pageYOffset||0;return et.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+lt.innerHeight}),st.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};et.observe=function(r){return new Zt(r)};et.normalizeScroll=function(r){if(typeof r>"u")return Gn;if(r===!0&&Gn)return Gn.enable();if(r===!1){Gn&&Gn.kill(),Gn=r;return}var e=r instanceof Zt?r:iy(r);return Gn&&Gn.target===e.target&&Gn.kill(),As(e.target)&&(Gn=e),e};et.core={_getVelocityProp:Ql,_inputObserver:p0,_scrollers:rt,_proxies:Ui,bridge:{ss:function(){Ci||Rs("scrollStart"),Ci=In()},ref:function(){return Pn}}};n0()&&Ce.registerPlugin(et);var V0=0,Id=1,H0=2;var yl=1,G0=2,Yo=3,Tr=0,En=1,Mi=2,nr=0,Fs=1,Dd=2,Ld=3,Nd=4,W0=5,$r=100,X0=101,q0=102,Y0=103,Z0=104,J0=200,$0=201,K0=202,Q0=203,Wc=204,Xc=205,j0=206,eg=207,tg=208,ng=209,ig=210,rg=211,sg=212,og=213,ag=214,Eh=0,wh=1,Ah=2,Us=3,Ch=4,Rh=5,Ph=6,Ih=7,Dh=0,lg=1,cg=2,Hi=0,Fd=1,Ud=2,Od=3,Gs=4,Bd=5,kd=6,zd=7;var Vd=300,is=301,Ws=302,Lh=303,Nh=304,vl=306,qc=1e3,Qi=1001,Yc=1002,xn=1003,hg=1004;var Ml=1005;var bn=1006,Fh=1007;var rs=1008;var ri=1009,Hd=1010,Gd=1011,Zo=1012,Uh=1013,Gi=1014,Di=1015,ir=1016,Oh=1017,Bh=1018,Jo=1020,Wd=35902,Xd=35899,qd=1021,Yd=1022,Li=1023,ji=1026,ss=1027,kh=1028,zh=1029,Xs=1030,Vh=1031;var Hh=1033,Sl=33776,bl=33777,Tl=33778,El=33779,Gh=35840,Wh=35841,Xh=35842,qh=35843,Yh=36196,Zh=37492,Jh=37496,$h=37488,Kh=37489,Qh=37490,jh=37491,eu=37808,tu=37809,nu=37810,iu=37811,ru=37812,su=37813,ou=37814,au=37815,lu=37816,cu=37817,hu=37818,uu=37819,fu=37820,du=37821,pu=36492,mu=36494,gu=36495,_u=36283,xu=36284,yu=36285,vu=36286;var qa=2300,Zc=2301,Gc=2302,bd=2400,Td=2401,Ed=2402;var ug=3200;var Mu=0,fg=1,Pr="",on="srgb",Os="srgb-linear",Ya="linear",yt="srgb";var Ns=7680;var wd=519,dg=512,pg=513,mg=514,Su=515,gg=516,_g=517,bu=518,xg=519,Jc=35044;var Zd="300 es",zi=2e3,Za=2001;function Jd(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ry(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ja(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function yg(){let r=Ja("canvas");return r.style.display="block",r}var m0={},Bo=null;function $a(...r){let e="THREE."+r.shift();Bo?Bo("log",e,...r):console.log(e,...r)}function Xe(...r){let e="THREE."+r.shift();Bo?Bo("warn",e,...r):console.warn(e,...r)}function He(...r){let e="THREE."+r.shift();Bo?Bo("error",e,...r):console.error(e,...r)}function ko(...r){let e=r.join(" ");e in m0||(m0[e]=!0,Xe(...r))}function vg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var Er=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},Ln=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Jf=Math.PI/180,$c=180/Math.PI;function Jr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ln[r&255]+Ln[r>>8&255]+Ln[r>>16&255]+Ln[r>>24&255]+"-"+Ln[e&255]+Ln[e>>8&255]+"-"+Ln[e>>16&15|64]+Ln[e>>24&255]+"-"+Ln[t&63|128]+Ln[t>>8&255]+"-"+Ln[t>>16&255]+Ln[t>>24&255]+Ln[n&255]+Ln[n>>8&255]+Ln[n>>16&255]+Ln[n>>24&255]).toLowerCase()}function ct(r,e,t){return Math.max(e,Math.min(t,r))}function sy(r,e){return(r%e+e)%e}function $f(r,e,t){return(1-t)*r+t*e}function Ki(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function wt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Re=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},wr=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],d=s[o+0],f=s[o+1],_=s[o+2],m=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=m;return}if(u!==m||l!==d||c!==f||h!==_){let g=l*d+c*f+h*_+u*m;g<0&&(d=-d,f=-f,_=-_,m=-m,g=-g);let p=1-a;if(g<.9995){let v=Math.acos(g),M=Math.sin(v);p=Math.sin(p*v)/M,a=Math.sin(a*v)/M,l=l*p+d*a,c=c*p+f*a,h=h*p+_*a,u=u*p+m*a}else{l=l*p+d*a,c=c*p+f*a,h=h*p+_*a,u=u*p+m*a;let v=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=v,c*=v,h*=v,u*=v}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],d=s[o+1],f=s[o+2],_=s[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),d=l(n/2),f=l(i/2),_=l(s/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:Xe("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(s-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){let f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(s+c)/f}else if(a>u){let f=2*Math.sqrt(1+a-n-u);this._w=(s-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(s+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(ct(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},L=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(g0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(g0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Kf.copy(this).projectOnVector(e),this.sub(Kf)}reflect(e){return this.sub(Kf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(ct(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Kf=new L,g0=new wr,Qe=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],m=i[0],g=i[3],p=i[6],v=i[1],M=i[4],y=i[7],T=i[2],E=i[5],A=i[8];return s[0]=o*m+a*v+l*T,s[3]=o*g+a*M+l*E,s[6]=o*p+a*y+l*A,s[1]=c*m+h*v+u*T,s[4]=c*g+h*M+u*E,s[7]=c*p+h*y+u*A,s[2]=d*m+f*v+_*T,s[5]=d*g+f*M+_*E,s[8]=d*p+f*y+_*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*s,f=c*s-o*l,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);let m=1/_;return e[0]=u*m,e[1]=(i*c-h*n)*m,e[2]=(a*n-i*o)*m,e[3]=d*m,e[4]=(h*t-i*l)*m,e[5]=(i*s-a*t)*m,e[6]=f*m,e[7]=(n*l-c*t)*m,e[8]=(o*t-n*s)*m,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Qf.makeScale(e,t)),this}rotate(e){return this.premultiply(Qf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Qf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Qf=new Qe,_0=new Qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),x0=new Qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function oy(){let r={enabled:!0,workingColorSpace:Os,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===yt&&(i.r=br(i.r),i.g=br(i.g),i.b=br(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===yt&&(i.r=Oo(i.r),i.g=Oo(i.g),i.b=Oo(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Pr?Ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return ko("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return ko("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Os]:{primaries:e,whitePoint:n,transfer:Ya,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:on},outputColorSpaceConfig:{drawingBufferColorSpace:on}},[on]:{primaries:e,whitePoint:n,transfer:yt,toXYZ:_0,fromXYZ:x0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:on}}}),r}var dt=oy();function br(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Oo(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var vo,Kc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{vo===void 0&&(vo=Ja("canvas")),vo.width=e.width,vo.height=e.height;let i=vo.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=vo}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ja("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=br(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return Xe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ay=0,zo=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ay++}),this.uuid=Jr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(jf(i[o].image)):s.push(jf(i[o]))}else s=jf(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function jf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Kc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Xe("Texture: Unable to serialize Texture."),{})}var ly=0,ed=new L,Yn=class r extends Er{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Qi,i=Qi,s=bn,o=rs,a=Li,l=ri,c=r.DEFAULT_ANISOTROPY,h=Pr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ly++}),this.uuid=Jr(),this.name="",this.source=new zo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Re(0,0),this.repeat=new Re(1,1),this.center=new Re(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ed).x}get height(){return this.source.getSize(ed).y}get depth(){return this.source.getSize(ed).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){Xe(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Xe(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Vd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qc:e.x=e.x-Math.floor(e.x);break;case Qi:e.x=e.x<0?0:1;break;case Yc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qc:e.y=e.y-Math.floor(e.y);break;case Qi:e.y=e.y<0?0:1;break;case Yc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Yn.DEFAULT_IMAGE=null;Yn.DEFAULT_MAPPING=Vd;Yn.DEFAULT_ANISOTROPY=1;var Gt=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],m=l[2],g=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-m)<.01&&Math.abs(_-g)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+m)<.1&&Math.abs(_+g)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let M=(c+1)/2,y=(f+1)/2,T=(p+1)/2,E=(h+d)/4,A=(u+m)/4,C=(_+g)/4;return M>y&&M>T?M<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(M),i=E/n,s=A/n):y>T?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=E/i,s=C/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=A/s,i=C/s),this.set(n,i,s,t),this}let v=Math.sqrt((g-_)*(g-_)+(u-m)*(u-m)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(g-_)/v,this.y=(u-m)/v,this.z=(d-h)/v,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=ct(this.x,e.x,t.x),this.y=ct(this.y,e.y,t.y),this.z=ct(this.z,e.z,t.z),this.w=ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=ct(this.x,e,t),this.y=ct(this.y,e,t),this.z=ct(this.z,e,t),this.w=ct(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ct(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qc=class extends Er{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:bn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new Gt(0,0,e,t),this.scissorTest=!1,this.viewport=new Gt(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Yn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:bn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new zo(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},xi=class extends Qc{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Ka=class extends Yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var jc=class extends Yn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Qi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var er=class{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Oi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Oi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=Oi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Oi):Oi.fromBufferAttribute(s,o),Oi.applyMatrix4(e.matrixWorld),this.expandByPoint(Oi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xc.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),xc.copy(n.boundingBox)),xc.applyMatrix4(e.matrixWorld),this.union(xc)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Oi),Oi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fa),yc.subVectors(this.max,Fa),Mo.subVectors(e.a,Fa),So.subVectors(e.b,Fa),bo.subVectors(e.c,Fa),Gr.subVectors(So,Mo),Wr.subVectors(bo,So),Ps.subVectors(Mo,bo);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-Ps.z,Ps.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,Ps.z,0,-Ps.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-Ps.y,Ps.x,0];return!td(t,Mo,So,bo,yc)||(t=[1,0,0,0,1,0,0,0,1],!td(t,Mo,So,bo,yc))?!1:(vc.crossVectors(Gr,Wr),t=[vc.x,vc.y,vc.z],td(t,Mo,So,bo,yc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Oi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Oi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(_r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),_r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),_r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),_r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),_r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),_r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),_r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),_r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(_r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},_r=[new L,new L,new L,new L,new L,new L,new L,new L],Oi=new L,xc=new er,Mo=new L,So=new L,bo=new L,Gr=new L,Wr=new L,Ps=new L,Fa=new L,yc=new L,vc=new L,Is=new L;function td(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){Is.fromArray(r,s);let a=i.x*Math.abs(Is.x)+i.y*Math.abs(Is.y)+i.z*Math.abs(Is.z),l=e.dot(Is),c=t.dot(Is),h=n.dot(Is);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var cy=new er,Ua=new L,nd=new L,Ar=class{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):cy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ua.subVectors(e,this.center);let t=Ua.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ua,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(nd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ua.copy(e.center).add(nd)),this.expandByPoint(Ua.copy(e.center).sub(nd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},xr=new L,id=new L,Mc=new L,Xr=new L,rd=new L,Sc=new L,sd=new L,Qa=class{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,xr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=xr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(xr.copy(this.origin).addScaledVector(this.direction,t),xr.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){id.copy(e).add(t).multiplyScalar(.5),Mc.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(id);let s=e.distanceTo(t)*.5,o=-this.direction.dot(Mc),a=Xr.dot(this.direction),l=-Xr.dot(Mc),c=Xr.lengthSq(),h=Math.abs(1-o*o),u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=s*h,u>=0)if(d>=-_)if(d<=_){let m=1/h;u*=m,d*=m,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*s+a)),d=u>0?-s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(u=Math.max(0,-(o*s+a)),d=u>0?s:Math.min(Math.max(-s,-l),s),f=-u*u+d*(d+2*l)+c);else d=o>0?-s:s,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(id).addScaledVector(Mc,d),f}intersectSphere(e,t){xr.subVectors(e.center,this.origin);let n=xr.dot(this.direction),i=xr.dot(xr)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(s=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(s=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,xr)!==null}intersectTriangle(e,t,n,i,s){rd.subVectors(t,e),Sc.subVectors(n,e),sd.crossVectors(rd,Sc);let o=this.direction.dot(sd),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xr.subVectors(this.origin,e);let l=a*this.direction.dot(Sc.crossVectors(Xr,Sc));if(l<0)return null;let c=a*this.direction.dot(rd.cross(Xr));if(c<0||l+c>o)return null;let h=-a*Xr.dot(sd);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},At=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,d,f,_,m,g){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,d,f,_,m,g)}set(e,t,n,i,s,o,a,l,c,h,u,d,f,_,m,g){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=m,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/To.setFromMatrixColumn(e,0).length(),s=1/To.setFromMatrixColumn(e,1).length(),o=1/To.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let d=o*h,f=o*u,_=a*h,m=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-m*c,t[9]=-a*l,t[2]=m-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){let d=l*h,f=l*u,_=c*h,m=c*u;t[0]=d+m*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=m+d*a,t[10]=o*l}else if(e.order==="ZXY"){let d=l*h,f=l*u,_=c*h,m=c*u;t[0]=d-m*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=m-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let d=o*h,f=o*u,_=a*h,m=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+m,t[1]=l*u,t[5]=m*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let d=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*h,t[4]=m-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-m*u}else if(e.order==="XZY"){let d=o*l,f=o*c,_=a*l,m=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+m,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=m*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(hy,e,uy)}lookAt(e,t,n){let i=this.elements;return gi.subVectors(e,t),gi.lengthSq()===0&&(gi.z=1),gi.normalize(),qr.crossVectors(n,gi),qr.lengthSq()===0&&(Math.abs(n.z)===1?gi.x+=1e-4:gi.z+=1e-4,gi.normalize(),qr.crossVectors(n,gi)),qr.normalize(),bc.crossVectors(gi,qr),i[0]=qr.x,i[4]=bc.x,i[8]=gi.x,i[1]=qr.y,i[5]=bc.y,i[9]=gi.y,i[2]=qr.z,i[6]=bc.z,i[10]=gi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],m=n[6],g=n[10],p=n[14],v=n[3],M=n[7],y=n[11],T=n[15],E=i[0],A=i[4],C=i[8],x=i[12],b=i[1],P=i[5],N=i[9],B=i[13],V=i[2],W=i[6],z=i[10],k=i[14],Z=i[3],ie=i[7],I=i[11],re=i[15];return s[0]=o*E+a*b+l*V+c*Z,s[4]=o*A+a*P+l*W+c*ie,s[8]=o*C+a*N+l*z+c*I,s[12]=o*x+a*B+l*k+c*re,s[1]=h*E+u*b+d*V+f*Z,s[5]=h*A+u*P+d*W+f*ie,s[9]=h*C+u*N+d*z+f*I,s[13]=h*x+u*B+d*k+f*re,s[2]=_*E+m*b+g*V+p*Z,s[6]=_*A+m*P+g*W+p*ie,s[10]=_*C+m*N+g*z+p*I,s[14]=_*x+m*B+g*k+p*re,s[3]=v*E+M*b+y*V+T*Z,s[7]=v*A+M*P+y*W+T*ie,s[11]=v*C+M*N+y*z+T*I,s[15]=v*x+M*B+y*k+T*re,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],m=e[7],g=e[11],p=e[15],v=l*f-c*d,M=a*f-c*u,y=a*d-l*u,T=o*f-c*h,E=o*d-l*h,A=o*u-a*h;return t*(m*v-g*M+p*y)-n*(_*v-g*T+p*E)+i*(_*M-m*T+p*A)-s*(_*y-m*E+g*A)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],m=e[13],g=e[14],p=e[15],v=u*g*c-m*d*c+m*l*f-a*g*f-u*l*p+a*d*p,M=_*d*c-h*g*c-_*l*f+o*g*f+h*l*p-o*d*p,y=h*m*c-_*u*c+_*a*f-o*m*f-h*a*p+o*u*p,T=_*u*l-h*m*l-_*a*d+o*m*d+h*a*g-o*u*g,E=t*v+n*M+i*y+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/E;return e[0]=v*A,e[1]=(m*d*s-u*g*s-m*i*f+n*g*f+u*i*p-n*d*p)*A,e[2]=(a*g*s-m*l*s+m*i*c-n*g*c-a*i*p+n*l*p)*A,e[3]=(u*l*s-a*d*s-u*i*c+n*d*c+a*i*f-n*l*f)*A,e[4]=M*A,e[5]=(h*g*s-_*d*s+_*i*f-t*g*f-h*i*p+t*d*p)*A,e[6]=(_*l*s-o*g*s-_*i*c+t*g*c+o*i*p-t*l*p)*A,e[7]=(o*d*s-h*l*s+h*i*c-t*d*c-o*i*f+t*l*f)*A,e[8]=y*A,e[9]=(_*u*s-h*m*s-_*n*f+t*m*f+h*n*p-t*u*p)*A,e[10]=(o*m*s-_*a*s+_*n*c-t*m*c-o*n*p+t*a*p)*A,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*f-t*a*f)*A,e[12]=T*A,e[13]=(h*m*i-_*u*i+_*n*d-t*m*d-h*n*g+t*u*g)*A,e[14]=(_*a*i-o*m*i-_*n*l+t*m*l+o*n*g-t*a*g)*A,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*A,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,d=s*c,f=s*h,_=s*u,m=o*h,g=o*u,p=a*u,v=l*c,M=l*h,y=l*u,T=n.x,E=n.y,A=n.z;return i[0]=(1-(m+p))*T,i[1]=(f+y)*T,i[2]=(_-M)*T,i[3]=0,i[4]=(f-y)*E,i[5]=(1-(d+p))*E,i[6]=(g+v)*E,i[7]=0,i[8]=(_+M)*A,i[9]=(g-v)*A,i[10]=(1-(d+m))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=To.set(i[0],i[1],i[2]).length(),o=To.set(i[4],i[5],i[6]).length(),a=To.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Bi.copy(this);let c=1/s,h=1/o,u=1/a;return Bi.elements[0]*=c,Bi.elements[1]*=c,Bi.elements[2]*=c,Bi.elements[4]*=h,Bi.elements[5]*=h,Bi.elements[6]*=h,Bi.elements[8]*=u,Bi.elements[9]*=u,Bi.elements[10]*=u,t.setFromRotationMatrix(Bi),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=zi,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),d=(t+e)/(t-e),f=(n+i)/(n-i),_,m;if(l)_=s/(o-s),m=o*s/(o-s);else if(a===zi)_=-(o+s)/(o-s),m=-2*o*s/(o-s);else if(a===Za)_=-o/(o-s),m=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=d,c[12]=0,c[1]=0,c[5]=u,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=zi,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),d=-(t+e)/(t-e),f=-(n+i)/(n-i),_,m;if(l)_=1/(o-s),m=o/(o-s);else if(a===zi)_=-2/(o-s),m=-(o+s)/(o-s);else if(a===Za)_=-1/(o-s),m=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=d,c[1]=0,c[5]=u,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=_,c[14]=m,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},To=new L,Bi=new At,hy=new L(0,0,0),uy=new L(1,1,1),qr=new L,bc=new L,gi=new L,y0=new At,v0=new wr,Pi=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ct(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Xe("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return y0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(y0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return v0.setFromEuler(this),this.setFromQuaternion(v0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Pi.DEFAULT_ORDER="XYZ";var ja=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},fy=0,M0=new L,Eo=new wr,yr=new At,Tc=new L,Oa=new L,dy=new L,py=new wr,S0=new L(1,0,0),b0=new L(0,1,0),T0=new L(0,0,1),E0={type:"added"},my={type:"removed"},wo={type:"childadded",child:null},od={type:"childremoved",child:null},cn=class r extends Er{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:fy++}),this.uuid=Jr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new L,t=new Pi,n=new wr,i=new L(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new At},normalMatrix:{value:new Qe}}),this.matrix=new At,this.matrixWorld=new At,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ja,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.multiply(Eo),this}rotateOnWorldAxis(e,t){return Eo.setFromAxisAngle(e,t),this.quaternion.premultiply(Eo),this}rotateX(e){return this.rotateOnAxis(S0,e)}rotateY(e){return this.rotateOnAxis(b0,e)}rotateZ(e){return this.rotateOnAxis(T0,e)}translateOnAxis(e,t){return M0.copy(e).applyQuaternion(this.quaternion),this.position.add(M0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(S0,e)}translateY(e){return this.translateOnAxis(b0,e)}translateZ(e){return this.translateOnAxis(T0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(yr.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tc.copy(e):Tc.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Oa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?yr.lookAt(Oa,Tc,this.up):yr.lookAt(Tc,Oa,this.up),this.quaternion.setFromRotationMatrix(yr),i&&(yr.extractRotation(i.matrixWorld),Eo.setFromRotationMatrix(yr),this.quaternion.premultiply(Eo.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(He("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(E0),wo.child=e,this.dispatchEvent(wo),wo.child=null):He("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(my),od.child=e,this.dispatchEvent(od),od.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),yr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),yr.multiply(e.parent.matrixWorld)),e.applyMatrix4(yr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(E0),wo.child=e,this.dispatchEvent(wo),wo.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,e,dy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oa,py,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};cn.DEFAULT_UP=new L(0,1,0);cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var ki=new L,vr=new L,ad=new L,Mr=new L,Ao=new L,Co=new L,w0=new L,ld=new L,cd=new L,hd=new L,ud=new Gt,fd=new Gt,dd=new Gt,Sr=class r{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ki.subVectors(e,t),i.cross(ki);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ki.subVectors(i,t),vr.subVectors(n,t),ad.subVectors(e,t);let o=ki.dot(ki),a=ki.dot(vr),l=ki.dot(ad),c=vr.dot(vr),h=vr.dot(ad),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return s.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Mr)===null?!1:Mr.x>=0&&Mr.y>=0&&Mr.x+Mr.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,Mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Mr.x),l.addScaledVector(o,Mr.y),l.addScaledVector(a,Mr.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return ud.setScalar(0),fd.setScalar(0),dd.setScalar(0),ud.fromBufferAttribute(e,t),fd.fromBufferAttribute(e,n),dd.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ud,s.x),o.addScaledVector(fd,s.y),o.addScaledVector(dd,s.z),o}static isFrontFacing(e,t,n,i){return ki.subVectors(n,t),vr.subVectors(e,t),ki.cross(vr).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ki.subVectors(this.c,this.b),vr.subVectors(this.a,this.b),ki.cross(vr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;Ao.subVectors(i,n),Co.subVectors(s,n),ld.subVectors(e,n);let l=Ao.dot(ld),c=Co.dot(ld);if(l<=0&&c<=0)return t.copy(n);cd.subVectors(e,i);let h=Ao.dot(cd),u=Co.dot(cd);if(h>=0&&u<=h)return t.copy(i);let d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ao,o);hd.subVectors(e,s);let f=Ao.dot(hd),_=Co.dot(hd);if(_>=0&&f<=_)return t.copy(s);let m=f*c-l*_;if(m<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Co,a);let g=h*_-f*u;if(g<=0&&u-h>=0&&f-_>=0)return w0.subVectors(s,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(w0,a);let p=1/(g+m+d);return o=m*p,a=d*p,t.copy(n).addScaledVector(Ao,o).addScaledVector(Co,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Mg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yr={h:0,s:0,l:0},Ec={h:0,s:0,l:0};function pd(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var tt=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=on){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,dt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=dt.workingColorSpace){if(e=sy(e,1),t=ct(t,0,1),n=ct(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=pd(o,s,e+1/3),this.g=pd(o,s,e),this.b=pd(o,s,e-1/3)}return dt.colorSpaceToWorking(this,i),this}setStyle(e,t=on){function n(s){s!==void 0&&parseFloat(s)<1&&Xe("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:Xe("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);Xe("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=on){let n=Mg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Xe("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=Oo(e.r),this.g=Oo(e.g),this.b=Oo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=on){return dt.workingToColorSpace(Nn.copy(this),e),Math.round(ct(Nn.r*255,0,255))*65536+Math.round(ct(Nn.g*255,0,255))*256+Math.round(ct(Nn.b*255,0,255))}getHexString(e=on){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=dt.workingColorSpace){dt.workingToColorSpace(Nn.copy(this),t);let n=Nn.r,i=Nn.g,s=Nn.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=dt.workingColorSpace){return dt.workingToColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=on){dt.workingToColorSpace(Nn.copy(this),e);let t=Nn.r,n=Nn.g,i=Nn.b;return e!==on?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Yr),this.setHSL(Yr.h+e,Yr.s+t,Yr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Yr),e.getHSL(Ec);let n=$f(Yr.h,Ec.h,t),i=$f(Yr.s,Ec.s,t),s=$f(Yr.l,Ec.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Nn=new tt;tt.NAMES=Mg;var gy=0,Vi=class extends Er{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:gy++}),this.uuid=Jr(),this.name="",this.type="Material",this.blending=Fs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Wc,this.blendDst=Xc,this.blendEquation=$r,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new tt(0,0,0),this.blendAlpha=0,this.depthFunc=Us,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=wd,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ns,this.stencilZFail=Ns,this.stencilZPass=Ns,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){Xe(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){Xe(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Fs&&(n.blending=this.blending),this.side!==Tr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Wc&&(n.blendSrc=this.blendSrc),this.blendDst!==Xc&&(n.blendDst=this.blendDst),this.blendEquation!==$r&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Us&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==wd&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ns&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ns&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ns&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Kr=class extends Vi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var en=new L,wc=new Re,_y=0,ln=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:_y++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Jc,this.updateRanges=[],this.gpuType=Di,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wc.fromBufferAttribute(this,t),wc.applyMatrix3(e),this.setXY(t,wc.x,wc.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Ki(t,this.array)),t}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Ki(t,this.array)),t}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Ki(t,this.array)),t}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Ki(t,this.array)),t}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Jc&&(e.usage=this.usage),e}};var el=class extends ln{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var tl=class extends ln{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var ht=class extends ln{constructor(e,t,n){super(new Float32Array(e),t,n)}},xy=0,Ri=new At,md=new cn,Ro=new L,_i=new er,Ba=new er,gn=new L,Bt=class r extends Er{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xy++}),this.uuid=Jr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Jd(e)?tl:el)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new Qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Ri.makeRotationFromQuaternion(e),this.applyMatrix4(Ri),this}rotateX(e){return Ri.makeRotationX(e),this.applyMatrix4(Ri),this}rotateY(e){return Ri.makeRotationY(e),this.applyMatrix4(Ri),this}rotateZ(e){return Ri.makeRotationZ(e),this.applyMatrix4(Ri),this}translate(e,t,n){return Ri.makeTranslation(e,t,n),this.applyMatrix4(Ri),this}scale(e,t,n){return Ri.makeScale(e,t,n),this.applyMatrix4(Ri),this}lookAt(e){return md.lookAt(e),md.updateMatrix(),this.applyMatrix4(md.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ro).negate(),this.translate(Ro.x,Ro.y,Ro.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new ht(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&Xe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new er);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];_i.setFromBufferAttribute(s),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&He('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ar);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){He("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){let n=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ba.setFromBufferAttribute(a),this.morphTargetsRelative?(gn.addVectors(_i.min,Ba.min),_i.expandByPoint(gn),gn.addVectors(_i.max,Ba.max),_i.expandByPoint(gn)):(_i.expandByPoint(Ba.min),_i.expandByPoint(Ba.max))}_i.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)gn.fromBufferAttribute(a,c),l&&(Ro.fromBufferAttribute(e,c),gn.add(Ro)),i=Math.max(i,n.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&He('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){He("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ln(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new L,l[C]=new L;let c=new L,h=new L,u=new L,d=new Re,f=new Re,_=new Re,m=new L,g=new L;function p(C,x,b){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,x),u.fromBufferAttribute(n,b),d.fromBufferAttribute(s,C),f.fromBufferAttribute(s,x),_.fromBufferAttribute(s,b),h.sub(c),u.sub(c),f.sub(d),_.sub(d);let P=1/(f.x*_.y-_.x*f.y);isFinite(P)&&(m.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(P),g.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(P),a[C].add(m),a[x].add(m),a[b].add(m),l[C].add(g),l[x].add(g),l[b].add(g))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let C=0,x=v.length;C<x;++C){let b=v[C],P=b.start,N=b.count;for(let B=P,V=P+N;B<V;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let M=new L,y=new L,T=new L,E=new L;function A(C){T.fromBufferAttribute(i,C),E.copy(T);let x=a[C];M.copy(x),M.sub(T.multiplyScalar(T.dot(x))).normalize(),y.crossVectors(E,x);let P=y.dot(l[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,P)}for(let C=0,x=v.length;C<x;++C){let b=v[C],P=b.start,N=b.count;for(let B=P,V=P+N;B<V;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ln(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);let i=new L,s=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(e)for(let d=0,f=e.count;d<f;d+=3){let _=e.getX(d+0),m=e.getX(d+1),g=e.getX(d+2);i.fromBufferAttribute(t,_),s.fromBufferAttribute(t,m),o.fromBufferAttribute(t,g),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(m,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)gn.fromBufferAttribute(e,t),gn.normalize(),e.setXYZ(t,gn.x,gn.y,gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h),f=0,_=0;for(let m=0,g=l.length;m<g;m++){a.isInterleavedBufferAttribute?f=l[m]*a.data.stride+a.offset:f=l[m]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new ln(d,h,u)}if(this.index===null)return Xe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){let f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},A0=new At,Ds=new Qa,Ac=new Ar,C0=new L,Cc=new L,Rc=new L,Pc=new L,gd=new L,Ic=new L,R0=new L,Dc=new L,Ct=class extends cn{constructor(e=new Bt,t=new Kr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Ic.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(gd.fromBufferAttribute(u,e),o?Ic.addScaledVector(gd,h):Ic.addScaledVector(gd.sub(t),h))}t.add(Ic)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Ac.copy(n.boundingSphere),Ac.applyMatrix4(s),Ds.copy(e.ray).recast(e.near),!(Ac.containsPoint(Ds.origin)===!1&&(Ds.intersectSphere(Ac,C0)===null||Ds.origin.distanceToSquared(C0)>(e.far-e.near)**2))&&(A0.copy(s).invert(),Ds.copy(e.ray).applyMatrix4(A0),!(n.boundingBox!==null&&Ds.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ds)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,d=s.groups,f=s.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){let g=d[_],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(a.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let E=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);i=Lc(this,p,e,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),m=Math.min(a.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){let v=a.getX(g),M=a.getX(g+1),y=a.getX(g+2);i=Lc(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,m=d.length;_<m;_++){let g=d[_],p=o[g.materialIndex],v=Math.max(g.start,f.start),M=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let y=v,T=M;y<T;y+=3){let E=y,A=y+1,C=y+2;i=Lc(this,p,e,n,c,h,u,E,A,C),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=g.materialIndex,t.push(i))}}else{let _=Math.max(0,f.start),m=Math.min(l.count,f.start+f.count);for(let g=_,p=m;g<p;g+=3){let v=g,M=g+1,y=g+2;i=Lc(this,o,e,n,c,h,u,v,M,y),i&&(i.faceIndex=Math.floor(g/3),t.push(i))}}}};function yy(r,e,t,n,i,s,o,a){let l;if(e.side===En?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===Tr,a),l===null)return null;Dc.copy(a),Dc.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Dc);return c<t.near||c>t.far?null:{distance:c,point:Dc.clone(),object:r}}function Lc(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Cc),r.getVertexPosition(l,Rc),r.getVertexPosition(c,Pc);let h=yy(r,e,t,n,Cc,Rc,Pc,R0);if(h){let u=new L;Sr.getBarycoord(R0,Cc,Rc,Pc,u),i&&(h.uv=Sr.getInterpolatedAttribute(i,a,l,c,u,new Re)),s&&(h.uv1=Sr.getInterpolatedAttribute(s,a,l,c,u,new Re)),o&&(h.normal=Sr.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let d={a,b:l,c,normal:new L,materialIndex:0};Sr.getNormal(Cc,Rc,Pc,d.normal),h.face=d,h.barycoord=u}return h}var kt=class r extends Bt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,s,0),_("z","y","x",1,-1,n,t,-e,o,s,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,s,4),_("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new ht(c,3)),this.setAttribute("normal",new ht(h,3)),this.setAttribute("uv",new ht(u,2));function _(m,g,p,v,M,y,T,E,A,C,x){let b=y/A,P=T/C,N=y/2,B=T/2,V=E/2,W=A+1,z=C+1,k=0,Z=0,ie=new L;for(let I=0;I<z;I++){let re=I*P-B;for(let Ne=0;Ne<W;Ne++){let ke=Ne*b-N;ie[m]=ke*v,ie[g]=re*M,ie[p]=V,c.push(ie.x,ie.y,ie.z),ie[m]=0,ie[g]=0,ie[p]=E>0?1:-1,h.push(ie.x,ie.y,ie.z),u.push(Ne/A),u.push(1-I/C),k+=1}}for(let I=0;I<C;I++)for(let re=0;re<A;re++){let Ne=d+re+W*I,ke=d+re+W*(I+1),Ye=d+(re+1)+W*(I+1),$e=d+(re+1)+W*I;l.push(Ne,ke,$e),l.push(ke,Ye,$e),Z+=6}a.addGroup(f,Z,x),f+=Z,d+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function qs(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Xe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Un(r){let e={};for(let t=0;t<r.length;t++){let n=qs(r[t]);for(let i in n)e[i]=n[i]}return e}function vy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function $d(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:dt.workingColorSpace}var Sg={clone:qs,merge:Un},My=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,yi=class extends Vi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=My,this.fragmentShader=Sy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},nl=class extends cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new At,this.projectionMatrix=new At,this.projectionMatrixInverse=new At,this.coordinateSystem=zi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Zr=new L,P0=new Re,I0=new Re,an=class extends nl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=$c*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Jf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return $c*2*Math.atan(Math.tan(Jf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z),Zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Zr.x,Zr.y).multiplyScalar(-e/Zr.z)}getViewSize(e,t){return this.getViewBounds(e,P0,I0),t.subVectors(I0,P0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Jf*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Po=-90,Io=1,eh=class extends cn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new an(Po,Io,e,t);i.layers=this.layers,this.add(i);let s=new an(Po,Io,e,t);s.layers=this.layers,this.add(s);let o=new an(Po,Io,e,t);o.layers=this.layers,this.add(o);let a=new an(Po,Io,e,t);a.layers=this.layers,this.add(a);let l=new an(Po,Io,e,t);l.layers=this.layers,this.add(l);let c=new an(Po,Io,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Za)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;let m=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=m,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}},il=class extends Yn{constructor(e=[],t=is,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},rl=class extends xi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new il(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new kt(5,5,5),s=new yi({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:En,blending:nr});s.uniforms.tEquirect.value=t;let o=new Ct(i,s),a=t.minFilter;return t.minFilter===rs&&(t.minFilter=bn),new eh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},_n=class extends cn{constructor(){super(),this.isGroup=!0,this.type="Group"}},by={type:"move"},Vo=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new _n,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new _n,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new _n,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let m of e.hand.values()){let g=t.getJointPose(m,n),p=this._getHandJoint(c,m);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(by)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new _n;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var Cr=class extends cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Pi,this.environmentIntensity=1,this.environmentRotation=new Pi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},th=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Jc,this.updateRanges=[],this.version=0,this.uuid=Jr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},qn=new L,sl=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyMatrix4(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.applyNormalMatrix(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)qn.fromBufferAttribute(this,t),qn.transformDirection(e),this.setXYZ(t,qn.x,qn.y,qn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Ki(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=wt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=wt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Ki(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Ki(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Ki(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Ki(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=wt(t,this.array),n=wt(n,this.array),i=wt(i,this.array),s=wt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){$a("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new ln(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){$a("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ho=class extends Vi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Do,ka=new L,Lo=new L,No=new L,Fo=new Re,za=new Re,bg=new At,Nc=new L,Va=new L,Fc=new L,D0=new Re,_d=new Re,L0=new Re,Go=class extends cn{constructor(e=new Ho){if(super(),this.isSprite=!0,this.type="Sprite",Do===void 0){Do=new Bt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new th(t,5);Do.setIndex([0,1,2,0,2,3]),Do.setAttribute("position",new sl(n,3,0,!1)),Do.setAttribute("uv",new sl(n,2,3,!1))}this.geometry=Do,this.material=e,this.center=new Re(.5,.5),this.count=1}raycast(e,t){e.camera===null&&He('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Lo.setFromMatrixScale(this.matrixWorld),bg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),No.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Lo.multiplyScalar(-No.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Uc(Nc.set(-.5,-.5,0),No,o,Lo,i,s),Uc(Va.set(.5,-.5,0),No,o,Lo,i,s),Uc(Fc.set(.5,.5,0),No,o,Lo,i,s),D0.set(0,0),_d.set(1,0),L0.set(1,1);let a=e.ray.intersectTriangle(Nc,Va,Fc,!1,ka);if(a===null&&(Uc(Va.set(-.5,.5,0),No,o,Lo,i,s),_d.set(0,1),a=e.ray.intersectTriangle(Nc,Fc,Va,!1,ka),a===null))return;let l=e.ray.origin.distanceTo(ka);l<e.near||l>e.far||t.push({distance:l,point:ka.clone(),uv:Sr.getInterpolation(ka,Nc,Va,Fc,D0,_d,L0,new Re),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Uc(r,e,t,n,i,s){Fo.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(za.x=s*Fo.x-i*Fo.y,za.y=i*Fo.x+s*Fo.y):za.copy(Fo),r.copy(e),r.x+=za.x,r.y+=za.y,r.applyMatrix4(bg)}var ol=class extends Yn{constructor(e=null,t=1,n=1,i,s,o,a,l,c=xn,h=xn,u,d){super(null,o,a,l,c,h,i,s,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var al=class extends ln{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Uo=new At,N0=new At,Oc=[],F0=new er,Ty=new At,Ha=new Ct,Ga=new Ar,ll=class extends Ct{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new al(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Ty)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new er),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Uo),F0.copy(e.boundingBox).applyMatrix4(Uo),this.boundingBox.union(F0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ar),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Uo),Ga.copy(e.boundingSphere).applyMatrix4(Uo),this.boundingSphere.union(Ga)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Ha.geometry=this.geometry,Ha.material=this.material,Ha.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ga.copy(this.boundingSphere),Ga.applyMatrix4(n),e.ray.intersectsSphere(Ga)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Uo),N0.multiplyMatrices(n,Uo),Ha.matrixWorld=N0,Ha.raycast(e,Oc);for(let o=0,a=Oc.length;o<a;o++){let l=Oc[o];l.instanceId=s,l.object=this,t.push(l)}Oc.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new al(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new ol(new Float32Array(i*this.count),i,this.count,kh,Di));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},xd=new L,Ey=new L,wy=new Qe,$i=class{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=xd.subVectors(n,t).cross(Ey.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(xd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||wy.getNormalMatrix(e),i=this.coplanarPoint(xd).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},Ls=new Ar,Ay=new Re(.5,.5),Bc=new L,Wo=class{constructor(e=new $i,t=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],d=s[6],f=s[7],_=s[8],m=s[9],g=s[10],p=s[11],v=s[12],M=s[13],y=s[14],T=s[15];if(i[0].setComponents(c-o,f-h,p-_,T-v).normalize(),i[1].setComponents(c+o,f+h,p+_,T+v).normalize(),i[2].setComponents(c+a,f+u,p+m,T+M).normalize(),i[3].setComponents(c-a,f-u,p-m,T-M).normalize(),n)i[4].setComponents(l,d,g,y).normalize(),i[5].setComponents(c-l,f-d,p-g,T-y).normalize();else if(i[4].setComponents(c-l,f-d,p-g,T-y).normalize(),t===zi)i[5].setComponents(c+l,f+d,p+g,T+y).normalize();else if(t===Za)i[5].setComponents(l,d,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ls)}intersectsSprite(e){Ls.center.set(0,0,0);let t=Ay.distanceTo(e.center);return Ls.radius=.7071067811865476+t,Ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ls)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Bc.x=i.normal.x>0?e.max.x:e.min.x,Bc.y=i.normal.y>0?e.max.y:e.min.y,Bc.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bc)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Qr=class extends Vi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new tt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},U0=new At,Ad=new Qa,kc=new Ar,zc=new L,Rr=class extends cn{constructor(e=new Bt,t=new Qr){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),kc.copy(n.boundingSphere),kc.applyMatrix4(i),kc.radius+=s,e.ray.intersectsSphere(kc)===!1)return;U0.copy(i).invert(),Ad.copy(e.ray).applyMatrix4(U0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,m=f;_<m;_++){let g=c.getX(_);zc.fromBufferAttribute(u,g),O0(zc,g,l,i,e,t,this)}}else{let d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,m=f;_<m;_++)zc.fromBufferAttribute(u,_),O0(zc,_,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function O0(r,e,t,n,i,s,o){let a=Ad.distanceSqToPoint(r);if(a<t){let l=new L;Ad.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Bs=class extends Yn{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},jr=class extends Yn{constructor(e,t,n=Gi,i,s,o,a=xn,l=xn,c,h=ji,u=1){if(h!==ji&&h!==ss)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new zo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},nh=class extends jr{constructor(e,t=Gi,n=is,i,s,o=xn,a=xn,l,c=ji){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},cl=class extends Yn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}};var hl=class r extends Bt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new L,h=new Re;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new ht(o,3)),this.setAttribute("normal",new ht(a,3)),this.setAttribute("uv",new ht(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Fn=class r extends Bt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],d=[],f=[],_=0,m=[],g=n/2,p=0;v(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(h),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function v(){let y=new L,T=new L,E=0,A=(t-e)/n;for(let C=0;C<=s;C++){let x=[],b=C/s,P=b*(t-e)+e;for(let N=0;N<=i;N++){let B=N/i,V=B*l+a,W=Math.sin(V),z=Math.cos(V);T.x=P*W,T.y=-b*n+g,T.z=P*z,u.push(T.x,T.y,T.z),y.set(W,A,z).normalize(),d.push(y.x,y.y,y.z),f.push(B,1-b),x.push(_++)}m.push(x)}for(let C=0;C<i;C++)for(let x=0;x<s;x++){let b=m[x][C],P=m[x+1][C],N=m[x+1][C+1],B=m[x][C+1];(e>0||x!==0)&&(h.push(b,P,B),E+=3),(t>0||x!==s-1)&&(h.push(P,N,B),E+=3)}c.addGroup(p,E,0),p+=E}function M(y){let T=_,E=new Re,A=new L,C=0,x=y===!0?e:t,b=y===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,g*b,0),d.push(0,b,0),f.push(.5,.5),_++;let P=_;for(let N=0;N<=i;N++){let V=N/i*l+a,W=Math.cos(V),z=Math.sin(V);A.x=x*z,A.y=g*b,A.z=x*W,u.push(A.x,A.y,A.z),d.push(0,b,0),E.x=W*.5+.5,E.y=z*.5*b+.5,f.push(E.x,E.y),_++}for(let N=0;N<i;N++){let B=T+N,V=P+N;y===!0?h.push(V,V+1,B):h.push(V+1,V,B),C+=3}c.addGroup(p,C,y===!0?1:2),p+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var ih=class r extends Bt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new ht(s,3)),this.setAttribute("normal",new ht(s.slice(),3)),this.setAttribute("uv",new ht(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(v){let M=new L,y=new L,T=new L;for(let E=0;E<t.length;E+=3)f(t[E+0],M),f(t[E+1],y),f(t[E+2],T),l(M,y,T,v)}function l(v,M,y,T){let E=T+1,A=[];for(let C=0;C<=E;C++){A[C]=[];let x=v.clone().lerp(y,C/E),b=M.clone().lerp(y,C/E),P=E-C;for(let N=0;N<=P;N++)N===0&&C===E?A[C][N]=x:A[C][N]=x.clone().lerp(b,N/P)}for(let C=0;C<E;C++)for(let x=0;x<2*(E-C)-1;x++){let b=Math.floor(x/2);x%2===0?(d(A[C][b+1]),d(A[C+1][b]),d(A[C][b])):(d(A[C][b+1]),d(A[C+1][b+1]),d(A[C+1][b]))}}function c(v){let M=new L;for(let y=0;y<s.length;y+=3)M.x=s[y+0],M.y=s[y+1],M.z=s[y+2],M.normalize().multiplyScalar(v),s[y+0]=M.x,s[y+1]=M.y,s[y+2]=M.z}function h(){let v=new L;for(let M=0;M<s.length;M+=3){v.x=s[M+0],v.y=s[M+1],v.z=s[M+2];let y=g(v)/2/Math.PI+.5,T=p(v)/Math.PI+.5;o.push(y,1-T)}_(),u()}function u(){for(let v=0;v<o.length;v+=6){let M=o[v+0],y=o[v+2],T=o[v+4],E=Math.max(M,y,T),A=Math.min(M,y,T);E>.9&&A<.1&&(M<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),T<.2&&(o[v+4]+=1))}}function d(v){s.push(v.x,v.y,v.z)}function f(v,M){let y=v*3;M.x=e[y+0],M.y=e[y+1],M.z=e[y+2]}function _(){let v=new L,M=new L,y=new L,T=new L,E=new Re,A=new Re,C=new Re;for(let x=0,b=0;x<s.length;x+=9,b+=6){v.set(s[x+0],s[x+1],s[x+2]),M.set(s[x+3],s[x+4],s[x+5]),y.set(s[x+6],s[x+7],s[x+8]),E.set(o[b+0],o[b+1]),A.set(o[b+2],o[b+3]),C.set(o[b+4],o[b+5]),T.copy(v).add(M).add(y).divideScalar(3);let P=g(T);m(E,b+0,v,P),m(A,b+2,M,P),m(C,b+4,y,P)}}function m(v,M,y,T){T<0&&v.x===1&&(o[M]=v.x-1),y.x===0&&y.z===0&&(o[M]=T/2/Math.PI+.5)}function g(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Ii=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Xe("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new Re:new L);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new L,i=[],s=[],o=[],a=new L,l=new At;for(let f=0;f<=e;f++){let _=f/e;i[f]=this.getTangentAt(_,new L)}s[0]=new L,o[0]=new L;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();let _=Math.acos(ct(i[f-1].dot(i[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],s[f])}if(t===!0){let f=Math.acos(ct(s[0].dot(s[e]),-1,1));f/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(f=-f);for(let _=1;_<=e;_++)s[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],s[_])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},ul=class extends Ii{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new Re){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},rh=class extends ul{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Kd(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let d=(o-s)/c-(a-s)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Vc=new L,yd=new Kd,vd=new Kd,Md=new Kd,es=class extends Ii{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new L){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Vc.subVectors(i[0],i[1]).add(i[0]),c=Vc);let u=i[a%s],d=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Vc.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vc),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,_=Math.pow(c.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(h),f);m<1e-4&&(m=1),_<1e-4&&(_=m),g<1e-4&&(g=m),yd.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,m,g),vd.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,m,g),Md.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,m,g)}else this.curveType==="catmullrom"&&(yd.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),vd.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Md.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(yd.calc(l),vd.calc(l),Md.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new L().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function B0(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Cy(r,e){let t=1-r;return t*t*e}function Ry(r,e){return 2*(1-r)*r*e}function Py(r,e){return r*r*e}function Wa(r,e,t,n){return Cy(r,e)+Ry(r,t)+Py(r,n)}function Iy(r,e){let t=1-r;return t*t*t*e}function Dy(r,e){let t=1-r;return 3*t*t*r*e}function Ly(r,e){return 3*(1-r)*r*r*e}function Ny(r,e){return r*r*r*e}function Xa(r,e,t,n,i){return Iy(r,e)+Dy(r,t)+Ly(r,n)+Ny(r,i)}var sh=class extends Ii{constructor(e=new Re,t=new Re,n=new Re,i=new Re){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new Re){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xa(e,i.x,s.x,o.x,a.x),Xa(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},oh=class extends Ii{constructor(e=new L,t=new L,n=new L,i=new L){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new L){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Xa(e,i.x,s.x,o.x,a.x),Xa(e,i.y,s.y,o.y,a.y),Xa(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends Ii{constructor(e=new Re,t=new Re){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new Re){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new Re){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Ii{constructor(e=new L,t=new L){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new L){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new L){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Ii{constructor(e=new Re,t=new Re,n=new Re){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new Re){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wa(e,i.x,s.x,o.x),Wa(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},fl=class extends Ii{constructor(e=new L,t=new L,n=new L){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new L){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Wa(e,i.x,s.x,o.x),Wa(e,i.y,s.y,o.y),Wa(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hh=class extends Ii{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new Re){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(B0(a,l.x,c.x,h.x,u.x),B0(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new Re().fromArray(i))}return this}},Fy=Object.freeze({__proto__:null,ArcCurve:rh,CatmullRomCurve3:es,CubicBezierCurve:sh,CubicBezierCurve3:oh,EllipseCurve:ul,LineCurve:ah,LineCurve3:lh,QuadraticBezierCurve:ch,QuadraticBezierCurve3:fl,SplineCurve:hh});var dl=class r extends ih{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var pl=class r extends Bt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],m=[],g=[];for(let p=0;p<h;p++){let v=p*d-o;for(let M=0;M<c;M++){let y=M*u-s;_.push(y,-v,0),m.push(0,0,1),g.push(M/a),g.push(1-p/l)}}for(let p=0;p<l;p++)for(let v=0;v<a;v++){let M=v+c*p,y=v+c*(p+1),T=v+1+c*(p+1),E=v+1+c*p;f.push(M,y,E),f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var Zn=class r extends Bt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new L,d=new L,f=[],_=[],m=[],g=[];for(let p=0;p<=n;p++){let v=[],M=p/n,y=0;p===0&&o===0?y=.5/t:p===n&&l===Math.PI&&(y=-.5/t);for(let T=0;T<=t;T++){let E=T/t;u.x=-e*Math.cos(i+E*s)*Math.sin(o+M*a),u.y=e*Math.cos(o+M*a),u.z=e*Math.sin(i+E*s)*Math.sin(o+M*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),m.push(d.x,d.y,d.z),g.push(E+y,1-M),v.push(c++)}h.push(v)}for(let p=0;p<n;p++)for(let v=0;v<t;v++){let M=h[p][v+1],y=h[p][v],T=h[p+1][v],E=h[p+1][v+1];(p!==0||o>0)&&f.push(M,y,E),(p!==n-1||l<Math.PI)&&f.push(y,T,E)}this.setIndex(f),this.setAttribute("position",new ht(_,3)),this.setAttribute("normal",new ht(m,3)),this.setAttribute("uv",new ht(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Tn=class r extends Bt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new L,u=new L,d=new L;for(let f=0;f<=n;f++)for(let _=0;_<=i;_++){let m=_/i*s,g=f/n*Math.PI*2;u.x=(e+t*Math.cos(g))*Math.cos(m),u.y=(e+t*Math.cos(g))*Math.sin(m),u.z=t*Math.sin(g),a.push(u.x,u.y,u.z),h.x=e*Math.cos(m),h.y=e*Math.sin(m),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(_/i),c.push(f/n)}for(let f=1;f<=n;f++)for(let _=1;_<=i;_++){let m=(i+1)*f+_-1,g=(i+1)*(f-1)+_-1,p=(i+1)*(f-1)+_,v=(i+1)*f+_;o.push(m,g,v),o.push(g,p,v)}this.setIndex(o),this.setAttribute("position",new ht(a,3)),this.setAttribute("normal",new ht(l,3)),this.setAttribute("uv",new ht(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},ml=class r extends Bt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new L,d=new L,f=new L,_=new L,m=new L,g=new L,p=new L;for(let M=0;M<=n;++M){let y=M/n*s*Math.PI*2;v(y,s,o,e,f),v(y+.01,s,o,e,_),g.subVectors(_,f),p.addVectors(_,f),m.crossVectors(g,p),p.crossVectors(m,g),m.normalize(),p.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,A=-t*Math.cos(E),C=t*Math.sin(E);u.x=f.x+(A*p.x+C*m.x),u.y=f.y+(A*p.y+C*m.y),u.z=f.z+(A*p.z+C*m.z),l.push(u.x,u.y,u.z),d.subVectors(u,f).normalize(),c.push(d.x,d.y,d.z),h.push(M/n),h.push(T/i)}}for(let M=1;M<=n;M++)for(let y=1;y<=i;y++){let T=(i+1)*(M-1)+(y-1),E=(i+1)*M+(y-1),A=(i+1)*M+y,C=(i+1)*(M-1)+y;a.push(T,E,C),a.push(E,A,C)}this.setIndex(a),this.setAttribute("position",new ht(l,3)),this.setAttribute("normal",new ht(c,3)),this.setAttribute("uv",new ht(h,2));function v(M,y,T,E,A){let C=Math.cos(M),x=Math.sin(M),b=T/y*M,P=Math.cos(b);A.x=E*(2+P)*.5*C,A.y=E*(2+P)*x*.5,A.z=E*Math.sin(b)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},ks=class r extends Bt{constructor(e=new fl(new L(-1,-1,0),new L(-1,1,0),new L(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new L,l=new L,c=new Re,h=new L,u=[],d=[],f=[],_=[];m(),this.setIndex(_),this.setAttribute("position",new ht(u,3)),this.setAttribute("normal",new ht(d,3)),this.setAttribute("uv",new ht(f,2));function m(){for(let M=0;M<t;M++)g(M);g(s===!1?t:0),v(),p()}function g(M){h=e.getPointAt(M/t,h);let y=o.normals[M],T=o.binormals[M];for(let E=0;E<=i;E++){let A=E/i*Math.PI*2,C=Math.sin(A),x=-Math.cos(A);l.x=x*y.x+C*T.x,l.y=x*y.y+C*T.y,l.z=x*y.z+C*T.z,l.normalize(),d.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function p(){for(let M=1;M<=t;M++)for(let y=1;y<=i;y++){let T=(i+1)*(M-1)+(y-1),E=(i+1)*M+(y-1),A=(i+1)*M+y,C=(i+1)*(M-1)+y;_.push(T,E,C),_.push(E,A,C)}}function v(){for(let M=0;M<=t;M++)for(let y=0;y<=i;y++)c.x=M/t,c.y=y/i,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new Fy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var uh=class extends yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},vt=class extends Vi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},zs=class extends vt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Re(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ct(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new tt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new tt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new tt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var gl=class extends Vi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Mu,this.normalScale=new Re(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Pi,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},fh=class extends Vi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ug,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends Vi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Hc(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var Vs=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},ph=class extends Vs{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:bd,endingEnd:bd}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Td:s=e,a=2*t-n;break;case Ed:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Td:o=e,l=2*n-t;break;case Ed:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),m=_*_,g=m*_,p=-d*g+2*d*m-d*_,v=(1+d)*g+(-1.5-2*d)*m+(-.5+d)*_+1,M=(-1-f)*g+(1.5+f)*m+.5*_,y=f*g-f*m;for(let T=0;T!==a;++T)s[T]=p*o[h+T]+v*o[c+T]+M*o[l+T]+y*o[u+T];return s}},mh=class extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)s[d]=o[c+d]*u+o[l+d]*h;return s}},gh=class extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},vi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Hc(t,this.TimeBufferType),this.values=Hc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Hc(e.times,Array),values:Hc(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new gh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ph(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case qa:t=this.InterpolantFactoryMethodDiscrete;break;case Zc:t=this.InterpolantFactoryMethodLinear;break;case Gc:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Xe("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return qa;case this.InterpolantFactoryMethodLinear:return Zc;case this.InterpolantFactoryMethodSmooth:return Gc}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(He("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(He("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){He("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){He("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ry(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){He("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Gc,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){let m=t[u+_];if(m!==t[d+_]||m!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};vi.prototype.ValueTypeName="";vi.prototype.TimeBufferType=Float32Array;vi.prototype.ValueBufferType=Float32Array;vi.prototype.DefaultInterpolation=Zc;var ts=class extends vi{constructor(e,t,n){super(e,t,n)}};ts.prototype.ValueTypeName="bool";ts.prototype.ValueBufferType=Array;ts.prototype.DefaultInterpolation=qa;ts.prototype.InterpolantFactoryMethodLinear=void 0;ts.prototype.InterpolantFactoryMethodSmooth=void 0;var _h=class extends vi{constructor(e,t,n,i){super(e,t,n,i)}};_h.prototype.ValueTypeName="color";var xh=class extends vi{constructor(e,t,n,i){super(e,t,n,i)}};xh.prototype.ValueTypeName="number";var yh=class extends Vs{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)wr.slerpFlat(s,0,o,c-a,o,c,l);return s}},_l=class extends vi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new yh(this.times,this.values,this.getValueSize(),e)}};_l.prototype.ValueTypeName="quaternion";_l.prototype.InterpolantFactoryMethodSmooth=void 0;var ns=class extends vi{constructor(e,t,n){super(e,t,n)}};ns.prototype.ValueTypeName="string";ns.prototype.ValueBufferType=Array;ns.prototype.DefaultInterpolation=qa;ns.prototype.InterpolantFactoryMethodLinear=void 0;ns.prototype.InterpolantFactoryMethodSmooth=void 0;var vh=class extends vi{constructor(e,t,n,i){super(e,t,n,i)}};vh.prototype.ValueTypeName="vector";var Mh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){let f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Tg=new Mh,Sh=class{constructor(e){this.manager=e!==void 0?e:Tg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};Sh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Xo=class extends cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}};var Sd=new At,k0=new L,z0=new L,bh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Re(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new At,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wo,this._frameExtents=new Re(1,1),this._viewportCount=1,this._viewports=[new Gt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;k0.setFromMatrixPosition(e.matrixWorld),t.position.copy(k0),z0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(z0),t.updateMatrixWorld(),Sd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Sd,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Sd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var Cd=class extends bh{constructor(){super(new an(90,1,.5,500)),this.isPointLightShadow=!0}},xl=class extends Xo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Cd}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},qo=class extends nl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Rd=class extends bh{constructor(){super(new qo(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},tr=class extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(cn.DEFAULT_UP),this.updateMatrix(),this.target=new cn,this.shadow=new Rd}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Hs=class extends Xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Th=class extends an{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}};var Qd="\\[\\]\\.:\\/",Uy=new RegExp("["+Qd+"]","g"),jd="[^"+Qd+"]",Oy="[^"+Qd.replace("\\.","")+"]",By=/((?:WC+[\/:])*)/.source.replace("WC",jd),ky=/(WCOD+)?/.source.replace("WCOD",Oy),zy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",jd),Vy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",jd),Hy=new RegExp("^"+By+ky+zy+Vy+"$"),Gy=["material","materials","bones","map"],Pd=class{constructor(e,t,n){let i=n||Ut.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},Ut=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Uy,"")}static parseTrackName(e){let t=Hy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);Gy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Xe("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){He("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){He("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){He("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){He("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){He("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){He("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;He("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){He("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Ut.Composite=Pd;Ut.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ut.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ut.prototype.GetterByBindingType=[Ut.prototype._getValue_direct,Ut.prototype._getValue_array,Ut.prototype._getValue_arrayElement,Ut.prototype._getValue_toArray];Ut.prototype.SetterByBindingTypeAndVersioning=[[Ut.prototype._setValue_direct,Ut.prototype._setValue_direct_setNeedsUpdate,Ut.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_array,Ut.prototype._setValue_array_setNeedsUpdate,Ut.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_arrayElement,Ut.prototype._setValue_arrayElement_setNeedsUpdate,Ut.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ut.prototype._setValue_fromArray,Ut.prototype._setValue_fromArray_setNeedsUpdate,Ut.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var eT=new Float32Array(1);function ep(r,e,t,n){let i=Wy(n);switch(t){case qd:return r*e;case kh:return r*e/i.components*i.byteLength;case zh:return r*e/i.components*i.byteLength;case Xs:return r*e*2/i.components*i.byteLength;case Vh:return r*e*2/i.components*i.byteLength;case Yd:return r*e*3/i.components*i.byteLength;case Li:return r*e*4/i.components*i.byteLength;case Hh:return r*e*4/i.components*i.byteLength;case Sl:case bl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tl:case El:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case Zh:case $h:case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Jh:case Qh:case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case eu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case tu:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case iu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case ru:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case su:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case ou:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case au:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case lu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cu:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case hu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case uu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case fu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case du:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pu:case mu:case gu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _u:case xu:return Math.ceil(r/4)*Math.ceil(e/4)*8;case yu:case vu:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Wy(r){switch(r){case ri:case Hd:return{byteLength:1,components:1};case Zo:case Gd:case ir:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case Gi:case Uh:case Di:return{byteLength:4,components:1};case Wd:case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Xe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function Yg(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function qy(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,d=r.createBuffer();r.bindBuffer(l,d),r.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=r.HALF_FLOAT:f=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=r.SHORT;else if(c instanceof Uint32Array)f=r.UNSIGNED_INT;else if(c instanceof Int32Array)f=r.INT;else if(c instanceof Int8Array)f=r.BYTE;else if(c instanceof Uint8Array)f=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){let _=u[d],m=u[f];m.start<=_.start+_.count+1?_.count=Math.max(_.count,m.start+m.count-_.start):(++d,u[d]=m)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){let m=u[f];r.bufferSubData(c,m.start*h.BYTES_PER_ELEMENT,h,m.start,m.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var Yy=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Zy=`#ifdef USE_ALPHAHASH
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
#endif`,Jy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$y=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ky=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,jy=`#ifdef USE_AOMAP
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
#endif`,ev=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tv=`#ifdef USE_BATCHING
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
#endif`,nv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,iv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,rv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,sv=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,ov=`#ifdef USE_IRIDESCENCE
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
#endif`,av=`#ifdef USE_BUMPMAP
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
#endif`,lv=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,cv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,hv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,uv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,fv=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,dv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pv=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mv=`#if defined( USE_COLOR_ALPHA )
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
#endif`,gv=`#define PI 3.141592653589793
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
} // validated`,_v=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,xv=`vec3 transformedNormal = objectNormal;
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
#endif`,yv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,vv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sv=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",Tv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ev=`#ifdef USE_ENVMAP
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
#endif`,wv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Av=`#ifdef USE_ENVMAP
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
#endif`,Cv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Rv=`#ifdef USE_ENVMAP
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
#endif`,Pv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Iv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Dv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Lv=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Nv=`#ifdef USE_GRADIENTMAP
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
}`,Fv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Uv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ov=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bv=`uniform bool receiveShadow;
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
#endif`,kv=`#ifdef USE_ENVMAP
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
#endif`,zv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Hv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wv=`PhysicalMaterial material;
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
#endif`,Xv=`uniform sampler2D dfgLUT;
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
}`,qv=`
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
#endif`,Yv=`#if defined( RE_IndirectDiffuse )
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
#endif`,Zv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Jv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$v=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Kv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eM=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,nM=`#if defined( USE_POINTS_UV )
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
#endif`,iM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,oM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,aM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lM=`#ifdef USE_MORPHTARGETS
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
#endif`,cM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,fM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mM=`#ifdef USE_NORMALMAP
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
#endif`,gM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_M=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,xM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,yM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,vM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,MM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,SM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,TM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,EM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,PM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,IM=`float getShadowMask() {
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
}`,DM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,LM=`#ifdef USE_SKINNING
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
#endif`,NM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,FM=`#ifdef USE_SKINNING
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
#endif`,UM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,BM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zM=`#ifdef USE_TRANSMISSION
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
#endif`,VM=`#ifdef USE_TRANSMISSION
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
#endif`,HM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,XM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,qM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,YM=`uniform sampler2D t2D;
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,JM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,KM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,QM=`#include <common>
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
}`,jM=`#if DEPTH_PACKING == 3200
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
}`,eS=`#define DISTANCE
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
}`,tS=`#define DISTANCE
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
}`,nS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,iS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rS=`uniform float scale;
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
}`,sS=`uniform vec3 diffuse;
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
}`,oS=`#include <common>
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
}`,aS=`uniform vec3 diffuse;
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
}`,lS=`#define LAMBERT
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
}`,cS=`#define LAMBERT
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
}`,hS=`#define MATCAP
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
}`,uS=`#define MATCAP
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
}`,fS=`#define NORMAL
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
}`,dS=`#define NORMAL
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
}`,pS=`#define PHONG
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
}`,mS=`#define PHONG
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
}`,gS=`#define STANDARD
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
}`,_S=`#define STANDARD
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
}`,xS=`#define TOON
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
}`,yS=`#define TOON
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
}`,vS=`uniform float size;
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
}`,MS=`uniform vec3 diffuse;
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
}`,SS=`#include <common>
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
}`,bS=`uniform vec3 color;
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
}`,TS=`uniform float rotation;
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
}`,ES=`uniform vec3 diffuse;
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
}`,nt={alphahash_fragment:Yy,alphahash_pars_fragment:Zy,alphamap_fragment:Jy,alphamap_pars_fragment:$y,alphatest_fragment:Ky,alphatest_pars_fragment:Qy,aomap_fragment:jy,aomap_pars_fragment:ev,batching_pars_vertex:tv,batching_vertex:nv,begin_vertex:iv,beginnormal_vertex:rv,bsdfs:sv,iridescence_fragment:ov,bumpmap_pars_fragment:av,clipping_planes_fragment:lv,clipping_planes_pars_fragment:cv,clipping_planes_pars_vertex:hv,clipping_planes_vertex:uv,color_fragment:fv,color_pars_fragment:dv,color_pars_vertex:pv,color_vertex:mv,common:gv,cube_uv_reflection_fragment:_v,defaultnormal_vertex:xv,displacementmap_pars_vertex:yv,displacementmap_vertex:vv,emissivemap_fragment:Mv,emissivemap_pars_fragment:Sv,colorspace_fragment:bv,colorspace_pars_fragment:Tv,envmap_fragment:Ev,envmap_common_pars_fragment:wv,envmap_pars_fragment:Av,envmap_pars_vertex:Cv,envmap_physical_pars_fragment:kv,envmap_vertex:Rv,fog_vertex:Pv,fog_pars_vertex:Iv,fog_fragment:Dv,fog_pars_fragment:Lv,gradientmap_pars_fragment:Nv,lightmap_pars_fragment:Fv,lights_lambert_fragment:Uv,lights_lambert_pars_fragment:Ov,lights_pars_begin:Bv,lights_toon_fragment:zv,lights_toon_pars_fragment:Vv,lights_phong_fragment:Hv,lights_phong_pars_fragment:Gv,lights_physical_fragment:Wv,lights_physical_pars_fragment:Xv,lights_fragment_begin:qv,lights_fragment_maps:Yv,lights_fragment_end:Zv,logdepthbuf_fragment:Jv,logdepthbuf_pars_fragment:$v,logdepthbuf_pars_vertex:Kv,logdepthbuf_vertex:Qv,map_fragment:jv,map_pars_fragment:eM,map_particle_fragment:tM,map_particle_pars_fragment:nM,metalnessmap_fragment:iM,metalnessmap_pars_fragment:rM,morphinstance_vertex:sM,morphcolor_vertex:oM,morphnormal_vertex:aM,morphtarget_pars_vertex:lM,morphtarget_vertex:cM,normal_fragment_begin:hM,normal_fragment_maps:uM,normal_pars_fragment:fM,normal_pars_vertex:dM,normal_vertex:pM,normalmap_pars_fragment:mM,clearcoat_normal_fragment_begin:gM,clearcoat_normal_fragment_maps:_M,clearcoat_pars_fragment:xM,iridescence_pars_fragment:yM,opaque_fragment:vM,packing:MM,premultiplied_alpha_fragment:SM,project_vertex:bM,dithering_fragment:TM,dithering_pars_fragment:EM,roughnessmap_fragment:wM,roughnessmap_pars_fragment:AM,shadowmap_pars_fragment:CM,shadowmap_pars_vertex:RM,shadowmap_vertex:PM,shadowmask_pars_fragment:IM,skinbase_vertex:DM,skinning_pars_vertex:LM,skinning_vertex:NM,skinnormal_vertex:FM,specularmap_fragment:UM,specularmap_pars_fragment:OM,tonemapping_fragment:BM,tonemapping_pars_fragment:kM,transmission_fragment:zM,transmission_pars_fragment:VM,uv_pars_fragment:HM,uv_pars_vertex:GM,uv_vertex:WM,worldpos_vertex:XM,background_vert:qM,background_frag:YM,backgroundCube_vert:ZM,backgroundCube_frag:JM,cube_vert:$M,cube_frag:KM,depth_vert:QM,depth_frag:jM,distance_vert:eS,distance_frag:tS,equirect_vert:nS,equirect_frag:iS,linedashed_vert:rS,linedashed_frag:sS,meshbasic_vert:oS,meshbasic_frag:aS,meshlambert_vert:lS,meshlambert_frag:cS,meshmatcap_vert:hS,meshmatcap_frag:uS,meshnormal_vert:fS,meshnormal_frag:dS,meshphong_vert:pS,meshphong_frag:mS,meshphysical_vert:gS,meshphysical_frag:_S,meshtoon_vert:xS,meshtoon_frag:yS,points_vert:vS,points_frag:MS,shadow_vert:SS,shadow_frag:bS,sprite_vert:TS,sprite_frag:ES},me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qe}},envmap:{envMap:{value:null},envMapRotation:{value:new Qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qe},normalScale:{value:new Re(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0},uvTransform:{value:new Qe}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Re(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qe},alphaMap:{value:null},alphaMapTransform:{value:new Qe},alphaTest:{value:0}}},sr={basic:{uniforms:Un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:nt.meshbasic_vert,fragmentShader:nt.meshbasic_frag},lambert:{uniforms:Un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:nt.meshlambert_vert,fragmentShader:nt.meshlambert_frag},phong:{uniforms:Un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:nt.meshphong_vert,fragmentShader:nt.meshphong_frag},standard:{uniforms:Un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag},toon:{uniforms:Un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new tt(0)}}]),vertexShader:nt.meshtoon_vert,fragmentShader:nt.meshtoon_frag},matcap:{uniforms:Un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:nt.meshmatcap_vert,fragmentShader:nt.meshmatcap_frag},points:{uniforms:Un([me.points,me.fog]),vertexShader:nt.points_vert,fragmentShader:nt.points_frag},dashed:{uniforms:Un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:nt.linedashed_vert,fragmentShader:nt.linedashed_frag},depth:{uniforms:Un([me.common,me.displacementmap]),vertexShader:nt.depth_vert,fragmentShader:nt.depth_frag},normal:{uniforms:Un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:nt.meshnormal_vert,fragmentShader:nt.meshnormal_frag},sprite:{uniforms:Un([me.sprite,me.fog]),vertexShader:nt.sprite_vert,fragmentShader:nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:nt.background_vert,fragmentShader:nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qe}},vertexShader:nt.backgroundCube_vert,fragmentShader:nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:nt.cube_vert,fragmentShader:nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:nt.equirect_vert,fragmentShader:nt.equirect_frag},distance:{uniforms:Un([me.common,me.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:nt.distance_vert,fragmentShader:nt.distance_frag},shadow:{uniforms:Un([me.lights,me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:nt.shadow_vert,fragmentShader:nt.shadow_frag}};sr.physical={uniforms:Un([sr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qe},clearcoatNormalScale:{value:new Re(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qe},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qe},transmissionSamplerSize:{value:new Re},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qe},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qe},anisotropyVector:{value:new Re},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qe}}]),vertexShader:nt.meshphysical_vert,fragmentShader:nt.meshphysical_frag};var Tu={r:0,b:0,g:0},Ys=new Pi,wS=new At;function AS(r,e,t,n,i,s,o){let a=new tt(0),l=s===!0?0:1,c,h,u=null,d=0,f=null;function _(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?t:e).get(y)),y}function m(M){let y=!1,T=_(M);T===null?p(a,l):T&&T.isColor&&(p(T,1),y=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function g(M,y){let T=_(y);T&&(T.isCubeTexture||T.mapping===vl)?(h===void 0&&(h=new Ct(new kt(1,1,1),new yi({name:"BackgroundCubeMaterial",uniforms:qs(sr.backgroundCube.uniforms),vertexShader:sr.backgroundCube.vertexShader,fragmentShader:sr.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Ys.copy(y.backgroundRotation),Ys.x*=-1,Ys.y*=-1,Ys.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ys.y*=-1,Ys.z*=-1),h.material.uniforms.envMap.value=T,h.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(wS.makeRotationFromEuler(Ys)),h.material.toneMapped=dt.getTransfer(T.colorSpace)!==yt,(u!==T||d!==T.version||f!==r.toneMapping)&&(h.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Ct(new pl(2,2),new yi({name:"BackgroundMaterial",uniforms:qs(sr.background.uniforms),vertexShader:sr.background.vertexShader,fragmentShader:sr.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=dt.getTransfer(T.colorSpace)!==yt,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(u!==T||d!==T.version||f!==r.toneMapping)&&(c.material.needsUpdate=!0,u=T,d=T.version,f=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function p(M,y){M.getRGB(Tu,$d(r)),n.buffers.color.setClear(Tu.r,Tu.g,Tu.b,y,o)}function v(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,y=1){a.set(M),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(M){l=M,p(a,l)},render:m,addToRenderList:g,dispose:v}}function CS(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=d(null),s=i,o=!1;function a(b,P,N,B,V){let W=!1,z=u(B,N,P);s!==z&&(s=z,c(s.object)),W=f(b,B,N,V),W&&_(b,B,N,V),V!==null&&e.update(V,r.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,y(b,P,N,B),V!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(V).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function h(b){return r.deleteVertexArray(b)}function u(b,P,N){let B=N.wireframe===!0,V=n[b.id];V===void 0&&(V={},n[b.id]=V);let W=V[P.id];W===void 0&&(W={},V[P.id]=W);let z=W[B];return z===void 0&&(z=d(l()),W[B]=z),z}function d(b){let P=[],N=[],B=[];for(let V=0;V<t;V++)P[V]=0,N[V]=0,B[V]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:b,attributes:{},index:null}}function f(b,P,N,B){let V=s.attributes,W=P.attributes,z=0,k=N.getAttributes();for(let Z in k)if(k[Z].location>=0){let I=V[Z],re=W[Z];if(re===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),I===void 0||I.attribute!==re||re&&I.data!==re.data)return!0;z++}return s.attributesNum!==z||s.index!==B}function _(b,P,N,B){let V={},W=P.attributes,z=0,k=N.getAttributes();for(let Z in k)if(k[Z].location>=0){let I=W[Z];I===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(I=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(I=b.instanceColor));let re={};re.attribute=I,I&&I.data&&(re.data=I.data),V[Z]=re,z++}s.attributes=V,s.attributesNum=z,s.index=B}function m(){let b=s.newAttributes;for(let P=0,N=b.length;P<N;P++)b[P]=0}function g(b){p(b,0)}function p(b,P){let N=s.newAttributes,B=s.enabledAttributes,V=s.attributeDivisors;N[b]=1,B[b]===0&&(r.enableVertexAttribArray(b),B[b]=1),V[b]!==P&&(r.vertexAttribDivisor(b,P),V[b]=P)}function v(){let b=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==b[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function M(b,P,N,B,V,W,z){z===!0?r.vertexAttribIPointer(b,P,N,V,W):r.vertexAttribPointer(b,P,N,B,V,W)}function y(b,P,N,B){m();let V=B.attributes,W=N.getAttributes(),z=P.defaultAttributeValues;for(let k in W){let Z=W[k];if(Z.location>=0){let ie=V[k];if(ie===void 0&&(k==="instanceMatrix"&&b.instanceMatrix&&(ie=b.instanceMatrix),k==="instanceColor"&&b.instanceColor&&(ie=b.instanceColor)),ie!==void 0){let I=ie.normalized,re=ie.itemSize,Ne=e.get(ie);if(Ne===void 0)continue;let ke=Ne.buffer,Ye=Ne.type,$e=Ne.bytesPerElement,J=Ye===r.INT||Ye===r.UNSIGNED_INT||ie.gpuType===Uh;if(ie.isInterleavedBufferAttribute){let Q=ie.data,fe=Q.stride,Ie=ie.offset;if(Q.isInstancedInterleavedBuffer){for(let ve=0;ve<Z.locationSize;ve++)p(Z.location+ve,Q.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=Q.meshPerAttribute*Q.count)}else for(let ve=0;ve<Z.locationSize;ve++)g(Z.location+ve);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let ve=0;ve<Z.locationSize;ve++)M(Z.location+ve,re/Z.locationSize,Ye,I,fe*$e,(Ie+re/Z.locationSize*ve)*$e,J)}else{if(ie.isInstancedBufferAttribute){for(let Q=0;Q<Z.locationSize;Q++)p(Z.location+Q,ie.meshPerAttribute);b.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Q=0;Q<Z.locationSize;Q++)g(Z.location+Q);r.bindBuffer(r.ARRAY_BUFFER,ke);for(let Q=0;Q<Z.locationSize;Q++)M(Z.location+Q,re/Z.locationSize,Ye,I,re*$e,re/Z.locationSize*Q*$e,J)}}else if(z!==void 0){let I=z[k];if(I!==void 0)switch(I.length){case 2:r.vertexAttrib2fv(Z.location,I);break;case 3:r.vertexAttrib3fv(Z.location,I);break;case 4:r.vertexAttrib4fv(Z.location,I);break;default:r.vertexAttrib1fv(Z.location,I)}}}}v()}function T(){C();for(let b in n){let P=n[b];for(let N in P){let B=P[N];for(let V in B)h(B[V].object),delete B[V];delete P[N]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let P=n[b.id];for(let N in P){let B=P[N];for(let V in B)h(B[V].object),delete B[V];delete P[N]}delete n[b.id]}function A(b){for(let P in n){let N=n[P];if(N[b.id]===void 0)continue;let B=N[b.id];for(let V in B)h(B[V].object),delete B[V];delete N[b.id]}}function C(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:A,initAttributes:m,enableAttribute:g,disableUnusedAttributes:v}}function RS(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;let f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let m=0;m<u;m++)_+=h[m]*d[m];t.update(_,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function PS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Li&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){let C=A===ir&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ri&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Di&&!C)}function l(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(Xe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),f=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_TEXTURE_SIZE),g=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),v=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),M=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:m,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:v,maxVaryings:M,maxFragmentUniforms:y,maxSamples:T,samples:E}}function IS(r){let e=this,t=null,n=0,i=!1,s=!1,o=new $i,a=new Qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let _=u.clippingPlanes,m=u.clipIntersection,g=u.clipShadows,p=r.get(u);if(!i||_===null||_.length===0||s&&!g)s?h(null):c();else{let v=s?0:n,M=v*4,y=p.clippingState||null;l.value=y,y=h(_,d,M,f);for(let T=0;T!==M;++T)y[T]=t[T];p.clippingState=y,this.numIntersection=m?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){let m=u!==null?u.length:0,g=null;if(m!==0){if(g=l.value,_!==!0||g===null){let p=f+m*4,v=d.matrixWorldInverse;a.getNormalMatrix(v),(g===null||g.length<p)&&(g=new Float32Array(p));for(let M=0,y=f;M!==m;++M,y+=4)o.copy(u[M]).applyMatrix4(v,a),o.normal.toArray(g,y),g[y+3]=o.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=m,e.numIntersection=0,g}}function DS(r){let e=new WeakMap;function t(o,a){return a===Lh?o.mapping=is:a===Nh&&(o.mapping=Ws),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lh||a===Nh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new rl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var os=4,Eg=[.125,.215,.35,.446,.526,.582],Js=20,LS=256,wl=new qo,wg=new tt,tp=null,np=0,ip=0,rp=!1,NS=new L,as=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=NS}=s;tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Rg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Cg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(tp,np,ip),this._renderer.xr.enabled=rp,e.scissorTest=!1,$o(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===is||e.mapping===Ws?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tp=this._renderer.getRenderTarget(),np=this._renderer.getActiveCubeFace(),ip=this._renderer.getActiveMipmapLevel(),rp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:bn,minFilter:bn,generateMipmaps:!1,type:ir,format:Li,colorSpace:Os,depthBuffer:!1},i=Ag(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ag(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=FS(s)),this._blurMaterial=OS(s,e,t),this._ggxMaterial=US(s,e,t)}return i}_compileMaterial(e){let t=new Ct(new Bt,e);this._renderer.compile(t,wl)}_sceneToCubeUV(e,t,n,i,s){let l=new an(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(wg),u.toneMapping=Hi,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ct(new kt,new Kr({name:"PMREM.Background",side:En,depthWrite:!1,depthTest:!1})));let m=this._backgroundBox,g=m.material,p=!1,v=e.background;v?v.isColor&&(g.color.copy(v),e.background=null,p=!0):(g.color.copy(wg),p=!0);for(let M=0;M<6;M++){let y=M%3;y===0?(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[M],s.y,s.z)):y===1?(l.up.set(0,0,c[M]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[M],s.z)):(l.up.set(0,c[M],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[M]));let T=this._cubeSize;$o(i,y*T,M>2?T:0,T,T),u.setRenderTarget(i),p&&u.render(m,l),u.render(e,l)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===is||e.mapping===Ws;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Rg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Cg());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;$o(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wl)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),d=0+c*1.25,f=u*d,{_lodMax:_}=this,m=this._sizeLods[n],g=3*m*(n>_-os?n-_+os:0),p=4*(this._cubeSize-m);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=_-t,$o(s,g,p,3*m,2*m),i.setRenderTarget(s),i.render(a,wl),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=_-n,$o(e,g,p,3*m,2*m),i.setRenderTarget(e),i.render(a,wl)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&He("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Js-1),m=s/_,g=isFinite(s)?1+Math.floor(h*m):Js;g>Js&&Xe(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Js}`);let p=[],v=0;for(let A=0;A<Js;++A){let C=A/m,x=Math.exp(-C*C/2);p.push(x),A===0?v+=x:A<g&&(v+=2*x)}for(let A=0;A<p.length;A++)p[A]=p[A]/v;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);let{_lodMax:M}=this;d.dTheta.value=_,d.mipInt.value=M-n;let y=this._sizeLods[i],T=3*y*(i>M-os?i-M+os:0),E=4*(this._cubeSize-y);$o(t,T,E,3*y,2*y),l.setRenderTarget(t),l.render(u,wl)}};function FS(r){let e=[],t=[],n=[],i=r,s=r-os+1+Eg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-os?l=Eg[o-r+os-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,m=3,g=2,p=1,v=new Float32Array(m*_*f),M=new Float32Array(g*_*f),y=new Float32Array(p*_*f);for(let E=0;E<f;E++){let A=E%3*2/3-1,C=E>2?0:-1,x=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];v.set(x,m*_*E),M.set(d,g*_*E);let b=[E,E,E,E,E,E];y.set(b,p*_*E)}let T=new Bt;T.setAttribute("position",new ln(v,m)),T.setAttribute("uv",new ln(M,g)),T.setAttribute("faceIndex",new ln(y,p)),n.push(new Ct(T,null)),i>os&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function Ag(r,e,t){let n=new xi(r,e,t);return n.texture.mapping=vl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function $o(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function US(r,e,t){return new yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:LS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wu(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function OS(r,e,t){let n=new Float32Array(Js),i=new L(0,1,0);return new yi({name:"SphericalGaussianBlur",defines:{n:Js,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wu(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Cg(){return new yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wu(),fragmentShader:`

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
		`,blending:nr,depthTest:!1,depthWrite:!1})}function Rg(){return new yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:nr,depthTest:!1,depthWrite:!1})}function wu(){return`

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
	`}function BS(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Lh||l===Nh,h=l===is||l===Ws;if(c||h){let u=e.get(a),d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new as(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new as(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function kS(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&ko("WebGLRenderer: "+n+" extension not supported."),i}}}function zS(r,e,t,n){let i={},s=new WeakMap;function o(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let _ in d.attributes)e.remove(d.attributes[_]);d.removeEventListener("dispose",o),delete i[d.id];let f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){let d=u.attributes;for(let f in d)e.update(d[f],r.ARRAY_BUFFER)}function c(u){let d=[],f=u.index,_=u.attributes.position,m=0;if(f!==null){let v=f.array;m=f.version;for(let M=0,y=v.length;M<y;M+=3){let T=v[M+0],E=v[M+1],A=v[M+2];d.push(T,E,E,A,A,T)}}else if(_!==void 0){let v=_.array;m=_.version;for(let M=0,y=v.length/3-1;M<y;M+=3){let T=M+0,E=M+1,A=M+2;d.push(T,E,E,A,A,T)}}else return;let g=new(Jd(d)?tl:el)(d,1);g.version=m;let p=s.get(u);p&&e.remove(p),s.set(u,g)}function h(u){let d=s.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function VS(r,e,t){let n;function i(d){n=d}let s,o;function a(d){s=d.type,o=d.bytesPerElement}function l(d,f){r.drawElements(n,f,s,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(r.drawElementsInstanced(n,f,s,d*o,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,s,d,0,_);let g=0;for(let p=0;p<_;p++)g+=f[p];t.update(g,n,1)}function u(d,f,_,m){if(_===0)return;let g=e.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],m[p]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,m,0,_);let p=0;for(let v=0;v<_;v++)p+=f[v]*m[v];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function HS(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:He("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function GS(r,e,t){let n=new WeakMap,i=new Gt;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,d=n.get(a);if(d===void 0||d.count!==u){let x=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",x)};d!==void 0&&d.texture.dispose();let f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,g=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],v=a.morphAttributes.color||[],M=0;f===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let y=a.attributes.position.count*M,T=1;y>e.maxTextureSize&&(T=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let E=new Float32Array(y*T*4*u),A=new Ka(E,y,T,u);A.type=Di,A.needsUpdate=!0;let C=M*4;for(let b=0;b<u;b++){let P=g[b],N=p[b],B=v[b],V=y*T*4*b;for(let W=0;W<P.count;W++){let z=W*C;f===!0&&(i.fromBufferAttribute(P,W),E[V+z+0]=i.x,E[V+z+1]=i.y,E[V+z+2]=i.z,E[V+z+3]=0),_===!0&&(i.fromBufferAttribute(N,W),E[V+z+4]=i.x,E[V+z+5]=i.y,E[V+z+6]=i.z,E[V+z+7]=0),m===!0&&(i.fromBufferAttribute(B,W),E[V+z+8]=i.x,E[V+z+9]=i.y,E[V+z+10]=i.z,E[V+z+11]=B.itemSize===4?i.w:1)}}d={count:u,texture:A,size:new Re(y,T)},n.set(a,d),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let f=0;for(let m=0;m<c.length;m++)f+=c[m];let _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(r,"morphTargetBaseInfluence",_),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",d.size)}return{update:s}}function WS(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var XS={[Fd]:"LINEAR_TONE_MAPPING",[Ud]:"REINHARD_TONE_MAPPING",[Od]:"CINEON_TONE_MAPPING",[Gs]:"ACES_FILMIC_TONE_MAPPING",[kd]:"AGX_TONE_MAPPING",[zd]:"NEUTRAL_TONE_MAPPING",[Bd]:"CUSTOM_TONE_MAPPING"};function qS(r,e,t,n,i){let s=new xi(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new xi(e,t,{type:ir,depthBuffer:!1,stencilBuffer:!1}),a=new Bt;a.setAttribute("position",new ht([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new ht([0,2,0,0,2,0],2));let l=new uh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ct(a,l),h=new qo(-1,1,1,-1,0,1),u=null,d=null,f=!1,_,m=null,g=[],p=!1;this.setSize=function(v,M){s.setSize(v,M),o.setSize(v,M);for(let y=0;y<g.length;y++){let T=g[y];T.setSize&&T.setSize(v,M)}},this.setEffects=function(v){g=v,p=g.length>0&&g[0].isRenderPass===!0;let M=s.width,y=s.height;for(let T=0;T<g.length;T++){let E=g[T];E.setSize&&E.setSize(M,y)}},this.begin=function(v,M){if(f||v.toneMapping===Hi&&g.length===0)return!1;if(m=M,M!==null){let y=M.width,T=M.height;(s.width!==y||s.height!==T)&&this.setSize(y,T)}return p===!1&&v.setRenderTarget(s),_=v.toneMapping,v.toneMapping=Hi,!0},this.hasRenderPass=function(){return p},this.end=function(v,M){v.toneMapping=_,f=!0;let y=s,T=o;for(let E=0;E<g.length;E++){let A=g[E];if(A.enabled!==!1&&(A.render(v,T,y,M),A.needsSwap!==!1)){let C=y;y=T,T=C}}if(u!==v.outputColorSpace||d!==v.toneMapping){u=v.outputColorSpace,d=v.toneMapping,l.defines={},dt.getTransfer(u)===yt&&(l.defines.SRGB_TRANSFER="");let E=XS[d];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,v.setRenderTarget(m),v.render(c,h),m=null,f=!1},this.isCompositing=function(){return f},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var Zg=new Yn,ap=new jr(1,1),Jg=new Ka,$g=new jc,Kg=new il,Pg=[],Ig=[],Dg=new Float32Array(16),Lg=new Float32Array(9),Ng=new Float32Array(4);function jo(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=Pg[i];if(s===void 0&&(s=new Float32Array(i),Pg[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function hn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function un(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Au(r,e){let t=Ig[e];t===void 0&&(t=new Int32Array(e),Ig[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function YS(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2fv(this.addr,e),un(t,e)}}function JS(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(hn(t,e))return;r.uniform3fv(this.addr,e),un(t,e)}}function $S(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4fv(this.addr,e),un(t,e)}}function KS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Ng.set(n),r.uniformMatrix2fv(this.addr,!1,Ng),un(t,n)}}function QS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Lg.set(n),r.uniformMatrix3fv(this.addr,!1,Lg),un(t,n)}}function jS(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(hn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),un(t,e)}else{if(hn(t,n))return;Dg.set(n),r.uniformMatrix4fv(this.addr,!1,Dg),un(t,n)}}function eb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function tb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2iv(this.addr,e),un(t,e)}}function nb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3iv(this.addr,e),un(t,e)}}function ib(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4iv(this.addr,e),un(t,e)}}function rb(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function sb(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(hn(t,e))return;r.uniform2uiv(this.addr,e),un(t,e)}}function ob(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(hn(t,e))return;r.uniform3uiv(this.addr,e),un(t,e)}}function ab(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(hn(t,e))return;r.uniform4uiv(this.addr,e),un(t,e)}}function lb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(ap.compareFunction=t.isReversedDepthBuffer()?bu:Su,s=ap):s=Zg,t.setTexture2D(e||s,i)}function cb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||$g,i)}function hb(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Kg,i)}function ub(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jg,i)}function fb(r){switch(r){case 5126:return YS;case 35664:return ZS;case 35665:return JS;case 35666:return $S;case 35674:return KS;case 35675:return QS;case 35676:return jS;case 5124:case 35670:return eb;case 35667:case 35671:return tb;case 35668:case 35672:return nb;case 35669:case 35673:return ib;case 5125:return rb;case 36294:return sb;case 36295:return ob;case 36296:return ab;case 35678:case 36198:case 36298:case 36306:case 35682:return lb;case 35679:case 36299:case 36307:return cb;case 35680:case 36300:case 36308:case 36293:return hb;case 36289:case 36303:case 36311:case 36292:return ub}}function db(r,e){r.uniform1fv(this.addr,e)}function pb(r,e){let t=jo(e,this.size,2);r.uniform2fv(this.addr,t)}function mb(r,e){let t=jo(e,this.size,3);r.uniform3fv(this.addr,t)}function gb(r,e){let t=jo(e,this.size,4);r.uniform4fv(this.addr,t)}function _b(r,e){let t=jo(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function xb(r,e){let t=jo(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yb(r,e){let t=jo(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function vb(r,e){r.uniform1iv(this.addr,e)}function Mb(r,e){r.uniform2iv(this.addr,e)}function Sb(r,e){r.uniform3iv(this.addr,e)}function bb(r,e){r.uniform4iv(this.addr,e)}function Tb(r,e){r.uniform1uiv(this.addr,e)}function Eb(r,e){r.uniform2uiv(this.addr,e)}function wb(r,e){r.uniform3uiv(this.addr,e)}function Ab(r,e){r.uniform4uiv(this.addr,e)}function Cb(r,e,t){let n=this.cache,i=e.length,s=Au(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=ap:o=Zg;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function Rb(r,e,t){let n=this.cache,i=e.length,s=Au(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||$g,s[o])}function Pb(r,e,t){let n=this.cache,i=e.length,s=Au(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Kg,s[o])}function Ib(r,e,t){let n=this.cache,i=e.length,s=Au(t,i);hn(n,s)||(r.uniform1iv(this.addr,s),un(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jg,s[o])}function Db(r){switch(r){case 5126:return db;case 35664:return pb;case 35665:return mb;case 35666:return gb;case 35674:return _b;case 35675:return xb;case 35676:return yb;case 5124:case 35670:return vb;case 35667:case 35671:return Mb;case 35668:case 35672:return Sb;case 35669:case 35673:return bb;case 5125:return Tb;case 36294:return Eb;case 36295:return wb;case 36296:return Ab;case 35678:case 36198:case 36298:case 36306:case 35682:return Cb;case 35679:case 36299:case 36307:return Rb;case 35680:case 36300:case 36308:case 36293:return Pb;case 36289:case 36303:case 36311:case 36292:return Ib}}var lp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=fb(t.type)}},cp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Db(t.type)}},hp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},sp=/(\w+)(\])?(\[|\.)?/g;function Fg(r,e){r.seq.push(e),r.map[e.id]=e}function Lb(r,e,t){let n=r.name,i=n.length;for(sp.lastIndex=0;;){let s=sp.exec(n),o=sp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Fg(t,c===void 0?new lp(a,r,e):new cp(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new hp(a),Fg(t,u)),t=u}}}var Ko=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);Lb(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function Ug(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var Nb=37297,Fb=0;function Ub(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var Og=new Qe;function Ob(r){dt._getMatrix(Og,dt.workingColorSpace,r);let e=`mat3( ${Og.elements.map(t=>t.toFixed(4))} )`;switch(dt.getTransfer(r)){case Ya:return[e,"LinearTransferOETF"];case yt:return[e,"sRGBTransferOETF"];default:return Xe("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Bg(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+Ub(r.getShaderSource(e),a)}else return s}function Bb(r,e){let t=Ob(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var kb={[Fd]:"Linear",[Ud]:"Reinhard",[Od]:"Cineon",[Gs]:"ACESFilmic",[kd]:"AgX",[zd]:"Neutral",[Bd]:"Custom"};function zb(r,e){let t=kb[e];return t===void 0?(Xe("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Eu=new L;function Vb(){dt.getLuminanceCoefficients(Eu);let r=Eu.x.toFixed(4),e=Eu.y.toFixed(4),t=Eu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Cl).join(`
`)}function Gb(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Wb(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Cl(r){return r!==""}function kg(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function zg(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var Xb=/^[ \t]*#include +<([\w\d./]+)>/gm;function up(r){return r.replace(Xb,Yb)}var qb=new Map;function Yb(r,e){let t=nt[e];if(t===void 0){let n=qb.get(e);if(n!==void 0)t=nt[n],Xe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return up(t)}var Zb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Vg(r){return r.replace(Zb,Jb)}function Jb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function Hg(r){let e=`precision ${r.precision} float;
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
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var $b={[yl]:"SHADOWMAP_TYPE_PCF",[Yo]:"SHADOWMAP_TYPE_VSM"};function Kb(r){return $b[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var Qb={[is]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[vl]:"ENVMAP_TYPE_CUBE_UV"};function jb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":Qb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var e1={[Ws]:"ENVMAP_MODE_REFRACTION"};function t1(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":e1[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var n1={[Dh]:"ENVMAP_BLENDING_MULTIPLY",[lg]:"ENVMAP_BLENDING_MIX",[cg]:"ENVMAP_BLENDING_ADD"};function i1(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":n1[r.combine]||"ENVMAP_BLENDING_NONE"}function r1(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function s1(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=Kb(t),c=jb(t),h=t1(t),u=i1(t),d=r1(t),f=Hb(t),_=Gb(s),m=i.createProgram(),g,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cl).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(Cl).join(`
`),p.length>0&&(p+=`
`)):(g=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Cl).join(`
`),p=[Hg(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?nt.tonemapping_pars_fragment:"",t.toneMapping!==Hi?zb("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",nt.colorspace_pars_fragment,Bb("linearToOutputTexel",t.outputColorSpace),Vb(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Cl).join(`
`)),o=up(o),o=kg(o,t),o=zg(o,t),a=up(a),a=kg(a,t),a=zg(a,t),o=Vg(o),a=Vg(a),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",t.glslVersion===Zd?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let M=v+g+o,y=v+p+a,T=Ug(i,i.VERTEX_SHADER,M),E=Ug(i,i.FRAGMENT_SHADER,y);i.attachShader(m,T),i.attachShader(m,E),t.index0AttributeName!==void 0?i.bindAttribLocation(m,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(m,0,"position"),i.linkProgram(m);function A(P){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(m)||"",B=i.getShaderInfoLog(T)||"",V=i.getShaderInfoLog(E)||"",W=N.trim(),z=B.trim(),k=V.trim(),Z=!0,ie=!0;if(i.getProgramParameter(m,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,m,T,E);else{let I=Bg(i,T,"vertex"),re=Bg(i,E,"fragment");He("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(m,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+W+`
`+I+`
`+re)}else W!==""?Xe("WebGLProgram: Program Info Log:",W):(z===""||k==="")&&(ie=!1);ie&&(P.diagnostics={runnable:Z,programLog:W,vertexShader:{log:z,prefix:g},fragmentShader:{log:k,prefix:p}})}i.deleteShader(T),i.deleteShader(E),C=new Ko(i,m),x=Wb(i,m)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let x;this.getAttributes=function(){return x===void 0&&A(this),x};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(m,Nb)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(m),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Fb++,this.cacheKey=e,this.usedTimes=1,this.program=m,this.vertexShader=T,this.fragmentShader=E,this}var o1=0,fp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new dp(e),t.set(e,n)),n}},dp=class{constructor(e){this.id=o1++,this.code=e,this.usedTimes=0}};function a1(r,e,t,n,i,s,o){let a=new ja,l=new fp,c=new Set,h=[],u=new Map,d=i.logarithmicDepthBuffer,f=i.precision,_={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function g(x,b,P,N,B){let V=N.fog,W=B.geometry,z=x.isMeshStandardMaterial?N.environment:null,k=(x.isMeshStandardMaterial?t:e).get(x.envMap||z),Z=k&&k.mapping===vl?k.image.height:null,ie=_[x.type];x.precision!==null&&(f=i.getMaxPrecision(x.precision),f!==x.precision&&Xe("WebGLProgram.getParameters:",x.precision,"not supported, using",f,"instead."));let I=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,re=I!==void 0?I.length:0,Ne=0;W.morphAttributes.position!==void 0&&(Ne=1),W.morphAttributes.normal!==void 0&&(Ne=2),W.morphAttributes.color!==void 0&&(Ne=3);let ke,Ye,$e,J;if(ie){let ge=sr[ie];ke=ge.vertexShader,Ye=ge.fragmentShader}else ke=x.vertexShader,Ye=x.fragmentShader,l.update(x),$e=l.getVertexShaderID(x),J=l.getFragmentShaderID(x);let Q=r.getRenderTarget(),fe=r.state.buffers.depth.getReversed(),Ie=B.isInstancedMesh===!0,ve=B.isBatchedMesh===!0,Ge=!!x.map,ft=!!x.matcap,Ee=!!k,ze=!!x.aoMap,Ke=!!x.lightMap,Ue=!!x.bumpMap,G=!!x.normalMap,F=!!x.displacementMap,_t=!!x.emissiveMap,it=!!x.metalnessMap,Ve=!!x.roughnessMap,Me=x.anisotropy>0,R=x.clearcoat>0,S=x.dispersion>0,U=x.iridescence>0,$=x.sheen>0,K=x.transmission>0,Y=Me&&!!x.anisotropyMap,ye=R&&!!x.clearcoatMap,se=R&&!!x.clearcoatNormalMap,we=R&&!!x.clearcoatRoughnessMap,Te=U&&!!x.iridescenceMap,ne=U&&!!x.iridescenceThicknessMap,oe=$&&!!x.sheenColorMap,Se=$&&!!x.sheenRoughnessMap,Ae=!!x.specularMap,ae=!!x.specularColorMap,qe=!!x.specularIntensityMap,D=K&&!!x.transmissionMap,he=K&&!!x.thicknessMap,te=!!x.gradientMap,ue=!!x.alphaMap,ee=x.alphaTest>0,j=!!x.alphaHash,ce=!!x.extensions,Fe=Hi;x.toneMapped&&(Q===null||Q.isXRRenderTarget===!0)&&(Fe=r.toneMapping);let pt={shaderID:ie,shaderType:x.type,shaderName:x.name,vertexShader:ke,fragmentShader:Ye,defines:x.defines,customVertexShaderID:$e,customFragmentShaderID:J,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:f,batching:ve,batchingColor:ve&&B._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&B.instanceColor!==null,instancingMorph:Ie&&B.morphTexture!==null,outputColorSpace:Q===null?r.outputColorSpace:Q.isXRRenderTarget===!0?Q.texture.colorSpace:Os,alphaToCoverage:!!x.alphaToCoverage,map:Ge,matcap:ft,envMap:Ee,envMapMode:Ee&&k.mapping,envMapCubeUVHeight:Z,aoMap:ze,lightMap:Ke,bumpMap:Ue,normalMap:G,displacementMap:F,emissiveMap:_t,normalMapObjectSpace:G&&x.normalMapType===fg,normalMapTangentSpace:G&&x.normalMapType===Mu,metalnessMap:it,roughnessMap:Ve,anisotropy:Me,anisotropyMap:Y,clearcoat:R,clearcoatMap:ye,clearcoatNormalMap:se,clearcoatRoughnessMap:we,dispersion:S,iridescence:U,iridescenceMap:Te,iridescenceThicknessMap:ne,sheen:$,sheenColorMap:oe,sheenRoughnessMap:Se,specularMap:Ae,specularColorMap:ae,specularIntensityMap:qe,transmission:K,transmissionMap:D,thicknessMap:he,gradientMap:te,opaque:x.transparent===!1&&x.blending===Fs&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:ee,alphaHash:j,combine:x.combine,mapUv:Ge&&m(x.map.channel),aoMapUv:ze&&m(x.aoMap.channel),lightMapUv:Ke&&m(x.lightMap.channel),bumpMapUv:Ue&&m(x.bumpMap.channel),normalMapUv:G&&m(x.normalMap.channel),displacementMapUv:F&&m(x.displacementMap.channel),emissiveMapUv:_t&&m(x.emissiveMap.channel),metalnessMapUv:it&&m(x.metalnessMap.channel),roughnessMapUv:Ve&&m(x.roughnessMap.channel),anisotropyMapUv:Y&&m(x.anisotropyMap.channel),clearcoatMapUv:ye&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Te&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ne&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Se&&m(x.sheenRoughnessMap.channel),specularMapUv:Ae&&m(x.specularMap.channel),specularColorMapUv:ae&&m(x.specularColorMap.channel),specularIntensityMapUv:qe&&m(x.specularIntensityMap.channel),transmissionMapUv:D&&m(x.transmissionMap.channel),thicknessMapUv:he&&m(x.thicknessMap.channel),alphaMapUv:ue&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(G||Me),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!W.attributes.uv&&(Ge||ue),fog:!!V,useFog:x.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:fe,skinning:B.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:re,morphTextureStride:Ne,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:Fe,decodeVideoTexture:Ge&&x.map.isVideoTexture===!0&&dt.getTransfer(x.map.colorSpace)===yt,decodeVideoTextureEmissive:_t&&x.emissiveMap.isVideoTexture===!0&&dt.getTransfer(x.emissiveMap.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Mi,flipSided:x.side===En,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ce&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ce&&x.extensions.multiDraw===!0||ve)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return pt.vertexUv1s=c.has(1),pt.vertexUv2s=c.has(2),pt.vertexUv3s=c.has(3),c.clear(),pt}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let P in x.defines)b.push(P),b.push(x.defines[P]);return x.isRawShaderMaterial===!1&&(v(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function v(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function y(x){let b=_[x.type],P;if(b){let N=sr[b];P=Sg.clone(N.uniforms)}else P=x.uniforms;return P}function T(x,b){let P=u.get(b);return P!==void 0?++P.usedTimes:(P=new s1(r,b,x,s),h.push(P),u.set(b,P)),P}function E(x){if(--x.usedTimes===0){let b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),u.delete(x.cacheKey),x.destroy()}}function A(x){l.remove(x)}function C(){l.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:y,acquireProgram:T,releaseProgram:E,releaseShaderCache:A,programs:h,dispose:C}}function l1(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function c1(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function Gg(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Wg(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,_,m,g){let p=r[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:m,group:g},r[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=m,p.group=g),e++,p}function a(u,d,f,_,m,g){let p=o(u,d,f,_,m,g);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,_,m,g){let p=o(u,d,f,_,m,g);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||c1),n.length>1&&n.sort(d||Gg),i.length>1&&i.sort(d||Gg)}function h(){for(let u=e,d=r.length;u<d;u++){let f=r[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function h1(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new Wg,r.set(n,[o])):i>=s.length?(o=new Wg,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function u1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new tt};break;case"SpotLight":t={position:new L,direction:new L,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":t={color:new tt,position:new L,halfWidth:new L,halfHeight:new L};break}return r[e.id]=t,t}}}function f1(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Re,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var d1=0;function p1(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function m1(r){let e=new u1,t=f1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);let i=new L,s=new At,o=new At;function a(c){let h=0,u=0,d=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let f=0,_=0,m=0,g=0,p=0,v=0,M=0,y=0,T=0,E=0,A=0;c.sort(p1);for(let x=0,b=c.length;x<b;x++){let P=c[x],N=P.color,B=P.intensity,V=P.distance,W=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Xs?W=P.shadow.map.texture:W=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*B,u+=N.g*B,d+=N.b*B;else if(P.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(P.sh.coefficients[z],B);A++}else if(P.isDirectionalLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let k=P.shadow,Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,n.directionalShadow[f]=Z,n.directionalShadowMap[f]=W,n.directionalShadowMatrix[f]=P.shadow.matrix,v++}n.directional[f]=z,f++}else if(P.isSpotLight){let z=e.get(P);z.position.setFromMatrixPosition(P.matrixWorld),z.color.copy(N).multiplyScalar(B),z.distance=V,z.coneCos=Math.cos(P.angle),z.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),z.decay=P.decay,n.spot[m]=z;let k=P.shadow;if(P.map&&(n.spotLightMap[T]=P.map,T++,k.updateMatrices(P),P.castShadow&&E++),n.spotLightMatrix[m]=k.matrix,P.castShadow){let Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,n.spotShadow[m]=Z,n.spotShadowMap[m]=W,y++}m++}else if(P.isRectAreaLight){let z=e.get(P);z.color.copy(N).multiplyScalar(B),z.halfWidth.set(P.width*.5,0,0),z.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=z,g++}else if(P.isPointLight){let z=e.get(P);if(z.color.copy(P.color).multiplyScalar(P.intensity),z.distance=P.distance,z.decay=P.decay,P.castShadow){let k=P.shadow,Z=t.get(P);Z.shadowIntensity=k.intensity,Z.shadowBias=k.bias,Z.shadowNormalBias=k.normalBias,Z.shadowRadius=k.radius,Z.shadowMapSize=k.mapSize,Z.shadowCameraNear=k.camera.near,Z.shadowCameraFar=k.camera.far,n.pointShadow[_]=Z,n.pointShadowMap[_]=W,n.pointShadowMatrix[_]=P.shadow.matrix,M++}n.point[_]=z,_++}else if(P.isHemisphereLight){let z=e.get(P);z.skyColor.copy(P.color).multiplyScalar(B),z.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[p]=z,p++}}g>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=me.LTC_FLOAT_1,n.rectAreaLTC2=me.LTC_FLOAT_2):(n.rectAreaLTC1=me.LTC_HALF_1,n.rectAreaLTC2=me.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;let C=n.hash;(C.directionalLength!==f||C.pointLength!==_||C.spotLength!==m||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==v||C.numPointShadows!==M||C.numSpotShadows!==y||C.numSpotMaps!==T||C.numLightProbes!==A)&&(n.directional.length=f,n.spot.length=m,n.rectArea.length=g,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=v,n.directionalShadowMap.length=v,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=v,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=y+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=A,C.directionalLength=f,C.pointLength=_,C.spotLength=m,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=v,C.numPointShadows=M,C.numSpotShadows=y,C.numSpotMaps=T,C.numLightProbes=A,n.version=d1++)}function l(c,h){let u=0,d=0,f=0,_=0,m=0,g=h.matrixWorldInverse;for(let p=0,v=c.length;p<v;p++){let M=c[p];if(M.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),u++}else if(M.isSpotLight){let y=n.spot[f];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),y.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(g),f++}else if(M.isRectAreaLight){let y=n.rectArea[_];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),o.identity(),s.copy(M.matrixWorld),s.premultiply(g),o.extractRotation(s),y.halfWidth.set(M.width*.5,0,0),y.halfHeight.set(0,M.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),_++}else if(M.isPointLight){let y=n.point[d];y.position.setFromMatrixPosition(M.matrixWorld),y.position.applyMatrix4(g),d++}else if(M.isHemisphereLight){let y=n.hemi[m];y.direction.setFromMatrixPosition(M.matrixWorld),y.direction.transformDirection(g),m++}}}return{setup:a,setupView:l,state:n}}function Xg(r){let e=new m1(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function g1(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new Xg(r),e.set(i,[a])):s>=o.length?(a=new Xg(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var _1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,x1=`uniform sampler2D shadow_pass;
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
}`,y1=[new L(1,0,0),new L(-1,0,0),new L(0,1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1)],v1=[new L(0,-1,0),new L(0,-1,0),new L(0,0,1),new L(0,0,-1),new L(0,-1,0),new L(0,-1,0)],qg=new At,Al=new L,op=new L;function M1(r,e,t){let n=new Wo,i=new Re,s=new Re,o=new Gt,a=new fh,l=new dh,c={},h=t.maxTextureSize,u={[Tr]:En,[En]:Tr,[Mi]:Mi},d=new yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Re},radius:{value:4}},vertexShader:_1,fragmentShader:x1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let _=new Bt;_.setAttribute("position",new ln(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let m=new Ct(_,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=yl;let p=this.type;this.render=function(E,A,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||E.length===0)return;E.type===G0&&(Xe("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=yl);let x=r.getRenderTarget(),b=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(nr),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(W=>W.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,W=E.length;V<W;V++){let z=E[V],k=z.shadow;if(k===void 0){Xe("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let Z=k.getFrameExtents();if(i.multiply(Z),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/Z.x),i.x=s.x*Z.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/Z.y),i.y=s.y*Z.y,k.mapSize.y=s.y)),k.map===null||B===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===Yo){if(z.isPointLight){Xe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new xi(i.x,i.y,{format:Xs,type:ir,minFilter:bn,magFilter:bn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new jr(i.x,i.y,Di),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=ji,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn}else{z.isPointLight?(k.map=new rl(i.x),k.map.depthTexture=new nh(i.x,Gi)):(k.map=new xi(i.x,i.y),k.map.depthTexture=new jr(i.x,i.y,Gi)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=ji;let I=r.state.buffers.depth.getReversed();this.type===yl?(k.map.depthTexture.compareFunction=I?bu:Su,k.map.depthTexture.minFilter=bn,k.map.depthTexture.magFilter=bn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=xn,k.map.depthTexture.magFilter=xn)}k.camera.updateProjectionMatrix()}let ie=k.map.isWebGLCubeRenderTarget?6:1;for(let I=0;I<ie;I++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,I),r.clear();else{I===0&&(r.setRenderTarget(k.map),r.clear());let re=k.getViewport(I);o.set(s.x*re.x,s.y*re.y,s.x*re.z,s.y*re.w),N.viewport(o)}if(z.isPointLight){let re=k.camera,Ne=k.matrix,ke=z.distance||re.far;ke!==re.far&&(re.far=ke,re.updateProjectionMatrix()),Al.setFromMatrixPosition(z.matrixWorld),re.position.copy(Al),op.copy(re.position),op.add(y1[I]),re.up.copy(v1[I]),re.lookAt(op),re.updateMatrixWorld(),Ne.makeTranslation(-Al.x,-Al.y,-Al.z),qg.multiplyMatrices(re.projectionMatrix,re.matrixWorldInverse),k._frustum.setFromProjectionMatrix(qg,re.coordinateSystem,re.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),y(A,C,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===Yo&&v(k,C),k.needsUpdate=!1}p=this.type,g.needsUpdate=!1,r.setRenderTarget(x,b,P)};function v(E,A){let C=e.update(m);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new xi(i.x,i.y,{format:Xs,type:ir})),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(A,null,C,d,m,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(A,null,C,f,m,null)}function M(E,A,C,x){let b=null,P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?l:a,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=b.uuid,B=A.uuid,V=c[N];V===void 0&&(V={},c[N]=V);let W=V[B];W===void 0&&(W=b.clone(),V[B]=W,A.addEventListener("dispose",T)),b=W}if(b.visible=A.visible,b.wireframe=A.wireframe,x===Yo?b.side=A.shadowSide!==null?A.shadowSide:A.side:b.side=A.shadowSide!==null?A.shadowSide:u[A.side],b.alphaMap=A.alphaMap,b.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,b.map=A.map,b.clipShadows=A.clipShadows,b.clippingPlanes=A.clippingPlanes,b.clipIntersection=A.clipIntersection,b.displacementMap=A.displacementMap,b.displacementScale=A.displacementScale,b.displacementBias=A.displacementBias,b.wireframeLinewidth=A.wireframeLinewidth,b.linewidth=A.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let N=r.properties.get(b);N.light=C}return b}function y(E,A,C,x,b){if(E.visible===!1)return;if(E.layers.test(A.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Yo)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);let B=e.update(E),V=E.material;if(Array.isArray(V)){let W=B.groups;for(let z=0,k=W.length;z<k;z++){let Z=W[z],ie=V[Z.materialIndex];if(ie&&ie.visible){let I=M(E,ie,x,b);E.onBeforeShadow(r,E,A,C,B,I,Z),r.renderBufferDirect(C,null,B,I,E,Z),E.onAfterShadow(r,E,A,C,B,I,Z)}}}else if(V.visible){let W=M(E,V,x,b);E.onBeforeShadow(r,E,A,C,B,W,null),r.renderBufferDirect(C,null,B,W,E,null),E.onAfterShadow(r,E,A,C,B,W,null)}}let N=E.children;for(let B=0,V=N.length;B<V;B++)y(N[B],A,C,x,b)}function T(E){E.target.removeEventListener("dispose",T);for(let C in c){let x=c[C],b=E.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}var S1={[Eh]:wh,[Ah]:Ph,[Ch]:Ih,[Us]:Rh,[wh]:Eh,[Ph]:Ah,[Ih]:Ch,[Rh]:Us};function b1(r,e){function t(){let D=!1,he=new Gt,te=null,ue=new Gt(0,0,0,0);return{setMask:function(ee){te!==ee&&!D&&(r.colorMask(ee,ee,ee,ee),te=ee)},setLocked:function(ee){D=ee},setClear:function(ee,j,ce,Fe,pt){pt===!0&&(ee*=Fe,j*=Fe,ce*=Fe),he.set(ee,j,ce,Fe),ue.equals(he)===!1&&(r.clearColor(ee,j,ce,Fe),ue.copy(he))},reset:function(){D=!1,te=null,ue.set(-1,0,0,0)}}}function n(){let D=!1,he=!1,te=null,ue=null,ee=null;return{setReversed:function(j){if(he!==j){let ce=e.get("EXT_clip_control");j?ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.ZERO_TO_ONE_EXT):ce.clipControlEXT(ce.LOWER_LEFT_EXT,ce.NEGATIVE_ONE_TO_ONE_EXT),he=j;let Fe=ee;ee=null,this.setClear(Fe)}},getReversed:function(){return he},setTest:function(j){j?Q(r.DEPTH_TEST):fe(r.DEPTH_TEST)},setMask:function(j){te!==j&&!D&&(r.depthMask(j),te=j)},setFunc:function(j){if(he&&(j=S1[j]),ue!==j){switch(j){case Eh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case Us:r.depthFunc(r.LEQUAL);break;case Ch:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ue=j}},setLocked:function(j){D=j},setClear:function(j){ee!==j&&(he&&(j=1-j),r.clearDepth(j),ee=j)},reset:function(){D=!1,te=null,ue=null,ee=null,he=!1}}}function i(){let D=!1,he=null,te=null,ue=null,ee=null,j=null,ce=null,Fe=null,pt=null;return{setTest:function(ge){D||(ge?Q(r.STENCIL_TEST):fe(r.STENCIL_TEST))},setMask:function(ge){he!==ge&&!D&&(r.stencilMask(ge),he=ge)},setFunc:function(ge,Pe,je){(te!==ge||ue!==Pe||ee!==je)&&(r.stencilFunc(ge,Pe,je),te=ge,ue=Pe,ee=je)},setOp:function(ge,Pe,je){(j!==ge||ce!==Pe||Fe!==je)&&(r.stencilOp(ge,Pe,je),j=ge,ce=Pe,Fe=je)},setLocked:function(ge){D=ge},setClear:function(ge){pt!==ge&&(r.clearStencil(ge),pt=ge)},reset:function(){D=!1,he=null,te=null,ue=null,ee=null,j=null,ce=null,Fe=null,pt=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},d=new WeakMap,f=[],_=null,m=!1,g=null,p=null,v=null,M=null,y=null,T=null,E=null,A=new tt(0,0,0),C=0,x=!1,b=null,P=null,N=null,B=null,V=null,W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,k=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(Z)[1]),z=k>=1):Z.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),z=k>=2);let ie=null,I={},re=r.getParameter(r.SCISSOR_BOX),Ne=r.getParameter(r.VIEWPORT),ke=new Gt().fromArray(re),Ye=new Gt().fromArray(Ne);function $e(D,he,te,ue){let ee=new Uint8Array(4),j=r.createTexture();r.bindTexture(D,j),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ce=0;ce<te;ce++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(he,0,r.RGBA,1,1,ue,0,r.RGBA,r.UNSIGNED_BYTE,ee):r.texImage2D(he+ce,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ee);return j}let J={};J[r.TEXTURE_2D]=$e(r.TEXTURE_2D,r.TEXTURE_2D,1),J[r.TEXTURE_CUBE_MAP]=$e(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[r.TEXTURE_2D_ARRAY]=$e(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),J[r.TEXTURE_3D]=$e(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),Q(r.DEPTH_TEST),o.setFunc(Us),Ue(!1),G(Id),Q(r.CULL_FACE),ze(nr);function Q(D){h[D]!==!0&&(r.enable(D),h[D]=!0)}function fe(D){h[D]!==!1&&(r.disable(D),h[D]=!1)}function Ie(D,he){return u[D]!==he?(r.bindFramebuffer(D,he),u[D]=he,D===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=he),D===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=he),!0):!1}function ve(D,he){let te=f,ue=!1;if(D){te=d.get(he),te===void 0&&(te=[],d.set(he,te));let ee=D.textures;if(te.length!==ee.length||te[0]!==r.COLOR_ATTACHMENT0){for(let j=0,ce=ee.length;j<ce;j++)te[j]=r.COLOR_ATTACHMENT0+j;te.length=ee.length,ue=!0}}else te[0]!==r.BACK&&(te[0]=r.BACK,ue=!0);ue&&r.drawBuffers(te)}function Ge(D){return _!==D?(r.useProgram(D),_=D,!0):!1}let ft={[$r]:r.FUNC_ADD,[X0]:r.FUNC_SUBTRACT,[q0]:r.FUNC_REVERSE_SUBTRACT};ft[Y0]=r.MIN,ft[Z0]=r.MAX;let Ee={[J0]:r.ZERO,[$0]:r.ONE,[K0]:r.SRC_COLOR,[Wc]:r.SRC_ALPHA,[ig]:r.SRC_ALPHA_SATURATE,[tg]:r.DST_COLOR,[j0]:r.DST_ALPHA,[Q0]:r.ONE_MINUS_SRC_COLOR,[Xc]:r.ONE_MINUS_SRC_ALPHA,[ng]:r.ONE_MINUS_DST_COLOR,[eg]:r.ONE_MINUS_DST_ALPHA,[rg]:r.CONSTANT_COLOR,[sg]:r.ONE_MINUS_CONSTANT_COLOR,[og]:r.CONSTANT_ALPHA,[ag]:r.ONE_MINUS_CONSTANT_ALPHA};function ze(D,he,te,ue,ee,j,ce,Fe,pt,ge){if(D===nr){m===!0&&(fe(r.BLEND),m=!1);return}if(m===!1&&(Q(r.BLEND),m=!0),D!==W0){if(D!==g||ge!==x){if((p!==$r||y!==$r)&&(r.blendEquation(r.FUNC_ADD),p=$r,y=$r),ge)switch(D){case Fs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dd:r.blendFunc(r.ONE,r.ONE);break;case Ld:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Nd:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:He("WebGLState: Invalid blending: ",D);break}else switch(D){case Fs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Dd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Ld:He("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Nd:He("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:He("WebGLState: Invalid blending: ",D);break}v=null,M=null,T=null,E=null,A.set(0,0,0),C=0,g=D,x=ge}return}ee=ee||he,j=j||te,ce=ce||ue,(he!==p||ee!==y)&&(r.blendEquationSeparate(ft[he],ft[ee]),p=he,y=ee),(te!==v||ue!==M||j!==T||ce!==E)&&(r.blendFuncSeparate(Ee[te],Ee[ue],Ee[j],Ee[ce]),v=te,M=ue,T=j,E=ce),(Fe.equals(A)===!1||pt!==C)&&(r.blendColor(Fe.r,Fe.g,Fe.b,pt),A.copy(Fe),C=pt),g=D,x=!1}function Ke(D,he){D.side===Mi?fe(r.CULL_FACE):Q(r.CULL_FACE);let te=D.side===En;he&&(te=!te),Ue(te),D.blending===Fs&&D.transparent===!1?ze(nr):ze(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let ue=D.stencilWrite;a.setTest(ue),ue&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),_t(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?Q(r.SAMPLE_ALPHA_TO_COVERAGE):fe(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ue(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function G(D){D!==V0?(Q(r.CULL_FACE),D!==P&&(D===Id?r.cullFace(r.BACK):D===H0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):fe(r.CULL_FACE),P=D}function F(D){D!==N&&(z&&r.lineWidth(D),N=D)}function _t(D,he,te){D?(Q(r.POLYGON_OFFSET_FILL),(B!==he||V!==te)&&(r.polygonOffset(he,te),B=he,V=te)):fe(r.POLYGON_OFFSET_FILL)}function it(D){D?Q(r.SCISSOR_TEST):fe(r.SCISSOR_TEST)}function Ve(D){D===void 0&&(D=r.TEXTURE0+W-1),ie!==D&&(r.activeTexture(D),ie=D)}function Me(D,he,te){te===void 0&&(ie===null?te=r.TEXTURE0+W-1:te=ie);let ue=I[te];ue===void 0&&(ue={type:void 0,texture:void 0},I[te]=ue),(ue.type!==D||ue.texture!==he)&&(ie!==te&&(r.activeTexture(te),ie=te),r.bindTexture(D,he||J[D]),ue.type=D,ue.texture=he)}function R(){let D=I[ie];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function U(){try{r.compressedTexImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function $(){try{r.texSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function K(){try{r.texSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function Y(){try{r.compressedTexSubImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ye(){try{r.compressedTexSubImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function se(){try{r.texStorage2D(...arguments)}catch(D){He("WebGLState:",D)}}function we(){try{r.texStorage3D(...arguments)}catch(D){He("WebGLState:",D)}}function Te(){try{r.texImage2D(...arguments)}catch(D){He("WebGLState:",D)}}function ne(){try{r.texImage3D(...arguments)}catch(D){He("WebGLState:",D)}}function oe(D){ke.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),ke.copy(D))}function Se(D){Ye.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function Ae(D,he){let te=c.get(he);te===void 0&&(te=new WeakMap,c.set(he,te));let ue=te.get(D);ue===void 0&&(ue=r.getUniformBlockIndex(he,D.name),te.set(D,ue))}function ae(D,he){let ue=c.get(he).get(D);l.get(he)!==ue&&(r.uniformBlockBinding(he,ue,D.__bindingPointIndex),l.set(he,ue))}function qe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},ie=null,I={},u={},d=new WeakMap,f=[],_=null,m=!1,g=null,p=null,v=null,M=null,y=null,T=null,E=null,A=new tt(0,0,0),C=0,x=!1,b=null,P=null,N=null,B=null,V=null,ke.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:Q,disable:fe,bindFramebuffer:Ie,drawBuffers:ve,useProgram:Ge,setBlending:ze,setMaterial:Ke,setFlipSided:Ue,setCullFace:G,setLineWidth:F,setPolygonOffset:_t,setScissorTest:it,activeTexture:Ve,bindTexture:Me,unbindTexture:R,compressedTexImage2D:S,compressedTexImage3D:U,texImage2D:Te,texImage3D:ne,updateUBOMapping:Ae,uniformBlockBinding:ae,texStorage2D:se,texStorage3D:we,texSubImage2D:$,texSubImage3D:K,compressedTexSubImage2D:Y,compressedTexSubImage3D:ye,scissor:oe,viewport:Se,reset:qe}}function T1(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Re,h=new WeakMap,u,d=new WeakMap,f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,S){return f?new OffscreenCanvas(R,S):Ja("canvas")}function m(R,S,U){let $=1,K=Me(R);if((K.width>U||K.height>U)&&($=U/Math.max(K.width,K.height)),$<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Y=Math.floor($*K.width),ye=Math.floor($*K.height);u===void 0&&(u=_(Y,ye));let se=S?_(Y,ye):u;return se.width=Y,se.height=ye,se.getContext("2d").drawImage(R,0,0,Y,ye),Xe("WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+Y+"x"+ye+")."),se}else return"data"in R&&Xe("WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),R;return R}function g(R){return R.generateMipmaps}function p(R){r.generateMipmap(R)}function v(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function M(R,S,U,$,K=!1){if(R!==null){if(r[R]!==void 0)return r[R];Xe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Y=S;if(S===r.RED&&(U===r.FLOAT&&(Y=r.R32F),U===r.HALF_FLOAT&&(Y=r.R16F),U===r.UNSIGNED_BYTE&&(Y=r.R8)),S===r.RED_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.R8UI),U===r.UNSIGNED_SHORT&&(Y=r.R16UI),U===r.UNSIGNED_INT&&(Y=r.R32UI),U===r.BYTE&&(Y=r.R8I),U===r.SHORT&&(Y=r.R16I),U===r.INT&&(Y=r.R32I)),S===r.RG&&(U===r.FLOAT&&(Y=r.RG32F),U===r.HALF_FLOAT&&(Y=r.RG16F),U===r.UNSIGNED_BYTE&&(Y=r.RG8)),S===r.RG_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RG8UI),U===r.UNSIGNED_SHORT&&(Y=r.RG16UI),U===r.UNSIGNED_INT&&(Y=r.RG32UI),U===r.BYTE&&(Y=r.RG8I),U===r.SHORT&&(Y=r.RG16I),U===r.INT&&(Y=r.RG32I)),S===r.RGB_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGB8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGB16UI),U===r.UNSIGNED_INT&&(Y=r.RGB32UI),U===r.BYTE&&(Y=r.RGB8I),U===r.SHORT&&(Y=r.RGB16I),U===r.INT&&(Y=r.RGB32I)),S===r.RGBA_INTEGER&&(U===r.UNSIGNED_BYTE&&(Y=r.RGBA8UI),U===r.UNSIGNED_SHORT&&(Y=r.RGBA16UI),U===r.UNSIGNED_INT&&(Y=r.RGBA32UI),U===r.BYTE&&(Y=r.RGBA8I),U===r.SHORT&&(Y=r.RGBA16I),U===r.INT&&(Y=r.RGBA32I)),S===r.RGB&&(U===r.UNSIGNED_INT_5_9_9_9_REV&&(Y=r.RGB9_E5),U===r.UNSIGNED_INT_10F_11F_11F_REV&&(Y=r.R11F_G11F_B10F)),S===r.RGBA){let ye=K?Ya:dt.getTransfer($);U===r.FLOAT&&(Y=r.RGBA32F),U===r.HALF_FLOAT&&(Y=r.RGBA16F),U===r.UNSIGNED_BYTE&&(Y=ye===yt?r.SRGB8_ALPHA8:r.RGBA8),U===r.UNSIGNED_SHORT_4_4_4_4&&(Y=r.RGBA4),U===r.UNSIGNED_SHORT_5_5_5_1&&(Y=r.RGB5_A1)}return(Y===r.R16F||Y===r.R32F||Y===r.RG16F||Y===r.RG32F||Y===r.RGBA16F||Y===r.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function y(R,S){let U;return R?S===null||S===Gi||S===Jo?U=r.DEPTH24_STENCIL8:S===Di?U=r.DEPTH32F_STENCIL8:S===Zo&&(U=r.DEPTH24_STENCIL8,Xe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Gi||S===Jo?U=r.DEPTH_COMPONENT24:S===Di?U=r.DEPTH_COMPONENT32F:S===Zo&&(U=r.DEPTH_COMPONENT16),U}function T(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==xn&&R.minFilter!==bn?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function E(R){let S=R.target;S.removeEventListener("dispose",E),C(S),S.isVideoTexture&&h.delete(S)}function A(R){let S=R.target;S.removeEventListener("dispose",A),b(S)}function C(R){let S=n.get(R);if(S.__webglInit===void 0)return;let U=R.source,$=d.get(U);if($){let K=$[S.__cacheKey];K.usedTimes--,K.usedTimes===0&&x(R),Object.keys($).length===0&&d.delete(U)}n.remove(R)}function x(R){let S=n.get(R);r.deleteTexture(S.__webglTexture);let U=R.source,$=d.get(U);delete $[S.__cacheKey],o.memory.textures--}function b(R){let S=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let K=0;K<S.__webglFramebuffer[$].length;K++)r.deleteFramebuffer(S.__webglFramebuffer[$][K]);else r.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)r.deleteFramebuffer(S.__webglFramebuffer[$]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let U=R.textures;for(let $=0,K=U.length;$<K;$++){let Y=n.get(U[$]);Y.__webglTexture&&(r.deleteTexture(Y.__webglTexture),o.memory.textures--),n.remove(U[$])}n.remove(R)}let P=0;function N(){P=0}function B(){let R=P;return R>=i.maxTextures&&Xe("WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+i.maxTextures),P+=1,R}function V(R){let S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){let U=n.get(R);if(R.isVideoTexture&&it(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&U.__version!==R.version){let $=R.image;if($===null)Xe("WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)Xe("WebGLRenderer: Texture marked for update but image is incomplete");else{J(U,R,S);return}}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,U.__webglTexture,r.TEXTURE0+S)}function z(R,S){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){J(U,R,S);return}else R.isExternalTexture&&(U.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,U.__webglTexture,r.TEXTURE0+S)}function k(R,S){let U=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&U.__version!==R.version){J(U,R,S);return}t.bindTexture(r.TEXTURE_3D,U.__webglTexture,r.TEXTURE0+S)}function Z(R,S){let U=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&U.__version!==R.version){Q(U,R,S);return}t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture,r.TEXTURE0+S)}let ie={[qc]:r.REPEAT,[Qi]:r.CLAMP_TO_EDGE,[Yc]:r.MIRRORED_REPEAT},I={[xn]:r.NEAREST,[hg]:r.NEAREST_MIPMAP_NEAREST,[Ml]:r.NEAREST_MIPMAP_LINEAR,[bn]:r.LINEAR,[Fh]:r.LINEAR_MIPMAP_NEAREST,[rs]:r.LINEAR_MIPMAP_LINEAR},re={[dg]:r.NEVER,[xg]:r.ALWAYS,[pg]:r.LESS,[Su]:r.LEQUAL,[mg]:r.EQUAL,[bu]:r.GEQUAL,[gg]:r.GREATER,[_g]:r.NOTEQUAL};function Ne(R,S){if(S.type===Di&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===bn||S.magFilter===Fh||S.magFilter===Ml||S.magFilter===rs||S.minFilter===bn||S.minFilter===Fh||S.minFilter===Ml||S.minFilter===rs)&&Xe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,ie[S.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,ie[S.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,ie[S.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,I[S.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,I[S.minFilter]),S.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,re[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==Ml&&S.minFilter!==rs||S.type===Di&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ke(R,S){let U=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",E));let $=S.source,K=d.get($);K===void 0&&(K={},d.set($,K));let Y=V(S);if(Y!==R.__cacheKey){K[Y]===void 0&&(K[Y]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,U=!0),K[Y].usedTimes++;let ye=K[R.__cacheKey];ye!==void 0&&(K[R.__cacheKey].usedTimes--,ye.usedTimes===0&&x(S)),R.__cacheKey=Y,R.__webglTexture=K[Y].texture}return U}function Ye(R,S,U){return Math.floor(Math.floor(R/U)/S)}function $e(R,S,U,$){let Y=R.updateRanges;if(Y.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,U,$,S.data);else{Y.sort((ne,oe)=>ne.start-oe.start);let ye=0;for(let ne=1;ne<Y.length;ne++){let oe=Y[ye],Se=Y[ne],Ae=oe.start+oe.count,ae=Ye(Se.start,S.width,4),qe=Ye(oe.start,S.width,4);Se.start<=Ae+1&&ae===qe&&Ye(Se.start+Se.count-1,S.width,4)===ae?oe.count=Math.max(oe.count,Se.start+Se.count-oe.start):(++ye,Y[ye]=Se)}Y.length=ye+1;let se=r.getParameter(r.UNPACK_ROW_LENGTH),we=r.getParameter(r.UNPACK_SKIP_PIXELS),Te=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let ne=0,oe=Y.length;ne<oe;ne++){let Se=Y[ne],Ae=Math.floor(Se.start/4),ae=Math.ceil(Se.count/4),qe=Ae%S.width,D=Math.floor(Ae/S.width),he=ae,te=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,qe),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),t.texSubImage2D(r.TEXTURE_2D,0,qe,D,he,te,U,$,S.data)}R.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,we),r.pixelStorei(r.UNPACK_SKIP_ROWS,Te)}}function J(R,S,U){let $=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=r.TEXTURE_3D);let K=ke(R,S),Y=S.source;t.bindTexture($,R.__webglTexture,r.TEXTURE0+U);let ye=n.get(Y);if(Y.version!==ye.__version||K===!0){t.activeTexture(r.TEXTURE0+U);let se=dt.getPrimaries(dt.workingColorSpace),we=S.colorSpace===Pr?null:dt.getPrimaries(S.colorSpace),Te=S.colorSpace===Pr||se===we?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Te);let ne=m(S.image,!1,i.maxTextureSize);ne=Ve(S,ne);let oe=s.convert(S.format,S.colorSpace),Se=s.convert(S.type),Ae=M(S.internalFormat,oe,Se,S.colorSpace,S.isVideoTexture);Ne($,S);let ae,qe=S.mipmaps,D=S.isVideoTexture!==!0,he=ye.__version===void 0||K===!0,te=Y.dataReady,ue=T(S,ne);if(S.isDepthTexture)Ae=y(S.format===ss,S.type),he&&(D?t.texStorage2D(r.TEXTURE_2D,1,Ae,ne.width,ne.height):t.texImage2D(r.TEXTURE_2D,0,Ae,ne.width,ne.height,0,oe,Se,null));else if(S.isDataTexture)if(qe.length>0){D&&he&&t.texStorage2D(r.TEXTURE_2D,ue,Ae,qe[0].width,qe[0].height);for(let ee=0,j=qe.length;ee<j;ee++)ae=qe[ee],D?te&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,Se,ae.data):t.texImage2D(r.TEXTURE_2D,ee,Ae,ae.width,ae.height,0,oe,Se,ae.data);S.generateMipmaps=!1}else D?(he&&t.texStorage2D(r.TEXTURE_2D,ue,Ae,ne.width,ne.height),te&&$e(S,ne,oe,Se)):t.texImage2D(r.TEXTURE_2D,0,Ae,ne.width,ne.height,0,oe,Se,ne.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ae,qe[0].width,qe[0].height,ne.depth);for(let ee=0,j=qe.length;ee<j;ee++)if(ae=qe[ee],S.format!==Li)if(oe!==null)if(D){if(te)if(S.layerUpdates.size>0){let ce=ep(ae.width,ae.height,S.format,S.type);for(let Fe of S.layerUpdates){let pt=ae.data.subarray(Fe*ce/ae.data.BYTES_PER_ELEMENT,(Fe+1)*ce/ae.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,Fe,ae.width,ae.height,1,oe,pt)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,oe,ae.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ee,Ae,ae.width,ae.height,ne.depth,0,ae.data,0,0);else Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?te&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ee,0,0,0,ae.width,ae.height,ne.depth,oe,Se,ae.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ee,Ae,ae.width,ae.height,ne.depth,0,oe,Se,ae.data)}else{D&&he&&t.texStorage2D(r.TEXTURE_2D,ue,Ae,qe[0].width,qe[0].height);for(let ee=0,j=qe.length;ee<j;ee++)ae=qe[ee],S.format!==Li?oe!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,ae.data):t.compressedTexImage2D(r.TEXTURE_2D,ee,Ae,ae.width,ae.height,0,ae.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?te&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,ae.width,ae.height,oe,Se,ae.data):t.texImage2D(r.TEXTURE_2D,ee,Ae,ae.width,ae.height,0,oe,Se,ae.data)}else if(S.isDataArrayTexture)if(D){if(he&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ue,Ae,ne.width,ne.height,ne.depth),te)if(S.layerUpdates.size>0){let ee=ep(ne.width,ne.height,S.format,S.type);for(let j of S.layerUpdates){let ce=ne.data.subarray(j*ee/ne.data.BYTES_PER_ELEMENT,(j+1)*ee/ne.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,j,ne.width,ne.height,1,oe,Se,ce)}S.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ne.width,ne.height,ne.depth,oe,Se,ne.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ae,ne.width,ne.height,ne.depth,0,oe,Se,ne.data);else if(S.isData3DTexture)D?(he&&t.texStorage3D(r.TEXTURE_3D,ue,Ae,ne.width,ne.height,ne.depth),te&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ne.width,ne.height,ne.depth,oe,Se,ne.data)):t.texImage3D(r.TEXTURE_3D,0,Ae,ne.width,ne.height,ne.depth,0,oe,Se,ne.data);else if(S.isFramebufferTexture){if(he)if(D)t.texStorage2D(r.TEXTURE_2D,ue,Ae,ne.width,ne.height);else{let ee=ne.width,j=ne.height;for(let ce=0;ce<ue;ce++)t.texImage2D(r.TEXTURE_2D,ce,Ae,ee,j,0,oe,Se,null),ee>>=1,j>>=1}}else if(qe.length>0){if(D&&he){let ee=Me(qe[0]);t.texStorage2D(r.TEXTURE_2D,ue,Ae,ee.width,ee.height)}for(let ee=0,j=qe.length;ee<j;ee++)ae=qe[ee],D?te&&t.texSubImage2D(r.TEXTURE_2D,ee,0,0,oe,Se,ae):t.texImage2D(r.TEXTURE_2D,ee,Ae,oe,Se,ae);S.generateMipmaps=!1}else if(D){if(he){let ee=Me(ne);t.texStorage2D(r.TEXTURE_2D,ue,Ae,ee.width,ee.height)}te&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,oe,Se,ne)}else t.texImage2D(r.TEXTURE_2D,0,Ae,oe,Se,ne);g(S)&&p($),ye.__version=Y.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Q(R,S,U){if(S.image.length!==6)return;let $=ke(R,S),K=S.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+U);let Y=n.get(K);if(K.version!==Y.__version||$===!0){t.activeTexture(r.TEXTURE0+U);let ye=dt.getPrimaries(dt.workingColorSpace),se=S.colorSpace===Pr?null:dt.getPrimaries(S.colorSpace),we=S.colorSpace===Pr||ye===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);let Te=S.isCompressedTexture||S.image[0].isCompressedTexture,ne=S.image[0]&&S.image[0].isDataTexture,oe=[];for(let j=0;j<6;j++)!Te&&!ne?oe[j]=m(S.image[j],!0,i.maxCubemapSize):oe[j]=ne?S.image[j].image:S.image[j],oe[j]=Ve(S,oe[j]);let Se=oe[0],Ae=s.convert(S.format,S.colorSpace),ae=s.convert(S.type),qe=M(S.internalFormat,Ae,ae,S.colorSpace),D=S.isVideoTexture!==!0,he=Y.__version===void 0||$===!0,te=K.dataReady,ue=T(S,Se);Ne(r.TEXTURE_CUBE_MAP,S);let ee;if(Te){D&&he&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,Se.width,Se.height);for(let j=0;j<6;j++){ee=oe[j].mipmaps;for(let ce=0;ce<ee.length;ce++){let Fe=ee[ce];S.format!==Li?Ae!==null?D?te&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,Fe.width,Fe.height,Ae,Fe.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,qe,Fe.width,Fe.height,0,Fe.data):Xe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,0,0,Fe.width,Fe.height,Ae,ae,Fe.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce,qe,Fe.width,Fe.height,0,Ae,ae,Fe.data)}}}else{if(ee=S.mipmaps,D&&he){ee.length>0&&ue++;let j=Me(oe[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ue,qe,j.width,j.height)}for(let j=0;j<6;j++)if(ne){D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,oe[j].width,oe[j].height,Ae,ae,oe[j].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,oe[j].width,oe[j].height,0,Ae,ae,oe[j].data);for(let ce=0;ce<ee.length;ce++){let pt=ee[ce].image[j].image;D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,pt.width,pt.height,Ae,ae,pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,qe,pt.width,pt.height,0,Ae,ae,pt.data)}}else{D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,0,0,Ae,ae,oe[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,0,qe,Ae,ae,oe[j]);for(let ce=0;ce<ee.length;ce++){let Fe=ee[ce];D?te&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,0,0,Ae,ae,Fe.image[j]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+j,ce+1,qe,Ae,ae,Fe.image[j])}}}g(S)&&p(r.TEXTURE_CUBE_MAP),Y.__version=K.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function fe(R,S,U,$,K,Y){let ye=s.convert(U.format,U.colorSpace),se=s.convert(U.type),we=M(U.internalFormat,ye,se,U.colorSpace),Te=n.get(S),ne=n.get(U);if(ne.__renderTarget=S,!Te.__hasExternalTextures){let oe=Math.max(1,S.width>>Y),Se=Math.max(1,S.height>>Y);K===r.TEXTURE_3D||K===r.TEXTURE_2D_ARRAY?t.texImage3D(K,Y,we,oe,Se,S.depth,0,ye,se,null):t.texImage2D(K,Y,we,oe,Se,0,ye,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,$,K,ne.__webglTexture,0,F(S)):(K===r.TEXTURE_2D||K>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,$,K,ne.__webglTexture,Y),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ie(R,S,U){if(r.bindRenderbuffer(r.RENDERBUFFER,R),S.depthBuffer){let $=S.depthTexture,K=$&&$.isDepthTexture?$.type:null,Y=y(S.stencilBuffer,K),ye=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(S),Y,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(S),Y,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,Y,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ye,r.RENDERBUFFER,R)}else{let $=S.textures;for(let K=0;K<$.length;K++){let Y=$[K],ye=s.convert(Y.format,Y.colorSpace),se=s.convert(Y.type),we=M(Y.internalFormat,ye,se,Y.colorSpace);_t(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,F(S),we,S.width,S.height):U?r.renderbufferStorageMultisample(r.RENDERBUFFER,F(S),we,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,we,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function ve(R,S,U){let $=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let K=n.get(S.depthTexture);if(K.__renderTarget=S,(!K.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),$){if(K.__webglInit===void 0&&(K.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),K.__webglTexture===void 0){K.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,K.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,S.depthTexture);let Te=s.convert(S.depthTexture.format),ne=s.convert(S.depthTexture.type),oe;S.depthTexture.format===ji?oe=r.DEPTH_COMPONENT24:S.depthTexture.format===ss&&(oe=r.DEPTH24_STENCIL8);for(let Se=0;Se<6;Se++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,oe,S.width,S.height,0,Te,ne,null)}}else W(S.depthTexture,0);let Y=K.__webglTexture,ye=F(S),se=$?r.TEXTURE_CUBE_MAP_POSITIVE_X+U:r.TEXTURE_2D,we=S.depthTexture.format===ss?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,Y,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,Y,0);else if(S.depthTexture.format===ss)_t(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,we,se,Y,0,ye):r.framebufferTexture2D(r.FRAMEBUFFER,we,se,Y,0);else throw new Error("Unknown depthTexture format")}function Ge(R){let S=n.get(R),U=R.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==R.depthTexture){let $=R.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){let K=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",K)};$.addEventListener("dispose",K),S.__depthDisposeCallback=K}S.__boundDepthTexture=$}if(R.depthTexture&&!S.__autoAllocateDepthBuffer)if(U)for(let $=0;$<6;$++)ve(S.__webglFramebuffer[$],R,$);else{let $=R.texture.mipmaps;$&&$.length>0?ve(S.__webglFramebuffer[0],R,0):ve(S.__webglFramebuffer,R,0)}else if(U){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=r.createRenderbuffer(),Ie(S.__webglDepthbuffer[$],R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer[$];r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}else{let $=R.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ie(S.__webglDepthbuffer,R,!1);else{let K=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Y=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,Y),r.framebufferRenderbuffer(r.FRAMEBUFFER,K,r.RENDERBUFFER,Y)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(R,S,U){let $=n.get(R);S!==void 0&&fe($.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),U!==void 0&&Ge(R)}function Ee(R){let S=R.texture,U=n.get(R),$=n.get(S);R.addEventListener("dispose",A);let K=R.textures,Y=R.isWebGLCubeRenderTarget===!0,ye=K.length>1;if(ye||($.__webglTexture===void 0&&($.__webglTexture=r.createTexture()),$.__version=S.version,o.memory.textures++),Y){U.__webglFramebuffer=[];for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer[se]=[];for(let we=0;we<S.mipmaps.length;we++)U.__webglFramebuffer[se][we]=r.createFramebuffer()}else U.__webglFramebuffer[se]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){U.__webglFramebuffer=[];for(let se=0;se<S.mipmaps.length;se++)U.__webglFramebuffer[se]=r.createFramebuffer()}else U.__webglFramebuffer=r.createFramebuffer();if(ye)for(let se=0,we=K.length;se<we;se++){let Te=n.get(K[se]);Te.__webglTexture===void 0&&(Te.__webglTexture=r.createTexture(),o.memory.textures++)}if(R.samples>0&&_t(R)===!1){U.__webglMultisampledFramebuffer=r.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let se=0;se<K.length;se++){let we=K[se];U.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,U.__webglColorRenderbuffer[se]);let Te=s.convert(we.format,we.colorSpace),ne=s.convert(we.type),oe=M(we.internalFormat,Te,ne,we.colorSpace,R.isXRRenderTarget===!0),Se=F(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,Se,oe,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,U.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(U.__webglDepthRenderbuffer=r.createRenderbuffer(),Ie(U.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(Y){t.bindTexture(r.TEXTURE_CUBE_MAP,$.__webglTexture),Ne(r.TEXTURE_CUBE_MAP,S);for(let se=0;se<6;se++)if(S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)fe(U.__webglFramebuffer[se][we],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,we);else fe(U.__webglFramebuffer[se],R,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);g(S)&&p(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ye){for(let se=0,we=K.length;se<we;se++){let Te=K[se],ne=n.get(Te),oe=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(oe=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,ne.__webglTexture),Ne(oe,Te),fe(U.__webglFramebuffer,R,Te,r.COLOR_ATTACHMENT0+se,oe,0),g(Te)&&p(oe)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(se=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,$.__webglTexture),Ne(se,S),S.mipmaps&&S.mipmaps.length>0)for(let we=0;we<S.mipmaps.length;we++)fe(U.__webglFramebuffer[we],R,S,r.COLOR_ATTACHMENT0,se,we);else fe(U.__webglFramebuffer,R,S,r.COLOR_ATTACHMENT0,se,0);g(S)&&p(se),t.unbindTexture()}R.depthBuffer&&Ge(R)}function ze(R){let S=R.textures;for(let U=0,$=S.length;U<$;U++){let K=S[U];if(g(K)){let Y=v(R),ye=n.get(K).__webglTexture;t.bindTexture(Y,ye),p(Y),t.unbindTexture()}}}let Ke=[],Ue=[];function G(R){if(R.samples>0){if(_t(R)===!1){let S=R.textures,U=R.width,$=R.height,K=r.COLOR_BUFFER_BIT,Y=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ye=n.get(R),se=S.length>1;if(se)for(let Te=0;Te<S.length;Te++)t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ye.__webglMultisampledFramebuffer);let we=R.texture.mipmaps;we&&we.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglFramebuffer);for(let Te=0;Te<S.length;Te++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(K|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(K|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let ne=n.get(S[Te]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ne,0)}r.blitFramebuffer(0,0,U,$,0,0,U,$,K,r.NEAREST),l===!0&&(Ke.length=0,Ue.length=0,Ke.push(r.COLOR_ATTACHMENT0+Te),R.depthBuffer&&R.resolveDepthBuffer===!1&&(Ke.push(Y),Ue.push(Y),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ue)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ke))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Te=0;Te<S.length;Te++){t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.RENDERBUFFER,ye.__webglColorRenderbuffer[Te]);let ne=n.get(S[Te]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Te,r.TEXTURE_2D,ne,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ye.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){let S=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function F(R){return Math.min(i.maxSamples,R.samples)}function _t(R){let S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function it(R){let S=o.render.frame;h.get(R)!==S&&(h.set(R,S),R.update())}function Ve(R,S){let U=R.colorSpace,$=R.format,K=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||U!==Os&&U!==Pr&&(dt.getTransfer(U)===yt?($!==Li||K!==ri)&&Xe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):He("WebGLTextures: Unsupported texture color space:",U)),S}function Me(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=W,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=Z,this.rebindTextures=ft,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=ze,this.updateMultisampleRenderTarget=G,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=fe,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function E1(r,e){function t(n,i=Pr){let s,o=dt.getTransfer(i);if(n===ri)return r.UNSIGNED_BYTE;if(n===Oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Wd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Xd)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Hd)return r.BYTE;if(n===Gd)return r.SHORT;if(n===Zo)return r.UNSIGNED_SHORT;if(n===Uh)return r.INT;if(n===Gi)return r.UNSIGNED_INT;if(n===Di)return r.FLOAT;if(n===ir)return r.HALF_FLOAT;if(n===qd)return r.ALPHA;if(n===Yd)return r.RGB;if(n===Li)return r.RGBA;if(n===ji)return r.DEPTH_COMPONENT;if(n===ss)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===zh)return r.RED_INTEGER;if(n===Xs)return r.RG;if(n===Vh)return r.RG_INTEGER;if(n===Hh)return r.RGBA_INTEGER;if(n===Sl||n===bl||n===Tl||n===El)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Sl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Sl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===bl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===El)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===Xh||n===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===Zh||n===Jh||n===$h||n===Kh||n===Qh||n===jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===Zh)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Jh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===$h)return s.COMPRESSED_R11_EAC;if(n===Kh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Qh)return s.COMPRESSED_RG11_EAC;if(n===jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===eu||n===tu||n===nu||n===iu||n===ru||n===su||n===ou||n===au||n===lu||n===cu||n===hu||n===uu||n===fu||n===du)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===eu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===tu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===iu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ru)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===su)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ou)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===au)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===lu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===uu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fu)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===du)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pu||n===mu||n===gu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pu)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===mu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_u||n===xu||n===yu||n===vu)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_u)return s.COMPRESSED_RED_RGTC1_EXT;if(n===xu)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===yu)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vu)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Jo?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var w1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A1=`
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

}`,pp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new cl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new yi({vertexShader:w1,fragmentShader:A1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ct(new pl(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},mp=class extends Er{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null,m=typeof XRWebGLBinding<"u",g=new pp,p={},v=t.getContextAttributes(),M=null,y=null,T=[],E=[],A=new Re,C=null,x=new an;x.viewport=new Gt;let b=new an;b.viewport=new Gt;let P=[x,b],N=new Th,B=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let Q=T[J];return Q===void 0&&(Q=new Vo,T[J]=Q),Q.getTargetRaySpace()},this.getControllerGrip=function(J){let Q=T[J];return Q===void 0&&(Q=new Vo,T[J]=Q),Q.getGripSpace()},this.getHand=function(J){let Q=T[J];return Q===void 0&&(Q=new Vo,T[J]=Q),Q.getHandSpace()};function W(J){let Q=E.indexOf(J.inputSource);if(Q===-1)return;let fe=T[Q];fe!==void 0&&(fe.update(J.inputSource,J.frame,c||o),fe.dispatchEvent({type:J.type,data:J.inputSource}))}function z(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let J=0;J<T.length;J++){let Q=E[J];Q!==null&&(E[J]=null,T[J].disconnect(Q))}B=null,V=null,g.reset();for(let J in p)delete p[J];e.setRenderTarget(M),f=null,d=null,u=null,i=null,y=null,$e.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(A.width,A.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){s=J,n.isPresenting===!0&&Xe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){a=J,n.isPresenting===!0&&Xe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(J){c=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&m&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(J){if(i=J,i!==null){if(M=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),v.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(A),m&&"createProjectionLayer"in XRWebGLBinding.prototype){let fe=null,Ie=null,ve=null;v.depth&&(ve=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,fe=v.stencil?ss:ji,Ie=v.stencil?Jo:Gi);let Ge={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:s};u=this.getBinding(),d=u.createProjectionLayer(Ge),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new xi(d.textureWidth,d.textureHeight,{format:Li,type:ri,depthTexture:new jr(d.textureWidth,d.textureHeight,Ie,void 0,void 0,void 0,void 0,void 0,void 0,fe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{let fe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(i,t,fe),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new xi(f.framebufferWidth,f.framebufferHeight,{format:Li,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),$e.setContext(i),$e.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function k(J){for(let Q=0;Q<J.removed.length;Q++){let fe=J.removed[Q],Ie=E.indexOf(fe);Ie>=0&&(E[Ie]=null,T[Ie].disconnect(fe))}for(let Q=0;Q<J.added.length;Q++){let fe=J.added[Q],Ie=E.indexOf(fe);if(Ie===-1){for(let Ge=0;Ge<T.length;Ge++)if(Ge>=E.length){E.push(fe),Ie=Ge;break}else if(E[Ge]===null){E[Ge]=fe,Ie=Ge;break}if(Ie===-1)break}let ve=T[Ie];ve&&ve.connect(fe)}}let Z=new L,ie=new L;function I(J,Q,fe){Z.setFromMatrixPosition(Q.matrixWorld),ie.setFromMatrixPosition(fe.matrixWorld);let Ie=Z.distanceTo(ie),ve=Q.projectionMatrix.elements,Ge=fe.projectionMatrix.elements,ft=ve[14]/(ve[10]-1),Ee=ve[14]/(ve[10]+1),ze=(ve[9]+1)/ve[5],Ke=(ve[9]-1)/ve[5],Ue=(ve[8]-1)/ve[0],G=(Ge[8]+1)/Ge[0],F=ft*Ue,_t=ft*G,it=Ie/(-Ue+G),Ve=it*-Ue;if(Q.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ve),J.translateZ(it),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),ve[10]===-1)J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse);else{let Me=ft+it,R=Ee+it,S=F-Ve,U=_t+(Ie-Ve),$=ze*Ee/R*Me,K=Ke*Ee/R*Me;J.projectionMatrix.makePerspective(S,U,$,K,Me,R),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function re(J,Q){Q===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(Q.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(i===null)return;let Q=J.near,fe=J.far;g.texture!==null&&(g.depthNear>0&&(Q=g.depthNear),g.depthFar>0&&(fe=g.depthFar)),N.near=b.near=x.near=Q,N.far=b.far=x.far=fe,(B!==N.near||V!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,V=N.far),N.layers.mask=J.layers.mask|6,x.layers.mask=N.layers.mask&3,b.layers.mask=N.layers.mask&5;let Ie=J.parent,ve=N.cameras;re(N,Ie);for(let Ge=0;Ge<ve.length;Ge++)re(ve[Ge],Ie);ve.length===2?I(N,x,b):N.projectionMatrix.copy(x.projectionMatrix),Ne(J,N,Ie)};function Ne(J,Q,fe){fe===null?J.matrix.copy(Q.matrixWorld):(J.matrix.copy(fe.matrixWorld),J.matrix.invert(),J.matrix.multiply(Q.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(Q.projectionMatrix),J.projectionMatrixInverse.copy(Q.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=$c*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(J){l=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(N)},this.getCameraTexture=function(J){return p[J]};let ke=null;function Ye(J,Q){if(h=Q.getViewerPose(c||o),_=Q,h!==null){let fe=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let Ie=!1;fe.length!==N.cameras.length&&(N.cameras.length=0,Ie=!0);for(let Ee=0;Ee<fe.length;Ee++){let ze=fe[Ee],Ke=null;if(f!==null)Ke=f.getViewport(ze);else{let G=u.getViewSubImage(d,ze);Ke=G.viewport,Ee===0&&(e.setRenderTargetTextures(y,G.colorTexture,G.depthStencilTexture),e.setRenderTarget(y))}let Ue=P[Ee];Ue===void 0&&(Ue=new an,Ue.layers.enable(Ee),Ue.viewport=new Gt,P[Ee]=Ue),Ue.matrix.fromArray(ze.transform.matrix),Ue.matrix.decompose(Ue.position,Ue.quaternion,Ue.scale),Ue.projectionMatrix.fromArray(ze.projectionMatrix),Ue.projectionMatrixInverse.copy(Ue.projectionMatrix).invert(),Ue.viewport.set(Ke.x,Ke.y,Ke.width,Ke.height),Ee===0&&(N.matrix.copy(Ue.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Ie===!0&&N.cameras.push(Ue)}let ve=i.enabledFeatures;if(ve&&ve.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&m){u=n.getBinding();let Ee=u.getDepthInformation(fe[0]);Ee&&Ee.isValid&&Ee.texture&&g.init(Ee,i.renderState)}if(ve&&ve.includes("camera-access")&&m){e.state.unbindTexture(),u=n.getBinding();for(let Ee=0;Ee<fe.length;Ee++){let ze=fe[Ee].camera;if(ze){let Ke=p[ze];Ke||(Ke=new cl,p[ze]=Ke);let Ue=u.getCameraImage(ze);Ke.sourceTexture=Ue}}}}for(let fe=0;fe<T.length;fe++){let Ie=E[fe],ve=T[fe];Ie!==null&&ve!==void 0&&ve.update(Ie,Q,c||o)}ke&&ke(J,Q),Q.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:Q}),_=null}let $e=new Yg;$e.setAnimationLoop(Ye),this.setAnimationLoop=function(J){ke=J},this.dispose=function(){}}},Zs=new Pi,C1=new At;function R1(r,e){function t(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function n(g,p){p.color.getRGB(g.fogColor.value,$d(r)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function i(g,p,v,M,y){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(g,p):p.isMeshToonMaterial?(s(g,p),u(g,p)):p.isMeshPhongMaterial?(s(g,p),h(g,p)):p.isMeshStandardMaterial?(s(g,p),d(g,p),p.isMeshPhysicalMaterial&&f(g,p,y)):p.isMeshMatcapMaterial?(s(g,p),_(g,p)):p.isMeshDepthMaterial?s(g,p):p.isMeshDistanceMaterial?(s(g,p),m(g,p)):p.isMeshNormalMaterial?s(g,p):p.isLineBasicMaterial?(o(g,p),p.isLineDashedMaterial&&a(g,p)):p.isPointsMaterial?l(g,p,v,M):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,t(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===En&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,t(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===En&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,t(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,t(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let v=e.get(p),M=v.envMap,y=v.envMapRotation;M&&(g.envMap.value=M,Zs.copy(y),Zs.x*=-1,Zs.y*=-1,Zs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Zs.y*=-1,Zs.z*=-1),g.envMapRotation.value.setFromMatrix4(C1.makeRotationFromEuler(Zs)),g.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,g.aoMapTransform))}function o(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform))}function a(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function l(g,p,v,M){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*v,g.scale.value=M*.5,p.map&&(g.map.value=p.map,t(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,t(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,t(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function d(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function f(g,p,v){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=v.texture,g.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,g.specularIntensityMapTransform))}function _(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){let v=e.get(p).light;g.referencePosition.value.setFromMatrixPosition(v.matrixWorld),g.nearDistance.value=v.shadow.camera.near,g.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function P1(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,M){let y=M.program;n.uniformBlockBinding(v,y)}function c(v,M){let y=i[v.id];y===void 0&&(_(v),y=h(v),i[v.id]=y,v.addEventListener("dispose",g));let T=M.program;n.updateUBOMapping(v,T);let E=e.render.frame;s[v.id]!==E&&(d(v),s[v.id]=E)}function h(v){let M=u();v.__bindingPointIndex=M;let y=r.createBuffer(),T=v.__size,E=v.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,M,y),y}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return He("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(v){let M=i[v.id],y=v.uniforms,T=v.__cache;r.bindBuffer(r.UNIFORM_BUFFER,M);for(let E=0,A=y.length;E<A;E++){let C=Array.isArray(y[E])?y[E]:[y[E]];for(let x=0,b=C.length;x<b;x++){let P=C[x];if(f(P,E,x,T)===!0){let N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],V=0;for(let W=0;W<B.length;W++){let z=B[W],k=m(z);typeof z=="number"||typeof z=="boolean"?(P.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,N+V,P.__data)):z.isMatrix3?(P.__data[0]=z.elements[0],P.__data[1]=z.elements[1],P.__data[2]=z.elements[2],P.__data[3]=0,P.__data[4]=z.elements[3],P.__data[5]=z.elements[4],P.__data[6]=z.elements[5],P.__data[7]=0,P.__data[8]=z.elements[6],P.__data[9]=z.elements[7],P.__data[10]=z.elements[8],P.__data[11]=0):(z.toArray(P.__data,V),V+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function f(v,M,y,T){let E=v.value,A=M+"_"+y;if(T[A]===void 0)return typeof E=="number"||typeof E=="boolean"?T[A]=E:T[A]=E.clone(),!0;{let C=T[A];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return T[A]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function _(v){let M=v.uniforms,y=0,T=16;for(let A=0,C=M.length;A<C;A++){let x=Array.isArray(M[A])?M[A]:[M[A]];for(let b=0,P=x.length;b<P;b++){let N=x[b],B=Array.isArray(N.value)?N.value:[N.value];for(let V=0,W=B.length;V<W;V++){let z=B[V],k=m(z),Z=y%T,ie=Z%k.boundary,I=Z+ie;y+=ie,I!==0&&T-I<k.storage&&(y+=T-I),N.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=y,y+=k.storage}}}let E=y%T;return E>0&&(y+=T-E),v.__size=y,v.__cache={},this}function m(v){let M={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(M.boundary=4,M.storage=4):v.isVector2?(M.boundary=8,M.storage=8):v.isVector3||v.isColor?(M.boundary=16,M.storage=12):v.isVector4?(M.boundary=16,M.storage=16):v.isMatrix3?(M.boundary=48,M.storage=48):v.isMatrix4?(M.boundary=64,M.storage=64):v.isTexture?Xe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Xe("WebGLRenderer: Unsupported uniform value type.",v),M}function g(v){let M=v.target;M.removeEventListener("dispose",g);let y=o.indexOf(M.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[M.id]),delete i[M.id],delete s[M.id]}function p(){for(let v in i)r.deleteBuffer(i[v]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var I1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),rr=null;function D1(){return rr===null&&(rr=new ol(I1,16,16,Xs,ir),rr.name="DFG_LUT",rr.minFilter=bn,rr.magFilter=bn,rr.wrapS=Qi,rr.wrapT=Qi,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}var Qo=class{constructor(e={}){let{canvas:t=yg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ri}=e;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;let m=f,g=new Set([Hh,Vh,zh]),p=new Set([ri,Gi,Zo,Jo,Oh,Bh]),v=new Uint32Array(4),M=new Int32Array(4),y=null,T=null,E=[],A=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=on;let P=0,N=0,B=null,V=-1,W=null,z=new Gt,k=new Gt,Z=null,ie=new tt(0),I=0,re=t.width,Ne=t.height,ke=1,Ye=null,$e=null,J=new Gt(0,0,re,Ne),Q=new Gt(0,0,re,Ne),fe=!1,Ie=new Wo,ve=!1,Ge=!1,ft=new At,Ee=new L,ze=new Gt,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ue=!1;function G(){return B===null?ke:1}let F=n;function _t(w,O){return t.getContext(w,O)}try{let w={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",Fe,!1),t.addEventListener("webglcontextrestored",pt,!1),t.addEventListener("webglcontextcreationerror",ge,!1),F===null){let O="webgl2";if(F=_t(O,w),F===null)throw _t(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw He("WebGLRenderer: "+w.message),w}let it,Ve,Me,R,S,U,$,K,Y,ye,se,we,Te,ne,oe,Se,Ae,ae,qe,D,he,te,ue,ee;function j(){it=new kS(F),it.init(),te=new E1(F,it),Ve=new PS(F,it,e,te),Me=new b1(F,it),Ve.reversedDepthBuffer&&d&&Me.buffers.depth.setReversed(!0),R=new HS(F),S=new l1,U=new T1(F,it,Me,S,Ve,te,R),$=new DS(x),K=new BS(x),Y=new qy(F),ue=new CS(F,Y),ye=new zS(F,Y,R,ue),se=new WS(F,ye,Y,R),qe=new GS(F,Ve,U),Se=new IS(S),we=new a1(x,$,K,it,Ve,ue,Se),Te=new R1(x,S),ne=new h1,oe=new g1(it),ae=new AS(x,$,K,Me,se,_,l),Ae=new M1(x,se,Ve),ee=new P1(F,R,Ve,Me),D=new RS(F,it,R),he=new VS(F,it,R),R.programs=we.programs,x.capabilities=Ve,x.extensions=it,x.properties=S,x.renderLists=ne,x.shadowMap=Ae,x.state=Me,x.info=R}j(),m!==ri&&(C=new qS(m,t.width,t.height,i,s));let ce=new mp(x,F);this.xr=ce,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){let w=it.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=it.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return ke},this.setPixelRatio=function(w){w!==void 0&&(ke=w,this.setSize(re,Ne,!1))},this.getSize=function(w){return w.set(re,Ne)},this.setSize=function(w,O,q=!0){if(ce.isPresenting){Xe("WebGLRenderer: Can't change size while VR device is presenting.");return}re=w,Ne=O,t.width=Math.floor(w*ke),t.height=Math.floor(O*ke),q===!0&&(t.style.width=w+"px",t.style.height=O+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,w,O)},this.getDrawingBufferSize=function(w){return w.set(re*ke,Ne*ke).floor()},this.setDrawingBufferSize=function(w,O,q){re=w,Ne=O,ke=q,t.width=Math.floor(w*q),t.height=Math.floor(O*q),this.setViewport(0,0,w,O)},this.setEffects=function(w){if(m===ri){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let O=0;O<w.length;O++)if(w[O].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(z)},this.getViewport=function(w){return w.copy(J)},this.setViewport=function(w,O,q,X){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,O,q,X),Me.viewport(z.copy(J).multiplyScalar(ke).round())},this.getScissor=function(w){return w.copy(Q)},this.setScissor=function(w,O,q,X){w.isVector4?Q.set(w.x,w.y,w.z,w.w):Q.set(w,O,q,X),Me.scissor(k.copy(Q).multiplyScalar(ke).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(w){Me.setScissorTest(fe=w)},this.setOpaqueSort=function(w){Ye=w},this.setTransparentSort=function(w){$e=w},this.getClearColor=function(w){return w.copy(ae.getClearColor())},this.setClearColor=function(){ae.setClearColor(...arguments)},this.getClearAlpha=function(){return ae.getClearAlpha()},this.setClearAlpha=function(){ae.setClearAlpha(...arguments)},this.clear=function(w=!0,O=!0,q=!0){let X=0;if(w){let H=!1;if(B!==null){let le=B.texture.format;H=g.has(le)}if(H){let le=B.texture.type,_e=p.has(le),de=ae.getClearColor(),xe=ae.getClearAlpha(),De=de.r,We=de.g,Oe=de.b;_e?(v[0]=De,v[1]=We,v[2]=Oe,v[3]=xe,F.clearBufferuiv(F.COLOR,0,v)):(M[0]=De,M[1]=We,M[2]=Oe,M[3]=xe,F.clearBufferiv(F.COLOR,0,M))}else X|=F.COLOR_BUFFER_BIT}O&&(X|=F.DEPTH_BUFFER_BIT),q&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Fe,!1),t.removeEventListener("webglcontextrestored",pt,!1),t.removeEventListener("webglcontextcreationerror",ge,!1),ae.dispose(),ne.dispose(),oe.dispose(),S.dispose(),$.dispose(),K.dispose(),se.dispose(),ue.dispose(),ee.dispose(),we.dispose(),ce.dispose(),ce.removeEventListener("sessionstart",Jt),ce.removeEventListener("sessionend",ot),St.stop()};function Fe(w){w.preventDefault(),$a("WebGLRenderer: Context Lost."),b=!0}function pt(){$a("WebGLRenderer: Context Restored."),b=!1;let w=R.autoReset,O=Ae.enabled,q=Ae.autoUpdate,X=Ae.needsUpdate,H=Ae.type;j(),R.autoReset=w,Ae.enabled=O,Ae.autoUpdate=q,Ae.needsUpdate=X,Ae.type=H}function ge(w){He("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Pe(w){let O=w.target;O.removeEventListener("dispose",Pe),je(O)}function je(w){pe(w),S.remove(w)}function pe(w){let O=S.get(w).programs;O!==void 0&&(O.forEach(function(q){we.releaseProgram(q)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,O,q,X,H,le){O===null&&(O=Ke);let _e=H.isMesh&&H.matrixWorld.determinant()<0,de=tn(w,O,q,X,H);Me.setMaterial(X,_e);let xe=q.index,De=1;if(X.wireframe===!0){if(xe=ye.getWireframeAttribute(q),xe===void 0)return;De=2}let We=q.drawRange,Oe=q.attributes.position,at=We.start*De,Et=(We.start+We.count)*De;le!==null&&(at=Math.max(at,le.start*De),Et=Math.min(Et,(le.start+le.count)*De)),xe!==null?(at=Math.max(at,0),Et=Math.min(Et,xe.count)):Oe!=null&&(at=Math.max(at,0),Et=Math.min(Et,Oe.count));let Wt=Et-at;if(Wt<0||Wt===1/0)return;ue.setup(H,X,de,q,xe);let Xt,Pt=D;if(xe!==null&&(Xt=Y.get(xe),Pt=he,Pt.setIndex(Xt)),H.isMesh)X.wireframe===!0?(Me.setLineWidth(X.wireframeLinewidth*G()),Pt.setMode(F.LINES)):Pt.setMode(F.TRIANGLES);else if(H.isLine){let Be=X.linewidth;Be===void 0&&(Be=1),Me.setLineWidth(Be*G()),H.isLineSegments?Pt.setMode(F.LINES):H.isLineLoop?Pt.setMode(F.LINE_LOOP):Pt.setMode(F.LINE_STRIP)}else H.isPoints?Pt.setMode(F.POINTS):H.isSprite&&Pt.setMode(F.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ko("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Pt.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(it.get("WEBGL_multi_draw"))Pt.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let Be=H._multiDrawStarts,bt=H._multiDrawCounts,gt=H._multiDrawCount,oi=xe?Y.get(xe).bytesPerElement:1,Qs=S.get(X).currentProgram.getUniforms();for(let ai=0;ai<gt;ai++)Qs.setValue(F,"_gl_DrawID",ai),Pt.render(Be[ai]/oi,bt[ai])}else if(H.isInstancedMesh)Pt.renderInstances(at,Wt,H.count);else if(q.isInstancedBufferGeometry){let Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,bt=Math.min(q.instanceCount,Be);Pt.renderInstances(at,Wt,bt)}else Pt.render(at,Wt)};function Ze(w,O,q){w.transparent===!0&&w.side===Mi&&w.forceSinglePass===!1?(w.side=En,w.needsUpdate=!0,Tt(w,O,q),w.side=Tr,w.needsUpdate=!0,Tt(w,O,q),w.side=Mi):Tt(w,O,q)}this.compile=function(w,O,q=null){q===null&&(q=w),T=oe.get(q),T.init(O),A.push(T),q.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),w!==q&&w.traverseVisible(function(H){H.isLight&&H.layers.test(O.layers)&&(T.pushLight(H),H.castShadow&&T.pushShadow(H))}),T.setupLights();let X=new Set;return w.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let le=H.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){let de=le[_e];Ze(de,q,H),X.add(de)}else Ze(le,q,H),X.add(le)}),T=A.pop(),X},this.compileAsync=function(w,O,q=null){let X=this.compile(w,O,q);return new Promise(H=>{function le(){if(X.forEach(function(_e){S.get(_e).currentProgram.isReady()&&X.delete(_e)}),X.size===0){H(w);return}setTimeout(le,10)}it.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Le=null;function Je(w){Le&&Le(w)}function Jt(){St.stop()}function ot(){St.start()}let St=new Yg;St.setAnimationLoop(Je),typeof self<"u"&&St.setContext(self),this.setAnimationLoop=function(w){Le=w,ce.setAnimationLoop(w),w===null?St.stop():St.start()},ce.addEventListener("sessionstart",Jt),ce.addEventListener("sessionend",ot),this.render=function(w,O){if(O!==void 0&&O.isCamera!==!0){He("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let q=ce.enabled===!0&&ce.isPresenting===!0,X=C!==null&&(B===null||q)&&C.begin(x,B);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ce.enabled===!0&&ce.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(ce.cameraAutoUpdate===!0&&ce.updateCamera(O),O=ce.getCamera()),w.isScene===!0&&w.onBeforeRender(x,w,O,B),T=oe.get(w,A.length),T.init(O),A.push(T),ft.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ie.setFromProjectionMatrix(ft,zi,O.reversedDepth),Ge=this.localClippingEnabled,ve=Se.init(this.clippingPlanes,Ge),y=ne.get(w,E.length),y.init(),E.push(y),ce.enabled===!0&&ce.isPresenting===!0){let _e=x.xr.getDepthSensingMesh();_e!==null&&Kt(_e,O,-1/0,x.sortObjects)}Kt(w,O,0,x.sortObjects),y.finish(),x.sortObjects===!0&&y.sort(Ye,$e),Ue=ce.enabled===!1||ce.isPresenting===!1||ce.hasDepthSensing()===!1,Ue&&ae.addToRenderList(y,w),this.info.render.frame++,ve===!0&&Se.beginShadows();let H=T.state.shadowsArray;if(Ae.render(H,w,O),ve===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset(),(X&&C.hasRenderPass())===!1){let _e=y.opaque,de=y.transmissive;if(T.setupLights(),O.isArrayCamera){let xe=O.cameras;if(de.length>0)for(let De=0,We=xe.length;De<We;De++){let Oe=xe[De];Rt(_e,de,w,Oe)}Ue&&ae.render(w);for(let De=0,We=xe.length;De<We;De++){let Oe=xe[De];Ft(y,w,Oe,Oe.viewport)}}else de.length>0&&Rt(_e,de,w,O),Ue&&ae.render(w),Ft(y,w,O)}B!==null&&N===0&&(U.updateMultisampleRenderTarget(B),U.updateRenderTargetMipmap(B)),X&&C.end(x),w.isScene===!0&&w.onAfterRender(x,w,O),ue.resetDefaultState(),V=-1,W=null,A.pop(),A.length>0?(T=A[A.length-1],ve===!0&&Se.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?y=E[E.length-1]:y=null};function Kt(w,O,q,X){if(w.visible===!1)return;if(w.layers.test(O.layers)){if(w.isGroup)q=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(O);else if(w.isLight)T.pushLight(w),w.castShadow&&T.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Ie.intersectsSprite(w)){X&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(ft);let _e=se.update(w),de=w.material;de.visible&&y.push(w,_e,de,q,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Ie.intersectsObject(w))){let _e=se.update(w),de=w.material;if(X&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),ze.copy(_e.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(ft)),Array.isArray(de)){let xe=_e.groups;for(let De=0,We=xe.length;De<We;De++){let Oe=xe[De],at=de[Oe.materialIndex];at&&at.visible&&y.push(w,_e,at,q,ze.z,Oe)}}else de.visible&&y.push(w,_e,de,q,ze.z,null)}}let le=w.children;for(let _e=0,de=le.length;_e<de;_e++)Kt(le[_e],O,q,X)}function Ft(w,O,q,X){let{opaque:H,transmissive:le,transparent:_e}=w;T.setupLightsView(q),ve===!0&&Se.setGlobalState(x.clippingPlanes,q),X&&Me.viewport(z.copy(X)),H.length>0&&mt(H,O,q),le.length>0&&mt(le,O,q),_e.length>0&&mt(_e,O,q),Me.buffers.depth.setTest(!0),Me.buffers.depth.setMask(!0),Me.buffers.color.setMask(!0),Me.setPolygonOffset(!1)}function Rt(w,O,q,X){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[X.id]===void 0){let at=it.has("EXT_color_buffer_half_float")||it.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[X.id]=new xi(1,1,{generateMipmaps:!0,type:at?ir:ri,minFilter:rs,samples:Ve.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:dt.workingColorSpace})}let le=T.state.transmissionRenderTarget[X.id],_e=X.viewport||z;le.setSize(_e.z*x.transmissionResolutionScale,_e.w*x.transmissionResolutionScale);let de=x.getRenderTarget(),xe=x.getActiveCubeFace(),De=x.getActiveMipmapLevel();x.setRenderTarget(le),x.getClearColor(ie),I=x.getClearAlpha(),I<1&&x.setClearColor(16777215,.5),x.clear(),Ue&&ae.render(q);let We=x.toneMapping;x.toneMapping=Hi;let Oe=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),T.setupLightsView(X),ve===!0&&Se.setGlobalState(x.clippingPlanes,X),mt(w,q,X),U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le),it.has("WEBGL_multisampled_render_to_texture")===!1){let at=!1;for(let Et=0,Wt=O.length;Et<Wt;Et++){let Xt=O[Et],{object:Pt,geometry:Be,material:bt,group:gt}=Xt;if(bt.side===Mi&&Pt.layers.test(X.layers)){let oi=bt.side;bt.side=En,bt.needsUpdate=!0,$n(Pt,q,X,Be,bt,gt),bt.side=oi,bt.needsUpdate=!0,at=!0}}at===!0&&(U.updateMultisampleRenderTarget(le),U.updateRenderTargetMipmap(le))}x.setRenderTarget(de,xe,De),x.setClearColor(ie,I),Oe!==void 0&&(X.viewport=Oe),x.toneMapping=We}function mt(w,O,q){let X=O.isScene===!0?O.overrideMaterial:null;for(let H=0,le=w.length;H<le;H++){let _e=w[H],{object:de,geometry:xe,group:De}=_e,We=_e.material;We.allowOverride===!0&&X!==null&&(We=X),de.layers.test(q.layers)&&$n(de,O,q,xe,We,De)}}function $n(w,O,q,X,H,le){w.onBeforeRender(x,O,q,X,H,le),w.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),H.onBeforeRender(x,O,q,X,w,le),H.transparent===!0&&H.side===Mi&&H.forceSinglePass===!1?(H.side=En,H.needsUpdate=!0,x.renderBufferDirect(q,O,X,H,w,le),H.side=Tr,H.needsUpdate=!0,x.renderBufferDirect(q,O,X,H,w,le),H.side=Mi):x.renderBufferDirect(q,O,X,H,w,le),w.onAfterRender(x,O,q,X,H,le)}function Tt(w,O,q){O.isScene!==!0&&(O=Ke);let X=S.get(w),H=T.state.lights,le=T.state.shadowsArray,_e=H.state.version,de=we.getParameters(w,H.state,le,O,q),xe=we.getProgramCacheKey(de),De=X.programs;X.environment=w.isMeshStandardMaterial?O.environment:null,X.fog=O.fog,X.envMap=(w.isMeshStandardMaterial?K:$).get(w.envMap||X.environment),X.envMapRotation=X.environment!==null&&w.envMap===null?O.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",Pe),De=new Map,X.programs=De);let We=De.get(xe);if(We!==void 0){if(X.currentProgram===We&&X.lightsStateVersion===_e)return si(w,de),We}else de.uniforms=we.getUniforms(w),w.onBeforeCompile(de,x),We=we.acquireProgram(de,xe),De.set(xe,We),X.uniforms=de.uniforms;let Oe=X.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Oe.clippingPlanes=Se.uniform),si(w,de),X.needsLights=fn(w),X.lightsStateVersion=_e,X.needsLights&&(Oe.ambientLightColor.value=H.state.ambient,Oe.lightProbe.value=H.state.probe,Oe.directionalLights.value=H.state.directional,Oe.directionalLightShadows.value=H.state.directionalShadow,Oe.spotLights.value=H.state.spot,Oe.spotLightShadows.value=H.state.spotShadow,Oe.rectAreaLights.value=H.state.rectArea,Oe.ltc_1.value=H.state.rectAreaLTC1,Oe.ltc_2.value=H.state.rectAreaLTC2,Oe.pointLights.value=H.state.point,Oe.pointLightShadows.value=H.state.pointShadow,Oe.hemisphereLights.value=H.state.hemi,Oe.directionalShadowMap.value=H.state.directionalShadowMap,Oe.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Oe.spotShadowMap.value=H.state.spotShadowMap,Oe.spotLightMatrix.value=H.state.spotLightMatrix,Oe.spotLightMap.value=H.state.spotLightMap,Oe.pointShadowMap.value=H.state.pointShadowMap,Oe.pointShadowMatrix.value=H.state.pointShadowMatrix),X.currentProgram=We,X.uniformsList=null,We}function wn(w){if(w.uniformsList===null){let O=w.currentProgram.getUniforms();w.uniformsList=Ko.seqWithValue(O.seq,w.uniforms)}return w.uniformsList}function si(w,O){let q=S.get(w);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function tn(w,O,q,X,H){O.isScene!==!0&&(O=Ke),U.resetTextureUnits();let le=O.fog,_e=X.isMeshStandardMaterial?O.environment:null,de=B===null?x.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:Os,xe=(X.isMeshStandardMaterial?K:$).get(X.envMap||_e),De=X.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,We=!!q.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Oe=!!q.morphAttributes.position,at=!!q.morphAttributes.normal,Et=!!q.morphAttributes.color,Wt=Hi;X.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(Wt=x.toneMapping);let Xt=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Pt=Xt!==void 0?Xt.length:0,Be=S.get(X),bt=T.state.lights;if(ve===!0&&(Ge===!0||w!==W)){let On=w===W&&X.id===V;Se.setState(X,w,On)}let gt=!1;X.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==bt.state.version||Be.outputColorSpace!==de||H.isBatchedMesh&&Be.batching===!1||!H.isBatchedMesh&&Be.batching===!0||H.isBatchedMesh&&Be.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&Be.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&Be.instancing===!1||!H.isInstancedMesh&&Be.instancing===!0||H.isSkinnedMesh&&Be.skinning===!1||!H.isSkinnedMesh&&Be.skinning===!0||H.isInstancedMesh&&Be.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&Be.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&Be.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&Be.instancingMorph===!1&&H.morphTexture!==null||Be.envMap!==xe||X.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==Se.numPlanes||Be.numIntersection!==Se.numIntersection)||Be.vertexAlphas!==De||Be.vertexTangents!==We||Be.morphTargets!==Oe||Be.morphNormals!==at||Be.morphColors!==Et||Be.toneMapping!==Wt||Be.morphTargetsCount!==Pt)&&(gt=!0):(gt=!0,Be.__version=X.version);let oi=Be.currentProgram;gt===!0&&(oi=Tt(X,O,H));let Qs=!1,ai=!1,na=!1,Lt=oi.getUniforms(),Kn=Be.uniforms;if(Me.useProgram(oi.program)&&(Qs=!0,ai=!0,na=!0),X.id!==V&&(V=X.id,ai=!0),Qs||W!==w){Me.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),Lt.setValue(F,"projectionMatrix",w.projectionMatrix),Lt.setValue(F,"viewMatrix",w.matrixWorldInverse);let Qn=Lt.map.cameraPosition;Qn!==void 0&&Qn.setValue(F,Ee.setFromMatrixPosition(w.matrixWorld)),Ve.logarithmicDepthBuffer&&Lt.setValue(F,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Lt.setValue(F,"isOrthographic",w.isOrthographicCamera===!0),W!==w&&(W=w,ai=!0,na=!0)}if(Be.needsLights&&(bt.state.directionalShadowMap.length>0&&Lt.setValue(F,"directionalShadowMap",bt.state.directionalShadowMap,U),bt.state.spotShadowMap.length>0&&Lt.setValue(F,"spotShadowMap",bt.state.spotShadowMap,U),bt.state.pointShadowMap.length>0&&Lt.setValue(F,"pointShadowMap",bt.state.pointShadowMap,U)),H.isSkinnedMesh){Lt.setOptional(F,H,"bindMatrix"),Lt.setOptional(F,H,"bindMatrixInverse");let On=H.skeleton;On&&(On.boneTexture===null&&On.computeBoneTexture(),Lt.setValue(F,"boneTexture",On.boneTexture,U))}H.isBatchedMesh&&(Lt.setOptional(F,H,"batchingTexture"),Lt.setValue(F,"batchingTexture",H._matricesTexture,U),Lt.setOptional(F,H,"batchingIdTexture"),Lt.setValue(F,"batchingIdTexture",H._indirectTexture,U),Lt.setOptional(F,H,"batchingColorTexture"),H._colorsTexture!==null&&Lt.setValue(F,"batchingColorTexture",H._colorsTexture,U));let Si=q.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&qe.update(H,q,oi),(ai||Be.receiveShadow!==H.receiveShadow)&&(Be.receiveShadow=H.receiveShadow,Lt.setValue(F,"receiveShadow",H.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(Kn.envMap.value=xe,Kn.flipEnvMap.value=xe.isCubeTexture&&xe.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&O.environment!==null&&(Kn.envMapIntensity.value=O.environmentIntensity),Kn.dfgLUT!==void 0&&(Kn.dfgLUT.value=D1()),ai&&(Lt.setValue(F,"toneMappingExposure",x.toneMappingExposure),Be.needsLights&&nn(Kn,na),le&&X.fog===!0&&Te.refreshFogUniforms(Kn,le),Te.refreshMaterialUniforms(Kn,X,ke,Ne,T.state.transmissionRenderTarget[w.id]),Ko.upload(F,wn(Be),Kn,U)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(Ko.upload(F,wn(Be),Kn,U),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Lt.setValue(F,"center",H.center),Lt.setValue(F,"modelViewMatrix",H.modelViewMatrix),Lt.setValue(F,"normalMatrix",H.normalMatrix),Lt.setValue(F,"modelMatrix",H.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){let On=X.uniformsGroups;for(let Qn=0,Iu=On.length;Qn<Iu;Qn++){let hs=On[Qn];ee.update(hs,oi),ee.bind(hs,oi)}}return oi}function nn(w,O){w.ambientLightColor.needsUpdate=O,w.lightProbe.needsUpdate=O,w.directionalLights.needsUpdate=O,w.directionalLightShadows.needsUpdate=O,w.pointLights.needsUpdate=O,w.pointLightShadows.needsUpdate=O,w.spotLights.needsUpdate=O,w.spotLightShadows.needsUpdate=O,w.rectAreaLights.needsUpdate=O,w.hemisphereLights.needsUpdate=O}function fn(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(w,O,q){let X=S.get(w);X.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,X.__autoAllocateDepthBuffer===!1&&(X.__useRenderToTexture=!1),S.get(w.texture).__webglTexture=O,S.get(w.depthTexture).__webglTexture=X.__autoAllocateDepthBuffer?void 0:q,X.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,O){let q=S.get(w);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};let or=F.createFramebuffer();this.setRenderTarget=function(w,O=0,q=0){B=w,P=O,N=q;let X=null,H=!1,le=!1;if(w){let de=S.get(w);if(de.__useDefaultFramebuffer!==void 0){Me.bindFramebuffer(F.FRAMEBUFFER,de.__webglFramebuffer),z.copy(w.viewport),k.copy(w.scissor),Z=w.scissorTest,Me.viewport(z),Me.scissor(k),Me.setScissorTest(Z),V=-1;return}else if(de.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(de.__hasExternalTextures)U.rebindTextures(w,S.get(w.texture).__webglTexture,S.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let We=w.depthTexture;if(de.__boundDepthTexture!==We){if(We!==null&&S.has(We)&&(w.width!==We.image.width||w.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}let xe=w.texture;(xe.isData3DTexture||xe.isDataArrayTexture||xe.isCompressedArrayTexture)&&(le=!0);let De=S.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[O])?X=De[O][q]:X=De[O],H=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?X=S.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?X=De[q]:X=De,z.copy(w.viewport),k.copy(w.scissor),Z=w.scissorTest}else z.copy(J).multiplyScalar(ke).floor(),k.copy(Q).multiplyScalar(ke).floor(),Z=fe;if(q!==0&&(X=or),Me.bindFramebuffer(F.FRAMEBUFFER,X)&&Me.drawBuffers(w,X),Me.viewport(z),Me.scissor(k),Me.setScissorTest(Z),H){let de=S.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+O,de.__webglTexture,q)}else if(le){let de=O;for(let xe=0;xe<w.textures.length;xe++){let De=S.get(w.textures[xe]);F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0+xe,De.__webglTexture,q,de)}}else if(w!==null&&q!==0){let de=S.get(w.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,de.__webglTexture,q)}V=-1},this.readRenderTargetPixels=function(w,O,q,X,H,le,_e,de=0){if(!(w&&w.isWebGLRenderTarget)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let xe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe){Me.bindFramebuffer(F.FRAMEBUFFER,xe);try{let De=w.textures[de],We=De.format,Oe=De.type;if(!Ve.textureFormatReadable(We)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ve.textureTypeReadable(Oe)){He("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=w.width-X&&q>=0&&q<=w.height-H&&(w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de),F.readPixels(O,q,X,H,te.convert(We),te.convert(Oe),le))}finally{let De=B!==null?S.get(B).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,O,q,X,H,le,_e,de=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let xe=S.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&_e!==void 0&&(xe=xe[_e]),xe)if(O>=0&&O<=w.width-X&&q>=0&&q<=w.height-H){Me.bindFramebuffer(F.FRAMEBUFFER,xe);let De=w.textures[de],We=De.format,Oe=De.type;if(!Ve.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ve.textureTypeReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.bufferData(F.PIXEL_PACK_BUFFER,le.byteLength,F.STREAM_READ),w.textures.length>1&&F.readBuffer(F.COLOR_ATTACHMENT0+de),F.readPixels(O,q,X,H,te.convert(We),te.convert(Oe),0);let Et=B!==null?S.get(B).__webglFramebuffer:null;Me.bindFramebuffer(F.FRAMEBUFFER,Et);let Wt=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await vg(F,Wt,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,at),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,le),F.deleteBuffer(at),F.deleteSync(Wt),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,O=null,q=0){let X=Math.pow(2,-q),H=Math.floor(w.image.width*X),le=Math.floor(w.image.height*X),_e=O!==null?O.x:0,de=O!==null?O.y:0;U.setTexture2D(w,0),F.copyTexSubImage2D(F.TEXTURE_2D,q,0,0,_e,de,H,le),Me.unbindTexture()};let Ks=F.createFramebuffer(),dn=F.createFramebuffer();this.copyTextureToTexture=function(w,O,q=null,X=null,H=0,le=null){le===null&&(H!==0?(ko("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=H,H=0):le=0);let _e,de,xe,De,We,Oe,at,Et,Wt,Xt=w.isCompressedTexture?w.mipmaps[le]:w.image;if(q!==null)_e=q.max.x-q.min.x,de=q.max.y-q.min.y,xe=q.isBox3?q.max.z-q.min.z:1,De=q.min.x,We=q.min.y,Oe=q.isBox3?q.min.z:0;else{let Si=Math.pow(2,-H);_e=Math.floor(Xt.width*Si),de=Math.floor(Xt.height*Si),w.isDataArrayTexture?xe=Xt.depth:w.isData3DTexture?xe=Math.floor(Xt.depth*Si):xe=1,De=0,We=0,Oe=0}X!==null?(at=X.x,Et=X.y,Wt=X.z):(at=0,Et=0,Wt=0);let Pt=te.convert(O.format),Be=te.convert(O.type),bt;O.isData3DTexture?(U.setTexture3D(O,0),bt=F.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(U.setTexture2DArray(O,0),bt=F.TEXTURE_2D_ARRAY):(U.setTexture2D(O,0),bt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,O.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,O.unpackAlignment);let gt=F.getParameter(F.UNPACK_ROW_LENGTH),oi=F.getParameter(F.UNPACK_IMAGE_HEIGHT),Qs=F.getParameter(F.UNPACK_SKIP_PIXELS),ai=F.getParameter(F.UNPACK_SKIP_ROWS),na=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Xt.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Xt.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,De),F.pixelStorei(F.UNPACK_SKIP_ROWS,We),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Oe);let Lt=w.isDataArrayTexture||w.isData3DTexture,Kn=O.isDataArrayTexture||O.isData3DTexture;if(w.isDepthTexture){let Si=S.get(w),On=S.get(O),Qn=S.get(Si.__renderTarget),Iu=S.get(On.__renderTarget);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Qn.__webglFramebuffer),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,Iu.__webglFramebuffer);for(let hs=0;hs<xe;hs++)Lt&&(F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(w).__webglTexture,H,Oe+hs),F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,S.get(O).__webglTexture,le,Wt+hs)),F.blitFramebuffer(De,We,_e,de,at,Et,_e,de,F.DEPTH_BUFFER_BIT,F.NEAREST);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else if(H!==0||w.isRenderTargetTexture||S.has(w)){let Si=S.get(w),On=S.get(O);Me.bindFramebuffer(F.READ_FRAMEBUFFER,Ks),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,dn);for(let Qn=0;Qn<xe;Qn++)Lt?F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Si.__webglTexture,H,Oe+Qn):F.framebufferTexture2D(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,Si.__webglTexture,H),Kn?F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,On.__webglTexture,le,Wt+Qn):F.framebufferTexture2D(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_2D,On.__webglTexture,le),H!==0?F.blitFramebuffer(De,We,_e,de,at,Et,_e,de,F.COLOR_BUFFER_BIT,F.NEAREST):Kn?F.copyTexSubImage3D(bt,le,at,Et,Wt+Qn,De,We,_e,de):F.copyTexSubImage2D(bt,le,at,Et,De,We,_e,de);Me.bindFramebuffer(F.READ_FRAMEBUFFER,null),Me.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Kn?w.isDataTexture||w.isData3DTexture?F.texSubImage3D(bt,le,at,Et,Wt,_e,de,xe,Pt,Be,Xt.data):O.isCompressedArrayTexture?F.compressedTexSubImage3D(bt,le,at,Et,Wt,_e,de,xe,Pt,Xt.data):F.texSubImage3D(bt,le,at,Et,Wt,_e,de,xe,Pt,Be,Xt):w.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,le,at,Et,_e,de,Pt,Be,Xt.data):w.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,le,at,Et,Xt.width,Xt.height,Pt,Xt.data):F.texSubImage2D(F.TEXTURE_2D,le,at,Et,_e,de,Pt,Be,Xt);F.pixelStorei(F.UNPACK_ROW_LENGTH,gt),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,oi),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Qs),F.pixelStorei(F.UNPACK_SKIP_ROWS,ai),F.pixelStorei(F.UNPACK_SKIP_IMAGES,na),le===0&&O.generateMipmaps&&F.generateMipmap(bt),Me.unbindTexture()},this.initRenderTarget=function(w){S.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),Me.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,Me.reset(),ue.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=dt._getDrawingBufferColorSpace(e),t.unpackColorSpace=dt._getUnpackColorSpace()}};var ta=class extends Cr{constructor(){super(),this.name="RoomEnvironment";let e=new kt;e.deleteAttribute("uv");let t=new vt({side:En}),n=new vt,i=new xl(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ct(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new ll(e,n,6),a=new cn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ct(e,ea(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ct(e,ea(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ct(e,ea(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ct(e,ea(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new Ct(e,ea(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new Ct(e,ea(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function ea(r){return new gl({color:0,emissive:16777215,emissiveIntensity:r})}var Rl=new L;function Ni(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Rl.copy(e),Rl[n]=0,Rl.normalize();let c=.5*o/(o+a),h=1-Rl.angleTo(r)/l;return Math.sign(Rl[t])===1?h*c:a/(o+a)+c+c*(1-h)}var ls=class r extends kt{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new L,c=new L,h=new L(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,d=this.attributes.normal.array,f=this.attributes.uv.array,_=u.length/6,m=new L,g=.5/o;for(let p=0,v=0;p<u.length;p+=3,v+=2)switch(l.fromArray(u,p),c.copy(l),c.x-=Math.sign(c.x)*g,c.y-=Math.sign(c.y)*g,c.z-=Math.sign(c.z)*g,c.normalize(),u[p+0]=h.x*Math.sign(l.x)+c.x*s,u[p+1]=h.y*Math.sign(l.y)+c.y*s,u[p+2]=h.z*Math.sign(l.z)+c.z*s,d[p+0]=c.x,d[p+1]=c.y,d[p+2]=c.z,Math.floor(p/_)){case 0:m.set(1,0,0),f[v+0]=Ni(m,c,"z","y",s,n),f[v+1]=1-Ni(m,c,"y","z",s,t);break;case 1:m.set(-1,0,0),f[v+0]=1-Ni(m,c,"z","y",s,n),f[v+1]=1-Ni(m,c,"y","z",s,t);break;case 2:m.set(0,1,0),f[v+0]=1-Ni(m,c,"x","z",s,e),f[v+1]=Ni(m,c,"z","x",s,n);break;case 3:m.set(0,-1,0),f[v+0]=1-Ni(m,c,"x","z",s,e),f[v+1]=1-Ni(m,c,"z","x",s,n);break;case 4:m.set(0,0,1),f[v+0]=1-Ni(m,c,"x","y",s,e),f[v+1]=1-Ni(m,c,"y","x",s,t);break;case 5:m.set(0,0,-1),f[v+0]=Ni(m,c,"x","y",s,e),f[v+1]=1-Ni(m,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var $s=r=>{let e=Math.sin(r*127.1+31.7)*43758.54;return e-Math.floor(e)},Mt=(r,e,t,n=0,i=0,s=0)=>{let o=new Ct(r,e);return o.position.set(n,i,s),t.add(o),o};function jg(r=1.25,e=.55){let t=new Bt,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let h=l/o,u=c/a*2-1,d=Math.sin(Math.PI*h)**.5;if(n.push(u*e*d,h*r,.12+Math.sin(Math.PI*h)*.3+u*u*.18-Math.pow(h,5)*.2+Math.sin(h*36+u*4)*.017*d),s.push(c/a,h),l<o&&c<a){let f=l*(a+1)+c,_=f+a+1;i.push(f,_,f+1,_,_+1,f+1)}}return t.setAttribute("position",new ht(n,3)),t.setAttribute("uv",new ht(s,2)),t.setIndex(i),t.computeVertexNormals(),t}function L1(){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#783f28"),t.addColorStop(.22,"#bc5845"),t.addColorStop(.65,"#dc8672"),t.addColorStop(1,"#f0ac91"),e.fillStyle=t,e.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)e.strokeStyle=`rgba(91,34,35,${.025+$s(i)*.06})`,e.lineWidth=.6,e.beginPath(),e.moveTo(128,0),e.quadraticCurveTo(i*.85,220,i,512),e.stroke();let n=new Bs(r);return n.colorSpace=on,n}var Cu=class{constructor(e,t,n){this.container=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new Qo({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=on,this.renderer.toneMapping=Gs,this.renderer.toneMappingExposure=t==="monolith"?.9:t==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new as(this.renderer),s=new ta;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new Hs(16777215,t==="floraison"||t==="monolith"?.65:1.3));let o=new tr(t==="offscript"?13238194:16771534,t==="floraison"||t==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new tr(t==="aether"?16757901:t==="offscript"?12175359:16764589,t==="floraison"||t==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new tr(16777215,t==="floraison"||t==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),t==="aether"?this.headphones():t==="offscript"?this.sculpture():t==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(e),this.observers.push(c);let h=new IntersectionObserver(u=>{this.visible=u[0].isIntersecting});h.observe(e),this.observers.push(h),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new Cr;camera=new an(33,1,.1,60);root=new _n;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=e=>{this.tilt.x=(e.clientX/innerWidth-.5)*.12,this.tilt.y=(e.clientY/innerHeight-.5)*.08};contextLost=e=>{e.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let e=document.createElement("div");e.className="scene-fallback",this.container.append(e)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let e=new vt({color:"#cbd1ce",metalness:1,roughness:.22}),t=new vt({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new vt({color:"#373b36",roughness:.9,metalness:.05});this.band=new _n,this.root.add(this.band),Mt(new Tn(1.22,.072,20,100,Math.PI),e,this.band,0,.1);let i=Mt(new Tn(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let h of[-1,1]){let u=new _n;u.position.set(h*1.15,-.39,0),u.rotation.y=-h*.2,u.rotation.z=h*.1,this.root.add(u),this.cups.push(u),Mt(new ls(.12,.6,.13,4,.05),e,u,0,.65,-.06);let d=Mt(new ls(.68,1.03,.4,5,.2),e,u,0,0,-.12);this.shells.push(d),Mt(new ls(.61,.95,.09,5,.18),t,u,0,0,.1),Mt(new ls(.5,.82,.08,4,.17),n,u,0,0,.19),Mt(new Tn(.26,.082,16,64),n,u,0,0,.26).scale.set(.85,1.48,.85),Mt(new Tn(.255,.008,8,64),t,u,0,0,.28).scale.set(1.12,1.76,1),Mt(new Fn(.023,.023,.1,12),e,u,h*.3,-.18,.01).rotation.z=Math.PI/2;for(let m=0;m<5;m++)Mt(new Zn(.012,8,6),n,u,(m-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Bs(s);this.textures.push(l);let c=new Go(new Ho({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let e=new zs({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),t=new vt({color:"#c9ff54",metalness:.4,roughness:.28}),n=new vt({color:"#ddddcc",metalness:1,roughness:.18}),i=Mt(new ml(.87,.29,160,24,2,3),e,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=Mt(new Tn(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=Mt(new dl(.38,1),t,this.root,1.45,1.3,.25);this.objects.push(o);let a=Mt(new ls(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let d=0;d<16384;d++){let f=128+$s(d)*35;n.data.set([f,f-4,f-12,255],d*4)}t.putImageData(n,0,0);let i=new Bs(e);i.colorSpace=on,this.textures.push(i);let s=new vt({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new vt({color:10048316,roughness:.38,metalness:.55}),a=new vt({color:3689543,roughness:.22,metalness:.65}),l=new vt({color:4606275,roughness:.9}),c=new kt(2.35,.11,2.35),h=new kt(.11,.32,.11);for(let d=0;d<7;d++){let f=new _n;if(f.userData.level=d,this.root.add(f),Mt(new kt(2.35,.13,.68),s,f,0,0,-.835),Mt(new kt(2.35,.13,.68),s,f,0,0,.835),Mt(new kt(.68,.13,1),s,f,-.835,0,0),Mt(new kt(.68,.13,1),s,f,.835,0,0),d<6){for(let _ of[-1.04,1.04])for(let m of[-1.04,1.04])Mt(h,s,f,_,.22,m);for(let _=0;_<9;_++)Mt(new kt(.024,.25,.055),o,f,-.94+_*.235,.2,-1.08);Mt(new kt(.055,.25,1.58),a,f,1.06,.2,0)}this.objects.push(f)}Mt(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),Mt(new kt(.85,.055,.85),o,this.root,0,-1.3,0);for(let d=0;d<6;d++)Mt(new kt(.8,.05,.13),s,this.root,0,-1.35-d*.04,1.25+d*.13);let u=Mt(new Fn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);u.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let e=L1();this.textures.push(e);let t=new vt({map:e,side:Mi,roughness:.9,metalness:0,envMapIntensity:.2}),n=new _n;n.position.y=.45,this.root.add(n);let i=jg();for(let u=0;u<2;u++)for(let d=0;d<6;d++){let f=new _n;f.rotation.z=d/6*Math.PI*2+u*.52,n.add(f);let _=Mt(i,t,f),m=1-u*.17;_.scale.set(m,m,m),_.position.set(0,.04+u*.035,u*.19),_.userData.ring=u,_.userData.phase=$s(d+u*6),this.petals.push(_)}let s=new vt({color:"#5c4630",roughness:.85}),o=new vt({color:"#dfb45b",roughness:.65});Mt(new Zn(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let u=0;u<115;u++){let d=u*2.399963,f=Math.sqrt(u/115)*.28,_=Mt(new Zn(.015+$s(u)*.007,6,5),u%3?o:s,n,Math.cos(d)*f,Math.sin(d)*f,.58+Math.sqrt(Math.max(0,.078-f*f))*.22);_.scale.z=1.7}let a=new vt({color:"#536742",roughness:.8,side:Mi}),l=new es([new L(.23,-2.5,-.15),new L(-.14,-1.3,-.13),new L(0,.4,0)]);Mt(new ks(l,40,.028,9,!1),a,this.root);for(let u of[-1,1]){let d=Mt(jg(.95,.24),a,this.root,0,-1.05+u*.3,-.1);d.rotation.set(.3,u*.6,-u*.9),d.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let u=0;u<38;u++)c[u*3]=($s(u*3)-.5)*4.7,c[u*3+1]=($s(u*3+1)-.5)*4.5,c[u*3+2]=($s(u*3+2)-.5)*2;let h=new Bt;h.setAttribute("position",new ln(c,3)),this.particles=new Rr(h,new Qr({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:e,height:t}=this.container.getBoundingClientRect();!e||!t||(this.camera.aspect=e/t,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.render(0))}render(e){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||e>0&&e-this.lastFrame<1/30)return;this.lastFrame=e;let t=this.reduced?0:e,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(t*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(t*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(t*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=t*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(t*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(t*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(t*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let e=new Set,t=new Set;this.scene.traverse(n=>{if(n instanceof Ct||n instanceof Rr){e.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))}else n instanceof Go&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var gp=r=>{let e=Math.sin(r*127.1+17.7)*43758.5;return e-Math.floor(e)},Ru=class{constructor(e,t,n){this.host=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new Hs(11258309,1.5));let i=new tr(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new tr(t==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),t==="pelagic"?this.capsule():this.armillary();try{this.renderer=new Qo({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=on,this.renderer.toneMapping=Gs,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new as(this.renderer),a=new ta;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),e.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(e),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new Cr;camera=new an(34,1,.1,100);model=new _n;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(e,t,n=this.model,i=0,s=0,o=0){let a=new Ct(e,t);return a.position.set(i,s,o),n.add(a),a}tube(e,t,n,i=this.model){return this.add(new ks(new es(e),40,t,8,!1),n,i)}capsule(){let e=new vt({color:12240827,metalness:.86,roughness:.27}),t=new vt({color:1387827,metalness:.7,roughness:.32}),n=new vt({color:11838307,metalness:.85,roughness:.24}),i=new vt({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new Zn(1.4,64,48),e).scale.set(1,1.13,.87),this.add(new Fn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new Tn(.64,.075,12,64),t,this.model,0,.12,1.28);let o=this.add(new Zn(.59,48,32),new zs({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new Tn(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new hl(.33,48),new Kr({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new Tn(.42,.012,6,48,Math.PI*.55),new Kr({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let d=0;d<16;d++){let f=d*Math.PI/8;this.add(new Fn(.035,.035,.055,6),t,this.model,Math.cos(f)*.71,.12+Math.sin(f)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new Tn(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new Fn(.46,.56,.27,32),t,this.model,0,1.55,0),this.add(new Fn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new Fn(.018,.018,.8,8),e,this.model,.2,2.1,0),this.add(new Zn(.055,12,8),i,this.model,.2,2.52,0);for(let d of[-1,1]){let f=new _n;f.position.set(d*1.2,-.55,.2),this.model.add(f),this.arms.push(f),this.add(new Zn(.16,16,12),n,f),this.tube([new L,new L(d*.55,-.2,.3),new L(d*.6,-.55,.8)],.055,e,f),this.add(new kt(.23,.14,.36),t,f,d*.6,-.55,.9);for(let _ of[-1,1])this.tube([new L(d*.6+_*.09,-.55,1),new L(d*.6+_*.14,-.7,1.2),new L(d*.6+_*.05,-.75,1.3)],.025,n,f);this.tube([new L(d*.85,-1.2,-.6),new L(d*1.1,-1.7,-.4),new L(d*1.1,-1.7,1.1)],.055,e),this.add(new Fn(.21,.21,.5,24),t,this.model,d*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new Zn(.12,12,8),i,this.model,d*.87,-.5,1.06)}let h=new Float32Array(650*3);for(let d=0;d<650;d++)h[d*3]=(gp(d*3)-.5)*14,h[d*3+1]=(gp(d*3+1)-.5)*14,h[d*3+2]=(gp(d*3+2)-.5)*8-2;let u=new Bt;u.setAttribute("position",new ln(h,3)),this.particles=new Rr(u,new Qr({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let e=new vt({color:13673053,metalness:.95,roughness:.25}),t=new vt({color:13221281,metalness:.9,roughness:.3}),n=new vt({color:4867381,metalness:.85,roughness:.27}),i=new vt({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new Zn(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new Tn(.686,.005,4,96),e);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new _n;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new Tn(l,o===5?.055:.029,8,128),o%2?e:t,a),o===5&&this.add(new Tn(l+.1,.012,6,128),e,a);for(let c=0;c<72;c++){let h=c*Math.PI/36,u=l+(c%6===0?.055:.027),d=this.add(new kt(.008,c%6===0?.09:.035,.018),n,a,Math.sin(h)*u,Math.cos(h)*u,0);d.rotation.z=-h}this.add(new Zn(.07+o*.013,16,12),o%2?e:t,a,l,0,0)}let s=this.add(new Fn(.055,.1,1.2,24),e,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new Fn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new Fn(.62,.62,.04,64),e,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let e=this.host.getBoundingClientRect();e.width<1||e.height<1||(this.camera.aspect=e.width/e.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(e.width,e.height,!1),this.render(0,!0))}render(e,t=!1){if(!this.renderer||this.disposed||!t&&(!this.visible||document.hidden||e-this.last<1/30))return;this.last=e;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(e*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(e=>{(e instanceof Ct||e instanceof Rr)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var cs=(r,e,t)=>be.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function _p(r){be.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),be.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function N1(r,e){be.set(".pl-descent-copy",{autoAlpha:0});let t={value:0},n=document.querySelector(".pl-depth-number");cs(".pl-hero",3.8,e).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:e?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(t,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(t.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:e?17:7,xPercent:e?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),_p(".pl-intro"),be.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),cs(".pl-survey-pin",3.6,e).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:e?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),be.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),cs(".pl-life-pin",4,e).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),be.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function F1(r,e){be.set(".he-unfold-copy",{autoAlpha:0}),cs(".he-hero",3.8,e).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:e?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:e?15:6,yPercent:e?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),_p(".he-prologue"),be.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),be.set(".he-totality",{autoAlpha:0}),cs(".he-eclipse-pin",4.5,e).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=be.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});be.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{be.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),be.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),be.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),be.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function U1(r){be.set(".af-through-copy",{autoAlpha:0}),cs(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),_p(".af-intro"),cs(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),be.set(".af-select-frame",{autoAlpha:0}),cs(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),be.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function e_(r,e,t){r==="pelagic"&&e?N1(e,t):r==="heliograph"&&e?F1(e,t):r==="afterimage"&&U1(t)}var O1=[{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]}];function t_(r){return O1.some(e=>e.id===r)}be.registerPlugin(et);et.config({ignoreMobileResize:!0});var Pu=document.querySelector(".mt-page"),Jn=Pu?.dataset.template,Pl=r=>{parent!==window&&parent.postMessage(r,"*")};function B1(r,e){be.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),be.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:e?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:e?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),be.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),be.fromTo(".ae-reveal em",{x:e?30:150},{x:e?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),be.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),be.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),be.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:e?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),be.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),be.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),be.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function k1(r,e){be.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(e?75:130):e?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),be.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(e?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=be.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(e?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{be.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),be.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),be.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),be.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(e?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),be.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),be.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function z1(r,e){be.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,be.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:e?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),be.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),be.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),be.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),be.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(e?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:e?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:e?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),be.from(".fl-season",{rotationY:e?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),be.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),be.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),be.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function V1(r,e){be.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),be.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(e?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:e?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:e?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),be.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),be.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),be.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:e?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),be.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),be.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),be.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),be.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),be.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),Pl({type:"motion-back",id:Jn})),r.key==="Tab"){let e=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===e.at(-1)?(r.preventDefault(),Pl({type:"motion-focus",id:Jn,direction:"next"})):r.shiftKey&&document.activeElement===e[0]&&(r.preventDefault(),Pl({type:"motion-focus",id:Jn,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(Pu&&t_(Jn)){let r=be.matchMedia(),e=-1;document.fonts.ready.then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},t=>{let n=!!t.conditions?.reduce,i=!!t.conditions?.mobile;Pu.classList.toggle("mt-reduced",n);let s=Pu.querySelector(".mt-scene,.ns-scene"),o=s?Jn==="pelagic"||Jn==="heliograph"?new Ru(s,Jn,n):new Cu(s,Jn,n):void 0,a=u=>o?.render(u);n?o&&(o.pose.bloom=1,o.render(0)):(be.ticker.add(a),Jn==="aether"&&o?B1(o,i):Jn==="offscript"&&o?k1(o,i):Jn==="floraison"&&o?z1(o,i):Jn==="monolith"&&o?V1(o,i):e_(Jn,o,i),be.utils.toArray(".mt-reveal").forEach(u=>be.from(u,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:u,start:"top 85%",end:"top 30%",scrub:.8}})),be.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let l=et.create({start:0,end:"max",onUpdate:u=>{be.set(".mt-progress i",{scaleX:u.progress}),Math.abs(e-u.progress)>.005&&(e=u.progress,Pl({type:"motion-progress",id:Jn,progress:u.progress}))}}),c=!1,h=()=>{c||(c=!0,be.ticker.remove(a),o?.dispose(),l.kill())};return window.addEventListener("pagehide",h,{once:!0}),requestAnimationFrame(()=>{et.refresh(),document.documentElement.dataset.motionReady="true",Pl({type:"motion-ready",id:Jn})}),()=>{h(),window.removeEventListener("pagehide",h)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
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
