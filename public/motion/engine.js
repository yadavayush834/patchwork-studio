"use strict";(()=>{var gg=0,_p=1,_g=2;var fc=1,Sh=2,ka=3,cs=0,In=1,nn=2,hr=0,xo=1,Hs=2,vp=3,xp=4,vg=5,Fs=100,xg=101,yg=102,bg=103,Mg=104,Eg=200,Sg=201,Tg=202,wg=203,$u=204,Zu=205,Ag=206,Rg=207,Cg=208,Pg=209,Ig=210,Lg=211,Dg=212,Fg=213,Ng=214,Th=0,wh=1,Ah=2,yo=3,Rh=4,Ch=5,Ph=6,Ih=7,Lh=0,Ug=1,Og=2,Ir=0,pc=1,mc=2,gc=3,Xi=4,_c=5,vc=6,xc=7;var yp=300,zs=301,Ro=302,Dh=303,Fh=304,yc=306,Aa=1e3,kr=1001,Ju=1002,en=1003,Bg=1004;var bc=1005;var Zn=1006,Nh=1007;var Vs=1008;var Di=1009,bp=1010,Mp=1011,Ha=1012,Uh=1013,Lr=1014,dr=1015,wn=1016,Oh=1017,Bh=1018,za=1020,Ep=35902,Sp=35899,Tp=1021,wp=1022,fr=1023,zr=1026,Gs=1027,kh=1028,Hh=1029,Co=1030,zh=1031;var Vh=1033,Mc=33776,Ec=33777,Sc=33778,Tc=33779,Gh=35840,Wh=35841,Xh=35842,qh=35843,Yh=36196,$h=37492,Zh=37496,Jh=37488,Kh=37489,jh=37490,Qh=37491,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,hd=37819,dd=37820,fd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,xd=36285,yd=36286;var Nl=2300,Ku=2301,Yu=2302,sp=2400,op=2401,ap=2402;var kg=3200;var bd=0,Hg=1,fs="",Kt="srgb",wr="srgb-linear",Ul="linear",Vt="srgb";var vo=7680;var lp=519,zg=512,Vg=513,Gg=514,Md=515,Wg=516,Xg=517,Ed=518,qg=519,ju=35044;var Ap="300 es",Tr=2e3,Ol=2001;function Rp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function hy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function Bl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Yg(){let r=Bl("canvas");return r.style.display="block",r}var N0={},Ra=null;function kl(...r){let e="THREE."+r.shift();Ra?Ra("log",e,...r):console.log(e,...r)}function ht(...r){let e="THREE."+r.shift();Ra?Ra("warn",e,...r):console.warn(e,...r)}function gt(...r){let e="THREE."+r.shift();Ra?Ra("error",e,...r):console.error(e,...r)}function Ca(...r){let e=r.join(" ");e in N0||(N0[e]=!0,ht(...r))}function $g(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],U0=1234567,Il=Math.PI/180,Pa=180/Math.PI;function Hr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function Tt(r,e,t){return Math.max(e,Math.min(t,r))}function Cp(r,e){return(r%e+e)%e}function dy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function fy(r,e,t){return r!==e?(t-r)/(e-r):0}function Ll(r,e,t){return(1-t)*r+t*e}function py(r,e,t,n){return Ll(r,e,1-Math.exp(-t*n))}function my(r,e=1){return e-Math.abs(Cp(r,e*2)-e)}function gy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function _y(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function vy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function xy(r,e){return r+Math.random()*(e-r)}function yy(r){return r*(.5-Math.random())}function by(r){r!==void 0&&(U0=r);let e=U0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function My(r){return r*Il}function Ey(r){return r*Pa}function Sy(r){return(r&r-1)===0&&r!==0}function Ty(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function wy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ay(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*g,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*g,a*c);break;case"ZYZ":r.set(l*g,l*d,a*h,a*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Sr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Po={DEG2RAD:Il,RAD2DEG:Pa,generateUUID:Hr,clamp:Tt,euclideanModulo:Cp,mapLinear:dy,inverseLerp:fy,lerp:Ll,damp:py,pingpong:my,smoothstep:gy,smootherstep:_y,randInt:vy,randFloat:xy,randFloatSpread:yy,seededRandom:by,degToRad:My,radToDeg:Ey,isPowerOfTwo:Sy,ceilPowerOfTwo:Ty,floorPowerOfTwo:wy,setQuaternionFromProperEuler:Ay,normalize:Zt,denormalize:Sr},ve=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],g=s[o+2],p=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=g,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==g){let _=l*f+c*d+h*g+u*p;_<0&&(f=-f,d=-d,g=-g,p=-p,_=-_);let m=1-a;if(_<.9995){let x=Math.acos(_),v=Math.sin(x);m=Math.sin(m*x)/v,a=Math.sin(a*x)/v,l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+p*a}else{l=l*m+f*a,c=c*m+d*a,h=h*m+g*a,u=u*m+p*a;let x=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=x,c*=x,h*=x,u*=x}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],g=s[o+3];return e[t]=a*g+h*u+l*d-c*f,e[t+1]=l*g+h*f+c*u-a*d,e[t+2]=c*g+h*d+a*f-l*u,e[t+3]=h*g-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),g=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"YXZ":this._x=f*h*u+c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"ZXY":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u-f*d*g;break;case"ZYX":this._x=f*h*u-c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u+f*d*g;break;case"YZX":this._x=f*h*u+c*d*g,this._y=c*d*u+f*h*g,this._z=c*h*g-f*d*u,this._w=c*h*u-f*d*g;break;case"XZY":this._x=f*h*u-c*d*g,this._y=c*d*u-f*h*g,this._z=c*h*g+f*d*u,this._w=c*h*u+f*d*g;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(O0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(O0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Lf.copy(this).projectOnVector(e),this.sub(Lf)}reflect(e){return this.sub(Lf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Tt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Lf=new C,O0=new _n,bt=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],g=n[8],p=i[0],_=i[3],m=i[6],x=i[1],v=i[4],y=i[7],M=i[2],S=i[5],w=i[8];return s[0]=o*p+a*x+l*M,s[3]=o*_+a*v+l*S,s[6]=o*m+a*y+l*w,s[1]=c*p+h*x+u*M,s[4]=c*_+h*v+u*S,s[7]=c*m+h*y+u*w,s[2]=f*p+d*x+g*M,s[5]=f*_+d*v+g*S,s[8]=f*m+d*y+g*w,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,g=t*u+n*f+i*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/g;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Df.makeScale(e,t)),this}rotate(e){return this.premultiply(Df.makeRotation(-e)),this}translate(e,t){return this.premultiply(Df.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Df=new bt,B0=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),k0=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Ry(){let r={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(i.r=Ta(i.r),i.g=Ta(i.g),i.b=Ta(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fs?Ul:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wr]:{primaries:e,whitePoint:n,transfer:Ul,toXYZ:B0,fromXYZ:k0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:B0,fromXYZ:k0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}var It=Ry();function ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ta(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var la,Qu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=Bl("canvas")),la.width=e.width,la.height=e.height;let i=la.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Bl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ls(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Cy=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Cy++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Ff(i[o].image)):s.push(Ff(i[o]))}else s=Ff(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Ff(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var Py=0,Nf=new C,Un=class r extends us{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=kr,i=kr,s=Zn,o=Vs,a=fr,l=Di,c=r.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Py++}),this.uuid=Hr(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Nf).x}get height(){return this.source.getSize(Nf).y}get depth(){return this.source.getSize(Nf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==yp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case kr:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case kr:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=yp;Un.DEFAULT_ANISOTROPY=1;var tn=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],g=l[9],p=l[2],_=l[6],m=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(g-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(g+_)<.1&&Math.abs(c+d+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let v=(c+1)/2,y=(d+1)/2,M=(m+1)/2,S=(h+f)/4,w=(u+p)/4,P=(g+_)/4;return v>y&&v>M?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=S/n,s=w/n):y>M?y<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(y),n=S/i,s=P/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=w/s,i=P/s),this.set(n,i,s,t),this}let x=Math.sqrt((_-g)*(_-g)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(x)<.001&&(x=1),this.x=(_-g)/x,this.y=(u-p)/x,this.z=(f-h)/x,this.w=Math.acos((c+d+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Tt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Un(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hl=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(br.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(br.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=br.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,br):br.fromBufferAttribute(s,o),br.applyMatrix4(e.matrixWorld),this.expandByPoint(br);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vu.copy(n.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,br),br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),xu.subVectors(this.max,yl),ca.subVectors(e.a,yl),ua.subVectors(e.b,yl),ha.subVectors(e.c,yl),Rs.subVectors(ua,ca),Cs.subVectors(ha,ua),po.subVectors(ca,ha);let t=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-po.z,po.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,po.z,0,-po.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-po.y,po.x,0];return!Uf(t,ca,ua,ha,xu)||(t=[1,0,0,0,1,0,0,0,1],!Uf(t,ca,ua,ha,xu))?!1:(yu.crossVectors(Rs,Cs),t=[yu.x,yu.y,yu.z],Uf(t,ca,ua,ha,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,br).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(br).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new C,new C,new C,new C,new C,new C,new C,new C],br=new C,vu=new Vr,ca=new C,ua=new C,ha=new C,Rs=new C,Cs=new C,po=new C,yl=new C,xu=new C,yu=new C,mo=new C;function Uf(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mo.fromArray(r,s);let a=i.x*Math.abs(mo.x)+i.y*Math.abs(mo.y)+i.z*Math.abs(mo.z),l=e.dot(mo),c=t.dot(mo),h=n.dot(mo);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var Iy=new Vr,bl=new C,Of=new C,Gr=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):Iy.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);let t=bl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Of.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(Of)),this.expandByPoint(bl.copy(e.center).sub(Of))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},is=new C,Bf=new C,bu=new C,Ps=new C,kf=new C,Mu=new C,Hf=new C,La=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bf.copy(e).add(t).multiplyScalar(.5),bu.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(Bf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(bu),a=Ps.dot(this.direction),l=-Ps.dot(bu),c=Ps.lengthSq(),h=Math.abs(1-o*o),u,f,d,g;if(h>0)if(u=o*l-a,f=o*a-l,g=s*h,u>=0)if(f>=-g)if(f<=g){let p=1/h;u*=p,f*=p,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bf).addScaledVector(bu,f),d}intersectSphere(e,t){is.subVectors(e.center,this.origin);let n=is.dot(this.direction),i=is.dot(is)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,n,i,s){kf.subVectors(t,e),Mu.subVectors(n,e),Hf.crossVectors(kf,Mu);let o=this.direction.dot(Hf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);let l=a*this.direction.dot(Mu.crossVectors(Ps,Mu));if(l<0)return null;let c=a*this.direction.dot(kf.cross(Ps));if(c<0||l+c>o)return null;let h=-a*Ps.dot(Hf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,g,p,_){let m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=i,m[1]=s,m[5]=o,m[9]=a,m[13]=l,m[2]=c,m[6]=h,m[10]=u,m[14]=f,m[3]=d,m[7]=g,m[11]=p,m[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/da.setFromMatrixColumn(e,0).length(),s=1/da.setFromMatrixColumn(e,1).length(),o=1/da.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+g*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=g+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f+p*a,t[4]=g*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-g,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,g=c*h,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=g+d*a,t[1]=d+g*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,g=a*h,p=a*u;t[0]=l*h,t[4]=g*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=p-f*u,t[8]=g*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+g,t[10]=f-p*u}else if(e.order==="XZY"){let f=o*l,d=o*c,g=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=o*h,t[9]=d*u-g,t[2]=g*u-d,t[6]=a*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ly,e,Dy)}lookAt(e,t,n){let i=this.elements;return ki.subVectors(e,t),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),Is.crossVectors(n,ki),Is.lengthSq()===0&&(Math.abs(n.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),Is.crossVectors(n,ki)),Is.normalize(),Eu.crossVectors(ki,Is),i[0]=Is.x,i[4]=Eu.x,i[8]=ki.x,i[1]=Is.y,i[5]=Eu.y,i[9]=ki.y,i[2]=Is.z,i[6]=Eu.z,i[10]=ki.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],g=n[2],p=n[6],_=n[10],m=n[14],x=n[3],v=n[7],y=n[11],M=n[15],S=i[0],w=i[4],P=i[8],b=i[12],E=i[1],L=i[5],A=i[9],D=i[13],B=i[2],G=i[6],z=i[10],k=i[14],K=i[3],re=i[7],N=i[11],oe=i[15];return s[0]=o*S+a*E+l*B+c*K,s[4]=o*w+a*L+l*G+c*re,s[8]=o*P+a*A+l*z+c*N,s[12]=o*b+a*D+l*k+c*oe,s[1]=h*S+u*E+f*B+d*K,s[5]=h*w+u*L+f*G+d*re,s[9]=h*P+u*A+f*z+d*N,s[13]=h*b+u*D+f*k+d*oe,s[2]=g*S+p*E+_*B+m*K,s[6]=g*w+p*L+_*G+m*re,s[10]=g*P+p*A+_*z+m*N,s[14]=g*b+p*D+_*k+m*oe,s[3]=x*S+v*E+y*B+M*K,s[7]=x*w+v*L+y*G+M*re,s[11]=x*P+v*A+y*z+M*N,s[15]=x*b+v*D+y*k+M*oe,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],g=e[3],p=e[7],_=e[11],m=e[15],x=l*d-c*f,v=a*d-c*u,y=a*f-l*u,M=o*d-c*h,S=o*f-l*h,w=o*u-a*h;return t*(p*x-_*v+m*y)-n*(g*x-_*M+m*S)+i*(g*v-p*M+m*w)-s*(g*y-p*S+_*w)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],g=e[12],p=e[13],_=e[14],m=e[15],x=u*_*c-p*f*c+p*l*d-a*_*d-u*l*m+a*f*m,v=g*f*c-h*_*c-g*l*d+o*_*d+h*l*m-o*f*m,y=h*p*c-g*u*c+g*a*d-o*p*d-h*a*m+o*u*m,M=g*u*l-h*p*l-g*a*f+o*p*f+h*a*_-o*u*_,S=t*x+n*v+i*y+s*M;if(S===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/S;return e[0]=x*w,e[1]=(p*f*s-u*_*s-p*i*d+n*_*d+u*i*m-n*f*m)*w,e[2]=(a*_*s-p*l*s+p*i*c-n*_*c-a*i*m+n*l*m)*w,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*w,e[4]=v*w,e[5]=(h*_*s-g*f*s+g*i*d-t*_*d-h*i*m+t*f*m)*w,e[6]=(g*l*s-o*_*s-g*i*c+t*_*c+o*i*m-t*l*m)*w,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*d+t*l*d)*w,e[8]=y*w,e[9]=(g*u*s-h*p*s-g*n*d+t*p*d+h*n*m-t*u*m)*w,e[10]=(o*p*s-g*a*s+g*n*c-t*p*c-o*n*m+t*a*m)*w,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*w,e[12]=M*w,e[13]=(h*p*i-g*u*i+g*n*f-t*p*f-h*n*_+t*u*_)*w,e[14]=(g*a*i-o*p*i-g*n*l+t*p*l+o*n*_-t*a*_)*w,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*w,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,g=s*u,p=o*h,_=o*u,m=a*u,x=l*c,v=l*h,y=l*u,M=n.x,S=n.y,w=n.z;return i[0]=(1-(p+m))*M,i[1]=(d+y)*M,i[2]=(g-v)*M,i[3]=0,i[4]=(d-y)*S,i[5]=(1-(f+m))*S,i[6]=(_+x)*S,i[7]=0,i[8]=(g+v)*w,i[9]=(_-x)*w,i[10]=(1-(f+p))*w,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=da.set(i[0],i[1],i[2]).length(),o=da.set(i[4],i[5],i[6]).length(),a=da.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Mr.copy(this);let c=1/s,h=1/o,u=1/a;return Mr.elements[0]*=c,Mr.elements[1]*=c,Mr.elements[2]*=c,Mr.elements[4]*=h,Mr.elements[5]*=h,Mr.elements[6]*=h,Mr.elements[8]*=u,Mr.elements[9]*=u,Mr.elements[10]*=u,t.setFromRotationMatrix(Mr),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Tr,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),g,p;if(l)g=s/(o-s),p=o*s/(o-s);else if(a===Tr)g=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Ol)g=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Tr,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),g,p;if(l)g=1/(o-s),p=o/(o-s);else if(a===Tr)g=-2/(o-s),p=-(o+s)/(o-s);else if(a===Ol)g=-1/(o-s),p=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=g,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},da=new C,Mr=new Pt,Ly=new C(0,0,0),Dy=new C(1,1,1),Is=new C,Eu=new C,ki=new C,H0=new Pt,z0=new _n,Xn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(Tt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Tt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Tt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return H0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(H0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return z0.setFromEuler(this),this.setFromQuaternion(z0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Fy=0,V0=new C,fa=new _n,rs=new Pt,Su=new C,Ml=new C,Ny=new C,Uy=new _n,G0=new C(1,0,0),W0=new C(0,1,0),X0=new C(0,0,1),q0={type:"added"},Oy={type:"removed"},pa={type:"childadded",child:null},zf={type:"childremoved",child:null},yn=class r extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Fy++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new C,t=new Xn,n=new _n,i=new C(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new bt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(G0,e)}rotateY(e){return this.rotateOnAxis(W0,e)}rotateZ(e){return this.rotateOnAxis(X0,e)}translateOnAxis(e,t){return V0.copy(e).applyQuaternion(this.quaternion),this.position.add(V0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(G0,e)}translateY(e){return this.translateOnAxis(W0,e)}translateZ(e){return this.translateOnAxis(X0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Su.copy(e):Su.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Ml,Su,this.up):rs.lookAt(Su,Ml,this.up),this.quaternion.setFromRotationMatrix(rs),i&&(rs.extractRotation(i.matrixWorld),fa.setFromRotationMatrix(rs),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(q0),pa.child=e,this.dispatchEvent(pa),pa.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Oy),zf.child=e,this.dispatchEvent(zf),zf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(q0),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,Ny),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,Uy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yn.DEFAULT_UP=new C(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Er=new C,ss=new C,Vf=new C,os=new C,ma=new C,ga=new C,Y0=new C,Gf=new C,Wf=new C,Xf=new C,qf=new tn,Yf=new tn,$f=new tn,as=class r{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Er.subVectors(e,t),i.cross(Er);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Er.subVectors(i,t),ss.subVectors(n,t),Vf.subVectors(e,t);let o=Er.dot(Er),a=Er.dot(ss),l=Er.dot(Vf),c=ss.dot(ss),h=ss.dot(Vf),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,g=(o*h-a*l)*f;return s.set(1-d-g,g,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,os.x),l.addScaledVector(o,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return qf.setScalar(0),Yf.setScalar(0),$f.setScalar(0),qf.fromBufferAttribute(e,t),Yf.fromBufferAttribute(e,n),$f.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(qf,s.x),o.addScaledVector(Yf,s.y),o.addScaledVector($f,s.z),o}static isFrontFacing(e,t,n,i){return Er.subVectors(n,t),ss.subVectors(e,t),Er.cross(ss).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Er.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Er.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;ma.subVectors(i,n),ga.subVectors(s,n),Gf.subVectors(e,n);let l=ma.dot(Gf),c=ga.dot(Gf);if(l<=0&&c<=0)return t.copy(n);Wf.subVectors(e,i);let h=ma.dot(Wf),u=ga.dot(Wf);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ma,o);Xf.subVectors(e,s);let d=ma.dot(Xf),g=ga.dot(Xf);if(g>=0&&d<=g)return t.copy(s);let p=d*c-l*g;if(p<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(ga,a);let _=h*g-d*u;if(_<=0&&u-h>=0&&d-g>=0)return Y0.subVectors(s,i),a=(u-h)/(u-h+(d-g)),t.copy(i).addScaledVector(Y0,a);let m=1/(_+p+f);return o=p*m,a=f*m,t.copy(n).addScaledVector(ma,o).addScaledVector(ga,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Zg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Tu={h:0,s:0,l:0};function Zf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=It.workingColorSpace){return this.r=e,this.g=t,this.b=n,It.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=It.workingColorSpace){if(e=Cp(e,1),t=Tt(t,0,1),n=Tt(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Zf(o,s,e+1/3),this.g=Zf(o,s,e),this.b=Zf(o,s,e-1/3)}return It.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Zg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Ta(e.r),this.g=Ta(e.g),this.b=Ta(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return It.workingToColorSpace(ri.copy(this),e),Math.round(Tt(ri.r*255,0,255))*65536+Math.round(Tt(ri.g*255,0,255))*256+Math.round(Tt(ri.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(ri.copy(this),t);let n=ri.r,i=ri.g,s=ri.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Kt){It.workingToColorSpace(ri.copy(this),e);let t=ri.r,n=ri.g,i=ri.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Tu);let n=Ll(Ls.h,Tu.h,t),i=Ll(Ls.s,Tu.s,t),s=Ll(Ls.l,Tu.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new Me;Me.NAMES=Zg;var By=0,zi=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:By++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=xo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Zu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$u&&(n.blendSrc=this.blendSrc),this.blendDst!==Zu&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==lp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bn=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new C,wu=new ve,ky=0,Nt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ky++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}};var Vl=class extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gl=class extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Hy=0,or=new Pt,Jf=new yn,_a=new C,Hi=new Vr,El=new Vr,Wn=new C,vt=class r extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Hy++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Rp(e)?Gl:Vl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,t,n){return or.makeTranslation(e,t,n),this.applyMatrix4(or),this}scale(e,t,n){return or.makeScale(e,t,n),this.applyMatrix4(or),this}lookAt(e){return Jf.lookAt(e),Jf.updateMatrix(),this.applyMatrix4(Jf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(Hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(Hi.min,El.min),Hi.expandByPoint(Wn),Wn.addVectors(Hi.max,El.max),Hi.expandByPoint(Wn)):(Hi.expandByPoint(El.min),Hi.expandByPoint(El.max))}Hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wn.fromBufferAttribute(a,c),l&&(_a.fromBufferAttribute(e,c),Wn.add(_a)),i=Math.max(i,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new C,l[P]=new C;let c=new C,h=new C,u=new C,f=new ve,d=new ve,g=new ve,p=new C,_=new C;function m(P,b,E){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,P),d.fromBufferAttribute(s,b),g.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),g.sub(f);let L=1/(d.x*g.y-g.x*d.y);isFinite(L)&&(p.copy(h).multiplyScalar(g.y).addScaledVector(u,-d.y).multiplyScalar(L),_.copy(u).multiplyScalar(d.x).addScaledVector(h,-g.x).multiplyScalar(L),a[P].add(p),a[b].add(p),a[E].add(p),l[P].add(_),l[b].add(_),l[E].add(_))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,b=x.length;P<b;++P){let E=x[P],L=E.start,A=E.count;for(let D=L,B=L+A;D<B;D+=3)m(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let v=new C,y=new C,M=new C,S=new C;function w(P){M.fromBufferAttribute(i,P),S.copy(M);let b=a[P];v.copy(b),v.sub(M.multiplyScalar(M.dot(b))).normalize(),y.crossVectors(S,b);let L=y.dot(l[P])<0?-1:1;o.setXYZW(P,v.x,v.y,v.z,L)}for(let P=0,b=x.length;P<b;++P){let E=x[P],L=E.start,A=E.count;for(let D=L,B=L+A;D<B;D+=3)w(e.getX(D+0)),w(e.getX(D+1)),w(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new C,s=new C,o=new C,a=new C,l=new C,c=new C,h=new C,u=new C;if(e)for(let f=0,d=e.count;f<d;f+=3){let g=e.getX(f+0),p=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,g=0;for(let p=0,_=l.length;p<_;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let m=0;m<h;m++)f[g++]=c[d++]}return new Nt(f,h,u)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},$0=new Pt,go=new La,Au=new Gr,Z0=new C,Ru=new C,Cu=new C,Pu=new C,Kf=new C,Iu=new C,J0=new C,Lu=new C,Ue=class extends yn{constructor(e=new vt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Iu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(Kf.fromBufferAttribute(u,e),o?Iu.addScaledVector(Kf,h):Iu.addScaledVector(Kf.sub(t),h))}t.add(Iu)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Au.copy(n.boundingSphere),Au.applyMatrix4(s),go.copy(e.ray).recast(e.near),!(Au.containsPoint(go.origin)===!1&&(go.intersectSphere(Au,Z0)===null||go.origin.distanceToSquared(Z0)>(e.far-e.near)**2))&&($0.copy(s).invert(),go.copy(e.ray).applyMatrix4($0),!(n.boundingBox!==null&&go.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,p=f.length;g<p;g++){let _=f[g],m=o[_.materialIndex],x=Math.max(_.start,d.start),v=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let S=a.getX(y),w=a.getX(y+1),P=a.getX(y+2);i=Du(this,m,e,n,c,h,u,S,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let _=g,m=p;_<m;_+=3){let x=a.getX(_),v=a.getX(_+1),y=a.getX(_+2);i=Du(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,p=f.length;g<p;g++){let _=f[g],m=o[_.materialIndex],x=Math.max(_.start,d.start),v=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let y=x,M=v;y<M;y+=3){let S=y,w=y+1,P=y+2;i=Du(this,m,e,n,c,h,u,S,w,P),i&&(i.faceIndex=Math.floor(y/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let g=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let _=g,m=p;_<m;_+=3){let x=_,v=_+1,y=_+2;i=Du(this,o,e,n,c,h,u,x,v,y),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function zy(r,e,t,n,i,s,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===cs,a),l===null)return null;Lu.copy(a),Lu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Lu);return c<t.near||c>t.far?null:{distance:c,point:Lu.clone(),object:r}}function Du(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ru),r.getVertexPosition(l,Cu),r.getVertexPosition(c,Pu);let h=zy(r,e,t,n,Ru,Cu,Pu,J0);if(h){let u=new C;as.getBarycoord(J0,Ru,Cu,Pu,u),i&&(h.uv=as.getInterpolatedAttribute(i,a,l,c,u,new ve)),s&&(h.uv1=as.getInterpolatedAttribute(s,a,l,c,u,new ve)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,u,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new C,materialIndex:0};as.getNormal(Ru,Cu,Pu,f.normal),h.face=f,h.barycoord=u}return h}var Wt=class r extends vt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;g("z","y","x",-1,-1,n,t,e,o,s,0),g("z","y","x",1,-1,n,t,-e,o,s,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function g(p,_,m,x,v,y,M,S,w,P,b){let E=y/w,L=M/P,A=y/2,D=M/2,B=S/2,G=w+1,z=P+1,k=0,K=0,re=new C;for(let N=0;N<z;N++){let oe=N*L-D;for(let ke=0;ke<G;ke++){let He=ke*E-A;re[p]=He*x,re[_]=oe*v,re[m]=B,c.push(re.x,re.y,re.z),re[p]=0,re[_]=0,re[m]=S>0?1:-1,h.push(re.x,re.y,re.z),u.push(ke/w),u.push(1-N/P),k+=1}}for(let N=0;N<P;N++)for(let oe=0;oe<w;oe++){let ke=f+oe+G*N,He=f+oe+G*(N+1),Ye=f+(oe+1)+G*(N+1),it=f+(oe+1)+G*N;l.push(ke,He,it),l.push(He,Ye,it),K+=6}a.addGroup(d,K,b),d+=K,f+=k}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Io(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ai(r){let e={};for(let t=0;t<r.length;t++){let n=Io(r[t]);for(let i in n)e[i]=n[i]}return e}function Vy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Pp(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}var ps={clone:Io,merge:ai},Gy=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ut=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gy,this.fragmentShader=Wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=Vy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wl=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Tr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ds=new C,K0=new ve,j0=new ve,kt=class extends Wl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,K0,j0),t.subVectors(j0,K0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Il*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},va=-90,xa=1,nh=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new kt(va,xa,e,t);i.layers=this.layers,this.add(i);let s=new kt(va,xa,e,t);s.layers=this.layers,this.add(s);let o=new kt(va,xa,e,t);o.layers=this.layers,this.add(o);let a=new kt(va,xa,e,t);a.layers=this.layers,this.add(a);let l=new kt(va,xa,e,t);l.layers=this.layers,this.add(l);let c=new kt(va,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Tr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Xl=class extends Un{constructor(e=[],t=zs,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ql=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wt(5,5,5),s=new Ut({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:hr});s.uniforms.tEquirect.value=t;let o=new Ue(i,s),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=Zn),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},$e=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Xy={type:"move"},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let _=t.getJointPose(p,n),m=this._getHandJoint(c,p);_!==null&&(m.matrix.fromArray(_.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=_.radius),m.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Xy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hs=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jt=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ih=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=Hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xi=new C,Yl=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyMatrix4(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyNormalMatrix(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.transformDirection(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Sr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Sr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){kl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){kl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya,Sl=new C,ba=new C,Ma=new C,Ea=new ve,Tl=new ve,Jg=new Pt,Fu=new C,wl=new C,Nu=new C,Q0=new ve,jf=new ve,eg=new ve,Us=class extends yn{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",ya===void 0){ya=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ih(t,5);ya.setIndex([0,1,2,0,2,3]),ya.setAttribute("position",new Yl(n,3,0,!1)),ya.setAttribute("uv",new Yl(n,2,3,!1))}this.geometry=ya,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ba.setFromMatrixScale(this.matrixWorld),Jg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ma.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ba.multiplyScalar(-Ma.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Uu(Fu.set(-.5,-.5,0),Ma,o,ba,i,s),Uu(wl.set(.5,-.5,0),Ma,o,ba,i,s),Uu(Nu.set(.5,.5,0),Ma,o,ba,i,s),Q0.set(0,0),jf.set(1,0),eg.set(1,1);let a=e.ray.intersectTriangle(Fu,wl,Nu,!1,Sl);if(a===null&&(Uu(wl.set(-.5,.5,0),Ma,o,ba,i,s),jf.set(0,1),a=e.ray.intersectTriangle(Fu,Nu,wl,!1,Sl),a===null))return;let l=e.ray.origin.distanceTo(Sl);l<e.near||l>e.far||t.push({distance:l,point:Sl.clone(),uv:as.getInterpolation(Sl,Fu,wl,Nu,Q0,jf,eg,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Uu(r,e,t,n,i,s){Ea.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Tl.x=s*Ea.x-i*Ea.y,Tl.y=i*Ea.x+s*Ea.y):Tl.copy(Ea),r.copy(e),r.x+=Tl.x,r.y+=Tl.y,r.applyMatrix4(Jg)}var $l=class extends Un{constructor(e=null,t=1,n=1,i,s,o,a,l,c=en,h=en,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Sa=new Pt,tg=new Pt,Ou=[],ng=new Vr,qy=new Pt,Al=new Ue,Rl=new Gr,Ar=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,qy)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sa),ng.copy(e.boundingBox).applyMatrix4(Sa),this.boundingBox.union(ng)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Sa),Rl.copy(e.boundingSphere).applyMatrix4(Sa),this.boundingSphere.union(Rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Al.geometry=this.geometry,Al.material=this.material,Al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(n),e.ray.intersectsSphere(Rl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Sa),tg.multiplyMatrices(n,Sa),Al.matrixWorld=tg,Al.raycast(e,Ou);for(let o=0,a=Ou.length;o<a;o++){let l=Ou[o];l.instanceId=s,l.object=this,t.push(l)}Ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(i*this.count),i,this.count,kh,dr));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Qf=new C,Yy=new C,$y=new bt,Br=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=Qf.subVectors(n,t).cross(Yy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(Qf),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||$y.getNormalMatrix(e),i=this.coplanarPoint(Qf).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_o=new Gr,Zy=new ve(.5,.5),Bu=new C,Fa=class{constructor(e=new Br,t=new Br,n=new Br,i=new Br,s=new Br,o=new Br){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Tr,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],g=s[8],p=s[9],_=s[10],m=s[11],x=s[12],v=s[13],y=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,m-g,M-x).normalize(),i[1].setComponents(c+o,d+h,m+g,M+x).normalize(),i[2].setComponents(c+a,d+u,m+p,M+v).normalize(),i[3].setComponents(c-a,d-u,m-p,M-v).normalize(),n)i[4].setComponents(l,f,_,y).normalize(),i[5].setComponents(c-l,d-f,m-_,M-y).normalize();else if(i[4].setComponents(c-l,d-f,m-_,M-y).normalize(),t===Tr)i[5].setComponents(c+l,d+f,m+_,M+y).normalize();else if(t===Ol)i[5].setComponents(l,f,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_o.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_o.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_o)}intersectsSprite(e){_o.center.set(0,0,0);let t=Zy.distanceTo(e.center);return _o.radius=.7071067811865476+t,_o.applyMatrix4(e.matrixWorld),this.intersectsSphere(_o)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(Bu.x=i.normal.x>0?e.max.x:e.min.x,Bu.y=i.normal.y>0?e.max.y:e.min.y,Bu.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Bu)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ar=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rh=new C,sh=new C,ig=new Pt,Cl=new La,ku=new Gr,ep=new C,rg=new C,Rr=class extends yn{constructor(e=new vt,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)rh.fromBufferAttribute(t,i-1),sh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rh.distanceTo(sh);e.setAttribute("lineDistance",new lt(n,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ku.copy(n.boundingSphere),ku.applyMatrix4(i),ku.radius+=s,e.ray.intersectsSphere(ku)===!1)return;ig.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(ig);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let p=d,_=g-1;p<_;p+=c){let m=h.getX(p),x=h.getX(p+1),v=Hu(this,e,Cl,l,m,x,p);v&&t.push(v)}if(this.isLineLoop){let p=h.getX(g-1),_=h.getX(d),m=Hu(this,e,Cl,l,p,_,g-1);m&&t.push(m)}}else{let d=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let p=d,_=g-1;p<_;p+=c){let m=Hu(this,e,Cl,l,p,p+1,p);m&&t.push(m)}if(this.isLineLoop){let p=Hu(this,e,Cl,l,g-1,d,g-1);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Hu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(rh.fromBufferAttribute(a,i),sh.fromBufferAttribute(a,s),t.distanceSqToSegment(rh,sh,ep,rg)>n)return;ep.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(ep);if(!(c<e.near||c>e.far))return{distance:c,point:rg.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var sg=new C,og=new C,Zl=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)sg.fromBufferAttribute(t,i),og.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+sg.distanceTo(og);e.setAttribute("lineDistance",new lt(n,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jl=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},si=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ag=new Pt,cp=new La,zu=new Gr,Vu=new C,Jn=class extends yn{constructor(e=new vt,t=new si){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zu.copy(n.boundingSphere),zu.applyMatrix4(i),zu.radius+=s,e.ray.intersectsSphere(zu)===!1)return;ag.copy(i).invert(),cp.copy(e.ray).applyMatrix4(ag);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let g=f,p=d;g<p;g++){let _=c.getX(g);Vu.fromBufferAttribute(u,_),lg(Vu,_,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let g=f,p=d;g<p;g++)Vu.fromBufferAttribute(u,g),lg(Vu,g,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function lg(r,e,t,n,i,s,o){let a=cp.distanceSqToPoint(r);if(a<t){let l=new C;cp.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cr=class extends Un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},lr=class extends Un{constructor(e,t,n=Lr,i,s,o,a=en,l=en,c,h=zr,u=1){if(h!==zr&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oh=class extends lr{constructor(e,t=Lr,n=zs,i,s,o=en,a=en,l,c=zr){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kl=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Na=class r extends vt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,g=n*2+s,p=i+1,_=new C,m=new C;for(let x=0;x<=g;x++){let v=0,y=0,M=0,S=0;if(x<=n){let b=x/n,E=b*Math.PI/2;y=-h-e*Math.cos(E),M=e*Math.sin(E),S=-e*Math.cos(E),v=b*u}else if(x<=n+s){let b=(x-n)/s;y=-h+b*t,M=e,S=0,v=u+b*f}else{let b=(x-n-s)/n,E=b*Math.PI/2;y=h+e*Math.sin(E),M=e*Math.cos(E),S=e*Math.sin(E),v=u+f+b*u}let w=Math.max(0,Math.min(1,v/d)),P=0;x===0?P=.5/i:x===g&&(P=-.5/i);for(let b=0;b<=i;b++){let E=b/i,L=E*Math.PI*2,A=Math.sin(L),D=Math.cos(L);m.x=-M*D,m.y=y,m.z=M*A,a.push(m.x,m.y,m.z),_.set(-M*D,S,M*A),_.normalize(),l.push(_.x,_.y,_.z),c.push(E+P,w)}if(x>0){let b=(x-1)*p;for(let E=0;E<i;E++){let L=b+E,A=b+E+1,D=x*p+E,B=x*p+E+1;o.push(L,A,D),o.push(A,B,D)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Mo=class r extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new C,h=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class r extends vt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],g=0,p=[],_=n/2,m=0;x(),o===!1&&(e>0&&v(!0),t>0&&v(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function x(){let y=new C,M=new C,S=0,w=(t-e)/n;for(let P=0;P<=s;P++){let b=[],E=P/s,L=E*(t-e)+e;for(let A=0;A<=i;A++){let D=A/i,B=D*l+a,G=Math.sin(B),z=Math.cos(B);M.x=L*G,M.y=-E*n+_,M.z=L*z,u.push(M.x,M.y,M.z),y.set(G,w,z).normalize(),f.push(y.x,y.y,y.z),d.push(D,1-E),b.push(g++)}p.push(b)}for(let P=0;P<i;P++)for(let b=0;b<s;b++){let E=p[b][P],L=p[b+1][P],A=p[b+1][P+1],D=p[b][P+1];(e>0||b!==0)&&(h.push(E,L,D),S+=3),(t>0||b!==s-1)&&(h.push(L,A,D),S+=3)}c.addGroup(m,S,0),m+=S}function v(y){let M=g,S=new ve,w=new C,P=0,b=y===!0?e:t,E=y===!0?1:-1;for(let A=1;A<=i;A++)u.push(0,_*E,0),f.push(0,E,0),d.push(.5,.5),g++;let L=g;for(let A=0;A<=i;A++){let B=A/i*l+a,G=Math.cos(B),z=Math.sin(B);w.x=b*z,w.y=_*E,w.z=b*G,u.push(w.x,w.y,w.z),f.push(0,E,0),S.x=G*.5+.5,S.y=z*.5*E+.5,d.push(S.x,S.y),g++}for(let A=0;A<i;A++){let D=M+A,B=L+A;y===!0?h.push(B,B+1,D):h.push(B+1,B,D),P+=3}c.addGroup(m,P,y===!0?1:2),m+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jl=class r extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(x){let v=new C,y=new C,M=new C;for(let S=0;S<t.length;S+=3)d(t[S+0],v),d(t[S+1],y),d(t[S+2],M),l(v,y,M,x)}function l(x,v,y,M){let S=M+1,w=[];for(let P=0;P<=S;P++){w[P]=[];let b=x.clone().lerp(y,P/S),E=v.clone().lerp(y,P/S),L=S-P;for(let A=0;A<=L;A++)A===0&&P===S?w[P][A]=b:w[P][A]=b.clone().lerp(E,A/L)}for(let P=0;P<S;P++)for(let b=0;b<2*(S-P)-1;b++){let E=Math.floor(b/2);b%2===0?(f(w[P][E+1]),f(w[P+1][E]),f(w[P][E])):(f(w[P][E+1]),f(w[P+1][E+1]),f(w[P+1][E]))}}function c(x){let v=new C;for(let y=0;y<s.length;y+=3)v.x=s[y+0],v.y=s[y+1],v.z=s[y+2],v.normalize().multiplyScalar(x),s[y+0]=v.x,s[y+1]=v.y,s[y+2]=v.z}function h(){let x=new C;for(let v=0;v<s.length;v+=3){x.x=s[v+0],x.y=s[v+1],x.z=s[v+2];let y=_(x)/2/Math.PI+.5,M=m(x)/Math.PI+.5;o.push(y,1-M)}g(),u()}function u(){for(let x=0;x<o.length;x+=6){let v=o[x+0],y=o[x+2],M=o[x+4],S=Math.max(v,y,M),w=Math.min(v,y,M);S>.9&&w<.1&&(v<.2&&(o[x+0]+=1),y<.2&&(o[x+2]+=1),M<.2&&(o[x+4]+=1))}}function f(x){s.push(x.x,x.y,x.z)}function d(x,v){let y=x*3;v.x=e[y+0],v.y=e[y+1],v.z=e[y+2]}function g(){let x=new C,v=new C,y=new C,M=new C,S=new ve,w=new ve,P=new ve;for(let b=0,E=0;b<s.length;b+=9,E+=6){x.set(s[b+0],s[b+1],s[b+2]),v.set(s[b+3],s[b+4],s[b+5]),y.set(s[b+6],s[b+7],s[b+8]),S.set(o[E+0],o[E+1]),w.set(o[E+2],o[E+3]),P.set(o[E+4],o[E+5]),M.copy(x).add(v).add(y).divideScalar(3);let L=_(M);p(S,E+0,x,L),p(w,E+2,v,L),p(P,E+4,y,L)}}function p(x,v,y,M){M<0&&x.x===1&&(o[v]=x.x-1),y.x===0&&y.z===0&&(o[v]=M/2/Math.PI+.5)}function _(x){return Math.atan2(x.z,-x.x)}function m(x){return Math.atan2(-x.y,Math.sqrt(x.x*x.x+x.z*x.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ve:new C);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new C,i=[],s=[],o=[],a=new C,l=new Pt;for(let d=0;d<=e;d++){let g=d/e;i[d]=this.getTangentAt(g,new C)}s[0]=new C,o[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let g=Math.acos(Tt(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,g))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(Tt(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(i[g],d*g)),o[g].crossVectors(i[g],s[g])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ua=class extends Vi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends Ua{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Ip(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Gu=new C,tp=new Ip,np=new Ip,ip=new Ip,un=class extends Vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new C){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Gu.subVectors(i[0],i[1]).add(i[0]),c=Gu);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Gu.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Gu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),g<1e-4&&(g=p),_<1e-4&&(_=p),tp.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,g,p,_),np.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,g,p,_),ip.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,g,p,_)}else this.curveType==="catmullrom"&&(tp.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),np.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),ip.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(tp.calc(l),np.calc(l),ip.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new C().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function cg(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function Jy(r,e){let t=1-r;return t*t*e}function Ky(r,e){return 2*(1-r)*r*e}function jy(r,e){return r*r*e}function Dl(r,e,t,n){return Jy(r,e)+Ky(r,t)+jy(r,n)}function Qy(r,e){let t=1-r;return t*t*t*e}function e1(r,e){let t=1-r;return 3*t*t*r*e}function t1(r,e){return 3*(1-r)*r*r*e}function n1(r,e){return r*r*r*e}function Fl(r,e,t,n,i){return Qy(r,e)+e1(r,t)+t1(r,n)+n1(r,i)}var Ql=class extends Vi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fl(e,i.x,s.x,o.x,a.x),Fl(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends Vi{constructor(e=new C,t=new C,n=new C,i=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fl(e,i.x,s.x,o.x,a.x),Fl(e,i.y,s.y,o.y,a.y),Fl(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Vi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Vi{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Vi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Dl(e,i.x,s.x,o.x),Dl(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends Vi{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Dl(e,i.x,s.x,o.x),Dl(e,i.y,s.y,o.y),Dl(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(cg(a,l.x,c.x,h.x,u.x),cg(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ve().fromArray(i))}return this}},up=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:un,CubicBezierCurve:Ql,CubicBezierCurve3:lh,EllipseCurve:Ua,LineCurve:ec,LineCurve3:ch,QuadraticBezierCurve:tc,QuadraticBezierCurve3:ds,SplineCurve:Os}),uh=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new up[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new up[i.type]().fromJSON(i))}return this}},nc=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ec(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new tc(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Ql(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Ua(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eo=class extends nc{constructor(e){super(e),this.uuid=Hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new nc().fromJSON(i))}return this}};function i1(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Kg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=l1(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=r[f],g=r[f+1];d<a&&(a=d),g<l&&(l=g),d>h&&(h=d),g>u&&(u=g)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ic(s,o,t,a,l,c,0),o}function Kg(r,e,t,n,i){let s;if(i===x1(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=ug(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=ug(o/n|0,r[o],r[o+1],s);return s&&Oa(s,s.next)&&(sc(s),s=s.next),s}function So(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Oa(t,t.next)||xn(t.prev,t,t.next)===0)){if(sc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ic(r,e,t,n,i,s,o){if(!r)return;!o&&s&&f1(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?s1(r,n,i,s):r1(r)){e.push(l.i,r.i,c.i),sc(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=o1(So(r),e),ic(r,e,t,n,i,s,2)):o===2&&a1(r,e,t,n,i,s):ic(So(r),e,t,n,i,s,1);break}}}function r1(r){let e=r.prev,t=r,n=r.next;if(xn(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),g=n.next;for(;g!==e;){if(g.x>=h&&g.x<=f&&g.y>=u&&g.y<=d&&Pl(i,a,s,l,o,c,g.x,g.y)&&xn(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function s1(r,e,t,n){let i=r.prev,s=r,o=r.next;if(xn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),g=Math.min(h,u,f),p=Math.max(a,l,c),_=Math.max(h,u,f),m=hp(d,g,e,t,n),x=hp(p,_,e,t,n),v=r.prevZ,y=r.nextZ;for(;v&&v.z>=m&&y&&y.z<=x;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=_&&v!==i&&v!==o&&Pl(a,h,l,u,c,f,v.x,v.y)&&xn(v.prev,v,v.next)>=0||(v=v.prevZ,y.x>=d&&y.x<=p&&y.y>=g&&y.y<=_&&y!==i&&y!==o&&Pl(a,h,l,u,c,f,y.x,y.y)&&xn(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;v&&v.z>=m;){if(v.x>=d&&v.x<=p&&v.y>=g&&v.y<=_&&v!==i&&v!==o&&Pl(a,h,l,u,c,f,v.x,v.y)&&xn(v.prev,v,v.next)>=0)return!1;v=v.prevZ}for(;y&&y.z<=x;){if(y.x>=d&&y.x<=p&&y.y>=g&&y.y<=_&&y!==i&&y!==o&&Pl(a,h,l,u,c,f,y.x,y.y)&&xn(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function o1(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Oa(n,i)&&Qg(n,t,t.next,i)&&rc(n,i)&&rc(i,n)&&(e.push(n.i,t.i,i.i),sc(t),sc(t.next),t=r=i),t=t.next}while(t!==r);return So(t)}function a1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g1(o,a)){let l=e_(o,a);o=So(o,o.next),l=So(l,l.next),ic(o,e,t,n,i,s,0),ic(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function l1(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Kg(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(m1(c))}i.sort(c1);for(let s=0;s<i.length;s++)t=u1(i[s],t);return t}function c1(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function u1(r,e){let t=h1(r,e);if(!t)return e;let n=e_(t,r);return So(n,n.next),So(t,t.next)}function h1(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Oa(r,t))return t;do{if(Oa(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&jg(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);rc(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&d1(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function d1(r,e){return xn(r.prev,r,e.prev)<0&&xn(e.next,r,r.next)<0}function f1(r,e,t,n){let i=r;do i.z===0&&(i.z=hp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,p1(i)}function p1(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function hp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function m1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function jg(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Pl(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&jg(r,e,t,n,i,s,o,a)}function g1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!_1(r,e)&&(rc(r,e)&&rc(e,r)&&v1(r,e)&&(xn(r.prev,r,e.prev)||xn(r,e.prev,e))||Oa(r,e)&&xn(r.prev,r,r.next)>0&&xn(e.prev,e,e.next)>0)}function xn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Oa(r,e){return r.x===e.x&&r.y===e.y}function Qg(r,e,t,n){let i=Xu(xn(r,e,t)),s=Xu(xn(r,e,n)),o=Xu(xn(t,n,r)),a=Xu(xn(t,n,e));return!!(i!==s&&o!==a||i===0&&Wu(r,t,e)||s===0&&Wu(r,n,e)||o===0&&Wu(t,r,n)||a===0&&Wu(t,e,n))}function Wu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xu(r){return r>0?1:r<0?-1:0}function _1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&Qg(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function rc(r,e){return xn(r.prev,r,r.next)<0?xn(r,e,r.next)>=0&&xn(r,r.prev,e)>=0:xn(r,e,r.prev)<0||xn(r,r.next,e)<0}function v1(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function e_(r,e){let t=dp(r.i,r.x,r.y),n=dp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function ug(r,e,t,n){let i=dp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sc(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function dp(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function x1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var fp=class{static triangulate(e,t,n=2){return i1(e,t,n)}},wa=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];hg(e),dg(n,e);let o=e.length;t.forEach(hg);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,dg(n,t[l]);let a=fp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function hg(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function dg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var To=class r extends jl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var oc=class r extends jl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},On=class r extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],g=[],p=[],_=[];for(let m=0;m<h;m++){let x=m*f-o;for(let v=0;v<c;v++){let y=v*u-s;g.push(y,-x,0),p.push(0,0,1),_.push(v/a),_.push(1-m/l)}}for(let m=0;m<l;m++)for(let x=0;x<a;x++){let v=x+c*m,y=x+c*(m+1),M=x+1+c*(m+1),S=x+1+c*m;d.push(v,y,S),d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ac=class r extends vt{constructor(e=new Eo([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,g=f.holes;wa.isClockWise(d)===!1&&(d=d.reverse());for(let _=0,m=g.length;_<m;_++){let x=g[_];wa.isClockWise(x)===!0&&(g[_]=x.reverse())}let p=wa.triangulateShape(d,g);for(let _=0,m=g.length;_<m;_++){let x=g[_];d=d.concat(x)}for(let _=0,m=d.length;_<m;_++){let x=d[_];i.push(x.x,x.y,0),s.push(0,0,1),o.push(x.x,x.y)}for(let _=0,m=p.length;_<m;_++){let x=p[_],v=x[0]+u,y=x[1]+u,M=x[2]+u;n.push(v,y,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return y1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function y1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Xt=class r extends vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new C,f=new C,d=[],g=[],p=[],_=[];for(let m=0;m<=n;m++){let x=[],v=m/n,y=0;m===0&&o===0?y=.5/t:m===n&&l===Math.PI&&(y=-.5/t);for(let M=0;M<=t;M++){let S=M/t;u.x=-e*Math.cos(i+S*s)*Math.sin(o+v*a),u.y=e*Math.cos(o+v*a),u.z=e*Math.sin(i+S*s)*Math.sin(o+v*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),_.push(S+y,1-v),x.push(c++)}h.push(x)}for(let m=0;m<n;m++)for(let x=0;x<t;x++){let v=h[m][x+1],y=h[m][x],M=h[m+1][x],S=h[m+1][x+1];(m!==0||o>0)&&d.push(v,y,S),(m!==n-1||l<Math.PI)&&d.push(y,M,S)}this.setIndex(d),this.setAttribute("position",new lt(g,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Bn=class r extends vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new C,u=new C,f=new C;for(let d=0;d<=n;d++)for(let g=0;g<=i;g++){let p=g/i*s,_=d/n*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(p),u.y=(e+t*Math.cos(_))*Math.sin(p),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(g/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let g=1;g<=i;g++){let p=(i+1)*d+g-1,_=(i+1)*(d-1)+g-1,m=(i+1)*(d-1)+g,x=(i+1)*d+g;o.push(p,_,x),o.push(_,m,x)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},lc=class r extends vt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new C,f=new C,d=new C,g=new C,p=new C,_=new C,m=new C;for(let v=0;v<=n;++v){let y=v/n*s*Math.PI*2;x(y,s,o,e,d),x(y+.01,s,o,e,g),_.subVectors(g,d),m.addVectors(g,d),p.crossVectors(_,m),m.crossVectors(p,_),p.normalize(),m.normalize();for(let M=0;M<=i;++M){let S=M/i*Math.PI*2,w=-t*Math.cos(S),P=t*Math.sin(S);u.x=d.x+(w*m.x+P*p.x),u.y=d.y+(w*m.y+P*p.y),u.z=d.z+(w*m.z+P*p.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(v/n),h.push(M/i)}}for(let v=1;v<=n;v++)for(let y=1;y<=i;y++){let M=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),w=(i+1)*v+y,P=(i+1)*(v-1)+y;a.push(M,S,P),a.push(S,w,P)}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2));function x(v,y,M,S,w){let P=Math.cos(v),b=Math.sin(v),E=M/y*v,L=Math.cos(E);w.x=S*(2+L)*.5*P,w.y=S*(2+L)*b*.5,w.z=S*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},oi=class r extends vt{constructor(e=new ds(new C(-1,-1,0),new C(-1,1,0),new C(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new C,l=new C,c=new ve,h=new C,u=[],f=[],d=[],g=[];p(),this.setIndex(g),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function p(){for(let v=0;v<t;v++)_(v);_(s===!1?t:0),x(),m()}function _(v){h=e.getPointAt(v/t,h);let y=o.normals[v],M=o.binormals[v];for(let S=0;S<=i;S++){let w=S/i*Math.PI*2,P=Math.sin(w),b=-Math.cos(w);l.x=b*y.x+P*M.x,l.y=b*y.y+P*M.y,l.z=b*y.z+P*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function m(){for(let v=1;v<=t;v++)for(let y=1;y<=i;y++){let M=(i+1)*(v-1)+(y-1),S=(i+1)*v+(y-1),w=(i+1)*v+y,P=(i+1)*(v-1)+y;g.push(M,S,P),g.push(S,w,P)}}function x(){for(let v=0;v<=t;v++)for(let y=0;y<=i;y++)c.x=v/t,c.y=y/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new up[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var cc=class extends zi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},Ba=class extends Ut{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cr=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Tt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ur=class extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hh=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=kg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var wo=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends wo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:sp,endingEnd:sp}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case op:s=e,a=2*t-n;break;case ap:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case op:o=e,l=2*n-t;break;case ap:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,g=(n-t)/(i-t),p=g*g,_=p*g,m=-f*_+2*f*p-f*g,x=(1+f)*_+(-1.5-2*f)*p+(-.5+f)*g+1,v=(-1-d)*_+(1.5+d)*p+.5*g,y=d*_-d*p;for(let M=0;M!==a;++M)s[M]=m*o[h+M]+x*o[c+M]+v*o[l+M]+y*o[u+M];return s}},ph=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},mh=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Gi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qu(t,this.TimeBufferType),this.values=qu(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qu(e.times,Array),values:qu(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nl:t=this.InterpolantFactoryMethodDiscrete;break;case Ku:t=this.InterpolantFactoryMethodLinear;break;case Yu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Ku;case this.InterpolantFactoryMethodSmooth:return Yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){gt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){gt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&hy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){gt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let g=0;g!==n;++g){let p=t[u+g];if(p!==t[f+g]||p!==t[d+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gi.prototype.ValueTypeName="";Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=Ku;var Bs=class extends Gi{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName="bool";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Nl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};gh.prototype.ValueTypeName="color";var _h=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};_h.prototype.ValueTypeName="number";var vh=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(s,0,o,c-a,o,c,l);return s}},uc=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}};uc.prototype.ValueTypeName="quaternion";uc.prototype.InterpolantFactoryMethodSmooth=void 0;var ks=class extends Gi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Nl;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};xh.prototype.ValueTypeName="vector";var yh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],g=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},t_=new yh,bh=class{constructor(e){this.manager=e!==void 0?e:t_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pr=class extends Ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},rp=new Pt,fg=new C,pg=new C,Mh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;fg.setFromMatrixPosition(e.matrixWorld),t.position.copy(fg),pg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(pg),t.updateMatrixWorld(),rp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(rp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(rp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var pp=class extends Mh{constructor(){super(new kt(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends Ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new pp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends Wl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},mp=class extends Mh{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hn=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new mp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wi=class extends Ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Eh=class extends kt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Lp="\\[\\]\\.:\\/",b1=new RegExp("["+Lp+"]","g"),Dp="[^"+Lp+"]",M1="[^"+Lp.replace("\\.","")+"]",E1=/((?:WC+[\/:])*)/.source.replace("WC",Dp),S1=/(WCOD+)?/.source.replace("WCOD",M1),T1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Dp),w1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Dp),A1=new RegExp("^"+E1+S1+T1+w1+"$"),R1=["material","materials","bones","map"],gp=class{constructor(e,t,n){let i=n||mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mn=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(b1,"")}static parseTrackName(e){let t=A1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);R1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=gp;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aA=new Float32Array(1);var mg=new ve,dc=class{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=mg.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,mg).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Fp(r,e,t,n){let i=C1(n);switch(t){case Tp:return r*e;case kh:return r*e/i.components*i.byteLength;case Hh:return r*e/i.components*i.byteLength;case Co:return r*e*2/i.components*i.byteLength;case zh:return r*e*2/i.components*i.byteLength;case wp:return r*e*3/i.components*i.byteLength;case fr:return r*e*4/i.components*i.byteLength;case Vh:return r*e*4/i.components*i.byteLength;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Sc:case Tc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case $h:case Jh:case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zh:case jh:case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pd:case md:case gd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _d:case vd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xd:case yd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function C1(r){switch(r){case Di:case bp:return{byteLength:1,components:1};case Ha:case Mp:case wn:return{byteLength:2,components:1};case Oh:case Bh:return{byteLength:2,components:4};case Lr:case Uh:case dr:return{byteLength:4,components:1};case Ep:case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function S_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function I1(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<u.length;d++){let g=u[f],p=u[d];p.start<=g.start+g.count+1?g.count=Math.max(g.count,p.start+p.count-g.start):(++f,u[f]=p)}u.length=f+1;for(let d=0,g=u.length;d<g;d++){let p=u[d];r.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var L1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,D1=`#ifdef USE_ALPHAHASH
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
#endif`,F1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,N1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,U1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,O1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,B1=`#ifdef USE_AOMAP
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
#endif`,k1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,H1=`#ifdef USE_BATCHING
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
#endif`,z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,V1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,G1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,W1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,X1=`#ifdef USE_IRIDESCENCE
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
#endif`,q1=`#ifdef USE_BUMPMAP
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
#endif`,Y1=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,$1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Z1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,J1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,K1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,j1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Q1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,eb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,tb=`#define PI 3.141592653589793
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
} // validated`,nb=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,ib=`vec3 transformedNormal = objectNormal;
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
#endif`,rb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,ob=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ab=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,lb="gl_FragColor = linearToOutputTexel( gl_FragColor );",cb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,ub=`#ifdef USE_ENVMAP
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
#endif`,hb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
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
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,pb=`#ifdef USE_ENVMAP
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
#endif`,mb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,gb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,_b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,vb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,xb=`#ifdef USE_GRADIENTMAP
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
}`,yb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,bb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Mb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Eb=`uniform bool receiveShadow;
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
#endif`,Sb=`#ifdef USE_ENVMAP
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
#endif`,Tb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,wb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Ab=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Rb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cb=`PhysicalMaterial material;
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
#endif`,Pb=`uniform sampler2D dfgLUT;
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
}`,Ib=`
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
#endif`,Lb=`#if defined( RE_IndirectDiffuse )
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
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Fb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Nb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ob=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Bb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,kb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Hb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,zb=`#if defined( USE_POINTS_UV )
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
#endif`,Vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Wb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Xb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,qb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`#ifdef USE_MORPHTARGETS
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
#endif`,$b=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Jb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Qb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,eM=`#ifdef USE_NORMALMAP
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
#endif`,tM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,nM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,iM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,rM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,oM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,aM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,lM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,cM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,uM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,dM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,mM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,gM=`float getShadowMask() {
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
}`,_M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,vM=`#ifdef USE_SKINNING
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
#endif`,xM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,yM=`#ifdef USE_SKINNING
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
#endif`,bM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,MM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,EM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,SM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,TM=`#ifdef USE_TRANSMISSION
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
#endif`,wM=`#ifdef USE_TRANSMISSION
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
#endif`,AM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,RM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,CM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,PM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,IM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,LM=`uniform sampler2D t2D;
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
}`,DM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,FM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,NM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,UM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OM=`#include <common>
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
}`,BM=`#if DEPTH_PACKING == 3200
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
}`,kM=`#define DISTANCE
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
}`,HM=`#define DISTANCE
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`uniform float scale;
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
}`,WM=`uniform vec3 diffuse;
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
}`,XM=`#include <common>
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
}`,qM=`uniform vec3 diffuse;
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
}`,YM=`#define LAMBERT
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
}`,$M=`#define LAMBERT
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
}`,ZM=`#define MATCAP
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
}`,JM=`#define MATCAP
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
}`,KM=`#define NORMAL
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
}`,jM=`#define NORMAL
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
}`,QM=`#define PHONG
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
}`,eE=`#define PHONG
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
}`,tE=`#define STANDARD
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
}`,nE=`#define STANDARD
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
}`,iE=`#define TOON
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
}`,rE=`#define TOON
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
}`,sE=`uniform float size;
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
}`,oE=`uniform vec3 diffuse;
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
}`,aE=`#include <common>
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
}`,lE=`uniform vec3 color;
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
}`,cE=`uniform float rotation;
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
}`,uE=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:L1,alphahash_pars_fragment:D1,alphamap_fragment:F1,alphamap_pars_fragment:N1,alphatest_fragment:U1,alphatest_pars_fragment:O1,aomap_fragment:B1,aomap_pars_fragment:k1,batching_pars_vertex:H1,batching_vertex:z1,begin_vertex:V1,beginnormal_vertex:G1,bsdfs:W1,iridescence_fragment:X1,bumpmap_pars_fragment:q1,clipping_planes_fragment:Y1,clipping_planes_pars_fragment:$1,clipping_planes_pars_vertex:Z1,clipping_planes_vertex:J1,color_fragment:K1,color_pars_fragment:j1,color_pars_vertex:Q1,color_vertex:eb,common:tb,cube_uv_reflection_fragment:nb,defaultnormal_vertex:ib,displacementmap_pars_vertex:rb,displacementmap_vertex:sb,emissivemap_fragment:ob,emissivemap_pars_fragment:ab,colorspace_fragment:lb,colorspace_pars_fragment:cb,envmap_fragment:ub,envmap_common_pars_fragment:hb,envmap_pars_fragment:db,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Sb,envmap_vertex:pb,fog_vertex:mb,fog_pars_vertex:gb,fog_fragment:_b,fog_pars_fragment:vb,gradientmap_pars_fragment:xb,lightmap_pars_fragment:yb,lights_lambert_fragment:bb,lights_lambert_pars_fragment:Mb,lights_pars_begin:Eb,lights_toon_fragment:Tb,lights_toon_pars_fragment:wb,lights_phong_fragment:Ab,lights_phong_pars_fragment:Rb,lights_physical_fragment:Cb,lights_physical_pars_fragment:Pb,lights_fragment_begin:Ib,lights_fragment_maps:Lb,lights_fragment_end:Db,logdepthbuf_fragment:Fb,logdepthbuf_pars_fragment:Nb,logdepthbuf_pars_vertex:Ub,logdepthbuf_vertex:Ob,map_fragment:Bb,map_pars_fragment:kb,map_particle_fragment:Hb,map_particle_pars_fragment:zb,metalnessmap_fragment:Vb,metalnessmap_pars_fragment:Gb,morphinstance_vertex:Wb,morphcolor_vertex:Xb,morphnormal_vertex:qb,morphtarget_pars_vertex:Yb,morphtarget_vertex:$b,normal_fragment_begin:Zb,normal_fragment_maps:Jb,normal_pars_fragment:Kb,normal_pars_vertex:jb,normal_vertex:Qb,normalmap_pars_fragment:eM,clearcoat_normal_fragment_begin:tM,clearcoat_normal_fragment_maps:nM,clearcoat_pars_fragment:iM,iridescence_pars_fragment:rM,opaque_fragment:sM,packing:oM,premultiplied_alpha_fragment:aM,project_vertex:lM,dithering_fragment:cM,dithering_pars_fragment:uM,roughnessmap_fragment:hM,roughnessmap_pars_fragment:dM,shadowmap_pars_fragment:fM,shadowmap_pars_vertex:pM,shadowmap_vertex:mM,shadowmask_pars_fragment:gM,skinbase_vertex:_M,skinning_pars_vertex:vM,skinning_vertex:xM,skinnormal_vertex:yM,specularmap_fragment:bM,specularmap_pars_fragment:MM,tonemapping_fragment:EM,tonemapping_pars_fragment:SM,transmission_fragment:TM,transmission_pars_fragment:wM,uv_pars_fragment:AM,uv_pars_vertex:RM,uv_vertex:CM,worldpos_vertex:PM,background_vert:IM,background_frag:LM,backgroundCube_vert:DM,backgroundCube_frag:FM,cube_vert:NM,cube_frag:UM,depth_vert:OM,depth_frag:BM,distance_vert:kM,distance_frag:HM,equirect_vert:zM,equirect_frag:VM,linedashed_vert:GM,linedashed_frag:WM,meshbasic_vert:XM,meshbasic_frag:qM,meshlambert_vert:YM,meshlambert_frag:$M,meshmatcap_vert:ZM,meshmatcap_frag:JM,meshnormal_vert:KM,meshnormal_frag:jM,meshphong_vert:QM,meshphong_frag:eE,meshphysical_vert:tE,meshphysical_frag:nE,meshtoon_vert:iE,meshtoon_frag:rE,points_vert:sE,points_frag:oE,shadow_vert:aE,shadow_frag:lE,sprite_vert:cE,sprite_frag:uE},Ve={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Xr={basic:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:ai([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:ai([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:ai([Ve.points,Ve.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:ai([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:ai([Ve.common,Ve.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:ai([Ve.sprite,Ve.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:ai([Ve.common,Ve.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:ai([Ve.lights,Ve.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Xr.physical={uniforms:ai([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Sd={r:0,b:0,g:0},Lo=new Xn,hE=new Pt;function dE(r,e,t,n,i,s,o){let a=new Me(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function g(v){let y=v.isScene===!0?v.background:null;return y&&y.isTexture&&(y=(v.backgroundBlurriness>0?t:e).get(y)),y}function p(v){let y=!1,M=g(v);M===null?m(a,l):M&&M.isColor&&(m(M,1),y=!0);let S=r.xr.getEnvironmentBlendMode();S==="additive"?n.buffers.color.setClear(0,0,0,1,o):S==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,y){let M=g(y);M&&(M.isCubeTexture||M.mapping===yc)?(h===void 0&&(h=new Ue(new Wt(1,1,1),new Ut({name:"BackgroundCubeMaterial",uniforms:Io(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(S,w,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Lo.copy(y.backgroundRotation),Lo.x*=-1,Lo.y*=-1,Lo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Lo.y*=-1,Lo.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hE.makeRotationFromEuler(Lo)),h.material.toneMapped=It.getTransfer(M.colorSpace)!==Vt,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),v.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ue(new On(2,2),new Ut({name:"BackgroundMaterial",uniforms:Io(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=It.getTransfer(M.colorSpace)!==Vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,y){v.getRGB(Sd,Pp(r)),n.buffers.color.setClear(Sd.r,Sd.g,Sd.b,y,o)}function x(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,y=1){a.set(v),l=y,m(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,m(a,l)},render:p,addToRenderList:_,dispose:x}}function fE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(E,L,A,D,B){let G=!1,z=u(D,A,L);s!==z&&(s=z,c(s.object)),G=d(E,D,A,B),G&&g(E,D,A,B),B!==null&&e.update(B,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,y(E,L,A,D),B!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(B).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,L,A){let D=A.wireframe===!0,B=n[E.id];B===void 0&&(B={},n[E.id]=B);let G=B[L.id];G===void 0&&(G={},B[L.id]=G);let z=G[D];return z===void 0&&(z=f(l()),G[D]=z),z}function f(E){let L=[],A=[],D=[];for(let B=0;B<t;B++)L[B]=0,A[B]=0,D[B]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:A,attributeDivisors:D,object:E,attributes:{},index:null}}function d(E,L,A,D){let B=s.attributes,G=L.attributes,z=0,k=A.getAttributes();for(let K in k)if(k[K].location>=0){let N=B[K],oe=G[K];if(oe===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(oe=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(oe=E.instanceColor)),N===void 0||N.attribute!==oe||oe&&N.data!==oe.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function g(E,L,A,D){let B={},G=L.attributes,z=0,k=A.getAttributes();for(let K in k)if(k[K].location>=0){let N=G[K];N===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(N=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(N=E.instanceColor));let oe={};oe.attribute=N,N&&N.data&&(oe.data=N.data),B[K]=oe,z++}s.attributes=B,s.attributesNum=z,s.index=D}function p(){let E=s.newAttributes;for(let L=0,A=E.length;L<A;L++)E[L]=0}function _(E){m(E,0)}function m(E,L){let A=s.newAttributes,D=s.enabledAttributes,B=s.attributeDivisors;A[E]=1,D[E]===0&&(r.enableVertexAttribArray(E),D[E]=1),B[E]!==L&&(r.vertexAttribDivisor(E,L),B[E]=L)}function x(){let E=s.newAttributes,L=s.enabledAttributes;for(let A=0,D=L.length;A<D;A++)L[A]!==E[A]&&(r.disableVertexAttribArray(A),L[A]=0)}function v(E,L,A,D,B,G,z){z===!0?r.vertexAttribIPointer(E,L,A,B,G):r.vertexAttribPointer(E,L,A,D,B,G)}function y(E,L,A,D){p();let B=D.attributes,G=A.getAttributes(),z=L.defaultAttributeValues;for(let k in G){let K=G[k];if(K.location>=0){let re=B[k];if(re===void 0&&(k==="instanceMatrix"&&E.instanceMatrix&&(re=E.instanceMatrix),k==="instanceColor"&&E.instanceColor&&(re=E.instanceColor)),re!==void 0){let N=re.normalized,oe=re.itemSize,ke=e.get(re);if(ke===void 0)continue;let He=ke.buffer,Ye=ke.type,it=ke.bytesPerElement,ne=Ye===r.INT||Ye===r.UNSIGNED_INT||re.gpuType===Uh;if(re.isInterleavedBufferAttribute){let ie=re.data,ye=ie.stride,Oe=re.offset;if(ie.isInstancedInterleavedBuffer){for(let Ce=0;Ce<K.locationSize;Ce++)m(K.location+Ce,ie.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)_(K.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Ce=0;Ce<K.locationSize;Ce++)v(K.location+Ce,oe/K.locationSize,Ye,N,ye*it,(Oe+oe/K.locationSize*Ce)*it,ne)}else{if(re.isInstancedBufferAttribute){for(let ie=0;ie<K.locationSize;ie++)m(K.location+ie,re.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let ie=0;ie<K.locationSize;ie++)_(K.location+ie);r.bindBuffer(r.ARRAY_BUFFER,He);for(let ie=0;ie<K.locationSize;ie++)v(K.location+ie,oe/K.locationSize,Ye,N,oe*it,oe/K.locationSize*ie*it,ne)}}else if(z!==void 0){let N=z[k];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(K.location,N);break;case 3:r.vertexAttrib3fv(K.location,N);break;case 4:r.vertexAttrib4fv(K.location,N);break;default:r.vertexAttrib1fv(K.location,N)}}}}x()}function M(){P();for(let E in n){let L=n[E];for(let A in L){let D=L[A];for(let B in D)h(D[B].object),delete D[B];delete L[A]}delete n[E]}}function S(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let A in L){let D=L[A];for(let B in D)h(D[B].object),delete D[B];delete L[A]}delete n[E.id]}function w(E){for(let L in n){let A=n[L];if(A[E.id]===void 0)continue;let D=A[E.id];for(let B in D)h(D[B].object),delete D[B];delete A[E.id]}}function P(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:S,releaseStatesOfProgram:w,initAttributes:p,enableAttribute:_,disableUnusedAttributes:x}}function pE(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let g=0;g<u;g++)d+=h[g];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let p=0;p<u;p++)g+=h[p]*f[p];t.update(g,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function mE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let w=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==fr&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let P=w===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Di&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==dr&&!P)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),m=r.getParameter(r.MAX_VERTEX_ATTRIBS),x=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),y=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),S=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:p,maxCubemapSize:_,maxAttributes:m,maxVertexUniforms:x,maxVaryings:v,maxFragmentUniforms:y,maxSamples:M,samples:S}}function gE(r){let e=this,t=null,n=0,i=!1,s=!1,o=new Br,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let g=u.clippingPlanes,p=u.clipIntersection,_=u.clipShadows,m=r.get(u);if(!i||g===null||g.length===0||s&&!_)s?h(null):c();else{let x=s?0:n,v=x*4,y=m.clippingState||null;l.value=y,y=h(g,f,v,d);for(let M=0;M!==v;++M)y[M]=t[M];m.clippingState=y,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,g){let p=u!==null?u.length:0,_=null;if(p!==0){if(_=l.value,g!==!0||_===null){let m=d+p*4,x=f.matrixWorldInverse;a.getNormalMatrix(x),(_===null||_.length<m)&&(_=new Float32Array(m));for(let v=0,y=d;v!==p;++v,y+=4)o.copy(u[v]).applyMatrix4(x,a),o.normal.toArray(_,y),_[y+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,_}}function _E(r){let e=new WeakMap;function t(o,a){return a===Dh?o.mapping=zs:a===Fh&&(o.mapping=Ro),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dh||a===Fh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ql(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ws=4,n_=[.125,.215,.35,.446,.526,.582],Fo=20,vE=256,wc=new Li,i_=new Me,Np=null,Up=0,Op=0,Bp=!1,xE=new C,qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=xE}=s;Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=o_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=s_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Np,Up,Op),this._renderer.xr.enabled=Bp,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Np=this._renderer.getRenderTarget(),Up=this._renderer.getActiveCubeFace(),Op=this._renderer.getActiveMipmapLevel(),Bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:wn,format:fr,colorSpace:wr,depthBuffer:!1},i=r_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=r_(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=yE(s)),this._blurMaterial=ME(s,e,t),this._ggxMaterial=bE(s,e,t)}return i}_compileMaterial(e){let t=new Ue(new vt,e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,i,s){let l=new kt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(i_),u.toneMapping=Ir,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Wt,new bn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,_=p.material,m=!1,x=e.background;x?x.isColor&&(_.color.copy(x),e.background=null,m=!0):(_.color.copy(i_),m=!0);for(let v=0;v<6;v++){let y=v%3;y===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[v],s.y,s.z)):y===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[v]));let M=this._cubeSize;Va(i,y*M,v>2?M:0,M,M),u.setRenderTarget(i),m&&u.render(p,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=x}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zs||e.mapping===Ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=o_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=s_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:g}=this,p=this._sizeLods[n],_=3*p*(n>g-Ws?n-g+Ws:0),m=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=g-t,Va(s,_,m,3*p,2*p),i.setRenderTarget(s),i.render(a,wc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-n,Va(e,_,m,3*p,2*p),i.setRenderTarget(e),i.render(a,wc)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fo-1),p=s/g,_=isFinite(s)?1+Math.floor(h*p):Fo;_>Fo&&ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fo}`);let m=[],x=0;for(let w=0;w<Fo;++w){let P=w/p,b=Math.exp(-P*P/2);m.push(b),w===0?x+=b:w<_&&(x+=2*b)}for(let w=0;w<m.length;w++)m[w]=m[w]/x;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=m,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=g,f.mipInt.value=v-n;let y=this._sizeLods[i],M=3*y*(i>v-Ws?i-v+Ws:0),S=4*(this._cubeSize-y);Va(t,M,S,3*y,2*y),l.setRenderTarget(t),l.render(u,wc)}};function yE(r){let e=[],t=[],n=[],i=r,s=r-Ws+1+n_.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ws?l=n_[o-r+Ws-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,g=6,p=3,_=2,m=1,x=new Float32Array(p*g*d),v=new Float32Array(_*g*d),y=new Float32Array(m*g*d);for(let S=0;S<d;S++){let w=S%3*2/3-1,P=S>2?0:-1,b=[w,P,0,w+2/3,P,0,w+2/3,P+1,0,w,P,0,w+2/3,P+1,0,w,P+1,0];x.set(b,p*g*S),v.set(f,_*g*S);let E=[S,S,S,S,S,S];y.set(E,m*g*S)}let M=new vt;M.setAttribute("position",new Nt(x,p)),M.setAttribute("uv",new Nt(v,_)),M.setAttribute("faceIndex",new Nt(y,m)),n.push(new Ue(M,null)),i>Ws&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function r_(r,e,t){let n=new gn(r,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function bE(r,e,t){return new Ut({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:vE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function ME(r,e,t){let n=new Float32Array(Fo),i=new C(0,1,0);return new Ut({name:"SphericalGaussianBlur",defines:{n:Fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function s_(){return new Ut({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function o_(){return new Ut({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function wd(){return`

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
	`}function EE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Dh||l===Fh,h=l===zs||l===Ro;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qr(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new qr(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function SE(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ca("WebGLRenderer: "+n+" extension not supported."),i}}}function TE(r,e,t,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,g=u.attributes.position,p=0;if(d!==null){let x=d.array;p=d.version;for(let v=0,y=x.length;v<y;v+=3){let M=x[v+0],S=x[v+1],w=x[v+2];f.push(M,S,S,w,w,M)}}else if(g!==void 0){let x=g.array;p=g.version;for(let v=0,y=x.length/3-1;v<y;v+=3){let M=v+0,S=v+1,w=v+2;f.push(M,S,S,w,w,M)}}else return;let _=new(Rp(f)?Gl:Vl)(f,1);_.version=p;let m=s.get(u);m&&e.remove(m),s.set(u,_)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function wE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,g){g!==0&&(r.drawElementsInstanced(n,d,s,f*o,g),t.update(d,n,g))}function h(f,d,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,g);let _=0;for(let m=0;m<g;m++)_+=d[m];t.update(_,n,1)}function u(f,d,g,p){if(g===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let m=0;m<f.length;m++)c(f[m]/o,d[m],p[m]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,p,0,g);let m=0;for(let x=0;x<g;x++)m+=d[x]*p[x];t.update(m,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function AE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function RE(r,e,t){let n=new WeakMap,i=new tn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],m=a.morphAttributes.normal||[],x=a.morphAttributes.color||[],v=0;d===!0&&(v=1),g===!0&&(v=2),p===!0&&(v=3);let y=a.attributes.position.count*v,M=1;y>e.maxTextureSize&&(M=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let S=new Float32Array(y*M*4*u),w=new Hl(S,y,M,u);w.type=dr,w.needsUpdate=!0;let P=v*4;for(let E=0;E<u;E++){let L=_[E],A=m[E],D=x[E],B=y*M*4*E;for(let G=0;G<L.count;G++){let z=G*P;d===!0&&(i.fromBufferAttribute(L,G),S[B+z+0]=i.x,S[B+z+1]=i.y,S[B+z+2]=i.z,S[B+z+3]=0),g===!0&&(i.fromBufferAttribute(A,G),S[B+z+4]=i.x,S[B+z+5]=i.y,S[B+z+6]=i.z,S[B+z+7]=0),p===!0&&(i.fromBufferAttribute(D,G),S[B+z+8]=i.x,S[B+z+9]=i.y,S[B+z+10]=i.z,S[B+z+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:w,size:new ve(y,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];let g=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",g),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function CE(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var PE={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[Xi]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function IE(r,e,t,n,i){let s=new gn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new gn(e,t,{type:wn,depthBuffer:!1,stencilBuffer:!1}),a=new vt;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new Ba({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),h=new Li(-1,1,1,-1,0,1),u=null,f=null,d=!1,g,p=null,_=[],m=!1;this.setSize=function(x,v){s.setSize(x,v),o.setSize(x,v);for(let y=0;y<_.length;y++){let M=_[y];M.setSize&&M.setSize(x,v)}},this.setEffects=function(x){_=x,m=_.length>0&&_[0].isRenderPass===!0;let v=s.width,y=s.height;for(let M=0;M<_.length;M++){let S=_[M];S.setSize&&S.setSize(v,y)}},this.begin=function(x,v){if(d||x.toneMapping===Ir&&_.length===0)return!1;if(p=v,v!==null){let y=v.width,M=v.height;(s.width!==y||s.height!==M)&&this.setSize(y,M)}return m===!1&&x.setRenderTarget(s),g=x.toneMapping,x.toneMapping=Ir,!0},this.hasRenderPass=function(){return m},this.end=function(x,v){x.toneMapping=g,d=!0;let y=s,M=o;for(let S=0;S<_.length;S++){let w=_[S];if(w.enabled!==!1&&(w.render(x,M,y,v),w.needsSwap!==!1)){let P=y;y=M,M=P}}if(u!==x.outputColorSpace||f!==x.toneMapping){u=x.outputColorSpace,f=x.toneMapping,l.defines={},It.getTransfer(u)===Vt&&(l.defines.SRGB_TRANSFER="");let S=PE[f];S&&(l.defines[S]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=y.texture,x.setRenderTarget(p),x.render(c,h),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var T_=new Un,zp=new lr(1,1),w_=new Hl,A_=new th,R_=new Xl,a_=[],l_=[],c_=new Float32Array(16),u_=new Float32Array(9),h_=new Float32Array(4);function Wa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=a_[i];if(s===void 0&&(s=new Float32Array(i),a_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function kn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ad(r,e){let t=l_[e];t===void 0&&(t=new Int32Array(e),l_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function LE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function DE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2fv(this.addr,e),Hn(t,e)}}function FE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(kn(t,e))return;r.uniform3fv(this.addr,e),Hn(t,e)}}function NE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4fv(this.addr,e),Hn(t,e)}}function UE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;h_.set(n),r.uniformMatrix2fv(this.addr,!1,h_),Hn(t,n)}}function OE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;u_.set(n),r.uniformMatrix3fv(this.addr,!1,u_),Hn(t,n)}}function BE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(kn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(kn(t,n))return;c_.set(n),r.uniformMatrix4fv(this.addr,!1,c_),Hn(t,n)}}function kE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function HE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2iv(this.addr,e),Hn(t,e)}}function zE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;r.uniform3iv(this.addr,e),Hn(t,e)}}function VE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4iv(this.addr,e),Hn(t,e)}}function GE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function WE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(kn(t,e))return;r.uniform2uiv(this.addr,e),Hn(t,e)}}function XE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(kn(t,e))return;r.uniform3uiv(this.addr,e),Hn(t,e)}}function qE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(kn(t,e))return;r.uniform4uiv(this.addr,e),Hn(t,e)}}function YE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(zp.compareFunction=t.isReversedDepthBuffer()?Ed:Md,s=zp):s=T_,t.setTexture2D(e||s,i)}function $E(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||A_,i)}function ZE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||R_,i)}function JE(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||w_,i)}function KE(r){switch(r){case 5126:return LE;case 35664:return DE;case 35665:return FE;case 35666:return NE;case 35674:return UE;case 35675:return OE;case 35676:return BE;case 5124:case 35670:return kE;case 35667:case 35671:return HE;case 35668:case 35672:return zE;case 35669:case 35673:return VE;case 5125:return GE;case 36294:return WE;case 36295:return XE;case 36296:return qE;case 35678:case 36198:case 36298:case 36306:case 35682:return YE;case 35679:case 36299:case 36307:return $E;case 35680:case 36300:case 36308:case 36293:return ZE;case 36289:case 36303:case 36311:case 36292:return JE}}function jE(r,e){r.uniform1fv(this.addr,e)}function QE(r,e){let t=Wa(e,this.size,2);r.uniform2fv(this.addr,t)}function eS(r,e){let t=Wa(e,this.size,3);r.uniform3fv(this.addr,t)}function tS(r,e){let t=Wa(e,this.size,4);r.uniform4fv(this.addr,t)}function nS(r,e){let t=Wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function iS(r,e){let t=Wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function rS(r,e){let t=Wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function sS(r,e){r.uniform1iv(this.addr,e)}function oS(r,e){r.uniform2iv(this.addr,e)}function aS(r,e){r.uniform3iv(this.addr,e)}function lS(r,e){r.uniform4iv(this.addr,e)}function cS(r,e){r.uniform1uiv(this.addr,e)}function uS(r,e){r.uniform2uiv(this.addr,e)}function hS(r,e){r.uniform3uiv(this.addr,e)}function dS(r,e){r.uniform4uiv(this.addr,e)}function fS(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);kn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=zp:o=T_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function pS(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);kn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||A_,s[o])}function mS(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);kn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||R_,s[o])}function gS(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);kn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||w_,s[o])}function _S(r){switch(r){case 5126:return jE;case 35664:return QE;case 35665:return eS;case 35666:return tS;case 35674:return nS;case 35675:return iS;case 35676:return rS;case 5124:case 35670:return sS;case 35667:case 35671:return oS;case 35668:case 35672:return aS;case 35669:case 35673:return lS;case 5125:return cS;case 36294:return uS;case 36295:return hS;case 36296:return dS;case 35678:case 36198:case 36298:case 36306:case 35682:return fS;case 35679:case 36299:case 36307:return pS;case 35680:case 36300:case 36308:case 36293:return mS;case 36289:case 36303:case 36311:case 36292:return gS}}var Vp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=KE(t.type)}},Gp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=_S(t.type)}},Wp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},kp=/(\w+)(\])?(\[|\.)?/g;function d_(r,e){r.seq.push(e),r.map[e.id]=e}function vS(r,e,t){let n=r.name,i=n.length;for(kp.lastIndex=0;;){let s=kp.exec(n),o=kp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){d_(t,c===void 0?new Vp(a,r,e):new Gp(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Wp(a),d_(t,u)),t=u}}}var Ga=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);vS(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function f_(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var xS=37297,yS=0;function bS(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var p_=new bt;function MS(r){It._getMatrix(p_,It.workingColorSpace,r);let e=`mat3( ${p_.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(r)){case Ul:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function m_(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+bS(r.getShaderSource(e),a)}else return s}function ES(r,e){let t=MS(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var SS={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[Xi]:"ACESFilmic",[vc]:"AgX",[xc]:"Neutral",[_c]:"Custom"};function TS(r,e){let t=SS[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Td=new C;function wS(){It.getLuminanceCoefficients(Td);let r=Td.x.toFixed(4),e=Td.y.toFixed(4),t=Td.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function AS(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function RS(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function CS(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Rc(r){return r!==""}function g_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function __(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var PS=/^[ \t]*#include +<([\w\d./]+)>/gm;function Xp(r){return r.replace(PS,LS)}var IS=new Map;function LS(r,e){let t=Et[e];if(t===void 0){let n=IS.get(e);if(n!==void 0)t=Et[n],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Xp(t)}var DS=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function v_(r){return r.replace(DS,FS)}function FS(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function x_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var NS={[fc]:"SHADOWMAP_TYPE_PCF",[ka]:"SHADOWMAP_TYPE_VSM"};function US(r){return NS[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var OS={[zs]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function BS(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":OS[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var kS={[Ro]:"ENVMAP_MODE_REFRACTION"};function HS(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":kS[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var zS={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[Ug]:"ENVMAP_BLENDING_MIX",[Og]:"ENVMAP_BLENDING_ADD"};function VS(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":zS[r.combine]||"ENVMAP_BLENDING_NONE"}function GS(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function WS(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=US(t),c=BS(t),h=HS(t),u=VS(t),f=GS(t),d=AS(t),g=RS(s),p=i.createProgram(),_,m,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rc).join(`
`),_.length>0&&(_+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Rc).join(`
`),m.length>0&&(m+=`
`)):(_=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),m=[x_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?Et.tonemapping_pars_fragment:"",t.toneMapping!==Ir?TS("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,ES("linearToOutputTexel",t.outputColorSpace),wS(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rc).join(`
`)),o=Xp(o),o=g_(o,t),o=__(o,t),a=Xp(a),a=g_(a,t),a=__(a,t),o=v_(o),a=v_(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,m=["#define varying in",t.glslVersion===Ap?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ap?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let v=x+_+o,y=x+m+a,M=f_(i,i.VERTEX_SHADER,v),S=f_(i,i.FRAGMENT_SHADER,y);i.attachShader(p,M),i.attachShader(p,S),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function w(L){if(r.debug.checkShaderErrors){let A=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(M)||"",B=i.getShaderInfoLog(S)||"",G=A.trim(),z=D.trim(),k=B.trim(),K=!0,re=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,S);else{let N=m_(i,M,"vertex"),oe=m_(i,S,"fragment");gt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+N+`
`+oe)}else G!==""?ht("WebGLProgram: Program Info Log:",G):(z===""||k==="")&&(re=!1);re&&(L.diagnostics={runnable:K,programLog:G,vertexShader:{log:z,prefix:_},fragmentShader:{log:k,prefix:m}})}i.deleteShader(M),i.deleteShader(S),P=new Ga(i,p),b=CS(i,p)}let P;this.getUniforms=function(){return P===void 0&&w(this),P};let b;this.getAttributes=function(){return b===void 0&&w(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,xS)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=yS++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=S,this}var XS=0,qp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Yp(e),t.set(e,n)),n}},Yp=class{constructor(e){this.id=XS++,this.code=e,this.usedTimes=0}};function qS(r,e,t,n,i,s,o){let a=new zl,l=new qp,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,E,L,A,D){let B=A.fog,G=D.geometry,z=b.isMeshStandardMaterial?A.environment:null,k=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),K=k&&k.mapping===yc?k.image.height:null,re=g[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ht("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let N=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,oe=N!==void 0?N.length:0,ke=0;G.morphAttributes.position!==void 0&&(ke=1),G.morphAttributes.normal!==void 0&&(ke=2),G.morphAttributes.color!==void 0&&(ke=3);let He,Ye,it,ne;if(re){let he=Xr[re];He=he.vertexShader,Ye=he.fragmentShader}else He=b.vertexShader,Ye=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),ne=l.getFragmentShaderID(b);let ie=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,je=!!b.map,ft=!!b.matcap,we=!!k,qe=!!b.aoMap,Ze=!!b.lightMap,De=!!b.bumpMap,j=!!b.normalMap,H=!!b.displacementMap,_t=!!b.emissiveMap,ct=!!b.metalnessMap,Je=!!b.roughnessMap,Fe=b.anisotropy>0,F=b.clearcoat>0,T=b.dispersion>0,I=b.iridescence>0,U=b.sheen>0,W=b.transmission>0,X=Fe&&!!b.anisotropyMap,ge=F&&!!b.clearcoatMap,se=F&&!!b.clearcoatNormalMap,Pe=F&&!!b.clearcoatRoughnessMap,Ae=I&&!!b.iridescenceMap,ue=I&&!!b.iridescenceThicknessMap,de=U&&!!b.sheenColorMap,Le=U&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,_e=!!b.specularColorMap,Ee=!!b.specularIntensityMap,O=W&&!!b.transmissionMap,xe=W&&!!b.thicknessMap,pe=!!b.gradientMap,Ie=!!b.alphaMap,fe=b.alphaTest>0,le=!!b.alphaHash,$=!!b.extensions,J=Ir;b.toneMapped&&(ie===null||ie.isXRRenderTarget===!0)&&(J=r.toneMapping);let V={shaderID:re,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Ye,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:ne,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:ie===null?r.outputColorSpace:ie.isXRRenderTarget===!0?ie.texture.colorSpace:wr,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:ft,envMap:we,envMapMode:we&&k.mapping,envMapCubeUVHeight:K,aoMap:qe,lightMap:Ze,bumpMap:De,normalMap:j,displacementMap:H,emissiveMap:_t,normalMapObjectSpace:j&&b.normalMapType===Hg,normalMapTangentSpace:j&&b.normalMapType===bd,metalnessMap:ct,roughnessMap:Je,anisotropy:Fe,anisotropyMap:X,clearcoat:F,clearcoatMap:ge,clearcoatNormalMap:se,clearcoatRoughnessMap:Pe,dispersion:T,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:U,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Ne,specularColorMap:_e,specularIntensityMap:Ee,transmission:W,transmissionMap:O,thicknessMap:xe,gradientMap:pe,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:fe,alphaHash:le,combine:b.combine,mapUv:je&&p(b.map.channel),aoMapUv:qe&&p(b.aoMap.channel),lightMapUv:Ze&&p(b.lightMap.channel),bumpMapUv:De&&p(b.bumpMap.channel),normalMapUv:j&&p(b.normalMap.channel),displacementMapUv:H&&p(b.displacementMap.channel),emissiveMapUv:_t&&p(b.emissiveMap.channel),metalnessMapUv:ct&&p(b.metalnessMap.channel),roughnessMapUv:Je&&p(b.roughnessMap.channel),anisotropyMapUv:X&&p(b.anisotropyMap.channel),clearcoatMapUv:ge&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:se&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&p(b.sheenRoughnessMap.channel),specularMapUv:Ne&&p(b.specularMap.channel),specularColorMapUv:_e&&p(b.specularColorMap.channel),specularIntensityMapUv:Ee&&p(b.specularIntensityMap.channel),transmissionMapUv:O&&p(b.transmissionMap.channel),thicknessMapUv:xe&&p(b.thicknessMap.channel),alphaMapUv:Ie&&p(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(j||Fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(je||Ie),fog:!!B,useFog:b.fog===!0,fogExp2:!!B&&B.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:ke,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:J,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&It.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&It.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function m(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(x(E,b),v(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function x(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function v(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function y(b){let E=g[b.type],L;if(E){let A=Xr[E];L=ps.clone(A.uniforms)}else L=b.uniforms;return L}function M(b,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new WS(r,E,b,s),h.push(L),u.set(E,L)),L}function S(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function w(b){l.remove(b)}function P(){l.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:y,acquireProgram:M,releaseProgram:S,releaseShaderCache:w,programs:h,dispose:P}}function YS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function $S(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function y_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function b_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,g,p,_){let m=r[e];return m===void 0?(m={id:u.id,object:u,geometry:f,material:d,groupOrder:g,renderOrder:u.renderOrder,z:p,group:_},r[e]=m):(m.id=u.id,m.object=u,m.geometry=f,m.material=d,m.groupOrder=g,m.renderOrder=u.renderOrder,m.z=p,m.group=_),e++,m}function a(u,f,d,g,p,_){let m=o(u,f,d,g,p,_);d.transmission>0?n.push(m):d.transparent===!0?i.push(m):t.push(m)}function l(u,f,d,g,p,_){let m=o(u,f,d,g,p,_);d.transmission>0?n.unshift(m):d.transparent===!0?i.unshift(m):t.unshift(m)}function c(u,f){t.length>1&&t.sort(u||$S),n.length>1&&n.sort(f||y_),i.length>1&&i.sort(f||y_)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function ZS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new b_,r.set(n,[o])):i>=s.length?(o=new b_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function JS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Me};break;case"SpotLight":t={position:new C,direction:new C,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new C,halfWidth:new C,halfHeight:new C};break}return r[e.id]=t,t}}}function KS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var jS=0;function QS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function eT(r){let e=new JS,t=KS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let i=new C,s=new Pt,o=new Pt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,g=0,p=0,_=0,m=0,x=0,v=0,y=0,M=0,S=0,w=0;c.sort(QS);for(let b=0,E=c.length;b<E;b++){let L=c[b],A=L.color,D=L.intensity,B=L.distance,G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Co?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=A.r*D,u+=A.g*D,f+=A.b*D;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],D);w++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let k=L.shadow,K=t.get(L);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,x++}n.directional[d]=z,d++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(A).multiplyScalar(D),z.distance=B,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;let k=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,k.updateMatrices(L),L.castShadow&&S++),n.spotLightMatrix[p]=k.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=G,y++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(A).multiplyScalar(D),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=z,_++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let k=L.shadow,K=t.get(L);K.shadowIntensity=k.intensity,K.shadowBias=k.bias,K.shadowNormalBias=k.normalBias,K.shadowRadius=k.radius,K.shadowMapSize=k.mapSize,K.shadowCameraNear=k.camera.near,K.shadowCameraFar=k.camera.far,n.pointShadow[g]=K,n.pointShadowMap[g]=G,n.pointShadowMatrix[g]=L.shadow.matrix,v++}n.point[g]=z,g++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(D),z.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[m]=z,m++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let P=n.hash;(P.directionalLength!==d||P.pointLength!==g||P.spotLength!==p||P.rectAreaLength!==_||P.hemiLength!==m||P.numDirectionalShadows!==x||P.numPointShadows!==v||P.numSpotShadows!==y||P.numSpotMaps!==M||P.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=_,n.point.length=g,n.hemi.length=m,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=y,n.spotShadowMap.length=y,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=y+M-S,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=S,n.numLightProbes=w,P.directionalLength=d,P.pointLength=g,P.spotLength=p,P.rectAreaLength=_,P.hemiLength=m,P.numDirectionalShadows=x,P.numPointShadows=v,P.numSpotShadows=y,P.numSpotMaps=M,P.numLightProbes=w,n.version=jS++)}function l(c,h){let u=0,f=0,d=0,g=0,p=0,_=h.matrixWorldInverse;for(let m=0,x=c.length;m<x;m++){let v=c[m];if(v.isDirectionalLight){let y=n.directional[u];y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),u++}else if(v.isSpotLight){let y=n.spot[d];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),y.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(_),d++}else if(v.isRectAreaLight){let y=n.rectArea[g];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),y.halfWidth.set(v.width*.5,0,0),y.halfHeight.set(0,v.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(v.isPointLight){let y=n.point[f];y.position.setFromMatrixPosition(v.matrixWorld),y.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){let y=n.hemi[p];y.direction.setFromMatrixPosition(v.matrixWorld),y.direction.transformDirection(_),p++}}}return{setup:a,setupView:l,state:n}}function M_(r){let e=new eT(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function tT(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new M_(r),e.set(i,[a])):s>=o.length?(a=new M_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var nT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iT=`uniform sampler2D shadow_pass;
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
}`,rT=[new C(1,0,0),new C(-1,0,0),new C(0,1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1)],sT=[new C(0,-1,0),new C(0,-1,0),new C(0,0,1),new C(0,0,-1),new C(0,-1,0),new C(0,-1,0)],E_=new Pt,Ac=new C,Hp=new C;function oT(r,e,t){let n=new Fa,i=new ve,s=new ve,o=new tn,a=new hh,l=new dh,c={},h=t.maxTextureSize,u={[cs]:In,[In]:cs,[nn]:nn},f=new Ut({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:nT,fragmentShader:iT}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let g=new vt;g.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ue(g,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let m=this.type;this.render=function(S,w,P){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||S.length===0)return;S.type===Sh&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),S.type=fc);let b=r.getRenderTarget(),E=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),A=r.state;A.setBlending(hr),A.buffers.depth.getReversed()===!0?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);let D=m!==this.type;D&&w.traverse(function(B){B.material&&(Array.isArray(B.material)?B.material.forEach(G=>G.needsUpdate=!0):B.material.needsUpdate=!0)});for(let B=0,G=S.length;B<G;B++){let z=S[B],k=z.shadow;if(k===void 0){ht("WebGLShadowMap:",z,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;i.copy(k.mapSize);let K=k.getFrameExtents();if(i.multiply(K),s.copy(k.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,k.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,k.mapSize.y=s.y)),k.map===null||D===!0){if(k.map!==null&&(k.map.depthTexture!==null&&(k.map.depthTexture.dispose(),k.map.depthTexture=null),k.map.dispose()),this.type===ka){if(z.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}k.map=new gn(i.x,i.y,{format:Co,type:wn,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),k.map.texture.name=z.name+".shadowMap",k.map.depthTexture=new lr(i.x,i.y,dr),k.map.depthTexture.name=z.name+".shadowMapDepth",k.map.depthTexture.format=zr,k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en}else{z.isPointLight?(k.map=new ql(i.x),k.map.depthTexture=new oh(i.x,Lr)):(k.map=new gn(i.x,i.y),k.map.depthTexture=new lr(i.x,i.y,Lr)),k.map.depthTexture.name=z.name+".shadowMap",k.map.depthTexture.format=zr;let N=r.state.buffers.depth.getReversed();this.type===fc?(k.map.depthTexture.compareFunction=N?Ed:Md,k.map.depthTexture.minFilter=Zn,k.map.depthTexture.magFilter=Zn):(k.map.depthTexture.compareFunction=null,k.map.depthTexture.minFilter=en,k.map.depthTexture.magFilter=en)}k.camera.updateProjectionMatrix()}let re=k.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<re;N++){if(k.map.isWebGLCubeRenderTarget)r.setRenderTarget(k.map,N),r.clear();else{N===0&&(r.setRenderTarget(k.map),r.clear());let oe=k.getViewport(N);o.set(s.x*oe.x,s.y*oe.y,s.x*oe.z,s.y*oe.w),A.viewport(o)}if(z.isPointLight){let oe=k.camera,ke=k.matrix,He=z.distance||oe.far;He!==oe.far&&(oe.far=He,oe.updateProjectionMatrix()),Ac.setFromMatrixPosition(z.matrixWorld),oe.position.copy(Ac),Hp.copy(oe.position),Hp.add(rT[N]),oe.up.copy(sT[N]),oe.lookAt(Hp),oe.updateMatrixWorld(),ke.makeTranslation(-Ac.x,-Ac.y,-Ac.z),E_.multiplyMatrices(oe.projectionMatrix,oe.matrixWorldInverse),k._frustum.setFromProjectionMatrix(E_,oe.coordinateSystem,oe.reversedDepth)}else k.updateMatrices(z);n=k.getFrustum(),y(w,P,k.camera,z,this.type)}k.isPointLightShadow!==!0&&this.type===ka&&x(k,P),k.needsUpdate=!1}m=this.type,_.needsUpdate=!1,r.setRenderTarget(b,E,L)};function x(S,w){let P=e.update(p);f.defines.VSM_SAMPLES!==S.blurSamples&&(f.defines.VSM_SAMPLES=S.blurSamples,d.defines.VSM_SAMPLES=S.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new gn(i.x,i.y,{format:Co,type:wn})),f.uniforms.shadow_pass.value=S.map.depthTexture,f.uniforms.resolution.value=S.mapSize,f.uniforms.radius.value=S.radius,r.setRenderTarget(S.mapPass),r.clear(),r.renderBufferDirect(w,null,P,f,p,null),d.uniforms.shadow_pass.value=S.mapPass.texture,d.uniforms.resolution.value=S.mapSize,d.uniforms.radius.value=S.radius,r.setRenderTarget(S.map),r.clear(),r.renderBufferDirect(w,null,P,d,p,null)}function v(S,w,P,b){let E=null,L=P.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(L!==void 0)E=L;else if(E=P.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let A=E.uuid,D=w.uuid,B=c[A];B===void 0&&(B={},c[A]=B);let G=B[D];G===void 0&&(G=E.clone(),B[D]=G,w.addEventListener("dispose",M)),E=G}if(E.visible=w.visible,E.wireframe=w.wireframe,b===ka?E.side=w.shadowSide!==null?w.shadowSide:w.side:E.side=w.shadowSide!==null?w.shadowSide:u[w.side],E.alphaMap=w.alphaMap,E.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,E.map=w.map,E.clipShadows=w.clipShadows,E.clippingPlanes=w.clippingPlanes,E.clipIntersection=w.clipIntersection,E.displacementMap=w.displacementMap,E.displacementScale=w.displacementScale,E.displacementBias=w.displacementBias,E.wireframeLinewidth=w.wireframeLinewidth,E.linewidth=w.linewidth,P.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let A=r.properties.get(E);A.light=P}return E}function y(S,w,P,b,E){if(S.visible===!1)return;if(S.layers.test(w.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&E===ka)&&(!S.frustumCulled||n.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,S.matrixWorld);let D=e.update(S),B=S.material;if(Array.isArray(B)){let G=D.groups;for(let z=0,k=G.length;z<k;z++){let K=G[z],re=B[K.materialIndex];if(re&&re.visible){let N=v(S,re,b,E);S.onBeforeShadow(r,S,w,P,D,N,K),r.renderBufferDirect(P,null,D,N,S,K),S.onAfterShadow(r,S,w,P,D,N,K)}}}else if(B.visible){let G=v(S,B,b,E);S.onBeforeShadow(r,S,w,P,D,G,null),r.renderBufferDirect(P,null,D,G,S,null),S.onAfterShadow(r,S,w,P,D,G,null)}}let A=S.children;for(let D=0,B=A.length;D<B;D++)y(A[D],w,P,b,E)}function M(S){S.target.removeEventListener("dispose",M);for(let P in c){let b=c[P],E=S.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var aT={[Th]:wh,[Ah]:Ph,[Rh]:Ih,[yo]:Ch,[wh]:Th,[Ph]:Ah,[Ih]:Rh,[Ch]:yo};function lT(r,e){function t(){let O=!1,xe=new tn,pe=null,Ie=new tn(0,0,0,0);return{setMask:function(fe){pe!==fe&&!O&&(r.colorMask(fe,fe,fe,fe),pe=fe)},setLocked:function(fe){O=fe},setClear:function(fe,le,$,J,V){V===!0&&(fe*=J,le*=J,$*=J),xe.set(fe,le,$,J),Ie.equals(xe)===!1&&(r.clearColor(fe,le,$,J),Ie.copy(xe))},reset:function(){O=!1,pe=null,Ie.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,pe=null,Ie=null,fe=null;return{setReversed:function(le){if(xe!==le){let $=e.get("EXT_clip_control");le?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),xe=le;let J=fe;fe=null,this.setClear(J)}},getReversed:function(){return xe},setTest:function(le){le?ie(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(le){pe!==le&&!O&&(r.depthMask(le),pe=le)},setFunc:function(le){if(xe&&(le=aT[le]),Ie!==le){switch(le){case Th:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case Rh:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=le}},setLocked:function(le){O=le},setClear:function(le){fe!==le&&(xe&&(le=1-le),r.clearDepth(le),fe=le)},reset:function(){O=!1,pe=null,Ie=null,fe=null,xe=!1}}}function i(){let O=!1,xe=null,pe=null,Ie=null,fe=null,le=null,$=null,J=null,V=null;return{setTest:function(he){O||(he?ie(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(he){xe!==he&&!O&&(r.stencilMask(he),xe=he)},setFunc:function(he,Se,st){(pe!==he||Ie!==Se||fe!==st)&&(r.stencilFunc(he,Se,st),pe=he,Ie=Se,fe=st)},setOp:function(he,Se,st){(le!==he||$!==Se||J!==st)&&(r.stencilOp(he,Se,st),le=he,$=Se,J=st)},setLocked:function(he){O=he},setClear:function(he){V!==he&&(r.clearStencil(he),V=he)},reset:function(){O=!1,xe=null,pe=null,Ie=null,fe=null,le=null,$=null,J=null,V=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],g=null,p=!1,_=null,m=null,x=null,v=null,y=null,M=null,S=null,w=new Me(0,0,0),P=0,b=!1,E=null,L=null,A=null,D=null,B=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,k=0,K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(k=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=k>=1):K.indexOf("OpenGL ES")!==-1&&(k=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=k>=2);let re=null,N={},oe=r.getParameter(r.SCISSOR_BOX),ke=r.getParameter(r.VIEWPORT),He=new tn().fromArray(oe),Ye=new tn().fromArray(ke);function it(O,xe,pe,Ie){let fe=new Uint8Array(4),le=r.createTexture();r.bindTexture(O,le),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $=0;$<pe;$++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(xe+$,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return le}let ne={};ne[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),ne[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ne[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ne[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),ie(r.DEPTH_TEST),o.setFunc(yo),De(!1),j(_p),ie(r.CULL_FACE),qe(hr);function ie(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ye(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Oe(O,xe){return u[O]!==xe?(r.bindFramebuffer(O,xe),u[O]=xe,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=xe),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ce(O,xe){let pe=d,Ie=!1;if(O){pe=f.get(xe),pe===void 0&&(pe=[],f.set(xe,pe));let fe=O.textures;if(pe.length!==fe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let le=0,$=fe.length;le<$;le++)pe[le]=r.COLOR_ATTACHMENT0+le;pe.length=fe.length,Ie=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(pe)}function je(O){return g!==O?(r.useProgram(O),g=O,!0):!1}let ft={[Fs]:r.FUNC_ADD,[xg]:r.FUNC_SUBTRACT,[yg]:r.FUNC_REVERSE_SUBTRACT};ft[bg]=r.MIN,ft[Mg]=r.MAX;let we={[Eg]:r.ZERO,[Sg]:r.ONE,[Tg]:r.SRC_COLOR,[$u]:r.SRC_ALPHA,[Ig]:r.SRC_ALPHA_SATURATE,[Cg]:r.DST_COLOR,[Ag]:r.DST_ALPHA,[wg]:r.ONE_MINUS_SRC_COLOR,[Zu]:r.ONE_MINUS_SRC_ALPHA,[Pg]:r.ONE_MINUS_DST_COLOR,[Rg]:r.ONE_MINUS_DST_ALPHA,[Lg]:r.CONSTANT_COLOR,[Dg]:r.ONE_MINUS_CONSTANT_COLOR,[Fg]:r.CONSTANT_ALPHA,[Ng]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(O,xe,pe,Ie,fe,le,$,J,V,he){if(O===hr){p===!0&&(ye(r.BLEND),p=!1);return}if(p===!1&&(ie(r.BLEND),p=!0),O!==vg){if(O!==_||he!==b){if((m!==Fs||y!==Fs)&&(r.blendEquation(r.FUNC_ADD),m=Fs,y=Fs),he)switch(O){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hs:r.blendFunc(r.ONE,r.ONE);break;case vp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case xp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:gt("WebGLState: Invalid blending: ",O);break}else switch(O){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case vp:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case xp:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",O);break}x=null,v=null,M=null,S=null,w.set(0,0,0),P=0,_=O,b=he}return}fe=fe||xe,le=le||pe,$=$||Ie,(xe!==m||fe!==y)&&(r.blendEquationSeparate(ft[xe],ft[fe]),m=xe,y=fe),(pe!==x||Ie!==v||le!==M||$!==S)&&(r.blendFuncSeparate(we[pe],we[Ie],we[le],we[$]),x=pe,v=Ie,M=le,S=$),(J.equals(w)===!1||V!==P)&&(r.blendColor(J.r,J.g,J.b,V),w.copy(J),P=V),_=O,b=!1}function Ze(O,xe){O.side===nn?ye(r.CULL_FACE):ie(r.CULL_FACE);let pe=O.side===In;xe&&(pe=!pe),De(pe),O.blending===xo&&O.transparent===!1?qe(hr):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ie(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(O){E!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),E=O)}function j(O){O!==gg?(ie(r.CULL_FACE),O!==L&&(O===_p?r.cullFace(r.BACK):O===_g?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),L=O}function H(O){O!==A&&(z&&r.lineWidth(O),A=O)}function _t(O,xe,pe){O?(ie(r.POLYGON_OFFSET_FILL),(D!==xe||B!==pe)&&(r.polygonOffset(xe,pe),D=xe,B=pe)):ye(r.POLYGON_OFFSET_FILL)}function ct(O){O?ie(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Je(O){O===void 0&&(O=r.TEXTURE0+G-1),re!==O&&(r.activeTexture(O),re=O)}function Fe(O,xe,pe){pe===void 0&&(re===null?pe=r.TEXTURE0+G-1:pe=re);let Ie=N[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},N[pe]=Ie),(Ie.type!==O||Ie.texture!==xe)&&(re!==pe&&(r.activeTexture(pe),re=pe),r.bindTexture(O,xe||ne[O]),Ie.type=O,Ie.texture=xe)}function F(){let O=N[re];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function T(){try{r.compressedTexImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function U(){try{r.texSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function W(){try{r.texSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function se(){try{r.texStorage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function Pe(){try{r.texStorage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function Ae(){try{r.texImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function ue(){try{r.texImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function de(O){He.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function Le(O){Ye.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function Ne(O,xe){let pe=c.get(xe);pe===void 0&&(pe=new WeakMap,c.set(xe,pe));let Ie=pe.get(O);Ie===void 0&&(Ie=r.getUniformBlockIndex(xe,O.name),pe.set(O,Ie))}function _e(O,xe){let Ie=c.get(xe).get(O);l.get(xe)!==Ie&&(r.uniformBlockBinding(xe,Ie,O.__bindingPointIndex),l.set(xe,Ie))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},re=null,N={},u={},f=new WeakMap,d=[],g=null,p=!1,_=null,m=null,x=null,v=null,y=null,M=null,S=null,w=new Me(0,0,0),P=0,b=!1,E=null,L=null,A=null,D=null,B=null,He.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:ie,disable:ye,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:je,setBlending:qe,setMaterial:Ze,setFlipSided:De,setCullFace:j,setLineWidth:H,setPolygonOffset:_t,setScissorTest:ct,activeTexture:Je,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:T,compressedTexImage3D:I,texImage2D:Ae,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:_e,texStorage2D:se,texStorage3D:Pe,texSubImage2D:U,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:de,viewport:Le,reset:Ee}}function cT(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(F,T){return d?new OffscreenCanvas(F,T):Bl("canvas")}function p(F,T,I){let U=1,W=Fe(F);if((W.width>I||W.height>I)&&(U=I/Math.max(W.width,W.height)),U<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let X=Math.floor(U*W.width),ge=Math.floor(U*W.height);u===void 0&&(u=g(X,ge));let se=T?g(X,ge):u;return se.width=X,se.height=ge,se.getContext("2d").drawImage(F,0,0,X,ge),ht("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+X+"x"+ge+")."),se}else return"data"in F&&ht("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),F;return F}function _(F){return F.generateMipmaps}function m(F){r.generateMipmap(F)}function x(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(F,T,I,U,W=!1){if(F!==null){if(r[F]!==void 0)return r[F];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let X=T;if(T===r.RED&&(I===r.FLOAT&&(X=r.R32F),I===r.HALF_FLOAT&&(X=r.R16F),I===r.UNSIGNED_BYTE&&(X=r.R8)),T===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.R8UI),I===r.UNSIGNED_SHORT&&(X=r.R16UI),I===r.UNSIGNED_INT&&(X=r.R32UI),I===r.BYTE&&(X=r.R8I),I===r.SHORT&&(X=r.R16I),I===r.INT&&(X=r.R32I)),T===r.RG&&(I===r.FLOAT&&(X=r.RG32F),I===r.HALF_FLOAT&&(X=r.RG16F),I===r.UNSIGNED_BYTE&&(X=r.RG8)),T===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RG8UI),I===r.UNSIGNED_SHORT&&(X=r.RG16UI),I===r.UNSIGNED_INT&&(X=r.RG32UI),I===r.BYTE&&(X=r.RG8I),I===r.SHORT&&(X=r.RG16I),I===r.INT&&(X=r.RG32I)),T===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RGB8UI),I===r.UNSIGNED_SHORT&&(X=r.RGB16UI),I===r.UNSIGNED_INT&&(X=r.RGB32UI),I===r.BYTE&&(X=r.RGB8I),I===r.SHORT&&(X=r.RGB16I),I===r.INT&&(X=r.RGB32I)),T===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),I===r.UNSIGNED_INT&&(X=r.RGBA32UI),I===r.BYTE&&(X=r.RGBA8I),I===r.SHORT&&(X=r.RGBA16I),I===r.INT&&(X=r.RGBA32I)),T===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),T===r.RGBA){let ge=W?Ul:It.getTransfer(U);I===r.FLOAT&&(X=r.RGBA32F),I===r.HALF_FLOAT&&(X=r.RGBA16F),I===r.UNSIGNED_BYTE&&(X=ge===Vt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(F,T){let I;return F?T===null||T===Lr||T===za?I=r.DEPTH24_STENCIL8:T===dr?I=r.DEPTH32F_STENCIL8:T===Ha&&(I=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Lr||T===za?I=r.DEPTH_COMPONENT24:T===dr?I=r.DEPTH_COMPONENT32F:T===Ha&&(I=r.DEPTH_COMPONENT16),I}function M(F,T){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==Zn?Math.log2(Math.max(T.width,T.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?T.mipmaps.length:1}function S(F){let T=F.target;T.removeEventListener("dispose",S),P(T),T.isVideoTexture&&h.delete(T)}function w(F){let T=F.target;T.removeEventListener("dispose",w),E(T)}function P(F){let T=n.get(F);if(T.__webglInit===void 0)return;let I=F.source,U=f.get(I);if(U){let W=U[T.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(F),Object.keys(U).length===0&&f.delete(I)}n.remove(F)}function b(F){let T=n.get(F);r.deleteTexture(T.__webglTexture);let I=F.source,U=f.get(I);delete U[T.__cacheKey],o.memory.textures--}function E(F){let T=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(T.__webglFramebuffer[U]))for(let W=0;W<T.__webglFramebuffer[U].length;W++)r.deleteFramebuffer(T.__webglFramebuffer[U][W]);else r.deleteFramebuffer(T.__webglFramebuffer[U]);T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer[U])}else{if(Array.isArray(T.__webglFramebuffer))for(let U=0;U<T.__webglFramebuffer.length;U++)r.deleteFramebuffer(T.__webglFramebuffer[U]);else r.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&r.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&r.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let U=0;U<T.__webglColorRenderbuffer.length;U++)T.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(T.__webglColorRenderbuffer[U]);T.__webglDepthRenderbuffer&&r.deleteRenderbuffer(T.__webglDepthRenderbuffer)}let I=F.textures;for(let U=0,W=I.length;U<W;U++){let X=n.get(I[U]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(I[U])}n.remove(F)}let L=0;function A(){L=0}function D(){let F=L;return F>=i.maxTextures&&ht("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),L+=1,F}function B(F){let T=[];return T.push(F.wrapS),T.push(F.wrapT),T.push(F.wrapR||0),T.push(F.magFilter),T.push(F.minFilter),T.push(F.anisotropy),T.push(F.internalFormat),T.push(F.format),T.push(F.type),T.push(F.generateMipmaps),T.push(F.premultiplyAlpha),T.push(F.flipY),T.push(F.unpackAlignment),T.push(F.colorSpace),T.join()}function G(F,T){let I=n.get(F);if(F.isVideoTexture&&ct(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&I.__version!==F.version){let U=F.image;if(U===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ne(I,F,T);return}}else F.isExternalTexture&&(I.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+T)}function z(F,T){let I=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&I.__version!==F.version){ne(I,F,T);return}else F.isExternalTexture&&(I.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+T)}function k(F,T){let I=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&I.__version!==F.version){ne(I,F,T);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+T)}function K(F,T){let I=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&I.__version!==F.version){ie(I,F,T);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+T)}let re={[Aa]:r.REPEAT,[kr]:r.CLAMP_TO_EDGE,[Ju]:r.MIRRORED_REPEAT},N={[en]:r.NEAREST,[Bg]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},oe={[zg]:r.NEVER,[qg]:r.ALWAYS,[Vg]:r.LESS,[Md]:r.LEQUAL,[Gg]:r.EQUAL,[Ed]:r.GEQUAL,[Wg]:r.GREATER,[Xg]:r.NOTEQUAL};function ke(F,T){if(T.type===dr&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Zn||T.magFilter===Nh||T.magFilter===bc||T.magFilter===Vs||T.minFilter===Zn||T.minFilter===Nh||T.minFilter===bc||T.minFilter===Vs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,re[T.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,re[T.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,re[T.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,N[T.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,N[T.minFilter]),T.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,oe[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===en||T.minFilter!==bc&&T.minFilter!==Vs||T.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||n.get(T).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,i.getMaxAnisotropy())),n.get(T).__currentAnisotropy=T.anisotropy}}}function He(F,T){let I=!1;F.__webglInit===void 0&&(F.__webglInit=!0,T.addEventListener("dispose",S));let U=T.source,W=f.get(U);W===void 0&&(W={},f.set(U,W));let X=B(T);if(X!==F.__cacheKey){W[X]===void 0&&(W[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,I=!0),W[X].usedTimes++;let ge=W[F.__cacheKey];ge!==void 0&&(W[F.__cacheKey].usedTimes--,ge.usedTimes===0&&b(T)),F.__cacheKey=X,F.__webglTexture=W[X].texture}return I}function Ye(F,T,I){return Math.floor(Math.floor(F/I)/T)}function it(F,T,I,U){let X=F.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,T.width,T.height,I,U,T.data);else{X.sort((ue,de)=>ue.start-de.start);let ge=0;for(let ue=1;ue<X.length;ue++){let de=X[ge],Le=X[ue],Ne=de.start+de.count,_e=Ye(Le.start,T.width,4),Ee=Ye(de.start,T.width,4);Le.start<=Ne+1&&_e===Ee&&Ye(Le.start+Le.count-1,T.width,4)===_e?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++ge,X[ge]=Le)}X.length=ge+1;let se=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,T.width);for(let ue=0,de=X.length;ue<de;ue++){let Le=X[ue],Ne=Math.floor(Le.start/4),_e=Math.ceil(Le.count/4),Ee=Ne%T.width,O=Math.floor(Ne/T.width),xe=_e,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ee,O,xe,pe,I,U,T.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,se),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function ne(F,T,I){let U=r.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),T.isData3DTexture&&(U=r.TEXTURE_3D);let W=He(F,T),X=T.source;t.bindTexture(U,F.__webglTexture,r.TEXTURE0+I);let ge=n.get(X);if(X.version!==ge.__version||W===!0){t.activeTexture(r.TEXTURE0+I);let se=It.getPrimaries(It.workingColorSpace),Pe=T.colorSpace===fs?null:It.getPrimaries(T.colorSpace),Ae=T.colorSpace===fs||se===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=p(T.image,!1,i.maxTextureSize);ue=Je(T,ue);let de=s.convert(T.format,T.colorSpace),Le=s.convert(T.type),Ne=v(T.internalFormat,de,Le,T.colorSpace,T.isVideoTexture);ke(U,T);let _e,Ee=T.mipmaps,O=T.isVideoTexture!==!0,xe=ge.__version===void 0||W===!0,pe=X.dataReady,Ie=M(T,ue);if(T.isDepthTexture)Ne=y(T.format===Gs,T.type),xe&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,de,Le,null));else if(T.isDataTexture)if(Ee.length>0){O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,Ee[0].width,Ee[0].height);for(let fe=0,le=Ee.length;fe<le;fe++)_e=Ee[fe],O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,Le,_e.data):t.texImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,de,Le,_e.data);T.generateMipmaps=!1}else O?(xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,ue.width,ue.height),pe&&it(T,ue,de,Le)):t.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,de,Le,ue.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){O&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,Ee[0].width,Ee[0].height,ue.depth);for(let fe=0,le=Ee.length;fe<le;fe++)if(_e=Ee[fe],T.format!==fr)if(de!==null)if(O){if(pe)if(T.layerUpdates.size>0){let $=Fp(_e.width,_e.height,T.format,T.type);for(let J of T.layerUpdates){let V=_e.data.subarray(J*$/_e.data.BYTES_PER_ELEMENT,(J+1)*$/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,J,_e.width,_e.height,1,de,V)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,de,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,Ne,_e.width,_e.height,ue.depth,0,_e.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,de,Le,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,Ne,_e.width,_e.height,ue.depth,0,de,Le,_e.data)}else{O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,Ee[0].width,Ee[0].height);for(let fe=0,le=Ee.length;fe<le;fe++)_e=Ee[fe],T.format!==fr?de!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,_e.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,Le,_e.data):t.texImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,de,Le,_e.data)}else if(T.isDataArrayTexture)if(O){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,ue.width,ue.height,ue.depth),pe)if(T.layerUpdates.size>0){let fe=Fp(ue.width,ue.height,T.format,T.type);for(let le of T.layerUpdates){let $=ue.data.subarray(le*fe/ue.data.BYTES_PER_ELEMENT,(le+1)*fe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,le,ue.width,ue.height,1,de,Le,$)}T.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,de,Le,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,de,Le,ue.data);else if(T.isData3DTexture)O?(xe&&t.texStorage3D(r.TEXTURE_3D,Ie,Ne,ue.width,ue.height,ue.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,de,Le,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,de,Le,ue.data);else if(T.isFramebufferTexture){if(xe)if(O)t.texStorage2D(r.TEXTURE_2D,Ie,Ne,ue.width,ue.height);else{let fe=ue.width,le=ue.height;for(let $=0;$<Ie;$++)t.texImage2D(r.TEXTURE_2D,$,Ne,fe,le,0,de,Le,null),fe>>=1,le>>=1}}else if(Ee.length>0){if(O&&xe){let fe=Fe(Ee[0]);t.texStorage2D(r.TEXTURE_2D,Ie,Ne,fe.width,fe.height)}for(let fe=0,le=Ee.length;fe<le;fe++)_e=Ee[fe],O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,de,Le,_e):t.texImage2D(r.TEXTURE_2D,fe,Ne,de,Le,_e);T.generateMipmaps=!1}else if(O){if(xe){let fe=Fe(ue);t.texStorage2D(r.TEXTURE_2D,Ie,Ne,fe.width,fe.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Le,ue)}else t.texImage2D(r.TEXTURE_2D,0,Ne,de,Le,ue);_(T)&&m(U),ge.__version=X.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ie(F,T,I){if(T.image.length!==6)return;let U=He(F,T),W=T.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+I);let X=n.get(W);if(W.version!==X.__version||U===!0){t.activeTexture(r.TEXTURE0+I);let ge=It.getPrimaries(It.workingColorSpace),se=T.colorSpace===fs?null:It.getPrimaries(T.colorSpace),Pe=T.colorSpace===fs||ge===se?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,T.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,T.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ae=T.isCompressedTexture||T.image[0].isCompressedTexture,ue=T.image[0]&&T.image[0].isDataTexture,de=[];for(let le=0;le<6;le++)!Ae&&!ue?de[le]=p(T.image[le],!0,i.maxCubemapSize):de[le]=ue?T.image[le].image:T.image[le],de[le]=Je(T,de[le]);let Le=de[0],Ne=s.convert(T.format,T.colorSpace),_e=s.convert(T.type),Ee=v(T.internalFormat,Ne,_e,T.colorSpace),O=T.isVideoTexture!==!0,xe=X.__version===void 0||U===!0,pe=W.dataReady,Ie=M(T,Le);ke(r.TEXTURE_CUBE_MAP,T);let fe;if(Ae){O&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Ee,Le.width,Le.height);for(let le=0;le<6;le++){fe=de[le].mipmaps;for(let $=0;$<fe.length;$++){let J=fe[$];T.format!==fr?Ne!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$,0,0,J.width,J.height,Ne,J.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$,Ee,J.width,J.height,0,J.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$,0,0,J.width,J.height,Ne,_e,J.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$,Ee,J.width,J.height,0,Ne,_e,J.data)}}}else{if(fe=T.mipmaps,O&&xe){fe.length>0&&Ie++;let le=Fe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Ee,le.width,le.height)}for(let le=0;le<6;le++)if(ue){O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,de[le].width,de[le].height,Ne,_e,de[le].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,de[le].width,de[le].height,0,Ne,_e,de[le].data);for(let $=0;$<fe.length;$++){let V=fe[$].image[le].image;O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$+1,0,0,V.width,V.height,Ne,_e,V.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$+1,Ee,V.width,V.height,0,Ne,_e,V.data)}}else{O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Ne,_e,de[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ee,Ne,_e,de[le]);for(let $=0;$<fe.length;$++){let J=fe[$];O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$+1,0,0,Ne,_e,J.image[le]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+le,$+1,Ee,Ne,_e,J.image[le])}}}_(T)&&m(r.TEXTURE_CUBE_MAP),X.__version=W.version,T.onUpdate&&T.onUpdate(T)}F.__version=T.version}function ye(F,T,I,U,W,X){let ge=s.convert(I.format,I.colorSpace),se=s.convert(I.type),Pe=v(I.internalFormat,ge,se,I.colorSpace),Ae=n.get(T),ue=n.get(I);if(ue.__renderTarget=T,!Ae.__hasExternalTextures){let de=Math.max(1,T.width>>X),Le=Math.max(1,T.height>>X);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,X,Pe,de,Le,T.depth,0,ge,se,null):t.texImage2D(W,X,Pe,de,Le,0,ge,se,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),_t(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,W,ue.__webglTexture,0,H(T)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,W,ue.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(F,T,I){if(r.bindRenderbuffer(r.RENDERBUFFER,F),T.depthBuffer){let U=T.depthTexture,W=U&&U.isDepthTexture?U.type:null,X=y(T.stencilBuffer,W),ge=T.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(T),X,T.width,T.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(T),X,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,X,T.width,T.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,F)}else{let U=T.textures;for(let W=0;W<U.length;W++){let X=U[W],ge=s.convert(X.format,X.colorSpace),se=s.convert(X.type),Pe=v(X.internalFormat,ge,se,X.colorSpace);_t(T)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(T),Pe,T.width,T.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(T),Pe,T.width,T.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,T.width,T.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(F,T,I){let U=T.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(T.depthTexture);if(W.__renderTarget=T,(!W.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),U){if(W.__webglInit===void 0&&(W.__webglInit=!0,T.depthTexture.addEventListener("dispose",S)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),ke(r.TEXTURE_CUBE_MAP,T.depthTexture);let Ae=s.convert(T.depthTexture.format),ue=s.convert(T.depthTexture.type),de;T.depthTexture.format===zr?de=r.DEPTH_COMPONENT24:T.depthTexture.format===Gs&&(de=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,de,T.width,T.height,0,Ae,ue,null)}}else G(T.depthTexture,0);let X=W.__webglTexture,ge=H(T),se=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,Pe=T.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(T.depthTexture.format===zr)_t(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,se,X,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,se,X,0);else if(T.depthTexture.format===Gs)_t(T)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,se,X,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,se,X,0);else throw new Error("Unknown depthTexture format")}function je(F){let T=n.get(F),I=F.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==F.depthTexture){let U=F.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),U){let W=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,U.removeEventListener("dispose",W)};U.addEventListener("dispose",W),T.__depthDisposeCallback=W}T.__boundDepthTexture=U}if(F.depthTexture&&!T.__autoAllocateDepthBuffer)if(I)for(let U=0;U<6;U++)Ce(T.__webglFramebuffer[U],F,U);else{let U=F.texture.mipmaps;U&&U.length>0?Ce(T.__webglFramebuffer[0],F,0):Ce(T.__webglFramebuffer,F,0)}else if(I){T.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[U]),T.__webglDepthbuffer[U]===void 0)T.__webglDepthbuffer[U]=r.createRenderbuffer(),Oe(T.__webglDepthbuffer[U],F,!1);else{let W=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,X)}}else{let U=F.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=r.createRenderbuffer(),Oe(T.__webglDepthbuffer,F,!1);else{let W=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=T.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(F,T,I){let U=n.get(F);T!==void 0&&ye(U.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&je(F)}function we(F){let T=F.texture,I=n.get(F),U=n.get(T);F.addEventListener("dispose",w);let W=F.textures,X=F.isWebGLCubeRenderTarget===!0,ge=W.length>1;if(ge||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=T.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer[se]=[];for(let Pe=0;Pe<T.mipmaps.length;Pe++)I.__webglFramebuffer[se][Pe]=r.createFramebuffer()}else I.__webglFramebuffer[se]=r.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){I.__webglFramebuffer=[];for(let se=0;se<T.mipmaps.length;se++)I.__webglFramebuffer[se]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(ge)for(let se=0,Pe=W.length;se<Pe;se++){let Ae=n.get(W[se]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(F.samples>0&&_t(F)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let se=0;se<W.length;se++){let Pe=W[se];I.__webglColorRenderbuffer[se]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[se]);let Ae=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),de=v(Pe.internalFormat,Ae,ue,Pe.colorSpace,F.isXRRenderTarget===!0),Le=H(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,de,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+se,r.RENDERBUFFER,I.__webglColorRenderbuffer[se])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(I.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),ke(r.TEXTURE_CUBE_MAP,T);for(let se=0;se<6;se++)if(T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ye(I.__webglFramebuffer[se][Pe],F,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,Pe);else ye(I.__webglFramebuffer[se],F,T,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+se,0);_(T)&&m(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let se=0,Pe=W.length;se<Pe;se++){let Ae=W[se],ue=n.get(Ae),de=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,ue.__webglTexture),ke(de,Ae),ye(I.__webglFramebuffer,F,Ae,r.COLOR_ATTACHMENT0+se,de,0),_(Ae)&&m(de)}t.unbindTexture()}else{let se=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(se=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(se,U.__webglTexture),ke(se,T),T.mipmaps&&T.mipmaps.length>0)for(let Pe=0;Pe<T.mipmaps.length;Pe++)ye(I.__webglFramebuffer[Pe],F,T,r.COLOR_ATTACHMENT0,se,Pe);else ye(I.__webglFramebuffer,F,T,r.COLOR_ATTACHMENT0,se,0);_(T)&&m(se),t.unbindTexture()}F.depthBuffer&&je(F)}function qe(F){let T=F.textures;for(let I=0,U=T.length;I<U;I++){let W=T[I];if(_(W)){let X=x(F),ge=n.get(W).__webglTexture;t.bindTexture(X,ge),m(X),t.unbindTexture()}}}let Ze=[],De=[];function j(F){if(F.samples>0){if(_t(F)===!1){let T=F.textures,I=F.width,U=F.height,W=r.COLOR_BUFFER_BIT,X=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(F),se=T.length>1;if(se)for(let Ae=0;Ae<T.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let Pe=F.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ae=0;Ae<T.length;Ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),se){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);let ue=n.get(T[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,I,U,0,0,I,U,W,r.NEAREST),l===!0&&(Ze.length=0,De.length=0,Ze.push(r.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ze.push(X),De.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),se)for(let Ae=0;Ae<T.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);let ue=n.get(T[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let T=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[T])}}}function H(F){return Math.min(i.maxSamples,F.samples)}function _t(F){let T=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function ct(F){let T=o.render.frame;h.get(F)!==T&&(h.set(F,T),F.update())}function Je(F,T){let I=F.colorSpace,U=F.format,W=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||I!==wr&&I!==fs&&(It.getTransfer(I)===Vt?(U!==fr||W!==Di)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",I)),T}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=A,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=k,this.setTextureCube=K,this.rebindTextures=ft,this.setupRenderTarget=we,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function uT(r,e){function t(n,i=fs){let s,o=It.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===Oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===Bh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Ep)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===bp)return r.BYTE;if(n===Mp)return r.SHORT;if(n===Ha)return r.UNSIGNED_SHORT;if(n===Uh)return r.INT;if(n===Lr)return r.UNSIGNED_INT;if(n===dr)return r.FLOAT;if(n===wn)return r.HALF_FLOAT;if(n===Tp)return r.ALPHA;if(n===wp)return r.RGB;if(n===fr)return r.RGBA;if(n===zr)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===kh)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Co)return r.RG;if(n===zh)return r.RG_INTEGER;if(n===Vh)return r.RGBA_INTEGER;if(n===Mc||n===Ec||n===Sc||n===Tc)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===Xh||n===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===$h)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jh)return s.COMPRESSED_R11_EAC;if(n===Kh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jh)return s.COMPRESSED_RG11_EAC;if(n===Qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===od||n===ad||n===ld||n===cd||n===ud||n===hd||n===dd||n===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ed)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===td)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===id)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===od)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ad)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ld)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ud)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pd||n===md||n===gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pd)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_d||n===vd||n===xd||n===yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_d)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var hT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dT=`
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

}`,$p=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ut({vertexShader:hT,fragmentShader:dT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Zp=class extends us{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,g=null,p=typeof XRWebGLBinding<"u",_=new $p,m={},x=t.getContextAttributes(),v=null,y=null,M=[],S=[],w=new ve,P=null,b=new kt;b.viewport=new tn;let E=new kt;E.viewport=new tn;let L=[b,E],A=new Eh,D=null,B=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ne){let ie=M[ne];return ie===void 0&&(ie=new Da,M[ne]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(ne){let ie=M[ne];return ie===void 0&&(ie=new Da,M[ne]=ie),ie.getGripSpace()},this.getHand=function(ne){let ie=M[ne];return ie===void 0&&(ie=new Da,M[ne]=ie),ie.getHandSpace()};function G(ne){let ie=S.indexOf(ne.inputSource);if(ie===-1)return;let ye=M[ie];ye!==void 0&&(ye.update(ne.inputSource,ne.frame,c||o),ye.dispatchEvent({type:ne.type,data:ne.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",k);for(let ne=0;ne<M.length;ne++){let ie=S[ne];ie!==null&&(S[ne]=null,M[ne].disconnect(ie))}D=null,B=null,_.reset();for(let ne in m)delete m[ne];e.setRenderTarget(v),d=null,f=null,u=null,i=null,y=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(P),e.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ne){s=ne,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ne){a=ne,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ne){c=ne},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&p&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(ne){if(i=ne,i!==null){if(v=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",k),x.xrCompatible!==!0&&await t.makeXRCompatible(),P=e.getPixelRatio(),e.getSize(w),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,Ce=null;x.depth&&(Ce=x.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=x.stencil?Gs:zr,Oe=x.stencil?za:Lr);let je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new gn(f.textureWidth,f.textureHeight,{format:fr,type:Di,depthTexture:new lr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:x.stencil,colorSpace:e.outputColorSpace,samples:x.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:x.antialias,alpha:!0,depth:x.depth,stencil:x.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new gn(d.framebufferWidth,d.framebufferHeight,{format:fr,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:x.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function k(ne){for(let ie=0;ie<ne.removed.length;ie++){let ye=ne.removed[ie],Oe=S.indexOf(ye);Oe>=0&&(S[Oe]=null,M[Oe].disconnect(ye))}for(let ie=0;ie<ne.added.length;ie++){let ye=ne.added[ie],Oe=S.indexOf(ye);if(Oe===-1){for(let je=0;je<M.length;je++)if(je>=S.length){S.push(ye),Oe=je;break}else if(S[je]===null){S[je]=ye,Oe=je;break}if(Oe===-1)break}let Ce=M[Oe];Ce&&Ce.connect(ye)}}let K=new C,re=new C;function N(ne,ie,ye){K.setFromMatrixPosition(ie.matrixWorld),re.setFromMatrixPosition(ye.matrixWorld);let Oe=K.distanceTo(re),Ce=ie.projectionMatrix.elements,je=ye.projectionMatrix.elements,ft=Ce[14]/(Ce[10]-1),we=Ce[14]/(Ce[10]+1),qe=(Ce[9]+1)/Ce[5],Ze=(Ce[9]-1)/Ce[5],De=(Ce[8]-1)/Ce[0],j=(je[8]+1)/je[0],H=ft*De,_t=ft*j,ct=Oe/(-De+j),Je=ct*-De;if(ie.matrixWorld.decompose(ne.position,ne.quaternion,ne.scale),ne.translateX(Je),ne.translateZ(ct),ne.matrixWorld.compose(ne.position,ne.quaternion,ne.scale),ne.matrixWorldInverse.copy(ne.matrixWorld).invert(),Ce[10]===-1)ne.projectionMatrix.copy(ie.projectionMatrix),ne.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let Fe=ft+ct,F=we+ct,T=H-Je,I=_t+(Oe-Je),U=qe*we/F*Fe,W=Ze*we/F*Fe;ne.projectionMatrix.makePerspective(T,I,U,W,Fe,F),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert()}}function oe(ne,ie){ie===null?ne.matrixWorld.copy(ne.matrix):ne.matrixWorld.multiplyMatrices(ie.matrixWorld,ne.matrix),ne.matrixWorldInverse.copy(ne.matrixWorld).invert()}this.updateCamera=function(ne){if(i===null)return;let ie=ne.near,ye=ne.far;_.texture!==null&&(_.depthNear>0&&(ie=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),A.near=E.near=b.near=ie,A.far=E.far=b.far=ye,(D!==A.near||B!==A.far)&&(i.updateRenderState({depthNear:A.near,depthFar:A.far}),D=A.near,B=A.far),A.layers.mask=ne.layers.mask|6,b.layers.mask=A.layers.mask&3,E.layers.mask=A.layers.mask&5;let Oe=ne.parent,Ce=A.cameras;oe(A,Oe);for(let je=0;je<Ce.length;je++)oe(Ce[je],Oe);Ce.length===2?N(A,b,E):A.projectionMatrix.copy(b.projectionMatrix),ke(ne,A,Oe)};function ke(ne,ie,ye){ye===null?ne.matrix.copy(ie.matrixWorld):(ne.matrix.copy(ye.matrixWorld),ne.matrix.invert(),ne.matrix.multiply(ie.matrixWorld)),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.updateMatrixWorld(!0),ne.projectionMatrix.copy(ie.projectionMatrix),ne.projectionMatrixInverse.copy(ie.projectionMatrixInverse),ne.isPerspectiveCamera&&(ne.fov=Pa*2*Math.atan(1/ne.projectionMatrix.elements[5]),ne.zoom=1)}this.getCamera=function(){return A},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ne){l=ne,f!==null&&(f.fixedFoveation=ne),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ne)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(A)},this.getCameraTexture=function(ne){return m[ne]};let He=null;function Ye(ne,ie){if(h=ie.getViewerPose(c||o),g=ie,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(y,d.framebuffer),e.setRenderTarget(y));let Oe=!1;ye.length!==A.cameras.length&&(A.cameras.length=0,Oe=!0);for(let we=0;we<ye.length;we++){let qe=ye[we],Ze=null;if(d!==null)Ze=d.getViewport(qe);else{let j=u.getViewSubImage(f,qe);Ze=j.viewport,we===0&&(e.setRenderTargetTextures(y,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(y))}let De=L[we];De===void 0&&(De=new kt,De.layers.enable(we),De.viewport=new tn,L[we]=De),De.matrix.fromArray(qe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(qe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(A.matrix.copy(De.matrix),A.matrix.decompose(A.position,A.quaternion,A.scale)),Oe===!0&&A.cameras.push(De)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&p){u=n.getBinding();let we=u.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&_.init(we,i.renderState)}if(Ce&&Ce.includes("camera-access")&&p){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<ye.length;we++){let qe=ye[we].camera;if(qe){let Ze=m[qe];Ze||(Ze=new Kl,m[qe]=Ze);let De=u.getCameraImage(qe);Ze.sourceTexture=De}}}}for(let ye=0;ye<M.length;ye++){let Oe=S[ye],Ce=M[ye];Oe!==null&&Ce!==void 0&&Ce.update(Oe,ie,c||o)}He&&He(ne,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let it=new S_;it.setAnimationLoop(Ye),this.setAnimationLoop=function(ne){He=ne},this.dispose=function(){}}},Do=new Xn,fT=new Pt;function pT(r,e){function t(_,m){_.matrixAutoUpdate===!0&&_.updateMatrix(),m.value.copy(_.matrix)}function n(_,m){m.color.getRGB(_.fogColor.value,Pp(r)),m.isFog?(_.fogNear.value=m.near,_.fogFar.value=m.far):m.isFogExp2&&(_.fogDensity.value=m.density)}function i(_,m,x,v,y){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(_,m):m.isMeshToonMaterial?(s(_,m),u(_,m)):m.isMeshPhongMaterial?(s(_,m),h(_,m)):m.isMeshStandardMaterial?(s(_,m),f(_,m),m.isMeshPhysicalMaterial&&d(_,m,y)):m.isMeshMatcapMaterial?(s(_,m),g(_,m)):m.isMeshDepthMaterial?s(_,m):m.isMeshDistanceMaterial?(s(_,m),p(_,m)):m.isMeshNormalMaterial?s(_,m):m.isLineBasicMaterial?(o(_,m),m.isLineDashedMaterial&&a(_,m)):m.isPointsMaterial?l(_,m,x,v):m.isSpriteMaterial?c(_,m):m.isShadowMaterial?(_.color.value.copy(m.color),_.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(_,m){_.opacity.value=m.opacity,m.color&&_.diffuse.value.copy(m.color),m.emissive&&_.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.bumpMap&&(_.bumpMap.value=m.bumpMap,t(m.bumpMap,_.bumpMapTransform),_.bumpScale.value=m.bumpScale,m.side===In&&(_.bumpScale.value*=-1)),m.normalMap&&(_.normalMap.value=m.normalMap,t(m.normalMap,_.normalMapTransform),_.normalScale.value.copy(m.normalScale),m.side===In&&_.normalScale.value.negate()),m.displacementMap&&(_.displacementMap.value=m.displacementMap,t(m.displacementMap,_.displacementMapTransform),_.displacementScale.value=m.displacementScale,_.displacementBias.value=m.displacementBias),m.emissiveMap&&(_.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,_.emissiveMapTransform)),m.specularMap&&(_.specularMap.value=m.specularMap,t(m.specularMap,_.specularMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest);let x=e.get(m),v=x.envMap,y=x.envMapRotation;v&&(_.envMap.value=v,Do.copy(y),Do.x*=-1,Do.y*=-1,Do.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Do.y*=-1,Do.z*=-1),_.envMapRotation.value.setFromMatrix4(fT.makeRotationFromEuler(Do)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=m.reflectivity,_.ior.value=m.ior,_.refractionRatio.value=m.refractionRatio),m.lightMap&&(_.lightMap.value=m.lightMap,_.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,_.lightMapTransform)),m.aoMap&&(_.aoMap.value=m.aoMap,_.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,_.aoMapTransform))}function o(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform))}function a(_,m){_.dashSize.value=m.dashSize,_.totalSize.value=m.dashSize+m.gapSize,_.scale.value=m.scale}function l(_,m,x,v){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.size.value=m.size*x,_.scale.value=v*.5,m.map&&(_.map.value=m.map,t(m.map,_.uvTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function c(_,m){_.diffuse.value.copy(m.color),_.opacity.value=m.opacity,_.rotation.value=m.rotation,m.map&&(_.map.value=m.map,t(m.map,_.mapTransform)),m.alphaMap&&(_.alphaMap.value=m.alphaMap,t(m.alphaMap,_.alphaMapTransform)),m.alphaTest>0&&(_.alphaTest.value=m.alphaTest)}function h(_,m){_.specular.value.copy(m.specular),_.shininess.value=Math.max(m.shininess,1e-4)}function u(_,m){m.gradientMap&&(_.gradientMap.value=m.gradientMap)}function f(_,m){_.metalness.value=m.metalness,m.metalnessMap&&(_.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,_.metalnessMapTransform)),_.roughness.value=m.roughness,m.roughnessMap&&(_.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,_.roughnessMapTransform)),m.envMap&&(_.envMapIntensity.value=m.envMapIntensity)}function d(_,m,x){_.ior.value=m.ior,m.sheen>0&&(_.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),_.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(_.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,_.sheenColorMapTransform)),m.sheenRoughnessMap&&(_.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,_.sheenRoughnessMapTransform))),m.clearcoat>0&&(_.clearcoat.value=m.clearcoat,_.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(_.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,_.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(_.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===In&&_.clearcoatNormalScale.value.negate())),m.dispersion>0&&(_.dispersion.value=m.dispersion),m.iridescence>0&&(_.iridescence.value=m.iridescence,_.iridescenceIOR.value=m.iridescenceIOR,_.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(_.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,_.iridescenceMapTransform)),m.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),m.transmission>0&&(_.transmission.value=m.transmission,_.transmissionSamplerMap.value=x.texture,_.transmissionSamplerSize.value.set(x.width,x.height),m.transmissionMap&&(_.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,_.transmissionMapTransform)),_.thickness.value=m.thickness,m.thicknessMap&&(_.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=m.attenuationDistance,_.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(_.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(_.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=m.specularIntensity,_.specularColor.value.copy(m.specularColor),m.specularColorMap&&(_.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,_.specularColorMapTransform)),m.specularIntensityMap&&(_.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,_.specularIntensityMapTransform))}function g(_,m){m.matcap&&(_.matcap.value=m.matcap)}function p(_,m){let x=e.get(m).light;_.referencePosition.value.setFromMatrixPosition(x.matrixWorld),_.nearDistance.value=x.shadow.camera.near,_.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function mT(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,v){let y=v.program;n.uniformBlockBinding(x,y)}function c(x,v){let y=i[x.id];y===void 0&&(g(x),y=h(x),i[x.id]=y,x.addEventListener("dispose",_));let M=v.program;n.updateUBOMapping(x,M);let S=e.render.frame;s[x.id]!==S&&(f(x),s[x.id]=S)}function h(x){let v=u();x.__bindingPointIndex=v;let y=r.createBuffer(),M=x.__size,S=x.usage;return r.bindBuffer(r.UNIFORM_BUFFER,y),r.bufferData(r.UNIFORM_BUFFER,M,S),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,y),y}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(x){let v=i[x.id],y=x.uniforms,M=x.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let S=0,w=y.length;S<w;S++){let P=Array.isArray(y[S])?y[S]:[y[S]];for(let b=0,E=P.length;b<E;b++){let L=P[b];if(d(L,S,b,M)===!0){let A=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],B=0;for(let G=0;G<D.length;G++){let z=D[G],k=p(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,A+B,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,B),B+=k.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,A,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(x,v,y,M){let S=x.value,w=v+"_"+y;if(M[w]===void 0)return typeof S=="number"||typeof S=="boolean"?M[w]=S:M[w]=S.clone(),!0;{let P=M[w];if(typeof S=="number"||typeof S=="boolean"){if(P!==S)return M[w]=S,!0}else if(P.equals(S)===!1)return P.copy(S),!0}return!1}function g(x){let v=x.uniforms,y=0,M=16;for(let w=0,P=v.length;w<P;w++){let b=Array.isArray(v[w])?v[w]:[v[w]];for(let E=0,L=b.length;E<L;E++){let A=b[E],D=Array.isArray(A.value)?A.value:[A.value];for(let B=0,G=D.length;B<G;B++){let z=D[B],k=p(z),K=y%M,re=K%k.boundary,N=K+re;y+=re,N!==0&&M-N<k.storage&&(y+=M-N),A.__data=new Float32Array(k.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=y,y+=k.storage}}}let S=y%M;return S>0&&(y+=M-S),x.__size=y,x.__cache={},this}function p(x){let v={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",x),v}function _(x){let v=x.target;v.removeEventListener("dispose",_);let y=o.indexOf(v.__bindingPointIndex);o.splice(y,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function m(){for(let x in i)r.deleteBuffer(i[x]);o=[],i={},s={}}return{bind:l,update:c,dispose:m}}var gT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wr=null;function _T(){return Wr===null&&(Wr=new $l(gT,16,16,Co,wn),Wr.name="DFG_LUT",Wr.minFilter=Zn,Wr.magFilter=Zn,Wr.wrapS=kr,Wr.wrapT=kr,Wr.generateMipmaps=!1,Wr.needsUpdate=!0),Wr}var li=class{constructor(e={}){let{canvas:t=Yg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Di}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=o;let p=d,_=new Set([Vh,zh,Hh]),m=new Set([Di,Lr,Ha,za,Oh,Bh]),x=new Uint32Array(4),v=new Int32Array(4),y=null,M=null,S=[],w=[],P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,E=!1;this._outputColorSpace=Kt;let L=0,A=0,D=null,B=-1,G=null,z=new tn,k=new tn,K=null,re=new Me(0),N=0,oe=t.width,ke=t.height,He=1,Ye=null,it=null,ne=new tn(0,0,oe,ke),ie=new tn(0,0,oe,ke),ye=!1,Oe=new Fa,Ce=!1,je=!1,ft=new Pt,we=new C,qe=new tn,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function j(){return D===null?He:1}let H=n;function _t(R,Y){return t.getContext(R,Y)}try{let R={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){let Y="webgl2";if(H=_t(Y,R),H===null)throw _t(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw gt("WebGLRenderer: "+R.message),R}let ct,Je,Fe,F,T,I,U,W,X,ge,se,Pe,Ae,ue,de,Le,Ne,_e,Ee,O,xe,pe,Ie,fe;function le(){ct=new SE(H),ct.init(),pe=new uT(H,ct),Je=new mE(H,ct,e,pe),Fe=new lT(H,ct),Je.reversedDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),F=new AE(H),T=new YS,I=new cT(H,ct,Fe,T,Je,pe,F),U=new _E(b),W=new EE(b),X=new I1(H),Ie=new fE(H,X),ge=new TE(H,X,F,Ie),se=new CE(H,ge,X,F),Ee=new RE(H,Je,I),Le=new gE(T),Pe=new qS(b,U,W,ct,Je,Ie,Le),Ae=new pT(b,T),ue=new ZS,de=new tT(ct),_e=new dE(b,U,W,Fe,se,g,l),Ne=new oT(b,se,Je),fe=new mT(H,F,Je,Fe),O=new pE(H,ct,F),xe=new wE(H,ct,F),F.programs=Pe.programs,b.capabilities=Je,b.extensions=ct,b.properties=T,b.renderLists=ue,b.shadowMap=Ne,b.state=Fe,b.info=F}le(),p!==Di&&(P=new IE(p,t.width,t.height,i,s));let $=new Zp(b,H);this.xr=$,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let R=ct.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){let R=ct.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(R){R!==void 0&&(He=R,this.setSize(oe,ke,!1))},this.getSize=function(R){return R.set(oe,ke)},this.setSize=function(R,Y,ee=!0){if($.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}oe=R,ke=Y,t.width=Math.floor(R*He),t.height=Math.floor(Y*He),ee===!0&&(t.style.width=R+"px",t.style.height=Y+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(oe*He,ke*He).floor()},this.setDrawingBufferSize=function(R,Y,ee){oe=R,ke=Y,He=ee,t.width=Math.floor(R*ee),t.height=Math.floor(Y*ee),this.setViewport(0,0,R,Y)},this.setEffects=function(R){if(p===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let Y=0;Y<R.length;Y++)if(R[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(z)},this.getViewport=function(R){return R.copy(ne)},this.setViewport=function(R,Y,ee,te){R.isVector4?ne.set(R.x,R.y,R.z,R.w):ne.set(R,Y,ee,te),Fe.viewport(z.copy(ne).multiplyScalar(He).round())},this.getScissor=function(R){return R.copy(ie)},this.setScissor=function(R,Y,ee,te){R.isVector4?ie.set(R.x,R.y,R.z,R.w):ie.set(R,Y,ee,te),Fe.scissor(k.copy(ie).multiplyScalar(He).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(R){Fe.setScissorTest(ye=R)},this.setOpaqueSort=function(R){Ye=R},this.setTransparentSort=function(R){it=R},this.getClearColor=function(R){return R.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(R=!0,Y=!0,ee=!0){let te=0;if(R){let Q=!1;if(D!==null){let Re=D.texture.format;Q=_.has(Re)}if(Q){let Re=D.texture.type,ze=m.has(Re),Z=_e.getClearColor(),q=_e.getClearAlpha(),me=Z.r,Be=Z.g,Ke=Z.b;ze?(x[0]=me,x[1]=Be,x[2]=Ke,x[3]=q,H.clearBufferuiv(H.COLOR,0,x)):(v[0]=me,v[1]=Be,v[2]=Ke,v[3]=q,H.clearBufferiv(H.COLOR,0,v))}else te|=H.COLOR_BUFFER_BIT}Y&&(te|=H.DEPTH_BUFFER_BIT),ee&&(te|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),ue.dispose(),de.dispose(),T.dispose(),U.dispose(),W.dispose(),se.dispose(),Ie.dispose(),fe.dispose(),Pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",zt),$.removeEventListener("sessionend",pt),ae.stop()};function J(R){R.preventDefault(),kl("WebGLRenderer: Context Lost."),E=!0}function V(){kl("WebGLRenderer: Context Restored."),E=!1;let R=F.autoReset,Y=Ne.enabled,ee=Ne.autoUpdate,te=Ne.needsUpdate,Q=Ne.type;le(),F.autoReset=R,Ne.enabled=Y,Ne.autoUpdate=ee,Ne.needsUpdate=te,Ne.type=Q}function he(R){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Se(R){let Y=R.target;Y.removeEventListener("dispose",Se),st(Y)}function st(R){Te(R),T.remove(R)}function Te(R){let Y=T.get(R).programs;Y!==void 0&&(Y.forEach(function(ee){Pe.releaseProgram(ee)}),R.isShaderMaterial&&Pe.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,ee,te,Q,Re){Y===null&&(Y=Ze);let ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Z=Gt(R,Y,ee,te,Q);Fe.setMaterial(te,ze);let q=ee.index,me=1;if(te.wireframe===!0){if(q=ge.getWireframeAttribute(ee),q===void 0)return;me=2}let Be=ee.drawRange,Ke=ee.attributes.position,mt=Be.start*me,Lt=(Be.start+Be.count)*me;Re!==null&&(mt=Math.max(mt,Re.start*me),Lt=Math.min(Lt,(Re.start+Re.count)*me)),q!==null?(mt=Math.max(mt,0),Lt=Math.min(Lt,q.count)):Ke!=null&&(mt=Math.max(mt,0),Lt=Math.min(Lt,Ke.count));let on=Lt-mt;if(on<0||on===1/0)return;Ie.setup(Q,te,Z,ee,q);let $t,Ot=O;if(q!==null&&($t=X.get(q),Ot=xe,Ot.setIndex($t)),Q.isMesh)te.wireframe===!0?(Fe.setLineWidth(te.wireframeLinewidth*j()),Ot.setMode(H.LINES)):Ot.setMode(H.TRIANGLES);else if(Q.isLine){let ot=te.linewidth;ot===void 0&&(ot=1),Fe.setLineWidth(ot*j()),Q.isLineSegments?Ot.setMode(H.LINES):Q.isLineLoop?Ot.setMode(H.LINE_LOOP):Ot.setMode(H.LINE_STRIP)}else Q.isPoints?Ot.setMode(H.POINTS):Q.isSprite&&Ot.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Ot.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))Ot.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let ot=Q._multiDrawStarts,Bt=Q._multiDrawCounts,be=Q._multiDrawCount,at=q?X.get(q).bytesPerElement:1,an=T.get(te).currentProgram.getUniforms();for(let Dt=0;Dt<be;Dt++)an.setValue(H,"_gl_DrawID",Dt),Ot.render(ot[Dt]/at,Bt[Dt])}else if(Q.isInstancedMesh)Ot.renderInstances(mt,on,Q.count);else if(ee.isInstancedBufferGeometry){let ot=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Bt=Math.min(ee.instanceCount,ot);Ot.renderInstances(mt,on,Bt)}else Ot.render(mt,on)};function tt(R,Y,ee){R.transparent===!0&&R.side===nn&&R.forceSinglePass===!1?(R.side=In,R.needsUpdate=!0,Ct(R,Y,ee),R.side=cs,R.needsUpdate=!0,Ct(R,Y,ee),R.side=nn):Ct(R,Y,ee)}this.compile=function(R,Y,ee=null){ee===null&&(ee=R),M=de.get(ee),M.init(Y),w.push(M),ee.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),R!==ee&&R.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights();let te=new Set;return R.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Re=Q.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){let Z=Re[ze];tt(Z,ee,Q),te.add(Z)}else tt(Re,ee,Q),te.add(Re)}),M=w.pop(),te},this.compileAsync=function(R,Y,ee=null){let te=this.compile(R,Y,ee);return new Promise(Q=>{function Re(){if(te.forEach(function(ze){T.get(ze).currentProgram.isReady()&&te.delete(ze)}),te.size===0){Q(R);return}setTimeout(Re,10)}ct.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let We=null;function rt(R){We&&We(R)}function zt(){ae.stop()}function pt(){ae.start()}let ae=new S_;ae.setAnimationLoop(rt),typeof self<"u"&&ae.setContext(self),this.setAnimationLoop=function(R){We=R,$.setAnimationLoop(R),R===null?ae.stop():ae.start()},$.addEventListener("sessionstart",zt),$.addEventListener("sessionend",pt),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let ee=$.enabled===!0&&$.isPresenting===!0,te=P!==null&&(D===null||ee)&&P.begin(b,D);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(Y),Y=$.getCamera()),R.isScene===!0&&R.onBeforeRender(b,R,Y,D),M=de.get(R,w.length),M.init(Y),w.push(M),ft.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Oe.setFromProjectionMatrix(ft,Tr,Y.reversedDepth),je=this.localClippingEnabled,Ce=Le.init(this.clippingPlanes,je),y=ue.get(R,S.length),y.init(),S.push(y),$.enabled===!0&&$.isPresenting===!0){let ze=b.xr.getDepthSensingMesh();ze!==null&&Ge(ze,Y,-1/0,b.sortObjects)}Ge(R,Y,0,b.sortObjects),y.finish(),b.sortObjects===!0&&y.sort(Ye,it),De=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,De&&_e.addToRenderList(y,R),this.info.render.frame++,Ce===!0&&Le.beginShadows();let Q=M.state.shadowsArray;if(Ne.render(Q,R,Y),Ce===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(te&&P.hasRenderPass())===!1){let ze=y.opaque,Z=y.transmissive;if(M.setupLights(),Y.isArrayCamera){let q=Y.cameras;if(Z.length>0)for(let me=0,Be=q.length;me<Be;me++){let Ke=q[me];nt(ze,Z,R,Ke)}De&&_e.render(R);for(let me=0,Be=q.length;me<Be;me++){let Ke=q[me];Xe(y,R,Ke,Ke.viewport)}}else Z.length>0&&nt(ze,Z,R,Y),De&&_e.render(R),Xe(y,R,Y)}D!==null&&A===0&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),te&&P.end(b),R.isScene===!0&&R.onAfterRender(b,R,Y),Ie.resetDefaultState(),B=-1,G=null,w.pop(),w.length>0?(M=w[w.length-1],Ce===!0&&Le.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,S.pop(),S.length>0?y=S[S.length-1]:y=null};function Ge(R,Y,ee,te){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)ee=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)M.pushLight(R),R.castShadow&&M.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Oe.intersectsSprite(R)){te&&qe.setFromMatrixPosition(R.matrixWorld).applyMatrix4(ft);let ze=se.update(R),Z=R.material;Z.visible&&y.push(R,ze,Z,ee,qe.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Oe.intersectsObject(R))){let ze=se.update(R),Z=R.material;if(te&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),qe.copy(R.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),qe.copy(ze.boundingSphere.center)),qe.applyMatrix4(R.matrixWorld).applyMatrix4(ft)),Array.isArray(Z)){let q=ze.groups;for(let me=0,Be=q.length;me<Be;me++){let Ke=q[me],mt=Z[Ke.materialIndex];mt&&mt.visible&&y.push(R,ze,mt,ee,qe.z,Ke)}}else Z.visible&&y.push(R,ze,Z,ee,qe.z,null)}}let Re=R.children;for(let ze=0,Z=Re.length;ze<Z;ze++)Ge(Re[ze],Y,ee,te)}function Xe(R,Y,ee,te){let{opaque:Q,transmissive:Re,transparent:ze}=R;M.setupLightsView(ee),Ce===!0&&Le.setGlobalState(b.clippingPlanes,ee),te&&Fe.viewport(z.copy(te)),Q.length>0&&ut(Q,Y,ee),Re.length>0&&ut(Re,Y,ee),ze.length>0&&ut(ze,Y,ee),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function nt(R,Y,ee,te){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[te.id]===void 0){let mt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[te.id]=new gn(1,1,{generateMipmaps:!0,type:mt?wn:Di,minFilter:Vs,samples:Je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:It.workingColorSpace})}let Re=M.state.transmissionRenderTarget[te.id],ze=te.viewport||z;Re.setSize(ze.z*b.transmissionResolutionScale,ze.w*b.transmissionResolutionScale);let Z=b.getRenderTarget(),q=b.getActiveCubeFace(),me=b.getActiveMipmapLevel();b.setRenderTarget(Re),b.getClearColor(re),N=b.getClearAlpha(),N<1&&b.setClearColor(16777215,.5),b.clear(),De&&_e.render(ee);let Be=b.toneMapping;b.toneMapping=Ir;let Ke=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),Ce===!0&&Le.setGlobalState(b.clippingPlanes,te),ut(R,ee,te),I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re),ct.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Lt=0,on=Y.length;Lt<on;Lt++){let $t=Y[Lt],{object:Ot,geometry:ot,material:Bt,group:be}=$t;if(Bt.side===nn&&Ot.layers.test(te.layers)){let at=Bt.side;Bt.side=In,Bt.needsUpdate=!0,pn(Ot,ee,te,ot,Bt,be),Bt.side=at,Bt.needsUpdate=!0,mt=!0}}mt===!0&&(I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re))}b.setRenderTarget(Z,q,me),b.setClearColor(re,N),Ke!==void 0&&(te.viewport=Ke),b.toneMapping=Be}function ut(R,Y,ee){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Re=R.length;Q<Re;Q++){let ze=R[Q],{object:Z,geometry:q,group:me}=ze,Be=ze.material;Be.allowOverride===!0&&te!==null&&(Be=te),Z.layers.test(ee.layers)&&pn(Z,Y,ee,q,Be,me)}}function pn(R,Y,ee,te,Q,Re){R.onBeforeRender(b,Y,ee,te,Q,Re),R.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),Q.onBeforeRender(b,Y,ee,te,R,Re),Q.transparent===!0&&Q.side===nn&&Q.forceSinglePass===!1?(Q.side=In,Q.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,Q,R,Re),Q.side=cs,Q.needsUpdate=!0,b.renderBufferDirect(ee,Y,te,Q,R,Re),Q.side=nn):b.renderBufferDirect(ee,Y,te,Q,R,Re),R.onAfterRender(b,Y,ee,te,Q,Re)}function Ct(R,Y,ee){Y.isScene!==!0&&(Y=Ze);let te=T.get(R),Q=M.state.lights,Re=M.state.shadowsArray,ze=Q.state.version,Z=Pe.getParameters(R,Q.state,Re,Y,ee),q=Pe.getProgramCacheKey(Z),me=te.programs;te.environment=R.isMeshStandardMaterial?Y.environment:null,te.fog=Y.fog,te.envMap=(R.isMeshStandardMaterial?W:U).get(R.envMap||te.environment),te.envMapRotation=te.environment!==null&&R.envMap===null?Y.environmentRotation:R.envMapRotation,me===void 0&&(R.addEventListener("dispose",Se),me=new Map,te.programs=me);let Be=me.get(q);if(Be!==void 0){if(te.currentProgram===Be&&te.lightsStateVersion===ze)return _i(R,Z),Be}else Z.uniforms=Pe.getUniforms(R),R.onBeforeCompile(Z,b),Be=Pe.acquireProgram(Z,q),me.set(q,Be),te.uniforms=Z.uniforms;let Ke=te.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ke.clippingPlanes=Le.uniform),_i(R,Z),te.needsLights=Pn(R),te.lightsStateVersion=ze,te.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.currentProgram=Be,te.uniformsList=null,Be}function Gn(R){if(R.uniformsList===null){let Y=R.currentProgram.getUniforms();R.uniformsList=Ga.seqWithValue(Y.seq,R.uniforms)}return R.uniformsList}function _i(R,Y){let ee=T.get(R);ee.outputColorSpace=Y.outputColorSpace,ee.batching=Y.batching,ee.batchingColor=Y.batchingColor,ee.instancing=Y.instancing,ee.instancingColor=Y.instancingColor,ee.instancingMorph=Y.instancingMorph,ee.skinning=Y.skinning,ee.morphTargets=Y.morphTargets,ee.morphNormals=Y.morphNormals,ee.morphColors=Y.morphColors,ee.morphTargetsCount=Y.morphTargetsCount,ee.numClippingPlanes=Y.numClippingPlanes,ee.numIntersection=Y.numClipIntersection,ee.vertexAlphas=Y.vertexAlphas,ee.vertexTangents=Y.vertexTangents,ee.toneMapping=Y.toneMapping}function Gt(R,Y,ee,te,Q){Y.isScene!==!0&&(Y=Ze),I.resetTextureUnits();let Re=Y.fog,ze=te.isMeshStandardMaterial?Y.environment:null,Z=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:wr,q=(te.isMeshStandardMaterial?W:U).get(te.envMap||ze),me=te.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,Be=!!ee.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),Ke=!!ee.morphAttributes.position,mt=!!ee.morphAttributes.normal,Lt=!!ee.morphAttributes.color,on=Ir;te.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(on=b.toneMapping);let $t=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,Ot=$t!==void 0?$t.length:0,ot=T.get(te),Bt=M.state.lights;if(Ce===!0&&(je===!0||R!==G)){let vi=R===G&&te.id===B;Le.setState(te,R,vi)}let be=!1;te.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Bt.state.version||ot.outputColorSpace!==Z||Q.isBatchedMesh&&ot.batching===!1||!Q.isBatchedMesh&&ot.batching===!0||Q.isBatchedMesh&&ot.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ot.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ot.instancing===!1||!Q.isInstancedMesh&&ot.instancing===!0||Q.isSkinnedMesh&&ot.skinning===!1||!Q.isSkinnedMesh&&ot.skinning===!0||Q.isInstancedMesh&&ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ot.instancingMorph===!1&&Q.morphTexture!==null||ot.envMap!==q||te.fog===!0&&ot.fog!==Re||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Le.numPlanes||ot.numIntersection!==Le.numIntersection)||ot.vertexAlphas!==me||ot.vertexTangents!==Be||ot.morphTargets!==Ke||ot.morphNormals!==mt||ot.morphColors!==Lt||ot.toneMapping!==on||ot.morphTargetsCount!==Ot)&&(be=!0):(be=!0,ot.__version=te.version);let at=ot.currentProgram;be===!0&&(at=Ct(te,Y,Q));let an=!1,Dt=!1,As=!1,ln=at.getUniforms(),Ci=ot.uniforms;if(Fe.useProgram(at.program)&&(an=!0,Dt=!0,As=!0),te.id!==B&&(B=te.id,Dt=!0),an||G!==R){Fe.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),ln.setValue(H,"projectionMatrix",R.projectionMatrix),ln.setValue(H,"viewMatrix",R.matrixWorldInverse);let Pi=ln.map.cameraPosition;Pi!==void 0&&Pi.setValue(H,we.setFromMatrixPosition(R.matrixWorld)),Je.logarithmicDepthBuffer&&ln.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&ln.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),G!==R&&(G=R,Dt=!0,As=!0)}if(ot.needsLights&&(Bt.state.directionalShadowMap.length>0&&ln.setValue(H,"directionalShadowMap",Bt.state.directionalShadowMap,I),Bt.state.spotShadowMap.length>0&&ln.setValue(H,"spotShadowMap",Bt.state.spotShadowMap,I),Bt.state.pointShadowMap.length>0&&ln.setValue(H,"pointShadowMap",Bt.state.pointShadowMap,I)),Q.isSkinnedMesh){ln.setOptional(H,Q,"bindMatrix"),ln.setOptional(H,Q,"bindMatrixInverse");let vi=Q.skeleton;vi&&(vi.boneTexture===null&&vi.computeBoneTexture(),ln.setValue(H,"boneTexture",vi.boneTexture,I))}Q.isBatchedMesh&&(ln.setOptional(H,Q,"batchingTexture"),ln.setValue(H,"batchingTexture",Q._matricesTexture,I),ln.setOptional(H,Q,"batchingIdTexture"),ln.setValue(H,"batchingIdTexture",Q._indirectTexture,I),ln.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ln.setValue(H,"batchingColorTexture",Q._colorsTexture,I));let sr=ee.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ee.update(Q,ee,at),(Dt||ot.receiveShadow!==Q.receiveShadow)&&(ot.receiveShadow=Q.receiveShadow,ln.setValue(H,"receiveShadow",Q.receiveShadow)),te.isMeshGouraudMaterial&&te.envMap!==null&&(Ci.envMap.value=q,Ci.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),te.isMeshStandardMaterial&&te.envMap===null&&Y.environment!==null&&(Ci.envMapIntensity.value=Y.environmentIntensity),Ci.dfgLUT!==void 0&&(Ci.dfgLUT.value=_T()),Dt&&(ln.setValue(H,"toneMappingExposure",b.toneMappingExposure),ot.needsLights&&Tn(Ci,As),Re&&te.fog===!0&&Ae.refreshFogUniforms(Ci,Re),Ae.refreshMaterialUniforms(Ci,te,He,ke,M.state.transmissionRenderTarget[R.id]),Ga.upload(H,Gn(ot),Ci,I)),te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(Ga.upload(H,Gn(ot),Ci,I),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&ln.setValue(H,"center",Q.center),ln.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ln.setValue(H,"normalMatrix",Q.normalMatrix),ln.setValue(H,"modelMatrix",Q.matrixWorld),te.isShaderMaterial||te.isRawShaderMaterial){let vi=te.uniformsGroups;for(let Pi=0,If=vi.length;Pi<If;Pi++){let fo=vi[Pi];fe.update(fo,at),fe.bind(fo,at)}}return at}function Tn(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function Pn(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(R,Y,ee){let te=T.get(R);te.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),T.get(R.texture).__webglTexture=Y,T.get(R.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:ee,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,Y){let ee=T.get(R);ee.__webglFramebuffer=Y,ee.__useDefaultFramebuffer=Y===void 0};let rr=H.createFramebuffer();this.setRenderTarget=function(R,Y=0,ee=0){D=R,L=Y,A=ee;let te=null,Q=!1,Re=!1;if(R){let Z=T.get(R);if(Z.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(H.FRAMEBUFFER,Z.__webglFramebuffer),z.copy(R.viewport),k.copy(R.scissor),K=R.scissorTest,Fe.viewport(z),Fe.scissor(k),Fe.setScissorTest(K),B=-1;return}else if(Z.__webglFramebuffer===void 0)I.setupRenderTarget(R);else if(Z.__hasExternalTextures)I.rebindTextures(R,T.get(R.texture).__webglTexture,T.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){let Be=R.depthTexture;if(Z.__boundDepthTexture!==Be){if(Be!==null&&T.has(Be)&&(R.width!==Be.image.width||R.height!==Be.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(R)}}let q=R.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(Re=!0);let me=T.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(me[Y])?te=me[Y][ee]:te=me[Y],Q=!0):R.samples>0&&I.useMultisampledRTT(R)===!1?te=T.get(R).__webglMultisampledFramebuffer:Array.isArray(me)?te=me[ee]:te=me,z.copy(R.viewport),k.copy(R.scissor),K=R.scissorTest}else z.copy(ne).multiplyScalar(He).floor(),k.copy(ie).multiplyScalar(He).floor(),K=ye;if(ee!==0&&(te=rr),Fe.bindFramebuffer(H.FRAMEBUFFER,te)&&Fe.drawBuffers(R,te),Fe.viewport(z),Fe.scissor(k),Fe.setScissorTest(K),Q){let Z=T.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z.__webglTexture,ee)}else if(Re){let Z=Y;for(let q=0;q<R.textures.length;q++){let me=T.get(R.textures[q]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+q,me.__webglTexture,ee,Z)}}else if(R!==null&&ee!==0){let Z=T.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Z.__webglTexture,ee)}B=-1},this.readRenderTargetPixels=function(R,Y,ee,te,Q,Re,ze,Z=0){if(!(R&&R.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(q=q[ze]),q){Fe.bindFramebuffer(H.FRAMEBUFFER,q);try{let me=R.textures[Z],Be=me.format,Ke=me.type;if(!Je.textureFormatReadable(Be)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ke)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-te&&ee>=0&&ee<=R.height-Q&&(R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Z),H.readPixels(Y,ee,te,Q,pe.convert(Be),pe.convert(Ke),Re))}finally{let me=D!==null?T.get(D).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(R,Y,ee,te,Q,Re,ze,Z=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=T.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&ze!==void 0&&(q=q[ze]),q)if(Y>=0&&Y<=R.width-te&&ee>=0&&ee<=R.height-Q){Fe.bindFramebuffer(H.FRAMEBUFFER,q);let me=R.textures[Z],Be=me.format,Ke=me.type;if(!Je.textureFormatReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),R.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Z),H.readPixels(Y,ee,te,Q,pe.convert(Be),pe.convert(Ke),0);let Lt=D!==null?T.get(D).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Lt);let on=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await $g(H,on,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(mt),H.deleteSync(on),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,Y=null,ee=0){let te=Math.pow(2,-ee),Q=Math.floor(R.image.width*te),Re=Math.floor(R.image.height*te),ze=Y!==null?Y.x:0,Z=Y!==null?Y.y:0;I.setTexture2D(R,0),H.copyTexSubImage2D(H.TEXTURE_2D,ee,0,0,ze,Z,Q,Re),Fe.unbindTexture()};let Or=H.createFramebuffer(),St=H.createFramebuffer();this.copyTextureToTexture=function(R,Y,ee=null,te=null,Q=0,Re=null){Re===null&&(Q!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Q,Q=0):Re=0);let ze,Z,q,me,Be,Ke,mt,Lt,on,$t=R.isCompressedTexture?R.mipmaps[Re]:R.image;if(ee!==null)ze=ee.max.x-ee.min.x,Z=ee.max.y-ee.min.y,q=ee.isBox3?ee.max.z-ee.min.z:1,me=ee.min.x,Be=ee.min.y,Ke=ee.isBox3?ee.min.z:0;else{let sr=Math.pow(2,-Q);ze=Math.floor($t.width*sr),Z=Math.floor($t.height*sr),R.isDataArrayTexture?q=$t.depth:R.isData3DTexture?q=Math.floor($t.depth*sr):q=1,me=0,Be=0,Ke=0}te!==null?(mt=te.x,Lt=te.y,on=te.z):(mt=0,Lt=0,on=0);let Ot=pe.convert(Y.format),ot=pe.convert(Y.type),Bt;Y.isData3DTexture?(I.setTexture3D(Y,0),Bt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Bt=H.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Bt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);let be=H.getParameter(H.UNPACK_ROW_LENGTH),at=H.getParameter(H.UNPACK_IMAGE_HEIGHT),an=H.getParameter(H.UNPACK_SKIP_PIXELS),Dt=H.getParameter(H.UNPACK_SKIP_ROWS),As=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,me),H.pixelStorei(H.UNPACK_SKIP_ROWS,Be),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ke);let ln=R.isDataArrayTexture||R.isData3DTexture,Ci=Y.isDataArrayTexture||Y.isData3DTexture;if(R.isDepthTexture){let sr=T.get(R),vi=T.get(Y),Pi=T.get(sr.__renderTarget),If=T.get(vi.__renderTarget);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Pi.__webglFramebuffer),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,If.__webglFramebuffer);for(let fo=0;fo<q;fo++)ln&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,T.get(R).__webglTexture,Q,Ke+fo),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,T.get(Y).__webglTexture,Re,on+fo)),H.blitFramebuffer(me,Be,ze,Z,mt,Lt,ze,Z,H.DEPTH_BUFFER_BIT,H.NEAREST);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||R.isRenderTargetTexture||T.has(R)){let sr=T.get(R),vi=T.get(Y);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Or),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,St);for(let Pi=0;Pi<q;Pi++)ln?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sr.__webglTexture,Q,Ke+Pi):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sr.__webglTexture,Q),Ci?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vi.__webglTexture,Re,on+Pi):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vi.__webglTexture,Re),Q!==0?H.blitFramebuffer(me,Be,ze,Z,mt,Lt,ze,Z,H.COLOR_BUFFER_BIT,H.NEAREST):Ci?H.copyTexSubImage3D(Bt,Re,mt,Lt,on+Pi,me,Be,ze,Z):H.copyTexSubImage2D(Bt,Re,mt,Lt,me,Be,ze,Z);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ci?R.isDataTexture||R.isData3DTexture?H.texSubImage3D(Bt,Re,mt,Lt,on,ze,Z,q,Ot,ot,$t.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Re,mt,Lt,on,ze,Z,q,Ot,$t.data):H.texSubImage3D(Bt,Re,mt,Lt,on,ze,Z,q,Ot,ot,$t):R.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,mt,Lt,ze,Z,Ot,ot,$t.data):R.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,mt,Lt,$t.width,$t.height,Ot,$t.data):H.texSubImage2D(H.TEXTURE_2D,Re,mt,Lt,ze,Z,Ot,ot,$t);H.pixelStorei(H.UNPACK_ROW_LENGTH,be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),H.pixelStorei(H.UNPACK_SKIP_PIXELS,an),H.pixelStorei(H.UNPACK_SKIP_ROWS,Dt),H.pixelStorei(H.UNPACK_SKIP_IMAGES,As),Re===0&&Y.generateMipmaps&&H.generateMipmap(Bt),Fe.unbindTexture()},this.initRenderTarget=function(R){T.get(R).__webglFramebuffer===void 0&&I.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?I.setTextureCube(R,0):R.isData3DTexture?I.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?I.setTexture2DArray(R,0):I.setTexture2D(R,0),Fe.unbindTexture()},this.resetState=function(){L=0,A=0,D=null,Fe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Tr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}};function ms(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function O_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},fm,jn,vn,mr=1e8,sn=1/mr,im=Math.PI*2,vT=im/4,xT=0,B_=Math.sqrt,yT=Math.cos,bT=Math.sin,zn=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},_s=function(e){return typeof e=="number"},Od=function(e){return typeof e>"u"},Zr=function(e){return typeof e=="object"},Ui=function(e){return e!==!1},pm=function(){return typeof window<"u"},Rd=function(e){return An(e)||zn(e)},k_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ci=Array.isArray,MT=/random\([^)]+\)/g,ET=/,\s*/g,C_=/(?:-?\.?\d|\.)+/gi,mm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Bo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Jp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,gm=/[+-]=-?[.\d]+/,ST=/[^,'"\[\]\s]+/gi,TT=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,En,Yr,rm,_m,Yi={},Ld={},H_,z_=function(e){return(Ld=Ya(e,Yi))&&ui},Bd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fc=function(e,t){return!t&&console.warn(e)},V_=function(e,t){return e&&(Yi[e]=t)&&Ld&&(Ld[e]=t)||Yi},Nc=function(){return 0},wT={suppressEvents:!0,isStart:!0,kill:!1},Cd={suppressEvents:!0,kill:!1},AT={suppressEvents:!0},vm={},qs=[],sm={},G_,Fi={},Kp={},P_=30,Pd=[],xm="",ym=function(e){var t=e[0],n,i;if(Zr(t)||An(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pd.length;i--&&!Pd[i].targetTest(t););n=Pd[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sm(e[i],n)))||e.splice(i,1);return e},Ys=function(e){return e._gsap||ym(gr(e))[0]._gsap},bm=function(e,t,n){return(n=e[t])&&An(n)?e[t]():Od(n)&&e.getAttribute&&e.getAttribute(t)||n},bi=function(e,t){return(e=e.split(",")).forEach(t)||e},Rn=function(e){return Math.round(e*1e5)/1e5||0},Mn=function(e){return Math.round(e*1e7)/1e7||0},ko=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},RT=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Dd=function(){var e=qs.length,t=qs.slice(0),n,i;for(sm={},qs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Mm=function(e){return!!(e._initted||e._startAt||e.add)},W_=function(e,t,n,i){qs.length&&!jn&&Dd(),e.render(t,n,i||!!(jn&&t<0&&Mm(e))),qs.length&&!jn&&Dd()},X_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(ST).length<2?t:zn(e)?e.trim():e},q_=function(e){return e},$i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},CT=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ya=function(e,t){for(var n in t)e[n]=t[n];return e},I_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fd=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ic=function(e){var t=e.parent||En,n=e.keyframes?CT(ci(e.keyframes)):$i;if(Ui(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},PT=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Y_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},kd=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},No=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},IT=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},om=function(e,t,n,i){return e._startAt&&(jn?e._startAt.revert(Cd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},LT=function r(e){return!e||e._ts&&r(e.parent)},L_=function(e){return e._repeat?$a(e._tTime,e=e.duration()+e._rDelay)*e:0},$a=function(e,t){var n=Math.floor(e=Mn(e/t));return e&&n===e?n-1:n},Nd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hd=function(e){return e._end=Mn(e._start+(e._tDur/Math.abs(e._ts||e._rts||sn)||0))},zd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hd(e),n._dirty||No(n,e)),e},$_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nd(e.rawTime(),t),(!t._dur||Bc(0,t.totalDuration(),n)-t._tTime>sn)&&t.render(n,!0)),No(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-sn}},$r=function(e,t,n,i){return t.parent&&$s(t),t._start=Mn((_s(n)?n:n||e!==En?pr(e,n,t):e._time)+t._delay),t._end=Mn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Y_(e,t,"_first","_last",e._sort?"_start":0),am(t)||(e._recent=t),i||$_(e,t),e._ts<0&&zd(e,e._tTime),e},Z_=function(e,t){return(Yi.ScrollTrigger||Bd("scrollTrigger",t))&&Yi.ScrollTrigger.create(t,e)},J_=function(e,t,n,i,s){if(Am(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!jn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&G_!==Ni.frame)return qs.push(e),e._lazy=[s,i],1},DT=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},am=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},FT=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&DT(e)&&!(!e._initted&&am(e))||(e._ts<0||e._dp._ts<0)&&!am(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=Bc(0,e._tDur,t),h=$a(l,a),e._yoyo&&h&1&&(o=1-o),h!==$a(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||jn||i||e._zTime===sn||!t&&e._zTime){if(!e._initted&&J_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?sn:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&om(e,t,n,!0),e._onUpdate&&!n&&qi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$s(e,1),!n&&!jn&&(qi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},NT=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Za=function(e,t,n,i){var s=e._repeat,o=Mn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&zd(e,e._tTime=e._tDur*a),e.parent&&Hd(e),n||No(e.parent,e),e},D_=function(e){return e instanceof Kn?No(e):Za(e,e._dur)},UT={_start:0,endTime:Nc,totalDuration:Nc},pr=function r(e,t,n){var i=e.labels,s=e._recent||UT,o=e.duration()>=mr?s.endTime(!1):e._dur,a,l,c;return zn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ci(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lc=function(e,t,n){var i=_s(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ui(l.vars.inherit)&&l.parent;o.immediateRender=Ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ln(t[0],o,t[s+1])},Zs=function(e,t){return e||e===0?t(e):t},Bc=function(e,t,n){return n<e?e:n>t?t:n},Qn=function(e,t){return!zn(e)||!(t=TT.exec(e))?"":t[1]},OT=function(e,t,n){return Zs(n,function(i){return Bc(e,t,i)})},lm=[].slice,K_=function(e,t){return e&&Zr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zr(e[0]))&&!e.nodeType&&e!==Yr},BT=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return zn(i)&&!t||K_(i,1)?(s=n).push.apply(s,gr(i)):n.push(i)})||n},gr=function(e,t,n){return vn&&!t&&vn.selector?vn.selector(e):zn(e)&&!n&&(rm||!Ja())?lm.call((t||_m).querySelectorAll(e),0):ci(e)?BT(e,n):K_(e)?lm.call(e,0):e?[e]:[]},cm=function(e){return e=gr(e)[0]||Fc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gr(t,n.querySelectorAll?n:n===e?Fc("Invalid scope")||_m.createElement("div"):e)}},j_=function(e){return e.sort(function(){return .5-Math.random()})},Q_=function(e){if(An(e))return e;var t=Zr(e)?e:{each:e},n=Uo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return zn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,g){var p=(g||t).length,_=o[p],m,x,v,y,M,S,w,P,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,mr])[1],!b){for(w=-mr;w<(w=g[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(_=o[p]=[],m=l?Math.min(b,p)*h-.5:i%b,x=b===mr?0:l?p*u/b-.5:i/b|0,w=0,P=mr,S=0;S<p;S++)v=S%b-m,y=x-(S/b|0),_[S]=M=c?Math.abs(c==="y"?y:v):B_(v*v+y*y),M>w&&(w=M),M<P&&(P=M);i==="random"&&j_(_),_.max=w-P,_.min=P,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),_.b=p<0?s-p:s,_.u=Qn(t.amount||t.each)||0,n=n&&p<0?lv(n):n}return p=(_[f]-_.min)/_.max||0,Mn(_.b+(n?n(p):p)*_.v)+_.u}},um=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Mn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_s(n)?0:Qn(n))}},ev=function(e,t){var n=ci(e),i,s;return!n&&Zr(e)&&(i=n=e.radius||mr,e.values?(e=gr(e.values),(s=!_s(e[0]))&&(i*=i)):e=um(e.increment)),Zs(t,n?An(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mr,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||_s(o)?h:h+Qn(o)}:um(e))},tv=function(e,t,n,i){return Zs(ci(e)?!t:n===!0?!!(n=0):!i,function(){return ci(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},kT=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},HT=function(e,t){return function(n){return e(parseFloat(n))+(t||Qn(n))}},zT=function(e,t,n){return iv(e,t,0,1,n)},nv=function(e,t,n){return Zs(n,function(i){return e[~~t(i)]})},VT=function r(e,t,n){var i=t-e;return ci(e)?nv(e,r(0,e.length),t):Zs(n,function(s){return(i+(s-e)%i)%i+e})},GT=function r(e,t,n){var i=t-e,s=i*2;return ci(e)?nv(e,r(0,e.length-1),t):Zs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ka=function(e){return e.replace(MT,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(ET);return tv(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},iv=function(e,t,n,i,s){var o=t-e,a=i-n;return Zs(s,function(l){return n+((l-e)/o*a||0)})},WT=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=zn(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ci(e)&&!ci(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(g){g*=u;var p=Math.min(f,~~g);return h[p](g-p)},n=t}else i||(e=Ya(ci(e)?[]:{},e));if(!h){for(l in t)Tm.call(a,e,l,"get",t[l]);s=function(g){return Pm(g,a)||(o?e.p:e)}}}return Zs(n,s)},F_=function(e,t,n){var i=e.labels,s=mr,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qi=function(e,t,n){var i=e.vars,s=i[t],o=vn,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qs.length&&Dd(),a&&(vn=a),h=l?s.apply(c,l):s.call(c),vn=o,h},Cc=function(e){return $s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jn),e.progress()<1&&qi(e,"onInterrupt"),e},Xa,rv=[],sv=function(e){if(e)if(e=!e.name&&e.default||e,pm()||e.headless){var t=e.name,n=An(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Nc,render:Pm,add:Tm,kill:ow,modifier:sw,rawVars:0},o={targetTest:0,get:0,getSetter:Vd,aliases:{},register:0};if(Ja(),e!==i){if(Fi[t])return;$i(i,$i(Fd(e,s),o)),Ya(i.prototype,Ya(s,Fd(e,o))),Fi[i.prop=t]=i,e.targetTest&&(Pd.push(i),vm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}V_(t,i),e.register&&e.register(ui,i,Mi)}else rv.push(e)},rn=255,Pc={aqua:[0,rn,rn],lime:[0,rn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rn],navy:[0,0,128],white:[rn,rn,rn],olive:[128,128,0],yellow:[rn,rn,0],orange:[rn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rn,0,0],pink:[rn,192,203],cyan:[0,rn,rn],transparent:[rn,rn,rn,0]},jp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rn+.5|0},ov=function(e,t,n){var i=e?_s(e)?[e>>16,e>>8&rn,e&rn]:0:Pc.black,s,o,a,l,c,h,u,f,d,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pc[e])i=Pc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rn,i&rn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rn,e&rn]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(C_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=jp(l+1/3,s,o),i[1]=jp(l,s,o),i[2]=jp(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(mm),n&&i.length<4&&(i[3]=1),i}else i=e.match(C_)||Pc.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/rn,o=i[1]/rn,a=i[2]/rn,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},av=function(e){var t=[],n=[],i=-1;return e.split(gs).forEach(function(s){var o=s.match(Bo)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},N_=function(e,t,n){var i="",s=(e+i).match(gs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=ov(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=av(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(gs,"1").split(Bo),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(gs),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},gs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pc)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),XT=/hsl[a]?\(/,Em=function(e){var t=e.join(" "),n;if(gs.lastIndex=0,gs.test(t))return n=XT.test(t),e[1]=N_(e[1],n),e[0]=N_(e[0],n,av(e[1])),!0},Uc,Ni=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,g=function p(_){var m=r()-i,x=_===!0,v,y,M,S;if((m>e||m<0)&&(n+=m-t),i+=m,M=i-n,v=M-o,(v>0||x)&&(S=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,o+=v+(v>=s?4:s-v),y=1),x||(l=c(p)),y)for(d=0;d<a.length;d++)a[d](M,f,S,_)};return u={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){H_&&(!rm&&pm()&&(Yr=rm=window,_m=Yr.document||{},Yi.gsap=ui,(Yr.gsapVersions||(Yr.gsapVersions=[])).push(ui.version),z_(Ld||Yr.GreenSockGlobals||!Yr.gsap&&Yr||{}),rv.forEach(sv)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,o-u.time*1e3+1|0)},Uc=1,g(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Uc=0,c=Nc},lagSmoothing:function(_,m){e=_||1/0,t=Math.min(m||33,e)},fps:function(_){s=1e3/(_||240),o=u.time*1e3+s},add:function(_,m,x){var v=m?function(y,M,S,w){_(y,M,S,w),u.remove(v)}:_;return u.remove(_),a[x?"unshift":"push"](v),Ja(),v},remove:function(_,m){~(m=a.indexOf(_))&&a.splice(m,1)&&d>=m&&d--},_listeners:a},u})(),Ja=function(){return!Uc&&Ni.wake()},Ft={},qT=/^[\d.\-M][\d.\-,\s]/,YT=/["']/g,$T=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(YT,"").trim():+c,i=l.substr(a+1).trim();return t},ZT=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},JT=function(e){var t=(e+"").split("("),n=Ft[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[$T(t[1])]:ZT(e).split(",").map(X_)):Ft._CE&&qT.test(e)?Ft._CE("",e):n},lv=function(e){return function(t){return 1-e(1-t)}},cv=function r(e,t){for(var n=e._first,i;n;)n instanceof Kn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Uo=function(e,t){return e&&(An(e)?e:Ft[e]||JT(e))||t},Ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bi(e,function(a){Ft[a]=Yi[a]=s,Ft[o=a.toLowerCase()]=n;for(var l in s)Ft[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Ft[a+"."+l]=s[l]}),s},uv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Qp=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/im*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*bT((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:uv(a);return s=im/s,l.config=function(c,h){return r(e,c,h)},l},em=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:uv(n);return i.config=function(s){return r(e,s)},i};bi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ho(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Ft.Linear.easeNone=Ft.none=Ft.Linear.easeIn;Ho("Elastic",Qp("in"),Qp("out"),Qp());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ho("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ho("Circ",function(r){return-(B_(1-r*r)-1)});Ho("Sine",function(r){return r===1?1:-yT(r*vT)+1});Ho("Back",em("in"),em("out"),em());Ft.SteppedEase=Ft.steps=Yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-sn;return function(a){return((i*Bc(0,o,a)|0)+s)*n}}};qa.ease=Ft["quad.out"];bi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return xm+=r+","+r+"Params,"});var Sm=function(e,t){this.id=xT++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:bm,this.set=t?t.getSetter:Vd},Oc=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Za(this,+t.duration,1,1),this.data=t.data,vn&&(this._ctx=vn,vn.data.push(this)),Uc||Ni.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Za(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zd(this,n),!s._dp||s.parent||$_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$r(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===sn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),W_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+L_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+L_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$a(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-sn?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-sn?0:this._rts,this.totalTime(Bc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hd(this),IT(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==sn&&(this._tTime-=sn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Mn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$r(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ui(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nd(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=AT);var i=jn;return jn=n,Mm(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,D_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,D_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pr(this,n),Ui(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ui(i)),this._dur||(this._zTime=-sn),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-sn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-sn,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-sn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=An(n)?n:q_,l=function(){var h=i.then;i.then=null,s&&s(),An(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Cc(this)},r})();$i(Oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-sn,_prom:0,_ps:!1,_rts:1});var Kn=(function(r){O_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ui(n.sortChildren),En&&$r(n.parent||En,ms(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Z_(ms(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lc(0,arguments,this),this},t.from=function(i,s,o){return Lc(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lc(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ic(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ln(i,s,pr(this,o),1),this},t.call=function(i,s,o){return $r(this,Ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ln(i,o,pr(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ic(o).immediateRender=Ui(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ic(a).immediateRender=Ui(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Mn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,g,p,_,m,x,v,y,M,S,w;if(this!==En&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,y=this._start,v=this._ts,m=!v,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(S=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=Mn(h%_),h===l?(p=this._repeat,f=c):(M=Mn(h/_),p=~~M,p&&p===M&&(f=c,p--),f>c&&(f=c)),M=$a(this._tTime,_),!a&&this._tTime&&M!==p&&this._tTime-M*_-this._dur<=0&&(M=p),S&&p&1&&(f=c-f,w=1),p!==M&&!this._lock){var P=S&&M&1,b=P===(S&&p&1);if(p<M&&(P=!P),a=P?0:h%c?c:h,this._lock=1,this.render(a||(w?0:Mn(p*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qi(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,M=p),a&&a!==this._time||m!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=P?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!m)return this;cv(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(x=NT(this,Mn(a),Mn(f)),x&&(h-=f-(f=x._start))),this._tTime=h,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(qi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(g=d._next,(d._act||f>=d._start)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=-sn);break}}d=g}else{d=this._last;for(var E=i<0?i:f;d;){if(g=d._prev,(d._act||E<=d._end)&&d._ts&&x!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||jn&&Mm(d)),f!==this._time||!this._ts&&!m){x=0,g&&(h+=this._zTime=E?-sn:sn);break}}d=g}}if(x&&!s&&(this.pause(),x.render(f>=a?0:-sn)._zTime=f>=a?1:-1,this._ts))return this._start=y,Hd(this),this.render(i,s,o);this._onUpdate&&!s&&qi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(y===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$s(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_s(s)||(s=pr(this,s,i)),!(i instanceof Oc)){if(ci(i))return i.forEach(function(a){return o.add(a,s)}),this;if(zn(i))return this.addLabel(i,s);if(An(i))i=Ln.delayedCall(0,i);else return this}return this!==i?$r(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return zn(i)?this.removeLabel(i):An(i)?this.killTweensOf(i):(i.parent===this&&kd(this,i),i===this._recent&&(this._recent=this._last),No(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(Ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pr(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ln.delayedCall(0,s||Nc,o);return a.data="isPause",this._hasPause=1,$r(this,a,pr(this,i))},t.removePause=function(i){var s=this._first;for(i=pr(this,i);s;)s._start===i&&s.data==="isPause"&&$s(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gr(i),l=this._first,c=_s(s),h;l;)l instanceof Ln?RT(l._targets,a)&&(c?(!Xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=pr(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,g=Ln.to(o,$i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||sn,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());g._dur!==_&&Za(g,_,0,1).render(g._time,!0,!0),d=1}h&&h.apply(g,u||[])}},s));return f?g.render(0):g},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,$i({startAt:{time:pr(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),F_(this,pr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),F_(this,pr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+sn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Mn(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return No(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),No(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mr,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$r(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Mn(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Za(o,o===En&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(En._ts&&(W_(En,Nd(i,En)),G_=Ni.frame),Ni.frame>=P_){P_+=Oi.autoSleep||120;var s=En._first;if((!s||!s._ts)&&Oi.autoSleep&&Ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ni.sleep()}}},e})(Oc);$i(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var KT=function(e,t,n,i,s,o,a){var l=new Mi(this._pt,e,t,0,1,Cm,null,s),c=0,h=0,u,f,d,g,p,_,m,x;for(l.b=n,l.e=i,n+="",i+="",(m=~i.indexOf("random("))&&(i=Ka(i)),o&&(x=[n,i],o(x,e,t),n=x[0],i=x[1]),f=n.match(Jp)||[];u=Jp.exec(i);)g=u[0],p=i.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),g!==f[h++]&&(_=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:_,c:g.charAt(1)==="="?ko(_,g)-_:parseFloat(g)-_,m:d&&d<4?Math.round:0},c=Jp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(gm.test(i)||m)&&(l.e=0),this._pt=l,l},Tm=function(e,t,n,i,s,o,a,l,c,h){An(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:An(u)?c?e[t.indexOf("set")||!An(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=An(u)?c?nw:fv:Rm,g;if(zn(i)&&(~i.indexOf("random(")&&(i=Ka(i)),i.charAt(1)==="="&&(g=ko(f,i)+(Qn(f)||0),(g||g===0)&&(i=g))),!h||f!==i||hm)return!isNaN(f*i)&&i!==""?(g=new Mi(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?rw:pv,0,d),c&&(g.fp=c),a&&g.modifier(a,this,e),this._pt=g):(!u&&!(t in e)&&Bd(t,i),KT.call(this,e,t,f,i,d,l||Oi.stringFilter,c))},jT=function(e,t,n,i,s){if(An(e)&&(e=Dc(e,s,t,n,i)),!Zr(e)||e.style&&e.nodeType||ci(e)||k_(e))return zn(e)?Dc(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Dc(e[a],s,t,n,i);return o},wm=function(e,t,n,i,s,o){var a,l,c,h;if(Fi[e]&&(a=new Fi[e]).init(s,a.rawVars?t[e]:jT(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Mi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Xa))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Xs,hm,Am=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,g=e._dur,p=e._startAt,_=e._targets,m=e.parent,x=m&&m.data==="nested"?m.vars.targets:_,v=e._overwrite==="auto"&&!fm,y=e.timeline,M,S,w,P,b,E,L,A,D,B,G,z,k;if(y&&(!f||!s)&&(s="none"),e._ease=Uo(s,qa.ease),e._yEase=u?lv(Uo(u===!0?s:u,qa.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!y&&!!i.runBackwards,!y||f&&!i.stagger){if(A=_[0]?Ys(_[0]).harness:0,z=A&&i[A.prop],M=Fd(i,vm),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!d?p.render(-1,!0):p.revert(h&&g?Cd:wT),p._lazy=0),o){if($s(e._startAt=Ln.set(_,$i({data:"isStart",overwrite:!1,parent:m,immediateRender:!0,lazy:!p&&Ui(l),startAt:null,delay:0,onUpdate:c&&function(){return qi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn||!a&&!d)&&e._startAt.revert(Cd),a&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&g&&!p){if(t&&(a=!1),w=$i({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Ui(l),immediateRender:a,stagger:0,parent:m},M),z&&(w[A.prop]=z),$s(e._startAt=Ln.set(_,w)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn?e._startAt.revert(Cd):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,sn,sn);else if(!t)return}for(e._pt=e._ptCache=0,l=g&&Ui(l)||l&&!g,S=0;S<_.length;S++){if(b=_[S],L=b._gsap||ym(_)[S]._gsap,e._ptLookup[S]=B={},sm[L.id]&&qs.length&&Dd(),G=x===_?S:x.indexOf(b),A&&(D=new A).init(b,z||M,e,G,x)!==!1&&(e._pt=P=new Mi(e._pt,b,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(K){B[K]=P}),D.priority&&(E=1)),!A||z)for(w in M)Fi[w]&&(D=wm(w,M,e,G,b,x))?D.priority&&(E=1):B[w]=P=Tm.call(e,b,w,"get",M[w],G,x,0,i.stringFilter);e._op&&e._op[S]&&e.kill(b,e._op[S]),v&&e._pt&&(Xs=e,En.killTweensOf(b,B,e.globalTime(t)),k=!e.parent,Xs=0),e._pt&&l&&(sm[L.id]=1)}E&&Im(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!k,f&&t<=0&&y.render(mr,!0,!0)},QT=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return hm=1,e.vars[t]="+=0",Am(e,a),hm=0,l?Fc(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Rn(n)+Qn(u.e)),u.b&&(u.b=h.s+Qn(u.b))},ew=function(e,t){var n=e[0]?Ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ya({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},tw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ci(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Dc=function(e,t,n,i,s){return An(e)?e.call(t,n,i,s):zn(e)&&~e.indexOf("random(")?Ka(e):e},hv=xm+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",dv={};bi(hv+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return dv[r]=1});var Ln=(function(r){O_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ic(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,g=l.keyframes,p=l.defaults,_=l.scrollTrigger,m=l.yoyoEase,x=i.parent||En,v=(ci(n)||k_(n)?_s(n[0]):"length"in i)?[n]:gr(n),y,M,S,w,P,b,E,L;if(a._targets=v.length?ym(v):Fc("GSAP target "+n+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,g||f||Rd(c)||Rd(h)){if(i=a.vars,y=a.timeline=new Kn({data:"nested",defaults:p||{},targets:x&&x.data==="nested"?x.vars.targets:v}),y.kill(),y.parent=y._dp=ms(a),y._start=0,f||Rd(c)||Rd(h)){if(w=v.length,E=f&&Q_(f),Zr(f))for(P in f)~hv.indexOf(P)&&(L||(L={}),L[P]=f[P]);for(M=0;M<w;M++)S=Fd(i,dv),S.stagger=0,m&&(S.yoyoEase=m),L&&Ya(S,L),b=v[M],S.duration=+Dc(c,ms(a),M,b,v),S.delay=(+Dc(h,ms(a),M,b,v)||0)-a._delay,!f&&w===1&&S.delay&&(a._delay=h=S.delay,a._start+=h,S.delay=0),y.to(b,S,E?E(M,b,v):0),y._ease=Ft.none;y.duration()?c=h=0:a.timeline=0}else if(g){Ic($i(y.vars.defaults,{ease:"none"})),y._ease=Uo(g.ease||i.ease||"none");var A=0,D,B,G;if(ci(g))g.forEach(function(z){return y.to(v,z,">")}),y.duration();else{S={};for(P in g)P==="ease"||P==="easeEach"||tw(P,g[P],S,g.easeEach);for(P in S)for(D=S[P].sort(function(z,k){return z.t-k.t}),A=0,M=0;M<D.length;M++)B=D[M],G={ease:B.e,duration:(B.t-(M?D[M-1].t:0))/100*c},G[P]=B.v,y.to(v,G,A),A+=G.duration;y.duration()<c&&y.to({},{duration:c-y.duration()})}}c||a.duration(c=y.duration())}else a.timeline=0;return d===!0&&!fm&&(Xs=ms(a),En.killTweensOf(v),Xs=0),$r(x,ms(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!g&&a._start===Mn(x._time)&&Ui(u)&&LT(ms(a))&&x.data!=="nested")&&(a._tTime=-sn,a.render(Math.max(0,-h)||0)),_&&Z_(ms(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-sn&&!h?l:i<sn?0:i,f,d,g,p,_,m,x,v,y;if(!c)FT(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,v=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,o);if(f=Mn(u%p),u===l?(g=this._repeat,f=c):(_=Mn(u/p),g=~~_,g&&g===_?(f=c,g--):f>c&&(f=c)),m=this._yoyo&&g&1,m&&(y=this._yEase,f=c-f),_=$a(this._tTime,p),f===a&&!o&&this._initted&&g===_)return this._tTime=u,this;g!==_&&(v&&this._yEase&&cv(v,m),this.vars.repeatRefresh&&!m&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(Mn(p*g),!0).invalidate()._lock=0))}if(!this._initted){if(J_(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&g!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=x=(y||this._ease)(f/c),this._from&&(this.ratio=x=1-x),!a&&u&&!s&&!_&&(qi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(x,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&om(this,i,s,o),qi(this,"onUpdate")),this._repeat&&g!==_&&this.vars.onRepeat&&!s&&this.parent&&qi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&om(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$s(this,1),!s&&!(h&&!a)&&(u||a||m)&&(qi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Uc||Ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Am(this,c),h=this._ease(c/this._dur),QT(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(zd(this,0),this.parent||Y_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xs&&Xs.vars.overwrite!==!0)._first||Cc(this),this.parent&&o!==this.timeline.totalDuration()&&Za(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gr(i):a,c=this._ptLookup,h=this._pt,u,f,d,g,p,_,m;if((!s||s==="all")&&PT(a,l))return s==="all"&&(this._pt=0),Cc(this);for(u=this._op=this._op||[],s!=="all"&&(zn(s)&&(p={},bi(s,function(x){return p[x]=1}),s=p),s=ew(a,s)),m=a.length;m--;)if(~l.indexOf(a[m])){f=c[m],s==="all"?(u[m]=s,g=f,d={}):(d=u[m]=u[m]||{},g=s);for(p in g)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&kd(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Cc(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lc(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lc(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return En.killTweensOf(i,s,o)},e})(Oc);$i(Ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bi("staggerTo,staggerFrom,staggerFromTo",function(r){Ln[r]=function(){var e=new Kn,t=lm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Rm=function(e,t,n){return e[t]=n},fv=function(e,t,n){return e[t](n)},nw=function(e,t,n,i){return e[t](i.fp,n)},iw=function(e,t,n){return e.setAttribute(t,n)},Vd=function(e,t){return An(e[t])?fv:Od(e[t])&&e.setAttribute?iw:Rm},pv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},rw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Cm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Pm=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},sw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},ow=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?kd(this,t,"_pt"):t.dep||(n=1),t=i;return!n},aw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Im=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Mi=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||pv,this.d=l||this,this.set=c||Rm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=aw,this.m=n,this.mt=s,this.tween=i},r})();bi(xm+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return vm[r]=1});Yi.TweenMax=Yi.TweenLite=Ln;Yi.TimelineLite=Yi.TimelineMax=Kn;En=new Kn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=Em;var Oo=[],Id={},lw=[],U_=0,cw=0,tm=function(e){return(Id[e]||lw).map(function(t){return t()})},dm=function(){var e=Date.now(),t=[];e-U_>2&&(tm("matchMediaInit"),Oo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Yr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),tm("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),U_=e,tm("matchMedia"))},mv=(function(){function r(t,n){this.selector=n&&cm(n),this.data=[],this._r=[],this.isReverted=!1,this.id=cw++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){An(n)&&(s=i,i=n,n=An);var o=this,a=function(){var c=vn,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=cm(s)),vn=o,u=i.apply(o,arguments),An(u)&&o._r.push(u),vn=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===An?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=vn;vn=null,n(this),vn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ln)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Oo.length;o--;)Oo[o].id===this.id&&Oo.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),uw=(function(){function r(t){this.contexts=[],this.scope=t,vn&&vn.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Zr(n)||(n={matches:n});var o=new mv(0,s||this.scope),a=o.conditions={},l,c,h;vn&&!o.selector&&(o.selector=vn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Yr.matchMedia(n[c]),l&&(Oo.indexOf(o)<0&&Oo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(dm):l.addEventListener("change",dm)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ud={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return sv(i)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return En.getTweensOf(e,t)},getProperty:function(e,t,n,i){zn(e)&&(e=gr(e)[0]);var s=Ys(e||{}).get,o=n?q_:X_;return n==="native"&&(n=""),e&&(t?o((Fi[t]&&Fi[t].get||s)(e,t,n,i)):function(a,l,c){return o((Fi[a]&&Fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gr(e),e.length>1){var i=e.map(function(h){return ui.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Fi[t],a=Ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Xa._pt=0,u.init(e,n?h+n:h,Xa,0,[e]),u.render(1,u),Xa._pt&&Pm(1,Xa)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=ui.to(e,$i((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return En.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Uo(e.ease,qa.ease)),I_(qa,e||{})},config:function(e){return I_(Oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fi[a]&&!Yi[a]&&Fc(t+" effect requires "+a+" plugin.")}),Kp[t]=function(a,l,c){return n(gr(a),$i(l||{},s),c)},o&&(Kn.prototype[t]=function(a,l,c){return this.add(Kp[t](a,Zr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Ft[e]=Uo(t)},parseEase:function(e,t){return arguments.length?Uo(e,t):Ft},getById:function(e){return En.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kn(e),i,s;for(n.smoothChildTiming=Ui(e.smoothChildTiming),En.remove(n),n._dp=0,n._time=n._tTime=En._time,i=En._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ln&&i.vars.onComplete===i._targets[0]))&&$r(n,i,i._start-i._delay),i=s;return $r(En,n,0),n},context:function(e,t){return e?new mv(e,t):vn},matchMedia:function(e){return new uw(e)},matchMediaRefresh:function(){return Oo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||dm()},addEventListener:function(e,t){var n=Id[e]||(Id[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Id[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:VT,wrapYoyo:GT,distribute:Q_,random:tv,snap:ev,normalize:zT,getUnit:Qn,clamp:OT,splitColor:ov,toArray:gr,selector:cm,mapRange:iv,pipe:kT,unitize:HT,interpolate:WT,shuffle:j_},install:z_,effects:Kp,ticker:Ni,updateRoot:Kn.updateRoot,plugins:Fi,globalTimeline:En,core:{PropTween:Mi,globals:V_,Tween:Ln,Timeline:Kn,Animation:Oc,getCache:Ys,_removeLinkedListItem:kd,reverting:function(){return jn},context:function(e){return e&&vn&&(vn.data.push(e),e._ctx=vn),vn},suppressOverwrites:function(e){return fm=e}}};bi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ud[r]=Ln[r]});Ni.add(Kn.updateRoot);Xa=Ud.to({},{duration:0});var hw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},dw=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=hw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},nm=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(zn(s)&&(l={},bi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}dw(a,s)}}}},ui=Ud.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)jn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},nm("roundProps",um),nm("modifiers"),nm("snap",ev))||Ud;Ln.version=Kn.version=ui.version="3.14.2";H_=1;pm()&&Ja();var fw=Ft.Power0,pw=Ft.Power1,mw=Ft.Power2,gw=Ft.Power3,_w=Ft.Power4,vw=Ft.Linear,xw=Ft.Quad,yw=Ft.Cubic,bw=Ft.Quart,Mw=Ft.Quint,Ew=Ft.Strong,Sw=Ft.Elastic,Tw=Ft.Back,ww=Ft.SteppedEase,Aw=Ft.Bounce,Rw=Ft.Sine,Cw=Ft.Expo,Pw=Ft.Circ;var gv,Js,Qa,Om,Wo,Iw,_v,Bm,Lw=function(){return typeof window<"u"},xs={},Go=180/Math.PI,el=Math.PI/180,ja=Math.atan2,vv=1e8,km=/([A-Z])/g,Dw=/(left|right|width|margin|padding|x)/i,Fw=/[\s,\(]\S/,Jr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Dm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Nw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Uw=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Ow=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Bw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},wv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Av=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},kw=function(e,t,n){return e.style[t]=n},Hw=function(e,t,n){return e.style.setProperty(t,n)},zw=function(e,t,n){return e._gsap[t]=n},Vw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Gw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},Ww=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Sn="transform",Bi=Sn+"Origin",Xw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in xs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Jr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=vs(i,a)}):this.tfm[e]=o.x?o[e]:vs(i,e),e===Bi&&(this.tfm.zOrigin=o.zOrigin);else return Jr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Sn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Bi,t,"")),e=Sn}(s||t)&&this.props.push(e,t,s[e])},Rv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},qw=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(km,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bm(),(!s||!s.isStart)&&!n[Sn]&&(Rv(n),i.zOrigin&&n[Bi]&&(n[Bi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Cv=function(e,t){var n={target:e,props:[],revert:qw,save:Xw};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Pv,Fm=function(e,t){var n=Js.createElementNS?Js.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Js.createElement(e);return n&&n.style?n:Js.createElement(e)},Zi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(km,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,tl(t)||t,1)||""},xv="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,n){var i=t||Wo,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(xv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?xv[o]:"")+e},Nm=function(){Lw()&&window.document&&(gv=window,Js=gv.document,Qa=Js.documentElement,Wo=Fm("div")||{style:{}},Iw=Fm("div"),Sn=tl(Sn),Bi=Sn+"Origin",Wo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Pv=!!tl("perspective"),Bm=ui.core.reverting,Om=1)},yv=function(e){var t=e.ownerSVGElement,n=Fm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Qa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Qa.removeChild(n),s},bv=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Iv=function(e){var t,n;try{t=e.getBBox()}catch{t=yv(e),n=1}return t&&(t.width||t.height)||n||(t=yv(e)),t&&!t.width&&!t.x&&!t.y?{x:+bv(e,["x","cx","x1"])||0,y:+bv(e,["y","cy","y1"])||0,width:0,height:0}:t},Lv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Iv(e))},js=function(e,t){if(t){var n=e.style,i;t in xs&&t!==Bi&&(t=Sn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(km,"-$1").toLowerCase())):n.removeAttribute(t)}},Ks=function(e,t,n,i,s,o){var a=new Mi(e._pt,t,n,0,1,o?Av:wv);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Mv={deg:1,rad:1,turn:1},Yw={grid:1,flex:1},Qs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Wo.style,l=Dw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",g,p,_,m;if(i===o||!s||Mv[i]||Mv[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),m=e.getCTM&&Lv(e),(d||o==="%")&&(xs[t]||~t.indexOf("adius")))return g=m?e.getBBox()[l?"width":"height"]:e[h],Rn(d?s/g*u:s/100*g);if(a[l?"width":"height"]=u+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,m&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Js||!p.appendChild)&&(p=Js.body),_=p._gsap,_&&d&&_.width&&l&&_.time===Ni.time&&!_.uncache)return Rn(s/_.width*u);if(d&&(t==="height"||t==="width")){var x=e.style[t];e.style[t]=u+i,g=e[h],x?e.style[t]=x:js(e,t)}else(d||o==="%")&&!Yw[Zi(p,"display")]&&(a.position=Zi(e,"position")),p===e&&(a.position="static"),p.appendChild(Wo),g=Wo[h],p.removeChild(Wo),a.position="absolute";return l&&d&&(_=Ys(p),_.time=Ni.time,_.width=p[h]),Rn(f?g*s/u:g&&s?u/g*s:0)},vs=function(e,t,n,i){var s;return Om||Nm(),t in Jr&&t!=="transform"&&(t=Jr[t],~t.indexOf(",")&&(t=t.split(",")[0])),xs[t]&&t!=="transform"?(s=zc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wd(Zi(e,Bi))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gd[t]&&Gd[t](e,t,n)||Zi(e,t)||bm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qs(e,t,s,n)+n:s},$w=function(e,t,n,i){if(!n||n==="none"){var s=tl(t,e,1),o=s&&Zi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zi(e,"borderTopColor"))}var a=new Mi(this._pt,e.style,t,0,1,Cm),l=0,c=0,h,u,f,d,g,p,_,m,x,v,y,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=Zi(e,t)||i,p?e.style[t]=p:js(e,t)),h=[n,i],Em(h),n=h[0],i=h[1],f=n.match(Bo)||[],M=i.match(Bo)||[],M.length){for(;u=Bo.exec(i);)_=u[0],x=i.substring(l,u.index),g?g=(g+1)%5:(x.substr(-5)==="rgba("||x.substr(-5)==="hsla(")&&(g=1),_!==(p=f[c++]||"")&&(d=parseFloat(p)||0,y=p.substr((d+"").length),_.charAt(1)==="="&&(_=ko(d,_)+y),m=parseFloat(_),v=_.substr((m+"").length),l=Bo.lastIndex-v.length,v||(v=v||Oi.units[t]||y,l===i.length&&(i+=v,a.e+=v)),y!==v&&(d=Qs(e,t,p,v)||0),a._pt={_next:a._pt,p:x||c===1?x:",",s:d,c:m-d,m:g&&g<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Av:wv;return gm.test(i)&&(a.e=0),this._pt=a,a},Ev={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},Zw=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Ev[n]||n,t[1]=Ev[i]||i,t.join(" ")},Jw=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xs[a]&&(l=1,a=a==="transformOrigin"?Bi:Sn),js(n,a);l&&(js(n,Sn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zc(n,1),o.uncache=1,Rv(i)))}},Gd={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Mi(e._pt,t,n,0,0,Jw);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Hc=[1,0,0,1,0,0],Dv={},Fv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Sv=function(e){var t=Zi(e,Sn);return Fv(t)?Hc:t.substr(7).match(mm).map(Rn)},Hm=function(e,t){var n=e._gsap||Ys(e),i=e.style,s=Sv(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hc:s):(s===Hc&&!e.offsetParent&&e!==Qa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Qa.appendChild(e)),s=Sv(e),l?i.display=l:js(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Um=function(e,t,n,i,s,o){var a=e._gsap,l=s||Hm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],g=l[1],p=l[2],_=l[3],m=l[4],x=l[5],v=t.split(" "),y=parseFloat(v[0])||0,M=parseFloat(v[1])||0,S,w,P,b;n?l!==Hc&&(w=d*_-g*p)&&(P=y*(_/w)+M*(-p/w)+(p*x-_*m)/w,b=y*(-g/w)+M*(d/w)-(d*x-g*m)/w,y=P,M=b):(S=Iv(e),y=S.x+(~v[0].indexOf("%")?y/100*S.width:y),M=S.y+(~(v[1]||v[0]).indexOf("%")?M/100*S.height:M)),i||i!==!1&&a.smooth?(m=y-c,x=M-h,a.xOffset=u+(m*d+x*p)-m,a.yOffset=f+(m*g+x*_)-x):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[Bi]="0px 0px",o&&(Ks(o,a,"xOrigin",c,y),Ks(o,a,"yOrigin",h,M),Ks(o,a,"xOffset",u,a.xOffset),Ks(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+M)},zc=function(e,t){var n=e._gsap||new Sm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zi(e,Bi)||"0",h,u,f,d,g,p,_,m,x,v,y,M,S,w,P,b,E,L,A,D,B,G,z,k,K,re,N,oe,ke,He,Ye,it;return h=u=f=p=_=m=x=v=y=0,d=g=1,n.svg=!!(e.getCTM&&Lv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Sn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Sn]!=="none"?l[Sn]:"")),i.scale=i.rotate=i.translate="none"),w=Hm(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",k=""):k=!t&&e.getAttribute("data-svg-origin"),Um(e,k||c,!!k||n.originIsAbsolute,n.smooth!==!1,w)),M=n.xOrigin||0,S=n.yOrigin||0,w!==Hc&&(L=w[0],A=w[1],D=w[2],B=w[3],h=G=w[4],u=z=w[5],w.length===6?(d=Math.sqrt(L*L+A*A),g=Math.sqrt(B*B+D*D),p=L||A?ja(A,L)*Go:0,x=D||B?ja(D,B)*Go+p:0,x&&(g*=Math.abs(Math.cos(x*el))),n.svg&&(h-=M-(M*L+S*D),u-=S-(M*A+S*B))):(it=w[6],He=w[7],N=w[8],oe=w[9],ke=w[10],Ye=w[11],h=w[12],u=w[13],f=w[14],P=ja(it,ke),_=P*Go,P&&(b=Math.cos(-P),E=Math.sin(-P),k=G*b+N*E,K=z*b+oe*E,re=it*b+ke*E,N=G*-E+N*b,oe=z*-E+oe*b,ke=it*-E+ke*b,Ye=He*-E+Ye*b,G=k,z=K,it=re),P=ja(-D,ke),m=P*Go,P&&(b=Math.cos(-P),E=Math.sin(-P),k=L*b-N*E,K=A*b-oe*E,re=D*b-ke*E,Ye=B*E+Ye*b,L=k,A=K,D=re),P=ja(A,L),p=P*Go,P&&(b=Math.cos(P),E=Math.sin(P),k=L*b+A*E,K=G*b+z*E,A=A*b-L*E,z=z*b-G*E,L=k,G=K),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,m=180-m),d=Rn(Math.sqrt(L*L+A*A+D*D)),g=Rn(Math.sqrt(z*z+it*it)),P=ja(G,z),x=Math.abs(P)>2e-4?P*Go:0,y=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(k=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Fv(Zi(e,Sn)),k&&e.setAttribute("transform",k))),Math.abs(x)>90&&Math.abs(x)<270&&(s?(d*=-1,x+=p<=0?180:-180,p+=p<=0?180:-180):(g*=-1,x+=x<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Rn(d),n.scaleY=Rn(g),n.rotation=Rn(p)+a,n.rotationX=Rn(_)+a,n.rotationY=Rn(m)+a,n.skewX=x+a,n.skewY=v+a,n.transformPerspective=y+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Bi]=Wd(c)),n.xOffset=n.yOffset=0,n.force3D=Oi.force3D,n.renderTransform=n.svg?jw:Pv?Nv:Kw,n.uncache=0,n},Wd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Lm=function(e,t,n){var i=Qn(t);return Rn(parseFloat(t)+parseFloat(Qs(e,"x",n+"px",i)))+i},Kw=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Nv(e,t)},zo="0deg",kc="0px",Vo=") ",Nv=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,g=n.scaleX,p=n.scaleY,_=n.transformPerspective,m=n.force3D,x=n.target,v=n.zOrigin,y="",M=m==="auto"&&e&&e!==1||m===!0;if(v&&(u!==zo||h!==zo)){var S=parseFloat(h)*el,w=Math.sin(S),P=Math.cos(S),b;S=parseFloat(u)*el,b=Math.cos(S),o=Lm(x,o,w*b*-v),a=Lm(x,a,-Math.sin(S)*-v),l=Lm(x,l,P*b*-v+v)}_!==kc&&(y+="perspective("+_+Vo),(i||s)&&(y+="translate("+i+"%, "+s+"%) "),(M||o!==kc||a!==kc||l!==kc)&&(y+=l!==kc||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vo),c!==zo&&(y+="rotate("+c+Vo),h!==zo&&(y+="rotateY("+h+Vo),u!==zo&&(y+="rotateX("+u+Vo),(f!==zo||d!==zo)&&(y+="skew("+f+", "+d+Vo),(g!==1||p!==1)&&(y+="scale("+g+", "+p+Vo),x.style[Sn]=y||"translate(0, 0)"},jw=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,g=n.xOrigin,p=n.yOrigin,_=n.xOffset,m=n.yOffset,x=n.forceCSS,v=parseFloat(o),y=parseFloat(a),M,S,w,P,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=el,c*=el,M=Math.cos(l)*u,S=Math.sin(l)*u,w=Math.sin(l-c)*-f,P=Math.cos(l-c)*f,c&&(h*=el,b=Math.tan(c-h),b=Math.sqrt(1+b*b),w*=b,P*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,S*=b)),M=Rn(M),S=Rn(S),w=Rn(w),P=Rn(P)):(M=u,P=f,S=w=0),(v&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(v=Qs(d,"x",o,"px"),y=Qs(d,"y",a,"px")),(g||p||_||m)&&(v=Rn(v+g-(g*M+p*w)+_),y=Rn(y+p-(g*S+p*P)+m)),(i||s)&&(b=d.getBBox(),v=Rn(v+i/100*b.width),y=Rn(y+s/100*b.height)),b="matrix("+M+","+S+","+w+","+P+","+v+","+y+")",d.setAttribute("transform",b),x&&(d.style[Sn]=b)},Qw=function(e,t,n,i,s){var o=360,a=zn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Go:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*vv)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*vv)%o-~~(c/o)*o)),e._pt=f=new Mi(e._pt,t,n,i,c,Nw),f.e=h,f.u="deg",e._props.push(n),f},Tv=function(e,t){for(var n in t)e[n]=t[n];return e},e2=function(e,t,n){var i=Tv({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,g;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Sn]=t,a=zc(n,1),js(n,Sn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Sn],o[Sn]=t,a=zc(n,1),o[Sn]=c);for(l in xs)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Qn(c),g=Qn(h),u=d!==g?Qs(n,l,c,g):parseFloat(c),f=parseFloat(h),e._pt=new Mi(e._pt,a,l,u,f-u,Dm),e._pt.u=g||0,e._props.push(l));Tv(a,i)};bi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gd[e>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(g){return vs(a,g,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(g,p){return d[g]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,u)}});var zm={name:"css",register:Nm,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,g,p,_,m,x,v,y,M,S,w,P,b;Om||Nm(),this.styles=this.styles||Cv(e),P=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Fi[p]&&wm(p,t,n,i,e,s)))){if(d=typeof h,g=Gd[p],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ka(h)),g)g(this,e,p,h,n)&&(w=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",gs.lastIndex=0,gs.test(c)||(_=Qn(c),m=Qn(h),m?_!==m&&(c=Qs(e,p,c,m)+m):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,p),o.push(p),P.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],zn(c)&&~c.indexOf("random(")&&(c=Ka(c)),Qn(c+"")||c==="auto"||(c+=Oi.units[p]||Qn(vs(e,p))||""),(c+"").charAt(1)==="="&&(c=vs(e,p))):c=vs(e,p),f=parseFloat(c),x=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),x&&(h=h.substr(2)),u=parseFloat(h),p in Jr&&(p==="autoAlpha"&&(f===1&&vs(e,"visibility")==="hidden"&&u&&(f=0),P.push("visibility",0,a.visibility),Ks(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=Jr[p],~p.indexOf(",")&&(p=p.split(",")[0]))),v=p in xs,v){if(this.styles.save(p),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Zi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=Zi(e,"perspective"),E?e.style.perspective=E:js(e,"perspective")}u=parseFloat(h)}if(y||(M=e._gsap,M.renderTransform&&!t.parseTransform||zc(e,t.parseTransform),S=t.smoothOrigin!==!1&&M.smooth,y=this._pt=new Mi(this._pt,a,Sn,0,1,M.renderTransform,M,0,-1),y.dep=1),p==="scale")this._pt=new Mi(this._pt,M,"scaleY",M.scaleY,(x?ko(M.scaleY,x+u):u)-M.scaleY||0,Dm),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){P.push(Bi,0,a[Bi]),h=Zw(h),M.svg?Um(e,h,0,S,0,this):(m=parseFloat(h.split(" ")[2])||0,m!==M.zOrigin&&Ks(this,M,"zOrigin",M.zOrigin,m),Ks(this,a,p,Wd(c),Wd(h)));continue}else if(p==="svgOrigin"){Um(e,h,1,S,0,this);continue}else if(p in Dv){Qw(this,M,p,f,x?ko(f,x+h):h);continue}else if(p==="smoothOrigin"){Ks(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){e2(this,h,e);continue}}else p in a||(p=tl(p)||p);if(v||(u||u===0)&&(f||f===0)&&!Fw.test(h)&&p in a)_=(c+"").substr((f+"").length),u||(u=0),m=Qn(h)||(p in Oi.units?Oi.units[p]:_),_!==m&&(f=Qs(e,p,c,m)),this._pt=new Mi(this._pt,v?M:a,p,f,(x?ko(f,x+u):u)-f,!v&&(m==="px"||p==="zIndex")&&t.autoRound!==!1?Bw:Dm),this._pt.u=m||0,v&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Ow):_!==m&&m!=="%"&&(this._pt.b=c,this._pt.r=Uw);else if(p in a)$w.call(this,e,p,c,x?x+h:h);else if(p in e)this.add(e,p,c||e[p],x?x+h:h,i,s);else if(p!=="parseTransform"){Bd(p,h);continue}v||(p in a?P.push(p,0,a[p]):typeof e[p]=="function"?P.push(p,2,e[p]()):P.push(p,1,c||e[p])),o.push(p)}}w&&Im(this)},render:function(e,t){if(t.tween._time||!Bm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vs,aliases:Jr,getSetter:function(e,t,n){var i=Jr[t];return i&&i.indexOf(",")<0&&(t=i),t in xs&&t!==Bi&&(e._gsap.x||vs(e,"x"))?n&&_v===n?t==="scale"?Vw:zw:(_v=n||{})&&(t==="scale"?Gw:Ww):e.style&&!Od(e.style[t])?kw:~t.indexOf("-")?Hw:Vd(e,t)},core:{_removeProperty:js,_getMatrix:Hm}};ui.utils.checkPrefix=tl;ui.core.getStyleSaver=Cv;(function(r,e,t,n){var i=bi(r+","+e+","+t,function(s){xs[s]=1});bi(e,function(s){Oi.units[s]="deg",Dv[s]=1}),Jr[i[13]]=r+","+e,bi(n,function(s){var o=s.split(":");Jr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Oi.units[r]="px"});ui.registerPlugin(zm);var ce=ui.registerPlugin(zm)||ui,nC=ce.core.Tween;var Uv=[["THE CALL","A window in the dark.","At the end of the valley, one window still flickers. The keeper has one lantern left."],["THE OPENING","The mountain remembers.","An old door unlocks. The observatory opens its ribs, revealing the lift that once carried starlight."],["THE DESCENT","Take the light below.","The keeper lowers the lantern into the heart of the machine. For a moment, nothing happens."],["THE SPARK","One small light is enough.","The socket catches. Teeth turn. Three broken lenses begin looking for the same point in the sky."],["THE SIGNAL","Give the dark an answer.","The lenses lock. The observatory folds itself whole, and sends the lantern\u2019s light across the valley."],["THE REPLY","One window. Then another.","The signal reaches the sleeping village. A street wakes. Then the next. Someone has been waiting."],["THE HOMECOMING","You were never the last.","A light comes back from the village. The keeper returns to the rooftop. There is enough light now, for everyone."]],Ov=r=>Math.max(0,Math.min(1,r)),Xo=r=>(r=Ov(r),r*r*(3-2*r));function Bv(r){let e=Ov(r),t=(n,i)=>Xo((e-n)/(i-n));return{p:e,chapter:e<.12?0:e<.27?1:e<.42?2:e<.57?3:e<.72?4:e<.88?5:6,open:t(.12,.27),descend:t(.27,.4),spark:t(.4,.46),align:t(.44,.57),close:t(.57,.66),transmit:t(.65,.77),village:t(.75,.9),reply:t(.88,.95),dawn:t(.88,.97),returnHome:t(.87,.95)}}function kv(r){let e=document.querySelector(".lk-world");if(!e)return;if(r){let I=document.querySelector(".lk-log");I&&(I.open=!0)}let t;try{t=new li({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{let I=document.querySelector(".lk-journey");I&&(I.style.height="100svh");return}e.append(t.domElement),e.classList.add("has-webgl"),t.setPixelRatio(1),t.setClearColor(726816,1),t.outputColorSpace=Kt;let n=new jt;n.fog=new hs(726816,45,100);let i=new Li(-20,20,14,-14,.1,200),s=new Wi(10470603,2);n.add(s);let o=new hn(16762004,3);o.position.set(-15,25,10),n.add(o);let a=new hn(4950939,2);a.position.set(10,6,-10),n.add(a);let l=new Wt(1,1,1),c=new Map;function h(I,U=!1){let W=I+U;return c.has(W)||c.set(W,new xt({color:I,roughness:1,emissive:U?I:0,emissiveIntensity:U?1.7:0})),c.get(W)}function u(I,U,W,X,ge,se,Pe,Ae,ue=!1){let de=new Ue(l,h(Ae,ue));return de.position.set(U,W,X),de.scale.set(ge,se,Pe),I.add(de),de}let f=new $e;n.add(f);let d=new $e;f.add(d);let g=41,p=()=>(g=g*16807%2147483647,(g-1)/2147483646),_=new yn,m=[];for(let I=-12;I<=12;I++)for(let U=-10;U<=10;U++){let W=Math.sqrt(I*I+U*U*1.25);if(W>12+p()*1.5)continue;let X=-3+Math.floor(Math.sin(I*.5)*.7+Math.cos(U*.4)*.9+p()),ge=Math.max(1,Math.floor((13-W)*.5));for(let se=0;se<ge;se++)m.push({x:I,y:X-se,z:U,s:1,c:new Me(se===0?p()>.7?"#78958c":"#496c69":p()>.5?"#263f49":"#34505a")})}let x=new Ar(l,h("#ffffff"),m.length);m.forEach((I,U)=>{_.position.set(I.x,I.y,I.z),_.scale.set(1,1,1),_.updateMatrix(),x.setMatrixAt(U,_.matrix),x.setColorAt(U,I.c)}),d.add(x);for(let I=0;I<15;I++)u(f,7-I*.32,-2+I*.28,8-I*.6,2.2,.25,.7,"#829588");for(let I=0;I<25;I++){let U=p()*Math.PI*2,W=8+p()*3,X=Math.cos(U)*W,ge=Math.sin(U)*W;if(!(ge>3&&X>3)){u(f,X,-1.7,ge,.3,2,.3,"#384b4c");for(let se=0;se<4;se++)u(f,X,-1+se*.6,ge,2.4-se*.5,.7,2.4-se*.5,se%2?"#345f59":"#416f63")}}let v=new $e;f.add(v);let y=[];for(let I=0;I<4;I++){let U=new $e;U.position.y=I*3,y.push(U),v.add(U),u(U,0,0,0,8,.45,7,"#5b7373"),u(U,0,.32,0,7.5,.2,6.5,"#96a499");for(let W of[-3.5,3.5])for(let X of[-3,3])u(U,W,1.5,X,.65,2.7,.65,"#78938b"),u(U,W,2.8,X,.9,.25,.9,"#a4afa0");u(U,0,1.5,-3.1,6.8,2.7,.45,"#35545c");for(let W=-2;W<=2;W++)u(U,W*1.15,1.65,-2.84,.5,1.15,.1,"#192f3a"),u(U,W*1.15,1.65,-2.76,.18,.6,.08,"#b7885d",!0);u(U,-3.7,1.4,0,.3,2.8,6,"#496970");for(let W=-2;W<=2;W++)u(U,-3.47,1.5,W,.08,.8,.4,"#ba9164",!0);for(let W=-3;W<=3;W++)u(U,W,1,3.2,.13,1.2,.13,"#a2a48b");u(U,0,1.6,3.2,7.5,.12,.13,"#b1ae91")}let M=[];for(let I=0;I<4;I++){let U=new $e;U.position.y=12,U.rotation.y=I*Math.PI/2,v.add(U);let W=new $e;U.add(W),W.position.z=-3.4;for(let X=0;X<6;X++)u(W,0,X*.4,X*.55,7-X*.8,.45,.7,X%2?"#536d77":"#68858b");M.push(W)}u(v,0,12,0,8.6,.35,8.2,"#a7a78d");let S=new $e;f.add(S),u(S,0,.6,0,.6,.9,.5,"#e5b06c"),u(S,0,1.3,0,.55,.5,.5,"#e7d5a8"),u(S,0,1.65,0,.75,.2,.65,"#c57452"),u(S,-.2,.05,0,.25,.3,.45,"#1a303c"),u(S,.2,.05,0,.25,.3,.45,"#1a303c");let w=u(S,.48,.65,0,.25,.45,.25,"#f2cd8a",!0),P=new $e;P.position.y=4.7,f.add(P);let b=new Ue(new oc(1.2,0),h("#ffc278",!0));P.add(b);let E=[];for(let I=0;I<3;I++){let U=new $e;P.add(U);for(let W=0;W<40;W++){let X=W/40*Math.PI*2,ge=u(U,Math.cos(X)*(2.1+I*.7),Math.sin(X)*(2.1+I*.7),0,.3,.3,.35,W%5===0?"#edc686":"#6b8c86",W%5===0);ge.rotation.z=X}E.push(U)}let L=[];for(let I=0;I<34;I++){let U=p()*6.28,W=8+p()*3,X=Math.cos(U)*W,ge=Math.sin(U)*W;u(f,X,-4,ge,1.6,.7,1.2,"#213b45"),u(f,X,-3.4,ge,1.2,.6,1,"#547370"),L.push(u(f,X,-3.35,ge+.52,.5,.3,.05,"#f5b76e",!0))}let A=new $e;f.add(A),u(A,0,0,0,1.9,.18,1.7,"#b3a481");for(let I of[-.85,.85])u(A,I,.55,.7,.1,1.2,.1,"#9da795"),u(A,I,.55,-.7,.1,1.2,.1,"#9da795");let D=[u(f,2.1,7,3,.06,10,.06,"#7b8e89"),u(f,3.9,7,3,.06,10,.06,"#7b8e89")],B=new $e;B.position.set(0,3.6,6),f.add(B),u(B,0,0,0,1.4,.35,1.4,"#667c77"),u(B,0,.3,0,.65,.4,.65,"#1a343a");let G=u(B,0,.55,0,.4,.45,.4,"#ffce83",!0),z=[];for(let I=0;I<4;I++){let U=new $e;U.position.set(3.9,2.1+I*2,3.4),f.add(U);for(let W=0;W<12;W++){let X=W/12*Math.PI*2,ge=u(U,Math.cos(X)*.65,Math.sin(X)*.65,0,.3,.3,.22,W%2?"#a1a18a":"#79918a");ge.rotation.z=X}u(U,0,0,0,.3,.3,.35,"#d0b17a"),z.push(U)}let k=new $e;f.add(k);for(let I=0;I<9;I++)u(k,3-I*.36,3.45,3+I*.36,.7,.16,.7,"#a3a48a");for(let I=0;I<20;I++)u(v,4.3,I*.6,0,.13,.5,.13,"#8b9b8b"),u(v,4.7,I*.6,0,.13,.5,.13,"#8b9b8b"),u(v,4.5,I*.6,.04,.5,.08,.13,"#a3ac96");u(v,-4.15,5.8,-1,.25,11.5,.25,"#ac8a68");for(let I=0;I<5;I++)u(v,-4.15,1+I*2.2,-1,.4,.18,.4,"#c7ab7d");let K=new $e;K.position.set(0,14.8,0),f.add(K),u(K,0,0,0,1.1,1.4,1.1,"#8f9a88");let re=new $e;re.position.y=.8,K.add(re);for(let I=0;I<6;I++)u(re,0,0,I*.6,1.35-I*.12,1.35-I*.12,.7,I%2?"#cfb68b":"#637e7e");u(re,0,0,3.5,.8,.8,.12,"#c7e3d0",!0);let N=new $e;N.position.set(-3,16.8,-2),f.add(N),u(N,0,-1,0,.1,2,.1,"#c6ba97"),u(N,0,0,0,1.7,.16,.16,"#e2c28e"),u(N,.8,.2,0,.45,.6,.12,"#d6b887");let oe=new $e;oe.position.set(-20,-5,14),f.add(oe);let ke=[],He=[];for(let I=0;I<12;I++){let U=Math.floor(I/4),X=(I%4-1.5)*4.3,ge=(U-1)*4.4,se=U*.55;u(oe,X,se-1.2,ge,4.1,2,4.1,"#3b595c"),u(oe,X,se-2.6,ge,3.1,1,3.1,"#29434e"),u(oe,X,se-.12,ge,4.2,.25,4.2,"#779383"),u(oe,X,se+1,ge,2.8,2.1,2.6,["#71938c","#a1aa94","#658b85"][I%3]);for(let ue=0;ue<4;ue++)u(oe,X,se+2.15+ue*.25,ge,3.3-ue*.65,.3,3,"#425e64");u(oe,X+.8,se+2.6,ge-.5,.4,1.1,.4,"#8b9a87");let Pe=[];for(let ue of[-.7,.7])Pe.push(u(oe,X+ue,se+1.1,ge+1.32,.48,.6,.06,"#ffcb83",!0));Pe.push(u(oe,X+1.42,se+1.1,ge,.06,.65,.6,"#ffcb83",!0)),ke.push(Pe),u(oe,X,se+.45,ge+1.34,.42,.9,.06,"#304e50");let Ae=u(oe,X+.8,se+3.5,ge-.5,.4,.4,.4,"#9aafa3");He.push(Ae)}let Ye=new $e;f.add(Ye);for(let I=0;I<36;I++){let U=I/35,W=-7-U*12,X=3+U*11,ge=-1.8-Math.sin(U*Math.PI)*2.5;u(Ye,W,ge,X,.7,.16,1.65,"#7e8e7b");for(let se of[-1,1])u(Ye,W,ge+.65,X+se*.8,.07,1.25,.07,"#8e9a85"),u(Ye,W,ge+1.2,X+se*.8,.75,.07,.07,"#c2b18b")}let it=new un([new C(0,14,0),new C(-6,20,4),new C(-15,12,11),new C(-20,0,14)]),ne=new un([new C(-20,1,14),new C(-15,10,16),new C(-7,17,9),new C(1.7,12.6,3)]),ie=new $e;f.add(ie);for(let I=0;I<22;I++)u(ie,0,0,0,I?.14:.45,I?.14:.45,I?.14:.45,I?"#e6c78b":"#fff1b3",!0);let ye=new $e;f.add(ye);for(let I=0;I<16;I++)u(ye,0,0,0,I?.12:.35,I?.12:.35,I?.12:.35,"#cce6c1",!0);let Oe=new $e;Oe.position.y=14,f.add(Oe);for(let I=0;I<52;I++){let U=I/52*Math.PI*2;u(Oe,Math.cos(U),0,Math.sin(U),.12,.12,.12,"#ffe2a1",!0)}let Ce=new $e;f.add(Ce),u(Ce,0,0,0,.12,.3,.12,"#e4d5ad"),u(Ce,-.18,.08,0,.3,.35,.06,"#c9edd2",!0),u(Ce,.18,.08,0,.3,.35,.06,"#c9edd2",!0);let je=new $e;f.add(je);for(let I=0;I<70;I++){let U=p()*6.28,W=5+p()*15;u(je,Math.cos(U)*W,p()*25-4,Math.sin(U)*W,.08,.08,.08,"#c8dcab",!0)}let ft={p:0},we=-1,qe=!0,Ze=0,De=0,j=new C;function H(I=0){let U=Bv(ft.p),W=U.p,X=Xo((W-.7)/.22),ge=e.clientWidth/Math.max(1,e.clientHeight),se=14-U.descend*2+U.close*2+X*9;i.left=-se*ge,i.right=se*ge,i.top=se,i.bottom=-se,i.updateProjectionMatrix();let Pe=.72+U.open*.33+U.align*.18-U.close*.35;j.set((innerWidth<760?-1:-5)-X*5,5.5-U.descend*1.8+X*.5,X*6),i.position.set(j.x+Math.sin(Pe)*36,22-U.descend*8+X*11,j.z+Math.cos(Pe)*36),i.lookAt(j);let Ae=U.open*(1-U.close);M.forEach((Ee,O)=>{Ee.rotation.x=-Ae*1.48,Ee.position.y=Ae*(O%2)*.4}),y.forEach((Ee,O)=>{Ee.position.x=(O%2?1:-1)*U.descend*7.7*(1-U.close),Ee.position.y=O*3+Ae*O*.35});let ue=3,de=1+U.open*10-U.descend*7.4,Le=3;ue=ue*(1-U.spark),Le=3+U.spark*3,ue=ue*(1-U.returnHome)+U.returnHome*1.7,de=de*(1-U.returnHome)+U.returnHome*12.5,Le=Le*(1-U.returnHome)+U.returnHome*3,S.position.set(ue,de,Le),S.rotation.y=.3+U.descend*.7-U.returnHome*.9,S.scale.setScalar(1.2),A.position.set(3,.85+U.open*10-U.descend*7.4+U.returnHome*7.4,3),D.forEach((Ee,O)=>{Ee.position.set(2.1+O*1.8,(A.position.y+12)/2,3),Ee.scale.y=Math.max(.2,12-A.position.y)}),w.visible=U.spark<.75,G.visible=U.spark>.1,G.scale.setScalar(.3+U.spark*.7),P.position.set(0,4.7+U.close*8,6*(1-U.close)),P.rotation.y=Pe,P.scale.setScalar(.28+U.descend*.82-U.close*.5),b.rotation.set(W*5,W*9,W*2),b.scale.setScalar(.25+U.spark*.9),b.material=h(U.spark>.5?"#ffe8a3":"#526c71",U.spark>.5),E.forEach((Ee,O)=>{Ee.rotation.set((1-U.align)*(O+1)*.8,(1-U.align)*(O+1)*1.1,W*(1-U.align)*(O%2?1:-1)*6),Ee.scale.setScalar(.6+U.spark*.4)}),k.visible=U.descend>.6&&U.close<.5,z.forEach((Ee,O)=>Ee.rotation.z=U.spark*(W-.4)*28*(O%2?1:-1)),re.rotation.x=-.2-U.align*.6,re.rotation.y=-U.transmit*.7,N.rotation.y=Math.sin(I*.35)*.3,ke.forEach((Ee,O)=>Ee.forEach(xe=>xe.visible=U.village>(O+.3)/13)),L.forEach((Ee,O)=>Ee.visible=U.village>O/38+.05),He.forEach((Ee,O)=>{Ee.visible=U.village>O/13,Ee.position.y=3+Math.floor(O/4)*.55+(I*.45+O*.3)%2.2,Ee.scale.setScalar(.3+(I*.45+O*.3)%2.2*.2)}),ie.visible=W>=.65&&W<.8,ie.children.forEach((Ee,O)=>{let xe=Math.max(0,U.transmit-O*.014);Ee.position.copy(it.getPoint(xe)),Ee.visible=U.transmit>=O*.014}),ye.visible=W>.88&&W<.965,ye.children.forEach((Ee,O)=>{let xe=Math.max(0,U.reply-O*.018);Ee.position.copy(ne.getPoint(xe)),Ee.visible=U.reply>=O*.018}),Oe.visible=U.transmit>0,Oe.scale.setScalar(1),Oe.position.y=15+U.transmit*2,Oe.children.forEach((Ee,O)=>{let xe=O/52*Math.PI*2;Ee.position.set(Math.cos(xe)*(1+U.transmit*12),0,Math.sin(xe)*(1+U.transmit*12)),Ee.visible=U.transmit<.85}),Ce.visible=U.reply>.9,Ce.position.set(2.4+Math.sin(I*.6)*.3,13.6+Math.sin(I*.8)*.2,3.5),Ce.rotation.y=Math.sin(I*3)*.4,je.rotation.y=I*.012+W*.12,s.intensity=1.7+U.dawn*1.5,o.intensity=2.3+U.dawn*2;let Ne=new Me("#0b1720").lerp(new Me("#789d96"),U.dawn*.75);if(t.setClearColor(Ne,1),n.fog.color.copy(Ne),t.render(n,i),e.dataset.scrollProgress=W.toFixed(3),e.dataset.storyBeat=String(U.chapter+1),e.dataset.litWindows=String(ke.filter((Ee,O)=>U.village>(O+.3)/13).length),U.chapter!==we){we=U.chapter;let Ee=Uv[U.chapter],O=document.querySelector(".lk-caption");O.querySelector("small").textContent=Ee[0],O.querySelector("h2").textContent=Ee[1],O.querySelector("p").textContent=Ee[2]}let _e=Xo((W-.09)/.04);ce.set(".lk-caption",{opacity:_e,y:20*(1-_e)}),document.querySelector(".lk-stage")?.classList.toggle("is-ending",W>.72),document.querySelector(".lk-stage")?.classList.toggle("is-dawn",U.dawn>.5),ce.set(".lk-hero",{opacity:1-Xo(W/.12),y:-Xo(W/.12)*50}),ce.set(".lk-transmission",{opacity:1-Xo(W/.15)}),ce.set(".lk-coordinate",{opacity:1-U.open}),ce.set(".lk-track i",{scaleX:W}),document.querySelector(".lk-progress-count").textContent=`${String(U.chapter+1).padStart(2,"0")} / 07`,document.querySelector(".lk-depth b").textContent=Math.round(1240-U.descend*230+U.returnHome*230).toLocaleString()}function _t(){t.setSize(Math.min(680,Math.round(e.clientWidth*.48)),Math.min(460,Math.round(e.clientHeight*.48)),!1),H()}_t();let ct=r?void 0:ce.timeline({scrollTrigger:{trigger:".lk-journey",start:"top top",end:"bottom bottom",scrub:.9},defaults:{ease:"none"}}).to(ft,{p:1,duration:1}),Je=new IntersectionObserver(([I])=>{qe=I.isIntersecting,qe&&F()});Je.observe(e);function Fe(I){Ze=0,!(document.hidden||!qe)&&(I-De>40&&(H(r?0:I*.001),De=I),F())}function F(){!Ze&&!document.hidden&&qe&&!r&&(Ze=requestAnimationFrame(Fe))}let T=()=>{document.hidden?(cancelAnimationFrame(Ze),Ze=0):F()};return document.addEventListener("visibilitychange",T),window.addEventListener("resize",_t),F(),()=>{cancelAnimationFrame(Ze),Je.disconnect(),ct?.scrollTrigger?.kill(),ct?.kill(),window.removeEventListener("resize",_t),document.removeEventListener("visibilitychange",T),l.dispose(),b.geometry.dispose(),c.forEach(I=>I.dispose()),t.dispose(),t.domElement.remove()}}var nl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ji=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},t2=new Li(-1,1,1,-1,0,1),Vm=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},n2=new Vm,eo=class{constructor(e){this._mesh=new Ue(n2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,t2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qo=class extends Ji{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ut?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Ut({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new eo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc=class extends Ji{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Xd=class extends Ji{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var il=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qo(nl),this.copyPass.material.blending=hr,this.clock=new hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(o instanceof Vc?n=!0:o instanceof Xd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qd=class extends Ji{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Me}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Hv={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var to=class r extends Ji{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new gn(s,o,{type:wn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new gn(s,o,{type:wn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Hv;this.highPassUniforms=ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ut({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1),new C(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(nl.uniforms),this.blendMaterial=new Ut({uniforms:this.copyUniforms,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,premultipliedAlpha:!0,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new bn,this._fsQuad=new eo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ut({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ut({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

				}`})}};to.BlurDirectionX=new ve(1,0);to.BlurDirectionY=new ve(0,1);var Gc={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};var rl=class extends Ji{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Gc.uniforms),this.material=new Ba({name:Gc.name,uniforms:this.uniforms,vertexShader:Gc.vertexShader,fragmentShader:Gc.fragmentShader}),this._fsQuad=new eo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},It.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var no=class extends jt{constructor(){super(),this.name="RoomEnvironment";let e=new Wt;e.deleteAttribute("uv");let t=new xt({side:In}),n=new xt,i=new Ii(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ue(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ar(e,n,6),a=new yn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ue(e,sl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ue(e,sl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ue(e,sl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ue(e,sl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ue(e,sl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ue(e,sl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function sl(r){return new ur({color:0,emissive:16777215,emissiveIntensity:r})}var Yo=Math.PI*2,i2=new Os([[0,.085],[.2,.085],[.33,.07],[.37,0],[.45,0],[.5,.06],[.62,.17],[.8,.33],[.93,.53],[1,.72],[1.03,.86]].map(([r,e])=>new ve(r,e))),r2=new Os([[0,.17],[.25,.175],[.45,.205],[.62,.28],[.78,.4],[.89,.56],[.95,.72],[.975,.86]].map(([r,e])=>new ve(r,e))),s2=Array.from({length:257},(r,e)=>i2.getPointAt(e/256)),Vv=Array.from({length:257},(r,e)=>r2.getPointAt(e/256));function Gv(r,e){let t=Math.max(0,Math.min(1,e))*256,n=Math.min(255,Math.floor(t)),i=t-n;return{r:r[n].x+(r[n+1].x-r[n].x)*i,y:r[n].y+(r[n+1].y-r[n].y)*i}}function ys(r,e,t,n=new C){let{r:i,y:s}=Gv(t?Vv:s2,e);return n.set(Math.cos(r)*i,s,Math.sin(r)*i)}function Wv(r){return Gv(Vv,r)}var Wm=r=>.38+.045*Math.sin(3*r+1.1)+.022*Math.sin(7*r+2.3)+.007*Math.sin(19*r),Xm=r=>.68+.06*Math.sin(2*r+.4)+.03*Math.sin(5*r+4.1)+.008*Math.sin(17*r+1),qm=11,o2=()=>((qm=qm*16807%2147483647)-1)/2147483646;function ol(r,e){return Array.from({length:r},(t,n)=>e+(n+.5+(o2()-.5)*.55)*(Yo/r))}var Kr=[{lower:()=>0,upper:Wm,low:0,high:.38,cracks:ol(2,.6),label:"FOOT"},{lower:Wm,upper:Xm,low:.38,high:.68,cracks:ol(5,.2),label:"BODY"},{lower:Xm,upper:()=>1,low:.68,high:1,cracks:ol(6,.9),label:"RIM"}];function zv(r,e,t){let n=Kr[r],i=n.cracks.length,s=n.cracks[e%i]+Math.floor(e/i)*Yo,o=r*3.1+e%i*1.7;return s+.11*Math.sin(t*3.2+o)+.035*Math.sin(t*11+o*2)+.012*Math.sin(t*29+o)}function Wc(r,e,t,n){let i=Kr[r],s=zv(r,e,n),o=zv(r,e+1,n),a=s+(o-s)*t,l=i.lower(a),c=i.upper(a);return{theta:a,t:r===0?c*n:l+(c-l)*n}}function a2(r,e){let t=r===0?30:16,n=r===0?12:10,i=[],s=[],o=[],a=new vt,l=new C,c=new C,h=new C,u=new C,f=L=>{let A=i.length/3;for(let D=0;D<=n;D++)for(let B=0;B<=t;B++){let{theta:G,t:z}=Wc(r,e,B/t,D/n);ys(G,z,L,l),i.push(l.x,l.y,l.z),s.push((G/Yo%1+1)%1,z)}return A},d=f(!1);for(let L=0;L<n;L++)for(let A=0;A<t;A++){let D=d+L*(t+1)+A;o.push(D,D+t+1,D+1,D+1,D+t+1,D+t+2)}a.addGroup(0,o.length,0);let g=o.length,p=f(!0);for(let L=0;L<n;L++)for(let A=0;A<t;A++){let D=p+L*(t+1)+A;o.push(D,D+1,D+t+1,D+1,D+t+2,D+t+1)}a.addGroup(g,o.length-g,1);let _=o.length,m=new C,x=Wc(r,e,.5,.5);ys(x.theta,x.t,!1,m).add(ys(x.theta,x.t,!0,l)).multiplyScalar(.5);let v=L=>{let A=i.length/3;for(let[D,B]of L){let{theta:G,t:z}=Wc(r,e,D,B);ys(G,z,!1,l),i.push(l.x,l.y,l.z),s.push(D,0),ys(G,z,!0,l),i.push(l.x,l.y,l.z),s.push(D,1)}for(let D=0;D<L.length-1;D++){let B=A+D*2;for(let G of[[B,B+2,B+1],[B+1,B+2,B+3]]){c.fromArray(i,G[0]*3),h.fromArray(i,G[1]*3),u.fromArray(i,G[2]*3);let z=h.clone().sub(c).cross(u.clone().sub(c)),k=c.clone().add(h).add(u).multiplyScalar(1/3).sub(m);o.push(...z.dot(k)>=0?G:[G[0],G[2],G[1]])}}},y=(L,A)=>Array.from({length:L+1},(D,B)=>A(B/L));v(y(t,L=>[L,1])),(r!==0||Kr[0].cracks.length>1)&&(v(y(n,L=>[0,L])),v(y(n,L=>[1,L]))),r!==0&&v(y(t,L=>[L,0])),a.addGroup(_,o.length-_,2),a.setIndex(o),a.setAttribute("position",new lt(i,3)),a.setAttribute("uv",new lt(s,2)),a.computeVertexNormals();let M=0,S=new C,w=new C;for(let L=0;L<g;L+=3){c.fromArray(i,o[L]*3),h.fromArray(i,o[L+1]*3),u.fromArray(i,o[L+2]*3);let A=h.clone().sub(c).cross(u.clone().sub(c)),D=A.length()/2;M+=D,S.addScaledVector(A.normalize(),D),w.addScaledVector(c.add(h).add(u).multiplyScalar(1/3),D)}w.multiplyScalar(1/M).lerp(m,.5),S.normalize(),a.translate(-w.x,-w.y,-w.z);let P=new _n().setFromUnitVectors(S,new C(0,1,0)),b=1/0,E=a.getAttribute("position");for(let L=0;L<E.count;L++)b=Math.min(b,l.fromBufferAttribute(E,L).applyQuaternion(P).y);return{geometry:a,home:w,normal:S,restLift:-b,area:M,band:r,label:Kr[r].label}}function Gm(r,e,t,n=!1){let i=new C,s=new C,o=Array.from({length:e+(n?0:1)},(l,c)=>{let{theta:h,t:u}=r(c/e);ys(h,u,!1,i),ys(h,u,!0,s);let f=i.clone().sub(s).normalize();return t?i.clone().addScaledVector(f,.004):s.clone().addScaledVector(f,-.004)}),a=new un(o,n,"centripetal");return{curve:a,length:a.getLength(),outer:t}}function Xv(){qm=11,Kr[0].cracks=ol(2,.6),Kr[1].cracks=ol(5,.2),Kr[2].cracks=ol(6,.9);let r=[];Kr.forEach((n,i)=>n.cracks.forEach((s,o)=>r.push(a2(i,o))));let e=[];for(let n of[!0,!1])e.push(Gm(i=>({theta:i*Yo,t:Wm(i*Yo)}),160,n,!0)),e.push(Gm(i=>({theta:i*Yo,t:Xm(i*Yo)}),160,n,!0)),Kr.forEach((i,s)=>i.cracks.forEach((o,a)=>e.push(Gm(l=>Wc(s,a,0,s===0?.02+l*.98:l),28,n))));let t=Kr[2].cracks.map((n,i)=>{let{theta:s}=Wc(2,i,0,1),o=ys(s,1,!1),a=ys(s,1,!0);return[o,o.clone().lerp(a,.5).add(new C(0,.004,0)),a]});for(let n of t){let i=new un(n);e.push({curve:i,length:i.getLength(),outer:!0})}return{shards:r,seams:e}}var Yd=[["THE RITUAL","Forty-one winters of tea.","Every morning began with this bowl. Warm in two hands, glazed the colour of first snow, never once chipped.","made by hand, 1984"],["THE FALL","It took less than a second.","A sleeve catches the shelf. The bowl tips, turns once in the air, and a lifetime of mornings becomes thirteen pieces.","0.41 seconds"],["THE GATHERING","Keep every piece.","Nothing is swept away. Each fragment is lifted, numbered and weighed. Even the smallest one belongs to the whole.","13 of 13 found"],["THE MENDING","Repair is a kind of patience.","Joined with sap from the urushi tree, the pieces cure for weeks in a damp, dark box. You cannot hurry lacquer.","day 47, still waiting"],["THE GOLD","Don\u2019t hide the break.","Powdered gold is brushed into every seam. The cracks become the most beautiful lines on the bowl.","every crack, illuminated"],["THE RETURN","More beautiful for having been broken.","Whole again, but not the same. The bowl now carries its history where everyone can see it.","nothing hidden"],["THE MORNING","And tomorrow, tea.","The kettle sings. The bowl is warm in two hands again, and every morning now begins with gold.","the ritual continues"]],$d=[0,.12,.26,.4,.58,.74,.88],$o=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),dn=r=>(r=$o(r),r*r*(3-2*r)),qn=(r,e,t)=>$o((r-e)/(t-e));function qv(r){let e=$o(r),t=0;return $d.forEach((n,i)=>{e>=n&&(t=i)}),{p:e,chapter:t,wobble:dn(qn(e,.12,.165)),drop:qn(e,.165,.195),shatter:qn(e,.195,.262),gather:dn(qn(e,.268,.355)),labels:dn(qn(e,.31,.345))*(1-dn(qn(e,.385,.405))),mend:qn(e,.405,.555),urushi:dn(qn(e,.548,.6)),dust:qn(e,.6,.705),gold:dn(qn(e,.625,.725)),sweep:dn(qn(e,.7,.86)),turn:dn(qn(e,.74,.88)),settle:dn(qn(e,.86,.92)),tea:dn(qn(e,.905,.975)),dark:dn(qn(e,.15,.2))*(1-dn(qn(e,.86,.94))),deep:dn(qn(e,.58,.64))*(1-dn(qn(e,.8,.88)))}}var Ki=(r,e,t)=>new C(r,e,t),qc=1.6,Xc=Ki(0,.43,0),Ym=Ki(0,qc+Xc.y,0),l2=Ki(0,qc+.75,0),Zd=Ki(1.3,Ym.y+.02,.82),io=Ki(2.35,.95,2.45);function Yc(r,e,t,n=!0){let i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"));let s=new Cr(i);return n&&(s.colorSpace=Kt),s.wrapS=Aa,s.anisotropy=4,s}var jr=7,dt=()=>((jr=jr*16807%2147483647)-1)/2147483646;function Yv(r){return jr=r?91:7,Yc(1024,512,e=>{let t=e.createLinearGradient(0,512,0,0);r?(t.addColorStop(0,"#c9c2ad"),t.addColorStop(.3,"#e3dccb"),t.addColorStop(.85,"#ece6d8"),t.addColorStop(1,"#d8a679")):(t.addColorStop(0,"#9c7656"),t.addColorStop(.2,"#a98262"),t.addColorStop(.235,"#e6dccb"),t.addColorStop(.75,"#efe8db"),t.addColorStop(.93,"#e4c7a6"),t.addColorStop(1,"#c98b5c")),e.fillStyle=t,e.fillRect(0,0,1024,512);for(let n=0;n<70;n++){let i=dt()*1024,s=40+dt()*330,o=10+dt()*40,a=e.createRadialGradient(i,s,0,i,s,o);a.addColorStop(0,`rgba(${r?"226,214,192":"236,220,196"},${.12+dt()*.16})`),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(i-o,s-o,o*2,o*2)}for(let n=0;n<2600;n++){let i=dt()*1024,s=dt()*(r?512:395);e.fillStyle=dt()>.55?`rgba(92,55,32,${.25+dt()*.5})`:`rgba(255,252,244,${.3+dt()*.5})`,e.beginPath(),e.arc(i,s,dt()*1.6+.3,0,7),e.fill()}if(r){e.strokeStyle="rgba(150,104,62,.28)",e.lineWidth=5,e.beginPath(),e.moveTo(0,512-.6*512),e.lineTo(1024,512-.6*512),e.stroke();let n=e.createLinearGradient(0,512,0,300);n.addColorStop(0,"rgba(146,150,120,.45)"),n.addColorStop(1,"rgba(146,150,120,0)"),e.fillStyle=n,e.fillRect(0,300,1024,212)}else{for(let n=0;n<46;n++){let i=dt()*1024,s=20+dt()*70,o=4+dt()*9,a=e.createLinearGradient(0,0,0,s);a.addColorStop(0,"rgba(196,128,82,.75)"),a.addColorStop(1,"rgba(220,170,128,0)"),e.fillStyle=a,e.beginPath(),e.ellipse(i,s*.45,o,s*.55,0,0,7),e.fill()}for(let n=0;n<1600;n++)e.fillStyle=`rgba(${dt()>.5?"60,36,20":"214,178,140"},${.2+dt()*.3})`,e.fillRect(dt()*1024,400+dt()*112,1.4,1.4)}})}function $v(r){return jr=3,Yc(256,128,e=>{e.fillStyle="rgb(70,70,70)",e.fillRect(0,0,256,128),r||(e.fillStyle="rgb(235,235,235)",e.fillRect(0,128-.22*128,256,.22*128));for(let t=0;t<400;t++){let n=Math.round(110+dt()*80);e.fillStyle=`rgb(${n},${n},${n})`,e.fillRect(dt()*256,dt()*128,2,2)}},!1)}function c2(){return jr=19,Yc(256,64,r=>{r.fillStyle="#c79c76",r.fillRect(0,0,256,64);for(let e=0;e<900;e++)r.fillStyle=`rgba(${dt()>.5?"120,74,44":"232,204,170"},${.3+dt()*.4})`,r.fillRect(dt()*256,dt()*64,1.5,1.5);r.fillStyle="#efe6d6",r.fillRect(0,0,256,5),r.fillRect(0,59,256,5)})}function u2(){return jr=37,Yc(256,256,r=>{let e=r.createRadialGradient(128,128,10,128,128,128);e.addColorStop(0,"#86a346"),e.addColorStop(.75,"#6c8a33"),e.addColorStop(1,"#4f6726"),r.fillStyle=e,r.fillRect(0,0,256,256);for(let t=0;t<900;t++){let n=dt()*6.283,i=Math.sqrt(dt())*110;r.fillStyle=`rgba(${dt()>.4?"214,226,160":"120,146,62"},${.18+dt()*.35})`,r.beginPath(),r.arc(128+Math.cos(n)*i,128+Math.sin(n)*i,.6+dt()*2.2,0,7),r.fill()}})}function Jd(r){return Yc(64,64,e=>{let t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,r),t.addColorStop(.35,r.replace(/[\d.]+\)$/,".45)")),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64)})}var ro=[[0,[.3,5.3,7.2],[-1.3,2,0]],[.1,[1.6,4.6,6.5],[-.95,1.95,.2]],[.165,[3.6,3.1,7.4],[.2,1.75,.7]],[.2,[5.4,1.8,8.2],[1.3,1.05,2]],[.262,[6.6,3.4,9.8],[1,1.2,2]],[.33,[-.35,10,6],[-.45,0,3.15]],[.4,[-.4,9.7,5.8],[-.5,0,3.1]],[.48,[-2.6,4.2,7.8],[-.6,1.9,.8]],[.56,[.4,3.5,6.4],[-.7,2.3,0]],[.66,[-1.6,3.6,5.4],[-.75,2.3,0]],[.76,[2.3,4.6,7.6],[0,3.45,0]],[.84,[0,8.4,4.9],[0,3.3,.5]],[.92,[-.2,5.2,6.6],[-1,2,0]],[1,[.3,5.3,7.2],[-1.3,2,0]]];function Zv(r,e){let t=document.querySelector(".gs-world"),n=document.querySelector(".gs-stage");if(!t||!n)return;let i;try{i=new li({antialias:!0,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".gs-journey")?.style.setProperty("height","100svh");return}t.append(i.domElement),t.classList.add("has-webgl"),i.setPixelRatio(Math.min(devicePixelRatio,e?1.5:1.75)),i.outputColorSpace=Kt,i.toneMapping=Xi,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Sh;let s=new jt,o=new Me;s.background=o;let a=new qr(i),l=new no,c=a.fromScene(l,.035);s.environment=c.texture;let h=new kt(30,1,.1,80),u=new Pr(16774370,9075302,1.1);s.add(u);let f=new hn(16769725,2.6);f.position.set(4.5,8,5),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.bias=-4e-4,f.shadow.normalBias=.02,f.shadow.radius=6,Object.assign(f.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:22}),s.add(f,f.target);let d=new hn(14672882,1.2);d.position.set(-5,4,-6),s.add(d);let g=new Ii(16766874,0,6,1.8);s.add(g);let p=new Ue(new On(60,60),new cc({opacity:.2}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,s.add(p);let _=Jd("rgba(255,214,150,1)"),m=new Ue(new On(9,9),new bn({map:_,transparent:!0,opacity:0,depthWrite:!1,blending:Hs}));m.rotation.x=-Math.PI/2,m.position.set(.6,.003,1.2),s.add(m);let x=new xt({color:3091239,roughness:.78,envMapIntensity:.3}),v=new $e,y=new Ue(new cn(1.25,1.32,qc-.06,96),x);y.position.y=(qc-.06)/2;let M=new Ue(new cn(1.34,1.34,.06,96),x);M.position.y=qc-.03;for(let Z of[y,M])Z.castShadow=!0,Z.receiveShadow=!0,v.add(Z);s.add(v);let{shards:S,seams:w}=Xv(),P=new cr({map:Yv(!1),roughnessMap:$v(!1),roughness:1,clearcoat:.55,clearcoatRoughness:.28,sheen:.2,sheenColor:new Me(16773084)}),b=new cr({map:Yv(!0),roughnessMap:$v(!0),roughness:1,clearcoat:.6,clearcoatRoughness:.2}),E=new xt({map:c2(),roughness:.95}),L=S.reduce((Z,q)=>Z+q.area,0),A=S.length,D=S.map((Z,q)=>q).sort((Z,q)=>S[Z].band-S[q].band||Z-q),B=Ki(0,1,0);jr=29;let G=S.map((Z,q)=>{let me=new Ue(Z.geometry,[P,b,E]);me.castShadow=!0,me.receiveShadow=!0,s.add(me);let Be=Z.home.clone().sub(Xc),mt=Z.normal.clone().setY(0).normalize().add(Ki(dt()-.5,0,dt()-.5).multiplyScalar(.9)).normalize().multiplyScalar(.9+dt()*1.6).add(Ki(0,.15+dt()*1.3,0)),Lt=new _n().setFromAxisAngle(Ki(dt()-.5,dt()-.5,dt()-.5).normalize(),.8+dt()*2.2),on=e?3:5,$t=D.indexOf(q),Ot=$t%on,ot=Math.floor($t/on),Bt=e?Ki((Ot-1)*.84-.45+ot%2*.12,Z.restLift+.004,1.95+ot*.78):Ki((Ot-2)*.98+.55+ot%2*.2,Z.restLift+.004,2+ot*.86),be=new _n().setFromAxisAngle(B,(dt()-.5)*.7).multiply(new _n().setFromUnitVectors(Z.normal,B)),at=Z.area/L*312;return{mesh:me,local:Be,burst:mt,spin:Lt,gridPos:Bt,gridQuat:be,slot:$t,grams:at,bob:dt()*6.28}}),z=new cr({color:2822924,metalness:.1,roughness:.5,clearcoat:.6,emissive:0}),k=new $e;s.add(k);let K=w.map(Z=>{let q=Math.max(6,Math.round(Z.length*70)),me=new oi(Z.curve,q,Z.outer?.0105:.009,6,!1),Be=new Ue(me,z);return Be.position.copy(Xc).negate(),Be.castShadow=!1,k.add(Be),{mesh:Be,total:me.index.count,step:36}}),re=w.filter(Z=>Z.outer).reduce((Z,q)=>Z+q.length,0)*6,N=e?900:1600,oe=new Float32Array(N*3),ke=new Float32Array(N*3),He=new Float32Array(N),Ye=w.filter(Z=>Z.outer),it=new C;jr=53;for(let Z=0;Z<N;Z++){let q=dt()*Ye.reduce((mt,Lt)=>mt+Lt.length,0),me=Ye[0];for(let mt of Ye){if(q<mt.length){me=mt;break}q-=mt.length}me.curve.getPointAt(dt(),it).sub(Xc),it.toArray(oe,Z*3);let Be=dt()*Math.PI*2,Ke=.8+dt()*1.5;ke.set([Math.cos(Be)*Ke,.5+dt()*1.9,Math.sin(Be)*Ke],Z*3),He[Z]=dt()}let ne=new vt,ie=new Float32Array(N*3);ne.setAttribute("position",new Nt(ie,3));let ye=new si({size:.05,map:Jd("rgba(255,214,120,1)"),color:16765834,transparent:!0,opacity:0,depthWrite:!1,blending:Hs,sizeAttenuation:!0}),Oe=new Jn(ne,ye);Oe.frustumCulled=!1,s.add(Oe);let Ce=140,je=new Float32Array(Ce*3);jr=61;for(let Z=0;Z<Ce;Z++)je.set([(dt()-.5)*3.4,dt()*1.6,(dt()-.5)*3.4],Z*3);let ft=new vt,we=new Float32Array(Ce*3);ft.setAttribute("position",new Nt(we,3));let qe=new si({size:.028,color:15656146,transparent:!0,opacity:0,depthWrite:!1}),Ze=new Jn(ft,qe);Ze.frustumCulled=!1,s.add(Ze);let De=260,j=new vt,H=new Float32Array(De*3);jr=71;for(let Z=0;Z<De;Z++)H.set([(dt()-.5)*9,dt()*5,(dt()-.5)*7],Z*3);let _t=new Float32Array(H);j.setAttribute("position",new Nt(_t,3));let ct=new si({size:.022,map:Jd("rgba(255,244,222,1)"),transparent:!0,opacity:.5,depthWrite:!1}),Je=new Jn(j,ct);Je.frustumCulled=!1,s.add(Je);let Fe=new cr({map:u2(),roughness:.55,clearcoat:.4,clearcoatRoughness:.3}),F=new Ue(new Mo(1,72),Fe);F.rotation.x=-Math.PI/2;let T=new $e;T.add(F),s.add(T);let I=Jd("rgba(255,255,255,1)"),U=Array.from({length:7},(Z,q)=>{let me=new Us(new Ns({map:I,transparent:!0,opacity:0,depthWrite:!1,color:16777215}));return s.add(me),{sprite:me,offset:q/7}}),W=new il(i);W.addPass(new qd(s,h));let X=new to(new ve(512,512),0,.5,.9);W.addPass(X),W.addPass(new rl);let ge=new un(ro.map(Z=>Ki(...Z[1])),!1,"centripetal"),se=new un(ro.map(Z=>Ki(...Z[2])),!1,"centripetal"),Pe=new C,Ae=new C;function ue(Z){let q=0;for(;q<ro.length-2&&Z>ro[q+1][0];)q++;let me=$o((Z-ro[q][0])/(ro[q+1][0]-ro[q][0])),Be=(q+me)/(ro.length-1);ge.getPoint(Be,Pe),se.getPoint(Be,Ae)}let de=new C,Le=new _n,Ne=new Xn,_e=new _n().setFromEuler(new Xn(.35,.9,-1.45));function Ee(Z,q){if(Z.drop<=0){let me=Z.wobble;de.lerpVectors(Ym,Zd,me*me);let Be=Math.sin(me*22)*.09*me*(1-me);Ne.set(Be*.6,Z.p*1.6+me*.5,Be-me*me*.55),Le.setFromEuler(Ne)}else if(Z.drop<1){let me=Z.drop;de.lerpVectors(Zd,io,1-(1-me)*(1-me)),de.y=Zd.y+.18*me-(Zd.y+.18-io.y)*me*me,Le.setFromEuler(Ne.set(0,.165*1.6+.5,-.55)).slerp(_e,me)}else de.copy(io),Le.copy(_e);if(Z.mend>0){de.copy(l2).lerp(Ym,Z.settle),de.y+=Math.sin(q*.9)*.02*(1-Z.settle);let me=-.4+Z.mend*.6+Z.turn*Math.PI*1.3+Z.settle*.3,Be=Math.sin(Z.turn*Math.PI)*.32;Le.setFromEuler(Ne.set(Be,me,0))}}let O=new C,xe=new _n,pe=new C,Ie=new C,fe=new _n,le=new _n,$=(Z,q)=>q.copy(Z.local).applyQuaternion(_e).add(io).add(Z.burst),J=(Z,q)=>q.copy(Z.spin).multiply(_e),V=Z=>n.querySelector(Z),he=Array.from(n.querySelectorAll(".gs-label"));he.forEach((Z,q)=>{let me=G.find(Ke=>Ke.slot===q),Be=S[G.indexOf(me)];Z.querySelector("b").textContent=`${Be.label} \xB7 ${me.grams.toFixed(1)} g`});let Se=V(".gs-day b"),st=Array.from(n.querySelectorAll(".gs-steps li")),Te=V(".gs-meter b"),tt=V(".gs-meter i"),We=V(".gs-meter small");We&&(We.textContent=`OF ${re.toFixed(1)} CM`);let rt=V(".gs-hud-chapter"),zt=V(".gs-hud-count"),pt=Array.from(n.querySelectorAll(".gs-dots i")),ae=new Me("#ebe3d5"),Ge=new Me("#16130f"),Xe=new Me("#0a0908"),nt=new Me("#efe5d3"),ut=new Me("#1f1b16"),pn=new Me("#efe6d6"),Ct=new Me(2822924),Gn=new Me(14725724),_i=new Me(10118418),Gt={x:0,y:0,tx:0,ty:0},Tn=-1,Pn={p:r?.975:0};function rr(Z=0){let q=qv(Pn.p),me=q.p;if(Ee(q,Z),G.forEach(be=>{let{mesh:at}=be;if(O.copy(be.local).applyQuaternion(Le).add(de),xe.copy(Le),q.drop<1||q.mend>=1){at.position.copy(O),at.quaternion.copy(xe);return}if(q.gather<=0){let Dt=1-Math.pow(1-q.shatter,3.2);pe.copy(be.local).applyQuaternion(_e).add(io),$(be,Ie),at.position.lerpVectors(pe,Ie,Dt),at.position.y+=Math.sin(Dt*Math.PI)*.25+Math.sin(Z*.8+be.bob)*.025*Dt,fe.copy(_e),J(be,le),at.quaternion.slerpQuaternions(fe,le,Dt);return}if(q.mend<=0){let Dt=dn(q.gather*1.5-be.slot/A*.5);$(be,pe),pe.y+=Math.sin(Z*.8+be.bob)*.025*(1-Dt),at.position.lerpVectors(pe,be.gridPos,Dt),at.position.y+=Math.sin(Dt*Math.PI)*.5,J(be,fe),at.quaternion.slerpQuaternions(fe,be.gridQuat,Dt);return}let an=dn((q.mend-be.slot/A*.72)/.28);at.position.lerpVectors(be.gridPos,O,an),at.position.y+=Math.sin(an*Math.PI)*.7,at.quaternion.slerpQuaternions(be.gridQuat,xe,an)}),k.position.copy(de),k.quaternion.copy(Le),k.visible=q.urushi>0&&q.mend>=1,K.forEach((be,at)=>{let an=$o(q.urushi*1.6-at/K.length*.6);be.mesh.geometry.setDrawRange(0,Math.floor(be.total/be.step*an)*be.step)}),z.color.copy(Ct).lerp(Gn,q.gold),z.metalness=.1+q.gold*.9,z.roughness=.5-q.gold*.3,z.emissive.copy(_i).multiplyScalar(q.gold*(.45+.9*Math.sin(q.sweep*Math.PI))),Oe.visible=q.dust>0&&q.dust<1,Oe.visible){for(let be=0;be<N;be++){let at=dn(q.dust*1.55-He[be]*.55),an=(1-at)*2.6,Dt=ke[be*3],As=ke[be*3+2];pe.set(Dt*Math.cos(an)-As*Math.sin(an),ke[be*3+1]+Math.sin(Z+be)*.05*(1-at),Dt*Math.sin(an)+As*Math.cos(an)),Ie.fromArray(oe,be*3).applyQuaternion(Le).add(de),pe.add(de).lerp(Ie,at),pe.toArray(ie,be*3)}ne.attributes.position.needsUpdate=!0,ye.opacity=dn(q.dust*5)*(1-dn((q.dust-.8)/.2))}if(Ze.visible=q.shatter>0&&q.gather<1,Ze.visible){let be=1-Math.pow(1-q.shatter,3);for(let at=0;at<Ce;at++)we[at*3]=io.x+je[at*3]*be,we[at*3+1]=Math.max(.02,io.y-.6+je[at*3+1]*be-be*be*.6),we[at*3+2]=io.z+je[at*3+2]*be;ft.attributes.position.needsUpdate=!0,qe.opacity=.9*(1-q.gather)}for(let be=0;be<De;be++)_t[be*3]=H[be*3]+Math.sin(Z*.15+be)*.3,_t[be*3+1]=(H[be*3+1]+Z*.04+be*.01)%5,_t[be*3+2]=H[be*3+2]+Math.cos(Z*.12+be*1.3)*.3;j.attributes.position.needsUpdate=!0,ct.opacity=.55*(1-q.dark)+.25*q.dark;let Be=Math.max(1-dn(q.wobble*4),q.tea);if(T.visible=Be>.01,T.visible){let be=.2+Be*.5,{r:at,y:an}=Wv(be);T.position.copy(de),T.quaternion.copy(Le),F.position.set(0,an-Xc.y-.002,0),F.scale.setScalar(at*.995)}let Ke=Math.max(1-dn(q.wobble*3),q.tea)*(1-q.dark);U.forEach(({sprite:be,offset:at},an)=>{let Dt=(Z*.12+at)%1;be.visible=Ke>.01,be.position.set(de.x+Math.sin(Z*.7+an*2)*.18*Dt-.05,de.y+.35+Dt*1.5,de.z+Math.cos(Z*.5+an)*.12),be.scale.setScalar(.35+Dt*.9),be.material.opacity=Ke*Math.sin(Dt*Math.PI)*.22}),o.copy(ae).lerp(Ge,q.dark).lerp(Xe,q.deep),q.settle>0&&o.lerp(nt,1-q.dark),u.intensity=1.15-q.dark*.75,f.intensity=2.6-q.dark*1.5-q.deep*.6-q.labels*.5,d.intensity=1+q.dark*1.4,s.environmentIntensity=1-q.dark*.45-q.deep*.2,p.material.opacity=.2+q.dark*.35,m.material.opacity=q.dark*.22*(1-q.deep*.6),m.position.x=q.mend>0?0:.8,m.position.z=q.mend>0?.3:1.6;let mt=-1.2+q.sweep*Math.PI*1.4;g.position.set(de.x+Math.cos(mt)*2.2,de.y+1.4,de.z+Math.sin(mt)*2.2),g.intensity=(q.gold*2.2+Math.sin(q.sweep*Math.PI)*4.5)*(1-q.settle),X.strength=q.dark*(.03+q.gold*.55),X.enabled=X.strength>.02,ue(me),Gt.x+=(Gt.tx-Gt.x)*.06,Gt.y+=(Gt.ty-Gt.y)*.06;let Lt=t.clientWidth/Math.max(1,t.clientHeight);if(Lt<.9){let be=dn((me-.27)/.06)*(1-dn((me-.405)/.06));Ae.x=be>0?Ae.x:Ae.x*.3,Ae.y+=me<.1?.8*(1-dn(me/.1)):me>.9?-.55:0,Ae.z+=be*.55;let at=1.15+(.9-Lt)*1.1;Pe.sub(Ae).multiplyScalar(at+(.98-at)*be).add(Ae)}Pe.x+=Gt.x*.35+Math.sin(Z*.31)*.04,Pe.y+=-Gt.y*.2+Math.sin(Z*.43)*.03;let $t=q.shatter>0&&q.shatter<.25?(.25-q.shatter)*.25:0;Pe.x+=Math.sin(Z*61)*$t,Pe.y+=Math.cos(Z*53)*$t,h.position.copy(Pe),h.lookAt(Ae),W.render();let Ot=q.dark,ot=ut.clone().lerp(pn,Ot);if(n.style.setProperty("--gs-ink",`#${ot.getHexString()}`),n.style.setProperty("--gs-bg",`#${o.getHexString()}`),n.classList.toggle("is-dark",Ot>.5),q.labels>.001){let be=t.clientWidth,at=t.clientHeight;G.forEach(an=>{let Dt=he[an.slot];Dt&&(it.copy(an.mesh.position).project(h),Dt.style.transform=`translate(${(it.x+1)/2*be}px, ${(1-it.y)/2*at}px)`,Dt.style.opacity=String($o(q.labels*1.6-an.slot/A*.6)))})}else he.forEach(be=>be.style.opacity="0");Se&&(Se.textContent=String(Math.round(1+dn(q.mend*1.1)*46)).padStart(2,"0"));let Bt=q.gold>.05?3:q.urushi>.05?2:q.mend>.5?1:0;st.forEach((be,at)=>be.classList.toggle("is-active",at===Bt)),Te&&(Te.textContent=(re*q.gold).toFixed(1)),tt&&(tt.style.transform=`scaleX(${q.gold})`),q.chapter!==Tn&&(Tn=q.chapter,rt&&(rt.textContent=Yd[q.chapter][0]),zt&&(zt.textContent=`${String(q.chapter+1).padStart(2,"0")} / 07`),pt.forEach((be,at)=>be.classList.toggle("is-on",at<=q.chapter))),t.dataset.scrollProgress=me.toFixed(3),t.dataset.storyBeat=String(q.chapter+1)}function Or(){let Z=Math.max(1,t.clientWidth),q=Math.max(1,t.clientHeight);i.setSize(Z,q,!1),W.setPixelRatio(i.getPixelRatio()),W.setSize(Z,q),X.resolution.set(Z/2,q/2),h.aspect=Z/q,h.fov=Z/q<.9?40:30,h.updateProjectionMatrix(),rr(performance.now()*.001)}Or();let St;r||(St=ce.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".gs-journey",start:"top top",end:"bottom bottom",scrub:1.1}}),St.to(Pn,{p:1,duration:1},0),St.to(".gs-hero",{autoAlpha:0,y:-70,duration:.04,ease:"power1.in"},.02),St.to(".gs-hero-aside",{autoAlpha:0,duration:.03},.03),Yd.forEach((Z,q)=>{let me=n.querySelector(`.gs-chapter[data-index="${q}"]`);if(!me)return;let Be=$d[q]+(q===0?.068:.012),Ke=q===Yd.length-1?1.2:$d[q+1]-.012;St.fromTo(me,{autoAlpha:0},{autoAlpha:1,duration:.012},Be),St.fromTo(me.querySelectorAll(".gs-c"),{yPercent:115},{yPercent:0,stagger:6e-4,duration:.02,ease:"power3.out"},Be),St.fromTo(me.querySelectorAll(".gs-fade"),{autoAlpha:0,y:24},{autoAlpha:1,y:0,stagger:.004,duration:.018,ease:"power2.out"},Be+.008),Ke<1&&St.to(me,{autoAlpha:0,y:-28,duration:.012,ease:"power1.in"},Ke-.012)}),St.fromTo(".gs-flash",{opacity:0},{opacity:.9,duration:.003},.192),St.to(".gs-flash",{opacity:0,duration:.03,ease:"power2.out"},.196),St.fromTo(".gs-impact",{autoAlpha:0,scale:1.12},{autoAlpha:1,scale:1,duration:.012,ease:"power3.out"},.197),St.to(".gs-impact",{autoAlpha:0,scale:.96,duration:.02},.245),St.fromTo(".gs-process",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015},.43),St.to(".gs-process",{autoAlpha:0,duration:.012},.632),St.fromTo(".gs-meter",{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:.012},.6),St.to(".gs-meter",{autoAlpha:0,duration:.012},.735),St.to(".gs-track i",{scaleX:1,duration:1},0),St.to(".gs-scroll-hint",{autoAlpha:0,duration:.02},.02),ce.from(".gs-hero .gs-c",{yPercent:115,duration:1.3,stagger:.022,ease:"power4.out",delay:.25}),ce.from(".gs-hero .gs-fade, .gs-hero-aside",{autoAlpha:0,y:18,duration:1,stagger:.12,ease:"power2.out",delay:.75}),ce.from(".gs-nav",{autoAlpha:0,y:-12,duration:.8,delay:.4}),ce.utils.toArray(".gs-log article").forEach(Z=>ce.from(Z,{y:60,autoAlpha:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:Z,start:"top 88%"}})),ce.utils.toArray(".gs-seam-line path").forEach((Z,q)=>{let me=Z.getTotalLength();ce.fromTo(Z,{strokeDasharray:me,strokeDashoffset:me},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".gs-ending",start:q?"top 35%":"top 75%",end:"bottom bottom",scrub:1}})}),ce.from(".gs-ending .gs-c",{yPercent:115,stagger:.02,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:".gs-ending",start:"top 70%"}}));let R=Z=>{Gt.tx=(Z.clientX/innerWidth-.5)*2,Gt.ty=(Z.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",R,{passive:!0});let Y=!0,ee=0,te=new IntersectionObserver(([Z])=>{Y=Z.isIntersecting,Y&&Re()});te.observe(t);function Q(Z){ee=0,!(document.hidden||!Y)&&(rr(Z*.001),Re())}function Re(){!ee&&!document.hidden&&Y&&!r&&(ee=requestAnimationFrame(Q))}let ze=()=>{document.hidden?(cancelAnimationFrame(ee),ee=0):Re()};return document.addEventListener("visibilitychange",ze),window.addEventListener("resize",Or),Re(),()=>{cancelAnimationFrame(ee),te.disconnect(),St?.scrollTrigger?.kill(),St?.kill(),window.removeEventListener("resize",Or),window.removeEventListener("pointermove",R),document.removeEventListener("visibilitychange",ze),s.traverse(Z=>{let q=Z;q.geometry&&q.geometry.dispose();let me=Array.isArray(q.material)?q.material:q.material?[q.material]:[];for(let Be of me){for(let Ke of Object.values(Be))Ke instanceof Un&&Ke.dispose();Be.dispose()}}),c.dispose(),a.dispose(),l.dispose?.(),W.dispose(),i.dispose(),i.domElement.remove()}}var Qt=.25,$m=5,ji=()=>(($m=$m*16807%2147483647)-1)/2147483646,al=r=>$m=r,h2=new Wt(1,1,1);function d2(r){return{uTime:{value:0},uAmp:{value:0},uTail:{value:0},uLen:{value:r},uScale:{value:Qt}}}function Zm(r,e){let t=Math.max(0,Math.min(1,(e-r.uTail.value)/r.uLen.value));return Math.sin(r.uTime.value*1.5-t*4)*r.uAmp.value*Math.pow(1-t,2.2)}function f2(r,e){let t=r?new ur({color:16777215}):new bn({color:16777215});return e&&(t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uAmp, uTail, uLen, uScale;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float ws = clamp((instanceMatrix[3].x - uTail) / uLen, 0.0, 1.0);
          transformed.y += sin(uTime * 1.5 - ws * 4.0) * uAmp * pow(1.0 - ws, 2.2) / uScale;`)}),t}function Dr(r,e=!0,t,n=Qt){let i=new Ar(h2,f2(e,t),Math.max(1,r.length)),s=new Pt,o=new Me;return r.forEach(([a,l,c,h],u)=>{s.makeScale(n,n,n).setPosition(a*n,l*n,c*n),i.setMatrixAt(u,s),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}function $c(r){al(r.seed);let e=r.length,t=[],n=[],i=v=>v<.12?1+v*6:v<.62?1.7+Math.pow((v-.12)/.5,.9)*(e*.11):(1.7+e*.11)*(1-Math.pow((v-.62)/.38,2.2)*.62),s=[],o=(v,y,M)=>{let S=v/e,w=i(S),P=w*(y>0?.8:.95),b=w;return y*y/(P*P)+M*M/(b*b)<=1};for(let v=0;v<=e;v++){let y=v/e,M=Math.ceil(i(y))+1,S=-99;for(let w=-M;w<=M;w++)for(let P=-M;P<=M;P++){if(!o(v,w,P)||o(v,w+1,P)&&o(v,w-1,P)&&o(v,w,P+1)&&o(v,w,P-1)&&o(v+1,w,P)&&o(v-1,w,P))continue;S=Math.max(S,w);let b=i(y),E=w<-b*.2,L=E?r.belly:ji()>.82?r.back2:r.back;E&&y>.55&&Math.abs(P)%2===0&&(L="#7f8fb5"),!E&&y>.68&&w>b*.35&&ji()>.86&&(L="#e6dcc0"),y>.8&&Math.abs(w+b*.18)<.6&&(L="#262b5c"),t.push([v,w,P,L])}s.push(S)}let a=Math.round(e*.84),l=i(a/e),c=[];for(let v of[-1,1]){let y=Math.round(v*l*.93);c.push([a,0,y,"#ffffff"],[a+1,0,y,"#0b0d1f"])}for(let v=-Math.round(e*.16);v<=Math.round(e*.16);v++){let y=Math.round(5-Math.abs(Math.abs(v)-e*.09)*.6);for(let M=-y;M<=1;M++)t.push([M,0,v,Math.abs(v)>e*.13?r.back2:r.back])}let h=Math.round(e*.66),u=i(h/e);for(let v of[-1,1])for(let y=0;y<e*.34;y++){let M=v*(u+y),S=Math.round(3-y*.07);for(let w=-S;w<=S;w++)t.push([h-Math.round(y*.45)+w,Math.round(-u*.35-y*.22),Math.round(M),w===S?"#e6ecf5":r.back])}let f=Math.round(e*.32);for(let v=0;v<3;v++)t.push([f+v,s[f]+1,0,r.back]);let d=d2(e*Qt),g=new $e,p=Dr(t,!0,d),_=Dr(c,!1,d),m=Dr(n,!1,d);g.add(p,_,m);let x=e*Qt/2;for(let v of[p,_,m])v.position.x=-x;return d.uTail.value=0,{group:g,wave:d,top:v=>(s[Math.max(0,Math.min(e,Math.round(v)))]+1)*Qt,centre:x,eyeMesh:_,L:e}}function Jv(r){al(100+r);let e=["#ffe9c2","#f4b6a0","#9fd3c7","#e6ecf5","#ffcf8a"][r%5],t=["#c4506b","#3b3f7a","#ff8a3d","#1d8f9a","#7a2d55"][r%5],n=3+r%2,i=3+(r%3===0?1:0),s=[],o=[];for(let h=0;h<n;h++)for(let u=0;u<i;u++)for(let f=0;f<3;f++)s.push([h,u,f,e]);for(let h=0;h<2;h++)for(let u=-1+h;u<=n-h;u++)for(let f=-1+h;f<=3-h;f++)s.push([u,i+h,f,t]);s.push([n-1,i+2,1,"#5a5aa0"],[n-1,i+3,1,"#5a5aa0"]),o.push([1,1,3,"#ffd34d"]),n>3&&o.push([2,1,3,"#ffd34d"]),o.push([n,1,1,"#ffd34d"]);let a=new $e,l=Dr(s,!0,void 0,Qt*.9),c=Dr(o,!1,void 0,Qt*.9);for(let h of[l,c])h.position.set(-n/2*Qt*.9,0,-1.5*Qt*.9);return a.add(l,c),{group:a,windows:c.material,chimney:new C((n/2-1)*Qt*.9,(i+4)*Qt*.9,0)}}function Kv(r,e,t){al(77);let n=[],i=[];for(let s=0;s<r;s++){let o=(ji()-.5)*e,a=-ji()*e*.55+e*.12,l=3+ji()*5;i.push(new C(o*Qt,t,a*Qt));for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)for(let u=0;u<=l*.7;u++){let f=c*c/(l*l)+h*h/(l*l)+u*u/(l*l*.4);f>1||f<.6&&u>0&&u<l*.5||n.push([Math.round(o+c),Math.round(t/Qt+u),Math.round(a+h),u>l*.45?"#ffffff":u>l*.2?"#e6ecf5":"#b9c4dc"])}}return{mesh:Dr(n,!0),puffs:i}}var jv="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",Qv=`
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
  }`;var Jm=[["I","THE TOWN ON THE WHALE","My town has forty-two people, twelve houses and one whale. None of us has ever touched the ground."],["II","OLD SILVERBACK","Grandma says the whale is two hundred and twelve years old. Lately she sleeps more than she swims."],["III","THE STORM","The storm came at noon. She did not climb above it the way she used to. She went straight through."],["IV","BELOW THE CLOUDS","Under the clouds there was a whole sea. None of us had ever seen that much water, or that much dark."],["V","THE SONG","That night she sang. It shook every lantern in town. And far away, something sang back."],["VI","THE YOUNG ONE","A young whale came out of the dark. One by one, our houses flew across to her back."],["VII","HOME","Silverback stayed. Trees grew where our houses stood. Now she is an island, and we visit every spring."]],ll=[0,.13,.27,.42,.56,.71,.86],Zo=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Kd=r=>(r=Zo(r),r*r*(3-2*r)),ei=(r,e,t)=>Kd((r-e)/(t-e));function ex(r){let e=Zo(r),t=0;ll.forEach((i,s)=>e>=i&&(t=s));let n=ei(e,.27,.33)*(1-ei(e,.42,.47));return{p:e,chapter:t,close:ei(e,.12,.2)*(1-ei(e,.25,.3)),storm:n,dive:ei(e,.41,.53),night:ei(e,.38,.47)*(1-ei(e,.86,.94)),part:ei(e,.52,.6),song:ei(e,.58,.68),answer:ei(e,.62,.71),aurora:ei(e,.57,.63)*(1-ei(e,.84,.9)),young:ei(e,.7,.76),transfer:Zo((e-.74)/(.85-.74)),dawn:ei(e,.86,.93),settle:ei(e,.86,.95),grow:ei(e,.89,.97),depart:ei(e,.92,1)}}var p2=["#0b0d1f","#16193a","#262b5c","#3b3f7a","#5a5aa0","#8b7bc0","#c9b8e8","#ffffff","#e6ecf5","#b9c4dc","#7f8fb5","#4a5f8c","#2e3b5c","#12355e","#1f5f8f","#3d8fbf","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffe9c2","#ffcf8a","#ffd34d","#ff8a3d","#ff9f6b","#f47c7c","#c4506b","#7a2d55","#d99ab0","#9a6a52","#e6dcc0"].map(r=>new Me(r)),m2={uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ve(1,1)},uPal:{value:p2.map(r=>new C(r.r,r.g,r.b))},uNear:{value:.1},uFar:{value:600}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`},so=[[0,[-5,4.5,31],[0,.5,0]],[.09,[1,5.5,24],[1,.6,0]],[.18,[13,2.6,11],[4.6,.4,0]],[.25,[5,7.5,15],[0,.5,0]],[.33,[-11,3,19],[0,-.5,0]],[.42,[-7,-1,21],[0,-4,0]],[.5,[-5,-12.5,23],[0,-16,0]],[.58,[8,-14.5,24],[0,-14,-6]],[.66,[-6,-14,30],[0,-13,-14]],[.74,[7,-10,21],[.5,-15.5,-4]],[.84,[-3,-7.5,23],[0,-16,-4]],[.92,[-15,-15,30],[3,-19,-10]],[1,[-16,-13,40],[10,-16,-18]]];function tx(r,e){let t=document.querySelector(".cw-world"),n=document.querySelector(".cw-stage");if(!t||!n)return;let i;try{i=new li({antialias:!1,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".cw-journey")?.style.setProperty("height","100svh");return}let s=3;i.setPixelRatio(1),i.outputColorSpace=wr,t.append(i.domElement),t.classList.add("has-webgl");let o=new jt,a=new Me;o.fog=new hs(a,40,170);let l=new kt(34,1,.1,600),c=new Pr(16770768,3882874,1.3),h=new hn(16767152,2.2);h.position.set(30,22,18),o.add(c,h);let u={uTime:{value:0},uNight:{value:0},uStorm:{value:0},uAurora:{value:0},uFlash:{value:0},uDawn:{value:0},uSun:{value:new C(.75,.12,-.65)}},f=new Ue(new Xt(400,32,16),new Ut({uniforms:u,vertexShader:jv,fragmentShader:Qv,side:In,depthWrite:!1,fog:!1}));o.add(f);let d={uTime:{value:0},uNight:{value:0},uDawn:{value:0}},g=new Ue(new On(600,600),new Ut({uniforms:d,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        }`}));g.rotation.x=-Math.PI/2,g.position.y=-22,o.add(g);let p=Kv(e?70:110,360,-6),_=p.mesh.material,m=p.mesh.instanceMatrix.array.slice();o.add(p.mesh);let x={uTime:{value:0},uPart:{value:0},uTint:{value:new Me}},v=new Ue(new On(600,600),new Ut({uniforms:x,side:nn,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        }`}));v.rotation.x=-Math.PI/2,v.position.y=-5.2,o.add(v);let y=$c({length:64,back:"#3b3f7a",back2:"#5a5aa0",belly:"#b9c4dc",seed:9});o.add(y.group);let M=$c({length:44,back:"#3d8fbf",back2:"#7f8fb5",belly:"#e6ecf5",seed:21});o.add(M.group);let S=$c({length:40,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:33}),w=$c({length:36,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:44});o.add(S.group,w.group);let P=12,b=Array.from({length:P},(J,V)=>{let he=Jv(V);o.add(he.group),al(300+V);let Se=Math.round(64*(.36+V/P*.32)),st=(V%3-1)*1.6,Te=Math.round(44*(.34+V/P*.34)),tt=(V%3-1)*1.2;return{...he,ox:Se,oz:st,yx:Te,yz:tt,rot:(ji()-.5)*.6,flicker:ji()*10}}),E=new $e,L=Dr(Array.from({length:4},(J,V)=>Array.from({length:5},(he,Se)=>[Math.round(Math.cos(V*Math.PI/2)*(Se+1)),Math.round(Math.sin(V*Math.PI/2)*(Se+1)),0,Se===4?"#c4506b":"#ffe9c2"])).flat(),!0,void 0,Qt*.8);E.add(L),b[5].group.add(E),E.position.set(0,7*Qt,1.2*Qt),al(500);let A=Array.from({length:14},(J,V)=>{let he=[],Se=2+Math.floor(ji()*3);for(let Te=0;Te<Se;Te++)he.push([0,Te,0,"#9a6a52"]);for(let Te=-2;Te<=2;Te++)for(let tt=0;tt<4;tt++)for(let We=-2;We<=2;We++)Te*Te+(tt-1.5)**2+We*We<5.5&&ji()>.1&&he.push([Te,Se+tt,We,tt>2?"#a8d46f":ji()>.5?"#5ba86a":"#2f6b4f"]);let st=new $e;return st.add(Dr(he,!0,void 0,Qt*.9)),o.add(st),{g:st,x:Math.round(64*(.3+V/14*.45)),z:(ji()-.5)*3,delay:ji()*.5}}),D=Dr(Array.from({length:48},()=>[0,0,0,"#e6ecf5"]),!0,void 0,Qt*.8);o.add(D);let B=Dr(Array.from({length:48},(J,V)=>[0,0,0,V%3?"#ffd34d":"#ff8a3d"]),!1,void 0,Qt*.9);o.add(B);let G=new vt,z=new Float32Array(900*6);G.setAttribute("position",new Nt(z,3));let k=new Zl(G,new ar({color:"#b9c4dc",transparent:!0,opacity:.8}));k.frustumCulled=!1,o.add(k);let K=new vt,re=new Float32Array(90);K.setAttribute("position",new Nt(re,3));let N=new Rr(K,new ar({color:"#ffffff"}));N.frustumCulled=!1,o.add(N);let oe=new vt().setFromPoints(Array.from({length:128},(J,V)=>new C(Math.cos(V/128*Math.PI*2),Math.sin(V/128*Math.PI*2),0))),ke=Array.from({length:10},(J,V)=>{let he=new Jl(oe,new ar({color:V<5?"#3ce0c4":"#c9b8e8",transparent:!0,fog:!1}));return he.frustumCulled=!1,o.add(he),he}),He=new gn(4,4,{type:wn,minFilter:en,magFilter:en,depthTexture:new lr(4,4)}),Ye=new Ut(m2);Ye.uniforms.tColor.value=He.texture,Ye.uniforms.tDepth.value=He.depthTexture;let it=new Ue(new On(2,2),Ye),ne=new jt;ne.add(it);let ie=new Li(-1,1,1,-1,0,1),ye=new un(so.map(J=>new C(...J[1])),!1,"centripetal"),Oe=new un(so.map(J=>new C(...J[2])),!1,"centripetal"),Ce=new C,je=new C;function ft(J){let V=0;for(;V<so.length-2&&J>so[V+1][0];)V++;let he=Zo((J-so[V][0])/(so[V+1][0]-so[V][0])),Se=(V+he)/(so.length-1);ye.getPoint(Se,Ce),Oe.getPoint(Se,je)}let we=new Pt,qe=new _n,Ze=new C,De=new C,j=new C,H=new C,_t=(J,V)=>(j.set(J*Qt-y.centre,y.top(J)+Zm(y.wave,J*Qt),0),y.group.localToWorld(j)),ct=J=>(H.set(J*Qt-M.centre,M.top(J)+Zm(M.wave,J*Qt),0),M.group.localToWorld(H)),Je=-10,Fe=1,F={x:0,y:0,tx:0,ty:0},T={p:r?.97:0},I=-1,U=J=>n.querySelector(J),W=U(".cw-say"),X=U(".cw-chapter-no"),ge=U(".cw-card small"),se=U(".cw-card b"),Pe=U(".cw-hud-alt"),Ae=U(".cw-hud-lit"),ue=U(".cw-hud-weather"),de=U(".cw-hud-age"),Le=Array.from(n.querySelectorAll(".cw-progress i"));function Ne(J){let V=ex(T.p),he=V.p;u.uTime.value=d.uTime.value=J;for(let ae of[y,M,S,w])ae.wave.uTime.value=J+(ae===M?1.3:ae===S?2.1:0);let Se=Math.sin(J*.9)*.22*V.storm;y.wave.uAmp.value=.55*(1-V.settle)+V.storm*.35,y.group.position.set(Math.sin(J*.15)*.6*(1-V.settle),Math.sin(J*.6)*.25*(1-V.settle)-V.dive*17.5-V.settle*3.2-Math.sin(V.storm*Math.PI)*1.5,0),y.group.rotation.set(Se,-.08+V.dive*.15-V.settle*.2,Math.sin(J*.3)*.03+(V.dive>0&&V.dive<1?-Math.sin(V.dive*Math.PI)*.22:0)+V.song*.08*(1-V.settle)),y.group.updateMatrixWorld(),y.eyeMesh.visible=Math.sin(J*.9)<.94,M.group.visible=V.young>.001,M.wave.uAmp.value=.5;let st=new C(1.5,-15.2,-7.5);M.group.position.set(60-(60-st.x)*V.young+V.depart*26,-12+(st.y+12)*V.young+Math.sin(J*.7)*.2+V.depart*7,-40+(40+st.z)*V.young-V.depart*26),M.group.rotation.set(0,-.1+V.depart*.7,Math.sin(J*.4)*.03+V.depart*.12),M.group.updateMatrixWorld();for(let[ae,Ge,Xe,nt]of[[S,-46,-70,0],[w,52,-85,1]])ae.group.visible=V.answer>.01&&V.depart<.95,ae.wave.uAmp.value=.45,ae.group.position.set(Ge,-18+V.answer*4+Math.sin(J*.5+nt)*.4,Xe),ae.group.rotation.y=nt?2.6:.4;let Te=0;b.forEach((ae,Ge)=>{let Xe=_t(ae.ox,J).clone();Xe.z+=ae.oz;let nt=Kd((V.transfer-Ge/P*.75)/.25),ut=Xe;if(nt>0){let Ct=ct(ae.yx).clone();Ct.z+=ae.yz,ut=Xe.lerp(Ct,nt),ut.y+=Math.sin(nt*Math.PI)*3.2}ae.group.position.copy(ut),ae.group.rotation.set(y.group.rotation.x*(1-nt),ae.rot+(nt>0?nt*Math.PI*2:0)*(nt<1?1:0),y.group.rotation.z*(1-nt));let pn=V.storm>.3?Math.sin(J*9+ae.flicker*3)>-.2:!0;ae.windows.color.setScalar(pn?.6+V.night*.4+(1-V.night)*.2:.15),pn&&Te++}),E.rotation.z=J*(1.2+V.storm*6),A.forEach(ae=>{let Ge=Kd((V.grow-ae.delay*.6)/.4);ae.g.visible=Ge>.01,ae.g.visible&&(ae.g.position.copy(_t(ae.x,J)),ae.g.position.z+=ae.z,ae.g.scale.setScalar(Ge))});for(let ae=0;ae<48;ae++){let Ge=b[ae%P],Xe=(J*.35+ae*.137)%1;De.copy(Ge.chimney).applyMatrix4(Ge.group.matrixWorld),De.x-=Xe*2.2+V.storm*Xe*4,De.y+=Xe*2.4,Ze.setScalar(Qt*.8*(.6+Xe)*(1-V.dive)*(1-V.transfer*.5)),we.compose(De,qe.identity(),Ze),D.setMatrixAt(ae,we)}D.instanceMatrix.needsUpdate=!0;let tt=Math.max(V.song*(1-V.depart),V.transfer>0&&V.transfer<1?1:0);for(let ae=0;ae<48;ae++){let Ge=ae*.618%1,Xe=(J*.12+Ge)%1;if(V.transfer>0&&V.transfer<1){let nt=_t(Math.round(64*(.35+Ge*.35)),J).clone(),ut=ct(Math.round(44*(.35+Ge*.35)));De.copy(nt.lerp(ut,Xe)),De.y+=Math.sin(Xe*Math.PI)*4+1}else De.copy(_t(Math.round(64*(.3+Ge*.45)),J)),De.y+=.5+Xe*7,De.x+=Math.sin(Xe*6+ae)*1.5,De.z+=Math.cos(ae*2.4)*3;Ze.setScalar(Qt*.9*tt*Math.sin(Math.min(1,Xe*1.2)*Math.PI)**.3),we.compose(De,qe.identity(),Ze),B.setMatrixAt(ae,we)}B.instanceMatrix.needsUpdate=!0;let We=p.mesh.instanceMatrix.array,rt=J*.4,zt=V.part;x.uTime.value=J,x.uPart.value=zt,x.uTint.value.copy(_.color);for(let ae=0;ae<p.mesh.count;ae++){let Ge=ae*16,Xe=m[Ge+12]+rt;Xe=((Xe+90)%180+180)%180-90;let nt=m[Ge+14],ut=Math.hypot(Xe,nt+10),pn=Zo(zt*1.6-ut/200),Ct=Qt*(1-pn);We[Ge]=We[Ge+5]=We[Ge+10]=Ct,We[Ge+12]=Xe,We[Ge+13]=m[Ge+13]+pn*6}if(p.mesh.instanceMatrix.needsUpdate=!0,_.emissive.setRGB(.3,.3,.4).multiplyScalar(1-V.storm*.6-V.night*.7),_.color.setRGB(1,1,1).lerp(new Me(.5,.52,.62),V.storm).lerp(new Me(.28,.3,.48),V.night*.9),k.visible=V.storm>.05,k.visible){for(let ae=0;ae<900;ae++){let Ge=ae*37.7%60-30+je.x,Xe=ae*13.3%40-20,nt=(J*22+ae*3.31)%30,ut=je.y+15-nt;z.set([Ge,ut,Xe,Ge-.35,ut-1.1,Xe],ae*6)}G.attributes.position.needsUpdate=!0,k.material.opacity=V.storm}if(V.storm>.5&&J-Je>1.4+Math.sin(Fe)*.6){Je=J,Fe+=1.7;let ae=Math.sin(Fe*3.1)*.5*40,Ge=30,Xe=-30-Math.abs(Math.cos(Fe))*30;for(let nt=0;nt<30;nt++)re.set([ae,Ge,Xe],nt*3),ae+=Math.sin(Fe*7+nt*2.3)*2.2,Ge-=1.4;K.attributes.position.needsUpdate=!0}let pt=Math.max(0,1-(J-Je)/.18)*V.storm;if(N.visible=pt>.2,u.uFlash.value=pt*.6,ke.forEach((ae,Ge)=>{let Xe=Ge>=5,nt=Ge%5,ut=(J*.32+nt/5)%1,pn=Xe?V.answer*(1-V.young):V.song*(1-V.young);if(ae.visible=pn>.02,!ae.visible)return;let Ct=Xe?(nt%2?w:S).group.position:_t(56,J);ae.position.copy(Ct),ae.rotation.set(Math.PI/2,0,0),ae.scale.setScalar(1+ut*(Xe?40:26)),ae.material.opacity=(1-ut)*pn}),u.uNight.value=V.night,u.uStorm.value=V.storm,u.uAurora.value=V.aurora,u.uDawn.value=V.dawn,d.uNight.value=V.night,d.uDawn.value=V.dawn,u.uSun.value.set(.75,.12-V.dawn*.06,-.65+V.dawn*.2),a.setRGB(1,.72,.56).lerp(new Me(.38,.4,.5),V.storm).lerp(new Me(.06,.08,.2),V.night),o.fog.color.copy(a),c.intensity=1.3-V.night*.7-V.storm*.4,h.intensity=(2.2-V.storm*1.6)*(1-V.night*.8)+pt*3,h.color.setRGB(1,.85,.7).lerp(new Me(.6,.7,1),V.night),ft(he),F.x+=(F.tx-F.x)*.05,F.y+=(F.ty-F.y)*.05,Ce.x+=F.x*1.2+Math.sin(J*.3)*.25+Math.sin(J*37)*pt*.3,Ce.y+=-F.y*.6+Math.sin(J*.4)*.15,l.position.copy(Ce),l.lookAt(je),f.position.copy(l.position),i.setRenderTarget(He),i.render(o,l),i.setRenderTarget(null),i.render(ne,ie),Pe&&(Pe.textContent=String(Math.max(0,Math.round(2400-V.storm*300-V.dive*2100-V.settle*30))).padStart(4,"0")),Ae&&(Ae.textContent=`${String(Te).padStart(2,"0")}/12`),de&&(de.textContent=V.depart>.5?"006":"212"),ue&&(ue.textContent=V.storm>.4?"STORM":V.aurora>.4?"AURORA":V.night>.5?"NIGHT":V.dawn>.5?"DAWN":"CLEAR"),V.chapter!==I){I=V.chapter;let[ae,Ge]=Jm[V.chapter];ge&&(ge.textContent=`CHAPTER ${ae}`),se&&(se.textContent=Ge),X&&(X.textContent=`${ae}`),Le.forEach((Xe,nt)=>Xe.classList.toggle("is-on",nt<=V.chapter))}if(W){let ae=Jm[V.chapter][2],Ge=ll[V.chapter],Xe=ll[V.chapter+1]??1.02,nt=Zo((he-Ge-.004)/((Xe-Ge)*.5)),ut=Math.round(ae.length*nt);W.textContent=ae.slice(0,ut),W.classList.toggle("is-typing",ut<ae.length)}t.dataset.scrollProgress=he.toFixed(3),t.dataset.storyBeat=String(V.chapter+1)}function _e(){let J=Math.max(1,t.clientWidth),V=Math.max(1,t.clientHeight),he=Math.ceil(J/s),Se=Math.ceil(V/s);i.setSize(he,Se,!1),He.setSize(he,Se),Ye.uniforms.uRes.value.set(he,Se),l.aspect=J/V,l.fov=J/V<.9?48:34,l.updateProjectionMatrix(),Ne(performance.now()/1e3)}_e();let Ee;r||(Ee=ce.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".cw-journey",start:"top top",end:"bottom bottom",scrub:1.2}}),Ee.to(T,{p:1,duration:1},0),Ee.to(".cw-title",{autoAlpha:0,y:-40,duration:.035,ease:"power1.in"},.015),Ee.fromTo(".cw-dialog",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015,ease:"steps(4)"},.03),ll.forEach((J,V)=>{Ee.fromTo(".cw-card",{autoAlpha:0,x:-40},{autoAlpha:1,x:0,duration:.012,ease:"steps(5)",immediateRender:!1},J+(V?.004:.04)),Ee.to(".cw-card",{autoAlpha:0,x:40,duration:.01,ease:"steps(4)"},(ll[V+1]??1.05)-.03)}),ce.from(".cw-title .cw-l",{yPercent:120,autoAlpha:0,duration:.6,stagger:.05,ease:"steps(6)",delay:.3}),ce.from(".cw-nav, .cw-hud",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ce.utils.toArray(".cw-log article").forEach((J,V)=>ce.from(J,{autoAlpha:0,y:40,duration:.7,ease:"steps(7)",delay:V%3*.08,scrollTrigger:{trigger:J,start:"top 90%"}})));let O=J=>{F.tx=(J.clientX/innerWidth-.5)*2,F.ty=(J.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",O,{passive:!0});let xe=0,pe=!0,Ie=new IntersectionObserver(([J])=>{pe=J.isIntersecting,pe&&le()});Ie.observe(t);let fe=J=>{xe=0,!(!pe||document.hidden)&&(Ne(J/1e3),le())};function le(){!xe&&pe&&!document.hidden&&!r&&(xe=requestAnimationFrame(fe))}let $=()=>document.hidden?(cancelAnimationFrame(xe),xe=0):le();return document.addEventListener("visibilitychange",$),window.addEventListener("resize",_e),le(),()=>{cancelAnimationFrame(xe),Ie.disconnect(),Ee?.scrollTrigger?.kill(),Ee?.kill(),window.removeEventListener("pointermove",O),window.removeEventListener("resize",_e),document.removeEventListener("visibilitychange",$),o.traverse(J=>{let V=J;V.geometry?.dispose(),(Array.isArray(V.material)?V.material:V.material?[V.material]:[]).forEach(he=>he.dispose())}),He.depthTexture?.dispose(),He.dispose(),Ye.dispose(),i.dispose(),i.domElement.remove()}}var Mt=.25,t0=7,Jt=()=>((t0=t0*16807%2147483647)-1)/2147483646,g2=new Wt(1,1,1),bs=new un([[0,3,2],[0,-9,-12],[3,-18,-40],[-2,-24,-75],[0,-30,-120],[-4,-36,-165],[-6,-42,-205],[2,-48,-245],[4,-54,-285],[0,-58,-325],[0,-62,-358]].map(([r,e,t])=>new C(r,e,t)),!1,"centripetal"),Qr=5,hi={bone:{c:new C(0,-30,-120),r:new C(24,18,32)},river:{c:new C(-6,-42,-205),r:new C(30,17,28)},crystal:{c:new C(4,-54,-285),r:new C(24,22,26)},heart:{c:new C(0,-62,-360),r:new C(21,18,21)}},Km=Object.values(hi),jd=(r,e)=>{let t=(r.x-e.c.x)/e.r.x,n=(r.y-e.c.y)/e.r.y,i=(r.z-e.c.z)/e.r.z;return t*t+n*n+i*i},n0=(r,e)=>Math.floor(9*Math.exp(-((r-8)**2+(e+16)**2)/1500)+Math.sin(r*.12)*.8+Math.cos(e*.1)*.8),jm=new C(18,0,-24);function _2(r=.6){let e=Math.ceil(bs.getLength()/r),t=[],n=[],i=[],s=new C(0,1,0);for(let o=0;o<=e;o++){let a=o/e,l=bs.getPointAt(a),c=bs.getTangentAt(a),h=new C().crossVectors(c,s).normalize();t.push(l),n.push(h),i.push(new C().crossVectors(h,c).normalize())}return{pts:t,side:n,up:i,n:e}}function v2(r,e){let t=r?new ur:new bn;return e&&(t.onBeforeCompile=e),t}function di(r,e=!0,t=Mt,n){let i=new Ar(g2,v2(e,n),Math.max(1,r.length)),s=new Pt,o=new Me;return r.forEach(([a,l,c,h],u)=>{i.setMatrixAt(u,s.makeScale(t,t,t).setPosition(a*t,l*t,c*t)),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}var i0=r=>e=>{e.uniforms.uGrey=r.uGrey,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGrey;`).replace("#include <color_fragment>",`#include <color_fragment>
float greyLum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(greyLum) * vec3(0.86, 0.88, 0.94), uGrey);`)};function nx(){t0=7;let r=_2(),e=new C,t=(A,D,B)=>D>-7&&B>-30||B>-92?"soil":B>-168?"bone":B>-248?"river":B>-322?"crystal":"heart",i=x2(r,t,{soil:["#5a3b24","#6b4a2e","#7d5634","#4a3020"],bone:["#7a4a3a","#8a5a44","#6a3e32","#5a352c"],river:["#2e3550","#3b4466","#262c44","#46507a"],crystal:["#241f3a","#2f2850","#3a3060","#1c1830"],heart:["#3a2028","#4a2630","#2e1820","#5a2c2c"]}),s=[];for(let A=-70;A<=70;A++)for(let D=-70;D<=40;D++){if(Math.hypot(A,D-1)<5.5)continue;let B=n0(A,D);s.push([A,B,D,Jt()>.93?"#2f6b4f":"#5ba86a"],[A,B-1,D,"#6b4a2e"]),Jt()>.96&&s.push([A,B+1,D,"#a8d46f"])}let o=[],a=[],l=jm.clone().setY(n0(jm.x,jm.z)),c=(A,D,B,G)=>{let z=Math.ceil(A.distanceTo(D)*1.5);for(let k=0;k<=z;k++){let K=A.clone().lerp(D,k/z),re=B*(1-k/z*.4);for(let N=-re;N<=re;N++)for(let oe=-re;oe<=re;oe++)N*N+oe*oe<=re*re+.5&&o.push([Math.round(K.x+N),Math.round(K.y),Math.round(K.z+oe),G])}},h=l.clone().add(new C(0,30,0));c(l,h,3.2,"#6b4a2e");let u=(A,D,B,G,z)=>{let k=A.clone().addScaledVector(D,B);if(c(A,k,G,z>1?"#5a3b24":"#7d5634"),z===0)return void a.push(k);for(let K=0;K<3;K++){let re=D.clone().add(new C((Jt()-.5)*1.4,.35+Jt()*.5,(Jt()-.5)*1.4)).normalize();u(k,re,B*.68,Math.max(.6,G*.6),z-1)}};for(let A=0;A<4;A++){let D=A/4*Math.PI*2+.4;u(h.clone().addScaledVector(new C(0,-1,0),A*3),new C(Math.cos(D),.55,Math.sin(D)).normalize(),12,1.6,2)}let f=a.map(A=>{let D=[],B=2.5+Jt()*2;for(let G=-B;G<=B;G++)for(let z=-B*.7;z<=B*.7;z++)for(let k=-B;k<=B;k++)G*G+z*z*2+k*k<=B*B&&Jt()>.15&&D.push([Math.round(G),Math.round(z),Math.round(k),z>.5?"#ffd6e6":Jt()>.5?"#f7a8c4":"#e07aa8"]);return{at:A,list:D}}),d=[],g=[],p=r.pts[4].clone().addScaledVector(r.up[4],(Qr-.4)*.72).addScaledVector(r.side[4],-(Qr-.4)*.68),_=30;for(let A=0;A<=_;A++)g.push(l.clone().add(new C(0,-3,0)).lerp(p,A/_));g.forEach((A,D)=>{let B=D/(g.length-1);for(let[G,z]of[[0,0],[1,0],[0,-1]])d.push({v:[Math.round(A.x+G),Math.round(A.y+z),Math.round(A.z),D%7===0?"#5a3b24":"#7d5634"],along:B})});let m=[],x=[];r.pts.forEach((A,D)=>{let B=t(A.x,A.y,A.z),G=r.up[D],z=r.side[D];if(B==="soil"&&A.y<-6&&D%9===0){let k=(Jt()-.5)*6,K=2+Math.floor(Jt()*4);for(let re=0;re<K;re++)m.push([Math.round(A.x+z.x*k),Math.round(A.y+G.y*(Qr-re)),Math.round(A.z+z.z*k),"#8a6a44"])}if(B==="bone"&&jd(A,hi.bone)<.85){for(let k of[0,1])x.push([Math.round(A.x+G.x*(8.5+k)),Math.round(A.y+G.y*(8.5+k)),Math.round(A.z+G.z*(8.5+k)),D%5<2?"#e6dcc0":"#c8bca0"]);if(D%6===0)for(let k=-.5;k<=Math.PI+.5;k+=.08)x.push([Math.round(A.x+(z.x*Math.cos(k)+G.x*Math.sin(k))*8),Math.round(A.y+G.y*Math.sin(k)*8+z.y*Math.cos(k)*8),Math.round(A.z+(z.z*Math.cos(k)+G.z*Math.sin(k))*8),"#e6dcc0"])}});let v=bs.getPointAt(.43);for(let A=-7;A<=7;A++)for(let D=0;D<=8;D++)for(let B=-9;B<=6;B++){if(!(Math.abs(A)===7||D===0||D===8||B===-9||B===6))continue;let z=B===6&&D>3&&D<7&&(Math.abs(A-3.5)<1.6||Math.abs(A+3.5)<1.6),k=B===6&&D<2&&A%2===0;x.push([Math.round(v.x+A),Math.round(v.y+9+D),Math.round(v.z+B),z?"#1c1410":k?"#ffffff":D>5?"#e6dcc0":"#c8bca0"])}let y=[],M=hi.river,S=Math.round(M.c.y-M.r.y*.45);for(let A=-M.r.x;A<=M.r.x;A++)for(let D=-M.r.z;D<=M.r.z;D++)e.set(M.c.x+A,S,M.c.z+D),jd(e,M)<.98&&y.push([e.x,S,e.z,Jt()>.8?"#3d8fbf":"#1f5f8f"]);for(let A=0;A<34;A++){let D=Jt()*Math.PI*2,B=Math.sqrt(Jt())*.85,G=M.c.x+Math.cos(D)*M.r.x*B,z=M.c.z+Math.sin(D)*M.r.z*B;if(r.pts.some(re=>Math.hypot(re.x-G,re.z-z)<9))continue;e.set(G,M.c.y,z);let k=M.c.y+M.r.y*Math.sqrt(Math.max(0,1-((G-M.c.x)/M.r.x)**2-((z-M.c.z)/M.r.z)**2)),K=3+Math.floor(Jt()*7);for(let re=0;re<K;re++)m.push([Math.round(G),Math.round(k-re),Math.round(z),re===K-1?"#9fd3e8":"#46507a"])}let w=[],P=hi.crystal;for(let A=0;A<90;A++){let D=new C(Jt()-.5,Jt()-.65,Jt()-.5).normalize(),B=P.c.clone().add(new C(D.x*P.r.x,D.y*P.r.y,D.z*P.r.z).multiplyScalar(.98)),G=P.c.clone().sub(B).normalize().add(new C(0,.6,0)).normalize(),z=7+Jt()*14,k=B.clone().addScaledVector(G,z),K=B.clone().addScaledVector(G,z/2);if(r.pts.some(N=>N.distanceTo(k)<8||N.distanceTo(K)<8))continue;let re=Jt()>.5?["#8b7bc0","#c9b8e8","#5a5aa0"]:["#3ce0c4","#9ff0e0","#1d8f9a"];for(let N=0;N<z;N++){let oe=N<z*.4?2:N<z-2?1:0;for(let ke=-oe;ke<=oe;ke++)for(let He=-oe;He<=oe;He++)w.push([Math.round(B.x+G.x*N+ke),Math.round(B.y+G.y*N),Math.round(B.z+G.z*N+He),re[N>z-3?1:ke===0&&He===0?0:2]])}}let b=[],E=hi.heart.c;for(let A=0;A<22;A++){let D=E.clone().add(new C(Jt()-.5,Jt()-.5,Jt()-.5).multiplyScalar(8));for(let G=0;G<40;G++){let z=E.clone().sub(D).multiplyScalar(.05);D=D.add(new C(Jt()-.5,Jt()-.5,Jt()-.5).multiplyScalar(1.4).add(z)),!(D.distanceTo(E)<3.6)&&b.push([Math.round(D.x),Math.round(D.y),Math.round(D.z),Jt()>.5?"#7d5634":"#5a3b24"])}let B=new C(Jt()-.5,Jt()-.5,Jt()-.5).normalize();for(let G=7;G<12;G++)b.push([Math.round(E.x+B.x*G),Math.round(E.y+B.y*G),Math.round(E.z+B.z*G),"#5a3b24"])}let L=[];for(let A=-3;A<=3;A++)for(let D=-3;D<=3;D++)for(let B=-3;B<=3;B++)A*A+D*D+B*B<=10&&L.push([E.x+A,E.y+D,E.z+B,"#ffffff"]);return{frames:r,caves:i,bones:x,surface:s,tree:o,blossoms:f,root:d,detail:m,water:y,crystals:w,knot:b,core:L,waterLevel:S}}var Qm=(r,e,t)=>Math.sin(r*.31+Math.sin(t*.17)*2)*Math.cos(e*.27+r*.05)+Math.sin(t*.23+e*.11)*.6,e0=(r,e,t)=>{let n=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function x2(r,e,t){let n=(f,d,g,p)=>{let _=e(f,d,g),m=t[_],x=Math.floor((d+Qm(f,0,g)*2.5)/3.5);p.set(m[(x%m.length+m.length)%m.length]);let v=e0(Math.round(f),Math.round(d),Math.round(g));return _==="soil"&&v>.94&&p.set(v>.97?"#9aa0b4":"#c8a07a"),_==="bone"&&v>.96&&p.set("#e6dcc0"),_==="heart"&&v>.9&&p.set(v>.95?"#ff8a3d":"#c4506b"),_==="crystal"&&v>.95&&p.set("#8b7bc0"),p},i=(f,d)=>{let g=f.getAttribute("position"),p=new Float32Array(g.count*3),_=new C,m=new Me;for(let x=0;x<g.count;x++)_.fromBufferAttribute(g,x),d(_,x),g.setXYZ(x,_.x,_.y,_.z),n(_.x,_.y,_.z,m).toArray(p,x*3);return f.setAttribute("color",new Nt(p,3)),f.computeVertexNormals(),f},s=[],o=[],a=(f,d=1)=>Km.some(g=>jd(f,g)<d),l=[],c=0,h=0,u=()=>{if(l.length>3){let f=new un(l),d=new oi(f,l.length*2,Qr+.8,26,!1),g=d.getAttribute("normal"),p=new C;i(d,(x,v)=>{let y=Qm(x.x,x.y,x.z)*.7+(e0(Math.round(x.x*2),Math.round(x.y*2),Math.round(x.z*2))-.5)*.4;x.addScaledVector(p.fromBufferAttribute(g,v),y)});let _=d.getAttribute("uv"),m=new Float32Array(_.count);for(let x=0;x<_.count;x++)m[x]=c+_.getX(x)*(h-c);d.setAttribute("along",new Nt(m,1)),s.push(new Ue(d))}l=[]};r.pts.forEach((f,d)=>{f.y>n0(f.x,f.z)-2||a(f,.8)?u():(l.length||(c=d/r.n),l.push(f.clone()),h=d/r.n);for(let p of Km){let _=jd(f,p);Math.abs(_-1.02)<.04&&!o.some(m=>Math.hypot(m.x-f.x,m.y-f.y,m.z-f.z)<6)&&o.push(new tn(f.x,f.y,f.z,Qr+.2))}}),u();for(let f of Km){let d=new Xt(1,72,48),g=0,p=1/0;r.pts.forEach((_,m)=>{let x=_.distanceToSquared(f.c);x<p&&(p=x,g=m/r.n)}),d.setAttribute("along",new Nt(new Float32Array(d.getAttribute("position").count).fill(g),1)),i(d,_=>{let m=_.clone();_.set(f.c.x+m.x*f.r.x,f.c.y+m.y*f.r.y,f.c.z+m.z*f.r.z);let x=Qm(_.x*1.4,_.y*1.4,_.z*1.4)*1.6+(e0(Math.round(_.x),Math.round(_.y),Math.round(_.z))-.5)*.6;_.add(m.normalize().multiplyScalar(x+1))}),s.push(new Ue(d))}return{meshes:s,holes:o}}function ix(){let r=[],e=[],t=[];for(let l=-2;l<=2;l++)for(let c=0;c<=3;c++)for(let h=-3;h<=2;h++)l*l/5+(c-1.5)**2/3+h*h/8<=1.05&&r.push([l,c,h,c<1?"#7a6060":"#4a3b38"]);r.push([0,1.5,3,"#f47c7c"],[-1,2,2,"#0b0d1f"],[1,2,2,"#0b0d1f"],[-2,0,2,"#f4b6a0"],[2,0,2,"#f4b6a0"]);for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++)l*l+c*c<=5&&e.push([l,4,c,"#9a6a52"]);e.push([0,5,0,"#6b4a2e"]);for(let l=0;l<5;l++)t.push([3,l+1,2,"#7d5634"]);t.push([3,6,2,"#ffd34d"],[3,5,2,"#ffcf8a"]);let n=new $e,i=Mt*.36,s=di(r,!0,i),o=di(e,!0,i),a=di(t,!1,i);return n.add(s,o,a),{group:n,capMesh:o,lampMesh:a}}var rx=[["I","THE GREY TREE","The great tree has not bloomed for a hundred winters. Pip thinks the trouble is not in the branches.","LANTERN"],["II","TOPSOIL","Down past the worms and the stubborn roots, where the dirt still smells of rain.","ACORN CAP"],["III","THE BONE HALL","Old giants sleep here. Pip says excuse me to every single rib.","FOSSIL TOOTH"],["IV","THE BLIND RIVER","A river that has never seen the sky. Its fish make their own light.","RIVER PEARL"],["V","THE CRYSTAL HALL","Even this far down, things find a way to shine.","CRYSTAL SHARD"],["VI","THE HEART ROOT","At the bottom of everything, the tree's heart had gone cold. Pip gave it the lantern.","EMBER"],["VII","BLOOM","The light ran up every root at once. By morning the whole hill was pink.","BLOSSOM"]],r0=[0,.12,.26,.4,.54,.68,.82],sx=[0,.19,.33,.47,.61,.76,.95],cl=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Qd=r=>(r=cl(r),r*r*(3-2*r)),Jo=(r,e,t)=>Qd((r-e)/(t-e));function ox(r){let e=cl(r),t=0;r0.forEach((s,o)=>e>=s&&(t=o));let n=Jo(e,.82,.92),i=cl((e-.13)/(.69-.13));return{p:e,chapter:t,dive:Jo(e,.05,.13),along:n>0?1-n:i,orbit:Jo(e,.68,.74)*(1-Jo(e,.8,.83)),give:Jo(e,.73,.79),pulse:n>0?1-n:e>.79?1:0,rewind:n,exit:Jo(e,.91,.97),bloom:Jo(e,.9,.99)}}function ax(r){let e=r.palette.slice(0,32);for(;e.length<32;)e.push(e[e.length-1]);let t=new Me(r.outlineInk??"#0d0f1f"),n=new Ut({uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ve(1,1)},uPal:{value:e.map(a=>{let l=new Me(a);return new C(l.r,l.g,l.b)})},uNear:{value:.1},uFar:{value:600},uDither:{value:r.dither??.05},uOutline:{value:r.outlineNear??140},uInk:{value:new C(t.r,t.g,t.b)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
      }`}),i=new gn(4,4,{type:wn,minFilter:en,magFilter:en,depthTexture:new lr(4,4)});n.uniforms.tColor.value=i.texture,n.uniforms.tDepth.value=i.depthTexture;let s=new jt;s.add(new Ue(new On(2,2),n));let o=new Li(-1,1,1,-1,0,1);return{material:n,setSize(a,l){i.setSize(a,l),n.uniforms.uRes.value.set(a,l)},render(a,l,c){n.uniforms.uNear.value=c.near,n.uniforms.uFar.value=c.far,a.setRenderTarget(i),a.render(l,c),a.setRenderTarget(null),a.render(s,o)},dispose(){i.depthTexture?.dispose(),i.dispose(),n.dispose()}}}var y2=["#0d0a0c","#1c1410","#2e1d16","#4a3020","#6b4a2e","#9a6a52","#c8a07a","#e6dcc0","#ffffff","#d8dce6","#9aa0b4","#a8d8f0","#3b4466","#262c44","#1f5f8f","#3d8fbf","#9fd3e8","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffd34d","#ff8a3d","#c4506b","#7a2d55","#e07aa8","#f7a8c4","#ffd6e6","#6fa8dc","#8b7bc0","#c9b8e8"],oo=(r,e,t)=>new C(r*Mt,e*Mt,t*Mt);function lx(r){let e=document.querySelector(".bw-world"),t=document.querySelector(".bw-stage");if(!e||!t)return;let n;try{n=new li({antialias:!1,powerPreference:"high-performance"})}catch{t.classList.add("is-fallback"),document.querySelector(".bw-journey")?.style.setProperty("height","100svh");return}let i=3;n.setPixelRatio(1),n.outputColorSpace=wr,e.append(n.domElement),e.classList.add("has-webgl");let s=ax({palette:y2,dither:.05,outlineNear:60,outlineInk:"#0d0a0c"}),o=new jt;o.background=new Me(1840144);let a=new Me;o.fog=new hs(a,6,40);let l=new kt(48,1,.05,400),c=new Pr(16773856,4861984,1.4),h=new hn(16773336,2.2);h.position.set(-20,40,30),o.add(c,h);let u={uBloom:{value:0},uTime:{value:0}},f=new Ue(new Xt(300,24,12),new Ut({uniforms:u,side:In,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uBloom; varying vec3 vD;
        void main(){
          float g = smoothstep(-0.1, 0.7, vD.y);
          vec3 winter = mix(vec3(0.86, 0.87, 0.9), vec3(0.62, 0.64, 0.7), g);
          vec3 spring = mix(vec3(1.0, 0.88, 0.92), vec3(0.45, 0.7, 0.92), smoothstep(-0.05, 0.22, vD.y));
          vec3 c = mix(winter, spring, uBloom);
          gl_FragColor = vec4(pow(c, vec3(2.2)), 1.0);
        }`}));o.add(f);let d=nx(),g={uGrey:{value:1}},p=$=>(o.add($),$),_=d.caves.holes.slice(0,12);for(;_.length<12;)_.push(new tn(0,9999,0,0));let m={uPulse:{value:-1},uLit:{value:0}},x=new ur({vertexColors:!0,side:nn});x.onBeforeCompile=$=>{$.uniforms.uHoles={value:_},Object.assign($.uniforms,m),$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld; attribute float along; varying float vAlong;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz; vAlong = along;`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorld; uniform vec4 uHoles[12]; varying float vAlong; uniform float uPulse, uLit;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float ring = exp(-pow((vAlong - uPulse) * 60.0, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.6, 0.22) * (ring * 1.6 + step(uPulse, vAlong) * uLit * 0.12) * step(0.0, uPulse);`).replace("void main() {",`void main() {
  for (int i = 0; i < 12; i++) if (distance(vWorld, uHoles[i].xyz * ${Mt.toFixed(2)}) < uHoles[i].w * ${Mt.toFixed(2)}) discard;`)};let v=bs.getPointAt(0),y=new Ue(new cn((Qr+.8)*Mt,(Qr+.8)*Mt,7*Mt,24,1,!0),new ur({color:4861984,side:nn}));y.position.set(v.x*Mt,(v.y+2.5)*Mt,v.z*Mt),o.add(y);for(let $ of d.caves.meshes)$.material=x,$.scale.setScalar(Mt),$.frustumCulled=!1,o.add($);p(di(d.detail,!0)),p(di(d.bones,!0)).material.emissive.setRGB(.14,.12,.09),p(di(d.knot.map(([$,J,V,he])=>[$/.6,J/.6,V/.6,he]),!0,Mt*.6)),p(di(d.surface,!0,Mt,i0(g))),p(di(d.tree,!0,Mt,i0(g)));let S=p(di(d.crystals,!1));S.material.fog=!1;let w=p(new Ue(new To(2.4*Mt,0),new bn({color:10133684})));w.position.copy(hi.heart.c).multiplyScalar(Mt);let P={uTime:{value:0}};p(di(d.water,!1,Mt,$=>{$.uniforms.uTime=P.uTime,$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 ip = instanceMatrix[3].xyz; transformed.y += sin(uTime * 2.0 + ip.x * 3.0 + ip.z * 2.0) * 0.35;`)}));let b={uPulse:{value:-1},uLit:{value:0}},E=di(d.root.map($=>$.v),!0,Mt,$=>{Object.assign($.uniforms,b),$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
attribute float aAlong; varying float vAlong;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAlong = aAlong;`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPulse, uLit; varying float vAlong;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float band = exp(-pow((vAlong - uPulse) * 22.0, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.62, 0.25) * (band * 3.0 + step(uPulse, vAlong) * uLit * 0.55);`)});E.geometry=E.geometry.clone(),E.geometry.setAttribute("aAlong",new bo(new Float32Array(d.root.map($=>$.along)),1)),p(E);let L=d.blossoms.map(($,J)=>{let V=di($.list,!0,Mt*.9);return V.position.copy(oo($.at.x,$.at.y,$.at.z)),V.scale.setScalar(.001),o.add(V),{m:V,delay:J/d.blossoms.length*.5}}),A=3,D=()=>((A=A*16807%2147483647)-1)/2147483646,B=di(Array.from({length:260},()=>{let $=Math.round((D()-.5)*120),J=Math.round(-60+D()*95);return[$,Math.floor(9*Math.exp(-(($-8)**2+(J+16)**2)/1500)+Math.sin($*.12)*.8+Math.cos(J*.1)*.8)+1,J,["#ffd6e6","#ffd34d","#ffffff","#e07aa8"][Math.floor(D()*4)]]}).filter(([$,,J])=>Math.hypot($,J-1)>6),!0);p(B);let G=p(di(Array.from({length:140},($,J)=>[0,0,0,J%2?"#f7a8c4":"#ffd6e6"]),!1,Mt*1.1)),z=p(di(Array.from({length:16},($,J)=>[0,0,0,J%3?"#9fd3e8":"#3ce0c4"]),!1,Mt*.8)),k=ix();o.add(k.group);let K=new Ii(16763e3,3,9,1.4);o.add(K);let re=new Ii(4892927,0,14,1.2);re.position.copy(hi.river.c).multiplyScalar(Mt);let N=new Ii(11570431,0,14,1.2);N.position.copy(hi.crystal.c).multiplyScalar(Mt);let oe=new Ii(16747069,0,16,1.1);oe.position.copy(hi.heart.c).multiplyScalar(Mt),o.add(re,N,oe);let ke=new C,He=new C,Ye=new C,it=($,J)=>J.copy(bs.getPointAt(cl($))).multiplyScalar(Mt),ne=$=>{let J=bs.getTangentAt(cl($)),V=new C().crossVectors(J,new C(0,1,0)).normalize();return Ye.crossVectors(V,J).normalize()},ie=new C,ye=new C,Oe=[oo(-34,34,80),oo(10,18,-18)],Ce=[oo(0,9,16),oo(0,-6,-12)],je=[oo(-34,30,66),oo(16,24,-22)],ft=hi.heart.c.clone().multiplyScalar(Mt);function we($,J){it($,ie).addScaledVector(ne($),.7*Mt),it(J?$-.014:$+.014,ye).addScaledVector(ne($),.2*Mt)}let qe=($,J,V)=>{ie.lerpVectors($[0],J[0],V),ye.lerpVectors($[1],J[1],V)},Ze=$=>{let J=0,V=1/0;for(let he=0;he<=400;he++){let Se=bs.getPointAt(he/400).distanceToSquared($);Se<V&&(V=Se,J=he/400)}return J},De=[[0,0],[(.3-.13)/.56,Ze(hi.bone.c)],[(.45-.13)/.56,Ze(hi.river.c)],[(.59-.13)/.56,Ze(hi.crystal.c)],[1,Ze(hi.heart.c)-.045]],j=$=>{for(let J=1;J<De.length;J++){let[V,he]=De[J-1],[Se,st]=De[J];if($<=Se)return he+($-V)/(Se-V)*(st-he)}return De[De.length-1][1]},H={x:0,y:0,tx:0,ty:0},_t={p:r?.99:0},ct=-1,Je=$=>t.querySelector($),Fe=Je(".bw-marker"),F=Je(".bw-depth b"),T=Je(".bw-layer"),I=Je(".bw-card small"),U=Je(".bw-card h2"),W=Je(".bw-card p"),X=Je(".bw-card .bw-found b"),ge=Array.from(t.querySelectorAll(".bw-slot")),se=new Pt,Pe=new _n,Ae=new C,ue=new C,de=["SURFACE","TOPSOIL","BONE HALL","BLIND RIVER","CRYSTAL HALL","HEART ROOT"];function Le($){let J=ox(_t.p),V={...J,along:j(J.along)},he=V.p;if(u.uBloom.value=V.bloom,g.uGrey.value=1-V.bloom,P.uTime.value=$,he<.13)qe(Oe,Ce,V.dive);else if(V.exit>0){we(.02,!0);let ae=[ie.clone(),ye.clone()];qe(ae,je,Qd(V.exit))}else if(V.orbit>0&&V.rewind===0){we(De[De.length-1][1],!1);let ae=ie.clone(),Ge=ye.clone(),Xe=(he-.68)*9;ke.set(ft.x+Math.sin(Xe)*3.4,ft.y+.9,ft.z+Math.cos(Xe)*3.4),ie.lerpVectors(ae,ke,V.orbit),ye.lerpVectors(Ge,ft,V.orbit)}else we(V.rewind>0?j(J.along):V.along,V.rewind>0);H.x+=(H.tx-H.x)*.05,H.y+=(H.ty-H.y)*.05,ye.x+=H.x*.5,ye.y-=H.y*.3,ie.y+=Math.sin($*1.4)*.03,l.position.copy(ie),l.lookAt(ye),f.position.copy(ie);let Se=he<.13?V.dive*.9:V.exit>0?1-V.exit:1,st=ie.z/Mt,Te=st>-92?[.16,.1,.07]:st>-168?[.22,.13,.1]:st>-248?[.05,.1,.2]:st>-322?[.12,.08,.22]:[.22,.07,.06];a.setRGB(.88,.89,.92).lerp(new Me(...Te),Se),o.fog.color.copy(a),o.fog.near=6+(1-Se)*40,o.fog.far=26+(1-Se)*200,c.intensity=1.4-Se*1.15,f.visible=Se<.97,o.background.copy(a),h.intensity=2.2*(1-Se);let tt=Math.min(De[De.length-1][1]+.025,V.along+.05);V.exit>.5?(k.group.position.copy(oo(12,9,-14)),k.group.rotation.set(0,.6,0)):(it(V.rewind>0?De[De.length-1][1]+.025:tt,ue).addScaledVector(ne(tt),-(Qr-.9)*Mt),k.group.position.copy(ue),k.group.position.y+=Math.abs(Math.sin($*6))*.04,it(tt+.01,He).addScaledVector(ne(tt),-(Qr-.9)*Mt),k.group.lookAt(He)),k.capMesh.visible=he>.19,k.lampMesh.visible=V.give<.5,K.position.copy(k.group.position).add(new C(0,.9,0)),K.intensity=4*Se*(1-V.give),re.intensity=30*Se,N.intensity=26*Se;let We=.75+.25*Math.sin($*1.6);S.material.color.setScalar(We);let rt=V.give;oe.intensity=5+rt*16+Math.sin($*3)*2*rt,w.material.color.setRGB(.22+rt*.78,.25+rt*.4,.38-rt*.22).multiplyScalar(.85+.15*Math.sin($*(2+rt*3))),w.rotation.set($*.3,$*.5,0),w.scale.setScalar(1+rt*.25+Math.sin($*3.2)*.06*rt),m.uPulse.value=V.pulse>0?Math.max(0,V.along-.015):-1,m.uLit.value=rt,b.uPulse.value=V.pulse>0?V.exit>0?1-V.exit*1.4:1.2:-1,b.uLit.value=rt;let zt=hi.river;for(let ae=0;ae<16;ae++){let Ge=$*(.4+ae%4*.12)+ae*1.7,Xe=Math.max(0,Math.sin($*1.3+ae*2.1))**6*3;ue.set(zt.c.x+Math.cos(Ge)*zt.r.x*.55,d.waterLevel+.8+Xe,zt.c.z+Math.sin(Ge*1.3)*zt.r.z*.55).multiplyScalar(Mt),se.compose(ue,Pe.setFromEuler(new Xn(0,-Ge,0)),Ae.set(Mt*1.6,Mt*.6,Mt*.8)),z.setMatrixAt(ae,se)}if(z.instanceMatrix.needsUpdate=!0,L.forEach(ae=>ae.m.scale.setScalar(Math.max(.001,Qd((V.bloom-ae.delay)/.45)))),B.visible=V.bloom>.2,B.position.y=(V.bloom-1)*Mt*2,G.visible=V.bloom>.3,G.visible)for(let ae=0;ae<140;ae++){let Ge=($*.08+ae*.0137)%1;ue.set(18+Math.sin(ae*2.3)*22+Math.sin($+ae)*2,46-Ge*44,-24+Math.cos(ae*1.7)*22).multiplyScalar(Mt),se.compose(ue,Pe.setFromEuler(new Xn($+ae,$*.7,0)),Ae.setScalar(Mt*1.1*V.bloom)),G.setMatrixAt(ae,se)}G.instanceMatrix.needsUpdate=!0,s.render(n,o,l);let pt=he<.13||V.exit>0?0:V.along;if(Fe&&(Fe.style.top=`${pt*100}%`),F&&(F.textContent=String(Math.round(pt*412)).padStart(3,"0")),T&&(T.textContent=V.exit>0||he<.12?de[0]:de[Math.min(5,1+Math.floor(pt*4.99))]),V.chapter!==ct){ct=V.chapter;let[ae,Ge,Xe,nt]=rx[V.chapter];I&&(I.textContent=`SPECIMEN ${ae} / VII`),U&&(U.textContent=Ge),W&&(W.textContent=Xe),X&&(X.textContent=nt)}ge.forEach((ae,Ge)=>{let Xe=sx[Ge===5?6:Ge],nt=he>=Xe;ae.classList.toggle("is-found",nt),ae.classList.toggle("is-given",Ge===0&&V.give>.5),ae.classList.toggle("is-new",nt&&he<Xe+.03)}),e.dataset.scrollProgress=he.toFixed(3),e.dataset.storyBeat=String(V.chapter+1)}function Ne(){let $=Math.max(1,e.clientWidth),J=Math.max(1,e.clientHeight),V=Math.ceil($/i),he=Math.ceil(J/i);n.setSize(V,he,!1),s.setSize(V,he),l.aspect=$/J,l.updateProjectionMatrix(),Le(performance.now()/1e3)}Ne();let _e;r||(_e=ce.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".bw-journey",start:"top top",end:"bottom bottom",scrub:1.3}}),_e.to(_t,{p:1,duration:1},0),_e.to(".bw-title",{autoAlpha:0,scale:1.4,duration:.05,ease:"power2.in"},.03),_e.fromTo(".bw-card, .bw-gauge, .bw-bar",{autoAlpha:0},{autoAlpha:1,duration:.02,ease:"steps(4)"},.08),r0.forEach(($,J)=>{J&&_e.fromTo(".bw-card",{scale:1.25,rotation:-4},{scale:1,rotation:0,duration:.008,ease:"steps(4)",immediateRender:!1},$+.002)}),_e.fromTo(".bw-flash",{autoAlpha:0},{autoAlpha:.85,duration:.004},.79),_e.to(".bw-flash",{autoAlpha:0,duration:.03},.795),ce.from(".bw-title .bw-l",{y:40,autoAlpha:0,duration:.6,stagger:.06,ease:"steps(6)",delay:.3}),ce.from(".bw-nav",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ce.utils.toArray(".bw-notes article").forEach(($,J)=>ce.from($,{autoAlpha:0,y:40,rotation:J%2?2:-2,duration:.7,ease:"steps(7)",scrollTrigger:{trigger:$,start:"top 90%"}})));let Ee=$=>{H.tx=($.clientX/innerWidth-.5)*2,H.ty=($.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",Ee,{passive:!0});let O=0,xe=!0,pe=new IntersectionObserver(([$])=>{xe=$.isIntersecting,xe&&fe()});pe.observe(e);let Ie=$=>{O=0,!(!xe||document.hidden)&&(Le($/1e3),fe())};function fe(){!O&&xe&&!document.hidden&&!r&&(O=requestAnimationFrame(Ie))}let le=()=>document.hidden?(cancelAnimationFrame(O),O=0):fe();return document.addEventListener("visibilitychange",le),window.addEventListener("resize",Ne),fe(),()=>{cancelAnimationFrame(O),pe.disconnect(),_e?.scrollTrigger?.kill(),_e?.kill(),window.removeEventListener("pointermove",Ee),window.removeEventListener("resize",Ne),document.removeEventListener("visibilitychange",le),o.traverse($=>{let J=$;J.geometry?.dispose(),(Array.isArray(J.material)?J.material:J.material?[J.material]:[]).forEach(V=>V.dispose())}),s.dispose(),n.dispose(),n.domElement.remove()}}function Zc(r){let e=new jt,t=new kt(36,1,.1,80),n=new $e;t.position.set(0,0,9),e.add(n,new Wi(16777215,1.2));let i=new hn(16771279,3);i.position.set(3,4,5),e.add(i);let s=h=>new xt({color:h,roughness:.3,metalness:.25,side:nn,emissive:h,emissiveIntensity:.16}),o=[],a=(h,u)=>{let f=new vt().setFromPoints(h),d=new Rr(f,new ar({color:u}));return n.add(d),d};if(r==="nereid"){let h=new Ue(new Xt(1.35,64,32,0,Math.PI*2,0,Math.PI*.56),s("#9ccff2"));h.position.y=.55,n.add(h);for(let u=0;u<28;u++){let f=u/28*Math.PI*2,d=Array.from({length:85},(p,_)=>new C(Math.cos(f)*1.13,.5-_*.046,Math.sin(f)*1.13)),g=a(d,u%3?"#6285de":"#e4a1eb");o.push(p=>{let _=g.geometry.attributes.position;for(let m=0;m<85;m++){let x=m/84;_.setXYZ(m,Math.cos(f)*(1.13-.5*x)+Math.sin(x*10-p*1.2+f)*x*.3,.5-x*3.4,Math.sin(f)*(1.13-.5*x)+Math.cos(x*8-p+f)*x*.25)}_.needsUpdate=!0})}o.push(u=>{h.scale.set(1+Math.sin(u*1.6)*.07,1-Math.sin(u*1.6)*.12,1+Math.sin(u*1.6)*.07)}),n.position.y=.6}else if(r==="zephyr"){let h=new Ue(new Xt(.18,20,16),s("#c2a272"));n.add(h);for(let f=0;f<150;f++){let d=1-2*(f+.5)/150,g=f*2.399963,p=Math.sqrt(1-d*d),_=new C(Math.cos(g)*p,d,Math.sin(g)*p);a([_.clone().multiplyScalar(.15),_.clone().multiplyScalar(1.55)],"#aaa18c");let m=_.clone().multiplyScalar(1.55);for(let x=0;x<7;x++){let v=x/7*Math.PI*2;a([m,m.clone().add(new C(Math.cos(v)*.21,.17,Math.sin(v)*.21))],"#e8e4d6")}}let u=new Ue(new cn(.022,.04,2.7,8),s("#7d8775"));u.position.y=-1.5,n.add(u)}else if(r==="vernant")for(let h=0;h<7;h++){let u=new $e;n.add(u),u.rotation.z=(h-3)*.29,u.rotation.y=h*.65,u.position.y=-2;let f=new un(Array.from({length:25},(d,g)=>new C(0,g/24*3.9,Math.sin(g/24*2)*.3)));u.add(new Ue(new oi(f,32,.018,5,!1),s("#819e68")));for(let d=0;d<24;d++){let g=d/24,p=Math.sin(Math.PI*g)*.85;for(let _ of[-1,1]){let m=new Ue(new Xt(1,12,6),s(d%3?"#70b896":"#c5db98"));m.scale.set(p,.045,.12*(1-g)+.015),m.position.set(_*p*.8,g*3.9,Math.sin(g*2)*.3),m.rotation.z=_*.3,u.add(m)}}o.push(d=>{u.rotation.z=(h-3)*.29+Math.sin(d*.65+h)*.055,u.rotation.x=Math.sin(d*.45+h)*.12})}else{let h=Array.from({length:320},(d,g)=>{let p=g/319*Math.PI*5,_=.09*Math.exp(p*.19);return new C(Math.cos(p)*_,Math.sin(p)*_,0)}),u=new un(h),f=new Ue(new oi(u,380,.14,12,!1),s("#f4b78e"));n.add(f);for(let d=15;d<310;d+=3){let g=h[d],p=d/319*Math.PI*5,_=new Ue(new Bn(.16,.012,5,28),s(d%2?"#c15c60":"#ffe0ae"));_.position.copy(g),_.rotation.set(Math.PI/2,p,0),n.add(_)}n.rotation.z=-.8}let l=0,c=0;return{scene:e,camera:t,resize(h){t.position.z=h<1?12:9,r==="vernant"&&(n.scale.setScalar(.82),n.position.x=-.3)},update(h,u){l+=(u.x*u.on-l)*.035,c+=(u.y*u.on-c)*.035,n.rotation.y=Math.sin(h*.18)*.24+l*.35,n.rotation.x=c*.15;for(let f of o)f(h);r==="zephyr"&&(n.rotation.z=Math.sin(h*.4)*.08),r==="volute"&&(n.rotation.z=-.8+h*.06)}}}var cx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",b2={uniforms:{tDiffuse:{value:null},tSrc:{value:null},uGrid:{value:new ve(1,1)},uCell:{value:6},uTime:{value:0},uShape:{value:0},uGap:{value:.1},uLevels:{value:4},uMono:{value:0},uInk:{value:new Me(1,1,1)},uPaper:{value:new Me(0,0,0)},uBg:{value:new Me(0,0,0)},uSat:{value:1},uContrast:{value:1},uExposure:{value:1},uTwinkle:{value:.5},uSmear:{value:0}},vertexShader:cx,fragmentShader:`
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
    }`},M2={uniforms:{tDiffuse:{value:null},uCenter:{value:new ve(.5,.5)},uStrength:{value:.5}},vertexShader:cx,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec3 base = texture2D(tDiffuse, vUv).rgb, acc = vec3(0.0);
      vec2 step = (vUv - uCenter) * 0.022, uv = vUv; float w = 1.0;
      for (int i = 0; i < 40; i++) { uv -= step; acc += max(texture2D(tDiffuse, uv).rgb - 0.6, 0.0) * w; w *= 0.955; }
      gl_FragColor = vec4(base + acc * uStrength / 20.0, 1.0);
    }`},ef=class{constructor(e,t,n){this.host=e;this.subject=t;this.opts=n;this.renderer=new li({antialias:!1,powerPreference:"high-performance"}),this.dpr=Math.min(devicePixelRatio||1,1.5),this.renderer.setPixelRatio(this.dpr),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,e.append(this.renderer.domElement),this.src=new gn(4,4,{type:wn,samples:4,minFilter:en,magFilter:en}),this.composer=new il(this.renderer),this.look=new qo(b2);let i=this.look.uniforms;i.tSrc.value=this.src.texture,i.uShape.value=n.shape==="pixel"?0:n.shape==="led"?1:2,i.uGap.value=n.gap,i.uLevels.value=n.levels,i.uMono.value=n.mono?1:0,n.mono&&(i.uInk.value.set(n.mono.ink).convertSRGBToLinear(),i.uPaper.value.set(n.mono.paper).convertSRGBToLinear()),i.uBg.value.set(n.background).convertSRGBToLinear(),i.uSat.value=n.saturation??1,i.uContrast.value=n.contrast??1,i.uExposure.value=n.exposure??1,i.uTwinkle.value=n.twinkle,i.uSmear.value=n.smear??0,this.composer.addPass(this.look),n.rays&&(this.rays=new qo(M2),this.rays.uniforms.uStrength.value=n.rays,this.composer.addPass(this.rays)),this.bloom=new to(new ve(256,256),...n.bloom),this.composer.addPass(this.bloom),this.composer.addPass(new rl),this.resize()}host;subject;opts;renderer;src;composer;look;rays;bloom;dpr;resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(e,t),this.bloom.resolution.set(e/2,t/2);let n=Math.ceil(e/this.opts.cell),i=Math.ceil(t/this.opts.cell);this.src.setSize(n,i),this.look.uniforms.uGrid.value.set(n,i),this.subject.camera.aspect=e/t,this.subject.camera.updateProjectionMatrix(),this.subject.resize?.(e/t)}render(e,t){this.subject.update(e,t),this.look.uniforms.uTime.value=e,this.rays&&this.subject.focus&&this.rays.uniforms.uCenter.value.copy(this.subject.focus()),this.renderer.setRenderTarget(this.src),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.subject.scene,this.subject.camera),this.renderer.setRenderTarget(null),this.composer.render()}dispose(){this.subject.scene.traverse(e=>{let t=e;t.geometry?.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(n=>{Object.values(n).forEach(i=>i instanceof Un&&i.dispose()),n.dispose()})}),this.src.dispose(),this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};var tf=3,Fr=()=>((tf=tf*16807%2147483647)-1)/2147483646;function E2(){let r=new Eo;return r.moveTo(.02,.04),r.bezierCurveTo(.18,.55,.52,.98,1.04,1.04),r.bezierCurveTo(1.2,.84,1.16,.46,1,.2),r.bezierCurveTo(.76,.02,.42,-.04,.08,-.04),r}function S2(){let r=new Eo;return r.moveTo(.04,-.02),r.bezierCurveTo(.42,.06,.84,0,.88,-.32),r.bezierCurveTo(.9,-.62,.62,-.86,.44,-.84),r.bezierCurveTo(.36,-.98,.3,-1.12,.24,-1.1),r.bezierCurveTo(.22,-.92,.18,-.6,.06,-.16),r}function T2(r,e,t){tf=t?7:19;let n=512,i=document.createElement("canvas");i.width=i.height=n;let s=i.getContext("2d"),o=p=>(p-e.min.x)/(e.max.x-e.min.x)*n,a=p=>n-(p-e.min.y)/(e.max.y-e.min.y)*n,l=new Path2D;r.getPoints(80).forEach((p,_)=>_?l.lineTo(o(p.x),a(p.y)):l.moveTo(o(p.x),a(p.y))),l.closePath(),s.save(),s.clip(l);let c=[o(.02),a(0)],h=s.createRadialGradient(c[0],c[1],0,c[0],c[1],n*1.1);h.addColorStop(0,"#f7f0c8"),h.addColorStop(.35,"#f2c9a6"),h.addColorStop(.7,"#e9a9c7"),h.addColorStop(1,"#b7a6ef"),s.fillStyle=h,s.fillRect(0,0,n,n);for(let p=0;p<5e3;p++)s.fillStyle=`rgba(${Fr()>.5?"255,255,240":"120,90,120"},${Fr()*.35})`,s.fillRect(Fr()*n,Fr()*n,2,2);s.strokeStyle="rgba(40,24,36,0.85)",s.lineCap="round";let u=t?9:7,f=[];for(let p=0;p<u;p++){let _=t?.15+p/(u-1)*1.05:-1.45+p/(u-1)*1.3,m=c[0]+Math.cos(_)*n*1.3,x=c[1]-Math.sin(_)*n*1.3;s.lineWidth=5-p*.25,s.beginPath(),s.moveTo(c[0],c[1]),s.quadraticCurveTo((c[0]+m)/2+(Fr()-.5)*40,(c[1]+x)/2+(Fr()-.5)*40,m,x),s.stroke(),f.push([m,x])}s.lineWidth=2.5;for(let p of[.32,.52])s.beginPath(),f.forEach(([_,m],x)=>{let v=c[0]+(_-c[0])*p*(.9+Fr()*.2),y=c[1]+(m-c[1])*p*(.9+Fr()*.2);x?s.lineTo(v,y):s.moveTo(v,y)}),s.stroke();s.restore(),s.save(),s.clip(l),s.strokeStyle="rgba(34,20,34,0.95)",s.lineWidth=n*.13,s.stroke(l),r.getSpacedPoints(t?26:22).forEach((p,_)=>{if(Math.hypot(p.x,p.y)<.35)return;let m=o(p.x),x=a(p.y),v=o(.4),y=a(t?.4:-.35);for(let[M,S,w]of[[.075,9,"#fff5d8"],[.15,6,"#f6c2e0"]]){let P=m+(v-m)*M,b=x+(y-x)*M;s.fillStyle=w,s.beginPath(),s.arc(P,b,S*(_%2?.8:1.1),0,7),s.fill()}}),s.restore();let g=new Cr(i);return g.colorSpace=Kt,g}function w2(r,e){let t=new ac(r,40);t.computeBoundingBox();let n=t.boundingBox,i=new dc(new ve(n.min.x,n.min.y),new ve(n.max.x,n.max.y)),s=t.getAttribute("position"),o=t.getAttribute("uv");for(let l=0;l<s.count;l++)o.setXY(l,(s.getX(l)-i.min.x)/(i.max.x-i.min.x),(s.getY(l)-i.min.y)/(i.max.y-i.min.y));let a=new Ut({side:nn,uniforms:{map:{value:T2(r,i,e)},uTime:{value:0}},vertexShader:`
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
      }`});return new Ue(t,a)}function ux(){let r=new jt,e=new kt(34,1,.1,50);e.position.set(0,0,5.6);let t=new $e;r.add(t);let n=[];for(let p of[1,-1])for(let _ of[!0,!1]){let m=new $e,x=w2(_?E2():S2(),_);x.scale.set(p,1,1),m.add(x),t.add(m),n.push({pivot:m,side:p,fore:_,mats:x.material})}let i=new bn({color:new Me("#4fbf98")}),s=new Ue(new Na(.06,.26,6,12),i);s.position.y=0;let o=new Ue(new Na(.04,.6,6,12),new bn({color:"#7da890"}));o.position.y=-.52;let a=new Ue(new Xt(.075,16,12),i);a.position.y=.27,t.add(s,o,a);let l=new ar({color:"#5d3b62"});for(let p of[1,-1]){let _=new ds(new C(0,.3,0),new C(p*.12,.55,.05),new C(p*.3,.78,.02)),m=new Rr(new vt().setFromPoints(_.getPoints(16)),l);t.add(m);let x=new Ue(new Xt(.025,8,6),l);x.position.set(p*.3,.78,.02),t.add(x)}tf=41;let c=140,h=new Float32Array(c*3),u=new Float32Array(c*3);for(let p=0;p<c;p++)u.set([(Fr()-.5)*6,(Fr()-.5)*3.6,(Fr()-.5)*2],p*3);let f=new vt;f.setAttribute("position",new Nt(h,3));let d=new Jn(f,new si({size:.012,color:"#c9b2a8",transparent:!0,opacity:.35}));r.add(d);let g=new ve;return{scene:r,camera:e,resize(p){t.scale.setScalar(p<1?.7:1)},update(p,_){let m=.5+.5*Math.sin(p*.37),x=Math.sin(p*(2.2+m*.6)),v=.1+(.5+.5*x)*(.8-m*.45);for(let y of n)y.pivot.rotation.y=-y.side*v*(y.fore?1:.92),y.pivot.rotation.z=y.side*(y.fore?.05:-.03)*x,y.mats.uniforms.uTime.value=p;g.x+=(_.x*_.on-g.x)*.04,g.y+=(_.y*_.on-g.y)*.04,t.position.set(Math.sin(p*.21)*.08,.3+Math.sin(p*.7)*.05-x*.02,0),t.rotation.set(-.22-g.y*.25+Math.sin(p*.3)*.05,g.x*.45+Math.sin(p*.17)*.2,Math.sin(p*.23)*.06);for(let y=0;y<c;y++)h[y*3]=u[y*3]+Math.sin(p*.2+y)*.15,h[y*3+1]=(u[y*3+1]+p*.05+1.8)%3.6-1.8,h[y*3+2]=u[y*3+2];f.attributes.position.needsUpdate=!0}}}var o0=11,Qi=()=>((o0=o0*16807%2147483647)-1)/2147483646;function s0(r,e,t,n=.7){let i=new On(1,1,6,10),s=i.getAttribute("position");for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getY(o)+.5,c=Math.pow(Math.sin(Math.PI*Math.min(1,l*.92+.04)),n)*e,h=a*c;s.setXYZ(o,h,l*r,h*h*t+l*l*r*.12)}return i.computeVertexNormals(),i}function hx(){let r=new jt,e=new kt(40,1,.1,60);e.position.set(0,.6,7),e.lookAt(0,.9,0),r.add(new Pr(16777215,2236962,1.4));let t=new hn(16777215,2.4);t.position.set(-4,6,6),r.add(t);let n=new Ue(new On(40,22),new Ut({uniforms:{uTime:{value:0}},depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec2 p = vUv * vec2(3.2, 1.8) + vec2(uTime * 0.012, 0.0);
          float c = fbm(p + fbm(p * 0.7 + uTime * 0.01));
          float lift = smoothstep(0.1, 1.0, vUv.y) * (0.55 + 0.45 * vUv.x);
          gl_FragColor = vec4(vec3(0.02 + c * 0.14 * lift + lift * 0.05), 1.0);
        }`}));n.position.set(0,2,-9),r.add(n);let i=new xt({color:16053488,roughness:.62,side:nn}),s=new xt({color:9079418,roughness:.9}),o=new xt({color:2895658,roughness:.9,side:nn}),a=s0(.42,.12,.9,.55),l=s0(.5,.3,1.4,.9),c=s0(.7,.12,.5,.6),h=[];o0=11;for(let f=0;f<64;f++){let d=-3.5+Qi()*4.6,g=(Qi()-.5)*(12+-d*1.4),p=1+Qi()*1.5+(d<-1?.6:0),_=new $e;_.position.set(g,-2.6,d),r.add(_);let m=(Qi()-.5)*.5,x=new ds(new C(0,0,0),new C(m*.6,p*.55,0),new C(m,p,0));_.add(new Ue(new oi(x,10,.018,5),o));for(let b=0;b<2;b++){let E=new Ue(c,o);E.position.copy(x.getPoint(.2+b*.25)),E.rotation.set(.3,Qi()*6.28,(b?-1:1)*(.8+Qi()*.4)),E.scale.setScalar(.6+Qi()*.4),_.add(E)}let v=new $e;v.position.copy(x.getPoint(1)),_.add(v);let y=Qi()>.55,M=y?8:15,S=[];for(let b=0;b<M;b++){let E=new $e;E.rotation.z=b/M*Math.PI*2+Qi()*.1;let L=new Ue(y?l:a,i);E.add(L),v.add(E),S.push(L)}let w=new Ue(new Xt(y?.09:.11,14,10),s);w.scale.z=.5,v.add(w);let P=.55+Qi()*.45;v.scale.setScalar(P),h.push({root:_,head:v,petals:S,x:g,phase:Qi()*6.28,delay:.2+(g+8)*.12+Qi()*.5,tilt:(Qi()-.5)*.9})}let u={x:0,s:0};return{scene:r,camera:e,resize(f){e.position.z=f<1?11:7},update(f,d){n.material.uniforms.uTime.value=f,u.x+=(d.x*7-u.x)*.08,u.s+=(d.on-u.s)*.05;for(let g of h){let p=Po.smoothstep(f,g.delay,g.delay+2.4),_=Math.sin(f*.8+g.phase)*.04;g.petals.forEach((y,M)=>{y.rotation.x=1.4*(1-p)+.14+_+M%2*.06});let m=Math.sin(f*.9-g.x*.35)*.07+Math.sin(f*2.3+g.phase)*.015,x=g.x-u.x,v=u.s*Math.exp(-(x*x)/3)*Math.sign(x||1)*.3;g.root.rotation.z=-(m+v),g.head.rotation.set(-.35+Math.sin(f*.6+g.phase)*.05,g.tilt,0)}}}}var dx=23,Ko=()=>((dx=dx*16807%2147483647)-1)/2147483646;function A2(r,e){let t=new On(1,1,8,14),n=t.getAttribute("position"),i=[],s=new Me("#fff3df"),o=new Me("#ff9ccc"),a=new Me("#ff3d96"),l=new Me;for(let c=0;c<n.count;c++){let h=n.getX(c),u=n.getY(c)+.5,f=Math.pow(Math.sin(Math.PI*Math.pow(u,.75)),.55)*e*(1-u*.1),d=h*f;n.setXYZ(c,d,u*r,-d*d*2.2/e+Math.pow(u,2.4)*r*.22),l.copy(s).lerp(o,Po.smoothstep(u,.05,.55)).lerp(a,Po.smoothstep(u,.6,1)*(.6+Math.abs(h)*.8)),i.push(l.r,l.g,l.b)}return t.setAttribute("color",new lt(i,3)),t.computeVertexNormals(),t}function fx(){let r=new jt,e=new kt(32,1,.1,50);e.position.set(0,2.4,8),e.lookAt(0,.35,0),r.add(new Wi(16766696,.35));let t=new hn(16773364,1.1);t.position.set(2,4,3),r.add(t);let n=new Ii(16763034,3,3.2,1.6);n.position.set(0,.45,0),r.add(n);let i=new $e;r.add(i);let s=new xt({vertexColors:!0,roughness:.55,side:nn,emissive:new Me("#ff6fae"),emissiveIntensity:.08}),o=[{n:11,len:.95,w:.6,open:1.32,y:-.04,twist:0},{n:10,len:.95,w:.58,open:.86,y:0,twist:.3},{n:8,len:.85,w:.54,open:.44,y:.05,twist:.1},{n:6,len:.62,w:.46,open:.16,y:.1,twist:.5}],a=[];o.forEach((m,x)=>{let v=A2(m.len,m.w);for(let y=0;y<m.n;y++){let M=new $e;M.rotation.y=y/m.n*Math.PI*2+m.twist,M.position.y=m.y;let S=new $e;S.position.z=.1+x*-.02,M.add(S);let w=new Ue(v,s);S.add(w),i.add(M),a.push({m:S,ring:x,jitter:(Ko()-.5)*.12})}});let l=new Ue(new cn(.17,.12,.14,24),new xt({color:"#f6d36a",emissive:"#ffb340",emissiveIntensity:.35}));l.position.y=.32,i.add(l);let c=new bn({color:new Me("#ffd98a")});for(let m=0;m<46;m++){let x=Ko()*Math.PI*2,v=.17+Ko()*.06,y=.12+Ko()*.1,M=new Ue(new cn(.006,.006,y,4),c);M.position.set(Math.cos(x)*v,.32+y/2,Math.sin(x)*v),M.rotation.set(Math.sin(x)*.5,0,-Math.cos(x)*.5),i.add(M)}let h=50,u=new Float32Array(h*3),f=new Float32Array(h*3);for(let m=0;m<h;m++)f.set([Ko()*Math.PI*2,Ko(),Ko()],m*3);let d=new vt;d.setAttribute("position",new Nt(u,3)),r.add(new Jn(d,new si({size:.014,color:"#b98aa4"})));let g=new ve,p=new C,_=new ve;return{scene:r,camera:e,focus(){return p.set(0,.45,0).applyMatrix4(i.matrixWorld).project(e),_.set(p.x*.5+.5,p.y*.5+.5)},resize(m){i.scale.setScalar(m<1?.7:1)},update(m,x){let v=Po.smoothstep(m,.2,3.2),y=Math.sin(m*.55)*.07;for(let{m:M,ring:S,jitter:w}of a){let P=o[S];M.rotation.x=.08+(P.open+y*(1+S*.5)+w)*v}g.x+=(x.x*x.on-g.x)*.035,g.y+=(x.y*x.on-g.y)*.035,i.rotation.set(g.y*.25,m*.08+g.x*.5,g.x*-.08),i.position.y=Math.sin(m*.5)*.04,n.intensity=3+Math.sin(m*1.3)*.6+Math.sin(m*3.1)*.25;for(let M=0;M<h;M++){let S=f[M*3],w=(f[M*3+1]+m*(.05+f[M*3+2]*.06))%1,P=.15+w*(.6+f[M*3+2]);u.set([Math.cos(S+w*2)*P,.35+w*2.6,Math.sin(S+w*2)*P],M*3)}d.attributes.position.needsUpdate=!0}}}var R2={volute:[()=>Zc("volute"),{cell:3,shape:"streak",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#160d10"}],vernant:[()=>Zc("vernant"),{cell:3,shape:"pixel",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#07130e"}],zephyr:[()=>Zc("zephyr"),{cell:3,shape:"pixel",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#11110f"}],nereid:[()=>Zc("nereid"),{cell:3,shape:"led",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#070e1a"}],halcyon:[ux,{cell:5,shape:"pixel",gap:.06,levels:4,saturation:1.25,exposure:.9,twinkle:.45,bloom:[.35,.4,.62],background:"#141414"}],bloomfield:[hx,{cell:7,shape:"pixel",gap:.13,levels:7,mono:{ink:"#f2f2ee",paper:"#0b0b0b"},contrast:1.2,exposure:1.05,twinkle:.25,bloom:[.32,.4,.55],background:"#050505"}],aurelle:[fx,{cell:4,shape:"streak",gap:.1,levels:5,smear:.045,rays:.5,saturation:1.15,exposure:.85,twinkle:.35,bloom:[.7,.6,.45],background:"#0a0809"}]};function px(r,e){let t=document.querySelector(".lv-art");if(!t)return;let n;try{let[p,_]=R2[r];n=new ef(t,p(),_)}catch{t.classList.add("is-fallback");return}let i={x:0,y:0,on:0},s=p=>{let _=t.getBoundingClientRect();i.x=(p.clientX-_.left)/_.width*2-1,i.y=(p.clientY-_.top)/_.height*2-1,i.on=p.clientY>=_.top&&p.clientY<=_.bottom&&p.pointerType!=="touch"?1:0};window.addEventListener("pointermove",s,{passive:!0});let o=performance.now(),a=0,l=!0,c=()=>n.render(7,i),h=p=>{a=0,!(!l||document.hidden)&&(n.render((p-o)/1e3,i),a=requestAnimationFrame(h))},u=()=>{!a&&l&&!document.hidden&&!e&&(a=requestAnimationFrame(h))},f=new IntersectionObserver(([p])=>{l=p.isIntersecting,l&&u()});f.observe(t);let d=()=>{n.resize(),e&&c()},g=()=>document.hidden?(cancelAnimationFrame(a),a=0):u();return window.addEventListener("resize",d),document.addEventListener("visibilitychange",g),e?c():(u(),ce.from(".lv-nav",{autoAlpha:0,y:-14,duration:.9,ease:"power2.out",delay:.2}),ce.from(".lv-rise",{autoAlpha:0,y:34,duration:1.3,stagger:.12,ease:"power3.out",delay:.45}),ce.utils.toArray(".lv-reveal").forEach(p=>ce.from(p,{autoAlpha:0,y:50,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:p,start:"top 86%"}})),ce.from(".lv-marks .wm",{autoAlpha:0,y:16,stagger:.08,duration:.8,scrollTrigger:{trigger:".lv-band",start:"top 85%"}})),()=>{cancelAnimationFrame(a),f.disconnect(),window.removeEventListener("pointermove",s),window.removeEventListener("resize",d),document.removeEventListener("visibilitychange",g),n.dispose()}}var C2=["halcyon","bloomfield","aurelle","nereid","zephyr","vernant","volute"],a0=r=>C2.includes(r);function mx(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function P2(r,e,t){return e&&mx(r.prototype,e),t&&mx(r,t),r}var ti,sf,I2,er,ao,lo,hl,_x,jo,Kc,vx,Ms,Nr,xx,yx=function(){return ti||typeof window<"u"&&(ti=window.gsap)&&ti.registerPlugin&&ti},bx=1,ul=[],wt=[],Ur=[],jc=Date.now,l0=function(e,t){return t},L2=function(){var e=Kc.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,wt),i.push.apply(i,Ur),wt=n,Ur=i,l0=function(o,a){return t[o](a)}},Ss=function(e,t){return~Ur.indexOf(e)&&Ur[Ur.indexOf(e)+1][t]},Qc=function(e){return!!~vx.indexOf(e)},Si=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Ei=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nf="scrollLeft",rf="scrollTop",c0=function(){return Ms&&Ms.isPressed||wt.cache++},of=function(e,t){var n=function i(s){if(s||s===0){bx&&(er.history.scrollRestoration="manual");var o=Ms&&Ms.isPressed;s=i.v=Math.round(s)||(Ms&&Ms.iOS?1:0),e(s),i.cacheID=wt.cache,o&&l0("ss",s)}else(t||wt.cache!==i.cacheID||l0("ref"))&&(i.cacheID=wt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fi={s:nf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:of(function(r){return arguments.length?er.scrollTo(r,Fn.sc()):er.pageXOffset||ao[nf]||lo[nf]||hl[nf]||0})},Fn={s:rf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fi,sc:of(function(r){return arguments.length?er.scrollTo(fi.sc(),r):er.pageYOffset||ao[rf]||lo[rf]||hl[rf]||0})},Ti=function(e,t){return(t&&t._ctx&&t._ctx.selector||ti.utils.toArray)(e)[0]||(typeof e=="string"&&ti.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},D2=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Es=function(e,t){var n=t.s,i=t.sc;Qc(e)&&(e=ao.scrollingElement||lo);var s=wt.indexOf(e),o=i===Fn.sc?1:2;!~s&&(s=wt.push(e)-1),wt[s+o]||Si(e,"scroll",c0);var a=wt[s+o],l=a||(wt[s+o]=of(Ss(e,n),!0)||(Qc(e)?i:of(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ti.getProperty(e,"scrollBehavior")==="smooth"),l},af=function(e,t,n){var i=e,s=e,o=jc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(g,p){var _=jc();p||_-o>l?(s=i,i=g,a=o,o=_):n?i+=g:i=s+(g-s)/(_-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(g){var p=a,_=s,m=jc();return(g||g===0)&&g!==i&&h(g),o===a||m-a>c?0:(i+(n?_:-_))/((n?m:o)-p)*1e3};return{update:h,reset:u,getVelocity:f}},Jc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},gx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Mx=function(){Kc=ti.core.globals().ScrollTrigger,Kc&&Kc.core&&L2()},Ex=function(e){return ti=e||yx(),!sf&&ti&&typeof document<"u"&&document.body&&(er=window,ao=document,lo=ao.documentElement,hl=ao.body,vx=[er,ao,lo,hl],I2=ti.utils.clamp,xx=ti.core.context||function(){},jo="onpointerenter"in hl?"pointer":"mouse",_x=Cn.isTouch=er.matchMedia&&er.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in er||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nr=Cn.eventTypes=("ontouchstart"in lo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return bx=0},500),Mx(),sf=1),sf};fi.op=Fn;wt.cache=0;var Cn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){sf||Ex(ti)||console.warn("Please gsap.registerPlugin(Observer)"),Kc||Mx();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,g=n.wheelSpeed,p=n.event,_=n.onDragStart,m=n.onDragEnd,x=n.onDrag,v=n.onPress,y=n.onRelease,M=n.onRight,S=n.onLeft,w=n.onUp,P=n.onDown,b=n.onChangeX,E=n.onChangeY,L=n.onChange,A=n.onToggleX,D=n.onToggleY,B=n.onHover,G=n.onHoverEnd,z=n.onMove,k=n.ignoreCheck,K=n.isNormalizer,re=n.onGestureStart,N=n.onGestureEnd,oe=n.onWheel,ke=n.onEnable,He=n.onDisable,Ye=n.onClick,it=n.scrollSpeed,ne=n.capture,ie=n.allowClicks,ye=n.lockAxis,Oe=n.onLockAxis;this.target=a=Ti(a)||lo,this.vars=n,d&&(d=ti.utils.toArray(d)),i=i||1e-9,s=s||0,g=g||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(er.getComputedStyle(hl).lineHeight)||22);var Ce,je,ft,we,qe,Ze,De,j=this,H=0,_t=0,ct=n.passive||!h&&n.passive!==!1,Je=Es(a,fi),Fe=Es(a,Fn),F=Je(),T=Fe(),I=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Nr[0]==="pointerdown",U=Qc(a),W=a.ownerDocument||ao,X=[0,0,0],ge=[0,0,0],se=0,Pe=function(){return se=jc()},Ae=function(Se,st){return(j.event=Se)&&d&&D2(Se.target,d)||st&&I&&Se.pointerType!=="touch"||k&&k(Se,st)},ue=function(){j._vx.reset(),j._vy.reset(),je.pause(),u&&u(j)},de=function(){var Se=j.deltaX=gx(X),st=j.deltaY=gx(ge),Te=Math.abs(Se)>=i,tt=Math.abs(st)>=i;L&&(Te||tt)&&L(j,Se,st,X,ge),Te&&(M&&j.deltaX>0&&M(j),S&&j.deltaX<0&&S(j),b&&b(j),A&&j.deltaX<0!=H<0&&A(j),H=j.deltaX,X[0]=X[1]=X[2]=0),tt&&(P&&j.deltaY>0&&P(j),w&&j.deltaY<0&&w(j),E&&E(j),D&&j.deltaY<0!=_t<0&&D(j),_t=j.deltaY,ge[0]=ge[1]=ge[2]=0),(we||ft)&&(z&&z(j),ft&&(_&&ft===1&&_(j),x&&x(j),ft=0),we=!1),Ze&&!(Ze=!1)&&Oe&&Oe(j),qe&&(oe(j),qe=!1),Ce=0},Le=function(Se,st,Te){X[Te]+=Se,ge[Te]+=st,j._vx.update(Se),j._vy.update(st),c?Ce||(Ce=requestAnimationFrame(de)):de()},Ne=function(Se,st){ye&&!De&&(j.axis=De=Math.abs(Se)>Math.abs(st)?"x":"y",Ze=!0),De!=="y"&&(X[2]+=Se,j._vx.update(Se,!0)),De!=="x"&&(ge[2]+=st,j._vy.update(st,!0)),c?Ce||(Ce=requestAnimationFrame(de)):de()},_e=function(Se){if(!Ae(Se,1)){Se=Jc(Se,h);var st=Se.clientX,Te=Se.clientY,tt=st-j.x,We=Te-j.y,rt=j.isDragging;j.x=st,j.y=Te,(rt||(tt||We)&&(Math.abs(j.startX-st)>=s||Math.abs(j.startY-Te)>=s))&&(ft||(ft=rt?2:1),rt||(j.isDragging=!0),Ne(tt,We))}},Ee=j.onPress=function(he){Ae(he,1)||he&&he.button||(j.axis=De=null,je.pause(),j.isPressed=!0,he=Jc(he),H=_t=0,j.startX=j.x=he.clientX,j.startY=j.y=he.clientY,j._vx.reset(),j._vy.reset(),Si(K?a:W,Nr[1],_e,ct,!0),j.deltaX=j.deltaY=0,v&&v(j))},O=j.onRelease=function(he){if(!Ae(he,1)){Ei(K?a:W,Nr[1],_e,!0);var Se=!isNaN(j.y-j.startY),st=j.isDragging,Te=st&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),tt=Jc(he);!Te&&Se&&(j._vx.reset(),j._vy.reset(),h&&ie&&ti.delayedCall(.08,function(){if(jc()-se>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(W.createEvent){var We=W.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,er,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(We)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,u&&st&&!K&&je.restart(!0),ft&&de(),m&&st&&m(j),y&&y(j,Te)}},xe=function(Se){return Se.touches&&Se.touches.length>1&&(j.isGesturing=!0)&&re(Se,j.isDragging)},pe=function(){return(j.isGesturing=!1)||N(j)},Ie=function(Se){if(!Ae(Se)){var st=Je(),Te=Fe();Le((st-F)*it,(Te-T)*it,1),F=st,T=Te,u&&je.restart(!0)}},fe=function(Se){if(!Ae(Se)){Se=Jc(Se,h),oe&&(qe=!0);var st=(Se.deltaMode===1?l:Se.deltaMode===2?er.innerHeight:1)*g;Le(Se.deltaX*st,Se.deltaY*st,0),u&&!K&&je.restart(!0)}},le=function(Se){if(!Ae(Se)){var st=Se.clientX,Te=Se.clientY,tt=st-j.x,We=Te-j.y;j.x=st,j.y=Te,we=!0,u&&je.restart(!0),(tt||We)&&Ne(tt,We)}},$=function(Se){j.event=Se,B(j)},J=function(Se){j.event=Se,G(j)},V=function(Se){return Ae(Se)||Jc(Se,h)&&Ye(j)};je=j._dc=ti.delayedCall(f||.25,ue).pause(),j.deltaX=j.deltaY=0,j._vx=af(0,50,!0),j._vy=af(0,50,!0),j.scrollX=Je,j.scrollY=Fe,j.isDragging=j.isGesturing=j.isPressed=!1,xx(this),j.enable=function(he){return j.isEnabled||(Si(U?W:a,"scroll",c0),o.indexOf("scroll")>=0&&Si(U?W:a,"scroll",Ie,ct,ne),o.indexOf("wheel")>=0&&Si(a,"wheel",fe,ct,ne),(o.indexOf("touch")>=0&&_x||o.indexOf("pointer")>=0)&&(Si(a,Nr[0],Ee,ct,ne),Si(W,Nr[2],O),Si(W,Nr[3],O),ie&&Si(a,"click",Pe,!0,!0),Ye&&Si(a,"click",V),re&&Si(W,"gesturestart",xe),N&&Si(W,"gestureend",pe),B&&Si(a,jo+"enter",$),G&&Si(a,jo+"leave",J),z&&Si(a,jo+"move",le)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=we=ft=!1,j._vx.reset(),j._vy.reset(),F=Je(),T=Fe(),he&&he.type&&Ee(he),ke&&ke(j)),j},j.disable=function(){j.isEnabled&&(ul.filter(function(he){return he!==j&&Qc(he.target)}).length||Ei(U?W:a,"scroll",c0),j.isPressed&&(j._vx.reset(),j._vy.reset(),Ei(K?a:W,Nr[1],_e,!0)),Ei(U?W:a,"scroll",Ie,ne),Ei(a,"wheel",fe,ne),Ei(a,Nr[0],Ee,ne),Ei(W,Nr[2],O),Ei(W,Nr[3],O),Ei(a,"click",Pe,!0),Ei(a,"click",V),Ei(W,"gesturestart",xe),Ei(W,"gestureend",pe),Ei(a,jo+"enter",$),Ei(a,jo+"leave",J),Ei(a,jo+"move",le),j.isEnabled=j.isPressed=j.isDragging=!1,He&&He(j))},j.kill=j.revert=function(){j.disable();var he=ul.indexOf(j);he>=0&&ul.splice(he,1),Ms===j&&(Ms=0)},ul.push(j),K&&Qc(a)&&(Ms=j),j.enable(p)},P2(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Cn.version="3.14.2";Cn.create=function(r){return new Cn(r)};Cn.register=Ex;Cn.getAll=function(){return ul.slice()};Cn.getById=function(r){return ul.filter(function(e){return e.vars.id===r})[0]};yx()&&ti.registerPlugin(Cn);var Qe,pl,Rt,fn,ir,qt,S0,Ef,fu,ou,tu,lf,pi,wf,_0,Ai,Sx,Tx,ml,zx,u0,Vx,wi,v0,Gx,Wx,co,x0,T0,gl,w0,au,y0,h0,cf=1,mi=Date.now,d0=mi(),xr=0,nu=0,wx=function(e,t,n){var i=nr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Ax=function(e,t){return t&&(!nr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},F2=function r(){return nu&&requestAnimationFrame(r)},Rx=function(){return wf=1},Cx=function(){return wf=0},es=function(e){return e},iu=function(e){return Math.round(e*1e5)/1e5||0},Xx=function(){return typeof window<"u"},qx=function(){return Qe||Xx()&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},ra=function(e){return!!~S0.indexOf(e)},Yx=function(e){return(e==="Height"?w0:Rt["inner"+e])||ir["client"+e]||qt["client"+e]},$x=function(e){return Ss(e,"getBoundingClientRect")||(ra(e)?function(){return Mf.width=Rt.innerWidth,Mf.height=w0,Mf}:function(){return Ts(e)})},N2=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ss(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Yx(s):e["client"+s])||0}},U2=function(e,t){return!t||~Ur.indexOf(e)?$x(e):function(){return Mf}},ts=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ss(e,n))?o()-$x(e)()[s]:ra(e)?(ir[n]||qt[n])-Yx(i):e[n]-e["offset"+i])},uf=function(e,t){for(var n=0;n<ml.length;n+=3)(!t||~t.indexOf(ml[n+1]))&&e(ml[n],ml[n+1],ml[n+2])},nr=function(e){return typeof e=="string"},gi=function(e){return typeof e=="function"},ru=function(e){return typeof e=="number"},Qo=function(e){return typeof e=="object"},eu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},f0=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},dl=Math.abs,Zx="left",Jx="top",A0="right",R0="bottom",ta="width",na="height",lu="Right",cu="Left",uu="Top",hu="Bottom",Nn="padding",_r="margin",vl="Width",C0="Height",Vn="px",vr=function(e){return Rt.getComputedStyle(e)},O2=function(e){var t=vr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Px=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ts=function(e,t){var n=t&&vr(e)[_0]!=="matrix(1, 0, 0, 1, 0, 0)"&&Qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Sf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Kx=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},B2=function(e){return function(t){return Qe.utils.snap(Kx(e),t)}},P0=function(e){var t=Qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},k2=function(e){return function(t,n){return P0(Kx(e))(t,n.direction)}},hf=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},df=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Ix={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ff={toggleActions:"play",anticipatePin:0},Tf={top:0,left:0,center:.5,bottom:1,right:1},vf=function(e,t){if(nr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Tf?Tf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pf=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,g=fn.createElement("div"),p=ra(n)||Ss(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,m=p?qt:n,x=e.indexOf("start")!==-1,v=x?c:h,y="border-color:"+v+";font-size:"+u+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return y+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(y+=(i===Fn?A0:R0)+":"+(o+parseFloat(f))+"px;"),a&&(y+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),g._isStart=x,g.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),g.style.cssText=y,g.innerText=t||t===0?e+"-"+t:e,m.children[0]?m.insertBefore(g,m.children[0]):m.appendChild(g),g._offset=g["offset"+i.op.d2],xf(g,0,i,x),g},xf=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+vl]=1,s["border"+a+vl]=0,s[n.p]=t+"px",Qe.set(e,s)},At=[],b0={},pu,Lx=function(){return mi()-xr>34&&(pu||(pu=requestAnimationFrame(ws)))},fl=function(){(!wi||!wi.isPressed||wi.startX>qt.clientWidth)&&(wt.cache++,wi?pu||(pu=requestAnimationFrame(ws)):ws(),xr||oa("scrollStart"),xr=mi())},p0=function(){Wx=Rt.innerWidth,Gx=Rt.innerHeight},su=function(e){wt.cache++,(e===!0||!pi&&!Vx&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!v0||Wx!==Rt.innerWidth||Math.abs(Rt.innerHeight-Gx)>Rt.innerHeight*.25))&&Ef.restart(!0)},sa={},H2=[],jx=function r(){return Yn(yt,"scrollEnd",r)||ea(!0)},oa=function(e){return sa[e]&&sa[e].map(function(t){return t()})||H2},tr=[],Qx=function(e){for(var t=0;t<tr.length;t+=5)(!e||tr[t+4]&&tr[t+4].query===e)&&(tr[t].style.cssText=tr[t+1],tr[t].getBBox&&tr[t].setAttribute("transform",tr[t+2]||""),tr[t+3].uncache=1)},ey=function(){return wt.forEach(function(e){return gi(e)&&++e.cacheID&&(e.rec=e())})},I0=function(e,t){var n;for(Ai=0;Ai<At.length;Ai++)n=At[Ai],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));au=!0,t&&Qx(t),t||oa("revert")},ty=function(e,t){wt.cache++,(t||!Ri)&&wt.forEach(function(n){return gi(n)&&n.cacheID++&&(n.rec=0)}),nr(e)&&(Rt.history.scrollRestoration=T0=e)},Ri,ia=0,Dx,z2=function(){if(Dx!==ia){var e=Dx=ia;requestAnimationFrame(function(){return e===ia&&ea(!0)})}},ny=function(){qt.appendChild(gl),w0=!wi&&gl.offsetHeight||Rt.innerHeight,qt.removeChild(gl)},Fx=function(e){return fu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ea=function(e,t){if(ir=fn.documentElement,qt=fn.body,S0=[Rt,fn,ir,qt],xr&&!e&&!au){$n(yt,"scrollEnd",jx);return}ny(),Ri=yt.isRefreshing=!0,au||ey();var n=oa("refreshInit");zx&&yt.sort(),t||I0(),wt.forEach(function(i){gi(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),At.slice(0).forEach(function(i){return i.refresh()}),au=!1,At.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),y0=1,Fx(!0),At.forEach(function(i){var s=ts(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Fx(!1),y0=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),wt.forEach(function(i){gi(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),ty(T0,1),Ef.pause(),ia++,Ri=2,ws(2),At.forEach(function(i){return gi(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ri=yt.isRefreshing=!1,oa("refresh")},M0=0,yf=1,du,ws=function(e){if(e===2||!Ri&&!au){yt.isUpdating=!0,du&&du.update(0);var t=At.length,n=mi(),i=n-d0>=50,s=t&&At[0].scroll();if(yf=M0>s?-1:1,Ri||(M0=s),i&&(xr&&!wf&&n-xr>200&&(xr=0,oa("scrollEnd")),tu=d0,d0=n),yf<0){for(Ai=t;Ai-- >0;)At[Ai]&&At[Ai].update(0,i);yf=1}else for(Ai=0;Ai<t;Ai++)At[Ai]&&At[Ai].update(0,i);yt.isUpdating=!1}pu=0},E0=[Zx,Jx,R0,A0,_r+hu,_r+lu,_r+uu,_r+cu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bf=E0.concat([ta,na,"boxSizing","max"+vl,"max"+C0,"position",_r,Nn,Nn+uu,Nn+lu,Nn+hu,Nn+cu]),V2=function(e,t,n){_l(n);var i=e._gsap;if(i.spacerIsNative)_l(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},m0=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=E0.length,o=t.style,a=e.style,l;s--;)l=E0[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[R0]=a[A0]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ta]=Sf(e,fi)+Vn,o[na]=Sf(e,Fn)+Vn,o[Nn]=a[_r]=a[Jx]=a[Zx]="0",_l(i),a[ta]=a["max"+vl]=n[ta],a[na]=a["max"+C0]=n[na],a[Nn]=n[Nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},G2=/([A-Z])/g,_l=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Qe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(G2,"-$1").toLowerCase())}},mf=function(e){for(var t=bf.length,n=e.style,i=[],s=0;s<t;s++)i.push(bf[s],n[bf[s]]);return i.t=e,i},W2=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Mf={left:0,top:0},Nx=function(e,t,n,i,s,o,a,l,c,h,u,f,d,g){gi(e)&&(e=e(l)),nr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?vf("0"+e.substr(3),n):0));var p=d?d.time():0,_,m,x;if(d&&d.seek(0),isNaN(e)||(e=+e),ru(e))d&&(e=Qe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&xf(a,n,i,!0);else{gi(t)&&(t=t(l));var v=(e||"0").split(" "),y,M,S,w;x=Ti(t,l)||qt,y=Ts(x)||{},(!y||!y.left&&!y.top)&&vr(x).display==="none"&&(w=x.style.display,x.style.display="block",y=Ts(x),w?x.style.display=w:x.style.removeProperty("display")),M=vf(v[0],y[i.d]),S=vf(v[1]||"0",n),e=y[i.p]-c[i.p]-h+M+s-S,a&&xf(a,S,i,n-S<20||a._isStart&&S>20),n-=n-S}if(g&&(l[g]=e||-.001,e<0&&(e=0)),o){var P=e+n,b=o._isStart;_="scroll"+i.d2,xf(o,P,i,b&&P>20||!b&&(u?Math.max(qt[_],ir[_]):o.parentNode[_])<=P+1),u&&(c=Ts(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Vn))}return d&&x&&(_=Ts(x),d.seek(f),m=Ts(x),d._caScrollDist=_[i.p]-m[i.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},X2=/(webkit|moz|length|cssText|inset)/i,Ux=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===qt){e._stOrig=s.cssText,a=vr(e);for(o in a)!+o&&!X2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Qe.core.getCache(e).uncache=1,t.appendChild(e)}},iy=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},gf=function(e,t,n){var i={};i[t.p]="+="+n,Qe.set(e,i)},Ox=function(e,t){var n=Es(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,g={};c=c||n();var p=iy(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=g,g[i]=function(){return p(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){wt.cache++,o.tween&&ws()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Qe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$n(e,"wheel",n.wheelHandler),yt.isTouch&&$n(e,"touchmove",n.wheelHandler),s},yt=(function(){function r(t,n){pl||r.register(Qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),x0(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nu){this.update=this.refresh=this.kill=es;return}n=Px(nr(n)||ru(n)||n.nodeType?{trigger:n}:n,ff);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,g=s.pinSpacing,p=s.invalidateOnRefresh,_=s.anticipatePin,m=s.onScrubComplete,x=s.onSnapComplete,v=s.once,y=s.snap,M=s.pinReparent,S=s.pinSpacer,w=s.containerAnimation,P=s.fastScrollEnd,b=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fi:Fn,L=!u&&u!==0,A=Ti(n.scroller||Rt),D=Qe.core.getCache(A),B=ra(A),G=("pinType"in n?n.pinType:Ss(A,"pinType")||B&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],k=L&&n.toggleActions.split(" "),K="markers"in n?n.markers:ff.markers,re=B?0:parseFloat(vr(A)["border"+E.p2+vl])||0,N=this,oe=n.onRefreshInit&&function(){return n.onRefreshInit(N)},ke=N2(A,B,E),He=U2(A,B),Ye=0,it=0,ne=0,ie=Es(A,E),ye,Oe,Ce,je,ft,we,qe,Ze,De,j,H,_t,ct,Je,Fe,F,T,I,U,W,X,ge,se,Pe,Ae,ue,de,Le,Ne,_e,Ee,O,xe,pe,Ie,fe,le,$,J;if(N._startClamp=N._endClamp=!1,N._dir=E,_*=45,N.scroller=A,N.scroll=w?w.time.bind(w):ie,je=ie(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(zx=1,n.refreshPriority===-9999&&(du=N)),D.tweenScroll=D.tweenScroll||{top:Ox(A,Fn),left:Ox(A,fi)},N.tweenTo=ye=D.tweenScroll[E.p],N.scrubDuration=function(Te){xe=ru(Te)&&Te,xe?O?O.duration(Te):O=Qe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return m&&m(N)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(u),_e=0,l||(l=i.vars.id)),y&&((!Qo(y)||y.push)&&(y={snapTo:y}),"scrollBehavior"in qt.style&&Qe.set(B?[qt,ir]:A,{scrollBehavior:"auto"}),wt.forEach(function(Te){return gi(Te)&&Te.target===(B?fn.scrollingElement||ir:A)&&(Te.smooth=!1)}),Ce=gi(y.snapTo)?y.snapTo:y.snapTo==="labels"?B2(i):y.snapTo==="labelsDirectional"?k2(i):y.directional!==!1?function(Te,tt){return P0(y.snapTo)(Te,mi()-it<500?0:tt.direction)}:Qe.utils.snap(y.snapTo),pe=y.duration||{min:.1,max:2},pe=Qo(pe)?ou(pe.min,pe.max):ou(pe,pe),Ie=Qe.delayedCall(y.delay||xe/2||.1,function(){var Te=ie(),tt=mi()-it<500,We=ye.tween;if((tt||Math.abs(N.getVelocity())<10)&&!We&&!wf&&Ye!==Te){var rt=(Te-we)/Je,zt=i&&!L?i.totalProgress():rt,pt=tt?0:(zt-Ee)/(mi()-tu)*1e3||0,ae=Qe.utils.clamp(-rt,1-rt,dl(pt/2)*pt/.185),Ge=rt+(y.inertia===!1?0:ae),Xe,nt,ut=y,pn=ut.onStart,Ct=ut.onInterrupt,Gn=ut.onComplete;if(Xe=Ce(Ge,N),ru(Xe)||(Xe=Ge),nt=Math.max(0,Math.round(we+Xe*Je)),Te<=qe&&Te>=we&&nt!==Te){if(We&&!We._initted&&We.data<=dl(nt-Te))return;y.inertia===!1&&(ae=Xe-rt),ye(nt,{duration:pe(dl(Math.max(dl(Ge-zt),dl(Xe-zt))*.185/pt/.05||0)),ease:y.ease||"power3",data:dl(nt-Te),onInterrupt:function(){return Ie.restart(!0)&&Ct&&Ct(N)},onComplete:function(){N.update(),Ye=ie(),i&&!L&&(O?O.resetTo("totalProgress",Xe,i._tTime/i._tDur):i.progress(Xe)),_e=Ee=i&&!L?i.totalProgress():N.progress,x&&x(N),Gn&&Gn(N)}},Te,ae*Je,nt-Te-ae*Je),pn&&pn(N,ye.tween)}}else N.isActive&&Ye!==Te&&Ie.restart(!0)}).pause()),l&&(b0[l]=N),f=N.trigger=Ti(f||d!==!0&&d),J=f&&f._gsap&&f._gsap.stRevert,J&&(J=J(N)),d=d===!0?f:Ti(d),nr(a)&&(a={targets:f,className:a}),d&&(g===!1||g===_r||(g=!g&&d.parentNode&&d.parentNode.style&&vr(d.parentNode).display==="flex"?!1:Nn),N.pin=d,Oe=Qe.core.getCache(d),Oe.spacer?Fe=Oe.pinState:(S&&(S=Ti(S),S&&!S.nodeType&&(S=S.current||S.nativeElement),Oe.spacerIsNative=!!S,S&&(Oe.spacerState=mf(S))),Oe.spacer=I=S||fn.createElement("div"),I.classList.add("pin-spacer"),l&&I.classList.add("pin-spacer-"+l),Oe.pinState=Fe=mf(d)),n.force3D!==!1&&Qe.set(d,{force3D:!0}),N.spacer=I=Oe.spacer,Ne=vr(d),Pe=Ne[g+E.os2],W=Qe.getProperty(d),X=Qe.quickSetter(d,E.a,Vn),m0(d,I,Ne),T=mf(d)),K){_t=Qo(K)?Px(K,Ix):Ix,j=pf("scroller-start",l,A,E,_t,0),H=pf("scroller-end",l,A,E,_t,0,j),U=j["offset"+E.op.d2];var V=Ti(Ss(A,"content")||A);Ze=this.markerStart=pf("start",l,V,E,_t,U,0,w),De=this.markerEnd=pf("end",l,V,E,_t,U,0,w),w&&($=Qe.quickSetter([Ze,De],E.a,Vn)),!G&&!(Ur.length&&Ss(A,"fixedMarkers")===!0)&&(O2(B?qt:A),Qe.set([j,H],{force3D:!0}),ue=Qe.quickSetter(j,E.a,Vn),Le=Qe.quickSetter(H,E.a,Vn))}if(w){var he=w.vars.onUpdate,Se=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){N.update(0,0,1),he&&he.apply(w,Se||[])})}if(N.previous=function(){return At[At.indexOf(N)-1]},N.next=function(){return At[At.indexOf(N)+1]},N.revert=function(Te,tt){if(!tt)return N.kill(!0);var We=Te!==!1||!N.enabled,rt=pi;We!==N.isReverted&&(We&&(fe=Math.max(ie(),N.scroll.rec||0),ne=N.progress,le=i&&i.progress()),Ze&&[Ze,De,j,H].forEach(function(zt){return zt.style.display=We?"none":"block"}),We&&(pi=N,N.update(We)),d&&(!M||!N.isActive)&&(We?V2(d,I,Fe):m0(d,I,vr(d),Ae)),We||N.update(We),pi=rt,N.isReverted=We)},N.refresh=function(Te,tt,We,rt){if(!((pi||!N.enabled)&&!tt)){if(d&&Te&&xr){$n(r,"scrollEnd",jx);return}!Ri&&oe&&oe(N),pi=N,ye.tween&&!We&&(ye.tween.kill(),ye.tween=0),O&&O.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var zt=ke(),pt=He(),ae=w?w.duration():ts(A,E),Ge=Je<=.01||!Je,Xe=0,nt=rt||0,ut=Qo(We)?We.end:n.end,pn=n.endTrigger||f,Ct=Qo(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Gn=N.pinnedContainer=n.pinnedContainer&&Ti(n.pinnedContainer,N),_i=f&&Math.max(0,At.indexOf(N))||0,Gt=_i,Tn,Pn,rr,Or,St,R,Y,ee,te,Q,Re,ze,Z;for(K&&Qo(We)&&(ze=Qe.getProperty(j,E.p),Z=Qe.getProperty(H,E.p));Gt-- >0;)R=At[Gt],R.end||R.refresh(0,1)||(pi=N),Y=R.pin,Y&&(Y===f||Y===d||Y===Gn)&&!R.isReverted&&(Q||(Q=[]),Q.unshift(R),R.revert(!0,!0)),R!==At[Gt]&&(_i--,Gt--);for(gi(Ct)&&(Ct=Ct(N)),Ct=wx(Ct,"start",N),we=Nx(Ct,f,zt,E,ie(),Ze,j,N,pt,re,G,ae,w,N._startClamp&&"_startClamp")||(d?-.001:0),gi(ut)&&(ut=ut(N)),nr(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(nr(Ct)?Ct.split(" ")[0]:"")+ut:(Xe=vf(ut.substr(2),zt),ut=nr(Ct)?Ct:(w?Qe.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,we):we)+Xe,pn=f)),ut=wx(ut,"end",N),qe=Math.max(we,Nx(ut||(pn?"100% 0":ae),pn,zt,E,ie()+Xe,De,H,N,pt,re,G,ae,w,N._endClamp&&"_endClamp"))||-.001,Xe=0,Gt=_i;Gt--;)R=At[Gt]||{},Y=R.pin,Y&&R.start-R._pinPush<=we&&!w&&R.end>0&&(Tn=R.end-(N._startClamp?Math.max(0,R.start):R.start),(Y===f&&R.start-R._pinPush<we||Y===Gn)&&isNaN(Ct)&&(Xe+=Tn*(1-R.progress)),Y===d&&(nt+=Tn));if(we+=Xe,qe+=Xe,N._startClamp&&(N._startClamp+=Xe),N._endClamp&&!Ri&&(N._endClamp=qe||-.001,qe=Math.min(qe,ts(A,E))),Je=qe-we||(we-=.01)&&.001,Ge&&(ne=Qe.utils.clamp(0,1,Qe.utils.normalize(we,qe,fe))),N._pinPush=nt,Ze&&Xe&&(Tn={},Tn[E.a]="+="+Xe,Gn&&(Tn[E.p]="-="+ie()),Qe.set([Ze,De],Tn)),d&&!(y0&&N.end>=ts(A,E)))Tn=vr(d),Or=E===Fn,rr=ie(),ge=parseFloat(W(E.a))+nt,!ae&&qe>1&&(Re=(B?fn.scrollingElement||ir:A).style,Re={style:Re,value:Re["overflow"+E.a.toUpperCase()]},B&&vr(qt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Re.style["overflow"+E.a.toUpperCase()]="scroll")),m0(d,I,Tn),T=mf(d),Pn=Ts(d,!0),ee=G&&Es(A,Or?fi:Fn)(),g?(Ae=[g+E.os2,Je+nt+Vn],Ae.t=I,Gt=g===Nn?Sf(d,E)+Je+nt:0,Gt&&(Ae.push(E.d,Gt+Vn),I.style.flexBasis!=="auto"&&(I.style.flexBasis=Gt+Vn)),_l(Ae),Gn&&At.forEach(function(q){q.pin===Gn&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),G&&ie(fe)):(Gt=Sf(d,E),Gt&&I.style.flexBasis!=="auto"&&(I.style.flexBasis=Gt+Vn)),G&&(St={top:Pn.top+(Or?rr-we:ee)+Vn,left:Pn.left+(Or?ee:rr-we)+Vn,boxSizing:"border-box",position:"fixed"},St[ta]=St["max"+vl]=Math.ceil(Pn.width)+Vn,St[na]=St["max"+C0]=Math.ceil(Pn.height)+Vn,St[_r]=St[_r+uu]=St[_r+lu]=St[_r+hu]=St[_r+cu]="0",St[Nn]=Tn[Nn],St[Nn+uu]=Tn[Nn+uu],St[Nn+lu]=Tn[Nn+lu],St[Nn+hu]=Tn[Nn+hu],St[Nn+cu]=Tn[Nn+cu],F=W2(Fe,St,M),Ri&&ie(0)),i?(te=i._initted,u0(1),i.render(i.duration(),!0,!0),se=W(E.a)-ge+Je+nt,de=Math.abs(Je-se)>1,G&&de&&F.splice(F.length-2,2),i.render(0,!0,!0),te||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),u0(0)):se=Je,Re&&(Re.value?Re.style["overflow"+E.a.toUpperCase()]=Re.value:Re.style.removeProperty("overflow-"+E.a));else if(f&&ie()&&!w)for(Pn=f.parentNode;Pn&&Pn!==qt;)Pn._pinOffset&&(we-=Pn._pinOffset,qe-=Pn._pinOffset),Pn=Pn.parentNode;Q&&Q.forEach(function(q){return q.revert(!1,!0)}),N.start=we,N.end=qe,je=ft=Ri?fe:ie(),!w&&!Ri&&(je<fe&&ie(fe),N.scroll.rec=0),N.revert(!1,!0),it=mi(),Ie&&(Ye=-1,Ie.restart(!0)),pi=0,i&&L&&(i._initted||le)&&i.progress()!==le&&i.progress(le||0,!0).render(i.time(),!0,!0),(Ge||ne!==N.progress||w||p||i&&!i._initted)&&(i&&!L&&(i._initted||ne||i.vars.immediateRender!==!1)&&i.totalProgress(w&&we<-.001&&!ne?Qe.utils.normalize(we,qe,0):ne,!0),N.progress=Ge||(je-we)/Je===ne?0:ne),d&&g&&(I._pinOffset=Math.round(N.progress*se)),O&&O.invalidate(),isNaN(ze)||(ze-=Qe.getProperty(j,E.p),Z-=Qe.getProperty(H,E.p),gf(j,E,ze),gf(Ze,E,ze-(rt||0)),gf(H,E,Z),gf(De,E,Z-(rt||0))),Ge&&!Ri&&N.update(),h&&!Ri&&!ct&&(ct=!0,h(N),ct=!1)}},N.getVelocity=function(){return(ie()-ft)/(mi()-tu)*1e3||0},N.endAnimation=function(){eu(N.callbackAnimation),i&&(O?O.progress(1):i.paused()?L||eu(i,N.direction<0,1):eu(i,i.reversed()))},N.labelToScroll=function(Te){return i&&i.labels&&(we||N.refresh()||we)+i.labels[Te]/i.duration()*Je||0},N.getTrailing=function(Te){var tt=At.indexOf(N),We=N.direction>0?At.slice(0,tt).reverse():At.slice(tt+1);return(nr(Te)?We.filter(function(rt){return rt.vars.preventOverlaps===Te}):We).filter(function(rt){return N.direction>0?rt.end<=we:rt.start>=qe})},N.update=function(Te,tt,We){if(!(w&&!We&&!Te)){var rt=Ri===!0?fe:N.scroll(),zt=Te?0:(rt-we)/Je,pt=zt<0?0:zt>1?1:zt||0,ae=N.progress,Ge,Xe,nt,ut,pn,Ct,Gn,_i;if(tt&&(ft=je,je=w?ie():rt,y&&(Ee=_e,_e=i&&!L?i.totalProgress():pt)),_&&d&&!pi&&!cf&&xr&&(!pt&&we<rt+(rt-ft)/(mi()-tu)*_?pt=1e-4:pt===1&&qe>rt+(rt-ft)/(mi()-tu)*_&&(pt=.9999)),pt!==ae&&N.enabled){if(Ge=N.isActive=!!pt&&pt<1,Xe=!!ae&&ae<1,Ct=Ge!==Xe,pn=Ct||!!pt!=!!ae,N.direction=pt>ae?1:-1,N.progress=pt,pn&&!pi&&(nt=pt&&!ae?0:pt===1?1:ae===1?2:3,L&&(ut=!Ct&&k[nt+1]!=="none"&&k[nt+1]||k[nt],_i=i&&(ut==="complete"||ut==="reset"||ut in i))),b&&(Ct||_i)&&(_i||u||!i)&&(gi(b)?b(N):N.getTrailing(b).forEach(function(rr){return rr.endAnimation()})),L||(O&&!pi&&!cf?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",pt,i._tTime/i._tDur):(O.vars.totalProgress=pt,O.invalidate().restart())):i&&i.totalProgress(pt,!!(pi&&(it||Te)))),d){if(Te&&g&&(I.style[g+E.os2]=Pe),!G)X(iu(ge+se*pt));else if(pn){if(Gn=!Te&&pt>ae&&qe+1>rt&&rt+1>=ts(A,E),M)if(!Te&&(Ge||Gn)){var Gt=Ts(d,!0),Tn=rt-we;Ux(d,qt,Gt.top+(E===Fn?Tn:0)+Vn,Gt.left+(E===Fn?0:Tn)+Vn)}else Ux(d,I);_l(Ge||Gn?F:T),de&&pt<1&&Ge||X(ge+(pt===1&&!Gn?se:0))}}y&&!ye.tween&&!pi&&!cf&&Ie.restart(!0),a&&(Ct||v&&pt&&(pt<1||!h0))&&fu(a.targets).forEach(function(rr){return rr.classList[Ge||v?"add":"remove"](a.className)}),o&&!L&&!Te&&o(N),pn&&!pi?(L&&(_i&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(N)),(Ct||!h0)&&(c&&Ct&&f0(N,c),z[nt]&&f0(N,z[nt]),v&&(pt===1?N.kill(!1,1):z[nt]=0),Ct||(nt=pt===1?1:3,z[nt]&&f0(N,z[nt]))),P&&!Ge&&Math.abs(N.getVelocity())>(ru(P)?P:2500)&&(eu(N.callbackAnimation),O?O.progress(1):eu(i,ut==="reverse"?1:!pt,1))):L&&o&&!pi&&o(N)}if(Le){var Pn=w?rt/w.duration()*(w._caScrollDist||0):rt;ue(Pn+(j._isFlipped?1:0)),Le(Pn)}$&&$(-rt/w.duration()*(w._caScrollDist||0))}},N.enable=function(Te,tt){N.enabled||(N.enabled=!0,$n(A,"resize",su),B||$n(A,"scroll",fl),oe&&$n(r,"refreshInit",oe),Te!==!1&&(N.progress=ne=0,je=ft=Ye=ie()),tt!==!1&&N.refresh())},N.getTween=function(Te){return Te&&ye?ye.tween:O},N.setPositions=function(Te,tt,We,rt){if(w){var zt=w.scrollTrigger,pt=w.duration(),ae=zt.end-zt.start;Te=zt.start+ae*Te/pt,tt=zt.start+ae*tt/pt}N.refresh(!1,!1,{start:Ax(Te,We&&!!N._startClamp),end:Ax(tt,We&&!!N._endClamp)},rt),N.update()},N.adjustPinSpacing=function(Te){if(Ae&&Te){var tt=Ae.indexOf(E.d)+1;Ae[tt]=parseFloat(Ae[tt])+Te+Vn,Ae[1]=parseFloat(Ae[1])+Te+Vn,_l(Ae)}},N.disable=function(Te,tt){if(Te!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,tt||O&&O.pause(),fe=0,Oe&&(Oe.uncache=1),oe&&Yn(r,"refreshInit",oe),Ie&&(Ie.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!B)){for(var We=At.length;We--;)if(At[We].scroller===A&&At[We]!==N)return;Yn(A,"resize",su),B||Yn(A,"scroll",fl)}},N.kill=function(Te,tt){N.disable(Te,tt),O&&!tt&&O.kill(),l&&delete b0[l];var We=At.indexOf(N);We>=0&&At.splice(We,1),We===Ai&&yf>0&&Ai--,We=0,At.forEach(function(rt){return rt.scroller===N.scroller&&(We=1)}),We||Ri||(N.scroll.rec=0),i&&(i.scrollTrigger=null,Te&&i.revert({kill:!1}),tt||i.kill()),Ze&&[Ze,De,j,H].forEach(function(rt){return rt.parentNode&&rt.parentNode.removeChild(rt)}),du===N&&(du=0),d&&(Oe&&(Oe.uncache=1),We=0,At.forEach(function(rt){return rt.pin===d&&We++}),We||(Oe.spacer=0)),n.onKill&&n.onKill(N)},At.push(N),N.enable(!1,!1),J&&J(N),i&&i.add&&!Je){var st=N.update;N.update=function(){N.update=st,wt.cache++,we||qe||N.refresh()},Qe.delayedCall(.01,N.update),Je=.01,we=qe=0}else N.refresh();d&&z2()},r.register=function(n){return pl||(Qe=n||qx(),Xx()&&window.document&&r.enable(),pl=nu),pl},r.defaults=function(n){if(n)for(var i in n)ff[i]=n[i];return ff},r.disable=function(n,i){nu=0,At.forEach(function(o){return o[i?"kill":"disable"](n)}),Yn(Rt,"wheel",fl),Yn(fn,"scroll",fl),clearInterval(lf),Yn(fn,"touchcancel",es),Yn(qt,"touchstart",es),hf(Yn,fn,"pointerdown,touchstart,mousedown",Rx),hf(Yn,fn,"pointerup,touchend,mouseup",Cx),Ef.kill(),uf(Yn);for(var s=0;s<wt.length;s+=3)df(Yn,wt[s],wt[s+1]),df(Yn,wt[s],wt[s+2])},r.enable=function(){if(Rt=window,fn=document,ir=fn.documentElement,qt=fn.body,Qe&&(fu=Qe.utils.toArray,ou=Qe.utils.clamp,x0=Qe.core.context||es,u0=Qe.core.suppressOverwrites||es,T0=Rt.history.scrollRestoration||"auto",M0=Rt.pageYOffset||0,Qe.core.globals("ScrollTrigger",r),qt)){nu=1,gl=document.createElement("div"),gl.style.height="100vh",gl.style.position="absolute",ny(),F2(),Cn.register(Qe),r.isTouch=Cn.isTouch,co=Cn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),v0=Cn.isTouch===1,$n(Rt,"wheel",fl),S0=[Rt,fn,ir,qt],Qe.matchMedia?(r.matchMedia=function(c){var h=Qe.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Qe.addEventListener("matchMediaInit",function(){ey(),I0()}),Qe.addEventListener("matchMediaRevert",function(){return Qx()}),Qe.addEventListener("matchMedia",function(){ea(0,1),oa("matchMedia")}),Qe.matchMedia().add("(orientation: portrait)",function(){return p0(),p0})):console.warn("Requires GSAP 3.11.0 or later"),p0(),$n(fn,"scroll",fl);var n=qt.hasAttribute("style"),i=qt.style,s=i.borderTopStyle,o=Qe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ts(qt),Fn.m=Math.round(a.top+Fn.sc())||0,fi.m=Math.round(a.left+fi.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(qt.setAttribute("style",""),qt.removeAttribute("style")),lf=setInterval(Lx,250),Qe.delayedCall(.5,function(){return cf=0}),$n(fn,"touchcancel",es),$n(qt,"touchstart",es),hf($n,fn,"pointerdown,touchstart,mousedown",Rx),hf($n,fn,"pointerup,touchend,mouseup",Cx),_0=Qe.utils.checkPrefix("transform"),bf.push(_0),pl=mi(),Ef=Qe.delayedCall(.2,ea).pause(),ml=[fn,"visibilitychange",function(){var c=Rt.innerWidth,h=Rt.innerHeight;fn.hidden?(Sx=c,Tx=h):(Sx!==c||Tx!==h)&&su()},fn,"DOMContentLoaded",ea,Rt,"load",ea,Rt,"resize",su],uf($n),At.forEach(function(c){return c.enable(0,1)}),l=0;l<wt.length;l+=3)df(Yn,wt[l],wt[l+1]),df(Yn,wt[l],wt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(h0=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lf)||(lf=i)&&setInterval(Lx,i),"ignoreMobileResize"in n&&(v0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uf(Yn)||uf($n,n.autoRefreshEvents||"none"),Vx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Ti(n),o=wt.indexOf(s),a=ra(s);~o&&wt.splice(o,a?6:2),i&&(a?Ur.unshift(Rt,i,qt,i,ir,i):Ur.unshift(s,i))},r.clearMatchMedia=function(n){At.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(nr(n)?Ti(n):n).getBoundingClientRect(),a=o[s?ta:na]*i||0;return s?o.right-a>0&&o.left+a<Rt.innerWidth:o.bottom-a>0&&o.top+a<Rt.innerHeight},r.positionInViewport=function(n,i,s){nr(n)&&(n=Ti(n));var o=n.getBoundingClientRect(),a=o[s?ta:na],l=i==null?a/2:i in Tf?Tf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Rt.innerWidth:(o.top+l)/Rt.innerHeight},r.killAll=function(n){if(At.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=sa.killAll||[];sa={},i.forEach(function(s){return s()})}},r})();yt.version="3.14.2";yt.saveStyles=function(r){return r?fu(r).forEach(function(e){if(e&&e.style){var t=tr.indexOf(e);t>=0&&tr.splice(t,5),tr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Qe.core.getCache(e),x0())}}):tr};yt.revert=function(r,e){return I0(!r,e)};yt.create=function(r,e){return new yt(r,e)};yt.refresh=function(r){return r?su(!0):(pl||yt.register())&&ea(!0)};yt.update=function(r){return++wt.cache&&ws(r===!0?2:0)};yt.clearScrollMemory=ty;yt.maxScroll=function(r,e){return ts(r,e?fi:Fn)};yt.getScrollFunc=function(r,e){return Es(Ti(r),e?fi:Fn)};yt.getById=function(r){return b0[r]};yt.getAll=function(){return At.filter(function(r){return r.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!xr};yt.snapDirectional=P0;yt.addEventListener=function(r,e){var t=sa[r]||(sa[r]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(r,e){var t=sa[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Qe.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(g){u.length||d.restart(!0),u.push(g.trigger),f.push(g),s<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gi(s)&&(s=s(),$n(yt,"refresh",function(){return s=e.batchMax()})),fu(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(yt.create(c))}),t};var Bx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},g0=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Cn.isTouch?" pinch-zoom":""):"none",e===ir&&r(qt,t)},_f={auto:1,scroll:1},q2=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Qe.core.getCache(s),a=mi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==qt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_f[(l=vr(s)).overflowY]||_f[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ra(s)&&(_f[(l=vr(s)).overflowY]||_f[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},ry=function(e,t,n,i){return Cn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&q2,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$n(fn,Cn.eventTypes[0],Hx,!1,!0)},onDisable:function(){return Yn(fn,Cn.eventTypes[0],Hx,!0)}})},Y2=/(input|label|select|textarea)/i,kx,Hx=function(e){var t=Y2.test(e.target.tagName);(t||kx)&&(e._gsapAllow=!0,kx=t)},$2=function(e){Qo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Ti(e.target)||ir,h=Qe.core.globals().ScrollSmoother,u=h&&h.get(),f=co&&(e.content&&Ti(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=Es(c,Fn),g=Es(c,fi),p=1,_=(Cn.isTouch&&Rt.visualViewport?Rt.visualViewport.scale*Rt.visualViewport.width:Rt.outerWidth)/Rt.innerWidth,m=0,x=gi(i)?function(){return i(a)}:function(){return i||2.8},v,y,M=ry(c,e.type,!0,s),S=function(){return y=!1},w=es,P=es,b=function(){l=ts(c,Fn),P=ou(co?1:0,l),n&&(w=ou(0,ts(c,fi))),v=ia},E=function(){f._gsap.y=iu(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(y){requestAnimationFrame(S);var K=iu(a.deltaY/2),re=P(d.v-K);if(f&&re!==d.v+d.offset){d.offset=re-d.v;var N=iu((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=wt.cache,ws()}return!0}d.offset&&E(),y=!0},A,D,B,G,z=function(){b(),A.isActive()&&A.vars.scrollY>l&&(d()>l?A.progress(1)&&d(l):A.resetTo("scrollY",l))};return f&&Qe.set(f,{y:"+=0"}),e.ignoreCheck=function(k){return co&&k.type==="touchmove"&&L(k)||p>1.05&&k.type!=="touchstart"||a.isGesturing||k.touches&&k.touches.length>1},e.onPress=function(){y=!1;var k=p;p=iu((Rt.visualViewport&&Rt.visualViewport.scale||1)/_),A.pause(),k!==p&&g0(c,p>1.01?!0:n?!1:"x"),D=g(),B=d(),b(),v=ia},e.onRelease=e.onGestureStart=function(k,K){if(d.offset&&E(),!K)G.restart(!0);else{wt.cache++;var re=x(),N,oe;n&&(N=g(),oe=N+re*.05*-k.velocityX/.227,re*=Bx(g,N,oe,ts(c,fi)),A.vars.scrollX=w(oe)),N=d(),oe=N+re*.05*-k.velocityY/.227,re*=Bx(d,N,oe,ts(c,Fn)),A.vars.scrollY=P(oe),A.invalidate().duration(re).play(.01),(co&&A.vars.scrollY>=l||N>=l-1)&&Qe.to({},{onUpdate:z,duration:re})}o&&o(k)},e.onWheel=function(){A._ts&&A.pause(),mi()-m>1e3&&(v=0,m=mi())},e.onChange=function(k,K,re,N,oe){if(ia!==v&&b(),K&&n&&g(w(N[2]===K?D+(k.startX-k.x):g()+K-N[1])),re){d.offset&&E();var ke=oe[2]===re,He=ke?B+k.startY-k.y:d()+re-oe[1],Ye=P(He);ke&&He!==Ye&&(B+=Ye-He),d(Ye)}(re||K)&&ws()},e.onEnable=function(){g0(c,n?!1:"x"),yt.addEventListener("refresh",z),$n(Rt,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=g.smooth=!1),M.enable()},e.onDisable=function(){g0(c,!0),Yn(Rt,"resize",z),yt.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Cn(e),a.iOS=co,co&&!d()&&d(1),co&&Qe.ticker.add(es),G=a._dc,A=Qe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:iy(d,d(),function(){return A.pause()})},onUpdate:ws,onComplete:G.vars.onComplete}),a};yt.sort=function(r){if(gi(r))return At.sort(r);var e=Rt.pageYOffset||0;return yt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Rt.innerHeight}),At.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};yt.observe=function(r){return new Cn(r)};yt.normalizeScroll=function(r){if(typeof r>"u")return wi;if(r===!0&&wi)return wi.enable();if(r===!1){wi&&wi.kill(),wi=r;return}var e=r instanceof Cn?r:$2(r);return wi&&wi.target===e.target&&wi.kill(),ra(e.target)&&(wi=e),e};yt.core={_getVelocityProp:af,_inputObserver:ry,_scrollers:wt,_proxies:Ur,bridge:{ss:function(){xr||oa("scrollStart"),xr=mi()},ref:function(){return pi}}};qx()&&Qe.registerPlugin(yt);var L0=Math.PI*2,Af=class{points=[[],[],[]];cols=164;rows=92;depth=new Float32Array(this.cols*this.rows);light=new Float32Array(this.cols*this.rows);ink=new Uint8Array(this.cols*this.rows);constructor(e=!1){e&&(this.cols=108,this.rows=82,this.depth=new Float32Array(this.cols*this.rows),this.light=new Float32Array(this.cols*this.rows),this.ink=new Uint8Array(this.cols*this.rows));let t=(o,a,l,c,h,u,f,d=0)=>this.points[o].push([a,l,c,h,u,f,d]);for(let o=1;o<85;o++)for(let a=0;a<190;a++){let l=a/190*L0,c=o/85*Math.PI,h=.68+Math.sin(l*12)*Math.sin(c*9)*.025;t(0,Math.sin(c)*Math.cos(l)*h,Math.cos(c)*h,Math.sin(c)*Math.sin(l)*h,Math.sin(c)*Math.cos(l),Math.cos(c),Math.sin(c)*Math.sin(l),0)}for(let o=0;o<3;o++)for(let a=0;a<400;a++)for(let l=0;l<16;l++){let c=a/400*L0,h=l/16*L0,u=1.02+o*.23,f=(u+.055*Math.cos(h))*Math.cos(c),d=(u+.055*Math.cos(h))*Math.sin(c),g=.055*Math.sin(h);if(o===1){let p=d;d=g,g=p}if(o===2){let p=f;f=g,g=p}t(0,f,d,g,Math.cos(c)*Math.cos(h),Math.sin(c)*Math.cos(h),Math.sin(h),o+1)}for(let o=0;o<15;o++){let a=o*1.6;for(let l=0;l<150;l++)for(let c=0;c<9;c++){let h=l/149*Math.PI,u=1.45+c*.012;t(1,Math.cos(h)*u,-.25-Math.sin(h)*u,a,Math.cos(h),-Math.sin(h),.5,o%3)}for(let l=-1;l<=1;l+=2)for(let c=0;c<70;c++)for(let h=0;h<10;h++)t(1,l*(1.45+h*.013),-.25+c*.025,a,l,0,.6,o%3);for(let l=0;l<90;l++)for(let c=0;c<14;c++)t(1,(l/89-.5)*3.3,1.5,a+c*.1,0,-1,.4,3)}let n=document.createElement("canvas");n.width=700,n.height=220;let i=n.getContext("2d");i.fillStyle="white",i.font="900 100px monospace",i.textAlign="center",i.fillText("STAY",350,95),i.fillText("CURIOUS",350,200);let s=i.getImageData(0,0,700,220).data;for(let o=0;o<220;o+=3)for(let a=0;a<700;a+=3)s[(o*700+a)*4+3]>120&&t(2,(a-350)/180,(o-110)/180,0,0,0,1,1);for(let o=0;o<3500;o++){let a=o*2.399963,l=Math.acos(1-2*(o+.5)/3500);t(2,Math.sin(l)*Math.cos(a)*2,Math.cos(l)*2,Math.sin(l)*Math.sin(a)*2,0,0,1,0)}}render(e,t,n,i,s,o){let a=e.canvas.width,l=e.canvas.height,c=this.cols,h=this.rows;this.depth.fill(-1/0),this.light.fill(0),this.ink.fill(0);let u=n,f=o?0:i,d=t===1?Math.sin(u*5)*.09:t===2?.1*Math.sin(f*.12)*(1-u):.55+f*.09+u*1.7,g=t===1||t===2?0:.2+Math.sin(u*3)*.15,p=Math.cos(d),_=Math.sin(d),m=Math.cos(g),x=Math.sin(g);for(let E=0;E<this.points[t].length;E++){let L=this.points[t][E],[A,D,B,G,z,k,K]=L;if(t===0){let we=Math.sin(u*Math.PI)*.7;K===1&&(A+=we*1.2),K===2&&(D-=we),K===3&&(B+=we*2)}if(t===1&&(B-=u*17,B=((B+3)%24+24)%24-3,A+=Math.sin(u*5)*.15),t===2){if(K===0&&E%3!==0)continue;let we=Math.min(1,u/.78),qe=1-we,Ze=E*2.399,De=2+Math.sin(E*7)*.8;A=A*we+Math.cos(Ze+f*.08)*De*qe,D=D*we+Math.sin(Ze+f*.08)*De*qe,B=B*qe+Math.sin(E)*qe,K===0&&(A*=1.3,D*=1.3,B=-3+B*.15)}let re=A*p+B*_,N=-A*_+B*p,oe=D*m-N*x,ke=D*x+N*m,He=t===1?2.8:t===2?4.8:4.3-u*.25,Ye=t===1?ke+He:He-ke;if(Ye<.2)continue;let it=(t===1?52:t===2?125:98)*(s?.72:1),ne=Math.round(c/2+re*it*1.5/Ye),ie=Math.round(h/2+oe*it/Ye);if(ne<1||ne>=c-1||ie<1||ie>=h-1)continue;let ye=ie*c+ne,Oe=-Ye;if(Oe<this.depth[ye])continue;this.depth[ye]=Oe;let Ce=G*p+k*_,je=-G*_+k*p,ft=t===1?Math.max(.15,1-Ye/24):Math.max(.12,Ce*-.4+z*-.6+je*.65)*.8+.18;this.light[ye]=t===2?K===1?1:.14:Math.min(1,ft+.2+(K?.2:0)),this.ink[ye]=K+1}e.fillStyle="#080b0b",e.fillRect(0,0,a,l);let v=Math.min(a/(c*8),l/(h*12)),y=8*v,M=12*v,S=(a-c*y)/2,w=(l-h*M)/2;e.font=`${Math.max(5,11*v)}px "Space Mono",monospace`,e.textAlign="center",e.textBaseline="middle";let P="\xB7:;-=+*#%@",b=["#35413c","#839a7d","#b2cc9c","#d5e6b7","#f5fad8"];for(let E=0;E<5;E++){e.fillStyle=b[E];for(let L=0;L<this.light.length;L++){let A=this.light[L];if(!A||Math.min(4,Math.floor(A*5))!==E)continue;let D=t===1&&this.ink[L]===4?"\u2500":P[Math.min(9,Math.floor(A*9))];e.fillText(D,S+L%c*y,w+Math.floor(L/c)*M)}}e.strokeStyle="#a9c69525",e.lineWidth=1;for(let[E,L]of[[a*.04,l*.08],[a*.96,l*.08],[a*.04,l*.92],[a*.96,l*.92]])e.beginPath(),e.moveTo(E-8,L),e.lineTo(E+8,L),e.moveTo(E,L-8),e.lineTo(E,L+8),e.stroke();o||(e.fillStyle="#dbffc805",e.fillRect(0,f*15%l,a,2)),e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};var et={ink:"#232843",shadow:"#303b58",deep:"#405575",rock:"#5a6680",stone:"#aaa0a0",sand:"#d9bd9a",light:"#f8d9ab",roof:"#b15b78",roofLight:"#dc8a91",green:"#4c8172",leaf:"#81ae84",gold:"#f7c576",water:"#75bfc2"};function ni(r){return(Math.sin(r*127.1+311.7)*43758.5453%1+1)%1}var Rf=class{ctx;r(e,t,n,i,s){this.ctx.fillStyle=s,this.ctx.fillRect(Math.round(e),Math.round(t),Math.ceil(n),Math.ceil(i))}poly(e,t){this.ctx.fillStyle=t,this.ctx.beginPath(),e.forEach(([n,i],s)=>s?this.ctx.lineTo(Math.round(n),Math.round(i)):this.ctx.moveTo(Math.round(n),Math.round(i))),this.ctx.closePath(),this.ctx.fill()}tree(e,t,n=1){let i=this.r.bind(this);i(e-1,t,3,17*n,et.shadow);for(let s=0;s<4;s++){let o=(19-s*3)*n;i(e-o/2,t-8-s*5*n,o,8*n,s%2?et.leaf:et.green),i(e-o/2,t-8-s*5*n,o/3,4*n,"#b3c694")}i(e+3,t+5,8,2,et.ink)}house(e,t,n,i,s=et.roof){let o=this.r.bind(this);o(e+2,t+2,n,i,et.ink),o(e,t,n,i,et.sand),o(e+n*.65,t,n*.35,i,et.stone),o(e+2,t+3,n*.6,2,et.light),this.poly([[e-3,t],[e+n/2,t-n*.42],[e+n+3,t]],s),o(e-3,t,n+6,2,et.ink);for(let a=0;a<Math.floor(n/6);a++)o(e+a*6,t-n*.13,3,1,et.roofLight);for(let a=0;a<Math.floor(n/9);a++)o(e+4+a*9,t+7,3,6,et.ink),o(e+4+a*9,t+8,2,3,et.gold);o(e+n/2-2,t+i-8,5,8,et.shadow),o(e+n/2,t+i-8,1,8,et.light)}tower(e,t,n,i){let s=this.r.bind(this);s(e,t,n,i,et.stone),s(e,t,n*.6,i,et.sand);for(let o=0;o<i;o+=6)for(let a=0;a<n;a+=7)s(e+a+(o%12?3:0),t+o,4,1,"#bcae9c");for(let o=8;o<i;o+=14)s(e+n/2-2,t+o,4,8,et.shadow),s(e+n/2-1,t+o+1,2,4,et.gold);this.poly([[e-4,t],[e+n/2,t-15],[e+n+4,t]],et.roof),s(e+n/2,t-26,1,11,et.ink),this.poly([[e+n/2+1,t-26],[e+n/2+12,t-23],[e+n/2+1,t-20]],et.gold)}cloud(e,t,n){let i=this.r.bind(this);i(e,t,34*n,5*n,"#f6d9bd"),i(e+6*n,t-5*n,20*n,6*n,"#f6d9bd"),i(e+12*n,t-9*n,10*n,6*n,"#f6d9bd"),i(e+4*n,t+4*n,26*n,2*n,"#b9a6ba")}island(e,t,n,i,s,o=!0){let a=this.r.bind(this),l=n/2;this.poly([[e-l,t],[e-l*.8,t+12],[e-l*.45,t+n*.42],[e,t+n*.65],[e+l*.48,t+n*.26],[e+l,t+3]],et.ink),this.ctx.save(),this.ctx.clip();for(let c=0;c<60;c++){let h=e-l+ni(c+i)*n,u=t+ni(c*3+i)*n*.45,f=n*(.22+ni(c)*.2)*(1-(u-t)/(n*.6));a(h,u,Math.max(2,f),3+ni(c*4)*6,c%3?et.rock:et.shadow)}this.ctx.restore(),this.poly([[e-l,t],[e-l*.65,t-10],[e+l*.2,t-14],[e+l,t],[e+l*.7,t+8],[e-l*.6,t+10]],et.green);for(let c=0;c<80;c++){let h=e-l+ni(c+i)*n,u=t-5+ni(c*7)*12;a(h,u,1+ni(c*8)*3,1,c%4?et.leaf:et.light)}a(e+l*.57,t+3,7,n*.58,et.deep),a(e+l*.58,t+4,4,n*.57,et.water);for(let c=0;c<8;c++){let h=t+5+(c*7+s*9)%(n*.55);a(e+l*.58,h,3,2,"#dcf7da")}o&&(this.house(e-25,t-31,29,30),this.tower(e+8,t-58,17,60),this.house(e+33,t-21,20,21,"#757dab"),this.tree(e-l*.65,t-8,.8),this.tree(e+l*.78,t-1,.6))}render(e,t,n,i,s){this.ctx=e;let o=this.r.bind(this),a=s?0:i;o(0,0,480,300,t===1?"#212b4c":"#52678d");let l=t===1?["#202744","#2d3553","#414763","#65566c","#93737c"]:["#52678d","#6d7f9e","#93a0b5","#bab3bf","#e4c5bd"];for(let u=0;u<60;u++){let f=u/59*4,d=Math.min(3,Math.floor(f)),g=f-d,p=parseInt(l[d].slice(1),16),_=parseInt(l[d+1].slice(1),16),m=x=>Math.round((p>>x&255)*(1-g)+(_>>x&255)*g);o(0,u*5,480,5,`rgb(${m(16)},${m(8)},${m(0)})`)}for(let u=0;u<170;u++){let f=ni(u)*480,d=ni(u+500)*190;(t===1||u%5===0)&&(o(f,d,1,u%19?1:2,u%3?"#e8d6b3":"#9eb8c6"),u%29===0&&(o(f-2,d,5,1,"#e8d6b3"),o(f,d-2,1,5,"#e8d6b3")))}let c=t===1?365:92,h=47;for(let u=-14;u<=14;u++){let f=Math.floor(Math.sqrt(196-u*u));o(c-f,h+u,f*2+1,1,et.light)}if(t===1)for(let u=-13;u<=13;u++){let f=Math.floor(Math.sqrt(169-u*u));o(c-7-f,h-3+u,f*2+1,1,"#2d3553")}for(let u=0;u<3;u++){let f=[[0,300]];for(let d=0;d<=480;d+=2){let g=n*(u+1)*70,p=Math.abs(Math.sin((d+g)*.014+u*4))*36+Math.sin((d+g)*.033)*8;f.push([d,155+u*27-p])}f.push([480,300]),this.poly(f,["#7b829d","#5d6c8b","#435b7a"][u]);for(let d=0;d<30;d++){let g=ni(d+u*700)*480;o(g,150+u*25,2,1,"#b3bac030")}}if(t===0){for(let d=0;d<7;d++)this.cloud((d*94-n*30+a*.25)%640-50,50+d%3*31,.55+d%2*.3);let u=1+n*.6;e.save(),e.translate(300,176),e.scale(u,u),e.translate(-300,-176),this.island(300,174,185,24,a,!1),o(239,160,125,12,et.stone),o(236,157,131,4,et.sand);for(let d=0;d<9;d++)o(240+d*14,157,5,5,et.sand),o(240+d*14,165,10,1,et.light);this.house(250,133,24,25),this.house(279,117,30,40),this.house(316,138,22,21,"#6f7fa2"),this.tower(308,79,17,79),this.tower(345,117,13,43),o(292,145,16,16,et.ink),o(295,142,10,19,et.shadow),o(298,147,3,14,et.gold),o(312,89,9,9,et.light),o(316,91,1,5,et.shadow),o(316,94,3,1,et.shadow),o(232,124,5,32,et.sand);let f=a*.35+n*2;for(let d=0;d<4;d++){let g=f+d*Math.PI/2;this.poly([[234,126],[234+Math.cos(g)*18,126+Math.sin(g)*18],[234+Math.cos(g+.25)*14,126+Math.sin(g+.25)*14]],et.light)}this.tree(226,160,1),this.tree(365,159,.8),this.tree(275,169,.45);for(let d=0;d<12;d++)o(251+d*8,171+Math.sin(d)*2,2,2,d%3?"#f8d9ab":"#dc8a91");o(261,108,67,1,et.ink);for(let d=0;d<8;d++)this.poly([[262+d*8,108],[267+d*8,108],[264+d*8,114]],d%2?et.gold:et.roofLight);e.restore(),this.island(85-n*110,202,65,58,a),this.island(443+n*80,153,58,71,a);for(let d=0;d<18;d++){let g=ni(d)*480,p=215+ni(d+50)*70;o(g,p,4,1,"#222f48"),o(g+2,p-2,1,4,"#222f48")}}else if(t===1){let u=n*540;o(0,222,480,78,et.deep);for(let g=0;g<95;g++){let p=ni(g)*480,_=230+ni(g+9)*60;o(p,_,3+ni(g+88)*10,1,g%4?"#597f99":"#b4a6a4")}for(let g=-2;g<13;g++){let p=g*58-u%58;o(p,224,8,76,et.ink),o(p,224,8,2,et.stone),this.poly([[p+8,237],[p+29,254],[p+50,237],[p+50,243],[p+29,261],[p+8,243]],et.shadow)}o(0,211,480,12,et.ink),o(0,211,480,3,et.stone);for(let g=0;g<480;g+=6)o(g,209,2,3,et.sand);let f=140+Math.sin(n*Math.PI)*80;for(let g=0;g<3;g++){let p=f+g*38;o(p,193,35,16,et.roof),o(p+2,190,31,4,et.roofLight);for(let _=0;_<4;_++)o(p+4+_*7,196,4,5,et.gold);o(p+4,209,5,3,et.ink),o(p+26,209,5,3,et.ink)}for(let g=0;g<8;g++){let p=f-4-g*7,_=180-Math.sin(g*.6+a)*3-g*.8;o(p,_,7,4,"#b0a3af")}let d=390-n*180;this.tower(d,139,17,71),this.house(d-25,185,24,25);for(let g=0;g<14;g++){let p=((g*47-u*1.6)%680+680)%680-80;this.tree(p,285,1.6)}for(let g=0;g<24;g++)Math.sin(a*1.4+g)>0&&o(ni(g)*480,232+ni(g+99)*60,1,1,et.gold)}else{let u=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];e.strokeStyle="#f8d9ab66",e.setLineDash([2,4]),e.lineWidth=1,e.beginPath(),u.forEach(([v,y],M)=>M?e.lineTo(v,y):e.moveTo(v,y)),e.stroke(),e.setLineDash([]),u.forEach(([v,y],M)=>{let S=Math.max(0,1-n*2-M*.04)*100;this.island(v,y+S,45+M%3*9,M*57,a,!0),o(v-3,y-70+S,7,9,et.light);let w=["010110010010111","110001010100111","110001010001110","101101111001001","111100110001110","011100110101010","111001010010010"];for(let P=0;P<15;P++)w[M][P]==="1"&&o(v-1+P%3,y-68+S+Math.floor(P/3),1,1,et.shadow)});let f=Math.max(0,(n-.45)/.55)*(u.length-1),d=Math.min(5,Math.floor(f)),g=f-d,p=u[d],_=u[d+1],m=p[0]+(_[0]-p[0])*g,x=p[1]+(_[1]-p[1])*g+Math.max(0,1-n*2-d*.04)*100*(1-g)+Math.max(0,1-n*2-(d+1)*.04)*100*g-13;o(m-2,x-4,5,5,et.light),o(m-3,x+1,7,6,et.roofLight),o(m-2,x+7,2,3,et.ink),o(m+1,x+7,2,3,et.ink)}e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};ce.registerPlugin(yt);function sy(r=!1){let e=document.querySelector(".mt-nullsignal,.mt-bitquest");if(!e)return;let t=matchMedia("(max-width:760px)").matches,n=e.dataset.template==="nullsignal",i=n?new Af(t):null,s=n?null:new Rf,o=[...e.querySelectorAll("canvas[data-glyph]")].map((m,x)=>{m.width=n?t?800:1400:480,m.height=n?t?640:850:300;let v=m.getContext("2d");return v&&(v.imageSmoothingEnabled=!1),{canvas:m,ctx:v,phase:x,progress:r?[.25,.45,1][x]:0,visible:!1}}),a=[];r||o.forEach(m=>{let x=m.canvas.closest(".gl-sequence"),v=ce.timeline({scrollTrigger:{trigger:x,start:"top top",end:()=>`+=${innerHeight*(t?1.65:2.5)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});v.to(m,{progress:1,duration:3,ease:"none"},0),m.phase===0?(v.to(x.querySelector(".gl-hero-copy"),{y:-55,opacity:0,duration:.8},.35),v.to(x.querySelector(".gl-art"),{left:"0%",right:"0%",top:t?"12%":"0%",bottom:t?"5%":"0%",height:t?"75%":"100%",duration:1.4,ease:"power2.inOut"},.6),v.to(x.querySelector(".gl-annotation"),{opacity:0,duration:.5},.3),v.to(x,{"--gl-veil":0,duration:1},.4)):m.phase===1?v.to(x.querySelector(".gl-plate"),{opacity:0,y:-35,duration:.7},1.6):(v.to(x.querySelector(".gl-map-heading"),{opacity:0,y:-40,duration:.7},.2),v.to(x.querySelector(".gl-art"),{top:"0%",duration:1.2},.6)),a.push(v)});let l=performance.now(),c=0,h=0,u=!1,f=(m,x=!1)=>{for(let v of o){if(!v.ctx||!v.visible&&!x)continue;n?i.render(v.ctx,v.phase,v.progress,m,t,r):s.render(v.ctx,v.phase,v.progress,m,r);let y=v.canvas.closest(".gl-sequence")?.querySelector(".gl-progress-label");y&&(y.textContent=`${String(Math.round(v.progress*100)).padStart(3,"0")} / 100`),v.canvas.dataset.scrollProgress=v.progress.toFixed(3)}},d=()=>{!u&&!document.hidden&&!c&&o.some(m=>m.visible)&&!r&&(c=requestAnimationFrame(g))};function g(m){c=0,!(u||document.hidden)&&(m-h>=50&&(f((m-l)*.001),h=m),d())}let p=new IntersectionObserver(m=>{for(let x of m){let v=o.find(y=>y.canvas===x.target);v&&(v.visible=x.isIntersecting)}d()},{threshold:0});o.forEach(m=>p.observe(m.canvas));let _=()=>{document.hidden?(cancelAnimationFrame(c),c=0):d()};return document.addEventListener("visibilitychange",_),f(0,!0),d(),()=>{u=!0,cancelAnimationFrame(c),p.disconnect(),document.removeEventListener("visibilitychange",_),a.forEach(m=>{m.scrollTrigger?.kill(),m.kill()})}}var mu=new C;function yr(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;mu.copy(e),mu[n]=0,mu.normalize();let c=.5*o/(o+a),h=1-mu.angleTo(r)/l;return Math.sign(mu[t])===1?h*c:a/(o+a)+c+c*(1-h)}var uo=class r extends Wt{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new C,c=new C,h=new C(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,g=u.length/6,p=new C,_=.5/o;for(let m=0,x=0;m<u.length;m+=3,x+=2)switch(l.fromArray(u,m),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[m+0]=h.x*Math.sign(l.x)+c.x*s,u[m+1]=h.y*Math.sign(l.y)+c.y*s,u[m+2]=h.z*Math.sign(l.z)+c.z*s,f[m+0]=c.x,f[m+1]=c.y,f[m+2]=c.z,Math.floor(m/g)){case 0:p.set(1,0,0),d[x+0]=yr(p,c,"z","y",s,n),d[x+1]=1-yr(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),d[x+0]=1-yr(p,c,"z","y",s,n),d[x+1]=1-yr(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),d[x+0]=1-yr(p,c,"x","z",s,e),d[x+1]=yr(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),d[x+0]=1-yr(p,c,"x","z",s,e),d[x+1]=1-yr(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),d[x+0]=1-yr(p,c,"x","y",s,e),d[x+1]=1-yr(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),d[x+0]=yr(p,c,"x","y",s,e),d[x+1]=1-yr(p,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var aa=r=>{let e=Math.sin(r*127.1+31.7)*43758.54;return e-Math.floor(e)},Yt=(r,e,t,n=0,i=0,s=0)=>{let o=new Ue(r,e);return o.position.set(n,i,s),t.add(o),o};function oy(r=1.25,e=.55){let t=new vt,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let h=l/o,u=c/a*2-1,f=Math.sin(Math.PI*h)**.5;if(n.push(u*e*f,h*r,.12+Math.sin(Math.PI*h)*.3+u*u*.18-Math.pow(h,5)*.2+Math.sin(h*36+u*4)*.017*f),s.push(c/a,h),l<o&&c<a){let d=l*(a+1)+c,g=d+a+1;i.push(d,g,d+1,g,g+1,d+1)}}return t.setAttribute("position",new lt(n,3)),t.setAttribute("uv",new lt(s,2)),t.setIndex(i),t.computeVertexNormals(),t}function Z2(){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#783f28"),t.addColorStop(.22,"#bc5845"),t.addColorStop(.65,"#dc8672"),t.addColorStop(1,"#f0ac91"),e.fillStyle=t,e.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)e.strokeStyle=`rgba(91,34,35,${.025+aa(i)*.06})`,e.lineWidth=.6,e.beginPath(),e.moveTo(128,0),e.quadraticCurveTo(i*.85,220,i,512),e.stroke();let n=new Cr(r);return n.colorSpace=Kt,n}var Cf=class{constructor(e,t,n){this.container=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,this.renderer.toneMappingExposure=t==="monolith"?.9:t==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new qr(this.renderer),s=new no;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new Wi(16777215,t==="floraison"||t==="monolith"?.65:1.3));let o=new hn(t==="offscript"?13238194:16771534,t==="floraison"||t==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new hn(t==="aether"?16757901:t==="offscript"?12175359:16764589,t==="floraison"||t==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new hn(16777215,t==="floraison"||t==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),t==="aether"?this.headphones():t==="offscript"?this.sculpture():t==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(e),this.observers.push(c);let h=new IntersectionObserver(u=>{this.visible=u[0].isIntersecting});h.observe(e),this.observers.push(h),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new jt;camera=new kt(33,1,.1,60);root=new $e;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=e=>{this.tilt.x=(e.clientX/innerWidth-.5)*.12,this.tilt.y=(e.clientY/innerHeight-.5)*.08};contextLost=e=>{e.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let e=document.createElement("div");e.className="scene-fallback",this.container.append(e)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let e=new xt({color:"#cbd1ce",metalness:1,roughness:.22}),t=new xt({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new xt({color:"#373b36",roughness:.9,metalness:.05});this.band=new $e,this.root.add(this.band),Yt(new Bn(1.22,.072,20,100,Math.PI),e,this.band,0,.1);let i=Yt(new Bn(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let h of[-1,1]){let u=new $e;u.position.set(h*1.15,-.39,0),u.rotation.y=-h*.2,u.rotation.z=h*.1,this.root.add(u),this.cups.push(u),Yt(new uo(.12,.6,.13,4,.05),e,u,0,.65,-.06);let f=Yt(new uo(.68,1.03,.4,5,.2),e,u,0,0,-.12);this.shells.push(f),Yt(new uo(.61,.95,.09,5,.18),t,u,0,0,.1),Yt(new uo(.5,.82,.08,4,.17),n,u,0,0,.19),Yt(new Bn(.26,.082,16,64),n,u,0,0,.26).scale.set(.85,1.48,.85),Yt(new Bn(.255,.008,8,64),t,u,0,0,.28).scale.set(1.12,1.76,1),Yt(new cn(.023,.023,.1,12),e,u,h*.3,-.18,.01).rotation.z=Math.PI/2;for(let p=0;p<5;p++)Yt(new Xt(.012,8,6),n,u,(p-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Cr(s);this.textures.push(l);let c=new Us(new Ns({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let e=new cr({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),t=new xt({color:"#c9ff54",metalness:.4,roughness:.28}),n=new xt({color:"#ddddcc",metalness:1,roughness:.18}),i=Yt(new lc(.87,.29,160,24,2,3),e,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=Yt(new Bn(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=Yt(new To(.38,1),t,this.root,1.45,1.3,.25);this.objects.push(o);let a=Yt(new uo(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let f=0;f<16384;f++){let d=128+aa(f)*35;n.data.set([d,d-4,d-12,255],f*4)}t.putImageData(n,0,0);let i=new Cr(e);i.colorSpace=Kt,this.textures.push(i);let s=new xt({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new xt({color:10048316,roughness:.38,metalness:.55}),a=new xt({color:3689543,roughness:.22,metalness:.65}),l=new xt({color:4606275,roughness:.9}),c=new Wt(2.35,.11,2.35),h=new Wt(.11,.32,.11);for(let f=0;f<7;f++){let d=new $e;if(d.userData.level=f,this.root.add(d),Yt(new Wt(2.35,.13,.68),s,d,0,0,-.835),Yt(new Wt(2.35,.13,.68),s,d,0,0,.835),Yt(new Wt(.68,.13,1),s,d,-.835,0,0),Yt(new Wt(.68,.13,1),s,d,.835,0,0),f<6){for(let g of[-1.04,1.04])for(let p of[-1.04,1.04])Yt(h,s,d,g,.22,p);for(let g=0;g<9;g++)Yt(new Wt(.024,.25,.055),o,d,-.94+g*.235,.2,-1.08);Yt(new Wt(.055,.25,1.58),a,d,1.06,.2,0)}this.objects.push(d)}Yt(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),Yt(new Wt(.85,.055,.85),o,this.root,0,-1.3,0);for(let f=0;f<6;f++)Yt(new Wt(.8,.05,.13),s,this.root,0,-1.35-f*.04,1.25+f*.13);let u=Yt(new cn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);u.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let e=Z2();this.textures.push(e);let t=new xt({map:e,side:nn,roughness:.9,metalness:0,envMapIntensity:.2}),n=new $e;n.position.y=.45,this.root.add(n);let i=oy();for(let u=0;u<2;u++)for(let f=0;f<6;f++){let d=new $e;d.rotation.z=f/6*Math.PI*2+u*.52,n.add(d);let g=Yt(i,t,d),p=1-u*.17;g.scale.set(p,p,p),g.position.set(0,.04+u*.035,u*.19),g.userData.ring=u,g.userData.phase=aa(f+u*6),this.petals.push(g)}let s=new xt({color:"#5c4630",roughness:.85}),o=new xt({color:"#dfb45b",roughness:.65});Yt(new Xt(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let u=0;u<115;u++){let f=u*2.399963,d=Math.sqrt(u/115)*.28,g=Yt(new Xt(.015+aa(u)*.007,6,5),u%3?o:s,n,Math.cos(f)*d,Math.sin(f)*d,.58+Math.sqrt(Math.max(0,.078-d*d))*.22);g.scale.z=1.7}let a=new xt({color:"#536742",roughness:.8,side:nn}),l=new un([new C(.23,-2.5,-.15),new C(-.14,-1.3,-.13),new C(0,.4,0)]);Yt(new oi(l,40,.028,9,!1),a,this.root);for(let u of[-1,1]){let f=Yt(oy(.95,.24),a,this.root,0,-1.05+u*.3,-.1);f.rotation.set(.3,u*.6,-u*.9),f.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let u=0;u<38;u++)c[u*3]=(aa(u*3)-.5)*4.7,c[u*3+1]=(aa(u*3+1)-.5)*4.5,c[u*3+2]=(aa(u*3+2)-.5)*2;let h=new vt;h.setAttribute("position",new Nt(c,3)),this.particles=new Jn(h,new si({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:e,height:t}=this.container.getBoundingClientRect();!e||!t||(this.camera.aspect=e/t,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.render(0))}render(e){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||e>0&&e-this.lastFrame<1/30)return;this.lastFrame=e;let t=this.reduced?0:e,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(t*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(t*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(t*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=t*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(t*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(t*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(t*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let e=new Set,t=new Set;this.scene.traverse(n=>{if(n instanceof Ue||n instanceof Jn){e.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))}else n instanceof Us&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var D0=r=>{let e=Math.sin(r*127.1+17.7)*43758.5;return e-Math.floor(e)},Pf=class{constructor(e,t,n){this.host=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new Wi(11258309,1.5));let i=new hn(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new hn(t==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),t==="pelagic"?this.capsule():this.armillary();try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new qr(this.renderer),a=new no;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),e.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(e),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new jt;camera=new kt(34,1,.1,100);model=new $e;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(e,t,n=this.model,i=0,s=0,o=0){let a=new Ue(e,t);return a.position.set(i,s,o),n.add(a),a}tube(e,t,n,i=this.model){return this.add(new oi(new un(e),40,t,8,!1),n,i)}capsule(){let e=new xt({color:12240827,metalness:.86,roughness:.27}),t=new xt({color:1387827,metalness:.7,roughness:.32}),n=new xt({color:11838307,metalness:.85,roughness:.24}),i=new xt({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new Xt(1.4,64,48),e).scale.set(1,1.13,.87),this.add(new cn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new Bn(.64,.075,12,64),t,this.model,0,.12,1.28);let o=this.add(new Xt(.59,48,32),new cr({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new Bn(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new Mo(.33,48),new bn({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new Bn(.42,.012,6,48,Math.PI*.55),new bn({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let f=0;f<16;f++){let d=f*Math.PI/8;this.add(new cn(.035,.035,.055,6),t,this.model,Math.cos(d)*.71,.12+Math.sin(d)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new Bn(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new cn(.46,.56,.27,32),t,this.model,0,1.55,0),this.add(new cn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new cn(.018,.018,.8,8),e,this.model,.2,2.1,0),this.add(new Xt(.055,12,8),i,this.model,.2,2.52,0);for(let f of[-1,1]){let d=new $e;d.position.set(f*1.2,-.55,.2),this.model.add(d),this.arms.push(d),this.add(new Xt(.16,16,12),n,d),this.tube([new C,new C(f*.55,-.2,.3),new C(f*.6,-.55,.8)],.055,e,d),this.add(new Wt(.23,.14,.36),t,d,f*.6,-.55,.9);for(let g of[-1,1])this.tube([new C(f*.6+g*.09,-.55,1),new C(f*.6+g*.14,-.7,1.2),new C(f*.6+g*.05,-.75,1.3)],.025,n,d);this.tube([new C(f*.85,-1.2,-.6),new C(f*1.1,-1.7,-.4),new C(f*1.1,-1.7,1.1)],.055,e),this.add(new cn(.21,.21,.5,24),t,this.model,f*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new Xt(.12,12,8),i,this.model,f*.87,-.5,1.06)}let h=new Float32Array(650*3);for(let f=0;f<650;f++)h[f*3]=(D0(f*3)-.5)*14,h[f*3+1]=(D0(f*3+1)-.5)*14,h[f*3+2]=(D0(f*3+2)-.5)*8-2;let u=new vt;u.setAttribute("position",new Nt(h,3)),this.particles=new Jn(u,new si({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let e=new xt({color:13673053,metalness:.95,roughness:.25}),t=new xt({color:13221281,metalness:.9,roughness:.3}),n=new xt({color:4867381,metalness:.85,roughness:.27}),i=new xt({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new Xt(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new Bn(.686,.005,4,96),e);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new $e;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new Bn(l,o===5?.055:.029,8,128),o%2?e:t,a),o===5&&this.add(new Bn(l+.1,.012,6,128),e,a);for(let c=0;c<72;c++){let h=c*Math.PI/36,u=l+(c%6===0?.055:.027),f=this.add(new Wt(.008,c%6===0?.09:.035,.018),n,a,Math.sin(h)*u,Math.cos(h)*u,0);f.rotation.z=-h}this.add(new Xt(.07+o*.013,16,12),o%2?e:t,a,l,0,0)}let s=this.add(new cn(.055,.1,1.2,24),e,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new cn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new cn(.62,.62,.04,64),e,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let e=this.host.getBoundingClientRect();e.width<1||e.height<1||(this.camera.aspect=e.width/e.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(e.width,e.height,!1),this.render(0,!0))}render(e,t=!1){if(!this.renderer||this.disposed||!t&&(!this.visible||document.hidden||e-this.last<1/30))return;this.last=e;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(e*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(e=>{(e instanceof Ue||e instanceof Jn)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var xl=(r,e,t)=>ce.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.8:1)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});function ay(r){ce.from(`${r} h2`,{y:90,rotationX:12,transformOrigin:"50% 100%",opacity:.35,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}})}function J2(){let r=document.querySelector(".rv-hero"),e=r.querySelector(".rv-desert img"),t=r.clientWidth,n=r.clientHeight,i=(e.naturalWidth||1792)/(e.naturalHeight||1008),s=Math.max(t,n*i),o=s/i,a=(t-s)/2,l=(n-o)/2,c=(s*.415+a)/t*100,h=100-(s*.58+a)/t*100,u=(o*.175+l)/n*100,f=100-(o*.79+l)/n*100,d=Math.max(0,s*.165/2);return`inset(${u}% ${h}% ${f}% ${c}% round ${d}px ${d}px 0px 0px)`}function K2(r){ce.set(".rv-portal-copy",{autoAlpha:0}),xl(".rv-hero",4,r).to(".rv-hero-copy .im-word",{yPercent:-80,rotationX:60,rotation:-5,autoAlpha:0,stagger:.07,duration:.8},.12).to(".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",{autoAlpha:0,y:-25,duration:.5},.12).to(".rv-seal",{rotation:140,scale:.75,autoAlpha:0,duration:1},0).to(".rv-world",{scale:1.45,transformOrigin:"50% 47%",duration:2.2,ease:"power1.inOut"},.15).fromTo(".rv-portal-window",{clipPath:J2},{clipPath:"inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",duration:1.9,ease:"power2.inOut"},.7).fromTo(".rv-portal-window img",{scale:1.12},{scale:1,duration:2.8,ease:"none"},.6).to(".rv-desert",{autoAlpha:0,duration:.45},2.05).to(".rv-world",{scale:1,duration:1.4,ease:"sine.out"},2.3).fromTo(".rv-portal-copy",{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.7},2.5).to(".rv-hero-shade",{backgroundColor:"#0e29252a",duration:1},2).to(".rv-portal-copy",{autoAlpha:0,y:-35,duration:.5},3.55),ay(".rv-prologue"),ce.to(".rv-asterisk",{rotation:140,scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:1.2}}),ce.to(".rv-word-ribbon span",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:.7}}),ce.set(".rv-room-1,.rv-room-2",{autoAlpha:0,rotationY:72,xPercent:r?20:12}),ce.set(".rv-room-rail>div:first-child",{opacity:1}),xl(".rv-rooms-pin",5,r).fromTo(".rv-room-0 .rv-room-photo img",{scale:1.12,xPercent:2},{scale:1,xPercent:-2,duration:1.3,ease:"none"},0).to(".rv-room-rail>div:nth-child(1) i",{scaleX:1,duration:1.3,ease:"none"},0).to(".rv-room-0",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},1).to(".rv-room-1",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},1.2).fromTo(".rv-room-1 .rv-room-photo img",{scale:1.18,xPercent:3},{scale:1,xPercent:-2,duration:2,ease:"none"},1.2).to(".rv-room-rail>div:nth-child(1)",{opacity:.35,duration:.4},1.3).to(".rv-room-rail>div:nth-child(2)",{opacity:1,duration:.4},1.5).to(".rv-room-rail>div:nth-child(2) i",{scaleX:1,duration:1.2,ease:"none"},2).to(".rv-room-1",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},3).to(".rv-room-2",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},3.2).fromTo(".rv-room-2 .rv-room-photo img",{scale:1.15,yPercent:3},{scale:1,yPercent:-2,duration:1.8,ease:"none"},3.2).to(".rv-room-rail>div:nth-child(2)",{opacity:.35,duration:.4},3.3).to(".rv-room-rail>div:nth-child(3)",{opacity:1,duration:.4},3.5).to(".rv-room-rail>div:nth-child(3) i",{scaleX:1,duration:1,ease:"none"},4),ce.set(".rv-postcard-border,.rv-keepsake-note",{autoAlpha:0}),xl(".rv-keepsake-pin",3.8,r).fromTo(".rv-fragment",{x:i=>(i%3-1)*(r?130:280),y:i=>(Math.floor(i/3)-1)*(r?100:200),z:i=>i%2?-160:180,rotation:i=>(i-4)*9,rotationY:i=>(i%3-1)*30,scale:.75,autoAlpha:.55},{x:0,y:0,z:0,rotation:0,rotationY:0,scale:1,autoAlpha:1,stagger:{each:.1,from:"center"},duration:1.5,ease:"power2.inOut"},0).to(".rv-postcard",{rotation:0,scale:1.02,duration:2.2},0).to(".rv-keepsake-heading",{y:-30,autoAlpha:r?.7:.35,duration:1.3},1).to(".rv-postcard-border",{autoAlpha:1,rotation:0,scale:1.02,duration:.6},2.1).fromTo(".rv-keepsake-note",{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.6},2.6).to(".rv-postcard,.rv-postcard-border",{y:r?-10:-35,rotation:-3,duration:.8},3),ce.fromTo(".rv-contact-circle",{scale:.7,y:130},{scale:1.2,y:-80,scrollTrigger:{trigger:".rv-contact",start:"top bottom",end:"bottom bottom",scrub:1}}),ce.from(".rv-contact h2",{yPercent:60,rotationX:40,opacity:.2,stagger:.1,scrollTrigger:{trigger:".rv-contact",start:"top 85%",end:"top 10%",scrub:1}})}function j2(r){ce.set(".tv-ascent-copy",{autoAlpha:0});let e={value:1200},t=document.querySelector(".tv-altitude strong");xl(".tv-hero",3.8,r).to(".tv-hero-copy .im-word",{yPercent:-120,rotationX:60,autoAlpha:0,stagger:.1,duration:.8},.1).to(".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",{y:-30,autoAlpha:0,duration:.5},.1).to(".tv-ridge-plane img",{scale:1.16,transformOrigin:"65% 25%",duration:1.5},0).to(".tv-ridge-plane",{yPercent:u=>(u-2)*(r?12:18),rotationY:u=>(u-2)*-9,rotationZ:u=>(u-2)*2,z:u=>Math.abs(u-2)*-90,xPercent:u=>(u-2)*8,duration:1.8,ease:"power2.inOut"},1).to(".tv-hero-shade",{backgroundColor:"#08162077",duration:1.4},1).to(".tv-grid",{autoAlpha:0,duration:.5},1).to(".tv-vertical-rule",{yPercent:-60,duration:3.8,ease:"none"},0).to(e,{value:4860,duration:3.8,ease:"none",onUpdate:()=>{t.textContent=Math.round(e.value).toLocaleString("en-US")}},0).fromTo(".tv-ascent-copy",{autoAlpha:0,y:70},{autoAlpha:1,y:0,duration:.8},1.8).to(".tv-ascent-copy",{autoAlpha:0,y:-35,duration:.5},3.3),ay(".tv-belief"),ce.to(".tv-belief-compass",{rotation:110,scrollTrigger:{trigger:".tv-belief",start:"top bottom",end:"bottom top",scrub:1}}),ce.set(".tv-route-notes article:not(:first-child)",{autoAlpha:0,y:20}),ce.set(".tv-map-fold",{rotationY:u=>u%2?-35:35});let i=document.querySelector(".tv-route-line"),s=document.querySelector(".tv-route-traveller"),o={progress:0},a=i.getTotalLength(),l=()=>{let u=i.getPointAtLength(o.progress*a);ce.set(s,{x:u.x,y:u.y})};l(),xl(".tv-route-pin",4,r).to(".tv-map-fold",{rotationY:0,stagger:.1,duration:1.2,ease:"power2.inOut"},0).fromTo(".tv-fold-map",{rotationX:43,rotationZ:-20,scale:.8},{rotationX:0,rotationZ:0,scale:1,duration:1.8},0).fromTo(".tv-map-drawing",{autoAlpha:0},{autoAlpha:1,duration:.6},.8).fromTo(".tv-contour-lines path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.1,ease:"none"},.6).fromTo(".tv-route-line",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:2.4,ease:"none"},1.2).to(o,{progress:1,duration:2.4,ease:"none",onUpdate:l},1.2).to(".tv-route-progress i",{scaleX:1,duration:3.8,ease:"none"},0).to(".tv-route-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1.2).to(".tv-route-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".tv-route-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.5).to(".tv-route-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.85).to(".tv-fold-map",{rotationX:r?8:15,rotationZ:8,scale:1.05,duration:.8},3.2),ce.set(".tv-summit-copy,.tv-summit-stamp",{autoAlpha:0}),xl(".tv-crossing-pin",5,r).fromTo(".tv-ice-plane img",{scale:1.2,transformOrigin:"50% 35%"},{scale:1,transformOrigin:"50% 35%",duration:1.5},0).to(".tv-crossing-heading",{y:-50,autoAlpha:0,duration:.7},.8).to(".tv-crossing-details",{autoAlpha:0,duration:.5},1).to(".tv-crossing-aperture i",{scaleY:0,duration:1},.7).to(".tv-ice-plane",{xPercent:u=>u<3?-850:u>3?850:0,yPercent:u=>u===3?-135:u%2?14:-14,rotationY:u=>u<3?-35:u>3?35:0,rotationX:u=>u===3?35:0,autoAlpha:0,stagger:{each:.13,from:"center"},duration:1.7,ease:"power2.inOut"},1.4).to(".tv-summit-photo img",{scale:1,duration:3.8,ease:"none"},.6).to(".tv-crossing-shade",{backgroundColor:"#0d182b22",duration:1},2).fromTo(".tv-summit-copy",{autoAlpha:0,y:75},{autoAlpha:1,y:0,duration:.8},3).fromTo(".tv-summit-stamp",{autoAlpha:0,scale:.7,rotation:-35},{autoAlpha:1,scale:1,rotation:0,duration:.9},3.5).to(".tv-summit-copy h2",{y:-25,duration:1.2},3.7).to(".tv-summit-stamp svg",{rotation:30,duration:1.5},3.5),ce.from(".tv-contact h2",{x:-80,rotation:-4,opacity:.2,scrollTrigger:{trigger:".tv-contact",start:"top 85%",end:"top 10%",scrub:1}}),ce.from(".tv-end-altitude i",{y:100,rotation:-35,scrollTrigger:{trigger:".tv-contact",start:"top 80%",end:"bottom bottom",scrub:1}})}function ly(r,e){r==="reverie"?K2(e):r==="traverse"&&j2(e)}var ho=(r,e,t)=>ce.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function F0(r){ce.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),ce.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function Q2(r,e){ce.set(".pl-descent-copy",{autoAlpha:0});let t={value:0},n=document.querySelector(".pl-depth-number");ho(".pl-hero",3.8,e).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:e?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(t,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(t.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:e?17:7,xPercent:e?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),F0(".pl-intro"),ce.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),ho(".pl-survey-pin",3.6,e).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:e?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),ce.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),ho(".pl-life-pin",4,e).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),ce.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function eA(r,e){ce.set(".he-unfold-copy",{autoAlpha:0}),ho(".he-hero",3.8,e).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:e?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:e?15:6,yPercent:e?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),F0(".he-prologue"),ce.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),ce.set(".he-totality",{autoAlpha:0}),ho(".he-eclipse-pin",4.5,e).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=ce.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});ce.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{ce.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ce.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ce.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),ce.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function tA(r){ce.set(".af-through-copy",{autoAlpha:0}),ho(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),F0(".af-intro"),ho(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),ce.set(".af-select-frame",{autoAlpha:0}),ho(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),ce.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function cy(r,e,t){r==="pelagic"&&e?Q2(e,t):r==="heliograph"&&e?eA(e,t):r==="afterimage"&&tA(t)}var nA=[{id:"volute",name:"Volute",number:"23",headline:"Beautiful things find their rhythm",color:"#f4b78e",background:"#160d10",cover:"/motion/volute-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A slowly turning copper spiral with fine illuminated ribs. Warm ordered dither and vertical light give this motion studio its own rhythm.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"vernant",name:"Vernant",number:"22",headline:"A little more room to grow",color:"#a1d6ab",background:"#07130e",cover:"/motion/vernant-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A jade fern garden with seven independent swaying fronds, delicate leaflets and fine pixel light. An asymmetric studio landing page with artwork on the left.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"zephyr",name:"Zephyr",number:"21",headline:"Everything begins with a seed",color:"#e8e4d6",background:"#11110f",cover:"/motion/zephyr-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A silver seed head made of 150 radiating stems and delicate seed parachutes. A quiet editorial landing page with italic display typography.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"nereid",name:"Nereid",number:"20",headline:"Let your ideas drift further",color:"#9ccff2",background:"#070e1a",cover:"/motion/nereid-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"An electric blue jellyfish with a pulsing bell and 28 flowing tentacles, rendered through a fine LED screen. A nocturnal creative studio landing page.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"burrow",name:"Burrow",number:"19",headline:"The light is under our feet.",color:"#ffd34d",background:"#1c1410",cover:"/motion/burrow-cover.jpg",category:"PIXEL ART / UNDERGROUND FABLE",description:"Scroll dives you into a mole's burrow and flies you forward through one winding voxel tunnel: a fossil ribcage, a blind river, a crystal hall, the tree's cold heart. Then the light rushes you back up and the hill blooms.",tags:["Into-the-screen flight","Voxel caverns + fossil","Inventory hotbar UI"],chapters:["The grey tree","Topsoil","The bone hall","The blind river","The crystal hall","The heart root","Bloom"]},{id:"cloudwhale",name:"Cloudwhale",number:"18",headline:"We have never touched the ground.",color:"#ffd34d",background:"#16193a",cover:"/motion/cloudwhale-cover.jpg",category:"PIXEL ART / VOXEL FABLE",description:"A town of twelve houses lives on the back of a 212-year-old sky whale. Ride out a storm, dive through the cloud sea, hear her sing, and watch the town move house, told in scroll-typed dialogue and palette-true pixel 3D.",tags:["Voxel whales + town","Palette-dithered pixel 3D","Scroll-typed RPG dialogue"],chapters:["The town on the whale","Old Silverback","The storm","Below the clouds","The song","The young one","Home"]},{id:"halcyon",name:"Halcyon",number:"15",headline:"The Living Layer For Creative Systems",color:"#efe6a4",background:"#141414",cover:"/motion/halcyon-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A product landing page whose hero is alive: an iridescent butterfly rendered in real time, seen through pastel ordered dither, glow and twinkling scales.",tags:["Real-time 3D butterfly","Bayer-dither look","SaaS landing layout"],chapters:["A living layer","Trusted by makers","How it works","A point of view","Start creating"]},{id:"bloomfield",name:"Bloomfield",number:"16",headline:"Grow Something Worth Keeping",color:"#e8e8e4",background:"#080808",cover:"/motion/bloomfield-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A monochrome meadow on a pixel grid. Daisies and cosmos unfurl as the page arrives, sway in travelling wind and lean away from your cursor.",tags:["Blooming 3D meadow","Mono pixel grid","Centred hero"],chapters:["Plant an idea","Why it grows","Grown by","In their words","Begin"]},{id:"aurelle",name:"Aurelle",number:"17",headline:"Design That Glows Before Words",color:"#ff4fae",background:"#0a0809",cover:"/motion/aurelle-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A studio landing page around a lotus lit from within. It breathes open and closed, smeared into vertical streaks of light with radiating god rays.",tags:["Breathing 3D lotus","Streak + god-ray look","Framed studio layout"],chapters:["Creative vision","Built with","Services","Process","Begin a project"]},{id:"goldseam",name:"Goldseam",number:"14",headline:"Some things mend in gold.",color:"#d9a54a",background:"#ebe3d5",cover:"/motion/goldseam-cover.jpg",category:"CRAFT / KINTSUGI STORY",description:"A tea bowl\u2019s whole life in one scroll. It slips from its plinth, shatters into thirteen real 3D fragments, is catalogued piece by piece, and is rebuilt with seams of gold.",tags:["Real-time fracture","Gold-dust repair","Seven-chapter story"],chapters:["Forty-one winters of tea.","It took less than a second.","Keep every piece.","Repair is a kind of patience.","Don\u2019t hide the break.","More beautiful for having been broken.","And tomorrow, tea."]},{id:"mosslight",name:"Mosslight",number:"13",headline:"A little world that listens.",color:"#9df5c9",background:"#03070b",cover:"/motion/mosslight-cover.jpg",category:"PIXEL HORIZON / INTERACTIVE SCENE",description:"An interactive listening grove: a radio observatory, ringed planet, fireflies and a lake that answers your cursor. Change the atmosphere, send a signal or carry the scene into your own site.",tags:["Living pixel horizon","Three atmospheres","Reusable web component"],chapters:["The listening grove"]},{id:"lightkeeper",name:"The Last Lightkeeper",number:"12",headline:"Carry the last light.",color:"#f3ad76",background:"#0b1720",cover:"/motion/lightkeeper-cover.jpg",category:"PIXEL FABLE / VOXEL WORLD",description:"A small keeper wakes an abandoned observatory. Ride the keeper\u2019s cable lift, restore the lenses, send a pulse to a sleeping village and follow its reply home at dawn.",tags:["Voxel architecture","Vertical story journey","GSAP + 3D"],chapters:["A window in the dark","The mountain remembers","Take the light below","One small light is enough","Give the dark an answer","One window. Then another","You were never the last"]},{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]},{id:"reverie",cover:"/motion/reverie-cover.jpg",number:"08",name:"Reverie",category:"ART / IMAGINED PLACES",headline:"Leave the ordinary behind.",description:"A passage through the impossible. Step inside a desert portal, turn the walls of a dream gallery, and piece together a place that only exists in your imagination.",color:"#b94d37",background:"#f0debd",tags:["Portal passage","Rotating dream gallery","Image assembly"],chapters:["The threshold","A different way of seeing","Rooms without rules","A place to keep"]},{id:"traverse",cover:"/motion/traverse-cover.jpg",number:"09",name:"Traverse",category:"EXPEDITION / ALPINE",headline:"A little further.",description:"An alpine story you move through. A fractured mountain panorama, a folding expedition map, and a glacier passage that opens onto the first light of a summit.",color:"#e1fc80",background:"#101e27",tags:["Fractured panorama","Folding terrain","Glacier-to-summit passage"],chapters:["Beyond the familiar","Find your own line","Through the blue","The long way up"]},{id:"nullsignal",name:"Null Signal",number:"10",headline:"A world between the lines.",color:"#c7eaa4",background:"#080b0b",cover:"/motion/nullsignal-cover.jpg",category:"ASCII / GLYPH OBSERVATORY",description:"A cabinet of character-built curiosities. Disassemble an ASCII armillary instrument, travel through a vaulted arcade, and draw a message from a scattered constellation.",tags:["ASCII sculpture","Depth-projected arcade","Character assembly"],chapters:["Anatomy of a signal","Inside the transmission","A message reassembled","Stay curious"]},{id:"bitquest",name:"Bitquest",number:"11",headline:"Beyond the edge of the map.",color:"#f0bb87",background:"#202940",cover:"/motion/bitquest-cover.jpg",category:"PIXEL ART / IMAGINED PLACES",description:"A hand-coded pixel expedition. Approach a floating clock-tower town, ride a moonlit railway, and unfold a seven-island atlas with a tiny traveler following your scroll.",tags:["Pixel town","Parallax railway","Unfolding island map"],chapters:["The skyward city","The midnight railway","An atlas of elsewhere","Make room for wonder"]}];function uy(r){return nA.some(e=>e.id===r)}ce.registerPlugin(yt);yt.config({ignoreMobileResize:!0});var gu=document.querySelector(".mt-page"),Ht=gu?.dataset.template,_u=r=>{parent!==window&&parent.postMessage(r,"*")};function iA(r,e){ce.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),ce.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:e?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:e?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),ce.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),ce.fromTo(".ae-reveal em",{x:e?30:150},{x:e?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),ce.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),ce.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),ce.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:e?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),ce.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),ce.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),ce.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function rA(r,e){ce.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(e?75:130):e?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),ce.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(e?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=ce.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(e?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{ce.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),ce.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ce.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ce.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(e?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),ce.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),ce.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function sA(r,e){ce.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,ce.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:e?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),ce.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),ce.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),ce.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),ce.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(e?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:e?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:e?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),ce.from(".fl-season",{rotationY:e?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),ce.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),ce.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),ce.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function oA(r,e){ce.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),ce.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(e?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:e?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:e?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),ce.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),ce.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),ce.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:e?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),ce.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),ce.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),ce.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),ce.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),ce.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),_u({type:"motion-back",id:Ht})),r.key==="Tab"){let e=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===e.at(-1)?(r.preventDefault(),_u({type:"motion-focus",id:Ht,direction:"next"})):r.shiftKey&&document.activeElement===e[0]&&(r.preventDefault(),_u({type:"motion-focus",id:Ht,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(gu&&uy(Ht)){let r=ce.matchMedia(),e=-1;Promise.all([document.fonts.ready,...Array.from(gu.querySelectorAll("img[data-critical]")).map(t=>t.decode().catch(()=>{}))]).then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},t=>{let n=!!t.conditions?.reduce,i=!!t.conditions?.mobile;gu.classList.toggle("mt-reduced",n);let s=gu.querySelector(".mt-scene,.ns-scene"),o=s?Ht==="pelagic"||Ht==="heliograph"?new Pf(s,Ht,n):new Cf(s,Ht,n):void 0,a=m=>o?.render(m),l=Ht==="lightkeeper"?kv(n):void 0,c=a0(Ht)?px(Ht,n):void 0,h=Ht==="burrow"?lx(n):void 0,u=Ht==="cloudwhale"?tx(n,i):void 0,f=Ht==="goldseam"?Zv(n,i):void 0,d=Ht==="nullsignal"||Ht==="bitquest"?sy(n):void 0;n?o&&(o.pose.bloom=1,o.render(0)):(ce.ticker.add(a),Ht==="aether"&&o?iA(o,i):Ht==="offscript"&&o?rA(o,i):Ht==="floraison"&&o?sA(o,i):Ht==="monolith"&&o?oA(o,i):Ht==="reverie"||Ht==="traverse"?ly(Ht,i):!a0(Ht)&&Ht!=="burrow"&&Ht!=="cloudwhale"&&Ht!=="goldseam"&&Ht!=="lightkeeper"&&Ht!=="nullsignal"&&Ht!=="bitquest"&&cy(Ht,o,i),ce.utils.toArray(".mt-reveal").forEach(m=>ce.from(m,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:m,start:"top 85%",end:"top 30%",scrub:.8}})),ce.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let g=yt.create({start:0,end:"max",onUpdate:m=>{ce.set(".mt-progress i",{scaleX:m.progress}),Math.abs(e-m.progress)>.005&&(e=m.progress,_u({type:"motion-progress",id:Ht,progress:m.progress}))}}),p=!1,_=()=>{p||(p=!0,d?.(),l?.(),f?.(),u?.(),h?.(),c?.(),ce.ticker.remove(a),o?.dispose(),g.kill())};return window.addEventListener("pagehide",_,{once:!0}),requestAnimationFrame(()=>{yt.refresh(),document.documentElement.dataset.motionReady="true",_u({type:"motion-ready",id:Ht})}),()=>{_(),window.removeEventListener("pagehide",_)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
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
