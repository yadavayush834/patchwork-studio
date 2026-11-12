/**
 * Diorama: turns one painting and its depth map into a small 3D place.
 *
 * Every frame the painting is ray-marched against its own depth map
 * (steep parallax mapping), so when the camera moves, near things slide over
 * far things and hide what is behind them, like a real set. On top of that:
 *   - light: bright, warm parts of the painting emit, flicker and bloom;
 *   - rays: that light is smeared towards a light source (screen-space god rays);
 *   - air: fog that thickens with distance;
 *   - life: GPU particles (dust, embers, snow, rain, fireflies, steam, petals,
 *     sparks) that live at real depths and are hidden by things in front of them;
 *   - water: a ripple below a waterline;
 *   - pixels: an optional low-resolution mode with an automatic palette and
 *     ordered dithering, for pixel art that still moves in 3D;
 *   - a title plane: lettering hung at a real depth inside the picture, so
 *     nearer things pass in front of it and it casts a soft shadow on what is
 *     behind, like a title card painted into the set.
 * WebGL2, no dependencies. Plain images in, one canvas out.
 */

export type ParticleKind = "dust" | "embers" | "snow" | "rain" | "fireflies" | "steam" | "petals" | "sparks" | "bubbles";
export interface ParticleSpec {
  kind: ParticleKind;
  count: number;
  color: [number, number, number];
  size?: number;
  speed?: number;
  /** Where they live, in painting coordinates: [x0, y0, x1, y1]. */
  region?: [number, number, number, number];
  /** Depth range they live in (1 = nearest). */
  depth?: [number, number];
  /** How much they feed the bloom (0–2). */
  glow?: number;
  /** Fire a burst from a point instead of living continuously. */
  burst?: boolean;
}
export interface DioramaOptions {
  color: string;
  depth: string;
  /** Screen pixels per painted pixel; 0 renders at full resolution. */
  pixel?: number;
  /** Size of the automatic palette in pixel mode (0 keeps the painting's colours). */
  palette?: number;
  /** Take the palette from another picture (so a photo can be painted in a scene's colours). */
  paletteFrom?: string;
  /** How far the nearest plane travels, as a fraction of the picture width. */
  depthScale?: number;
  /** Depth that stays still while the camera moves (0 far … 1 near). */
  focus?: number;
  /** Extra zoom so edges never show when the camera moves. */
  overscan?: number;
  fog?: [number, number, number, number];
  glow?: { threshold: number; strength: number; flicker?: number; tint?: [number, number, number]; bloom?: number };
  rays?: { x: number; y: number; strength: number; decay?: number; color?: [number, number, number] };
  water?: { y: number; strength: number };
  grade?: { exposure?: number; contrast?: number; saturation?: number; vignette?: number; tint?: [number, number, number] };
  particles?: ParticleSpec[];
  /** How strongly the camera follows the pointer (0 = not at all). */
  pointer?: number;
  /** Start rendering by itself (pauses offscreen, in hidden tabs, and for reduced motion). */
  autoplay?: boolean;
  /** Render one still frame and never animate. */
  still?: boolean;
  /** Lettering at a depth inside the picture (draw it with setTitle). Depth 0 far … 1 near. */
  title?: { depth: number; glow?: number; shadow?: number };
}

const KIND: Record<ParticleKind, number> = { dust: 0, embers: 1, snow: 2, rain: 3, fireflies: 4, steam: 5, petals: 6, sparks: 7, bubbles: 8 };

const VERT = `#version 300 es
in vec2 aPos; out vec2 vUv;
void main(){ vUv = aPos * .5 + .5; gl_Position = vec4(aPos, 0., 1.); }`;

/** Shared camera maths, used by the scene and by the particles so both agree on where things are. */
const CAMERA = `
uniform vec2 uRes; uniform float uImgAsp, uOverscan;
uniform vec2 uCam, uCenter; uniform float uZoom, uFocus, uDolly;
vec2 fitScale(){ float a = uRes.x / uRes.y; return (a > uImgAsp ? vec2(1., uImgAsp / a) : vec2(a / uImgAsp, 1.)) / uOverscan; }
vec2 screenToImage(vec2 uv){ return uCenter + ((uv - .5) * fitScale() + .5 - uCenter) / uZoom; }
vec2 imageToScreen(vec2 img){ return ((uCenter + (img - uCenter) * uZoom) - .5) / fitScale() + .5; }
vec2 shift(vec2 img){ return uCam + (img - uCenter) * uDolly; }
`;

