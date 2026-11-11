import * as THREE from "three";

/** Burrow's voxel underworld: one tunnel, five chambers, a hill and a tree. All coordinates are in voxels. */
export const V = 0.25;
let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
type Vox = [number, number, number, string];
const box = new THREE.BoxGeometry(1, 1, 1);

export const tunnelPath = new THREE.CatmullRomCurve3(
  [[0, 3, 2], [0, -9, -12], [3, -18, -40], [-2, -24, -75], [0, -30, -120], [-4, -36, -165], [-6, -42, -205], [2, -48, -245], [4, -54, -285], [0, -58, -325], [0, -62, -358]].map(
    ([x, y, z]) => new THREE.Vector3(x, y, z),
  ),
  false,
  "centripetal",
);
export const TUNNEL_R = 5;
export const chambers = {
  bone: { c: new THREE.Vector3(0, -30, -120), r: new THREE.Vector3(24, 18, 32) },
  river: { c: new THREE.Vector3(-6, -42, -205), r: new THREE.Vector3(30, 17, 28) },
  crystal: { c: new THREE.Vector3(4, -54, -285), r: new THREE.Vector3(24, 22, 26) },
  heart: { c: new THREE.Vector3(0, -62, -360), r: new THREE.Vector3(21, 18, 21) },
};
const chamberList = Object.values(chambers);
const ell = (p: THREE.Vector3, ch: { c: THREE.Vector3; r: THREE.Vector3 }) => {
  const dx = (p.x - ch.c.x) / ch.r.x, dy = (p.y - ch.c.y) / ch.r.y, dz = (p.z - ch.c.z) / ch.r.z;
  return dx * dx + dy * dy + dz * dz;
};
export const hillHeight = (x: number, z: number) => Math.floor(9 * Math.exp(-((x - 8) ** 2 + (z + 16) ** 2) / 1500) + Math.sin(x * 0.12) * 0.8 + Math.cos(z * 0.1) * 0.8);
export const TREE = new THREE.Vector3(18, 0, -24);

/** Frames along the tunnel: tangent, side and up, sampled densely. */
export function tunnelFrames(step = 0.6) {
  const n = Math.ceil(tunnelPath.getLength() / step);
  const pts: THREE.Vector3[] = [], side: THREE.Vector3[] = [], up: THREE.Vector3[] = [];
  const worldUp = new THREE.Vector3(0, 1, 0);
  for (let i = 0; i <= n; i++) {
    const u = i / n, p = tunnelPath.getPointAt(u), t = tunnelPath.getTangentAt(u);
    const s = new THREE.Vector3().crossVectors(t, worldUp).normalize();
    pts.push(p);
    side.push(s);
    up.push(new THREE.Vector3().crossVectors(s, t).normalize());
  }
  return { pts, side, up, n };
}

function material(lit: boolean, mods?: (shader: THREE.WebGLProgramParametersWithUniforms) => void) {
  const m = lit ? new THREE.MeshLambertMaterial() : new THREE.MeshBasicMaterial();
  if (mods) m.onBeforeCompile = mods;
  return m;
}
export function voxels(list: Vox[], lit = true, size = V, mods?: (shader: THREE.WebGLProgramParametersWithUniforms) => void) {
  const mesh = new THREE.InstancedMesh(box, material(lit, mods), Math.max(1, list.length));
  const m = new THREE.Matrix4(), c = new THREE.Color();
  list.forEach(([x, y, z, col], i) => {
    mesh.setMatrixAt(i, m.makeScale(size, size, size).setPosition(x * size, y * size, z * size));
    mesh.setColorAt(i, c.set(col));
  });
  mesh.count = list.length;
  mesh.frustumCulled = false;
  return mesh;
}
/** Desaturate a lit material until the bloom brings colour back. */
export const greyable = (u: { uGrey: { value: number } }) => (shader: THREE.WebGLProgramParametersWithUniforms) => {
  shader.uniforms.uGrey = u.uGrey;
  shader.fragmentShader = shader.fragmentShader
    .replace("#include <common>", "#include <common>\nuniform float uGrey;")
    .replace("#include <color_fragment>", "#include <color_fragment>\nfloat greyLum = dot(diffuseColor.rgb, vec3(0.3, 0.59, 0.11));\ndiffuseColor.rgb = mix(diffuseColor.rgb, vec3(greyLum) * vec3(0.86, 0.88, 0.94), uGrey);");
};

