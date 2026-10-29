import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Layers,
  Eye,
  Maximize2,
  Terminal,
  Compass,
  Unlock,
  Sliders,
  Check,
} from 'lucide-react';

interface FloatingArtifact {
  id: string;
  name: string;
  category: string;
  x: number;
  y: number;
  accent: string;
  active: boolean;
}

export function ExperimentalWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [morphPhase, setMorphPhase] = useState<number>(0);
  const [isSecretUnlocked, setIsSecretUnlocked] = useState<boolean>(false);
  const [activeClipIndex, setActiveClipIndex] = useState<number>(0);
  const [activeArtifactModal, setActiveArtifactModal] = useState<FloatingArtifact | null>(null);

  const [artifacts, setArtifacts] = useState<FloatingArtifact[]>([
    { id: 'art-1', name: 'NEURO-METABALL 01', category: 'Generative Topology', x: 20, y: 35, accent: '#00f0ff', active: true },
    { id: 'art-2', name: 'CYBER-CRYSTAL 04', category: 'Refraction Optics', x: 65, y: 25, accent: '#ff0055', active: false },
    { id: 'art-3', name: 'VOID-PARTICLE 09', category: 'Quantum Simulation', x: 45, y: 70, accent: '#ccff00', active: false },
  ]);

  // Track cursor position on viewport
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Continuous organic morphing shape timer
  useEffect(() => {
    let animId: number;
    const loop = () => {
      setMorphPhase((prev) => (prev + 0.03) % (Math.PI * 2));
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  // Dynamic SVG liquid morph coordinates
  const r1 = 120 + Math.sin(morphPhase) * 25;
  const r2 = 130 + Math.cos(morphPhase * 1.5) * 30;
  const r3 = 110 + Math.sin(morphPhase * 2) * 20;

  // Clip paths for transitions
  const clipPaths = [
    'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
    'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)',
    'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
  ];

  return (
    <div className="min-h-screen bg-[#060608] text-[#f0f3f8] font-sans selection:bg-[#00f0ff] selection:text-black overflow-x-hidden relative">
      {/* Floating Interactive Liquid Cursor Follower */}
      <div
        className="fixed pointer-events-none z-50 w-8 h-8 rounded-full border border-[#00f0ff] -translate-x-1/2 -translate-y-1/2 transition-transform duration-75 mix-blend-difference hidden md:block"
        style={{
          left: `${mousePos.x}px`,
          top: `${mousePos.y}px`,
        }}
      />

      {/* Top Header */}
      <header className="border-b border-white/10 sticky top-0 z-40 bg-[#060608]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/50 text-xs font-mono text-slate-300 hover:text-white hover:border-white transition-all flex items-center gap-2 cursor-pointer shadow"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>RETURN TO GALLERY</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#00f0ff] animate-ping" />
              <div className="font-unbounded font-black text-sm tracking-tight text-white">
                NEXUS // SHAPESHIFTER STUDIO
              </div>
            </div>
          </div>

          {/* Hidden Interaction Discovery Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsSecretUnlocked(!isSecretUnlocked)}
              className={`px-3.5 py-1.5 rounded-full border text-xs font-mono transition-all cursor-pointer flex items-center gap-1.5 ${
                isSecretUnlocked
                  ? 'border-[#ccff00] bg-[#ccff00]/20 text-[#ccff00]'
                  : 'border-white/15 bg-white/5 text-slate-400 hover:text-white'
              }`}
            >
              <Unlock className="w-3.5 h-3.5" />
              <span>{isSecretUnlocked ? 'SECRET WIRED MODE ACTIVE' : 'DISCOVER HIDDEN NODE'}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Visual Laboratory with Liquid Morphing Center */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f0ff]/30 bg-[#00f0ff]/10 text-xs font-mono text-[#00f0ff]">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPERIMENTAL INTERACTION MATRIX</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-unbounded text-white tracking-tight leading-tight">
            Curiosity <br />
            <span className="font-editorial italic font-normal text-[#00f0ff]">
              rewards discovery.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
            A multidisciplinary digital art atelier exploring liquid metaballs, non-Euclidean transitions, and hidden interactive discovery states.
          </p>

          {/* Morphing Clip-Path Switcher */}
          <div className="pt-2 space-y-2">
            <div className="text-xs font-mono text-slate-400 uppercase tracking-widest">
              Dynamic Clip-Path Transitions
            </div>
            <div className="flex gap-2 font-mono text-xs">
              {['Rectangular', 'Diamond Diamond', 'Hexagonal Facet'].map((name, i) => (
                <button
                  key={name}
                  onClick={() => setActiveClipIndex(i)}
                  className={`px-3.5 py-1.5 rounded-lg border transition-all cursor-pointer ${
                    activeClipIndex === i
                      ? 'border-[#00f0ff] bg-[#00f0ff]/20 text-white font-bold'
                      : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                  }`}
                >
                  {name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right Organic Liquid Blob Stage */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            className="w-72 h-72 sm:w-88 sm:h-88 rounded-3xl border border-white/20 p-8 flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-500 bg-black"
            style={{
              clipPath: clipPaths[activeClipIndex],
            }}
          >
            {/* SVG Organic Morphing Spline Shape */}
            <svg className="w-full h-full" viewBox="0 0 300 300">
              <defs>
                <linearGradient id="blobGrad" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#00f0ff" />
                  <stop offset="50%" stopColor="#ff0055" />
                  <stop offset="100%" stopColor="#ccff00" />
                </linearGradient>
              </defs>

              <path
                d={`M 150,${150 - r1} C ${150 + r2},${150 - r1} ${150 + r2},${150 + r3} 150,${150 + r3} C ${150 - r1},${150 + r3} ${150 - r2},${150 - r1} 150,${150 - r1} Z`}
                fill={isSecretUnlocked ? 'none' : 'url(#blobGrad)'}
                stroke={isSecretUnlocked ? '#ccff00' : 'none'}
                strokeWidth={isSecretUnlocked ? '2' : '0'}
                className="transition-all duration-300"
              />
            </svg>

            <div className="absolute text-center pointer-events-none">
              <div className="font-unbounded font-black text-sm text-white">ORGANIC METABALL</div>
              <div className="font-mono text-[9px] text-slate-400">PHASE: {(morphPhase).toFixed(2)} RAD</div>
            </div>
          </div>
        </div>
      </section>

      {/* Floating Draggable / Clickable Interactive Artifacts Canvas */}
      <section className="py-16 border-t border-white/10 max-w-7xl mx-auto px-6 space-y-8">
        <div className="flex justify-between items-center border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">Interactive Artifacts</span>
            <h2 className="text-2xl sm:text-3xl font-black font-unbounded text-white mt-1">Spatial Artifact Exploration</h2>
          </div>
          <div className="text-xs font-mono text-slate-400">
            CLICK ANY SPECIMEN TO EXPAND
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {artifacts.map((art) => (
            <div
              key={art.id}
              onClick={() => setActiveArtifactModal(art)}
              className="p-6 rounded-2xl border border-white/10 bg-white/5 hover:border-[#00f0ff] transition-all cursor-pointer space-y-4 group"
            >
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-slate-400">{art.category}</span>
                <span className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: art.accent }} />
              </div>

              <h3 className="font-unbounded font-black text-lg text-white group-hover:text-[#00f0ff] transition-colors">
                {art.name}
              </h3>

              <div className="text-[11px] font-mono text-slate-500 flex justify-between border-t border-white/10 pt-2">
                <span>CANVAS COORD: X{art.x} / Y{art.y}</span>
                <span className="text-white group-hover:underline">Inspect &rarr;</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Secret Wireframe Studio Mode Drawer */}
      {isSecretUnlocked && (
        <section className="py-12 border-t border-[#ccff00]/40 bg-[#0d120a] max-w-7xl mx-auto px-6 rounded-3xl my-12 space-y-4">
          <div className="flex items-center gap-2 text-xs font-mono text-[#ccff00] font-bold">
            <Zap className="w-4 h-4" />
            <span>SECRET HARDWARE WIREFRAME SKETCH MODE UNLOCKED</span>
          </div>
          <div className="font-mono text-xs text-slate-300 leading-relaxed max-w-3xl">
            You discovered the secret discovery node. In this mode, hardware coordinates and SVG bezier curves are exposed directly to the inspector. Continuous interaction triggers raw topological feedback.
          </div>
        </section>
      )}

      {/* Artifact Modal */}
      {activeArtifactModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full p-8 rounded-3xl border border-white/20 bg-[#0c0e15] text-white space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#00f0ff]">{activeArtifactModal.category}</span>
              <h3 className="text-2xl font-black font-unbounded">{activeArtifactModal.name}</h3>
            </div>
            <p className="text-sm text-slate-300 font-light leading-relaxed">
              An experimental creative artifact exploring organic non-linear bezier curves and real-time cursor gravitational attraction.
            </p>
            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveArtifactModal(null)}
                className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all cursor-pointer"
              >
                Close Specimen
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <div className="font-unbounded font-black text-white text-sm">
            NEXUS // EXPERIMENTAL ART ATELIER
          </div>
          <div>SURPRISING INTERACTIONS · MULTIDISCIPLINARY DESIGN · 2026</div>
        </div>
      </footer>
    </div>
  );
}
