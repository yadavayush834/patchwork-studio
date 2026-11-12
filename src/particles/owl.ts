import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/**
 * Nocturne: an owl rebuilt as a point cloud from a painting and its depth map.
 * Every non-black pixel of the painting becomes a point; the depth map pushes it toward or away
 * from the camera. In the shader the wings beat (a wave travelling out from the shoulders that
 * lifts them and brings them forward), the body bobs, and points can be scattered into dust and
 * pulled back. Three ways to colour it: the feathers' own colour, depth as light, or heat.
 */

const load = (src: string) => new Promise<HTMLImageElement>((ok, no) => { const i = new Image(); i.onload = () => ok(i); i.onerror = no; i.src = src; });
function pixels(img: HTMLImageElement, w: number, h: number) {
  const c = document.createElement("canvas"); c.width = w; c.height = h;
  const g = c.getContext("2d", { willReadFrequently: true })!; g.drawImage(img, 0, 0, w, h);
  return g.getImageData(0, 0, w, h).data;
}

async function start(root: HTMLElement) {
  const canvas = root.querySelector<HTMLCanvasElement>(".ow-art")!, base = canvas.dataset.base || "";
  const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const [paint, depth] = await Promise.all([load(base + "painting.webp"), load(base + "depth.webp")]);
  const SW = 460, SH = Math.round(SW * paint.naturalHeight / paint.naturalWidth);
  const col = pixels(paint, SW, SH), dep = pixels(depth, SW, SH);
  const P: number[] = [], C: number[] = [], D: number[] = [], Rn: number[] = [];
  const aspect = SW / SH, Wd = 8, Hd = Wd / aspect;
  for (let y = 0; y < SH; y++) for (let x = 0; x < SW; x++) {
    const i = (y * SW + x) * 4, r = col[i], g = col[i + 1], b = col[i + 2], lum = Math.max(r, g, b);
    if (lum < 22) continue;
    // keep fewer points where the picture is dark, so the dust thins out at the edges
    if (Math.random() > Math.min(1, lum / 90)) continue;
    const d = dep[i] / 255;
    const jx = (Math.random() - .5) / SW, jy = (Math.random() - .5) / SH;
    P.push(((x / SW) - .5 + jx) * Wd, (.5 - y / SH + jy) * Hd, (d - .45) * 1.8);
    C.push(r / 255, g / 255, b / 255); D.push(d);
    const a = Math.random() * Math.PI * 2, u = Math.random() * 2 - 1, s = Math.sqrt(1 - u * u);
    Rn.push(Math.cos(a) * s, u, Math.sin(a) * s, Math.random());
  }
  const count = D.length;
  root.querySelector(".ow-count")!.textContent = count.toLocaleString("en");

  const renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  const scene = new THREE.Scene(); scene.background = new THREE.Color(0x020308);
  const camera = new THREE.PerspectiveCamera(32, 1, .1, 100); camera.position.set(0, .2, 11);
  const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), .32, .45, .2); composer.addPass(bloom); composer.addPass(new OutputPass());

  const geo = new THREE.BufferGeometry();
  geo.setAttribute("position", new THREE.Float32BufferAttribute(P, 3));
  geo.setAttribute("color", new THREE.Float32BufferAttribute(C, 3));
  geo.setAttribute("depth", new THREE.Float32BufferAttribute(D, 1));
  geo.setAttribute("rand", new THREE.Float32BufferAttribute(Rn, 4));
  const uniforms = { uTime: { value: 0 }, uFlap: { value: 0 }, uScatter: { value: reduced ? 0 : 1 }, uMode: { value: 1 }, uFrom: { value: 1 }, uMix: { value: 1 }, uPixel: { value: renderer.getPixelRatio() } };
  const mat = new THREE.ShaderMaterial({
    uniforms,
    vertexShader: `
      attribute vec3 color; attribute float depth; attribute vec4 rand;
      uniform float uTime, uFlap, uScatter, uMode, uFrom, uMix, uPixel;
      varying vec3 vCol; varying float vA;
      vec3 neon(float d){ return d < .5 ? mix(vec3(.05,.12,.55), vec3(.0,.85,.9), d * 2.) : mix(vec3(.0,.85,.9), vec3(1.,.25,.75), (d - .5) * 2.); }
      vec3 heat(float l){ return clamp(vec3(1.6*l, 1.6*l*l - .2, 3.*l*l*l - 1.6), 0., 1.) + vec3(.06,0.,.12) * (1. - l); }
      vec3 paint(float m, vec3 c, float d){ float l = max(c.r, max(c.g, c.b)); return m < .5 ? c * 1.15 : m < 1.5 ? neon(d) * (.35 + l * .9) : heat(l * .7 + d * .35); }
      void main(){
        vec3 p = position;
        // the wing beat: a wave from the shoulders out to the tips, lifting the wings and bringing them forward
        float ax = abs(p.x), wing = smoothstep(.55, 3.9, ax);
        float beat = sin(uFlap - ax * .55);
        p.y += beat * wing * ax * .2;
        p.z += (cos(uFlap - ax * .55) * .5 + .3) * wing * ax * .22;
        p.y += sin(uFlap + 1.4) * .12;
        // breathing dust
        p += (rand.xyz * .015) * sin(uTime * 2. + rand.w * 30.);
        // scattered into dust: each point flies out along its own direction, farther for the outer ones
        float s = uScatter * uScatter * (3. - 2. * uScatter);
        p += rand.xyz * s * (3. + rand.w * 5.) + vec3(0., s * rand.w * 1.5, 0.);
        vec4 mv = modelViewMatrix * vec4(p, 1.);
        gl_Position = projectionMatrix * mv;
        gl_PointSize = (1.05 + depth * 1.1 + s * 2.) * uPixel * (11. / -mv.z);
        vCol = mix(paint(uFrom, color, depth), paint(uMode, color, depth), uMix);
        vA = (.42 + depth * .4) * (1. - s * .55);
      }`,
    fragmentShader: `varying vec3 vCol; varying float vA;
      void main(){ vec2 q = gl_PointCoord - .5; float r = dot(q, q); if (r > .25) discard; gl_FragColor = vec4(vCol * vA * (1. - r * 2.6), 1.); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
  const owl = new THREE.Points(geo, mat); owl.frustumCulled = false;
  const rig = new THREE.Group(); rig.add(owl); scene.add(rig);
  // a few far stars
  const sp: number[] = []; for (let i = 0; i < 900; i++) sp.push((Math.random() - .5) * 60, (Math.random() - .5) * 34, -10 - Math.random() * 30);
  const sg = new THREE.BufferGeometry(); sg.setAttribute("position", new THREE.Float32BufferAttribute(sp, 3));
  scene.add(new THREE.Points(sg, new THREE.PointsMaterial({ color: 0x6f7cc0, size: .05, transparent: true, opacity: .6 })));

  // colour modes
  const modes = [...root.querySelectorAll<HTMLButtonElement>(".ow-mode")];
  const setMode = (m: number) => {
    uniforms.uFrom.value = uniforms.uMode.value * uniforms.uMix.value + uniforms.uFrom.value * (1 - uniforms.uMix.value);
    uniforms.uFrom.value = Math.round(uniforms.uFrom.value); uniforms.uMode.value = m; uniforms.uMix.value = reduced ? 1 : 0;
    modes.forEach((b, i) => b.setAttribute("aria-checked", String(i === m)));
    root.dataset.mode = String(m);
  };
  modes.forEach((b, i) => b.addEventListener("click", () => setMode(i)));
  setMode(1);
  // scatter on click, then gather again
  let scatterTarget = 0, holdUntil = 0;
  root.addEventListener("pointerdown", (e) => { if ((e.target as HTMLElement).closest("a,button")) return; scatterTarget = 1; holdUntil = performance.now() + 700; });
  // the pointer orbits the camera around the owl
  let tx = 0, ty = 0, ox = 0, oy = 0;
  root.addEventListener("pointermove", (e) => { tx = (e.clientX / innerWidth - .5) * 1.1; ty = (e.clientY / innerHeight - .5) * .5; });

  const resize = () => {
    const r = root.getBoundingClientRect(); renderer.setSize(r.width, r.height, false); composer.setSize(r.width, r.height);
    camera.aspect = r.width / r.height; camera.position.z = r.width / r.height < 1 ? 19 : 11; camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(root); resize();
  let visible = true; new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);
  canvas.dataset.ready = "true";
  if (reduced) { uniforms.uFlap.value = 1.2; composer.render(); return; }
  let last = performance.now();
  const frame = (now: number) => {
    requestAnimationFrame(frame);
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (!visible || document.hidden) return;
    uniforms.uTime.value += dt;
    uniforms.uFlap.value += dt * 2.6;
    uniforms.uMix.value = Math.min(1, uniforms.uMix.value + dt * 1.6);
    if (now > holdUntil) scatterTarget = 0;
    uniforms.uScatter.value += (scatterTarget - uniforms.uScatter.value) * Math.min(1, dt * (scatterTarget ? 5 : 1.4));
    ox += (tx - ox) * .05; oy += (ty - oy) * .05;
    const sway = Math.sin(uniforms.uTime.value * .25) * .18;
    rig.rotation.y = ox + sway; rig.rotation.x = oy * .6;
    rig.position.x = innerWidth > 900 ? 1.25 : 0;
    rig.position.y = .15 + Math.sin(uniforms.uFlap.value + 1.4) * .05;
    composer.render();
  };
  requestAnimationFrame(frame);
}

// Start last, once every constant above exists.
const root = document.querySelector<HTMLElement>(".hx-owl");
if (root) void start(root);
