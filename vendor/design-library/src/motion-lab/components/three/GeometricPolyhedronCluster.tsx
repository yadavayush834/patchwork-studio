import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export interface GeometricPolyhedronClusterProps {
  speed?: number;
  coreColor?: string;
  wireColor?: string;
  expansionFactor?: number;
  count?: number;
}

export function GeometricPolyhedronCluster({
  speed = 1.0,
  coreColor = '#f59e0b',
  wireColor = '#38bdf8',
  expansionFactor = 1.0,
  count = 14,
}: GeometricPolyhedronClusterProps) {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    const width = container.clientWidth || 500;
    const height = container.clientHeight || 340;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 9);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    const nodes: Array<{
      mesh: THREE.Mesh;
      basePos: THREE.Vector3;
      rotSpeed: THREE.Vector3;
    }> = [];

    const geometries: THREE.BufferGeometry[] = [];
    const materials: THREE.Material[] = [];

    // Shared Materials
    const solidMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color(coreColor),
      metalness: 0.85,
      roughness: 0.25,
    });
    materials.push(solidMat);

    const wireMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color(wireColor),
      wireframe: true,
      transparent: true,
      opacity: 0.6,
    });
    materials.push(wireMat);

    // Seed Polyhedron Nodes in spherical distribution
    for (let i = 0; i < count; i++) {
      const phi = Math.acos(-1 + (2 * i) / count);
      const theta = Math.sqrt(count * Math.PI) * phi;

      const r = 2.2;
      const basePos = new THREE.Vector3(
        r * Math.cos(theta) * Math.sin(phi),
        r * Math.sin(theta) * Math.sin(phi),
        r * Math.cos(phi)
      );

      // Alternating Platonic solids: Octahedron, Dodecahedron, Icosahedron
      const geomType = i % 3;
      let geom: THREE.BufferGeometry;
      if (geomType === 0) geom = new THREE.OctahedronGeometry(0.45);
      else if (geomType === 1) geom = new THREE.DodecahedronGeometry(0.38);
      else geom = new THREE.IcosahedronGeometry(0.42);

      geometries.push(geom);

      const mesh = new THREE.Mesh(geom, i % 2 === 0 ? solidMat : wireMat);
      mesh.position.copy(basePos);
      group.add(mesh);

      nodes.push({
        mesh,
        basePos,
        rotSpeed: new THREE.Vector3(
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04,
          (Math.random() - 0.5) * 0.04
        ),
      });
    }

    // Dynamic Connector Lines
    const lineGeom = new THREE.BufferGeometry();
    geometries.push(lineGeom);
    const lineMat = new THREE.LineBasicMaterial({
      color: new THREE.Color(wireColor),
      transparent: true,
      opacity: 0.25,
    });
    materials.push(lineMat);

    const lineSegments = new THREE.LineSegments(lineGeom, lineMat);
    group.add(lineSegments);

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 2.5, 20);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

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

      // Pulse expansion scale
      const breath = 1.0 + Math.sin(time * 1.5) * 0.2 * expansionFactor;

      const linePositions: number[] = [];

      nodes.forEach((node, i) => {
        // Position expands along radial vector
        const currentPos = node.basePos.clone().multiplyScalar(breath);
        node.mesh.position.copy(currentPos);

        // Self rotation
        node.mesh.rotation.x += node.rotSpeed.x * speed;
        node.mesh.rotation.y += node.rotSpeed.y * speed;
        node.mesh.rotation.z += node.rotSpeed.z * speed;

        // Build connector network between neighboring nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const otherPos = nodes[j].basePos.clone().multiplyScalar(breath);
          if (currentPos.distanceTo(otherPos) < 2.5 * breath) {
            linePositions.push(
              currentPos.x,
              currentPos.y,
              currentPos.z,
              otherPos.x,
              otherPos.y,
              otherPos.z
            );
          }
        }
      });

      // Update line segments
      lineGeom.setAttribute(
        'position',
        new THREE.Float32BufferAttribute(linePositions, 3)
      );

      // Whole cluster rotation with pointer momentum
      group.rotation.y += 0.008 * speed + mouseX * 0.015;
      group.rotation.x += 0.004 * speed + mouseY * 0.015;

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
  }, [speed, coreColor, wireColor, expansionFactor, count]);

  return (
    <div
      ref={mountRef}
      className="w-full h-full min-h-[340px] flex items-center justify-center rounded-2xl bg-[#090b14] overflow-hidden border border-[#1b2234] cursor-grab active:cursor-grabbing relative"
    />
  );
}
export default GeometricPolyhedronCluster;
