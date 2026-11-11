import * as THREE from "three";

/**
 * A procedural chawan (tea bowl) broken along shared crack curves.
 *
 * Every point on the bowl is addressed by (theta, t): theta around the axis,
 * t along the profile from the centre of the foot (0) to the rim (1).
 * Cracks are periodic functions in that space, and neighbouring shards sample
 * the very same functions, so the pieces fit together exactly when mended.
 */
const TAU = Math.PI * 2;
const outerProfile = new THREE.SplineCurve(
  [
    [0, 0.085], [0.2, 0.085], [0.33, 0.07], [0.37, 0.0], [0.45, 0.0], [0.5, 0.06],
    [0.62, 0.17], [0.8, 0.33], [0.93, 0.53], [1.0, 0.72], [1.03, 0.86],
  ].map(([x, y]) => new THREE.Vector2(x, y)),
);
const innerProfile = new THREE.SplineCurve(
  [
    [0, 0.17], [0.25, 0.175], [0.45, 0.205], [0.62, 0.28], [0.78, 0.4], [0.89, 0.56],
    [0.95, 0.72], [0.975, 0.86],
  ].map(([x, y]) => new THREE.Vector2(x, y)),
);
const outer2 = Array.from({ length: 257 }, (_, i) => outerProfile.getPointAt(i / 256));
const inner2 = Array.from({ length: 257 }, (_, i) => innerProfile.getPointAt(i / 256));
function profile(table: THREE.Vector2[], t: number) {
  const f = Math.max(0, Math.min(1, t)) * 256,
    i = Math.min(255, Math.floor(f)),
    k = f - i;
  return { r: table[i].x + (table[i + 1].x - table[i].x) * k, y: table[i].y + (table[i + 1].y - table[i].y) * k };
}
export function bowlPoint(theta: number, t: number, inner: boolean, target = new THREE.Vector3()) {
  const { r, y } = profile(inner ? inner2 : outer2, t);
  return target.set(Math.cos(theta) * r, y, Math.sin(theta) * r);
}
/** Inner radius and height at a profile position, used to size the tea surface. */
export function innerAt(t: number) {
  return profile(inner2, t);
}

// Horizontal fractures: closed, periodic in theta.
const ring1 = (th: number) => 0.38 + 0.045 * Math.sin(3 * th + 1.1) + 0.022 * Math.sin(7 * th + 2.3) + 0.007 * Math.sin(19 * th);
const ring2 = (th: number) => 0.68 + 0.06 * Math.sin(2 * th + 0.4) + 0.03 * Math.sin(5 * th + 4.1) + 0.008 * Math.sin(17 * th + 1);
interface Band { lower: (th: number) => number; upper: (th: number) => number; low: number; high: number; cracks: number[]; label: string }
let seed = 11;
const random = () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646;
function cracksAround(count: number, offset: number) {
  return Array.from({ length: count }, (_, i) => offset + (i + 0.5 + (random() - 0.5) * 0.55) * (TAU / count));
}
const bands: Band[] = [
  { lower: () => 0, upper: ring1, low: 0, high: 0.38, cracks: cracksAround(2, 0.6), label: "FOOT" },
  { lower: ring1, upper: ring2, low: 0.38, high: 0.68, cracks: cracksAround(5, 0.2), label: "BODY" },
  { lower: ring2, upper: () => 1, low: 0.68, high: 1, cracks: cracksAround(6, 0.9), label: "RIM" },
];
/** A vertical fracture within a band, parametrised by the band-normalised height v. */
function crackTheta(band: number, index: number, v: number) {
  const b = bands[band],
    n = b.cracks.length,
    base = b.cracks[index % n] + Math.floor(index / n) * TAU,
    phase = band * 3.1 + (index % n) * 1.7;
  return base + 0.11 * Math.sin(v * 3.2 + phase) + 0.035 * Math.sin(v * 11 + phase * 2) + 0.012 * Math.sin(v * 29 + phase);
}
/** Map shard-local (u, v) to bowl coordinates. Shared edges evaluate identically. */
function shardCoord(band: number, j: number, u: number, v: number) {
  const b = bands[band];
  const left = crackTheta(band, j, v),
    right = crackTheta(band, j + 1, v);
  const theta = left + (right - left) * u;
  const lo = b.lower(theta),
    hi = b.upper(theta);
  // Near the foot centre the shards meet at a single point.
  return { theta, t: band === 0 ? hi * v : lo + (hi - lo) * v };
}

