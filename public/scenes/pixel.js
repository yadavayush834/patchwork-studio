/* Patchwork Scenes: a tiny runtime that paints a scene in a fragment shader at low resolution,
   then snaps every pixel to the scene's own palette through a 4x4 ordered dither.
   Each scene file calls PixelScene({ palette, frag }) where frag defines: vec3 scene(vec2 uv, vec2 px). */
(() => {
  const hex = (h) => { const n = parseInt(h.slice(1), 16); return [(n >> 16) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]; };
  const PRELUDE = `precision highp float;
uniform vec2 uRes, uMouse, uClickPos;
uniform float uTime, uClick, uFade, uAsp;
uniform vec3 uPal[16];
uniform float uPalN, uDither;
uniform sampler2D uImg;
uniform float uImgOn, uImgAsp;
vec3 photo(vec2 uv){
  vec2 s=uAsp>uImgAsp?vec2(1.,uImgAsp/uAsp):vec2(uAsp/uImgAsp,1.);
  vec2 t=(uv-.5)*s*.94+.5+(uMouse-.5)*vec2(.03,.02);
  return texture2D(uImg,t).rgb*1.05;
}
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float hash1(float n){return fract(sin(n*12.9898)*43758.5453);}
float noise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);
  return mix(mix(hash(i),hash(i+vec2(1,0)),f.x),mix(hash(i+vec2(0,1)),hash(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<5;i++){s+=a*noise(p);p=p*2.03+vec2(17.1,9.3);a*=.5;}return s;}
float bayer2(vec2 a){a=floor(a);return fract(dot(a,vec2(.5,a.y*.75)));}
float bayer4(vec2 a){return bayer2(.5*a)*.25+bayer2(a);}
float band(float x,float a,float b){return step(a,x)*step(x,b);}
float box(vec2 p,vec2 c,vec2 h){vec2 d=abs(p-c)-h;return step(max(d.x,d.y),0.);}
float sat(float x){return clamp(x,0.,1.);}
`;
  const RAW = `
void main(){
  vec2 px=gl_FragCoord.xy, uv=px/uRes;
  vec3 c=clamp(scene(uv,px),0.,1.);
  if(bayer4(floor(px/3.))>=uFade) c=uPal[0];
  gl_FragColor=vec4(c,1.);
}`;
  const MAIN = `
void main(){
  vec2 px=gl_FragCoord.xy, uv=px/uRes;
  vec3 c=clamp(uImgOn>.5?photo(uv):scene(uv,px),0.,1.);
  float b=bayer4(px);
  vec3 q=c+(b-.5)*uDither;
  vec3 best=uPal[0]; float bd=1e9;
  for(int i=0;i<16;i++){
    if(float(i)>=uPalN) break;
    vec3 e=q-uPal[i]; float d=dot(e*e,vec3(.32,.5,.18));
    if(d<bd){bd=d;best=uPal[i];}
  }
  // Pixel dissolve on arrival: coarse blocks switch on in Bayer order.
  if(bayer4(floor(px/3.))>=uFade) best=uPal[0];
  gl_FragColor=vec4(best,1.);
}`;

  window.PixelScene = function PixelScene(opts) {
    const root = document.querySelector(opts.root || ".sx"), canvas = root && root.querySelector("canvas.sx-art");
    if (!canvas) return;
    let paused = false;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const pixel = Math.max(2, Math.min(8, Number(root.dataset.pixel) || opts.pixel || 4));
    const gl = canvas.getContext("webgl", { antialias: false, alpha: false, preserveDrawingBuffer: false });
    if (!gl) { canvas.style.background = opts.palette[0]; root.classList.add("sx-ready"); return; }
    const compile = (type, src) => {
      const s = gl.createShader(type); gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader");
      return s;
    };
    const prog = gl.createProgram();
    gl.attachShader(prog, compile(gl.VERTEX_SHADER, "attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}"));
    gl.attachShader(prog, compile(gl.FRAGMENT_SHADER, PRELUDE + (opts.uniforms || []).map((n) => `uniform float ${n};\n`).join("") + opts.frag + (opts.raw ? RAW : MAIN)));
    gl.linkProgram(prog); gl.useProgram(prog);
    gl.bindBuffer(gl.ARRAY_BUFFER, gl.createBuffer());
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW);
    const loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
    const U = (n) => gl.getUniformLocation(prog, n);
    const u = { res: U("uRes"), mouse: U("uMouse"), cpos: U("uClickPos"), time: U("uTime"), click: U("uClick"), fade: U("uFade"), asp: U("uAsp"), pal: U("uPal"), paln: U("uPalN"), dither: U("uDither") };
    const pal = opts.palette.slice(0, 16).map(hex);
    gl.uniform3fv(u.pal, new Float32Array(pal.concat(Array(16 - pal.length).fill([0, 0, 0])).flat()));
    gl.uniform1f(u.paln, pal.length);
    gl.uniform1f(u.dither, opts.dither ?? 0.14);
    const extra = (opts.uniforms || []).map((n) => [n, U(n)]);
    // Your own photo, if the page has one: drawn through this scene's palette instead of the painting.
    const imgOn = U("uImgOn"), imgAsp = U("uImgAsp");
    gl.uniform1f(imgOn, 0);
    if (root.dataset.image && !opts.raw) {
      const img = new Image();
      img.onload = () => {
        const tex = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, tex);
        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
        for (const [k, v] of [[gl.TEXTURE_MIN_FILTER, gl.LINEAR], [gl.TEXTURE_MAG_FILTER, gl.LINEAR], [gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE], [gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE]]) gl.texParameteri(gl.TEXTURE_2D, k, v);
        gl.uniform1i(U("uImg"), 0); gl.uniform1f(imgOn, 1); gl.uniform1f(imgAsp, img.width / img.height);
        if (reduced) draw(opts.still ?? 6);
      };
      img.src = root.dataset.image;
    }

    const st = { mx: opts.mouse?.[0] ?? 0.5, my: opts.mouse?.[1] ?? 0.5, tx: opts.mouse?.[0] ?? 0.5, ty: opts.mouse?.[1] ?? 0.5, touched: false, click: 1e3, cx: 0.5, cy: 0.5, fade: reduced ? 1.01 : 0, t0: performance.now(), visible: true, raf: 0 };
    let W = 0, H = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      W = Math.max(1, Math.round(r.width / pixel)); H = Math.max(1, Math.round(r.height / pixel));
      canvas.width = W; canvas.height = H; gl.viewport(0, 0, W, H);
    };
    resize(); new ResizeObserver(() => { resize(); if (reduced || paused) draw(opts.still ?? 6); }).observe(canvas);
    root.addEventListener("pointermove", (e) => {
      const r = canvas.getBoundingClientRect();
      st.tx = (e.clientX - r.left) / r.width; st.ty = 1 - (e.clientY - r.top) / r.height; st.touched = true;
    });
    root.addEventListener("pointerdown", (e) => {
      if (e.target.closest("a,button,input")) return;
      const r = canvas.getBoundingClientRect();
      st.cx = (e.clientX - r.left) / r.width; st.cy = 1 - (e.clientY - r.top) / r.height; st.click = 0;
    });
    const draw = (t) => {
      gl.uniform2f(u.res, W, H); gl.uniform1f(u.asp, W / H); gl.uniform1f(u.time, t);
      gl.uniform2f(u.mouse, st.mx, st.my); gl.uniform2f(u.cpos, st.cx, st.cy); gl.uniform1f(u.click, st.click);
      gl.uniform1f(u.fade, Math.min(st.fade, 1.01));
      for (const [n, l] of extra) if (opts.values && n in opts.values) gl.uniform1f(l, opts.values[n]);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    };
    let last = performance.now();
    const frame = (now) => {
      st.raf = 0;
      const dt = Math.max(0, Math.min(0.05, (now - last) / 1000)); last = now;
      const t = (now - st.t0) / 1000;
      if (!st.touched && opts.idle) { const [ix, iy] = opts.idle(t); st.tx = ix; st.ty = iy; }
      const k = 1 - Math.exp(-dt * (opts.follow ?? 4));
      st.mx += (st.tx - st.mx) * k; st.my += (st.ty - st.my) * k;
      st.click += dt; st.fade += dt / (opts.reveal ?? 1.1);
      opts.tick?.(t, st, dt);
      draw(t);
      if (st.visible && !paused) st.raf = requestAnimationFrame(frame);
    };
    const run = () => { if (!st.raf && st.visible && !reduced && !paused) { last = performance.now(); st.raf = requestAnimationFrame(frame); } };
    new IntersectionObserver(([e]) => { st.visible = e.isIntersecting && !document.hidden; run(); }).observe(canvas);
    document.addEventListener("visibilitychange", () => { st.visible = !document.hidden; run(); });
    if (opts.controls) {
      const tools = document.createElement("div"); tools.className = "sx-scene-controls"; tools.setAttribute("aria-label", "Scene controls");
      const action = document.createElement("button"), pause = document.createElement("button");
      action.type = pause.type = "button"; action.textContent = opts.controls; pause.textContent = "Pause motion"; pause.setAttribute("aria-pressed", "false");
      action.addEventListener("click", () => {st.cx = st.tx; st.cy = st.ty; st.click = 0; opts.tick?.((performance.now()-st.t0)/1000, st, 0); if (reduced || paused) draw(opts.still ?? 6); root.dispatchEvent(new CustomEvent("scene-activate", {detail:{scene:root.dataset.scene},bubbles:true}));});
      pause.addEventListener("click", () => {paused = !paused;pause.setAttribute("aria-pressed",String(paused));pause.textContent = paused ? "Resume motion" : "Pause motion";if(paused){cancelAnimationFrame(st.raf);st.raf=0;}else run();});
      tools.append(action,pause);root.append(tools);
      root.addEventListener("pointerdown", (e) => {if (!e.target.closest("a,button,input") && (reduced || paused)) queueMicrotask(()=>draw(opts.still ?? 6));});
    }
    root.classList.add("sx-ready");
    if (reduced) draw(opts.still ?? 6); else run();
    return st;
  };
})();
