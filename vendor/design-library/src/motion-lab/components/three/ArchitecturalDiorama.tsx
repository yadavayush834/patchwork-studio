import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface ArchitecturalDioramaProps {
  speed?: number;
  baseColor?: string;
  accentColor?: string;
  gridDensity?: number;
}

export function ArchitecturalDiorama({
  speed = 1.0,
  baseColor = '#1e293b',
  accentColor = '#f43f5e',
  gridDensity = 12,
}: ArchitecturalDioramaProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    // Isometric-like view with low FOV and high zoom distance
    const camera = new THREE.PerspectiveCamera(30, width / height, 0.1, 100);
    camera.position.set(7, 6, 7);
    camera.lookAt(0, 0, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    // Base Floating Platform
    const platformGeom = new THREE.CylinderGeometry(2.8, 3.0, 0.3, 32);
    geometries.push(platformGeom);
    const platformMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(baseColor),
      roughness: 0.6,
      metalness: 0.3,
    });
    materials.push(platformMat);
    const platform = new THREE.Mesh(platformGeom, platformMat);
    platform.position.y = -0.15;
    platform.receiveShadow = true;
    group.add(platform);

    // Monolith Towers
    const monoliths: Array<{ mesh: THREE.Mesh; baseY: number; phase: number }> = [];

    const monolithMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#334155'),
      roughness: 0.2,
      metalness: 0.7,
    });
    materials.push(monolithMat);

    const accentMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(accentColor),
      roughness: 0.1,
      metalness: 0.9,
      emissive: new THREE.Color(accentColor),
      emissiveIntensity: 0.2,
    });
    materials.push(accentMat);

    // Tower layouts
    const towersData = [
      { x: -0.8, z: -0.8, w: 0.6, h: 2.2, d: 0.6, accent: false },
      { x: 0.6, z: -0.5, w: 0.5, h: 1.8, d: 0.5, accent: true },
      { x: -0.4, z: 0.7, w: 0.7, h: 1.4, d: 0.7, accent: false },
      { x: 0.8, z: 0.8, w: 0.4, h: 2.6, d: 0.4, accent: false },
      { x: 0.0, z: 0.0, w: 0.5, h: 1.0, d: 0.5, accent: true },
    ];

    towersData.forEach((td, idx) => {
      const geom = new THREE.BoxGeometry(td.w, td.h, td.d);
      geometries.push(geom);
      const mesh = new THREE.Mesh(geom, td.accent ? accentMat : monolithMat);
      mesh.position.set(td.x, td.h / 2, td.z);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      group.add(mesh);

      monoliths.push({
        mesh,
        baseY: td.h / 2,
        phase: idx * 0.8,
      });
    });

    // Ambient Floating Rings around tall tower
    const ringGeom = new THREE.TorusGeometry(0.5, 0.03, 16, 64);
    geometries.push(ringGeom);
    const ringMesh = new THREE.Mesh(ringGeom, accentMat);
    ringMesh.rotation.x = Math.PI / 2;
    ringMesh.position.set(0.8, 2.0, 0.8);
    group.add(ringMesh);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight.position.set(8, 12, 6);
    dirLight.castShadow = true;
    dirLight.shadow.mapSize.width = 1024;
    dirLight.shadow.mapSize.height = 1024;
    scene.add(dirLight);

    const fillLight = new THREE.PointLight(0x06b6d4, 1.5, 15);
    fillLight.position.set(-6, 4, -4);
    scene.add(fillLight);

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
      const time = clock.getElapsedTime() * speed;

      // Bobbing architectural elevators
      monoliths.forEach((m) => {
        m.mesh.position.y = m.baseY + Math.sin(time * 2 + m.phase) * 0.12;
      });

      // Rotating ring beacon
      ringMesh.rotation.z += 0.02 * speed;
      ringMesh.position.y = 2.0 + Math.sin(time * 1.5) * 0.2;

      // Gentle turntable rotation
      group.rotation.y = time * 0.2 + mouseX * 0.4;
      group.position.y = Math.sin(time * 0.8) * 0.1;

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
  }, [speed, baseColor, accentColor, gridDensity]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] cursor-grab active:cursor-grabbing relative"
    />
  );
}
export default ArchitecturalDiorama;
