import * as THREE from "three";

/**
 * Cloudwhale's voxel world. Everything is built from instanced cubes; whales
 * swim with a body wave applied in the vertex shader from each voxel's
 * position, and the same wave is evaluated in JS for anything riding on them.
 */
export const V = 0.25;
let seed = 5;
export const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
export const reseed = (s: number) => (seed = s);

type Vox = [x: number, y: number, z: number, color: string];
const box = new THREE.BoxGeometry(1, 1, 1);

export interface WaveUniforms { uTime: { value: number }; uAmp: { value: number }; uTail: { value: number }; uLen: { value: number }; uScale: { value: number } }
export function waveUniforms(len: number): WaveUniforms {
  return { uTime: { value: 0 }, uAmp: { value: 0 }, uTail: { value: 0 }, uLen: { value: len }, uScale: { value: V } };
}
/** The swimming wave, in world units, for a point at local x along a whale. */
export function waveAt(u: WaveUniforms, x: number) {
  const s = Math.max(0, Math.min(1, (x - u.uTail.value) / u.uLen.value));
  return Math.sin(u.uTime.value * 1.5 - s * 4) * u.uAmp.value * Math.pow(1 - s, 2.2);
}
function material(lit: boolean, wave?: WaveUniforms) {
  const m = lit ? new THREE.MeshLambertMaterial({ color: 0xffffff }) : new THREE.MeshBasicMaterial({ color: 0xffffff });
  if (wave)
    m.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, wave);
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nuniform float uTime, uAmp, uTail, uLen, uScale;")
        .replace(
          "#include <begin_vertex>",
          `#include <begin_vertex>
          float ws = clamp((instanceMatrix[3].x - uTail) / uLen, 0.0, 1.0);
          transformed.y += sin(uTime * 1.5 - ws * 4.0) * uAmp * pow(1.0 - ws, 2.2) / uScale;`,
        );
    };
  return m;
}
export function voxels(list: Vox[], lit = true, wave?: WaveUniforms, size = V) {
  const mesh = new THREE.InstancedMesh(box, material(lit, wave), Math.max(1, list.length));
  const m = new THREE.Matrix4(), c = new THREE.Color();
  list.forEach(([x, y, z, col], i) => {
    m.makeScale(size, size, size).setPosition(x * size, y * size, z * size);
    mesh.setMatrixAt(i, m);
    mesh.setColorAt(i, c.set(col));
  });
  mesh.count = list.length;
  mesh.frustumCulled = false;
  return mesh;
}