export function buildWorld() {
  seed = 7;
  const frames = tunnelFrames();
  const probe = new THREE.Vector3();
  const zone = (_x: number, y: number, z: number) => (y > -7 && z > -30 ? "soil" : z > -92 ? "soil" : z > -168 ? "bone" : z > -248 ? "river" : z > -322 ? "crystal" : "heart");
  const palette: Record<string, string[]> = {
    soil: ["#5a3b24", "#6b4a2e", "#7d5634", "#4a3020"],
    bone: ["#7a4a3a", "#8a5a44", "#6a3e32", "#5a352c"],
    river: ["#2e3550", "#3b4466", "#262c44", "#46507a"],
    crystal: ["#241f3a", "#2f2850", "#3a3060", "#1c1830"],
    heart: ["#3a2028", "#4a2630", "#2e1820", "#5a2c2c"],
  };
  const caves = buildCaves(frames, zone, palette);
  // Hill: grass over a little soil, with the burrow mouth left open.
  const surface: Vox[] = [];
  for (let x = -70; x <= 70; x++)
    for (let z = -70; z <= 40; z++) {
      if (Math.hypot(x, z - 1) < 5.5) continue;
      const h = hillHeight(x, z);
      surface.push([x, h, z, rnd() > 0.93 ? "#2f6b4f" : "#5ba86a"], [x, h - 1, z, "#6b4a2e"]);
      if (rnd() > 0.96) surface.push([x, h + 1, z, "#a8d46f"]);
    }
  // The tree: a broad trunk and crooked branches; blossom clusters wait at the tips.
  const tree: Vox[] = [], tips: THREE.Vector3[] = [];
  const base = TREE.clone().setY(hillHeight(TREE.x, TREE.z));
  const line = (a: THREE.Vector3, b: THREE.Vector3, r: number, col: string) => {
    const n = Math.ceil(a.distanceTo(b) * 1.5);
    for (let i = 0; i <= n; i++) {
      const p = a.clone().lerp(b, i / n), rr = r * (1 - (i / n) * 0.4);
      for (let x = -rr; x <= rr; x++) for (let z = -rr; z <= rr; z++) if (x * x + z * z <= rr * rr + 0.5) tree.push([Math.round(p.x + x), Math.round(p.y), Math.round(p.z + z), col]);
    }
  };
  const top = base.clone().add(new THREE.Vector3(0, 30, 0));
  line(base, top, 3.2, "#6b4a2e");
  const branch = (from: THREE.Vector3, dir: THREE.Vector3, len: number, r: number, depth: number) => {
    const to = from.clone().addScaledVector(dir, len);
    line(from, to, r, depth > 1 ? "#5a3b24" : "#7d5634");
    if (depth === 0) return void tips.push(to);
    for (let k = 0; k < 3; k++) {
      const d = dir.clone().add(new THREE.Vector3((rnd() - 0.5) * 1.4, 0.35 + rnd() * 0.5, (rnd() - 0.5) * 1.4)).normalize();
      branch(to, d, len * 0.68, Math.max(0.6, r * 0.6), depth - 1);
    }
  };
  for (let k = 0; k < 4; k++) {
    const a = (k / 4) * Math.PI * 2 + 0.4;
    branch(top.clone().addScaledVector(new THREE.Vector3(0, -1, 0), k * 3), new THREE.Vector3(Math.cos(a), 0.55, Math.sin(a)).normalize(), 12, 1.6, 2);
  }
  const blossoms = tips.map((t) => {
    const list: Vox[] = [];
    const r = 2.5 + rnd() * 2;
    for (let x = -r; x <= r; x++) for (let y = -r * 0.7; y <= r * 0.7; y++) for (let z = -r; z <= r; z++)
      if (x * x + y * y * 2 + z * z <= r * r && rnd() > 0.15) list.push([Math.round(x), Math.round(y), Math.round(z), y > 0.5 ? "#ffd6e6" : rnd() > 0.5 ? "#f7a8c4" : "#e07aa8"]);
    return { at: t, list };
  });
  // The root: from the tree down to the burrow, then along the tunnel ceiling to the heart.
  const root: { v: Vox; along: number }[] = [];
  const rootPts: THREE.Vector3[] = [];
  const entry = frames.pts[4].clone().addScaledVector(frames.up[4], (TUNNEL_R - 0.4) * 0.72).addScaledVector(frames.side[4], -(TUNNEL_R - 0.4) * 0.68);
  const surfN = 30;
  for (let i = 0; i <= surfN; i++) rootPts.push(base.clone().add(new THREE.Vector3(0, -3, 0)).lerp(entry, i / surfN));

  rootPts.forEach((p, i) => {
    const along = i / (rootPts.length - 1);
    for (const [dx, dy] of [[0, 0], [1, 0], [0, -1]]) root.push({ v: [Math.round(p.x + dx), Math.round(p.y + dy), Math.round(p.z), i % 7 === 0 ? "#5a3b24" : "#7d5634"], along });
  });
  // Hanging roots and worms in the topsoil; a fossil giant in the bone hall.
  const detail: Vox[] = [], bones: Vox[] = [];
  frames.pts.forEach((p, i) => {
    const zn = zone(p.x, p.y, p.z), up = frames.up[i], side = frames.side[i];
    if (zn === "soil" && p.y < -6 && i % 9 === 0) {
      const off = (rnd() - 0.5) * 6, len = 2 + Math.floor(rnd() * 4);
      for (let k = 0; k < len; k++) detail.push([Math.round(p.x + side.x * off), Math.round(p.y + up.y * (TUNNEL_R - k)), Math.round(p.z + side.z * off), "#8a6a44"]);
    }
    if (zn === "bone" && ell(p, chambers.bone) < 0.85) {
      for (const k of [0, 1]) bones.push([Math.round(p.x + up.x * (8.5 + k)), Math.round(p.y + up.y * (8.5 + k)), Math.round(p.z + up.z * (8.5 + k)), i % 5 < 2 ? "#e6dcc0" : "#c8bca0"]);
      if (i % 6 === 0)
        for (let a = -0.5; a <= Math.PI + 0.5; a += 0.08) {
          const rr = 8;
          bones.push([Math.round(p.x + (side.x * Math.cos(a) + up.x * Math.sin(a)) * rr), Math.round(p.y + up.y * Math.sin(a) * rr + side.y * Math.cos(a) * rr), Math.round(p.z + (side.z * Math.cos(a) + up.z * Math.sin(a)) * rr), "#e6dcc0"]);
        }
    }
  });
  // The skull, watching from above the bone hall's exit.
  const sk = tunnelPath.getPointAt(0.43);
  for (let x = -7; x <= 7; x++) for (let y = 0; y <= 8; y++) for (let z = -9; z <= 6; z++) {
    const shell = Math.abs(x) === 7 || y === 0 || y === 8 || z === -9 || z === 6;
    if (!shell) continue;
    const socket = z === 6 && y > 3 && y < 7 && (Math.abs(x - 3.5) < 1.6 || Math.abs(x + 3.5) < 1.6);
    const tooth = z === 6 && y < 2 && x % 2 === 0;
    bones.push([Math.round(sk.x + x), Math.round(sk.y + 9 + y), Math.round(sk.z + z), socket ? "#1c1410" : tooth ? "#ffffff" : y > 5 ? "#e6dcc0" : "#c8bca0"]);
  }
  // River: a glowing water surface and dripping stalactites.
  const water: Vox[] = [];
  const rv = chambers.river, wl = Math.round(rv.c.y - rv.r.y * 0.45);
  for (let x = -rv.r.x; x <= rv.r.x; x++) for (let z = -rv.r.z; z <= rv.r.z; z++) {
    probe.set(rv.c.x + x, wl, rv.c.z + z);
    if (ell(probe, rv) < 0.98) water.push([probe.x, wl, probe.z, rnd() > 0.8 ? "#3d8fbf" : "#1f5f8f"]);
  }
  for (let k = 0; k < 34; k++) {
    const a = rnd() * Math.PI * 2, rr = Math.sqrt(rnd()) * 0.85;
    const x = rv.c.x + Math.cos(a) * rv.r.x * rr, z = rv.c.z + Math.sin(a) * rv.r.z * rr;
    if (frames.pts.some((p) => Math.hypot(p.x - x, p.z - z) < 9)) continue;
    probe.set(x, rv.c.y, z);
    const topY = rv.c.y + rv.r.y * Math.sqrt(Math.max(0, 1 - ((x - rv.c.x) / rv.r.x) ** 2 - ((z - rv.c.z) / rv.r.z) ** 2));
    const len = 3 + Math.floor(rnd() * 7);
    for (let i = 0; i < len; i++) detail.push([Math.round(x), Math.round(topY - i), Math.round(z), i === len - 1 ? "#9fd3e8" : "#46507a"]);
  }
  // Crystals grow inward from the hall's walls.
  const crystals: Vox[] = [];
  const cr = chambers.crystal;
  for (let k = 0; k < 90; k++) {
    const d = new THREE.Vector3(rnd() - 0.5, rnd() - 0.65, rnd() - 0.5).normalize();
    const at = cr.c.clone().add(new THREE.Vector3(d.x * cr.r.x, d.y * cr.r.y, d.z * cr.r.z).multiplyScalar(0.98));
    const dir = cr.c.clone().sub(at).normalize().add(new THREE.Vector3(0, 0.6, 0)).normalize();
    const len = 7 + rnd() * 14;
    const tip = at.clone().addScaledVector(dir, len), midp = at.clone().addScaledVector(dir, len / 2);
    if (frames.pts.some((p) => p.distanceTo(tip) < 8 || p.distanceTo(midp) < 8)) continue;
    const cols = rnd() > 0.5 ? ["#8b7bc0", "#c9b8e8", "#5a5aa0"] : ["#3ce0c4", "#9ff0e0", "#1d8f9a"];
    for (let i = 0; i < len; i++) {
      const w = i < len * 0.4 ? 2 : i < len - 2 ? 1 : 0;
      for (let a = -w; a <= w; a++) for (let b = -w; b <= w; b++) crystals.push([Math.round(at.x + dir.x * i + a), Math.round(at.y + dir.y * i), Math.round(at.z + dir.z * i + b), cols[i > len - 3 ? 1 : a === 0 && b === 0 ? 0 : 2]]);
    }
  }
  // The heart: a knot of roots around a cold core.
  const knot: Vox[] = [];
  const hc = chambers.heart.c;
  for (let s = 0; s < 22; s++) {
    let p = hc.clone().add(new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(8));
    for (let i = 0; i < 40; i++) {
      const toward = hc.clone().sub(p).multiplyScalar(0.05);
      p = p.add(new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).multiplyScalar(1.4).add(toward));
      if (p.distanceTo(hc) < 3.6) continue;
      knot.push([Math.round(p.x), Math.round(p.y), Math.round(p.z), rnd() > 0.5 ? "#7d5634" : "#5a3b24"]);
    }
    // Strands to the walls.
    const d = new THREE.Vector3(rnd() - 0.5, rnd() - 0.5, rnd() - 0.5).normalize();
    for (let i = 7; i < 12; i++) knot.push([Math.round(hc.x + d.x * i), Math.round(hc.y + d.y * i), Math.round(hc.z + d.z * i), "#5a3b24"]);
  }
  const core: Vox[] = [];
  for (let x = -3; x <= 3; x++) for (let y = -3; y <= 3; y++) for (let z = -3; z <= 3; z++) if (x * x + y * y + z * z <= 10) core.push([hc.x + x, hc.y + y, hc.z + z, "#ffffff"]);
  return { frames, caves, bones, surface, tree, blossoms, root, detail, water, crystals, knot, core, waterLevel: wl };
}

