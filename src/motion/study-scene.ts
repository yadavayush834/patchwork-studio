import * as THREE from "three";
import { RoomEnvironment } from "three/examples/jsm/environments/RoomEnvironment.js";
import type { Pose } from "./scene";
import type { MotionId } from "./catalog";
const hash = (i: number) => {
  const x = Math.sin(i * 127.1 + 17.7) * 43758.5;
  return x - Math.floor(x);
};
/** Two original instruments. Only the visible scene draws, capped at 30 Hz. */
export class StudyScene {
  readonly pose: Pose = {
    turn: 0,
    explode: 0,
    bloom: 1,
    lift: 0,
    scale: 1,
    roll: 0,
  };
  private renderer?: THREE.WebGLRenderer;
  private scene = new THREE.Scene();
  private camera = new THREE.PerspectiveCamera(34, 1, 0.1, 100);
  private model = new THREE.Group();
  private rings: THREE.Group[] = [];
  private arms: THREE.Group[] = [];
  private particles?: THREE.Points;
  private observer: ResizeObserver;
  private intersection: IntersectionObserver;
  private visible = true;
  private last = -1;
  private disposed = false;
  private environment?: THREE.WebGLRenderTarget;
  constructor(
    private host: HTMLElement,
    private id: MotionId,
    private reduced: boolean,
  ) {
    this.camera.position.set(0, 0, 10);
    this.scene.add(this.model);
    this.scene.add(new THREE.AmbientLight(0xabc9c5, 1.5));
    const key = new THREE.DirectionalLight(0xffedce, 4);
    key.position.set(-4, 6, 5);
    this.scene.add(key);
    const rim = new THREE.DirectionalLight(
      id === "pelagic" ? 0x72ead6 : 0xed9853,
      6,
    );
    rim.position.set(4, -2, -3);
    this.scene.add(rim);
    if (id === "pelagic") this.capsule();
    else this.armillary();
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
      this.renderer.toneMappingExposure = 1.1;
      this.host.append(this.renderer.domElement);
      const pmrem = new THREE.PMREMGenerator(this.renderer),
        room = new RoomEnvironment();
      this.environment = pmrem.fromScene(room, 0.04);
      this.scene.environment = this.environment.texture;
      room.dispose();
      pmrem.dispose();
      host.classList.add("has-webgl");
    } catch {
      this.renderer?.dispose();
      this.renderer = undefined;
    }
    this.observer = new ResizeObserver(() => this.resize());
    this.observer.observe(host);
    this.intersection = new IntersectionObserver(
      ([entry]) => {
        this.visible = entry.isIntersecting;
        if (this.visible && this.reduced) this.render(0, true);
      },
      { rootMargin: "100px" },
    );
    this.intersection.observe(host);
    this.resize();
  }
  private add(
    g: THREE.BufferGeometry,
    m: THREE.Material,
    parent: THREE.Object3D = this.model,
    x = 0,
    y = 0,
    z = 0,
  ) {
    const o = new THREE.Mesh(g, m);
    o.position.set(x, y, z);
    parent.add(o);
    return o;
  }
  private tube(
    points: THREE.Vector3[],
    radius: number,
    mat: THREE.Material,
    parent: THREE.Object3D = this.model,
  ) {
    return this.add(
      new THREE.TubeGeometry(
        new THREE.CatmullRomCurve3(points),
        40,
        radius,
        8,
        false,
      ),
      mat,
      parent,
    );
  }
  private capsule() {
    const hull = new THREE.MeshStandardMaterial({
      color: 0xbac7bb,
      metalness: 0.86,
      roughness: 0.27,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x152d33,
      metalness: 0.7,
      roughness: 0.32,
    });
    const brass = new THREE.MeshStandardMaterial({
      color: 0xb4a363,
      metalness: 0.85,
      roughness: 0.24,
    });
    const glow = new THREE.MeshStandardMaterial({
      color: 0xc8ff99,
      emissive: 0xa5e965,
      emissiveIntensity: 2.8,
      roughness: 0.2,
    });
    const shell = this.add(new THREE.SphereGeometry(1.4, 64, 48), hull);
    shell.scale.set(1, 1.13, 0.87);
    // Bolted porthole; glass is an opaque layered lens so it reads on low-end GPUs too.
    this.add(
      new THREE.CylinderGeometry(0.78, 0.78, 0.18, 64),
      brass,
      this.model,
      0,
      0.12,
      1.16,
    ).rotation.x = Math.PI / 2;
    this.add(
      new THREE.TorusGeometry(0.64, 0.075, 12, 64),
      dark,
      this.model,
      0,
      0.12,
      1.28,
    );
    const glass = this.add(
      new THREE.SphereGeometry(0.59, 48, 32),
      new THREE.MeshPhysicalMaterial({
        color: 0x123a39,
        metalness: 0.52,
        roughness: 0.08,
        clearcoat: 1,
      }),
      this.model,
      0,
      0.12,
      1.29,
    );
    glass.scale.z = 0.23;
    this.add(
      new THREE.TorusGeometry(0.52, 0.018, 8, 64),
      glow,
      this.model,
      0,
      0.12,
      1.39,
    );
    const inner = this.add(
      new THREE.CircleGeometry(0.33, 48),
      new THREE.MeshBasicMaterial({ color: 0x73997a }),
      this.model,
      0,
      0.12,
      1.43,
    );
    inner.scale.y = 0.9;
    const reflection = this.add(
      new THREE.TorusGeometry(0.42, 0.012, 6, 48, Math.PI * 0.55),
      new THREE.MeshBasicMaterial({ color: 0xdafbd0 }),
      this.model,
      -0.02,
      0.16,
      1.45,
    );
    reflection.rotation.z = 0.3;
    for (let i = 0; i < 16; i++) {
      const a = (i * Math.PI) / 8;
      this.add(
        new THREE.CylinderGeometry(0.035, 0.035, 0.055, 6),
        dark,
        this.model,
        Math.cos(a) * 0.71,
        0.12 + Math.sin(a) * 0.71,
        1.27,
      ).rotation.x = Math.PI / 2;
    }
    const band = this.add(new THREE.TorusGeometry(1.4, 0.055, 8, 96), brass);
    band.rotation.x = Math.PI / 2;
    band.scale.y = 0.87;
    this.add(
      new THREE.CylinderGeometry(0.46, 0.56, 0.27, 32),
      dark,
      this.model,
      0,
      1.55,
      0,
    );
    this.add(
      new THREE.CylinderGeometry(0.3, 0.3, 0.1, 32),
      brass,
      this.model,
      0,
      1.73,
      0,
    );
    this.add(
      new THREE.CylinderGeometry(0.018, 0.018, 0.8, 8),
      hull,
      this.model,
      0.2,
      2.1,
      0,
    );
    this.add(
      new THREE.SphereGeometry(0.055, 12, 8),
      glow,
      this.model,
      0.2,
      2.52,
      0,
    );
    for (const sign of [-1, 1]) {
      const arm = new THREE.Group();
      arm.position.set(sign * 1.2, -0.55, 0.2);
      this.model.add(arm);
      this.arms.push(arm);
      this.add(new THREE.SphereGeometry(0.16, 16, 12), brass, arm);
      this.tube(
        [
          new THREE.Vector3(),
          new THREE.Vector3(sign * 0.55, -0.2, 0.3),
          new THREE.Vector3(sign * 0.6, -0.55, 0.8),
        ],
        0.055,
        hull,
        arm,
      );
      this.add(
        new THREE.BoxGeometry(0.23, 0.14, 0.36),
        dark,
        arm,
        sign * 0.6,
        -0.55,
        0.9,
      );
      for (const finger of [-1, 1])
        this.tube(
          [
            new THREE.Vector3(sign * 0.6 + finger * 0.09, -0.55, 1),
            new THREE.Vector3(sign * 0.6 + finger * 0.14, -0.7, 1.2),
            new THREE.Vector3(sign * 0.6 + finger * 0.05, -0.75, 1.3),
          ],
          0.025,
          brass,
          arm,
        );
      this.tube(
        [
          new THREE.Vector3(sign * 0.85, -1.2, -0.6),
          new THREE.Vector3(sign * 1.1, -1.7, -0.4),
          new THREE.Vector3(sign * 1.1, -1.7, 1.1),
        ],
        0.055,
        hull,
      );
      this.add(
        new THREE.CylinderGeometry(0.21, 0.21, 0.5, 24),
        dark,
        this.model,
        sign * 1.35,
        0.45,
        -0.3,
      ).rotation.z = Math.PI / 2;
      this.add(
        new THREE.SphereGeometry(0.12, 12, 8),
        glow,
        this.model,
        sign * 0.87,
        -0.5,
        1.06,
      );
    }
    const particles = new Float32Array(650 * 3);
    for (let i = 0; i < 650; i++) {
      particles[i * 3] = (hash(i * 3) - 0.5) * 14;
      particles[i * 3 + 1] = (hash(i * 3 + 1) - 0.5) * 14;
      particles[i * 3 + 2] = (hash(i * 3 + 2) - 0.5) * 8 - 2;
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute("position", new THREE.BufferAttribute(particles, 3));
    this.particles = new THREE.Points(
      geometry,
      new THREE.PointsMaterial({
        color: 0xb7e5cf,
        size: 0.017,
        transparent: true,
        opacity: 0.45,
        depthWrite: false,
      }),
    );
    this.scene.add(this.particles);
    this.model.rotation.set(-0.15, -0.45, 0.08);
  }
  private armillary() {
    const brass = new THREE.MeshStandardMaterial({
      color: 0xd0a25d,
      metalness: 0.95,
      roughness: 0.25,
    });
    const pale = new THREE.MeshStandardMaterial({
      color: 0xc9bda1,
      metalness: 0.9,
      roughness: 0.3,
    });
    const dark = new THREE.MeshStandardMaterial({
      color: 0x4a4535,
      metalness: 0.85,
      roughness: 0.27,
    });
    const core = new THREE.MeshStandardMaterial({
      color: 0xf4bb66,
      emissive: 0xda6a20,
      emissiveIntensity: 0.5,
      metalness: 0.25,
      roughness: 0.5,
    });
    this.add(new THREE.SphereGeometry(0.68, 48, 32), core);
    // Fine meridians engraved over the sun and a real radial arrangement of orbital hoops.
    for (let i = 0; i < 12; i++) {
      const ring = this.add(
        new THREE.TorusGeometry(0.686, 0.005, 4, 96),
        brass,
      );
      ring.rotation.y = (i * Math.PI) / 12;
    }
    for (let i = 0; i < 6; i++) {
      const group = new THREE.Group();
      this.model.add(group);
      this.rings.push(group);
      const radius = 1.05 + i * 0.24;
      this.add(
        new THREE.TorusGeometry(radius, i === 5 ? 0.055 : 0.029, 8, 128),
        i % 2 ? brass : pale,
        group,
      );
      if (i === 5)
        this.add(
          new THREE.TorusGeometry(radius + 0.1, 0.012, 6, 128),
          brass,
          group,
        );
      for (let k = 0; k < 72; k++) {
        const a = (k * Math.PI) / 36,
          r = radius + (k % 6 === 0 ? 0.055 : 0.027);
        const tick = this.add(
          new THREE.BoxGeometry(0.008, k % 6 === 0 ? 0.09 : 0.035, 0.018),
          dark,
          group,
          Math.sin(a) * r,
          Math.cos(a) * r,
          0,
        );
        tick.rotation.z = -a;
      }
      this.add(
        new THREE.SphereGeometry(0.07 + i * 0.013, 16, 12),
        i % 2 ? brass : pale,
        group,
        radius,
        0,
        0,
      );
    }
    const stem = this.add(
      new THREE.CylinderGeometry(0.055, 0.1, 1.2, 24),
      brass,
      this.model,
      0,
      -2.45,
      0,
    );
    stem.rotation.z = -0.12;
    this.add(
      new THREE.CylinderGeometry(0.62, 0.8, 0.13, 64),
      dark,
      this.model,
      0.08,
      -3.09,
      0,
    );
    this.add(
      new THREE.CylinderGeometry(0.62, 0.62, 0.04, 64),
      brass,
      this.model,
      0.08,
      -3,
      0,
    );
    this.model.rotation.set(0.15, -0.3, -0.15);
  }
  private resize() {
    const r = this.host.getBoundingClientRect();
    if (r.width < 1 || r.height < 1) return;
    this.camera.aspect = r.width / r.height;
    this.camera.position.z = Math.max(10, 9 / this.camera.aspect);
    this.camera.updateProjectionMatrix();
    this.renderer?.setSize(r.width, r.height, false);
    this.render(0, true);
  }
  render(time: number, force = false) {
    if (
      !this.renderer ||
      this.disposed ||
      (!force &&
        (!this.visible || document.hidden || time - this.last < 1 / 30))
    )
      return;
    this.last = time;
    const p = this.pose,
      mobile = this.host.clientWidth < 600;
    this.model.rotation.y = -0.4 + p.turn;
    this.model.rotation.z = (this.id === "pelagic" ? 0.08 : -0.15) + p.roll;
    this.model.position.y = p.lift + (this.id === "heliograph" ? 0.25 : 0);
    this.model.scale.setScalar(p.scale * (mobile ? 0.87 : 1));
    if (this.id === "pelagic") {
      this.model.rotation.x = -0.12 + p.explode * 0.2;
      this.arms.forEach((a, i) => {
        a.rotation.z = (i ? 1 : -1) * p.explode * 0.45;
      });
      if (this.particles) {
        this.particles.position.y =
          p.explode * 2 + (this.reduced ? 0 : Math.sin(time * 0.15) * 0.07);
        this.particles.rotation.y = p.turn * 0.1;
      }
    } else {
      this.model.rotation.x = 0.12 + p.explode * 0.25;
      this.rings.forEach((ring, i) => {
        ring.rotation.x = (i * 0.31 + 0.15) * (1 - p.explode * 0.7);
        ring.rotation.y =
          i * 0.47 * (1 - p.explode * 0.45) + p.turn * 0.15 * (i % 2 ? 1 : -1);
        ring.rotation.z = i * 0.16 + p.explode * i * 0.12;
        ring.position.y = p.explode * (i - 2.5) * 0.3;
      });
    }
    this.renderer.render(this.scene, this.camera);
  }
  dispose() {
    if (this.disposed) return;
    this.disposed = true;
    this.observer.disconnect();
    this.intersection.disconnect();
    this.scene.traverse((o) => {
      if (o instanceof THREE.Mesh || o instanceof THREE.Points) {
        o.geometry.dispose();
        const mats = Array.isArray(o.material) ? o.material : [o.material];
        mats.forEach((m) => m.dispose());
      }
    });
    this.environment?.dispose();
    this.renderer?.dispose();
    this.renderer?.forceContextLoss();
    this.renderer?.domElement.remove();
    this.host.classList.remove("has-webgl");
  }
}