/** A humpback: long pectoral fins, throat pleats, barnacles, and an eye that can blink. */
export function buildWhale(opts: { length: number; back: string; back2: string; belly: string; seed: number }) {
  reseed(opts.seed);
  const L = opts.length, body: Vox[] = [], glow: Vox[] = [];
  const radius = (s: number) =>
    s < 0.12 ? 1 + s * 6 : s < 0.62 ? 1.7 + Math.pow((s - 0.12) / 0.5, 0.9) * (L * 0.11) : (1.7 + L * 0.11) * (1 - Math.pow((s - 0.62) / 0.38, 2.2) * 0.62);
  const top: number[] = [];
  const inside = (x: number, y: number, z: number) => {
    const s = x / L, r = radius(s);
    const ry = r * (y > 0 ? 0.8 : 0.95), rz = r;
    return (y * y) / (ry * ry) + (z * z) / (rz * rz) <= 1;
  };
  for (let x = 0; x <= L; x++) {
    const s = x / L, r = Math.ceil(radius(s)) + 1;
    let highest = -99;
    for (let y = -r; y <= r; y++)
      for (let z = -r; z <= r; z++) {
        if (!inside(x, y, z)) continue;
        if (inside(x, y + 1, z) && inside(x, y - 1, z) && inside(x, y, z + 1) && inside(x, y, z - 1) && inside(x + 1, y, z) && inside(x - 1, y, z)) continue;
        highest = Math.max(highest, y);
        const rr = radius(s), under = y < -rr * 0.2;
        let col = under ? opts.belly : rnd() > 0.82 ? opts.back2 : opts.back;
        if (under && s > 0.55 && Math.abs(z) % 2 === 0) col = "#7f8fb5";
        if (!under && s > 0.68 && y > rr * 0.35 && rnd() > 0.86) col = "#e6dcc0";
        if (s > 0.8 && Math.abs(y + rr * 0.18) < 0.6) col = "#262b5c";
        body.push([x, y, z, col]);
      }
    top.push(highest);
  }
  // Eye: white with a dark pupil, on both flanks.
  const ex = Math.round(L * 0.84), er = radius(ex / L);
  const eyes: Vox[] = [];
  for (const side of [-1, 1]) {
    const z = Math.round(side * er * 0.93);
    eyes.push([ex, 0, z, "#ffffff"], [ex + 1, 0, z, "#0b0d1f"]);
  }
  // Flukes: a heart-shaped tail, spread across z.
  for (let z = -Math.round(L * 0.16); z <= Math.round(L * 0.16); z++) {
    const reach = Math.round(5 - Math.abs(Math.abs(z) - L * 0.09) * 0.6);
    for (let x = -reach; x <= 1; x++) body.push([x, 0, z, Math.abs(z) > L * 0.13 ? opts.back2 : opts.back]);
  }
  // Pectoral fins: long, swept back and down, pale on their edges like a humpback's.
  const fx = Math.round(L * 0.66), fr = radius(fx / L);
  for (const side of [-1, 1])
    for (let k = 0; k < L * 0.34; k++) {
      const z = side * (fr + k), w = Math.round(3 - k * 0.07);
      for (let j = -w; j <= w; j++) body.push([fx - Math.round(k * 0.45) + j, Math.round(-fr * 0.35 - k * 0.22), Math.round(z), j === w ? "#e6ecf5" : opts.back]);
    }
  // Dorsal hump.
  const dx = Math.round(L * 0.32);
  for (let k = 0; k < 3; k++) body.push([dx + k, top[dx] + 1, 0, opts.back]);
  const wave = waveUniforms(L * V);
  const group = new THREE.Group();
  const bodyMesh = voxels(body, true, wave), eyeMesh = voxels(eyes, false, wave), glowMesh = voxels(glow, false, wave);
  group.add(bodyMesh, eyeMesh, glowMesh);
  // Centre the whale on its middle.
  const centre = (L * V) / 2;
  for (const m of [bodyMesh, eyeMesh, glowMesh]) m.position.x = -centre;
  wave.uTail.value = 0;
  return { group, wave, top: (x: number) => (top[Math.max(0, Math.min(L, Math.round(x)))] + 1) * V, centre, eyeMesh, L };
}

/** A small voxel house: walls, a stepped roof, a chimney and lit windows. */
export function buildHouse(i: number) {
  reseed(100 + i);
  const walls = ["#ffe9c2", "#f4b6a0", "#9fd3c7", "#e6ecf5", "#ffcf8a"][i % 5], roof = ["#c4506b", "#3b3f7a", "#ff8a3d", "#1d8f9a", "#7a2d55"][i % 5];
  const w = 3 + (i % 2), h = 3 + (i % 3 === 0 ? 1 : 0), solid: Vox[] = [], lit: Vox[] = [];
  for (let x = 0; x < w; x++) for (let y = 0; y < h; y++) for (let z = 0; z < 3; z++) solid.push([x, y, z, walls]);
  for (let k = 0; k < 2; k++) for (let x = -1 + k; x <= w - k; x++) for (let z = -1 + k; z <= 3 - k; z++) solid.push([x, h + k, z, roof]);
  solid.push([w - 1, h + 2, 1, "#5a5aa0"], [w - 1, h + 3, 1, "#5a5aa0"]);
  lit.push([1, 1, 3, "#ffd34d"]);
  if (w > 3) lit.push([2, 1, 3, "#ffd34d"]);
  lit.push([w, 1, 1, "#ffd34d"]);
  const g = new THREE.Group();
  const s = voxels(solid, true, undefined, V * 0.9), l = voxels(lit, false, undefined, V * 0.9);
  // Centre on its footprint.
  for (const m of [s, l]) m.position.set((-w / 2) * V * 0.9, 0, -1.5 * V * 0.9);
  g.add(s, l);
  return { group: g, windows: l.material as THREE.MeshBasicMaterial, chimney: new THREE.Vector3((w / 2 - 1) * V * 0.9, (h + 4) * V * 0.9, 0) };
}

