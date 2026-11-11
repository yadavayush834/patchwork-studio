import * as THREE from "three";
import type { Subject } from "./look";

/** A meadow of daisies and cosmos that unfurl on arrival and lean with the wind and the cursor. */
let seed = 11;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

/** A cupped, tapering petal with its base at the origin, pointing along +y. */
export function petalGeometry(length: number, width: number, cup: number, round = 0.7) {
  const g = new THREE.PlaneGeometry(1, 1, 6, 10);
  const p = g.getAttribute("position");
  for (let i = 0; i < p.count; i++) {
    const u = p.getX(i), v = p.getY(i) + 0.5;
    const w = Math.pow(Math.sin(Math.PI * Math.min(1, v * 0.92 + 0.04)), round) * width;
    const x = u * w;
    p.setXYZ(i, x, v * length, x * x * cup + v * v * length * 0.12);
  }
  g.computeVertexNormals();
  return g;
}

interface Flower { root: THREE.Group; head: THREE.Group; petals: THREE.Mesh[]; x: number; phase: number; delay: number; tilt: number }

export function meadow(): Subject {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 60);
  camera.position.set(0, 0.6, 7);
  camera.lookAt(0, 0.9, 0);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x222222, 1.4));
  const sun = new THREE.DirectionalLight(0xffffff, 2.4);
  sun.position.set(-4, 6, 6);
  scene.add(sun);
  // Sky: slow cloud fbm, lighter top-right, so the grid has something to render everywhere.
  const sky = new THREE.Mesh(
    new THREE.PlaneGeometry(40, 22),
    new THREE.ShaderMaterial({
      uniforms: { uTime: { value: 0 } },
      depthWrite: false,
      vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uTime; varying vec2 vUv;
        float h(vec2 p){ return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
        float n(vec2 p){ vec2 i = floor(p), f = fract(p); f = f*f*(3.0-2.0*f); return mix(mix(h(i), h(i+vec2(1,0)), f.x), mix(h(i+vec2(0,1)), h(i+vec2(1,1)), f.x), f.y); }
        float fbm(vec2 p){ float a = 0.5, s = 0.0; for (int i = 0; i < 5; i++){ s += a * n(p); p *= 2.03; a *= 0.5; } return s; }
        void main(){
          vec2 p = vUv * vec2(3.2, 1.8) + vec2(uTime * 0.012, 0.0);
          float c = fbm(p + fbm(p * 0.7 + uTime * 0.01));
          float lift = smoothstep(0.1, 1.0, vUv.y) * (0.55 + 0.45 * vUv.x);
          gl_FragColor = vec4(vec3(0.02 + c * 0.14 * lift + lift * 0.05), 1.0);
        }`,
    }),
  );
  sky.position.set(0, 2, -9);
  scene.add(sky);
  const petalMat = new THREE.MeshStandardMaterial({ color: 0xf4f4f0, roughness: 0.62, side: THREE.DoubleSide });
  const centerMat = new THREE.MeshStandardMaterial({ color: 0x8a8a7a, roughness: 0.9 });
  const stemMat = new THREE.MeshStandardMaterial({ color: 0x2c2f2a, roughness: 0.9, side: THREE.DoubleSide });
  const daisy = petalGeometry(0.42, 0.12, 0.9, 0.55), cosmos = petalGeometry(0.5, 0.3, 1.4, 0.9);
  const leaf = petalGeometry(0.7, 0.12, 0.5, 0.6);
  const flowers: Flower[] = [];
  seed = 11;
  for (let k = 0; k < 64; k++) {
    const z = -3.5 + rnd() * 4.6, x = (rnd() - 0.5) * (12 + (-z) * 1.4);
    const height = 1.0 + rnd() * 1.5 + (z < -1 ? 0.6 : 0);
    const root = new THREE.Group();
    root.position.set(x, -2.6, z);
    scene.add(root);
    const bend = (rnd() - 0.5) * 0.5;
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0, 0), new THREE.Vector3(bend * 0.6, height * 0.55, 0), new THREE.Vector3(bend, height, 0));
    root.add(new THREE.Mesh(new THREE.TubeGeometry(curve, 10, 0.018, 5), stemMat));
    for (let l = 0; l < 2; l++) {
      const lf = new THREE.Mesh(leaf, stemMat);
      lf.position.copy(curve.getPoint(0.2 + l * 0.25));
      lf.rotation.set(0.3, rnd() * 6.28, (l ? -1 : 1) * (0.8 + rnd() * 0.4));
      lf.scale.setScalar(0.6 + rnd() * 0.4);
      root.add(lf);
    }
    const head = new THREE.Group();
    head.position.copy(curve.getPoint(1));
    root.add(head);
    const isCosmos = rnd() > 0.55;
    const count = isCosmos ? 8 : 15, petals: THREE.Mesh[] = [];
    for (let i = 0; i < count; i++) {
      const spoke = new THREE.Group();
      spoke.rotation.z = (i / count) * Math.PI * 2 + rnd() * 0.1;
      const petal = new THREE.Mesh(isCosmos ? cosmos : daisy, petalMat);
      spoke.add(petal);
      head.add(spoke);
      petals.push(petal);
    }
    const center = new THREE.Mesh(new THREE.SphereGeometry(isCosmos ? 0.09 : 0.11, 14, 10), centerMat);
    center.scale.z = 0.5;
    head.add(center);
    const scale = 0.55 + rnd() * 0.45;
    head.scale.setScalar(scale);
    flowers.push({ root, head, petals, x, phase: rnd() * 6.28, delay: 0.2 + (x + 8) * 0.12 + rnd() * 0.5, tilt: (rnd() - 0.5) * 0.9 });
  }
  const push = { x: 0, s: 0 };
  return {
    scene,
    camera,
    resize(aspect) {
      camera.position.z = aspect < 1 ? 11 : 7;
    },
    update(t, p) {
      (sky.material as THREE.ShaderMaterial).uniforms.uTime.value = t;
      push.x += (p.x * 7 - push.x) * 0.08;
      push.s += (p.on - push.s) * 0.05;
      for (const f of flowers) {
        // Unfurl: petals swing open in a wave across the field after the page arrives.
        const open = THREE.MathUtils.smoothstep(t, f.delay, f.delay + 2.4);
        const breathe = Math.sin(t * 0.8 + f.phase) * 0.04;
        f.petals.forEach((m, i) => {
          m.rotation.x = 1.4 * (1 - open) + 0.14 + breathe + (i % 2) * 0.06;
        });
        // Wind travels across the meadow; the cursor is a gust that parts it.
        const wind = Math.sin(t * 0.9 - f.x * 0.35) * 0.07 + Math.sin(t * 2.3 + f.phase) * 0.015;
        const dx = f.x - push.x, gust = push.s * Math.exp(-(dx * dx) / 3) * Math.sign(dx || 1) * 0.3;
        f.root.rotation.z = -(wind + gust);
        f.head.rotation.set(-0.35 + Math.sin(t * 0.6 + f.phase) * 0.05, f.tilt, 0);
      }
    },
  };
}
