"use strict";(()=>{var vg=0,vp=1,xg=2;var fc=1,Th=2,Ba=3,cs=0,In=1,nn=2,hr=0,xo=1,Hs=2,xp=3,yp=4,yg=5,Fs=100,bg=101,Mg=102,Eg=103,Tg=104,Sg=200,wg=201,Ag=202,Rg=203,$u=204,Zu=205,Cg=206,Pg=207,Ig=208,Lg=209,Dg=210,Fg=211,Ng=212,Ug=213,Og=214,Sh=0,wh=1,Ah=2,yo=3,Rh=4,Ch=5,Ph=6,Ih=7,Lh=0,kg=1,Bg=2,Ir=0,pc=1,mc=2,gc=3,Xi=4,_c=5,vc=6,xc=7;var bp=300,zs=301,Ro=302,Dh=303,Fh=304,yc=306,Aa=1e3,Br=1001,Ju=1002,en=1003,Hg=1004;var bc=1005;var Zn=1006,Nh=1007;var Vs=1008;var Di=1009,Mp=1010,Ep=1011,Ha=1012,Uh=1013,Lr=1014,dr=1015,wn=1016,Oh=1017,kh=1018,za=1020,Tp=35902,Sp=35899,wp=1021,Ap=1022,fr=1023,zr=1026,Gs=1027,Bh=1028,Hh=1029,Co=1030,zh=1031;var Vh=1033,Mc=33776,Ec=33777,Tc=33778,Sc=33779,Gh=35840,Wh=35841,Xh=35842,qh=35843,Yh=36196,$h=37492,Zh=37496,Jh=37488,Kh=37489,jh=37490,Qh=37491,ed=37808,td=37809,nd=37810,id=37811,rd=37812,sd=37813,od=37814,ad=37815,ld=37816,cd=37817,ud=37818,hd=37819,dd=37820,fd=37821,pd=36492,md=36494,gd=36495,_d=36283,vd=36284,xd=36285,yd=36286;var Nl=2300,Ku=2301,Yu=2302,op=2400,ap=2401,lp=2402;var zg=3200;var bd=0,Vg=1,fs="",Kt="srgb",wr="srgb-linear",Ul="linear",Vt="srgb";var vo=7680;var cp=519,Gg=512,Wg=513,Xg=514,Md=515,qg=516,Yg=517,Ed=518,$g=519,ju=35044;var Rp="300 es",Sr=2e3,Ol=2001;function Cp(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function xy(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function kl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Zg(){let r=kl("canvas");return r.style.display="block",r}var O0={},Ra=null;function Bl(...r){let e="THREE."+r.shift();Ra?Ra("log",e,...r):console.log(e,...r)}function ht(...r){let e="THREE."+r.shift();Ra?Ra("warn",e,...r):console.warn(e,...r)}function gt(...r){let e="THREE."+r.shift();Ra?Ra("error",e,...r):console.error(e,...r)}function Ca(...r){let e=r.join(" ");e in O0||(O0[e]=!0,ht(...r))}function Jg(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}var us=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){let n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){let n=this._listeners;if(n===void 0)return;let i=n[e];if(i!==void 0){let s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let n=t[e.type];if(n!==void 0){e.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,e);e.target=null}}},ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],k0=1234567,Il=Math.PI/180,Pa=180/Math.PI;function Hr(){let r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(ii[r&255]+ii[r>>8&255]+ii[r>>16&255]+ii[r>>24&255]+"-"+ii[e&255]+ii[e>>8&255]+"-"+ii[e>>16&15|64]+ii[e>>24&255]+"-"+ii[t&63|128]+ii[t>>8&255]+"-"+ii[t>>16&255]+ii[t>>24&255]+ii[n&255]+ii[n>>8&255]+ii[n>>16&255]+ii[n>>24&255]).toLowerCase()}function St(r,e,t){return Math.max(e,Math.min(t,r))}function Pp(r,e){return(r%e+e)%e}function yy(r,e,t,n,i){return n+(r-e)*(i-n)/(t-e)}function by(r,e,t){return r!==e?(t-r)/(e-r):0}function Ll(r,e,t){return(1-t)*r+t*e}function My(r,e,t,n){return Ll(r,e,1-Math.exp(-t*n))}function Ey(r,e=1){return e-Math.abs(Pp(r,e*2)-e)}function Ty(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*(3-2*r))}function Sy(r,e,t){return r<=e?0:r>=t?1:(r=(r-e)/(t-e),r*r*r*(r*(r*6-15)+10))}function wy(r,e){return r+Math.floor(Math.random()*(e-r+1))}function Ay(r,e){return r+Math.random()*(e-r)}function Ry(r){return r*(.5-Math.random())}function Cy(r){r!==void 0&&(k0=r);let e=k0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Py(r){return r*Il}function Iy(r){return r*Pa}function Ly(r){return(r&r-1)===0&&r!==0}function Dy(r){return Math.pow(2,Math.ceil(Math.log(r)/Math.LN2))}function Fy(r){return Math.pow(2,Math.floor(Math.log(r)/Math.LN2))}function Ny(r,e,t,n,i){let s=Math.cos,o=Math.sin,a=s(t/2),l=o(t/2),c=s((e+n)/2),h=o((e+n)/2),u=s((e-n)/2),f=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(i){case"XYX":r.set(a*h,l*u,l*f,a*c);break;case"YZY":r.set(l*f,a*h,l*u,a*c);break;case"ZXZ":r.set(l*u,l*f,a*h,a*c);break;case"XZX":r.set(a*h,l*m,l*d,a*c);break;case"YXY":r.set(l*d,a*h,l*m,a*c);break;case"ZYZ":r.set(l*m,l*d,a*h,a*c);break;default:ht("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function Tr(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Zt(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Po={DEG2RAD:Il,RAD2DEG:Pa,generateUUID:Hr,clamp:St,euclideanModulo:Pp,mapLinear:yy,inverseLerp:by,lerp:Ll,damp:My,pingpong:Ey,smoothstep:Ty,smootherstep:Sy,randInt:wy,randFloat:Ay,randFloatSpread:Ry,seededRandom:Cy,degToRad:Py,radToDeg:Iy,isPowerOfTwo:Ly,ceilPowerOfTwo:Dy,floorPowerOfTwo:Fy,setQuaternionFromProperEuler:Ny,normalize:Zt,denormalize:Tr},ve=class r{constructor(e=0,t=0){r.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*i+e.x,this.y=s*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},_n=class{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],p=s[o+3];if(a<=0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a>=1){e[t+0]=f,e[t+1]=d,e[t+2]=m,e[t+3]=p;return}if(u!==p||l!==f||c!==d||h!==m){let _=l*f+c*d+h*m+u*p;_<0&&(f=-f,d=-d,m=-m,p=-p,_=-_);let g=1-a;if(_<.9995){let y=Math.acos(_),x=Math.sin(y);g=Math.sin(g*y)/x,a=Math.sin(a*y)/x,l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+p*a}else{l=l*g+f*a,c=c*g+d*a,h=h*g+m*a,u=u*g+p*a;let y=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=y,c*=y,h*=y,u*=y}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+h*u+l*d-c*f,e[t+1]=l*m+h*f+c*u-a*d,e[t+2]=c*m+h*d+a*f-l*u,e[t+3]=h*m-a*u-l*f-c*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,i=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"YXZ":this._x=f*h*u+c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"ZXY":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u-f*d*m;break;case"ZYX":this._x=f*h*u-c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u+f*d*m;break;case"YZX":this._x=f*h*u+c*d*m,this._y=c*d*u+f*h*m,this._z=c*h*m-f*d*u,this._w=c*h*u-f*d*m;break;case"XZY":this._x=f*h*u-c*d*m,this._y=c*d*u-f*h*m,this._z=c*h*m+f*d*u,this._w=c*h*u+f*d*m;break;default:ht("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],i=t[4],s=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+a+u;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(h-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>u){let d=2*Math.sqrt(1+n-a-u);this._w=(h-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>u){let d=2*Math.sqrt(1+a-n-u);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+h)/d}else{let d=2*Math.sqrt(1+u-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+h)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,i=e._y,s=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-s*l,this._y=i*h+o*l+s*a-n*c,this._z=s*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t<=0)return this;if(t>=1)return this.copy(e);let n=e._x,i=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-t;if(a<.9995){let c=Math.acos(a),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+i*t,this._z=this._z*l+s*t,this._w=this._w*l+o*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},P=class r{constructor(e=0,t=0,n=0){r.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(B0.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(B0.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(e){let t=this.x,n=this.y,i=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-s*i),u=2*(s*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-s*u,this.z=i+l*u+s*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,i=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Df.copy(this).projectOnVector(e),this.sub(Df)}reflect(e){return this.sub(Df.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(St(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Df=new P,B0=new _n,bt=class r{constructor(e,t,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c)}set(e,t,n,i,s,o,a,l,c){let h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=s,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],d=n[5],m=n[8],p=i[0],_=i[3],g=i[6],y=i[1],x=i[4],v=i[7],M=i[2],T=i[5],S=i[8];return s[0]=o*p+a*y+l*M,s[3]=o*_+a*x+l*T,s[6]=o*g+a*v+l*S,s[1]=c*p+h*y+u*M,s[4]=c*_+h*x+u*T,s[7]=c*g+h*v+u*S,s[2]=f*p+d*y+m*M,s[5]=f*_+d*x+m*T,s[8]=f*g+d*v+m*S,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*s*h+n*a*l+i*s*c-i*o*l}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,f=a*l-h*s,d=c*s-o*l,m=t*u+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let p=1/m;return e[0]=u*p,e[1]=(i*c-h*n)*p,e[2]=(a*n-i*o)*p,e[3]=f*p,e[4]=(h*t-i*l)*p,e[5]=(i*s-a*t)*p,e[6]=d*p,e[7]=(n*l-c*t)*p,e[8]=(o*t-n*s)*p,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ff.makeScale(e,t)),this}rotate(e){return this.premultiply(Ff.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ff.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Ff=new bt,H0=new bt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),z0=new bt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){let r={enabled:!0,workingColorSpace:wr,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===Vt&&(i.r=ls(i.r),i.g=ls(i.g),i.b=ls(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===Vt&&(i.r=Sa(i.r),i.g=Sa(i.g),i.b=Sa(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===fs?Ul:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Ca("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Ca("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[wr]:{primaries:e,whitePoint:n,transfer:Ul,toXYZ:H0,fromXYZ:z0,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Kt},outputColorSpaceConfig:{drawingBufferColorSpace:Kt}},[Kt]:{primaries:e,whitePoint:n,transfer:Vt,toXYZ:H0,fromXYZ:z0,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Kt}}}),r}var Lt=Uy();function ls(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Sa(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var la,Qu=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{la===void 0&&(la=kl("canvas")),la.width=e.width,la.height=e.height;let i=la.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=la}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kl("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=ls(s[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(ls(t[n]/255)*255):t[n]=ls(t[n]);return{data:t,width:e.width,height:e.height}}else return ht("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Oy=0,Ia=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Hr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Nf(i[o].image)):s.push(Nf(i[o]))}else s=Nf(i);n.url=s}return t||(e.images[this.uuid]=n),n}};function Nf(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?Qu.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(ht("Texture: Unable to serialize Texture."),{})}var ky=0,Uf=new P,Un=class r extends us{constructor(e=r.DEFAULT_IMAGE,t=r.DEFAULT_MAPPING,n=Br,i=Br,s=Zn,o=Vs,a=fr,l=Di,c=r.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ky++}),this.uuid=Hr(),this.name="",this.source=new Ia(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ve(0,0),this.repeat=new ve(1,1),this.center=new ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new bt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uf).x}get height(){return this.source.getSize(Uf).y}get depth(){return this.source.getSize(Uf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let n=e[t];if(n===void 0){ht(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bp)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Aa:e.x=e.x-Math.floor(e.x);break;case Br:e.x=e.x<0?0:1;break;case Ju:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Aa:e.y=e.y-Math.floor(e.y);break;case Br:e.y=e.y<0?0:1;break;case Ju:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Un.DEFAULT_IMAGE=null;Un.DEFAULT_MAPPING=bp;Un.DEFAULT_ANISOTROPY=1;var tn=class r{constructor(e=0,t=0,n=0,i=1){r.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,i=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s,l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],d=l[5],m=l[9],p=l[2],_=l[6],g=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-p)<.01&&Math.abs(m-_)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+p)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+g-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let x=(c+1)/2,v=(d+1)/2,M=(g+1)/2,T=(h+f)/4,S=(u+p)/4,A=(m+_)/4;return x>v&&x>M?x<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(x),i=T/n,s=S/n):v>M?v<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(v),n=T/i,s=A/i):M<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(M),n=S/s,i=A/s),this.set(n,i,s,t),this}let y=Math.sqrt((_-m)*(_-m)+(u-p)*(u-p)+(f-h)*(f-h));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(u-p)/y,this.z=(f-h)/y,this.w=Math.acos((c+d+g-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(St(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends us{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new tn(0,0,e,t),this.scissorTest=!1,this.viewport=new tn(0,0,e,t);let i={width:e,height:t,depth:n.depth},s=new Un(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(e={}){let t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let i=Object.assign({},e.textures[t].image);this.textures[t].source=new Ia(i)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},gn=class extends eh{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Hl=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var th=class extends Un{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=en,this.minFilter=en,this.wrapR=Br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Vr=class{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(br.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(br.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=br.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,br):br.fromBufferAttribute(s,o),br.applyMatrix4(e.matrixWorld),this.expandByPoint(br);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),vu.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),vu.copy(n.boundingBox)),vu.applyMatrix4(e.matrixWorld),this.union(vu)}let i=e.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,br),br.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(yl),xu.subVectors(this.max,yl),ca.subVectors(e.a,yl),ua.subVectors(e.b,yl),ha.subVectors(e.c,yl),Rs.subVectors(ua,ca),Cs.subVectors(ha,ua),po.subVectors(ca,ha);let t=[0,-Rs.z,Rs.y,0,-Cs.z,Cs.y,0,-po.z,po.y,Rs.z,0,-Rs.x,Cs.z,0,-Cs.x,po.z,0,-po.x,-Rs.y,Rs.x,0,-Cs.y,Cs.x,0,-po.y,po.x,0];return!Of(t,ca,ua,ha,xu)||(t=[1,0,0,0,1,0,0,0,1],!Of(t,ca,ua,ha,xu))?!1:(yu.crossVectors(Rs,Cs),t=[yu.x,yu.y,yu.z],Of(t,ca,ua,ha,xu))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,br).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(br).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ns[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ns[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ns[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ns[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ns[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ns[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ns[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ns[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ns),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ns=[new P,new P,new P,new P,new P,new P,new P,new P],br=new P,vu=new Vr,ca=new P,ua=new P,ha=new P,Rs=new P,Cs=new P,po=new P,yl=new P,xu=new P,yu=new P,mo=new P;function Of(r,e,t,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){mo.fromArray(r,s);let a=i.x*Math.abs(mo.x)+i.y*Math.abs(mo.y)+i.z*Math.abs(mo.z),l=e.dot(mo),c=t.dot(mo),h=n.dot(mo);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}var By=new Vr,bl=new P,kf=new P,Gr=class{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):By.setFromPoints(e).getCenter(n);let i=0;for(let s=0,o=e.length;s<o;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bl.subVectors(e,this.center);let t=bl.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(bl,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bl.copy(e.center).add(kf)),this.expandByPoint(bl.copy(e.center).sub(kf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},is=new P,Bf=new P,bu=new P,Ps=new P,Hf=new P,Mu=new P,zf=new P,La=class{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,is)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=is.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(is.copy(this.origin).addScaledVector(this.direction,t),is.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Bf.copy(e).add(t).multiplyScalar(.5),bu.copy(t).sub(e).normalize(),Ps.copy(this.origin).sub(Bf);let s=e.distanceTo(t)*.5,o=-this.direction.dot(bu),a=Ps.dot(this.direction),l=-Ps.dot(bu),c=Ps.lengthSq(),h=Math.abs(1-o*o),u,f,d,m;if(h>0)if(u=o*l-a,f=o*a-l,m=s*h,u>=0)if(f>=-m)if(f<=m){let p=1/h;u*=p,f*=p,d=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f=-s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-o*s+a)),f=u>0?-s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(u=Math.max(0,-(o*s+a)),f=u>0?s:Math.min(Math.max(-s,-l),s),d=-u*u+f*(f+2*l)+c);else f=o>0?-s:s,u=Math.max(0,-(o*f+a)),d=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(Bf).addScaledVector(bu,f),d}intersectSphere(e,t){is.subVectors(e.center,this.origin);let n=is.dot(this.direction),i=is.dot(is)-n*n,s=e.radius*e.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,o,a,l,c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,i=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,i=(e.min.x-f.x)*c),h>=0?(s=(e.min.y-f.y)*h,o=(e.max.y-f.y)*h):(s=(e.max.y-f.y)*h,o=(e.min.y-f.y)*h),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(a=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,is)!==null}intersectTriangle(e,t,n,i,s){Hf.subVectors(t,e),Mu.subVectors(n,e),zf.crossVectors(Hf,Mu);let o=this.direction.dot(zf),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ps.subVectors(this.origin,e);let l=a*this.direction.dot(Mu.crossVectors(Ps,Mu));if(l<0)return null;let c=a*this.direction.dot(Hf.cross(Ps));if(c<0||l+c>o)return null;let h=-a*Ps.dot(zf);return h<0?null:this.at(h/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pt=class r{constructor(e,t,n,i,s,o,a,l,c,h,u,f,d,m,p,_){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,o,a,l,c,h,u,f,d,m,p,_)}set(e,t,n,i,s,o,a,l,c,h,u,f,d,m,p,_){let g=this.elements;return g[0]=e,g[4]=t,g[8]=n,g[12]=i,g[1]=s,g[5]=o,g[9]=a,g[13]=l,g[2]=c,g[6]=h,g[10]=u,g[14]=f,g[3]=d,g[7]=m,g[11]=p,g[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinant()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();let t=this.elements,n=e.elements,i=1/da.setFromMatrixColumn(e,0).length(),s=1/da.setFromMatrixColumn(e,1).length(),o=1/da.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,i=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){let f=o*h,d=o*u,m=a*h,p=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=d+m*c,t[5]=f-p*c,t[9]=-a*l,t[2]=p-f*c,t[6]=m+d*c,t[10]=o*l}else if(e.order==="YXZ"){let f=l*h,d=l*u,m=c*h,p=c*u;t[0]=f+p*a,t[4]=m*a-d,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=d*a-m,t[6]=p+f*a,t[10]=o*l}else if(e.order==="ZXY"){let f=l*h,d=l*u,m=c*h,p=c*u;t[0]=f-p*a,t[4]=-o*u,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*h,t[9]=p-f*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){let f=o*h,d=o*u,m=a*h,p=a*u;t[0]=l*h,t[4]=m*c-d,t[8]=f*c+p,t[1]=l*u,t[5]=p*c+f,t[9]=d*c-m,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){let f=o*l,d=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=p-f*u,t[8]=m*u+d,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=d*u+m,t[10]=f-p*u}else if(e.order==="XZY"){let f=o*l,d=o*c,m=a*l,p=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+p,t[5]=o*h,t[9]=d*u-m,t[2]=m*u-d,t[6]=a*h,t[10]=p*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,zy)}lookAt(e,t,n){let i=this.elements;return Bi.subVectors(e,t),Bi.lengthSq()===0&&(Bi.z=1),Bi.normalize(),Is.crossVectors(n,Bi),Is.lengthSq()===0&&(Math.abs(n.z)===1?Bi.x+=1e-4:Bi.z+=1e-4,Bi.normalize(),Is.crossVectors(n,Bi)),Is.normalize(),Eu.crossVectors(Bi,Is),i[0]=Is.x,i[4]=Eu.x,i[8]=Bi.x,i[1]=Is.y,i[5]=Eu.y,i[9]=Bi.y,i[2]=Is.z,i[6]=Eu.z,i[10]=Bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,i=t.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],d=n[13],m=n[2],p=n[6],_=n[10],g=n[14],y=n[3],x=n[7],v=n[11],M=n[15],T=i[0],S=i[4],A=i[8],b=i[12],E=i[1],L=i[5],R=i[9],D=i[13],k=i[2],G=i[6],z=i[10],B=i[14],K=i[3],se=i[7],N=i[11],ae=i[15];return s[0]=o*T+a*E+l*k+c*K,s[4]=o*S+a*L+l*G+c*se,s[8]=o*A+a*R+l*z+c*N,s[12]=o*b+a*D+l*B+c*ae,s[1]=h*T+u*E+f*k+d*K,s[5]=h*S+u*L+f*G+d*se,s[9]=h*A+u*R+f*z+d*N,s[13]=h*b+u*D+f*B+d*ae,s[2]=m*T+p*E+_*k+g*K,s[6]=m*S+p*L+_*G+g*se,s[10]=m*A+p*R+_*z+g*N,s[14]=m*b+p*D+_*B+g*ae,s[3]=y*T+x*E+v*k+M*K,s[7]=y*S+x*L+v*G+M*se,s[11]=y*A+x*R+v*z+M*N,s[15]=y*b+x*D+v*B+M*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],d=e[14],m=e[3],p=e[7],_=e[11],g=e[15],y=l*d-c*f,x=a*d-c*u,v=a*f-l*u,M=o*d-c*h,T=o*f-l*h,S=o*u-a*h;return t*(p*y-_*x+g*v)-n*(m*y-_*M+g*T)+i*(m*x-p*M+g*S)-s*(m*v-p*T+_*S)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],d=e[11],m=e[12],p=e[13],_=e[14],g=e[15],y=u*_*c-p*f*c+p*l*d-a*_*d-u*l*g+a*f*g,x=m*f*c-h*_*c-m*l*d+o*_*d+h*l*g-o*f*g,v=h*p*c-m*u*c+m*a*d-o*p*d-h*a*g+o*u*g,M=m*u*l-h*p*l-m*a*f+o*p*f+h*a*_-o*u*_,T=t*y+n*x+i*v+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let S=1/T;return e[0]=y*S,e[1]=(p*f*s-u*_*s-p*i*d+n*_*d+u*i*g-n*f*g)*S,e[2]=(a*_*s-p*l*s+p*i*c-n*_*c-a*i*g+n*l*g)*S,e[3]=(u*l*s-a*f*s-u*i*c+n*f*c+a*i*d-n*l*d)*S,e[4]=x*S,e[5]=(h*_*s-m*f*s+m*i*d-t*_*d-h*i*g+t*f*g)*S,e[6]=(m*l*s-o*_*s-m*i*c+t*_*c+o*i*g-t*l*g)*S,e[7]=(o*f*s-h*l*s+h*i*c-t*f*c-o*i*d+t*l*d)*S,e[8]=v*S,e[9]=(m*u*s-h*p*s-m*n*d+t*p*d+h*n*g-t*u*g)*S,e[10]=(o*p*s-m*a*s+m*n*c-t*p*c-o*n*g+t*a*g)*S,e[11]=(h*a*s-o*u*s-h*n*c+t*u*c+o*n*d-t*a*d)*S,e[12]=M*S,e[13]=(h*p*i-m*u*i+m*n*f-t*p*f-h*n*_+t*u*_)*S,e[14]=(m*a*i-o*p*i-m*n*l+t*p*l+o*n*_-t*a*_)*S,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*f+t*a*f)*S,this}scale(e){let t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),i=Math.sin(t),s=1-n,o=e.x,a=e.y,l=e.z,c=s*o,h=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,o){return this.set(1,n,s,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){let i=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,c=s+s,h=o+o,u=a+a,f=s*c,d=s*h,m=s*u,p=o*h,_=o*u,g=a*u,y=l*c,x=l*h,v=l*u,M=n.x,T=n.y,S=n.z;return i[0]=(1-(p+g))*M,i[1]=(d+v)*M,i[2]=(m-x)*M,i[3]=0,i[4]=(d-v)*T,i[5]=(1-(f+g))*T,i[6]=(_+y)*T,i[7]=0,i[8]=(m+x)*S,i[9]=(_-y)*S,i[10]=(1-(f+p))*S,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){let i=this.elements;if(e.x=i[12],e.y=i[13],e.z=i[14],this.determinant()===0)return n.set(1,1,1),t.identity(),this;let s=da.set(i[0],i[1],i[2]).length(),o=da.set(i[4],i[5],i[6]).length(),a=da.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),Mr.copy(this);let c=1/s,h=1/o,u=1/a;return Mr.elements[0]*=c,Mr.elements[1]*=c,Mr.elements[2]*=c,Mr.elements[4]*=h,Mr.elements[5]*=h,Mr.elements[6]*=h,Mr.elements[8]*=u,Mr.elements[9]*=u,Mr.elements[10]*=u,t.setFromRotationMatrix(Mr),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,i,s,o,a=Sr,l=!1){let c=this.elements,h=2*s/(t-e),u=2*s/(n-i),f=(t+e)/(t-e),d=(n+i)/(n-i),m,p;if(l)m=s/(o-s),p=o*s/(o-s);else if(a===Sr)m=-(o+s)/(o-s),p=-2*o*s/(o-s);else if(a===Ol)m=-o/(o-s),p=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=p,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,s,o,a=Sr,l=!1){let c=this.elements,h=2/(t-e),u=2/(n-i),f=-(t+e)/(t-e),d=-(n+i)/(n-i),m,p;if(l)m=1/(o-s),p=o/(o-s);else if(a===Sr)m=-2/(o-s),p=-(o+s)/(o-s);else if(a===Ol)m=-1/(o-s),p=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=p,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},da=new P,Mr=new Pt,Hy=new P(0,0,0),zy=new P(1,1,1),Is=new P,Eu=new P,Bi=new P,V0=new Pt,G0=new _n,Xn=class r{constructor(e=0,t=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let i=e.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],f=i[6],d=i[10];switch(t){case"XYZ":this._y=Math.asin(St(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-St(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(St(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(St(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-St(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-h,d),this._y=0);break;default:ht("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return V0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(V0,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return G0.setFromEuler(this),this.setFromQuaternion(G0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Xn.DEFAULT_ORDER="XYZ";var zl=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vy=0,W0=new P,fa=new _n,rs=new Pt,Tu=new P,Ml=new P,Gy=new P,Wy=new _n,X0=new P(1,0,0),q0=new P(0,1,0),Y0=new P(0,0,1),$0={type:"added"},Xy={type:"removed"},pa={type:"childadded",child:null},Vf={type:"childremoved",child:null},yn=class r extends us{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vy++}),this.uuid=Hr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let e=new P,t=new Xn,n=new _n,i=new P(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pt},normalMatrix:{value:new bt}}),this.matrix=new Pt,this.matrixWorld=new Pt,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.multiply(fa),this}rotateOnWorldAxis(e,t){return fa.setFromAxisAngle(e,t),this.quaternion.premultiply(fa),this}rotateX(e){return this.rotateOnAxis(X0,e)}rotateY(e){return this.rotateOnAxis(q0,e)}rotateZ(e){return this.rotateOnAxis(Y0,e)}translateOnAxis(e,t){return W0.copy(e).applyQuaternion(this.quaternion),this.position.add(W0.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(X0,e)}translateY(e){return this.translateOnAxis(q0,e)}translateZ(e){return this.translateOnAxis(Y0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rs.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Tu.copy(e):Tu.set(e,t,n);let i=this.parent;this.updateWorldMatrix(!0,!1),Ml.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rs.lookAt(Ml,Tu,this.up):rs.lookAt(Tu,Ml,this.up),this.quaternion.setFromRotationMatrix(rs),i&&(rs.extractRotation(i.matrixWorld),fa.setFromRotationMatrix(rs),this.quaternion.premultiply(fa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(gt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($0),pa.child=e,this.dispatchEvent(pa),pa.child=null):gt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Vf.child=e,this.dispatchEvent(Vf),Vf.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rs.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rs.multiply(e.parent.matrixWorld)),e.applyMatrix4(rs),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($0),pa.child=e,this.dispatchEvent(pa),pa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,e,Gy),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ml,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));i.material=a}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(e.animations,l))}}if(t){let a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),f=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let i=e.children[n];this.add(i.clone())}return this}};yn.DEFAULT_UP=new P(0,1,0);yn.DEFAULT_MATRIX_AUTO_UPDATE=!0;yn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Er=new P,ss=new P,Gf=new P,os=new P,ma=new P,ga=new P,Z0=new P,Wf=new P,Xf=new P,qf=new P,Yf=new tn,$f=new tn,Zf=new tn,as=class r{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Er.subVectors(e,t),i.cross(Er);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){Er.subVectors(i,t),ss.subVectors(n,t),Gf.subVectors(e,t);let o=Er.dot(Er),a=Er.dot(ss),l=Er.dot(Gf),c=ss.dot(ss),h=ss.dot(Gf),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;let f=1/u,d=(c*l-a*h)*f,m=(o*h-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,os)===null?!1:os.x>=0&&os.y>=0&&os.x+os.y<=1}static getInterpolation(e,t,n,i,s,o,a,l){return this.getBarycoord(e,t,n,i,os)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,os.x),l.addScaledVector(o,os.y),l.addScaledVector(a,os.z),l)}static getInterpolatedAttribute(e,t,n,i,s,o){return Yf.setScalar(0),$f.setScalar(0),Zf.setScalar(0),Yf.fromBufferAttribute(e,t),$f.fromBufferAttribute(e,n),Zf.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(Yf,s.x),o.addScaledVector($f,s.y),o.addScaledVector(Zf,s.z),o}static isFrontFacing(e,t,n,i){return Er.subVectors(n,t),ss.subVectors(e,t),Er.cross(ss).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Er.subVectors(this.c,this.b),ss.subVectors(this.a,this.b),Er.cross(ss).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return r.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return r.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return r.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return r.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return r.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,i=this.b,s=this.c,o,a;ma.subVectors(i,n),ga.subVectors(s,n),Wf.subVectors(e,n);let l=ma.dot(Wf),c=ga.dot(Wf);if(l<=0&&c<=0)return t.copy(n);Xf.subVectors(e,i);let h=ma.dot(Xf),u=ga.dot(Xf);if(h>=0&&u<=h)return t.copy(i);let f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(ma,o);qf.subVectors(e,s);let d=ma.dot(qf),m=ga.dot(qf);if(m>=0&&d<=m)return t.copy(s);let p=d*c-l*m;if(p<=0&&c>=0&&m<=0)return a=c/(c-m),t.copy(n).addScaledVector(ga,a);let _=h*m-d*u;if(_<=0&&u-h>=0&&d-m>=0)return Z0.subVectors(s,i),a=(u-h)/(u-h+(d-m)),t.copy(i).addScaledVector(Z0,a);let g=1/(_+p+f);return o=p*g,a=f*g,t.copy(n).addScaledVector(ma,o).addScaledVector(ga,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},Kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ls={h:0,s:0,l:0},Su={h:0,s:0,l:0};function Jf(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}var Me=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Kt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=Lt.workingColorSpace){if(e=Pp(e,1),t=St(t,0,1),n=St(n,0,1),t===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=Jf(o,s,e+1/3),this.g=Jf(o,s,e),this.b=Jf(o,s,e-1/3)}return Lt.colorSpaceToWorking(this,i),this}setStyle(e,t=Kt){function n(s){s!==void 0&&parseFloat(s)<1&&ht("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:ht("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);ht("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Kt){let n=Kg[e.toLowerCase()];return n!==void 0?this.setHex(n,t):ht("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=ls(e.r),this.g=ls(e.g),this.b=ls(e.b),this}copyLinearToSRGB(e){return this.r=Sa(e.r),this.g=Sa(e.g),this.b=Sa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Kt){return Lt.workingToColorSpace(ri.copy(this),e),Math.round(St(ri.r*255,0,255))*65536+Math.round(St(ri.g*255,0,255))*256+Math.round(St(ri.b*255,0,255))}getHexString(e=Kt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(ri.copy(this),t);let n=ri.r,i=ri.g,s=ri.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,h=(a+o)/2;if(a===o)l=0,c=0;else{let u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-s)/u+(i<s?6:0);break;case i:l=(s-n)/u+2;break;case s:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(ri.copy(this),t),e.r=ri.r,e.g=ri.g,e.b=ri.b,e}getStyle(e=Kt){Lt.workingToColorSpace(ri.copy(this),e);let t=ri.r,n=ri.g,i=ri.b;return e!==Kt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Ls),this.setHSL(Ls.h+e,Ls.s+t,Ls.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Ls),e.getHSL(Su);let n=Ll(Ls.h,Su.h,t),i=Ll(Ls.s,Su.s,t),s=Ll(Ls.l,Su.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},ri=new Me;Me.NAMES=Kg;var qy=0,zi=class extends us{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:qy++}),this.uuid=Hr(),this.name="",this.type="Material",this.blending=xo,this.side=cs,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$u,this.blendDst=Zu,this.blendEquation=Fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Me(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=cp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=vo,this.stencilZFail=vo,this.stencilZPass=vo,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){ht(`Material: parameter '${t}' has value of undefined.`);continue}let i=this[t];if(i===void 0){ht(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xo&&(n.blending=this.blending),this.side!==cs&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==$u&&(n.blendSrc=this.blendSrc),this.blendDst!==Zu&&(n.blendDst=this.blendDst),this.blendEquation!==Fs&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==cp&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==vo&&(n.stencilFail=this.stencilFail),this.stencilZFail!==vo&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==vo&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(t){let s=i(e.textures),o=i(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},bn=class extends zi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var Dn=new P,wu=new ve,Yy=0,Ut=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=ju,this.updateRanges=[],this.gpuType=dr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)wu.fromBufferAttribute(this,t),wu.applyMatrix3(e),this.setXY(t,wu.x,wu.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix3(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyMatrix4(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.applyNormalMatrix(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Dn.fromBufferAttribute(this,t),Dn.transformDirection(e),this.setXYZ(t,Dn.x,Dn.y,Dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Tr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Tr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Tr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Tr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==ju&&(e.usage=this.usage),e}};var Vl=class extends Ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Gl=class extends Ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var lt=class extends Ut{constructor(e,t,n){super(new Float32Array(e),t,n)}},$y=0,or=new Pt,Kf=new yn,_a=new P,Hi=new Vr,El=new Vr,Wn=new P,vt=class r extends us{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:$y++}),this.uuid=Hr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Cp(e)?Gl:Vl)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new bt().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return or.makeRotationFromQuaternion(e),this.applyMatrix4(or),this}rotateX(e){return or.makeRotationX(e),this.applyMatrix4(or),this}rotateY(e){return or.makeRotationY(e),this.applyMatrix4(or),this}rotateZ(e){return or.makeRotationZ(e),this.applyMatrix4(or),this}translate(e,t,n){return or.makeTranslation(e,t,n),this.applyMatrix4(or),this}scale(e,t,n){return or.makeScale(e,t,n),this.applyMatrix4(or),this}lookAt(e){return Kf.lookAt(e),Kf.updateMatrix(),this.applyMatrix4(Kf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(_a).negate(),this.translate(_a.x,_a.y,_a.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let n=[];for(let i=0,s=e.length;i<s;i++){let o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{let n=Math.min(e.length,t.count);for(let i=0;i<n;i++){let s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&ht("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){let s=t[n];Hi.setFromBufferAttribute(s),this.morphTargetsRelative?(Wn.addVectors(this.boundingBox.min,Hi.min),this.boundingBox.expandByPoint(Wn),Wn.addVectors(this.boundingBox.max,Hi.max),this.boundingBox.expandByPoint(Wn)):(this.boundingBox.expandByPoint(Hi.min),this.boundingBox.expandByPoint(Hi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&gt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Gr);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){gt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){let n=this.boundingSphere.center;if(Hi.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){let a=t[s];El.setFromBufferAttribute(a),this.morphTargetsRelative?(Wn.addVectors(Hi.min,El.min),Hi.expandByPoint(Wn),Wn.addVectors(Hi.max,El.max),Hi.expandByPoint(Wn)):(Hi.expandByPoint(El.min),Hi.expandByPoint(El.max))}Hi.getCenter(n);let i=0;for(let s=0,o=e.count;s<o;s++)Wn.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(Wn));if(t)for(let s=0,o=t.length;s<o;s++){let a=t[s],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Wn.fromBufferAttribute(a,c),l&&(_a.fromBufferAttribute(e,c),Wn.add(_a)),i=Math.max(i,n.distanceToSquared(Wn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&gt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){gt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,i=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ut(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let A=0;A<n.count;A++)a[A]=new P,l[A]=new P;let c=new P,h=new P,u=new P,f=new ve,d=new ve,m=new ve,p=new P,_=new P;function g(A,b,E){c.fromBufferAttribute(n,A),h.fromBufferAttribute(n,b),u.fromBufferAttribute(n,E),f.fromBufferAttribute(s,A),d.fromBufferAttribute(s,b),m.fromBufferAttribute(s,E),h.sub(c),u.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(p.copy(h).multiplyScalar(m.y).addScaledVector(u,-d.y).multiplyScalar(L),_.copy(u).multiplyScalar(d.x).addScaledVector(h,-m.x).multiplyScalar(L),a[A].add(p),a[b].add(p),a[E].add(p),l[A].add(_),l[b].add(_),l[E].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let A=0,b=y.length;A<b;++A){let E=y[A],L=E.start,R=E.count;for(let D=L,k=L+R;D<k;D+=3)g(e.getX(D+0),e.getX(D+1),e.getX(D+2))}let x=new P,v=new P,M=new P,T=new P;function S(A){M.fromBufferAttribute(i,A),T.copy(M);let b=a[A];x.copy(b),x.sub(M.multiplyScalar(M.dot(b))).normalize(),v.crossVectors(T,b);let L=v.dot(l[A])<0?-1:1;o.setXYZW(A,x.x,x.y,x.z,L)}for(let A=0,b=y.length;A<b;++A){let E=y[A],L=E.start,R=E.count;for(let D=L,k=L+R;D<k;D+=3)S(e.getX(D+0)),S(e.getX(D+1)),S(e.getX(D+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new P,s=new P,o=new P,a=new P,l=new P,c=new P,h=new P,u=new P;if(e)for(let f=0,d=e.count;f<d;f+=3){let m=e.getX(f+0),p=e.getX(f+1),_=e.getX(f+2);i.fromBufferAttribute(t,m),s.fromBufferAttribute(t,p),o.fromBufferAttribute(t,_),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,p),c.fromBufferAttribute(n,_),a.add(h),l.add(h),c.add(h),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(p,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=t.count;f<d;f+=3)i.fromBufferAttribute(t,f+0),s.fromBufferAttribute(t,f+1),o.fromBufferAttribute(t,f+2),h.subVectors(o,s),u.subVectors(i,s),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Wn.fromBufferAttribute(e,t),Wn.normalize(),e.setXYZ(t,Wn.x,Wn.y,Wn.z)}toNonIndexed(){function e(a,l){let c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h),d=0,m=0;for(let p=0,_=l.length;p<_;p++){a.isInterleavedBufferAttribute?d=l[p]*a.data.stride+a.offset:d=l[p]*h;for(let g=0;g<h;g++)f[m++]=c[d++]}return new Ut(f,h,u)}if(this.index===null)return ht("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=e(l,n);t.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let h=0,u=c.length;h<u;h++){let f=c[h],d=e(f,n);l.push(d)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){let d=c[u];h.push(d.toJSON(e.data))}h.length>0&&(i[l]=h,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone());let i=e.attributes;for(let c in i){let h=i[c];this.setAttribute(c,h.clone(t))}let s=e.morphAttributes;for(let c in s){let h=[],u=s[c];for(let f=0,d=u.length;f<d;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let o=e.groups;for(let c=0,h=o.length;c<h;c++){let u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}let a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},J0=new Pt,go=new La,Au=new Gr,K0=new P,Ru=new P,Cu=new P,Pu=new P,jf=new P,Iu=new P,j0=new P,Lu=new P,Ue=class extends yn{constructor(e=new vt,t=new bn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);let a=this.morphTargetInfluences;if(s&&a){Iu.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let h=a[l],u=s[l];h!==0&&(jf.fromBufferAttribute(u,e),o?Iu.addScaledVector(jf,h):Iu.addScaledVector(jf.sub(t),h))}t.add(Iu)}return t}raycast(e,t){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Au.copy(n.boundingSphere),Au.applyMatrix4(s),go.copy(e.ray).recast(e.near),!(Au.containsPoint(go.origin)===!1&&(go.intersectSphere(Au,K0)===null||go.origin.distanceToSquared(K0)>(e.far-e.near)**2))&&(J0.copy(s).invert(),go.copy(e.ray).applyMatrix4(J0),!(n.boundingBox!==null&&go.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,go)))}_computeIntersections(e,t,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,h=s.attributes.uv1,u=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let _=f[m],g=o[_.materialIndex],y=Math.max(_.start,d.start),x=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){let T=a.getX(v),S=a.getX(v+1),A=a.getX(v+2);i=Du(this,g,e,n,c,h,u,T,S,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),p=Math.min(a.count,d.start+d.count);for(let _=m,g=p;_<g;_+=3){let y=a.getX(_),x=a.getX(_+1),v=a.getX(_+2);i=Du(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,p=f.length;m<p;m++){let _=f[m],g=o[_.materialIndex],y=Math.max(_.start,d.start),x=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let v=y,M=x;v<M;v+=3){let T=v,S=v+1,A=v+2;i=Du(this,g,e,n,c,h,u,T,S,A),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=_.materialIndex,t.push(i))}}else{let m=Math.max(0,d.start),p=Math.min(l.count,d.start+d.count);for(let _=m,g=p;_<g;_+=3){let y=_,x=_+1,v=_+2;i=Du(this,o,e,n,c,h,u,y,x,v),i&&(i.faceIndex=Math.floor(_/3),t.push(i))}}}};function Zy(r,e,t,n,i,s,o,a){let l;if(e.side===In?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,e.side===cs,a),l===null)return null;Lu.copy(a),Lu.applyMatrix4(r.matrixWorld);let c=t.ray.origin.distanceTo(Lu);return c<t.near||c>t.far?null:{distance:c,point:Lu.clone(),object:r}}function Du(r,e,t,n,i,s,o,a,l,c){r.getVertexPosition(a,Ru),r.getVertexPosition(l,Cu),r.getVertexPosition(c,Pu);let h=Zy(r,e,t,n,Ru,Cu,Pu,j0);if(h){let u=new P;as.getBarycoord(j0,Ru,Cu,Pu,u),i&&(h.uv=as.getInterpolatedAttribute(i,a,l,c,u,new ve)),s&&(h.uv1=as.getInterpolatedAttribute(s,a,l,c,u,new ve)),o&&(h.normal=as.getInterpolatedAttribute(o,a,l,c,u,new P),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new P,materialIndex:0};as.getNormal(Ru,Cu,Pu,f.normal),h.face=f,h.barycoord=u}return h}var Wt=class r extends vt{constructor(e=1,t=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],h=[],u=[],f=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,i,o,2),m("x","z","y",1,-1,e,n,-t,i,o,3),m("x","y","z",1,-1,e,t,n,i,s,4),m("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function m(p,_,g,y,x,v,M,T,S,A,b){let E=v/S,L=M/A,R=v/2,D=M/2,k=T/2,G=S+1,z=A+1,B=0,K=0,se=new P;for(let N=0;N<z;N++){let ae=N*L-D;for(let Be=0;Be<G;Be++){let He=Be*E-R;se[p]=He*y,se[_]=ae*x,se[g]=k,c.push(se.x,se.y,se.z),se[p]=0,se[_]=0,se[g]=T>0?1:-1,h.push(se.x,se.y,se.z),u.push(Be/S),u.push(1-N/A),B+=1}}for(let N=0;N<A;N++)for(let ae=0;ae<S;ae++){let Be=f+ae+G*N,He=f+ae+G*(N+1),Ye=f+(ae+1)+G*(N+1),it=f+(ae+1)+G*N;l.push(Be,He,it),l.push(He,Ye,it),K+=6}a.addGroup(d,K,b),d+=K,f+=B}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function Io(r){let e={};for(let t in r){e[t]={};for(let n in r[t]){let i=r[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(ht("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function ai(r){let e={};for(let t=0;t<r.length;t++){let n=Io(r[t]);for(let i in n)e[i]=n[i]}return e}function Jy(r){let e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function Ip(r){let e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}var ps={clone:Io,merge:ai},Ky=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Ot=class extends zi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ky,this.fragmentShader=jy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Io(e.uniforms),this.uniformsGroups=Jy(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Wl=class extends yn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pt,this.projectionMatrix=new Pt,this.projectionMatrixInverse=new Pt,this.coordinateSystem=Sr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},Ds=new P,Q0=new ve,eg=new ve,Ht=class extends Wl{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Pa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Il*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Pa*2*Math.atan(Math.tan(Il*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ds.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z),Ds.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ds.x,Ds.y).multiplyScalar(-e/Ds.z)}getViewSize(e,t){return this.getViewBounds(e,Q0,eg),t.subVectors(eg,Q0)}setViewOffset(e,t,n,i,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Il*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},va=-90,xa=1,nh=class extends yn{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new Ht(va,xa,e,t);i.layers=this.layers,this.add(i);let s=new Ht(va,xa,e,t);s.layers=this.layers,this.add(s);let o=new Ht(va,xa,e,t);o.layers=this.layers,this.add(o);let a=new Ht(va,xa,e,t);a.layers=this.layers,this.add(a);let l=new Ht(va,xa,e,t);l.layers=this.layers,this.add(l);let c=new Ht(va,xa,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,i,s,o,a,l]=t;for(let c of t)this.remove(c);if(e===Sr)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ol)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),d=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;let p=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,s),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=p,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,f,d),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Xl=class extends Un{constructor(e=[],t=zs,n,i,s,o,a,l,c,h){super(e,t,n,i,s,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},ql=class extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Xl(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Wt(5,5,5),s=new Ot({name:"CubemapFromEquirect",uniforms:Io(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:In,blending:hr});s.uniforms.tEquirect.value=t;let o=new Ue(i,s),a=t.minFilter;return t.minFilter===Vs&&(t.minFilter=Zn),new nh(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){let s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(s)}},$e=class extends yn{constructor(){super(),this.isGroup=!0,this.type="Group"}},Qy={type:"move"},Da=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $e,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $e,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $e,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(let p of e.hand.values()){let _=t.getJointPose(p,n),g=this._getHandJoint(c,p);_!==null&&(g.matrix.fromArray(_.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=_.radius),g.visible=_!==null}let h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qy)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new $e;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}};var hs=class r{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Me(e),this.near=t,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},jt=class extends yn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Xn,this.environmentIntensity=1,this.environmentRotation=new Xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}},ih=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=ju,this.updateRanges=[],this.version=0,this.uuid=Hr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,s=this.stride;i<s;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Hr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},xi=new P,Yl=class r{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyMatrix4(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.applyNormalMatrix(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)xi.fromBufferAttribute(this,t),xi.transformDirection(e),this.setXYZ(t,xi.x,xi.y,xi.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Tr(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Tr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Tr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Tr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Tr(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Zt(t,this.array),n=Zt(n,this.array),i=Zt(i,this.array),s=Zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=s,this}clone(e){if(e===void 0){Bl("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return new Ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new r(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Bl("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Ns=class extends zi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ya,Tl=new P,ba=new P,Ma=new P,Ea=new ve,Sl=new ve,jg=new Pt,Fu=new P,wl=new P,Nu=new P,tg=new ve,Qf=new ve,ng=new ve,Us=class extends yn{constructor(e=new Ns){if(super(),this.isSprite=!0,this.type="Sprite",ya===void 0){ya=new vt;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ih(t,5);ya.setIndex([0,1,2,0,2,3]),ya.setAttribute("position",new Yl(n,3,0,!1)),ya.setAttribute("uv",new Yl(n,2,3,!1))}this.geometry=ya,this.material=e,this.center=new ve(.5,.5),this.count=1}raycast(e,t){e.camera===null&&gt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ba.setFromMatrixScale(this.matrixWorld),jg.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ma.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ba.multiplyScalar(-Ma.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;Uu(Fu.set(-.5,-.5,0),Ma,o,ba,i,s),Uu(wl.set(.5,-.5,0),Ma,o,ba,i,s),Uu(Nu.set(.5,.5,0),Ma,o,ba,i,s),tg.set(0,0),Qf.set(1,0),ng.set(1,1);let a=e.ray.intersectTriangle(Fu,wl,Nu,!1,Tl);if(a===null&&(Uu(wl.set(-.5,.5,0),Ma,o,ba,i,s),Qf.set(0,1),a=e.ray.intersectTriangle(Fu,Nu,wl,!1,Tl),a===null))return;let l=e.ray.origin.distanceTo(Tl);l<e.near||l>e.far||t.push({distance:l,point:Tl.clone(),uv:as.getInterpolation(Tl,Fu,wl,Nu,tg,Qf,ng,new ve),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Uu(r,e,t,n,i,s){Ea.subVectors(r,t).addScalar(.5).multiply(n),i!==void 0?(Sl.x=s*Ea.x-i*Ea.y,Sl.y=i*Ea.x+s*Ea.y):Sl.copy(Ea),r.copy(e),r.x+=Sl.x,r.y+=Sl.y,r.applyMatrix4(jg)}var $l=class extends Un{constructor(e=null,t=1,n=1,i,s,o,a,l,c=en,h=en,u,f){super(null,o,a,l,c,h,i,s,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var bo=class extends Ut{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Ta=new Pt,ig=new Pt,Ou=[],rg=new Vr,e1=new Pt,Al=new Ue,Rl=new Gr,Ar=class extends Ue{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new bo(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,e1)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vr),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ta),rg.copy(e.boundingBox).applyMatrix4(Ta),this.boundingBox.union(rg)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Gr),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ta),Rl.copy(e.boundingSphere).applyMatrix4(Ta),this.boundingSphere.union(Rl)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=e*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){let n=this.matrixWorld,i=this.count;if(Al.geometry=this.geometry,Al.material=this.material,Al.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Rl.copy(this.boundingSphere),Rl.applyMatrix4(n),e.ray.intersectsSphere(Rl)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ta),ig.multiplyMatrices(n,Ta),Al.matrixWorld=ig,Al.raycast(e,Ou);for(let o=0,a=Ou.length;o<a;o++){let l=Ou[o];l.instanceId=s,l.object=this,t.push(l)}Ou.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new bo(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){let n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new $l(new Float32Array(i*this.count),i,this.count,Bh,dr));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},ep=new P,t1=new P,n1=new bt,kr=class{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let i=ep.subVectors(n,t).cross(t1.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(ep),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let s=-(e.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||n1.getNormalMatrix(e),i=this.coplanarPoint(ep).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},_o=new Gr,i1=new ve(.5,.5),ku=new P,Fa=class{constructor(e=new kr,t=new kr,n=new kr,i=new kr,s=new kr,o=new kr){this.planes=[e,t,n,i,s,o]}set(e,t,n,i,s,o){let a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Sr,n=!1){let i=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],h=s[4],u=s[5],f=s[6],d=s[7],m=s[8],p=s[9],_=s[10],g=s[11],y=s[12],x=s[13],v=s[14],M=s[15];if(i[0].setComponents(c-o,d-h,g-m,M-y).normalize(),i[1].setComponents(c+o,d+h,g+m,M+y).normalize(),i[2].setComponents(c+a,d+u,g+p,M+x).normalize(),i[3].setComponents(c-a,d-u,g-p,M-x).normalize(),n)i[4].setComponents(l,f,_,v).normalize(),i[5].setComponents(c-l,d-f,g-_,M-v).normalize();else if(i[4].setComponents(c-l,d-f,g-_,M-v).normalize(),t===Sr)i[5].setComponents(c+l,d+f,g+_,M+v).normalize();else if(t===Ol)i[5].setComponents(l,f,_,v).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),_o.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),_o.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(_o)}intersectsSprite(e){_o.center.set(0,0,0);let t=i1.distanceTo(e.center);return _o.radius=.7071067811865476+t,_o.applyMatrix4(e.matrixWorld),this.intersectsSphere(_o)}intersectsSphere(e){let t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let i=t[n];if(ku.x=i.normal.x>0?e.max.x:e.min.x,ku.y=i.normal.y>0?e.max.y:e.min.y,ku.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ku)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var ar=class extends zi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Me(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},rh=new P,sh=new P,sg=new Pt,Cl=new La,Bu=new Gr,tp=new P,og=new P,Rr=class extends yn{constructor(e=new vt,t=new ar){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)rh.fromBufferAttribute(t,i-1),sh.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=rh.distanceTo(sh);e.setAttribute("lineDistance",new lt(n,1))}else ht("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Bu.copy(n.boundingSphere),Bu.applyMatrix4(i),Bu.radius+=s,e.ray.intersectsSphere(Bu)===!1)return;sg.copy(i).invert(),Cl.copy(e.ray).applyMatrix4(sg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){let d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let p=d,_=m-1;p<_;p+=c){let g=h.getX(p),y=h.getX(p+1),x=Hu(this,e,Cl,l,g,y,p);x&&t.push(x)}if(this.isLineLoop){let p=h.getX(m-1),_=h.getX(d),g=Hu(this,e,Cl,l,p,_,m-1);g&&t.push(g)}}else{let d=Math.max(0,o.start),m=Math.min(f.count,o.start+o.count);for(let p=d,_=m-1;p<_;p+=c){let g=Hu(this,e,Cl,l,p,p+1,p);g&&t.push(g)}if(this.isLineLoop){let p=Hu(this,e,Cl,l,m-1,d,m-1);p&&t.push(p)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Hu(r,e,t,n,i,s,o){let a=r.geometry.attributes.position;if(rh.fromBufferAttribute(a,i),sh.fromBufferAttribute(a,s),t.distanceSqToSegment(rh,sh,tp,og)>n)return;tp.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(tp);if(!(c<e.near||c>e.far))return{distance:c,point:og.clone().applyMatrix4(r.matrixWorld),index:o,face:null,faceIndex:null,barycoord:null,object:r}}var ag=new P,lg=new P,Zl=class extends Rr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,n=[];for(let i=0,s=t.count;i<s;i+=2)ag.fromBufferAttribute(t,i),lg.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+ag.distanceTo(lg);e.setAttribute("lineDistance",new lt(n,1))}else ht("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Jl=class extends Rr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},si=class extends zi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Me(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},cg=new Pt,up=new La,zu=new Gr,Vu=new P,Jn=class extends yn{constructor(e=new vt,t=new si){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),zu.copy(n.boundingSphere),zu.applyMatrix4(i),zu.radius+=s,e.ray.intersectsSphere(zu)===!1)return;cg.copy(i).invert(),up.copy(e.ray).applyMatrix4(cg);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,p=d;m<p;m++){let _=c.getX(m);Vu.fromBufferAttribute(u,_),ug(Vu,_,l,i,e,t,this)}}else{let f=Math.max(0,o.start),d=Math.min(u.count,o.start+o.count);for(let m=f,p=d;m<p;m++)Vu.fromBufferAttribute(u,m),ug(Vu,m,l,i,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function ug(r,e,t,n,i,s,o){let a=up.distanceSqToPoint(r);if(a<t){let l=new P;up.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}var Cr=class extends Un{constructor(e,t,n,i,s,o,a,l,c){super(e,t,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},lr=class extends Un{constructor(e,t,n=Lr,i,s,o,a=en,l=en,c,h=zr,u=1){if(h!==zr&&h!==Gs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:e,height:t,depth:u};super(f,i,s,o,a,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Ia(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},oh=class extends lr{constructor(e,t=Lr,n=zs,i,s,o=en,a=en,l,c=zr){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,i,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Kl=class extends Un{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Na=class r extends vt{constructor(e=1,t=1,n=4,i=8,s=1){super(),this.type="CapsuleGeometry",this.parameters={radius:e,height:t,capSegments:n,radialSegments:i,heightSegments:s},t=Math.max(0,t),n=Math.max(1,Math.floor(n)),i=Math.max(3,Math.floor(i)),s=Math.max(1,Math.floor(s));let o=[],a=[],l=[],c=[],h=t/2,u=Math.PI/2*e,f=t,d=2*u+f,m=n*2+s,p=i+1,_=new P,g=new P;for(let y=0;y<=m;y++){let x=0,v=0,M=0,T=0;if(y<=n){let b=y/n,E=b*Math.PI/2;v=-h-e*Math.cos(E),M=e*Math.sin(E),T=-e*Math.cos(E),x=b*u}else if(y<=n+s){let b=(y-n)/s;v=-h+b*t,M=e,T=0,x=u+b*f}else{let b=(y-n-s)/n,E=b*Math.PI/2;v=h+e*Math.sin(E),M=e*Math.cos(E),T=e*Math.sin(E),x=u+f+b*u}let S=Math.max(0,Math.min(1,x/d)),A=0;y===0?A=.5/i:y===m&&(A=-.5/i);for(let b=0;b<=i;b++){let E=b/i,L=E*Math.PI*2,R=Math.sin(L),D=Math.cos(L);g.x=-M*D,g.y=v,g.z=M*R,a.push(g.x,g.y,g.z),_.set(-M*D,T,M*R),_.normalize(),l.push(_.x,_.y,_.z),c.push(E+A,S)}if(y>0){let b=(y-1)*p;for(let E=0;E<i;E++){let L=b+E,R=b+E+1,D=y*p+E,k=y*p+E+1;o.push(L,R,D),o.push(R,k,D)}}}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.height,e.capSegments,e.radialSegments,e.heightSegments)}},Mo=class r extends vt{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);let s=[],o=[],a=[],l=[],c=new P,h=new ve;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,f=3;u<=t;u++,f+=3){let d=n+u/t*i;c.x=e*Math.cos(d),c.y=e*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[f]/e+1)/2,h.y=(o[f+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)s.push(u,u+1,0);this.setIndex(s),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.segments,e.thetaStart,e.thetaLength)}},cn=class r extends vt{constructor(e=1,t=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let h=[],u=[],f=[],d=[],m=0,p=[],_=n/2,g=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function y(){let v=new P,M=new P,T=0,S=(t-e)/n;for(let A=0;A<=s;A++){let b=[],E=A/s,L=E*(t-e)+e;for(let R=0;R<=i;R++){let D=R/i,k=D*l+a,G=Math.sin(k),z=Math.cos(k);M.x=L*G,M.y=-E*n+_,M.z=L*z,u.push(M.x,M.y,M.z),v.set(G,S,z).normalize(),f.push(v.x,v.y,v.z),d.push(D,1-E),b.push(m++)}p.push(b)}for(let A=0;A<i;A++)for(let b=0;b<s;b++){let E=p[b][A],L=p[b+1][A],R=p[b+1][A+1],D=p[b][A+1];(e>0||b!==0)&&(h.push(E,L,D),T+=3),(t>0||b!==s-1)&&(h.push(L,R,D),T+=3)}c.addGroup(g,T,0),g+=T}function x(v){let M=m,T=new ve,S=new P,A=0,b=v===!0?e:t,E=v===!0?1:-1;for(let R=1;R<=i;R++)u.push(0,_*E,0),f.push(0,E,0),d.push(.5,.5),m++;let L=m;for(let R=0;R<=i;R++){let k=R/i*l+a,G=Math.cos(k),z=Math.sin(k);S.x=b*z,S.y=_*E,S.z=b*G,u.push(S.x,S.y,S.z),f.push(0,E,0),T.x=G*.5+.5,T.y=z*.5*E+.5,d.push(T.x,T.y),m++}for(let R=0;R<i;R++){let D=M+R,k=L+R;v===!0?h.push(k,k+1,D):h.push(k+1,k,D),A+=3}c.addGroup(g,A,v===!0?1:2),g+=A}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var jl=class r extends vt{constructor(e=[],t=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:i};let s=[],o=[];a(i),c(n),h(),this.setAttribute("position",new lt(s,3)),this.setAttribute("normal",new lt(s.slice(),3)),this.setAttribute("uv",new lt(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let x=new P,v=new P,M=new P;for(let T=0;T<t.length;T+=3)d(t[T+0],x),d(t[T+1],v),d(t[T+2],M),l(x,v,M,y)}function l(y,x,v,M){let T=M+1,S=[];for(let A=0;A<=T;A++){S[A]=[];let b=y.clone().lerp(v,A/T),E=x.clone().lerp(v,A/T),L=T-A;for(let R=0;R<=L;R++)R===0&&A===T?S[A][R]=b:S[A][R]=b.clone().lerp(E,R/L)}for(let A=0;A<T;A++)for(let b=0;b<2*(T-A)-1;b++){let E=Math.floor(b/2);b%2===0?(f(S[A][E+1]),f(S[A+1][E]),f(S[A][E])):(f(S[A][E+1]),f(S[A+1][E+1]),f(S[A+1][E]))}}function c(y){let x=new P;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function h(){let y=new P;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];let v=_(y)/2/Math.PI+.5,M=g(y)/Math.PI+.5;o.push(v,1-M)}m(),u()}function u(){for(let y=0;y<o.length;y+=6){let x=o[y+0],v=o[y+2],M=o[y+4],T=Math.max(x,v,M),S=Math.min(x,v,M);T>.9&&S<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),M<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,x){let v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){let y=new P,x=new P,v=new P,M=new P,T=new ve,S=new ve,A=new ve;for(let b=0,E=0;b<s.length;b+=9,E+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),v.set(s[b+6],s[b+7],s[b+8]),T.set(o[E+0],o[E+1]),S.set(o[E+2],o[E+3]),A.set(o[E+4],o[E+5]),M.copy(y).add(x).add(v).divideScalar(3);let L=_(M);p(T,E+0,y,L),p(S,E+2,x,L),p(A,E+4,v,L)}}function p(y,x,v,M){M<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=M/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function g(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.vertices,e.indices,e.radius,e.detail)}};var Vi=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ht("Curve: .getPoint() not implemented.")}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,i=this.getPoint(0),s=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),s+=n.distanceTo(i),t.push(s),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let n=this.getLengths(),i=0,s=n.length,o;t?o=t:o=e*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let h=n[i],f=n[i+1]-h,d=(o-h)/f;return(i+d)/(s-1)}getTangent(e,t){let i=e-1e-4,s=e+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=t||(o.isVector2?new ve:new P);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t=!1){let n=new P,i=[],s=[],o=[],a=new P,l=new Pt;for(let d=0;d<=e;d++){let m=d/e;i[d]=this.getTangentAt(m,new P)}s[0]=new P,o[0]=new P;let c=Number.MAX_VALUE,h=Math.abs(i[0].x),u=Math.abs(i[0].y),f=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=e;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(St(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(t===!0){let d=Math.acos(St(s[0].dot(s[e]),-1,1));d/=e,i[0].dot(a.crossVectors(s[0],s[e]))>0&&(d=-d);for(let m=1;m<=e;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ua=class extends Vi{constructor(e=0,t=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ve){let n=t,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+e*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*h-d*u+this.aX,c=f*u+d*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},ah=class extends Ua{constructor(e,t,n,i,s,o){super(e,t,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Lp(){let r=0,e=0,t=0,n=0;function i(s,o,a,l){r=s,e=a,t=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,h,u){let f=(o-s)/c-(a-s)/(c+h)+(a-o)/h,d=(a-o)/h-(l-o)/(h+u)+(l-a)/u;f*=h,d*=h,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+e*s+t*o+n*a}}}var Gu=new P,np=new Lp,ip=new Lp,rp=new Lp,un=class extends Vi{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new P){let n=t,i=this.points,s=i.length,o=(s-(this.closed?0:1))*e,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%s]:(Gu.subVectors(i[0],i[1]).add(i[0]),c=Gu);let u=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?h=i[(a+2)%s]:(Gu.subVectors(i[s-1],i[s-2]).add(i[s-1]),h=Gu),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(u),d),p=Math.pow(u.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(h),d);p<1e-4&&(p=1),m<1e-4&&(m=p),_<1e-4&&(_=p),np.initNonuniformCatmullRom(c.x,u.x,f.x,h.x,m,p,_),ip.initNonuniformCatmullRom(c.y,u.y,f.y,h.y,m,p,_),rp.initNonuniformCatmullRom(c.z,u.z,f.z,h.z,m,p,_)}else this.curveType==="catmullrom"&&(np.initCatmullRom(c.x,u.x,f.x,h.x,this.tension),ip.initCatmullRom(c.y,u.y,f.y,h.y,this.tension),rp.initCatmullRom(c.z,u.z,f.z,h.z,this.tension));return n.set(np.calc(l),ip.calc(l),rp.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new P().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function hg(r,e,t,n,i){let s=(n-e)*.5,o=(i-t)*.5,a=r*r,l=r*a;return(2*t-2*n+s+o)*l+(-3*t+3*n-2*s-o)*a+s*r+t}function r1(r,e){let t=1-r;return t*t*e}function s1(r,e){return 2*(1-r)*r*e}function o1(r,e){return r*r*e}function Dl(r,e,t,n){return r1(r,e)+s1(r,t)+o1(r,n)}function a1(r,e){let t=1-r;return t*t*t*e}function l1(r,e){let t=1-r;return 3*t*t*r*e}function c1(r,e){return 3*(1-r)*r*r*e}function u1(r,e){return r*r*r*e}function Fl(r,e,t,n,i){return a1(r,e)+l1(r,t)+c1(r,n)+u1(r,i)}var Ql=class extends Vi{constructor(e=new ve,t=new ve,n=new ve,i=new ve){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ve){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fl(e,i.x,s.x,o.x,a.x),Fl(e,i.y,s.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},lh=class extends Vi{constructor(e=new P,t=new P,n=new P,i=new P){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(Fl(e,i.x,s.x,o.x,a.x),Fl(e,i.y,s.y,o.y,a.y),Fl(e,i.z,s.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},ec=class extends Vi{constructor(e=new ve,t=new ve){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ve){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ve){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ch=class extends Vi{constructor(e=new P,t=new P){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new P){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new P){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},tc=class extends Vi{constructor(e=new ve,t=new ve,n=new ve){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ve){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Dl(e,i.x,s.x,o.x),Dl(e,i.y,s.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},ds=class extends Vi{constructor(e=new P,t=new P,n=new P){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new P){let n=t,i=this.v0,s=this.v1,o=this.v2;return n.set(Dl(e,i.x,s.x,o.x),Dl(e,i.y,s.y,o.y),Dl(e,i.z,s.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Os=class extends Vi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ve){let n=t,i=this.points,s=(i.length-1)*e,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(hg(a,l.x,c.x,h.x,u.x),hg(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let i=e.points[t];this.points.push(new ve().fromArray(i))}return this}},hp=Object.freeze({__proto__:null,ArcCurve:ah,CatmullRomCurve3:un,CubicBezierCurve:Ql,CubicBezierCurve3:lh,EllipseCurve:Ua,LineCurve:ec,LineCurve3:ch,QuadraticBezierCurve:tc,QuadraticBezierCurve3:ds,SplineCurve:Os}),uh=class extends Vi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new hp[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),i=this.getCurveLengths(),s=0;for(;s<i.length;){if(i[s]>=n){let o=i[s]-n,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}s++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let i=0,s=this.curves;i<s.length;i++){let o=s[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let i=e.curves[t];this.curves.push(new hp[i.type]().fromJSON(i))}return this}},nc=class extends uh{constructor(e){super(),this.type="Path",this.currentPoint=new ve,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new ec(this.currentPoint.clone(),new ve(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){let s=new tc(this.currentPoint.clone(),new ve(e,t),new ve(n,i));return this.curves.push(s),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,s,o){let a=new Ql(this.currentPoint.clone(),new ve(e,t),new ve(n,i),new ve(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Os(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,s,o){let a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,s,o),this}absarc(e,t,n,i,s,o){return this.absellipse(e,t,n,n,i,s,o),this}ellipse(e,t,n,i,s,o,a,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,s,o,a,l),this}absellipse(e,t,n,i,s,o,a,l){let c=new Ua(e,t,n,i,s,o,a,l);if(this.curves.length>0){let u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Eo=class extends nc{constructor(e){super(e),this.uuid=Hr(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let n=0,i=this.holes.length;n<i;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(i.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){let i=this.holes[t];e.holes.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){let i=e.holes[t];this.holes.push(new nc().fromJSON(i))}return this}};function h1(r,e,t=2){let n=e&&e.length,i=n?e[0]*t:r.length,s=Qg(r,0,i,t,!0),o=[];if(!s||s.next===s.prev)return o;let a,l,c;if(n&&(s=g1(r,e,s,t)),r.length>80*t){a=r[0],l=r[1];let h=a,u=l;for(let f=t;f<i;f+=t){let d=r[f],m=r[f+1];d<a&&(a=d),m<l&&(l=m),d>h&&(h=d),m>u&&(u=m)}c=Math.max(h-a,u-l),c=c!==0?32767/c:0}return ic(s,o,t,a,l,c,0),o}function Qg(r,e,t,n,i){let s;if(i===A1(r,e,t,n)>0)for(let o=e;o<t;o+=n)s=dg(o/n|0,r[o],r[o+1],s);else for(let o=t-n;o>=e;o-=n)s=dg(o/n|0,r[o],r[o+1],s);return s&&Oa(s,s.next)&&(sc(s),s=s.next),s}function To(r,e){if(!r)return r;e||(e=r);let t=r,n;do if(n=!1,!t.steiner&&(Oa(t,t.next)||xn(t.prev,t,t.next)===0)){if(sc(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ic(r,e,t,n,i,s,o){if(!r)return;!o&&s&&b1(r,n,i,s);let a=r;for(;r.prev!==r.next;){let l=r.prev,c=r.next;if(s?f1(r,n,i,s):d1(r)){e.push(l.i,r.i,c.i),sc(r),r=c.next,a=c.next;continue}if(r=c,r===a){o?o===1?(r=p1(To(r),e),ic(r,e,t,n,i,s,2)):o===2&&m1(r,e,t,n,i,s):ic(To(r),e,t,n,i,s,1);break}}}function d1(r){let e=r.prev,t=r,n=r.next;if(xn(e,t,n)>=0)return!1;let i=e.x,s=t.x,o=n.x,a=e.y,l=t.y,c=n.y,h=Math.min(i,s,o),u=Math.min(a,l,c),f=Math.max(i,s,o),d=Math.max(a,l,c),m=n.next;for(;m!==e;){if(m.x>=h&&m.x<=f&&m.y>=u&&m.y<=d&&Pl(i,a,s,l,o,c,m.x,m.y)&&xn(m.prev,m,m.next)>=0)return!1;m=m.next}return!0}function f1(r,e,t,n){let i=r.prev,s=r,o=r.next;if(xn(i,s,o)>=0)return!1;let a=i.x,l=s.x,c=o.x,h=i.y,u=s.y,f=o.y,d=Math.min(a,l,c),m=Math.min(h,u,f),p=Math.max(a,l,c),_=Math.max(h,u,f),g=dp(d,m,e,t,n),y=dp(p,_,e,t,n),x=r.prevZ,v=r.nextZ;for(;x&&x.z>=g&&v&&v.z<=y;){if(x.x>=d&&x.x<=p&&x.y>=m&&x.y<=_&&x!==i&&x!==o&&Pl(a,h,l,u,c,f,x.x,x.y)&&xn(x.prev,x,x.next)>=0||(x=x.prevZ,v.x>=d&&v.x<=p&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&Pl(a,h,l,u,c,f,v.x,v.y)&&xn(v.prev,v,v.next)>=0))return!1;v=v.nextZ}for(;x&&x.z>=g;){if(x.x>=d&&x.x<=p&&x.y>=m&&x.y<=_&&x!==i&&x!==o&&Pl(a,h,l,u,c,f,x.x,x.y)&&xn(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;v&&v.z<=y;){if(v.x>=d&&v.x<=p&&v.y>=m&&v.y<=_&&v!==i&&v!==o&&Pl(a,h,l,u,c,f,v.x,v.y)&&xn(v.prev,v,v.next)>=0)return!1;v=v.nextZ}return!0}function p1(r,e){let t=r;do{let n=t.prev,i=t.next.next;!Oa(n,i)&&t_(n,t,t.next,i)&&rc(n,i)&&rc(i,n)&&(e.push(n.i,t.i,i.i),sc(t),sc(t.next),t=r=i),t=t.next}while(t!==r);return To(t)}function m1(r,e,t,n,i,s){let o=r;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&T1(o,a)){let l=n_(o,a);o=To(o,o.next),l=To(l,l.next),ic(o,e,t,n,i,s,0),ic(l,e,t,n,i,s,0);return}a=a.next}o=o.next}while(o!==r)}function g1(r,e,t,n){let i=[];for(let s=0,o=e.length;s<o;s++){let a=e[s]*n,l=s<o-1?e[s+1]*n:r.length,c=Qg(r,a,l,n,!1);c===c.next&&(c.steiner=!0),i.push(E1(c))}i.sort(_1);for(let s=0;s<i.length;s++)t=v1(i[s],t);return t}function _1(r,e){let t=r.x-e.x;if(t===0&&(t=r.y-e.y,t===0)){let n=(r.next.y-r.y)/(r.next.x-r.x),i=(e.next.y-e.y)/(e.next.x-e.x);t=n-i}return t}function v1(r,e){let t=x1(r,e);if(!t)return e;let n=n_(t,r);return To(n,n.next),To(t,t.next)}function x1(r,e){let t=e,n=r.x,i=r.y,s=-1/0,o;if(Oa(r,t))return t;do{if(Oa(r,t.next))return t.next;if(i<=t.y&&i>=t.next.y&&t.next.y!==t.y){let u=t.x+(i-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=n&&u>s&&(s=u,o=t.x<t.next.x?t:t.next,u===n))return o}t=t.next}while(t!==e);if(!o)return null;let a=o,l=o.x,c=o.y,h=1/0;t=o;do{if(n>=t.x&&t.x>=l&&n!==t.x&&e_(i<c?n:s,i,l,c,i<c?s:n,i,t.x,t.y)){let u=Math.abs(i-t.y)/(n-t.x);rc(t,r)&&(u<h||u===h&&(t.x>o.x||t.x===o.x&&y1(o,t)))&&(o=t,h=u)}t=t.next}while(t!==a);return o}function y1(r,e){return xn(r.prev,r,e.prev)<0&&xn(e.next,r,r.next)<0}function b1(r,e,t,n){let i=r;do i.z===0&&(i.z=dp(i.x,i.y,e,t,n)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==r);i.prevZ.nextZ=null,i.prevZ=null,M1(i)}function M1(r){let e,t=1;do{let n=r,i;r=null;let s=null;for(e=0;n;){e++;let o=n,a=0;for(let c=0;c<t&&(a++,o=o.nextZ,!!o);c++);let l=t;for(;a>0||l>0&&o;)a!==0&&(l===0||!o||n.z<=o.z)?(i=n,n=n.nextZ,a--):(i=o,o=o.nextZ,l--),s?s.nextZ=i:r=i,i.prevZ=s,s=i;n=o}s.nextZ=null,t*=2}while(e>1);return r}function dp(r,e,t,n,i){return r=(r-t)*i|0,e=(e-n)*i|0,r=(r|r<<8)&16711935,r=(r|r<<4)&252645135,r=(r|r<<2)&858993459,r=(r|r<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,r|e<<1}function E1(r){let e=r,t=r;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==r);return t}function e_(r,e,t,n,i,s,o,a){return(i-o)*(e-a)>=(r-o)*(s-a)&&(r-o)*(n-a)>=(t-o)*(e-a)&&(t-o)*(s-a)>=(i-o)*(n-a)}function Pl(r,e,t,n,i,s,o,a){return!(r===o&&e===a)&&e_(r,e,t,n,i,s,o,a)}function T1(r,e){return r.next.i!==e.i&&r.prev.i!==e.i&&!S1(r,e)&&(rc(r,e)&&rc(e,r)&&w1(r,e)&&(xn(r.prev,r,e.prev)||xn(r,e.prev,e))||Oa(r,e)&&xn(r.prev,r,r.next)>0&&xn(e.prev,e,e.next)>0)}function xn(r,e,t){return(e.y-r.y)*(t.x-e.x)-(e.x-r.x)*(t.y-e.y)}function Oa(r,e){return r.x===e.x&&r.y===e.y}function t_(r,e,t,n){let i=Xu(xn(r,e,t)),s=Xu(xn(r,e,n)),o=Xu(xn(t,n,r)),a=Xu(xn(t,n,e));return!!(i!==s&&o!==a||i===0&&Wu(r,t,e)||s===0&&Wu(r,n,e)||o===0&&Wu(t,r,n)||a===0&&Wu(t,e,n))}function Wu(r,e,t){return e.x<=Math.max(r.x,t.x)&&e.x>=Math.min(r.x,t.x)&&e.y<=Math.max(r.y,t.y)&&e.y>=Math.min(r.y,t.y)}function Xu(r){return r>0?1:r<0?-1:0}function S1(r,e){let t=r;do{if(t.i!==r.i&&t.next.i!==r.i&&t.i!==e.i&&t.next.i!==e.i&&t_(t,t.next,r,e))return!0;t=t.next}while(t!==r);return!1}function rc(r,e){return xn(r.prev,r,r.next)<0?xn(r,e,r.next)>=0&&xn(r,r.prev,e)>=0:xn(r,e,r.prev)<0||xn(r,r.next,e)<0}function w1(r,e){let t=r,n=!1,i=(r.x+e.x)/2,s=(r.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&i<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==r);return n}function n_(r,e){let t=fp(r.i,r.x,r.y),n=fp(e.i,e.x,e.y),i=r.next,s=e.prev;return r.next=e,e.prev=r,t.next=i,i.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function dg(r,e,t,n){let i=fp(r,e,t);return n?(i.next=n.next,i.prev=n,n.next.prev=i,n.next=i):(i.prev=i,i.next=i),i}function sc(r){r.next.prev=r.prev,r.prev.next=r.next,r.prevZ&&(r.prevZ.nextZ=r.nextZ),r.nextZ&&(r.nextZ.prevZ=r.prevZ)}function fp(r,e,t){return{i:r,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function A1(r,e,t,n){let i=0;for(let s=e,o=t-n;s<t;s+=n)i+=(r[o]-r[s])*(r[s+1]+r[o+1]),o=s;return i}var pp=class{static triangulate(e,t,n=2){return h1(e,t,n)}},wa=class r{static area(e){let t=e.length,n=0;for(let i=t-1,s=0;s<t;i=s++)n+=e[i].x*e[s].y-e[s].x*e[i].y;return n*.5}static isClockWise(e){return r.area(e)<0}static triangulateShape(e,t){let n=[],i=[],s=[];fg(e),pg(n,e);let o=e.length;t.forEach(fg);for(let l=0;l<t.length;l++)i.push(o),o+=t[l].length,pg(n,t[l]);let a=pp.triangulate(n,i);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}};function fg(r){let e=r.length;e>2&&r[e-1].equals(r[0])&&r.pop()}function pg(r,e){for(let t=0;t<e.length;t++)r.push(e[t].x),r.push(e[t].y)}var So=class r extends jl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}};var oc=class r extends jl{constructor(e=1,t=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new r(e.radius,e.detail)}},On=class r extends vt{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};let s=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,f=t/l,d=[],m=[],p=[],_=[];for(let g=0;g<h;g++){let y=g*f-o;for(let x=0;x<c;x++){let v=x*u-s;m.push(v,-y,0),p.push(0,0,1),_.push(x/a),_.push(1-g/l)}}for(let g=0;g<l;g++)for(let y=0;y<a;y++){let x=y+c*g,v=y+c*(g+1),M=y+1+c*(g+1),T=y+1+c*g;d.push(x,v,T),d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.width,e.height,e.widthSegments,e.heightSegments)}};var ac=class r extends vt{constructor(e=new Eo([new ve(0,.5),new ve(-.5,-.5),new ve(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};let n=[],i=[],s=[],o=[],a=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let h=0;h<e.length;h++)c(e[h]),this.addGroup(a,l,h),a+=l,l=0;this.setIndex(n),this.setAttribute("position",new lt(i,3)),this.setAttribute("normal",new lt(s,3)),this.setAttribute("uv",new lt(o,2));function c(h){let u=i.length/3,f=h.extractPoints(t),d=f.shape,m=f.holes;wa.isClockWise(d)===!1&&(d=d.reverse());for(let _=0,g=m.length;_<g;_++){let y=m[_];wa.isClockWise(y)===!0&&(m[_]=y.reverse())}let p=wa.triangulateShape(d,m);for(let _=0,g=m.length;_<g;_++){let y=m[_];d=d.concat(y)}for(let _=0,g=d.length;_<g;_++){let y=d[_];i.push(y.x,y.y,0),s.push(0,0,1),o.push(y.x,y.y)}for(let _=0,g=p.length;_<g;_++){let y=p[_],x=y[0]+u,v=y[1]+u,M=y[2]+u;n.push(x,v,M),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes;return R1(t,e)}static fromJSON(e,t){let n=[];for(let i=0,s=e.shapes.length;i<s;i++){let o=t[e.shapes[i]];n.push(o)}return new r(n,e.curveSegments)}};function R1(r,e){if(e.shapes=[],Array.isArray(r))for(let t=0,n=r.length;t<n;t++){let i=r[t];e.shapes.push(i.uuid)}else e.shapes.push(r.uuid);return e}var Xt=class r extends vt{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,h=[],u=new P,f=new P,d=[],m=[],p=[],_=[];for(let g=0;g<=n;g++){let y=[],x=g/n,v=0;g===0&&o===0?v=.5/t:g===n&&l===Math.PI&&(v=-.5/t);for(let M=0;M<=t;M++){let T=M/t;u.x=-e*Math.cos(i+T*s)*Math.sin(o+x*a),u.y=e*Math.cos(o+x*a),u.z=e*Math.sin(i+T*s)*Math.sin(o+x*a),m.push(u.x,u.y,u.z),f.copy(u).normalize(),p.push(f.x,f.y,f.z),_.push(T+v,1-x),y.push(c++)}h.push(y)}for(let g=0;g<n;g++)for(let y=0;y<t;y++){let x=h[g][y+1],v=h[g][y],M=h[g+1][y],T=h[g+1][y+1];(g!==0||o>0)&&d.push(x,v,T),(g!==n-1||l<Math.PI)&&d.push(v,M,T)}this.setIndex(d),this.setAttribute("position",new lt(m,3)),this.setAttribute("normal",new lt(p,3)),this.setAttribute("uv",new lt(_,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var kn=class r extends vt{constructor(e=1,t=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],h=new P,u=new P,f=new P;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let p=m/i*s,_=d/n*Math.PI*2;u.x=(e+t*Math.cos(_))*Math.cos(p),u.y=(e+t*Math.cos(_))*Math.sin(p),u.z=t*Math.sin(_),a.push(u.x,u.y,u.z),h.x=e*Math.cos(p),h.y=e*Math.sin(p),f.subVectors(u,h).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let p=(i+1)*d+m-1,_=(i+1)*(d-1)+m-1,g=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(p,_,y),o.push(_,g,y)}this.setIndex(o),this.setAttribute("position",new lt(a,3)),this.setAttribute("normal",new lt(l,3)),this.setAttribute("uv",new lt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}},lc=class r extends vt{constructor(e=1,t=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],h=[],u=new P,f=new P,d=new P,m=new P,p=new P,_=new P,g=new P;for(let x=0;x<=n;++x){let v=x/n*s*Math.PI*2;y(v,s,o,e,d),y(v+.01,s,o,e,m),_.subVectors(m,d),g.addVectors(m,d),p.crossVectors(_,g),g.crossVectors(p,_),p.normalize(),g.normalize();for(let M=0;M<=i;++M){let T=M/i*Math.PI*2,S=-t*Math.cos(T),A=t*Math.sin(T);u.x=d.x+(S*g.x+A*p.x),u.y=d.y+(S*g.y+A*p.y),u.z=d.z+(S*g.z+A*p.z),l.push(u.x,u.y,u.z),f.subVectors(u,d).normalize(),c.push(f.x,f.y,f.z),h.push(x/n),h.push(M/i)}}for(let x=1;x<=n;x++)for(let v=1;v<=i;v++){let M=(i+1)*(x-1)+(v-1),T=(i+1)*x+(v-1),S=(i+1)*x+v,A=(i+1)*(x-1)+v;a.push(M,T,A),a.push(T,S,A)}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2));function y(x,v,M,T,S){let A=Math.cos(x),b=Math.sin(x),E=M/v*x,L=Math.cos(E);S.x=T*(2+L)*.5*A,S.y=T*(2+L)*b*.5,S.z=T*Math.sin(E)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new r(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}},oi=class r extends vt{constructor(e=new ds(new P(-1,-1,0),new P(-1,1,0),new P(1,1,0)),t=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:i,closed:s};let o=e.computeFrenetFrames(t,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new P,l=new P,c=new ve,h=new P,u=[],f=[],d=[],m=[];p(),this.setIndex(m),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(f,3)),this.setAttribute("uv",new lt(d,2));function p(){for(let x=0;x<t;x++)_(x);_(s===!1?t:0),y(),g()}function _(x){h=e.getPointAt(x/t,h);let v=o.normals[x],M=o.binormals[x];for(let T=0;T<=i;T++){let S=T/i*Math.PI*2,A=Math.sin(S),b=-Math.cos(S);l.x=b*v.x+A*M.x,l.y=b*v.y+A*M.y,l.z=b*v.z+A*M.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=h.x+n*l.x,a.y=h.y+n*l.y,a.z=h.z+n*l.z,u.push(a.x,a.y,a.z)}}function g(){for(let x=1;x<=t;x++)for(let v=1;v<=i;v++){let M=(i+1)*(x-1)+(v-1),T=(i+1)*x+(v-1),S=(i+1)*x+v,A=(i+1)*(x-1)+v;m.push(M,T,A),m.push(T,S,A)}}function y(){for(let x=0;x<=t;x++)for(let v=0;v<=i;v++)c.x=x/t,c.y=v/i,d.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new r(new hp[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};var cc=class extends zi{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Me(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}},ka=class extends Ot{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends zi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Me(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},cr=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ve(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return St(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Me(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Me(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Me(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ur=class extends zi{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Me(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Me(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bd,this.normalScale=new ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Xn,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},hh=class extends zi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=zg,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},dh=class extends zi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function qu(r,e){return!r||r.constructor===e?r:typeof e.BYTES_PER_ELEMENT=="number"?new e(r):Array.prototype.slice.call(r)}var wo=class{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,i=t[n],s=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=s)){let a=t[1];e<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=t[--n-1],e>=s)break e}o=n,n=0;break t}break n}for(;n<o;){let a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=e*i;for(let o=0;o!==i;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},fh=class extends wo{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:op,endingEnd:op}}intervalChanged_(e,t,n){let i=this.parameterPositions,s=e-2,o=e+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case ap:s=e,a=2*t-n;break;case lp:s=i.length-2,a=t+i[s]-i[s+1];break;default:s=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case ap:o=e,l=2*n-t;break;case lp:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=s*h,this._offsetNext=o*h}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-t)/(i-t),p=m*m,_=p*m,g=-f*_+2*f*p-f*m,y=(1+f)*_+(-1.5-2*f)*p+(-.5+f)*m+1,x=(-1-d)*_+(1.5+d)*p+.5*m,v=d*_-d*p;for(let M=0;M!==a;++M)s[M]=g*o[h+M]+y*o[c+M]+x*o[l+M]+v*o[u+M];return s}},ph=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let f=0;f!==a;++f)s[f]=o[c+f]*u+o[l+f]*h;return s}},mh=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}},Gi=class{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=qu(t,this.TimeBufferType),this.values=qu(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:qu(e.times,Array),values:qu(e.values,Array)};let i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new mh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new ph(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new fh(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Nl:t=this.InterpolantFactoryMethodDiscrete;break;case Ku:t=this.InterpolantFactoryMethodLinear;break;case Yu:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return ht("KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Nl;case this.InterpolantFactoryMethodLinear:return Ku;case this.InterpolantFactoryMethodSmooth:return Yu}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(gt("KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,i=this.values,s=n.length;s===0&&(gt("KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){gt("KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){gt("KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&xy(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){gt("KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===Yu,s=e.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{let u=a*n,f=u-n,d=u+n;for(let m=0;m!==n;++m){let p=t[u+m];if(p!==t[f+m]||p!==t[d+m]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];let u=a*n,f=o*n;for(let d=0;d!==n;++d)t[f+d]=t[u+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}};Gi.prototype.ValueTypeName="";Gi.prototype.TimeBufferType=Float32Array;Gi.prototype.ValueBufferType=Float32Array;Gi.prototype.DefaultInterpolation=Ku;var ks=class extends Gi{constructor(e,t,n){super(e,t,n)}};ks.prototype.ValueTypeName="bool";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Nl;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;var gh=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};gh.prototype.ValueTypeName="color";var _h=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};_h.prototype.ValueTypeName="number";var vh=class extends wo{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t),c=e*a;for(let h=c+a;c!==h;c+=4)_n.slerpFlat(s,0,o,c-a,o,c,l);return s}},uc=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}InterpolantFactoryMethodLinear(e){return new vh(this.times,this.values,this.getValueSize(),e)}};uc.prototype.ValueTypeName="quaternion";uc.prototype.InterpolantFactoryMethodSmooth=void 0;var Bs=class extends Gi{constructor(e,t,n){super(e,t,n)}};Bs.prototype.ValueTypeName="string";Bs.prototype.ValueBufferType=Array;Bs.prototype.DefaultInterpolation=Nl;Bs.prototype.InterpolantFactoryMethodLinear=void 0;Bs.prototype.InterpolantFactoryMethodSmooth=void 0;var xh=class extends Gi{constructor(e,t,n,i){super(e,t,n,i)}};xh.prototype.ValueTypeName="vector";var yh=class{constructor(e,t,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){a++,s===!1&&i.onStart!==void 0&&i.onStart(h,o,a),s=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){let u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){let d=c[u],m=c[u+1];if(d.global&&(d.lastIndex=0),d.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},i_=new yh,bh=class{constructor(e){this.manager=e!==void 0?e:i_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(i,s){n.load(e,i,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};bh.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ao=class extends yn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Me(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Pr=class extends Ao{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Me(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},sp=new Pt,mg=new P,gg=new P,Mh=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ve(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new Pt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Fa,this._frameExtents=new ve(1,1),this._viewportCount=1,this._viewports=[new tn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;mg.setFromMatrixPosition(e.matrixWorld),t.position.copy(mg),gg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(gg),t.updateMatrixWorld(),sp.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(sp,t.coordinateSystem,t.reversedDepth),t.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(sp)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var mp=class extends Mh{constructor(){super(new Ht(90,1,.5,500)),this.isPointLightShadow=!0}},Ii=class extends Ao{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new mp}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},Li=class extends Wl{constructor(e=-1,t=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},gp=class extends Mh{constructor(){super(new Li(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},hn=class extends Ao{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(yn.DEFAULT_UP),this.updateMatrix(),this.target=new yn,this.shadow=new gp}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}},Wi=class extends Ao{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var Eh=class extends Ht{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},hc=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=performance.now();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};var Dp="\\[\\]\\.:\\/",C1=new RegExp("["+Dp+"]","g"),Fp="[^"+Dp+"]",P1="[^"+Dp.replace("\\.","")+"]",I1=/((?:WC+[\/:])*)/.source.replace("WC",Fp),L1=/(WCOD+)?/.source.replace("WCOD",P1),D1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Fp),F1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Fp),N1=new RegExp("^"+I1+L1+D1+F1+"$"),U1=["material","materials","bones","map"],_p=class{constructor(e,t,n){let i=n||mn.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},mn=class r{constructor(e,t,n){this.path=t,this.parsedPath=n||r.parseTrackName(t),this.node=r.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new r.Composite(e,t,n):new r(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(C1,"")}static parseTrackName(e){let t=N1.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);U1.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===t||a.uuid===t)return a;let l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,i=t.propertyName,s=t.propertyIndex;if(e||(e=r.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){ht("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){gt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){gt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){gt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){gt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){gt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){gt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let o=e[i];if(o===void 0){let c=t.nodeName;gt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?a=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){gt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};mn.Composite=_p;mn.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};mn.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};mn.prototype.GetterByBindingType=[mn.prototype._getValue_direct,mn.prototype._getValue_array,mn.prototype._getValue_arrayElement,mn.prototype._getValue_toArray];mn.prototype.SetterByBindingTypeAndVersioning=[[mn.prototype._setValue_direct,mn.prototype._setValue_direct_setNeedsUpdate,mn.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_array,mn.prototype._setValue_array_setNeedsUpdate,mn.prototype._setValue_array_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_arrayElement,mn.prototype._setValue_arrayElement_setNeedsUpdate,mn.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[mn.prototype._setValue_fromArray,mn.prototype._setValue_fromArray_setNeedsUpdate,mn.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var AA=new Float32Array(1);var _g=new ve,dc=class{constructor(e=new ve(1/0,1/0),t=new ve(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=_g.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,_g).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}};function Np(r,e,t,n){let i=O1(n);switch(t){case wp:return r*e;case Bh:return r*e/i.components*i.byteLength;case Hh:return r*e/i.components*i.byteLength;case Co:return r*e*2/i.components*i.byteLength;case zh:return r*e*2/i.components*i.byteLength;case Ap:return r*e*3/i.components*i.byteLength;case fr:return r*e*4/i.components*i.byteLength;case Vh:return r*e*4/i.components*i.byteLength;case Mc:case Ec:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Tc:case Sc:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Wh:case qh:return Math.max(r,16)*Math.max(e,8)/4;case Gh:case Xh:return Math.max(r,8)*Math.max(e,8)/2;case Yh:case $h:case Jh:case Kh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Zh:case jh:case Qh:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case ed:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case td:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case nd:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case id:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case rd:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case sd:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case od:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case ad:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case ld:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case cd:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case ud:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case hd:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case dd:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case fd:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case pd:case md:case gd:return Math.ceil(r/4)*Math.ceil(e/4)*16;case _d:case vd:return Math.ceil(r/4)*Math.ceil(e/4)*8;case xd:case yd:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function O1(r){switch(r){case Di:case Mp:return{byteLength:1,components:1};case Ha:case Ep:case wn:return{byteLength:2,components:1};case Oh:case kh:return{byteLength:2,components:4};case Lr:case Uh:case dr:return{byteLength:4,components:1};case Tp:case Sp:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?ht("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function w_(){let r=null,e=!1,t=null,n=null;function i(s,o){t(s,o),n=r.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function B1(r){let e=new WeakMap;function t(a,l){let c=a.array,h=a.usage,u=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,h),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){let h=l.array,u=l.updateRanges;if(r.bindBuffer(c,a),u.length===0)r.bufferSubData(c,0,h);else{u.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<u.length;d++){let m=u[f],p=u[d];p.start<=m.start+m.count+1?m.count=Math.max(m.count,p.start+p.count-m.start):(++f,u[f]=p)}u.length=f+1;for(let d=0,m=u.length;d<m;d++){let p=u[d];r.bufferSubData(c,p.start*h.BYTES_PER_ELEMENT,h,p.start,p.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=e.get(a);l&&(r.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var H1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,z1=`#ifdef USE_ALPHAHASH
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
#endif`,V1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,G1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,W1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,X1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,q1=`#ifdef USE_AOMAP
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
#endif`,Y1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,$1=`#ifdef USE_BATCHING
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
#endif`,Z1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,J1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,K1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,j1=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Q1=`#ifdef USE_IRIDESCENCE
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
#endif`,eb=`#ifdef USE_BUMPMAP
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
#endif`,tb=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,nb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ib=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,rb=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,sb=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,ob=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ab=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,lb=`#if defined( USE_COLOR_ALPHA )
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
#endif`,cb=`#define PI 3.141592653589793
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
} // validated`,ub=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,hb=`vec3 transformedNormal = objectNormal;
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
#endif`,db=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,pb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,mb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,gb="gl_FragColor = linearToOutputTexel( gl_FragColor );",_b=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,vb=`#ifdef USE_ENVMAP
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
#endif`,xb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,yb=`#ifdef USE_ENVMAP
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
#endif`,bb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Mb=`#ifdef USE_ENVMAP
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
#endif`,Eb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Tb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Sb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ab=`#ifdef USE_GRADIENTMAP
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
}`,Rb=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Cb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Pb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ib=`uniform bool receiveShadow;
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
#endif`,Lb=`#ifdef USE_ENVMAP
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
#endif`,Db=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Nb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ub=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Ob=`PhysicalMaterial material;
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
#endif`,kb=`uniform sampler2D dfgLUT;
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
}`,Bb=`
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
#endif`,Hb=`#if defined( RE_IndirectDiffuse )
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
#endif`,zb=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Vb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Gb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Wb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Xb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,qb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Yb=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,$b=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Zb=`#if defined( USE_POINTS_UV )
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
#endif`,Jb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Kb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,jb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Qb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
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
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
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
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,dM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,fM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,_M=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,xM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,TM=`float getShadowMask() {
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
}`,SM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,wM=`#ifdef USE_SKINNING
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
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RM=`#ifdef USE_SKINNING
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
#endif`,CM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,PM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,LM=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,DM=`#ifdef USE_TRANSMISSION
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
#endif`,FM=`#ifdef USE_TRANSMISSION
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
#endif`,NM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,HM=`uniform sampler2D t2D;
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
}`,zM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,VM=`#ifdef ENVMAP_TYPE_CUBE
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
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
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
}`,qM=`#if DEPTH_PACKING == 3200
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
}`,YM=`#define DISTANCE
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
}`,$M=`#define DISTANCE
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
}`,ZM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,JM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,KM=`uniform float scale;
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
}`,jM=`uniform vec3 diffuse;
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
}`,QM=`#include <common>
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
}`,eE=`uniform vec3 diffuse;
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
}`,tE=`#define LAMBERT
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
}`,nE=`#define LAMBERT
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
}`,iE=`#define MATCAP
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
}`,rE=`#define MATCAP
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
}`,sE=`#define NORMAL
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
}`,oE=`#define NORMAL
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
}`,aE=`#define PHONG
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
}`,lE=`#define PHONG
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
}`,cE=`#define STANDARD
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
}`,uE=`#define STANDARD
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
}`,hE=`#define TOON
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
}`,dE=`#define TOON
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
}`,fE=`uniform float size;
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
}`,pE=`uniform vec3 diffuse;
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
}`,mE=`#include <common>
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
}`,gE=`uniform vec3 color;
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
}`,_E=`uniform float rotation;
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
}`,vE=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:H1,alphahash_pars_fragment:z1,alphamap_fragment:V1,alphamap_pars_fragment:G1,alphatest_fragment:W1,alphatest_pars_fragment:X1,aomap_fragment:q1,aomap_pars_fragment:Y1,batching_pars_vertex:$1,batching_vertex:Z1,begin_vertex:J1,beginnormal_vertex:K1,bsdfs:j1,iridescence_fragment:Q1,bumpmap_pars_fragment:eb,clipping_planes_fragment:tb,clipping_planes_pars_fragment:nb,clipping_planes_pars_vertex:ib,clipping_planes_vertex:rb,color_fragment:sb,color_pars_fragment:ob,color_pars_vertex:ab,color_vertex:lb,common:cb,cube_uv_reflection_fragment:ub,defaultnormal_vertex:hb,displacementmap_pars_vertex:db,displacementmap_vertex:fb,emissivemap_fragment:pb,emissivemap_pars_fragment:mb,colorspace_fragment:gb,colorspace_pars_fragment:_b,envmap_fragment:vb,envmap_common_pars_fragment:xb,envmap_pars_fragment:yb,envmap_pars_vertex:bb,envmap_physical_pars_fragment:Lb,envmap_vertex:Mb,fog_vertex:Eb,fog_pars_vertex:Tb,fog_fragment:Sb,fog_pars_fragment:wb,gradientmap_pars_fragment:Ab,lightmap_pars_fragment:Rb,lights_lambert_fragment:Cb,lights_lambert_pars_fragment:Pb,lights_pars_begin:Ib,lights_toon_fragment:Db,lights_toon_pars_fragment:Fb,lights_phong_fragment:Nb,lights_phong_pars_fragment:Ub,lights_physical_fragment:Ob,lights_physical_pars_fragment:kb,lights_fragment_begin:Bb,lights_fragment_maps:Hb,lights_fragment_end:zb,logdepthbuf_fragment:Vb,logdepthbuf_pars_fragment:Gb,logdepthbuf_pars_vertex:Wb,logdepthbuf_vertex:Xb,map_fragment:qb,map_pars_fragment:Yb,map_particle_fragment:$b,map_particle_pars_fragment:Zb,metalnessmap_fragment:Jb,metalnessmap_pars_fragment:Kb,morphinstance_vertex:jb,morphcolor_vertex:Qb,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:oM,normal_vertex:aM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:hM,iridescence_pars_fragment:dM,opaque_fragment:fM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:_M,dithering_pars_fragment:vM,roughnessmap_fragment:xM,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:bM,shadowmap_pars_vertex:MM,shadowmap_vertex:EM,shadowmask_pars_fragment:TM,skinbase_vertex:SM,skinning_pars_vertex:wM,skinning_vertex:AM,skinnormal_vertex:RM,specularmap_fragment:CM,specularmap_pars_fragment:PM,tonemapping_fragment:IM,tonemapping_pars_fragment:LM,transmission_fragment:DM,transmission_pars_fragment:FM,uv_pars_fragment:NM,uv_pars_vertex:UM,uv_vertex:OM,worldpos_vertex:kM,background_vert:BM,background_frag:HM,backgroundCube_vert:zM,backgroundCube_frag:VM,cube_vert:GM,cube_frag:WM,depth_vert:XM,depth_frag:qM,distance_vert:YM,distance_frag:$M,equirect_vert:ZM,equirect_frag:JM,linedashed_vert:KM,linedashed_frag:jM,meshbasic_vert:QM,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:sE,meshnormal_frag:oE,meshphong_vert:aE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:hE,meshtoon_frag:dE,points_vert:fE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:_E,sprite_frag:vE},Ve={common:{diffuse:{value:new Me(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new bt}},envmap:{envMap:{value:null},envMapRotation:{value:new bt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new bt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new bt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new bt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new bt},normalScale:{value:new ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new bt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new bt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new bt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new bt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Me(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Me(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0},uvTransform:{value:new bt}},sprite:{diffuse:{value:new Me(16777215)},opacity:{value:1},center:{value:new ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new bt},alphaMap:{value:null},alphaMapTransform:{value:new bt},alphaTest:{value:0}}},Xr={basic:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:ai([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)},specular:{value:new Me(1118481)},shininess:{value:30}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:ai([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:ai([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Me(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:ai([Ve.points,Ve.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:ai([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:ai([Ve.common,Ve.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:ai([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:ai([Ve.sprite,Ve.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new bt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new bt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:ai([Ve.common,Ve.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:ai([Ve.lights,Ve.fog,{color:{value:new Me(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Xr.physical={uniforms:ai([Xr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new bt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new bt},clearcoatNormalScale:{value:new ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new bt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new bt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new bt},sheen:{value:0},sheenColor:{value:new Me(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new bt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new bt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new bt},transmissionSamplerSize:{value:new ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new bt},attenuationDistance:{value:0},attenuationColor:{value:new Me(0)},specularColor:{value:new Me(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new bt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new bt},anisotropyVector:{value:new ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new bt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};var Td={r:0,b:0,g:0},Lo=new Xn,xE=new Pt;function yE(r,e,t,n,i,s,o){let a=new Me(0),l=s===!0?0:1,c,h,u=null,f=0,d=null;function m(x){let v=x.isScene===!0?x.background:null;return v&&v.isTexture&&(v=(x.backgroundBlurriness>0?t:e).get(v)),v}function p(x){let v=!1,M=m(x);M===null?g(a,l):M&&M.isColor&&(g(M,1),v=!0);let T=r.xr.getEnvironmentBlendMode();T==="additive"?n.buffers.color.setClear(0,0,0,1,o):T==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||v)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(x,v){let M=m(v);M&&(M.isCubeTexture||M.mapping===yc)?(h===void 0&&(h=new Ue(new Wt(1,1,1),new Ot({name:"BackgroundCubeMaterial",uniforms:Io(Xr.backgroundCube.uniforms),vertexShader:Xr.backgroundCube.vertexShader,fragmentShader:Xr.backgroundCube.fragmentShader,side:In,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(T,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),Lo.copy(v.backgroundRotation),Lo.x*=-1,Lo.y*=-1,Lo.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Lo.y*=-1,Lo.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=v.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(xE.makeRotationFromEuler(Lo)),h.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Vt,(u!==M||f!==M.version||d!==r.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ue(new On(2,2),new Ot({name:"BackgroundMaterial",uniforms:Io(Xr.background.uniforms),vertexShader:Xr.background.vertexShader,fragmentShader:Xr.background.fragmentShader,side:cs,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=v.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Vt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,d=r.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function g(x,v){x.getRGB(Td,Ip(r)),n.buffers.color.setClear(Td.r,Td.g,Td.b,v,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(x,v=1){a.set(x),l=v,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,g(a,l)},render:p,addToRenderList:_,dispose:y}}function bE(r,e){let t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(E,L,R,D,k){let G=!1,z=u(D,R,L);s!==z&&(s=z,c(s.object)),G=d(E,D,R,k),G&&m(E,D,R,k),k!==null&&e.update(k,r.ELEMENT_ARRAY_BUFFER),(G||o)&&(o=!1,v(E,L,R,D),k!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(k).buffer))}function l(){return r.createVertexArray()}function c(E){return r.bindVertexArray(E)}function h(E){return r.deleteVertexArray(E)}function u(E,L,R){let D=R.wireframe===!0,k=n[E.id];k===void 0&&(k={},n[E.id]=k);let G=k[L.id];G===void 0&&(G={},k[L.id]=G);let z=G[D];return z===void 0&&(z=f(l()),G[D]=z),z}function f(E){let L=[],R=[],D=[];for(let k=0;k<t;k++)L[k]=0,R[k]=0,D[k]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:R,attributeDivisors:D,object:E,attributes:{},index:null}}function d(E,L,R,D){let k=s.attributes,G=L.attributes,z=0,B=R.getAttributes();for(let K in B)if(B[K].location>=0){let N=k[K],ae=G[K];if(ae===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(ae=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(ae=E.instanceColor)),N===void 0||N.attribute!==ae||ae&&N.data!==ae.data)return!0;z++}return s.attributesNum!==z||s.index!==D}function m(E,L,R,D){let k={},G=L.attributes,z=0,B=R.getAttributes();for(let K in B)if(B[K].location>=0){let N=G[K];N===void 0&&(K==="instanceMatrix"&&E.instanceMatrix&&(N=E.instanceMatrix),K==="instanceColor"&&E.instanceColor&&(N=E.instanceColor));let ae={};ae.attribute=N,N&&N.data&&(ae.data=N.data),k[K]=ae,z++}s.attributes=k,s.attributesNum=z,s.index=D}function p(){let E=s.newAttributes;for(let L=0,R=E.length;L<R;L++)E[L]=0}function _(E){g(E,0)}function g(E,L){let R=s.newAttributes,D=s.enabledAttributes,k=s.attributeDivisors;R[E]=1,D[E]===0&&(r.enableVertexAttribArray(E),D[E]=1),k[E]!==L&&(r.vertexAttribDivisor(E,L),k[E]=L)}function y(){let E=s.newAttributes,L=s.enabledAttributes;for(let R=0,D=L.length;R<D;R++)L[R]!==E[R]&&(r.disableVertexAttribArray(R),L[R]=0)}function x(E,L,R,D,k,G,z){z===!0?r.vertexAttribIPointer(E,L,R,k,G):r.vertexAttribPointer(E,L,R,D,k,G)}function v(E,L,R,D){p();let k=D.attributes,G=R.getAttributes(),z=L.defaultAttributeValues;for(let B in G){let K=G[B];if(K.location>=0){let se=k[B];if(se===void 0&&(B==="instanceMatrix"&&E.instanceMatrix&&(se=E.instanceMatrix),B==="instanceColor"&&E.instanceColor&&(se=E.instanceColor)),se!==void 0){let N=se.normalized,ae=se.itemSize,Be=e.get(se);if(Be===void 0)continue;let He=Be.buffer,Ye=Be.type,it=Be.bytesPerElement,ie=Ye===r.INT||Ye===r.UNSIGNED_INT||se.gpuType===Uh;if(se.isInterleavedBufferAttribute){let re=se.data,ye=re.stride,Oe=se.offset;if(re.isInstancedInterleavedBuffer){for(let Ce=0;Ce<K.locationSize;Ce++)g(K.location+Ce,re.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let Ce=0;Ce<K.locationSize;Ce++)_(K.location+Ce);r.bindBuffer(r.ARRAY_BUFFER,He);for(let Ce=0;Ce<K.locationSize;Ce++)x(K.location+Ce,ae/K.locationSize,Ye,N,ye*it,(Oe+ae/K.locationSize*Ce)*it,ie)}else{if(se.isInstancedBufferAttribute){for(let re=0;re<K.locationSize;re++)g(K.location+re,se.meshPerAttribute);E.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=se.meshPerAttribute*se.count)}else for(let re=0;re<K.locationSize;re++)_(K.location+re);r.bindBuffer(r.ARRAY_BUFFER,He);for(let re=0;re<K.locationSize;re++)x(K.location+re,ae/K.locationSize,Ye,N,ae*it,ae/K.locationSize*re*it,ie)}}else if(z!==void 0){let N=z[B];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(K.location,N);break;case 3:r.vertexAttrib3fv(K.location,N);break;case 4:r.vertexAttrib4fv(K.location,N);break;default:r.vertexAttrib1fv(K.location,N)}}}}y()}function M(){A();for(let E in n){let L=n[E];for(let R in L){let D=L[R];for(let k in D)h(D[k].object),delete D[k];delete L[R]}delete n[E]}}function T(E){if(n[E.id]===void 0)return;let L=n[E.id];for(let R in L){let D=L[R];for(let k in D)h(D[k].object),delete D[k];delete L[R]}delete n[E.id]}function S(E){for(let L in n){let R=n[L];if(R[E.id]===void 0)continue;let D=R[E.id];for(let k in D)h(D[k].object),delete D[k];delete R[E.id]}}function A(){b(),o=!0,s!==i&&(s=i,c(s.object))}function b(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:A,resetDefaultState:b,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:S,initAttributes:p,enableAttribute:_,disableUnusedAttributes:y}}function ME(r,e,t){let n;function i(c){n=c}function s(c,h){r.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(r.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let d=0;for(let m=0;m<u;m++)d+=h[m];t.update(d,n,1)}function l(c,h,u,f){if(u===0)return;let d=e.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],h[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let m=0;for(let p=0;p<u;p++)m+=h[p]*f[p];t.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function EE(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){let S=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(S.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(S){return!(S!==fr&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(S){let A=S===wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(S!==Di&&n.convert(S)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&S!==dr&&!A)}function l(S){if(S==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";S="mediump"}return S==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(ht("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),g=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),x=r.getParameter(r.MAX_VARYING_VECTORS),v=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),M=r.getParameter(r.MAX_SAMPLES),T=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:p,maxCubemapSize:_,maxAttributes:g,maxVertexUniforms:y,maxVaryings:x,maxFragmentUniforms:v,maxSamples:M,samples:T}}function TE(r){let e=this,t=null,n=0,i=!1,s=!1,o=new kr,a=new bt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){let d=u.length!==0||f||n!==0||i;return i=f,n=u.length,d},this.beginShadows=function(){s=!0,h(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,d){let m=u.clippingPlanes,p=u.clipIntersection,_=u.clipShadows,g=r.get(u);if(!i||m===null||m.length===0||s&&!_)s?h(null):c();else{let y=s?0:n,x=y*4,v=g.clippingState||null;l.value=v,v=h(m,f,x,d);for(let M=0;M!==x;++M)v[M]=t[M];g.clippingState=v,this.numIntersection=p?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,d,m){let p=u!==null?u.length:0,_=null;if(p!==0){if(_=l.value,m!==!0||_===null){let g=d+p*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<g)&&(_=new Float32Array(g));for(let x=0,v=d;x!==p;++x,v+=4)o.copy(u[x]).applyMatrix4(y,a),o.normal.toArray(_,v),_[v+3]=o.constant}l.value=_,l.needsUpdate=!0}return e.numPlanes=p,e.numIntersection=0,_}}function SE(r){let e=new WeakMap;function t(o,a){return a===Dh?o.mapping=zs:a===Fh&&(o.mapping=Ro),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Dh||a===Fh)if(e.has(o)){let l=e.get(o).texture;return t(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new ql(l.height);return c.fromEquirectangularTexture(r,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}var Ws=4,r_=[.125,.215,.35,.446,.526,.582],Fo=20,wE=256,wc=new Li,s_=new Me,Up=null,Op=0,kp=0,Bp=!1,AE=new P,qr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){let{size:o=256,position:a=AE}=s;Up=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),kp=this._renderer.getActiveMipmapLevel(),Bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,i,l,a),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=a_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Up,Op,kp),this._renderer.xr.enabled=Bp,e.scissorTest=!1,Va(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===zs||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Up=this._renderer.getRenderTarget(),Op=this._renderer.getActiveCubeFace(),kp=this._renderer.getActiveMipmapLevel(),Bp=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:wn,format:fr,colorSpace:wr,depthBuffer:!1},i=o_(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(e,t,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=RE(s)),this._blurMaterial=PE(s,e,t),this._ggxMaterial=CE(s,e,t)}return i}_compileMaterial(e){let t=new Ue(new vt,e);this._renderer.compile(t,wc)}_sceneToCubeUV(e,t,n,i,s){let l=new Ht(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(s_),u.toneMapping=Ir,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ue(new Wt,new bn({name:"PMREM.Background",side:In,depthWrite:!1,depthTest:!1})));let p=this._backgroundBox,_=p.material,g=!1,y=e.background;y?y.isColor&&(_.color.copy(y),e.background=null,g=!0):(_.color.copy(s_),g=!0);for(let x=0;x<6;x++){let v=x%3;v===0?(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+h[x],s.y,s.z)):v===1?(l.up.set(0,0,c[x]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+h[x],s.z)):(l.up.set(0,c[x],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+h[x]));let M=this._cubeSize;Va(i,v*M,x>2?M:0,M,M),u.setRenderTarget(i),g&&u.render(p,l),u.render(e,l)}u.toneMapping=d,u.autoClear=f,e.background=y}_textureToCubeUV(e,t){let n=this._renderer,i=e.mapping===zs||e.mapping===Ro;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=l_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=a_());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=e;let l=this._cubeSize;Va(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,wc)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=0+c*1.25,d=u*f,{_lodMax:m}=this,p=this._sizeLods[n],_=3*p*(n>m-Ws?n-m+Ws:0),g=4*(this._cubeSize-p);l.envMap.value=e.texture,l.roughness.value=d,l.mipInt.value=m-t,Va(s,_,g,3*p,2*p),i.setRenderTarget(s),i.render(a,wc),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Va(e,_,g,3*p,2*p),i.setRenderTarget(e),i.render(a,wc)}_blur(e,t,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",s),this._halfBlur(o,e,n,n,i,"longitudinal",s)}_halfBlur(e,t,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&gt("blur direction must be either latitudinal or longitudinal!");let h=3,u=this._lodMeshes[i];u.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fo-1),p=s/m,_=isFinite(s)?1+Math.floor(h*p):Fo;_>Fo&&ht(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fo}`);let g=[],y=0;for(let S=0;S<Fo;++S){let A=S/p,b=Math.exp(-A*A/2);g.push(b),S===0?y+=b:S<_&&(y+=2*b)}for(let S=0;S<g.length;S++)g[S]=g[S]/y;f.envMap.value=e.texture,f.samples.value=_,f.weights.value=g,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:x}=this;f.dTheta.value=m,f.mipInt.value=x-n;let v=this._sizeLods[i],M=3*v*(i>x-Ws?i-x+Ws:0),T=4*(this._cubeSize-v);Va(t,M,T,3*v,2*v),l.setRenderTarget(t),l.render(u,wc)}};function RE(r){let e=[],t=[],n=[],i=r,s=r-Ws+1+r_.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);e.push(a);let l=1/a;o>r-Ws?l=r_[o-r+Ws-1]:o===0&&(l=0),t.push(l);let c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],d=6,m=6,p=3,_=2,g=1,y=new Float32Array(p*m*d),x=new Float32Array(_*m*d),v=new Float32Array(g*m*d);for(let T=0;T<d;T++){let S=T%3*2/3-1,A=T>2?0:-1,b=[S,A,0,S+2/3,A,0,S+2/3,A+1,0,S,A,0,S+2/3,A+1,0,S,A+1,0];y.set(b,p*m*T),x.set(f,_*m*T);let E=[T,T,T,T,T,T];v.set(E,g*m*T)}let M=new vt;M.setAttribute("position",new Ut(y,p)),M.setAttribute("uv",new Ut(x,_)),M.setAttribute("faceIndex",new Ut(v,g)),n.push(new Ue(M,null)),i>Ws&&i--}return{lodMeshes:n,sizeLods:e,sigmas:t}}function o_(r,e,t){let n=new gn(r,e,t);return n.texture.mapping=yc,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Va(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function CE(r,e,t){return new Ot({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function PE(r,e,t){let n=new Float32Array(Fo),i=new P(0,1,0);return new Ot({name:"SphericalGaussianBlur",defines:{n:Fo,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function a_(){return new Ot({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:wd(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function l_(){return new Ot({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:wd(),fragmentShader:`

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
	`}function IE(r){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Dh||l===Fh,h=l===zs||l===Ro;if(c||h){let u=e.get(a),f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return t===null&&(t=new qr(r)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{let d=a.image;return c&&d&&d.height>0||h&&d&&i(d)?(t===null&&(t=new qr(r)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function i(a){let l=0,c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function LE(r){let e={};function t(n){if(e[n]!==void 0)return e[n];let i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let i=t(n);return i===null&&Ca("WebGLRenderer: "+n+" extension not supported."),i}}}function DE(r,e,t,n){let i={},s=new WeakMap;function o(u){let f=u.target;f.index!==null&&e.remove(f.index);for(let m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(e.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function a(u,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,t.memory.geometries++),f}function l(u){let f=u.attributes;for(let d in f)e.update(f[d],r.ARRAY_BUFFER)}function c(u){let f=[],d=u.index,m=u.attributes.position,p=0;if(d!==null){let y=d.array;p=d.version;for(let x=0,v=y.length;x<v;x+=3){let M=y[x+0],T=y[x+1],S=y[x+2];f.push(M,T,T,S,S,M)}}else if(m!==void 0){let y=m.array;p=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){let M=x+0,T=x+1,S=x+2;f.push(M,T,T,S,S,M)}}else return;let _=new(Cp(f)?Gl:Vl)(f,1);_.version=p;let g=s.get(u);g&&e.remove(g),s.set(u,_)}function h(u){let f=s.get(u);if(f){let d=u.index;d!==null&&f.version<d.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function FE(r,e,t){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),t.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),t.update(d,n,m))}function h(f,d,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let _=0;for(let g=0;g<m;g++)_+=d[g];t.update(_,n,1)}function u(f,d,m,p){if(m===0)return;let _=e.get("WEBGL_multi_draw");if(_===null)for(let g=0;g<f.length;g++)c(f[g]/o,d[g],p[g]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,p,0,m);let g=0;for(let y=0;y<m;y++)g+=d[y]*p[y];t.update(g,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function NE(r){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case r.TRIANGLES:t.triangles+=a*(s/3);break;case r.LINES:t.lines+=a*(s/2);break;case r.LINE_STRIP:t.lines+=a*(s-1);break;case r.LINE_LOOP:t.lines+=a*s;break;case r.POINTS:t.points+=a*s;break;default:gt("WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function UE(r,e,t){let n=new WeakMap,i=new tn;function s(o,a,l){let c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0,f=n.get(a);if(f===void 0||f.count!==u){let b=function(){S.dispose(),n.delete(a),a.removeEventListener("dispose",b)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],g=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],x=0;d===!0&&(x=1),m===!0&&(x=2),p===!0&&(x=3);let v=a.attributes.position.count*x,M=1;v>e.maxTextureSize&&(M=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);let T=new Float32Array(v*M*4*u),S=new Hl(T,v,M,u);S.type=dr,S.needsUpdate=!0;let A=x*4;for(let E=0;E<u;E++){let L=_[E],R=g[E],D=y[E],k=v*M*4*E;for(let G=0;G<L.count;G++){let z=G*A;d===!0&&(i.fromBufferAttribute(L,G),T[k+z+0]=i.x,T[k+z+1]=i.y,T[k+z+2]=i.z,T[k+z+3]=0),m===!0&&(i.fromBufferAttribute(R,G),T[k+z+4]=i.x,T[k+z+5]=i.y,T[k+z+6]=i.z,T[k+z+7]=0),p===!0&&(i.fromBufferAttribute(D,G),T[k+z+8]=i.x,T[k+z+9]=i.y,T[k+z+10]=i.z,T[k+z+11]=D.itemSize===4?i.w:1)}}f={count:u,texture:S,size:new ve(v,M)},n.set(a,f),a.addEventListener("dispose",b)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,t);else{let d=0;for(let p=0;p<c.length;p++)d+=c[p];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function OE(r,e,t,n){let i=new WeakMap;function s(l){let c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return u}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:o}}var kE={[pc]:"LINEAR_TONE_MAPPING",[mc]:"REINHARD_TONE_MAPPING",[gc]:"CINEON_TONE_MAPPING",[Xi]:"ACES_FILMIC_TONE_MAPPING",[vc]:"AGX_TONE_MAPPING",[xc]:"NEUTRAL_TONE_MAPPING",[_c]:"CUSTOM_TONE_MAPPING"};function BE(r,e,t,n,i){let s=new gn(e,t,{type:r,depthBuffer:n,stencilBuffer:i}),o=new gn(e,t,{type:wn,depthBuffer:!1,stencilBuffer:!1}),a=new vt;a.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new lt([0,2,0,0,2,0],2));let l=new ka({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Ue(a,l),h=new Li(-1,1,1,-1,0,1),u=null,f=null,d=!1,m,p=null,_=[],g=!1;this.setSize=function(y,x){s.setSize(y,x),o.setSize(y,x);for(let v=0;v<_.length;v++){let M=_[v];M.setSize&&M.setSize(y,x)}},this.setEffects=function(y){_=y,g=_.length>0&&_[0].isRenderPass===!0;let x=s.width,v=s.height;for(let M=0;M<_.length;M++){let T=_[M];T.setSize&&T.setSize(x,v)}},this.begin=function(y,x){if(d||y.toneMapping===Ir&&_.length===0)return!1;if(p=x,x!==null){let v=x.width,M=x.height;(s.width!==v||s.height!==M)&&this.setSize(v,M)}return g===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Ir,!0},this.hasRenderPass=function(){return g},this.end=function(y,x){y.toneMapping=m,d=!0;let v=s,M=o;for(let T=0;T<_.length;T++){let S=_[T];if(S.enabled!==!1&&(S.render(y,M,v,x),S.needsSwap!==!1)){let A=v;v=M,M=A}}if(u!==y.outputColorSpace||f!==y.toneMapping){u=y.outputColorSpace,f=y.toneMapping,l.defines={},Lt.getTransfer(u)===Vt&&(l.defines.SRGB_TRANSFER="");let T=kE[f];T&&(l.defines[T]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=v.texture,y.setRenderTarget(p),y.render(c,h),p=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var A_=new Un,Vp=new lr(1,1),R_=new Hl,C_=new th,P_=new Xl,c_=[],u_=[],h_=new Float32Array(16),d_=new Float32Array(9),f_=new Float32Array(4);function Wa(r,e,t){let n=r[0];if(n<=0||n>0)return r;let i=e*t,s=c_[i];if(s===void 0&&(s=new Float32Array(i),c_[i]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,r[o].toArray(s,a)}return s}function Bn(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Hn(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Ad(r,e){let t=u_[e];t===void 0&&(t=new Int32Array(e),u_[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function HE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function zE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2fv(this.addr,e),Hn(t,e)}}function VE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Bn(t,e))return;r.uniform3fv(this.addr,e),Hn(t,e)}}function GE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4fv(this.addr,e),Hn(t,e)}}function WE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Hn(t,e)}else{if(Bn(t,n))return;f_.set(n),r.uniformMatrix2fv(this.addr,!1,f_),Hn(t,n)}}function XE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Hn(t,e)}else{if(Bn(t,n))return;d_.set(n),r.uniformMatrix3fv(this.addr,!1,d_),Hn(t,n)}}function qE(r,e){let t=this.cache,n=e.elements;if(n===void 0){if(Bn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Hn(t,e)}else{if(Bn(t,n))return;h_.set(n),r.uniformMatrix4fv(this.addr,!1,h_),Hn(t,n)}}function YE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function $E(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2iv(this.addr,e),Hn(t,e)}}function ZE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3iv(this.addr,e),Hn(t,e)}}function JE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4iv(this.addr,e),Hn(t,e)}}function KE(r,e){let t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function jE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Bn(t,e))return;r.uniform2uiv(this.addr,e),Hn(t,e)}}function QE(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Bn(t,e))return;r.uniform3uiv(this.addr,e),Hn(t,e)}}function eT(r,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Bn(t,e))return;r.uniform4uiv(this.addr,e),Hn(t,e)}}function tT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(Vp.compareFunction=t.isReversedDepthBuffer()?Ed:Md,s=Vp):s=A_,t.setTexture2D(e||s,i)}function nT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||C_,i)}function iT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||P_,i)}function rT(r,e,t){let n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||R_,i)}function sT(r){switch(r){case 5126:return HE;case 35664:return zE;case 35665:return VE;case 35666:return GE;case 35674:return WE;case 35675:return XE;case 35676:return qE;case 5124:case 35670:return YE;case 35667:case 35671:return $E;case 35668:case 35672:return ZE;case 35669:case 35673:return JE;case 5125:return KE;case 36294:return jE;case 36295:return QE;case 36296:return eT;case 35678:case 36198:case 36298:case 36306:case 35682:return tT;case 35679:case 36299:case 36307:return nT;case 35680:case 36300:case 36308:case 36293:return iT;case 36289:case 36303:case 36311:case 36292:return rT}}function oT(r,e){r.uniform1fv(this.addr,e)}function aT(r,e){let t=Wa(e,this.size,2);r.uniform2fv(this.addr,t)}function lT(r,e){let t=Wa(e,this.size,3);r.uniform3fv(this.addr,t)}function cT(r,e){let t=Wa(e,this.size,4);r.uniform4fv(this.addr,t)}function uT(r,e){let t=Wa(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function hT(r,e){let t=Wa(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function dT(r,e){let t=Wa(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function fT(r,e){r.uniform1iv(this.addr,e)}function pT(r,e){r.uniform2iv(this.addr,e)}function mT(r,e){r.uniform3iv(this.addr,e)}function gT(r,e){r.uniform4iv(this.addr,e)}function _T(r,e){r.uniform1uiv(this.addr,e)}function vT(r,e){r.uniform2uiv(this.addr,e)}function xT(r,e){r.uniform3uiv(this.addr,e)}function yT(r,e){r.uniform4uiv(this.addr,e)}function bT(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=Vp:o=A_;for(let a=0;a!==i;++a)t.setTexture2D(e[a]||o,s[a])}function MT(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||C_,s[o])}function ET(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||P_,s[o])}function TT(r,e,t){let n=this.cache,i=e.length,s=Ad(t,i);Bn(n,s)||(r.uniform1iv(this.addr,s),Hn(n,s));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||R_,s[o])}function ST(r){switch(r){case 5126:return oT;case 35664:return aT;case 35665:return lT;case 35666:return cT;case 35674:return uT;case 35675:return hT;case 35676:return dT;case 5124:case 35670:return fT;case 35667:case 35671:return pT;case 35668:case 35672:return mT;case 35669:case 35673:return gT;case 5125:return _T;case 36294:return vT;case 36295:return xT;case 36296:return yT;case 35678:case 36198:case 36298:case 36306:case 35682:return bT;case 35679:case 36299:case 36307:return MT;case 35680:case 36300:case 36308:case 36293:return ET;case 36289:case 36303:case 36311:case 36292:return TT}}var Gp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=sT(t.type)}},Wp=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ST(t.type)}},Xp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(e,t[a.id],n)}}},Hp=/(\w+)(\])?(\[|\.)?/g;function p_(r,e){r.seq.push(e),r.map[e.id]=e}function wT(r,e,t){let n=r.name,i=n.length;for(Hp.lastIndex=0;;){let s=Hp.exec(n),o=Hp.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){p_(t,c===void 0?new Gp(a,r,e):new Wp(a,r,e));break}else{let u=t.map[a];u===void 0&&(u=new Xp(a),p_(t,u)),t=u}}}var Ga=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=e.getActiveUniform(t,o),l=e.getUniformLocation(t,a.name);wT(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){let s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){let i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,o=t.length;s!==o;++s){let a=t[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){let n=[];for(let i=0,s=e.length;i!==s;++i){let o=e[i];o.id in t&&n.push(o)}return n}};function m_(r,e,t){let n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}var AT=37297,RT=0;function CT(r,e){let t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}var g_=new bt;function PT(r){Lt._getMatrix(g_,Lt.workingColorSpace,r);let e=`mat3( ${g_.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(r)){case Ul:return[e,"LinearTransferOETF"];case Vt:return[e,"sRGBTransferOETF"];default:return ht("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function __(r,e,t){let n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return t.toUpperCase()+`

`+s+`

`+CT(r.getShaderSource(e),a)}else return s}function IT(r,e){let t=PT(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var LT={[pc]:"Linear",[mc]:"Reinhard",[gc]:"Cineon",[Xi]:"ACESFilmic",[vc]:"AgX",[xc]:"Neutral",[_c]:"Custom"};function DT(r,e){let t=LT[e];return t===void 0?(ht("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Sd=new P;function FT(){Lt.getLuminanceCoefficients(Sd);let r=Sd.x.toFixed(4),e=Sd.y.toFixed(4),t=Sd.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function NT(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Rc).join(`
`)}function UT(r){let e=[];for(let t in r){let n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function OT(r,e){let t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(e,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:r.getAttribLocation(e,o),locationSize:a}}return t}function Rc(r){return r!==""}function v_(r,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function x_(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var kT=/^[ \t]*#include +<([\w\d./]+)>/gm;function qp(r){return r.replace(kT,HT)}var BT=new Map;function HT(r,e){let t=Et[e];if(t===void 0){let n=BT.get(e);if(n!==void 0)t=Et[n],ht('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return qp(t)}var zT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y_(r){return r.replace(zT,VT)}function VT(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function b_(r){let e=`precision ${r.precision} float;
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
#define LOW_PRECISION`),e}var GT={[fc]:"SHADOWMAP_TYPE_PCF",[Ba]:"SHADOWMAP_TYPE_VSM"};function WT(r){return GT[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var XT={[zs]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[yc]:"ENVMAP_TYPE_CUBE_UV"};function qT(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":XT[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var YT={[Ro]:"ENVMAP_MODE_REFRACTION"};function $T(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":YT[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var ZT={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[kg]:"ENVMAP_BLENDING_MIX",[Bg]:"ENVMAP_BLENDING_ADD"};function JT(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":ZT[r.combine]||"ENVMAP_BLENDING_NONE"}function KT(r){let e=r.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function jT(r,e,t,n){let i=r.getContext(),s=t.defines,o=t.vertexShader,a=t.fragmentShader,l=WT(t),c=qT(t),h=$T(t),u=JT(t),f=KT(t),d=NT(t),m=UT(s),p=i.createProgram(),_,g,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(_=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rc).join(`
`),_.length>0&&(_+=`
`),g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Rc).join(`
`),g.length>0&&(g+=`
`)):(_=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Rc).join(`
`),g=[b_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ir?"#define TONE_MAPPING":"",t.toneMapping!==Ir?Et.tonemapping_pars_fragment:"",t.toneMapping!==Ir?DT("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,IT("linearToOutputTexel",t.outputColorSpace),FT(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Rc).join(`
`)),o=qp(o),o=v_(o,t),o=x_(o,t),a=qp(a),a=v_(a,t),a=x_(a,t),o=y_(o),a=y_(a),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,g=["#define varying in",t.glslVersion===Rp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);let x=y+_+o,v=y+g+a,M=m_(i,i.VERTEX_SHADER,x),T=m_(i,i.FRAGMENT_SHADER,v);i.attachShader(p,M),i.attachShader(p,T),t.index0AttributeName!==void 0?i.bindAttribLocation(p,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(p,0,"position"),i.linkProgram(p);function S(L){if(r.debug.checkShaderErrors){let R=i.getProgramInfoLog(p)||"",D=i.getShaderInfoLog(M)||"",k=i.getShaderInfoLog(T)||"",G=R.trim(),z=D.trim(),B=k.trim(),K=!0,se=!0;if(i.getProgramParameter(p,i.LINK_STATUS)===!1)if(K=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,p,M,T);else{let N=__(i,M,"vertex"),ae=__(i,T,"fragment");gt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(p,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+N+`
`+ae)}else G!==""?ht("WebGLProgram: Program Info Log:",G):(z===""||B==="")&&(se=!1);se&&(L.diagnostics={runnable:K,programLog:G,vertexShader:{log:z,prefix:_},fragmentShader:{log:B,prefix:g}})}i.deleteShader(M),i.deleteShader(T),A=new Ga(i,p),b=OT(i,p)}let A;this.getUniforms=function(){return A===void 0&&S(this),A};let b;this.getAttributes=function(){return b===void 0&&S(this),b};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=i.getProgramParameter(p,AT)),E},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(p),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=RT++,this.cacheKey=e,this.usedTimes=1,this.program=p,this.vertexShader=M,this.fragmentShader=T,this}var QT=0,Yp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new $p(e),t.set(e,n)),n}},$p=class{constructor(e){this.id=QT++,this.code=e,this.usedTimes=0}};function eS(r,e,t,n,i,s,o){let a=new zl,l=new Yp,c=new Set,h=[],u=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(b){return c.add(b),b===0?"uv":`uv${b}`}function _(b,E,L,R,D){let k=R.fog,G=D.geometry,z=b.isMeshStandardMaterial?R.environment:null,B=(b.isMeshStandardMaterial?t:e).get(b.envMap||z),K=B&&B.mapping===yc?B.image.height:null,se=m[b.type];b.precision!==null&&(d=i.getMaxPrecision(b.precision),d!==b.precision&&ht("WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));let N=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,ae=N!==void 0?N.length:0,Be=0;G.morphAttributes.position!==void 0&&(Be=1),G.morphAttributes.normal!==void 0&&(Be=2),G.morphAttributes.color!==void 0&&(Be=3);let He,Ye,it,ie;if(se){let he=Xr[se];He=he.vertexShader,Ye=he.fragmentShader}else He=b.vertexShader,Ye=b.fragmentShader,l.update(b),it=l.getVertexShaderID(b),ie=l.getFragmentShaderID(b);let re=r.getRenderTarget(),ye=r.state.buffers.depth.getReversed(),Oe=D.isInstancedMesh===!0,Ce=D.isBatchedMesh===!0,je=!!b.map,ft=!!b.matcap,we=!!B,qe=!!b.aoMap,Ze=!!b.lightMap,De=!!b.bumpMap,j=!!b.normalMap,H=!!b.displacementMap,_t=!!b.emissiveMap,ct=!!b.metalnessMap,Je=!!b.roughnessMap,Fe=b.anisotropy>0,F=b.clearcoat>0,w=b.dispersion>0,I=b.iridescence>0,U=b.sheen>0,W=b.transmission>0,X=Fe&&!!b.anisotropyMap,ge=F&&!!b.clearcoatMap,oe=F&&!!b.clearcoatNormalMap,Pe=F&&!!b.clearcoatRoughnessMap,Ae=I&&!!b.iridescenceMap,ue=I&&!!b.iridescenceThicknessMap,de=U&&!!b.sheenColorMap,Le=U&&!!b.sheenRoughnessMap,Ne=!!b.specularMap,_e=!!b.specularColorMap,Ee=!!b.specularIntensityMap,O=W&&!!b.transmissionMap,xe=W&&!!b.thicknessMap,pe=!!b.gradientMap,Ie=!!b.alphaMap,fe=b.alphaTest>0,ce=!!b.alphaHash,$=!!b.extensions,J=Ir;b.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(J=r.toneMapping);let V={shaderID:se,shaderType:b.type,shaderName:b.name,vertexShader:He,fragmentShader:Ye,defines:b.defines,customVertexShaderID:it,customFragmentShaderID:ie,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,batching:Ce,batchingColor:Ce&&D._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&D.instanceColor!==null,instancingMorph:Oe&&D.morphTexture!==null,outputColorSpace:re===null?r.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wr,alphaToCoverage:!!b.alphaToCoverage,map:je,matcap:ft,envMap:we,envMapMode:we&&B.mapping,envMapCubeUVHeight:K,aoMap:qe,lightMap:Ze,bumpMap:De,normalMap:j,displacementMap:H,emissiveMap:_t,normalMapObjectSpace:j&&b.normalMapType===Vg,normalMapTangentSpace:j&&b.normalMapType===bd,metalnessMap:ct,roughnessMap:Je,anisotropy:Fe,anisotropyMap:X,clearcoat:F,clearcoatMap:ge,clearcoatNormalMap:oe,clearcoatRoughnessMap:Pe,dispersion:w,iridescence:I,iridescenceMap:Ae,iridescenceThicknessMap:ue,sheen:U,sheenColorMap:de,sheenRoughnessMap:Le,specularMap:Ne,specularColorMap:_e,specularIntensityMap:Ee,transmission:W,transmissionMap:O,thicknessMap:xe,gradientMap:pe,opaque:b.transparent===!1&&b.blending===xo&&b.alphaToCoverage===!1,alphaMap:Ie,alphaTest:fe,alphaHash:ce,combine:b.combine,mapUv:je&&p(b.map.channel),aoMapUv:qe&&p(b.aoMap.channel),lightMapUv:Ze&&p(b.lightMap.channel),bumpMapUv:De&&p(b.bumpMap.channel),normalMapUv:j&&p(b.normalMap.channel),displacementMapUv:H&&p(b.displacementMap.channel),emissiveMapUv:_t&&p(b.emissiveMap.channel),metalnessMapUv:ct&&p(b.metalnessMap.channel),roughnessMapUv:Je&&p(b.roughnessMap.channel),anisotropyMapUv:X&&p(b.anisotropyMap.channel),clearcoatMapUv:ge&&p(b.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pe&&p(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ae&&p(b.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&p(b.iridescenceThicknessMap.channel),sheenColorMapUv:de&&p(b.sheenColorMap.channel),sheenRoughnessMapUv:Le&&p(b.sheenRoughnessMap.channel),specularMapUv:Ne&&p(b.specularMap.channel),specularColorMapUv:_e&&p(b.specularColorMap.channel),specularIntensityMapUv:Ee&&p(b.specularIntensityMap.channel),transmissionMapUv:O&&p(b.transmissionMap.channel),thicknessMapUv:xe&&p(b.thicknessMap.channel),alphaMapUv:Ie&&p(b.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(j||Fe),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!G.attributes.uv&&(je||Ie),fog:!!k,useFog:b.fog===!0,fogExp2:!!k&&k.isFogExp2,flatShading:b.flatShading===!0&&b.wireframe===!1,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ye,skinning:D.isSkinnedMesh===!0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:ae,morphTextureStride:Be,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:J,decodeVideoTexture:je&&b.map.isVideoTexture===!0&&Lt.getTransfer(b.map.colorSpace)===Vt,decodeVideoTextureEmissive:_t&&b.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(b.emissiveMap.colorSpace)===Vt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===nn,flipSided:b.side===In,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:$&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($&&b.extensions.multiDraw===!0||Ce)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return V.vertexUv1s=c.has(1),V.vertexUv2s=c.has(2),V.vertexUv3s=c.has(3),c.clear(),V}function g(b){let E=[];if(b.shaderID?E.push(b.shaderID):(E.push(b.customVertexShaderID),E.push(b.customFragmentShaderID)),b.defines!==void 0)for(let L in b.defines)E.push(L),E.push(b.defines[L]);return b.isRawShaderMaterial===!1&&(y(E,b),x(E,b),E.push(r.outputColorSpace)),E.push(b.customProgramCacheKey),E.join()}function y(b,E){b.push(E.precision),b.push(E.outputColorSpace),b.push(E.envMapMode),b.push(E.envMapCubeUVHeight),b.push(E.mapUv),b.push(E.alphaMapUv),b.push(E.lightMapUv),b.push(E.aoMapUv),b.push(E.bumpMapUv),b.push(E.normalMapUv),b.push(E.displacementMapUv),b.push(E.emissiveMapUv),b.push(E.metalnessMapUv),b.push(E.roughnessMapUv),b.push(E.anisotropyMapUv),b.push(E.clearcoatMapUv),b.push(E.clearcoatNormalMapUv),b.push(E.clearcoatRoughnessMapUv),b.push(E.iridescenceMapUv),b.push(E.iridescenceThicknessMapUv),b.push(E.sheenColorMapUv),b.push(E.sheenRoughnessMapUv),b.push(E.specularMapUv),b.push(E.specularColorMapUv),b.push(E.specularIntensityMapUv),b.push(E.transmissionMapUv),b.push(E.thicknessMapUv),b.push(E.combine),b.push(E.fogExp2),b.push(E.sizeAttenuation),b.push(E.morphTargetsCount),b.push(E.morphAttributeCount),b.push(E.numDirLights),b.push(E.numPointLights),b.push(E.numSpotLights),b.push(E.numSpotLightMaps),b.push(E.numHemiLights),b.push(E.numRectAreaLights),b.push(E.numDirLightShadows),b.push(E.numPointLightShadows),b.push(E.numSpotLightShadows),b.push(E.numSpotLightShadowsWithMaps),b.push(E.numLightProbes),b.push(E.shadowMapType),b.push(E.toneMapping),b.push(E.numClippingPlanes),b.push(E.numClipIntersection),b.push(E.depthPacking)}function x(b,E){a.disableAll(),E.instancing&&a.enable(0),E.instancingColor&&a.enable(1),E.instancingMorph&&a.enable(2),E.matcap&&a.enable(3),E.envMap&&a.enable(4),E.normalMapObjectSpace&&a.enable(5),E.normalMapTangentSpace&&a.enable(6),E.clearcoat&&a.enable(7),E.iridescence&&a.enable(8),E.alphaTest&&a.enable(9),E.vertexColors&&a.enable(10),E.vertexAlphas&&a.enable(11),E.vertexUv1s&&a.enable(12),E.vertexUv2s&&a.enable(13),E.vertexUv3s&&a.enable(14),E.vertexTangents&&a.enable(15),E.anisotropy&&a.enable(16),E.alphaHash&&a.enable(17),E.batching&&a.enable(18),E.dispersion&&a.enable(19),E.batchingColor&&a.enable(20),E.gradientMap&&a.enable(21),b.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reversedDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),b.push(a.mask)}function v(b){let E=m[b.type],L;if(E){let R=Xr[E];L=ps.clone(R.uniforms)}else L=b.uniforms;return L}function M(b,E){let L=u.get(E);return L!==void 0?++L.usedTimes:(L=new jT(r,E,b,s),h.push(L),u.set(E,L)),L}function T(b){if(--b.usedTimes===0){let E=h.indexOf(b);h[E]=h[h.length-1],h.pop(),u.delete(b.cacheKey),b.destroy()}}function S(b){l.remove(b)}function A(){l.dispose()}return{getParameters:_,getProgramCacheKey:g,getUniforms:v,acquireProgram:M,releaseProgram:T,releaseShaderCache:S,programs:h,dispose:A}}function tS(){let r=new WeakMap;function e(o){return r.has(o)}function t(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function nS(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function M_(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function E_(){let r=[],e=0,t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function o(u,f,d,m,p,_){let g=r[e];return g===void 0?(g={id:u.id,object:u,geometry:f,material:d,groupOrder:m,renderOrder:u.renderOrder,z:p,group:_},r[e]=g):(g.id=u.id,g.object=u,g.geometry=f,g.material=d,g.groupOrder=m,g.renderOrder=u.renderOrder,g.z=p,g.group=_),e++,g}function a(u,f,d,m,p,_){let g=o(u,f,d,m,p,_);d.transmission>0?n.push(g):d.transparent===!0?i.push(g):t.push(g)}function l(u,f,d,m,p,_){let g=o(u,f,d,m,p,_);d.transmission>0?n.unshift(g):d.transparent===!0?i.unshift(g):t.unshift(g)}function c(u,f){t.length>1&&t.sort(u||nS),n.length>1&&n.sort(f||M_),i.length>1&&i.sort(f||M_)}function h(){for(let u=e,f=r.length;u<f;u++){let d=r[u];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:h,sort:c}}function iS(){let r=new WeakMap;function e(n,i){let s=r.get(n),o;return s===void 0?(o=new E_,r.set(n,[o])):i>=s.length?(o=new E_,s.push(o)):o=s[i],o}function t(){r=new WeakMap}return{get:e,dispose:t}}function rS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Me};break;case"SpotLight":t={position:new P,direction:new P,color:new Me,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Me,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Me,groundColor:new Me};break;case"RectAreaLight":t={color:new Me,position:new P,halfWidth:new P,halfHeight:new P};break}return r[e.id]=t,t}}}function sS(){let r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}var oS=0;function aS(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function lS(r){let e=new rS,t=sS(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);let i=new P,s=new Pt,o=new Pt;function a(c){let h=0,u=0,f=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let d=0,m=0,p=0,_=0,g=0,y=0,x=0,v=0,M=0,T=0,S=0;c.sort(aS);for(let b=0,E=c.length;b<E;b++){let L=c[b],R=L.color,D=L.intensity,k=L.distance,G=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Co?G=L.shadow.map.texture:G=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)h+=R.r*D,u+=R.g*D,f+=R.b*D;else if(L.isLightProbe){for(let z=0;z<9;z++)n.probe[z].addScaledVector(L.sh.coefficients[z],D);S++}else if(L.isDirectionalLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let B=L.shadow,K=t.get(L);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,n.directionalShadow[d]=K,n.directionalShadowMap[d]=G,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=z,d++}else if(L.isSpotLight){let z=e.get(L);z.position.setFromMatrixPosition(L.matrixWorld),z.color.copy(R).multiplyScalar(D),z.distance=k,z.coneCos=Math.cos(L.angle),z.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),z.decay=L.decay,n.spot[p]=z;let B=L.shadow;if(L.map&&(n.spotLightMap[M]=L.map,M++,B.updateMatrices(L),L.castShadow&&T++),n.spotLightMatrix[p]=B.matrix,L.castShadow){let K=t.get(L);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,n.spotShadow[p]=K,n.spotShadowMap[p]=G,v++}p++}else if(L.isRectAreaLight){let z=e.get(L);z.color.copy(R).multiplyScalar(D),z.halfWidth.set(L.width*.5,0,0),z.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=z,_++}else if(L.isPointLight){let z=e.get(L);if(z.color.copy(L.color).multiplyScalar(L.intensity),z.distance=L.distance,z.decay=L.decay,L.castShadow){let B=L.shadow,K=t.get(L);K.shadowIntensity=B.intensity,K.shadowBias=B.bias,K.shadowNormalBias=B.normalBias,K.shadowRadius=B.radius,K.shadowMapSize=B.mapSize,K.shadowCameraNear=B.camera.near,K.shadowCameraFar=B.camera.far,n.pointShadow[m]=K,n.pointShadowMap[m]=G,n.pointShadowMatrix[m]=L.shadow.matrix,x++}n.point[m]=z,m++}else if(L.isHemisphereLight){let z=e.get(L);z.skyColor.copy(L.color).multiplyScalar(D),z.groundColor.copy(L.groundColor).multiplyScalar(D),n.hemi[g]=z,g++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Ve.LTC_FLOAT_1,n.rectAreaLTC2=Ve.LTC_FLOAT_2):(n.rectAreaLTC1=Ve.LTC_HALF_1,n.rectAreaLTC2=Ve.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;let A=n.hash;(A.directionalLength!==d||A.pointLength!==m||A.spotLength!==p||A.rectAreaLength!==_||A.hemiLength!==g||A.numDirectionalShadows!==y||A.numPointShadows!==x||A.numSpotShadows!==v||A.numSpotMaps!==M||A.numLightProbes!==S)&&(n.directional.length=d,n.spot.length=p,n.rectArea.length=_,n.point.length=m,n.hemi.length=g,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=v+M-T,n.spotLightMap.length=M,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=S,A.directionalLength=d,A.pointLength=m,A.spotLength=p,A.rectAreaLength=_,A.hemiLength=g,A.numDirectionalShadows=y,A.numPointShadows=x,A.numSpotShadows=v,A.numSpotMaps=M,A.numLightProbes=S,n.version=oS++)}function l(c,h){let u=0,f=0,d=0,m=0,p=0,_=h.matrixWorldInverse;for(let g=0,y=c.length;g<y;g++){let x=c[g];if(x.isDirectionalLight){let v=n.directional[u];v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),u++}else if(x.isSpotLight){let v=n.spot[d];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),v.direction.setFromMatrixPosition(x.matrixWorld),i.setFromMatrixPosition(x.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(_),d++}else if(x.isRectAreaLight){let v=n.rectArea[m];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),o.identity(),s.copy(x.matrixWorld),s.premultiply(_),o.extractRotation(s),v.halfWidth.set(x.width*.5,0,0),v.halfHeight.set(0,x.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),m++}else if(x.isPointLight){let v=n.point[f];v.position.setFromMatrixPosition(x.matrixWorld),v.position.applyMatrix4(_),f++}else if(x.isHemisphereLight){let v=n.hemi[p];v.direction.setFromMatrixPosition(x.matrixWorld),v.direction.transformDirection(_),p++}}}return{setup:a,setupView:l,state:n}}function T_(r){let e=new lS(r),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function s(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function cS(r){let e=new WeakMap;function t(i,s=0){let o=e.get(i),a;return o===void 0?(a=new T_(r),e.set(i,[a])):s>=o.length?(a=new T_(r),o.push(a)):a=o[s],a}function n(){e=new WeakMap}return{get:t,dispose:n}}var uS=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hS=`uniform sampler2D shadow_pass;
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
}`,dS=[new P(1,0,0),new P(-1,0,0),new P(0,1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1)],fS=[new P(0,-1,0),new P(0,-1,0),new P(0,0,1),new P(0,0,-1),new P(0,-1,0),new P(0,-1,0)],S_=new Pt,Ac=new P,zp=new P;function pS(r,e,t){let n=new Fa,i=new ve,s=new ve,o=new tn,a=new hh,l=new dh,c={},h=t.maxTextureSize,u={[cs]:In,[In]:cs,[nn]:nn},f=new Ot({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ve},radius:{value:4}},vertexShader:uS,fragmentShader:hS}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new vt;m.setAttribute("position",new Ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let p=new Ue(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=fc;let g=this.type;this.render=function(T,S,A){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||T.length===0)return;T.type===Th&&(ht("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),T.type=fc);let b=r.getRenderTarget(),E=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),R=r.state;R.setBlending(hr),R.buffers.depth.getReversed()===!0?R.buffers.color.setClear(0,0,0,0):R.buffers.color.setClear(1,1,1,1),R.buffers.depth.setTest(!0),R.setScissorTest(!1);let D=g!==this.type;D&&S.traverse(function(k){k.material&&(Array.isArray(k.material)?k.material.forEach(G=>G.needsUpdate=!0):k.material.needsUpdate=!0)});for(let k=0,G=T.length;k<G;k++){let z=T[k],B=z.shadow;if(B===void 0){ht("WebGLShadowMap:",z,"has no shadow.");continue}if(B.autoUpdate===!1&&B.needsUpdate===!1)continue;i.copy(B.mapSize);let K=B.getFrameExtents();if(i.multiply(K),s.copy(B.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(s.x=Math.floor(h/K.x),i.x=s.x*K.x,B.mapSize.x=s.x),i.y>h&&(s.y=Math.floor(h/K.y),i.y=s.y*K.y,B.mapSize.y=s.y)),B.map===null||D===!0){if(B.map!==null&&(B.map.depthTexture!==null&&(B.map.depthTexture.dispose(),B.map.depthTexture=null),B.map.dispose()),this.type===Ba){if(z.isPointLight){ht("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}B.map=new gn(i.x,i.y,{format:Co,type:wn,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),B.map.texture.name=z.name+".shadowMap",B.map.depthTexture=new lr(i.x,i.y,dr),B.map.depthTexture.name=z.name+".shadowMapDepth",B.map.depthTexture.format=zr,B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en}else{z.isPointLight?(B.map=new ql(i.x),B.map.depthTexture=new oh(i.x,Lr)):(B.map=new gn(i.x,i.y),B.map.depthTexture=new lr(i.x,i.y,Lr)),B.map.depthTexture.name=z.name+".shadowMap",B.map.depthTexture.format=zr;let N=r.state.buffers.depth.getReversed();this.type===fc?(B.map.depthTexture.compareFunction=N?Ed:Md,B.map.depthTexture.minFilter=Zn,B.map.depthTexture.magFilter=Zn):(B.map.depthTexture.compareFunction=null,B.map.depthTexture.minFilter=en,B.map.depthTexture.magFilter=en)}B.camera.updateProjectionMatrix()}let se=B.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<se;N++){if(B.map.isWebGLCubeRenderTarget)r.setRenderTarget(B.map,N),r.clear();else{N===0&&(r.setRenderTarget(B.map),r.clear());let ae=B.getViewport(N);o.set(s.x*ae.x,s.y*ae.y,s.x*ae.z,s.y*ae.w),R.viewport(o)}if(z.isPointLight){let ae=B.camera,Be=B.matrix,He=z.distance||ae.far;He!==ae.far&&(ae.far=He,ae.updateProjectionMatrix()),Ac.setFromMatrixPosition(z.matrixWorld),ae.position.copy(Ac),zp.copy(ae.position),zp.add(dS[N]),ae.up.copy(fS[N]),ae.lookAt(zp),ae.updateMatrixWorld(),Be.makeTranslation(-Ac.x,-Ac.y,-Ac.z),S_.multiplyMatrices(ae.projectionMatrix,ae.matrixWorldInverse),B._frustum.setFromProjectionMatrix(S_,ae.coordinateSystem,ae.reversedDepth)}else B.updateMatrices(z);n=B.getFrustum(),v(S,A,B.camera,z,this.type)}B.isPointLightShadow!==!0&&this.type===Ba&&y(B,A),B.needsUpdate=!1}g=this.type,_.needsUpdate=!1,r.setRenderTarget(b,E,L)};function y(T,S){let A=e.update(p);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new gn(i.x,i.y,{format:Co,type:wn})),f.uniforms.shadow_pass.value=T.map.depthTexture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,r.setRenderTarget(T.mapPass),r.clear(),r.renderBufferDirect(S,null,A,f,p,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,r.setRenderTarget(T.map),r.clear(),r.renderBufferDirect(S,null,A,d,p,null)}function x(T,S,A,b){let E=null,L=A.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(L!==void 0)E=L;else if(E=A.isPointLight===!0?l:a,r.localClippingEnabled&&S.clipShadows===!0&&Array.isArray(S.clippingPlanes)&&S.clippingPlanes.length!==0||S.displacementMap&&S.displacementScale!==0||S.alphaMap&&S.alphaTest>0||S.map&&S.alphaTest>0||S.alphaToCoverage===!0){let R=E.uuid,D=S.uuid,k=c[R];k===void 0&&(k={},c[R]=k);let G=k[D];G===void 0&&(G=E.clone(),k[D]=G,S.addEventListener("dispose",M)),E=G}if(E.visible=S.visible,E.wireframe=S.wireframe,b===Ba?E.side=S.shadowSide!==null?S.shadowSide:S.side:E.side=S.shadowSide!==null?S.shadowSide:u[S.side],E.alphaMap=S.alphaMap,E.alphaTest=S.alphaToCoverage===!0?.5:S.alphaTest,E.map=S.map,E.clipShadows=S.clipShadows,E.clippingPlanes=S.clippingPlanes,E.clipIntersection=S.clipIntersection,E.displacementMap=S.displacementMap,E.displacementScale=S.displacementScale,E.displacementBias=S.displacementBias,E.wireframeLinewidth=S.wireframeLinewidth,E.linewidth=S.linewidth,A.isPointLight===!0&&E.isMeshDistanceMaterial===!0){let R=r.properties.get(E);R.light=A}return E}function v(T,S,A,b,E){if(T.visible===!1)return;if(T.layers.test(S.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&E===Ba)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,T.matrixWorld);let D=e.update(T),k=T.material;if(Array.isArray(k)){let G=D.groups;for(let z=0,B=G.length;z<B;z++){let K=G[z],se=k[K.materialIndex];if(se&&se.visible){let N=x(T,se,b,E);T.onBeforeShadow(r,T,S,A,D,N,K),r.renderBufferDirect(A,null,D,N,T,K),T.onAfterShadow(r,T,S,A,D,N,K)}}}else if(k.visible){let G=x(T,k,b,E);T.onBeforeShadow(r,T,S,A,D,G,null),r.renderBufferDirect(A,null,D,G,T,null),T.onAfterShadow(r,T,S,A,D,G,null)}}let R=T.children;for(let D=0,k=R.length;D<k;D++)v(R[D],S,A,b,E)}function M(T){T.target.removeEventListener("dispose",M);for(let A in c){let b=c[A],E=T.target.uuid;E in b&&(b[E].dispose(),delete b[E])}}}var mS={[Sh]:wh,[Ah]:Ph,[Rh]:Ih,[yo]:Ch,[wh]:Sh,[Ph]:Ah,[Ih]:Rh,[Ch]:yo};function gS(r,e){function t(){let O=!1,xe=new tn,pe=null,Ie=new tn(0,0,0,0);return{setMask:function(fe){pe!==fe&&!O&&(r.colorMask(fe,fe,fe,fe),pe=fe)},setLocked:function(fe){O=fe},setClear:function(fe,ce,$,J,V){V===!0&&(fe*=J,ce*=J,$*=J),xe.set(fe,ce,$,J),Ie.equals(xe)===!1&&(r.clearColor(fe,ce,$,J),Ie.copy(xe))},reset:function(){O=!1,pe=null,Ie.set(-1,0,0,0)}}}function n(){let O=!1,xe=!1,pe=null,Ie=null,fe=null;return{setReversed:function(ce){if(xe!==ce){let $=e.get("EXT_clip_control");ce?$.clipControlEXT($.LOWER_LEFT_EXT,$.ZERO_TO_ONE_EXT):$.clipControlEXT($.LOWER_LEFT_EXT,$.NEGATIVE_ONE_TO_ONE_EXT),xe=ce;let J=fe;fe=null,this.setClear(J)}},getReversed:function(){return xe},setTest:function(ce){ce?re(r.DEPTH_TEST):ye(r.DEPTH_TEST)},setMask:function(ce){pe!==ce&&!O&&(r.depthMask(ce),pe=ce)},setFunc:function(ce){if(xe&&(ce=mS[ce]),Ie!==ce){switch(ce){case Sh:r.depthFunc(r.NEVER);break;case wh:r.depthFunc(r.ALWAYS);break;case Ah:r.depthFunc(r.LESS);break;case yo:r.depthFunc(r.LEQUAL);break;case Rh:r.depthFunc(r.EQUAL);break;case Ch:r.depthFunc(r.GEQUAL);break;case Ph:r.depthFunc(r.GREATER);break;case Ih:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=ce}},setLocked:function(ce){O=ce},setClear:function(ce){fe!==ce&&(xe&&(ce=1-ce),r.clearDepth(ce),fe=ce)},reset:function(){O=!1,pe=null,Ie=null,fe=null,xe=!1}}}function i(){let O=!1,xe=null,pe=null,Ie=null,fe=null,ce=null,$=null,J=null,V=null;return{setTest:function(he){O||(he?re(r.STENCIL_TEST):ye(r.STENCIL_TEST))},setMask:function(he){xe!==he&&!O&&(r.stencilMask(he),xe=he)},setFunc:function(he,Te,st){(pe!==he||Ie!==Te||fe!==st)&&(r.stencilFunc(he,Te,st),pe=he,Ie=Te,fe=st)},setOp:function(he,Te,st){(ce!==he||$!==Te||J!==st)&&(r.stencilOp(he,Te,st),ce=he,$=Te,J=st)},setLocked:function(he){O=he},setClear:function(he){V!==he&&(r.clearStencil(he),V=he)},reset:function(){O=!1,xe=null,pe=null,Ie=null,fe=null,ce=null,$=null,J=null,V=null}}}let s=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap,h={},u={},f=new WeakMap,d=[],m=null,p=!1,_=null,g=null,y=null,x=null,v=null,M=null,T=null,S=new Me(0,0,0),A=0,b=!1,E=null,L=null,R=null,D=null,k=null,G=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),z=!1,B=0,K=r.getParameter(r.VERSION);K.indexOf("WebGL")!==-1?(B=parseFloat(/^WebGL (\d)/.exec(K)[1]),z=B>=1):K.indexOf("OpenGL ES")!==-1&&(B=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),z=B>=2);let se=null,N={},ae=r.getParameter(r.SCISSOR_BOX),Be=r.getParameter(r.VIEWPORT),He=new tn().fromArray(ae),Ye=new tn().fromArray(Be);function it(O,xe,pe,Ie){let fe=new Uint8Array(4),ce=r.createTexture();r.bindTexture(O,ce),r.texParameteri(O,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(O,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let $=0;$<pe;$++)O===r.TEXTURE_3D||O===r.TEXTURE_2D_ARRAY?r.texImage3D(xe,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,fe):r.texImage2D(xe+$,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,fe);return ce}let ie={};ie[r.TEXTURE_2D]=it(r.TEXTURE_2D,r.TEXTURE_2D,1),ie[r.TEXTURE_CUBE_MAP]=it(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[r.TEXTURE_2D_ARRAY]=it(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),ie[r.TEXTURE_3D]=it(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),re(r.DEPTH_TEST),o.setFunc(yo),De(!1),j(vp),re(r.CULL_FACE),qe(hr);function re(O){h[O]!==!0&&(r.enable(O),h[O]=!0)}function ye(O){h[O]!==!1&&(r.disable(O),h[O]=!1)}function Oe(O,xe){return u[O]!==xe?(r.bindFramebuffer(O,xe),u[O]=xe,O===r.DRAW_FRAMEBUFFER&&(u[r.FRAMEBUFFER]=xe),O===r.FRAMEBUFFER&&(u[r.DRAW_FRAMEBUFFER]=xe),!0):!1}function Ce(O,xe){let pe=d,Ie=!1;if(O){pe=f.get(xe),pe===void 0&&(pe=[],f.set(xe,pe));let fe=O.textures;if(pe.length!==fe.length||pe[0]!==r.COLOR_ATTACHMENT0){for(let ce=0,$=fe.length;ce<$;ce++)pe[ce]=r.COLOR_ATTACHMENT0+ce;pe.length=fe.length,Ie=!0}}else pe[0]!==r.BACK&&(pe[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(pe)}function je(O){return m!==O?(r.useProgram(O),m=O,!0):!1}let ft={[Fs]:r.FUNC_ADD,[bg]:r.FUNC_SUBTRACT,[Mg]:r.FUNC_REVERSE_SUBTRACT};ft[Eg]=r.MIN,ft[Tg]=r.MAX;let we={[Sg]:r.ZERO,[wg]:r.ONE,[Ag]:r.SRC_COLOR,[$u]:r.SRC_ALPHA,[Dg]:r.SRC_ALPHA_SATURATE,[Ig]:r.DST_COLOR,[Cg]:r.DST_ALPHA,[Rg]:r.ONE_MINUS_SRC_COLOR,[Zu]:r.ONE_MINUS_SRC_ALPHA,[Lg]:r.ONE_MINUS_DST_COLOR,[Pg]:r.ONE_MINUS_DST_ALPHA,[Fg]:r.CONSTANT_COLOR,[Ng]:r.ONE_MINUS_CONSTANT_COLOR,[Ug]:r.CONSTANT_ALPHA,[Og]:r.ONE_MINUS_CONSTANT_ALPHA};function qe(O,xe,pe,Ie,fe,ce,$,J,V,he){if(O===hr){p===!0&&(ye(r.BLEND),p=!1);return}if(p===!1&&(re(r.BLEND),p=!0),O!==yg){if(O!==_||he!==b){if((g!==Fs||v!==Fs)&&(r.blendEquation(r.FUNC_ADD),g=Fs,v=Fs),he)switch(O){case xo:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hs:r.blendFunc(r.ONE,r.ONE);break;case xp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case yp:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:gt("WebGLState: Invalid blending: ",O);break}else switch(O){case xo:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Hs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case xp:gt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case yp:gt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:gt("WebGLState: Invalid blending: ",O);break}y=null,x=null,M=null,T=null,S.set(0,0,0),A=0,_=O,b=he}return}fe=fe||xe,ce=ce||pe,$=$||Ie,(xe!==g||fe!==v)&&(r.blendEquationSeparate(ft[xe],ft[fe]),g=xe,v=fe),(pe!==y||Ie!==x||ce!==M||$!==T)&&(r.blendFuncSeparate(we[pe],we[Ie],we[ce],we[$]),y=pe,x=Ie,M=ce,T=$),(J.equals(S)===!1||V!==A)&&(r.blendColor(J.r,J.g,J.b,V),S.copy(J),A=V),_=O,b=!1}function Ze(O,xe){O.side===nn?ye(r.CULL_FACE):re(r.CULL_FACE);let pe=O.side===In;xe&&(pe=!pe),De(pe),O.blending===xo&&O.transparent===!1?qe(hr):qe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),o.setFunc(O.depthFunc),o.setTest(O.depthTest),o.setMask(O.depthWrite),s.setMask(O.colorWrite);let Ie=O.stencilWrite;a.setTest(Ie),Ie&&(a.setMask(O.stencilWriteMask),a.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),a.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),_t(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?re(r.SAMPLE_ALPHA_TO_COVERAGE):ye(r.SAMPLE_ALPHA_TO_COVERAGE)}function De(O){E!==O&&(O?r.frontFace(r.CW):r.frontFace(r.CCW),E=O)}function j(O){O!==vg?(re(r.CULL_FACE),O!==L&&(O===vp?r.cullFace(r.BACK):O===xg?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ye(r.CULL_FACE),L=O}function H(O){O!==R&&(z&&r.lineWidth(O),R=O)}function _t(O,xe,pe){O?(re(r.POLYGON_OFFSET_FILL),(D!==xe||k!==pe)&&(r.polygonOffset(xe,pe),D=xe,k=pe)):ye(r.POLYGON_OFFSET_FILL)}function ct(O){O?re(r.SCISSOR_TEST):ye(r.SCISSOR_TEST)}function Je(O){O===void 0&&(O=r.TEXTURE0+G-1),se!==O&&(r.activeTexture(O),se=O)}function Fe(O,xe,pe){pe===void 0&&(se===null?pe=r.TEXTURE0+G-1:pe=se);let Ie=N[pe];Ie===void 0&&(Ie={type:void 0,texture:void 0},N[pe]=Ie),(Ie.type!==O||Ie.texture!==xe)&&(se!==pe&&(r.activeTexture(pe),se=pe),r.bindTexture(O,xe||ie[O]),Ie.type=O,Ie.texture=xe)}function F(){let O=N[se];O!==void 0&&O.type!==void 0&&(r.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function w(){try{r.compressedTexImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function I(){try{r.compressedTexImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function U(){try{r.texSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function W(){try{r.texSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function X(){try{r.compressedTexSubImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function ge(){try{r.compressedTexSubImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function oe(){try{r.texStorage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function Pe(){try{r.texStorage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function Ae(){try{r.texImage2D(...arguments)}catch(O){gt("WebGLState:",O)}}function ue(){try{r.texImage3D(...arguments)}catch(O){gt("WebGLState:",O)}}function de(O){He.equals(O)===!1&&(r.scissor(O.x,O.y,O.z,O.w),He.copy(O))}function Le(O){Ye.equals(O)===!1&&(r.viewport(O.x,O.y,O.z,O.w),Ye.copy(O))}function Ne(O,xe){let pe=c.get(xe);pe===void 0&&(pe=new WeakMap,c.set(xe,pe));let Ie=pe.get(O);Ie===void 0&&(Ie=r.getUniformBlockIndex(xe,O.name),pe.set(O,Ie))}function _e(O,xe){let Ie=c.get(xe).get(O);l.get(xe)!==Ie&&(r.uniformBlockBinding(xe,Ie,O.__bindingPointIndex),l.set(xe,Ie))}function Ee(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),h={},se=null,N={},u={},f=new WeakMap,d=[],m=null,p=!1,_=null,g=null,y=null,x=null,v=null,M=null,T=null,S=new Me(0,0,0),A=0,b=!1,E=null,L=null,R=null,D=null,k=null,He.set(0,0,r.canvas.width,r.canvas.height),Ye.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:re,disable:ye,bindFramebuffer:Oe,drawBuffers:Ce,useProgram:je,setBlending:qe,setMaterial:Ze,setFlipSided:De,setCullFace:j,setLineWidth:H,setPolygonOffset:_t,setScissorTest:ct,activeTexture:Je,bindTexture:Fe,unbindTexture:F,compressedTexImage2D:w,compressedTexImage3D:I,texImage2D:Ae,texImage3D:ue,updateUBOMapping:Ne,uniformBlockBinding:_e,texStorage2D:oe,texStorage3D:Pe,texSubImage2D:U,texSubImage3D:W,compressedTexSubImage2D:X,compressedTexSubImage3D:ge,scissor:de,viewport:Le,reset:Ee}}function _S(r,e,t,n,i,s,o){let a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ve,h=new WeakMap,u,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(F,w){return d?new OffscreenCanvas(F,w):kl("canvas")}function p(F,w,I){let U=1,W=Fe(F);if((W.width>I||W.height>I)&&(U=I/Math.max(W.width,W.height)),U<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){let X=Math.floor(U*W.width),ge=Math.floor(U*W.height);u===void 0&&(u=m(X,ge));let oe=w?m(X,ge):u;return oe.width=X,oe.height=ge,oe.getContext("2d").drawImage(F,0,0,X,ge),ht("WebGLRenderer: Texture has been resized from ("+W.width+"x"+W.height+") to ("+X+"x"+ge+")."),oe}else return"data"in F&&ht("WebGLRenderer: Image in DataTexture is too big ("+W.width+"x"+W.height+")."),F;return F}function _(F){return F.generateMipmaps}function g(F){r.generateMipmap(F)}function y(F){return F.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?r.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function x(F,w,I,U,W=!1){if(F!==null){if(r[F]!==void 0)return r[F];ht("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let X=w;if(w===r.RED&&(I===r.FLOAT&&(X=r.R32F),I===r.HALF_FLOAT&&(X=r.R16F),I===r.UNSIGNED_BYTE&&(X=r.R8)),w===r.RED_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.R8UI),I===r.UNSIGNED_SHORT&&(X=r.R16UI),I===r.UNSIGNED_INT&&(X=r.R32UI),I===r.BYTE&&(X=r.R8I),I===r.SHORT&&(X=r.R16I),I===r.INT&&(X=r.R32I)),w===r.RG&&(I===r.FLOAT&&(X=r.RG32F),I===r.HALF_FLOAT&&(X=r.RG16F),I===r.UNSIGNED_BYTE&&(X=r.RG8)),w===r.RG_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RG8UI),I===r.UNSIGNED_SHORT&&(X=r.RG16UI),I===r.UNSIGNED_INT&&(X=r.RG32UI),I===r.BYTE&&(X=r.RG8I),I===r.SHORT&&(X=r.RG16I),I===r.INT&&(X=r.RG32I)),w===r.RGB_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RGB8UI),I===r.UNSIGNED_SHORT&&(X=r.RGB16UI),I===r.UNSIGNED_INT&&(X=r.RGB32UI),I===r.BYTE&&(X=r.RGB8I),I===r.SHORT&&(X=r.RGB16I),I===r.INT&&(X=r.RGB32I)),w===r.RGBA_INTEGER&&(I===r.UNSIGNED_BYTE&&(X=r.RGBA8UI),I===r.UNSIGNED_SHORT&&(X=r.RGBA16UI),I===r.UNSIGNED_INT&&(X=r.RGBA32UI),I===r.BYTE&&(X=r.RGBA8I),I===r.SHORT&&(X=r.RGBA16I),I===r.INT&&(X=r.RGBA32I)),w===r.RGB&&(I===r.UNSIGNED_INT_5_9_9_9_REV&&(X=r.RGB9_E5),I===r.UNSIGNED_INT_10F_11F_11F_REV&&(X=r.R11F_G11F_B10F)),w===r.RGBA){let ge=W?Ul:Lt.getTransfer(U);I===r.FLOAT&&(X=r.RGBA32F),I===r.HALF_FLOAT&&(X=r.RGBA16F),I===r.UNSIGNED_BYTE&&(X=ge===Vt?r.SRGB8_ALPHA8:r.RGBA8),I===r.UNSIGNED_SHORT_4_4_4_4&&(X=r.RGBA4),I===r.UNSIGNED_SHORT_5_5_5_1&&(X=r.RGB5_A1)}return(X===r.R16F||X===r.R32F||X===r.RG16F||X===r.RG32F||X===r.RGBA16F||X===r.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(F,w){let I;return F?w===null||w===Lr||w===za?I=r.DEPTH24_STENCIL8:w===dr?I=r.DEPTH32F_STENCIL8:w===Ha&&(I=r.DEPTH24_STENCIL8,ht("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):w===null||w===Lr||w===za?I=r.DEPTH_COMPONENT24:w===dr?I=r.DEPTH_COMPONENT32F:w===Ha&&(I=r.DEPTH_COMPONENT16),I}function M(F,w){return _(F)===!0||F.isFramebufferTexture&&F.minFilter!==en&&F.minFilter!==Zn?Math.log2(Math.max(w.width,w.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?w.mipmaps.length:1}function T(F){let w=F.target;w.removeEventListener("dispose",T),A(w),w.isVideoTexture&&h.delete(w)}function S(F){let w=F.target;w.removeEventListener("dispose",S),E(w)}function A(F){let w=n.get(F);if(w.__webglInit===void 0)return;let I=F.source,U=f.get(I);if(U){let W=U[w.__cacheKey];W.usedTimes--,W.usedTimes===0&&b(F),Object.keys(U).length===0&&f.delete(I)}n.remove(F)}function b(F){let w=n.get(F);r.deleteTexture(w.__webglTexture);let I=F.source,U=f.get(I);delete U[w.__cacheKey],o.memory.textures--}function E(F){let w=n.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),n.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let U=0;U<6;U++){if(Array.isArray(w.__webglFramebuffer[U]))for(let W=0;W<w.__webglFramebuffer[U].length;W++)r.deleteFramebuffer(w.__webglFramebuffer[U][W]);else r.deleteFramebuffer(w.__webglFramebuffer[U]);w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer[U])}else{if(Array.isArray(w.__webglFramebuffer))for(let U=0;U<w.__webglFramebuffer.length;U++)r.deleteFramebuffer(w.__webglFramebuffer[U]);else r.deleteFramebuffer(w.__webglFramebuffer);if(w.__webglDepthbuffer&&r.deleteRenderbuffer(w.__webglDepthbuffer),w.__webglMultisampledFramebuffer&&r.deleteFramebuffer(w.__webglMultisampledFramebuffer),w.__webglColorRenderbuffer)for(let U=0;U<w.__webglColorRenderbuffer.length;U++)w.__webglColorRenderbuffer[U]&&r.deleteRenderbuffer(w.__webglColorRenderbuffer[U]);w.__webglDepthRenderbuffer&&r.deleteRenderbuffer(w.__webglDepthRenderbuffer)}let I=F.textures;for(let U=0,W=I.length;U<W;U++){let X=n.get(I[U]);X.__webglTexture&&(r.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(I[U])}n.remove(F)}let L=0;function R(){L=0}function D(){let F=L;return F>=i.maxTextures&&ht("WebGLTextures: Trying to use "+F+" texture units while this GPU supports only "+i.maxTextures),L+=1,F}function k(F){let w=[];return w.push(F.wrapS),w.push(F.wrapT),w.push(F.wrapR||0),w.push(F.magFilter),w.push(F.minFilter),w.push(F.anisotropy),w.push(F.internalFormat),w.push(F.format),w.push(F.type),w.push(F.generateMipmaps),w.push(F.premultiplyAlpha),w.push(F.flipY),w.push(F.unpackAlignment),w.push(F.colorSpace),w.join()}function G(F,w){let I=n.get(F);if(F.isVideoTexture&&ct(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&I.__version!==F.version){let U=F.image;if(U===null)ht("WebGLRenderer: Texture marked for update but no image data found.");else if(U.complete===!1)ht("WebGLRenderer: Texture marked for update but image is incomplete");else{ie(I,F,w);return}}else F.isExternalTexture&&(I.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,I.__webglTexture,r.TEXTURE0+w)}function z(F,w){let I=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&I.__version!==F.version){ie(I,F,w);return}else F.isExternalTexture&&(I.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,I.__webglTexture,r.TEXTURE0+w)}function B(F,w){let I=n.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&I.__version!==F.version){ie(I,F,w);return}t.bindTexture(r.TEXTURE_3D,I.__webglTexture,r.TEXTURE0+w)}function K(F,w){let I=n.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&I.__version!==F.version){re(I,F,w);return}t.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture,r.TEXTURE0+w)}let se={[Aa]:r.REPEAT,[Br]:r.CLAMP_TO_EDGE,[Ju]:r.MIRRORED_REPEAT},N={[en]:r.NEAREST,[Hg]:r.NEAREST_MIPMAP_NEAREST,[bc]:r.NEAREST_MIPMAP_LINEAR,[Zn]:r.LINEAR,[Nh]:r.LINEAR_MIPMAP_NEAREST,[Vs]:r.LINEAR_MIPMAP_LINEAR},ae={[Gg]:r.NEVER,[$g]:r.ALWAYS,[Wg]:r.LESS,[Md]:r.LEQUAL,[Xg]:r.EQUAL,[Ed]:r.GEQUAL,[qg]:r.GREATER,[Yg]:r.NOTEQUAL};function Be(F,w){if(w.type===dr&&e.has("OES_texture_float_linear")===!1&&(w.magFilter===Zn||w.magFilter===Nh||w.magFilter===bc||w.magFilter===Vs||w.minFilter===Zn||w.minFilter===Nh||w.minFilter===bc||w.minFilter===Vs)&&ht("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(F,r.TEXTURE_WRAP_S,se[w.wrapS]),r.texParameteri(F,r.TEXTURE_WRAP_T,se[w.wrapT]),(F===r.TEXTURE_3D||F===r.TEXTURE_2D_ARRAY)&&r.texParameteri(F,r.TEXTURE_WRAP_R,se[w.wrapR]),r.texParameteri(F,r.TEXTURE_MAG_FILTER,N[w.magFilter]),r.texParameteri(F,r.TEXTURE_MIN_FILTER,N[w.minFilter]),w.compareFunction&&(r.texParameteri(F,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(F,r.TEXTURE_COMPARE_FUNC,ae[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(w.magFilter===en||w.minFilter!==bc&&w.minFilter!==Vs||w.type===dr&&e.has("OES_texture_float_linear")===!1)return;if(w.anisotropy>1||n.get(w).__currentAnisotropy){let I=e.get("EXT_texture_filter_anisotropic");r.texParameterf(F,I.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,i.getMaxAnisotropy())),n.get(w).__currentAnisotropy=w.anisotropy}}}function He(F,w){let I=!1;F.__webglInit===void 0&&(F.__webglInit=!0,w.addEventListener("dispose",T));let U=w.source,W=f.get(U);W===void 0&&(W={},f.set(U,W));let X=k(w);if(X!==F.__cacheKey){W[X]===void 0&&(W[X]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,I=!0),W[X].usedTimes++;let ge=W[F.__cacheKey];ge!==void 0&&(W[F.__cacheKey].usedTimes--,ge.usedTimes===0&&b(w)),F.__cacheKey=X,F.__webglTexture=W[X].texture}return I}function Ye(F,w,I){return Math.floor(Math.floor(F/I)/w)}function it(F,w,I,U){let X=F.updateRanges;if(X.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,w.width,w.height,I,U,w.data);else{X.sort((ue,de)=>ue.start-de.start);let ge=0;for(let ue=1;ue<X.length;ue++){let de=X[ge],Le=X[ue],Ne=de.start+de.count,_e=Ye(Le.start,w.width,4),Ee=Ye(de.start,w.width,4);Le.start<=Ne+1&&_e===Ee&&Ye(Le.start+Le.count-1,w.width,4)===_e?de.count=Math.max(de.count,Le.start+Le.count-de.start):(++ge,X[ge]=Le)}X.length=ge+1;let oe=r.getParameter(r.UNPACK_ROW_LENGTH),Pe=r.getParameter(r.UNPACK_SKIP_PIXELS),Ae=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,w.width);for(let ue=0,de=X.length;ue<de;ue++){let Le=X[ue],Ne=Math.floor(Le.start/4),_e=Math.ceil(Le.count/4),Ee=Ne%w.width,O=Math.floor(Ne/w.width),xe=_e,pe=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,Ee),r.pixelStorei(r.UNPACK_SKIP_ROWS,O),t.texSubImage2D(r.TEXTURE_2D,0,Ee,O,xe,pe,I,U,w.data)}F.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,oe),r.pixelStorei(r.UNPACK_SKIP_PIXELS,Pe),r.pixelStorei(r.UNPACK_SKIP_ROWS,Ae)}}function ie(F,w,I){let U=r.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(U=r.TEXTURE_2D_ARRAY),w.isData3DTexture&&(U=r.TEXTURE_3D);let W=He(F,w),X=w.source;t.bindTexture(U,F.__webglTexture,r.TEXTURE0+I);let ge=n.get(X);if(X.version!==ge.__version||W===!0){t.activeTexture(r.TEXTURE0+I);let oe=Lt.getPrimaries(Lt.workingColorSpace),Pe=w.colorSpace===fs?null:Lt.getPrimaries(w.colorSpace),Ae=w.colorSpace===fs||oe===Pe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ae);let ue=p(w.image,!1,i.maxTextureSize);ue=Je(w,ue);let de=s.convert(w.format,w.colorSpace),Le=s.convert(w.type),Ne=x(w.internalFormat,de,Le,w.colorSpace,w.isVideoTexture);Be(U,w);let _e,Ee=w.mipmaps,O=w.isVideoTexture!==!0,xe=ge.__version===void 0||W===!0,pe=X.dataReady,Ie=M(w,ue);if(w.isDepthTexture)Ne=v(w.format===Gs,w.type),xe&&(O?t.texStorage2D(r.TEXTURE_2D,1,Ne,ue.width,ue.height):t.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,de,Le,null));else if(w.isDataTexture)if(Ee.length>0){O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,Ee[0].width,Ee[0].height);for(let fe=0,ce=Ee.length;fe<ce;fe++)_e=Ee[fe],O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,Le,_e.data):t.texImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,de,Le,_e.data);w.generateMipmaps=!1}else O?(xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,ue.width,ue.height),pe&&it(w,ue,de,Le)):t.texImage2D(r.TEXTURE_2D,0,Ne,ue.width,ue.height,0,de,Le,ue.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){O&&xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,Ee[0].width,Ee[0].height,ue.depth);for(let fe=0,ce=Ee.length;fe<ce;fe++)if(_e=Ee[fe],w.format!==fr)if(de!==null)if(O){if(pe)if(w.layerUpdates.size>0){let $=Np(_e.width,_e.height,w.format,w.type);for(let J of w.layerUpdates){let V=_e.data.subarray(J*$/_e.data.BYTES_PER_ELEMENT,(J+1)*$/_e.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,J,_e.width,_e.height,1,de,V)}w.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,de,_e.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,fe,Ne,_e.width,_e.height,ue.depth,0,_e.data,0,0);else ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else O?pe&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,fe,0,0,0,_e.width,_e.height,ue.depth,de,Le,_e.data):t.texImage3D(r.TEXTURE_2D_ARRAY,fe,Ne,_e.width,_e.height,ue.depth,0,de,Le,_e.data)}else{O&&xe&&t.texStorage2D(r.TEXTURE_2D,Ie,Ne,Ee[0].width,Ee[0].height);for(let fe=0,ce=Ee.length;fe<ce;fe++)_e=Ee[fe],w.format!==fr?de!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,_e.data):t.compressedTexImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,_e.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,_e.width,_e.height,de,Le,_e.data):t.texImage2D(r.TEXTURE_2D,fe,Ne,_e.width,_e.height,0,de,Le,_e.data)}else if(w.isDataArrayTexture)if(O){if(xe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Ne,ue.width,ue.height,ue.depth),pe)if(w.layerUpdates.size>0){let fe=Np(ue.width,ue.height,w.format,w.type);for(let ce of w.layerUpdates){let $=ue.data.subarray(ce*fe/ue.data.BYTES_PER_ELEMENT,(ce+1)*fe/ue.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ce,ue.width,ue.height,1,de,Le,$)}w.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ue.width,ue.height,ue.depth,de,Le,ue.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Ne,ue.width,ue.height,ue.depth,0,de,Le,ue.data);else if(w.isData3DTexture)O?(xe&&t.texStorage3D(r.TEXTURE_3D,Ie,Ne,ue.width,ue.height,ue.depth),pe&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ue.width,ue.height,ue.depth,de,Le,ue.data)):t.texImage3D(r.TEXTURE_3D,0,Ne,ue.width,ue.height,ue.depth,0,de,Le,ue.data);else if(w.isFramebufferTexture){if(xe)if(O)t.texStorage2D(r.TEXTURE_2D,Ie,Ne,ue.width,ue.height);else{let fe=ue.width,ce=ue.height;for(let $=0;$<Ie;$++)t.texImage2D(r.TEXTURE_2D,$,Ne,fe,ce,0,de,Le,null),fe>>=1,ce>>=1}}else if(Ee.length>0){if(O&&xe){let fe=Fe(Ee[0]);t.texStorage2D(r.TEXTURE_2D,Ie,Ne,fe.width,fe.height)}for(let fe=0,ce=Ee.length;fe<ce;fe++)_e=Ee[fe],O?pe&&t.texSubImage2D(r.TEXTURE_2D,fe,0,0,de,Le,_e):t.texImage2D(r.TEXTURE_2D,fe,Ne,de,Le,_e);w.generateMipmaps=!1}else if(O){if(xe){let fe=Fe(ue);t.texStorage2D(r.TEXTURE_2D,Ie,Ne,fe.width,fe.height)}pe&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Le,ue)}else t.texImage2D(r.TEXTURE_2D,0,Ne,de,Le,ue);_(w)&&g(U),ge.__version=X.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function re(F,w,I){if(w.image.length!==6)return;let U=He(F,w),W=w.source;t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture,r.TEXTURE0+I);let X=n.get(W);if(W.version!==X.__version||U===!0){t.activeTexture(r.TEXTURE0+I);let ge=Lt.getPrimaries(Lt.workingColorSpace),oe=w.colorSpace===fs?null:Lt.getPrimaries(w.colorSpace),Pe=w.colorSpace===fs||ge===oe?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,w.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,w.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pe);let Ae=w.isCompressedTexture||w.image[0].isCompressedTexture,ue=w.image[0]&&w.image[0].isDataTexture,de=[];for(let ce=0;ce<6;ce++)!Ae&&!ue?de[ce]=p(w.image[ce],!0,i.maxCubemapSize):de[ce]=ue?w.image[ce].image:w.image[ce],de[ce]=Je(w,de[ce]);let Le=de[0],Ne=s.convert(w.format,w.colorSpace),_e=s.convert(w.type),Ee=x(w.internalFormat,Ne,_e,w.colorSpace),O=w.isVideoTexture!==!0,xe=X.__version===void 0||U===!0,pe=W.dataReady,Ie=M(w,Le);Be(r.TEXTURE_CUBE_MAP,w);let fe;if(Ae){O&&xe&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Ee,Le.width,Le.height);for(let ce=0;ce<6;ce++){fe=de[ce].mipmaps;for(let $=0;$<fe.length;$++){let J=fe[$];w.format!==fr?Ne!==null?O?pe&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$,0,0,J.width,J.height,Ne,J.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$,Ee,J.width,J.height,0,J.data):ht("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$,0,0,J.width,J.height,Ne,_e,J.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$,Ee,J.width,J.height,0,Ne,_e,J.data)}}}else{if(fe=w.mipmaps,O&&xe){fe.length>0&&Ie++;let ce=Fe(de[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,Ee,ce.width,ce.height)}for(let ce=0;ce<6;ce++)if(ue){O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,de[ce].width,de[ce].height,Ne,_e,de[ce].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,de[ce].width,de[ce].height,0,Ne,_e,de[ce].data);for(let $=0;$<fe.length;$++){let V=fe[$].image[ce].image;O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$+1,0,0,V.width,V.height,Ne,_e,V.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$+1,Ee,V.width,V.height,0,Ne,_e,V.data)}}else{O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,0,0,Ne,_e,de[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,Ee,Ne,_e,de[ce]);for(let $=0;$<fe.length;$++){let J=fe[$];O?pe&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$+1,0,0,Ne,_e,J.image[ce]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,$+1,Ee,Ne,_e,J.image[ce])}}}_(w)&&g(r.TEXTURE_CUBE_MAP),X.__version=W.version,w.onUpdate&&w.onUpdate(w)}F.__version=w.version}function ye(F,w,I,U,W,X){let ge=s.convert(I.format,I.colorSpace),oe=s.convert(I.type),Pe=x(I.internalFormat,ge,oe,I.colorSpace),Ae=n.get(w),ue=n.get(I);if(ue.__renderTarget=w,!Ae.__hasExternalTextures){let de=Math.max(1,w.width>>X),Le=Math.max(1,w.height>>X);W===r.TEXTURE_3D||W===r.TEXTURE_2D_ARRAY?t.texImage3D(W,X,Pe,de,Le,w.depth,0,ge,oe,null):t.texImage2D(W,X,Pe,de,Le,0,ge,oe,null)}t.bindFramebuffer(r.FRAMEBUFFER,F),_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,U,W,ue.__webglTexture,0,H(w)):(W===r.TEXTURE_2D||W>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&W<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,U,W,ue.__webglTexture,X),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Oe(F,w,I){if(r.bindRenderbuffer(r.RENDERBUFFER,F),w.depthBuffer){let U=w.depthTexture,W=U&&U.isDepthTexture?U.type:null,X=v(w.stencilBuffer,W),ge=w.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;_t(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(w),X,w.width,w.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(w),X,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,X,w.width,w.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,ge,r.RENDERBUFFER,F)}else{let U=w.textures;for(let W=0;W<U.length;W++){let X=U[W],ge=s.convert(X.format,X.colorSpace),oe=s.convert(X.type),Pe=x(X.internalFormat,ge,oe,X.colorSpace);_t(w)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,H(w),Pe,w.width,w.height):I?r.renderbufferStorageMultisample(r.RENDERBUFFER,H(w),Pe,w.width,w.height):r.renderbufferStorage(r.RENDERBUFFER,Pe,w.width,w.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function Ce(F,w,I){let U=w.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,F),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let W=n.get(w.depthTexture);if(W.__renderTarget=w,(!W.__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),U){if(W.__webglInit===void 0&&(W.__webglInit=!0,w.depthTexture.addEventListener("dispose",T)),W.__webglTexture===void 0){W.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,W.__webglTexture),Be(r.TEXTURE_CUBE_MAP,w.depthTexture);let Ae=s.convert(w.depthTexture.format),ue=s.convert(w.depthTexture.type),de;w.depthTexture.format===zr?de=r.DEPTH_COMPONENT24:w.depthTexture.format===Gs&&(de=r.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,de,w.width,w.height,0,Ae,ue,null)}}else G(w.depthTexture,0);let X=W.__webglTexture,ge=H(w),oe=U?r.TEXTURE_CUBE_MAP_POSITIVE_X+I:r.TEXTURE_2D,Pe=w.depthTexture.format===Gs?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(w.depthTexture.format===zr)_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,oe,X,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,oe,X,0);else if(w.depthTexture.format===Gs)_t(w)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,Pe,oe,X,0,ge):r.framebufferTexture2D(r.FRAMEBUFFER,Pe,oe,X,0);else throw new Error("Unknown depthTexture format")}function je(F){let w=n.get(F),I=F.isWebGLCubeRenderTarget===!0;if(w.__boundDepthTexture!==F.depthTexture){let U=F.depthTexture;if(w.__depthDisposeCallback&&w.__depthDisposeCallback(),U){let W=()=>{delete w.__boundDepthTexture,delete w.__depthDisposeCallback,U.removeEventListener("dispose",W)};U.addEventListener("dispose",W),w.__depthDisposeCallback=W}w.__boundDepthTexture=U}if(F.depthTexture&&!w.__autoAllocateDepthBuffer)if(I)for(let U=0;U<6;U++)Ce(w.__webglFramebuffer[U],F,U);else{let U=F.texture.mipmaps;U&&U.length>0?Ce(w.__webglFramebuffer[0],F,0):Ce(w.__webglFramebuffer,F,0)}else if(I){w.__webglDepthbuffer=[];for(let U=0;U<6;U++)if(t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[U]),w.__webglDepthbuffer[U]===void 0)w.__webglDepthbuffer[U]=r.createRenderbuffer(),Oe(w.__webglDepthbuffer[U],F,!1);else{let W=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer[U];r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,X)}}else{let U=F.texture.mipmaps;if(U&&U.length>0?t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer===void 0)w.__webglDepthbuffer=r.createRenderbuffer(),Oe(w.__webglDepthbuffer,F,!1);else{let W=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,X=w.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,X),r.framebufferRenderbuffer(r.FRAMEBUFFER,W,r.RENDERBUFFER,X)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function ft(F,w,I){let U=n.get(F);w!==void 0&&ye(U.__webglFramebuffer,F,F.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),I!==void 0&&je(F)}function we(F){let w=F.texture,I=n.get(F),U=n.get(w);F.addEventListener("dispose",S);let W=F.textures,X=F.isWebGLCubeRenderTarget===!0,ge=W.length>1;if(ge||(U.__webglTexture===void 0&&(U.__webglTexture=r.createTexture()),U.__version=w.version,o.memory.textures++),X){I.__webglFramebuffer=[];for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer[oe]=[];for(let Pe=0;Pe<w.mipmaps.length;Pe++)I.__webglFramebuffer[oe][Pe]=r.createFramebuffer()}else I.__webglFramebuffer[oe]=r.createFramebuffer()}else{if(w.mipmaps&&w.mipmaps.length>0){I.__webglFramebuffer=[];for(let oe=0;oe<w.mipmaps.length;oe++)I.__webglFramebuffer[oe]=r.createFramebuffer()}else I.__webglFramebuffer=r.createFramebuffer();if(ge)for(let oe=0,Pe=W.length;oe<Pe;oe++){let Ae=n.get(W[oe]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=r.createTexture(),o.memory.textures++)}if(F.samples>0&&_t(F)===!1){I.__webglMultisampledFramebuffer=r.createFramebuffer(),I.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,I.__webglMultisampledFramebuffer);for(let oe=0;oe<W.length;oe++){let Pe=W[oe];I.__webglColorRenderbuffer[oe]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,I.__webglColorRenderbuffer[oe]);let Ae=s.convert(Pe.format,Pe.colorSpace),ue=s.convert(Pe.type),de=x(Pe.internalFormat,Ae,ue,Pe.colorSpace,F.isXRRenderTarget===!0),Le=H(F);r.renderbufferStorageMultisample(r.RENDERBUFFER,Le,de,F.width,F.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+oe,r.RENDERBUFFER,I.__webglColorRenderbuffer[oe])}r.bindRenderbuffer(r.RENDERBUFFER,null),F.depthBuffer&&(I.__webglDepthRenderbuffer=r.createRenderbuffer(),Oe(I.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(X){t.bindTexture(r.TEXTURE_CUBE_MAP,U.__webglTexture),Be(r.TEXTURE_CUBE_MAP,w);for(let oe=0;oe<6;oe++)if(w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)ye(I.__webglFramebuffer[oe][Pe],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,Pe);else ye(I.__webglFramebuffer[oe],F,w,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+oe,0);_(w)&&g(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(ge){for(let oe=0,Pe=W.length;oe<Pe;oe++){let Ae=W[oe],ue=n.get(Ae),de=r.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(de=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(de,ue.__webglTexture),Be(de,Ae),ye(I.__webglFramebuffer,F,Ae,r.COLOR_ATTACHMENT0+oe,de,0),_(Ae)&&g(de)}t.unbindTexture()}else{let oe=r.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(oe=F.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(oe,U.__webglTexture),Be(oe,w),w.mipmaps&&w.mipmaps.length>0)for(let Pe=0;Pe<w.mipmaps.length;Pe++)ye(I.__webglFramebuffer[Pe],F,w,r.COLOR_ATTACHMENT0,oe,Pe);else ye(I.__webglFramebuffer,F,w,r.COLOR_ATTACHMENT0,oe,0);_(w)&&g(oe),t.unbindTexture()}F.depthBuffer&&je(F)}function qe(F){let w=F.textures;for(let I=0,U=w.length;I<U;I++){let W=w[I];if(_(W)){let X=y(F),ge=n.get(W).__webglTexture;t.bindTexture(X,ge),g(X),t.unbindTexture()}}}let Ze=[],De=[];function j(F){if(F.samples>0){if(_t(F)===!1){let w=F.textures,I=F.width,U=F.height,W=r.COLOR_BUFFER_BIT,X=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ge=n.get(F),oe=w.length>1;if(oe)for(let Ae=0;Ae<w.length;Ae++)t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,ge.__webglMultisampledFramebuffer);let Pe=F.texture.mipmaps;Pe&&Pe.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglFramebuffer);for(let Ae=0;Ae<w.length;Ae++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(W|=r.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(W|=r.STENCIL_BUFFER_BIT)),oe){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);let ue=n.get(w[Ae]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,ue,0)}r.blitFramebuffer(0,0,I,U,0,0,I,U,W,r.NEAREST),l===!0&&(Ze.length=0,De.length=0,Ze.push(r.COLOR_ATTACHMENT0+Ae),F.depthBuffer&&F.resolveDepthBuffer===!1&&(Ze.push(X),De.push(X),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,De)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ze))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),oe)for(let Ae=0;Ae<w.length;Ae++){t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.RENDERBUFFER,ge.__webglColorRenderbuffer[Ae]);let ue=n.get(w[Ae]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,ge.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ae,r.TEXTURE_2D,ue,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,ge.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.resolveDepthBuffer===!1&&l){let w=F.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[w])}}}function H(F){return Math.min(i.maxSamples,F.samples)}function _t(F){let w=n.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function ct(F){let w=o.render.frame;h.get(F)!==w&&(h.set(F,w),F.update())}function Je(F,w){let I=F.colorSpace,U=F.format,W=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||I!==wr&&I!==fs&&(Lt.getTransfer(I)===Vt?(U!==fr||W!==Di)&&ht("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):gt("WebGLTextures: Unsupported texture color space:",I)),w}function Fe(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(c.width=F.naturalWidth||F.width,c.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(c.width=F.displayWidth,c.height=F.displayHeight):(c.width=F.width,c.height=F.height),c}this.allocateTextureUnit=D,this.resetTextureUnits=R,this.setTexture2D=G,this.setTexture2DArray=z,this.setTexture3D=B,this.setTextureCube=K,this.rebindTextures=ft,this.setupRenderTarget=we,this.updateRenderTargetMipmap=qe,this.updateMultisampleRenderTarget=j,this.setupDepthRenderbuffer=je,this.setupFrameBufferTexture=ye,this.useMultisampledRTT=_t,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function vS(r,e){function t(n,i=fs){let s,o=Lt.getTransfer(i);if(n===Di)return r.UNSIGNED_BYTE;if(n===Oh)return r.UNSIGNED_SHORT_4_4_4_4;if(n===kh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Tp)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Sp)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Mp)return r.BYTE;if(n===Ep)return r.SHORT;if(n===Ha)return r.UNSIGNED_SHORT;if(n===Uh)return r.INT;if(n===Lr)return r.UNSIGNED_INT;if(n===dr)return r.FLOAT;if(n===wn)return r.HALF_FLOAT;if(n===wp)return r.ALPHA;if(n===Ap)return r.RGB;if(n===fr)return r.RGBA;if(n===zr)return r.DEPTH_COMPONENT;if(n===Gs)return r.DEPTH_STENCIL;if(n===Bh)return r.RED;if(n===Hh)return r.RED_INTEGER;if(n===Co)return r.RG;if(n===zh)return r.RG_INTEGER;if(n===Vh)return r.RGBA_INTEGER;if(n===Mc||n===Ec||n===Tc||n===Sc)if(o===Vt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ec)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Tc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Sc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Gh||n===Wh||n===Xh||n===qh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Gh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Wh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Xh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===qh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Yh||n===$h||n===Zh||n===Jh||n===Kh||n===jh||n===Qh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Yh||n===$h)return o===Vt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Zh)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Jh)return s.COMPRESSED_R11_EAC;if(n===Kh)return s.COMPRESSED_SIGNED_R11_EAC;if(n===jh)return s.COMPRESSED_RG11_EAC;if(n===Qh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===ed||n===td||n===nd||n===id||n===rd||n===sd||n===od||n===ad||n===ld||n===cd||n===ud||n===hd||n===dd||n===fd)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===ed)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===td)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===id)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===sd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===od)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===ad)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ld)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ud)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===hd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===dd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===fd)return o===Vt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===pd||n===md||n===gd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===pd)return o===Vt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===md)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===_d||n===vd||n===xd||n===yd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===_d)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vd)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}var xS=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yS=`
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

}`,Zp=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let n=new Kl(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new Ot({vertexShader:xS,fragmentShader:yS,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ue(new On(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Jp=class extends us{constructor(e,t){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,d=null,m=null,p=typeof XRWebGLBinding<"u",_=new Zp,g={},y=t.getContextAttributes(),x=null,v=null,M=[],T=[],S=new ve,A=null,b=new Ht;b.viewport=new tn;let E=new Ht;E.viewport=new tn;let L=[b,E],R=new Eh,D=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ie){let re=M[ie];return re===void 0&&(re=new Da,M[ie]=re),re.getTargetRaySpace()},this.getControllerGrip=function(ie){let re=M[ie];return re===void 0&&(re=new Da,M[ie]=re),re.getGripSpace()},this.getHand=function(ie){let re=M[ie];return re===void 0&&(re=new Da,M[ie]=re),re.getHandSpace()};function G(ie){let re=T.indexOf(ie.inputSource);if(re===-1)return;let ye=M[re];ye!==void 0&&(ye.update(ie.inputSource,ie.frame,c||o),ye.dispatchEvent({type:ie.type,data:ie.inputSource}))}function z(){i.removeEventListener("select",G),i.removeEventListener("selectstart",G),i.removeEventListener("selectend",G),i.removeEventListener("squeeze",G),i.removeEventListener("squeezestart",G),i.removeEventListener("squeezeend",G),i.removeEventListener("end",z),i.removeEventListener("inputsourceschange",B);for(let ie=0;ie<M.length;ie++){let re=T[ie];re!==null&&(T[ie]=null,M[ie].disconnect(re))}D=null,k=null,_.reset();for(let ie in g)delete g[ie];e.setRenderTarget(x),d=null,f=null,u=null,i=null,v=null,it.stop(),n.isPresenting=!1,e.setPixelRatio(A),e.setSize(S.width,S.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ie){s=ie,n.isPresenting===!0&&ht("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ie){a=ie,n.isPresenting===!0&&ht("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ie){c=ie},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return u===null&&p&&(u=new XRWebGLBinding(i,t)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(ie){if(i=ie,i!==null){if(x=e.getRenderTarget(),i.addEventListener("select",G),i.addEventListener("selectstart",G),i.addEventListener("selectend",G),i.addEventListener("squeeze",G),i.addEventListener("squeezestart",G),i.addEventListener("squeezeend",G),i.addEventListener("end",z),i.addEventListener("inputsourceschange",B),y.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(S),p&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Oe=null,Ce=null;y.depth&&(Ce=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=y.stencil?Gs:zr,Oe=y.stencil?za:Lr);let je={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:s};u=this.getBinding(),f=u.createProjectionLayer(je),i.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),v=new gn(f.textureWidth,f.textureHeight,{format:fr,type:Di,depthTexture:new lr(f.textureWidth,f.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ye={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,t,ye),i.updateRenderState({baseLayer:d}),e.setPixelRatio(1),e.setSize(d.framebufferWidth,d.framebufferHeight,!1),v=new gn(d.framebufferWidth,d.framebufferHeight,{format:fr,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),it.setContext(i),it.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function B(ie){for(let re=0;re<ie.removed.length;re++){let ye=ie.removed[re],Oe=T.indexOf(ye);Oe>=0&&(T[Oe]=null,M[Oe].disconnect(ye))}for(let re=0;re<ie.added.length;re++){let ye=ie.added[re],Oe=T.indexOf(ye);if(Oe===-1){for(let je=0;je<M.length;je++)if(je>=T.length){T.push(ye),Oe=je;break}else if(T[je]===null){T[je]=ye,Oe=je;break}if(Oe===-1)break}let Ce=M[Oe];Ce&&Ce.connect(ye)}}let K=new P,se=new P;function N(ie,re,ye){K.setFromMatrixPosition(re.matrixWorld),se.setFromMatrixPosition(ye.matrixWorld);let Oe=K.distanceTo(se),Ce=re.projectionMatrix.elements,je=ye.projectionMatrix.elements,ft=Ce[14]/(Ce[10]-1),we=Ce[14]/(Ce[10]+1),qe=(Ce[9]+1)/Ce[5],Ze=(Ce[9]-1)/Ce[5],De=(Ce[8]-1)/Ce[0],j=(je[8]+1)/je[0],H=ft*De,_t=ft*j,ct=Oe/(-De+j),Je=ct*-De;if(re.matrixWorld.decompose(ie.position,ie.quaternion,ie.scale),ie.translateX(Je),ie.translateZ(ct),ie.matrixWorld.compose(ie.position,ie.quaternion,ie.scale),ie.matrixWorldInverse.copy(ie.matrixWorld).invert(),Ce[10]===-1)ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{let Fe=ft+ct,F=we+ct,w=H-Je,I=_t+(Oe-Je),U=qe*we/F*Fe,W=Ze*we/F*Fe;ie.projectionMatrix.makePerspective(w,I,U,W,Fe,F),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert()}}function ae(ie,re){re===null?ie.matrixWorld.copy(ie.matrix):ie.matrixWorld.multiplyMatrices(re.matrixWorld,ie.matrix),ie.matrixWorldInverse.copy(ie.matrixWorld).invert()}this.updateCamera=function(ie){if(i===null)return;let re=ie.near,ye=ie.far;_.texture!==null&&(_.depthNear>0&&(re=_.depthNear),_.depthFar>0&&(ye=_.depthFar)),R.near=E.near=b.near=re,R.far=E.far=b.far=ye,(D!==R.near||k!==R.far)&&(i.updateRenderState({depthNear:R.near,depthFar:R.far}),D=R.near,k=R.far),R.layers.mask=ie.layers.mask|6,b.layers.mask=R.layers.mask&3,E.layers.mask=R.layers.mask&5;let Oe=ie.parent,Ce=R.cameras;ae(R,Oe);for(let je=0;je<Ce.length;je++)ae(Ce[je],Oe);Ce.length===2?N(R,b,E):R.projectionMatrix.copy(b.projectionMatrix),Be(ie,R,Oe)};function Be(ie,re,ye){ye===null?ie.matrix.copy(re.matrixWorld):(ie.matrix.copy(ye.matrixWorld),ie.matrix.invert(),ie.matrix.multiply(re.matrixWorld)),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.updateMatrixWorld(!0),ie.projectionMatrix.copy(re.projectionMatrix),ie.projectionMatrixInverse.copy(re.projectionMatrixInverse),ie.isPerspectiveCamera&&(ie.fov=Pa*2*Math.atan(1/ie.projectionMatrix.elements[5]),ie.zoom=1)}this.getCamera=function(){return R},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(ie){l=ie,f!==null&&(f.fixedFoveation=ie),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=ie)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(R)},this.getCameraTexture=function(ie){return g[ie]};let He=null;function Ye(ie,re){if(h=re.getViewerPose(c||o),m=re,h!==null){let ye=h.views;d!==null&&(e.setRenderTargetFramebuffer(v,d.framebuffer),e.setRenderTarget(v));let Oe=!1;ye.length!==R.cameras.length&&(R.cameras.length=0,Oe=!0);for(let we=0;we<ye.length;we++){let qe=ye[we],Ze=null;if(d!==null)Ze=d.getViewport(qe);else{let j=u.getViewSubImage(f,qe);Ze=j.viewport,we===0&&(e.setRenderTargetTextures(v,j.colorTexture,j.depthStencilTexture),e.setRenderTarget(v))}let De=L[we];De===void 0&&(De=new Ht,De.layers.enable(we),De.viewport=new tn,L[we]=De),De.matrix.fromArray(qe.transform.matrix),De.matrix.decompose(De.position,De.quaternion,De.scale),De.projectionMatrix.fromArray(qe.projectionMatrix),De.projectionMatrixInverse.copy(De.projectionMatrix).invert(),De.viewport.set(Ze.x,Ze.y,Ze.width,Ze.height),we===0&&(R.matrix.copy(De.matrix),R.matrix.decompose(R.position,R.quaternion,R.scale)),Oe===!0&&R.cameras.push(De)}let Ce=i.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&p){u=n.getBinding();let we=u.getDepthInformation(ye[0]);we&&we.isValid&&we.texture&&_.init(we,i.renderState)}if(Ce&&Ce.includes("camera-access")&&p){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<ye.length;we++){let qe=ye[we].camera;if(qe){let Ze=g[qe];Ze||(Ze=new Kl,g[qe]=Ze);let De=u.getCameraImage(qe);Ze.sourceTexture=De}}}}for(let ye=0;ye<M.length;ye++){let Oe=T[ye],Ce=M[ye];Oe!==null&&Ce!==void 0&&Ce.update(Oe,re,c||o)}He&&He(ie,re),re.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:re}),m=null}let it=new w_;it.setAnimationLoop(Ye),this.setAnimationLoop=function(ie){He=ie},this.dispose=function(){}}},Do=new Xn,bS=new Pt;function MS(r,e){function t(_,g){_.matrixAutoUpdate===!0&&_.updateMatrix(),g.value.copy(_.matrix)}function n(_,g){g.color.getRGB(_.fogColor.value,Ip(r)),g.isFog?(_.fogNear.value=g.near,_.fogFar.value=g.far):g.isFogExp2&&(_.fogDensity.value=g.density)}function i(_,g,y,x,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?s(_,g):g.isMeshToonMaterial?(s(_,g),u(_,g)):g.isMeshPhongMaterial?(s(_,g),h(_,g)):g.isMeshStandardMaterial?(s(_,g),f(_,g),g.isMeshPhysicalMaterial&&d(_,g,v)):g.isMeshMatcapMaterial?(s(_,g),m(_,g)):g.isMeshDepthMaterial?s(_,g):g.isMeshDistanceMaterial?(s(_,g),p(_,g)):g.isMeshNormalMaterial?s(_,g):g.isLineBasicMaterial?(o(_,g),g.isLineDashedMaterial&&a(_,g)):g.isPointsMaterial?l(_,g,y,x):g.isSpriteMaterial?c(_,g):g.isShadowMaterial?(_.color.value.copy(g.color),_.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function s(_,g){_.opacity.value=g.opacity,g.color&&_.diffuse.value.copy(g.color),g.emissive&&_.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.bumpMap&&(_.bumpMap.value=g.bumpMap,t(g.bumpMap,_.bumpMapTransform),_.bumpScale.value=g.bumpScale,g.side===In&&(_.bumpScale.value*=-1)),g.normalMap&&(_.normalMap.value=g.normalMap,t(g.normalMap,_.normalMapTransform),_.normalScale.value.copy(g.normalScale),g.side===In&&_.normalScale.value.negate()),g.displacementMap&&(_.displacementMap.value=g.displacementMap,t(g.displacementMap,_.displacementMapTransform),_.displacementScale.value=g.displacementScale,_.displacementBias.value=g.displacementBias),g.emissiveMap&&(_.emissiveMap.value=g.emissiveMap,t(g.emissiveMap,_.emissiveMapTransform)),g.specularMap&&(_.specularMap.value=g.specularMap,t(g.specularMap,_.specularMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest);let y=e.get(g),x=y.envMap,v=y.envMapRotation;x&&(_.envMap.value=x,Do.copy(v),Do.x*=-1,Do.y*=-1,Do.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(Do.y*=-1,Do.z*=-1),_.envMapRotation.value.setFromMatrix4(bS.makeRotationFromEuler(Do)),_.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=g.reflectivity,_.ior.value=g.ior,_.refractionRatio.value=g.refractionRatio),g.lightMap&&(_.lightMap.value=g.lightMap,_.lightMapIntensity.value=g.lightMapIntensity,t(g.lightMap,_.lightMapTransform)),g.aoMap&&(_.aoMap.value=g.aoMap,_.aoMapIntensity.value=g.aoMapIntensity,t(g.aoMap,_.aoMapTransform))}function o(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform))}function a(_,g){_.dashSize.value=g.dashSize,_.totalSize.value=g.dashSize+g.gapSize,_.scale.value=g.scale}function l(_,g,y,x){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.size.value=g.size*y,_.scale.value=x*.5,g.map&&(_.map.value=g.map,t(g.map,_.uvTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function c(_,g){_.diffuse.value.copy(g.color),_.opacity.value=g.opacity,_.rotation.value=g.rotation,g.map&&(_.map.value=g.map,t(g.map,_.mapTransform)),g.alphaMap&&(_.alphaMap.value=g.alphaMap,t(g.alphaMap,_.alphaMapTransform)),g.alphaTest>0&&(_.alphaTest.value=g.alphaTest)}function h(_,g){_.specular.value.copy(g.specular),_.shininess.value=Math.max(g.shininess,1e-4)}function u(_,g){g.gradientMap&&(_.gradientMap.value=g.gradientMap)}function f(_,g){_.metalness.value=g.metalness,g.metalnessMap&&(_.metalnessMap.value=g.metalnessMap,t(g.metalnessMap,_.metalnessMapTransform)),_.roughness.value=g.roughness,g.roughnessMap&&(_.roughnessMap.value=g.roughnessMap,t(g.roughnessMap,_.roughnessMapTransform)),g.envMap&&(_.envMapIntensity.value=g.envMapIntensity)}function d(_,g,y){_.ior.value=g.ior,g.sheen>0&&(_.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),_.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(_.sheenColorMap.value=g.sheenColorMap,t(g.sheenColorMap,_.sheenColorMapTransform)),g.sheenRoughnessMap&&(_.sheenRoughnessMap.value=g.sheenRoughnessMap,t(g.sheenRoughnessMap,_.sheenRoughnessMapTransform))),g.clearcoat>0&&(_.clearcoat.value=g.clearcoat,_.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(_.clearcoatMap.value=g.clearcoatMap,t(g.clearcoatMap,_.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,t(g.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(_.clearcoatNormalMap.value=g.clearcoatNormalMap,t(g.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===In&&_.clearcoatNormalScale.value.negate())),g.dispersion>0&&(_.dispersion.value=g.dispersion),g.iridescence>0&&(_.iridescence.value=g.iridescence,_.iridescenceIOR.value=g.iridescenceIOR,_.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(_.iridescenceMap.value=g.iridescenceMap,t(g.iridescenceMap,_.iridescenceMapTransform)),g.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=g.iridescenceThicknessMap,t(g.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),g.transmission>0&&(_.transmission.value=g.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),g.transmissionMap&&(_.transmissionMap.value=g.transmissionMap,t(g.transmissionMap,_.transmissionMapTransform)),_.thickness.value=g.thickness,g.thicknessMap&&(_.thicknessMap.value=g.thicknessMap,t(g.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=g.attenuationDistance,_.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(_.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(_.anisotropyMap.value=g.anisotropyMap,t(g.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=g.specularIntensity,_.specularColor.value.copy(g.specularColor),g.specularColorMap&&(_.specularColorMap.value=g.specularColorMap,t(g.specularColorMap,_.specularColorMapTransform)),g.specularIntensityMap&&(_.specularIntensityMap.value=g.specularIntensityMap,t(g.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,g){g.matcap&&(_.matcap.value=g.matcap)}function p(_,g){let y=e.get(g).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function ES(r,e,t,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){let v=x.program;n.uniformBlockBinding(y,v)}function c(y,x){let v=i[y.id];v===void 0&&(m(y),v=h(y),i[y.id]=v,y.addEventListener("dispose",_));let M=x.program;n.updateUBOMapping(y,M);let T=e.render.frame;s[y.id]!==T&&(f(y),s[y.id]=T)}function h(y){let x=u();y.__bindingPointIndex=x;let v=r.createBuffer(),M=y.__size,T=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,v),r.bufferData(r.UNIFORM_BUFFER,M,T),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,x,v),v}function u(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return gt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let x=i[y.id],v=y.uniforms,M=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,x);for(let T=0,S=v.length;T<S;T++){let A=Array.isArray(v[T])?v[T]:[v[T]];for(let b=0,E=A.length;b<E;b++){let L=A[b];if(d(L,T,b,M)===!0){let R=L.__offset,D=Array.isArray(L.value)?L.value:[L.value],k=0;for(let G=0;G<D.length;G++){let z=D[G],B=p(z);typeof z=="number"||typeof z=="boolean"?(L.__data[0]=z,r.bufferSubData(r.UNIFORM_BUFFER,R+k,L.__data)):z.isMatrix3?(L.__data[0]=z.elements[0],L.__data[1]=z.elements[1],L.__data[2]=z.elements[2],L.__data[3]=0,L.__data[4]=z.elements[3],L.__data[5]=z.elements[4],L.__data[6]=z.elements[5],L.__data[7]=0,L.__data[8]=z.elements[6],L.__data[9]=z.elements[7],L.__data[10]=z.elements[8],L.__data[11]=0):(z.toArray(L.__data,k),k+=B.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,R,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,x,v,M){let T=y.value,S=x+"_"+v;if(M[S]===void 0)return typeof T=="number"||typeof T=="boolean"?M[S]=T:M[S]=T.clone(),!0;{let A=M[S];if(typeof T=="number"||typeof T=="boolean"){if(A!==T)return M[S]=T,!0}else if(A.equals(T)===!1)return A.copy(T),!0}return!1}function m(y){let x=y.uniforms,v=0,M=16;for(let S=0,A=x.length;S<A;S++){let b=Array.isArray(x[S])?x[S]:[x[S]];for(let E=0,L=b.length;E<L;E++){let R=b[E],D=Array.isArray(R.value)?R.value:[R.value];for(let k=0,G=D.length;k<G;k++){let z=D[k],B=p(z),K=v%M,se=K%B.boundary,N=K+se;v+=se,N!==0&&M-N<B.storage&&(v+=M-N),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=v,v+=B.storage}}}let T=v%M;return T>0&&(v+=M-T),y.__size=v,y.__cache={},this}function p(y){let x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?ht("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ht("WebGLRenderer: Unsupported uniform value type.",y),x}function _(y){let x=y.target;x.removeEventListener("dispose",_);let v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),r.deleteBuffer(i[x.id]),delete i[x.id],delete s[x.id]}function g(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:g}}var TS=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Wr=null;function SS(){return Wr===null&&(Wr=new $l(TS,16,16,Co,wn),Wr.name="DFG_LUT",Wr.minFilter=Zn,Wr.magFilter=Zn,Wr.wrapS=Br,Wr.wrapT=Br,Wr.generateMipmaps=!1,Wr.needsUpdate=!0),Wr}var li=class{constructor(e={}){let{canvas:t=Zg(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:d=Di}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let p=d,_=new Set([Vh,zh,Hh]),g=new Set([Di,Lr,Ha,za,Oh,kh]),y=new Uint32Array(4),x=new Int32Array(4),v=null,M=null,T=[],S=[],A=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Ir,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let b=this,E=!1;this._outputColorSpace=Kt;let L=0,R=0,D=null,k=-1,G=null,z=new tn,B=new tn,K=null,se=new Me(0),N=0,ae=t.width,Be=t.height,He=1,Ye=null,it=null,ie=new tn(0,0,ae,Be),re=new tn(0,0,ae,Be),ye=!1,Oe=new Fa,Ce=!1,je=!1,ft=new Pt,we=new P,qe=new tn,Ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},De=!1;function j(){return D===null?He:1}let H=n;function _t(C,Y){return t.getContext(C,Y)}try{let C={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"182"}`),t.addEventListener("webglcontextlost",J,!1),t.addEventListener("webglcontextrestored",V,!1),t.addEventListener("webglcontextcreationerror",he,!1),H===null){let Y="webgl2";if(H=_t(Y,C),H===null)throw _t(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(C){throw gt("WebGLRenderer: "+C.message),C}let ct,Je,Fe,F,w,I,U,W,X,ge,oe,Pe,Ae,ue,de,Le,Ne,_e,Ee,O,xe,pe,Ie,fe;function ce(){ct=new LE(H),ct.init(),pe=new vS(H,ct),Je=new EE(H,ct,e,pe),Fe=new gS(H,ct),Je.reversedDepthBuffer&&f&&Fe.buffers.depth.setReversed(!0),F=new NE(H),w=new tS,I=new _S(H,ct,Fe,w,Je,pe,F),U=new SE(b),W=new IE(b),X=new B1(H),Ie=new bE(H,X),ge=new DE(H,X,F,Ie),oe=new OE(H,ge,X,F),Ee=new UE(H,Je,I),Le=new TE(w),Pe=new eS(b,U,W,ct,Je,Ie,Le),Ae=new MS(b,w),ue=new iS,de=new cS(ct),_e=new yE(b,U,W,Fe,oe,m,l),Ne=new pS(b,oe,Je),fe=new ES(H,F,Je,Fe),O=new ME(H,ct,F),xe=new FE(H,ct,F),F.programs=Pe.programs,b.capabilities=Je,b.extensions=ct,b.properties=w,b.renderLists=ue,b.shadowMap=Ne,b.state=Fe,b.info=F}ce(),p!==Di&&(A=new BE(p,t.width,t.height,i,s));let $=new Jp(b,H);this.xr=$,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){let C=ct.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){let C=ct.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return He},this.setPixelRatio=function(C){C!==void 0&&(He=C,this.setSize(ae,Be,!1))},this.getSize=function(C){return C.set(ae,Be)},this.setSize=function(C,Y,te=!0){if($.isPresenting){ht("WebGLRenderer: Can't change size while VR device is presenting.");return}ae=C,Be=Y,t.width=Math.floor(C*He),t.height=Math.floor(Y*He),te===!0&&(t.style.width=C+"px",t.style.height=Y+"px"),A!==null&&A.setSize(t.width,t.height),this.setViewport(0,0,C,Y)},this.getDrawingBufferSize=function(C){return C.set(ae*He,Be*He).floor()},this.setDrawingBufferSize=function(C,Y,te){ae=C,Be=Y,He=te,t.width=Math.floor(C*te),t.height=Math.floor(Y*te),this.setViewport(0,0,C,Y)},this.setEffects=function(C){if(p===Di){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let Y=0;Y<C.length;Y++)if(C[Y].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}A.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(z)},this.getViewport=function(C){return C.copy(ie)},this.setViewport=function(C,Y,te,ne){C.isVector4?ie.set(C.x,C.y,C.z,C.w):ie.set(C,Y,te,ne),Fe.viewport(z.copy(ie).multiplyScalar(He).round())},this.getScissor=function(C){return C.copy(re)},this.setScissor=function(C,Y,te,ne){C.isVector4?re.set(C.x,C.y,C.z,C.w):re.set(C,Y,te,ne),Fe.scissor(B.copy(re).multiplyScalar(He).round())},this.getScissorTest=function(){return ye},this.setScissorTest=function(C){Fe.setScissorTest(ye=C)},this.setOpaqueSort=function(C){Ye=C},this.setTransparentSort=function(C){it=C},this.getClearColor=function(C){return C.copy(_e.getClearColor())},this.setClearColor=function(){_e.setClearColor(...arguments)},this.getClearAlpha=function(){return _e.getClearAlpha()},this.setClearAlpha=function(){_e.setClearAlpha(...arguments)},this.clear=function(C=!0,Y=!0,te=!0){let ne=0;if(C){let Q=!1;if(D!==null){let Re=D.texture.format;Q=_.has(Re)}if(Q){let Re=D.texture.type,ze=g.has(Re),Z=_e.getClearColor(),q=_e.getClearAlpha(),me=Z.r,ke=Z.g,Ke=Z.b;ze?(y[0]=me,y[1]=ke,y[2]=Ke,y[3]=q,H.clearBufferuiv(H.COLOR,0,y)):(x[0]=me,x[1]=ke,x[2]=Ke,x[3]=q,H.clearBufferiv(H.COLOR,0,x))}else ne|=H.COLOR_BUFFER_BIT}Y&&(ne|=H.DEPTH_BUFFER_BIT),te&&(ne|=H.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),H.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",J,!1),t.removeEventListener("webglcontextrestored",V,!1),t.removeEventListener("webglcontextcreationerror",he,!1),_e.dispose(),ue.dispose(),de.dispose(),w.dispose(),U.dispose(),W.dispose(),oe.dispose(),Ie.dispose(),fe.dispose(),Pe.dispose(),$.dispose(),$.removeEventListener("sessionstart",zt),$.removeEventListener("sessionend",pt),le.stop()};function J(C){C.preventDefault(),Bl("WebGLRenderer: Context Lost."),E=!0}function V(){Bl("WebGLRenderer: Context Restored."),E=!1;let C=F.autoReset,Y=Ne.enabled,te=Ne.autoUpdate,ne=Ne.needsUpdate,Q=Ne.type;ce(),F.autoReset=C,Ne.enabled=Y,Ne.autoUpdate=te,Ne.needsUpdate=ne,Ne.type=Q}function he(C){gt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function Te(C){let Y=C.target;Y.removeEventListener("dispose",Te),st(Y)}function st(C){Se(C),w.remove(C)}function Se(C){let Y=w.get(C).programs;Y!==void 0&&(Y.forEach(function(te){Pe.releaseProgram(te)}),C.isShaderMaterial&&Pe.releaseShaderCache(C))}this.renderBufferDirect=function(C,Y,te,ne,Q,Re){Y===null&&(Y=Ze);let ze=Q.isMesh&&Q.matrixWorld.determinant()<0,Z=Gt(C,Y,te,ne,Q);Fe.setMaterial(ne,ze);let q=te.index,me=1;if(ne.wireframe===!0){if(q=ge.getWireframeAttribute(te),q===void 0)return;me=2}let ke=te.drawRange,Ke=te.attributes.position,mt=ke.start*me,Dt=(ke.start+ke.count)*me;Re!==null&&(mt=Math.max(mt,Re.start*me),Dt=Math.min(Dt,(Re.start+Re.count)*me)),q!==null?(mt=Math.max(mt,0),Dt=Math.min(Dt,q.count)):Ke!=null&&(mt=Math.max(mt,0),Dt=Math.min(Dt,Ke.count));let on=Dt-mt;if(on<0||on===1/0)return;Ie.setup(Q,ne,Z,te,q);let $t,kt=O;if(q!==null&&($t=X.get(q),kt=xe,kt.setIndex($t)),Q.isMesh)ne.wireframe===!0?(Fe.setLineWidth(ne.wireframeLinewidth*j()),kt.setMode(H.LINES)):kt.setMode(H.TRIANGLES);else if(Q.isLine){let ot=ne.linewidth;ot===void 0&&(ot=1),Fe.setLineWidth(ot*j()),Q.isLineSegments?kt.setMode(H.LINES):Q.isLineLoop?kt.setMode(H.LINE_LOOP):kt.setMode(H.LINE_STRIP)}else Q.isPoints?kt.setMode(H.POINTS):Q.isSprite&&kt.setMode(H.TRIANGLES);if(Q.isBatchedMesh)if(Q._multiDrawInstances!==null)Ca("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),kt.renderMultiDrawInstances(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount,Q._multiDrawInstances);else if(ct.get("WEBGL_multi_draw"))kt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{let ot=Q._multiDrawStarts,Bt=Q._multiDrawCounts,be=Q._multiDrawCount,at=q?X.get(q).bytesPerElement:1,an=w.get(ne).currentProgram.getUniforms();for(let Ft=0;Ft<be;Ft++)an.setValue(H,"_gl_DrawID",Ft),kt.render(ot[Ft]/at,Bt[Ft])}else if(Q.isInstancedMesh)kt.renderInstances(mt,on,Q.count);else if(te.isInstancedBufferGeometry){let ot=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,Bt=Math.min(te.instanceCount,ot);kt.renderInstances(mt,on,Bt)}else kt.render(mt,on)};function tt(C,Y,te){C.transparent===!0&&C.side===nn&&C.forceSinglePass===!1?(C.side=In,C.needsUpdate=!0,Ct(C,Y,te),C.side=cs,C.needsUpdate=!0,Ct(C,Y,te),C.side=nn):Ct(C,Y,te)}this.compile=function(C,Y,te=null){te===null&&(te=C),M=de.get(te),M.init(Y),S.push(M),te.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),C!==te&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(Y.layers)&&(M.pushLight(Q),Q.castShadow&&M.pushShadow(Q))}),M.setupLights();let ne=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;let Re=Q.material;if(Re)if(Array.isArray(Re))for(let ze=0;ze<Re.length;ze++){let Z=Re[ze];tt(Z,te,Q),ne.add(Z)}else tt(Re,te,Q),ne.add(Re)}),M=S.pop(),ne},this.compileAsync=function(C,Y,te=null){let ne=this.compile(C,Y,te);return new Promise(Q=>{function Re(){if(ne.forEach(function(ze){w.get(ze).currentProgram.isReady()&&ne.delete(ze)}),ne.size===0){Q(C);return}setTimeout(Re,10)}ct.get("KHR_parallel_shader_compile")!==null?Re():setTimeout(Re,10)})};let We=null;function rt(C){We&&We(C)}function zt(){le.stop()}function pt(){le.start()}let le=new w_;le.setAnimationLoop(rt),typeof self<"u"&&le.setContext(self),this.setAnimationLoop=function(C){We=C,$.setAnimationLoop(C),C===null?le.stop():le.start()},$.addEventListener("sessionstart",zt),$.addEventListener("sessionend",pt),this.render=function(C,Y){if(Y!==void 0&&Y.isCamera!==!0){gt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(E===!0)return;let te=$.enabled===!0&&$.isPresenting===!0,ne=A!==null&&(D===null||te)&&A.begin(b,D);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(A===null||A.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(Y),Y=$.getCamera()),C.isScene===!0&&C.onBeforeRender(b,C,Y,D),M=de.get(C,S.length),M.init(Y),S.push(M),ft.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Oe.setFromProjectionMatrix(ft,Sr,Y.reversedDepth),je=this.localClippingEnabled,Ce=Le.init(this.clippingPlanes,je),v=ue.get(C,T.length),v.init(),T.push(v),$.enabled===!0&&$.isPresenting===!0){let ze=b.xr.getDepthSensingMesh();ze!==null&&Ge(ze,Y,-1/0,b.sortObjects)}Ge(C,Y,0,b.sortObjects),v.finish(),b.sortObjects===!0&&v.sort(Ye,it),De=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,De&&_e.addToRenderList(v,C),this.info.render.frame++,Ce===!0&&Le.beginShadows();let Q=M.state.shadowsArray;if(Ne.render(Q,C,Y),Ce===!0&&Le.endShadows(),this.info.autoReset===!0&&this.info.reset(),(ne&&A.hasRenderPass())===!1){let ze=v.opaque,Z=v.transmissive;if(M.setupLights(),Y.isArrayCamera){let q=Y.cameras;if(Z.length>0)for(let me=0,ke=q.length;me<ke;me++){let Ke=q[me];nt(ze,Z,C,Ke)}De&&_e.render(C);for(let me=0,ke=q.length;me<ke;me++){let Ke=q[me];Xe(v,C,Ke,Ke.viewport)}}else Z.length>0&&nt(ze,Z,C,Y),De&&_e.render(C),Xe(v,C,Y)}D!==null&&R===0&&(I.updateMultisampleRenderTarget(D),I.updateRenderTargetMipmap(D)),ne&&A.end(b),C.isScene===!0&&C.onAfterRender(b,C,Y),Ie.resetDefaultState(),k=-1,G=null,S.pop(),S.length>0?(M=S[S.length-1],Ce===!0&&Le.setGlobalState(b.clippingPlanes,M.state.camera)):M=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Ge(C,Y,te,ne){if(C.visible===!1)return;if(C.layers.test(Y.layers)){if(C.isGroup)te=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(Y);else if(C.isLight)M.pushLight(C),C.castShadow&&M.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||Oe.intersectsSprite(C)){ne&&qe.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ft);let ze=oe.update(C),Z=C.material;Z.visible&&v.push(C,ze,Z,te,qe.z,null)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||Oe.intersectsObject(C))){let ze=oe.update(C),Z=C.material;if(ne&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),qe.copy(C.boundingSphere.center)):(ze.boundingSphere===null&&ze.computeBoundingSphere(),qe.copy(ze.boundingSphere.center)),qe.applyMatrix4(C.matrixWorld).applyMatrix4(ft)),Array.isArray(Z)){let q=ze.groups;for(let me=0,ke=q.length;me<ke;me++){let Ke=q[me],mt=Z[Ke.materialIndex];mt&&mt.visible&&v.push(C,ze,mt,te,qe.z,Ke)}}else Z.visible&&v.push(C,ze,Z,te,qe.z,null)}}let Re=C.children;for(let ze=0,Z=Re.length;ze<Z;ze++)Ge(Re[ze],Y,te,ne)}function Xe(C,Y,te,ne){let{opaque:Q,transmissive:Re,transparent:ze}=C;M.setupLightsView(te),Ce===!0&&Le.setGlobalState(b.clippingPlanes,te),ne&&Fe.viewport(z.copy(ne)),Q.length>0&&ut(Q,Y,te),Re.length>0&&ut(Re,Y,te),ze.length>0&&ut(ze,Y,te),Fe.buffers.depth.setTest(!0),Fe.buffers.depth.setMask(!0),Fe.buffers.color.setMask(!0),Fe.setPolygonOffset(!1)}function nt(C,Y,te,ne){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[ne.id]===void 0){let mt=ct.has("EXT_color_buffer_half_float")||ct.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[ne.id]=new gn(1,1,{generateMipmaps:!0,type:mt?wn:Di,minFilter:Vs,samples:Je.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}let Re=M.state.transmissionRenderTarget[ne.id],ze=ne.viewport||z;Re.setSize(ze.z*b.transmissionResolutionScale,ze.w*b.transmissionResolutionScale);let Z=b.getRenderTarget(),q=b.getActiveCubeFace(),me=b.getActiveMipmapLevel();b.setRenderTarget(Re),b.getClearColor(se),N=b.getClearAlpha(),N<1&&b.setClearColor(16777215,.5),b.clear(),De&&_e.render(te);let ke=b.toneMapping;b.toneMapping=Ir;let Ke=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),M.setupLightsView(ne),Ce===!0&&Le.setGlobalState(b.clippingPlanes,ne),ut(C,te,ne),I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re),ct.has("WEBGL_multisampled_render_to_texture")===!1){let mt=!1;for(let Dt=0,on=Y.length;Dt<on;Dt++){let $t=Y[Dt],{object:kt,geometry:ot,material:Bt,group:be}=$t;if(Bt.side===nn&&kt.layers.test(ne.layers)){let at=Bt.side;Bt.side=In,Bt.needsUpdate=!0,pn(kt,te,ne,ot,Bt,be),Bt.side=at,Bt.needsUpdate=!0,mt=!0}}mt===!0&&(I.updateMultisampleRenderTarget(Re),I.updateRenderTargetMipmap(Re))}b.setRenderTarget(Z,q,me),b.setClearColor(se,N),Ke!==void 0&&(ne.viewport=Ke),b.toneMapping=ke}function ut(C,Y,te){let ne=Y.isScene===!0?Y.overrideMaterial:null;for(let Q=0,Re=C.length;Q<Re;Q++){let ze=C[Q],{object:Z,geometry:q,group:me}=ze,ke=ze.material;ke.allowOverride===!0&&ne!==null&&(ke=ne),Z.layers.test(te.layers)&&pn(Z,Y,te,q,ke,me)}}function pn(C,Y,te,ne,Q,Re){C.onBeforeRender(b,Y,te,ne,Q,Re),C.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(b,Y,te,ne,C,Re),Q.transparent===!0&&Q.side===nn&&Q.forceSinglePass===!1?(Q.side=In,Q.needsUpdate=!0,b.renderBufferDirect(te,Y,ne,Q,C,Re),Q.side=cs,Q.needsUpdate=!0,b.renderBufferDirect(te,Y,ne,Q,C,Re),Q.side=nn):b.renderBufferDirect(te,Y,ne,Q,C,Re),C.onAfterRender(b,Y,te,ne,Q,Re)}function Ct(C,Y,te){Y.isScene!==!0&&(Y=Ze);let ne=w.get(C),Q=M.state.lights,Re=M.state.shadowsArray,ze=Q.state.version,Z=Pe.getParameters(C,Q.state,Re,Y,te),q=Pe.getProgramCacheKey(Z),me=ne.programs;ne.environment=C.isMeshStandardMaterial?Y.environment:null,ne.fog=Y.fog,ne.envMap=(C.isMeshStandardMaterial?W:U).get(C.envMap||ne.environment),ne.envMapRotation=ne.environment!==null&&C.envMap===null?Y.environmentRotation:C.envMapRotation,me===void 0&&(C.addEventListener("dispose",Te),me=new Map,ne.programs=me);let ke=me.get(q);if(ke!==void 0){if(ne.currentProgram===ke&&ne.lightsStateVersion===ze)return _i(C,Z),ke}else Z.uniforms=Pe.getUniforms(C),C.onBeforeCompile(Z,b),ke=Pe.acquireProgram(Z,q),me.set(q,ke),ne.uniforms=Z.uniforms;let Ke=ne.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Ke.clippingPlanes=Le.uniform),_i(C,Z),ne.needsLights=Pn(C),ne.lightsStateVersion=ze,ne.needsLights&&(Ke.ambientLightColor.value=Q.state.ambient,Ke.lightProbe.value=Q.state.probe,Ke.directionalLights.value=Q.state.directional,Ke.directionalLightShadows.value=Q.state.directionalShadow,Ke.spotLights.value=Q.state.spot,Ke.spotLightShadows.value=Q.state.spotShadow,Ke.rectAreaLights.value=Q.state.rectArea,Ke.ltc_1.value=Q.state.rectAreaLTC1,Ke.ltc_2.value=Q.state.rectAreaLTC2,Ke.pointLights.value=Q.state.point,Ke.pointLightShadows.value=Q.state.pointShadow,Ke.hemisphereLights.value=Q.state.hemi,Ke.directionalShadowMap.value=Q.state.directionalShadowMap,Ke.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,Ke.spotShadowMap.value=Q.state.spotShadowMap,Ke.spotLightMatrix.value=Q.state.spotLightMatrix,Ke.spotLightMap.value=Q.state.spotLightMap,Ke.pointShadowMap.value=Q.state.pointShadowMap,Ke.pointShadowMatrix.value=Q.state.pointShadowMatrix),ne.currentProgram=ke,ne.uniformsList=null,ke}function Gn(C){if(C.uniformsList===null){let Y=C.currentProgram.getUniforms();C.uniformsList=Ga.seqWithValue(Y.seq,C.uniforms)}return C.uniformsList}function _i(C,Y){let te=w.get(C);te.outputColorSpace=Y.outputColorSpace,te.batching=Y.batching,te.batchingColor=Y.batchingColor,te.instancing=Y.instancing,te.instancingColor=Y.instancingColor,te.instancingMorph=Y.instancingMorph,te.skinning=Y.skinning,te.morphTargets=Y.morphTargets,te.morphNormals=Y.morphNormals,te.morphColors=Y.morphColors,te.morphTargetsCount=Y.morphTargetsCount,te.numClippingPlanes=Y.numClippingPlanes,te.numIntersection=Y.numClipIntersection,te.vertexAlphas=Y.vertexAlphas,te.vertexTangents=Y.vertexTangents,te.toneMapping=Y.toneMapping}function Gt(C,Y,te,ne,Q){Y.isScene!==!0&&(Y=Ze),I.resetTextureUnits();let Re=Y.fog,ze=ne.isMeshStandardMaterial?Y.environment:null,Z=D===null?b.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:wr,q=(ne.isMeshStandardMaterial?W:U).get(ne.envMap||ze),me=ne.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,ke=!!te.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ke=!!te.morphAttributes.position,mt=!!te.morphAttributes.normal,Dt=!!te.morphAttributes.color,on=Ir;ne.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(on=b.toneMapping);let $t=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,kt=$t!==void 0?$t.length:0,ot=w.get(ne),Bt=M.state.lights;if(Ce===!0&&(je===!0||C!==G)){let vi=C===G&&ne.id===k;Le.setState(ne,C,vi)}let be=!1;ne.version===ot.__version?(ot.needsLights&&ot.lightsStateVersion!==Bt.state.version||ot.outputColorSpace!==Z||Q.isBatchedMesh&&ot.batching===!1||!Q.isBatchedMesh&&ot.batching===!0||Q.isBatchedMesh&&ot.batchingColor===!0&&Q.colorTexture===null||Q.isBatchedMesh&&ot.batchingColor===!1&&Q.colorTexture!==null||Q.isInstancedMesh&&ot.instancing===!1||!Q.isInstancedMesh&&ot.instancing===!0||Q.isSkinnedMesh&&ot.skinning===!1||!Q.isSkinnedMesh&&ot.skinning===!0||Q.isInstancedMesh&&ot.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&ot.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&ot.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&ot.instancingMorph===!1&&Q.morphTexture!==null||ot.envMap!==q||ne.fog===!0&&ot.fog!==Re||ot.numClippingPlanes!==void 0&&(ot.numClippingPlanes!==Le.numPlanes||ot.numIntersection!==Le.numIntersection)||ot.vertexAlphas!==me||ot.vertexTangents!==ke||ot.morphTargets!==Ke||ot.morphNormals!==mt||ot.morphColors!==Dt||ot.toneMapping!==on||ot.morphTargetsCount!==kt)&&(be=!0):(be=!0,ot.__version=ne.version);let at=ot.currentProgram;be===!0&&(at=Ct(ne,Y,Q));let an=!1,Ft=!1,As=!1,ln=at.getUniforms(),Ci=ot.uniforms;if(Fe.useProgram(at.program)&&(an=!0,Ft=!0,As=!0),ne.id!==k&&(k=ne.id,Ft=!0),an||G!==C){Fe.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),ln.setValue(H,"projectionMatrix",C.projectionMatrix),ln.setValue(H,"viewMatrix",C.matrixWorldInverse);let Pi=ln.map.cameraPosition;Pi!==void 0&&Pi.setValue(H,we.setFromMatrixPosition(C.matrixWorld)),Je.logarithmicDepthBuffer&&ln.setValue(H,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&ln.setValue(H,"isOrthographic",C.isOrthographicCamera===!0),G!==C&&(G=C,Ft=!0,As=!0)}if(ot.needsLights&&(Bt.state.directionalShadowMap.length>0&&ln.setValue(H,"directionalShadowMap",Bt.state.directionalShadowMap,I),Bt.state.spotShadowMap.length>0&&ln.setValue(H,"spotShadowMap",Bt.state.spotShadowMap,I),Bt.state.pointShadowMap.length>0&&ln.setValue(H,"pointShadowMap",Bt.state.pointShadowMap,I)),Q.isSkinnedMesh){ln.setOptional(H,Q,"bindMatrix"),ln.setOptional(H,Q,"bindMatrixInverse");let vi=Q.skeleton;vi&&(vi.boneTexture===null&&vi.computeBoneTexture(),ln.setValue(H,"boneTexture",vi.boneTexture,I))}Q.isBatchedMesh&&(ln.setOptional(H,Q,"batchingTexture"),ln.setValue(H,"batchingTexture",Q._matricesTexture,I),ln.setOptional(H,Q,"batchingIdTexture"),ln.setValue(H,"batchingIdTexture",Q._indirectTexture,I),ln.setOptional(H,Q,"batchingColorTexture"),Q._colorsTexture!==null&&ln.setValue(H,"batchingColorTexture",Q._colorsTexture,I));let sr=te.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ee.update(Q,te,at),(Ft||ot.receiveShadow!==Q.receiveShadow)&&(ot.receiveShadow=Q.receiveShadow,ln.setValue(H,"receiveShadow",Q.receiveShadow)),ne.isMeshGouraudMaterial&&ne.envMap!==null&&(Ci.envMap.value=q,Ci.flipEnvMap.value=q.isCubeTexture&&q.isRenderTargetTexture===!1?-1:1),ne.isMeshStandardMaterial&&ne.envMap===null&&Y.environment!==null&&(Ci.envMapIntensity.value=Y.environmentIntensity),Ci.dfgLUT!==void 0&&(Ci.dfgLUT.value=SS()),Ft&&(ln.setValue(H,"toneMappingExposure",b.toneMappingExposure),ot.needsLights&&Sn(Ci,As),Re&&ne.fog===!0&&Ae.refreshFogUniforms(Ci,Re),Ae.refreshMaterialUniforms(Ci,ne,He,Be,M.state.transmissionRenderTarget[C.id]),Ga.upload(H,Gn(ot),Ci,I)),ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&(Ga.upload(H,Gn(ot),Ci,I),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&ln.setValue(H,"center",Q.center),ln.setValue(H,"modelViewMatrix",Q.modelViewMatrix),ln.setValue(H,"normalMatrix",Q.normalMatrix),ln.setValue(H,"modelMatrix",Q.matrixWorld),ne.isShaderMaterial||ne.isRawShaderMaterial){let vi=ne.uniformsGroups;for(let Pi=0,Lf=vi.length;Pi<Lf;Pi++){let fo=vi[Pi];fe.update(fo,at),fe.bind(fo,at)}}return at}function Sn(C,Y){C.ambientLightColor.needsUpdate=Y,C.lightProbe.needsUpdate=Y,C.directionalLights.needsUpdate=Y,C.directionalLightShadows.needsUpdate=Y,C.pointLights.needsUpdate=Y,C.pointLightShadows.needsUpdate=Y,C.spotLights.needsUpdate=Y,C.spotLightShadows.needsUpdate=Y,C.rectAreaLights.needsUpdate=Y,C.hemisphereLights.needsUpdate=Y}function Pn(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(C,Y,te){let ne=w.get(C);ne.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),w.get(C.texture).__webglTexture=Y,w.get(C.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:te,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,Y){let te=w.get(C);te.__webglFramebuffer=Y,te.__useDefaultFramebuffer=Y===void 0};let rr=H.createFramebuffer();this.setRenderTarget=function(C,Y=0,te=0){D=C,L=Y,R=te;let ne=null,Q=!1,Re=!1;if(C){let Z=w.get(C);if(Z.__useDefaultFramebuffer!==void 0){Fe.bindFramebuffer(H.FRAMEBUFFER,Z.__webglFramebuffer),z.copy(C.viewport),B.copy(C.scissor),K=C.scissorTest,Fe.viewport(z),Fe.scissor(B),Fe.setScissorTest(K),k=-1;return}else if(Z.__webglFramebuffer===void 0)I.setupRenderTarget(C);else if(Z.__hasExternalTextures)I.rebindTextures(C,w.get(C.texture).__webglTexture,w.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){let ke=C.depthTexture;if(Z.__boundDepthTexture!==ke){if(ke!==null&&w.has(ke)&&(C.width!==ke.image.width||C.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");I.setupDepthRenderbuffer(C)}}let q=C.texture;(q.isData3DTexture||q.isDataArrayTexture||q.isCompressedArrayTexture)&&(Re=!0);let me=w.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(me[Y])?ne=me[Y][te]:ne=me[Y],Q=!0):C.samples>0&&I.useMultisampledRTT(C)===!1?ne=w.get(C).__webglMultisampledFramebuffer:Array.isArray(me)?ne=me[te]:ne=me,z.copy(C.viewport),B.copy(C.scissor),K=C.scissorTest}else z.copy(ie).multiplyScalar(He).floor(),B.copy(re).multiplyScalar(He).floor(),K=ye;if(te!==0&&(ne=rr),Fe.bindFramebuffer(H.FRAMEBUFFER,ne)&&Fe.drawBuffers(C,ne),Fe.viewport(z),Fe.scissor(B),Fe.setScissorTest(K),Q){let Z=w.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Z.__webglTexture,te)}else if(Re){let Z=Y;for(let q=0;q<C.textures.length;q++){let me=w.get(C.textures[q]);H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0+q,me.__webglTexture,te,Z)}}else if(C!==null&&te!==0){let Z=w.get(C.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,Z.__webglTexture,te)}k=-1},this.readRenderTargetPixels=function(C,Y,te,ne,Q,Re,ze,Z=0){if(!(C&&C.isWebGLRenderTarget)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let q=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(q=q[ze]),q){Fe.bindFramebuffer(H.FRAMEBUFFER,q);try{let me=C.textures[Z],ke=me.format,Ke=me.type;if(!Je.textureFormatReadable(ke)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Je.textureTypeReadable(Ke)){gt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=C.width-ne&&te>=0&&te<=C.height-Q&&(C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Z),H.readPixels(Y,te,ne,Q,pe.convert(ke),pe.convert(Ke),Re))}finally{let me=D!==null?w.get(D).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,me)}}},this.readRenderTargetPixelsAsync=async function(C,Y,te,ne,Q,Re,ze,Z=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let q=w.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&ze!==void 0&&(q=q[ze]),q)if(Y>=0&&Y<=C.width-ne&&te>=0&&te<=C.height-Q){Fe.bindFramebuffer(H.FRAMEBUFFER,q);let me=C.textures[Z],ke=me.format,Ke=me.type;if(!Je.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Je.textureTypeReadable(Ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let mt=H.createBuffer();H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.bufferData(H.PIXEL_PACK_BUFFER,Re.byteLength,H.STREAM_READ),C.textures.length>1&&H.readBuffer(H.COLOR_ATTACHMENT0+Z),H.readPixels(Y,te,ne,Q,pe.convert(ke),pe.convert(Ke),0);let Dt=D!==null?w.get(D).__webglFramebuffer:null;Fe.bindFramebuffer(H.FRAMEBUFFER,Dt);let on=H.fenceSync(H.SYNC_GPU_COMMANDS_COMPLETE,0);return H.flush(),await Jg(H,on,4),H.bindBuffer(H.PIXEL_PACK_BUFFER,mt),H.getBufferSubData(H.PIXEL_PACK_BUFFER,0,Re),H.deleteBuffer(mt),H.deleteSync(on),Re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,Y=null,te=0){let ne=Math.pow(2,-te),Q=Math.floor(C.image.width*ne),Re=Math.floor(C.image.height*ne),ze=Y!==null?Y.x:0,Z=Y!==null?Y.y:0;I.setTexture2D(C,0),H.copyTexSubImage2D(H.TEXTURE_2D,te,0,0,ze,Z,Q,Re),Fe.unbindTexture()};let Or=H.createFramebuffer(),Tt=H.createFramebuffer();this.copyTextureToTexture=function(C,Y,te=null,ne=null,Q=0,Re=null){Re===null&&(Q!==0?(Ca("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Re=Q,Q=0):Re=0);let ze,Z,q,me,ke,Ke,mt,Dt,on,$t=C.isCompressedTexture?C.mipmaps[Re]:C.image;if(te!==null)ze=te.max.x-te.min.x,Z=te.max.y-te.min.y,q=te.isBox3?te.max.z-te.min.z:1,me=te.min.x,ke=te.min.y,Ke=te.isBox3?te.min.z:0;else{let sr=Math.pow(2,-Q);ze=Math.floor($t.width*sr),Z=Math.floor($t.height*sr),C.isDataArrayTexture?q=$t.depth:C.isData3DTexture?q=Math.floor($t.depth*sr):q=1,me=0,ke=0,Ke=0}ne!==null?(mt=ne.x,Dt=ne.y,on=ne.z):(mt=0,Dt=0,on=0);let kt=pe.convert(Y.format),ot=pe.convert(Y.type),Bt;Y.isData3DTexture?(I.setTexture3D(Y,0),Bt=H.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(I.setTexture2DArray(Y,0),Bt=H.TEXTURE_2D_ARRAY):(I.setTexture2D(Y,0),Bt=H.TEXTURE_2D),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Y.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Y.unpackAlignment);let be=H.getParameter(H.UNPACK_ROW_LENGTH),at=H.getParameter(H.UNPACK_IMAGE_HEIGHT),an=H.getParameter(H.UNPACK_SKIP_PIXELS),Ft=H.getParameter(H.UNPACK_SKIP_ROWS),As=H.getParameter(H.UNPACK_SKIP_IMAGES);H.pixelStorei(H.UNPACK_ROW_LENGTH,$t.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,$t.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,me),H.pixelStorei(H.UNPACK_SKIP_ROWS,ke),H.pixelStorei(H.UNPACK_SKIP_IMAGES,Ke);let ln=C.isDataArrayTexture||C.isData3DTexture,Ci=Y.isDataArrayTexture||Y.isData3DTexture;if(C.isDepthTexture){let sr=w.get(C),vi=w.get(Y),Pi=w.get(sr.__renderTarget),Lf=w.get(vi.__renderTarget);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Pi.__webglFramebuffer),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Lf.__webglFramebuffer);for(let fo=0;fo<q;fo++)ln&&(H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,w.get(C).__webglTexture,Q,Ke+fo),H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,w.get(Y).__webglTexture,Re,on+fo)),H.blitFramebuffer(me,ke,ze,Z,mt,Dt,ze,Z,H.DEPTH_BUFFER_BIT,H.NEAREST);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||w.has(C)){let sr=w.get(C),vi=w.get(Y);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,Or),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,Tt);for(let Pi=0;Pi<q;Pi++)ln?H.framebufferTextureLayer(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,sr.__webglTexture,Q,Ke+Pi):H.framebufferTexture2D(H.READ_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,sr.__webglTexture,Q),Ci?H.framebufferTextureLayer(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,vi.__webglTexture,Re,on+Pi):H.framebufferTexture2D(H.DRAW_FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_2D,vi.__webglTexture,Re),Q!==0?H.blitFramebuffer(me,ke,ze,Z,mt,Dt,ze,Z,H.COLOR_BUFFER_BIT,H.NEAREST):Ci?H.copyTexSubImage3D(Bt,Re,mt,Dt,on+Pi,me,ke,ze,Z):H.copyTexSubImage2D(Bt,Re,mt,Dt,me,ke,ze,Z);Fe.bindFramebuffer(H.READ_FRAMEBUFFER,null),Fe.bindFramebuffer(H.DRAW_FRAMEBUFFER,null)}else Ci?C.isDataTexture||C.isData3DTexture?H.texSubImage3D(Bt,Re,mt,Dt,on,ze,Z,q,kt,ot,$t.data):Y.isCompressedArrayTexture?H.compressedTexSubImage3D(Bt,Re,mt,Dt,on,ze,Z,q,kt,$t.data):H.texSubImage3D(Bt,Re,mt,Dt,on,ze,Z,q,kt,ot,$t):C.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,Re,mt,Dt,ze,Z,kt,ot,$t.data):C.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,Re,mt,Dt,$t.width,$t.height,kt,$t.data):H.texSubImage2D(H.TEXTURE_2D,Re,mt,Dt,ze,Z,kt,ot,$t);H.pixelStorei(H.UNPACK_ROW_LENGTH,be),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,at),H.pixelStorei(H.UNPACK_SKIP_PIXELS,an),H.pixelStorei(H.UNPACK_SKIP_ROWS,Ft),H.pixelStorei(H.UNPACK_SKIP_IMAGES,As),Re===0&&Y.generateMipmaps&&H.generateMipmap(Bt),Fe.unbindTexture()},this.initRenderTarget=function(C){w.get(C).__webglFramebuffer===void 0&&I.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?I.setTextureCube(C,0):C.isData3DTexture?I.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?I.setTexture2DArray(C,0):I.setTexture2D(C,0),Fe.unbindTexture()},this.resetState=function(){L=0,R=0,D=null,Fe.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Sr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}};function ms(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function B_(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Oi={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},qa={duration:.5,overwrite:!1,delay:0},pm,jn,vn,mr=1e8,sn=1/mr,rm=Math.PI*2,wS=rm/4,AS=0,H_=Math.sqrt,RS=Math.cos,CS=Math.sin,zn=function(e){return typeof e=="string"},An=function(e){return typeof e=="function"},_s=function(e){return typeof e=="number"},Od=function(e){return typeof e>"u"},Zr=function(e){return typeof e=="object"},Ui=function(e){return e!==!1},mm=function(){return typeof window<"u"},Rd=function(e){return An(e)||zn(e)},z_=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},ci=Array.isArray,PS=/random\([^)]+\)/g,IS=/,\s*/g,I_=/(?:-?\.?\d|\.)+/gi,gm=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ko=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Kp=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_m=/[+-]=-?[.\d]+/,LS=/[^,'"\[\]\s]+/gi,DS=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,En,Yr,sm,vm,Yi={},Ld={},V_,G_=function(e){return(Ld=Ya(e,Yi))&&ui},kd=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Fc=function(e,t){return!t&&console.warn(e)},W_=function(e,t){return e&&(Yi[e]=t)&&Ld&&(Ld[e]=t)||Yi},Nc=function(){return 0},FS={suppressEvents:!0,isStart:!0,kill:!1},Cd={suppressEvents:!0,kill:!1},NS={suppressEvents:!0},xm={},qs=[],om={},X_,Fi={},jp={},L_=30,Pd=[],ym="",bm=function(e){var t=e[0],n,i;if(Zr(t)||An(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Pd.length;i--&&!Pd[i].targetTest(t););n=Pd[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Sm(e[i],n)))||e.splice(i,1);return e},Ys=function(e){return e._gsap||bm(gr(e))[0]._gsap},Mm=function(e,t,n){return(n=e[t])&&An(n)?e[t]():Od(n)&&e.getAttribute&&e.getAttribute(t)||n},bi=function(e,t){return(e=e.split(",")).forEach(t)||e},Rn=function(e){return Math.round(e*1e5)/1e5||0},Mn=function(e){return Math.round(e*1e7)/1e7||0},Bo=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},US=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},Dd=function(){var e=qs.length,t=qs.slice(0),n,i;for(om={},qs.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Em=function(e){return!!(e._initted||e._startAt||e.add)},q_=function(e,t,n,i){qs.length&&!jn&&Dd(),e.render(t,n,i||!!(jn&&t<0&&Em(e))),qs.length&&!jn&&Dd()},Y_=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(LS).length<2?t:zn(e)?e.trim():e},$_=function(e){return e},$i=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},OS=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},Ya=function(e,t){for(var n in t)e[n]=t[n];return e},D_=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Zr(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},Fd=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},Ic=function(e){var t=e.parent||En,n=e.keyframes?OS(ci(e.keyframes)):$i;if(Ui(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},kS=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Z_=function(e,t,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=e[i],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=o,t.parent=t._dp=e,t},Bd=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,o=t._next;s?s._next=o:e[n]===t&&(e[n]=o),o?o._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},$s=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},No=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},BS=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},am=function(e,t,n,i){return e._startAt&&(jn?e._startAt.revert(Cd):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},HS=function r(e){return!e||e._ts&&r(e.parent)},F_=function(e){return e._repeat?$a(e._tTime,e=e.duration()+e._rDelay)*e:0},$a=function(e,t){var n=Math.floor(e=Mn(e/t));return e&&n===e?n-1:n},Nd=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},Hd=function(e){return e._end=Mn(e._start+(e._tDur/Math.abs(e._ts||e._rts||sn)||0))},zd=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Mn(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),Hd(e),n._dirty||No(n,e)),e},J_=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=Nd(e.rawTime(),t),(!t._dur||kc(0,t.totalDuration(),n)-t._tTime>sn)&&t.render(n,!0)),No(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-sn}},$r=function(e,t,n,i){return t.parent&&$s(t),t._start=Mn((_s(n)?n:n||e!==En?pr(e,n,t):e._time)+t._delay),t._end=Mn(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Z_(e,t,"_first","_last",e._sort?"_start":0),lm(t)||(e._recent=t),i||J_(e,t),e._ts<0&&zd(e,e._tTime),e},K_=function(e,t){return(Yi.ScrollTrigger||kd("scrollTrigger",t))&&Yi.ScrollTrigger.create(t,e)},j_=function(e,t,n,i,s){if(Rm(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!jn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&X_!==Ni.frame)return qs.push(e),e._lazy=[s,i],1},zS=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},lm=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},VS=function(e,t,n,i){var s=e.ratio,o=t<0||!t&&(!e._start&&zS(e)&&!(!e._initted&&lm(e))||(e._ts<0||e._dp._ts<0)&&!lm(e))?0:1,a=e._rDelay,l=0,c,h,u;if(a&&e._repeat&&(l=kc(0,e._tDur,t),h=$a(l,a),e._yoyo&&h&1&&(o=1-o),h!==$a(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||jn||i||e._zTime===sn||!t&&e._zTime){if(!e._initted&&j_(e,t,i,n,l))return;for(u=e._zTime,e._zTime=t||(n?sn:0),n||(n=t&&!u),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,c=e._pt;c;)c.r(o,c.d),c=c._next;t<0&&am(e,t,n,!0),e._onUpdate&&!n&&qi(e,"onUpdate"),l&&e._repeat&&!n&&e.parent&&qi(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&$s(e,1),!n&&!jn&&(qi(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},GS=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Za=function(e,t,n,i){var s=e._repeat,o=Mn(t)||0,a=e._tTime/e._tDur;return a&&!i&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:Mn(o*(s+1)+e._rDelay*s):o,a>0&&!i&&zd(e,e._tTime=e._tDur*a),e.parent&&Hd(e),n||No(e.parent,e),e},N_=function(e){return e instanceof Kn?No(e):Za(e,e._dur)},WS={_start:0,endTime:Nc,totalDuration:Nc},pr=function r(e,t,n){var i=e.labels,s=e._recent||WS,o=e.duration()>=mr?s.endTime(!1):e._dur,a,l,c;return zn(t)&&(isNaN(t)||t in i)?(l=t.charAt(0),c=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(t in i||(i[t]=o),i[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),c&&n&&(l=l/100*(ci(n)?n[0]:n).totalDuration()),a>1?r(e,t.substr(0,a-1),n)+l:o+l)):t==null?o:+t},Lc=function(e,t,n){var i=_s(t[1]),s=(i?2:1)+(e<2?0:1),o=t[s],a,l;if(i&&(o.duration=t[1]),o.parent=n,e){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=Ui(l.vars.inherit)&&l.parent;o.immediateRender=Ui(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Ln(t[0],o,t[s+1])},Zs=function(e,t){return e||e===0?t(e):t},kc=function(e,t,n){return n<e?e:n>t?t:n},Qn=function(e,t){return!zn(e)||!(t=DS.exec(e))?"":t[1]},XS=function(e,t,n){return Zs(n,function(i){return kc(e,t,i)})},cm=[].slice,Q_=function(e,t){return e&&Zr(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Zr(e[0]))&&!e.nodeType&&e!==Yr},qS=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return zn(i)&&!t||Q_(i,1)?(s=n).push.apply(s,gr(i)):n.push(i)})||n},gr=function(e,t,n){return vn&&!t&&vn.selector?vn.selector(e):zn(e)&&!n&&(sm||!Ja())?cm.call((t||vm).querySelectorAll(e),0):ci(e)?qS(e,n):Q_(e)?cm.call(e,0):e?[e]:[]},um=function(e){return e=gr(e)[0]||Fc("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return gr(t,n.querySelectorAll?n:n===e?Fc("Invalid scope")||vm.createElement("div"):e)}},ev=function(e){return e.sort(function(){return .5-Math.random()})},tv=function(e){if(An(e))return e;var t=Zr(e)?e:{each:e},n=Uo(t.ease),i=t.from||0,s=parseFloat(t.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=t.axis,h=i,u=i;return zn(i)?h=u={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(h=i[0],u=i[1]),function(f,d,m){var p=(m||t).length,_=o[p],g,y,x,v,M,T,S,A,b;if(!_){if(b=t.grid==="auto"?0:(t.grid||[1,mr])[1],!b){for(S=-mr;S<(S=m[b++].getBoundingClientRect().left)&&b<p;);b<p&&b--}for(_=o[p]=[],g=l?Math.min(b,p)*h-.5:i%b,y=b===mr?0:l?p*u/b-.5:i/b|0,S=0,A=mr,T=0;T<p;T++)x=T%b-g,v=y-(T/b|0),_[T]=M=c?Math.abs(c==="y"?v:x):H_(x*x+v*v),M>S&&(S=M),M<A&&(A=M);i==="random"&&ev(_),_.max=S-A,_.min=A,_.v=p=(parseFloat(t.amount)||parseFloat(t.each)*(b>p?p-1:c?c==="y"?p/b:b:Math.max(b,p/b))||0)*(i==="edges"?-1:1),_.b=p<0?s-p:s,_.u=Qn(t.amount||t.each)||0,n=n&&p<0?uv(n):n}return p=(_[f]-_.min)/_.max||0,Mn(_.b+(n?n(p):p)*_.v)+_.u}},hm=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Mn(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(_s(n)?0:Qn(n))}},nv=function(e,t){var n=ci(e),i,s;return!n&&Zr(e)&&(i=n=e.radius||mr,e.values?(e=gr(e.values),(s=!_s(e[0]))&&(i*=i)):e=hm(e.increment)),Zs(t,n?An(e)?function(o){return s=e(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=mr,h=0,u=e.length,f,d;u--;)s?(f=e[u].x-a,d=e[u].y-l,f=f*f+d*d):f=Math.abs(e[u]-a),f<c&&(c=f,h=u);return h=!i||c<=i?e[h]:o,s||h===o||_s(o)?h:h+Qn(o)}:hm(e))},iv=function(e,t,n,i){return Zs(ci(e)?!t:n===!0?!!(n=0):!i,function(){return ci(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},YS=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,o){return o(s)},i)}},$S=function(e,t){return function(n){return e(parseFloat(n))+(t||Qn(n))}},ZS=function(e,t,n){return sv(e,t,0,1,n)},rv=function(e,t,n){return Zs(n,function(i){return e[~~t(i)]})},JS=function r(e,t,n){var i=t-e;return ci(e)?rv(e,r(0,e.length),t):Zs(n,function(s){return(i+(s-e)%i)%i+e})},KS=function r(e,t,n){var i=t-e,s=i*2;return ci(e)?rv(e,r(0,e.length-1),t):Zs(n,function(o){return o=(s+(o-e)%s)%s||0,e+(o>i?s-o:o)})},Ka=function(e){return e.replace(PS,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(IS);return iv(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},sv=function(e,t,n,i,s){var o=t-e,a=i-n;return Zs(s,function(l){return n+((l-e)/o*a||0)})},jS=function r(e,t,n,i){var s=isNaN(e+t)?0:function(d){return(1-d)*e+d*t};if(!s){var o=zn(e),a={},l,c,h,u,f;if(n===!0&&(i=1)&&(n=null),o)e={p:e},t={p:t};else if(ci(e)&&!ci(t)){for(h=[],u=e.length,f=u-2,c=1;c<u;c++)h.push(r(e[c-1],e[c]));u--,s=function(m){m*=u;var p=Math.min(f,~~m);return h[p](m-p)},n=t}else i||(e=Ya(ci(e)?[]:{},e));if(!h){for(l in t)wm.call(a,e,l,"get",t[l]);s=function(m){return Im(m,a)||(o?e.p:e)}}}return Zs(n,s)},U_=function(e,t,n){var i=e.labels,s=mr,o,a,l;for(o in i)a=i[o]-t,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},qi=function(e,t,n){var i=e.vars,s=i[t],o=vn,a=e._ctx,l,c,h;if(s)return l=i[t+"Params"],c=i.callbackScope||e,n&&qs.length&&Dd(),a&&(vn=a),h=l?s.apply(c,l):s.call(c),vn=o,h},Cc=function(e){return $s(e),e.scrollTrigger&&e.scrollTrigger.kill(!!jn),e.progress()<1&&qi(e,"onInterrupt"),e},Xa,ov=[],av=function(e){if(e)if(e=!e.name&&e.default||e,mm()||e.headless){var t=e.name,n=An(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:Nc,render:Im,add:wm,kill:pw,modifier:fw,rawVars:0},o={targetTest:0,get:0,getSetter:Vd,aliases:{},register:0};if(Ja(),e!==i){if(Fi[t])return;$i(i,$i(Fd(e,s),o)),Ya(i.prototype,Ya(s,Fd(e,o))),Fi[i.prop=t]=i,e.targetTest&&(Pd.push(i),xm[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}W_(t,i),e.register&&e.register(ui,i,Mi)}else ov.push(e)},rn=255,Pc={aqua:[0,rn,rn],lime:[0,rn,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,rn],navy:[0,0,128],white:[rn,rn,rn],olive:[128,128,0],yellow:[rn,rn,0],orange:[rn,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[rn,0,0],pink:[rn,192,203],cyan:[0,rn,rn],transparent:[rn,rn,rn,0]},Qp=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*rn+.5|0},lv=function(e,t,n){var i=e?_s(e)?[e>>16,e>>8&rn,e&rn]:0:Pc.black,s,o,a,l,c,h,u,f,d,m;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),Pc[e])i=Pc[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&rn,i&rn,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&rn,e&rn]}else if(e.substr(0,3)==="hsl"){if(i=m=e.match(I_),!t)l=+i[0]%360/360,c=+i[1]/100,h=+i[2]/100,o=h<=.5?h*(c+1):h+c-h*c,s=h*2-o,i.length>3&&(i[3]*=1),i[0]=Qp(l+1/3,s,o),i[1]=Qp(l,s,o),i[2]=Qp(l-1/3,s,o);else if(~e.indexOf("="))return i=e.match(gm),n&&i.length<4&&(i[3]=1),i}else i=e.match(I_)||Pc.transparent;i=i.map(Number)}return t&&!m&&(s=i[0]/rn,o=i[1]/rn,a=i[2]/rn,u=Math.max(s,o,a),f=Math.min(s,o,a),h=(u+f)/2,u===f?l=c=0:(d=u-f,c=h>.5?d/(2-u-f):d/(u+f),l=u===s?(o-a)/d+(o<a?6:0):u===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(h*100+.5)),n&&i.length<4&&(i[3]=1),i},cv=function(e){var t=[],n=[],i=-1;return e.split(gs).forEach(function(s){var o=s.match(ko)||[];t.push.apply(t,o),n.push(i+=o.length+1)}),t.c=n,t},O_=function(e,t,n){var i="",s=(e+i).match(gs),o=t?"hsla(":"rgba(",a=0,l,c,h,u;if(!s)return e;if(s=s.map(function(f){return(f=lv(f,t,1))&&o+(t?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(h=cv(e),l=n.c,l.join(i)!==h.c.join(i)))for(c=e.replace(gs,"1").split(ko),u=c.length-1;a<u;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(h.length?h:s.length?s:n).shift());if(!c)for(c=e.split(gs),u=c.length-1;a<u;a++)i+=c[a]+s[a];return i+c[u]},gs=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in Pc)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),QS=/hsl[a]?\(/,Tm=function(e){var t=e.join(" "),n;if(gs.lastIndex=0,gs.test(t))return n=QS.test(t),e[1]=O_(e[1],n),e[0]=O_(e[0],n,cv(e[1])),!0},Uc,Ni=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,h,u,f,d,m=function p(_){var g=r()-i,y=_===!0,x,v,M,T;if((g>e||g<0)&&(n+=g-t),i+=g,M=i-n,x=M-o,(x>0||y)&&(T=++u.frame,f=M-u.time*1e3,u.time=M=M/1e3,o+=x+(x>=s?4:s-x),v=1),y||(l=c(p)),v)for(d=0;d<a.length;d++)a[d](M,f,T,_)};return u={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){V_&&(!sm&&mm()&&(Yr=sm=window,vm=Yr.document||{},Yi.gsap=ui,(Yr.gsapVersions||(Yr.gsapVersions=[])).push(ui.version),G_(Ld||Yr.GreenSockGlobals||!Yr.gsap&&Yr||{}),ov.forEach(av)),h=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&u.sleep(),c=h||function(_){return setTimeout(_,o-u.time*1e3+1|0)},Uc=1,m(2))},sleep:function(){(h?cancelAnimationFrame:clearTimeout)(l),Uc=0,c=Nc},lagSmoothing:function(_,g){e=_||1/0,t=Math.min(g||33,e)},fps:function(_){s=1e3/(_||240),o=u.time*1e3+s},add:function(_,g,y){var x=g?function(v,M,T,S){_(v,M,T,S),u.remove(x)}:_;return u.remove(_),a[y?"unshift":"push"](x),Ja(),x},remove:function(_,g){~(g=a.indexOf(_))&&a.splice(g,1)&&d>=g&&d--},_listeners:a},u})(),Ja=function(){return!Uc&&Ni.wake()},Nt={},ew=/^[\d.\-M][\d.\-,\s]/,tw=/["']/g,nw=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),t[i]=isNaN(c)?c.replace(tw,"").trim():+c,i=l.substr(a+1).trim();return t},iw=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},rw=function(e){var t=(e+"").split("("),n=Nt[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[nw(t[1])]:iw(e).split(",").map(Y_)):Nt._CE&&ew.test(e)?Nt._CE("",e):n},uv=function(e){return function(t){return 1-e(1-t)}},hv=function r(e,t){for(var n=e._first,i;n;)n instanceof Kn?r(n,t):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==t&&(n.timeline?r(n.timeline,t):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=t)),n=n._next},Uo=function(e,t){return e&&(An(e)?e:Nt[e]||rw(e))||t},Ho=function(e,t,n,i){n===void 0&&(n=function(l){return 1-t(1-l)}),i===void 0&&(i=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},o;return bi(e,function(a){Nt[a]=Yi[a]=s,Nt[o=a.toLowerCase()]=n;for(var l in s)Nt[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=Nt[a+"."+l]=s[l]}),s},dv=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},em=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),o=s/rm*(Math.asin(1/i)||0),a=function(h){return h===1?1:i*Math.pow(2,-10*h)*CS((h-o)*s)+1},l=e==="out"?a:e==="in"?function(c){return 1-a(1-c)}:dv(a);return s=rm/s,l.config=function(c,h){return r(e,c,h)},l},tm=function r(e,t){t===void 0&&(t=1.70158);var n=function(o){return o?--o*o*((t+1)*o+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:dv(n);return i.config=function(s){return r(e,s)},i};bi("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;Ho(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});Nt.Linear.easeNone=Nt.none=Nt.Linear.easeIn;Ho("Elastic",em("in"),em("out"),em());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(a){return a<t?r*a*a:a<n?r*Math.pow(a-1.5/e,2)+.75:a<i?r*(a-=2.25/e)*a+.9375:r*Math.pow(a-2.625/e,2)+.984375};Ho("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Ho("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Ho("Circ",function(r){return-(H_(1-r*r)-1)});Ho("Sine",function(r){return r===1?1:-RS(r*wS)+1});Ho("Back",tm("in"),tm("out"),tm());Nt.SteppedEase=Nt.steps=Yi.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,o=1-sn;return function(a){return((i*kc(0,o,a)|0)+s)*n}}};qa.ease=Nt["quad.out"];bi("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return ym+=r+","+r+"Params,"});var Sm=function(e,t){this.id=AS++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Mm,this.set=t?t.getSetter:Vd},Oc=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Za(this,+t.duration,1,1),this.data=t.data,vn&&(this._ctx=vn,vn.data.push(this)),Uc||Ni.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Za(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Ja(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(zd(this,n),!s._dp||s.parent||J_(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&$r(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===sn||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),q_(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+F_(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+F_(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?$a(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-sn?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?Nd(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-sn?0:this._rts,this.totalTime(kc(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),Hd(this),BS(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Ja(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==sn&&(this._tTime-=sn)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Mn(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&$r(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(Ui(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Nd(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=NS);var i=jn;return jn=n,Em(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),jn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,N_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,N_(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(pr(this,n),Ui(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,Ui(i)),this._dur||(this._zTime=-sn),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-sn:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-sn,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-sn)},e.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=An(n)?n:$_,l=function(){var h=i.then;i.then=null,s&&s(),An(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=h),o(a),i.then=h};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},e.kill=function(){Cc(this)},r})();$i(Oc.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-sn,_prom:0,_ps:!1,_rts:1});var Kn=(function(r){B_(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=Ui(n.sortChildren),En&&$r(n.parent||En,ms(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&K_(ms(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,o){return Lc(0,arguments,this),this},t.from=function(i,s,o){return Lc(1,arguments,this),this},t.fromTo=function(i,s,o,a){return Lc(2,arguments,this),this},t.set=function(i,s,o){return s.duration=0,s.parent=this,Ic(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Ln(i,s,pr(this,o),1),this},t.call=function(i,s,o){return $r(this,Ln.delayedCall(0,i,s),o)},t.staggerTo=function(i,s,o,a,l,c,h){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=h,o.parent=this,new Ln(i,o,pr(this,l)),this},t.staggerFrom=function(i,s,o,a,l,c,h){return o.runBackwards=1,Ic(o).immediateRender=Ui(o.immediateRender),this.staggerTo(i,s,o,a,l,c,h)},t.staggerFromTo=function(i,s,o,a,l,c,h,u){return a.startAt=o,Ic(a).immediateRender=Ui(a.immediateRender),this.staggerTo(i,s,a,l,c,h,u)},t.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,h=i<=0?0:Mn(i),u=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,p,_,g,y,x,v,M,T,S;if(this!==En&&h>l&&i>=0&&(h=l),h!==this._tTime||o||u){if(a!==this._time&&c&&(h+=this._time-a,i+=this._time-a),f=h,v=this._start,x=this._ts,g=!x,u&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(T=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=Mn(h%_),h===l?(p=this._repeat,f=c):(M=Mn(h/_),p=~~M,p&&p===M&&(f=c,p--),f>c&&(f=c)),M=$a(this._tTime,_),!a&&this._tTime&&M!==p&&this._tTime-M*_-this._dur<=0&&(M=p),T&&p&1&&(f=c-f,S=1),p!==M&&!this._lock){var A=T&&M&1,b=A===(T&&p&1);if(p<M&&(A=!A),a=A?0:h%c?c:h,this._lock=1,this.render(a||(S?0:Mn(p*_)),s,!c)._lock=0,this._tTime=h,!s&&this.parent&&qi(this,"onRepeat"),this.vars.repeatRefresh&&!S&&(this.invalidate()._lock=1,M=p),a&&a!==this._time||g!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,b&&(this._lock=2,a=A?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!S&&this.invalidate()),this._lock=0,!this._ts&&!g)return this;hv(this,S)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=GS(this,Mn(a),Mn(f)),y&&(h-=f-(f=y._start))),this._tTime=h,this._time=f,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&h&&c&&!s&&!M&&(qi(this,"onStart"),this._tTime!==h))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=-sn);break}}d=m}else{d=this._last;for(var E=i<0?i:f;d;){if(m=d._prev,(d._act||E<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(E-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(E-d._start)*d._ts,s,o||jn&&Em(d)),f!==this._time||!this._ts&&!g){y=0,m&&(h+=this._zTime=E?-sn:sn);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-sn)._zTime=f>=a?1:-1,this._ts))return this._start=v,Hd(this),this.render(i,s,o);this._onUpdate&&!s&&qi(this,"onUpdate",!0),(h===l&&this._tTime>=this.totalDuration()||!h&&a)&&(v===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(h===l&&this._ts>0||!h&&this._ts<0)&&$s(this,1),!s&&!(i<0&&!a)&&(h||a||!l)&&(qi(this,h===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var o=this;if(_s(s)||(s=pr(this,s,i)),!(i instanceof Oc)){if(ci(i))return i.forEach(function(a){return o.add(a,s)}),this;if(zn(i))return this.addLabel(i,s);if(An(i))i=Ln.delayedCall(0,i);else return this}return this!==i?$r(this,i,s):this},t.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-mr);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof Ln?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},t.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},t.remove=function(i){return zn(i)?this.removeLabel(i):An(i)?this.killTweensOf(i):(i.parent===this&&Bd(this,i),i===this._recent&&(this._recent=this._last),No(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Mn(Ni.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=pr(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,o){var a=Ln.delayedCall(0,s||Nc,o);return a.data="isPause",this._hasPause=1,$r(this,a,pr(this,i))},t.removePause=function(i){var s=this._first;for(i=pr(this,i);s;)s._start===i&&s.data==="isPause"&&$s(s),s=s._next},t.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)Xs!==a[l]&&a[l].kill(i,s);return this},t.getTweensOf=function(i,s){for(var o=[],a=gr(i),l=this._first,c=_s(s),h;l;)l instanceof Ln?US(l._targets,a)&&(c?(!Xs||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(h=l.getTweensOf(a,s)).length&&o.push.apply(o,h),l=l._next;return o},t.tweenTo=function(i,s){s=s||{};var o=this,a=pr(o,i),l=s,c=l.startAt,h=l.onStart,u=l.onStartParams,f=l.immediateRender,d,m=Ln.to(o,$i({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||sn,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&Za(m,_,0,1).render(m._time,!0,!0),d=1}h&&h.apply(m,u||[])}},s));return f?m.render(0):m},t.tweenFromTo=function(i,s,o){return this.tweenTo(s,$i({startAt:{time:pr(this,i)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),U_(this,pr(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),U_(this,pr(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+sn)},t.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=Mn(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return No(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),No(this)},t.totalDuration=function(i){var s=0,o=this,a=o._last,l=mr,c,h,u;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(u=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),h=a._start,h>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,$r(o,a,h-a._delay,1)._lock=0):l=h,h<0&&a._ts&&(s-=h,(!u&&!o._dp||u&&u.smoothChildTiming)&&(o._start+=Mn(h/o._ts),o._time-=h,o._tTime-=h),o.shiftChildren(-h,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Za(o,o===En&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(i){if(En._ts&&(q_(En,Nd(i,En)),X_=Ni.frame),Ni.frame>=L_){L_+=Oi.autoSleep||120;var s=En._first;if((!s||!s._ts)&&Oi.autoSleep&&Ni._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||Ni.sleep()}}},e})(Oc);$i(Kn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sw=function(e,t,n,i,s,o,a){var l=new Mi(this._pt,e,t,0,1,Pm,null,s),c=0,h=0,u,f,d,m,p,_,g,y;for(l.b=n,l.e=i,n+="",i+="",(g=~i.indexOf("random("))&&(i=Ka(i)),o&&(y=[n,i],o(y,e,t),n=y[0],i=y[1]),f=n.match(Kp)||[];u=Kp.exec(i);)m=u[0],p=i.substring(c,u.index),d?d=(d+1)%5:p.substr(-5)==="rgba("&&(d=1),m!==f[h++]&&(_=parseFloat(f[h-1])||0,l._pt={_next:l._pt,p:p||h===1?p:",",s:_,c:m.charAt(1)==="="?Bo(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},c=Kp.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(_m.test(i)||g)&&(l.e=0),this._pt=l,l},wm=function(e,t,n,i,s,o,a,l,c,h){An(i)&&(i=i(s||0,e,o));var u=e[t],f=n!=="get"?n:An(u)?c?e[t.indexOf("set")||!An(e["get"+t.substr(3)])?t:"get"+t.substr(3)](c):e[t]():u,d=An(u)?c?uw:mv:Cm,m;if(zn(i)&&(~i.indexOf("random(")&&(i=Ka(i)),i.charAt(1)==="="&&(m=Bo(f,i)+(Qn(f)||0),(m||m===0)&&(i=m))),!h||f!==i||dm)return!isNaN(f*i)&&i!==""?(m=new Mi(this._pt,e,t,+f||0,i-(f||0),typeof u=="boolean"?dw:gv,0,d),c&&(m.fp=c),a&&m.modifier(a,this,e),this._pt=m):(!u&&!(t in e)&&kd(t,i),sw.call(this,e,t,f,i,d,l||Oi.stringFilter,c))},ow=function(e,t,n,i,s){if(An(e)&&(e=Dc(e,s,t,n,i)),!Zr(e)||e.style&&e.nodeType||ci(e)||z_(e))return zn(e)?Dc(e,s,t,n,i):e;var o={},a;for(a in e)o[a]=Dc(e[a],s,t,n,i);return o},Am=function(e,t,n,i,s,o){var a,l,c,h;if(Fi[e]&&(a=new Fi[e]).init(s,a.rawVars?t[e]:ow(t[e],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Mi(n._pt,s,e,0,1,a.render,a,0,a.priority),n!==Xa))for(c=n._ptLookup[n._targets.indexOf(s)],h=a._props.length;h--;)c[a._props[h]]=l;return a},Xs,dm,Rm=function r(e,t,n){var i=e.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,h=i.runBackwards,u=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=e._dur,p=e._startAt,_=e._targets,g=e.parent,y=g&&g.data==="nested"?g.vars.targets:_,x=e._overwrite==="auto"&&!pm,v=e.timeline,M,T,S,A,b,E,L,R,D,k,G,z,B;if(v&&(!f||!s)&&(s="none"),e._ease=Uo(s,qa.ease),e._yEase=u?uv(Uo(u===!0?s:u,qa.ease)):0,u&&e._yoyo&&!e._repeat&&(u=e._yEase,e._yEase=e._ease,e._ease=u),e._from=!v&&!!i.runBackwards,!v||f&&!i.stagger){if(R=_[0]?Ys(_[0]).harness:0,z=R&&i[R.prop],M=Fd(i,xm),p&&(p._zTime<0&&p.progress(1),t<0&&h&&a&&!d?p.render(-1,!0):p.revert(h&&m?Cd:FS),p._lazy=0),o){if($s(e._startAt=Ln.set(_,$i({data:"isStart",overwrite:!1,parent:g,immediateRender:!0,lazy:!p&&Ui(l),startAt:null,delay:0,onUpdate:c&&function(){return qi(e,"onUpdate")},stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn||!a&&!d)&&e._startAt.revert(Cd),a&&m&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(h&&m&&!p){if(t&&(a=!1),S=$i({overwrite:!1,data:"isFromStart",lazy:a&&!p&&Ui(l),immediateRender:a,stagger:0,parent:g},M),z&&(S[R.prop]=z),$s(e._startAt=Ln.set(_,S)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(jn?e._startAt.revert(Cd):e._startAt.render(-1,!0)),e._zTime=t,!a)r(e._startAt,sn,sn);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&Ui(l)||l&&!m,T=0;T<_.length;T++){if(b=_[T],L=b._gsap||bm(_)[T]._gsap,e._ptLookup[T]=k={},om[L.id]&&qs.length&&Dd(),G=y===_?T:y.indexOf(b),R&&(D=new R).init(b,z||M,e,G,y)!==!1&&(e._pt=A=new Mi(e._pt,b,D.name,0,1,D.render,D,0,D.priority),D._props.forEach(function(K){k[K]=A}),D.priority&&(E=1)),!R||z)for(S in M)Fi[S]&&(D=Am(S,M,e,G,b,y))?D.priority&&(E=1):k[S]=A=wm.call(e,b,S,"get",M[S],G,y,0,i.stringFilter);e._op&&e._op[T]&&e.kill(b,e._op[T]),x&&e._pt&&(Xs=e,En.killTweensOf(b,k,e.globalTime(t)),B=!e.parent,Xs=0),e._pt&&l&&(om[L.id]=1)}E&&Lm(e),e._onInit&&e._onInit(e)}e._onUpdate=c,e._initted=(!e._op||e._pt)&&!B,f&&t<=0&&v.render(mr,!0,!0)},aw=function(e,t,n,i,s,o,a,l){var c=(e._pt&&e._ptCache||(e._ptCache={}))[t],h,u,f,d;if(!c)for(c=e._ptCache[t]=[],f=e._ptLookup,d=e._targets.length;d--;){if(h=f[d][t],h&&h.d&&h.d._pt)for(h=h.d._pt;h&&h.p!==t&&h.fp!==t;)h=h._next;if(!h)return dm=1,e.vars[t]="+=0",Rm(e,a),dm=0,l?Fc(t+" not eligible for reset"):1;c.push(h)}for(d=c.length;d--;)u=c[d],h=u._pt||u,h.s=(i||i===0)&&!s?i:h.s+(i||0)+o*h.c,h.c=n-h.s,u.e&&(u.e=Rn(n)+Qn(u.e)),u.b&&(u.b=h.s+Qn(u.b))},lw=function(e,t){var n=e[0]?Ys(e[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return t;s=Ya({},t);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},cw=function(e,t,n,i){var s=t.ease||i||"power1.inOut",o,a;if(ci(t))a=n[e]||(n[e]=[]),t.forEach(function(l,c){return a.push({t:c/(t.length-1)*100,v:l,e:s})});else for(o in t)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Dc=function(e,t,n,i,s){return An(e)?e.call(t,n,i,s):zn(e)&&~e.indexOf("random(")?Ka(e):e},fv=ym+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",pv={};bi(fv+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return pv[r]=1});var Ln=(function(r){B_(e,r);function e(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:Ic(i))||this;var l=a.vars,c=l.duration,h=l.delay,u=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,p=l.defaults,_=l.scrollTrigger,g=l.yoyoEase,y=i.parent||En,x=(ci(n)||z_(n)?_s(n[0]):"length"in i)?[n]:gr(n),v,M,T,S,A,b,E,L;if(a._targets=x.length?bm(x):Fc("GSAP target "+n+" not found. https://gsap.com",!Oi.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Rd(c)||Rd(h)){if(i=a.vars,v=a.timeline=new Kn({data:"nested",defaults:p||{},targets:y&&y.data==="nested"?y.vars.targets:x}),v.kill(),v.parent=v._dp=ms(a),v._start=0,f||Rd(c)||Rd(h)){if(S=x.length,E=f&&tv(f),Zr(f))for(A in f)~fv.indexOf(A)&&(L||(L={}),L[A]=f[A]);for(M=0;M<S;M++)T=Fd(i,pv),T.stagger=0,g&&(T.yoyoEase=g),L&&Ya(T,L),b=x[M],T.duration=+Dc(c,ms(a),M,b,x),T.delay=(+Dc(h,ms(a),M,b,x)||0)-a._delay,!f&&S===1&&T.delay&&(a._delay=h=T.delay,a._start+=h,T.delay=0),v.to(b,T,E?E(M,b,x):0),v._ease=Nt.none;v.duration()?c=h=0:a.timeline=0}else if(m){Ic($i(v.vars.defaults,{ease:"none"})),v._ease=Uo(m.ease||i.ease||"none");var R=0,D,k,G;if(ci(m))m.forEach(function(z){return v.to(x,z,">")}),v.duration();else{T={};for(A in m)A==="ease"||A==="easeEach"||cw(A,m[A],T,m.easeEach);for(A in T)for(D=T[A].sort(function(z,B){return z.t-B.t}),R=0,M=0;M<D.length;M++)k=D[M],G={ease:k.e,duration:(k.t-(M?D[M-1].t:0))/100*c},G[A]=k.v,v.to(x,G,R),R+=G.duration;v.duration()<c&&v.to({},{duration:c-v.duration()})}}c||a.duration(c=v.duration())}else a.timeline=0;return d===!0&&!pm&&(Xs=ms(a),En.killTweensOf(x),Xs=0),$r(y,ms(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(u||!c&&!m&&a._start===Mn(y._time)&&Ui(u)&&HS(ms(a))&&y.data!=="nested")&&(a._tTime=-sn,a.render(Math.max(0,-h)||0)),_&&K_(ms(a),_),a}var t=e.prototype;return t.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,h=i<0,u=i>l-sn&&!h?l:i<sn?0:i,f,d,m,p,_,g,y,x,v;if(!c)VS(this,i,s,o);else if(u!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==h||this._lazy){if(f=u,x=this.timeline,this._repeat){if(p=c+this._rDelay,this._repeat<-1&&h)return this.totalTime(p*100+i,s,o);if(f=Mn(u%p),u===l?(m=this._repeat,f=c):(_=Mn(u/p),m=~~_,m&&m===_?(f=c,m--):f>c&&(f=c)),g=this._yoyo&&m&1,g&&(v=this._yEase,f=c-f),_=$a(this._tTime,p),f===a&&!o&&this._initted&&m===_)return this._tTime=u,this;m!==_&&(x&&this._yEase&&hv(x,g),this.vars.repeatRefresh&&!g&&!this._lock&&f!==p&&this._initted&&(this._lock=o=1,this.render(Mn(p*m),!0).invalidate()._lock=0))}if(!this._initted){if(j_(this,h?i:f,o,s,u))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=u,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(v||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&u&&!s&&!_&&(qi(this,"onStart"),this._tTime!==u))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;x&&x.render(i<0?i:x._dur*x._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(h&&am(this,i,s,o),qi(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&qi(this,"onRepeat"),(u===this._tDur||!u)&&this._tTime===u&&(h&&!this._onUpdate&&am(this,i,!0,!0),(i||!c)&&(u===this._tDur&&this._ts>0||!u&&this._ts<0)&&$s(this,1),!s&&!(h&&!a)&&(u||a||g)&&(qi(this,u===l?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,o,a,l){Uc||Ni.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),h;return this._initted||Rm(this,c),h=this._ease(c/this._dur),aw(this,i,s,o,a,h,c,l)?this.resetTo(i,s,o,a,1):(zd(this,0),this.parent||Z_(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?Cc(this):this.scrollTrigger&&this.scrollTrigger.kill(!!jn),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,Xs&&Xs.vars.overwrite!==!0)._first||Cc(this),this.parent&&o!==this.timeline.totalDuration()&&Za(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?gr(i):a,c=this._ptLookup,h=this._pt,u,f,d,m,p,_,g;if((!s||s==="all")&&kS(a,l))return s==="all"&&(this._pt=0),Cc(this);for(u=this._op=this._op||[],s!=="all"&&(zn(s)&&(p={},bi(s,function(y){return p[y]=1}),s=p),s=lw(a,s)),g=a.length;g--;)if(~l.indexOf(a[g])){f=c[g],s==="all"?(u[g]=s,m=f,d={}):(d=u[g]=u[g]||{},m=s);for(p in m)_=f&&f[p],_&&((!("kill"in _.d)||_.d.kill(p)===!0)&&Bd(this,_,"_pt"),delete f[p]),d!=="all"&&(d[p]=1)}return this._initted&&!this._pt&&h&&Cc(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Lc(1,arguments)},e.delayedCall=function(i,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(i,s,o){return Lc(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,o){return En.killTweensOf(i,s,o)},e})(Oc);$i(Ln.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});bi("staggerTo,staggerFrom,staggerFromTo",function(r){Ln[r]=function(){var e=new Kn,t=cm.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var Cm=function(e,t,n){return e[t]=n},mv=function(e,t,n){return e[t](n)},uw=function(e,t,n,i){return e[t](i.fp,n)},hw=function(e,t,n){return e.setAttribute(t,n)},Vd=function(e,t){return An(e[t])?mv:Od(e[t])&&e.setAttribute?hw:Cm},gv=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dw=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Pm=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},Im=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},fw=function(e,t,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(e,t,n),s=o},pw=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Bd(this,t,"_pt"):t.dep||(n=1),t=i;return!n},mw=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Lm=function(e){for(var t=e._pt,n,i,s,o;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:o)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:o=t,t=n}e._pt=s},Mi=(function(){function r(t,n,i,s,o,a,l,c,h){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||gv,this.d=l||this,this.set=c||Cm,this.pr=h||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=mw,this.m=n,this.mt=s,this.tween=i},r})();bi(ym+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return xm[r]=1});Yi.TweenMax=Yi.TweenLite=Ln;Yi.TimelineLite=Yi.TimelineMax=Kn;En=new Kn({sortChildren:!1,defaults:qa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Oi.stringFilter=Tm;var Oo=[],Id={},gw=[],k_=0,_w=0,nm=function(e){return(Id[e]||gw).map(function(t){return t()})},fm=function(){var e=Date.now(),t=[];e-k_>2&&(nm("matchMediaInit"),Oo.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=Yr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&t.push(n))}),nm("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),k_=e,nm("matchMedia"))},_v=(function(){function r(t,n){this.selector=n&&um(n),this.data=[],this._r=[],this.isReverted=!1,this.id=_w++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){An(n)&&(s=i,i=n,n=An);var o=this,a=function(){var c=vn,h=o.selector,u;return c&&c!==o&&c.data.push(o),s&&(o.selector=um(s)),vn=o,u=i.apply(o,arguments),An(u)&&o._r.push(u),vn=c,o.selector=h,o.isReverted=!1,u};return o.last=a,n===An?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},e.ignore=function(n){var i=vn;vn=null,n(this),vn=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Ln&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(h){return a.splice(a.indexOf(h),1)}));for(a.map(function(h){return{g:h._dur||h._delay||h._sat&&!h._sat.vars.immediateRender?h.globalTime(0):-1/0,t:h}}).sort(function(h,u){return u.g-h.g||-1/0}).forEach(function(h){return h.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Kn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof Ln)&&c.revert&&c.revert(n);s._r.forEach(function(h){return h(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Oo.length;o--;)Oo[o].id===this.id&&Oo.splice(o,1)},e.revert=function(n){this.kill(n||{})},r})(),vw=(function(){function r(t){this.contexts=[],this.scope=t,vn&&vn.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Zr(n)||(n={matches:n});var o=new _v(0,s||this.scope),a=o.conditions={},l,c,h;vn&&!o.selector&&(o.selector=vn.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?h=1:(l=Yr.matchMedia(n[c]),l&&(Oo.indexOf(o)<0&&Oo.push(o),(a[c]=l.matches)&&(h=1),l.addListener?l.addListener(fm):l.addEventListener("change",fm)));return h&&i(o,function(u){return o.add(null,u)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),Ud={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return av(i)})},timeline:function(e){return new Kn(e)},getTweensOf:function(e,t){return En.getTweensOf(e,t)},getProperty:function(e,t,n,i){zn(e)&&(e=gr(e)[0]);var s=Ys(e||{}).get,o=n?$_:Y_;return n==="native"&&(n=""),e&&(t?o((Fi[t]&&Fi[t].get||s)(e,t,n,i)):function(a,l,c){return o((Fi[a]&&Fi[a].get||s)(e,a,l,c))})},quickSetter:function(e,t,n){if(e=gr(e),e.length>1){var i=e.map(function(h){return ui.quickSetter(h,t,n)}),s=i.length;return function(h){for(var u=s;u--;)i[u](h)}}e=e[0]||{};var o=Fi[t],a=Ys(e),l=a.harness&&(a.harness.aliases||{})[t]||t,c=o?function(h){var u=new o;Xa._pt=0,u.init(e,n?h+n:h,Xa,0,[e]),u.render(1,u),Xa._pt&&Im(1,Xa)}:a.set(e,l);return o?c:function(h){return c(e,l,n?h+n:h,a,1)}},quickTo:function(e,t,n){var i,s=ui.to(e,$i((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,h){return s.resetTo(t,l,c,h)};return o.tween=s,o},isTweening:function(e){return En.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Uo(e.ease,qa.ease)),D_(qa,e||{})},config:function(e){return D_(Oi,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,o=e.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!Fi[a]&&!Yi[a]&&Fc(t+" effect requires "+a+" plugin.")}),jp[t]=function(a,l,c){return n(gr(a),$i(l||{},s),c)},o&&(Kn.prototype[t]=function(a,l,c){return this.add(jp[t](a,Zr(l)?l:(c=l)&&{},this),c)})},registerEase:function(e,t){Nt[e]=Uo(t)},parseEase:function(e,t){return arguments.length?Uo(e,t):Nt},getById:function(e){return En.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Kn(e),i,s;for(n.smoothChildTiming=Ui(e.smoothChildTiming),En.remove(n),n._dp=0,n._time=n._tTime=En._time,i=En._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Ln&&i.vars.onComplete===i._targets[0]))&&$r(n,i,i._start-i._delay),i=s;return $r(En,n,0),n},context:function(e,t){return e?new _v(e,t):vn},matchMedia:function(e){return new vw(e)},matchMediaRefresh:function(){return Oo.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||fm()},addEventListener:function(e,t){var n=Id[e]||(Id[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Id[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:JS,wrapYoyo:KS,distribute:tv,random:iv,snap:nv,normalize:ZS,getUnit:Qn,clamp:XS,splitColor:lv,toArray:gr,selector:um,mapRange:sv,pipe:YS,unitize:$S,interpolate:jS,shuffle:ev},install:G_,effects:jp,ticker:Ni,updateRoot:Kn.updateRoot,plugins:Fi,globalTimeline:En,core:{PropTween:Mi,globals:W_,Tween:Ln,Timeline:Kn,Animation:Oc,getCache:Ys,_removeLinkedListItem:Bd,reverting:function(){return jn},context:function(e){return e&&vn&&(vn.data.push(e),e._ctx=vn),vn},suppressOverwrites:function(e){return pm=e}}};bi("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return Ud[r]=Ln[r]});Ni.add(Kn.updateRoot);Xa=Ud.to({},{duration:0});var xw=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},yw=function(e,t){var n=e._targets,i,s,o;for(i in t)for(s=n.length;s--;)o=e._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=xw(o,i)),o&&o.modifier&&o.modifier(t[i],e,n[s],i))},im=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(zn(s)&&(l={},bi(s,function(h){return l[h]=1}),s=l),t){l={};for(c in s)l[c]=t(s[c]);s=l}yw(a,s)}}}},ui=Ud.registerPlugin({name:"attr",init:function(e,t,n,i,s){var o,a,l;this.tween=n;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var n=t._pt;n;)jn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},im("roundProps",hm),im("modifiers"),im("snap",nv))||Ud;Ln.version=Kn.version=ui.version="3.14.2";V_=1;mm()&&Ja();var bw=Nt.Power0,Mw=Nt.Power1,Ew=Nt.Power2,Tw=Nt.Power3,Sw=Nt.Power4,ww=Nt.Linear,Aw=Nt.Quad,Rw=Nt.Cubic,Cw=Nt.Quart,Pw=Nt.Quint,Iw=Nt.Strong,Lw=Nt.Elastic,Dw=Nt.Back,Fw=Nt.SteppedEase,Nw=Nt.Bounce,Uw=Nt.Sine,Ow=Nt.Expo,kw=Nt.Circ;var vv,Js,Qa,km,Wo,Bw,xv,Bm,Hw=function(){return typeof window<"u"},xs={},Go=180/Math.PI,el=Math.PI/180,ja=Math.atan2,yv=1e8,Hm=/([A-Z])/g,zw=/(left|right|width|margin|padding|x)/i,Vw=/[\s,\(]\S/,Jr={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},Fm=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Gw=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},Ww=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Xw=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},qw=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Rv=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Cv=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Yw=function(e,t,n){return e.style[t]=n},$w=function(e,t,n){return e.style.setProperty(t,n)},Zw=function(e,t,n){return e._gsap[t]=n},Jw=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},Kw=function(e,t,n,i,s){var o=e._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},jw=function(e,t,n,i,s){var o=e._gsap;o[t]=n,o.renderTransform(s,o)},Tn="transform",ki=Tn+"Origin",Qw=function r(e,t){var n=this,i=this.target,s=i.style,o=i._gsap;if(e in xs&&s){if(this.tfm=this.tfm||{},e!=="transform")e=Jr[e]||e,~e.indexOf(",")?e.split(",").forEach(function(a){return n.tfm[a]=vs(i,a)}):this.tfm[e]=o.x?o[e]:vs(i,e),e===ki&&(this.tfm.zOrigin=o.zOrigin);else return Jr.transform.split(",").forEach(function(a){return r.call(n,a,t)});if(this.props.indexOf(Tn)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(ki,t,"")),e=Tn}(s||t)&&this.props.push(e,t,s[e])},Pv=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},e2=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Hm,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Bm(),(!s||!s.isStart)&&!n[Tn]&&(Pv(n),i.zOrigin&&n[ki]&&(n[ki]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},Iv=function(e,t){var n={target:e,props:[],revert:e2,save:Qw};return e._gsap||ui.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},Lv,Nm=function(e,t){var n=Js.createElementNS?Js.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):Js.createElement(e);return n&&n.style?n:Js.createElement(e)},Zi=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(Hm,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,tl(t)||t,1)||""},bv="O,Moz,ms,Ms,Webkit".split(","),tl=function(e,t,n){var i=t||Wo,s=i.style,o=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(bv[o]+e in s););return o<0?null:(o===3?"ms":o>=0?bv[o]:"")+e},Um=function(){Hw()&&window.document&&(vv=window,Js=vv.document,Qa=Js.documentElement,Wo=Nm("div")||{style:{}},Bw=Nm("div"),Tn=tl(Tn),ki=Tn+"Origin",Wo.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Lv=!!tl("perspective"),Bm=ui.core.reverting,km=1)},Mv=function(e){var t=e.ownerSVGElement,n=Nm("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Qa.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Qa.removeChild(n),s},Ev=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},Dv=function(e){var t,n;try{t=e.getBBox()}catch{t=Mv(e),n=1}return t&&(t.width||t.height)||n||(t=Mv(e)),t&&!t.width&&!t.x&&!t.y?{x:+Ev(e,["x","cx","x1"])||0,y:+Ev(e,["y","cy","y1"])||0,width:0,height:0}:t},Fv=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&Dv(e))},js=function(e,t){if(t){var n=e.style,i;t in xs&&t!==ki&&(t=Tn),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(Hm,"-$1").toLowerCase())):n.removeAttribute(t)}},Ks=function(e,t,n,i,s,o){var a=new Mi(e._pt,t,n,0,1,o?Cv:Rv);return e._pt=a,a.b=i,a.e=s,e._props.push(n),a},Tv={deg:1,rad:1,turn:1},t2={grid:1,flex:1},Qs=function r(e,t,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Wo.style,l=zw.test(t),c=e.tagName.toLowerCase()==="svg",h=(c?"client":"offset")+(l?"Width":"Height"),u=100,f=i==="px",d=i==="%",m,p,_,g;if(i===o||!s||Tv[i]||Tv[o])return s;if(o!=="px"&&!f&&(s=r(e,t,n,"px")),g=e.getCTM&&Fv(e),(d||o==="%")&&(xs[t]||~t.indexOf("adius")))return m=g?e.getBBox()[l?"width":"height"]:e[h],Rn(d?s/m*u:s/100*m);if(a[l?"width":"height"]=u+(f?o:i),p=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!c?e:e.parentNode,g&&(p=(e.ownerSVGElement||{}).parentNode),(!p||p===Js||!p.appendChild)&&(p=Js.body),_=p._gsap,_&&d&&_.width&&l&&_.time===Ni.time&&!_.uncache)return Rn(s/_.width*u);if(d&&(t==="height"||t==="width")){var y=e.style[t];e.style[t]=u+i,m=e[h],y?e.style[t]=y:js(e,t)}else(d||o==="%")&&!t2[Zi(p,"display")]&&(a.position=Zi(e,"position")),p===e&&(a.position="static"),p.appendChild(Wo),m=Wo[h],p.removeChild(Wo),a.position="absolute";return l&&d&&(_=Ys(p),_.time=Ni.time,_.width=p[h]),Rn(f?m*s/u:m&&s?u/m*s:0)},vs=function(e,t,n,i){var s;return km||Um(),t in Jr&&t!=="transform"&&(t=Jr[t],~t.indexOf(",")&&(t=t.split(",")[0])),xs[t]&&t!=="transform"?(s=zc(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Wd(Zi(e,ki))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=Gd[t]&&Gd[t](e,t,n)||Zi(e,t)||Mm(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?Qs(e,t,s,n)+n:s},n2=function(e,t,n,i){if(!n||n==="none"){var s=tl(t,e,1),o=s&&Zi(e,s,1);o&&o!==n?(t=s,n=o):t==="borderColor"&&(n=Zi(e,"borderTopColor"))}var a=new Mi(this._pt,e.style,t,0,1,Pm),l=0,c=0,h,u,f,d,m,p,_,g,y,x,v,M;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Zi(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(p=e.style[t],e.style[t]=i,i=Zi(e,t)||i,p?e.style[t]=p:js(e,t)),h=[n,i],Tm(h),n=h[0],i=h[1],f=n.match(ko)||[],M=i.match(ko)||[],M.length){for(;u=ko.exec(i);)_=u[0],y=i.substring(l,u.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),_!==(p=f[c++]||"")&&(d=parseFloat(p)||0,v=p.substr((d+"").length),_.charAt(1)==="="&&(_=Bo(d,_)+v),g=parseFloat(_),x=_.substr((g+"").length),l=ko.lastIndex-x.length,x||(x=x||Oi.units[t]||v,l===i.length&&(i+=x,a.e+=x)),v!==x&&(d=Qs(e,t,p,x)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:g-d,m:m&&m<4||t==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=t==="display"&&i==="none"?Cv:Rv;return _m.test(i)&&(a.e=0),this._pt=a,a},Sv={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},i2=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Sv[n]||n,t[1]=Sv[i]||i,t.join(" ")},r2=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],xs[a]&&(l=1,a=a==="transformOrigin"?ki:Tn),js(n,a);l&&(js(n,Tn),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",zc(n,1),o.uncache=1,Pv(i)))}},Gd={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var o=e._pt=new Mi(e._pt,t,n,0,0,r2);return o.u=i,o.pr=-10,o.tween=s,e._props.push(n),1}}},Hc=[1,0,0,1,0,0],Nv={},Uv=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},wv=function(e){var t=Zi(e,Tn);return Uv(t)?Hc:t.substr(7).match(gm).map(Rn)},zm=function(e,t){var n=e._gsap||Ys(e),i=e.style,s=wv(e),o,a,l,c;return n.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Hc:s):(s===Hc&&!e.offsetParent&&e!==Qa&&!n.svg&&(l=i.display,i.display="block",o=e.parentNode,(!o||!e.offsetParent&&!e.getBoundingClientRect().width)&&(c=1,a=e.nextElementSibling,Qa.appendChild(e)),s=wv(e),l?i.display=l:js(e,"display"),c&&(a?o.insertBefore(e,a):o?o.appendChild(e):Qa.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Om=function(e,t,n,i,s,o){var a=e._gsap,l=s||zm(e,!0),c=a.xOrigin||0,h=a.yOrigin||0,u=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],p=l[2],_=l[3],g=l[4],y=l[5],x=t.split(" "),v=parseFloat(x[0])||0,M=parseFloat(x[1])||0,T,S,A,b;n?l!==Hc&&(S=d*_-m*p)&&(A=v*(_/S)+M*(-p/S)+(p*y-_*g)/S,b=v*(-m/S)+M*(d/S)-(d*y-m*g)/S,v=A,M=b):(T=Dv(e),v=T.x+(~x[0].indexOf("%")?v/100*T.width:v),M=T.y+(~(x[1]||x[0]).indexOf("%")?M/100*T.height:M)),i||i!==!1&&a.smooth?(g=v-c,y=M-h,a.xOffset=u+(g*d+y*p)-g,a.yOffset=f+(g*m+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=v,a.yOrigin=M,a.smooth=!!i,a.origin=t,a.originIsAbsolute=!!n,e.style[ki]="0px 0px",o&&(Ks(o,a,"xOrigin",c,v),Ks(o,a,"yOrigin",h,M),Ks(o,a,"xOffset",u,a.xOffset),Ks(o,a,"yOffset",f,a.yOffset)),e.setAttribute("data-svg-origin",v+" "+M)},zc=function(e,t){var n=e._gsap||new Sm(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(e),c=Zi(e,ki)||"0",h,u,f,d,m,p,_,g,y,x,v,M,T,S,A,b,E,L,R,D,k,G,z,B,K,se,N,ae,Be,He,Ye,it;return h=u=f=p=_=g=y=x=v=0,d=m=1,n.svg=!!(e.getCTM&&Fv(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[Tn]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[Tn]!=="none"?l[Tn]:"")),i.scale=i.rotate=i.translate="none"),S=zm(e,n.svg),n.svg&&(n.uncache?(K=e.getBBox(),c=n.xOrigin-K.x+"px "+(n.yOrigin-K.y)+"px",B=""):B=!t&&e.getAttribute("data-svg-origin"),Om(e,B||c,!!B||n.originIsAbsolute,n.smooth!==!1,S)),M=n.xOrigin||0,T=n.yOrigin||0,S!==Hc&&(L=S[0],R=S[1],D=S[2],k=S[3],h=G=S[4],u=z=S[5],S.length===6?(d=Math.sqrt(L*L+R*R),m=Math.sqrt(k*k+D*D),p=L||R?ja(R,L)*Go:0,y=D||k?ja(D,k)*Go+p:0,y&&(m*=Math.abs(Math.cos(y*el))),n.svg&&(h-=M-(M*L+T*D),u-=T-(M*R+T*k))):(it=S[6],He=S[7],N=S[8],ae=S[9],Be=S[10],Ye=S[11],h=S[12],u=S[13],f=S[14],A=ja(it,Be),_=A*Go,A&&(b=Math.cos(-A),E=Math.sin(-A),B=G*b+N*E,K=z*b+ae*E,se=it*b+Be*E,N=G*-E+N*b,ae=z*-E+ae*b,Be=it*-E+Be*b,Ye=He*-E+Ye*b,G=B,z=K,it=se),A=ja(-D,Be),g=A*Go,A&&(b=Math.cos(-A),E=Math.sin(-A),B=L*b-N*E,K=R*b-ae*E,se=D*b-Be*E,Ye=k*E+Ye*b,L=B,R=K,D=se),A=ja(R,L),p=A*Go,A&&(b=Math.cos(A),E=Math.sin(A),B=L*b+R*E,K=G*b+z*E,R=R*b-L*E,z=z*b-G*E,L=B,G=K),_&&Math.abs(_)+Math.abs(p)>359.9&&(_=p=0,g=180-g),d=Rn(Math.sqrt(L*L+R*R+D*D)),m=Rn(Math.sqrt(z*z+it*it)),A=ja(G,z),y=Math.abs(A)>2e-4?A*Go:0,v=Ye?1/(Ye<0?-Ye:Ye):0),n.svg&&(B=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!Uv(Zi(e,Tn)),B&&e.setAttribute("transform",B))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=p<=0?180:-180,p+=p<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),t=t||n.uncache,n.x=h-((n.xPercent=h&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-h)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+o,n.y=u-((n.yPercent=u&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-u)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Rn(d),n.scaleY=Rn(m),n.rotation=Rn(p)+a,n.rotationX=Rn(_)+a,n.rotationY=Rn(g)+a,n.skewX=y+a,n.skewY=x+a,n.transformPerspective=v+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!t&&n.zOrigin||0)&&(i[ki]=Wd(c)),n.xOffset=n.yOffset=0,n.force3D=Oi.force3D,n.renderTransform=n.svg?o2:Lv?Ov:s2,n.uncache=0,n},Wd=function(e){return(e=e.split(" "))[0]+" "+e[1]},Dm=function(e,t,n){var i=Qn(t);return Rn(parseFloat(t)+parseFloat(Qs(e,"x",n+"px",i)))+i},s2=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Ov(e,t)},zo="0deg",Bc="0px",Vo=") ",Ov=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,h=n.rotationY,u=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,p=n.scaleY,_=n.transformPerspective,g=n.force3D,y=n.target,x=n.zOrigin,v="",M=g==="auto"&&e&&e!==1||g===!0;if(x&&(u!==zo||h!==zo)){var T=parseFloat(h)*el,S=Math.sin(T),A=Math.cos(T),b;T=parseFloat(u)*el,b=Math.cos(T),o=Dm(y,o,S*b*-x),a=Dm(y,a,-Math.sin(T)*-x),l=Dm(y,l,A*b*-x+x)}_!==Bc&&(v+="perspective("+_+Vo),(i||s)&&(v+="translate("+i+"%, "+s+"%) "),(M||o!==Bc||a!==Bc||l!==Bc)&&(v+=l!==Bc||M?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Vo),c!==zo&&(v+="rotate("+c+Vo),h!==zo&&(v+="rotateY("+h+Vo),u!==zo&&(v+="rotateX("+u+Vo),(f!==zo||d!==zo)&&(v+="skew("+f+", "+d+Vo),(m!==1||p!==1)&&(v+="scale("+m+", "+p+Vo),y.style[Tn]=v||"translate(0, 0)"},o2=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,h=n.skewY,u=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,p=n.yOrigin,_=n.xOffset,g=n.yOffset,y=n.forceCSS,x=parseFloat(o),v=parseFloat(a),M,T,S,A,b;l=parseFloat(l),c=parseFloat(c),h=parseFloat(h),h&&(h=parseFloat(h),c+=h,l+=h),l||c?(l*=el,c*=el,M=Math.cos(l)*u,T=Math.sin(l)*u,S=Math.sin(l-c)*-f,A=Math.cos(l-c)*f,c&&(h*=el,b=Math.tan(c-h),b=Math.sqrt(1+b*b),S*=b,A*=b,h&&(b=Math.tan(h),b=Math.sqrt(1+b*b),M*=b,T*=b)),M=Rn(M),T=Rn(T),S=Rn(S),A=Rn(A)):(M=u,A=f,T=S=0),(x&&!~(o+"").indexOf("px")||v&&!~(a+"").indexOf("px"))&&(x=Qs(d,"x",o,"px"),v=Qs(d,"y",a,"px")),(m||p||_||g)&&(x=Rn(x+m-(m*M+p*S)+_),v=Rn(v+p-(m*T+p*A)+g)),(i||s)&&(b=d.getBBox(),x=Rn(x+i/100*b.width),v=Rn(v+s/100*b.height)),b="matrix("+M+","+T+","+S+","+A+","+x+","+v+")",d.setAttribute("transform",b),y&&(d.style[Tn]=b)},a2=function(e,t,n,i,s){var o=360,a=zn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Go:1),c=l-i,h=i+c+"deg",u,f;return a&&(u=s.split("_")[1],u==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),u==="cw"&&c<0?c=(c+o*yv)%o-~~(c/o)*o:u==="ccw"&&c>0&&(c=(c-o*yv)%o-~~(c/o)*o)),e._pt=f=new Mi(e._pt,t,n,i,c,Gw),f.e=h,f.u="deg",e._props.push(n),f},Av=function(e,t){for(var n in t)e[n]=t[n];return e},l2=function(e,t,n){var i=Av({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,h,u,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[Tn]=t,a=zc(n,1),js(n,Tn),n.setAttribute("transform",c)):(c=getComputedStyle(n)[Tn],o[Tn]=t,a=zc(n,1),o[Tn]=c);for(l in xs)c=i[l],h=a[l],c!==h&&s.indexOf(l)<0&&(d=Qn(c),m=Qn(h),u=d!==m?Qs(n,l,c,m):parseFloat(c),f=parseFloat(h),e._pt=new Mi(e._pt,a,l,u,f-u,Fm),e._pt.u=m||0,e._props.push(l));Av(a,i)};bi("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",o=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(a){return e<2?r+a:"border"+a+r});Gd[e>1?"border"+r:r]=function(a,l,c,h,u){var f,d;if(arguments.length<4)return f=o.map(function(m){return vs(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(h+"").split(" "),d={},o.forEach(function(m,p){return d[m]=f[p]=f[p]||f[(p-1)/2|0]}),a.init(l,d,u)}});var Vm={name:"css",register:Um,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var o=this._props,a=e.style,l=n.vars.startAt,c,h,u,f,d,m,p,_,g,y,x,v,M,T,S,A,b;km||Um(),this.styles=this.styles||Iv(e),A=this.styles.props,this.tween=n;for(p in t)if(p!=="autoRound"&&(h=t[p],!(Fi[p]&&Am(p,t,n,i,e,s)))){if(d=typeof h,m=Gd[p],d==="function"&&(h=h.call(n,i,e,s),d=typeof h),d==="string"&&~h.indexOf("random(")&&(h=Ka(h)),m)m(this,e,p,h,n)&&(S=1);else if(p.substr(0,2)==="--")c=(getComputedStyle(e).getPropertyValue(p)+"").trim(),h+="",gs.lastIndex=0,gs.test(c)||(_=Qn(c),g=Qn(h),g?_!==g&&(c=Qs(e,p,c,g)+g):_&&(h+=_)),this.add(a,"setProperty",c,h,i,s,0,0,p),o.push(p),A.push(p,0,a[p]);else if(d!=="undefined"){if(l&&p in l?(c=typeof l[p]=="function"?l[p].call(n,i,e,s):l[p],zn(c)&&~c.indexOf("random(")&&(c=Ka(c)),Qn(c+"")||c==="auto"||(c+=Oi.units[p]||Qn(vs(e,p))||""),(c+"").charAt(1)==="="&&(c=vs(e,p))):c=vs(e,p),f=parseFloat(c),y=d==="string"&&h.charAt(1)==="="&&h.substr(0,2),y&&(h=h.substr(2)),u=parseFloat(h),p in Jr&&(p==="autoAlpha"&&(f===1&&vs(e,"visibility")==="hidden"&&u&&(f=0),A.push("visibility",0,a.visibility),Ks(this,a,"visibility",f?"inherit":"hidden",u?"inherit":"hidden",!u)),p!=="scale"&&p!=="transform"&&(p=Jr[p],~p.indexOf(",")&&(p=p.split(",")[0]))),x=p in xs,x){if(this.styles.save(p),b=h,d==="string"&&h.substring(0,6)==="var(--"){if(h=Zi(e,h.substring(4,h.indexOf(")"))),h.substring(0,5)==="calc("){var E=e.style.perspective;e.style.perspective=h,h=Zi(e,"perspective"),E?e.style.perspective=E:js(e,"perspective")}u=parseFloat(h)}if(v||(M=e._gsap,M.renderTransform&&!t.parseTransform||zc(e,t.parseTransform),T=t.smoothOrigin!==!1&&M.smooth,v=this._pt=new Mi(this._pt,a,Tn,0,1,M.renderTransform,M,0,-1),v.dep=1),p==="scale")this._pt=new Mi(this._pt,M,"scaleY",M.scaleY,(y?Bo(M.scaleY,y+u):u)-M.scaleY||0,Fm),this._pt.u=0,o.push("scaleY",p),p+="X";else if(p==="transformOrigin"){A.push(ki,0,a[ki]),h=i2(h),M.svg?Om(e,h,0,T,0,this):(g=parseFloat(h.split(" ")[2])||0,g!==M.zOrigin&&Ks(this,M,"zOrigin",M.zOrigin,g),Ks(this,a,p,Wd(c),Wd(h)));continue}else if(p==="svgOrigin"){Om(e,h,1,T,0,this);continue}else if(p in Nv){a2(this,M,p,f,y?Bo(f,y+h):h);continue}else if(p==="smoothOrigin"){Ks(this,M,"smooth",M.smooth,h);continue}else if(p==="force3D"){M[p]=h;continue}else if(p==="transform"){l2(this,h,e);continue}}else p in a||(p=tl(p)||p);if(x||(u||u===0)&&(f||f===0)&&!Vw.test(h)&&p in a)_=(c+"").substr((f+"").length),u||(u=0),g=Qn(h)||(p in Oi.units?Oi.units[p]:_),_!==g&&(f=Qs(e,p,c,g)),this._pt=new Mi(this._pt,x?M:a,p,f,(y?Bo(f,y+u):u)-f,!x&&(g==="px"||p==="zIndex")&&t.autoRound!==!1?qw:Fm),this._pt.u=g||0,x&&b!==h?(this._pt.b=c,this._pt.e=b,this._pt.r=Xw):_!==g&&g!=="%"&&(this._pt.b=c,this._pt.r=Ww);else if(p in a)n2.call(this,e,p,c,y?y+h:h);else if(p in e)this.add(e,p,c||e[p],y?y+h:h,i,s);else if(p!=="parseTransform"){kd(p,h);continue}x||(p in a?A.push(p,0,a[p]):typeof e[p]=="function"?A.push(p,2,e[p]()):A.push(p,1,c||e[p])),o.push(p)}}S&&Lm(this)},render:function(e,t){if(t.tween._time||!Bm())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:vs,aliases:Jr,getSetter:function(e,t,n){var i=Jr[t];return i&&i.indexOf(",")<0&&(t=i),t in xs&&t!==ki&&(e._gsap.x||vs(e,"x"))?n&&xv===n?t==="scale"?Jw:Zw:(xv=n||{})&&(t==="scale"?Kw:jw):e.style&&!Od(e.style[t])?Yw:~t.indexOf("-")?$w:Vd(e,t)},core:{_removeProperty:js,_getMatrix:zm}};ui.utils.checkPrefix=tl;ui.core.getStyleSaver=Iv;(function(r,e,t,n){var i=bi(r+","+e+","+t,function(s){xs[s]=1});bi(e,function(s){Oi.units[s]="deg",Nv[s]=1}),Jr[i[13]]=r+","+e,bi(n,function(s){var o=s.split(":");Jr[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");bi("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Oi.units[r]="px"});ui.registerPlugin(Vm);var ee=ui.registerPlugin(Vm)||ui,MC=ee.core.Tween;var kv=[["THE CALL","A window in the dark.","At the end of the valley, one window still flickers. The keeper has one lantern left."],["THE OPENING","The mountain remembers.","An old door unlocks. The observatory opens its ribs, revealing the lift that once carried starlight."],["THE DESCENT","Take the light below.","The keeper lowers the lantern into the heart of the machine. For a moment, nothing happens."],["THE SPARK","One small light is enough.","The socket catches. Teeth turn. Three broken lenses begin looking for the same point in the sky."],["THE SIGNAL","Give the dark an answer.","The lenses lock. The observatory folds itself whole, and sends the lantern\u2019s light across the valley."],["THE REPLY","One window. Then another.","The signal reaches the sleeping village. A street wakes. Then the next. Someone has been waiting."],["THE HOMECOMING","You were never the last.","A light comes back from the village. The keeper returns to the rooftop. There is enough light now, for everyone."]],Bv=r=>Math.max(0,Math.min(1,r)),Xo=r=>(r=Bv(r),r*r*(3-2*r));function Hv(r){let e=Bv(r),t=(n,i)=>Xo((e-n)/(i-n));return{p:e,chapter:e<.12?0:e<.27?1:e<.42?2:e<.57?3:e<.72?4:e<.88?5:6,open:t(.12,.27),descend:t(.27,.4),spark:t(.4,.46),align:t(.44,.57),close:t(.57,.66),transmit:t(.65,.77),village:t(.75,.9),reply:t(.88,.95),dawn:t(.88,.97),returnHome:t(.87,.95)}}function zv(r){let e=document.querySelector(".lk-world");if(!e)return;if(r){let I=document.querySelector(".lk-log");I&&(I.open=!0)}let t;try{t=new li({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{let I=document.querySelector(".lk-journey");I&&(I.style.height="100svh");return}e.append(t.domElement),e.classList.add("has-webgl"),t.setPixelRatio(1),t.setClearColor(726816,1),t.outputColorSpace=Kt;let n=new jt;n.fog=new hs(726816,45,100);let i=new Li(-20,20,14,-14,.1,200),s=new Wi(10470603,2);n.add(s);let o=new hn(16762004,3);o.position.set(-15,25,10),n.add(o);let a=new hn(4950939,2);a.position.set(10,6,-10),n.add(a);let l=new Wt(1,1,1),c=new Map;function h(I,U=!1){let W=I+U;return c.has(W)||c.set(W,new xt({color:I,roughness:1,emissive:U?I:0,emissiveIntensity:U?1.7:0})),c.get(W)}function u(I,U,W,X,ge,oe,Pe,Ae,ue=!1){let de=new Ue(l,h(Ae,ue));return de.position.set(U,W,X),de.scale.set(ge,oe,Pe),I.add(de),de}let f=new $e;n.add(f);let d=new $e;f.add(d);let m=41,p=()=>(m=m*16807%2147483647,(m-1)/2147483646),_=new yn,g=[];for(let I=-12;I<=12;I++)for(let U=-10;U<=10;U++){let W=Math.sqrt(I*I+U*U*1.25);if(W>12+p()*1.5)continue;let X=-3+Math.floor(Math.sin(I*.5)*.7+Math.cos(U*.4)*.9+p()),ge=Math.max(1,Math.floor((13-W)*.5));for(let oe=0;oe<ge;oe++)g.push({x:I,y:X-oe,z:U,s:1,c:new Me(oe===0?p()>.7?"#78958c":"#496c69":p()>.5?"#263f49":"#34505a")})}let y=new Ar(l,h("#ffffff"),g.length);g.forEach((I,U)=>{_.position.set(I.x,I.y,I.z),_.scale.set(1,1,1),_.updateMatrix(),y.setMatrixAt(U,_.matrix),y.setColorAt(U,I.c)}),d.add(y);for(let I=0;I<15;I++)u(f,7-I*.32,-2+I*.28,8-I*.6,2.2,.25,.7,"#829588");for(let I=0;I<25;I++){let U=p()*Math.PI*2,W=8+p()*3,X=Math.cos(U)*W,ge=Math.sin(U)*W;if(!(ge>3&&X>3)){u(f,X,-1.7,ge,.3,2,.3,"#384b4c");for(let oe=0;oe<4;oe++)u(f,X,-1+oe*.6,ge,2.4-oe*.5,.7,2.4-oe*.5,oe%2?"#345f59":"#416f63")}}let x=new $e;f.add(x);let v=[];for(let I=0;I<4;I++){let U=new $e;U.position.y=I*3,v.push(U),x.add(U),u(U,0,0,0,8,.45,7,"#5b7373"),u(U,0,.32,0,7.5,.2,6.5,"#96a499");for(let W of[-3.5,3.5])for(let X of[-3,3])u(U,W,1.5,X,.65,2.7,.65,"#78938b"),u(U,W,2.8,X,.9,.25,.9,"#a4afa0");u(U,0,1.5,-3.1,6.8,2.7,.45,"#35545c");for(let W=-2;W<=2;W++)u(U,W*1.15,1.65,-2.84,.5,1.15,.1,"#192f3a"),u(U,W*1.15,1.65,-2.76,.18,.6,.08,"#b7885d",!0);u(U,-3.7,1.4,0,.3,2.8,6,"#496970");for(let W=-2;W<=2;W++)u(U,-3.47,1.5,W,.08,.8,.4,"#ba9164",!0);for(let W=-3;W<=3;W++)u(U,W,1,3.2,.13,1.2,.13,"#a2a48b");u(U,0,1.6,3.2,7.5,.12,.13,"#b1ae91")}let M=[];for(let I=0;I<4;I++){let U=new $e;U.position.y=12,U.rotation.y=I*Math.PI/2,x.add(U);let W=new $e;U.add(W),W.position.z=-3.4;for(let X=0;X<6;X++)u(W,0,X*.4,X*.55,7-X*.8,.45,.7,X%2?"#536d77":"#68858b");M.push(W)}u(x,0,12,0,8.6,.35,8.2,"#a7a78d");let T=new $e;f.add(T),u(T,0,.6,0,.6,.9,.5,"#e5b06c"),u(T,0,1.3,0,.55,.5,.5,"#e7d5a8"),u(T,0,1.65,0,.75,.2,.65,"#c57452"),u(T,-.2,.05,0,.25,.3,.45,"#1a303c"),u(T,.2,.05,0,.25,.3,.45,"#1a303c");let S=u(T,.48,.65,0,.25,.45,.25,"#f2cd8a",!0),A=new $e;A.position.y=4.7,f.add(A);let b=new Ue(new oc(1.2,0),h("#ffc278",!0));A.add(b);let E=[];for(let I=0;I<3;I++){let U=new $e;A.add(U);for(let W=0;W<40;W++){let X=W/40*Math.PI*2,ge=u(U,Math.cos(X)*(2.1+I*.7),Math.sin(X)*(2.1+I*.7),0,.3,.3,.35,W%5===0?"#edc686":"#6b8c86",W%5===0);ge.rotation.z=X}E.push(U)}let L=[];for(let I=0;I<34;I++){let U=p()*6.28,W=8+p()*3,X=Math.cos(U)*W,ge=Math.sin(U)*W;u(f,X,-4,ge,1.6,.7,1.2,"#213b45"),u(f,X,-3.4,ge,1.2,.6,1,"#547370"),L.push(u(f,X,-3.35,ge+.52,.5,.3,.05,"#f5b76e",!0))}let R=new $e;f.add(R),u(R,0,0,0,1.9,.18,1.7,"#b3a481");for(let I of[-.85,.85])u(R,I,.55,.7,.1,1.2,.1,"#9da795"),u(R,I,.55,-.7,.1,1.2,.1,"#9da795");let D=[u(f,2.1,7,3,.06,10,.06,"#7b8e89"),u(f,3.9,7,3,.06,10,.06,"#7b8e89")],k=new $e;k.position.set(0,3.6,6),f.add(k),u(k,0,0,0,1.4,.35,1.4,"#667c77"),u(k,0,.3,0,.65,.4,.65,"#1a343a");let G=u(k,0,.55,0,.4,.45,.4,"#ffce83",!0),z=[];for(let I=0;I<4;I++){let U=new $e;U.position.set(3.9,2.1+I*2,3.4),f.add(U);for(let W=0;W<12;W++){let X=W/12*Math.PI*2,ge=u(U,Math.cos(X)*.65,Math.sin(X)*.65,0,.3,.3,.22,W%2?"#a1a18a":"#79918a");ge.rotation.z=X}u(U,0,0,0,.3,.3,.35,"#d0b17a"),z.push(U)}let B=new $e;f.add(B);for(let I=0;I<9;I++)u(B,3-I*.36,3.45,3+I*.36,.7,.16,.7,"#a3a48a");for(let I=0;I<20;I++)u(x,4.3,I*.6,0,.13,.5,.13,"#8b9b8b"),u(x,4.7,I*.6,0,.13,.5,.13,"#8b9b8b"),u(x,4.5,I*.6,.04,.5,.08,.13,"#a3ac96");u(x,-4.15,5.8,-1,.25,11.5,.25,"#ac8a68");for(let I=0;I<5;I++)u(x,-4.15,1+I*2.2,-1,.4,.18,.4,"#c7ab7d");let K=new $e;K.position.set(0,14.8,0),f.add(K),u(K,0,0,0,1.1,1.4,1.1,"#8f9a88");let se=new $e;se.position.y=.8,K.add(se);for(let I=0;I<6;I++)u(se,0,0,I*.6,1.35-I*.12,1.35-I*.12,.7,I%2?"#cfb68b":"#637e7e");u(se,0,0,3.5,.8,.8,.12,"#c7e3d0",!0);let N=new $e;N.position.set(-3,16.8,-2),f.add(N),u(N,0,-1,0,.1,2,.1,"#c6ba97"),u(N,0,0,0,1.7,.16,.16,"#e2c28e"),u(N,.8,.2,0,.45,.6,.12,"#d6b887");let ae=new $e;ae.position.set(-20,-5,14),f.add(ae);let Be=[],He=[];for(let I=0;I<12;I++){let U=Math.floor(I/4),X=(I%4-1.5)*4.3,ge=(U-1)*4.4,oe=U*.55;u(ae,X,oe-1.2,ge,4.1,2,4.1,"#3b595c"),u(ae,X,oe-2.6,ge,3.1,1,3.1,"#29434e"),u(ae,X,oe-.12,ge,4.2,.25,4.2,"#779383"),u(ae,X,oe+1,ge,2.8,2.1,2.6,["#71938c","#a1aa94","#658b85"][I%3]);for(let ue=0;ue<4;ue++)u(ae,X,oe+2.15+ue*.25,ge,3.3-ue*.65,.3,3,"#425e64");u(ae,X+.8,oe+2.6,ge-.5,.4,1.1,.4,"#8b9a87");let Pe=[];for(let ue of[-.7,.7])Pe.push(u(ae,X+ue,oe+1.1,ge+1.32,.48,.6,.06,"#ffcb83",!0));Pe.push(u(ae,X+1.42,oe+1.1,ge,.06,.65,.6,"#ffcb83",!0)),Be.push(Pe),u(ae,X,oe+.45,ge+1.34,.42,.9,.06,"#304e50");let Ae=u(ae,X+.8,oe+3.5,ge-.5,.4,.4,.4,"#9aafa3");He.push(Ae)}let Ye=new $e;f.add(Ye);for(let I=0;I<36;I++){let U=I/35,W=-7-U*12,X=3+U*11,ge=-1.8-Math.sin(U*Math.PI)*2.5;u(Ye,W,ge,X,.7,.16,1.65,"#7e8e7b");for(let oe of[-1,1])u(Ye,W,ge+.65,X+oe*.8,.07,1.25,.07,"#8e9a85"),u(Ye,W,ge+1.2,X+oe*.8,.75,.07,.07,"#c2b18b")}let it=new un([new P(0,14,0),new P(-6,20,4),new P(-15,12,11),new P(-20,0,14)]),ie=new un([new P(-20,1,14),new P(-15,10,16),new P(-7,17,9),new P(1.7,12.6,3)]),re=new $e;f.add(re);for(let I=0;I<22;I++)u(re,0,0,0,I?.14:.45,I?.14:.45,I?.14:.45,I?"#e6c78b":"#fff1b3",!0);let ye=new $e;f.add(ye);for(let I=0;I<16;I++)u(ye,0,0,0,I?.12:.35,I?.12:.35,I?.12:.35,"#cce6c1",!0);let Oe=new $e;Oe.position.y=14,f.add(Oe);for(let I=0;I<52;I++){let U=I/52*Math.PI*2;u(Oe,Math.cos(U),0,Math.sin(U),.12,.12,.12,"#ffe2a1",!0)}let Ce=new $e;f.add(Ce),u(Ce,0,0,0,.12,.3,.12,"#e4d5ad"),u(Ce,-.18,.08,0,.3,.35,.06,"#c9edd2",!0),u(Ce,.18,.08,0,.3,.35,.06,"#c9edd2",!0);let je=new $e;f.add(je);for(let I=0;I<70;I++){let U=p()*6.28,W=5+p()*15;u(je,Math.cos(U)*W,p()*25-4,Math.sin(U)*W,.08,.08,.08,"#c8dcab",!0)}let ft={p:0},we=-1,qe=!0,Ze=0,De=0,j=new P;function H(I=0){let U=Hv(ft.p),W=U.p,X=Xo((W-.7)/.22),ge=e.clientWidth/Math.max(1,e.clientHeight),oe=14-U.descend*2+U.close*2+X*9;i.left=-oe*ge,i.right=oe*ge,i.top=oe,i.bottom=-oe,i.updateProjectionMatrix();let Pe=.72+U.open*.33+U.align*.18-U.close*.35;j.set((innerWidth<760?-1:-5)-X*5,5.5-U.descend*1.8+X*.5,X*6),i.position.set(j.x+Math.sin(Pe)*36,22-U.descend*8+X*11,j.z+Math.cos(Pe)*36),i.lookAt(j);let Ae=U.open*(1-U.close);M.forEach((Ee,O)=>{Ee.rotation.x=-Ae*1.48,Ee.position.y=Ae*(O%2)*.4}),v.forEach((Ee,O)=>{Ee.position.x=(O%2?1:-1)*U.descend*7.7*(1-U.close),Ee.position.y=O*3+Ae*O*.35});let ue=3,de=1+U.open*10-U.descend*7.4,Le=3;ue=ue*(1-U.spark),Le=3+U.spark*3,ue=ue*(1-U.returnHome)+U.returnHome*1.7,de=de*(1-U.returnHome)+U.returnHome*12.5,Le=Le*(1-U.returnHome)+U.returnHome*3,T.position.set(ue,de,Le),T.rotation.y=.3+U.descend*.7-U.returnHome*.9,T.scale.setScalar(1.2),R.position.set(3,.85+U.open*10-U.descend*7.4+U.returnHome*7.4,3),D.forEach((Ee,O)=>{Ee.position.set(2.1+O*1.8,(R.position.y+12)/2,3),Ee.scale.y=Math.max(.2,12-R.position.y)}),S.visible=U.spark<.75,G.visible=U.spark>.1,G.scale.setScalar(.3+U.spark*.7),A.position.set(0,4.7+U.close*8,6*(1-U.close)),A.rotation.y=Pe,A.scale.setScalar(.28+U.descend*.82-U.close*.5),b.rotation.set(W*5,W*9,W*2),b.scale.setScalar(.25+U.spark*.9),b.material=h(U.spark>.5?"#ffe8a3":"#526c71",U.spark>.5),E.forEach((Ee,O)=>{Ee.rotation.set((1-U.align)*(O+1)*.8,(1-U.align)*(O+1)*1.1,W*(1-U.align)*(O%2?1:-1)*6),Ee.scale.setScalar(.6+U.spark*.4)}),B.visible=U.descend>.6&&U.close<.5,z.forEach((Ee,O)=>Ee.rotation.z=U.spark*(W-.4)*28*(O%2?1:-1)),se.rotation.x=-.2-U.align*.6,se.rotation.y=-U.transmit*.7,N.rotation.y=Math.sin(I*.35)*.3,Be.forEach((Ee,O)=>Ee.forEach(xe=>xe.visible=U.village>(O+.3)/13)),L.forEach((Ee,O)=>Ee.visible=U.village>O/38+.05),He.forEach((Ee,O)=>{Ee.visible=U.village>O/13,Ee.position.y=3+Math.floor(O/4)*.55+(I*.45+O*.3)%2.2,Ee.scale.setScalar(.3+(I*.45+O*.3)%2.2*.2)}),re.visible=W>=.65&&W<.8,re.children.forEach((Ee,O)=>{let xe=Math.max(0,U.transmit-O*.014);Ee.position.copy(it.getPoint(xe)),Ee.visible=U.transmit>=O*.014}),ye.visible=W>.88&&W<.965,ye.children.forEach((Ee,O)=>{let xe=Math.max(0,U.reply-O*.018);Ee.position.copy(ie.getPoint(xe)),Ee.visible=U.reply>=O*.018}),Oe.visible=U.transmit>0,Oe.scale.setScalar(1),Oe.position.y=15+U.transmit*2,Oe.children.forEach((Ee,O)=>{let xe=O/52*Math.PI*2;Ee.position.set(Math.cos(xe)*(1+U.transmit*12),0,Math.sin(xe)*(1+U.transmit*12)),Ee.visible=U.transmit<.85}),Ce.visible=U.reply>.9,Ce.position.set(2.4+Math.sin(I*.6)*.3,13.6+Math.sin(I*.8)*.2,3.5),Ce.rotation.y=Math.sin(I*3)*.4,je.rotation.y=I*.012+W*.12,s.intensity=1.7+U.dawn*1.5,o.intensity=2.3+U.dawn*2;let Ne=new Me("#0b1720").lerp(new Me("#789d96"),U.dawn*.75);if(t.setClearColor(Ne,1),n.fog.color.copy(Ne),t.render(n,i),e.dataset.scrollProgress=W.toFixed(3),e.dataset.storyBeat=String(U.chapter+1),e.dataset.litWindows=String(Be.filter((Ee,O)=>U.village>(O+.3)/13).length),U.chapter!==we){we=U.chapter;let Ee=kv[U.chapter],O=document.querySelector(".lk-caption");O.querySelector("small").textContent=Ee[0],O.querySelector("h2").textContent=Ee[1],O.querySelector("p").textContent=Ee[2]}let _e=Xo((W-.09)/.04);ee.set(".lk-caption",{opacity:_e,y:20*(1-_e)}),document.querySelector(".lk-stage")?.classList.toggle("is-ending",W>.72),document.querySelector(".lk-stage")?.classList.toggle("is-dawn",U.dawn>.5),ee.set(".lk-hero",{opacity:1-Xo(W/.12),y:-Xo(W/.12)*50}),ee.set(".lk-transmission",{opacity:1-Xo(W/.15)}),ee.set(".lk-coordinate",{opacity:1-U.open}),ee.set(".lk-track i",{scaleX:W}),document.querySelector(".lk-progress-count").textContent=`${String(U.chapter+1).padStart(2,"0")} / 07`,document.querySelector(".lk-depth b").textContent=Math.round(1240-U.descend*230+U.returnHome*230).toLocaleString()}function _t(){t.setSize(Math.min(680,Math.round(e.clientWidth*.48)),Math.min(460,Math.round(e.clientHeight*.48)),!1),H()}_t();let ct=r?void 0:ee.timeline({scrollTrigger:{trigger:".lk-journey",start:"top top",end:"bottom bottom",scrub:.9},defaults:{ease:"none"}}).to(ft,{p:1,duration:1}),Je=new IntersectionObserver(([I])=>{qe=I.isIntersecting,qe&&F()});Je.observe(e);function Fe(I){Ze=0,!(document.hidden||!qe)&&(I-De>40&&(H(r?0:I*.001),De=I),F())}function F(){!Ze&&!document.hidden&&qe&&!r&&(Ze=requestAnimationFrame(Fe))}let w=()=>{document.hidden?(cancelAnimationFrame(Ze),Ze=0):F()};return document.addEventListener("visibilitychange",w),window.addEventListener("resize",_t),F(),()=>{cancelAnimationFrame(Ze),Je.disconnect(),ct?.scrollTrigger?.kill(),ct?.kill(),window.removeEventListener("resize",_t),document.removeEventListener("visibilitychange",w),l.dispose(),b.geometry.dispose(),c.forEach(I=>I.dispose()),t.dispose(),t.domElement.remove()}}var nl={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};var Ji=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},c2=new Li(-1,1,1,-1,0,1),Gm=class extends vt{constructor(){super(),this.setAttribute("position",new lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new lt([0,2,0,0,2,0],2))}},u2=new Gm,eo=class{constructor(e){this._mesh=new Ue(u2,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,c2)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var qo=class extends Ji{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Ot?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ps.clone(e.uniforms),this.material=new Ot({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new eo(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Vc=class extends Ji{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}},Xd=class extends Ji{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var il=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new ve);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qo(nl),this.copyPass.material.blending=hr,this.clock=new hc}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let i=0,s=this.passes.length;i<s;i++){let o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){let a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vc!==void 0&&(o instanceof Vc?n=!0:o instanceof Xd&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ve);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var qd=class extends Ji{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Me}render(e,t,n){let i=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}};var Vv={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Me(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};var to=class r extends Ji{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new ve(e.x,e.y):new ve(256,256),this.clearColor=new Me(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,o,{type:wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let u=new gn(s,o,{type:wn});u.texture.name="UnrealBloomPass.h"+h,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);let f=new gn(s,o,{type:wn});f.texture.name="UnrealBloomPass.v"+h,f.texture.generateMipmaps=!1,this.renderTargetsVertical.push(f),s=Math.round(s/2),o=Math.round(o/2)}let a=Vv;this.highPassUniforms=ps.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Ot({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new ve(1/s,1/o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ps.clone(nl.uniforms),this.blendMaterial=new Ot({uniforms:this.copyUniforms,vertexShader:nl.vertexShader,fragmentShader:nl.fragmentShader,premultipliedAlpha:!0,blending:Hs,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Me,this._oldClearAlpha=1,this._basic=new bn,this._fsQuad=new eo(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new ve(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),a=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=o}_getSeparableBlurMaterial(e){let t=[],n=e/3;for(let i=0;i<e;i++)t.push(.39894*Math.exp(-.5*i*i/(n*n))/n);return new Ot({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ve(.5,.5)},direction:{value:new ve(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`

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

				}`})}_getCompositeMaterial(e){return new Ot({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

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

		}`};var rl=class extends Ji{constructor(){super(),this.isOutputPass=!0,this.uniforms=ps.clone(Gc.uniforms),this.material=new ka({name:Gc.name,uniforms:this.uniforms,vertexShader:Gc.vertexShader,fragmentShader:Gc.fragmentShader}),this._fsQuad=new eo(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Vt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===pc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===mc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Xi?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===vc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===xc?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===_c&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var no=class extends jt{constructor(){super(),this.name="RoomEnvironment";let e=new Wt;e.deleteAttribute("uv");let t=new xt({side:In}),n=new xt,i=new Ii(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Ue(e,t);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ar(e,n,6),a=new yn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Ue(e,sl(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Ue(e,sl(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new Ue(e,sl(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new Ue(e,sl(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let f=new Ue(e,sl(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Ue(e,sl(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(let t of e)t.dispose()}};function sl(r){return new ur({color:0,emissive:16777215,emissiveIntensity:r})}var Yo=Math.PI*2,h2=new Os([[0,.085],[.2,.085],[.33,.07],[.37,0],[.45,0],[.5,.06],[.62,.17],[.8,.33],[.93,.53],[1,.72],[1.03,.86]].map(([r,e])=>new ve(r,e))),d2=new Os([[0,.17],[.25,.175],[.45,.205],[.62,.28],[.78,.4],[.89,.56],[.95,.72],[.975,.86]].map(([r,e])=>new ve(r,e))),f2=Array.from({length:257},(r,e)=>h2.getPointAt(e/256)),Wv=Array.from({length:257},(r,e)=>d2.getPointAt(e/256));function Xv(r,e){let t=Math.max(0,Math.min(1,e))*256,n=Math.min(255,Math.floor(t)),i=t-n;return{r:r[n].x+(r[n+1].x-r[n].x)*i,y:r[n].y+(r[n+1].y-r[n].y)*i}}function ys(r,e,t,n=new P){let{r:i,y:s}=Xv(t?Wv:f2,e);return n.set(Math.cos(r)*i,s,Math.sin(r)*i)}function qv(r){return Xv(Wv,r)}var Xm=r=>.38+.045*Math.sin(3*r+1.1)+.022*Math.sin(7*r+2.3)+.007*Math.sin(19*r),qm=r=>.68+.06*Math.sin(2*r+.4)+.03*Math.sin(5*r+4.1)+.008*Math.sin(17*r+1),Ym=11,p2=()=>((Ym=Ym*16807%2147483647)-1)/2147483646;function ol(r,e){return Array.from({length:r},(t,n)=>e+(n+.5+(p2()-.5)*.55)*(Yo/r))}var Kr=[{lower:()=>0,upper:Xm,low:0,high:.38,cracks:ol(2,.6),label:"FOOT"},{lower:Xm,upper:qm,low:.38,high:.68,cracks:ol(5,.2),label:"BODY"},{lower:qm,upper:()=>1,low:.68,high:1,cracks:ol(6,.9),label:"RIM"}];function Gv(r,e,t){let n=Kr[r],i=n.cracks.length,s=n.cracks[e%i]+Math.floor(e/i)*Yo,o=r*3.1+e%i*1.7;return s+.11*Math.sin(t*3.2+o)+.035*Math.sin(t*11+o*2)+.012*Math.sin(t*29+o)}function Wc(r,e,t,n){let i=Kr[r],s=Gv(r,e,n),o=Gv(r,e+1,n),a=s+(o-s)*t,l=i.lower(a),c=i.upper(a);return{theta:a,t:r===0?c*n:l+(c-l)*n}}function m2(r,e){let t=r===0?30:16,n=r===0?12:10,i=[],s=[],o=[],a=new vt,l=new P,c=new P,h=new P,u=new P,f=L=>{let R=i.length/3;for(let D=0;D<=n;D++)for(let k=0;k<=t;k++){let{theta:G,t:z}=Wc(r,e,k/t,D/n);ys(G,z,L,l),i.push(l.x,l.y,l.z),s.push((G/Yo%1+1)%1,z)}return R},d=f(!1);for(let L=0;L<n;L++)for(let R=0;R<t;R++){let D=d+L*(t+1)+R;o.push(D,D+t+1,D+1,D+1,D+t+1,D+t+2)}a.addGroup(0,o.length,0);let m=o.length,p=f(!0);for(let L=0;L<n;L++)for(let R=0;R<t;R++){let D=p+L*(t+1)+R;o.push(D,D+1,D+t+1,D+1,D+t+2,D+t+1)}a.addGroup(m,o.length-m,1);let _=o.length,g=new P,y=Wc(r,e,.5,.5);ys(y.theta,y.t,!1,g).add(ys(y.theta,y.t,!0,l)).multiplyScalar(.5);let x=L=>{let R=i.length/3;for(let[D,k]of L){let{theta:G,t:z}=Wc(r,e,D,k);ys(G,z,!1,l),i.push(l.x,l.y,l.z),s.push(D,0),ys(G,z,!0,l),i.push(l.x,l.y,l.z),s.push(D,1)}for(let D=0;D<L.length-1;D++){let k=R+D*2;for(let G of[[k,k+2,k+1],[k+1,k+2,k+3]]){c.fromArray(i,G[0]*3),h.fromArray(i,G[1]*3),u.fromArray(i,G[2]*3);let z=h.clone().sub(c).cross(u.clone().sub(c)),B=c.clone().add(h).add(u).multiplyScalar(1/3).sub(g);o.push(...z.dot(B)>=0?G:[G[0],G[2],G[1]])}}},v=(L,R)=>Array.from({length:L+1},(D,k)=>R(k/L));x(v(t,L=>[L,1])),(r!==0||Kr[0].cracks.length>1)&&(x(v(n,L=>[0,L])),x(v(n,L=>[1,L]))),r!==0&&x(v(t,L=>[L,0])),a.addGroup(_,o.length-_,2),a.setIndex(o),a.setAttribute("position",new lt(i,3)),a.setAttribute("uv",new lt(s,2)),a.computeVertexNormals();let M=0,T=new P,S=new P;for(let L=0;L<m;L+=3){c.fromArray(i,o[L]*3),h.fromArray(i,o[L+1]*3),u.fromArray(i,o[L+2]*3);let R=h.clone().sub(c).cross(u.clone().sub(c)),D=R.length()/2;M+=D,T.addScaledVector(R.normalize(),D),S.addScaledVector(c.add(h).add(u).multiplyScalar(1/3),D)}S.multiplyScalar(1/M).lerp(g,.5),T.normalize(),a.translate(-S.x,-S.y,-S.z);let A=new _n().setFromUnitVectors(T,new P(0,1,0)),b=1/0,E=a.getAttribute("position");for(let L=0;L<E.count;L++)b=Math.min(b,l.fromBufferAttribute(E,L).applyQuaternion(A).y);return{geometry:a,home:S,normal:T,restLift:-b,area:M,band:r,label:Kr[r].label}}function Wm(r,e,t,n=!1){let i=new P,s=new P,o=Array.from({length:e+(n?0:1)},(l,c)=>{let{theta:h,t:u}=r(c/e);ys(h,u,!1,i),ys(h,u,!0,s);let f=i.clone().sub(s).normalize();return t?i.clone().addScaledVector(f,.004):s.clone().addScaledVector(f,-.004)}),a=new un(o,n,"centripetal");return{curve:a,length:a.getLength(),outer:t}}function Yv(){Ym=11,Kr[0].cracks=ol(2,.6),Kr[1].cracks=ol(5,.2),Kr[2].cracks=ol(6,.9);let r=[];Kr.forEach((n,i)=>n.cracks.forEach((s,o)=>r.push(m2(i,o))));let e=[];for(let n of[!0,!1])e.push(Wm(i=>({theta:i*Yo,t:Xm(i*Yo)}),160,n,!0)),e.push(Wm(i=>({theta:i*Yo,t:qm(i*Yo)}),160,n,!0)),Kr.forEach((i,s)=>i.cracks.forEach((o,a)=>e.push(Wm(l=>Wc(s,a,0,s===0?.02+l*.98:l),28,n))));let t=Kr[2].cracks.map((n,i)=>{let{theta:s}=Wc(2,i,0,1),o=ys(s,1,!1),a=ys(s,1,!0);return[o,o.clone().lerp(a,.5).add(new P(0,.004,0)),a]});for(let n of t){let i=new un(n);e.push({curve:i,length:i.getLength(),outer:!0})}return{shards:r,seams:e}}var Yd=[["THE RITUAL","Forty-one winters of tea.","Every morning began with this bowl. Warm in two hands, glazed the colour of first snow, never once chipped.","made by hand, 1984"],["THE FALL","It took less than a second.","A sleeve catches the shelf. The bowl tips, turns once in the air, and a lifetime of mornings becomes thirteen pieces.","0.41 seconds"],["THE GATHERING","Keep every piece.","Nothing is swept away. Each fragment is lifted, numbered and weighed. Even the smallest one belongs to the whole.","13 of 13 found"],["THE MENDING","Repair is a kind of patience.","Joined with sap from the urushi tree, the pieces cure for weeks in a damp, dark box. You cannot hurry lacquer.","day 47, still waiting"],["THE GOLD","Don\u2019t hide the break.","Powdered gold is brushed into every seam. The cracks become the most beautiful lines on the bowl.","every crack, illuminated"],["THE RETURN","More beautiful for having been broken.","Whole again, but not the same. The bowl now carries its history where everyone can see it.","nothing hidden"],["THE MORNING","And tomorrow, tea.","The kettle sings. The bowl is warm in two hands again, and every morning now begins with gold.","the ritual continues"]],$d=[0,.12,.26,.4,.58,.74,.88],$o=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),dn=r=>(r=$o(r),r*r*(3-2*r)),qn=(r,e,t)=>$o((r-e)/(t-e));function $v(r){let e=$o(r),t=0;return $d.forEach((n,i)=>{e>=n&&(t=i)}),{p:e,chapter:t,wobble:dn(qn(e,.12,.165)),drop:qn(e,.165,.195),shatter:qn(e,.195,.262),gather:dn(qn(e,.268,.355)),labels:dn(qn(e,.31,.345))*(1-dn(qn(e,.385,.405))),mend:qn(e,.405,.555),urushi:dn(qn(e,.548,.6)),dust:qn(e,.6,.705),gold:dn(qn(e,.625,.725)),sweep:dn(qn(e,.7,.86)),turn:dn(qn(e,.74,.88)),settle:dn(qn(e,.86,.92)),tea:dn(qn(e,.905,.975)),dark:dn(qn(e,.15,.2))*(1-dn(qn(e,.86,.94))),deep:dn(qn(e,.58,.64))*(1-dn(qn(e,.8,.88)))}}var Ki=(r,e,t)=>new P(r,e,t),qc=1.6,Xc=Ki(0,.43,0),$m=Ki(0,qc+Xc.y,0),g2=Ki(0,qc+.75,0),Zd=Ki(1.3,$m.y+.02,.82),io=Ki(2.35,.95,2.45);function Yc(r,e,t,n=!0){let i=document.createElement("canvas");i.width=r,i.height=e,t(i.getContext("2d"));let s=new Cr(i);return n&&(s.colorSpace=Kt),s.wrapS=Aa,s.anisotropy=4,s}var jr=7,dt=()=>((jr=jr*16807%2147483647)-1)/2147483646;function Zv(r){return jr=r?91:7,Yc(1024,512,e=>{let t=e.createLinearGradient(0,512,0,0);r?(t.addColorStop(0,"#c9c2ad"),t.addColorStop(.3,"#e3dccb"),t.addColorStop(.85,"#ece6d8"),t.addColorStop(1,"#d8a679")):(t.addColorStop(0,"#9c7656"),t.addColorStop(.2,"#a98262"),t.addColorStop(.235,"#e6dccb"),t.addColorStop(.75,"#efe8db"),t.addColorStop(.93,"#e4c7a6"),t.addColorStop(1,"#c98b5c")),e.fillStyle=t,e.fillRect(0,0,1024,512);for(let n=0;n<70;n++){let i=dt()*1024,s=40+dt()*330,o=10+dt()*40,a=e.createRadialGradient(i,s,0,i,s,o);a.addColorStop(0,`rgba(${r?"226,214,192":"236,220,196"},${.12+dt()*.16})`),a.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=a,e.fillRect(i-o,s-o,o*2,o*2)}for(let n=0;n<2600;n++){let i=dt()*1024,s=dt()*(r?512:395);e.fillStyle=dt()>.55?`rgba(92,55,32,${.25+dt()*.5})`:`rgba(255,252,244,${.3+dt()*.5})`,e.beginPath(),e.arc(i,s,dt()*1.6+.3,0,7),e.fill()}if(r){e.strokeStyle="rgba(150,104,62,.28)",e.lineWidth=5,e.beginPath(),e.moveTo(0,512-.6*512),e.lineTo(1024,512-.6*512),e.stroke();let n=e.createLinearGradient(0,512,0,300);n.addColorStop(0,"rgba(146,150,120,.45)"),n.addColorStop(1,"rgba(146,150,120,0)"),e.fillStyle=n,e.fillRect(0,300,1024,212)}else{for(let n=0;n<46;n++){let i=dt()*1024,s=20+dt()*70,o=4+dt()*9,a=e.createLinearGradient(0,0,0,s);a.addColorStop(0,"rgba(196,128,82,.75)"),a.addColorStop(1,"rgba(220,170,128,0)"),e.fillStyle=a,e.beginPath(),e.ellipse(i,s*.45,o,s*.55,0,0,7),e.fill()}for(let n=0;n<1600;n++)e.fillStyle=`rgba(${dt()>.5?"60,36,20":"214,178,140"},${.2+dt()*.3})`,e.fillRect(dt()*1024,400+dt()*112,1.4,1.4)}})}function Jv(r){return jr=3,Yc(256,128,e=>{e.fillStyle="rgb(70,70,70)",e.fillRect(0,0,256,128),r||(e.fillStyle="rgb(235,235,235)",e.fillRect(0,128-.22*128,256,.22*128));for(let t=0;t<400;t++){let n=Math.round(110+dt()*80);e.fillStyle=`rgb(${n},${n},${n})`,e.fillRect(dt()*256,dt()*128,2,2)}},!1)}function _2(){return jr=19,Yc(256,64,r=>{r.fillStyle="#c79c76",r.fillRect(0,0,256,64);for(let e=0;e<900;e++)r.fillStyle=`rgba(${dt()>.5?"120,74,44":"232,204,170"},${.3+dt()*.4})`,r.fillRect(dt()*256,dt()*64,1.5,1.5);r.fillStyle="#efe6d6",r.fillRect(0,0,256,5),r.fillRect(0,59,256,5)})}function v2(){return jr=37,Yc(256,256,r=>{let e=r.createRadialGradient(128,128,10,128,128,128);e.addColorStop(0,"#86a346"),e.addColorStop(.75,"#6c8a33"),e.addColorStop(1,"#4f6726"),r.fillStyle=e,r.fillRect(0,0,256,256);for(let t=0;t<900;t++){let n=dt()*6.283,i=Math.sqrt(dt())*110;r.fillStyle=`rgba(${dt()>.4?"214,226,160":"120,146,62"},${.18+dt()*.35})`,r.beginPath(),r.arc(128+Math.cos(n)*i,128+Math.sin(n)*i,.6+dt()*2.2,0,7),r.fill()}})}function Jd(r){return Yc(64,64,e=>{let t=e.createRadialGradient(32,32,0,32,32,32);t.addColorStop(0,r),t.addColorStop(.35,r.replace(/[\d.]+\)$/,".45)")),t.addColorStop(1,"rgba(0,0,0,0)"),e.fillStyle=t,e.fillRect(0,0,64,64)})}var ro=[[0,[.3,5.3,7.2],[-1.3,2,0]],[.1,[1.6,4.6,6.5],[-.95,1.95,.2]],[.165,[3.6,3.1,7.4],[.2,1.75,.7]],[.2,[5.4,1.8,8.2],[1.3,1.05,2]],[.262,[6.6,3.4,9.8],[1,1.2,2]],[.33,[-.35,10,6],[-.45,0,3.15]],[.4,[-.4,9.7,5.8],[-.5,0,3.1]],[.48,[-2.6,4.2,7.8],[-.6,1.9,.8]],[.56,[.4,3.5,6.4],[-.7,2.3,0]],[.66,[-1.6,3.6,5.4],[-.75,2.3,0]],[.76,[2.3,4.6,7.6],[0,3.45,0]],[.84,[0,8.4,4.9],[0,3.3,.5]],[.92,[-.2,5.2,6.6],[-1,2,0]],[1,[.3,5.3,7.2],[-1.3,2,0]]];function Kv(r,e){let t=document.querySelector(".gs-world"),n=document.querySelector(".gs-stage");if(!t||!n)return;let i;try{i=new li({antialias:!0,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".gs-journey")?.style.setProperty("height","100svh");return}t.append(i.domElement),t.classList.add("has-webgl"),i.setPixelRatio(Math.min(devicePixelRatio,e?1.5:1.75)),i.outputColorSpace=Kt,i.toneMapping=Xi,i.toneMappingExposure=1.05,i.shadowMap.enabled=!0,i.shadowMap.type=Th;let s=new jt,o=new Me;s.background=o;let a=new qr(i),l=new no,c=a.fromScene(l,.035);s.environment=c.texture;let h=new Ht(30,1,.1,80),u=new Pr(16774370,9075302,1.1);s.add(u);let f=new hn(16769725,2.6);f.position.set(4.5,8,5),f.castShadow=!0,f.shadow.mapSize.set(2048,2048),f.shadow.bias=-4e-4,f.shadow.normalBias=.02,f.shadow.radius=6,Object.assign(f.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:22}),s.add(f,f.target);let d=new hn(14672882,1.2);d.position.set(-5,4,-6),s.add(d);let m=new Ii(16766874,0,6,1.8);s.add(m);let p=new Ue(new On(60,60),new cc({opacity:.2}));p.rotation.x=-Math.PI/2,p.receiveShadow=!0,s.add(p);let _=Jd("rgba(255,214,150,1)"),g=new Ue(new On(9,9),new bn({map:_,transparent:!0,opacity:0,depthWrite:!1,blending:Hs}));g.rotation.x=-Math.PI/2,g.position.set(.6,.003,1.2),s.add(g);let y=new xt({color:3091239,roughness:.78,envMapIntensity:.3}),x=new $e,v=new Ue(new cn(1.25,1.32,qc-.06,96),y);v.position.y=(qc-.06)/2;let M=new Ue(new cn(1.34,1.34,.06,96),y);M.position.y=qc-.03;for(let Z of[v,M])Z.castShadow=!0,Z.receiveShadow=!0,x.add(Z);s.add(x);let{shards:T,seams:S}=Yv(),A=new cr({map:Zv(!1),roughnessMap:Jv(!1),roughness:1,clearcoat:.55,clearcoatRoughness:.28,sheen:.2,sheenColor:new Me(16773084)}),b=new cr({map:Zv(!0),roughnessMap:Jv(!0),roughness:1,clearcoat:.6,clearcoatRoughness:.2}),E=new xt({map:_2(),roughness:.95}),L=T.reduce((Z,q)=>Z+q.area,0),R=T.length,D=T.map((Z,q)=>q).sort((Z,q)=>T[Z].band-T[q].band||Z-q),k=Ki(0,1,0);jr=29;let G=T.map((Z,q)=>{let me=new Ue(Z.geometry,[A,b,E]);me.castShadow=!0,me.receiveShadow=!0,s.add(me);let ke=Z.home.clone().sub(Xc),mt=Z.normal.clone().setY(0).normalize().add(Ki(dt()-.5,0,dt()-.5).multiplyScalar(.9)).normalize().multiplyScalar(.9+dt()*1.6).add(Ki(0,.15+dt()*1.3,0)),Dt=new _n().setFromAxisAngle(Ki(dt()-.5,dt()-.5,dt()-.5).normalize(),.8+dt()*2.2),on=e?3:5,$t=D.indexOf(q),kt=$t%on,ot=Math.floor($t/on),Bt=e?Ki((kt-1)*.84-.45+ot%2*.12,Z.restLift+.004,1.95+ot*.78):Ki((kt-2)*.98+.55+ot%2*.2,Z.restLift+.004,2+ot*.86),be=new _n().setFromAxisAngle(k,(dt()-.5)*.7).multiply(new _n().setFromUnitVectors(Z.normal,k)),at=Z.area/L*312;return{mesh:me,local:ke,burst:mt,spin:Dt,gridPos:Bt,gridQuat:be,slot:$t,grams:at,bob:dt()*6.28}}),z=new cr({color:2822924,metalness:.1,roughness:.5,clearcoat:.6,emissive:0}),B=new $e;s.add(B);let K=S.map(Z=>{let q=Math.max(6,Math.round(Z.length*70)),me=new oi(Z.curve,q,Z.outer?.0105:.009,6,!1),ke=new Ue(me,z);return ke.position.copy(Xc).negate(),ke.castShadow=!1,B.add(ke),{mesh:ke,total:me.index.count,step:36}}),se=S.filter(Z=>Z.outer).reduce((Z,q)=>Z+q.length,0)*6,N=e?900:1600,ae=new Float32Array(N*3),Be=new Float32Array(N*3),He=new Float32Array(N),Ye=S.filter(Z=>Z.outer),it=new P;jr=53;for(let Z=0;Z<N;Z++){let q=dt()*Ye.reduce((mt,Dt)=>mt+Dt.length,0),me=Ye[0];for(let mt of Ye){if(q<mt.length){me=mt;break}q-=mt.length}me.curve.getPointAt(dt(),it).sub(Xc),it.toArray(ae,Z*3);let ke=dt()*Math.PI*2,Ke=.8+dt()*1.5;Be.set([Math.cos(ke)*Ke,.5+dt()*1.9,Math.sin(ke)*Ke],Z*3),He[Z]=dt()}let ie=new vt,re=new Float32Array(N*3);ie.setAttribute("position",new Ut(re,3));let ye=new si({size:.05,map:Jd("rgba(255,214,120,1)"),color:16765834,transparent:!0,opacity:0,depthWrite:!1,blending:Hs,sizeAttenuation:!0}),Oe=new Jn(ie,ye);Oe.frustumCulled=!1,s.add(Oe);let Ce=140,je=new Float32Array(Ce*3);jr=61;for(let Z=0;Z<Ce;Z++)je.set([(dt()-.5)*3.4,dt()*1.6,(dt()-.5)*3.4],Z*3);let ft=new vt,we=new Float32Array(Ce*3);ft.setAttribute("position",new Ut(we,3));let qe=new si({size:.028,color:15656146,transparent:!0,opacity:0,depthWrite:!1}),Ze=new Jn(ft,qe);Ze.frustumCulled=!1,s.add(Ze);let De=260,j=new vt,H=new Float32Array(De*3);jr=71;for(let Z=0;Z<De;Z++)H.set([(dt()-.5)*9,dt()*5,(dt()-.5)*7],Z*3);let _t=new Float32Array(H);j.setAttribute("position",new Ut(_t,3));let ct=new si({size:.022,map:Jd("rgba(255,244,222,1)"),transparent:!0,opacity:.5,depthWrite:!1}),Je=new Jn(j,ct);Je.frustumCulled=!1,s.add(Je);let Fe=new cr({map:v2(),roughness:.55,clearcoat:.4,clearcoatRoughness:.3}),F=new Ue(new Mo(1,72),Fe);F.rotation.x=-Math.PI/2;let w=new $e;w.add(F),s.add(w);let I=Jd("rgba(255,255,255,1)"),U=Array.from({length:7},(Z,q)=>{let me=new Us(new Ns({map:I,transparent:!0,opacity:0,depthWrite:!1,color:16777215}));return s.add(me),{sprite:me,offset:q/7}}),W=new il(i);W.addPass(new qd(s,h));let X=new to(new ve(512,512),0,.5,.9);W.addPass(X),W.addPass(new rl);let ge=new un(ro.map(Z=>Ki(...Z[1])),!1,"centripetal"),oe=new un(ro.map(Z=>Ki(...Z[2])),!1,"centripetal"),Pe=new P,Ae=new P;function ue(Z){let q=0;for(;q<ro.length-2&&Z>ro[q+1][0];)q++;let me=$o((Z-ro[q][0])/(ro[q+1][0]-ro[q][0])),ke=(q+me)/(ro.length-1);ge.getPoint(ke,Pe),oe.getPoint(ke,Ae)}let de=new P,Le=new _n,Ne=new Xn,_e=new _n().setFromEuler(new Xn(.35,.9,-1.45));function Ee(Z,q){if(Z.drop<=0){let me=Z.wobble;de.lerpVectors($m,Zd,me*me);let ke=Math.sin(me*22)*.09*me*(1-me);Ne.set(ke*.6,Z.p*1.6+me*.5,ke-me*me*.55),Le.setFromEuler(Ne)}else if(Z.drop<1){let me=Z.drop;de.lerpVectors(Zd,io,1-(1-me)*(1-me)),de.y=Zd.y+.18*me-(Zd.y+.18-io.y)*me*me,Le.setFromEuler(Ne.set(0,.165*1.6+.5,-.55)).slerp(_e,me)}else de.copy(io),Le.copy(_e);if(Z.mend>0){de.copy(g2).lerp($m,Z.settle),de.y+=Math.sin(q*.9)*.02*(1-Z.settle);let me=-.4+Z.mend*.6+Z.turn*Math.PI*1.3+Z.settle*.3,ke=Math.sin(Z.turn*Math.PI)*.32;Le.setFromEuler(Ne.set(ke,me,0))}}let O=new P,xe=new _n,pe=new P,Ie=new P,fe=new _n,ce=new _n,$=(Z,q)=>q.copy(Z.local).applyQuaternion(_e).add(io).add(Z.burst),J=(Z,q)=>q.copy(Z.spin).multiply(_e),V=Z=>n.querySelector(Z),he=Array.from(n.querySelectorAll(".gs-label"));he.forEach((Z,q)=>{let me=G.find(Ke=>Ke.slot===q),ke=T[G.indexOf(me)];Z.querySelector("b").textContent=`${ke.label} \xB7 ${me.grams.toFixed(1)} g`});let Te=V(".gs-day b"),st=Array.from(n.querySelectorAll(".gs-steps li")),Se=V(".gs-meter b"),tt=V(".gs-meter i"),We=V(".gs-meter small");We&&(We.textContent=`OF ${se.toFixed(1)} CM`);let rt=V(".gs-hud-chapter"),zt=V(".gs-hud-count"),pt=Array.from(n.querySelectorAll(".gs-dots i")),le=new Me("#ebe3d5"),Ge=new Me("#16130f"),Xe=new Me("#0a0908"),nt=new Me("#efe5d3"),ut=new Me("#1f1b16"),pn=new Me("#efe6d6"),Ct=new Me(2822924),Gn=new Me(14725724),_i=new Me(10118418),Gt={x:0,y:0,tx:0,ty:0},Sn=-1,Pn={p:r?.975:0};function rr(Z=0){let q=$v(Pn.p),me=q.p;if(Ee(q,Z),G.forEach(be=>{let{mesh:at}=be;if(O.copy(be.local).applyQuaternion(Le).add(de),xe.copy(Le),q.drop<1||q.mend>=1){at.position.copy(O),at.quaternion.copy(xe);return}if(q.gather<=0){let Ft=1-Math.pow(1-q.shatter,3.2);pe.copy(be.local).applyQuaternion(_e).add(io),$(be,Ie),at.position.lerpVectors(pe,Ie,Ft),at.position.y+=Math.sin(Ft*Math.PI)*.25+Math.sin(Z*.8+be.bob)*.025*Ft,fe.copy(_e),J(be,ce),at.quaternion.slerpQuaternions(fe,ce,Ft);return}if(q.mend<=0){let Ft=dn(q.gather*1.5-be.slot/R*.5);$(be,pe),pe.y+=Math.sin(Z*.8+be.bob)*.025*(1-Ft),at.position.lerpVectors(pe,be.gridPos,Ft),at.position.y+=Math.sin(Ft*Math.PI)*.5,J(be,fe),at.quaternion.slerpQuaternions(fe,be.gridQuat,Ft);return}let an=dn((q.mend-be.slot/R*.72)/.28);at.position.lerpVectors(be.gridPos,O,an),at.position.y+=Math.sin(an*Math.PI)*.7,at.quaternion.slerpQuaternions(be.gridQuat,xe,an)}),B.position.copy(de),B.quaternion.copy(Le),B.visible=q.urushi>0&&q.mend>=1,K.forEach((be,at)=>{let an=$o(q.urushi*1.6-at/K.length*.6);be.mesh.geometry.setDrawRange(0,Math.floor(be.total/be.step*an)*be.step)}),z.color.copy(Ct).lerp(Gn,q.gold),z.metalness=.1+q.gold*.9,z.roughness=.5-q.gold*.3,z.emissive.copy(_i).multiplyScalar(q.gold*(.45+.9*Math.sin(q.sweep*Math.PI))),Oe.visible=q.dust>0&&q.dust<1,Oe.visible){for(let be=0;be<N;be++){let at=dn(q.dust*1.55-He[be]*.55),an=(1-at)*2.6,Ft=Be[be*3],As=Be[be*3+2];pe.set(Ft*Math.cos(an)-As*Math.sin(an),Be[be*3+1]+Math.sin(Z+be)*.05*(1-at),Ft*Math.sin(an)+As*Math.cos(an)),Ie.fromArray(ae,be*3).applyQuaternion(Le).add(de),pe.add(de).lerp(Ie,at),pe.toArray(re,be*3)}ie.attributes.position.needsUpdate=!0,ye.opacity=dn(q.dust*5)*(1-dn((q.dust-.8)/.2))}if(Ze.visible=q.shatter>0&&q.gather<1,Ze.visible){let be=1-Math.pow(1-q.shatter,3);for(let at=0;at<Ce;at++)we[at*3]=io.x+je[at*3]*be,we[at*3+1]=Math.max(.02,io.y-.6+je[at*3+1]*be-be*be*.6),we[at*3+2]=io.z+je[at*3+2]*be;ft.attributes.position.needsUpdate=!0,qe.opacity=.9*(1-q.gather)}for(let be=0;be<De;be++)_t[be*3]=H[be*3]+Math.sin(Z*.15+be)*.3,_t[be*3+1]=(H[be*3+1]+Z*.04+be*.01)%5,_t[be*3+2]=H[be*3+2]+Math.cos(Z*.12+be*1.3)*.3;j.attributes.position.needsUpdate=!0,ct.opacity=.55*(1-q.dark)+.25*q.dark;let ke=Math.max(1-dn(q.wobble*4),q.tea);if(w.visible=ke>.01,w.visible){let be=.2+ke*.5,{r:at,y:an}=qv(be);w.position.copy(de),w.quaternion.copy(Le),F.position.set(0,an-Xc.y-.002,0),F.scale.setScalar(at*.995)}let Ke=Math.max(1-dn(q.wobble*3),q.tea)*(1-q.dark);U.forEach(({sprite:be,offset:at},an)=>{let Ft=(Z*.12+at)%1;be.visible=Ke>.01,be.position.set(de.x+Math.sin(Z*.7+an*2)*.18*Ft-.05,de.y+.35+Ft*1.5,de.z+Math.cos(Z*.5+an)*.12),be.scale.setScalar(.35+Ft*.9),be.material.opacity=Ke*Math.sin(Ft*Math.PI)*.22}),o.copy(le).lerp(Ge,q.dark).lerp(Xe,q.deep),q.settle>0&&o.lerp(nt,1-q.dark),u.intensity=1.15-q.dark*.75,f.intensity=2.6-q.dark*1.5-q.deep*.6-q.labels*.5,d.intensity=1+q.dark*1.4,s.environmentIntensity=1-q.dark*.45-q.deep*.2,p.material.opacity=.2+q.dark*.35,g.material.opacity=q.dark*.22*(1-q.deep*.6),g.position.x=q.mend>0?0:.8,g.position.z=q.mend>0?.3:1.6;let mt=-1.2+q.sweep*Math.PI*1.4;m.position.set(de.x+Math.cos(mt)*2.2,de.y+1.4,de.z+Math.sin(mt)*2.2),m.intensity=(q.gold*2.2+Math.sin(q.sweep*Math.PI)*4.5)*(1-q.settle),X.strength=q.dark*(.03+q.gold*.55),X.enabled=X.strength>.02,ue(me),Gt.x+=(Gt.tx-Gt.x)*.06,Gt.y+=(Gt.ty-Gt.y)*.06;let Dt=t.clientWidth/Math.max(1,t.clientHeight);if(Dt<.9){let be=dn((me-.27)/.06)*(1-dn((me-.405)/.06));Ae.x=be>0?Ae.x:Ae.x*.3,Ae.y+=me<.1?.8*(1-dn(me/.1)):me>.9?-.55:0,Ae.z+=be*.55;let at=1.15+(.9-Dt)*1.1;Pe.sub(Ae).multiplyScalar(at+(.98-at)*be).add(Ae)}Pe.x+=Gt.x*.35+Math.sin(Z*.31)*.04,Pe.y+=-Gt.y*.2+Math.sin(Z*.43)*.03;let $t=q.shatter>0&&q.shatter<.25?(.25-q.shatter)*.25:0;Pe.x+=Math.sin(Z*61)*$t,Pe.y+=Math.cos(Z*53)*$t,h.position.copy(Pe),h.lookAt(Ae),W.render();let kt=q.dark,ot=ut.clone().lerp(pn,kt);if(n.style.setProperty("--gs-ink",`#${ot.getHexString()}`),n.style.setProperty("--gs-bg",`#${o.getHexString()}`),n.classList.toggle("is-dark",kt>.5),q.labels>.001){let be=t.clientWidth,at=t.clientHeight;G.forEach(an=>{let Ft=he[an.slot];Ft&&(it.copy(an.mesh.position).project(h),Ft.style.transform=`translate(${(it.x+1)/2*be}px, ${(1-it.y)/2*at}px)`,Ft.style.opacity=String($o(q.labels*1.6-an.slot/R*.6)))})}else he.forEach(be=>be.style.opacity="0");Te&&(Te.textContent=String(Math.round(1+dn(q.mend*1.1)*46)).padStart(2,"0"));let Bt=q.gold>.05?3:q.urushi>.05?2:q.mend>.5?1:0;st.forEach((be,at)=>be.classList.toggle("is-active",at===Bt)),Se&&(Se.textContent=(se*q.gold).toFixed(1)),tt&&(tt.style.transform=`scaleX(${q.gold})`),q.chapter!==Sn&&(Sn=q.chapter,rt&&(rt.textContent=Yd[q.chapter][0]),zt&&(zt.textContent=`${String(q.chapter+1).padStart(2,"0")} / 07`),pt.forEach((be,at)=>be.classList.toggle("is-on",at<=q.chapter))),t.dataset.scrollProgress=me.toFixed(3),t.dataset.storyBeat=String(q.chapter+1)}function Or(){let Z=Math.max(1,t.clientWidth),q=Math.max(1,t.clientHeight);i.setSize(Z,q,!1),W.setPixelRatio(i.getPixelRatio()),W.setSize(Z,q),X.resolution.set(Z/2,q/2),h.aspect=Z/q,h.fov=Z/q<.9?40:30,h.updateProjectionMatrix(),rr(performance.now()*.001)}Or();let Tt;r||(Tt=ee.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".gs-journey",start:"top top",end:"bottom bottom",scrub:1.1}}),Tt.to(Pn,{p:1,duration:1},0),Tt.to(".gs-hero",{autoAlpha:0,y:-70,duration:.04,ease:"power1.in"},.02),Tt.to(".gs-hero-aside",{autoAlpha:0,duration:.03},.03),Yd.forEach((Z,q)=>{let me=n.querySelector(`.gs-chapter[data-index="${q}"]`);if(!me)return;let ke=$d[q]+(q===0?.068:.012),Ke=q===Yd.length-1?1.2:$d[q+1]-.012;Tt.fromTo(me,{autoAlpha:0},{autoAlpha:1,duration:.012},ke),Tt.fromTo(me.querySelectorAll(".gs-c"),{yPercent:115},{yPercent:0,stagger:6e-4,duration:.02,ease:"power3.out"},ke),Tt.fromTo(me.querySelectorAll(".gs-fade"),{autoAlpha:0,y:24},{autoAlpha:1,y:0,stagger:.004,duration:.018,ease:"power2.out"},ke+.008),Ke<1&&Tt.to(me,{autoAlpha:0,y:-28,duration:.012,ease:"power1.in"},Ke-.012)}),Tt.fromTo(".gs-flash",{opacity:0},{opacity:.9,duration:.003},.192),Tt.to(".gs-flash",{opacity:0,duration:.03,ease:"power2.out"},.196),Tt.fromTo(".gs-impact",{autoAlpha:0,scale:1.12},{autoAlpha:1,scale:1,duration:.012,ease:"power3.out"},.197),Tt.to(".gs-impact",{autoAlpha:0,scale:.96,duration:.02},.245),Tt.fromTo(".gs-process",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015},.43),Tt.to(".gs-process",{autoAlpha:0,duration:.012},.632),Tt.fromTo(".gs-meter",{autoAlpha:0,y:20},{autoAlpha:1,y:0,duration:.012},.6),Tt.to(".gs-meter",{autoAlpha:0,duration:.012},.735),Tt.to(".gs-track i",{scaleX:1,duration:1},0),Tt.to(".gs-scroll-hint",{autoAlpha:0,duration:.02},.02),ee.from(".gs-hero .gs-c",{yPercent:115,duration:1.3,stagger:.022,ease:"power4.out",delay:.25}),ee.from(".gs-hero .gs-fade, .gs-hero-aside",{autoAlpha:0,y:18,duration:1,stagger:.12,ease:"power2.out",delay:.75}),ee.from(".gs-nav",{autoAlpha:0,y:-12,duration:.8,delay:.4}),ee.utils.toArray(".gs-log article").forEach(Z=>ee.from(Z,{y:60,autoAlpha:0,duration:1,ease:"power3.out",scrollTrigger:{trigger:Z,start:"top 88%"}})),ee.utils.toArray(".gs-seam-line path").forEach((Z,q)=>{let me=Z.getTotalLength();ee.fromTo(Z,{strokeDasharray:me,strokeDashoffset:me},{strokeDashoffset:0,ease:"none",scrollTrigger:{trigger:".gs-ending",start:q?"top 35%":"top 75%",end:"bottom bottom",scrub:1}})}),ee.from(".gs-ending .gs-c",{yPercent:115,stagger:.02,duration:1.1,ease:"power4.out",scrollTrigger:{trigger:".gs-ending",start:"top 70%"}}));let C=Z=>{Gt.tx=(Z.clientX/innerWidth-.5)*2,Gt.ty=(Z.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",C,{passive:!0});let Y=!0,te=0,ne=new IntersectionObserver(([Z])=>{Y=Z.isIntersecting,Y&&Re()});ne.observe(t);function Q(Z){te=0,!(document.hidden||!Y)&&(rr(Z*.001),Re())}function Re(){!te&&!document.hidden&&Y&&!r&&(te=requestAnimationFrame(Q))}let ze=()=>{document.hidden?(cancelAnimationFrame(te),te=0):Re()};return document.addEventListener("visibilitychange",ze),window.addEventListener("resize",Or),Re(),()=>{cancelAnimationFrame(te),ne.disconnect(),Tt?.scrollTrigger?.kill(),Tt?.kill(),window.removeEventListener("resize",Or),window.removeEventListener("pointermove",C),document.removeEventListener("visibilitychange",ze),s.traverse(Z=>{let q=Z;q.geometry&&q.geometry.dispose();let me=Array.isArray(q.material)?q.material:q.material?[q.material]:[];for(let ke of me){for(let Ke of Object.values(ke))Ke instanceof Un&&Ke.dispose();ke.dispose()}}),c.dispose(),a.dispose(),l.dispose?.(),W.dispose(),i.dispose(),i.domElement.remove()}}var Qt=.25,Zm=5,ji=()=>((Zm=Zm*16807%2147483647)-1)/2147483646,al=r=>Zm=r,x2=new Wt(1,1,1);function y2(r){return{uTime:{value:0},uAmp:{value:0},uTail:{value:0},uLen:{value:r},uScale:{value:Qt}}}function Jm(r,e){let t=Math.max(0,Math.min(1,(e-r.uTail.value)/r.uLen.value));return Math.sin(r.uTime.value*1.5-t*4)*r.uAmp.value*Math.pow(1-t,2.2)}function b2(r,e){let t=r?new ur({color:16777215}):new bn({color:16777215});return e&&(t.onBeforeCompile=n=>{Object.assign(n.uniforms,e),n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime, uAmp, uTail, uLen, uScale;`).replace("#include <begin_vertex>",`#include <begin_vertex>
          float ws = clamp((instanceMatrix[3].x - uTail) / uLen, 0.0, 1.0);
          transformed.y += sin(uTime * 1.5 - ws * 4.0) * uAmp * pow(1.0 - ws, 2.2) / uScale;`)}),t}function Dr(r,e=!0,t,n=Qt){let i=new Ar(x2,b2(e,t),Math.max(1,r.length)),s=new Pt,o=new Me;return r.forEach(([a,l,c,h],u)=>{s.makeScale(n,n,n).setPosition(a*n,l*n,c*n),i.setMatrixAt(u,s),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}function $c(r){al(r.seed);let e=r.length,t=[],n=[],i=x=>x<.12?1+x*6:x<.62?1.7+Math.pow((x-.12)/.5,.9)*(e*.11):(1.7+e*.11)*(1-Math.pow((x-.62)/.38,2.2)*.62),s=[],o=(x,v,M)=>{let T=x/e,S=i(T),A=S*(v>0?.8:.95),b=S;return v*v/(A*A)+M*M/(b*b)<=1};for(let x=0;x<=e;x++){let v=x/e,M=Math.ceil(i(v))+1,T=-99;for(let S=-M;S<=M;S++)for(let A=-M;A<=M;A++){if(!o(x,S,A)||o(x,S+1,A)&&o(x,S-1,A)&&o(x,S,A+1)&&o(x,S,A-1)&&o(x+1,S,A)&&o(x-1,S,A))continue;T=Math.max(T,S);let b=i(v),E=S<-b*.2,L=E?r.belly:ji()>.82?r.back2:r.back;E&&v>.55&&Math.abs(A)%2===0&&(L="#7f8fb5"),!E&&v>.68&&S>b*.35&&ji()>.86&&(L="#e6dcc0"),v>.8&&Math.abs(S+b*.18)<.6&&(L="#262b5c"),t.push([x,S,A,L])}s.push(T)}let a=Math.round(e*.84),l=i(a/e),c=[];for(let x of[-1,1]){let v=Math.round(x*l*.93);c.push([a,0,v,"#ffffff"],[a+1,0,v,"#0b0d1f"])}for(let x=-Math.round(e*.16);x<=Math.round(e*.16);x++){let v=Math.round(5-Math.abs(Math.abs(x)-e*.09)*.6);for(let M=-v;M<=1;M++)t.push([M,0,x,Math.abs(x)>e*.13?r.back2:r.back])}let h=Math.round(e*.66),u=i(h/e);for(let x of[-1,1])for(let v=0;v<e*.34;v++){let M=x*(u+v),T=Math.round(3-v*.07);for(let S=-T;S<=T;S++)t.push([h-Math.round(v*.45)+S,Math.round(-u*.35-v*.22),Math.round(M),S===T?"#e6ecf5":r.back])}let f=Math.round(e*.32);for(let x=0;x<3;x++)t.push([f+x,s[f]+1,0,r.back]);let d=y2(e*Qt),m=new $e,p=Dr(t,!0,d),_=Dr(c,!1,d),g=Dr(n,!1,d);m.add(p,_,g);let y=e*Qt/2;for(let x of[p,_,g])x.position.x=-y;return d.uTail.value=0,{group:m,wave:d,top:x=>(s[Math.max(0,Math.min(e,Math.round(x)))]+1)*Qt,centre:y,eyeMesh:_,L:e}}function jv(r){al(100+r);let e=["#ffe9c2","#f4b6a0","#9fd3c7","#e6ecf5","#ffcf8a"][r%5],t=["#c4506b","#3b3f7a","#ff8a3d","#1d8f9a","#7a2d55"][r%5],n=3+r%2,i=3+(r%3===0?1:0),s=[],o=[];for(let h=0;h<n;h++)for(let u=0;u<i;u++)for(let f=0;f<3;f++)s.push([h,u,f,e]);for(let h=0;h<2;h++)for(let u=-1+h;u<=n-h;u++)for(let f=-1+h;f<=3-h;f++)s.push([u,i+h,f,t]);s.push([n-1,i+2,1,"#5a5aa0"],[n-1,i+3,1,"#5a5aa0"]),o.push([1,1,3,"#ffd34d"]),n>3&&o.push([2,1,3,"#ffd34d"]),o.push([n,1,1,"#ffd34d"]);let a=new $e,l=Dr(s,!0,void 0,Qt*.9),c=Dr(o,!1,void 0,Qt*.9);for(let h of[l,c])h.position.set(-n/2*Qt*.9,0,-1.5*Qt*.9);return a.add(l,c),{group:a,windows:c.material,chimney:new P((n/2-1)*Qt*.9,(i+4)*Qt*.9,0)}}function Qv(r,e,t){al(77);let n=[],i=[];for(let s=0;s<r;s++){let o=(ji()-.5)*e,a=-ji()*e*.55+e*.12,l=3+ji()*5;i.push(new P(o*Qt,t,a*Qt));for(let c=-l;c<=l;c++)for(let h=-l;h<=l;h++)for(let u=0;u<=l*.7;u++){let f=c*c/(l*l)+h*h/(l*l)+u*u/(l*l*.4);f>1||f<.6&&u>0&&u<l*.5||n.push([Math.round(o+c),Math.round(t/Qt+u),Math.round(a+h),u>l*.45?"#ffffff":u>l*.2?"#e6ecf5":"#b9c4dc"])}}return{mesh:Dr(n,!0),puffs:i}}var ex="varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",tx=`
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
  }`;var Km=[["I","THE TOWN ON THE WHALE","My town has forty-two people, twelve houses and one whale. None of us has ever touched the ground."],["II","OLD SILVERBACK","Grandma says the whale is two hundred and twelve years old. Lately she sleeps more than she swims."],["III","THE STORM","The storm came at noon. She did not climb above it the way she used to. She went straight through."],["IV","BELOW THE CLOUDS","Under the clouds there was a whole sea. None of us had ever seen that much water, or that much dark."],["V","THE SONG","That night she sang. It shook every lantern in town. And far away, something sang back."],["VI","THE YOUNG ONE","A young whale came out of the dark. One by one, our houses flew across to her back."],["VII","HOME","Silverback stayed. Trees grew where our houses stood. Now she is an island, and we visit every spring."]],ll=[0,.13,.27,.42,.56,.71,.86],Zo=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Kd=r=>(r=Zo(r),r*r*(3-2*r)),ei=(r,e,t)=>Kd((r-e)/(t-e));function nx(r){let e=Zo(r),t=0;ll.forEach((i,s)=>e>=i&&(t=s));let n=ei(e,.27,.33)*(1-ei(e,.42,.47));return{p:e,chapter:t,close:ei(e,.12,.2)*(1-ei(e,.25,.3)),storm:n,dive:ei(e,.41,.53),night:ei(e,.38,.47)*(1-ei(e,.86,.94)),part:ei(e,.52,.6),song:ei(e,.58,.68),answer:ei(e,.62,.71),aurora:ei(e,.57,.63)*(1-ei(e,.84,.9)),young:ei(e,.7,.76),transfer:Zo((e-.74)/(.85-.74)),dawn:ei(e,.86,.93),settle:ei(e,.86,.95),grow:ei(e,.89,.97),depart:ei(e,.92,1)}}var M2=["#0b0d1f","#16193a","#262b5c","#3b3f7a","#5a5aa0","#8b7bc0","#c9b8e8","#ffffff","#e6ecf5","#b9c4dc","#7f8fb5","#4a5f8c","#2e3b5c","#12355e","#1f5f8f","#3d8fbf","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffe9c2","#ffcf8a","#ffd34d","#ff8a3d","#ff9f6b","#f47c7c","#c4506b","#7a2d55","#d99ab0","#9a6a52","#e6dcc0"].map(r=>new Me(r)),E2={uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ve(1,1)},uPal:{value:M2.map(r=>new P(r.r,r.g,r.b))},uNear:{value:.1},uFar:{value:600}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
    }`},so=[[0,[-5,4.5,31],[0,.5,0]],[.09,[1,5.5,24],[1,.6,0]],[.18,[13,2.6,11],[4.6,.4,0]],[.25,[5,7.5,15],[0,.5,0]],[.33,[-11,3,19],[0,-.5,0]],[.42,[-7,-1,21],[0,-4,0]],[.5,[-5,-12.5,23],[0,-16,0]],[.58,[8,-14.5,24],[0,-14,-6]],[.66,[-6,-14,30],[0,-13,-14]],[.74,[7,-10,21],[.5,-15.5,-4]],[.84,[-3,-7.5,23],[0,-16,-4]],[.92,[-15,-15,30],[3,-19,-10]],[1,[-16,-13,40],[10,-16,-18]]];function ix(r,e){let t=document.querySelector(".cw-world"),n=document.querySelector(".cw-stage");if(!t||!n)return;let i;try{i=new li({antialias:!1,powerPreference:"high-performance"})}catch{n.classList.add("is-fallback"),document.querySelector(".cw-journey")?.style.setProperty("height","100svh");return}let s=3;i.setPixelRatio(1),i.outputColorSpace=wr,t.append(i.domElement),t.classList.add("has-webgl");let o=new jt,a=new Me;o.fog=new hs(a,40,170);let l=new Ht(34,1,.1,600),c=new Pr(16770768,3882874,1.3),h=new hn(16767152,2.2);h.position.set(30,22,18),o.add(c,h);let u={uTime:{value:0},uNight:{value:0},uStorm:{value:0},uAurora:{value:0},uFlash:{value:0},uDawn:{value:0},uSun:{value:new P(.75,.12,-.65)}},f=new Ue(new Xt(400,32,16),new Ot({uniforms:u,vertexShader:ex,fragmentShader:tx,side:In,depthWrite:!1,fog:!1}));o.add(f);let d={uTime:{value:0},uNight:{value:0},uDawn:{value:0}},m=new Ue(new On(600,600),new Ot({uniforms:d,fog:!1,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        }`}));m.rotation.x=-Math.PI/2,m.position.y=-22,o.add(m);let p=Qv(e?70:110,360,-6),_=p.mesh.material,g=p.mesh.instanceMatrix.array.slice();o.add(p.mesh);let y={uTime:{value:0},uPart:{value:0},uTint:{value:new Me}},x=new Ue(new On(600,600),new Ot({uniforms:y,side:nn,vertexShader:"varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }",fragmentShader:`
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
        }`}));x.rotation.x=-Math.PI/2,x.position.y=-5.2,o.add(x);let v=$c({length:64,back:"#3b3f7a",back2:"#5a5aa0",belly:"#b9c4dc",seed:9});o.add(v.group);let M=$c({length:44,back:"#3d8fbf",back2:"#7f8fb5",belly:"#e6ecf5",seed:21});o.add(M.group);let T=$c({length:40,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:33}),S=$c({length:36,back:"#262b5c",back2:"#3b3f7a",belly:"#7f8fb5",seed:44});o.add(T.group,S.group);let A=12,b=Array.from({length:A},(J,V)=>{let he=jv(V);o.add(he.group),al(300+V);let Te=Math.round(64*(.36+V/A*.32)),st=(V%3-1)*1.6,Se=Math.round(44*(.34+V/A*.34)),tt=(V%3-1)*1.2;return{...he,ox:Te,oz:st,yx:Se,yz:tt,rot:(ji()-.5)*.6,flicker:ji()*10}}),E=new $e,L=Dr(Array.from({length:4},(J,V)=>Array.from({length:5},(he,Te)=>[Math.round(Math.cos(V*Math.PI/2)*(Te+1)),Math.round(Math.sin(V*Math.PI/2)*(Te+1)),0,Te===4?"#c4506b":"#ffe9c2"])).flat(),!0,void 0,Qt*.8);E.add(L),b[5].group.add(E),E.position.set(0,7*Qt,1.2*Qt),al(500);let R=Array.from({length:14},(J,V)=>{let he=[],Te=2+Math.floor(ji()*3);for(let Se=0;Se<Te;Se++)he.push([0,Se,0,"#9a6a52"]);for(let Se=-2;Se<=2;Se++)for(let tt=0;tt<4;tt++)for(let We=-2;We<=2;We++)Se*Se+(tt-1.5)**2+We*We<5.5&&ji()>.1&&he.push([Se,Te+tt,We,tt>2?"#a8d46f":ji()>.5?"#5ba86a":"#2f6b4f"]);let st=new $e;return st.add(Dr(he,!0,void 0,Qt*.9)),o.add(st),{g:st,x:Math.round(64*(.3+V/14*.45)),z:(ji()-.5)*3,delay:ji()*.5}}),D=Dr(Array.from({length:48},()=>[0,0,0,"#e6ecf5"]),!0,void 0,Qt*.8);o.add(D);let k=Dr(Array.from({length:48},(J,V)=>[0,0,0,V%3?"#ffd34d":"#ff8a3d"]),!1,void 0,Qt*.9);o.add(k);let G=new vt,z=new Float32Array(900*6);G.setAttribute("position",new Ut(z,3));let B=new Zl(G,new ar({color:"#b9c4dc",transparent:!0,opacity:.8}));B.frustumCulled=!1,o.add(B);let K=new vt,se=new Float32Array(90);K.setAttribute("position",new Ut(se,3));let N=new Rr(K,new ar({color:"#ffffff"}));N.frustumCulled=!1,o.add(N);let ae=new vt().setFromPoints(Array.from({length:128},(J,V)=>new P(Math.cos(V/128*Math.PI*2),Math.sin(V/128*Math.PI*2),0))),Be=Array.from({length:10},(J,V)=>{let he=new Jl(ae,new ar({color:V<5?"#3ce0c4":"#c9b8e8",transparent:!0,fog:!1}));return he.frustumCulled=!1,o.add(he),he}),He=new gn(4,4,{type:wn,minFilter:en,magFilter:en,depthTexture:new lr(4,4)}),Ye=new Ot(E2);Ye.uniforms.tColor.value=He.texture,Ye.uniforms.tDepth.value=He.depthTexture;let it=new Ue(new On(2,2),Ye),ie=new jt;ie.add(it);let re=new Li(-1,1,1,-1,0,1),ye=new un(so.map(J=>new P(...J[1])),!1,"centripetal"),Oe=new un(so.map(J=>new P(...J[2])),!1,"centripetal"),Ce=new P,je=new P;function ft(J){let V=0;for(;V<so.length-2&&J>so[V+1][0];)V++;let he=Zo((J-so[V][0])/(so[V+1][0]-so[V][0])),Te=(V+he)/(so.length-1);ye.getPoint(Te,Ce),Oe.getPoint(Te,je)}let we=new Pt,qe=new _n,Ze=new P,De=new P,j=new P,H=new P,_t=(J,V)=>(j.set(J*Qt-v.centre,v.top(J)+Jm(v.wave,J*Qt),0),v.group.localToWorld(j)),ct=J=>(H.set(J*Qt-M.centre,M.top(J)+Jm(M.wave,J*Qt),0),M.group.localToWorld(H)),Je=-10,Fe=1,F={x:0,y:0,tx:0,ty:0},w={p:r?.97:0},I=-1,U=J=>n.querySelector(J),W=U(".cw-say"),X=U(".cw-chapter-no"),ge=U(".cw-card small"),oe=U(".cw-card b"),Pe=U(".cw-hud-alt"),Ae=U(".cw-hud-lit"),ue=U(".cw-hud-weather"),de=U(".cw-hud-age"),Le=Array.from(n.querySelectorAll(".cw-progress i"));function Ne(J){let V=nx(w.p),he=V.p;u.uTime.value=d.uTime.value=J;for(let le of[v,M,T,S])le.wave.uTime.value=J+(le===M?1.3:le===T?2.1:0);let Te=Math.sin(J*.9)*.22*V.storm;v.wave.uAmp.value=.55*(1-V.settle)+V.storm*.35,v.group.position.set(Math.sin(J*.15)*.6*(1-V.settle),Math.sin(J*.6)*.25*(1-V.settle)-V.dive*17.5-V.settle*3.2-Math.sin(V.storm*Math.PI)*1.5,0),v.group.rotation.set(Te,-.08+V.dive*.15-V.settle*.2,Math.sin(J*.3)*.03+(V.dive>0&&V.dive<1?-Math.sin(V.dive*Math.PI)*.22:0)+V.song*.08*(1-V.settle)),v.group.updateMatrixWorld(),v.eyeMesh.visible=Math.sin(J*.9)<.94,M.group.visible=V.young>.001,M.wave.uAmp.value=.5;let st=new P(1.5,-15.2,-7.5);M.group.position.set(60-(60-st.x)*V.young+V.depart*26,-12+(st.y+12)*V.young+Math.sin(J*.7)*.2+V.depart*7,-40+(40+st.z)*V.young-V.depart*26),M.group.rotation.set(0,-.1+V.depart*.7,Math.sin(J*.4)*.03+V.depart*.12),M.group.updateMatrixWorld();for(let[le,Ge,Xe,nt]of[[T,-46,-70,0],[S,52,-85,1]])le.group.visible=V.answer>.01&&V.depart<.95,le.wave.uAmp.value=.45,le.group.position.set(Ge,-18+V.answer*4+Math.sin(J*.5+nt)*.4,Xe),le.group.rotation.y=nt?2.6:.4;let Se=0;b.forEach((le,Ge)=>{let Xe=_t(le.ox,J).clone();Xe.z+=le.oz;let nt=Kd((V.transfer-Ge/A*.75)/.25),ut=Xe;if(nt>0){let Ct=ct(le.yx).clone();Ct.z+=le.yz,ut=Xe.lerp(Ct,nt),ut.y+=Math.sin(nt*Math.PI)*3.2}le.group.position.copy(ut),le.group.rotation.set(v.group.rotation.x*(1-nt),le.rot+(nt>0?nt*Math.PI*2:0)*(nt<1?1:0),v.group.rotation.z*(1-nt));let pn=V.storm>.3?Math.sin(J*9+le.flicker*3)>-.2:!0;le.windows.color.setScalar(pn?.6+V.night*.4+(1-V.night)*.2:.15),pn&&Se++}),E.rotation.z=J*(1.2+V.storm*6),R.forEach(le=>{let Ge=Kd((V.grow-le.delay*.6)/.4);le.g.visible=Ge>.01,le.g.visible&&(le.g.position.copy(_t(le.x,J)),le.g.position.z+=le.z,le.g.scale.setScalar(Ge))});for(let le=0;le<48;le++){let Ge=b[le%A],Xe=(J*.35+le*.137)%1;De.copy(Ge.chimney).applyMatrix4(Ge.group.matrixWorld),De.x-=Xe*2.2+V.storm*Xe*4,De.y+=Xe*2.4,Ze.setScalar(Qt*.8*(.6+Xe)*(1-V.dive)*(1-V.transfer*.5)),we.compose(De,qe.identity(),Ze),D.setMatrixAt(le,we)}D.instanceMatrix.needsUpdate=!0;let tt=Math.max(V.song*(1-V.depart),V.transfer>0&&V.transfer<1?1:0);for(let le=0;le<48;le++){let Ge=le*.618%1,Xe=(J*.12+Ge)%1;if(V.transfer>0&&V.transfer<1){let nt=_t(Math.round(64*(.35+Ge*.35)),J).clone(),ut=ct(Math.round(44*(.35+Ge*.35)));De.copy(nt.lerp(ut,Xe)),De.y+=Math.sin(Xe*Math.PI)*4+1}else De.copy(_t(Math.round(64*(.3+Ge*.45)),J)),De.y+=.5+Xe*7,De.x+=Math.sin(Xe*6+le)*1.5,De.z+=Math.cos(le*2.4)*3;Ze.setScalar(Qt*.9*tt*Math.sin(Math.min(1,Xe*1.2)*Math.PI)**.3),we.compose(De,qe.identity(),Ze),k.setMatrixAt(le,we)}k.instanceMatrix.needsUpdate=!0;let We=p.mesh.instanceMatrix.array,rt=J*.4,zt=V.part;y.uTime.value=J,y.uPart.value=zt,y.uTint.value.copy(_.color);for(let le=0;le<p.mesh.count;le++){let Ge=le*16,Xe=g[Ge+12]+rt;Xe=((Xe+90)%180+180)%180-90;let nt=g[Ge+14],ut=Math.hypot(Xe,nt+10),pn=Zo(zt*1.6-ut/200),Ct=Qt*(1-pn);We[Ge]=We[Ge+5]=We[Ge+10]=Ct,We[Ge+12]=Xe,We[Ge+13]=g[Ge+13]+pn*6}if(p.mesh.instanceMatrix.needsUpdate=!0,_.emissive.setRGB(.3,.3,.4).multiplyScalar(1-V.storm*.6-V.night*.7),_.color.setRGB(1,1,1).lerp(new Me(.5,.52,.62),V.storm).lerp(new Me(.28,.3,.48),V.night*.9),B.visible=V.storm>.05,B.visible){for(let le=0;le<900;le++){let Ge=le*37.7%60-30+je.x,Xe=le*13.3%40-20,nt=(J*22+le*3.31)%30,ut=je.y+15-nt;z.set([Ge,ut,Xe,Ge-.35,ut-1.1,Xe],le*6)}G.attributes.position.needsUpdate=!0,B.material.opacity=V.storm}if(V.storm>.5&&J-Je>1.4+Math.sin(Fe)*.6){Je=J,Fe+=1.7;let le=Math.sin(Fe*3.1)*.5*40,Ge=30,Xe=-30-Math.abs(Math.cos(Fe))*30;for(let nt=0;nt<30;nt++)se.set([le,Ge,Xe],nt*3),le+=Math.sin(Fe*7+nt*2.3)*2.2,Ge-=1.4;K.attributes.position.needsUpdate=!0}let pt=Math.max(0,1-(J-Je)/.18)*V.storm;if(N.visible=pt>.2,u.uFlash.value=pt*.6,Be.forEach((le,Ge)=>{let Xe=Ge>=5,nt=Ge%5,ut=(J*.32+nt/5)%1,pn=Xe?V.answer*(1-V.young):V.song*(1-V.young);if(le.visible=pn>.02,!le.visible)return;let Ct=Xe?(nt%2?S:T).group.position:_t(56,J);le.position.copy(Ct),le.rotation.set(Math.PI/2,0,0),le.scale.setScalar(1+ut*(Xe?40:26)),le.material.opacity=(1-ut)*pn}),u.uNight.value=V.night,u.uStorm.value=V.storm,u.uAurora.value=V.aurora,u.uDawn.value=V.dawn,d.uNight.value=V.night,d.uDawn.value=V.dawn,u.uSun.value.set(.75,.12-V.dawn*.06,-.65+V.dawn*.2),a.setRGB(1,.72,.56).lerp(new Me(.38,.4,.5),V.storm).lerp(new Me(.06,.08,.2),V.night),o.fog.color.copy(a),c.intensity=1.3-V.night*.7-V.storm*.4,h.intensity=(2.2-V.storm*1.6)*(1-V.night*.8)+pt*3,h.color.setRGB(1,.85,.7).lerp(new Me(.6,.7,1),V.night),ft(he),F.x+=(F.tx-F.x)*.05,F.y+=(F.ty-F.y)*.05,Ce.x+=F.x*1.2+Math.sin(J*.3)*.25+Math.sin(J*37)*pt*.3,Ce.y+=-F.y*.6+Math.sin(J*.4)*.15,l.position.copy(Ce),l.lookAt(je),f.position.copy(l.position),i.setRenderTarget(He),i.render(o,l),i.setRenderTarget(null),i.render(ie,re),Pe&&(Pe.textContent=String(Math.max(0,Math.round(2400-V.storm*300-V.dive*2100-V.settle*30))).padStart(4,"0")),Ae&&(Ae.textContent=`${String(Se).padStart(2,"0")}/12`),de&&(de.textContent=V.depart>.5?"006":"212"),ue&&(ue.textContent=V.storm>.4?"STORM":V.aurora>.4?"AURORA":V.night>.5?"NIGHT":V.dawn>.5?"DAWN":"CLEAR"),V.chapter!==I){I=V.chapter;let[le,Ge]=Km[V.chapter];ge&&(ge.textContent=`CHAPTER ${le}`),oe&&(oe.textContent=Ge),X&&(X.textContent=`${le}`),Le.forEach((Xe,nt)=>Xe.classList.toggle("is-on",nt<=V.chapter))}if(W){let le=Km[V.chapter][2],Ge=ll[V.chapter],Xe=ll[V.chapter+1]??1.02,nt=Zo((he-Ge-.004)/((Xe-Ge)*.5)),ut=Math.round(le.length*nt);W.textContent=le.slice(0,ut),W.classList.toggle("is-typing",ut<le.length)}t.dataset.scrollProgress=he.toFixed(3),t.dataset.storyBeat=String(V.chapter+1)}function _e(){let J=Math.max(1,t.clientWidth),V=Math.max(1,t.clientHeight),he=Math.ceil(J/s),Te=Math.ceil(V/s);i.setSize(he,Te,!1),He.setSize(he,Te),Ye.uniforms.uRes.value.set(he,Te),l.aspect=J/V,l.fov=J/V<.9?48:34,l.updateProjectionMatrix(),Ne(performance.now()/1e3)}_e();let Ee;r||(Ee=ee.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".cw-journey",start:"top top",end:"bottom bottom",scrub:1.2}}),Ee.to(w,{p:1,duration:1},0),Ee.to(".cw-title",{autoAlpha:0,y:-40,duration:.035,ease:"power1.in"},.015),Ee.fromTo(".cw-dialog",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.015,ease:"steps(4)"},.03),ll.forEach((J,V)=>{Ee.fromTo(".cw-card",{autoAlpha:0,x:-40},{autoAlpha:1,x:0,duration:.012,ease:"steps(5)",immediateRender:!1},J+(V?.004:.04)),Ee.to(".cw-card",{autoAlpha:0,x:40,duration:.01,ease:"steps(4)"},(ll[V+1]??1.05)-.03)}),ee.from(".cw-title .cw-l",{yPercent:120,autoAlpha:0,duration:.6,stagger:.05,ease:"steps(6)",delay:.3}),ee.from(".cw-nav, .cw-hud",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ee.utils.toArray(".cw-log article").forEach((J,V)=>ee.from(J,{autoAlpha:0,y:40,duration:.7,ease:"steps(7)",delay:V%3*.08,scrollTrigger:{trigger:J,start:"top 90%"}})));let O=J=>{F.tx=(J.clientX/innerWidth-.5)*2,F.ty=(J.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",O,{passive:!0});let xe=0,pe=!0,Ie=new IntersectionObserver(([J])=>{pe=J.isIntersecting,pe&&ce()});Ie.observe(t);let fe=J=>{xe=0,!(!pe||document.hidden)&&(Ne(J/1e3),ce())};function ce(){!xe&&pe&&!document.hidden&&!r&&(xe=requestAnimationFrame(fe))}let $=()=>document.hidden?(cancelAnimationFrame(xe),xe=0):ce();return document.addEventListener("visibilitychange",$),window.addEventListener("resize",_e),ce(),()=>{cancelAnimationFrame(xe),Ie.disconnect(),Ee?.scrollTrigger?.kill(),Ee?.kill(),window.removeEventListener("pointermove",O),window.removeEventListener("resize",_e),document.removeEventListener("visibilitychange",$),o.traverse(J=>{let V=J;V.geometry?.dispose(),(Array.isArray(V.material)?V.material:V.material?[V.material]:[]).forEach(he=>he.dispose())}),He.depthTexture?.dispose(),He.dispose(),Ye.dispose(),i.dispose(),i.domElement.remove()}}var Mt=.25,n0=7,Jt=()=>((n0=n0*16807%2147483647)-1)/2147483646,T2=new Wt(1,1,1),bs=new un([[0,3,2],[0,-9,-12],[3,-18,-40],[-2,-24,-75],[0,-30,-120],[-4,-36,-165],[-6,-42,-205],[2,-48,-245],[4,-54,-285],[0,-58,-325],[0,-62,-358]].map(([r,e,t])=>new P(r,e,t)),!1,"centripetal"),Qr=5,hi={bone:{c:new P(0,-30,-120),r:new P(24,18,32)},river:{c:new P(-6,-42,-205),r:new P(30,17,28)},crystal:{c:new P(4,-54,-285),r:new P(24,22,26)},heart:{c:new P(0,-62,-360),r:new P(21,18,21)}},jm=Object.values(hi),jd=(r,e)=>{let t=(r.x-e.c.x)/e.r.x,n=(r.y-e.c.y)/e.r.y,i=(r.z-e.c.z)/e.r.z;return t*t+n*n+i*i},i0=(r,e)=>Math.floor(9*Math.exp(-((r-8)**2+(e+16)**2)/1500)+Math.sin(r*.12)*.8+Math.cos(e*.1)*.8),Qm=new P(18,0,-24);function S2(r=.6){let e=Math.ceil(bs.getLength()/r),t=[],n=[],i=[],s=new P(0,1,0);for(let o=0;o<=e;o++){let a=o/e,l=bs.getPointAt(a),c=bs.getTangentAt(a),h=new P().crossVectors(c,s).normalize();t.push(l),n.push(h),i.push(new P().crossVectors(h,c).normalize())}return{pts:t,side:n,up:i,n:e}}function w2(r,e){let t=r?new ur:new bn;return e&&(t.onBeforeCompile=e),t}function di(r,e=!0,t=Mt,n){let i=new Ar(T2,w2(e,n),Math.max(1,r.length)),s=new Pt,o=new Me;return r.forEach(([a,l,c,h],u)=>{i.setMatrixAt(u,s.makeScale(t,t,t).setPosition(a*t,l*t,c*t)),i.setColorAt(u,o.set(h))}),i.count=r.length,i.frustumCulled=!1,i}var r0=r=>e=>{e.uniforms.uGrey=r.uGrey,e.fragmentShader=e.fragmentShader.replace("#include <common>",`#include <common>
uniform float uGrey;`).replace("#include <color_fragment>",`#include <color_fragment>
float greyLum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));
diffuseColor.rgb = mix(diffuseColor.rgb, vec3(greyLum) * vec3(0.86, 0.88, 0.94), uGrey);`)};function rx(){n0=7;let r=S2(),e=new P,t=(R,D,k)=>D>-7&&k>-30||k>-92?"soil":k>-168?"bone":k>-248?"river":k>-322?"crystal":"heart",i=A2(r,t,{soil:["#5a3b24","#6b4a2e","#7d5634","#4a3020"],bone:["#7a4a3a","#8a5a44","#6a3e32","#5a352c"],river:["#2e3550","#3b4466","#262c44","#46507a"],crystal:["#241f3a","#2f2850","#3a3060","#1c1830"],heart:["#3a2028","#4a2630","#2e1820","#5a2c2c"]}),s=[];for(let R=-70;R<=70;R++)for(let D=-70;D<=40;D++){if(Math.hypot(R,D-1)<5.5)continue;let k=i0(R,D);s.push([R,k,D,Jt()>.93?"#2f6b4f":"#5ba86a"],[R,k-1,D,"#6b4a2e"]),Jt()>.96&&s.push([R,k+1,D,"#a8d46f"])}let o=[],a=[],l=Qm.clone().setY(i0(Qm.x,Qm.z)),c=(R,D,k,G)=>{let z=Math.ceil(R.distanceTo(D)*1.5);for(let B=0;B<=z;B++){let K=R.clone().lerp(D,B/z),se=k*(1-B/z*.4);for(let N=-se;N<=se;N++)for(let ae=-se;ae<=se;ae++)N*N+ae*ae<=se*se+.5&&o.push([Math.round(K.x+N),Math.round(K.y),Math.round(K.z+ae),G])}},h=l.clone().add(new P(0,30,0));c(l,h,3.2,"#6b4a2e");let u=(R,D,k,G,z)=>{let B=R.clone().addScaledVector(D,k);if(c(R,B,G,z>1?"#5a3b24":"#7d5634"),z===0)return void a.push(B);for(let K=0;K<3;K++){let se=D.clone().add(new P((Jt()-.5)*1.4,.35+Jt()*.5,(Jt()-.5)*1.4)).normalize();u(B,se,k*.68,Math.max(.6,G*.6),z-1)}};for(let R=0;R<4;R++){let D=R/4*Math.PI*2+.4;u(h.clone().addScaledVector(new P(0,-1,0),R*3),new P(Math.cos(D),.55,Math.sin(D)).normalize(),12,1.6,2)}let f=a.map(R=>{let D=[],k=2.5+Jt()*2;for(let G=-k;G<=k;G++)for(let z=-k*.7;z<=k*.7;z++)for(let B=-k;B<=k;B++)G*G+z*z*2+B*B<=k*k&&Jt()>.15&&D.push([Math.round(G),Math.round(z),Math.round(B),z>.5?"#ffd6e6":Jt()>.5?"#f7a8c4":"#e07aa8"]);return{at:R,list:D}}),d=[],m=[],p=r.pts[4].clone().addScaledVector(r.up[4],(Qr-.4)*.72).addScaledVector(r.side[4],-(Qr-.4)*.68),_=30;for(let R=0;R<=_;R++)m.push(l.clone().add(new P(0,-3,0)).lerp(p,R/_));m.forEach((R,D)=>{let k=D/(m.length-1);for(let[G,z]of[[0,0],[1,0],[0,-1]])d.push({v:[Math.round(R.x+G),Math.round(R.y+z),Math.round(R.z),D%7===0?"#5a3b24":"#7d5634"],along:k})});let g=[],y=[];r.pts.forEach((R,D)=>{let k=t(R.x,R.y,R.z),G=r.up[D],z=r.side[D];if(k==="soil"&&R.y<-6&&D%9===0){let B=(Jt()-.5)*6,K=2+Math.floor(Jt()*4);for(let se=0;se<K;se++)g.push([Math.round(R.x+z.x*B),Math.round(R.y+G.y*(Qr-se)),Math.round(R.z+z.z*B),"#8a6a44"])}if(k==="bone"&&jd(R,hi.bone)<.85){for(let B of[0,1])y.push([Math.round(R.x+G.x*(8.5+B)),Math.round(R.y+G.y*(8.5+B)),Math.round(R.z+G.z*(8.5+B)),D%5<2?"#e6dcc0":"#c8bca0"]);if(D%6===0)for(let B=-.5;B<=Math.PI+.5;B+=.08)y.push([Math.round(R.x+(z.x*Math.cos(B)+G.x*Math.sin(B))*8),Math.round(R.y+G.y*Math.sin(B)*8+z.y*Math.cos(B)*8),Math.round(R.z+(z.z*Math.cos(B)+G.z*Math.sin(B))*8),"#e6dcc0"])}});let x=bs.getPointAt(.43);for(let R=-7;R<=7;R++)for(let D=0;D<=8;D++)for(let k=-9;k<=6;k++){if(!(Math.abs(R)===7||D===0||D===8||k===-9||k===6))continue;let z=k===6&&D>3&&D<7&&(Math.abs(R-3.5)<1.6||Math.abs(R+3.5)<1.6),B=k===6&&D<2&&R%2===0;y.push([Math.round(x.x+R),Math.round(x.y+9+D),Math.round(x.z+k),z?"#1c1410":B?"#ffffff":D>5?"#e6dcc0":"#c8bca0"])}let v=[],M=hi.river,T=Math.round(M.c.y-M.r.y*.45);for(let R=-M.r.x;R<=M.r.x;R++)for(let D=-M.r.z;D<=M.r.z;D++)e.set(M.c.x+R,T,M.c.z+D),jd(e,M)<.98&&v.push([e.x,T,e.z,Jt()>.8?"#3d8fbf":"#1f5f8f"]);for(let R=0;R<34;R++){let D=Jt()*Math.PI*2,k=Math.sqrt(Jt())*.85,G=M.c.x+Math.cos(D)*M.r.x*k,z=M.c.z+Math.sin(D)*M.r.z*k;if(r.pts.some(se=>Math.hypot(se.x-G,se.z-z)<9))continue;e.set(G,M.c.y,z);let B=M.c.y+M.r.y*Math.sqrt(Math.max(0,1-((G-M.c.x)/M.r.x)**2-((z-M.c.z)/M.r.z)**2)),K=3+Math.floor(Jt()*7);for(let se=0;se<K;se++)g.push([Math.round(G),Math.round(B-se),Math.round(z),se===K-1?"#9fd3e8":"#46507a"])}let S=[],A=hi.crystal;for(let R=0;R<90;R++){let D=new P(Jt()-.5,Jt()-.65,Jt()-.5).normalize(),k=A.c.clone().add(new P(D.x*A.r.x,D.y*A.r.y,D.z*A.r.z).multiplyScalar(.98)),G=A.c.clone().sub(k).normalize().add(new P(0,.6,0)).normalize(),z=7+Jt()*14,B=k.clone().addScaledVector(G,z),K=k.clone().addScaledVector(G,z/2);if(r.pts.some(N=>N.distanceTo(B)<8||N.distanceTo(K)<8))continue;let se=Jt()>.5?["#8b7bc0","#c9b8e8","#5a5aa0"]:["#3ce0c4","#9ff0e0","#1d8f9a"];for(let N=0;N<z;N++){let ae=N<z*.4?2:N<z-2?1:0;for(let Be=-ae;Be<=ae;Be++)for(let He=-ae;He<=ae;He++)S.push([Math.round(k.x+G.x*N+Be),Math.round(k.y+G.y*N),Math.round(k.z+G.z*N+He),se[N>z-3?1:Be===0&&He===0?0:2]])}}let b=[],E=hi.heart.c;for(let R=0;R<22;R++){let D=E.clone().add(new P(Jt()-.5,Jt()-.5,Jt()-.5).multiplyScalar(8));for(let G=0;G<40;G++){let z=E.clone().sub(D).multiplyScalar(.05);D=D.add(new P(Jt()-.5,Jt()-.5,Jt()-.5).multiplyScalar(1.4).add(z)),!(D.distanceTo(E)<3.6)&&b.push([Math.round(D.x),Math.round(D.y),Math.round(D.z),Jt()>.5?"#7d5634":"#5a3b24"])}let k=new P(Jt()-.5,Jt()-.5,Jt()-.5).normalize();for(let G=7;G<12;G++)b.push([Math.round(E.x+k.x*G),Math.round(E.y+k.y*G),Math.round(E.z+k.z*G),"#5a3b24"])}let L=[];for(let R=-3;R<=3;R++)for(let D=-3;D<=3;D++)for(let k=-3;k<=3;k++)R*R+D*D+k*k<=10&&L.push([E.x+R,E.y+D,E.z+k,"#ffffff"]);return{frames:r,caves:i,bones:y,surface:s,tree:o,blossoms:f,root:d,detail:g,water:v,crystals:S,knot:b,core:L,waterLevel:T}}var e0=(r,e,t)=>Math.sin(r*.31+Math.sin(t*.17)*2)*Math.cos(e*.27+r*.05)+Math.sin(t*.23+e*.11)*.6,t0=(r,e,t)=>{let n=Math.sin(r*127.1+e*311.7+t*74.7)*43758.5453;return n-Math.floor(n)};function A2(r,e,t){let n=(f,d,m,p)=>{let _=e(f,d,m),g=t[_],y=Math.floor((d+e0(f,0,m)*2.5)/3.5);p.set(g[(y%g.length+g.length)%g.length]);let x=t0(Math.round(f),Math.round(d),Math.round(m));return _==="soil"&&x>.94&&p.set(x>.97?"#9aa0b4":"#c8a07a"),_==="bone"&&x>.96&&p.set("#e6dcc0"),_==="heart"&&x>.9&&p.set(x>.95?"#ff8a3d":"#c4506b"),_==="crystal"&&x>.95&&p.set("#8b7bc0"),p},i=(f,d)=>{let m=f.getAttribute("position"),p=new Float32Array(m.count*3),_=new P,g=new Me;for(let y=0;y<m.count;y++)_.fromBufferAttribute(m,y),d(_,y),m.setXYZ(y,_.x,_.y,_.z),n(_.x,_.y,_.z,g).toArray(p,y*3);return f.setAttribute("color",new Ut(p,3)),f.computeVertexNormals(),f},s=[],o=[],a=(f,d=1)=>jm.some(m=>jd(f,m)<d),l=[],c=0,h=0,u=()=>{if(l.length>3){let f=new un(l),d=new oi(f,l.length*2,Qr+.8,26,!1),m=d.getAttribute("normal"),p=new P;i(d,(y,x)=>{let v=e0(y.x,y.y,y.z)*.7+(t0(Math.round(y.x*2),Math.round(y.y*2),Math.round(y.z*2))-.5)*.4;y.addScaledVector(p.fromBufferAttribute(m,x),v)});let _=d.getAttribute("uv"),g=new Float32Array(_.count);for(let y=0;y<_.count;y++)g[y]=c+_.getX(y)*(h-c);d.setAttribute("along",new Ut(g,1)),s.push(new Ue(d))}l=[]};r.pts.forEach((f,d)=>{f.y>i0(f.x,f.z)-2||a(f,.8)?u():(l.length||(c=d/r.n),l.push(f.clone()),h=d/r.n);for(let p of jm){let _=jd(f,p);Math.abs(_-1.02)<.04&&!o.some(g=>Math.hypot(g.x-f.x,g.y-f.y,g.z-f.z)<6)&&o.push(new tn(f.x,f.y,f.z,Qr+.2))}}),u();for(let f of jm){let d=new Xt(1,72,48),m=0,p=1/0;r.pts.forEach((_,g)=>{let y=_.distanceToSquared(f.c);y<p&&(p=y,m=g/r.n)}),d.setAttribute("along",new Ut(new Float32Array(d.getAttribute("position").count).fill(m),1)),i(d,_=>{let g=_.clone();_.set(f.c.x+g.x*f.r.x,f.c.y+g.y*f.r.y,f.c.z+g.z*f.r.z);let y=e0(_.x*1.4,_.y*1.4,_.z*1.4)*1.6+(t0(Math.round(_.x),Math.round(_.y),Math.round(_.z))-.5)*.6;_.add(g.normalize().multiplyScalar(y+1))}),s.push(new Ue(d))}return{meshes:s,holes:o}}function sx(){let r=[],e=[],t=[];for(let l=-2;l<=2;l++)for(let c=0;c<=3;c++)for(let h=-3;h<=2;h++)l*l/5+(c-1.5)**2/3+h*h/8<=1.05&&r.push([l,c,h,c<1?"#7a6060":"#4a3b38"]);r.push([0,1.5,3,"#f47c7c"],[-1,2,2,"#0b0d1f"],[1,2,2,"#0b0d1f"],[-2,0,2,"#f4b6a0"],[2,0,2,"#f4b6a0"]);for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++)l*l+c*c<=5&&e.push([l,4,c,"#9a6a52"]);e.push([0,5,0,"#6b4a2e"]);for(let l=0;l<5;l++)t.push([3,l+1,2,"#7d5634"]);t.push([3,6,2,"#ffd34d"],[3,5,2,"#ffcf8a"]);let n=new $e,i=Mt*.36,s=di(r,!0,i),o=di(e,!0,i),a=di(t,!1,i);return n.add(s,o,a),{group:n,capMesh:o,lampMesh:a}}var ox=[["I","THE GREY TREE","The great tree has not bloomed for a hundred winters. Pip thinks the trouble is not in the branches.","LANTERN"],["II","TOPSOIL","Down past the worms and the stubborn roots, where the dirt still smells of rain.","ACORN CAP"],["III","THE BONE HALL","Old giants sleep here. Pip says excuse me to every single rib.","FOSSIL TOOTH"],["IV","THE BLIND RIVER","A river that has never seen the sky. Its fish make their own light.","RIVER PEARL"],["V","THE CRYSTAL HALL","Even this far down, things find a way to shine.","CRYSTAL SHARD"],["VI","THE HEART ROOT","At the bottom of everything, the tree's heart had gone cold. Pip gave it the lantern.","EMBER"],["VII","BLOOM","The light ran up every root at once. By morning the whole hill was pink.","BLOSSOM"]],s0=[0,.12,.26,.4,.54,.68,.82],ax=[0,.19,.33,.47,.61,.76,.95],cl=r=>Math.max(0,Math.min(1,Number.isFinite(r)?r:0)),Qd=r=>(r=cl(r),r*r*(3-2*r)),Jo=(r,e,t)=>Qd((r-e)/(t-e));function lx(r){let e=cl(r),t=0;s0.forEach((s,o)=>e>=s&&(t=o));let n=Jo(e,.82,.92),i=cl((e-.13)/(.69-.13));return{p:e,chapter:t,dive:Jo(e,.05,.13),along:n>0?1-n:i,orbit:Jo(e,.68,.74)*(1-Jo(e,.8,.83)),give:Jo(e,.73,.79),pulse:n>0?1-n:e>.79?1:0,rewind:n,exit:Jo(e,.91,.97),bloom:Jo(e,.9,.99)}}function cx(r){let e=r.palette.slice(0,32);for(;e.length<32;)e.push(e[e.length-1]);let t=new Me(r.outlineInk??"#0d0f1f"),n=new Ot({uniforms:{tColor:{value:null},tDepth:{value:null},uRes:{value:new ve(1,1)},uPal:{value:e.map(a=>{let l=new Me(a);return new P(l.r,l.g,l.b)})},uNear:{value:.1},uFar:{value:600},uDither:{value:r.dither??.05},uOutline:{value:r.outlineNear??140},uInk:{value:new P(t.r,t.g,t.b)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",fragmentShader:`
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
      }`}),i=new gn(4,4,{type:wn,minFilter:en,magFilter:en,depthTexture:new lr(4,4)});n.uniforms.tColor.value=i.texture,n.uniforms.tDepth.value=i.depthTexture;let s=new jt;s.add(new Ue(new On(2,2),n));let o=new Li(-1,1,1,-1,0,1);return{material:n,setSize(a,l){i.setSize(a,l),n.uniforms.uRes.value.set(a,l)},render(a,l,c){n.uniforms.uNear.value=c.near,n.uniforms.uFar.value=c.far,a.setRenderTarget(i),a.render(l,c),a.setRenderTarget(null),a.render(s,o)},dispose(){i.depthTexture?.dispose(),i.dispose(),n.dispose()}}}var R2=["#0d0a0c","#1c1410","#2e1d16","#4a3020","#6b4a2e","#9a6a52","#c8a07a","#e6dcc0","#ffffff","#d8dce6","#9aa0b4","#a8d8f0","#3b4466","#262c44","#1f5f8f","#3d8fbf","#9fd3e8","#3ce0c4","#1d8f9a","#2f6b4f","#5ba86a","#a8d46f","#ffd34d","#ff8a3d","#c4506b","#7a2d55","#e07aa8","#f7a8c4","#ffd6e6","#6fa8dc","#8b7bc0","#c9b8e8"],oo=(r,e,t)=>new P(r*Mt,e*Mt,t*Mt);function ux(r){let e=document.querySelector(".bw-world"),t=document.querySelector(".bw-stage");if(!e||!t)return;let n;try{n=new li({antialias:!1,powerPreference:"high-performance"})}catch{t.classList.add("is-fallback"),document.querySelector(".bw-journey")?.style.setProperty("height","100svh");return}let i=3;n.setPixelRatio(1),n.outputColorSpace=wr,e.append(n.domElement),e.classList.add("has-webgl");let s=cx({palette:R2,dither:.05,outlineNear:60,outlineInk:"#0d0a0c"}),o=new jt;o.background=new Me(1840144);let a=new Me;o.fog=new hs(a,6,40);let l=new Ht(48,1,.05,400),c=new Pr(16773856,4861984,1.4),h=new hn(16773336,2.2);h.position.set(-20,40,30),o.add(c,h);let u={uBloom:{value:0},uTime:{value:0}},f=new Ue(new Xt(300,24,12),new Ot({uniforms:u,side:In,depthWrite:!1,fog:!1,vertexShader:"varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uBloom; varying vec3 vD;
        void main(){
          float g = smoothstep(-0.1, 0.7, vD.y);
          vec3 winter = mix(vec3(0.86, 0.87, 0.9), vec3(0.62, 0.64, 0.7), g);
          vec3 spring = mix(vec3(1.0, 0.88, 0.92), vec3(0.45, 0.7, 0.92), smoothstep(-0.05, 0.22, vD.y));
          vec3 c = mix(winter, spring, uBloom);
          gl_FragColor = vec4(pow(c, vec3(2.2)), 1.0);
        }`}));o.add(f);let d=rx(),m={uGrey:{value:1}},p=$=>(o.add($),$),_=d.caves.holes.slice(0,12);for(;_.length<12;)_.push(new tn(0,9999,0,0));let g={uPulse:{value:-1},uLit:{value:0}},y=new ur({vertexColors:!0,side:nn});y.onBeforeCompile=$=>{$.uniforms.uHoles={value:_},Object.assign($.uniforms,g),$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWorld; attribute float along; varying float vAlong;`).replace("#include <worldpos_vertex>",`#include <worldpos_vertex>
vWorld = (modelMatrix * vec4(transformed, 1.0)).xyz; vAlong = along;`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
varying vec3 vWorld; uniform vec4 uHoles[12]; varying float vAlong; uniform float uPulse, uLit;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float ring = exp(-pow((vAlong - uPulse) * 60.0, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.6, 0.22) * (ring * 1.6 + step(uPulse, vAlong) * uLit * 0.12) * step(0.0, uPulse);`).replace("void main() {",`void main() {
  for (int i = 0; i < 12; i++) if (distance(vWorld, uHoles[i].xyz * ${Mt.toFixed(2)}) < uHoles[i].w * ${Mt.toFixed(2)}) discard;`)};let x=bs.getPointAt(0),v=new Ue(new cn((Qr+.8)*Mt,(Qr+.8)*Mt,7*Mt,24,1,!0),new ur({color:4861984,side:nn}));v.position.set(x.x*Mt,(x.y+2.5)*Mt,x.z*Mt),o.add(v);for(let $ of d.caves.meshes)$.material=y,$.scale.setScalar(Mt),$.frustumCulled=!1,o.add($);p(di(d.detail,!0)),p(di(d.bones,!0)).material.emissive.setRGB(.14,.12,.09),p(di(d.knot.map(([$,J,V,he])=>[$/.6,J/.6,V/.6,he]),!0,Mt*.6)),p(di(d.surface,!0,Mt,r0(m))),p(di(d.tree,!0,Mt,r0(m)));let T=p(di(d.crystals,!1));T.material.fog=!1;let S=p(new Ue(new So(2.4*Mt,0),new bn({color:10133684})));S.position.copy(hi.heart.c).multiplyScalar(Mt);let A={uTime:{value:0}};p(di(d.water,!1,Mt,$=>{$.uniforms.uTime=A.uTime,$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
uniform float uTime;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 ip = instanceMatrix[3].xyz; transformed.y += sin(uTime * 2.0 + ip.x * 3.0 + ip.z * 2.0) * 0.35;`)}));let b={uPulse:{value:-1},uLit:{value:0}},E=di(d.root.map($=>$.v),!0,Mt,$=>{Object.assign($.uniforms,b),$.vertexShader=$.vertexShader.replace("#include <common>",`#include <common>
attribute float aAlong; varying float vAlong;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vAlong = aAlong;`),$.fragmentShader=$.fragmentShader.replace("#include <common>",`#include <common>
uniform float uPulse, uLit; varying float vAlong;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
float band = exp(-pow((vAlong - uPulse) * 22.0, 2.0));
totalEmissiveRadiance += vec3(1.0, 0.62, 0.25) * (band * 3.0 + step(uPulse, vAlong) * uLit * 0.55);`)});E.geometry=E.geometry.clone(),E.geometry.setAttribute("aAlong",new bo(new Float32Array(d.root.map($=>$.along)),1)),p(E);let L=d.blossoms.map(($,J)=>{let V=di($.list,!0,Mt*.9);return V.position.copy(oo($.at.x,$.at.y,$.at.z)),V.scale.setScalar(.001),o.add(V),{m:V,delay:J/d.blossoms.length*.5}}),R=3,D=()=>((R=R*16807%2147483647)-1)/2147483646,k=di(Array.from({length:260},()=>{let $=Math.round((D()-.5)*120),J=Math.round(-60+D()*95);return[$,Math.floor(9*Math.exp(-(($-8)**2+(J+16)**2)/1500)+Math.sin($*.12)*.8+Math.cos(J*.1)*.8)+1,J,["#ffd6e6","#ffd34d","#ffffff","#e07aa8"][Math.floor(D()*4)]]}).filter(([$,,J])=>Math.hypot($,J-1)>6),!0);p(k);let G=p(di(Array.from({length:140},($,J)=>[0,0,0,J%2?"#f7a8c4":"#ffd6e6"]),!1,Mt*1.1)),z=p(di(Array.from({length:16},($,J)=>[0,0,0,J%3?"#9fd3e8":"#3ce0c4"]),!1,Mt*.8)),B=sx();o.add(B.group);let K=new Ii(16763e3,3,9,1.4);o.add(K);let se=new Ii(4892927,0,14,1.2);se.position.copy(hi.river.c).multiplyScalar(Mt);let N=new Ii(11570431,0,14,1.2);N.position.copy(hi.crystal.c).multiplyScalar(Mt);let ae=new Ii(16747069,0,16,1.1);ae.position.copy(hi.heart.c).multiplyScalar(Mt),o.add(se,N,ae);let Be=new P,He=new P,Ye=new P,it=($,J)=>J.copy(bs.getPointAt(cl($))).multiplyScalar(Mt),ie=$=>{let J=bs.getTangentAt(cl($)),V=new P().crossVectors(J,new P(0,1,0)).normalize();return Ye.crossVectors(V,J).normalize()},re=new P,ye=new P,Oe=[oo(-34,34,80),oo(10,18,-18)],Ce=[oo(0,9,16),oo(0,-6,-12)],je=[oo(-34,30,66),oo(16,24,-22)],ft=hi.heart.c.clone().multiplyScalar(Mt);function we($,J){it($,re).addScaledVector(ie($),.7*Mt),it(J?$-.014:$+.014,ye).addScaledVector(ie($),.2*Mt)}let qe=($,J,V)=>{re.lerpVectors($[0],J[0],V),ye.lerpVectors($[1],J[1],V)},Ze=$=>{let J=0,V=1/0;for(let he=0;he<=400;he++){let Te=bs.getPointAt(he/400).distanceToSquared($);Te<V&&(V=Te,J=he/400)}return J},De=[[0,0],[(.3-.13)/.56,Ze(hi.bone.c)],[(.45-.13)/.56,Ze(hi.river.c)],[(.59-.13)/.56,Ze(hi.crystal.c)],[1,Ze(hi.heart.c)-.045]],j=$=>{for(let J=1;J<De.length;J++){let[V,he]=De[J-1],[Te,st]=De[J];if($<=Te)return he+($-V)/(Te-V)*(st-he)}return De[De.length-1][1]},H={x:0,y:0,tx:0,ty:0},_t={p:r?.99:0},ct=-1,Je=$=>t.querySelector($),Fe=Je(".bw-marker"),F=Je(".bw-depth b"),w=Je(".bw-layer"),I=Je(".bw-card small"),U=Je(".bw-card h2"),W=Je(".bw-card p"),X=Je(".bw-card .bw-found b"),ge=Array.from(t.querySelectorAll(".bw-slot")),oe=new Pt,Pe=new _n,Ae=new P,ue=new P,de=["SURFACE","TOPSOIL","BONE HALL","BLIND RIVER","CRYSTAL HALL","HEART ROOT"];function Le($){let J=lx(_t.p),V={...J,along:j(J.along)},he=V.p;if(u.uBloom.value=V.bloom,m.uGrey.value=1-V.bloom,A.uTime.value=$,he<.13)qe(Oe,Ce,V.dive);else if(V.exit>0){we(.02,!0);let le=[re.clone(),ye.clone()];qe(le,je,Qd(V.exit))}else if(V.orbit>0&&V.rewind===0){we(De[De.length-1][1],!1);let le=re.clone(),Ge=ye.clone(),Xe=(he-.68)*9;Be.set(ft.x+Math.sin(Xe)*3.4,ft.y+.9,ft.z+Math.cos(Xe)*3.4),re.lerpVectors(le,Be,V.orbit),ye.lerpVectors(Ge,ft,V.orbit)}else we(V.rewind>0?j(J.along):V.along,V.rewind>0);H.x+=(H.tx-H.x)*.05,H.y+=(H.ty-H.y)*.05,ye.x+=H.x*.5,ye.y-=H.y*.3,re.y+=Math.sin($*1.4)*.03,l.position.copy(re),l.lookAt(ye),f.position.copy(re);let Te=he<.13?V.dive*.9:V.exit>0?1-V.exit:1,st=re.z/Mt,Se=st>-92?[.16,.1,.07]:st>-168?[.22,.13,.1]:st>-248?[.05,.1,.2]:st>-322?[.12,.08,.22]:[.22,.07,.06];a.setRGB(.88,.89,.92).lerp(new Me(...Se),Te),o.fog.color.copy(a),o.fog.near=6+(1-Te)*40,o.fog.far=26+(1-Te)*200,c.intensity=1.4-Te*1.15,f.visible=Te<.97,o.background.copy(a),h.intensity=2.2*(1-Te);let tt=Math.min(De[De.length-1][1]+.025,V.along+.05);V.exit>.5?(B.group.position.copy(oo(12,9,-14)),B.group.rotation.set(0,.6,0)):(it(V.rewind>0?De[De.length-1][1]+.025:tt,ue).addScaledVector(ie(tt),-(Qr-.9)*Mt),B.group.position.copy(ue),B.group.position.y+=Math.abs(Math.sin($*6))*.04,it(tt+.01,He).addScaledVector(ie(tt),-(Qr-.9)*Mt),B.group.lookAt(He)),B.capMesh.visible=he>.19,B.lampMesh.visible=V.give<.5,K.position.copy(B.group.position).add(new P(0,.9,0)),K.intensity=4*Te*(1-V.give),se.intensity=30*Te,N.intensity=26*Te;let We=.75+.25*Math.sin($*1.6);T.material.color.setScalar(We);let rt=V.give;ae.intensity=5+rt*16+Math.sin($*3)*2*rt,S.material.color.setRGB(.22+rt*.78,.25+rt*.4,.38-rt*.22).multiplyScalar(.85+.15*Math.sin($*(2+rt*3))),S.rotation.set($*.3,$*.5,0),S.scale.setScalar(1+rt*.25+Math.sin($*3.2)*.06*rt),g.uPulse.value=V.pulse>0?Math.max(0,V.along-.015):-1,g.uLit.value=rt,b.uPulse.value=V.pulse>0?V.exit>0?1-V.exit*1.4:1.2:-1,b.uLit.value=rt;let zt=hi.river;for(let le=0;le<16;le++){let Ge=$*(.4+le%4*.12)+le*1.7,Xe=Math.max(0,Math.sin($*1.3+le*2.1))**6*3;ue.set(zt.c.x+Math.cos(Ge)*zt.r.x*.55,d.waterLevel+.8+Xe,zt.c.z+Math.sin(Ge*1.3)*zt.r.z*.55).multiplyScalar(Mt),oe.compose(ue,Pe.setFromEuler(new Xn(0,-Ge,0)),Ae.set(Mt*1.6,Mt*.6,Mt*.8)),z.setMatrixAt(le,oe)}if(z.instanceMatrix.needsUpdate=!0,L.forEach(le=>le.m.scale.setScalar(Math.max(.001,Qd((V.bloom-le.delay)/.45)))),k.visible=V.bloom>.2,k.position.y=(V.bloom-1)*Mt*2,G.visible=V.bloom>.3,G.visible)for(let le=0;le<140;le++){let Ge=($*.08+le*.0137)%1;ue.set(18+Math.sin(le*2.3)*22+Math.sin($+le)*2,46-Ge*44,-24+Math.cos(le*1.7)*22).multiplyScalar(Mt),oe.compose(ue,Pe.setFromEuler(new Xn($+le,$*.7,0)),Ae.setScalar(Mt*1.1*V.bloom)),G.setMatrixAt(le,oe)}G.instanceMatrix.needsUpdate=!0,s.render(n,o,l);let pt=he<.13||V.exit>0?0:V.along;if(Fe&&(Fe.style.top=`${pt*100}%`),F&&(F.textContent=String(Math.round(pt*412)).padStart(3,"0")),w&&(w.textContent=V.exit>0||he<.12?de[0]:de[Math.min(5,1+Math.floor(pt*4.99))]),V.chapter!==ct){ct=V.chapter;let[le,Ge,Xe,nt]=ox[V.chapter];I&&(I.textContent=`SPECIMEN ${le} / VII`),U&&(U.textContent=Ge),W&&(W.textContent=Xe),X&&(X.textContent=nt)}ge.forEach((le,Ge)=>{let Xe=ax[Ge===5?6:Ge],nt=he>=Xe;le.classList.toggle("is-found",nt),le.classList.toggle("is-given",Ge===0&&V.give>.5),le.classList.toggle("is-new",nt&&he<Xe+.03)}),e.dataset.scrollProgress=he.toFixed(3),e.dataset.storyBeat=String(V.chapter+1)}function Ne(){let $=Math.max(1,e.clientWidth),J=Math.max(1,e.clientHeight),V=Math.ceil($/i),he=Math.ceil(J/i);n.setSize(V,he,!1),s.setSize(V,he),l.aspect=$/J,l.updateProjectionMatrix(),Le(performance.now()/1e3)}Ne();let _e;r||(_e=ee.timeline({defaults:{ease:"none"},scrollTrigger:{trigger:".bw-journey",start:"top top",end:"bottom bottom",scrub:1.3}}),_e.to(_t,{p:1,duration:1},0),_e.to(".bw-title",{autoAlpha:0,scale:1.4,duration:.05,ease:"power2.in"},.03),_e.fromTo(".bw-card, .bw-gauge, .bw-bar",{autoAlpha:0},{autoAlpha:1,duration:.02,ease:"steps(4)"},.08),s0.forEach(($,J)=>{J&&_e.fromTo(".bw-card",{scale:1.25,rotation:-4},{scale:1,rotation:0,duration:.008,ease:"steps(4)",immediateRender:!1},$+.002)}),_e.fromTo(".bw-flash",{autoAlpha:0},{autoAlpha:.85,duration:.004},.79),_e.to(".bw-flash",{autoAlpha:0,duration:.03},.795),ee.from(".bw-title .bw-l",{y:40,autoAlpha:0,duration:.6,stagger:.06,ease:"steps(6)",delay:.3}),ee.from(".bw-nav",{autoAlpha:0,y:-16,duration:.6,ease:"steps(6)",delay:.2}),ee.utils.toArray(".bw-notes article").forEach(($,J)=>ee.from($,{autoAlpha:0,y:40,rotation:J%2?2:-2,duration:.7,ease:"steps(7)",scrollTrigger:{trigger:$,start:"top 90%"}})));let Ee=$=>{H.tx=($.clientX/innerWidth-.5)*2,H.ty=($.clientY/innerHeight-.5)*2};window.addEventListener("pointermove",Ee,{passive:!0});let O=0,xe=!0,pe=new IntersectionObserver(([$])=>{xe=$.isIntersecting,xe&&fe()});pe.observe(e);let Ie=$=>{O=0,!(!xe||document.hidden)&&(Le($/1e3),fe())};function fe(){!O&&xe&&!document.hidden&&!r&&(O=requestAnimationFrame(Ie))}let ce=()=>document.hidden?(cancelAnimationFrame(O),O=0):fe();return document.addEventListener("visibilitychange",ce),window.addEventListener("resize",Ne),fe(),()=>{cancelAnimationFrame(O),pe.disconnect(),_e?.scrollTrigger?.kill(),_e?.kill(),window.removeEventListener("pointermove",Ee),window.removeEventListener("resize",Ne),document.removeEventListener("visibilitychange",ce),o.traverse($=>{let J=$;J.geometry?.dispose(),(Array.isArray(J.material)?J.material:J.material?[J.material]:[]).forEach(V=>V.dispose())}),s.dispose(),n.dispose(),n.domElement.remove()}}function Zc(r){let e=new jt,t=new Ht(36,1,.1,80),n=new $e;t.position.set(0,0,9),e.add(n,new Wi(16777215,1.2));let i=new hn(16771279,3);i.position.set(3,4,5),e.add(i);let s=h=>new xt({color:h,roughness:.3,metalness:.25,side:nn,emissive:h,emissiveIntensity:.16}),o=[],a=(h,u)=>{let f=new vt().setFromPoints(h),d=new Rr(f,new ar({color:u}));return n.add(d),d};if(r==="nereid"){let h=new Ue(new Xt(1.35,64,32,0,Math.PI*2,0,Math.PI*.56),s("#9ccff2"));h.position.y=.55,n.add(h);for(let u=0;u<28;u++){let f=u/28*Math.PI*2,d=Array.from({length:85},(p,_)=>new P(Math.cos(f)*1.13,.5-_*.046,Math.sin(f)*1.13)),m=a(d,u%3?"#6285de":"#e4a1eb");o.push(p=>{let _=m.geometry.attributes.position;for(let g=0;g<85;g++){let y=g/84;_.setXYZ(g,Math.cos(f)*(1.13-.5*y)+Math.sin(y*10-p*1.2+f)*y*.3,.5-y*3.4,Math.sin(f)*(1.13-.5*y)+Math.cos(y*8-p+f)*y*.25)}_.needsUpdate=!0})}o.push(u=>{h.scale.set(1+Math.sin(u*1.6)*.07,1-Math.sin(u*1.6)*.12,1+Math.sin(u*1.6)*.07)}),n.position.y=.6}else if(r==="zephyr"){let h=new Ue(new Xt(.18,20,16),s("#c2a272"));n.add(h);for(let f=0;f<150;f++){let d=1-2*(f+.5)/150,m=f*2.399963,p=Math.sqrt(1-d*d),_=new P(Math.cos(m)*p,d,Math.sin(m)*p);a([_.clone().multiplyScalar(.15),_.clone().multiplyScalar(1.55)],"#aaa18c");let g=_.clone().multiplyScalar(1.55);for(let y=0;y<7;y++){let x=y/7*Math.PI*2;a([g,g.clone().add(new P(Math.cos(x)*.21,.17,Math.sin(x)*.21))],"#e8e4d6")}}let u=new Ue(new cn(.022,.04,2.7,8),s("#7d8775"));u.position.y=-1.5,n.add(u)}else if(r==="vernant")for(let h=0;h<7;h++){let u=new $e;n.add(u),u.rotation.z=(h-3)*.29,u.rotation.y=h*.65,u.position.y=-2;let f=new un(Array.from({length:25},(d,m)=>new P(0,m/24*3.9,Math.sin(m/24*2)*.3)));u.add(new Ue(new oi(f,32,.018,5,!1),s("#819e68")));for(let d=0;d<24;d++){let m=d/24,p=Math.sin(Math.PI*m)*.85;for(let _ of[-1,1]){let g=new Ue(new Xt(1,12,6),s(d%3?"#70b896":"#c5db98"));g.scale.set(p,.045,.12*(1-m)+.015),g.position.set(_*p*.8,m*3.9,Math.sin(m*2)*.3),g.rotation.z=_*.3,u.add(g)}}o.push(d=>{u.rotation.z=(h-3)*.29+Math.sin(d*.65+h)*.055,u.rotation.x=Math.sin(d*.45+h)*.12})}else{let h=Array.from({length:320},(d,m)=>{let p=m/319*Math.PI*5,_=.09*Math.exp(p*.19);return new P(Math.cos(p)*_,Math.sin(p)*_,0)}),u=new un(h),f=new Ue(new oi(u,380,.14,12,!1),s("#f4b78e"));n.add(f);for(let d=15;d<310;d+=3){let m=h[d],p=d/319*Math.PI*5,_=new Ue(new kn(.16,.012,5,28),s(d%2?"#c15c60":"#ffe0ae"));_.position.copy(m),_.rotation.set(Math.PI/2,p,0),n.add(_)}n.rotation.z=-.8}let l=0,c=0;return{scene:e,camera:t,resize(h){t.position.z=h<1?12:9,r==="vernant"&&(n.scale.setScalar(.82),n.position.x=-.3)},update(h,u){l+=(u.x*u.on-l)*.035,c+=(u.y*u.on-c)*.035,n.rotation.y=Math.sin(h*.18)*.24+l*.35,n.rotation.x=c*.15;for(let f of o)f(h);r==="zephyr"&&(n.rotation.z=Math.sin(h*.4)*.08),r==="volute"&&(n.rotation.z=-.8+h*.06)}}}var hx="varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }",C2={uniforms:{tDiffuse:{value:null},tSrc:{value:null},uGrid:{value:new ve(1,1)},uCell:{value:6},uTime:{value:0},uShape:{value:0},uGap:{value:.1},uLevels:{value:4},uMono:{value:0},uInk:{value:new Me(1,1,1)},uPaper:{value:new Me(0,0,0)},uBg:{value:new Me(0,0,0)},uSat:{value:1},uContrast:{value:1},uExposure:{value:1},uTwinkle:{value:.5},uSmear:{value:0}},vertexShader:hx,fragmentShader:`
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
    }`},P2={uniforms:{tDiffuse:{value:null},uCenter:{value:new ve(.5,.5)},uStrength:{value:.5}},vertexShader:hx,fragmentShader:`
    uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec3 base = texture2D(tDiffuse, vUv).rgb, acc = vec3(0.0);
      vec2 step = (vUv - uCenter) * 0.022, uv = vUv; float w = 1.0;
      for (int i = 0; i < 40; i++) { uv -= step; acc += max(texture2D(tDiffuse, uv).rgb - 0.6, 0.0) * w; w *= 0.955; }
      gl_FragColor = vec4(base + acc * uStrength / 20.0, 1.0);
    }`},ef=class{constructor(e,t,n){this.host=e;this.subject=t;this.opts=n;this.renderer=new li({antialias:!1,powerPreference:"high-performance"}),this.dpr=Math.min(devicePixelRatio||1,1.5),this.renderer.setPixelRatio(this.dpr),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,e.append(this.renderer.domElement),this.src=new gn(4,4,{type:wn,samples:4,minFilter:en,magFilter:en}),this.composer=new il(this.renderer),this.look=new qo(C2);let i=this.look.uniforms;i.tSrc.value=this.src.texture,i.uShape.value=n.shape==="pixel"?0:n.shape==="led"?1:2,i.uGap.value=n.gap,i.uLevels.value=n.levels,i.uMono.value=n.mono?1:0,n.mono&&(i.uInk.value.set(n.mono.ink).convertSRGBToLinear(),i.uPaper.value.set(n.mono.paper).convertSRGBToLinear()),i.uBg.value.set(n.background).convertSRGBToLinear(),i.uSat.value=n.saturation??1,i.uContrast.value=n.contrast??1,i.uExposure.value=n.exposure??1,i.uTwinkle.value=n.twinkle,i.uSmear.value=n.smear??0,this.composer.addPass(this.look),n.rays&&(this.rays=new qo(P2),this.rays.uniforms.uStrength.value=n.rays,this.composer.addPass(this.rays)),this.bloom=new to(new ve(256,256),...n.bloom),this.composer.addPass(this.bloom),this.composer.addPass(new rl),this.resize()}host;subject;opts;renderer;src;composer;look;rays;bloom;dpr;resize(){let e=Math.max(1,this.host.clientWidth),t=Math.max(1,this.host.clientHeight);this.renderer.setSize(e,t,!1),this.composer.setPixelRatio(this.dpr),this.composer.setSize(e,t),this.bloom.resolution.set(e/2,t/2);let n=Math.ceil(e/this.opts.cell),i=Math.ceil(t/this.opts.cell);this.src.setSize(n,i),this.look.uniforms.uGrid.value.set(n,i),this.subject.camera.aspect=e/t,this.subject.camera.updateProjectionMatrix(),this.subject.resize?.(e/t)}render(e,t){this.subject.update(e,t),this.look.uniforms.uTime.value=e,this.rays&&this.subject.focus&&this.rays.uniforms.uCenter.value.copy(this.subject.focus()),this.renderer.setRenderTarget(this.src),this.renderer.setClearColor(0,1),this.renderer.clear(),this.renderer.render(this.subject.scene,this.subject.camera),this.renderer.setRenderTarget(null),this.composer.render()}dispose(){this.subject.scene.traverse(e=>{let t=e;t.geometry?.dispose(),(Array.isArray(t.material)?t.material:t.material?[t.material]:[]).forEach(n=>{Object.values(n).forEach(i=>i instanceof Un&&i.dispose()),n.dispose()})}),this.src.dispose(),this.composer.dispose(),this.renderer.dispose(),this.renderer.domElement.remove()}};var tf=3,Fr=()=>((tf=tf*16807%2147483647)-1)/2147483646;function I2(){let r=new Eo;return r.moveTo(.02,.04),r.bezierCurveTo(.18,.55,.52,.98,1.04,1.04),r.bezierCurveTo(1.2,.84,1.16,.46,1,.2),r.bezierCurveTo(.76,.02,.42,-.04,.08,-.04),r}function L2(){let r=new Eo;return r.moveTo(.04,-.02),r.bezierCurveTo(.42,.06,.84,0,.88,-.32),r.bezierCurveTo(.9,-.62,.62,-.86,.44,-.84),r.bezierCurveTo(.36,-.98,.3,-1.12,.24,-1.1),r.bezierCurveTo(.22,-.92,.18,-.6,.06,-.16),r}function D2(r,e,t){tf=t?7:19;let n=512,i=document.createElement("canvas");i.width=i.height=n;let s=i.getContext("2d"),o=p=>(p-e.min.x)/(e.max.x-e.min.x)*n,a=p=>n-(p-e.min.y)/(e.max.y-e.min.y)*n,l=new Path2D;r.getPoints(80).forEach((p,_)=>_?l.lineTo(o(p.x),a(p.y)):l.moveTo(o(p.x),a(p.y))),l.closePath(),s.save(),s.clip(l);let c=[o(.02),a(0)],h=s.createRadialGradient(c[0],c[1],0,c[0],c[1],n*1.1);h.addColorStop(0,"#f7f0c8"),h.addColorStop(.35,"#f2c9a6"),h.addColorStop(.7,"#e9a9c7"),h.addColorStop(1,"#b7a6ef"),s.fillStyle=h,s.fillRect(0,0,n,n);for(let p=0;p<5e3;p++)s.fillStyle=`rgba(${Fr()>.5?"255,255,240":"120,90,120"},${Fr()*.35})`,s.fillRect(Fr()*n,Fr()*n,2,2);s.strokeStyle="rgba(40,24,36,0.85)",s.lineCap="round";let u=t?9:7,f=[];for(let p=0;p<u;p++){let _=t?.15+p/(u-1)*1.05:-1.45+p/(u-1)*1.3,g=c[0]+Math.cos(_)*n*1.3,y=c[1]-Math.sin(_)*n*1.3;s.lineWidth=5-p*.25,s.beginPath(),s.moveTo(c[0],c[1]),s.quadraticCurveTo((c[0]+g)/2+(Fr()-.5)*40,(c[1]+y)/2+(Fr()-.5)*40,g,y),s.stroke(),f.push([g,y])}s.lineWidth=2.5;for(let p of[.32,.52])s.beginPath(),f.forEach(([_,g],y)=>{let x=c[0]+(_-c[0])*p*(.9+Fr()*.2),v=c[1]+(g-c[1])*p*(.9+Fr()*.2);y?s.lineTo(x,v):s.moveTo(x,v)}),s.stroke();s.restore(),s.save(),s.clip(l),s.strokeStyle="rgba(34,20,34,0.95)",s.lineWidth=n*.13,s.stroke(l),r.getSpacedPoints(t?26:22).forEach((p,_)=>{if(Math.hypot(p.x,p.y)<.35)return;let g=o(p.x),y=a(p.y),x=o(.4),v=a(t?.4:-.35);for(let[M,T,S]of[[.075,9,"#fff5d8"],[.15,6,"#f6c2e0"]]){let A=g+(x-g)*M,b=y+(v-y)*M;s.fillStyle=S,s.beginPath(),s.arc(A,b,T*(_%2?.8:1.1),0,7),s.fill()}}),s.restore();let m=new Cr(i);return m.colorSpace=Kt,m}function F2(r,e){let t=new ac(r,40);t.computeBoundingBox();let n=t.boundingBox,i=new dc(new ve(n.min.x,n.min.y),new ve(n.max.x,n.max.y)),s=t.getAttribute("position"),o=t.getAttribute("uv");for(let l=0;l<s.count;l++)o.setXY(l,(s.getX(l)-i.min.x)/(i.max.x-i.min.x),(s.getY(l)-i.min.y)/(i.max.y-i.min.y));let a=new Ot({side:nn,uniforms:{map:{value:D2(r,i,e)},uTime:{value:0}},vertexShader:`
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
      }`});return new Ue(t,a)}function dx(){let r=new jt,e=new Ht(34,1,.1,50);e.position.set(0,0,5.6);let t=new $e;r.add(t);let n=[];for(let p of[1,-1])for(let _ of[!0,!1]){let g=new $e,y=F2(_?I2():L2(),_);y.scale.set(p,1,1),g.add(y),t.add(g),n.push({pivot:g,side:p,fore:_,mats:y.material})}let i=new bn({color:new Me("#4fbf98")}),s=new Ue(new Na(.06,.26,6,12),i);s.position.y=0;let o=new Ue(new Na(.04,.6,6,12),new bn({color:"#7da890"}));o.position.y=-.52;let a=new Ue(new Xt(.075,16,12),i);a.position.y=.27,t.add(s,o,a);let l=new ar({color:"#5d3b62"});for(let p of[1,-1]){let _=new ds(new P(0,.3,0),new P(p*.12,.55,.05),new P(p*.3,.78,.02)),g=new Rr(new vt().setFromPoints(_.getPoints(16)),l);t.add(g);let y=new Ue(new Xt(.025,8,6),l);y.position.set(p*.3,.78,.02),t.add(y)}tf=41;let c=140,h=new Float32Array(c*3),u=new Float32Array(c*3);for(let p=0;p<c;p++)u.set([(Fr()-.5)*6,(Fr()-.5)*3.6,(Fr()-.5)*2],p*3);let f=new vt;f.setAttribute("position",new Ut(h,3));let d=new Jn(f,new si({size:.012,color:"#c9b2a8",transparent:!0,opacity:.35}));r.add(d);let m=new ve;return{scene:r,camera:e,resize(p){t.scale.setScalar(p<1?.7:1)},update(p,_){let g=.5+.5*Math.sin(p*.37),y=Math.sin(p*(2.2+g*.6)),x=.1+(.5+.5*y)*(.8-g*.45);for(let v of n)v.pivot.rotation.y=-v.side*x*(v.fore?1:.92),v.pivot.rotation.z=v.side*(v.fore?.05:-.03)*y,v.mats.uniforms.uTime.value=p;m.x+=(_.x*_.on-m.x)*.04,m.y+=(_.y*_.on-m.y)*.04,t.position.set(Math.sin(p*.21)*.08,.3+Math.sin(p*.7)*.05-y*.02,0),t.rotation.set(-.22-m.y*.25+Math.sin(p*.3)*.05,m.x*.45+Math.sin(p*.17)*.2,Math.sin(p*.23)*.06);for(let v=0;v<c;v++)h[v*3]=u[v*3]+Math.sin(p*.2+v)*.15,h[v*3+1]=(u[v*3+1]+p*.05+1.8)%3.6-1.8,h[v*3+2]=u[v*3+2];f.attributes.position.needsUpdate=!0}}}var a0=11,Qi=()=>((a0=a0*16807%2147483647)-1)/2147483646;function o0(r,e,t,n=.7){let i=new On(1,1,6,10),s=i.getAttribute("position");for(let o=0;o<s.count;o++){let a=s.getX(o),l=s.getY(o)+.5,c=Math.pow(Math.sin(Math.PI*Math.min(1,l*.92+.04)),n)*e,h=a*c;s.setXYZ(o,h,l*r,h*h*t+l*l*r*.12)}return i.computeVertexNormals(),i}function fx(){let r=new jt,e=new Ht(40,1,.1,60);e.position.set(0,.6,7),e.lookAt(0,.9,0),r.add(new Pr(16777215,2236962,1.4));let t=new hn(16777215,2.4);t.position.set(-4,6,6),r.add(t);let n=new Ue(new On(40,22),new Ot({uniforms:{uTime:{value:0}},depthWrite:!1,vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec2 p = vUv * vec2(3.2, 1.8) + vec2(uTime * 0.012, 0.0);
          float c = fbm(p + fbm(p * 0.7 + uTime * 0.01));
          float lift = smoothstep(0.1, 1.0, vUv.y) * (0.55 + 0.45 * vUv.x);
          gl_FragColor = vec4(vec3(0.02 + c * 0.14 * lift + lift * 0.05), 1.0);
        }`}));n.position.set(0,2,-9),r.add(n);let i=new xt({color:16053488,roughness:.62,side:nn}),s=new xt({color:9079418,roughness:.9}),o=new xt({color:2895658,roughness:.9,side:nn}),a=o0(.42,.12,.9,.55),l=o0(.5,.3,1.4,.9),c=o0(.7,.12,.5,.6),h=[];a0=11;for(let f=0;f<64;f++){let d=-3.5+Qi()*4.6,m=(Qi()-.5)*(12+-d*1.4),p=1+Qi()*1.5+(d<-1?.6:0),_=new $e;_.position.set(m,-2.6,d),r.add(_);let g=(Qi()-.5)*.5,y=new ds(new P(0,0,0),new P(g*.6,p*.55,0),new P(g,p,0));_.add(new Ue(new oi(y,10,.018,5),o));for(let b=0;b<2;b++){let E=new Ue(c,o);E.position.copy(y.getPoint(.2+b*.25)),E.rotation.set(.3,Qi()*6.28,(b?-1:1)*(.8+Qi()*.4)),E.scale.setScalar(.6+Qi()*.4),_.add(E)}let x=new $e;x.position.copy(y.getPoint(1)),_.add(x);let v=Qi()>.55,M=v?8:15,T=[];for(let b=0;b<M;b++){let E=new $e;E.rotation.z=b/M*Math.PI*2+Qi()*.1;let L=new Ue(v?l:a,i);E.add(L),x.add(E),T.push(L)}let S=new Ue(new Xt(v?.09:.11,14,10),s);S.scale.z=.5,x.add(S);let A=.55+Qi()*.45;x.scale.setScalar(A),h.push({root:_,head:x,petals:T,x:m,phase:Qi()*6.28,delay:.2+(m+8)*.12+Qi()*.5,tilt:(Qi()-.5)*.9})}let u={x:0,s:0};return{scene:r,camera:e,resize(f){e.position.z=f<1?11:7},update(f,d){n.material.uniforms.uTime.value=f,u.x+=(d.x*7-u.x)*.08,u.s+=(d.on-u.s)*.05;for(let m of h){let p=Po.smoothstep(f,m.delay,m.delay+2.4),_=Math.sin(f*.8+m.phase)*.04;m.petals.forEach((v,M)=>{v.rotation.x=1.4*(1-p)+.14+_+M%2*.06});let g=Math.sin(f*.9-m.x*.35)*.07+Math.sin(f*2.3+m.phase)*.015,y=m.x-u.x,x=u.s*Math.exp(-(y*y)/3)*Math.sign(y||1)*.3;m.root.rotation.z=-(g+x),m.head.rotation.set(-.35+Math.sin(f*.6+m.phase)*.05,m.tilt,0)}}}}var px=23,Ko=()=>((px=px*16807%2147483647)-1)/2147483646;function N2(r,e){let t=new On(1,1,8,14),n=t.getAttribute("position"),i=[],s=new Me("#fff3df"),o=new Me("#ff9ccc"),a=new Me("#ff3d96"),l=new Me;for(let c=0;c<n.count;c++){let h=n.getX(c),u=n.getY(c)+.5,f=Math.pow(Math.sin(Math.PI*Math.pow(u,.75)),.55)*e*(1-u*.1),d=h*f;n.setXYZ(c,d,u*r,-d*d*2.2/e+Math.pow(u,2.4)*r*.22),l.copy(s).lerp(o,Po.smoothstep(u,.05,.55)).lerp(a,Po.smoothstep(u,.6,1)*(.6+Math.abs(h)*.8)),i.push(l.r,l.g,l.b)}return t.setAttribute("color",new lt(i,3)),t.computeVertexNormals(),t}function mx(){let r=new jt,e=new Ht(32,1,.1,50);e.position.set(0,2.4,8),e.lookAt(0,.35,0),r.add(new Wi(16766696,.35));let t=new hn(16773364,1.1);t.position.set(2,4,3),r.add(t);let n=new Ii(16763034,3,3.2,1.6);n.position.set(0,.45,0),r.add(n);let i=new $e;r.add(i);let s=new xt({vertexColors:!0,roughness:.55,side:nn,emissive:new Me("#ff6fae"),emissiveIntensity:.08}),o=[{n:11,len:.95,w:.6,open:1.32,y:-.04,twist:0},{n:10,len:.95,w:.58,open:.86,y:0,twist:.3},{n:8,len:.85,w:.54,open:.44,y:.05,twist:.1},{n:6,len:.62,w:.46,open:.16,y:.1,twist:.5}],a=[];o.forEach((g,y)=>{let x=N2(g.len,g.w);for(let v=0;v<g.n;v++){let M=new $e;M.rotation.y=v/g.n*Math.PI*2+g.twist,M.position.y=g.y;let T=new $e;T.position.z=.1+y*-.02,M.add(T);let S=new Ue(x,s);T.add(S),i.add(M),a.push({m:T,ring:y,jitter:(Ko()-.5)*.12})}});let l=new Ue(new cn(.17,.12,.14,24),new xt({color:"#f6d36a",emissive:"#ffb340",emissiveIntensity:.35}));l.position.y=.32,i.add(l);let c=new bn({color:new Me("#ffd98a")});for(let g=0;g<46;g++){let y=Ko()*Math.PI*2,x=.17+Ko()*.06,v=.12+Ko()*.1,M=new Ue(new cn(.006,.006,v,4),c);M.position.set(Math.cos(y)*x,.32+v/2,Math.sin(y)*x),M.rotation.set(Math.sin(y)*.5,0,-Math.cos(y)*.5),i.add(M)}let h=50,u=new Float32Array(h*3),f=new Float32Array(h*3);for(let g=0;g<h;g++)f.set([Ko()*Math.PI*2,Ko(),Ko()],g*3);let d=new vt;d.setAttribute("position",new Ut(u,3)),r.add(new Jn(d,new si({size:.014,color:"#b98aa4"})));let m=new ve,p=new P,_=new ve;return{scene:r,camera:e,focus(){return p.set(0,.45,0).applyMatrix4(i.matrixWorld).project(e),_.set(p.x*.5+.5,p.y*.5+.5)},resize(g){i.scale.setScalar(g<1?.7:1)},update(g,y){let x=Po.smoothstep(g,.2,3.2),v=Math.sin(g*.55)*.07;for(let{m:M,ring:T,jitter:S}of a){let A=o[T];M.rotation.x=.08+(A.open+v*(1+T*.5)+S)*x}m.x+=(y.x*y.on-m.x)*.035,m.y+=(y.y*y.on-m.y)*.035,i.rotation.set(m.y*.25,g*.08+m.x*.5,m.x*-.08),i.position.y=Math.sin(g*.5)*.04,n.intensity=3+Math.sin(g*1.3)*.6+Math.sin(g*3.1)*.25;for(let M=0;M<h;M++){let T=f[M*3],S=(f[M*3+1]+g*(.05+f[M*3+2]*.06))%1,A=.15+S*(.6+f[M*3+2]);u.set([Math.cos(T+S*2)*A,.35+S*2.6,Math.sin(T+S*2)*A],M*3)}d.attributes.position.needsUpdate=!0}}}var U2={volute:[()=>Zc("volute"),{cell:3,shape:"streak",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#160d10"}],vernant:[()=>Zc("vernant"),{cell:3,shape:"pixel",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#07130e"}],zephyr:[()=>Zc("zephyr"),{cell:3,shape:"pixel",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#11110f"}],nereid:[()=>Zc("nereid"),{cell:3,shape:"led",gap:.12,levels:6,twinkle:.2,bloom:[.35,.4,.65],background:"#070e1a"}],halcyon:[dx,{cell:5,shape:"pixel",gap:.06,levels:4,saturation:1.25,exposure:.9,twinkle:.45,bloom:[.35,.4,.62],background:"#141414"}],bloomfield:[fx,{cell:7,shape:"pixel",gap:.13,levels:7,mono:{ink:"#f2f2ee",paper:"#0b0b0b"},contrast:1.2,exposure:1.05,twinkle:.25,bloom:[.32,.4,.55],background:"#050505"}],aurelle:[mx,{cell:4,shape:"streak",gap:.1,levels:5,smear:.045,rays:.5,saturation:1.15,exposure:.85,twinkle:.35,bloom:[.7,.6,.45],background:"#0a0809"}]};function gx(r,e){let t=document.querySelector(".lv-art");if(!t)return;let n;try{let[p,_]=U2[r];n=new ef(t,p(),_)}catch{t.classList.add("is-fallback");return}let i={x:0,y:0,on:0},s=p=>{let _=t.getBoundingClientRect();i.x=(p.clientX-_.left)/_.width*2-1,i.y=(p.clientY-_.top)/_.height*2-1,i.on=p.clientY>=_.top&&p.clientY<=_.bottom&&p.pointerType!=="touch"?1:0};window.addEventListener("pointermove",s,{passive:!0});let o=performance.now(),a=0,l=!0,c=()=>n.render(7,i),h=p=>{a=0,!(!l||document.hidden)&&(n.render((p-o)/1e3,i),a=requestAnimationFrame(h))},u=()=>{!a&&l&&!document.hidden&&!e&&(a=requestAnimationFrame(h))},f=new IntersectionObserver(([p])=>{l=p.isIntersecting,l&&u()});f.observe(t);let d=()=>{n.resize(),e&&c()},m=()=>document.hidden?(cancelAnimationFrame(a),a=0):u();return window.addEventListener("resize",d),document.addEventListener("visibilitychange",m),e?c():(u(),ee.from(".lv-nav",{autoAlpha:0,y:-14,duration:.9,ease:"power2.out",delay:.2}),ee.from(".lv-rise",{autoAlpha:0,y:34,duration:1.3,stagger:.12,ease:"power3.out",delay:.45}),ee.utils.toArray(".lv-reveal").forEach(p=>ee.from(p,{autoAlpha:0,y:50,duration:1.1,ease:"power3.out",scrollTrigger:{trigger:p,start:"top 86%"}})),ee.from(".lv-marks .wm",{autoAlpha:0,y:16,stagger:.08,duration:.8,scrollTrigger:{trigger:".lv-band",start:"top 85%"}})),()=>{cancelAnimationFrame(a),f.disconnect(),window.removeEventListener("pointermove",s),window.removeEventListener("resize",d),document.removeEventListener("visibilitychange",m),n.dispose()}}var O2=["halcyon","bloomfield","aurelle","nereid","zephyr","vernant","volute"],l0=r=>O2.includes(r);function _x(r,e){for(var t=0;t<e.length;t++){var n=e[t];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function k2(r,e,t){return e&&_x(r.prototype,e),t&&_x(r,t),r}var ti,sf,B2,er,ao,lo,hl,xx,jo,Kc,yx,Ms,Nr,bx,Mx=function(){return ti||typeof window<"u"&&(ti=window.gsap)&&ti.registerPlugin&&ti},Ex=1,ul=[],wt=[],Ur=[],jc=Date.now,c0=function(e,t){return t},H2=function(){var e=Kc.core,t=e.bridge||{},n=e._scrollers,i=e._proxies;n.push.apply(n,wt),i.push.apply(i,Ur),wt=n,Ur=i,c0=function(o,a){return t[o](a)}},Ts=function(e,t){return~Ur.indexOf(e)&&Ur[Ur.indexOf(e)+1][t]},Qc=function(e){return!!~yx.indexOf(e)},Ti=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:i!==!1,capture:!!s})},Ei=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},nf="scrollLeft",rf="scrollTop",u0=function(){return Ms&&Ms.isPressed||wt.cache++},of=function(e,t){var n=function i(s){if(s||s===0){Ex&&(er.history.scrollRestoration="manual");var o=Ms&&Ms.isPressed;s=i.v=Math.round(s)||(Ms&&Ms.iOS?1:0),e(s),i.cacheID=wt.cache,o&&c0("ss",s)}else(t||wt.cache!==i.cacheID||c0("ref"))&&(i.cacheID=wt.cache,i.v=e());return i.v+i.offset};return n.offset=0,e&&n},fi={s:nf,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:of(function(r){return arguments.length?er.scrollTo(r,Fn.sc()):er.pageXOffset||ao[nf]||lo[nf]||hl[nf]||0})},Fn={s:rf,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:fi,sc:of(function(r){return arguments.length?er.scrollTo(fi.sc(),r):er.pageYOffset||ao[rf]||lo[rf]||hl[rf]||0})},Si=function(e,t){return(t&&t._ctx&&t._ctx.selector||ti.utils.toArray)(e)[0]||(typeof e=="string"&&ti.config().nullTargetWarn!==!1?console.warn("Element not found:",e):null)},z2=function(e,t){for(var n=t.length;n--;)if(t[n]===e||t[n].contains(e))return!0;return!1},Es=function(e,t){var n=t.s,i=t.sc;Qc(e)&&(e=ao.scrollingElement||lo);var s=wt.indexOf(e),o=i===Fn.sc?1:2;!~s&&(s=wt.push(e)-1),wt[s+o]||Ti(e,"scroll",u0);var a=wt[s+o],l=a||(wt[s+o]=of(Ts(e,n),!0)||(Qc(e)?i:of(function(c){return arguments.length?e[n]=c:e[n]})));return l.target=e,a||(l.smooth=ti.getProperty(e,"scrollBehavior")==="smooth"),l},af=function(e,t,n){var i=e,s=e,o=jc(),a=o,l=t||50,c=Math.max(500,l*3),h=function(m,p){var _=jc();p||_-o>l?(s=i,i=m,a=o,o=_):n?i+=m:i=s+(m-s)/(_-a)*(o-a)},u=function(){s=i=n?0:i,a=o=0},f=function(m){var p=a,_=s,g=jc();return(m||m===0)&&m!==i&&h(m),o===a||g-a>c?0:(i+(n?_:-_))/((n?g:o)-p)*1e3};return{update:h,reset:u,getVelocity:f}},Jc=function(e,t){return t&&!e._gsapAllow&&e.preventDefault(),e.changedTouches?e.changedTouches[0]:e},vx=function(e){var t=Math.max.apply(Math,e),n=Math.min.apply(Math,e);return Math.abs(t)>=Math.abs(n)?t:n},Tx=function(){Kc=ti.core.globals().ScrollTrigger,Kc&&Kc.core&&H2()},Sx=function(e){return ti=e||Mx(),!sf&&ti&&typeof document<"u"&&document.body&&(er=window,ao=document,lo=ao.documentElement,hl=ao.body,yx=[er,ao,lo,hl],B2=ti.utils.clamp,bx=ti.core.context||function(){},jo="onpointerenter"in hl?"pointer":"mouse",xx=Cn.isTouch=er.matchMedia&&er.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in er||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Nr=Cn.eventTypes=("ontouchstart"in lo?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in lo?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Ex=0},500),Tx(),sf=1),sf};fi.op=Fn;wt.cache=0;var Cn=(function(){function r(t){this.init(t)}var e=r.prototype;return e.init=function(n){sf||Sx(ti)||console.warn("Please gsap.registerPlugin(Observer)"),Kc||Tx();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,h=n.preventDefault,u=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,p=n.event,_=n.onDragStart,g=n.onDragEnd,y=n.onDrag,x=n.onPress,v=n.onRelease,M=n.onRight,T=n.onLeft,S=n.onUp,A=n.onDown,b=n.onChangeX,E=n.onChangeY,L=n.onChange,R=n.onToggleX,D=n.onToggleY,k=n.onHover,G=n.onHoverEnd,z=n.onMove,B=n.ignoreCheck,K=n.isNormalizer,se=n.onGestureStart,N=n.onGestureEnd,ae=n.onWheel,Be=n.onEnable,He=n.onDisable,Ye=n.onClick,it=n.scrollSpeed,ie=n.capture,re=n.allowClicks,ye=n.lockAxis,Oe=n.onLockAxis;this.target=a=Si(a)||lo,this.vars=n,d&&(d=ti.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,it=it||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(er.getComputedStyle(hl).lineHeight)||22);var Ce,je,ft,we,qe,Ze,De,j=this,H=0,_t=0,ct=n.passive||!h&&n.passive!==!1,Je=Es(a,fi),Fe=Es(a,Fn),F=Je(),w=Fe(),I=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Nr[0]==="pointerdown",U=Qc(a),W=a.ownerDocument||ao,X=[0,0,0],ge=[0,0,0],oe=0,Pe=function(){return oe=jc()},Ae=function(Te,st){return(j.event=Te)&&d&&z2(Te.target,d)||st&&I&&Te.pointerType!=="touch"||B&&B(Te,st)},ue=function(){j._vx.reset(),j._vy.reset(),je.pause(),u&&u(j)},de=function(){var Te=j.deltaX=vx(X),st=j.deltaY=vx(ge),Se=Math.abs(Te)>=i,tt=Math.abs(st)>=i;L&&(Se||tt)&&L(j,Te,st,X,ge),Se&&(M&&j.deltaX>0&&M(j),T&&j.deltaX<0&&T(j),b&&b(j),R&&j.deltaX<0!=H<0&&R(j),H=j.deltaX,X[0]=X[1]=X[2]=0),tt&&(A&&j.deltaY>0&&A(j),S&&j.deltaY<0&&S(j),E&&E(j),D&&j.deltaY<0!=_t<0&&D(j),_t=j.deltaY,ge[0]=ge[1]=ge[2]=0),(we||ft)&&(z&&z(j),ft&&(_&&ft===1&&_(j),y&&y(j),ft=0),we=!1),Ze&&!(Ze=!1)&&Oe&&Oe(j),qe&&(ae(j),qe=!1),Ce=0},Le=function(Te,st,Se){X[Se]+=Te,ge[Se]+=st,j._vx.update(Te),j._vy.update(st),c?Ce||(Ce=requestAnimationFrame(de)):de()},Ne=function(Te,st){ye&&!De&&(j.axis=De=Math.abs(Te)>Math.abs(st)?"x":"y",Ze=!0),De!=="y"&&(X[2]+=Te,j._vx.update(Te,!0)),De!=="x"&&(ge[2]+=st,j._vy.update(st,!0)),c?Ce||(Ce=requestAnimationFrame(de)):de()},_e=function(Te){if(!Ae(Te,1)){Te=Jc(Te,h);var st=Te.clientX,Se=Te.clientY,tt=st-j.x,We=Se-j.y,rt=j.isDragging;j.x=st,j.y=Se,(rt||(tt||We)&&(Math.abs(j.startX-st)>=s||Math.abs(j.startY-Se)>=s))&&(ft||(ft=rt?2:1),rt||(j.isDragging=!0),Ne(tt,We))}},Ee=j.onPress=function(he){Ae(he,1)||he&&he.button||(j.axis=De=null,je.pause(),j.isPressed=!0,he=Jc(he),H=_t=0,j.startX=j.x=he.clientX,j.startY=j.y=he.clientY,j._vx.reset(),j._vy.reset(),Ti(K?a:W,Nr[1],_e,ct,!0),j.deltaX=j.deltaY=0,x&&x(j))},O=j.onRelease=function(he){if(!Ae(he,1)){Ei(K?a:W,Nr[1],_e,!0);var Te=!isNaN(j.y-j.startY),st=j.isDragging,Se=st&&(Math.abs(j.x-j.startX)>3||Math.abs(j.y-j.startY)>3),tt=Jc(he);!Se&&Te&&(j._vx.reset(),j._vy.reset(),h&&re&&ti.delayedCall(.08,function(){if(jc()-oe>300&&!he.defaultPrevented){if(he.target.click)he.target.click();else if(W.createEvent){var We=W.createEvent("MouseEvents");We.initMouseEvent("click",!0,!0,er,1,tt.screenX,tt.screenY,tt.clientX,tt.clientY,!1,!1,!1,!1,0,null),he.target.dispatchEvent(We)}}})),j.isDragging=j.isGesturing=j.isPressed=!1,u&&st&&!K&&je.restart(!0),ft&&de(),g&&st&&g(j),v&&v(j,Se)}},xe=function(Te){return Te.touches&&Te.touches.length>1&&(j.isGesturing=!0)&&se(Te,j.isDragging)},pe=function(){return(j.isGesturing=!1)||N(j)},Ie=function(Te){if(!Ae(Te)){var st=Je(),Se=Fe();Le((st-F)*it,(Se-w)*it,1),F=st,w=Se,u&&je.restart(!0)}},fe=function(Te){if(!Ae(Te)){Te=Jc(Te,h),ae&&(qe=!0);var st=(Te.deltaMode===1?l:Te.deltaMode===2?er.innerHeight:1)*m;Le(Te.deltaX*st,Te.deltaY*st,0),u&&!K&&je.restart(!0)}},ce=function(Te){if(!Ae(Te)){var st=Te.clientX,Se=Te.clientY,tt=st-j.x,We=Se-j.y;j.x=st,j.y=Se,we=!0,u&&je.restart(!0),(tt||We)&&Ne(tt,We)}},$=function(Te){j.event=Te,k(j)},J=function(Te){j.event=Te,G(j)},V=function(Te){return Ae(Te)||Jc(Te,h)&&Ye(j)};je=j._dc=ti.delayedCall(f||.25,ue).pause(),j.deltaX=j.deltaY=0,j._vx=af(0,50,!0),j._vy=af(0,50,!0),j.scrollX=Je,j.scrollY=Fe,j.isDragging=j.isGesturing=j.isPressed=!1,bx(this),j.enable=function(he){return j.isEnabled||(Ti(U?W:a,"scroll",u0),o.indexOf("scroll")>=0&&Ti(U?W:a,"scroll",Ie,ct,ie),o.indexOf("wheel")>=0&&Ti(a,"wheel",fe,ct,ie),(o.indexOf("touch")>=0&&xx||o.indexOf("pointer")>=0)&&(Ti(a,Nr[0],Ee,ct,ie),Ti(W,Nr[2],O),Ti(W,Nr[3],O),re&&Ti(a,"click",Pe,!0,!0),Ye&&Ti(a,"click",V),se&&Ti(W,"gesturestart",xe),N&&Ti(W,"gestureend",pe),k&&Ti(a,jo+"enter",$),G&&Ti(a,jo+"leave",J),z&&Ti(a,jo+"move",ce)),j.isEnabled=!0,j.isDragging=j.isGesturing=j.isPressed=we=ft=!1,j._vx.reset(),j._vy.reset(),F=Je(),w=Fe(),he&&he.type&&Ee(he),Be&&Be(j)),j},j.disable=function(){j.isEnabled&&(ul.filter(function(he){return he!==j&&Qc(he.target)}).length||Ei(U?W:a,"scroll",u0),j.isPressed&&(j._vx.reset(),j._vy.reset(),Ei(K?a:W,Nr[1],_e,!0)),Ei(U?W:a,"scroll",Ie,ie),Ei(a,"wheel",fe,ie),Ei(a,Nr[0],Ee,ie),Ei(W,Nr[2],O),Ei(W,Nr[3],O),Ei(a,"click",Pe,!0),Ei(a,"click",V),Ei(W,"gesturestart",xe),Ei(W,"gestureend",pe),Ei(a,jo+"enter",$),Ei(a,jo+"leave",J),Ei(a,jo+"move",ce),j.isEnabled=j.isPressed=j.isDragging=!1,He&&He(j))},j.kill=j.revert=function(){j.disable();var he=ul.indexOf(j);he>=0&&ul.splice(he,1),Ms===j&&(Ms=0)},ul.push(j),K&&Qc(a)&&(Ms=j),j.enable(p)},k2(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Cn.version="3.14.2";Cn.create=function(r){return new Cn(r)};Cn.register=Sx;Cn.getAll=function(){return ul.slice()};Cn.getById=function(r){return ul.filter(function(e){return e.vars.id===r})[0]};Mx()&&ti.registerPlugin(Cn);var Qe,pl,Rt,fn,ir,qt,S0,Ef,fu,ou,tu,lf,pi,wf,v0,Ai,wx,Ax,ml,Gx,h0,Wx,wi,x0,Xx,qx,co,y0,w0,gl,A0,au,b0,d0,cf=1,mi=Date.now,f0=mi(),xr=0,nu=0,Rx=function(e,t,n){var i=nr(e)&&(e.substr(0,6)==="clamp("||e.indexOf("max")>-1);return n["_"+t+"Clamp"]=i,i?e.substr(6,e.length-7):e},Cx=function(e,t){return t&&(!nr(e)||e.substr(0,6)!=="clamp(")?"clamp("+e+")":e},V2=function r(){return nu&&requestAnimationFrame(r)},Px=function(){return wf=1},Ix=function(){return wf=0},es=function(e){return e},iu=function(e){return Math.round(e*1e5)/1e5||0},Yx=function(){return typeof window<"u"},$x=function(){return Qe||Yx()&&(Qe=window.gsap)&&Qe.registerPlugin&&Qe},ra=function(e){return!!~S0.indexOf(e)},Zx=function(e){return(e==="Height"?A0:Rt["inner"+e])||ir["client"+e]||qt["client"+e]},Jx=function(e){return Ts(e,"getBoundingClientRect")||(ra(e)?function(){return Mf.width=Rt.innerWidth,Mf.height=A0,Mf}:function(){return Ss(e)})},G2=function(e,t,n){var i=n.d,s=n.d2,o=n.a;return(o=Ts(e,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(t?Zx(s):e["client"+s])||0}},W2=function(e,t){return!t||~Ur.indexOf(e)?Jx(e):function(){return Mf}},ts=function(e,t){var n=t.s,i=t.d2,s=t.d,o=t.a;return Math.max(0,(n="scroll"+i)&&(o=Ts(e,n))?o()-Jx(e)()[s]:ra(e)?(ir[n]||qt[n])-Zx(i):e[n]-e["offset"+i])},uf=function(e,t){for(var n=0;n<ml.length;n+=3)(!t||~t.indexOf(ml[n+1]))&&e(ml[n],ml[n+1],ml[n+2])},nr=function(e){return typeof e=="string"},gi=function(e){return typeof e=="function"},ru=function(e){return typeof e=="number"},Qo=function(e){return typeof e=="object"},eu=function(e,t,n){return e&&e.progress(t?0:1)&&n&&e.pause()},p0=function(e,t){if(e.enabled){var n=e._ctx?e._ctx.add(function(){return t(e)}):t(e);n&&n.totalTime&&(e.callbackAnimation=n)}},dl=Math.abs,Kx="left",jx="top",R0="right",C0="bottom",ta="width",na="height",lu="Right",cu="Left",uu="Top",hu="Bottom",Nn="padding",_r="margin",vl="Width",P0="Height",Vn="px",vr=function(e){return Rt.getComputedStyle(e)},X2=function(e){var t=vr(e).position;e.style.position=t==="absolute"||t==="fixed"?t:"relative"},Lx=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Ss=function(e,t){var n=t&&vr(e)[v0]!=="matrix(1, 0, 0, 1, 0, 0)"&&Qe.to(e,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=e.getBoundingClientRect();return n&&n.progress(0).kill(),i},Tf=function(e,t){var n=t.d2;return e["offset"+n]||e["client"+n]||0},Qx=function(e){var t=[],n=e.labels,i=e.duration(),s;for(s in n)t.push(n[s]/i);return t},q2=function(e){return function(t){return Qe.utils.snap(Qx(e),t)}},I0=function(e){var t=Qe.utils.snap(e),n=Array.isArray(e)&&e.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return t(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=t(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:t(s<0?i-e:i+e)}},Y2=function(e){return function(t,n){return I0(Qx(e))(t,n.direction)}},hf=function(e,t,n,i){return n.split(",").forEach(function(s){return e(t,s,i)})},$n=function(e,t,n,i,s){return e.addEventListener(t,n,{passive:!i,capture:!!s})},Yn=function(e,t,n,i){return e.removeEventListener(t,n,!!i)},df=function(e,t,n){n=n&&n.wheelHandler,n&&(e(t,"wheel",n),e(t,"touchmove",n))},Dx={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},ff={toggleActions:"play",anticipatePin:0},Sf={top:0,left:0,center:.5,bottom:1,right:1},vf=function(e,t){if(nr(e)){var n=e.indexOf("="),i=~n?+(e.charAt(n-1)+1)*parseFloat(e.substr(n+1)):0;~n&&(e.indexOf("%")>n&&(i*=t/100),e=e.substr(0,n-1)),e=i+(e in Sf?Sf[e]*t:~e.indexOf("%")?parseFloat(e)*t/100:parseFloat(e)||0)}return e},pf=function(e,t,n,i,s,o,a,l){var c=s.startColor,h=s.endColor,u=s.fontSize,f=s.indent,d=s.fontWeight,m=fn.createElement("div"),p=ra(n)||Ts(n,"pinType")==="fixed",_=e.indexOf("scroller")!==-1,g=p?qt:n,y=e.indexOf("start")!==-1,x=y?c:h,v="border-color:"+x+";font-size:"+u+";color:"+x+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return v+="position:"+((_||l)&&p?"fixed;":"absolute;"),(_||l||!p)&&(v+=(i===Fn?R0:C0)+":"+(o+parseFloat(f))+"px;"),a&&(v+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+e+(t?" marker-"+t:"")),m.style.cssText=v,m.innerText=t||t===0?e+"-"+t:e,g.children[0]?g.insertBefore(m,g.children[0]):g.appendChild(m),m._offset=m["offset"+i.op.d2],xf(m,0,i,y),m},xf=function(e,t,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];e._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+vl]=1,s["border"+a+vl]=0,s[n.p]=t+"px",Qe.set(e,s)},At=[],M0={},pu,Fx=function(){return mi()-xr>34&&(pu||(pu=requestAnimationFrame(ws)))},fl=function(){(!wi||!wi.isPressed||wi.startX>qt.clientWidth)&&(wt.cache++,wi?pu||(pu=requestAnimationFrame(ws)):ws(),xr||oa("scrollStart"),xr=mi())},m0=function(){qx=Rt.innerWidth,Xx=Rt.innerHeight},su=function(e){wt.cache++,(e===!0||!pi&&!Wx&&!fn.fullscreenElement&&!fn.webkitFullscreenElement&&(!x0||qx!==Rt.innerWidth||Math.abs(Rt.innerHeight-Xx)>Rt.innerHeight*.25))&&Ef.restart(!0)},sa={},$2=[],ey=function r(){return Yn(yt,"scrollEnd",r)||ea(!0)},oa=function(e){return sa[e]&&sa[e].map(function(t){return t()})||$2},tr=[],ty=function(e){for(var t=0;t<tr.length;t+=5)(!e||tr[t+4]&&tr[t+4].query===e)&&(tr[t].style.cssText=tr[t+1],tr[t].getBBox&&tr[t].setAttribute("transform",tr[t+2]||""),tr[t+3].uncache=1)},ny=function(){return wt.forEach(function(e){return gi(e)&&++e.cacheID&&(e.rec=e())})},L0=function(e,t){var n;for(Ai=0;Ai<At.length;Ai++)n=At[Ai],n&&(!t||n._ctx===t)&&(e?n.kill(1):n.revert(!0,!0));au=!0,t&&ty(t),t||oa("revert")},iy=function(e,t){wt.cache++,(t||!Ri)&&wt.forEach(function(n){return gi(n)&&n.cacheID++&&(n.rec=0)}),nr(e)&&(Rt.history.scrollRestoration=w0=e)},Ri,ia=0,Nx,Z2=function(){if(Nx!==ia){var e=Nx=ia;requestAnimationFrame(function(){return e===ia&&ea(!0)})}},ry=function(){qt.appendChild(gl),A0=!wi&&gl.offsetHeight||Rt.innerHeight,qt.removeChild(gl)},Ux=function(e){return fu(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(t){return t.style.display=e?"none":"block"})},ea=function(e,t){if(ir=fn.documentElement,qt=fn.body,S0=[Rt,fn,ir,qt],xr&&!e&&!au){$n(yt,"scrollEnd",ey);return}ry(),Ri=yt.isRefreshing=!0,au||ny();var n=oa("refreshInit");Gx&&yt.sort(),t||L0(),wt.forEach(function(i){gi(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),At.slice(0).forEach(function(i){return i.refresh()}),au=!1,At.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),b0=1,Ux(!0),At.forEach(function(i){var s=ts(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Ux(!1),b0=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),wt.forEach(function(i){gi(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),iy(w0,1),Ef.pause(),ia++,Ri=2,ws(2),At.forEach(function(i){return gi(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Ri=yt.isRefreshing=!1,oa("refresh")},E0=0,yf=1,du,ws=function(e){if(e===2||!Ri&&!au){yt.isUpdating=!0,du&&du.update(0);var t=At.length,n=mi(),i=n-f0>=50,s=t&&At[0].scroll();if(yf=E0>s?-1:1,Ri||(E0=s),i&&(xr&&!wf&&n-xr>200&&(xr=0,oa("scrollEnd")),tu=f0,f0=n),yf<0){for(Ai=t;Ai-- >0;)At[Ai]&&At[Ai].update(0,i);yf=1}else for(Ai=0;Ai<t;Ai++)At[Ai]&&At[Ai].update(0,i);yt.isUpdating=!1}pu=0},T0=[Kx,jx,C0,R0,_r+hu,_r+lu,_r+uu,_r+cu,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],bf=T0.concat([ta,na,"boxSizing","max"+vl,"max"+P0,"position",_r,Nn,Nn+uu,Nn+lu,Nn+hu,Nn+cu]),J2=function(e,t,n){_l(n);var i=e._gsap;if(i.spacerIsNative)_l(i.spacerState);else if(e._gsap.swappedIn){var s=t.parentNode;s&&(s.insertBefore(e,t),s.removeChild(t))}e._gsap.swappedIn=!1},g0=function(e,t,n,i){if(!e._gsap.swappedIn){for(var s=T0.length,o=t.style,a=e.style,l;s--;)l=T0[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[C0]=a[R0]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[ta]=Tf(e,fi)+Vn,o[na]=Tf(e,Fn)+Vn,o[Nn]=a[_r]=a[jx]=a[Kx]="0",_l(i),a[ta]=a["max"+vl]=n[ta],a[na]=a["max"+P0]=n[na],a[Nn]=n[Nn],e.parentNode!==t&&(e.parentNode.insertBefore(t,e),t.appendChild(e)),e._gsap.swappedIn=!0}},K2=/([A-Z])/g,_l=function(e){if(e){var t=e.t.style,n=e.length,i=0,s,o;for((e.t._gsap||Qe.core.getCache(e.t)).uncache=1;i<n;i+=2)o=e[i+1],s=e[i],o?t[s]=o:t[s]&&t.removeProperty(s.replace(K2,"-$1").toLowerCase())}},mf=function(e){for(var t=bf.length,n=e.style,i=[],s=0;s<t;s++)i.push(bf[s],n[bf[s]]);return i.t=e,i},j2=function(e,t,n){for(var i=[],s=e.length,o=n?8:0,a;o<s;o+=2)a=e[o],i.push(a,a in t?t[a]:e[o+1]);return i.t=e.t,i},Mf={left:0,top:0},Ox=function(e,t,n,i,s,o,a,l,c,h,u,f,d,m){gi(e)&&(e=e(l)),nr(e)&&e.substr(0,3)==="max"&&(e=f+(e.charAt(4)==="="?vf("0"+e.substr(3),n):0));var p=d?d.time():0,_,g,y;if(d&&d.seek(0),isNaN(e)||(e=+e),ru(e))d&&(e=Qe.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,e)),a&&xf(a,n,i,!0);else{gi(t)&&(t=t(l));var x=(e||"0").split(" "),v,M,T,S;y=Si(t,l)||qt,v=Ss(y)||{},(!v||!v.left&&!v.top)&&vr(y).display==="none"&&(S=y.style.display,y.style.display="block",v=Ss(y),S?y.style.display=S:y.style.removeProperty("display")),M=vf(x[0],v[i.d]),T=vf(x[1]||"0",n),e=v[i.p]-c[i.p]-h+M+s-T,a&&xf(a,T,i,n-T<20||a._isStart&&T>20),n-=n-T}if(m&&(l[m]=e||-.001,e<0&&(e=0)),o){var A=e+n,b=o._isStart;_="scroll"+i.d2,xf(o,A,i,b&&A>20||!b&&(u?Math.max(qt[_],ir[_]):o.parentNode[_])<=A+1),u&&(c=Ss(a),u&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+Vn))}return d&&y&&(_=Ss(y),d.seek(f),g=Ss(y),d._caScrollDist=_[i.p]-g[i.p],e=e/d._caScrollDist*f),d&&d.seek(p),d?e:Math.round(e)},Q2=/(webkit|moz|length|cssText|inset)/i,kx=function(e,t,n,i){if(e.parentNode!==t){var s=e.style,o,a;if(t===qt){e._stOrig=s.cssText,a=vr(e);for(o in a)!+o&&!Q2.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=e._stOrig;Qe.core.getCache(e).uncache=1,t.appendChild(e)}},sy=function(e,t,n){var i=t,s=i;return function(o){var a=Math.round(e());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},gf=function(e,t,n){var i={};i[t.p]="+="+n,Qe.set(e,i)},Bx=function(e,t){var n=Es(e,t),i="_scroll"+t.p2,s=function o(a,l,c,h,u){var f=o.tween,d=l.onComplete,m={};c=c||n();var p=sy(n,c,function(){f.kill(),o.tween=0});return u=h&&u||0,h=h||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return p(c+h*f.ratio+u*f.ratio*f.ratio)},l.onUpdate=function(){wt.cache++,o.tween&&ws()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Qe.to(e,l),f};return e[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},$n(e,"wheel",n.wheelHandler),yt.isTouch&&$n(e,"touchmove",n.wheelHandler),s},yt=(function(){function r(t,n){pl||r.register(Qe)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),y0(this),this.init(t,n)}var e=r.prototype;return e.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!nu){this.update=this.refresh=this.kill=es;return}n=Lx(nr(n)||ru(n)||n.nodeType?{trigger:n}:n,ff);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,h=s.onRefresh,u=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,p=s.invalidateOnRefresh,_=s.anticipatePin,g=s.onScrubComplete,y=s.onSnapComplete,x=s.once,v=s.snap,M=s.pinReparent,T=s.pinSpacer,S=s.containerAnimation,A=s.fastScrollEnd,b=s.preventOverlaps,E=n.horizontal||n.containerAnimation&&n.horizontal!==!1?fi:Fn,L=!u&&u!==0,R=Si(n.scroller||Rt),D=Qe.core.getCache(R),k=ra(R),G=("pinType"in n?n.pinType:Ts(R,"pinType")||k&&"fixed")==="fixed",z=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],B=L&&n.toggleActions.split(" "),K="markers"in n?n.markers:ff.markers,se=k?0:parseFloat(vr(R)["border"+E.p2+vl])||0,N=this,ae=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Be=G2(R,k,E),He=W2(R,k),Ye=0,it=0,ie=0,re=Es(R,E),ye,Oe,Ce,je,ft,we,qe,Ze,De,j,H,_t,ct,Je,Fe,F,w,I,U,W,X,ge,oe,Pe,Ae,ue,de,Le,Ne,_e,Ee,O,xe,pe,Ie,fe,ce,$,J;if(N._startClamp=N._endClamp=!1,N._dir=E,_*=45,N.scroller=R,N.scroll=S?S.time.bind(S):re,je=re(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(Gx=1,n.refreshPriority===-9999&&(du=N)),D.tweenScroll=D.tweenScroll||{top:Bx(R,Fn),left:Bx(R,fi)},N.tweenTo=ye=D.tweenScroll[E.p],N.scrubDuration=function(Se){xe=ru(Se)&&Se,xe?O?O.duration(Se):O=Qe.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:xe,paused:!0,onComplete:function(){return g&&g(N)}}):(O&&O.progress(1).kill(),O=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(u),_e=0,l||(l=i.vars.id)),v&&((!Qo(v)||v.push)&&(v={snapTo:v}),"scrollBehavior"in qt.style&&Qe.set(k?[qt,ir]:R,{scrollBehavior:"auto"}),wt.forEach(function(Se){return gi(Se)&&Se.target===(k?fn.scrollingElement||ir:R)&&(Se.smooth=!1)}),Ce=gi(v.snapTo)?v.snapTo:v.snapTo==="labels"?q2(i):v.snapTo==="labelsDirectional"?Y2(i):v.directional!==!1?function(Se,tt){return I0(v.snapTo)(Se,mi()-it<500?0:tt.direction)}:Qe.utils.snap(v.snapTo),pe=v.duration||{min:.1,max:2},pe=Qo(pe)?ou(pe.min,pe.max):ou(pe,pe),Ie=Qe.delayedCall(v.delay||xe/2||.1,function(){var Se=re(),tt=mi()-it<500,We=ye.tween;if((tt||Math.abs(N.getVelocity())<10)&&!We&&!wf&&Ye!==Se){var rt=(Se-we)/Je,zt=i&&!L?i.totalProgress():rt,pt=tt?0:(zt-Ee)/(mi()-tu)*1e3||0,le=Qe.utils.clamp(-rt,1-rt,dl(pt/2)*pt/.185),Ge=rt+(v.inertia===!1?0:le),Xe,nt,ut=v,pn=ut.onStart,Ct=ut.onInterrupt,Gn=ut.onComplete;if(Xe=Ce(Ge,N),ru(Xe)||(Xe=Ge),nt=Math.max(0,Math.round(we+Xe*Je)),Se<=qe&&Se>=we&&nt!==Se){if(We&&!We._initted&&We.data<=dl(nt-Se))return;v.inertia===!1&&(le=Xe-rt),ye(nt,{duration:pe(dl(Math.max(dl(Ge-zt),dl(Xe-zt))*.185/pt/.05||0)),ease:v.ease||"power3",data:dl(nt-Se),onInterrupt:function(){return Ie.restart(!0)&&Ct&&Ct(N)},onComplete:function(){N.update(),Ye=re(),i&&!L&&(O?O.resetTo("totalProgress",Xe,i._tTime/i._tDur):i.progress(Xe)),_e=Ee=i&&!L?i.totalProgress():N.progress,y&&y(N),Gn&&Gn(N)}},Se,le*Je,nt-Se-le*Je),pn&&pn(N,ye.tween)}}else N.isActive&&Ye!==Se&&Ie.restart(!0)}).pause()),l&&(M0[l]=N),f=N.trigger=Si(f||d!==!0&&d),J=f&&f._gsap&&f._gsap.stRevert,J&&(J=J(N)),d=d===!0?f:Si(d),nr(a)&&(a={targets:f,className:a}),d&&(m===!1||m===_r||(m=!m&&d.parentNode&&d.parentNode.style&&vr(d.parentNode).display==="flex"?!1:Nn),N.pin=d,Oe=Qe.core.getCache(d),Oe.spacer?Fe=Oe.pinState:(T&&(T=Si(T),T&&!T.nodeType&&(T=T.current||T.nativeElement),Oe.spacerIsNative=!!T,T&&(Oe.spacerState=mf(T))),Oe.spacer=I=T||fn.createElement("div"),I.classList.add("pin-spacer"),l&&I.classList.add("pin-spacer-"+l),Oe.pinState=Fe=mf(d)),n.force3D!==!1&&Qe.set(d,{force3D:!0}),N.spacer=I=Oe.spacer,Ne=vr(d),Pe=Ne[m+E.os2],W=Qe.getProperty(d),X=Qe.quickSetter(d,E.a,Vn),g0(d,I,Ne),w=mf(d)),K){_t=Qo(K)?Lx(K,Dx):Dx,j=pf("scroller-start",l,R,E,_t,0),H=pf("scroller-end",l,R,E,_t,0,j),U=j["offset"+E.op.d2];var V=Si(Ts(R,"content")||R);Ze=this.markerStart=pf("start",l,V,E,_t,U,0,S),De=this.markerEnd=pf("end",l,V,E,_t,U,0,S),S&&($=Qe.quickSetter([Ze,De],E.a,Vn)),!G&&!(Ur.length&&Ts(R,"fixedMarkers")===!0)&&(X2(k?qt:R),Qe.set([j,H],{force3D:!0}),ue=Qe.quickSetter(j,E.a,Vn),Le=Qe.quickSetter(H,E.a,Vn))}if(S){var he=S.vars.onUpdate,Te=S.vars.onUpdateParams;S.eventCallback("onUpdate",function(){N.update(0,0,1),he&&he.apply(S,Te||[])})}if(N.previous=function(){return At[At.indexOf(N)-1]},N.next=function(){return At[At.indexOf(N)+1]},N.revert=function(Se,tt){if(!tt)return N.kill(!0);var We=Se!==!1||!N.enabled,rt=pi;We!==N.isReverted&&(We&&(fe=Math.max(re(),N.scroll.rec||0),ie=N.progress,ce=i&&i.progress()),Ze&&[Ze,De,j,H].forEach(function(zt){return zt.style.display=We?"none":"block"}),We&&(pi=N,N.update(We)),d&&(!M||!N.isActive)&&(We?J2(d,I,Fe):g0(d,I,vr(d),Ae)),We||N.update(We),pi=rt,N.isReverted=We)},N.refresh=function(Se,tt,We,rt){if(!((pi||!N.enabled)&&!tt)){if(d&&Se&&xr){$n(r,"scrollEnd",ey);return}!Ri&&ae&&ae(N),pi=N,ye.tween&&!We&&(ye.tween.kill(),ye.tween=0),O&&O.pause(),p&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(q){return q.vars.immediateRender&&q.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var zt=Be(),pt=He(),le=S?S.duration():ts(R,E),Ge=Je<=.01||!Je,Xe=0,nt=rt||0,ut=Qo(We)?We.end:n.end,pn=n.endTrigger||f,Ct=Qo(We)?We.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Gn=N.pinnedContainer=n.pinnedContainer&&Si(n.pinnedContainer,N),_i=f&&Math.max(0,At.indexOf(N))||0,Gt=_i,Sn,Pn,rr,Or,Tt,C,Y,te,ne,Q,Re,ze,Z;for(K&&Qo(We)&&(ze=Qe.getProperty(j,E.p),Z=Qe.getProperty(H,E.p));Gt-- >0;)C=At[Gt],C.end||C.refresh(0,1)||(pi=N),Y=C.pin,Y&&(Y===f||Y===d||Y===Gn)&&!C.isReverted&&(Q||(Q=[]),Q.unshift(C),C.revert(!0,!0)),C!==At[Gt]&&(_i--,Gt--);for(gi(Ct)&&(Ct=Ct(N)),Ct=Rx(Ct,"start",N),we=Ox(Ct,f,zt,E,re(),Ze,j,N,pt,se,G,le,S,N._startClamp&&"_startClamp")||(d?-.001:0),gi(ut)&&(ut=ut(N)),nr(ut)&&!ut.indexOf("+=")&&(~ut.indexOf(" ")?ut=(nr(Ct)?Ct.split(" ")[0]:"")+ut:(Xe=vf(ut.substr(2),zt),ut=nr(Ct)?Ct:(S?Qe.utils.mapRange(0,S.duration(),S.scrollTrigger.start,S.scrollTrigger.end,we):we)+Xe,pn=f)),ut=Rx(ut,"end",N),qe=Math.max(we,Ox(ut||(pn?"100% 0":le),pn,zt,E,re()+Xe,De,H,N,pt,se,G,le,S,N._endClamp&&"_endClamp"))||-.001,Xe=0,Gt=_i;Gt--;)C=At[Gt]||{},Y=C.pin,Y&&C.start-C._pinPush<=we&&!S&&C.end>0&&(Sn=C.end-(N._startClamp?Math.max(0,C.start):C.start),(Y===f&&C.start-C._pinPush<we||Y===Gn)&&isNaN(Ct)&&(Xe+=Sn*(1-C.progress)),Y===d&&(nt+=Sn));if(we+=Xe,qe+=Xe,N._startClamp&&(N._startClamp+=Xe),N._endClamp&&!Ri&&(N._endClamp=qe||-.001,qe=Math.min(qe,ts(R,E))),Je=qe-we||(we-=.01)&&.001,Ge&&(ie=Qe.utils.clamp(0,1,Qe.utils.normalize(we,qe,fe))),N._pinPush=nt,Ze&&Xe&&(Sn={},Sn[E.a]="+="+Xe,Gn&&(Sn[E.p]="-="+re()),Qe.set([Ze,De],Sn)),d&&!(b0&&N.end>=ts(R,E)))Sn=vr(d),Or=E===Fn,rr=re(),ge=parseFloat(W(E.a))+nt,!le&&qe>1&&(Re=(k?fn.scrollingElement||ir:R).style,Re={style:Re,value:Re["overflow"+E.a.toUpperCase()]},k&&vr(qt)["overflow"+E.a.toUpperCase()]!=="scroll"&&(Re.style["overflow"+E.a.toUpperCase()]="scroll")),g0(d,I,Sn),w=mf(d),Pn=Ss(d,!0),te=G&&Es(R,Or?fi:Fn)(),m?(Ae=[m+E.os2,Je+nt+Vn],Ae.t=I,Gt=m===Nn?Tf(d,E)+Je+nt:0,Gt&&(Ae.push(E.d,Gt+Vn),I.style.flexBasis!=="auto"&&(I.style.flexBasis=Gt+Vn)),_l(Ae),Gn&&At.forEach(function(q){q.pin===Gn&&q.vars.pinSpacing!==!1&&(q._subPinOffset=!0)}),G&&re(fe)):(Gt=Tf(d,E),Gt&&I.style.flexBasis!=="auto"&&(I.style.flexBasis=Gt+Vn)),G&&(Tt={top:Pn.top+(Or?rr-we:te)+Vn,left:Pn.left+(Or?te:rr-we)+Vn,boxSizing:"border-box",position:"fixed"},Tt[ta]=Tt["max"+vl]=Math.ceil(Pn.width)+Vn,Tt[na]=Tt["max"+P0]=Math.ceil(Pn.height)+Vn,Tt[_r]=Tt[_r+uu]=Tt[_r+lu]=Tt[_r+hu]=Tt[_r+cu]="0",Tt[Nn]=Sn[Nn],Tt[Nn+uu]=Sn[Nn+uu],Tt[Nn+lu]=Sn[Nn+lu],Tt[Nn+hu]=Sn[Nn+hu],Tt[Nn+cu]=Sn[Nn+cu],F=j2(Fe,Tt,M),Ri&&re(0)),i?(ne=i._initted,h0(1),i.render(i.duration(),!0,!0),oe=W(E.a)-ge+Je+nt,de=Math.abs(Je-oe)>1,G&&de&&F.splice(F.length-2,2),i.render(0,!0,!0),ne||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),h0(0)):oe=Je,Re&&(Re.value?Re.style["overflow"+E.a.toUpperCase()]=Re.value:Re.style.removeProperty("overflow-"+E.a));else if(f&&re()&&!S)for(Pn=f.parentNode;Pn&&Pn!==qt;)Pn._pinOffset&&(we-=Pn._pinOffset,qe-=Pn._pinOffset),Pn=Pn.parentNode;Q&&Q.forEach(function(q){return q.revert(!1,!0)}),N.start=we,N.end=qe,je=ft=Ri?fe:re(),!S&&!Ri&&(je<fe&&re(fe),N.scroll.rec=0),N.revert(!1,!0),it=mi(),Ie&&(Ye=-1,Ie.restart(!0)),pi=0,i&&L&&(i._initted||ce)&&i.progress()!==ce&&i.progress(ce||0,!0).render(i.time(),!0,!0),(Ge||ie!==N.progress||S||p||i&&!i._initted)&&(i&&!L&&(i._initted||ie||i.vars.immediateRender!==!1)&&i.totalProgress(S&&we<-.001&&!ie?Qe.utils.normalize(we,qe,0):ie,!0),N.progress=Ge||(je-we)/Je===ie?0:ie),d&&m&&(I._pinOffset=Math.round(N.progress*oe)),O&&O.invalidate(),isNaN(ze)||(ze-=Qe.getProperty(j,E.p),Z-=Qe.getProperty(H,E.p),gf(j,E,ze),gf(Ze,E,ze-(rt||0)),gf(H,E,Z),gf(De,E,Z-(rt||0))),Ge&&!Ri&&N.update(),h&&!Ri&&!ct&&(ct=!0,h(N),ct=!1)}},N.getVelocity=function(){return(re()-ft)/(mi()-tu)*1e3||0},N.endAnimation=function(){eu(N.callbackAnimation),i&&(O?O.progress(1):i.paused()?L||eu(i,N.direction<0,1):eu(i,i.reversed()))},N.labelToScroll=function(Se){return i&&i.labels&&(we||N.refresh()||we)+i.labels[Se]/i.duration()*Je||0},N.getTrailing=function(Se){var tt=At.indexOf(N),We=N.direction>0?At.slice(0,tt).reverse():At.slice(tt+1);return(nr(Se)?We.filter(function(rt){return rt.vars.preventOverlaps===Se}):We).filter(function(rt){return N.direction>0?rt.end<=we:rt.start>=qe})},N.update=function(Se,tt,We){if(!(S&&!We&&!Se)){var rt=Ri===!0?fe:N.scroll(),zt=Se?0:(rt-we)/Je,pt=zt<0?0:zt>1?1:zt||0,le=N.progress,Ge,Xe,nt,ut,pn,Ct,Gn,_i;if(tt&&(ft=je,je=S?re():rt,v&&(Ee=_e,_e=i&&!L?i.totalProgress():pt)),_&&d&&!pi&&!cf&&xr&&(!pt&&we<rt+(rt-ft)/(mi()-tu)*_?pt=1e-4:pt===1&&qe>rt+(rt-ft)/(mi()-tu)*_&&(pt=.9999)),pt!==le&&N.enabled){if(Ge=N.isActive=!!pt&&pt<1,Xe=!!le&&le<1,Ct=Ge!==Xe,pn=Ct||!!pt!=!!le,N.direction=pt>le?1:-1,N.progress=pt,pn&&!pi&&(nt=pt&&!le?0:pt===1?1:le===1?2:3,L&&(ut=!Ct&&B[nt+1]!=="none"&&B[nt+1]||B[nt],_i=i&&(ut==="complete"||ut==="reset"||ut in i))),b&&(Ct||_i)&&(_i||u||!i)&&(gi(b)?b(N):N.getTrailing(b).forEach(function(rr){return rr.endAnimation()})),L||(O&&!pi&&!cf?(O._dp._time-O._start!==O._time&&O.render(O._dp._time-O._start),O.resetTo?O.resetTo("totalProgress",pt,i._tTime/i._tDur):(O.vars.totalProgress=pt,O.invalidate().restart())):i&&i.totalProgress(pt,!!(pi&&(it||Se)))),d){if(Se&&m&&(I.style[m+E.os2]=Pe),!G)X(iu(ge+oe*pt));else if(pn){if(Gn=!Se&&pt>le&&qe+1>rt&&rt+1>=ts(R,E),M)if(!Se&&(Ge||Gn)){var Gt=Ss(d,!0),Sn=rt-we;kx(d,qt,Gt.top+(E===Fn?Sn:0)+Vn,Gt.left+(E===Fn?0:Sn)+Vn)}else kx(d,I);_l(Ge||Gn?F:w),de&&pt<1&&Ge||X(ge+(pt===1&&!Gn?oe:0))}}v&&!ye.tween&&!pi&&!cf&&Ie.restart(!0),a&&(Ct||x&&pt&&(pt<1||!d0))&&fu(a.targets).forEach(function(rr){return rr.classList[Ge||x?"add":"remove"](a.className)}),o&&!L&&!Se&&o(N),pn&&!pi?(L&&(_i&&(ut==="complete"?i.pause().totalProgress(1):ut==="reset"?i.restart(!0).pause():ut==="restart"?i.restart(!0):i[ut]()),o&&o(N)),(Ct||!d0)&&(c&&Ct&&p0(N,c),z[nt]&&p0(N,z[nt]),x&&(pt===1?N.kill(!1,1):z[nt]=0),Ct||(nt=pt===1?1:3,z[nt]&&p0(N,z[nt]))),A&&!Ge&&Math.abs(N.getVelocity())>(ru(A)?A:2500)&&(eu(N.callbackAnimation),O?O.progress(1):eu(i,ut==="reverse"?1:!pt,1))):L&&o&&!pi&&o(N)}if(Le){var Pn=S?rt/S.duration()*(S._caScrollDist||0):rt;ue(Pn+(j._isFlipped?1:0)),Le(Pn)}$&&$(-rt/S.duration()*(S._caScrollDist||0))}},N.enable=function(Se,tt){N.enabled||(N.enabled=!0,$n(R,"resize",su),k||$n(R,"scroll",fl),ae&&$n(r,"refreshInit",ae),Se!==!1&&(N.progress=ie=0,je=ft=Ye=re()),tt!==!1&&N.refresh())},N.getTween=function(Se){return Se&&ye?ye.tween:O},N.setPositions=function(Se,tt,We,rt){if(S){var zt=S.scrollTrigger,pt=S.duration(),le=zt.end-zt.start;Se=zt.start+le*Se/pt,tt=zt.start+le*tt/pt}N.refresh(!1,!1,{start:Cx(Se,We&&!!N._startClamp),end:Cx(tt,We&&!!N._endClamp)},rt),N.update()},N.adjustPinSpacing=function(Se){if(Ae&&Se){var tt=Ae.indexOf(E.d)+1;Ae[tt]=parseFloat(Ae[tt])+Se+Vn,Ae[1]=parseFloat(Ae[1])+Se+Vn,_l(Ae)}},N.disable=function(Se,tt){if(Se!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,tt||O&&O.pause(),fe=0,Oe&&(Oe.uncache=1),ae&&Yn(r,"refreshInit",ae),Ie&&(Ie.pause(),ye.tween&&ye.tween.kill()&&(ye.tween=0)),!k)){for(var We=At.length;We--;)if(At[We].scroller===R&&At[We]!==N)return;Yn(R,"resize",su),k||Yn(R,"scroll",fl)}},N.kill=function(Se,tt){N.disable(Se,tt),O&&!tt&&O.kill(),l&&delete M0[l];var We=At.indexOf(N);We>=0&&At.splice(We,1),We===Ai&&yf>0&&Ai--,We=0,At.forEach(function(rt){return rt.scroller===N.scroller&&(We=1)}),We||Ri||(N.scroll.rec=0),i&&(i.scrollTrigger=null,Se&&i.revert({kill:!1}),tt||i.kill()),Ze&&[Ze,De,j,H].forEach(function(rt){return rt.parentNode&&rt.parentNode.removeChild(rt)}),du===N&&(du=0),d&&(Oe&&(Oe.uncache=1),We=0,At.forEach(function(rt){return rt.pin===d&&We++}),We||(Oe.spacer=0)),n.onKill&&n.onKill(N)},At.push(N),N.enable(!1,!1),J&&J(N),i&&i.add&&!Je){var st=N.update;N.update=function(){N.update=st,wt.cache++,we||qe||N.refresh()},Qe.delayedCall(.01,N.update),Je=.01,we=qe=0}else N.refresh();d&&Z2()},r.register=function(n){return pl||(Qe=n||$x(),Yx()&&window.document&&r.enable(),pl=nu),pl},r.defaults=function(n){if(n)for(var i in n)ff[i]=n[i];return ff},r.disable=function(n,i){nu=0,At.forEach(function(o){return o[i?"kill":"disable"](n)}),Yn(Rt,"wheel",fl),Yn(fn,"scroll",fl),clearInterval(lf),Yn(fn,"touchcancel",es),Yn(qt,"touchstart",es),hf(Yn,fn,"pointerdown,touchstart,mousedown",Px),hf(Yn,fn,"pointerup,touchend,mouseup",Ix),Ef.kill(),uf(Yn);for(var s=0;s<wt.length;s+=3)df(Yn,wt[s],wt[s+1]),df(Yn,wt[s],wt[s+2])},r.enable=function(){if(Rt=window,fn=document,ir=fn.documentElement,qt=fn.body,Qe&&(fu=Qe.utils.toArray,ou=Qe.utils.clamp,y0=Qe.core.context||es,h0=Qe.core.suppressOverwrites||es,w0=Rt.history.scrollRestoration||"auto",E0=Rt.pageYOffset||0,Qe.core.globals("ScrollTrigger",r),qt)){nu=1,gl=document.createElement("div"),gl.style.height="100vh",gl.style.position="absolute",ry(),V2(),Cn.register(Qe),r.isTouch=Cn.isTouch,co=Cn.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),x0=Cn.isTouch===1,$n(Rt,"wheel",fl),S0=[Rt,fn,ir,qt],Qe.matchMedia?(r.matchMedia=function(c){var h=Qe.matchMedia(),u;for(u in c)h.add(u,c[u]);return h},Qe.addEventListener("matchMediaInit",function(){ny(),L0()}),Qe.addEventListener("matchMediaRevert",function(){return ty()}),Qe.addEventListener("matchMedia",function(){ea(0,1),oa("matchMedia")}),Qe.matchMedia().add("(orientation: portrait)",function(){return m0(),m0})):console.warn("Requires GSAP 3.11.0 or later"),m0(),$n(fn,"scroll",fl);var n=qt.hasAttribute("style"),i=qt.style,s=i.borderTopStyle,o=Qe.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Ss(qt),Fn.m=Math.round(a.top+Fn.sc())||0,fi.m=Math.round(a.left+fi.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(qt.setAttribute("style",""),qt.removeAttribute("style")),lf=setInterval(Fx,250),Qe.delayedCall(.5,function(){return cf=0}),$n(fn,"touchcancel",es),$n(qt,"touchstart",es),hf($n,fn,"pointerdown,touchstart,mousedown",Px),hf($n,fn,"pointerup,touchend,mouseup",Ix),v0=Qe.utils.checkPrefix("transform"),bf.push(v0),pl=mi(),Ef=Qe.delayedCall(.2,ea).pause(),ml=[fn,"visibilitychange",function(){var c=Rt.innerWidth,h=Rt.innerHeight;fn.hidden?(wx=c,Ax=h):(wx!==c||Ax!==h)&&su()},fn,"DOMContentLoaded",ea,Rt,"load",ea,Rt,"resize",su],uf($n),At.forEach(function(c){return c.enable(0,1)}),l=0;l<wt.length;l+=3)df(Yn,wt[l],wt[l+1]),df(Yn,wt[l],wt[l+2])}},r.config=function(n){"limitCallbacks"in n&&(d0=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(lf)||(lf=i)&&setInterval(Fx,i),"ignoreMobileResize"in n&&(x0=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(uf(Yn)||uf($n,n.autoRefreshEvents||"none"),Wx=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Si(n),o=wt.indexOf(s),a=ra(s);~o&&wt.splice(o,a?6:2),i&&(a?Ur.unshift(Rt,i,qt,i,ir,i):Ur.unshift(s,i))},r.clearMatchMedia=function(n){At.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(nr(n)?Si(n):n).getBoundingClientRect(),a=o[s?ta:na]*i||0;return s?o.right-a>0&&o.left+a<Rt.innerWidth:o.bottom-a>0&&o.top+a<Rt.innerHeight},r.positionInViewport=function(n,i,s){nr(n)&&(n=Si(n));var o=n.getBoundingClientRect(),a=o[s?ta:na],l=i==null?a/2:i in Sf?Sf[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/Rt.innerWidth:(o.top+l)/Rt.innerHeight},r.killAll=function(n){if(At.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=sa.killAll||[];sa={},i.forEach(function(s){return s()})}},r})();yt.version="3.14.2";yt.saveStyles=function(r){return r?fu(r).forEach(function(e){if(e&&e.style){var t=tr.indexOf(e);t>=0&&tr.splice(t,5),tr.push(e,e.style.cssText,e.getBBox&&e.getAttribute("transform"),Qe.core.getCache(e),y0())}}):tr};yt.revert=function(r,e){return L0(!r,e)};yt.create=function(r,e){return new yt(r,e)};yt.refresh=function(r){return r?su(!0):(pl||yt.register())&&ea(!0)};yt.update=function(r){return++wt.cache&&ws(r===!0?2:0)};yt.clearScrollMemory=iy;yt.maxScroll=function(r,e){return ts(r,e?fi:Fn)};yt.getScrollFunc=function(r,e){return Es(Si(r),e?fi:Fn)};yt.getById=function(r){return M0[r]};yt.getAll=function(){return At.filter(function(r){return r.vars.id!=="ScrollSmoother"})};yt.isScrolling=function(){return!!xr};yt.snapDirectional=I0;yt.addEventListener=function(r,e){var t=sa[r]||(sa[r]=[]);~t.indexOf(e)||t.push(e)};yt.removeEventListener=function(r,e){var t=sa[r],n=t&&t.indexOf(e);n>=0&&t.splice(n,1)};yt.batch=function(r,e){var t=[],n={},i=e.interval||.016,s=e.batchMax||1e9,o=function(c,h){var u=[],f=[],d=Qe.delayedCall(i,function(){h(u,f),u=[],f=[]}).pause();return function(m){u.length||d.restart(!0),u.push(m.trigger),f.push(m),s<=u.length&&d.progress(1)}},a;for(a in e)n[a]=a.substr(0,2)==="on"&&gi(e[a])&&a!=="onRefreshInit"?o(a,e[a]):e[a];return gi(s)&&(s=s(),$n(yt,"refresh",function(){return s=e.batchMax()})),fu(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,t.push(yt.create(c))}),t};var Hx=function(e,t,n,i){return t>i?e(i):t<0&&e(0),n>i?(i-t)/(n-t):n<0?t/(t-n):1},_0=function r(e,t){t===!0?e.style.removeProperty("touch-action"):e.style.touchAction=t===!0?"auto":t?"pan-"+t+(Cn.isTouch?" pinch-zoom":""):"none",e===ir&&r(qt,t)},_f={auto:1,scroll:1},eA=function(e){var t=e.event,n=e.target,i=e.axis,s=(t.changedTouches?t.changedTouches[0]:t).target,o=s._gsap||Qe.core.getCache(s),a=mi(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==qt&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(_f[(l=vr(s)).overflowY]||_f[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!ra(s)&&(_f[(l=vr(s)).overflowY]||_f[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(t.stopPropagation(),t._gsapAllow=!0)},oy=function(e,t,n,i){return Cn.create({target:e,capture:!0,debounce:!1,lockAxis:!0,type:t,onWheel:i=i&&eA,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&$n(fn,Cn.eventTypes[0],Vx,!1,!0)},onDisable:function(){return Yn(fn,Cn.eventTypes[0],Vx,!0)}})},tA=/(input|label|select|textarea)/i,zx,Vx=function(e){var t=tA.test(e.target.tagName);(t||zx)&&(e._gsapAllow=!0,zx=t)},nA=function(e){Qo(e)||(e={}),e.preventDefault=e.isNormalizer=e.allowClicks=!0,e.type||(e.type="wheel,touch"),e.debounce=!!e.debounce,e.id=e.id||"normalizer";var t=e,n=t.normalizeScrollX,i=t.momentum,s=t.allowNestedScroll,o=t.onRelease,a,l,c=Si(e.target)||ir,h=Qe.core.globals().ScrollSmoother,u=h&&h.get(),f=co&&(e.content&&Si(e.content)||u&&e.content!==!1&&!u.smooth()&&u.content()),d=Es(c,Fn),m=Es(c,fi),p=1,_=(Cn.isTouch&&Rt.visualViewport?Rt.visualViewport.scale*Rt.visualViewport.width:Rt.outerWidth)/Rt.innerWidth,g=0,y=gi(i)?function(){return i(a)}:function(){return i||2.8},x,v,M=oy(c,e.type,!0,s),T=function(){return v=!1},S=es,A=es,b=function(){l=ts(c,Fn),A=ou(co?1:0,l),n&&(S=ou(0,ts(c,fi))),x=ia},E=function(){f._gsap.y=iu(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(v){requestAnimationFrame(T);var K=iu(a.deltaY/2),se=A(d.v-K);if(f&&se!==d.v+d.offset){d.offset=se-d.v;var N=iu((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=wt.cache,ws()}return!0}d.offset&&E(),v=!0},R,D,k,G,z=function(){b(),R.isActive()&&R.vars.scrollY>l&&(d()>l?R.progress(1)&&d(l):R.resetTo("scrollY",l))};return f&&Qe.set(f,{y:"+=0"}),e.ignoreCheck=function(B){return co&&B.type==="touchmove"&&L(B)||p>1.05&&B.type!=="touchstart"||a.isGesturing||B.touches&&B.touches.length>1},e.onPress=function(){v=!1;var B=p;p=iu((Rt.visualViewport&&Rt.visualViewport.scale||1)/_),R.pause(),B!==p&&_0(c,p>1.01?!0:n?!1:"x"),D=m(),k=d(),b(),x=ia},e.onRelease=e.onGestureStart=function(B,K){if(d.offset&&E(),!K)G.restart(!0);else{wt.cache++;var se=y(),N,ae;n&&(N=m(),ae=N+se*.05*-B.velocityX/.227,se*=Hx(m,N,ae,ts(c,fi)),R.vars.scrollX=S(ae)),N=d(),ae=N+se*.05*-B.velocityY/.227,se*=Hx(d,N,ae,ts(c,Fn)),R.vars.scrollY=A(ae),R.invalidate().duration(se).play(.01),(co&&R.vars.scrollY>=l||N>=l-1)&&Qe.to({},{onUpdate:z,duration:se})}o&&o(B)},e.onWheel=function(){R._ts&&R.pause(),mi()-g>1e3&&(x=0,g=mi())},e.onChange=function(B,K,se,N,ae){if(ia!==x&&b(),K&&n&&m(S(N[2]===K?D+(B.startX-B.x):m()+K-N[1])),se){d.offset&&E();var Be=ae[2]===se,He=Be?k+B.startY-B.y:d()+se-ae[1],Ye=A(He);Be&&He!==Ye&&(k+=Ye-He),d(Ye)}(se||K)&&ws()},e.onEnable=function(){_0(c,n?!1:"x"),yt.addEventListener("refresh",z),$n(Rt,"resize",z),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),M.enable()},e.onDisable=function(){_0(c,!0),Yn(Rt,"resize",z),yt.removeEventListener("refresh",z),M.kill()},e.lockAxis=e.lockAxis!==!1,a=new Cn(e),a.iOS=co,co&&!d()&&d(1),co&&Qe.ticker.add(es),G=a._dc,R=Qe.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:sy(d,d(),function(){return R.pause()})},onUpdate:ws,onComplete:G.vars.onComplete}),a};yt.sort=function(r){if(gi(r))return At.sort(r);var e=Rt.pageYOffset||0;return yt.getAll().forEach(function(t){return t._sortY=t.trigger?e+t.trigger.getBoundingClientRect().top:t.start+Rt.innerHeight}),At.sort(r||function(t,n){return(t.vars.refreshPriority||0)*-1e6+(t.vars.containerAnimation?1e6:t._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};yt.observe=function(r){return new Cn(r)};yt.normalizeScroll=function(r){if(typeof r>"u")return wi;if(r===!0&&wi)return wi.enable();if(r===!1){wi&&wi.kill(),wi=r;return}var e=r instanceof Cn?r:nA(r);return wi&&wi.target===e.target&&wi.kill(),ra(e.target)&&(wi=e),e};yt.core={_getVelocityProp:af,_inputObserver:oy,_scrollers:wt,_proxies:Ur,bridge:{ss:function(){xr||oa("scrollStart"),xr=mi()},ref:function(){return pi}}};$x()&&Qe.registerPlugin(yt);var D0=Math.PI*2,Af=class{points=[[],[],[]];cols=164;rows=92;depth=new Float32Array(this.cols*this.rows);light=new Float32Array(this.cols*this.rows);ink=new Uint8Array(this.cols*this.rows);constructor(e=!1){e&&(this.cols=108,this.rows=82,this.depth=new Float32Array(this.cols*this.rows),this.light=new Float32Array(this.cols*this.rows),this.ink=new Uint8Array(this.cols*this.rows));let t=(o,a,l,c,h,u,f,d=0)=>this.points[o].push([a,l,c,h,u,f,d]);for(let o=1;o<85;o++)for(let a=0;a<190;a++){let l=a/190*D0,c=o/85*Math.PI,h=.68+Math.sin(l*12)*Math.sin(c*9)*.025;t(0,Math.sin(c)*Math.cos(l)*h,Math.cos(c)*h,Math.sin(c)*Math.sin(l)*h,Math.sin(c)*Math.cos(l),Math.cos(c),Math.sin(c)*Math.sin(l),0)}for(let o=0;o<3;o++)for(let a=0;a<400;a++)for(let l=0;l<16;l++){let c=a/400*D0,h=l/16*D0,u=1.02+o*.23,f=(u+.055*Math.cos(h))*Math.cos(c),d=(u+.055*Math.cos(h))*Math.sin(c),m=.055*Math.sin(h);if(o===1){let p=d;d=m,m=p}if(o===2){let p=f;f=m,m=p}t(0,f,d,m,Math.cos(c)*Math.cos(h),Math.sin(c)*Math.cos(h),Math.sin(h),o+1)}for(let o=0;o<15;o++){let a=o*1.6;for(let l=0;l<150;l++)for(let c=0;c<9;c++){let h=l/149*Math.PI,u=1.45+c*.012;t(1,Math.cos(h)*u,-.25-Math.sin(h)*u,a,Math.cos(h),-Math.sin(h),.5,o%3)}for(let l=-1;l<=1;l+=2)for(let c=0;c<70;c++)for(let h=0;h<10;h++)t(1,l*(1.45+h*.013),-.25+c*.025,a,l,0,.6,o%3);for(let l=0;l<90;l++)for(let c=0;c<14;c++)t(1,(l/89-.5)*3.3,1.5,a+c*.1,0,-1,.4,3)}let n=document.createElement("canvas");n.width=700,n.height=220;let i=n.getContext("2d");i.fillStyle="white",i.font="900 100px monospace",i.textAlign="center",i.fillText("STAY",350,95),i.fillText("CURIOUS",350,200);let s=i.getImageData(0,0,700,220).data;for(let o=0;o<220;o+=3)for(let a=0;a<700;a+=3)s[(o*700+a)*4+3]>120&&t(2,(a-350)/180,(o-110)/180,0,0,0,1,1);for(let o=0;o<3500;o++){let a=o*2.399963,l=Math.acos(1-2*(o+.5)/3500);t(2,Math.sin(l)*Math.cos(a)*2,Math.cos(l)*2,Math.sin(l)*Math.sin(a)*2,0,0,1,0)}}render(e,t,n,i,s,o){let a=e.canvas.width,l=e.canvas.height,c=this.cols,h=this.rows;this.depth.fill(-1/0),this.light.fill(0),this.ink.fill(0);let u=n,f=o?0:i,d=t===1?Math.sin(u*5)*.09:t===2?.1*Math.sin(f*.12)*(1-u):.55+f*.09+u*1.7,m=t===1||t===2?0:.2+Math.sin(u*3)*.15,p=Math.cos(d),_=Math.sin(d),g=Math.cos(m),y=Math.sin(m);for(let E=0;E<this.points[t].length;E++){let L=this.points[t][E],[R,D,k,G,z,B,K]=L;if(t===0){let we=Math.sin(u*Math.PI)*.7;K===1&&(R+=we*1.2),K===2&&(D-=we),K===3&&(k+=we*2)}if(t===1&&(k-=u*17,k=((k+3)%24+24)%24-3,R+=Math.sin(u*5)*.15),t===2){if(K===0&&E%3!==0)continue;let we=Math.min(1,u/.78),qe=1-we,Ze=E*2.399,De=2+Math.sin(E*7)*.8;R=R*we+Math.cos(Ze+f*.08)*De*qe,D=D*we+Math.sin(Ze+f*.08)*De*qe,k=k*qe+Math.sin(E)*qe,K===0&&(R*=1.3,D*=1.3,k=-3+k*.15)}let se=R*p+k*_,N=-R*_+k*p,ae=D*g-N*y,Be=D*y+N*g,He=t===1?2.8:t===2?4.8:4.3-u*.25,Ye=t===1?Be+He:He-Be;if(Ye<.2)continue;let it=(t===1?52:t===2?125:98)*(s?.72:1),ie=Math.round(c/2+se*it*1.5/Ye),re=Math.round(h/2+ae*it/Ye);if(ie<1||ie>=c-1||re<1||re>=h-1)continue;let ye=re*c+ie,Oe=-Ye;if(Oe<this.depth[ye])continue;this.depth[ye]=Oe;let Ce=G*p+B*_,je=-G*_+B*p,ft=t===1?Math.max(.15,1-Ye/24):Math.max(.12,Ce*-.4+z*-.6+je*.65)*.8+.18;this.light[ye]=t===2?K===1?1:.14:Math.min(1,ft+.2+(K?.2:0)),this.ink[ye]=K+1}e.fillStyle="#080b0b",e.fillRect(0,0,a,l);let x=Math.min(a/(c*8),l/(h*12)),v=8*x,M=12*x,T=(a-c*v)/2,S=(l-h*M)/2;e.font=`${Math.max(5,11*x)}px "Space Mono",monospace`,e.textAlign="center",e.textBaseline="middle";let A="\xB7:;-=+*#%@",b=["#35413c","#839a7d","#b2cc9c","#d5e6b7","#f5fad8"];for(let E=0;E<5;E++){e.fillStyle=b[E];for(let L=0;L<this.light.length;L++){let R=this.light[L];if(!R||Math.min(4,Math.floor(R*5))!==E)continue;let D=t===1&&this.ink[L]===4?"\u2500":A[Math.min(9,Math.floor(R*9))];e.fillText(D,T+L%c*v,S+Math.floor(L/c)*M)}}e.strokeStyle="#a9c69525",e.lineWidth=1;for(let[E,L]of[[a*.04,l*.08],[a*.96,l*.08],[a*.04,l*.92],[a*.96,l*.92]])e.beginPath(),e.moveTo(E-8,L),e.lineTo(E+8,L),e.moveTo(E,L-8),e.lineTo(E,L+8),e.stroke();o||(e.fillStyle="#dbffc805",e.fillRect(0,f*15%l,a,2)),e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};var et={ink:"#232843",shadow:"#303b58",deep:"#405575",rock:"#5a6680",stone:"#aaa0a0",sand:"#d9bd9a",light:"#f8d9ab",roof:"#b15b78",roofLight:"#dc8a91",green:"#4c8172",leaf:"#81ae84",gold:"#f7c576",water:"#75bfc2"};function ni(r){return(Math.sin(r*127.1+311.7)*43758.5453%1+1)%1}var Rf=class{ctx;r(e,t,n,i,s){this.ctx.fillStyle=s,this.ctx.fillRect(Math.round(e),Math.round(t),Math.ceil(n),Math.ceil(i))}poly(e,t){this.ctx.fillStyle=t,this.ctx.beginPath(),e.forEach(([n,i],s)=>s?this.ctx.lineTo(Math.round(n),Math.round(i)):this.ctx.moveTo(Math.round(n),Math.round(i))),this.ctx.closePath(),this.ctx.fill()}tree(e,t,n=1){let i=this.r.bind(this);i(e-1,t,3,17*n,et.shadow);for(let s=0;s<4;s++){let o=(19-s*3)*n;i(e-o/2,t-8-s*5*n,o,8*n,s%2?et.leaf:et.green),i(e-o/2,t-8-s*5*n,o/3,4*n,"#b3c694")}i(e+3,t+5,8,2,et.ink)}house(e,t,n,i,s=et.roof){let o=this.r.bind(this);o(e+2,t+2,n,i,et.ink),o(e,t,n,i,et.sand),o(e+n*.65,t,n*.35,i,et.stone),o(e+2,t+3,n*.6,2,et.light),this.poly([[e-3,t],[e+n/2,t-n*.42],[e+n+3,t]],s),o(e-3,t,n+6,2,et.ink);for(let a=0;a<Math.floor(n/6);a++)o(e+a*6,t-n*.13,3,1,et.roofLight);for(let a=0;a<Math.floor(n/9);a++)o(e+4+a*9,t+7,3,6,et.ink),o(e+4+a*9,t+8,2,3,et.gold);o(e+n/2-2,t+i-8,5,8,et.shadow),o(e+n/2,t+i-8,1,8,et.light)}tower(e,t,n,i){let s=this.r.bind(this);s(e,t,n,i,et.stone),s(e,t,n*.6,i,et.sand);for(let o=0;o<i;o+=6)for(let a=0;a<n;a+=7)s(e+a+(o%12?3:0),t+o,4,1,"#bcae9c");for(let o=8;o<i;o+=14)s(e+n/2-2,t+o,4,8,et.shadow),s(e+n/2-1,t+o+1,2,4,et.gold);this.poly([[e-4,t],[e+n/2,t-15],[e+n+4,t]],et.roof),s(e+n/2,t-26,1,11,et.ink),this.poly([[e+n/2+1,t-26],[e+n/2+12,t-23],[e+n/2+1,t-20]],et.gold)}cloud(e,t,n){let i=this.r.bind(this);i(e,t,34*n,5*n,"#f6d9bd"),i(e+6*n,t-5*n,20*n,6*n,"#f6d9bd"),i(e+12*n,t-9*n,10*n,6*n,"#f6d9bd"),i(e+4*n,t+4*n,26*n,2*n,"#b9a6ba")}island(e,t,n,i,s,o=!0){let a=this.r.bind(this),l=n/2;this.poly([[e-l,t],[e-l*.8,t+12],[e-l*.45,t+n*.42],[e,t+n*.65],[e+l*.48,t+n*.26],[e+l,t+3]],et.ink),this.ctx.save(),this.ctx.clip();for(let c=0;c<60;c++){let h=e-l+ni(c+i)*n,u=t+ni(c*3+i)*n*.45,f=n*(.22+ni(c)*.2)*(1-(u-t)/(n*.6));a(h,u,Math.max(2,f),3+ni(c*4)*6,c%3?et.rock:et.shadow)}this.ctx.restore(),this.poly([[e-l,t],[e-l*.65,t-10],[e+l*.2,t-14],[e+l,t],[e+l*.7,t+8],[e-l*.6,t+10]],et.green);for(let c=0;c<80;c++){let h=e-l+ni(c+i)*n,u=t-5+ni(c*7)*12;a(h,u,1+ni(c*8)*3,1,c%4?et.leaf:et.light)}a(e+l*.57,t+3,7,n*.58,et.deep),a(e+l*.58,t+4,4,n*.57,et.water);for(let c=0;c<8;c++){let h=t+5+(c*7+s*9)%(n*.55);a(e+l*.58,h,3,2,"#dcf7da")}o&&(this.house(e-25,t-31,29,30),this.tower(e+8,t-58,17,60),this.house(e+33,t-21,20,21,"#757dab"),this.tree(e-l*.65,t-8,.8),this.tree(e+l*.78,t-1,.6))}render(e,t,n,i,s){this.ctx=e;let o=this.r.bind(this),a=s?0:i;o(0,0,480,300,t===1?"#212b4c":"#52678d");let l=t===1?["#202744","#2d3553","#414763","#65566c","#93737c"]:["#52678d","#6d7f9e","#93a0b5","#bab3bf","#e4c5bd"];for(let u=0;u<60;u++){let f=u/59*4,d=Math.min(3,Math.floor(f)),m=f-d,p=parseInt(l[d].slice(1),16),_=parseInt(l[d+1].slice(1),16),g=y=>Math.round((p>>y&255)*(1-m)+(_>>y&255)*m);o(0,u*5,480,5,`rgb(${g(16)},${g(8)},${g(0)})`)}for(let u=0;u<170;u++){let f=ni(u)*480,d=ni(u+500)*190;(t===1||u%5===0)&&(o(f,d,1,u%19?1:2,u%3?"#e8d6b3":"#9eb8c6"),u%29===0&&(o(f-2,d,5,1,"#e8d6b3"),o(f,d-2,1,5,"#e8d6b3")))}let c=t===1?365:92,h=47;for(let u=-14;u<=14;u++){let f=Math.floor(Math.sqrt(196-u*u));o(c-f,h+u,f*2+1,1,et.light)}if(t===1)for(let u=-13;u<=13;u++){let f=Math.floor(Math.sqrt(169-u*u));o(c-7-f,h-3+u,f*2+1,1,"#2d3553")}for(let u=0;u<3;u++){let f=[[0,300]];for(let d=0;d<=480;d+=2){let m=n*(u+1)*70,p=Math.abs(Math.sin((d+m)*.014+u*4))*36+Math.sin((d+m)*.033)*8;f.push([d,155+u*27-p])}f.push([480,300]),this.poly(f,["#7b829d","#5d6c8b","#435b7a"][u]);for(let d=0;d<30;d++){let m=ni(d+u*700)*480;o(m,150+u*25,2,1,"#b3bac030")}}if(t===0){for(let d=0;d<7;d++)this.cloud((d*94-n*30+a*.25)%640-50,50+d%3*31,.55+d%2*.3);let u=1+n*.6;e.save(),e.translate(300,176),e.scale(u,u),e.translate(-300,-176),this.island(300,174,185,24,a,!1),o(239,160,125,12,et.stone),o(236,157,131,4,et.sand);for(let d=0;d<9;d++)o(240+d*14,157,5,5,et.sand),o(240+d*14,165,10,1,et.light);this.house(250,133,24,25),this.house(279,117,30,40),this.house(316,138,22,21,"#6f7fa2"),this.tower(308,79,17,79),this.tower(345,117,13,43),o(292,145,16,16,et.ink),o(295,142,10,19,et.shadow),o(298,147,3,14,et.gold),o(312,89,9,9,et.light),o(316,91,1,5,et.shadow),o(316,94,3,1,et.shadow),o(232,124,5,32,et.sand);let f=a*.35+n*2;for(let d=0;d<4;d++){let m=f+d*Math.PI/2;this.poly([[234,126],[234+Math.cos(m)*18,126+Math.sin(m)*18],[234+Math.cos(m+.25)*14,126+Math.sin(m+.25)*14]],et.light)}this.tree(226,160,1),this.tree(365,159,.8),this.tree(275,169,.45);for(let d=0;d<12;d++)o(251+d*8,171+Math.sin(d)*2,2,2,d%3?"#f8d9ab":"#dc8a91");o(261,108,67,1,et.ink);for(let d=0;d<8;d++)this.poly([[262+d*8,108],[267+d*8,108],[264+d*8,114]],d%2?et.gold:et.roofLight);e.restore(),this.island(85-n*110,202,65,58,a),this.island(443+n*80,153,58,71,a);for(let d=0;d<18;d++){let m=ni(d)*480,p=215+ni(d+50)*70;o(m,p,4,1,"#222f48"),o(m+2,p-2,1,4,"#222f48")}}else if(t===1){let u=n*540;o(0,222,480,78,et.deep);for(let m=0;m<95;m++){let p=ni(m)*480,_=230+ni(m+9)*60;o(p,_,3+ni(m+88)*10,1,m%4?"#597f99":"#b4a6a4")}for(let m=-2;m<13;m++){let p=m*58-u%58;o(p,224,8,76,et.ink),o(p,224,8,2,et.stone),this.poly([[p+8,237],[p+29,254],[p+50,237],[p+50,243],[p+29,261],[p+8,243]],et.shadow)}o(0,211,480,12,et.ink),o(0,211,480,3,et.stone);for(let m=0;m<480;m+=6)o(m,209,2,3,et.sand);let f=140+Math.sin(n*Math.PI)*80;for(let m=0;m<3;m++){let p=f+m*38;o(p,193,35,16,et.roof),o(p+2,190,31,4,et.roofLight);for(let _=0;_<4;_++)o(p+4+_*7,196,4,5,et.gold);o(p+4,209,5,3,et.ink),o(p+26,209,5,3,et.ink)}for(let m=0;m<8;m++){let p=f-4-m*7,_=180-Math.sin(m*.6+a)*3-m*.8;o(p,_,7,4,"#b0a3af")}let d=390-n*180;this.tower(d,139,17,71),this.house(d-25,185,24,25);for(let m=0;m<14;m++){let p=((m*47-u*1.6)%680+680)%680-80;this.tree(p,285,1.6)}for(let m=0;m<24;m++)Math.sin(a*1.4+m)>0&&o(ni(m)*480,232+ni(m+99)*60,1,1,et.gold)}else{let u=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];e.strokeStyle="#f8d9ab66",e.setLineDash([2,4]),e.lineWidth=1,e.beginPath(),u.forEach(([x,v],M)=>M?e.lineTo(x,v):e.moveTo(x,v)),e.stroke(),e.setLineDash([]),u.forEach(([x,v],M)=>{let T=Math.max(0,1-n*2-M*.04)*100;this.island(x,v+T,45+M%3*9,M*57,a,!0),o(x-3,v-70+T,7,9,et.light);let S=["010110010010111","110001010100111","110001010001110","101101111001001","111100110001110","011100110101010","111001010010010"];for(let A=0;A<15;A++)S[M][A]==="1"&&o(x-1+A%3,v-68+T+Math.floor(A/3),1,1,et.shadow)});let f=Math.max(0,(n-.45)/.55)*(u.length-1),d=Math.min(5,Math.floor(f)),m=f-d,p=u[d],_=u[d+1],g=p[0]+(_[0]-p[0])*m,y=p[1]+(_[1]-p[1])*m+Math.max(0,1-n*2-d*.04)*100*(1-m)+Math.max(0,1-n*2-(d+1)*.04)*100*m-13;o(g-2,y-4,5,5,et.light),o(g-3,y+1,7,6,et.roofLight),o(g-2,y+7,2,3,et.ink),o(g+1,y+7,2,3,et.ink)}e.canvas.dataset.artFrame=String(Number(e.canvas.dataset.artFrame||0)+1),e.canvas.dataset.artReady="true"}};ee.registerPlugin(yt);function ay(r=!1){let e=document.querySelector(".mt-nullsignal,.mt-bitquest");if(!e)return;let t=matchMedia("(max-width:760px)").matches,n=e.dataset.template==="nullsignal",i=n?new Af(t):null,s=n?null:new Rf,o=[...e.querySelectorAll("canvas[data-glyph]")].map((g,y)=>{g.width=n?t?800:1400:480,g.height=n?t?640:850:300;let x=g.getContext("2d");return x&&(x.imageSmoothingEnabled=!1),{canvas:g,ctx:x,phase:y,progress:r?[.25,.45,1][y]:0,visible:!1}}),a=[];r||o.forEach(g=>{let y=g.canvas.closest(".gl-sequence"),x=ee.timeline({scrollTrigger:{trigger:y,start:"top top",end:()=>`+=${innerHeight*(t?1.65:2.5)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});x.to(g,{progress:1,duration:3,ease:"none"},0),g.phase===0?(x.to(y.querySelector(".gl-hero-copy"),{y:-55,opacity:0,duration:.8},.35),x.to(y.querySelector(".gl-art"),{left:"0%",right:"0%",top:t?"12%":"0%",bottom:t?"5%":"0%",height:t?"75%":"100%",duration:1.4,ease:"power2.inOut"},.6),x.to(y.querySelector(".gl-annotation"),{opacity:0,duration:.5},.3),x.to(y,{"--gl-veil":0,duration:1},.4)):g.phase===1?x.to(y.querySelector(".gl-plate"),{opacity:0,y:-35,duration:.7},1.6):(x.to(y.querySelector(".gl-map-heading"),{opacity:0,y:-40,duration:.7},.2),x.to(y.querySelector(".gl-art"),{top:"0%",duration:1.2},.6)),a.push(x)});let l=performance.now(),c=0,h=0,u=!1,f=(g,y=!1)=>{for(let x of o){if(!x.ctx||!x.visible&&!y)continue;n?i.render(x.ctx,x.phase,x.progress,g,t,r):s.render(x.ctx,x.phase,x.progress,g,r);let v=x.canvas.closest(".gl-sequence")?.querySelector(".gl-progress-label");v&&(v.textContent=`${String(Math.round(x.progress*100)).padStart(3,"0")} / 100`),x.canvas.dataset.scrollProgress=x.progress.toFixed(3)}},d=()=>{!u&&!document.hidden&&!c&&o.some(g=>g.visible)&&!r&&(c=requestAnimationFrame(m))};function m(g){c=0,!(u||document.hidden)&&(g-h>=50&&(f((g-l)*.001),h=g),d())}let p=new IntersectionObserver(g=>{for(let y of g){let x=o.find(v=>v.canvas===y.target);x&&(x.visible=y.isIntersecting)}d()},{threshold:0});o.forEach(g=>p.observe(g.canvas));let _=()=>{document.hidden?(cancelAnimationFrame(c),c=0):d()};return document.addEventListener("visibilitychange",_),f(0,!0),d(),()=>{u=!0,cancelAnimationFrame(c),p.disconnect(),document.removeEventListener("visibilitychange",_),a.forEach(g=>{g.scrollTrigger?.kill(),g.kill()})}}var mu=new P;function yr(r,e,t,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;mu.copy(e),mu[n]=0,mu.normalize();let c=.5*o/(o+a),h=1-mu.angleTo(r)/l;return Math.sign(mu[t])===1?h*c:a/(o+a)+c+c*(1-h)}var uo=class r extends Wt{constructor(e=1,t=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(e/2,t/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new P,c=new P,h=new P(e,t,n).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,p=new P,_=.5/o;for(let g=0,y=0;g<u.length;g+=3,y+=2)switch(l.fromArray(u,g),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),u[g+0]=h.x*Math.sign(l.x)+c.x*s,u[g+1]=h.y*Math.sign(l.y)+c.y*s,u[g+2]=h.z*Math.sign(l.z)+c.z*s,f[g+0]=c.x,f[g+1]=c.y,f[g+2]=c.z,Math.floor(g/m)){case 0:p.set(1,0,0),d[y+0]=yr(p,c,"z","y",s,n),d[y+1]=1-yr(p,c,"y","z",s,t);break;case 1:p.set(-1,0,0),d[y+0]=1-yr(p,c,"z","y",s,n),d[y+1]=1-yr(p,c,"y","z",s,t);break;case 2:p.set(0,1,0),d[y+0]=1-yr(p,c,"x","z",s,e),d[y+1]=yr(p,c,"z","x",s,n);break;case 3:p.set(0,-1,0),d[y+0]=1-yr(p,c,"x","z",s,e),d[y+1]=1-yr(p,c,"z","x",s,n);break;case 4:p.set(0,0,1),d[y+0]=1-yr(p,c,"x","y",s,e),d[y+1]=1-yr(p,c,"y","x",s,t);break;case 5:p.set(0,0,-1),d[y+0]=yr(p,c,"x","y",s,e),d[y+1]=1-yr(p,c,"y","x",s,t);break}}static fromJSON(e){return new r(e.width,e.height,e.depth,e.segments,e.radius)}};var aa=r=>{let e=Math.sin(r*127.1+31.7)*43758.54;return e-Math.floor(e)},Yt=(r,e,t,n=0,i=0,s=0)=>{let o=new Ue(r,e);return o.position.set(n,i,s),t.add(o),o};function ly(r=1.25,e=.55){let t=new vt,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let h=l/o,u=c/a*2-1,f=Math.sin(Math.PI*h)**.5;if(n.push(u*e*f,h*r,.12+Math.sin(Math.PI*h)*.3+u*u*.18-Math.pow(h,5)*.2+Math.sin(h*36+u*4)*.017*f),s.push(c/a,h),l<o&&c<a){let d=l*(a+1)+c,m=d+a+1;i.push(d,m,d+1,m,m+1,d+1)}}return t.setAttribute("position",new lt(n,3)),t.setAttribute("uv",new lt(s,2)),t.setIndex(i),t.computeVertexNormals(),t}function iA(){let r=document.createElement("canvas");r.width=256,r.height=512;let e=r.getContext("2d"),t=e.createLinearGradient(0,0,0,512);t.addColorStop(0,"#783f28"),t.addColorStop(.22,"#bc5845"),t.addColorStop(.65,"#dc8672"),t.addColorStop(1,"#f0ac91"),e.fillStyle=t,e.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)e.strokeStyle=`rgba(91,34,35,${.025+aa(i)*.06})`,e.lineWidth=.6,e.beginPath(),e.moveTo(128,0),e.quadraticCurveTo(i*.85,220,i,512),e.stroke();let n=new Cr(r);return n.colorSpace=Kt,n}var Cf=class{constructor(e,t,n){this.container=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,this.renderer.toneMappingExposure=t==="monolith"?.9:t==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new qr(this.renderer),s=new no;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new Wi(16777215,t==="floraison"||t==="monolith"?.65:1.3));let o=new hn(t==="offscript"?13238194:16771534,t==="floraison"||t==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new hn(t==="aether"?16757901:t==="offscript"?12175359:16764589,t==="floraison"||t==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new hn(16777215,t==="floraison"||t==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),t==="aether"?this.headphones():t==="offscript"?this.sculpture():t==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(e),this.observers.push(c);let h=new IntersectionObserver(u=>{this.visible=u[0].isIntersecting});h.observe(e),this.observers.push(h),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new jt;camera=new Ht(33,1,.1,60);root=new $e;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=e=>{this.tilt.x=(e.clientX/innerWidth-.5)*.12,this.tilt.y=(e.clientY/innerHeight-.5)*.08};contextLost=e=>{e.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let e=document.createElement("div");e.className="scene-fallback",this.container.append(e)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let e=new xt({color:"#cbd1ce",metalness:1,roughness:.22}),t=new xt({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new xt({color:"#373b36",roughness:.9,metalness:.05});this.band=new $e,this.root.add(this.band),Yt(new kn(1.22,.072,20,100,Math.PI),e,this.band,0,.1);let i=Yt(new kn(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let h of[-1,1]){let u=new $e;u.position.set(h*1.15,-.39,0),u.rotation.y=-h*.2,u.rotation.z=h*.1,this.root.add(u),this.cups.push(u),Yt(new uo(.12,.6,.13,4,.05),e,u,0,.65,-.06);let f=Yt(new uo(.68,1.03,.4,5,.2),e,u,0,0,-.12);this.shells.push(f),Yt(new uo(.61,.95,.09,5,.18),t,u,0,0,.1),Yt(new uo(.5,.82,.08,4,.17),n,u,0,0,.19),Yt(new kn(.26,.082,16,64),n,u,0,0,.26).scale.set(.85,1.48,.85),Yt(new kn(.255,.008,8,64),t,u,0,0,.28).scale.set(1.12,1.76,1),Yt(new cn(.023,.023,.1,12),e,u,h*.3,-.18,.01).rotation.z=Math.PI/2;for(let p=0;p<5;p++)Yt(new Xt(.012,8,6),n,u,(p-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Cr(s);this.textures.push(l);let c=new Us(new Ns({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let e=new cr({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),t=new xt({color:"#c9ff54",metalness:.4,roughness:.28}),n=new xt({color:"#ddddcc",metalness:1,roughness:.18}),i=Yt(new lc(.87,.29,160,24,2,3),e,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=Yt(new kn(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=Yt(new So(.38,1),t,this.root,1.45,1.3,.25);this.objects.push(o);let a=Yt(new uo(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let e=document.createElement("canvas");e.width=e.height=128;let t=e.getContext("2d"),n=t.createImageData(128,128);for(let f=0;f<16384;f++){let d=128+aa(f)*35;n.data.set([d,d-4,d-12,255],f*4)}t.putImageData(n,0,0);let i=new Cr(e);i.colorSpace=Kt,this.textures.push(i);let s=new xt({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new xt({color:10048316,roughness:.38,metalness:.55}),a=new xt({color:3689543,roughness:.22,metalness:.65}),l=new xt({color:4606275,roughness:.9}),c=new Wt(2.35,.11,2.35),h=new Wt(.11,.32,.11);for(let f=0;f<7;f++){let d=new $e;if(d.userData.level=f,this.root.add(d),Yt(new Wt(2.35,.13,.68),s,d,0,0,-.835),Yt(new Wt(2.35,.13,.68),s,d,0,0,.835),Yt(new Wt(.68,.13,1),s,d,-.835,0,0),Yt(new Wt(.68,.13,1),s,d,.835,0,0),f<6){for(let m of[-1.04,1.04])for(let p of[-1.04,1.04])Yt(h,s,d,m,.22,p);for(let m=0;m<9;m++)Yt(new Wt(.024,.25,.055),o,d,-.94+m*.235,.2,-1.08);Yt(new Wt(.055,.25,1.58),a,d,1.06,.2,0)}this.objects.push(d)}Yt(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),Yt(new Wt(.85,.055,.85),o,this.root,0,-1.3,0);for(let f=0;f<6;f++)Yt(new Wt(.8,.05,.13),s,this.root,0,-1.35-f*.04,1.25+f*.13);let u=Yt(new cn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);u.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let e=iA();this.textures.push(e);let t=new xt({map:e,side:nn,roughness:.9,metalness:0,envMapIntensity:.2}),n=new $e;n.position.y=.45,this.root.add(n);let i=ly();for(let u=0;u<2;u++)for(let f=0;f<6;f++){let d=new $e;d.rotation.z=f/6*Math.PI*2+u*.52,n.add(d);let m=Yt(i,t,d),p=1-u*.17;m.scale.set(p,p,p),m.position.set(0,.04+u*.035,u*.19),m.userData.ring=u,m.userData.phase=aa(f+u*6),this.petals.push(m)}let s=new xt({color:"#5c4630",roughness:.85}),o=new xt({color:"#dfb45b",roughness:.65});Yt(new Xt(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let u=0;u<115;u++){let f=u*2.399963,d=Math.sqrt(u/115)*.28,m=Yt(new Xt(.015+aa(u)*.007,6,5),u%3?o:s,n,Math.cos(f)*d,Math.sin(f)*d,.58+Math.sqrt(Math.max(0,.078-d*d))*.22);m.scale.z=1.7}let a=new xt({color:"#536742",roughness:.8,side:nn}),l=new un([new P(.23,-2.5,-.15),new P(-.14,-1.3,-.13),new P(0,.4,0)]);Yt(new oi(l,40,.028,9,!1),a,this.root);for(let u of[-1,1]){let f=Yt(ly(.95,.24),a,this.root,0,-1.05+u*.3,-.1);f.rotation.set(.3,u*.6,-u*.9),f.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let u=0;u<38;u++)c[u*3]=(aa(u*3)-.5)*4.7,c[u*3+1]=(aa(u*3+1)-.5)*4.5,c[u*3+2]=(aa(u*3+2)-.5)*2;let h=new vt;h.setAttribute("position",new Ut(c,3)),this.particles=new Jn(h,new si({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:e,height:t}=this.container.getBoundingClientRect();!e||!t||(this.camera.aspect=e/t,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(e,t,!1),this.render(0))}render(e){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||e>0&&e-this.lastFrame<1/30)return;this.lastFrame=e;let t=this.reduced?0:e,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(t*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(t*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(t*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=t*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(t*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(t*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(t*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let e=new Set,t=new Set;this.scene.traverse(n=>{if(n instanceof Ue||n instanceof Jn){e.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>t.add(s))}else n instanceof Us&&t.add(n.material)}),e.forEach(n=>n.dispose()),t.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var F0=r=>{let e=Math.sin(r*127.1+17.7)*43758.5;return e-Math.floor(e)},Pf=class{constructor(e,t,n){this.host=e;this.id=t;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new Wi(11258309,1.5));let i=new hn(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new hn(t==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),t==="pelagic"?this.capsule():this.armillary();try{this.renderer=new li({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Kt,this.renderer.toneMapping=Xi,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new qr(this.renderer),a=new no;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),e.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(e),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(e),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new jt;camera=new Ht(34,1,.1,100);model=new $e;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(e,t,n=this.model,i=0,s=0,o=0){let a=new Ue(e,t);return a.position.set(i,s,o),n.add(a),a}tube(e,t,n,i=this.model){return this.add(new oi(new un(e),40,t,8,!1),n,i)}capsule(){let e=new xt({color:12240827,metalness:.86,roughness:.27}),t=new xt({color:1387827,metalness:.7,roughness:.32}),n=new xt({color:11838307,metalness:.85,roughness:.24}),i=new xt({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new Xt(1.4,64,48),e).scale.set(1,1.13,.87),this.add(new cn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new kn(.64,.075,12,64),t,this.model,0,.12,1.28);let o=this.add(new Xt(.59,48,32),new cr({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new kn(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new Mo(.33,48),new bn({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new kn(.42,.012,6,48,Math.PI*.55),new bn({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let f=0;f<16;f++){let d=f*Math.PI/8;this.add(new cn(.035,.035,.055,6),t,this.model,Math.cos(d)*.71,.12+Math.sin(d)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new kn(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new cn(.46,.56,.27,32),t,this.model,0,1.55,0),this.add(new cn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new cn(.018,.018,.8,8),e,this.model,.2,2.1,0),this.add(new Xt(.055,12,8),i,this.model,.2,2.52,0);for(let f of[-1,1]){let d=new $e;d.position.set(f*1.2,-.55,.2),this.model.add(d),this.arms.push(d),this.add(new Xt(.16,16,12),n,d),this.tube([new P,new P(f*.55,-.2,.3),new P(f*.6,-.55,.8)],.055,e,d),this.add(new Wt(.23,.14,.36),t,d,f*.6,-.55,.9);for(let m of[-1,1])this.tube([new P(f*.6+m*.09,-.55,1),new P(f*.6+m*.14,-.7,1.2),new P(f*.6+m*.05,-.75,1.3)],.025,n,d);this.tube([new P(f*.85,-1.2,-.6),new P(f*1.1,-1.7,-.4),new P(f*1.1,-1.7,1.1)],.055,e),this.add(new cn(.21,.21,.5,24),t,this.model,f*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new Xt(.12,12,8),i,this.model,f*.87,-.5,1.06)}let h=new Float32Array(650*3);for(let f=0;f<650;f++)h[f*3]=(F0(f*3)-.5)*14,h[f*3+1]=(F0(f*3+1)-.5)*14,h[f*3+2]=(F0(f*3+2)-.5)*8-2;let u=new vt;u.setAttribute("position",new Ut(h,3)),this.particles=new Jn(u,new si({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let e=new xt({color:13673053,metalness:.95,roughness:.25}),t=new xt({color:13221281,metalness:.9,roughness:.3}),n=new xt({color:4867381,metalness:.85,roughness:.27}),i=new xt({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new Xt(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new kn(.686,.005,4,96),e);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new $e;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new kn(l,o===5?.055:.029,8,128),o%2?e:t,a),o===5&&this.add(new kn(l+.1,.012,6,128),e,a);for(let c=0;c<72;c++){let h=c*Math.PI/36,u=l+(c%6===0?.055:.027),f=this.add(new Wt(.008,c%6===0?.09:.035,.018),n,a,Math.sin(h)*u,Math.cos(h)*u,0);f.rotation.z=-h}this.add(new Xt(.07+o*.013,16,12),o%2?e:t,a,l,0,0)}let s=this.add(new cn(.055,.1,1.2,24),e,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new cn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new cn(.62,.62,.04,64),e,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let e=this.host.getBoundingClientRect();e.width<1||e.height<1||(this.camera.aspect=e.width/e.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(e.width,e.height,!1),this.render(0,!0))}render(e,t=!1){if(!this.renderer||this.disposed||!t&&(!this.visible||document.hidden||e-this.last<1/30))return;this.last=e;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(e*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(e=>{(e instanceof Ue||e instanceof Jn)&&(e.geometry.dispose(),(Array.isArray(e.material)?e.material:[e.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var xl=(r,e,t)=>ee.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.8:1)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});function cy(r){ee.from(`${r} h2`,{y:90,rotationX:12,transformOrigin:"50% 100%",opacity:.35,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}})}function rA(){let r=document.querySelector(".rv-hero"),e=r.querySelector(".rv-desert img"),t=r.clientWidth,n=r.clientHeight,i=(e.naturalWidth||1792)/(e.naturalHeight||1008),s=Math.max(t,n*i),o=s/i,a=(t-s)/2,l=(n-o)/2,c=(s*.415+a)/t*100,h=100-(s*.58+a)/t*100,u=(o*.175+l)/n*100,f=100-(o*.79+l)/n*100,d=Math.max(0,s*.165/2);return`inset(${u}% ${h}% ${f}% ${c}% round ${d}px ${d}px 0px 0px)`}function sA(r){ee.set(".rv-portal-copy",{autoAlpha:0}),xl(".rv-hero",4,r).to(".rv-hero-copy .im-word",{yPercent:-80,rotationX:60,rotation:-5,autoAlpha:0,stagger:.07,duration:.8},.12).to(".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",{autoAlpha:0,y:-25,duration:.5},.12).to(".rv-seal",{rotation:140,scale:.75,autoAlpha:0,duration:1},0).to(".rv-world",{scale:1.45,transformOrigin:"50% 47%",duration:2.2,ease:"power1.inOut"},.15).fromTo(".rv-portal-window",{clipPath:rA},{clipPath:"inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",duration:1.9,ease:"power2.inOut"},.7).fromTo(".rv-portal-window img",{scale:1.12},{scale:1,duration:2.8,ease:"none"},.6).to(".rv-desert",{autoAlpha:0,duration:.45},2.05).to(".rv-world",{scale:1,duration:1.4,ease:"sine.out"},2.3).fromTo(".rv-portal-copy",{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.7},2.5).to(".rv-hero-shade",{backgroundColor:"#0e29252a",duration:1},2).to(".rv-portal-copy",{autoAlpha:0,y:-35,duration:.5},3.55),cy(".rv-prologue"),ee.to(".rv-asterisk",{rotation:140,scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:1.2}}),ee.to(".rv-word-ribbon span",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:.7}}),ee.set(".rv-room-1,.rv-room-2",{autoAlpha:0,rotationY:72,xPercent:r?20:12}),ee.set(".rv-room-rail>div:first-child",{opacity:1}),xl(".rv-rooms-pin",5,r).fromTo(".rv-room-0 .rv-room-photo img",{scale:1.12,xPercent:2},{scale:1,xPercent:-2,duration:1.3,ease:"none"},0).to(".rv-room-rail>div:nth-child(1) i",{scaleX:1,duration:1.3,ease:"none"},0).to(".rv-room-0",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},1).to(".rv-room-1",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},1.2).fromTo(".rv-room-1 .rv-room-photo img",{scale:1.18,xPercent:3},{scale:1,xPercent:-2,duration:2,ease:"none"},1.2).to(".rv-room-rail>div:nth-child(1)",{opacity:.35,duration:.4},1.3).to(".rv-room-rail>div:nth-child(2)",{opacity:1,duration:.4},1.5).to(".rv-room-rail>div:nth-child(2) i",{scaleX:1,duration:1.2,ease:"none"},2).to(".rv-room-1",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},3).to(".rv-room-2",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},3.2).fromTo(".rv-room-2 .rv-room-photo img",{scale:1.15,yPercent:3},{scale:1,yPercent:-2,duration:1.8,ease:"none"},3.2).to(".rv-room-rail>div:nth-child(2)",{opacity:.35,duration:.4},3.3).to(".rv-room-rail>div:nth-child(3)",{opacity:1,duration:.4},3.5).to(".rv-room-rail>div:nth-child(3) i",{scaleX:1,duration:1,ease:"none"},4),ee.set(".rv-postcard-border,.rv-keepsake-note",{autoAlpha:0}),xl(".rv-keepsake-pin",3.8,r).fromTo(".rv-fragment",{x:i=>(i%3-1)*(r?130:280),y:i=>(Math.floor(i/3)-1)*(r?100:200),z:i=>i%2?-160:180,rotation:i=>(i-4)*9,rotationY:i=>(i%3-1)*30,scale:.75,autoAlpha:.55},{x:0,y:0,z:0,rotation:0,rotationY:0,scale:1,autoAlpha:1,stagger:{each:.1,from:"center"},duration:1.5,ease:"power2.inOut"},0).to(".rv-postcard",{rotation:0,scale:1.02,duration:2.2},0).to(".rv-keepsake-heading",{y:-30,autoAlpha:r?.7:.35,duration:1.3},1).to(".rv-postcard-border",{autoAlpha:1,rotation:0,scale:1.02,duration:.6},2.1).fromTo(".rv-keepsake-note",{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.6},2.6).to(".rv-postcard,.rv-postcard-border",{y:r?-10:-35,rotation:-3,duration:.8},3),ee.fromTo(".rv-contact-circle",{scale:.7,y:130},{scale:1.2,y:-80,scrollTrigger:{trigger:".rv-contact",start:"top bottom",end:"bottom bottom",scrub:1}}),ee.from(".rv-contact h2",{yPercent:60,rotationX:40,opacity:.2,stagger:.1,scrollTrigger:{trigger:".rv-contact",start:"top 85%",end:"top 10%",scrub:1}})}function oA(r){ee.set(".tv-ascent-copy",{autoAlpha:0});let e={value:1200},t=document.querySelector(".tv-altitude strong");xl(".tv-hero",3.8,r).to(".tv-hero-copy .im-word",{yPercent:-120,rotationX:60,autoAlpha:0,stagger:.1,duration:.8},.1).to(".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",{y:-30,autoAlpha:0,duration:.5},.1).to(".tv-ridge-plane img",{scale:1.16,transformOrigin:"65% 25%",duration:1.5},0).to(".tv-ridge-plane",{yPercent:u=>(u-2)*(r?12:18),rotationY:u=>(u-2)*-9,rotationZ:u=>(u-2)*2,z:u=>Math.abs(u-2)*-90,xPercent:u=>(u-2)*8,duration:1.8,ease:"power2.inOut"},1).to(".tv-hero-shade",{backgroundColor:"#08162077",duration:1.4},1).to(".tv-grid",{autoAlpha:0,duration:.5},1).to(".tv-vertical-rule",{yPercent:-60,duration:3.8,ease:"none"},0).to(e,{value:4860,duration:3.8,ease:"none",onUpdate:()=>{t.textContent=Math.round(e.value).toLocaleString("en-US")}},0).fromTo(".tv-ascent-copy",{autoAlpha:0,y:70},{autoAlpha:1,y:0,duration:.8},1.8).to(".tv-ascent-copy",{autoAlpha:0,y:-35,duration:.5},3.3),cy(".tv-belief"),ee.to(".tv-belief-compass",{rotation:110,scrollTrigger:{trigger:".tv-belief",start:"top bottom",end:"bottom top",scrub:1}}),ee.set(".tv-route-notes article:not(:first-child)",{autoAlpha:0,y:20}),ee.set(".tv-map-fold",{rotationY:u=>u%2?-35:35});let i=document.querySelector(".tv-route-line"),s=document.querySelector(".tv-route-traveller"),o={progress:0},a=i.getTotalLength(),l=()=>{let u=i.getPointAtLength(o.progress*a);ee.set(s,{x:u.x,y:u.y})};l(),xl(".tv-route-pin",4,r).to(".tv-map-fold",{rotationY:0,stagger:.1,duration:1.2,ease:"power2.inOut"},0).fromTo(".tv-fold-map",{rotationX:43,rotationZ:-20,scale:.8},{rotationX:0,rotationZ:0,scale:1,duration:1.8},0).fromTo(".tv-map-drawing",{autoAlpha:0},{autoAlpha:1,duration:.6},.8).fromTo(".tv-contour-lines path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.1,ease:"none"},.6).fromTo(".tv-route-line",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:2.4,ease:"none"},1.2).to(o,{progress:1,duration:2.4,ease:"none",onUpdate:l},1.2).to(".tv-route-progress i",{scaleX:1,duration:3.8,ease:"none"},0).to(".tv-route-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1.2).to(".tv-route-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".tv-route-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.5).to(".tv-route-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.85).to(".tv-fold-map",{rotationX:r?8:15,rotationZ:8,scale:1.05,duration:.8},3.2),ee.set(".tv-summit-copy,.tv-summit-stamp",{autoAlpha:0}),xl(".tv-crossing-pin",5,r).fromTo(".tv-ice-plane img",{scale:1.2,transformOrigin:"50% 35%"},{scale:1,transformOrigin:"50% 35%",duration:1.5},0).to(".tv-crossing-heading",{y:-50,autoAlpha:0,duration:.7},.8).to(".tv-crossing-details",{autoAlpha:0,duration:.5},1).to(".tv-crossing-aperture i",{scaleY:0,duration:1},.7).to(".tv-ice-plane",{xPercent:u=>u<3?-850:u>3?850:0,yPercent:u=>u===3?-135:u%2?14:-14,rotationY:u=>u<3?-35:u>3?35:0,rotationX:u=>u===3?35:0,autoAlpha:0,stagger:{each:.13,from:"center"},duration:1.7,ease:"power2.inOut"},1.4).to(".tv-summit-photo img",{scale:1,duration:3.8,ease:"none"},.6).to(".tv-crossing-shade",{backgroundColor:"#0d182b22",duration:1},2).fromTo(".tv-summit-copy",{autoAlpha:0,y:75},{autoAlpha:1,y:0,duration:.8},3).fromTo(".tv-summit-stamp",{autoAlpha:0,scale:.7,rotation:-35},{autoAlpha:1,scale:1,rotation:0,duration:.9},3.5).to(".tv-summit-copy h2",{y:-25,duration:1.2},3.7).to(".tv-summit-stamp svg",{rotation:30,duration:1.5},3.5),ee.from(".tv-contact h2",{x:-80,rotation:-4,opacity:.2,scrollTrigger:{trigger:".tv-contact",start:"top 85%",end:"top 10%",scrub:1}}),ee.from(".tv-end-altitude i",{y:100,rotation:-35,scrollTrigger:{trigger:".tv-contact",start:"top 80%",end:"bottom bottom",scrub:1}})}function uy(r,e){r==="reverie"?sA(e):r==="traverse"&&oA(e)}var aA={dust:0,embers:1,snow:2,rain:3,fireflies:4,steam:5,petals:6,sparks:7,bubbles:8},hy=`#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`,dy=`
uniform vec2 uRes; uniform float uImgAsp, uOverscan;
uniform vec2 uCam, uCenter; uniform float uZoom, uFocus, uDolly;
vec2 fitScale(){ float a = uRes.x / uRes.y; return (a > uImgAsp ? vec2(1., uImgAsp / a) : vec2(a / uImgAsp, 1.)) / uOverscan; }
vec2 screenToImage(vec2 uv){ return uCenter + ((uv - .5) * fitScale() + .5 - uCenter) / uZoom; }
vec2 imageToScreen(vec2 img){ return ((uCenter + (img - uCenter) * uZoom) - .5) / fitScale() + .5; }
vec2 shift(vec2 img){ return uCam + (img - uCenter) * uDolly; }
`,lA=`
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
`,cA=`#version 300 es
precision highp float;
in vec2 vUv;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oGlow;
uniform sampler2D uColor, uDepth;
uniform float uTime;
uniform vec4 uFog;
uniform vec4 uGlow;       // threshold, strength, flicker, boost
uniform vec3 uGlowTint;
uniform vec2 uWater;      // waterline y (image), strength
uniform vec4 uPulse;      // x, y (image), seconds since, strength
uniform sampler2D uTitle;
uniform vec4 uTitleP;     // depth, on, glow, shadow
${dy}${lA}
void main(){
  vec2 img = screenToImage(vUv);
  vec2 off = shift(img);
  // Steep parallax: march from the nearest plane to the farthest until the painting's depth is in front of the ray.
  // Coarse march to find the crossing, then a binary search inside that step for a clean edge.
  const int N = 40;
  vec2 p = img; float hiL = 1., loL = 1.;
  for (int i = 0; i <= N; i++) {
    float layer = 1. - float(i) / float(N);
    vec2 q = img - off * (layer - uFocus);
    if (texture(uDepth, q).r >= layer) { loL = layer; hiL = i == 0 ? layer : layer + 1. / float(N); break; }
    loL = layer;
  }
  for (int j = 0; j < 6; j++) {
    float mid = (hiL + loL) * .5;
    vec2 q = img - off * (mid - uFocus);
    if (texture(uDepth, q).r >= mid) loL = mid; else hiL = mid;
  }
  p = img - off * (loL - uFocus);
  // A click sends a ring through the picture.
  if (uPulse.w > 0.) {
    vec2 d = p - uPulse.xy; float r = length(d * vec2(uImgAsp, 1.)), t = uPulse.z;
    float wave = sin(r * 70. - t * 14.) * exp(-t * 1.6) * exp(-abs(r - t * .32) * 9.);
    p += normalize(d + 1e-5) * wave * .006 * uPulse.w;
  }
  // Water: below the line the picture wobbles, more towards the viewer.
  if (uWater.y > 0. && p.y < 1. - uWater.x) {
    float k = (1. - uWater.x - p.y) / max(.05, 1. - uWater.x);
    p.x += (sin(p.y * 260. + uTime * 2.2) * .7 + sin(p.y * 97. - uTime * 1.3)) * .0012 * uWater.y * (.3 + k);
    p.y += sin(p.x * 80. + uTime * 1.1) * .0006 * uWater.y * k;
  }
  p = clamp(p, vec2(.001), vec2(.999));
  vec3 c = texture(uColor, p).rgb;
  float d = texture(uDepth, p).r;
  // The title plane: seen only where the ray reaches its depth before it meets the painting.
  vec4 tc = vec4(0.);
  if (uTitleP.y > 0.) {
    vec2 tq = img - off * (uTitleP.x - uFocus);
    float inside = step(0., tq.x) * step(tq.x, 1.) * step(0., tq.y) * step(tq.y, 1.);
    float behind = smoothstep(-.012, .012, uTitleP.x - loL);
    tc = texture(uTitle, tq); tc.a *= inside * behind * uTitleP.y;
    // a soft shadow on whatever lies behind the letters, falling down and to the right
    float sh = textureLod(uTitle, tq + vec2(-.006, .012), 3.5).a * inside * behind * uTitleP.w * uTitleP.y;
    c *= 1. - sh * .55 * (1. - tc.a);
  }
  // Light: bright, saturated or warm pixels glow and flicker in small patches.
  float lum = max(c.r, max(c.g, c.b));
  float e = smoothstep(uGlow.x, min(1., uGlow.x + .22), lum) * (.55 + .45 * (lum - min(c.r, min(c.g, c.b))) / max(lum, .001) + .2 * step(c.b, c.r));
  float fl = 1. + uGlow.z * (vnoise(floor(p * vec2(48., 27.)) + uTime * vec2(2.3, 1.7)) - .5) * 2.;
  oGlow = vec4(c * e * uGlow.y * fl * uGlowTint * (1. + uGlow.w), 1.);
  c = mix(c, tc.rgb, tc.a);
  oGlow.rgb = mix(oGlow.rgb, tc.rgb * uTitleP.z, tc.a);
  d = mix(d, uTitleP.x, tc.a);
  c = mix(c, uFog.rgb, uFog.a * pow(1. - d, 1.6));
  oColor = vec4(c, 1.);
}`,uA=`#version 300 es
precision highp float;
in float aId;
uniform int uKind; uniform float uTime, uSize, uSpeed, uCount, uPixel, uBurst;
uniform vec4 uRegion; uniform vec2 uDepthR, uBurstAt; uniform vec3 uTint;
uniform sampler2D uDepth;
out vec3 vCol; out float vA; out float vShape;
${dy}
float h(float n){ return fract(sin(n * 127.1 + 311.7) * 43758.5453); }
void main(){
  float s1 = h(aId + .13), s2 = h(aId + 2.31), s3 = h(aId + 5.77), s4 = h(aId + 9.12), s5 = h(aId + 13.4);
  float depth = mix(uDepthR.x, uDepthR.y, s3);
  vec2 lo = uRegion.xy, hi = uRegion.zw, span = hi - lo;
  float t = uTime * uSpeed, a = 1., shape = 0.;
  vec2 q;
  vCol = uTint;
  if (uKind == 0) {            // dust: hangs in the light, drifts and turns
    q = lo + span * vec2(fract(s1 + t * .004 * (s4 - .5) + .02 * sin(t * .2 + s2 * 9.)), fract(s2 - t * .006 * (.4 + s4)));
    a = .35 + .65 * pow(.5 + .5 * sin(t * (.6 + s5) + s1 * 40.), 3.);
  } else if (uKind == 1) {     // embers: rise, wobble and fade
    float life = fract(t * (.12 + .1 * s4) + s1);
    q = vec2(lo.x + span.x * s2 + sin(life * 9. + s5 * 30.) * .02 * span.x, lo.y + span.y * life);
    a = smoothstep(0., .1, life) * (1. - smoothstep(.55, 1., life)); vCol = mix(uTint, vec3(1., .85, .5), s5 * .6);
  } else if (uKind == 2) {     // snow: falls and sways
    float y = 1. - fract(s2 + t * (.03 + .03 * s4));
    q = vec2(fract(s1 + .03 * sin(t * .7 + s5 * 20.)), y); q = lo + span * q;
  } else if (uKind == 3) {     // rain: fast slanted streaks
    float y = 1. - fract(s2 + t * (.5 + .4 * s4));
    q = lo + span * vec2(fract(s1 + y * .08), y); shape = 1.;
    a = .5 + .5 * s5;
  } else if (uKind == 4) {     // fireflies: wander, blink
    q = lo + span * vec2(fract(s1 + .05 * sin(t * (.2 + s4 * .3) + s5 * 30.)), fract(s2 + .05 * cos(t * (.25 + s5 * .2) + s4 * 20.)));
    a = pow(max(0., sin(t * (.8 + s4) + s1 * 50.)), 3.);
  } else if (uKind == 5) {     // steam: big soft puffs that rise, grow and thin out
    float life = fract(t * (.05 + .04 * s4) + s1);
    q = vec2(lo.x + span.x * s2 + sin(life * 4. + s5 * 9.) * .04, lo.y + span.y * life);
    a = sin(life * 3.14159) * .5; shape = 2.;
  } else if (uKind == 6) {     // petals: tumble down on the wind
    float y = 1. - fract(s2 + t * (.04 + .03 * s4));
    q = lo + span * vec2(fract(s1 + y * .35 + .04 * sin(t + s5 * 20.)), y);
    a = .9; vCol = mix(uTint, vec3(1.), s5 * .35);
  } else if (uKind == 7) {     // sparks: bursts that arc and fall
    float life = fract(t * (.5 + .3 * s4) + s1);
    vec2 v = vec2((s2 - .5) * .5, .6 + s5 * .5);
    q = uBurstAt + v * life * span.y - vec2(0., .9 * life * life * span.y);
    a = 1. - life; vCol = mix(uTint, vec3(1., .95, .8), 1. - life);
  } else {                     // bubbles: rise and wiggle
    float y = fract(s2 + t * (.05 + .05 * s4));
    q = lo + span * vec2(s1 + .01 * sin(t * 3. + s5 * 30.), y);
  }
  if (uBurst > -1.) {          // a burst: one shot from a point, then gone
    float life = uBurst * (.6 + s4 * .8);
    vec2 v = vec2(cos(s1 * 6.283), sin(s1 * 6.283) * .7 + .55) * (.04 + .14 * s2);
    q = uBurstAt + v * life - vec2(0., .2 * life * life);
    a = max(0., 1. - life * .9); vCol = mix(uTint, vec3(1.), .3 * s5);
  }
  float scene = textureLod(uDepth, clamp(q, vec2(.001), vec2(.999)), 0.).r;
  if (scene > depth + .04) a = 0.;          // hidden behind something nearer
  vec2 img = q + shift(q) * (depth - uFocus);
  vec2 uv = imageToScreen(img);
  gl_Position = vec4(uv * 2. - 1., 0., 1.);
  float px = uSize * (.55 + .9 * s5) * (.45 + depth) * uRes.y / 900.;
  gl_PointSize = uPixel > 0. ? max(1., floor(px)) : max(1., px);
  if (shape == 1.) gl_PointSize *= 2.4;
  if (shape == 2.) gl_PointSize *= 6.;
  vA = a; vShape = shape;
}`,hA=`#version 300 es
precision highp float;
in vec3 vCol; in float vA; in float vShape;
uniform float uGlowK, uPixel;
layout(location = 0) out vec4 oColor;
layout(location = 1) out vec4 oGlow;
void main(){
  vec2 pc = gl_PointCoord - .5; float r = length(pc), a;
  if (vShape == 1.) a = smoothstep(.09, .0, abs(pc.x + pc.y * .12)) * smoothstep(.5, .2, abs(pc.y));
  else if (vShape == 2.) a = smoothstep(.5, 0., r) * .5;
  else a = uPixel > 0. ? step(r, .5) : smoothstep(.5, .1, r);
  a *= vA;
  if (a < .003) discard;
  oColor = vec4(vCol * a, a);
  oGlow = vec4(vCol * a * uGlowK, a * min(1., uGlowK));
}`,dA=`#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uDir;
void main(){
  vec3 s = texture(uTex, vUv).rgb * .227;
  s += (texture(uTex, vUv + uDir * 1.385).rgb + texture(uTex, vUv - uDir * 1.385).rgb) * .316;
  s += (texture(uTex, vUv + uDir * 3.231).rgb + texture(uTex, vUv - uDir * 3.231).rgb) * .07;
  o = vec4(s, 1.);
}`,fA=`#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uLight; uniform float uDecay;
void main(){
  vec2 d = (vUv - uLight) / 48. * .92;
  vec2 p = vUv; vec3 s = vec3(0.); float w = 1.;
  for (int i = 0; i < 48; i++) { p -= d; s += texture(uTex, p).rgb * w; w *= uDecay; }
  o = vec4(s / 20., 1.);
}`,pA=`#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uScene, uBloom, uRays;
uniform vec2 uRes;
uniform float uBloomK, uRaysK, uPalN, uPixel;
uniform vec3 uRayCol, uTint;
uniform vec4 uGrade; // exposure, contrast, saturation, vignette
uniform vec3 uPal[24];
float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(.5, a.y * .75))); }
float bayer4(vec2 a){ return bayer2(.5 * a) * .25 + bayer2(a); }
void main(){
  vec3 c = texture(uScene, vUv).rgb;
  c += texture(uBloom, vUv).rgb * uBloomK;
  c += texture(uRays, vUv).rgb * uRaysK * uRayCol;
  c *= uGrade.x * uTint;
  c = (c - .5) * uGrade.y + .5;
  float g = dot(c, vec3(.299, .587, .114));
  c = mix(vec3(g), c, uGrade.z);
  vec2 v = vUv - .5; c *= 1. - uGrade.w * dot(v, v) * 1.6;
  c = clamp(c, 0., 1.);
  if (uPalN > 0.) {
    // the nearest two palette colours, chosen between by a 4x4 ordered dither
    vec3 a = uPal[0], b = uPal[0]; float da = 9., db = 9.;
    for (int i = 0; i < 24; i++) { if (float(i) >= uPalN) break; vec3 p = uPal[i]; vec3 e = (c - p) * vec3(.9, 1.2, .7); float d = dot(e, e);
      if (d < da) { db = da; b = a; da = d; a = p; } else if (d < db) { db = d; b = p; } }
    float t = sqrt(da) / max(1e-4, sqrt(da) + sqrt(db));
    c = t > bayer4(gl_FragCoord.xy) * .9 + .05 ? b : a;
  }
  o = vec4(c, 1.);
}`;function N0(r){return new Promise((e,t)=>{let n=new Image;n.decoding="async",n.onload=()=>e(n),n.onerror=()=>t(new Error(`Could not load ${r}`)),n.src=r})}function mA(r,e){let t=document.createElement("canvas"),n=96,i=Math.round(96*r.naturalHeight/r.naturalWidth);t.width=n,t.height=i;let s=t.getContext("2d",{willReadFrequently:!0});s.drawImage(r,0,0,n,i);let o=s.getImageData(0,0,n,i).data,a=[];for(let c=0;c<o.length;c+=4)a.push([o[c]/255,o[c+1]/255,o[c+2]/255]);a.sort((c,h)=>c[0]+c[1]+c[2]-(h[0]+h[1]+h[2]));let l=Array.from({length:e},(c,h)=>a[Math.floor((h+.5)/e*a.length)].slice());for(let c=0;c<10;c++){let h=l.map(()=>[0,0,0,0]);for(let u of a){let f=0,d=9;l.forEach((p,_)=>{let g=(u[0]-p[0])**2+(u[1]-p[1])**2+(u[2]-p[2])**2;g<d&&(d=g,f=_)});let m=h[f];m[0]+=u[0],m[1]+=u[1],m[2]+=u[2],m[3]++}l=l.map((u,f)=>h[f][3]?[h[f][0]/h[f][3],h[f][1]/h[f][3],h[f][2]/h[f][3]]:u)}return l}var If=class{canvas;options;cam={x:0,y:0,zoom:1,cx:.5,cy:.5,dolly:0};light={x:.5,y:.5,boost:0};ready;time=0;gl;prog={};tex={};imgAsp=16/9;scene;half1;half2;rays;quad;points;maxPoints=0;palette=[];pointer={x:0,y:0,tx:0,ty:0};pulseAt={x:.5,y:.5,t:99,k:0};bursts=new Map;raf=0;last=0;running=!1;visible=!0;cleanups=[];failed=!1;paused=!1;pause(){this.paused=!0,this.sync()}resume(){this.paused=!1,this.sync()}constructor(e,t){this.canvas=e,this.options={depthScale:.04,focus:.35,overscan:1.08,pointer:1,autoplay:!0,...t},this.ready=this.init().catch(n=>{this.fail(n)})}fail(e){this.failed=!0,console.warn("Diorama fell back to a still picture:",e);let t=this.canvas.parentElement;t&&(t.style.backgroundImage=`url("${this.options.color}")`,t.style.backgroundSize="cover",t.style.backgroundPosition="center"),this.canvas.style.visibility="hidden"}async init(){let e=this.canvas.getContext("webgl2",{antialias:!1,premultipliedAlpha:!1,alpha:!1,powerPreference:"high-performance"});if(!e)throw new Error("WebGL2 is not available");this.gl=e;let[t,n]=await Promise.all([N0(this.options.color),N0(this.options.depth)]);if(this.imgAsp=t.naturalWidth/t.naturalHeight,this.tex.color=this.texture(t,!0),this.tex.depth=this.texture(n,!1),this.options.pixel&&this.options.palette){let o=this.options.paletteFrom?await N0(this.options.paletteFrom).catch(()=>t):t;this.palette=mA(o,Math.min(24,this.options.palette))}this.prog.scene=this.program(cA,["uColor","uDepth","uTime","uFog","uGlow","uGlowTint","uWater","uPulse","uTitle","uTitleP","uRes","uImgAsp","uOverscan","uCam","uCenter","uZoom","uFocus","uDolly"]),this.prog.particle=this.program(hA,["uKind","uTime","uSize","uSpeed","uCount","uPixel","uBurst","uRegion","uDepthR","uBurstAt","uTint","uDepth","uGlowK","uRes","uImgAsp","uOverscan","uCam","uCenter","uZoom","uFocus","uDolly"],uA),this.prog.blur=this.program(dA,["uTex","uDir"]),this.prog.rays=this.program(fA,["uTex","uLight","uDecay"]),this.prog.final=this.program(pA,["uScene","uBloom","uRays","uRes","uBloomK","uRaysK","uPalN","uPixel","uRayCol","uTint","uGrade","uPal"]),this.quad=e.createVertexArray(),e.bindVertexArray(this.quad);let i=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,i),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,2,e.FLOAT,!1,0,0),this.maxPoints=Math.max(2048,...(this.options.particles??[]).map(o=>o.count*2)),this.points=e.createVertexArray(),e.bindVertexArray(this.points);let s=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,s),e.bufferData(e.ARRAY_BUFFER,new Float32Array(Array.from({length:this.maxPoints},(o,a)=>a)),e.STATIC_DRAW),e.enableVertexAttribArray(0),e.vertexAttribPointer(0,1,e.FLOAT,!1,0,0),e.bindVertexArray(null),this.resize(),this.listen(),this.draw(0),this.canvas.dataset.ready="true"}texture(e,t){let n=this.gl,i=n.createTexture();return n.bindTexture(n.TEXTURE_2D,i),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),n.generateMipmap(n.TEXTURE_2D),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR_MIPMAP_LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MAG_FILTER,t&&this.options.pixel?n.NEAREST:n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),i}program(e,t,n=hy){let i=this.gl,s=(l,c)=>{let h=i.createShader(l);if(i.shaderSource(h,c),i.compileShader(h),!i.getShaderParameter(h,i.COMPILE_STATUS))throw new Error(i.getShaderInfoLog(h)||"shader error");return h},o=i.createProgram();if(i.attachShader(o,s(i.VERTEX_SHADER,n)),i.attachShader(o,s(i.FRAGMENT_SHADER,e)),i.bindAttribLocation(o,0,n===hy?"aPos":"aId"),i.linkProgram(o),!i.getProgramParameter(o,i.LINK_STATUS))throw new Error(i.getProgramInfoLog(o)||"link error");let a={};for(let l of t)a[l]=i.getUniformLocation(o,l==="uPal"?"uPal[0]":l);return{p:o,u:a}}target(e,t,n){let i=this.gl,s=i.createFramebuffer(),o=[];i.bindFramebuffer(i.FRAMEBUFFER,s);for(let a=0;a<n;a++){let l=i.createTexture();i.bindTexture(i.TEXTURE_2D,l),i.texImage2D(i.TEXTURE_2D,0,i.RGBA8,e,t,0,i.RGBA,i.UNSIGNED_BYTE,null);let c=this.options.pixel&&a===0;i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,c?i.NEAREST:i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MAG_FILTER,c?i.NEAREST:i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE),i.framebufferTexture2D(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+a,i.TEXTURE_2D,l,0),o.push(l)}return i.drawBuffers(o.map((a,l)=>i.COLOR_ATTACHMENT0+l)),{fb:s,tex:o,w:e,h:t}}resize(){if(!this.gl||this.failed)return;let e=this.gl,t=this.canvas.getBoundingClientRect(),n=Math.max(1,t.width),i=Math.max(1,t.height),s=this.options.pixel||0,o=Math.min(globalThis.devicePixelRatio||1,1.5),a=s?Math.ceil(n/s):Math.round(n*o),l=s?Math.ceil(i/s):Math.round(i*o),c=2400/Math.max(a,l);if(c<1&&(a=Math.round(a*c),l=Math.round(l*c)),this.canvas.width===a&&this.canvas.height===l&&this.scene)return;this.canvas.width=a,this.canvas.height=l,s&&(this.canvas.style.imageRendering="pixelated");for(let f of[this.scene,this.half1,this.half2,this.rays])f&&(e.deleteFramebuffer(f.fb),f.tex.forEach(d=>e.deleteTexture(d)));this.scene=this.target(a,l,2);let h=Math.max(1,Math.round(a/(s?1:2))),u=Math.max(1,Math.round(l/(s?1:2)));this.half1=this.target(h,u,1),this.half2=this.target(h,u,1),this.rays=this.target(h,u,1),this.running||this.draw(0)}listen(){let e=new ResizeObserver(()=>this.resize());e.observe(this.canvas),this.cleanups.push(()=>e.disconnect());let t=o=>{o.pointerType!=="touch"&&(this.pointer.tx=o.clientX/innerWidth-.5,this.pointer.ty=o.clientY/innerHeight-.5)};addEventListener("pointermove",t,{passive:!0}),this.cleanups.push(()=>removeEventListener("pointermove",t));let n=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.sync()},{rootMargin:"120px"});n.observe(this.canvas),this.cleanups.push(()=>n.disconnect());let i=()=>this.sync();document.addEventListener("visibilitychange",i),this.cleanups.push(()=>document.removeEventListener("visibilitychange",i));let s=matchMedia("(prefers-reduced-motion: reduce)");s.addEventListener("change",i),this.cleanups.push(()=>s.removeEventListener("change",i)),this.sync()}get reduced(){return!!this.options.still||matchMedia("(prefers-reduced-motion: reduce)").matches}sync(){let e=!!this.options.autoplay&&!this.failed&&!this.paused&&this.visible&&!document.hidden&&!this.reduced;e&&!this.running?(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(t=>this.loop(t))):!e&&this.running&&(this.running=!1,cancelAnimationFrame(this.raf))}loop(e){if(!this.running)return;let t=Math.min(.05,(e-this.last)/1e3);this.last=e,this.draw(t),this.raf=requestAnimationFrame(n=>this.loop(n))}setTitle(e){if(!this.gl||this.failed)return;let t=this.gl;e?(this.tex.title||(this.tex.title=t.createTexture(),t.bindTexture(t.TEXTURE_2D,this.tex.title),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)),t.bindTexture(t.TEXTURE_2D,this.tex.title),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,e),t.generateMipmap(t.TEXTURE_2D)):(this.tex.title&&t.deleteTexture(this.tex.title),this.tex.title=void 0),this.running||this.draw(0)}pulse(e,t,n=1){this.pulseAt={x:e,y:1-t,t:0,k:n}}burst(e,t,n){this.bursts.set(e,{x:t,y:n,t:0})}draw(e){if(!this.gl||this.failed||!this.scene||!this.tex.color)return;let t=this.gl,n=this.options;this.time+=e;let i=1-Math.exp(-e*3.2),s=this.reduced?0:n.pointer??1;this.pointer.x+=(this.pointer.tx*s-this.pointer.x)*i,this.pointer.y+=(this.pointer.ty*s-this.pointer.y)*i,this.pulseAt.t+=e,this.bursts.forEach(v=>v.t+=e);let o=n.depthScale??.04,a=(this.cam.x+this.pointer.x)*o,l=(this.cam.y-this.pointer.y*.6)*o,c=(v,M,T)=>{t.uniform2f(v.uRes,M,T),t.uniform1f(v.uImgAsp,this.imgAsp),t.uniform1f(v.uOverscan,n.overscan??1.08),t.uniform2f(v.uCam,a,l),t.uniform2f(v.uCenter,this.cam.cx,1-this.cam.cy),t.uniform1f(v.uZoom,this.cam.zoom),t.uniform1f(v.uFocus,n.focus??.35),t.uniform1f(v.uDolly,this.cam.dolly)};t.disable(t.DEPTH_TEST);let h=this.scene;t.bindFramebuffer(t.FRAMEBUFFER,h.fb),t.viewport(0,0,h.w,h.h),t.disable(t.BLEND);let u=this.prog.scene;t.useProgram(u.p),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.tex.color),t.uniform1i(u.u.uColor,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.tex.depth),t.uniform1i(u.u.uDepth,1),c(u.u,h.w,h.h),t.uniform1f(u.u.uTime,this.time),t.uniform4fv(u.u.uFog,n.fog??[0,0,0,0]);let f=n.glow??{threshold:.8,strength:.6};t.uniform4f(u.u.uGlow,f.threshold,f.strength,f.flicker??.15,this.light.boost),t.uniform3fv(u.u.uGlowTint,f.tint??[1,1,1]),t.uniform2f(u.u.uWater,n.water?.y??2,n.water?.strength??0),t.uniform4f(u.u.uPulse,this.pulseAt.x,this.pulseAt.y,this.pulseAt.t,this.pulseAt.t<3?this.pulseAt.k:0),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,this.tex.title??this.tex.depth),t.uniform1i(u.u.uTitle,2);let d=n.title;t.uniform4f(u.u.uTitleP,d?.depth??0,d&&this.tex.title?1:0,d?.glow??0,d?.shadow??.6),t.bindVertexArray(this.quad),t.drawArrays(t.TRIANGLES,0,6),n.particles?.length&&(u=this.prog.particle,t.useProgram(u.p),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,this.tex.depth),t.uniform1i(u.u.uDepth,1),c(u.u,h.w,h.h),t.uniform1f(u.u.uTime,this.time),t.uniform1f(u.u.uPixel,n.pixel||0),t.enable(t.BLEND),t.bindVertexArray(this.points),n.particles.forEach((v,M)=>{let T=this.bursts.get(M);if(v.burst&&(!T||T.t>2.5))return;let S=!["snow","petals","steam","bubbles"].includes(v.kind);t.blendFunc(t.ONE,S?t.ONE:t.ONE_MINUS_SRC_ALPHA),t.uniform1i(u.u.uKind,aA[v.kind]),t.uniform1f(u.u.uSize,v.size??3),t.uniform1f(u.u.uSpeed,v.speed??1),t.uniform1f(u.u.uCount,v.count),t.uniform4fv(u.u.uRegion,v.region?[v.region[0],1-v.region[3],v.region[2],1-v.region[1]]:[0,0,1,1]),t.uniform2fv(u.u.uDepthR,v.depth??[.2,.9]),t.uniform3fv(u.u.uTint,v.color),t.uniform1f(u.u.uGlowK,v.glow??(S?1:0)),t.uniform1f(u.u.uBurst,v.burst&&T?T.t:-2),t.uniform2f(u.u.uBurstAt,T?T.x:.5,T?1-T.y:.5),v.burst&&T&&t.uniform2f(u.u.uBurstAt,T.x,1-T.y),t.drawArrays(t.POINTS,0,v.count)}),t.disable(t.BLEND));let m=this.half1,p=this.half2,_=this.rays;u=this.prog.blur,t.useProgram(u.p),t.bindVertexArray(this.quad);let g=(v,M,T,S)=>{t.bindFramebuffer(t.FRAMEBUFFER,M.fb),t.viewport(0,0,M.w,M.h),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,v),t.uniform1i(u.u.uTex,0),t.uniform2f(u.u.uDir,T/M.w,S/M.h),t.drawArrays(t.TRIANGLES,0,6)},y=n.glow?.bloom??1.6;g(h.tex[1],m,y,0),g(m.tex[0],p,0,y),g(p.tex[0],m,y*2.2,0),g(m.tex[0],p,0,y*2.2),n.rays&&(u=this.prog.rays,t.useProgram(u.p),t.bindFramebuffer(t.FRAMEBUFFER,_.fb),t.viewport(0,0,_.w,_.h),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,h.tex[1]),t.uniform1i(u.u.uTex,0),t.uniform2f(u.u.uLight,this.light.x,1-this.light.y),t.uniform1f(u.u.uDecay,n.rays.decay??.965),t.drawArrays(t.TRIANGLES,0,6)),u=this.prog.final,t.useProgram(u.p),t.bindFramebuffer(t.FRAMEBUFFER,null),t.viewport(0,0,this.canvas.width,this.canvas.height),t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,h.tex[0]),t.uniform1i(u.u.uScene,0),t.activeTexture(t.TEXTURE1),t.bindTexture(t.TEXTURE_2D,p.tex[0]),t.uniform1i(u.u.uBloom,1),t.activeTexture(t.TEXTURE2),t.bindTexture(t.TEXTURE_2D,_.tex[0]),t.uniform1i(u.u.uRays,2),t.uniform2f(u.u.uRes,this.canvas.width,this.canvas.height),t.uniform1f(u.u.uBloomK,1),t.uniform1f(u.u.uRaysK,n.rays?n.rays.strength:0),t.uniform3fv(u.u.uRayCol,n.rays?.color??[1,.9,.7]);let x=n.grade??{};t.uniform3fv(u.u.uTint,x.tint??[1,1,1]),t.uniform4f(u.u.uGrade,x.exposure??1,x.contrast??1,x.saturation??1,x.vignette??.25),t.uniform1f(u.u.uPalN,this.palette.length),t.uniform1f(u.u.uPixel,n.pixel||0),this.palette.length&&t.uniform3fv(u.u.uPal,this.palette.flat().concat(new Array((24-this.palette.length)*3).fill(0))),t.drawArrays(t.TRIANGLES,0,6),t.bindVertexArray(null)}destroy(){this.running=!1,cancelAnimationFrame(this.raf),this.cleanups.forEach(e=>e()),this.gl?.getExtension("WEBGL_lose_context")?.loseContext()}};var gA={platform:{pixel:0,depthScale:.045,focus:.3,pointer:.7,glow:{threshold:.68,strength:.95,flicker:.22,tint:[1,.74,.4],bloom:1.4},grade:{vignette:.45},particles:[{kind:"steam",count:46,color:[.72,.74,.86],size:14,speed:.45,region:[.55,.3,1,.9],depth:[.35,.85]},{kind:"dust",count:160,color:[1,.82,.5],size:2,speed:.7,region:[.3,.05,.8,.7],depth:[.3,.8],glow:.6}]},forest:{pixel:0,depthScale:.07,focus:.3,pointer:.5,glow:{threshold:.72,strength:.9,flicker:.3,tint:[1,.78,.45],bloom:1.4},water:{y:.55,strength:.9},grade:{vignette:.35},particles:[{kind:"fireflies",count:90,color:[1,.9,.45],size:3,speed:1,region:[0,.45,1,1],depth:[.45,.95],glow:1.6}]},viaduct:{pixel:0,depthScale:.06,focus:.35,pointer:.5,glow:{threshold:.8,strength:.7,flicker:.06,tint:[1,.82,.55],bloom:1.6},rays:{x:.9,y:.3,strength:.2,decay:.965,color:[1,.78,.5]},grade:{vignette:.3},particles:[{kind:"steam",count:40,color:[.95,.96,1],size:16,speed:.4,region:[.15,.55,1,.95],depth:[.2,.6]}]},coast:{pixel:0,depthScale:.05,focus:.4,pointer:.6,glow:{threshold:.88,strength:.5,flicker:.05,tint:[1,.9,.7]},water:{y:.43,strength:.6},grade:{saturation:1.05,vignette:.2},particles:[{kind:"petals",count:40,color:[1,.55,.75],size:3,speed:.5,region:[0,.2,.4,1],depth:[.6,1]}]}},fy=[1360,1515,1792,1930],_A=r=>{let e=Math.floor(r/60)%24,t=Math.floor(r%60);return`${String(e).padStart(2,"0")}:${String(t).padStart(2,"0")}`};function vA(r){let e=r.dataset.final||r.textContent||"",t="ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",n=0,i=setInterval(()=>{n++,r.textContent=[...e].map((s,o)=>s===" "||o<n/2?s:t[Math.random()*t.length|0]).join(""),n/2>e.length&&(clearInterval(i),r.textContent=e)},45)}function py(r,e){let t=new Map;document.querySelectorAll(".on-art").forEach(S=>{let A=S.dataset.stop,b=`motion/art/overnight/${A}/`;t.set(A,new If(S,{...gA[A],color:b+"painting.webp",depth:b+"depth.webp",still:r}))});let n=S=>t.get(S),i=[...document.querySelectorAll(".on-stops li")],s=document.querySelector(".on-clock"),o=S=>i.forEach((A,b)=>{A.classList.toggle("is-done",b<S),A.classList.toggle("is-now",b===S)});o(0);let a=[...document.querySelectorAll(".on-berth")],l=S=>{a.forEach(b=>{let E=b===S;b.setAttribute("aria-checked",String(E)),b.querySelector(".on-berth-pick").textContent=E?"SELECTED":"CHOOSE"});let A=S.querySelector(".on-berth-name").textContent||"";document.querySelector(".on-berth-label").textContent=A.toUpperCase(),document.querySelector(".on-book-berth").textContent=A.toLowerCase(),r||ee.fromTo(".on-ticket",{rotate:-2},{rotate:0,duration:.6,ease:"elastic.out(1, .4)"})};if(a.forEach(S=>S.addEventListener("click",()=>l(S))),document.querySelector(".on-berth-list")?.addEventListener("keydown",S=>{let A=S.key,b=a.findIndex(L=>L.getAttribute("aria-checked")==="true");if(A!=="ArrowRight"&&A!=="ArrowLeft")return;S.preventDefault();let E=a[(b+(A==="ArrowRight"?1:a.length-1))%a.length];l(E),E.focus()}),r)return()=>t.forEach(S=>S.destroy());document.querySelectorAll(".on-flap").forEach((S,A)=>setTimeout(()=>vA(S),600+A*300));let c=e?.75:1,h=(S,A)=>ee.timeline({scrollTrigger:{trigger:S,start:"top top",end:()=>`+=${innerHeight*A*c}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}}),u=(S,A,b,E)=>b.to(n(S).options.grade,{exposure:A,duration:.5,ease:"power1.in"},E),f=n("platform");f.cam.cx=.47,f.cam.cy=.64,f.options.grade.exposure=1;let d=h(".on-platform",2.6);d.to(".on-hero-copy .on-w>span",{yPercent:-110,stagger:.04,duration:.5,ease:"power2.in"},.25).to(".on-hero-copy .on-lede,.on-hero-copy .on-label,.on-scroll",{autoAlpha:0,y:-20,duration:.4},.25).to(".on-board",{y:-40,autoAlpha:0,duration:.5},.4).to(f.cam,{zoom:1.75,dolly:.55,duration:2,ease:"power1.inOut"},0).to(f.light,{boost:.6,duration:1},1),u("platform",0,d,1.7);let m=n("forest");m.options.grade.exposure=0;let p=h(".on-forest",3.2);p.fromTo(".on-curtain.on-left",{scaleX:1},{scaleX:.16,duration:.7,ease:"power2.inOut"},.1).fromTo(".on-curtain.on-right",{scaleX:1},{scaleX:.16,duration:.7,ease:"power2.inOut"},.1).fromTo(m.cam,{x:-1.3,zoom:1.12},{x:1.3,zoom:1.04,duration:3,ease:"none"},0).from(".on-forest .on-copy > *",{y:40,autoAlpha:0,stagger:.12,duration:.5},.5).from(".on-facts li",{x:-30,autoAlpha:0,stagger:.15,duration:.4},1.1),u("forest",0,p,2.7);let _=n("viaduct");_.options.grade.exposure=0,_.light.x=.9,_.light.y=.3;let g={m:0},y=document.querySelector(".on-metres"),x=h(".on-viaduct",3);x.fromTo(_.cam,{zoom:1.6,cx:.55,cy:.62,y:-1.2},{zoom:1,y:.6,duration:3,ease:"power1.inOut"},0).to(_.options.rays,{strength:1.1,duration:2.6},.2).fromTo(_.light,{y:.55},{y:.22,duration:2.6},.2).to(g,{m:90,duration:2,onUpdate:()=>{y.textContent=String(Math.round(g.m))}},.3).from(".on-viaduct .on-copy > *",{y:40,autoAlpha:0,stagger:.12,duration:.5},.4),u("viaduct",0,x,2.6);let v=n("coast");v.options.grade.exposure=0,h(".on-coast",2).fromTo(v.cam,{zoom:1.4,cx:.35,cy:.55,x:.8},{zoom:1,x:0,duration:2,ease:"power2.out"},0).from(".on-coast .on-copy > *",{y:40,autoAlpha:0,stagger:.12,duration:.5},.4);let T={m:fy[0]};return ee.to(T,{m:fy[3],ease:"none",scrollTrigger:{trigger:".on-platform",start:"top top",endTrigger:".on-berths",end:"top 60%",scrub:!0},onUpdate:()=>{s.textContent=_A(T.m)}}),document.querySelectorAll(".on-chapter").forEach(S=>{let A=Number(S.dataset.stop);ee.timeline({scrollTrigger:{trigger:S,start:"top 55%",end:"bottom 45%",onToggle:b=>b.isActive&&o(A)}})}),[["forest",".on-forest",1],["viaduct",".on-viaduct",1],["coast",".on-coast",1.02]].forEach(([S,A,b])=>ee.to(n(S).options.grade,{exposure:b,ease:"none",scrollTrigger:{trigger:A,start:"top 75%",end:"top top",scrub:!0}})),ee.fromTo(".on-shade-day",{opacity:0},{opacity:1,ease:"none",scrollTrigger:{trigger:".on-coast",start:"top 60%",end:"top top",scrub:!0}}),ee.from(".on-berth",{y:60,autoAlpha:0,stagger:.12,scrollTrigger:{trigger:".on-berths",start:"top 80%",end:"top 30%",scrub:1}}),ee.from(".on-contact h2",{y:80,autoAlpha:.2,scrollTrigger:{trigger:".on-contact",start:"top 85%",end:"top 35%",scrub:1}}),ee.from(".on-ticket",{x:60,autoAlpha:0,duration:1,delay:.8,ease:"power3.out"}),ee.from(".on-hero-copy .on-w>span",{yPercent:110,stagger:.06,duration:1.1,ease:"expo.out",delay:.3}),()=>t.forEach(S=>S.destroy())}var my=[{x:42,y:27,label:"The astrolabe",note:"Brandt painted the brass with almost no yellow: it is grey and white, and your eye supplies the gold. Look at the tiny ring of reflected candle on the rim."},{x:74,y:51,label:"One candle",note:"The only light in the room. Everything else is a guess the painter makes for you: the shadows are warm on the near side, cool where the window reaches."},{x:88,y:15,label:"The window",note:"Leaded panes, each one a slightly different blue. Infrared shows he first painted the window open, then changed his mind and shut out the night."},{x:34,y:76,label:"The books",note:"Two are open to star charts that do not exist. A painter's joke, or a private map: nobody has worked it out."}];function gy(r,e){let t=[],n=(T,S,A)=>{T.addEventListener(S,A),t.push(()=>T.removeEventListener(S,A))},i=document.querySelector(".at-zoom"),s=document.querySelector(".at-back"),o=document.querySelector(".at-note-h"),a=document.querySelector(".at-note-t"),l=[...document.querySelectorAll("[data-spot]")],c=T=>{if(l.forEach(A=>A.setAttribute("aria-pressed",String(A.dataset.spot===String(T)))),T===null){o.textContent="Choose a number on the painting.",a.textContent="Each one takes you right up to the canvas.",s.hidden=!0,ee.to(i,{scale:1,duration:r?0:1.1,ease:"power3.inOut"}),i.classList.remove("is-zoomed");return}let S=my[T];o.textContent=`${String(T+1).padStart(2,"0")} \xB7 ${S.label}`,a.textContent=S.note,s.hidden=!1,i.classList.add("is-zoomed"),ee.to(i,{scale:2.5,transformOrigin:`${S.x}% ${S.y}%`,duration:r?0:1.2,ease:"power3.inOut"})};l.forEach(T=>n(T,"click",()=>c(Number(T.dataset.spot)))),n(s,"click",()=>c(null));let h=[...document.querySelectorAll(".at-ticket")],u=document.querySelector(".at-total b"),f=()=>{u.textContent=`\u20AC${h.reduce((T,S)=>T+Number(S.dataset.price)*Number(S.querySelector("output").textContent),0)}`};h.forEach(T=>{let[S,A]=T.querySelectorAll("button"),b=T.querySelector("output");n(S,"click",()=>{b.textContent=String(Math.max(0,Number(b.textContent)-1)),f()}),n(A,"click",()=>{b.textContent=String(Math.min(9,Number(b.textContent)+1)),f()})}),f();let d=document.querySelector(".at-loupe"),m=2.6;if(document.querySelectorAll("[data-loupe]").forEach(T=>{let S=T.querySelector(".at-canvas");n(S,"pointerenter",()=>{e||(d.style.backgroundImage=`url("${T.dataset.loupe}")`,d.classList.add("is-on"))}),n(S,"pointerleave",()=>d.classList.remove("is-on")),n(S,"pointermove",A=>{let b=S.getBoundingClientRect(),E=(A.clientX-b.left)/b.width,L=(A.clientY-b.top)/b.height,R=95;d.style.transform=`translate(${A.clientX-R}px, ${A.clientY-R}px)`,d.style.backgroundSize=`${b.width*m}px ${b.height*m}px`,d.style.backgroundPosition=`${-(E*b.width*m-R)}px ${-(L*b.height*m-R)}px`})}),r)return()=>t.forEach(T=>T());let p=document.querySelector(".at-lead"),_=()=>{let T=p.getBoundingClientRect(),S=Number(ee.getProperty(p,"scale"))||1;return Math.max(innerWidth/(T.width/S),innerHeight/(T.height/S))*1.16};ee.set(p,{scale:_()}),ee.timeline({scrollTrigger:{trigger:".at-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.6:2.4)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}}).fromTo(p,{scale:()=>_()},{scale:1,duration:2,ease:"power2.inOut"},0).to(".at-ui",{autoAlpha:0,duration:.5},.25).fromTo(".at-wall",{opacity:0},{opacity:1,duration:.9},.6).fromTo(".at-left",{xPercent:-60,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1},1.1).fromTo(".at-right",{xPercent:60,autoAlpha:0},{xPercent:0,autoAlpha:1,duration:1},1.1).fromTo(".at-label",{y:20,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},1.7),ee.from(".at-hero-copy .at-w>span",{yPercent:110,stagger:.06,duration:1.2,ease:"expo.out",delay:.3}),ee.from(".at-name",{autoAlpha:0,letterSpacing:".3em",duration:2,ease:"expo.out"});let y=document.querySelector(".at-track"),x=[...y.querySelectorAll(".at-work")],v=()=>Math.max(0,y.scrollWidth-innerWidth+innerWidth*.12),M=()=>x.forEach(T=>{let S=T.getBoundingClientRect(),A=(S.left+S.width/2-innerWidth/2)/innerWidth;ee.set(T.querySelector(".at-frame"),{rotateY:Math.max(-28,Math.min(28,-A*40)),scale:1-Math.min(.16,Math.abs(A)*.2)}),ee.set(T.querySelector(".at-caption"),{autoAlpha:1-Math.min(1,Math.abs(A)*2.2)})});return ee.to(y,{x:()=>-v(),ease:"none",scrollTrigger:{trigger:".at-show",start:"top top",end:()=>`+=${v()}`,pin:!0,scrub:.6,invalidateOnRefresh:!0,onUpdate:M,onRefresh:M}}),M(),ee.from(".at-show-head > *",{y:50,autoAlpha:0,stagger:.1,scrollTrigger:{trigger:".at-show",start:"top 85%",end:"top 30%",scrub:1}}),ee.from(".at-closer-art",{y:80,rotate:-2,autoAlpha:0,scrollTrigger:{trigger:".at-closer",start:"top 85%",end:"top 35%",scrub:1}}),ee.from(".at-spot",{scale:0,stagger:.1,ease:"back.out(2)",scrollTrigger:{trigger:".at-closer",start:"top 45%"}}),ee.from(".at-visit-head > *, .at-hours > div, .at-ticket",{y:40,autoAlpha:0,stagger:.06,scrollTrigger:{trigger:".at-visit",start:"top 80%",end:"top 30%",scrub:1}}),()=>t.forEach(T=>T())}var ho=(r,e,t)=>ee.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*e*(t?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function U0(r){ee.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),ee.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function xA(r,e){ee.set(".pl-descent-copy",{autoAlpha:0});let t={value:0},n=document.querySelector(".pl-depth-number");ho(".pl-hero",3.8,e).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:e?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(t,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(t.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:e?17:7,xPercent:e?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),U0(".pl-intro"),ee.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),ho(".pl-survey-pin",3.6,e).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:e?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),ee.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),ho(".pl-life-pin",4,e).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),ee.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function yA(r,e){ee.set(".he-unfold-copy",{autoAlpha:0}),ho(".he-hero",3.8,e).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:e?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:e?15:6,yPercent:e?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),U0(".he-prologue"),ee.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),ee.set(".he-totality",{autoAlpha:0}),ho(".he-eclipse-pin",4.5,e).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=ee.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});ee.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{ee.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ee.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ee.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),ee.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function bA(r){ee.set(".af-through-copy",{autoAlpha:0}),ho(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),U0(".af-intro"),ho(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),ee.set(".af-select-frame",{autoAlpha:0}),ho(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),ee.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function _y(r,e,t){r==="pelagic"&&e?xA(e,t):r==="heliograph"&&e?yA(e,t):r==="afterimage"&&bA(t)}var MA=[{id:"atrium",name:"Atrium",number:"25",headline:"Step inside the painting.",color:"#c9a45c",background:"#121a16",cover:"/motion/atrium-cover.jpg",category:"GALLERY / IMAGINED MUSEUM",description:"The website of a museum that doesn't exist, where the paintings are the interface. Start inside a canvas and step back until it hangs on the wall, walk the collection with a loupe for the brushwork, zoom into a painting detail by detail, then book tickets.",tags:["Painting as interface","Loupe and detail zoom","Five new old masters"],chapters:["Inside a painting","Now showing","Look closer","Visit"]},{id:"overnight",name:"Overnight",number:"24",headline:"Fall asleep here. Wake up by the sea.",color:"#ffb84d",background:"#070b1c",cover:"/motion/overnight-cover.jpg",category:"PIXEL ART / NIGHT TRAIN",description:"One night on a sleeper train, in four pixel paintings rendered in real depth. Walk down the platform, watch the lake slide past your compartment window, rise over a viaduct as the sun comes up and step off by the sea, while your ticket is punched at every stop.",tags:["Painted depth in WebGL","Scroll-driven camera","A ticket that travels with you"],chapters:["Boarding","The lake","The viaduct","Saltmarsh","Book"]},{id:"volute",name:"Volute",number:"23",headline:"Beautiful things find their rhythm",color:"#f4b78e",background:"#160d10",cover:"/motion/volute-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A slowly turning copper spiral with fine illuminated ribs. Warm ordered dither and vertical light give this motion studio its own rhythm.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"vernant",name:"Vernant",number:"22",headline:"A little more room to grow",color:"#a1d6ab",background:"#07130e",cover:"/motion/vernant-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A jade fern garden with seven independent swaying fronds, delicate leaflets and fine pixel light. An asymmetric studio landing page with artwork on the left.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"zephyr",name:"Zephyr",number:"21",headline:"Everything begins with a seed",color:"#e8e4d6",background:"#11110f",cover:"/motion/zephyr-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A silver seed head made of 150 radiating stems and delicate seed parachutes. A quiet editorial landing page with italic display typography.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"nereid",name:"Nereid",number:"20",headline:"Let your ideas drift further",color:"#9ccff2",background:"#070e1a",cover:"/motion/nereid-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"An electric blue jellyfish with a pulsing bell and 28 flowing tentacles, rendered through a fine LED screen. A nocturnal creative studio landing page.",tags:["Living geometry","Pointer response","Independent landing page"],chapters:["A living specimen","Our approach","In motion","Begin"]},{id:"burrow",name:"Burrow",number:"19",headline:"The light is under our feet.",color:"#ffd34d",background:"#1c1410",cover:"/motion/burrow-cover.jpg",category:"PIXEL ART / UNDERGROUND FABLE",description:"Scroll dives you into a mole's burrow and flies you forward through one winding voxel tunnel: a fossil ribcage, a blind river, a crystal hall, the tree's cold heart. Then the light rushes you back up and the hill blooms.",tags:["Into-the-screen flight","Voxel caverns + fossil","Inventory hotbar UI"],chapters:["The grey tree","Topsoil","The bone hall","The blind river","The crystal hall","The heart root","Bloom"]},{id:"cloudwhale",name:"Cloudwhale",number:"18",headline:"We have never touched the ground.",color:"#ffd34d",background:"#16193a",cover:"/motion/cloudwhale-cover.jpg",category:"PIXEL ART / VOXEL FABLE",description:"A town of twelve houses lives on the back of a 212-year-old sky whale. Ride out a storm, dive through the cloud sea, hear her sing, and watch the town move house, told in scroll-typed dialogue and palette-true pixel 3D.",tags:["Voxel whales + town","Palette-dithered pixel 3D","Scroll-typed RPG dialogue"],chapters:["The town on the whale","Old Silverback","The storm","Below the clouds","The song","The young one","Home"]},{id:"halcyon",name:"Halcyon",number:"15",headline:"The Living Layer For Creative Systems",color:"#efe6a4",background:"#141414",cover:"/motion/halcyon-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A product landing page whose hero is alive: an iridescent butterfly rendered in real time, seen through pastel ordered dither, glow and twinkling scales.",tags:["Real-time 3D butterfly","Bayer-dither look","SaaS landing layout"],chapters:["A living layer","Trusted by makers","How it works","A point of view","Start creating"]},{id:"bloomfield",name:"Bloomfield",number:"16",headline:"Grow Something Worth Keeping",color:"#e8e8e4",background:"#080808",cover:"/motion/bloomfield-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A monochrome meadow on a pixel grid. Daisies and cosmos unfurl as the page arrives, sway in travelling wind and lean away from your cursor.",tags:["Blooming 3D meadow","Mono pixel grid","Centred hero"],chapters:["Plant an idea","Why it grows","Grown by","In their words","Begin"]},{id:"aurelle",name:"Aurelle",number:"17",headline:"Design That Glows Before Words",color:"#ff4fae",background:"#0a0809",cover:"/motion/aurelle-cover.jpg",category:"LIVING ART / LANDING PAGE",description:"A studio landing page around a lotus lit from within. It breathes open and closed, smeared into vertical streaks of light with radiating god rays.",tags:["Breathing 3D lotus","Streak + god-ray look","Framed studio layout"],chapters:["Creative vision","Built with","Services","Process","Begin a project"]},{id:"goldseam",name:"Goldseam",number:"14",headline:"Some things mend in gold.",color:"#d9a54a",background:"#ebe3d5",cover:"/motion/goldseam-cover.jpg",category:"CRAFT / KINTSUGI STORY",description:"A tea bowl\u2019s whole life in one scroll. It slips from its plinth, shatters into thirteen real 3D fragments, is catalogued piece by piece, and is rebuilt with seams of gold.",tags:["Real-time fracture","Gold-dust repair","Seven-chapter story"],chapters:["Forty-one winters of tea.","It took less than a second.","Keep every piece.","Repair is a kind of patience.","Don\u2019t hide the break.","More beautiful for having been broken.","And tomorrow, tea."]},{id:"mosslight",name:"Mosslight",number:"13",headline:"A little world that listens.",color:"#9df5c9",background:"#03070b",cover:"/motion/mosslight-cover.jpg",category:"PIXEL HORIZON / INTERACTIVE SCENE",description:"An interactive listening grove: a radio observatory, ringed planet, fireflies and a lake that answers your cursor. Change the atmosphere, send a signal or carry the scene into your own site.",tags:["Living pixel horizon","Three atmospheres","Reusable web component"],chapters:["The listening grove"]},{id:"lightkeeper",name:"The Last Lightkeeper",number:"12",headline:"Carry the last light.",color:"#f3ad76",background:"#0b1720",cover:"/motion/lightkeeper-cover.jpg",category:"PIXEL FABLE / VOXEL WORLD",description:"A small keeper wakes an abandoned observatory. Ride the keeper\u2019s cable lift, restore the lenses, send a pulse to a sleeping village and follow its reply home at dawn.",tags:["Voxel architecture","Vertical story journey","GSAP + 3D"],chapters:["A window in the dark","The mountain remembers","Take the light below","One small light is enough","Give the dark an answer","One window. Then another","You were never the last"]},{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]},{id:"reverie",cover:"/motion/reverie-cover.jpg",number:"08",name:"Reverie",category:"ART / IMAGINED PLACES",headline:"Leave the ordinary behind.",description:"A passage through the impossible. Step inside a desert portal, turn the walls of a dream gallery, and piece together a place that only exists in your imagination.",color:"#b94d37",background:"#f0debd",tags:["Portal passage","Rotating dream gallery","Image assembly"],chapters:["The threshold","A different way of seeing","Rooms without rules","A place to keep"]},{id:"traverse",cover:"/motion/traverse-cover.jpg",number:"09",name:"Traverse",category:"EXPEDITION / ALPINE",headline:"A little further.",description:"An alpine story you move through. A fractured mountain panorama, a folding expedition map, and a glacier passage that opens onto the first light of a summit.",color:"#e1fc80",background:"#101e27",tags:["Fractured panorama","Folding terrain","Glacier-to-summit passage"],chapters:["Beyond the familiar","Find your own line","Through the blue","The long way up"]},{id:"nullsignal",name:"Null Signal",number:"10",headline:"A world between the lines.",color:"#c7eaa4",background:"#080b0b",cover:"/motion/nullsignal-cover.jpg",category:"ASCII / GLYPH OBSERVATORY",description:"A cabinet of character-built curiosities. Disassemble an ASCII armillary instrument, travel through a vaulted arcade, and draw a message from a scattered constellation.",tags:["ASCII sculpture","Depth-projected arcade","Character assembly"],chapters:["Anatomy of a signal","Inside the transmission","A message reassembled","Stay curious"]},{id:"bitquest",name:"Bitquest",number:"11",headline:"Beyond the edge of the map.",color:"#f0bb87",background:"#202940",cover:"/motion/bitquest-cover.jpg",category:"PIXEL ART / IMAGINED PLACES",description:"A hand-coded pixel expedition. Approach a floating clock-tower town, ride a moonlit railway, and unfold a seven-island atlas with a tiny traveler following your scroll.",tags:["Pixel town","Parallax railway","Unfolding island map"],chapters:["The skyward city","The midnight railway","An atlas of elsewhere","Make room for wonder"]}];function vy(r){return MA.some(e=>e.id===r)}ee.registerPlugin(yt);yt.config({ignoreMobileResize:!0});var gu=document.querySelector(".mt-page"),It=gu?.dataset.template,_u=r=>{parent!==window&&parent.postMessage(r,"*")};function EA(r,e){ee.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),ee.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:e?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:e?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),ee.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),ee.fromTo(".ae-reveal em",{x:e?30:150},{x:e?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),ee.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),ee.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),ee.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:e?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),ee.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),ee.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),ee.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function TA(r,e){ee.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(e?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(e?75:130):e?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),ee.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(e?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=ee.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(e?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{ee.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),ee.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ee.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),ee.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(e?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),ee.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),ee.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function SA(r,e){ee.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,ee.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(e?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:e?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),ee.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),ee.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),ee.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),ee.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(e?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:e?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:e?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),ee.from(".fl-season",{rotationY:e?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),ee.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),ee.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),ee.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function wA(r,e){ee.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),ee.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(e?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:e?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:e?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),ee.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),ee.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),ee.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:e?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),ee.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(e?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),ee.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),ee.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),ee.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),ee.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),_u({type:"motion-back",id:It})),r.key==="Tab"){let e=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===e.at(-1)?(r.preventDefault(),_u({type:"motion-focus",id:It,direction:"next"})):r.shiftKey&&document.activeElement===e[0]&&(r.preventDefault(),_u({type:"motion-focus",id:It,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(gu&&vy(It)){let r=ee.matchMedia(),e=-1;Promise.all([document.fonts.ready,...Array.from(gu.querySelectorAll("img[data-critical]")).map(t=>t.decode().catch(()=>{}))]).then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},t=>{let n=!!t.conditions?.reduce,i=!!t.conditions?.mobile;gu.classList.toggle("mt-reduced",n);let s=gu.querySelector(".mt-scene,.ns-scene"),o=s?It==="pelagic"||It==="heliograph"?new Pf(s,It,n):new Cf(s,It,n):void 0,a=x=>o?.render(x),l=It==="lightkeeper"?zv(n):void 0,c=l0(It)?gx(It,n):void 0,h=It==="burrow"?ux(n):void 0,u=It==="cloudwhale"?ix(n,i):void 0,f=It==="goldseam"?Kv(n,i):void 0,d=It==="overnight"?py(n,i):void 0,m=It==="atrium"?gy(n,i):void 0,p=It==="nullsignal"||It==="bitquest"?ay(n):void 0;n?o&&(o.pose.bloom=1,o.render(0)):(ee.ticker.add(a),It==="aether"&&o?EA(o,i):It==="offscript"&&o?TA(o,i):It==="floraison"&&o?SA(o,i):It==="monolith"&&o?wA(o,i):It==="reverie"||It==="traverse"?uy(It,i):!l0(It)&&It!=="burrow"&&It!=="cloudwhale"&&It!=="goldseam"&&It!=="lightkeeper"&&It!=="nullsignal"&&It!=="bitquest"&&It!=="overnight"&&It!=="atrium"&&_y(It,o,i),ee.utils.toArray(".mt-reveal").forEach(x=>ee.from(x,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:x,start:"top 85%",end:"top 30%",scrub:.8}})),ee.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let _=yt.create({start:0,end:"max",onUpdate:x=>{ee.set(".mt-progress i",{scaleX:x.progress}),Math.abs(e-x.progress)>.005&&(e=x.progress,_u({type:"motion-progress",id:It,progress:x.progress}))}}),g=!1,y=()=>{g||(g=!0,p?.(),d?.(),m?.(),l?.(),f?.(),u?.(),h?.(),c?.(),ee.ticker.remove(a),o?.dispose(),_.kill())};return window.addEventListener("pagehide",y,{once:!0}),requestAnimationFrame(()=>{yt.refresh(),document.documentElement.dataset.motionReady="true",_u({type:"motion-ready",id:It})}),()=>{y(),window.removeEventListener("pagehide",y)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
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
