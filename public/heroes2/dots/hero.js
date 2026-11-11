/* Specimen: a live 3D jellyfish (or your own picture) rebuilt from single-colour dots.
   Pass 1 raymarches the jellyfish into a small light map, one texel per dot.
   Pass 2 draws every cell as a dot sized by that light: each one flickers on its own,
   a scan line rolls down, dots shy away from the pointer and a click sends a ripple through them. */
(() => {
  const root = document.querySelector(".hx-dots"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const css = getComputedStyle(document.documentElement);
  const rgb = (h) => { const n = parseInt(h.trim().slice(1), 16); return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
  const DOT = rgb(css.getPropertyValue("--accent") || "#d4ff3a"), BG = rgb(css.getPropertyValue("--bg") || "#050505");
  const image = root.dataset.image || "";
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.from(".d-title .w > span", { yPercent: 105, duration: 1, ease: "expo.out", stagger: 0.07, delay: 0.5 });
    gsap.from(".d-label, .d-sub, .d-copy .hx-actions, .hx-nav > *, .d-tag", { autoAlpha: 0, y: 12, duration: 0.8, ease: "power3.out", stagger: 0.07, delay: 0.8 });
  };
  if (!gl) { enter(); return; }

  const VS = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  // Pass 1: the specimen, as light. Bell, ruffled rim, four oral arms and eight trailing tentacles.
  const SUBJECT = `precision highp float;
uniform vec2 uRes, uTilt; uniform float uTime;
mat2 rot(float a){float c=cos(a),s=sin(a);return mat2(c,-s,s,c);}
float pulse(){return sin(uTime*1.7);}
float sdBell(vec3 p){
  float pu=pulse();
  vec3 q=p; q.xz*=1.+.09*pu; q.y*=1.-.07*pu;
  float a=atan(q.z,q.x);
  float r=length(q.xz);
  float rim=.035*sin(a*12.+uTime*2.)*smoothstep(.0,-.25,q.y-.05);
  float outer=length(q/vec3(1.,.78,1.))-1.-rim;
  float inner=length((q-vec3(0.,-.12,0.))/vec3(1.,.7,1.))-.88;
  float shell=max(outer,-inner);
  return max(shell,-(q.y+.08));
}
float sdStrands(vec3 p,out float thin){
  thin=0.;
  float d=1e3;
  float pu=pulse();
  for(int i=0;i<12;i++){
    float fi=float(i);
    bool arm=i<4;
    float a=fi/(arm?4.:8.)*6.2832+(arm?.4:0.);
    float r0=arm?.18:.92+.06*pu;
    float y=clamp(p.y,-3.4,-.05);
    float s=-y;
    vec2 c=vec2(cos(a),sin(a))*r0*(1.+s*(arm?.05:.12));
    c+=vec2(sin(s*2.2-uTime*1.6+fi*1.3),cos(s*1.9-uTime*1.3+fi*2.1))*.16*s*(arm?.6:1.);
    float th=arm?.1*(1.-s/3.6)+.035*sin(s*14.+fi):.03+.012*sin(s*9.-uTime*2.+fi);
    float len=arm?2.2:3.3+.3*sin(fi*3.);
    float dd=max(length(p.xz-c)-th,max(p.y+.05-.0,-p.y-len));
    if(dd<d){d=dd;thin=arm?0.:1.;}
  }
  return d;
}
float map(vec3 p,out float part){
  float th;
  float b=sdBell(p), s=sdStrands(p,th);
  part=b<s?0.:(th>.5?2.:1.);
  return min(b,s*.7);
}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y;
  // The specimen sits left of centre; the copy has the right.
  uv.x+=.42*uRes.x/uRes.y-.36;
  vec3 ro=vec3(0.,.1,7.4), rd=normalize(vec3(uv,-1.9));
  float yaw=uTime*.18+uTilt.x*.9, pitch=-.28+uTilt.y*.35;
  ro.yz*=rot(pitch); rd.yz*=rot(pitch); ro.xz*=rot(yaw); rd.xz*=rot(yaw);
  ro.y-=.6;
  float t=0., part=0., glow=0.;
  for(int i=0;i<72;i++){
    vec3 p=ro+rd*t;
    float d=map(p,part);
    glow+=exp(-max(d,0.)*9.)*.012;
    if(d<.002||t>14.) break;
    t+=d*.8;
  }
  float lum=glow*.5;
  if(t<14.){
    vec3 p=ro+rd*t;
    vec2 e=vec2(.004,0.); float pp;
    vec3 n=normalize(vec3(map(p+e.xyy,pp)-map(p-e.xyy,pp),map(p+e.yxy,pp)-map(p-e.yxy,pp),map(p+e.yyx,pp)-map(p-e.yyx,pp)));
    float fres=pow(1.-abs(dot(n,-rd)),2.2);
    float dif=max(dot(n,normalize(vec3(.5,.8,.6))),0.);
    // Glass-like body: bright rims, dim faces, a warm core inside the bell.
    lum=part==0.?.18+fres*.95+dif*.25:part==1.?.35+dif*.45+fres*.4:.55+fres*.3;
    float core=exp(-length(p-vec3(0.,.15,0.))*2.5)*(part==0.?.6:0.);
    lum+=core*(.6+.4*sin(uTime*1.7));
  }
  gl_FragColor=vec4(vec3(clamp(lum,0.,1.)),1.);
}`;
  // Pass 2: dots.
  const DOTS = `precision highp float;
uniform sampler2D uSub; uniform vec2 uRes, uMouse, uClickPos, uGrid; uniform float uTime, uCell, uClick, uFade, uImage;
uniform vec3 uDot, uBg;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
void main(){
  vec2 px=gl_FragCoord.xy;
  // Dots shy away from the pointer, and a click sends a ring outward.
  vec2 dm=px-uMouse; float dl=length(dm);
  vec2 push=dm/max(dl,1.)*90.*exp(-dl/110.);
  vec2 dc=px-uClickPos; float cl=length(dc);
  float ring=exp(-pow((cl-uClick*700.)/60.,2.))*exp(-uClick*1.6);
  push+=dc/max(cl,1.)*ring*40.;
  vec2 q=px-push;
  vec2 cell=floor(q/uCell), f=fract(q/uCell)-.5;
  vec2 suv=(cell+.5)/uGrid;
  float lum=texture2D(uSub,vec2(suv.x,suv.y)).r;
  // Each dot shimmers on its own clock.
  float h=hash(cell);
  float flick=.72+.28*sin(uTime*(2.+h*5.)+h*40.);
  // A bright scan rolls down every few seconds.
  float scanY=uRes.y*(1.-fract(uTime*.12));
  float scan=exp(-pow((q.y-scanY)/36.,2.));
  lum=lum*flick*(1.+scan*1.4)+ring*.6;
  // A faint grid of dust keeps the field alive where the subject is dark.
  float dust=step(.82,h)*.07*(.5+.5*sin(uTime*.8+h*20.));
  float r=sqrt(clamp(lum,0.,1.4))*.56+dust;
  float d=length(f);
  float dotm=smoothstep(r,r-.12,d)*step(.04,r);
  vec3 c=mix(uBg,uDot*(.55+.45*min(lum,1.2)),dotm);
  // Dissolve in, cell by cell.
  if(h>uFade) c=uBg;
  gl_FragColor=vec4(c,1.);
}`;
  const prog = (fs) => {
    const p = gl.createProgram();
    for (const [t, s] of [[gl.VERTEX_SHADER, VS], [gl.FRAGMENT_SHADER, fs]]) {
      const sh = gl.createShader(t); gl.shaderSource(sh, s); gl.compileShader(sh);
      if (!gl.getShaderParameter(sh, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(sh));
      gl.attachShader(p, sh);
    }
    gl.linkProgram(p); return p;
  };
  const pSub = prog(SUBJECT), pDots = prog(DOTS);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const bindQuad = (p) => { const l = gl.getAttribLocation(p, "p"); gl.enableVertexAttribArray(l); gl.vertexAttribPointer(l, 2, gl.FLOAT, false, 0, 0); };
  const U = (p, n) => gl.getUniformLocation(p, n);
  const tex = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, tex);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
  const fbo = gl.createFramebuffer();

  const CELL = 7;
  let W = 0, H = 0, GW = 1, GH = 1, dpr = 1, img = null;
  const st = { mx: -1e4, my: -1e4, tx: -1e4, ty: -1e4, tilt: [0, 0], ttilt: [0, 0], click: 99, cx: 0, cy: 0, fade: reduced ? 1.1 : 0, visible: true, raf: 0 };
  // Your own picture: drawn once into the light map with "cover" framing on the left of the hero.
  const paintImage = () => {
    const c = document.createElement("canvas"); c.width = GW; c.height = GH;
    const x = c.getContext("2d");
    x.fillStyle = "#000"; x.fillRect(0, 0, GW, GH);
    const boxW = GW * 0.62, s = Math.max(boxW / img.width, GH / img.height);
    x.save(); x.beginPath(); x.rect(0, 0, boxW, GH); x.clip();
    x.filter = "grayscale(1) contrast(1.55) brightness(1.05)";
    x.drawImage(img, (boxW - img.width * s) / 2, (GH - img.height * s) / 2, img.width * s, img.height * s);
    x.restore();
    // Fade the picture's right edge into the dark so the words stay clear.
    const g = x.createLinearGradient(boxW * 0.7, 0, boxW, 0); g.addColorStop(0, "rgba(0,0,0,0)"); g.addColorStop(1, "#000");
    x.filter = "none"; x.fillStyle = g; x.fillRect(boxW * 0.7, 0, boxW * 0.3 + 1, GH);
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, c);
  };
  const resize = () => {
    const r = canvas.getBoundingClientRect();
    dpr = Math.min(devicePixelRatio || 1, 2);
    W = Math.round(r.width * dpr); H = Math.round(r.height * dpr);
    canvas.width = W; canvas.height = H;
    GW = Math.ceil(W / (CELL * dpr)); GH = Math.ceil(H / (CELL * dpr));
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, GW, GH, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
    gl.bindFramebuffer(gl.FRAMEBUFFER, fbo);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    if (img) paintImage();
  };
  if (image) {
    img = new Image();
    img.onload = () => { paintImage(); if (reduced) draw(4); };
    img.src = image;
  }
  root.addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    st.tx = (e.clientX - r.left) * dpr; st.ty = (r.bottom - e.clientY) * dpr;
    st.ttilt = [(e.clientX - r.left) / r.width - 0.5, (e.clientY - r.top) / r.height - 0.5];
  });
  root.addEventListener("pointerleave", () => { st.tx = st.ty = -1e4; st.ttilt = [0, 0]; });
  root.addEventListener("pointerdown", (e) => {
    if (e.target.closest("a,button")) return;
    const r = canvas.getBoundingClientRect();
    st.cx = (e.clientX - r.left) * dpr; st.cy = (r.bottom - e.clientY) * dpr; st.click = 0;
  });
  const draw = (t) => {
    if (!img) {
      gl.useProgram(pSub); bindQuad(pSub);
      gl.bindFramebuffer(gl.FRAMEBUFFER, fbo); gl.viewport(0, 0, GW, GH);
      gl.uniform2f(U(pSub, "uRes"), GW, GH); gl.uniform1f(U(pSub, "uTime"), t); gl.uniform2f(U(pSub, "uTilt"), st.tilt[0], st.tilt[1]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
      gl.bindFramebuffer(gl.FRAMEBUFFER, null);
    }
    gl.useProgram(pDots); bindQuad(pDots); gl.viewport(0, 0, W, H);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, tex); gl.uniform1i(U(pDots, "uSub"), 0);
    gl.uniform2f(U(pDots, "uRes"), W, H); gl.uniform2f(U(pDots, "uGrid"), GW, GH); gl.uniform1f(U(pDots, "uCell"), CELL * dpr);
    gl.uniform2f(U(pDots, "uMouse"), st.mx, st.my); gl.uniform2f(U(pDots, "uClickPos"), st.cx, st.cy);
    gl.uniform1f(U(pDots, "uTime"), t); gl.uniform1f(U(pDots, "uClick"), st.click); gl.uniform1f(U(pDots, "uFade"), Math.min(st.fade, 1.1));
    gl.uniform3fv(U(pDots, "uDot"), DOT); gl.uniform3fv(U(pDots, "uBg"), BG);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  resize(); new ResizeObserver(() => { resize(); if (reduced) draw(4); }).observe(canvas);
  let last = performance.now(); const t0 = last;
  const frame = (now) => {
    st.raf = 0;
    const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
    const k = 1 - Math.exp(-dt * 6);
    // The pointer field jumps in from off-screen instead of sweeping across.
    if (st.mx < -1e3 || st.tx < -1e3) { st.mx = st.tx; st.my = st.ty; } else { st.mx += (st.tx - st.mx) * k; st.my += (st.ty - st.my) * k; }
    st.tilt[0] += (st.ttilt[0] - st.tilt[0]) * k * 0.5; st.tilt[1] += (st.ttilt[1] - st.tilt[1]) * k * 0.5;
    st.click += dt; st.fade += dt / 1.4;
    draw((now - t0) / 1000);
    if (st.visible) st.raf = requestAnimationFrame(frame);
  };
  const run = () => { if (!st.raf && st.visible && !reduced) { last = performance.now(); st.raf = requestAnimationFrame(frame); } };
  new IntersectionObserver(([e]) => { st.visible = e.isIntersecting && !document.hidden; run(); }).observe(canvas);
  document.addEventListener("visibilitychange", () => { st.visible = !document.hidden; run(); });
  enter();
  if (reduced) draw(4); else run();
})();
