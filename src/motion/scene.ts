import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import { RoundedBoxGeometry } from "three/examples/jsm/geometries/RoundedBoxGeometry.js";
import type { MotionId } from "./catalog";

export interface Pose {
  turn: number;
  explode: number;
  bloom: number;
  lift: number;
  scale: number;
  roll: number;
}
const hash = (n: number) => {
  const v = Math.sin(n * 127.1 + 31.7) * 43758.54;
  return v - Math.floor(v);
};
const mesh = (
  geometry: THREE.BufferGeometry,
  material: THREE.Material,
  parent: THREE.Object3D,
  x = 0,
  y = 0,
  z = 0,
) => {
  const object = new THREE.Mesh(geometry, material);
  object.position.set(x, y, z);
  parent.add(object);
  return object;
};
function petalGeometry(length = 1.25, width = 0.55) {
  const geometry = new THREE.BufferGeometry(),
    vertices: number[] = [],
    indices: number[] = [],
    uvs: number[] = [];
  const segments = 42,
    across = 20;
  for (let y = 0; y <= segments; y++)
    for (let x = 0; x <= across; x++) {
      const t = y / segments,
        u = (x / across) * 2 - 1;
      const silhouette = Math.sin(Math.PI * t) ** 0.5;
      vertices.push(
        u * width * silhouette,
        t * length,
        0.12 +
          Math.sin(Math.PI * t) * 0.3 +
          u * u * 0.18 -
          Math.pow(t, 5) * 0.2 +
          Math.sin(t * 36 + u * 4) * 0.017 * silhouette,
      );
      uvs.push(x / across, t);
      if (y < segments && x < across) {
        const a = y * (across + 1) + x,
          b = a + across + 1;
        indices.push(a, b, a + 1, b, b + 1, a + 1);
      }
    }
  geometry.setAttribute(
    "position",
    new THREE.Float32BufferAttribute(vertices, 3),
  );
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.setIndex(indices);
  geometry.computeVertexNormals();
  return geometry;
}
function petalTexture() {
  const canvas = document.createElement("canvas");
  canvas.width = 256;
  canvas.height = 512;
  const c = canvas.getContext("2d")!;
  const gradient = c.createLinearGradient(0, 0, 0, 512);
  gradient.addColorStop(0, "#783f28");
  gradient.addColorStop(0.22, "#bc5845");
  gradient.addColorStop(0.65, "#dc8672");
  gradient.addColorStop(1, "#f0ac91");
  c.fillStyle = gradient;
  c.fillRect(0, 0, 256, 512);
  for (let x = 0; x < 256; x += 3) {
    c.strokeStyle = `rgba(91,34,35,${0.025 + hash(x) * 0.06})`;
    c.lineWidth = 0.6;
    c.beginPath();
    c.moveTo(128, 0);
    c.quadraticCurveTo(x * 0.85, 220, x, 512);
    c.stroke();
  }
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  return texture;
}
export class MotionScene {
  readonly pose: Pose = {
    turn: 0,
    explode: 0,
    bloom: 0.65,
    lift: 0,
    scale: 1,
    roll: 0,
  };
  private renderer?: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(33, 1, 0.1, 60);
  private root = new THREE.Group();
  private visible = true;
  private lost = false;
  private disposed = false;
  private lastFrame = -1;
  private observers: (ResizeObserver | IntersectionObserver)[] = [];
  private petals: THREE.Mesh[] = [];
  private cups: THREE.Group[] = [];
  private band?: THREE.Group;
  private shells: THREE.Mesh[] = [];
  private particles?: THREE.Points;
  private objects: THREE.Object3D[] = [];
  private environment?: THREE.WebGLRenderTarget;
  private textures: THREE.Texture[] = [];
  private tilt = { x: 0, y: 0 };
  private pointer = (e: PointerEvent) => {
    this.tilt.x = (e.clientX / innerWidth - 0.5) * 0.12;
    this.tilt.y = (e.clientY / innerHeight - 0.5) * 0.08;
  };
  constructor(
    private container: HTMLElement,
    private id: MotionId,
    private reduced: boolean,
  ) {
    this.camera.position.set(0, 0, 7.8);
    try {
      this.renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
      this.renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
      this.renderer.setClearColor(0, 0);
      this.renderer.outputColorSpace = THREE.SRGBColorSpace;
      this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
      this.renderer.toneMappingExposure = id === "floraison" ? 0.95 : 1.05;
      this.container.append(this.renderer.domElement);
      this.renderer.domElement.setAttribute("aria-hidden", "true");
      this.renderer.domElement.addEventListener(
        "webglcontextlost",
        this.contextLost,
      );
      const generator = new THREE.PMREMGenerator(this.renderer),
        room = new RoomEnvironment();
      this.environment = generator.fromScene(room, 0.025);
      this.scene.environment = this.environment.texture;
      room.dispose();
      generator.dispose();
      this.scene.add(
        new THREE.AmbientLight(0xffffff, id === "floraison" ? 0.65 : 1.3),
      );
      const key = new THREE.DirectionalLight(
        id === "offscript" ? 0xc9ffb2 : 0xffe9ce,
        id === "floraison" ? 1.8 : 3.5,
      );
      key.position.set(3, 5, 5);
      this.scene.add(key);
      const rim = new THREE.DirectionalLight(
        id === "aether" ? 0xffb48d : id === "offscript" ? 0xb9c7ff : 0xffcead,
        id === "floraison" ? 1.1 : 3,
      );
      rim.position.set(-4, 1, -1);
      this.scene.add(rim);
      const fill = new THREE.DirectionalLight(
        0xffffff,
        id === "floraison" ? 0.6 : 1.3,
      );
      fill.position.set(-2, -2, 4);
      this.scene.add(fill);
      this.scene.add(this.root);
      if (id === "aether") this.headphones();
      else if (id === "offscript") this.sculpture();
      else this.flower();
      const resize = new ResizeObserver(() => this.resize());
      resize.observe(container);
      this.observers.push(resize);
      const visibility = new IntersectionObserver((entries) => {
        this.visible = entries[0].isIntersecting;
      });
      visibility.observe(container);
      this.observers.push(visibility);
      if (!reduced)
        window.addEventListener("pointermove", this.pointer, { passive: true });
      this.resize();
    } catch {
      this.fallback();
    }
  }
  private contextLost = (event: Event) => {
    event.preventDefault();
    this.lost = true;
    this.fallback();
  };
  private fallback() {
    if (!this.container.querySelector(".scene-fallback")) {
      const div = document.createElement("div");
      div.className = "scene-fallback";
      this.container.append(div);
    }
    if (this.renderer) this.renderer.domElement.style.display = "none";
  }
  private headphones() {
    const silver = new THREE.MeshStandardMaterial({
      color: "#cbd1ce",
      metalness: 1,
      roughness: 0.22,
    });
    const edge = new THREE.MeshStandardMaterial({
      color: "#a8aaa4",
      metalness: 0.9,
      roughness: 0.32,
    });
    const leather = new THREE.MeshStandardMaterial({
      color: "#373b36",
      roughness: 0.9,
      metalness: 0.05,
    });
    this.band = new THREE.Group();
    this.root.add(this.band);
    mesh(
      new THREE.TorusGeometry(1.22, 0.072, 20, 100, Math.PI),
      silver,
      this.band,
      0,
      0.1,
    );
    const inner = mesh(
      new THREE.TorusGeometry(1.13, 0.055, 16, 100, Math.PI),
      leather,
      this.band,
      0,
      0.1,
      -0.015,
    );
    inner.scale.z = 1.8;
    for (const side of [-1, 1]) {
      const cup = new THREE.Group();
      cup.position.set(side * 1.15, -0.39, 0);
      cup.rotation.y = -side * 0.2;
      cup.rotation.z = side * 0.1;
      this.root.add(cup);
      this.cups.push(cup);
      mesh(
        new RoundedBoxGeometry(0.12, 0.6, 0.13, 4, 0.05),
        silver,
        cup,
        0,
        0.65,
        -0.06,
      );
      const shell = mesh(
        new RoundedBoxGeometry(0.68, 1.03, 0.4, 5, 0.2),
        silver,
        cup,
        0,
        0,
        -0.12,
      );
      this.shells.push(shell);
      mesh(
        new RoundedBoxGeometry(0.61, 0.95, 0.09, 5, 0.18),
        edge,
        cup,
        0,
        0,
        0.1,
      );
      mesh(
        new RoundedBoxGeometry(0.5, 0.82, 0.08, 4, 0.17),
        leather,
        cup,
        0,
        0,
        0.19,
      );
      const cushion = mesh(
        new THREE.TorusGeometry(0.26, 0.082, 16, 64),
        leather,
        cup,
        0,
        0,
        0.26,
      );
      cushion.scale.set(0.85, 1.48, 0.85);
      const groove = mesh(
        new THREE.TorusGeometry(0.255, 0.008, 8, 64),
        edge,
        cup,
        0,
        0,
        0.28,
      );
      groove.scale.set(1.12, 1.76, 1);
      mesh(
        new THREE.CylinderGeometry(0.023, 0.023, 0.1, 12),
        silver,
        cup,
        side * 0.3,
        -0.18,
        0.01,
      ).rotation.z = Math.PI / 2;
      for (let i = 0; i < 5; i++)
        mesh(
          new THREE.SphereGeometry(0.012, 8, 6),
          leather,
          cup,
          (i - 2) * 0.04,
          -0.39,
          -0.325,
        );
    }
    this.root.rotation.set(-0.12, -0.48, -0.18);
    this.root.position.y = 0.08;
    const shadowCanvas = document.createElement("canvas");
    shadowCanvas.width = 128;
    shadowCanvas.height = 128;
    const c = shadowCanvas.getContext("2d")!,
      g = c.createRadialGradient(64, 64, 0, 64, 64, 64);
    g.addColorStop(0, "rgba(47,40,26,.2)");
    g.addColorStop(1, "rgba(47,40,26,0)");
    c.fillStyle = g;
    c.fillRect(0, 0, 128, 128);
    const texture = new THREE.CanvasTexture(shadowCanvas);
    this.textures.push(texture);
    const shadow = new THREE.Sprite(
      new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        depthWrite: false,
      }),
    );
    shadow.position.set(0, -1.8, -0.5);
    shadow.scale.set(3.6, 0.45, 1);
    this.scene.add(shadow);
  }
  private sculpture() {
    const blue = new THREE.MeshPhysicalMaterial({
      color: "#122bd9",
      metalness: 0.45,
      roughness: 0.24,
      clearcoat: 1,
      clearcoatRoughness: 0.12,
    });
    const lime = new THREE.MeshStandardMaterial({
      color: "#c9ff54",
      metalness: 0.4,
      roughness: 0.28,
    });
    const steel = new THREE.MeshStandardMaterial({
      color: "#ddddcc",
      metalness: 1,
      roughness: 0.18,
    });
    const knot = mesh(
      new THREE.TorusKnotGeometry(0.87, 0.29, 160, 24, 2, 3),
      blue,
      this.root,
    );
    knot.rotation.set(0.3, -0.2, 0.2);
    this.objects.push(knot);
    const ring = mesh(
      new THREE.TorusGeometry(1.7, 0.026, 10, 100),
      steel,
      this.root,
    );
    ring.rotation.set(0.7, 0.25, -0.3);
    this.objects.push(ring);
    const orb = mesh(
      new THREE.IcosahedronGeometry(0.38, 1),
      lime,
      this.root,
      1.45,
      1.3,
      0.25,
    );
    this.objects.push(orb);
    const satellite = mesh(
      new RoundedBoxGeometry(0.43, 0.43, 0.43, 3, 0.05),
      steel,
      this.root,
      -1.5,
      -0.75,
      0.6,
    );
    satellite.rotation.set(0.4, 0.6, 0.3);
    this.objects.push(satellite);
    this.root.rotation.z = -0.25;
  }
  private flower() {
    const texture = petalTexture();
    this.textures.push(texture);
    const material = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.DoubleSide,
      roughness: 0.9,
      metalness: 0,
      envMapIntensity: 0.2,
    });
    const flower = new THREE.Group();
    flower.position.y = 0.45;
    this.root.add(flower);
    const petal = petalGeometry();
    for (let ring = 0; ring < 2; ring++)
      for (let i = 0; i < 6; i++) {
        const pivot = new THREE.Group();
        pivot.rotation.z = (i / 6) * Math.PI * 2 + ring * 0.52;
        flower.add(pivot);
        const p = mesh(petal, material, pivot);
        const scale = 1 - ring * 0.17;
        p.scale.set(scale, scale, scale);
        p.position.set(0, 0.04 + ring * 0.035, ring * 0.19);
        p.userData.ring = ring;
        p.userData.phase = hash(i + ring * 6);
        this.petals.push(p);
      }
    const core = new THREE.MeshStandardMaterial({
      color: "#5c4630",
      roughness: 0.85,
    });
    const pollen = new THREE.MeshStandardMaterial({
      color: "#dfb45b",
      roughness: 0.65,
    });
    mesh(
      new THREE.SphereGeometry(0.24, 32, 24),
      core,
      flower,
      0,
      0,
      0.55,
    ).scale.z = 0.55;
    for (let i = 0; i < 115; i++) {
      const angle = i * 2.399963,
        r = Math.sqrt(i / 115) * 0.28;
      const p = mesh(
        new THREE.SphereGeometry(0.015 + hash(i) * 0.007, 6, 5),
        i % 3 ? pollen : core,
        flower,
        Math.cos(angle) * r,
        Math.sin(angle) * r,
        0.58 + Math.sqrt(Math.max(0, 0.078 - r * r)) * 0.22,
      );
      p.scale.z = 1.7;
    }
    const green = new THREE.MeshStandardMaterial({
      color: "#536742",
      roughness: 0.8,
      side: THREE.DoubleSide,
    });
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(0.23, -2.5, -0.15),
      new THREE.Vector3(-0.14, -1.3, -0.13),
      new THREE.Vector3(0, 0.4, 0),
    ]);
    mesh(new THREE.TubeGeometry(curve, 40, 0.028, 9, false), green, this.root);
    for (const side of [-1, 1]) {
      const l = mesh(
        petalGeometry(0.95, 0.24),
        green,
        this.root,
        0,
        -1.05 + side * 0.3,
        -0.1,
      );
      l.rotation.set(0.3, side * 0.6, -side * 0.9);
      l.scale.set(0.9, 1, 0.6);
    }
    const positions = new Float32Array(38 * 3);
    for (let i = 0; i < 38; i++) {
      positions[i * 3] = (hash(i * 3) - 0.5) * 4.7;
      positions[i * 3 + 1] = (hash(i * 3 + 1) - 0.5) * 4.5;
      positions[i * 3 + 2] = (hash(i * 3 + 2) - 0.5) * 2;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    this.particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: "#ae8a57",
        size: 0.025,
        transparent: true,
        opacity: 0.6,
      }),
    );
    this.scene.add(this.particles);
    this.root.rotation.set(-0.24, 0.08, -0.2);
    this.root.position.y = 0.1;
  }
  private resize() {
    if (!this.renderer || this.disposed) return;
    const { width, height } = this.container.getBoundingClientRect();
    if (!width || !height) return;
    this.camera.aspect = width / height;
    this.camera.position.z =
      this.id === "offscript" ? 7.4 : this.id === "floraison" ? 7.4 : 7.6;
    if (this.camera.aspect < 0.8) this.camera.position.z += 0.9;
    this.camera.updateProjectionMatrix();
    this.renderer.setSize(width, height, false);
    this.render(0);
  }
  render(time: number) {
    if (
      !this.renderer ||
      !this.visible ||
      this.lost ||
      this.disposed ||
      document.hidden
    )
      return;
    if (time > 0 && time - this.lastFrame < 1 / 30) return;
    this.lastFrame = time;
    const t = this.reduced ? 0 : time;
    const p = this.pose;
    this.root.scale.setScalar(p.scale);
    if (this.id === "aether") {
      this.root.rotation.set(
        -0.12 + Math.sin(t * 0.3) * 0.025 + this.tilt.y,
        -0.48 + p.turn + this.tilt.x,
        -0.18 + p.roll,
      );
      this.root.position.y = 0.08 + p.lift + Math.sin(t * 0.7) * 0.035;
      this.band!.position.y = p.explode * 0.65;
      this.cups.forEach((cup, i) => {
        const side = i === 0 ? -1 : 1;
        cup.position.x = side * (1.15 + p.explode * 0.55);
        cup.rotation.y = -side * (0.2 + p.explode * 0.55);
      });
      this.shells.forEach((shell) => {
        shell.position.z = -0.12 - p.explode * 0.8;
      });
    } else if (this.id === "offscript") {
      this.root.rotation.set(
        p.turn * 0.45 + this.tilt.y,
        p.turn + this.tilt.x,
        -0.25 + p.roll,
      );
      this.root.position.y = p.lift + Math.sin(t * 0.5) * 0.05;
      this.objects.forEach((o, i) => {
        if (i > 1) o.rotation.y = t * 0.1 + p.turn * (i % 2 ? 1 : -1);
      });
    } else {
      this.root.rotation.set(
        -0.24 + this.tilt.y + p.turn * 0.15,
        0.08 + p.turn + this.tilt.x,
        -0.2 + p.roll,
      );
      this.root.position.y = 0.1 + p.lift + Math.sin(t * 0.4) * 0.025;
      this.petals.forEach((petal) => {
        const ring = petal.userData.ring as number;
        petal.rotation.x =
          (1 - p.bloom) * (1.3 - ring * 0.12) +
          Math.sin(t * 0.5 + petal.userData.phase * 6) * 0.018;
      });
      if (this.particles)
        this.particles.rotation.z = p.turn * 0.12 + Math.sin(t * 0.1) * 0.03;
    }
    this.renderer.render(this.scene, this.camera);
  }
  dispose() {
    this.disposed = true;
    this.observers.forEach((o) => o.disconnect());
    window.removeEventListener("pointermove", this.pointer);
    this.renderer?.domElement.removeEventListener(
      "webglcontextlost",
      this.contextLost,
    );
    const geometries = new Set<THREE.BufferGeometry>(),
      materials = new Set<THREE.Material>();
    this.scene.traverse((o) => {
      if (o instanceof THREE.Mesh || o instanceof THREE.Points) {
        geometries.add(o.geometry);
        const m = o.material;
        (Array.isArray(m) ? m : [m]).forEach((v) => materials.add(v));
      } else if (o instanceof THREE.Sprite) materials.add(o.material);
    });
    geometries.forEach((g) => g.dispose());
    materials.forEach((m) => m.dispose());
    this.textures.forEach((t) => t.dispose());
    this.environment?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer?.domElement.remove();
  }
}