const noise3 = (x: number, y: number, z: number) => Math.sin(x * 0.31 + Math.sin(z * 0.17) * 2) * Math.cos(y * 0.27 + x * 0.05) + Math.sin(z * 0.23 + y * 0.11) * 0.6;
const hash3 = (x: number, y: number, z: number) => { const h = Math.sin(x * 127.1 + y * 311.7 + z * 74.7) * 43758.5453; return h - Math.floor(h); };
/**
 * Smooth rock: a tube for each tunnel stretch and a sculpted shell for each
 * chamber, painted per vertex with strata bands, so the voxel sprites read clearly
 * against them. Chamber shells get holes where the tunnel enters and leaves.
 */
function buildCaves(frames: ReturnType<typeof tunnelFrames>, zone: (x: number, y: number, z: number) => string, palette: Record<string, string[]>) {
  const colorAt = (x: number, y: number, z: number, out: THREE.Color) => {
    const zn = zone(x, y, z), cols = palette[zn];
    const band = Math.floor((y + noise3(x, 0, z) * 2.5) / 3.5);
    out.set(cols[((band % cols.length) + cols.length) % cols.length]);
    const h = hash3(Math.round(x), Math.round(y), Math.round(z));
    if (zn === "soil" && h > 0.94) out.set(h > 0.97 ? "#9aa0b4" : "#c8a07a");
    if (zn === "bone" && h > 0.96) out.set("#e6dcc0");
    if (zn === "heart" && h > 0.9) out.set(h > 0.95 ? "#ff8a3d" : "#c4506b");
    if (zn === "crystal" && h > 0.95) out.set("#8b7bc0");
    return out;
  };
  const paint = (geo: THREE.BufferGeometry, push: (v: THREE.Vector3, i: number) => void) => {
    const pos = geo.getAttribute("position"), colors = new Float32Array(pos.count * 3), v = new THREE.Vector3(), c = new THREE.Color();
    for (let i = 0; i < pos.count; i++) {
      v.fromBufferAttribute(pos, i);
      push(v, i);
      pos.setXYZ(i, v.x, v.y, v.z);
      colorAt(v.x, v.y, v.z, c).toArray(colors, i * 3);
    }
    geo.setAttribute("color", new THREE.BufferAttribute(colors, 3));
    geo.computeVertexNormals();
    return geo;
  };
  const meshes: THREE.Mesh[] = [];
  const holes: THREE.Vector4[] = [];
  const inChamber = (p: THREE.Vector3, k = 1) => chamberList.some((ch) => ell(p, ch) < k);
  // Tunnel stretches between chambers.
  let run: THREE.Vector3[] = [], runStart = 0, runEnd = 0;
  const flush = () => {
    if (run.length > 3) {
      const curve = new THREE.CatmullRomCurve3(run);
      const geo = new THREE.TubeGeometry(curve, run.length * 2, TUNNEL_R + 0.8, 26, false);
      // Tube normals point away from the axis: roughen the rock along them.
      const normals = geo.getAttribute("normal"), nv = new THREE.Vector3();
      paint(geo, (v, i) => {
        const n = noise3(v.x, v.y, v.z) * 0.7 + (hash3(Math.round(v.x * 2), Math.round(v.y * 2), Math.round(v.z * 2)) - 0.5) * 0.4;
        v.addScaledVector(nv.fromBufferAttribute(normals, i), n);
      });
      const uv = geo.getAttribute("uv"), along = new Float32Array(uv.count);
      for (let i = 0; i < uv.count; i++) along[i] = runStart + uv.getX(i) * (runEnd - runStart);
      geo.setAttribute("along", new THREE.BufferAttribute(along, 1));
      meshes.push(new THREE.Mesh(geo));
    }
    run = [];
  };
  frames.pts.forEach((p, i) => {
    const above = p.y > hillHeight(p.x, p.z) - 2;
    if (above || inChamber(p, 0.8)) flush();
    else {
      if (!run.length) runStart = i / frames.n;
      run.push(p.clone());
      runEnd = i / frames.n;
    }
    // Where the path crosses a chamber's skin, cut a doorway.
    for (const ch of chamberList) {
      const e = ell(p, ch);
      if (Math.abs(e - 1.02) < 0.04 && !holes.some((h) => Math.hypot(h.x - p.x, h.y - p.y, h.z - p.z) < 6)) holes.push(new THREE.Vector4(p.x, p.y, p.z, TUNNEL_R + 0.2));
    }
  });
  flush();
  for (const ch of chamberList) {
    const geo = new THREE.SphereGeometry(1, 72, 48);
    let bu = 0, bd = Infinity;
    frames.pts.forEach((p, i) => { const d = p.distanceToSquared(ch.c); if (d < bd) { bd = d; bu = i / frames.n; } });
    geo.setAttribute("along", new THREE.BufferAttribute(new Float32Array(geo.getAttribute("position").count).fill(bu), 1));
    paint(geo, (v) => {
      const d = v.clone();
      v.set(ch.c.x + d.x * ch.r.x, ch.c.y + d.y * ch.r.y, ch.c.z + d.z * ch.r.z);
      const n = noise3(v.x * 1.4, v.y * 1.4, v.z * 1.4) * 1.6 + (hash3(Math.round(v.x), Math.round(v.y), Math.round(v.z)) - 0.5) * 0.6;
      v.add(d.normalize().multiplyScalar(n + 1));
    });
    meshes.push(new THREE.Mesh(geo));
  }
  return { meshes, holes };
}

