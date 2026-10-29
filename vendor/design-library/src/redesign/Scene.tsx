import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { RoomEnvironment } from "three/addons/environments/RoomEnvironment.js";
import { expressiveModel, type ExpressiveKind } from "./expressive-models";
export type SceneKind =
  "mesh" | "book" | "forge" | "chime" | "lamp" | "summit" | ExpressiveKind;
export function ObjectScene({
  kind,
  tone = "#9c7156",
  variant = 0,
  label,
  className = "",
}: {
  kind: SceneKind;
  tone?: string;
  variant?: number;
  label: string;
  className?: string;
}) {
  const host = useRef<HTMLDivElement>(null);
  const [fallback, setFallback] = useState(false);
  useEffect(() => {
    const element = host.current!;
    if (!element) return;
    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        powerPreference: "low-power",
      });
    } catch {
      setFallback(true);
      return;
    }
    setFallback(false);
    renderer.setPixelRatio(Math.min(devicePixelRatio, 1.5));
    renderer.setClearColor(0, 0);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.0;
    element.append(renderer.domElement);
    const scene = new THREE.Scene(),
      camera = new THREE.PerspectiveCamera(32, 1, 0.1, 100);
    camera.position.set(0, 1, 8.4);
    camera.lookAt(0, 0, 0);
    const generator = new THREE.PMREMGenerator(renderer),
      room = new RoomEnvironment();
    const environment = generator.fromScene(room, 0.04);
    scene.environment = environment.texture;
    scene.environmentIntensity = 0.45;
    const root = new THREE.Group();
    scene.add(root);
    const geometries: THREE.BufferGeometry[] = [],
      materials: THREE.Material[] = [];
    function material(color: string, metalness = 0.0, roughness = 0.5) {
      const m = new THREE.MeshStandardMaterial({ color, metalness, roughness });
      materials.push(m);
      return m;
    }
    const ink = material("#292a29", 0.6, 0.26),
      silver = material("#d7dcdf", 1, 0.16),
      paper = material("#fff7df", 0, 0.8),
      accent = material(tone, 0.15, 0.32);
    function object(
      g: THREE.BufferGeometry,
      m: THREE.Material,
      parent: THREE.Group = root,
    ) {
      geometries.push(g);
      const mesh = new THREE.Mesh(g, m);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      parent.add(mesh);
      return mesh;
    }
    function box(
      x: number,
      y: number,
      z: number,
      m: THREE.Material,
      position: [number, number, number],
      parent = root,
    ) {
      const mesh = object(new THREE.BoxGeometry(x, y, z), m, parent);
      mesh.position.set(...position);
      return mesh;
    }
    const animated: THREE.Object3D[] = [];
    let extra: ReturnType<typeof expressiveModel> | undefined;
    if (kind === "mesh") {
      const blue = material("#244bf1", 0.45, 0.23);
      root.rotation.set(0.25, -0.4, -0.12);
      for (let x = -1; x <= 1; x++)
        for (let y = -1; y <= 1; y++)
          for (let z = -1; z <= 1; z++) {
            const p = new THREE.Vector3(x * 1.05, y * 1.05, z * 1.05);
            const node = object(
              new THREE.IcosahedronGeometry(
                x === 0 && y === 0 && z === 0 ? 0.28 : 0.11,
                1,
              ),
              x === 0 && y === 0 ? blue : silver,
            );
            node.position.copy(p);
            for (const dir of [
              new THREE.Vector3(1, 0, 0),
              new THREE.Vector3(0, 1, 0),
              new THREE.Vector3(0, 0, 1),
            ]) {
              const end = p.clone().addScaledVector(dir, 1.05);
              if (end.x > 1.1 || end.y > 1.1 || end.z > 1.1) continue;
              const link = object(
                new THREE.CylinderGeometry(0.014, 0.014, 1.05, 8),
                silver,
              );
              link.position.copy(p.clone().add(end).multiplyScalar(0.5));
              link.quaternion.setFromUnitVectors(
                new THREE.Vector3(0, 1, 0),
                dir,
              );
            }
          }
      const ring = object(new THREE.TorusGeometry(1.65, 0.014, 8, 100), blue);
      ring.rotation.y = Math.PI / 2;
      animated.push(ring);
    } else if (kind === "book") {
      root.rotation.set(0.42, -0.42, -0.18);
      const cover = material("#31563d", 0, 0.65),
        gold = material("#c3a66b", 0.8, 0.3);
      const left = new THREE.Group(),
        right = new THREE.Group();
      root.add(left, right);
      left.rotation.y = 0.17;
      right.rotation.y = -0.17;
      box(1.55, 0.12, 2.15, cover, [-0.79, -0.16, 0], left);
      box(1.55, 0.12, 2.15, cover, [0.79, -0.16, 0], right);
      for (let i = 0; i < 22; i++) {
        const y = -0.08 + i * 0.012;
        box(1.46, 0.009, 2.02, paper, [-0.76, y, 0], left);
        box(1.46, 0.009, 2.02, paper, [0.76, y, 0], right);
      }
      box(0.09, 0.35, 2.16, cover, [0, -0.03, 0]);
      box(0.028, 0.012, 2.35, gold, [0.18, 0.195, 0.12], right);
      for (let row = 0; row < 12; row++) {
        box(
          0.98,
          0.002,
          0.012,
          material("#c8bf9f", 0, 1),
          [-0.8, 0.198, -0.72 + row * 0.11],
          left,
        );
        box(
          row === 11 ? 0.6 : 0.98,
          0.002,
          0.012,
          material("#c8bf9f", 0, 1),
          [0.75, 0.198, -0.72 + row * 0.11],
          right,
        );
      }
      camera.position.set(0, 3.8, 5.4);
      camera.lookAt(0, 0, 0);
    } else if (kind === "forge") {
      root.rotation.set(0.3, -0.55, 0.15);
      const orange = material("#ff6b25", 0.2, 0.28),
        lime = material("#d7fb43", 0.1, 0.36);
      for (let i = 0; i < 4; i++) {
        const group = new THREE.Group();
        root.add(group);
        group.position.y = -1.14 + i * 0.76;
        group.rotation.y = (i * Math.PI) / 4;
        const outer = object(
          new THREE.TorusGeometry(0.8, 0.23, 4, 4),
          i % 2 ? ink : lime,
          group,
        );
        outer.rotation.x = Math.PI / 2;
        object(new THREE.OctahedronGeometry(0.35, 0), orange, group);
        animated.push(group);
      }
    } else if (kind === "chime") {
      root.rotation.set(0.04, -0.25, 0.05);
      const brass = material("#ae8050", 0.85, 0.25);
      box(2.6, 0.04, 0.045, ink, [0, 1.55, 0]);
      for (let i = 0; i < 5; i++) {
        const group = new THREE.Group();
        root.add(group);
        group.position.set(-1 + i * 0.5, 1.45, 0);
        const length = 1.1 + (i % 3) * 0.35;
        const string = object(
          new THREE.CylinderGeometry(0.006, 0.006, 0.5, 5),
          ink,
          group,
        );
        string.position.y = -0.25;
        const tube = object(
          new THREE.CylinderGeometry(0.1, 0.1, length, 32, 1, true),
          i === variant % 5 ? accent : brass,
          group,
        );
        tube.position.y = -0.5 - length / 2;
        animated.push(group);
      }
      const striker = object(new THREE.SphereGeometry(0.16, 24, 24), paper);
      striker.position.set(0, -0.1, 0.3);
    } else if (kind === "lamp") {
      root.rotation.y = -0.35;
      const stone = material(tone, 0.05, 0.66),
        warm = material("#ffe9b4", 0, 0.35);
      (warm as THREE.MeshStandardMaterial).emissive.set("#ffb65e");
      (warm as THREE.MeshStandardMaterial).emissiveIntensity = variant
        ? 0
        : 1.6;
      object(
        new THREE.CylinderGeometry(0.72, 0.79, 0.17, 64),
        stone,
      ).position.y = -1.36;
      object(
        new THREE.CylinderGeometry(0.16, 0.24, 1.7, 48),
        stone,
      ).position.y = -0.49;
      object(
        new THREE.CylinderGeometry(1.24, 1.5, 0.22, 80),
        stone,
      ).position.y = 0.55;
      object(
        new THREE.SphereGeometry(1.25, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2),
        stone,
      ).position.y = 0.65;
      const under = object(new THREE.CircleGeometry(1.2, 64), warm);
      under.rotation.x = Math.PI / 2;
      under.position.y = 0.54;
      const surface = document.createElement("canvas");
      surface.width = surface.height = 256;
      const context = surface.getContext("2d")!;
      context.fillStyle = "#e5dfd3";
      context.fillRect(0, 0, 256, 256);
      let seed = 31;
      const random = () => {
        seed = (seed * 16807) % 2147483647;
        return seed / 2147483647;
      };
      for (let i = 0; i < 4500; i++) {
        const shade = Math.floor(155 + random() * 85);
        context.fillStyle = `rgba(${shade},${shade - 6},${shade - 14},.22)`;
        context.fillRect(
          random() * 256,
          random() * 256,
          random() * 2 + 0.3,
          random() * 1.4 + 0.3,
        );
      }
      for (let y = 0; y < 256; y += 14) {
        context.strokeStyle = "rgba(120,106,83,.09)";
        context.beginPath();
        context.moveTo(0, y);
        context.bezierCurveTo(70, y + 9, 180, y - 10, 256, y + 4);
        context.stroke();
      }
      const texture = new THREE.CanvasTexture(surface);
      texture.colorSpace = THREE.SRGBColorSpace;
      texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
      texture.repeat.set(2, 2);
      stone.map = texture;
      stone.bumpMap = texture;
      stone.bumpScale = 0.035;
      stone.needsUpdate = true;
      root.userData.surfaceTexture = texture;
      const light = new THREE.PointLight("#ffce8c", variant ? 0 : 0.9, 5, 2);
      light.position.set(0, 0.2, 0);
      root.add(light);
    } else if (kind === "summit") {
      root.rotation.set(0.18, -0.5, -0.08);
      const red = material("#e54929", 0.08, 0.35),
        cream = material("#f0e9d9", 0, 0.7);
      for (let i = 0; i < 7; i++) {
        const slab = box(2.8, 0.1, 1.1, i === variant % 7 ? red : cream, [
          0,
          -1.2 + i * 0.4,
          0,
        ]);
        slab.rotation.y = i * 0.18;
        animated.push(slab);
      }
      for (const x of [-1.05, 1.05])
        for (const z of [-0.35, 0.35])
          box(0.045, 2.8, 0.045, silver, [x, 0, z]);
    } else
      extra = expressiveModel(kind as ExpressiveKind, tone, variant, {
        root,
        camera,
        object,
        box,
        material,
      });
    const ambient = new THREE.HemisphereLight("#ffffff", "#b5a38e", 1);
    scene.add(ambient);
    const key = new THREE.DirectionalLight("#fff7ec", 2.5);
    key.position.set(3, 5, 4);
    key.castShadow = true;
    key.shadow.mapSize.set(1024, 1024);
    key.shadow.normalBias = 0.025;
    scene.add(key);
    const fill = new THREE.DirectionalLight("#c5d5ff", 1.4);
    fill.position.set(-4, 1, 1);
    scene.add(fill);
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(30, 30),
      new THREE.ShadowMaterial({ opacity: 0.12 }),
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.55;
    floor.receiveShadow = true;
    scene.add(floor);
    const reduced = matchMedia("(prefers-reduced-motion: reduce)");
    let visible = true,
      frame = 0,
      last = 0,
      t = 0,
      dragging = false,
      dragX = 0,
      turn = 0,
      targetX = 0,
      targetY = 0;
    const start = performance.now();
    function draw(now: number) {
      frame = 0;
      if (!visible || document.hidden) return;
      if (now - last < 32) {
        frame = requestAnimationFrame(draw);
        return;
      }
      last = now;
      t = (now - start) / 1000;
      if (!reduced.matches) {
        root.position.y = Math.sin(t * 0.55) * 0.045;
        root.rotation.y += (targetX + turn - root.rotation.y) * 0.035;
        root.rotation.x += (targetY + 0.12 - root.rotation.x) * 0.025;
        extra?.animate(t);
        animated.forEach((node, i) => {
          if (kind === "forge") node.rotation.y = i * 0.3 + t * 0.12;
          if (kind === "chime") node.rotation.z = Math.sin(t * 1.2 + i) * 0.045;
          if (kind === "summit")
            node.rotation.y = i * 0.18 + Math.sin(t * 0.35) * 0.08;
        });
      }
      renderer.render(scene, camera);
      element.dataset.sceneReady = "true";
      element.dataset.sceneFrame = String(
        Number(element.dataset.sceneFrame || 0) + 1,
      );
      if (!reduced.matches) frame = requestAnimationFrame(draw);
    }
    function schedule() {
      if (!frame) frame = requestAnimationFrame(draw);
    }
    function resize() {
      const w = element.clientWidth,
        h = element.clientHeight;
      if (!w || !h) return;
      renderer.setSize(w, h);
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      schedule();
    }
    function pointer(e: PointerEvent) {
      const rect = element.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 0.7 - 0.25;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 0.16;
      if (dragging) {
        turn += (e.clientX - dragX) * 0.009;
        dragX = e.clientX;
      }
      schedule();
    }
    function down(e: PointerEvent) {
      dragging = true;
      dragX = e.clientX;
      element.setPointerCapture(e.pointerId);
    }
    function up() {
      dragging = false;
    }
    function visibility() {
      if (document.hidden) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    }
    const resizeObserver = new ResizeObserver(resize);
    resizeObserver.observe(element);
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (!visible) {
        cancelAnimationFrame(frame);
        frame = 0;
      } else schedule();
    });
    observer.observe(element);
    element.addEventListener("pointermove", pointer);
    element.addEventListener("pointerdown", down);
    element.addEventListener("pointerup", up);
    element.addEventListener("pointercancel", up);
    document.addEventListener("visibilitychange", visibility);
    reduced.addEventListener("change", schedule);
    resize();
    return () => {
      cancelAnimationFrame(frame);
      resizeObserver.disconnect();
      observer.disconnect();
      element.removeEventListener("pointermove", pointer);
      element.removeEventListener("pointerdown", down);
      element.removeEventListener("pointerup", up);
      element.removeEventListener("pointercancel", up);
      document.removeEventListener("visibilitychange", visibility);
      reduced.removeEventListener("change", schedule);
      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      floor.geometry.dispose();
      (floor.material as THREE.Material).dispose();
      (root.userData.surfaceTexture as THREE.Texture | undefined)?.dispose();
      extra?.dispose();
      environment.dispose();
      room.dispose();
      generator.dispose();
      key.shadow.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    };
  }, [kind, tone, variant]);
  return (
    <div
      ref={host}
      className={`rd-object rd-object-${kind} ${className}`}
      role="img"
      aria-label={label}
    >
      {fallback && (
        <div className="rd-object-fallback" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
          <i />
        </div>
      )}
    </div>
  );
}
