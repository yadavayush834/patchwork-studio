import * as THREE from "three";
import type { Subject } from "./look";

/** A swallowtail-like butterfly, painted procedurally and shaded with thin-film iridescence. */
let seed = 3;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;

function foreShape() {
  const s = new THREE.Shape();
  s.moveTo(0.02, 0.04);
  s.bezierCurveTo(0.18, 0.55, 0.52, 0.98, 1.04, 1.04);
  s.bezierCurveTo(1.2, 0.84, 1.16, 0.46, 1.0, 0.2);
  s.bezierCurveTo(0.76, 0.02, 0.42, -0.04, 0.08, -0.04);
  return s;
}
function hindShape() {
  const s = new THREE.Shape();
  s.moveTo(0.04, -0.02);
  s.bezierCurveTo(0.42, 0.06, 0.84, 0.0, 0.88, -0.32);
  s.bezierCurveTo(0.9, -0.62, 0.62, -0.86, 0.44, -0.84);
  s.bezierCurveTo(0.36, -0.98, 0.3, -1.12, 0.24, -1.1);
  s.bezierCurveTo(0.22, -0.92, 0.18, -0.6, 0.06, -0.16);
  return s;
}
/** Paint a wing in its own coordinates: gradient, veins from the root, cells, a dark border with pale spots. */
function wingTexture(shape: THREE.Shape, box: THREE.Box2, fore: boolean) {
  seed = fore ? 7 : 19;
  const size = 512, c = document.createElement("canvas");
  c.width = c.height = size;
  const g = c.getContext("2d")!;
  const tx = (x: number) => ((x - box.min.x) / (box.max.x - box.min.x)) * size;
  const ty = (y: number) => size - ((y - box.min.y) / (box.max.y - box.min.y)) * size;
  const path = new Path2D();
  shape.getPoints(80).forEach((p, i) => (i ? path.lineTo(tx(p.x), ty(p.y)) : path.moveTo(tx(p.x), ty(p.y))));
  path.closePath();
  g.save();
  g.clip(path);
  const root = [tx(0.02), ty(0)];
  const grad = g.createRadialGradient(root[0], root[1], 0, root[0], root[1], size * 1.1);
  grad.addColorStop(0, "#f7f0c8");
  grad.addColorStop(0.35, "#f2c9a6");
  grad.addColorStop(0.7, "#e9a9c7");
  grad.addColorStop(1, "#b7a6ef");
  g.fillStyle = grad;
  g.fillRect(0, 0, size, size);
  // Glitter: tiny scales catching light.
  for (let i = 0; i < 5000; i++) {
    g.fillStyle = `rgba(${rnd() > 0.5 ? "255,255,240" : "120,90,120"},${rnd() * 0.35})`;
    g.fillRect(rnd() * size, rnd() * size, 2, 2);
  }
  // Veins fan out from the root, with cross-veins forming cells.
  g.strokeStyle = "rgba(40,24,36,0.85)";
  g.lineCap = "round";
  const veins = fore ? 9 : 7;
  const ends: [number, number][] = [];
  for (let v = 0; v < veins; v++) {
    const a = fore ? 0.15 + (v / (veins - 1)) * 1.05 : -1.45 + (v / (veins - 1)) * 1.3;
    const ex = root[0] + Math.cos(a) * size * 1.3, ey = root[1] - Math.sin(a) * size * 1.3;
    g.lineWidth = 5 - v * 0.25;
    g.beginPath();
    g.moveTo(root[0], root[1]);
    g.quadraticCurveTo((root[0] + ex) / 2 + (rnd() - 0.5) * 40, (root[1] + ey) / 2 + (rnd() - 0.5) * 40, ex, ey);
    g.stroke();
    ends.push([ex, ey]);
  }
  g.lineWidth = 2.5;
  for (const r of [0.32, 0.52]) {
    g.beginPath();
    ends.forEach(([ex, ey], i) => {
      const x = root[0] + (ex - root[0]) * r * (0.9 + rnd() * 0.2), y = root[1] + (ey - root[1]) * r * (0.9 + rnd() * 0.2);
      i ? g.lineTo(x, y) : g.moveTo(x, y);
    });
    g.stroke();
  }
  g.restore();
  // Dark border band with two rows of pale spots.
  g.save();
  g.clip(path);
  g.strokeStyle = "rgba(34,20,34,0.95)";
  g.lineWidth = size * 0.13;
  g.stroke(path);
  const pts = shape.getSpacedPoints(fore ? 26 : 22);
  pts.forEach((p, i) => {
    if (Math.hypot(p.x, p.y) < 0.35) return;
    const x = tx(p.x), y = ty(p.y), cx = tx(0.4), cy = ty(fore ? 0.4 : -0.35);
    for (const [k, r, col] of [[0.075, 9, "#fff5d8"], [0.15, 6, "#f6c2e0"]] as const) {
      const ix = x + (cx - x) * k, iy = y + (cy - y) * k;
      g.fillStyle = col;
      g.beginPath();
      g.arc(ix, iy, r * (i % 2 ? 0.8 : 1.1), 0, 7);
      g.fill();
    }
  });
  g.restore();
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}
function wingMesh(shape: THREE.Shape, fore: boolean) {
  const geo = new THREE.ShapeGeometry(shape, 40);
  geo.computeBoundingBox();
  const bb = geo.boundingBox!, box = new THREE.Box2(new THREE.Vector2(bb.min.x, bb.min.y), new THREE.Vector2(bb.max.x, bb.max.y));
  const pos = geo.getAttribute("position"), uv = geo.getAttribute("uv");
  for (let i = 0; i < pos.count; i++)
    uv.setXY(i, (pos.getX(i) - box.min.x) / (box.max.x - box.min.x), (pos.getY(i) - box.min.y) / (box.max.y - box.min.y));
  const mat = new THREE.ShaderMaterial({
    side: THREE.DoubleSide,
    uniforms: { map: { value: wingTexture(shape, box, fore) }, uTime: { value: 0 } },
    vertexShader: /* glsl */ `
      varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){ vUv = uv; vec4 w = modelMatrix * vec4(position, 1.0); vN = normalize(mat3(modelMatrix) * normal); vV = normalize(cameraPosition - w.xyz); gl_Position = projectionMatrix * viewMatrix * w; }`,
    fragmentShader: /* glsl */ `
      uniform sampler2D map; uniform float uTime; varying vec2 vUv; varying vec3 vN; varying vec3 vV;
      void main(){
        vec4 t = texture2D(map, vUv);
        if (t.a < 0.5) discard;
        float facing = abs(dot(normalize(vN), vV));
        // Thin film: the hue walks as the wing turns toward and away from the viewer.
        vec3 film = 0.5 + 0.5 * cos(6.2832 * (vec3(0.0, 0.33, 0.67) + facing * 1.3 + vUv.x * 0.6 + uTime * 0.05));
        vec3 c = t.rgb * mix(vec3(1.0), 0.55 + film * 0.9, 0.55);
        c *= 0.5 + 0.75 * facing;
        gl_FragColor = vec4(c * 0.8, 1.0);
      }`,
  });
  return new THREE.Mesh(geo, mat);
}

