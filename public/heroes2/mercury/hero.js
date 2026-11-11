/* Mercury: liquid chrome raymarched in a fragment shader. Plain WebGL, no dependencies besides GSAP for the entrance. */
(() => {
  const root = document.querySelector(".hx-mercury"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { alpha: true, premultipliedAlpha: true, antialias: false });
  const state = { intro: reduced ? 1 : 0, press: 0, mx: 0.35, my: 0.1, tx: 0.35, ty: 0.1 };
  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.from(".m-title .w > span", { yPercent: 110, duration: 1.3, ease: "expo.out", stagger: 0.06, delay: 0.15 });
    gsap.from(".m-foot > *, .hx-nav > *, .m-hint", { autoAlpha: 0, y: 18, duration: 1, ease: "power3.out", stagger: 0.08, delay: 0.6 });
    gsap.to(state, { intro: 1, duration: 2.4, ease: "elastic.out(1, 0.55)", delay: 0.25 });
  };
  if (!gl) { state.intro = 1; enter(); return; }
  const vs = "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}";
  const fs = `precision highp float;
uniform vec2 uRes;uniform float uTime,uIntro,uPress;uniform vec2 uMouse;uniform vec3 uAccent;
float smin(float a,float b,float k){float h=clamp(.5+.5*(b-a)/k,0.,1.);return mix(b,a,h)-k*h*(1.-h);}
float scene(vec3 p){
  float t=uTime*.55, s=uIntro;
  vec3 c=vec3(.86,.2,0.);
  float d=length(p-c)-.3*s;
  d=smin(d,length(p-c-vec3(.5*sin(t),.36*cos(t*1.3),.15*sin(t*.7))*s)-.17*s,.26);
  d=smin(d,length(p-c-vec3(-.55*cos(t*.8),.3*sin(t*1.1),.2*cos(t))*s)-.15*s,.26);
  d=smin(d,length(p-c-vec3(.18*sin(t*1.7),-.56*cos(t*.9),.15)*s)-.13*s,.24);
  d=smin(d,length(p-c-vec3(-.3,.6*sin(t*.6),-.2)*s)-.11*s,.24);
  d=smin(d,length(p-c-vec3(.62*cos(t*.5),-.2,.3*sin(t*.5))*s)-.09*s,.22);
  vec3 m=vec3(uMouse.x,uMouse.y,.35);
  d=smin(d,length(p-m)-.11*s,.36);
  float rip=.012+.03*uPress;
  return d+sin(p.x*7.+uTime*1.6)*sin(p.y*6.-uTime*1.2)*sin(p.z*5.+uTime)*rip;
}
vec3 nrm(vec3 p){vec2 e=vec2(.0015,-.0015);return normalize(e.xyy*scene(p+e.xyy)+e.yyx*scene(p+e.yyx)+e.yxy*scene(p+e.yxy)+e.xxx*scene(p+e.xxx));}
vec3 env(vec3 r){
  vec3 col=mix(vec3(.05),vec3(.42,.42,.43),smoothstep(-.4,.9,r.y));
  col+=vec3(.22)*smoothstep(.2,.0,abs(r.y+.05));
  float box=smoothstep(.0,.03,.34-abs(r.x+.28))*smoothstep(.0,.03,.16-abs(r.y-.52));
  float strip=smoothstep(.0,.015,.05-abs(r.x-.78))*smoothstep(-.4,.4,r.y);
  float floorL=smoothstep(.0,.02,.6-abs(r.x))*smoothstep(-.55,-.75,r.y)*.35;
  col+=vec3(1.)*box*2.2+vec3(.92,.95,1.)*strip*1.4+floorL;
  col+=uAccent*pow(max(dot(r,normalize(vec3(-.7,-.35,.55))),0.),5.)*1.6;
  col+=uAccent*.25*pow(max(dot(r,normalize(vec3(.9,.1,-.3))),0.),12.);
  return col;
}
void main(){
  vec2 uv=(gl_FragCoord.xy-.5*uRes)/uRes.y;
  vec3 ro=vec3(0.,0.,3.),rd=normalize(vec3(uv,-1.75));
  float t=0.,d=1.,closest=9.;
  for(int i=0;i<80;i++){vec3 p=ro+rd*t;d=scene(p);closest=min(closest,d);if(d<.001||t>6.)break;t+=d*.9;}
  if(d<.002){
    vec3 p=ro+rd*t,n=nrm(p),r=reflect(rd,n);
    float fr=pow(1.-max(dot(n,-rd),0.),4.);
    vec3 col=env(r)*(.68+.6*fr);
    vec3 film=.6+.4*cos(6.2832*(fr*.7+vec3(0.,.33,.67)));
    col*=mix(vec3(1.),film,.18*fr);
    col+=vec3(1.)*pow(max(dot(r,normalize(vec3(-.3,.55,1.))),0.),90.)*1.5;
    col=col/(1.+col*.35);
    gl_FragColor=vec4(pow(col,vec3(.92)),1.);
  }else{
    float g=exp(-closest*7.)*.22*uIntro;
    gl_FragColor=vec4(uAccent*g,g);
  }
}`;
  const sh = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); return s; };
  const prog = gl.createProgram();
  gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs));
  gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(prog);
  if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) { state.intro = 1; enter(); return; }
  gl.useProgram(prog);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p");
  gl.enableVertexAttribArray(loc);
  gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const u = (n) => gl.getUniformLocation(prog, n);
  const uRes = u("uRes"), uTime = u("uTime"), uIntro = u("uIntro"), uPress = u("uPress"), uMouse = u("uMouse"), uAccent = u("uAccent");
  const accent = getComputedStyle(document.documentElement).getPropertyValue("--accent").trim() || "#ff5a1f";
  const hex = parseInt(accent.replace("#", ""), 16);
  gl.uniform3f(uAccent, ((hex >> 16) & 255) / 255, ((hex >> 8) & 255) / 255, (hex & 255) / 255);
  let w = 0, h = 0;
  const resize = () => {
    const scale = Math.min(devicePixelRatio || 1, 1.5) * 0.85;
    w = Math.max(1, Math.round(canvas.clientWidth * scale));
    h = Math.max(1, Math.round(canvas.clientHeight * scale));
    canvas.width = w; canvas.height = h;
    gl.viewport(0, 0, w, h);
    gl.uniform2f(uRes, w, h);
  };
  resize();
  addEventListener("resize", () => { resize(); if (reduced) draw(4); });
  addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    state.tx = ((e.clientX - r.left) - r.width / 2) / r.height * 2 * 0.86;
    state.ty = -((e.clientY - r.top) - r.height / 2) / r.height * 2 * 0.86;
  }, { passive: true });
  addEventListener("pointerdown", () => window.gsap ? gsap.fromTo(state, { press: 1 }, { press: 0, duration: 1.6, ease: "power2.out" }) : null);
  const draw = (time) => {
    state.mx += (state.tx - state.mx) * 0.08;
    state.my += (state.ty - state.my) * 0.08;
    gl.uniform1f(uTime, time);
    gl.uniform1f(uIntro, Math.max(0.0001, state.intro));
    gl.uniform1f(uPress, state.press);
    gl.uniform2f(uMouse, state.mx, state.my);
    gl.clearColor(0, 0, 0, 0);
    gl.clear(gl.COLOR_BUFFER_BIT);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  let visible = true, raf = 0;
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(root);
  const loop = () => { cancelAnimationFrame(raf); if (reduced || !visible || document.hidden) return; raf = requestAnimationFrame((t) => { draw(t / 1000); loop(); }); };
  document.addEventListener("visibilitychange", loop);
  enter();
  if (reduced) draw(4); else loop();
})();
