import * as THREE from "three";
import gsap from "gsap";
import { buildClouds, buildHouse, buildWhale, rnd, reseed, skyFragment, skyVertex, V, voxels, waveAt } from "./cloudwhale-world";
import { cloudwhaleBeats, cloudwhaleChapters, cloudwhaleState, clamp01, smooth, type CloudwhaleState } from "./cloudwhale-story";

/** A hand-picked 32-colour palette: dawn, storm, night sea, aurora, lanterns and whale slate. */
const PALETTE = [
  "#0b0d1f", "#16193a", "#262b5c", "#3b3f7a", "#5a5aa0", "#8b7bc0", "#c9b8e8", "#ffffff",
  "#e6ecf5", "#b9c4dc", "#7f8fb5", "#4a5f8c", "#2e3b5c", "#12355e", "#1f5f8f", "#3d8fbf",
  "#3ce0c4", "#1d8f9a", "#2f6b4f", "#5ba86a", "#a8d46f", "#ffe9c2", "#ffcf8a", "#ffd34d",
  "#ff8a3d", "#ff9f6b", "#f47c7c", "#c4506b", "#7a2d55", "#d99ab0", "#9a6a52", "#e6dcc0",
].map((h) => new THREE.Color(h));

const pixelShader = {
  uniforms: {
    tColor: { value: null as THREE.Texture | null },
    tDepth: { value: null as THREE.Texture | null },
    uRes: { value: new THREE.Vector2(1, 1) },
    uPal: { value: PALETTE.map((c) => new THREE.Vector3(c.r, c.g, c.b)) },
    uNear: { value: 0.1 },
    uFar: { value: 600 },
  },
  vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position.xy, 0.0, 1.0); }`,
  fragmentShader: /* glsl */ `
    #include <packing>
    uniform sampler2D tColor, tDepth; uniform vec2 uRes; uniform vec3 uPal[32]; uniform float uNear, uFar;
    varying vec2 vUv;
    float bayer2(vec2 a){ a = floor(a); return fract(dot(a, vec2(0.5, a.y * 0.75))); }
    float bayer4(vec2 a){ return bayer2(0.5 * a) * 0.25 + bayer2(a); }
    float depthAt(vec2 uv){ return -perspectiveDepthToViewZ(texture2D(tDepth, uv).x, uNear, uFar); }
    vec3 nearest(vec3 c){
      vec3 best = uPal[0]; float bd = 1e9;
      for (int i = 0; i < 32; i++) {
        vec3 d = (c - uPal[i]) * vec3(0.9, 1.2, 0.7);
        float e = dot(d, d);
        if (e < bd) { bd = e; best = uPal[i]; }
      }
      return best;
    }
    void main(){
      vec3 lin = texture2D(tColor, vUv).rgb;
      vec3 c = pow(max(lin, 0.0), vec3(1.0 / 2.2));
      c += (bayer4(gl_FragCoord.xy) - 0.5) * 0.05;
      // Outline: a pixel in front of a much farther neighbour gets inked.
      vec2 px = 1.0 / uRes;
      float d0 = depthAt(vUv), far = 0.0;
      far = max(far, depthAt(vUv + vec2(px.x, 0.0)) - d0);
      far = max(far, depthAt(vUv - vec2(px.x, 0.0)) - d0);
      far = max(far, depthAt(vUv + vec2(0.0, px.y)) - d0);
      far = max(far, depthAt(vUv - vec2(0.0, px.y)) - d0);
      if (far > 0.6 + d0 * 0.06 && d0 < 140.0) c = mix(c * 0.3, vec3(0.05, 0.06, 0.16), 0.55);
      gl_FragColor = vec4(nearest(c), 1.0);
    }`,
};

type Key = [number, [number, number, number], [number, number, number]];
const cameraKeys: Key[] = [
  [0.0, [-5, 4.5, 31], [0, 0.5, 0]],
  [0.09, [1, 5.5, 24], [1, 0.6, 0]],
  [0.18, [13, 2.6, 11], [4.6, 0.4, 0]],
  [0.25, [5, 7.5, 15], [0, 0.5, 0]],
  [0.33, [-11, 3, 19], [0, -0.5, 0]],
  [0.42, [-7, -1, 21], [0, -4, 0]],
  [0.5, [-5, -12.5, 23], [0, -16, 0]],
  [0.58, [8, -14.5, 24], [0, -14, -6]],
  [0.66, [-6, -14, 30], [0, -13, -14]],
  [0.74, [7, -10, 21], [0.5, -15.5, -4]],
  [0.84, [-3, -7.5, 23], [0, -16, -4]],
  [0.92, [-15, -15, 30], [3, -19, -10]],
  [1.0, [-16, -13, 40], [10, -16, -18]],
];

export function animateCloudwhale(reduced: boolean, mobile: boolean) {
  const host = document.querySelector<HTMLElement>(".cw-world");
  const stage = document.querySelector<HTMLElement>(".cw-stage");
  if (!host || !stage) return;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
  } catch {
    stage.classList.add("is-fallback");
    document.querySelector<HTMLElement>(".cw-journey")?.style.setProperty("height", "100svh");
    return;
  }
  const PX = mobile ? 3 : 3;
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  host.append(renderer.domElement);
  host.classList.add("has-webgl");

  const scene = new THREE.Scene();
  const fogColor = new THREE.Color();
  scene.fog = new THREE.Fog(fogColor, 40, 170);
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 600);
  const hemi = new THREE.HemisphereLight(0xffe6d0, 0x3b3f7a, 1.3);
  const sun = new THREE.DirectionalLight(0xffd8b0, 2.2);
  sun.position.set(30, 22, 18);
  scene.add(hemi, sun);

  // Sky dome follows the camera.
  const skyU = { uTime: { value: 0 }, uNight: { value: 0 }, uStorm: { value: 0 }, uAurora: { value: 0 }, uFlash: { value: 0 }, uDawn: { value: 0 }, uSun: { value: new THREE.Vector3(0.75, 0.12, -0.65) } };
  const sky = new THREE.Mesh(new THREE.SphereGeometry(400, 32, 16), new THREE.ShaderMaterial({ uniforms: skyU, vertexShader: skyVertex, fragmentShader: skyFragment, side: THREE.BackSide, depthWrite: false, fog: false }));
  scene.add(sky);

  // The sea below the clouds: dark swell, a moon road, then sunrise.
  const seaU = { uTime: { value: 0 }, uNight: { value: 0 }, uDawn: { value: 0 } };
  const sea = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.ShaderMaterial({
      uniforms: seaU,
      fog: false,
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `
        uniform float uTime, uNight, uDawn; varying vec3 vW;
        void main(){
          float swell = sin(vW.x * 0.35 + uTime * 0.8 + sin(vW.z * 0.2) * 2.0) * 0.5 + 0.5;
          vec3 deep = mix(vec3(0.07, 0.2, 0.37), vec3(0.03, 0.06, 0.16), uNight);
          vec3 c = mix(deep, deep * 1.6, swell * 0.4);
          vec2 v = vW.xz - cameraPosition.xz;
          vec2 md = normalize(vec2(-0.5, -0.8)), sd = normalize(vec2(0.75, -0.65));
          float glint = step(0.62, fract(vW.x * 0.9 + sin(vW.z * 1.7 + uTime * 1.2) * 0.6));
          float road = exp(-pow(v.x * md.y - v.y * md.x, 2.0) * 0.015) * step(0.0, dot(v, md)) * glint;
          c += vec3(0.8, 0.8, 0.7) * road * uNight * 0.55;
          float sunRoad = exp(-pow(v.x * sd.y - v.y * sd.x, 2.0) * 0.008) * step(0.0, dot(v, sd)) * glint;
          c = mix(c, vec3(1.0, 0.6, 0.4), uDawn * (0.25 + sunRoad * 0.6));
          float dist = length(vW.xz - cameraPosition.xz);
          c = mix(c, mix(vec3(0.1, 0.12, 0.3), vec3(1.0, 0.62, 0.42), uDawn), smoothstep(60.0, 220.0, dist));
          gl_FragColor = vec4(pow(max(c, 0.0), vec3(2.2)), 1.0);
        }`,
    }),
  );
  sea.rotation.x = -Math.PI / 2;
  sea.position.y = -22;
  scene.add(sea);

  // Cloud sea, which the whale dives through and which later parts.
  const clouds = buildClouds(mobile ? 70 : 110, 360, -6);
  const cloudMat = clouds.mesh.material as THREE.MeshLambertMaterial;
  const cloudBase = clouds.mesh.instanceMatrix.array.slice();
  scene.add(clouds.mesh);
  const floorU = { uTime: { value: 0 }, uPart: { value: 0 }, uTint: { value: new THREE.Color() } };
  const cloudFloor = new THREE.Mesh(
    new THREE.PlaneGeometry(600, 600),
    new THREE.ShaderMaterial({
      uniforms: floorU,
      side: THREE.DoubleSide,
      vertexShader: `varying vec3 vW; void main(){ vec4 w = modelMatrix * vec4(position, 1.0); vW = w.xyz; gl_Position = projectionMatrix * viewMatrix * w; }`,
      fragmentShader: /* glsl */ `
        uniform float uTime, uPart; uniform vec3 uTint; varying vec3 vW;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        void main(){
          vec2 p = vW.xz * 0.08 + vec2(uTime * 0.03, 0.0);
          float c = n(p) * 0.6 + n(p * 2.3) * 0.4;
          if (uPart > 0.0 && c < uPart * 1.2) discard;
          vec3 top = mix(vec3(0.72, 0.76, 0.88), vec3(1.0, 0.95, 0.92), c) * uTint;
          vec3 below = vec3(0.07, 0.08, 0.2) + c * 0.06;
          gl_FragColor = vec4(pow(gl_FrontFacing ? top : below, vec3(2.2)), 1.0);
        }`,
    }),
  );
  cloudFloor.rotation.x = -Math.PI / 2;
  cloudFloor.position.y = -5.2;
  scene.add(cloudFloor);

  // Old Silverback and her town.
  const old = buildWhale({ length: 64, back: "#3b3f7a", back2: "#5a5aa0", belly: "#b9c4dc", seed: 9 });
  scene.add(old.group);
  const young = buildWhale({ length: 44, back: "#3d8fbf", back2: "#7f8fb5", belly: "#e6ecf5", seed: 21 });
  scene.add(young.group);
  const far1 = buildWhale({ length: 40, back: "#262b5c", back2: "#3b3f7a", belly: "#7f8fb5", seed: 33 });
  const far2 = buildWhale({ length: 36, back: "#262b5c", back2: "#3b3f7a", belly: "#7f8fb5", seed: 44 });
  scene.add(far1.group, far2.group);

  const houseCount = 12;
  const houses = Array.from({ length: houseCount }, (_, i) => {
    const h = buildHouse(i);
    scene.add(h.group);
    reseed(300 + i);
    const ox = Math.round(64 * (0.36 + (i / houseCount) * 0.32)), oz = (i % 3 - 1) * 1.6;
    const yx = Math.round(44 * (0.34 + (i / houseCount) * 0.34)), yz = (i % 3 - 1) * 1.2;
    return { ...h, ox, oz, yx, yz, rot: (rnd() - 0.5) * 0.6, flicker: rnd() * 10 };
  });
  // A windmill on the town hall.
  const mill = new THREE.Group();
  const blades = voxels(Array.from({ length: 4 }, (_, k) => Array.from({ length: 5 }, (_, j) => [Math.round(Math.cos((k * Math.PI) / 2) * (j + 1)), Math.round(Math.sin((k * Math.PI) / 2) * (j + 1)), 0, j === 4 ? "#c4506b" : "#ffe9c2"] as [number, number, number, string])).flat(), true, undefined, V * 0.8);
  mill.add(blades);
  houses[5].group.add(mill);
  mill.position.set(0, 7 * V, 1.2 * V);

  // Trees for the island ending.
  reseed(500);
  const trees = Array.from({ length: 14 }, (_, i) => {
    const vox: [number, number, number, string][] = [];
    const h = 2 + Math.floor(rnd() * 3);
    for (let y = 0; y < h; y++) vox.push([0, y, 0, "#9a6a52"]);
    for (let x = -2; x <= 2; x++) for (let y = 0; y < 4; y++) for (let z = -2; z <= 2; z++) if (x * x + (y - 1.5) ** 2 + z * z < 5.5 && rnd() > 0.1) vox.push([x, h + y, z, y > 2 ? "#a8d46f" : rnd() > 0.5 ? "#5ba86a" : "#2f6b4f"]);
    const g = new THREE.Group();
    g.add(voxels(vox, true, undefined, V * 0.9));
    scene.add(g);
    return { g, x: Math.round(64 * (0.3 + (i / 14) * 0.45)), z: (rnd() - 0.5) * 3, delay: rnd() * 0.5 };
  });

  // Chimney smoke, lanterns, rain, lightning and the song.
  const smoke = voxels(Array.from({ length: 48 }, () => [0, 0, 0, "#e6ecf5"] as [number, number, number, string]), true, undefined, V * 0.8);
  scene.add(smoke);
  const lanterns = voxels(Array.from({ length: 48 }, (_, i) => [0, 0, 0, i % 3 ? "#ffd34d" : "#ff8a3d"] as [number, number, number, string]), false, undefined, V * 0.9);
  scene.add(lanterns);
  const rainGeo = new THREE.BufferGeometry(), rainPos = new Float32Array(900 * 6);
  rainGeo.setAttribute("position", new THREE.BufferAttribute(rainPos, 3));
  const rain = new THREE.LineSegments(rainGeo, new THREE.LineBasicMaterial({ color: "#b9c4dc", transparent: true, opacity: 0.8 }));
  rain.frustumCulled = false;
  scene.add(rain);
  const boltGeo = new THREE.BufferGeometry(), boltPos = new Float32Array(30 * 3);
  boltGeo.setAttribute("position", new THREE.BufferAttribute(boltPos, 3));
  const bolt = new THREE.Line(boltGeo, new THREE.LineBasicMaterial({ color: "#ffffff" }));
  bolt.frustumCulled = false;
  scene.add(bolt);
  const circle = new THREE.BufferGeometry().setFromPoints(Array.from({ length: 128 }, (_, i) => new THREE.Vector3(Math.cos((i / 128) * Math.PI * 2), Math.sin((i / 128) * Math.PI * 2), 0)));
  const rings = Array.from({ length: 10 }, (_, i) => {
    const m = new THREE.LineLoop(circle, new THREE.LineBasicMaterial({ color: i < 5 ? "#3ce0c4" : "#c9b8e8", transparent: true, fog: false }));
    m.frustumCulled = false;
    scene.add(m);
    return m;
  });

  // Post: render at a third of the resolution, then quantise to the palette.
  const target = new THREE.WebGLRenderTarget(4, 4, { type: THREE.HalfFloatType, minFilter: THREE.NearestFilter, magFilter: THREE.NearestFilter, depthTexture: new THREE.DepthTexture(4, 4) });
  const post = new THREE.ShaderMaterial(pixelShader);
  post.uniforms.tColor.value = target.texture;
  post.uniforms.tDepth.value = target.depthTexture;
  const quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), post);
  const postScene = new THREE.Scene();
  postScene.add(quad);
  const postCam = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);

  const posCurve = new THREE.CatmullRomCurve3(cameraKeys.map((k) => new THREE.Vector3(...k[1])), false, "centripetal");
  const lookCurve = new THREE.CatmullRomCurve3(cameraKeys.map((k) => new THREE.Vector3(...k[2])), false, "centripetal");
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  function cameraAt(p: number) {
    let k = 0;
    while (k < cameraKeys.length - 2 && p > cameraKeys[k + 1][0]) k++;
    const local = clamp01((p - cameraKeys[k][0]) / (cameraKeys[k + 1][0] - cameraKeys[k][0]));
    const u = (k + local) / (cameraKeys.length - 1);
    posCurve.getPoint(u, camPos);
    lookCurve.getPoint(u, camLook);
  }

  const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  const tmp = new THREE.Vector3(), tmp2 = new THREE.Vector3();
  const oldTop = (x: number, _t?: number) => {
    // A point on Silverback's back, in world space, riding her swim wave.
    tmp.set(x * V - old.centre, old.top(x) + waveAt(old.wave, x * V), 0);
    return old.group.localToWorld(tmp);
  };
  const youngTop = (x: number) => {
    tmp2.set(x * V - young.centre, young.top(x) + waveAt(young.wave, x * V), 0);
    return young.group.localToWorld(tmp2);
  };
  let strikeAt = -10, strikeSeed = 1;
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const state = { p: reduced ? 0.97 : 0 };
  let shown = -1;
  const q$ = <T extends Element = HTMLElement>(s: string) => stage.querySelector<T>(s);
  const dialogText = q$(".cw-say"), dialogName = q$(".cw-chapter-no"), cardNo = q$(".cw-card small"), cardTitle = q$(".cw-card b");
  const hudAlt = q$(".cw-hud-alt"), hudLit = q$(".cw-hud-lit"), hudWeather = q$(".cw-hud-weather"), hudAge = q$(".cw-hud-age");
  const segments = Array.from(stage.querySelectorAll<HTMLElement>(".cw-progress i"));

  function draw(time: number) {
    const s: CloudwhaleState = cloudwhaleState(state.p), p = s.p;
    skyU.uTime.value = seaU.uTime.value = time;
    for (const w of [old, young, far1, far2]) w.wave.uTime.value = time + (w === young ? 1.3 : w === far1 ? 2.1 : 0);
    // Old whale: cruises, rolls in the storm, dives, sings, then settles as an island.
    const stormRoll = Math.sin(time * 0.9) * 0.22 * s.storm;
    old.wave.uAmp.value = 0.55 * (1 - s.settle) + s.storm * 0.35;
    old.group.position.set(Math.sin(time * 0.15) * 0.6 * (1 - s.settle), Math.sin(time * 0.6) * 0.25 * (1 - s.settle) - s.dive * 17.5 - s.settle * 3.2 - Math.sin(s.storm * Math.PI) * 1.5, 0);
    old.group.rotation.set(stormRoll, -0.08 + s.dive * 0.15 - s.settle * 0.2, Math.sin(time * 0.3) * 0.03 + (s.dive > 0 && s.dive < 1 ? -Math.sin(s.dive * Math.PI) * 0.22 : 0) + s.song * 0.08 * (1 - s.settle));
    old.group.updateMatrixWorld();
    // Blink: the eye closes now and then during the close-up.
    old.eyeMesh.visible = Math.sin(time * 0.9) < 0.94;
    // Young whale arrives beside her and later carries the town toward the sunrise.
    young.group.visible = s.young > 0.001;
    young.wave.uAmp.value = 0.5;
    const yArrive = new THREE.Vector3(1.5, -15.2, -7.5);
    young.group.position.set(60 - (60 - yArrive.x) * s.young + s.depart * 26, -12 + (yArrive.y + 12) * s.young + Math.sin(time * 0.7) * 0.2 + s.depart * 7, -40 + (40 + yArrive.z) * s.young - s.depart * 26);
    young.group.rotation.set(0, -0.1 + s.depart * 0.7, Math.sin(time * 0.4) * 0.03 + s.depart * 0.12);
    young.group.updateMatrixWorld();
    // Distant whales answer the song.
    for (const [w, x, z, k] of [[far1, -46, -70, 0], [far2, 52, -85, 1]] as const) {
      w.group.visible = s.answer > 0.01 && s.depart < 0.95;
      w.wave.uAmp.value = 0.45;
      w.group.position.set(x, -18 + s.answer * 4 + Math.sin(time * 0.5 + k) * 0.4, z);
      w.group.rotation.y = k ? 2.6 : 0.4;
    }
    // Houses: riding the old whale, then one by one hopping across to the young one.
    let lit = 0;
    houses.forEach((h, i) => {
      const a = oldTop(h.ox, time).clone();
      a.z += h.oz;
      const k = smooth((s.transfer - (i / houseCount) * 0.75) / 0.25);
      let pos = a;
      if (k > 0) {
        const b = youngTop(h.yx).clone();
        b.z += h.yz;
        pos = a.lerp(b, k);
        pos.y += Math.sin(k * Math.PI) * 3.2;
      }
      h.group.position.copy(pos);
      h.group.rotation.set(old.group.rotation.x * (1 - k), h.rot + (k > 0 ? k * Math.PI * 2 : 0) * (k < 1 ? 1 : 0), old.group.rotation.z * (1 - k));
      // Windows flicker in the storm and glow brighter at night.
      const on = s.storm > 0.3 ? Math.sin(time * 9 + h.flicker * 3) > -0.2 : true;
      h.windows.color.setScalar(on ? 0.6 + s.night * 0.4 + (1 - s.night) * 0.2 : 0.15);
      if (on) lit++;
    });
    mill.rotation.z = time * (1.2 + s.storm * 6);
    // Trees grow where the houses stood.
    trees.forEach((tr) => {
      const g = smooth((s.grow - tr.delay * 0.6) / 0.4);
      tr.g.visible = g > 0.01;
      if (!tr.g.visible) return;
      tr.g.position.copy(oldTop(tr.x, time));
      tr.g.position.z += tr.z;
      tr.g.scale.setScalar(g);
    });
    // Chimney smoke drifts from the houses.
    for (let i = 0; i < 48; i++) {
      const h = houses[i % houseCount], life = (time * 0.35 + i * 0.137) % 1;
      pv.copy(h.chimney).applyMatrix4(h.group.matrixWorld);
      pv.x -= life * 2.2 + s.storm * life * 4;
      pv.y += life * 2.4;
      sv.setScalar(V * 0.8 * (0.6 + life) * (1 - s.dive) * (1 - s.transfer * 0.5));
      m4.compose(pv, q.identity(), sv);
      smoke.setMatrixAt(i, m4);
    }
    smoke.instanceMatrix.needsUpdate = true;
    // Lanterns: rise around the town in the song, stream between the whales in the move.
    const lanternsOn = Math.max(s.song * (1 - s.depart), s.transfer > 0 && s.transfer < 1 ? 1 : 0);
    for (let i = 0; i < 48; i++) {
      const ph = (i * 0.618) % 1, life = (time * 0.12 + ph) % 1;
      if (s.transfer > 0 && s.transfer < 1) {
        const a = oldTop(Math.round(64 * (0.35 + ph * 0.35)), time).clone(), b = youngTop(Math.round(44 * (0.35 + ph * 0.35)));
        pv.copy(a.lerp(b, life));
        pv.y += Math.sin(life * Math.PI) * 4 + 1;
      } else {
        pv.copy(oldTop(Math.round(64 * (0.3 + ph * 0.45)), time));
        pv.y += 0.5 + life * 7;
        pv.x += Math.sin(life * 6 + i) * 1.5;
        pv.z += Math.cos(i * 2.4) * 3;
      }
      sv.setScalar(V * 0.9 * lanternsOn * Math.sin(Math.min(1, life * 1.2) * Math.PI) ** 0.3);
      m4.compose(pv, q.identity(), sv);
      lanterns.setMatrixAt(i, m4);
    }
    lanterns.instanceMatrix.needsUpdate = true;
    // Cloud sea: drifts, darkens in the storm, parts above the sea for the song.
    const arr = clouds.mesh.instanceMatrix.array as Float32Array;
    const drift = time * 0.4, part = s.part;
    floorU.uTime.value = time;
    floorU.uPart.value = part;
    floorU.uTint.value.copy(cloudMat.color);
    for (let i = 0; i < clouds.mesh.count; i++) {
      const o = i * 16;
      let x = cloudBase[o + 12] + drift;
      x = ((x + 90) % 180 + 180) % 180 - 90;
      const z = cloudBase[o + 14], r = Math.hypot(x, z + 10), open = clamp01(part * 1.6 - r / 200);
      const sc = V * (1 - open);
      arr[o] = arr[o + 5] = arr[o + 10] = sc;
      arr[o + 12] = x;
      arr[o + 13] = cloudBase[o + 13] + open * 6;
    }
    clouds.mesh.instanceMatrix.needsUpdate = true;
    cloudMat.emissive.setRGB(0.3, 0.3, 0.4).multiplyScalar(1 - s.storm * 0.6 - s.night * 0.7);
    cloudMat.color.setRGB(1, 1, 1).lerp(new THREE.Color(0.5, 0.52, 0.62), s.storm).lerp(new THREE.Color(0.28, 0.3, 0.48), s.night * 0.9);
    // Rain and lightning.
    rain.visible = s.storm > 0.05;
    if (rain.visible) {
      for (let i = 0; i < 900; i++) {
        const x = ((i * 37.7) % 60) - 30 + camLook.x, z = ((i * 13.3) % 40) - 20, fall = (time * 22 + i * 3.31) % 30;
        const y = camLook.y + 15 - fall;
        rainPos.set([x, y, z, x - 0.35, y - 1.1, z], i * 6);
      }
      rainGeo.attributes.position.needsUpdate = true;
      (rain.material as THREE.LineBasicMaterial).opacity = s.storm;
    }
    if (s.storm > 0.5 && time - strikeAt > 1.4 + Math.sin(strikeSeed) * 0.6) {
      strikeAt = time;
      strikeSeed += 1.7;
      let x = (Math.sin(strikeSeed * 3.1) * 0.5) * 40, y = 30, z = -30 - Math.abs(Math.cos(strikeSeed)) * 30;
      for (let k = 0; k < 30; k++) {
        boltPos.set([x, y, z], k * 3);
        x += (Math.sin(strikeSeed * 7 + k * 2.3)) * 2.2;
        y -= 1.4;
      }
      boltGeo.attributes.position.needsUpdate = true;
    }
    const flash = Math.max(0, 1 - (time - strikeAt) / 0.18) * s.storm;
    bolt.visible = flash > 0.2;
    skyU.uFlash.value = flash * 0.6;
    // Song rings ripple from her head; distant whales answer in lilac.
    rings.forEach((m, i) => {
      const answer = i >= 5, k = i % 5, life = (time * 0.32 + k / 5) % 1;
      const strength = answer ? s.answer * (1 - s.young) : s.song * (1 - s.young);
      m.visible = strength > 0.02;
      if (!m.visible) return;
      const src = answer ? (k % 2 ? far2 : far1).group.position : oldTop(56, time);
      m.position.copy(src);
      m.rotation.set(Math.PI / 2, 0, 0);
      m.scale.setScalar(1 + life * (answer ? 40 : 26));
      (m.material as THREE.LineBasicMaterial).opacity = (1 - life) * strength;
    });
    // Light and air.
    skyU.uNight.value = s.night;
    skyU.uStorm.value = s.storm;
    skyU.uAurora.value = s.aurora;
    skyU.uDawn.value = s.dawn;
    seaU.uNight.value = s.night;
    seaU.uDawn.value = s.dawn;
    skyU.uSun.value.set(0.75, 0.12 - s.dawn * 0.06, -0.65 + s.dawn * 0.2);
    fogColor.setRGB(1, 0.72, 0.56).lerp(new THREE.Color(0.38, 0.4, 0.5), s.storm).lerp(new THREE.Color(0.06, 0.08, 0.2), s.night);
    scene.fog!.color.copy(fogColor);
    hemi.intensity = 1.3 - s.night * 0.7 - s.storm * 0.4;
    sun.intensity = (2.2 - s.storm * 1.6) * (1 - s.night * 0.8) + flash * 3;
    sun.color.setRGB(1, 0.85, 0.7).lerp(new THREE.Color(0.6, 0.7, 1), s.night);
    // Camera, with a gentle handheld drift and the reader's pointer.
    cameraAt(p);
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    camPos.x += pointer.x * 1.2 + Math.sin(time * 0.3) * 0.25 + Math.sin(time * 37) * flash * 0.3;
    camPos.y += -pointer.y * 0.6 + Math.sin(time * 0.4) * 0.15;
    camera.position.copy(camPos);
    camera.lookAt(camLook);
    sky.position.copy(camera.position);
    renderer.setRenderTarget(target);
    renderer.render(scene, camera);
    renderer.setRenderTarget(null);
    renderer.render(postScene, postCam);
    // HUD and narration.
    if (hudAlt) hudAlt.textContent = String(Math.max(0, Math.round(2400 - s.storm * 300 - s.dive * 2100 - s.settle * 30))).padStart(4, "0");
    if (hudLit) hudLit.textContent = `${String(lit).padStart(2, "0")}/12`;
    if (hudAge) hudAge.textContent = s.depart > 0.5 ? "006" : "212";
    if (hudWeather) hudWeather.textContent = s.storm > 0.4 ? "STORM" : s.aurora > 0.4 ? "AURORA" : s.night > 0.5 ? "NIGHT" : s.dawn > 0.5 ? "DAWN" : "CLEAR";
    if (s.chapter !== shown) {
      shown = s.chapter;
      const [no, title] = cloudwhaleChapters[s.chapter];
      if (cardNo) cardNo.textContent = `CHAPTER ${no}`;
      if (cardTitle) cardTitle.textContent = title;
      if (dialogName) dialogName.textContent = `${no}`;
      segments.forEach((el, i) => el.classList.toggle("is-on", i <= s.chapter));
    }
    // Scroll-scrubbed typewriter: the line types itself as you move through the chapter.
    if (dialogText) {
      const line = cloudwhaleChapters[s.chapter][2], start = cloudwhaleBeats[s.chapter], end = cloudwhaleBeats[s.chapter + 1] ?? 1.02;
      const k = clamp01((p - start - 0.004) / ((end - start) * 0.5));
      const n = Math.round(line.length * k);
      dialogText.textContent = line.slice(0, n);
      dialogText.classList.toggle("is-typing", n < line.length);
    }
    host!.dataset.scrollProgress = p.toFixed(3);
    host!.dataset.storyBeat = String(s.chapter + 1);
  }

  function resize() {
    const w = Math.max(1, host!.clientWidth), h = Math.max(1, host!.clientHeight);
    const bw = Math.ceil(w / PX), bh = Math.ceil(h / PX);
    renderer.setSize(bw, bh, false);
    target.setSize(bw, bh);
    post.uniforms.uRes.value.set(bw, bh);
    camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 48 : 34;
    camera.updateProjectionMatrix();
    draw(performance.now() / 1000);
  }
  resize();

  let timeline: gsap.core.Timeline | undefined;
  if (!reduced) {
    timeline = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: ".cw-journey", start: "top top", end: "bottom bottom", scrub: 1.2 } });
    timeline.to(state, { p: 1, duration: 1 }, 0);
    timeline.to(".cw-title", { autoAlpha: 0, y: -40, duration: 0.035, ease: "power1.in" }, 0.015);
    timeline.fromTo(".cw-dialog", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.015, ease: "steps(4)" }, 0.03);
    cloudwhaleBeats.forEach((b, i) => {
      // Chapter cards drop in with stepped, sprite-like easing.
      timeline!.fromTo(".cw-card", { autoAlpha: 0, x: -40 }, { autoAlpha: 1, x: 0, duration: 0.012, ease: "steps(5)", immediateRender: false }, b + (i ? 0.004 : 0.04));
      timeline!.to(".cw-card", { autoAlpha: 0, x: 40, duration: 0.01, ease: "steps(4)" }, (cloudwhaleBeats[i + 1] ?? 1.05) - 0.03);
    });
    gsap.from(".cw-title .cw-l", { yPercent: 120, autoAlpha: 0, duration: 0.6, stagger: 0.05, ease: "steps(6)", delay: 0.3 });
    gsap.from(".cw-nav, .cw-hud", { autoAlpha: 0, y: -16, duration: 0.6, ease: "steps(6)", delay: 0.2 });
    gsap.utils.toArray<HTMLElement>(".cw-log article").forEach((el, i) =>
      gsap.from(el, { autoAlpha: 0, y: 40, duration: 0.7, ease: "steps(7)", delay: (i % 3) * 0.08, scrollTrigger: { trigger: el, start: "top 90%" } }),
    );
  }
  const onPointer = (e: PointerEvent) => {
    pointer.tx = (e.clientX / innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / innerHeight - 0.5) * 2;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });
  let frame = 0, visible = true;
  const observer = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) schedule();
  });
  observer.observe(host);
  const tick = (t: number) => {
    frame = 0;
    if (!visible || document.hidden) return;
    draw(t / 1000);
    schedule();
  };
  function schedule() {
    if (!frame && visible && !document.hidden && !reduced) frame = requestAnimationFrame(tick);
  }
  const onVis = () => (document.hidden ? (cancelAnimationFrame(frame), (frame = 0)) : schedule());
  document.addEventListener("visibilitychange", onVis);
  window.addEventListener("resize", resize);
  schedule();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    timeline?.scrollTrigger?.kill();
    timeline?.kill();
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVis);
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      (Array.isArray(m.material) ? m.material : m.material ? [m.material] : []).forEach((x) => x.dispose());
    });
    target.depthTexture?.dispose();
    target.dispose();
    post.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