export interface Shard {
  geometry: THREE.BufferGeometry;
  /** Centre of the shard in mended bowl space. */
  home: THREE.Vector3;
  /** Average outward direction of the glazed outer surface. */
  normal: THREE.Vector3;
  /** Lowest point after rotating outward-face-up, for laying it flat. */
  restLift: number;
  area: number;
  band: number;
  label: string;
}
export interface Seam { curve: THREE.CatmullRomCurve3; length: number; outer: boolean }

function buildShard(band: number, j: number): Shard {
  const U = band === 0 ? 30 : 16,
    V = band === 0 ? 12 : 10;
  const positions: number[] = [],
    uvs: number[] = [],
    indices: number[] = [];
  const geometry = new THREE.BufferGeometry();
  const tmp = new THREE.Vector3(),
    a = new THREE.Vector3(),
    b = new THREE.Vector3(),
    c = new THREE.Vector3();
  const grid = (inner: boolean) => {
    const start = positions.length / 3;
    for (let iv = 0; iv <= V; iv++)
      for (let iu = 0; iu <= U; iu++) {
        const { theta, t } = shardCoord(band, j, iu / U, iv / V);
        bowlPoint(theta, t, inner, tmp);
        positions.push(tmp.x, tmp.y, tmp.z);
        uvs.push(((theta / TAU) % 1 + 1) % 1, t);
      }
    return start;
  };
  // Group 0: outer glaze, group 1: inner glaze, group 2: raw broken clay.
  const o = grid(false);
  for (let iv = 0; iv < V; iv++)
    for (let iu = 0; iu < U; iu++) {
      const p = o + iv * (U + 1) + iu;
      indices.push(p, p + U + 1, p + 1, p + 1, p + U + 1, p + U + 2);
    }
  geometry.addGroup(0, indices.length, 0);
  const innerStart = indices.length;
  const i0 = grid(true);
  for (let iv = 0; iv < V; iv++)
    for (let iu = 0; iu < U; iu++) {
      const p = i0 + iv * (U + 1) + iu;
      indices.push(p, p + 1, p + U + 1, p + 1, p + U + 2, p + U + 1);
    }
  geometry.addGroup(innerStart, indices.length - innerStart, 1);
  // Broken edges: a strip between outer and inner along each boundary, wound outward.
  const edgeStart = indices.length;
  const centre = new THREE.Vector3();
  const mid = shardCoord(band, j, 0.5, 0.5);
  bowlPoint(mid.theta, mid.t, false, centre).add(bowlPoint(mid.theta, mid.t, true, tmp)).multiplyScalar(0.5);
  const strip = (pts: [number, number][]) => {
    const s = positions.length / 3;
    for (const [u, v] of pts) {
      const { theta, t } = shardCoord(band, j, u, v);
      bowlPoint(theta, t, false, tmp);
      positions.push(tmp.x, tmp.y, tmp.z);
      uvs.push(u, 0);
      bowlPoint(theta, t, true, tmp);
      positions.push(tmp.x, tmp.y, tmp.z);
      uvs.push(u, 1);
    }
    for (let k = 0; k < pts.length - 1; k++) {
      const q = s + k * 2;
      for (const tri of [[q, q + 2, q + 1], [q + 1, q + 2, q + 3]]) {
        a.fromArray(positions, tri[0] * 3);
        b.fromArray(positions, tri[1] * 3);
        c.fromArray(positions, tri[2] * 3);
        const n = b.clone().sub(a).cross(c.clone().sub(a));
        const away = a.clone().add(b).add(c).multiplyScalar(1 / 3).sub(centre);
        indices.push(...(n.dot(away) >= 0 ? tri : [tri[0], tri[2], tri[1]]));
      }
    }
  };
  const along = (n: number, f: (k: number) => [number, number]) => Array.from({ length: n + 1 }, (_, k) => f(k / n));
  strip(along(U, (k) => [k, 1]));
  if (band !== 0 || bands[0].cracks.length > 1) {
    strip(along(V, (k) => [0, k]));
    strip(along(V, (k) => [1, k]));
  }
  if (band !== 0) strip(along(U, (k) => [k, 0]));
  geometry.addGroup(edgeStart, indices.length - edgeStart, 2);
  geometry.setIndex(indices);
  geometry.setAttribute("position", new THREE.Float32BufferAttribute(positions, 3));
  geometry.setAttribute("uv", new THREE.Float32BufferAttribute(uvs, 2));
  geometry.computeVertexNormals();

  // Outer-surface area and outward direction (for weights, layout and burst direction).
  let area = 0;
  const normal = new THREE.Vector3(),
    home = new THREE.Vector3();
  for (let k = 0; k < innerStart; k += 3) {
    a.fromArray(positions, indices[k] * 3);
    b.fromArray(positions, indices[k + 1] * 3);
    c.fromArray(positions, indices[k + 2] * 3);
    const n = b.clone().sub(a).cross(c.clone().sub(a));
    const triArea = n.length() / 2;
    area += triArea;
    normal.addScaledVector(n.normalize(), triArea);
    home.addScaledVector(a.add(b).add(c).multiplyScalar(1 / 3), triArea);
  }
  home.multiplyScalar(1 / area).lerp(centre, 0.5);
  normal.normalize();
  geometry.translate(-home.x, -home.y, -home.z);
  const flat = new THREE.Quaternion().setFromUnitVectors(normal, new THREE.Vector3(0, 1, 0));
  let lowest = Infinity;
  const pos = geometry.getAttribute("position");
  for (let k = 0; k < pos.count; k++) lowest = Math.min(lowest, tmp.fromBufferAttribute(pos, k).applyQuaternion(flat).y);
  return { geometry, home, normal, restLift: -lowest, area, band, label: bands[band].label };
}

