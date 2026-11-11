import * as THREE from "three";
import gsap from "gsap";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { buildBrokenBowl, innerAt } from "./goldseam-geometry";
import { goldseamBeats, goldseamChapters, goldseamState, smooth, clamp01 } from "./goldseam-story";

const V = (x: number, y: number, z: number) => new THREE.Vector3(x, y, z);
const PLINTH_TOP = 1.6;
/** Bowl-space centre: shards orbit and rest around this point, not the foot. */
const BOWL_CENTRE = V(0, 0.43, 0);
const REST = V(0, PLINTH_TOP + BOWL_CENTRE.y, 0);
const HOVER = V(0, PLINTH_TOP + 0.75, 0);
const EDGE = V(1.3, REST.y + 0.02, 0.82);
const IMPACT = V(2.35, 0.95, 2.45);

function canvasTexture(w: number, h: number, paint: (g: CanvasRenderingContext2D) => void, color = true) {
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  paint(canvas.getContext("2d")!);
  const texture = new THREE.CanvasTexture(canvas);
  if (color) texture.colorSpace = THREE.SRGBColorSpace;
  texture.wrapS = THREE.RepeatWrapping;
  texture.anisotropy = 4;
  return texture;
}
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

/** Shino-style glaze: cream with pinholes, iron speckle, a warm blush and drips at the lip. */
function glaze(inner: boolean) {
  seed = inner ? 91 : 7;
  return canvasTexture(1024, 512, (g) => {
    // v = 0 (foot centre) is the canvas bottom; flipY maps uv.y = 1 to the top row.
    const grad = g.createLinearGradient(0, 512, 0, 0);
    if (inner) {
      grad.addColorStop(0, "#c9c2ad");
      grad.addColorStop(0.3, "#e3dccb");
      grad.addColorStop(0.85, "#ece6d8");
      grad.addColorStop(1, "#d8a679");
    } else {
      grad.addColorStop(0, "#9c7656");
      grad.addColorStop(0.2, "#a98262");
      grad.addColorStop(0.235, "#e6dccb");
      grad.addColorStop(0.75, "#efe8db");
      grad.addColorStop(0.93, "#e4c7a6");
      grad.addColorStop(1, "#c98b5c");
    }
    g.fillStyle = grad;
    g.fillRect(0, 0, 1024, 512);
    // Soft crawl patches where the glaze pulled thin.
    for (let i = 0; i < 70; i++) {
      const x = rnd() * 1024, y = 40 + rnd() * 330, r = 10 + rnd() * 40;
      const blot = g.createRadialGradient(x, y, 0, x, y, r);
      blot.addColorStop(0, `rgba(${inner ? "226,214,192" : "236,220,196"},${0.12 + rnd() * 0.16})`);
      blot.addColorStop(1, "rgba(0,0,0,0)");
      g.fillStyle = blot;
      g.fillRect(x - r, y - r, r * 2, r * 2);
    }
    // Iron speckle and pinholes.
    for (let i = 0; i < 2600; i++) {
      const x = rnd() * 1024, y = rnd() * (inner ? 512 : 395);
      g.fillStyle = rnd() > 0.55 ? `rgba(92,55,32,${0.25 + rnd() * 0.5})` : `rgba(255,252,244,${0.3 + rnd() * 0.5})`;
      g.beginPath();
      g.arc(x, y, rnd() * 1.6 + 0.3, 0, 7);
      g.fill();
    }
    if (!inner) {
      // Glaze runs from the lip.
      for (let i = 0; i < 46; i++) {
        const x = rnd() * 1024, len = 20 + rnd() * 70, w = 4 + rnd() * 9;
        const drip = g.createLinearGradient(0, 0, 0, len);
        drip.addColorStop(0, "rgba(196,128,82,.75)");
        drip.addColorStop(1, "rgba(220,170,128,0)");
        g.fillStyle = drip;
        g.beginPath();
        g.ellipse(x, len * 0.45, w, len * 0.55, 0, 0, 7);
        g.fill();
      }
      // Unglazed clay grain below the glaze line.
      for (let i = 0; i < 1600; i++) {
        g.fillStyle = `rgba(${rnd() > 0.5 ? "60,36,20" : "214,178,140"},${0.2 + rnd() * 0.3})`;
        g.fillRect(rnd() * 1024, 400 + rnd() * 112, 1.4, 1.4);
      }
    } else {
      // Forty-one years of tea leave a faint tannin line inside.
      g.strokeStyle = "rgba(150,104,62,.28)";
      g.lineWidth = 5;
      g.beginPath();
      g.moveTo(0, 512 - 0.6 * 512);
      g.lineTo(1024, 512 - 0.6 * 512);
      g.stroke();
      const pool = g.createLinearGradient(0, 512, 0, 300);
      pool.addColorStop(0, "rgba(146,150,120,.45)");
      pool.addColorStop(1, "rgba(146,150,120,0)");
      g.fillStyle = pool;
      g.fillRect(0, 300, 1024, 212);
    }
  });
}
function glazeRoughness(inner: boolean) {
  seed = 3;
  return canvasTexture(256, 128, (g) => {
    g.fillStyle = "rgb(70,70,70)";
    g.fillRect(0, 0, 256, 128);
    if (!inner) {
      g.fillStyle = "rgb(235,235,235)";
      g.fillRect(0, 128 - 0.22 * 128, 256, 0.22 * 128);
    }
    for (let i = 0; i < 400; i++) {
      const v = Math.round(110 + rnd() * 80);
      g.fillStyle = `rgb(${v},${v},${v})`;
      g.fillRect(rnd() * 256, rnd() * 128, 2, 2);
    }
  }, false);
}
function clayTexture() {
  seed = 19;
  return canvasTexture(256, 64, (g) => {
    g.fillStyle = "#c79c76";
    g.fillRect(0, 0, 256, 64);
    for (let i = 0; i < 900; i++) {
      g.fillStyle = `rgba(${rnd() > 0.5 ? "120,74,44" : "232,204,170"},${0.3 + rnd() * 0.4})`;
      g.fillRect(rnd() * 256, rnd() * 64, 1.5, 1.5);
    }
    // A thin glaze skin on both faces of the break.
    g.fillStyle = "#efe6d6";
    g.fillRect(0, 0, 256, 5);
    g.fillRect(0, 59, 256, 5);
  });
}
/** Whisked matcha: deep green with a pale, uneven froth. */
function matchaTexture() {
  seed = 37;
  return canvasTexture(256, 256, (g) => {
    const base = g.createRadialGradient(128, 128, 10, 128, 128, 128);
    base.addColorStop(0, "#86a346");
    base.addColorStop(0.75, "#6c8a33");
    base.addColorStop(1, "#4f6726");
    g.fillStyle = base;
    g.fillRect(0, 0, 256, 256);
    for (let i = 0; i < 900; i++) {
      const a = rnd() * 6.283, r = Math.sqrt(rnd()) * 110;
      g.fillStyle = `rgba(${rnd() > 0.4 ? "214,226,160" : "120,146,62"},${0.18 + rnd() * 0.35})`;
      g.beginPath();
      g.arc(128 + Math.cos(a) * r, 128 + Math.sin(a) * r, 0.6 + rnd() * 2.2, 0, 7);
      g.fill();
    }
  });
}
function softDot(core: string) {
  return canvasTexture(64, 64, (g) => {
    const r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
    r.addColorStop(0, core);
    r.addColorStop(0.35, core.replace(/[\d.]+\)$/, ".45)"));
    r.addColorStop(1, "rgba(0,0,0,0)");
    g.fillStyle = r;
    g.fillRect(0, 0, 64, 64);
  });
}

