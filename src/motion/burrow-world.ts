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
  // Spatial hash of tunnel samples for the "is this air?" test.
  const grid = new Map<string, number[]>(), G = 6;
  const key = (x: number, y: number, z: number) => `${Math.floor(x / G)},${Math.floor(y / G)},${Math.floor(z / G)}`;
  frames.pts.forEach((p, i) => {
    const k = key(p.x, p.y, p.z);
    (grid.get(k) ?? grid.set(k, []).get(k)!).push(i);
  });
  const probe = new THREE.Vector3();
  const air = (x: number, y: number, z: number) => {
    probe.set(x, y, z);
    for (const ch of chamberList) if (ell(probe, ch) < 1) return true;
    const gx = Math.floor(x / G), gy = Math.floor(y / G), gz = Math.floor(z / G);
    for (let a = -1; a <= 1; a++) for (let b = -1; b <= 1; b++) for (let c = -1; c <= 1; c++)
      for (const i of grid.get(`${gx + a},${gy + b},${gz + c}`) ?? []) if (frames.pts[i].distanceToSquared(probe) < TUNNEL_R * TUNNEL_R) return true;
    // Above the hill's skin is open air; the hill itself is built separately.
    return y >= hillHeight(x, z) - 1;
  };
  const zone = (_x: number, y: number, z: number) => (y > -7 && z > -30 ? "soil" : z > -92 ? "soil" : z > -168 ? "bone" : z > -248 ? "river" : z > -322 ? "crystal" : "heart");
  const palette: Record<string, string[]> = {
    soil: ["#5a3b24", "#6b4a2e", "#7d5634", "#4a3020"],
    bone: ["#7a4a3a", "#8a5a44", "#6a3e32", "#5a352c"],
    river: ["#2e3550", "#3b4466", "#262c44", "#46507a"],
    crystal: ["#241f3a", "#2f2850", "#3a3060", "#1c1830"],
    heart: ["#3a2028", "#4a2630", "#2e1820", "#5a2c2c"],
  };
  const walls = new Map<number, Vox>(), glow: Vox[] = [];
  const pack = (x: number, y: number, z: number) => (x + 512) * 1048576 + (y + 512) * 1024 + (z + 512);
  const addWall = (x: number, y: number, z: number) => {
    x = Math.round(x); y = Math.round(y); z = Math.round(z);
    const k = pack(x, y, z + 400);
    if (walls.has(k) || air(x, y, z)) return;
    const zn = zone(x, y, z), cols = palette[zn];
    let col = cols[Math.floor(rnd() * cols.length)];
    if (zn === "soil" && rnd() > 0.94) col = rnd() > 0.5 ? "#8a8a96" : "#a8a0a0";
    if (zn === "bone" && rnd() > 0.97) col = "#e6dcc0";
    if (zn === "heart" && rnd() > 0.93) { glow.push([x, y, z, rnd() > 0.5 ? "#ff8a3d" : "#c4506b"]); return; }
    walls.set(k, [x, y, z, col]);
  };
  // Tunnel walls: two rings around every sample.
  frames.pts.forEach((p, i) => {
    for (const rr of [TUNNEL_R + 0.6, TUNNEL_R + 1.4]) {
      const steps = Math.ceil(Math.PI * 2 * rr * 1.3);
      for (let a = 0; a < steps; a++) {
        const t = (a / steps) * Math.PI * 2;
        addWall(p.x + (frames.side[i].x * Math.cos(t) + frames.up[i].x * Math.sin(t)) * rr, p.y + (frames.side[i].y * Math.cos(t) + frames.up[i].y * Math.sin(t)) * rr, p.z + (frames.side[i].z * Math.cos(t) + frames.up[i].z * Math.sin(t)) * rr);
      }
    }
  });
  // Chamber shells.
  for (const ch of chamberList) {
    for (let x = -ch.r.x - 2; x <= ch.r.x + 2; x++)
      for (let y = -ch.r.y - 2; y <= ch.r.y + 2; y++)
        for (let z = -ch.r.z - 2; z <= ch.r.z + 2; z++) {
          probe.set(ch.c.x + x, ch.c.y + y, ch.c.z + z);
          const e = ell(probe, ch);
          if (e >= 1 && e < 1.22) addWall(probe.x, probe.y, probe.z);
        }
  }
  // Hill: grass over a little soil, with the burrow mouth left open.
  const surface: Vox[] = [];
  for (let x = -70; x <= 70; x++)
    for (let z = -70; z <= 40; z++) {
      if (Math.hypot(x, z - 1) < 5.5) continue;
      const h = hillHeight(x, z);
      surface.push([x, h, z, rnd() > 0.85 ? "#2f6b4f" : rnd() > 0.5 ? "#5ba86a" : "#4f9a5e"], [x, h - 1, z, "#6b4a2e"]);
      if (rnd() > 0.93) surface.push([x, h + 1, z, "#4f9a5e"]);
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
  const entry = frames.pts[4].clone().addScaledVector(frames.up[4], TUNNEL_R - 0.6);
  const surfN = 30;
  for (let i = 0; i <= surfN; i++) rootPts.push(base.clone().add(new THREE.Vector3(0, -3, 0)).lerp(entry, i / surfN));
  frames.pts.forEach((p, i) => i > 4 && rootPts.push(p.clone().addScaledVector(frames.up[i], TUNNEL_R - 0.4).addScaledVector(frames.side[i], Math.sin(i * 0.05) * 1.5)));
  rootPts.forEach((p, i) => {
    const along = i / (rootPts.length - 1);
    for (const [dx, dy] of [[0, 0], [1, 0], [0, -1]]) root.push({ v: [Math.round(p.x + dx), Math.round(p.y + dy), Math.round(p.z), i % 7 === 0 ? "#5a3b24" : "#7d5634"], along });
  });
  // Hanging roots and worms in the topsoil; a fossil giant in the bone hall.
  const detail: Vox[] = [];
  frames.pts.forEach((p, i) => {
    const zn = zone(p.x, p.y, p.z), up = frames.up[i], side = frames.side[i];
    if (zn === "soil" && p.y < -6 && i % 9 === 0) {
      const off = (rnd() - 0.5) * 6, len = 2 + Math.floor(rnd() * 4);
      for (let k = 0; k < len; k++) detail.push([Math.round(p.x + side.x * off), Math.round(p.y + up.y * (TUNNEL_R - k)), Math.round(p.z + side.z * off), "#8a6a44"]);
    }
    if (zn === "bone" && ell(p, chambers.bone) < 0.85) {
      for (const k of [0, 1]) detail.push([Math.round(p.x + up.x * (13 + k)), Math.round(p.y + up.y * (13 + k)), Math.round(p.z + up.z * (13 + k)), i % 5 < 2 ? "#e6dcc0" : "#c8bca0"]);
      if (i % 8 === 0)
        for (let a = -0.6; a <= Math.PI + 0.6; a += 0.06) {
          const rr = 12.5;
          detail.push([Math.round(p.x + (side.x * Math.cos(a) + up.x * Math.sin(a)) * rr), Math.round(p.y + up.y * Math.sin(a) * rr + side.y * Math.cos(a) * rr), Math.round(p.z + (side.z * Math.cos(a) + up.z * Math.sin(a)) * rr), "#e6dcc0"]);
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
    detail.push([Math.round(sk.x + x), Math.round(sk.y + 9 + y), Math.round(sk.z + z), socket ? "#1c1410" : tooth ? "#ffffff" : y > 5 ? "#e6dcc0" : "#c8bca0"]);
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
    probe.set(x, rv.c.y, z);
    const topY = rv.c.y + rv.r.y * Math.sqrt(Math.max(0, 1 - ((x - rv.c.x) / rv.r.x) ** 2 - ((z - rv.c.z) / rv.r.z) ** 2));
    const len = 3 + Math.floor(rnd() * 7);
    for (let i = 0; i < len; i++) detail.push([Math.round(x), Math.round(topY - i), Math.round(z), i === len - 1 ? "#9fd3e8" : "#46507a"]);
  }
  // Crystals grow inward from the hall's walls.
  const crystals: Vox[] = [];
  const cr = chambers.crystal;
  for (let k = 0; k < 56; k++) {
    const d = new THREE.Vector3(rnd() - 0.5, rnd() - 0.65, rnd() - 0.5).normalize();
    const at = cr.c.clone().add(new THREE.Vector3(d.x * cr.r.x, d.y * cr.r.y, d.z * cr.r.z).multiplyScalar(0.98));
    const dir = cr.c.clone().sub(at).normalize().add(new THREE.Vector3(0, 0.6, 0)).normalize();
    const len = 4 + rnd() * 10, cols = rnd() > 0.5 ? ["#8b7bc0", "#c9b8e8", "#5a5aa0"] : ["#3ce0c4", "#9ff0e0", "#1d8f9a"];
    for (let i = 0; i < len; i++) {
      const w = i < len - 2 ? 1 : 0;
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
    for (let i = 7; i < 19; i++) knot.push([Math.round(hc.x + d.x * i), Math.round(hc.y + d.y * i), Math.round(hc.z + d.z * i), "#5a3b24"]);
  }
  const core: Vox[] = [];
  for (let x = -3; x <= 3; x++) for (let y = -3; y <= 3; y++) for (let z = -3; z <= 3; z++) if (x * x + y * y + z * z <= 10) core.push([hc.x + x, hc.y + y, hc.z + z, "#ffffff"]);
  return { frames, walls: [...walls.values()], glow, surface, tree, blossoms, root, detail, water, crystals, knot, core, waterLevel: wl };
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
  const group = new THREE.Group(), s = V * 0.55;
  const bodyMesh = voxels(body, true, s), capMesh = voxels(cap, true, s), lampMesh = voxels(lamp, false, s);
  group.add(bodyMesh, capMesh, lampMesh);
  return { group, capMesh, lampMesh };
}
