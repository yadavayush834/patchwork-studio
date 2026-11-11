import * as THREE from "three";
import gsap from "gsap";
import { buildPip, buildWorld, chambers, greyable, TUNNEL_R, tunnelPath, V, voxels } from "./burrow-world";
import { burrowBeats, burrowChapters, burrowState, clamp01, itemFoundAt, smooth } from "./burrow-story";
import { createPixelPass } from "./pixel-pass";

const PALETTE = [
  "#0d0a0c", "#1c1410", "#2e1d16", "#4a3020", "#6b4a2e", "#9a6a52", "#c8a07a", "#e6dcc0",
  "#ffffff", "#d8dce6", "#9aa0b4", "#5f6680", "#3b4466", "#262c44", "#1f5f8f", "#3d8fbf",
  "#9fd3e8", "#3ce0c4", "#1d8f9a", "#2f6b4f", "#5ba86a", "#a8d46f", "#ffd34d", "#ff8a3d",
  "#c4506b", "#7a2d55", "#e07aa8", "#f7a8c4", "#ffd6e6", "#5a5aa0", "#8b7bc0", "#c9b8e8",
];
const W = (x: number, y: number, z: number) => new THREE.Vector3(x * V, y * V, z * V);

export function animateBurrow(reduced: boolean) {
  const host = document.querySelector<HTMLElement>(".bw-world");
  const stage = document.querySelector<HTMLElement>(".bw-stage");
  if (!host || !stage) return;
  let renderer: THREE.WebGLRenderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: false, powerPreference: "high-performance" });
  } catch {
    stage.classList.add("is-fallback");
    document.querySelector<HTMLElement>(".bw-journey")?.style.setProperty("height", "100svh");
    return;
  }
  const PX = 3;
  renderer.setPixelRatio(1);
  renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
  host.append(renderer.domElement);
  host.classList.add("has-webgl");
  const pass = createPixelPass({ palette: PALETTE, dither: 0.05, outlineNear: 60, outlineInk: "#0d0a0c" });

  const scene = new THREE.Scene();
  const fogColor = new THREE.Color();
  scene.fog = new THREE.Fog(fogColor, 6, 40);
  const camera = new THREE.PerspectiveCamera(48, 1, 0.05, 400);
  const hemi = new THREE.HemisphereLight(0xfff2e0, 0x4a3020, 1.4);
  const sun = new THREE.DirectionalLight(0xfff0d8, 2.2);
  sun.position.set(-20, 40, 30);
  scene.add(hemi, sun);

  // Sky: a winter grey that becomes spring when the tree blooms.
  const skyU = { uBloom: { value: 0 }, uTime: { value: 0 } };
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(300, 24, 12),
    new THREE.ShaderMaterial({
      uniforms: skyU,
      side: THREE.BackSide,
      depthWrite: false,
      fog: false,
      vertexShader: `varying vec3 vD; void main(){ vD = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }`,
      fragmentShader: /* glsl */ `
        uniform float uBloom; varying vec3 vD;
        void main(){
          float g = smoothstep(-0.1, 0.7, vD.y);
          vec3 winter = mix(vec3(0.86, 0.87, 0.9), vec3(0.62, 0.64, 0.7), g);
          vec3 spring = mix(vec3(1.0, 0.88, 0.92), vec3(0.45, 0.7, 0.92), g);
          vec3 c = mix(winter, spring, uBloom);
          gl_FragColor = vec4(pow(c, vec3(2.2)), 1.0);
        }`,
    }),
  );
  scene.add(sky);

  const world = buildWorld();
  const greyU = { uGrey: { value: 1 } };
  const add = (m: THREE.Object3D) => (scene.add(m), m);
  add(voxels(world.walls, true));
  add(voxels(world.glow, false));
  add(voxels(world.detail, true));
  add(voxels(world.knot, true));
  add(voxels(world.surface, true, V, greyable(greyU)));
  add(voxels(world.tree, true, V, greyable(greyU)));
  const crystals = add(voxels(world.crystals, false)) as THREE.InstancedMesh;
  const core = add(voxels(world.core, false)) as THREE.InstancedMesh;
  const waterU = { uTime: { value: 0 } };
  add(
    voxels(world.water, false, V, (shader) => {
      shader.uniforms.uTime = waterU.uTime;
      shader.vertexShader = shader.vertexShader
        .replace("#include <common>", "#include <common>\nuniform float uTime;")
        .replace("#include <begin_vertex>", "#include <begin_vertex>\nvec3 ip = instanceMatrix[3].xyz; transformed.y += sin(uTime * 2.0 + ip.x * 3.0 + ip.z * 2.0) * 0.35;");
    }),
  );
  // The root carries the light: each voxel knows how far along the root it is.
  const pulseU = { uPulse: { value: -1 }, uLit: { value: 0 } };
  const rootMesh = voxels(world.root.map((r) => r.v), true, V, (shader) => {
    Object.assign(shader.uniforms, pulseU);
    shader.vertexShader = shader.vertexShader.replace("#include <common>", "#include <common>\nattribute float aAlong; varying float vAlong;").replace("#include <begin_vertex>", "#include <begin_vertex>\nvAlong = aAlong;");
    shader.fragmentShader = shader.fragmentShader
      .replace("#include <common>", "#include <common>\nuniform float uPulse, uLit; varying float vAlong;")
      .replace(
        "#include <emissivemap_fragment>",
        "#include <emissivemap_fragment>\nfloat band = exp(-pow((vAlong - uPulse) * 22.0, 2.0));\ntotalEmissiveRadiance += vec3(1.0, 0.62, 0.25) * (band * 3.0 + step(uPulse, vAlong) * uLit * 0.55);",
      );
  });
  rootMesh.geometry = rootMesh.geometry.clone();
  rootMesh.geometry.setAttribute("aAlong", new THREE.InstancedBufferAttribute(new Float32Array(world.root.map((r) => r.along)), 1));
  add(rootMesh);
  // Blossom clusters at the branch tips, and flowers waiting in the grass.
  const blossoms = world.blossoms.map((b, i) => {
    const m = voxels(b.list, true, V * 0.9);
    m.position.copy(W(b.at.x, b.at.y, b.at.z));
    m.scale.setScalar(0.001);
    scene.add(m);
    return { m, delay: (i / world.blossoms.length) * 0.5 };
  });
  let fseed = 3;
  const frnd = () => ((fseed = (fseed * 16807) % 2147483647) - 1) / 2147483646;
  const flowers = voxels(Array.from({ length: 260 }, () => {
    const x = Math.round((frnd() - 0.5) * 120), z = Math.round(-60 + frnd() * 95);
    return [x, Math.floor(9 * Math.exp(-((x - 8) ** 2 + (z + 16) ** 2) / 1500) + Math.sin(x * 0.12) * 0.8 + Math.cos(z * 0.1) * 0.8) + 1, z, ["#ffd6e6", "#ffd34d", "#ffffff", "#e07aa8"][Math.floor(frnd() * 4)]] as [number, number, number, string];
  }).filter(([x, , z]) => Math.hypot(x, z - 1) > 6), true);
  add(flowers);
  // Falling petals; glowing fish.
  const petals = add(voxels(Array.from({ length: 140 }, (_, i) => [0, 0, 0, i % 2 ? "#f7a8c4" : "#ffd6e6"] as [number, number, number, string]), false, V * 0.6)) as THREE.InstancedMesh;
  const fish = add(voxels(Array.from({ length: 16 }, (_, i) => [0, 0, 0, i % 3 ? "#9fd3e8" : "#3ce0c4"] as [number, number, number, string]), false, V * 0.8)) as THREE.InstancedMesh;
  const pip = buildPip();
  scene.add(pip.group);
  const lantern = new THREE.PointLight(0xffc878, 6, 9, 1.4);
  scene.add(lantern);
  const riverLight = new THREE.PointLight(0x4aa8ff, 0, 14, 1.2);
  riverLight.position.copy(chambers.river.c).multiplyScalar(V);
  const crystalLight = new THREE.PointLight(0xb08cff, 0, 14, 1.2);
  crystalLight.position.copy(chambers.crystal.c).multiplyScalar(V);
  const heartLight = new THREE.PointLight(0xff8a3d, 0, 16, 1.1);
  heartLight.position.copy(chambers.heart.c).multiplyScalar(V);
  scene.add(riverLight, crystalLight, heartLight);

  // Camera helpers.
  const tmpA = new THREE.Vector3(), tmpB = new THREE.Vector3(), up = new THREE.Vector3();
  const tunnelPoint = (u: number, out: THREE.Vector3) => out.copy(tunnelPath.getPointAt(clamp01(u))).multiplyScalar(V);
  const upAt = (u: number) => {
    const t = tunnelPath.getTangentAt(clamp01(u));
    const s = new THREE.Vector3().crossVectors(t, new THREE.Vector3(0, 1, 0)).normalize();
    return up.crossVectors(s, t).normalize();
  };
  const camPos = new THREE.Vector3(), camLook = new THREE.Vector3();
  const outsideStart = [W(-34, 34, 80), W(10, 18, -18)], outsideDive = [W(0, 9, 16), W(0, -6, -12)];
  const endWide = [W(-34, 30, 66), W(16, 24, -22)];
  const hc = chambers.heart.c.clone().multiplyScalar(V);
  function tunnelCam(u: number, backward: boolean) {
    tunnelPoint(u, camPos).addScaledVector(upAt(u), 1.9 * V);
    tunnelPoint(backward ? u - 0.014 : u + 0.014, camLook).addScaledVector(upAt(u), 0.9 * V);
  }
  const lerp2 = (a: THREE.Vector3[], b: THREE.Vector3[], k: number) => {
    camPos.lerpVectors(a[0], b[0], k);
    camLook.lerpVectors(a[1], b[1], k);
  };

  const pointer = { x: 0, y: 0, tx: 0, ty: 0 };
  const state = { p: reduced ? 0.99 : 0 };
  let shown = -1;
  const q = <T extends Element = HTMLElement>(s: string) => stage.querySelector<T>(s);
  const marker = q(".bw-marker"), depthText = q(".bw-depth b"), layerText = q(".bw-layer");
  const cardNo = q(".bw-card small"), cardTitle = q(".bw-card h2"), cardText = q(".bw-card p"), cardFound = q(".bw-card .bw-found b");
  const slots = Array.from(stage.querySelectorAll<HTMLElement>(".bw-slot"));
  const m4 = new THREE.Matrix4(), qt = new THREE.Quaternion(), sv = new THREE.Vector3(), pv = new THREE.Vector3();
  const layers = ["SURFACE", "TOPSOIL", "BONE HALL", "BLIND RIVER", "CRYSTAL HALL", "HEART ROOT"];

  function draw(time: number) {
    const s = burrowState(state.p), p = s.p;
    skyU.uBloom.value = s.bloom;
    greyU.uGrey.value = 1 - s.bloom;
    waterU.uTime.value = time;
    // Camera: dive in, fly forward, orbit the heart, rush back, lift away.
    if (p < 0.13) lerp2(outsideStart, outsideDive, s.dive);
    else if (s.exit > 0) {
      tunnelCam(0.02, true);
      const a = [camPos.clone(), camLook.clone()];
      lerp2(a, endWide, smooth(s.exit));
    } else if (s.orbit > 0 && s.rewind === 0) {
      tunnelCam(1, false);
      const a = camPos.clone(), b = camLook.clone();
      const ang = (p - 0.68) * 9;
      tmpA.set(hc.x + Math.sin(ang) * 4.2, hc.y + 1.2, hc.z + Math.cos(ang) * 4.2);
      camPos.lerpVectors(a, tmpA, s.orbit);
      camLook.lerpVectors(b, hc, s.orbit);
    } else tunnelCam(s.along, s.rewind > 0);
    pointer.x += (pointer.tx - pointer.x) * 0.05;
    pointer.y += (pointer.ty - pointer.y) * 0.05;
    camLook.x += pointer.x * 0.5;
    camLook.y -= pointer.y * 0.3;
    camPos.y += Math.sin(time * 1.4) * 0.03;
    camera.position.copy(camPos);
    camera.lookAt(camLook);
    sky.position.copy(camPos);
    // Depth sets the air: daylight at the surface, lantern light below, a colour per chamber.
    const under = p < 0.13 ? s.dive * 0.9 : s.exit > 0 ? 1 - s.exit : 1;
    const z = camPos.z / V;
    const zoneCol = z > -92 ? [0.16, 0.1, 0.07] : z > -168 ? [0.22, 0.13, 0.1] : z > -248 ? [0.05, 0.1, 0.2] : z > -322 ? [0.12, 0.08, 0.22] : [0.22, 0.07, 0.06];
    fogColor.setRGB(0.88, 0.89, 0.92).lerp(new THREE.Color(...zoneCol), under);
    (scene.fog as THREE.Fog).color.copy(fogColor);
    (scene.fog as THREE.Fog).near = 6 + (1 - under) * 40;
    (scene.fog as THREE.Fog).far = 26 + (1 - under) * 200;
    hemi.intensity = 1.4 - under * 1.15;
    sun.intensity = 2.2 * (1 - under);
    // Pip walks ahead with the lantern; after giving it, Pip waits by the heart, then by the tree.
    const pu = Math.min(0.985, s.along + 0.034);
    if (s.exit > 0.5) {
      pip.group.position.copy(W(12, 9, -14));
      pip.group.rotation.set(0, 0.6, 0);
    } else {
      tunnelPoint(s.rewind > 0 ? 0.985 : pu, pv).addScaledVector(upAt(pu), -(TUNNEL_R - 0.9) * V);
      pip.group.position.copy(pv);
      pip.group.position.y += Math.abs(Math.sin(time * 6)) * 0.04;
      tunnelPoint(pu + 0.01, tmpB).addScaledVector(upAt(pu), -(TUNNEL_R - 0.9) * V);
      pip.group.lookAt(tmpB);
    }
    pip.capMesh.visible = p > 0.19;
    pip.lampMesh.visible = s.give < 0.5;
    lantern.position.copy(pip.group.position).add(new THREE.Vector3(0, 0.8, 0));
    lantern.intensity = 7 * under * (1 - s.give);
    // Chamber lights and life.
    riverLight.intensity = 30 * under;
    crystalLight.intensity = 26 * under;
    const crystalHum = 0.75 + 0.25 * Math.sin(time * 1.6);
    (crystals.material as THREE.MeshBasicMaterial).color.setScalar(crystalHum);
    const ember = s.give;
    heartLight.intensity = 6 + ember * 60 + Math.sin(time * 3) * 4 * ember;
    (core.material as THREE.MeshBasicMaterial).color.setRGB(0.35 + ember * 0.65, 0.4 + ember * 0.35, 0.5 - ember * 0.3).multiplyScalar(0.8 + 0.2 * Math.sin(time * (2 + ember * 3)));
    core.scale.setScalar(1);
    pulseU.uPulse.value = s.pulse > 0 ? s.along * 0.92 + 0.05 : -1;
    pulseU.uLit.value = ember;
    // Fish dart and leap in the river.
    const rv = chambers.river;
    for (let i = 0; i < 16; i++) {
      const a = time * (0.4 + (i % 4) * 0.12) + i * 1.7, jump = Math.max(0, Math.sin(time * 1.3 + i * 2.1)) ** 6 * 3;
      pv.set(rv.c.x + Math.cos(a) * rv.r.x * 0.55, world.waterLevel + 0.8 + jump, rv.c.z + Math.sin(a * 1.3) * rv.r.z * 0.55).multiplyScalar(V);
      m4.compose(pv, qt.setFromEuler(new THREE.Euler(0, -a, 0)), sv.set(V * 1.6, V * 0.6, V * 0.8));
      fish.setMatrixAt(i, m4);
    }
    fish.instanceMatrix.needsUpdate = true;
    // Blossoms open from the inner branches outward; petals drift down.
    blossoms.forEach((b) => b.m.scale.setScalar(Math.max(0.001, smooth((s.bloom - b.delay) / 0.45))));
    flowers.visible = s.bloom > 0.2;
    flowers.position.y = (s.bloom - 1) * V * 2;
    petals.visible = s.bloom > 0.3;
    if (petals.visible)
      for (let i = 0; i < 140; i++) {
        const life = (time * 0.08 + i * 0.0137) % 1;
        pv.set(18 + Math.sin(i * 2.3) * 22 + Math.sin(time + i) * 2, 46 - life * 44, -24 + Math.cos(i * 1.7) * 22).multiplyScalar(V);
        m4.compose(pv, qt.setFromEuler(new THREE.Euler(time + i, time * 0.7, 0)), sv.setScalar(V * 0.6 * s.bloom));
        petals.setMatrixAt(i, m4);
      }
    petals.instanceMatrix.needsUpdate = true;
    pass.render(renderer, scene, camera);
    // HUD: depth gauge, specimen card, inventory.
    const depth = p < 0.13 ? 0 : s.exit > 0 ? 0 : s.along;
    if (marker) marker.style.top = `${depth * 100}%`;
    if (depthText) depthText.textContent = String(Math.round(depth * 412)).padStart(3, "0");
    if (layerText) layerText.textContent = s.exit > 0 || p < 0.12 ? layers[0] : layers[Math.min(5, 1 + Math.floor(depth * 4.99))];
    if (s.chapter !== shown) {
      shown = s.chapter;
      const [no, title, text, item] = burrowChapters[s.chapter];
      if (cardNo) cardNo.textContent = `SPECIMEN ${no} / VII`;
      if (cardTitle) cardTitle.textContent = title;
      if (cardText) cardText.textContent = text;
      if (cardFound) cardFound.textContent = item;
    }
    slots.forEach((el, i) => {
      const at = itemFoundAt[i === 5 ? 6 : i];
      const found = p >= at;
      el.classList.toggle("is-found", found);
      el.classList.toggle("is-given", i === 0 && s.give > 0.5);
      el.classList.toggle("is-new", found && p < at + 0.03);
    });
    host!.dataset.scrollProgress = p.toFixed(3);
    host!.dataset.storyBeat = String(s.chapter + 1);
  }

  function resize() {
    const w = Math.max(1, host!.clientWidth), h = Math.max(1, host!.clientHeight);
    const bw = Math.ceil(w / PX), bh = Math.ceil(h / PX);
    renderer.setSize(bw, bh, false);
    pass.setSize(bw, bh);
    camera.aspect = w / h;
    camera.updateProjectionMatrix();
    draw(performance.now() / 1000);
  }
  resize();

  let timeline: gsap.core.Timeline | undefined;
  if (!reduced) {
    timeline = gsap.timeline({ defaults: { ease: "none" }, scrollTrigger: { trigger: ".bw-journey", start: "top top", end: "bottom bottom", scrub: 1.3 } });
    timeline.to(state, { p: 1, duration: 1 }, 0);
    timeline.to(".bw-title", { autoAlpha: 0, scale: 1.4, duration: 0.05, ease: "power2.in" }, 0.03);
    timeline.fromTo(".bw-card, .bw-gauge, .bw-bar", { autoAlpha: 0 }, { autoAlpha: 1, duration: 0.02, ease: "steps(4)" }, 0.08);
    burrowBeats.forEach((b, i) => {
      if (!i) return;
      // Each new specimen card stamps in.
      timeline!.fromTo(".bw-card", { scale: 1.25, rotation: -4 }, { scale: 1, rotation: 0, duration: 0.008, ease: "steps(4)", immediateRender: false }, b + 0.002);
    });
    timeline.fromTo(".bw-flash", { autoAlpha: 0 }, { autoAlpha: 0.85, duration: 0.004 }, 0.79);
    timeline.to(".bw-flash", { autoAlpha: 0, duration: 0.03 }, 0.795);
    gsap.from(".bw-title .bw-l", { y: 40, autoAlpha: 0, duration: 0.6, stagger: 0.06, ease: "steps(6)", delay: 0.3 });
    gsap.from(".bw-nav", { autoAlpha: 0, y: -16, duration: 0.6, ease: "steps(6)", delay: 0.2 });
    gsap.utils.toArray<HTMLElement>(".bw-notes article").forEach((el, i) =>
      gsap.from(el, { autoAlpha: 0, y: 40, rotation: i % 2 ? 2 : -2, duration: 0.7, ease: "steps(7)", scrollTrigger: { trigger: el, start: "top 90%" } }),
    );
  }
  const onPointer = (e: PointerEvent) => {
    pointer.tx = (e.clientX / innerWidth - 0.5) * 2;
    pointer.ty = (e.clientY / innerHeight - 0.5) * 2;
  };
  window.addEventListener("pointermove", onPointer, { passive: true });
  let frame = 0, visible = true;
  const observer = new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) schedule();
  });
  observer.observe(host);
  const tick = (t: number) => {
    frame = 0;
    if (!visible || document.hidden) return;
    draw(t / 1000);
    schedule();
  };
  function schedule() {
    if (!frame && visible && !document.hidden && !reduced) frame = requestAnimationFrame(tick);
  }
  const onVis = () => (document.hidden ? (cancelAnimationFrame(frame), (frame = 0)) : schedule());
  document.addEventListener("visibilitychange", onVis);
  window.addEventListener("resize", resize);
  schedule();
  return () => {
    cancelAnimationFrame(frame);
    observer.disconnect();
    timeline?.scrollTrigger?.kill();
    timeline?.kill();
    window.removeEventListener("pointermove", onPointer);
    window.removeEventListener("resize", resize);
    document.removeEventListener("visibilitychange", onVis);
    scene.traverse((o) => {
      const m = o as THREE.Mesh;
      m.geometry?.dispose();
      (Array.isArray(m.material) ? m.material : m.material ? [m.material] : []).forEach((x) => x.dispose());
    });
    pass.dispose();
    renderer.dispose();
    renderer.domElement.remove();
  };
}
