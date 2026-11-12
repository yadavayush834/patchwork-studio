/* Diorama: a painting and its depth map, rendered as a small 3D place. Patchwork Studio, CC0. */
(()=>{var U=Object.defineProperty;var F=(p,i,e)=>i in p?U(p,i,{enumerable:!0,configurable:!0,writable:!0,value:e}):p[i]=e;var u=(p,i,e)=>F(p,typeof i!="symbol"?i+"":i,e);var I={dust:0,embers:1,snow:2,rain:3,fireflies:4,steam:5,petals:6,sparks:7,bubbles:8},_=`#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`,D=`
uniform vec2 uRes; uniform float uImgAsp, uOverscan;
uniform vec2 uCam, uCenter; uniform float uZoom, uFocus, uDolly;
vec2 fitScale(){ float a = uRes.x / uRes.y; return (a > uImgAsp ? vec2(1., uImgAsp / a) : vec2(a / uImgAsp, 1.)) / uOverscan; }
vec2 screenToImage(vec2 uv){ return uCenter + ((uv - .5) * fitScale() + .5 - uCenter) / uZoom; }
vec2 imageToScreen(vec2 img){ return ((uCenter + (img - uCenter) * uZoom) - .5) / fitScale() + .5; }
vec2 shift(vec2 img){ return uCam + (img - uCenter) * uDolly; }
`,G=`
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
`,S=`#version 300 es
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
${D}${G}
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
}`,C=`#version 300 es
precision highp float;
in float aId;
uniform int uKind; uniform float uTime, uSize, uSpeed, uCount, uPixel, uBurst;
uniform vec4 uRegion; uniform vec2 uDepthR, uBurstAt; uniform vec3 uTint;
uniform sampler2D uDepth;
out vec3 vCol; out float vA; out float vShape;
${D}
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
}`,M=`#version 300 es
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
}`,X=`#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uDir;
void main(){
  vec3 s = texture(uTex, vUv).rgb * .227;
  s += (texture(uTex, vUv + uDir * 1.385).rgb + texture(uTex, vUv - uDir * 1.385).rgb) * .316;
  s += (texture(uTex, vUv + uDir * 3.231).rgb + texture(uTex, vUv - uDir * 3.231).rgb) * .07;
  o = vec4(s, 1.);
}`,B=`#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uLight; uniform float uDecay;
void main(){
  vec2 d = (vUv - uLight) / 48. * .92;
  vec2 p = vUv; vec3 s = vec3(0.); float w = 1.;
  for (int i = 0; i < 48; i++) { p -= d; s += texture(uTex, p).rgb * w; w *= uDecay; }
  o = vec4(s / 20., 1.);
}`,N=`#version 300 es
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
}`;function P(p){return new Promise((i,e)=>{let t=new Image;t.decoding="async",t.onload=()=>i(t),t.onerror=()=>e(new Error(`Could not load ${p}`)),t.src=p})}function W(p,i){let e=document.createElement("canvas"),t=96,r=Math.round(96*p.naturalHeight/p.naturalWidth);e.width=t,e.height=r;let f=e.getContext("2d",{willReadFrequently:!0});f.drawImage(p,0,0,t,r);let s=f.getImageData(0,0,t,r).data,c=[];for(let h=0;h<s.length;h+=4)c.push([s[h]/255,s[h+1]/255,s[h+2]/255]);c.sort((h,o)=>h[0]+h[1]+h[2]-(o[0]+o[1]+o[2]));let l=Array.from({length:i},(h,o)=>c[Math.floor((o+.5)/i*c.length)].slice());for(let h=0;h<10;h++){let o=l.map(()=>[0,0,0,0]);for(let a of c){let m=0,v=9;l.forEach((T,E)=>{let x=(a[0]-T[0])**2+(a[1]-T[1])**2+(a[2]-T[2])**2;x<v&&(v=x,m=E)});let g=o[m];g[0]+=a[0],g[1]+=a[1],g[2]+=a[2],g[3]++}l=l.map((a,m)=>o[m][3]?[o[m][0]/o[m][3],o[m][1]/o[m][3],o[m][2]/o[m][3]]:a)}return l}var w=class{constructor(i,e){u(this,"canvas");u(this,"options");u(this,"cam",{x:0,y:0,zoom:1,cx:.5,cy:.5,dolly:0});u(this,"light",{x:.5,y:.5,boost:0});u(this,"ready");u(this,"time",0);u(this,"gl");u(this,"prog",{});u(this,"tex",{});u(this,"imgAsp",16/9);u(this,"scene");u(this,"half1");u(this,"half2");u(this,"rays");u(this,"quad");u(this,"points");u(this,"maxPoints",0);u(this,"palette",[]);u(this,"pointer",{x:0,y:0,tx:0,ty:0});u(this,"pulseAt",{x:.5,y:.5,t:99,k:0});u(this,"bursts",new Map);u(this,"raf",0);u(this,"last",0);u(this,"running",!1);u(this,"visible",!0);u(this,"cleanups",[]);u(this,"failed",!1);u(this,"paused",!1);this.canvas=i,this.options={depthScale:.04,focus:.35,overscan:1.08,pointer:1,autoplay:!0,...e},this.ready=this.init().catch(t=>{this.fail(t)})}pause(){this.paused=!0,this.sync()}resume(){this.paused=!1,this.sync()}fail(i){this.failed=!0,console.warn("Diorama fell back to a still picture:",i);let e=this.canvas.parentElement;e&&(e.style.backgroundImage=`url("${this.options.color}")`,e.style.backgroundSize="cover",e.style.backgroundPosition="center"),this.canvas.style.visibility="hidden"}async init(){let i=this.canvas.getContext("webgl2",{antialias:!1,premultipliedAlpha:!1,alpha:!1,powerPreference:"high-performance"});if(!i)throw new Error("WebGL2 is not available");this.gl=i;let[e,t]=await Promise.all([P(this.options.color),P(this.options.depth)]);if(this.imgAsp=e.naturalWidth/e.naturalHeight,this.tex.color=this.texture(e,!0),this.tex.depth=this.texture(t,!1),this.options.pixel&&this.options.palette){let s=this.options.paletteFrom?await P(this.options.paletteFrom).catch(()=>e):e;this.palette=W(s,Math.min(24,this.options.palette))}this.prog.scene=this.program(S,["uColor","uDepth","uTime","uFog","uGlow","uGlowTint","uWater","uPulse","uTitle","uTitleP","uRes","uImgAsp","uOverscan","uCam","uCenter","uZoom","uFocus","uDolly"]),this.prog.particle=this.program(M,["uKind","uTime","uSize","uSpeed","uCount","uPixel","uBurst","uRegion","uDepthR","uBurstAt","uTint","uDepth","uGlowK","uRes","uImgAsp","uOverscan","uCam","uCenter","uZoom","uFocus","uDolly"],C),this.prog.blur=this.program(X,["uTex","uDir"]),this.prog.rays=this.program(B,["uTex","uLight","uDecay"]),this.prog.final=this.program(N,["uScene","uBloom","uRays","uRes","uBloomK","uRaysK","uPalN","uPixel","uRayCol","uTint","uGrade","uPal"]),this.quad=i.createVertexArray(),i.bindVertexArray(this.quad);let r=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,r),i.bufferData(i.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,-1,1,1,-1,1,1]),i.STATIC_DRAW),i.enableVertexAttribArray(0),i.vertexAttribPointer(0,2,i.FLOAT,!1,0,0),this.maxPoints=Math.max(2048,...(this.options.particles??[]).map(s=>s.count*2)),this.points=i.createVertexArray(),i.bindVertexArray(this.points);let f=i.createBuffer();i.bindBuffer(i.ARRAY_BUFFER,f),i.bufferData(i.ARRAY_BUFFER,new Float32Array(Array.from({length:this.maxPoints},(s,c)=>c)),i.STATIC_DRAW),i.enableVertexAttribArray(0),i.vertexAttribPointer(0,1,i.FLOAT,!1,0,0),i.bindVertexArray(null),this.resize(),this.listen(),this.draw(0),this.canvas.dataset.ready="true"}texture(i,e){let t=this.gl,r=t.createTexture();return t.bindTexture(t.TEXTURE_2D,r),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,i),t.generateMipmap(t.TEXTURE_2D),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR_MIPMAP_LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,e&&this.options.pixel?t.NEAREST:t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),r}program(i,e,t=_){let r=this.gl,f=(l,h)=>{let o=r.createShader(l);if(r.shaderSource(o,h),r.compileShader(o),!r.getShaderParameter(o,r.COMPILE_STATUS))throw new Error(r.getShaderInfoLog(o)||"shader error");return o},s=r.createProgram();if(r.attachShader(s,f(r.VERTEX_SHADER,t)),r.attachShader(s,f(r.FRAGMENT_SHADER,i)),r.bindAttribLocation(s,0,t===_?"aPos":"aId"),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS))throw new Error(r.getProgramInfoLog(s)||"link error");let c={};for(let l of e)c[l]=r.getUniformLocation(s,l==="uPal"?"uPal[0]":l);return{p:s,u:c}}target(i,e,t){let r=this.gl,f=r.createFramebuffer(),s=[];r.bindFramebuffer(r.FRAMEBUFFER,f);for(let c=0;c<t;c++){let l=r.createTexture();r.bindTexture(r.TEXTURE_2D,l),r.texImage2D(r.TEXTURE_2D,0,r.RGBA8,i,e,0,r.RGBA,r.UNSIGNED_BYTE,null);let h=this.options.pixel&&c===0;r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,h?r.NEAREST:r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MAG_FILTER,h?r.NEAREST:r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE),r.framebufferTexture2D(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+c,r.TEXTURE_2D,l,0),s.push(l)}return r.drawBuffers(s.map((c,l)=>r.COLOR_ATTACHMENT0+l)),{fb:f,tex:s,w:i,h:e}}resize(){if(!this.gl||this.failed)return;let i=this.gl,e=this.canvas.getBoundingClientRect(),t=Math.max(1,e.width),r=Math.max(1,e.height),f=this.options.pixel||0,s=Math.min(globalThis.devicePixelRatio||1,1.5),c=f?Math.ceil(t/f):Math.round(t*s),l=f?Math.ceil(r/f):Math.round(r*s),h=2400/Math.max(c,l);if(h<1&&(c=Math.round(c*h),l=Math.round(l*h)),this.canvas.width===c&&this.canvas.height===l&&this.scene)return;this.canvas.width=c,this.canvas.height=l,f&&(this.canvas.style.imageRendering="pixelated");for(let m of[this.scene,this.half1,this.half2,this.rays])m&&(i.deleteFramebuffer(m.fb),m.tex.forEach(v=>i.deleteTexture(v)));this.scene=this.target(c,l,2);let o=Math.max(1,Math.round(c/(f?1:2))),a=Math.max(1,Math.round(l/(f?1:2)));this.half1=this.target(o,a,1),this.half2=this.target(o,a,1),this.rays=this.target(o,a,1),this.running||this.draw(0)}listen(){let i=new ResizeObserver(()=>this.resize());i.observe(this.canvas),this.cleanups.push(()=>i.disconnect());let e=s=>{s.pointerType!=="touch"&&(this.pointer.tx=s.clientX/innerWidth-.5,this.pointer.ty=s.clientY/innerHeight-.5)};addEventListener("pointermove",e,{passive:!0}),this.cleanups.push(()=>removeEventListener("pointermove",e));let t=new IntersectionObserver(([s])=>{this.visible=s.isIntersecting,this.sync()},{rootMargin:"120px"});t.observe(this.canvas),this.cleanups.push(()=>t.disconnect());let r=()=>this.sync();document.addEventListener("visibilitychange",r),this.cleanups.push(()=>document.removeEventListener("visibilitychange",r));let f=matchMedia("(prefers-reduced-motion: reduce)");f.addEventListener("change",r),this.cleanups.push(()=>f.removeEventListener("change",r)),this.sync()}get reduced(){return!!this.options.still||matchMedia("(prefers-reduced-motion: reduce)").matches}sync(){let i=!!this.options.autoplay&&!this.failed&&!this.paused&&this.visible&&!document.hidden&&!this.reduced;i&&!this.running?(this.running=!0,this.last=performance.now(),this.raf=requestAnimationFrame(e=>this.loop(e))):!i&&this.running&&(this.running=!1,cancelAnimationFrame(this.raf))}loop(i){if(!this.running)return;let e=Math.min(.05,(i-this.last)/1e3);this.last=i,this.draw(e),this.raf=requestAnimationFrame(t=>this.loop(t))}setTitle(i){if(!this.gl||this.failed)return;let e=this.gl;i?(this.tex.title||(this.tex.title=e.createTexture(),e.bindTexture(e.TEXTURE_2D,this.tex.title),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,e.LINEAR_MIPMAP_LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE)),e.bindTexture(e.TEXTURE_2D,this.tex.title),e.pixelStorei(e.UNPACK_FLIP_Y_WEBGL,!0),e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,i),e.generateMipmap(e.TEXTURE_2D)):(this.tex.title&&e.deleteTexture(this.tex.title),this.tex.title=void 0),this.running||this.draw(0)}pulse(i,e,t=1){this.pulseAt={x:i,y:1-e,t:0,k:t}}burst(i,e,t){this.bursts.set(i,{x:e,y:t,t:0})}draw(i){if(!this.gl||this.failed||!this.scene||!this.tex.color)return;let e=this.gl,t=this.options;this.time+=i;let r=1-Math.exp(-i*3.2),f=this.reduced?0:t.pointer??1;this.pointer.x+=(this.pointer.tx*f-this.pointer.x)*r,this.pointer.y+=(this.pointer.ty*f-this.pointer.y)*r,this.pulseAt.t+=i,this.bursts.forEach(n=>n.t+=i);let s=t.depthScale??.04,c=(this.cam.x+this.pointer.x)*s,l=(this.cam.y-this.pointer.y*.6)*s,h=(n,b,d)=>{e.uniform2f(n.uRes,b,d),e.uniform1f(n.uImgAsp,this.imgAsp),e.uniform1f(n.uOverscan,t.overscan??1.08),e.uniform2f(n.uCam,c,l),e.uniform2f(n.uCenter,this.cam.cx,1-this.cam.cy),e.uniform1f(n.uZoom,this.cam.zoom),e.uniform1f(n.uFocus,t.focus??.35),e.uniform1f(n.uDolly,this.cam.dolly)};e.disable(e.DEPTH_TEST);let o=this.scene;e.bindFramebuffer(e.FRAMEBUFFER,o.fb),e.viewport(0,0,o.w,o.h),e.disable(e.BLEND);let a=this.prog.scene;e.useProgram(a.p),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.tex.color),e.uniform1i(a.u.uColor,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tex.depth),e.uniform1i(a.u.uDepth,1),h(a.u,o.w,o.h),e.uniform1f(a.u.uTime,this.time),e.uniform4fv(a.u.uFog,t.fog??[0,0,0,0]);let m=t.glow??{threshold:.8,strength:.6};e.uniform4f(a.u.uGlow,m.threshold,m.strength,m.flicker??.15,this.light.boost),e.uniform3fv(a.u.uGlowTint,m.tint??[1,1,1]),e.uniform2f(a.u.uWater,t.water?.y??2,t.water?.strength??0),e.uniform4f(a.u.uPulse,this.pulseAt.x,this.pulseAt.y,this.pulseAt.t,this.pulseAt.t<3?this.pulseAt.k:0),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,this.tex.title??this.tex.depth),e.uniform1i(a.u.uTitle,2);let v=t.title;e.uniform4f(a.u.uTitleP,v?.depth??0,v&&this.tex.title?1:0,v?.glow??0,v?.shadow??.6),e.bindVertexArray(this.quad),e.drawArrays(e.TRIANGLES,0,6),t.particles?.length&&(a=this.prog.particle,e.useProgram(a.p),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,this.tex.depth),e.uniform1i(a.u.uDepth,1),h(a.u,o.w,o.h),e.uniform1f(a.u.uTime,this.time),e.uniform1f(a.u.uPixel,t.pixel||0),e.enable(e.BLEND),e.bindVertexArray(this.points),t.particles.forEach((n,b)=>{let d=this.bursts.get(b);if(n.burst&&(!d||d.t>2.5))return;let A=!["snow","petals","steam","bubbles"].includes(n.kind);e.blendFunc(e.ONE,A?e.ONE:e.ONE_MINUS_SRC_ALPHA),e.uniform1i(a.u.uKind,I[n.kind]),e.uniform1f(a.u.uSize,n.size??3),e.uniform1f(a.u.uSpeed,n.speed??1),e.uniform1f(a.u.uCount,n.count),e.uniform4fv(a.u.uRegion,n.region?[n.region[0],1-n.region[3],n.region[2],1-n.region[1]]:[0,0,1,1]),e.uniform2fv(a.u.uDepthR,n.depth??[.2,.9]),e.uniform3fv(a.u.uTint,n.color),e.uniform1f(a.u.uGlowK,n.glow??(A?1:0)),e.uniform1f(a.u.uBurst,n.burst&&d?d.t:-2),e.uniform2f(a.u.uBurstAt,d?d.x:.5,d?1-d.y:.5),n.burst&&d&&e.uniform2f(a.u.uBurstAt,d.x,1-d.y),e.drawArrays(e.POINTS,0,n.count)}),e.disable(e.BLEND));let g=this.half1,T=this.half2,E=this.rays;a=this.prog.blur,e.useProgram(a.p),e.bindVertexArray(this.quad);let x=(n,b,d,A)=>{e.bindFramebuffer(e.FRAMEBUFFER,b.fb),e.viewport(0,0,b.w,b.h),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,n),e.uniform1i(a.u.uTex,0),e.uniform2f(a.u.uDir,d/b.w,A/b.h),e.drawArrays(e.TRIANGLES,0,6)},R=t.glow?.bloom??1.6;x(o.tex[1],g,R,0),x(g.tex[0],T,0,R),x(T.tex[0],g,R*2.2,0),x(g.tex[0],T,0,R*2.2),t.rays&&(a=this.prog.rays,e.useProgram(a.p),e.bindFramebuffer(e.FRAMEBUFFER,E.fb),e.viewport(0,0,E.w,E.h),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o.tex[1]),e.uniform1i(a.u.uTex,0),e.uniform2f(a.u.uLight,this.light.x,1-this.light.y),e.uniform1f(a.u.uDecay,t.rays.decay??.965),e.drawArrays(e.TRIANGLES,0,6)),a=this.prog.final,e.useProgram(a.p),e.bindFramebuffer(e.FRAMEBUFFER,null),e.viewport(0,0,this.canvas.width,this.canvas.height),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,o.tex[0]),e.uniform1i(a.u.uScene,0),e.activeTexture(e.TEXTURE1),e.bindTexture(e.TEXTURE_2D,T.tex[0]),e.uniform1i(a.u.uBloom,1),e.activeTexture(e.TEXTURE2),e.bindTexture(e.TEXTURE_2D,E.tex[0]),e.uniform1i(a.u.uRays,2),e.uniform2f(a.u.uRes,this.canvas.width,this.canvas.height),e.uniform1f(a.u.uBloomK,1),e.uniform1f(a.u.uRaysK,t.rays?t.rays.strength:0),e.uniform3fv(a.u.uRayCol,t.rays?.color??[1,.9,.7]);let y=t.grade??{};e.uniform3fv(a.u.uTint,y.tint??[1,1,1]),e.uniform4f(a.u.uGrade,y.exposure??1,y.contrast??1,y.saturation??1,y.vignette??.25),e.uniform1f(a.u.uPalN,this.palette.length),e.uniform1f(a.u.uPixel,t.pixel||0),this.palette.length&&e.uniform3fv(a.u.uPal,this.palette.flat().concat(new Array((24-this.palette.length)*3).fill(0))),e.drawArrays(e.TRIANGLES,0,6),e.bindVertexArray(null)}destroy(){this.running=!1,cancelAnimationFrame(this.raf),this.cleanups.forEach(i=>i()),this.gl?.getExtension("WEBGL_lose_context")?.loseContext()}};function L(p,i){let e=i.getBoundingClientRect();return{x:(p.clientX-e.left)/e.width,y:(p.clientY-e.top)/e.height}}Object.assign(globalThis,{Diorama:w,dioramaPoint:L});})();
