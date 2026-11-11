/* Ink: a GPU fluid solver (advection, vorticity confinement, pressure projection) rendered as ink on paper. */
(() => {
  const root = document.querySelector(".hx-ink"), canvas = root && root.querySelector("canvas");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const enter = () => {
    if (!window.gsap || reduced) return;
    gsap.from(".i-seal", { scale: 1.6, rotation: -14, autoAlpha: 0, duration: 0.7, ease: "back.out(2.2)", delay: 0.9 });
    gsap.from(".i-line", { yPercent: 40, autoAlpha: 0, filter: "blur(10px)", duration: 1.6, ease: "power3.out", stagger: 0.18, delay: 0.25 });
    gsap.from(".i-sub, .i-copy .hx-actions, .hx-nav > *", { autoAlpha: 0, y: 14, duration: 1.1, ease: "power2.out", stagger: 0.1, delay: 0.85 });
  };
  const gl = canvas.getContext("webgl2", { alpha: false, antialias: false, preserveDrawingBuffer: false });
  if (!gl || !gl.getExtension("EXT_color_buffer_float")) { enter(); return; }
  gl.getExtension("OES_texture_float_linear");

  const VS = `#version 300 es
in vec2 p;out vec2 uv,l,r,t,b;uniform vec2 texel;
void main(){uv=p*.5+.5;l=uv-vec2(texel.x,0.);r=uv+vec2(texel.x,0.);t=uv+vec2(0.,texel.y);b=uv-vec2(0.,texel.y);gl_Position=vec4(p,0.,1.);}`;
  const head = `#version 300 es
precision highp float;in vec2 uv,l,r,t,b;out vec4 o;`;
  const FS = {
    splat: head + `uniform sampler2D tgt;uniform float aspect,radius;uniform vec3 color;uniform vec2 point;
void main(){vec2 d=uv-point;d.x*=aspect;vec3 s=exp(-dot(d,d)/radius)*color;o=vec4(texture(tgt,uv).xyz+s,1.);}`,
    advect: head + `uniform sampler2D vel,src;uniform vec2 texel;uniform float dt,dissipation;
void main(){vec2 c=uv-dt*texture(vel,uv).xy*texel;o=texture(src,c)*dissipation;o.a=1.;}`,
    divergence: head + `uniform sampler2D vel;
void main(){float L=texture(vel,l).x,R=texture(vel,r).x,T=texture(vel,t).y,B=texture(vel,b).y;vec2 C=texture(vel,uv).xy;
if(l.x<0.)L=-C.x;if(r.x>1.)R=-C.x;if(t.y>1.)T=-C.y;if(b.y<0.)B=-C.y;o=vec4(.5*(R-L+T-B),0.,0.,1.);}`,
    curl: head + `uniform sampler2D vel;
void main(){float L=texture(vel,l).y,R=texture(vel,r).y,T=texture(vel,t).x,B=texture(vel,b).x;o=vec4(.5*(R-L-T+B),0.,0.,1.);}`,
    vorticity: head + `uniform sampler2D vel,curl;uniform float strength,dt;
void main(){float L=texture(curl,l).x,R=texture(curl,r).x,T=texture(curl,t).x,B=texture(curl,b).x,C=texture(curl,uv).x;
vec2 f=.5*vec2(abs(T)-abs(B),abs(R)-abs(L));f/=length(f)+1e-4;f*=strength*C;f.y*=-1.;
vec2 v=texture(vel,uv).xy+f*dt;o=vec4(clamp(v,-1000.,1000.),0.,1.);}`,
    pressure: head + `uniform sampler2D pres,div;
void main(){float L=texture(pres,l).x,R=texture(pres,r).x,T=texture(pres,t).x,B=texture(pres,b).x;o=vec4((L+R+B+T-texture(div,uv).x)*.25,0.,0.,1.);}`,
    gradient: head + `uniform sampler2D pres,vel;
void main(){float L=texture(pres,l).x,R=texture(pres,r).x,T=texture(pres,t).x,B=texture(pres,b).x;vec2 v=texture(vel,uv).xy-vec2(R-L,T-B);o=vec4(v,0.,1.);}`,
    scale: head + `uniform sampler2D src;uniform float value;void main(){o=value*texture(src,uv);}`,
    display: head + `uniform sampler2D dye;uniform vec3 paper;uniform vec2 res;
float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec3 a=texture(dye,uv).rgb;
  // Wet edges: ink pools where its density changes fastest.
  vec3 dx=texture(dye,r).rgb-texture(dye,l).rgb, dy=texture(dye,t).rgb-texture(dye,b).rgb;
  float edge=clamp(length(dx)+length(dy),0.,1.);
  vec3 col=paper*exp(-a*1.55)*(1.-edge*.22);
  // Paper fibre and a soft vignette.
  float f=h(floor(uv*res*.5))*.04-.02;
  float v=smoothstep(1.25,.35,length((uv-.5)*vec2(res.x/res.y,1.)));
  o=vec4((col+f)*(.9+.1*v),1.);
}`,
  };
  const compile = (type, src) => { const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const vs = compile(gl.VERTEX_SHADER, VS);
  const programs = {};
  try {
    for (const [k, src] of Object.entries(FS)) {
      const p = gl.createProgram();
      gl.attachShader(p, vs); gl.attachShader(p, compile(gl.FRAGMENT_SHADER, src));
      gl.bindAttribLocation(p, 0, "p"); gl.linkProgram(p);
      const uniforms = {};
      const n = gl.getProgramParameter(p, gl.ACTIVE_UNIFORMS);
      for (let i = 0; i < n; i++) { const name = gl.getActiveUniform(p, i).name; uniforms[name] = gl.getUniformLocation(p, name); }
      programs[k] = { p, u: uniforms };
    }
  } catch (e) { console.warn("Ink: shader unavailable", e); enter(); return; }
  gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), gl.STATIC_DRAW);
  gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, gl.createBuffer());
  gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 0, 2, 3]), gl.STATIC_DRAW);
  gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
  gl.enableVertexAttribArray(0);
  const fbo = (w, h) => {
    const tex = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, tex);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA16F, w, h, 0, gl.RGBA, gl.HALF_FLOAT, null);
    const fb = gl.createFramebuffer();
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, tex, 0);
    gl.viewport(0, 0, w, h); gl.clearColor(0, 0, 0, 1); gl.clear(gl.COLOR_BUFFER_BIT);
    return { tex, fb, w, h, attach(i) { gl.activeTexture(gl.TEXTURE0 + i); gl.bindTexture(gl.TEXTURE_2D, tex); return i; } };
  };
  const double = (w, h) => { let a = fbo(w, h), b = fbo(w, h); return { w, h, get read() { return a; }, get write() { return b; }, swap() { [a, b] = [b, a]; } }; };
  const blit = (target) => {
    if (target) { gl.viewport(0, 0, target.w, target.h); gl.bindFramebuffer(gl.FRAMEBUFFER, target.fb); }
    else { gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight); gl.bindFramebuffer(gl.FRAMEBUFFER, null); }
    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0);
  };
  let vel, dye, pres, div, curl, aspect = 1;
  const sizeFor = (res) => { const a = canvas.width / canvas.height; return a > 1 ? [Math.round(res * a), res] : [res, Math.round(res / a)]; };
  const resize = () => {
    const dpr = Math.min(devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(canvas.clientWidth * dpr); canvas.height = Math.round(canvas.clientHeight * dpr);
    aspect = canvas.width / canvas.height;
    const [sw, sh] = sizeFor(128), [dw, dh] = sizeFor(640);
    vel = double(sw, sh); dye = double(dw, dh); pres = double(sw, sh); div = fbo(sw, sh); curl = fbo(sw, sh);
  };
  resize();
  const use = (name) => { const pr = programs[name]; gl.useProgram(pr.p); return pr.u; };
  const splat = (x, y, dx, dy, color, radius = 0.0009) => {
    let u = use("splat");
    gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h);
    gl.uniform1i(u.tgt, vel.read.attach(0)); gl.uniform1f(u.aspect, aspect); gl.uniform2f(u.point, x, y);
    gl.uniform3f(u.color, dx, dy, 0); gl.uniform1f(u.radius, radius); blit(vel.write); vel.swap();
    u = use("splat");
    gl.uniform1i(u.tgt, dye.read.attach(0)); gl.uniform3f(u.color, ...color); gl.uniform1f(u.radius, radius * 1.4); blit(dye.write); dye.swap();
  };
  const SUMI = [0.95, 0.9, 0.72], RED = [0.06, 0.85, 1.0];
  let seed = 7;
  const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
  const drop = (x, y, color, size = 1) => {
    // A falling drop: a dense core and a ring pushed outward, then the ink sinks and curls.
    splat(x, y, 0, -60 * size, color.map((c) => c * 1.6 * size), 0.0012 * size);
    for (let k = 0; k < 14; k++) {
      const a = (k / 14) * Math.PI * 2 + rnd() * 0.4, push = 160 + rnd() * 200;
      splat(x + Math.cos(a) * 0.012 * size, y + Math.sin(a) * 0.012 * size * aspect, Math.cos(a) * push * size, Math.sin(a) * push * size, color.map((c) => c * (0.12 + rnd() * 0.2)), 0.0003 * size * (0.6 + rnd()));
    }
  };
  const step = (dt) => {
    let u = use("curl"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.vel, vel.read.attach(0)); blit(curl);
    u = use("vorticity"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.vel, vel.read.attach(0)); gl.uniform1i(u.curl, curl.attach(1)); gl.uniform1f(u.strength, 22); gl.uniform1f(u.dt, dt); blit(vel.write); vel.swap();
    u = use("divergence"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.vel, vel.read.attach(0)); blit(div);
    u = use("scale"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.src, pres.read.attach(0)); gl.uniform1f(u.value, 0.8); blit(pres.write); pres.swap();
    u = use("pressure"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.div, div.attach(1));
    for (let i = 0; i < 22; i++) { gl.uniform1i(u.pres, pres.read.attach(0)); blit(pres.write); pres.swap(); }
    u = use("gradient"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.pres, pres.read.attach(0)); gl.uniform1i(u.vel, vel.read.attach(1)); blit(vel.write); vel.swap();
    u = use("advect"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.vel, vel.read.attach(0)); gl.uniform1i(u.src, vel.read.attach(0)); gl.uniform1f(u.dt, dt); gl.uniform1f(u.dissipation, 0.985); blit(vel.write); vel.swap();
    u = use("advect"); gl.uniform2f(u.texel, 1 / vel.w, 1 / vel.h); gl.uniform1i(u.vel, vel.read.attach(0)); gl.uniform1i(u.src, dye.read.attach(1)); gl.uniform1f(u.dissipation, 0.9965); blit(dye.write); dye.swap();
  };
  const paper = getComputedStyle(document.documentElement).getPropertyValue("--bg").trim() || "#efe9dc";
  const pc = parseInt(paper.slice(1), 16);
  const render = () => {
    const u = use("display");
    gl.uniform2f(u.texel, 1 / dye.w, 1 / dye.h); gl.uniform1i(u.dye, dye.read.attach(0));
    gl.uniform3f(u.paper, ((pc >> 16) & 255) / 255, ((pc >> 8) & 255) / 255, (pc & 255) / 255);
    gl.uniform2f(u.res, canvas.width, canvas.height);
    blit(null);
  };
  // Drops land away from the headline, and the cursor stirs the water.
  const choreography = [[0.66, 0.62, SUMI, 1.25, 0.2], [0.8, 0.38, SUMI, 0.9, 1.4], [0.58, 0.3, RED, 0.7, 2.6], [0.88, 0.7, SUMI, 0.8, 3.8]];
  let elapsed = 0, nextDrop = 6;
  const pointer = { x: 0, y: 0, px: 0, py: 0, moved: false };
  addEventListener("pointermove", (e) => {
    const rct = canvas.getBoundingClientRect();
    pointer.x = (e.clientX - rct.left) / rct.width; pointer.y = 1 - (e.clientY - rct.top) / rct.height; pointer.moved = true;
  }, { passive: true });
  addEventListener("pointerdown", () => drop(pointer.x, pointer.y, rnd() > 0.75 ? RED : SUMI, 0.8));
  let last = 0;
  const frame = (now) => {
    const dt = Math.min((now - last) / 1000 || 0.016, 0.033); last = now; elapsed += dt;
    for (const c of choreography) if (!c.done && elapsed > c[4]) { c.done = true; drop(c[0], c[1], c[2], c[3]); }
    if (elapsed > nextDrop) { nextDrop = elapsed + 3 + rnd() * 3; drop(0.5 + rnd() * 0.45, 0.2 + rnd() * 0.65, rnd() > 0.8 ? RED : SUMI, 0.6 + rnd() * 0.5); }
    if (pointer.moved) {
      const dx = pointer.x - pointer.px, dy = pointer.y - pointer.py;
      if (Math.abs(dx) + Math.abs(dy) > 0.0005) splat(pointer.x, pointer.y, dx * 6000, dy * 6000, SUMI.map((c) => c * Math.min(0.08, (Math.abs(dx) + Math.abs(dy)) * 2)), 0.0006);
      pointer.px = pointer.x; pointer.py = pointer.y; pointer.moved = false;
    }
    step(dt);
    render();
  };
  let raf = 0, visible = true;
  const loop = () => { cancelAnimationFrame(raf); if (!visible || document.hidden) return; raf = requestAnimationFrame((t) => { frame(t); loop(); }); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible) loop(); }).observe(root);
  document.addEventListener("visibilitychange", loop);
  addEventListener("resize", () => { resize(); render(); });
  enter();
  if (reduced) {
    // A still composition: let the opening drops settle, then hold the frame.
    for (const c of choreography) drop(c[0], c[1], c[2], c[3]);
    for (let i = 0; i < 160; i++) step(0.016);
    render();
  } else loop();
})();