const NOISE = `
float hash(vec2 p){ p = fract(p * vec2(123.34, 456.21)); p += dot(p, p + 45.32); return fract(p.x * p.y); }
float vnoise(vec2 p){ vec2 i = floor(p), f = fract(p); f = f * f * (3. - 2. * f);
  return mix(mix(hash(i), hash(i + vec2(1, 0)), f.x), mix(hash(i + vec2(0, 1)), hash(i + vec2(1, 1)), f.x), f.y); }
`;

const SCENE = `#version 300 es
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
${CAMERA}${NOISE}
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
}`;

const PARTICLE_V = `#version 300 es
precision highp float;
in float aId;
uniform int uKind; uniform float uTime, uSize, uSpeed, uCount, uPixel, uBurst;
uniform vec4 uRegion; uniform vec2 uDepthR, uBurstAt; uniform vec3 uTint;
uniform sampler2D uDepth;
out vec3 vCol; out float vA; out float vShape;
${CAMERA}
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
}`;

const PARTICLE_F = `#version 300 es
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
}`;

const BLUR = `#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uDir;
void main(){
  vec3 s = texture(uTex, vUv).rgb * .227;
  s += (texture(uTex, vUv + uDir * 1.385).rgb + texture(uTex, vUv - uDir * 1.385).rgb) * .316;
  s += (texture(uTex, vUv + uDir * 3.231).rgb + texture(uTex, vUv - uDir * 3.231).rgb) * .07;
  o = vec4(s, 1.);
}`;

const RAYS = `#version 300 es
precision highp float;
in vec2 vUv; out vec4 o;
uniform sampler2D uTex; uniform vec2 uLight; uniform float uDecay;
void main(){
  vec2 d = (vUv - uLight) / 48. * .92;
  vec2 p = vUv; vec3 s = vec3(0.); float w = 1.;
  for (int i = 0; i < 48; i++) { p -= d; s += texture(uTex, p).rgb * w; w *= uDecay; }
  o = vec4(s / 20., 1.);
}`;

const FINAL = `#version 300 es
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
}`;

interface Target { fb: WebGLFramebuffer; tex: WebGLTexture[]; w: number; h: number }

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.decoding = "async";
    img.onload = () => resolve(img);
    img.onerror = () => reject(new Error(`Could not load ${src}`));
    img.src = src;
  });
}

/** A small k-means over a downsampled copy of the painting: the colours pixel mode is allowed to use. */
function autoPalette(img: HTMLImageElement, n: number): number[][] {
  const c = document.createElement("canvas"), w = 96, h = Math.round((96 * img.naturalHeight) / img.naturalWidth);
  c.width = w; c.height = h;
  const g = c.getContext("2d", { willReadFrequently: true })!;
  g.drawImage(img, 0, 0, w, h);
  const px = g.getImageData(0, 0, w, h).data, pts: number[][] = [];
  for (let i = 0; i < px.length; i += 4) pts.push([px[i] / 255, px[i + 1] / 255, px[i + 2] / 255]);
  // seed with a spread of luminance so dark and bright both get colours
  pts.sort((a, b) => a[0] + a[1] + a[2] - (b[0] + b[1] + b[2]));
  let centres = Array.from({ length: n }, (_, k) => pts[Math.floor(((k + 0.5) / n) * pts.length)].slice());
  for (let it = 0; it < 10; it++) {
    const sum = centres.map(() => [0, 0, 0, 0]);
    for (const p of pts) {
      let best = 0, bd = 9;
      centres.forEach((q, k) => { const d = (p[0] - q[0]) ** 2 + (p[1] - q[1]) ** 2 + (p[2] - q[2]) ** 2; if (d < bd) { bd = d; best = k; } });
      const s = sum[best]; s[0] += p[0]; s[1] += p[1]; s[2] += p[2]; s[3]++;
    }
    centres = centres.map((q, k) => (sum[k][3] ? [sum[k][0] / sum[k][3], sum[k][1] / sum[k][3], sum[k][2] / sum[k][3]] : q));
  }
  return centres;
}

