import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface ParametricRibbonProps {
  speed?: number;
  color?: string;
  wireframe?: boolean;
  twistFactor?: number;
  roughness?: number;
}

export function ParametricRibbon({
  speed = 1.0,
  color = '#06b6d4',
  wireframe = false,
  twistFactor = 3.0,
  roughness = 0.25,
}: ParametricRibbonProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 340;

    // Scene, Camera, Renderer
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Parametric Moebius / Ribbon Curve
    const segments = 180;
    const widthSegments = 16;
    const geometry = new THREE.PlaneGeometry(1, 1, segments, widthSegments);

    const pos = geometry.attributes.position;
    const originalPositions = pos.clone();

    // Material with physical metallic properties
    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(color),
      roughness,
      metalness: 0.85,
      wireframe,
      side: THREE.DoubleSide,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.0);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0x38bdf8, 1.5);
    dirLight2.position.set(-5, -3, -2);
    scene.add(dirLight2);

    let mouseX = 0;
    let mouseY = 0;
    let targetRotX = 0;
    let targetRotY = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width) * 2 - 1;
      mouseY = -(((e.clientY - rect.top) / rect.height) * 2 - 1);
    };

    container.addEventListener('mousemove', onMouseMove);

    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsedTime = clock.getElapsedTime() * speed;

      // Deform plane vertices into parametric twist ribbon
      const p = pos.array as Float32Array;
      const op = originalPositions.array as Float32Array;

      for (let i = 0; i < pos.count; i++) {
        const u = op[i * 3] * 4.0; // lengthwise parameter (-2 to 2)
        const v = op[i * 3 + 1] * 0.7; // crosswise width (-0.35 to 0.35)

        const angle = u * twistFactor + elapsedTime * 1.2;
        const radius = 1.6 + Math.cos(u * 1.5 + elapsedTime) * 0.3;

        // Toroidal ribbon formula
        const x = Math.cos(u * 1.2) * radius + Math.cos(angle) * v;
        const y = Math.sin(u * 1.2) * radius + Math.sin(angle) * v;
        const z = Math.sin(u * 2.5 + elapsedTime * 0.8) * 0.8 + Math.cos(angle * 0.5) * v;

        p[i * 3] = x;
        p[i * 3 + 1] = y;
        p[i * 3 + 2] = z;
      }

      pos.needsUpdate = true;
      geometry.computeVertexNormals();

      // Smooth inertia rotation following pointer
      targetRotX = mouseY * 0.8;
      targetRotY = mouseX * 0.8;

      mesh.rotation.x += (targetRotX - mesh.rotation.x) * 0.05 + 0.005 * speed;
      mesh.rotation.y += (targetRotY - mesh.rotation.y) * 0.05 + 0.01 * speed;

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

      geometry.dispose();
      material.dispose();
      renderer.dispose();
      if (renderer.domElement.parentNode) {
        renderer.domElement.parentNode.removeChild(renderer.domElement);
      }
    };
  }, [speed, color, wireframe, twistFactor, roughness]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] cursor-grab active:cursor-grabbing relative"
    />
  );
}
export default ParametricRibbon;
