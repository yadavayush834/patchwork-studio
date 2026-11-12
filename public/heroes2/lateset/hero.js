/* Late Set. Two hand-painted frames of the same trumpeter alternate at eight drawings a second;
   each drawing gets its own nudge and a wobble field, so the picture "boils" like stop-motion. A shader snaps every pixel to one
   of five inks, with grain that changes every frame and a little dither so the inks speckle into
   each other. A click blows a note: radial speed lines burst from the bell and the frame jolts.
   "Change the key" swaps the ink set. */
(() => {
  const root = document.querySelector(".hx-lateset"), canvas = root && root.querySelector(".ls-art");
  if (!canvas) return;
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const gl = canvas.getContext("webgl", { antialias: false, preserveDrawingBuffer: false });
  const base = canvas.dataset.base || "";
  const fallback = () => { canvas.style.display = "none"; root.style.background = `#0b1030 url("${base}frame-1.webp") right center/cover`; };
  if (!gl) return fallback();
  const KEYS = [
    { name: "Blue note", inks: ["#070a24", "#1d3fa8", "#c0182a", "#e8a93a", "#f3e6c8"] },
    { name: "Smoke", inks: ["#0c0b0a", "#3b3632", "#8f6a3c", "#d7b46a", "#f4ecdc"] },
    { name: "Neon", inks: ["#12051f", "#6d1bb3", "#ff2f8e", "#18d6c6", "#fff27a"] },
  ];
  const hex = (h) => [1, 3, 5].map((i) => parseInt(h.slice(i, i + 2), 16) / 255);
  const vs = `attribute vec2 p; varying vec2 v; void main(){ v = p * .5 + .5; gl_Position = vec4(p, 0., 1.); }`;
  const fs = `precision highp float;
  varying vec2 v; uniform sampler2D img; uniform vec2 res, imgSize, jit, bell; uniform float time, seed, blast, shake; uniform vec3 ink[5];
  float hash(vec2 q){ q = fract(q * vec2(443.897, 441.423)); q += dot(q, q.yx + 19.19); return fract((q.x + q.y) * q.x); }
  void main(){
    // cover the canvas with the painting, then boil: a frame-specific nudge and a hair of rotation
    float a = res.x / res.y, ia = imgSize.x / imgSize.y;
    vec2 s = a > ia ? vec2(1., ia / a) : vec2(a / ia, 1.);
    vec2 uv = (v - .5) * s + .5;
    uv += jit + shake * vec2(hash(vec2(seed, 1.)) - .5, hash(vec2(seed, 2.)) - .5) * .02;
    uv.y = 1. - uv.y;
    // the boil: a soft wobble field that changes with every drawing, like a frame redrawn by hand
    vec2 cell = uv * vec2(9., 6.) + seed * 3.7;
    vec2 i0 = floor(cell), fr = fract(cell); fr = fr * fr * (3. - 2. * fr);
    float n1 = mix(mix(hash(i0), hash(i0 + vec2(1., 0.)), fr.x), mix(hash(i0 + vec2(0., 1.)), hash(i0 + vec2(1., 1.)), fr.x), fr.y);
    float n2 = mix(mix(hash(i0 + 7.), hash(i0 + vec2(8., 7.)), fr.x), mix(hash(i0 + vec2(7., 8.)), hash(i0 + vec2(8., 8.)), fr.x), fr.y);
    uv += (vec2(n1, n2) - .5) * .006;
    vec3 c = texture2D(img, clamp(uv, .001, .999)).rgb;
    // grain that changes every frame, then the nearest two inks, dithered
    vec2 px = floor(v * res / 1.5);
    float g = hash(px + seed * 37.1) - .5;
    c += g * .22;
    float lum = dot(c, vec3(.3, .55, .15));
    // speed lines from the bell when a note is blown
    vec2 d = (v - bell) * vec2(a, 1.); float r = length(d), ang = atan(d.y, d.x);
    float lines = step(.86, fract(ang * 9.549 + hash(vec2(floor(ang * 60.), seed)) * .8)) * smoothstep(.02, .12, r) * smoothstep(blast * 1.6 + .1, blast * 1.6 - .3, r) * blast;
    vec3 best = ink[0], next = ink[0]; float bd = 9., nd = 9.;
    for (int i = 0; i < 5; i++) { vec3 k = ink[i]; float dd = distance(c, k) + abs(lum - dot(k, vec3(.3, .55, .15))) * .6;
      if (dd < bd) { nd = bd; next = best; bd = dd; best = k; } else if (dd < nd) { nd = dd; next = k; } }
    vec3 o = hash(px * 1.7 + seed) < .5 * bd / (bd + nd) ? next : best;
    o = mix(o, ink[4], lines);
    // a slight vignette and paper fibres
    vec2 q = v - .5; o *= 1. - dot(q, q) * .6;
    gl_FragColor = vec4(o, 1.);
  }`;
  const sh = (t, src) => { const s = gl.createShader(t); gl.shaderSource(s, src); gl.compileShader(s); if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s)); return s; };
  const prog = gl.createProgram();
  try { gl.attachShader(prog, sh(gl.VERTEX_SHADER, vs)); gl.attachShader(prog, sh(gl.FRAGMENT_SHADER, fs)); } catch (e) { console.warn(e); return fallback(); }
  gl.linkProgram(prog); gl.useProgram(prog);
  const buf = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, buf);
  gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, 1, 1]), gl.STATIC_DRAW);
  const loc = gl.getAttribLocation(prog, "p"); gl.enableVertexAttribArray(loc); gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0);
  const U = (n) => gl.getUniformLocation(prog, n);
  const u = { res: U("res"), imgSize: U("imgSize"), jit: U("jit"), bell: U("bell"), time: U("time"), seed: U("seed"), blast: U("blast"), shake: U("shake"), ink: U("ink") };
  const frames = [];
  const load = (i) => new Promise((ok, no) => { const im = new Image(); im.onload = () => ok(im); im.onerror = no; im.src = `${base}frame-${i}.webp`; });
  let key = 0, blast = 0, shake = 0, frame = 0, seed = 0, jit = [0, 0], W = 0, H = 0;
  const keyBtn = root.querySelector(".ls-key"), keyName = root.querySelector(".ls-key b");
  const setKey = (k) => { key = k; gl.uniform3fv(u.ink, new Float32Array(KEYS[k].inks.flatMap(hex))); keyName.textContent = KEYS[k].name; root.dataset.key = String(k); };
  keyBtn.addEventListener("click", () => { setKey((key + 1) % KEYS.length); draw(); });
  root.addEventListener("pointerdown", (e) => { if (e.target.closest("a,button")) return; blast = 1; shake = 1; });
  const resize = () => {
    const r = canvas.getBoundingClientRect(), d = Math.min(devicePixelRatio || 1, 1.5);
    W = canvas.width = Math.round(r.width * d / 2); H = canvas.height = Math.round(r.height * d / 2); // half resolution: chunkier ink
    gl.viewport(0, 0, W, H);
  };
  const draw = () => {
    if (!frames.length) return;
    gl.bindTexture(gl.TEXTURE_2D, frames[frame].tex);
    gl.uniform2f(u.res, W, H); gl.uniform2f(u.imgSize, frames[frame].w, frames[frame].h);
    gl.uniform2f(u.jit, jit[0], jit[1]); gl.uniform2f(u.bell, .32, .84);
    gl.uniform1f(u.seed, seed); gl.uniform1f(u.blast, blast); gl.uniform1f(u.shake, shake);
    gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
  };
  Promise.all([1, 2].map((i) => load(i).catch(() => null))).then((imgs) => {
    for (const im of imgs) {
      if (!im) continue;
      const t = gl.createTexture(); gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGB, gl.RGB, gl.UNSIGNED_BYTE, im);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE); gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      frames.push({ tex: t, w: im.naturalWidth, h: im.naturalHeight });
    }
    if (!frames.length) return fallback();
    setKey(0); resize(); draw(); canvas.dataset.ready = "true";
    if (reduced) return;
    // eight drawings a second, never the same twice in a row, each slightly nudged
    let last = 0, acc = 0, visible = true;
    new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
    const loop = (now) => {
      requestAnimationFrame(loop);
      const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
      if (!visible || document.hidden) return;
      blast = Math.max(0, blast - dt * 1.1); shake = Math.max(0, shake - dt * 3);
      acc += dt;
      if (acc > 1 / 8) {
        acc = 0; seed = (seed + 1.618) % 97;
        let n = frame; while (n === frame && frames.length > 1) n = (Math.random() * frames.length) | 0; frame = n;
        jit = [(Math.random() - .5) * .006, (Math.random() - .5) * .006];
      }
      draw();
    };
    requestAnimationFrame(loop);
    if (window.gsap) gsap.timeline({ defaults: { ease: "expo.out" } })
      .from(".ls-title .w>span", { yPercent: 110, stagger: .07, duration: 1.2 }, .2)
      .from(".ls-kicker,.ls-sub,.hx-lateset .hx-actions,.ls-key", { y: 16, autoAlpha: 0, stagger: .08, duration: .9 }, .6);
  });
  new ResizeObserver(() => { resize(); draw(); }).observe(canvas);
})();
