import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ChevronDown,
  ChevronUp,
  Cpu,
  Layers,
  Radio,
  Zap,
  Activity,
  Sliders,
  Check,
  Eye,
  Info,
  RotateCcw,
} from 'lucide-react';

interface NarrativeChapter {
  id: string;
  step: string;
  title: string;
  phaseName: string;
  telemetry: string;
  description: string;
  specDetails: { label: string; value: string }[];
}

export function ScrollytellingWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [currentChapterIdx, setCurrentChapterIdx] = useState<number>(0);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [decoherenceTime, setDecoherenceTime] = useState<number>(142); // ms
  const [errorRate, setErrorRate] = useState<string>('1.2 × 10⁻⁶');
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  const chapters: NarrativeChapter[] = [
    {
      id: 'ch-1',
      step: 'CHAPTER 01',
      title: 'The Isolated Topological Singularity',
      phaseName: 'PHASE I · GROUND STATE ZERO',
      telemetry: 'VACUUM CHAMBER PRESSURE: 10⁻¹¹ TORR · 12 mK',
      description: 'At fifteen millikelvin above absolute zero, thermal noise ceases. In the quiet of a cryostat, a single topological Majorana zero mode is coaxed into existence. It holds no classical charge, existing only as a mathematical knot in the vacuum.',
      specDetails: [
        { label: 'Qubit State', value: '|0⟩ + e^(iφ)|1⟩' },
        { label: 'Cryostat Temp', value: '0.012 Kelvin' },
        { label: 'Magnetic Flux', value: 'Φ₀ = h/2e' },
      ],
    },
    {
      id: 'ch-2',
      step: 'CHAPTER 02',
      title: 'Tripartite Harmonic Entanglement',
      phaseName: 'PHASE II · COHERENCE RESONANCE',
      telemetry: 'BELL INEQUALITY TEST: S = 2.828 (MAXIMAL VIOLATION)',
      description: 'By applying microwave flux pulses across nanometer superconducting junctions, the isolated singularity splits into a tripartite cluster. Information is no longer localized in one physical coordinate—it exists in the non-local correlation between nodes.',
      specDetails: [
        { label: 'Entanglement Fidelity', value: '99.984%' },
        { label: 'Concurrence (C)', value: '0.992' },
        { label: 'GHZ State Order', value: '3-Particle Bell Cluster' },
      ],
    },
    {
      id: 'ch-3',
      step: 'CHAPTER 03',
      title: 'Optical Waveguide Ring Resonator',
      phaseName: 'PHASE III · PHOTONIC MESH',
      telemetry: 'SILICON NITRIDE WAVEGUIDES · Q-FACTOR: 8.5 × 10⁶',
      description: 'Single infrared photons at 1550nm enter micro-ring resonators carved into silicon nitride wafers. The photons circulate millions of times, interfacing directly with the superconducting qubits to translate atomic spins into ultra-fast optical data packets.',
      specDetails: [
        { label: 'Cavity Q-Factor', value: '8,500,000' },
        { label: 'Wavelength', value: '1550.12 nm (C-Band)' },
        { label: 'Coupling Loss', value: '< 0.08 dB/cm' },
      ],
    },
    {
      id: 'ch-4',
      step: 'CHAPTER 04',
      title: 'Neural Quantum Tensor Multiplier',
      phaseName: 'PHASE IV · MATRIX PROPAGATION',
      telemetry: 'SYSTOLIC ARRAY THROUGHPUT: 18.4 PETA-FLOPS/WATT',
      description: 'Classical matrix multiplications that would require thousands of GPU clusters collapse into instantaneous quantum interference patterns. Millions of probability amplitudes interfere constructively, outputting optimal tensor gradients in one clock cycle.',
      specDetails: [
        { label: 'Matrix Dimensions', value: '4096 × 4096 Unitary' },
        { label: 'Quantum Speedup', value: 'O(N³) → O(log N)' },
        { label: 'Energy Per FLOP', value: '0.14 Femtojoules' },
      ],
    },
    {
      id: 'ch-5',
      step: 'CHAPTER 05',
      title: 'Global Orbital Synthesis Grid',
      phaseName: 'PHASE V · PLANETARY HARMONY',
      telemetry: 'INTERSTELLAR DOWNLINK · ZERO-LATENCY INFERENCE',
      description: 'The synthesis engine breaks beyond cryogenic laboratory confines. Interconnected through low-earth-orbit laser constellations, the engine forms a planetary intelligence mesh capable of modeling planetary climate systems and molecular protein folds in real time.',
      specDetails: [
        { label: 'Orbital Satellites', value: '144 Laser Relay Nodes' },
        { label: 'Global Coherence', value: 'Transcontinental Sync' },
        { label: 'Active Tasks', value: 'Enzyme Folding & Fusion' },
      ],
    },
  ];

  const currentChapter = chapters[currentChapterIdx];

  // Handle scroll events inside container to update active chapter
  const handleScroll = () => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    if (maxScroll <= 0) return;

    const progress = el.scrollTop / maxScroll;
    setScrollProgress(progress);

    // Map progress to chapter 0 through 4
    const idx = Math.min(chapters.length - 1, Math.floor(progress * chapters.length));
    setCurrentChapterIdx(idx);
  };

  const jumpToChapter = (idx: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const maxScroll = el.scrollHeight - el.clientHeight;
    const targetScroll = (idx / (chapters.length - 1)) * maxScroll;
    el.scrollTo({ top: targetScroll, behavior: 'smooth' });
    setCurrentChapterIdx(idx);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#050609] text-[#e2e8f0] font-sans selection:bg-[#00f0ff] selection:text-black">
      {/* Top Fixed Header */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 sm:px-10 py-5 flex items-center justify-between border-b border-white/10 bg-[#050609]/90 backdrop-blur-md">
        <div className="flex items-center gap-4">
          {onBackToGallery && (
            <button
              onClick={onBackToGallery}
              className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 text-xs font-mono text-slate-300 hover:text-white hover:border-white/50 transition-all flex items-center gap-2 cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>RETURN TO GALLERY</span>
            </button>
          )}

          <div className="flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold">
            <Cpu className="w-4 h-4 animate-pulse" />
            <span>CHRONOS // SCROLL-DRIVEN SYNTHESIS MONOGRAPH</span>
          </div>
        </div>

        {/* Global Progress Percentage */}
        <div className="flex items-center gap-3 font-mono text-xs text-slate-400">
          <span>PROGRESS:</span>
          <span className="text-[#00f0ff] font-bold">{Math.round(scrollProgress * 100)}%</span>
          <div className="w-20 h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#00f0ff] transition-all duration-150"
              style={{ width: `${scrollProgress * 100}%` }}
            />
          </div>
        </div>
      </header>

      {/* Main Split Layout: Left Sticky Pinned Visual Stage, Right Scrollable Narrative Feed */}
      <div className="w-full h-full pt-20 grid grid-cols-1 lg:grid-cols-12 overflow-hidden">
        {/* LEFT COLUMN: Pinned Interactive Quantum Apparatus (Sticky Scene) */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between p-8 sm:p-12 border-r border-white/10 relative overflow-hidden bg-[#07090f]">
          {/* Background Grid Graticules */}
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

          {/* Top Apparatus Telemetry */}
          <div className="flex justify-between items-start text-xs font-mono text-slate-400 relative z-10">
            <div>
              <div className="text-[10px] text-slate-500 uppercase">Apparatus Status</div>
              <div className="text-[#00f0ff] font-bold">{currentChapter.telemetry}</div>
            </div>

            <div className="text-right">
              <div className="text-[10px] text-slate-500 uppercase">Coherence Longevity</div>
              <div className="text-white font-bold">{decoherenceTime} ms (Superconducting)</div>
            </div>
          </div>

          {/* Central Living Quantum Visualization Scene */}
          <div className="my-auto flex flex-col items-center justify-center relative z-10 py-6">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 rounded-full border border-white/15 bg-black/60 shadow-[0_0_60px_rgba(0,240,255,0.1)] flex items-center justify-center overflow-hidden">
              {/* Outer Gyroscopic Rotating Rings */}
              <div
                className="absolute inset-4 rounded-full border border-dashed border-[#00f0ff]/40 animate-spin-slow pointer-events-none"
              />
              <div
                className="absolute inset-10 rounded-full border border-dotted border-purple-500/50 animate-spin-reverse pointer-events-none"
              />

              {/* Stage 1: Singularity (Center pulsing orb) */}
              {currentChapterIdx === 0 && (
                <div className="flex flex-col items-center justify-center animate-in zoom-in-75 duration-500">
                  <div className="w-16 h-16 rounded-full bg-[#00f0ff] animate-ping opacity-40 absolute" />
                  <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00f0ff] to-white shadow-[0_0_40px_#00f0ff] flex items-center justify-center">
                    <span className="font-mono text-xs text-black font-black">|Ψ₀⟩</span>
                  </div>
                  <div className="text-[11px] font-mono text-cyan-300 mt-6 tracking-widest uppercase">
                    Majorana Zero Mode
                  </div>
                </div>
              )}

              {/* Stage 2: Tripartite Entanglement */}
              {currentChapterIdx === 1 && (
                <div className="relative w-48 h-48 flex items-center justify-center animate-in zoom-in-75 duration-500">
                  <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
                    <polygon points="50,15 85,75 15,75" fill="none" stroke="#a855f7" strokeWidth="2" strokeDasharray="3 3" />
                    <line x1="50" y1="50" x2="50" y2="15" stroke="#00f0ff" strokeWidth="1.5" />
                    <line x1="50" y1="50" x2="85" y2="75" stroke="#00f0ff" strokeWidth="1.5" />
                    <line x1="50" y1="50" x2="15" y2="75" stroke="#00f0ff" strokeWidth="1.5" />
                  </svg>
                  <div className="absolute top-2 w-7 h-7 rounded-full bg-[#00f0ff] shadow-[0_0_15px_#00f0ff] flex items-center justify-center font-mono text-[9px] text-black font-bold">Q1</div>
                  <div className="absolute bottom-4 right-2 w-7 h-7 rounded-full bg-[#a855f7] shadow-[0_0_15px_#a855f7] flex items-center justify-center font-mono text-[9px] text-white font-bold">Q2</div>
                  <div className="absolute bottom-4 left-2 w-7 h-7 rounded-full bg-[#10b981] shadow-[0_0_15px_#10b981] flex items-center justify-center font-mono text-[9px] text-black font-bold">Q3</div>
                </div>
              )}

              {/* Stage 3: Optical Waveguide Ring Resonator */}
              {currentChapterIdx === 2 && (
                <div className="flex flex-col items-center justify-center animate-in zoom-in-75 duration-500 space-y-4">
                  <div className="relative w-40 h-40 rounded-full border-4 border-cyan-400 shadow-[0_0_30px_rgba(0,240,255,0.6)] flex items-center justify-center">
                    <div className="w-24 h-24 rounded-full border-2 border-purple-400 border-dashed animate-spin-slow flex items-center justify-center">
                      <Zap className="w-8 h-8 text-cyan-300 animate-pulse" />
                    </div>
                  </div>
                  <div className="text-[10px] font-mono text-cyan-300 tracking-wider">
                    λ = 1550nm Laser Coupling Waveguide
                  </div>
                </div>
              )}

              {/* Stage 4: Neural Tensor Multiplication Grid */}
              {currentChapterIdx === 3 && (
                <div className="grid grid-cols-4 gap-2.5 p-4 rounded-xl border border-white/20 bg-black/40 animate-in zoom-in-75 duration-500">
                  {Array.from({ length: 16 }).map((_, i) => (
                    <div
                      key={i}
                      className="w-7 h-7 rounded bg-[#00f0ff]/20 border border-[#00f0ff]/50 flex items-center justify-center font-mono text-[9px] text-[#00f0ff] font-bold"
                    >
                      {(i * 7) % 9}
                    </div>
                  ))}
                </div>
              )}

              {/* Stage 5: Global Synthesis Planetary Mesh */}
              {currentChapterIdx === 4 && (
                <div className="relative w-48 h-48 flex items-center justify-center animate-in zoom-in-75 duration-500">
                  <div className="w-32 h-32 rounded-full border-2 border-[#00f0ff] bg-[#0c1626] flex items-center justify-center shadow-[0_0_40px_rgba(0,240,255,0.4)]">
                    <Radio className="w-10 h-10 text-cyan-400 animate-pulse" />
                  </div>
                  {/* Orbiting Satellite Points */}
                  <div className="absolute w-44 h-44 rounded-full border border-cyan-400/40 border-dashed animate-spin-slow" />
                  <div className="absolute top-0 w-3 h-3 rounded-full bg-cyan-300 shadow-[0_0_10px_#00f0ff]" />
                  <div className="absolute bottom-2 right-4 w-3 h-3 rounded-full bg-purple-400 shadow-[0_0_10px_#a855f7]" />
                  <div className="absolute left-1 w-3 h-3 rounded-full bg-emerald-400 shadow-[0_0_10px_#10b981]" />
                </div>
              )}
            </div>

            {/* Interactive Telemetry Slider underneath stage */}
            <div className="w-full max-w-sm mt-6 p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
              <div className="flex justify-between text-xs font-mono">
                <span className="text-slate-400">Cryogenic Target Temp:</span>
                <span className="text-[#00f0ff] font-bold">12.4 mK</span>
              </div>
              <input
                type="range"
                min="50"
                max="500"
                value={decoherenceTime}
                onChange={(e) => setDecoherenceTime(parseInt(e.target.value))}
                className="w-full h-1.5 accent-[#00f0ff] bg-white/10 rounded cursor-pointer"
              />
              <div className="flex justify-between text-[10px] font-mono text-slate-500">
                <span>Decoherence Boundary: {decoherenceTime}ms</span>
                <span>Error: {errorRate}</span>
              </div>
            </div>
          </div>

          {/* Bottom Controls */}
          <div className="flex justify-between items-center text-xs font-mono text-slate-500 border-t border-white/10 pt-4 relative z-10">
            <div>SCROLL RIGHT PANE TO UNFOLD STORY</div>
            <div className="flex gap-2">
              <button
                disabled={currentChapterIdx === 0}
                onClick={() => jumpToChapter(currentChapterIdx - 1)}
                className="p-1.5 rounded border border-white/10 hover:border-white disabled:opacity-30 cursor-pointer"
              >
                <ChevronUp className="w-4 h-4" />
              </button>
              <button
                disabled={currentChapterIdx === chapters.length - 1}
                onClick={() => jumpToChapter(currentChapterIdx + 1)}
                className="p-1.5 rounded border border-white/10 hover:border-white disabled:opacity-30 cursor-pointer"
              >
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT COLUMN: Scrollable Narrative Content Feed */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="lg:col-span-5 h-full overflow-y-scroll p-8 sm:p-12 space-y-32 no-scrollbar"
        >
          {chapters.map((ch, idx) => (
            <div
              key={ch.id}
              className={`min-h-[70vh] flex flex-col justify-center space-y-6 transition-opacity duration-300 ${
                currentChapterIdx === idx ? 'opacity-100' : 'opacity-30 hover:opacity-60'
              }`}
            >
              <div className="space-y-1">
                <span className="text-xs font-mono text-[#00f0ff] tracking-widest">{ch.step}</span>
                <div className="text-[11px] font-mono text-slate-500 uppercase">{ch.phaseName}</div>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black font-unbounded text-white leading-tight">
                {ch.title}
              </h2>

              <p className="text-base text-slate-300 font-light leading-relaxed">
                {ch.description}
              </p>

              {/* Chapter Specific Spec Badges */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-2">
                {ch.specDetails.map((spec, sIdx) => (
                  <div key={sIdx} className="p-3 rounded-lg border border-white/10 bg-white/5 space-y-1">
                    <div className="text-[10px] font-mono text-slate-400 uppercase">{spec.label}</div>
                    <div className="text-xs font-mono text-white font-bold">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs font-mono text-slate-500">
                <span>CHAPTER {idx + 1} OF 05</span>
                <button
                  onClick={() => jumpToChapter(idx)}
                  className="text-[#00f0ff] hover:underline cursor-pointer"
                >
                  Pin Scene &uarr;
                </button>
              </div>
            </div>
          ))}

          {/* Epilogue Section */}
          <div className="min-h-[50vh] flex flex-col justify-center space-y-6 border-t border-white/20 pt-16">
            <h3 className="text-2xl font-black font-unbounded text-white">The Narrative Concludes</h3>
            <p className="text-sm text-slate-400 leading-relaxed font-light">
              Through five continuous phases, the singularity evolved from a cryogenic nanometer anomaly to an orbital computation grid. The boundaries between hardware and spacetime have officially dissolved.
            </p>
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all cursor-pointer shadow-lg w-fit"
              >
                RETURN TO WEBSITES GALLERY
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
