import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  RotateCcw,
  Sparkles,
  Sliders,
  Maximize2,
  Layers,
  ChevronRight,
  Zap,
  Activity,
  Flame,
  Award,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  client: string;
  title: string;
  category: string;
  award: string;
  accent: string;
  description: string;
  metrics: string;
  easingCurve: string;
}

export function MotionFirstWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeEasing, setActiveEasing] = useState<'cubic-bezier' | 'spring' | 'expo-out' | 'linear'>('expo-out');
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeCaseIdx, setActiveCaseIdx] = useState<number>(0);
  const [isExpandedLayout, setIsExpandedLayout] = useState<boolean>(false);
  const [mousePos, setMousePos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isMagneticHover, setIsMagneticHover] = useState<boolean>(false);

  const cases: CaseStudy[] = [
    {
      id: 'c-1',
      client: 'NIKE SUB-ZERO',
      title: 'Cryogenic Air Kinetic System',
      category: 'Experimental Product Choreography',
      award: 'FWA of the Day · Awwwards Site of the Year',
      accent: '#00f0ff',
      description: 'A 120 FPS kinetic footwear launch experience where gravity-inverted air bubbles compress and decompress under cursor acceleration. Designed with zero linear interpolation.',
      metrics: '+340% User Dwell Time · 1.8M Unique Interactions',
      easingCurve: 'cubic-bezier(0.16, 1, 0.3, 1)',
    },
    {
      id: 'c-2',
      client: 'POLESTAR AUTOMOTIVE',
      title: 'Spatial Cockpit Telemetry HUD',
      category: 'In-Vehicle Autonomous Interface',
      award: 'Red Dot Best of the Best 2026',
      accent: '#ff9900',
      description: 'Fluid spatial instrument cluster choreographing transition states between manual driver steering and autonomous highway cruise modes without momentary visual occlusion.',
      metrics: '42ms Micro-Transition Latency · Zero Driver Distraction',
      easingCurve: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
    },
    {
      id: 'c-3',
      client: 'TEENAGE ENGINEERING',
      title: 'OP-Z2 Synthesizer Web Studio',
      category: 'Tactile Physical-Digital Audio Playground',
      award: 'Cannes Lions Design Gold',
      accent: '#ff0055',
      description: 'Every rotary knob and tactile tactile dome button on the screen matches the spring tension and acoustic detents of the hardware device, producing haptic feedback.',
      metrics: '94,000 Tracks Sequenced In-Browser',
      easingCurve: 'cubic-bezier(0.25, 1, 0.5, 1)',
    },
  ];

  const currentCase = cases[activeCaseIdx];

  // Mouse tracking for magnetic effect
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left - rect.width / 2,
      y: e.clientY - rect.top - rect.height / 2,
    });
  };

  const getTransitionDuration = (baseSeconds: number) => {
    return `${(baseSeconds / speedMultiplier).toFixed(2)}s`;
  };

  return (
    <div className="min-h-screen bg-[#07080c] text-[#f0f3f8] font-sans selection:bg-[#ff0055] selection:text-white">
      {/* Top Studio Masthead */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#07080c]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/50 text-xs font-mono text-slate-300 hover:text-white hover:border-white transition-all flex items-center gap-2 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>RETURN TO GALLERY</span>
              </button>
            )}

            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#ff0055] animate-ping" />
              <div className="font-unbounded font-black text-sm tracking-tight text-white">
                VOLT &amp; FLUX // CHOREOGRAPHY ATELIER
              </div>
            </div>
          </div>

          {/* Real-time Easing & Velocity Studio Controls */}
          <div className="flex items-center gap-3 bg-black/60 p-1.5 rounded-full border border-white/15 text-xs font-mono">
            <span className="text-slate-400 pl-2 hidden sm:inline">EASING:</span>
            {(['expo-out', 'spring', 'cubic-bezier', 'linear'] as const).map((curve) => (
              <button
                key={curve}
                onClick={() => setActiveEasing(curve)}
                className={`px-3 py-1 rounded-full uppercase transition-all cursor-pointer ${
                  activeEasing === curve
                    ? 'bg-[#ff0055] text-white font-bold shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                {curve}
              </button>
            ))}

            <div className="h-4 w-px bg-white/20 mx-1" />

            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 0.5 : prev === 0.5 ? 2 : 1))}
              className="px-2.5 py-1 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 cursor-pointer"
              title="Animation speed multiplier"
            >
              {speedMultiplier}x SPEED
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section: Choreographed Typography & Magnetic Core */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#ff0055]/30 bg-[#ff0055]/10 text-xs font-mono text-[#ff0055]">
            <Zap className="w-3.5 h-3.5" />
            <span>MOTION AS THE PRIMARY BRAND IDENTITY</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black font-unbounded text-white tracking-tight leading-none">
            Movement <br />
            <span className="font-editorial italic font-normal text-[#ff0055]">
              precedes meaning.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
            We don't add animations after the interface is built. We choreograph anticipation, velocity, inertia, and deceleration so every pixel feels physically alive and emotionally deliberate.
          </p>

          {/* Magnetic Interaction Button Demo */}
          <div
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsMagneticHover(true)}
            onMouseLeave={() => {
              setIsMagneticHover(false);
              setMousePos({ x: 0, y: 0 });
            }}
            className="pt-4 inline-block"
          >
            <button
              style={{
                transform: isMagneticHover
                  ? `translate(${mousePos.x * 0.35}px, ${mousePos.y * 0.35}px)`
                  : 'translate(0px, 0px)',
                transition: isMagneticHover ? 'none' : `transform ${getTransitionDuration(0.5)} ease-out`,
              }}
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#ff0055] to-[#ff5500] text-white font-unbounded font-black text-xs tracking-wider shadow-[0_0_35px_rgba(255,0,85,0.4)] hover:shadow-[0_0_50px_rgba(255,0,85,0.8)] transition-shadow cursor-pointer flex items-center gap-3"
            >
              <Activity className="w-4 h-4" />
              <span>TEST MAGNETIC SPRING PHYSICS</span>
            </button>
          </div>
        </div>

        {/* Right Kinetic Canvas: Kinetic Expanding Geometry Matrix */}
        <div className="lg:col-span-5 flex justify-center">
          <div
            onClick={() => setIsExpandedLayout(!isExpandedLayout)}
            className="w-72 h-72 sm:w-88 sm:h-88 rounded-3xl border-2 border-white/20 p-8 flex flex-col justify-between relative overflow-hidden cursor-pointer shadow-2xl transition-all group"
            style={{
              transitionDuration: getTransitionDuration(0.6),
              borderColor: isExpandedLayout ? '#ff0055' : 'rgba(255,255,255,0.2)',
              transform: isExpandedLayout ? 'scale(1.04) rotate(2deg)' : 'scale(1) rotate(0deg)',
              background: 'radial-gradient(circle at 30% 30%, #160a12 0%, #08090d 100%)',
            }}
          >
            <div className="flex justify-between items-center text-xs font-mono text-slate-400">
              <span>CHOREOGRAPHY NODE</span>
              <span className="text-[#ff0055] font-bold">CLICK TO EXPAND</span>
            </div>

            {/* Kinetic Concentric Rings */}
            <div className="relative my-auto flex items-center justify-center">
              <div
                className="w-32 h-32 rounded-full border border-dashed border-[#ff0055] animate-spin-slow"
                style={{
                  animationDuration: `${12 / speedMultiplier}s`,
                }}
              />
              <div
                className="absolute w-20 h-20 rounded-full border border-dotted border-white/60 animate-spin-reverse"
                style={{
                  animationDuration: `${6 / speedMultiplier}s`,
                }}
              />
              <div className="absolute w-8 h-8 rounded-full bg-[#ff0055] shadow-[0_0_20px_#ff0055]" />
            </div>

            <div className="text-[10px] font-mono text-slate-400 flex justify-between border-t border-white/10 pt-2">
              <span>ACTIVE CURVE: {activeEasing.toUpperCase()}</span>
              <span>120 FPS FLUID</span>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Choreography Showcase */}
      <section className="py-16 border-t border-white/10 max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
          <div>
            <span className="text-xs font-mono text-[#ff0055] uppercase tracking-widest">Repertoire &amp; Case Studies</span>
            <h2 className="text-3xl sm:text-4xl font-black font-unbounded text-white mt-1">Award-Winning Movements</h2>
          </div>

          <div className="flex gap-2">
            {cases.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => setActiveCaseIdx(idx)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all cursor-pointer border ${
                  activeCaseIdx === idx
                    ? 'border-[#ff0055] bg-[#ff0055]/20 text-white font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                0{idx + 1} {c.client}
              </button>
            ))}
          </div>
        </div>

        {/* Selected Case Study Presentation Card */}
        <div
          className="p-8 sm:p-12 rounded-3xl border border-white/15 bg-white/5 backdrop-blur-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center transition-all"
          style={{
            borderColor: currentCase.accent,
            transitionDuration: getTransitionDuration(0.5),
          }}
        >
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono" style={{ color: currentCase.accent }}>
                <Award className="w-4 h-4" />
                <span>{currentCase.award}</span>
              </div>
              <h3 className="text-3xl sm:text-5xl font-black font-unbounded text-white leading-tight">
                {currentCase.title}
              </h3>
              <div className="text-xs font-mono text-slate-400">{currentCase.category}</div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {currentCase.description}
            </p>

            <div className="p-4 rounded-xl border border-white/10 bg-black/40 font-mono text-xs space-y-1">
              <div className="text-slate-500 uppercase text-[10px]">Verified Interaction Impact</div>
              <div className="text-white font-bold">{currentCase.metrics}</div>
              <div className="text-[10px] text-slate-400 pt-1">
                Curated Curve: <code className="text-[#ff0055]">{currentCase.easingCurve}</code>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div
              className="w-full aspect-video rounded-2xl border border-white/20 p-6 flex flex-col justify-between relative overflow-hidden shadow-2xl"
              style={{
                background: `radial-gradient(circle at 50% 50%, ${currentCase.accent}25 0%, #0d0f17 100%)`,
              }}
            >
              <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                <span>SIMULATION LIVE</span>
                <span className="w-2 h-2 rounded-full" style={{ backgroundColor: currentCase.accent }} />
              </div>

              {/* Animated Wave Bars */}
              <div className="flex items-end justify-center gap-2 h-24 my-auto">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-3 rounded-full animate-pulse"
                    style={{
                      height: `${(i * 11 + 25) % 80 + 20}%`,
                      backgroundColor: currentCase.accent,
                      animationDuration: `${(0.8 + i * 0.15) / speedMultiplier}s`,
                    }}
                  />
                ))}
              </div>

              <div className="text-[10px] font-mono text-slate-400 text-center">
                Real-Time Easing Response Monitor
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/60 py-10 text-center font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <div className="font-unbounded font-black text-white text-sm">
            VOLT &amp; FLUX · MOTION DESIGN ATELIER
          </div>
          <div>BERLIN · SAN FRANCISCO · ZÜRICH · HIGH-VELOCITY INTERACTIVE CHOREOGRAPHY</div>
        </div>
      </footer>
    </div>
  );
}
