import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";

/**
 * A snow globe, built entirely from code: a glass dome (physical transmission) on a turned wooden
 * base with a brass ring and an engraved plaque, a small world inside, and snow that is simulated
 * flake by flake: it drifts, swirls, settles on the ground and lifts again when the globe is shaken.
 * For receiving, the globe can sit inside a wrapped gift box whose lid comes off with `reveal`.
 */
export type World = "cabin" | "lighthouse" | "city";
export type Sky = "night" | "dusk" | "day";
export type Snow = "white" | "gold" | "rose";
export interface GlobeLook { world: World; sky: Sky; snow: Snow; message: string; to?: string }

export const SKIES: Record<Sky, { top: string; bottom: string; light: number; fog: number; amb: number }> = {
  night: { top: "#0b1236", bottom: "#2a2f6b", light: 0xbcd0ff, fog: 0x1a2150, amb: .45 },
  dusk: { top: "#3a2150", bottom: "#f19a7a", light: 0xffc2a0, fog: 0x8a5070, amb: .6 },
  day: { top: "#8fc3ea", bottom: "#e9f2f7", light: 0xffffff, fog: 0xc8dbe8, amb: .9 },
};
const SNOW: Record<Snow, number> = { white: 0xffffff, gold: 0xffd27a, rose: 0xffb3cf };

const R = 1, CY = .5, GROUND = CY - .42;

function flakeTexture() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d")!, r = g.createRadialGradient(32, 32, 0, 32, 32, 30);
  r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(.4, "rgba(255,255,255,.9)"); r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
function wrapTexture() {
  // deep blue paper with a scatter of small gold stars
  const c = document.createElement("canvas"); c.width = c.height = 512;
  const g = c.getContext("2d")!;
  g.fillStyle = "#24365f"; g.fillRect(0, 0, 512, 512);
  for (let i = 0; i < 70; i++) {
    const x = (i * 97.13) % 512, y = (i * 53.71 + (i % 7) * 31) % 512, s = 5 + (i % 4) * 2;
    g.fillStyle = i % 3 ? "#d8b05c" : "#f1e2bd";
    g.beginPath(); for (let k = 0; k < 10; k++) { const a = (k / 10) * Math.PI * 2 - Math.PI / 2, rr = k % 2 ? s * .45 : s; g.lineTo(x + Math.cos(a) * rr, y + Math.sin(a) * rr); } g.fill();
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.wrapS = t.wrapT = THREE.RepeatWrapping; t.repeat.set(1.4, 1.4);
  return t;
}
function plaqueTexture(text: string) {
  const c = document.createElement("canvas"); c.width = 1024; c.height = 160;
  const g = c.getContext("2d")!;
  const bg = g.createLinearGradient(0, 0, 0, 160); bg.addColorStop(0, "#2a1a10"); bg.addColorStop(1, "#160d07");
  g.fillStyle = bg; g.fillRect(0, 0, 1024, 160);
  g.strokeStyle = "#c9a45c"; g.lineWidth = 4; g.strokeRect(10, 10, 1004, 140);
  g.fillStyle = "#e8c77e"; g.textAlign = "center"; g.textBaseline = "middle";
  let size = 96; g.font = `italic ${size}px "Instrument Serif", Georgia, serif`;
  while (g.measureText(text).width > 960 && size > 30) { size -= 2; g.font = `italic ${size}px "Instrument Serif", Georgia, serif`; }
  g.shadowColor = "rgba(0,0,0,.6)"; g.shadowOffsetY = 2; g.fillText(text || " ", 512, 84);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 4;
  return t;
}
function windowsTexture(seed: number) {
  const c = document.createElement("canvas"); c.width = 64; c.height = 128;
  const g = c.getContext("2d")!;
  g.fillStyle = "#2b2f45"; g.fillRect(0, 0, 64, 128);
  for (let y = 6; y < 124; y += 12) for (let x = 6; x < 60; x += 14) {
    const on = Math.sin(x * 12.9 + y * 78.2 + seed * 37.7) > -.1;
    g.fillStyle = on ? "#ffd690" : "#1a1d2c"; g.fillRect(x, y, 8, 7);
  }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.magFilter = THREE.NearestFilter;
  return t;
}
const mat = (color: number, rough = .8, extra: Partial<THREE.MeshStandardMaterialParameters> = {}) => new THREE.MeshStandardMaterial({ color, roughness: rough, ...extra });
function pine(h: number) {
  const g = new THREE.Group(), m = mat(0x2f5a3a, .9), snow = mat(0xf4f8ff, .7);
  for (let i = 0; i < 3; i++) {
    const cone = new THREE.Mesh(new THREE.ConeGeometry(.12 * h * (1 - i * .24), .2 * h, 7), m);
    cone.position.y = .1 * h + i * .1 * h; g.add(cone);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(.07 * h * (1 - i * .24), .08 * h, 7), snow);
    cap.position.y = cone.position.y + .07 * h; g.add(cap);
  }
  const trunk = new THREE.Mesh(new THREE.CylinderGeometry(.015 * h, .02 * h, .06 * h), mat(0x5a3a22));
  trunk.position.y = .02 * h; g.add(trunk);
  return g;
}