/** Pip: a small mole with pink hands, an acorn cap and a lantern on a stick. */
export function buildPip() {
  const body: Vox[] = [], cap: Vox[] = [], lamp: Vox[] = [];
  for (let x = -2; x <= 2; x++) for (let y = 0; y <= 3; y++) for (let z = -3; z <= 2; z++) if (x * x / 5 + (y - 1.5) ** 2 / 3 + z * z / 8 <= 1.05) body.push([x, y, z, y < 1 ? "#7a6060" : "#4a3b38"]);
  body.push([0, 1.5, 3, "#f47c7c"], [-1, 2, 2, "#0b0d1f"], [1, 2, 2, "#0b0d1f"], [-2, 0, 2, "#f4b6a0"], [2, 0, 2, "#f4b6a0"]);
  for (let x = -2; x <= 2; x++) for (let z = -2; z <= 2; z++) if (x * x + z * z <= 5) cap.push([x, 4, z, "#9a6a52"]);
  cap.push([0, 5, 0, "#6b4a2e"]);
  for (let y = 0; y < 5; y++) lamp.push([3, y + 1, 2, "#7d5634"]);
  lamp.push([3, 6, 2, "#ffd34d"], [3, 5, 2, "#ffcf8a"]);
  const group = new THREE.Group(), s = V * 0.36;
  const bodyMesh = voxels(body, true, s), capMesh = voxels(cap, true, s), lampMesh = voxels(lamp, false, s);
  group.add(bodyMesh, capMesh, lampMesh);
  return { group, capMesh, lampMesh };
}
