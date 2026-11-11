/* Lowtide: a moonlit sea painted in a shader and ordered-dithered to exactly two colours, every frame. */
(() => {
  const root = document.querySelector(".hx-lowtide"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const css = getComputedStyle(document.documentElement);
  const toRGB = (h) => { const n = parseInt(h.trim().slice(1), 16); return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
  const DARK = toRGB(css.getPropertyValue("--bg") || "#0e0e10"), LIGHT = toRGB(css.getPropertyValue("--ink") || "#e9e5d7");
  const state = { fade: reduced ? 1 : 0, mx: 0.74, my: 0.74, tx: 0.74, ty: 0.74 };
  const enter = () => {
    if (!window.gsap || reduced) return;
    // An old desktop fade: the scene arrives in eight hard steps.
    gsap.to(state, { fade: 1, duration: 1.6, ease: "steps(8)", delay: 0.15 });
    gsap.from(".l-title .w > span", { yPercent: 100, duration: 0.5, ease: "steps(5)", stagger: 0.09, delay: 0.7 });
    gsap.from(".l-sub, .l-copy .hx-actions, .hx-nav > *, .l-hint", { autoAlpha: 0, duration: 0.4, ease: "steps(4)", stagger: 0.1, delay: 1.2 });
  };
  const gl = canvas.getContext("webgl", { antialias: false, alpha: false });
  if (!gl) { canvas.style.background = "#0e0e10"; enter(); return; }
  const fs = `precision highp float;
uniform vec2 uRes,uMoon;uniform float uTime,uFade;uniform vec3 uDark,uLight;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float bayer2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}
float bayer8(vec2 a){return bayer2(.25*a)*.0625+bayer2(.5*a)*.25+bayer2(a);}
void main(){
  vec2 px=gl_FragCoord.xy, uv=px/uRes; float asp=uRes.x/uRes.y;
  float hor=.36, lum;
  vec2 m=uMoon; vec2 d=(uv-m)*vec2(asp,1.);
  if(uv.y>hor){
    // Sky: dark overhead, a little light near the horizon, a halo round the moon.
    lum=.012+.11*pow(1.-(uv.y-hor)/(1.-hor),3.2);
    lum+=.34*exp(-length(d)*8.)+.09*exp(-length(d)*2.4);
    // Stars that twinkle, fewer near the moon.
    vec2 sc=floor(px/2.);
    float s=step(.996,h(sc))*(.6+.4*sin(uTime*(2.+h(sc+3.)*4.)+h(sc)*40.));
    lum+=s*smoothstep(.12,.35,length(d));
    // Thin clouds drift across, lit at their edges by the moon.
    float c=n(vec2(uv.x*3.-uTime*.02,uv.y*16.))*n(vec2(uv.x*7.+uTime*.015,uv.y*30.));
    float band=smoothstep(.55,.75,uv.y)*smoothstep(.95,.78,uv.y);
    float cloud=smoothstep(.32,.5,c)*band;
    // Dark cloud bodies hide the stars; only the rims near the moon catch light.
    float rim=smoothstep(.32,.4,c)-smoothstep(.4,.5,c);
    lum=mix(lum,.015,cloud*.9)+rim*band*.75*exp(-length(d)*2.6);
    // The moon: a full disc with soft maria.
    float r=.085;
    if(length(d)<r){float cr=n(d*38.+7.)*.5+n(d*90.)*.25;lum=.92-cr*.45*smoothstep(r,r*.3,length(d));}
    // An island with a lighthouse on the horizon, and its sweeping beam.
    float ix=uv.x-.87, isl=hor+.035*exp(-ix*ix*120.)+.014*exp(-(uv.x-.8)*(uv.x-.8)*500.);
    float beamA=uTime*.9, bx=cos(beamA), by=.12*sin(beamA)+.02;
    vec2 lp=vec2(.865,hor+.075), bd=(uv-lp)*vec2(asp,1.);
    float ang=abs(atan(bd.y,bd.x)-atan(by,bx));
    float beam=smoothstep(.07,.0,ang)*smoothstep(.0,.04,length(bd))*exp(-length(bd)*2.2)*step(0.,bx*bd.x)*.9;
    lum+=beam;
    if(uv.y<isl)lum=.0;
    if(abs(uv.x-.865)<.0035&&uv.y<hor+.075&&uv.y>isl-.01)lum=uv.y>hor+.067?1.:.0;
  }else{
    // Sea: perspective swell, darker toward us, broken into a moon road.
    float depth=(hor-uv.y)/hor, z=1./(depth+.06);
    float wave=sin(uv.x*asp*z*3.+uTime*.9+n(vec2(uv.x*6.,z*.6))*4.)*sin(z*7.-uTime*1.4);
    // Mostly true black: only the crests of the swell catch a thin line of light.
    lum=.005+.16*step(.86,wave)*smoothstep(1.,.2,depth);
    float road=exp(-pow((uv.x-m.x)*asp/(.035+depth*.22),2.));
    float glint=smoothstep(.15,.85,wave)*smoothstep(.2,1.,n(vec2(uv.x*80.,z*9.-uTime*2.)));
    lum+=road*(.15+.85*glint)*smoothstep(.0,.04,depth)*(.75+.25*(1.-m.y));
    // The lighthouse beam crossing the water, and its reflection.
    lum+=.4*exp(-pow((uv.x-.865)*asp*9.,2.))*smoothstep(.5,.0,depth)*glint;
    // A small boat riding the swell near the road.
    vec2 bp=vec2(m.x-.06+.02*sin(uTime*.2),hor-.05+.004*sin(uTime*1.3)); vec2 bq=(uv-bp)*vec2(asp,1.);
    float hull=step(abs(bq.x),.03-max(bq.y,0.)*.5)*step(-.008,bq.y)*step(bq.y,.0);
    float mast=step(abs(bq.x+.004),.0018)*step(0.,bq.y)*step(bq.y,.05);
    float sail=step(0.,bq.y)*step(bq.y,.045)*step(-.002,bq.x)*step(bq.x,.025*(1.-bq.y/.045));
    if(hull+mast>0.)lum=.0;
    if(sail>0.)lum=.0;
  }
  lum*=uFade;
  float bit=step(bayer8(px)*.97+.025,lum);
  gl_FragColor=vec4(mix(uDark,uLight,bit),1.);
}`;
  const mk = (t, s) => { const o = gl.createShader(t); gl.shaderSource(o, s); gl.compileShader(o); return o; };
  const p = gl.createProgram();
  gl.attachShader(p, mk(gl.VERTEX_SHADER, "attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}"));
  gl.attachShader(p, mk(gl.FRAGMENT_SHADER, fs));
  gl.linkProgram(p);
  if (!gl.getProgramParameter(p, gl.LINK_STATUS)) { enter(); return; }
  gl.useProgram(p);
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
  gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  const U = (k) => gl.getUniformLocation(p, k);
  const uRes = U("uRes"), uMoon = U("uMoon"), uTime = U("uTime"), uFade = U("uFade");
  gl.uniform3f(U("uDark"), ...DARK); gl.uniform3f(U("uLight"), ...LIGHT);
  const PX = 3;
  const resize = () => {
    canvas.width = Math.max(1, Math.round(canvas.clientWidth / PX)); canvas.height = Math.max(1, Math.round(canvas.clientHeight / PX));
    gl.viewport(0, 0, canvas.width, canvas.height); gl.uniform2f(uRes, canvas.width, canvas.height);
  };
  resize();
  addEventListener("pointermove", (e) => {
    const r = canvas.getBoundingClientRect();
    state.tx = Math.min(0.94, Math.max(0.3, (e.clientX - r.left) / r.width));
    state.ty = Math.min(0.9, Math.max(0.5, 1 - (e.clientY - r.top) / r.height));
  }, { passive: true });
  const draw = (t) => {
    state.mx += (state.tx - state.mx) * 0.05; state.my += (state.ty - state.my) * 0.05;
    gl.uniform1f(uTime, t); gl.uniform1f(uFade, state.fade); gl.uniform2f(uMoon, state.mx, state.my);
    gl.drawArrays(gl.TRIANGLES, 0, 3);
  };
  addEventListener("resize", () => { resize(); draw(performance.now() / 1000); });
  let raf = 0, visible = true;
  const loop = () => { cancelAnimationFrame(raf); if (reduced || !visible || document.hidden) return; raf = requestAnimationFrame((t) => { draw(t / 1000); loop(); }); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(root);
  document.addEventListener("visibilitychange", loop);
  enter();
  if (reduced) draw(3); else loop();
})();
