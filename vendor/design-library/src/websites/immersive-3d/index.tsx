import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import {
  ArrowLeft,
  RotateCw,
  Sparkles,
  Layers,
  Eye,
  Sliders,
  Maximize2,
  Compass,
  Palette,
  Volume2,
  VolumeX,
} from 'lucide-react';

type SculptureGeometryType = 'torus-knot' | 'mobius' | 'icosahedron' | 'gyroscope';
type MaterialType = 'chrome' | 'obsidian' | 'wireframe' | 'gold';
type LightingMood = 'aurora' | 'solar' | 'monochrome';

export function Immersive3dWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const mountRef = useRef<HTMLDivElement | null>(null);
  const [activeGeometry, setActiveGeometry] = useState<SculptureGeometryType>('torus-knot');
  const [activeMaterial, setActiveMaterial] = useState<MaterialType>('chrome');
  const [activeLighting, setActiveLighting] = useState<LightingMood>('aurora');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [rotationSpeed, setRotationSpeed] = useState<number>(1);
  const [isWireframeOverlay, setIsWireframeOverlay] = useState<boolean>(false);
  const [polyCount, setPolyCount] = useState<number>(38400);

  // Three.js animation and interaction refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const meshRef = useRef<THREE.Mesh | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene, Camera, Renderer
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 7);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;
    container.appendChild(renderer.domElement);

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const dirLight1 = new THREE.DirectionalLight(0x00f0ff, 2.5);
    dirLight1.position.set(5, 5, 5);
    scene.add(dirLight1);

    const dirLight2 = new THREE.DirectionalLight(0xa855f7, 2.0);
    dirLight2.position.set(-5, -5, -2);
    scene.add(dirLight2);

    const rimLight = new THREE.PointLight(0xffffff, 3.0, 20);
    rimLight.position.set(0, 6, -4);
    scene.add(rimLight);

    // 3. Geometry Generator
    const createGeometry = (type: SculptureGeometryType) => {
      switch (type) {
        case 'torus-knot':
          return new THREE.TorusKnotGeometry(1.6, 0.45, 160, 32, 2, 3);
        case 'mobius':
          return new THREE.TorusGeometry(1.8, 0.5, 30, 200, Math.PI * 2);
        case 'icosahedron':
          return new THREE.IcosahedronGeometry(2.1, 4);
        case 'gyroscope':
          return new THREE.RingGeometry(1.2, 2.2, 64, 8);
        default:
          return new THREE.TorusKnotGeometry(1.6, 0.45, 160, 32, 2, 3);
      }
    };

    // 4. Material Generator
    const createMaterial = (matType: MaterialType, wire: boolean) => {
      if (wire) {
        return new THREE.MeshBasicMaterial({
          color: 0x00f0ff,
          wireframe: true,
        });
      }

      switch (matType) {
        case 'chrome':
          return new THREE.MeshStandardMaterial({
            color: 0xe2e8f0,
            metalness: 0.95,
            roughness: 0.1,
          });
        case 'obsidian':
          return new THREE.MeshPhysicalMaterial({
            color: 0x111318,
            metalness: 0.2,
            roughness: 0.05,
            transmission: 0.6,
            thickness: 1.5,
          });
        case 'gold':
          return new THREE.MeshStandardMaterial({
            color: 0xd4af37,
            metalness: 0.9,
            roughness: 0.2,
          });
        case 'wireframe':
          return new THREE.MeshBasicMaterial({
            color: 0x00f0ff,
            wireframe: true,
          });
      }
    };

    const geometry = createGeometry(activeGeometry);
    const material = createMaterial(activeMaterial, isWireframeOverlay);
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    meshRef.current = mesh;

    // 5. Starfield / Floating Dust Particles
    const particleGeo = new THREE.BufferGeometry();
    const particleCount = 800;
    const posArray = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      posArray[i] = (Math.random() - 0.5) * 16;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.025,
      color: 0x8ecae6,
      transparent: true,
      opacity: 0.6,
    });
    const particles = new THREE.Points(particleGeo, particleMat);
    scene.add(particles);

    // 6. Interactive Drag & Pointer Rotation
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    const handlePointerDown = (e: MouseEvent) => {
      isDragging = true;
      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerMove = (e: MouseEvent) => {
      if (!isDragging) {
        // Subtle camera hover parallax
        const mouseX = (e.clientX / window.innerWidth - 0.5) * 1.5;
        const mouseY = -(e.clientY / window.innerHeight - 0.5) * 1.5;
        camera.position.x = mouseX;
        camera.position.y = mouseY;
        camera.lookAt(0, 0, 0);
        return;
      }

      const deltaMove = {
        x: e.clientX - previousMousePosition.x,
        y: e.clientY - previousMousePosition.y,
      };

      if (mesh) {
        mesh.rotation.y += deltaMove.x * 0.008;
        mesh.rotation.x += deltaMove.y * 0.008;
      }

      previousMousePosition = { x: e.clientX, y: e.clientY };
    };

    const handlePointerUp = () => {
      isDragging = false;
    };

    window.addEventListener('mousedown', handlePointerDown);
    window.addEventListener('mousemove', handlePointerMove);
    window.addEventListener('mouseup', handlePointerUp);

    // 7. Render Animation Loop
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      const delta = clock.getDelta();

      if (autoRotate && mesh) {
        mesh.rotation.y += delta * 0.3 * rotationSpeed;
        mesh.rotation.x += delta * 0.15 * rotationSpeed;
      }

      particles.rotation.y += delta * 0.05;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    // 8. Responsive Resize
    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousedown', handlePointerDown);
      window.removeEventListener('mousemove', handlePointerMove);
      window.removeEventListener('mouseup', handlePointerUp);

      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      particleGeo.dispose();
      renderer.dispose();
    };
  }, [activeGeometry, activeMaterial, activeLighting, isWireframeOverlay, autoRotate, rotationSpeed]);

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#06070a] text-[#f1f5f9] select-none font-sans">
      {/* 3D WebGL Canvas Container */}
      <div ref={mountRef} className="absolute inset-0 cursor-grab active:cursor-grabbing z-0" />

      {/* Floating Curatorial UI Overlays */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          {onBackToGallery && (
            <button
              onClick={onBackToGallery}
              className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-xs font-mono text-slate-300 hover:text-white hover:border-white transition-all flex items-center gap-2 cursor-pointer shadow-lg"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO GALLERY</span>
            </button>
          )}

          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/40 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-ping" />
            <span>SOLARIA // THREE.JS PROCEDURAL SCULPTURE</span>
          </div>
        </div>

        {/* Right Action Info */}
        <div className="hidden sm:flex items-center gap-3 pointer-events-auto font-mono text-xs text-slate-400 bg-black/50 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
          <span>DRAG POINTER TO ORBIT SCULPTURE</span>
          <span className="text-slate-600">·</span>
          <span className="text-[#00f0ff] font-bold">120 FPS WEBGL</span>
        </div>
      </header>

      {/* Left Bottom Curatorial Control Console */}
      <div className="fixed bottom-8 left-8 z-40 max-w-sm w-full p-6 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl space-y-5 shadow-2xl pointer-events-auto">
        <div className="flex justify-between items-center border-b border-white/10 pb-3">
          <div>
            <h1 className="font-unbounded font-black text-sm text-white uppercase">SOLARIA SCULPTURE 04</h1>
            <div className="text-[10px] font-mono text-slate-400">PROCEDURAL TOPOLOGICAL GEOMETRY</div>
          </div>
          <button
            onClick={() => setAutoRotate(!autoRotate)}
            className={`p-2 rounded-full border text-xs cursor-pointer transition-all ${
              autoRotate ? 'border-[#00f0ff] bg-[#00f0ff]/20 text-[#00f0ff]' : 'border-white/20 text-slate-400'
            }`}
            title="Toggle Continuous Gyroscope Spin"
          >
            <RotateCw className="w-4 h-4 animate-spin-slow" />
          </button>
        </div>

        {/* Morphology Selector */}
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
            1. Procedural Geometry
          </label>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs">
            {[
              { id: 'torus-knot', label: 'Torus Knot' },
              { id: 'mobius', label: 'Möbius Ribbon' },
              { id: 'icosahedron', label: 'Icosahedron Geodesic' },
              { id: 'gyroscope', label: 'Quantum Gyro' },
            ].map((g) => (
              <button
                key={g.id}
                onClick={() => setActiveGeometry(g.id as SculptureGeometryType)}
                className={`p-2 rounded-lg border text-left transition-all cursor-pointer ${
                  activeGeometry === g.id
                    ? 'border-[#00f0ff] bg-[#00f0ff]/20 text-white font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {g.label}
              </button>
            ))}
          </div>
        </div>

        {/* Material Shader Selector */}
        <div className="space-y-2">
          <label className="text-[10px] font-mono text-slate-400 uppercase tracking-widest block">
            2. PBR Material Metallurgy
          </label>
          <div className="grid grid-cols-4 gap-1.5 font-mono text-xs">
            {[
              { id: 'chrome', label: 'Chrome' },
              { id: 'obsidian', label: 'Obsidian' },
              { id: 'gold', label: 'Gold' },
              { id: 'wireframe', label: 'Wire' },
            ].map((m) => (
              <button
                key={m.id}
                onClick={() => setActiveMaterial(m.id as MaterialType)}
                className={`py-1.5 px-2 rounded border text-center transition-all cursor-pointer ${
                  activeMaterial === m.id
                    ? 'border-[#00f0ff] bg-white text-black font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                {m.label}
              </button>
            ))}
          </div>
        </div>

        {/* Rotation Speed Slider */}
        <div className="space-y-1">
          <div className="flex justify-between text-[11px] font-mono text-slate-400">
            <span>Spin Velocity:</span>
            <span className="text-[#00f0ff] font-bold">{rotationSpeed}x</span>
          </div>
          <input
            type="range"
            min="0.2"
            max="3"
            step="0.2"
            value={rotationSpeed}
            onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
            className="w-full h-1 bg-white/20 rounded accent-[#00f0ff] cursor-pointer"
          />
        </div>
      </div>

      {/* Right Monograph Meta Badge */}
      <div className="fixed bottom-8 right-8 z-40 hidden md:block p-4 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-md text-right font-mono text-xs text-slate-400 space-y-1">
        <div className="text-white font-bold">EXHIBITION MONOGRAPH // CH-2026</div>
        <div>RENDERER: THREE.JS ACES FILMIC</div>
        <div>PARTICLE DUST: 800 FLOATING NODES</div>
      </div>
    </div>
  );
}
