import * as THREE from "three";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";

/**
 * Night run: a fox made of particles gallops through a wireframe forest.
 * The fox is a small procedural skeleton (spine, neck, head, ears, tail, four two-bone legs on a
 * gallop cycle). Five thousand particles are pinned to its parts and re-posed every frame, and a
 * share of them peel off as a glowing trail. It runs by itself until someone presses Space or taps;
 * then it's a game: jump logs and rocks, catch fireflies, the counter keeps the distance.
 */
const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;

function glowSprite() {
  const c = document.createElement("canvas"); c.width = c.height = 64;
  const g = c.getContext("2d")!, r = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  r.addColorStop(0, "rgba(255,255,255,1)"); r.addColorStop(.25, "rgba(255,255,255,.7)"); r.addColorStop(1, "rgba(255,255,255,0)");
  g.fillStyle = r; g.fillRect(0, 0, 64, 64);
  return new THREE.CanvasTexture(c);
}
/** Points with per-particle colour, size and alpha, drawn additively so they glow. */
function pointsMaterial(map: THREE.Texture) {
  return new THREE.ShaderMaterial({
    uniforms: { map: { value: map }, scale: { value: 300 } },
    vertexShader: `attribute vec3 color; attribute float size; attribute float alpha; varying vec3 vColor; varying float vAlpha;
      void main(){ vColor = color; vAlpha = alpha; vec4 mv = modelViewMatrix * vec4(position, 1.); gl_PointSize = size * 300. / -mv.z; gl_Position = projectionMatrix * mv; }`,
    fragmentShader: `uniform sampler2D map; varying vec3 vColor; varying float vAlpha;
      void main(){ vec4 t = texture2D(map, gl_PointCoord); gl_FragColor = vec4(vColor * t.a * vAlpha, t.a * vAlpha); }`,
    transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
  });
}

/* ---------- the fox ---------- */
type Part = "torso" | "neck" | "head" | "snout" | "earL" | "earR" | "tail" | "legFL" | "legFR" | "legBL" | "legBR";
interface Pose { p: Record<string, THREE.Vector3>; }
const FOX = 5200;

