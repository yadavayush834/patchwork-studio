import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface KineticGyroscopicRingsProps {
  speed?: number;
  ringCount?: number;
  outerColor?: string;
  coreColor?: string;
  metalness?: number;
  roughness?: number;
}

export function KineticGyroscopicRings({
  speed = 1.0,
  ringCount = 4,
  outerColor = '#6366f1',
  coreColor = '#ec4899',
  metalness = 0.9,
  roughness = 0.2,
}: KineticGyroscopicRingsProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group of rings
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const rings: THREE.Mesh[] = [];
    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    const baseRadius = 2.4;
    const tubeRadius = 0.06;

    for (let i = 0; i < ringCount; i++) {
      const radius = baseRadius - i * (baseRadius / (ringCount + 0.5));
      const geom = new THREE.TorusGeometry(radius, tubeRadius, 16, 100);
      geometries.push(geom);

      // Color lerp from outer to core
      const t = i / Math.max(1, ringCount - 1);
      const c1 = new THREE.Color(outerColor);
      const c2 = new THREE.Color(coreColor);
      const ringColor = c1.lerp(c2, t);

      const mat = new THREE.MeshStandardMaterial({
        color: ringColor,
        metalness,
        roughness,
      });
      materials.push(mat);

      const ringMesh = new THREE.Mesh(geom, mat);
      ringsGroup.add(ringMesh);
      rings.push(ringMesh);
    }

    // Glowing core sphere
    const coreGeom = new THREE.SphereGeometry(0.35, 32, 32);
    geometries.push(coreGeom);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(coreColor),
      emissive: new THREE.Color(coreColor),
      emissiveIntensity: 0.6,
      roughness: 0.1,
    });
    materials.push(coreMat);
    const coreMesh = new THREE.Mesh(coreGeom, coreMat);
    ringsGroup.add(coreMesh);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 3.0, 20);
    light1.position.set(4, 5, 4);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x06b6d4, 2.0, 20);
    light2.position.set(-4, -4, -2);
    scene.add(light2);

    let mouseX = 0;
    let mouseY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', onMouseMove);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();
      const time = clock.getElapsedTime() * speed;

      // Independent multi-axis rotation per ring
      rings.forEach((ring, idx) => {
        const factor = (idx + 1) * 0.7;
        const dir = idx % 2 === 0 ? 1 : -1;

        ring.rotation.x += 0.015 * factor * dir * speed;
        ring.rotation.y += 0.02 * factor * speed;
        ring.rotation.z += 0.01 * dir * speed;
      });

      // Core pulsing glow
      const pulse = 1 + Math.sin(time * 3) * 0.1;
      coreMesh.scale.set(pulse, pulse, pulse);

      // Gyroscopic group follow
      ringsGroup.rotation.x += (mouseY * 0.6 - ringsGroup.rotation.x) * 0.05;
      ringsGroup.rotation.y += (mouseX * 0.6 - ringsGroup.rotation.y) * 0.05;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animId = requestAnimationFrame(animate);

    const onResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(animId);
      container.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);

      geometries.forEach((g) => g.dispose());
      materials.forEach((m) => m.dispose());
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [speed, ringCount, outerColor, coreColor, metalness, roughness]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] cursor-grab active:cursor-grabbing relative"
    />
  );
}
export default KineticGyroscopicRings;