/** The little worlds inside the glass. Each returns its group and a per-frame animation. */
function buildWorld(world: World): { group: THREE.Group; tick: (t: number) => void } {
  const g = new THREE.Group();
  const ground = new THREE.Mesh(new THREE.CylinderGeometry(.9, .9, .04, 48), mat(world === "lighthouse" ? 0x1d3f5c : 0xf2f6ff, world === "lighthouse" ? .25 : .95, world === "lighthouse" ? { metalness: .1 } : {}));
  ground.position.y = GROUND; g.add(ground);
  let tick = (_t: number) => {};
  if (world === "cabin") {
    const cabin = new THREE.Group();
    const body = new THREE.Mesh(new THREE.BoxGeometry(.34, .22, .26), mat(0x7a4a2c, .85)); body.position.y = .11; cabin.add(body);
    const roofShape = new THREE.Shape(); roofShape.moveTo(-.22, 0); roofShape.lineTo(0, .17); roofShape.lineTo(.22, 0); roofShape.lineTo(-.22, 0);
    const roof = new THREE.Mesh(new THREE.ExtrudeGeometry(roofShape, { depth: .32, bevelEnabled: false }), mat(0xf4f7ff, .7));
    roof.position.set(0, .22, -.16); cabin.add(roof);
    const chim = new THREE.Mesh(new THREE.BoxGeometry(.05, .12, .05), mat(0x8a5a3a)); chim.position.set(.1, .34, 0); cabin.add(chim);
    const glow = mat(0xffc46b, .4, { emissive: 0xffa040, emissiveIntensity: 2.2 });
    for (const x of [-.08, .08]) { const w = new THREE.Mesh(new THREE.PlaneGeometry(.06, .06), glow); w.position.set(x, .12, .131); cabin.add(w); }
    const door = new THREE.Mesh(new THREE.PlaneGeometry(.06, .11), mat(0x3a2414)); door.position.set(0, .06, .131); door.position.x = 0; cabin.add(door);
    cabin.position.set(.05, GROUND + .02, -.05); cabin.rotation.y = -.35; g.add(cabin);
    const lamp = new THREE.PointLight(0xffb060, 1.6, 1.2, 1.5); lamp.position.set(.05, GROUND + .2, .18); g.add(lamp);
    for (const [x, z, s] of [[-.5, -.2, 1.5], [-.35, .3, 1.1], [.5, .1, 1.3], [.38, -.42, 1.7], [-.1, -.55, 1.2]] as const) { const p = pine(s); p.position.set(x, GROUND + .02, z); g.add(p); }
    tick = (t) => (lamp.intensity = 1.4 + Math.sin(t * 7) * .1 + Math.sin(t * 13) * .08);
  } else if (world === "lighthouse") {
    const rock = new THREE.Mesh(new THREE.DodecahedronGeometry(.32, 1), mat(0x4a4a52, .95)); rock.scale.set(1.2, .5, 1); rock.position.y = GROUND + .06; g.add(rock);
    const tower = new THREE.Group();
    for (let i = 0; i < 5; i++) { const s = new THREE.Mesh(new THREE.CylinderGeometry(.075 - i * .008, .085 - i * .008, .1, 20), mat(i % 2 ? 0xffffff : 0xc8322b, .6)); s.position.y = .05 + i * .1; tower.add(s); }
    const gallery = new THREE.Mesh(new THREE.CylinderGeometry(.07, .07, .02, 20), mat(0x222222)); gallery.position.y = .5; tower.add(gallery);
    const lampMat = mat(0xfff2c0, .2, { emissive: 0xffe08a, emissiveIntensity: 3 });
    const lampBox = new THREE.Mesh(new THREE.CylinderGeometry(.045, .045, .07, 16), lampMat); lampBox.position.y = .545; tower.add(lampBox);
    const cap = new THREE.Mesh(new THREE.ConeGeometry(.06, .07, 16), mat(0x222222)); cap.position.y = .615; tower.add(cap);
    tower.position.set(-.05, GROUND + .17, 0); g.add(tower);
    const beam = new THREE.Mesh(new THREE.ConeGeometry(.12, .9, 24, 1, true), new THREE.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, opacity: .16, side: THREE.DoubleSide, depthWrite: false, blending: THREE.AdditiveBlending }));
    beam.geometry.translate(0, -.45, 0); beam.rotation.z = Math.PI / 2;
    const pivot = new THREE.Group(); pivot.position.set(-.05, GROUND + .17 + .545, 0); pivot.add(beam); g.add(pivot);
    const lampLight = new THREE.PointLight(0xffe08a, 1.2, 1.5, 1.6); lampLight.position.copy(pivot.position); g.add(lampLight);
    const house = new THREE.Mesh(new THREE.BoxGeometry(.16, .1, .12), mat(0xf2ede0)); house.position.set(.2, GROUND + .17, .08); g.add(house);
    const roof = new THREE.Mesh(new THREE.ConeGeometry(.13, .08, 4), mat(0x2f4f6f)); roof.rotation.y = Math.PI / 4; roof.position.set(.2, GROUND + .26, .08); g.add(roof);
    const boat = new THREE.Mesh(new THREE.BoxGeometry(.12, .03, .05), mat(0xd8663a)); boat.position.set(.45, GROUND + .04, .4); g.add(boat);
    tick = (t) => { pivot.rotation.y = t * 1.1; boat.position.y = GROUND + .04 + Math.sin(t * 1.4) * .01; boat.rotation.z = Math.sin(t * 1.2) * .08; };
  } else {
    const heights = [.55, .38, .7, .3, .46, .62, .34, .5];
    heights.forEach((h, i) => {
      const a = (i / heights.length) * Math.PI * 2 + .3, r = i % 2 ? .36 : .18;
      const tex = windowsTexture(i); tex.wrapS = tex.wrapT = THREE.RepeatWrapping; tex.repeat.set(1, h * 2);
      const m = new THREE.MeshStandardMaterial({ color: 0xffffff, map: tex, emissiveMap: tex, emissive: 0xffffff, emissiveIntensity: .9, roughness: .7 });
      const b = new THREE.Mesh(new THREE.BoxGeometry(.13, h, .13), [m, m, mat(0xe8edf8, .9), mat(0x222634), m, m]);
      b.position.set(Math.cos(a) * r, GROUND + .02 + h / 2, Math.sin(a) * r); b.rotation.y = a; g.add(b);
    });
    const spire = new THREE.Mesh(new THREE.ConeGeometry(.03, .16, 6), mat(0xd8d8e0, .3, { metalness: .8 })); spire.position.set(Math.cos(.3 + 2 * Math.PI * 2 / 8) * .18, GROUND + .02 + .7 + .08, Math.sin(.3 + 2 * Math.PI * 2 / 8) * .18); g.add(spire);
    const beacon = new THREE.Mesh(new THREE.SphereGeometry(.012), mat(0xff3030, .3, { emissive: 0xff2020, emissiveIntensity: 3 })); beacon.position.copy(spire.position).add(new THREE.Vector3(0, .09, 0)); g.add(beacon);
    for (const [x, z] of [[.6, .2], [-.6, -.1], [.1, .62]] as const) { const p = pine(.9); p.position.set(x, GROUND + .02, z); g.add(p); }
    const glow = new THREE.PointLight(0xffd090, 1.2, 1.4, 1.6); glow.position.set(0, GROUND + .4, 0); g.add(glow);
    tick = (t) => { (beacon.material as THREE.MeshStandardMaterial).emissiveIntensity = Math.sin(t * 3) > .3 ? 3 : .2; };
  }
  return { group: g, tick };
}

