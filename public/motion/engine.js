"use strict";(()=>{var tm=0,bd=1,em=2;var Za=1,nm=2,Do=3,xr=0,Sn=1,gi=2,tr=0,Ms=1,Sd=2,Td=3,Ed=4,im=5,Hr=100,rm=101,sm=102,om=103,am=104,lm=200,cm=201,hm=202,um=203,uc=204,dc=205,dm=206,fm=207,pm=208,mm=209,gm=210,_m=211,xm=212,vm=213,ym=214,Xc=0,qc=1,Yc=2,bs=3,Zc=4,$c=5,Jc=6,Kc=7,jc=0,Mm=1,bm=2,Xi=0,wd=1,Ad=2,Cd=3,Rs=4,Rd=5,Pd=6,Id=7;var Dd=300,$r=301,Ps=302,Qc=303,th=304,$a=306,fc=1e3,Ki=1001,pc=1002,xn=1003,Sm=1004;var Ja=1005;var Mn=1006,eh=1007;var Jr=1008;var ei=1009,Ld=1010,Nd=1011,Lo=1012,nh=1013,qi=1014,Ri=1015,er=1016,ih=1017,rh=1018,No=1020,Fd=35902,Ud=35899,Od=1021,Bd=1022,Pi=1023,ji=1026,Kr=1027,sh=1028,oh=1029,Is=1030,ah=1031;var lh=1033,Ka=33776,ja=33777,Qa=33778,tl=33779,ch=35840,hh=35841,uh=35842,dh=35843,fh=36196,ph=37492,mh=37496,gh=37488,_h=37489,xh=37490,vh=37491,yh=37808,Mh=37809,bh=37810,Sh=37811,Th=37812,Eh=37813,wh=37814,Ah=37815,Ch=37816,Rh=37817,Ph=37818,Ih=37819,Dh=37820,Lh=37821,Nh=36492,Fh=36494,Uh=36495,Oh=36283,Bh=36284,kh=36285,zh=36286;var va=2300,mc=2301,hc=2302,pd=2400,md=2401,gd=2402;var Tm=3200;var Vh=0,Em=1,Tr="",Qe="srgb",Ss="srgb-linear",ya="linear",be="srgb";var ys=7680;var _d=519,wm=512,Am=513,Cm=514,Hh=515,Rm=516,Pm=517,Gh=518,Im=519,gc=35044;var kd="300 es",Vi=2e3,Ma=2001;function zd(r){for(let t=r.length-1;t>=0;--t)if(r[t]>=65535)return!0;return!1}function x_(r){return ArrayBuffer.isView(r)&&!(r instanceof DataView)}function ba(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function Dm(){let r=ba("canvas");return r.style.display="block",r}var Cp={},To=null;function Sa(...r){let t="THREE."+r.shift();To?To("log",t,...r):console.log(t,...r)}function Jt(...r){let t="THREE."+r.shift();To?To("warn",t,...r):console.warn(t,...r)}function Yt(...r){let t="THREE."+r.shift();To?To("error",t,...r):console.error(t,...r)}function Eo(...r){let t=r.join(" ");t in Cp||(Cp[t]=!0,Jt(...r))}function Lm(r,t,e){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(t,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}var vr=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){let n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){let n=this._listeners;if(n===void 0)return;let i=n[t];if(i!==void 0){let s=i.indexOf(e);s!==-1&&i.splice(s,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let n=e[t.type];if(n!==void 0){t.target=this;let i=n.slice(0);for(let s=0,o=i.length;s<o;s++)i[s].call(this,t);t.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var zu=Math.PI/180,_c=180/Math.PI;function Vr(){let r=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pn[r&255]+Pn[r>>8&255]+Pn[r>>16&255]+Pn[r>>24&255]+"-"+Pn[t&255]+Pn[t>>8&255]+"-"+Pn[t>>16&15|64]+Pn[t>>24&255]+"-"+Pn[e&63|128]+Pn[e>>8&255]+"-"+Pn[e>>16&255]+Pn[e>>24&255]+Pn[n&255]+Pn[n>>8&255]+Pn[n>>16&255]+Pn[n>>24&255]).toLowerCase()}function ue(r,t,e){return Math.max(t,Math.min(e,r))}function v_(r,t){return(r%t+t)%t}function Vu(r,t,e){return(1-e)*r+e*t}function Ji(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Re(r,t){switch(t.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}var Dt=class r{constructor(t=0,e=0){r.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,n=this.y,i=t.elements;return this.x=i[0]*e+i[3]*n+i[6],this.y=i[1]*e+i[4]*n+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let n=Math.cos(e),i=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*i+t.x,this.y=s*i+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},yr=class{constructor(t=0,e=0,n=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=i}static slerpFlat(t,e,n,i,s,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3],f=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(a<=0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a>=1){t[e+0]=f,t[e+1]=d,t[e+2]=m,t[e+3]=g;return}if(h!==g||l!==f||c!==d||u!==m){let _=l*f+c*d+u*m+h*g;_<0&&(f=-f,d=-d,m=-m,g=-g,_=-_);let p=1-a;if(_<.9995){let y=Math.acos(_),v=Math.sin(y);p=Math.sin(p*y)/v,a=Math.sin(a*y)/v,l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+g*a}else{l=l*p+f*a,c=c*p+d*a,u=u*p+m*a,h=h*p+g*a;let y=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=y,c*=y,u*=y,h*=y}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,i,s,o){let a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=s[o],f=s[o+1],d=s[o+2],m=s[o+3];return t[e]=a*m+u*h+l*d-c*f,t[e+1]=l*m+u*f+c*h-a*d,t[e+2]=c*m+u*d+a*f-l*h,t[e+3]=u*m-a*h-l*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,i){return this._x=t,this._y=e,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let n=t._x,i=t._y,s=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(s/2),f=l(n/2),d=l(i/2),m=l(s/2);switch(o){case"XYZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"YXZ":this._x=f*u*h+c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"ZXY":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h-f*d*m;break;case"ZYX":this._x=f*u*h-c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h+f*d*m;break;case"YZX":this._x=f*u*h+c*d*m,this._y=c*d*h+f*u*m,this._z=c*u*m-f*d*h,this._w=c*u*h-f*d*m;break;case"XZY":this._x=f*u*h-c*d*m,this._y=c*d*h-f*u*m,this._z=c*u*m+f*d*h,this._w=c*u*h+f*d*m;break;default:Jt("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let n=e/2,i=Math.sin(n);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,n=e[0],i=e[4],s=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],f=n+a+h;if(f>0){let d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-l)*d,this._y=(s-c)*d,this._z=(o-i)*d}else if(n>a&&n>h){let d=2*Math.sqrt(1+n-a-h);this._w=(u-l)/d,this._x=.25*d,this._y=(i+o)/d,this._z=(s+c)/d}else if(a>h){let d=2*Math.sqrt(1+a-n-h);this._w=(s-c)/d,this._x=(i+o)/d,this._y=.25*d,this._z=(l+u)/d}else{let d=2*Math.sqrt(1+h-n-a);this._w=(o-i)/d,this._x=(s+c)/d,this._y=(l+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(ue(this.dot(t),-1,1)))}rotateTowards(t,e){let n=this.angleTo(t);if(n===0)return this;let i=Math.min(1,e/n);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let n=t._x,i=t._y,s=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=n*u+o*a+i*c-s*l,this._y=i*u+o*l+s*a-n*c,this._z=s*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-s*c,this._onChangeCallback(),this}slerp(t,e){if(e<=0)return this;if(e>=1)return this.copy(t);let n=t._x,i=t._y,s=t._z,o=t._w,a=this.dot(t);a<0&&(n=-n,i=-i,s=-s,o=-o,a=-a);let l=1-e;if(a<.9995){let c=Math.acos(a),u=Math.sin(c);l=Math.sin(l*c)/u,e=Math.sin(e*c)/u,this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this._onChangeCallback()}else this._x=this._x*l+n*e,this._y=this._y*l+i*e,this._z=this._z*l+s*e,this._w=this._w*l+o*e,this.normalize();return this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(t),i*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class r{constructor(t=0,e=0,n=0){r.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Rp.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Rp.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*i,this.y=s[1]*e+s[4]*n+s[7]*i,this.z=s[2]*e+s[5]*n+s[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*i+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*i+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*i+s[14])*o,this}applyQuaternion(t){let e=this.x,n=this.y,i=this.z,s=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*i-a*n),u=2*(a*e-s*i),h=2*(s*n-o*e);return this.x=e+l*c+o*h-a*u,this.y=n+l*u+a*c-s*h,this.z=i+l*h+s*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,n=this.y,i=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*i,this.y=s[1]*e+s[5]*n+s[9]*i,this.z=s[2]*e+s[6]*n+s[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let n=t.x,i=t.y,s=t.z,o=e.x,a=e.y,l=e.z;return this.x=i*l-s*a,this.y=s*o-n*l,this.z=n*a-i*o,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Hu.copy(this).projectOnVector(t),this.sub(Hu)}reflect(t){return this.sub(Hu.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let n=this.dot(t)/e;return Math.acos(ue(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,n=this.y-t.y,i=this.z-t.z;return e*e+n*n+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){let i=Math.sin(e)*t;return this.x=i*Math.sin(n),this.y=Math.cos(e)*t,this.z=i*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Hu=new U,Rp=new yr,ie=class r{constructor(t,e,n,i,s,o,a,l,c){r.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c)}set(t,e,n,i,s,o,a,l,c){let u=this.elements;return u[0]=t,u[1]=i,u[2]=a,u[3]=e,u[4]=s,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],m=n[8],g=i[0],_=i[3],p=i[6],y=i[1],v=i[4],M=i[7],T=i[2],E=i[5],w=i[8];return s[0]=o*g+a*y+l*T,s[3]=o*_+a*v+l*E,s[6]=o*p+a*M+l*w,s[1]=c*g+u*y+h*T,s[4]=c*_+u*v+h*E,s[7]=c*p+u*M+h*w,s[2]=f*g+d*y+m*T,s[5]=f*_+d*v+m*E,s[8]=f*p+d*M+m*w,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-n*s*u+n*a*l+i*s*c-i*o*l}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,f=a*l-u*s,d=c*s-o*l,m=e*h+n*f+i*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);let g=1/m;return t[0]=h*g,t[1]=(i*c-u*n)*g,t[2]=(a*n-i*o)*g,t[3]=f*g,t[4]=(u*e-i*l)*g,t[5]=(i*s-a*e)*g,t[6]=d*g,t[7]=(n*l-c*e)*g,t[8]=(o*e-n*s)*g,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,i,s,o,a){let l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-i*c,i*l,-i*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Gu.makeScale(t,e)),this}rotate(t){return this.premultiply(Gu.makeRotation(-t)),this}translate(t,e){return this.premultiply(Gu.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<9;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}},Gu=new ie,Pp=new ie().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ip=new ie().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function y_(){let r={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(i,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===be&&(i.r=_r(i.r),i.g=_r(i.g),i.b=_r(i.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===be&&(i.r=So(i.r),i.g=So(i.g),i.b=So(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Tr?ya:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,o){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Eo("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Eo("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[Ss]:{primaries:t,whitePoint:n,transfer:ya,toXYZ:Pp,fromXYZ:Ip,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:be,toXYZ:Pp,fromXYZ:Ip,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),r}var ge=y_();function _r(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function So(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}var so,xc=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{so===void 0&&(so=ba("canvas")),so.width=t.width,so.height=t.height;let i=so.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),n=so}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=ba("canvas");e.width=t.width,e.height=t.height;let n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);let i=n.getImageData(0,0,t.width,t.height),s=i.data;for(let o=0;o<s.length;o++)s[o]=_r(s[o]/255)*255;return n.putImageData(i,0,0),e}else if(t.data){let e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(_r(e[n]/255)*255):e[n]=_r(e[n]);return{data:e,width:t.width,height:t.height}}else return Jt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},M_=0,wo=class{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:M_++}),this.uuid=Vr(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?s.push(Wu(i[o].image)):s.push(Wu(i[o]))}else s=Wu(i);n.url=s}return e||(t.images[this.uuid]=n),n}};function Wu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xc.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(Jt("Texture: Unable to serialize Texture."),{})}var b_=0,Xu=new U,Hn=class r extends vr{constructor(t=r.DEFAULT_IMAGE,e=r.DEFAULT_MAPPING,n=Ki,i=Ki,s=Mn,o=Jr,a=Pi,l=ei,c=r.DEFAULT_ANISOTROPY,u=Tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:b_++}),this.uuid=Vr(),this.name="",this.source=new wo(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ie,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Xu).x}get height(){return this.source.getSize(Xu).y}get depth(){return this.source.getSize(Xu).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let n=t[e];if(n===void 0){Jt(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Texture.setValues(): property '${e}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Dd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case fc:t.x=t.x-Math.floor(t.x);break;case Ki:t.x=t.x<0?0:1;break;case pc:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case fc:t.y=t.y-Math.floor(t.y);break;case Ki:t.y=t.y<0?0:1;break;case pc:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=Dd;Hn.DEFAULT_ANISOTROPY=1;var Ge=class r{constructor(t=0,e=0,n=0,i=1){r.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,i){return this.x=t,this.y=e,this.z=n,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,n=this.y,i=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*i+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*i+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*i+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*i+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,i,s,l=t.elements,c=l[0],u=l[4],h=l[8],f=l[1],d=l[5],m=l[9],g=l[2],_=l[6],p=l[10];if(Math.abs(u-f)<.01&&Math.abs(h-g)<.01&&Math.abs(m-_)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+g)<.1&&Math.abs(m+_)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let v=(c+1)/2,M=(d+1)/2,T=(p+1)/2,E=(u+f)/4,w=(h+g)/4,R=(m+_)/4;return v>M&&v>T?v<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(v),i=E/n,s=w/n):M>T?M<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(M),n=E/i,s=R/i):T<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(T),n=w/s,i=R/s),this.set(n,i,s,e),this}let y=Math.sqrt((_-m)*(_-m)+(h-g)*(h-g)+(f-u)*(f-u));return Math.abs(y)<.001&&(y=1),this.x=(_-m)/y,this.y=(h-g)/y,this.z=(f-u)/y,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=ue(this.x,t.x,e.x),this.y=ue(this.y,t.y,e.y),this.z=ue(this.z,t.z,e.z),this.w=ue(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=ue(this.x,t,e),this.y=ue(this.y,t,e),this.z=ue(this.z,t,e),this.w=ue(this.w,t,e),this}clampLength(t,e){let n=this.length();return this.divideScalar(n||1).multiplyScalar(ue(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},vc=class extends vr{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new Ge(0,0,t,e),this.scissorTest=!1,this.viewport=new Ge(0,0,t,e);let i={width:t,height:e,depth:n.depth},s=new Hn(i);this.textures=[];let o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){let e={minFilter:Mn,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let i=Object.assign({},t.textures[e].image);this.textures[e].source=new wo(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},di=class extends vc{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}},Ta=class extends Hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Hn{constructor(t=null,e=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:i},this.magFilter=xn,this.minFilter=xn,this.wrapR=Ki,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Qi=class{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Bi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Bi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let n=Bi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let n=t.geometry;if(n!==void 0){let s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Bi):Bi.fromBufferAttribute(s,o),Bi.applyMatrix4(t.matrixWorld),this.expandByPoint(Bi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),kl.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),kl.copy(n.boundingBox)),kl.applyMatrix4(t.matrixWorld),this.union(kl)}let i=t.children;for(let s=0,o=i.length;s<o;s++)this.expandByObject(i[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Bi),Bi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(la),zl.subVectors(this.max,la),oo.subVectors(t.a,la),ao.subVectors(t.b,la),lo.subVectors(t.c,la),Fr.subVectors(ao,oo),Ur.subVectors(lo,ao),gs.subVectors(oo,lo);let e=[0,-Fr.z,Fr.y,0,-Ur.z,Ur.y,0,-gs.z,gs.y,Fr.z,0,-Fr.x,Ur.z,0,-Ur.x,gs.z,0,-gs.x,-Fr.y,Fr.x,0,-Ur.y,Ur.x,0,-gs.y,gs.x,0];return!qu(e,oo,ao,lo,zl)||(e=[1,0,0,0,1,0,0,0,1],!qu(e,oo,ao,lo,zl))?!1:(Vl.crossVectors(Fr,Ur),e=[Vl.x,Vl.y,Vl.z],qu(e,oo,ao,lo,zl))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Bi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Bi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ur),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},ur=[new U,new U,new U,new U,new U,new U,new U,new U],Bi=new U,kl=new Qi,oo=new U,ao=new U,lo=new U,Fr=new U,Ur=new U,gs=new U,la=new U,zl=new U,Vl=new U,_s=new U;function qu(r,t,e,n,i){for(let s=0,o=r.length-3;s<=o;s+=3){_s.fromArray(r,s);let a=i.x*Math.abs(_s.x)+i.y*Math.abs(_s.y)+i.z*Math.abs(_s.z),l=t.dot(_s),c=e.dot(_s),u=n.dot(_s);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}var S_=new Qi,ca=new U,Yu=new U,Mr=class{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let n=this.center;e!==void 0?n.copy(e):S_.setFromPoints(t).getCenter(n);let i=0;for(let s=0,o=t.length;s<o;s++)i=Math.max(i,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ca.subVectors(t,this.center);let e=ca.lengthSq();if(e>this.radius*this.radius){let n=Math.sqrt(e),i=(n-this.radius)*.5;this.center.addScaledVector(ca,i/n),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yu.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ca.copy(t.center).add(Yu)),this.expandByPoint(ca.copy(t.center).sub(Yu))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},dr=new U,Zu=new U,Hl=new U,Or=new U,$u=new U,Gl=new U,Ju=new U,Ea=class{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,dr)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=dr.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(dr.copy(this.origin).addScaledVector(this.direction,e),dr.distanceToSquared(t))}distanceSqToSegment(t,e,n,i){Zu.copy(t).add(e).multiplyScalar(.5),Hl.copy(e).sub(t).normalize(),Or.copy(this.origin).sub(Zu);let s=t.distanceTo(e)*.5,o=-this.direction.dot(Hl),a=Or.dot(this.direction),l=-Or.dot(Hl),c=Or.lengthSq(),u=Math.abs(1-o*o),h,f,d,m;if(u>0)if(h=o*l-a,f=o*a-l,m=s*u,h>=0)if(f>=-m)if(f<=m){let g=1/u;h*=g,f*=g,d=h*(h+o*f+2*a)+f*(o*h+f+2*l)+c}else f=s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f=-s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;else f<=-m?(h=Math.max(0,-(-o*s+a)),f=h>0?-s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c):f<=m?(h=0,f=Math.min(Math.max(-s,-l),s),d=f*(f+2*l)+c):(h=Math.max(0,-(o*s+a)),f=h>0?s:Math.min(Math.max(-s,-l),s),d=-h*h+f*(f+2*l)+c);else f=o>0?-s:s,h=Math.max(0,-(o*f+a)),d=-h*h+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Zu).addScaledVector(Hl,f),d}intersectSphere(t,e){dr.subVectors(t.center,this.origin);let n=dr.dot(this.direction),i=dr.dot(dr)-n*n,s=t.radius*t.radius;if(i>s)return null;let o=Math.sqrt(s-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){let n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,i,s,o,a,l,c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,i=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,i=(t.min.x-f.x)*c),u>=0?(s=(t.min.y-f.y)*u,o=(t.max.y-f.y)*u):(s=(t.max.y-f.y)*u,o=(t.min.y-f.y)*u),n>o||s>i||((s>n||isNaN(n))&&(n=s),(o<i||isNaN(i))&&(i=o),h>=0?(a=(t.min.z-f.z)*h,l=(t.max.z-f.z)*h):(a=(t.max.z-f.z)*h,l=(t.min.z-f.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,e)}intersectsBox(t){return this.intersectBox(t,dr)!==null}intersectTriangle(t,e,n,i,s){$u.subVectors(e,t),Gl.subVectors(n,t),Ju.crossVectors($u,Gl);let o=this.direction.dot(Ju),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Or.subVectors(this.origin,t);let l=a*this.direction.dot(Gl.crossVectors(Or,Gl));if(l<0)return null;let c=a*this.direction.dot($u.cross(Or));if(c<0||l+c>o)return null;let u=-a*Or.dot(Ju);return u<0?null:this.at(u/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Pe=class r{constructor(t,e,n,i,s,o,a,l,c,u,h,f,d,m,g,_){r.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,i,s,o,a,l,c,u,h,f,d,m,g,_)}set(t,e,n,i,s,o,a,l,c,u,h,f,d,m,g,_){let p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=i,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=m,p[11]=g,p[15]=_,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new r().fromArray(this.elements)}copy(t){let e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){let e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return this.determinant()===0?(t.set(1,0,0),e.set(0,1,0),n.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){if(t.determinant()===0)return this.identity();let e=this.elements,n=t.elements,i=1/co.setFromMatrixColumn(t,0).length(),s=1/co.setFromMatrixColumn(t,1).length(),o=1/co.setFromMatrixColumn(t,2).length();return e[0]=n[0]*i,e[1]=n[1]*i,e[2]=n[2]*i,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,n=t.x,i=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(s),h=Math.sin(s);if(t.order==="XYZ"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=d+m*c,e[5]=f-g*c,e[9]=-a*l,e[2]=g-f*c,e[6]=m+d*c,e[10]=o*l}else if(t.order==="YXZ"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f+g*a,e[4]=m*a-d,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=d*a-m,e[6]=g+f*a,e[10]=o*l}else if(t.order==="ZXY"){let f=l*u,d=l*h,m=c*u,g=c*h;e[0]=f-g*a,e[4]=-o*h,e[8]=m+d*a,e[1]=d+m*a,e[5]=o*u,e[9]=g-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){let f=o*u,d=o*h,m=a*u,g=a*h;e[0]=l*u,e[4]=m*c-d,e[8]=f*c+g,e[1]=l*h,e[5]=g*c+f,e[9]=d*c-m,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=g-f*h,e[8]=m*h+d,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=d*h+m,e[10]=f-g*h}else if(t.order==="XZY"){let f=o*l,d=o*c,m=a*l,g=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=f*h+g,e[5]=o*u,e[9]=d*h-m,e[2]=m*h-d,e[6]=a*u,e[10]=g*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(T_,t,E_)}lookAt(t,e,n){let i=this.elements;return hi.subVectors(t,e),hi.lengthSq()===0&&(hi.z=1),hi.normalize(),Br.crossVectors(n,hi),Br.lengthSq()===0&&(Math.abs(n.z)===1?hi.x+=1e-4:hi.z+=1e-4,hi.normalize(),Br.crossVectors(n,hi)),Br.normalize(),Wl.crossVectors(hi,Br),i[0]=Br.x,i[4]=Wl.x,i[8]=hi.x,i[1]=Br.y,i[5]=Wl.y,i[9]=hi.y,i[2]=Br.z,i[6]=Wl.z,i[10]=hi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let n=t.elements,i=e.elements,s=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],m=n[2],g=n[6],_=n[10],p=n[14],y=n[3],v=n[7],M=n[11],T=n[15],E=i[0],w=i[4],R=i[8],x=i[12],b=i[1],L=i[5],F=i[9],k=i[13],H=i[2],Y=i[6],W=i[10],G=i[14],Z=i[3],it=i[7],N=i[11],nt=i[15];return s[0]=o*E+a*b+l*H+c*Z,s[4]=o*w+a*L+l*Y+c*it,s[8]=o*R+a*F+l*W+c*N,s[12]=o*x+a*k+l*G+c*nt,s[1]=u*E+h*b+f*H+d*Z,s[5]=u*w+h*L+f*Y+d*it,s[9]=u*R+h*F+f*W+d*N,s[13]=u*x+h*k+f*G+d*nt,s[2]=m*E+g*b+_*H+p*Z,s[6]=m*w+g*L+_*Y+p*it,s[10]=m*R+g*F+_*W+p*N,s[14]=m*x+g*k+_*G+p*nt,s[3]=y*E+v*b+M*H+T*Z,s[7]=y*w+v*L+M*Y+T*it,s[11]=y*R+v*F+M*W+T*N,s[15]=y*x+v*k+M*G+T*nt,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],n=t[4],i=t[8],s=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],m=t[3],g=t[7],_=t[11],p=t[15],y=l*d-c*f,v=a*d-c*h,M=a*f-l*h,T=o*d-c*u,E=o*f-l*u,w=o*h-a*u;return e*(g*y-_*v+p*M)-n*(m*y-_*T+p*E)+i*(m*v-g*T+p*w)-s*(m*M-g*E+_*w)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){let i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=n),this}invert(){let t=this.elements,e=t[0],n=t[1],i=t[2],s=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],m=t[12],g=t[13],_=t[14],p=t[15],y=h*_*c-g*f*c+g*l*d-a*_*d-h*l*p+a*f*p,v=m*f*c-u*_*c-m*l*d+o*_*d+u*l*p-o*f*p,M=u*g*c-m*h*c+m*a*d-o*g*d-u*a*p+o*h*p,T=m*h*l-u*g*l-m*a*f+o*g*f+u*a*_-o*h*_,E=e*y+n*v+i*M+s*T;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let w=1/E;return t[0]=y*w,t[1]=(g*f*s-h*_*s-g*i*d+n*_*d+h*i*p-n*f*p)*w,t[2]=(a*_*s-g*l*s+g*i*c-n*_*c-a*i*p+n*l*p)*w,t[3]=(h*l*s-a*f*s-h*i*c+n*f*c+a*i*d-n*l*d)*w,t[4]=v*w,t[5]=(u*_*s-m*f*s+m*i*d-e*_*d-u*i*p+e*f*p)*w,t[6]=(m*l*s-o*_*s-m*i*c+e*_*c+o*i*p-e*l*p)*w,t[7]=(o*f*s-u*l*s+u*i*c-e*f*c-o*i*d+e*l*d)*w,t[8]=M*w,t[9]=(m*h*s-u*g*s-m*n*d+e*g*d+u*n*p-e*h*p)*w,t[10]=(o*g*s-m*a*s+m*n*c-e*g*c-o*n*p+e*a*p)*w,t[11]=(u*a*s-o*h*s-u*n*c+e*h*c+o*n*d-e*a*d)*w,t[12]=T*w,t[13]=(u*g*i-m*h*i+m*n*f-e*g*f-u*n*_+e*h*_)*w,t[14]=(m*a*i-o*g*i-m*n*l+e*g*l+o*n*_-e*a*_)*w,t[15]=(o*h*i-u*a*i+u*n*l-e*h*l-o*n*f+e*a*f)*w,this}scale(t){let e=this.elements,n=t.x,i=t.y,s=t.z;return e[0]*=n,e[4]*=i,e[8]*=s,e[1]*=n,e[5]*=i,e[9]*=s,e[2]*=n,e[6]*=i,e[10]*=s,e[3]*=n,e[7]*=i,e[11]*=s,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,i))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let n=Math.cos(e),i=Math.sin(e),s=1-n,o=t.x,a=t.y,l=t.z,c=s*o,u=s*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,s*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,i,s,o){return this.set(1,n,s,0,t,1,o,0,e,i,1,0,0,0,0,1),this}compose(t,e,n){let i=this.elements,s=e._x,o=e._y,a=e._z,l=e._w,c=s+s,u=o+o,h=a+a,f=s*c,d=s*u,m=s*h,g=o*u,_=o*h,p=a*h,y=l*c,v=l*u,M=l*h,T=n.x,E=n.y,w=n.z;return i[0]=(1-(g+p))*T,i[1]=(d+M)*T,i[2]=(m-v)*T,i[3]=0,i[4]=(d-M)*E,i[5]=(1-(f+p))*E,i[6]=(_+y)*E,i[7]=0,i[8]=(m+v)*w,i[9]=(_-y)*w,i[10]=(1-(f+g))*w,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,n){let i=this.elements;if(t.x=i[12],t.y=i[13],t.z=i[14],this.determinant()===0)return n.set(1,1,1),e.identity(),this;let s=co.set(i[0],i[1],i[2]).length(),o=co.set(i[4],i[5],i[6]).length(),a=co.set(i[8],i[9],i[10]).length();this.determinant()<0&&(s=-s),ki.copy(this);let c=1/s,u=1/o,h=1/a;return ki.elements[0]*=c,ki.elements[1]*=c,ki.elements[2]*=c,ki.elements[4]*=u,ki.elements[5]*=u,ki.elements[6]*=u,ki.elements[8]*=h,ki.elements[9]*=h,ki.elements[10]*=h,e.setFromRotationMatrix(ki),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,i,s,o,a=Vi,l=!1){let c=this.elements,u=2*s/(e-t),h=2*s/(n-i),f=(e+t)/(e-t),d=(n+i)/(n-i),m,g;if(l)m=s/(o-s),g=o*s/(o-s);else if(a===Vi)m=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Ma)m=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=h,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,n,i,s,o,a=Vi,l=!1){let c=this.elements,u=2/(e-t),h=2/(n-i),f=-(e+t)/(e-t),d=-(n+i)/(n-i),m,g;if(l)m=1/(o-s),g=o/(o-s);else if(a===Vi)m=-2/(o-s),g=-(o+s)/(o-s);else if(a===Ma)m=-1/(o-s),g=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=u,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=h,c[9]=0,c[13]=d,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,n=t.elements;for(let i=0;i<16;i++)if(e[i]!==n[i])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){let n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}},co=new U,ki=new Pe,T_=new U(0,0,0),E_=new U(1,1,1),Br=new U,Wl=new U,hi=new U,Dp=new Pe,Lp=new yr,Ai=class r{constructor(t=0,e=0,n=0,i=r.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,i=this._order){return this._x=t,this._y=e,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){let i=t.elements,s=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],f=i[6],d=i[10];switch(e){case"XYZ":this._y=Math.asin(ue(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-ue(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(ue(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-ue(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(ue(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-ue(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:Jt("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Dp.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Dp,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Lp.setFromEuler(this),this.setFromQuaternion(Lp,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ai.DEFAULT_ORDER="XYZ";var wa=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},w_=0,Np=new U,ho=new yr,fr=new Pe,Xl=new U,ha=new U,A_=new U,C_=new yr,Fp=new U(1,0,0),Up=new U(0,1,0),Op=new U(0,0,1),Bp={type:"added"},R_={type:"removed"},uo={type:"childadded",child:null},Ku={type:"childremoved",child:null},tn=class r extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:w_++}),this.uuid=Vr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=r.DEFAULT_UP.clone();let t=new U,e=new Ai,n=new yr,i=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Pe},normalMatrix:{value:new ie}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=r.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=r.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ho.setFromAxisAngle(t,e),this.quaternion.multiply(ho),this}rotateOnWorldAxis(t,e){return ho.setFromAxisAngle(t,e),this.quaternion.premultiply(ho),this}rotateX(t){return this.rotateOnAxis(Fp,t)}rotateY(t){return this.rotateOnAxis(Up,t)}rotateZ(t){return this.rotateOnAxis(Op,t)}translateOnAxis(t,e){return Np.copy(t).applyQuaternion(this.quaternion),this.position.add(Np.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Fp,t)}translateY(t){return this.translateOnAxis(Up,t)}translateZ(t){return this.translateOnAxis(Op,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(fr.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Xl.copy(t):Xl.set(t,e,n);let i=this.parent;this.updateWorldMatrix(!0,!1),ha.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?fr.lookAt(ha,Xl,this.up):fr.lookAt(Xl,ha,this.up),this.quaternion.setFromRotationMatrix(fr),i&&(fr.extractRotation(i.matrixWorld),ho.setFromRotationMatrix(fr),this.quaternion.premultiply(ho.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(Yt("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Bp),uo.child=t,this.dispatchEvent(uo),uo.child=null):Yt("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(R_),Ku.child=t,this.dispatchEvent(Ku),Ku.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),fr.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),fr.multiply(t.parent.matrixWorld)),t.applyMatrix4(fr),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Bp),uo.child=t,this.dispatchEvent(uo),uo.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,i=this.children.length;n<i;n++){let o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,t,A_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ha,C_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let n=0,i=e.length;n<i;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){let n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){let i=this.children;for(let s=0,o=i.length;s<o;s++)i[s].updateWorldMatrix(!1,!0)}}toJSON(t){let e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(t.geometries,this.geometry);let a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){let l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){let h=l[c];s(t.shapes,h)}else s(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(t.materials,this.material[l]));i.material=a}else i.material=s(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){let l=this.animations[a];i.animations.push(s(t.animations,l))}}if(e){let a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),f=o(t.skeletons),d=o(t.animations),m=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=i,n;function o(a){let l=[];for(let c in a){let u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){let i=t.children[n];this.add(i.clone())}return this}};tn.DEFAULT_UP=new U(0,1,0);tn.DEFAULT_MATRIX_AUTO_UPDATE=!0;tn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var zi=new U,pr=new U,ju=new U,mr=new U,fo=new U,po=new U,kp=new U,Qu=new U,td=new U,ed=new U,nd=new Ge,id=new Ge,rd=new Ge,gr=class r{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,i){i.subVectors(n,e),zi.subVectors(t,e),i.cross(zi);let s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(t,e,n,i,s){zi.subVectors(i,e),pr.subVectors(n,e),ju.subVectors(t,e);let o=zi.dot(zi),a=zi.dot(pr),l=zi.dot(ju),c=pr.dot(pr),u=pr.dot(ju),h=o*c-a*a;if(h===0)return s.set(0,0,0),null;let f=1/h,d=(c*l-a*u)*f,m=(o*u-a*l)*f;return s.set(1-d-m,m,d)}static containsPoint(t,e,n,i){return this.getBarycoord(t,e,n,i,mr)===null?!1:mr.x>=0&&mr.y>=0&&mr.x+mr.y<=1}static getInterpolation(t,e,n,i,s,o,a,l){return this.getBarycoord(t,e,n,i,mr)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,mr.x),l.addScaledVector(o,mr.y),l.addScaledVector(a,mr.z),l)}static getInterpolatedAttribute(t,e,n,i,s,o){return nd.setScalar(0),id.setScalar(0),rd.setScalar(0),nd.fromBufferAttribute(t,e),id.fromBufferAttribute(t,n),rd.fromBufferAttribute(t,i),o.setScalar(0),o.addScaledVector(nd,s.x),o.addScaledVector(id,s.y),o.addScaledVector(rd,s.z),o}static isFrontFacing(t,e,n,i){return zi.subVectors(n,e),pr.subVectors(t,e),zi.cross(pr).dot(i)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,i){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,n,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return zi.subVectors(this.c,this.b),pr.subVectors(this.a,this.b),zi.cross(pr).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return r.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return r.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,i,s){return r.getInterpolation(t,this.a,this.b,this.c,e,n,i,s)}containsPoint(t){return r.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return r.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let n=this.a,i=this.b,s=this.c,o,a;fo.subVectors(i,n),po.subVectors(s,n),Qu.subVectors(t,n);let l=fo.dot(Qu),c=po.dot(Qu);if(l<=0&&c<=0)return e.copy(n);td.subVectors(t,i);let u=fo.dot(td),h=po.dot(td);if(u>=0&&h<=u)return e.copy(i);let f=l*h-u*c;if(f<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(n).addScaledVector(fo,o);ed.subVectors(t,s);let d=fo.dot(ed),m=po.dot(ed);if(m>=0&&d<=m)return e.copy(s);let g=d*c-l*m;if(g<=0&&c>=0&&m<=0)return a=c/(c-m),e.copy(n).addScaledVector(po,a);let _=u*m-d*h;if(_<=0&&h-u>=0&&d-m>=0)return kp.subVectors(s,i),a=(h-u)/(h-u+(d-m)),e.copy(i).addScaledVector(kp,a);let p=1/(_+g+f);return o=g*p,a=f*p,e.copy(n).addScaledVector(fo,o).addScaledVector(po,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},kr={h:0,s:0,l:0},ql={h:0,s:0,l:0};function sd(r,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?r+(t-r)*6*e:e<1/2?t:e<2/3?r+(t-r)*6*(2/3-e):r}var jt=class{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){let i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ge.colorSpaceToWorking(this,e),this}setRGB(t,e,n,i=ge.workingColorSpace){return this.r=t,this.g=e,this.b=n,ge.colorSpaceToWorking(this,i),this}setHSL(t,e,n,i=ge.workingColorSpace){if(t=v_(t,1),e=ue(e,0,1),n=ue(n,0,1),e===0)this.r=this.g=this.b=n;else{let s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=sd(o,s,t+1/3),this.g=sd(o,s,t),this.b=sd(o,s,t-1/3)}return ge.colorSpaceToWorking(this,i),this}setStyle(t,e=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&Jt("Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let s,o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:Jt("Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){let s=i[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);Jt("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){let n=Nm[t.toLowerCase()];return n!==void 0?this.setHex(n,e):Jt("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=_r(t.r),this.g=_r(t.g),this.b=_r(t.b),this}copyLinearToSRGB(t){return this.r=So(t.r),this.g=So(t.g),this.b=So(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return ge.workingToColorSpace(In.copy(this),t),Math.round(ue(In.r*255,0,255))*65536+Math.round(ue(In.g*255,0,255))*256+Math.round(ue(In.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ge.workingColorSpace){ge.workingToColorSpace(In.copy(this),e);let n=In.r,i=In.g,s=In.b,o=Math.max(n,i,s),a=Math.min(n,i,s),l,c,u=(a+o)/2;if(a===o)l=0,c=0;else{let h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-s)/h+(i<s?6:0);break;case i:l=(s-n)/h+2;break;case s:l=(n-i)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=ge.workingColorSpace){return ge.workingToColorSpace(In.copy(this),e),t.r=In.r,t.g=In.g,t.b=In.b,t}getStyle(t=Qe){ge.workingToColorSpace(In.copy(this),t);let e=In.r,n=In.g,i=In.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(t,e,n){return this.getHSL(kr),this.setHSL(kr.h+t,kr.s+e,kr.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(kr),t.getHSL(ql);let n=Vu(kr.h,ql.h,e),i=Vu(kr.s,ql.s,e),s=Vu(kr.l,ql.l,e);return this.setHSL(n,i,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,n=this.g,i=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*i,this.g=s[1]*e+s[4]*n+s[7]*i,this.b=s[2]*e+s[5]*n+s[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},In=new jt;jt.NAMES=Nm;var P_=0,Hi=class extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:P_++}),this.uuid=Vr(),this.name="",this.type="Material",this.blending=Ms,this.side=xr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=uc,this.blendDst=dc,this.blendEquation=Hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new jt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=_d,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ys,this.stencilZFail=ys,this.stencilZPass=ys,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let n=t[e];if(n===void 0){Jt(`Material: parameter '${e}' has value of undefined.`);continue}let i=this[e];if(i===void 0){Jt(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[e]=n}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Ms&&(n.blending=this.blending),this.side!==xr&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==uc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Hr&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==_d&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ys&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ys&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ys&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.allowOverride===!1&&(n.allowOverride=!1),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){let o=[];for(let a in s){let l=s[a];delete l.metadata,o.push(l)}return o}if(e){let s=i(t.textures),o=i(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,n=null;if(e!==null){let i=e.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},Gr=class extends Hi{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}};var rn=new U,Yl=new Dt,I_=0,hn=class{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:I_++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=gc,this.updateRanges=[],this.gpuType=Ri,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[t+i]=e.array[n+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Yl.fromBufferAttribute(this,e),Yl.applyMatrix3(t),this.setXY(e,Yl.x,Yl.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix3(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyMatrix4(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.applyNormalMatrix(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)rn.fromBufferAttribute(this,e),rn.transformDirection(t),this.setXYZ(e,rn.x,rn.y,rn.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Ji(e,this.array)),e}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Ji(e,this.array)),e}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Ji(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Ji(e,this.array)),e}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,i){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t*=this.itemSize,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=i,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==gc&&(t.usage=this.usage),t}};var Aa=class extends hn{constructor(t,e,n){super(new Uint16Array(t),e,n)}};var Ca=class extends hn{constructor(t,e,n){super(new Uint32Array(t),e,n)}};var fe=class extends hn{constructor(t,e,n){super(new Float32Array(t),e,n)}},D_=0,wi=new Pe,od=new tn,mo=new U,ui=new Qi,ua=new Qi,_n=new U,ze=class r extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:D_++}),this.uuid=Vr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zd(t)?Ca:Aa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let s=new ie().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}let i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return wi.makeRotationFromQuaternion(t),this.applyMatrix4(wi),this}rotateX(t){return wi.makeRotationX(t),this.applyMatrix4(wi),this}rotateY(t){return wi.makeRotationY(t),this.applyMatrix4(wi),this}rotateZ(t){return wi.makeRotationZ(t),this.applyMatrix4(wi),this}translate(t,e,n){return wi.makeTranslation(t,e,n),this.applyMatrix4(wi),this}scale(t,e,n){return wi.makeScale(t,e,n),this.applyMatrix4(wi),this}lookAt(t){return od.lookAt(t),od.updateMatrix(),this.applyMatrix4(od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(mo).negate(),this.translate(mo.x,mo.y,mo.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let n=[];for(let i=0,s=t.length;i<s;i++){let o=t[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new fe(n,3))}else{let n=Math.min(t.length,e.count);for(let i=0;i<n;i++){let s=t[i];e.setXYZ(i,s.x,s.y,s.z||0)}t.length>e.count&&Jt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qi);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,i=e.length;n<i;n++){let s=e[n];ui.setFromBufferAttribute(s),this.morphTargetsRelative?(_n.addVectors(this.boundingBox.min,ui.min),this.boundingBox.expandByPoint(_n),_n.addVectors(this.boundingBox.max,ui.max),this.boundingBox.expandByPoint(_n)):(this.boundingBox.expandByPoint(ui.min),this.boundingBox.expandByPoint(ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Yt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mr);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){Yt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){let n=this.boundingSphere.center;if(ui.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){let a=e[s];ua.setFromBufferAttribute(a),this.morphTargetsRelative?(_n.addVectors(ui.min,ua.min),ui.expandByPoint(_n),_n.addVectors(ui.max,ua.max),ui.expandByPoint(_n)):(ui.expandByPoint(ua.min),ui.expandByPoint(ua.max))}ui.getCenter(n);let i=0;for(let s=0,o=t.count;s<o;s++)_n.fromBufferAttribute(t,s),i=Math.max(i,n.distanceToSquared(_n));if(e)for(let s=0,o=e.length;s<o;s++){let a=e[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)_n.fromBufferAttribute(a,c),l&&(mo.fromBufferAttribute(t,c),_n.add(mo)),i=Math.max(i,n.distanceToSquared(_n))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&Yt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){Yt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=e.position,i=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new hn(new Float32Array(4*n.count),4));let o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new U,l[R]=new U;let c=new U,u=new U,h=new U,f=new Dt,d=new Dt,m=new Dt,g=new U,_=new U;function p(R,x,b){c.fromBufferAttribute(n,R),u.fromBufferAttribute(n,x),h.fromBufferAttribute(n,b),f.fromBufferAttribute(s,R),d.fromBufferAttribute(s,x),m.fromBufferAttribute(s,b),u.sub(c),h.sub(c),d.sub(f),m.sub(f);let L=1/(d.x*m.y-m.x*d.y);isFinite(L)&&(g.copy(u).multiplyScalar(m.y).addScaledVector(h,-d.y).multiplyScalar(L),_.copy(h).multiplyScalar(d.x).addScaledVector(u,-m.x).multiplyScalar(L),a[R].add(g),a[x].add(g),a[b].add(g),l[R].add(_),l[x].add(_),l[b].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,x=y.length;R<x;++R){let b=y[R],L=b.start,F=b.count;for(let k=L,H=L+F;k<H;k+=3)p(t.getX(k+0),t.getX(k+1),t.getX(k+2))}let v=new U,M=new U,T=new U,E=new U;function w(R){T.fromBufferAttribute(i,R),E.copy(T);let x=a[R];v.copy(x),v.sub(T.multiplyScalar(T.dot(x))).normalize(),M.crossVectors(E,x);let L=M.dot(l[R])<0?-1:1;o.setXYZW(R,v.x,v.y,v.z,L)}for(let R=0,x=y.length;R<x;++R){let b=y[R],L=b.start,F=b.count;for(let k=L,H=L+F;k<H;k+=3)w(t.getX(k+0)),w(t.getX(k+1)),w(t.getX(k+2))}}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new hn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);let i=new U,s=new U,o=new U,a=new U,l=new U,c=new U,u=new U,h=new U;if(t)for(let f=0,d=t.count;f<d;f+=3){let m=t.getX(f+0),g=t.getX(f+1),_=t.getX(f+2);i.fromBufferAttribute(e,m),s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,_),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),a.fromBufferAttribute(n,m),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),a.add(u),l.add(u),c.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)i.fromBufferAttribute(e,f+0),s.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),u.subVectors(o,s),h.subVectors(i,s),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)_n.fromBufferAttribute(t,e),_n.normalize(),t.setXYZ(e,_n.x,_n.y,_n.z)}toNonIndexed(){function t(a,l){let c=a.array,u=a.itemSize,h=a.normalized,f=new c.constructor(l.length*u),d=0,m=0;for(let g=0,_=l.length;g<_;g++){a.isInterleavedBufferAttribute?d=l[g]*a.data.stride+a.offset:d=l[g]*u;for(let p=0;p<u;p++)f[m++]=c[d++]}return new hn(f,u,h)}if(this.index===null)return Jt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new r,n=this.index.array,i=this.attributes;for(let a in i){let l=i[a],c=t(l,n);e.setAttribute(a,c)}let s=this.morphAttributes;for(let a in s){let l=[],c=s[a];for(let u=0,h=c.length;u<h;u++){let f=c[u],d=t(f,n);l.push(d)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;let o=this.groups;for(let a=0,l=o.length;a<l;a++){let c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let n=this.attributes;for(let l in n){let c=n[l];t.data.attributes[l]=c.toJSON(t.data)}let i={},s=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],u=[];for(let h=0,f=c.length;h<f;h++){let d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(i[l]=u,s=!0)}s&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);let o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));let a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let n=t.index;n!==null&&this.setIndex(n.clone());let i=t.attributes;for(let c in i){let u=i[c];this.setAttribute(c,u.clone(e))}let s=t.morphAttributes;for(let c in s){let u=[],h=s[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;let o=t.groups;for(let c=0,u=o.length;c<u;c++){let h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}let a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},zp=new Pe,xs=new Ea,Zl=new Mr,Vp=new U,$l=new U,Jl=new U,Kl=new U,ad=new U,jl=new U,Hp=new U,Ql=new U,Me=class extends tn{constructor(t=new ze,e=new Gr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){let n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(i,t);let a=this.morphTargetInfluences;if(s&&a){jl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){let u=a[l],h=s[l];u!==0&&(ad.fromBufferAttribute(h,t),o?jl.addScaledVector(ad,u):jl.addScaledVector(ad.sub(e),u))}e.add(jl)}return e}raycast(t,e){let n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Zl.copy(n.boundingSphere),Zl.applyMatrix4(s),xs.copy(t.ray).recast(t.near),!(Zl.containsPoint(xs.origin)===!1&&(xs.intersectSphere(Zl,Vp)===null||xs.origin.distanceToSquared(Vp)>(t.far-t.near)**2))&&(zp.copy(s).invert(),xs.copy(t.ray).applyMatrix4(zp),!(n.boundingBox!==null&&xs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,xs)))}_computeIntersections(t,e,n){let i,s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,f=s.groups,d=s.drawRange;if(a!==null)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let _=f[m],p=o[_.materialIndex],y=Math.max(_.start,d.start),v=Math.min(a.count,Math.min(_.start+_.count,d.start+d.count));for(let M=y,T=v;M<T;M+=3){let E=a.getX(M),w=a.getX(M+1),R=a.getX(M+2);i=tc(this,p,t,n,c,u,h,E,w,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(a.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){let y=a.getX(_),v=a.getX(_+1),M=a.getX(_+2);i=tc(this,o,t,n,c,u,h,y,v,M),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let m=0,g=f.length;m<g;m++){let _=f[m],p=o[_.materialIndex],y=Math.max(_.start,d.start),v=Math.min(l.count,Math.min(_.start+_.count,d.start+d.count));for(let M=y,T=v;M<T;M+=3){let E=M,w=M+1,R=M+2;i=tc(this,p,t,n,c,u,h,E,w,R),i&&(i.faceIndex=Math.floor(M/3),i.face.materialIndex=_.materialIndex,e.push(i))}}else{let m=Math.max(0,d.start),g=Math.min(l.count,d.start+d.count);for(let _=m,p=g;_<p;_+=3){let y=_,v=_+1,M=_+2;i=tc(this,o,t,n,c,u,h,y,v,M),i&&(i.faceIndex=Math.floor(_/3),e.push(i))}}}};function L_(r,t,e,n,i,s,o,a){let l;if(t.side===Sn?l=n.intersectTriangle(o,s,i,!0,a):l=n.intersectTriangle(i,s,o,t.side===xr,a),l===null)return null;Ql.copy(a),Ql.applyMatrix4(r.matrixWorld);let c=e.ray.origin.distanceTo(Ql);return c<e.near||c>e.far?null:{distance:c,point:Ql.clone(),object:r}}function tc(r,t,e,n,i,s,o,a,l,c){r.getVertexPosition(a,$l),r.getVertexPosition(l,Jl),r.getVertexPosition(c,Kl);let u=L_(r,t,e,n,$l,Jl,Kl,Hp);if(u){let h=new U;gr.getBarycoord(Hp,$l,Jl,Kl,h),i&&(u.uv=gr.getInterpolatedAttribute(i,a,l,c,h,new Dt)),s&&(u.uv1=gr.getInterpolatedAttribute(s,a,l,c,h,new Dt)),o&&(u.normal=gr.getInterpolatedAttribute(o,a,l,c,h,new U),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));let f={a,b:l,c,normal:new U,materialIndex:0};gr.getNormal($l,Jl,Kl,f.normal),u.face=f,u.barycoord=h}return u}var Ue=class r extends ze{constructor(t=1,e=1,n=1,i=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:i,heightSegments:s,depthSegments:o};let a=this;i=Math.floor(i),s=Math.floor(s),o=Math.floor(o);let l=[],c=[],u=[],h=[],f=0,d=0;m("z","y","x",-1,-1,n,e,t,o,s,0),m("z","y","x",1,-1,n,e,-t,o,s,1),m("x","z","y",1,1,t,n,e,i,o,2),m("x","z","y",1,-1,t,n,-e,i,o,3),m("x","y","z",1,-1,t,e,n,i,s,4),m("x","y","z",-1,-1,t,e,-n,i,s,5),this.setIndex(l),this.setAttribute("position",new fe(c,3)),this.setAttribute("normal",new fe(u,3)),this.setAttribute("uv",new fe(h,2));function m(g,_,p,y,v,M,T,E,w,R,x){let b=M/w,L=T/R,F=M/2,k=T/2,H=E/2,Y=w+1,W=R+1,G=0,Z=0,it=new U;for(let N=0;N<W;N++){let nt=N*L-k;for(let Lt=0;Lt<Y;Lt++){let Ot=Lt*b-F;it[g]=Ot*y,it[_]=nt*v,it[p]=H,c.push(it.x,it.y,it.z),it[g]=0,it[_]=0,it[p]=E>0?1:-1,u.push(it.x,it.y,it.z),h.push(Lt/w),h.push(1-N/R),G+=1}}for(let N=0;N<R;N++)for(let nt=0;nt<w;nt++){let Lt=f+nt+Y*N,Ot=f+nt+Y*(N+1),Bt=f+(nt+1)+Y*(N+1),Zt=f+(nt+1)+Y*N;l.push(Lt,Ot,Zt),l.push(Ot,Bt,Zt),Z+=6}a.addGroup(d,Z,x),d+=Z,f+=G}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}};function Ds(r){let t={};for(let e in r){t[e]={};for(let n in r[e]){let i=r[e][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(Jt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=i.clone():Array.isArray(i)?t[e][n]=i.slice():t[e][n]=i}}return t}function Ln(r){let t={};for(let e=0;e<r.length;e++){let n=Ds(r[e]);for(let i in n)t[i]=n[i]}return t}function N_(r){let t=[];for(let e=0;e<r.length;e++)t.push(r[e].clone());return t}function Vd(r){let t=r.getRenderTarget();return t===null?r.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ge.workingColorSpace}var Fm={clone:Ds,merge:Ln},F_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,U_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,fi=class extends Hi{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=F_,this.fragmentShader=U_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ds(t.uniforms),this.uniformsGroups=N_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let i in this.uniforms){let o=this.uniforms[i].value;o&&o.isTexture?e.uniforms[i]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[i]={type:"m4",value:o.toArray()}:e.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let n={};for(let i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}},Ra=class extends tn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},zr=new U,Gp=new Dt,Wp=new Dt,cn=class extends Ra{constructor(t=50,e=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=_c*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(zu*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _c*2*Math.atan(Math.tan(zu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){zr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(zr.x,zr.y).multiplyScalar(-t/zr.z),zr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(zr.x,zr.y).multiplyScalar(-t/zr.z)}getViewSize(t,e){return this.getViewBounds(t,Gp,Wp),e.subVectors(Wp,Gp)}setViewOffset(t,e,n,i,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(zu*.5*this.fov)/this.zoom,n=2*e,i=this.aspect*n,s=-.5*i,o=this.view;if(this.view!==null&&this.view.enabled){let l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*i/l,e-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}let a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},go=-90,_o=1,Mc=class extends tn{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let i=new cn(go,_o,t,e);i.layers=this.layers,this.add(i);let s=new cn(go,_o,t,e);s.layers=this.layers,this.add(s);let o=new cn(go,_o,t,e);o.layers=this.layers,this.add(o);let a=new cn(go,_o,t,e);a.layers=this.layers,this.add(a);let l=new cn(go,_o,t,e);l.layers=this.layers,this.add(l);let c=new cn(go,_o,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[n,i,s,o,a,l]=e;for(let c of e)this.remove(c);if(t===Vi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[s,o,a,l,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;let g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,i),t.render(e,s),t.setRenderTarget(n,1,i),t.render(e,o),t.setRenderTarget(n,2,i),t.render(e,a),t.setRenderTarget(n,3,i),t.render(e,l),t.setRenderTarget(n,4,i),t.render(e,c),n.texture.generateMipmaps=g,t.setRenderTarget(n,5,i),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=m,n.texture.needsPMREMUpdate=!0}},Pa=class extends Hn{constructor(t=[],e=$r,n,i,s,o,a,l,c,u){super(t,e,n,i,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},Ia=class extends di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let n={width:t,height:t,depth:1},i=[n,n,n,n,n,n];this.texture=new Pa(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Ue(5,5,5),s=new fi({name:"CubemapFromEquirect",uniforms:Ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Sn,blending:tr});s.uniforms.tEquirect.value=e;let o=new Me(i,s),a=e.minFilter;return e.minFilter===Jr&&(e.minFilter=Mn),new Mc(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,i=!0){let s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,i);t.setRenderTarget(s)}},ne=class extends tn{constructor(){super(),this.isGroup=!0,this.type="Group"}},O_={type:"move"},Ao=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ne,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ne,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ne,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let i=null,s=null,o=null,a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(let g of t.hand.values()){let _=e.getJointPose(g,n),p=this._getHandJoint(c,g);_!==null&&(p.matrix.fromArray(_.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=_.radius),p.visible=_!==null}let u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,m=.005;c.inputState.pinching&&f>d+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(O_)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let n=new ne;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}};var Da=class r{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new jt(t),this.near=e,this.far=n}clone(){return new r(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},Gi=class extends tn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ai,this.environmentIntensity=1,this.environmentRotation=new Ai,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}},bc=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=gc,this.updateRanges=[],this.version=0,this.uuid=Vr()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let i=0,s=this.stride;i<s;i++)this.array[t+i]=e.array[n+i];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vr()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}},Vn=new U,La=class r{constructor(t,e,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyMatrix4(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.applyNormalMatrix(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Vn.fromBufferAttribute(this,e),Vn.transformDirection(t),this.setXYZ(e,Vn.x,Vn.y,Vn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Ji(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=Re(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Re(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Ji(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Ji(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Ji(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Ji(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this}setXYZW(t,e,n,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Re(e,this.array),n=Re(n,this.array),i=Re(i,this.array),s=Re(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=i,this.data.array[t+3]=s,this}clone(t){if(t===void 0){Sa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return new hn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new r(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){Sa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let n=0;n<this.count;n++){let i=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)e.push(this.data.array[i+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Co=class extends Hi{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},xo,da=new U,vo=new U,yo=new U,Mo=new Dt,fa=new Dt,Um=new Pe,ec=new U,pa=new U,nc=new U,Xp=new Dt,ld=new Dt,qp=new Dt,Ro=class extends tn{constructor(t=new Co){if(super(),this.isSprite=!0,this.type="Sprite",xo===void 0){xo=new ze;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new bc(e,5);xo.setIndex([0,1,2,0,2,3]),xo.setAttribute("position",new La(n,3,0,!1)),xo.setAttribute("uv",new La(n,2,3,!1))}this.geometry=xo,this.material=t,this.center=new Dt(.5,.5),this.count=1}raycast(t,e){t.camera===null&&Yt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),vo.setFromMatrixScale(this.matrixWorld),Um.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),yo.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&vo.multiplyScalar(-yo.z);let n=this.material.rotation,i,s;n!==0&&(s=Math.cos(n),i=Math.sin(n));let o=this.center;ic(ec.set(-.5,-.5,0),yo,o,vo,i,s),ic(pa.set(.5,-.5,0),yo,o,vo,i,s),ic(nc.set(.5,.5,0),yo,o,vo,i,s),Xp.set(0,0),ld.set(1,0),qp.set(1,1);let a=t.ray.intersectTriangle(ec,pa,nc,!1,da);if(a===null&&(ic(pa.set(-.5,.5,0),yo,o,vo,i,s),ld.set(0,1),a=t.ray.intersectTriangle(ec,nc,pa,!1,da),a===null))return;let l=t.ray.origin.distanceTo(da);l<t.near||l>t.far||e.push({distance:l,point:da.clone(),uv:gr.getInterpolation(da,ec,pa,nc,Xp,ld,qp,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};function ic(r,t,e,n,i,s){Mo.subVectors(r,e).addScalar(.5).multiply(n),i!==void 0?(fa.x=s*Mo.x-i*Mo.y,fa.y=i*Mo.x+s*Mo.y):fa.copy(Mo),r.copy(t),r.x+=fa.x,r.y+=fa.y,r.applyMatrix4(Um)}var Na=class extends Hn{constructor(t=null,e=1,n=1,i,s,o,a,l,c=xn,u=xn,h,f){super(null,o,a,l,c,u,i,s,h,f),this.isDataTexture=!0,this.image={data:t,width:e,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Fa=class extends hn{constructor(t,e,n,i=1){super(t,e,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},bo=new Pe,Yp=new Pe,rc=[],Zp=new Qi,B_=new Pe,ma=new Me,ga=new Mr,Ts=class extends Me{constructor(t,e,n){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Fa(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,B_)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Qi),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bo),Zp.copy(t.boundingBox).applyMatrix4(bo),this.boundingBox.union(Zp)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mr),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<e;n++)this.getMatrixAt(n,bo),ga.copy(t.boundingSphere).applyMatrix4(bo),this.boundingSphere.union(ga)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let n=e.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,o=t*s+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(t,e){let n=this.matrixWorld,i=this.count;if(ma.geometry=this.geometry,ma.material=this.material,ma.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ga.copy(this.boundingSphere),ga.applyMatrix4(n),t.ray.intersectsSphere(ga)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,bo),Yp.multiplyMatrices(n,bo),ma.matrixWorld=Yp,ma.raycast(t,rc);for(let o=0,a=rc.length;o<a;o++){let l=rc[o];l.instanceId=s,l.object=this,e.push(l)}rc.length=0}}setColorAt(t,e){this.instanceColor===null&&(this.instanceColor=new Fa(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3)}setMatrixAt(t,e){e.toArray(this.instanceMatrix.array,t*16)}setMorphAt(t,e){let n=e.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Na(new Float32Array(i*this.count),i,this.count,sh,Ri));let s=this.morphTexture.source.data.data,o=0;for(let c=0;c<n.length;c++)o+=n[c];let a=this.geometry.morphTargetsRelative?1:1-o,l=i*t;s[l]=a,s.set(n,l+1)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},cd=new U,k_=new U,z_=new ie,$i=class{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,i){return this.normal.set(t,e,n),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){let i=cd.subVectors(n,e).cross(k_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){let n=t.delta(cd),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let s=-(t.start.dot(this.normal)+this.constant)/i;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){let e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let n=e||z_.getNormalMatrix(t),i=this.coplanarPoint(cd).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}},vs=new Mr,V_=new Dt(.5,.5),sc=new U,Po=class{constructor(t=new $i,e=new $i,n=new $i,i=new $i,s=new $i,o=new $i){this.planes=[t,e,n,i,s,o]}set(t,e,n,i,s,o){let a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(i),a[4].copy(s),a[5].copy(o),this}copy(t){let e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=Vi,n=!1){let i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],c=s[3],u=s[4],h=s[5],f=s[6],d=s[7],m=s[8],g=s[9],_=s[10],p=s[11],y=s[12],v=s[13],M=s[14],T=s[15];if(i[0].setComponents(c-o,d-u,p-m,T-y).normalize(),i[1].setComponents(c+o,d+u,p+m,T+y).normalize(),i[2].setComponents(c+a,d+h,p+g,T+v).normalize(),i[3].setComponents(c-a,d-h,p-g,T-v).normalize(),n)i[4].setComponents(l,f,_,M).normalize(),i[5].setComponents(c-l,d-f,p-_,T-M).normalize();else if(i[4].setComponents(c-l,d-f,p-_,T-M).normalize(),e===Vi)i[5].setComponents(c+l,d+f,p+_,T+M).normalize();else if(e===Ma)i[5].setComponents(l,f,_,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),vs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),vs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(vs)}intersectsSprite(t){vs.center.set(0,0,0);let e=V_.distanceTo(t.center);return vs.radius=.7071067811865476+e,vs.applyMatrix4(t.matrixWorld),this.intersectsSphere(vs)}intersectsSphere(t){let e=this.planes,n=t.center,i=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(t){let e=this.planes;for(let n=0;n<6;n++){let i=e[n];if(sc.x=i.normal.x>0?t.max.x:t.min.x,sc.y=i.normal.y>0?t.max.y:t.min.y,sc.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(sc)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Wr=class extends Hi{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new jt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},$p=new Pe,xd=new Ea,oc=new Mr,ac=new U,br=class extends tn{constructor(t=new ze,e=new Wr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){let n=this.geometry,i=this.matrixWorld,s=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),oc.copy(n.boundingSphere),oc.applyMatrix4(i),oc.radius+=s,t.ray.intersectsSphere(oc)===!1)return;$p.copy(i).invert(),xd.copy(t.ray).applyMatrix4($p);let a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){let f=Math.max(0,o.start),d=Math.min(c.count,o.start+o.count);for(let m=f,g=d;m<g;m++){let _=c.getX(m);ac.fromBufferAttribute(h,_),Jp(ac,_,l,i,t,e,this)}}else{let f=Math.max(0,o.start),d=Math.min(h.count,o.start+o.count);for(let m=f,g=d;m<g;m++)ac.fromBufferAttribute(h,m),Jp(ac,m,l,i,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){let i=e[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=i.length;s<o;s++){let a=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}};function Jp(r,t,e,n,i,s,o){let a=xd.distanceSqToPoint(r);if(a<e){let l=new U;xd.closestPointToPoint(r,l),l.applyMatrix4(n);let c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}var Es=class extends Hn{constructor(t,e,n,i,s,o,a,l,c){super(t,e,n,i,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},Xr=class extends Hn{constructor(t,e,n=qi,i,s,o,a=xn,l=xn,c,u=ji,h=1){if(u!==ji&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let f={width:t,height:e,depth:h};super(f,i,s,o,a,l,u,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new wo(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}},Sc=class extends Xr{constructor(t,e=qi,n=$r,i,s,o=xn,a=xn,l,c=ji){let u={width:t,height:t,depth:1},h=[u,u,u,u,u,u];super(t,t,e,n,i,s,o,a,l,c),this.image=h,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Ua=class extends Hn{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}};var Oa=class r extends ze{constructor(t=1,e=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:n,thetaLength:i},e=Math.max(3,e);let s=[],o=[],a=[],l=[],c=new U,u=new Dt;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,f=3;h<=e;h++,f+=3){let d=n+h/e*i;c.x=t*Math.cos(d),c.y=t*Math.sin(d),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[f]/t+1)/2,u.y=(o[f+1]/t+1)/2,l.push(u.x,u.y)}for(let h=1;h<=e;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new fe(o,3)),this.setAttribute("normal",new fe(a,3)),this.setAttribute("uv",new fe(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Dn=class r extends ze{constructor(t=1,e=1,n=1,i=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:i,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};let c=this;i=Math.floor(i),s=Math.floor(s);let u=[],h=[],f=[],d=[],m=0,g=[],_=n/2,p=0;y(),o===!1&&(t>0&&v(!0),e>0&&v(!1)),this.setIndex(u),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function y(){let M=new U,T=new U,E=0,w=(e-t)/n;for(let R=0;R<=s;R++){let x=[],b=R/s,L=b*(e-t)+t;for(let F=0;F<=i;F++){let k=F/i,H=k*l+a,Y=Math.sin(H),W=Math.cos(H);T.x=L*Y,T.y=-b*n+_,T.z=L*W,h.push(T.x,T.y,T.z),M.set(Y,w,W).normalize(),f.push(M.x,M.y,M.z),d.push(k,1-b),x.push(m++)}g.push(x)}for(let R=0;R<i;R++)for(let x=0;x<s;x++){let b=g[x][R],L=g[x+1][R],F=g[x+1][R+1],k=g[x][R+1];(t>0||x!==0)&&(u.push(b,L,k),E+=3),(e>0||x!==s-1)&&(u.push(L,F,k),E+=3)}c.addGroup(p,E,0),p+=E}function v(M){let T=m,E=new Dt,w=new U,R=0,x=M===!0?t:e,b=M===!0?1:-1;for(let F=1;F<=i;F++)h.push(0,_*b,0),f.push(0,b,0),d.push(.5,.5),m++;let L=m;for(let F=0;F<=i;F++){let H=F/i*l+a,Y=Math.cos(H),W=Math.sin(H);w.x=x*W,w.y=_*b,w.z=x*Y,h.push(w.x,w.y,w.z),f.push(0,b,0),E.x=Y*.5+.5,E.y=W*.5*b+.5,d.push(E.x,E.y),m++}for(let F=0;F<i;F++){let k=T+F,H=L+F;M===!0?u.push(H,H+1,k):u.push(H+1,H,k),R+=3}c.addGroup(p,R,M===!0?1:2),p+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}};var Ba=class r extends ze{constructor(t=[],e=[],n=1,i=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:n,detail:i};let s=[],o=[];a(i),c(n),u(),this.setAttribute("position",new fe(s,3)),this.setAttribute("normal",new fe(s.slice(),3)),this.setAttribute("uv",new fe(o,2)),i===0?this.computeVertexNormals():this.normalizeNormals();function a(y){let v=new U,M=new U,T=new U;for(let E=0;E<e.length;E+=3)d(e[E+0],v),d(e[E+1],M),d(e[E+2],T),l(v,M,T,y)}function l(y,v,M,T){let E=T+1,w=[];for(let R=0;R<=E;R++){w[R]=[];let x=y.clone().lerp(M,R/E),b=v.clone().lerp(M,R/E),L=E-R;for(let F=0;F<=L;F++)F===0&&R===E?w[R][F]=x:w[R][F]=x.clone().lerp(b,F/L)}for(let R=0;R<E;R++)for(let x=0;x<2*(E-R)-1;x++){let b=Math.floor(x/2);x%2===0?(f(w[R][b+1]),f(w[R+1][b]),f(w[R][b])):(f(w[R][b+1]),f(w[R+1][b+1]),f(w[R+1][b]))}}function c(y){let v=new U;for(let M=0;M<s.length;M+=3)v.x=s[M+0],v.y=s[M+1],v.z=s[M+2],v.normalize().multiplyScalar(y),s[M+0]=v.x,s[M+1]=v.y,s[M+2]=v.z}function u(){let y=new U;for(let v=0;v<s.length;v+=3){y.x=s[v+0],y.y=s[v+1],y.z=s[v+2];let M=_(y)/2/Math.PI+.5,T=p(y)/Math.PI+.5;o.push(M,1-T)}m(),h()}function h(){for(let y=0;y<o.length;y+=6){let v=o[y+0],M=o[y+2],T=o[y+4],E=Math.max(v,M,T),w=Math.min(v,M,T);E>.9&&w<.1&&(v<.2&&(o[y+0]+=1),M<.2&&(o[y+2]+=1),T<.2&&(o[y+4]+=1))}}function f(y){s.push(y.x,y.y,y.z)}function d(y,v){let M=y*3;v.x=t[M+0],v.y=t[M+1],v.z=t[M+2]}function m(){let y=new U,v=new U,M=new U,T=new U,E=new Dt,w=new Dt,R=new Dt;for(let x=0,b=0;x<s.length;x+=9,b+=6){y.set(s[x+0],s[x+1],s[x+2]),v.set(s[x+3],s[x+4],s[x+5]),M.set(s[x+6],s[x+7],s[x+8]),E.set(o[b+0],o[b+1]),w.set(o[b+2],o[b+3]),R.set(o[b+4],o[b+5]),T.copy(y).add(v).add(M).divideScalar(3);let L=_(T);g(E,b+0,y,L),g(w,b+2,v,L),g(R,b+4,M,L)}}function g(y,v,M,T){T<0&&y.x===1&&(o[v]=y.x-1),M.x===0&&M.z===0&&(o[v]=T/2/Math.PI+.5)}function _(y){return Math.atan2(y.z,-y.x)}function p(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.vertices,t.indices,t.radius,t.detail)}};var Ci=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Jt("Curve: .getPoint() not implemented.")}getPointAt(t,e){let n=this.getUtoTmapping(t);return this.getPoint(n,e)}getPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPoint(n/t));return e}getSpacedPoints(t=5){let e=[];for(let n=0;n<=t;n++)e.push(this.getPointAt(n/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],n,i=this.getPoint(0),s=0;e.push(0);for(let o=1;o<=t;o++)n=this.getPoint(o/t),s+=n.distanceTo(i),e.push(s),i=n;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let n=this.getLengths(),i=0,s=n.length,o;e?o=e:o=t*n[s-1];let a=0,l=s-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(s-1);let u=n[i],f=n[i+1]-u,d=(o-u)/f;return(i+d)/(s-1)}getTangent(t,e){let i=t-1e-4,s=t+1e-4;i<0&&(i=0),s>1&&(s=1);let o=this.getPoint(i),a=this.getPoint(s),l=e||(o.isVector2?new Dt:new U);return l.copy(a).sub(o).normalize(),l}getTangentAt(t,e){let n=this.getUtoTmapping(t);return this.getTangent(n,e)}computeFrenetFrames(t,e=!1){let n=new U,i=[],s=[],o=[],a=new U,l=new Pe;for(let d=0;d<=t;d++){let m=d/t;i[d]=this.getTangentAt(m,new U)}s[0]=new U,o[0]=new U;let c=Number.MAX_VALUE,u=Math.abs(i[0].x),h=Math.abs(i[0].y),f=Math.abs(i[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),f<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),s[0].crossVectors(i[0],a),o[0].crossVectors(i[0],s[0]);for(let d=1;d<=t;d++){if(s[d]=s[d-1].clone(),o[d]=o[d-1].clone(),a.crossVectors(i[d-1],i[d]),a.length()>Number.EPSILON){a.normalize();let m=Math.acos(ue(i[d-1].dot(i[d]),-1,1));s[d].applyMatrix4(l.makeRotationAxis(a,m))}o[d].crossVectors(i[d],s[d])}if(e===!0){let d=Math.acos(ue(s[0].dot(s[t]),-1,1));d/=t,i[0].dot(a.crossVectors(s[0],s[t]))>0&&(d=-d);for(let m=1;m<=t;m++)s[m].applyMatrix4(l.makeRotationAxis(i[m],d*m)),o[m].crossVectors(i[m],s[m])}return{tangents:i,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},ka=class extends Ci{constructor(t=0,e=0,n=1,i=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=n,this.yRadius=i,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(t,e=new Dt){let n=e,i=Math.PI*2,s=this.aEndAngle-this.aStartAngle,o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=i;for(;s>i;)s-=i;s<Number.EPSILON&&(o?s=0:s=i),this.aClockwise===!0&&!o&&(s===i?s=-i:s=s-i);let a=this.aStartAngle+t*s,l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){let u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),f=l-this.aX,d=c-this.aY;l=f*u-d*h+this.aX,c=f*h+d*u+this.aY}return n.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},Tc=class extends ka{constructor(t,e,n,i,s,o){super(t,e,n,n,i,s,o),this.isArcCurve=!0,this.type="ArcCurve"}};function Hd(){let r=0,t=0,e=0,n=0;function i(s,o,a,l){r=s,t=a,e=-3*s+3*o-2*a-l,n=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){i(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,h){let f=(o-s)/c-(a-s)/(c+u)+(a-o)/u,d=(a-o)/u-(l-o)/(u+h)+(l-a)/h;f*=u,d*=u,i(o,a,f,d)},calc:function(s){let o=s*s,a=o*s;return r+t*s+e*o+n*a}}}var lc=new U,hd=new Hd,ud=new Hd,dd=new Hd,Wi=class extends Ci{constructor(t=[],e=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=n,this.tension=i}getPoint(t,e=new U){let n=e,i=this.points,s=i.length,o=(s-(this.closed?0:1))*t,a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=i[(a-1)%s]:(lc.subVectors(i[0],i[1]).add(i[0]),c=lc);let h=i[a%s],f=i[(a+1)%s];if(this.closed||a+2<s?u=i[(a+2)%s]:(lc.subVectors(i[s-1],i[s-2]).add(i[s-1]),u=lc),this.curveType==="centripetal"||this.curveType==="chordal"){let d=this.curveType==="chordal"?.5:.25,m=Math.pow(c.distanceToSquared(h),d),g=Math.pow(h.distanceToSquared(f),d),_=Math.pow(f.distanceToSquared(u),d);g<1e-4&&(g=1),m<1e-4&&(m=g),_<1e-4&&(_=g),hd.initNonuniformCatmullRom(c.x,h.x,f.x,u.x,m,g,_),ud.initNonuniformCatmullRom(c.y,h.y,f.y,u.y,m,g,_),dd.initNonuniformCatmullRom(c.z,h.z,f.z,u.z,m,g,_)}else this.curveType==="catmullrom"&&(hd.initCatmullRom(c.x,h.x,f.x,u.x,this.tension),ud.initCatmullRom(c.y,h.y,f.y,u.y,this.tension),dd.initCatmullRom(c.z,h.z,f.z,u.z,this.tension));return n.set(hd.calc(l),ud.calc(l),dd.calc(l)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new U().fromArray(i))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};function Kp(r,t,e,n,i){let s=(n-t)*.5,o=(i-e)*.5,a=r*r,l=r*a;return(2*e-2*n+s+o)*l+(-3*e+3*n-2*s-o)*a+s*r+e}function H_(r,t){let e=1-r;return e*e*t}function G_(r,t){return 2*(1-r)*r*t}function W_(r,t){return r*r*t}function _a(r,t,e,n){return H_(r,t)+G_(r,e)+W_(r,n)}function X_(r,t){let e=1-r;return e*e*e*t}function q_(r,t){let e=1-r;return 3*e*e*r*t}function Y_(r,t){return 3*(1-r)*r*r*t}function Z_(r,t){return r*r*r*t}function xa(r,t,e,n,i){return X_(r,t)+q_(r,e)+Y_(r,n)+Z_(r,i)}var Ec=class extends Ci{constructor(t=new Dt,e=new Dt,n=new Dt,i=new Dt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new Dt){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xa(t,i.x,s.x,o.x,a.x),xa(t,i.y,s.y,o.y,a.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wc=class extends Ci{constructor(t=new U,e=new U,n=new U,i=new U){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=n,this.v3=i}getPoint(t,e=new U){let n=e,i=this.v0,s=this.v1,o=this.v2,a=this.v3;return n.set(xa(t,i.x,s.x,o.x,a.x),xa(t,i.y,s.y,o.y,a.y),xa(t,i.z,s.z,o.z,a.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},Ac=class extends Ci{constructor(t=new Dt,e=new Dt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new Dt){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new Dt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Cc=class extends Ci{constructor(t=new U,e=new U){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new U){let n=e;return t===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(t).add(this.v1)),n}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new U){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Rc=class extends Ci{constructor(t=new Dt,e=new Dt,n=new Dt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new Dt){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_a(t,i.x,s.x,o.x),_a(t,i.y,s.y,o.y)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},za=class extends Ci{constructor(t=new U,e=new U,n=new U){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=n}getPoint(t,e=new U){let n=e,i=this.v0,s=this.v1,o=this.v2;return n.set(_a(t,i.x,s.x,o.x),_a(t,i.y,s.y,o.y),_a(t,i.z,s.z,o.z)),n}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Pc=class extends Ci{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new Dt){let n=e,i=this.points,s=(i.length-1)*t,o=Math.floor(s),a=s-o,l=i[o===0?o:o-1],c=i[o],u=i[o>i.length-2?i.length-1:o+1],h=i[o>i.length-3?i.length-1:o+2];return n.set(Kp(a,l.x,c.x,u.x,h.x),Kp(a,l.y,c.y,u.y,h.y)),n}copy(t){super.copy(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(i.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,n=this.points.length;e<n;e++){let i=this.points[e];t.points.push(i.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,n=t.points.length;e<n;e++){let i=t.points[e];this.points.push(new Dt().fromArray(i))}return this}},$_=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:Wi,CubicBezierCurve:Ec,CubicBezierCurve3:wc,EllipseCurve:ka,LineCurve:Ac,LineCurve3:Cc,QuadraticBezierCurve:Rc,QuadraticBezierCurve3:za,SplineCurve:Pc});var Va=class r extends Ba{constructor(t=1,e=0){let n=(1+Math.sqrt(5))/2,i=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(i,s,t,e),this.type="IcosahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}};var Ha=class r extends Ba{constructor(t=1,e=0){let n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],i=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,i,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new r(t.radius,t.detail)}},Ga=class r extends ze{constructor(t=1,e=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:i};let s=t/2,o=e/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=t/a,f=e/l,d=[],m=[],g=[],_=[];for(let p=0;p<u;p++){let y=p*f-o;for(let v=0;v<c;v++){let M=v*h-s;m.push(M,-y,0),g.push(0,0,1),_.push(v/a),_.push(1-p/l)}}for(let p=0;p<l;p++)for(let y=0;y<a;y++){let v=y+c*p,M=y+c*(p+1),T=y+1+c*(p+1),E=y+1+c*p;d.push(v,M,E),d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.width,t.height,t.widthSegments,t.heightSegments)}};var Gn=class r extends ze{constructor(t=1,e=32,n=16,i=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:i,phiLength:s,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));let l=Math.min(o+a,Math.PI),c=0,u=[],h=new U,f=new U,d=[],m=[],g=[],_=[];for(let p=0;p<=n;p++){let y=[],v=p/n,M=0;p===0&&o===0?M=.5/e:p===n&&l===Math.PI&&(M=-.5/e);for(let T=0;T<=e;T++){let E=T/e;h.x=-t*Math.cos(i+E*s)*Math.sin(o+v*a),h.y=t*Math.cos(o+v*a),h.z=t*Math.sin(i+E*s)*Math.sin(o+v*a),m.push(h.x,h.y,h.z),f.copy(h).normalize(),g.push(f.x,f.y,f.z),_.push(E+M,1-v),y.push(c++)}u.push(y)}for(let p=0;p<n;p++)for(let y=0;y<e;y++){let v=u[p][y+1],M=u[p][y],T=u[p+1][y],E=u[p+1][y+1];(p!==0||o>0)&&d.push(v,M,E),(p!==n-1||l<Math.PI)&&d.push(M,T,E)}this.setIndex(d),this.setAttribute("position",new fe(m,3)),this.setAttribute("normal",new fe(g,3)),this.setAttribute("uv",new fe(_,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}};var bn=class r extends ze{constructor(t=1,e=.4,n=12,i=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:n,tubularSegments:i,arc:s},n=Math.floor(n),i=Math.floor(i);let o=[],a=[],l=[],c=[],u=new U,h=new U,f=new U;for(let d=0;d<=n;d++)for(let m=0;m<=i;m++){let g=m/i*s,_=d/n*Math.PI*2;h.x=(t+e*Math.cos(_))*Math.cos(g),h.y=(t+e*Math.cos(_))*Math.sin(g),h.z=e*Math.sin(_),a.push(h.x,h.y,h.z),u.x=t*Math.cos(g),u.y=t*Math.sin(g),f.subVectors(h,u).normalize(),l.push(f.x,f.y,f.z),c.push(m/i),c.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=i;m++){let g=(i+1)*d+m-1,_=(i+1)*(d-1)+m-1,p=(i+1)*(d-1)+m,y=(i+1)*d+m;o.push(g,_,y),o.push(_,p,y)}this.setIndex(o),this.setAttribute("position",new fe(a,3)),this.setAttribute("normal",new fe(l,3)),this.setAttribute("uv",new fe(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}},Wa=class r extends ze{constructor(t=1,e=.4,n=64,i=8,s=2,o=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:t,tube:e,tubularSegments:n,radialSegments:i,p:s,q:o},n=Math.floor(n),i=Math.floor(i);let a=[],l=[],c=[],u=[],h=new U,f=new U,d=new U,m=new U,g=new U,_=new U,p=new U;for(let v=0;v<=n;++v){let M=v/n*s*Math.PI*2;y(M,s,o,t,d),y(M+.01,s,o,t,m),_.subVectors(m,d),p.addVectors(m,d),g.crossVectors(_,p),p.crossVectors(g,_),g.normalize(),p.normalize();for(let T=0;T<=i;++T){let E=T/i*Math.PI*2,w=-e*Math.cos(E),R=e*Math.sin(E);h.x=d.x+(w*p.x+R*g.x),h.y=d.y+(w*p.y+R*g.y),h.z=d.z+(w*p.z+R*g.z),l.push(h.x,h.y,h.z),f.subVectors(h,d).normalize(),c.push(f.x,f.y,f.z),u.push(v/n),u.push(T/i)}}for(let v=1;v<=n;v++)for(let M=1;M<=i;M++){let T=(i+1)*(v-1)+(M-1),E=(i+1)*v+(M-1),w=(i+1)*v+M,R=(i+1)*(v-1)+M;a.push(T,E,R),a.push(E,w,R)}this.setIndex(a),this.setAttribute("position",new fe(l,3)),this.setAttribute("normal",new fe(c,3)),this.setAttribute("uv",new fe(u,2));function y(v,M,T,E,w){let R=Math.cos(v),x=Math.sin(v),b=T/M*v,L=Math.cos(b);w.x=E*(2+L)*.5*R,w.y=E*(2+L)*x*.5,w.z=E*Math.sin(b)*.5}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new r(t.radius,t.tube,t.tubularSegments,t.radialSegments,t.p,t.q)}},ws=class r extends ze{constructor(t=new za(new U(-1,-1,0),new U(-1,1,0),new U(1,1,0)),e=64,n=1,i=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:n,radialSegments:i,closed:s};let o=t.computeFrenetFrames(e,s);this.tangents=o.tangents,this.normals=o.normals,this.binormals=o.binormals;let a=new U,l=new U,c=new Dt,u=new U,h=[],f=[],d=[],m=[];g(),this.setIndex(m),this.setAttribute("position",new fe(h,3)),this.setAttribute("normal",new fe(f,3)),this.setAttribute("uv",new fe(d,2));function g(){for(let v=0;v<e;v++)_(v);_(s===!1?e:0),y(),p()}function _(v){u=t.getPointAt(v/e,u);let M=o.normals[v],T=o.binormals[v];for(let E=0;E<=i;E++){let w=E/i*Math.PI*2,R=Math.sin(w),x=-Math.cos(w);l.x=x*M.x+R*T.x,l.y=x*M.y+R*T.y,l.z=x*M.z+R*T.z,l.normalize(),f.push(l.x,l.y,l.z),a.x=u.x+n*l.x,a.y=u.y+n*l.y,a.z=u.z+n*l.z,h.push(a.x,a.y,a.z)}}function p(){for(let v=1;v<=e;v++)for(let M=1;M<=i;M++){let T=(i+1)*(v-1)+(M-1),E=(i+1)*v+(M-1),w=(i+1)*v+M,R=(i+1)*(v-1)+M;m.push(T,E,R),m.push(E,w,R)}}function y(){for(let v=0;v<=e;v++)for(let M=0;M<=i;M++)c.x=v/e,c.y=M/i,d.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new r(new $_[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};var Ic=class extends fi{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ye=class extends Hi{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new jt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},As=class extends ye{constructor(t){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Dt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return ue(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(e){this.ior=(1+.4*e)/(1-.4*e)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new jt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new jt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new jt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(t)}get anisotropy(){return this._anisotropy}set anisotropy(t){this._anisotropy>0!=t>0&&this.version++,this._anisotropy=t}get clearcoat(){return this._clearcoat}set clearcoat(t){this._clearcoat>0!=t>0&&this.version++,this._clearcoat=t}get iridescence(){return this._iridescence}set iridescence(t){this._iridescence>0!=t>0&&this.version++,this._iridescence=t}get dispersion(){return this._dispersion}set dispersion(t){this._dispersion>0!=t>0&&this.version++,this._dispersion=t}get sheen(){return this._sheen}set sheen(t){this._sheen>0!=t>0&&this.version++,this._sheen=t}get transmission(){return this._transmission}set transmission(t){this._transmission>0!=t>0&&this.version++,this._transmission=t}copy(t){return super.copy(t),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=t.anisotropy,this.anisotropyRotation=t.anisotropyRotation,this.anisotropyMap=t.anisotropyMap,this.clearcoat=t.clearcoat,this.clearcoatMap=t.clearcoatMap,this.clearcoatRoughness=t.clearcoatRoughness,this.clearcoatRoughnessMap=t.clearcoatRoughnessMap,this.clearcoatNormalMap=t.clearcoatNormalMap,this.clearcoatNormalScale.copy(t.clearcoatNormalScale),this.dispersion=t.dispersion,this.ior=t.ior,this.iridescence=t.iridescence,this.iridescenceMap=t.iridescenceMap,this.iridescenceIOR=t.iridescenceIOR,this.iridescenceThicknessRange=[...t.iridescenceThicknessRange],this.iridescenceThicknessMap=t.iridescenceThicknessMap,this.sheen=t.sheen,this.sheenColor.copy(t.sheenColor),this.sheenColorMap=t.sheenColorMap,this.sheenRoughness=t.sheenRoughness,this.sheenRoughnessMap=t.sheenRoughnessMap,this.transmission=t.transmission,this.transmissionMap=t.transmissionMap,this.thickness=t.thickness,this.thicknessMap=t.thicknessMap,this.attenuationDistance=t.attenuationDistance,this.attenuationColor.copy(t.attenuationColor),this.specularIntensity=t.specularIntensity,this.specularIntensityMap=t.specularIntensityMap,this.specularColor.copy(t.specularColor),this.specularColorMap=t.specularColorMap,this}};var Xa=class extends Hi{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new jt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new jt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Vh,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ai,this.combine=jc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},Dc=class extends Hi{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Tm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},Lc=class extends Hi{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};function cc(r,t){return!r||r.constructor===t?r:typeof t.BYTES_PER_ELEMENT=="number"?new t(r):Array.prototype.slice.call(r)}var Cs=class{constructor(t,e,n,i){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new e.constructor(n),this.sampleValues=e,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,n=this._cachedIndex,i=e[n],s=e[n-1];n:{t:{let o;e:{i:if(!(t<i)){for(let a=n+2;;){if(i===void 0){if(t<s)break i;return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=i,i=e[++n],t<i)break t}o=e.length;break e}if(!(t>=s)){let a=e[1];t<a&&(n=2,s=a);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=s,s=e[--n-1],t>=s)break t}o=n,n=0;break e}break n}for(;n<o;){let a=n+o>>>1;t<e[a]?o=a:n=a+1}if(i=e[n],s=e[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=e.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,i)}return this.interpolate_(n,s,t,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,n=this.sampleValues,i=this.valueSize,s=t*i;for(let o=0;o!==i;++o)e[o]=n[s+o];return e}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Nc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:pd,endingEnd:pd}}intervalChanged_(t,e,n){let i=this.parameterPositions,s=t-2,o=t+1,a=i[s],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case md:s=t,a=2*e-n;break;case gd:s=i.length-2,a=e+i[s]-i[s+1];break;default:s=t,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case md:o=t,l=2*n-e;break;case gd:o=1,l=n+i[1]-i[0];break;default:o=t-1,l=e}let c=(n-e)*.5,u=this.valueSize;this._weightPrev=c/(e-a),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,f=this._weightPrev,d=this._weightNext,m=(n-e)/(i-e),g=m*m,_=g*m,p=-f*_+2*f*g-f*m,y=(1+f)*_+(-1.5-2*f)*g+(-.5+f)*m+1,v=(-1-d)*_+(1.5+d)*g+.5*m,M=d*_-d*g;for(let T=0;T!==a;++T)s[T]=p*o[u+T]+y*o[c+T]+v*o[l+T]+M*o[h+T];return s}},Fc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=t*a,c=l-a,u=(n-e)/(i-e),h=1-u;for(let f=0;f!==a;++f)s[f]=o[c+f]*h+o[l+f]*u;return s}},Uc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t){return this.copySampleValue_(t-1)}},pi=class{constructor(t,e,n,i){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=cc(e,this.TimeBufferType),this.values=cc(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,n;if(e.toJSON!==this.toJSON)n=e.toJSON(t);else{n={name:t.name,times:cc(t.times,Array),values:cc(t.values,Array)};let i=t.getInterpolation();i!==t.DefaultInterpolation&&(n.interpolation=i)}return n.type=t.ValueTypeName,n}InterpolantFactoryMethodDiscrete(t){return new Uc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new Fc(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new Nc(this.times,this.values,this.getValueSize(),t)}setInterpolation(t){let e;switch(t){case va:e=this.InterpolantFactoryMethodDiscrete;break;case mc:e=this.InterpolantFactoryMethodLinear;break;case hc:e=this.InterpolantFactoryMethodSmooth;break}if(e===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return Jt("KeyframeTrack:",n),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return va;case this.InterpolantFactoryMethodLinear:return mc;case this.InterpolantFactoryMethodSmooth:return hc}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let n=0,i=e.length;n!==i;++n)e[n]*=t}return this}trim(t,e){let n=this.times,i=n.length,s=0,o=i-1;for(;s!==i&&n[s]<t;)++s;for(;o!==-1&&n[o]>e;)--o;if(++o,s!==0||o!==i){s>=o&&(o=Math.max(o,1),s=o-1);let a=this.getValueSize();this.times=n.slice(s,o),this.values=this.values.slice(s*a,o*a)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(Yt("KeyframeTrack: Invalid value size in track.",this),t=!1);let n=this.times,i=this.values,s=n.length;s===0&&(Yt("KeyframeTrack: Track is empty.",this),t=!1);let o=null;for(let a=0;a!==s;a++){let l=n[a];if(typeof l=="number"&&isNaN(l)){Yt("KeyframeTrack: Time is not a valid number.",this,a,l),t=!1;break}if(o!==null&&o>l){Yt("KeyframeTrack: Out of order keys.",this,a,l,o),t=!1;break}o=l}if(i!==void 0&&x_(i))for(let a=0,l=i.length;a!==l;++a){let c=i[a];if(isNaN(c)){Yt("KeyframeTrack: Value is not a valid number.",this,a,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===hc,s=t.length-1,o=1;for(let a=1;a<s;++a){let l=!1,c=t[a],u=t[a+1];if(c!==u&&(a!==1||c!==t[0]))if(i)l=!0;else{let h=a*n,f=h-n,d=h+n;for(let m=0;m!==n;++m){let g=e[h+m];if(g!==e[f+m]||g!==e[d+m]){l=!0;break}}}if(l){if(a!==o){t[o]=t[a];let h=a*n,f=o*n;for(let d=0;d!==n;++d)e[f+d]=e[h+d]}++o}}if(s>0){t[o]=t[s];for(let a=s*n,l=o*n,c=0;c!==n;++c)e[l+c]=e[a+c];++o}return o!==t.length?(this.times=t.slice(0,o),this.values=e.slice(0,o*n)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),n=this.constructor,i=new n(this.name,t,e);return i.createInterpolant=this.createInterpolant,i}};pi.prototype.ValueTypeName="";pi.prototype.TimeBufferType=Float32Array;pi.prototype.ValueBufferType=Float32Array;pi.prototype.DefaultInterpolation=mc;var qr=class extends pi{constructor(t,e,n){super(t,e,n)}};qr.prototype.ValueTypeName="bool";qr.prototype.ValueBufferType=Array;qr.prototype.DefaultInterpolation=va;qr.prototype.InterpolantFactoryMethodLinear=void 0;qr.prototype.InterpolantFactoryMethodSmooth=void 0;var Oc=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Oc.prototype.ValueTypeName="color";var Bc=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};Bc.prototype.ValueTypeName="number";var kc=class extends Cs{constructor(t,e,n,i){super(t,e,n,i)}interpolate_(t,e,n,i){let s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-e)/(i-e),c=t*a;for(let u=c+a;c!==u;c+=4)yr.slerpFlat(s,0,o,c-a,o,c,l);return s}},qa=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}InterpolantFactoryMethodLinear(t){return new kc(this.times,this.values,this.getValueSize(),t)}};qa.prototype.ValueTypeName="quaternion";qa.prototype.InterpolantFactoryMethodSmooth=void 0;var Yr=class extends pi{constructor(t,e,n){super(t,e,n)}};Yr.prototype.ValueTypeName="string";Yr.prototype.ValueBufferType=Array;Yr.prototype.DefaultInterpolation=va;Yr.prototype.InterpolantFactoryMethodLinear=void 0;Yr.prototype.InterpolantFactoryMethodSmooth=void 0;var zc=class extends pi{constructor(t,e,n,i){super(t,e,n,i)}};zc.prototype.ValueTypeName="vector";var Vc=class{constructor(t,e,n){let i=this,s=!1,o=0,a=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this._abortController=null,this.itemStart=function(u){a++,s===!1&&i.onStart!==void 0&&i.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(s=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){let h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,f=c.length;h<f;h+=2){let d=c[h],m=c[h+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},Om=new Vc,Hc=class{constructor(t){this.manager=t!==void 0?t:Om,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){let n=this;return new Promise(function(i,s){n.load(t,i,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Hc.DEFAULT_MATERIAL_NAME="__DEFAULT";var Io=class extends tn{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new jt(t),this.intensity=e}dispose(){this.dispatchEvent({type:"dispose"})}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}};var fd=new Pe,jp=new U,Qp=new U,Gc=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Po,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Ge(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera,n=this.matrix;jp.setFromMatrixPosition(t.matrixWorld),e.position.copy(jp),Qp.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Qp),e.updateMatrixWorld(),fd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(fd,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(fd)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}};var vd=class extends Gc{constructor(){super(new cn(90,1,.5,500)),this.isPointLightShadow=!0}},Ya=class extends Io{constructor(t,e,n=0,i=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new vd}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Zr=class extends Ra{constructor(t=-1,e=1,n=1,i=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=i,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,i,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2,s=n-t,o=n+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},yd=class extends Gc{constructor(){super(new Zr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},mi=class extends Io{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(tn.DEFAULT_UP),this.updateMatrix(),this.target=new tn,this.shadow=new yd}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},Sr=class extends Io{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}};var Wc=class extends cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}};var Gd="\\[\\]\\.:\\/",J_=new RegExp("["+Gd+"]","g"),Wd="[^"+Gd+"]",K_="[^"+Gd.replace("\\.","")+"]",j_=/((?:WC+[\/:])*)/.source.replace("WC",Wd),Q_=/(WCOD+)?/.source.replace("WCOD",K_),tx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Wd),ex=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Wd),nx=new RegExp("^"+j_+Q_+tx+ex+"$"),ix=["material","materials","bones","map"],Md=class{constructor(t,e,n){let i=n||ke.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,i)}getValue(t,e){this.bind();let n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(t,e)}setValue(t,e){let n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,s=n.length;i!==s;++i)n[i].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,n=t.length;e!==n;++e)t[e].unbind()}},ke=class r{constructor(t,e,n){this.path=e,this.parsedPath=n||r.parseTrackName(e),this.node=r.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,n){return t&&t.isAnimationObjectGroup?new r.Composite(t,e,n):new r(t,e,n)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace(J_,"")}static parseTrackName(t){let e=nx.exec(t);if(e===null)throw new Error("PropertyBinding: Cannot parse trackName: "+t);let n={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){let s=n.nodeName.substring(i+1);ix.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+t);return n}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let n=t.skeleton.getBoneByName(e);if(n!==void 0)return n}if(t.children){let n=function(s){for(let o=0;o<s.length;o++){let a=s[o];if(a.name===e||a.uuid===e)return a;let l=n(a.children);if(l)return l}return null},i=n(t.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)t[e++]=n[i]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let n=this.resolvedProperty;for(let i=0,s=n.length;i!==s;++i)n[i]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,n=e.objectName,i=e.propertyName,s=e.propertyIndex;if(t||(t=r.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){Jt("PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=e.objectIndex;switch(n){case"materials":if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){Yt("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){Yt("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let u=0;u<t.length;u++)if(t[u].name===c){c=u;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){Yt("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){Yt("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[n]===void 0){Yt("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[n]}if(c!==void 0){if(t[c]===void 0){Yt("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let o=t[i];if(o===void 0){let c=e.nodeName;Yt("PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",t);return}let a=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?a=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(i==="morphTargetInfluences"){if(!t.geometry){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){Yt("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[s]!==void 0&&(s=t.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ke.Composite=Md;ke.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ke.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ke.prototype.GetterByBindingType=[ke.prototype._getValue_direct,ke.prototype._getValue_array,ke.prototype._getValue_arrayElement,ke.prototype._getValue_toArray];ke.prototype.SetterByBindingTypeAndVersioning=[[ke.prototype._setValue_direct,ke.prototype._setValue_direct_setNeedsUpdate,ke.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_array,ke.prototype._setValue_array_setNeedsUpdate,ke.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_arrayElement,ke.prototype._setValue_arrayElement_setNeedsUpdate,ke.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ke.prototype._setValue_fromArray,ke.prototype._setValue_fromArray_setNeedsUpdate,ke.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var aT=new Float32Array(1);function Xd(r,t,e,n){let i=rx(n);switch(e){case Od:return r*t;case sh:return r*t/i.components*i.byteLength;case oh:return r*t/i.components*i.byteLength;case Is:return r*t*2/i.components*i.byteLength;case ah:return r*t*2/i.components*i.byteLength;case Bd:return r*t*3/i.components*i.byteLength;case Pi:return r*t*4/i.components*i.byteLength;case lh:return r*t*4/i.components*i.byteLength;case Ka:case ja:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case Qa:case tl:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case hh:case dh:return Math.max(r,16)*Math.max(t,8)/4;case ch:case uh:return Math.max(r,8)*Math.max(t,8)/2;case fh:case ph:case gh:case _h:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*8;case mh:case xh:case vh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case yh:return Math.floor((r+3)/4)*Math.floor((t+3)/4)*16;case Mh:return Math.floor((r+4)/5)*Math.floor((t+3)/4)*16;case bh:return Math.floor((r+4)/5)*Math.floor((t+4)/5)*16;case Sh:return Math.floor((r+5)/6)*Math.floor((t+4)/5)*16;case Th:return Math.floor((r+5)/6)*Math.floor((t+5)/6)*16;case Eh:return Math.floor((r+7)/8)*Math.floor((t+4)/5)*16;case wh:return Math.floor((r+7)/8)*Math.floor((t+5)/6)*16;case Ah:return Math.floor((r+7)/8)*Math.floor((t+7)/8)*16;case Ch:return Math.floor((r+9)/10)*Math.floor((t+4)/5)*16;case Rh:return Math.floor((r+9)/10)*Math.floor((t+5)/6)*16;case Ph:return Math.floor((r+9)/10)*Math.floor((t+7)/8)*16;case Ih:return Math.floor((r+9)/10)*Math.floor((t+9)/10)*16;case Dh:return Math.floor((r+11)/12)*Math.floor((t+9)/10)*16;case Lh:return Math.floor((r+11)/12)*Math.floor((t+11)/12)*16;case Nh:case Fh:case Uh:return Math.ceil(r/4)*Math.ceil(t/4)*16;case Oh:case Bh:return Math.ceil(r/4)*Math.ceil(t/4)*8;case kh:case zh:return Math.ceil(r/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function rx(r){switch(r){case ei:case Ld:return{byteLength:1,components:1};case Lo:case Nd:case er:return{byteLength:2,components:1};case ih:case rh:return{byteLength:2,components:4};case qi:case nh:case Ri:return{byteLength:4,components:1};case Fd:case Ud:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"182"}}));typeof window<"u"&&(window.__THREE__?Jt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="182");function o0(){let r=null,t=!1,e=null,n=null;function i(s,o){e(s,o),n=r.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(n=r.requestAnimationFrame(i),t=!0)},stop:function(){r.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){r=s}}}function ox(r){let t=new WeakMap;function e(a,l){let c=a.array,u=a.usage,h=c.byteLength,f=r.createBuffer();r.bindBuffer(l,f),r.bufferData(l,c,u),a.onUploadCallback();let d;if(c instanceof Float32Array)d=r.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)d=r.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?d=r.HALF_FLOAT:d=r.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=r.SHORT;else if(c instanceof Uint32Array)d=r.UNSIGNED_INT;else if(c instanceof Int32Array)d=r.INT;else if(c instanceof Int8Array)d=r.BYTE;else if(c instanceof Uint8Array)d=r.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){let u=l.array,h=l.updateRanges;if(r.bindBuffer(c,a),h.length===0)r.bufferSubData(c,0,u);else{h.sort((d,m)=>d.start-m.start);let f=0;for(let d=1;d<h.length;d++){let m=h[f],g=h[d];g.start<=m.start+m.count+1?m.count=Math.max(m.count,g.start+g.count-m.start):(++f,h[f]=g)}h.length=f+1;for(let d=0,m=h.length;d<m;d++){let g=h[d];r.bufferSubData(c,g.start*u.BYTES_PER_ELEMENT,u,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);let l=t.get(a);l&&(r.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){let u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}let c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:s,update:o}}var ax=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,lx=`#ifdef USE_ALPHAHASH
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
#endif`,cx=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,hx=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ux=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dx=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fx=`#ifdef USE_AOMAP
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
#endif`,px=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,mx=`#ifdef USE_BATCHING
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
#endif`,gx=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_x=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,xx=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vx=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,yx=`#ifdef USE_IRIDESCENCE
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
#endif`,Mx=`#ifdef USE_BUMPMAP
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
#endif`,bx=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Sx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tx=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ex=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,wx=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ax=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Cx=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rx=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Px=`#define PI 3.141592653589793
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
} // validated`,Ix=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Dx=`vec3 transformedNormal = objectNormal;
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
#endif`,Lx=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nx=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fx=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ux=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ox="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bx=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,kx=`#ifdef USE_ENVMAP
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
#endif`,zx=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Vx=`#ifdef USE_ENVMAP
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
#endif`,Hx=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gx=`#ifdef USE_ENVMAP
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
#endif`,Wx=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Xx=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qx=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Yx=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Zx=`#ifdef USE_GRADIENTMAP
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
}`,$x=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jx=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Kx=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jx=`uniform bool receiveShadow;
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
#endif`,Qx=`#ifdef USE_ENVMAP
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
#endif`,tv=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ev=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,nv=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,iv=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rv=`PhysicalMaterial material;
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
#endif`,sv=`uniform sampler2D dfgLUT;
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
}`,ov=`
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
#endif`,av=`#if defined( RE_IndirectDiffuse )
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
#endif`,lv=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,cv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hv=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,uv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dv=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fv=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,pv=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,mv=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,gv=`#if defined( USE_POINTS_UV )
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
#endif`,_v=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,xv=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vv=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yv=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mv=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,bv=`#ifdef USE_MORPHTARGETS
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
#endif`,Sv=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tv=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ev=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,wv=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Av=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cv=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rv=`#ifdef USE_NORMALMAP
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
#endif`,Pv=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Iv=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Dv=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Lv=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Nv=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Fv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Uv=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ov=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,kv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vv=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Wv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Xv=`float getShadowMask() {
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
}`,qv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Yv=`#ifdef USE_SKINNING
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
#endif`,Zv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$v=`#ifdef USE_SKINNING
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
#endif`,Jv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Qv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ty=`#ifdef USE_TRANSMISSION
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
#endif`,ey=`#ifdef USE_TRANSMISSION
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
#endif`,ny=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,iy=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ry=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,sy=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,oy=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ay=`uniform sampler2D t2D;
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
}`,ly=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cy=`#ifdef ENVMAP_TYPE_CUBE
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
}`,hy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,uy=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dy=`#include <common>
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
}`,fy=`#if DEPTH_PACKING == 3200
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
}`,py=`#define DISTANCE
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
}`,my=`#define DISTANCE
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
}`,gy=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_y=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xy=`uniform float scale;
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
}`,vy=`uniform vec3 diffuse;
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
}`,yy=`#include <common>
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
}`,My=`uniform vec3 diffuse;
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
}`,by=`#define LAMBERT
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
}`,Sy=`#define LAMBERT
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
}`,Ty=`#define MATCAP
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
}`,Ey=`#define MATCAP
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
}`,wy=`#define NORMAL
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
}`,Ay=`#define NORMAL
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
}`,Cy=`#define PHONG
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
}`,Ry=`#define PHONG
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
}`,Py=`#define STANDARD
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
}`,Iy=`#define STANDARD
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
}`,Dy=`#define TOON
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
}`,Ly=`#define TOON
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
}`,Ny=`uniform float size;
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
}`,Fy=`uniform vec3 diffuse;
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
}`,Uy=`#include <common>
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
}`,Oy=`uniform vec3 color;
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
}`,By=`uniform float rotation;
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
}`,ky=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:ax,alphahash_pars_fragment:lx,alphamap_fragment:cx,alphamap_pars_fragment:hx,alphatest_fragment:ux,alphatest_pars_fragment:dx,aomap_fragment:fx,aomap_pars_fragment:px,batching_pars_vertex:mx,batching_vertex:gx,begin_vertex:_x,beginnormal_vertex:xx,bsdfs:vx,iridescence_fragment:yx,bumpmap_pars_fragment:Mx,clipping_planes_fragment:bx,clipping_planes_pars_fragment:Sx,clipping_planes_pars_vertex:Tx,clipping_planes_vertex:Ex,color_fragment:wx,color_pars_fragment:Ax,color_pars_vertex:Cx,color_vertex:Rx,common:Px,cube_uv_reflection_fragment:Ix,defaultnormal_vertex:Dx,displacementmap_pars_vertex:Lx,displacementmap_vertex:Nx,emissivemap_fragment:Fx,emissivemap_pars_fragment:Ux,colorspace_fragment:Ox,colorspace_pars_fragment:Bx,envmap_fragment:kx,envmap_common_pars_fragment:zx,envmap_pars_fragment:Vx,envmap_pars_vertex:Hx,envmap_physical_pars_fragment:Qx,envmap_vertex:Gx,fog_vertex:Wx,fog_pars_vertex:Xx,fog_fragment:qx,fog_pars_fragment:Yx,gradientmap_pars_fragment:Zx,lightmap_pars_fragment:$x,lights_lambert_fragment:Jx,lights_lambert_pars_fragment:Kx,lights_pars_begin:jx,lights_toon_fragment:tv,lights_toon_pars_fragment:ev,lights_phong_fragment:nv,lights_phong_pars_fragment:iv,lights_physical_fragment:rv,lights_physical_pars_fragment:sv,lights_fragment_begin:ov,lights_fragment_maps:av,lights_fragment_end:lv,logdepthbuf_fragment:cv,logdepthbuf_pars_fragment:hv,logdepthbuf_pars_vertex:uv,logdepthbuf_vertex:dv,map_fragment:fv,map_pars_fragment:pv,map_particle_fragment:mv,map_particle_pars_fragment:gv,metalnessmap_fragment:_v,metalnessmap_pars_fragment:xv,morphinstance_vertex:vv,morphcolor_vertex:yv,morphnormal_vertex:Mv,morphtarget_pars_vertex:bv,morphtarget_vertex:Sv,normal_fragment_begin:Tv,normal_fragment_maps:Ev,normal_pars_fragment:wv,normal_pars_vertex:Av,normal_vertex:Cv,normalmap_pars_fragment:Rv,clearcoat_normal_fragment_begin:Pv,clearcoat_normal_fragment_maps:Iv,clearcoat_pars_fragment:Dv,iridescence_pars_fragment:Lv,opaque_fragment:Nv,packing:Fv,premultiplied_alpha_fragment:Uv,project_vertex:Ov,dithering_fragment:Bv,dithering_pars_fragment:kv,roughnessmap_fragment:zv,roughnessmap_pars_fragment:Vv,shadowmap_pars_fragment:Hv,shadowmap_pars_vertex:Gv,shadowmap_vertex:Wv,shadowmask_pars_fragment:Xv,skinbase_vertex:qv,skinning_pars_vertex:Yv,skinning_vertex:Zv,skinnormal_vertex:$v,specularmap_fragment:Jv,specularmap_pars_fragment:Kv,tonemapping_fragment:jv,tonemapping_pars_fragment:Qv,transmission_fragment:ty,transmission_pars_fragment:ey,uv_pars_fragment:ny,uv_pars_vertex:iy,uv_vertex:ry,worldpos_vertex:sy,background_vert:oy,background_frag:ay,backgroundCube_vert:ly,backgroundCube_frag:cy,cube_vert:hy,cube_frag:uy,depth_vert:dy,depth_frag:fy,distance_vert:py,distance_frag:my,equirect_vert:gy,equirect_frag:_y,linedashed_vert:xy,linedashed_frag:vy,meshbasic_vert:yy,meshbasic_frag:My,meshlambert_vert:by,meshlambert_frag:Sy,meshmatcap_vert:Ty,meshmatcap_frag:Ey,meshnormal_vert:wy,meshnormal_frag:Ay,meshphong_vert:Cy,meshphong_frag:Ry,meshphysical_vert:Py,meshphysical_frag:Iy,meshtoon_vert:Dy,meshtoon_frag:Ly,points_vert:Ny,points_frag:Fy,shadow_vert:Uy,shadow_frag:Oy,sprite_vert:By,sprite_frag:ky},bt={common:{diffuse:{value:new jt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ie}},envmap:{envMap:{value:null},envMapRotation:{value:new ie},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ie}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ie}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ie},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ie},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ie},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ie}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ie}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ie}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new jt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new jt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0},uvTransform:{value:new ie}},sprite:{diffuse:{value:new jt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ie},alphaMap:{value:null},alphaMapTransform:{value:new ie},alphaTest:{value:0}}},ir={basic:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ln([bt.common,bt.specularmap,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},specular:{value:new jt(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ln([bt.common,bt.envmap,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.roughnessmap,bt.metalnessmap,bt.fog,bt.lights,{emissive:{value:new jt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ln([bt.common,bt.aomap,bt.lightmap,bt.emissivemap,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.gradientmap,bt.fog,bt.lights,{emissive:{value:new jt(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,bt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ln([bt.points,bt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ln([bt.common,bt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ln([bt.common,bt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ln([bt.common,bt.bumpmap,bt.normalmap,bt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ln([bt.sprite,bt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new ie},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ie}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distance:{uniforms:Ln([bt.common,bt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distance_vert,fragmentShader:se.distance_frag},shadow:{uniforms:Ln([bt.lights,bt.fog,{color:{value:new jt(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};ir.physical={uniforms:Ln([ir.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ie},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ie},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ie},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ie},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ie},sheen:{value:0},sheenColor:{value:new jt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ie},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ie},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ie},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ie},attenuationDistance:{value:0},attenuationColor:{value:new jt(0)},specularColor:{value:new jt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ie},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ie},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ie}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};var Wh={r:0,b:0,g:0},Ls=new Ai,zy=new Pe;function Vy(r,t,e,n,i,s,o){let a=new jt(0),l=s===!0?0:1,c,u,h=null,f=0,d=null;function m(v){let M=v.isScene===!0?v.background:null;return M&&M.isTexture&&(M=(v.backgroundBlurriness>0?e:t).get(M)),M}function g(v){let M=!1,T=m(v);T===null?p(a,l):T&&T.isColor&&(p(T,1),M=!0);let E=r.xr.getEnvironmentBlendMode();E==="additive"?n.buffers.color.setClear(0,0,0,1,o):E==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(r.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(v,M){let T=m(M);T&&(T.isCubeTexture||T.mapping===$a)?(u===void 0&&(u=new Me(new Ue(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ds(ir.backgroundCube.uniforms),vertexShader:ir.backgroundCube.vertexShader,fragmentShader:ir.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(E,w,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),Ls.copy(M.backgroundRotation),Ls.x*=-1,Ls.y*=-1,Ls.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(Ls.y*=-1,Ls.z*=-1),u.material.uniforms.envMap.value=T,u.material.uniforms.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(zy.makeRotationFromEuler(Ls)),u.material.toneMapped=ge.getTransfer(T.colorSpace)!==be,(h!==T||f!==T.version||d!==r.toneMapping)&&(u.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):T&&T.isTexture&&(c===void 0&&(c=new Me(new Ga(2,2),new fi({name:"BackgroundMaterial",uniforms:Ds(ir.background.uniforms),vertexShader:ir.background.vertexShader,fragmentShader:ir.background.fragmentShader,side:xr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=T,c.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,c.material.toneMapped=ge.getTransfer(T.colorSpace)!==be,T.matrixAutoUpdate===!0&&T.updateMatrix(),c.material.uniforms.uvTransform.value.copy(T.matrix),(h!==T||f!==T.version||d!==r.toneMapping)&&(c.material.needsUpdate=!0,h=T,f=T.version,d=r.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function p(v,M){v.getRGB(Wh,Vd(r)),n.buffers.color.setClear(Wh.r,Wh.g,Wh.b,M,o)}function y(){u!==void 0&&(u.geometry.dispose(),u.material.dispose(),u=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,M=1){a.set(v),l=M,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,p(a,l)},render:g,addToRenderList:_,dispose:y}}function Hy(r,t){let e=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=f(null),s=i,o=!1;function a(b,L,F,k,H){let Y=!1,W=h(k,F,L);s!==W&&(s=W,c(s.object)),Y=d(b,k,F,H),Y&&m(b,k,F,H),H!==null&&t.update(H,r.ELEMENT_ARRAY_BUFFER),(Y||o)&&(o=!1,M(b,L,F,k),H!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function l(){return r.createVertexArray()}function c(b){return r.bindVertexArray(b)}function u(b){return r.deleteVertexArray(b)}function h(b,L,F){let k=F.wireframe===!0,H=n[b.id];H===void 0&&(H={},n[b.id]=H);let Y=H[L.id];Y===void 0&&(Y={},H[L.id]=Y);let W=Y[k];return W===void 0&&(W=f(l()),Y[k]=W),W}function f(b){let L=[],F=[],k=[];for(let H=0;H<e;H++)L[H]=0,F[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:F,attributeDivisors:k,object:b,attributes:{},index:null}}function d(b,L,F,k){let H=s.attributes,Y=L.attributes,W=0,G=F.getAttributes();for(let Z in G)if(G[Z].location>=0){let N=H[Z],nt=Y[Z];if(nt===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(nt=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(nt=b.instanceColor)),N===void 0||N.attribute!==nt||nt&&N.data!==nt.data)return!0;W++}return s.attributesNum!==W||s.index!==k}function m(b,L,F,k){let H={},Y=L.attributes,W=0,G=F.getAttributes();for(let Z in G)if(G[Z].location>=0){let N=Y[Z];N===void 0&&(Z==="instanceMatrix"&&b.instanceMatrix&&(N=b.instanceMatrix),Z==="instanceColor"&&b.instanceColor&&(N=b.instanceColor));let nt={};nt.attribute=N,N&&N.data&&(nt.data=N.data),H[Z]=nt,W++}s.attributes=H,s.attributesNum=W,s.index=k}function g(){let b=s.newAttributes;for(let L=0,F=b.length;L<F;L++)b[L]=0}function _(b){p(b,0)}function p(b,L){let F=s.newAttributes,k=s.enabledAttributes,H=s.attributeDivisors;F[b]=1,k[b]===0&&(r.enableVertexAttribArray(b),k[b]=1),H[b]!==L&&(r.vertexAttribDivisor(b,L),H[b]=L)}function y(){let b=s.newAttributes,L=s.enabledAttributes;for(let F=0,k=L.length;F<k;F++)L[F]!==b[F]&&(r.disableVertexAttribArray(F),L[F]=0)}function v(b,L,F,k,H,Y,W){W===!0?r.vertexAttribIPointer(b,L,F,H,Y):r.vertexAttribPointer(b,L,F,k,H,Y)}function M(b,L,F,k){g();let H=k.attributes,Y=F.getAttributes(),W=L.defaultAttributeValues;for(let G in Y){let Z=Y[G];if(Z.location>=0){let it=H[G];if(it===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(it=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(it=b.instanceColor)),it!==void 0){let N=it.normalized,nt=it.itemSize,Lt=t.get(it);if(Lt===void 0)continue;let Ot=Lt.buffer,Bt=Lt.type,Zt=Lt.bytesPerElement,K=Bt===r.INT||Bt===r.UNSIGNED_INT||it.gpuType===nh;if(it.isInterleavedBufferAttribute){let j=it.data,ht=j.stride,Ct=it.offset;if(j.isInstancedInterleavedBuffer){for(let gt=0;gt<Z.locationSize;gt++)p(Z.location+gt,j.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<Z.locationSize;gt++)_(Z.location+gt);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let gt=0;gt<Z.locationSize;gt++)v(Z.location+gt,nt/Z.locationSize,Bt,N,ht*Zt,(Ct+nt/Z.locationSize*gt)*Zt,K)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<Z.locationSize;j++)p(Z.location+j,it.meshPerAttribute);b.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<Z.locationSize;j++)_(Z.location+j);r.bindBuffer(r.ARRAY_BUFFER,Ot);for(let j=0;j<Z.locationSize;j++)v(Z.location+j,nt/Z.locationSize,Bt,N,nt*Zt,nt/Z.locationSize*j*Zt,K)}}else if(W!==void 0){let N=W[G];if(N!==void 0)switch(N.length){case 2:r.vertexAttrib2fv(Z.location,N);break;case 3:r.vertexAttrib3fv(Z.location,N);break;case 4:r.vertexAttrib4fv(Z.location,N);break;default:r.vertexAttrib1fv(Z.location,N)}}}}y()}function T(){R();for(let b in n){let L=n[b];for(let F in L){let k=L[F];for(let H in k)u(k[H].object),delete k[H];delete L[F]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;let L=n[b.id];for(let F in L){let k=L[F];for(let H in k)u(k[H].object),delete k[H];delete L[F]}delete n[b.id]}function w(b){for(let L in n){let F=n[L];if(F[b.id]===void 0)continue;let k=F[b.id];for(let H in k)u(k[H].object),delete k[H];delete F[b.id]}}function R(){x(),o=!0,s!==i&&(s=i,c(s.object))}function x(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:R,resetDefaultState:x,dispose:T,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:g,enableAttribute:_,disableUnusedAttributes:y}}function Gy(r,t,e){let n;function i(c){n=c}function s(c,u){r.drawArrays(n,c,u),e.update(u,n,1)}function o(c,u,h){h!==0&&(r.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let m=0;m<h;m++)d+=u[m];e.update(d,n,1)}function l(c,u,h,f){if(h===0)return;let d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<c.length;m++)o(c[m],u[m],f[m]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g]*f[g];e.update(m,n,1)}}this.setMode=i,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Wy(r,t,e,n){let i;function s(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){let w=t.get("EXT_texture_filter_anisotropic");i=r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(w){return!(w!==Pi&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){let R=w===er&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==ei&&n.convert(w)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ri&&!R)}function l(w){if(w==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",u=l(c);u!==c&&(Jt("WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);let h=e.logarithmicDepthBuffer===!0,f=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),d=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),m=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_TEXTURE_SIZE),_=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),y=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),v=r.getParameter(r.MAX_VARYING_VECTORS),M=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),T=r.getParameter(r.MAX_SAMPLES),E=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reversedDepthBuffer:f,maxTextures:d,maxVertexTextures:m,maxTextureSize:g,maxCubemapSize:_,maxAttributes:p,maxVertexUniforms:y,maxVaryings:v,maxFragmentUniforms:M,maxSamples:T,samples:E}}function Xy(r){let t=this,e=null,n=0,i=!1,s=!1,o=new $i,a=new ie,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){let d=h.length!==0||f||n!==0||i;return i=f,n=h.length,d},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){let m=h.clippingPlanes,g=h.clipIntersection,_=h.clipShadows,p=r.get(h);if(!i||m===null||m.length===0||s&&!_)s?u(null):c();else{let y=s?0:n,v=y*4,M=p.clippingState||null;l.value=M,M=u(m,f,v,d);for(let T=0;T!==v;++T)M[T]=e[T];p.clippingState=M,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,m){let g=h!==null?h.length:0,_=null;if(g!==0){if(_=l.value,m!==!0||_===null){let p=d+g*4,y=f.matrixWorldInverse;a.getNormalMatrix(y),(_===null||_.length<p)&&(_=new Float32Array(p));for(let v=0,M=d;v!==g;++v,M+=4)o.copy(h[v]).applyMatrix4(y,a),o.normal.toArray(_,M),_[M+3]=o.constant}l.value=_,l.needsUpdate=!0}return t.numPlanes=g,t.numIntersection=0,_}}function qy(r){let t=new WeakMap;function e(o,a){return a===Qc?o.mapping=$r:a===th&&(o.mapping=Ps),o}function n(o){if(o&&o.isTexture){let a=o.mapping;if(a===Qc||a===th)if(t.has(o)){let l=t.get(o).texture;return e(l,o.mapping)}else{let l=o.image;if(l&&l.height>0){let c=new Ia(l.height);return c.fromEquirectangularTexture(r,o),t.set(o,c),o.addEventListener("dispose",i),e(c.texture,o.mapping)}else return null}}return o}function i(o){let a=o.target;a.removeEventListener("dispose",i);let l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}var jr=4,Bm=[.125,.215,.35,.446,.526,.582],Fs=20,Yy=256,el=new Zr,km=new jt,qd=null,Yd=0,Zd=0,$d=!1,Zy=new U,Qr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,n=.1,i=100,s={}){let{size:o=256,position:a=Zy}=s;qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,n,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Vm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(qd,Yd,Zd),this._renderer.xr.enabled=$d,t.scissorTest=!1,Fo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===$r||t.mapping===Ps?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),qd=this._renderer.getRenderTarget(),Yd=this._renderer.getActiveCubeFace(),Zd=this._renderer.getActiveMipmapLevel(),$d=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:er,format:Pi,colorSpace:Ss,depthBuffer:!1},i=zm(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zm(t,e,n);let{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=$y(s)),this._blurMaterial=Ky(s,t,e),this._ggxMaterial=Jy(s,t,e)}return i}_compileMaterial(t){let e=new Me(new ze,t);this._renderer.compile(e,el)}_sceneToCubeUV(t,e,n,i,s){let l=new cn(90,1,e,n),c=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],h=this._renderer,f=h.autoClear,d=h.toneMapping;h.getClearColor(km),h.toneMapping=Xi,h.autoClear=!1,h.state.buffers.depth.getReversed()&&(h.setRenderTarget(i),h.clearDepth(),h.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Me(new Ue,new Gr({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1})));let g=this._backgroundBox,_=g.material,p=!1,y=t.background;y?y.isColor&&(_.color.copy(y),t.background=null,p=!0):(_.color.copy(km),p=!0);for(let v=0;v<6;v++){let M=v%3;M===0?(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+u[v],s.y,s.z)):M===1?(l.up.set(0,0,c[v]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+u[v],s.z)):(l.up.set(0,c[v],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+u[v]));let T=this._cubeSize;Fo(i,M*T,v>2?T:0,T,T),h.setRenderTarget(i),p&&h.render(g,l),h.render(t,l)}h.toneMapping=d,h.autoClear=f,t.background=y}_textureToCubeUV(t,e){let n=this._renderer,i=t.mapping===$r||t.mapping===Ps;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hm()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Vm());let s=i?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;let a=s.uniforms;a.envMap.value=t;let l=this._cubeSize;Fo(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,el)}_applyPMREM(t){let e=this._renderer,n=e.autoClear;e.autoClear=!1;let i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(t,s-1,s);e.autoClear=n}_applyGGXFilter(t,e,n){let i=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[n];a.material=o;let l=o.uniforms,c=n/(this._lodMeshes.length-1),u=e/(this._lodMeshes.length-1),h=Math.sqrt(c*c-u*u),f=0+c*1.25,d=h*f,{_lodMax:m}=this,g=this._sizeLods[n],_=3*g*(n>m-jr?n-m+jr:0),p=4*(this._cubeSize-g);l.envMap.value=t.texture,l.roughness.value=d,l.mipInt.value=m-e,Fo(s,_,p,3*g,2*g),i.setRenderTarget(s),i.render(a,el),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=m-n,Fo(t,_,p,3*g,2*g),i.setRenderTarget(t),i.render(a,el)}_blur(t,e,n,i,s){let o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,i,"latitudinal",s),this._halfBlur(o,t,n,n,i,"longitudinal",s)}_halfBlur(t,e,n,i,s,o,a){let l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&Yt("blur direction must be either latitudinal or longitudinal!");let u=3,h=this._lodMeshes[i];h.material=c;let f=c.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Fs-1),g=s/m,_=isFinite(s)?1+Math.floor(u*g):Fs;_>Fs&&Jt(`sigmaRadians, ${s}, is too large and will clip, as it requested ${_} samples when the maximum is set to ${Fs}`);let p=[],y=0;for(let w=0;w<Fs;++w){let R=w/g,x=Math.exp(-R*R/2);p.push(x),w===0?y+=x:w<_&&(y+=2*x)}for(let w=0;w<p.length;w++)p[w]=p[w]/y;f.envMap.value=t.texture,f.samples.value=_,f.weights.value=p,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);let{_lodMax:v}=this;f.dTheta.value=m,f.mipInt.value=v-n;let M=this._sizeLods[i],T=3*M*(i>v-jr?i-v+jr:0),E=4*(this._cubeSize-M);Fo(e,T,E,3*M,2*M),l.setRenderTarget(e),l.render(h,el)}};function $y(r){let t=[],e=[],n=[],i=r,s=r-jr+1+Bm.length;for(let o=0;o<s;o++){let a=Math.pow(2,i);t.push(a);let l=1/a;o>r-jr?l=Bm[o-r+jr-1]:o===0&&(l=0),e.push(l);let c=1/(a-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,m=6,g=3,_=2,p=1,y=new Float32Array(g*m*d),v=new Float32Array(_*m*d),M=new Float32Array(p*m*d);for(let E=0;E<d;E++){let w=E%3*2/3-1,R=E>2?0:-1,x=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(x,g*m*E),v.set(f,_*m*E);let b=[E,E,E,E,E,E];M.set(b,p*m*E)}let T=new ze;T.setAttribute("position",new hn(y,g)),T.setAttribute("uv",new hn(v,_)),T.setAttribute("faceIndex",new hn(M,p)),n.push(new Me(T,null)),i>jr&&i--}return{lodMeshes:n,sizeLods:t,sigmas:e}}function zm(r,t,e){let n=new di(r,t,e);return n.texture.mapping=$a,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Fo(r,t,e,n,i){r.viewport.set(t,e,n,i),r.scissor.set(t,e,n,i)}function Jy(r,t,e){return new fi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Yy,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:qh(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Ky(r,t,e){let n=new Float32Array(Fs),i=new U(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:Fs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:qh(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Vm(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:qh(),fragmentShader:`

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
		`,blending:tr,depthTest:!1,depthWrite:!1})}function Hm(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:qh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:tr,depthTest:!1,depthWrite:!1})}function qh(){return`

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
	`}function jy(r){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){let l=a.mapping,c=l===Qc||l===th,u=l===$r||l===Ps;if(c||u){let h=t.get(a),f=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Qr(r)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{let d=a.image;return c&&d&&d.height>0||u&&d&&i(d)?(e===null&&(e=new Qr(r)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",s),h.texture):null}}}return a}function i(a){let l=0,c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){let l=a.target;l.removeEventListener("dispose",s);let c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Qy(r){let t={};function e(n){if(t[n]!==void 0)return t[n];let i=r.getExtension(n);return t[n]=i,i}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){let i=e(n);return i===null&&Eo("WebGLRenderer: "+n+" extension not supported."),i}}}function t1(r,t,e,n){let i={},s=new WeakMap;function o(h){let f=h.target;f.index!==null&&t.remove(f.index);for(let m in f.attributes)t.remove(f.attributes[m]);f.removeEventListener("dispose",o),delete i[f.id];let d=s.get(f);d&&(t.remove(d),s.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(h,f){return i[f.id]===!0||(f.addEventListener("dispose",o),i[f.id]=!0,e.memory.geometries++),f}function l(h){let f=h.attributes;for(let d in f)t.update(f[d],r.ARRAY_BUFFER)}function c(h){let f=[],d=h.index,m=h.attributes.position,g=0;if(d!==null){let y=d.array;g=d.version;for(let v=0,M=y.length;v<M;v+=3){let T=y[v+0],E=y[v+1],w=y[v+2];f.push(T,E,E,w,w,T)}}else if(m!==void 0){let y=m.array;g=m.version;for(let v=0,M=y.length/3-1;v<M;v+=3){let T=v+0,E=v+1,w=v+2;f.push(T,E,E,w,w,T)}}else return;let _=new(zd(f)?Ca:Aa)(f,1);_.version=g;let p=s.get(h);p&&t.remove(p),s.set(h,_)}function u(h){let f=s.get(h);if(f){let d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return s.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function e1(r,t,e){let n;function i(f){n=f}let s,o;function a(f){s=f.type,o=f.bytesPerElement}function l(f,d){r.drawElements(n,d,s,f*o),e.update(d,n,1)}function c(f,d,m){m!==0&&(r.drawElementsInstanced(n,d,s,f*o,m),e.update(d,n,m))}function u(f,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,s,f,0,m);let _=0;for(let p=0;p<m;p++)_+=d[p];e.update(_,n,1)}function h(f,d,m,g){if(m===0)return;let _=t.get("WEBGL_multi_draw");if(_===null)for(let p=0;p<f.length;p++)c(f[p]/o,d[p],g[p]);else{_.multiDrawElementsInstancedWEBGL(n,d,0,s,f,0,g,0,m);let p=0;for(let y=0;y<m;y++)p+=d[y]*g[y];e.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function n1(r){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case r.TRIANGLES:e.triangles+=a*(s/3);break;case r.LINES:e.lines+=a*(s/2);break;case r.LINE_STRIP:e.lines+=a*(s-1);break;case r.LINE_LOOP:e.lines+=a*s;break;case r.POINTS:e.points+=a*s;break;default:Yt("WebGLInfo: Unknown draw mode:",o);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:n}}function i1(r,t,e){let n=new WeakMap,i=new Ge;function s(o,a,l){let c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0,f=n.get(a);if(f===void 0||f.count!==h){let x=function(){w.dispose(),n.delete(a),a.removeEventListener("dispose",x)};f!==void 0&&f.texture.dispose();let d=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,_=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],y=a.morphAttributes.color||[],v=0;d===!0&&(v=1),m===!0&&(v=2),g===!0&&(v=3);let M=a.attributes.position.count*v,T=1;M>t.maxTextureSize&&(T=Math.ceil(M/t.maxTextureSize),M=t.maxTextureSize);let E=new Float32Array(M*T*4*h),w=new Ta(E,M,T,h);w.type=Ri,w.needsUpdate=!0;let R=v*4;for(let b=0;b<h;b++){let L=_[b],F=p[b],k=y[b],H=M*T*4*b;for(let Y=0;Y<L.count;Y++){let W=Y*R;d===!0&&(i.fromBufferAttribute(L,Y),E[H+W+0]=i.x,E[H+W+1]=i.y,E[H+W+2]=i.z,E[H+W+3]=0),m===!0&&(i.fromBufferAttribute(F,Y),E[H+W+4]=i.x,E[H+W+5]=i.y,E[H+W+6]=i.z,E[H+W+7]=0),g===!0&&(i.fromBufferAttribute(k,Y),E[H+W+8]=i.x,E[H+W+9]=i.y,E[H+W+10]=i.z,E[H+W+11]=k.itemSize===4?i.w:1)}}f={count:h,texture:w,size:new Dt(M,T)},n.set(a,f),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(r,"morphTexture",o.morphTexture,e);else{let d=0;for(let g=0;g<c.length;g++)d+=c[g];let m=a.morphTargetsRelative?1:1-d;l.getUniforms().setValue(r,"morphTargetBaseInfluence",m),l.getUniforms().setValue(r,"morphTargetInfluences",c)}l.getUniforms().setValue(r,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(r,"morphTargetsTextureSize",f.size)}return{update:s}}function r1(r,t,e,n){let i=new WeakMap;function s(l){let c=n.render.frame,u=l.geometry,h=t.get(l,u);if(i.get(h)!==c&&(t.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(e.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,r.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;i.get(f)!==c&&(f.update(),i.set(f,c))}return h}function o(){i=new WeakMap}function a(l){let c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:s,dispose:o}}var s1={[wd]:"LINEAR_TONE_MAPPING",[Ad]:"REINHARD_TONE_MAPPING",[Cd]:"CINEON_TONE_MAPPING",[Rs]:"ACES_FILMIC_TONE_MAPPING",[Pd]:"AGX_TONE_MAPPING",[Id]:"NEUTRAL_TONE_MAPPING",[Rd]:"CUSTOM_TONE_MAPPING"};function o1(r,t,e,n,i){let s=new di(t,e,{type:r,depthBuffer:n,stencilBuffer:i}),o=new di(t,e,{type:er,depthBuffer:!1,stencilBuffer:!1}),a=new ze;a.setAttribute("position",new fe([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new fe([0,2,0,0,2,0],2));let l=new Ic({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),c=new Me(a,l),u=new Zr(-1,1,1,-1,0,1),h=null,f=null,d=!1,m,g=null,_=[],p=!1;this.setSize=function(y,v){s.setSize(y,v),o.setSize(y,v);for(let M=0;M<_.length;M++){let T=_[M];T.setSize&&T.setSize(y,v)}},this.setEffects=function(y){_=y,p=_.length>0&&_[0].isRenderPass===!0;let v=s.width,M=s.height;for(let T=0;T<_.length;T++){let E=_[T];E.setSize&&E.setSize(v,M)}},this.begin=function(y,v){if(d||y.toneMapping===Xi&&_.length===0)return!1;if(g=v,v!==null){let M=v.width,T=v.height;(s.width!==M||s.height!==T)&&this.setSize(M,T)}return p===!1&&y.setRenderTarget(s),m=y.toneMapping,y.toneMapping=Xi,!0},this.hasRenderPass=function(){return p},this.end=function(y,v){y.toneMapping=m,d=!0;let M=s,T=o;for(let E=0;E<_.length;E++){let w=_[E];if(w.enabled!==!1&&(w.render(y,T,M,v),w.needsSwap!==!1)){let R=M;M=T,T=R}}if(h!==y.outputColorSpace||f!==y.toneMapping){h=y.outputColorSpace,f=y.toneMapping,l.defines={},ge.getTransfer(h)===be&&(l.defines.SRGB_TRANSFER="");let E=s1[f];E&&(l.defines[E]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(g),y.render(c,u),g=null,d=!1},this.isCompositing=function(){return d},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}var a0=new Hn,jd=new Xr(1,1),l0=new Ta,c0=new yc,h0=new Pa,Gm=[],Wm=[],Xm=new Float32Array(16),qm=new Float32Array(9),Ym=new Float32Array(4);function Oo(r,t,e){let n=r[0];if(n<=0||n>0)return r;let i=t*e,s=Gm[i];if(s===void 0&&(s=new Float32Array(i),Gm[i]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,r[o].toArray(s,a)}return s}function un(r,t){if(r.length!==t.length)return!1;for(let e=0,n=r.length;e<n;e++)if(r[e]!==t[e])return!1;return!0}function dn(r,t){for(let e=0,n=t.length;e<n;e++)r[e]=t[e]}function Yh(r,t){let e=Wm[t];e===void 0&&(e=new Int32Array(t),Wm[t]=e);for(let n=0;n!==t;++n)e[n]=r.allocateTextureUnit();return e}function a1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1f(this.addr,t),e[0]=t)}function l1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2fv(this.addr,t),dn(e,t)}}function c1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(r.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(un(e,t))return;r.uniform3fv(this.addr,t),dn(e,t)}}function h1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4fv(this.addr,t),dn(e,t)}}function u1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix2fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Ym.set(n),r.uniformMatrix2fv(this.addr,!1,Ym),dn(e,n)}}function d1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix3fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;qm.set(n),r.uniformMatrix3fv(this.addr,!1,qm),dn(e,n)}}function f1(r,t){let e=this.cache,n=t.elements;if(n===void 0){if(un(e,t))return;r.uniformMatrix4fv(this.addr,!1,t),dn(e,t)}else{if(un(e,n))return;Xm.set(n),r.uniformMatrix4fv(this.addr,!1,Xm),dn(e,n)}}function p1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1i(this.addr,t),e[0]=t)}function m1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2iv(this.addr,t),dn(e,t)}}function g1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3iv(this.addr,t),dn(e,t)}}function _1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4iv(this.addr,t),dn(e,t)}}function x1(r,t){let e=this.cache;e[0]!==t&&(r.uniform1ui(this.addr,t),e[0]=t)}function v1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(r.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(un(e,t))return;r.uniform2uiv(this.addr,t),dn(e,t)}}function y1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(r.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(un(e,t))return;r.uniform3uiv(this.addr,t),dn(e,t)}}function M1(r,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(r.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(un(e,t))return;r.uniform4uiv(this.addr,t),dn(e,t)}}function b1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(jd.compareFunction=e.isReversedDepthBuffer()?Gh:Hh,s=jd):s=a0,e.setTexture2D(t||s,i)}function S1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture3D(t||c0,i)}function T1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTextureCube(t||h0,i)}function E1(r,t,e){let n=this.cache,i=e.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),e.setTexture2DArray(t||l0,i)}function w1(r){switch(r){case 5126:return a1;case 35664:return l1;case 35665:return c1;case 35666:return h1;case 35674:return u1;case 35675:return d1;case 35676:return f1;case 5124:case 35670:return p1;case 35667:case 35671:return m1;case 35668:case 35672:return g1;case 35669:case 35673:return _1;case 5125:return x1;case 36294:return v1;case 36295:return y1;case 36296:return M1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return T1;case 36289:case 36303:case 36311:case 36292:return E1}}function A1(r,t){r.uniform1fv(this.addr,t)}function C1(r,t){let e=Oo(t,this.size,2);r.uniform2fv(this.addr,e)}function R1(r,t){let e=Oo(t,this.size,3);r.uniform3fv(this.addr,e)}function P1(r,t){let e=Oo(t,this.size,4);r.uniform4fv(this.addr,e)}function I1(r,t){let e=Oo(t,this.size,4);r.uniformMatrix2fv(this.addr,!1,e)}function D1(r,t){let e=Oo(t,this.size,9);r.uniformMatrix3fv(this.addr,!1,e)}function L1(r,t){let e=Oo(t,this.size,16);r.uniformMatrix4fv(this.addr,!1,e)}function N1(r,t){r.uniform1iv(this.addr,t)}function F1(r,t){r.uniform2iv(this.addr,t)}function U1(r,t){r.uniform3iv(this.addr,t)}function O1(r,t){r.uniform4iv(this.addr,t)}function B1(r,t){r.uniform1uiv(this.addr,t)}function k1(r,t){r.uniform2uiv(this.addr,t)}function z1(r,t){r.uniform3uiv(this.addr,t)}function V1(r,t){r.uniform4uiv(this.addr,t)}function H1(r,t,e){let n=this.cache,i=t.length,s=Yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));let o;this.type===r.SAMPLER_2D_SHADOW?o=jd:o=a0;for(let a=0;a!==i;++a)e.setTexture2D(t[a]||o,s[a])}function G1(r,t,e){let n=this.cache,i=t.length,s=Yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTexture3D(t[o]||c0,s[o])}function W1(r,t,e){let n=this.cache,i=t.length,s=Yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTextureCube(t[o]||h0,s[o])}function X1(r,t,e){let n=this.cache,i=t.length,s=Yh(e,i);un(n,s)||(r.uniform1iv(this.addr,s),dn(n,s));for(let o=0;o!==i;++o)e.setTexture2DArray(t[o]||l0,s[o])}function q1(r){switch(r){case 5126:return A1;case 35664:return C1;case 35665:return R1;case 35666:return P1;case 35674:return I1;case 35675:return D1;case 35676:return L1;case 5124:case 35670:return N1;case 35667:case 35671:return F1;case 35668:case 35672:return U1;case 35669:case 35673:return O1;case 5125:return B1;case 36294:return k1;case 36295:return z1;case 36296:return V1;case 35678:case 36198:case 36298:case 36306:case 35682:return H1;case 35679:case 36299:case 36307:return G1;case 35680:case 36300:case 36308:case 36293:return W1;case 36289:case 36303:case 36311:case 36292:return X1}}var Qd=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=w1(e.type)}},tf=class{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=q1(e.type)}},ef=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){let i=this.seq;for(let s=0,o=i.length;s!==o;++s){let a=i[s];a.setValue(t,e[a.id],n)}}},Jd=/(\w+)(\])?(\[|\.)?/g;function Zm(r,t){r.seq.push(t),r.map[t.id]=t}function Y1(r,t,e){let n=r.name,i=n.length;for(Jd.lastIndex=0;;){let s=Jd.exec(n),o=Jd.lastIndex,a=s[1],l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Zm(e,c===void 0?new Qd(a,r,t):new tf(a,r,t));break}else{let h=e.map[a];h===void 0&&(h=new ef(a),Zm(e,h)),e=h}}}var Uo=class{constructor(t,e){this.seq=[],this.map={};let n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let o=0;o<n;++o){let a=t.getActiveUniform(e,o),l=t.getUniformLocation(e,a.name);Y1(a,l,this)}let i=[],s=[];for(let o of this.seq)o.type===t.SAMPLER_2D_SHADOW||o.type===t.SAMPLER_CUBE_SHADOW||o.type===t.SAMPLER_2D_ARRAY_SHADOW?i.push(o):s.push(o);i.length>0&&(this.seq=i.concat(s))}setValue(t,e,n,i){let s=this.map[e];s!==void 0&&s.setValue(t,n,i)}setOptional(t,e,n){let i=e[n];i!==void 0&&this.setValue(t,n,i)}static upload(t,e,n,i){for(let s=0,o=e.length;s!==o;++s){let a=e[s],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){let n=[];for(let i=0,s=t.length;i!==s;++i){let o=t[i];o.id in e&&n.push(o)}return n}};function $m(r,t,e){let n=r.createShader(t);return r.shaderSource(n,e),r.compileShader(n),n}var Z1=37297,$1=0;function J1(r,t){let e=r.split(`
`),n=[],i=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=i;o<s;o++){let a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}var Jm=new ie;function K1(r){ge._getMatrix(Jm,ge.workingColorSpace,r);let t=`mat3( ${Jm.elements.map(e=>e.toFixed(4))} )`;switch(ge.getTransfer(r)){case ya:return[t,"LinearTransferOETF"];case be:return[t,"sRGBTransferOETF"];default:return Jt("WebGLProgram: Unsupported color space: ",r),[t,"LinearTransferOETF"]}}function Km(r,t,e){let n=r.getShaderParameter(t,r.COMPILE_STATUS),s=(r.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";let o=/ERROR: 0:(\d+)/.exec(s);if(o){let a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+J1(r.getShaderSource(t),a)}else return s}function j1(r,t){let e=K1(t);return[`vec4 ${r}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}var Q1={[wd]:"Linear",[Ad]:"Reinhard",[Cd]:"Cineon",[Rs]:"ACESFilmic",[Pd]:"AgX",[Id]:"Neutral",[Rd]:"Custom"};function tM(r,t){let e=Q1[t];return e===void 0?(Jt("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}var Xh=new U;function eM(){ge.getLuminanceCoefficients(Xh);let r=Xh.x.toFixed(4),t=Xh.y.toFixed(4),e=Xh.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nM(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(il).join(`
`)}function iM(r){let t=[];for(let e in r){let n=r[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function rM(r,t){let e={},n=r.getProgramParameter(t,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){let s=r.getActiveAttrib(t,i),o=s.name,a=1;s.type===r.FLOAT_MAT2&&(a=2),s.type===r.FLOAT_MAT3&&(a=3),s.type===r.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:r.getAttribLocation(t,o),locationSize:a}}return e}function il(r){return r!==""}function jm(r,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qm(r,t){return r.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}var sM=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(r){return r.replace(sM,aM)}var oM=new Map;function aM(r,t){let e=se[t];if(e===void 0){let n=oM.get(t);if(n!==void 0)e=se[n],Jt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return nf(e)}var lM=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function t0(r){return r.replace(lM,cM)}function cM(r,t,e,n){let i="";for(let s=parseInt(t);s<parseInt(e);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function e0(r){let t=`precision ${r.precision} float;
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
#define LOW_PRECISION`),t}var hM={[Za]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function uM(r){return hM[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var dM={[$r]:"ENVMAP_TYPE_CUBE",[Ps]:"ENVMAP_TYPE_CUBE",[$a]:"ENVMAP_TYPE_CUBE_UV"};function fM(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":dM[r.envMapMode]||"ENVMAP_TYPE_CUBE"}var pM={[Ps]:"ENVMAP_MODE_REFRACTION"};function mM(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":pM[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}var gM={[jc]:"ENVMAP_BLENDING_MULTIPLY",[Mm]:"ENVMAP_BLENDING_MIX",[bm]:"ENVMAP_BLENDING_ADD"};function _M(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":gM[r.combine]||"ENVMAP_BLENDING_NONE"}function xM(r){let t=r.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function vM(r,t,e,n){let i=r.getContext(),s=e.defines,o=e.vertexShader,a=e.fragmentShader,l=uM(e),c=fM(e),u=mM(e),h=_M(e),f=xM(e),d=nM(e),m=iM(s),g=i.createProgram(),_,p,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(_=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(il).join(`
`),_.length>0&&(_+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(il).join(`
`),p.length>0&&(p+=`
`)):(_=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(il).join(`
`),p=[e0(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Xi?"#define TONE_MAPPING":"",e.toneMapping!==Xi?se.tonemapping_pars_fragment:"",e.toneMapping!==Xi?tM("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,j1("linearToOutputTexel",e.outputColorSpace),eM(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(il).join(`
`)),o=nf(o),o=jm(o,e),o=Qm(o,e),a=nf(a),a=jm(a,e),a=Qm(a,e),o=t0(o),a=t0(a),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,_=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+_,p=["#define varying in",e.glslVersion===kd?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===kd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let v=y+_+o,M=y+p+a,T=$m(i,i.VERTEX_SHADER,v),E=$m(i,i.FRAGMENT_SHADER,M);i.attachShader(g,T),i.attachShader(g,E),e.index0AttributeName!==void 0?i.bindAttribLocation(g,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function w(L){if(r.debug.checkShaderErrors){let F=i.getProgramInfoLog(g)||"",k=i.getShaderInfoLog(T)||"",H=i.getShaderInfoLog(E)||"",Y=F.trim(),W=k.trim(),G=H.trim(),Z=!0,it=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(Z=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,g,T,E);else{let N=Km(i,T,"vertex"),nt=Km(i,E,"fragment");Yt("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+Y+`
`+N+`
`+nt)}else Y!==""?Jt("WebGLProgram: Program Info Log:",Y):(W===""||G==="")&&(it=!1);it&&(L.diagnostics={runnable:Z,programLog:Y,vertexShader:{log:W,prefix:_},fragmentShader:{log:G,prefix:p}})}i.deleteShader(T),i.deleteShader(E),R=new Uo(i,g),x=rM(i,g)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let x;this.getAttributes=function(){return x===void 0&&w(this),x};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,Z1)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=$1++,this.cacheKey=t,this.usedTimes=1,this.program=g,this.vertexShader=T,this.fragmentShader=E,this}var yM=0,rf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){let e=t.vertexShader,n=t.fragmentShader,i=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){let e=this.shaderCache,n=e.get(t);return n===void 0&&(n=new sf(t),e.set(t,n)),n}},sf=class{constructor(t){this.id=yM++,this.code=t,this.usedTimes=0}};function MM(r,t,e,n,i,s,o){let a=new wa,l=new rf,c=new Set,u=[],h=new Map,f=i.logarithmicDepthBuffer,d=i.precision,m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,L,F,k){let H=F.fog,Y=k.geometry,W=x.isMeshStandardMaterial?F.environment:null,G=(x.isMeshStandardMaterial?e:t).get(x.envMap||W),Z=G&&G.mapping===$a?G.image.height:null,it=m[x.type];x.precision!==null&&(d=i.getMaxPrecision(x.precision),d!==x.precision&&Jt("WebGLProgram.getParameters:",x.precision,"not supported, using",d,"instead."));let N=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=N!==void 0?N.length:0,Lt=0;Y.morphAttributes.position!==void 0&&(Lt=1),Y.morphAttributes.normal!==void 0&&(Lt=2),Y.morphAttributes.color!==void 0&&(Lt=3);let Ot,Bt,Zt,K;if(it){let Tt=ir[it];Ot=Tt.vertexShader,Bt=Tt.fragmentShader}else Ot=x.vertexShader,Bt=x.fragmentShader,l.update(x),Zt=l.getVertexShaderID(x),K=l.getFragmentShaderID(x);let j=r.getRenderTarget(),ht=r.state.buffers.depth.getReversed(),Ct=k.isInstancedMesh===!0,gt=k.isBatchedMesh===!0,Vt=!!x.map,oe=!!x.matcap,_t=!!G,Nt=!!x.aoMap,Gt=!!x.lightMap,Ut=!!x.bumpMap,q=!!x.normalMap,O=!!x.displacementMap,me=!!x.emissiveMap,ee=!!x.metalnessMap,Wt=!!x.roughnessMap,At=x.anisotropy>0,P=x.clearcoat>0,S=x.dispersion>0,C=x.iridescence>0,I=x.sheen>0,B=x.transmission>0,z=At&&!!x.anisotropyMap,rt=P&&!!x.clearcoatMap,Q=P&&!!x.clearcoatNormalMap,vt=P&&!!x.clearcoatRoughnessMap,yt=C&&!!x.iridescenceMap,et=C&&!!x.iridescenceThicknessMap,lt=I&&!!x.sheenColorMap,St=I&&!!x.sheenRoughnessMap,Rt=!!x.specularMap,ct=!!x.specularColorMap,pt=!!x.specularIntensityMap,D=B&&!!x.transmissionMap,ut=B&&!!x.thicknessMap,ot=!!x.gradientMap,mt=!!x.alphaMap,st=x.alphaTest>0,tt=!!x.alphaHash,ft=!!x.extensions,Ht=Xi;x.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Ht=r.toneMapping);let _e={shaderID:it,shaderType:x.type,shaderName:x.name,vertexShader:Ot,fragmentShader:Bt,defines:x.defines,customVertexShaderID:Zt,customFragmentShaderID:K,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:d,batching:gt,batchingColor:gt&&k._colorsTexture!==null,instancing:Ct,instancingColor:Ct&&k.instanceColor!==null,instancingMorph:Ct&&k.morphTexture!==null,outputColorSpace:j===null?r.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Ss,alphaToCoverage:!!x.alphaToCoverage,map:Vt,matcap:oe,envMap:_t,envMapMode:_t&&G.mapping,envMapCubeUVHeight:Z,aoMap:Nt,lightMap:Gt,bumpMap:Ut,normalMap:q,displacementMap:O,emissiveMap:me,normalMapObjectSpace:q&&x.normalMapType===Em,normalMapTangentSpace:q&&x.normalMapType===Vh,metalnessMap:ee,roughnessMap:Wt,anisotropy:At,anisotropyMap:z,clearcoat:P,clearcoatMap:rt,clearcoatNormalMap:Q,clearcoatRoughnessMap:vt,dispersion:S,iridescence:C,iridescenceMap:yt,iridescenceThicknessMap:et,sheen:I,sheenColorMap:lt,sheenRoughnessMap:St,specularMap:Rt,specularColorMap:ct,specularIntensityMap:pt,transmission:B,transmissionMap:D,thicknessMap:ut,gradientMap:ot,opaque:x.transparent===!1&&x.blending===Ms&&x.alphaToCoverage===!1,alphaMap:mt,alphaTest:st,alphaHash:tt,combine:x.combine,mapUv:Vt&&g(x.map.channel),aoMapUv:Nt&&g(x.aoMap.channel),lightMapUv:Gt&&g(x.lightMap.channel),bumpMapUv:Ut&&g(x.bumpMap.channel),normalMapUv:q&&g(x.normalMap.channel),displacementMapUv:O&&g(x.displacementMap.channel),emissiveMapUv:me&&g(x.emissiveMap.channel),metalnessMapUv:ee&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:z&&g(x.anisotropyMap.channel),clearcoatMapUv:rt&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Q&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:yt&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:et&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(x.sheenRoughnessMap.channel),specularMapUv:Rt&&g(x.specularMap.channel),specularColorMapUv:ct&&g(x.specularColorMap.channel),specularIntensityMapUv:pt&&g(x.specularIntensityMap.channel),transmissionMapUv:D&&g(x.transmissionMap.channel),thicknessMapUv:ut&&g(x.thicknessMap.channel),alphaMapUv:mt&&g(x.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(q||At),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:k.isPoints===!0&&!!Y.attributes.uv&&(Vt||mt),fog:!!H,useFog:x.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:x.flatShading===!0&&x.wireframe===!1,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:ht,skinning:k.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&L.length>0,shadowMapType:r.shadowMap.type,toneMapping:Ht,decodeVideoTexture:Vt&&x.map.isVideoTexture===!0&&ge.getTransfer(x.map.colorSpace)===be,decodeVideoTextureEmissive:me&&x.emissiveMap.isVideoTexture===!0&&ge.getTransfer(x.emissiveMap.colorSpace)===be,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===gi,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:ft&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&x.extensions.multiDraw===!0||gt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return _e.vertexUv1s=c.has(1),_e.vertexUv2s=c.has(2),_e.vertexUv3s=c.has(3),c.clear(),_e}function p(x){let b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(let L in x.defines)b.push(L),b.push(x.defines[L]);return x.isRawShaderMaterial===!1&&(y(b,x),v(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function v(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),x.push(a.mask)}function M(x){let b=m[x.type],L;if(b){let F=ir[b];L=Fm.clone(F.uniforms)}else L=x.uniforms;return L}function T(x,b){let L=h.get(b);return L!==void 0?++L.usedTimes:(L=new vM(r,b,x,s),u.push(L),h.set(b,L)),L}function E(x){if(--x.usedTimes===0){let b=u.indexOf(x);u[b]=u[u.length-1],u.pop(),h.delete(x.cacheKey),x.destroy()}}function w(x){l.remove(x)}function R(){l.dispose()}return{getParameters:_,getProgramCacheKey:p,getUniforms:M,acquireProgram:T,releaseProgram:E,releaseShaderCache:w,programs:u,dispose:R}}function bM(){let r=new WeakMap;function t(o){return r.has(o)}function e(o){let a=r.get(o);return a===void 0&&(a={},r.set(o,a)),a}function n(o){r.delete(o)}function i(o,a,l){r.get(o)[a]=l}function s(){r=new WeakMap}return{has:t,get:e,remove:n,update:i,dispose:s}}function SM(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.material.id!==t.material.id?r.material.id-t.material.id:r.z!==t.z?r.z-t.z:r.id-t.id}function n0(r,t){return r.groupOrder!==t.groupOrder?r.groupOrder-t.groupOrder:r.renderOrder!==t.renderOrder?r.renderOrder-t.renderOrder:r.z!==t.z?t.z-r.z:r.id-t.id}function i0(){let r=[],t=0,e=[],n=[],i=[];function s(){t=0,e.length=0,n.length=0,i.length=0}function o(h,f,d,m,g,_){let p=r[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:m,renderOrder:h.renderOrder,z:g,group:_},r[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=m,p.renderOrder=h.renderOrder,p.z=g,p.group=_),t++,p}function a(h,f,d,m,g,_){let p=o(h,f,d,m,g,_);d.transmission>0?n.push(p):d.transparent===!0?i.push(p):e.push(p)}function l(h,f,d,m,g,_){let p=o(h,f,d,m,g,_);d.transmission>0?n.unshift(p):d.transparent===!0?i.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||SM),n.length>1&&n.sort(f||n0),i.length>1&&i.sort(f||n0)}function u(){for(let h=t,f=r.length;h<f;h++){let d=r[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:i,init:s,push:a,unshift:l,finish:u,sort:c}}function TM(){let r=new WeakMap;function t(n,i){let s=r.get(n),o;return s===void 0?(o=new i0,r.set(n,[o])):i>=s.length?(o=new i0,s.push(o)):o=s[i],o}function e(){r=new WeakMap}return{get:t,dispose:e}}function EM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new jt};break;case"SpotLight":e={position:new U,direction:new U,color:new jt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new jt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new jt,groundColor:new jt};break;case"RectAreaLight":e={color:new jt,position:new U,halfWidth:new U,halfHeight:new U};break}return r[t.id]=e,e}}}function wM(){let r={};return{get:function(t){if(r[t.id]!==void 0)return r[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[t.id]=e,e}}}var AM=0;function CM(r,t){return(t.castShadow?2:0)-(r.castShadow?2:0)+(t.map?1:0)-(r.map?1:0)}function RM(r){let t=new EM,e=wM(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new U);let i=new U,s=new Pe,o=new Pe;function a(c){let u=0,h=0,f=0;for(let x=0;x<9;x++)n.probe[x].set(0,0,0);let d=0,m=0,g=0,_=0,p=0,y=0,v=0,M=0,T=0,E=0,w=0;c.sort(CM);for(let x=0,b=c.length;x<b;x++){let L=c[x],F=L.color,k=L.intensity,H=L.distance,Y=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Is?Y=L.shadow.map.texture:Y=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)u+=F.r*k,h+=F.g*k,f+=F.b*k;else if(L.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(L.sh.coefficients[W],k);w++}else if(L.isDirectionalLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){let G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.directionalShadow[d]=Z,n.directionalShadowMap[d]=Y,n.directionalShadowMatrix[d]=L.shadow.matrix,y++}n.directional[d]=W,d++}else if(L.isSpotLight){let W=t.get(L);W.position.setFromMatrixPosition(L.matrixWorld),W.color.copy(F).multiplyScalar(k),W.distance=H,W.coneCos=Math.cos(L.angle),W.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),W.decay=L.decay,n.spot[g]=W;let G=L.shadow;if(L.map&&(n.spotLightMap[T]=L.map,T++,G.updateMatrices(L),L.castShadow&&E++),n.spotLightMatrix[g]=G.matrix,L.castShadow){let Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,n.spotShadow[g]=Z,n.spotShadowMap[g]=Y,M++}g++}else if(L.isRectAreaLight){let W=t.get(L);W.color.copy(F).multiplyScalar(k),W.halfWidth.set(L.width*.5,0,0),W.halfHeight.set(0,L.height*.5,0),n.rectArea[_]=W,_++}else if(L.isPointLight){let W=t.get(L);if(W.color.copy(L.color).multiplyScalar(L.intensity),W.distance=L.distance,W.decay=L.decay,L.castShadow){let G=L.shadow,Z=e.get(L);Z.shadowIntensity=G.intensity,Z.shadowBias=G.bias,Z.shadowNormalBias=G.normalBias,Z.shadowRadius=G.radius,Z.shadowMapSize=G.mapSize,Z.shadowCameraNear=G.camera.near,Z.shadowCameraFar=G.camera.far,n.pointShadow[m]=Z,n.pointShadowMap[m]=Y,n.pointShadowMatrix[m]=L.shadow.matrix,v++}n.point[m]=W,m++}else if(L.isHemisphereLight){let W=t.get(L);W.skyColor.copy(L.color).multiplyScalar(k),W.groundColor.copy(L.groundColor).multiplyScalar(k),n.hemi[p]=W,p++}}_>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=bt.LTC_FLOAT_1,n.rectAreaLTC2=bt.LTC_FLOAT_2):(n.rectAreaLTC1=bt.LTC_HALF_1,n.rectAreaLTC2=bt.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;let R=n.hash;(R.directionalLength!==d||R.pointLength!==m||R.spotLength!==g||R.rectAreaLength!==_||R.hemiLength!==p||R.numDirectionalShadows!==y||R.numPointShadows!==v||R.numSpotShadows!==M||R.numSpotMaps!==T||R.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=g,n.rectArea.length=_,n.point.length=m,n.hemi.length=p,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=v,n.pointShadowMap.length=v,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=v,n.spotLightMatrix.length=M+T-E,n.spotLightMap.length=T,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=w,R.directionalLength=d,R.pointLength=m,R.spotLength=g,R.rectAreaLength=_,R.hemiLength=p,R.numDirectionalShadows=y,R.numPointShadows=v,R.numSpotShadows=M,R.numSpotMaps=T,R.numLightProbes=w,n.version=AM++)}function l(c,u){let h=0,f=0,d=0,m=0,g=0,_=u.matrixWorldInverse;for(let p=0,y=c.length;p<y;p++){let v=c[p];if(v.isDirectionalLight){let M=n.directional[h];M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),h++}else if(v.isSpotLight){let M=n.spot[d];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),M.direction.setFromMatrixPosition(v.matrixWorld),i.setFromMatrixPosition(v.target.matrixWorld),M.direction.sub(i),M.direction.transformDirection(_),d++}else if(v.isRectAreaLight){let M=n.rectArea[m];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),o.identity(),s.copy(v.matrixWorld),s.premultiply(_),o.extractRotation(s),M.halfWidth.set(v.width*.5,0,0),M.halfHeight.set(0,v.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),m++}else if(v.isPointLight){let M=n.point[f];M.position.setFromMatrixPosition(v.matrixWorld),M.position.applyMatrix4(_),f++}else if(v.isHemisphereLight){let M=n.hemi[g];M.direction.setFromMatrixPosition(v.matrixWorld),M.direction.transformDirection(_),g++}}}return{setup:a,setupView:l,state:n}}function r0(r){let t=new RM(r),e=[],n=[];function i(u){c.camera=u,e.length=0,n.length=0}function s(u){e.push(u)}function o(u){n.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}let c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function PM(r){let t=new WeakMap;function e(i,s=0){let o=t.get(i),a;return o===void 0?(a=new r0(r),t.set(i,[a])):s>=o.length?(a=new r0(r),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}var IM=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,DM=`uniform sampler2D shadow_pass;
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
}`,LM=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],NM=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],s0=new Pe,nl=new U,Kd=new U;function FM(r,t,e){let n=new Po,i=new Dt,s=new Dt,o=new Ge,a=new Dc,l=new Lc,c={},u=e.maxTextureSize,h={[xr]:Sn,[Sn]:xr,[gi]:gi},f=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:IM,fragmentShader:DM}),d=f.clone();d.defines.HORIZONTAL_PASS=1;let m=new ze;m.setAttribute("position",new hn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let g=new Me(m,f),_=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Za;let p=this.type;this.render=function(E,w,R){if(_.enabled===!1||_.autoUpdate===!1&&_.needsUpdate===!1||E.length===0)return;E.type===nm&&(Jt("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),E.type=Za);let x=r.getRenderTarget(),b=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),F=r.state;F.setBlending(tr),F.buffers.depth.getReversed()===!0?F.buffers.color.setClear(0,0,0,0):F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);let k=p!==this.type;k&&w.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(Y=>Y.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,Y=E.length;H<Y;H++){let W=E[H],G=W.shadow;if(G===void 0){Jt("WebGLShadowMap:",W,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);let Z=G.getFrameExtents();if(i.multiply(Z),s.copy(G.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(s.x=Math.floor(u/Z.x),i.x=s.x*Z.x,G.mapSize.x=s.x),i.y>u&&(s.y=Math.floor(u/Z.y),i.y=s.y*Z.y,G.mapSize.y=s.y)),G.map===null||k===!0){if(G.map!==null&&(G.map.depthTexture!==null&&(G.map.depthTexture.dispose(),G.map.depthTexture=null),G.map.dispose()),this.type===Do){if(W.isPointLight){Jt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}G.map=new di(i.x,i.y,{format:Is,type:er,minFilter:Mn,magFilter:Mn,generateMipmaps:!1}),G.map.texture.name=W.name+".shadowMap",G.map.depthTexture=new Xr(i.x,i.y,Ri),G.map.depthTexture.name=W.name+".shadowMapDepth",G.map.depthTexture.format=ji,G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn}else{W.isPointLight?(G.map=new Ia(i.x),G.map.depthTexture=new Sc(i.x,qi)):(G.map=new di(i.x,i.y),G.map.depthTexture=new Xr(i.x,i.y,qi)),G.map.depthTexture.name=W.name+".shadowMap",G.map.depthTexture.format=ji;let N=r.state.buffers.depth.getReversed();this.type===Za?(G.map.depthTexture.compareFunction=N?Gh:Hh,G.map.depthTexture.minFilter=Mn,G.map.depthTexture.magFilter=Mn):(G.map.depthTexture.compareFunction=null,G.map.depthTexture.minFilter=xn,G.map.depthTexture.magFilter=xn)}G.camera.updateProjectionMatrix()}let it=G.map.isWebGLCubeRenderTarget?6:1;for(let N=0;N<it;N++){if(G.map.isWebGLCubeRenderTarget)r.setRenderTarget(G.map,N),r.clear();else{N===0&&(r.setRenderTarget(G.map),r.clear());let nt=G.getViewport(N);o.set(s.x*nt.x,s.y*nt.y,s.x*nt.z,s.y*nt.w),F.viewport(o)}if(W.isPointLight){let nt=G.camera,Lt=G.matrix,Ot=W.distance||nt.far;Ot!==nt.far&&(nt.far=Ot,nt.updateProjectionMatrix()),nl.setFromMatrixPosition(W.matrixWorld),nt.position.copy(nl),Kd.copy(nt.position),Kd.add(LM[N]),nt.up.copy(NM[N]),nt.lookAt(Kd),nt.updateMatrixWorld(),Lt.makeTranslation(-nl.x,-nl.y,-nl.z),s0.multiplyMatrices(nt.projectionMatrix,nt.matrixWorldInverse),G._frustum.setFromProjectionMatrix(s0,nt.coordinateSystem,nt.reversedDepth)}else G.updateMatrices(W);n=G.getFrustum(),M(w,R,G.camera,W,this.type)}G.isPointLightShadow!==!0&&this.type===Do&&y(G,R),G.needsUpdate=!1}p=this.type,_.needsUpdate=!1,r.setRenderTarget(x,b,L)};function y(E,w){let R=t.update(g);f.defines.VSM_SAMPLES!==E.blurSamples&&(f.defines.VSM_SAMPLES=E.blurSamples,d.defines.VSM_SAMPLES=E.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new di(i.x,i.y,{format:Is,type:er})),f.uniforms.shadow_pass.value=E.map.depthTexture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,r.setRenderTarget(E.mapPass),r.clear(),r.renderBufferDirect(w,null,R,f,g,null),d.uniforms.shadow_pass.value=E.mapPass.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,r.setRenderTarget(E.map),r.clear(),r.renderBufferDirect(w,null,R,d,g,null)}function v(E,w,R,x){let b=null,L=R.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)b=L;else if(b=R.isPointLight===!0?l:a,r.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0||w.alphaToCoverage===!0){let F=b.uuid,k=w.uuid,H=c[F];H===void 0&&(H={},c[F]=H);let Y=H[k];Y===void 0&&(Y=b.clone(),H[k]=Y,w.addEventListener("dispose",T)),b=Y}if(b.visible=w.visible,b.wireframe=w.wireframe,x===Do?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:h[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaToCoverage===!0?.5:w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,R.isPointLight===!0&&b.isMeshDistanceMaterial===!0){let F=r.properties.get(b);F.light=R}return b}function M(E,w,R,x,b){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Do)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,E.matrixWorld);let k=t.update(E),H=E.material;if(Array.isArray(H)){let Y=k.groups;for(let W=0,G=Y.length;W<G;W++){let Z=Y[W],it=H[Z.materialIndex];if(it&&it.visible){let N=v(E,it,x,b);E.onBeforeShadow(r,E,w,R,k,N,Z),r.renderBufferDirect(R,null,k,N,E,Z),E.onAfterShadow(r,E,w,R,k,N,Z)}}}else if(H.visible){let Y=v(E,H,x,b);E.onBeforeShadow(r,E,w,R,k,Y,null),r.renderBufferDirect(R,null,k,Y,E,null),E.onAfterShadow(r,E,w,R,k,Y,null)}}let F=E.children;for(let k=0,H=F.length;k<H;k++)M(F[k],w,R,x,b)}function T(E){E.target.removeEventListener("dispose",T);for(let R in c){let x=c[R],b=E.target.uuid;b in x&&(x[b].dispose(),delete x[b])}}}var UM={[Xc]:qc,[Yc]:Jc,[Zc]:Kc,[bs]:$c,[qc]:Xc,[Jc]:Yc,[Kc]:Zc,[$c]:bs};function OM(r,t){function e(){let D=!1,ut=new Ge,ot=null,mt=new Ge(0,0,0,0);return{setMask:function(st){ot!==st&&!D&&(r.colorMask(st,st,st,st),ot=st)},setLocked:function(st){D=st},setClear:function(st,tt,ft,Ht,_e){_e===!0&&(st*=Ht,tt*=Ht,ft*=Ht),ut.set(st,tt,ft,Ht),mt.equals(ut)===!1&&(r.clearColor(st,tt,ft,Ht),mt.copy(ut))},reset:function(){D=!1,ot=null,mt.set(-1,0,0,0)}}}function n(){let D=!1,ut=!1,ot=null,mt=null,st=null;return{setReversed:function(tt){if(ut!==tt){let ft=t.get("EXT_clip_control");tt?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),ut=tt;let Ht=st;st=null,this.setClear(Ht)}},getReversed:function(){return ut},setTest:function(tt){tt?j(r.DEPTH_TEST):ht(r.DEPTH_TEST)},setMask:function(tt){ot!==tt&&!D&&(r.depthMask(tt),ot=tt)},setFunc:function(tt){if(ut&&(tt=UM[tt]),mt!==tt){switch(tt){case Xc:r.depthFunc(r.NEVER);break;case qc:r.depthFunc(r.ALWAYS);break;case Yc:r.depthFunc(r.LESS);break;case bs:r.depthFunc(r.LEQUAL);break;case Zc:r.depthFunc(r.EQUAL);break;case $c:r.depthFunc(r.GEQUAL);break;case Jc:r.depthFunc(r.GREATER);break;case Kc:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}mt=tt}},setLocked:function(tt){D=tt},setClear:function(tt){st!==tt&&(ut&&(tt=1-tt),r.clearDepth(tt),st=tt)},reset:function(){D=!1,ot=null,mt=null,st=null,ut=!1}}}function i(){let D=!1,ut=null,ot=null,mt=null,st=null,tt=null,ft=null,Ht=null,_e=null;return{setTest:function(Tt){D||(Tt?j(r.STENCIL_TEST):ht(r.STENCIL_TEST))},setMask:function(Tt){ut!==Tt&&!D&&(r.stencilMask(Tt),ut=Tt)},setFunc:function(Tt,Ft,re){(ot!==Tt||mt!==Ft||st!==re)&&(r.stencilFunc(Tt,Ft,re),ot=Tt,mt=Ft,st=re)},setOp:function(Tt,Ft,re){(tt!==Tt||ft!==Ft||Ht!==re)&&(r.stencilOp(Tt,Ft,re),tt=Tt,ft=Ft,Ht=re)},setLocked:function(Tt){D=Tt},setClear:function(Tt){_e!==Tt&&(r.clearStencil(Tt),_e=Tt)},reset:function(){D=!1,ut=null,ot=null,mt=null,st=null,tt=null,ft=null,Ht=null,_e=null}}}let s=new e,o=new n,a=new i,l=new WeakMap,c=new WeakMap,u={},h={},f=new WeakMap,d=[],m=null,g=!1,_=null,p=null,y=null,v=null,M=null,T=null,E=null,w=new jt(0,0,0),R=0,x=!1,b=null,L=null,F=null,k=null,H=null,Y=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,G=0,Z=r.getParameter(r.VERSION);Z.indexOf("WebGL")!==-1?(G=parseFloat(/^WebGL (\d)/.exec(Z)[1]),W=G>=1):Z.indexOf("OpenGL ES")!==-1&&(G=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),W=G>=2);let it=null,N={},nt=r.getParameter(r.SCISSOR_BOX),Lt=r.getParameter(r.VIEWPORT),Ot=new Ge().fromArray(nt),Bt=new Ge().fromArray(Lt);function Zt(D,ut,ot,mt){let st=new Uint8Array(4),tt=r.createTexture();r.bindTexture(D,tt),r.texParameteri(D,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(D,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let ft=0;ft<ot;ft++)D===r.TEXTURE_3D||D===r.TEXTURE_2D_ARRAY?r.texImage3D(ut,0,r.RGBA,1,1,mt,0,r.RGBA,r.UNSIGNED_BYTE,st):r.texImage2D(ut+ft,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,st);return tt}let K={};K[r.TEXTURE_2D]=Zt(r.TEXTURE_2D,r.TEXTURE_2D,1),K[r.TEXTURE_CUBE_MAP]=Zt(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),K[r.TEXTURE_2D_ARRAY]=Zt(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),K[r.TEXTURE_3D]=Zt(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),j(r.DEPTH_TEST),o.setFunc(bs),Ut(!1),q(bd),j(r.CULL_FACE),Nt(tr);function j(D){u[D]!==!0&&(r.enable(D),u[D]=!0)}function ht(D){u[D]!==!1&&(r.disable(D),u[D]=!1)}function Ct(D,ut){return h[D]!==ut?(r.bindFramebuffer(D,ut),h[D]=ut,D===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ut),D===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ut),!0):!1}function gt(D,ut){let ot=d,mt=!1;if(D){ot=f.get(ut),ot===void 0&&(ot=[],f.set(ut,ot));let st=D.textures;if(ot.length!==st.length||ot[0]!==r.COLOR_ATTACHMENT0){for(let tt=0,ft=st.length;tt<ft;tt++)ot[tt]=r.COLOR_ATTACHMENT0+tt;ot.length=st.length,mt=!0}}else ot[0]!==r.BACK&&(ot[0]=r.BACK,mt=!0);mt&&r.drawBuffers(ot)}function Vt(D){return m!==D?(r.useProgram(D),m=D,!0):!1}let oe={[Hr]:r.FUNC_ADD,[rm]:r.FUNC_SUBTRACT,[sm]:r.FUNC_REVERSE_SUBTRACT};oe[om]=r.MIN,oe[am]=r.MAX;let _t={[lm]:r.ZERO,[cm]:r.ONE,[hm]:r.SRC_COLOR,[uc]:r.SRC_ALPHA,[gm]:r.SRC_ALPHA_SATURATE,[pm]:r.DST_COLOR,[dm]:r.DST_ALPHA,[um]:r.ONE_MINUS_SRC_COLOR,[dc]:r.ONE_MINUS_SRC_ALPHA,[mm]:r.ONE_MINUS_DST_COLOR,[fm]:r.ONE_MINUS_DST_ALPHA,[_m]:r.CONSTANT_COLOR,[xm]:r.ONE_MINUS_CONSTANT_COLOR,[vm]:r.CONSTANT_ALPHA,[ym]:r.ONE_MINUS_CONSTANT_ALPHA};function Nt(D,ut,ot,mt,st,tt,ft,Ht,_e,Tt){if(D===tr){g===!0&&(ht(r.BLEND),g=!1);return}if(g===!1&&(j(r.BLEND),g=!0),D!==im){if(D!==_||Tt!==x){if((p!==Hr||M!==Hr)&&(r.blendEquation(r.FUNC_ADD),p=Hr,M=Hr),Tt)switch(D){case Ms:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sd:r.blendFunc(r.ONE,r.ONE);break;case Td:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Ed:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:Yt("WebGLState: Invalid blending: ",D);break}else switch(D){case Ms:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Sd:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Td:Yt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ed:Yt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Yt("WebGLState: Invalid blending: ",D);break}y=null,v=null,T=null,E=null,w.set(0,0,0),R=0,_=D,x=Tt}return}st=st||ut,tt=tt||ot,ft=ft||mt,(ut!==p||st!==M)&&(r.blendEquationSeparate(oe[ut],oe[st]),p=ut,M=st),(ot!==y||mt!==v||tt!==T||ft!==E)&&(r.blendFuncSeparate(_t[ot],_t[mt],_t[tt],_t[ft]),y=ot,v=mt,T=tt,E=ft),(Ht.equals(w)===!1||_e!==R)&&(r.blendColor(Ht.r,Ht.g,Ht.b,_e),w.copy(Ht),R=_e),_=D,x=!1}function Gt(D,ut){D.side===gi?ht(r.CULL_FACE):j(r.CULL_FACE);let ot=D.side===Sn;ut&&(ot=!ot),Ut(ot),D.blending===Ms&&D.transparent===!1?Nt(tr):Nt(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),s.setMask(D.colorWrite);let mt=D.stencilWrite;a.setTest(mt),mt&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),me(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?j(r.SAMPLE_ALPHA_TO_COVERAGE):ht(r.SAMPLE_ALPHA_TO_COVERAGE)}function Ut(D){b!==D&&(D?r.frontFace(r.CW):r.frontFace(r.CCW),b=D)}function q(D){D!==tm?(j(r.CULL_FACE),D!==L&&(D===bd?r.cullFace(r.BACK):D===em?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):ht(r.CULL_FACE),L=D}function O(D){D!==F&&(W&&r.lineWidth(D),F=D)}function me(D,ut,ot){D?(j(r.POLYGON_OFFSET_FILL),(k!==ut||H!==ot)&&(r.polygonOffset(ut,ot),k=ut,H=ot)):ht(r.POLYGON_OFFSET_FILL)}function ee(D){D?j(r.SCISSOR_TEST):ht(r.SCISSOR_TEST)}function Wt(D){D===void 0&&(D=r.TEXTURE0+Y-1),it!==D&&(r.activeTexture(D),it=D)}function At(D,ut,ot){ot===void 0&&(it===null?ot=r.TEXTURE0+Y-1:ot=it);let mt=N[ot];mt===void 0&&(mt={type:void 0,texture:void 0},N[ot]=mt),(mt.type!==D||mt.texture!==ut)&&(it!==ot&&(r.activeTexture(ot),it=ot),r.bindTexture(D,ut||K[D]),mt.type=D,mt.texture=ut)}function P(){let D=N[it];D!==void 0&&D.type!==void 0&&(r.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function S(){try{r.compressedTexImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function C(){try{r.compressedTexImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function I(){try{r.texSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function B(){try{r.texSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function z(){try{r.compressedTexSubImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function rt(){try{r.compressedTexSubImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function Q(){try{r.texStorage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function vt(){try{r.texStorage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function yt(){try{r.texImage2D(...arguments)}catch(D){Yt("WebGLState:",D)}}function et(){try{r.texImage3D(...arguments)}catch(D){Yt("WebGLState:",D)}}function lt(D){Ot.equals(D)===!1&&(r.scissor(D.x,D.y,D.z,D.w),Ot.copy(D))}function St(D){Bt.equals(D)===!1&&(r.viewport(D.x,D.y,D.z,D.w),Bt.copy(D))}function Rt(D,ut){let ot=c.get(ut);ot===void 0&&(ot=new WeakMap,c.set(ut,ot));let mt=ot.get(D);mt===void 0&&(mt=r.getUniformBlockIndex(ut,D.name),ot.set(D,mt))}function ct(D,ut){let mt=c.get(ut).get(D);l.get(ut)!==mt&&(r.uniformBlockBinding(ut,mt,D.__bindingPointIndex),l.set(ut,mt))}function pt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),o.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),u={},it=null,N={},h={},f=new WeakMap,d=[],m=null,g=!1,_=null,p=null,y=null,v=null,M=null,T=null,E=null,w=new jt(0,0,0),R=0,x=!1,b=null,L=null,F=null,k=null,H=null,Ot.set(0,0,r.canvas.width,r.canvas.height),Bt.set(0,0,r.canvas.width,r.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:j,disable:ht,bindFramebuffer:Ct,drawBuffers:gt,useProgram:Vt,setBlending:Nt,setMaterial:Gt,setFlipSided:Ut,setCullFace:q,setLineWidth:O,setPolygonOffset:me,setScissorTest:ee,activeTexture:Wt,bindTexture:At,unbindTexture:P,compressedTexImage2D:S,compressedTexImage3D:C,texImage2D:yt,texImage3D:et,updateUBOMapping:Rt,uniformBlockBinding:ct,texStorage2D:Q,texStorage3D:vt,texSubImage2D:I,texSubImage3D:B,compressedTexSubImage2D:z,compressedTexSubImage3D:rt,scissor:lt,viewport:St,reset:pt}}function BM(r,t,e,n,i,s,o){let a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap,h,f=new WeakMap,d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(P,S){return d?new OffscreenCanvas(P,S):ba("canvas")}function g(P,S,C){let I=1,B=At(P);if((B.width>C||B.height>C)&&(I=C/Math.max(B.width,B.height)),I<1)if(typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&P instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&P instanceof ImageBitmap||typeof VideoFrame<"u"&&P instanceof VideoFrame){let z=Math.floor(I*B.width),rt=Math.floor(I*B.height);h===void 0&&(h=m(z,rt));let Q=S?m(z,rt):h;return Q.width=z,Q.height=rt,Q.getContext("2d").drawImage(P,0,0,z,rt),Jt("WebGLRenderer: Texture has been resized from ("+B.width+"x"+B.height+") to ("+z+"x"+rt+")."),Q}else return"data"in P&&Jt("WebGLRenderer: Image in DataTexture is too big ("+B.width+"x"+B.height+")."),P;return P}function _(P){return P.generateMipmaps}function p(P){r.generateMipmap(P)}function y(P){return P.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:P.isWebGL3DRenderTarget?r.TEXTURE_3D:P.isWebGLArrayRenderTarget||P.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function v(P,S,C,I,B=!1){if(P!==null){if(r[P]!==void 0)return r[P];Jt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+P+"'")}let z=S;if(S===r.RED&&(C===r.FLOAT&&(z=r.R32F),C===r.HALF_FLOAT&&(z=r.R16F),C===r.UNSIGNED_BYTE&&(z=r.R8)),S===r.RED_INTEGER&&(C===r.UNSIGNED_BYTE&&(z=r.R8UI),C===r.UNSIGNED_SHORT&&(z=r.R16UI),C===r.UNSIGNED_INT&&(z=r.R32UI),C===r.BYTE&&(z=r.R8I),C===r.SHORT&&(z=r.R16I),C===r.INT&&(z=r.R32I)),S===r.RG&&(C===r.FLOAT&&(z=r.RG32F),C===r.HALF_FLOAT&&(z=r.RG16F),C===r.UNSIGNED_BYTE&&(z=r.RG8)),S===r.RG_INTEGER&&(C===r.UNSIGNED_BYTE&&(z=r.RG8UI),C===r.UNSIGNED_SHORT&&(z=r.RG16UI),C===r.UNSIGNED_INT&&(z=r.RG32UI),C===r.BYTE&&(z=r.RG8I),C===r.SHORT&&(z=r.RG16I),C===r.INT&&(z=r.RG32I)),S===r.RGB_INTEGER&&(C===r.UNSIGNED_BYTE&&(z=r.RGB8UI),C===r.UNSIGNED_SHORT&&(z=r.RGB16UI),C===r.UNSIGNED_INT&&(z=r.RGB32UI),C===r.BYTE&&(z=r.RGB8I),C===r.SHORT&&(z=r.RGB16I),C===r.INT&&(z=r.RGB32I)),S===r.RGBA_INTEGER&&(C===r.UNSIGNED_BYTE&&(z=r.RGBA8UI),C===r.UNSIGNED_SHORT&&(z=r.RGBA16UI),C===r.UNSIGNED_INT&&(z=r.RGBA32UI),C===r.BYTE&&(z=r.RGBA8I),C===r.SHORT&&(z=r.RGBA16I),C===r.INT&&(z=r.RGBA32I)),S===r.RGB&&(C===r.UNSIGNED_INT_5_9_9_9_REV&&(z=r.RGB9_E5),C===r.UNSIGNED_INT_10F_11F_11F_REV&&(z=r.R11F_G11F_B10F)),S===r.RGBA){let rt=B?ya:ge.getTransfer(I);C===r.FLOAT&&(z=r.RGBA32F),C===r.HALF_FLOAT&&(z=r.RGBA16F),C===r.UNSIGNED_BYTE&&(z=rt===be?r.SRGB8_ALPHA8:r.RGBA8),C===r.UNSIGNED_SHORT_4_4_4_4&&(z=r.RGBA4),C===r.UNSIGNED_SHORT_5_5_5_1&&(z=r.RGB5_A1)}return(z===r.R16F||z===r.R32F||z===r.RG16F||z===r.RG32F||z===r.RGBA16F||z===r.RGBA32F)&&t.get("EXT_color_buffer_float"),z}function M(P,S){let C;return P?S===null||S===qi||S===No?C=r.DEPTH24_STENCIL8:S===Ri?C=r.DEPTH32F_STENCIL8:S===Lo&&(C=r.DEPTH24_STENCIL8,Jt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===qi||S===No?C=r.DEPTH_COMPONENT24:S===Ri?C=r.DEPTH_COMPONENT32F:S===Lo&&(C=r.DEPTH_COMPONENT16),C}function T(P,S){return _(P)===!0||P.isFramebufferTexture&&P.minFilter!==xn&&P.minFilter!==Mn?Math.log2(Math.max(S.width,S.height))+1:P.mipmaps!==void 0&&P.mipmaps.length>0?P.mipmaps.length:P.isCompressedTexture&&Array.isArray(P.image)?S.mipmaps.length:1}function E(P){let S=P.target;S.removeEventListener("dispose",E),R(S),S.isVideoTexture&&u.delete(S)}function w(P){let S=P.target;S.removeEventListener("dispose",w),b(S)}function R(P){let S=n.get(P);if(S.__webglInit===void 0)return;let C=P.source,I=f.get(C);if(I){let B=I[S.__cacheKey];B.usedTimes--,B.usedTimes===0&&x(P),Object.keys(I).length===0&&f.delete(C)}n.remove(P)}function x(P){let S=n.get(P);r.deleteTexture(S.__webglTexture);let C=P.source,I=f.get(C);delete I[S.__cacheKey],o.memory.textures--}function b(P){let S=n.get(P);if(P.depthTexture&&(P.depthTexture.dispose(),n.remove(P.depthTexture)),P.isWebGLCubeRenderTarget)for(let I=0;I<6;I++){if(Array.isArray(S.__webglFramebuffer[I]))for(let B=0;B<S.__webglFramebuffer[I].length;B++)r.deleteFramebuffer(S.__webglFramebuffer[I][B]);else r.deleteFramebuffer(S.__webglFramebuffer[I]);S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer[I])}else{if(Array.isArray(S.__webglFramebuffer))for(let I=0;I<S.__webglFramebuffer.length;I++)r.deleteFramebuffer(S.__webglFramebuffer[I]);else r.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&r.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&r.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let I=0;I<S.__webglColorRenderbuffer.length;I++)S.__webglColorRenderbuffer[I]&&r.deleteRenderbuffer(S.__webglColorRenderbuffer[I]);S.__webglDepthRenderbuffer&&r.deleteRenderbuffer(S.__webglDepthRenderbuffer)}let C=P.textures;for(let I=0,B=C.length;I<B;I++){let z=n.get(C[I]);z.__webglTexture&&(r.deleteTexture(z.__webglTexture),o.memory.textures--),n.remove(C[I])}n.remove(P)}let L=0;function F(){L=0}function k(){let P=L;return P>=i.maxTextures&&Jt("WebGLTextures: Trying to use "+P+" texture units while this GPU supports only "+i.maxTextures),L+=1,P}function H(P){let S=[];return S.push(P.wrapS),S.push(P.wrapT),S.push(P.wrapR||0),S.push(P.magFilter),S.push(P.minFilter),S.push(P.anisotropy),S.push(P.internalFormat),S.push(P.format),S.push(P.type),S.push(P.generateMipmaps),S.push(P.premultiplyAlpha),S.push(P.flipY),S.push(P.unpackAlignment),S.push(P.colorSpace),S.join()}function Y(P,S){let C=n.get(P);if(P.isVideoTexture&&ee(P),P.isRenderTargetTexture===!1&&P.isExternalTexture!==!0&&P.version>0&&C.__version!==P.version){let I=P.image;if(I===null)Jt("WebGLRenderer: Texture marked for update but no image data found.");else if(I.complete===!1)Jt("WebGLRenderer: Texture marked for update but image is incomplete");else{K(C,P,S);return}}else P.isExternalTexture&&(C.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D,C.__webglTexture,r.TEXTURE0+S)}function W(P,S){let C=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&C.__version!==P.version){K(C,P,S);return}else P.isExternalTexture&&(C.__webglTexture=P.sourceTexture?P.sourceTexture:null);e.bindTexture(r.TEXTURE_2D_ARRAY,C.__webglTexture,r.TEXTURE0+S)}function G(P,S){let C=n.get(P);if(P.isRenderTargetTexture===!1&&P.version>0&&C.__version!==P.version){K(C,P,S);return}e.bindTexture(r.TEXTURE_3D,C.__webglTexture,r.TEXTURE0+S)}function Z(P,S){let C=n.get(P);if(P.isCubeDepthTexture!==!0&&P.version>0&&C.__version!==P.version){j(C,P,S);return}e.bindTexture(r.TEXTURE_CUBE_MAP,C.__webglTexture,r.TEXTURE0+S)}let it={[fc]:r.REPEAT,[Ki]:r.CLAMP_TO_EDGE,[pc]:r.MIRRORED_REPEAT},N={[xn]:r.NEAREST,[Sm]:r.NEAREST_MIPMAP_NEAREST,[Ja]:r.NEAREST_MIPMAP_LINEAR,[Mn]:r.LINEAR,[eh]:r.LINEAR_MIPMAP_NEAREST,[Jr]:r.LINEAR_MIPMAP_LINEAR},nt={[wm]:r.NEVER,[Im]:r.ALWAYS,[Am]:r.LESS,[Hh]:r.LEQUAL,[Cm]:r.EQUAL,[Gh]:r.GEQUAL,[Rm]:r.GREATER,[Pm]:r.NOTEQUAL};function Lt(P,S){if(S.type===Ri&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Mn||S.magFilter===eh||S.magFilter===Ja||S.magFilter===Jr||S.minFilter===Mn||S.minFilter===eh||S.minFilter===Ja||S.minFilter===Jr)&&Jt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(P,r.TEXTURE_WRAP_S,it[S.wrapS]),r.texParameteri(P,r.TEXTURE_WRAP_T,it[S.wrapT]),(P===r.TEXTURE_3D||P===r.TEXTURE_2D_ARRAY)&&r.texParameteri(P,r.TEXTURE_WRAP_R,it[S.wrapR]),r.texParameteri(P,r.TEXTURE_MAG_FILTER,N[S.magFilter]),r.texParameteri(P,r.TEXTURE_MIN_FILTER,N[S.minFilter]),S.compareFunction&&(r.texParameteri(P,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(P,r.TEXTURE_COMPARE_FUNC,nt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===xn||S.minFilter!==Ja&&S.minFilter!==Jr||S.type===Ri&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){let C=t.get("EXT_texture_filter_anisotropic");r.texParameterf(P,C.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Ot(P,S){let C=!1;P.__webglInit===void 0&&(P.__webglInit=!0,S.addEventListener("dispose",E));let I=S.source,B=f.get(I);B===void 0&&(B={},f.set(I,B));let z=H(S);if(z!==P.__cacheKey){B[z]===void 0&&(B[z]={texture:r.createTexture(),usedTimes:0},o.memory.textures++,C=!0),B[z].usedTimes++;let rt=B[P.__cacheKey];rt!==void 0&&(B[P.__cacheKey].usedTimes--,rt.usedTimes===0&&x(S)),P.__cacheKey=z,P.__webglTexture=B[z].texture}return C}function Bt(P,S,C){return Math.floor(Math.floor(P/C)/S)}function Zt(P,S,C,I){let z=P.updateRanges;if(z.length===0)e.texSubImage2D(r.TEXTURE_2D,0,0,0,S.width,S.height,C,I,S.data);else{z.sort((et,lt)=>et.start-lt.start);let rt=0;for(let et=1;et<z.length;et++){let lt=z[rt],St=z[et],Rt=lt.start+lt.count,ct=Bt(St.start,S.width,4),pt=Bt(lt.start,S.width,4);St.start<=Rt+1&&ct===pt&&Bt(St.start+St.count-1,S.width,4)===ct?lt.count=Math.max(lt.count,St.start+St.count-lt.start):(++rt,z[rt]=St)}z.length=rt+1;let Q=r.getParameter(r.UNPACK_ROW_LENGTH),vt=r.getParameter(r.UNPACK_SKIP_PIXELS),yt=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,S.width);for(let et=0,lt=z.length;et<lt;et++){let St=z[et],Rt=Math.floor(St.start/4),ct=Math.ceil(St.count/4),pt=Rt%S.width,D=Math.floor(Rt/S.width),ut=ct,ot=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,pt),r.pixelStorei(r.UNPACK_SKIP_ROWS,D),e.texSubImage2D(r.TEXTURE_2D,0,pt,D,ut,ot,C,I,S.data)}P.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Q),r.pixelStorei(r.UNPACK_SKIP_PIXELS,vt),r.pixelStorei(r.UNPACK_SKIP_ROWS,yt)}}function K(P,S,C){let I=r.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(I=r.TEXTURE_2D_ARRAY),S.isData3DTexture&&(I=r.TEXTURE_3D);let B=Ot(P,S),z=S.source;e.bindTexture(I,P.__webglTexture,r.TEXTURE0+C);let rt=n.get(z);if(z.version!==rt.__version||B===!0){e.activeTexture(r.TEXTURE0+C);let Q=ge.getPrimaries(ge.workingColorSpace),vt=S.colorSpace===Tr?null:ge.getPrimaries(S.colorSpace),yt=S.colorSpace===Tr||Q===vt?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);let et=g(S.image,!1,i.maxTextureSize);et=Wt(S,et);let lt=s.convert(S.format,S.colorSpace),St=s.convert(S.type),Rt=v(S.internalFormat,lt,St,S.colorSpace,S.isVideoTexture);Lt(I,S);let ct,pt=S.mipmaps,D=S.isVideoTexture!==!0,ut=rt.__version===void 0||B===!0,ot=z.dataReady,mt=T(S,et);if(S.isDepthTexture)Rt=M(S.format===Kr,S.type),ut&&(D?e.texStorage2D(r.TEXTURE_2D,1,Rt,et.width,et.height):e.texImage2D(r.TEXTURE_2D,0,Rt,et.width,et.height,0,lt,St,null));else if(S.isDataTexture)if(pt.length>0){D&&ut&&e.texStorage2D(r.TEXTURE_2D,mt,Rt,pt[0].width,pt[0].height);for(let st=0,tt=pt.length;st<tt;st++)ct=pt[st],D?ot&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,ct.width,ct.height,lt,St,ct.data):e.texImage2D(r.TEXTURE_2D,st,Rt,ct.width,ct.height,0,lt,St,ct.data);S.generateMipmaps=!1}else D?(ut&&e.texStorage2D(r.TEXTURE_2D,mt,Rt,et.width,et.height),ot&&Zt(S,et,lt,St)):e.texImage2D(r.TEXTURE_2D,0,Rt,et.width,et.height,0,lt,St,et.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){D&&ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Rt,pt[0].width,pt[0].height,et.depth);for(let st=0,tt=pt.length;st<tt;st++)if(ct=pt[st],S.format!==Pi)if(lt!==null)if(D){if(ot)if(S.layerUpdates.size>0){let ft=Xd(ct.width,ct.height,S.format,S.type);for(let Ht of S.layerUpdates){let _e=ct.data.subarray(Ht*ft/ct.data.BYTES_PER_ELEMENT,(Ht+1)*ft/ct.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,Ht,ct.width,ct.height,1,lt,_e)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,et.depth,lt,ct.data)}else e.compressedTexImage3D(r.TEXTURE_2D_ARRAY,st,Rt,ct.width,ct.height,et.depth,0,ct.data,0,0);else Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else D?ot&&e.texSubImage3D(r.TEXTURE_2D_ARRAY,st,0,0,0,ct.width,ct.height,et.depth,lt,St,ct.data):e.texImage3D(r.TEXTURE_2D_ARRAY,st,Rt,ct.width,ct.height,et.depth,0,lt,St,ct.data)}else{D&&ut&&e.texStorage2D(r.TEXTURE_2D,mt,Rt,pt[0].width,pt[0].height);for(let st=0,tt=pt.length;st<tt;st++)ct=pt[st],S.format!==Pi?lt!==null?D?ot&&e.compressedTexSubImage2D(r.TEXTURE_2D,st,0,0,ct.width,ct.height,lt,ct.data):e.compressedTexImage2D(r.TEXTURE_2D,st,Rt,ct.width,ct.height,0,ct.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):D?ot&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,ct.width,ct.height,lt,St,ct.data):e.texImage2D(r.TEXTURE_2D,st,Rt,ct.width,ct.height,0,lt,St,ct.data)}else if(S.isDataArrayTexture)if(D){if(ut&&e.texStorage3D(r.TEXTURE_2D_ARRAY,mt,Rt,et.width,et.height,et.depth),ot)if(S.layerUpdates.size>0){let st=Xd(et.width,et.height,S.format,S.type);for(let tt of S.layerUpdates){let ft=et.data.subarray(tt*st/et.data.BYTES_PER_ELEMENT,(tt+1)*st/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,tt,et.width,et.height,1,lt,St,ft)}S.clearLayerUpdates()}else e.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,lt,St,et.data)}else e.texImage3D(r.TEXTURE_2D_ARRAY,0,Rt,et.width,et.height,et.depth,0,lt,St,et.data);else if(S.isData3DTexture)D?(ut&&e.texStorage3D(r.TEXTURE_3D,mt,Rt,et.width,et.height,et.depth),ot&&e.texSubImage3D(r.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,lt,St,et.data)):e.texImage3D(r.TEXTURE_3D,0,Rt,et.width,et.height,et.depth,0,lt,St,et.data);else if(S.isFramebufferTexture){if(ut)if(D)e.texStorage2D(r.TEXTURE_2D,mt,Rt,et.width,et.height);else{let st=et.width,tt=et.height;for(let ft=0;ft<mt;ft++)e.texImage2D(r.TEXTURE_2D,ft,Rt,st,tt,0,lt,St,null),st>>=1,tt>>=1}}else if(pt.length>0){if(D&&ut){let st=At(pt[0]);e.texStorage2D(r.TEXTURE_2D,mt,Rt,st.width,st.height)}for(let st=0,tt=pt.length;st<tt;st++)ct=pt[st],D?ot&&e.texSubImage2D(r.TEXTURE_2D,st,0,0,lt,St,ct):e.texImage2D(r.TEXTURE_2D,st,Rt,lt,St,ct);S.generateMipmaps=!1}else if(D){if(ut){let st=At(et);e.texStorage2D(r.TEXTURE_2D,mt,Rt,st.width,st.height)}ot&&e.texSubImage2D(r.TEXTURE_2D,0,0,0,lt,St,et)}else e.texImage2D(r.TEXTURE_2D,0,Rt,lt,St,et);_(S)&&p(I),rt.__version=z.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function j(P,S,C){if(S.image.length!==6)return;let I=Ot(P,S),B=S.source;e.bindTexture(r.TEXTURE_CUBE_MAP,P.__webglTexture,r.TEXTURE0+C);let z=n.get(B);if(B.version!==z.__version||I===!0){e.activeTexture(r.TEXTURE0+C);let rt=ge.getPrimaries(ge.workingColorSpace),Q=S.colorSpace===Tr?null:ge.getPrimaries(S.colorSpace),vt=S.colorSpace===Tr||rt===Q?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,S.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,S.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);let yt=S.isCompressedTexture||S.image[0].isCompressedTexture,et=S.image[0]&&S.image[0].isDataTexture,lt=[];for(let tt=0;tt<6;tt++)!yt&&!et?lt[tt]=g(S.image[tt],!0,i.maxCubemapSize):lt[tt]=et?S.image[tt].image:S.image[tt],lt[tt]=Wt(S,lt[tt]);let St=lt[0],Rt=s.convert(S.format,S.colorSpace),ct=s.convert(S.type),pt=v(S.internalFormat,Rt,ct,S.colorSpace),D=S.isVideoTexture!==!0,ut=z.__version===void 0||I===!0,ot=B.dataReady,mt=T(S,St);Lt(r.TEXTURE_CUBE_MAP,S);let st;if(yt){D&&ut&&e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,pt,St.width,St.height);for(let tt=0;tt<6;tt++){st=lt[tt].mipmaps;for(let ft=0;ft<st.length;ft++){let Ht=st[ft];S.format!==Pi?Rt!==null?D?ot&&e.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,Ht.width,Ht.height,Rt,Ht.data):e.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,pt,Ht.width,Ht.height,0,Ht.data):Jt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,0,0,Ht.width,Ht.height,Rt,ct,Ht.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft,pt,Ht.width,Ht.height,0,Rt,ct,Ht.data)}}}else{if(st=S.mipmaps,D&&ut){st.length>0&&mt++;let tt=At(lt[0]);e.texStorage2D(r.TEXTURE_CUBE_MAP,mt,pt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(et){D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,lt[tt].width,lt[tt].height,Rt,ct,lt[tt].data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,pt,lt[tt].width,lt[tt].height,0,Rt,ct,lt[tt].data);for(let ft=0;ft<st.length;ft++){let _e=st[ft].image[tt].image;D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,_e.width,_e.height,Rt,ct,_e.data):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,pt,_e.width,_e.height,0,Rt,ct,_e.data)}}else{D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Rt,ct,lt[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,pt,Rt,ct,lt[tt]);for(let ft=0;ft<st.length;ft++){let Ht=st[ft];D?ot&&e.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,0,0,Rt,ct,Ht.image[tt]):e.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+tt,ft+1,pt,Rt,ct,Ht.image[tt])}}}_(S)&&p(r.TEXTURE_CUBE_MAP),z.__version=B.version,S.onUpdate&&S.onUpdate(S)}P.__version=S.version}function ht(P,S,C,I,B,z){let rt=s.convert(C.format,C.colorSpace),Q=s.convert(C.type),vt=v(C.internalFormat,rt,Q,C.colorSpace),yt=n.get(S),et=n.get(C);if(et.__renderTarget=S,!yt.__hasExternalTextures){let lt=Math.max(1,S.width>>z),St=Math.max(1,S.height>>z);B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?e.texImage3D(B,z,vt,lt,St,S.depth,0,rt,Q,null):e.texImage2D(B,z,vt,lt,St,0,rt,Q,null)}e.bindFramebuffer(r.FRAMEBUFFER,P),me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,I,B,et.__webglTexture,0,O(S)):(B===r.TEXTURE_2D||B>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&B<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,I,B,et.__webglTexture,z),e.bindFramebuffer(r.FRAMEBUFFER,null)}function Ct(P,S,C){if(r.bindRenderbuffer(r.RENDERBUFFER,P),S.depthBuffer){let I=S.depthTexture,B=I&&I.isDepthTexture?I.type:null,z=M(S.stencilBuffer,B),rt=S.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;me(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(S),z,S.width,S.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(S),z,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,z,S.width,S.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,rt,r.RENDERBUFFER,P)}else{let I=S.textures;for(let B=0;B<I.length;B++){let z=I[B],rt=s.convert(z.format,z.colorSpace),Q=s.convert(z.type),vt=v(z.internalFormat,rt,Q,z.colorSpace);me(S)?a.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,O(S),vt,S.width,S.height):C?r.renderbufferStorageMultisample(r.RENDERBUFFER,O(S),vt,S.width,S.height):r.renderbufferStorage(r.RENDERBUFFER,vt,S.width,S.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function gt(P,S,C){let I=S.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(r.FRAMEBUFFER,P),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");let B=n.get(S.depthTexture);if(B.__renderTarget=S,(!B.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),I){if(B.__webglInit===void 0&&(B.__webglInit=!0,S.depthTexture.addEventListener("dispose",E)),B.__webglTexture===void 0){B.__webglTexture=r.createTexture(),e.bindTexture(r.TEXTURE_CUBE_MAP,B.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,S.depthTexture);let yt=s.convert(S.depthTexture.format),et=s.convert(S.depthTexture.type),lt;S.depthTexture.format===ji?lt=r.DEPTH_COMPONENT24:S.depthTexture.format===Kr&&(lt=r.DEPTH24_STENCIL8);for(let St=0;St<6;St++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+St,0,lt,S.width,S.height,0,yt,et,null)}}else Y(S.depthTexture,0);let z=B.__webglTexture,rt=O(S),Q=I?r.TEXTURE_CUBE_MAP_POSITIVE_X+C:r.TEXTURE_2D,vt=S.depthTexture.format===Kr?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(S.depthTexture.format===ji)me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Q,z,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,vt,Q,z,0);else if(S.depthTexture.format===Kr)me(S)?a.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,vt,Q,z,0,rt):r.framebufferTexture2D(r.FRAMEBUFFER,vt,Q,z,0);else throw new Error("Unknown depthTexture format")}function Vt(P){let S=n.get(P),C=P.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==P.depthTexture){let I=P.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),I){let B=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,I.removeEventListener("dispose",B)};I.addEventListener("dispose",B),S.__depthDisposeCallback=B}S.__boundDepthTexture=I}if(P.depthTexture&&!S.__autoAllocateDepthBuffer)if(C)for(let I=0;I<6;I++)gt(S.__webglFramebuffer[I],P,I);else{let I=P.texture.mipmaps;I&&I.length>0?gt(S.__webglFramebuffer[0],P,0):gt(S.__webglFramebuffer,P,0)}else if(C){S.__webglDepthbuffer=[];for(let I=0;I<6;I++)if(e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[I]),S.__webglDepthbuffer[I]===void 0)S.__webglDepthbuffer[I]=r.createRenderbuffer(),Ct(S.__webglDepthbuffer[I],P,!1);else{let B=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer[I];r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,B,r.RENDERBUFFER,z)}}else{let I=P.texture.mipmaps;if(I&&I.length>0?e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer[0]):e.bindFramebuffer(r.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=r.createRenderbuffer(),Ct(S.__webglDepthbuffer,P,!1);else{let B=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,z=S.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,z),r.framebufferRenderbuffer(r.FRAMEBUFFER,B,r.RENDERBUFFER,z)}}e.bindFramebuffer(r.FRAMEBUFFER,null)}function oe(P,S,C){let I=n.get(P);S!==void 0&&ht(I.__webglFramebuffer,P,P.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),C!==void 0&&Vt(P)}function _t(P){let S=P.texture,C=n.get(P),I=n.get(S);P.addEventListener("dispose",w);let B=P.textures,z=P.isWebGLCubeRenderTarget===!0,rt=B.length>1;if(rt||(I.__webglTexture===void 0&&(I.__webglTexture=r.createTexture()),I.__version=S.version,o.memory.textures++),z){C.__webglFramebuffer=[];for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer[Q]=[];for(let vt=0;vt<S.mipmaps.length;vt++)C.__webglFramebuffer[Q][vt]=r.createFramebuffer()}else C.__webglFramebuffer[Q]=r.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){C.__webglFramebuffer=[];for(let Q=0;Q<S.mipmaps.length;Q++)C.__webglFramebuffer[Q]=r.createFramebuffer()}else C.__webglFramebuffer=r.createFramebuffer();if(rt)for(let Q=0,vt=B.length;Q<vt;Q++){let yt=n.get(B[Q]);yt.__webglTexture===void 0&&(yt.__webglTexture=r.createTexture(),o.memory.textures++)}if(P.samples>0&&me(P)===!1){C.__webglMultisampledFramebuffer=r.createFramebuffer(),C.__webglColorRenderbuffer=[],e.bindFramebuffer(r.FRAMEBUFFER,C.__webglMultisampledFramebuffer);for(let Q=0;Q<B.length;Q++){let vt=B[Q];C.__webglColorRenderbuffer[Q]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,C.__webglColorRenderbuffer[Q]);let yt=s.convert(vt.format,vt.colorSpace),et=s.convert(vt.type),lt=v(vt.internalFormat,yt,et,vt.colorSpace,P.isXRRenderTarget===!0),St=O(P);r.renderbufferStorageMultisample(r.RENDERBUFFER,St,lt,P.width,P.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Q,r.RENDERBUFFER,C.__webglColorRenderbuffer[Q])}r.bindRenderbuffer(r.RENDERBUFFER,null),P.depthBuffer&&(C.__webglDepthRenderbuffer=r.createRenderbuffer(),Ct(C.__webglDepthRenderbuffer,P,!0)),e.bindFramebuffer(r.FRAMEBUFFER,null)}}if(z){e.bindTexture(r.TEXTURE_CUBE_MAP,I.__webglTexture),Lt(r.TEXTURE_CUBE_MAP,S);for(let Q=0;Q<6;Q++)if(S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ht(C.__webglFramebuffer[Q][vt],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,vt);else ht(C.__webglFramebuffer[Q],P,S,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0);_(S)&&p(r.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(rt){for(let Q=0,vt=B.length;Q<vt;Q++){let yt=B[Q],et=n.get(yt),lt=r.TEXTURE_2D;(P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(lt=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(lt,et.__webglTexture),Lt(lt,yt),ht(C.__webglFramebuffer,P,yt,r.COLOR_ATTACHMENT0+Q,lt,0),_(yt)&&p(lt)}e.unbindTexture()}else{let Q=r.TEXTURE_2D;if((P.isWebGL3DRenderTarget||P.isWebGLArrayRenderTarget)&&(Q=P.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),e.bindTexture(Q,I.__webglTexture),Lt(Q,S),S.mipmaps&&S.mipmaps.length>0)for(let vt=0;vt<S.mipmaps.length;vt++)ht(C.__webglFramebuffer[vt],P,S,r.COLOR_ATTACHMENT0,Q,vt);else ht(C.__webglFramebuffer,P,S,r.COLOR_ATTACHMENT0,Q,0);_(S)&&p(Q),e.unbindTexture()}P.depthBuffer&&Vt(P)}function Nt(P){let S=P.textures;for(let C=0,I=S.length;C<I;C++){let B=S[C];if(_(B)){let z=y(P),rt=n.get(B).__webglTexture;e.bindTexture(z,rt),p(z),e.unbindTexture()}}}let Gt=[],Ut=[];function q(P){if(P.samples>0){if(me(P)===!1){let S=P.textures,C=P.width,I=P.height,B=r.COLOR_BUFFER_BIT,z=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,rt=n.get(P),Q=S.length>1;if(Q)for(let yt=0;yt<S.length;yt++)e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,null),e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,null,0);e.bindFramebuffer(r.READ_FRAMEBUFFER,rt.__webglMultisampledFramebuffer);let vt=P.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer[0]):e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let yt=0;yt<S.length;yt++){if(P.resolveDepthBuffer&&(P.depthBuffer&&(B|=r.DEPTH_BUFFER_BIT),P.stencilBuffer&&P.resolveStencilBuffer&&(B|=r.STENCIL_BUFFER_BIT)),Q){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,rt.__webglColorRenderbuffer[yt]);let et=n.get(S[yt]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,et,0)}r.blitFramebuffer(0,0,C,I,0,0,C,I,B,r.NEAREST),l===!0&&(Gt.length=0,Ut.length=0,Gt.push(r.COLOR_ATTACHMENT0+yt),P.depthBuffer&&P.resolveDepthBuffer===!1&&(Gt.push(z),Ut.push(z),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,Ut)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Gt))}if(e.bindFramebuffer(r.READ_FRAMEBUFFER,null),e.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Q)for(let yt=0;yt<S.length;yt++){e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.RENDERBUFFER,rt.__webglColorRenderbuffer[yt]);let et=n.get(S[yt]).__webglTexture;e.bindFramebuffer(r.FRAMEBUFFER,rt.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+yt,r.TEXTURE_2D,et,0)}e.bindFramebuffer(r.DRAW_FRAMEBUFFER,rt.__webglMultisampledFramebuffer)}else if(P.depthBuffer&&P.resolveDepthBuffer===!1&&l){let S=P.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[S])}}}function O(P){return Math.min(i.maxSamples,P.samples)}function me(P){let S=n.get(P);return P.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function ee(P){let S=o.render.frame;u.get(P)!==S&&(u.set(P,S),P.update())}function Wt(P,S){let C=P.colorSpace,I=P.format,B=P.type;return P.isCompressedTexture===!0||P.isVideoTexture===!0||C!==Ss&&C!==Tr&&(ge.getTransfer(C)===be?(I!==Pi||B!==ei)&&Jt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Yt("WebGLTextures: Unsupported texture color space:",C)),S}function At(P){return typeof HTMLImageElement<"u"&&P instanceof HTMLImageElement?(c.width=P.naturalWidth||P.width,c.height=P.naturalHeight||P.height):typeof VideoFrame<"u"&&P instanceof VideoFrame?(c.width=P.displayWidth,c.height=P.displayHeight):(c.width=P.width,c.height=P.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=F,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=G,this.setTextureCube=Z,this.rebindTextures=oe,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=Nt,this.updateMultisampleRenderTarget=q,this.setupDepthRenderbuffer=Vt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=me,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function kM(r,t){function e(n,i=Tr){let s,o=ge.getTransfer(i);if(n===ei)return r.UNSIGNED_BYTE;if(n===ih)return r.UNSIGNED_SHORT_4_4_4_4;if(n===rh)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Fd)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Ud)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ld)return r.BYTE;if(n===Nd)return r.SHORT;if(n===Lo)return r.UNSIGNED_SHORT;if(n===nh)return r.INT;if(n===qi)return r.UNSIGNED_INT;if(n===Ri)return r.FLOAT;if(n===er)return r.HALF_FLOAT;if(n===Od)return r.ALPHA;if(n===Bd)return r.RGB;if(n===Pi)return r.RGBA;if(n===ji)return r.DEPTH_COMPONENT;if(n===Kr)return r.DEPTH_STENCIL;if(n===sh)return r.RED;if(n===oh)return r.RED_INTEGER;if(n===Is)return r.RG;if(n===ah)return r.RG_INTEGER;if(n===lh)return r.RGBA_INTEGER;if(n===Ka||n===ja||n===Qa||n===tl)if(o===be)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Ka)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Ka)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ja)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Qa)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===ch||n===hh||n===uh||n===dh)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===ch)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===hh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===uh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===dh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===fh||n===ph||n===mh||n===gh||n===_h||n===xh||n===vh)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===fh||n===ph)return o===be?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===mh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===gh)return s.COMPRESSED_R11_EAC;if(n===_h)return s.COMPRESSED_SIGNED_R11_EAC;if(n===xh)return s.COMPRESSED_RG11_EAC;if(n===vh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===yh||n===Mh||n===bh||n===Sh||n===Th||n===Eh||n===wh||n===Ah||n===Ch||n===Rh||n===Ph||n===Ih||n===Dh||n===Lh)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===yh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Mh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===bh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Th)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Eh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===wh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ah)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ch)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ph)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Ih)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Dh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Lh)return o===be?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Nh||n===Fh||n===Uh)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===Nh)return o===be?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Fh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Uh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Oh||n===Bh||n===kh||n===zh)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===Oh)return s.COMPRESSED_RED_RGTC1_EXT;if(n===Bh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===kh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===zh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===No?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:e}}var zM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,VM=`
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

}`,of=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let n=new Ua(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,n=new fi({vertexShader:zM,fragmentShader:VM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Me(new Ga(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},af=class extends vr{constructor(t,e){super();let n=this,i=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,f=null,d=null,m=null,g=typeof XRWebGLBinding<"u",_=new of,p={},y=e.getContextAttributes(),v=null,M=null,T=[],E=[],w=new Dt,R=null,x=new cn;x.viewport=new Ge;let b=new cn;b.viewport=new Ge;let L=[x,b],F=new Wc,k=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let j=T[K];return j===void 0&&(j=new Ao,T[K]=j),j.getTargetRaySpace()},this.getControllerGrip=function(K){let j=T[K];return j===void 0&&(j=new Ao,T[K]=j),j.getGripSpace()},this.getHand=function(K){let j=T[K];return j===void 0&&(j=new Ao,T[K]=j),j.getHandSpace()};function Y(K){let j=E.indexOf(K.inputSource);if(j===-1)return;let ht=T[j];ht!==void 0&&(ht.update(K.inputSource,K.frame,c||o),ht.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",G);for(let K=0;K<T.length;K++){let j=E[K];j!==null&&(E[K]=null,T[K].disconnect(j))}k=null,H=null,_.reset();for(let K in p)delete p[K];t.setRenderTarget(v),d=null,f=null,h=null,i=null,M=null,Zt.stop(),n.isPresenting=!1,t.setPixelRatio(R),t.setSize(w.width,w.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,n.isPresenting===!0&&Jt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,n.isPresenting===!0&&Jt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h===null&&g&&(h=new XRWebGLBinding(i,e)),h},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(K){if(i=K,i!==null){if(v=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",W),i.addEventListener("inputsourceschange",G),y.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(w),g&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Ct=null,gt=null;y.depth&&(gt=y.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=y.stencil?Kr:ji,Ct=y.stencil?No:qi);let Vt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:s};h=this.getBinding(),f=h.createProjectionLayer(Vt),i.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),M=new di(f.textureWidth,f.textureHeight,{format:Pi,type:ei,depthTexture:new Xr(f.textureWidth,f.textureHeight,Ct,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:y.stencil,colorSpace:t.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{let ht={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:s};d=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new di(d.framebufferWidth,d.framebufferHeight,{format:Pi,type:ei,colorSpace:t.outputColorSpace,stencilBuffer:y.stencil,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),Zt.setContext(i),Zt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function G(K){for(let j=0;j<K.removed.length;j++){let ht=K.removed[j],Ct=E.indexOf(ht);Ct>=0&&(E[Ct]=null,T[Ct].disconnect(ht))}for(let j=0;j<K.added.length;j++){let ht=K.added[j],Ct=E.indexOf(ht);if(Ct===-1){for(let Vt=0;Vt<T.length;Vt++)if(Vt>=E.length){E.push(ht),Ct=Vt;break}else if(E[Vt]===null){E[Vt]=ht,Ct=Vt;break}if(Ct===-1)break}let gt=T[Ct];gt&&gt.connect(ht)}}let Z=new U,it=new U;function N(K,j,ht){Z.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(ht.matrixWorld);let Ct=Z.distanceTo(it),gt=j.projectionMatrix.elements,Vt=ht.projectionMatrix.elements,oe=gt[14]/(gt[10]-1),_t=gt[14]/(gt[10]+1),Nt=(gt[9]+1)/gt[5],Gt=(gt[9]-1)/gt[5],Ut=(gt[8]-1)/gt[0],q=(Vt[8]+1)/Vt[0],O=oe*Ut,me=oe*q,ee=Ct/(-Ut+q),Wt=ee*-Ut;if(j.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(Wt),K.translateZ(ee),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),gt[10]===-1)K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{let At=oe+ee,P=_t+ee,S=O-Wt,C=me+(Ct-Wt),I=Nt*_t/P*At,B=Gt*_t/P*At;K.projectionMatrix.makePerspective(S,C,I,B,At,P),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function nt(K,j){j===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(j.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(i===null)return;let j=K.near,ht=K.far;_.texture!==null&&(_.depthNear>0&&(j=_.depthNear),_.depthFar>0&&(ht=_.depthFar)),F.near=b.near=x.near=j,F.far=b.far=x.far=ht,(k!==F.near||H!==F.far)&&(i.updateRenderState({depthNear:F.near,depthFar:F.far}),k=F.near,H=F.far),F.layers.mask=K.layers.mask|6,x.layers.mask=F.layers.mask&3,b.layers.mask=F.layers.mask&5;let Ct=K.parent,gt=F.cameras;nt(F,Ct);for(let Vt=0;Vt<gt.length;Vt++)nt(gt[Vt],Ct);gt.length===2?N(F,x,b):F.projectionMatrix.copy(x.projectionMatrix),Lt(K,F,Ct)};function Lt(K,j,ht){ht===null?K.matrix.copy(j.matrixWorld):(K.matrix.copy(ht.matrixWorld),K.matrix.invert(),K.matrix.multiply(j.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(j.projectionMatrix),K.projectionMatrixInverse.copy(j.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=_c*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return F},this.getFoveation=function(){if(!(f===null&&d===null))return l},this.setFoveation=function(K){l=K,f!==null&&(f.fixedFoveation=K),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=K)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(F)},this.getCameraTexture=function(K){return p[K]};let Ot=null;function Bt(K,j){if(u=j.getViewerPose(c||o),m=j,u!==null){let ht=u.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let Ct=!1;ht.length!==F.cameras.length&&(F.cameras.length=0,Ct=!0);for(let _t=0;_t<ht.length;_t++){let Nt=ht[_t],Gt=null;if(d!==null)Gt=d.getViewport(Nt);else{let q=h.getViewSubImage(f,Nt);Gt=q.viewport,_t===0&&(t.setRenderTargetTextures(M,q.colorTexture,q.depthStencilTexture),t.setRenderTarget(M))}let Ut=L[_t];Ut===void 0&&(Ut=new cn,Ut.layers.enable(_t),Ut.viewport=new Ge,L[_t]=Ut),Ut.matrix.fromArray(Nt.transform.matrix),Ut.matrix.decompose(Ut.position,Ut.quaternion,Ut.scale),Ut.projectionMatrix.fromArray(Nt.projectionMatrix),Ut.projectionMatrixInverse.copy(Ut.projectionMatrix).invert(),Ut.viewport.set(Gt.x,Gt.y,Gt.width,Gt.height),_t===0&&(F.matrix.copy(Ut.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale)),Ct===!0&&F.cameras.push(Ut)}let gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&g){h=n.getBinding();let _t=h.getDepthInformation(ht[0]);_t&&_t.isValid&&_t.texture&&_.init(_t,i.renderState)}if(gt&&gt.includes("camera-access")&&g){t.state.unbindTexture(),h=n.getBinding();for(let _t=0;_t<ht.length;_t++){let Nt=ht[_t].camera;if(Nt){let Gt=p[Nt];Gt||(Gt=new Ua,p[Nt]=Gt);let Ut=h.getCameraImage(Nt);Gt.sourceTexture=Ut}}}}for(let ht=0;ht<T.length;ht++){let Ct=E[ht],gt=T[ht];Ct!==null&&gt!==void 0&&gt.update(Ct,j,c||o)}Ot&&Ot(K,j),j.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:j}),m=null}let Zt=new o0;Zt.setAnimationLoop(Bt),this.setAnimationLoop=function(K){Ot=K},this.dispose=function(){}}},Ns=new Ai,HM=new Pe;function GM(r,t){function e(_,p){_.matrixAutoUpdate===!0&&_.updateMatrix(),p.value.copy(_.matrix)}function n(_,p){p.color.getRGB(_.fogColor.value,Vd(r)),p.isFog?(_.fogNear.value=p.near,_.fogFar.value=p.far):p.isFogExp2&&(_.fogDensity.value=p.density)}function i(_,p,y,v,M){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(_,p):p.isMeshToonMaterial?(s(_,p),h(_,p)):p.isMeshPhongMaterial?(s(_,p),u(_,p)):p.isMeshStandardMaterial?(s(_,p),f(_,p),p.isMeshPhysicalMaterial&&d(_,p,M)):p.isMeshMatcapMaterial?(s(_,p),m(_,p)):p.isMeshDepthMaterial?s(_,p):p.isMeshDistanceMaterial?(s(_,p),g(_,p)):p.isMeshNormalMaterial?s(_,p):p.isLineBasicMaterial?(o(_,p),p.isLineDashedMaterial&&a(_,p)):p.isPointsMaterial?l(_,p,y,v):p.isSpriteMaterial?c(_,p):p.isShadowMaterial?(_.color.value.copy(p.color),_.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(_,p){_.opacity.value=p.opacity,p.color&&_.diffuse.value.copy(p.color),p.emissive&&_.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.bumpMap&&(_.bumpMap.value=p.bumpMap,e(p.bumpMap,_.bumpMapTransform),_.bumpScale.value=p.bumpScale,p.side===Sn&&(_.bumpScale.value*=-1)),p.normalMap&&(_.normalMap.value=p.normalMap,e(p.normalMap,_.normalMapTransform),_.normalScale.value.copy(p.normalScale),p.side===Sn&&_.normalScale.value.negate()),p.displacementMap&&(_.displacementMap.value=p.displacementMap,e(p.displacementMap,_.displacementMapTransform),_.displacementScale.value=p.displacementScale,_.displacementBias.value=p.displacementBias),p.emissiveMap&&(_.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,_.emissiveMapTransform)),p.specularMap&&(_.specularMap.value=p.specularMap,e(p.specularMap,_.specularMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest);let y=t.get(p),v=y.envMap,M=y.envMapRotation;v&&(_.envMap.value=v,Ns.copy(M),Ns.x*=-1,Ns.y*=-1,Ns.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(Ns.y*=-1,Ns.z*=-1),_.envMapRotation.value.setFromMatrix4(HM.makeRotationFromEuler(Ns)),_.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,_.reflectivity.value=p.reflectivity,_.ior.value=p.ior,_.refractionRatio.value=p.refractionRatio),p.lightMap&&(_.lightMap.value=p.lightMap,_.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,_.lightMapTransform)),p.aoMap&&(_.aoMap.value=p.aoMap,_.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,_.aoMapTransform))}function o(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform))}function a(_,p){_.dashSize.value=p.dashSize,_.totalSize.value=p.dashSize+p.gapSize,_.scale.value=p.scale}function l(_,p,y,v){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.size.value=p.size*y,_.scale.value=v*.5,p.map&&(_.map.value=p.map,e(p.map,_.uvTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function c(_,p){_.diffuse.value.copy(p.color),_.opacity.value=p.opacity,_.rotation.value=p.rotation,p.map&&(_.map.value=p.map,e(p.map,_.mapTransform)),p.alphaMap&&(_.alphaMap.value=p.alphaMap,e(p.alphaMap,_.alphaMapTransform)),p.alphaTest>0&&(_.alphaTest.value=p.alphaTest)}function u(_,p){_.specular.value.copy(p.specular),_.shininess.value=Math.max(p.shininess,1e-4)}function h(_,p){p.gradientMap&&(_.gradientMap.value=p.gradientMap)}function f(_,p){_.metalness.value=p.metalness,p.metalnessMap&&(_.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,_.metalnessMapTransform)),_.roughness.value=p.roughness,p.roughnessMap&&(_.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,_.roughnessMapTransform)),p.envMap&&(_.envMapIntensity.value=p.envMapIntensity)}function d(_,p,y){_.ior.value=p.ior,p.sheen>0&&(_.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),_.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(_.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,_.sheenColorMapTransform)),p.sheenRoughnessMap&&(_.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,_.sheenRoughnessMapTransform))),p.clearcoat>0&&(_.clearcoat.value=p.clearcoat,_.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(_.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,_.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(_.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,_.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(_.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,_.clearcoatNormalMapTransform),_.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Sn&&_.clearcoatNormalScale.value.negate())),p.dispersion>0&&(_.dispersion.value=p.dispersion),p.iridescence>0&&(_.iridescence.value=p.iridescence,_.iridescenceIOR.value=p.iridescenceIOR,_.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],_.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(_.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,_.iridescenceMapTransform)),p.iridescenceThicknessMap&&(_.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,_.iridescenceThicknessMapTransform))),p.transmission>0&&(_.transmission.value=p.transmission,_.transmissionSamplerMap.value=y.texture,_.transmissionSamplerSize.value.set(y.width,y.height),p.transmissionMap&&(_.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,_.transmissionMapTransform)),_.thickness.value=p.thickness,p.thicknessMap&&(_.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,_.thicknessMapTransform)),_.attenuationDistance.value=p.attenuationDistance,_.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(_.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(_.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,_.anisotropyMapTransform))),_.specularIntensity.value=p.specularIntensity,_.specularColor.value.copy(p.specularColor),p.specularColorMap&&(_.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,_.specularColorMapTransform)),p.specularIntensityMap&&(_.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,_.specularIntensityMapTransform))}function m(_,p){p.matcap&&(_.matcap.value=p.matcap)}function g(_,p){let y=t.get(p).light;_.referencePosition.value.setFromMatrixPosition(y.matrixWorld),_.nearDistance.value=y.shadow.camera.near,_.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function WM(r,t,e,n){let i={},s={},o=[],a=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,v){let M=v.program;n.uniformBlockBinding(y,M)}function c(y,v){let M=i[y.id];M===void 0&&(m(y),M=u(y),i[y.id]=M,y.addEventListener("dispose",_));let T=v.program;n.updateUBOMapping(y,T);let E=t.render.frame;s[y.id]!==E&&(f(y),s[y.id]=E)}function u(y){let v=h();y.__bindingPointIndex=v;let M=r.createBuffer(),T=y.__size,E=y.usage;return r.bindBuffer(r.UNIFORM_BUFFER,M),r.bufferData(r.UNIFORM_BUFFER,T,E),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,v,M),M}function h(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return Yt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(y){let v=i[y.id],M=y.uniforms,T=y.__cache;r.bindBuffer(r.UNIFORM_BUFFER,v);for(let E=0,w=M.length;E<w;E++){let R=Array.isArray(M[E])?M[E]:[M[E]];for(let x=0,b=R.length;x<b;x++){let L=R[x];if(d(L,E,x,T)===!0){let F=L.__offset,k=Array.isArray(L.value)?L.value:[L.value],H=0;for(let Y=0;Y<k.length;Y++){let W=k[Y],G=g(W);typeof W=="number"||typeof W=="boolean"?(L.__data[0]=W,r.bufferSubData(r.UNIFORM_BUFFER,F+H,L.__data)):W.isMatrix3?(L.__data[0]=W.elements[0],L.__data[1]=W.elements[1],L.__data[2]=W.elements[2],L.__data[3]=0,L.__data[4]=W.elements[3],L.__data[5]=W.elements[4],L.__data[6]=W.elements[5],L.__data[7]=0,L.__data[8]=W.elements[6],L.__data[9]=W.elements[7],L.__data[10]=W.elements[8],L.__data[11]=0):(W.toArray(L.__data,H),H+=G.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,F,L.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function d(y,v,M,T){let E=y.value,w=v+"_"+M;if(T[w]===void 0)return typeof E=="number"||typeof E=="boolean"?T[w]=E:T[w]=E.clone(),!0;{let R=T[w];if(typeof E=="number"||typeof E=="boolean"){if(R!==E)return T[w]=E,!0}else if(R.equals(E)===!1)return R.copy(E),!0}return!1}function m(y){let v=y.uniforms,M=0,T=16;for(let w=0,R=v.length;w<R;w++){let x=Array.isArray(v[w])?v[w]:[v[w]];for(let b=0,L=x.length;b<L;b++){let F=x[b],k=Array.isArray(F.value)?F.value:[F.value];for(let H=0,Y=k.length;H<Y;H++){let W=k[H],G=g(W),Z=M%T,it=Z%G.boundary,N=Z+it;M+=it,N!==0&&T-N<G.storage&&(M+=T-N),F.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=M,M+=G.storage}}}let E=M%T;return E>0&&(M+=T-E),y.__size=M,y.__cache={},this}function g(y){let v={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(v.boundary=4,v.storage=4):y.isVector2?(v.boundary=8,v.storage=8):y.isVector3||y.isColor?(v.boundary=16,v.storage=12):y.isVector4?(v.boundary=16,v.storage=16):y.isMatrix3?(v.boundary=48,v.storage=48):y.isMatrix4?(v.boundary=64,v.storage=64):y.isTexture?Jt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Jt("WebGLRenderer: Unsupported uniform value type.",y),v}function _(y){let v=y.target;v.removeEventListener("dispose",_);let M=o.indexOf(v.__bindingPointIndex);o.splice(M,1),r.deleteBuffer(i[v.id]),delete i[v.id],delete s[v.id]}function p(){for(let y in i)r.deleteBuffer(i[y]);o=[],i={},s={}}return{bind:l,update:c,dispose:p}}var XM=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),nr=null;function qM(){return nr===null&&(nr=new Na(XM,16,16,Is,er),nr.name="DFG_LUT",nr.minFilter=Mn,nr.magFilter=Mn,nr.wrapS=Ki,nr.wrapT=Ki,nr.generateMipmaps=!1,nr.needsUpdate=!0),nr}var ts=class{constructor(t={}){let{canvas:e=Dm(),context:n=null,depth:i=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reversedDepthBuffer:f=!1,outputBufferType:d=ei}=t;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=o;let g=d,_=new Set([lh,ah,oh]),p=new Set([ei,qi,Lo,No,ih,rh]),y=new Uint32Array(4),v=new Int32Array(4),M=null,T=null,E=[],w=[],R=null;this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let x=this,b=!1;this._outputColorSpace=Qe;let L=0,F=0,k=null,H=-1,Y=null,W=new Ge,G=new Ge,Z=null,it=new jt(0),N=0,nt=e.width,Lt=e.height,Ot=1,Bt=null,Zt=null,K=new Ge(0,0,nt,Lt),j=new Ge(0,0,nt,Lt),ht=!1,Ct=new Po,gt=!1,Vt=!1,oe=new Pe,_t=new U,Nt=new Ge,Gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Ut=!1;function q(){return k===null?Ot:1}let O=n;function me(A,V){return e.getContext(A,V)}try{let A={alpha:!0,depth:i,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"182"}`),e.addEventListener("webglcontextlost",Ht,!1),e.addEventListener("webglcontextrestored",_e,!1),e.addEventListener("webglcontextcreationerror",Tt,!1),O===null){let V="webgl2";if(O=me(V,A),O===null)throw me(V)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw Yt("WebGLRenderer: "+A.message),A}let ee,Wt,At,P,S,C,I,B,z,rt,Q,vt,yt,et,lt,St,Rt,ct,pt,D,ut,ot,mt,st;function tt(){ee=new Qy(O),ee.init(),ot=new kM(O,ee),Wt=new Wy(O,ee,t,ot),At=new OM(O,ee),Wt.reversedDepthBuffer&&f&&At.buffers.depth.setReversed(!0),P=new n1(O),S=new bM,C=new BM(O,ee,At,S,Wt,ot,P),I=new qy(x),B=new jy(x),z=new ox(O),mt=new Hy(O,z),rt=new t1(O,z,P,mt),Q=new r1(O,rt,z,P),pt=new i1(O,Wt,C),St=new Xy(S),vt=new MM(x,I,B,ee,Wt,mt,St),yt=new GM(x,S),et=new TM,lt=new PM(ee),ct=new Vy(x,I,B,At,Q,m,l),Rt=new FM(x,Q,Wt),st=new WM(O,P,Wt,At),D=new Gy(O,ee,P),ut=new e1(O,ee,P),P.programs=vt.programs,x.capabilities=Wt,x.extensions=ee,x.properties=S,x.renderLists=et,x.shadowMap=Rt,x.state=At,x.info=P}tt(),g!==ei&&(R=new o1(g,e.width,e.height,i,s));let ft=new af(x,O);this.xr=ft,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){let A=ee.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){let A=ee.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return Ot},this.setPixelRatio=function(A){A!==void 0&&(Ot=A,this.setSize(nt,Lt,!1))},this.getSize=function(A){return A.set(nt,Lt)},this.setSize=function(A,V,J=!0){if(ft.isPresenting){Jt("WebGLRenderer: Can't change size while VR device is presenting.");return}nt=A,Lt=V,e.width=Math.floor(A*Ot),e.height=Math.floor(V*Ot),J===!0&&(e.style.width=A+"px",e.style.height=V+"px"),R!==null&&R.setSize(e.width,e.height),this.setViewport(0,0,A,V)},this.getDrawingBufferSize=function(A){return A.set(nt*Ot,Lt*Ot).floor()},this.setDrawingBufferSize=function(A,V,J){nt=A,Lt=V,Ot=J,e.width=Math.floor(A*J),e.height=Math.floor(V*J),this.setViewport(0,0,A,V)},this.setEffects=function(A){if(g===ei){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let V=0;V<A.length;V++)if(A[V].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(W)},this.getViewport=function(A){return A.copy(K)},this.setViewport=function(A,V,J,$){A.isVector4?K.set(A.x,A.y,A.z,A.w):K.set(A,V,J,$),At.viewport(W.copy(K).multiplyScalar(Ot).round())},this.getScissor=function(A){return A.copy(j)},this.setScissor=function(A,V,J,$){A.isVector4?j.set(A.x,A.y,A.z,A.w):j.set(A,V,J,$),At.scissor(G.copy(j).multiplyScalar(Ot).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(A){At.setScissorTest(ht=A)},this.setOpaqueSort=function(A){Bt=A},this.setTransparentSort=function(A){Zt=A},this.getClearColor=function(A){return A.copy(ct.getClearColor())},this.setClearColor=function(){ct.setClearColor(...arguments)},this.getClearAlpha=function(){return ct.getClearAlpha()},this.setClearAlpha=function(){ct.setClearAlpha(...arguments)},this.clear=function(A=!0,V=!0,J=!0){let $=0;if(A){let X=!1;if(k!==null){let dt=k.texture.format;X=_.has(dt)}if(X){let dt=k.texture.type,Et=p.has(dt),xt=ct.getClearColor(),wt=ct.getClearAlpha(),kt=xt.r,$t=xt.g,Xt=xt.b;Et?(y[0]=kt,y[1]=$t,y[2]=Xt,y[3]=wt,O.clearBufferuiv(O.COLOR,0,y)):(v[0]=kt,v[1]=$t,v[2]=Xt,v[3]=wt,O.clearBufferiv(O.COLOR,0,v))}else $|=O.COLOR_BUFFER_BIT}V&&($|=O.DEPTH_BUFFER_BIT),J&&($|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear($)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Ht,!1),e.removeEventListener("webglcontextrestored",_e,!1),e.removeEventListener("webglcontextcreationerror",Tt,!1),ct.dispose(),et.dispose(),lt.dispose(),S.dispose(),I.dispose(),B.dispose(),Q.dispose(),mt.dispose(),st.dispose(),vt.dispose(),ft.dispose(),ft.removeEventListener("sessionstart",je),ft.removeEventListener("sessionend",ce),Ee.stop()};function Ht(A){A.preventDefault(),Sa("WebGLRenderer: Context Lost."),b=!0}function _e(){Sa("WebGLRenderer: Context Restored."),b=!1;let A=P.autoReset,V=Rt.enabled,J=Rt.autoUpdate,$=Rt.needsUpdate,X=Rt.type;tt(),P.autoReset=A,Rt.enabled=V,Rt.autoUpdate=J,Rt.needsUpdate=$,Rt.type=X}function Tt(A){Yt("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Ft(A){let V=A.target;V.removeEventListener("dispose",Ft),re(V)}function re(A){Mt(A),S.remove(A)}function Mt(A){let V=S.get(A).programs;V!==void 0&&(V.forEach(function(J){vt.releaseProgram(J)}),A.isShaderMaterial&&vt.releaseShaderCache(A))}this.renderBufferDirect=function(A,V,J,$,X,dt){V===null&&(V=Gt);let Et=X.isMesh&&X.matrixWorld.determinant()<0,xt=an(A,V,J,$,X);At.setMaterial($,Et);let wt=J.index,kt=1;if($.wireframe===!0){if(wt=rt.getWireframeAttribute(J),wt===void 0)return;kt=2}let $t=J.drawRange,Xt=J.attributes.position,he=$t.start*kt,Ce=($t.start+$t.count)*kt;dt!==null&&(he=Math.max(he,dt.start*kt),Ce=Math.min(Ce,(dt.start+dt.count)*kt)),wt!==null?(he=Math.max(he,0),Ce=Math.min(Ce,wt.count)):Xt!=null&&(he=Math.max(he,0),Ce=Math.min(Ce,Xt.count));let Ye=Ce-he;if(Ye<0||Ye===1/0)return;mt.setup(X,$,xt,J,wt);let Ze,De=D;if(wt!==null&&(Ze=z.get(wt),De=ut,De.setIndex(Ze)),X.isMesh)$.wireframe===!0?(At.setLineWidth($.wireframeLinewidth*q()),De.setMode(O.LINES)):De.setMode(O.TRIANGLES);else if(X.isLine){let qt=$.linewidth;qt===void 0&&(qt=1),At.setLineWidth(qt*q()),X.isLineSegments?De.setMode(O.LINES):X.isLineLoop?De.setMode(O.LINE_LOOP):De.setMode(O.LINE_STRIP)}else X.isPoints?De.setMode(O.POINTS):X.isSprite&&De.setMode(O.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)Eo("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),De.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(ee.get("WEBGL_multi_draw"))De.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{let qt=X._multiDrawStarts,we=X._multiDrawCounts,ve=X._multiDrawCount,li=wt?z.get(wt).bytesPerElement:1,ro=S.get($).currentProgram.getUniforms();for(let ci=0;ci<ve;ci++)ro.setValue(O,"_gl_DrawID",ci),De.render(qt[ci]/li,we[ci])}else if(X.isInstancedMesh)De.renderInstances(he,Ye,X.count);else if(J.isInstancedBufferGeometry){let qt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,we=Math.min(J.instanceCount,qt);De.renderInstances(he,Ye,we)}else De.render(he,Ye)};function Kt(A,V,J){A.transparent===!0&&A.side===gi&&A.forceSinglePass===!1?(A.side=Sn,A.needsUpdate=!0,Ae(A,V,J),A.side=xr,A.needsUpdate=!0,Ae(A,V,J),A.side=gi):Ae(A,V,J)}this.compile=function(A,V,J=null){J===null&&(J=A),T=lt.get(J),T.init(V),w.push(T),J.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),A!==J&&A.traverseVisible(function(X){X.isLight&&X.layers.test(V.layers)&&(T.pushLight(X),X.castShadow&&T.pushShadow(X))}),T.setupLights();let $=new Set;return A.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;let dt=X.material;if(dt)if(Array.isArray(dt))for(let Et=0;Et<dt.length;Et++){let xt=dt[Et];Kt(xt,J,X),$.add(xt)}else Kt(dt,J,X),$.add(dt)}),T=w.pop(),$},this.compileAsync=function(A,V,J=null){let $=this.compile(A,V,J);return new Promise(X=>{function dt(){if($.forEach(function(Et){S.get(Et).currentProgram.isReady()&&$.delete(Et)}),$.size===0){X(A);return}setTimeout(dt,10)}ee.get("KHR_parallel_shader_compile")!==null?dt():setTimeout(dt,10)})};let zt=null;function Qt(A){zt&&zt(A)}function je(){Ee.stop()}function ce(){Ee.start()}let Ee=new o0;Ee.setAnimationLoop(Qt),typeof self<"u"&&Ee.setContext(self),this.setAnimationLoop=function(A){zt=A,ft.setAnimationLoop(A),A===null?Ee.stop():Ee.start()},ft.addEventListener("sessionstart",je),ft.addEventListener("sessionend",ce),this.render=function(A,V){if(V!==void 0&&V.isCamera!==!0){Yt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;let J=ft.enabled===!0&&ft.isPresenting===!0,$=R!==null&&(k===null||J)&&R.begin(x,k);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),V.parent===null&&V.matrixWorldAutoUpdate===!0&&V.updateMatrixWorld(),ft.enabled===!0&&ft.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ft.cameraAutoUpdate===!0&&ft.updateCamera(V),V=ft.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,V,k),T=lt.get(A,w.length),T.init(V),w.push(T),oe.multiplyMatrices(V.projectionMatrix,V.matrixWorldInverse),Ct.setFromProjectionMatrix(oe,Vi,V.reversedDepth),Vt=this.localClippingEnabled,gt=St.init(this.clippingPlanes,Vt),M=et.get(A,E.length),M.init(),E.push(M),ft.enabled===!0&&ft.isPresenting===!0){let Et=x.xr.getDepthSensingMesh();Et!==null&&nn(Et,V,-1/0,x.sortObjects)}nn(A,V,0,x.sortObjects),M.finish(),x.sortObjects===!0&&M.sort(Bt,Zt),Ut=ft.enabled===!1||ft.isPresenting===!1||ft.hasDepthSensing()===!1,Ut&&ct.addToRenderList(M,A),this.info.render.frame++,gt===!0&&St.beginShadows();let X=T.state.shadowsArray;if(Rt.render(X,A,V),gt===!0&&St.endShadows(),this.info.autoReset===!0&&this.info.reset(),($&&R.hasRenderPass())===!1){let Et=M.opaque,xt=M.transmissive;if(T.setupLights(),V.isArrayCamera){let wt=V.cameras;if(xt.length>0)for(let kt=0,$t=wt.length;kt<$t;kt++){let Xt=wt[kt];Ie(Et,xt,A,Xt)}Ut&&ct.render(A);for(let kt=0,$t=wt.length;kt<$t;kt++){let Xt=wt[kt];Be(M,A,Xt,Xt.viewport)}}else xt.length>0&&Ie(Et,xt,A,V),Ut&&ct.render(A),Be(M,A,V)}k!==null&&F===0&&(C.updateMultisampleRenderTarget(k),C.updateRenderTargetMipmap(k)),$&&R.end(x),A.isScene===!0&&A.onAfterRender(x,A,V),mt.resetDefaultState(),H=-1,Y=null,w.pop(),w.length>0?(T=w[w.length-1],gt===!0&&St.setGlobalState(x.clippingPlanes,T.state.camera)):T=null,E.pop(),E.length>0?M=E[E.length-1]:M=null};function nn(A,V,J,$){if(A.visible===!1)return;if(A.layers.test(V.layers)){if(A.isGroup)J=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(V);else if(A.isLight)T.pushLight(A),A.castShadow&&T.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||Ct.intersectsSprite(A)){$&&Nt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(oe);let Et=Q.update(A),xt=A.material;xt.visible&&M.push(A,Et,xt,J,Nt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||Ct.intersectsObject(A))){let Et=Q.update(A),xt=A.material;if($&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Nt.copy(A.boundingSphere.center)):(Et.boundingSphere===null&&Et.computeBoundingSphere(),Nt.copy(Et.boundingSphere.center)),Nt.applyMatrix4(A.matrixWorld).applyMatrix4(oe)),Array.isArray(xt)){let wt=Et.groups;for(let kt=0,$t=wt.length;kt<$t;kt++){let Xt=wt[kt],he=xt[Xt.materialIndex];he&&he.visible&&M.push(A,Et,he,J,Nt.z,Xt)}}else xt.visible&&M.push(A,Et,xt,J,Nt.z,null)}}let dt=A.children;for(let Et=0,xt=dt.length;Et<xt;Et++)nn(dt[Et],V,J,$)}function Be(A,V,J,$){let{opaque:X,transmissive:dt,transparent:Et}=A;T.setupLightsView(J),gt===!0&&St.setGlobalState(x.clippingPlanes,J),$&&At.viewport(W.copy($)),X.length>0&&xe(X,V,J),dt.length>0&&xe(dt,V,J),Et.length>0&&xe(Et,V,J),At.buffers.depth.setTest(!0),At.buffers.depth.setMask(!0),At.buffers.color.setMask(!0),At.setPolygonOffset(!1)}function Ie(A,V,J,$){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(T.state.transmissionRenderTarget[$.id]===void 0){let he=ee.has("EXT_color_buffer_half_float")||ee.has("EXT_color_buffer_float");T.state.transmissionRenderTarget[$.id]=new di(1,1,{generateMipmaps:!0,type:he?er:ei,minFilter:Jr,samples:Wt.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ge.workingColorSpace})}let dt=T.state.transmissionRenderTarget[$.id],Et=$.viewport||W;dt.setSize(Et.z*x.transmissionResolutionScale,Et.w*x.transmissionResolutionScale);let xt=x.getRenderTarget(),wt=x.getActiveCubeFace(),kt=x.getActiveMipmapLevel();x.setRenderTarget(dt),x.getClearColor(it),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear(),Ut&&ct.render(J);let $t=x.toneMapping;x.toneMapping=Xi;let Xt=$.viewport;if($.viewport!==void 0&&($.viewport=void 0),T.setupLightsView($),gt===!0&&St.setGlobalState(x.clippingPlanes,$),xe(A,J,$),C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt),ee.has("WEBGL_multisampled_render_to_texture")===!1){let he=!1;for(let Ce=0,Ye=V.length;Ce<Ye;Ce++){let Ze=V[Ce],{object:De,geometry:qt,material:we,group:ve}=Ze;if(we.side===gi&&De.layers.test($.layers)){let li=we.side;we.side=Sn,we.needsUpdate=!0,jn(De,J,$,qt,we,ve),we.side=li,we.needsUpdate=!0,he=!0}}he===!0&&(C.updateMultisampleRenderTarget(dt),C.updateRenderTargetMipmap(dt))}x.setRenderTarget(xt,wt,kt),x.setClearColor(it,N),Xt!==void 0&&($.viewport=Xt),x.toneMapping=$t}function xe(A,V,J){let $=V.isScene===!0?V.overrideMaterial:null;for(let X=0,dt=A.length;X<dt;X++){let Et=A[X],{object:xt,geometry:wt,group:kt}=Et,$t=Et.material;$t.allowOverride===!0&&$!==null&&($t=$),xt.layers.test(J.layers)&&jn(xt,V,J,wt,$t,kt)}}function jn(A,V,J,$,X,dt){A.onBeforeRender(x,V,J,$,X,dt),A.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),X.onBeforeRender(x,V,J,$,A,dt),X.transparent===!0&&X.side===gi&&X.forceSinglePass===!1?(X.side=Sn,X.needsUpdate=!0,x.renderBufferDirect(J,V,$,X,A,dt),X.side=xr,X.needsUpdate=!0,x.renderBufferDirect(J,V,$,X,A,dt),X.side=gi):x.renderBufferDirect(J,V,$,X,A,dt),A.onAfterRender(x,V,J,$,X,dt)}function Ae(A,V,J){V.isScene!==!0&&(V=Gt);let $=S.get(A),X=T.state.lights,dt=T.state.shadowsArray,Et=X.state.version,xt=vt.getParameters(A,X.state,dt,V,J),wt=vt.getProgramCacheKey(xt),kt=$.programs;$.environment=A.isMeshStandardMaterial?V.environment:null,$.fog=V.fog,$.envMap=(A.isMeshStandardMaterial?B:I).get(A.envMap||$.environment),$.envMapRotation=$.environment!==null&&A.envMap===null?V.environmentRotation:A.envMapRotation,kt===void 0&&(A.addEventListener("dispose",Ft),kt=new Map,$.programs=kt);let $t=kt.get(wt);if($t!==void 0){if($.currentProgram===$t&&$.lightsStateVersion===Et)return ai(A,xt),$t}else xt.uniforms=vt.getUniforms(A),A.onBeforeCompile(xt,x),$t=vt.acquireProgram(xt,wt),kt.set(wt,$t),$.uniforms=xt.uniforms;let Xt=$.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Xt.clippingPlanes=St.uniform),ai(A,xt),$.needsLights=mn(A),$.lightsStateVersion=Et,$.needsLights&&(Xt.ambientLightColor.value=X.state.ambient,Xt.lightProbe.value=X.state.probe,Xt.directionalLights.value=X.state.directional,Xt.directionalLightShadows.value=X.state.directionalShadow,Xt.spotLights.value=X.state.spot,Xt.spotLightShadows.value=X.state.spotShadow,Xt.rectAreaLights.value=X.state.rectArea,Xt.ltc_1.value=X.state.rectAreaLTC1,Xt.ltc_2.value=X.state.rectAreaLTC2,Xt.pointLights.value=X.state.point,Xt.pointLightShadows.value=X.state.pointShadow,Xt.hemisphereLights.value=X.state.hemi,Xt.directionalShadowMap.value=X.state.directionalShadowMap,Xt.directionalShadowMatrix.value=X.state.directionalShadowMatrix,Xt.spotShadowMap.value=X.state.spotShadowMap,Xt.spotLightMatrix.value=X.state.spotLightMatrix,Xt.spotLightMap.value=X.state.spotLightMap,Xt.pointShadowMap.value=X.state.pointShadowMap,Xt.pointShadowMatrix.value=X.state.pointShadowMatrix),$.currentProgram=$t,$.uniformsList=null,$t}function Rn(A){if(A.uniformsList===null){let V=A.currentProgram.getUniforms();A.uniformsList=Uo.seqWithValue(V.seq,A.uniforms)}return A.uniformsList}function ai(A,V){let J=S.get(A);J.outputColorSpace=V.outputColorSpace,J.batching=V.batching,J.batchingColor=V.batchingColor,J.instancing=V.instancing,J.instancingColor=V.instancingColor,J.instancingMorph=V.instancingMorph,J.skinning=V.skinning,J.morphTargets=V.morphTargets,J.morphNormals=V.morphNormals,J.morphColors=V.morphColors,J.morphTargetsCount=V.morphTargetsCount,J.numClippingPlanes=V.numClippingPlanes,J.numIntersection=V.numClipIntersection,J.vertexAlphas=V.vertexAlphas,J.vertexTangents=V.vertexTangents,J.toneMapping=V.toneMapping}function an(A,V,J,$,X){V.isScene!==!0&&(V=Gt),C.resetTextureUnits();let dt=V.fog,Et=$.isMeshStandardMaterial?V.environment:null,xt=k===null?x.outputColorSpace:k.isXRRenderTarget===!0?k.texture.colorSpace:Ss,wt=($.isMeshStandardMaterial?B:I).get($.envMap||Et),kt=$.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,$t=!!J.attributes.tangent&&(!!$.normalMap||$.anisotropy>0),Xt=!!J.morphAttributes.position,he=!!J.morphAttributes.normal,Ce=!!J.morphAttributes.color,Ye=Xi;$.toneMapped&&(k===null||k.isXRRenderTarget===!0)&&(Ye=x.toneMapping);let Ze=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,De=Ze!==void 0?Ze.length:0,qt=S.get($),we=T.state.lights;if(gt===!0&&(Vt===!0||A!==Y)){let zn=A===Y&&$.id===H;St.setState($,A,zn)}let ve=!1;$.version===qt.__version?(qt.needsLights&&qt.lightsStateVersion!==we.state.version||qt.outputColorSpace!==xt||X.isBatchedMesh&&qt.batching===!1||!X.isBatchedMesh&&qt.batching===!0||X.isBatchedMesh&&qt.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&qt.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&qt.instancing===!1||!X.isInstancedMesh&&qt.instancing===!0||X.isSkinnedMesh&&qt.skinning===!1||!X.isSkinnedMesh&&qt.skinning===!0||X.isInstancedMesh&&qt.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&qt.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&qt.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&qt.instancingMorph===!1&&X.morphTexture!==null||qt.envMap!==wt||$.fog===!0&&qt.fog!==dt||qt.numClippingPlanes!==void 0&&(qt.numClippingPlanes!==St.numPlanes||qt.numIntersection!==St.numIntersection)||qt.vertexAlphas!==kt||qt.vertexTangents!==$t||qt.morphTargets!==Xt||qt.morphNormals!==he||qt.morphColors!==Ce||qt.toneMapping!==Ye||qt.morphTargetsCount!==De)&&(ve=!0):(ve=!0,qt.__version=$.version);let li=qt.currentProgram;ve===!0&&(li=Ae($,V,X));let ro=!1,ci=!1,aa=!1,Fe=li.getUniforms(),Qn=qt.uniforms;if(At.useProgram(li.program)&&(ro=!0,ci=!0,aa=!0),$.id!==H&&(H=$.id,ci=!0),ro||Y!==A){At.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Fe.setValue(O,"projectionMatrix",A.projectionMatrix),Fe.setValue(O,"viewMatrix",A.matrixWorldInverse);let ti=Fe.map.cameraPosition;ti!==void 0&&ti.setValue(O,_t.setFromMatrixPosition(A.matrixWorld)),Wt.logarithmicDepthBuffer&&Fe.setValue(O,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),($.isMeshPhongMaterial||$.isMeshToonMaterial||$.isMeshLambertMaterial||$.isMeshBasicMaterial||$.isMeshStandardMaterial||$.isShaderMaterial)&&Fe.setValue(O,"isOrthographic",A.isOrthographicCamera===!0),Y!==A&&(Y=A,ci=!0,aa=!0)}if(qt.needsLights&&(we.state.directionalShadowMap.length>0&&Fe.setValue(O,"directionalShadowMap",we.state.directionalShadowMap,C),we.state.spotShadowMap.length>0&&Fe.setValue(O,"spotShadowMap",we.state.spotShadowMap,C),we.state.pointShadowMap.length>0&&Fe.setValue(O,"pointShadowMap",we.state.pointShadowMap,C)),X.isSkinnedMesh){Fe.setOptional(O,X,"bindMatrix"),Fe.setOptional(O,X,"bindMatrixInverse");let zn=X.skeleton;zn&&(zn.boneTexture===null&&zn.computeBoneTexture(),Fe.setValue(O,"boneTexture",zn.boneTexture,C))}X.isBatchedMesh&&(Fe.setOptional(O,X,"batchingTexture"),Fe.setValue(O,"batchingTexture",X._matricesTexture,C),Fe.setOptional(O,X,"batchingIdTexture"),Fe.setValue(O,"batchingIdTexture",X._indirectTexture,C),Fe.setOptional(O,X,"batchingColorTexture"),X._colorsTexture!==null&&Fe.setValue(O,"batchingColorTexture",X._colorsTexture,C));let Ei=J.morphAttributes;if((Ei.position!==void 0||Ei.normal!==void 0||Ei.color!==void 0)&&pt.update(X,J,li),(ci||qt.receiveShadow!==X.receiveShadow)&&(qt.receiveShadow=X.receiveShadow,Fe.setValue(O,"receiveShadow",X.receiveShadow)),$.isMeshGouraudMaterial&&$.envMap!==null&&(Qn.envMap.value=wt,Qn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),$.isMeshStandardMaterial&&$.envMap===null&&V.environment!==null&&(Qn.envMapIntensity.value=V.environmentIntensity),Qn.dfgLUT!==void 0&&(Qn.dfgLUT.value=qM()),ci&&(Fe.setValue(O,"toneMappingExposure",x.toneMappingExposure),qt.needsLights&&ln(Qn,aa),dt&&$.fog===!0&&yt.refreshFogUniforms(Qn,dt),yt.refreshMaterialUniforms(Qn,$,Ot,Lt,T.state.transmissionRenderTarget[A.id]),Uo.upload(O,Rn(qt),Qn,C)),$.isShaderMaterial&&$.uniformsNeedUpdate===!0&&(Uo.upload(O,Rn(qt),Qn,C),$.uniformsNeedUpdate=!1),$.isSpriteMaterial&&Fe.setValue(O,"center",X.center),Fe.setValue(O,"modelViewMatrix",X.modelViewMatrix),Fe.setValue(O,"normalMatrix",X.normalMatrix),Fe.setValue(O,"modelMatrix",X.matrixWorld),$.isShaderMaterial||$.isRawShaderMaterial){let zn=$.uniformsGroups;for(let ti=0,ku=zn.length;ti<ku;ti++){let ms=zn[ti];st.update(ms,li),st.bind(ms,li)}}return li}function ln(A,V){A.ambientLightColor.needsUpdate=V,A.lightProbe.needsUpdate=V,A.directionalLights.needsUpdate=V,A.directionalLightShadows.needsUpdate=V,A.pointLights.needsUpdate=V,A.pointLightShadows.needsUpdate=V,A.spotLights.needsUpdate=V,A.spotLightShadows.needsUpdate=V,A.rectAreaLights.needsUpdate=V,A.hemisphereLights.needsUpdate=V}function mn(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return k},this.setRenderTargetTextures=function(A,V,J){let $=S.get(A);$.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,$.__autoAllocateDepthBuffer===!1&&($.__useRenderToTexture=!1),S.get(A.texture).__webglTexture=V,S.get(A.depthTexture).__webglTexture=$.__autoAllocateDepthBuffer?void 0:J,$.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,V){let J=S.get(A);J.__webglFramebuffer=V,J.__useDefaultFramebuffer=V===void 0};let hr=O.createFramebuffer();this.setRenderTarget=function(A,V=0,J=0){k=A,L=V,F=J;let $=null,X=!1,dt=!1;if(A){let xt=S.get(A);if(xt.__useDefaultFramebuffer!==void 0){At.bindFramebuffer(O.FRAMEBUFFER,xt.__webglFramebuffer),W.copy(A.viewport),G.copy(A.scissor),Z=A.scissorTest,At.viewport(W),At.scissor(G),At.setScissorTest(Z),H=-1;return}else if(xt.__webglFramebuffer===void 0)C.setupRenderTarget(A);else if(xt.__hasExternalTextures)C.rebindTextures(A,S.get(A.texture).__webglTexture,S.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){let $t=A.depthTexture;if(xt.__boundDepthTexture!==$t){if($t!==null&&S.has($t)&&(A.width!==$t.image.width||A.height!==$t.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");C.setupDepthRenderbuffer(A)}}let wt=A.texture;(wt.isData3DTexture||wt.isDataArrayTexture||wt.isCompressedArrayTexture)&&(dt=!0);let kt=S.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(kt[V])?$=kt[V][J]:$=kt[V],X=!0):A.samples>0&&C.useMultisampledRTT(A)===!1?$=S.get(A).__webglMultisampledFramebuffer:Array.isArray(kt)?$=kt[J]:$=kt,W.copy(A.viewport),G.copy(A.scissor),Z=A.scissorTest}else W.copy(K).multiplyScalar(Ot).floor(),G.copy(j).multiplyScalar(Ot).floor(),Z=ht;if(J!==0&&($=hr),At.bindFramebuffer(O.FRAMEBUFFER,$)&&At.drawBuffers(A,$),At.viewport(W),At.scissor(G),At.setScissorTest(Z),X){let xt=S.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+V,xt.__webglTexture,J)}else if(dt){let xt=V;for(let wt=0;wt<A.textures.length;wt++){let kt=S.get(A.textures[wt]);O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0+wt,kt.__webglTexture,J,xt)}}else if(A!==null&&J!==0){let xt=S.get(A.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,xt.__webglTexture,J)}H=-1},this.readRenderTargetPixels=function(A,V,J,$,X,dt,Et,xt=0){if(!(A&&A.isWebGLRenderTarget)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let wt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt){At.bindFramebuffer(O.FRAMEBUFFER,wt);try{let kt=A.textures[xt],$t=kt.format,Xt=kt.type;if(!Wt.textureFormatReadable($t)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Wt.textureTypeReadable(Xt)){Yt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}V>=0&&V<=A.width-$&&J>=0&&J<=A.height-X&&(A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),O.readPixels(V,J,$,X,ot.convert($t),ot.convert(Xt),dt))}finally{let kt=k!==null?S.get(k).__webglFramebuffer:null;At.bindFramebuffer(O.FRAMEBUFFER,kt)}}},this.readRenderTargetPixelsAsync=async function(A,V,J,$,X,dt,Et,xt=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let wt=S.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Et!==void 0&&(wt=wt[Et]),wt)if(V>=0&&V<=A.width-$&&J>=0&&J<=A.height-X){At.bindFramebuffer(O.FRAMEBUFFER,wt);let kt=A.textures[xt],$t=kt.format,Xt=kt.type;if(!Wt.textureFormatReadable($t))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Wt.textureTypeReadable(Xt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let he=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.bufferData(O.PIXEL_PACK_BUFFER,dt.byteLength,O.STREAM_READ),A.textures.length>1&&O.readBuffer(O.COLOR_ATTACHMENT0+xt),O.readPixels(V,J,$,X,ot.convert($t),ot.convert(Xt),0);let Ce=k!==null?S.get(k).__webglFramebuffer:null;At.bindFramebuffer(O.FRAMEBUFFER,Ce);let Ye=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Lm(O,Ye,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,he),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,dt),O.deleteBuffer(he),O.deleteSync(Ye),dt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,V=null,J=0){let $=Math.pow(2,-J),X=Math.floor(A.image.width*$),dt=Math.floor(A.image.height*$),Et=V!==null?V.x:0,xt=V!==null?V.y:0;C.setTexture2D(A,0),O.copyTexSubImage2D(O.TEXTURE_2D,J,0,0,Et,xt,X,dt),At.unbindTexture()};let io=O.createFramebuffer(),gn=O.createFramebuffer();this.copyTextureToTexture=function(A,V,J=null,$=null,X=0,dt=null){dt===null&&(X!==0?(Eo("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),dt=X,X=0):dt=0);let Et,xt,wt,kt,$t,Xt,he,Ce,Ye,Ze=A.isCompressedTexture?A.mipmaps[dt]:A.image;if(J!==null)Et=J.max.x-J.min.x,xt=J.max.y-J.min.y,wt=J.isBox3?J.max.z-J.min.z:1,kt=J.min.x,$t=J.min.y,Xt=J.isBox3?J.min.z:0;else{let Ei=Math.pow(2,-X);Et=Math.floor(Ze.width*Ei),xt=Math.floor(Ze.height*Ei),A.isDataArrayTexture?wt=Ze.depth:A.isData3DTexture?wt=Math.floor(Ze.depth*Ei):wt=1,kt=0,$t=0,Xt=0}$!==null?(he=$.x,Ce=$.y,Ye=$.z):(he=0,Ce=0,Ye=0);let De=ot.convert(V.format),qt=ot.convert(V.type),we;V.isData3DTexture?(C.setTexture3D(V,0),we=O.TEXTURE_3D):V.isDataArrayTexture||V.isCompressedArrayTexture?(C.setTexture2DArray(V,0),we=O.TEXTURE_2D_ARRAY):(C.setTexture2D(V,0),we=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,V.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,V.unpackAlignment);let ve=O.getParameter(O.UNPACK_ROW_LENGTH),li=O.getParameter(O.UNPACK_IMAGE_HEIGHT),ro=O.getParameter(O.UNPACK_SKIP_PIXELS),ci=O.getParameter(O.UNPACK_SKIP_ROWS),aa=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Ze.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Ze.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,kt),O.pixelStorei(O.UNPACK_SKIP_ROWS,$t),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Xt);let Fe=A.isDataArrayTexture||A.isData3DTexture,Qn=V.isDataArrayTexture||V.isData3DTexture;if(A.isDepthTexture){let Ei=S.get(A),zn=S.get(V),ti=S.get(Ei.__renderTarget),ku=S.get(zn.__renderTarget);At.bindFramebuffer(O.READ_FRAMEBUFFER,ti.__webglFramebuffer),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,ku.__webglFramebuffer);for(let ms=0;ms<wt;ms++)Fe&&(O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(A).__webglTexture,X,Xt+ms),O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,S.get(V).__webglTexture,dt,Ye+ms)),O.blitFramebuffer(kt,$t,Et,xt,he,Ce,Et,xt,O.DEPTH_BUFFER_BIT,O.NEAREST);At.bindFramebuffer(O.READ_FRAMEBUFFER,null),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else if(X!==0||A.isRenderTargetTexture||S.has(A)){let Ei=S.get(A),zn=S.get(V);At.bindFramebuffer(O.READ_FRAMEBUFFER,io),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,gn);for(let ti=0;ti<wt;ti++)Fe?O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Ei.__webglTexture,X,Xt+ti):O.framebufferTexture2D(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,Ei.__webglTexture,X),Qn?O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,zn.__webglTexture,dt,Ye+ti):O.framebufferTexture2D(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_2D,zn.__webglTexture,dt),X!==0?O.blitFramebuffer(kt,$t,Et,xt,he,Ce,Et,xt,O.COLOR_BUFFER_BIT,O.NEAREST):Qn?O.copyTexSubImage3D(we,dt,he,Ce,Ye+ti,kt,$t,Et,xt):O.copyTexSubImage2D(we,dt,he,Ce,kt,$t,Et,xt);At.bindFramebuffer(O.READ_FRAMEBUFFER,null),At.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Qn?A.isDataTexture||A.isData3DTexture?O.texSubImage3D(we,dt,he,Ce,Ye,Et,xt,wt,De,qt,Ze.data):V.isCompressedArrayTexture?O.compressedTexSubImage3D(we,dt,he,Ce,Ye,Et,xt,wt,De,Ze.data):O.texSubImage3D(we,dt,he,Ce,Ye,Et,xt,wt,De,qt,Ze):A.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,dt,he,Ce,Et,xt,De,qt,Ze.data):A.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,dt,he,Ce,Ze.width,Ze.height,De,Ze.data):O.texSubImage2D(O.TEXTURE_2D,dt,he,Ce,Et,xt,De,qt,Ze);O.pixelStorei(O.UNPACK_ROW_LENGTH,ve),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,li),O.pixelStorei(O.UNPACK_SKIP_PIXELS,ro),O.pixelStorei(O.UNPACK_SKIP_ROWS,ci),O.pixelStorei(O.UNPACK_SKIP_IMAGES,aa),dt===0&&V.generateMipmaps&&O.generateMipmap(we),At.unbindTexture()},this.initRenderTarget=function(A){S.get(A).__webglFramebuffer===void 0&&C.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?C.setTextureCube(A,0):A.isData3DTexture?C.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?C.setTexture2DArray(A,0):C.setTexture2D(A,0),At.unbindTexture()},this.resetState=function(){L=0,F=0,k=null,At.reset(),mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=ge._getDrawingBufferColorSpace(t),e.unpackColorSpace=ge._getUnpackColorSpace()}};function Er(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function v0(r,t){r.prototype=Object.create(t.prototype),r.prototype.constructor=r,r.__proto__=t}var si={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},ko={duration:.5,overwrite:!1,delay:0},wf,En,Ve,Di=1e8,Ne=1/Di,gf=Math.PI*2,YM=gf/4,ZM=0,y0=Math.sqrt,$M=Math.cos,JM=Math.sin,fn=function(t){return typeof t=="string"},$e=function(t){return typeof t=="function"},Ar=function(t){return typeof t=="number"},iu=function(t){return typeof t>"u"},or=function(t){return typeof t=="object"},ri=function(t){return t!==!1},Af=function(){return typeof window<"u"},Zh=function(t){return $e(t)||fn(t)},M0=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},Nn=Array.isArray,KM=/random\([^)]+\)/g,jM=/,\s*/g,u0=/(?:-?\.?\d|\.)+/gi,Cf=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,ks=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,cf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Rf=/[+-]=-?[.\d]+/,QM=/[^,'"\[\]\s]+/gi,tb=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Xe,rr,_f,Pf,xi={},jh={},b0,S0=function(t){return(jh=zo(t,xi))&&Fn},ru=function(t,e){return console.warn("Invalid property",t,"set to",e,"Missing plugin? gsap.registerPlugin()")},cl=function(t,e){return!e&&console.warn(t)},T0=function(t,e){return t&&(xi[t]=e)&&jh&&(jh[t]=e)||xi},hl=function(){return 0},eb={suppressEvents:!0,isStart:!0,kill:!1},$h={suppressEvents:!0,kill:!1},nb={suppressEvents:!0},If={},ns=[],xf={},E0,ni={},hf={},d0=30,Jh=[],Df="",Lf=function(t){var e=t[0],n,i;if(or(e)||$e(e)||(t=[t]),!(n=(e._gsap||{}).harness)){for(i=Jh.length;i--&&!Jh[i].targetTest(e););n=Jh[i]}for(i=t.length;i--;)t[i]&&(t[i]._gsap||(t[i]._gsap=new Of(t[i],n)))||t.splice(i,1);return t},is=function(t){return t._gsap||Lf(Li(t))[0]._gsap},Nf=function(t,e,n){return(n=t[e])&&$e(n)?t[e]():iu(n)&&t.getAttribute&&t.getAttribute(e)||n},Wn=function(t,e){return(t=t.split(",")).forEach(e)||t},Je=function(t){return Math.round(t*1e5)/1e5||0},We=function(t){return Math.round(t*1e7)/1e7||0},zs=function(t,e){var n=e.charAt(0),i=parseFloat(e.substr(2));return t=parseFloat(t),n==="+"?t+i:n==="-"?t-i:n==="*"?t*i:t/i},ib=function(t,e){for(var n=e.length,i=0;t.indexOf(e[i])<0&&++i<n;);return i<n},Qh=function(){var t=ns.length,e=ns.slice(0),n,i;for(xf={},ns.length=0,n=0;n<t;n++)i=e[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},Ff=function(t){return!!(t._initted||t._startAt||t.add)},w0=function(t,e,n,i){ns.length&&!En&&Qh(),t.render(e,n,i||!!(En&&e<0&&Ff(t))),ns.length&&!En&&Qh()},A0=function(t){var e=parseFloat(t);return(e||e===0)&&(t+"").match(QM).length<2?e:fn(t)?t.trim():t},C0=function(t){return t},vi=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},rb=function(t){return function(e,n){for(var i in n)i in e||i==="duration"&&t||i==="ease"||(e[i]=n[i])}},zo=function(t,e){for(var n in e)t[n]=e[n];return t},f0=function r(t,e){for(var n in e)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(t[n]=or(e[n])?r(t[n]||(t[n]={}),e[n]):e[n]);return t},tu=function(t,e){var n={},i;for(i in t)i in e||(n[i]=t[i]);return n},ol=function(t){var e=t.parent||Xe,n=t.keyframes?rb(Nn(t.keyframes)):vi;if(ri(t.inherit))for(;e;)n(t,e.vars.defaults),e=e.parent||e._dp;return t},sb=function(t,e){for(var n=t.length,i=n===e.length;i&&n--&&t[n]===e[n];);return n<0},R0=function(t,e,n,i,s){n===void 0&&(n="_first"),i===void 0&&(i="_last");var o=t[i],a;if(s)for(a=e[s];o&&o[s]>a;)o=o._prev;return o?(e._next=o._next,o._next=e):(e._next=t[n],t[n]=e),e._next?e._next._prev=e:t[i]=e,e._prev=o,e.parent=e._dp=t,e},su=function(t,e,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=e._prev,o=e._next;s?s._next=o:t[n]===e&&(t[n]=o),o?o._prev=s:t[i]===e&&(t[i]=s),e._next=e._prev=e.parent=null},rs=function(t,e){t.parent&&(!e||t.parent.autoRemoveChildren)&&t.parent.remove&&t.parent.remove(t),t._act=0},Us=function(t,e){if(t&&(!e||e._end>t._dur||e._start<0))for(var n=t;n;)n._dirty=1,n=n.parent;return t},ob=function(t){for(var e=t.parent;e&&e.parent;)e._dirty=1,e.totalDuration(),e=e.parent;return t},vf=function(t,e,n,i){return t._startAt&&(En?t._startAt.revert($h):t.vars.immediateRender&&!t.vars.autoRevert||t._startAt.render(e,!0,i))},ab=function r(t){return!t||t._ts&&r(t.parent)},p0=function(t){return t._repeat?Vo(t._tTime,t=t.duration()+t._rDelay)*t:0},Vo=function(t,e){var n=Math.floor(t=We(t/e));return t&&n===t?n-1:n},eu=function(t,e){return(t-e._start)*e._ts+(e._ts>=0?0:e._dirty?e.totalDuration():e._tDur)},ou=function(t){return t._end=We(t._start+(t._tDur/Math.abs(t._ts||t._rts||Ne)||0))},au=function(t,e){var n=t._dp;return n&&n.smoothChildTiming&&t._ts&&(t._start=We(n._time-(t._ts>0?e/t._ts:((t._dirty?t.totalDuration():t._tDur)-e)/-t._ts)),ou(t),n._dirty||Us(n,t)),t},P0=function(t,e){var n;if((e._time||!e._dur&&e._initted||e._start<t._time&&(e._dur||!e.add))&&(n=eu(t.rawTime(),e),(!e._dur||fl(0,e.totalDuration(),n)-e._tTime>Ne)&&e.render(n,!0)),Us(t,e)._dp&&t._initted&&t._time>=t._dur&&t._ts){if(t._dur<t.duration())for(n=t;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;t._zTime=-Ne}},sr=function(t,e,n,i){return e.parent&&rs(e),e._start=We((Ar(n)?n:n||t!==Xe?Ii(t,n,e):t._time)+e._delay),e._end=We(e._start+(e.totalDuration()/Math.abs(e.timeScale())||0)),R0(t,e,"_first","_last",t._sort?"_start":0),yf(e)||(t._recent=e),i||P0(t,e),t._ts<0&&au(t,t._tTime),t},I0=function(t,e){return(xi.ScrollTrigger||ru("scrollTrigger",e))&&xi.ScrollTrigger.create(e,t)},D0=function(t,e,n,i,s){if(zf(t,e,s),!t._initted)return 1;if(!n&&t._pt&&!En&&(t._dur&&t.vars.lazy!==!1||!t._dur&&t.vars.lazy)&&E0!==ii.frame)return ns.push(t),t._lazy=[s,i],1},lb=function r(t){var e=t.parent;return e&&e._ts&&e._initted&&!e._lock&&(e.rawTime()<0||r(e))},yf=function(t){var e=t.data;return e==="isFromStart"||e==="isStart"},cb=function(t,e,n,i){var s=t.ratio,o=e<0||!e&&(!t._start&&lb(t)&&!(!t._initted&&yf(t))||(t._ts<0||t._dp._ts<0)&&!yf(t))?0:1,a=t._rDelay,l=0,c,u,h;if(a&&t._repeat&&(l=fl(0,t._tDur,e),u=Vo(l,a),t._yoyo&&u&1&&(o=1-o),u!==Vo(t._tTime,a)&&(s=1-o,t.vars.repeatRefresh&&t._initted&&t.invalidate())),o!==s||En||i||t._zTime===Ne||!e&&t._zTime){if(!t._initted&&D0(t,e,i,n,l))return;for(h=t._zTime,t._zTime=e||(n?Ne:0),n||(n=e&&!h),t.ratio=o,t._from&&(o=1-o),t._time=0,t._tTime=l,c=t._pt;c;)c.r(o,c.d),c=c._next;e<0&&vf(t,e,n,!0),t._onUpdate&&!n&&_i(t,"onUpdate"),l&&t._repeat&&!n&&t.parent&&_i(t,"onRepeat"),(e>=t._tDur||e<0)&&t.ratio===o&&(o&&rs(t,1),!n&&!En&&(_i(t,o?"onComplete":"onReverseComplete",!0),t._prom&&t._prom()))}else t._zTime||(t._zTime=e)},hb=function(t,e,n){var i;if(n>e)for(i=t._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>e)return i;i=i._next}else for(i=t._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<e)return i;i=i._prev}},Ho=function(t,e,n,i){var s=t._repeat,o=We(e)||0,a=t._tTime/t._tDur;return a&&!i&&(t._time*=o/t._dur),t._dur=o,t._tDur=s?s<0?1e10:We(o*(s+1)+t._rDelay*s):o,a>0&&!i&&au(t,t._tTime=t._tDur*a),t.parent&&ou(t),n||Us(t.parent,t),t},m0=function(t){return t instanceof Tn?Us(t):Ho(t,t._dur)},ub={_start:0,endTime:hl,totalDuration:hl},Ii=function r(t,e,n){var i=t.labels,s=t._recent||ub,o=t.duration()>=Di?s.endTime(!1):t._dur,a,l,c;return fn(e)&&(isNaN(e)||e in i)?(l=e.charAt(0),c=e.substr(-1)==="%",a=e.indexOf("="),l==="<"||l===">"?(a>=0&&(e=e.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(e.substr(1))||0)*(c?(a<0?s:n).totalDuration()/100:1)):a<0?(e in i||(i[e]=o),i[e]):(l=parseFloat(e.charAt(a-1)+e.substr(a+1)),c&&n&&(l=l/100*(Nn(n)?n[0]:n).totalDuration()),a>1?r(t,e.substr(0,a-1),n)+l:o+l)):e==null?o:+e},al=function(t,e,n){var i=Ar(e[1]),s=(i?2:1)+(t<2?0:1),o=e[s],a,l;if(i&&(o.duration=e[1]),o.parent=n,t){for(a=o,l=n;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=ri(l.vars.inherit)&&l.parent;o.immediateRender=ri(a.immediateRender),t<2?o.runBackwards=1:o.startAt=e[s-1]}return new en(e[0],o,e[s+1])},ss=function(t,e){return t||t===0?e(t):e},fl=function(t,e,n){return n<t?t:n>e?e:n},wn=function(t,e){return!fn(t)||!(e=tb.exec(t))?"":e[1]},db=function(t,e,n){return ss(n,function(i){return fl(t,e,i)})},Mf=[].slice,L0=function(t,e){return t&&or(t)&&"length"in t&&(!e&&!t.length||t.length-1 in t&&or(t[0]))&&!t.nodeType&&t!==rr},fb=function(t,e,n){return n===void 0&&(n=[]),t.forEach(function(i){var s;return fn(i)&&!e||L0(i,1)?(s=n).push.apply(s,Li(i)):n.push(i)})||n},Li=function(t,e,n){return Ve&&!e&&Ve.selector?Ve.selector(t):fn(t)&&!n&&(_f||!Go())?Mf.call((e||Pf).querySelectorAll(t),0):Nn(t)?fb(t,n):L0(t)?Mf.call(t,0):t?[t]:[]},bf=function(t){return t=Li(t)[0]||cl("Invalid scope")||{},function(e){var n=t.current||t.nativeElement||t;return Li(e,n.querySelectorAll?n:n===t?cl("Invalid scope")||Pf.createElement("div"):t)}},N0=function(t){return t.sort(function(){return .5-Math.random()})},F0=function(t){if($e(t))return t;var e=or(t)?t:{each:t},n=Os(e.ease),i=e.from||0,s=parseFloat(e.base)||0,o={},a=i>0&&i<1,l=isNaN(i)||a,c=e.axis,u=i,h=i;return fn(i)?u=h={center:.5,edges:.5,end:1}[i]||0:!a&&l&&(u=i[0],h=i[1]),function(f,d,m){var g=(m||e).length,_=o[g],p,y,v,M,T,E,w,R,x;if(!_){if(x=e.grid==="auto"?0:(e.grid||[1,Di])[1],!x){for(w=-Di;w<(w=m[x++].getBoundingClientRect().left)&&x<g;);x<g&&x--}for(_=o[g]=[],p=l?Math.min(x,g)*u-.5:i%x,y=x===Di?0:l?g*h/x-.5:i/x|0,w=0,R=Di,E=0;E<g;E++)v=E%x-p,M=y-(E/x|0),_[E]=T=c?Math.abs(c==="y"?M:v):y0(v*v+M*M),T>w&&(w=T),T<R&&(R=T);i==="random"&&N0(_),_.max=w-R,_.min=R,_.v=g=(parseFloat(e.amount)||parseFloat(e.each)*(x>g?g-1:c?c==="y"?g/x:x:Math.max(x,g/x))||0)*(i==="edges"?-1:1),_.b=g<0?s-g:s,_.u=wn(e.amount||e.each)||0,n=n&&g<0?W0(n):n}return g=(_[f]-_.min)/_.max||0,We(_.b+(n?n(g):g)*_.v)+_.u}},Sf=function(t){var e=Math.pow(10,((t+"").split(".")[1]||"").length);return function(n){var i=We(Math.round(parseFloat(n)/t)*t*e);return(i-i%1)/e+(Ar(n)?0:wn(n))}},U0=function(t,e){var n=Nn(t),i,s;return!n&&or(t)&&(i=n=t.radius||Di,t.values?(t=Li(t.values),(s=!Ar(t[0]))&&(i*=i)):t=Sf(t.increment)),ss(e,n?$e(t)?function(o){return s=t(o),Math.abs(s-o)<=i?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),c=Di,u=0,h=t.length,f,d;h--;)s?(f=t[h].x-a,d=t[h].y-l,f=f*f+d*d):f=Math.abs(t[h]-a),f<c&&(c=f,u=h);return u=!i||c<=i?t[u]:o,s||u===o||Ar(o)?u:u+wn(o)}:Sf(t))},O0=function(t,e,n,i){return ss(Nn(t)?!e:n===!0?!!(n=0):!i,function(){return Nn(t)?t[~~(Math.random()*t.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((t-n/2+Math.random()*(e-t+n*.99))/n)*n*i)/i})},pb=function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return function(i){return e.reduce(function(s,o){return o(s)},i)}},mb=function(t,e){return function(n){return t(parseFloat(n))+(e||wn(n))}},gb=function(t,e,n){return k0(t,e,0,1,n)},B0=function(t,e,n){return ss(n,function(i){return t[~~e(i)]})},_b=function r(t,e,n){var i=e-t;return Nn(t)?B0(t,r(0,t.length),e):ss(n,function(s){return(i+(s-t)%i)%i+t})},xb=function r(t,e,n){var i=e-t,s=i*2;return Nn(t)?B0(t,r(0,t.length-1),e):ss(n,function(o){return o=(s+(o-t)%s)%s||0,t+(o>i?s-o:o)})},Wo=function(t){return t.replace(KM,function(e){var n=e.indexOf("[")+1,i=e.substring(n||7,n?e.indexOf("]"):e.length-1).split(jM);return O0(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},k0=function(t,e,n,i,s){var o=e-t,a=i-n;return ss(s,function(l){return n+((l-t)/o*a||0)})},vb=function r(t,e,n,i){var s=isNaN(t+e)?0:function(d){return(1-d)*t+d*e};if(!s){var o=fn(t),a={},l,c,u,h,f;if(n===!0&&(i=1)&&(n=null),o)t={p:t},e={p:e};else if(Nn(t)&&!Nn(e)){for(u=[],h=t.length,f=h-2,c=1;c<h;c++)u.push(r(t[c-1],t[c]));h--,s=function(m){m*=h;var g=Math.min(f,~~m);return u[g](m-g)},n=e}else i||(t=zo(Nn(t)?[]:{},t));if(!u){for(l in e)Bf.call(a,t,l,"get",e[l]);s=function(m){return Gf(m,a)||(o?t.p:t)}}}return ss(n,s)},g0=function(t,e,n){var i=t.labels,s=Di,o,a,l;for(o in i)a=i[o]-e,a<0==!!n&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},_i=function(t,e,n){var i=t.vars,s=i[e],o=Ve,a=t._ctx,l,c,u;if(s)return l=i[e+"Params"],c=i.callbackScope||t,n&&ns.length&&Qh(),a&&(Ve=a),u=l?s.apply(c,l):s.call(c),Ve=o,u},rl=function(t){return rs(t),t.scrollTrigger&&t.scrollTrigger.kill(!!En),t.progress()<1&&_i(t,"onInterrupt"),t},Bo,z0=[],V0=function(t){if(t)if(t=!t.name&&t.default||t,Af()||t.headless){var e=t.name,n=$e(t),i=e&&!n&&t.init?function(){this._props=[]}:t,s={init:hl,render:Gf,add:Bf,kill:Fb,modifier:Nb,rawVars:0},o={targetTest:0,get:0,getSetter:lu,aliases:{},register:0};if(Go(),t!==i){if(ni[e])return;vi(i,vi(tu(t,s),o)),zo(i.prototype,zo(s,tu(t,o))),ni[i.prop=e]=i,t.targetTest&&(Jh.push(i),If[e]=1),e=(e==="css"?"CSS":e.charAt(0).toUpperCase()+e.substr(1))+"Plugin"}T0(e,i),t.register&&t.register(Fn,i,Xn)}else z0.push(t)},Le=255,sl={aqua:[0,Le,Le],lime:[0,Le,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Le],navy:[0,0,128],white:[Le,Le,Le],olive:[128,128,0],yellow:[Le,Le,0],orange:[Le,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Le,0,0],pink:[Le,192,203],cyan:[0,Le,Le],transparent:[Le,Le,Le,0]},uf=function(t,e,n){return t+=t<0?1:t>1?-1:0,(t*6<1?e+(n-e)*t*6:t<.5?n:t*3<2?e+(n-e)*(2/3-t)*6:e)*Le+.5|0},H0=function(t,e,n){var i=t?Ar(t)?[t>>16,t>>8&Le,t&Le]:0:sl.black,s,o,a,l,c,u,h,f,d,m;if(!i){if(t.substr(-1)===","&&(t=t.substr(0,t.length-1)),sl[t])i=sl[t];else if(t.charAt(0)==="#"){if(t.length<6&&(s=t.charAt(1),o=t.charAt(2),a=t.charAt(3),t="#"+s+s+o+o+a+a+(t.length===5?t.charAt(4)+t.charAt(4):"")),t.length===9)return i=parseInt(t.substr(1,6),16),[i>>16,i>>8&Le,i&Le,parseInt(t.substr(7),16)/255];t=parseInt(t.substr(1),16),i=[t>>16,t>>8&Le,t&Le]}else if(t.substr(0,3)==="hsl"){if(i=m=t.match(u0),!e)l=+i[0]%360/360,c=+i[1]/100,u=+i[2]/100,o=u<=.5?u*(c+1):u+c-u*c,s=u*2-o,i.length>3&&(i[3]*=1),i[0]=uf(l+1/3,s,o),i[1]=uf(l,s,o),i[2]=uf(l-1/3,s,o);else if(~t.indexOf("="))return i=t.match(Cf),n&&i.length<4&&(i[3]=1),i}else i=t.match(u0)||sl.transparent;i=i.map(Number)}return e&&!m&&(s=i[0]/Le,o=i[1]/Le,a=i[2]/Le,h=Math.max(s,o,a),f=Math.min(s,o,a),u=(h+f)/2,h===f?l=c=0:(d=h-f,c=u>.5?d/(2-h-f):d/(h+f),l=h===s?(o-a)/d+(o<a?6:0):h===o?(a-s)/d+2:(s-o)/d+4,l*=60),i[0]=~~(l+.5),i[1]=~~(c*100+.5),i[2]=~~(u*100+.5)),n&&i.length<4&&(i[3]=1),i},G0=function(t){var e=[],n=[],i=-1;return t.split(wr).forEach(function(s){var o=s.match(ks)||[];e.push.apply(e,o),n.push(i+=o.length+1)}),e.c=n,e},_0=function(t,e,n){var i="",s=(t+i).match(wr),o=e?"hsla(":"rgba(",a=0,l,c,u,h;if(!s)return t;if(s=s.map(function(f){return(f=H0(f,e,1))&&o+(e?f[0]+","+f[1]+"%,"+f[2]+"%,"+f[3]:f.join(","))+")"}),n&&(u=G0(t),l=n.c,l.join(i)!==u.c.join(i)))for(c=t.replace(wr,"1").split(ks),h=c.length-1;a<h;a++)i+=c[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(u.length?u:s.length?s:n).shift());if(!c)for(c=t.split(wr),h=c.length-1;a<h;a++)i+=c[a]+s[a];return i+c[h]},wr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",t;for(t in sl)r+="|"+t+"\\b";return new RegExp(r+")","gi")})(),yb=/hsl[a]?\(/,Uf=function(t){var e=t.join(" "),n;if(wr.lastIndex=0,wr.test(e))return n=yb.test(e),t[1]=_0(t[1],n),t[0]=_0(t[0],n,G0(t[1])),!0},ul,ii=(function(){var r=Date.now,t=500,e=33,n=r(),i=n,s=1e3/240,o=s,a=[],l,c,u,h,f,d,m=function g(_){var p=r()-i,y=_===!0,v,M,T,E;if((p>t||p<0)&&(n+=p-e),i+=p,T=i-n,v=T-o,(v>0||y)&&(E=++h.frame,f=T-h.time*1e3,h.time=T=T/1e3,o+=v+(v>=s?4:s-v),M=1),y||(l=c(g)),M)for(d=0;d<a.length;d++)a[d](T,f,E,_)};return h={time:0,frame:0,tick:function(){m(!0)},deltaRatio:function(_){return f/(1e3/(_||60))},wake:function(){b0&&(!_f&&Af()&&(rr=_f=window,Pf=rr.document||{},xi.gsap=Fn,(rr.gsapVersions||(rr.gsapVersions=[])).push(Fn.version),S0(jh||rr.GreenSockGlobals||!rr.gsap&&rr||{}),z0.forEach(V0)),u=typeof requestAnimationFrame<"u"&&requestAnimationFrame,l&&h.sleep(),c=u||function(_){return setTimeout(_,o-h.time*1e3+1|0)},ul=1,m(2))},sleep:function(){(u?cancelAnimationFrame:clearTimeout)(l),ul=0,c=hl},lagSmoothing:function(_,p){t=_||1/0,e=Math.min(p||33,t)},fps:function(_){s=1e3/(_||240),o=h.time*1e3+s},add:function(_,p,y){var v=p?function(M,T,E,w){_(M,T,E,w),h.remove(v)}:_;return h.remove(_),a[y?"unshift":"push"](v),Go(),v},remove:function(_,p){~(p=a.indexOf(_))&&a.splice(p,1)&&d>=p&&d--},_listeners:a},h})(),Go=function(){return!ul&&ii.wake()},pe={},Mb=/^[\d.\-M][\d.\-,\s]/,bb=/["']/g,Sb=function(t){for(var e={},n=t.substr(1,t.length-3).split(":"),i=n[0],s=1,o=n.length,a,l,c;s<o;s++)l=n[s],a=s!==o-1?l.lastIndexOf(","):l.length,c=l.substr(0,a),e[i]=isNaN(c)?c.replace(bb,"").trim():+c,i=l.substr(a+1).trim();return e},Tb=function(t){var e=t.indexOf("(")+1,n=t.indexOf(")"),i=t.indexOf("(",e);return t.substring(e,~i&&i<n?t.indexOf(")",n+1):n)},Eb=function(t){var e=(t+"").split("("),n=pe[e[0]];return n&&e.length>1&&n.config?n.config.apply(null,~t.indexOf("{")?[Sb(e[1])]:Tb(t).split(",").map(A0)):pe._CE&&Mb.test(t)?pe._CE("",t):n},W0=function(t){return function(e){return 1-t(1-e)}},X0=function r(t,e){for(var n=t._first,i;n;)n instanceof Tn?r(n,e):n.vars.yoyoEase&&(!n._yoyo||!n._repeat)&&n._yoyo!==e&&(n.timeline?r(n.timeline,e):(i=n._ease,n._ease=n._yEase,n._yEase=i,n._yoyo=e)),n=n._next},Os=function(t,e){return t&&($e(t)?t:pe[t]||Eb(t))||e},Vs=function(t,e,n,i){n===void 0&&(n=function(l){return 1-e(1-l)}),i===void 0&&(i=function(l){return l<.5?e(l*2)/2:1-e((1-l)*2)/2});var s={easeIn:e,easeOut:n,easeInOut:i},o;return Wn(t,function(a){pe[a]=xi[a]=s,pe[o=a.toLowerCase()]=n;for(var l in s)pe[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=pe[a+"."+l]=s[l]}),s},q0=function(t){return function(e){return e<.5?(1-t(1-e*2))/2:.5+t((e-.5)*2)/2}},df=function r(t,e,n){var i=e>=1?e:1,s=(n||(t?.3:.45))/(e<1?e:1),o=s/gf*(Math.asin(1/i)||0),a=function(u){return u===1?1:i*Math.pow(2,-10*u)*JM((u-o)*s)+1},l=t==="out"?a:t==="in"?function(c){return 1-a(1-c)}:q0(a);return s=gf/s,l.config=function(c,u){return r(t,c,u)},l},ff=function r(t,e){e===void 0&&(e=1.70158);var n=function(o){return o?--o*o*((e+1)*o+e)+1:0},i=t==="out"?n:t==="in"?function(s){return 1-n(1-s)}:q0(n);return i.config=function(s){return r(t,s)},i};Wn("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,t){var e=t<5?t+1:t;Vs(r+",Power"+(e-1),t?function(n){return Math.pow(n,e)}:function(n){return n},function(n){return 1-Math.pow(1-n,e)},function(n){return n<.5?Math.pow(n*2,e)/2:1-Math.pow((1-n)*2,e)/2})});pe.Linear.easeNone=pe.none=pe.Linear.easeIn;Vs("Elastic",df("in"),df("out"),df());(function(r,t){var e=1/t,n=2*e,i=2.5*e,s=function(a){return a<e?r*a*a:a<n?r*Math.pow(a-1.5/t,2)+.75:a<i?r*(a-=2.25/t)*a+.9375:r*Math.pow(a-2.625/t,2)+.984375};Vs("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);Vs("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});Vs("Circ",function(r){return-(y0(1-r*r)-1)});Vs("Sine",function(r){return r===1?1:-$M(r*YM)+1});Vs("Back",ff("in"),ff("out"),ff());pe.SteppedEase=pe.steps=xi.SteppedEase={config:function(t,e){t===void 0&&(t=1);var n=1/t,i=t+(e?0:1),s=e?1:0,o=1-Ne;return function(a){return((i*fl(0,o,a)|0)+s)*n}}};ko.ease=pe["quad.out"];Wn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return Df+=r+","+r+"Params,"});var Of=function(t,e){this.id=ZM++,t._gsap=this,this.target=t,this.harness=e,this.get=e?e.get:Nf,this.set=e?e.getSetter:lu},dl=(function(){function r(e){this.vars=e,this._delay=+e.delay||0,(this._repeat=e.repeat===1/0?-2:e.repeat||0)&&(this._rDelay=e.repeatDelay||0,this._yoyo=!!e.yoyo||!!e.yoyoEase),this._ts=1,Ho(this,+e.duration,1,1),this.data=e.data,Ve&&(this._ctx=Ve,Ve.data.push(this)),ul||ii.wake()}var t=r.prototype;return t.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},t.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},t.totalDuration=function(n){return arguments.length?(this._dirty=0,Ho(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},t.totalTime=function(n,i){if(Go(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(au(this,n),!s._dp||s.parent||P0(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&sr(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Ne||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),w0(this,n,i)),this},t.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+p0(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},t.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},t.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+p0(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},t.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vo(this._tTime,s)+1:1},t.timeScale=function(n,i){if(!arguments.length)return this._rts===-Ne?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?eu(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Ne?0:this._rts,this.totalTime(fl(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),ou(this),ob(this)},t.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Go(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Ne&&(this._tTime-=Ne)))),this):this._ps},t.startTime=function(n){if(arguments.length){this._start=We(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&sr(i,this,this._start-this._delay),this}return this._start},t.endTime=function(n){return this._start+(ri(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},t.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?eu(i.rawTime(n),this):this._tTime:this._tTime},t.revert=function(n){n===void 0&&(n=nb);var i=En;return En=n,Ff(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),En=i,this},t.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},t.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,m0(this)):this._repeat===-2?1/0:this._repeat},t.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,m0(this),i?this.time(i):this}return this._rDelay},t.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},t.seek=function(n,i){return this.totalTime(Ii(this,n),ri(i))},t.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,ri(i)),this._dur||(this._zTime=-Ne),this},t.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},t.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},t.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},t.resume=function(){return this.paused(!1)},t.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Ne:0)),this):this._rts<0},t.invalidate=function(){return this._initted=this._act=0,this._zTime=-Ne,this},t.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Ne)},t.eventCallback=function(n,i,s){var o=this.vars;return arguments.length>1?(i?(o[n]=i,s&&(o[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete o[n],this):o[n]},t.then=function(n){var i=this,s=i._prom;return new Promise(function(o){var a=$e(n)?n:C0,l=function(){var u=i.then;i.then=null,s&&s(),$e(a)&&(a=a(i))&&(a.then||a===i)&&(i.then=u),o(a),i.then=u};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?l():i._prom=l})},t.kill=function(){rl(this)},r})();vi(dl.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Ne,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){v0(t,r);function t(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=ri(n.sortChildren),Xe&&sr(n.parent||Xe,Er(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&I0(Er(s),n.scrollTrigger),s}var e=t.prototype;return e.to=function(i,s,o){return al(0,arguments,this),this},e.from=function(i,s,o){return al(1,arguments,this),this},e.fromTo=function(i,s,o,a){return al(2,arguments,this),this},e.set=function(i,s,o){return s.duration=0,s.parent=this,ol(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new en(i,s,Ii(this,o),1),this},e.call=function(i,s,o){return sr(this,en.delayedCall(0,i,s),o)},e.staggerTo=function(i,s,o,a,l,c,u){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=c,o.onCompleteParams=u,o.parent=this,new en(i,o,Ii(this,l)),this},e.staggerFrom=function(i,s,o,a,l,c,u){return o.runBackwards=1,ol(o).immediateRender=ri(o.immediateRender),this.staggerTo(i,s,o,a,l,c,u)},e.staggerFromTo=function(i,s,o,a,l,c,u,h){return a.startAt=o,ol(a).immediateRender=ri(a.immediateRender),this.staggerTo(i,s,a,l,c,u,h)},e.render=function(i,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,c=this._dur,u=i<=0?0:We(i),h=this._zTime<0!=i<0&&(this._initted||!c),f,d,m,g,_,p,y,v,M,T,E,w;if(this!==Xe&&u>l&&i>=0&&(u=l),u!==this._tTime||o||h){if(a!==this._time&&c&&(u+=this._time-a,i+=this._time-a),f=u,M=this._start,v=this._ts,p=!v,h&&(c||(a=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(E=this._yoyo,_=c+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(_*100+i,s,o);if(f=We(u%_),u===l?(g=this._repeat,f=c):(T=We(u/_),g=~~T,g&&g===T&&(f=c,g--),f>c&&(f=c)),T=Vo(this._tTime,_),!a&&this._tTime&&T!==g&&this._tTime-T*_-this._dur<=0&&(T=g),E&&g&1&&(f=c-f,w=1),g!==T&&!this._lock){var R=E&&T&1,x=R===(E&&g&1);if(g<T&&(R=!R),a=R?0:u%c?c:u,this._lock=1,this.render(a||(w?0:We(g*_)),s,!c)._lock=0,this._tTime=u,!s&&this.parent&&_i(this,"onRepeat"),this.vars.repeatRefresh&&!w&&(this.invalidate()._lock=1,T=g),a&&a!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(c=this._dur,l=this._tDur,x&&(this._lock=2,a=R?c:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!w&&this.invalidate()),this._lock=0,!this._ts&&!p)return this;X0(this,w)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(y=hb(this,We(a),We(f)),y&&(u-=f-(f=y._start))),this._tTime=u,this._time=f,this._act=!v,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,a=0),!a&&u&&c&&!s&&!T&&(_i(this,"onStart"),this._tTime!==u))return this;if(f>=a&&i>=0)for(d=this._first;d;){if(m=d._next,(d._act||f>=d._start)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(f-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(f-d._start)*d._ts,s,o),f!==this._time||!this._ts&&!p){y=0,m&&(u+=this._zTime=-Ne);break}}d=m}else{d=this._last;for(var b=i<0?i:f;d;){if(m=d._prev,(d._act||b<=d._end)&&d._ts&&y!==d){if(d.parent!==this)return this.render(i,s,o);if(d.render(d._ts>0?(b-d._start)*d._ts:(d._dirty?d.totalDuration():d._tDur)+(b-d._start)*d._ts,s,o||En&&Ff(d)),f!==this._time||!this._ts&&!p){y=0,m&&(u+=this._zTime=b?-Ne:Ne);break}}d=m}}if(y&&!s&&(this.pause(),y.render(f>=a?0:-Ne)._zTime=f>=a?1:-1,this._ts))return this._start=M,ou(this),this.render(i,s,o);this._onUpdate&&!s&&_i(this,"onUpdate",!0),(u===l&&this._tTime>=this.totalDuration()||!u&&a)&&(M===this._start||Math.abs(v)!==Math.abs(this._ts))&&(this._lock||((i||!c)&&(u===l&&this._ts>0||!u&&this._ts<0)&&rs(this,1),!s&&!(i<0&&!a)&&(u||a||!l)&&(_i(this,u===l&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(u<l&&this.timeScale()>0)&&this._prom())))}return this},e.add=function(i,s){var o=this;if(Ar(s)||(s=Ii(this,s,i)),!(i instanceof dl)){if(Nn(i))return i.forEach(function(a){return o.add(a,s)}),this;if(fn(i))return this.addLabel(i,s);if($e(i))i=en.delayedCall(0,i);else return this}return this!==i?sr(this,i,s):this},e.getChildren=function(i,s,o,a){i===void 0&&(i=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Di);for(var l=[],c=this._first;c;)c._start>=a&&(c instanceof en?s&&l.push(c):(o&&l.push(c),i&&l.push.apply(l,c.getChildren(!0,s,o)))),c=c._next;return l},e.getById=function(i){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===i)return s[o]},e.remove=function(i){return fn(i)?this.removeLabel(i):$e(i)?this.killTweensOf(i):(i.parent===this&&su(this,i),i===this._recent&&(this._recent=this._last),Us(this))},e.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=We(ii.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},e.addLabel=function(i,s){return this.labels[i]=Ii(this,s),this},e.removeLabel=function(i){return delete this.labels[i],this},e.addPause=function(i,s,o){var a=en.delayedCall(0,s||hl,o);return a.data="isPause",this._hasPause=1,sr(this,a,Ii(this,i))},e.removePause=function(i){var s=this._first;for(i=Ii(this,i);s;)s._start===i&&s.data==="isPause"&&rs(s),s=s._next},e.killTweensOf=function(i,s,o){for(var a=this.getTweensOf(i,o),l=a.length;l--;)es!==a[l]&&a[l].kill(i,s);return this},e.getTweensOf=function(i,s){for(var o=[],a=Li(i),l=this._first,c=Ar(s),u;l;)l instanceof en?ib(l._targets,a)&&(c?(!es||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(u=l.getTweensOf(a,s)).length&&o.push.apply(o,u),l=l._next;return o},e.tweenTo=function(i,s){s=s||{};var o=this,a=Ii(o,i),l=s,c=l.startAt,u=l.onStart,h=l.onStartParams,f=l.immediateRender,d,m=en.to(o,vi({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale())||Ne,onStart:function(){if(o.pause(),!d){var _=s.duration||Math.abs((a-(c&&"time"in c?c.time:o._time))/o.timeScale());m._dur!==_&&Ho(m,_,0,1).render(m._time,!0,!0),d=1}u&&u.apply(m,h||[])}},s));return f?m.render(0):m},e.tweenFromTo=function(i,s,o){return this.tweenTo(s,vi({startAt:{time:Ii(this,i)}},o))},e.recent=function(){return this._recent},e.nextLabel=function(i){return i===void 0&&(i=this._time),g0(this,Ii(this,i))},e.previousLabel=function(i){return i===void 0&&(i=this._time),g0(this,Ii(this,i),1)},e.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Ne)},e.shiftChildren=function(i,s,o){o===void 0&&(o=0);var a=this._first,l=this.labels,c;for(i=We(i);a;)a._start>=o&&(a._start+=i,a._end+=i),a=a._next;if(s)for(c in l)l[c]>=o&&(l[c]+=i);return Us(this)},e.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},e.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Us(this)},e.totalDuration=function(i){var s=0,o=this,a=o._last,l=Di,c,u,h;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-i:i));if(o._dirty){for(h=o.parent;a;)c=a._prev,a._dirty&&a.totalDuration(),u=a._start,u>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,sr(o,a,u-a._delay,1)._lock=0):l=u,u<0&&a._ts&&(s-=u,(!h&&!o._dp||h&&h.smoothChildTiming)&&(o._start+=We(u/o._ts),o._time-=u,o._tTime-=u),o.shiftChildren(-u,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=c;Ho(o,o===Xe&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},t.updateRoot=function(i){if(Xe._ts&&(w0(Xe,eu(i,Xe)),E0=ii.frame),ii.frame>=d0){d0+=si.autoSleep||120;var s=Xe._first;if((!s||!s._ts)&&si.autoSleep&&ii._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||ii.sleep()}}},t})(dl);vi(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var wb=function(t,e,n,i,s,o,a){var l=new Xn(this._pt,t,e,0,1,Hf,null,s),c=0,u=0,h,f,d,m,g,_,p,y;for(l.b=n,l.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=Wo(i)),o&&(y=[n,i],o(y,t,e),n=y[0],i=y[1]),f=n.match(cf)||[];h=cf.exec(i);)m=h[0],g=i.substring(c,h.index),d?d=(d+1)%5:g.substr(-5)==="rgba("&&(d=1),m!==f[u++]&&(_=parseFloat(f[u-1])||0,l._pt={_next:l._pt,p:g||u===1?g:",",s:_,c:m.charAt(1)==="="?zs(_,m)-_:parseFloat(m)-_,m:d&&d<4?Math.round:0},c=cf.lastIndex);return l.c=c<i.length?i.substring(c,i.length):"",l.fp=a,(Rf.test(i)||p)&&(l.e=0),this._pt=l,l},Bf=function(t,e,n,i,s,o,a,l,c,u){$e(i)&&(i=i(s||0,t,o));var h=t[e],f=n!=="get"?n:$e(h)?c?t[e.indexOf("set")||!$e(t["get"+e.substr(3)])?e:"get"+e.substr(3)](c):t[e]():h,d=$e(h)?c?Ib:$0:Vf,m;if(fn(i)&&(~i.indexOf("random(")&&(i=Wo(i)),i.charAt(1)==="="&&(m=zs(f,i)+(wn(f)||0),(m||m===0)&&(i=m))),!u||f!==i||Tf)return!isNaN(f*i)&&i!==""?(m=new Xn(this._pt,t,e,+f||0,i-(f||0),typeof h=="boolean"?Lb:J0,0,d),c&&(m.fp=c),a&&m.modifier(a,this,t),this._pt=m):(!h&&!(e in t)&&ru(e,i),wb.call(this,t,e,f,i,d,l||si.stringFilter,c))},Ab=function(t,e,n,i,s){if($e(t)&&(t=ll(t,s,e,n,i)),!or(t)||t.style&&t.nodeType||Nn(t)||M0(t))return fn(t)?ll(t,s,e,n,i):t;var o={},a;for(a in t)o[a]=ll(t[a],s,e,n,i);return o},kf=function(t,e,n,i,s,o){var a,l,c,u;if(ni[t]&&(a=new ni[t]).init(s,a.rawVars?e[t]:Ab(e[t],i,s,o,n),n,i,o)!==!1&&(n._pt=l=new Xn(n._pt,s,t,0,1,a.render,a,0,a.priority),n!==Bo))for(c=n._ptLookup[n._targets.indexOf(s)],u=a._props.length;u--;)c[a._props[u]]=l;return a},es,Tf,zf=function r(t,e,n){var i=t.vars,s=i.ease,o=i.startAt,a=i.immediateRender,l=i.lazy,c=i.onUpdate,u=i.runBackwards,h=i.yoyoEase,f=i.keyframes,d=i.autoRevert,m=t._dur,g=t._startAt,_=t._targets,p=t.parent,y=p&&p.data==="nested"?p.vars.targets:_,v=t._overwrite==="auto"&&!wf,M=t.timeline,T,E,w,R,x,b,L,F,k,H,Y,W,G;if(M&&(!f||!s)&&(s="none"),t._ease=Os(s,ko.ease),t._yEase=h?W0(Os(h===!0?s:h,ko.ease)):0,h&&t._yoyo&&!t._repeat&&(h=t._yEase,t._yEase=t._ease,t._ease=h),t._from=!M&&!!i.runBackwards,!M||f&&!i.stagger){if(F=_[0]?is(_[0]).harness:0,W=F&&i[F.prop],T=tu(i,If),g&&(g._zTime<0&&g.progress(1),e<0&&u&&a&&!d?g.render(-1,!0):g.revert(u&&m?$h:eb),g._lazy=0),o){if(rs(t._startAt=en.set(_,vi({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!g&&ri(l),startAt:null,delay:0,onUpdate:c&&function(){return _i(t,"onUpdate")},stagger:0},o))),t._startAt._dp=0,t._startAt._sat=t,e<0&&(En||!a&&!d)&&t._startAt.revert($h),a&&m&&e<=0&&n<=0){e&&(t._zTime=e);return}}else if(u&&m&&!g){if(e&&(a=!1),w=vi({overwrite:!1,data:"isFromStart",lazy:a&&!g&&ri(l),immediateRender:a,stagger:0,parent:p},T),W&&(w[F.prop]=W),rs(t._startAt=en.set(_,w)),t._startAt._dp=0,t._startAt._sat=t,e<0&&(En?t._startAt.revert($h):t._startAt.render(-1,!0)),t._zTime=e,!a)r(t._startAt,Ne,Ne);else if(!e)return}for(t._pt=t._ptCache=0,l=m&&ri(l)||l&&!m,E=0;E<_.length;E++){if(x=_[E],L=x._gsap||Lf(_)[E]._gsap,t._ptLookup[E]=H={},xf[L.id]&&ns.length&&Qh(),Y=y===_?E:y.indexOf(x),F&&(k=new F).init(x,W||T,t,Y,y)!==!1&&(t._pt=R=new Xn(t._pt,x,k.name,0,1,k.render,k,0,k.priority),k._props.forEach(function(Z){H[Z]=R}),k.priority&&(b=1)),!F||W)for(w in T)ni[w]&&(k=kf(w,T,t,Y,x,y))?k.priority&&(b=1):H[w]=R=Bf.call(t,x,w,"get",T[w],Y,y,0,i.stringFilter);t._op&&t._op[E]&&t.kill(x,t._op[E]),v&&t._pt&&(es=t,Xe.killTweensOf(x,H,t.globalTime(e)),G=!t.parent,es=0),t._pt&&l&&(xf[L.id]=1)}b&&Wf(t),t._onInit&&t._onInit(t)}t._onUpdate=c,t._initted=(!t._op||t._pt)&&!G,f&&e<=0&&M.render(Di,!0,!0)},Cb=function(t,e,n,i,s,o,a,l){var c=(t._pt&&t._ptCache||(t._ptCache={}))[e],u,h,f,d;if(!c)for(c=t._ptCache[e]=[],f=t._ptLookup,d=t._targets.length;d--;){if(u=f[d][e],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==e&&u.fp!==e;)u=u._next;if(!u)return Tf=1,t.vars[e]="+=0",zf(t,a),Tf=0,l?cl(e+" not eligible for reset"):1;c.push(u)}for(d=c.length;d--;)h=c[d],u=h._pt||h,u.s=(i||i===0)&&!s?i:u.s+(i||0)+o*u.c,u.c=n-u.s,h.e&&(h.e=Je(n)+wn(h.e)),h.b&&(h.b=u.s+wn(h.b))},Rb=function(t,e){var n=t[0]?is(t[0]).harness:0,i=n&&n.aliases,s,o,a,l;if(!i)return e;s=zo({},e);for(o in i)if(o in s)for(l=i[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},Pb=function(t,e,n,i){var s=e.ease||i||"power1.inOut",o,a;if(Nn(e))a=n[t]||(n[t]=[]),e.forEach(function(l,c){return a.push({t:c/(e.length-1)*100,v:l,e:s})});else for(o in e)a=n[o]||(n[o]=[]),o==="ease"||a.push({t:parseFloat(t),v:e[o],e:s})},ll=function(t,e,n,i,s){return $e(t)?t.call(e,n,i,s):fn(t)&&~t.indexOf("random(")?Wo(t):t},Y0=Df+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",Z0={};Wn(Y0+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Z0[r]=1});var en=(function(r){v0(t,r);function t(n,i,s,o){var a;typeof i=="number"&&(s.duration=i,i=s,s=null),a=r.call(this,o?i:ol(i))||this;var l=a.vars,c=l.duration,u=l.delay,h=l.immediateRender,f=l.stagger,d=l.overwrite,m=l.keyframes,g=l.defaults,_=l.scrollTrigger,p=l.yoyoEase,y=i.parent||Xe,v=(Nn(n)||M0(n)?Ar(n[0]):"length"in i)?[n]:Li(n),M,T,E,w,R,x,b,L;if(a._targets=v.length?Lf(v):cl("GSAP target "+n+" not found. https://gsap.com",!si.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=d,m||f||Zh(c)||Zh(u)){if(i=a.vars,M=a.timeline=new Tn({data:"nested",defaults:g||{},targets:y&&y.data==="nested"?y.vars.targets:v}),M.kill(),M.parent=M._dp=Er(a),M._start=0,f||Zh(c)||Zh(u)){if(w=v.length,b=f&&F0(f),or(f))for(R in f)~Y0.indexOf(R)&&(L||(L={}),L[R]=f[R]);for(T=0;T<w;T++)E=tu(i,Z0),E.stagger=0,p&&(E.yoyoEase=p),L&&zo(E,L),x=v[T],E.duration=+ll(c,Er(a),T,x,v),E.delay=(+ll(u,Er(a),T,x,v)||0)-a._delay,!f&&w===1&&E.delay&&(a._delay=u=E.delay,a._start+=u,E.delay=0),M.to(x,E,b?b(T,x,v):0),M._ease=pe.none;M.duration()?c=u=0:a.timeline=0}else if(m){ol(vi(M.vars.defaults,{ease:"none"})),M._ease=Os(m.ease||i.ease||"none");var F=0,k,H,Y;if(Nn(m))m.forEach(function(W){return M.to(v,W,">")}),M.duration();else{E={};for(R in m)R==="ease"||R==="easeEach"||Pb(R,m[R],E,m.easeEach);for(R in E)for(k=E[R].sort(function(W,G){return W.t-G.t}),F=0,T=0;T<k.length;T++)H=k[T],Y={ease:H.e,duration:(H.t-(T?k[T-1].t:0))/100*c},Y[R]=H.v,M.to(v,Y,F),F+=Y.duration;M.duration()<c&&M.to({},{duration:c-M.duration()})}}c||a.duration(c=M.duration())}else a.timeline=0;return d===!0&&!wf&&(es=Er(a),Xe.killTweensOf(v),es=0),sr(y,Er(a),s),i.reversed&&a.reverse(),i.paused&&a.paused(!0),(h||!c&&!m&&a._start===We(y._time)&&ri(h)&&ab(Er(a))&&y.data!=="nested")&&(a._tTime=-Ne,a.render(Math.max(0,-u)||0)),_&&I0(Er(a),_),a}var e=t.prototype;return e.render=function(i,s,o){var a=this._time,l=this._tDur,c=this._dur,u=i<0,h=i>l-Ne&&!u?l:i<Ne?0:i,f,d,m,g,_,p,y,v,M;if(!c)cb(this,i,s,o);else if(h!==this._tTime||!i||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==u||this._lazy){if(f=h,v=this.timeline,this._repeat){if(g=c+this._rDelay,this._repeat<-1&&u)return this.totalTime(g*100+i,s,o);if(f=We(h%g),h===l?(m=this._repeat,f=c):(_=We(h/g),m=~~_,m&&m===_?(f=c,m--):f>c&&(f=c)),p=this._yoyo&&m&1,p&&(M=this._yEase,f=c-f),_=Vo(this._tTime,g),f===a&&!o&&this._initted&&m===_)return this._tTime=h,this;m!==_&&(v&&this._yEase&&X0(v,p),this.vars.repeatRefresh&&!p&&!this._lock&&f!==g&&this._initted&&(this._lock=o=1,this.render(We(g*m),!0).invalidate()._lock=0))}if(!this._initted){if(D0(this,u?i:f,o,s,h))return this._tTime=0,this;if(a!==this._time&&!(o&&this.vars.repeatRefresh&&m!==_))return this;if(c!==this._dur)return this.render(i,s,o)}if(this._tTime=h,this._time=f,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=y=(M||this._ease)(f/c),this._from&&(this.ratio=y=1-y),!a&&h&&!s&&!_&&(_i(this,"onStart"),this._tTime!==h))return this;for(d=this._pt;d;)d.r(y,d.d),d=d._next;v&&v.render(i<0?i:v._dur*v._ease(f/this._dur),s,o)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(u&&vf(this,i,s,o),_i(this,"onUpdate")),this._repeat&&m!==_&&this.vars.onRepeat&&!s&&this.parent&&_i(this,"onRepeat"),(h===this._tDur||!h)&&this._tTime===h&&(u&&!this._onUpdate&&vf(this,i,!0,!0),(i||!c)&&(h===this._tDur&&this._ts>0||!h&&this._ts<0)&&rs(this,1),!s&&!(u&&!a)&&(h||a||p)&&(_i(this,h===l?"onComplete":"onReverseComplete",!0),this._prom&&!(h<l&&this.timeScale()>0)&&this._prom()))}return this},e.targets=function(){return this._targets},e.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},e.resetTo=function(i,s,o,a,l){ul||ii.wake(),this._ts||this.play();var c=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||zf(this,c),u=this._ease(c/this._dur),Cb(this,i,s,o,a,u,c,l)?this.resetTo(i,s,o,a,1):(au(this,0),this.parent||R0(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},e.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?rl(this):this.scrollTrigger&&this.scrollTrigger.kill(!!En),this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,es&&es.vars.overwrite!==!0)._first||rl(this),this.parent&&o!==this.timeline.totalDuration()&&Ho(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=i?Li(i):a,c=this._ptLookup,u=this._pt,h,f,d,m,g,_,p;if((!s||s==="all")&&sb(a,l))return s==="all"&&(this._pt=0),rl(this);for(h=this._op=this._op||[],s!=="all"&&(fn(s)&&(g={},Wn(s,function(y){return g[y]=1}),s=g),s=Rb(a,s)),p=a.length;p--;)if(~l.indexOf(a[p])){f=c[p],s==="all"?(h[p]=s,m=f,d={}):(d=h[p]=h[p]||{},m=s);for(g in m)_=f&&f[g],_&&((!("kill"in _.d)||_.d.kill(g)===!0)&&su(this,_,"_pt"),delete f[g]),d!=="all"&&(d[g]=1)}return this._initted&&!this._pt&&u&&rl(this),this},t.to=function(i,s){return new t(i,s,arguments[2])},t.from=function(i,s){return al(1,arguments)},t.delayedCall=function(i,s,o,a){return new t(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},t.fromTo=function(i,s,o){return al(2,arguments)},t.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new t(i,s)},t.killTweensOf=function(i,s,o){return Xe.killTweensOf(i,s,o)},t})(dl);vi(en.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});Wn("staggerTo,staggerFrom,staggerFromTo",function(r){en[r]=function(){var t=new Tn,e=Mf.call(arguments,0);return e.splice(r==="staggerFromTo"?5:4,0,0),t[r].apply(t,e)}});var Vf=function(t,e,n){return t[e]=n},$0=function(t,e,n){return t[e](n)},Ib=function(t,e,n,i){return t[e](i.fp,n)},Db=function(t,e,n){return t.setAttribute(e,n)},lu=function(t,e){return $e(t[e])?$0:iu(t[e])&&t.setAttribute?Db:Vf},J0=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e6)/1e6,e)},Lb=function(t,e){return e.set(e.t,e.p,!!(e.s+e.c*t),e)},Hf=function(t,e){var n=e._pt,i="";if(!t&&e.b)i=e.b;else if(t===1&&e.e)i=e.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*t):Math.round((n.s+n.c*t)*1e4)/1e4)+i,n=n._next;i+=e.c}e.set(e.t,e.p,i,e)},Gf=function(t,e){for(var n=e._pt;n;)n.r(t,n.d),n=n._next},Nb=function(t,e,n,i){for(var s=this._pt,o;s;)o=s._next,s.p===i&&s.modifier(t,e,n),s=o},Fb=function(t){for(var e=this._pt,n,i;e;)i=e._next,e.p===t&&!e.op||e.op===t?su(this,e,"_pt"):e.dep||(n=1),e=i;return!n},Ub=function(t,e,n,i){i.mSet(t,e,i.m.call(i.tween,n,i.mt),i)},Wf=function(t){for(var e=t._pt,n,i,s,o;e;){for(n=e._next,i=s;i&&i.pr>e.pr;)i=i._next;(e._prev=i?i._prev:o)?e._prev._next=e:s=e,(e._next=i)?i._prev=e:o=e,e=n}t._pt=s},Xn=(function(){function r(e,n,i,s,o,a,l,c,u){this.t=n,this.s=s,this.c=o,this.p=i,this.r=a||J0,this.d=l||this,this.set=c||Vf,this.pr=u||0,this._next=e,e&&(e._prev=this)}var t=r.prototype;return t.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Ub,this.m=n,this.mt=s,this.tween=i},r})();Wn(Df+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(r){return If[r]=1});xi.TweenMax=xi.TweenLite=en;xi.TimelineLite=xi.TimelineMax=Tn;Xe=new Tn({sortChildren:!1,defaults:ko,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});si.stringFilter=Uf;var Bs=[],Kh={},Ob=[],x0=0,Bb=0,pf=function(t){return(Kh[t]||Ob).map(function(e){return e()})},Ef=function(){var t=Date.now(),e=[];t-x0>2&&(pf("matchMediaInit"),Bs.forEach(function(n){var i=n.queries,s=n.conditions,o,a,l,c;for(a in i)o=rr.matchMedia(i[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,c=1);c&&(n.revert(),l&&e.push(n))}),pf("matchMediaRevert"),e.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),x0=t,pf("matchMedia"))},K0=(function(){function r(e,n){this.selector=n&&bf(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Bb++,e&&this.add(e)}var t=r.prototype;return t.add=function(n,i,s){$e(n)&&(s=i,i=n,n=$e);var o=this,a=function(){var c=Ve,u=o.selector,h;return c&&c!==o&&c.data.push(o),s&&(o.selector=bf(s)),Ve=o,h=i.apply(o,arguments),$e(h)&&o._r.push(h),Ve=c,o.selector=u,o.isReverted=!1,h};return o.last=a,n===$e?a(o,function(l){return o.add(null,l)}):n?o[n]=a:a},t.ignore=function(n){var i=Ve;Ve=null,n(this),Ve=i},t.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof en&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},t.clear=function(){this._r.length=this.data.length=0},t.kill=function(n,i){var s=this;if(n?(function(){for(var a=s.getTweens(),l=s.data.length,c;l--;)c=s.data[l],c.data==="isFlip"&&(c.revert(),c.getChildren(!0,!0,!1).forEach(function(u){return a.splice(a.indexOf(u),1)}));for(a.map(function(u){return{g:u._dur||u._delay||u._sat&&!u._sat.vars.immediateRender?u.globalTime(0):-1/0,t:u}}).sort(function(u,h){return h.g-u.g||-1/0}).forEach(function(u){return u.t.revert(n)}),l=s.data.length;l--;)c=s.data[l],c instanceof Tn?c.data!=="nested"&&(c.scrollTrigger&&c.scrollTrigger.revert(),c.kill()):!(c instanceof en)&&c.revert&&c.revert(n);s._r.forEach(function(u){return u(n,s)}),s.isReverted=!0})():this.data.forEach(function(a){return a.kill&&a.kill()}),this.clear(),i)for(var o=Bs.length;o--;)Bs[o].id===this.id&&Bs.splice(o,1)},t.revert=function(n){this.kill(n||{})},r})(),kb=(function(){function r(e){this.contexts=[],this.scope=e,Ve&&Ve.data.push(this)}var t=r.prototype;return t.add=function(n,i,s){or(n)||(n={matches:n});var o=new K0(0,s||this.scope),a=o.conditions={},l,c,u;Ve&&!o.selector&&(o.selector=Ve.selector),this.contexts.push(o),i=o.add("onMatch",i),o.queries=n;for(c in n)c==="all"?u=1:(l=rr.matchMedia(n[c]),l&&(Bs.indexOf(o)<0&&Bs.push(o),(a[c]=l.matches)&&(u=1),l.addListener?l.addListener(Ef):l.addEventListener("change",Ef)));return u&&i(o,function(h){return o.add(null,h)}),this},t.revert=function(n){this.kill(n||{})},t.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),nu={registerPlugin:function(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];e.forEach(function(i){return V0(i)})},timeline:function(t){return new Tn(t)},getTweensOf:function(t,e){return Xe.getTweensOf(t,e)},getProperty:function(t,e,n,i){fn(t)&&(t=Li(t)[0]);var s=is(t||{}).get,o=n?C0:A0;return n==="native"&&(n=""),t&&(e?o((ni[e]&&ni[e].get||s)(t,e,n,i)):function(a,l,c){return o((ni[a]&&ni[a].get||s)(t,a,l,c))})},quickSetter:function(t,e,n){if(t=Li(t),t.length>1){var i=t.map(function(u){return Fn.quickSetter(u,e,n)}),s=i.length;return function(u){for(var h=s;h--;)i[h](u)}}t=t[0]||{};var o=ni[e],a=is(t),l=a.harness&&(a.harness.aliases||{})[e]||e,c=o?function(u){var h=new o;Bo._pt=0,h.init(t,n?u+n:u,Bo,0,[t]),h.render(1,h),Bo._pt&&Gf(1,Bo)}:a.set(t,l);return o?c:function(u){return c(t,l,n?u+n:u,a,1)}},quickTo:function(t,e,n){var i,s=Fn.to(t,vi((i={},i[e]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),o=function(l,c,u){return s.resetTo(e,l,c,u)};return o.tween=s,o},isTweening:function(t){return Xe.getTweensOf(t,!0).length>0},defaults:function(t){return t&&t.ease&&(t.ease=Os(t.ease,ko.ease)),f0(ko,t||{})},config:function(t){return f0(si,t||{})},registerEffect:function(t){var e=t.name,n=t.effect,i=t.plugins,s=t.defaults,o=t.extendTimeline;(i||"").split(",").forEach(function(a){return a&&!ni[a]&&!xi[a]&&cl(e+" effect requires "+a+" plugin.")}),hf[e]=function(a,l,c){return n(Li(a),vi(l||{},s),c)},o&&(Tn.prototype[e]=function(a,l,c){return this.add(hf[e](a,or(l)?l:(c=l)&&{},this),c)})},registerEase:function(t,e){pe[t]=Os(e)},parseEase:function(t,e){return arguments.length?Os(t,e):pe},getById:function(t){return Xe.getById(t)},exportRoot:function(t,e){t===void 0&&(t={});var n=new Tn(t),i,s;for(n.smoothChildTiming=ri(t.smoothChildTiming),Xe.remove(n),n._dp=0,n._time=n._tTime=Xe._time,i=Xe._first;i;)s=i._next,(e||!(!i._dur&&i instanceof en&&i.vars.onComplete===i._targets[0]))&&sr(n,i,i._start-i._delay),i=s;return sr(Xe,n,0),n},context:function(t,e){return t?new K0(t,e):Ve},matchMedia:function(t){return new kb(t)},matchMediaRefresh:function(){return Bs.forEach(function(t){var e=t.conditions,n,i;for(i in e)e[i]&&(e[i]=!1,n=1);n&&t.revert()})||Ef()},addEventListener:function(t,e){var n=Kh[t]||(Kh[t]=[]);~n.indexOf(e)||n.push(e)},removeEventListener:function(t,e){var n=Kh[t],i=n&&n.indexOf(e);i>=0&&n.splice(i,1)},utils:{wrap:_b,wrapYoyo:xb,distribute:F0,random:O0,snap:U0,normalize:gb,getUnit:wn,clamp:db,splitColor:H0,toArray:Li,selector:bf,mapRange:k0,pipe:pb,unitize:mb,interpolate:vb,shuffle:N0},install:S0,effects:hf,ticker:ii,updateRoot:Tn.updateRoot,plugins:ni,globalTimeline:Xe,core:{PropTween:Xn,globals:T0,Tween:en,Timeline:Tn,Animation:dl,getCache:is,_removeLinkedListItem:su,reverting:function(){return En},context:function(t){return t&&Ve&&(Ve.data.push(t),t._ctx=Ve),Ve},suppressOverwrites:function(t){return wf=t}}};Wn("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return nu[r]=en[r]});ii.add(Tn.updateRoot);Bo=nu.to({},{duration:0});var zb=function(t,e){for(var n=t._pt;n&&n.p!==e&&n.op!==e&&n.fp!==e;)n=n._next;return n},Vb=function(t,e){var n=t._targets,i,s,o;for(i in e)for(s=n.length;s--;)o=t._ptLookup[s][i],o&&(o=o.d)&&(o._pt&&(o=zb(o,i)),o&&o.modifier&&o.modifier(e[i],t,n[s],i))},mf=function(t,e){return{name:t,headless:1,rawVars:1,init:function(i,s,o){o._onInit=function(a){var l,c;if(fn(s)&&(l={},Wn(s,function(u){return l[u]=1}),s=l),e){l={};for(c in s)l[c]=e(s[c]);s=l}Vb(a,s)}}}},Fn=nu.registerPlugin({name:"attr",init:function(t,e,n,i,s){var o,a,l;this.tween=n;for(o in e)l=t.getAttribute(o)||"",a=this.add(t,"setAttribute",(l||0)+"",e[o],i,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(t,e){for(var n=e._pt;n;)En?n.set(n.t,n.p,n.b,n):n.r(t,n.d),n=n._next}},{name:"endArray",headless:1,init:function(t,e){for(var n=e.length;n--;)this.add(t,n,t[n]||0,e[n],0,0,0,0,0,1)}},mf("roundProps",Sf),mf("modifiers"),mf("snap",U0))||nu;en.version=Tn.version=Fn.version="3.14.2";b0=1;Af()&&Go();var Hb=pe.Power0,Gb=pe.Power1,Wb=pe.Power2,Xb=pe.Power3,qb=pe.Power4,Yb=pe.Linear,Zb=pe.Quad,$b=pe.Cubic,Jb=pe.Quart,Kb=pe.Quint,jb=pe.Strong,Qb=pe.Elastic,tS=pe.Back,eS=pe.SteppedEase,nS=pe.Bounce,iS=pe.Sine,rS=pe.Expo,sS=pe.Circ;var j0,os,qo,Jf,Xs,oS,Q0,Kf,aS=function(){return typeof window<"u"},Rr={},Ws=180/Math.PI,Yo=Math.PI/180,Xo=Math.atan2,tg=1e8,jf=/([A-Z])/g,lS=/(left|right|width|margin|padding|x)/i,cS=/[\s,\(]\S/,ar={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},qf=function(t,e){return e.set(e.t,e.p,Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},hS=function(t,e){return e.set(e.t,e.p,t===1?e.e:Math.round((e.s+e.c*t)*1e4)/1e4+e.u,e)},uS=function(t,e){return e.set(e.t,e.p,t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},dS=function(t,e){return e.set(e.t,e.p,t===1?e.e:t?Math.round((e.s+e.c*t)*1e4)/1e4+e.u:e.b,e)},fS=function(t,e){var n=e.s+e.c*t;e.set(e.t,e.p,~~(n+(n<0?-.5:.5))+e.u,e)},lg=function(t,e){return e.set(e.t,e.p,t?e.e:e.b,e)},cg=function(t,e){return e.set(e.t,e.p,t!==1?e.b:e.e,e)},pS=function(t,e,n){return t.style[e]=n},mS=function(t,e,n){return t.style.setProperty(e,n)},gS=function(t,e,n){return t._gsap[e]=n},_S=function(t,e,n){return t._gsap.scaleX=t._gsap.scaleY=n},xS=function(t,e,n,i,s){var o=t._gsap;o.scaleX=o.scaleY=n,o.renderTransform(s,o)},vS=function(t,e,n,i,s){var o=t._gsap;o[e]=n,o.renderTransform(s,o)},qe="transform",oi=qe+"Origin",yS=function r(t,e){var n=this,i=this.target,s=i.style,o=i._gsap;if(t in Rr&&s){if(this.tfm=this.tfm||{},t!=="transform")t=ar[t]||t,~t.indexOf(",")?t.split(",").forEach(function(a){return n.tfm[a]=Cr(i,a)}):this.tfm[t]=o.x?o[t]:Cr(i,t),t===oi&&(this.tfm.zOrigin=o.zOrigin);else return ar.transform.split(",").forEach(function(a){return r.call(n,a,e)});if(this.props.indexOf(qe)>=0)return;o.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(oi,e,"")),t=qe}(s||e)&&this.props.push(t,e,s[t])},hg=function(t){t.translate&&(t.removeProperty("translate"),t.removeProperty("scale"),t.removeProperty("rotate"))},MS=function(){var t=this.props,e=this.target,n=e.style,i=e._gsap,s,o;for(s=0;s<t.length;s+=3)t[s+1]?t[s+1]===2?e[t[s]](t[s+2]):e[t[s]]=t[s+2]:t[s+2]?n[t[s]]=t[s+2]:n.removeProperty(t[s].substr(0,2)==="--"?t[s]:t[s].replace(jf,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)i[o]=this.tfm[o];i.svg&&(i.renderTransform(),e.setAttribute("data-svg-origin",this.svgo||"")),s=Kf(),(!s||!s.isStart)&&!n[qe]&&(hg(n),i.zOrigin&&n[oi]&&(n[oi]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},ug=function(t,e){var n={target:t,props:[],revert:MS,save:yS};return t._gsap||Fn.core.getCache(t),e&&t.style&&t.nodeType&&e.split(",").forEach(function(i){return n.save(i)}),n},dg,Yf=function(t,e){var n=os.createElementNS?os.createElementNS((e||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),t):os.createElement(t);return n&&n.style?n:os.createElement(t)},yi=function r(t,e,n){var i=getComputedStyle(t);return i[e]||i.getPropertyValue(e.replace(jf,"-$1").toLowerCase())||i.getPropertyValue(e)||!n&&r(t,Zo(e)||e,1)||""},eg="O,Moz,ms,Ms,Webkit".split(","),Zo=function(t,e,n){var i=e||Xs,s=i.style,o=5;if(t in s&&!n)return t;for(t=t.charAt(0).toUpperCase()+t.substr(1);o--&&!(eg[o]+t in s););return o<0?null:(o===3?"ms":o>=0?eg[o]:"")+t},Zf=function(){aS()&&window.document&&(j0=window,os=j0.document,qo=os.documentElement,Xs=Yf("div")||{style:{}},oS=Yf("div"),qe=Zo(qe),oi=qe+"Origin",Xs.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",dg=!!Zo("perspective"),Kf=Fn.core.reverting,Jf=1)},ng=function(t){var e=t.ownerSVGElement,n=Yf("svg",e&&e.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=t.cloneNode(!0),s;i.style.display="block",n.appendChild(i),qo.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),qo.removeChild(n),s},ig=function(t,e){for(var n=e.length;n--;)if(t.hasAttribute(e[n]))return t.getAttribute(e[n])},fg=function(t){var e,n;try{e=t.getBBox()}catch{e=ng(t),n=1}return e&&(e.width||e.height)||n||(e=ng(t)),e&&!e.width&&!e.x&&!e.y?{x:+ig(t,["x","cx","x1"])||0,y:+ig(t,["y","cy","y1"])||0,width:0,height:0}:e},pg=function(t){return!!(t.getCTM&&(!t.parentNode||t.ownerSVGElement)&&fg(t))},ls=function(t,e){if(e){var n=t.style,i;e in Rr&&e!==oi&&(e=qe),n.removeProperty?(i=e.substr(0,2),(i==="ms"||e.substr(0,6)==="webkit")&&(e="-"+e),n.removeProperty(i==="--"?e:e.replace(jf,"-$1").toLowerCase())):n.removeAttribute(e)}},as=function(t,e,n,i,s,o){var a=new Xn(t._pt,e,n,0,1,o?cg:lg);return t._pt=a,a.b=i,a.e=s,t._props.push(n),a},rg={deg:1,rad:1,turn:1},bS={grid:1,flex:1},cs=function r(t,e,n,i){var s=parseFloat(n)||0,o=(n+"").trim().substr((s+"").length)||"px",a=Xs.style,l=lS.test(e),c=t.tagName.toLowerCase()==="svg",u=(c?"client":"offset")+(l?"Width":"Height"),h=100,f=i==="px",d=i==="%",m,g,_,p;if(i===o||!s||rg[i]||rg[o])return s;if(o!=="px"&&!f&&(s=r(t,e,n,"px")),p=t.getCTM&&pg(t),(d||o==="%")&&(Rr[e]||~e.indexOf("adius")))return m=p?t.getBBox()[l?"width":"height"]:t[u],Je(d?s/m*h:s/100*m);if(a[l?"width":"height"]=h+(f?o:i),g=i!=="rem"&&~e.indexOf("adius")||i==="em"&&t.appendChild&&!c?t:t.parentNode,p&&(g=(t.ownerSVGElement||{}).parentNode),(!g||g===os||!g.appendChild)&&(g=os.body),_=g._gsap,_&&d&&_.width&&l&&_.time===ii.time&&!_.uncache)return Je(s/_.width*h);if(d&&(e==="height"||e==="width")){var y=t.style[e];t.style[e]=h+i,m=t[u],y?t.style[e]=y:ls(t,e)}else(d||o==="%")&&!bS[yi(g,"display")]&&(a.position=yi(t,"position")),g===t&&(a.position="static"),g.appendChild(Xs),m=Xs[u],g.removeChild(Xs),a.position="absolute";return l&&d&&(_=is(g),_.time=ii.time,_.width=g[u]),Je(f?m*s/h:m&&s?h/m*s:0)},Cr=function(t,e,n,i){var s;return Jf||Zf(),e in ar&&e!=="transform"&&(e=ar[e],~e.indexOf(",")&&(e=e.split(",")[0])),Rr[e]&&e!=="transform"?(s=gl(t,i),s=e!=="transformOrigin"?s[e]:s.svg?s.origin:hu(yi(t,oi))+" "+s.zOrigin+"px"):(s=t.style[e],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=cu[e]&&cu[e](t,e,n)||yi(t,e)||Nf(t,e)||(e==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?cs(t,e,s,n)+n:s},SS=function(t,e,n,i){if(!n||n==="none"){var s=Zo(e,t,1),o=s&&yi(t,s,1);o&&o!==n?(e=s,n=o):e==="borderColor"&&(n=yi(t,"borderTopColor"))}var a=new Xn(this._pt,t.style,e,0,1,Hf),l=0,c=0,u,h,f,d,m,g,_,p,y,v,M,T;if(a.b=n,a.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=yi(t,i.substring(4,i.indexOf(")")))),i==="auto"&&(g=t.style[e],t.style[e]=i,i=yi(t,e)||i,g?t.style[e]=g:ls(t,e)),u=[n,i],Uf(u),n=u[0],i=u[1],f=n.match(ks)||[],T=i.match(ks)||[],T.length){for(;h=ks.exec(i);)_=h[0],y=i.substring(l,h.index),m?m=(m+1)%5:(y.substr(-5)==="rgba("||y.substr(-5)==="hsla(")&&(m=1),_!==(g=f[c++]||"")&&(d=parseFloat(g)||0,M=g.substr((d+"").length),_.charAt(1)==="="&&(_=zs(d,_)+M),p=parseFloat(_),v=_.substr((p+"").length),l=ks.lastIndex-v.length,v||(v=v||si.units[e]||M,l===i.length&&(i+=v,a.e+=v)),M!==v&&(d=cs(t,e,g,v)||0),a._pt={_next:a._pt,p:y||c===1?y:",",s:d,c:p-d,m:m&&m<4||e==="zIndex"?Math.round:0});a.c=l<i.length?i.substring(l,i.length):""}else a.r=e==="display"&&i==="none"?cg:lg;return Rf.test(i)&&(a.e=0),this._pt=a,a},sg={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},TS=function(t){var e=t.split(" "),n=e[0],i=e[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(t=n,n=i,i=t),e[0]=sg[n]||n,e[1]=sg[i]||i,e.join(" ")},ES=function(t,e){if(e.tween&&e.tween._time===e.tween._dur){var n=e.t,i=n.style,s=e.u,o=n._gsap,a,l,c;if(s==="all"||s===!0)i.cssText="",l=1;else for(s=s.split(","),c=s.length;--c>-1;)a=s[c],Rr[a]&&(l=1,a=a==="transformOrigin"?oi:qe),ls(n,a);l&&(ls(n,qe),o&&(o.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",gl(n,1),o.uncache=1,hg(i)))}},cu={clearProps:function(t,e,n,i,s){if(s.data!=="isFromStart"){var o=t._pt=new Xn(t._pt,e,n,0,0,ES);return o.u=i,o.pr=-10,o.tween=s,t._props.push(n),1}}},ml=[1,0,0,1,0,0],mg={},gg=function(t){return t==="matrix(1, 0, 0, 1, 0, 0)"||t==="none"||!t},og=function(t){var e=yi(t,qe);return gg(e)?ml:e.substr(7).match(Cf).map(Je)},Qf=function(t,e){var n=t._gsap||is(t),i=t.style,s=og(t),o,a,l,c;return n.svg&&t.getAttribute("transform")?(l=t.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?ml:s):(s===ml&&!t.offsetParent&&t!==qo&&!n.svg&&(l=i.display,i.display="block",o=t.parentNode,(!o||!t.offsetParent&&!t.getBoundingClientRect().width)&&(c=1,a=t.nextElementSibling,qo.appendChild(t)),s=og(t),l?i.display=l:ls(t,"display"),c&&(a?o.insertBefore(t,a):o?o.appendChild(t):qo.removeChild(t))),e&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},$f=function(t,e,n,i,s,o){var a=t._gsap,l=s||Qf(t,!0),c=a.xOrigin||0,u=a.yOrigin||0,h=a.xOffset||0,f=a.yOffset||0,d=l[0],m=l[1],g=l[2],_=l[3],p=l[4],y=l[5],v=e.split(" "),M=parseFloat(v[0])||0,T=parseFloat(v[1])||0,E,w,R,x;n?l!==ml&&(w=d*_-m*g)&&(R=M*(_/w)+T*(-g/w)+(g*y-_*p)/w,x=M*(-m/w)+T*(d/w)-(d*y-m*p)/w,M=R,T=x):(E=fg(t),M=E.x+(~v[0].indexOf("%")?M/100*E.width:M),T=E.y+(~(v[1]||v[0]).indexOf("%")?T/100*E.height:T)),i||i!==!1&&a.smooth?(p=M-c,y=T-u,a.xOffset=h+(p*d+y*g)-p,a.yOffset=f+(p*m+y*_)-y):a.xOffset=a.yOffset=0,a.xOrigin=M,a.yOrigin=T,a.smooth=!!i,a.origin=e,a.originIsAbsolute=!!n,t.style[oi]="0px 0px",o&&(as(o,a,"xOrigin",c,M),as(o,a,"yOrigin",u,T),as(o,a,"xOffset",h,a.xOffset),as(o,a,"yOffset",f,a.yOffset)),t.setAttribute("data-svg-origin",M+" "+T)},gl=function(t,e){var n=t._gsap||new Of(t);if("x"in n&&!e&&!n.uncache)return n;var i=t.style,s=n.scaleX<0,o="px",a="deg",l=getComputedStyle(t),c=yi(t,oi)||"0",u,h,f,d,m,g,_,p,y,v,M,T,E,w,R,x,b,L,F,k,H,Y,W,G,Z,it,N,nt,Lt,Ot,Bt,Zt;return u=h=f=g=_=p=y=v=M=0,d=m=1,n.svg=!!(t.getCTM&&pg(t)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(i[qe]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[qe]!=="none"?l[qe]:"")),i.scale=i.rotate=i.translate="none"),w=Qf(t,n.svg),n.svg&&(n.uncache?(Z=t.getBBox(),c=n.xOrigin-Z.x+"px "+(n.yOrigin-Z.y)+"px",G=""):G=!e&&t.getAttribute("data-svg-origin"),$f(t,G||c,!!G||n.originIsAbsolute,n.smooth!==!1,w)),T=n.xOrigin||0,E=n.yOrigin||0,w!==ml&&(L=w[0],F=w[1],k=w[2],H=w[3],u=Y=w[4],h=W=w[5],w.length===6?(d=Math.sqrt(L*L+F*F),m=Math.sqrt(H*H+k*k),g=L||F?Xo(F,L)*Ws:0,y=k||H?Xo(k,H)*Ws+g:0,y&&(m*=Math.abs(Math.cos(y*Yo))),n.svg&&(u-=T-(T*L+E*k),h-=E-(T*F+E*H))):(Zt=w[6],Ot=w[7],N=w[8],nt=w[9],Lt=w[10],Bt=w[11],u=w[12],h=w[13],f=w[14],R=Xo(Zt,Lt),_=R*Ws,R&&(x=Math.cos(-R),b=Math.sin(-R),G=Y*x+N*b,Z=W*x+nt*b,it=Zt*x+Lt*b,N=Y*-b+N*x,nt=W*-b+nt*x,Lt=Zt*-b+Lt*x,Bt=Ot*-b+Bt*x,Y=G,W=Z,Zt=it),R=Xo(-k,Lt),p=R*Ws,R&&(x=Math.cos(-R),b=Math.sin(-R),G=L*x-N*b,Z=F*x-nt*b,it=k*x-Lt*b,Bt=H*b+Bt*x,L=G,F=Z,k=it),R=Xo(F,L),g=R*Ws,R&&(x=Math.cos(R),b=Math.sin(R),G=L*x+F*b,Z=Y*x+W*b,F=F*x-L*b,W=W*x-Y*b,L=G,Y=Z),_&&Math.abs(_)+Math.abs(g)>359.9&&(_=g=0,p=180-p),d=Je(Math.sqrt(L*L+F*F+k*k)),m=Je(Math.sqrt(W*W+Zt*Zt)),R=Xo(Y,W),y=Math.abs(R)>2e-4?R*Ws:0,M=Bt?1/(Bt<0?-Bt:Bt):0),n.svg&&(G=t.getAttribute("transform"),n.forceCSS=t.setAttribute("transform","")||!gg(yi(t,qe)),G&&t.setAttribute("transform",G))),Math.abs(y)>90&&Math.abs(y)<270&&(s?(d*=-1,y+=g<=0?180:-180,g+=g<=0?180:-180):(m*=-1,y+=y<=0?180:-180)),e=e||n.uncache,n.x=u-((n.xPercent=u&&(!e&&n.xPercent||(Math.round(t.offsetWidth/2)===Math.round(-u)?-50:0)))?t.offsetWidth*n.xPercent/100:0)+o,n.y=h-((n.yPercent=h&&(!e&&n.yPercent||(Math.round(t.offsetHeight/2)===Math.round(-h)?-50:0)))?t.offsetHeight*n.yPercent/100:0)+o,n.z=f+o,n.scaleX=Je(d),n.scaleY=Je(m),n.rotation=Je(g)+a,n.rotationX=Je(_)+a,n.rotationY=Je(p)+a,n.skewX=y+a,n.skewY=v+a,n.transformPerspective=M+o,(n.zOrigin=parseFloat(c.split(" ")[2])||!e&&n.zOrigin||0)&&(i[oi]=hu(c)),n.xOffset=n.yOffset=0,n.force3D=si.force3D,n.renderTransform=n.svg?AS:dg?_g:wS,n.uncache=0,n},hu=function(t){return(t=t.split(" "))[0]+" "+t[1]},Xf=function(t,e,n){var i=wn(e);return Je(parseFloat(e)+parseFloat(cs(t,"x",n+"px",i)))+i},wS=function(t,e){e.z="0px",e.rotationY=e.rotationX="0deg",e.force3D=0,_g(t,e)},Hs="0deg",pl="0px",Gs=") ",_g=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.z,c=n.rotation,u=n.rotationY,h=n.rotationX,f=n.skewX,d=n.skewY,m=n.scaleX,g=n.scaleY,_=n.transformPerspective,p=n.force3D,y=n.target,v=n.zOrigin,M="",T=p==="auto"&&t&&t!==1||p===!0;if(v&&(h!==Hs||u!==Hs)){var E=parseFloat(u)*Yo,w=Math.sin(E),R=Math.cos(E),x;E=parseFloat(h)*Yo,x=Math.cos(E),o=Xf(y,o,w*x*-v),a=Xf(y,a,-Math.sin(E)*-v),l=Xf(y,l,R*x*-v+v)}_!==pl&&(M+="perspective("+_+Gs),(i||s)&&(M+="translate("+i+"%, "+s+"%) "),(T||o!==pl||a!==pl||l!==pl)&&(M+=l!==pl||T?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+Gs),c!==Hs&&(M+="rotate("+c+Gs),u!==Hs&&(M+="rotateY("+u+Gs),h!==Hs&&(M+="rotateX("+h+Gs),(f!==Hs||d!==Hs)&&(M+="skew("+f+", "+d+Gs),(m!==1||g!==1)&&(M+="scale("+m+", "+g+Gs),y.style[qe]=M||"translate(0, 0)"},AS=function(t,e){var n=e||this,i=n.xPercent,s=n.yPercent,o=n.x,a=n.y,l=n.rotation,c=n.skewX,u=n.skewY,h=n.scaleX,f=n.scaleY,d=n.target,m=n.xOrigin,g=n.yOrigin,_=n.xOffset,p=n.yOffset,y=n.forceCSS,v=parseFloat(o),M=parseFloat(a),T,E,w,R,x;l=parseFloat(l),c=parseFloat(c),u=parseFloat(u),u&&(u=parseFloat(u),c+=u,l+=u),l||c?(l*=Yo,c*=Yo,T=Math.cos(l)*h,E=Math.sin(l)*h,w=Math.sin(l-c)*-f,R=Math.cos(l-c)*f,c&&(u*=Yo,x=Math.tan(c-u),x=Math.sqrt(1+x*x),w*=x,R*=x,u&&(x=Math.tan(u),x=Math.sqrt(1+x*x),T*=x,E*=x)),T=Je(T),E=Je(E),w=Je(w),R=Je(R)):(T=h,R=f,E=w=0),(v&&!~(o+"").indexOf("px")||M&&!~(a+"").indexOf("px"))&&(v=cs(d,"x",o,"px"),M=cs(d,"y",a,"px")),(m||g||_||p)&&(v=Je(v+m-(m*T+g*w)+_),M=Je(M+g-(m*E+g*R)+p)),(i||s)&&(x=d.getBBox(),v=Je(v+i/100*x.width),M=Je(M+s/100*x.height)),x="matrix("+T+","+E+","+w+","+R+","+v+","+M+")",d.setAttribute("transform",x),y&&(d.style[qe]=x)},CS=function(t,e,n,i,s){var o=360,a=fn(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Ws:1),c=l-i,u=i+c+"deg",h,f;return a&&(h=s.split("_")[1],h==="short"&&(c%=o,c!==c%(o/2)&&(c+=c<0?o:-o)),h==="cw"&&c<0?c=(c+o*tg)%o-~~(c/o)*o:h==="ccw"&&c>0&&(c=(c-o*tg)%o-~~(c/o)*o)),t._pt=f=new Xn(t._pt,e,n,i,c,hS),f.e=u,f.u="deg",t._props.push(n),f},ag=function(t,e){for(var n in e)t[n]=e[n];return t},RS=function(t,e,n){var i=ag({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=n.style,a,l,c,u,h,f,d,m;i.svg?(c=n.getAttribute("transform"),n.setAttribute("transform",""),o[qe]=e,a=gl(n,1),ls(n,qe),n.setAttribute("transform",c)):(c=getComputedStyle(n)[qe],o[qe]=e,a=gl(n,1),o[qe]=c);for(l in Rr)c=i[l],u=a[l],c!==u&&s.indexOf(l)<0&&(d=wn(c),m=wn(u),h=d!==m?cs(n,l,c,m):parseFloat(c),f=parseFloat(u),t._pt=new Xn(t._pt,a,l,h,f-h,qf),t._pt.u=m||0,t._props.push(l));ag(a,i)};Wn("padding,margin,Width,Radius",function(r,t){var e="Top",n="Right",i="Bottom",s="Left",o=(t<3?[e,n,i,s]:[e+s,e+n,i+n,i+s]).map(function(a){return t<2?r+a:"border"+a+r});cu[t>1?"border"+r:r]=function(a,l,c,u,h){var f,d;if(arguments.length<4)return f=o.map(function(m){return Cr(a,m,c)}),d=f.join(" "),d.split(f[0]).length===5?f[0]:d;f=(u+"").split(" "),d={},o.forEach(function(m,g){return d[m]=f[g]=f[g]||f[(g-1)/2|0]}),a.init(l,d,h)}});var tp={name:"css",register:Zf,targetTest:function(t){return t.style&&t.nodeType},init:function(t,e,n,i,s){var o=this._props,a=t.style,l=n.vars.startAt,c,u,h,f,d,m,g,_,p,y,v,M,T,E,w,R,x;Jf||Zf(),this.styles=this.styles||ug(t),R=this.styles.props,this.tween=n;for(g in e)if(g!=="autoRound"&&(u=e[g],!(ni[g]&&kf(g,e,n,i,t,s)))){if(d=typeof u,m=cu[g],d==="function"&&(u=u.call(n,i,t,s),d=typeof u),d==="string"&&~u.indexOf("random(")&&(u=Wo(u)),m)m(this,t,g,u,n)&&(w=1);else if(g.substr(0,2)==="--")c=(getComputedStyle(t).getPropertyValue(g)+"").trim(),u+="",wr.lastIndex=0,wr.test(c)||(_=wn(c),p=wn(u),p?_!==p&&(c=cs(t,g,c,p)+p):_&&(u+=_)),this.add(a,"setProperty",c,u,i,s,0,0,g),o.push(g),R.push(g,0,a[g]);else if(d!=="undefined"){if(l&&g in l?(c=typeof l[g]=="function"?l[g].call(n,i,t,s):l[g],fn(c)&&~c.indexOf("random(")&&(c=Wo(c)),wn(c+"")||c==="auto"||(c+=si.units[g]||wn(Cr(t,g))||""),(c+"").charAt(1)==="="&&(c=Cr(t,g))):c=Cr(t,g),f=parseFloat(c),y=d==="string"&&u.charAt(1)==="="&&u.substr(0,2),y&&(u=u.substr(2)),h=parseFloat(u),g in ar&&(g==="autoAlpha"&&(f===1&&Cr(t,"visibility")==="hidden"&&h&&(f=0),R.push("visibility",0,a.visibility),as(this,a,"visibility",f?"inherit":"hidden",h?"inherit":"hidden",!h)),g!=="scale"&&g!=="transform"&&(g=ar[g],~g.indexOf(",")&&(g=g.split(",")[0]))),v=g in Rr,v){if(this.styles.save(g),x=u,d==="string"&&u.substring(0,6)==="var(--"){if(u=yi(t,u.substring(4,u.indexOf(")"))),u.substring(0,5)==="calc("){var b=t.style.perspective;t.style.perspective=u,u=yi(t,"perspective"),b?t.style.perspective=b:ls(t,"perspective")}h=parseFloat(u)}if(M||(T=t._gsap,T.renderTransform&&!e.parseTransform||gl(t,e.parseTransform),E=e.smoothOrigin!==!1&&T.smooth,M=this._pt=new Xn(this._pt,a,qe,0,1,T.renderTransform,T,0,-1),M.dep=1),g==="scale")this._pt=new Xn(this._pt,T,"scaleY",T.scaleY,(y?zs(T.scaleY,y+h):h)-T.scaleY||0,qf),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){R.push(oi,0,a[oi]),u=TS(u),T.svg?$f(t,u,0,E,0,this):(p=parseFloat(u.split(" ")[2])||0,p!==T.zOrigin&&as(this,T,"zOrigin",T.zOrigin,p),as(this,a,g,hu(c),hu(u)));continue}else if(g==="svgOrigin"){$f(t,u,1,E,0,this);continue}else if(g in mg){CS(this,T,g,f,y?zs(f,y+u):u);continue}else if(g==="smoothOrigin"){as(this,T,"smooth",T.smooth,u);continue}else if(g==="force3D"){T[g]=u;continue}else if(g==="transform"){RS(this,u,t);continue}}else g in a||(g=Zo(g)||g);if(v||(h||h===0)&&(f||f===0)&&!cS.test(u)&&g in a)_=(c+"").substr((f+"").length),h||(h=0),p=wn(u)||(g in si.units?si.units[g]:_),_!==p&&(f=cs(t,g,c,p)),this._pt=new Xn(this._pt,v?T:a,g,f,(y?zs(f,y+h):h)-f,!v&&(p==="px"||g==="zIndex")&&e.autoRound!==!1?fS:qf),this._pt.u=p||0,v&&x!==u?(this._pt.b=c,this._pt.e=x,this._pt.r=dS):_!==p&&p!=="%"&&(this._pt.b=c,this._pt.r=uS);else if(g in a)SS.call(this,t,g,c,y?y+u:u);else if(g in t)this.add(t,g,c||t[g],y?y+u:u,i,s);else if(g!=="parseTransform"){ru(g,u);continue}v||(g in a?R.push(g,0,a[g]):typeof t[g]=="function"?R.push(g,2,t[g]()):R.push(g,1,c||t[g])),o.push(g)}}w&&Wf(this)},render:function(t,e){if(e.tween._time||!Kf())for(var n=e._pt;n;)n.r(t,n.d),n=n._next;else e.styles.revert()},get:Cr,aliases:ar,getSetter:function(t,e,n){var i=ar[e];return i&&i.indexOf(",")<0&&(e=i),e in Rr&&e!==oi&&(t._gsap.x||Cr(t,"x"))?n&&Q0===n?e==="scale"?_S:gS:(Q0=n||{})&&(e==="scale"?xS:vS):t.style&&!iu(t.style[e])?pS:~e.indexOf("-")?mS:lu(t,e)},core:{_removeProperty:ls,_getMatrix:Qf}};Fn.utils.checkPrefix=Zo;Fn.core.getStyleSaver=ug;(function(r,t,e,n){var i=Wn(r+","+t+","+e,function(s){Rr[s]=1});Wn(t,function(s){si.units[s]="deg",mg[s]=1}),ar[i[13]]=r+","+t,Wn(n,function(s){var o=s.split(":");ar[o[1]]=i[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");Wn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){si.units[r]="px"});Fn.registerPlugin(tp);var at=Fn.registerPlugin(tp)||Fn,_A=at.core.Tween;var xg=[["THE CALL","A window in the dark.","At the end of the valley, one window still flickers. The keeper has one lantern left."],["THE OPENING","The mountain remembers.","An old door unlocks. The observatory opens its ribs, revealing the lift that once carried starlight."],["THE DESCENT","Take the light below.","The keeper lowers the lantern into the heart of the machine. For a moment, nothing happens."],["THE SPARK","One small light is enough.","The socket catches. Teeth turn. Three broken lenses begin looking for the same point in the sky."],["THE SIGNAL","Give the dark an answer.","The lenses lock. The observatory folds itself whole, and sends the lantern\u2019s light across the valley."],["THE REPLY","One window. Then another.","The signal reaches the sleeping village. A street wakes. Then the next. Someone has been waiting."],["THE HOMECOMING","You were never the last.","A light comes back from the village. The keeper returns to the rooftop. There is enough light now, for everyone."]],vg=r=>Math.max(0,Math.min(1,r)),qs=r=>(r=vg(r),r*r*(3-2*r));function yg(r){let t=vg(r),e=(n,i)=>qs((t-n)/(i-n));return{p:t,chapter:t<.12?0:t<.27?1:t<.42?2:t<.57?3:t<.72?4:t<.88?5:6,open:e(.12,.27),descend:e(.27,.4),spark:e(.4,.46),align:e(.44,.57),close:e(.57,.66),transmit:e(.65,.77),village:e(.75,.9),reply:e(.88,.95),dawn:e(.88,.97),returnHome:e(.87,.95)}}function Mg(r){let t=document.querySelector(".lk-world");if(!t)return;if(r){let C=document.querySelector(".lk-log");C&&(C.open=!0)}let e;try{e=new ts({antialias:!1,alpha:!0,powerPreference:"low-power"})}catch{let C=document.querySelector(".lk-journey");C&&(C.style.height="100svh");return}t.append(e.domElement),t.classList.add("has-webgl"),e.setPixelRatio(1),e.setClearColor(726816,1),e.outputColorSpace=Qe;let n=new Gi;n.fog=new Da(726816,45,100);let i=new Zr(-20,20,14,-14,.1,200),s=new Sr(10470603,2);n.add(s);let o=new mi(16762004,3);o.position.set(-15,25,10),n.add(o);let a=new mi(4950939,2);a.position.set(10,6,-10),n.add(a);let l=new Ue(1,1,1),c=new Map;function u(C,I=!1){let B=C+I;return c.has(B)||c.set(B,new ye({color:C,roughness:1,emissive:I?C:0,emissiveIntensity:I?1.7:0})),c.get(B)}function h(C,I,B,z,rt,Q,vt,yt,et=!1){let lt=new Me(l,u(yt,et));return lt.position.set(I,B,z),lt.scale.set(rt,Q,vt),C.add(lt),lt}let f=new ne;n.add(f);let d=new ne;f.add(d);let m=41,g=()=>(m=m*16807%2147483647,(m-1)/2147483646),_=new tn,p=[];for(let C=-12;C<=12;C++)for(let I=-10;I<=10;I++){let B=Math.sqrt(C*C+I*I*1.25);if(B>12+g()*1.5)continue;let z=-3+Math.floor(Math.sin(C*.5)*.7+Math.cos(I*.4)*.9+g()),rt=Math.max(1,Math.floor((13-B)*.5));for(let Q=0;Q<rt;Q++)p.push({x:C,y:z-Q,z:I,s:1,c:new jt(Q===0?g()>.7?"#78958c":"#496c69":g()>.5?"#263f49":"#34505a")})}let y=new Ts(l,u("#ffffff"),p.length);p.forEach((C,I)=>{_.position.set(C.x,C.y,C.z),_.scale.set(1,1,1),_.updateMatrix(),y.setMatrixAt(I,_.matrix),y.setColorAt(I,C.c)}),d.add(y);for(let C=0;C<15;C++)h(f,7-C*.32,-2+C*.28,8-C*.6,2.2,.25,.7,"#829588");for(let C=0;C<25;C++){let I=g()*Math.PI*2,B=8+g()*3,z=Math.cos(I)*B,rt=Math.sin(I)*B;if(!(rt>3&&z>3)){h(f,z,-1.7,rt,.3,2,.3,"#384b4c");for(let Q=0;Q<4;Q++)h(f,z,-1+Q*.6,rt,2.4-Q*.5,.7,2.4-Q*.5,Q%2?"#345f59":"#416f63")}}let v=new ne;f.add(v);let M=[];for(let C=0;C<4;C++){let I=new ne;I.position.y=C*3,M.push(I),v.add(I),h(I,0,0,0,8,.45,7,"#5b7373"),h(I,0,.32,0,7.5,.2,6.5,"#96a499");for(let B of[-3.5,3.5])for(let z of[-3,3])h(I,B,1.5,z,.65,2.7,.65,"#78938b"),h(I,B,2.8,z,.9,.25,.9,"#a4afa0");h(I,0,1.5,-3.1,6.8,2.7,.45,"#35545c");for(let B=-2;B<=2;B++)h(I,B*1.15,1.65,-2.84,.5,1.15,.1,"#192f3a"),h(I,B*1.15,1.65,-2.76,.18,.6,.08,"#b7885d",!0);h(I,-3.7,1.4,0,.3,2.8,6,"#496970");for(let B=-2;B<=2;B++)h(I,-3.47,1.5,B,.08,.8,.4,"#ba9164",!0);for(let B=-3;B<=3;B++)h(I,B,1,3.2,.13,1.2,.13,"#a2a48b");h(I,0,1.6,3.2,7.5,.12,.13,"#b1ae91")}let T=[];for(let C=0;C<4;C++){let I=new ne;I.position.y=12,I.rotation.y=C*Math.PI/2,v.add(I);let B=new ne;I.add(B),B.position.z=-3.4;for(let z=0;z<6;z++)h(B,0,z*.4,z*.55,7-z*.8,.45,.7,z%2?"#536d77":"#68858b");T.push(B)}h(v,0,12,0,8.6,.35,8.2,"#a7a78d");let E=new ne;f.add(E),h(E,0,.6,0,.6,.9,.5,"#e5b06c"),h(E,0,1.3,0,.55,.5,.5,"#e7d5a8"),h(E,0,1.65,0,.75,.2,.65,"#c57452"),h(E,-.2,.05,0,.25,.3,.45,"#1a303c"),h(E,.2,.05,0,.25,.3,.45,"#1a303c");let w=h(E,.48,.65,0,.25,.45,.25,"#f2cd8a",!0),R=new ne;R.position.y=4.7,f.add(R);let x=new Me(new Ha(1.2,0),u("#ffc278",!0));R.add(x);let b=[];for(let C=0;C<3;C++){let I=new ne;R.add(I);for(let B=0;B<40;B++){let z=B/40*Math.PI*2,rt=h(I,Math.cos(z)*(2.1+C*.7),Math.sin(z)*(2.1+C*.7),0,.3,.3,.35,B%5===0?"#edc686":"#6b8c86",B%5===0);rt.rotation.z=z}b.push(I)}let L=[];for(let C=0;C<34;C++){let I=g()*6.28,B=8+g()*3,z=Math.cos(I)*B,rt=Math.sin(I)*B;h(f,z,-4,rt,1.6,.7,1.2,"#213b45"),h(f,z,-3.4,rt,1.2,.6,1,"#547370"),L.push(h(f,z,-3.35,rt+.52,.5,.3,.05,"#f5b76e",!0))}let F=new ne;f.add(F),h(F,0,0,0,1.9,.18,1.7,"#b3a481");for(let C of[-.85,.85])h(F,C,.55,.7,.1,1.2,.1,"#9da795"),h(F,C,.55,-.7,.1,1.2,.1,"#9da795");let k=[h(f,2.1,7,3,.06,10,.06,"#7b8e89"),h(f,3.9,7,3,.06,10,.06,"#7b8e89")],H=new ne;H.position.set(0,3.6,6),f.add(H),h(H,0,0,0,1.4,.35,1.4,"#667c77"),h(H,0,.3,0,.65,.4,.65,"#1a343a");let Y=h(H,0,.55,0,.4,.45,.4,"#ffce83",!0),W=[];for(let C=0;C<4;C++){let I=new ne;I.position.set(3.9,2.1+C*2,3.4),f.add(I);for(let B=0;B<12;B++){let z=B/12*Math.PI*2,rt=h(I,Math.cos(z)*.65,Math.sin(z)*.65,0,.3,.3,.22,B%2?"#a1a18a":"#79918a");rt.rotation.z=z}h(I,0,0,0,.3,.3,.35,"#d0b17a"),W.push(I)}let G=new ne;f.add(G);for(let C=0;C<9;C++)h(G,3-C*.36,3.45,3+C*.36,.7,.16,.7,"#a3a48a");for(let C=0;C<20;C++)h(v,4.3,C*.6,0,.13,.5,.13,"#8b9b8b"),h(v,4.7,C*.6,0,.13,.5,.13,"#8b9b8b"),h(v,4.5,C*.6,.04,.5,.08,.13,"#a3ac96");h(v,-4.15,5.8,-1,.25,11.5,.25,"#ac8a68");for(let C=0;C<5;C++)h(v,-4.15,1+C*2.2,-1,.4,.18,.4,"#c7ab7d");let Z=new ne;Z.position.set(0,14.8,0),f.add(Z),h(Z,0,0,0,1.1,1.4,1.1,"#8f9a88");let it=new ne;it.position.y=.8,Z.add(it);for(let C=0;C<6;C++)h(it,0,0,C*.6,1.35-C*.12,1.35-C*.12,.7,C%2?"#cfb68b":"#637e7e");h(it,0,0,3.5,.8,.8,.12,"#c7e3d0",!0);let N=new ne;N.position.set(-3,16.8,-2),f.add(N),h(N,0,-1,0,.1,2,.1,"#c6ba97"),h(N,0,0,0,1.7,.16,.16,"#e2c28e"),h(N,.8,.2,0,.45,.6,.12,"#d6b887");let nt=new ne;nt.position.set(-20,-5,14),f.add(nt);let Lt=[],Ot=[];for(let C=0;C<12;C++){let I=Math.floor(C/4),z=(C%4-1.5)*4.3,rt=(I-1)*4.4,Q=I*.55;h(nt,z,Q-1.2,rt,4.1,2,4.1,"#3b595c"),h(nt,z,Q-2.6,rt,3.1,1,3.1,"#29434e"),h(nt,z,Q-.12,rt,4.2,.25,4.2,"#779383"),h(nt,z,Q+1,rt,2.8,2.1,2.6,["#71938c","#a1aa94","#658b85"][C%3]);for(let et=0;et<4;et++)h(nt,z,Q+2.15+et*.25,rt,3.3-et*.65,.3,3,"#425e64");h(nt,z+.8,Q+2.6,rt-.5,.4,1.1,.4,"#8b9a87");let vt=[];for(let et of[-.7,.7])vt.push(h(nt,z+et,Q+1.1,rt+1.32,.48,.6,.06,"#ffcb83",!0));vt.push(h(nt,z+1.42,Q+1.1,rt,.06,.65,.6,"#ffcb83",!0)),Lt.push(vt),h(nt,z,Q+.45,rt+1.34,.42,.9,.06,"#304e50");let yt=h(nt,z+.8,Q+3.5,rt-.5,.4,.4,.4,"#9aafa3");Ot.push(yt)}let Bt=new ne;f.add(Bt);for(let C=0;C<36;C++){let I=C/35,B=-7-I*12,z=3+I*11,rt=-1.8-Math.sin(I*Math.PI)*2.5;h(Bt,B,rt,z,.7,.16,1.65,"#7e8e7b");for(let Q of[-1,1])h(Bt,B,rt+.65,z+Q*.8,.07,1.25,.07,"#8e9a85"),h(Bt,B,rt+1.2,z+Q*.8,.75,.07,.07,"#c2b18b")}let Zt=new Wi([new U(0,14,0),new U(-6,20,4),new U(-15,12,11),new U(-20,0,14)]),K=new Wi([new U(-20,1,14),new U(-15,10,16),new U(-7,17,9),new U(1.7,12.6,3)]),j=new ne;f.add(j);for(let C=0;C<22;C++)h(j,0,0,0,C?.14:.45,C?.14:.45,C?.14:.45,C?"#e6c78b":"#fff1b3",!0);let ht=new ne;f.add(ht);for(let C=0;C<16;C++)h(ht,0,0,0,C?.12:.35,C?.12:.35,C?.12:.35,"#cce6c1",!0);let Ct=new ne;Ct.position.y=14,f.add(Ct);for(let C=0;C<52;C++){let I=C/52*Math.PI*2;h(Ct,Math.cos(I),0,Math.sin(I),.12,.12,.12,"#ffe2a1",!0)}let gt=new ne;f.add(gt),h(gt,0,0,0,.12,.3,.12,"#e4d5ad"),h(gt,-.18,.08,0,.3,.35,.06,"#c9edd2",!0),h(gt,.18,.08,0,.3,.35,.06,"#c9edd2",!0);let Vt=new ne;f.add(Vt);for(let C=0;C<70;C++){let I=g()*6.28,B=5+g()*15;h(Vt,Math.cos(I)*B,g()*25-4,Math.sin(I)*B,.08,.08,.08,"#c8dcab",!0)}let oe={p:0},_t=-1,Nt=!0,Gt=0,Ut=0,q=new U;function O(C=0){let I=yg(oe.p),B=I.p,z=qs((B-.7)/.22),rt=t.clientWidth/Math.max(1,t.clientHeight),Q=14-I.descend*2+I.close*2+z*9;i.left=-Q*rt,i.right=Q*rt,i.top=Q,i.bottom=-Q,i.updateProjectionMatrix();let vt=.72+I.open*.33+I.align*.18-I.close*.35;q.set((innerWidth<760?-1:-5)-z*5,5.5-I.descend*1.8+z*.5,z*6),i.position.set(q.x+Math.sin(vt)*36,22-I.descend*8+z*11,q.z+Math.cos(vt)*36),i.lookAt(q);let yt=I.open*(1-I.close);T.forEach((pt,D)=>{pt.rotation.x=-yt*1.48,pt.position.y=yt*(D%2)*.4}),M.forEach((pt,D)=>{pt.position.x=(D%2?1:-1)*I.descend*7.7*(1-I.close),pt.position.y=D*3+yt*D*.35});let et=3,lt=1+I.open*10-I.descend*7.4,St=3;et=et*(1-I.spark),St=3+I.spark*3,et=et*(1-I.returnHome)+I.returnHome*1.7,lt=lt*(1-I.returnHome)+I.returnHome*12.5,St=St*(1-I.returnHome)+I.returnHome*3,E.position.set(et,lt,St),E.rotation.y=.3+I.descend*.7-I.returnHome*.9,E.scale.setScalar(1.2),F.position.set(3,.85+I.open*10-I.descend*7.4+I.returnHome*7.4,3),k.forEach((pt,D)=>{pt.position.set(2.1+D*1.8,(F.position.y+12)/2,3),pt.scale.y=Math.max(.2,12-F.position.y)}),w.visible=I.spark<.75,Y.visible=I.spark>.1,Y.scale.setScalar(.3+I.spark*.7),R.position.set(0,4.7+I.close*8,6*(1-I.close)),R.rotation.y=vt,R.scale.setScalar(.28+I.descend*.82-I.close*.5),x.rotation.set(B*5,B*9,B*2),x.scale.setScalar(.25+I.spark*.9),x.material=u(I.spark>.5?"#ffe8a3":"#526c71",I.spark>.5),b.forEach((pt,D)=>{pt.rotation.set((1-I.align)*(D+1)*.8,(1-I.align)*(D+1)*1.1,B*(1-I.align)*(D%2?1:-1)*6),pt.scale.setScalar(.6+I.spark*.4)}),G.visible=I.descend>.6&&I.close<.5,W.forEach((pt,D)=>pt.rotation.z=I.spark*(B-.4)*28*(D%2?1:-1)),it.rotation.x=-.2-I.align*.6,it.rotation.y=-I.transmit*.7,N.rotation.y=Math.sin(C*.35)*.3,Lt.forEach((pt,D)=>pt.forEach(ut=>ut.visible=I.village>(D+.3)/13)),L.forEach((pt,D)=>pt.visible=I.village>D/38+.05),Ot.forEach((pt,D)=>{pt.visible=I.village>D/13,pt.position.y=3+Math.floor(D/4)*.55+(C*.45+D*.3)%2.2,pt.scale.setScalar(.3+(C*.45+D*.3)%2.2*.2)}),j.visible=B>=.65&&B<.8,j.children.forEach((pt,D)=>{let ut=Math.max(0,I.transmit-D*.014);pt.position.copy(Zt.getPoint(ut)),pt.visible=I.transmit>=D*.014}),ht.visible=B>.88&&B<.965,ht.children.forEach((pt,D)=>{let ut=Math.max(0,I.reply-D*.018);pt.position.copy(K.getPoint(ut)),pt.visible=I.reply>=D*.018}),Ct.visible=I.transmit>0,Ct.scale.setScalar(1),Ct.position.y=15+I.transmit*2,Ct.children.forEach((pt,D)=>{let ut=D/52*Math.PI*2;pt.position.set(Math.cos(ut)*(1+I.transmit*12),0,Math.sin(ut)*(1+I.transmit*12)),pt.visible=I.transmit<.85}),gt.visible=I.reply>.9,gt.position.set(2.4+Math.sin(C*.6)*.3,13.6+Math.sin(C*.8)*.2,3.5),gt.rotation.y=Math.sin(C*3)*.4,Vt.rotation.y=C*.012+B*.12,s.intensity=1.7+I.dawn*1.5,o.intensity=2.3+I.dawn*2;let Rt=new jt("#0b1720").lerp(new jt("#789d96"),I.dawn*.75);if(e.setClearColor(Rt,1),n.fog.color.copy(Rt),e.render(n,i),t.dataset.scrollProgress=B.toFixed(3),t.dataset.storyBeat=String(I.chapter+1),t.dataset.litWindows=String(Lt.filter((pt,D)=>I.village>(D+.3)/13).length),I.chapter!==_t){_t=I.chapter;let pt=xg[I.chapter],D=document.querySelector(".lk-caption");D.querySelector("small").textContent=pt[0],D.querySelector("h2").textContent=pt[1],D.querySelector("p").textContent=pt[2]}let ct=qs((B-.09)/.04);at.set(".lk-caption",{opacity:ct,y:20*(1-ct)}),document.querySelector(".lk-stage")?.classList.toggle("is-ending",B>.72),document.querySelector(".lk-stage")?.classList.toggle("is-dawn",I.dawn>.5),at.set(".lk-hero",{opacity:1-qs(B/.12),y:-qs(B/.12)*50}),at.set(".lk-transmission",{opacity:1-qs(B/.15)}),at.set(".lk-coordinate",{opacity:1-I.open}),at.set(".lk-track i",{scaleX:B}),document.querySelector(".lk-progress-count").textContent=`${String(I.chapter+1).padStart(2,"0")} / 07`,document.querySelector(".lk-depth b").textContent=Math.round(1240-I.descend*230+I.returnHome*230).toLocaleString()}function me(){e.setSize(Math.min(680,Math.round(t.clientWidth*.48)),Math.min(460,Math.round(t.clientHeight*.48)),!1),O()}me();let ee=r?void 0:at.timeline({scrollTrigger:{trigger:".lk-journey",start:"top top",end:"bottom bottom",scrub:.9},defaults:{ease:"none"}}).to(oe,{p:1,duration:1}),Wt=new IntersectionObserver(([C])=>{Nt=C.isIntersecting,Nt&&P()});Wt.observe(t);function At(C){Gt=0,!(document.hidden||!Nt)&&(C-Ut>40&&(O(r?0:C*.001),Ut=C),P())}function P(){!Gt&&!document.hidden&&Nt&&!r&&(Gt=requestAnimationFrame(At))}let S=()=>{document.hidden?(cancelAnimationFrame(Gt),Gt=0):P()};return document.addEventListener("visibilitychange",S),window.addEventListener("resize",me),P(),()=>{cancelAnimationFrame(Gt),Wt.disconnect(),ee?.scrollTrigger?.kill(),ee?.kill(),window.removeEventListener("resize",me),document.removeEventListener("visibilitychange",S),l.dispose(),x.geometry.dispose(),c.forEach(C=>C.dispose()),e.dispose(),e.domElement.remove()}}function bg(r,t){for(var e=0;e<t.length;e++){var n=t[e];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(r,n.key,n)}}function PS(r,t,e){return t&&bg(r.prototype,t),e&&bg(r,e),r}var An,fu,IS,Mi,hs,us,Jo,Tg,Ys,xl,Eg,Pr,Yi,wg,Ag=function(){return An||typeof window<"u"&&(An=window.gsap)&&An.registerPlugin&&An},Cg=1,$o=[],ae=[],Zi=[],vl=Date.now,ep=function(t,e){return e},DS=function(){var t=xl.core,e=t.bridge||{},n=t._scrollers,i=t._proxies;n.push.apply(n,ae),i.push.apply(i,Zi),ae=n,Zi=i,ep=function(o,a){return e[o](a)}},Dr=function(t,e){return~Zi.indexOf(t)&&Zi[Zi.indexOf(t)+1][e]},yl=function(t){return!!~Eg.indexOf(t)},Yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:i!==!1,capture:!!s})},qn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},uu="scrollLeft",du="scrollTop",np=function(){return Pr&&Pr.isPressed||ae.cache++},pu=function(t,e){var n=function i(s){if(s||s===0){Cg&&(Mi.history.scrollRestoration="manual");var o=Pr&&Pr.isPressed;s=i.v=Math.round(s)||(Pr&&Pr.iOS?1:0),t(s),i.cacheID=ae.cache,o&&ep("ss",s)}else(e||ae.cache!==i.cacheID||ep("ref"))&&(i.cacheID=ae.cache,i.v=t());return i.v+i.offset};return n.offset=0,t&&n},Un={s:uu,p:"left",p2:"Left",os:"right",os2:"Right",d:"width",d2:"Width",a:"x",sc:pu(function(r){return arguments.length?Mi.scrollTo(r,sn.sc()):Mi.pageXOffset||hs[uu]||us[uu]||Jo[uu]||0})},sn={s:du,p:"top",p2:"Top",os:"bottom",os2:"Bottom",d:"height",d2:"Height",a:"y",op:Un,sc:pu(function(r){return arguments.length?Mi.scrollTo(Un.sc(),r):Mi.pageYOffset||hs[du]||us[du]||Jo[du]||0})},Zn=function(t,e){return(e&&e._ctx&&e._ctx.selector||An.utils.toArray)(t)[0]||(typeof t=="string"&&An.config().nullTargetWarn!==!1?console.warn("Element not found:",t):null)},LS=function(t,e){for(var n=e.length;n--;)if(e[n]===t||e[n].contains(t))return!0;return!1},Ir=function(t,e){var n=e.s,i=e.sc;yl(t)&&(t=hs.scrollingElement||us);var s=ae.indexOf(t),o=i===sn.sc?1:2;!~s&&(s=ae.push(t)-1),ae[s+o]||Yn(t,"scroll",np);var a=ae[s+o],l=a||(ae[s+o]=pu(Dr(t,n),!0)||(yl(t)?i:pu(function(c){return arguments.length?t[n]=c:t[n]})));return l.target=t,a||(l.smooth=An.getProperty(t,"scrollBehavior")==="smooth"),l},mu=function(t,e,n){var i=t,s=t,o=vl(),a=o,l=e||50,c=Math.max(500,l*3),u=function(m,g){var _=vl();g||_-o>l?(s=i,i=m,a=o,o=_):n?i+=m:i=s+(m-s)/(_-a)*(o-a)},h=function(){s=i=n?0:i,a=o=0},f=function(m){var g=a,_=s,p=vl();return(m||m===0)&&m!==i&&u(m),o===a||p-a>c?0:(i+(n?_:-_))/((n?p:o)-g)*1e3};return{update:u,reset:h,getVelocity:f}},_l=function(t,e){return e&&!t._gsapAllow&&t.preventDefault(),t.changedTouches?t.changedTouches[0]:t},Sg=function(t){var e=Math.max.apply(Math,t),n=Math.min.apply(Math,t);return Math.abs(e)>=Math.abs(n)?e:n},Rg=function(){xl=An.core.globals().ScrollTrigger,xl&&xl.core&&DS()},Pg=function(t){return An=t||Ag(),!fu&&An&&typeof document<"u"&&document.body&&(Mi=window,hs=document,us=hs.documentElement,Jo=hs.body,Eg=[Mi,hs,us,Jo],IS=An.utils.clamp,wg=An.core.context||function(){},Ys="onpointerenter"in Jo?"pointer":"mouse",Tg=Ke.isTouch=Mi.matchMedia&&Mi.matchMedia("(hover: none), (pointer: coarse)").matches?1:"ontouchstart"in Mi||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0?2:0,Yi=Ke.eventTypes=("ontouchstart"in us?"touchstart,touchmove,touchcancel,touchend":"onpointerdown"in us?"pointerdown,pointermove,pointercancel,pointerup":"mousedown,mousemove,mouseup,mouseup").split(","),setTimeout(function(){return Cg=0},500),Rg(),fu=1),fu};Un.op=sn;ae.cache=0;var Ke=(function(){function r(e){this.init(e)}var t=r.prototype;return t.init=function(n){fu||Pg(An)||console.warn("Please gsap.registerPlugin(Observer)"),xl||Rg();var i=n.tolerance,s=n.dragMinimum,o=n.type,a=n.target,l=n.lineHeight,c=n.debounce,u=n.preventDefault,h=n.onStop,f=n.onStopDelay,d=n.ignore,m=n.wheelSpeed,g=n.event,_=n.onDragStart,p=n.onDragEnd,y=n.onDrag,v=n.onPress,M=n.onRelease,T=n.onRight,E=n.onLeft,w=n.onUp,R=n.onDown,x=n.onChangeX,b=n.onChangeY,L=n.onChange,F=n.onToggleX,k=n.onToggleY,H=n.onHover,Y=n.onHoverEnd,W=n.onMove,G=n.ignoreCheck,Z=n.isNormalizer,it=n.onGestureStart,N=n.onGestureEnd,nt=n.onWheel,Lt=n.onEnable,Ot=n.onDisable,Bt=n.onClick,Zt=n.scrollSpeed,K=n.capture,j=n.allowClicks,ht=n.lockAxis,Ct=n.onLockAxis;this.target=a=Zn(a)||us,this.vars=n,d&&(d=An.utils.toArray(d)),i=i||1e-9,s=s||0,m=m||1,Zt=Zt||1,o=o||"wheel,touch,pointer",c=c!==!1,l||(l=parseFloat(Mi.getComputedStyle(Jo).lineHeight)||22);var gt,Vt,oe,_t,Nt,Gt,Ut,q=this,O=0,me=0,ee=n.passive||!u&&n.passive!==!1,Wt=Ir(a,Un),At=Ir(a,sn),P=Wt(),S=At(),C=~o.indexOf("touch")&&!~o.indexOf("pointer")&&Yi[0]==="pointerdown",I=yl(a),B=a.ownerDocument||hs,z=[0,0,0],rt=[0,0,0],Q=0,vt=function(){return Q=vl()},yt=function(Ft,re){return(q.event=Ft)&&d&&LS(Ft.target,d)||re&&C&&Ft.pointerType!=="touch"||G&&G(Ft,re)},et=function(){q._vx.reset(),q._vy.reset(),Vt.pause(),h&&h(q)},lt=function(){var Ft=q.deltaX=Sg(z),re=q.deltaY=Sg(rt),Mt=Math.abs(Ft)>=i,Kt=Math.abs(re)>=i;L&&(Mt||Kt)&&L(q,Ft,re,z,rt),Mt&&(T&&q.deltaX>0&&T(q),E&&q.deltaX<0&&E(q),x&&x(q),F&&q.deltaX<0!=O<0&&F(q),O=q.deltaX,z[0]=z[1]=z[2]=0),Kt&&(R&&q.deltaY>0&&R(q),w&&q.deltaY<0&&w(q),b&&b(q),k&&q.deltaY<0!=me<0&&k(q),me=q.deltaY,rt[0]=rt[1]=rt[2]=0),(_t||oe)&&(W&&W(q),oe&&(_&&oe===1&&_(q),y&&y(q),oe=0),_t=!1),Gt&&!(Gt=!1)&&Ct&&Ct(q),Nt&&(nt(q),Nt=!1),gt=0},St=function(Ft,re,Mt){z[Mt]+=Ft,rt[Mt]+=re,q._vx.update(Ft),q._vy.update(re),c?gt||(gt=requestAnimationFrame(lt)):lt()},Rt=function(Ft,re){ht&&!Ut&&(q.axis=Ut=Math.abs(Ft)>Math.abs(re)?"x":"y",Gt=!0),Ut!=="y"&&(z[2]+=Ft,q._vx.update(Ft,!0)),Ut!=="x"&&(rt[2]+=re,q._vy.update(re,!0)),c?gt||(gt=requestAnimationFrame(lt)):lt()},ct=function(Ft){if(!yt(Ft,1)){Ft=_l(Ft,u);var re=Ft.clientX,Mt=Ft.clientY,Kt=re-q.x,zt=Mt-q.y,Qt=q.isDragging;q.x=re,q.y=Mt,(Qt||(Kt||zt)&&(Math.abs(q.startX-re)>=s||Math.abs(q.startY-Mt)>=s))&&(oe||(oe=Qt?2:1),Qt||(q.isDragging=!0),Rt(Kt,zt))}},pt=q.onPress=function(Tt){yt(Tt,1)||Tt&&Tt.button||(q.axis=Ut=null,Vt.pause(),q.isPressed=!0,Tt=_l(Tt),O=me=0,q.startX=q.x=Tt.clientX,q.startY=q.y=Tt.clientY,q._vx.reset(),q._vy.reset(),Yn(Z?a:B,Yi[1],ct,ee,!0),q.deltaX=q.deltaY=0,v&&v(q))},D=q.onRelease=function(Tt){if(!yt(Tt,1)){qn(Z?a:B,Yi[1],ct,!0);var Ft=!isNaN(q.y-q.startY),re=q.isDragging,Mt=re&&(Math.abs(q.x-q.startX)>3||Math.abs(q.y-q.startY)>3),Kt=_l(Tt);!Mt&&Ft&&(q._vx.reset(),q._vy.reset(),u&&j&&An.delayedCall(.08,function(){if(vl()-Q>300&&!Tt.defaultPrevented){if(Tt.target.click)Tt.target.click();else if(B.createEvent){var zt=B.createEvent("MouseEvents");zt.initMouseEvent("click",!0,!0,Mi,1,Kt.screenX,Kt.screenY,Kt.clientX,Kt.clientY,!1,!1,!1,!1,0,null),Tt.target.dispatchEvent(zt)}}})),q.isDragging=q.isGesturing=q.isPressed=!1,h&&re&&!Z&&Vt.restart(!0),oe&&lt(),p&&re&&p(q),M&&M(q,Mt)}},ut=function(Ft){return Ft.touches&&Ft.touches.length>1&&(q.isGesturing=!0)&&it(Ft,q.isDragging)},ot=function(){return(q.isGesturing=!1)||N(q)},mt=function(Ft){if(!yt(Ft)){var re=Wt(),Mt=At();St((re-P)*Zt,(Mt-S)*Zt,1),P=re,S=Mt,h&&Vt.restart(!0)}},st=function(Ft){if(!yt(Ft)){Ft=_l(Ft,u),nt&&(Nt=!0);var re=(Ft.deltaMode===1?l:Ft.deltaMode===2?Mi.innerHeight:1)*m;St(Ft.deltaX*re,Ft.deltaY*re,0),h&&!Z&&Vt.restart(!0)}},tt=function(Ft){if(!yt(Ft)){var re=Ft.clientX,Mt=Ft.clientY,Kt=re-q.x,zt=Mt-q.y;q.x=re,q.y=Mt,_t=!0,h&&Vt.restart(!0),(Kt||zt)&&Rt(Kt,zt)}},ft=function(Ft){q.event=Ft,H(q)},Ht=function(Ft){q.event=Ft,Y(q)},_e=function(Ft){return yt(Ft)||_l(Ft,u)&&Bt(q)};Vt=q._dc=An.delayedCall(f||.25,et).pause(),q.deltaX=q.deltaY=0,q._vx=mu(0,50,!0),q._vy=mu(0,50,!0),q.scrollX=Wt,q.scrollY=At,q.isDragging=q.isGesturing=q.isPressed=!1,wg(this),q.enable=function(Tt){return q.isEnabled||(Yn(I?B:a,"scroll",np),o.indexOf("scroll")>=0&&Yn(I?B:a,"scroll",mt,ee,K),o.indexOf("wheel")>=0&&Yn(a,"wheel",st,ee,K),(o.indexOf("touch")>=0&&Tg||o.indexOf("pointer")>=0)&&(Yn(a,Yi[0],pt,ee,K),Yn(B,Yi[2],D),Yn(B,Yi[3],D),j&&Yn(a,"click",vt,!0,!0),Bt&&Yn(a,"click",_e),it&&Yn(B,"gesturestart",ut),N&&Yn(B,"gestureend",ot),H&&Yn(a,Ys+"enter",ft),Y&&Yn(a,Ys+"leave",Ht),W&&Yn(a,Ys+"move",tt)),q.isEnabled=!0,q.isDragging=q.isGesturing=q.isPressed=_t=oe=!1,q._vx.reset(),q._vy.reset(),P=Wt(),S=At(),Tt&&Tt.type&&pt(Tt),Lt&&Lt(q)),q},q.disable=function(){q.isEnabled&&($o.filter(function(Tt){return Tt!==q&&yl(Tt.target)}).length||qn(I?B:a,"scroll",np),q.isPressed&&(q._vx.reset(),q._vy.reset(),qn(Z?a:B,Yi[1],ct,!0)),qn(I?B:a,"scroll",mt,K),qn(a,"wheel",st,K),qn(a,Yi[0],pt,K),qn(B,Yi[2],D),qn(B,Yi[3],D),qn(a,"click",vt,!0),qn(a,"click",_e),qn(B,"gesturestart",ut),qn(B,"gestureend",ot),qn(a,Ys+"enter",ft),qn(a,Ys+"leave",Ht),qn(a,Ys+"move",tt),q.isEnabled=q.isPressed=q.isDragging=!1,Ot&&Ot(q))},q.kill=q.revert=function(){q.disable();var Tt=$o.indexOf(q);Tt>=0&&$o.splice(Tt,1),Pr===q&&(Pr=0)},$o.push(q),Z&&yl(a)&&(Pr=q),q.enable(g)},PS(r,[{key:"velocityX",get:function(){return this._vx.getVelocity()}},{key:"velocityY",get:function(){return this._vy.getVelocity()}}]),r})();Ke.version="3.14.2";Ke.create=function(r){return new Ke(r)};Ke.register=Pg;Ke.getAll=function(){return $o.slice()};Ke.getById=function(r){return $o.filter(function(t){return t.vars.id===r})[0]};Ag()&&An.registerPlugin(Ke);var Pt,Qo,de,Oe,Ti,Se,_p,Iu,Nl,Al,bl,gu,On,Nu,hp,Jn,Ig,Dg,ta,Zg,ip,$g,$n,up,Jg,Kg,ds,dp,xp,ea,vp,Cl,fp,rp,_u=1,Bn=Date.now,sp=Bn(),Ui=0,Sl=0,Lg=function(t,e,n){var i=Si(t)&&(t.substr(0,6)==="clamp("||t.indexOf("max")>-1);return n["_"+e+"Clamp"]=i,i?t.substr(6,t.length-7):t},Ng=function(t,e){return e&&(!Si(t)||t.substr(0,6)!=="clamp(")?"clamp("+t+")":t},NS=function r(){return Sl&&requestAnimationFrame(r)},Fg=function(){return Nu=1},Ug=function(){return Nu=0},lr=function(t){return t},Tl=function(t){return Math.round(t*1e5)/1e5||0},jg=function(){return typeof window<"u"},Qg=function(){return Pt||jg()&&(Pt=window.gsap)&&Pt.registerPlugin&&Pt},Qs=function(t){return!!~_p.indexOf(t)},t_=function(t){return(t==="Height"?vp:de["inner"+t])||Ti["client"+t]||Se["client"+t]},e_=function(t){return Dr(t,"getBoundingClientRect")||(Qs(t)?function(){return Pu.width=de.innerWidth,Pu.height=vp,Pu}:function(){return Lr(t)})},FS=function(t,e,n){var i=n.d,s=n.d2,o=n.a;return(o=Dr(t,"getBoundingClientRect"))?function(){return o()[i]}:function(){return(e?t_(s):t["client"+s])||0}},US=function(t,e){return!e||~Zi.indexOf(t)?e_(t):function(){return Pu}},cr=function(t,e){var n=e.s,i=e.d2,s=e.d,o=e.a;return Math.max(0,(n="scroll"+i)&&(o=Dr(t,n))?o()-e_(t)()[s]:Qs(t)?(Ti[n]||Se[n])-t_(i):t[n]-t["offset"+i])},xu=function(t,e){for(var n=0;n<ta.length;n+=3)(!e||~e.indexOf(ta[n+1]))&&t(ta[n],ta[n+1],ta[n+2])},Si=function(t){return typeof t=="string"},kn=function(t){return typeof t=="function"},El=function(t){return typeof t=="number"},Zs=function(t){return typeof t=="object"},Ml=function(t,e,n){return t&&t.progress(e?0:1)&&n&&t.pause()},op=function(t,e){if(t.enabled){var n=t._ctx?t._ctx.add(function(){return e(t)}):e(t);n&&n.totalTime&&(t.callbackAnimation=n)}},Ko=Math.abs,n_="left",i_="top",yp="right",Mp="bottom",Js="width",Ks="height",Rl="Right",Pl="Left",Il="Top",Dl="Bottom",on="padding",Ni="margin",ia="Width",bp="Height",pn="px",Fi=function(t){return de.getComputedStyle(t)},OS=function(t){var e=Fi(t).position;t.style.position=e==="absolute"||e==="fixed"?e:"relative"},Og=function(t,e){for(var n in e)n in t||(t[n]=e[n]);return t},Lr=function(t,e){var n=e&&Fi(t)[hp]!=="matrix(1, 0, 0, 1, 0, 0)"&&Pt.to(t,{x:0,y:0,xPercent:0,yPercent:0,rotation:0,rotationX:0,rotationY:0,scale:1,skewX:0,skewY:0}).progress(1),i=t.getBoundingClientRect();return n&&n.progress(0).kill(),i},Du=function(t,e){var n=e.d2;return t["offset"+n]||t["client"+n]||0},r_=function(t){var e=[],n=t.labels,i=t.duration(),s;for(s in n)e.push(n[s]/i);return e},BS=function(t){return function(e){return Pt.utils.snap(r_(t),e)}},Sp=function(t){var e=Pt.utils.snap(t),n=Array.isArray(t)&&t.slice(0).sort(function(i,s){return i-s});return n?function(i,s,o){o===void 0&&(o=.001);var a;if(!s)return e(i);if(s>0){for(i-=o,a=0;a<n.length;a++)if(n[a]>=i)return n[a];return n[a-1]}else for(a=n.length,i+=o;a--;)if(n[a]<=i)return n[a];return n[0]}:function(i,s,o){o===void 0&&(o=.001);var a=e(i);return!s||Math.abs(a-i)<o||a-i<0==s<0?a:e(s<0?i-t:i+t)}},kS=function(t){return function(e,n){return Sp(r_(t))(e,n.direction)}},vu=function(t,e,n,i){return n.split(",").forEach(function(s){return t(e,s,i)})},yn=function(t,e,n,i,s){return t.addEventListener(e,n,{passive:!i,capture:!!s})},vn=function(t,e,n,i){return t.removeEventListener(e,n,!!i)},yu=function(t,e,n){n=n&&n.wheelHandler,n&&(t(e,"wheel",n),t(e,"touchmove",n))},Bg={startColor:"green",endColor:"red",indent:0,fontSize:"16px",fontWeight:"normal"},Mu={toggleActions:"play",anticipatePin:0},Lu={top:0,left:0,center:.5,bottom:1,right:1},wu=function(t,e){if(Si(t)){var n=t.indexOf("="),i=~n?+(t.charAt(n-1)+1)*parseFloat(t.substr(n+1)):0;~n&&(t.indexOf("%")>n&&(i*=e/100),t=t.substr(0,n-1)),t=i+(t in Lu?Lu[t]*e:~t.indexOf("%")?parseFloat(t)*e/100:parseFloat(t)||0)}return t},bu=function(t,e,n,i,s,o,a,l){var c=s.startColor,u=s.endColor,h=s.fontSize,f=s.indent,d=s.fontWeight,m=Oe.createElement("div"),g=Qs(n)||Dr(n,"pinType")==="fixed",_=t.indexOf("scroller")!==-1,p=g?Se:n,y=t.indexOf("start")!==-1,v=y?c:u,M="border-color:"+v+";font-size:"+h+";color:"+v+";font-weight:"+d+";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";return M+="position:"+((_||l)&&g?"fixed;":"absolute;"),(_||l||!g)&&(M+=(i===sn?yp:Mp)+":"+(o+parseFloat(f))+"px;"),a&&(M+="box-sizing:border-box;text-align:left;width:"+a.offsetWidth+"px;"),m._isStart=y,m.setAttribute("class","gsap-marker-"+t+(e?" marker-"+e:"")),m.style.cssText=M,m.innerText=e||e===0?t+"-"+e:t,p.children[0]?p.insertBefore(m,p.children[0]):p.appendChild(m),m._offset=m["offset"+i.op.d2],Au(m,0,i,y),m},Au=function(t,e,n,i){var s={display:"block"},o=n[i?"os2":"p2"],a=n[i?"p2":"os2"];t._isFlipped=i,s[n.a+"Percent"]=i?-100:0,s[n.a]=i?"1px":0,s["border"+o+ia]=1,s["border"+a+ia]=0,s[n.p]=e+"px",Pt.set(t,s)},le=[],pp={},Fl,kg=function(){return Bn()-Ui>34&&(Fl||(Fl=requestAnimationFrame(Nr)))},jo=function(){(!$n||!$n.isPressed||$n.startX>Se.clientWidth)&&(ae.cache++,$n?Fl||(Fl=requestAnimationFrame(Nr)):Nr(),Ui||eo("scrollStart"),Ui=Bn())},ap=function(){Kg=de.innerWidth,Jg=de.innerHeight},wl=function(t){ae.cache++,(t===!0||!On&&!$g&&!Oe.fullscreenElement&&!Oe.webkitFullscreenElement&&(!up||Kg!==de.innerWidth||Math.abs(de.innerHeight-Jg)>de.innerHeight*.25))&&Iu.restart(!0)},to={},zS=[],s_=function r(){return vn(te,"scrollEnd",r)||$s(!0)},eo=function(t){return to[t]&&to[t].map(function(e){return e()})||zS},bi=[],o_=function(t){for(var e=0;e<bi.length;e+=5)(!t||bi[e+4]&&bi[e+4].query===t)&&(bi[e].style.cssText=bi[e+1],bi[e].getBBox&&bi[e].setAttribute("transform",bi[e+2]||""),bi[e+3].uncache=1)},a_=function(){return ae.forEach(function(t){return kn(t)&&++t.cacheID&&(t.rec=t())})},Tp=function(t,e){var n;for(Jn=0;Jn<le.length;Jn++)n=le[Jn],n&&(!e||n._ctx===e)&&(t?n.kill(1):n.revert(!0,!0));Cl=!0,e&&o_(e),e||eo("revert")},l_=function(t,e){ae.cache++,(e||!Kn)&&ae.forEach(function(n){return kn(n)&&n.cacheID++&&(n.rec=0)}),Si(t)&&(de.history.scrollRestoration=xp=t)},Kn,js=0,zg,VS=function(){if(zg!==js){var t=zg=js;requestAnimationFrame(function(){return t===js&&$s(!0)})}},c_=function(){Se.appendChild(ea),vp=!$n&&ea.offsetHeight||de.innerHeight,Se.removeChild(ea)},Vg=function(t){return Nl(".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end").forEach(function(e){return e.style.display=t?"none":"block"})},$s=function(t,e){if(Ti=Oe.documentElement,Se=Oe.body,_p=[de,Oe,Ti,Se],Ui&&!t&&!Cl){yn(te,"scrollEnd",s_);return}c_(),Kn=te.isRefreshing=!0,Cl||a_();var n=eo("refreshInit");Zg&&te.sort(),e||Tp(),ae.forEach(function(i){kn(i)&&(i.smooth&&(i.target.style.scrollBehavior="auto"),i(0))}),le.slice(0).forEach(function(i){return i.refresh()}),Cl=!1,le.forEach(function(i){if(i._subPinOffset&&i.pin){var s=i.vars.horizontal?"offsetWidth":"offsetHeight",o=i.pin[s];i.revert(!0,1),i.adjustPinSpacing(i.pin[s]-o),i.refresh()}}),fp=1,Vg(!0),le.forEach(function(i){var s=cr(i.scroller,i._dir),o=i.vars.end==="max"||i._endClamp&&i.end>s,a=i._startClamp&&i.start>=s;(o||a)&&i.setPositions(a?s-1:i.start,o?Math.max(a?s:i.start+1,s):i.end,!0)}),Vg(!1),fp=0,n.forEach(function(i){return i&&i.render&&i.render(-1)}),ae.forEach(function(i){kn(i)&&(i.smooth&&requestAnimationFrame(function(){return i.target.style.scrollBehavior="smooth"}),i.rec&&i(i.rec))}),l_(xp,1),Iu.pause(),js++,Kn=2,Nr(2),le.forEach(function(i){return kn(i.vars.onRefresh)&&i.vars.onRefresh(i)}),Kn=te.isRefreshing=!1,eo("refresh")},mp=0,Cu=1,Ll,Nr=function(t){if(t===2||!Kn&&!Cl){te.isUpdating=!0,Ll&&Ll.update(0);var e=le.length,n=Bn(),i=n-sp>=50,s=e&&le[0].scroll();if(Cu=mp>s?-1:1,Kn||(mp=s),i&&(Ui&&!Nu&&n-Ui>200&&(Ui=0,eo("scrollEnd")),bl=sp,sp=n),Cu<0){for(Jn=e;Jn-- >0;)le[Jn]&&le[Jn].update(0,i);Cu=1}else for(Jn=0;Jn<e;Jn++)le[Jn]&&le[Jn].update(0,i);te.isUpdating=!1}Fl=0},gp=[n_,i_,Mp,yp,Ni+Dl,Ni+Rl,Ni+Il,Ni+Pl,"display","flexShrink","float","zIndex","gridColumnStart","gridColumnEnd","gridRowStart","gridRowEnd","gridArea","justifySelf","alignSelf","placeSelf","order"],Ru=gp.concat([Js,Ks,"boxSizing","max"+ia,"max"+bp,"position",Ni,on,on+Il,on+Rl,on+Dl,on+Pl]),HS=function(t,e,n){na(n);var i=t._gsap;if(i.spacerIsNative)na(i.spacerState);else if(t._gsap.swappedIn){var s=e.parentNode;s&&(s.insertBefore(t,e),s.removeChild(e))}t._gsap.swappedIn=!1},lp=function(t,e,n,i){if(!t._gsap.swappedIn){for(var s=gp.length,o=e.style,a=t.style,l;s--;)l=gp[s],o[l]=n[l];o.position=n.position==="absolute"?"absolute":"relative",n.display==="inline"&&(o.display="inline-block"),a[Mp]=a[yp]="auto",o.flexBasis=n.flexBasis||"auto",o.overflow="visible",o.boxSizing="border-box",o[Js]=Du(t,Un)+pn,o[Ks]=Du(t,sn)+pn,o[on]=a[Ni]=a[i_]=a[n_]="0",na(i),a[Js]=a["max"+ia]=n[Js],a[Ks]=a["max"+bp]=n[Ks],a[on]=n[on],t.parentNode!==e&&(t.parentNode.insertBefore(e,t),e.appendChild(t)),t._gsap.swappedIn=!0}},GS=/([A-Z])/g,na=function(t){if(t){var e=t.t.style,n=t.length,i=0,s,o;for((t.t._gsap||Pt.core.getCache(t.t)).uncache=1;i<n;i+=2)o=t[i+1],s=t[i],o?e[s]=o:e[s]&&e.removeProperty(s.replace(GS,"-$1").toLowerCase())}},Su=function(t){for(var e=Ru.length,n=t.style,i=[],s=0;s<e;s++)i.push(Ru[s],n[Ru[s]]);return i.t=t,i},WS=function(t,e,n){for(var i=[],s=t.length,o=n?8:0,a;o<s;o+=2)a=t[o],i.push(a,a in e?e[a]:t[o+1]);return i.t=t.t,i},Pu={left:0,top:0},Hg=function(t,e,n,i,s,o,a,l,c,u,h,f,d,m){kn(t)&&(t=t(l)),Si(t)&&t.substr(0,3)==="max"&&(t=f+(t.charAt(4)==="="?wu("0"+t.substr(3),n):0));var g=d?d.time():0,_,p,y;if(d&&d.seek(0),isNaN(t)||(t=+t),El(t))d&&(t=Pt.utils.mapRange(d.scrollTrigger.start,d.scrollTrigger.end,0,f,t)),a&&Au(a,n,i,!0);else{kn(e)&&(e=e(l));var v=(t||"0").split(" "),M,T,E,w;y=Zn(e,l)||Se,M=Lr(y)||{},(!M||!M.left&&!M.top)&&Fi(y).display==="none"&&(w=y.style.display,y.style.display="block",M=Lr(y),w?y.style.display=w:y.style.removeProperty("display")),T=wu(v[0],M[i.d]),E=wu(v[1]||"0",n),t=M[i.p]-c[i.p]-u+T+s-E,a&&Au(a,E,i,n-E<20||a._isStart&&E>20),n-=n-E}if(m&&(l[m]=t||-.001,t<0&&(t=0)),o){var R=t+n,x=o._isStart;_="scroll"+i.d2,Au(o,R,i,x&&R>20||!x&&(h?Math.max(Se[_],Ti[_]):o.parentNode[_])<=R+1),h&&(c=Lr(a),h&&(o.style[i.op.p]=c[i.op.p]-i.op.m-o._offset+pn))}return d&&y&&(_=Lr(y),d.seek(f),p=Lr(y),d._caScrollDist=_[i.p]-p[i.p],t=t/d._caScrollDist*f),d&&d.seek(g),d?t:Math.round(t)},XS=/(webkit|moz|length|cssText|inset)/i,Gg=function(t,e,n,i){if(t.parentNode!==e){var s=t.style,o,a;if(e===Se){t._stOrig=s.cssText,a=Fi(t);for(o in a)!+o&&!XS.test(o)&&a[o]&&typeof s[o]=="string"&&o!=="0"&&(s[o]=a[o]);s.top=n,s.left=i}else s.cssText=t._stOrig;Pt.core.getCache(t).uncache=1,e.appendChild(t)}},h_=function(t,e,n){var i=e,s=i;return function(o){var a=Math.round(t());return a!==i&&a!==s&&Math.abs(a-i)>3&&Math.abs(a-s)>3&&(o=a,n&&n()),s=i,i=Math.round(o),i}},Tu=function(t,e,n){var i={};i[e.p]="+="+n,Pt.set(t,i)},Wg=function(t,e){var n=Ir(t,e),i="_scroll"+e.p2,s=function o(a,l,c,u,h){var f=o.tween,d=l.onComplete,m={};c=c||n();var g=h_(n,c,function(){f.kill(),o.tween=0});return h=u&&h||0,u=u||a-c,f&&f.kill(),l[i]=a,l.inherit=!1,l.modifiers=m,m[i]=function(){return g(c+u*f.ratio+h*f.ratio*f.ratio)},l.onUpdate=function(){ae.cache++,o.tween&&Nr()},l.onComplete=function(){o.tween=0,d&&d.call(f)},f=o.tween=Pt.to(t,l),f};return t[i]=n,n.wheelHandler=function(){return s.tween&&s.tween.kill()&&(s.tween=0)},yn(t,"wheel",n.wheelHandler),te.isTouch&&yn(t,"touchmove",n.wheelHandler),s},te=(function(){function r(e,n){Qo||r.register(Pt)||console.warn("Please gsap.registerPlugin(ScrollTrigger)"),dp(this),this.init(e,n)}var t=r.prototype;return t.init=function(n,i){if(this.progress=this.start=0,this.vars&&this.kill(!0,!0),!Sl){this.update=this.refresh=this.kill=lr;return}n=Og(Si(n)||El(n)||n.nodeType?{trigger:n}:n,Mu);var s=n,o=s.onUpdate,a=s.toggleClass,l=s.id,c=s.onToggle,u=s.onRefresh,h=s.scrub,f=s.trigger,d=s.pin,m=s.pinSpacing,g=s.invalidateOnRefresh,_=s.anticipatePin,p=s.onScrubComplete,y=s.onSnapComplete,v=s.once,M=s.snap,T=s.pinReparent,E=s.pinSpacer,w=s.containerAnimation,R=s.fastScrollEnd,x=s.preventOverlaps,b=n.horizontal||n.containerAnimation&&n.horizontal!==!1?Un:sn,L=!h&&h!==0,F=Zn(n.scroller||de),k=Pt.core.getCache(F),H=Qs(F),Y=("pinType"in n?n.pinType:Dr(F,"pinType")||H&&"fixed")==="fixed",W=[n.onEnter,n.onLeave,n.onEnterBack,n.onLeaveBack],G=L&&n.toggleActions.split(" "),Z="markers"in n?n.markers:Mu.markers,it=H?0:parseFloat(Fi(F)["border"+b.p2+ia])||0,N=this,nt=n.onRefreshInit&&function(){return n.onRefreshInit(N)},Lt=FS(F,H,b),Ot=US(F,H),Bt=0,Zt=0,K=0,j=Ir(F,b),ht,Ct,gt,Vt,oe,_t,Nt,Gt,Ut,q,O,me,ee,Wt,At,P,S,C,I,B,z,rt,Q,vt,yt,et,lt,St,Rt,ct,pt,D,ut,ot,mt,st,tt,ft,Ht;if(N._startClamp=N._endClamp=!1,N._dir=b,_*=45,N.scroller=F,N.scroll=w?w.time.bind(w):j,Vt=j(),N.vars=n,i=i||n.animation,"refreshPriority"in n&&(Zg=1,n.refreshPriority===-9999&&(Ll=N)),k.tweenScroll=k.tweenScroll||{top:Wg(F,sn),left:Wg(F,Un)},N.tweenTo=ht=k.tweenScroll[b.p],N.scrubDuration=function(Mt){ut=El(Mt)&&Mt,ut?D?D.duration(Mt):D=Pt.to(i,{ease:"expo",totalProgress:"+=0",inherit:!1,duration:ut,paused:!0,onComplete:function(){return p&&p(N)}}):(D&&D.progress(1).kill(),D=0)},i&&(i.vars.lazy=!1,i._initted&&!N.isReverted||i.vars.immediateRender!==!1&&n.immediateRender!==!1&&i.duration()&&i.render(0,!0,!0),N.animation=i.pause(),i.scrollTrigger=N,N.scrubDuration(h),ct=0,l||(l=i.vars.id)),M&&((!Zs(M)||M.push)&&(M={snapTo:M}),"scrollBehavior"in Se.style&&Pt.set(H?[Se,Ti]:F,{scrollBehavior:"auto"}),ae.forEach(function(Mt){return kn(Mt)&&Mt.target===(H?Oe.scrollingElement||Ti:F)&&(Mt.smooth=!1)}),gt=kn(M.snapTo)?M.snapTo:M.snapTo==="labels"?BS(i):M.snapTo==="labelsDirectional"?kS(i):M.directional!==!1?function(Mt,Kt){return Sp(M.snapTo)(Mt,Bn()-Zt<500?0:Kt.direction)}:Pt.utils.snap(M.snapTo),ot=M.duration||{min:.1,max:2},ot=Zs(ot)?Al(ot.min,ot.max):Al(ot,ot),mt=Pt.delayedCall(M.delay||ut/2||.1,function(){var Mt=j(),Kt=Bn()-Zt<500,zt=ht.tween;if((Kt||Math.abs(N.getVelocity())<10)&&!zt&&!Nu&&Bt!==Mt){var Qt=(Mt-_t)/Wt,je=i&&!L?i.totalProgress():Qt,ce=Kt?0:(je-pt)/(Bn()-bl)*1e3||0,Ee=Pt.utils.clamp(-Qt,1-Qt,Ko(ce/2)*ce/.185),nn=Qt+(M.inertia===!1?0:Ee),Be,Ie,xe=M,jn=xe.onStart,Ae=xe.onInterrupt,Rn=xe.onComplete;if(Be=gt(nn,N),El(Be)||(Be=nn),Ie=Math.max(0,Math.round(_t+Be*Wt)),Mt<=Nt&&Mt>=_t&&Ie!==Mt){if(zt&&!zt._initted&&zt.data<=Ko(Ie-Mt))return;M.inertia===!1&&(Ee=Be-Qt),ht(Ie,{duration:ot(Ko(Math.max(Ko(nn-je),Ko(Be-je))*.185/ce/.05||0)),ease:M.ease||"power3",data:Ko(Ie-Mt),onInterrupt:function(){return mt.restart(!0)&&Ae&&Ae(N)},onComplete:function(){N.update(),Bt=j(),i&&!L&&(D?D.resetTo("totalProgress",Be,i._tTime/i._tDur):i.progress(Be)),ct=pt=i&&!L?i.totalProgress():N.progress,y&&y(N),Rn&&Rn(N)}},Mt,Ee*Wt,Ie-Mt-Ee*Wt),jn&&jn(N,ht.tween)}}else N.isActive&&Bt!==Mt&&mt.restart(!0)}).pause()),l&&(pp[l]=N),f=N.trigger=Zn(f||d!==!0&&d),Ht=f&&f._gsap&&f._gsap.stRevert,Ht&&(Ht=Ht(N)),d=d===!0?f:Zn(d),Si(a)&&(a={targets:f,className:a}),d&&(m===!1||m===Ni||(m=!m&&d.parentNode&&d.parentNode.style&&Fi(d.parentNode).display==="flex"?!1:on),N.pin=d,Ct=Pt.core.getCache(d),Ct.spacer?At=Ct.pinState:(E&&(E=Zn(E),E&&!E.nodeType&&(E=E.current||E.nativeElement),Ct.spacerIsNative=!!E,E&&(Ct.spacerState=Su(E))),Ct.spacer=C=E||Oe.createElement("div"),C.classList.add("pin-spacer"),l&&C.classList.add("pin-spacer-"+l),Ct.pinState=At=Su(d)),n.force3D!==!1&&Pt.set(d,{force3D:!0}),N.spacer=C=Ct.spacer,Rt=Fi(d),vt=Rt[m+b.os2],B=Pt.getProperty(d),z=Pt.quickSetter(d,b.a,pn),lp(d,C,Rt),S=Su(d)),Z){me=Zs(Z)?Og(Z,Bg):Bg,q=bu("scroller-start",l,F,b,me,0),O=bu("scroller-end",l,F,b,me,0,q),I=q["offset"+b.op.d2];var _e=Zn(Dr(F,"content")||F);Gt=this.markerStart=bu("start",l,_e,b,me,I,0,w),Ut=this.markerEnd=bu("end",l,_e,b,me,I,0,w),w&&(ft=Pt.quickSetter([Gt,Ut],b.a,pn)),!Y&&!(Zi.length&&Dr(F,"fixedMarkers")===!0)&&(OS(H?Se:F),Pt.set([q,O],{force3D:!0}),et=Pt.quickSetter(q,b.a,pn),St=Pt.quickSetter(O,b.a,pn))}if(w){var Tt=w.vars.onUpdate,Ft=w.vars.onUpdateParams;w.eventCallback("onUpdate",function(){N.update(0,0,1),Tt&&Tt.apply(w,Ft||[])})}if(N.previous=function(){return le[le.indexOf(N)-1]},N.next=function(){return le[le.indexOf(N)+1]},N.revert=function(Mt,Kt){if(!Kt)return N.kill(!0);var zt=Mt!==!1||!N.enabled,Qt=On;zt!==N.isReverted&&(zt&&(st=Math.max(j(),N.scroll.rec||0),K=N.progress,tt=i&&i.progress()),Gt&&[Gt,Ut,q,O].forEach(function(je){return je.style.display=zt?"none":"block"}),zt&&(On=N,N.update(zt)),d&&(!T||!N.isActive)&&(zt?HS(d,C,At):lp(d,C,Fi(d),yt)),zt||N.update(zt),On=Qt,N.isReverted=zt)},N.refresh=function(Mt,Kt,zt,Qt){if(!((On||!N.enabled)&&!Kt)){if(d&&Mt&&Ui){yn(r,"scrollEnd",s_);return}!Kn&&nt&&nt(N),On=N,ht.tween&&!zt&&(ht.tween.kill(),ht.tween=0),D&&D.pause(),g&&i&&(i.revert({kill:!1}).invalidate(),i.getChildren?i.getChildren(!0,!0,!1).forEach(function(wt){return wt.vars.immediateRender&&wt.render(0,!0,!0)}):i.vars.immediateRender&&i.render(0,!0,!0)),N.isReverted||N.revert(!0,!0),N._subPinOffset=!1;var je=Lt(),ce=Ot(),Ee=w?w.duration():cr(F,b),nn=Wt<=.01||!Wt,Be=0,Ie=Qt||0,xe=Zs(zt)?zt.end:n.end,jn=n.endTrigger||f,Ae=Zs(zt)?zt.start:n.start||(n.start===0||!f?0:d?"0 0":"0 100%"),Rn=N.pinnedContainer=n.pinnedContainer&&Zn(n.pinnedContainer,N),ai=f&&Math.max(0,le.indexOf(N))||0,an=ai,ln,mn,hr,io,gn,A,V,J,$,X,dt,Et,xt;for(Z&&Zs(zt)&&(Et=Pt.getProperty(q,b.p),xt=Pt.getProperty(O,b.p));an-- >0;)A=le[an],A.end||A.refresh(0,1)||(On=N),V=A.pin,V&&(V===f||V===d||V===Rn)&&!A.isReverted&&(X||(X=[]),X.unshift(A),A.revert(!0,!0)),A!==le[an]&&(ai--,an--);for(kn(Ae)&&(Ae=Ae(N)),Ae=Lg(Ae,"start",N),_t=Hg(Ae,f,je,b,j(),Gt,q,N,ce,it,Y,Ee,w,N._startClamp&&"_startClamp")||(d?-.001:0),kn(xe)&&(xe=xe(N)),Si(xe)&&!xe.indexOf("+=")&&(~xe.indexOf(" ")?xe=(Si(Ae)?Ae.split(" ")[0]:"")+xe:(Be=wu(xe.substr(2),je),xe=Si(Ae)?Ae:(w?Pt.utils.mapRange(0,w.duration(),w.scrollTrigger.start,w.scrollTrigger.end,_t):_t)+Be,jn=f)),xe=Lg(xe,"end",N),Nt=Math.max(_t,Hg(xe||(jn?"100% 0":Ee),jn,je,b,j()+Be,Ut,O,N,ce,it,Y,Ee,w,N._endClamp&&"_endClamp"))||-.001,Be=0,an=ai;an--;)A=le[an]||{},V=A.pin,V&&A.start-A._pinPush<=_t&&!w&&A.end>0&&(ln=A.end-(N._startClamp?Math.max(0,A.start):A.start),(V===f&&A.start-A._pinPush<_t||V===Rn)&&isNaN(Ae)&&(Be+=ln*(1-A.progress)),V===d&&(Ie+=ln));if(_t+=Be,Nt+=Be,N._startClamp&&(N._startClamp+=Be),N._endClamp&&!Kn&&(N._endClamp=Nt||-.001,Nt=Math.min(Nt,cr(F,b))),Wt=Nt-_t||(_t-=.01)&&.001,nn&&(K=Pt.utils.clamp(0,1,Pt.utils.normalize(_t,Nt,st))),N._pinPush=Ie,Gt&&Be&&(ln={},ln[b.a]="+="+Be,Rn&&(ln[b.p]="-="+j()),Pt.set([Gt,Ut],ln)),d&&!(fp&&N.end>=cr(F,b)))ln=Fi(d),io=b===sn,hr=j(),rt=parseFloat(B(b.a))+Ie,!Ee&&Nt>1&&(dt=(H?Oe.scrollingElement||Ti:F).style,dt={style:dt,value:dt["overflow"+b.a.toUpperCase()]},H&&Fi(Se)["overflow"+b.a.toUpperCase()]!=="scroll"&&(dt.style["overflow"+b.a.toUpperCase()]="scroll")),lp(d,C,ln),S=Su(d),mn=Lr(d,!0),J=Y&&Ir(F,io?Un:sn)(),m?(yt=[m+b.os2,Wt+Ie+pn],yt.t=C,an=m===on?Du(d,b)+Wt+Ie:0,an&&(yt.push(b.d,an+pn),C.style.flexBasis!=="auto"&&(C.style.flexBasis=an+pn)),na(yt),Rn&&le.forEach(function(wt){wt.pin===Rn&&wt.vars.pinSpacing!==!1&&(wt._subPinOffset=!0)}),Y&&j(st)):(an=Du(d,b),an&&C.style.flexBasis!=="auto"&&(C.style.flexBasis=an+pn)),Y&&(gn={top:mn.top+(io?hr-_t:J)+pn,left:mn.left+(io?J:hr-_t)+pn,boxSizing:"border-box",position:"fixed"},gn[Js]=gn["max"+ia]=Math.ceil(mn.width)+pn,gn[Ks]=gn["max"+bp]=Math.ceil(mn.height)+pn,gn[Ni]=gn[Ni+Il]=gn[Ni+Rl]=gn[Ni+Dl]=gn[Ni+Pl]="0",gn[on]=ln[on],gn[on+Il]=ln[on+Il],gn[on+Rl]=ln[on+Rl],gn[on+Dl]=ln[on+Dl],gn[on+Pl]=ln[on+Pl],P=WS(At,gn,T),Kn&&j(0)),i?($=i._initted,ip(1),i.render(i.duration(),!0,!0),Q=B(b.a)-rt+Wt+Ie,lt=Math.abs(Wt-Q)>1,Y&&lt&&P.splice(P.length-2,2),i.render(0,!0,!0),$||i.invalidate(!0),i.parent||i.totalTime(i.totalTime()),ip(0)):Q=Wt,dt&&(dt.value?dt.style["overflow"+b.a.toUpperCase()]=dt.value:dt.style.removeProperty("overflow-"+b.a));else if(f&&j()&&!w)for(mn=f.parentNode;mn&&mn!==Se;)mn._pinOffset&&(_t-=mn._pinOffset,Nt-=mn._pinOffset),mn=mn.parentNode;X&&X.forEach(function(wt){return wt.revert(!1,!0)}),N.start=_t,N.end=Nt,Vt=oe=Kn?st:j(),!w&&!Kn&&(Vt<st&&j(st),N.scroll.rec=0),N.revert(!1,!0),Zt=Bn(),mt&&(Bt=-1,mt.restart(!0)),On=0,i&&L&&(i._initted||tt)&&i.progress()!==tt&&i.progress(tt||0,!0).render(i.time(),!0,!0),(nn||K!==N.progress||w||g||i&&!i._initted)&&(i&&!L&&(i._initted||K||i.vars.immediateRender!==!1)&&i.totalProgress(w&&_t<-.001&&!K?Pt.utils.normalize(_t,Nt,0):K,!0),N.progress=nn||(Vt-_t)/Wt===K?0:K),d&&m&&(C._pinOffset=Math.round(N.progress*Q)),D&&D.invalidate(),isNaN(Et)||(Et-=Pt.getProperty(q,b.p),xt-=Pt.getProperty(O,b.p),Tu(q,b,Et),Tu(Gt,b,Et-(Qt||0)),Tu(O,b,xt),Tu(Ut,b,xt-(Qt||0))),nn&&!Kn&&N.update(),u&&!Kn&&!ee&&(ee=!0,u(N),ee=!1)}},N.getVelocity=function(){return(j()-oe)/(Bn()-bl)*1e3||0},N.endAnimation=function(){Ml(N.callbackAnimation),i&&(D?D.progress(1):i.paused()?L||Ml(i,N.direction<0,1):Ml(i,i.reversed()))},N.labelToScroll=function(Mt){return i&&i.labels&&(_t||N.refresh()||_t)+i.labels[Mt]/i.duration()*Wt||0},N.getTrailing=function(Mt){var Kt=le.indexOf(N),zt=N.direction>0?le.slice(0,Kt).reverse():le.slice(Kt+1);return(Si(Mt)?zt.filter(function(Qt){return Qt.vars.preventOverlaps===Mt}):zt).filter(function(Qt){return N.direction>0?Qt.end<=_t:Qt.start>=Nt})},N.update=function(Mt,Kt,zt){if(!(w&&!zt&&!Mt)){var Qt=Kn===!0?st:N.scroll(),je=Mt?0:(Qt-_t)/Wt,ce=je<0?0:je>1?1:je||0,Ee=N.progress,nn,Be,Ie,xe,jn,Ae,Rn,ai;if(Kt&&(oe=Vt,Vt=w?j():Qt,M&&(pt=ct,ct=i&&!L?i.totalProgress():ce)),_&&d&&!On&&!_u&&Ui&&(!ce&&_t<Qt+(Qt-oe)/(Bn()-bl)*_?ce=1e-4:ce===1&&Nt>Qt+(Qt-oe)/(Bn()-bl)*_&&(ce=.9999)),ce!==Ee&&N.enabled){if(nn=N.isActive=!!ce&&ce<1,Be=!!Ee&&Ee<1,Ae=nn!==Be,jn=Ae||!!ce!=!!Ee,N.direction=ce>Ee?1:-1,N.progress=ce,jn&&!On&&(Ie=ce&&!Ee?0:ce===1?1:Ee===1?2:3,L&&(xe=!Ae&&G[Ie+1]!=="none"&&G[Ie+1]||G[Ie],ai=i&&(xe==="complete"||xe==="reset"||xe in i))),x&&(Ae||ai)&&(ai||h||!i)&&(kn(x)?x(N):N.getTrailing(x).forEach(function(hr){return hr.endAnimation()})),L||(D&&!On&&!_u?(D._dp._time-D._start!==D._time&&D.render(D._dp._time-D._start),D.resetTo?D.resetTo("totalProgress",ce,i._tTime/i._tDur):(D.vars.totalProgress=ce,D.invalidate().restart())):i&&i.totalProgress(ce,!!(On&&(Zt||Mt)))),d){if(Mt&&m&&(C.style[m+b.os2]=vt),!Y)z(Tl(rt+Q*ce));else if(jn){if(Rn=!Mt&&ce>Ee&&Nt+1>Qt&&Qt+1>=cr(F,b),T)if(!Mt&&(nn||Rn)){var an=Lr(d,!0),ln=Qt-_t;Gg(d,Se,an.top+(b===sn?ln:0)+pn,an.left+(b===sn?0:ln)+pn)}else Gg(d,C);na(nn||Rn?P:S),lt&&ce<1&&nn||z(rt+(ce===1&&!Rn?Q:0))}}M&&!ht.tween&&!On&&!_u&&mt.restart(!0),a&&(Ae||v&&ce&&(ce<1||!rp))&&Nl(a.targets).forEach(function(hr){return hr.classList[nn||v?"add":"remove"](a.className)}),o&&!L&&!Mt&&o(N),jn&&!On?(L&&(ai&&(xe==="complete"?i.pause().totalProgress(1):xe==="reset"?i.restart(!0).pause():xe==="restart"?i.restart(!0):i[xe]()),o&&o(N)),(Ae||!rp)&&(c&&Ae&&op(N,c),W[Ie]&&op(N,W[Ie]),v&&(ce===1?N.kill(!1,1):W[Ie]=0),Ae||(Ie=ce===1?1:3,W[Ie]&&op(N,W[Ie]))),R&&!nn&&Math.abs(N.getVelocity())>(El(R)?R:2500)&&(Ml(N.callbackAnimation),D?D.progress(1):Ml(i,xe==="reverse"?1:!ce,1))):L&&o&&!On&&o(N)}if(St){var mn=w?Qt/w.duration()*(w._caScrollDist||0):Qt;et(mn+(q._isFlipped?1:0)),St(mn)}ft&&ft(-Qt/w.duration()*(w._caScrollDist||0))}},N.enable=function(Mt,Kt){N.enabled||(N.enabled=!0,yn(F,"resize",wl),H||yn(F,"scroll",jo),nt&&yn(r,"refreshInit",nt),Mt!==!1&&(N.progress=K=0,Vt=oe=Bt=j()),Kt!==!1&&N.refresh())},N.getTween=function(Mt){return Mt&&ht?ht.tween:D},N.setPositions=function(Mt,Kt,zt,Qt){if(w){var je=w.scrollTrigger,ce=w.duration(),Ee=je.end-je.start;Mt=je.start+Ee*Mt/ce,Kt=je.start+Ee*Kt/ce}N.refresh(!1,!1,{start:Ng(Mt,zt&&!!N._startClamp),end:Ng(Kt,zt&&!!N._endClamp)},Qt),N.update()},N.adjustPinSpacing=function(Mt){if(yt&&Mt){var Kt=yt.indexOf(b.d)+1;yt[Kt]=parseFloat(yt[Kt])+Mt+pn,yt[1]=parseFloat(yt[1])+Mt+pn,na(yt)}},N.disable=function(Mt,Kt){if(Mt!==!1&&N.revert(!0,!0),N.enabled&&(N.enabled=N.isActive=!1,Kt||D&&D.pause(),st=0,Ct&&(Ct.uncache=1),nt&&vn(r,"refreshInit",nt),mt&&(mt.pause(),ht.tween&&ht.tween.kill()&&(ht.tween=0)),!H)){for(var zt=le.length;zt--;)if(le[zt].scroller===F&&le[zt]!==N)return;vn(F,"resize",wl),H||vn(F,"scroll",jo)}},N.kill=function(Mt,Kt){N.disable(Mt,Kt),D&&!Kt&&D.kill(),l&&delete pp[l];var zt=le.indexOf(N);zt>=0&&le.splice(zt,1),zt===Jn&&Cu>0&&Jn--,zt=0,le.forEach(function(Qt){return Qt.scroller===N.scroller&&(zt=1)}),zt||Kn||(N.scroll.rec=0),i&&(i.scrollTrigger=null,Mt&&i.revert({kill:!1}),Kt||i.kill()),Gt&&[Gt,Ut,q,O].forEach(function(Qt){return Qt.parentNode&&Qt.parentNode.removeChild(Qt)}),Ll===N&&(Ll=0),d&&(Ct&&(Ct.uncache=1),zt=0,le.forEach(function(Qt){return Qt.pin===d&&zt++}),zt||(Ct.spacer=0)),n.onKill&&n.onKill(N)},le.push(N),N.enable(!1,!1),Ht&&Ht(N),i&&i.add&&!Wt){var re=N.update;N.update=function(){N.update=re,ae.cache++,_t||Nt||N.refresh()},Pt.delayedCall(.01,N.update),Wt=.01,_t=Nt=0}else N.refresh();d&&VS()},r.register=function(n){return Qo||(Pt=n||Qg(),jg()&&window.document&&r.enable(),Qo=Sl),Qo},r.defaults=function(n){if(n)for(var i in n)Mu[i]=n[i];return Mu},r.disable=function(n,i){Sl=0,le.forEach(function(o){return o[i?"kill":"disable"](n)}),vn(de,"wheel",jo),vn(Oe,"scroll",jo),clearInterval(gu),vn(Oe,"touchcancel",lr),vn(Se,"touchstart",lr),vu(vn,Oe,"pointerdown,touchstart,mousedown",Fg),vu(vn,Oe,"pointerup,touchend,mouseup",Ug),Iu.kill(),xu(vn);for(var s=0;s<ae.length;s+=3)yu(vn,ae[s],ae[s+1]),yu(vn,ae[s],ae[s+2])},r.enable=function(){if(de=window,Oe=document,Ti=Oe.documentElement,Se=Oe.body,Pt&&(Nl=Pt.utils.toArray,Al=Pt.utils.clamp,dp=Pt.core.context||lr,ip=Pt.core.suppressOverwrites||lr,xp=de.history.scrollRestoration||"auto",mp=de.pageYOffset||0,Pt.core.globals("ScrollTrigger",r),Se)){Sl=1,ea=document.createElement("div"),ea.style.height="100vh",ea.style.position="absolute",c_(),NS(),Ke.register(Pt),r.isTouch=Ke.isTouch,ds=Ke.isTouch&&/(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent),up=Ke.isTouch===1,yn(de,"wheel",jo),_p=[de,Oe,Ti,Se],Pt.matchMedia?(r.matchMedia=function(c){var u=Pt.matchMedia(),h;for(h in c)u.add(h,c[h]);return u},Pt.addEventListener("matchMediaInit",function(){a_(),Tp()}),Pt.addEventListener("matchMediaRevert",function(){return o_()}),Pt.addEventListener("matchMedia",function(){$s(0,1),eo("matchMedia")}),Pt.matchMedia().add("(orientation: portrait)",function(){return ap(),ap})):console.warn("Requires GSAP 3.11.0 or later"),ap(),yn(Oe,"scroll",jo);var n=Se.hasAttribute("style"),i=Se.style,s=i.borderTopStyle,o=Pt.core.Animation.prototype,a,l;for(o.revert||Object.defineProperty(o,"revert",{value:function(){return this.time(-.01,!0)}}),i.borderTopStyle="solid",a=Lr(Se),sn.m=Math.round(a.top+sn.sc())||0,Un.m=Math.round(a.left+Un.sc())||0,s?i.borderTopStyle=s:i.removeProperty("border-top-style"),n||(Se.setAttribute("style",""),Se.removeAttribute("style")),gu=setInterval(kg,250),Pt.delayedCall(.5,function(){return _u=0}),yn(Oe,"touchcancel",lr),yn(Se,"touchstart",lr),vu(yn,Oe,"pointerdown,touchstart,mousedown",Fg),vu(yn,Oe,"pointerup,touchend,mouseup",Ug),hp=Pt.utils.checkPrefix("transform"),Ru.push(hp),Qo=Bn(),Iu=Pt.delayedCall(.2,$s).pause(),ta=[Oe,"visibilitychange",function(){var c=de.innerWidth,u=de.innerHeight;Oe.hidden?(Ig=c,Dg=u):(Ig!==c||Dg!==u)&&wl()},Oe,"DOMContentLoaded",$s,de,"load",$s,de,"resize",wl],xu(yn),le.forEach(function(c){return c.enable(0,1)}),l=0;l<ae.length;l+=3)yu(vn,ae[l],ae[l+1]),yu(vn,ae[l],ae[l+2])}},r.config=function(n){"limitCallbacks"in n&&(rp=!!n.limitCallbacks);var i=n.syncInterval;i&&clearInterval(gu)||(gu=i)&&setInterval(kg,i),"ignoreMobileResize"in n&&(up=r.isTouch===1&&n.ignoreMobileResize),"autoRefreshEvents"in n&&(xu(vn)||xu(yn,n.autoRefreshEvents||"none"),$g=(n.autoRefreshEvents+"").indexOf("resize")===-1)},r.scrollerProxy=function(n,i){var s=Zn(n),o=ae.indexOf(s),a=Qs(s);~o&&ae.splice(o,a?6:2),i&&(a?Zi.unshift(de,i,Se,i,Ti,i):Zi.unshift(s,i))},r.clearMatchMedia=function(n){le.forEach(function(i){return i._ctx&&i._ctx.query===n&&i._ctx.kill(!0,!0)})},r.isInViewport=function(n,i,s){var o=(Si(n)?Zn(n):n).getBoundingClientRect(),a=o[s?Js:Ks]*i||0;return s?o.right-a>0&&o.left+a<de.innerWidth:o.bottom-a>0&&o.top+a<de.innerHeight},r.positionInViewport=function(n,i,s){Si(n)&&(n=Zn(n));var o=n.getBoundingClientRect(),a=o[s?Js:Ks],l=i==null?a/2:i in Lu?Lu[i]*a:~i.indexOf("%")?parseFloat(i)*a/100:parseFloat(i)||0;return s?(o.left+l)/de.innerWidth:(o.top+l)/de.innerHeight},r.killAll=function(n){if(le.slice(0).forEach(function(s){return s.vars.id!=="ScrollSmoother"&&s.kill()}),n!==!0){var i=to.killAll||[];to={},i.forEach(function(s){return s()})}},r})();te.version="3.14.2";te.saveStyles=function(r){return r?Nl(r).forEach(function(t){if(t&&t.style){var e=bi.indexOf(t);e>=0&&bi.splice(e,5),bi.push(t,t.style.cssText,t.getBBox&&t.getAttribute("transform"),Pt.core.getCache(t),dp())}}):bi};te.revert=function(r,t){return Tp(!r,t)};te.create=function(r,t){return new te(r,t)};te.refresh=function(r){return r?wl(!0):(Qo||te.register())&&$s(!0)};te.update=function(r){return++ae.cache&&Nr(r===!0?2:0)};te.clearScrollMemory=l_;te.maxScroll=function(r,t){return cr(r,t?Un:sn)};te.getScrollFunc=function(r,t){return Ir(Zn(r),t?Un:sn)};te.getById=function(r){return pp[r]};te.getAll=function(){return le.filter(function(r){return r.vars.id!=="ScrollSmoother"})};te.isScrolling=function(){return!!Ui};te.snapDirectional=Sp;te.addEventListener=function(r,t){var e=to[r]||(to[r]=[]);~e.indexOf(t)||e.push(t)};te.removeEventListener=function(r,t){var e=to[r],n=e&&e.indexOf(t);n>=0&&e.splice(n,1)};te.batch=function(r,t){var e=[],n={},i=t.interval||.016,s=t.batchMax||1e9,o=function(c,u){var h=[],f=[],d=Pt.delayedCall(i,function(){u(h,f),h=[],f=[]}).pause();return function(m){h.length||d.restart(!0),h.push(m.trigger),f.push(m),s<=h.length&&d.progress(1)}},a;for(a in t)n[a]=a.substr(0,2)==="on"&&kn(t[a])&&a!=="onRefreshInit"?o(a,t[a]):t[a];return kn(s)&&(s=s(),yn(te,"refresh",function(){return s=t.batchMax()})),Nl(r).forEach(function(l){var c={};for(a in n)c[a]=n[a];c.trigger=l,e.push(te.create(c))}),e};var Xg=function(t,e,n,i){return e>i?t(i):e<0&&t(0),n>i?(i-e)/(n-e):n<0?e/(e-n):1},cp=function r(t,e){e===!0?t.style.removeProperty("touch-action"):t.style.touchAction=e===!0?"auto":e?"pan-"+e+(Ke.isTouch?" pinch-zoom":""):"none",t===Ti&&r(Se,e)},Eu={auto:1,scroll:1},qS=function(t){var e=t.event,n=t.target,i=t.axis,s=(e.changedTouches?e.changedTouches[0]:e).target,o=s._gsap||Pt.core.getCache(s),a=Bn(),l;if(!o._isScrollT||a-o._isScrollT>2e3){for(;s&&s!==Se&&(s.scrollHeight<=s.clientHeight&&s.scrollWidth<=s.clientWidth||!(Eu[(l=Fi(s)).overflowY]||Eu[l.overflowX]));)s=s.parentNode;o._isScroll=s&&s!==n&&!Qs(s)&&(Eu[(l=Fi(s)).overflowY]||Eu[l.overflowX]),o._isScrollT=a}(o._isScroll||i==="x")&&(e.stopPropagation(),e._gsapAllow=!0)},u_=function(t,e,n,i){return Ke.create({target:t,capture:!0,debounce:!1,lockAxis:!0,type:e,onWheel:i=i&&qS,onPress:i,onDrag:i,onScroll:i,onEnable:function(){return n&&yn(Oe,Ke.eventTypes[0],Yg,!1,!0)},onDisable:function(){return vn(Oe,Ke.eventTypes[0],Yg,!0)}})},YS=/(input|label|select|textarea)/i,qg,Yg=function(t){var e=YS.test(t.target.tagName);(e||qg)&&(t._gsapAllow=!0,qg=e)},ZS=function(t){Zs(t)||(t={}),t.preventDefault=t.isNormalizer=t.allowClicks=!0,t.type||(t.type="wheel,touch"),t.debounce=!!t.debounce,t.id=t.id||"normalizer";var e=t,n=e.normalizeScrollX,i=e.momentum,s=e.allowNestedScroll,o=e.onRelease,a,l,c=Zn(t.target)||Ti,u=Pt.core.globals().ScrollSmoother,h=u&&u.get(),f=ds&&(t.content&&Zn(t.content)||h&&t.content!==!1&&!h.smooth()&&h.content()),d=Ir(c,sn),m=Ir(c,Un),g=1,_=(Ke.isTouch&&de.visualViewport?de.visualViewport.scale*de.visualViewport.width:de.outerWidth)/de.innerWidth,p=0,y=kn(i)?function(){return i(a)}:function(){return i||2.8},v,M,T=u_(c,t.type,!0,s),E=function(){return M=!1},w=lr,R=lr,x=function(){l=cr(c,sn),R=Al(ds?1:0,l),n&&(w=Al(0,cr(c,Un))),v=js},b=function(){f._gsap.y=Tl(parseFloat(f._gsap.y)+d.offset)+"px",f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+parseFloat(f._gsap.y)+", 0, 1)",d.offset=d.cacheID=0},L=function(){if(M){requestAnimationFrame(E);var Z=Tl(a.deltaY/2),it=R(d.v-Z);if(f&&it!==d.v+d.offset){d.offset=it-d.v;var N=Tl((parseFloat(f&&f._gsap.y)||0)-d.offset);f.style.transform="matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, "+N+", 0, 1)",f._gsap.y=N+"px",d.cacheID=ae.cache,Nr()}return!0}d.offset&&b(),M=!0},F,k,H,Y,W=function(){x(),F.isActive()&&F.vars.scrollY>l&&(d()>l?F.progress(1)&&d(l):F.resetTo("scrollY",l))};return f&&Pt.set(f,{y:"+=0"}),t.ignoreCheck=function(G){return ds&&G.type==="touchmove"&&L(G)||g>1.05&&G.type!=="touchstart"||a.isGesturing||G.touches&&G.touches.length>1},t.onPress=function(){M=!1;var G=g;g=Tl((de.visualViewport&&de.visualViewport.scale||1)/_),F.pause(),G!==g&&cp(c,g>1.01?!0:n?!1:"x"),k=m(),H=d(),x(),v=js},t.onRelease=t.onGestureStart=function(G,Z){if(d.offset&&b(),!Z)Y.restart(!0);else{ae.cache++;var it=y(),N,nt;n&&(N=m(),nt=N+it*.05*-G.velocityX/.227,it*=Xg(m,N,nt,cr(c,Un)),F.vars.scrollX=w(nt)),N=d(),nt=N+it*.05*-G.velocityY/.227,it*=Xg(d,N,nt,cr(c,sn)),F.vars.scrollY=R(nt),F.invalidate().duration(it).play(.01),(ds&&F.vars.scrollY>=l||N>=l-1)&&Pt.to({},{onUpdate:W,duration:it})}o&&o(G)},t.onWheel=function(){F._ts&&F.pause(),Bn()-p>1e3&&(v=0,p=Bn())},t.onChange=function(G,Z,it,N,nt){if(js!==v&&x(),Z&&n&&m(w(N[2]===Z?k+(G.startX-G.x):m()+Z-N[1])),it){d.offset&&b();var Lt=nt[2]===it,Ot=Lt?H+G.startY-G.y:d()+it-nt[1],Bt=R(Ot);Lt&&Ot!==Bt&&(H+=Bt-Ot),d(Bt)}(it||Z)&&Nr()},t.onEnable=function(){cp(c,n?!1:"x"),te.addEventListener("refresh",W),yn(de,"resize",W),d.smooth&&(d.target.style.scrollBehavior="auto",d.smooth=m.smooth=!1),T.enable()},t.onDisable=function(){cp(c,!0),vn(de,"resize",W),te.removeEventListener("refresh",W),T.kill()},t.lockAxis=t.lockAxis!==!1,a=new Ke(t),a.iOS=ds,ds&&!d()&&d(1),ds&&Pt.ticker.add(lr),Y=a._dc,F=Pt.to(a,{ease:"power4",paused:!0,inherit:!1,scrollX:n?"+=0.1":"+=0",scrollY:"+=0.1",modifiers:{scrollY:h_(d,d(),function(){return F.pause()})},onUpdate:Nr,onComplete:Y.vars.onComplete}),a};te.sort=function(r){if(kn(r))return le.sort(r);var t=de.pageYOffset||0;return te.getAll().forEach(function(e){return e._sortY=e.trigger?t+e.trigger.getBoundingClientRect().top:e.start+de.innerHeight}),le.sort(r||function(e,n){return(e.vars.refreshPriority||0)*-1e6+(e.vars.containerAnimation?1e6:e._sortY)-((n.vars.containerAnimation?1e6:n._sortY)+(n.vars.refreshPriority||0)*-1e6)})};te.observe=function(r){return new Ke(r)};te.normalizeScroll=function(r){if(typeof r>"u")return $n;if(r===!0&&$n)return $n.enable();if(r===!1){$n&&$n.kill(),$n=r;return}var t=r instanceof Ke?r:ZS(r);return $n&&$n.target===t.target&&$n.kill(),Qs(t.target)&&($n=t),t};te.core={_getVelocityProp:mu,_inputObserver:u_,_scrollers:ae,_proxies:Zi,bridge:{ss:function(){Ui||eo("scrollStart"),Ui=Bn()},ref:function(){return On}}};Qg()&&Pt.registerPlugin(te);var Ep=Math.PI*2,Fu=class{points=[[],[],[]];cols=164;rows=92;depth=new Float32Array(this.cols*this.rows);light=new Float32Array(this.cols*this.rows);ink=new Uint8Array(this.cols*this.rows);constructor(t=!1){t&&(this.cols=108,this.rows=82,this.depth=new Float32Array(this.cols*this.rows),this.light=new Float32Array(this.cols*this.rows),this.ink=new Uint8Array(this.cols*this.rows));let e=(o,a,l,c,u,h,f,d=0)=>this.points[o].push([a,l,c,u,h,f,d]);for(let o=1;o<85;o++)for(let a=0;a<190;a++){let l=a/190*Ep,c=o/85*Math.PI,u=.68+Math.sin(l*12)*Math.sin(c*9)*.025;e(0,Math.sin(c)*Math.cos(l)*u,Math.cos(c)*u,Math.sin(c)*Math.sin(l)*u,Math.sin(c)*Math.cos(l),Math.cos(c),Math.sin(c)*Math.sin(l),0)}for(let o=0;o<3;o++)for(let a=0;a<400;a++)for(let l=0;l<16;l++){let c=a/400*Ep,u=l/16*Ep,h=1.02+o*.23,f=(h+.055*Math.cos(u))*Math.cos(c),d=(h+.055*Math.cos(u))*Math.sin(c),m=.055*Math.sin(u);if(o===1){let g=d;d=m,m=g}if(o===2){let g=f;f=m,m=g}e(0,f,d,m,Math.cos(c)*Math.cos(u),Math.sin(c)*Math.cos(u),Math.sin(u),o+1)}for(let o=0;o<15;o++){let a=o*1.6;for(let l=0;l<150;l++)for(let c=0;c<9;c++){let u=l/149*Math.PI,h=1.45+c*.012;e(1,Math.cos(u)*h,-.25-Math.sin(u)*h,a,Math.cos(u),-Math.sin(u),.5,o%3)}for(let l=-1;l<=1;l+=2)for(let c=0;c<70;c++)for(let u=0;u<10;u++)e(1,l*(1.45+u*.013),-.25+c*.025,a,l,0,.6,o%3);for(let l=0;l<90;l++)for(let c=0;c<14;c++)e(1,(l/89-.5)*3.3,1.5,a+c*.1,0,-1,.4,3)}let n=document.createElement("canvas");n.width=700,n.height=220;let i=n.getContext("2d");i.fillStyle="white",i.font="900 100px monospace",i.textAlign="center",i.fillText("STAY",350,95),i.fillText("CURIOUS",350,200);let s=i.getImageData(0,0,700,220).data;for(let o=0;o<220;o+=3)for(let a=0;a<700;a+=3)s[(o*700+a)*4+3]>120&&e(2,(a-350)/180,(o-110)/180,0,0,0,1,1);for(let o=0;o<3500;o++){let a=o*2.399963,l=Math.acos(1-2*(o+.5)/3500);e(2,Math.sin(l)*Math.cos(a)*2,Math.cos(l)*2,Math.sin(l)*Math.sin(a)*2,0,0,1,0)}}render(t,e,n,i,s,o){let a=t.canvas.width,l=t.canvas.height,c=this.cols,u=this.rows;this.depth.fill(-1/0),this.light.fill(0),this.ink.fill(0);let h=n,f=o?0:i,d=e===1?Math.sin(h*5)*.09:e===2?.1*Math.sin(f*.12)*(1-h):.55+f*.09+h*1.7,m=e===1||e===2?0:.2+Math.sin(h*3)*.15,g=Math.cos(d),_=Math.sin(d),p=Math.cos(m),y=Math.sin(m);for(let b=0;b<this.points[e].length;b++){let L=this.points[e][b],[F,k,H,Y,W,G,Z]=L;if(e===0){let _t=Math.sin(h*Math.PI)*.7;Z===1&&(F+=_t*1.2),Z===2&&(k-=_t),Z===3&&(H+=_t*2)}if(e===1&&(H-=h*17,H=((H+3)%24+24)%24-3,F+=Math.sin(h*5)*.15),e===2){if(Z===0&&b%3!==0)continue;let _t=Math.min(1,h/.78),Nt=1-_t,Gt=b*2.399,Ut=2+Math.sin(b*7)*.8;F=F*_t+Math.cos(Gt+f*.08)*Ut*Nt,k=k*_t+Math.sin(Gt+f*.08)*Ut*Nt,H=H*Nt+Math.sin(b)*Nt,Z===0&&(F*=1.3,k*=1.3,H=-3+H*.15)}let it=F*g+H*_,N=-F*_+H*g,nt=k*p-N*y,Lt=k*y+N*p,Ot=e===1?2.8:e===2?4.8:4.3-h*.25,Bt=e===1?Lt+Ot:Ot-Lt;if(Bt<.2)continue;let Zt=(e===1?52:e===2?125:98)*(s?.72:1),K=Math.round(c/2+it*Zt*1.5/Bt),j=Math.round(u/2+nt*Zt/Bt);if(K<1||K>=c-1||j<1||j>=u-1)continue;let ht=j*c+K,Ct=-Bt;if(Ct<this.depth[ht])continue;this.depth[ht]=Ct;let gt=Y*g+G*_,Vt=-Y*_+G*g,oe=e===1?Math.max(.15,1-Bt/24):Math.max(.12,gt*-.4+W*-.6+Vt*.65)*.8+.18;this.light[ht]=e===2?Z===1?1:.14:Math.min(1,oe+.2+(Z?.2:0)),this.ink[ht]=Z+1}t.fillStyle="#080b0b",t.fillRect(0,0,a,l);let v=Math.min(a/(c*8),l/(u*12)),M=8*v,T=12*v,E=(a-c*M)/2,w=(l-u*T)/2;t.font=`${Math.max(5,11*v)}px "Space Mono",monospace`,t.textAlign="center",t.textBaseline="middle";let R="\xB7:;-=+*#%@",x=["#35413c","#839a7d","#b2cc9c","#d5e6b7","#f5fad8"];for(let b=0;b<5;b++){t.fillStyle=x[b];for(let L=0;L<this.light.length;L++){let F=this.light[L];if(!F||Math.min(4,Math.floor(F*5))!==b)continue;let k=e===1&&this.ink[L]===4?"\u2500":R[Math.min(9,Math.floor(F*9))];t.fillText(k,E+L%c*M,w+Math.floor(L/c)*T)}}t.strokeStyle="#a9c69525",t.lineWidth=1;for(let[b,L]of[[a*.04,l*.08],[a*.96,l*.08],[a*.04,l*.92],[a*.96,l*.92]])t.beginPath(),t.moveTo(b-8,L),t.lineTo(b+8,L),t.moveTo(b,L-8),t.lineTo(b,L+8),t.stroke();o||(t.fillStyle="#dbffc805",t.fillRect(0,f*15%l,a,2)),t.canvas.dataset.artFrame=String(Number(t.canvas.dataset.artFrame||0)+1),t.canvas.dataset.artReady="true"}};var It={ink:"#232843",shadow:"#303b58",deep:"#405575",rock:"#5a6680",stone:"#aaa0a0",sand:"#d9bd9a",light:"#f8d9ab",roof:"#b15b78",roofLight:"#dc8a91",green:"#4c8172",leaf:"#81ae84",gold:"#f7c576",water:"#75bfc2"};function Cn(r){return(Math.sin(r*127.1+311.7)*43758.5453%1+1)%1}var Uu=class{ctx;r(t,e,n,i,s){this.ctx.fillStyle=s,this.ctx.fillRect(Math.round(t),Math.round(e),Math.ceil(n),Math.ceil(i))}poly(t,e){this.ctx.fillStyle=e,this.ctx.beginPath(),t.forEach(([n,i],s)=>s?this.ctx.lineTo(Math.round(n),Math.round(i)):this.ctx.moveTo(Math.round(n),Math.round(i))),this.ctx.closePath(),this.ctx.fill()}tree(t,e,n=1){let i=this.r.bind(this);i(t-1,e,3,17*n,It.shadow);for(let s=0;s<4;s++){let o=(19-s*3)*n;i(t-o/2,e-8-s*5*n,o,8*n,s%2?It.leaf:It.green),i(t-o/2,e-8-s*5*n,o/3,4*n,"#b3c694")}i(t+3,e+5,8,2,It.ink)}house(t,e,n,i,s=It.roof){let o=this.r.bind(this);o(t+2,e+2,n,i,It.ink),o(t,e,n,i,It.sand),o(t+n*.65,e,n*.35,i,It.stone),o(t+2,e+3,n*.6,2,It.light),this.poly([[t-3,e],[t+n/2,e-n*.42],[t+n+3,e]],s),o(t-3,e,n+6,2,It.ink);for(let a=0;a<Math.floor(n/6);a++)o(t+a*6,e-n*.13,3,1,It.roofLight);for(let a=0;a<Math.floor(n/9);a++)o(t+4+a*9,e+7,3,6,It.ink),o(t+4+a*9,e+8,2,3,It.gold);o(t+n/2-2,e+i-8,5,8,It.shadow),o(t+n/2,e+i-8,1,8,It.light)}tower(t,e,n,i){let s=this.r.bind(this);s(t,e,n,i,It.stone),s(t,e,n*.6,i,It.sand);for(let o=0;o<i;o+=6)for(let a=0;a<n;a+=7)s(t+a+(o%12?3:0),e+o,4,1,"#bcae9c");for(let o=8;o<i;o+=14)s(t+n/2-2,e+o,4,8,It.shadow),s(t+n/2-1,e+o+1,2,4,It.gold);this.poly([[t-4,e],[t+n/2,e-15],[t+n+4,e]],It.roof),s(t+n/2,e-26,1,11,It.ink),this.poly([[t+n/2+1,e-26],[t+n/2+12,e-23],[t+n/2+1,e-20]],It.gold)}cloud(t,e,n){let i=this.r.bind(this);i(t,e,34*n,5*n,"#f6d9bd"),i(t+6*n,e-5*n,20*n,6*n,"#f6d9bd"),i(t+12*n,e-9*n,10*n,6*n,"#f6d9bd"),i(t+4*n,e+4*n,26*n,2*n,"#b9a6ba")}island(t,e,n,i,s,o=!0){let a=this.r.bind(this),l=n/2;this.poly([[t-l,e],[t-l*.8,e+12],[t-l*.45,e+n*.42],[t,e+n*.65],[t+l*.48,e+n*.26],[t+l,e+3]],It.ink),this.ctx.save(),this.ctx.clip();for(let c=0;c<60;c++){let u=t-l+Cn(c+i)*n,h=e+Cn(c*3+i)*n*.45,f=n*(.22+Cn(c)*.2)*(1-(h-e)/(n*.6));a(u,h,Math.max(2,f),3+Cn(c*4)*6,c%3?It.rock:It.shadow)}this.ctx.restore(),this.poly([[t-l,e],[t-l*.65,e-10],[t+l*.2,e-14],[t+l,e],[t+l*.7,e+8],[t-l*.6,e+10]],It.green);for(let c=0;c<80;c++){let u=t-l+Cn(c+i)*n,h=e-5+Cn(c*7)*12;a(u,h,1+Cn(c*8)*3,1,c%4?It.leaf:It.light)}a(t+l*.57,e+3,7,n*.58,It.deep),a(t+l*.58,e+4,4,n*.57,It.water);for(let c=0;c<8;c++){let u=e+5+(c*7+s*9)%(n*.55);a(t+l*.58,u,3,2,"#dcf7da")}o&&(this.house(t-25,e-31,29,30),this.tower(t+8,e-58,17,60),this.house(t+33,e-21,20,21,"#757dab"),this.tree(t-l*.65,e-8,.8),this.tree(t+l*.78,e-1,.6))}render(t,e,n,i,s){this.ctx=t;let o=this.r.bind(this),a=s?0:i;o(0,0,480,300,e===1?"#212b4c":"#52678d");let l=e===1?["#202744","#2d3553","#414763","#65566c","#93737c"]:["#52678d","#6d7f9e","#93a0b5","#bab3bf","#e4c5bd"];for(let h=0;h<60;h++){let f=h/59*4,d=Math.min(3,Math.floor(f)),m=f-d,g=parseInt(l[d].slice(1),16),_=parseInt(l[d+1].slice(1),16),p=y=>Math.round((g>>y&255)*(1-m)+(_>>y&255)*m);o(0,h*5,480,5,`rgb(${p(16)},${p(8)},${p(0)})`)}for(let h=0;h<170;h++){let f=Cn(h)*480,d=Cn(h+500)*190;(e===1||h%5===0)&&(o(f,d,1,h%19?1:2,h%3?"#e8d6b3":"#9eb8c6"),h%29===0&&(o(f-2,d,5,1,"#e8d6b3"),o(f,d-2,1,5,"#e8d6b3")))}let c=e===1?365:92,u=47;for(let h=-14;h<=14;h++){let f=Math.floor(Math.sqrt(196-h*h));o(c-f,u+h,f*2+1,1,It.light)}if(e===1)for(let h=-13;h<=13;h++){let f=Math.floor(Math.sqrt(169-h*h));o(c-7-f,u-3+h,f*2+1,1,"#2d3553")}for(let h=0;h<3;h++){let f=[[0,300]];for(let d=0;d<=480;d+=2){let m=n*(h+1)*70,g=Math.abs(Math.sin((d+m)*.014+h*4))*36+Math.sin((d+m)*.033)*8;f.push([d,155+h*27-g])}f.push([480,300]),this.poly(f,["#7b829d","#5d6c8b","#435b7a"][h]);for(let d=0;d<30;d++){let m=Cn(d+h*700)*480;o(m,150+h*25,2,1,"#b3bac030")}}if(e===0){for(let d=0;d<7;d++)this.cloud((d*94-n*30+a*.25)%640-50,50+d%3*31,.55+d%2*.3);let h=1+n*.6;t.save(),t.translate(300,176),t.scale(h,h),t.translate(-300,-176),this.island(300,174,185,24,a,!1),o(239,160,125,12,It.stone),o(236,157,131,4,It.sand);for(let d=0;d<9;d++)o(240+d*14,157,5,5,It.sand),o(240+d*14,165,10,1,It.light);this.house(250,133,24,25),this.house(279,117,30,40),this.house(316,138,22,21,"#6f7fa2"),this.tower(308,79,17,79),this.tower(345,117,13,43),o(292,145,16,16,It.ink),o(295,142,10,19,It.shadow),o(298,147,3,14,It.gold),o(312,89,9,9,It.light),o(316,91,1,5,It.shadow),o(316,94,3,1,It.shadow),o(232,124,5,32,It.sand);let f=a*.35+n*2;for(let d=0;d<4;d++){let m=f+d*Math.PI/2;this.poly([[234,126],[234+Math.cos(m)*18,126+Math.sin(m)*18],[234+Math.cos(m+.25)*14,126+Math.sin(m+.25)*14]],It.light)}this.tree(226,160,1),this.tree(365,159,.8),this.tree(275,169,.45);for(let d=0;d<12;d++)o(251+d*8,171+Math.sin(d)*2,2,2,d%3?"#f8d9ab":"#dc8a91");o(261,108,67,1,It.ink);for(let d=0;d<8;d++)this.poly([[262+d*8,108],[267+d*8,108],[264+d*8,114]],d%2?It.gold:It.roofLight);t.restore(),this.island(85-n*110,202,65,58,a),this.island(443+n*80,153,58,71,a);for(let d=0;d<18;d++){let m=Cn(d)*480,g=215+Cn(d+50)*70;o(m,g,4,1,"#222f48"),o(m+2,g-2,1,4,"#222f48")}}else if(e===1){let h=n*540;o(0,222,480,78,It.deep);for(let m=0;m<95;m++){let g=Cn(m)*480,_=230+Cn(m+9)*60;o(g,_,3+Cn(m+88)*10,1,m%4?"#597f99":"#b4a6a4")}for(let m=-2;m<13;m++){let g=m*58-h%58;o(g,224,8,76,It.ink),o(g,224,8,2,It.stone),this.poly([[g+8,237],[g+29,254],[g+50,237],[g+50,243],[g+29,261],[g+8,243]],It.shadow)}o(0,211,480,12,It.ink),o(0,211,480,3,It.stone);for(let m=0;m<480;m+=6)o(m,209,2,3,It.sand);let f=140+Math.sin(n*Math.PI)*80;for(let m=0;m<3;m++){let g=f+m*38;o(g,193,35,16,It.roof),o(g+2,190,31,4,It.roofLight);for(let _=0;_<4;_++)o(g+4+_*7,196,4,5,It.gold);o(g+4,209,5,3,It.ink),o(g+26,209,5,3,It.ink)}for(let m=0;m<8;m++){let g=f-4-m*7,_=180-Math.sin(m*.6+a)*3-m*.8;o(g,_,7,4,"#b0a3af")}let d=390-n*180;this.tower(d,139,17,71),this.house(d-25,185,24,25);for(let m=0;m<14;m++){let g=((m*47-h*1.6)%680+680)%680-80;this.tree(g,285,1.6)}for(let m=0;m<24;m++)Math.sin(a*1.4+m)>0&&o(Cn(m)*480,232+Cn(m+99)*60,1,1,It.gold)}else{let h=[[75,160],[145,100],[230,150],[322,95],[397,161],[310,224],[170,234]];t.strokeStyle="#f8d9ab66",t.setLineDash([2,4]),t.lineWidth=1,t.beginPath(),h.forEach(([v,M],T)=>T?t.lineTo(v,M):t.moveTo(v,M)),t.stroke(),t.setLineDash([]),h.forEach(([v,M],T)=>{let E=Math.max(0,1-n*2-T*.04)*100;this.island(v,M+E,45+T%3*9,T*57,a,!0),o(v-3,M-70+E,7,9,It.light);let w=["010110010010111","110001010100111","110001010001110","101101111001001","111100110001110","011100110101010","111001010010010"];for(let R=0;R<15;R++)w[T][R]==="1"&&o(v-1+R%3,M-68+E+Math.floor(R/3),1,1,It.shadow)});let f=Math.max(0,(n-.45)/.55)*(h.length-1),d=Math.min(5,Math.floor(f)),m=f-d,g=h[d],_=h[d+1],p=g[0]+(_[0]-g[0])*m,y=g[1]+(_[1]-g[1])*m+Math.max(0,1-n*2-d*.04)*100*(1-m)+Math.max(0,1-n*2-(d+1)*.04)*100*m-13;o(p-2,y-4,5,5,It.light),o(p-3,y+1,7,6,It.roofLight),o(p-2,y+7,2,3,It.ink),o(p+1,y+7,2,3,It.ink)}t.canvas.dataset.artFrame=String(Number(t.canvas.dataset.artFrame||0)+1),t.canvas.dataset.artReady="true"}};at.registerPlugin(te);function d_(r=!1){let t=document.querySelector(".mt-nullsignal,.mt-bitquest");if(!t)return;let e=matchMedia("(max-width:760px)").matches,n=t.dataset.template==="nullsignal",i=n?new Fu(e):null,s=n?null:new Uu,o=[...t.querySelectorAll("canvas[data-glyph]")].map((p,y)=>{p.width=n?e?800:1400:480,p.height=n?e?640:850:300;let v=p.getContext("2d");return v&&(v.imageSmoothingEnabled=!1),{canvas:p,ctx:v,phase:y,progress:r?[.25,.45,1][y]:0,visible:!1}}),a=[];r||o.forEach(p=>{let y=p.canvas.closest(".gl-sequence"),v=at.timeline({scrollTrigger:{trigger:y,start:"top top",end:()=>`+=${innerHeight*(e?1.65:2.5)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});v.to(p,{progress:1,duration:3,ease:"none"},0),p.phase===0?(v.to(y.querySelector(".gl-hero-copy"),{y:-55,opacity:0,duration:.8},.35),v.to(y.querySelector(".gl-art"),{left:"0%",right:"0%",top:e?"12%":"0%",bottom:e?"5%":"0%",height:e?"75%":"100%",duration:1.4,ease:"power2.inOut"},.6),v.to(y.querySelector(".gl-annotation"),{opacity:0,duration:.5},.3),v.to(y,{"--gl-veil":0,duration:1},.4)):p.phase===1?v.to(y.querySelector(".gl-plate"),{opacity:0,y:-35,duration:.7},1.6):(v.to(y.querySelector(".gl-map-heading"),{opacity:0,y:-40,duration:.7},.2),v.to(y.querySelector(".gl-art"),{top:"0%",duration:1.2},.6)),a.push(v)});let l=performance.now(),c=0,u=0,h=!1,f=(p,y=!1)=>{for(let v of o){if(!v.ctx||!v.visible&&!y)continue;n?i.render(v.ctx,v.phase,v.progress,p,e,r):s.render(v.ctx,v.phase,v.progress,p,r);let M=v.canvas.closest(".gl-sequence")?.querySelector(".gl-progress-label");M&&(M.textContent=`${String(Math.round(v.progress*100)).padStart(3,"0")} / 100`),v.canvas.dataset.scrollProgress=v.progress.toFixed(3)}},d=()=>{!h&&!document.hidden&&!c&&o.some(p=>p.visible)&&!r&&(c=requestAnimationFrame(m))};function m(p){c=0,!(h||document.hidden)&&(p-u>=50&&(f((p-l)*.001),u=p),d())}let g=new IntersectionObserver(p=>{for(let y of p){let v=o.find(M=>M.canvas===y.target);v&&(v.visible=y.isIntersecting)}d()},{threshold:0});o.forEach(p=>g.observe(p.canvas));let _=()=>{document.hidden?(cancelAnimationFrame(c),c=0):d()};return document.addEventListener("visibilitychange",_),f(0,!0),d(),()=>{h=!0,cancelAnimationFrame(c),g.disconnect(),document.removeEventListener("visibilitychange",_),a.forEach(p=>{p.scrollTrigger?.kill(),p.kill()})}}var sa=class extends Gi{constructor(){super(),this.name="RoomEnvironment";let t=new Ue;t.deleteAttribute("uv");let e=new ye({side:Sn}),n=new ye,i=new Ya(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);let s=new Me(t,e);s.position.set(-.757,13.219,.717),s.scale.set(31.713,28.305,28.591),this.add(s);let o=new Ts(t,n,6),a=new tn;a.position.set(-10.906,2.009,1.846),a.rotation.set(0,-.195,0),a.scale.set(2.328,7.905,4.651),a.updateMatrix(),o.setMatrixAt(0,a.matrix),a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),a.updateMatrix(),o.setMatrixAt(1,a.matrix),a.position.set(6.167,.857,7.803),a.rotation.set(0,.561,0),a.scale.set(3.927,6.285,3.687),a.updateMatrix(),o.setMatrixAt(2,a.matrix),a.position.set(-2.017,.018,6.124),a.rotation.set(0,.333,0),a.scale.set(2.002,4.566,2.064),a.updateMatrix(),o.setMatrixAt(3,a.matrix),a.position.set(2.291,-.756,-2.621),a.rotation.set(0,-.286,0),a.scale.set(1.546,1.552,1.496),a.updateMatrix(),o.setMatrixAt(4,a.matrix),a.position.set(-2.193,-.369,-5.547),a.rotation.set(0,.516,0),a.scale.set(3.875,3.487,2.986),a.updateMatrix(),o.setMatrixAt(5,a.matrix),this.add(o);let l=new Me(t,ra(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new Me(t,ra(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let u=new Me(t,ra(17));u.position.set(14.904,12.198,-1.832),u.scale.set(.15,4.265,6.331),this.add(u);let h=new Me(t,ra(43));h.position.set(-.462,8.89,14.52),h.scale.set(4.38,5.441,.088),this.add(h);let f=new Me(t,ra(20));f.position.set(3.235,11.486,-12.541),f.scale.set(2.5,2,.1),this.add(f);let d=new Me(t,ra(100));d.position.set(0,20,0),d.scale.set(1,.1,1),this.add(d)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}};function ra(r){return new Xa({color:0,emissive:16777215,emissiveIntensity:r})}var Ul=new U;function Oi(r,t,e,n,i,s){let o=2*Math.PI*i/4,a=Math.max(s-2*i,0),l=Math.PI/4;Ul.copy(t),Ul[n]=0,Ul.normalize();let c=.5*o/(o+a),u=1-Ul.angleTo(r)/l;return Math.sign(Ul[e])===1?u*c:a/(o+a)+c+c*(1-u)}var fs=class r extends Ue{constructor(t=1,e=1,n=1,i=2,s=.1){let o=i*2+1;if(s=Math.min(t/2,e/2,n/2,s),super(1,1,1,o,o,o),this.type="RoundedBoxGeometry",this.parameters={width:t,height:e,depth:n,segments:i,radius:s},o===1)return;let a=this.toNonIndexed();this.index=null,this.attributes.position=a.attributes.position,this.attributes.normal=a.attributes.normal,this.attributes.uv=a.attributes.uv;let l=new U,c=new U,u=new U(t,e,n).divideScalar(2).subScalar(s),h=this.attributes.position.array,f=this.attributes.normal.array,d=this.attributes.uv.array,m=h.length/6,g=new U,_=.5/o;for(let p=0,y=0;p<h.length;p+=3,y+=2)switch(l.fromArray(h,p),c.copy(l),c.x-=Math.sign(c.x)*_,c.y-=Math.sign(c.y)*_,c.z-=Math.sign(c.z)*_,c.normalize(),h[p+0]=u.x*Math.sign(l.x)+c.x*s,h[p+1]=u.y*Math.sign(l.y)+c.y*s,h[p+2]=u.z*Math.sign(l.z)+c.z*s,f[p+0]=c.x,f[p+1]=c.y,f[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[y+0]=Oi(g,c,"z","y",s,n),d[y+1]=1-Oi(g,c,"y","z",s,e);break;case 1:g.set(-1,0,0),d[y+0]=1-Oi(g,c,"z","y",s,n),d[y+1]=1-Oi(g,c,"y","z",s,e);break;case 2:g.set(0,1,0),d[y+0]=1-Oi(g,c,"x","z",s,t),d[y+1]=Oi(g,c,"z","x",s,n);break;case 3:g.set(0,-1,0),d[y+0]=1-Oi(g,c,"x","z",s,t),d[y+1]=1-Oi(g,c,"z","x",s,n);break;case 4:g.set(0,0,1),d[y+0]=1-Oi(g,c,"x","y",s,t),d[y+1]=1-Oi(g,c,"y","x",s,e);break;case 5:g.set(0,0,-1),d[y+0]=Oi(g,c,"x","y",s,t),d[y+1]=1-Oi(g,c,"y","x",s,e);break}}static fromJSON(t){return new r(t.width,t.height,t.depth,t.segments,t.radius)}};var no=r=>{let t=Math.sin(r*127.1+31.7)*43758.54;return t-Math.floor(t)},Te=(r,t,e,n=0,i=0,s=0)=>{let o=new Me(r,t);return o.position.set(n,i,s),e.add(o),o};function f_(r=1.25,t=.55){let e=new ze,n=[],i=[],s=[],o=42,a=20;for(let l=0;l<=o;l++)for(let c=0;c<=a;c++){let u=l/o,h=c/a*2-1,f=Math.sin(Math.PI*u)**.5;if(n.push(h*t*f,u*r,.12+Math.sin(Math.PI*u)*.3+h*h*.18-Math.pow(u,5)*.2+Math.sin(u*36+h*4)*.017*f),s.push(c/a,u),l<o&&c<a){let d=l*(a+1)+c,m=d+a+1;i.push(d,m,d+1,m,m+1,d+1)}}return e.setAttribute("position",new fe(n,3)),e.setAttribute("uv",new fe(s,2)),e.setIndex(i),e.computeVertexNormals(),e}function $S(){let r=document.createElement("canvas");r.width=256,r.height=512;let t=r.getContext("2d"),e=t.createLinearGradient(0,0,0,512);e.addColorStop(0,"#783f28"),e.addColorStop(.22,"#bc5845"),e.addColorStop(.65,"#dc8672"),e.addColorStop(1,"#f0ac91"),t.fillStyle=e,t.fillRect(0,0,256,512);for(let i=0;i<256;i+=3)t.strokeStyle=`rgba(91,34,35,${.025+no(i)*.06})`,t.lineWidth=.6,t.beginPath(),t.moveTo(128,0),t.quadraticCurveTo(i*.85,220,i,512),t.stroke();let n=new Es(r);return n.colorSpace=Qe,n}var Ou=class{constructor(t,e,n){this.container=t;this.id=e;this.reduced=n;this.camera.position.set(0,0,7.8);try{this.renderer=new ts({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=Rs,this.renderer.toneMappingExposure=e==="monolith"?.9:e==="floraison"?.95:1.05,this.container.append(this.renderer.domElement),this.renderer.domElement.setAttribute("aria-hidden","true"),this.renderer.domElement.addEventListener("webglcontextlost",this.contextLost);let i=new Qr(this.renderer),s=new sa;this.environment=i.fromScene(s,.025),this.scene.environment=this.environment.texture,s.dispose(),i.dispose(),this.scene.add(new Sr(16777215,e==="floraison"||e==="monolith"?.65:1.3));let o=new mi(e==="offscript"?13238194:16771534,e==="floraison"||e==="monolith"?1.8:3.5);o.position.set(3,5,5),this.scene.add(o);let a=new mi(e==="aether"?16757901:e==="offscript"?12175359:16764589,e==="floraison"||e==="monolith"?1.1:3);a.position.set(-4,1,-1),this.scene.add(a);let l=new mi(16777215,e==="floraison"||e==="monolith"?.6:1.3);l.position.set(-2,-2,4),this.scene.add(l),this.scene.add(this.root),e==="aether"?this.headphones():e==="offscript"?this.sculpture():e==="floraison"?this.flower():this.architecture();let c=new ResizeObserver(()=>this.resize());c.observe(t),this.observers.push(c);let u=new IntersectionObserver(h=>{this.visible=h[0].isIntersecting});u.observe(t),this.observers.push(u),n||window.addEventListener("pointermove",this.pointer,{passive:!0}),this.resize()}catch{this.fallback()}}container;id;reduced;pose={turn:0,explode:0,bloom:.65,lift:0,scale:1,roll:0};renderer;scene=new Gi;camera=new cn(33,1,.1,60);root=new ne;visible=!0;lost=!1;disposed=!1;lastFrame=-1;observers=[];petals=[];cups=[];band;shells=[];particles;objects=[];environment;textures=[];tilt={x:0,y:0};pointer=t=>{this.tilt.x=(t.clientX/innerWidth-.5)*.12,this.tilt.y=(t.clientY/innerHeight-.5)*.08};contextLost=t=>{t.preventDefault(),this.lost=!0,this.fallback()};fallback(){if(!this.container.querySelector(".scene-fallback")){let t=document.createElement("div");t.className="scene-fallback",this.container.append(t)}this.renderer&&(this.renderer.domElement.style.display="none")}headphones(){let t=new ye({color:"#cbd1ce",metalness:1,roughness:.22}),e=new ye({color:"#a8aaa4",metalness:.9,roughness:.32}),n=new ye({color:"#373b36",roughness:.9,metalness:.05});this.band=new ne,this.root.add(this.band),Te(new bn(1.22,.072,20,100,Math.PI),t,this.band,0,.1);let i=Te(new bn(1.13,.055,16,100,Math.PI),n,this.band,0,.1,-.015);i.scale.z=1.8;for(let u of[-1,1]){let h=new ne;h.position.set(u*1.15,-.39,0),h.rotation.y=-u*.2,h.rotation.z=u*.1,this.root.add(h),this.cups.push(h),Te(new fs(.12,.6,.13,4,.05),t,h,0,.65,-.06);let f=Te(new fs(.68,1.03,.4,5,.2),t,h,0,0,-.12);this.shells.push(f),Te(new fs(.61,.95,.09,5,.18),e,h,0,0,.1),Te(new fs(.5,.82,.08,4,.17),n,h,0,0,.19),Te(new bn(.26,.082,16,64),n,h,0,0,.26).scale.set(.85,1.48,.85),Te(new bn(.255,.008,8,64),e,h,0,0,.28).scale.set(1.12,1.76,1),Te(new Dn(.023,.023,.1,12),t,h,u*.3,-.18,.01).rotation.z=Math.PI/2;for(let g=0;g<5;g++)Te(new Gn(.012,8,6),n,h,(g-2)*.04,-.39,-.325)}this.root.rotation.set(-.12,-.48,-.18),this.root.position.y=.08;let s=document.createElement("canvas");s.width=128,s.height=128;let o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(47,40,26,.2)"),a.addColorStop(1,"rgba(47,40,26,0)"),o.fillStyle=a,o.fillRect(0,0,128,128);let l=new Es(s);this.textures.push(l);let c=new Ro(new Co({map:l,transparent:!0,depthWrite:!1}));c.position.set(0,-1.8,-.5),c.scale.set(3.6,.45,1),this.scene.add(c)}sculpture(){let t=new As({color:"#122bd9",metalness:.45,roughness:.24,clearcoat:1,clearcoatRoughness:.12}),e=new ye({color:"#c9ff54",metalness:.4,roughness:.28}),n=new ye({color:"#ddddcc",metalness:1,roughness:.18}),i=Te(new Wa(.87,.29,160,24,2,3),t,this.root);i.rotation.set(.3,-.2,.2),this.objects.push(i);let s=Te(new bn(1.7,.026,10,100),n,this.root);s.rotation.set(.7,.25,-.3),this.objects.push(s);let o=Te(new Va(.38,1),e,this.root,1.45,1.3,.25);this.objects.push(o);let a=Te(new fs(.43,.43,.43,3,.05),n,this.root,-1.5,-.75,.6);a.rotation.set(.4,.6,.3),this.objects.push(a),this.root.rotation.z=-.25}architecture(){let t=document.createElement("canvas");t.width=t.height=128;let e=t.getContext("2d"),n=e.createImageData(128,128);for(let f=0;f<16384;f++){let d=128+no(f)*35;n.data.set([d,d-4,d-12,255],f*4)}e.putImageData(n,0,0);let i=new Es(t);i.colorSpace=Qe,this.textures.push(i);let s=new ye({map:i,roughness:.86,metalness:0,envMapIntensity:.35}),o=new ye({color:10048316,roughness:.38,metalness:.55}),a=new ye({color:3689543,roughness:.22,metalness:.65}),l=new ye({color:4606275,roughness:.9}),c=new Ue(2.35,.11,2.35),u=new Ue(.11,.32,.11);for(let f=0;f<7;f++){let d=new ne;if(d.userData.level=f,this.root.add(d),Te(new Ue(2.35,.13,.68),s,d,0,0,-.835),Te(new Ue(2.35,.13,.68),s,d,0,0,.835),Te(new Ue(.68,.13,1),s,d,-.835,0,0),Te(new Ue(.68,.13,1),s,d,.835,0,0),f<6){for(let m of[-1.04,1.04])for(let g of[-1.04,1.04])Te(u,s,d,m,.22,g);for(let m=0;m<9;m++)Te(new Ue(.024,.25,.055),o,d,-.94+m*.235,.2,-1.08);Te(new Ue(.055,.25,1.58),a,d,1.06,.2,0)}this.objects.push(d)}Te(c,l,this.root,0,-1.4,0).scale.set(1.3,1,1.3),Te(new Ue(.85,.055,.85),o,this.root,0,-1.3,0);for(let f=0;f<6;f++)Te(new Ue(.8,.05,.13),s,this.root,0,-1.35-f*.04,1.25+f*.13);let h=Te(new Dn(2.1,2.1,.055,80),s,this.root,0,-1.65,0);h.scale.z=.9,this.root.rotation.set(.3,-.6,0)}flower(){let t=$S();this.textures.push(t);let e=new ye({map:t,side:gi,roughness:.9,metalness:0,envMapIntensity:.2}),n=new ne;n.position.y=.45,this.root.add(n);let i=f_();for(let h=0;h<2;h++)for(let f=0;f<6;f++){let d=new ne;d.rotation.z=f/6*Math.PI*2+h*.52,n.add(d);let m=Te(i,e,d),g=1-h*.17;m.scale.set(g,g,g),m.position.set(0,.04+h*.035,h*.19),m.userData.ring=h,m.userData.phase=no(f+h*6),this.petals.push(m)}let s=new ye({color:"#5c4630",roughness:.85}),o=new ye({color:"#dfb45b",roughness:.65});Te(new Gn(.24,32,24),s,n,0,0,.55).scale.z=.55;for(let h=0;h<115;h++){let f=h*2.399963,d=Math.sqrt(h/115)*.28,m=Te(new Gn(.015+no(h)*.007,6,5),h%3?o:s,n,Math.cos(f)*d,Math.sin(f)*d,.58+Math.sqrt(Math.max(0,.078-d*d))*.22);m.scale.z=1.7}let a=new ye({color:"#536742",roughness:.8,side:gi}),l=new Wi([new U(.23,-2.5,-.15),new U(-.14,-1.3,-.13),new U(0,.4,0)]);Te(new ws(l,40,.028,9,!1),a,this.root);for(let h of[-1,1]){let f=Te(f_(.95,.24),a,this.root,0,-1.05+h*.3,-.1);f.rotation.set(.3,h*.6,-h*.9),f.scale.set(.9,1,.6)}let c=new Float32Array(114);for(let h=0;h<38;h++)c[h*3]=(no(h*3)-.5)*4.7,c[h*3+1]=(no(h*3+1)-.5)*4.5,c[h*3+2]=(no(h*3+2)-.5)*2;let u=new ze;u.setAttribute("position",new hn(c,3)),this.particles=new br(u,new Wr({color:"#ae8a57",size:.025,transparent:!0,opacity:.6})),this.scene.add(this.particles),this.root.rotation.set(-.24,.08,-.2),this.root.position.y=.1}resize(){if(!this.renderer||this.disposed)return;let{width:t,height:e}=this.container.getBoundingClientRect();!t||!e||(this.camera.aspect=t/e,this.camera.position.z=this.id==="monolith"?9.3:this.id==="offscript"||this.id==="floraison"?7.4:7.6,this.camera.aspect<.8&&(this.camera.position.z+=.9),this.camera.updateProjectionMatrix(),this.renderer.setSize(t,e,!1),this.render(0))}render(t){if(!this.renderer||!this.visible||this.lost||this.disposed||document.hidden||t>0&&t-this.lastFrame<1/30)return;this.lastFrame=t;let e=this.reduced?0:t,n=this.pose;this.root.scale.setScalar(n.scale),this.id==="aether"?(this.root.rotation.set(-.12+Math.sin(e*.3)*.025+this.tilt.y,-.48+n.turn+this.tilt.x,-.18+n.roll),this.root.position.y=.08+n.lift+Math.sin(e*.7)*.035,this.band.position.y=n.explode*.65,this.cups.forEach((i,s)=>{let o=s===0?-1:1;i.position.x=o*(1.15+n.explode*.55),i.rotation.y=-o*(.2+n.explode*.55)}),this.shells.forEach(i=>{i.position.z=-.12-n.explode*.8})):this.id==="offscript"?(this.root.rotation.set(n.turn*.45+this.tilt.y,n.turn+this.tilt.x,-.25+n.roll),this.root.position.y=n.lift+Math.sin(e*.5)*.05,this.objects.forEach((i,s)=>{s>1&&(i.rotation.y=e*.1+n.turn*(s%2?1:-1))})):this.id==="monolith"?(this.root.rotation.set(.3+n.roll+this.tilt.y,-.6+n.turn+this.tilt.x,0),this.root.position.y=n.lift,this.objects.forEach((i,s)=>{i.position.y=-1.23+s*.43+n.explode*(s-3)*.22,i.rotation.y=Math.sin(s*.7)*.11+n.explode*(s-3)*.06,i.position.x=n.explode*Math.sin(s*.8)*.15})):(this.root.rotation.set(-.24+this.tilt.y+n.turn*.15,.08+n.turn+this.tilt.x,-.2+n.roll),this.root.position.y=.1+n.lift+Math.sin(e*.4)*.025,this.petals.forEach(i=>{let s=i.userData.ring;i.rotation.x=(1-n.bloom)*(1.3-s*.12)+Math.sin(e*.5+i.userData.phase*6)*.018}),this.particles&&(this.particles.rotation.z=n.turn*.12+Math.sin(e*.1)*.03)),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed=!0,this.observers.forEach(n=>n.disconnect()),window.removeEventListener("pointermove",this.pointer),this.renderer?.domElement.removeEventListener("webglcontextlost",this.contextLost);let t=new Set,e=new Set;this.scene.traverse(n=>{if(n instanceof Me||n instanceof br){t.add(n.geometry);let i=n.material;(Array.isArray(i)?i:[i]).forEach(s=>e.add(s))}else n instanceof Ro&&e.add(n.material)}),t.forEach(n=>n.dispose()),e.forEach(n=>n.dispose()),this.textures.forEach(n=>n.dispose()),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove()}};var wp=r=>{let t=Math.sin(r*127.1+17.7)*43758.5;return t-Math.floor(t)},Bu=class{constructor(t,e,n){this.host=t;this.id=e;this.reduced=n;this.camera.position.set(0,0,10),this.scene.add(this.model),this.scene.add(new Sr(11258309,1.5));let i=new mi(16772558,4);i.position.set(-4,6,5),this.scene.add(i);let s=new mi(e==="pelagic"?7531222:15571027,6);s.position.set(4,-2,-3),this.scene.add(s),e==="pelagic"?this.capsule():this.armillary();try{this.renderer=new ts({alpha:!0,antialias:!0,powerPreference:"low-power"}),this.renderer.setPixelRatio(Math.min(devicePixelRatio,1.5)),this.renderer.setClearColor(0,0),this.renderer.outputColorSpace=Qe,this.renderer.toneMapping=Rs,this.renderer.toneMappingExposure=1.1,this.host.append(this.renderer.domElement);let o=new Qr(this.renderer),a=new sa;this.environment=o.fromScene(a,.04),this.scene.environment=this.environment.texture,a.dispose(),o.dispose(),t.classList.add("has-webgl")}catch{this.renderer?.dispose(),this.renderer=void 0}this.observer=new ResizeObserver(()=>this.resize()),this.observer.observe(t),this.intersection=new IntersectionObserver(([o])=>{this.visible=o.isIntersecting,this.visible&&this.reduced&&this.render(0,!0)},{rootMargin:"100px"}),this.intersection.observe(t),this.resize()}host;id;reduced;pose={turn:0,explode:0,bloom:1,lift:0,scale:1,roll:0};renderer;scene=new Gi;camera=new cn(34,1,.1,100);model=new ne;rings=[];arms=[];particles;observer;intersection;visible=!0;last=-1;disposed=!1;environment;add(t,e,n=this.model,i=0,s=0,o=0){let a=new Me(t,e);return a.position.set(i,s,o),n.add(a),a}tube(t,e,n,i=this.model){return this.add(new ws(new Wi(t),40,e,8,!1),n,i)}capsule(){let t=new ye({color:12240827,metalness:.86,roughness:.27}),e=new ye({color:1387827,metalness:.7,roughness:.32}),n=new ye({color:11838307,metalness:.85,roughness:.24}),i=new ye({color:13172633,emissive:10873189,emissiveIntensity:2.8,roughness:.2});this.add(new Gn(1.4,64,48),t).scale.set(1,1.13,.87),this.add(new Dn(.78,.78,.18,64),n,this.model,0,.12,1.16).rotation.x=Math.PI/2,this.add(new bn(.64,.075,12,64),e,this.model,0,.12,1.28);let o=this.add(new Gn(.59,48,32),new As({color:1194553,metalness:.52,roughness:.08,clearcoat:1}),this.model,0,.12,1.29);o.scale.z=.23,this.add(new bn(.52,.018,8,64),i,this.model,0,.12,1.39);let a=this.add(new Oa(.33,48),new Gr({color:7575930}),this.model,0,.12,1.43);a.scale.y=.9;let l=this.add(new bn(.42,.012,6,48,Math.PI*.55),new Gr({color:14351312}),this.model,-.02,.16,1.45);l.rotation.z=.3;for(let f=0;f<16;f++){let d=f*Math.PI/8;this.add(new Dn(.035,.035,.055,6),e,this.model,Math.cos(d)*.71,.12+Math.sin(d)*.71,1.27).rotation.x=Math.PI/2}let c=this.add(new bn(1.4,.055,8,96),n);c.rotation.x=Math.PI/2,c.scale.y=.87,this.add(new Dn(.46,.56,.27,32),e,this.model,0,1.55,0),this.add(new Dn(.3,.3,.1,32),n,this.model,0,1.73,0),this.add(new Dn(.018,.018,.8,8),t,this.model,.2,2.1,0),this.add(new Gn(.055,12,8),i,this.model,.2,2.52,0);for(let f of[-1,1]){let d=new ne;d.position.set(f*1.2,-.55,.2),this.model.add(d),this.arms.push(d),this.add(new Gn(.16,16,12),n,d),this.tube([new U,new U(f*.55,-.2,.3),new U(f*.6,-.55,.8)],.055,t,d),this.add(new Ue(.23,.14,.36),e,d,f*.6,-.55,.9);for(let m of[-1,1])this.tube([new U(f*.6+m*.09,-.55,1),new U(f*.6+m*.14,-.7,1.2),new U(f*.6+m*.05,-.75,1.3)],.025,n,d);this.tube([new U(f*.85,-1.2,-.6),new U(f*1.1,-1.7,-.4),new U(f*1.1,-1.7,1.1)],.055,t),this.add(new Dn(.21,.21,.5,24),e,this.model,f*1.35,.45,-.3).rotation.z=Math.PI/2,this.add(new Gn(.12,12,8),i,this.model,f*.87,-.5,1.06)}let u=new Float32Array(650*3);for(let f=0;f<650;f++)u[f*3]=(wp(f*3)-.5)*14,u[f*3+1]=(wp(f*3+1)-.5)*14,u[f*3+2]=(wp(f*3+2)-.5)*8-2;let h=new ze;h.setAttribute("position",new hn(u,3)),this.particles=new br(h,new Wr({color:12051919,size:.017,transparent:!0,opacity:.45,depthWrite:!1})),this.scene.add(this.particles),this.model.rotation.set(-.15,-.45,.08)}armillary(){let t=new ye({color:13673053,metalness:.95,roughness:.25}),e=new ye({color:13221281,metalness:.9,roughness:.3}),n=new ye({color:4867381,metalness:.85,roughness:.27}),i=new ye({color:16038758,emissive:14314016,emissiveIntensity:.5,metalness:.25,roughness:.5});this.add(new Gn(.68,48,32),i);for(let o=0;o<12;o++){let a=this.add(new bn(.686,.005,4,96),t);a.rotation.y=o*Math.PI/12}for(let o=0;o<6;o++){let a=new ne;this.model.add(a),this.rings.push(a);let l=1.05+o*.24;this.add(new bn(l,o===5?.055:.029,8,128),o%2?t:e,a),o===5&&this.add(new bn(l+.1,.012,6,128),t,a);for(let c=0;c<72;c++){let u=c*Math.PI/36,h=l+(c%6===0?.055:.027),f=this.add(new Ue(.008,c%6===0?.09:.035,.018),n,a,Math.sin(u)*h,Math.cos(u)*h,0);f.rotation.z=-u}this.add(new Gn(.07+o*.013,16,12),o%2?t:e,a,l,0,0)}let s=this.add(new Dn(.055,.1,1.2,24),t,this.model,0,-2.45,0);s.rotation.z=-.12,this.add(new Dn(.62,.8,.13,64),n,this.model,.08,-3.09,0),this.add(new Dn(.62,.62,.04,64),t,this.model,.08,-3,0),this.model.rotation.set(.15,-.3,-.15)}resize(){let t=this.host.getBoundingClientRect();t.width<1||t.height<1||(this.camera.aspect=t.width/t.height,this.camera.position.z=Math.max(10,9/this.camera.aspect),this.camera.updateProjectionMatrix(),this.renderer?.setSize(t.width,t.height,!1),this.render(0,!0))}render(t,e=!1){if(!this.renderer||this.disposed||!e&&(!this.visible||document.hidden||t-this.last<1/30))return;this.last=t;let n=this.pose,i=this.host.clientWidth<600;this.model.rotation.y=-.4+n.turn,this.model.rotation.z=(this.id==="pelagic"?.08:-.15)+n.roll,this.model.position.y=n.lift+(this.id==="heliograph"?.25:0),this.model.scale.setScalar(n.scale*(i?.87:1)),this.id==="pelagic"?(this.model.rotation.x=-.12+n.explode*.2,this.arms.forEach((s,o)=>{s.rotation.z=(o?1:-1)*n.explode*.45}),this.particles&&(this.particles.position.y=n.explode*2+(this.reduced?0:Math.sin(t*.15)*.07),this.particles.rotation.y=n.turn*.1)):(this.model.rotation.x=.12+n.explode*.25,this.rings.forEach((s,o)=>{s.rotation.x=(o*.31+.15)*(1-n.explode*.7),s.rotation.y=o*.47*(1-n.explode*.45)+n.turn*.15*(o%2?1:-1),s.rotation.z=o*.16+n.explode*o*.12,s.position.y=n.explode*(o-2.5)*.3})),this.renderer.render(this.scene,this.camera)}dispose(){this.disposed||(this.disposed=!0,this.observer.disconnect(),this.intersection.disconnect(),this.scene.traverse(t=>{(t instanceof Me||t instanceof br)&&(t.geometry.dispose(),(Array.isArray(t.material)?t.material:[t.material]).forEach(n=>n.dispose()))}),this.environment?.dispose(),this.renderer?.dispose(),this.renderer?.forceContextLoss(),this.renderer?.domElement.remove(),this.host.classList.remove("has-webgl"))}};var oa=(r,t,e)=>at.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*t*(e?.8:1)}`,pin:!0,scrub:.8,anticipatePin:1,invalidateOnRefresh:!0}});function p_(r){at.from(`${r} h2`,{y:90,rotationX:12,transformOrigin:"50% 100%",opacity:.35,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}})}function JS(){let r=document.querySelector(".rv-hero"),t=r.querySelector(".rv-desert img"),e=r.clientWidth,n=r.clientHeight,i=(t.naturalWidth||1792)/(t.naturalHeight||1008),s=Math.max(e,n*i),o=s/i,a=(e-s)/2,l=(n-o)/2,c=(s*.415+a)/e*100,u=100-(s*.58+a)/e*100,h=(o*.175+l)/n*100,f=100-(o*.79+l)/n*100,d=Math.max(0,s*.165/2);return`inset(${h}% ${u}% ${f}% ${c}% round ${d}px ${d}px 0px 0px)`}function KS(r){at.set(".rv-portal-copy",{autoAlpha:0}),oa(".rv-hero",4,r).to(".rv-hero-copy .im-word",{yPercent:-80,rotationX:60,rotation:-5,autoAlpha:0,stagger:.07,duration:.8},.12).to(".rv-hero-copy p,.rv-hero-top,.rv-hero .im-bottom",{autoAlpha:0,y:-25,duration:.5},.12).to(".rv-seal",{rotation:140,scale:.75,autoAlpha:0,duration:1},0).to(".rv-world",{scale:1.45,transformOrigin:"50% 47%",duration:2.2,ease:"power1.inOut"},.15).fromTo(".rv-portal-window",{clipPath:JS},{clipPath:"inset(-10% -10% -10% -10% round 0px 0px 0px 0px)",duration:1.9,ease:"power2.inOut"},.7).fromTo(".rv-portal-window img",{scale:1.12},{scale:1,duration:2.8,ease:"none"},.6).to(".rv-desert",{autoAlpha:0,duration:.45},2.05).to(".rv-world",{scale:1,duration:1.4,ease:"sine.out"},2.3).fromTo(".rv-portal-copy",{autoAlpha:0,y:65},{autoAlpha:1,y:0,duration:.7},2.5).to(".rv-hero-shade",{backgroundColor:"#0e29252a",duration:1},2).to(".rv-portal-copy",{autoAlpha:0,y:-35,duration:.5},3.55),p_(".rv-prologue"),at.to(".rv-asterisk",{rotation:140,scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:1.2}}),at.to(".rv-word-ribbon span",{xPercent:-20,ease:"none",scrollTrigger:{trigger:".rv-prologue",start:"top bottom",end:"bottom top",scrub:.7}}),at.set(".rv-room-1,.rv-room-2",{autoAlpha:0,rotationY:72,xPercent:r?20:12}),at.set(".rv-room-rail>div:first-child",{opacity:1}),oa(".rv-rooms-pin",5,r).fromTo(".rv-room-0 .rv-room-photo img",{scale:1.12,xPercent:2},{scale:1,xPercent:-2,duration:1.3,ease:"none"},0).to(".rv-room-rail>div:nth-child(1) i",{scaleX:1,duration:1.3,ease:"none"},0).to(".rv-room-0",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},1).to(".rv-room-1",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},1.2).fromTo(".rv-room-1 .rv-room-photo img",{scale:1.18,xPercent:3},{scale:1,xPercent:-2,duration:2,ease:"none"},1.2).to(".rv-room-rail>div:nth-child(1)",{opacity:.35,duration:.4},1.3).to(".rv-room-rail>div:nth-child(2)",{opacity:1,duration:.4},1.5).to(".rv-room-rail>div:nth-child(2) i",{scaleX:1,duration:1.2,ease:"none"},2).to(".rv-room-1",{rotationY:-95,xPercent:r?-25:-16,autoAlpha:0,duration:1.1,ease:"power2.inOut"},3).to(".rv-room-2",{rotationY:0,xPercent:0,autoAlpha:1,duration:1.1,ease:"power2.inOut"},3.2).fromTo(".rv-room-2 .rv-room-photo img",{scale:1.15,yPercent:3},{scale:1,yPercent:-2,duration:1.8,ease:"none"},3.2).to(".rv-room-rail>div:nth-child(2)",{opacity:.35,duration:.4},3.3).to(".rv-room-rail>div:nth-child(3)",{opacity:1,duration:.4},3.5).to(".rv-room-rail>div:nth-child(3) i",{scaleX:1,duration:1,ease:"none"},4),at.set(".rv-postcard-border,.rv-keepsake-note",{autoAlpha:0}),oa(".rv-keepsake-pin",3.8,r).fromTo(".rv-fragment",{x:i=>(i%3-1)*(r?130:280),y:i=>(Math.floor(i/3)-1)*(r?100:200),z:i=>i%2?-160:180,rotation:i=>(i-4)*9,rotationY:i=>(i%3-1)*30,scale:.75,autoAlpha:.55},{x:0,y:0,z:0,rotation:0,rotationY:0,scale:1,autoAlpha:1,stagger:{each:.1,from:"center"},duration:1.5,ease:"power2.inOut"},0).to(".rv-postcard",{rotation:0,scale:1.02,duration:2.2},0).to(".rv-keepsake-heading",{y:-30,autoAlpha:r?.7:.35,duration:1.3},1).to(".rv-postcard-border",{autoAlpha:1,rotation:0,scale:1.02,duration:.6},2.1).fromTo(".rv-keepsake-note",{autoAlpha:0,y:25},{autoAlpha:1,y:0,duration:.6},2.6).to(".rv-postcard,.rv-postcard-border",{y:r?-10:-35,rotation:-3,duration:.8},3),at.fromTo(".rv-contact-circle",{scale:.7,y:130},{scale:1.2,y:-80,scrollTrigger:{trigger:".rv-contact",start:"top bottom",end:"bottom bottom",scrub:1}}),at.from(".rv-contact h2",{yPercent:60,rotationX:40,opacity:.2,stagger:.1,scrollTrigger:{trigger:".rv-contact",start:"top 85%",end:"top 10%",scrub:1}})}function jS(r){at.set(".tv-ascent-copy",{autoAlpha:0});let t={value:1200},e=document.querySelector(".tv-altitude strong");oa(".tv-hero",3.8,r).to(".tv-hero-copy .im-word",{yPercent:-120,rotationX:60,autoAlpha:0,stagger:.1,duration:.8},.1).to(".tv-hero-copy p,.tv-hero-caption,.tv-hero .im-bottom",{y:-30,autoAlpha:0,duration:.5},.1).to(".tv-ridge-plane img",{scale:1.16,transformOrigin:"65% 25%",duration:1.5},0).to(".tv-ridge-plane",{yPercent:h=>(h-2)*(r?12:18),rotationY:h=>(h-2)*-9,rotationZ:h=>(h-2)*2,z:h=>Math.abs(h-2)*-90,xPercent:h=>(h-2)*8,duration:1.8,ease:"power2.inOut"},1).to(".tv-hero-shade",{backgroundColor:"#08162077",duration:1.4},1).to(".tv-grid",{autoAlpha:0,duration:.5},1).to(".tv-vertical-rule",{yPercent:-60,duration:3.8,ease:"none"},0).to(t,{value:4860,duration:3.8,ease:"none",onUpdate:()=>{e.textContent=Math.round(t.value).toLocaleString("en-US")}},0).fromTo(".tv-ascent-copy",{autoAlpha:0,y:70},{autoAlpha:1,y:0,duration:.8},1.8).to(".tv-ascent-copy",{autoAlpha:0,y:-35,duration:.5},3.3),p_(".tv-belief"),at.to(".tv-belief-compass",{rotation:110,scrollTrigger:{trigger:".tv-belief",start:"top bottom",end:"bottom top",scrub:1}}),at.set(".tv-route-notes article:not(:first-child)",{autoAlpha:0,y:20}),at.set(".tv-map-fold",{rotationY:h=>h%2?-35:35});let i=document.querySelector(".tv-route-line"),s=document.querySelector(".tv-route-traveller"),o={progress:0},a=i.getTotalLength(),l=()=>{let h=i.getPointAtLength(o.progress*a);at.set(s,{x:h.x,y:h.y})};l(),oa(".tv-route-pin",4,r).to(".tv-map-fold",{rotationY:0,stagger:.1,duration:1.2,ease:"power2.inOut"},0).fromTo(".tv-fold-map",{rotationX:43,rotationZ:-20,scale:.8},{rotationX:0,rotationZ:0,scale:1,duration:1.8},0).fromTo(".tv-map-drawing",{autoAlpha:0},{autoAlpha:1,duration:.6},.8).fromTo(".tv-contour-lines path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.1,ease:"none"},.6).fromTo(".tv-route-line",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:2.4,ease:"none"},1.2).to(o,{progress:1,duration:2.4,ease:"none",onUpdate:l},1.2).to(".tv-route-progress i",{scaleX:1,duration:3.8,ease:"none"},0).to(".tv-route-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1.2).to(".tv-route-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".tv-route-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.5).to(".tv-route-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.85).to(".tv-fold-map",{rotationX:r?8:15,rotationZ:8,scale:1.05,duration:.8},3.2),at.set(".tv-summit-copy,.tv-summit-stamp",{autoAlpha:0}),oa(".tv-crossing-pin",5,r).fromTo(".tv-ice-plane img",{scale:1.2,transformOrigin:"50% 35%"},{scale:1,transformOrigin:"50% 35%",duration:1.5},0).to(".tv-crossing-heading",{y:-50,autoAlpha:0,duration:.7},.8).to(".tv-crossing-details",{autoAlpha:0,duration:.5},1).to(".tv-crossing-aperture i",{scaleY:0,duration:1},.7).to(".tv-ice-plane",{xPercent:h=>h<3?-850:h>3?850:0,yPercent:h=>h===3?-135:h%2?14:-14,rotationY:h=>h<3?-35:h>3?35:0,rotationX:h=>h===3?35:0,autoAlpha:0,stagger:{each:.13,from:"center"},duration:1.7,ease:"power2.inOut"},1.4).to(".tv-summit-photo img",{scale:1,duration:3.8,ease:"none"},.6).to(".tv-crossing-shade",{backgroundColor:"#0d182b22",duration:1},2).fromTo(".tv-summit-copy",{autoAlpha:0,y:75},{autoAlpha:1,y:0,duration:.8},3).fromTo(".tv-summit-stamp",{autoAlpha:0,scale:.7,rotation:-35},{autoAlpha:1,scale:1,rotation:0,duration:.9},3.5).to(".tv-summit-copy h2",{y:-25,duration:1.2},3.7).to(".tv-summit-stamp svg",{rotation:30,duration:1.5},3.5),at.from(".tv-contact h2",{x:-80,rotation:-4,opacity:.2,scrollTrigger:{trigger:".tv-contact",start:"top 85%",end:"top 10%",scrub:1}}),at.from(".tv-end-altitude i",{y:100,rotation:-35,scrollTrigger:{trigger:".tv-contact",start:"top 80%",end:"bottom bottom",scrub:1}})}function m_(r,t){r==="reverie"?KS(t):r==="traverse"&&jS(t)}var ps=(r,t,e)=>at.timeline({scrollTrigger:{trigger:r,start:"top top",end:()=>`+=${innerHeight*t*(e?.78:1)}`,pin:!0,scrub:.65,anticipatePin:1,invalidateOnRefresh:!0}});function Ap(r){at.from(`${r} h2`,{y:100,rotationX:12,transformOrigin:"50% 100%",opacity:.3,scrollTrigger:{trigger:r,start:"top 85%",end:"top 15%",scrub:1}}),at.from(`${r} h2 em`,{color:"#6c7770",scrollTrigger:{trigger:r,start:"top 50%",end:"center 40%",scrub:1}})}function QS(r,t){at.set(".pl-descent-copy",{autoAlpha:0});let e={value:0},n=document.querySelector(".pl-depth-number");ps(".pl-hero",3.8,t).to(r.pose,{turn:1.5,roll:-.18,explode:1,scale:t?1.04:1.12,lift:-.25,duration:3.8,ease:"none"},0).to(".pl-hero-copy",{yPercent:-55,autoAlpha:0,duration:.8},.15).to(".pl-caustics",{yPercent:-30,autoAlpha:0,rotation:10,duration:2},0).to(".pl-hero",{backgroundColor:"#020f1b",backgroundImage:"radial-gradient(ellipse at 70% -20%,#061422 0%,transparent 65%),linear-gradient(180deg,#061422,#020f1b)",duration:2},.25).to(".pl-depth-lines",{yPercent:-62,duration:3.8,ease:"none"},0).to(e,{value:2400,duration:3.8,ease:"none",onUpdate:()=>{n.textContent=String(Math.round(e.value)).padStart(4,"0")}},0).to(".pl-hero .ns-bottom",{autoAlpha:0,duration:.3},0).fromTo(".pl-descent-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.15).to(".pl-capsule",{yPercent:t?17:7,xPercent:t?12:3,duration:2.3},.6).to(".pl-hero .ns-stars",{yPercent:-30,duration:3.8,ease:"none"},0).to(".pl-descent-copy",{y:-40,autoAlpha:0,duration:.7},3.05),Ap(".pl-intro"),at.set(".pl-survey-notes article:not(:first-child)",{autoAlpha:0,y:20}),ps(".pl-survey-pin",3.6,t).fromTo(".pl-map",{rotationX:55,rotationZ:-28,scale:.75},{rotationX:0,rotationZ:0,scale:1,duration:2.1},0).fromTo(".pl-contours path",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,stagger:.025,duration:1.4,ease:"none"},0).fromTo(".pl-scan",{left:"8%"},{left:"92%",duration:2.4,ease:"none"},0).fromTo(".pl-route",{strokeDasharray:"1 1",strokeDashoffset:1},{strokeDashoffset:0,duration:1.3,ease:"none"},1.6).to(".pl-survey-notes article:nth-child(1)",{autoAlpha:0,y:-20,duration:.3},1).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.35).to(".pl-survey-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2.2).to(".pl-survey-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.55).to(".pl-map",{rotationZ:12,scale:t?1.18:1.1,duration:1},2.5).to(".pl-scan",{autoAlpha:0,duration:.3},2.5),at.set(".pl-life-notes article:not(:first-child)",{autoAlpha:0,y:25}),ps(".pl-life-pin",4,t).fromTo(".pl-specimen-one",{yPercent:35,scale:.72,rotation:-14},{yPercent:0,scale:1,rotation:5,duration:1.4},0).fromTo(".pl-specimen-two",{xPercent:-80,yPercent:40,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.8,duration:1.3},1).fromTo(".pl-specimen-three",{xPercent:80,yPercent:60,autoAlpha:0},{xPercent:0,yPercent:0,autoAlpha:.7,duration:1.3},1.4).to(".pl-life-title",{y:-30,autoAlpha:.35,duration:1},1).to(".pl-life-orbit",{rotation:120,scale:1.15,duration:4,ease:"none"},0).to(".pl-specimen-one .pl-bell",{scaleX:.92,scaleY:1.05,transformOrigin:"50% 50%",duration:1},1.2).to(".pl-specimen-one .pl-tentacles",{skewX:9,y:12,transformOrigin:"50% 0%",duration:2},1).to(".pl-life-notes article:nth-child(1)",{autoAlpha:0,y:-25,duration:.3},1.2).to(".pl-life-notes article:nth-child(2)",{autoAlpha:1,y:0,duration:.4},1.55).to(".pl-life-notes article:nth-child(2)",{autoAlpha:0,y:-25,duration:.3},2.55).to(".pl-life-notes article:nth-child(3)",{autoAlpha:1,y:0,duration:.4},2.9).to(".pl-specimen",{yPercent:-25,stagger:.12,duration:1.2},2.8),at.fromTo(".pl-horizon",{y:160,scale:.75},{y:-100,scale:1.2,scrollTrigger:{trigger:".pl-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function tT(r,t){at.set(".he-unfold-copy",{autoAlpha:0}),ps(".he-hero",3.8,t).to(r.pose,{turn:2.1,roll:.12,explode:1,scale:t?.92:1.06,duration:3.5,ease:"none"},0).to(".he-hero-copy",{yPercent:-40,autoAlpha:0,duration:.7},.2).to(".he-instrument-label,.he-hero .ns-bottom",{autoAlpha:0,duration:.4},.15).fromTo(".he-unfold-copy",{y:70,autoAlpha:0},{y:0,autoAlpha:1,duration:.8},1.1).to(".he-instrument",{xPercent:t?15:6,yPercent:t?10:-4,duration:2.5},.7).to(".he-hero .ns-stars",{rotation:12,scale:1.2,duration:3.8,ease:"none"},0).to(".he-hero",{backgroundColor:"#30281e",duration:2},1).to(".he-unfold-copy",{y:-40,autoAlpha:0,duration:.6},3.1),Ap(".he-prologue"),at.to(".he-prologue-seal",{rotation:100,scrollTrigger:{trigger:".he-prologue",start:"top bottom",end:"bottom top",scrub:1}}),at.set(".he-totality",{autoAlpha:0}),ps(".he-eclipse-pin",4.5,t).to(".he-moon",{xPercent:0,x:0,duration:1.8,ease:"sine.inOut"},0).to(".he-eclipse-art",{scale:1.16,duration:2.2},0).to(".he-eclipse-copy",{autoAlpha:0,y:30,duration:.5},1).to(".he-corona",{opacity:1,scale:1.08,duration:.55},1.55).to(".he-diamond",{opacity:1,duration:.12},1.48).to(".he-diamond",{opacity:0,duration:.2},1.75).to(".he-eclipse-pin",{backgroundColor:"#06090b",duration:.65},1.2).to(".he-totality",{autoAlpha:1,duration:.6},1.9).to(".he-eclipse-ring",{rotation:45,duration:4.5,ease:"none"},0).to(".he-totality",{letterSpacing:".45em",duration:1.1},2).to(".he-totality",{autoAlpha:0,duration:.4},3).to(".he-moon",{xPercent:140,duration:1.4,ease:"sine.inOut"},3.1).to(".he-corona",{opacity:0,duration:.6},3.15).to(".he-eclipse-art",{scale:.85,duration:1.2},3.2).to(".he-eclipse-pin",{backgroundColor:"#252321",duration:1},3.2).to(".he-eclipse-copy",{autoAlpha:1,y:0,duration:.7},3.5);let i=document.querySelector(".he-atlas-track"),s=at.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,pin:!0,scrub:.8,invalidateOnRefresh:!0}});at.to(".he-atlas-line i",{scaleX:1,ease:"none",scrollTrigger:{trigger:".he-atlas-pin",start:"top top",end:()=>`+=${i.scrollWidth-innerWidth}`,scrub:!0,invalidateOnRefresh:!0}}),document.querySelectorAll(".he-atlas-page").forEach((o,a)=>{at.fromTo(o.querySelector(".he-plate-orbits"),{rotation:-45,scale:.7},{rotation:65,scale:1.15,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),at.fromTo(o.querySelector(".he-plate-core"),{x:80,y:-25},{x:-45,y:30,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),at.fromTo(o.querySelector("h3"),{x:80,rotation:a%2?5:-5},{x:0,rotation:0,ease:"none",scrollTrigger:{trigger:o,containerAnimation:s,start:"left 85%",end:"left 10%",scrub:!0}})}),at.to(".he-contact-orbits",{rotationZ:100,rotationY:20,scale:1.2,scrollTrigger:{trigger:".he-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function eT(r){at.set(".af-through-copy",{autoAlpha:0}),ps(".af-hero",3.4,r).to(".af-hero-copy",{yPercent:-30,autoAlpha:0,duration:.65},.1).to(".af-hero-note,.af-hero .ns-bottom",{autoAlpha:0,duration:.35},.1).to(".af-optical",{rotation:-25,xPercent:r?-10:-12,yPercent:r?-10:-5,duration:1.2},0).to(".af-iris-blades>i",{xPercent:60,yPercent:-10,rotation:"+=35",stagger:.035,duration:1.2},.35).to(".af-lens-core",{autoAlpha:0,scale:2,duration:.6},.4).to(".af-optical",{scale:r?3.8:3.4,duration:1.8,ease:"power2.inOut"},1).to(".af-iris",{autoAlpha:0,duration:.7},1.75).to(".af-iris-image",{borderRadius:"0%",duration:.5},1.8).fromTo(".af-through-copy",{autoAlpha:0,y:50},{autoAlpha:1,y:0,duration:.6},2).to(".af-hero",{backgroundColor:"#2f4947",duration:.6},1.8).to(".af-through-copy",{autoAlpha:0,y:-35,duration:.5},3),Ap(".af-intro"),ps(".af-screening-pin",6,r).fromTo(".af-sequence-0 .af-film-far",{x:r?100:70,scale:1.06},{x:r?-90:-70,scale:1,duration:2,ease:"none"},0).fromTo(".af-sequence-0 .af-film-near",{x:r?130:120},{x:r?-160:-180,duration:2,ease:"none"},0).to(".af-sequence-0 .af-film-sun",{y:-35,duration:2},0).fromTo(".af-sequence-0 .af-sequence-copy",{y:35},{y:-25,duration:1.8},0).to(".af-sequence-0",{clipPath:"inset(0 0 100% 0)",duration:.55,ease:"power2.inOut"},1.65).fromTo(".af-sequence-1 .af-film-far",{x:80},{x:-80,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-film-near",{x:160},{x:-160,duration:2.2,ease:"none"},1.7).fromTo(".af-sequence-1 .af-sequence-copy",{autoAlpha:0,y:40},{autoAlpha:1,y:0,duration:.5},2.1).to(".af-shutter i",{scaleY:1,stagger:.045,duration:.35,ease:"power2.in"},3.55).set(".af-sequence-1",{autoAlpha:0},4.1).set(".af-shutter i",{transformOrigin:"50% 100%"},4.1).to(".af-shutter i",{scaleY:0,stagger:.045,duration:.45,ease:"power2.out"},4.15).fromTo(".af-sequence-2 .af-film-sun",{y:100,scale:.8,transformOrigin:"50% 50%"},{y:-25,scale:1.07,duration:2},4).fromTo(".af-sequence-2 .af-film-near",{x:100},{x:-80,duration:2,ease:"none"},4).fromTo(".af-sequence-2 .af-sequence-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},4.6).to(".af-film-timeline b",{left:"100%",duration:6,ease:"none"},0),at.set(".af-select-frame",{autoAlpha:0}),ps(".af-edit-pin",3.8,r).fromTo(".af-contact-sheet",{yPercent:15,rotation:-15,rotationX:20},{yPercent:-28,rotation:4,rotationX:0,duration:2.1,ease:"none"},0).to(".af-edit-copy",{y:-25,autoAlpha:.25,duration:.8},1.6).to(".af-negative",{x:i=>(i%3-1)*(r?75:140),y:i=>(Math.floor(i/3)-1)*75,z:i=>i===4?220:-50,rotation:i=>(i-4)*5,autoAlpha:i=>i===4?1:.35,duration:1.2},2).to(".af-negative:nth-child(5)",{scale:r?2:1.8,rotation:-4,z:260,duration:1},2.1).to(".af-select-frame",{autoAlpha:1,scale:.95,duration:.5},2.65).to(".af-contact-sheet",{xPercent:r?-9:-5,duration:.8},2.2),at.from(".af-end-mark",{rotation:-20,scale:.6,y:100,scrollTrigger:{trigger:".af-contact",start:"top 80%",end:"top 10%",scrub:1}})}function g_(r,t,e){r==="pelagic"&&t?QS(t,e):r==="heliograph"&&t?tT(t,e):r==="afterimage"&&eT(e)}var nT=[{id:"mosslight",name:"Mosslight",number:"13",headline:"A little world that listens.",color:"#9df5c9",background:"#03070b",cover:"/motion/mosslight-cover.jpg",category:"PIXEL HORIZON / INTERACTIVE SCENE",description:"An interactive listening grove: a radio observatory, ringed planet, fireflies and a lake that answers your cursor. Change the atmosphere, send a signal or carry the scene into your own site.",tags:["Living pixel horizon","Three atmospheres","Reusable web component"],chapters:["The listening grove"]},{id:"lightkeeper",name:"The Last Lightkeeper",number:"12",headline:"Carry the last light.",color:"#f3ad76",background:"#0b1720",cover:"/motion/lightkeeper-cover.jpg",category:"PIXEL FABLE / VOXEL WORLD",description:"A small keeper wakes an abandoned observatory. Ride the keeper\u2019s cable lift, restore the lenses, send a pulse to a sleeping village and follow its reply home at dawn.",tags:["Voxel architecture","Vertical story journey","GSAP + 3D"],chapters:["A window in the dark","The mountain remembers","Take the light below","One small light is enough","Give the dark an answer","One window. Then another","You were never the last"]},{id:"aether",cover:"/motion/aether-cover.png",number:"01",name:"\xC6ther",category:"PRODUCT / OBJECT",headline:"Sound, untethered.",description:"A sculptural product story. Chrome surfaces, exploded parts, orbital diagrams, and a cinematic color shift.",color:"#ee794c",background:"#ede8df",tags:["3D assembly","Pinned storytelling","Orbiting type"],chapters:["First contact","Inside the object","A different frequency","Find your space"]},{id:"offscript",cover:"/motion/offscript-cover.png",number:"02",name:"Offscript",category:"STUDIO / EXPRESSION",headline:"Good ideas misbehave.",description:"A loud independent studio. Tumbling geometry, oversized type, sideways case studies, and a deck that comes alive.",color:"#cbff54",background:"#171916",tags:["Kinetic typography","Horizontal scroll","3D card stack"],chapters:["Make some noise","Selected experiments","A useful kind of chaos","Start something"]},{id:"floraison",cover:"/motion/floraison-cover.png",number:"03",name:"Floraison",category:"JOURNAL / NATURE",headline:"Nothing blooms in a hurry.",description:"An unhurried botanical journal. Sculpted petals, drifting field specimens, an unfolding herbarium, and room to breathe.",color:"#9e4a38",background:"#f3eedf",tags:["3D bloom","Layered parallax","Field-note journey"],chapters:["A small beginning","Anatomy of a bloom","Collected in the field","Let things grow"]},{id:"monolith",cover:"/motion/monolith-cover.png",number:"04",name:"Monolith",category:"ARCHITECTURE / SPACE",headline:"Space is a feeling.",description:"An architectural journey from solid to space. An exploded concrete pavilion, living blueprints, and cinematic studies of light and mass.",color:"#c34f32",background:"#dedbd2",tags:["Exploded architecture","Living blueprints","Spatial transitions"],chapters:["A sense of place","Drawn from the inside","Studies in space","Build a possibility"]},{id:"pelagic",cover:"/motion/pelagic-cover.jpg",number:"05",name:"Pelagic",category:"EXPEDITION / OCEAN",headline:"Below the known.",description:"A descent into the blue. A sculpted diving capsule, sonar-drawn seabeds, and luminous life suspended in the dark.",color:"#d8fc81",background:"#051c29",tags:["Cinematic descent","Sonar cartography","Specimen theatre"],chapters:["Leave the surface","Read the unseen","Life without sunlight","Stay curious"]},{id:"heliograph",cover:"/motion/heliograph-cover.jpg",number:"06",name:"Heliograph",category:"OBSERVATORY / COSMOS",headline:"A closer kind of infinity.",description:"An instrument for wonder. A brass orbital sculpture unfolds, an eclipse aligns, and an atlas carries you from dawn to the edge of night.",color:"#ed9f51",background:"#171819",tags:["Orbital mechanics","Scroll-built eclipse","Celestial atlas"],chapters:["An instrument for wonder","Between light and shadow","A field guide to infinity","Keep looking up"]},{id:"afterimage",cover:"/motion/afterimage-cover.jpg",number:"07",name:"Afterimage",category:"CINEMA / VISUAL CULTURE",headline:"Some things stay with you.",description:"A cinema journal in motion. Step through a mechanical iris, direct three illustrated film sequences, and unspool a moving contact sheet.",color:"#ef623d",background:"#e7e1d3",tags:["Mechanical iris","Scroll-directed film","Unspooling contact sheet"],chapters:["Open your eyes","Three short stories","Between the frames","Make a lasting impression"]},{id:"reverie",cover:"/motion/reverie-cover.jpg",number:"08",name:"Reverie",category:"ART / IMAGINED PLACES",headline:"Leave the ordinary behind.",description:"A passage through the impossible. Step inside a desert portal, turn the walls of a dream gallery, and piece together a place that only exists in your imagination.",color:"#b94d37",background:"#f0debd",tags:["Portal passage","Rotating dream gallery","Image assembly"],chapters:["The threshold","A different way of seeing","Rooms without rules","A place to keep"]},{id:"traverse",cover:"/motion/traverse-cover.jpg",number:"09",name:"Traverse",category:"EXPEDITION / ALPINE",headline:"A little further.",description:"An alpine story you move through. A fractured mountain panorama, a folding expedition map, and a glacier passage that opens onto the first light of a summit.",color:"#e1fc80",background:"#101e27",tags:["Fractured panorama","Folding terrain","Glacier-to-summit passage"],chapters:["Beyond the familiar","Find your own line","Through the blue","The long way up"]},{id:"nullsignal",name:"Null Signal",number:"10",headline:"A world between the lines.",color:"#c7eaa4",background:"#080b0b",cover:"/motion/nullsignal-cover.jpg",category:"ASCII / GLYPH OBSERVATORY",description:"A cabinet of character-built curiosities. Disassemble an ASCII armillary instrument, travel through a vaulted arcade, and draw a message from a scattered constellation.",tags:["ASCII sculpture","Depth-projected arcade","Character assembly"],chapters:["Anatomy of a signal","Inside the transmission","A message reassembled","Stay curious"]},{id:"bitquest",name:"Bitquest",number:"11",headline:"Beyond the edge of the map.",color:"#f0bb87",background:"#202940",cover:"/motion/bitquest-cover.jpg",category:"PIXEL ART / IMAGINED PLACES",description:"A hand-coded pixel expedition. Approach a floating clock-tower town, ride a moonlit railway, and unfold a seven-island atlas with a tiny traveler following your scroll.",tags:["Pixel town","Parallax railway","Unfolding island map"],chapters:["The skyward city","The midnight railway","An atlas of elsewhere","Make room for wonder"]}];function __(r){return nT.some(t=>t.id===r)}at.registerPlugin(te);te.config({ignoreMobileResize:!0});var Ol=document.querySelector(".mt-page"),He=Ol?.dataset.template,Bl=r=>{parent!==window&&parent.postMessage(r,"*")};function iT(r,t){at.set([".ae-explode-copy",".ae-annotation"],{autoAlpha:0}),at.timeline({scrollTrigger:{trigger:".ae-hero",start:"top top",end:()=>`+=${innerHeight*(t?1.8:2.5)}`,pin:!0,scrub:.65,anticipatePin:1}}).to(r.pose,{turn:.55,roll:.09,duration:1,ease:"none"},0).to(".ae-hero-copy",{xPercent:t?-15:-25,yPercent:-8,autoAlpha:0,duration:.55},.12).to(".ae-scroll",{autoAlpha:0,duration:.2},0).to(".ae-orbit-one",{rotationZ:65,scale:1.22,duration:2},0).to(".ae-orbit-two",{rotationZ:-55,scale:1.1,duration:2},0).to(r.pose,{explode:1,turn:1.05,scale:t?.95:1.05,duration:1.1},.75).fromTo(".ae-explode-copy",{y:45,autoAlpha:0},{y:0,autoAlpha:1,duration:.6},.85).fromTo(".ae-annotation",{y:20,autoAlpha:0},{y:0,autoAlpha:1,stagger:.23,duration:.4},1.25).to(r.pose,{turn:1.3,roll:-.04,duration:.5},1.9).to(".ae-hero",{backgroundColor:"#dcded3",duration:.5},1.9),at.from(".ae-reveal",{y:100,rotation:-3,opacity:.2,scrollTrigger:{trigger:".ae-manifesto",start:"top 80%",end:"top 20%",scrub:.6}}),at.fromTo(".ae-reveal em",{x:t?30:150},{x:t?-10:-30,scrollTrigger:{trigger:".ae-manifesto",start:"top 75%",end:"bottom 25%",scrub:1}}),at.to(".ae-disc",{rotation:200,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:1}}),at.fromTo(".ae-ribbon span",{xPercent:0},{xPercent:-25,scrollTrigger:{trigger:".ae-manifesto",start:"top bottom",end:"bottom top",scrub:.5}}),at.timeline({scrollTrigger:{trigger:".ae-freq-inner",start:"top top",end:()=>`+=${innerHeight*(t?1:1.5)}`,pin:!0,scrub:.7}}).fromTo(".ae-wave i",{scaleY:.08},{scaleY:1,stagger:{each:.015,from:"center"},duration:1,ease:"sine.inOut"},0).fromTo(".ae-frequency-orb",{scale:.55,x:80,rotation:-60},{scale:1,x:0,rotation:45,duration:1.4},0).from(".ae-freq-notes article",{y:70,autoAlpha:0,stagger:.2,duration:.5},.2).to(".ae-frequency h2",{xPercent:t?-5:-10,duration:1.5},0).to(".ae-wave i",{scaleY:.25,stagger:{each:.012,from:"edges"},duration:.8},1),at.from(".ae-finish-card",{y:100,rotationX:24,rotationY:-12,autoAlpha:0,stagger:.15,scrollTrigger:{trigger:".ae-finishes-grid",start:"top 87%",end:"top 25%",scrub:.7}}),at.to(".ae-mini-headphone",{rotation:12,y:-12,stagger:.1,scrollTrigger:{trigger:".ae-finishes-grid",start:"top bottom",end:"bottom top",scrub:1}}),at.to(".ae-contact-orbit",{rotationZ:80,scale:1.6,scrollTrigger:{trigger:".ae-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function rT(r,t){at.timeline({scrollTrigger:{trigger:".of-hero",start:"top top",end:()=>`+=${innerHeight*(t?1:1.5)}`,pin:!0,scrub:.55}}).to(".of-heading .char",{y:a=>a%2?-(t?75:130):t?75:130,rotation:a=>(a%3-1)*25,rotationX:70,autoAlpha:0,stagger:.018,duration:.75},.15).to(r.pose,{turn:Math.PI*.9,roll:.7,scale:1.35,lift:.1,duration:1.2},0).to(".of-sticker",{rotation:-45,scale:.5,y:-120,autoAlpha:0,duration:.75},.15).to(".of-hero-sub",{x:100,autoAlpha:0,duration:.5},.3).to(".of-cross",{rotation:360,scale:1.9,duration:1.2},0).to(".of-hero-bottom",{autoAlpha:0,duration:.2},0),at.timeline({scrollTrigger:{trigger:".of-statement-stage",start:"top top",end:()=>`+=${innerHeight*(t?1.1:1.7)}`,pin:!0,scrub:.55}}).fromTo(".of-type-row:first-of-type",{xPercent:-30},{xPercent:0,duration:.8},0).fromTo(".of-type-middle",{xPercent:30},{xPercent:0,duration:.8},.1).fromTo(".of-type-last",{xPercent:-30},{xPercent:0,duration:.8},.2).to(".of-type-row>i",{rotation:270,duration:1.6},0).to(".of-type-outline",{xPercent:-100,opacity:.2,duration:1},.5).fromTo(".of-statement-tag",{y:150},{y:-120,rotation:78,duration:1.5},0);let i=document.querySelector(".of-work-track"),s=at.to(i,{x:()=>-(i.scrollWidth-innerWidth),ease:"none",scrollTrigger:{trigger:".of-work-pin",start:"top top",end:()=>`+=${innerWidth*(t?4:3)}`,pin:!0,scrub:.75,invalidateOnRefresh:!0}});document.querySelectorAll(".of-work-panel:not(.of-work-intro)").forEach(a=>{at.fromTo(a.querySelector(".of-work-art"),{rotationY:-25,x:80,scale:.83},{rotationY:20,x:-40,scale:1.06,ease:"none",scrollTrigger:{trigger:a,containerAnimation:s,start:"left right",end:"right left",scrub:!0}})}),at.to(".of-css-cube",{rotationX:210,rotationY:340,rotationZ:25,ease:"none",scrollTrigger:{trigger:".of-work-three",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),at.fromTo(".of-poster-stack>div",{y:a=>a%2?80:-80},{y:a=>a%2?-70:70,stagger:.1,ease:"none",scrollTrigger:{trigger:".of-work-one",containerAnimation:s,start:"left right",end:"right left",scrub:!0}}),at.timeline({scrollTrigger:{trigger:".of-services-pin",start:"top top",end:()=>`+=${innerHeight*(t?1.5:2)}`,pin:!0,scrub:.6}}).from(".of-deck",{rotationY:-20,y:80,duration:.5},0).to(".of-service-card:nth-child(3)",{yPercent:-130,xPercent:35,rotation:22,rotationY:35,autoAlpha:0,duration:.8},.5).to(".of-service-card:nth-child(2)",{yPercent:-135,xPercent:-40,rotation:-27,rotationY:-35,autoAlpha:0,duration:.8},1.4).to(".of-service-card:nth-child(1)",{rotation:0,rotationX:-5,duration:.6},2.2),at.from(".of-contact h2 .char",{yPercent:120,rotationX:-80,rotation:8,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".of-contact",start:"top 80%",end:"top 15%",scrub:.7}}),at.to(".of-footer-stamp",{rotation:25,scrollTrigger:{trigger:".of-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}function sT(r,t){at.set(".fl-bloom-copy",{autoAlpha:0}),r.pose.bloom=.65,at.timeline({scrollTrigger:{trigger:".fl-hero",start:"top top",end:()=>`+=${innerHeight*(t?1.8:2.3)}`,pin:!0,scrub:1}}).to(r.pose,{bloom:1,turn:-.55,roll:.08,scale:1.15,duration:1.4},0).to(".fl-hero-copy",{y:-60,x:-30,autoAlpha:0,duration:.65},.15).to(".fl-scroll",{autoAlpha:0,duration:.2},0).to(".fl-butterfly",{x:t?100:240,y:-130,rotation:45,scale:.75,duration:1.5},0).to(".fl-floating-leaf",{rotation:-20,y:-90,x:-30,duration:2},0).fromTo(".fl-bloom-copy",{y:50,autoAlpha:0},{y:0,autoAlpha:1,duration:.7},.85).to(r.pose,{turn:-.85,lift:.08,bloom:.92,duration:1},1.3),at.from(".fl-line-reveal",{y:90,rotationX:-12,autoAlpha:.15,scrollTrigger:{trigger:".fl-intro",start:"top 75%",end:"top 20%",scrub:1}}),at.fromTo(".fl-line-reveal em",{color:"#acaa92"},{color:"var(--accent)",scrollTrigger:{trigger:".fl-intro",start:"top 50%",end:"top top",scrub:!0}}),at.fromTo(".fl-vine",{y:120,rotation:-40},{y:-70,rotation:0,scrollTrigger:{trigger:".fl-intro",start:"top bottom",end:"bottom top",scrub:1}}),at.timeline({scrollTrigger:{trigger:".fl-herb-pin",start:"top top",end:()=>`+=${innerHeight*(t?2:2.5)}`,pin:!0,scrub:.8}}).from(".fl-specimens",{y:80,rotationY:-10,duration:.45},0).to(".fl-specimen:nth-child(3)",{xPercent:t?115:120,yPercent:-15,rotation:35,rotationY:35,autoAlpha:0,duration:1},.5).to(".fl-specimen:nth-child(2)",{xPercent:t?-115:-135,yPercent:-15,rotation:-35,rotationY:-35,autoAlpha:0,duration:1},1.7).to(".fl-specimen:nth-child(1)",{rotation:0,rotationY:0,y:-10,duration:.8},2.7),at.from(".fl-season",{rotationY:t?-25:-55,y:50,autoAlpha:0,stagger:.17,scrollTrigger:{trigger:".fl-season-grid",start:"top 87%",end:"top 25%",scrub:.9}}),at.to(".fl-season-icon svg",{rotation:-15,y:-15,stagger:.12,scrollTrigger:{trigger:".fl-season-grid",start:"top bottom",end:"bottom top",scrub:1.2}}),at.from(".fl-contact h2 .char",{y:40,autoAlpha:0,rotationX:-40,stagger:.025,scrollTrigger:{trigger:".fl-contact",start:"top 75%",end:"top 15%",scrub:1}}),at.to(".fl-contact-sprig svg",{rotation:i=>i?-100:10,y:-50,scrollTrigger:{trigger:".fl-contact",start:"top bottom",end:"bottom bottom",scrub:1.5}})}function oT(r,t){at.set([".mn-section-copy",".mn-floor-notes"],{autoAlpha:0}),at.timeline({scrollTrigger:{trigger:".mn-hero",start:"top top",end:()=>`+=${innerHeight*(t?2:2.8)}`,pin:!0,scrub:.8}}).to(r.pose,{turn:.8,scale:t?.95:1.08,duration:1,ease:"none"},0).to(".mn-hero-copy",{yPercent:-30,autoAlpha:0,duration:.5},.15).to(".mn-coordinate,.mn-hero-bottom",{autoAlpha:0,duration:.25},0).to(".mn-sun",{xPercent:-40,yPercent:30,scale:1.6,duration:2},0).to(".mn-axis",{rotation:45,scale:1.4,duration:2},0).to(r.pose,{explode:1,turn:1.5,roll:.12,scale:t?.86:1,duration:1.1},.8).fromTo(".mn-section-copy",{y:40,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1).fromTo(".mn-floor-notes",{x:30,autoAlpha:0},{x:0,autoAlpha:1,duration:.5},1.45).to(".mn-hero",{backgroundColor:"#c9c9bd",duration:.6},1.6),at.from(".mn-belief h2>span,.mn-belief h2>em",{x:s=>s%2?100:-100,autoAlpha:.15,stagger:.2,scrollTrigger:{trigger:".mn-belief",start:"top 75%",end:"top 5%",scrub:1}}),at.fromTo(".mn-window i",{xPercent:-70,skewY:20},{xPercent:70,skewY:-20,stagger:.1,scrollTrigger:{trigger:".mn-belief",start:"top bottom",end:"bottom top",scrub:1}}),at.timeline({scrollTrigger:{trigger:".mn-drawing-pin",start:"top top",end:()=>`+=${innerHeight*(t?2.2:2.8)}`,pin:!0,scrub:.7}}).fromTo(".mn-draw path",{strokeDasharray:1,strokeDashoffset:1},{strokeDashoffset:0,stagger:.08,duration:1.4,ease:"none"},0).fromTo(".mn-blueprint",{rotationX:45,rotationZ:-25,scale:.78},{rotationX:0,rotationZ:0,scale:1,duration:1.5},0).fromTo(".mn-plan-sun",{scale:0,transformOrigin:"50% 50%"},{scale:1,duration:.6},.7).from(".mn-drawing-notes article:first-child",{autoAlpha:0,y:30,duration:.4},.4).to(".mn-drawing-notes article:first-child",{autoAlpha:0,y:-20,duration:.3},1.1).fromTo(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},1.35).to(".mn-plan-sun",{scale:1.6,x:40,y:-30,duration:.8},1.4).to(".mn-drawing-notes article:nth-child(2)",{autoAlpha:0,y:-20,duration:.3},2).fromTo(".mn-drawing-notes article:nth-child(3)",{autoAlpha:0,y:30},{autoAlpha:1,y:0,duration:.4},2.25).to(".mn-blueprint",{rotationX:t?12:30,rotationZ:15,duration:1},1.8).fromTo(".mn-drawing-rule i",{scaleX:0},{scaleX:1,duration:2.8,ease:"none"},0),at.timeline({scrollTrigger:{trigger:".mn-project-pin",start:"top top",end:()=>`+=${innerHeight*(t?2.8:3.5)}`,pin:!0,scrub:.8}}).to(".mn-project-quiet .mn-building",{rotationY:35,y:-35,duration:1.3},0).to(".mn-project-quiet",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},.8).fromTo(".mn-project-common .mn-building",{rotationY:-40,y:70},{rotationY:15,y:-35,duration:1.5},.9).fromTo(".mn-project-common .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},1.3).to(".mn-project-common",{clipPath:"inset(0 0 100% 0)",duration:.8,ease:"power2.inOut"},2.1).fromTo(".mn-project-above .mn-building",{rotationY:-30,y:90},{rotationY:30,y:-20,duration:1.5},2.2).fromTo(".mn-project-above .mn-project-copy",{y:60,autoAlpha:0},{y:0,autoAlpha:1,duration:.5},2.65),at.from(".mn-material-swatch",{rotationX:55,y:90,autoAlpha:0,stagger:.16,scrollTrigger:{trigger:".mn-material-grid",start:"top 85%",end:"top 20%",scrub:.8}}),at.to(".mn-material-light i",{xPercent:140,rotation:35,scrollTrigger:{trigger:".mn-material-grid",start:"top bottom",end:"bottom top",scrub:1}}),at.from(".mn-contact .char",{rotationX:-90,yPercent:70,autoAlpha:0,stagger:.025,scrollTrigger:{trigger:".mn-contact",start:"top 75%",end:"top 10%",scrub:.8}}),at.fromTo(".mn-door i",{scale:1,rotation:0},{scale:s=>1+s*.22,rotation:s=>s*7,stagger:.1,scrollTrigger:{trigger:".mn-contact",start:"top bottom",end:"bottom bottom",scrub:1}})}parent!==window&&document.addEventListener("keydown",r=>{if(r.key==="Escape"&&(r.preventDefault(),Bl({type:"motion-back",id:He})),r.key==="Tab"){let t=[...document.querySelectorAll("a[href],button")];!r.shiftKey&&document.activeElement===t.at(-1)?(r.preventDefault(),Bl({type:"motion-focus",id:He,direction:"next"})):r.shiftKey&&document.activeElement===t[0]&&(r.preventDefault(),Bl({type:"motion-focus",id:He,direction:"previous"}))}});document.addEventListener("click",r=>{r.target?.closest('a[href="#top"]')&&(r.preventDefault(),window.scrollTo({top:0,behavior:matchMedia("(prefers-reduced-motion: reduce)").matches?"instant":"smooth"}),parent===window&&history.replaceState(null,"","#top"))});if(Ol&&__(He)){let r=at.matchMedia(),t=-1;Promise.all([document.fonts.ready,...Array.from(Ol.querySelectorAll("img[data-critical]")).map(e=>e.decode().catch(()=>{}))]).then(()=>{r.add({reduce:"(prefers-reduced-motion: reduce)",normal:"(prefers-reduced-motion: no-preference)",mobile:"(max-width: 760px)"},e=>{let n=!!e.conditions?.reduce,i=!!e.conditions?.mobile;Ol.classList.toggle("mt-reduced",n);let s=Ol.querySelector(".mt-scene,.ns-scene"),o=s?He==="pelagic"||He==="heliograph"?new Bu(s,He,n):new Ou(s,He,n):void 0,a=d=>o?.render(d),l=He==="lightkeeper"?Mg(n):void 0,c=He==="nullsignal"||He==="bitquest"?d_(n):void 0;n?o&&(o.pose.bloom=1,o.render(0)):(at.ticker.add(a),He==="aether"&&o?iT(o,i):He==="offscript"&&o?rT(o,i):He==="floraison"&&o?sT(o,i):He==="monolith"&&o?oT(o,i):He==="reverie"||He==="traverse"?m_(He,i):He!=="lightkeeper"&&He!=="nullsignal"&&He!=="bitquest"&&g_(He,o,i),at.utils.toArray(".mt-reveal").forEach(d=>at.from(d,{y:70,rotationX:-10,autoAlpha:.1,scrollTrigger:{trigger:d,start:"top 85%",end:"top 30%",scrub:.8}})),at.from(".mt-nav",{y:-15,autoAlpha:0,duration:.6}));let u=te.create({start:0,end:"max",onUpdate:d=>{at.set(".mt-progress i",{scaleX:d.progress}),Math.abs(t-d.progress)>.005&&(t=d.progress,Bl({type:"motion-progress",id:He,progress:d.progress}))}}),h=!1,f=()=>{h||(h=!0,c?.(),l?.(),at.ticker.remove(a),o?.dispose(),u.kill())};return window.addEventListener("pagehide",f,{once:!0}),requestAnimationFrame(()=>{te.refresh(),document.documentElement.dataset.motionReady="true",Bl({type:"motion-ready",id:He})}),()=>{f(),window.removeEventListener("pagehide",f)}})}),window.addEventListener("pagehide",()=>r.revert(),{once:!0})}})();
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