/** Cloud puffs: rounded clusters with lit tops and shadowed bellies. */
export function buildClouds(count: number, spread: number, y: number) {
  reseed(77);
  const list: Vox[] = [];
  const puffs: THREE.Vector3[] = [];
  for (let k = 0; k < count; k++) {
    const cx = (rnd() - 0.5) * spread, cz = -rnd() * spread * 0.55 + spread * 0.12, r = 3 + rnd() * 5;
    puffs.push(new THREE.Vector3(cx * V, y, cz * V));
    for (let x = -r; x <= r; x++)
      for (let z = -r; z <= r; z++)
        for (let yy = 0; yy <= r * 0.7; yy++) {
          const d = (x * x) / (r * r) + (z * z) / (r * r) + (yy * yy) / (r * r * 0.4);
          if (d > 1 || (d < 0.6 && yy > 0 && yy < r * 0.5)) continue;
          list.push([Math.round(cx + x), Math.round(y / V + yy), Math.round(cz + z), yy > r * 0.45 ? "#ffffff" : yy > r * 0.2 ? "#e6ecf5" : "#b9c4dc"]);
        }
  }
  return { mesh: voxels(list, true), puffs };
}

export const skyVertex = `varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`;
export const skyFragment = /* glsl */ `
  uniform float uTime, uNight, uStorm, uAurora, uFlash, uDawn;
  uniform vec3 uSun;
  varying vec3 vDir;
  float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  void main(){
    float y = vDir.y;
    vec3 dawnTop = vec3(0.55, 0.48, 0.78), dawnMid = vec3(0.96, 0.55, 0.58), dawnLow = vec3(1.0, 0.72, 0.48);
    vec3 nightTop = vec3(0.03, 0.04, 0.12), nightLow = vec3(0.10, 0.12, 0.30);
    vec3 stormTop = vec3(0.12, 0.14, 0.22), stormLow = vec3(0.32, 0.34, 0.42);
    float g = smoothstep(-0.15, 0.6, y);
    vec3 col = g < 0.45 ? mix(dawnLow, dawnMid, g / 0.45) : mix(dawnMid, dawnTop, (g - 0.45) / 0.55);
    col = mix(col, mix(stormLow, stormTop, g), uStorm);
    col = mix(col, mix(nightLow, nightTop, g), uNight);
    // Sun and its halo.
    float sd = max(dot(normalize(vDir), normalize(uSun)), 0.0);
    col += vec3(1.0, 0.8, 0.5) * (pow(sd, 400.0) * 2.0 + pow(sd, 18.0) * 0.35) * (1.0 - uNight) * (1.0 - uStorm);
    // Moon opposite, and stars.
    vec3 moonDir = normalize(vec3(-0.5, 0.35, -0.8));
    float md = max(dot(normalize(vDir), moonDir), 0.0);
    col += vec3(0.95, 0.92, 0.8) * (step(0.9993, md) + pow(md, 60.0) * 0.15) * uNight;
    vec2 sp = floor(vec2(atan(vDir.z, vDir.x) * 160.0, y * 160.0));
    float star = step(0.993, h(sp)) * smoothstep(0.0, 0.3, y) * (0.6 + 0.4 * sin(uTime * 2.0 + h(sp) * 40.0));
    col += star * uNight * (1.0 - uStorm);
    // Aurora: curtains that ripple across the northern sky.
    float a = atan(vDir.x, -vDir.z);
    // Curtains: a hem that ripples sideways, rays that climb from it and fade.
    float hem = 0.22 + 0.07 * sin(a * 2.3 + uTime * 0.35) + 0.03 * sin(a * 7.0 - uTime * 0.6);
    float above = y - hem;
    float curtain = step(0.0, above) * exp(-above * 9.0) + exp(-pow(above * 40.0, 2.0)) * 0.6;
    float rays = pow(0.5 + 0.5 * sin(a * 48.0 + sin(a * 6.0 + uTime * 0.5) * 4.0), 3.0);
    col += mix(vec3(0.24, 0.88, 0.77), vec3(0.55, 0.48, 0.85), smoothstep(0.0, 0.18, above)) * curtain * (0.35 + rays * 0.65) * uAurora * 0.75;
    col += vec3(0.8, 0.85, 1.0) * uFlash;
    gl_FragColor = vec4(pow(max(col, 0.0), vec3(2.2)), 1.0);
  }`;