export class Diorama {
  readonly canvas: HTMLCanvasElement;
  readonly options: DioramaOptions;
  /** Camera: lateral shift (x, y in picture widths), dolly zoom and its centre, all animatable. */
  readonly cam = { x: 0, y: 0, zoom: 1, cx: 0.5, cy: 0.5, dolly: 0 };
  /** Light: where the god rays come from (screen 0–1), and extra glow for effects. */
  readonly light = { x: 0.5, y: 0.5, boost: 0 };
  readonly ready: Promise<void>;
  time = 0;
  private gl!: WebGL2RenderingContext;
  private prog: Record<string, { p: WebGLProgram; u: Record<string, WebGLUniformLocation | null> }> = {};
  private tex: { color?: WebGLTexture; depth?: WebGLTexture; title?: WebGLTexture } = {};
  private imgAsp = 16 / 9;
  private scene?: Target; private half1?: Target; private half2?: Target; private rays?: Target;
  private quad?: WebGLVertexArrayObject; private points?: WebGLVertexArrayObject; private maxPoints = 0;
  private palette: number[][] = [];
  private pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  private pulseAt = { x: 0.5, y: 0.5, t: 99, k: 0 };
  private bursts = new Map<number, { x: number; y: number; t: number }>();
  private raf = 0; private last = 0; private running = false; private visible = true;
  private cleanups: (() => void)[] = [];
  private failed = false;
  /** Paused by a person (a pause button), as opposed to offscreen or a hidden tab. */
  paused = false;
  pause() { this.paused = true; this.sync(); }
  resume() { this.paused = false; this.sync(); }

  constructor(canvas: HTMLCanvasElement, options: DioramaOptions) {
    this.canvas = canvas;
    this.options = { depthScale: 0.04, focus: 0.35, overscan: 1.08, pointer: 1, autoplay: true, ...options };
    this.ready = this.init().catch((e) => { this.fail(e); });
  }

  private fail(e: unknown) {
    this.failed = true;
    console.warn("Diorama fell back to a still picture:", e);
    const host = this.canvas.parentElement;
    if (host) { host.style.backgroundImage = `url("${this.options.color}")`; host.style.backgroundSize = "cover"; host.style.backgroundPosition = "center"; }
    this.canvas.style.visibility = "hidden";
  }