export function butterfly(): Subject {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(34, 1, 0.1, 50);
  camera.position.set(0, 0, 5.6);
  const root = new THREE.Group();
  scene.add(root);
  const wings: { pivot: THREE.Group; side: number; fore: boolean; mats: THREE.ShaderMaterial }[] = [];
  for (const side of [1, -1])
    for (const fore of [true, false]) {
      const pivot = new THREE.Group();
      const mesh = wingMesh(fore ? foreShape() : hindShape(), fore);
      mesh.scale.set(side, 1, 1);
      pivot.add(mesh);
      root.add(pivot);
      wings.push({ pivot, side, fore, mats: mesh.material as THREE.ShaderMaterial });
    }
  // Body: thorax and abdomen glow mint, like the reference.
  const bodyMat = new THREE.MeshBasicMaterial({ color: new THREE.Color("#4fbf98") });
  const thorax = new THREE.Mesh(new THREE.CapsuleGeometry(0.06, 0.26, 6, 12), bodyMat);
  thorax.position.y = 0.0;
  const abdomen = new THREE.Mesh(new THREE.CapsuleGeometry(0.04, 0.6, 6, 12), new THREE.MeshBasicMaterial({ color: "#7da890" }));
  abdomen.position.y = -0.52;
  const head = new THREE.Mesh(new THREE.SphereGeometry(0.075, 16, 12), bodyMat);
  head.position.y = 0.27;
  root.add(thorax, abdomen, head);
  const antennaMat = new THREE.LineBasicMaterial({ color: "#5d3b62" });
  for (const side of [1, -1]) {
    const curve = new THREE.QuadraticBezierCurve3(new THREE.Vector3(0, 0.3, 0), new THREE.Vector3(side * 0.12, 0.55, 0.05), new THREE.Vector3(side * 0.3, 0.78, 0.02));
    const line = new THREE.Line(new THREE.BufferGeometry().setFromPoints(curve.getPoints(16)), antennaMat);
    root.add(line);
    const club = new THREE.Mesh(new THREE.SphereGeometry(0.025, 8, 6), antennaMat);
    club.position.set(side * 0.3, 0.78, 0.02);
    root.add(club);
  }
  // Scales shed into the air around it.
  seed = 41;
  const n = 140, dust = new Float32Array(n * 3), base = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) base.set([(rnd() - 0.5) * 6, (rnd() - 0.5) * 3.6, (rnd() - 0.5) * 2], i * 3);
  const dustGeo = new THREE.BufferGeometry();
  dustGeo.setAttribute("position", new THREE.BufferAttribute(dust, 3));
  const motes = new THREE.Points(dustGeo, new THREE.PointsMaterial({ size: 0.012, color: "#c9b2a8", transparent: true, opacity: 0.35 }));
  scene.add(motes);
  const look = new THREE.Vector2();
  return {
    scene,
    camera,
    resize(aspect) {
      root.scale.setScalar(aspect < 1 ? 0.7 : 1);
    },
    update(t, p) {
      // Slow, elegant wingbeats with a held glide every few seconds.
      const glide = 0.5 + 0.5 * Math.sin(t * 0.37);
      const beat = Math.sin(t * (2.2 + glide * 0.6));
      const flap = 0.1 + (0.5 + 0.5 * beat) * (0.8 - glide * 0.45);
      for (const w of wings) {
        w.pivot.rotation.y = -w.side * flap * (w.fore ? 1 : 0.92);
        w.pivot.rotation.z = w.side * (w.fore ? 0.05 : -0.03) * beat;
        w.mats.uniforms.uTime.value = t;
      }
      look.x += (p.x * p.on - look.x) * 0.04;
      look.y += (p.y * p.on - look.y) * 0.04;
      root.position.set(Math.sin(t * 0.21) * 0.08, 0.3 + Math.sin(t * 0.7) * 0.05 - beat * 0.02, 0);
      root.rotation.set(-0.22 - look.y * 0.25 + Math.sin(t * 0.3) * 0.05, look.x * 0.45 + Math.sin(t * 0.17) * 0.2, Math.sin(t * 0.23) * 0.06);
      for (let i = 0; i < n; i++) {
        dust[i * 3] = base[i * 3] + Math.sin(t * 0.2 + i) * 0.15;
        dust[i * 3 + 1] = ((base[i * 3 + 1] + t * 0.05 + 1.8) % 3.6) - 1.8;
        dust[i * 3 + 2] = base[i * 3 + 2];
      }
      dustGeo.attributes.position.needsUpdate = true;
    },
  };
}
