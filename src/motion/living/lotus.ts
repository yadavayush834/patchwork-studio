import * as THREE from "three";
import type { Subject } from "./look";

/** A lotus lit from inside: three rings of petals that breathe open and closed. */
let seed = 23;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

function lotusPetal(length: number, width: number) {
  const g = new THREE.PlaneGeometry(1, 1, 8, 14);
  const p = g.getAttribute("position"), colors: number[] = [];
  const base = new THREE.Color("#fff3df"), mid = new THREE.Color("#ff9ccc"), tip = new THREE.Color("#ff3d96"), c = new THREE.Color();
  for (let i = 0; i < p.count; i++) {
    const u = p.getX(i), v = p.getY(i) + 0.5;
    // Lens-shaped with a pointed tip, cupped across and curling outward along its length.
    const w = Math.pow(Math.sin(Math.PI * Math.pow(v, 0.75)), 0.55) * width * (1 - v * 0.1);
    const x = u * w;
    p.setXYZ(i, x, v * length, -x * x * 2.2 / width + Math.pow(v, 2.4) * length * 0.22);
    c.copy(base).lerp(mid, THREE.MathUtils.smoothstep(v, 0.05, 0.55)).lerp(tip, THREE.MathUtils.smoothstep(v, 0.6, 1) * (0.6 + Math.abs(u) * 0.8));
    colors.push(c.r, c.g, c.b);
  }
  g.setAttribute("color", new THREE.Float32BufferAttribute(colors, 3));
  g.computeVertexNormals();
  return g;
}

export function lotus(): Subject {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(32, 1, 0.1, 50);
  camera.position.set(0, 2.4, 8.0);
  camera.lookAt(0, 0.35, 0);
  scene.add(new THREE.AmbientLight(0xffd6e8, 0.35));
  const key = new THREE.DirectionalLight(0xfff0f4, 1.1);
  key.position.set(2, 4, 3);
  scene.add(key);
  const heart = new THREE.PointLight(0xffc89a, 3, 3.2, 1.6);
  heart.position.set(0, 0.45, 0);
  scene.add(heart);
  const flower = new THREE.Group();
  scene.add(flower);
  const mat = new THREE.MeshStandardMaterial({ vertexColors: true, roughness: 0.55, side: THREE.DoubleSide, emissive: new THREE.Color("#ff6fae"), emissiveIntensity: 0.08 });
  const rings = [
    { n: 11, len: 0.95, w: 0.6, open: 1.32, y: -0.04, twist: 0 },
    { n: 10, len: 0.95, w: 0.58, open: 0.86, y: 0.0, twist: 0.3 },
    { n: 8, len: 0.85, w: 0.54, open: 0.44, y: 0.05, twist: 0.1 },
    { n: 6, len: 0.62, w: 0.46, open: 0.16, y: 0.1, twist: 0.5 },
  ];
  const petals: { m: THREE.Group; ring: number; jitter: number }[] = [];
  rings.forEach((r, ri) => {
    const geo = lotusPetal(r.len, r.w);
    for (let i = 0; i < r.n; i++) {
      const spoke = new THREE.Group();
      spoke.rotation.y = (i / r.n) * Math.PI * 2 + r.twist;
      spoke.position.y = r.y;
      const hinge = new THREE.Group();
      hinge.position.z = 0.1 + ri * -0.02;
      spoke.add(hinge);
      const m = new THREE.Mesh(geo, mat);
      hinge.add(m);
      flower.add(spoke);
      petals.push({ m: hinge, ring: ri, jitter: (rnd() - 0.5) * 0.12 });
    }
  });
  // The seed pod and a crown of stamens.
  const pod = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.12, 0.14, 24), new THREE.MeshStandardMaterial({ color: "#f6d36a", emissive: "#ffb340", emissiveIntensity: 0.35 }));
  pod.position.y = 0.32;
  flower.add(pod);
  const stamenMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#ffd98a") });
  for (let i = 0; i < 46; i++) {
    const a = rnd() * Math.PI * 2, r = 0.17 + rnd() * 0.06, len = 0.12 + rnd() * 0.1;
    const s = new THREE.Mesh(new THREE.CylinderGeometry(0.006, 0.006, len, 4), stamenMat);
    s.position.set(Math.cos(a) * r, 0.32 + len / 2, Math.sin(a) * r);
    s.rotation.set(Math.sin(a) * 0.5, 0, -Math.cos(a) * 0.5);
    flower.add(s);
  }
  // Sparks rising out of the bloom.
  const n = 50, pos = new Float32Array(n * 3), seedArr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) seedArr.set([rnd() * Math.PI * 2, rnd(), rnd()], i * 3);
  const sparkGeo = new THREE.BufferGeometry();
  sparkGeo.setAttribute("position", new THREE.BufferAttribute(pos, 3));
  scene.add(new THREE.Points(sparkGeo, new THREE.PointsMaterial({ size: 0.014, color: "#b98aa4" })));
  const tilt = new THREE.Vector2(), screen = new THREE.Vector3(), focus = new THREE.Vector2();
  return {
    scene,
    camera,
    focus() {
      screen.set(0, 0.45, 0).applyMatrix4(flower.matrixWorld).project(camera);
      return focus.set(screen.x * 0.5 + 0.5, screen.y * 0.5 + 0.5);
    },
    resize(aspect) {
      flower.scale.setScalar(aspect < 1 ? 0.7 : 1);
    },
    update(t, p) {
      // Arrival: the bud opens; afterwards it breathes like something asleep.
      const arrive = THREE.MathUtils.smoothstep(t, 0.2, 3.2);
      const breath = Math.sin(t * 0.55) * 0.07;
      for (const { m, ring, jitter } of petals) {
        const r = rings[ring];
        m.rotation.x = 0.08 + (r.open + breath * (1 + ring * 0.5) + jitter) * arrive;
      }
      tilt.x += (p.x * p.on - tilt.x) * 0.035;
      tilt.y += (p.y * p.on - tilt.y) * 0.035;
      flower.rotation.set(tilt.y * 0.25, t * 0.08 + tilt.x * 0.5, tilt.x * -0.08);
      flower.position.y = Math.sin(t * 0.5) * 0.04;
      heart.intensity = 3 + Math.sin(t * 1.3) * 0.6 + Math.sin(t * 3.1) * 0.25;
      for (let i = 0; i < n; i++) {
        const a = seedArr[i * 3], life = (seedArr[i * 3 + 1] + t * (0.05 + seedArr[i * 3 + 2] * 0.06)) % 1;
        const r = 0.15 + life * (0.6 + seedArr[i * 3 + 2]);
        pos.set([Math.cos(a + life * 2) * r, 0.35 + life * 2.6, Math.sin(a + life * 2) * r], i * 3);
      }
      sparkGeo.attributes.position.needsUpdate = true;
    },
  };
}
