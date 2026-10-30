import * as THREE from "three";
export type ExpressiveKind =
  "crt" | "radio" | "shoe" | "radar" | "watch" | "pavilion" | "synth" | "dress";
type API = {
  root: THREE.Group;
  camera: THREE.PerspectiveCamera;
  object: (
    g: THREE.BufferGeometry,
    m: THREE.Material,
    parent?: THREE.Group,
  ) => THREE.Mesh;
  box: (
    x: number,
    y: number,
    z: number,
    m: THREE.Material,
    p: [number, number, number],
    parent?: THREE.Group,
  ) => THREE.Mesh;
  material: (
    color: string,
    metalness?: number,
    roughness?: number,
  ) => THREE.MeshStandardMaterial;
};
export function expressiveModel(
  kind: ExpressiveKind,
  tone: string,
  variant: number,
  api: API,
) {
  const { root, camera, object, box, material } = api;
  const chrome = material("#b8c2cb", 0.95, 0.18),
    black = material("#1c1e20", 0.2, 0.48),
    cream = material("#d9d2bf", 0.05, 0.6),
    color = material(tone, 0.2, 0.4);
  const textures: THREE.Texture[] = [];
  let animate = (t: number) => {};
  function cylinder(
    r: number,
    h: number,
    m: THREE.Material,
    p: [number, number, number],
  ) {
    const o = object(new THREE.CylinderGeometry(r, r, h, 64), m);
    o.position.set(...p);
    return o;
  }
  function texture(draw: (c: CanvasRenderingContext2D) => void) {
    const canvas = document.createElement("canvas");
    canvas.width = canvas.height = 512;
    draw(canvas.getContext("2d")!);
    const tex = new THREE.CanvasTexture(canvas);
    tex.colorSpace = THREE.SRGBColorSpace;
    textures.push(tex);
    return tex;
  }
  if (kind === "crt") {
    box(2.7, 1.95, 1.5, cream, [0, 0.2, -0.25]);
    box(2.25, 1.52, 0.08, black, [0, 0.25, 0.55]);
    const screen = material("#ffffff", 0.05, 0.2);
    screen.map = texture((c) => {
      c.fillStyle = variant ? "#07100e" : "#12342c";
      c.fillRect(0, 0, 512, 512);
      if (!variant) {
        c.fillStyle = "#a2ebba";
        c.font = "22px monospace";
        [
          "SYSTEM 95 / PERSONAL COMPUTER",
          "",
          "640K OUGHT TO BE ENOUGH.",
          "",
          "> A PLACE TO BEGIN AGAIN.",
          "",
          "C:\\WELCOME> _",
        ].forEach((s, i) => c.fillText(s, 30, 55 + i * 45));
        for (let y = 0; y < 512; y += 5) {
          c.fillStyle = "#0003";
          c.fillRect(0, y, 512, 1);
        }
      }
    });
    screen.emissive.set("#ffffff");
    screen.emissiveMap = screen.map;
    screen.emissiveIntensity = variant ? 0 : 0.4;
    const glass = object(new THREE.PlaneGeometry(2.08, 1.37), screen);
    glass.position.set(0, 0.29, 0.602);
    box(0.45, 0.18, 0.04, cream, [0.8, -0.65, 0.55]);
    cylinder(0.06, 0.04, color, [0.85, -0.65, 0.6]).rotation.x = Math.PI / 2;
    box(0.6, 0.4, 0.7, cream, [0, -1, -0.2]);
    box(1.65, 0.16, 1.2, cream, [0, -1.25, 0]);
    const keyboard = box(2.7, 0.14, 1, cream, [0, -1.43, 1.15]);
    keyboard.rotation.x = 0.1;
    for (let row = 0; row < 4; row++)
      for (let col = 0; col < 12; col++)
        box(0.15, 0.025, 0.11, col === 11 ? color : cream, [
          -1.15 + col * 0.2,
          -1.33,
          0.8 + row * 0.18,
        ]);
    root.rotation.set(0.1, -0.4, 0);
    camera.position.set(0, 0.8, 8.6);
    camera.lookAt(0, -0.2, 0);
  } else if (kind === "radio") {
    box(2.65, 1.9, 0.72, cream, [0, 0, 0]);
    box(2.55, 1.8, 0.035, material("#ece9df", 0, 0.8), [0, 0, 0.38]);
    for (let row = -5; row <= 5; row++)
      for (let col = -5; col <= 5; col++) {
        if (row * row + col * col > 27) continue;
        const dot = object(new THREE.CircleGeometry(0.026, 8), black);
        dot.position.set(-0.58 + col * 0.105, row * 0.105, 0.405);
      }
    const knob = cylinder(0.43, 0.16, black, [0.75, -0.12, 0.48]);
    knob.rotation.x = Math.PI / 2;
    const line = box(0.024, 0.28, 0.015, cream, [0.75, 0.04, 0.575]);
    line.rotation.z = -variant * 0.05;
    box(0.65, 0.12, 0.04, material("#e9662c", 0, 0.5), [0.72, 0.57, 0.42]);
    for (let i = 0; i < 6; i++)
      box(0.015, 0.06, 0.01, black, [0.47 + i * 0.09, 0.57, 0.45]);
    box(2.25, 0.09, 0.5, black, [0, -1.04, 0]);
    root.rotation.set(0.08, -0.3, -0.06);
    animate = (t) => {
      line.rotation.z = -variant * 0.05 + Math.sin(t * 0.3) * 0.02;
    };
  } else if (kind === "shoe") {
    const upper = material(tone, 0.08, 0.68),
      sole = material("#e4e1c9", 0.03, 0.75),
      trim = material("#182338", 0.25, 0.35);
    const soleMesh = object(new THREE.CapsuleGeometry(0.42, 1.65, 8, 24), sole);
    soleMesh.rotation.z = Math.PI / 2;
    soleMesh.scale.set(1, 0.95, 0.65);
    soleMesh.position.y = -0.55;
    const body = object(new THREE.SphereGeometry(0.8, 40, 24), upper);
    body.scale.set(1.75, 0.65, 0.63);
    body.position.set(-0.1, -0.12, 0);
    const heel = object(
      new THREE.CylinderGeometry(0.37, 0.48, 0.82, 32),
      upper,
    );
    heel.position.set(0.75, 0.28, 0);
    heel.rotation.z = -0.15;
    const cuff = object(new THREE.TorusGeometry(0.28, 0.1, 12, 40), trim);
    cuff.rotation.x = Math.PI / 2;
    cuff.position.set(0.72, 0.71, 0);
    for (let i = 0; i < 5; i++) {
      const lace = box(0.06, 0.035, 0.68, sole, [
        0.2 - i * 0.18,
        0.4 - i * 0.045,
        0,
      ]);
      lace.rotation.z = -0.18;
    }
    for (let i = 0; i < 8; i++)
      box(0.1, 0.08, 0.55, trim, [-1.05 + i * 0.29, -0.82, 0]);
    const patch = box(0.5, 0.2, 0.04, trim, [-0.3, -0.06, 0.49]);
    patch.rotation.z = -0.25;
    root.rotation.set(0.15, -0.5, -0.12);
    camera.position.set(0, 1.5, 7.7);
    camera.lookAt(0, 0, 0);
  } else if (kind === "radar") {
    cylinder(0.8, 0.2, black, [0, -1.35, 0]);
    cylinder(0.22, 1.0, chrome, [0, -0.8, 0]);
    const dishGroup = new THREE.Group();
    root.add(dishGroup);
    dishGroup.position.y = 0.3;
    dishGroup.rotation.x = 0.4;
    // A paraboloid opens toward the feed, rather than a convex sphere cap.
    const profile = Array.from({ length: 33 }, (_, i) => {
      const radius = Math.max(0.002, i / 32 * 1.35);
      return new THREE.Vector2(radius, radius * radius * 0.3);
    });
    const dishMaterial = material("#9baaa3", 0.7, 0.3);
    dishMaterial.side = THREE.DoubleSide;
    const dish = object(new THREE.LatheGeometry(profile, 64), dishMaterial, dishGroup);
    dish.rotation.x = Math.PI / 2;
    const rim = object(new THREE.TorusGeometry(1.35, 0.025, 8, 64), chrome, dishGroup);
    rim.position.z = 1.35 * 1.35 * 0.3;
    for (let i = 0; i < 3; i++) {
      const angle = i * Math.PI * 2 / 3;
      const start = new THREE.Vector3(Math.cos(angle) * 1.2, Math.sin(angle) * 1.2, 0.45);
      const end = new THREE.Vector3(0, 0, 1);
      const strut = object(new THREE.CylinderGeometry(0.016, 0.016, start.distanceTo(end), 8), chrome, dishGroup);
      strut.position.copy(start).add(end).multiplyScalar(0.5);
      strut.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), end.sub(start).normalize());
    }
    const feed = object(new THREE.ConeGeometry(0.12, 0.28, 16), color, dishGroup);
    feed.rotation.x = Math.PI / 2;
    feed.position.z = 1;
    animate = (t) => {
      dishGroup.rotation.y = t * 0.18;
    };
  } else if (kind === "watch") {
    const gold = material(tone, 0.9, 0.23),
      dial = material("#ffffff", 0.15, 0.4),
      leather = material("#352c25", 0.05, 0.8);
    box(0.95, 1.45, 0.2, leather, [0, 1.5, -0.12]);
    box(0.95, 1.45, 0.2, leather, [0, -1.5, -0.12]);
    const casing = cylinder(1.05, 0.35, gold, [0, 0, 0]);
    casing.rotation.x = Math.PI / 2;
    const face = object(new THREE.CircleGeometry(0.92, 80), dial);
    face.position.z = 0.19 + variant * 0.2;
    const faceTexture = texture((c) => {
      c.fillStyle = "#14231f";
      c.fillRect(0, 0, 512, 512);
      c.translate(256, 256);
      for (let i = 0; i < 60; i++) {
        c.save();
        c.rotate((i * Math.PI) / 30);
        c.fillStyle = i % 5 ? "#607168" : "#d2b786";
        c.fillRect(-1, -226, i % 5 ? 2 : 4, i % 5 ? 9 : 22);
        c.restore();
      }
      c.fillStyle = "#cfb88b";
      c.font = "19px serif";
      c.textAlign = "center";
      c.fillText("ÆTHELGARD", 0, -67);
      c.font = "9px monospace";
      c.fillText("MANUFACTURE / 1924", 0, -42);
      c.beginPath();
      c.arc(0, 102, 46, 0, Math.PI * 2);
      c.strokeStyle = "#6a6b52";
      c.stroke();
    });
    dial.map = faceTexture;
    dial.needsUpdate = true;
    const hands = new THREE.Group();
    root.add(hands);
    hands.position.z = 0.22 + variant * 0.2;
    const minute = box(0.035, 0.65, 0.025, gold, [0, 0.25, 0], hands),
      hour = box(0.065, 0.46, 0.03, gold, [0, 0.17, 0.02], hands);
    minute.rotation.z = -Math.PI / 3;
    hour.rotation.z = Math.PI / 3;
    const second = box(
      0.013,
      0.85,
      0.012,
      material("#b9422b", 0.2, 0.3),
      [0, 0.32, 0.04],
      hands,
    );
    cylinder(0.13, 0.23, gold, [1.13, 0, 0]).rotation.z = Math.PI / 2;
    animate = (t) => {
      second.rotation.z = (-t * Math.PI) / 30;
    };
    root.rotation.set(-0.07, -0.3, 0.1);
    camera.position.set(0, 0.5, 9.4);
    camera.lookAt(0, 0, 0);
  } else if (kind === "pavilion") {
    const wood = material("#6c4730", 0.05, 0.7),
      roof = material("#343c32", 0.15, 0.6),
      screen = material("#e9dfc4", 0, 0.95);
    box(3.2, 0.18, 2.3, wood, [0, -1.05, 0]);
    for (const x of [-1.35, 1.35])
      for (const z of [-0.85, 0.85]) box(0.1, 1.9, 0.1, wood, [x, -0.05, z]);
    box(3.5, 0.15, 2.6, roof, [0, 0.98, 0]);
    box(2.9, 0.1, 2.1, wood, [0, 0.82, 0]);
    for (const x of [-0.9, 0, 0.9]) {
      box(0.84, 1.55, 0.04, screen, [x, -0.02, -0.86]);
      for (let k = 0; k < 5; k++)
        box(0.84, 0.025, 0.06, wood, [x, -0.68 + k * 0.34, -0.82]);
      for (let k = 0; k < 3; k++)
        box(0.025, 1.55, 0.06, wood, [x - 0.28 + k * 0.28, -0.02, -0.82]);
    }
    for (let i = 0; i < 4; i++)
      box(2.7, 0.018, 0.48, material(i % 2 ? "#a9ac83" : "#b9ba93", 0, 0.9), [
        0,
        -0.94,
        -0.72 + i * 0.49,
      ]);
    const sun = object(
      new THREE.SphereGeometry(0.24, 32, 24),
      material("#df8d42", 0.05, 0.4),
    );
    sun.position.set(-1.2, 0.2, 0.8);
    root.rotation.set(0.14, -0.5, 0);
    camera.position.set(0, 2.6, 8.7);
    camera.lookAt(0, 0, 0);
  } else if (kind === "synth") {
    box(3.2, 1.65, 0.45, black, [0, 0, 0]);
    const panel = material("#8c918b", 0.6, 0.48);
    box(3.05, 1.5, 0.035, panel, [0, 0, 0.25]);
    for (let row = 0; row < 3; row++)
      for (let col = 0; col < 6; col++) {
        const knob = cylinder(
          0.105,
          0.14,
          col === variant % 6 ? color : black,
          [-1.25 + col * 0.5, 0.5 - row * 0.48, 0.34],
        );
        knob.rotation.x = Math.PI / 2;
        box(0.015, 0.07, 0.01, cream, [
          -1.25 + col * 0.5,
          0.54 - row * 0.48,
          0.415,
        ]);
      }
    const cableMat = material("#d782a8", 0.08, 0.4);
    for (let i = 0; i < 3; i++) {
      const curve = new THREE.CatmullRomCurve3([
        new THREE.Vector3(-1 + i * 0.7, -0.35, 0.48),
        new THREE.Vector3(-0.7 + i * 0.5, -1.1, 0.8),
        new THREE.Vector3(0.7 + i * 0.3, -0.15, 0.48),
      ]);
      object(
        new THREE.TubeGeometry(curve, 30, 0.025, 8, false),
        i === 1 ? color : cableMat,
      );
    }
    box(3.2, 0.12, 1, black, [0, -1.15, 0.2]);
    for (let i = 0; i < 14; i++)
      box(0.19, 0.08, 0.7, cream, [-1.4 + i * 0.215, -1.04, 0.25]);
    root.rotation.set(0.12, -0.3, -0.07);
  } else if (kind === "dress") {
    const fabric = material(tone, 0.6, 0.3);
    fabric.side = THREE.DoubleSide;
    fabric.wireframe = variant === 1;
    const vertices: number[] = [],
      indices: number[] = [];
    const rows = 46,
      segments = 96;
    for (let row = 0; row <= rows; row++) {
      const v = row / rows;
      const y = 1.5 - v * 3;
      const radius =
        v < 0.18
          ? 0.25 + v * 0.8
          : v < 0.4
            ? 0.46 - (v - 0.18) * 0.8
            : 0.28 + Math.pow((v - 0.4) / 0.6, 1.2) * 0.95;
      for (let j = 0; j <= segments; j++) {
        const a = (j / segments) * Math.PI * 2;
        const pleat = 1 + Math.sin(a * 16 + v * 2) * (0.025 + v * 0.08);
        vertices.push(
          Math.cos(a + v * 0.16) * radius * pleat,
          y + Math.sin(a * 3) * v * 0.04,
          Math.sin(a + v * 0.16) * radius * pleat * 0.65,
        );
        if (row < rows && j < segments) {
          const n = row * (segments + 1) + j;
          indices.push(
            n,
            n + 1,
            n + segments + 1,
            n + 1,
            n + segments + 2,
            n + segments + 1,
          );
        }
      }
    }
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
      "position",
      new THREE.Float32BufferAttribute(vertices, 3),
    );
    geometry.setIndex(indices);
    geometry.computeVertexNormals();
    object(geometry, fabric);
    const collar = object(new THREE.TorusGeometry(0.25, 0.018, 8, 48), chrome);
    collar.rotation.x = Math.PI / 2;
    collar.position.y = 1.51;
    root.rotation.set(0.05, -0.35, 0);
    animate = (t) => {
      root.rotation.z = Math.sin(t * 0.35) * 0.025;
    };
  }
  return { animate, dispose: () => textures.forEach((t) => t.dispose()) };
}