// Camera path, authored per chapter beat: position, look-at.
type Key = [number, [number, number, number], [number, number, number]];
const cameraKeys: Key[] = [
  [0.0, [0.3, 5.3, 7.2], [-1.3, 2.0, 0]],
  [0.1, [1.6, 4.6, 6.5], [-0.95, 1.95, 0.2]],
  [0.165, [3.6, 3.1, 7.4], [0.2, 1.75, 0.7]],
  [0.2, [5.4, 1.8, 8.2], [1.3, 1.05, 2.0]],
  [0.262, [6.6, 3.4, 9.8], [1.0, 1.2, 2.0]],
  [0.33, [-0.35, 10.0, 6.0], [-0.45, 0, 3.15]],
  [0.4, [-0.4, 9.7, 5.8], [-0.5, 0, 3.1]],
  [0.48, [-2.6, 4.2, 7.8], [-0.6, 1.9, 0.8]],
  [0.56, [0.4, 3.5, 6.4], [-0.7, 2.3, 0]],
  [0.66, [-1.6, 3.6, 5.4], [-0.75, 2.3, 0]],
  [0.76, [2.3, 4.6, 7.6], [0.0, 3.45, 0]],
  [0.84, [0.0, 8.4, 4.9], [0.0, 3.3, 0.5]],
  [0.92, [-0.2, 5.2, 6.6], [-1.0, 2.0, 0]],
  [1.0, [0.3, 5.3, 7.2], [-1.3, 2.0, 0]],
];

