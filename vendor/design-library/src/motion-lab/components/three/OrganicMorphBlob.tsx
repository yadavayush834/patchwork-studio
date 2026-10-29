import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface OrganicMorphBlobProps {
  speed?: number;
  blobColor?: string;
  wireframe?: boolean;
  distortionStrength?: number;
  frequency?: number;
  roughness?: number;
}

export function OrganicMorphBlob({
  speed = 1.0,
  blobColor = '#10b981',
  wireframe = false,
  distortionStrength = 0.45,
  frequency = 2.0,
  roughness = 0.3,
}: OrganicMorphBlobProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // High subdivision icosahedron geometry
    const geometry = new THREE.IcosahedronGeometry(1.5, 32);
    const positionAttribute = geometry.attributes.position;
    const originalPositions = positionAttribute.clone();

    const material = new THREE.MeshStandardMaterial({
      color: new THREE.Color(blobColor),
      roughness,
      metalness: 0.8,
      wireframe,
      flatShading: false,
    });

    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    // Dynamic Multi-Point Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const light1 = new THREE.PointLight(0xffffff, 2.5, 20);
    light1.position.set(5, 5, 5);
    scene.add(light1);

    const light2 = new THREE.PointLight(0x06b6d4, 2.0, 20);
    light2.position.set(-5, -4, -3);
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
      const time = clock.getElapsedTime() * speed;

      const pos = positionAttribute.array as Float32Array;
      const orig = originalPositions.array as Float32Array;

      // 3D procedural harmonic noise displacement
      for (let i = 0; i < positionAttribute.count; i++) {
        const u = orig[i * 3];
        const v = orig[i * 3 + 1];
        const w = orig[i * 3 + 2];

        // Normalizing base vector
        const len = Math.sqrt(u * u + v * v + w * w);
        const nx = u / len;
        const ny = v / len;
        const nz = w / len;

        // Multi-frequency harmonic undulation
        const n1 = Math.sin(nx * frequency + time * 1.5) * Math.cos(ny * frequency + time);
        const n2 = Math.cos(ny * frequency * 1.5 - time) * Math.sin(nz * frequency * 1.5 + time * 1.2);
        const n3 = Math.sin((nx + ny + nz) * frequency * 2.0 + time * 2.0) * 0.4;

        const displacement = (n1 + n2 + n3) * distortionStrength;
        const r = 1.5 + displacement;

        pos[i * 3] = nx * r;
        pos[i * 3 + 1] = ny * r;
        pos[i * 3 + 2] = nz * r;
      }

      positionAttribute.needsUpdate = true;
      geometry.computeVertexNormals();

      mesh.rotation.y += 0.008 * speed + mouseX * 0.02;
      mesh.rotation.x += 0.005 * speed + mouseY * 0.02;

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
  }, [speed, blobColor, wireframe, distortionStrength, frequency, roughness]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] cursor-grab active:cursor-grabbing relative"
    />
  );
}
export default OrganicMorphBlob;
