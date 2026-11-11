import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/**
 * Living art: a real-time 3D subject seen through a print/screen "look".
 *
 * The subject is rendered into a tiny target, one texel per cell. A shader then
 * draws every cell as a pixel, an LED or a vertical streak, ordered-dithers its
 * colour (8x8 Bayer), smears columns and lets lit cells flare now and then.
 * Bloom and optional god rays sit on top. The vocabulary (Bayer, LED, glow,
 * twinkle) follows Matthew Hamilton's MIT-licensed Lumen, rebuilt here as a
 * GPU pass so it can run live behind a landing page.
 */
export interface Look {
  cell: number;
  shape: "pixel" | "led" | "streak";
  gap: number;
  levels: number;
  mono?: { ink: string; paper: string };
  saturation?: number;
  contrast?: number;
  exposure?: number;
  twinkle: number;
  smear?: number;
  rays?: number;
  bloom: [strength: number, radius: number, threshold: number];
  background: string;
}
export interface Subject {
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  /** Advance to time t (seconds); pointer is -1..1 with a 0..1 presence. */
  update(t: number, pointer: { x: number; y: number; on: number }): void;
  /** Where the god rays radiate from, in 0..1 screen space. */
  focus?(): THREE.Vector2;
  resize?(aspect: number): void;
}

const vertex = /* glsl */ `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`;
const lookShader = {
  uniforms: {
    tDiffuse: { value: null as THREE.Texture | null },
    tSrc: { value: null as THREE.Texture | null },
    uGrid: { value: new THREE.Vector2(1, 1) },
    uCell: { value: 6 },
    uTime: { value: 0 },
    uShape: { value: 0 },
    uGap: { value: 0.1 },
    uLevels: { value: 4 },
    uMono: { value: 0 },
    uInk: { value: new THREE.Color(1, 1, 1) },
    uPaper: { value: new THREE.Color(0, 0, 0) },
    uBg: { value: new THREE.Color(0, 0, 0) },
    uSat: { value: 1 },
    uContrast: { value: 1 },
    uExposure: { value: 1 },
    uTwinkle: { value: 0.5 },
    uSmear: { value: 0 },
  },
  vertexShader: vertex,
  fragmentShader: /* glsl */ `
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
    }`,
};
const raysShader = {
  uniforms: { tDiffuse: { value: null }, uCenter: { value: new THREE.Vector2(0.5, 0.5) }, uStrength: { value: 0.5 } },
  vertexShader: vertex,
  fragmentShader: /* glsl */ `
    uniform sampler2D tDiffuse; uniform vec2 uCenter; uniform float uStrength; varying vec2 vUv;
    void main(){
      vec3 base = texture2D(tDiffuse, vUv).rgb, acc = vec3(0.0);
      vec2 step = (vUv - uCenter) * 0.022, uv = vUv; float w = 1.0;
      for (int i = 0; i < 40; i++) { uv -= step; acc += max(texture2D(tDiffuse, uv).rgb - 0.6, 0.0) * w; w *= 0.955; }
      gl_FragColor = vec4(base + acc * uStrength / 20.0, 1.0);
    }`,
};

export class LivingArt {
  renderer: THREE.WebGLRenderer;
  private src: THREE.WebGLRenderTarget;
  private composer: EffectComposer;
  private look: ShaderPass;
  private rays?: ShaderPass;
  private bloom: UnrealBloomPass;
  private dpr: number;

  constructor(private host: HTMLElement, private subject: Subject, private opts: Look) {
    this.renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
    this.dpr = Math.min(devicePixelRatio || 1, 1.5);
    this.renderer.setPixelRatio(this.dpr);
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    host.append(this.renderer.domElement);
    this.src = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, samples: 4, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter });
    this.composer = new EffectComposer(this.renderer);
    this.look = new ShaderPass(lookShader);
    const u = this.look.uniforms;
    u.tSrc.value = this.src.texture;
    u.uShape.value = opts.shape === "pixel" ? 0 : opts.shape === "led" ? 1 : 2;
    u.uGap.value = opts.gap;
    u.uLevels.value = opts.levels;
    u.uMono.value = opts.mono ? 1 : 0;
    if (opts.mono) {
      u.uInk.value.set(opts.mono.ink).convertSRGBToLinear();
      u.uPaper.value.set(opts.mono.paper).convertSRGBToLinear();
    }
    u.uBg.value.set(opts.background).convertSRGBToLinear();
    u.uSat.value = opts.saturation ?? 1;
    u.uContrast.value = opts.contrast ?? 1;
    u.uExposure.value = opts.exposure ?? 1;
    u.uTwinkle.value = opts.twinkle;
    u.uSmear.value = opts.smear ?? 0;
    this.composer.addPass(this.look);
    if (opts.rays) {
      this.rays = new ShaderPass(raysShader);
      this.rays.uniforms.uStrength.value = opts.rays;
      this.composer.addPass(this.rays);
    }
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), ...opts.bloom);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
    this.resize();
  }
  resize() {
    const w = Math.max(1, this.host.clientWidth), h = Math.max(1, this.host.clientHeight);
    this.renderer.setSize(w, h, false);
    this.composer.setPixelRatio(this.dpr);
    this.composer.setSize(w, h);
    this.bloom.resolution.set(w / 2, h / 2);
    const gw = Math.ceil(w / this.opts.cell), gh = Math.ceil(h / this.opts.cell);
    this.src.setSize(gw, gh);
    this.look.uniforms.uGrid.value.set(gw, gh);
    this.subject.camera.aspect = w / h;
    this.subject.camera.updateProjectionMatrix();
    this.subject.resize?.(w / h);
  }
  render(t: number, pointer: { x: number; y: number; on: number }) {
    this.subject.update(t, pointer);
    this.look.uniforms.uTime.value = t;
    if (this.rays && this.subject.focus) this.rays.uniforms.uCenter.value.copy(this.subject.focus());
    this.renderer.setRenderTarget(this.src);
    this.renderer.setClearColor(0x000000, 1);
    this.renderer.clear();
    this.renderer.render(this.subject.scene, this.subject.camera);
    this.renderer.setRenderTarget(null);
    this.composer.render();
  }
  dispose() {
    this.subject.scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      (Array.isArray(m.material) ? m.material : m.material ? [m.material] : []).forEach((mat) => {
        Object.values(mat).forEach((v) => v instanceof THREE.Texture && v.dispose());
        mat.dispose();
      });
    });
    this.src.dispose();
    this.composer.dispose();
    this.renderer.dispose();
    this.renderer.domElement.remove();
  }
}