function seamCurve(sample: (s: number) => { theta: number; t: number }, n: number, outer: boolean, closed = false): Seam {
  const o = new THREE.Vector3(),
    i = new THREE.Vector3();
  const points = Array.from({ length: n + (closed ? 0 : 1) }, (_, k) => {
    const { theta, t } = sample(k / n);
    bowlPoint(theta, t, false, o);
    bowlPoint(theta, t, true, i);
    const out = o.clone().sub(i).normalize();
    return outer ? o.clone().addScaledVector(out, 0.004) : i.clone().addScaledVector(out, -0.004);
  });
  const curve = new THREE.CatmullRomCurve3(points, closed, "centripetal");
  return { curve, length: curve.getLength(), outer };
}

export function buildBrokenBowl() {
  seed = 11;
  // Re-seed so crack positions are identical for every page load and export.
  bands[0].cracks = cracksAround(2, 0.6);
  bands[1].cracks = cracksAround(5, 0.2);
  bands[2].cracks = cracksAround(6, 0.9);
  const shards: Shard[] = [];
  bands.forEach((b, band) => b.cracks.forEach((_, j) => shards.push(buildShard(band, j))));
  const seams: Seam[] = [];
  for (const outer of [true, false]) {
    seams.push(seamCurve((s) => ({ theta: s * TAU, t: ring1(s * TAU) }), 160, outer, true));
    seams.push(seamCurve((s) => ({ theta: s * TAU, t: ring2(s * TAU) }), 160, outer, true));
    bands.forEach((b, band) =>
      b.cracks.forEach((_, j) => seams.push(seamCurve((v) => shardCoord(band, j, 0, band === 0 ? 0.02 + v * 0.98 : v), 28, outer))),
    );
  }
  // Rim crossings: where a rim fracture breaks the lip, gold crosses from outside to inside.
  const rim: THREE.Vector3[][] = bands[2].cracks.map((_, j) => {
    const { theta } = shardCoord(2, j, 0, 1);
    const o = bowlPoint(theta, 1, false),
      i = bowlPoint(theta, 1, true);
    return [o, o.clone().lerp(i, 0.5).add(new THREE.Vector3(0, 0.004, 0)), i];
  });
  for (const pts of rim) {
    const curve = new THREE.CatmullRomCurve3(pts);
    seams.push({ curve, length: curve.getLength(), outer: true });
  }
  return { shards, seams };
}
