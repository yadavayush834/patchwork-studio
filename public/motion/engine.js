"use strict";(()=>{var dg=0,gp=1,fg=2;var fc=1,Eh=2,Ba=3,as=0,In=1,Sn=2,or=0,xo=1,ks=2,_p=3,xp=4,pg=5,Ds=100,mg=101,gg=102,_g=103,xg=104,vg=200,yg=201,bg=202,Mg=203,Yu=204,$u=205,Eg=206,Sg=207,Tg=208,wg=209,Ag=210,Rg=211,Cg=212,Pg=213,Ig=214,Sh=0,Th=1,wh=2,vo=3,Ah=4,Rh=5,Ch=6,Ph=7,Ih=0,Lg=1,Dg=2,Ar=0,pc=1,mc=2,gc=3,Vi=4,_c=5,xc=6,vc=7;var vp=300,Hs=301,wo=302,Lh=303,Dh=304,yc=306,wa=1e3,Ur=1001,Zu=1002,jt=1003,Fg=1004;var bc=1005;var Zn=1006,Fh=1007;var zs=1008;var Pi=1009,yp=1010,bp=1011,ka=1012,Nh=1013,Rr=1014,ar=1015,Tn=1016,Uh=1017,Oh=1018,Ha=1020,Mp=35902,Ep=35899,Sp=1021,Tp=1022,lr=1023,Br=1026,Vs=1027,Bh=1028,kh=1029,Ao=1030,Hh=1031;var zh=1033,Mc=33776,Ec=33777,Sc=33778,Tc=33779,Vh=35840,Gh=35841,Wh=35842,Xh=35843,qh=36196,Yh=37492,$h=37496,Zh=37488,Jh=37489,Kh=37490,jh=37491,Qh=37808,ed=37809,td=37810,nd=37811,id=37812,rd=37813,sd=37814,od=37815,ad=37816,ld=37817,cd=37818,ud=37819,hd=37820,dd=37821,fd=36492,pd=36494,md=36495,gd=36283,_d=36284,xd=36285,vd=36286;var Fl=2300,Ju=2301,qu=2302,rp=2400,sp=2401,op=2402;var Ng=3200;var yd=0,Ug=1,fs="",Zt="srgb",br="srgb-linear",Nl="linear",kt="srgb";var _o=7680;var ap=519,Og=512,Bg=513,kg=514,bd=515,Hg=516,zg=517,Md=518,Vg=519,Ku=35044;var wp="300 es",yr=2e3,Ul=2001;function Ap(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function ly(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Ol(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Gg(){let r=Ol("canvas");return r.style.display="block",r}var I0={},Aa=null;function Bl(...r){let e="THREE."+r.shift();Aa?Aa("log",e,...r):console.log(e,...r)}function ut(...r){let e="THREE."+r.shift();Aa?Aa("warn",e,...r):console.warn(e,...r)}function mt(...r){let e="THREE."+r.shift();Aa?Aa("error",e,...r):console.error(e,...r)}function Ra(...r){let e=r.join(" ");e in I0||(I0[e]=!0,ut(...r))}function Wg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var ls=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},ri=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],L0=1234567,Pl=Math.PI/180,Ca=180/Math.PI;function Or(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ri[r&255]+ri[r>>8&255]+ri[r>>16&255]+ri[r>>24&255]+"-"+ri[e&255]+ri[e>>8&255]+"-"+ri[e>>16&15|64]+ri[e>>24&255]+"-"+ri[t&63|128]+ri[t>>8&255]+"-"+ri[t>>16&255]+ri[t>>24&255]+ri[n&255]+ri[n>>8&255]+ri[n>>16&255]+ri[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Rp(r,e){return(r%e+e)%e}function cy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function uy(r,e,t){return r!==e?(t-r)/(e-r):0}function Il(r,e,t){return(1-t)*r+t*e}function hy(r,e,t,n){return Il(r,e,1-Math.exp(-t*n))}function dy(r,e=1){return e-Math.abs(Rp(r,e*2)-e)}function fy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function py(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function my(r,e){return r+Math.floor(Math.random()*(e-r+1))}function gy(r,e){return r+Math.random()*(e-r)}function _y(r){return r*(.5-Math.random())}function xy(r){r!==void 0&&(L0=r);let e=L0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function vy(r){return r*Pl}function yy(r){return r*Ca}function by(r){return(r&r-1)===0&&r!==0}function My(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Ey(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Sy(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:ut("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function vr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function $t(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Ro={DEG2RAD:Pl,RAD2DEG:Ca,generateUUID:Or,clamp:St,euclideanModulo:Rp,mapLinear:cy,inverseLerp:uy,lerp:Il,damp:hy,pingpong:dy,smoothstep:fy,smootherstep:py,randInt:my,randFloat:gy,randFloatSpread:_y,seededRandom:xy,degToRad:vy,radToDeg:yy,isPowerOfTwo:by,ceilPowerOfTwo:My,floorPowerOfTwo:Ey,setQuaternionFromProperEuler:Sy,normalize:$t,denormalize:vr},ye=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},hn=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==g){let _=l*f+c*d+h*g+u*p;_<0&&(f=-f,d=-d,g=-g,p=-p,_=-_);let m=1-a;if(_<.9995){let y=Math.acos(_),x=Math.sin(y);m=Math.sin(m*y)/x,a=Math.sin(a*y)/x,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+p*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+p*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(D0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(D0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return If.copy(this).projectOnVector(e),this.sub(If)}reflect(e){return this.sub(If.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},If=new I,D0=new hn,yt=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],p=i[0],_=i[3],m=i[6],y=i[1],x=i[4],v=i[7],M=i[2],S=i[5],w=i[8];return s[0]=o*p+a*y+l*M,s[3]=o*_+a*x+l*S,s[6]=o*m+a*v+l*w,s[1]=c*p+h*y+u*M,s[4]=c*_+h*x+u*S,s[7]=c*m+h*v+u*w,s[2]=f*p+d*y+g*M,s[5]=f*_+d*x+g*S,s[8]=f*m+d*v+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Lf.makeScale(e,t)),this}rotate(e){return this.premultiply(Lf.makeRotation(-e)),this}translate(e,t){return this.premultiply(Lf.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Lf=new yt,F0=new yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),N0=new yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ty(){let r={enabled:!0,workingColorSpace:br,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===kt&&(i.r=os(i.r),i.g=os(i.g),i.b=os(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===kt&&(i.r=Sa(i.r),i.g=Sa(i.g),i.b=Sa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fs?Nl:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ra("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ra("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[br]:{primaries:e,whitePoint:n,transfer:Nl,toXYZ:F0,fromXYZ:N0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Zt},outputColorSpaceConfig:{drawingBufferColorSpace:Zt}},[Zt]:{primaries:e,whitePoint:n,transfer:kt,toXYZ:F0,fromXYZ:N0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Zt}}}),r}var Pt=Ty();function os(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var aa,ju=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{aa===void 0&&(aa=Ol("canvas")),aa.width=e.width,aa.height=e.height;let i=aa.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=aa}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Ol("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=os(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(os(t[n]/255)*255):t[n]=os(t[n]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},wy=0,Pa=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wy++}),this.uuid=Or(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Df(i[o].image)):s.push(Df(i[o]))}else s=Df(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Df(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?ju.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}var Ay=0,Ff=new I,Un=class r extends ls{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Ur,i=Ur,s=Zn,o=zs,a=lr,l=Pi,c=r.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ay++}),this.uuid=Or(),this.name="",this.source=new Pa(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ye(0,0),this.repeat=new ye(1,1),this.center=new ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ff).x}get height(){return this.source.getSize(Ff).y}get depth(){return this.source.getSize(Ff).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case wa:e.x=e.x-Math.floor(e.x);break;case Ur:e.x=e.x<0?0:1;break;case Zu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case wa:e.y=e.y-Math.floor(e.y);break;case Ur:e.y=e.y<0?0:1;break;case Zu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=vp;Un.DEFAULT_ANISOTROPY=1;var gn=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],p=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+_)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(d+1)/2,M=(m+1)/2,S=(h+f)/4,w=(u+p)/4,C=(g+_)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=S/n,s=w/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=S/i,s=C/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=C/s),this.set(n,i,s,t),this}let y=Math.sqrt((_-g)*(_-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(_-g)/y,this.y=(u-p)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},Qu=class extends ls{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Un(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Pa(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},un=class extends Qu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},kl=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var eh=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=jt,this.minFilter=jt,this.wrapR=Ur,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var kr=class{constructor(e=new I(1/0,1/0,1/0),t=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gr.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gr.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=gr.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gr):gr.fromBufferAttribute(s,o),gr.applyMatrix4(e.matrixWorld),this.expandByPoint(gr);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),_u.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),_u.copy(n.boundingBox)),_u.applyMatrix4(e.matrixWorld),this.union(_u)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gr),gr.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vl),xu.subVectors(this.max,vl),la.subVectors(e.a,vl),ca.subVectors(e.b,vl),ua.subVectors(e.c,vl),As.subVectors(ca,la),Rs.subVectors(ua,ca),fo.subVectors(la,ua);let t=[0,-As.z,As.y,0,-Rs.z,Rs.y,0,-fo.z,fo.y,As.z,0,-As.x,Rs.z,0,-Rs.x,fo.z,0,-fo.x,-As.y,As.x,0,-Rs.y,Rs.x,0,-fo.y,fo.x,0];return!Nf(t,la,ca,ua,xu)||(t=[1,0,0,0,1,0,0,0,1],!Nf(t,la,ca,ua,xu))?!1:(vu.crossVectors(As,Rs),t=[vu.x,vu.y,vu.z],Nf(t,la,ca,ua,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gr).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gr).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(es[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),es[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),es[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),es[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),es[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),es[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),es[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),es[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(es),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},es=[new I,new I,new I,new I,new I,new I,new I,new I],gr=new I,_u=new kr,la=new I,ca=new I,ua=new I,As=new I,Rs=new I,fo=new I,vl=new I,xu=new I,vu=new I,po=new I;function Nf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){po.fromArray(r,s);let a=i.x*Math.abs(po.x)+i.y*Math.abs(po.y)+i.z*Math.abs(po.z),l=e.dot(po),c=t.dot(po),h=n.dot(po);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Ry=new kr,yl=new I,Uf=new I,Hr=class{constructor(e=new I,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Ry.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;yl.subVectors(e,this.center);let t=yl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(yl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Uf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(yl.copy(e.center).add(Uf)),this.expandByPoint(yl.copy(e.center).sub(Uf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},ts=new I,Of=new I,yu=new I,Cs=new I,Bf=new I,bu=new I,kf=new I,Ia=class{constructor(e=new I,t=new I(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ts)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=ts.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ts.copy(this.origin).addScaledVector(this.direction,t),ts.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Of.copy(e).add(t).multiplyScalar(.5),yu.copy(t).sub(e).normalize(),Cs.copy(this.origin).sub(Of);let s=e.distanceTo(t)*.5,o=-this.direction.dot(yu),a=Cs.dot(this.direction),l=-Cs.dot(yu),c=Cs.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let p=1/h;u*=p,f*=p,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Of).addScaledVector(yu,f),d}intersectSphere(e,t){ts.subVectors(e.center,this.origin);let n=ts.dot(this.direction),i=ts.dot(ts)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,ts)!==null}intersectTriangle(e,t,n,i,s){Bf.subVectors(t,e),bu.subVectors(n,e),kf.crossVectors(Bf,bu);let o=this.direction.dot(kf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Cs.subVectors(this.origin,e);let l=a*this.direction.dot(bu.crossVectors(Cs,bu));if(l<0)return null;let c=a*this.direction.dot(Bf.cross(Cs));if(c<0||l+c>o)return null;let h=-a*Cs.dot(kf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Ct=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=p,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/ha.setFromMatrixColumn(e,0).length(),s=1/ha.setFromMatrixColumn(e,1).length(),o=1/ha.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-p*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cy,e,Py)}lookAt(e,t,n){let i=this.elements;return Oi.subVectors(e,t),Oi.lengthSq()===0&&(Oi.z=1),Oi.normalize(),Ps.crossVectors(n,Oi),Ps.lengthSq()===0&&(Math.abs(n.z)===1?Oi.x+=1e-4:Oi.z+=1e-4,Oi.normalize(),Ps.crossVectors(n,Oi)),Ps.normalize(),Mu.crossVectors(Oi,Ps),i[0]=Ps.x,i[4]=Mu.x,i[8]=Oi.x,i[1]=Ps.y,i[5]=Mu.y,i[9]=Oi.y,i[2]=Ps.z,i[6]=Mu.z,i[10]=Oi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],p=n[6],_=n[10],m=n[14],y=n[3],x=n[7],v=n[11],M=n[15],S=i[0],w=i[4],C=i[8],b=i[12],E=i[1],P=i[5],N=i[9],B=i[13],H=i[2],Z=i[6],W=i[10],X=i[14],O=i[3],V=i[7],A=i[11],K=i[15];return s[0]=o*S+a*E+l*H+c*O,s[4]=o*w+a*P+l*Z+c*V,s[8]=o*C+a*N+l*W+c*A,s[12]=o*b+a*B+l*X+c*K,s[1]=h*S+u*E+f*H+d*O,s[5]=h*w+u*P+f*Z+d*V,s[9]=h*C+u*N+f*W+d*A,s[13]=h*b+u*B+f*X+d*K,s[2]=g*S+p*E+_*H+m*O,s[6]=g*w+p*P+_*Z+m*V,s[10]=g*C+p*N+_*W+m*A,s[14]=g*b+p*B+_*X+m*K,s[3]=y*S+x*E+v*H+M*O,s[7]=y*w+x*P+v*Z+M*V,s[11]=y*C+x*N+v*W+M*A,s[15]=y*b+x*B+v*X+M*K,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],p=e[7],_=e[11],m=e[15],y=l*d-c*f,x=a*d-c*u,v=a*f-l*u,M=o*d-c*h,S=o*f-l*h,w=o*u-a*h;return t*(p*y-_*x+m*v)-n*(g*y-_*M+m*S)+i*(g*x-p*M+m*w)-s*(g*v-p*S+_*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],p=e[13],_=e[14],m=e[15],y=u*_*c-p*f*c+p*l*d-a*_*d-u*l*m+a*f*m,x=g*f*c-h*_*c-g*l*d+o*_*d+h*l*m-o*f*m,v=h*p*c-g*u*c+g*a*d-o*p*d-h*a*m+o*u*m,M=g*u*l-h*p*l-g*a*f+o*p*f+h*a*_-o*u*_,S=t*y+n*x+i*v+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=y*w,e[1]=(p*f*s-u*_*s-p*i*d+n*_*d+u*i*m-n*f*m)*w,e[2]=(a*_*s-p*l*s+p*i*c-n*_*c-a*i*m+n*l*m)*w,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=x*w,e[5]=(h*_*s-g*f*s+g*i*d-t*_*d-h*i*m+t*f*m)*w,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*w,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=v*w,e[9]=(g*u*s-h*p*s-g*n*d+t*p*d+h*n*m-t*u*m)*w,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*m+t*a*m)*w,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=M*w,e[13]=(h*p*i-g*u*i+g*n*f-t*p*f-h*n*_+t*u*_)*w,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*_-t*a*_)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,p=o*h,_=o*u,m=a*u,y=l*c,x=l*h,v=l*u,M=n.x,S=n.y,w=n.z;return i[0]=(1-(p+m))*M,i[1]=(d+v)*M,i[2]=(g-x)*M,i[3]=0,i[4]=(d-v)*S,i[5]=(1-(f+m))*S,i[6]=(_+y)*S,i[7]=0,i[8]=(g+x)*w,i[9]=(_-y)*w,i[10]=(1-(f+p))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=ha.set(i[0],i[1],i[2]).length(),o=ha.set(i[4],i[5],i[6]).length(),a=ha.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),_r.copy(this);let c=1/s,h=1/o,u=1/a;return _r.elements[0]*=c,_r.elements[1]*=c,_r.elements[2]*=c,_r.elements[4]*=h,_r.elements[5]*=h,_r.elements[6]*=h,_r.elements[8]*=u,_r.elements[9]*=u,_r.elements[10]*=u,t.setFromRotationMatrix(_r),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=yr,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,p;if(l)g=s/(o-s),p=o*s/(o-s);else if(a===yr)g=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Ul)g=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=yr,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,p;if(l)g=1/(o-s),p=o/(o-s);else if(a===yr)g=-2/(o-s),p=-(o+s)/(o-s);else if(a===Ul)g=-1/(o-s),p=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},ha=new I,_r=new Ct,Cy=new I(0,0,0),Py=new I(1,1,1),Ps=new I,Mu=new I,Oi=new I,U0=new Ct,O0=new hn,Wn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return U0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(U0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return O0.setFromEuler(this),this.setFromQuaternion(O0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Wn.DEFAULT_ORDER="XYZ";var Hl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Iy=0,B0=new I,da=new hn,ns=new Ct,Eu=new I,bl=new I,Ly=new I,Dy=new hn,k0=new I(1,0,0),H0=new I(0,1,0),z0=new I(0,0,1),V0={type:"added"},Fy={type:"removed"},fa={type:"childadded",child:null},Hf={type:"childremoved",child:null},_n=class r extends ls{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new I,t=new Wn,n=new hn,i=new I(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ct},normalMatrix:{value:new yt}}),this.matrix=new Ct,this.matrixWorld=new Ct,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.multiply(da),this}rotateOnWorldAxis(e,t){return da.setFromAxisAngle(e,t),this.quaternion.premultiply(da),this}rotateX(e){return this.rotateOnAxis(k0,e)}rotateY(e){return this.rotateOnAxis(H0,e)}rotateZ(e){return this.rotateOnAxis(z0,e)}translateOnAxis(e,t){return B0.copy(e).applyQuaternion(this.quaternion),this.position.add(B0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(k0,e)}translateY(e){return this.translateOnAxis(H0,e)}translateZ(e){return this.translateOnAxis(z0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ns.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Eu.copy(e):Eu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),bl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ns.lookAt(bl,Eu,this.up):ns.lookAt(Eu,bl,this.up),this.quaternion.setFromRotationMatrix(ns),i&&(ns.extractRotation(i.matrixWorld),da.setFromRotationMatrix(ns),this.quaternion.premultiply(da.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(mt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(V0),fa.child=e,this.dispatchEvent(fa),fa.child=null):mt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Fy),Hf.child=e,this.dispatchEvent(Hf),Hf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ns.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ns.multiply(e.parent.matrixWorld)),e.applyMatrix4(ns),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(V0),fa.child=e,this.dispatchEvent(fa),fa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,e,Ly),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bl,Dy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};_n.DEFAULT_UP=new I(0,1,0);_n.DEFAULT_MATRIX_AUTO_UPDATE=!0;_n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var xr=new I,is=new I,zf=new I,rs=new I,pa=new I,ma=new I,G0=new I,Vf=new I,Gf=new I,Wf=new I,Xf=new gn,qf=new gn,Yf=new gn,ss=class r{constructor(e=new I,t=new I,n=new I){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),xr.subVectors(e,t),i.cross(xr);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){xr.subVectors(i,t),is.subVectors(n,t),zf.subVectors(e,t);let o=xr.dot(xr),a=xr.dot(is),l=xr.dot(zf),c=is.dot(is),h=is.dot(zf),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,rs)===null?!1:rs.x>=0&&rs.y>=0&&rs.x+rs.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,rs)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,rs.x),l.addScaledVector(o,rs.y),l.addScaledVector(a,rs.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Xf.setScalar(0),qf.setScalar(0),Yf.setScalar(0),Xf.fromBufferAttribute(e,t),qf.fromBufferAttribute(e,n),Yf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Xf,s.x),o.addScaledVector(qf,s.y),o.addScaledVector(Yf,s.z),o}static isFrontFacing(e,t,n,i){return xr.subVectors(n,t),is.subVectors(e,t),xr.cross(is).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return xr.subVectors(this.c,this.b),is.subVectors(this.a,this.b),xr.cross(is).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;pa.subVectors(i,n),ma.subVectors(s,n),Vf.subVectors(e,n);let l=pa.dot(Vf),c=ma.dot(Vf);if(l<=0&&c<=0)return t.copy(n);Gf.subVectors(e,i);let h=pa.dot(Gf),u=ma.dot(Gf);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(pa,o);Wf.subVectors(e,s);let d=pa.dot(Wf),g=ma.dot(Wf);if(g>=0&&d<=g)return t.copy(s);let p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ma,a);let _=h*g-d*u;if(_<=0&&u-h>=0&&d-g>=0)return G0.subVectors(s,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(G0,a);let m=1/(_+p+f);return o=p*m,a=f*m,t.copy(n).addScaledVector(pa,o).addScaledVector(ma,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Xg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Is={h:0,s:0,l:0},Su={h:0,s:0,l:0};function $f(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Te=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Zt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Pt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Pt.workingColorSpace){if(e=Rp(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=$f(o,s,e+1/3),this.g=$f(o,s,e),this.b=$f(o,s,e-1/3)}return Pt.colorSpaceToWorking(this,i),this}setStyle(e,t=Zt){function n(s){s!==void 0&&parseFloat(s)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Zt){let n=Xg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Zt){return Pt.workingToColorSpace(si.copy(this),e),Math.round(St(si.r*255,0,255))*65536+Math.round(St(si.g*255,0,255))*256+Math.round(St(si.b*255,0,255))}getHexString(e=Zt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(si.copy(this),t);let n=si.r,i=si.g,s=si.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(si.copy(this),t),e.r=si.r,e.g=si.g,e.b=si.b,e}getStyle(e=Zt){Pt.workingToColorSpace(si.copy(this),e);let t=si.r,n=si.g,i=si.b;return e!==Zt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Is),this.setHSL(Is.h+e,Is.s+t,Is.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Is),e.getHSL(Su);let n=Il(Is.h,Su.h,t),i=Il(Is.s,Su.s,t),s=Il(Is.l,Su.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},si=new Te;Te.NAMES=Xg;var Ny=0,ki=class extends ls{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ny++}),this.uuid=Or(),this.name="",this.type="Material",this.blending=xo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Yu,this.blendDst=$u,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Te(0,0,0),this.blendAlpha=0,this.depthFunc=vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ap,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_o,this.stencilZFail=_o,this.stencilZPass=_o,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==as&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Yu&&(n.blendSrc=this.blendSrc),this.blendDst!==$u&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ap&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==_o&&(n.stencilFail=this.stencilFail),this.stencilZFail!==_o&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==_o&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Pn=class extends ki{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new I,Tu=new ye,Uy=0,Vt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ku,this.updateRanges=[],this.gpuType=ar,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Tu.fromBufferAttribute(this,t),Tu.applyMatrix3(e),this.setXY(t,Tu.x,Tu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=vr(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=vr(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=vr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=vr(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ku&&(e.usage=this.usage),e}};var zl=class extends Vt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Vl=class extends Vt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Vt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Oy=0,ir=new Ct,Zf=new _n,ga=new I,Bi=new kr,Ml=new kr,Gn=new I,xt=class r extends ls{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ap(e)?Vl:zl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new yt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ir.makeRotationFromQuaternion(e),this.applyMatrix4(ir),this}rotateX(e){return ir.makeRotationX(e),this.applyMatrix4(ir),this}rotateY(e){return ir.makeRotationY(e),this.applyMatrix4(ir),this}rotateZ(e){return ir.makeRotationZ(e),this.applyMatrix4(ir),this}translate(e,t,n){return ir.makeTranslation(e,t,n),this.applyMatrix4(ir),this}scale(e,t,n){return ir.makeScale(e,t,n),this.applyMatrix4(ir),this}lookAt(e){return Zf.lookAt(e),Zf.updateMatrix(),this.applyMatrix4(Zf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ga).negate(),this.translate(ga.x,ga.y,ga.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new kr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Bi.setFromBufferAttribute(s),this.morphTargetsRelative?(Gn.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(Gn),Gn.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(Gn)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&mt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){mt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(e){let n=this.boundingSphere.center;if(Bi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];Ml.setFromBufferAttribute(a),this.morphTargetsRelative?(Gn.addVectors(Bi.min,Ml.min),Bi.expandByPoint(Gn),Gn.addVectors(Bi.max,Ml.max),Bi.expandByPoint(Gn)):(Bi.expandByPoint(Ml.min),Bi.expandByPoint(Ml.max))}Bi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Gn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Gn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Gn.fromBufferAttribute(a,c),l&&(ga.fromBufferAttribute(e,c),Gn.add(ga)),i=Math.max(i,n.distanceToSquared(Gn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&mt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){mt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Vt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new I,l[C]=new I;let c=new I,h=new I,u=new I,f=new ye,d=new ye,g=new ye,p=new I,_=new I;function m(C,b,E){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,C),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let P=1/(d.x*g.y-g.x*d.y);isFinite(P)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(P),_.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(P),a[C].add(p),a[b].add(p),a[E].add(p),l[C].add(_),l[b].add(_),l[E].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let C=0,b=y.length;C<b;++C){let E=y[C],P=E.start,N=E.count;for(let B=P,H=P+N;B<H;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let x=new I,v=new I,M=new I,S=new I;function w(C){M.fromBufferAttribute(i,C),S.copy(M);let b=a[C];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(S,b);let P=v.dot(l[C])<0?-1:1;o.setXYZW(C,x.x,x.y,x.z,P)}for(let C=0,b=y.length;C<b;++C){let E=y[C],P=E.start,N=E.count;for(let B=P,H=P+N;B<H;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Vt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new I,s=new I,o=new I,a=new I,l=new I,c=new I,h=new I,u=new I;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),p=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Gn.fromBufferAttribute(e,t),Gn.normalize(),e.setXYZ(t,Gn.x,Gn.y,Gn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let p=0,_=l.length;p<_;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Vt(f,h,u)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},W0=new Ct,mo=new Ia,wu=new Hr,X0=new I,Au=new I,Ru=new I,Cu=new I,Jf=new I,Pu=new I,q0=new I,Iu=new I,$e=class extends _n{constructor(e=new xt,t=new Pn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Pu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Jf.fromBufferAttribute(u,e),o?Pu.addScaledVector(Jf,h):Pu.addScaledVector(Jf.sub(t),h))}t.add(Pu)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),wu.copy(n.boundingSphere),wu.applyMatrix4(s),mo.copy(e.ray).recast(e.near),!(wu.containsPoint(mo.origin)===!1&&(mo.intersectSphere(wu,X0)===null||mo.origin.distanceToSquared(X0)>(e.far-e.near)**2))&&(W0.copy(s).invert(),mo.copy(e.ray).applyMatrix4(W0),!(n.boundingBox!==null&&mo.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,mo)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=f.length;g<p;g++){let _=f[g],m=o[_.materialIndex],y=Math.max(_.start,d.start),x=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){let S=a.getX(v),w=a.getX(v+1),C=a.getX(v+2);i=Lu(this,m,e,n,c,h,u,S,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let _=g,m=p;_<m;_+=3){let y=a.getX(_),x=a.getX(_+1),v=a.getX(_+2);i=Lu(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,p=f.length;g<p;g++){let _=f[g],m=o[_.materialIndex],y=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){let S=v,w=v+1,C=v+2;i=Lu(this,m,e,n,c,h,u,S,w,C),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let _=g,m=p;_<m;_+=3){let y=_,x=_+1,v=_+2;i=Lu(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function By(r,e,t,n,i,s,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===as,a),l===null)return null;Iu.copy(a),Iu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Iu);return c<t.near||c>t.far?null:{distance:c,point:Iu.clone(),object:r}}function Lu(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Au),r.getVertexPosition(l,Ru),r.getVertexPosition(c,Cu);let h=By(r,e,t,n,Au,Ru,Cu,q0);if(h){let u=new I;ss.getBarycoord(q0,Au,Ru,Cu,u),i&&(h.uv=ss.getInterpolatedAttribute(i,a,l,c,u,new ye)),s&&(h.uv1=ss.getInterpolatedAttribute(s,a,l,c,u,new ye)),o&&(h.normal=ss.getInterpolatedAttribute(o,a,l,c,u,new I),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new I,materialIndex:0};ss.getNormal(Au,Ru,Cu,f.normal),h.face=f,h.barycoord=u}return h}var Gt=class r extends xt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(p,_,m,y,x,v,M,S,w,C,b){let E=v/w,P=M/C,N=v/2,B=M/2,H=S/2,Z=w+1,W=C+1,X=0,O=0,V=new I;for(let A=0;A<W;A++){let K=A*P-B;for(let ce=0;ce<Z;ce++){let pe=ce*E-N;V[p]=pe*y,V[_]=K*x,V[m]=H,c.push(V.x,V.y,V.z),V[p]=0,V[_]=0,V[m]=S>0?1:-1,h.push(V.x,V.y,V.z),u.push(ce/w),u.push(1-A/C),X+=1}}for(let A=0;A<C;A++)for(let K=0;K<w;K++){let ce=f+K+Z*A,pe=f+K+Z*(A+1),Ee=f+(K+1)+Z*(A+1),Be=f+(K+1)+Z*A;l.push(ce,pe,Be),l.push(pe,Ee,Be),O+=6}a.addGroup(d,O,b),d+=O,f+=X}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Co(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ai(r){let e={};for(let t=0;t<r.length;t++){let n=Co(r[t]);for(let i in n)e[i]=n[i]}return e}function ky(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Cp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}var ps={clone:Co,merge:ai},Hy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,zy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends ki{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Hy,this.fragmentShader=zy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Co(e.uniforms),this.uniformsGroups=ky(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Gl=class extends _n{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ct,this.projectionMatrix=new Ct,this.projectionMatrixInverse=new Ct,this.coordinateSystem=yr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ls=new I,Y0=new ye,$0=new ye,Ht=class extends Gl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ca*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Pl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ca*2*Math.atan(Math.tan(Pl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ls.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z),Ls.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ls.x,Ls.y).multiplyScalar(-e/Ls.z)}getViewSize(e,t){return this.getViewBounds(e,Y0,$0),t.subVectors($0,Y0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Pl*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},_a=-90,xa=1,th=class extends _n{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(_a,xa,e,t);i.layers=this.layers,this.add(i);let s=new Ht(_a,xa,e,t);s.layers=this.layers,this.add(s);let o=new Ht(_a,xa,e,t);o.layers=this.layers,this.add(o);let a=new Ht(_a,xa,e,t);a.layers=this.layers,this.add(a);let l=new Ht(_a,xa,e,t);l.layers=this.layers,this.add(l);let c=new Ht(_a,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===yr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ul)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Wl=class extends Un{constructor(e=[],t=Hs,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Xl=class extends un{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Wl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),s=new Nt({name:"CubemapFromEquirect",uniforms:Co(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:or});s.uniforms.tEquirect.value=t;let o=new $e(i,s),a=t.minFilter;return t.minFilter===zs&&(t.minFilter=Zn),new th(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},Je=class extends _n{constructor(){super(),this.isGroup=!0,this.type="Group"}},Vy={type:"move"},La=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Je,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Je,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Je,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let _=t.getJointPose(p,n),m=this._getHandJoint(c,p);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Vy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new Je;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var cs=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Te(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},sn=class extends _n{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wn,this.environmentIntensity=1,this.environmentRotation=new Wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},nh=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ku,this.updateRanges=[],this.version=0,this.uuid=Or()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Or()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},_i=new I,ql=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyMatrix4(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.applyNormalMatrix(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_i.fromBufferAttribute(this,t),_i.transformDirection(e),this.setXYZ(t,_i.x,_i.y,_i.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=vr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=$t(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=vr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=vr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=vr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=vr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=$t(t,this.array),n=$t(n,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Bl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Vt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Fs=class extends ki{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},va,El=new I,ya=new I,ba=new I,Ma=new ye,Sl=new ye,qg=new Ct,Du=new I,Tl=new I,Fu=new I,Z0=new ye,Kf=new ye,J0=new ye,Ns=class extends _n{constructor(e=new Fs){if(super(),this.isSprite=!0,this.type="Sprite",va===void 0){va=new xt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new nh(t,5);va.setIndex([0,1,2,0,2,3]),va.setAttribute("position",new ql(n,3,0,!1)),va.setAttribute("uv",new ql(n,2,3,!1))}this.geometry=va,this.material=e,this.center=new ye(.5,.5),this.count=1}raycast(e,t){e.camera===null&&mt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ya.setFromMatrixScale(this.matrixWorld),qg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ba.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ya.multiplyScalar(-ba.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Nu(Du.set(-.5,-.5,0),ba,o,ya,i,s),Nu(Tl.set(.5,-.5,0),ba,o,ya,i,s),Nu(Fu.set(.5,.5,0),ba,o,ya,i,s),Z0.set(0,0),Kf.set(1,0),J0.set(1,1);let a=e.ray.intersectTriangle(Du,Tl,Fu,!1,El);if(a===null&&(Nu(Tl.set(-.5,.5,0),ba,o,ya,i,s),Kf.set(0,1),a=e.ray.intersectTriangle(Du,Fu,Tl,!1,El),a===null))return;let l=e.ray.origin.distanceTo(El);l<e.near||l>e.far||t.push({distance:l,point:El.clone(),uv:ss.getInterpolation(El,Du,Tl,Fu,Z0,Kf,J0,new ye),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Nu(r,e,t,n,i,s){Ma.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Sl.x=s*Ma.x-i*Ma.y,Sl.y=i*Ma.x+s*Ma.y):Sl.copy(Ma),r.copy(e),r.x+=Sl.x,r.y+=Sl.y,r.applyMatrix4(qg)}var Yl=class extends Un{constructor(e=null,t=1,n=1,i,s,o,a,l,c=jt,h=jt,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var yo=class extends Vt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ea=new Ct,K0=new Ct,Uu=[],j0=new kr,Gy=new Ct,wl=new $e,Al=new Hr,Mr=class extends $e{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new yo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new kr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ea),j0.copy(e.boundingBox).applyMatrix4(Ea),this.boundingBox.union(j0)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Hr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ea),Al.copy(e.boundingSphere).applyMatrix4(Ea),this.boundingSphere.union(Al)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(wl.geometry=this.geometry,wl.material=this.material,wl.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Al.copy(this.boundingSphere),Al.applyMatrix4(n),e.ray.intersectsSphere(Al)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ea),K0.multiplyMatrices(n,Ea),wl.matrixWorld=K0,wl.raycast(e,Uu);for(let o=0,a=Uu.length;o<a;o++){let l=Uu[o];l.instanceId=s,l.object=this,t.push(l)}Uu.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new yo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Yl(new Float32Array(i*this.count),i,this.count,Bh,ar));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},jf=new I,Wy=new I,Xy=new yt,Nr=class{constructor(e=new I(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=jf.subVectors(n,t).cross(Wy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(jf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Xy.getNormalMatrix(e),i=this.coplanarPoint(jf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},go=new Hr,qy=new ye(.5,.5),Ou=new I,Da=class{constructor(e=new Nr,t=new Nr,n=new Nr,i=new Nr,s=new Nr,o=new Nr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=yr,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],p=s[9],_=s[10],m=s[11],y=s[12],x=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,m-g,M-y).normalize(),i[1].setComponents(c+o,d+h,m+g,M+y).normalize(),i[2].setComponents(c+a,d+u,m+p,M+x).normalize(),i[3].setComponents(c-a,d-u,m-p,M-x).normalize(),n)i[4].setComponents(l,f,_,v).normalize(),i[5].setComponents(c-l,d-f,m-_,M-v).normalize();else if(i[4].setComponents(c-l,d-f,m-_,M-v).normalize(),t===yr)i[5].setComponents(c+l,d+f,m+_,M+v).normalize();else if(t===Ul)i[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),go.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),go.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(go)}intersectsSprite(e){go.center.set(0,0,0);let t=qy.distanceTo(e.center);return go.radius=.7071067811865476+t,go.applyMatrix4(e.matrixWorld),this.intersectsSphere(go)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Ou.x=i.normal.x>0?e.max.x:e.min.x,Ou.y=i.normal.y>0?e.max.y:e.min.y,Ou.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ou)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var zr=class extends ki{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Te(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ih=new I,rh=new I,Q0=new Ct,Rl=new Ia,Bu=new Hr,Qf=new I,eg=new I,us=class extends _n{constructor(e=new xt,t=new zr){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)ih.fromBufferAttribute(t,i-1),rh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ih.distanceTo(rh);e.setAttribute("lineDistance",new lt(n,1))}else ut("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bu.copy(n.boundingSphere),Bu.applyMatrix4(i),Bu.radius+=s,e.ray.intersectsSphere(Bu)===!1)return;Q0.copy(i).invert(),Rl.copy(e.ray).applyMatrix4(Q0);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let p=d,_=g-1;p<_;p+=c){let m=h.getX(p),y=h.getX(p+1),x=ku(this,e,Rl,l,m,y,p);x&&t.push(x)}if(this.isLineLoop){let p=h.getX(g-1),_=h.getX(d),m=ku(this,e,Rl,l,p,_,g-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let p=d,_=g-1;p<_;p+=c){let m=ku(this,e,Rl,l,p,p+1,p);m&&t.push(m)}if(this.isLineLoop){let p=ku(this,e,Rl,l,g-1,d,g-1);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ku(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(ih.fromBufferAttribute(a,i),rh.fromBufferAttribute(a,s),t.distanceSqToSegment(ih,rh,Qf,eg)>n)return;Qf.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Qf);if(!(c<e.near||c>e.far))return{distance:c,point:eg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var tg=new I,ng=new I,$l=class extends us{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)tg.fromBufferAttribute(t,i),ng.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+tg.distanceTo(ng);e.setAttribute("lineDistance",new lt(n,1))}else ut("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Zl=class extends us{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},oi=class extends ki{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Te(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ig=new Ct,lp=new Ia,Hu=new Hr,zu=new I,Jn=class extends _n{constructor(e=new xt,t=new oi){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Hu.copy(n.boundingSphere),Hu.applyMatrix4(i),Hu.radius+=s,e.ray.intersectsSphere(Hu)===!1)return;ig.copy(i).invert(),lp.copy(e.ray).applyMatrix4(ig);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){let _=c.getX(g);zu.fromBufferAttribute(u,_),rg(zu,_,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,p=d;g<p;g++)zu.fromBufferAttribute(u,g),rg(zu,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function rg(r,e,t,n,i,s,o){let a=lp.distanceSqToPoint(r);if(a<t){let l=new I;lp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Er=class extends Un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},rr=class extends Un{constructor(e,t,n=Rr,i,s,o,a=jt,l=jt,c,h=Br,u=1){if(h!==Br&&h!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Pa(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},sh=class extends rr{constructor(e,t=Rr,n=Hs,i,s,o=jt,a=jt,l,c=Br){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Jl=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Fa=class r extends xt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+s,p=i+1,_=new I,m=new I;for(let y=0;y<=g;y++){let x=0,v=0,M=0,S=0;if(y<=n){let b=y/n,E=b*Math.PI/2;v=-h-e*Math.cos(E),M=e*Math.sin(E),S=-e*Math.cos(E),x=b*u}else if(y<=n+s){let b=(y-n)/s;v=-h+b*t,M=e,S=0,x=u+b*f}else{let b=(y-n-s)/n,E=b*Math.PI/2;v=h+e*Math.sin(E),M=e*Math.cos(E),S=e*Math.sin(E),x=u+f+b*u}let w=Math.max(0,Math.min(1,x/d)),C=0;y===0?C=.5/i:y===g&&(C=-.5/i);for(let b=0;b<=i;b++){let E=b/i,P=E*Math.PI*2,N=Math.sin(P),B=Math.cos(P);m.x=-M*B,m.y=v,m.z=M*N,a.push(m.x,m.y,m.z),_.set(-M*B,S,M*N),_.normalize(),l.push(_.x,_.y,_.z),c.push(E+C,w)}if(y>0){let b=(y-1)*p;for(let E=0;E<i;E++){let P=b+E,N=b+E+1,B=y*p+E,H=y*p+E+1;o.push(P,N,B),o.push(N,H,B)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},bo=class r extends xt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new I,h=new ye;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class r extends xt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,p=[],_=n/2,m=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function y(){let v=new I,M=new I,S=0,w=(t-e)/n;for(let C=0;C<=s;C++){let b=[],E=C/s,P=E*(t-e)+e;for(let N=0;N<=i;N++){let B=N/i,H=B*l+a,Z=Math.sin(H),W=Math.cos(H);M.x=P*Z,M.y=-E*n+_,M.z=P*W,u.push(M.x,M.y,M.z),v.set(Z,w,W).normalize(),f.push(v.x,v.y,v.z),d.push(B,1-E),b.push(g++)}p.push(b)}for(let C=0;C<i;C++)for(let b=0;b<s;b++){let E=p[b][C],P=p[b+1][C],N=p[b+1][C+1],B=p[b][C+1];(e>0||b!==0)&&(h.push(E,P,B),S+=3),(t>0||b!==s-1)&&(h.push(P,N,B),S+=3)}c.addGroup(m,S,0),m+=S}function x(v){let M=g,S=new ye,w=new I,C=0,b=v===!0?e:t,E=v===!0?1:-1;for(let N=1;N<=i;N++)u.push(0,_*E,0),f.push(0,E,0),d.push(.5,.5),g++;let P=g;for(let N=0;N<=i;N++){let H=N/i*l+a,Z=Math.cos(H),W=Math.sin(H);w.x=b*W,w.y=_*E,w.z=b*Z,u.push(w.x,w.y,w.z),f.push(0,E,0),S.x=Z*.5+.5,S.y=W*.5*E+.5,d.push(S.x,S.y),g++}for(let N=0;N<i;N++){let B=M+N,H=P+N;v===!0?h.push(H,H+1,B):h.push(H+1,H,B),C+=3}c.addGroup(m,C,v===!0?1:2),m+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Kl=class r extends xt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new I,v=new I,M=new I;for(let S=0;S<t.length;S+=3)d(t[S+0],x),d(t[S+1],v),d(t[S+2],M),l(x,v,M,y)}function l(y,x,v,M){let S=M+1,w=[];for(let C=0;C<=S;C++){w[C]=[];let b=y.clone().lerp(v,C/S),E=x.clone().lerp(v,C/S),P=S-C;for(let N=0;N<=P;N++)N===0&&C===S?w[C][N]=b:w[C][N]=b.clone().lerp(E,N/P)}for(let C=0;C<S;C++)for(let b=0;b<2*(S-C)-1;b++){let E=Math.floor(b/2);b%2===0?(f(w[C][E+1]),f(w[C+1][E]),f(w[C][E])):(f(w[C][E+1]),f(w[C+1][E+1]),f(w[C+1][E]))}}function c(y){let x=new I;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){let y=new I;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let v=_(y)/2/Math.PI+.5,M=m(y)/Math.PI+.5;o.push(v,1-M)}g(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],v=o[y+2],M=o[y+4],S=Math.max(x,v,M),w=Math.min(x,v,M);S>.9&&w<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){let v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function g(){let y=new I,x=new I,v=new I,M=new I,S=new ye,w=new ye,C=new ye;for(let b=0,E=0;b<s.length;b+=9,E+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),S.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),C.set(o[E+4],o[E+5]),M.copy(y).add(x).add(v).divideScalar(3);let P=_(M);p(S,E+0,y,P),p(w,E+2,x,P),p(C,E+4,v,P)}}function p(y,x,v,M){M<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=M/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Hi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ut("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ye:new I);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new I,i=[],s=[],o=[],a=new I,l=new Ct;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new I)}s[0]=new I,o[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(St(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(St(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Na=class extends Hi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ye){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},oh=class extends Na{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Pp(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Vu=new I,ep=new Pp,tp=new Pp,np=new Pp,En=class extends Hi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new I){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Vu.subVectors(i[0],i[1]).add(i[0]),c=Vu);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Vu.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Vu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),g<1e-4&&(g=p),_<1e-4&&(_=p),ep.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,_),tp.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,_),np.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,_)}else this.curveType==="catmullrom"&&(ep.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),tp.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),np.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(ep.calc(l),tp.calc(l),np.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new I().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function sg(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Yy(r,e){let t=1-r;return t*t*e}function $y(r,e){return 2*(1-r)*r*e}function Zy(r,e){return r*r*e}function Ll(r,e,t,n){return Yy(r,e)+$y(r,t)+Zy(r,n)}function Jy(r,e){let t=1-r;return t*t*t*e}function Ky(r,e){let t=1-r;return 3*t*t*r*e}function jy(r,e){return 3*(1-r)*r*r*e}function Qy(r,e){return r*r*r*e}function Dl(r,e,t,n,i){return Jy(r,e)+Ky(r,t)+jy(r,n)+Qy(r,i)}var jl=class extends Hi{constructor(e=new ye,t=new ye,n=new ye,i=new ye){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ye){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Dl(e,i.x,s.x,o.x,a.x),Dl(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ah=class extends Hi{constructor(e=new I,t=new I,n=new I,i=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new I){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Dl(e,i.x,s.x,o.x,a.x),Dl(e,i.y,s.y,o.y,a.y),Dl(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ql=class extends Hi{constructor(e=new ye,t=new ye){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ye){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ye){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},lh=class extends Hi{constructor(e=new I,t=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new I){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new I){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ec=class extends Hi{constructor(e=new ye,t=new ye,n=new ye){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ye){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ll(e,i.x,s.x,o.x),Ll(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},hs=class extends Hi{constructor(e=new I,t=new I,n=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new I){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Ll(e,i.x,s.x,o.x),Ll(e,i.y,s.y,o.y),Ll(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Us=class extends Hi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ye){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(sg(a,l.x,c.x,h.x,u.x),sg(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ye().fromArray(i))}return this}},cp=Object.freeze({__proto__:null,ArcCurve:oh,CatmullRomCurve3:En,CubicBezierCurve:jl,CubicBezierCurve3:ah,EllipseCurve:Na,LineCurve:Ql,LineCurve3:lh,QuadraticBezierCurve:ec,QuadraticBezierCurve3:hs,SplineCurve:Us}),ch=class extends Hi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new cp[i.type]().fromJSON(i))}return this}},tc=class extends ch{constructor(e){super(),this.type="Path",this.currentPoint=new ye,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Ql(this.currentPoint.clone(),new ye(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new ec(this.currentPoint.clone(),new ye(e,t),new ye(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new jl(this.currentPoint.clone(),new ye(e,t),new ye(n,i),new ye(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Us(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Na(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Mo=class extends tc{constructor(e){super(e),this.uuid=Or(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new tc().fromJSON(i))}return this}};function e1(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Yg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=s1(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=r[f],g=r[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return nc(s,o,t,a,l,c,0),o}function Yg(r,e,t,n,i){let s;if(i===g1(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=og(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=og(o/n|0,r[o],r[o+1],s);return s&&Ua(s,s.next)&&(rc(s),s=s.next),s}function Eo(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Ua(t,t.next)||mn(t.prev,t,t.next)===0)){if(rc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function nc(r,e,t,n,i,s,o){if(!r)return;!o&&s&&u1(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?n1(r,n,i,s):t1(r)){e.push(l.i,r.i,c.i),rc(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=i1(Eo(r),e),nc(r,e,t,n,i,s,2)):o===2&&r1(r,e,t,n,i,s):nc(Eo(r),e,t,n,i,s,1);break}}}function t1(r){let e=r.prev,t=r,n=r.next;if(mn(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Cl(i,a,s,l,o,c,g.x,g.y)&&mn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function n1(r,e,t,n){let i=r.prev,s=r,o=r.next;if(mn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),p=Math.max(a,l,c),_=Math.max(h,u,f),m=up(d,g,e,t,n),y=up(p,_,e,t,n),x=r.prevZ,v=r.nextZ;for(;x&&x.z>=m&&v&&v.z<=y;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=_&&x!==i&&x!==o&&Cl(a,h,l,u,c,f,x.x,x.y)&&mn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=p&&v.y>=g&&v.y<=_&&v!==i&&v!==o&&Cl(a,h,l,u,c,f,v.x,v.y)&&mn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=m;){if(x.x>=d&&x.x<=p&&x.y>=g&&x.y<=_&&x!==i&&x!==o&&Cl(a,h,l,u,c,f,x.x,x.y)&&mn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=_&&v!==i&&v!==o&&Cl(a,h,l,u,c,f,v.x,v.y)&&mn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function i1(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Ua(n,i)&&Zg(n,t,t.next,i)&&ic(n,i)&&ic(i,n)&&(e.push(n.i,t.i,i.i),rc(t),rc(t.next),t=r=i),t=t.next}while(t!==r);return Eo(t)}function r1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&f1(o,a)){let l=Jg(o,a);o=Eo(o,o.next),l=Eo(l,l.next),nc(o,e,t,n,i,s,0),nc(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function s1(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Yg(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(d1(c))}i.sort(o1);for(let s=0;s<i.length;s++)t=a1(i[s],t);return t}function o1(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function a1(r,e){let t=l1(r,e);if(!t)return e;let n=Jg(t,r);return Eo(n,n.next),Eo(t,t.next)}function l1(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Ua(r,t))return t;do{if(Ua(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&$g(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);ic(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&c1(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function c1(r,e){return mn(r.prev,r,e.prev)<0&&mn(e.next,r,r.next)<0}function u1(r,e,t,n){let i=r;do i.z===0&&(i.z=up(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,h1(i)}function h1(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function up(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function d1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function $g(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Cl(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&$g(r,e,t,n,i,s,o,a)}function f1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!p1(r,e)&&(ic(r,e)&&ic(e,r)&&m1(r,e)&&(mn(r.prev,r,e.prev)||mn(r,e.prev,e))||Ua(r,e)&&mn(r.prev,r,r.next)>0&&mn(e.prev,e,e.next)>0)}function mn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Ua(r,e){return r.x===e.x&&r.y===e.y}function Zg(r,e,t,n){let i=Wu(mn(r,e,t)),s=Wu(mn(r,e,n)),o=Wu(mn(t,n,r)),a=Wu(mn(t,n,e));return!!(i!==s&&o!==a||i===0&&Gu(r,t,e)||s===0&&Gu(r,n,e)||o===0&&Gu(t,r,n)||a===0&&Gu(t,e,n))}function Gu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Wu(r){return r>0?1:r<0?-1:0}function p1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Zg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function ic(r,e){return mn(r.prev,r,r.next)<0?mn(r,e,r.next)>=0&&mn(r,r.prev,e)>=0:mn(r,e,r.prev)<0||mn(r,r.next,e)<0}function m1(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function Jg(r,e){let t=hp(r.i,r.x,r.y),n=hp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function og(r,e,t,n){let i=hp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function rc(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function hp(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function g1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var dp=class{static triangulate(e,t,n=2){return e1(e,t,n)}},Ta=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];ag(e),lg(n,e);let o=e.length;t.forEach(ag);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,lg(n,t[l]);let a=dp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function ag(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function lg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var sc=class r extends Kl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var oc=class r extends Kl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},On=class r extends xt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],p=[],_=[];for(let m=0;m<h;m++){let y=m*f-o;for(let x=0;x<c;x++){let v=x*u-s;g.push(v,-y,0),p.push(0,0,1),_.push(x/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<a;y++){let x=y+c*m,v=y+c*(m+1),M=y+1+c*(m+1),S=y+1+c*m;d.push(x,v,S),d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ac=class r extends xt{constructor(e=new Mo([new ye(0,.5),new ye(-.5,-.5),new ye(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;Ta.isClockWise(d)===!1&&(d=d.reverse());for(let _=0,m=g.length;_<m;_++){let y=g[_];Ta.isClockWise(y)===!0&&(g[_]=y.reverse())}let p=Ta.triangulateShape(d,g);for(let _=0,m=g.length;_<m;_++){let y=g[_];d=d.concat(y)}for(let _=0,m=d.length;_<m;_++){let y=d[_];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let _=0,m=p.length;_<m;_++){let y=p[_],x=y[0]+u,v=y[1]+u,M=y[2]+u;n.push(x,v,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return _1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function _1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var dn=class r extends xt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new I,f=new I,d=[],g=[],p=[],_=[];for(let m=0;m<=n;m++){let y=[],x=m/n,v=0;m===0&&o===0?v=.5/t:m===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let S=M/t;u.x=-e*Math.cos(i+S*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+S*s)*Math.sin(o+x*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),_.push(S+v,1-x),y.push(c++)}h.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){let x=h[m][y+1],v=h[m][y],M=h[m+1][y],S=h[m+1][y+1];(m!==0||o>0)&&d.push(x,v,S),(m!==n-1||l<Math.PI)&&d.push(v,M,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Kn=class r extends xt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new I,u=new I,f=new I;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let p=g/i*s,_=d/n*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(p),u.y=(e+t*Math.cos(_))*Math.sin(p),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let p=(i+1)*d+g-1,_=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,y=(i+1)*d+g;o.push(p,_,y),o.push(_,m,y)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},lc=class r extends xt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new I,f=new I,d=new I,g=new I,p=new I,_=new I,m=new I;for(let x=0;x<=n;++x){let v=x/n*s*Math.PI*2;y(v,s,o,e,d),y(v+.01,s,o,e,g),_.subVectors(g,d),m.addVectors(g,d),p.crossVectors(_,m),m.crossVectors(p,_),p.normalize(),m.normalize();for(let M=0;M<=i;++M){let S=M/i*Math.PI*2,w=-t*Math.cos(S),C=t*Math.sin(S);u.x=d.x+(w*m.x+C*p.x),u.y=d.y+(w*m.y+C*p.y),u.z=d.z+(w*m.z+C*p.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(x/n),h.push(M/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){let M=(i+1)*(x-1)+(v-1),S=(i+1)*x+(v-1),w=(i+1)*x+v,C=(i+1)*(x-1)+v;a.push(M,S,C),a.push(S,w,C)}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2));function y(x,v,M,S,w){let C=Math.cos(x),b=Math.sin(x),E=M/v*x,P=Math.cos(E);w.x=S*(2+P)*.5*C,w.y=S*(2+P)*b*.5,w.z=S*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},Sr=class r extends xt{constructor(e=new hs(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new I,l=new I,c=new ye,h=new I,u=[],f=[],d=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function p(){for(let x=0;x<t;x++)_(x);_(s===!1?t:0),y(),m()}function _(x){h=e.getPointAt(x/t,h);let v=o.normals[x],M=o.binormals[x];for(let S=0;S<=i;S++){let w=S/i*Math.PI*2,C=Math.sin(w),b=-Math.cos(w);l.x=b*v.x+C*M.x,l.y=b*v.y+C*M.y,l.z=b*v.z+C*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){let M=(i+1)*(x-1)+(v-1),S=(i+1)*x+(v-1),w=(i+1)*x+v,C=(i+1)*(x-1)+v;g.push(M,S,C),g.push(S,w,C)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)c.x=x/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new cp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var cc=class extends ki{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Te(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Oa=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},bt=class extends ki{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Te(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},sr=class extends bt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ye(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Te(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Te(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Te(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ds=class extends ki{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Te(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Te(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=yd,this.normalScale=new ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wn,this.combine=Ih,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},uh=class extends ki{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Ng,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},hh=class extends ki{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Xu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var So=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},dh=class extends So{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:rp,endingEnd:rp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case sp:s=e,a=2*t-n;break;case op:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sp:o=e,l=2*n-t;break;case op:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,_=p*g,m=-f*_+2*f*p-f*g,y=(1+f)*_+(-1.5-2*f)*p+(-.5+f)*g+1,x=(-1-d)*_+(1.5+d)*p+.5*g,v=d*_-d*p;for(let M=0;M!==a;++M)s[M]=m*o[h+M]+y*o[c+M]+x*o[l+M]+v*o[u+M];return s}},fh=class extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},ph=class extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},zi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Xu(t,this.TimeBufferType),this.values=Xu(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Xu(e.times,Array),values:Xu(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new dh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Fl:t=this.InterpolantFactoryMethodDiscrete;break;case Ju:t=this.InterpolantFactoryMethodLinear;break;case qu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ut("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Fl;case this.InterpolantFactoryMethodLinear:return Ju;case this.InterpolantFactoryMethodSmooth:return qu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(mt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(mt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){mt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){mt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&ly(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){mt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let p=t[u+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};zi.prototype.ValueTypeName="";zi.prototype.TimeBufferType=Float32Array;zi.prototype.ValueBufferType=Float32Array;zi.prototype.DefaultInterpolation=Ju;var Os=class extends zi{constructor(e,t,n){super(e,t,n)}};Os.prototype.ValueTypeName="bool";Os.prototype.ValueBufferType=Array;Os.prototype.DefaultInterpolation=Fl;Os.prototype.InterpolantFactoryMethodLinear=void 0;Os.prototype.InterpolantFactoryMethodSmooth=void 0;var mh=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}};mh.prototype.ValueTypeName="color";var gh=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}};gh.prototype.ValueTypeName="number";var _h=class extends So{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)hn.slerpFlat(s,0,o,c-a,o,c,l);return s}},uc=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new _h(this.times,this.values,this.getValueSize(),e)}};uc.prototype.ValueTypeName="quaternion";uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends zi{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Fl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends zi{constructor(e,t,n,i){super(e,t,n,i)}};xh.prototype.ValueTypeName="vector";var vh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Kg=new vh,yh=class{constructor(e){this.manager=e!==void 0?e:Kg,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};yh.DEFAULT_MATERIAL_NAME="__DEFAULT";var To=class extends _n{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Te(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Tr=class extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Te(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},ip=new Ct,cg=new I,ug=new I,bh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ye(512,512),this.mapType=Pi,this.map=null,this.mapPass=null,this.matrix=new Ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Da,this._frameExtents=new ye(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;cg.setFromMatrixPosition(e.matrixWorld),t.position.copy(cg),ug.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ug),t.updateMatrixWorld(),ip.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ip,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ip)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var fp=class extends bh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Ri=class extends To{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new fp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Ci=class extends Gl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},pp=class extends bh{constructor(){super(new Ci(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fn=class extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(_n.DEFAULT_UP),this.updateMatrix(),this.target=new _n,this.shadow=new pp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},wr=class extends To{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Mh=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Ip="\\[\\]\\.:\\/",x1=new RegExp("["+Ip+"]","g"),Lp="[^"+Ip+"]",v1="[^"+Ip.replace("\\.","")+"]",y1=/((?:WC+[\/:])*)/.source.replace("WC",Lp),b1=/(WCOD+)?/.source.replace("WCOD",v1),M1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Lp),E1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Lp),S1=new RegExp("^"+y1+b1+M1+E1+"$"),T1=["material","materials","bones","map"],mp=class{constructor(e,t,n){let i=n||cn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},cn=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(x1,"")}static parseTrackName(e){let t=S1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);T1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ut("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){mt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){mt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){mt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){mt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){mt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){mt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;mt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){mt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};cn.Composite=mp;cn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};cn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};cn.prototype.GetterByBindingType=[cn.prototype._getValue_direct,cn.prototype._getValue_array,cn.prototype._getValue_arrayElement,cn.prototype._getValue_toArray];cn.prototype.SetterByBindingTypeAndVersioning=[[cn.prototype._setValue_direct,cn.prototype._setValue_direct_setNeedsUpdate,cn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_array,cn.prototype._setValue_array_setNeedsUpdate,cn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_arrayElement,cn.prototype._setValue_arrayElement_setNeedsUpdate,cn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[cn.prototype._setValue_fromArray,cn.prototype._setValue_fromArray_setNeedsUpdate,cn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var iA=new Float32Array(1);var hg=new ye,dc=class{constructor(e=new ye(1/0,1/0),t=new ye(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=hg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,hg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Dp(r,e,t,n){let i=w1(n);switch(t){case Sp:return r*e;case Bh:return r*e/i.components*i.byteLength;case kh:return r*e/i.components*i.byteLength;case Ao:return r*e*2/i.components*i.byteLength;case Hh:return r*e*2/i.components*i.byteLength;case Tp:return r*e*3/i.components*i.byteLength;case lr:return r*e*4/i.components*i.byteLength;case zh:return r*e*4/i.components*i.byteLength;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Gh:case Xh:return Math.max(r,16)*Math.max(e,8)/4;case Vh:case Wh:return Math.max(r,8)*Math.max(e,8)/2;case qh:case Yh:case Zh:case Jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case $h:case Kh:case jh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case td:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case nd:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case id:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case rd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case sd:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case od:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ad:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case cd:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case hd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case dd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case fd:case pd:case md:return Math.ceil(r/4)*Math.ceil(e/4)*16;case gd:case _d:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xd:case vd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function w1(r){switch(r){case Pi:case yp:return{byteLength:1,components:1};case ka:case bp:case Tn:return{byteLength:2,components:1};case Uh:case Oh:return{byteLength:2,components:4};case Rr:case Nh:case ar:return{byteLength:4,components:1};case Mp:case Ep:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function y_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function R1(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],p=u[d];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++f,u[f]=p)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let p=u[d];r.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var C1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,P1=`#ifdef USE_ALPHAHASH
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
#endif`,I1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,L1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,D1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,F1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,N1=`#ifdef USE_AOMAP
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
#endif`,U1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,O1=`#ifdef USE_BATCHING
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
#endif`,B1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,k1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,H1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,z1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,V1=`#ifdef USE_IRIDESCENCE
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
#endif`,G1=`#ifdef USE_BUMPMAP
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
#endif`,W1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,X1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,q1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,$1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Z1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,J1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
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
#endif`,j1=`#define PI 3.141592653589793
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
} // validated`,Q1=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,eb=`vec3 transformedNormal = objectNormal;
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
#endif`,tb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ib=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,sb="gl_FragColor = linearToOutputTexel( gl_FragColor );",ob=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ab=`#ifdef USE_ENVMAP
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
#endif`,lb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
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
#endif`,ub=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,hb=`#ifdef USE_ENVMAP
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
#endif`,db=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,fb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gb=`#ifdef USE_GRADIENTMAP
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
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,vb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,yb=`uniform bool receiveShadow;
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
#endif`,bb=`#ifdef USE_ENVMAP
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
#endif`,Mb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Tb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,wb=`PhysicalMaterial material;
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
#endif`,Ab=`uniform sampler2D dfgLUT;
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
}`,Rb=`
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
#endif`,Cb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Db=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Nb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ub=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ob=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bb=`#if defined( USE_POINTS_UV )
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
#endif`,kb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Hb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Vb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Gb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wb=`#ifdef USE_MORPHTARGETS
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
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Yb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,$b=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Jb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Kb=`#ifdef USE_NORMALMAP
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
#endif`,jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,eM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,tM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,nM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,iM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,rM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,sM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,oM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,aM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,lM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,cM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,uM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,hM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,dM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,fM=`float getShadowMask() {
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
}`,pM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,mM=`#ifdef USE_SKINNING
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
#endif`,gM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_M=`#ifdef USE_SKINNING
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
#endif`,xM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,vM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,yM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,MM=`#ifdef USE_TRANSMISSION
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
#endif`,EM=`#ifdef USE_TRANSMISSION
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
#endif`,SM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,TM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,wM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,AM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,RM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,CM=`uniform sampler2D t2D;
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
}`,PM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,IM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,LM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,DM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,FM=`#include <common>
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
}`,NM=`#if DEPTH_PACKING == 3200
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
}`,UM=`#define DISTANCE
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
}`,OM=`#define DISTANCE
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
}`,BM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,kM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,HM=`uniform float scale;
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
}`,zM=`uniform vec3 diffuse;
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
}`,VM=`#include <common>
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
}`,GM=`uniform vec3 diffuse;
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
}`,WM=`#define LAMBERT
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
}`,XM=`#define LAMBERT
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
}`,qM=`#define MATCAP
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
}`,YM=`#define MATCAP
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
}`,$M=`#define NORMAL
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
}`,ZM=`#define NORMAL
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
}`,JM=`#define PHONG
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
}`,KM=`#define PHONG
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
}`,jM=`#define STANDARD
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
}`,QM=`#define STANDARD
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
}`,eE=`#define TOON
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
}`,tE=`#define TOON
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
}`,nE=`uniform float size;
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
}`,iE=`uniform vec3 diffuse;
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
}`,rE=`#include <common>
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
}`,sE=`uniform vec3 color;
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
}`,oE=`uniform float rotation;
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
}`,aE=`uniform vec3 diffuse;
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
}`,Mt={alphahash_fragment:C1,alphahash_pars_fragment:P1,alphamap_fragment:I1,alphamap_pars_fragment:L1,alphatest_fragment:D1,alphatest_pars_fragment:F1,aomap_fragment:N1,aomap_pars_fragment:U1,batching_pars_vertex:O1,batching_vertex:B1,begin_vertex:k1,beginnormal_vertex:H1,bsdfs:z1,iridescence_fragment:V1,bumpmap_pars_fragment:G1,clipping_planes_fragment:W1,clipping_planes_pars_fragment:X1,clipping_planes_pars_vertex:q1,clipping_planes_vertex:Y1,color_fragment:$1,color_pars_fragment:Z1,color_pars_vertex:J1,color_vertex:K1,common:j1,cube_uv_reflection_fragment:Q1,defaultnormal_vertex:eb,displacementmap_pars_vertex:tb,displacementmap_vertex:nb,emissivemap_fragment:ib,emissivemap_pars_fragment:rb,colorspace_fragment:sb,colorspace_pars_fragment:ob,envmap_fragment:ab,envmap_common_pars_fragment:lb,envmap_pars_fragment:cb,envmap_pars_vertex:ub,envmap_physical_pars_fragment:bb,envmap_vertex:hb,fog_vertex:db,fog_pars_vertex:fb,fog_fragment:pb,fog_pars_fragment:mb,gradientmap_pars_fragment:gb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:vb,lights_pars_begin:yb,lights_toon_fragment:Mb,lights_toon_pars_fragment:Eb,lights_phong_fragment:Sb,lights_phong_pars_fragment:Tb,lights_physical_fragment:wb,lights_physical_pars_fragment:Ab,lights_fragment_begin:Rb,lights_fragment_maps:Cb,lights_fragment_end:Pb,logdepthbuf_fragment:Ib,logdepthbuf_pars_fragment:Lb,logdepthbuf_pars_vertex:Db,logdepthbuf_vertex:Fb,map_fragment:Nb,map_pars_fragment:Ub,map_particle_fragment:Ob,map_particle_pars_fragment:Bb,metalnessmap_fragment:kb,metalnessmap_pars_fragment:Hb,morphinstance_vertex:zb,morphcolor_vertex:Vb,morphnormal_vertex:Gb,morphtarget_pars_vertex:Wb,morphtarget_vertex:Xb,normal_fragment_begin:qb,normal_fragment_maps:Yb,normal_pars_fragment:$b,normal_pars_vertex:Zb,normal_vertex:Jb,normalmap_pars_fragment:Kb,clearcoat_normal_fragment_begin:jb,clearcoat_normal_fragment_maps:Qb,clearcoat_pars_fragment:eM,iridescence_pars_fragment:tM,opaque_fragment:nM,packing:iM,premultiplied_alpha_fragment:rM,project_vertex:sM,dithering_fragment:oM,dithering_pars_fragment:aM,roughnessmap_fragment:lM,roughnessmap_pars_fragment:cM,shadowmap_pars_fragment:uM,shadowmap_pars_vertex:hM,shadowmap_vertex:dM,shadowmask_pars_fragment:fM,skinbase_vertex:pM,skinning_pars_vertex:mM,skinning_vertex:gM,skinnormal_vertex:_M,specularmap_fragment:xM,specularmap_pars_fragment:vM,tonemapping_fragment:yM,tonemapping_pars_fragment:bM,transmission_fragment:MM,transmission_pars_fragment:EM,uv_pars_fragment:SM,uv_pars_vertex:TM,uv_vertex:wM,worldpos_vertex:AM,background_vert:RM,background_frag:CM,backgroundCube_vert:PM,backgroundCube_frag:IM,cube_vert:LM,cube_frag:DM,depth_vert:FM,depth_frag:NM,distance_vert:UM,distance_frag:OM,equirect_vert:BM,equirect_frag:kM,linedashed_vert:HM,linedashed_frag:zM,meshbasic_vert:VM,meshbasic_frag:GM,meshlambert_vert:WM,meshlambert_frag:XM,meshmatcap_vert:qM,meshmatcap_frag:YM,meshnormal_vert:$M,meshnormal_frag:ZM,meshphong_vert:JM,meshphong_frag:KM,meshphysical_vert:jM,meshphysical_frag:QM,meshtoon_vert:eE,meshtoon_frag:tE,points_vert:nE,points_frag:iE,shadow_vert:rE,shadow_frag:sE,sprite_vert:oE,sprite_frag:aE},Ge={common:{diffuse:{value:new Te(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new yt}},envmap:{envMap:{value:null},envMapRotation:{value:new yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new yt},normalScale:{value:new ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Te(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Te(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0},uvTransform:{value:new yt}},sprite:{diffuse:{value:new Te(16777215)},opacity:{value:1},center:{value:new ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new yt},alphaMap:{value:null},alphaMapTransform:{value:new yt},alphaTest:{value:0}}},Gr={basic:{uniforms:ai([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:Mt.meshbasic_vert,fragmentShader:Mt.meshbasic_frag},lambert:{uniforms:ai([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)}}]),vertexShader:Mt.meshlambert_vert,fragmentShader:Mt.meshlambert_frag},phong:{uniforms:ai([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)},specular:{value:new Te(1118481)},shininess:{value:30}}]),vertexShader:Mt.meshphong_vert,fragmentShader:Mt.meshphong_frag},standard:{uniforms:ai([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag},toon:{uniforms:ai([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Te(0)}}]),vertexShader:Mt.meshtoon_vert,fragmentShader:Mt.meshtoon_frag},matcap:{uniforms:ai([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:Mt.meshmatcap_vert,fragmentShader:Mt.meshmatcap_frag},points:{uniforms:ai([Ge.points,Ge.fog]),vertexShader:Mt.points_vert,fragmentShader:Mt.points_frag},dashed:{uniforms:ai([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Mt.linedashed_vert,fragmentShader:Mt.linedashed_frag},depth:{uniforms:ai([Ge.common,Ge.displacementmap]),vertexShader:Mt.depth_vert,fragmentShader:Mt.depth_frag},normal:{uniforms:ai([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:Mt.meshnormal_vert,fragmentShader:Mt.meshnormal_frag},sprite:{uniforms:ai([Ge.sprite,Ge.fog]),vertexShader:Mt.sprite_vert,fragmentShader:Mt.sprite_frag},background:{uniforms:{uvTransform:{value:new yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Mt.background_vert,fragmentShader:Mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new yt}},vertexShader:Mt.backgroundCube_vert,fragmentShader:Mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Mt.cube_vert,fragmentShader:Mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Mt.equirect_vert,fragmentShader:Mt.equirect_frag},distance:{uniforms:ai([Ge.common,Ge.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Mt.distance_vert,fragmentShader:Mt.distance_frag},shadow:{uniforms:ai([Ge.lights,Ge.fog,{color:{value:new Te(0)},opacity:{value:1}}]),vertexShader:Mt.shadow_vert,fragmentShader:Mt.shadow_frag}};Gr.physical={uniforms:ai([Gr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new yt},clearcoatNormalScale:{value:new ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new yt},sheen:{value:0},sheenColor:{value:new Te(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new yt},transmissionSamplerSize:{value:new ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new yt},attenuationDistance:{value:0},attenuationColor:{value:new Te(0)},specularColor:{value:new Te(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new yt},anisotropyVector:{value:new ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new yt}}]),vertexShader:Mt.meshphysical_vert,fragmentShader:Mt.meshphysical_frag};var Ed={r:0,b:0,g:0},Po=new Wn,lE=new Ct;function cE(r,e,t,n,i,s,o){let a=new Te(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function p(x){let v=!1,M=g(x);M===null?m(a,l):M&&M.isColor&&(m(M,1),v=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,v){let M=g(v);M&&(M.isCubeTexture||M.mapping===yc)?(h===void 0&&(h=new $e(new Gt(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Co(Gr.backgroundCube.uniforms),vertexShader:Gr.backgroundCube.vertexShader,fragmentShader:Gr.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Po.copy(v.backgroundRotation),Po.x*=-1,Po.y*=-1,Po.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Po.y*=-1,Po.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(lE.makeRotationFromEuler(Po)),h.material.toneMapped=Pt.getTransfer(M.colorSpace)!==kt,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new $e(new On(2,2),new Nt({name:"BackgroundMaterial",uniforms:Co(Gr.background.uniforms),vertexShader:Gr.background.vertexShader,fragmentShader:Gr.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Pt.getTransfer(M.colorSpace)!==kt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function m(x,v){x.getRGB(Ed,Cp(r)),n.buffers.color.setClear(Ed.r,Ed.g,Ed.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,m(a,l)},render:p,addToRenderList:_,dispose:y}}function uE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(E,P,N,B,H){let Z=!1,W=u(B,N,P);s!==W&&(s=W,c(s.object)),Z=d(E,B,N,H),Z&&g(E,B,N,H),H!==null&&e.update(H,r.ELEMENT_ARRAY_BUFFER),(Z||o)&&(o=!1,v(E,P,N,B),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,P,N){let B=N.wireframe===!0,H=n[E.id];H===void 0&&(H={},n[E.id]=H);let Z=H[P.id];Z===void 0&&(Z={},H[P.id]=Z);let W=Z[B];return W===void 0&&(W=f(l()),Z[B]=W),W}function f(E){let P=[],N=[],B=[];for(let H=0;H<t;H++)P[H]=0,N[H]=0,B[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:N,attributeDivisors:B,object:E,attributes:{},index:null}}function d(E,P,N,B){let H=s.attributes,Z=P.attributes,W=0,X=N.getAttributes();for(let O in X)if(X[O].location>=0){let A=H[O],K=Z[O];if(K===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(K=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(K=E.instanceColor)),A===void 0||A.attribute!==K||K&&A.data!==K.data)return!0;W++}return s.attributesNum!==W||s.index!==B}function g(E,P,N,B){let H={},Z=P.attributes,W=0,X=N.getAttributes();for(let O in X)if(X[O].location>=0){let A=Z[O];A===void 0&&(O==="instanceMatrix"&&E.instanceMatrix&&(A=E.instanceMatrix),O==="instanceColor"&&E.instanceColor&&(A=E.instanceColor));let K={};K.attribute=A,A&&A.data&&(K.data=A.data),H[O]=K,W++}s.attributes=H,s.attributesNum=W,s.index=B}function p(){let E=s.newAttributes;for(let P=0,N=E.length;P<N;P++)E[P]=0}function _(E){m(E,0)}function m(E,P){let N=s.newAttributes,B=s.enabledAttributes,H=s.attributeDivisors;N[E]=1,B[E]===0&&(r.enableVertexAttribArray(E),B[E]=1),H[E]!==P&&(r.vertexAttribDivisor(E,P),H[E]=P)}function y(){let E=s.newAttributes,P=s.enabledAttributes;for(let N=0,B=P.length;N<B;N++)P[N]!==E[N]&&(r.disableVertexAttribArray(N),P[N]=0)}function x(E,P,N,B,H,Z,W){W===!0?r.vertexAttribIPointer(E,P,N,H,Z):r.vertexAttribPointer(E,P,N,B,H,Z)}function v(E,P,N,B){p();let H=B.attributes,Z=N.getAttributes(),W=P.defaultAttributeValues;for(let X in Z){let O=Z[X];if(O.location>=0){let V=H[X];if(V===void 0&&(X==="instanceMatrix"&&E.instanceMatrix&&(V=E.instanceMatrix),X==="instanceColor"&&E.instanceColor&&(V=E.instanceColor)),V!==void 0){let A=V.normalized,K=V.itemSize,ce=e.get(V);if(ce===void 0)continue;let pe=ce.buffer,Ee=ce.type,Be=ce.bytesPerElement,te=Ee===r.INT||Ee===r.UNSIGNED_INT||V.gpuType===Nh;if(V.isInterleavedBufferAttribute){let re=V.data,we=re.stride,Oe=V.offset;if(re.isInstancedInterleavedBuffer){for(let Pe=0;Pe<O.locationSize;Pe++)m(O.location+Pe,re.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Pe=0;Pe<O.locationSize;Pe++)_(O.location+Pe);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let Pe=0;Pe<O.locationSize;Pe++)x(O.location+Pe,K/O.locationSize,Ee,A,we*Be,(Oe+K/O.locationSize*Pe)*Be,te)}else{if(V.isInstancedBufferAttribute){for(let re=0;re<O.locationSize;re++)m(O.location+re,V.meshPerAttribute);E.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let re=0;re<O.locationSize;re++)_(O.location+re);r.bindBuffer(r.ARRAY_BUFFER,pe);for(let re=0;re<O.locationSize;re++)x(O.location+re,K/O.locationSize,Ee,A,K*Be,K/O.locationSize*re*Be,te)}}else if(W!==void 0){let A=W[X];if(A!==void 0)switch(A.length){case 2:r.vertexAttrib2fv(O.location,A);break;case 3:r.vertexAttrib3fv(O.location,A);break;case 4:r.vertexAttrib4fv(O.location,A);break;default:r.vertexAttrib1fv(O.location,A)}}}}y()}function M(){C();for(let E in n){let P=n[E];for(let N in P){let B=P[N];for(let H in B)h(B[H].object),delete B[H];delete P[N]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;let P=n[E.id];for(let N in P){let B=P[N];for(let H in B)h(B[H].object),delete B[H];delete P[N]}delete n[E.id]}function w(E){for(let P in n){let N=n[P];if(N[E.id]===void 0)continue;let B=N[E.id];for(let H in B)h(B[H].object),delete B[H];delete N[E.id]}}function C(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:p,enableAttribute:_,disableUnusedAttributes:y}}function hE(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p]*f[p];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function dE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==lr&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let C=w===Tn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Pi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==ar&&!C)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ut("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,maxSamples:M,samples:S}}function fE(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Nr,a=new yt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,p=u.clipIntersection,_=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{let y=s?0:n,x=y*4,v=m.clippingState||null;l.value=v,v=h(g,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];m.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let p=u!==null?u.length:0,_=null;if(p!==0){if(_=l.value,g!==!0||_===null){let m=d+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<m)&&(_=new Float32Array(m));for(let x=0,v=d;x!==p;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,_}}function pE(r){let e=new WeakMap;function t(o,a){return a===Lh?o.mapping=Hs:a===Dh&&(o.mapping=wo),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Lh||a===Dh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Xl(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Gs=4,jg=[.125,.215,.35,.446,.526,.582],Lo=20,mE=256,wc=new Ci,Qg=new Te,Fp=null,Np=0,Up=0,Op=!1,gE=new I,Wr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=gE}=s;Fp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=n_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=t_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Fp,Np,Up),this._renderer.xr.enabled=Op,e.scissorTest=!1,za(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Hs||e.mapping===wo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Fp=this._renderer.getRenderTarget(),Np=this._renderer.getActiveCubeFace(),Up=this._renderer.getActiveMipmapLevel(),Op=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:Tn,format:lr,colorSpace:br,depthBuffer:!1},i=e_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=e_(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_E(s)),this._blurMaterial=vE(s,e,t),this._ggxMaterial=xE(s,e,t)}return i}_compileMaterial(e){let t=new $e(new xt,e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,i,s){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(Qg),u.toneMapping=Ar,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new $e(new Gt,new Pn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,_=p.material,m=!1,y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,m=!0):(_.color.copy(Qg),m=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));let M=this._cubeSize;za(i,v*M,x>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(p,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===Hs||e.mapping===wo;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=n_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=t_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;za(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,p=this._sizeLods[n],_=3*p*(n>g-Gs?n-g+Gs:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,za(s,_,m,3*p,2*p),i.setRenderTarget(s),i.render(a,wc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,za(e,_,m,3*p,2*p),i.setRenderTarget(e),i.render(a,wc)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&mt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Lo-1),p=s/g,_=isFinite(s)?1+Math.floor(h*p):Lo;_>Lo&&ut(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Lo}`);let m=[],y=0;for(let w=0;w<Lo;++w){let C=w/p,b=Math.exp(-C*C/2);m.push(b),w===0?y+=b:w<_&&(y+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=g,f.mipInt.value=x-n;let v=this._sizeLods[i],M=3*v*(i>x-Gs?i-x+Gs:0),S=4*(this._cubeSize-v);za(t,M,S,3*v,2*v),l.setRenderTarget(t),l.render(u,wc)}};function _E(r){let e=[],t=[],n=[],i=r,s=r-Gs+1+jg.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Gs?l=jg[o-r+Gs-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,p=3,_=2,m=1,y=new Float32Array(p*g*d),x=new Float32Array(_*g*d),v=new Float32Array(m*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,C=S>2?0:-1,b=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];y.set(b,p*g*S),x.set(f,_*g*S);let E=[S,S,S,S,S,S];v.set(E,m*g*S)}let M=new xt;M.setAttribute("position",new Vt(y,p)),M.setAttribute("uv",new Vt(x,_)),M.setAttribute("faceIndex",new Vt(v,m)),n.push(new $e(M,null)),i>Gs&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function e_(r,e,t){let n=new un(r,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function za(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function xE(r,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:mE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Td(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function vE(r,e,t){let n=new Float32Array(Lo),i=new I(0,1,0);return new Nt({name:"SphericalGaussianBlur",defines:{n:Lo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Td(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function t_(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Td(),fragmentShader:`

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
		`,blending:or,depthTest:!1,depthWrite:!1})}function n_(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Td(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:or,depthTest:!1,depthWrite:!1})}function Td(){return`

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
	`}function yE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Lh||l===Dh,h=l===Hs||l===wo;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new Wr(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new Wr(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function bE(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ra("WebGLRenderer: "+n+" extension not supported."),i}}}function ME(r,e,t,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,p=0;if(d!==null){let y=d.array;p=d.version;for(let x=0,v=y.length;x<v;x+=3){let M=y[x+0],S=y[x+1],w=y[x+2];f.push(M,S,S,w,w,M)}}else if(g!==void 0){let y=g.array;p=g.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let M=x+0,S=x+1,w=x+2;f.push(M,S,S,w,w,M)}}else return;let _=new(Ap(f)?Vl:zl)(f,1);_.version=p;let m=s.get(u);m&&e.remove(m),s.set(u,_)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function EE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let _=0;for(let m=0;m<g;m++)_+=d[m];t.update(_,n,1)}function u(f,d,g,p){if(g===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],p[m]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,p,0,g);let m=0;for(let y=0;y<g;y++)m+=d[y]*p[y];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function SE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:mt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function TE(r,e,t){let n=new WeakMap,i=new gn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;d===!0&&(x=1),g===!0&&(x=2),p===!0&&(x=3);let v=a.attributes.position.count*x,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let S=new Float32Array(v*M*4*u),w=new kl(S,v,M,u);w.type=ar,w.needsUpdate=!0;let C=x*4;for(let E=0;E<u;E++){let P=_[E],N=m[E],B=y[E],H=v*M*4*E;for(let Z=0;Z<P.count;Z++){let W=Z*C;d===!0&&(i.fromBufferAttribute(P,Z),S[H+W+0]=i.x,S[H+W+1]=i.y,S[H+W+2]=i.z,S[H+W+3]=0),g===!0&&(i.fromBufferAttribute(N,Z),S[H+W+4]=i.x,S[H+W+5]=i.y,S[H+W+6]=i.z,S[H+W+7]=0),p===!0&&(i.fromBufferAttribute(B,Z),S[H+W+8]=i.x,S[H+W+9]=i.y,S[H+W+10]=i.z,S[H+W+11]=B.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new ye(v,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function wE(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var AE={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[Vi]:"ACES_FILMIC_TONE_MAPPING",[xc]:"AGX_TONE_MAPPING",[vc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function RE(r,e,t,n,i){let s=new un(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new un(e,t,{type:Tn,depthBuffer:!1,stencilBuffer:!1}),a=new xt;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Oa({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new $e(a,l),h=new Ci(-1,1,1,-1,0,1),u=null,f=null,d=!1,g,p=null,_=[],m=!1;this.setSize=function(y,x){s.setSize(y,x),o.setSize(y,x);for(let v=0;v<_.length;v++){let M=_[v];M.setSize&&M.setSize(y,x)}},this.setEffects=function(y){_=y,m=_.length>0&&_[0].isRenderPass===!0;let x=s.width,v=s.height;for(let M=0;M<_.length;M++){let S=_[M];S.setSize&&S.setSize(x,v)}},this.begin=function(y,x){if(d||y.toneMapping===Ar&&_.length===0)return!1;if(p=x,x!==null){let v=x.width,M=x.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return m===!1&&y.setRenderTarget(s),g=y.toneMapping,y.toneMapping=Ar,!0},this.hasRenderPass=function(){return m},this.end=function(y,x){y.toneMapping=g,d=!0;let v=s,M=o;for(let S=0;S<_.length;S++){let w=_[S];if(w.enabled!==!1&&(w.render(y,M,v,x),w.needsSwap!==!1)){let C=v;v=M,M=C}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},Pt.getTransfer(u)===kt&&(l.defines.SRGB_TRANSFER="");let S=AE[f];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(c,h),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var b_=new Un,Hp=new rr(1,1),M_=new kl,E_=new eh,S_=new Wl,i_=[],r_=[],s_=new Float32Array(16),o_=new Float32Array(9),a_=new Float32Array(4);function Ga(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=i_[i];if(s===void 0&&(s=new Float32Array(i),i_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Bn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function kn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function wd(r,e){let t=r_[e];t===void 0&&(t=new Int32Array(e),r_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function CE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function PE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2fv(this.addr,e),kn(t,e)}}function IE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bn(t,e))return;r.uniform3fv(this.addr,e),kn(t,e)}}function LE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4fv(this.addr,e),kn(t,e)}}function DE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;a_.set(n),r.uniformMatrix2fv(this.addr,!1,a_),kn(t,n)}}function FE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;o_.set(n),r.uniformMatrix3fv(this.addr,!1,o_),kn(t,n)}}function NE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),kn(t,e)}else{if(Bn(t,n))return;s_.set(n),r.uniformMatrix4fv(this.addr,!1,s_),kn(t,n)}}function UE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function OE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2iv(this.addr,e),kn(t,e)}}function BE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3iv(this.addr,e),kn(t,e)}}function kE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4iv(this.addr,e),kn(t,e)}}function HE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function zE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2uiv(this.addr,e),kn(t,e)}}function VE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3uiv(this.addr,e),kn(t,e)}}function GE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4uiv(this.addr,e),kn(t,e)}}function WE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Hp.compareFunction=t.isReversedDepthBuffer()?Md:bd,s=Hp):s=b_,t.setTexture2D(e||s,i)}function XE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||E_,i)}function qE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||S_,i)}function YE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||M_,i)}function $E(r){switch(r){case 5126:return CE;case 35664:return PE;case 35665:return IE;case 35666:return LE;case 35674:return DE;case 35675:return FE;case 35676:return NE;case 5124:case 35670:return UE;case 35667:case 35671:return OE;case 35668:case 35672:return BE;case 35669:case 35673:return kE;case 5125:return HE;case 36294:return zE;case 36295:return VE;case 36296:return GE;case 35678:case 36198:case 36298:case 36306:case 35682:return WE;case 35679:case 36299:case 36307:return XE;case 35680:case 36300:case 36308:case 36293:return qE;case 36289:case 36303:case 36311:case 36292:return YE}}function ZE(r,e){r.uniform1fv(this.addr,e)}function JE(r,e){let t=Ga(e,this.size,2);r.uniform2fv(this.addr,t)}function KE(r,e){let t=Ga(e,this.size,3);r.uniform3fv(this.addr,t)}function jE(r,e){let t=Ga(e,this.size,4);r.uniform4fv(this.addr,t)}function QE(r,e){let t=Ga(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function eS(r,e){let t=Ga(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function tS(r,e){let t=Ga(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function nS(r,e){r.uniform1iv(this.addr,e)}function iS(r,e){r.uniform2iv(this.addr,e)}function rS(r,e){r.uniform3iv(this.addr,e)}function sS(r,e){r.uniform4iv(this.addr,e)}function oS(r,e){r.uniform1uiv(this.addr,e)}function aS(r,e){r.uniform2uiv(this.addr,e)}function lS(r,e){r.uniform3uiv(this.addr,e)}function cS(r,e){r.uniform4uiv(this.addr,e)}function uS(r,e,t){let n=this.cache,i=e.length,s=wd(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),kn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Hp:o=b_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function hS(r,e,t){let n=this.cache,i=e.length,s=wd(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),kn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||E_,s[o])}function dS(r,e,t){let n=this.cache,i=e.length,s=wd(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),kn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||S_,s[o])}function fS(r,e,t){let n=this.cache,i=e.length,s=wd(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),kn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||M_,s[o])}function pS(r){switch(r){case 5126:return ZE;case 35664:return JE;case 35665:return KE;case 35666:return jE;case 35674:return QE;case 35675:return eS;case 35676:return tS;case 5124:case 35670:return nS;case 35667:case 35671:return iS;case 35668:case 35672:return rS;case 35669:case 35673:return sS;case 5125:return oS;case 36294:return aS;case 36295:return lS;case 36296:return cS;case 35678:case 36198:case 36298:case 36306:case 35682:return uS;case 35679:case 36299:case 36307:return hS;case 35680:case 36300:case 36308:case 36293:return dS;case 36289:case 36303:case 36311:case 36292:return fS}}var zp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=$E(t.type)}},Vp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=pS(t.type)}},Gp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Bp=/(\w+)(\])?(\[|\.)?/g;function l_(r,e){r.seq.push(e),r.map[e.id]=e}function mS(r,e,t){let n=r.name,i=n.length;for(Bp.lastIndex=0;;){let s=Bp.exec(n),o=Bp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){l_(t,c===void 0?new zp(a,r,e):new Vp(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Gp(a),l_(t,u)),t=u}}}var Va=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);mS(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function c_(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var gS=37297,_S=0;function xS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var u_=new yt;function vS(r){Pt._getMatrix(u_,Pt.workingColorSpace,r);let e=`mat3( ${u_.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(r)){case Nl:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function h_(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+xS(r.getShaderSource(e),a)}else return s}function yS(r,e){let t=vS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var bS={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[Vi]:"ACESFilmic",[xc]:"AgX",[vc]:"Neutral",[_c]:"Custom"};function MS(r,e){let t=bS[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sd=new I;function ES(){Pt.getLuminanceCoefficients(Sd);let r=Sd.x.toFixed(4),e=Sd.y.toFixed(4),t=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function SS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function TS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Rc(r){return r!==""}function d_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function f_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var AS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Wp(r){return r.replace(AS,CS)}var RS=new Map;function CS(r,e){let t=Mt[e];if(t===void 0){let n=RS.get(e);if(n!==void 0)t=Mt[n],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Wp(t)}var PS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function p_(r){return r.replace(PS,IS)}function IS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function m_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var LS={[fc]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function DS(r){return LS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var FS={[Hs]:"ENVMAP_TYPE_CUBE",[wo]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function NS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":FS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var US={[wo]:"ENVMAP_MODE_REFRACTION"};function OS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":US[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var BS={[Ih]:"ENVMAP_BLENDING_MULTIPLY",[Lg]:"ENVMAP_BLENDING_MIX",[Dg]:"ENVMAP_BLENDING_ADD"};function kS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":BS[r.combine]||"ENVMAP_BLENDING_NONE"}function HS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function zS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=DS(t),c=NS(t),h=OS(t),u=kS(t),f=HS(t),d=SS(t),g=TS(s),p=i.createProgram(),_,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rc).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rc).join(`
`),m.length>0&&(m+=`
`)):(_=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),m=[m_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ar?"#define TONE_MAPPING":"",t.toneMapping!==Ar?Mt.tonemapping_pars_fragment:"",t.toneMapping!==Ar?MS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Mt.colorspace_pars_fragment,yS("linearToOutputTexel",t.outputColorSpace),ES(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rc).join(`
`)),o=Wp(o),o=d_(o,t),o=f_(o,t),a=Wp(a),a=d_(a,t),a=f_(a,t),o=p_(o),a=p_(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let x=y+_+o,v=y+m+a,M=c_(i,i.VERTEX_SHADER,x),S=c_(i,i.FRAGMENT_SHADER,v);i.attachShader(p,M),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(P){if(r.debug.checkShaderErrors){let N=i.getProgramInfoLog(p)||"",B=i.getShaderInfoLog(M)||"",H=i.getShaderInfoLog(S)||"",Z=N.trim(),W=B.trim(),X=H.trim(),O=!0,V=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(O=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,S);else{let A=h_(i,M,"vertex"),K=h_(i,S,"fragment");mt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Z+`
`+A+`
`+K)}else Z!==""?ut("WebGLProgram: Program Info Log:",Z):(W===""||X==="")&&(V=!1);V&&(P.diagnostics={runnable:O,programLog:Z,vertexShader:{log:W,prefix:_},fragmentShader:{log:X,prefix:m}})}i.deleteShader(M),i.deleteShader(S),C=new Va(i,p),b=wS(i,p)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,gS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_S++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var VS=0,Xp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new qp(e),t.set(e,n)),n}},qp=class{constructor(e){this.id=VS++,this.code=e,this.usedTimes=0}};function GS(r,e,t,n,i,s,o){let a=new Hl,l=new Xp,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,E,P,N,B){let H=N.fog,Z=B.geometry,W=b.isMeshStandardMaterial?N.environment:null,X=(b.isMeshStandardMaterial?t:e).get(b.envMap||W),O=X&&X.mapping===yc?X.image.height:null,V=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ut("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let A=Z.morphAttributes.position||Z.morphAttributes.normal||Z.morphAttributes.color,K=A!==void 0?A.length:0,ce=0;Z.morphAttributes.position!==void 0&&(ce=1),Z.morphAttributes.normal!==void 0&&(ce=2),Z.morphAttributes.color!==void 0&&(ce=3);let pe,Ee,Be,te;if(V){let _e=Gr[V];pe=_e.vertexShader,Ee=_e.fragmentShader}else pe=b.vertexShader,Ee=b.fragmentShader,l.update(b),Be=l.getVertexShaderID(b),te=l.getFragmentShaderID(b);let re=r.getRenderTarget(),we=r.state.buffers.depth.getReversed(),Oe=B.isInstancedMesh===!0,Pe=B.isBatchedMesh===!0,qe=!!b.map,at=!!b.matcap,Fe=!!X,Xe=!!b.aoMap,Ze=!!b.lightMap,He=!!b.bumpMap,Q=!!b.normalMap,k=!!b.displacementMap,gt=!!b.emissiveMap,dt=!!b.metalnessMap,Qe=!!b.roughnessMap,ke=b.anisotropy>0,D=b.clearcoat>0,T=b.dispersion>0,L=b.iridescence>0,U=b.sheen>0,z=b.transmission>0,G=ke&&!!b.anisotropyMap,xe=D&&!!b.clearcoatMap,oe=D&&!!b.clearcoatNormalMap,Ie=D&&!!b.clearcoatRoughnessMap,Le=L&&!!b.iridescenceMap,de=L&&!!b.iridescenceThicknessMap,he=U&&!!b.sheenColorMap,Ue=U&&!!b.sheenRoughnessMap,ne=!!b.specularMap,j=!!b.specularColorMap,fe=!!b.specularIntensityMap,F=z&&!!b.transmissionMap,be=z&&!!b.thicknessMap,me=!!b.gradientMap,Re=!!b.alphaMap,ge=b.alphaTest>0,ae=!!b.alphaHash,Ae=!!b.extensions,le=Ar;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(le=r.toneMapping);let Y={shaderID:V,shaderType:b.type,shaderName:b.name,vertexShader:pe,fragmentShader:Ee,defines:b.defines,customVertexShaderID:Be,customFragmentShaderID:te,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Pe,batchingColor:Pe&&B._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&B.instanceColor!==null,instancingMorph:Oe&&B.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:br,alphaToCoverage:!!b.alphaToCoverage,map:qe,matcap:at,envMap:Fe,envMapMode:Fe&&X.mapping,envMapCubeUVHeight:O,aoMap:Xe,lightMap:Ze,bumpMap:He,normalMap:Q,displacementMap:k,emissiveMap:gt,normalMapObjectSpace:Q&&b.normalMapType===Ug,normalMapTangentSpace:Q&&b.normalMapType===yd,metalnessMap:dt,roughnessMap:Qe,anisotropy:ke,anisotropyMap:G,clearcoat:D,clearcoatMap:xe,clearcoatNormalMap:oe,clearcoatRoughnessMap:Ie,dispersion:T,iridescence:L,iridescenceMap:Le,iridescenceThicknessMap:de,sheen:U,sheenColorMap:he,sheenRoughnessMap:Ue,specularMap:ne,specularColorMap:j,specularIntensityMap:fe,transmission:z,transmissionMap:F,thicknessMap:be,gradientMap:me,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:Re,alphaTest:ge,alphaHash:ae,combine:b.combine,mapUv:qe&&p(b.map.channel),aoMapUv:Xe&&p(b.aoMap.channel),lightMapUv:Ze&&p(b.lightMap.channel),bumpMapUv:He&&p(b.bumpMap.channel),normalMapUv:Q&&p(b.normalMap.channel),displacementMapUv:k&&p(b.displacementMap.channel),emissiveMapUv:gt&&p(b.emissiveMap.channel),metalnessMapUv:dt&&p(b.metalnessMap.channel),roughnessMapUv:Qe&&p(b.roughnessMap.channel),anisotropyMapUv:G&&p(b.anisotropyMap.channel),clearcoatMapUv:xe&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ie&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:de&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:he&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&p(b.sheenRoughnessMap.channel),specularMapUv:ne&&p(b.specularMap.channel),specularColorMapUv:j&&p(b.specularColorMap.channel),specularIntensityMapUv:fe&&p(b.specularIntensityMap.channel),transmissionMapUv:F&&p(b.transmissionMap.channel),thicknessMapUv:be&&p(b.thicknessMap.channel),alphaMapUv:Re&&p(b.alphaMap.channel),vertexTangents:!!Z.attributes.tangent&&(Q||ke),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!Z.attributes.color&&Z.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!Z.attributes.uv&&(qe||Re),fog:!!H,useFog:b.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:we,skinning:B.isSkinnedMesh===!0,morphTargets:Z.morphAttributes.position!==void 0,morphNormals:Z.morphAttributes.normal!==void 0,morphColors:Z.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:ce,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&P.length>0,shadowMapType:r.shadowMap.type,toneMapping:le,decodeVideoTexture:qe&&b.map.isVideoTexture===!0&&Pt.getTransfer(b.map.colorSpace)===kt,decodeVideoTextureEmissive:gt&&b.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(b.emissiveMap.colorSpace)===kt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===Sn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:Ae&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&b.extensions.multiDraw===!0||Pe)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Y.vertexUv1s=c.has(1),Y.vertexUv2s=c.has(2),Y.vertexUv3s=c.has(3),c.clear(),Y}function m(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let P in b.defines)E.push(P),E.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(E,b),x(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let E=g[b.type],P;if(E){let N=Gr[E];P=ps.clone(N.uniforms)}else P=b.uniforms;return P}function M(b,E){let P=u.get(E);return P!==void 0?++P.usedTimes:(P=new zS(r,E,b,s),h.push(P),u.set(E,P)),P}function S(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){l.remove(b)}function C(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:v,acquireProgram:M,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:C}}function WS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function XS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function g_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function __(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,p,_){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:p,group:_},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=p,m.group=_),e++,m}function a(u,f,d,g,p,_){let m=o(u,f,d,g,p,_);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,g,p,_){let m=o(u,f,d,g,p,_);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||XS),n.length>1&&n.sort(f||g_),i.length>1&&i.sort(f||g_)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function qS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new __,r.set(n,[o])):i>=s.length?(o=new __,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function YS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new I,color:new Te};break;case"SpotLight":t={position:new I,direction:new I,color:new Te,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new I,color:new Te,distance:0,decay:0};break;case"HemisphereLight":t={direction:new I,skyColor:new Te,groundColor:new Te};break;case"RectAreaLight":t={color:new Te,position:new I,halfWidth:new I,halfHeight:new I};break}return r[e.id]=t,t}}}function $S(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var ZS=0;function JS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function KS(r){let e=new YS,t=$S(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new I);let i=new I,s=new Ct,o=new Ct;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,p=0,_=0,m=0,y=0,x=0,v=0,M=0,S=0,w=0;c.sort(JS);for(let b=0,E=c.length;b<E;b++){let P=c[b],N=P.color,B=P.intensity,H=P.distance,Z=null;if(P.shadow&&P.shadow.map&&(P.shadow.map.texture.format===Ao?Z=P.shadow.map.texture:Z=P.shadow.map.depthTexture||P.shadow.map.texture),P.isAmbientLight)h+=N.r*B,u+=N.g*B,f+=N.b*B;else if(P.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(P.sh.coefficients[W],B);w++}else if(P.isDirectionalLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){let X=P.shadow,O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.directionalShadow[d]=O,n.directionalShadowMap[d]=Z,n.directionalShadowMatrix[d]=P.shadow.matrix,y++}n.directional[d]=W,d++}else if(P.isSpotLight){let W=e.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(N).multiplyScalar(B),W.distance=H,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,n.spot[p]=W;let X=P.shadow;if(P.map&&(n.spotLightMap[M]=P.map,M++,X.updateMatrices(P),P.castShadow&&S++),n.spotLightMatrix[p]=X.matrix,P.castShadow){let O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,n.spotShadow[p]=O,n.spotShadowMap[p]=Z,v++}p++}else if(P.isRectAreaLight){let W=e.get(P);W.color.copy(N).multiplyScalar(B),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),n.rectArea[_]=W,_++}else if(P.isPointLight){let W=e.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){let X=P.shadow,O=t.get(P);O.shadowIntensity=X.intensity,O.shadowBias=X.bias,O.shadowNormalBias=X.normalBias,O.shadowRadius=X.radius,O.shadowMapSize=X.mapSize,O.shadowCameraNear=X.camera.near,O.shadowCameraFar=X.camera.far,n.pointShadow[g]=O,n.pointShadowMap[g]=Z,n.pointShadowMatrix[g]=P.shadow.matrix,x++}n.point[g]=W,g++}else if(P.isHemisphereLight){let W=e.get(P);W.skyColor.copy(P.color).multiplyScalar(B),W.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[m]=W,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ge.LTC_FLOAT_1,n.rectAreaLTC2=Ge.LTC_FLOAT_2):(n.rectAreaLTC1=Ge.LTC_HALF_1,n.rectAreaLTC2=Ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==p||C.rectAreaLength!==_||C.hemiLength!==m||C.numDirectionalShadows!==y||C.numPointShadows!==x||C.numSpotShadows!==v||C.numSpotMaps!==M||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=p,C.rectAreaLength=_,C.hemiLength=m,C.numDirectionalShadows=y,C.numPointShadows=x,C.numSpotShadows=v,C.numSpotMaps=M,C.numLightProbes=w,n.version=ZS++)}function l(c,h){let u=0,f=0,d=0,g=0,p=0,_=h.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){let x=c[m];if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),u++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),d++}else if(x.isRectAreaLight){let v=n.rectArea[g];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),g++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:a,setupView:l,state:n}}function x_(r){let e=new KS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function jS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new x_(r),e.set(i,[a])):s>=o.length?(a=new x_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var QS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,eT=`uniform sampler2D shadow_pass;
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
}`,tT=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],nT=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],v_=new Ct,Ac=new I,kp=new I;function iT(r,e,t){let n=new Da,i=new ye,s=new ye,o=new gn,a=new uh,l=new hh,c={},h=t.maxTextureSize,u={[as]:In,[In]:as,[Sn]:Sn},f=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ye},radius:{value:4}},vertexShader:QS,fragmentShader:eT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new xt;g.setAttribute("position",new Vt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new $e(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let m=this.type;this.render=function(S,w,C){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||S.length===0)return;S.type===Eh&&(ut("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=fc);let b=r.getRenderTarget(),E=r.getActiveCubeFace(),P=r.getActiveMipmapLevel(),N=r.state;N.setBlending(or),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=m!==this.type;B&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(Z=>Z.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,Z=S.length;H<Z;H++){let W=S[H],X=W.shadow;if(X===void 0){ut("WebGLShadowMap:",W,"has no shadow.");continue}if(X.autoUpdate===!1&&X.needsUpdate===!1)continue;i.copy(X.mapSize);let O=X.getFrameExtents();if(i.multiply(O),s.copy(X.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/O.x),i.x=s.x*O.x,X.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/O.y),i.y=s.y*O.y,X.mapSize.y=s.y)),X.map===null||B===!0){if(X.map!==null&&(X.map.depthTexture!==null&&(X.map.depthTexture.dispose(),X.map.depthTexture=null),X.map.dispose()),this.type===Ba){if(W.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}X.map=new un(i.x,i.y,{format:Ao,type:Tn,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),X.map.texture.name=W.name+".shadowMap",X.map.depthTexture=new rr(i.x,i.y,ar),X.map.depthTexture.name=W.name+".shadowMapDepth",X.map.depthTexture.format=Br,X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=jt,X.map.depthTexture.magFilter=jt}else{W.isPointLight?(X.map=new Xl(i.x),X.map.depthTexture=new sh(i.x,Rr)):(X.map=new un(i.x,i.y),X.map.depthTexture=new rr(i.x,i.y,Rr)),X.map.depthTexture.name=W.name+".shadowMap",X.map.depthTexture.format=Br;let A=r.state.buffers.depth.getReversed();this.type===fc?(X.map.depthTexture.compareFunction=A?Md:bd,X.map.depthTexture.minFilter=Zn,X.map.depthTexture.magFilter=Zn):(X.map.depthTexture.compareFunction=null,X.map.depthTexture.minFilter=jt,X.map.depthTexture.magFilter=jt)}X.camera.updateProjectionMatrix()}let V=X.map.isWebGLCubeRenderTarget?6:1;for(let A=0;A<V;A++){if(X.map.isWebGLCubeRenderTarget)r.setRenderTarget(X.map,A),r.clear();else{A===0&&(r.setRenderTarget(X.map),r.clear());let K=X.getViewport(A);o.set(s.x*K.x,s.y*K.y,s.x*K.z,s.y*K.w),N.viewport(o)}if(W.isPointLight){let K=X.camera,ce=X.matrix,pe=W.distance||K.far;pe!==K.far&&(K.far=pe,K.updateProjectionMatrix()),Ac.setFromMatrixPosition(W.matrixWorld),K.position.copy(Ac),kp.copy(K.position),kp.add(tT[A]),K.up.copy(nT[A]),K.lookAt(kp),K.updateMatrixWorld(),ce.makeTranslation(-Ac.x,-Ac.y,-Ac.z),v_.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),X._frustum.setFromProjectionMatrix(v_,K.coordinateSystem,K.reversedDepth)}else X.updateMatrices(W);n=X.getFrustum(),v(w,C,X.camera,W,this.type)}X.isPointLightShadow!==!0&&this.type===Ba&&y(X,C),X.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(b,E,P)};function y(S,w){let C=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new un(i.x,i.y,{format:Ao,type:Tn})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,C,f,p,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,C,d,p,null)}function x(S,w,C,b){let E=null,P=C.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(P!==void 0)E=P;else if(E=C.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let N=E.uuid,B=w.uuid,H=c[N];H===void 0&&(H={},c[N]=H);let Z=H[B];Z===void 0&&(Z=E.clone(),H[B]=Z,w.addEventListener("dispose",M)),E=Z}if(E.visible=w.visible,E.wireframe=w.wireframe,b===Ba?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,C.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let N=r.properties.get(E);N.light=C}return E}function v(S,w,C,b,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===Ba)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,S.matrixWorld);let B=e.update(S),H=S.material;if(Array.isArray(H)){let Z=B.groups;for(let W=0,X=Z.length;W<X;W++){let O=Z[W],V=H[O.materialIndex];if(V&&V.visible){let A=x(S,V,b,E);S.onBeforeShadow(r,S,w,C,B,A,O),r.renderBufferDirect(C,null,B,A,S,O),S.onAfterShadow(r,S,w,C,B,A,O)}}}else if(H.visible){let Z=x(S,H,b,E);S.onBeforeShadow(r,S,w,C,B,Z,null),r.renderBufferDirect(C,null,B,Z,S,null),S.onAfterShadow(r,S,w,C,B,Z,null)}}let N=S.children;for(let B=0,H=N.length;B<H;B++)v(N[B],w,C,b,E)}function M(S){S.target.removeEventListener("dispose",M);for(let C in c){let b=c[C],E=S.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var rT={[Sh]:Th,[wh]:Ch,[Ah]:Ph,[vo]:Rh,[Th]:Sh,[Ch]:wh,[Ph]:Ah,[Rh]:vo};function sT(r,e){function t(){let F=!1,be=new gn,me=null,Re=new gn(0,0,0,0);return{setMask:function(ge){me!==ge&&!F&&(r.colorMask(ge,ge,ge,ge),me=ge)},setLocked:function(ge){F=ge},setClear:function(ge,ae,Ae,le,Y){Y===!0&&(ge*=le,ae*=le,Ae*=le),be.set(ge,ae,Ae,le),Re.equals(be)===!1&&(r.clearColor(ge,ae,Ae,le),Re.copy(be))},reset:function(){F=!1,me=null,Re.set(-1,0,0,0)}}}function n(){let F=!1,be=!1,me=null,Re=null,ge=null;return{setReversed:function(ae){if(be!==ae){let Ae=e.get("EXT_clip_control");ae?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),be=ae;let le=ge;ge=null,this.setClear(le)}},getReversed:function(){return be},setTest:function(ae){ae?re(r.DEPTH_TEST):we(r.DEPTH_TEST)},setMask:function(ae){me!==ae&&!F&&(r.depthMask(ae),me=ae)},setFunc:function(ae){if(be&&(ae=rT[ae]),Re!==ae){switch(ae){case Sh:r.depthFunc(r.NEVER);break;case Th:r.depthFunc(r.ALWAYS);break;case wh:r.depthFunc(r.LESS);break;case vo:r.depthFunc(r.LEQUAL);break;case Ah:r.depthFunc(r.EQUAL);break;case Rh:r.depthFunc(r.GEQUAL);break;case Ch:r.depthFunc(r.GREATER);break;case Ph:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Re=ae}},setLocked:function(ae){F=ae},setClear:function(ae){ge!==ae&&(be&&(ae=1-ae),r.clearDepth(ae),ge=ae)},reset:function(){F=!1,me=null,Re=null,ge=null,be=!1}}}function i(){let F=!1,be=null,me=null,Re=null,ge=null,ae=null,Ae=null,le=null,Y=null;return{setTest:function(_e){F||(_e?re(r.STENCIL_TEST):we(r.STENCIL_TEST))},setMask:function(_e){be!==_e&&!F&&(r.stencilMask(_e),be=_e)},setFunc:function(_e,Ne,st){(me!==_e||Re!==Ne||ge!==st)&&(r.stencilFunc(_e,Ne,st),me=_e,Re=Ne,ge=st)},setOp:function(_e,Ne,st){(ae!==_e||Ae!==Ne||le!==st)&&(r.stencilOp(_e,Ne,st),ae=_e,Ae=Ne,le=st)},setLocked:function(_e){F=_e},setClear:function(_e){Y!==_e&&(r.clearStencil(_e),Y=_e)},reset:function(){F=!1,be=null,me=null,Re=null,ge=null,ae=null,Ae=null,le=null,Y=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,p=!1,_=null,m=null,y=null,x=null,v=null,M=null,S=null,w=new Te(0,0,0),C=0,b=!1,E=null,P=null,N=null,B=null,H=null,Z=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,X=0,O=r.getParameter(r.VERSION);O.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(O)[1]),W=X>=1):O.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),W=X>=2);let V=null,A={},K=r.getParameter(r.SCISSOR_BOX),ce=r.getParameter(r.VIEWPORT),pe=new gn().fromArray(K),Ee=new gn().fromArray(ce);function Be(F,be,me,Re){let ge=new Uint8Array(4),ae=r.createTexture();r.bindTexture(F,ae),r.texParameteri(F,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(F,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let Ae=0;Ae<me;Ae++)F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY?r.texImage3D(be,0,r.RGBA,1,1,Re,0,r.RGBA,r.UNSIGNED_BYTE,ge):r.texImage2D(be+Ae,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ge);return ae}let te={};te[r.TEXTURE_2D]=Be(r.TEXTURE_2D,r.TEXTURE_2D,1),te[r.TEXTURE_CUBE_MAP]=Be(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),te[r.TEXTURE_2D_ARRAY]=Be(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),te[r.TEXTURE_3D]=Be(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(vo),He(!1),Q(gp),re(r.CULL_FACE),Xe(or);function re(F){h[F]!==!0&&(r.enable(F),h[F]=!0)}function we(F){h[F]!==!1&&(r.disable(F),h[F]=!1)}function Oe(F,be){return u[F]!==be?(r.bindFramebuffer(F,be),u[F]=be,F===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=be),F===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=be),!0):!1}function Pe(F,be){let me=d,Re=!1;if(F){me=f.get(be),me===void 0&&(me=[],f.set(be,me));let ge=F.textures;if(me.length!==ge.length||me[0]!==r.COLOR_ATTACHMENT0){for(let ae=0,Ae=ge.length;ae<Ae;ae++)me[ae]=r.COLOR_ATTACHMENT0+ae;me.length=ge.length,Re=!0}}else me[0]!==r.BACK&&(me[0]=r.BACK,Re=!0);Re&&r.drawBuffers(me)}function qe(F){return g!==F?(r.useProgram(F),g=F,!0):!1}let at={[Ds]:r.FUNC_ADD,[mg]:r.FUNC_SUBTRACT,[gg]:r.FUNC_REVERSE_SUBTRACT};at[_g]=r.MIN,at[xg]=r.MAX;let Fe={[vg]:r.ZERO,[yg]:r.ONE,[bg]:r.SRC_COLOR,[Yu]:r.SRC_ALPHA,[Ag]:r.SRC_ALPHA_SATURATE,[Tg]:r.DST_COLOR,[Eg]:r.DST_ALPHA,[Mg]:r.ONE_MINUS_SRC_COLOR,[$u]:r.ONE_MINUS_SRC_ALPHA,[wg]:r.ONE_MINUS_DST_COLOR,[Sg]:r.ONE_MINUS_DST_ALPHA,[Rg]:r.CONSTANT_COLOR,[Cg]:r.ONE_MINUS_CONSTANT_COLOR,[Pg]:r.CONSTANT_ALPHA,[Ig]:r.ONE_MINUS_CONSTANT_ALPHA};function Xe(F,be,me,Re,ge,ae,Ae,le,Y,_e){if(F===or){p===!0&&(we(r.BLEND),p=!1);return}if(p===!1&&(re(r.BLEND),p=!0),F!==pg){if(F!==_||_e!==b){if((m!==Ds||v!==Ds)&&(r.blendEquation(r.FUNC_ADD),m=Ds,v=Ds),_e)switch(F){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ks:r.blendFunc(r.ONE,r.ONE);break;case _p:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:mt("WebGLState: Invalid blending: ",F);break}else switch(F){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case ks:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case _p:mt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xp:mt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:mt("WebGLState: Invalid blending: ",F);break}y=null,x=null,M=null,S=null,w.set(0,0,0),C=0,_=F,b=_e}return}ge=ge||be,ae=ae||me,Ae=Ae||Re,(be!==m||ge!==v)&&(r.blendEquationSeparate(at[be],at[ge]),m=be,v=ge),(me!==y||Re!==x||ae!==M||Ae!==S)&&(r.blendFuncSeparate(Fe[me],Fe[Re],Fe[ae],Fe[Ae]),y=me,x=Re,M=ae,S=Ae),(le.equals(w)===!1||Y!==C)&&(r.blendColor(le.r,le.g,le.b,Y),w.copy(le),C=Y),_=F,b=!1}function Ze(F,be){F.side===Sn?we(r.CULL_FACE):re(r.CULL_FACE);let me=F.side===In;be&&(me=!me),He(me),F.blending===xo&&F.transparent===!1?Xe(or):Xe(F.blending,F.blendEquation,F.blendSrc,F.blendDst,F.blendEquationAlpha,F.blendSrcAlpha,F.blendDstAlpha,F.blendColor,F.blendAlpha,F.premultipliedAlpha),o.setFunc(F.depthFunc),o.setTest(F.depthTest),o.setMask(F.depthWrite),s.setMask(F.colorWrite);let Re=F.stencilWrite;a.setTest(Re),Re&&(a.setMask(F.stencilWriteMask),a.setFunc(F.stencilFunc,F.stencilRef,F.stencilFuncMask),a.setOp(F.stencilFail,F.stencilZFail,F.stencilZPass)),gt(F.polygonOffset,F.polygonOffsetFactor,F.polygonOffsetUnits),F.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):we(r.SAMPLE_ALPHA_TO_COVERAGE)}function He(F){E!==F&&(F?r.frontFace(r.CW):r.frontFace(r.CCW),E=F)}function Q(F){F!==dg?(re(r.CULL_FACE),F!==P&&(F===gp?r.cullFace(r.BACK):F===fg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):we(r.CULL_FACE),P=F}function k(F){F!==N&&(W&&r.lineWidth(F),N=F)}function gt(F,be,me){F?(re(r.POLYGON_OFFSET_FILL),(B!==be||H!==me)&&(r.polygonOffset(be,me),B=be,H=me)):we(r.POLYGON_OFFSET_FILL)}function dt(F){F?re(r.SCISSOR_TEST):we(r.SCISSOR_TEST)}function Qe(F){F===void 0&&(F=r.TEXTURE0+Z-1),V!==F&&(r.activeTexture(F),V=F)}function ke(F,be,me){me===void 0&&(V===null?me=r.TEXTURE0+Z-1:me=V);let Re=A[me];Re===void 0&&(Re={type:void 0,texture:void 0},A[me]=Re),(Re.type!==F||Re.texture!==be)&&(V!==me&&(r.activeTexture(me),V=me),r.bindTexture(F,be||te[F]),Re.type=F,Re.texture=be)}function D(){let F=A[V];F!==void 0&&F.type!==void 0&&(r.bindTexture(F.type,null),F.type=void 0,F.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function L(){try{r.compressedTexImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function U(){try{r.texSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function z(){try{r.texSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function G(){try{r.compressedTexSubImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function xe(){try{r.compressedTexSubImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function oe(){try{r.texStorage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function Ie(){try{r.texStorage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function Le(){try{r.texImage2D(...arguments)}catch(F){mt("WebGLState:",F)}}function de(){try{r.texImage3D(...arguments)}catch(F){mt("WebGLState:",F)}}function he(F){pe.equals(F)===!1&&(r.scissor(F.x,F.y,F.z,F.w),pe.copy(F))}function Ue(F){Ee.equals(F)===!1&&(r.viewport(F.x,F.y,F.z,F.w),Ee.copy(F))}function ne(F,be){let me=c.get(be);me===void 0&&(me=new WeakMap,c.set(be,me));let Re=me.get(F);Re===void 0&&(Re=r.getUniformBlockIndex(be,F.name),me.set(F,Re))}function j(F,be){let Re=c.get(be).get(F);l.get(be)!==Re&&(r.uniformBlockBinding(be,Re,F.__bindingPointIndex),l.set(be,Re))}function fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},V=null,A={},u={},f=new WeakMap,d=[],g=null,p=!1,_=null,m=null,y=null,x=null,v=null,M=null,S=null,w=new Te(0,0,0),C=0,b=!1,E=null,P=null,N=null,B=null,H=null,pe.set(0,0,r.canvas.width,r.canvas.height),Ee.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:we,bindFramebuffer:Oe,drawBuffers:Pe,useProgram:qe,setBlending:Xe,setMaterial:Ze,setFlipSided:He,setCullFace:Q,setLineWidth:k,setPolygonOffset:gt,setScissorTest:dt,activeTexture:Qe,bindTexture:ke,unbindTexture:D,compressedTexImage2D:T,compressedTexImage3D:L,texImage2D:Le,texImage3D:de,updateUBOMapping:ne,uniformBlockBinding:j,texStorage2D:oe,texStorage3D:Ie,texSubImage2D:U,texSubImage3D:z,compressedTexSubImage2D:G,compressedTexSubImage3D:xe,scissor:he,viewport:Ue,reset:fe}}function oT(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ye,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,T){return d?new OffscreenCanvas(D,T):Ol("canvas")}function p(D,T,L){let U=1,z=ke(D);if((z.width>L||z.height>L)&&(U=L/Math.max(z.width,z.height)),U<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let G=Math.floor(U*z.width),xe=Math.floor(U*z.height);u===void 0&&(u=g(G,xe));let oe=T?g(G,xe):u;return oe.width=G,oe.height=xe,oe.getContext("2d").drawImage(D,0,0,G,xe),ut("WebGLRenderer: Texture has been resized from ("+z.width+"x"+z.height+") to ("+G+"x"+xe+")."),oe}else return"data"in D&&ut("WebGLRenderer: Image in DataTexture is too big ("+z.width+"x"+z.height+")."),D;return D}function _(D){return D.generateMipmaps}function m(D){r.generateMipmap(D)}function y(D){return D.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?r.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(D,T,L,U,z=!1){if(D!==null){if(r[D]!==void 0)return r[D];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let G=T;if(T===r.RED&&(L===r.FLOAT&&(G=r.R32F),L===r.HALF_FLOAT&&(G=r.R16F),L===r.UNSIGNED_BYTE&&(G=r.R8)),T===r.RED_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.R8UI),L===r.UNSIGNED_SHORT&&(G=r.R16UI),L===r.UNSIGNED_INT&&(G=r.R32UI),L===r.BYTE&&(G=r.R8I),L===r.SHORT&&(G=r.R16I),L===r.INT&&(G=r.R32I)),T===r.RG&&(L===r.FLOAT&&(G=r.RG32F),L===r.HALF_FLOAT&&(G=r.RG16F),L===r.UNSIGNED_BYTE&&(G=r.RG8)),T===r.RG_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RG8UI),L===r.UNSIGNED_SHORT&&(G=r.RG16UI),L===r.UNSIGNED_INT&&(G=r.RG32UI),L===r.BYTE&&(G=r.RG8I),L===r.SHORT&&(G=r.RG16I),L===r.INT&&(G=r.RG32I)),T===r.RGB_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RGB8UI),L===r.UNSIGNED_SHORT&&(G=r.RGB16UI),L===r.UNSIGNED_INT&&(G=r.RGB32UI),L===r.BYTE&&(G=r.RGB8I),L===r.SHORT&&(G=r.RGB16I),L===r.INT&&(G=r.RGB32I)),T===r.RGBA_INTEGER&&(L===r.UNSIGNED_BYTE&&(G=r.RGBA8UI),L===r.UNSIGNED_SHORT&&(G=r.RGBA16UI),L===r.UNSIGNED_INT&&(G=r.RGBA32UI),L===r.BYTE&&(G=r.RGBA8I),L===r.SHORT&&(G=r.RGBA16I),L===r.INT&&(G=r.RGBA32I)),T===r.RGB&&(L===r.UNSIGNED_INT_5_9_9_9_REV&&(G=r.RGB9_E5),L===r.UNSIGNED_INT_10F_11F_11F_REV&&(G=r.R11F_G11F_B10F)),T===r.RGBA){let xe=z?Nl:Pt.getTransfer(U);L===r.FLOAT&&(G=r.RGBA32F),L===r.HALF_FLOAT&&(G=r.RGBA16F),L===r.UNSIGNED_BYTE&&(G=xe===kt?r.SRGB8_ALPHA8:r.RGBA8),L===r.UNSIGNED_SHORT_4_4_4_4&&(G=r.RGBA4),L===r.UNSIGNED_SHORT_5_5_5_1&&(G=r.RGB5_A1)}return(G===r.R16F||G===r.R32F||G===r.RG16F||G===r.RG32F||G===r.RGBA16F||G===r.RGBA32F)&&e.get("EXT_color_buffer_float"),G}function v(D,T){let L;return D?T===null||T===Rr||T===Ha?L=r.DEPTH24_STENCIL8:T===ar?L=r.DEPTH32F_STENCIL8:T===ka&&(L=r.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Rr||T===Ha?L=r.DEPTH_COMPONENT24:T===ar?L=r.DEPTH_COMPONENT32F:T===ka&&(L=r.DEPTH_COMPONENT16),L}function M(D,T){return _(D)===!0||D.isFramebufferTexture&&D.minFilter!==jt&&D.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?T.mipmaps.length:1}function S(D){let T=D.target;T.removeEventListener("dispose",S),C(T),T.isVideoTexture&&h.delete(T)}function w(D){let T=D.target;T.removeEventListener("dispose",w),E(T)}function C(D){let T=n.get(D);if(T.__webglInit===void 0)return;let L=D.source,U=f.get(L);if(U){let z=U[T.__cacheKey];z.usedTimes--,z.usedTimes===0&&b(D),Object.keys(U).length===0&&f.delete(L)}n.remove(D)}function b(D){let T=n.get(D);r.deleteTexture(T.__webglTexture);let L=D.source,U=f.get(L);delete U[T.__cacheKey],o.memory.textures--}function E(D){let T=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(T.__webglFramebuffer[U]))for(let z=0;z<T.__webglFramebuffer[U].length;z++)r.deleteFramebuffer(T.__webglFramebuffer[U][z]);else r.deleteFramebuffer(T.__webglFramebuffer[U]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[U])}else{if(Array.isArray(T.__webglFramebuffer))for(let U=0;U<T.__webglFramebuffer.length;U++)r.deleteFramebuffer(T.__webglFramebuffer[U]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let U=0;U<T.__webglColorRenderbuffer.length;U++)T.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[U]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let L=D.textures;for(let U=0,z=L.length;U<z;U++){let G=n.get(L[U]);G.__webglTexture&&(r.deleteTexture(G.__webglTexture),o.memory.textures--),n.remove(L[U])}n.remove(D)}let P=0;function N(){P=0}function B(){let D=P;return D>=i.maxTextures&&ut("WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+i.maxTextures),P+=1,D}function H(D){let T=[];return T.push(D.wrapS),T.push(D.wrapT),T.push(D.wrapR||0),T.push(D.magFilter),T.push(D.minFilter),T.push(D.anisotropy),T.push(D.internalFormat),T.push(D.format),T.push(D.type),T.push(D.generateMipmaps),T.push(D.premultiplyAlpha),T.push(D.flipY),T.push(D.unpackAlignment),T.push(D.colorSpace),T.join()}function Z(D,T){let L=n.get(D);if(D.isVideoTexture&&dt(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&L.__version!==D.version){let U=D.image;if(U===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{te(L,D,T);return}}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,L.__webglTexture,r.TEXTURE0+T)}function W(D,T){let L=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){te(L,D,T);return}else D.isExternalTexture&&(L.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,L.__webglTexture,r.TEXTURE0+T)}function X(D,T){let L=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&L.__version!==D.version){te(L,D,T);return}t.bindTexture(r.TEXTURE_3D,L.__webglTexture,r.TEXTURE0+T)}function O(D,T){let L=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&L.__version!==D.version){re(L,D,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,L.__webglTexture,r.TEXTURE0+T)}let V={[wa]:r.REPEAT,[Ur]:r.CLAMP_TO_EDGE,[Zu]:r.MIRRORED_REPEAT},A={[jt]:r.NEAREST,[Fg]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Fh]:r.LINEAR_MIPMAP_NEAREST,[zs]:r.LINEAR_MIPMAP_LINEAR},K={[Og]:r.NEVER,[Vg]:r.ALWAYS,[Bg]:r.LESS,[bd]:r.LEQUAL,[kg]:r.EQUAL,[Md]:r.GEQUAL,[Hg]:r.GREATER,[zg]:r.NOTEQUAL};function ce(D,T){if(T.type===ar&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zn||T.magFilter===Fh||T.magFilter===bc||T.magFilter===zs||T.minFilter===Zn||T.minFilter===Fh||T.minFilter===bc||T.minFilter===zs)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(D,r.TEXTURE_WRAP_S,V[T.wrapS]),r.texParameteri(D,r.TEXTURE_WRAP_T,V[T.wrapT]),(D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY)&&r.texParameteri(D,r.TEXTURE_WRAP_R,V[T.wrapR]),r.texParameteri(D,r.TEXTURE_MAG_FILTER,A[T.magFilter]),r.texParameteri(D,r.TEXTURE_MIN_FILTER,A[T.minFilter]),T.compareFunction&&(r.texParameteri(D,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(D,r.TEXTURE_COMPARE_FUNC,K[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===jt||T.minFilter!==bc&&T.minFilter!==zs||T.type===ar&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let L=e.get("EXT_texture_filter_anisotropic");r.texParameterf(D,L.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function pe(D,T){let L=!1;D.__webglInit===void 0&&(D.__webglInit=!0,T.addEventListener("dispose",S));let U=T.source,z=f.get(U);z===void 0&&(z={},f.set(U,z));let G=H(T);if(G!==D.__cacheKey){z[G]===void 0&&(z[G]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,L=!0),z[G].usedTimes++;let xe=z[D.__cacheKey];xe!==void 0&&(z[D.__cacheKey].usedTimes--,xe.usedTimes===0&&b(T)),D.__cacheKey=G,D.__webglTexture=z[G].texture}return L}function Ee(D,T,L){return Math.floor(Math.floor(D/L)/T)}function Be(D,T,L,U){let G=D.updateRanges;if(G.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,L,U,T.data);else{G.sort((de,he)=>de.start-he.start);let xe=0;for(let de=1;de<G.length;de++){let he=G[xe],Ue=G[de],ne=he.start+he.count,j=Ee(Ue.start,T.width,4),fe=Ee(he.start,T.width,4);Ue.start<=ne+1&&j===fe&&Ee(Ue.start+Ue.count-1,T.width,4)===j?he.count=Math.max(he.count,Ue.start+Ue.count-he.start):(++xe,G[xe]=Ue)}G.length=xe+1;let oe=r.getParameter(r.UNPACK_ROW_LENGTH),Ie=r.getParameter(r.UNPACK_SKIP_PIXELS),Le=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let de=0,he=G.length;de<he;de++){let Ue=G[de],ne=Math.floor(Ue.start/4),j=Math.ceil(Ue.count/4),fe=ne%T.width,F=Math.floor(ne/T.width),be=j,me=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,fe),r.pixelStorei(r.UNPACK_SKIP_ROWS,F),t.texSubImage2D(r.TEXTURE_2D,0,fe,F,be,me,L,U,T.data)}D.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ie),r.pixelStorei(r.UNPACK_SKIP_ROWS,Le)}}function te(D,T,L){let U=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(U=r.TEXTURE_3D);let z=pe(D,T),G=T.source;t.bindTexture(U,D.__webglTexture,r.TEXTURE0+L);let xe=n.get(G);if(G.version!==xe.__version||z===!0){t.activeTexture(r.TEXTURE0+L);let oe=Pt.getPrimaries(Pt.workingColorSpace),Ie=T.colorSpace===fs?null:Pt.getPrimaries(T.colorSpace),Le=T.colorSpace===fs||oe===Ie?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let de=p(T.image,!1,i.maxTextureSize);de=Qe(T,de);let he=s.convert(T.format,T.colorSpace),Ue=s.convert(T.type),ne=x(T.internalFormat,he,Ue,T.colorSpace,T.isVideoTexture);ce(U,T);let j,fe=T.mipmaps,F=T.isVideoTexture!==!0,be=xe.__version===void 0||z===!0,me=G.dataReady,Re=M(T,de);if(T.isDepthTexture)ne=v(T.format===Vs,T.type),be&&(F?t.texStorage2D(r.TEXTURE_2D,1,ne,de.width,de.height):t.texImage2D(r.TEXTURE_2D,0,ne,de.width,de.height,0,he,Ue,null));else if(T.isDataTexture)if(fe.length>0){F&&be&&t.texStorage2D(r.TEXTURE_2D,Re,ne,fe[0].width,fe[0].height);for(let ge=0,ae=fe.length;ge<ae;ge++)j=fe[ge],F?me&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,j.width,j.height,he,Ue,j.data):t.texImage2D(r.TEXTURE_2D,ge,ne,j.width,j.height,0,he,Ue,j.data);T.generateMipmaps=!1}else F?(be&&t.texStorage2D(r.TEXTURE_2D,Re,ne,de.width,de.height),me&&Be(T,de,he,Ue)):t.texImage2D(r.TEXTURE_2D,0,ne,de.width,de.height,0,he,Ue,de.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){F&&be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ne,fe[0].width,fe[0].height,de.depth);for(let ge=0,ae=fe.length;ge<ae;ge++)if(j=fe[ge],T.format!==lr)if(he!==null)if(F){if(me)if(T.layerUpdates.size>0){let Ae=Dp(j.width,j.height,T.format,T.type);for(let le of T.layerUpdates){let Y=j.data.subarray(le*Ae/j.data.BYTES_PER_ELEMENT,(le+1)*Ae/j.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,le,j.width,j.height,1,he,Y)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,j.width,j.height,de.depth,he,j.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ge,ne,j.width,j.height,de.depth,0,j.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else F?me&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ge,0,0,0,j.width,j.height,de.depth,he,Ue,j.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ge,ne,j.width,j.height,de.depth,0,he,Ue,j.data)}else{F&&be&&t.texStorage2D(r.TEXTURE_2D,Re,ne,fe[0].width,fe[0].height);for(let ge=0,ae=fe.length;ge<ae;ge++)j=fe[ge],T.format!==lr?he!==null?F?me&&t.compressedTexSubImage2D(r.TEXTURE_2D,ge,0,0,j.width,j.height,he,j.data):t.compressedTexImage2D(r.TEXTURE_2D,ge,ne,j.width,j.height,0,j.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):F?me&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,j.width,j.height,he,Ue,j.data):t.texImage2D(r.TEXTURE_2D,ge,ne,j.width,j.height,0,he,Ue,j.data)}else if(T.isDataArrayTexture)if(F){if(be&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Re,ne,de.width,de.height,de.depth),me)if(T.layerUpdates.size>0){let ge=Dp(de.width,de.height,T.format,T.type);for(let ae of T.layerUpdates){let Ae=de.data.subarray(ae*ge/de.data.BYTES_PER_ELEMENT,(ae+1)*ge/de.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ae,de.width,de.height,1,he,Ue,Ae)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,de.width,de.height,de.depth,he,Ue,de.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,ne,de.width,de.height,de.depth,0,he,Ue,de.data);else if(T.isData3DTexture)F?(be&&t.texStorage3D(r.TEXTURE_3D,Re,ne,de.width,de.height,de.depth),me&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,de.width,de.height,de.depth,he,Ue,de.data)):t.texImage3D(r.TEXTURE_3D,0,ne,de.width,de.height,de.depth,0,he,Ue,de.data);else if(T.isFramebufferTexture){if(be)if(F)t.texStorage2D(r.TEXTURE_2D,Re,ne,de.width,de.height);else{let ge=de.width,ae=de.height;for(let Ae=0;Ae<Re;Ae++)t.texImage2D(r.TEXTURE_2D,Ae,ne,ge,ae,0,he,Ue,null),ge>>=1,ae>>=1}}else if(fe.length>0){if(F&&be){let ge=ke(fe[0]);t.texStorage2D(r.TEXTURE_2D,Re,ne,ge.width,ge.height)}for(let ge=0,ae=fe.length;ge<ae;ge++)j=fe[ge],F?me&&t.texSubImage2D(r.TEXTURE_2D,ge,0,0,he,Ue,j):t.texImage2D(r.TEXTURE_2D,ge,ne,he,Ue,j);T.generateMipmaps=!1}else if(F){if(be){let ge=ke(de);t.texStorage2D(r.TEXTURE_2D,Re,ne,ge.width,ge.height)}me&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,he,Ue,de)}else t.texImage2D(r.TEXTURE_2D,0,ne,he,Ue,de);_(T)&&m(U),xe.__version=G.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function re(D,T,L){if(T.image.length!==6)return;let U=pe(D,T),z=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+L);let G=n.get(z);if(z.version!==G.__version||U===!0){t.activeTexture(r.TEXTURE0+L);let xe=Pt.getPrimaries(Pt.workingColorSpace),oe=T.colorSpace===fs?null:Pt.getPrimaries(T.colorSpace),Ie=T.colorSpace===fs||xe===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie);let Le=T.isCompressedTexture||T.image[0].isCompressedTexture,de=T.image[0]&&T.image[0].isDataTexture,he=[];for(let ae=0;ae<6;ae++)!Le&&!de?he[ae]=p(T.image[ae],!0,i.maxCubemapSize):he[ae]=de?T.image[ae].image:T.image[ae],he[ae]=Qe(T,he[ae]);let Ue=he[0],ne=s.convert(T.format,T.colorSpace),j=s.convert(T.type),fe=x(T.internalFormat,ne,j,T.colorSpace),F=T.isVideoTexture!==!0,be=G.__version===void 0||U===!0,me=z.dataReady,Re=M(T,Ue);ce(r.TEXTURE_CUBE_MAP,T);let ge;if(Le){F&&be&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,fe,Ue.width,Ue.height);for(let ae=0;ae<6;ae++){ge=he[ae].mipmaps;for(let Ae=0;Ae<ge.length;Ae++){let le=ge[Ae];T.format!==lr?ne!==null?F?me&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,le.width,le.height,ne,le.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,fe,le.width,le.height,0,le.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):F?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,0,0,le.width,le.height,ne,j,le.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae,fe,le.width,le.height,0,ne,j,le.data)}}}else{if(ge=T.mipmaps,F&&be){ge.length>0&&Re++;let ae=ke(he[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Re,fe,ae.width,ae.height)}for(let ae=0;ae<6;ae++)if(de){F?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,he[ae].width,he[ae].height,ne,j,he[ae].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,fe,he[ae].width,he[ae].height,0,ne,j,he[ae].data);for(let Ae=0;Ae<ge.length;Ae++){let Y=ge[Ae].image[ae].image;F?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,Y.width,Y.height,ne,j,Y.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,fe,Y.width,Y.height,0,ne,j,Y.data)}}else{F?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,0,0,ne,j,he[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0,fe,ne,j,he[ae]);for(let Ae=0;Ae<ge.length;Ae++){let le=ge[Ae];F?me&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,0,0,ne,j,le.image[ae]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ae+1,fe,ne,j,le.image[ae])}}}_(T)&&m(r.TEXTURE_CUBE_MAP),G.__version=z.version,T.onUpdate&&T.onUpdate(T)}D.__version=T.version}function we(D,T,L,U,z,G){let xe=s.convert(L.format,L.colorSpace),oe=s.convert(L.type),Ie=x(L.internalFormat,xe,oe,L.colorSpace),Le=n.get(T),de=n.get(L);if(de.__renderTarget=T,!Le.__hasExternalTextures){let he=Math.max(1,T.width>>G),Ue=Math.max(1,T.height>>G);z===r.TEXTURE_3D||z===r.TEXTURE_2D_ARRAY?t.texImage3D(z,G,Ie,he,Ue,T.depth,0,xe,oe,null):t.texImage2D(z,G,Ie,he,Ue,0,xe,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,D),gt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,z,de.__webglTexture,0,k(T)):(z===r.TEXTURE_2D||z>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&z<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,z,de.__webglTexture,G),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(D,T,L){if(r.bindRenderbuffer(r.RENDERBUFFER,D),T.depthBuffer){let U=T.depthTexture,z=U&&U.isDepthTexture?U.type:null,G=v(T.stencilBuffer,z),xe=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;gt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),G,T.width,T.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),G,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,G,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,xe,r.RENDERBUFFER,D)}else{let U=T.textures;for(let z=0;z<U.length;z++){let G=U[z],xe=s.convert(G.format,G.colorSpace),oe=s.convert(G.type),Ie=x(G.internalFormat,xe,oe,G.colorSpace);gt(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,k(T),Ie,T.width,T.height):L?r.renderbufferStorageMultisample(r.RENDERBUFFER,k(T),Ie,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Ie,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Pe(D,T,L){let U=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,D),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let z=n.get(T.depthTexture);if(z.__renderTarget=T,(!z.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U){if(z.__webglInit===void 0&&(z.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),z.__webglTexture===void 0){z.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,z.__webglTexture),ce(r.TEXTURE_CUBE_MAP,T.depthTexture);let Le=s.convert(T.depthTexture.format),de=s.convert(T.depthTexture.type),he;T.depthTexture.format===Br?he=r.DEPTH_COMPONENT24:T.depthTexture.format===Vs&&(he=r.DEPTH24_STENCIL8);for(let Ue=0;Ue<6;Ue++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Ue,0,he,T.width,T.height,0,Le,de,null)}}else Z(T.depthTexture,0);let G=z.__webglTexture,xe=k(T),oe=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+L:r.TEXTURE_2D,Ie=T.depthTexture.format===Vs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===Br)gt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,oe,G,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,oe,G,0);else if(T.depthTexture.format===Vs)gt(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Ie,oe,G,0,xe):r.framebufferTexture2D(r.FRAMEBUFFER,Ie,oe,G,0);else throw new Error("Unknown depthTexture format")}function qe(D){let T=n.get(D),L=D.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==D.depthTexture){let U=D.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),U){let z=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,U.removeEventListener("dispose",z)};U.addEventListener("dispose",z),T.__depthDisposeCallback=z}T.__boundDepthTexture=U}if(D.depthTexture&&!T.__autoAllocateDepthBuffer)if(L)for(let U=0;U<6;U++)Pe(T.__webglFramebuffer[U],D,U);else{let U=D.texture.mipmaps;U&&U.length>0?Pe(T.__webglFramebuffer[0],D,0):Pe(T.__webglFramebuffer,D,0)}else if(L){T.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[U]),T.__webglDepthbuffer[U]===void 0)T.__webglDepthbuffer[U]=r.createRenderbuffer(),Oe(T.__webglDepthbuffer[U],D,!1);else{let z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,z,r.RENDERBUFFER,G)}}else{let U=D.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Oe(T.__webglDepthbuffer,D,!1);else{let z=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,G=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,G),r.framebufferRenderbuffer(r.FRAMEBUFFER,z,r.RENDERBUFFER,G)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function at(D,T,L){let U=n.get(D);T!==void 0&&we(U.__webglFramebuffer,D,D.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),L!==void 0&&qe(D)}function Fe(D){let T=D.texture,L=n.get(D),U=n.get(T);D.addEventListener("dispose",w);let z=D.textures,G=D.isWebGLCubeRenderTarget===!0,xe=z.length>1;if(xe||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=T.version,o.memory.textures++),G){L.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer[oe]=[];for(let Ie=0;Ie<T.mipmaps.length;Ie++)L.__webglFramebuffer[oe][Ie]=r.createFramebuffer()}else L.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){L.__webglFramebuffer=[];for(let oe=0;oe<T.mipmaps.length;oe++)L.__webglFramebuffer[oe]=r.createFramebuffer()}else L.__webglFramebuffer=r.createFramebuffer();if(xe)for(let oe=0,Ie=z.length;oe<Ie;oe++){let Le=n.get(z[oe]);Le.__webglTexture===void 0&&(Le.__webglTexture=r.createTexture(),o.memory.textures++)}if(D.samples>0&&gt(D)===!1){L.__webglMultisampledFramebuffer=r.createFramebuffer(),L.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,L.__webglMultisampledFramebuffer);for(let oe=0;oe<z.length;oe++){let Ie=z[oe];L.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,L.__webglColorRenderbuffer[oe]);let Le=s.convert(Ie.format,Ie.colorSpace),de=s.convert(Ie.type),he=x(Ie.internalFormat,Le,de,Ie.colorSpace,D.isXRRenderTarget===!0),Ue=k(D);r.renderbufferStorageMultisample(r.RENDERBUFFER,Ue,he,D.width,D.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,L.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),D.depthBuffer&&(L.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(L.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(G){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),ce(r.TEXTURE_CUBE_MAP,T);for(let oe=0;oe<6;oe++)if(T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)we(L.__webglFramebuffer[oe][Ie],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Ie);else we(L.__webglFramebuffer[oe],D,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(T)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let oe=0,Ie=z.length;oe<Ie;oe++){let Le=z[oe],de=n.get(Le),he=r.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(he=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(he,de.__webglTexture),ce(he,Le),we(L.__webglFramebuffer,D,Le,r.COLOR_ATTACHMENT0+oe,he,0),_(Le)&&m(he)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(oe=D.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,U.__webglTexture),ce(oe,T),T.mipmaps&&T.mipmaps.length>0)for(let Ie=0;Ie<T.mipmaps.length;Ie++)we(L.__webglFramebuffer[Ie],D,T,r.COLOR_ATTACHMENT0,oe,Ie);else we(L.__webglFramebuffer,D,T,r.COLOR_ATTACHMENT0,oe,0);_(T)&&m(oe),t.unbindTexture()}D.depthBuffer&&qe(D)}function Xe(D){let T=D.textures;for(let L=0,U=T.length;L<U;L++){let z=T[L];if(_(z)){let G=y(D),xe=n.get(z).__webglTexture;t.bindTexture(G,xe),m(G),t.unbindTexture()}}}let Ze=[],He=[];function Q(D){if(D.samples>0){if(gt(D)===!1){let T=D.textures,L=D.width,U=D.height,z=r.COLOR_BUFFER_BIT,G=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,xe=n.get(D),oe=T.length>1;if(oe)for(let Le=0;Le<T.length;Le++)t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer);let Ie=D.texture.mipmaps;Ie&&Ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let Le=0;Le<T.length;Le++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(z|=r.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(z|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);let de=n.get(T[Le]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,de,0)}r.blitFramebuffer(0,0,L,U,0,0,L,U,z,r.NEAREST),l===!0&&(Ze.length=0,He.length=0,Ze.push(r.COLOR_ATTACHMENT0+Le),D.depthBuffer&&D.resolveDepthBuffer===!1&&(Ze.push(G),He.push(G),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,He)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Le=0;Le<T.length;Le++){t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.RENDERBUFFER,xe.__webglColorRenderbuffer[Le]);let de=n.get(T[Le]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,xe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Le,r.TEXTURE_2D,de,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){let T=D.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function k(D){return Math.min(i.maxSamples,D.samples)}function gt(D){let T=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function dt(D){let T=o.render.frame;h.get(D)!==T&&(h.set(D,T),D.update())}function Qe(D,T){let L=D.colorSpace,U=D.format,z=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||L!==br&&L!==fs&&(Pt.getTransfer(L)===kt?(U!==lr||z!==Pi)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):mt("WebGLTextures: Unsupported texture color space:",L)),T}function ke(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=B,this.resetTextureUnits=N,this.setTexture2D=Z,this.setTexture2DArray=W,this.setTexture3D=X,this.setTextureCube=O,this.rebindTextures=at,this.setupRenderTarget=Fe,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=Q,this.setupDepthRenderbuffer=qe,this.setupFrameBufferTexture=we,this.useMultisampledRTT=gt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function aT(r,e){function t(n,i=fs){let s,o=Pt.getTransfer(i);if(n===Pi)return r.UNSIGNED_BYTE;if(n===Uh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Oh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Mp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ep)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===yp)return r.BYTE;if(n===bp)return r.SHORT;if(n===ka)return r.UNSIGNED_SHORT;if(n===Nh)return r.INT;if(n===Rr)return r.UNSIGNED_INT;if(n===ar)return r.FLOAT;if(n===Tn)return r.HALF_FLOAT;if(n===Sp)return r.ALPHA;if(n===Tp)return r.RGB;if(n===lr)return r.RGBA;if(n===Br)return r.DEPTH_COMPONENT;if(n===Vs)return r.DEPTH_STENCIL;if(n===Bh)return r.RED;if(n===kh)return r.RED_INTEGER;if(n===Ao)return r.RG;if(n===Hh)return r.RG_INTEGER;if(n===zh)return r.RGBA_INTEGER;if(n===Mc||n===Ec||n===Sc||n===Tc)if(o===kt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Vh||n===Gh||n===Wh||n===Xh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Vh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Gh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===qh||n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===jh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===qh||n===Yh)return o===kt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===$h)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Zh)return s.COMPRESSED_R11_EAC;if(n===Jh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===Kh)return s.COMPRESSED_RG11_EAC;if(n===jh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Qh||n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===od||n===ad||n===ld||n===cd||n===ud||n===hd||n===dd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Qh)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===ed)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===td)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===nd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===id)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===sd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===od)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ad)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ld)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===cd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ud)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===hd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dd)return o===kt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===fd||n===pd||n===md)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===fd)return o===kt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pd)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===md)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===gd||n===_d||n===xd||n===vd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===gd)return s.COMPRESSED_RED_RGTC1_EXT;if(n===_d)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Ha?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var lT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cT=`
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

}`,Yp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Jl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Nt({vertexShader:lT,fragmentShader:cT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new $e(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},$p=class extends ls{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,p=typeof XRWebGLBinding<"u",_=new Yp,m={},y=t.getContextAttributes(),x=null,v=null,M=[],S=[],w=new ye,C=null,b=new Ht;b.viewport=new gn;let E=new Ht;E.viewport=new gn;let P=[b,E],N=new Mh,B=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(te){let re=M[te];return re===void 0&&(re=new La,M[te]=re),re.getTargetRaySpace()},this.getControllerGrip=function(te){let re=M[te];return re===void 0&&(re=new La,M[te]=re),re.getGripSpace()},this.getHand=function(te){let re=M[te];return re===void 0&&(re=new La,M[te]=re),re.getHandSpace()};function Z(te){let re=S.indexOf(te.inputSource);if(re===-1)return;let we=M[re];we!==void 0&&(we.update(te.inputSource,te.frame,c||o),we.dispatchEvent({type:te.type,data:te.inputSource}))}function W(){i.removeEventListener("select",Z),i.removeEventListener("selectstart",Z),i.removeEventListener("selectend",Z),i.removeEventListener("squeeze",Z),i.removeEventListener("squeezestart",Z),i.removeEventListener("squeezeend",Z),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",X);for(let te=0;te<M.length;te++){let re=S[te];re!==null&&(S[te]=null,M[te].disconnect(re))}B=null,H=null,_.reset();for(let te in m)delete m[te];e.setRenderTarget(x),d=null,f=null,u=null,i=null,v=null,Be.stop(),n.isPresenting=!1,e.setPixelRatio(C),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(te){s=te,n.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(te){a=te,n.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(te){c=te},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&p&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(te){if(i=te,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",Z),i.addEventListener("selectstart",Z),i.addEventListener("selectend",Z),i.addEventListener("squeeze",Z),i.addEventListener("squeezestart",Z),i.addEventListener("squeezeend",Z),i.addEventListener("end",W),i.addEventListener("inputsourceschange",X),y.xrCompatible!==!0&&await t.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(w),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Oe=null,Pe=null;y.depth&&(Pe=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=y.stencil?Vs:Br,Oe=y.stencil?Ha:Rr);let qe={colorFormat:t.RGBA8,depthFormat:Pe,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(qe),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new un(f.textureWidth,f.textureHeight,{format:lr,type:Pi,depthTexture:new rr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let we={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,we),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new un(d.framebufferWidth,d.framebufferHeight,{format:lr,type:Pi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Be.setContext(i),Be.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function X(te){for(let re=0;re<te.removed.length;re++){let we=te.removed[re],Oe=S.indexOf(we);Oe>=0&&(S[Oe]=null,M[Oe].disconnect(we))}for(let re=0;re<te.added.length;re++){let we=te.added[re],Oe=S.indexOf(we);if(Oe===-1){for(let qe=0;qe<M.length;qe++)if(qe>=S.length){S.push(we),Oe=qe;break}else if(S[qe]===null){S[qe]=we,Oe=qe;break}if(Oe===-1)break}let Pe=M[Oe];Pe&&Pe.connect(we)}}let O=new I,V=new I;function A(te,re,we){O.setFromMatrixPosition(re.matrixWorld),V.setFromMatrixPosition(we.matrixWorld);let Oe=O.distanceTo(V),Pe=re.projectionMatrix.elements,qe=we.projectionMatrix.elements,at=Pe[14]/(Pe[10]-1),Fe=Pe[14]/(Pe[10]+1),Xe=(Pe[9]+1)/Pe[5],Ze=(Pe[9]-1)/Pe[5],He=(Pe[8]-1)/Pe[0],Q=(qe[8]+1)/qe[0],k=at*He,gt=at*Q,dt=Oe/(-He+Q),Qe=dt*-He;if(re.matrixWorld.decompose(te.position,te.quaternion,te.scale),te.translateX(Qe),te.translateZ(dt),te.matrixWorld.compose(te.position,te.quaternion,te.scale),te.matrixWorldInverse.copy(te.matrixWorld).invert(),Pe[10]===-1)te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let ke=at+dt,D=Fe+dt,T=k-Qe,L=gt+(Oe-Qe),U=Xe*Fe/D*ke,z=Ze*Fe/D*ke;te.projectionMatrix.makePerspective(T,L,U,z,ke,D),te.projectionMatrixInverse.copy(te.projectionMatrix).invert()}}function K(te,re){re===null?te.matrixWorld.copy(te.matrix):te.matrixWorld.multiplyMatrices(re.matrixWorld,te.matrix),te.matrixWorldInverse.copy(te.matrixWorld).invert()}this.updateCamera=function(te){if(i===null)return;let re=te.near,we=te.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(we=_.depthFar)),N.near=E.near=b.near=re,N.far=E.far=b.far=we,(B!==N.near||H!==N.far)&&(i.updateRenderState({depthNear:N.near,depthFar:N.far}),B=N.near,H=N.far),N.layers.mask=te.layers.mask|6,b.layers.mask=N.layers.mask&3,E.layers.mask=N.layers.mask&5;let Oe=te.parent,Pe=N.cameras;K(N,Oe);for(let qe=0;qe<Pe.length;qe++)K(Pe[qe],Oe);Pe.length===2?A(N,b,E):N.projectionMatrix.copy(b.projectionMatrix),ce(te,N,Oe)};function ce(te,re,we){we===null?te.matrix.copy(re.matrixWorld):(te.matrix.copy(we.matrixWorld),te.matrix.invert(),te.matrix.multiply(re.matrixWorld)),te.matrix.decompose(te.position,te.quaternion,te.scale),te.updateMatrixWorld(!0),te.projectionMatrix.copy(re.projectionMatrix),te.projectionMatrixInverse.copy(re.projectionMatrixInverse),te.isPerspectiveCamera&&(te.fov=Ca*2*Math.atan(1/te.projectionMatrix.elements[5]),te.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(te){l=te,f!==null&&(f.fixedFoveation=te),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=te)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(N)},this.getCameraTexture=function(te){return m[te]};let pe=null;function Ee(te,re){if(h=re.getViewerPose(c||o),g=re,h!==null){let we=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Oe=!1;we.length!==N.cameras.length&&(N.cameras.length=0,Oe=!0);for(let Fe=0;Fe<we.length;Fe++){let Xe=we[Fe],Ze=null;if(d!==null)Ze=d.getViewport(Xe);else{let Q=u.getViewSubImage(f,Xe);Ze=Q.viewport,Fe===0&&(e.setRenderTargetTextures(v,Q.colorTexture,Q.depthStencilTexture),e.setRenderTarget(v))}let He=P[Fe];He===void 0&&(He=new Ht,He.layers.enable(Fe),He.viewport=new gn,P[Fe]=He),He.matrix.fromArray(Xe.transform.matrix),He.matrix.decompose(He.position,He.quaternion,He.scale),He.projectionMatrix.fromArray(Xe.projectionMatrix),He.projectionMatrixInverse.copy(He.projectionMatrix).invert(),He.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),Fe===0&&(N.matrix.copy(He.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),Oe===!0&&N.cameras.push(He)}let Pe=i.enabledFeatures;if(Pe&&Pe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&p){u=n.getBinding();let Fe=u.getDepthInformation(we[0]);Fe&&Fe.isValid&&Fe.texture&&_.init(Fe,i.renderState)}if(Pe&&Pe.includes("camera-access")&&p){e.state.unbindTexture(),u=n.getBinding();for(let Fe=0;Fe<we.length;Fe++){let Xe=we[Fe].camera;if(Xe){let Ze=m[Xe];Ze||(Ze=new Jl,m[Xe]=Ze);let He=u.getCameraImage(Xe);Ze.sourceTexture=He}}}}for(let we=0;we<M.length;we++){let Oe=S[we],Pe=M[we];Oe!==null&&Pe!==void 0&&Pe.update(Oe,re,c||o)}pe&&pe(te,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),g=null}let Be=new y_;Be.setAnimationLoop(Ee),this.setAnimationLoop=function(te){pe=te},this.dispose=function(){}}},Io=new Wn,uT=new Ct;function hT(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Cp(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,y,x,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),u(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&d(_,m,v)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),p(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,y,x):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===In&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===In&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let y=e.get(m),x=y.envMap,v=y.envMapRotation;x&&(_.envMap.value=x,Io.copy(v),Io.x*=-1,Io.y*=-1,Io.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Io.y*=-1,Io.z*=-1),_.envMapRotation.value.setFromMatrix4(uT.makeRotationFromEuler(Io)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,y,x){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*y,_.scale.value=x*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,y){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function p(_,m){let y=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function dT(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(g(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",_));let M=x.program;n.updateUBOMapping(y,M);let S=e.render.frame;s[y.id]!==S&&(f(y),s[y.id]=S)}function h(y){let x=u();y.__bindingPointIndex=x;let v=r.createBuffer(),M=y.__size,S=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return mt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let S=0,w=v.length;S<w;S++){let C=Array.isArray(v[S])?v[S]:[v[S]];for(let b=0,E=C.length;b<E;b++){let P=C[b];if(d(P,S,b,M)===!0){let N=P.__offset,B=Array.isArray(P.value)?P.value:[P.value],H=0;for(let Z=0;Z<B.length;Z++){let W=B[Z],X=p(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,N+H,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,H),H+=X.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,N,P.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,v,M){let S=y.value,w=x+"_"+v;if(M[w]===void 0)return typeof S=="number"||typeof S=="boolean"?M[w]=S:M[w]=S.clone(),!0;{let C=M[w];if(typeof S=="number"||typeof S=="boolean"){if(C!==S)return M[w]=S,!0}else if(C.equals(S)===!1)return C.copy(S),!0}return!1}function g(y){let x=y.uniforms,v=0,M=16;for(let w=0,C=x.length;w<C;w++){let b=Array.isArray(x[w])?x[w]:[x[w]];for(let E=0,P=b.length;E<P;E++){let N=b[E],B=Array.isArray(N.value)?N.value:[N.value];for(let H=0,Z=B.length;H<Z;H++){let W=B[H],X=p(W),O=v%M,V=O%X.boundary,A=O+V;v+=V,A!==0&&M-A<X.storage&&(v+=M-A),N.__data=new Float32Array(X.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=X.storage}}}let S=v%M;return S>0&&(v+=M-S),y.__size=v,y.__cache={},this}function p(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ut("WebGLRenderer: Unsupported uniform value type.",y),x}function _(y){let x=y.target;x.removeEventListener("dispose",_);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function m(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var fT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Vr=null;function pT(){return Vr===null&&(Vr=new Yl(fT,16,16,Ao,Tn),Vr.name="DFG_LUT",Vr.minFilter=Zn,Vr.magFilter=Zn,Vr.wrapS=Ur,Vr.wrapT=Ur,Vr.generateMipmaps=!1,Vr.needsUpdate=!0),Vr}var li=class{constructor(e={}){let{canvas:t=Gg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Pi}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let p=d,_=new Set([zh,Hh,kh]),m=new Set([Pi,Rr,ka,Ha,Uh,Oh]),y=new Uint32Array(4),x=new Int32Array(4),v=null,M=null,S=[],w=[],C=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ar,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,E=!1;this._outputColorSpace=Zt;let P=0,N=0,B=null,H=-1,Z=null,W=new gn,X=new gn,O=null,V=new Te(0),A=0,K=t.width,ce=t.height,pe=1,Ee=null,Be=null,te=new gn(0,0,K,ce),re=new gn(0,0,K,ce),we=!1,Oe=new Da,Pe=!1,qe=!1,at=new Ct,Fe=new I,Xe=new gn,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},He=!1;function Q(){return B===null?pe:1}let k=n;function gt(R,$){return t.getContext(R,$)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",le,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",_e,!1),k===null){let $="webgl2";if(k=gt($,R),k===null)throw gt($)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw mt("WebGLRenderer: "+R.message),R}let dt,Qe,ke,D,T,L,U,z,G,xe,oe,Ie,Le,de,he,Ue,ne,j,fe,F,be,me,Re,ge;function ae(){dt=new bE(k),dt.init(),me=new aT(k,dt),Qe=new dE(k,dt,e,me),ke=new sT(k,dt),Qe.reversedDepthBuffer&&f&&ke.buffers.depth.setReversed(!0),D=new SE(k),T=new WS,L=new oT(k,dt,ke,T,Qe,me,D),U=new pE(b),z=new yE(b),G=new R1(k),Re=new uE(k,G),xe=new ME(k,G,D,Re),oe=new wE(k,xe,G,D),fe=new TE(k,Qe,L),Ue=new fE(T),Ie=new GS(b,U,z,dt,Qe,Re,Ue),Le=new hT(b,T),de=new qS,he=new jS(dt),j=new cE(b,U,z,ke,oe,g,l),ne=new iT(b,oe,Qe),ge=new dT(k,D,Qe,ke),F=new hE(k,dt,D),be=new EE(k,dt,D),D.programs=Ie.programs,b.capabilities=Qe,b.extensions=dt,b.properties=T,b.renderLists=de,b.shadowMap=ne,b.state=ke,b.info=D}ae(),p!==Pi&&(C=new RE(p,t.width,t.height,i,s));let Ae=new $p(b,k);this.xr=Ae,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){let R=dt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=dt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(K,ce,!1))},this.getSize=function(R){return R.set(K,ce)},this.setSize=function(R,$,ie=!0){if(Ae.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}K=R,ce=$,t.width=Math.floor(R*pe),t.height=Math.floor($*pe),ie===!0&&(t.style.width=R+"px",t.style.height=$+"px"),C!==null&&C.setSize(t.width,t.height),this.setViewport(0,0,R,$)},this.getDrawingBufferSize=function(R){return R.set(K*pe,ce*pe).floor()},this.setDrawingBufferSize=function(R,$,ie){K=R,ce=$,pe=ie,t.width=Math.floor(R*ie),t.height=Math.floor($*ie),this.setViewport(0,0,R,$)},this.setEffects=function(R){if(p===Pi){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let $=0;$<R.length;$++)if(R[$].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}C.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(W)},this.getViewport=function(R){return R.copy(te)},this.setViewport=function(R,$,ie,se){R.isVector4?te.set(R.x,R.y,R.z,R.w):te.set(R,$,ie,se),ke.viewport(W.copy(te).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(re)},this.setScissor=function(R,$,ie,se){R.isVector4?re.set(R.x,R.y,R.z,R.w):re.set(R,$,ie,se),ke.scissor(X.copy(re).multiplyScalar(pe).round())},this.getScissorTest=function(){return we},this.setScissorTest=function(R){ke.setScissorTest(we=R)},this.setOpaqueSort=function(R){Ee=R},this.setTransparentSort=function(R){Be=R},this.getClearColor=function(R){return R.copy(j.getClearColor())},this.setClearColor=function(){j.setClearColor(...arguments)},this.getClearAlpha=function(){return j.getClearAlpha()},this.setClearAlpha=function(){j.setClearAlpha(...arguments)},this.clear=function(R=!0,$=!0,ie=!0){let se=0;if(R){let ee=!1;if(B!==null){let De=B.texture.format;ee=_.has(De)}if(ee){let De=B.texture.type,Ve=m.has(De),J=j.getClearColor(),q=j.getClearAlpha(),ve=J.r,ze=J.g,Ye=J.b;Ve?(y[0]=ve,y[1]=ze,y[2]=Ye,y[3]=q,k.clearBufferuiv(k.COLOR,0,y)):(x[0]=ve,x[1]=ze,x[2]=Ye,x[3]=q,k.clearBufferiv(k.COLOR,0,x))}else se|=k.COLOR_BUFFER_BIT}$&&(se|=k.DEPTH_BUFFER_BIT),ie&&(se|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(se)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",le,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",_e,!1),j.dispose(),de.dispose(),he.dispose(),T.dispose(),U.dispose(),z.dispose(),oe.dispose(),Re.dispose(),ge.dispose(),Ie.dispose(),Ae.dispose(),Ae.removeEventListener("sessionstart",Kt),Ae.removeEventListener("sessionend",_t),Se.stop()};function le(R){R.preventDefault(),Bl("WebGLRenderer: Context Lost."),E=!0}function Y(){Bl("WebGLRenderer: Context Restored."),E=!1;let R=D.autoReset,$=ne.enabled,ie=ne.autoUpdate,se=ne.needsUpdate,ee=ne.type;ae(),D.autoReset=R,ne.enabled=$,ne.autoUpdate=ie,ne.needsUpdate=se,ne.type=ee}function _e(R){mt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Ne(R){let $=R.target;$.removeEventListener("dispose",Ne),st($)}function st(R){Ce(R),T.remove(R)}function Ce(R){let $=T.get(R).programs;$!==void 0&&($.forEach(function(ie){Ie.releaseProgram(ie)}),R.isShaderMaterial&&Ie.releaseShaderCache(R))}this.renderBufferDirect=function(R,$,ie,se,ee,De){$===null&&($=Ze);let Ve=ee.isMesh&&ee.matrixWorld.determinant()<0,J=zt(R,$,ie,se,ee);ke.setMaterial(se,Ve);let q=ie.index,ve=1;if(se.wireframe===!0){if(q=xe.getWireframeAttribute(ie),q===void 0)return;ve=2}let ze=ie.drawRange,Ye=ie.attributes.position,pt=ze.start*ve,Lt=(ze.start+ze.count)*ve;De!==null&&(pt=Math.max(pt,De.start*ve),Lt=Math.min(Lt,(De.start+De.count)*ve)),q!==null?(pt=Math.max(pt,0),Lt=Math.min(Lt,q.count)):Ye!=null&&(pt=Math.max(pt,0),Lt=Math.min(Lt,Ye.count));let tn=Lt-pt;if(tn<0||tn===1/0)return;Re.setup(ee,se,J,ie,q);let Yt,Ut=F;if(q!==null&&(Yt=G.get(q),Ut=be,Ut.setIndex(Yt)),ee.isMesh)se.wireframe===!0?(ke.setLineWidth(se.wireframeLinewidth*Q()),Ut.setMode(k.LINES)):Ut.setMode(k.TRIANGLES);else if(ee.isLine){let rt=se.linewidth;rt===void 0&&(rt=1),ke.setLineWidth(rt*Q()),ee.isLineSegments?Ut.setMode(k.LINES):ee.isLineLoop?Ut.setMode(k.LINE_LOOP):Ut.setMode(k.LINE_STRIP)}else ee.isPoints?Ut.setMode(k.POINTS):ee.isSprite&&Ut.setMode(k.TRIANGLES);if(ee.isBatchedMesh)if(ee._multiDrawInstances!==null)Ra("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ut.renderMultiDrawInstances(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount,ee._multiDrawInstances);else if(dt.get("WEBGL_multi_draw"))Ut.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{let rt=ee._multiDrawStarts,Ot=ee._multiDrawCounts,Me=ee._multiDrawCount,ot=q?G.get(q).bytesPerElement:1,nn=T.get(se).currentProgram.getUniforms();for(let Dt=0;Dt<Me;Dt++)nn.setValue(k,"_gl_DrawID",Dt),Ut.render(rt[Dt]/ot,Ot[Dt])}else if(ee.isInstancedMesh)Ut.renderInstances(pt,tn,ee.count);else if(ie.isInstancedBufferGeometry){let rt=ie._maxInstanceCount!==void 0?ie._maxInstanceCount:1/0,Ot=Math.min(ie.instanceCount,rt);Ut.renderInstances(pt,tn,Ot)}else Ut.render(pt,tn)};function nt(R,$,ie){R.transparent===!0&&R.side===Sn&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,Rt(R,$,ie),R.side=as,R.needsUpdate=!0,Rt(R,$,ie),R.side=Sn):Rt(R,$,ie)}this.compile=function(R,$,ie=null){ie===null&&(ie=R),M=he.get(ie),M.init($),w.push(M),ie.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),R!==ie&&R.traverseVisible(function(ee){ee.isLight&&ee.layers.test($.layers)&&(M.pushLight(ee),ee.castShadow&&M.pushShadow(ee))}),M.setupLights();let se=new Set;return R.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;let De=ee.material;if(De)if(Array.isArray(De))for(let Ve=0;Ve<De.length;Ve++){let J=De[Ve];nt(J,ie,ee),se.add(J)}else nt(De,ie,ee),se.add(De)}),M=w.pop(),se},this.compileAsync=function(R,$,ie=null){let se=this.compile(R,$,ie);return new Promise(ee=>{function De(){if(se.forEach(function(Ve){T.get(Ve).currentProgram.isReady()&&se.delete(Ve)}),se.size===0){ee(R);return}setTimeout(De,10)}dt.get("KHR_parallel_shader_compile")!==null?De():setTimeout(De,10)})};let We=null;function ft(R){We&&We(R)}function Kt(){Se.stop()}function _t(){Se.start()}let Se=new y_;Se.setAnimationLoop(ft),typeof self<"u"&&Se.setContext(self),this.setAnimationLoop=function(R){We=R,Ae.setAnimationLoop(R),R===null?Se.stop():Se.start()},Ae.addEventListener("sessionstart",Kt),Ae.addEventListener("sessionend",_t),this.render=function(R,$){if($!==void 0&&$.isCamera!==!0){mt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let ie=Ae.enabled===!0&&Ae.isPresenting===!0,se=C!==null&&(B===null||ie)&&C.begin(b,B);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),Ae.enabled===!0&&Ae.isPresenting===!0&&(C===null||C.isCompositing()===!1)&&(Ae.cameraAutoUpdate===!0&&Ae.updateCamera($),$=Ae.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,$,B),M=he.get(R,w.length),M.init($),w.push(M),at.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Oe.setFromProjectionMatrix(at,yr,$.reversedDepth),qe=this.localClippingEnabled,Pe=Ue.init(this.clippingPlanes,qe),v=de.get(R,S.length),v.init(),S.push(v),Ae.enabled===!0&&Ae.isPresenting===!0){let Ve=b.xr.getDepthSensingMesh();Ve!==null&&tt(Ve,$,-1/0,b.sortObjects)}tt(R,$,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ee,Be),He=Ae.enabled===!1||Ae.isPresenting===!1||Ae.hasDepthSensing()===!1,He&&j.addToRenderList(v,R),this.info.render.frame++,Pe===!0&&Ue.beginShadows();let ee=M.state.shadowsArray;if(ne.render(ee,R,$),Pe===!0&&Ue.endShadows(),this.info.autoReset===!0&&this.info.reset(),(se&&C.hasRenderPass())===!1){let Ve=v.opaque,J=v.transmissive;if(M.setupLights(),$.isArrayCamera){let q=$.cameras;if(J.length>0)for(let ve=0,ze=q.length;ve<ze;ve++){let Ye=q[ve];it(Ve,J,R,Ye)}He&&j.render(R);for(let ve=0,ze=q.length;ve<ze;ve++){let Ye=q[ve];et(v,R,Ye,Ye.viewport)}}else J.length>0&&it(Ve,J,R,$),He&&j.render(R),et(v,R,$)}B!==null&&N===0&&(L.updateMultisampleRenderTarget(B),L.updateRenderTargetMipmap(B)),se&&C.end(b),R.isScene===!0&&R.onAfterRender(b,R,$),Re.resetDefaultState(),H=-1,Z=null,w.pop(),w.length>0?(M=w[w.length-1],Pe===!0&&Ue.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,S.pop(),S.length>0?v=S[S.length-1]:v=null};function tt(R,$,ie,se){if(R.visible===!1)return;if(R.layers.test($.layers)){if(R.isGroup)ie=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update($);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Oe.intersectsSprite(R)){se&&Xe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(at);let Ve=oe.update(R),J=R.material;J.visible&&v.push(R,Ve,J,ie,Xe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Oe.intersectsObject(R))){let Ve=oe.update(R),J=R.material;if(se&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Xe.copy(R.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Xe.copy(Ve.boundingSphere.center)),Xe.applyMatrix4(R.matrixWorld).applyMatrix4(at)),Array.isArray(J)){let q=Ve.groups;for(let ve=0,ze=q.length;ve<ze;ve++){let Ye=q[ve],pt=J[Ye.materialIndex];pt&&pt.visible&&v.push(R,Ve,pt,ie,Xe.z,Ye)}}else J.visible&&v.push(R,Ve,J,ie,Xe.z,null)}}let De=R.children;for(let Ve=0,J=De.length;Ve<J;Ve++)tt(De[Ve],$,ie,se)}function et(R,$,ie,se){let{opaque:ee,transmissive:De,transparent:Ve}=R;M.setupLightsView(ie),Pe===!0&&Ue.setGlobalState(b.clippingPlanes,ie),se&&ke.viewport(W.copy(se)),ee.length>0&&ct(ee,$,ie),De.length>0&&ct(De,$,ie),Ve.length>0&&ct(Ve,$,ie),ke.buffers.depth.setTest(!0),ke.buffers.depth.setMask(!0),ke.buffers.color.setMask(!0),ke.setPolygonOffset(!1)}function it(R,$,ie,se){if((ie.isScene===!0?ie.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[se.id]===void 0){let pt=dt.has("EXT_color_buffer_half_float")||dt.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[se.id]=new un(1,1,{generateMipmaps:!0,type:pt?Tn:Pi,minFilter:zs,samples:Qe.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}let De=M.state.transmissionRenderTarget[se.id],Ve=se.viewport||W;De.setSize(Ve.z*b.transmissionResolutionScale,Ve.w*b.transmissionResolutionScale);let J=b.getRenderTarget(),q=b.getActiveCubeFace(),ve=b.getActiveMipmapLevel();b.setRenderTarget(De),b.getClearColor(V),A=b.getClearAlpha(),A<1&&b.setClearColor(16777215,.5),b.clear(),He&&j.render(ie);let ze=b.toneMapping;b.toneMapping=Ar;let Ye=se.viewport;if(se.viewport!==void 0&&(se.viewport=void 0),M.setupLightsView(se),Pe===!0&&Ue.setGlobalState(b.clippingPlanes,se),ct(R,ie,se),L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De),dt.has("WEBGL_multisampled_render_to_texture")===!1){let pt=!1;for(let Lt=0,tn=$.length;Lt<tn;Lt++){let Yt=$[Lt],{object:Ut,geometry:rt,material:Ot,group:Me}=Yt;if(Ot.side===Sn&&Ut.layers.test(se.layers)){let ot=Ot.side;Ot.side=In,Ot.needsUpdate=!0,ln(Ut,ie,se,rt,Ot,Me),Ot.side=ot,Ot.needsUpdate=!0,pt=!0}}pt===!0&&(L.updateMultisampleRenderTarget(De),L.updateRenderTargetMipmap(De))}b.setRenderTarget(J,q,ve),b.setClearColor(V,A),Ye!==void 0&&(se.viewport=Ye),b.toneMapping=ze}function ct(R,$,ie){let se=$.isScene===!0?$.overrideMaterial:null;for(let ee=0,De=R.length;ee<De;ee++){let Ve=R[ee],{object:J,geometry:q,group:ve}=Ve,ze=Ve.material;ze.allowOverride===!0&&se!==null&&(ze=se),J.layers.test(ie.layers)&&ln(J,$,ie,q,ze,ve)}}function ln(R,$,ie,se,ee,De){R.onBeforeRender(b,$,ie,se,ee,De),R.modelViewMatrix.multiplyMatrices(ie.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),ee.onBeforeRender(b,$,ie,se,R,De),ee.transparent===!0&&ee.side===Sn&&ee.forceSinglePass===!1?(ee.side=In,ee.needsUpdate=!0,b.renderBufferDirect(ie,$,se,ee,R,De),ee.side=as,ee.needsUpdate=!0,b.renderBufferDirect(ie,$,se,ee,R,De),ee.side=Sn):b.renderBufferDirect(ie,$,se,ee,R,De),R.onAfterRender(b,$,ie,se,ee,De)}function Rt(R,$,ie){$.isScene!==!0&&($=Ze);let se=T.get(R),ee=M.state.lights,De=M.state.shadowsArray,Ve=ee.state.version,J=Ie.getParameters(R,ee.state,De,$,ie),q=Ie.getProgramCacheKey(J),ve=se.programs;se.environment=R.isMeshStandardMaterial?$.environment:null,se.fog=$.fog,se.envMap=(R.isMeshStandardMaterial?z:U).get(R.envMap||se.environment),se.envMapRotation=se.environment!==null&&R.envMap===null?$.environmentRotation:R.envMapRotation,ve===void 0&&(R.addEventListener("dispose",Ne),ve=new Map,se.programs=ve);let ze=ve.get(q);if(ze!==void 0){if(se.currentProgram===ze&&se.lightsStateVersion===Ve)return mi(R,J),ze}else J.uniforms=Ie.getUniforms(R),R.onBeforeCompile(J,b),ze=Ie.acquireProgram(J,q),ve.set(q,ze),se.uniforms=J.uniforms;let Ye=se.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=Ue.uniform),mi(R,J),se.needsLights=Cn(R),se.lightsStateVersion=Ve,se.needsLights&&(Ye.ambientLightColor.value=ee.state.ambient,Ye.lightProbe.value=ee.state.probe,Ye.directionalLights.value=ee.state.directional,Ye.directionalLightShadows.value=ee.state.directionalShadow,Ye.spotLights.value=ee.state.spot,Ye.spotLightShadows.value=ee.state.spotShadow,Ye.rectAreaLights.value=ee.state.rectArea,Ye.ltc_1.value=ee.state.rectAreaLTC1,Ye.ltc_2.value=ee.state.rectAreaLTC2,Ye.pointLights.value=ee.state.point,Ye.pointLightShadows.value=ee.state.pointShadow,Ye.hemisphereLights.value=ee.state.hemi,Ye.directionalShadowMap.value=ee.state.directionalShadowMap,Ye.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ye.spotShadowMap.value=ee.state.spotShadowMap,Ye.spotLightMatrix.value=ee.state.spotLightMatrix,Ye.spotLightMap.value=ee.state.spotLightMap,Ye.pointShadowMap.value=ee.state.pointShadowMap,Ye.pointShadowMatrix.value=ee.state.pointShadowMatrix),se.currentProgram=ze,se.uniformsList=null,ze}function Vn(R){if(R.uniformsList===null){let $=R.currentProgram.getUniforms();R.uniformsList=Va.seqWithValue($.seq,R.uniforms)}return R.uniformsList}function mi(R,$){let ie=T.get(R);ie.outputColorSpace=$.outputColorSpace,ie.batching=$.batching,ie.batchingColor=$.batchingColor,ie.instancing=$.instancing,ie.instancingColor=$.instancingColor,ie.instancingMorph=$.instancingMorph,ie.skinning=$.skinning,ie.morphTargets=$.morphTargets,ie.morphNormals=$.morphNormals,ie.morphColors=$.morphColors,ie.morphTargetsCount=$.morphTargetsCount,ie.numClippingPlanes=$.numClippingPlanes,ie.numIntersection=$.numClipIntersection,ie.vertexAlphas=$.vertexAlphas,ie.vertexTangents=$.vertexTangents,ie.toneMapping=$.toneMapping}function zt(R,$,ie,se,ee){$.isScene!==!0&&($=Ze),L.resetTextureUnits();let De=$.fog,Ve=se.isMeshStandardMaterial?$.environment:null,J=B===null?b.outputColorSpace:B.isXRRenderTarget===!0?B.texture.colorSpace:br,q=(se.isMeshStandardMaterial?z:U).get(se.envMap||Ve),ve=se.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,ze=!!ie.attributes.tangent&&(!!se.normalMap||se.anisotropy>0),Ye=!!ie.morphAttributes.position,pt=!!ie.morphAttributes.normal,Lt=!!ie.morphAttributes.color,tn=Ar;se.toneMapped&&(B===null||B.isXRRenderTarget===!0)&&(tn=b.toneMapping);let Yt=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,Ut=Yt!==void 0?Yt.length:0,rt=T.get(se),Ot=M.state.lights;if(Pe===!0&&(qe===!0||R!==Z)){let gi=R===Z&&se.id===H;Ue.setState(se,R,gi)}let Me=!1;se.version===rt.__version?(rt.needsLights&&rt.lightsStateVersion!==Ot.state.version||rt.outputColorSpace!==J||ee.isBatchedMesh&&rt.batching===!1||!ee.isBatchedMesh&&rt.batching===!0||ee.isBatchedMesh&&rt.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&rt.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&rt.instancing===!1||!ee.isInstancedMesh&&rt.instancing===!0||ee.isSkinnedMesh&&rt.skinning===!1||!ee.isSkinnedMesh&&rt.skinning===!0||ee.isInstancedMesh&&rt.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&rt.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&rt.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&rt.instancingMorph===!1&&ee.morphTexture!==null||rt.envMap!==q||se.fog===!0&&rt.fog!==De||rt.numClippingPlanes!==void 0&&(rt.numClippingPlanes!==Ue.numPlanes||rt.numIntersection!==Ue.numIntersection)||rt.vertexAlphas!==ve||rt.vertexTangents!==ze||rt.morphTargets!==Ye||rt.morphNormals!==pt||rt.morphColors!==Lt||rt.toneMapping!==tn||rt.morphTargetsCount!==Ut)&&(Me=!0):(Me=!0,rt.__version=se.version);let ot=rt.currentProgram;Me===!0&&(ot=Rt(se,$,ee));let nn=!1,Dt=!1,ws=!1,rn=ot.getUniforms(),wi=rt.uniforms;if(ke.useProgram(ot.program)&&(nn=!0,Dt=!0,ws=!0),se.id!==H&&(H=se.id,Dt=!0),nn||Z!==R){ke.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),rn.setValue(k,"projectionMatrix",R.projectionMatrix),rn.setValue(k,"viewMatrix",R.matrixWorldInverse);let Ai=rn.map.cameraPosition;Ai!==void 0&&Ai.setValue(k,Fe.setFromMatrixPosition(R.matrixWorld)),Qe.logarithmicDepthBuffer&&rn.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(se.isMeshPhongMaterial||se.isMeshToonMaterial||se.isMeshLambertMaterial||se.isMeshBasicMaterial||se.isMeshStandardMaterial||se.isShaderMaterial)&&rn.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),Z!==R&&(Z=R,Dt=!0,ws=!0)}if(rt.needsLights&&(Ot.state.directionalShadowMap.length>0&&rn.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,L),Ot.state.spotShadowMap.length>0&&rn.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,L),Ot.state.pointShadowMap.length>0&&rn.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,L)),ee.isSkinnedMesh){rn.setOptional(k,ee,"bindMatrix"),rn.setOptional(k,ee,"bindMatrixInverse");let gi=ee.skeleton;gi&&(gi.boneTexture===null&&gi.computeBoneTexture(),rn.setValue(k,"boneTexture",gi.boneTexture,L))}ee.isBatchedMesh&&(rn.setOptional(k,ee,"batchingTexture"),rn.setValue(k,"batchingTexture",ee._matricesTexture,L),rn.setOptional(k,ee,"batchingIdTexture"),rn.setValue(k,"batchingIdTexture",ee._indirectTexture,L),rn.setOptional(k,ee,"batchingColorTexture"),ee._colorsTexture!==null&&rn.setValue(k,"batchingColorTexture",ee._colorsTexture,L));let nr=ie.morphAttributes;if((nr.position!==void 0||nr.normal!==void 0||nr.color!==void 0)&&fe.update(ee,ie,ot),(Dt||rt.receiveShadow!==ee.receiveShadow)&&(rt.receiveShadow=ee.receiveShadow,rn.setValue(k,"receiveShadow",ee.receiveShadow)),se.isMeshGouraudMaterial&&se.envMap!==null&&(wi.envMap.value=q,wi.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),se.isMeshStandardMaterial&&se.envMap===null&&$.environment!==null&&(wi.envMapIntensity.value=$.environmentIntensity),wi.dfgLUT!==void 0&&(wi.dfgLUT.value=pT()),Dt&&(rn.setValue(k,"toneMappingExposure",b.toneMappingExposure),rt.needsLights&&bn(wi,ws),De&&se.fog===!0&&Le.refreshFogUniforms(wi,De),Le.refreshMaterialUniforms(wi,se,pe,ce,M.state.transmissionRenderTarget[R.id]),Va.upload(k,Vn(rt),wi,L)),se.isShaderMaterial&&se.uniformsNeedUpdate===!0&&(Va.upload(k,Vn(rt),wi,L),se.uniformsNeedUpdate=!1),se.isSpriteMaterial&&rn.setValue(k,"center",ee.center),rn.setValue(k,"modelViewMatrix",ee.modelViewMatrix),rn.setValue(k,"normalMatrix",ee.normalMatrix),rn.setValue(k,"modelMatrix",ee.matrixWorld),se.isShaderMaterial||se.isRawShaderMaterial){let gi=se.uniformsGroups;for(let Ai=0,Pf=gi.length;Ai<Pf;Ai++){let ho=gi[Ai];ge.update(ho,ot),ge.bind(ho,ot)}}return ot}function bn(R,$){R.ambientLightColor.needsUpdate=$,R.lightProbe.needsUpdate=$,R.directionalLights.needsUpdate=$,R.directionalLightShadows.needsUpdate=$,R.pointLights.needsUpdate=$,R.pointLightShadows.needsUpdate=$,R.spotLights.needsUpdate=$,R.spotLightShadows.needsUpdate=$,R.rectAreaLights.needsUpdate=$,R.hemisphereLights.needsUpdate=$}function Cn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return P},this.getActiveMipmapLevel=function(){return N},this.getRenderTarget=function(){return B},this.setRenderTargetTextures=function(R,$,ie){let se=T.get(R);se.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,se.__autoAllocateDepthBuffer===!1&&(se.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=$,T.get(R.depthTexture).__webglTexture=se.__autoAllocateDepthBuffer?void 0:ie,se.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,$){let ie=T.get(R);ie.__webglFramebuffer=$,ie.__useDefaultFramebuffer=$===void 0};let tr=k.createFramebuffer();this.setRenderTarget=function(R,$=0,ie=0){B=R,P=$,N=ie;let se=null,ee=!1,De=!1;if(R){let J=T.get(R);if(J.__useDefaultFramebuffer!==void 0){ke.bindFramebuffer(k.FRAMEBUFFER,J.__webglFramebuffer),W.copy(R.viewport),X.copy(R.scissor),O=R.scissorTest,ke.viewport(W),ke.scissor(X),ke.setScissorTest(O),H=-1;return}else if(J.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(J.__hasExternalTextures)L.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let ze=R.depthTexture;if(J.__boundDepthTexture!==ze){if(ze!==null&&T.has(ze)&&(R.width!==ze.image.width||R.height!==ze.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}let q=R.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(De=!0);let ve=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(ve[$])?se=ve[$][ie]:se=ve[$],ee=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?se=T.get(R).__webglMultisampledFramebuffer:Array.isArray(ve)?se=ve[ie]:se=ve,W.copy(R.viewport),X.copy(R.scissor),O=R.scissorTest}else W.copy(te).multiplyScalar(pe).floor(),X.copy(re).multiplyScalar(pe).floor(),O=we;if(ie!==0&&(se=tr),ke.bindFramebuffer(k.FRAMEBUFFER,se)&&ke.drawBuffers(R,se),ke.viewport(W),ke.scissor(X),ke.setScissorTest(O),ee){let J=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+$,J.__webglTexture,ie)}else if(De){let J=$;for(let q=0;q<R.textures.length;q++){let ve=T.get(R.textures[q]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+q,ve.__webglTexture,ie,J)}}else if(R!==null&&ie!==0){let J=T.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,J.__webglTexture,ie)}H=-1},this.readRenderTargetPixels=function(R,$,ie,se,ee,De,Ve,J=0){if(!(R&&R.isWebGLRenderTarget)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(q=q[Ve]),q){ke.bindFramebuffer(k.FRAMEBUFFER,q);try{let ve=R.textures[J],ze=ve.format,Ye=ve.type;if(!Qe.textureFormatReadable(ze)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qe.textureTypeReadable(Ye)){mt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=R.width-se&&ie>=0&&ie<=R.height-ee&&(R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+J),k.readPixels($,ie,se,ee,me.convert(ze),me.convert(Ye),De))}finally{let ve=B!==null?T.get(B).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,ve)}}},this.readRenderTargetPixelsAsync=async function(R,$,ie,se,ee,De,Ve,J=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ve!==void 0&&(q=q[Ve]),q)if($>=0&&$<=R.width-se&&ie>=0&&ie<=R.height-ee){ke.bindFramebuffer(k.FRAMEBUFFER,q);let ve=R.textures[J],ze=ve.format,Ye=ve.type;if(!Qe.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qe.textureTypeReadable(Ye))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let pt=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.bufferData(k.PIXEL_PACK_BUFFER,De.byteLength,k.STREAM_READ),R.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+J),k.readPixels($,ie,se,ee,me.convert(ze),me.convert(Ye),0);let Lt=B!==null?T.get(B).__webglFramebuffer:null;ke.bindFramebuffer(k.FRAMEBUFFER,Lt);let tn=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await Wg(k,tn,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,pt),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,De),k.deleteBuffer(pt),k.deleteSync(tn),De}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,$=null,ie=0){let se=Math.pow(2,-ie),ee=Math.floor(R.image.width*se),De=Math.floor(R.image.height*se),Ve=$!==null?$.x:0,J=$!==null?$.y:0;L.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,ie,0,0,Ve,J,ee,De),ke.unbindTexture()};let Fr=k.createFramebuffer(),Et=k.createFramebuffer();this.copyTextureToTexture=function(R,$,ie=null,se=null,ee=0,De=null){De===null&&(ee!==0?(Ra("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),De=ee,ee=0):De=0);let Ve,J,q,ve,ze,Ye,pt,Lt,tn,Yt=R.isCompressedTexture?R.mipmaps[De]:R.image;if(ie!==null)Ve=ie.max.x-ie.min.x,J=ie.max.y-ie.min.y,q=ie.isBox3?ie.max.z-ie.min.z:1,ve=ie.min.x,ze=ie.min.y,Ye=ie.isBox3?ie.min.z:0;else{let nr=Math.pow(2,-ee);Ve=Math.floor(Yt.width*nr),J=Math.floor(Yt.height*nr),R.isDataArrayTexture?q=Yt.depth:R.isData3DTexture?q=Math.floor(Yt.depth*nr):q=1,ve=0,ze=0,Ye=0}se!==null?(pt=se.x,Lt=se.y,tn=se.z):(pt=0,Lt=0,tn=0);let Ut=me.convert($.format),rt=me.convert($.type),Ot;$.isData3DTexture?(L.setTexture3D($,0),Ot=k.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(L.setTexture2DArray($,0),Ot=k.TEXTURE_2D_ARRAY):(L.setTexture2D($,0),Ot=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,$.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,$.unpackAlignment);let Me=k.getParameter(k.UNPACK_ROW_LENGTH),ot=k.getParameter(k.UNPACK_IMAGE_HEIGHT),nn=k.getParameter(k.UNPACK_SKIP_PIXELS),Dt=k.getParameter(k.UNPACK_SKIP_ROWS),ws=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,Yt.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Yt.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ve),k.pixelStorei(k.UNPACK_SKIP_ROWS,ze),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Ye);let rn=R.isDataArrayTexture||R.isData3DTexture,wi=$.isDataArrayTexture||$.isData3DTexture;if(R.isDepthTexture){let nr=T.get(R),gi=T.get($),Ai=T.get(nr.__renderTarget),Pf=T.get(gi.__renderTarget);ke.bindFramebuffer(k.READ_FRAMEBUFFER,Ai.__webglFramebuffer),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Pf.__webglFramebuffer);for(let ho=0;ho<q;ho++)rn&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get(R).__webglTexture,ee,Ye+ho),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,T.get($).__webglTexture,De,tn+ho)),k.blitFramebuffer(ve,ze,Ve,J,pt,Lt,Ve,J,k.DEPTH_BUFFER_BIT,k.NEAREST);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(ee!==0||R.isRenderTargetTexture||T.has(R)){let nr=T.get(R),gi=T.get($);ke.bindFramebuffer(k.READ_FRAMEBUFFER,Fr),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,Et);for(let Ai=0;Ai<q;Ai++)rn?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,nr.__webglTexture,ee,Ye+Ai):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,nr.__webglTexture,ee),wi?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,gi.__webglTexture,De,tn+Ai):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,gi.__webglTexture,De),ee!==0?k.blitFramebuffer(ve,ze,Ve,J,pt,Lt,Ve,J,k.COLOR_BUFFER_BIT,k.NEAREST):wi?k.copyTexSubImage3D(Ot,De,pt,Lt,tn+Ai,ve,ze,Ve,J):k.copyTexSubImage2D(Ot,De,pt,Lt,ve,ze,Ve,J);ke.bindFramebuffer(k.READ_FRAMEBUFFER,null),ke.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else wi?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ot,De,pt,Lt,tn,Ve,J,q,Ut,rt,Yt.data):$.isCompressedArrayTexture?k.compressedTexSubImage3D(Ot,De,pt,Lt,tn,Ve,J,q,Ut,Yt.data):k.texSubImage3D(Ot,De,pt,Lt,tn,Ve,J,q,Ut,rt,Yt):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,De,pt,Lt,Ve,J,Ut,rt,Yt.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,De,pt,Lt,Yt.width,Yt.height,Ut,Yt.data):k.texSubImage2D(k.TEXTURE_2D,De,pt,Lt,Ve,J,Ut,rt,Yt);k.pixelStorei(k.UNPACK_ROW_LENGTH,Me),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ot),k.pixelStorei(k.UNPACK_SKIP_PIXELS,nn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Dt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,ws),De===0&&$.generateMipmaps&&k.generateMipmap(Ot),ke.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),ke.unbindTexture()},this.resetState=function(){P=0,N=0,B=null,ke.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}};function ms(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function D_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Ni={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Xa={duration:.5,overwrite:!1,delay:0},dm,Qn,pn,ur=1e8,en=1/ur,nm=Math.PI*2,mT=nm/4,gT=0,F_=Math.sqrt,_T=Math.cos,xT=Math.sin,Hn=function(e){return typeof e=="string"},wn=function(e){return typeof e=="function"},_s=function(e){return typeof e=="number"},Ud=function(e){return typeof e>"u"},Yr=function(e){return typeof e=="object"},Fi=function(e){return e!==!1},fm=function(){return typeof window<"u"},Ad=function(e){return wn(e)||Hn(e)},N_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ci=Array.isArray,vT=/random\([^)]+\)/g,yT=/,\s*/g,T_=/(?:-?\.?\d|\.)+/gi,pm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Uo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Zp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,mm=/[+-]=-?[.\d]+/,bT=/[^,'"\[\]\s]+/gi,MT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,vn,Xr,im,gm,Wi={},Id={},U_,O_=function(e){return(Id=qa(e,Wi))&&ui},Od=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fc=function(e,t){return!t&&console.warn(e)},B_=function(e,t){return e&&(Wi[e]=t)&&Id&&(Id[e]=t)||Wi},Nc=function(){return 0},ET={suppressEvents:!0,isStart:!0,kill:!1},Rd={suppressEvents:!0,kill:!1},ST={suppressEvents:!0},_m={},Xs=[],rm={},k_,Li={},Jp={},w_=30,Cd=[],xm="",vm=function(e){var t=e[0],n,i;if(Yr(t)||wn(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Cd.length;i--&&!Cd[i].targetTest(t););n=Cd[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Em(e[i],n)))||e.splice(i,1);return e},qs=function(e){return e._gsap||vm(hr(e))[0]._gsap},ym=function(e,t,n){return(n=e[t])&&wn(n)?e[t]():Ud(n)&&e.getAttribute&&e.getAttribute(t)||n},xi=function(e,t){return(e=e.split(",")).forEach(t)||e},An=function(e){return Math.round(e*1e5)/1e5||0},xn=function(e){return Math.round(e*1e7)/1e7||0},Oo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},TT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Ld=function(){var e=Xs.length,t=Xs.slice(0),n,i;for(rm={},Xs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},bm=function(e){return!!(e._initted||e._startAt||e.add)},H_=function(e,t,n,i){Xs.length&&!Qn&&Ld(),e.render(t,n,i||!!(Qn&&t<0&&bm(e))),Xs.length&&!Qn&&Ld()},z_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(bT).length<2?t:Hn(e)?e.trim():e},V_=function(e){return e},Xi=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},wT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},qa=function(e,t){for(var n in t)e[n]=t[n];return e},A_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Yr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Dd=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ic=function(e){var t=e.parent||vn,n=e.keyframes?wT(ci(e.keyframes)):Xi;if(Fi(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},AT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},G_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bd=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},Ys=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Do=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},RT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},sm=function(e,t,n,i){return e._startAt&&(Qn?e._startAt.revert(Rd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},CT=function r(e){return!e||e._ts&&r(e.parent)},R_=function(e){return e._repeat?Ya(e._tTime,e=e.duration()+e._rDelay)*e:0},Ya=function(e,t){var n=Math.floor(e=xn(e/t));return e&&n===e?n-1:n},Fd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},kd=function(e){return e._end=xn(e._start+(e._tDur/Math.abs(e._ts||e._rts||en)||0))},Hd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=xn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),kd(e),n._dirty||Do(n,e)),e},W_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Fd(e.rawTime(),t),(!t._dur||Bc(0,t.totalDuration(),n)-t._tTime>en)&&t.render(n,!0)),Do(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-en}},qr=function(e,t,n,i){return t.parent&&Ys(t),t._start=xn((_s(n)?n:n||e!==vn?cr(e,n,t):e._time)+t._delay),t._end=xn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),G_(e,t,"_first","_last",e._sort?"_start":0),om(t)||(e._recent=t),i||W_(e,t),e._ts<0&&Hd(e,e._tTime),e},X_=function(e,t){return(Wi.ScrollTrigger||Od("scrollTrigger",t))&&Wi.ScrollTrigger.create(t,e)},q_=function(e,t,n,i,s){if(wm(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!Qn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&k_!==Di.frame)return Xs.push(e),e._lazy=[s,i],1},PT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},om=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},IT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&PT(e)&&!(!e._initted&&om(e))||(e._ts<0||e._dp._ts<0)&&!om(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Bc(0,e._tDur,t),h=Ya(l,a),e._yoyo&&h&1&&(o=1-o),h!==Ya(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||Qn||i||e._zTime===en||!t&&e._zTime){if(!e._initted&&q_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?en:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&sm(e,t,n,!0),e._onUpdate&&!n&&Gi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&Gi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Ys(e,1),!n&&!Qn&&(Gi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},LT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},$a=function(e,t,n,i){var s=e._repeat,o=xn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:xn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&Hd(e,e._tTime=e._tDur*a),e.parent&&kd(e),n||Do(e.parent,e),e},C_=function(e){return e instanceof jn?Do(e):$a(e,e._dur)},DT={_start:0,endTime:Nc,totalDuration:Nc},cr=function r(e,t,n){var i=e.labels,s=e._recent||DT,o=e.duration()>=ur?s.endTime(!1):e._dur,a,l,c;return Hn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ci(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lc=function(e,t,n){var i=_s(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Fi(l.vars.inherit)&&l.parent;o.immediateRender=Fi(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ln(t[0],o,t[s+1])},$s=function(e,t){return e||e===0?t(e):t},Bc=function(e,t,n){return n<e?e:n>t?t:n},ei=function(e,t){return!Hn(e)||!(t=MT.exec(e))?"":t[1]},FT=function(e,t,n){return $s(n,function(i){return Bc(e,t,i)})},am=[].slice,Y_=function(e,t){return e&&Yr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Yr(e[0]))&&!e.nodeType&&e!==Xr},NT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return Hn(i)&&!t||Y_(i,1)?(s=n).push.apply(s,hr(i)):n.push(i)})||n},hr=function(e,t,n){return pn&&!t&&pn.selector?pn.selector(e):Hn(e)&&!n&&(im||!Za())?am.call((t||gm).querySelectorAll(e),0):ci(e)?NT(e,n):Y_(e)?am.call(e,0):e?[e]:[]},lm=function(e){return e=hr(e)[0]||Fc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return hr(t,n.querySelectorAll?n:n===e?Fc("Invalid scope")||gm.createElement("div"):e)}},$_=function(e){return e.sort(function(){return .5-Math.random()})},Z_=function(e){if(wn(e))return e;var t=Yr(e)?e:{each:e},n=Fo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return Hn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var p=(g||t).length,_=o[p],m,y,x,v,M,S,w,C,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,ur])[1],!b){for(w=-ur;w<(w=g[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(_=o[p]=[],m=l?Math.min(b,p)*h-.5:i%b,y=b===ur?0:l?p*u/b-.5:i/b|0,w=0,C=ur,S=0;S<p;S++)x=S%b-m,v=y-(S/b|0),_[S]=M=c?Math.abs(c==="y"?v:x):F_(x*x+v*v),M>w&&(w=M),M<C&&(C=M);i==="random"&&$_(_),_.max=w-C,_.min=C,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),_.b=p<0?s-p:s,_.u=ei(t.amount||t.each)||0,n=n&&p<0?rx(n):n}return p=(_[f]-_.min)/_.max||0,xn(_.b+(n?n(p):p)*_.v)+_.u}},cm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=xn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_s(n)?0:ei(n))}},J_=function(e,t){var n=ci(e),i,s;return!n&&Yr(e)&&(i=n=e.radius||ur,e.values?(e=hr(e.values),(s=!_s(e[0]))&&(i*=i)):e=cm(e.increment)),$s(t,n?wn(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=ur,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||_s(o)?h:h+ei(o)}:cm(e))},K_=function(e,t,n,i){return $s(ci(e)?!t:n===!0?!!(n=0):!i,function(){return ci(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},UT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},OT=function(e,t){return function(n){return e(parseFloat(n))+(t||ei(n))}},BT=function(e,t,n){return Q_(e,t,0,1,n)},j_=function(e,t,n){return $s(n,function(i){return e[~~t(i)]})},kT=function r(e,t,n){var i=t-e;return ci(e)?j_(e,r(0,e.length),t):$s(n,function(s){return(i+(s-e)%i)%i+e})},HT=function r(e,t,n){var i=t-e,s=i*2;return ci(e)?j_(e,r(0,e.length-1),t):$s(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ja=function(e){return e.replace(vT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(yT);return K_(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Q_=function(e,t,n,i,s){var o=t-e,a=i-n;return $s(s,function(l){return n+((l-e)/o*a||0)})},zT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=Hn(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ci(e)&&!ci(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},n=t}else i||(e=qa(ci(e)?[]:{},e));if(!h){for(l in t)Sm.call(a,e,l,"get",t[l]);s=function(g){return Cm(g,a)||(o?e.p:e)}}}return $s(n,s)},P_=function(e,t,n){var i=e.labels,s=ur,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Gi=function(e,t,n){var i=e.vars,s=i[t],o=pn,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&Xs.length&&Ld(),a&&(pn=a),h=l?s.apply(c,l):s.call(c),pn=o,h},Cc=function(e){return Ys(e),e.scrollTrigger&&e.scrollTrigger.kill(!!Qn),e.progress()<1&&Gi(e,"onInterrupt"),e},Wa,ex=[],tx=function(e){if(e)if(e=!e.name&&e.default||e,fm()||e.headless){var t=e.name,n=wn(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Nc,render:Cm,add:Sm,kill:iw,modifier:nw,rawVars:0},o={targetTest:0,get:0,getSetter:zd,aliases:{},register:0};if(Za(),e!==i){if(Li[t])return;Xi(i,Xi(Dd(e,s),o)),qa(i.prototype,qa(s,Dd(e,o))),Li[i.prop=t]=i,e.targetTest&&(Cd.push(i),_m[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}B_(t,i),e.register&&e.register(ui,i,vi)}else ex.push(e)},Qt=255,Pc={aqua:[0,Qt,Qt],lime:[0,Qt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Qt],navy:[0,0,128],white:[Qt,Qt,Qt],olive:[128,128,0],yellow:[Qt,Qt,0],orange:[Qt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Qt,0,0],pink:[Qt,192,203],cyan:[0,Qt,Qt],transparent:[Qt,Qt,Qt,0]},Kp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*Qt+.5|0},nx=function(e,t,n){var i=e?_s(e)?[e>>16,e>>8&Qt,e&Qt]:0:Pc.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pc[e])i=Pc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&Qt,i&Qt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&Qt,e&Qt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(T_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Kp(l+1/3,s,o),i[1]=Kp(l,s,o),i[2]=Kp(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(pm),n&&i.length<4&&(i[3]=1),i}else i=e.match(T_)||Pc.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/Qt,o=i[1]/Qt,a=i[2]/Qt,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},ix=function(e){var t=[],n=[],i=-1;return e.split(gs).forEach(function(s){var o=s.match(Uo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},I_=function(e,t,n){var i="",s=(e+i).match(gs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=nx(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=ix(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(gs,"1").split(Uo),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(gs),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},gs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pc)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),VT=/hsl[a]?\(/,Mm=function(e){var t=e.join(" "),n;if(gs.lastIndex=0,gs.test(t))return n=VT.test(t),e[1]=I_(e[1],n),e[0]=I_(e[0],n,ix(e[1])),!0},Uc,Di=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function p(_){var m=r()-i,y=_===!0,x,v,M,S;if((m>e||m<0)&&(n+=m-t),i+=m,M=i-n,x=M-o,(x>0||y)&&(S=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,o+=x+(x>=s?4:s-x),v=1),y||(l=c(p)),v)for(d=0;d<a.length;d++)a[d](M,f,S,_)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){U_&&(!im&&fm()&&(Xr=im=window,gm=Xr.document||{},Wi.gsap=ui,(Xr.gsapVersions||(Xr.gsapVersions=[])).push(ui.version),O_(Id||Xr.GreenSockGlobals||!Xr.gsap&&Xr||{}),ex.forEach(tx)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,o-u.time*1e3+1|0)},Uc=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Uc=0,c=Nc},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=u.time*1e3+s},add:function(_,m,y){var x=m?function(v,M,S,w){_(v,M,S,w),u.remove(x)}:_;return u.remove(_),a[y?"unshift":"push"](x),Za(),x},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u})(),Za=function(){return!Uc&&Di.wake()},Ft={},GT=/^[\d.\-M][\d.\-,\s]/,WT=/["']/g,XT=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(WT,"").trim():+c,i=l.substr(a+1).trim();return t},qT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},YT=function(e){var t=(e+"").split("("),n=Ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[XT(t[1])]:qT(e).split(",").map(z_)):Ft._CE&&GT.test(e)?Ft._CE("",e):n},rx=function(e){return function(t){return 1-e(1-t)}},sx=function r(e,t){for(var n=e._first,i;n;)n instanceof jn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Fo=function(e,t){return e&&(wn(e)?e:Ft[e]||YT(e))||t},Bo=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return xi(e,function(a){Ft[a]=Wi[a]=s,Ft[o=a.toLowerCase()]=n;for(var l in s)Ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ft[a+"."+l]=s[l]}),s},ox=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},jp=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/nm*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*xT((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:ox(a);return s=nm/s,l.config=function(c,h){return r(e,c,h)},l},Qp=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:ox(n);return i.config=function(s){return r(e,s)},i};xi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Bo(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn;Bo("Elastic",jp("in"),jp("out"),jp());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Bo("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Bo("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Bo("Circ",function(r){return-(F_(1-r*r)-1)});Bo("Sine",function(r){return r===1?1:-_T(r*mT)+1});Bo("Back",Qp("in"),Qp("out"),Qp());Ft.SteppedEase=Ft.steps=Wi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-en;return function(a){return((i*Bc(0,o,a)|0)+s)*n}}};Xa.ease=Ft["quad.out"];xi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xm+=r+","+r+"Params,"});var Em=function(e,t){this.id=gT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:ym,this.set=t?t.getSetter:zd},Oc=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,$a(this,+t.duration,1,1),this.data=t.data,pn&&(this._ctx=pn,pn.data.push(this)),Uc||Di.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,$a(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Za(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(Hd(this,n),!s._dp||s.parent||W_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&qr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===en||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),H_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+R_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+R_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Ya(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-en?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Fd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-en?0:this._rts,this.totalTime(Bc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),kd(this),RT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Za(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==en&&(this._tTime-=en)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=xn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&qr(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Fi(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Fd(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=ST);var i=Qn;return Qn=n,bm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),Qn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,C_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,C_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(cr(this,n),Fi(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Fi(i)),this._dur||(this._zTime=-en),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-en:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-en,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-en)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=wn(n)?n:V_,l=function(){var h=i.then;i.then=null,s&&s(),wn(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Cc(this)},r})();Xi(Oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-en,_prom:0,_ps:!1,_rts:1});var jn=(function(r){D_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Fi(n.sortChildren),vn&&qr(n.parent||vn,ms(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&X_(ms(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lc(0,arguments,this),this},t.from=function(i,s,o){return Lc(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lc(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ic(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ln(i,s,cr(this,o),1),this},t.call=function(i,s,o){return qr(this,Ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ln(i,o,cr(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ic(o).immediateRender=Fi(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ic(a).immediateRender=Fi(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:xn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,_,m,y,x,v,M,S,w;if(this!==vn&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,x=this._ts,m=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=xn(h%_),h===l?(p=this._repeat,f=c):(M=xn(h/_),p=~~M,p&&p===M&&(f=c,p--),f>c&&(f=c)),M=Ya(this._tTime,_),!a&&this._tTime&&M!==p&&this._tTime-M*_-this._dur<=0&&(M=p),S&&p&1&&(f=c-f,w=1),p!==M&&!this._lock){var C=S&&M&1,b=C===(S&&p&1);if(p<M&&(C=!C),a=C?0:h%c?c:h,this._lock=1,this.render(a||(w?0:xn(p*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&Gi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=p),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=C?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;sx(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=LT(this,xn(a),xn(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(Gi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=-en);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||Qn&&bm(d)),f!==this._time||!this._ts&&!m){y=0,g&&(h+=this._zTime=E?-en:en);break}}d=g}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-en)._zTime=f>=a?1:-1,this._ts))return this._start=v,kd(this),this.render(i,s,o);this._onUpdate&&!s&&Gi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&Ys(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(Gi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_s(s)||(s=cr(this,s,i)),!(i instanceof Oc)){if(ci(i))return i.forEach(function(a){return o.add(a,s)}),this;if(Hn(i))return this.addLabel(i,s);if(wn(i))i=Ln.delayedCall(0,i);else return this}return this!==i?qr(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-ur);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return Hn(i)?this.removeLabel(i):wn(i)?this.killTweensOf(i):(i.parent===this&&Bd(this,i),i===this._recent&&(this._recent=this._last),Do(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=xn(Di.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=cr(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ln.delayedCall(0,s||Nc,o);return a.data="isPause",this._hasPause=1,qr(this,a,cr(this,i))},t.removePause=function(i){var s=this._first;for(i=cr(this,i);s;)s._start===i&&s.data==="isPause"&&Ys(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Ws!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=hr(i),l=this._first,c=_s(s),h;l;)l instanceof Ln?TT(l._targets,a)&&(c?(!Ws||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=cr(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Ln.to(o,Xi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||en,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&$a(g,_,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,Xi({startAt:{time:cr(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),P_(this,cr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),P_(this,cr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+en)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=xn(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Do(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Do(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=ur,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,qr(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=xn(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;$a(o,o===vn&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(vn._ts&&(H_(vn,Fd(i,vn)),k_=Di.frame),Di.frame>=w_){w_+=Ni.autoSleep||120;var s=vn._first;if((!s||!s._ts)&&Ni.autoSleep&&Di._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Di.sleep()}}},e})(Oc);Xi(jn.prototype,{_lock:0,_hasPause:0,_forcing:0});var $T=function(e,t,n,i,s,o,a){var l=new vi(this._pt,e,t,0,1,Rm,null,s),c=0,h=0,u,f,d,g,p,_,m,y;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ja(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Zp)||[];u=Zp.exec(i);)g=u[0],p=i.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(_=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:_,c:g.charAt(1)==="="?Oo(_,g)-_:parseFloat(g)-_,m:d&&d<4?Math.round:0},c=Zp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(mm.test(i)||m)&&(l.e=0),this._pt=l,l},Sm=function(e,t,n,i,s,o,a,l,c,h){wn(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:wn(u)?c?e[t.indexOf("set")||!wn(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=wn(u)?c?QT:cx:Am,g;if(Hn(i)&&(~i.indexOf("random(")&&(i=Ja(i)),i.charAt(1)==="="&&(g=Oo(f,i)+(ei(f)||0),(g||g===0)&&(i=g))),!h||f!==i||um)return!isNaN(f*i)&&i!==""?(g=new vi(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?tw:ux,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Od(t,i),$T.call(this,e,t,f,i,d,l||Ni.stringFilter,c))},ZT=function(e,t,n,i,s){if(wn(e)&&(e=Dc(e,s,t,n,i)),!Yr(e)||e.style&&e.nodeType||ci(e)||N_(e))return Hn(e)?Dc(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Dc(e[a],s,t,n,i);return o},Tm=function(e,t,n,i,s,o){var a,l,c,h;if(Li[e]&&(a=new Li[e]).init(s,a.rawVars?t[e]:ZT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new vi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Wa))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Ws,um,wm=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,p=e._startAt,_=e._targets,m=e.parent,y=m&&m.data==="nested"?m.vars.targets:_,x=e._overwrite==="auto"&&!dm,v=e.timeline,M,S,w,C,b,E,P,N,B,H,Z,W,X;if(v&&(!f||!s)&&(s="none"),e._ease=Fo(s,Xa.ease),e._yEase=u?rx(Fo(u===!0?s:u,Xa.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(N=_[0]?qs(_[0]).harness:0,W=N&&i[N.prop],M=Dd(i,_m),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!d?p.render(-1,!0):p.revert(h&&g?Rd:ET),p._lazy=0),o){if(Ys(e._startAt=Ln.set(_,Xi({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&Fi(l),startAt:null,delay:0,onUpdate:c&&function(){return Gi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qn||!a&&!d)&&e._startAt.revert(Rd),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!p){if(t&&(a=!1),w=Xi({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Fi(l),immediateRender:a,stagger:0,parent:m},M),W&&(w[N.prop]=W),Ys(e._startAt=Ln.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(Qn?e._startAt.revert(Rd):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,en,en);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Fi(l)||l&&!g,S=0;S<_.length;S++){if(b=_[S],P=b._gsap||vm(_)[S]._gsap,e._ptLookup[S]=H={},rm[P.id]&&Xs.length&&Ld(),Z=y===_?S:y.indexOf(b),N&&(B=new N).init(b,W||M,e,Z,y)!==!1&&(e._pt=C=new vi(e._pt,b,B.name,0,1,B.render,B,0,B.priority),B._props.forEach(function(O){H[O]=C}),B.priority&&(E=1)),!N||W)for(w in M)Li[w]&&(B=Tm(w,M,e,Z,b,y))?B.priority&&(E=1):H[w]=C=Sm.call(e,b,w,"get",M[w],Z,y,0,i.stringFilter);e._op&&e._op[S]&&e.kill(b,e._op[S]),x&&e._pt&&(Ws=e,vn.killTweensOf(b,H,e.globalTime(t)),X=!e.parent,Ws=0),e._pt&&l&&(rm[P.id]=1)}E&&Pm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!X,f&&t<=0&&v.render(ur,!0,!0)},JT=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return um=1,e.vars[t]="+=0",wm(e,a),um=0,l?Fc(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=An(n)+ei(u.e)),u.b&&(u.b=h.s+ei(u.b))},KT=function(e,t){var n=e[0]?qs(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=qa({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},jT=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ci(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Dc=function(e,t,n,i,s){return wn(e)?e.call(t,n,i,s):Hn(e)&&~e.indexOf("random(")?Ja(e):e},ax=xm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",lx={};xi(ax+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return lx[r]=1});var Ln=(function(r){D_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ic(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,m=l.yoyoEase,y=i.parent||vn,x=(ci(n)||N_(n)?_s(n[0]):"length"in i)?[n]:hr(n),v,M,S,w,C,b,E,P;if(a._targets=x.length?vm(x):Fc("GSAP target "+n+" not found. https://gsap.com",!Ni.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Ad(c)||Ad(h)){if(i=a.vars,v=a.timeline=new jn({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=ms(a),v._start=0,f||Ad(c)||Ad(h)){if(w=x.length,E=f&&Z_(f),Yr(f))for(C in f)~ax.indexOf(C)&&(P||(P={}),P[C]=f[C]);for(M=0;M<w;M++)S=Dd(i,lx),S.stagger=0,m&&(S.yoyoEase=m),P&&qa(S,P),b=x[M],S.duration=+Dc(c,ms(a),M,b,x),S.delay=(+Dc(h,ms(a),M,b,x)||0)-a._delay,!f&&w===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),v.to(b,S,E?E(M,b,x):0),v._ease=Ft.none;v.duration()?c=h=0:a.timeline=0}else if(g){Ic(Xi(v.vars.defaults,{ease:"none"})),v._ease=Fo(g.ease||i.ease||"none");var N=0,B,H,Z;if(ci(g))g.forEach(function(W){return v.to(x,W,">")}),v.duration();else{S={};for(C in g)C==="ease"||C==="easeEach"||jT(C,g[C],S,g.easeEach);for(C in S)for(B=S[C].sort(function(W,X){return W.t-X.t}),N=0,M=0;M<B.length;M++)H=B[M],Z={ease:H.e,duration:(H.t-(M?B[M-1].t:0))/100*c},Z[C]=H.v,v.to(x,Z,N),N+=Z.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!dm&&(Ws=ms(a),vn.killTweensOf(x),Ws=0),qr(y,ms(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===xn(y._time)&&Fi(u)&&CT(ms(a))&&y.data!=="nested")&&(a._tTime=-en,a.render(Math.max(0,-h)||0)),_&&X_(ms(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-en&&!h?l:i<en?0:i,f,d,g,p,_,m,y,x,v;if(!c)IT(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,o);if(f=xn(u%p),u===l?(g=this._repeat,f=c):(_=xn(u/p),g=~~_,g&&g===_?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(v=this._yEase,f=c-f),_=Ya(this._tTime,p),f===a&&!o&&this._initted&&g===_)return this._tTime=u,this;g!==_&&(x&&this._yEase&&sx(x,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(xn(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(q_(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&u&&!s&&!_&&(Gi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&sm(this,i,s,o),Gi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&Gi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&sm(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&Ys(this,1),!s&&!(h&&!a)&&(u||a||m)&&(Gi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Uc||Di.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||wm(this,c),h=this._ease(c/this._dur),JT(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(Hd(this,0),this.parent||G_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!Qn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Ws&&Ws.vars.overwrite!==!0)._first||Cc(this),this.parent&&o!==this.timeline.totalDuration()&&$a(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?hr(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,p,_,m;if((!s||s==="all")&&AT(a,l))return s==="all"&&(this._pt=0),Cc(this);for(u=this._op=this._op||[],s!=="all"&&(Hn(s)&&(p={},xi(s,function(y){return p[y]=1}),s=p),s=KT(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,g=f,d={}):(d=u[m]=u[m]||{},g=s);for(p in g)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&Bd(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Cc(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lc(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lc(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return vn.killTweensOf(i,s,o)},e})(Oc);Xi(Ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});xi("staggerTo,staggerFrom,staggerFromTo",function(r){Ln[r]=function(){var e=new jn,t=am.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Am=function(e,t,n){return e[t]=n},cx=function(e,t,n){return e[t](n)},QT=function(e,t,n,i){return e[t](i.fp,n)},ew=function(e,t,n){return e.setAttribute(t,n)},zd=function(e,t){return wn(e[t])?cx:Ud(e[t])&&e.setAttribute?ew:Am},ux=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},tw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Rm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Cm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},nw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},iw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bd(this,t,"_pt"):t.dep||(n=1),t=i;return!n},rw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Pm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},vi=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||ux,this.d=l||this,this.set=c||Am,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=rw,this.m=n,this.mt=s,this.tween=i},r})();xi(xm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return _m[r]=1});Wi.TweenMax=Wi.TweenLite=Ln;Wi.TimelineLite=Wi.TimelineMax=jn;vn=new jn({sortChildren:!1,defaults:Xa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Ni.stringFilter=Mm;var No=[],Pd={},sw=[],L_=0,ow=0,em=function(e){return(Pd[e]||sw).map(function(t){return t()})},hm=function(){var e=Date.now(),t=[];e-L_>2&&(em("matchMediaInit"),No.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Xr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),em("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),L_=e,em("matchMedia"))},hx=(function(){function r(t,n){this.selector=n&&lm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=ow++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){wn(n)&&(s=i,i=n,n=wn);var o=this,a=function(){var c=pn,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=lm(s)),pn=o,u=i.apply(o,arguments),wn(u)&&o._r.push(u),pn=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===wn?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=pn;pn=null,n(this),pn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof jn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ln)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=No.length;o--;)No[o].id===this.id&&No.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),aw=(function(){function r(t){this.contexts=[],this.scope=t,pn&&pn.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Yr(n)||(n={matches:n});var o=new hx(0,s||this.scope),a=o.conditions={},l,c,h;pn&&!o.selector&&(o.selector=pn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Xr.matchMedia(n[c]),l&&(No.indexOf(o)<0&&No.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(hm):l.addEventListener("change",hm)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Nd={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return tx(i)})},timeline:function(e){return new jn(e)},getTweensOf:function(e,t){return vn.getTweensOf(e,t)},getProperty:function(e,t,n,i){Hn(e)&&(e=hr(e)[0]);var s=qs(e||{}).get,o=n?V_:z_;return n==="native"&&(n=""),e&&(t?o((Li[t]&&Li[t].get||s)(e,t,n,i)):function(a,l,c){return o((Li[a]&&Li[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=hr(e),e.length>1){var i=e.map(function(h){return ui.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Li[t],a=qs(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Wa._pt=0,u.init(e,n?h+n:h,Wa,0,[e]),u.render(1,u),Wa._pt&&Cm(1,Wa)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=ui.to(e,Xi((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return vn.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Fo(e.ease,Xa.ease)),A_(Xa,e||{})},config:function(e){return A_(Ni,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Li[a]&&!Wi[a]&&Fc(t+" effect requires "+a+" plugin.")}),Jp[t]=function(a,l,c){return n(hr(a),Xi(l||{},s),c)},o&&(jn.prototype[t]=function(a,l,c){return this.add(Jp[t](a,Yr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ft[e]=Fo(t)},parseEase:function(e,t){return arguments.length?Fo(e,t):Ft},getById:function(e){return vn.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new jn(e),i,s;for(n.smoothChildTiming=Fi(e.smoothChildTiming),vn.remove(n),n._dp=0,n._time=n._tTime=vn._time,i=vn._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ln&&i.vars.onComplete===i._targets[0]))&&qr(n,i,i._start-i._delay),i=s;return qr(vn,n,0),n},context:function(e,t){return e?new hx(e,t):pn},matchMedia:function(e){return new aw(e)},matchMediaRefresh:function(){return No.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||hm()},addEventListener:function(e,t){var n=Pd[e]||(Pd[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Pd[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:kT,wrapYoyo:HT,distribute:Z_,random:K_,snap:J_,normalize:BT,getUnit:ei,clamp:FT,splitColor:nx,toArray:hr,selector:lm,mapRange:Q_,pipe:UT,unitize:OT,interpolate:zT,shuffle:$_},install:O_,effects:Jp,ticker:Di,updateRoot:jn.updateRoot,plugins:Li,globalTimeline:vn,core:{PropTween:vi,globals:B_,Tween:Ln,Timeline:jn,Animation:Oc,getCache:qs,_removeLinkedListItem:Bd,reverting:function(){return Qn},context:function(e){return e&&pn&&(pn.data.push(e),e._ctx=pn),pn},suppressOverwrites:function(e){return dm=e}}};xi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Nd[r]=Ln[r]});Di.add(jn.updateRoot);Wa=Nd.to({},{duration:0});var lw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},cw=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=lw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},tm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(Hn(s)&&(l={},xi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}cw(a,s)}}}},ui=Nd.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)Qn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},tm("roundProps",cm),tm("modifiers"),tm("snap",J_))||Nd;Ln.version=jn.version=ui.version="3.14.2";U_=1;fm()&&Za();var uw=Ft.Power0,hw=Ft.Power1,dw=Ft.Power2,fw=Ft.Power3,pw=Ft.Power4,mw=Ft.Linear,gw=Ft.Quad,_w=Ft.Cubic,xw=Ft.Quart,vw=Ft.Quint,yw=Ft.Strong,bw=Ft.Elastic,Mw=Ft.Back,Ew=Ft.SteppedEase,Sw=Ft.Bounce,Tw=Ft.Sine,ww=Ft.Expo,Aw=Ft.Circ;var dx,Zs,ja,Um,Vo,Rw,fx,Om,Cw=function(){return typeof window<"u"},vs={},zo=180/Math.PI,Qa=Math.PI/180,Ka=Math.atan2,px=1e8,Bm=/([A-Z])/g,Pw=/(left|right|width|margin|padding|x)/i,Iw=/[\s,\(]\S/,$r={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Lm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Lw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Dw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Fw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Nw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Mx=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Ex=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Uw=function(e,t,n){return e.style[t]=n},Ow=function(e,t,n){return e.style.setProperty(t,n)},Bw=function(e,t,n){return e._gsap[t]=n},kw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Hw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},zw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},yn="transform",Ui=yn+"Origin",Vw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in vs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=$r[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=xs(i,a)}):this.tfm[e]=o.x?o[e]:xs(i,e),e===Ui&&(this.tfm.zOrigin=o.zOrigin);else return $r.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(yn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Ui,t,"")),e=yn}(s||t)&&this.props.push(e,t,s[e])},Sx=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Gw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Bm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Om(),(!s||!s.isStart)&&!n[yn]&&(Sx(n),i.zOrigin&&n[Ui]&&(n[Ui]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Tx=function(e,t){var n={target:e,props:[],revert:Gw,save:Vw};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},wx,Dm=function(e,t){var n=Zs.createElementNS?Zs.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Zs.createElement(e);return n&&n.style?n:Zs.createElement(e)},qi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Bm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,el(t)||t,1)||""},mx="O,Moz,ms,Ms,Webkit".split(","),el=function(e,t,n){var i=t||Vo,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(mx[o]+e in s););return o<0?null:(o===3?"ms":o>=0?mx[o]:"")+e},Fm=function(){Cw()&&window.document&&(dx=window,Zs=dx.document,ja=Zs.documentElement,Vo=Dm("div")||{style:{}},Rw=Dm("div"),yn=el(yn),Ui=yn+"Origin",Vo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",wx=!!el("perspective"),Om=ui.core.reverting,Um=1)},gx=function(e){var t=e.ownerSVGElement,n=Dm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),ja.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),ja.removeChild(n),s},_x=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Ax=function(e){var t,n;try{t=e.getBBox()}catch{t=gx(e),n=1}return t&&(t.width||t.height)||n||(t=gx(e)),t&&!t.width&&!t.x&&!t.y?{x:+_x(e,["x","cx","x1"])||0,y:+_x(e,["y","cy","y1"])||0,width:0,height:0}:t},Rx=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Ax(e))},Ks=function(e,t){if(t){var n=e.style,i;t in vs&&t!==Ui&&(t=yn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Bm,"-$1").toLowerCase())):n.removeAttribute(t)}},Js=function(e,t,n,i,s,o){var a=new vi(e._pt,t,n,0,1,o?Ex:Mx);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},xx={deg:1,rad:1,turn:1},Ww={grid:1,flex:1},js=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Vo.style,l=Pw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,p,_,m;if(i===o||!s||xx[i]||xx[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Rx(e),(d||o==="%")&&(vs[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],An(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Zs||!p.appendChild)&&(p=Zs.body),_=p._gsap,_&&d&&_.width&&l&&_.time===Di.time&&!_.uncache)return An(s/_.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,g=e[h],y?e.style[t]=y:Ks(e,t)}else(d||o==="%")&&!Ww[qi(p,"display")]&&(a.position=qi(e,"position")),p===e&&(a.position="static"),p.appendChild(Vo),g=Vo[h],p.removeChild(Vo),a.position="absolute";return l&&d&&(_=qs(p),_.time=Di.time,_.width=p[h]),An(f?g*s/u:g&&s?u/g*s:0)},xs=function(e,t,n,i){var s;return Um||Fm(),t in $r&&t!=="transform"&&(t=$r[t],~t.indexOf(",")&&(t=t.split(",")[0])),vs[t]&&t!=="transform"?(s=zc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Gd(qi(e,Ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Vd[t]&&Vd[t](e,t,n)||qi(e,t)||ym(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?js(e,t,s,n)+n:s},Xw=function(e,t,n,i){if(!n||n==="none"){var s=el(t,e,1),o=s&&qi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=qi(e,"borderTopColor"))}var a=new vi(this._pt,e.style,t,0,1,Rm),l=0,c=0,h,u,f,d,g,p,_,m,y,x,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=qi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=qi(e,t)||i,p?e.style[t]=p:Ks(e,t)),h=[n,i],Mm(h),n=h[0],i=h[1],f=n.match(Uo)||[],M=i.match(Uo)||[],M.length){for(;u=Uo.exec(i);)_=u[0],y=i.substring(l,u.index),g?g=(g+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(g=1),_!==(p=f[c++]||"")&&(d=parseFloat(p)||0,v=p.substr((d+"").length),_.charAt(1)==="="&&(_=Oo(d,_)+v),m=parseFloat(_),x=_.substr((m+"").length),l=Uo.lastIndex-x.length,x||(x=x||Ni.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=js(e,t,p,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Ex:Mx;return mm.test(i)&&(a.e=0),this._pt=a,a},vx={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},qw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=vx[n]||n,t[1]=vx[i]||i,t.join(" ")},Yw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],vs[a]&&(l=1,a=a==="transformOrigin"?Ui:yn),Ks(n,a);l&&(Ks(n,yn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zc(n,1),o.uncache=1,Sx(i)))}},Vd={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new vi(e._pt,t,n,0,0,Yw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Hc=[1,0,0,1,0,0],Cx={},Px=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},yx=function(e){var t=qi(e,yn);return Px(t)?Hc:t.substr(7).match(pm).map(An)},km=function(e,t){var n=e._gsap||qs(e),i=e.style,s=yx(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hc:s):(s===Hc&&!e.offsetParent&&e!==ja&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,ja.appendChild(e)),s=yx(e),l?i.display=l:Ks(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):ja.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Nm=function(e,t,n,i,s,o){var a=e._gsap,l=s||km(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],_=l[3],m=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,S,w,C,b;n?l!==Hc&&(w=d*_-g*p)&&(C=v*(_/w)+M*(-p/w)+(p*y-_*m)/w,b=v*(-g/w)+M*(d/w)-(d*y-g*m)/w,v=C,M=b):(S=Ax(e),v=S.x+(~x[0].indexOf("%")?v/100*S.width:v),M=S.y+(~(x[1]||x[0]).indexOf("%")?M/100*S.height:M)),i||i!==!1&&a.smooth?(m=v-c,y=M-h,a.xOffset=u+(m*d+y*p)-m,a.yOffset=f+(m*g+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Ui]="0px 0px",o&&(Js(o,a,"xOrigin",c,v),Js(o,a,"yOrigin",h,M),Js(o,a,"xOffset",u,a.xOffset),Js(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},zc=function(e,t){var n=e._gsap||new Em(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=qi(e,Ui)||"0",h,u,f,d,g,p,_,m,y,x,v,M,S,w,C,b,E,P,N,B,H,Z,W,X,O,V,A,K,ce,pe,Ee,Be;return h=u=f=p=_=m=y=x=v=0,d=g=1,n.svg=!!(e.getCTM&&Rx(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[yn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[yn]!=="none"?l[yn]:"")),i.scale=i.rotate=i.translate="none"),w=km(e,n.svg),n.svg&&(n.uncache?(O=e.getBBox(),c=n.xOrigin-O.x+"px "+(n.yOrigin-O.y)+"px",X=""):X=!t&&e.getAttribute("data-svg-origin"),Nm(e,X||c,!!X||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,S=n.yOrigin||0,w!==Hc&&(P=w[0],N=w[1],B=w[2],H=w[3],h=Z=w[4],u=W=w[5],w.length===6?(d=Math.sqrt(P*P+N*N),g=Math.sqrt(H*H+B*B),p=P||N?Ka(N,P)*zo:0,y=B||H?Ka(B,H)*zo+p:0,y&&(g*=Math.abs(Math.cos(y*Qa))),n.svg&&(h-=M-(M*P+S*B),u-=S-(M*N+S*H))):(Be=w[6],pe=w[7],A=w[8],K=w[9],ce=w[10],Ee=w[11],h=w[12],u=w[13],f=w[14],C=Ka(Be,ce),_=C*zo,C&&(b=Math.cos(-C),E=Math.sin(-C),X=Z*b+A*E,O=W*b+K*E,V=Be*b+ce*E,A=Z*-E+A*b,K=W*-E+K*b,ce=Be*-E+ce*b,Ee=pe*-E+Ee*b,Z=X,W=O,Be=V),C=Ka(-B,ce),m=C*zo,C&&(b=Math.cos(-C),E=Math.sin(-C),X=P*b-A*E,O=N*b-K*E,V=B*b-ce*E,Ee=H*E+Ee*b,P=X,N=O,B=V),C=Ka(N,P),p=C*zo,C&&(b=Math.cos(C),E=Math.sin(C),X=P*b+N*E,O=Z*b+W*E,N=N*b-P*E,W=W*b-Z*E,P=X,Z=O),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,m=180-m),d=An(Math.sqrt(P*P+N*N+B*B)),g=An(Math.sqrt(W*W+Be*Be)),C=Ka(Z,W),y=Math.abs(C)>2e-4?C*zo:0,v=Ee?1/(Ee<0?-Ee:Ee):0),n.svg&&(X=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Px(qi(e,yn)),X&&e.setAttribute("transform",X))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=An(d),n.scaleY=An(g),n.rotation=An(p)+a,n.rotationX=An(_)+a,n.rotationY=An(m)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Ui]=Gd(c)),n.xOffset=n.yOffset=0,n.force3D=Ni.force3D,n.renderTransform=n.svg?Zw:wx?Ix:$w,n.uncache=0,n},Gd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Im=function(e,t,n){var i=ei(t);return An(parseFloat(t)+parseFloat(js(e,"x",n+"px",i)))+i},$w=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ix(e,t)},ko="0deg",kc="0px",Ho=") ",Ix=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,_=n.transformPerspective,m=n.force3D,y=n.target,x=n.zOrigin,v="",M=m==="auto"&&e&&e!==1||m===!0;if(x&&(u!==ko||h!==ko)){var S=parseFloat(h)*Qa,w=Math.sin(S),C=Math.cos(S),b;S=parseFloat(u)*Qa,b=Math.cos(S),o=Im(y,o,w*b*-x),a=Im(y,a,-Math.sin(S)*-x),l=Im(y,l,C*b*-x+x)}_!==kc&&(v+="perspective("+_+Ho),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==kc||a!==kc||l!==kc)&&(v+=l!==kc||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Ho),c!==ko&&(v+="rotate("+c+Ho),h!==ko&&(v+="rotateY("+h+Ho),u!==ko&&(v+="rotateX("+u+Ho),(f!==ko||d!==ko)&&(v+="skew("+f+", "+d+Ho),(g!==1||p!==1)&&(v+="scale("+g+", "+p+Ho),y.style[yn]=v||"translate(0, 0)"},Zw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,_=n.xOffset,m=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),M,S,w,C,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=Qa,c*=Qa,M=Math.cos(l)*u,S=Math.sin(l)*u,w=Math.sin(l-c)*-f,C=Math.cos(l-c)*f,c&&(h*=Qa,b=Math.tan(c-h),b=Math.sqrt(1+b*b),w*=b,C*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,S*=b)),M=An(M),S=An(S),w=An(w),C=An(C)):(M=u,C=f,S=w=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=js(d,"x",o,"px"),v=js(d,"y",a,"px")),(g||p||_||m)&&(x=An(x+g-(g*M+p*w)+_),v=An(v+p-(g*S+p*C)+m)),(i||s)&&(b=d.getBBox(),x=An(x+i/100*b.width),v=An(v+s/100*b.height)),b="matrix("+M+","+S+","+w+","+C+","+x+","+v+")",d.setAttribute("transform",b),y&&(d.style[yn]=b)},Jw=function(e,t,n,i,s){var o=360,a=Hn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?zo:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*px)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*px)%o-~~(c/o)*o)),e._pt=f=new vi(e._pt,t,n,i,c,Lw),f.e=h,f.u="deg",e._props.push(n),f},bx=function(e,t){for(var n in t)e[n]=t[n];return e},Kw=function(e,t,n){var i=bx({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[yn]=t,a=zc(n,1),Ks(n,yn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[yn],o[yn]=t,a=zc(n,1),o[yn]=c);for(l in vs)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=ei(c),g=ei(h),u=d!==g?js(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new vi(e._pt,a,l,u,f-u,Lm),e._pt.u=g||0,e._props.push(l));bx(a,i)};xi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Vd[e>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return xs(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,u)}});var Hm={name:"css",register:Fm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,g,p,_,m,y,x,v,M,S,w,C,b;Um||Fm(),this.styles=this.styles||Tx(e),C=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Li[p]&&Tm(p,t,n,i,e,s)))){if(d=typeof h,g=Vd[p],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ja(h)),g)g(this,e,p,h,n)&&(w=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",gs.lastIndex=0,gs.test(c)||(_=ei(c),m=ei(h),m?_!==m&&(c=js(e,p,c,m)+m):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,p),o.push(p),C.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],Hn(c)&&~c.indexOf("random(")&&(c=Ja(c)),ei(c+"")||c==="auto"||(c+=Ni.units[p]||ei(xs(e,p))||""),(c+"").charAt(1)==="="&&(c=xs(e,p))):c=xs(e,p),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),p in $r&&(p==="autoAlpha"&&(f===1&&xs(e,"visibility")==="hidden"&&u&&(f=0),C.push("visibility",0,a.visibility),Js(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=$r[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in vs,x){if(this.styles.save(p),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=qi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=qi(e,"perspective"),E?e.style.perspective=E:Ks(e,"perspective")}u=parseFloat(h)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||zc(e,t.parseTransform),S=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new vi(this._pt,a,yn,0,1,M.renderTransform,M,0,-1),v.dep=1),p==="scale")this._pt=new vi(this._pt,M,"scaleY",M.scaleY,(y?Oo(M.scaleY,y+u):u)-M.scaleY||0,Lm),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){C.push(Ui,0,a[Ui]),h=qw(h),M.svg?Nm(e,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Js(this,M,"zOrigin",M.zOrigin,m),Js(this,a,p,Gd(c),Gd(h)));continue}else if(p==="svgOrigin"){Nm(e,h,1,S,0,this);continue}else if(p in Cx){Jw(this,M,p,f,y?Oo(f,y+h):h);continue}else if(p==="smoothOrigin"){Js(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){Kw(this,h,e);continue}}else p in a||(p=el(p)||p);if(x||(u||u===0)&&(f||f===0)&&!Iw.test(h)&&p in a)_=(c+"").substr((f+"").length),u||(u=0),m=ei(h)||(p in Ni.units?Ni.units[p]:_),_!==m&&(f=js(e,p,c,m)),this._pt=new vi(this._pt,x?M:a,p,f,(y?Oo(f,y+u):u)-f,!x&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Nw:Lm),this._pt.u=m||0,x&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Fw):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Dw);else if(p in a)Xw.call(this,e,p,c,y?y+h:h);else if(p in e)this.add(e,p,c||e[p],y?y+h:h,i,s);else if(p!=="parseTransform"){Od(p,h);continue}x||(p in a?C.push(p,0,a[p]):typeof e[p]=="function"?C.push(p,2,e[p]()):C.push(p,1,c||e[p])),o.push(p)}}w&&Pm(this)},render:function(e,t){if(t.tween._time||!Om())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:xs,aliases:$r,getSetter:function(e,t,n){var i=$r[t];return i&&i.indexOf(",")<0&&(t=i),t in vs&&t!==Ui&&(e._gsap.x||xs(e,"x"))?n&&fx===n?t==="scale"?kw:Bw:(fx=n||{})&&(t==="scale"?Hw:zw):e.style&&!Ud(e.style[t])?Uw:~t.indexOf("-")?Ow:zd(e,t)},core:{_removeProperty:Ks,_getMatrix:km}};ui.utils.checkPrefix=el;ui.core.getStyleSaver=Tx;(function(r,e,t,n){var i=xi(r+","+e+","+t,function(s){vs[s]=1});xi(e,function(s){Ni.units[s]="deg",Cx[s]=1}),$r[i[13]]=r+","+e,xi(n,function(s){var o=s.split(":");$r[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");xi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Ni.units[r]="px"});ui.registerPlugin(Hm);var ue=ui.registerPlugin(Hm)||ui,jR=ue.core.Tween;var Lx=[["THE CALL","A window in the dark.","At the end of the valley, one window still flickers. The keeper has one lantern left."],["THE OPENING","The mountain remembers.","An old door unlocks. The observatory opens its ribs, revealing the lift that once carried starlight."],["THE DESCENT","Take the light below.","The keeper lowers the lantern into the heart of the machine. For a moment, nothing happens."],["THE SPARK","One small light is enough.","The socket catches. Teeth turn. Three broken lenses begin looking for the same point in the sky."],["THE SIGNAL","Give the dark an answer.","The lenses lock. The observatory folds itself whole, and sends the lantern\u2019s light across the valley."],["THE REPLY","One window. Then another.","The signal reaches the sleeping village. A street wakes. Then the next. Someone has been waiting."],["THE HOMECOMING","You were never the last.","A light comes back from the village. The keeper returns to the rooftop. There is enough light now, for everyone."]],Dx=r=>Math.max(0,Math.min(1,r)),Go=r=>(r=Dx(r),r*r*(3-2*r));function Fx(r){let e=Dx(r),t=(n,i)=>Go((e-n)/(i-n));return{p:e,chapter:e<.12?0:e<.27?1:e<.42?2:e<.57?3:e<.72?4:e<.88?5:6,open:t(.12,.27),descend:t(.27,.4),spark:t(.4,.46),align:t(.44,.57),close:t(.57,.66),transmit:t(.65,.77),village:t(.75,.9),reply:t(.88,.95),dawn:t(.88,.97),returnHome:t(.87,.95)}}function Nx(r){let e=document.querySelector(".lk-world");if(!e)return;if(r){let L=document.querySelector(".lk-log");L&&(L.open=!0)}let t;try{t=new li({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{let L=document.querySelector(".lk-journey");L&&(L.style.height="100svh");return}e.append(t.domElement),e.classList.add("has-webgl"),t.setPixelRatio(1),t.setClearColor(726816,1),t.outputColorSpace=Zt;let n=new sn;n.fog=new cs(726816,45,100);let i=new Ci(-20,20,14,-14,.1,200),s=new wr(10470603,2);n.add(s);let o=new fn(16762004,3);o.position.set(-15,25,10),n.add(o);let a=new fn(4950939,2);a.position.set(10,6,-10),n.add(a);let l=new Gt(1,1,1),c=new Map;function h(L,U=!1){let z=L+U;return c.has(z)||c.set(z,new bt({color:L,roughness:1,emissive:U?L:0,emissiveIntensity:U?1.7:0})),c.get(z)}function u(L,U,z,G,xe,oe,Ie,Le,de=!1){let he=new $e(l,h(Le,de));return he.position.set(U,z,G),he.scale.set(xe,oe,Ie),L.add(he),he}let f=new Je;n.add(f);let d=new Je;f.add(d);let g=41,p=()=>(g=g*16807%2147483647,(g-1)/2147483646),_=new _n,m=[];for(let L=-12;L<=12;L++)for(let U=-10;U<=10;U++){let z=Math.sqrt(L*L+U*U*1.25);if(z>12+p()*1.5)continue;let G=-3+Math.floor(Math.sin(L*.5)*.7+Math.cos(U*.4)*.9+p()),xe=Math.max(1,Math.floor((13-z)*.5));for(let oe=0;oe<xe;oe++)m.push({x:L,y:G-oe,z:U,s:1,c:new Te(oe===0?p()>.7?"#78958c":"#496c69":p()>.5?"#263f49":"#34505a")})}let y=new Mr(l,h("#ffffff"),m.length);m.forEach((L,U)=>{_.position.set(L.x,L.y,L.z),_.scale.set(1,1,1),_.updateMatrix(),y.setMatrixAt(U,_.matrix),y.setColorAt(U,L.c)}),d.add(y);for(let L=0;L<15;L++)u(f,7-L*.32,-2+L*.28,8-L*.6,2.2,.25,.7,"#829588");for(let L=0;L<25;L++){let U=p()*Math.PI*2,z=8+p()*3,G=Math.cos(U)*z,xe=Math.sin(U)*z;if(!(xe>3&&G>3)){u(f,G,-1.7,xe,.3,2,.3,"#384b4c");for(let oe=0;oe<4;oe++)u(f,G,-1+oe*.6,xe,2.4-oe*.5,.7,2.4-oe*.5,oe%2?"#345f59":"#416f63")}}let x=new Je;f.add(x);let v=[];for(let L=0;L<4;L++){let U=new Je;U.position.y=L*3,v.push(U),x.add(U),u(U,0,0,0,8,.45,7,"#5b7373"),u(U,0,.32,0,7.5,.2,6.5,"#96a499");for(let z of[-3.5,3.5])for(let G of[-3,3])u(U,z,1.5,G,.65,2.7,.65,"#78938b"),u(U,z,2.8,G,.9,.25,.9,"#a4afa0");u(U,0,1.5,-3.1,6.8,2.7,.45,"#35545c");for(let z=-2;z<=2;z++)u(U,z*1.15,1.65,-2.84,.5,1.15,.1,"#192f3a"),u(U,z*1.15,1.65,-2.76,.18,.6,.08,"#b7885d",!0);u(U,-3.7,1.4,0,.3,2.8,6,"#496970");for(let z=-2;z<=2;z++)u(U,-3.47,1.5,z,.08,.8,.4,"#ba9164",!0);for(let z=-3;z<=3;z++)u(U,z,1,3.2,.13,1.2,.13,"#a2a48b");u(U,0,1.6,3.2,7.5,.12,.13,"#b1ae91")}let M=[];for(let L=0;L<4;L++){let U=new Je;U.position.y=12,U.rotation.y=L*Math.PI/2,x.add(U);let z=new Je;U.add(z),z.position.z=-3.4;for(let G=0;G<6;G++)u(z,0,G*.4,G*.55,7-G*.8,.45,.7,G%2?"#536d77":"#68858b");M.push(z)}u(x,0,12,0,8.6,.35,8.2,"#a7a78d");let S=new Je;f.add(S),u(S,0,.6,0,.6,.9,.5,"#e5b06c"),u(S,0,1.3,0,.55,.5,.5,"#e7d5a8"),u(S,0,1.65,0,.75,.2,.65,"#c57452"),u(S,-.2,.05,0,.25,.3,.45,"#1a303c"),u(S,.2,.05,0,.25,.3,.45,"#1a303c");let w=u(S,.48,.65,0,.25,.45,.25,"#f2cd8a",!0),C=new Je;C.position.y=4.7,f.add(C);let b=new $e(new oc(1.2,0),h("#ffc278",!0));C.add(b);let E=[];for(let L=0;L<3;L++){let U=new Je;C.add(U);for(let z=0;z<40;z++){let G=z/40*Math.PI*2,xe=u(U,Math.cos(G)*(2.1+L*.7),Math.sin(G)*(2.1+L*.7),0,.3,.3,.35,z%5===0?"#edc686":"#6b8c86",z%5===0);xe.rotation.z=G}E.push(U)}let P=[];for(let L=0;L<34;L++){let U=p()*6.28,z=8+p()*3,G=Math.cos(U)*z,xe=Math.sin(U)*z;u(f,G,-4,xe,1.6,.7,1.2,"#213b45"),u(f,G,-3.4,xe,1.2,.6,1,"#547370"),P.push(u(f,G,-3.35,xe+.52,.5,.3,.05,"#f5b76e",!0))}let N=new Je;f.add(N),u(N,0,0,0,1.9,.18,1.7,"#b3a481");for(let L of[-.85,.85])u(N,L,.55,.7,.1,1.2,.1,"#9da795"),u(N,L,.55,-.7,.1,1.2,.1,"#9da795");let B=[u(f,2.1,7,3,.06,10,.06,"#7b8e89"),u(f,3.9,7,3,.06,10,.06,"#7b8e89")],H=new Je;H.position.set(0,3.6,6),f.add(H),u(H,0,0,0,1.4,.35,1.4,"#667c77"),u(H,0,.3,0,.65,.4,.65,"#1a343a");let Z=u(H,0,.55,0,.4,.45,.4,"#ffce83",!0),W=[];for(let L=0;L<4;L++){let U=new Je;U.position.set(3.9,2.1+L*2,3.4),f.add(U);for(let z=0;z<12;z++){let G=z/12*Math.PI*2,xe=u(U,Math.cos(G)*.65,Math.sin(G)*.65,0,.3,.3,.22,z%2?"#a1a18a":"#79918a");xe.rotation.z=G}u(U,0,0,0,.3,.3,.35,"#d0b17a"),W.push(U)}let X=new Je;f.add(X);for(let L=0;L<9;L++)u(X,3-L*.36,3.45,3+L*.36,.7,.16,.7,"#a3a48a");for(let L=0;L<20;L++)u(x,4.3,L*.6,0,.13,.5,.13,"#8b9b8b"),u(x,4.7,L*.6,0,.13,.5,.13,"#8b9b8b"),u(x,4.5,L*.6,.04,.5,.08,.13,"#a3ac96");u(x,-4.15,5.8,-1,.25,11.5,.25,"#ac8a68");for(let L=0;L<5;L++)u(x,-4.15,1+L*2.2,-1,.4,.18,.4,"#c7ab7d");let O=new Je;O.position.set(0,14.8,0),f.add(O),u(O,0,0,0,1.1,1.4,1.1,"#8f9a88");let V=new Je;V.position.y=.8,O.add(V);for(let L=0;L<6;L++)u(V,0,0,L*.6,1.35-L*.12,1.35-L*.12,.7,L%2?"#cfb68b":"#637e7e");u(V,0,0,3.5,.8,.8,.12,"#c7e3d0",!0);let A=new Je;A.position.set(-3,16.8,-2),f.add(A),u(A,0,-1,0,.1,2,.1,"#c6ba97"),u(A,0,0,0,1.7,.16,.16,"#e2c28e"),u(A,.8,.2,0,.45,.6,.12,"#d6b887");let K=new Je;K.position.set(-20,-5,14),f.add(K);let ce=[],pe=[];for(let L=0;L<12;L++){let U=Math.floor(L/4),G=(L%4-1.5)*4.3,xe=(U-1)*4.4,oe=U*.55;u(K,G,oe-1.2,xe,4.1,2,4.1,"#3b595c"),u(K,G,oe-2.6,xe,3.1,1,3.1,"#29434e"),u(K,G,oe-.12,xe,4.2,.25,4.2,"#779383"),u(K,G,oe+1,xe,2.8,2.1,2.6,["#71938c","#a1aa94","#658b85"][L%3]);for(let de=0;de<4;de++)u(K,G,oe+2.15+de*.25,xe,3.3-de*.65,.3,3,"#425e64");u(K,G+.8,oe+2.6,xe-.5,.4,1.1,.4,"#8b9a87");let Ie=[];for(let de of[-.7,.7])Ie.push(u(K,G+de,oe+1.1,xe+1.32,.48,.6,.06,"#ffcb83",!0));Ie.push(u(K,G+1.42,oe+1.1,xe,.06,.65,.6,"#ffcb83",!0)),ce.push(Ie),u(K,G,oe+.45,xe+1.34,.42,.9,.06,"#304e50");let Le=u(K,G+.8,oe+3.5,xe-.5,.4,.4,.4,"#9aafa3");pe.push(Le)}let Ee=new Je;f.add(Ee);for(let L=0;L<36;L++){let U=L/35,z=-7-U*12,G=3+U*11,xe=-1.8-Math.sin(U*Math.PI)*2.5;u(Ee,z,xe,G,.7,.16,1.65,"#7e8e7b");for(let oe of[-1,1])u(Ee,z,xe+.65,G+oe*.8,.07,1.25,.07,"#8e9a85"),u(Ee,z,xe+1.2,G+oe*.8,.75,.07,.07,"#c2b18b")}let Be=new En([new I(0,14,0),new I(-6,20,4),new I(-15,12,11),new I(-20,0,14)]),te=new En([new I(-20,1,14),new I(-15,10,16),new I(-7,17,9),new I(1.7,12.6,3)]),re=new Je;f.add(re);for(let L=0;L<22;L++)u(re,0,0,0,L?.14:.45,L?.14:.45,L?.14:.45,L?"#e6c78b":"#fff1b3",!0);let we=new Je;f.add(we);for(let L=0;L<16;L++)u(we,0,0,0,L?.12:.35,L?.12:.35,L?.12:.35,"#cce6c1",!0);let Oe=new Je;Oe.position.y=14,f.add(Oe);for(let L=0;L<52;L++){let U=L/52*Math.PI*2;u(Oe,Math.cos(U),0,Math.sin(U),.12,.12,.12,"#ffe2a1",!0)}let Pe=new Je;f.add(Pe),u(Pe,0,0,0,.12,.3,.12,"#e4d5ad"),u(Pe,-.18,.08,0,.3,.35,.06,"#c9edd2",!0),u(Pe,.18,.08,0,.3,.35,.06,"#c9edd2",!0);let qe=new Je;f.add(qe);for(let L=0;L<70;L++){let U=p()*6.28,z=5+p()*15;u(qe,Math.cos(U)*z,p()*25-4,Math.sin(U)*z,.08,.08,.08,"#c8dcab",!0)}let at={p:0},Fe=-1,Xe=!0,Ze=0,He=0,Q=new I;function k(L=0){let U=Fx(at.p),z=U.p,G=Go((z-.7)/.22),xe=e.clientWidth/Math.max(1,e.clientHeight),oe=14-U.descend*2+U.close*2+G*9;i.left=-oe*xe,i.right=oe*xe,i.top=oe,i.bottom=-oe,i.updateProjectionMatrix();let Ie=.72+U.open*.33+U.align*.18-U.close*.35;Q.set((innerWidth<760?-1:-5)-G*5,5.5-U.descend*1.8+G*.5,G*6),i.position.set(Q.x+Math.sin(Ie)*36,22-U.descend*8+G*11,Q.z+Math.cos(Ie)*36),i.lookAt(Q);let Le=U.open*(1-U.close);M.forEach((fe,F)=>{fe.rotation.x=-Le*1.48,fe.position.y=Le*(F%2)*.4}),v.forEach((fe,F)=>{fe.position.x=(F%2?1:-1)*U.descend*7.7*(1-U.close),fe.position.y=F*3+Le*F*.35});let de=3,he=1+U.open*10-U.descend*7.4,Ue=3;de=de*(1-U.spark),Ue=3+U.spark*3,de=de*(1-U.returnHome)+U.returnHome*1.7,he=he*(1-U.returnHome)+U.returnHome*12.5,Ue=Ue*(1-U.returnHome)+U.returnHome*3,S.position.set(de,he,Ue),S.rotation.y=.3+U.descend*.7-U.returnHome*.9,S.scale.setScalar(1.2),N.position.set(3,.85+U.open*10-U.descend*7.4+U.returnHome*7.4,3),B.forEach((fe,F)=>{fe.position.set(2.1+F*1.8,(N.position.y+12)/2,3),fe.scale.y=Math.max(.2,12-N.position.y)}),w.visible=U.spark<.75,Z.visible=U.spark>.1,Z.scale.setScalar(.3+U.spark*.7),C.position.set(0,4.7+U.close*8,6*(1-U.close)),C.rotation.y=Ie,C.scale.setScalar(.28+U.descend*.82-U.close*.5),b.rotation.set(z*5,z*9,z*2),b.scale.setScalar(.25+U.spark*.9),b.material=h(U.spark>.5?"#ffe8a3":"#526c71",U.spark>.5),E.forEach((fe,F)=>{fe.rotation.set((1-U.align)*(F+1)*.8,(1-U.align)*(F+1)*1.1,z*(1-U.align)*(F%2?1:-1)*6),fe.scale.setScalar(.6+U.spark*.4)}),X.visible=U.descend>.6&&U.close<.5,W.forEach((fe,F)=>fe.rotation.z=U.spark*(z-.4)*28*(F%2?1:-1)),V.rotation.x=-.2-U.align*.6,V.rotation.y=-U.transmit*.7,A.rotation.y=Math.sin(L*.35)*.3,ce.forEach((fe,F)=>fe.forEach(be=>be.visible=U.village>(F+.3)/13)),P.forEach((fe,F)=>fe.visible=U.village>F/38+.05),pe.forEach((fe,F)=>{fe.visible=U.village>F/13,fe.position.y=3+Math.floor(F/4)*.55+(L*.45+F*.3)%2.2,fe.scale.setScalar(.3+(L*.45+F*.3)%2.2*.2)}),re.visible=z>=.65&&z<.8,re.children.forEach((fe,F)=>{let be=Math.max(0,U.transmit-F*.014);fe.position.copy(Be.getPoint(be)),fe.visible=U.transmit>=F*.014}),we.visible=z>.88&&z<.965,we.children.forEach((fe,F)=>{let be=Math.max(0,U.reply-F*.018);fe.position.copy(te.getPoint(be)),fe.visible=U.reply>=F*.018}),Oe.visible=U.transmit>0,Oe.scale.setScalar(1),Oe.position.y=15+U.transmit*2,Oe.children.forEach((fe,F)=>{let be=F/52*Math.PI*2;fe.position.set(Math.cos(be)*(1+U.transmit*12),0,Math.sin(be)*(1+U.transmit*12)),fe.visible=U.transmit<.85}),Pe.visible=U.reply>.9,Pe.position.set(2.4+Math.sin(L*.6)*.3,13.6+Math.sin(L*.8)*.2,3.5),Pe.rotation.y=Math.sin(L*3)*.4,qe.rotation.y=L*.012+z*.12,s.intensity=1.7+U.dawn*1.5,o.intensity=2.3+U.dawn*2;let ne=new Te("#0b1720").lerp(new Te("#789d96"),U.dawn*.75);if(t.setClearColor(ne,1),n.fog.color.copy(ne),t.render(n,i),e.dataset.scrollProgress=z.toFixed(3),e.dataset.storyBeat=String(U.chapter+1),e.dataset.litWindows=String(ce.filter((fe,F)=>U.village>(F+.3)/13).length),U.chapter!==Fe){Fe=U.chapter;let fe=Lx[U.chapter],F=document.querySelector(".lk-caption");F.querySelector("small").textContent=fe[0],F.querySelector("h2").textContent=fe[1],F.querySelector("p").textContent=fe[2]}let j=Go((z-.09)/.04);ue.set(".lk-caption",{opacity:j,y:20*(1-j)}),document.querySelector(".lk-stage")?.classList.toggle("is-ending",z>.72),document.querySelector(".lk-stage")?.classList.toggle("is-dawn",U.dawn>.5),ue.set(".lk-hero",{opacity:1-Go(z/.12),y:-Go(z/.12)*50}),ue.set(".lk-transmission",{opacity:1-Go(z/.15)}),ue.set(".lk-coordinate",{opacity:1-U.open}),ue.set(".lk-track i",{scaleX:z}),document.querySelector(".lk-progress-count").textContent=`${String(U.chapter+1).padStart(2,"0")} / 07`,document.querySelector(".lk-depth b").textContent=Math.round(1240-U.descend*230+U.returnHome*230).toLocaleString()}function gt(){t.setSize(Math.min(680,Math.round(e.clientWidth*.48)),Math.min(460,Math.round(e.clientHeight*.48)),!1),k()}gt();let dt=r?void 0:ue.timeline({scrollTrigger:{trigger:".lk-journey",start:"top top",end:"bottom bottom",scrub:.9},defaults:{ease:"none"}}).to(at,{p:1,duration:1}),Qe=new IntersectionObserver(([L])=>{Xe=L.isIntersecting,Xe&&D()});Qe.observe(e);function ke(L){Ze=0,!(document.hidden||!Xe)&&(L-He>40&&(k(r?0:L*.001),He=L),D())}function D(){!Ze&&!document.hidden&&Xe&&!r&&(Ze=requestAnimationFrame(ke))}let T=()=>{document.hidden?(cancelAnimationFrame(Ze),Ze=0):D()};return document.addEventListener("visibilitychange",T),window.addEventListener("resize",gt),D(),()=>{cancelAnimationFrame(Ze),Qe.disconnect(),dt?.scrollTrigger?.kill(),dt?.kill(),window.removeEventListener("resize",gt),document.removeEventListener("visibilitychange",T),l.dispose(),b.geometry.dispose(),c.forEach(L=>L.dispose()),t.dispose(),t.domElement.remove()}}var tl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Yi=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},jw=new Ci(-1,1,1,-1,0,1),zm=class extends xt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},Qw=new zm,Qs=class{constructor(e){this._mesh=new $e(Qw,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,jw)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Wo=class extends Yi{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Qs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc=class extends Yi{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Wd=class extends Yi{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var nl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ye);this._width=n.width,this._height=n.height,t=new un(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Tn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Wo(tl),this.copyPass.material.blending=or,this.clock=new hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(o instanceof Vc?n=!0:o instanceof Wd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ye);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Xd=class extends Yi{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Te}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Ux={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Te(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var eo=class r extends Yi{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ye(e.x,e.y):new ye(256,256),this.clearColor=new Te(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new un(s,o,{type:Tn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new un(s,o,{type:Tn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new un(s,o,{type:Tn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Ux;this.highPassUniforms=ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Nt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ye(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(tl.uniforms),this.blendMaterial=new Nt({uniforms:this.copyUniforms,vertexShader:tl.vertexShader,fragmentShader:tl.fragmentShader,premultipliedAlpha:!0,blending:ks,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Te,this._oldClearAlpha=1,this._basic=new Pn,this._fsQuad=new Qs(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ye(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Nt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ye(.5,.5)},direction:{value:new ye(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {

					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;

					for ( int i = 1; i < KERNEL_RADIUS; i ++ ) {

						float x = float( i );
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * w;

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new Nt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};eo.BlurDirectionX=new ye(1,0);eo.BlurDirectionY=new ye(0,1);var Gc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var il=class extends Yi{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Gc.uniforms),this.material=new Oa({name:Gc.name,uniforms:this.uniforms,vertexShader:Gc.vertexShader,fragmentShader:Gc.fragmentShader}),this._fsQuad=new Qs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Pt.getTransfer(this._outputColorSpace)===kt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var to=class extends sn{constructor(){super(),this.name="RoomEnvironment";let e=new Gt;e.deleteAttribute("uv");let t=new bt({side:In}),n=new bt,i=new Ri(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new $e(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Mr(e,n,6),a=new _n;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new $e(e,rl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new $e(e,rl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new $e(e,rl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new $e(e,rl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new $e(e,rl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new $e(e,rl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function rl(r){return new ds({color:0,emissive:16777215,emissiveIntensity:r})}var Xo=Math.PI*2,e2=new Us([[0,.085],[.2,.085],[.33,.07],[.37,0],[.45,0],[.5,.06],[.62,.17],[.8,.33],[.93,.53],[1,.72],[1.03,.86]].map(([r,e])=>new ye(r,e))),t2=new Us([[0,.17],[.25,.175],[.45,.205],[.62,.28],[.78,.4],[.89,.56],[.95,.72],[.975,.86]].map(([r,e])=>new ye(r,e))),n2=Array.from({length:257},(r,e)=>e2.getPointAt(e/256)),Bx=Array.from({length:257},(r,e)=>t2.getPointAt(e/256));function kx(r,e){let t=Math.max(0,Math.min(1,e))*256,n=Math.min(255,Math.floor(t)),i=t-n;return{r:r[n].x+(r[n+1].x-r[n].x)*i,y:r[n].y+(r[n+1].y-r[n].y)*i}}function ys(r,e,t,n=new I){let{r:i,y:s}=kx(t?Bx:n2,e);return n.set(Math.cos(r)*i,s,Math.sin(r)*i)}function Hx(r){return kx(Bx,r)}var Gm=r=>.38+.045*Math.sin(3*r+1.1)+.022*Math.sin(7*r+2.3)+.007*Math.sin(19*r),Wm=r=>.68+.06*Math.sin(2*r+.4)+.03*Math.sin(5*r+4.1)+.008*Math.sin(17*r+1),Xm=11,i2=()=>((Xm=Xm*16807%2147483647)-1)/2147483646;function sl(r,e){return Array.from({length:r},(t,n)=>e+(n+.5+(i2()-.5)*.55)*(Xo/r))}var Zr=[{lower:()=>0,upper:Gm,low:0,high:.38,cracks:sl(2,.6),label:"FOOT"},{lower:Gm,upper:Wm,low:.38,high:.68,cracks:sl(5,.2),label:"BODY"},{lower:Wm,upper:()=>1,low:.68,high:1,cracks:sl(6,.9),label:"RIM"}];function Ox(r,e,t){let n=Zr[r],i=n.cracks.length,s=n.cracks[e%i]+Math.floor(e/i)*Xo,o=r*3.1+e%i*1.7;return s+.11*Math.sin(t*3.2+o)+.035*Math.sin(t*11+o*2)+.012*Math.sin(t*29+o)}function Wc(r,e,t,n){let i=Zr[r],s=Ox(r,e,n),o=Ox(r,e+1,n),a=s+(o-s)*t,l=i.lower(a),c=i.upper(a);return{theta:a,t:r===0?c*n:l+(c-l)*n}}function r2(r,e){let t=r===0?30:16,n=r===0?12:10,i=[],s=[],o=[],a=new xt,l=new I,c=new I,h=new I,u=new I,f=P=>{let N=i.length/3;for(let B=0;B<=n;B++)for(let H=0;H<=t;H++){let{theta:Z,t:W}=Wc(r,e,H/t,B/n);ys(Z,W,P,l),i.push(l.x,l.y,l.z),s.push((Z/Xo%1+1)%1,W)}return N},d=f(!1);for(let P=0;P<n;P++)for(let N=0;N<t;N++){let B=d+P*(t+1)+N;o.push(B,B+t+1,B+1,B+1,B+t+1,B+t+2)}a.addGroup(0,o.length,0);let g=o.length,p=f(!0);for(let P=0;P<n;P++)for(let N=0;N<t;N++){let B=p+P*(t+1)+N;o.push(B,B+1,B+t+1,B+1,B+t+2,B+t+1)}a.addGroup(g,o.length-g,1);let _=o.length,m=new I,y=Wc(r,e,.5,.5);ys(y.theta,y.t,!1,m).add(ys(y.theta,y.t,!0,l)).multiplyScalar(.5);let x=P=>{let N=i.length/3;for(let[B,H]of P){let{theta:Z,t:W}=Wc(r,e,B,H);ys(Z,W,!1,l),i.push(l.x,l.y,l.z),s.push(B,0),ys(Z,W,!0,l),i.push(l.x,l.y,l.z),s.push(B,1)}for(let B=0;B<P.length-1;B++){let H=N+B*2;for(let Z of[[H,H+2,H+1],[H+1,H+2,H+3]]){c.fromArray(i,Z[0]*3),h.fromArray(i,Z[1]*3),u.fromArray(i,Z[2]*3);let W=h.clone().sub(c).cross(u.clone().sub(c)),X=c.clone().add(h).add(u).multiplyScalar(1/3).sub(m);o.push(...W.dot(X)>=0?Z:[Z[0],Z[2],Z[1]])}}},v=(P,N)=>Array.from({length:P+1},(B,H)=>N(H/P));x(v(t,P=>[P,1])),(r!==0||Zr[0].cracks.length>1)&&(x(v(n,P=>[0,P])),x(v(n,P=>[1,P]))),r!==0&&x(v(t,P=>[P,0])),a.addGroup(_,o.length-_,2),a.setIndex(o),a.setAttribute("position",new lt(i,3)),a.setAttribute("uv",new lt(s,2)),a.computeVertexNormals();let M=0,S=new I,w=new I;for(let P=0;P<g;P+=3){c.fromArray(i,o[P]*3),h.fromArray(i,o[P+1]*3),u.fromArray(i,o[P+2]*3);let N=h.clone().sub(c).cross(u.clone().sub(c)),B=N.length()/2;M+=B,S.addScaledVector(N.normalize(),B),w.addScaledVector(c.add(h).add(u).multiplyScalar(1/3),B)}w.multiplyScalar(1/M).lerp(m,.5),S.normalize(),a.translate(-w.x,-w.y,-w.z);let C=new hn().setFromUnitVectors(S,new I(0,1,0)),b=1/0,E=a.getAttribute("position");for(let P=0;P<E.count;P++)b=Math.min(b,l.fromBufferAttribute(E,P).applyQuaternion(C).y);return{geometry:a,home:w,normal:S,restLift:-b,area:M,band:r,label:Zr[r].label}}function Vm(r,e,t,n=!1){let i=new I,s=new I,o=Array.from({length:e+(n?0:1)},(l,c)=>{let{theta:h,t:u}=r(c/e);ys(h,u,!1,i),ys(h,u,!0,s);let f=i.clone().sub(s).normalize();return t?i.clone().addScaledVector(f,.004):s.clone().addScaledVector(f,-.004)}),a=new En(o,n,"centripetal");return{curve:a,length:a.getLength(),outer:t}}function zx(){Xm=11,Zr[0].cracks=sl(2,.6),Zr[1].cracks=sl(5,.2),Zr[2].cracks=sl(6,.9);let r=[];Zr.forEach((n,i)=>n.cracks.forEach((s,o)=>r.push(r2(i,o))));let e=[];for(let n of[!0,!1])e.push(Vm(i=>({theta:i*Xo,t:Gm(i*Xo)}),160,n,!0)),e.push(Vm(i=>({theta:i*Xo,t:Wm(i*Xo)}),160,n,!0)),Zr.forEach((i,s)=>i.cracks.forEach((o,a)=>e.push(Vm(l=>Wc(s,a,0,s===0?.02+l*.98:l),28,n))));let t=Zr[2].cracks.map((n,i)=>{let{theta:s}=Wc(2,i,0,1),o=ys(s,1,!1),a=ys(s,1,!0);return[o,o.clone().lerp(a,.5).add(new I(0,.004,0)),a]});for(let n of t){let i=new En(n);e.push({curve:i,length:i.getLength(),outer:!0})}return{shards:r,seams:e}}var qd=[["THE RITUAL","Forty-one winters of tea.","Every morning began with this bowl. Warm in two hands, glazed the colour of first snow, never once chipped.","made by hand, 1984"],["THE FALL","It took less than a second.","A sleeve catches the shelf. The bowl tips, turns once in the air, and a lifetime of mornings becomes thirteen pieces.","0.41 seconds"],["THE GATHERING","Keep every piece.","Nothing is swept away. Each fragment is lifted, numbered and weighed. Even the smallest one belongs to the whole.","13 of 13 found"],["THE MENDING","Repair is a kind of patience.","Joined with sap from the urushi tree, the pieces cure for weeks in a damp, dark box. You cannot hurry lacquer.","day 47, still waiting"],["THE GOLD","Don\u2019t hide the break.","Powdered gold is brushed into every seam. The cracks become the most beautiful lines on the bowl.","every crack, illuminated"],["THE RETURN","More beautiful for having been broken.","Whole again, but not the same. The bowl now carries its history where everyone can see it.","nothing hidden"],["THE MORNING","And tomorrow, tea.","The kettle sings. The bowl is warm in two hands again, and every morning now begins with gold.","the ritual continues"]],Yd=[0,.12,.26,.4,.58,.74,.88],qo=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),on=r=>(r=qo(r),r*r*(3-2*r)),Xn=(r,e,t)=>qo((r-e)/(t-e));function Vx(r){let e=qo(r),t=0;return Yd.forEach((n,i)=>{e>=n&&(t=i)}),{p:e,chapter:t,wobble:on(Xn(e,.12,.165)),drop:Xn(e,.165,.195),shatter:Xn(e,.195,.262),gather:on(Xn(e,.268,.355)),labels:on(Xn(e,.31,.345))*(1-on(Xn(e,.385,.405))),mend:Xn(e,.405,.555),urushi:on(Xn(e,.548,.6)),dust:Xn(e,.6,.705),gold:on(Xn(e,.625,.725)),sweep:on(Xn(e,.7,.86)),turn:on(Xn(e,.74,.88)),settle:on(Xn(e,.86,.92)),tea:on(Xn(e,.905,.975)),dark:on(Xn(e,.15,.2))*(1-on(Xn(e,.86,.94))),deep:on(Xn(e,.58,.64))*(1-on(Xn(e,.8,.88)))}}var $i=(r,e,t)=>new I(r,e,t),qc=1.6,Xc=$i(0,.43,0),qm=$i(0,qc+Xc.y,0),s2=$i(0,qc+.75,0),$d=$i(1.3,qm.y+.02,.82),no=$i(2.35,.95,2.45);function Yc(r,e,t,n=!0){let i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"));let s=new Er(i);return n&&(s.colorSpace=Zt),s.wrapS=wa,s.anisotropy=4,s}var Jr=7,ht=()=>((Jr=Jr*16807%2147483647)-1)/2147483646;function Gx(r){return Jr=r?91:7,Yc(1024,512,e=>{let t=e.createLinearGradient(0,512,0,0);r?(t.addColorStop(0,"#c9c2ad"),t.addColorStop(.3,"#e3dccb"),t.addColorStop(.85,"#ece6d8"),t.addColorStop(1,"#d8a679")):(t.addColorStop(0,"#9c7656"),t.addColorStop(.2,"#a98262"),t.addColorStop(.235,"#e6dccb"),t.addColorStop(.75,"#efe8db"),t.addColorStop(.93,"#e4c7a6"),t.addColorStop(1,"#c98b5c")),e.fillStyle=t,e.fillRect(0,0,1024,512);for(let n=0;n<70;n++){let i=ht()*1024,s=40+ht()*330,o=10+ht()*40,a=e.createRadialGradient(i,s,0,i,s,o);a.addColorStop(0,`rgba(${r?"226,214,192":"236,220,196"},${.12+ht()*.16})`),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(i-o,s-o,o*2,o*2)}for(let n=0;n<2600;n++){let i=ht()*1024,s=ht()*(r?512:395);e.fillStyle=ht()>.55?`rgba(92,55,32,${.25+ht()*.5})`:`rgba(255,252,244,${.3+ht()*.5})`,e.beginPath(),e.arc(i,s,ht()*1.6+.3,0,7),e.fill()}if(r){e.strokeStyle="rgba(150,104,62,.28)",e.lineWidth=5,e.beginPath(),e.moveTo(0,512-.6*512),e.lineTo(1024,512-.6*512),e.stroke();let n=e.createLinearGradient(0,512,0,300);n.addColorStop(0,"rgba(146,150,120,.45)"),n.addColorStop(1,"rgba(146,150,120,0)"),e.fillStyle=n,e.fillRect(0,300,1024,212)}else{for(let n=0;n<46;n++){let i=ht()*1024,s=20+ht()*70,o=4+ht()*9,a=e.createLinearGradient(0,0,0,s);a.addColorStop(0,"rgba(196,128,82,.75)"),a.addColorStop(1,"rgba(220,170,128,0)"),e.fillStyle=a,e.beginPath(),e.ellipse(i,s*.45,o,s*.55,0,0,7),e.fill()}for(let n=0;n<1600;n++)e.fillStyle=`rgba(${ht()>.5?"60,36,20":"214,178,140"},${.2+ht()*.3})`,e.fillRect(ht()*1024,400+ht()*112,1.4,1.4)}})}function Wx(r){return Jr=3,Yc(256,128,e=>{e.fillStyle="rgb(70,70,70)",e.fillRect(0,0,256,128),r||(e.fillStyle="rgb(235,235,235)",e.fillRect(0,128-.22*128,256,.22*128));for(let t=0;t<400;t++){let n=Math.round(110+ht()*80);e.fillStyle=`rgb(${n},${n},${n})`,e.fillRect(ht()*256,ht()*128,2,2)}},!1)}function o2(){return Jr=19,Yc(256,64,r=>{r.fillStyle="#c79c76",r.fillRect(0,0,256,64);for(let e=0;e<900;e++)r.fillStyle=`rgba(${ht()>.5?"120,74,44":"232,204,170"},${.3+ht()*.4})`,r.fillRect(ht()*256,ht()*64,1.5,1.5);r.fillStyle="#efe6d6",r.fillRect(0,0,256,5),r.fillRect(0,59,256,5)})}function a2(){return Jr=37,Yc(256,256,r=>{let e=r.createRadialGradient(128,128,10,128,128,128);e.addColorStop(0,"#86a346"),e.addColorStop(.75,"#6c8a33"),e.addColorStop(1,"#4f6726"),r.fillStyle=e,r.fillRect(0,0,256,256);for(let t=0;t<900;t++){let n=ht()*6.283,i=Math.sqrt(ht())*110;r.fillStyle=`rgba(${ht()>.4?"214,226,160":"120,146,62"},${.18+ht()*.35})`,r.beginPath(),r.arc(128+Math.cos(n)*i,128+Math.sin(n)*i,.6+ht()*2.2,0,7),r.fill()}})}function Zd(r){return Yc(64,64,e=>{let t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,r),t.addColorStop(.35,r.replace(/[\d.]+\)$/,".45)")),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64)})}var io=[[0,[.3,5.3,7.2],[-1.3,2,0]],[.1,[1.6,4.6,6.5],[-.95,1.95,.2]],[.165,[3.6,3.1,7.4],[.2,1.75,.7]],[.2,[5.4,1.8,8.2],[1.3,1.05,2]],[.262,[6.6,3.4,9.8],[1,1.2,2]],[.33,[-.35,10,6],[-.45,0,3.15]],[.4,[-.4,9.7,5.8],[-.5,0,3.1]],[.48,[-2.6,4.2,7.8],[-.6,1.9,.8]],[.56,[.4,3.5,6.4],[-.7,2.3,0]],[.66,[-1.6,3.6,5.4],[-.75,2.3,0]],[.76,[2.3,4.6,7.6],[0,3.45,0]],[.84,[0,8.4,4.9],[0,3.3,.5]],[.92,[-.2,5.2,6.6],[-1,2,0]],[1,[.3,5.3,7.2],[-1.3,2,0]]];function Xx(r,e){let t=document.querySelector(".gs-world"),n=document.querySelector(".gs-stage");if(!t||!n)return;let i;try{i=new li({antialias:!0,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".gs-journey")?.style.setProperty("height","100svh");return}t.append(i.domElement),t.classList.add("has-webgl"),i.setPixelRatio(Math.min(devicePixelRatio,e?1.5:1.75)),i.outputColorSpace=Zt,i.toneMapping=Vi,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Eh;let s=new sn,o=new Te;s.background=o;let a=new Wr(i),l=new to,c=a.fromScene(l,.035);s.environment=c.texture;let h=new Ht(30,1,.1,80),u=new Tr(16774370,9075302,1.1);s.add(u);let f=new fn(16769725,2.6);f.position.set(4.5,8,5),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.bias=-4e-4,f.shadow.normalBias=.02,f.shadow.radius=6,Object.assign(f.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:22}),s.add(f,f.target);let d=new fn(14672882,1.2);d.position.set(-5,4,-6),s.add(d);let g=new Ri(16766874,0,6,1.8);s.add(g);let p=new $e(new On(60,60),new cc({opacity:.2}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,s.add(p);let _=Zd("rgba(255,214,150,1)"),m=new $e(new On(9,9),new Pn({map:_,transparent:!0,opacity:0,depthWrite:!1,blending:ks}));m.rotation.x=-Math.PI/2,m.position.set(.6,.003,1.2),s.add(m);let y=new bt({color:3091239,roughness:.78,envMapIntensity:.3}),x=new Je,v=new $e(new Mn(1.25,1.32,qc-.06,96),y);v.position.y=(qc-.06)/2;let M=new $e(new Mn(1.34,1.34,.06,96),y);M.position.y=qc-.03;for(let J of[v,M])J.castShadow=!0,J.receiveShadow=!0,x.add(J);s.add(x);let{shards:S,seams:w}=zx(),C=new sr({map:Gx(!1),roughnessMap:Wx(!1),roughness:1,clearcoat:.55,clearcoatRoughness:.28,sheen:.2,sheenColor:new Te(16773084)}),b=new sr({map:Gx(!0),roughnessMap:Wx(!0),roughness:1,clearcoat:.6,clearcoatRoughness:.2}),E=new bt({map:o2(),roughness:.95}),P=S.reduce((J,q)=>J+q.area,0),N=S.length,B=S.map((J,q)=>q).sort((J,q)=>S[J].band-S[q].band||J-q),H=$i(0,1,0);Jr=29;let Z=S.map((J,q)=>{let ve=new $e(J.geometry,[C,b,E]);ve.castShadow=!0,ve.receiveShadow=!0,s.add(ve);let ze=J.home.clone().sub(Xc),pt=J.normal.clone().setY(0).normalize().add($i(ht()-.5,0,ht()-.5).multiplyScalar(.9)).normalize().multiplyScalar(.9+ht()*1.6).add($i(0,.15+ht()*1.3,0)),Lt=new hn().setFromAxisAngle($i(ht()-.5,ht()-.5,ht()-.5).normalize(),.8+ht()*2.2),tn=e?3:5,Yt=B.indexOf(q),Ut=Yt%tn,rt=Math.floor(Yt/tn),Ot=e?$i((Ut-1)*.84-.45+rt%2*.12,J.restLift+.004,1.95+rt*.78):$i((Ut-2)*.98+.55+rt%2*.2,J.restLift+.004,2+rt*.86),Me=new hn().setFromAxisAngle(H,(ht()-.5)*.7).multiply(new hn().setFromUnitVectors(J.normal,H)),ot=J.area/P*312;return{mesh:ve,local:ze,burst:pt,spin:Lt,gridPos:Ot,gridQuat:Me,slot:Yt,grams:ot,bob:ht()*6.28}}),W=new sr({color:2822924,metalness:.1,roughness:.5,clearcoat:.6,emissive:0}),X=new Je;s.add(X);let O=w.map(J=>{let q=Math.max(6,Math.round(J.length*70)),ve=new Sr(J.curve,q,J.outer?.0105:.009,6,!1),ze=new $e(ve,W);return ze.position.copy(Xc).negate(),ze.castShadow=!1,X.add(ze),{mesh:ze,total:ve.index.count,step:36}}),V=w.filter(J=>J.outer).reduce((J,q)=>J+q.length,0)*6,A=e?900:1600,K=new Float32Array(A*3),ce=new Float32Array(A*3),pe=new Float32Array(A),Ee=w.filter(J=>J.outer),Be=new I;Jr=53;for(let J=0;J<A;J++){let q=ht()*Ee.reduce((pt,Lt)=>pt+Lt.length,0),ve=Ee[0];for(let pt of Ee){if(q<pt.length){ve=pt;break}q-=pt.length}ve.curve.getPointAt(ht(),Be).sub(Xc),Be.toArray(K,J*3);let ze=ht()*Math.PI*2,Ye=.8+ht()*1.5;ce.set([Math.cos(ze)*Ye,.5+ht()*1.9,Math.sin(ze)*Ye],J*3),pe[J]=ht()}let te=new xt,re=new Float32Array(A*3);te.setAttribute("position",new Vt(re,3));let we=new oi({size:.05,map:Zd("rgba(255,214,120,1)"),color:16765834,transparent:!0,opacity:0,depthWrite:!1,blending:ks,sizeAttenuation:!0}),Oe=new Jn(te,we);Oe.frustumCulled=!1,s.add(Oe);let Pe=140,qe=new Float32Array(Pe*3);Jr=61;for(let J=0;J<Pe;J++)qe.set([(ht()-.5)*3.4,ht()*1.6,(ht()-.5)*3.4],J*3);let at=new xt,Fe=new Float32Array(Pe*3);at.setAttribute("position",new Vt(Fe,3));let Xe=new oi({size:.028,color:15656146,transparent:!0,opacity:0,depthWrite:!1}),Ze=new Jn(at,Xe);Ze.frustumCulled=!1,s.add(Ze);let He=260,Q=new xt,k=new Float32Array(He*3);Jr=71;for(let J=0;J<He;J++)k.set([(ht()-.5)*9,ht()*5,(ht()-.5)*7],J*3);let gt=new Float32Array(k);Q.setAttribute("position",new Vt(gt,3));let dt=new oi({size:.022,map:Zd("rgba(255,244,222,1)"),transparent:!0,opacity:.5,depthWrite:!1}),Qe=new Jn(Q,dt);Qe.frustumCulled=!1,s.add(Qe);let ke=new sr({map:a2(),roughness:.55,clearcoat:.4,clearcoatRoughness:.3}),D=new $e(new bo(1,72),ke);D.rotation.x=-Math.PI/2;let T=new Je;T.add(D),s.add(T);let L=Zd("rgba(255,255,255,1)"),U=Array.from({length:7},(J,q)=>{let ve=new Ns(new Fs({map:L,transparent:!0,opacity:0,depthWrite:!1,color:16777215}));return s.add(ve),{sprite:ve,offset:q/7}}),z=new nl(i);z.addPass(new Xd(s,h));let G=new eo(new ye(512,512),0,.5,.9);z.addPass(G),z.addPass(new il);let xe=new En(io.map(J=>$i(...J[1])),!1,"centripetal"),oe=new En(io.map(J=>$i(...J[2])),!1,"centripetal"),Ie=new I,Le=new I;function de(J){let q=0;for(;q<io.length-2&&J>io[q+1][0];)q++;let ve=qo((J-io[q][0])/(io[q+1][0]-io[q][0])),ze=(q+ve)/(io.length-1);xe.getPoint(ze,Ie),oe.getPoint(ze,Le)}let he=new I,Ue=new hn,ne=new Wn,j=new hn().setFromEuler(new Wn(.35,.9,-1.45));function fe(J,q){if(J.drop<=0){let ve=J.wobble;he.lerpVectors(qm,$d,ve*ve);let ze=Math.sin(ve*22)*.09*ve*(1-ve);ne.set(ze*.6,J.p*1.6+ve*.5,ze-ve*ve*.55),Ue.setFromEuler(ne)}else if(J.drop<1){let ve=J.drop;he.lerpVectors($d,no,1-(1-ve)*(1-ve)),he.y=$d.y+.18*ve-($d.y+.18-no.y)*ve*ve,Ue.setFromEuler(ne.set(0,.165*1.6+.5,-.55)).slerp(j,ve)}else he.copy(no),Ue.copy(j);if(J.mend>0){he.copy(s2).lerp(qm,J.settle),he.y+=Math.sin(q*.9)*.02*(1-J.settle);let ve=-.4+J.mend*.6+J.turn*Math.PI*1.3+J.settle*.3,ze=Math.sin(J.turn*Math.PI)*.32;Ue.setFromEuler(ne.set(ze,ve,0))}}let F=new I,be=new hn,me=new I,Re=new I,ge=new hn,ae=new hn,Ae=(J,q)=>q.copy(J.local).applyQuaternion(j).add(no).add(J.burst),le=(J,q)=>q.copy(J.spin).multiply(j),Y=J=>n.querySelector(J),_e=Array.from(n.querySelectorAll(".gs-label"));_e.forEach((J,q)=>{let ve=Z.find(Ye=>Ye.slot===q),ze=S[Z.indexOf(ve)];J.querySelector("b").textContent=`${ze.label} \xB7 ${ve.grams.toFixed(1)} g`});let Ne=Y(".gs-day b"),st=Array.from(n.querySelectorAll(".gs-steps li")),Ce=Y(".gs-meter b"),nt=Y(".gs-meter i"),We=Y(".gs-meter small");We&&(We.textContent=`OF ${V.toFixed(1)} CM`);let ft=Y(".gs-hud-chapter"),Kt=Y(".gs-hud-count"),_t=Array.from(n.querySelectorAll(".gs-dots i")),Se=new Te("#ebe3d5"),tt=new Te("#16130f"),et=new Te("#0a0908"),it=new Te("#efe5d3"),ct=new Te("#1f1b16"),ln=new Te("#efe6d6"),Rt=new Te(2822924),Vn=new Te(14725724),mi=new Te(10118418),zt={x:0,y:0,tx:0,ty:0},bn=-1,Cn={p:r?.975:0};function tr(J=0){let q=Vx(Cn.p),ve=q.p;if(fe(q,J),Z.forEach(Me=>{let{mesh:ot}=Me;if(F.copy(Me.local).applyQuaternion(Ue).add(he),be.copy(Ue),q.drop<1||q.mend>=1){ot.position.copy(F),ot.quaternion.copy(be);return}if(q.gather<=0){let Dt=1-Math.pow(1-q.shatter,3.2);me.copy(Me.local).applyQuaternion(j).add(no),Ae(Me,Re),ot.position.lerpVectors(me,Re,Dt),ot.position.y+=Math.sin(Dt*Math.PI)*.25+Math.sin(J*.8+Me.bob)*.025*Dt,ge.copy(j),le(Me,ae),ot.quaternion.slerpQuaternions(ge,ae,Dt);return}if(q.mend<=0){let Dt=on(q.gather*1.5-Me.slot/N*.5);Ae(Me,me),me.y+=Math.sin(J*.8+Me.bob)*.025*(1-Dt),ot.position.lerpVectors(me,Me.gridPos,Dt),ot.position.y+=Math.sin(Dt*Math.PI)*.5,le(Me,ge),ot.quaternion.slerpQuaternions(ge,Me.gridQuat,Dt);return}let nn=on((q.mend-Me.slot/N*.72)/.28);ot.position.lerpVectors(Me.gridPos,F,nn),ot.position.y+=Math.sin(nn*Math.PI)*.7,ot.quaternion.slerpQuaternions(Me.gridQuat,be,nn)}),X.position.copy(he),X.quaternion.copy(Ue),X.visible=q.urushi>0&&q.mend>=1,O.forEach((Me,ot)=>{let nn=qo(q.urushi*1.6-ot/O.length*.6);Me.mesh.geometry.setDrawRange(0,Math.floor(Me.total/Me.step*nn)*Me.step)}),W.color.copy(Rt).lerp(Vn,q.gold),W.metalness=.1+q.gold*.9,W.roughness=.5-q.gold*.3,W.emissive.copy(mi).multiplyScalar(q.gold*(.45+.9*Math.sin(q.sweep*Math.PI))),Oe.visible=q.dust>0&&q.dust<1,Oe.visible){for(let Me=0;Me<A;Me++){let ot=on(q.dust*1.55-pe[Me]*.55),nn=(1-ot)*2.6,Dt=ce[Me*3],ws=ce[Me*3+2];me.set(Dt*Math.cos(nn)-ws*Math.sin(nn),ce[Me*3+1]+Math.sin(J+Me)*.05*(1-ot),Dt*Math.sin(nn)+ws*Math.cos(nn)),Re.fromArray(K,Me*3).applyQuaternion(Ue).add(he),me.add(he).lerp(Re,ot),me.toArray(re,Me*3)}te.attributes.position.needsUpdate=!0,we.opacity=on(q.dust*5)*(1-on((q.dust-.8)/.2))}if(Ze.visible=q.shatter>0&&q.gather<1,Ze.visible){let Me=1-Math.pow(1-q.shatter,3);for(let ot=0;ot<Pe;ot++)Fe[ot*3]=no.x+qe[ot*3]*Me,Fe[ot*3+1]=Math.max(.02,no.y-.6+qe[ot*3+1]*Me-Me*Me*.6),Fe[ot*3+2]=no.z+qe[ot*3+2]*Me;at.attributes.position.needsUpdate=!0,Xe.opacity=.9*(1-q.gather)}for(let Me=0;Me<He;Me++)gt[Me*3]=k[Me*3]+Math.sin(J*.15+Me)*.3,gt[Me*3+1]=(k[Me*3+1]+J*.04+Me*.01)%5,gt[Me*3+2]=k[Me*3+2]+Math.cos(J*.12+Me*1.3)*.3;Q.attributes.position.needsUpdate=!0,dt.opacity=.55*(1-q.dark)+.25*q.dark;let ze=Math.max(1-on(q.wobble*4),q.tea);if(T.visible=ze>.01,T.visible){let Me=.2+ze*.5,{r:ot,y:nn}=Hx(Me);T.position.copy(he),T.quaternion.copy(Ue),D.position.set(0,nn-Xc.y-.002,0),D.scale.setScalar(ot*.995)}let Ye=Math.max(1-on(q.wobble*3),q.tea)*(1-q.dark);U.forEach(({sprite:Me,offset:ot},nn)=>{let Dt=(J*.12+ot)%1;Me.visible=Ye>.01,Me.position.set(he.x+Math.sin(J*.7+nn*2)*.18*Dt-.05,he.y+.35+Dt*1.5,he.z+Math.cos(J*.5+nn)*.12),Me.scale.setScalar(.35+Dt*.9),Me.material.opacity=Ye*Math.sin(Dt*Math.PI)*.22}),o.copy(Se).lerp(tt,q.dark).lerp(et,q.deep),q.settle>0&&o.lerp(it,1-q.dark),u.intensity=1.15-q.dark*.75,f.intensity=2.6-q.dark*1.5-q.deep*.6-q.labels*.5,d.intensity=1+q.dark*1.4,s.environmentIntensity=1-q.dark*.45-q.deep*.2,p.material.opacity=.2+q.dark*.35,m.material.opacity=q.dark*.22*(1-q.deep*.6),m.position.x=q.mend>0?0:.8,m.position.z=q.mend>0?.3:1.6;let pt=-1.2+q.sweep*Math.PI*1.4;g.position.set(he.x+Math.cos(pt)*2.2,he.y+1.4,he.z+Math.sin(pt)*2.2),g.intensity=(q.gold*2.2+Math.sin(q.sweep*Math.PI)*4.5)*(1-q.settle),G.strength=q.dark*(.03+q.gold*.55),G.enabled=G.strength>.02,de(ve),zt.x+=(zt.tx-zt.x)*.06,zt.y+=(zt.ty-zt.y)*.06;let Lt=t.clientWidth/Math.max(1,t.clientHeight);if(Lt<.9){let Me=on((ve-.27)/.06)*(1-on((ve-.405)/.06));Le.x=Me>0?Le.x:Le.x*.3,Le.y+=ve<.1?.8*(1-on(ve/.1)):ve>.9?-.55:0,Le.z+=Me*.55;let ot=1.15+(.9-Lt)*1.1;Ie.sub(Le).multiplyScalar(ot+(.98-ot)*Me).add(Le)}Ie.x+=zt.x*.35+Math.sin(J*.31)*.04,Ie.y+=-zt.y*.2+Math.sin(J*.43)*.03;let Yt=q.shatter>0&&q.shatter<.25?(.25-q.shatter)*.25:0;Ie.x+=Math.sin(J*61)*Yt,Ie.y+=Math.cos(J*53)*Yt,h.position.copy(Ie),h.lookAt(Le),z.render();let Ut=q.dark,rt=ct.clone().lerp(ln,Ut);if(n.style.setProperty("--gs-ink",`#${rt.getHexString()}`),n.style.setProperty("--gs-bg",`#${o.getHexString()}`),n.classList.toggle("is-dark",Ut>.5),q.labels>.001){let Me=t.clientWidth,ot=t.clientHeight;Z.forEach(nn=>{let Dt=_e[nn.slot];Dt&&(Be.copy(nn.mesh.position).project(h),Dt.style.transform=`translate(${(Be.x+1)/2*Me}px, ${(1-Be.y)/2*ot}px)`,Dt.style.opacity=String(qo(q.labels*1.6-nn.slot/N*.6)))})}else _e.forEach(Me=>Me.style.opacity="0");Ne&&(Ne.textContent=String(Math.round(1+on(q.mend*1.1)*46)).padStart(2,"0"));let Ot=q.gold>.05?3:q.urushi>.05?2:q.mend>.5?1:0;st.forEach((Me,ot)=>Me.classList.toggle("is-active",ot===Ot)),Ce&&(Ce.textContent=(V*q.gold).toFixed(1)),nt&&(nt.style.transform=`scaleX(${q.gold})`),q.chapter!==bn&&(bn=q.chapter,ft&&(ft.textContent=qd[q.chapter][0]),Kt&&(Kt.textContent=`${String(q.chapter+1).padStart(2,"0")} / 07`),_t.forEach((Me,ot)=>Me.classList.toggle("is-on",ot<=q.chapter))),t.dataset.scrollProgress=ve.toFixed(3),t.dataset.storyBeat=String(q.chapter+1)}function Fr(){let J=Math.max(1,t.clientWidth),q=Math.max(1,t.clientHeight);i.setSize(J,q,!1),z.setPixelRatio(i.getPixelRatio()),z.setSize(J,q),G.resolution.set(J/2,q/2),h.aspect=J/q,h.fov=J/q<.9?40:30,h.updateProjectionMatrix(),tr(performance.now()*.001)}Fr();let Et;r||(Et=ue.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".gs-journey",start:"top top",end:"bottom bottom",scrub:1.1}}),Et.to(Cn,{p:1,duration:1},0),Et.to(".gs-hero",{autoAlpha:0,y:-70,duration:.04,ease:"power1.in"},.02),Et.to(".gs-hero-aside",{autoAlpha:0,duration:.03},.03),qd.forEach((J,q)=>{let ve=n.querySelector(`.gs-chapter[data-index="${q}"]`);if(!ve)return;let ze=Yd[q]+(q===0?.068:.012),Ye=q===qd.length-1?1.2:Yd[q+1]-.012;Et.fromTo(ve,{autoAlpha:0},{autoAlpha:1,duration:.012},ze),Et.fromTo(ve.querySelectorAll(".gs-c"),{yPercent:115},{yPercent:0,stagger:6e-4,duration:.02,ease:"power3.out"},ze),Et.fromTo(ve.querySelectorAll(".gs-fade"),{autoAlpha:0,y:24},{autoAlpha:1,y:0,stagger:.004,duration:.018,ease:"power2.out"},ze+.008),Ye<1&&Et.to(ve,{autoAlpha:0,y:-28,duration:.012,ease:"power1.in"},Ye-.012)}),Et.fromTo(".gs-flash",{opacity:0},{opacity:.9,duration:.003},.192),Et.to(".gs-flash",{opacity:0,duration:.03,ease:"power2.out"},.196),Et.fromTo(".gs-impact",{autoAlpha:0,scale:1.12},{autoAlpha:1,scale:1,duration:.012,ease:"power3.out"},.197),Et.to(".gs-impact",{autoAlpha:0,scale:.96,duration:.02},.245),Et.fromTo(".gs-process",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015},.43),Et.to(".gs-process",{autoAlpha:0,duration:.012},.632),Et.fromTo(".gs-meter",{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:.012},.6),Et.to(".gs-meter",{autoAlpha:0,duration:.012},.735),Et.to(".gs-track i",{scaleX:1,duration:1},0),Et.to(".gs-scroll-hint",{autoAlpha:0,duration:.02},.02),ue.from(".gs-hero .gs-c",{yPercent:115,duration:1.3,stagger:.022,ease:"power4.out",delay:.25}),ue.from(".gs-hero .gs-fade, .gs-hero-aside",{autoAlpha:0,y:18,duration:1,stagger:.12,ease:"power2.out",delay:.75}),ue.from(".gs-nav",{autoAlpha:0,y:-12,duration:.8,delay:.4}),ue.utils.toArray(".gs-log article").forEach(J=>ue.from(J,{y:60,autoAlpha:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:J,start:"top 88%"}})),ue.utils.toArray(".gs-seam-line path").forEach((J,q)=>{let ve=J.getTotalLength();ue.fromTo(J,{strokeDasharray:ve,strokeDashoffset:ve},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".gs-ending",start:q?"top 35%":"top 75%",end:"bottom bottom",scrub:1}})}),ue.from(".gs-ending .gs-c",{yPercent:115,stagger:.02,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:".gs-ending",start:"top 70%"}}));let R=J=>{zt.tx=(J.clientX/innerWidth-.5)*2,zt.ty=(J.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",R,{passive:!0});let $=!0,ie=0,se=new IntersectionObserver(([J])=>{$=J.isIntersecting,$&&De()});se.observe(t);function ee(J){ie=0,!(document.hidden||!$)&&(tr(J*.001),De())}function De(){!ie&&!document.hidden&&$&&!r&&(ie=requestAnimationFrame(ee))}let Ve=()=>{document.hidden?(cancelAnimationFrame(ie),ie=0):De()};return document.addEventListener("visibilitychange",Ve),window.addEventListener("resize",Fr),De(),()=>{cancelAnimationFrame(ie),se.disconnect(),Et?.scrollTrigger?.kill(),Et?.kill(),window.removeEventListener("resize",Fr),window.removeEventListener("pointermove",R),document.removeEventListener("visibilitychange",Ve),s.traverse(J=>{let q=J;q.geometry&&q.geometry.dispose();let ve=Array.isArray(q.material)?q.material:q.material?[q.material]:[];for(let ze of ve){for(let Ye of Object.values(ze))Ye instanceof Un&&Ye.dispose();ze.dispose()}}),c.dispose(),a.dispose(),l.dispose?.(),z.dispose(),i.dispose(),i.domElement.remove()}}var Jt=.25,Ym=5,Zi=()=>((Ym=Ym*16807%2147483647)-1)/2147483646,ol=r=>Ym=r,l2=new Gt(1,1,1);function c2(r){return{uTime:{value:0},uAmp:{value:0},uTail:{value:0},uLen:{value:r},uScale:{value:Jt}}}function $m(r,e){let t=Math.max(0,Math.min(1,(e-r.uTail.value)/r.uLen.value));return Math.sin(r.uTime.value*1.5-t*4)*r.uAmp.value*Math.pow(1-t,2.2)}function u2(r,e){let t=r?new ds({color:16777215}):new Pn({color:16777215});return e&&(t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uAmp, uTail, uLen, uScale;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float ws = clamp((instanceMatrix[3].x - uTail) / uLen, 0.0, 1.0);
          transformed.y += sin(uTime * 1.5 - ws * 4.0) * uAmp * pow(1.0 - ws, 2.2) / uScale;`)}),t}function Cr(r,e=!0,t,n=Jt){let i=new Mr(l2,u2(e,t),Math.max(1,r.length)),s=new Ct,o=new Te;return r.forEach(([a,l,c,h],u)=>{s.makeScale(n,n,n).setPosition(a*n,l*n,c*n),i.setMatrixAt(u,s),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}function $c(r){ol(r.seed);let e=r.length,t=[],n=[],i=x=>x<.12?1+x*6:x<.62?1.7+Math.pow((x-.12)/.5,.9)*(e*.11):(1.7+e*.11)*(1-Math.pow((x-.62)/.38,2.2)*.62),s=[],o=(x,v,M)=>{let S=x/e,w=i(S),C=w*(v>0?.8:.95),b=w;return v*v/(C*C)+M*M/(b*b)<=1};for(let x=0;x<=e;x++){let v=x/e,M=Math.ceil(i(v))+1,S=-99;for(let w=-M;w<=M;w++)for(let C=-M;C<=M;C++){if(!o(x,w,C)||o(x,w+1,C)&&o(x,w-1,C)&&o(x,w,C+1)&&o(x,w,C-1)&&o(x+1,w,C)&&o(x-1,w,C))continue;S=Math.max(S,w);let b=i(v),E=w<-b*.2,P=E?r.belly:Zi()>.82?r.back2:r.back;E&&v>.55&&Math.abs(C)%2===0&&(P="#7f8fb5"),!E&&v>.68&&w>b*.35&&Zi()>.86&&(P="#e6dcc0"),v>.8&&Math.abs(w+b*.18)<.6&&(P="#262b5c"),t.push([x,w,C,P])}s.push(S)}let a=Math.round(e*.84),l=i(a/e),c=[];for(let x of[-1,1]){let v=Math.round(x*l*.93);c.push([a,0,v,"#ffffff"],[a+1,0,v,"#0b0d1f"])}for(let x=-Math.round(e*.16);x<=Math.round(e*.16);x++){let v=Math.round(5-Math.abs(Math.abs(x)-e*.09)*.6);for(let M=-v;M<=1;M++)t.push([M,0,x,Math.abs(x)>e*.13?r.back2:r.back])}let h=Math.round(e*.66),u=i(h/e);for(let x of[-1,1])for(let v=0;v<e*.34;v++){let M=x*(u+v),S=Math.round(3-v*.07);for(let w=-S;w<=S;w++)t.push([h-Math.round(v*.45)+w,Math.round(-u*.35-v*.22),Math.round(M),w===S?"#e6ecf5":r.back])}let f=Math.round(e*.32);for(let x=0;x<3;x++)t.push([f+x,s[f]+1,0,r.back]);let d=c2(e*Jt),g=new Je,p=Cr(t,!0,d),_=Cr(c,!1,d),m=Cr(n,!1,d);g.add(p,_,m);let y=e*Jt/2;for(let x of[p,_,m])x.position.x=-y;return d.uTail.value=0,{group:g,wave:d,top:x=>(s[Math.max(0,Math.min(e,Math.round(x)))]+1)*Jt,centre:y,eyeMesh:_,L:e}}function qx(r){ol(100+r);let e=["#ffe9c2","#f4b6a0","#9fd3c7","#e6ecf5","#ffcf8a"][r%5],t=["#c4506b","#3b3f7a","#ff8a3d","#1d8f9a","#7a2d55"][r%5],n=3+r%2,i=3+(r%3===0?1:0),s=[],o=[];for(let h=0;h<n;h++)for(let u=0;u<i;u++)for(let f=0;f<3;f++)s.push([h,u,f,e]);for(let h=0;h<2;h++)for(let u=-1+h;u<=n-h;u++)for(let f=-1+h;f<=3-h;f++)s.push([u,i+h,f,t]);s.push([n-1,i+2,1,"#5a5aa0"],[n-1,i+3,1,"#5a5aa0"]),o.push([1,1,3,"#ffd34d"]),n>3&&o.push([2,1,3,"#ffd34d"]),o.push([n,1,1,"#ffd34d"]);let a=new Je,l=Cr(s,!0,void 0,Jt*.9),c=Cr(o,!1,void 0,Jt*.9);for(let h of[l,c])h.position.set(-n/2*Jt*.9,0,-1.5*Jt*.9);return a.add(l,c),{group:a,windows:c.material,chimney:new I((n/2-1)*Jt*.9,(i+4)*Jt*.9,0)}}function Yx(r,e,t){ol(77);let n=[],i=[];for(let s=0;s<r;s++){let o=(Zi()-.5)*e,a=-Zi()*e*.55+e*.12,l=3+Zi()*5;i.push(new I(o*Jt,t,a*Jt));for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)for(let u=0;u<=l*.7;u++){let f=c*c/(l*l)+h*h/(l*l)+u*u/(l*l*.4);f>1||f<.6&&u>0&&u<l*.5||n.push([Math.round(o+c),Math.round(t/Jt+u),Math.round(a+h),u>l*.45?"#ffffff":u>l*.2?"#e6ecf5":"#b9c4dc"])}}return{mesh:Cr(n,!0),puffs:i}}var $x="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Zx=`
  uniform float uTime, uNight, uStorm, uAurora, uFlash, uDawn;
  uniform vec3 uSun;
  varying vec3 vDir;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    float y = vDir.y;
    vec3 dawnTop = vec3(0.55, 0.48, 0.78), dawnMid = vec3(0.96, 0.55, 0.58), dawnLow = vec3(1.0, 0.72, 0.48);
    vec3 nightTop = vec3(0.03, 0.04, 0.12), nightLow = vec3(0.10, 0.12, 0.30);
    vec3 stormTop = vec3(0.12, 0.14, 0.22), stormLow = vec3(0.32, 0.34, 0.42);
    float g = smoothstep(-0.15, 0.6, y);
    vec3 col = g < 0.45 ? mix(dawnLow, dawnMid, g / 0.45) : mix(dawnMid, dawnTop, (g - 0.45) / 0.55);
    col = mix(col, mix(stormLow, stormTop, g), uStorm);
    col = mix(col, mix(nightLow, nightTop, g), uNight);
    // Sun and its halo.
    float sd = max(dot(normalize(vDir), normalize(uSun)), 0.0);
    col += vec3(1.0, 0.8, 0.5) * (pow(sd, 400.0) * 2.0 + pow(sd, 18.0) * 0.35) * (1.0 - uNight) * (1.0 - uStorm);
    // Moon opposite, and stars.
    vec3 moonDir = normalize(vec3(-0.5, 0.35, -0.8));
    float md = max(dot(normalize(vDir), moonDir), 0.0);
    col += vec3(0.95, 0.92, 0.8) * (step(0.9993, md) + pow(md, 60.0) * 0.15) * uNight;
    vec2 sp = floor(vec2(atan(vDir.z, vDir.x) * 160.0, y * 160.0));
    float star = step(0.993, h(sp)) * smoothstep(0.0, 0.3, y) * (0.6 + 0.4 * sin(uTime * 2.0 + h(sp) * 40.0));
    col += star * uNight * (1.0 - uStorm);
    // Aurora: curtains that ripple across the northern sky.
    float a = atan(vDir.x, -vDir.z);
    // Curtains: a hem that ripples sideways, rays that climb from it and fade.
    float hem = 0.22 + 0.07 * sin(a * 2.3 + uTime * 0.35) + 0.03 * sin(a * 7.0 - uTime * 0.6);
    float above = y - hem;
    float curtain = step(0.0, above) * exp(-above * 9.0) + exp(-pow(above * 40.0, 2.0)) * 0.6;
    float rays = pow(0.5 + 0.5 * sin(a * 48.0 + sin(a * 6.0 + uTime * 0.5) * 4.0), 3.0);
    col += mix(vec3(0.24, 0.88, 0.77), vec3(0.55, 0.48, 0.85), smoothstep(0.0, 0.18, above)) * curtain * (0.35 + rays * 0.65) * uAurora * 0.75;
    col += vec3(0.8, 0.85, 1.0) * uFlash;
    gl_FragColor = vec4(pow(max(col, 0.0), vec3(2.2)), 1.0);
  }`;var Zm=[["I","THE TOWN ON THE WHALE","My town has forty-two people, twelve houses and one whale. None of us has ever touched the ground."],["II","OLD SILVERBACK","Grandma says the whale is two hundred and twelve years old. Lately she sleeps more than she swims."],["III","THE STORM","The storm came at noon. She did not climb above it the way she used to. She went straight through."],["IV","BELOW THE CLOUDS","Under the clouds there was a whole sea. None of us had ever seen that much water, or that much dark."],["V","THE SONG","That night she sang. It shook every lantern in town. And far away, something sang back."],["VI","THE YOUNG ONE","A young whale came out of the dark. One by one, our houses flew across to her back."],["VII","HOME","Silverback stayed. Trees grew where our houses stood. Now she is an island, and we visit every spring."]],al=[0,.13,.27,.42,.56,.71,.86],Yo=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Jd=r=>(r=Yo(r),r*r*(3-2*r)),ti=(r,e,t)=>Jd((r-e)/(t-e));function Jx(r){let e=Yo(r),t=0;al.forEach((i,s)=>e>=i&&(t=s));let n=ti(e,.27,.33)*(1-ti(e,.42,.47));return{p:e,chapter:t,close:ti(e,.12,.2)*(1-ti(e,.25,.3)),storm:n,dive:ti(e,.41,.53),night:ti(e,.38,.47)*(1-ti(e,.86,.94)),part:ti(e,.52,.6),song:ti(e,.58,.68),answer:ti(e,.62,.71),aurora:ti(e,.57,.63)*(1-ti(e,.84,.9)),young:ti(e,.7,.76),transfer:Yo((e-.74)/(.85-.74)),dawn:ti(e,.86,.93),settle:ti(e,.86,.95),grow:ti(e,.89,.97),depart:ti(e,.92,1)}}var h2=["#0b0d1f","#16193a","#262b5c","#3b3f7a","#5a5aa0","#8b7bc0","#c9b8e8","#ffffff","#e6ecf5","#b9c4dc","#7f8fb5","#4a5f8c","#2e3b5c","#12355e","#1f5f8f","#3d8fbf","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffe9c2","#ffcf8a","#ffd34d","#ff8a3d","#ff9f6b","#f47c7c","#c4506b","#7a2d55","#d99ab0","#9a6a52","#e6dcc0"].map(r=>new Te(r)),d2={uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ye(1,1)},uPal:{value:h2.map(r=>new I(r.r,r.g,r.b))},uNear:{value:.1},uFar:{value:600}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
    #include <packing>
    uniform sampler2D tColor, tDepth; uniform vec2 uRes; uniform vec3 uPal[32]; uniform float uNear, uFar;
    varying vec2 vUv;
    float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
    float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
    float depthAt(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar); }
    vec3 nearest(vec3 c){
      vec3 best = uPal[0]; float bd = 1e9;
      for (int i = 0; i < 32; i++) {
        vec3 d = (c - uPal[i]) * vec3(0.9, 1.2, 0.7);
        float e = dot(d, d);
        if (e < bd) { bd = e; best = uPal[i]; }
      }
      return best;
    }
    void main(){
      vec3 lin = texture2D(tColor, vUv).rgb;
      vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2));
      c += (bayer4(gl_FragCoord.xy) - 0.5) * 0.05;
      // Outline: a pixel in front of a much farther neighbour gets inked.
      vec2 px = 1.0 / uRes;
      float d0 = depthAt(vUv), far = 0.0;
      far = max(far, depthAt(vUv + vec2(px.x, 0.0)) - d0);
      far = max(far, depthAt(vUv - vec2(px.x, 0.0)) - d0);
      far = max(far, depthAt(vUv + vec2(0.0, px.y)) - d0);
      far = max(far, depthAt(vUv - vec2(0.0, px.y)) - d0);
      if (far > 0.6 + d0 * 0.06 && d0 < 140.0) c = mix(c * 0.3, vec3(0.05, 0.06, 0.16), 0.55);
      gl_FragColor = vec4(nearest(c), 1.0);
    }`},ro=[[0,[-5,4.5,31],[0,.5,0]],[.09,[1,5.5,24],[1,.6,0]],[.18,[13,2.6,11],[4.6,.4,0]],[.25,[5,7.5,15],[0,.5,0]],[.33,[-11,3,19],[0,-.5,0]],[.42,[-7,-1,21],[0,-4,0]],[.5,[-5,-12.5,23],[0,-16,0]],[.58,[8,-14.5,24],[0,-14,-6]],[.66,[-6,-14,30],[0,-13,-14]],[.74,[7,-10,21],[.5,-15.5,-4]],[.84,[-3,-7.5,23],[0,-16,-4]],[.92,[-15,-15,30],[3,-19,-10]],[1,[-16,-13,40],[10,-16,-18]]];function Kx(r,e){let t=document.querySelector(".cw-world"),n=document.querySelector(".cw-stage");if(!t||!n)return;let i;try{i=new li({antialias:!1,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".cw-journey")?.style.setProperty("height","100svh");return}let s=3;i.setPixelRatio(1),i.outputColorSpace=br,t.append(i.domElement),t.classList.add("has-webgl");let o=new sn,a=new Te;o.fog=new cs(a,40,170);let l=new Ht(34,1,.1,600),c=new Tr(16770768,3882874,1.3),h=new fn(16767152,2.2);h.position.set(30,22,18),o.add(c,h);let u={uTime:{value:0},uNight:{value:0},uStorm:{value:0},uAurora:{value:0},uFlash:{value:0},uDawn:{value:0},uSun:{value:new I(.75,.12,-.65)}},f=new $e(new dn(400,32,16),new Nt({uniforms:u,vertexShader:$x,fragmentShader:Zx,side:In,depthWrite:!1,fog:!1}));o.add(f);let d={uTime:{value:0},uNight:{value:0},uDawn:{value:0}},g=new $e(new On(600,600),new Nt({uniforms:d,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
        uniform float uTime, uNight, uDawn; varying vec3 vW;
        void main(){
          float swell = sin(vW.x * 0.35 + uTime * 0.8 + sin(vW.z * 0.2) * 2.0) * 0.5 + 0.5;
          vec3 deep = mix(vec3(0.07, 0.2, 0.37), vec3(0.03, 0.06, 0.16), uNight);
          vec3 c = mix(deep, deep * 1.6, swell * 0.4);
          vec2 v = vW.xz - cameraPosition.xz;
          vec2 md = normalize(vec2(-0.5, -0.8)), sd = normalize(vec2(0.75, -0.65));
          float glint = step(0.62, fract(vW.x * 0.9 + sin(vW.z * 1.7 + uTime * 1.2) * 0.6));
          float road = exp(-pow(v.x * md.y - v.y * md.x, 2.0) * 0.015) * step(0.0, dot(v, md)) * glint;
          c += vec3(0.8, 0.8, 0.7) * road * uNight * 0.55;
          float sunRoad = exp(-pow(v.x * sd.y - v.y * sd.x, 2.0) * 0.008) * step(0.0, dot(v, sd)) * glint;
          c = mix(c, vec3(1.0, 0.6, 0.4), uDawn * (0.25 + sunRoad * 0.6));
          float dist = length(vW.xz - cameraPosition.xz);
          c = mix(c, mix(vec3(0.1, 0.12, 0.3), vec3(1.0, 0.62, 0.42), uDawn), smoothstep(60.0, 220.0, dist));
          gl_FragColor = vec4(pow(max(c, 0.0), vec3(2.2)), 1.0);
        }`}));g.rotation.x=-Math.PI/2,g.position.y=-22,o.add(g);let p=Yx(e?70:110,360,-6),_=p.mesh.material,m=p.mesh.instanceMatrix.array.slice();o.add(p.mesh);let y={uTime:{value:0},uPart:{value:0},uTint:{value:new Te}},x=new $e(new On(600,600),new Nt({uniforms:y,side:Sn,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
        uniform float uTime, uPart; uniform vec3 uTint; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        void main(){
          vec2 p = vW.xz * 0.08 + vec2(uTime * 0.03, 0.0);
          float c = n(p) * 0.6 + n(p * 2.3) * 0.4;
          if (uPart > 0.0 && c < uPart * 1.2) discard;
          vec3 top = mix(vec3(0.72, 0.76, 0.88), vec3(1.0, 0.95, 0.92), c) * uTint;
          vec3 below = vec3(0.07, 0.08, 0.2) + c * 0.06;
          gl_FragColor = vec4(pow(gl_FrontFacing ? top : below, vec3(2.2)), 1.0);
        }`}));x.rotation.x=-Math.PI/2,x.position.y=-5.2,o.add(x);let v=$c({length:64,back:"#3b3f7a",back2:"#5a5aa0",belly:"#b9c4dc",seed:9});o.add(v.group);let M=$c({length:44,back:"#3d8fbf",back2:"#7f8fb5",belly:"#e6ecf5",seed:21});o.add(M.group);let S=$c({length:40,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:33}),w=$c({length:36,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:44});o.add(S.group,w.group);let C=12,b=Array.from({length:C},(le,Y)=>{let _e=qx(Y);o.add(_e.group),ol(300+Y);let Ne=Math.round(64*(.36+Y/C*.32)),st=(Y%3-1)*1.6,Ce=Math.round(44*(.34+Y/C*.34)),nt=(Y%3-1)*1.2;return{..._e,ox:Ne,oz:st,yx:Ce,yz:nt,rot:(Zi()-.5)*.6,flicker:Zi()*10}}),E=new Je,P=Cr(Array.from({length:4},(le,Y)=>Array.from({length:5},(_e,Ne)=>[Math.round(Math.cos(Y*Math.PI/2)*(Ne+1)),Math.round(Math.sin(Y*Math.PI/2)*(Ne+1)),0,Ne===4?"#c4506b":"#ffe9c2"])).flat(),!0,void 0,Jt*.8);E.add(P),b[5].group.add(E),E.position.set(0,7*Jt,1.2*Jt),ol(500);let N=Array.from({length:14},(le,Y)=>{let _e=[],Ne=2+Math.floor(Zi()*3);for(let Ce=0;Ce<Ne;Ce++)_e.push([0,Ce,0,"#9a6a52"]);for(let Ce=-2;Ce<=2;Ce++)for(let nt=0;nt<4;nt++)for(let We=-2;We<=2;We++)Ce*Ce+(nt-1.5)**2+We*We<5.5&&Zi()>.1&&_e.push([Ce,Ne+nt,We,nt>2?"#a8d46f":Zi()>.5?"#5ba86a":"#2f6b4f"]);let st=new Je;return st.add(Cr(_e,!0,void 0,Jt*.9)),o.add(st),{g:st,x:Math.round(64*(.3+Y/14*.45)),z:(Zi()-.5)*3,delay:Zi()*.5}}),B=Cr(Array.from({length:48},()=>[0,0,0,"#e6ecf5"]),!0,void 0,Jt*.8);o.add(B);let H=Cr(Array.from({length:48},(le,Y)=>[0,0,0,Y%3?"#ffd34d":"#ff8a3d"]),!1,void 0,Jt*.9);o.add(H);let Z=new xt,W=new Float32Array(900*6);Z.setAttribute("position",new Vt(W,3));let X=new $l(Z,new zr({color:"#b9c4dc",transparent:!0,opacity:.8}));X.frustumCulled=!1,o.add(X);let O=new xt,V=new Float32Array(90);O.setAttribute("position",new Vt(V,3));let A=new us(O,new zr({color:"#ffffff"}));A.frustumCulled=!1,o.add(A);let K=new xt().setFromPoints(Array.from({length:128},(le,Y)=>new I(Math.cos(Y/128*Math.PI*2),Math.sin(Y/128*Math.PI*2),0))),ce=Array.from({length:10},(le,Y)=>{let _e=new Zl(K,new zr({color:Y<5?"#3ce0c4":"#c9b8e8",transparent:!0,fog:!1}));return _e.frustumCulled=!1,o.add(_e),_e}),pe=new un(4,4,{type:Tn,minFilter:jt,magFilter:jt,depthTexture:new rr(4,4)}),Ee=new Nt(d2);Ee.uniforms.tColor.value=pe.texture,Ee.uniforms.tDepth.value=pe.depthTexture;let Be=new $e(new On(2,2),Ee),te=new sn;te.add(Be);let re=new Ci(-1,1,1,-1,0,1),we=new En(ro.map(le=>new I(...le[1])),!1,"centripetal"),Oe=new En(ro.map(le=>new I(...le[2])),!1,"centripetal"),Pe=new I,qe=new I;function at(le){let Y=0;for(;Y<ro.length-2&&le>ro[Y+1][0];)Y++;let _e=Yo((le-ro[Y][0])/(ro[Y+1][0]-ro[Y][0])),Ne=(Y+_e)/(ro.length-1);we.getPoint(Ne,Pe),Oe.getPoint(Ne,qe)}let Fe=new Ct,Xe=new hn,Ze=new I,He=new I,Q=new I,k=new I,gt=(le,Y)=>(Q.set(le*Jt-v.centre,v.top(le)+$m(v.wave,le*Jt),0),v.group.localToWorld(Q)),dt=le=>(k.set(le*Jt-M.centre,M.top(le)+$m(M.wave,le*Jt),0),M.group.localToWorld(k)),Qe=-10,ke=1,D={x:0,y:0,tx:0,ty:0},T={p:r?.97:0},L=-1,U=le=>n.querySelector(le),z=U(".cw-say"),G=U(".cw-chapter-no"),xe=U(".cw-card small"),oe=U(".cw-card b"),Ie=U(".cw-hud-alt"),Le=U(".cw-hud-lit"),de=U(".cw-hud-weather"),he=U(".cw-hud-age"),Ue=Array.from(n.querySelectorAll(".cw-progress i"));function ne(le){let Y=Jx(T.p),_e=Y.p;u.uTime.value=d.uTime.value=le;for(let Se of[v,M,S,w])Se.wave.uTime.value=le+(Se===M?1.3:Se===S?2.1:0);let Ne=Math.sin(le*.9)*.22*Y.storm;v.wave.uAmp.value=.55*(1-Y.settle)+Y.storm*.35,v.group.position.set(Math.sin(le*.15)*.6*(1-Y.settle),Math.sin(le*.6)*.25*(1-Y.settle)-Y.dive*17.5-Y.settle*3.2-Math.sin(Y.storm*Math.PI)*1.5,0),v.group.rotation.set(Ne,-.08+Y.dive*.15-Y.settle*.2,Math.sin(le*.3)*.03+(Y.dive>0&&Y.dive<1?-Math.sin(Y.dive*Math.PI)*.22:0)+Y.song*.08*(1-Y.settle)),v.group.updateMatrixWorld(),v.eyeMesh.visible=Math.sin(le*.9)<.94,M.group.visible=Y.young>.001,M.wave.uAmp.value=.5;let st=new I(1.5,-15.2,-7.5);M.group.position.set(60-(60-st.x)*Y.young+Y.depart*26,-12+(st.y+12)*Y.young+Math.sin(le*.7)*.2+Y.depart*7,-40+(40+st.z)*Y.young-Y.depart*26),M.group.rotation.set(0,-.1+Y.depart*.7,Math.sin(le*.4)*.03+Y.depart*.12),M.group.updateMatrixWorld();for(let[Se,tt,et,it]of[[S,-46,-70,0],[w,52,-85,1]])Se.group.visible=Y.answer>.01&&Y.depart<.95,Se.wave.uAmp.value=.45,Se.group.position.set(tt,-18+Y.answer*4+Math.sin(le*.5+it)*.4,et),Se.group.rotation.y=it?2.6:.4;let Ce=0;b.forEach((Se,tt)=>{let et=gt(Se.ox,le).clone();et.z+=Se.oz;let it=Jd((Y.transfer-tt/C*.75)/.25),ct=et;if(it>0){let Rt=dt(Se.yx).clone();Rt.z+=Se.yz,ct=et.lerp(Rt,it),ct.y+=Math.sin(it*Math.PI)*3.2}Se.group.position.copy(ct),Se.group.rotation.set(v.group.rotation.x*(1-it),Se.rot+(it>0?it*Math.PI*2:0)*(it<1?1:0),v.group.rotation.z*(1-it));let ln=Y.storm>.3?Math.sin(le*9+Se.flicker*3)>-.2:!0;Se.windows.color.setScalar(ln?.6+Y.night*.4+(1-Y.night)*.2:.15),ln&&Ce++}),E.rotation.z=le*(1.2+Y.storm*6),N.forEach(Se=>{let tt=Jd((Y.grow-Se.delay*.6)/.4);Se.g.visible=tt>.01,Se.g.visible&&(Se.g.position.copy(gt(Se.x,le)),Se.g.position.z+=Se.z,Se.g.scale.setScalar(tt))});for(let Se=0;Se<48;Se++){let tt=b[Se%C],et=(le*.35+Se*.137)%1;He.copy(tt.chimney).applyMatrix4(tt.group.matrixWorld),He.x-=et*2.2+Y.storm*et*4,He.y+=et*2.4,Ze.setScalar(Jt*.8*(.6+et)*(1-Y.dive)*(1-Y.transfer*.5)),Fe.compose(He,Xe.identity(),Ze),B.setMatrixAt(Se,Fe)}B.instanceMatrix.needsUpdate=!0;let nt=Math.max(Y.song*(1-Y.depart),Y.transfer>0&&Y.transfer<1?1:0);for(let Se=0;Se<48;Se++){let tt=Se*.618%1,et=(le*.12+tt)%1;if(Y.transfer>0&&Y.transfer<1){let it=gt(Math.round(64*(.35+tt*.35)),le).clone(),ct=dt(Math.round(44*(.35+tt*.35)));He.copy(it.lerp(ct,et)),He.y+=Math.sin(et*Math.PI)*4+1}else He.copy(gt(Math.round(64*(.3+tt*.45)),le)),He.y+=.5+et*7,He.x+=Math.sin(et*6+Se)*1.5,He.z+=Math.cos(Se*2.4)*3;Ze.setScalar(Jt*.9*nt*Math.sin(Math.min(1,et*1.2)*Math.PI)**.3),Fe.compose(He,Xe.identity(),Ze),H.setMatrixAt(Se,Fe)}H.instanceMatrix.needsUpdate=!0;let We=p.mesh.instanceMatrix.array,ft=le*.4,Kt=Y.part;y.uTime.value=le,y.uPart.value=Kt,y.uTint.value.copy(_.color);for(let Se=0;Se<p.mesh.count;Se++){let tt=Se*16,et=m[tt+12]+ft;et=((et+90)%180+180)%180-90;let it=m[tt+14],ct=Math.hypot(et,it+10),ln=Yo(Kt*1.6-ct/200),Rt=Jt*(1-ln);We[tt]=We[tt+5]=We[tt+10]=Rt,We[tt+12]=et,We[tt+13]=m[tt+13]+ln*6}if(p.mesh.instanceMatrix.needsUpdate=!0,_.emissive.setRGB(.3,.3,.4).multiplyScalar(1-Y.storm*.6-Y.night*.7),_.color.setRGB(1,1,1).lerp(new Te(.5,.52,.62),Y.storm).lerp(new Te(.28,.3,.48),Y.night*.9),X.visible=Y.storm>.05,X.visible){for(let Se=0;Se<900;Se++){let tt=Se*37.7%60-30+qe.x,et=Se*13.3%40-20,it=(le*22+Se*3.31)%30,ct=qe.y+15-it;W.set([tt,ct,et,tt-.35,ct-1.1,et],Se*6)}Z.attributes.position.needsUpdate=!0,X.material.opacity=Y.storm}if(Y.storm>.5&&le-Qe>1.4+Math.sin(ke)*.6){Qe=le,ke+=1.7;let Se=Math.sin(ke*3.1)*.5*40,tt=30,et=-30-Math.abs(Math.cos(ke))*30;for(let it=0;it<30;it++)V.set([Se,tt,et],it*3),Se+=Math.sin(ke*7+it*2.3)*2.2,tt-=1.4;O.attributes.position.needsUpdate=!0}let _t=Math.max(0,1-(le-Qe)/.18)*Y.storm;if(A.visible=_t>.2,u.uFlash.value=_t*.6,ce.forEach((Se,tt)=>{let et=tt>=5,it=tt%5,ct=(le*.32+it/5)%1,ln=et?Y.answer*(1-Y.young):Y.song*(1-Y.young);if(Se.visible=ln>.02,!Se.visible)return;let Rt=et?(it%2?w:S).group.position:gt(56,le);Se.position.copy(Rt),Se.rotation.set(Math.PI/2,0,0),Se.scale.setScalar(1+ct*(et?40:26)),Se.material.opacity=(1-ct)*ln}),u.uNight.value=Y.night,u.uStorm.value=Y.storm,u.uAurora.value=Y.aurora,u.uDawn.value=Y.dawn,d.uNight.value=Y.night,d.uDawn.value=Y.dawn,u.uSun.value.set(.75,.12-Y.dawn*.06,-.65+Y.dawn*.2),a.setRGB(1,.72,.56).lerp(new Te(.38,.4,.5),Y.storm).lerp(new Te(.06,.08,.2),Y.night),o.fog.color.copy(a),c.intensity=1.3-Y.night*.7-Y.storm*.4,h.intensity=(2.2-Y.storm*1.6)*(1-Y.night*.8)+_t*3,h.color.setRGB(1,.85,.7).lerp(new Te(.6,.7,1),Y.night),at(_e),D.x+=(D.tx-D.x)*.05,D.y+=(D.ty-D.y)*.05,Pe.x+=D.x*1.2+Math.sin(le*.3)*.25+Math.sin(le*37)*_t*.3,Pe.y+=-D.y*.6+Math.sin(le*.4)*.15,l.position.copy(Pe),l.lookAt(qe),f.position.copy(l.position),i.setRenderTarget(pe),i.render(o,l),i.setRenderTarget(null),i.render(te,re),Ie&&(Ie.textContent=String(Math.max(0,Math.round(2400-Y.storm*300-Y.dive*2100-Y.settle*30))).padStart(4,"0")),Le&&(Le.textContent=`${String(Ce).padStart(2,"0")}/12`),he&&(he.textContent=Y.depart>.5?"006":"212"),de&&(de.textContent=Y.storm>.4?"STORM":Y.aurora>.4?"AURORA":Y.night>.5?"NIGHT":Y.dawn>.5?"DAWN":"CLEAR"),Y.chapter!==L){L=Y.chapter;let[Se,tt]=Zm[Y.chapter];xe&&(xe.textContent=`CHAPTER ${Se}`),oe&&(oe.textContent=tt),G&&(G.textContent=`${Se}`),Ue.forEach((et,it)=>et.classList.toggle("is-on",it<=Y.chapter))}if(z){let Se=Zm[Y.chapter][2],tt=al[Y.chapter],et=al[Y.chapter+1]??1.02,it=Yo((_e-tt-.004)/((et-tt)*.5)),ct=Math.round(Se.length*it);z.textContent=Se.slice(0,ct),z.classList.toggle("is-typing",ct<Se.length)}t.dataset.scrollProgress=_e.toFixed(3),t.dataset.storyBeat=String(Y.chapter+1)}function j(){let le=Math.max(1,t.clientWidth),Y=Math.max(1,t.clientHeight),_e=Math.ceil(le/s),Ne=Math.ceil(Y/s);i.setSize(_e,Ne,!1),pe.setSize(_e,Ne),Ee.uniforms.uRes.value.set(_e,Ne),l.aspect=le/Y,l.fov=le/Y<.9?48:34,l.updateProjectionMatrix(),ne(performance.now()/1e3)}j();let fe;r||(fe=ue.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".cw-journey",start:"top top",end:"bottom bottom",scrub:1.2}}),fe.to(T,{p:1,duration:1},0),fe.to(".cw-title",{autoAlpha:0,y:-40,duration:.035,ease:"power1.in"},.015),fe.fromTo(".cw-dialog",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015,ease:"steps(4)"},.03),al.forEach((le,Y)=>{fe.fromTo(".cw-card",{autoAlpha:0,x:-40},{autoAlpha:1,x:0,duration:.012,ease:"steps(5)",immediateRender:!1},le+(Y?.004:.04)),fe.to(".cw-card",{autoAlpha:0,x:40,duration:.01,ease:"steps(4)"},(al[Y+1]??1.05)-.03)}),ue.from(".cw-title .cw-l",{yPercent:120,autoAlpha:0,duration:.6,stagger:.05,ease:"steps(6)",delay:.3}),ue.from(".cw-nav, .cw-hud",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ue.utils.toArray(".cw-log article").forEach((le,Y)=>ue.from(le,{autoAlpha:0,y:40,duration:.7,ease:"steps(7)",delay:Y%3*.08,scrollTrigger:{trigger:le,start:"top 90%"}})));let F=le=>{D.tx=(le.clientX/innerWidth-.5)*2,D.ty=(le.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",F,{passive:!0});let be=0,me=!0,Re=new IntersectionObserver(([le])=>{me=le.isIntersecting,me&&ae()});Re.observe(t);let ge=le=>{be=0,!(!me||document.hidden)&&(ne(le/1e3),ae())};function ae(){!be&&me&&!document.hidden&&!r&&(be=requestAnimationFrame(ge))}let Ae=()=>document.hidden?(cancelAnimationFrame(be),be=0):ae();return document.addEventListener("visibilitychange",Ae),window.addEventListener("resize",j),ae(),()=>{cancelAnimationFrame(be),Re.disconnect(),fe?.scrollTrigger?.kill(),fe?.kill(),window.removeEventListener("pointermove",F),window.removeEventListener("resize",j),document.removeEventListener("visibilitychange",Ae),o.traverse(le=>{let Y=le;Y.geometry?.dispose(),(Array.isArray(Y.material)?Y.material:Y.material?[Y.material]:[]).forEach(_e=>_e.dispose())}),pe.depthTexture?.dispose(),pe.dispose(),Ee.dispose(),i.dispose(),i.domElement.remove()}}var Wt=.25,jm=7,It=()=>((jm=jm*16807%2147483647)-1)/2147483646,f2=new Gt(1,1,1),$o=new En([[0,3,2],[0,-9,-12],[3,-18,-40],[-2,-24,-75],[0,-30,-120],[-4,-36,-165],[-6,-42,-205],[2,-48,-245],[4,-54,-285],[0,-58,-325],[0,-62,-358]].map(([r,e,t])=>new I(r,e,t)),!1,"centripetal"),Kr=5,Pr={bone:{c:new I(0,-30,-120),r:new I(24,18,32)},river:{c:new I(-6,-42,-205),r:new I(30,17,28)},crystal:{c:new I(4,-54,-285),r:new I(24,22,26)},heart:{c:new I(0,-62,-360),r:new I(21,18,21)}},jx=Object.values(Pr),Kd=(r,e)=>{let t=(r.x-e.c.x)/e.r.x,n=(r.y-e.c.y)/e.r.y,i=(r.z-e.c.z)/e.r.z;return t*t+n*n+i*i},Jm=(r,e)=>Math.floor(9*Math.exp(-((r-8)**2+(e+16)**2)/1500)+Math.sin(r*.12)*.8+Math.cos(e*.1)*.8),Km=new I(18,0,-24);function p2(r=.6){let e=Math.ceil($o.getLength()/r),t=[],n=[],i=[],s=new I(0,1,0);for(let o=0;o<=e;o++){let a=o/e,l=$o.getPointAt(a),c=$o.getTangentAt(a),h=new I().crossVectors(c,s).normalize();t.push(l),n.push(h),i.push(new I().crossVectors(h,c).normalize())}return{pts:t,side:n,up:i,n:e}}function m2(r,e){let t=r?new ds:new Pn;return e&&(t.onBeforeCompile=e),t}function qn(r,e=!0,t=Wt,n){let i=new Mr(f2,m2(e,n),Math.max(1,r.length)),s=new Ct,o=new Te;return r.forEach(([a,l,c,h],u)=>{i.setMatrixAt(u,s.makeScale(t,t,t).setPosition(a*t,l*t,c*t)),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}var Qm=r=>e=>{e.uniforms.uGrey=r.uGrey,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGrey;`).replace("#include <color_fragment>",`#include <color_fragment>
float greyLum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(greyLum) * vec3(0.86, 0.88, 0.94), uGrey);`)};function Qx(){jm=7;let r=p2(),e=new Map,t=6,n=(O,V,A)=>`${Math.floor(O/t)},${Math.floor(V/t)},${Math.floor(A/t)}`;r.pts.forEach((O,V)=>{let A=n(O.x,O.y,O.z);(e.get(A)??e.set(A,[]).get(A)).push(V)});let i=new I,s=(O,V,A)=>{i.set(O,V,A);for(let Ee of jx)if(Kd(i,Ee)<1)return!0;let K=Math.floor(O/t),ce=Math.floor(V/t),pe=Math.floor(A/t);for(let Ee=-1;Ee<=1;Ee++)for(let Be=-1;Be<=1;Be++)for(let te=-1;te<=1;te++)for(let re of e.get(`${K+Ee},${ce+Be},${pe+te}`)??[])if(r.pts[re].distanceToSquared(i)<Kr*Kr)return!0;return V>=Jm(O,A)-1},o=(O,V,A)=>V>-7&&A>-30||A>-92?"soil":A>-168?"bone":A>-248?"river":A>-322?"crystal":"heart",a={soil:["#5a3b24","#6b4a2e","#7d5634","#4a3020"],bone:["#7a4a3a","#8a5a44","#6a3e32","#5a352c"],river:["#2e3550","#3b4466","#262c44","#46507a"],crystal:["#241f3a","#2f2850","#3a3060","#1c1830"],heart:["#3a2028","#4a2630","#2e1820","#5a2c2c"]},l=new Map,c=[],h=(O,V,A)=>(O+512)*1048576+(V+512)*1024+(A+512),u=(O,V,A)=>{O=Math.round(O),V=Math.round(V),A=Math.round(A);let K=h(O,V,A+400);if(l.has(K)||s(O,V,A))return;let ce=o(O,V,A),pe=a[ce],Ee=pe[Math.floor(It()*pe.length)];if(ce==="soil"&&It()>.94&&(Ee=It()>.5?"#8a8a96":"#a8a0a0"),ce==="bone"&&It()>.97&&(Ee="#e6dcc0"),ce==="heart"&&It()>.93){c.push([O,V,A,It()>.5?"#ff8a3d":"#c4506b"]);return}l.set(K,[O,V,A,Ee])};r.pts.forEach((O,V)=>{for(let A of[Kr+.6,Kr+1.4]){let K=Math.ceil(Math.PI*2*A*1.3);for(let ce=0;ce<K;ce++){let pe=ce/K*Math.PI*2;u(O.x+(r.side[V].x*Math.cos(pe)+r.up[V].x*Math.sin(pe))*A,O.y+(r.side[V].y*Math.cos(pe)+r.up[V].y*Math.sin(pe))*A,O.z+(r.side[V].z*Math.cos(pe)+r.up[V].z*Math.sin(pe))*A)}}});for(let O of jx)for(let V=-O.r.x-2;V<=O.r.x+2;V++)for(let A=-O.r.y-2;A<=O.r.y+2;A++)for(let K=-O.r.z-2;K<=O.r.z+2;K++){i.set(O.c.x+V,O.c.y+A,O.c.z+K);let ce=Kd(i,O);ce>=1&&ce<1.22&&u(i.x,i.y,i.z)}let f=[];for(let O=-70;O<=70;O++)for(let V=-70;V<=40;V++){if(Math.hypot(O,V-1)<5.5)continue;let A=Jm(O,V);f.push([O,A,V,It()>.85?"#2f6b4f":It()>.5?"#5ba86a":"#4f9a5e"],[O,A-1,V,"#6b4a2e"]),It()>.93&&f.push([O,A+1,V,"#4f9a5e"])}let d=[],g=[],p=Km.clone().setY(Jm(Km.x,Km.z)),_=(O,V,A,K)=>{let ce=Math.ceil(O.distanceTo(V)*1.5);for(let pe=0;pe<=ce;pe++){let Ee=O.clone().lerp(V,pe/ce),Be=A*(1-pe/ce*.4);for(let te=-Be;te<=Be;te++)for(let re=-Be;re<=Be;re++)te*te+re*re<=Be*Be+.5&&d.push([Math.round(Ee.x+te),Math.round(Ee.y),Math.round(Ee.z+re),K])}},m=p.clone().add(new I(0,30,0));_(p,m,3.2,"#6b4a2e");let y=(O,V,A,K,ce)=>{let pe=O.clone().addScaledVector(V,A);if(_(O,pe,K,ce>1?"#5a3b24":"#7d5634"),ce===0)return void g.push(pe);for(let Ee=0;Ee<3;Ee++){let Be=V.clone().add(new I((It()-.5)*1.4,.35+It()*.5,(It()-.5)*1.4)).normalize();y(pe,Be,A*.68,Math.max(.6,K*.6),ce-1)}};for(let O=0;O<4;O++){let V=O/4*Math.PI*2+.4;y(m.clone().addScaledVector(new I(0,-1,0),O*3),new I(Math.cos(V),.55,Math.sin(V)).normalize(),12,1.6,2)}let x=g.map(O=>{let V=[],A=2.5+It()*2;for(let K=-A;K<=A;K++)for(let ce=-A*.7;ce<=A*.7;ce++)for(let pe=-A;pe<=A;pe++)K*K+ce*ce*2+pe*pe<=A*A&&It()>.15&&V.push([Math.round(K),Math.round(ce),Math.round(pe),ce>.5?"#ffd6e6":It()>.5?"#f7a8c4":"#e07aa8"]);return{at:O,list:V}}),v=[],M=[],S=r.pts[4].clone().addScaledVector(r.up[4],Kr-.6),w=30;for(let O=0;O<=w;O++)M.push(p.clone().add(new I(0,-3,0)).lerp(S,O/w));r.pts.forEach((O,V)=>V>4&&M.push(O.clone().addScaledVector(r.up[V],Kr-.4).addScaledVector(r.side[V],Math.sin(V*.05)*1.5))),M.forEach((O,V)=>{let A=V/(M.length-1);for(let[K,ce]of[[0,0],[1,0],[0,-1]])v.push({v:[Math.round(O.x+K),Math.round(O.y+ce),Math.round(O.z),V%7===0?"#5a3b24":"#7d5634"],along:A})});let C=[];r.pts.forEach((O,V)=>{let A=o(O.x,O.y,O.z),K=r.up[V],ce=r.side[V];if(A==="soil"&&O.y<-6&&V%9===0){let pe=(It()-.5)*6,Ee=2+Math.floor(It()*4);for(let Be=0;Be<Ee;Be++)C.push([Math.round(O.x+ce.x*pe),Math.round(O.y+K.y*(Kr-Be)),Math.round(O.z+ce.z*pe),"#8a6a44"])}if(A==="bone"&&Kd(O,Pr.bone)<.85){for(let pe of[0,1])C.push([Math.round(O.x+K.x*(13+pe)),Math.round(O.y+K.y*(13+pe)),Math.round(O.z+K.z*(13+pe)),V%5<2?"#e6dcc0":"#c8bca0"]);if(V%8===0)for(let pe=-.6;pe<=Math.PI+.6;pe+=.06)C.push([Math.round(O.x+(ce.x*Math.cos(pe)+K.x*Math.sin(pe))*12.5),Math.round(O.y+K.y*Math.sin(pe)*12.5+ce.y*Math.cos(pe)*12.5),Math.round(O.z+(ce.z*Math.cos(pe)+K.z*Math.sin(pe))*12.5),"#e6dcc0"])}});let b=$o.getPointAt(.43);for(let O=-7;O<=7;O++)for(let V=0;V<=8;V++)for(let A=-9;A<=6;A++){if(!(Math.abs(O)===7||V===0||V===8||A===-9||A===6))continue;let ce=A===6&&V>3&&V<7&&(Math.abs(O-3.5)<1.6||Math.abs(O+3.5)<1.6),pe=A===6&&V<2&&O%2===0;C.push([Math.round(b.x+O),Math.round(b.y+9+V),Math.round(b.z+A),ce?"#1c1410":pe?"#ffffff":V>5?"#e6dcc0":"#c8bca0"])}let E=[],P=Pr.river,N=Math.round(P.c.y-P.r.y*.45);for(let O=-P.r.x;O<=P.r.x;O++)for(let V=-P.r.z;V<=P.r.z;V++)i.set(P.c.x+O,N,P.c.z+V),Kd(i,P)<.98&&E.push([i.x,N,i.z,It()>.8?"#3d8fbf":"#1f5f8f"]);for(let O=0;O<34;O++){let V=It()*Math.PI*2,A=Math.sqrt(It())*.85,K=P.c.x+Math.cos(V)*P.r.x*A,ce=P.c.z+Math.sin(V)*P.r.z*A;i.set(K,P.c.y,ce);let pe=P.c.y+P.r.y*Math.sqrt(Math.max(0,1-((K-P.c.x)/P.r.x)**2-((ce-P.c.z)/P.r.z)**2)),Ee=3+Math.floor(It()*7);for(let Be=0;Be<Ee;Be++)C.push([Math.round(K),Math.round(pe-Be),Math.round(ce),Be===Ee-1?"#9fd3e8":"#46507a"])}let B=[],H=Pr.crystal;for(let O=0;O<56;O++){let V=new I(It()-.5,It()-.65,It()-.5).normalize(),A=H.c.clone().add(new I(V.x*H.r.x,V.y*H.r.y,V.z*H.r.z).multiplyScalar(.98)),K=H.c.clone().sub(A).normalize().add(new I(0,.6,0)).normalize(),ce=4+It()*10,pe=It()>.5?["#8b7bc0","#c9b8e8","#5a5aa0"]:["#3ce0c4","#9ff0e0","#1d8f9a"];for(let Ee=0;Ee<ce;Ee++){let Be=Ee<ce-2?1:0;for(let te=-Be;te<=Be;te++)for(let re=-Be;re<=Be;re++)B.push([Math.round(A.x+K.x*Ee+te),Math.round(A.y+K.y*Ee),Math.round(A.z+K.z*Ee+re),pe[Ee>ce-3?1:te===0&&re===0?0:2]])}}let Z=[],W=Pr.heart.c;for(let O=0;O<22;O++){let V=W.clone().add(new I(It()-.5,It()-.5,It()-.5).multiplyScalar(8));for(let K=0;K<40;K++){let ce=W.clone().sub(V).multiplyScalar(.05);V=V.add(new I(It()-.5,It()-.5,It()-.5).multiplyScalar(1.4).add(ce)),!(V.distanceTo(W)<3.6)&&Z.push([Math.round(V.x),Math.round(V.y),Math.round(V.z),It()>.5?"#7d5634":"#5a3b24"])}let A=new I(It()-.5,It()-.5,It()-.5).normalize();for(let K=7;K<19;K++)Z.push([Math.round(W.x+A.x*K),Math.round(W.y+A.y*K),Math.round(W.z+A.z*K),"#5a3b24"])}let X=[];for(let O=-3;O<=3;O++)for(let V=-3;V<=3;V++)for(let A=-3;A<=3;A++)O*O+V*V+A*A<=10&&X.push([W.x+O,W.y+V,W.z+A,"#ffffff"]);return{frames:r,walls:[...l.values()],glow:c,surface:f,tree:d,blossoms:x,root:v,detail:C,water:E,crystals:B,knot:Z,core:X,waterLevel:N}}function ev(){let r=[],e=[],t=[];for(let l=-2;l<=2;l++)for(let c=0;c<=3;c++)for(let h=-3;h<=2;h++)l*l/5+(c-1.5)**2/3+h*h/8<=1.05&&r.push([l,c,h,c<1?"#7a6060":"#4a3b38"]);r.push([0,1.5,3,"#f47c7c"],[-1,2,2,"#0b0d1f"],[1,2,2,"#0b0d1f"],[-2,0,2,"#f4b6a0"],[2,0,2,"#f4b6a0"]);for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++)l*l+c*c<=5&&e.push([l,4,c,"#9a6a52"]);e.push([0,5,0,"#6b4a2e"]);for(let l=0;l<5;l++)t.push([3,l+1,2,"#7d5634"]);t.push([3,6,2,"#ffd34d"],[3,5,2,"#ffcf8a"]);let n=new Je,i=Wt*.55,s=qn(r,!0,i),o=qn(e,!0,i),a=qn(t,!1,i);return n.add(s,o,a),{group:n,capMesh:o,lampMesh:a}}var tv=[["I","THE GREY TREE","The great tree has not bloomed for a hundred winters. Pip thinks the trouble is not in the branches.","LANTERN"],["II","TOPSOIL","Down past the worms and the stubborn roots, where the dirt still smells of rain.","ACORN CAP"],["III","THE BONE HALL","Old giants sleep here. Pip says excuse me to every single rib.","FOSSIL TOOTH"],["IV","THE BLIND RIVER","A river that has never seen the sky. Its fish make their own light.","RIVER PEARL"],["V","THE CRYSTAL HALL","Even this far down, things find a way to shine.","CRYSTAL SHARD"],["VI","THE HEART ROOT","At the bottom of everything, the tree's heart had gone cold. Pip gave it the lantern.","EMBER"],["VII","BLOOM","The light ran up every root at once. By morning the whole hill was pink.","BLOSSOM"]],e0=[0,.12,.26,.4,.54,.68,.82],nv=[0,.19,.33,.47,.61,.76,.95],ll=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),jd=r=>(r=ll(r),r*r*(3-2*r)),Zo=(r,e,t)=>jd((r-e)/(t-e));function iv(r){let e=ll(r),t=0;e0.forEach((s,o)=>e>=s&&(t=o));let n=Zo(e,.82,.92),i=ll((e-.13)/(.69-.13));return{p:e,chapter:t,dive:Zo(e,.05,.13),along:n>0?1-n:i,orbit:Zo(e,.68,.74)*(1-Zo(e,.8,.83)),give:Zo(e,.73,.79),pulse:n>0?1-n:e>.79?1:0,rewind:n,exit:Zo(e,.91,.97),bloom:Zo(e,.9,.99)}}function rv(r){let e=r.palette.slice(0,32);for(;e.length<32;)e.push(e[e.length-1]);let t=new Te(r.outlineInk??"#0d0f1f"),n=new Nt({uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ye(1,1)},uPal:{value:e.map(a=>{let l=new Te(a);return new I(l.r,l.g,l.b)})},uNear:{value:.1},uFar:{value:600},uDither:{value:r.dither??.05},uOutline:{value:r.outlineNear??140},uInk:{value:new I(t.r,t.g,t.b)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
      #include <packing>
      uniform sampler2D tColor, tDepth; uniform vec2 uRes; uniform vec3 uPal[32], uInk; uniform float uNear, uFar, uDither, uOutline;
      varying vec2 vUv;
      float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
      float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
      float depthAt(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar); }
      vec3 nearest(vec3 c){
        vec3 best = uPal[0]; float bd = 1e9;
        for (int i = 0; i < 32; i++) { vec3 d = (c - uPal[i]) * vec3(0.9, 1.2, 0.7); float e = dot(d, d); if (e < bd) { bd = e; best = uPal[i]; } }
        return best;
      }
      void main(){
        vec3 c = pow(max(texture2D(tColor, vUv).rgb, 0.0), vec3(1.0 / 2.2));
        c += (bayer4(gl_FragCoord.xy) - 0.5) * uDither;
        vec2 px = 1.0 / uRes;
        float d0 = depthAt(vUv), far = 0.0;
        far = max(far, depthAt(vUv + vec2(px.x, 0.0)) - d0);
        far = max(far, depthAt(vUv - vec2(px.x, 0.0)) - d0);
        far = max(far, depthAt(vUv + vec2(0.0, px.y)) - d0);
        far = max(far, depthAt(vUv - vec2(0.0, px.y)) - d0);
        if (far > 0.6 + d0 * 0.06 && d0 < uOutline) c = mix(c * 0.3, uInk, 0.55);
        gl_FragColor = vec4(nearest(c), 1.0);
      }`}),i=new un(4,4,{type:Tn,minFilter:jt,magFilter:jt,depthTexture:new rr(4,4)});n.uniforms.tColor.value=i.texture,n.uniforms.tDepth.value=i.depthTexture;let s=new sn;s.add(new $e(new On(2,2),n));let o=new Ci(-1,1,1,-1,0,1);return{material:n,setSize(a,l){i.setSize(a,l),n.uniforms.uRes.value.set(a,l)},render(a,l,c){n.uniforms.uNear.value=c.near,n.uniforms.uFar.value=c.far,a.setRenderTarget(i),a.render(l,c),a.setRenderTarget(null),a.render(s,o)},dispose(){i.depthTexture?.dispose(),i.dispose(),n.dispose()}}}var g2=["#0d0a0c","#1c1410","#2e1d16","#4a3020","#6b4a2e","#9a6a52","#c8a07a","#e6dcc0","#ffffff","#d8dce6","#9aa0b4","#5f6680","#3b4466","#262c44","#1f5f8f","#3d8fbf","#9fd3e8","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffd34d","#ff8a3d","#c4506b","#7a2d55","#e07aa8","#f7a8c4","#ffd6e6","#5a5aa0","#8b7bc0","#c9b8e8"],so=(r,e,t)=>new I(r*Wt,e*Wt,t*Wt);function sv(r){let e=document.querySelector(".bw-world"),t=document.querySelector(".bw-stage");if(!e||!t)return;let n;try{n=new li({antialias:!1,powerPreference:"high-performance"})}catch{t.classList.add("is-fallback"),document.querySelector(".bw-journey")?.style.setProperty("height","100svh");return}let i=3;n.setPixelRatio(1),n.outputColorSpace=br,e.append(n.domElement),e.classList.add("has-webgl");let s=rv({palette:g2,dither:.05,outlineNear:60,outlineInk:"#0d0a0c"}),o=new sn,a=new Te;o.fog=new cs(a,6,40);let l=new Ht(48,1,.05,400),c=new Tr(16773856,4861984,1.4),h=new fn(16773336,2.2);h.position.set(-20,40,30),o.add(c,h);let u={uBloom:{value:0},uTime:{value:0}},f=new $e(new dn(300,24,12),new Nt({uniforms:u,side:In,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uBloom; varying vec3 vD;
        void main(){
          float g = smoothstep(-0.1, 0.7, vD.y);
          vec3 winter = mix(vec3(0.86, 0.87, 0.9), vec3(0.62, 0.64, 0.7), g);
          vec3 spring = mix(vec3(1.0, 0.88, 0.92), vec3(0.45, 0.7, 0.92), g);
          vec3 c = mix(winter, spring, uBloom);
          gl_FragColor = vec4(pow(c, vec3(2.2)), 1.0);
        }`}));o.add(f);let d=Qx(),g={uGrey:{value:1}},p=ne=>(o.add(ne),ne);p(qn(d.walls,!0)),p(qn(d.glow,!1)),p(qn(d.detail,!0)),p(qn(d.knot,!0)),p(qn(d.surface,!0,Wt,Qm(g))),p(qn(d.tree,!0,Wt,Qm(g)));let _=p(qn(d.crystals,!1)),m=p(qn(d.core,!1)),y={uTime:{value:0}};p(qn(d.water,!1,Wt,ne=>{ne.uniforms.uTime=y.uTime,ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 ip = instanceMatrix[3].xyz; transformed.y += sin(uTime * 2.0 + ip.x * 3.0 + ip.z * 2.0) * 0.35;`)}));let x={uPulse:{value:-1},uLit:{value:0}},v=qn(d.root.map(ne=>ne.v),!0,Wt,ne=>{Object.assign(ne.uniforms,x),ne.vertexShader=ne.vertexShader.replace("#include <common>",`#include <common>
attribute float aAlong; varying float vAlong;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAlong = aAlong;`),ne.fragmentShader=ne.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPulse, uLit; varying float vAlong;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float band = exp(-pow((vAlong - uPulse) * 22.0, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.62, 0.25) * (band * 3.0 + step(uPulse, vAlong) * uLit * 0.55);`)});v.geometry=v.geometry.clone(),v.geometry.setAttribute("aAlong",new yo(new Float32Array(d.root.map(ne=>ne.along)),1)),p(v);let M=d.blossoms.map((ne,j)=>{let fe=qn(ne.list,!0,Wt*.9);return fe.position.copy(so(ne.at.x,ne.at.y,ne.at.z)),fe.scale.setScalar(.001),o.add(fe),{m:fe,delay:j/d.blossoms.length*.5}}),S=3,w=()=>((S=S*16807%2147483647)-1)/2147483646,C=qn(Array.from({length:260},()=>{let ne=Math.round((w()-.5)*120),j=Math.round(-60+w()*95);return[ne,Math.floor(9*Math.exp(-((ne-8)**2+(j+16)**2)/1500)+Math.sin(ne*.12)*.8+Math.cos(j*.1)*.8)+1,j,["#ffd6e6","#ffd34d","#ffffff","#e07aa8"][Math.floor(w()*4)]]}).filter(([ne,,j])=>Math.hypot(ne,j-1)>6),!0);p(C);let b=p(qn(Array.from({length:140},(ne,j)=>[0,0,0,j%2?"#f7a8c4":"#ffd6e6"]),!1,Wt*.6)),E=p(qn(Array.from({length:16},(ne,j)=>[0,0,0,j%3?"#9fd3e8":"#3ce0c4"]),!1,Wt*.8)),P=ev();o.add(P.group);let N=new Ri(16763e3,6,9,1.4);o.add(N);let B=new Ri(4892927,0,14,1.2);B.position.copy(Pr.river.c).multiplyScalar(Wt);let H=new Ri(11570431,0,14,1.2);H.position.copy(Pr.crystal.c).multiplyScalar(Wt);let Z=new Ri(16747069,0,16,1.1);Z.position.copy(Pr.heart.c).multiplyScalar(Wt),o.add(B,H,Z);let W=new I,X=new I,O=new I,V=(ne,j)=>j.copy($o.getPointAt(ll(ne))).multiplyScalar(Wt),A=ne=>{let j=$o.getTangentAt(ll(ne)),fe=new I().crossVectors(j,new I(0,1,0)).normalize();return O.crossVectors(fe,j).normalize()},K=new I,ce=new I,pe=[so(-34,34,80),so(10,18,-18)],Ee=[so(0,9,16),so(0,-6,-12)],Be=[so(-34,30,66),so(16,24,-22)],te=Pr.heart.c.clone().multiplyScalar(Wt);function re(ne,j){V(ne,K).addScaledVector(A(ne),1.9*Wt),V(j?ne-.014:ne+.014,ce).addScaledVector(A(ne),.9*Wt)}let we=(ne,j,fe)=>{K.lerpVectors(ne[0],j[0],fe),ce.lerpVectors(ne[1],j[1],fe)},Oe={x:0,y:0,tx:0,ty:0},Pe={p:r?.99:0},qe=-1,at=ne=>t.querySelector(ne),Fe=at(".bw-marker"),Xe=at(".bw-depth b"),Ze=at(".bw-layer"),He=at(".bw-card small"),Q=at(".bw-card h2"),k=at(".bw-card p"),gt=at(".bw-card .bw-found b"),dt=Array.from(t.querySelectorAll(".bw-slot")),Qe=new Ct,ke=new hn,D=new I,T=new I,L=["SURFACE","TOPSOIL","BONE HALL","BLIND RIVER","CRYSTAL HALL","HEART ROOT"];function U(ne){let j=iv(Pe.p),fe=j.p;if(u.uBloom.value=j.bloom,g.uGrey.value=1-j.bloom,y.uTime.value=ne,fe<.13)we(pe,Ee,j.dive);else if(j.exit>0){re(.02,!0);let Y=[K.clone(),ce.clone()];we(Y,Be,jd(j.exit))}else if(j.orbit>0&&j.rewind===0){re(1,!1);let Y=K.clone(),_e=ce.clone(),Ne=(fe-.68)*9;W.set(te.x+Math.sin(Ne)*4.2,te.y+1.2,te.z+Math.cos(Ne)*4.2),K.lerpVectors(Y,W,j.orbit),ce.lerpVectors(_e,te,j.orbit)}else re(j.along,j.rewind>0);Oe.x+=(Oe.tx-Oe.x)*.05,Oe.y+=(Oe.ty-Oe.y)*.05,ce.x+=Oe.x*.5,ce.y-=Oe.y*.3,K.y+=Math.sin(ne*1.4)*.03,l.position.copy(K),l.lookAt(ce),f.position.copy(K);let F=fe<.13?j.dive*.9:j.exit>0?1-j.exit:1,be=K.z/Wt,me=be>-92?[.16,.1,.07]:be>-168?[.22,.13,.1]:be>-248?[.05,.1,.2]:be>-322?[.12,.08,.22]:[.22,.07,.06];a.setRGB(.88,.89,.92).lerp(new Te(...me),F),o.fog.color.copy(a),o.fog.near=6+(1-F)*40,o.fog.far=26+(1-F)*200,c.intensity=1.4-F*1.15,h.intensity=2.2*(1-F);let Re=Math.min(.985,j.along+.034);j.exit>.5?(P.group.position.copy(so(12,9,-14)),P.group.rotation.set(0,.6,0)):(V(j.rewind>0?.985:Re,T).addScaledVector(A(Re),-(Kr-.9)*Wt),P.group.position.copy(T),P.group.position.y+=Math.abs(Math.sin(ne*6))*.04,V(Re+.01,X).addScaledVector(A(Re),-(Kr-.9)*Wt),P.group.lookAt(X)),P.capMesh.visible=fe>.19,P.lampMesh.visible=j.give<.5,N.position.copy(P.group.position).add(new I(0,.8,0)),N.intensity=7*F*(1-j.give),B.intensity=30*F,H.intensity=26*F;let ge=.75+.25*Math.sin(ne*1.6);_.material.color.setScalar(ge);let ae=j.give;Z.intensity=6+ae*60+Math.sin(ne*3)*4*ae,m.material.color.setRGB(.35+ae*.65,.4+ae*.35,.5-ae*.3).multiplyScalar(.8+.2*Math.sin(ne*(2+ae*3))),m.scale.setScalar(1),x.uPulse.value=j.pulse>0?j.along*.92+.05:-1,x.uLit.value=ae;let Ae=Pr.river;for(let Y=0;Y<16;Y++){let _e=ne*(.4+Y%4*.12)+Y*1.7,Ne=Math.max(0,Math.sin(ne*1.3+Y*2.1))**6*3;T.set(Ae.c.x+Math.cos(_e)*Ae.r.x*.55,d.waterLevel+.8+Ne,Ae.c.z+Math.sin(_e*1.3)*Ae.r.z*.55).multiplyScalar(Wt),Qe.compose(T,ke.setFromEuler(new Wn(0,-_e,0)),D.set(Wt*1.6,Wt*.6,Wt*.8)),E.setMatrixAt(Y,Qe)}if(E.instanceMatrix.needsUpdate=!0,M.forEach(Y=>Y.m.scale.setScalar(Math.max(.001,jd((j.bloom-Y.delay)/.45)))),C.visible=j.bloom>.2,C.position.y=(j.bloom-1)*Wt*2,b.visible=j.bloom>.3,b.visible)for(let Y=0;Y<140;Y++){let _e=(ne*.08+Y*.0137)%1;T.set(18+Math.sin(Y*2.3)*22+Math.sin(ne+Y)*2,46-_e*44,-24+Math.cos(Y*1.7)*22).multiplyScalar(Wt),Qe.compose(T,ke.setFromEuler(new Wn(ne+Y,ne*.7,0)),D.setScalar(Wt*.6*j.bloom)),b.setMatrixAt(Y,Qe)}b.instanceMatrix.needsUpdate=!0,s.render(n,o,l);let le=fe<.13||j.exit>0?0:j.along;if(Fe&&(Fe.style.top=`${le*100}%`),Xe&&(Xe.textContent=String(Math.round(le*412)).padStart(3,"0")),Ze&&(Ze.textContent=j.exit>0||fe<.12?L[0]:L[Math.min(5,1+Math.floor(le*4.99))]),j.chapter!==qe){qe=j.chapter;let[Y,_e,Ne,st]=tv[j.chapter];He&&(He.textContent=`SPECIMEN ${Y} / VII`),Q&&(Q.textContent=_e),k&&(k.textContent=Ne),gt&&(gt.textContent=st)}dt.forEach((Y,_e)=>{let Ne=nv[_e===5?6:_e],st=fe>=Ne;Y.classList.toggle("is-found",st),Y.classList.toggle("is-given",_e===0&&j.give>.5),Y.classList.toggle("is-new",st&&fe<Ne+.03)}),e.dataset.scrollProgress=fe.toFixed(3),e.dataset.storyBeat=String(j.chapter+1)}function z(){let ne=Math.max(1,e.clientWidth),j=Math.max(1,e.clientHeight),fe=Math.ceil(ne/i),F=Math.ceil(j/i);n.setSize(fe,F,!1),s.setSize(fe,F),l.aspect=ne/j,l.updateProjectionMatrix(),U(performance.now()/1e3)}z();let G;r||(G=ue.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".bw-journey",start:"top top",end:"bottom bottom",scrub:1.3}}),G.to(Pe,{p:1,duration:1},0),G.to(".bw-title",{autoAlpha:0,scale:1.4,duration:.05,ease:"power2.in"},.03),G.fromTo(".bw-card, .bw-gauge, .bw-bar",{autoAlpha:0},{autoAlpha:1,duration:.02,ease:"steps(4)"},.08),e0.forEach((ne,j)=>{j&&G.fromTo(".bw-card",{scale:1.25,rotation:-4},{scale:1,rotation:0,duration:.008,ease:"steps(4)",immediateRender:!1},ne+.002)}),G.fromTo(".bw-flash",{autoAlpha:0},{autoAlpha:.85,duration:.004},.79),G.to(".bw-flash",{autoAlpha:0,duration:.03},.795),ue.from(".bw-title .bw-l",{y:40,autoAlpha:0,duration:.6,stagger:.06,ease:"steps(6)",delay:.3}),ue.from(".bw-nav",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ue.utils.toArray(".bw-notes article").forEach((ne,j)=>ue.from(ne,{autoAlpha:0,y:40,rotation:j%2?2:-2,duration:.7,ease:"steps(7)",scrollTrigger:{trigger:ne,start:"top 90%"}})));let xe=ne=>{Oe.tx=(ne.clientX/innerWidth-.5)*2,Oe.ty=(ne.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",xe,{passive:!0});let oe=0,Ie=!0,Le=new IntersectionObserver(([ne])=>{Ie=ne.isIntersecting,Ie&&he()});Le.observe(e);let de=ne=>{oe=0,!(!Ie||document.hidden)&&(U(ne/1e3),he())};function he(){!oe&&Ie&&!document.hidden&&!r&&(oe=requestAnimationFrame(de))}let Ue=()=>document.hidden?(cancelAnimationFrame(oe),oe=0):he();return document.addEventListener("visibilitychange",Ue),window.addEventListener("resize",z),he(),()=>{cancelAnimationFrame(oe),Le.disconnect(),G?.scrollTrigger?.kill(),G?.kill(),window.removeEventListener("pointermove",xe),window.removeEventListener("resize",z),document.removeEventListener("visibilitychange",Ue),o.traverse(ne=>{let j=ne;j.geometry?.dispose(),(Array.isArray(j.material)?j.material:j.material?[j.material]:[]).forEach(fe=>fe.dispose())}),s.dispose(),n.dispose(),n.domElement.remove()}}var ov="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",_2={uniforms:{tDiffuse:{value:null},tSrc:{value:null},uGrid:{value:new ye(1,1)},uCell:{value:6},uTime:{value:0},uShape:{value:0},uGap:{value:.1},uLevels:{value:4},uMono:{value:0},uInk:{value:new Te(1,1,1)},uPaper:{value:new Te(0,0,0)},uBg:{value:new Te(0,0,0)},uSat:{value:1},uContrast:{value:1},uExposure:{value:1},uTwinkle:{value:.5},uSmear:{value:0}},vertexShader:ov,fragmentShader:`
    uniform sampler2D tSrc; uniform vec2 uGrid; uniform float uCell, uTime, uShape, uGap, uLevels, uMono, uSat, uContrast, uExposure, uTwinkle, uSmear;
    uniform vec3 uInk, uPaper, uBg;
    varying vec2 vUv;
    float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
    float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
    float bayer8(vec2 a){ return bayer4(0.5 * a) * 0.25 + bayer2(a); }
    float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
    float luma(vec3 c){ return dot(c, vec3(0.299, 0.587, 0.114)); }
    vec3 cellColor(vec2 c){
      vec2 uv = (c + 0.5) / uGrid;
      vec3 col = texture2D(tSrc, uv).rgb;
      if (uSmear > 0.0) {
        // Columns drip: some cells borrow light from the cells above them.
        float lane = h(vec2(c.x, floor(uTime * 3.0 + h(vec2(c.x, 7.0)) * 9.0)));
        float reach = lane * lane * lane * uSmear;
        for (int k = 1; k <= 6; k++) {
          vec3 s = texture2D(tSrc, uv + vec2(0.0, reach * float(k) / 6.0)).rgb;
          col = max(col, s * (1.0 - float(k) / 7.5));
        }
      }
      return col * uExposure;
    }
    void main(){
      vec2 p = vUv * uGrid;
      vec2 cell = floor(p), f = fract(p);
      vec3 col = cellColor(cell);
      col = max((col - 0.5) * uContrast + 0.5, 0.0);
      float l = luma(col);
      col = max(mix(vec3(l), col, uSat), 0.0);
      float t = bayer8(cell) - 0.5;
      vec3 q; float lit;
      if (uMono > 0.5) {
        float lv = clamp(floor(l * uLevels + t + 0.5) / uLevels, 0.0, 1.0);
        q = mix(uPaper, uInk, lv); lit = 1.0;
      } else {
        q = clamp(floor(col * uLevels + t + 0.5) / uLevels, 0.0, 1.0);
        lit = step(0.01, max(q.r, max(q.g, q.b)));
      }
      float mask;
      vec2 d = abs(f - 0.5);
      if (uShape < 0.5) mask = step(max(d.x, d.y), 0.5 - uGap);
      else if (uShape < 1.5) mask = smoothstep(0.5 - uGap, 0.42 - uGap, length(f - 0.5) * (1.25 - 0.35 * l));
      else mask = step(d.x, 0.5 - uGap) * (0.75 + 0.25 * smoothstep(0.5, 0.0, d.y));
      vec3 outc = mix(uBg, q, mask * lit);
      // Twinkles: a lit cell nearby flares with a small four-point star.
      float tw = 0.0;
      for (int j = -2; j <= 2; j++) for (int i = -2; i <= 2; i++) {
        vec2 nc = cell + vec2(float(i), float(j));
        float phase = uTime * 0.9 + h(nc) * 11.0;
        float pick = h(nc + floor(phase) * 13.17);
        if (pick > 1.0 - uTwinkle * 0.02) {
          float nl = luma(cellColor(nc));
          if (nl > 0.18) {
            float life = sin(fract(phase) * 3.14159);
            vec2 o = p - (nc + 0.5);
            float star = exp(-dot(o, o) * 4.0) + 0.55 * (exp(-abs(o.y) * 7.0 - abs(o.x) * 1.1) + exp(-abs(o.x) * 7.0 - abs(o.y) * 1.1));
            tw += star * life * life * min(1.0, nl * 1.6);
          }
        }
      }
      outc += vec3(1.0, 0.96, 0.9) * tw * 1.4;
      gl_FragColor = vec4(outc, 1.0);
    }`},x2={uniforms:{tDiffuse:{value:null},uCenter:{value:new ye(.5,.5)},uStrength:{value:.5}},vertexShader:ov,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec3 base = texture2D(tDiffuse, vUv).rgb, acc = vec3(0.0);
      vec2 step = (vUv - uCenter) * 0.022, uv = vUv; float w = 1.0;
      for (int i = 0; i < 40; i++) { uv -= step; acc += max(texture2D(tDiffuse, uv).rgb - 0.6, 0.0) * w; w *= 0.955; }
      gl_FragColor = vec4(base + acc * uStrength / 20.0, 1.0);
    }`},Qd=class{constructor(e,t,n){this.host=e;this.subject=t;this.opts=n;this.renderer=new li({antialias:!1,powerPreference:"high-performance"}),this.dpr=Math.min(devicePixelRatio||1,1.5),this.renderer.setPixelRatio(this.dpr),this.renderer.outputColorSpace=Zt,this.renderer.toneMapping=Vi,e.append(this.renderer.domElement),this.src=new un(4,4,{type:Tn,samples:4,minFilter:jt,magFilter:jt}),this.composer=new nl(this.renderer),this.look=new Wo(_2);let i=this.look.uniforms;i.tSrc.value=this.src.texture,i.uShape.value=n.shape==="pixel"?0:n.shape==="led"?1:2,i.uGap.value=n.gap,i.uLevels.value=n.levels,i.uMono.value=n.mono?1:0,n.mono&&(i.uInk.value.set(n.mono.ink).convertSRGBToLinear(),i.uPaper.value.set(n.mono.paper).convertSRGBToLinear()),i.uBg.value.set(n.background).convertSRGBToLinear(),i.uSat.value=n.saturation??1,i.uContrast.value=n.contrast??1,i.uExposure.value=n.exposure??1,i.uTwinkle.value=n.twinkle,i.uSmear.value=n.smear??0,this.composer.addPass(this.look),n.rays&&(this.rays=new Wo(x2),this.rays.uniforms.uStrength.value=n.rays,this.composer.addPass(this.rays)),this.bloom=new eo(new ye(256,256),...n.bloom),this.composer.addPass(this.bloom),this.composer.addPass(new il),this.resize()}host;subject;opts;renderer;src;composer;look;rays;bloom;dpr;resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(e,t),this.bloom.resolution.set(e/2,t/2);let n=Math.ceil(e/this.opts.cell),i=Math.ceil(t/this.opts.cell);this.src.setSize(n,i),this.look.uniforms.uGrid.value.set(n,i),this.subject.camera.aspect=e/t,this.subject.camera.updateProjectionMatrix(),this.subject.resize?.(e/t)}render(e,t){this.subject.update(e,t),this.look.uniforms.uTime.value=e,this.rays&&this.subject.focus&&this.rays.uniforms.uCenter.value.copy(this.subject.focus()),this.renderer.setRenderTarget(this.src),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.subject.scene,this.subject.camera),this.renderer.setRenderTarget(null),this.composer.render()}dispose(){this.subject.scene.traverse(e=>{let t=e;t.geometry?.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(n=>{Object.values(n).forEach(i=>i instanceof Un&&i.dispose()),n.dispose()})}),this.src.dispose(),this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};var ef=3,Ir=()=>((ef=ef*16807%2147483647)-1)/2147483646;function v2(){let r=new Mo;return r.moveTo(.02,.04),r.bezierCurveTo(.18,.55,.52,.98,1.04,1.04),r.bezierCurveTo(1.2,.84,1.16,.46,1,.2),r.bezierCurveTo(.76,.02,.42,-.04,.08,-.04),r}function y2(){let r=new Mo;return r.moveTo(.04,-.02),r.bezierCurveTo(.42,.06,.84,0,.88,-.32),r.bezierCurveTo(.9,-.62,.62,-.86,.44,-.84),r.bezierCurveTo(.36,-.98,.3,-1.12,.24,-1.1),r.bezierCurveTo(.22,-.92,.18,-.6,.06,-.16),r}function b2(r,e,t){ef=t?7:19;let n=512,i=document.createElement("canvas");i.width=i.height=n;let s=i.getContext("2d"),o=p=>(p-e.min.x)/(e.max.x-e.min.x)*n,a=p=>n-(p-e.min.y)/(e.max.y-e.min.y)*n,l=new Path2D;r.getPoints(80).forEach((p,_)=>_?l.lineTo(o(p.x),a(p.y)):l.moveTo(o(p.x),a(p.y))),l.closePath(),s.save(),s.clip(l);let c=[o(.02),a(0)],h=s.createRadialGradient(c[0],c[1],0,c[0],c[1],n*1.1);h.addColorStop(0,"#f7f0c8"),h.addColorStop(.35,"#f2c9a6"),h.addColorStop(.7,"#e9a9c7"),h.addColorStop(1,"#b7a6ef"),s.fillStyle=h,s.fillRect(0,0,n,n);for(let p=0;p<5e3;p++)s.fillStyle=`rgba(${Ir()>.5?"255,255,240":"120,90,120"},${Ir()*.35})`,s.fillRect(Ir()*n,Ir()*n,2,2);s.strokeStyle="rgba(40,24,36,0.85)",s.lineCap="round";let u=t?9:7,f=[];for(let p=0;p<u;p++){let _=t?.15+p/(u-1)*1.05:-1.45+p/(u-1)*1.3,m=c[0]+Math.cos(_)*n*1.3,y=c[1]-Math.sin(_)*n*1.3;s.lineWidth=5-p*.25,s.beginPath(),s.moveTo(c[0],c[1]),s.quadraticCurveTo((c[0]+m)/2+(Ir()-.5)*40,(c[1]+y)/2+(Ir()-.5)*40,m,y),s.stroke(),f.push([m,y])}s.lineWidth=2.5;for(let p of[.32,.52])s.beginPath(),f.forEach(([_,m],y)=>{let x=c[0]+(_-c[0])*p*(.9+Ir()*.2),v=c[1]+(m-c[1])*p*(.9+Ir()*.2);y?s.lineTo(x,v):s.moveTo(x,v)}),s.stroke();s.restore(),s.save(),s.clip(l),s.strokeStyle="rgba(34,20,34,0.95)",s.lineWidth=n*.13,s.stroke(l),r.getSpacedPoints(t?26:22).forEach((p,_)=>{if(Math.hypot(p.x,p.y)<.35)return;let m=o(p.x),y=a(p.y),x=o(.4),v=a(t?.4:-.35);for(let[M,S,w]of[[.075,9,"#fff5d8"],[.15,6,"#f6c2e0"]]){let C=m+(x-m)*M,b=y+(v-y)*M;s.fillStyle=w,s.beginPath(),s.arc(C,b,S*(_%2?.8:1.1),0,7),s.fill()}}),s.restore();let g=new Er(i);return g.colorSpace=Zt,g}function M2(r,e){let t=new ac(r,40);t.computeBoundingBox();let n=t.boundingBox,i=new dc(new ye(n.min.x,n.min.y),new ye(n.max.x,n.max.y)),s=t.getAttribute("position"),o=t.getAttribute("uv");for(let l=0;l<s.count;l++)o.setXY(l,(s.getX(l)-i.min.x)/(i.max.x-i.min.x),(s.getY(l)-i.min.y)/(i.max.y-i.min.y));let a=new Nt({side:Sn,uniforms:{map:{value:b2(r,i,e)},uTime:{value:0}},vertexShader:`
      varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,fragmentShader:`
      uniform sampler2D map; uniform float uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.5) discard;
        float facing = abs(dot(normalize(vN), vV));
        // Thin film: the hue walks as the wing turns toward and away from the viewer.
        vec3 film = 0.5 + 0.5 * cos(6.2832 * (vec3(0.0, 0.33, 0.67) + facing * 1.3 + vUv.x * 0.6 + uTime * 0.05));
        vec3 c = t.rgb * mix(vec3(1.0), 0.55 + film * 0.9, 0.55);
        c *= 0.5 + 0.75 * facing;
        gl_FragColor = vec4(c * 0.8, 1.0);
      }`});return new $e(t,a)}function av(){let r=new sn,e=new Ht(34,1,.1,50);e.position.set(0,0,5.6);let t=new Je;r.add(t);let n=[];for(let p of[1,-1])for(let _ of[!0,!1]){let m=new Je,y=M2(_?v2():y2(),_);y.scale.set(p,1,1),m.add(y),t.add(m),n.push({pivot:m,side:p,fore:_,mats:y.material})}let i=new Pn({color:new Te("#4fbf98")}),s=new $e(new Fa(.06,.26,6,12),i);s.position.y=0;let o=new $e(new Fa(.04,.6,6,12),new Pn({color:"#7da890"}));o.position.y=-.52;let a=new $e(new dn(.075,16,12),i);a.position.y=.27,t.add(s,o,a);let l=new zr({color:"#5d3b62"});for(let p of[1,-1]){let _=new hs(new I(0,.3,0),new I(p*.12,.55,.05),new I(p*.3,.78,.02)),m=new us(new xt().setFromPoints(_.getPoints(16)),l);t.add(m);let y=new $e(new dn(.025,8,6),l);y.position.set(p*.3,.78,.02),t.add(y)}ef=41;let c=140,h=new Float32Array(c*3),u=new Float32Array(c*3);for(let p=0;p<c;p++)u.set([(Ir()-.5)*6,(Ir()-.5)*3.6,(Ir()-.5)*2],p*3);let f=new xt;f.setAttribute("position",new Vt(h,3));let d=new Jn(f,new oi({size:.012,color:"#c9b2a8",transparent:!0,opacity:.35}));r.add(d);let g=new ye;return{scene:r,camera:e,resize(p){t.scale.setScalar(p<1?.7:1)},update(p,_){let m=.5+.5*Math.sin(p*.37),y=Math.sin(p*(2.2+m*.6)),x=.1+(.5+.5*y)*(.8-m*.45);for(let v of n)v.pivot.rotation.y=-v.side*x*(v.fore?1:.92),v.pivot.rotation.z=v.side*(v.fore?.05:-.03)*y,v.mats.uniforms.uTime.value=p;g.x+=(_.x*_.on-g.x)*.04,g.y+=(_.y*_.on-g.y)*.04,t.position.set(Math.sin(p*.21)*.08,.3+Math.sin(p*.7)*.05-y*.02,0),t.rotation.set(-.22-g.y*.25+Math.sin(p*.3)*.05,g.x*.45+Math.sin(p*.17)*.2,Math.sin(p*.23)*.06);for(let v=0;v<c;v++)h[v*3]=u[v*3]+Math.sin(p*.2+v)*.15,h[v*3+1]=(u[v*3+1]+p*.05+1.8)%3.6-1.8,h[v*3+2]=u[v*3+2];f.attributes.position.needsUpdate=!0}}}var n0=11,Ji=()=>((n0=n0*16807%2147483647)-1)/2147483646;function t0(r,e,t,n=.7){let i=new On(1,1,6,10),s=i.getAttribute("position");for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getY(o)+.5,c=Math.pow(Math.sin(Math.PI*Math.min(1,l*.92+.04)),n)*e,h=a*c;s.setXYZ(o,h,l*r,h*h*t+l*l*r*.12)}return i.computeVertexNormals(),i}function lv(){let r=new sn,e=new Ht(40,1,.1,60);e.position.set(0,.6,7),e.lookAt(0,.9,0),r.add(new Tr(16777215,2236962,1.4));let t=new fn(16777215,2.4);t.position.set(-4,6,6),r.add(t);let n=new $e(new On(40,22),new Nt({uniforms:{uTime:{value:0}},depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec2 p = vUv * vec2(3.2, 1.8) + vec2(uTime * 0.012, 0.0);
          float c = fbm(p + fbm(p * 0.7 + uTime * 0.01));
          float lift = smoothstep(0.1, 1.0, vUv.y) * (0.55 + 0.45 * vUv.x);
          gl_FragColor = vec4(vec3(0.02 + c * 0.14 * lift + lift * 0.05), 1.0);
        }`}));n.position.set(0,2,-9),r.add(n);let i=new bt({color:16053488,roughness:.62,side:Sn}),s=new bt({color:9079418,roughness:.9}),o=new bt({color:2895658,roughness:.9,side:Sn}),a=t0(.42,.12,.9,.55),l=t0(.5,.3,1.4,.9),c=t0(.7,.12,.5,.6),h=[];n0=11;for(let f=0;f<64;f++){let d=-3.5+Ji()*4.6,g=(Ji()-.5)*(12+-d*1.4),p=1+Ji()*1.5+(d<-1?.6:0),_=new Je;_.position.set(g,-2.6,d),r.add(_);let m=(Ji()-.5)*.5,y=new hs(new I(0,0,0),new I(m*.6,p*.55,0),new I(m,p,0));_.add(new $e(new Sr(y,10,.018,5),o));for(let b=0;b<2;b++){let E=new $e(c,o);E.position.copy(y.getPoint(.2+b*.25)),E.rotation.set(.3,Ji()*6.28,(b?-1:1)*(.8+Ji()*.4)),E.scale.setScalar(.6+Ji()*.4),_.add(E)}let x=new Je;x.position.copy(y.getPoint(1)),_.add(x);let v=Ji()>.55,M=v?8:15,S=[];for(let b=0;b<M;b++){let E=new Je;E.rotation.z=b/M*Math.PI*2+Ji()*.1;let P=new $e(v?l:a,i);E.add(P),x.add(E),S.push(P)}let w=new $e(new dn(v?.09:.11,14,10),s);w.scale.z=.5,x.add(w);let C=.55+Ji()*.45;x.scale.setScalar(C),h.push({root:_,head:x,petals:S,x:g,phase:Ji()*6.28,delay:.2+(g+8)*.12+Ji()*.5,tilt:(Ji()-.5)*.9})}let u={x:0,s:0};return{scene:r,camera:e,resize(f){e.position.z=f<1?11:7},update(f,d){n.material.uniforms.uTime.value=f,u.x+=(d.x*7-u.x)*.08,u.s+=(d.on-u.s)*.05;for(let g of h){let p=Ro.smoothstep(f,g.delay,g.delay+2.4),_=Math.sin(f*.8+g.phase)*.04;g.petals.forEach((v,M)=>{v.rotation.x=1.4*(1-p)+.14+_+M%2*.06});let m=Math.sin(f*.9-g.x*.35)*.07+Math.sin(f*2.3+g.phase)*.015,y=g.x-u.x,x=u.s*Math.exp(-(y*y)/3)*Math.sign(y||1)*.3;g.root.rotation.z=-(m+x),g.head.rotation.set(-.35+Math.sin(f*.6+g.phase)*.05,g.tilt,0)}}}}var cv=23,Jo=()=>((cv=cv*16807%2147483647)-1)/2147483646;function E2(r,e){let t=new On(1,1,8,14),n=t.getAttribute("position"),i=[],s=new Te("#fff3df"),o=new Te("#ff9ccc"),a=new Te("#ff3d96"),l=new Te;for(let c=0;c<n.count;c++){let h=n.getX(c),u=n.getY(c)+.5,f=Math.pow(Math.sin(Math.PI*Math.pow(u,.75)),.55)*e*(1-u*.1),d=h*f;n.setXYZ(c,d,u*r,-d*d*2.2/e+Math.pow(u,2.4)*r*.22),l.copy(s).lerp(o,Ro.smoothstep(u,.05,.55)).lerp(a,Ro.smoothstep(u,.6,1)*(.6+Math.abs(h)*.8)),i.push(l.r,l.g,l.b)}return t.setAttribute("color",new lt(i,3)),t.computeVertexNormals(),t}function uv(){let r=new sn,e=new Ht(32,1,.1,50);e.position.set(0,2.4,8),e.lookAt(0,.35,0),r.add(new wr(16766696,.35));let t=new fn(16773364,1.1);t.position.set(2,4,3),r.add(t);let n=new Ri(16763034,3,3.2,1.6);n.position.set(0,.45,0),r.add(n);let i=new Je;r.add(i);let s=new bt({vertexColors:!0,roughness:.55,side:Sn,emissive:new Te("#ff6fae"),emissiveIntensity:.08}),o=[{n:11,len:.95,w:.6,open:1.32,y:-.04,twist:0},{n:10,len:.95,w:.58,open:.86,y:0,twist:.3},{n:8,len:.85,w:.54,open:.44,y:.05,twist:.1},{n:6,len:.62,w:.46,open:.16,y:.1,twist:.5}],a=[];o.forEach((m,y)=>{let x=E2(m.len,m.w);for(let v=0;v<m.n;v++){let M=new Je;M.rotation.y=v/m.n*Math.PI*2+m.twist,M.position.y=m.y;let S=new Je;S.position.z=.1+y*-.02,M.add(S);let w=new $e(x,s);S.add(w),i.add(M),a.push({m:S,ring:y,jitter:(Jo()-.5)*.12})}});let l=new $e(new Mn(.17,.12,.14,24),new bt({color:"#f6d36a",emissive:"#ffb340",emissiveIntensity:.35}));l.position.y=.32,i.add(l);let c=new Pn({color:new Te("#ffd98a")});for(let m=0;m<46;m++){let y=Jo()*Math.PI*2,x=.17+Jo()*.06,v=.12+Jo()*.1,M=new $e(new Mn(.006,.006,v,4),c);M.position.set(Math.cos(y)*x,.32+v/2,Math.sin(y)*x),M.rotation.set(Math.sin(y)*.5,0,-Math.cos(y)*.5),i.add(M)}let h=50,u=new Float32Array(h*3),f=new Float32Array(h*3);for(let m=0;m<h;m++)f.set([Jo()*Math.PI*2,Jo(),Jo()],m*3);let d=new xt;d.setAttribute("position",new Vt(u,3)),r.add(new Jn(d,new oi({size:.014,color:"#b98aa4"})));let g=new ye,p=new I,_=new ye;return{scene:r,camera:e,focus(){return p.set(0,.45,0).applyMatrix4(i.matrixWorld).project(e),_.set(p.x*.5+.5,p.y*.5+.5)},resize(m){i.scale.setScalar(m<1?.7:1)},update(m,y){let x=Ro.smoothstep(m,.2,3.2),v=Math.sin(m*.55)*.07;for(let{m:M,ring:S,jitter:w}of a){let C=o[S];M.rotation.x=.08+(C.open+v*(1+S*.5)+w)*x}g.x+=(y.x*y.on-g.x)*.035,g.y+=(y.y*y.on-g.y)*.035,i.rotation.set(g.y*.25,m*.08+g.x*.5,g.x*-.08),i.position.y=Math.sin(m*.5)*.04,n.intensity=3+Math.sin(m*1.3)*.6+Math.sin(m*3.1)*.25;for(let M=0;M<h;M++){let S=f[M*3],w=(f[M*3+1]+m*(.05+f[M*3+2]*.06))%1,C=.15+w*(.6+f[M*3+2]);u.set([Math.cos(S+w*2)*C,.35+w*2.6,Math.sin(S+w*2)*C],M*3)}d.attributes.position.needsUpdate=!0}}}var S2={halcyon:[av,{cell:5,shape:"pixel",gap:.06,levels:4,saturation:1.25,exposure:.9,twinkle:.45,bloom:[.35,.4,.62],background:"#141414"}],bloomfield:[lv,{cell:7,shape:"pixel",gap:.13,levels:7,mono:{ink:"#f2f2ee",paper:"#0b0b0b"},contrast:1.2,exposure:1.05,twinkle:.25,bloom:[.32,.4,.55],background:"#050505"}],aurelle:[uv,{cell:4,shape:"streak",gap:.1,levels:5,smear:.045,rays:.5,saturation:1.15,exposure:.85,twinkle:.35,bloom:[.7,.6,.45],background:"#0a0809"}]};function hv(r,e){let t=document.querySelector(".lv-art");if(!t)return;let n;try{let[p,_]=S2[r];n=new Qd(t,p(),_)}catch{t.classList.add("is-fallback");return}let i={x:0,y:0,on:0},s=p=>{let _=t.getBoundingClientRect();i.x=(p.clientX-_.left)/_.width*2-1,i.y=(p.clientY-_.top)/_.height*2-1,i.on=p.clientY>=_.top&&p.clientY<=_.bottom&&p.pointerType!=="touch"?1:0};window.addEventListener("pointermove",s,{passive:!0});let o=performance.now(),a=0,l=!0,c=()=>n.render(7,i),h=p=>{a=0,!(!l||document.hidden)&&(n.render((p-o)/1e3,i),a=requestAnimationFrame(h))},u=()=>{!a&&l&&!document.hidden&&!e&&(a=requestAnimationFrame(h))},f=new IntersectionObserver(([p])=>{l=p.isIntersecting,l&&u()});f.observe(t);let d=()=>{n.resize(),e&&c()},g=()=>document.hidden?(cancelAnimationFrame(a),a=0):u();return window.addEventListener("resize",d),document.addEventListener("visibilitychange",g),e?c():(u(),ue.from(".lv-nav",{autoAlpha:0,y:-14,duration:.9,ease:"power2.out",delay:.2}),ue.from(".lv-rise",{autoAlpha:0,y:34,duration:1.3,stagger:.12,ease:"power3.out",delay:.45}),ue.utils.toArray(".lv-reveal").forEach(p=>ue.from(p,{autoAlpha:0,y:50,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:p,start:"top 86%"}})),ue.from(".lv-marks .wm",{autoAlpha:0,y:16,stagger:.08,duration:.8,scrollTrigger:{trigger:".lv-band",start:"top 85%"}})),()=>{cancelAnimationFrame(a),f.disconnect(),window.removeEventListener("pointermove",s),window.removeEventListener("resize",d),document.removeEventListener("visibilitychange",g),n.dispose()}}var T2=["halcyon","bloomfield","aurelle"],i0=r=>T2.includes(r);function dv(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function w2(r,e,t){return e&&dv(r.prototype,e),t&&dv(r,t),r}var ni,rf,A2,Ki,oo,ao,ul,pv,Ko,Jc,mv,bs,Lr,gv,_v=function(){return ni||typeof window<"u"&&(ni=window.gsap)&&ni.registerPlugin&&ni},xv=1,cl=[],Tt=[],Dr=[],Kc=Date.now,r0=function(e,t){return t},R2=function(){var e=Jc.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,Tt),i.push.apply(i,Dr),Tt=n,Dr=i,r0=function(o,a){return t[o](a)}},Es=function(e,t){return~Dr.indexOf(e)&&Dr[Dr.indexOf(e)+1][t]},jc=function(e){return!!~mv.indexOf(e)},bi=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},yi=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},tf="scrollLeft",nf="scrollTop",s0=function(){return bs&&bs.isPressed||Tt.cache++},sf=function(e,t){var n=function i(s){if(s||s===0){xv&&(Ki.history.scrollRestoration="manual");var o=bs&&bs.isPressed;s=i.v=Math.round(s)||(bs&&bs.iOS?1:0),e(s),i.cacheID=Tt.cache,o&&r0("ss",s)}else(t||Tt.cache!==i.cacheID||r0("ref"))&&(i.cacheID=Tt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},hi={s:tf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:sf(function(r){return arguments.length?Ki.scrollTo(r,Fn.sc()):Ki.pageXOffset||oo[tf]||ao[tf]||ul[tf]||0})},Fn={s:nf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:hi,sc:sf(function(r){return arguments.length?Ki.scrollTo(hi.sc(),r):Ki.pageYOffset||oo[nf]||ao[nf]||ul[nf]||0})},Mi=function(e,t){return(t&&t._ctx&&t._ctx.selector||ni.utils.toArray)(e)[0]||(typeof e=="string"&&ni.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},C2=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Ms=function(e,t){var n=t.s,i=t.sc;jc(e)&&(e=oo.scrollingElement||ao);var s=Tt.indexOf(e),o=i===Fn.sc?1:2;!~s&&(s=Tt.push(e)-1),Tt[s+o]||bi(e,"scroll",s0);var a=Tt[s+o],l=a||(Tt[s+o]=sf(Es(e,n),!0)||(jc(e)?i:sf(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ni.getProperty(e,"scrollBehavior")==="smooth"),l},of=function(e,t,n){var i=e,s=e,o=Kc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,p){var _=Kc();p||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(g){var p=a,_=s,m=Kc();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-p)*1e3};return{update:h,reset:u,getVelocity:f}},Zc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},fv=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},vv=function(){Jc=ni.core.globals().ScrollTrigger,Jc&&Jc.core&&R2()},yv=function(e){return ni=e||_v(),!rf&&ni&&typeof document<"u"&&document.body&&(Ki=window,oo=document,ao=oo.documentElement,ul=oo.body,mv=[Ki,oo,ao,ul],A2=ni.utils.clamp,gv=ni.core.context||function(){},Ko="onpointerenter"in ul?"pointer":"mouse",pv=Rn.isTouch=Ki.matchMedia&&Ki.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Ki||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Lr=Rn.eventTypes=("ontouchstart"in ao?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in ao?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return xv=0},500),vv(),rf=1),rf};hi.op=Fn;Tt.cache=0;var Rn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){rf||yv(ni)||console.warn("Please gsap.registerPlugin(Observer)"),Jc||vv();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,_=n.onDragStart,m=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,S=n.onLeft,w=n.onUp,C=n.onDown,b=n.onChangeX,E=n.onChangeY,P=n.onChange,N=n.onToggleX,B=n.onToggleY,H=n.onHover,Z=n.onHoverEnd,W=n.onMove,X=n.ignoreCheck,O=n.isNormalizer,V=n.onGestureStart,A=n.onGestureEnd,K=n.onWheel,ce=n.onEnable,pe=n.onDisable,Ee=n.onClick,Be=n.scrollSpeed,te=n.capture,re=n.allowClicks,we=n.lockAxis,Oe=n.onLockAxis;this.target=a=Mi(a)||ao,this.vars=n,d&&(d=ni.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,Be=Be||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Ki.getComputedStyle(ul).lineHeight)||22);var Pe,qe,at,Fe,Xe,Ze,He,Q=this,k=0,gt=0,dt=n.passive||!h&&n.passive!==!1,Qe=Ms(a,hi),ke=Ms(a,Fn),D=Qe(),T=ke(),L=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Lr[0]==="pointerdown",U=jc(a),z=a.ownerDocument||oo,G=[0,0,0],xe=[0,0,0],oe=0,Ie=function(){return oe=Kc()},Le=function(Ne,st){return(Q.event=Ne)&&d&&C2(Ne.target,d)||st&&L&&Ne.pointerType!=="touch"||X&&X(Ne,st)},de=function(){Q._vx.reset(),Q._vy.reset(),qe.pause(),u&&u(Q)},he=function(){var Ne=Q.deltaX=fv(G),st=Q.deltaY=fv(xe),Ce=Math.abs(Ne)>=i,nt=Math.abs(st)>=i;P&&(Ce||nt)&&P(Q,Ne,st,G,xe),Ce&&(M&&Q.deltaX>0&&M(Q),S&&Q.deltaX<0&&S(Q),b&&b(Q),N&&Q.deltaX<0!=k<0&&N(Q),k=Q.deltaX,G[0]=G[1]=G[2]=0),nt&&(C&&Q.deltaY>0&&C(Q),w&&Q.deltaY<0&&w(Q),E&&E(Q),B&&Q.deltaY<0!=gt<0&&B(Q),gt=Q.deltaY,xe[0]=xe[1]=xe[2]=0),(Fe||at)&&(W&&W(Q),at&&(_&&at===1&&_(Q),y&&y(Q),at=0),Fe=!1),Ze&&!(Ze=!1)&&Oe&&Oe(Q),Xe&&(K(Q),Xe=!1),Pe=0},Ue=function(Ne,st,Ce){G[Ce]+=Ne,xe[Ce]+=st,Q._vx.update(Ne),Q._vy.update(st),c?Pe||(Pe=requestAnimationFrame(he)):he()},ne=function(Ne,st){we&&!He&&(Q.axis=He=Math.abs(Ne)>Math.abs(st)?"x":"y",Ze=!0),He!=="y"&&(G[2]+=Ne,Q._vx.update(Ne,!0)),He!=="x"&&(xe[2]+=st,Q._vy.update(st,!0)),c?Pe||(Pe=requestAnimationFrame(he)):he()},j=function(Ne){if(!Le(Ne,1)){Ne=Zc(Ne,h);var st=Ne.clientX,Ce=Ne.clientY,nt=st-Q.x,We=Ce-Q.y,ft=Q.isDragging;Q.x=st,Q.y=Ce,(ft||(nt||We)&&(Math.abs(Q.startX-st)>=s||Math.abs(Q.startY-Ce)>=s))&&(at||(at=ft?2:1),ft||(Q.isDragging=!0),ne(nt,We))}},fe=Q.onPress=function(_e){Le(_e,1)||_e&&_e.button||(Q.axis=He=null,qe.pause(),Q.isPressed=!0,_e=Zc(_e),k=gt=0,Q.startX=Q.x=_e.clientX,Q.startY=Q.y=_e.clientY,Q._vx.reset(),Q._vy.reset(),bi(O?a:z,Lr[1],j,dt,!0),Q.deltaX=Q.deltaY=0,x&&x(Q))},F=Q.onRelease=function(_e){if(!Le(_e,1)){yi(O?a:z,Lr[1],j,!0);var Ne=!isNaN(Q.y-Q.startY),st=Q.isDragging,Ce=st&&(Math.abs(Q.x-Q.startX)>3||Math.abs(Q.y-Q.startY)>3),nt=Zc(_e);!Ce&&Ne&&(Q._vx.reset(),Q._vy.reset(),h&&re&&ni.delayedCall(.08,function(){if(Kc()-oe>300&&!_e.defaultPrevented){if(_e.target.click)_e.target.click();else if(z.createEvent){var We=z.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,Ki,1,nt.screenX,nt.screenY,nt.clientX,nt.clientY,!1,!1,!1,!1,0,null),_e.target.dispatchEvent(We)}}})),Q.isDragging=Q.isGesturing=Q.isPressed=!1,u&&st&&!O&&qe.restart(!0),at&&he(),m&&st&&m(Q),v&&v(Q,Ce)}},be=function(Ne){return Ne.touches&&Ne.touches.length>1&&(Q.isGesturing=!0)&&V(Ne,Q.isDragging)},me=function(){return(Q.isGesturing=!1)||A(Q)},Re=function(Ne){if(!Le(Ne)){var st=Qe(),Ce=ke();Ue((st-D)*Be,(Ce-T)*Be,1),D=st,T=Ce,u&&qe.restart(!0)}},ge=function(Ne){if(!Le(Ne)){Ne=Zc(Ne,h),K&&(Xe=!0);var st=(Ne.deltaMode===1?l:Ne.deltaMode===2?Ki.innerHeight:1)*g;Ue(Ne.deltaX*st,Ne.deltaY*st,0),u&&!O&&qe.restart(!0)}},ae=function(Ne){if(!Le(Ne)){var st=Ne.clientX,Ce=Ne.clientY,nt=st-Q.x,We=Ce-Q.y;Q.x=st,Q.y=Ce,Fe=!0,u&&qe.restart(!0),(nt||We)&&ne(nt,We)}},Ae=function(Ne){Q.event=Ne,H(Q)},le=function(Ne){Q.event=Ne,Z(Q)},Y=function(Ne){return Le(Ne)||Zc(Ne,h)&&Ee(Q)};qe=Q._dc=ni.delayedCall(f||.25,de).pause(),Q.deltaX=Q.deltaY=0,Q._vx=of(0,50,!0),Q._vy=of(0,50,!0),Q.scrollX=Qe,Q.scrollY=ke,Q.isDragging=Q.isGesturing=Q.isPressed=!1,gv(this),Q.enable=function(_e){return Q.isEnabled||(bi(U?z:a,"scroll",s0),o.indexOf("scroll")>=0&&bi(U?z:a,"scroll",Re,dt,te),o.indexOf("wheel")>=0&&bi(a,"wheel",ge,dt,te),(o.indexOf("touch")>=0&&pv||o.indexOf("pointer")>=0)&&(bi(a,Lr[0],fe,dt,te),bi(z,Lr[2],F),bi(z,Lr[3],F),re&&bi(a,"click",Ie,!0,!0),Ee&&bi(a,"click",Y),V&&bi(z,"gesturestart",be),A&&bi(z,"gestureend",me),H&&bi(a,Ko+"enter",Ae),Z&&bi(a,Ko+"leave",le),W&&bi(a,Ko+"move",ae)),Q.isEnabled=!0,Q.isDragging=Q.isGesturing=Q.isPressed=Fe=at=!1,Q._vx.reset(),Q._vy.reset(),D=Qe(),T=ke(),_e&&_e.type&&fe(_e),ce&&ce(Q)),Q},Q.disable=function(){Q.isEnabled&&(cl.filter(function(_e){return _e!==Q&&jc(_e.target)}).length||yi(U?z:a,"scroll",s0),Q.isPressed&&(Q._vx.reset(),Q._vy.reset(),yi(O?a:z,Lr[1],j,!0)),yi(U?z:a,"scroll",Re,te),yi(a,"wheel",ge,te),yi(a,Lr[0],fe,te),yi(z,Lr[2],F),yi(z,Lr[3],F),yi(a,"click",Ie,!0),yi(a,"click",Y),yi(z,"gesturestart",be),yi(z,"gestureend",me),yi(a,Ko+"enter",Ae),yi(a,Ko+"leave",le),yi(a,Ko+"move",ae),Q.isEnabled=Q.isPressed=Q.isDragging=!1,pe&&pe(Q))},Q.kill=Q.revert=function(){Q.disable();var _e=cl.indexOf(Q);_e>=0&&cl.splice(_e,1),bs===Q&&(bs=0)},cl.push(Q),O&&jc(a)&&(bs=Q),Q.enable(p)},w2(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Rn.version="3.14.2";Rn.create=function(r){return new Rn(r)};Rn.register=yv;Rn.getAll=function(){return cl.slice()};Rn.getById=function(r){return cl.filter(function(e){return e.vars.id===r})[0]};_v()&&ni.registerPlugin(Rn);var Ke,fl,At,an,er,Xt,y0,Mf,du,su,eu,af,di,Tf,f0,Si,bv,Mv,pl,Bv,o0,kv,Ei,p0,Hv,zv,lo,m0,b0,ml,M0,ou,g0,a0,lf=1,fi=Date.now,l0=fi(),pr=0,tu=0,Ev=function(e,t,n){var i=Qi(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Sv=function(e,t){return t&&(!Qi(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},P2=function r(){return tu&&requestAnimationFrame(r)},Tv=function(){return Tf=1},wv=function(){return Tf=0},jr=function(e){return e},nu=function(e){return Math.round(e*1e5)/1e5||0},Vv=function(){return typeof window<"u"},Gv=function(){return Ke||Vv()&&(Ke=window.gsap)&&Ke.registerPlugin&&Ke},ia=function(e){return!!~y0.indexOf(e)},Wv=function(e){return(e==="Height"?M0:At["inner"+e])||er["client"+e]||Xt["client"+e]},Xv=function(e){return Es(e,"getBoundingClientRect")||(ia(e)?function(){return bf.width=At.innerWidth,bf.height=M0,bf}:function(){return Ss(e)})},I2=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Es(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Wv(s):e["client"+s])||0}},L2=function(e,t){return!t||~Dr.indexOf(e)?Xv(e):function(){return bf}},Qr=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Es(e,n))?o()-Xv(e)()[s]:ia(e)?(er[n]||Xt[n])-Wv(i):e[n]-e["offset"+i])},cf=function(e,t){for(var n=0;n<pl.length;n+=3)(!t||~t.indexOf(pl[n+1]))&&e(pl[n],pl[n+1],pl[n+2])},Qi=function(e){return typeof e=="string"},pi=function(e){return typeof e=="function"},iu=function(e){return typeof e=="number"},jo=function(e){return typeof e=="object"},Qc=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},c0=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},hl=Math.abs,qv="left",Yv="top",E0="right",S0="bottom",ea="width",ta="height",au="Right",lu="Left",cu="Top",uu="Bottom",Nn="padding",dr="margin",_l="Width",T0="Height",zn="px",fr=function(e){return At.getComputedStyle(e)},D2=function(e){var t=fr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Av=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ss=function(e,t){var n=t&&fr(e)[f0]!=="matrix(1, 0, 0, 1, 0, 0)"&&Ke.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Ef=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},$v=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},F2=function(e){return function(t){return Ke.utils.snap($v(e),t)}},w0=function(e){var t=Ke.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},N2=function(e){return function(t,n){return w0($v(e))(t,n.direction)}},uf=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},hf=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Rv={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},df={toggleActions:"play",anticipatePin:0},Sf={top:0,left:0,center:.5,bottom:1,right:1},_f=function(e,t){if(Qi(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sf?Sf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},ff=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,g=an.createElement("div"),p=ia(n)||Es(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=p?Xt:n,y=e.indexOf("start")!==-1,x=y?c:h,v="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(v+=(i===Fn?E0:S0)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=y,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=v,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],xf(g,0,i,y),g},xf=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+_l]=1,s["border"+a+_l]=0,s[n.p]=t+"px",Ke.set(e,s)},wt=[],_0={},fu,Cv=function(){return fi()-pr>34&&(fu||(fu=requestAnimationFrame(Ts)))},dl=function(){(!Ei||!Ei.isPressed||Ei.startX>Xt.clientWidth)&&(Tt.cache++,Ei?fu||(fu=requestAnimationFrame(Ts)):Ts(),pr||sa("scrollStart"),pr=fi())},u0=function(){zv=At.innerWidth,Hv=At.innerHeight},ru=function(e){Tt.cache++,(e===!0||!di&&!kv&&!an.fullscreenElement&&!an.webkitFullscreenElement&&(!p0||zv!==At.innerWidth||Math.abs(At.innerHeight-Hv)>At.innerHeight*.25))&&Mf.restart(!0)},ra={},U2=[],Zv=function r(){return Yn(vt,"scrollEnd",r)||Qo(!0)},sa=function(e){return ra[e]&&ra[e].map(function(t){return t()})||U2},ji=[],Jv=function(e){for(var t=0;t<ji.length;t+=5)(!e||ji[t+4]&&ji[t+4].query===e)&&(ji[t].style.cssText=ji[t+1],ji[t].getBBox&&ji[t].setAttribute("transform",ji[t+2]||""),ji[t+3].uncache=1)},Kv=function(){return Tt.forEach(function(e){return pi(e)&&++e.cacheID&&(e.rec=e())})},A0=function(e,t){var n;for(Si=0;Si<wt.length;Si++)n=wt[Si],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));ou=!0,t&&Jv(t),t||sa("revert")},jv=function(e,t){Tt.cache++,(t||!Ti)&&Tt.forEach(function(n){return pi(n)&&n.cacheID++&&(n.rec=0)}),Qi(e)&&(At.history.scrollRestoration=b0=e)},Ti,na=0,Pv,O2=function(){if(Pv!==na){var e=Pv=na;requestAnimationFrame(function(){return e===na&&Qo(!0)})}},Qv=function(){Xt.appendChild(ml),M0=!Ei&&ml.offsetHeight||At.innerHeight,Xt.removeChild(ml)},Iv=function(e){return du(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},Qo=function(e,t){if(er=an.documentElement,Xt=an.body,y0=[At,an,er,Xt],pr&&!e&&!ou){$n(vt,"scrollEnd",Zv);return}Qv(),Ti=vt.isRefreshing=!0,ou||Kv();var n=sa("refreshInit");Bv&&vt.sort(),t||A0(),Tt.forEach(function(i){pi(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),wt.slice(0).forEach(function(i){return i.refresh()}),ou=!1,wt.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),g0=1,Iv(!0),wt.forEach(function(i){var s=Qr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Iv(!1),g0=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),Tt.forEach(function(i){pi(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),jv(b0,1),Mf.pause(),na++,Ti=2,Ts(2),wt.forEach(function(i){return pi(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ti=vt.isRefreshing=!1,sa("refresh")},x0=0,vf=1,hu,Ts=function(e){if(e===2||!Ti&&!ou){vt.isUpdating=!0,hu&&hu.update(0);var t=wt.length,n=fi(),i=n-l0>=50,s=t&&wt[0].scroll();if(vf=x0>s?-1:1,Ti||(x0=s),i&&(pr&&!Tf&&n-pr>200&&(pr=0,sa("scrollEnd")),eu=l0,l0=n),vf<0){for(Si=t;Si-- >0;)wt[Si]&&wt[Si].update(0,i);vf=1}else for(Si=0;Si<t;Si++)wt[Si]&&wt[Si].update(0,i);vt.isUpdating=!1}fu=0},v0=[qv,Yv,S0,E0,dr+uu,dr+au,dr+cu,dr+lu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],yf=v0.concat([ea,ta,"boxSizing","max"+_l,"max"+T0,"position",dr,Nn,Nn+cu,Nn+au,Nn+uu,Nn+lu]),B2=function(e,t,n){gl(n);var i=e._gsap;if(i.spacerIsNative)gl(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},h0=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=v0.length,o=t.style,a=e.style,l;s--;)l=v0[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[S0]=a[E0]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ea]=Ef(e,hi)+zn,o[ta]=Ef(e,Fn)+zn,o[Nn]=a[dr]=a[Yv]=a[qv]="0",gl(i),a[ea]=a["max"+_l]=n[ea],a[ta]=a["max"+T0]=n[ta],a[Nn]=n[Nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},k2=/([A-Z])/g,gl=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Ke.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(k2,"-$1").toLowerCase())}},pf=function(e){for(var t=yf.length,n=e.style,i=[],s=0;s<t;s++)i.push(yf[s],n[yf[s]]);return i.t=e,i},H2=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},bf={left:0,top:0},Lv=function(e,t,n,i,s,o,a,l,c,h,u,f,d,g){pi(e)&&(e=e(l)),Qi(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?_f("0"+e.substr(3),n):0));var p=d?d.time():0,_,m,y;if(d&&d.seek(0),isNaN(e)||(e=+e),iu(e))d&&(e=Ke.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&xf(a,n,i,!0);else{pi(t)&&(t=t(l));var x=(e||"0").split(" "),v,M,S,w;y=Mi(t,l)||Xt,v=Ss(y)||{},(!v||!v.left&&!v.top)&&fr(y).display==="none"&&(w=y.style.display,y.style.display="block",v=Ss(y),w?y.style.display=w:y.style.removeProperty("display")),M=_f(x[0],v[i.d]),S=_f(x[1]||"0",n),e=v[i.p]-c[i.p]-h+M+s-S,a&&xf(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var C=e+n,b=o._isStart;_="scroll"+i.d2,xf(o,C,i,b&&C>20||!b&&(u?Math.max(Xt[_],er[_]):o.parentNode[_])<=C+1),u&&(c=Ss(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+zn))}return d&&y&&(_=Ss(y),d.seek(f),m=Ss(y),d._caScrollDist=_[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},z2=/(webkit|moz|length|cssText|inset)/i,Dv=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===Xt){e._stOrig=s.cssText,a=fr(e);for(o in a)!+o&&!z2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Ke.core.getCache(e).uncache=1,t.appendChild(e)}},ey=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},mf=function(e,t,n){var i={};i[t.p]="+="+n,Ke.set(e,i)},Fv=function(e,t){var n=Ms(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,g={};c=c||n();var p=ey(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return p(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){Tt.cache++,o.tween&&Ts()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Ke.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$n(e,"wheel",n.wheelHandler),vt.isTouch&&$n(e,"touchmove",n.wheelHandler),s},vt=(function(){function r(t,n){fl||r.register(Ke)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),m0(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!tu){this.update=this.refresh=this.kill=jr;return}n=Av(Qi(n)||iu(n)||n.nodeType?{trigger:n}:n,df);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,p=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,y=s.onSnapComplete,x=s.once,v=s.snap,M=s.pinReparent,S=s.pinSpacer,w=s.containerAnimation,C=s.fastScrollEnd,b=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?hi:Fn,P=!u&&u!==0,N=Mi(n.scroller||At),B=Ke.core.getCache(N),H=ia(N),Z=("pinType"in n?n.pinType:Es(N,"pinType")||H&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],X=P&&n.toggleActions.split(" "),O="markers"in n?n.markers:df.markers,V=H?0:parseFloat(fr(N)["border"+E.p2+_l])||0,A=this,K=n.onRefreshInit&&function(){return n.onRefreshInit(A)},ce=I2(N,H,E),pe=L2(N,H),Ee=0,Be=0,te=0,re=Ms(N,E),we,Oe,Pe,qe,at,Fe,Xe,Ze,He,Q,k,gt,dt,Qe,ke,D,T,L,U,z,G,xe,oe,Ie,Le,de,he,Ue,ne,j,fe,F,be,me,Re,ge,ae,Ae,le;if(A._startClamp=A._endClamp=!1,A._dir=E,_*=45,A.scroller=N,A.scroll=w?w.time.bind(w):re,qe=re(),A.vars=n,i=i||n.animation,"refreshPriority"in n&&(Bv=1,n.refreshPriority===-9999&&(hu=A)),B.tweenScroll=B.tweenScroll||{top:Fv(N,Fn),left:Fv(N,hi)},A.tweenTo=we=B.tweenScroll[E.p],A.scrubDuration=function(Ce){be=iu(Ce)&&Ce,be?F?F.duration(Ce):F=Ke.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:be,paused:!0,onComplete:function(){return m&&m(A)}}):(F&&F.progress(1).kill(),F=0)},i&&(i.vars.lazy=!1,i._initted&&!A.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),A.animation=i.pause(),i.scrollTrigger=A,A.scrubDuration(u),j=0,l||(l=i.vars.id)),v&&((!jo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in Xt.style&&Ke.set(H?[Xt,er]:N,{scrollBehavior:"auto"}),Tt.forEach(function(Ce){return pi(Ce)&&Ce.target===(H?an.scrollingElement||er:N)&&(Ce.smooth=!1)}),Pe=pi(v.snapTo)?v.snapTo:v.snapTo==="labels"?F2(i):v.snapTo==="labelsDirectional"?N2(i):v.directional!==!1?function(Ce,nt){return w0(v.snapTo)(Ce,fi()-Be<500?0:nt.direction)}:Ke.utils.snap(v.snapTo),me=v.duration||{min:.1,max:2},me=jo(me)?su(me.min,me.max):su(me,me),Re=Ke.delayedCall(v.delay||be/2||.1,function(){var Ce=re(),nt=fi()-Be<500,We=we.tween;if((nt||Math.abs(A.getVelocity())<10)&&!We&&!Tf&&Ee!==Ce){var ft=(Ce-Fe)/Qe,Kt=i&&!P?i.totalProgress():ft,_t=nt?0:(Kt-fe)/(fi()-eu)*1e3||0,Se=Ke.utils.clamp(-ft,1-ft,hl(_t/2)*_t/.185),tt=ft+(v.inertia===!1?0:Se),et,it,ct=v,ln=ct.onStart,Rt=ct.onInterrupt,Vn=ct.onComplete;if(et=Pe(tt,A),iu(et)||(et=tt),it=Math.max(0,Math.round(Fe+et*Qe)),Ce<=Xe&&Ce>=Fe&&it!==Ce){if(We&&!We._initted&&We.data<=hl(it-Ce))return;v.inertia===!1&&(Se=et-ft),we(it,{duration:me(hl(Math.max(hl(tt-Kt),hl(et-Kt))*.185/_t/.05||0)),ease:v.ease||"power3",data:hl(it-Ce),onInterrupt:function(){return Re.restart(!0)&&Rt&&Rt(A)},onComplete:function(){A.update(),Ee=re(),i&&!P&&(F?F.resetTo("totalProgress",et,i._tTime/i._tDur):i.progress(et)),j=fe=i&&!P?i.totalProgress():A.progress,y&&y(A),Vn&&Vn(A)}},Ce,Se*Qe,it-Ce-Se*Qe),ln&&ln(A,we.tween)}}else A.isActive&&Ee!==Ce&&Re.restart(!0)}).pause()),l&&(_0[l]=A),f=A.trigger=Mi(f||d!==!0&&d),le=f&&f._gsap&&f._gsap.stRevert,le&&(le=le(A)),d=d===!0?f:Mi(d),Qi(a)&&(a={targets:f,className:a}),d&&(g===!1||g===dr||(g=!g&&d.parentNode&&d.parentNode.style&&fr(d.parentNode).display==="flex"?!1:Nn),A.pin=d,Oe=Ke.core.getCache(d),Oe.spacer?ke=Oe.pinState:(S&&(S=Mi(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Oe.spacerIsNative=!!S,S&&(Oe.spacerState=pf(S))),Oe.spacer=L=S||an.createElement("div"),L.classList.add("pin-spacer"),l&&L.classList.add("pin-spacer-"+l),Oe.pinState=ke=pf(d)),n.force3D!==!1&&Ke.set(d,{force3D:!0}),A.spacer=L=Oe.spacer,ne=fr(d),Ie=ne[g+E.os2],z=Ke.getProperty(d),G=Ke.quickSetter(d,E.a,zn),h0(d,L,ne),T=pf(d)),O){gt=jo(O)?Av(O,Rv):Rv,Q=ff("scroller-start",l,N,E,gt,0),k=ff("scroller-end",l,N,E,gt,0,Q),U=Q["offset"+E.op.d2];var Y=Mi(Es(N,"content")||N);Ze=this.markerStart=ff("start",l,Y,E,gt,U,0,w),He=this.markerEnd=ff("end",l,Y,E,gt,U,0,w),w&&(Ae=Ke.quickSetter([Ze,He],E.a,zn)),!Z&&!(Dr.length&&Es(N,"fixedMarkers")===!0)&&(D2(H?Xt:N),Ke.set([Q,k],{force3D:!0}),de=Ke.quickSetter(Q,E.a,zn),Ue=Ke.quickSetter(k,E.a,zn))}if(w){var _e=w.vars.onUpdate,Ne=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){A.update(0,0,1),_e&&_e.apply(w,Ne||[])})}if(A.previous=function(){return wt[wt.indexOf(A)-1]},A.next=function(){return wt[wt.indexOf(A)+1]},A.revert=function(Ce,nt){if(!nt)return A.kill(!0);var We=Ce!==!1||!A.enabled,ft=di;We!==A.isReverted&&(We&&(ge=Math.max(re(),A.scroll.rec||0),te=A.progress,ae=i&&i.progress()),Ze&&[Ze,He,Q,k].forEach(function(Kt){return Kt.style.display=We?"none":"block"}),We&&(di=A,A.update(We)),d&&(!M||!A.isActive)&&(We?B2(d,L,ke):h0(d,L,fr(d),Le)),We||A.update(We),di=ft,A.isReverted=We)},A.refresh=function(Ce,nt,We,ft){if(!((di||!A.enabled)&&!nt)){if(d&&Ce&&pr){$n(r,"scrollEnd",Zv);return}!Ti&&K&&K(A),di=A,we.tween&&!We&&(we.tween.kill(),we.tween=0),F&&F.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),A.isReverted||A.revert(!0,!0),A._subPinOffset=!1;var Kt=ce(),_t=pe(),Se=w?w.duration():Qr(N,E),tt=Qe<=.01||!Qe,et=0,it=ft||0,ct=jo(We)?We.end:n.end,ln=n.endTrigger||f,Rt=jo(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Vn=A.pinnedContainer=n.pinnedContainer&&Mi(n.pinnedContainer,A),mi=f&&Math.max(0,wt.indexOf(A))||0,zt=mi,bn,Cn,tr,Fr,Et,R,$,ie,se,ee,De,Ve,J;for(O&&jo(We)&&(Ve=Ke.getProperty(Q,E.p),J=Ke.getProperty(k,E.p));zt-- >0;)R=wt[zt],R.end||R.refresh(0,1)||(di=A),$=R.pin,$&&($===f||$===d||$===Vn)&&!R.isReverted&&(ee||(ee=[]),ee.unshift(R),R.revert(!0,!0)),R!==wt[zt]&&(mi--,zt--);for(pi(Rt)&&(Rt=Rt(A)),Rt=Ev(Rt,"start",A),Fe=Lv(Rt,f,Kt,E,re(),Ze,Q,A,_t,V,Z,Se,w,A._startClamp&&"_startClamp")||(d?-.001:0),pi(ct)&&(ct=ct(A)),Qi(ct)&&!ct.indexOf("+=")&&(~ct.indexOf(" ")?ct=(Qi(Rt)?Rt.split(" ")[0]:"")+ct:(et=_f(ct.substr(2),Kt),ct=Qi(Rt)?Rt:(w?Ke.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,Fe):Fe)+et,ln=f)),ct=Ev(ct,"end",A),Xe=Math.max(Fe,Lv(ct||(ln?"100% 0":Se),ln,Kt,E,re()+et,He,k,A,_t,V,Z,Se,w,A._endClamp&&"_endClamp"))||-.001,et=0,zt=mi;zt--;)R=wt[zt]||{},$=R.pin,$&&R.start-R._pinPush<=Fe&&!w&&R.end>0&&(bn=R.end-(A._startClamp?Math.max(0,R.start):R.start),($===f&&R.start-R._pinPush<Fe||$===Vn)&&isNaN(Rt)&&(et+=bn*(1-R.progress)),$===d&&(it+=bn));if(Fe+=et,Xe+=et,A._startClamp&&(A._startClamp+=et),A._endClamp&&!Ti&&(A._endClamp=Xe||-.001,Xe=Math.min(Xe,Qr(N,E))),Qe=Xe-Fe||(Fe-=.01)&&.001,tt&&(te=Ke.utils.clamp(0,1,Ke.utils.normalize(Fe,Xe,ge))),A._pinPush=it,Ze&&et&&(bn={},bn[E.a]="+="+et,Vn&&(bn[E.p]="-="+re()),Ke.set([Ze,He],bn)),d&&!(g0&&A.end>=Qr(N,E)))bn=fr(d),Fr=E===Fn,tr=re(),xe=parseFloat(z(E.a))+it,!Se&&Xe>1&&(De=(H?an.scrollingElement||er:N).style,De={style:De,value:De["overflow"+E.a.toUpperCase()]},H&&fr(Xt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(De.style["overflow"+E.a.toUpperCase()]="scroll")),h0(d,L,bn),T=pf(d),Cn=Ss(d,!0),ie=Z&&Ms(N,Fr?hi:Fn)(),g?(Le=[g+E.os2,Qe+it+zn],Le.t=L,zt=g===Nn?Ef(d,E)+Qe+it:0,zt&&(Le.push(E.d,zt+zn),L.style.flexBasis!=="auto"&&(L.style.flexBasis=zt+zn)),gl(Le),Vn&&wt.forEach(function(q){q.pin===Vn&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),Z&&re(ge)):(zt=Ef(d,E),zt&&L.style.flexBasis!=="auto"&&(L.style.flexBasis=zt+zn)),Z&&(Et={top:Cn.top+(Fr?tr-Fe:ie)+zn,left:Cn.left+(Fr?ie:tr-Fe)+zn,boxSizing:"border-box",position:"fixed"},Et[ea]=Et["max"+_l]=Math.ceil(Cn.width)+zn,Et[ta]=Et["max"+T0]=Math.ceil(Cn.height)+zn,Et[dr]=Et[dr+cu]=Et[dr+au]=Et[dr+uu]=Et[dr+lu]="0",Et[Nn]=bn[Nn],Et[Nn+cu]=bn[Nn+cu],Et[Nn+au]=bn[Nn+au],Et[Nn+uu]=bn[Nn+uu],Et[Nn+lu]=bn[Nn+lu],D=H2(ke,Et,M),Ti&&re(0)),i?(se=i._initted,o0(1),i.render(i.duration(),!0,!0),oe=z(E.a)-xe+Qe+it,he=Math.abs(Qe-oe)>1,Z&&he&&D.splice(D.length-2,2),i.render(0,!0,!0),se||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),o0(0)):oe=Qe,De&&(De.value?De.style["overflow"+E.a.toUpperCase()]=De.value:De.style.removeProperty("overflow-"+E.a));else if(f&&re()&&!w)for(Cn=f.parentNode;Cn&&Cn!==Xt;)Cn._pinOffset&&(Fe-=Cn._pinOffset,Xe-=Cn._pinOffset),Cn=Cn.parentNode;ee&&ee.forEach(function(q){return q.revert(!1,!0)}),A.start=Fe,A.end=Xe,qe=at=Ti?ge:re(),!w&&!Ti&&(qe<ge&&re(ge),A.scroll.rec=0),A.revert(!1,!0),Be=fi(),Re&&(Ee=-1,Re.restart(!0)),di=0,i&&P&&(i._initted||ae)&&i.progress()!==ae&&i.progress(ae||0,!0).render(i.time(),!0,!0),(tt||te!==A.progress||w||p||i&&!i._initted)&&(i&&!P&&(i._initted||te||i.vars.immediateRender!==!1)&&i.totalProgress(w&&Fe<-.001&&!te?Ke.utils.normalize(Fe,Xe,0):te,!0),A.progress=tt||(qe-Fe)/Qe===te?0:te),d&&g&&(L._pinOffset=Math.round(A.progress*oe)),F&&F.invalidate(),isNaN(Ve)||(Ve-=Ke.getProperty(Q,E.p),J-=Ke.getProperty(k,E.p),mf(Q,E,Ve),mf(Ze,E,Ve-(ft||0)),mf(k,E,J),mf(He,E,J-(ft||0))),tt&&!Ti&&A.update(),h&&!Ti&&!dt&&(dt=!0,h(A),dt=!1)}},A.getVelocity=function(){return(re()-at)/(fi()-eu)*1e3||0},A.endAnimation=function(){Qc(A.callbackAnimation),i&&(F?F.progress(1):i.paused()?P||Qc(i,A.direction<0,1):Qc(i,i.reversed()))},A.labelToScroll=function(Ce){return i&&i.labels&&(Fe||A.refresh()||Fe)+i.labels[Ce]/i.duration()*Qe||0},A.getTrailing=function(Ce){var nt=wt.indexOf(A),We=A.direction>0?wt.slice(0,nt).reverse():wt.slice(nt+1);return(Qi(Ce)?We.filter(function(ft){return ft.vars.preventOverlaps===Ce}):We).filter(function(ft){return A.direction>0?ft.end<=Fe:ft.start>=Xe})},A.update=function(Ce,nt,We){if(!(w&&!We&&!Ce)){var ft=Ti===!0?ge:A.scroll(),Kt=Ce?0:(ft-Fe)/Qe,_t=Kt<0?0:Kt>1?1:Kt||0,Se=A.progress,tt,et,it,ct,ln,Rt,Vn,mi;if(nt&&(at=qe,qe=w?re():ft,v&&(fe=j,j=i&&!P?i.totalProgress():_t)),_&&d&&!di&&!lf&&pr&&(!_t&&Fe<ft+(ft-at)/(fi()-eu)*_?_t=1e-4:_t===1&&Xe>ft+(ft-at)/(fi()-eu)*_&&(_t=.9999)),_t!==Se&&A.enabled){if(tt=A.isActive=!!_t&&_t<1,et=!!Se&&Se<1,Rt=tt!==et,ln=Rt||!!_t!=!!Se,A.direction=_t>Se?1:-1,A.progress=_t,ln&&!di&&(it=_t&&!Se?0:_t===1?1:Se===1?2:3,P&&(ct=!Rt&&X[it+1]!=="none"&&X[it+1]||X[it],mi=i&&(ct==="complete"||ct==="reset"||ct in i))),b&&(Rt||mi)&&(mi||u||!i)&&(pi(b)?b(A):A.getTrailing(b).forEach(function(tr){return tr.endAnimation()})),P||(F&&!di&&!lf?(F._dp._time-F._start!==F._time&&F.render(F._dp._time-F._start),F.resetTo?F.resetTo("totalProgress",_t,i._tTime/i._tDur):(F.vars.totalProgress=_t,F.invalidate().restart())):i&&i.totalProgress(_t,!!(di&&(Be||Ce)))),d){if(Ce&&g&&(L.style[g+E.os2]=Ie),!Z)G(nu(xe+oe*_t));else if(ln){if(Vn=!Ce&&_t>Se&&Xe+1>ft&&ft+1>=Qr(N,E),M)if(!Ce&&(tt||Vn)){var zt=Ss(d,!0),bn=ft-Fe;Dv(d,Xt,zt.top+(E===Fn?bn:0)+zn,zt.left+(E===Fn?0:bn)+zn)}else Dv(d,L);gl(tt||Vn?D:T),he&&_t<1&&tt||G(xe+(_t===1&&!Vn?oe:0))}}v&&!we.tween&&!di&&!lf&&Re.restart(!0),a&&(Rt||x&&_t&&(_t<1||!a0))&&du(a.targets).forEach(function(tr){return tr.classList[tt||x?"add":"remove"](a.className)}),o&&!P&&!Ce&&o(A),ln&&!di?(P&&(mi&&(ct==="complete"?i.pause().totalProgress(1):ct==="reset"?i.restart(!0).pause():ct==="restart"?i.restart(!0):i[ct]()),o&&o(A)),(Rt||!a0)&&(c&&Rt&&c0(A,c),W[it]&&c0(A,W[it]),x&&(_t===1?A.kill(!1,1):W[it]=0),Rt||(it=_t===1?1:3,W[it]&&c0(A,W[it]))),C&&!tt&&Math.abs(A.getVelocity())>(iu(C)?C:2500)&&(Qc(A.callbackAnimation),F?F.progress(1):Qc(i,ct==="reverse"?1:!_t,1))):P&&o&&!di&&o(A)}if(Ue){var Cn=w?ft/w.duration()*(w._caScrollDist||0):ft;de(Cn+(Q._isFlipped?1:0)),Ue(Cn)}Ae&&Ae(-ft/w.duration()*(w._caScrollDist||0))}},A.enable=function(Ce,nt){A.enabled||(A.enabled=!0,$n(N,"resize",ru),H||$n(N,"scroll",dl),K&&$n(r,"refreshInit",K),Ce!==!1&&(A.progress=te=0,qe=at=Ee=re()),nt!==!1&&A.refresh())},A.getTween=function(Ce){return Ce&&we?we.tween:F},A.setPositions=function(Ce,nt,We,ft){if(w){var Kt=w.scrollTrigger,_t=w.duration(),Se=Kt.end-Kt.start;Ce=Kt.start+Se*Ce/_t,nt=Kt.start+Se*nt/_t}A.refresh(!1,!1,{start:Sv(Ce,We&&!!A._startClamp),end:Sv(nt,We&&!!A._endClamp)},ft),A.update()},A.adjustPinSpacing=function(Ce){if(Le&&Ce){var nt=Le.indexOf(E.d)+1;Le[nt]=parseFloat(Le[nt])+Ce+zn,Le[1]=parseFloat(Le[1])+Ce+zn,gl(Le)}},A.disable=function(Ce,nt){if(Ce!==!1&&A.revert(!0,!0),A.enabled&&(A.enabled=A.isActive=!1,nt||F&&F.pause(),ge=0,Oe&&(Oe.uncache=1),K&&Yn(r,"refreshInit",K),Re&&(Re.pause(),we.tween&&we.tween.kill()&&(we.tween=0)),!H)){for(var We=wt.length;We--;)if(wt[We].scroller===N&&wt[We]!==A)return;Yn(N,"resize",ru),H||Yn(N,"scroll",dl)}},A.kill=function(Ce,nt){A.disable(Ce,nt),F&&!nt&&F.kill(),l&&delete _0[l];var We=wt.indexOf(A);We>=0&&wt.splice(We,1),We===Si&&vf>0&&Si--,We=0,wt.forEach(function(ft){return ft.scroller===A.scroller&&(We=1)}),We||Ti||(A.scroll.rec=0),i&&(i.scrollTrigger=null,Ce&&i.revert({kill:!1}),nt||i.kill()),Ze&&[Ze,He,Q,k].forEach(function(ft){return ft.parentNode&&ft.parentNode.removeChild(ft)}),hu===A&&(hu=0),d&&(Oe&&(Oe.uncache=1),We=0,wt.forEach(function(ft){return ft.pin===d&&We++}),We||(Oe.spacer=0)),n.onKill&&n.onKill(A)},wt.push(A),A.enable(!1,!1),le&&le(A),i&&i.add&&!Qe){var st=A.update;A.update=function(){A.update=st,Tt.cache++,Fe||Xe||A.refresh()},Ke.delayedCall(.01,A.update),Qe=.01,Fe=Xe=0}else A.refresh();d&&O2()},r.register=function(n){return fl||(Ke=n||Gv(),Vv()&&window.document&&r.enable(),fl=tu),fl},r.defaults=function(n){if(n)for(var i in n)df[i]=n[i];return df},r.disable=function(n,i){tu=0,wt.forEach(function(o){return o[i?"kill":"disable"](n)}),Yn(At,"wheel",dl),Yn(an,"scroll",dl),clearInterval(af),Yn(an,"touchcancel",jr),Yn(Xt,"touchstart",jr),uf(Yn,an,"pointerdown,touchstart,mousedown",Tv),uf(Yn,an,"pointerup,touchend,mouseup",wv),Mf.kill(),cf(Yn);for(var s=0;s<Tt.length;s+=3)hf(Yn,Tt[s],Tt[s+1]),hf(Yn,Tt[s],Tt[s+2])},r.enable=function(){if(At=window,an=document,er=an.documentElement,Xt=an.body,Ke&&(du=Ke.utils.toArray,su=Ke.utils.clamp,m0=Ke.core.context||jr,o0=Ke.core.suppressOverwrites||jr,b0=At.history.scrollRestoration||"auto",x0=At.pageYOffset||0,Ke.core.globals("ScrollTrigger",r),Xt)){tu=1,ml=document.createElement("div"),ml.style.height="100vh",ml.style.position="absolute",Qv(),P2(),Rn.register(Ke),r.isTouch=Rn.isTouch,lo=Rn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),p0=Rn.isTouch===1,$n(At,"wheel",dl),y0=[At,an,er,Xt],Ke.matchMedia?(r.matchMedia=function(c){var h=Ke.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Ke.addEventListener("matchMediaInit",function(){Kv(),A0()}),Ke.addEventListener("matchMediaRevert",function(){return Jv()}),Ke.addEventListener("matchMedia",function(){Qo(0,1),sa("matchMedia")}),Ke.matchMedia().add("(orientation: portrait)",function(){return u0(),u0})):console.warn("Requires GSAP 3.11.0 or later"),u0(),$n(an,"scroll",dl);var n=Xt.hasAttribute("style"),i=Xt.style,s=i.borderTopStyle,o=Ke.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ss(Xt),Fn.m=Math.round(a.top+Fn.sc())||0,hi.m=Math.round(a.left+hi.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Xt.setAttribute("style",""),Xt.removeAttribute("style")),af=setInterval(Cv,250),Ke.delayedCall(.5,function(){return lf=0}),$n(an,"touchcancel",jr),$n(Xt,"touchstart",jr),uf($n,an,"pointerdown,touchstart,mousedown",Tv),uf($n,an,"pointerup,touchend,mouseup",wv),f0=Ke.utils.checkPrefix("transform"),yf.push(f0),fl=fi(),Mf=Ke.delayedCall(.2,Qo).pause(),pl=[an,"visibilitychange",function(){var c=At.innerWidth,h=At.innerHeight;an.hidden?(bv=c,Mv=h):(bv!==c||Mv!==h)&&ru()},an,"DOMContentLoaded",Qo,At,"load",Qo,At,"resize",ru],cf($n),wt.forEach(function(c){return c.enable(0,1)}),l=0;l<Tt.length;l+=3)hf(Yn,Tt[l],Tt[l+1]),hf(Yn,Tt[l],Tt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(a0=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(af)||(af=i)&&setInterval(Cv,i),"ignoreMobileResize"in n&&(p0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(cf(Yn)||cf($n,n.autoRefreshEvents||"none"),kv=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Mi(n),o=Tt.indexOf(s),a=ia(s);~o&&Tt.splice(o,a?6:2),i&&(a?Dr.unshift(At,i,Xt,i,er,i):Dr.unshift(s,i))},r.clearMatchMedia=function(n){wt.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Qi(n)?Mi(n):n).getBoundingClientRect(),a=o[s?ea:ta]*i||0;return s?o.right-a>0&&o.left+a<At.innerWidth:o.bottom-a>0&&o.top+a<At.innerHeight},r.positionInViewport=function(n,i,s){Qi(n)&&(n=Mi(n));var o=n.getBoundingClientRect(),a=o[s?ea:ta],l=i==null?a/2:i in Sf?Sf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/At.innerWidth:(o.top+l)/At.innerHeight},r.killAll=function(n){if(wt.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=ra.killAll||[];ra={},i.forEach(function(s){return s()})}},r})();vt.version="3.14.2";vt.saveStyles=function(r){return r?du(r).forEach(function(e){if(e&&e.style){var t=ji.indexOf(e);t>=0&&ji.splice(t,5),ji.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Ke.core.getCache(e),m0())}}):ji};vt.revert=function(r,e){return A0(!r,e)};vt.create=function(r,e){return new vt(r,e)};vt.refresh=function(r){return r?ru(!0):(fl||vt.register())&&Qo(!0)};vt.update=function(r){return++Tt.cache&&Ts(r===!0?2:0)};vt.clearScrollMemory=jv;vt.maxScroll=function(r,e){return Qr(r,e?hi:Fn)};vt.getScrollFunc=function(r,e){return Ms(Mi(r),e?hi:Fn)};vt.getById=function(r){return _0[r]};vt.getAll=function(){return wt.filter(function(r){return r.vars.id!=="ScrollSmoother"})};vt.isScrolling=function(){return!!pr};vt.snapDirectional=w0;vt.addEventListener=function(r,e){var t=ra[r]||(ra[r]=[]);~t.indexOf(e)||t.push(e)};vt.removeEventListener=function(r,e){var t=ra[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};vt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Ke.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),s<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&pi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return pi(s)&&(s=s(),$n(vt,"refresh",function(){return s=e.batchMax()})),du(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(vt.create(c))}),t};var Nv=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},d0=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Rn.isTouch?" pinch-zoom":""):"none",e===er&&r(Xt,t)},gf={auto:1,scroll:1},V2=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Ke.core.getCache(s),a=fi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Xt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(gf[(l=fr(s)).overflowY]||gf[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ia(s)&&(gf[(l=fr(s)).overflowY]||gf[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ty=function(e,t,n,i){return Rn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&V2,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$n(an,Rn.eventTypes[0],Ov,!1,!0)},onDisable:function(){return Yn(an,Rn.eventTypes[0],Ov,!0)}})},G2=/(input|label|select|textarea)/i,Uv,Ov=function(e){var t=G2.test(e.target.tagName);(t||Uv)&&(e._gsapAllow=!0,Uv=t)},W2=function(e){jo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Mi(e.target)||er,h=Ke.core.globals().ScrollSmoother,u=h&&h.get(),f=lo&&(e.content&&Mi(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=Ms(c,Fn),g=Ms(c,hi),p=1,_=(Rn.isTouch&&At.visualViewport?At.visualViewport.scale*At.visualViewport.width:At.outerWidth)/At.innerWidth,m=0,y=pi(i)?function(){return i(a)}:function(){return i||2.8},x,v,M=ty(c,e.type,!0,s),S=function(){return v=!1},w=jr,C=jr,b=function(){l=Qr(c,Fn),C=su(lo?1:0,l),n&&(w=su(0,Qr(c,hi))),x=na},E=function(){f._gsap.y=nu(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},P=function(){if(v){requestAnimationFrame(S);var O=nu(a.deltaY/2),V=C(d.v-O);if(f&&V!==d.v+d.offset){d.offset=V-d.v;var A=nu((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+A+", 0, 1)",f._gsap.y=A+"px",d.cacheID=Tt.cache,Ts()}return!0}d.offset&&E(),v=!0},N,B,H,Z,W=function(){b(),N.isActive()&&N.vars.scrollY>l&&(d()>l?N.progress(1)&&d(l):N.resetTo("scrollY",l))};return f&&Ke.set(f,{y:"+=0"}),e.ignoreCheck=function(X){return lo&&X.type==="touchmove"&&P(X)||p>1.05&&X.type!=="touchstart"||a.isGesturing||X.touches&&X.touches.length>1},e.onPress=function(){v=!1;var X=p;p=nu((At.visualViewport&&At.visualViewport.scale||1)/_),N.pause(),X!==p&&d0(c,p>1.01?!0:n?!1:"x"),B=g(),H=d(),b(),x=na},e.onRelease=e.onGestureStart=function(X,O){if(d.offset&&E(),!O)Z.restart(!0);else{Tt.cache++;var V=y(),A,K;n&&(A=g(),K=A+V*.05*-X.velocityX/.227,V*=Nv(g,A,K,Qr(c,hi)),N.vars.scrollX=w(K)),A=d(),K=A+V*.05*-X.velocityY/.227,V*=Nv(d,A,K,Qr(c,Fn)),N.vars.scrollY=C(K),N.invalidate().duration(V).play(.01),(lo&&N.vars.scrollY>=l||A>=l-1)&&Ke.to({},{onUpdate:W,duration:V})}o&&o(X)},e.onWheel=function(){N._ts&&N.pause(),fi()-m>1e3&&(x=0,m=fi())},e.onChange=function(X,O,V,A,K){if(na!==x&&b(),O&&n&&g(w(A[2]===O?B+(X.startX-X.x):g()+O-A[1])),V){d.offset&&E();var ce=K[2]===V,pe=ce?H+X.startY-X.y:d()+V-K[1],Ee=C(pe);ce&&pe!==Ee&&(H+=Ee-pe),d(Ee)}(V||O)&&Ts()},e.onEnable=function(){d0(c,n?!1:"x"),vt.addEventListener("refresh",W),$n(At,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){d0(c,!0),Yn(At,"resize",W),vt.removeEventListener("refresh",W),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Rn(e),a.iOS=lo,lo&&!d()&&d(1),lo&&Ke.ticker.add(jr),Z=a._dc,N=Ke.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:ey(d,d(),function(){return N.pause()})},onUpdate:Ts,onComplete:Z.vars.onComplete}),a};vt.sort=function(r){if(pi(r))return wt.sort(r);var e=At.pageYOffset||0;return vt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+At.innerHeight}),wt.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};vt.observe=function(r){return new Rn(r)};vt.normalizeScroll=function(r){if(typeof r>"u")return Ei;if(r===!0&&Ei)return Ei.enable();if(r===!1){Ei&&Ei.kill(),Ei=r;return}var e=r instanceof Rn?r:W2(r);return Ei&&Ei.target===e.target&&Ei.kill(),ia(e.target)&&(Ei=e),e};vt.core={_getVelocityProp:of,_inputObserver:ty,_scrollers:Tt,_proxies:Dr,bridge:{ss:function(){pr||sa("scrollStart"),pr=fi()},ref:function(){return di}}};Gv()&&Ke.registerPlugin(vt);var R0=Math.PI*2,wf=class{points=[[],[],[]];cols=164;rows=92;depth=new Float32Array(this.cols*this.rows);light=new Float32Array(this.cols*this.rows);ink=new Uint8Array(this.cols*this.rows);constructor(e=!1){e&&(this.cols=108,this.rows=82,this.depth=new Float32Array(this.cols*this.rows),this.light=new Float32Array(this.cols*this.rows),this.ink=new Uint8Array(this.cols*this.rows));let t=(o,a,l,c,h,u,f,d=0)=>this.points[o].push([a,l,c,h,u,f,d]);for(let o=1;o<85;o++)for(let a=0;a<190;a++){let l=a/190*R0,c=o/85*Math.PI,h=.68+Math.sin(l*12)*Math.sin(c*9)*.025;t(0,Math.sin(c)*Math.cos(l)*h,Math.cos(c)*h,Math.sin(c)*Math.sin(l)*h,Math.sin(c)*Math.cos(l),Math.cos(c),Math.sin(c)*Math.sin(l),0)}for(let o=0;o<3;o++)for(let a=0;a<400;a++)for(let l=0;l<16;l++){let c=a/400*R0,h=l/16*R0,u=1.02+o*.23,f=(u+.055*Math.cos(h))*Math.cos(c),d=(u+.055*Math.cos(h))*Math.sin(c),g=.055*Math.sin(h);if(o===1){let p=d;d=g,g=p}if(o===2){let p=f;f=g,g=p}t(0,f,d,g,Math.cos(c)*Math.cos(h),Math.sin(c)*Math.cos(h),Math.sin(h),o+1)}for(let o=0;o<15;o++){let a=o*1.6;for(let l=0;l<150;l++)for(let c=0;c<9;c++){let h=l/149*Math.PI,u=1.45+c*.012;t(1,Math.cos(h)*u,-.25-Math.sin(h)*u,a,Math.cos(h),-Math.sin(h),.5,o%3)}for(let l=-1;l<=1;l+=2)for(let c=0;c<70;c++)for(let h=0;h<10;h++)t(1,l*(1.45+h*.013),-.25+c*.025,a,l,0,.6,o%3);for(let l=0;l<90;l++)for(let c=0;c<14;c++)t(1,(l/89-.5)*3.3,1.5,a+c*.1,0,-1,.4,3)}let n=document.createElement("canvas");n.width=700,n.height=220;let i=n.getContext("2d");i.fillStyle="white",i.font="900 100px monospace",i.textAlign="center",i.fillText("STAY",350,95),i.fillText("CURIOUS",350,200);let s=i.getImageData(0,0,700,220).data;for(let o=0;o<220;o+=3)for(let a=0;a<700;a+=3)s[(o*700+a)*4+3]>120&&t(2,(a-350)/180,(o-110)/180,0,0,0,1,1);for(let o=0;o<3500;o++){let a=o*2.399963,l=Math.acos(1-2*(o+.5)/3500);t(2,Math.sin(l)*Math.cos(a)*2,Math.cos(l)*2,Math.sin(l)*Math.sin(a)*2,0,0,1,0)}}render(e,t,n,i,s,o){let a=e.canvas.width,l=e.canvas.height,c=this.cols,h=this.rows;this.depth.fill(-1/0),this.light.fill(0),this.ink.fill(0);let u=n,f=o?0:i,d=t===1?Math.sin(u*5)*.09:t===2?.1*Math.sin(f*.12)*(1-u):.55+f*.09+u*1.7,g=t===1||t===2?0:.2+Math.sin(u*3)*.15,p=Math.cos(d),_=Math.sin(d),m=Math.cos(g),y=Math.sin(g);for(let E=0;E<this.points[t].length;E++){let P=this.points[t][E],[N,B,H,Z,W,X,O]=P;if(t===0){let Fe=Math.sin(u*Math.PI)*.7;O===1&&(N+=Fe*1.2),O===2&&(B-=Fe),O===3&&(H+=Fe*2)}if(t===1&&(H-=u*17,H=((H+3)%24+24)%24-3,N+=Math.sin(u*5)*.15),t===2){if(O===0&&E%3!==0)continue;let Fe=Math.min(1,u/.78),Xe=1-Fe,Ze=E*2.399,He=2+Math.sin(E*7)*.8;N=N*Fe+Math.cos(Ze+f*.08)*He*Xe,B=B*Fe+Math.sin(Ze+f*.08)*He*Xe,H=H*Xe+Math.sin(E)*Xe,O===0&&(N*=1.3,B*=1.3,H=-3+H*.15)}let V=N*p+H*_,A=-N*_+H*p,K=B*m-A*y,ce=B*y+A*m,pe=t===1?2.8:t===2?4.8:4.3-u*.25,Ee=t===1?ce+pe:pe-ce;if(Ee<.2)continue;let Be=(t===1?52:t===2?125:98)*(s?.72:1),te=Math.round(c/2+V*Be*1.5/Ee),re=Math.round(h/2+K*Be/Ee);if(te<1||te>=c-1||re<1||re>=h-1)continue;let we=re*c+te,Oe=-Ee;if(Oe<this.depth[we])continue;this.depth[we]=Oe;let Pe=Z*p+X*_,qe=-Z*_+X*p,at=t===1?Math.max(.15,1-Ee/24):Math.max(.12,Pe*-.4+W*-.6+qe*.65)*.8+.18;this.light[we]=t===2?O===1?1:.14:Math.min(1,at+.2+(O?.2:0)),this.ink[we]=O+1}e.fillStyle="#080b0b",e.fillRect(0,0,a,l);let x=Math.min(a/(c*8),l/(h*12)),v=8*x,M=12*x,S=(a-c*v)/2,w=(l-h*M)/2;e.font=`${Math.max(5,11*x)}px "Space Mono",monospace`,e.textAlign="center",e.textBaseline="middle";let C="\xB7:;-=+*#%@",b=["#35413c","#839a7d","#b2cc9c","#d5e6b7","#f5fad8"];for(let E=0;E<5;E++){e.fillStyle=b[E];for(let P=0;P<this.light.length;P++){let N=this.light[P];if(!N||Math.min(4,Math.floor(N*5))!==E)continue;let B=t===1&&this.ink[P]===4?"\u2500":C[Math.min(9,Math.floor(N*9))];e.fillText(B,S+P%c*v,w+Math.floor(P/c)*M)}}e.strokeStyle="#a9c69525",e.lineWidth=1;for(let[E,P]of[[a*.04,l*.08],[a*.96,l*.08],[a*.04,l*.92],[a*.96,l*.92]])e.beginPath(),e.moveTo(E-8,P),e.lineTo(E+8,P),e.moveTo(E,P-8),e.lineTo(E,P+8),e.stroke();o||(e.fillStyle="#dbffc805",e.fillRect(0,f*15%l,a,2)),e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};var je={ink:"#232843",shadow:"#303b58",deep:"#405575",rock:"#5a6680",stone:"#aaa0a0",sand:"#d9bd9a",light:"#f8d9ab",roof:"#b15b78",roofLight:"#dc8a91",green:"#4c8172",leaf:"#81ae84",gold:"#f7c576",water:"#75bfc2"};function ii(r){return(Math.sin(r*127.1+311.7)*43758.5453%1+1)%1}var Af=class{ctx;r(e,t,n,i,s){this.ctx.fillStyle=s,this.ctx.fillRect(Math.round(e),Math.round(t),Math.ceil(n),Math.ceil(i))}poly(e,t){this.ctx.fillStyle=t,this.ctx.beginPath(),e.forEach(([n,i],s)=>s?this.ctx.lineTo(Math.round(n),Math.round(i)):this.ctx.moveTo(Math.round(n),Math.round(i))),this.ctx.closePath(),this.ctx.fill()}tree(e,t,n=1){let i=this.r.bind(this);i(e-1,t,3,17*n,je.shadow);for(let s=0;s<4;s++){let o=(19-s*3)*n;i(e-o/2,t-8-s*5*n,o,8*n,s%2?je.leaf:je.green),i(e-o/2,t-8-s*5*n,o/3,4*n,"#b3c694")}i(e+3,t+5,8,2,je.ink)}house(e,t,n,i,s=je.roof){let o=this.r.bind(this);o(e+2,t+2,n,i,je.ink),o(e,t,n,i,je.sand),o(e+n*.65,t,n*.35,i,je.stone),o(e+2,t+3,n*.6,2,je.light),this.poly([[e-3,t],[e+n/2,t-n*.42],[e+n+3,t]],s),o(e-3,t,n+6,2,je.ink);for(let a=0;a<Math.floor(n/6);a++)o(e+a*6,t-n*.13,3,1,je.roofLight);for(let a=0;a<Math.floor(n/9);a++)o(e+4+a*9,t+7,3,6,je.ink),o(e+4+a*9,t+8,2,3,je.gold);o(e+n/2-2,t+i-8,5,8,je.shadow),o(e+n/2,t+i-8,1,8,je.light)}tower(e,t,n,i){let s=this.r.bind(this);s(e,t,n,i,je.stone),s(e,t,n*.6,i,je.sand);for(let o=0;o<i;o+=6)for(let a=0;a<n;a+=7)s(e+a+(o%12?3:0),t+o,4,1,"#bcae9c");for(let o=8;o<i;o+=14)s(e+n/2-2,t+o,4,8,je.shadow),s(e+n/2-1,t+o+1,2,4,je.gold);this.poly([[e-4,t],[e+n/2,t-15],[e+n+4,t]],je.roof),s(e+n/2,t-26,1,11,je.ink),this.poly([[e+n/2+1,t-26],[e+n/2+12,t-23],[e+n/2+1,t-20]],je.gold)}cloud(e,t,n){let i=this.r.bind(this);i(e,t,34*n,5*n,"#f6d9bd"),i(e+6*n,t-5*n,20*n,6*n,"#f6d9bd"),i(e+12*n,t-9*n,10*n,6*n,"#f6d9bd"),i(e+4*n,t+4*n,26*n,2*n,"#b9a6ba")}island(e,t,n,i,s,o=!0){let a=this.r.bind(this),l=n/2;this.poly([[e-l,t],[e-l*.8,t+12],[e-l*.45,t+n*.42],[e,t+n*.65],[e+l*.48,t+n*.26],[e+l,t+3]],je.ink),this.ctx.save(),this.ctx.clip();for(let c=0;c<60;c++){let h=e-l+ii(c+i)*n,u=t+ii(c*3+i)*n*.45,f=n*(.22+ii(c)*.2)*(1-(u-t)/(n*.6));a(h,u,Math.max(2,f),3+ii(c*4)*6,c%3?je.rock:je.shadow)}this.ctx.restore(),this.poly([[e-l,t],[e-l*.65,t-10],[e+l*.2,t-14],[e+l,t],[e+l*.7,t+8],[e-l*.6,t+10]],je.green);for(let c=0;c<80;c++){let h=e-l+ii(c+i)*n,u=t-5+ii(c*7)*12;a(h,u,1+ii(c*8)*3,1,c%4?je.leaf:je.light)}a(e+l*.57,t+3,7,n*.58,je.deep),a(e+l*.58,t+4,4,n*.57,je.water);for(let c=0;c<8;c++){let h=t+5+(c*7+s*9)%(n*.55);a(e+l*.58,h,3,2,"#dcf7da")}o&&(this.house(e-25,t-31,29,30),this.tower(e+8,t-58,17,60),this.house(e+33,t-21,20,21,"#757dab"),this.tree(e-l*.65,t-8,.8),this.tree(e+l*.78,t-1,.6))}render(e,t,n,i,s){this.ctx=e;let o=this.r.bind(this),a=s?0:i;o(0,0,480,300,t===1?"#212b4c":"#52678d");let l=t===1?["#202744","#2d3553","#414763","#65566c","#93737c"]:["#52678d","#6d7f9e","#93a0b5","#bab3bf","#e4c5bd"];for(let u=0;u<60;u++){let f=u/59*4,d=Math.min(3,Math.floor(f)),g=f-d,p=parseInt(l[d].slice(1),16),_=parseInt(l[d+1].slice(1),16),m=y=>Math.round((p>>y&255)*(1-g)+(_>>y&255)*g);o(0,u*5,480,5,`rgb(${m(16)},${m(8)},${m(0)})`)}for(let u=0;u<170;u++){let f=ii(u)*480,d=ii(u+500)*190;(t===1||u%5===0)&&(o(f,d,1,u%19?1:2,u%3?"#e8d6b3":"#9eb8c6"),u%29===0&&(o(f-2,d,5,1,"#e8d6b3"),o(f,d-2,1,5,"#e8d6b3")))}let c=t===1?365:92,h=47;for(let u=-14;u<=14;u++){let f=Math.floor(Math.sqrt(196-u*u));o(c-f,h+u,f*2+1,1,je.light)}if(t===1)for(let u=-13;u<=13;u++){let f=Math.floor(Math.sqrt(169-u*u));o(c-7-f,h-3+u,f*2+1,1,"#2d3553")}for(let u=0;u<3;u++){let f=[[0,300]];for(let d=0;d<=480;d+=2){let g=n*(u+1)*70,p=Math.abs(Math.sin((d+g)*.014+u*4))*36+Math.sin((d+g)*.033)*8;f.push([d,155+u*27-p])}f.push([480,300]),this.poly(f,["#7b829d","#5d6c8b","#435b7a"][u]);for(let d=0;d<30;d++){let g=ii(d+u*700)*480;o(g,150+u*25,2,1,"#b3bac030")}}if(t===0){for(let d=0;d<7;d++)this.cloud((d*94-n*30+a*.25)%640-50,50+d%3*31,.55+d%2*.3);let u=1+n*.6;e.save(),e.translate(300,176),e.scale(u,u),e.translate(-300,-176),this.island(300,174,185,24,a,!1),o(239,160,125,12,je.stone),o(236,157,131,4,je.sand);for(let d=0;d<9;d++)o(240+d*14,157,5,5,je.sand),o(240+d*14,165,10,1,je.light);this.house(250,133,24,25),this.house(279,117,30,40),this.house(316,138,22,21,"#6f7fa2"),this.tower(308,79,17,79),this.tower(345,117,13,43),o(292,145,16,16,je.ink),o(295,142,10,19,je.shadow),o(298,147,3,14,je.gold),o(312,89,9,9,je.light),o(316,91,1,5,je.shadow),o(316,94,3,1,je.shadow),o(232,124,5,32,je.sand);let f=a*.35+n*2;for(let d=0;d<4;d++){let g=f+d*Math.PI/2;this.poly([[234,126],[234+Math.cos(g)*18,126+Math.sin(g)*18],[234+Math.cos(g+.25)*14,126+Math.sin(g+.25)*14]],je.light)}this.tree(226,160,1),this.tree(365,159,.8),this.tree(275,169,.45);for(let d=0;d<12;d++)o(251+d*8,171+Math.sin(d)*2,2,2,d%3?"#f8d9ab":"#dc8a91");o(261,108,67,1,je.ink);for(let d=0;d<8;d++)this.poly([[262+d*8,108],[267+d*8,108],[264+d*8,114]],d%2?je.gold:je.roofLight);e.restore(),this.island(85-n*110,202,65,58,a),this.island(443+n*80,153,58,71,a);for(let d=0;d<18;d++){let g=ii(d)*480,p=215+ii(d+50)*70;o(g,p,4,1,"#222f48"),o(g+2,p-2,1,4,"#222f48")}}else if(t===1){let u=n*540;o(0,222,480,78,je.deep);for(let g=0;g<95;g++){let p=ii(g)*480,_=230+ii(g+9)*60;o(p,_,3+ii(g+88)*10,1,g%4?"#597f99":"#b4a6a4")}for(let g=-2;g<13;g++){let p=g*58-u%58;o(p,224,8,76,je.ink),o(p,224,8,2,je.stone),this.poly([[p+8,237],[p+29,254],[p+50,237],[p+50,243],[p+29,261],[p+8,243]],je.shadow)}o(0,211,480,12,je.ink),o(0,211,480,3,je.stone);for(let g=0;g<480;g+=6)o(g,209,2,3,je.sand);let f=140+Math.sin(n*Math.PI)*80;for(let g=0;g<3;g++){let p=f+g*38;o(p,193,35,16,je.roof),o(p+2,190,31,4,je.roofLight);for(let _=0;_<4;_++)o(p+4+_*7,196,4,5,je.gold);o(p+4,209,5,3,je.ink),o(p+26,209,5,3,je.ink)}for(let g=0;g<8;g++){let p=f-4-g*7,_=180-Math.sin(g*.6+a)*3-g*.8;o(p,_,7,4,"#b0a3af")}let d=390-n*180;this.tower(d,139,17,71),this.house(d-25,185,24,25);for(let g=0;g<14;g++){let p=((g*47-u*1.6)%680+680)%680-80;this.tree(p,285,1.6)}for(let g=0;g<24;g++)Math.sin(a*1.4+g)>0&&o(ii(g)*480,232+ii(g+99)*60,1,1,je.gold)}else{let u=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];e.strokeStyle="#f8d9ab66",e.setLineDash([2,4]),e.lineWidth=1,e.beginPath(),u.forEach(([x,v],M)=>M?e.lineTo(x,v):e.moveTo(x,v)),e.stroke(),e.setLineDash([]),u.forEach(([x,v],M)=>{let S=Math.max(0,1-n*2-M*.04)*100;this.island(x,v+S,45+M%3*9,M*57,a,!0),o(x-3,v-70+S,7,9,je.light);let w=["010110010010111","110001010100111","110001010001110","101101111001001","111100110001110","011100110101010","111001010010010"];for(let C=0;C<15;C++)w[M][C]==="1"&&o(x-1+C%3,v-68+S+Math.floor(C/3),1,1,je.shadow)});let f=Math.max(0,(n-.45)/.55)*(u.length-1),d=Math.min(5,Math.floor(f)),g=f-d,p=u[d],_=u[d+1],m=p[0]+(_[0]-p[0])*g,y=p[1]+(_[1]-p[1])*g+Math.max(0,1-n*2-d*.04)*100*(1-g)+Math.max(0,1-n*2-(d+1)*.04)*100*g-13;o(m-2,y-4,5,5,je.light),o(m-3,y+1,7,6,je.roofLight),o(m-2,y+7,2,3,je.ink),o(m+1,y+7,2,3,je.ink)}e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};ue.registerPlugin(vt);function ny(r=!1){let e=document.querySelector(".mt-nullsignal,.mt-bitquest");if(!e)return;let t=matchMedia("(max-width:760px)").matches,n=e.dataset.template==="nullsignal",i=n?new wf(t):null,s=n?null:new Af,o=[...e.querySelectorAll("canvas[data-glyph]")].map((m,y)=>{m.width=n?t?800:1400:480,m.height=n?t?640:850:300;let x=m.getContext("2d");return x&&(x.imageSmoothingEnabled=!1),{canvas:m,ctx:x,phase:y,progress:r?[.25,.45,1][y]:0,visible:!1}}),a=[];r||o.forEach(m=>{let y=m.canvas.closest(".gl-sequence"),x=ue.timeline({scrollTrigger:{trigger:y,start:"top top",end:()=>`+=${innerHeight*(t?1.65:2.5)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});x.to(m,{progress:1,duration:3,ease:"none"},0),m.phase===0?(x.to(y.querySelector(".gl-hero-copy"),{y:-55,opacity:0,duration:.8},.35),x.to(y.querySelector(".gl-art"),{left:"0%",right:"0%",top:t?"12%":"0%",bottom:t?"5%":"0%",height:t?"75%":"100%",duration:1.4,ease:"power2.inOut"},.6),x.to(y.querySelector(".gl-annotation"),{opacity:0,duration:.5},.3),x.to(y,{"--gl-veil":0,duration:1},.4)):m.phase===1?x.to(y.querySelector(".gl-plate"),{opacity:0,y:-35,duration:.7},1.6):(x.to(y.querySelector(".gl-map-heading"),{opacity:0,y:-40,duration:.7},.2),x.to(y.querySelector(".gl-art"),{top:"0%",duration:1.2},.6)),a.push(x)});let l=performance.now(),c=0,h=0,u=!1,f=(m,y=!1)=>{for(let x of o){if(!x.ctx||!x.visible&&!y)continue;n?i.render(x.ctx,x.phase,x.progress,m,t,r):s.render(x.ctx,x.phase,x.progress,m,r);let v=x.canvas.closest(".gl-sequence")?.querySelector(".gl-progress-label");v&&(v.textContent=`${String(Math.round(x.progress*100)).padStart(3,"0")} / 100`),x.canvas.dataset.scrollProgress=x.progress.toFixed(3)}},d=()=>{!u&&!document.hidden&&!c&&o.some(m=>m.visible)&&!r&&(c=requestAnimationFrame(g))};function g(m){c=0,!(u||document.hidden)&&(m-h>=50&&(f((m-l)*.001),h=m),d())}let p=new IntersectionObserver(m=>{for(let y of m){let x=o.find(v=>v.canvas===y.target);x&&(x.visible=y.isIntersecting)}d()},{threshold:0});o.forEach(m=>p.observe(m.canvas));let _=()=>{document.hidden?(cancelAnimationFrame(c),c=0):d()};return document.addEventListener("visibilitychange",_),f(0,!0),d(),()=>{u=!0,cancelAnimationFrame(c),p.disconnect(),document.removeEventListener("visibilitychange",_),a.forEach(m=>{m.scrollTrigger?.kill(),m.kill()})}}var pu=new I;function mr(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;pu.copy(e),pu[n]=0,pu.normalize();let c=.5*o/(o+a),h=1-pu.angleTo(r)/l;return Math.sign(pu[t])===1?h*c:a/(o+a)+c+c*(1-h)}var co=class r extends Gt{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new I,c=new I,h=new I(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,p=new I,_=.5/o;for(let m=0,y=0;m<u.length;m+=3,y+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*s,u[m+1]=h.y*Math.sign(l.y)+c.y*s,u[m+2]=h.z*Math.sign(l.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:p.set(1,0,0),d[y+0]=mr(p,c,"z","y",s,n),d[y+1]=1-mr(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),d[y+0]=1-mr(p,c,"z","y",s,n),d[y+1]=1-mr(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),d[y+0]=1-mr(p,c,"x","z",s,e),d[y+1]=mr(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),d[y+0]=1-mr(p,c,"x","z",s,e),d[y+1]=1-mr(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),d[y+0]=1-mr(p,c,"x","y",s,e),d[y+1]=1-mr(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),d[y+0]=mr(p,c,"x","y",s,e),d[y+1]=1-mr(p,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var oa=r=>{let e=Math.sin(r*127.1+31.7)*43758.54;return e-Math.floor(e)},qt=(r,e,t,n=0,i=0,s=0)=>{let o=new $e(r,e);return o.position.set(n,i,s),t.add(o),o};function iy(r=1.25,e=.55){let t=new xt,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let h=l/o,u=c/a*2-1,f=Math.sin(Math.PI*h)**.5;if(n.push(u*e*f,h*r,.12+Math.sin(Math.PI*h)*.3+u*u*.18-Math.pow(h,5)*.2+Math.sin(h*36+u*4)*.017*f),s.push(c/a,h),l<o&&c<a){let d=l*(a+1)+c,g=d+a+1;i.push(d,g,d+1,g,g+1,d+1)}}return t.setAttribute("position",new lt(n,3)),t.setAttribute("uv",new lt(s,2)),t.setIndex(i),t.computeVertexNormals(),t}function X2(){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#783f28"),t.addColorStop(.22,"#bc5845"),t.addColorStop(.65,"#dc8672"),t.addColorStop(1,"#f0ac91"),e.fillStyle=t,e.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)e.strokeStyle=`rgba(91,34,35,${.025+oa(i)*.06})`,e.lineWidth=.6,e.beginPath(),e.moveTo(128,0),e.quadraticCurveTo(i*.85,220,i,512),e.stroke();let n=new Er(r);return n.colorSpace=Zt,n}var Rf=class{constructor(e,t,n){this.container=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Zt,this.renderer.toneMapping=Vi,this.renderer.toneMappingExposure=t==="monolith"?.9:t==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new Wr(this.renderer),s=new to;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new wr(16777215,t==="floraison"||t==="monolith"?.65:1.3));let o=new fn(t==="offscript"?13238194:16771534,t==="floraison"||t==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new fn(t==="aether"?16757901:t==="offscript"?12175359:16764589,t==="floraison"||t==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new fn(16777215,t==="floraison"||t==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),t==="aether"?this.headphones():t==="offscript"?this.sculpture():t==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(e),this.observers.push(c);let h=new IntersectionObserver(u=>{this.visible=u[0].isIntersecting});h.observe(e),this.observers.push(h),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new sn;camera=new Ht(33,1,.1,60);root=new Je;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=e=>{this.tilt.x=(e.clientX/innerWidth-.5)*.12,this.tilt.y=(e.clientY/innerHeight-.5)*.08};contextLost=e=>{e.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let e=document.createElement("div");e.className="scene-fallback",this.container.append(e)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let e=new bt({color:"#cbd1ce",metalness:1,roughness:.22}),t=new bt({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new bt({color:"#373b36",roughness:.9,metalness:.05});this.band=new Je,this.root.add(this.band),qt(new Kn(1.22,.072,20,100,Math.PI),e,this.band,0,.1);let i=qt(new Kn(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let h of[-1,1]){let u=new Je;u.position.set(h*1.15,-.39,0),u.rotation.y=-h*.2,u.rotation.z=h*.1,this.root.add(u),this.cups.push(u),qt(new co(.12,.6,.13,4,.05),e,u,0,.65,-.06);let f=qt(new co(.68,1.03,.4,5,.2),e,u,0,0,-.12);this.shells.push(f),qt(new co(.61,.95,.09,5,.18),t,u,0,0,.1),qt(new co(.5,.82,.08,4,.17),n,u,0,0,.19),qt(new Kn(.26,.082,16,64),n,u,0,0,.26).scale.set(.85,1.48,.85),qt(new Kn(.255,.008,8,64),t,u,0,0,.28).scale.set(1.12,1.76,1),qt(new Mn(.023,.023,.1,12),e,u,h*.3,-.18,.01).rotation.z=Math.PI/2;for(let p=0;p<5;p++)qt(new dn(.012,8,6),n,u,(p-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Er(s);this.textures.push(l);let c=new Ns(new Fs({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let e=new sr({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),t=new bt({color:"#c9ff54",metalness:.4,roughness:.28}),n=new bt({color:"#ddddcc",metalness:1,roughness:.18}),i=qt(new lc(.87,.29,160,24,2,3),e,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=qt(new Kn(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=qt(new sc(.38,1),t,this.root,1.45,1.3,.25);this.objects.push(o);let a=qt(new co(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let f=0;f<16384;f++){let d=128+oa(f)*35;n.data.set([d,d-4,d-12,255],f*4)}t.putImageData(n,0,0);let i=new Er(e);i.colorSpace=Zt,this.textures.push(i);let s=new bt({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new bt({color:10048316,roughness:.38,metalness:.55}),a=new bt({color:3689543,roughness:.22,metalness:.65}),l=new bt({color:4606275,roughness:.9}),c=new Gt(2.35,.11,2.35),h=new Gt(.11,.32,.11);for(let f=0;f<7;f++){let d=new Je;if(d.userData.level=f,this.root.add(d),qt(new Gt(2.35,.13,.68),s,d,0,0,-.835),qt(new Gt(2.35,.13,.68),s,d,0,0,.835),qt(new Gt(.68,.13,1),s,d,-.835,0,0),qt(new Gt(.68,.13,1),s,d,.835,0,0),f<6){for(let g of[-1.04,1.04])for(let p of[-1.04,1.04])qt(h,s,d,g,.22,p);for(let g=0;g<9;g++)qt(new Gt(.024,.25,.055),o,d,-.94+g*.235,.2,-1.08);qt(new Gt(.055,.25,1.58),a,d,1.06,.2,0)}this.objects.push(d)}qt(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),qt(new Gt(.85,.055,.85),o,this.root,0,-1.3,0);for(let f=0;f<6;f++)qt(new Gt(.8,.05,.13),s,this.root,0,-1.35-f*.04,1.25+f*.13);let u=qt(new Mn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);u.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let e=X2();this.textures.push(e);let t=new bt({map:e,side:Sn,roughness:.9,metalness:0,envMapIntensity:.2}),n=new Je;n.position.y=.45,this.root.add(n);let i=iy();for(let u=0;u<2;u++)for(let f=0;f<6;f++){let d=new Je;d.rotation.z=f/6*Math.PI*2+u*.52,n.add(d);let g=qt(i,t,d),p=1-u*.17;g.scale.set(p,p,p),g.position.set(0,.04+u*.035,u*.19),g.userData.ring=u,g.userData.phase=oa(f+u*6),this.petals.push(g)}let s=new bt({color:"#5c4630",roughness:.85}),o=new bt({color:"#dfb45b",roughness:.65});qt(new dn(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let u=0;u<115;u++){let f=u*2.399963,d=Math.sqrt(u/115)*.28,g=qt(new dn(.015+oa(u)*.007,6,5),u%3?o:s,n,Math.cos(f)*d,Math.sin(f)*d,.58+Math.sqrt(Math.max(0,.078-d*d))*.22);g.scale.z=1.7}let a=new bt({color:"#536742",roughness:.8,side:Sn}),l=new En([new I(.23,-2.5,-.15),new I(-.14,-1.3,-.13),new I(0,.4,0)]);qt(new Sr(l,40,.028,9,!1),a,this.root);for(let u of[-1,1]){let f=qt(iy(.95,.24),a,this.root,0,-1.05+u*.3,-.1);f.rotation.set(.3,u*.6,-u*.9),f.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let u=0;u<38;u++)c[u*3]=(oa(u*3)-.5)*4.7,c[u*3+1]=(oa(u*3+1)-.5)*4.5,c[u*3+2]=(oa(u*3+2)-.5)*2;let h=new xt;h.setAttribute("position",new Vt(c,3)),this.particles=new Jn(h,new oi({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:e,height:t}=this.container.getBoundingClientRect();!e||!t||(this.camera.aspect=e/t,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.render(0))}render(e){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||e>0&&e-this.lastFrame<1/30)return;this.lastFrame=e;let t=this.reduced?0:e,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(t*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(t*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(t*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=t*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(t*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(t*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(t*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let e=new Set,t=new Set;this.scene.traverse(n=>{if(n instanceof $e||n instanceof Jn){e.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))}else n instanceof Ns&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var C0=r=>{let e=Math.sin(r*127.1+17.7)*43758.5;return e-Math.floor(e)},Cf=class{constructor(e,t,n){this.host=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new wr(11258309,1.5));let i=new fn(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new fn(t==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),t==="pelagic"?this.capsule():this.armillary();try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Zt,this.renderer.toneMapping=Vi,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new Wr(this.renderer),a=new to;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),e.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(e),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new sn;camera=new Ht(34,1,.1,100);model=new Je;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(e,t,n=this.model,i=0,s=0,o=0){let a=new $e(e,t);return a.position.set(i,s,o),n.add(a),a}tube(e,t,n,i=this.model){return this.add(new Sr(new En(e),40,t,8,!1),n,i)}capsule(){let e=new bt({color:12240827,metalness:.86,roughness:.27}),t=new bt({color:1387827,metalness:.7,roughness:.32}),n=new bt({color:11838307,metalness:.85,roughness:.24}),i=new bt({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new dn(1.4,64,48),e).scale.set(1,1.13,.87),this.add(new Mn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new Kn(.64,.075,12,64),t,this.model,0,.12,1.28);let o=this.add(new dn(.59,48,32),new sr({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new Kn(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new bo(.33,48),new Pn({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new Kn(.42,.012,6,48,Math.PI*.55),new Pn({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let f=0;f<16;f++){let d=f*Math.PI/8;this.add(new Mn(.035,.035,.055,6),t,this.model,Math.cos(d)*.71,.12+Math.sin(d)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new Kn(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new Mn(.46,.56,.27,32),t,this.model,0,1.55,0),this.add(new Mn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new Mn(.018,.018,.8,8),e,this.model,.2,2.1,0),this.add(new dn(.055,12,8),i,this.model,.2,2.52,0);for(let f of[-1,1]){let d=new Je;d.position.set(f*1.2,-.55,.2),this.model.add(d),this.arms.push(d),this.add(new dn(.16,16,12),n,d),this.tube([new I,new I(f*.55,-.2,.3),new I(f*.6,-.55,.8)],.055,e,d),this.add(new Gt(.23,.14,.36),t,d,f*.6,-.55,.9);for(let g of[-1,1])this.tube([new I(f*.6+g*.09,-.55,1),new I(f*.6+g*.14,-.7,1.2),new I(f*.6+g*.05,-.75,1.3)],.025,n,d);this.tube([new I(f*.85,-1.2,-.6),new I(f*1.1,-1.7,-.4),new I(f*1.1,-1.7,1.1)],.055,e),this.add(new Mn(.21,.21,.5,24),t,this.model,f*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new dn(.12,12,8),i,this.model,f*.87,-.5,1.06)}let h=new Float32Array(650*3);for(let f=0;f<650;f++)h[f*3]=(C0(f*3)-.5)*14,h[f*3+1]=(C0(f*3+1)-.5)*14,h[f*3+2]=(C0(f*3+2)-.5)*8-2;let u=new xt;u.setAttribute("position",new Vt(h,3)),this.particles=new Jn(u,new oi({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let e=new bt({color:13673053,metalness:.95,roughness:.25}),t=new bt({color:13221281,metalness:.9,roughness:.3}),n=new bt({color:4867381,metalness:.85,roughness:.27}),i=new bt({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new dn(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new Kn(.686,.005,4,96),e);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new Je;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new Kn(l,o===5?.055:.029,8,128),o%2?e:t,a),o===5&&this.add(new Kn(l+.1,.012,6,128),e,a);for(let c=0;c<72;c++){let h=c*Math.PI/36,u=l+(c%6===0?.055:.027),f=this.add(new Gt(.008,c%6===0?.09:.035,.018),n,a,Math.sin(h)*u,Math.cos(h)*u,0);f.rotation.z=-h}this.add(new dn(.07+o*.013,16,12),o%2?e:t,a,l,0,0)}let s=this.add(new Mn(.055,.1,1.2,24),e,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new Mn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new Mn(.62,.62,.04,64),e,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let e=this.host.getBoundingClientRect();e.width<1||e.height<1||(this.camera.aspect=e.width/e.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(e.width,e.height,!1),this.render(0,!0))}render(e,t=!1){if(!this.renderer||this.disposed||!t&&(!this.visible||document.hidden||e-this.last<1/30))return;this.last=e;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(e*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(e=>{(e instanceof $e||e instanceof Jn)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var xl=(r,e,t)=>ue.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.8:1)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});function ry(r){ue.from(`${r} h2`,{y:90,rotationX:12,transformOrigin:"50% 100%",opacity:.35,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}})}function q2(){let r=document.querySelector(".rv-hero"),e=r.querySelector(".rv-desert img"),t=r.clientWidth,n=r.clientHeight,i=(e.naturalWidth||1792)/(e.naturalHeight||1008),s=Math.max(t,n*i),o=s/i,a=(t-s)/2,l=(n-o)/2,c=(s*.415+a)/t*100,h=100-(s*.58+a)/t*100,u=(o*.175+l)/n*100,f=100-(o*.79+l)/n*100,d=Math.max(0,s*.165/2);return`inset(${u}% ${h}% ${f}% ${c}% round ${d}px ${d}px 0px 0px)`}function Y2(r){ue.set(".rv-portal-copy",{autoAlpha:0}),xl(".rv-hero",4,r).to(".rv-hero-copy .im-word",{yPercent:-80,rotationX:60,rotation:-5,autoAlpha:0,stagger:.07,duration:.8},.12).to(".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",{autoAlpha:0,y:-25,duration:.5},.12).to(".rv-seal",{rotation:140,scale:.75,autoAlpha:0,duration:1},0).to(".rv-world",{scale:1.45,transformOrigin:"50% 47%",duration:2.2,ease:"power1.inOut"},.15).fromTo(".rv-portal-window",{clipPath:q2},{clipPath:"inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",duration:1.9,ease:"power2.inOut"},.7).fromTo(".rv-portal-window img",{scale:1.12},{scale:1,duration:2.8,ease:"none"},.6).to(".rv-desert",{autoAlpha:0,duration:.45},2.05).to(".rv-world",{scale:1,duration:1.4,ease:"sine.out"},2.3).fromTo(".rv-portal-copy",{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.7},2.5).to(".rv-hero-shade",{backgroundColor:"#0e29252a",duration:1},2).to(".rv-portal-copy",{autoAlpha:0,y:-35,duration:.5},3.55),ry(".rv-prologue"),ue.to(".rv-asterisk",{rotation:140,scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:1.2}}),ue.to(".rv-word-ribbon span",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:.7}}),ue.set(".rv-room-1,.rv-room-2",{autoAlpha:0,rotationY:72,xPercent:r?20:12}),ue.set(".rv-room-rail>div:first-child",{opacity:1}),xl(".rv-rooms-pin",5,r).fromTo(".rv-room-0 .rv-room-photo img",{scale:1.12,xPercent:2},{scale:1,xPercent:-2,duration:1.3,ease:"none"},0).to(".rv-room-rail>div:nth-child(1) i",{scaleX:1,duration:1.3,ease:"none"},0).to(".rv-room-0",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},1).to(".rv-room-1",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},1.2).fromTo(".rv-room-1 .rv-room-photo img",{scale:1.18,xPercent:3},{scale:1,xPercent:-2,duration:2,ease:"none"},1.2).to(".rv-room-rail>div:nth-child(1)",{opacity:.35,duration:.4},1.3).to(".rv-room-rail>div:nth-child(2)",{opacity:1,duration:.4},1.5).to(".rv-room-rail>div:nth-child(2) i",{scaleX:1,duration:1.2,ease:"none"},2).to(".rv-room-1",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},3).to(".rv-room-2",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},3.2).fromTo(".rv-room-2 .rv-room-photo img",{scale:1.15,yPercent:3},{scale:1,yPercent:-2,duration:1.8,ease:"none"},3.2).to(".rv-room-rail>div:nth-child(2)",{opacity:.35,duration:.4},3.3).to(".rv-room-rail>div:nth-child(3)",{opacity:1,duration:.4},3.5).to(".rv-room-rail>div:nth-child(3) i",{scaleX:1,duration:1,ease:"none"},4),ue.set(".rv-postcard-border,.rv-keepsake-note",{autoAlpha:0}),xl(".rv-keepsake-pin",3.8,r).fromTo(".rv-fragment",{x:i=>(i%3-1)*(r?130:280),y:i=>(Math.floor(i/3)-1)*(r?100:200),z:i=>i%2?-160:180,rotation:i=>(i-4)*9,rotationY:i=>(i%3-1)*30,scale:.75,autoAlpha:.55},{x:0,y:0,z:0,rotation:0,rotationY:0,scale:1,autoAlpha:1,stagger:{each:.1,from:"center"},duration:1.5,ease:"power2.inOut"},0).to(".rv-postcard",{rotation:0,scale:1.02,duration:2.2},0).to(".rv-keepsake-heading",{y:-30,autoAlpha:r?.7:.35,duration:1.3},1).to(".rv-postcard-border",{autoAlpha:1,rotation:0,scale:1.02,duration:.6},2.1).fromTo(".rv-keepsake-note",{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.6},2.6).to(".rv-postcard,.rv-postcard-border",{y:r?-10:-35,rotation:-3,duration:.8},3),ue.fromTo(".rv-contact-circle",{scale:.7,y:130},{scale:1.2,y:-80,scrollTrigger:{trigger:".rv-contact",start:"top bottom",end:"bottom bottom",scrub:1}}),ue.from(".rv-contact h2",{yPercent:60,rotationX:40,opacity:.2,stagger:.1,scrollTrigger:{trigger:".rv-contact",start:"top 85%",end:"top 10%",scrub:1}})}function $2(r){ue.set(".tv-ascent-copy",{autoAlpha:0});let e={value:1200},t=document.querySelector(".tv-altitude strong");xl(".tv-hero",3.8,r).to(".tv-hero-copy .im-word",{yPercent:-120,rotationX:60,autoAlpha:0,stagger:.1,duration:.8},.1).to(".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",{y:-30,autoAlpha:0,duration:.5},.1).to(".tv-ridge-plane img",{scale:1.16,transformOrigin:"65% 25%",duration:1.5},0).to(".tv-ridge-plane",{yPercent:u=>(u-2)*(r?12:18),rotationY:u=>(u-2)*-9,rotationZ:u=>(u-2)*2,z:u=>Math.abs(u-2)*-90,xPercent:u=>(u-2)*8,duration:1.8,ease:"power2.inOut"},1).to(".tv-hero-shade",{backgroundColor:"#08162077",duration:1.4},1).to(".tv-grid",{autoAlpha:0,duration:.5},1).to(".tv-vertical-rule",{yPercent:-60,duration:3.8,ease:"none"},0).to(e,{value:4860,duration:3.8,ease:"none",onUpdate:()=>{t.textContent=Math.round(e.value).toLocaleString("en-US")}},0).fromTo(".tv-ascent-copy",{autoAlpha:0,y:70},{autoAlpha:1,y:0,duration:.8},1.8).to(".tv-ascent-copy",{autoAlpha:0,y:-35,duration:.5},3.3),ry(".tv-belief"),ue.to(".tv-belief-compass",{rotation:110,scrollTrigger:{trigger:".tv-belief",start:"top bottom",end:"bottom top",scrub:1}}),ue.set(".tv-route-notes article:not(:first-child)",{autoAlpha:0,y:20}),ue.set(".tv-map-fold",{rotationY:u=>u%2?-35:35});let i=document.querySelector(".tv-route-line"),s=document.querySelector(".tv-route-traveller"),o={progress:0},a=i.getTotalLength(),l=()=>{let u=i.getPointAtLength(o.progress*a);ue.set(s,{x:u.x,y:u.y})};l(),xl(".tv-route-pin",4,r).to(".tv-map-fold",{rotationY:0,stagger:.1,duration:1.2,ease:"power2.inOut"},0).fromTo(".tv-fold-map",{rotationX:43,rotationZ:-20,scale:.8},{rotationX:0,rotationZ:0,scale:1,duration:1.8},0).fromTo(".tv-map-drawing",{autoAlpha:0},{autoAlpha:1,duration:.6},.8).fromTo(".tv-contour-lines path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.1,ease:"none"},.6).fromTo(".tv-route-line",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:2.4,ease:"none"},1.2).to(o,{progress:1,duration:2.4,ease:"none",onUpdate:l},1.2).to(".tv-route-progress i",{scaleX:1,duration:3.8,ease:"none"},0).to(".tv-route-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1.2).to(".tv-route-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".tv-route-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.5).to(".tv-route-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.85).to(".tv-fold-map",{rotationX:r?8:15,rotationZ:8,scale:1.05,duration:.8},3.2),ue.set(".tv-summit-copy,.tv-summit-stamp",{autoAlpha:0}),xl(".tv-crossing-pin",5,r).fromTo(".tv-ice-plane img",{scale:1.2,transformOrigin:"50% 35%"},{scale:1,transformOrigin:"50% 35%",duration:1.5},0).to(".tv-crossing-heading",{y:-50,autoAlpha:0,duration:.7},.8).to(".tv-crossing-details",{autoAlpha:0,duration:.5},1).to(".tv-crossing-aperture i",{scaleY:0,duration:1},.7).to(".tv-ice-plane",{xPercent:u=>u<3?-850:u>3?850:0,yPercent:u=>u===3?-135:u%2?14:-14,rotationY:u=>u<3?-35:u>3?35:0,rotationX:u=>u===3?35:0,autoAlpha:0,stagger:{each:.13,from:"center"},duration:1.7,ease:"power2.inOut"},1.4).to(".tv-summit-photo img",{scale:1,duration:3.8,ease:"none"},.6).to(".tv-crossing-shade",{backgroundColor:"#0d182b22",duration:1},2).fromTo(".tv-summit-copy",{autoAlpha:0,y:75},{autoAlpha:1,y:0,duration:.8},3).fromTo(".tv-summit-stamp",{autoAlpha:0,scale:.7,rotation:-35},{autoAlpha:1,scale:1,rotation:0,duration:.9},3.5).to(".tv-summit-copy h2",{y:-25,duration:1.2},3.7).to(".tv-summit-stamp svg",{rotation:30,duration:1.5},3.5),ue.from(".tv-contact h2",{x:-80,rotation:-4,opacity:.2,scrollTrigger:{trigger:".tv-contact",start:"top 85%",end:"top 10%",scrub:1}}),ue.from(".tv-end-altitude i",{y:100,rotation:-35,scrollTrigger:{trigger:".tv-contact",start:"top 80%",end:"bottom bottom",scrub:1}})}function sy(r,e){r==="reverie"?Y2(e):r==="traverse"&&$2(e)}var uo=(r,e,t)=>ue.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function P0(r){ue.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),ue.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function Z2(r,e){ue.set(".pl-descent-copy",{autoAlpha:0});let t={value:0},n=document.querySelector(".pl-depth-number");uo(".pl-hero",3.8,e).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:e?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(t,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(t.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:e?17:7,xPercent:e?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),P0(".pl-intro"),ue.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),uo(".pl-survey-pin",3.6,e).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:e?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),ue.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),uo(".pl-life-pin",4,e).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),ue.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function J2(r,e){ue.set(".he-unfold-copy",{autoAlpha:0}),uo(".he-hero",3.8,e).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:e?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:e?15:6,yPercent:e?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),P0(".he-prologue"),ue.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),ue.set(".he-totality",{autoAlpha:0}),uo(".he-eclipse-pin",4.5,e).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=ue.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});ue.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{ue.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ue.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ue.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),ue.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function K2(r){ue.set(".af-through-copy",{autoAlpha:0}),uo(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),P0(".af-intro"),uo(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),ue.set(".af-select-frame",{autoAlpha:0}),uo(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),ue.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function oy(r,e,t){r==="pelagic"&&e?Z2(e,t):r==="heliograph"&&e?J2(e,t):r==="afterimage"&&K2(t)}var j2=[{id:"burrow",name:"Burrow",number:"19",headline:"The light is under our feet.",color:"#ffd34d",background:"#1c1410",cover:"/motion/burrow-cover.jpg",category:"PIXEL ART / UNDERGROUND FABLE",description:"Scroll dives you into a mole's burrow and flies you forward through one winding voxel tunnel: a fossil ribcage, a blind river, a crystal hall, the tree's cold heart. Then the light rushes you back up and the hill blooms.",tags:["Into-the-screen flight","Voxel caverns + fossil","Inventory hotbar UI"],chapters:["The grey tree","Topsoil","The bone hall","The blind river","The crystal hall","The heart root","Bloom"]},{id:"cloudwhale",name:"Cloudwhale",number:"18",headline:"We have never touched the ground.",color:"#ffd34d",background:"#16193a",cover:"/motion/cloudwhale-cover.jpg",category:"PIXEL ART / VOXEL FABLE",description:"A town of twelve houses lives on the back of a 212-year-old sky whale. Ride out a storm, dive through the cloud sea, hear her sing, and watch the town move house, told in scroll-typed dialogue and palette-true pixel 3D.",tags:["Voxel whales + town","Palette-dithered pixel 3D","Scroll-typed RPG dialogue"],chapters:["The town on the whale","Old Silverback","The storm","Below the clouds","The song","The young one","Home"]},{id:"halcyon",name:"Halcyon",number:"15",headline:"The Living Layer For Creative Systems",color:"#efe6a4",background:"#141414",cover:"/motion/halcyon-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A product landing page whose hero is alive: an iridescent butterfly rendered in real time, seen through pastel ordered dither, glow and twinkling scales.",tags:["Real-time 3D butterfly","Bayer-dither look","SaaS landing layout"],chapters:["A living layer","Trusted by makers","How it works","A point of view","Start creating"]},{id:"bloomfield",name:"Bloomfield",number:"16",headline:"Grow Something Worth Keeping",color:"#e8e8e4",background:"#080808",cover:"/motion/bloomfield-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A monochrome meadow on a pixel grid. Daisies and cosmos unfurl as the page arrives, sway in travelling wind and lean away from your cursor.",tags:["Blooming 3D meadow","Mono pixel grid","Centred hero"],chapters:["Plant an idea","Why it grows","Grown by","In their words","Begin"]},{id:"aurelle",name:"Aurelle",number:"17",headline:"Design That Glows Before Words",color:"#ff4fae",background:"#0a0809",cover:"/motion/aurelle-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A studio landing page around a lotus lit from within. It breathes open and closed, smeared into vertical streaks of light with radiating god rays.",tags:["Breathing 3D lotus","Streak + god-ray look","Framed studio layout"],chapters:["Creative vision","Built with","Services","Process","Begin a project"]},{id:"goldseam",name:"Goldseam",number:"14",headline:"Some things mend in gold.",color:"#d9a54a",background:"#ebe3d5",cover:"/motion/goldseam-cover.jpg",category:"CRAFT / KINTSUGI STORY",description:"A tea bowl\u2019s whole life in one scroll. It slips from its plinth, shatters into thirteen real 3D fragments, is catalogued piece by piece, and is rebuilt with seams of gold.",tags:["Real-time fracture","Gold-dust repair","Seven-chapter story"],chapters:["Forty-one winters of tea.","It took less than a second.","Keep every piece.","Repair is a kind of patience.","Don\u2019t hide the break.","More beautiful for having been broken.","And tomorrow, tea."]},{id:"mosslight",name:"Mosslight",number:"13",headline:"A little world that listens.",color:"#9df5c9",background:"#03070b",cover:"/motion/mosslight-cover.jpg",category:"PIXEL HORIZON / INTERACTIVE SCENE",description:"An interactive listening grove: a radio observatory, ringed planet, fireflies and a lake that answers your cursor. Change the atmosphere, send a signal or carry the scene into your own site.",tags:["Living pixel horizon","Three atmospheres","Reusable web component"],chapters:["The listening grove"]},{id:"lightkeeper",name:"The Last Lightkeeper",number:"12",headline:"Carry the last light.",color:"#f3ad76",background:"#0b1720",cover:"/motion/lightkeeper-cover.jpg",category:"PIXEL FABLE / VOXEL WORLD",description:"A small keeper wakes an abandoned observatory. Ride the keeper\u2019s cable lift, restore the lenses, send a pulse to a sleeping village and follow its reply home at dawn.",tags:["Voxel architecture","Vertical story journey","GSAP + 3D"],chapters:["A window in the dark","The mountain remembers","Take the light below","One small light is enough","Give the dark an answer","One window. Then another","You were never the last"]},{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]},{id:"reverie",cover:"/motion/reverie-cover.jpg",number:"08",name:"Reverie",category:"ART / IMAGINED PLACES",headline:"Leave the ordinary behind.",description:"A passage through the impossible. Step inside a desert portal, turn the walls of a dream gallery, and piece together a place that only exists in your imagination.",color:"#b94d37",background:"#f0debd",tags:["Portal passage","Rotating dream gallery","Image assembly"],chapters:["The threshold","A different way of seeing","Rooms without rules","A place to keep"]},{id:"traverse",cover:"/motion/traverse-cover.jpg",number:"09",name:"Traverse",category:"EXPEDITION / ALPINE",headline:"A little further.",description:"An alpine story you move through. A fractured mountain panorama, a folding expedition map, and a glacier passage that opens onto the first light of a summit.",color:"#e1fc80",background:"#101e27",tags:["Fractured panorama","Folding terrain","Glacier-to-summit passage"],chapters:["Beyond the familiar","Find your own line","Through the blue","The long way up"]},{id:"nullsignal",name:"Null Signal",number:"10",headline:"A world between the lines.",color:"#c7eaa4",background:"#080b0b",cover:"/motion/nullsignal-cover.jpg",category:"ASCII / GLYPH OBSERVATORY",description:"A cabinet of character-built curiosities. Disassemble an ASCII armillary instrument, travel through a vaulted arcade, and draw a message from a scattered constellation.",tags:["ASCII sculpture","Depth-projected arcade","Character assembly"],chapters:["Anatomy of a signal","Inside the transmission","A message reassembled","Stay curious"]},{id:"bitquest",name:"Bitquest",number:"11",headline:"Beyond the edge of the map.",color:"#f0bb87",background:"#202940",cover:"/motion/bitquest-cover.jpg",category:"PIXEL ART / IMAGINED PLACES",description:"A hand-coded pixel expedition. Approach a floating clock-tower town, ride a moonlit railway, and unfold a seven-island atlas with a tiny traveler following your scroll.",tags:["Pixel town","Parallax railway","Unfolding island map"],chapters:["The skyward city","The midnight railway","An atlas of elsewhere","Make room for wonder"]}];function ay(r){return j2.some(e=>e.id===r)}ue.registerPlugin(vt);vt.config({ignoreMobileResize:!0});var mu=document.querySelector(".mt-page"),Bt=mu?.dataset.template,gu=r=>{parent!==window&&parent.postMessage(r,"*")};function Q2(r,e){ue.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),ue.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:e?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:e?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),ue.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),ue.fromTo(".ae-reveal em",{x:e?30:150},{x:e?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),ue.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),ue.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),ue.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:e?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),ue.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),ue.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),ue.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function eA(r,e){ue.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(e?75:130):e?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),ue.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(e?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=ue.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(e?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{ue.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),ue.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ue.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ue.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(e?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),ue.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),ue.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function tA(r,e){ue.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,ue.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:e?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),ue.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),ue.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),ue.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),ue.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(e?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:e?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:e?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),ue.from(".fl-season",{rotationY:e?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),ue.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),ue.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),ue.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function nA(r,e){ue.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),ue.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(e?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:e?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:e?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),ue.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),ue.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),ue.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:e?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),ue.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),ue.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),ue.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),ue.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),ue.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),gu({type:"motion-back",id:Bt})),r.key==="Tab"){let e=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===e.at(-1)?(r.preventDefault(),gu({type:"motion-focus",id:Bt,direction:"next"})):r.shiftKey&&document.activeElement===e[0]&&(r.preventDefault(),gu({type:"motion-focus",id:Bt,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(mu&&ay(Bt)){let r=ue.matchMedia(),e=-1;Promise.all([document.fonts.ready,...Array.from(mu.querySelectorAll("img[data-critical]")).map(t=>t.decode().catch(()=>{}))]).then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},t=>{let n=!!t.conditions?.reduce,i=!!t.conditions?.mobile;mu.classList.toggle("mt-reduced",n);let s=mu.querySelector(".mt-scene,.ns-scene"),o=s?Bt==="pelagic"||Bt==="heliograph"?new Cf(s,Bt,n):new Rf(s,Bt,n):void 0,a=m=>o?.render(m),l=Bt==="lightkeeper"?Nx(n):void 0,c=i0(Bt)?hv(Bt,n):void 0,h=Bt==="burrow"?sv(n):void 0,u=Bt==="cloudwhale"?Kx(n,i):void 0,f=Bt==="goldseam"?Xx(n,i):void 0,d=Bt==="nullsignal"||Bt==="bitquest"?ny(n):void 0;n?o&&(o.pose.bloom=1,o.render(0)):(ue.ticker.add(a),Bt==="aether"&&o?Q2(o,i):Bt==="offscript"&&o?eA(o,i):Bt==="floraison"&&o?tA(o,i):Bt==="monolith"&&o?nA(o,i):Bt==="reverie"||Bt==="traverse"?sy(Bt,i):!i0(Bt)&&Bt!=="burrow"&&Bt!=="cloudwhale"&&Bt!=="goldseam"&&Bt!=="lightkeeper"&&Bt!=="nullsignal"&&Bt!=="bitquest"&&oy(Bt,o,i),ue.utils.toArray(".mt-reveal").forEach(m=>ue.from(m,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:m,start:"top 85%",end:"top 30%",scrub:.8}})),ue.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let g=vt.create({start:0,end:"max",onUpdate:m=>{ue.set(".mt-progress i",{scaleX:m.progress}),Math.abs(e-m.progress)>.005&&(e=m.progress,gu({type:"motion-progress",id:Bt,progress:m.progress}))}}),p=!1,_=()=>{p||(p=!0,d?.(),l?.(),f?.(),u?.(),h?.(),c?.(),ue.ticker.remove(a),o?.dispose(),g.kill())};return window.addEventListener("pagehide",_,{once:!0}),requestAnimationFrame(()=>{vt.refresh(),document.documentElement.dataset.motionReady="true",gu({type:"motion-ready",id:Bt})}),()=>{_(),window.removeEventListener("pagehide",_)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2025 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)

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
*/