export function animateGoldseam(reduced: boolean, mobile: boolean) {
  const host = document.querySelector<HTMLElement>(".gs-world");
  const stage = document.querySelector<HTMLElement>(".gs-stage");
  if (!host || !stage) return;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: "high-performance" });
  } catch {
    stage.classList.add("is-fallback");
    document.querySelector<HTMLElement>(".gs-journey")?.style.setProperty("height", "100svh");
    return;
  }
  host.append(renderer.domElement);
  host.classList.add("has-webgl");
  renderer.setPixelRatio(Math.min(devicePixelRatio, mobile ? 1.5 : 1.75));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;

  const scene = new THREE.Scene();
  const background = new THREE.Color();
  scene.background = background;
  const pmrem = new THREE.PMREMGenerator(renderer);
  const room = new RoomEnvironment();
  const envTarget = pmrem.fromScene(room, 0.035);
  scene.environment = envTarget.texture;
  const camera = new THREE.PerspectiveCamera(30, 1, 0.1, 80);

  const hemi = new THREE.HemisphereLight(0xfff4e2, 0x8a7a66, 1.1);
  scene.add(hemi);
  const key = new THREE.DirectionalLight(0xffe2bd, 2.6);
  key.position.set(4.5, 8, 5);
  key.castShadow = true;
  key.shadow.mapSize.set(2048, 2048);
  key.shadow.bias = -0.0004;
  key.shadow.normalBias = 0.02;
  key.shadow.radius = 6;
  Object.assign(key.shadow.camera, { left: -6, right: 6, top: 6, bottom: -6, near: 1, far: 22 });
  scene.add(key, key.target);
  const rim = new THREE.DirectionalLight(0xdfe3f2, 1.2);
  rim.position.set(-5, 4, -6);
  scene.add(rim);
  const glint = new THREE.PointLight(0xffd79a, 0, 6, 1.8);
  scene.add(glint);

  // A seamless studio floor that only shows shadows, and a pool of lamplight for night.
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(60, 60), new THREE.ShadowMaterial({ opacity: 0.2 }));
  floor.rotation.x = -Math.PI / 2;
  floor.receiveShadow = true;
  scene.add(floor);
  const poolTexture = softDot("rgba(255,214,150,1)");
  const pool = new THREE.Mesh(
    new THREE.PlaneGeometry(9, 9),
    new THREE.MeshBasicMaterial({ map: poolTexture, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending }),
  );
  pool.rotation.x = -Math.PI / 2;
  pool.position.set(0.6, 0.003, 1.2);
  scene.add(pool);

  // Travertine plinth.
  const plinthMat = new THREE.MeshStandardMaterial({ color: 0x2f2b27, roughness: 0.78, envMapIntensity: 0.3 });
  const plinth = new THREE.Group();
  const column = new THREE.Mesh(new THREE.CylinderGeometry(1.25, 1.32, PLINTH_TOP - 0.06, 96), plinthMat);
  column.position.y = (PLINTH_TOP - 0.06) / 2;
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(1.34, 1.34, 0.06, 96), plinthMat);
  cap.position.y = PLINTH_TOP - 0.03;
  for (const m of [column, cap]) {
    m.castShadow = true;
    m.receiveShadow = true;
    plinth.add(m);
  }
  scene.add(plinth);

  // The bowl.
  const { shards, seams } = buildBrokenBowl();
  const outerMat = new THREE.MeshPhysicalMaterial({ map: glaze(false), roughnessMap: glazeRoughness(false), roughness: 1, clearcoat: 0.55, clearcoatRoughness: 0.28, sheen: 0.2, sheenColor: new THREE.Color(0xffefdc) });
  const innerMat = new THREE.MeshPhysicalMaterial({ map: glaze(true), roughnessMap: glazeRoughness(true), roughness: 1, clearcoat: 0.6, clearcoatRoughness: 0.2 });
  const clayMat = new THREE.MeshStandardMaterial({ map: clayTexture(), roughness: 0.95 });
  const totalArea = shards.reduce((sum, s) => sum + s.area, 0);
  const N = shards.length;
  // Foot first, then body, then rim: the order a restorer rebuilds a bowl.
  const order = shards.map((_, i) => i).sort((a, b) => shards[a].band - shards[b].band || a - b);
  const up = V(0, 1, 0);
  seed = 29;
  const pieces = shards.map((s, i) => {
    const mesh = new THREE.Mesh(s.geometry, [outerMat, innerMat, clayMat]);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    const local = s.home.clone().sub(BOWL_CENTRE);
    // Burst outward from the impact, then hang in the air: slow motion.
    const outward = s.normal.clone().setY(0).normalize().add(V(rnd() - 0.5, 0, rnd() - 0.5).multiplyScalar(0.9)).normalize();
    const burst = outward.multiplyScalar(0.9 + rnd() * 1.6).add(V(0, 0.15 + rnd() * 1.3, 0));
    const spin = new THREE.Quaternion().setFromAxisAngle(V(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize(), 0.8 + rnd() * 2.2);
    // Catalogue table, outer glaze facing up: five columns, or three on a phone.
    const cols = mobile ? 3 : 5, slot = order.indexOf(i), col = slot % cols, row = Math.floor(slot / cols);
    const gridPos = mobile
      ? V((col - 1) * 0.84 - 0.45 + (row % 2) * 0.12, s.restLift + 0.004, 1.95 + row * 0.78)
      : V((col - 2) * 0.98 + 0.55 + (row % 2) * 0.2, s.restLift + 0.004, 2.0 + row * 0.86);
    const gridQuat = new THREE.Quaternion().setFromAxisAngle(up, (rnd() - 0.5) * 0.7).multiply(new THREE.Quaternion().setFromUnitVectors(s.normal, up));
    const grams = (s.area / totalArea) * 312;
    return { mesh, local, burst, spin, gridPos, gridQuat, slot, grams, bob: rnd() * 6.28 };
  });

  // Seams: urushi first, then gold. Each tube grows along its own fracture.
  const seamMat = new THREE.MeshPhysicalMaterial({ color: 0x2b130c, metalness: 0.1, roughness: 0.5, clearcoat: 0.6, emissive: 0x000000 });
  const seamGroup = new THREE.Group();
  scene.add(seamGroup);
  const seamMeshes = seams.map((seam) => {
    const segments = Math.max(6, Math.round(seam.length * 70));
    const tube = new THREE.TubeGeometry(seam.curve, segments, seam.outer ? 0.0105 : 0.009, 6, false);
    const mesh = new THREE.Mesh(tube, seamMat);
    mesh.position.copy(BOWL_CENTRE).negate();
    mesh.castShadow = false;
    seamGroup.add(mesh);
    return { mesh, total: tube.index!.count, step: 6 * 6 };
  });
  const goldLength = seams.filter((s) => s.outer).reduce((sum, s) => sum + s.length, 0) * 6;

  // Gold dust: a cloud that streams into the seams.
  const DUST = mobile ? 900 : 1600;
  const dustTargets = new Float32Array(DUST * 3),
    dustStart = new Float32Array(DUST * 3),
    dustDelay = new Float32Array(DUST);
  const outerSeams = seams.filter((s) => s.outer);
  const tmp = new THREE.Vector3();
  seed = 53;
  for (let i = 0; i < DUST; i++) {
    let pick = rnd() * outerSeams.reduce((sum, s) => sum + s.length, 0);
    let seam = outerSeams[0];
    for (const s of outerSeams) {
      if (pick < s.length) { seam = s; break; }
      pick -= s.length;
    }
    seam.curve.getPointAt(rnd(), tmp).sub(BOWL_CENTRE);
    tmp.toArray(dustTargets, i * 3);
    const a = rnd() * Math.PI * 2, r = 0.8 + rnd() * 1.5;
    dustStart.set([Math.cos(a) * r, 0.5 + rnd() * 1.9, Math.sin(a) * r], i * 3);
    dustDelay[i] = rnd();
  }
  const dustGeo = new THREE.BufferGeometry();
  const dustPos = new Float32Array(DUST * 3);
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dustPos, 3));
  const dustMat = new THREE.PointsMaterial({ size: 0.05, map: softDot("rgba(255,214,120,1)"), color: 0xffd38a, transparent: true, opacity: 0, depthWrite: false, blending: THREE.AdditiveBlending, sizeAttenuation: true });
  const dust = new THREE.Points(dustGeo, dustMat);
  dust.frustumCulled = false;
  scene.add(dust);

  // Clay chips thrown by the impact.
  const CHIPS = 140;
  const chipDir = new Float32Array(CHIPS * 3);
  seed = 61;
  for (let i = 0; i < CHIPS; i++) chipDir.set([(rnd() - 0.5) * 3.4, rnd() * 1.6, (rnd() - 0.5) * 3.4], i * 3);
  const chipGeo = new THREE.BufferGeometry();
  const chipPos = new Float32Array(CHIPS * 3);
  chipGeo.setAttribute("position", new THREE.BufferAttribute(chipPos, 3));
  const chipMat = new THREE.PointsMaterial({ size: 0.028, color: 0xeee4d2, transparent: true, opacity: 0, depthWrite: false });
  const chips = new THREE.Points(chipGeo, chipMat);
  chips.frustumCulled = false;
  scene.add(chips);

  // Motes drifting through the morning light.
  const MOTES = 260;
  const moteGeo = new THREE.BufferGeometry();
  const moteBase = new Float32Array(MOTES * 3);
  seed = 71;
  for (let i = 0; i < MOTES; i++) moteBase.set([(rnd() - 0.5) * 9, rnd() * 5, (rnd() - 0.5) * 7], i * 3);
  const motePos = new Float32Array(moteBase);
  moteGeo.setAttribute("position", new THREE.BufferAttribute(motePos, 3));
  const moteMat = new THREE.PointsMaterial({ size: 0.022, map: softDot("rgba(255,244,222,1)"), transparent: true, opacity: 0.5, depthWrite: false });
  const motes = new THREE.Points(moteGeo, moteMat);
  motes.frustumCulled = false;
  scene.add(motes);

  // Tea and steam.
  const teaMat = new THREE.MeshPhysicalMaterial({ map: matchaTexture(), roughness: 0.55, clearcoat: 0.4, clearcoatRoughness: 0.3 });
  const tea = new THREE.Mesh(new THREE.CircleGeometry(1, 72), teaMat);
  tea.rotation.x = -Math.PI / 2;
  const teaHolder = new THREE.Group();
  teaHolder.add(tea);
  scene.add(teaHolder);
  const steamTexture = softDot("rgba(255,255,255,1)");
  const steam = Array.from({ length: 7 }, (_, i) => {
    const sprite = new THREE.Sprite(new THREE.SpriteMaterial({ map: steamTexture, transparent: true, opacity: 0, depthWrite: false, color: 0xffffff }));
    scene.add(sprite);
    return { sprite, offset: i / 7 };
  });

  // Post: bloom only matters once the room is dark and the gold is lit.
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(512, 512), 0.0, 0.5, 0.9);
  composer.addPass(bloom);
  composer.addPass(new OutputPass());

  const posCurve = new THREE.CatmullRomCurve3(cameraKeys.map((k) => V(...k[1])), false, "centripetal");
  const lookCurve = new THREE.CatmullRomCurve3(cameraKeys.map((k) => V(...k[2])), false, "centripetal");
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  function cameraAt(p: number) {
    let k = 0;
    while (k < cameraKeys.length - 2 && p > cameraKeys[k + 1][0]) k++;
    const local = clamp01((p - cameraKeys[k][0]) / (cameraKeys[k + 1][0] - cameraKeys[k][0]));
    const u = (k + local) / (cameraKeys.length - 1);
    posCurve.getPoint(u, camPos);
    lookCurve.getPoint(u, camLook);
  }

  // Bowl root pose through the story.
  const rootPos = new THREE.Vector3(), rootQuat = new THREE.Quaternion(), euler = new THREE.Euler();
  const impactQuat = new THREE.Quaternion().setFromEuler(new THREE.Euler(0.35, 0.9, -1.45));
  function bowlRoot(s: ReturnType<typeof goldseamState>, time: number) {
    if (s.drop <= 0) {
      const w = s.wobble;
      rootPos.lerpVectors(REST, EDGE, w * w);
      const shake = Math.sin(w * 22) * 0.09 * w * (1 - w);
      euler.set(shake * 0.6, s.p * 1.6 + w * 0.5, shake - w * w * 0.55);
      rootQuat.setFromEuler(euler);
    } else if (s.drop < 1) {
      const d = s.drop;
      // Momentum carries it clear of the plinth first; gravity takes over after.
      rootPos.lerpVectors(EDGE, IMPACT, 1 - (1 - d) * (1 - d));
      rootPos.y = EDGE.y + 0.18 * d - (EDGE.y + 0.18 - IMPACT.y) * d * d;
      rootQuat.setFromEuler(euler.set(0, 0.165 * 1.6 + 0.5, -0.55)).slerp(impactQuat, d);
    } else {
      rootPos.copy(IMPACT);
      rootQuat.copy(impactQuat);
    }
    if (s.mend > 0) {
      rootPos.copy(HOVER).lerp(REST, s.settle);
      rootPos.y += Math.sin(time * 0.9) * 0.02 * (1 - s.settle);
      const yaw = -0.4 + s.mend * 0.6 + s.turn * Math.PI * 1.3 + s.settle * 0.3;
      const tilt = Math.sin(s.turn * Math.PI) * 0.32;
      rootQuat.setFromEuler(euler.set(tilt, yaw, 0));
    }
  }

  const homePos = new THREE.Vector3(), homeQuat = new THREE.Quaternion();
  const a = new THREE.Vector3(), b = new THREE.Vector3(), qa = new THREE.Quaternion(), qb = new THREE.Quaternion();
  const scatteredPos = (piece: (typeof pieces)[number], out: THREE.Vector3) =>
    out.copy(piece.local).applyQuaternion(impactQuat).add(IMPACT).add(piece.burst);
  const scatteredQuat = (piece: (typeof pieces)[number], out: THREE.Quaternion) => out.copy(piece.spin).multiply(impactQuat);

  // Overlay elements.
  const q = <T extends Element = HTMLElement>(sel: string) => stage.querySelector<T>(sel);
  const labels = Array.from(stage.querySelectorAll<HTMLElement>(".gs-label"));
  labels.forEach((el, i) => {
    const piece = pieces.find((p) => p.slot === i)!;
    const shard = shards[pieces.indexOf(piece)];
    el.querySelector("b")!.textContent = `${shard.label} · ${piece.grams.toFixed(1)} g`;
  });
  const dayEl = q(".gs-day b"), steps = Array.from(stage.querySelectorAll<HTMLElement>(".gs-steps li"));
  const meterValue = q(".gs-meter b"), meterBar = q<HTMLElement>(".gs-meter i");
  const meterTotal = q(".gs-meter small");
  if (meterTotal) meterTotal.textContent = `OF ${goldLength.toFixed(1)} CM`;
  const hudLabel = q(".gs-hud-chapter"), hudCount = q(".gs-hud-count");
  const dots = Array.from(stage.querySelectorAll<HTMLElement>(".gs-dots i"));
  const paper = new THREE.Color("#ebe3d5"), night = new THREE.Color("#16130f"), deepest = new THREE.Color("#0a0908"), morning = new THREE.Color("#efe5d3");
  const inkLight = new THREE.Color("#1f1b16"), inkDark = new THREE.Color("#efe6d6");
  const urushi = new THREE.Color(0x2b130c), gold = new THREE.Color(0xe0b25c), seamEmissive = new THREE.Color(0x9a6512);
  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  let shownChapter = -1;
  const state = { p: reduced ? 0.975 : 0 };

  function draw(time = 0) {
    const s = goldseamState(state.p), p = s.p;
    bowlRoot(s, time);
    // Pieces.
    pieces.forEach((piece) => {
      const { mesh } = piece;
      homePos.copy(piece.local).applyQuaternion(rootQuat).add(rootPos);
      homeQuat.copy(rootQuat);
      if (s.drop < 1 || s.mend >= 1) {
        mesh.position.copy(homePos);
        mesh.quaternion.copy(homeQuat);
        return;
      }
      if (s.gather <= 0) {
        const e = 1 - Math.pow(1 - s.shatter, 3.2);
        a.copy(piece.local).applyQuaternion(impactQuat).add(IMPACT);
        scatteredPos(piece, b);
        mesh.position.lerpVectors(a, b, e);
        // Gravity bends the burst a little, then slow motion hangs it in the air.
        mesh.position.y += Math.sin(e * Math.PI) * 0.25 + Math.sin(time * 0.8 + piece.bob) * 0.025 * e;
        qa.copy(impactQuat);
        scatteredQuat(piece, qb);
        mesh.quaternion.slerpQuaternions(qa, qb, e);
        return;
      }
      if (s.mend <= 0) {
        const g = smooth(s.gather * 1.5 - (piece.slot / N) * 0.5);
        scatteredPos(piece, a);
        a.y += Math.sin(time * 0.8 + piece.bob) * 0.025 * (1 - g);
        mesh.position.lerpVectors(a, piece.gridPos, g);
        mesh.position.y += Math.sin(g * Math.PI) * 0.5;
        scatteredQuat(piece, qa);
        mesh.quaternion.slerpQuaternions(qa, piece.gridQuat, g);
        return;
      }
      const m = smooth((s.mend - (piece.slot / N) * 0.72) / 0.28);
      mesh.position.lerpVectors(piece.gridPos, homePos, m);
      mesh.position.y += Math.sin(m * Math.PI) * 0.7;
      mesh.quaternion.slerpQuaternions(piece.gridQuat, homeQuat, m);
    });

    // Seams follow the mended bowl.
    seamGroup.position.copy(rootPos);
    seamGroup.quaternion.copy(rootQuat);
    seamGroup.visible = s.urushi > 0 && s.mend >= 1;
    seamMeshes.forEach((seam, i) => {
      const f = clamp01(s.urushi * 1.6 - (i / seamMeshes.length) * 0.6);
      seam.mesh.geometry.setDrawRange(0, Math.floor((seam.total / seam.step) * f) * seam.step);
    });
    seamMat.color.copy(urushi).lerp(gold, s.gold);
    seamMat.metalness = 0.1 + s.gold * 0.9;
    seamMat.roughness = 0.5 - s.gold * 0.3;
    seamMat.emissive.copy(seamEmissive).multiplyScalar(s.gold * (0.45 + 0.9 * Math.sin(s.sweep * Math.PI)));

    // Gold dust streams in, swirling, and settles into the cracks.
    dust.visible = s.dust > 0 && s.dust < 1;
    if (dust.visible) {
      for (let i = 0; i < DUST; i++) {
        const k = smooth(s.dust * 1.55 - dustDelay[i] * 0.55);
        const swirl = (1 - k) * 2.6;
        const sx = dustStart[i * 3], sz = dustStart[i * 3 + 2];
        a.set(sx * Math.cos(swirl) - sz * Math.sin(swirl), dustStart[i * 3 + 1] + Math.sin(time + i) * 0.05 * (1 - k), sx * Math.sin(swirl) + sz * Math.cos(swirl));
        b.fromArray(dustTargets, i * 3).applyQuaternion(rootQuat).add(rootPos);
        a.add(rootPos).lerp(b, k);
        a.toArray(dustPos, i * 3);
      }
      dustGeo.attributes.position.needsUpdate = true;
      dustMat.opacity = smooth(s.dust * 5) * (1 - smooth((s.dust - 0.8) / 0.2));
    }

    // Impact chips.
    chips.visible = s.shatter > 0 && s.gather < 1;
    if (chips.visible) {
      const e = 1 - Math.pow(1 - s.shatter, 3);
      for (let i = 0; i < CHIPS; i++) {
        chipPos[i * 3] = IMPACT.x + chipDir[i * 3] * e;
        chipPos[i * 3 + 1] = Math.max(0.02, IMPACT.y - 0.6 + chipDir[i * 3 + 1] * e - e * e * 0.6);
        chipPos[i * 3 + 2] = IMPACT.z + chipDir[i * 3 + 2] * e;
      }
      chipGeo.attributes.position.needsUpdate = true;
      chipMat.opacity = 0.9 * (1 - s.gather);
    }

    // Motes drift; they belong to the morning.
    for (let i = 0; i < MOTES; i++) {
      motePos[i * 3] = moteBase[i * 3] + Math.sin(time * 0.15 + i) * 0.3;
      motePos[i * 3 + 1] = (moteBase[i * 3 + 1] + time * 0.04 + i * 0.01) % 5;
      motePos[i * 3 + 2] = moteBase[i * 3 + 2] + Math.cos(time * 0.12 + i * 1.3) * 0.3;
    }
    moteGeo.attributes.position.needsUpdate = true;
    moteMat.opacity = 0.55 * (1 - s.dark) + 0.25 * s.dark;

    // Tea: present in the opening ritual, gone in the fall, poured again at the end.
    const level = Math.max(1 - smooth(s.wobble * 4), s.tea);
    teaHolder.visible = level > 0.01;
    if (teaHolder.visible) {
      const t = 0.2 + level * 0.5, { r, y } = innerAt(t);
      teaHolder.position.copy(rootPos);
      teaHolder.quaternion.copy(rootQuat);
      tea.position.set(0, y - BOWL_CENTRE.y - 0.002, 0);
      tea.scale.setScalar(r * 0.995);
    }
    const steamAmount = Math.max(1 - smooth(s.wobble * 3), s.tea) * (1 - s.dark);
    steam.forEach(({ sprite, offset }, i) => {
      const life = (time * 0.12 + offset) % 1;
      sprite.visible = steamAmount > 0.01;
      sprite.position.set(rootPos.x + Math.sin(time * 0.7 + i * 2) * 0.18 * life - 0.05, rootPos.y + 0.35 + life * 1.5, rootPos.z + Math.cos(time * 0.5 + i) * 0.12);
      sprite.scale.setScalar(0.35 + life * 0.9);
      sprite.material.opacity = steamAmount * Math.sin(life * Math.PI) * 0.22;
    });

    // Light and room.
    background.copy(paper).lerp(night, s.dark).lerp(deepest, s.deep);
    if (s.settle > 0) background.lerp(morning, 1 - s.dark);
    hemi.intensity = 1.15 - s.dark * 0.75;
    key.intensity = 2.6 - s.dark * 1.5 - s.deep * 0.6 - s.labels * 0.5;
    rim.intensity = 1 + s.dark * 1.4;
    scene.environmentIntensity = 1 - s.dark * 0.45 - s.deep * 0.2;
    (floor.material as THREE.ShadowMaterial).opacity = 0.2 + s.dark * 0.35;
    (pool.material as THREE.MeshBasicMaterial).opacity = s.dark * 0.22 * (1 - s.deep * 0.6);
    pool.position.x = s.mend > 0 ? 0 : 0.8;
    pool.position.z = s.mend > 0 ? 0.3 : 1.6;
    const sweepAngle = -1.2 + s.sweep * Math.PI * 1.4;
    glint.position.set(rootPos.x + Math.cos(sweepAngle) * 2.2, rootPos.y + 1.4, rootPos.z + Math.sin(sweepAngle) * 2.2);
    glint.intensity = (s.gold * 2.2 + Math.sin(s.sweep * Math.PI) * 4.5) * (1 - s.settle);
    bloom.strength = s.dark * (0.03 + s.gold * 0.55);
    bloom.enabled = bloom.strength > 0.02;

    // Camera, with a breath of handheld drift and the reader's pointer.
    cameraAt(p);
    pointer.x += (pointer.tx - pointer.x) * 0.06;
    pointer.y += (pointer.ty - pointer.y) * 0.06;
    const aspect = host!.clientWidth / Math.max(1, host!.clientHeight);
    const narrow = aspect < 0.9;
    if (narrow) {
      // Portrait: centre the subject, push back, and leave room for copy above or below.
      const topDown = smooth((p - 0.27) / 0.06) * (1 - smooth((p - 0.405) / 0.06));
      camLook.x = topDown > 0 ? camLook.x : camLook.x * 0.3;
      camLook.y += p < 0.1 ? 0.8 * (1 - smooth(p / 0.1)) : p > 0.9 ? -0.55 : 0;
      camLook.z += topDown * 0.55;
      const far = 1.15 + (0.9 - aspect) * 1.1;
      camPos.sub(camLook).multiplyScalar(far + (0.98 - far) * topDown).add(camLook);
    }
    camPos.x += pointer.x * 0.35 + Math.sin(time * 0.31) * 0.04;
    camPos.y += -pointer.y * 0.2 + Math.sin(time * 0.43) * 0.03;
    // A short shake on impact.
    const shake = s.shatter > 0 && s.shatter < 0.25 ? (0.25 - s.shatter) * 0.25 : 0;
    camPos.x += Math.sin(time * 61) * shake;
    camPos.y += Math.cos(time * 53) * shake;
    camera.position.copy(camPos);
    camera.lookAt(camLook);

    composer.render();

    // HTML overlay that depends on 3D positions or live values.
    const inkMix = s.dark;
    const ink = inkLight.clone().lerp(inkDark, inkMix);
    stage!.style.setProperty("--gs-ink", `#${ink.getHexString()}`);
    stage!.style.setProperty("--gs-bg", `#${background.getHexString()}`);
    stage!.classList.toggle("is-dark", inkMix > 0.5);
    if (s.labels > 0.001) {
      const w = host!.clientWidth, h = host!.clientHeight;
      pieces.forEach((piece) => {
        const el = labels[piece.slot];
        if (!el) return;
        tmp.copy(piece.mesh.position).project(camera);
        el.style.transform = `translate(${((tmp.x + 1) / 2) * w}px, ${((1 - tmp.y) / 2) * h}px)`;
        el.style.opacity = String(clamp01(s.labels * 1.6 - (piece.slot / N) * 0.6));
      });
    } else labels.forEach((el) => (el.style.opacity = "0"));
    if (dayEl) dayEl.textContent = String(Math.round(1 + smooth(s.mend * 1.1) * 46)).padStart(2, "0");
    const stepIndex = s.gold > 0.05 ? 3 : s.urushi > 0.05 ? 2 : s.mend > 0.5 ? 1 : 0;
    steps.forEach((el, i) => el.classList.toggle("is-active", i === stepIndex));
    if (meterValue) meterValue.textContent = (goldLength * s.gold).toFixed(1);
    if (meterBar) meterBar.style.transform = `scaleX(${s.gold})`;
    if (s.chapter !== shownChapter) {
      shownChapter = s.chapter;
      if (hudLabel) hudLabel.textContent = goldseamChapters[s.chapter][0];
      if (hudCount) hudCount.textContent = `${String(s.chapter + 1).padStart(2, "0")} / 07`;
      dots.forEach((d, i) => d.classList.toggle("is-on", i <= s.chapter));
    }
    host!.dataset.scrollProgress = p.toFixed(3);
    host!.dataset.storyBeat = String(s.chapter + 1);
  }

  function resize() {
    const w = Math.max(1, host!.clientWidth), h = Math.max(1, host!.clientHeight);
    renderer.setSize(w, h, false);
    composer.setPixelRatio(renderer.getPixelRatio());
    composer.setSize(w, h);
    bloom.resolution.set(w / 2, h / 2);
    camera.aspect = w / h;
    camera.fov = w / h < 0.9 ? 40 : 30;
    camera.updateProjectionMatrix();
    draw(performance.now() * 0.001);
  }
  resize();

  // One master timeline, scrubbed by the whole journey: 3D state and copy share its clock.
  let timeline: gsap.core.Timeline | undefined;
  if (!reduced) {
    timeline = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: { trigger: ".gs-journey", start: "top top", end: "bottom bottom", scrub: 1.1 },
    });
    timeline.to(state, { p: 1, duration: 1 }, 0);
    timeline.to(".gs-hero", { autoAlpha: 0, y: -70, duration: 0.04, ease: "power1.in" }, 0.02);
    timeline.to(".gs-hero-aside", { autoAlpha: 0, duration: 0.03 }, 0.03);
    goldseamChapters.forEach((_, i) => {
      const el = stage.querySelector<HTMLElement>(`.gs-chapter[data-index="${i}"]`);
      if (!el) return;
      const start = goldseamBeats[i] + (i === 0 ? 0.068 : 0.012);
      const end = i === goldseamChapters.length - 1 ? 1.2 : goldseamBeats[i + 1] - 0.012;
      timeline!.fromTo(el, { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.012 }, start);
      timeline!.fromTo(el.querySelectorAll(".gs-c"), { yPercent: 115 }, { yPercent: 0, stagger: 0.0006, duration: 0.02, ease: "power3.out" }, start);
      timeline!.fromTo(el.querySelectorAll(".gs-fade"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, stagger: 0.004, duration: 0.018, ease: "power2.out" }, start + 0.008);
      if (end < 1) timeline!.to(el, { autoAlpha: 0, y: -28, duration: 0.012, ease: "power1.in" }, end - 0.012);
    });
    timeline.fromTo(".gs-flash", { opacity: 0 }, { opacity: 0.9, duration: 0.003 }, 0.192);
    timeline.to(".gs-flash", { opacity: 0, duration: 0.03, ease: "power2.out" }, 0.196);
    timeline.fromTo(".gs-impact", { autoAlpha: 0, scale: 1.12 }, { autoAlpha: 1, scale: 1, duration: 0.012, ease: "power3.out" }, 0.197);
    timeline.to(".gs-impact", { autoAlpha: 0, scale: 0.96, duration: 0.02 }, 0.245);
    timeline.fromTo(".gs-process", { autoAlpha: 0, y: 30 }, { autoAlpha: 1, y: 0, duration: 0.015 }, 0.43);
    timeline.to(".gs-process", { autoAlpha: 0, duration: 0.012 }, 0.632);
    timeline.fromTo(".gs-meter", { autoAlpha: 0, y: 20 }, { autoAlpha: 1, y: 0, duration: 0.012 }, 0.6);
    timeline.to(".gs-meter", { autoAlpha: 0, duration: 0.012 }, 0.735);
    timeline.to(".gs-track i", { scaleX: 1, duration: 1 }, 0);
    timeline.to(".gs-scroll-hint", { autoAlpha: 0, duration: 0.02 }, 0.02);
    // Opening: not scroll-bound, so the page greets the reader.
    gsap.from(".gs-hero .gs-c", { yPercent: 115, duration: 1.3, stagger: 0.022, ease: "power4.out", delay: 0.25 });
    gsap.from(".gs-hero .gs-fade, .gs-hero-aside", { autoAlpha: 0, y: 18, duration: 1, stagger: 0.12, ease: "power2.out", delay: 0.75 });
    gsap.from(".gs-nav", { autoAlpha: 0, y: -12, duration: 0.8, delay: 0.4 });
    gsap.utils.toArray<HTMLElement>(".gs-log article").forEach((el) =>
      gsap.from(el, { y: 60, autoAlpha: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } }),
    );
    gsap.utils.toArray<SVGPathElement>(".gs-seam-line path").forEach((path, i) => {
      const length = path.getTotalLength();
      gsap.fromTo(path, { strokeDasharray: length, strokeDashoffset: length }, {
        strokeDashoffset: 0, ease: "none",
        scrollTrigger: { trigger: ".gs-ending", start: i ? "top 35%" : "top 75%", end: "bottom bottom", scrub: 1 },
      });
    });
    gsap.from(".gs-ending .gs-c", {
      yPercent: 115, stagger: 0.02, duration: 1.1, ease: "power4.out",
      scrollTrigger: { trigger: ".gs-ending", start: "top 70%" },
    });
  }

  const onPointer = (e: PointerEvent) => {
    pointer.tx = (e.clientX / innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / innerHeight - 0.5) * 2;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });
  let visible = true, frame = 0;
  const observer = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) schedule();
  });
  observer.observe(host);
  function tick(t: number) {
    frame = 0;
    if (document.hidden || !visible) return;
    draw(t * 0.001);
    schedule();
  }
  function schedule() {
    if (!frame && !document.hidden && visible && !reduced) frame = requestAnimationFrame(tick);
  }
  const onVisibility = () => {
    if (document.hidden) {
      cancelAnimationFrame(frame);
      frame = 0;
    } else schedule();
  };
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("resize", resize);
  schedule();

  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    timeline?.scrollTrigger?.kill();
    timeline?.kill();
    window.removeEventListener("resize", resize);
    window.removeEventListener("pointermove", onPointer);
    document.removeEventListener("visibilitychange", onVisibility);
    scene.traverse((o) => {
      const mesh = o as THREE.Mesh;
      if (mesh.geometry) mesh.geometry.dispose();
      const mats = Array.isArray(mesh.material) ? mesh.material : mesh.material ? [mesh.material] : [];
      for (const m of mats) {
        for (const v of Object.values(m)) if (v instanceof THREE.Texture) v.dispose();
        m.dispose();
      }
    });
    envTarget.dispose();
    pmrem.dispose();
    room.dispose?.();
    composer.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