  private async init() {
    const gl = this.canvas.getContext("webgl2", { antialias: false, premultipliedAlpha: false, alpha: false, powerPreference: "high-performance" });
    if (!gl) throw new Error("WebGL2 is not available");
    this.gl = gl;
    const [color, depth] = await Promise.all([loadImage(this.options.color), loadImage(this.options.depth)]);
    this.imgAsp = color.naturalWidth / color.naturalHeight;
    this.tex.color = this.texture(color, true);
    this.tex.depth = this.texture(depth, false);
    if (this.options.pixel && this.options.palette) {
      const source = this.options.paletteFrom ? await loadImage(this.options.paletteFrom).catch(() => color) : color;
      this.palette = autoPalette(source, Math.min(24, this.options.palette));
    }
    this.prog.scene = this.program(SCENE, ["uColor", "uDepth", "uTime", "uFog", "uGlow", "uGlowTint", "uWater", "uPulse", "uTitle", "uTitleP", "uRes", "uImgAsp", "uOverscan", "uCam", "uCenter", "uZoom", "uFocus", "uDolly"]);
    this.prog.particle = this.program(PARTICLE_F, ["uKind", "uTime", "uSize", "uSpeed", "uCount", "uPixel", "uBurst", "uRegion", "uDepthR", "uBurstAt", "uTint", "uDepth", "uGlowK", "uRes", "uImgAsp", "uOverscan", "uCam", "uCenter", "uZoom", "uFocus", "uDolly"], PARTICLE_V);
    this.prog.blur = this.program(BLUR, ["uTex", "uDir"]);
    this.prog.rays = this.program(RAYS, ["uTex", "uLight", "uDecay"]);
    this.prog.final = this.program(FINAL, ["uScene", "uBloom", "uRays", "uRes", "uBloomK", "uRaysK", "uPalN", "uPixel", "uRayCol", "uTint", "uGrade", "uPal"]);
    // geometry: one full-screen triangle pair, and particle ids
    this.quad = gl.createVertexArray()!;
    gl.bindVertexArray(this.quad!);
    const qb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, qb);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 2, gl.FLOAT, false, 0, 0);
    // room for systems to grow at runtime (a kettle that steams harder, a fire that throws more embers)
    this.maxPoints = Math.max(2048, ...(this.options.particles ?? []).map((p) => p.count * 2));
    this.points = gl.createVertexArray()!;
    gl.bindVertexArray(this.points!);
    const pb = gl.createBuffer(); gl.bindBuffer(gl.ARRAY_BUFFER, pb);
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(Array.from({ length: this.maxPoints }, (_, i) => i)), gl.STATIC_DRAW);
    gl.enableVertexAttribArray(0); gl.vertexAttribPointer(0, 1, gl.FLOAT, false, 0, 0);
    gl.bindVertexArray(null);
    this.resize();
    this.listen();
    this.draw(0);
    this.canvas.dataset.ready = "true";
  }

  private texture(img: HTMLImageElement, srgbMip: boolean) {
    const gl = this.gl, t = gl.createTexture()!;
    gl.bindTexture(gl.TEXTURE_2D, t);
    gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, img);
    gl.generateMipmap(gl.TEXTURE_2D);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, srgbMip && this.options.pixel ? gl.NEAREST : gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    return t;
  }

  private program(frag: string, uniforms: string[], vert = VERT) {
    const gl = this.gl;
    const sh = (type: number, src: string) => {
      const s = gl.createShader(type)!;
      gl.shaderSource(s, src); gl.compileShader(s);
      if (!gl.getShaderParameter(s, gl.COMPILE_STATUS)) throw new Error(gl.getShaderInfoLog(s) || "shader error");
      return s;
    };
    const p = gl.createProgram()!;
    gl.attachShader(p, sh(gl.VERTEX_SHADER, vert)); gl.attachShader(p, sh(gl.FRAGMENT_SHADER, frag));
    gl.bindAttribLocation(p, 0, vert === VERT ? "aPos" : "aId");
    gl.linkProgram(p);
    if (!gl.getProgramParameter(p, gl.LINK_STATUS)) throw new Error(gl.getProgramInfoLog(p) || "link error");
    const u: Record<string, WebGLUniformLocation | null> = {};
    for (const n of uniforms) u[n] = gl.getUniformLocation(p, n === "uPal" ? "uPal[0]" : n);
    return { p, u };
  }

  private target(w: number, h: number, count: number): Target {
    const gl = this.gl, fb = gl.createFramebuffer()!, tex: WebGLTexture[] = [];
    gl.bindFramebuffer(gl.FRAMEBUFFER, fb);
    for (let i = 0; i < count; i++) {
      const t = gl.createTexture()!;
      gl.bindTexture(gl.TEXTURE_2D, t);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA8, w, h, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);
      const nearest = this.options.pixel && i === 0;
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, nearest ? gl.NEAREST : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, nearest ? gl.NEAREST : gl.LINEAR);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
      gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0 + i, gl.TEXTURE_2D, t, 0);
      tex.push(t);
    }
    gl.drawBuffers(tex.map((_, i) => gl.COLOR_ATTACHMENT0 + i));
    return { fb, tex, w, h };
  }

  /** Match the canvas to its box. Pixel mode renders one texel per painted pixel and lets CSS scale it up crisply. */
  resize() {
    if (!this.gl || this.failed) return;
    const gl = this.gl, box = this.canvas.getBoundingClientRect();
    const cssW = Math.max(1, box.width), cssH = Math.max(1, box.height);
    const px = this.options.pixel || 0;
    const dpr = Math.min(globalThis.devicePixelRatio || 1, 1.5);
    let w = px ? Math.ceil(cssW / px) : Math.round(cssW * dpr), h = px ? Math.ceil(cssH / px) : Math.round(cssH * dpr);
    const cap = 2400 / Math.max(w, h);
    if (cap < 1) { w = Math.round(w * cap); h = Math.round(h * cap); }
    if (this.canvas.width === w && this.canvas.height === h && this.scene) return;
    this.canvas.width = w; this.canvas.height = h;
    if (px) this.canvas.style.imageRendering = "pixelated";
    for (const t of [this.scene, this.half1, this.half2, this.rays]) if (t) { gl.deleteFramebuffer(t.fb); t.tex.forEach((x) => gl.deleteTexture(x)); }
    this.scene = this.target(w, h, 2);
    const hw = Math.max(1, Math.round(w / (px ? 1 : 2))), hh = Math.max(1, Math.round(h / (px ? 1 : 2)));
    this.half1 = this.target(hw, hh, 1); this.half2 = this.target(hw, hh, 1); this.rays = this.target(hw, hh, 1);
    if (!this.running) this.draw(0);
  }

  private listen() {
    const ro = new ResizeObserver(() => this.resize());
    ro.observe(this.canvas);
    this.cleanups.push(() => ro.disconnect());
    const move = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      this.pointer.tx = e.clientX / innerWidth - 0.5; this.pointer.ty = e.clientY / innerHeight - 0.5;
    };
    addEventListener("pointermove", move, { passive: true });
    this.cleanups.push(() => removeEventListener("pointermove", move));
    const io = new IntersectionObserver(([e]) => { this.visible = e.isIntersecting; this.sync(); }, { rootMargin: "120px" });
    io.observe(this.canvas);
    this.cleanups.push(() => io.disconnect());
    const vis = () => this.sync();
    document.addEventListener("visibilitychange", vis);
    this.cleanups.push(() => document.removeEventListener("visibilitychange", vis));
    const mq = matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", vis);
    this.cleanups.push(() => mq.removeEventListener("change", vis));
    this.sync();
  }

  /** Whether the loop should run: visible, tab shown, motion allowed. */
  get reduced() { return !!this.options.still || matchMedia("(prefers-reduced-motion: reduce)").matches; }
  private sync() {
    const should = !!this.options.autoplay && !this.failed && !this.paused && this.visible && !document.hidden && !this.reduced;
    if (should && !this.running) { this.running = true; this.last = performance.now(); this.raf = requestAnimationFrame((t) => this.loop(t)); }
    else if (!should && this.running) { this.running = false; cancelAnimationFrame(this.raf); }
  }
  private loop(now: number) {
    if (!this.running) return;
    const dt = Math.min(0.05, (now - this.last) / 1000);
    this.last = now;
    this.draw(dt);
    this.raf = requestAnimationFrame((t) => this.loop(t));
  }

  /** Upload the title plane's lettering: a transparent canvas with the painting's aspect ratio. Null removes it. */
  setTitle(src: TexImageSource | null) {
    if (!this.gl || this.failed) return;
    const gl = this.gl;
    if (!src) { if (this.tex.title) gl.deleteTexture(this.tex.title); this.tex.title = undefined; }
    else {
      if (!this.tex.title) {
        this.tex.title = gl.createTexture()!;
        gl.bindTexture(gl.TEXTURE_2D, this.tex.title);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR_MIPMAP_LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
      }
      gl.bindTexture(gl.TEXTURE_2D, this.tex.title);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, src);
      gl.generateMipmap(gl.TEXTURE_2D);
    }
    if (!this.running) this.draw(0);
  }

  /** A ring through the picture at a screen point (0–1, top-left origin). */
  pulse(x: number, y: number, strength = 1) { this.pulseAt = { x, y: 1 - y, t: 0, k: strength }; }
  /** Fire a particle system marked `burst` from a screen point. */
  burst(index: number, x: number, y: number) { this.bursts.set(index, { x, y, t: 0 }); }

  /** Advance time by dt seconds and draw (dt 0 redraws). Call it yourself if autoplay is off. */
  draw(dt: number) {
    if (!this.gl || this.failed || !this.scene || !this.tex.color) return;
    const gl = this.gl, o = this.options;
    this.time += dt;
    const k = 1 - Math.exp(-dt * 3.2), pm = this.reduced ? 0 : o.pointer ?? 1;
    this.pointer.x += (this.pointer.tx * pm - this.pointer.x) * k;
    this.pointer.y += (this.pointer.ty * pm - this.pointer.y) * k;
    this.pulseAt.t += dt;
    this.bursts.forEach((b) => (b.t += dt));
    const scale = o.depthScale ?? 0.04;
    const camX = (this.cam.x + this.pointer.x) * scale, camY = (this.cam.y - this.pointer.y * 0.6) * scale;
    const common = (u: Record<string, WebGLUniformLocation | null>, w: number, h: number) => {
      gl.uniform2f(u.uRes, w, h); gl.uniform1f(u.uImgAsp, this.imgAsp); gl.uniform1f(u.uOverscan, o.overscan ?? 1.08);
      gl.uniform2f(u.uCam, camX, camY); gl.uniform2f(u.uCenter, this.cam.cx, 1 - this.cam.cy);
      gl.uniform1f(u.uZoom, this.cam.zoom); gl.uniform1f(u.uFocus, o.focus ?? 0.35); gl.uniform1f(u.uDolly, this.cam.dolly);
    };
    gl.disable(gl.DEPTH_TEST);
    // 1. the painting, in 3D, with its light
    const S = this.scene;
    gl.bindFramebuffer(gl.FRAMEBUFFER, S.fb); gl.viewport(0, 0, S.w, S.h);
    gl.disable(gl.BLEND);
    let P = this.prog.scene; gl.useProgram(P.p);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, this.tex.color); gl.uniform1i(P.u.uColor, 0);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this.tex.depth!); gl.uniform1i(P.u.uDepth, 1);
    common(P.u, S.w, S.h);
    gl.uniform1f(P.u.uTime, this.time);
    gl.uniform4fv(P.u.uFog, o.fog ?? [0, 0, 0, 0]);
    const glow = o.glow ?? { threshold: 0.8, strength: 0.6 };
    gl.uniform4f(P.u.uGlow, glow.threshold, glow.strength, glow.flicker ?? 0.15, this.light.boost);
    gl.uniform3fv(P.u.uGlowTint, glow.tint ?? [1, 1, 1]);
    gl.uniform2f(P.u.uWater, o.water?.y ?? 2, o.water?.strength ?? 0);
    gl.uniform4f(P.u.uPulse, this.pulseAt.x, this.pulseAt.y, this.pulseAt.t, this.pulseAt.t < 3 ? this.pulseAt.k : 0);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, this.tex.title ?? this.tex.depth!); gl.uniform1i(P.u.uTitle, 2);
    const tt = o.title;
    gl.uniform4f(P.u.uTitleP, tt?.depth ?? 0, tt && this.tex.title ? 1 : 0, tt?.glow ?? 0, tt?.shadow ?? 0.6);
    gl.bindVertexArray(this.quad!); gl.drawArrays(gl.TRIANGLES, 0, 6);
    // 2. life, at its depth
    if (o.particles?.length) {
      P = this.prog.particle; gl.useProgram(P.p);
      gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, this.tex.depth!); gl.uniform1i(P.u.uDepth, 1);
      common(P.u, S.w, S.h);
      gl.uniform1f(P.u.uTime, this.time); gl.uniform1f(P.u.uPixel, o.pixel || 0);
      gl.enable(gl.BLEND);
      gl.bindVertexArray(this.points!);
      o.particles.forEach((sp, i) => {
        const b = this.bursts.get(i);
        if (sp.burst && (!b || b.t > 2.5)) return;
        const additive = !["snow", "petals", "steam", "bubbles"].includes(sp.kind);
        gl.blendFunc(gl.ONE, additive ? gl.ONE : gl.ONE_MINUS_SRC_ALPHA);
        gl.uniform1i(P.u.uKind, KIND[sp.kind]); gl.uniform1f(P.u.uSize, sp.size ?? 3); gl.uniform1f(P.u.uSpeed, sp.speed ?? 1);
        gl.uniform1f(P.u.uCount, sp.count); gl.uniform4fv(P.u.uRegion, sp.region ? [sp.region[0], 1 - sp.region[3], sp.region[2], 1 - sp.region[1]] : [0, 0, 1, 1]);
        gl.uniform2fv(P.u.uDepthR, sp.depth ?? [0.2, 0.9]); gl.uniform3fv(P.u.uTint, sp.color);
        gl.uniform1f(P.u.uGlowK, sp.glow ?? (additive ? 1 : 0));
        gl.uniform1f(P.u.uBurst, sp.burst && b ? b.t : -2);
        gl.uniform2f(P.u.uBurstAt, b ? b.x : 0.5, b ? 1 - b.y : 0.5);
        if (sp.burst && b) gl.uniform2f(P.u.uBurstAt, b.x, 1 - b.y);
        gl.drawArrays(gl.POINTS, 0, sp.count);
      });
      // particles are drawn in image space; a burst's origin is given on screen, close enough for sparks
      gl.disable(gl.BLEND);
    }
    // 3. bloom: blur the light twice, horizontally then vertically
    const H1 = this.half1!, H2 = this.half2!, R = this.rays!;
    P = this.prog.blur; gl.useProgram(P.p); gl.bindVertexArray(this.quad!);
    const pass = (src: WebGLTexture, dst: Target, dx: number, dy: number) => {
      gl.bindFramebuffer(gl.FRAMEBUFFER, dst.fb); gl.viewport(0, 0, dst.w, dst.h);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, src); gl.uniform1i(P.u.uTex, 0);
      gl.uniform2f(P.u.uDir, dx / dst.w, dy / dst.h); gl.drawArrays(gl.TRIANGLES, 0, 6);
    };
    const spread = o.glow?.bloom ?? 1.6;
    pass(S.tex[1], H1, spread, 0); pass(H1.tex[0], H2, 0, spread);
    pass(H2.tex[0], H1, spread * 2.2, 0); pass(H1.tex[0], H2, 0, spread * 2.2);
    // 4. god rays from the light
    if (o.rays) {
      P = this.prog.rays; gl.useProgram(P.p);
      gl.bindFramebuffer(gl.FRAMEBUFFER, R.fb); gl.viewport(0, 0, R.w, R.h);
      gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, S.tex[1]); gl.uniform1i(P.u.uTex, 0);
      gl.uniform2f(P.u.uLight, this.light.x, 1 - this.light.y); gl.uniform1f(P.u.uDecay, o.rays.decay ?? 0.965);
      gl.drawArrays(gl.TRIANGLES, 0, 6);
    }
    // 5. composite, grade and (in pixel mode) quantize to the palette
    P = this.prog.final; gl.useProgram(P.p);
    gl.bindFramebuffer(gl.FRAMEBUFFER, null); gl.viewport(0, 0, this.canvas.width, this.canvas.height);
    gl.activeTexture(gl.TEXTURE0); gl.bindTexture(gl.TEXTURE_2D, S.tex[0]); gl.uniform1i(P.u.uScene, 0);
    gl.activeTexture(gl.TEXTURE1); gl.bindTexture(gl.TEXTURE_2D, H2.tex[0]); gl.uniform1i(P.u.uBloom, 1);
    gl.activeTexture(gl.TEXTURE2); gl.bindTexture(gl.TEXTURE_2D, R.tex[0]); gl.uniform1i(P.u.uRays, 2);
    gl.uniform2f(P.u.uRes, this.canvas.width, this.canvas.height);
    gl.uniform1f(P.u.uBloomK, 1);
    gl.uniform1f(P.u.uRaysK, o.rays ? o.rays.strength : 0);
    gl.uniform3fv(P.u.uRayCol, o.rays?.color ?? [1, 0.9, 0.7]);
    const gr = o.grade ?? {};
    gl.uniform3fv(P.u.uTint, gr.tint ?? [1, 1, 1]);
    gl.uniform4f(P.u.uGrade, gr.exposure ?? 1, gr.contrast ?? 1, gr.saturation ?? 1, gr.vignette ?? 0.25);
    gl.uniform1f(P.u.uPalN, this.palette.length); gl.uniform1f(P.u.uPixel, o.pixel || 0);
    if (this.palette.length) gl.uniform3fv(P.u.uPal, this.palette.flat().concat(new Array((24 - this.palette.length) * 3).fill(0)));
    gl.drawArrays(gl.TRIANGLES, 0, 6);
    gl.bindVertexArray(null);
  }

  destroy() {
    this.running = false;
    cancelAnimationFrame(this.raf);
    this.cleanups.forEach((f) => f());
    this.gl?.getExtension("WEBGL_lose_context")?.loseContext();
  }
}

/** Screen point → painting point, ignoring parallax (good enough to aim a burst or a pulse). */
export function screenPoint(e: { clientX: number; clientY: number }, el: Element) {
  const r = el.getBoundingClientRect();
  return { x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height };
}
