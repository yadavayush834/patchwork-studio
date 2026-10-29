import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface VoxelTopographyWavesProps {
  speed?: number;
  waveAmplitude?: number;
  gridSize?: number;
  peakColor?: string;
  baseColor?: string;
  wireframe?: boolean;
}

export function VoxelTopographyWaves({
  speed = 1.0,
  waveAmplitude = 1.2,
  gridSize = 32,
  peakColor = '#38bdf8',
  baseColor = '#1e1b4b',
  wireframe = false,
}: VoxelTopographyWavesProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const width = container.clientWidth || 640;
    const height = container.clientHeight || 360;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x06070a);

    // Camera with isometric perspective
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(40, 36, 40);
    camera.lookAt(0, 0, 0);

    // WebGL Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.8);
    dirLight.position.set(20, 40, 20);
    scene.add(dirLight);

    // Instanced Mesh of Voxel Columns
    const count = gridSize * gridSize;
    const boxGeo = new THREE.BoxGeometry(0.85, 1, 0.85);
    const boxMat = new THREE.MeshStandardMaterial({
      roughness: 0.3,
      metalness: 0.2,
      wireframe,
    });

    const instancedMesh = new THREE.InstancedMesh(boxGeo, boxMat, count);
    scene.add(instancedMesh);

    const dummy = new THREE.Object3D();
    const colorA = new THREE.Color(baseColor);
    const colorB = new THREE.Color(peakColor);

    let time = 0;
    let animId: number;

    const render = () => {
      time += 0.025 * speed;

      const halfGrid = gridSize / 2;
      let idx = 0;

      for (let x = 0; x < gridSize; x++) {
        for (let z = 0; z < gridSize; z++) {
          const posX = x - halfGrid;
          const posZ = z - halfGrid;

          // Multi-harmonic wave interference height function
          const dist = Math.sqrt(posX * posX + posZ * posZ);
          const h1 = Math.sin(posX * 0.25 + time) * Math.cos(posZ * 0.25 + time);
          const h2 = Math.sin(dist * 0.35 - time * 1.5) * 0.6;
          const heightVal = Math.max(0.5, (h1 + h2 + 1.2) * 2.8 * waveAmplitude);

          dummy.position.set(posX * 1.1, heightVal / 2, posZ * 1.1);
          dummy.scale.set(1, heightVal, 1);
          dummy.updateMatrix();

          instancedMesh.setMatrixAt(idx, dummy.matrix);

          // Interpolate height color
          const colorFactor = Math.min(1, Math.max(0, heightVal / (5 * waveAmplitude)));
          const mixedColor = colorA.clone().lerp(colorB, colorFactor);
          instancedMesh.setColorAt(idx, mixedColor);

          idx++;
        }
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) instancedMesh.instanceColor.needsUpdate = true;

      // Slow cinematic camera orbit
      const camAngle = time * 0.15;
      camera.position.x = Math.sin(camAngle) * 48;
      camera.position.z = Math.cos(camAngle) * 48;
      camera.lookAt(0, 2, 0);

      renderer.render(scene, camera);
      animId = requestAnimationFrame(render);
    };

    render();

    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth || 640;
      const h = container.clientHeight || 360;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      boxGeo.dispose();
      boxMat.dispose();
      renderer.dispose();
    };
  }, [speed, waveAmplitude, gridSize, peakColor, baseColor, wireframe]);

  return (
    <div className="relative w-full h-full min-h-[360px] bg-[#06070a] rounded-xl overflow-hidden flex items-center justify-center">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
export default VoxelTopographyWaves;