export class SnowGlobe {
  readonly renderer: THREE.WebGLRenderer;
  readonly scene = new THREE.Scene();
  readonly camera = new THREE.PerspectiveCamera(28, 1, .1, 60);
  /** The whole object (base, glass, world, snow); `rig` wobbles when shaken. */
  readonly rig = new THREE.Group();
  readonly holder = new THREE.Group();
  private world?: { group: THREE.Group; tick: (t: number) => void };
  private snow!: THREE.Points; private pos!: Float32Array; private vel!: Float32Array; private settled!: Uint8Array;
  private plaque!: THREE.Mesh; private hemi!: THREE.HemisphereLight; private key!: THREE.DirectionalLight;
  private box?: { group: THREE.Group; lid: THREE.Group; ribbons: THREE.Object3D[] };
  private wobble = { x: 0, z: 0, vx: 0, vz: 0 };
  private spin = 0; private spinV = 0; private t = 0; private raf = 0; private running = false;
  /** 0–1 how agitated the snow is (for UI). */
  energy = 0;
  /** Gift-box reveal progress, 0 (wrapped) to 1 (globe out and up). */
  reveal = 1;
  look: GlobeLook;

  constructor(readonly canvas: HTMLCanvasElement, look: GlobeLook, opts: { gift?: boolean } = {}) {
    this.look = look;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: "high-performance" });
    this.renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1.05;
    this.renderer.outputColorSpace = THREE.SRGBColorSpace;
    const pmrem = new THREE.PMREMGenerator(this.renderer);
    this.scene.environment = pmrem.fromScene(new RoomEnvironment(), .04).texture;
    this.camera.position.set(0, .55, 7.2); this.camera.lookAt(0, .25, 0);
    this.hemi = new THREE.HemisphereLight(0xffffff, 0x334455, .6); this.scene.add(this.hemi);
    this.key = new THREE.DirectionalLight(0xffffff, 1.6); this.key.position.set(2.5, 4, 3); this.scene.add(this.key);
    const rim = new THREE.DirectionalLight(0x99bbff, .8); rim.position.set(-3, 2, -2); this.scene.add(rim);
    this.scene.add(this.holder); this.holder.add(this.rig);
    this.buildBase(); this.buildGlass(); this.buildSnow();
    if (opts.gift) { this.buildBox(); this.reveal = 0; }
    this.setLook(look, true);
    this.resize();
    new ResizeObserver(() => this.resize()).observe(canvas);
  }

  private buildBase() {
    // a turned wooden base: a lathe profile, then a brass ring where the glass sits
    const pts = [[0, -.5], [.86, -.5], [.9, -.47], [.9, -.41], [.83, -.37], [.79, -.16], [.83, -.09], [.84, -.04], [.76, .02], [0, .02]].map(([x, y]) => new THREE.Vector2(x, y));
    const base = new THREE.Mesh(new THREE.LatheGeometry(pts, 72), new THREE.MeshStandardMaterial({ color: 0x5a3320, roughness: .45, metalness: .05 }));
    base.position.y = .0; this.rig.add(base);
    const ring = new THREE.Mesh(new THREE.TorusGeometry(.77, .032, 16, 96), new THREE.MeshStandardMaterial({ color: 0xc9a45c, metalness: 1, roughness: .25 }));
    ring.rotation.x = Math.PI / 2; ring.position.y = .03; this.rig.add(ring);
    this.plaque = new THREE.Mesh(new THREE.CylinderGeometry(.845, .845, .17, 64, 1, true, -.7, 1.4), new THREE.MeshStandardMaterial({ roughness: .5, metalness: .2, emissive: 0xffffff, emissiveIntensity: .35 }));
    this.plaque.position.y = -.265;
    // a soft contact shadow under the base
    const sc = document.createElement("canvas"); sc.width = sc.height = 128; const sg = sc.getContext("2d")!, grd = sg.createRadialGradient(64, 64, 0, 64, 64, 64);
    grd.addColorStop(0, "rgba(0,0,0,.55)"); grd.addColorStop(1, "rgba(0,0,0,0)"); sg.fillStyle = grd; sg.fillRect(0, 0, 128, 128);
    const shadow = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 1.2), new THREE.MeshBasicMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false }));
    shadow.rotation.x = -Math.PI / 2; shadow.position.y = -.5; this.rig.add(shadow); this.plaque.rotation.y = 0; this.rig.add(this.plaque);
  }
  private buildGlass() {
    const glass = new THREE.Mesh(new THREE.SphereGeometry(R, 96, 64), new THREE.MeshPhysicalMaterial({
      color: 0xffffff, transmission: 1, thickness: .25, roughness: .03, ior: 1.33, clearcoat: 1, clearcoatRoughness: .05, envMapIntensity: 1.2, transparent: true, specularIntensity: 1,
    }));
    glass.position.y = CY; glass.renderOrder = 2; (glass.material as THREE.Material).depthWrite = false; this.rig.add(glass);
  }
  private buildSnow() {
    const N = 1400; this.pos = new Float32Array(N * 3); this.vel = new Float32Array(N * 3); this.settled = new Uint8Array(N);
    for (let i = 0; i < N; i++) {
      // most snow starts settled on the ground, a little still falling
      const a = Math.random() * Math.PI * 2, r = Math.sqrt(Math.random()) * .85;
      this.pos[i * 3] = Math.cos(a) * r; this.pos[i * 3 + 2] = Math.sin(a) * r;
      const falling = i % 3 === 0;
      this.pos[i * 3 + 1] = falling ? GROUND + Math.random() * 1.2 : GROUND + .025;
      this.settled[i] = falling ? 0 : 1;
    }
    const geo = new THREE.BufferGeometry(); geo.setAttribute("position", new THREE.BufferAttribute(this.pos, 3));
    this.snow = new THREE.Points(geo, new THREE.PointsMaterial({ size: .055, map: flakeTexture(), transparent: true, depthWrite: false, color: 0xffffff, sizeAttenuation: true }));
    this.snow.renderOrder = 3; this.rig.add(this.snow);
  }
  private buildBox() {
    const group = new THREE.Group(), lid = new THREE.Group(), ribbons: THREE.Object3D[] = [];
    const paper = new THREE.MeshStandardMaterial({ map: wrapTexture(), roughness: .55 }), ribbon = new THREE.MeshStandardMaterial({ color: 0xd8b05c, roughness: .35, metalness: .6 });
    const body = new THREE.Mesh(new THREE.BoxGeometry(1.9, 1.5, 1.9), paper); body.position.y = -.3; group.add(body);
    const lidBox = new THREE.Mesh(new THREE.BoxGeometry(2.0, .26, 2.0), paper); lid.add(lidBox);
    for (const r of [[.2, .28, 2.04], [2.04, .28, .2]] as const) { const m = new THREE.Mesh(new THREE.BoxGeometry(...r), ribbon); lid.add(m); }
    for (const r of [[.18, 1.52, 1.94], [1.94, 1.52, .18]] as const) { const m = new THREE.Mesh(new THREE.BoxGeometry(...r), ribbon); m.position.y = -.3; group.add(m); ribbons.push(m); }
    for (const s of [-1, 1]) { const loop = new THREE.Mesh(new THREE.TorusGeometry(.24, .06, 12, 32), ribbon); loop.position.set(s * .22, .24, 0); loop.rotation.set(Math.PI / 2.4, 0, s * .5); lid.add(loop); }
    const knot = new THREE.Mesh(new THREE.SphereGeometry(.09, 16, 12), ribbon); knot.position.y = .18; lid.add(knot);
    lid.position.y = .58; group.add(lid);
    this.holder.add(group);
    this.box = { group, lid, ribbons };
  }

  setLook(look: GlobeLook, first = false) {
    const changedWorld = first || look.world !== this.look.world;
    this.look = look;
    if (changedWorld) {
      if (this.world) { this.rig.remove(this.world.group); }
      this.world = buildWorld(look.world); this.rig.add(this.world.group);
    }
    const sky = SKIES[look.sky];
    this.hemi.color.set(sky.light); this.hemi.intensity = sky.amb; this.key.color.set(sky.light);
    (this.snow.material as THREE.PointsMaterial).color.setHex(SNOW[look.snow]);
    const m = this.plaque.material as THREE.MeshStandardMaterial;
    m.map?.dispose(); m.map = plaqueTexture(look.message); m.emissiveMap = m.map; m.needsUpdate = true;
    if (this.world && this.renderer) this.renderOnce();
  }

  resize() {
    const r = this.canvas.getBoundingClientRect();
    if (!r.width || !r.height) return;
    this.renderer.setSize(r.width, r.height, false);
    this.camera.aspect = r.width / r.height;
    // keep the globe the same size relative to the shorter side
    this.camera.fov = r.width / r.height < .9 ? 38 : 28;
    this.camera.updateProjectionMatrix();
    this.renderOnce();
  }

  /** Shake: a sideways jolt (screen pixels per frame) agitates the snow and wobbles the globe. */
  shake(dx: number, dy: number) {
    const k = Math.min(1, Math.hypot(dx, dy) / 30);
    this.wobble.vz += -dx * .0016; this.wobble.vx += dy * .0012;
    this.spinV += dx * .0008;
    for (let i = 0; i < this.settled.length; i++) {
      if (Math.random() > .25 + k * .75) continue;
      this.settled[i] = 0;
      this.vel[i * 3] += (Math.random() - .5) * k * .09 + dx * .0008;
      this.vel[i * 3 + 1] += Math.random() * k * .11;
      this.vel[i * 3 + 2] += (Math.random() - .5) * k * .09;
    }
    this.energy = Math.min(1, this.energy + k * .5);
  }
  turn(dx: number) { this.spinV += dx * .0006; }

  step(dt: number) {
    this.t += dt;
    const N = this.settled.length, p = this.pos, v = this.vel, top = CY + R * .92;
    for (let i = 0; i < N; i++) {
      if (this.settled[i]) continue;
      const j = i * 3;
      // gentle swirl, drag and slow fall
      const sw = Math.sin(this.t * .7 + i) * .0004;
      v[j] += -p[j + 2] * sw * 2 + sw; v[j + 2] += p[j] * sw * 2;
      v[j + 1] -= .045 * dt;
      v[j] *= .985; v[j + 1] *= .97; v[j + 2] *= .985;
      p[j] += v[j] * dt * 6; p[j + 1] += v[j + 1] * dt * 6; p[j + 2] += v[j + 2] * dt * 6;
      // stay inside the glass
      const dx = p[j], dy = p[j + 1] - CY, dz = p[j + 2], d = Math.hypot(dx, dy, dz), lim = R * .9;
      if (d > lim) { const k = lim / d; p[j] = dx * k; p[j + 1] = CY + dy * k; p[j + 2] = dz * k; v[j] *= -.3; v[j + 1] *= -.3; v[j + 2] *= -.3; }
      if (p[j + 1] > top) p[j + 1] = top;
      if (p[j + 1] <= GROUND + .025) { p[j + 1] = GROUND + .025; if (Math.abs(v[j + 1]) < .02) { this.settled[i] = 1; v[j] = v[j + 1] = v[j + 2] = 0; } else v[j + 1] *= -.2; }
    }
    this.snow.geometry.attributes.position.needsUpdate = true;
    // the globe wobbles back on a spring, and spins down
    const w = this.wobble;
    w.vx += -w.x * 40 * dt; w.vz += -w.z * 40 * dt; w.vx *= .9; w.vz *= .9; w.x += w.vx; w.z += w.vz;
    this.rig.rotation.x = w.x; this.rig.rotation.z = w.z;
    this.spin += this.spinV; this.spinV *= .95; this.rig.rotation.y = this.spin + Math.sin(this.t * .25) * .12;
    this.energy *= .985;
    this.world?.tick(this.t);
    if (this.box) {
      // the gift box: lid lifts and flies off, the box sinks away, the globe rises
      const r = this.reveal, s = (a: number, b: number) => Math.min(1, Math.max(0, (r - a) / (b - a)));
      // lid lifts and slides away, the globe rises out of the open box, then the box falls away
      const lift = s(.08, .38), rise = s(.32, .72), drop = s(.62, .95);
      const e = (x: number) => x * x * (3 - 2 * x);
      this.box.lid.position.set(e(lift) * 3.6, .58 + Math.sin(lift * Math.PI) * 1.1 + e(lift) * 1.6, -e(lift) * 2.4);
      this.box.lid.visible = lift < .98;
      this.box.lid.rotation.set(-e(lift) * .3, e(lift) * .5, -e(lift) * .9);
      this.box.ribbons.forEach((m) => (m.visible = lift < .05));
      this.box.group.position.y = -e(drop) * 4;
      this.box.group.visible = drop < .99;
      this.rig.position.y = -.75 + e(rise) * .75;
      this.rig.scale.setScalar(.6 + e(rise) * .4);
      this.rig.visible = r > .02;
    }
  }
  private renderOnce() { this.renderer.render(this.scene, this.camera); }
  start() {
    if (this.running) return; this.running = true;
    let last = performance.now();
    const loop = (now: number) => {
      if (!this.running) return;
      const dt = Math.min(.05, (now - last) / 1000); last = now;
      if (!document.hidden) { this.step(dt); this.renderOnce(); }
      this.raf = requestAnimationFrame(loop);
    };
    this.raf = requestAnimationFrame(loop);
  }
  stop() { this.running = false; cancelAnimationFrame(this.raf); }
  /** Settle a still frame (reduced motion): a few seconds of snowfall, then one render. */
  still() { for (let i = 0; i < 120; i++) this.step(1 / 30); this.renderOnce(); }
  destroy() { this.stop(); this.renderer.dispose(); }
}