function start(root: HTMLElement) {
  const canvas = root.querySelector<HTMLCanvasElement>(".rn-art")!;
  const counter = root.querySelector<HTMLElement>(".rn-count")!, best = root.querySelector<HTMLElement>(".rn-best")!, state = root.querySelector<HTMLElement>(".rn-state")!;
  const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, powerPreference: "high-performance" });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.75));
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x05060d);
  scene.fog = new THREE.Fog(0x05060d, 8, 46);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 120);
  const composer = new EffectComposer(renderer);
  composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(1, 1), .9, .55, .1);
  composer.addPass(bloom); composer.addPass(new OutputPass());
  const sprite = glowSprite();

  /* world: grid ground, wireframe trees, moon, path tiles, obstacles, fireflies */
  const line = (c: number, o = .5) => new THREE.LineBasicMaterial({ color: c, transparent: true, opacity: o, fog: true });
  const world = new THREE.Group(); scene.add(world);
  const gridGeo = new THREE.BufferGeometry(), gp: number[] = [];
  for (let z = -24; z <= 24; z += 1.5) gp.push(-30, 0, z, 70, 0, z);
  for (let x = -30; x <= 70; x += 1.5) gp.push(x, 0, -24, x, 0, 24);
  gridGeo.setAttribute("position", new THREE.Float32BufferAttribute(gp, 3));
  const grid = new THREE.LineSegments(gridGeo, line(0x2a3358, .35)); scene.add(grid);
  const treeGeo = new THREE.EdgesGeometry(new THREE.ConeGeometry(1, 3.4, 6, 3)), trunkGeo = new THREE.EdgesGeometry(new THREE.CylinderGeometry(.12, .16, 1.2, 5));
  const trees: THREE.Group[] = [];
  for (let i = 0; i < 52; i++) {
    const t = new THREE.Group(), s = .7 + Math.random() * 1.1;
    const cone = new THREE.LineSegments(treeGeo, line(0x3c4a7a, .55)); cone.position.y = 1.2 + 1.7; t.add(cone);
    const trunk = new THREE.LineSegments(trunkGeo, line(0x3c4a7a, .45)); trunk.position.y = .6; t.add(trunk);
    t.scale.setScalar(s);
    const side = i % 2 ? 1 : -1;
    // the forest stands behind the path and far off to the near side, never between the camera and the fox
    t.position.set(-28 + Math.random() * 96, 0, side > 0 ? -(3.2 + Math.random() * 16) : -(6 + Math.random() * 18));
    world.add(t); trees.push(t);
  }
  const moon = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(4.5, 2)), line(0x8aa0ff, .35));
  moon.position.set(30, 16, -34); scene.add(moon);
  const moonGlow = new THREE.Sprite(new THREE.SpriteMaterial({ map: sprite, color: 0x6f86ff, transparent: true, opacity: .35, blending: THREE.AdditiveBlending, depthWrite: false }));
  moonGlow.scale.setScalar(26); moonGlow.position.copy(moon.position); scene.add(moonGlow);
  // stepping tiles along the path that light up under the paws
  const tiles: THREE.Mesh[] = [];
  const tileGeo = new THREE.PlaneGeometry(.8, .55);
  for (let i = 0; i < 60; i++) {
    const m = new THREE.Mesh(tileGeo, new THREE.MeshBasicMaterial({ color: 0xb8582a, transparent: true, opacity: .05, blending: THREE.AdditiveBlending, depthWrite: false }));
    m.rotation.x = -Math.PI / 2; m.position.set(-20 + i * 1.3, .01, (i % 2 ? .45 : -.45)); world.add(m); tiles.push(m);
  }
  const edges = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.PlaneGeometry(1.1, .9)), line(0xff9a4a, .25));
  void edges;
  // obstacles: logs and rocks, as wireframe with a faint fill
  const logGeo = new THREE.CylinderGeometry(.32, .32, 1.8, 10), rockGeo = new THREE.DodecahedronGeometry(.48, 0);
  const obstacles: { g: THREE.Group; h: number; w: number; hit: boolean }[] = [];
  const makeObstacle = (x: number) => {
    const rock = Math.random() < .45, g = new THREE.Group();
    const geo = rock ? rockGeo : logGeo;
    g.add(new THREE.LineSegments(new THREE.EdgesGeometry(geo), line(0xd8e0ff, .8)));
    g.add(new THREE.Mesh(geo, new THREE.MeshBasicMaterial({ color: 0x1a2040, transparent: true, opacity: .55 })));
    if (!rock) g.rotation.x = Math.PI / 2;
    g.position.set(x, rock ? .4 : .32, 0); world.add(g);
    obstacles.push({ g, h: rock ? .8 : .64, w: rock ? .5 : .34, hit: false });
  };
  // fireflies to catch
  const flyMat = new THREE.SpriteMaterial({ map: sprite, color: 0xffe27a, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false });
  const flies: { s: THREE.Sprite; got: boolean; ph: number }[] = [];
  const makeFly = (x: number) => { const s = new THREE.Sprite(flyMat); s.scale.setScalar(.5); s.position.set(x, 1.4 + Math.random() * 1.2, 0); world.add(s); flies.push({ s, got: false, ph: Math.random() * 6 }); };

  /* the fox: particles pinned to parts of a posed skeleton */
  const parts: Part[] = [], pa = new Float32Array(FOX), pb = new Float32Array(FOX), pc = new Float32Array(FOX);
  const weights: [Part, number][] = [["torso", 30], ["neck", 7], ["head", 9], ["snout", 3], ["earL", 1.5], ["earR", 1.5], ["tail", 20], ["legFL", 7], ["legFR", 7], ["legBL", 7], ["legBR", 7]];
  const total = weights.reduce((s, w) => s + w[1], 0);
  for (let i = 0, k = 0; k < weights.length; k++) { const n = Math.round((weights[k][1] / total) * FOX); for (let j = 0; j < n && i < FOX; j++, i++) { parts[i] = weights[k][0]; pa[i] = Math.random(); pb[i] = Math.random() * Math.PI * 2; pc[i] = Math.sqrt(Math.random()); } }
  for (let i = 0; i < FOX; i++) if (!parts[i]) { parts[i] = "torso"; pa[i] = Math.random(); pb[i] = Math.random() * 6.28; pc[i] = Math.random(); }
  const foxGeo = new THREE.BufferGeometry();
  const fpos = new Float32Array(FOX * 3), fcol = new Float32Array(FOX * 3), fsize = new Float32Array(FOX), falpha = new Float32Array(FOX);
  const scatter = new Float32Array(FOX * 3), svel = new Float32Array(FOX * 3);
  const orange = new THREE.Color(0xff8a3a).multiplyScalar(1.25), cream = new THREE.Color(0xfff4e2).multiplyScalar(1.2), ember = new THREE.Color(0xff5a20), dark = new THREE.Color(0x9a3a14);
  for (let i = 0; i < FOX; i++) {
    const part = parts[i];
    let c = orange.clone();
    if (part === "tail") c = orange.clone().lerp(cream, Math.max(0, (pa[i] - .7) / .3));
    else if (part === "snout" || (part === "head" && pc[i] < .5 && Math.sin(pb[i]) < -.2)) c = cream.clone();
    else if (part.startsWith("leg")) c = orange.clone().lerp(dark, pa[i] * .8);
    else if (part.startsWith("ear")) c = dark.clone().lerp(orange, .4);
    else if (part === "torso" && Math.sin(pb[i]) < -.4) c = cream.clone().lerp(orange, .3);
    c.lerp(ember, Math.random() * .25);
    fcol.set([c.r, c.g, c.b], i * 3); fsize[i] = .034 + Math.random() * .036; falpha[i] = 1;
  }
  foxGeo.setAttribute("position", new THREE.BufferAttribute(fpos, 3));
  foxGeo.setAttribute("color", new THREE.BufferAttribute(fcol, 3));
  foxGeo.setAttribute("size", new THREE.BufferAttribute(fsize, 1));
  foxGeo.setAttribute("alpha", new THREE.BufferAttribute(falpha, 1));
  const fox = new THREE.Points(foxGeo, pointsMaterial(sprite)); fox.frustumCulled = false; scene.add(fox);
  // the trail: particles shed from the body, drifting back and fading
  const TRAIL = 3600, tpos = new Float32Array(TRAIL * 3), tcol = new Float32Array(TRAIL * 3), tsize = new Float32Array(TRAIL), talpha = new Float32Array(TRAIL), tvel = new Float32Array(TRAIL * 3), tlife = new Float32Array(TRAIL);
  const trailGeo = new THREE.BufferGeometry();
  trailGeo.setAttribute("position", new THREE.BufferAttribute(tpos, 3)); trailGeo.setAttribute("color", new THREE.BufferAttribute(tcol, 3));
  trailGeo.setAttribute("size", new THREE.BufferAttribute(tsize, 1)); trailGeo.setAttribute("alpha", new THREE.BufferAttribute(talpha, 1));
  const trail = new THREE.Points(trailGeo, pointsMaterial(sprite)); trail.frustumCulled = false; scene.add(trail);
  let tHead = 0;
  const shed = (x: number, y: number, z: number, r: number, g: number, b: number, vx: number, vy: number, vz: number, size: number, life: number) => {
    const i = tHead; tHead = (tHead + 1) % TRAIL;
    tpos[i * 3] = x; tpos[i * 3 + 1] = y; tpos[i * 3 + 2] = z; tcol[i * 3] = r; tcol[i * 3 + 1] = g; tcol[i * 3 + 2] = b;
    tvel[i * 3] = vx; tvel[i * 3 + 1] = vy; tvel[i * 3 + 2] = vz; tsize[i] = size; tlife[i] = life; talpha[i] = life;
  };

  // skeleton maths
  const V = (x = 0, y = 0, z = 0) => new THREE.Vector3(x, y, z);
  const tmp = V(), tmp2 = V();
  const pose = (phase: number, jumpY: number, crouch: number): Pose => {
    const bob = Math.sin(phase * 2) * .06, pitch = Math.sin(phase) * .08 + (jumpY > .05 ? -.15 : 0);
    const hip = V(-.55, .62 + bob + jumpY - crouch, 0), shoulder = V(.42, .68 + bob * .6 + jumpY - crouch, 0);
    shoulder.y += Math.sin(pitch) * .5; hip.y -= Math.sin(pitch) * .3;
    const neckTop = V(.74, .98 + jumpY + bob * .4 - crouch, 0), head = V(.94, 1.04 + jumpY + bob * .3 - crouch, 0);
    const p: Record<string, THREE.Vector3> = { hip, shoulder, neckTop, head };
    // legs: gallop, back pair half a cycle behind the front pair, each with a little offset
    const leg = (root: THREE.Vector3, ph: number, front: boolean) => {
      const swing = Math.sin(ph) * (jumpY > .05 ? .2 : .75), lift = Math.max(0, Math.cos(ph)) * .22;
      const knee = V(root.x + Math.sin(swing) * .26 * (front ? 1 : -.4), root.y - .29 + lift * .5, root.z);
      const paw = V(knee.x + Math.sin(swing * 1.4 + (front ? .2 : -.6)) * .27, Math.max(.02, knee.y - .3 + lift), root.z);
      if (jumpY > .05) { paw.x += front ? .25 : -.3; paw.y = root.y - .45; }
      return [root.clone(), knee, paw];
    };
    p.legs = V(); // placeholder key so the record type stays simple
    (p as Record<string, unknown>).FL = leg(V(shoulder.x, shoulder.y - .05, .16), phase, true);
    (p as Record<string, unknown>).FR = leg(V(shoulder.x - .06, shoulder.y - .05, -.16), phase + .45, true);
    (p as Record<string, unknown>).BL = leg(V(hip.x, hip.y - .02, .17), phase + Math.PI, false);
    (p as Record<string, unknown>).BR = leg(V(hip.x + .06, hip.y - .02, -.17), phase + Math.PI + .45, false);
    return { p };
  };
  const along = (a: THREE.Vector3, b: THREE.Vector3, t: number, out: THREE.Vector3) => out.copy(a).lerp(b, t);

  /* game state */
  let speed = 7, dist = 0, phase = 0, jumpY = 0, jumpV = 0, crouch = 0, auto = true, crashed = 0, bestM = 0, flyScore = 0;
  try { bestM = Number(localStorage.getItem("patchwork-nightrun-best")) || 0; } catch {}
  best.textContent = `BEST ${Math.round(bestM)} m`;
  let nextObstacle = 14, nextFly = 9;
  const jump = () => { if (crashed > 0) return; if (jumpY < .02) { jumpV = 5.6; crouch = 0; } };
  const play = () => { if (auto) { auto = false; dist = 0; flyScore = 0; root.classList.add("is-playing"); state.textContent = "SPACE OR TAP TO JUMP · ESC TO STOP"; } jump(); };
  const stop = () => { auto = true; root.classList.remove("is-playing"); state.textContent = "PRESS SPACE TO PLAY"; };
  addEventListener("keydown", (e) => {
    if (e.target instanceof HTMLElement && e.target.closest("input,textarea")) return;
    if (e.code === "Space" || e.code === "ArrowUp") { e.preventDefault(); play(); }
    if (e.code === "Escape" && !auto) stop();
  });
  root.addEventListener("pointerdown", (e) => { if ((e.target as HTMLElement).closest("a,button")) return; play(); });
  root.querySelector(".rn-play")?.addEventListener("click", play);

  const crash = () => {
    crashed = 1.8;
    for (let i = 0; i < FOX; i++) { svel[i * 3] = (Math.random() - .3) * 5; svel[i * 3 + 1] = Math.random() * 5; svel[i * 3 + 2] = (Math.random() - .5) * 5; scatter.set([fpos[i * 3], fpos[i * 3 + 1], fpos[i * 3 + 2]], i * 3); }
    if (!auto) { bestM = Math.max(bestM, dist); try { localStorage.setItem("patchwork-nightrun-best", String(Math.round(bestM))); } catch {} best.textContent = `BEST ${Math.round(bestM)} m`; dist = 0; }
    speed = 7;
  };

  const resize = () => {
    const r = root.getBoundingClientRect();
    renderer.setSize(r.width, r.height, false); composer.setSize(r.width, r.height);
    camera.aspect = r.width / r.height; camera.updateProjectionMatrix();
  };
  new ResizeObserver(resize).observe(root); resize();
  let visible = true; new IntersectionObserver(([e]) => (visible = e.isIntersecting)).observe(root);

  const step = (dt: number) => {
    const t = performance.now() / 1000;
    if (crashed > 0) crashed -= dt;
    const run = crashed > 0 ? speed * .15 : speed;
    if (crashed <= 0) { speed = Math.min(14, speed + dt * .08); dist += run * dt; }
    phase += dt * run * 1.25;
    // world scrolls past
    grid.position.x = -(dist % 1.5);
    for (const tr of trees) { tr.position.x -= run * dt; if (tr.position.x < -30) tr.position.x += 98; }
    tiles.forEach((m) => { m.position.x -= run * dt; if (m.position.x < -22) m.position.x += 78; const mm = m.material as THREE.MeshBasicMaterial; mm.opacity = Math.max(.05, mm.opacity - dt * .6); if (Math.abs(m.position.x) < .5 && jumpY < .1) mm.opacity = .28; });
    nextObstacle -= run * dt; nextFly -= run * dt;
    if (nextObstacle < 0) { makeObstacle(40); nextObstacle = 9 + Math.random() * 12; }
    if (nextFly < 0) { makeFly(40); nextFly = 5 + Math.random() * 6; }
    for (let i = obstacles.length - 1; i >= 0; i--) {
      const o = obstacles[i]; o.g.position.x -= run * dt;
      // the autopilot jumps by itself
      if (auto && !o.hit && o.g.position.x > .9 && o.g.position.x < 1.1 + speed * .03) jump();
      if (!o.hit && crashed <= 0 && Math.abs(o.g.position.x) < o.w + .45 && jumpY < o.h - .05) { o.hit = true; crash(); }
      if (o.g.position.x < -24) { world.remove(o.g); obstacles.splice(i, 1); }
    }
    for (let i = flies.length - 1; i >= 0; i--) {
      const f = flies[i]; f.s.position.x -= run * dt; f.s.position.y += Math.sin(t * 3 + f.ph) * .004;
      (f.s.material as THREE.SpriteMaterial).opacity = .6 + .4 * Math.sin(t * 6 + f.ph);
      if (!f.got && Math.abs(f.s.position.x - .8) < .5 && Math.abs(f.s.position.y - (1.1 + jumpY)) < .7) {
        f.got = true; f.s.visible = false; if (!auto) flyScore++;
        // a burst toward the camera
        for (let k = 0; k < 140; k++) { const a = Math.random() * 6.28, s = 1 + Math.random() * 3; shed(f.s.position.x, f.s.position.y, 0, 1, .86, .4, Math.cos(a) * s * .4 - 2, Math.sin(a) * s * .6 + 1, 2 + Math.random() * 5, .06 + Math.random() * .06, 1); }
      }
      if (f.s.position.x < -24) { world.remove(f.s); flies.splice(i, 1); }
    }
    // jumping
    jumpV -= 14 * dt; jumpY = Math.max(0, jumpY + jumpV * dt); if (jumpY === 0) jumpV = 0;
    crouch += ((jumpV === 0 && auto ? 0 : 0) - crouch) * .2;
    // pose the fox and place every particle
    const P = pose(phase, jumpY, crouch).p as Record<string, THREE.Vector3> & Record<string, unknown>;
    const legs = { legFL: P.FL, legFR: P.FR, legBL: P.BL, legBR: P.BR } as unknown as Record<string, THREE.Vector3[]>;
    for (let i = 0; i < FOX; i++) {
      const part = parts[i], a = pa[i], b = pb[i], c = pc[i];
      let x = 0, y = 0, z = 0;
      if (part === "torso") {
        along(P.hip, P.shoulder, a, tmp);
        const rad = .24 * Math.sin(Math.PI * (.15 + a * .7)) + .07 + a * .05;
        x = tmp.x; y = tmp.y + Math.sin(b) * rad * c * .95 - .02; z = Math.cos(b) * rad * c * .85;
      } else if (part === "neck") {
        along(P.shoulder, P.neckTop, a, tmp); const rad = .15 - a * .04;
        x = tmp.x; y = tmp.y + Math.sin(b) * rad * c; z = Math.cos(b) * rad * c;
      } else if (part === "head") {
        x = P.head.x + (Math.cos(b) * .16) * c; y = P.head.y + Math.sin(b) * .14 * c; z = Math.sin(b * 2.1 + a * 6) * .14 * c;
      } else if (part === "snout") {
        x = P.head.x + .1 + a * .2; const rad = .07 * (1 - a * .7); y = P.head.y - .03 - a * .03 + Math.sin(b) * rad * c; z = Math.cos(b) * rad * c;
      } else if (part === "earL" || part === "earR") {
        const s = part === "earL" ? 1 : -1, w = (1 - a) * .07;
        x = P.head.x - .03 - a * .03 + Math.cos(b) * w * c; y = P.head.y + .11 + a * .24; z = s * (.08 + a * .03) + Math.sin(b) * w * c;
      } else if (part === "tail") {
        // a bushy tail that streams back and sways
        const sway = Math.sin(phase * 2 - a * 3) * .12;
        x = P.hip.x - .05 - a * 1.0; y = P.hip.y + .05 + Math.sin(a * 2.4) * .18 - a * .1 + sway * .5;
        const rad = (.07 + Math.sin(Math.min(1, a * 1.2) * Math.PI) * .21) * c; y += Math.sin(b) * rad; z = Math.cos(b) * rad + sway * a;
      } else {
        const L = legs[part];
        const seg = a < .5 ? 0 : 1, u = (a % .5) * 2;
        along(L[seg], L[seg + 1], u, tmp2); const rad = (seg ? .028 : .052) * c;
        x = tmp2.x + Math.cos(b) * rad; y = tmp2.y; z = tmp2.z + Math.sin(b) * rad;
      }
      if (crashed > 0) {
        // scattered: fly apart, then ease back into the running shape
        const k = Math.max(0, crashed - .9) / .9;
        scatter[i * 3] += svel[i * 3] * dt; scatter[i * 3 + 1] = Math.max(0, scatter[i * 3 + 1] + svel[i * 3 + 1] * dt); scatter[i * 3 + 2] += svel[i * 3 + 2] * dt; svel[i * 3 + 1] -= 4 * dt;
        const back = 1 - k;
        x = scatter[i * 3] + (x - scatter[i * 3]) * back * back; y = scatter[i * 3 + 1] + (y - scatter[i * 3 + 1]) * back * back; z = scatter[i * 3 + 2] + (z - scatter[i * 3 + 2]) * back * back;
      }
      fpos[i * 3] = x + (Math.random() - .5) * .008; fpos[i * 3 + 1] = y; fpos[i * 3 + 2] = z;
      // shed into the trail now and then
      if (Math.random() < (part === "tail" ? .02 : .006)) shed(x, y, z, fcol[i * 3], fcol[i * 3 + 1] * .8, fcol[i * 3 + 2] * .6, -run * (.6 + Math.random() * .3), Math.random() * .3, (Math.random() - .5) * .3, fsize[i] * 1.2, .9);
    }
    foxGeo.attributes.position.needsUpdate = true;
    for (let i = 0; i < TRAIL; i++) {
      if (tlife[i] <= 0) { talpha[i] = 0; continue; }
      tlife[i] -= dt * .8; talpha[i] = Math.max(0, tlife[i]) * .8;
      tpos[i * 3] += tvel[i * 3] * dt; tpos[i * 3 + 1] += tvel[i * 3 + 1] * dt; tpos[i * 3 + 2] += tvel[i * 3 + 2] * dt;
      tcol[i * 3] *= .995; tcol[i * 3 + 1] *= .985; tcol[i * 3 + 2] *= .97;
    }
    trailGeo.attributes.position.needsUpdate = true; trailGeo.attributes.alpha.needsUpdate = true; trailGeo.attributes.color.needsUpdate = true;
    // camera chases from behind and to the side, swaying a little
    // narrow screens pull the camera back and centre the fox
    const narrow = camera.aspect < 1;
    camera.position.set((narrow ? -1.2 : -1.9) + Math.sin(t * .2) * .3, (narrow ? 2.2 : 1.55) + jumpY * .25, (narrow ? 7.2 : 4.3) + Math.sin(t * .13) * .3);
    camera.lookAt(narrow ? .1 : -.9, (narrow ? 1.5 : 1.0) + jumpY * .35, 0);
    moon.rotation.y += dt * .05;
    counter.textContent = auto ? "" : `${Math.round(dist)} m`;
    root.querySelector<HTMLElement>(".rn-flies")!.textContent = auto ? "" : `${flyScore} firefl${flyScore === 1 ? "y" : "ies"}`;
  };
  if (reduced) { step(.016); for (let i = 0; i < 30; i++) step(1 / 30); composer.render(); state.textContent = "MOTION IS PAUSED"; return; }
  let last = performance.now();
  const frame = (now: number) => {
    requestAnimationFrame(frame);
    const dt = Math.min(.05, (now - last) / 1000); last = now;
    if (!visible || document.hidden) return;
    step(dt); composer.render();
  };
  requestAnimationFrame(frame);
  state.textContent = "PRESS SPACE TO PLAY";
}

// Start last, once every constant above exists.
const root = document.querySelector<HTMLElement>(".hx-runner");
if (root) start(root);
