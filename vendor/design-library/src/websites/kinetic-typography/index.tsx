import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Sliders,
  Type,
  RotateCw,
  Sparkles,
  Layers,
  Eye,
  Maximize2,
  RefreshCw,
  Zap,
} from 'lucide-react';

interface TypePoster {
  id: string;
  name: string;
  year: string;
  fontFamily: string;
  accent: string;
  quote: string;
  sub: string;
}

export function KineticTypographyWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [fontWeight, setFontWeight] = useState<number>(800);
  const [fontTracking, setFontTracking] = useState<number>(-2);
  const [fontSlant, setFontSlant] = useState<number>(0);
  const [isGlitching, setIsGlitching] = useState<boolean>(false);
  const [scatterFactor, setScatterFactor] = useState<number>(0);
  const [activePosterIdx, setActivePosterIdx] = useState<number>(0);
  const [circleRotation, setCircleRotation] = useState<number>(0);

  const posters: TypePoster[] = [
    {
      id: 'p-1',
      name: 'RADICAL CONSTRUCTIVIST',
      year: '2026',
      fontFamily: 'Unbounded',
      accent: '#ccff00',
      quote: 'LETTERS ARE PHYSICAL MASS',
      sub: 'Zürich & Basel International Typographic Movement',
    },
    {
      id: 'p-2',
      name: 'BAROQUE METAMORPHOSIS',
      year: '2025',
      fontFamily: 'Fraunces',
      accent: '#ff0055',
      quote: 'THE ORNAMENT OF PURE FORM',
      sub: 'Wonky High-Contrast Italian Editorial Serifs',
    },
    {
      id: 'p-3',
      name: 'BRUTALIST MONOLITH',
      year: '2026',
      fontFamily: 'Bricolage Grotesque',
      accent: '#00f0ff',
      quote: 'WORDS DEFY CONFINED COLUMNS',
      sub: 'Asymmetrical High-Impact Impact Grotesque',
    },
  ];

  const currentPoster = posters[activePosterIdx];

  // Rotate circular text continuously
  useEffect(() => {
    let animId: number;
    const loop = () => {
      setCircleRotation((prev) => (prev + 0.4) % 360);
      animId = requestAnimationFrame(loop);
    };
    animId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(animId);
  }, []);

  const headlineLetters = 'KINETIC'.split('');

  return (
    <div className="min-h-screen bg-[#07080b] text-[#f1f4f9] font-sans selection:bg-[#ccff00] selection:text-black">
      {/* Top Header */}
      <header className="border-b border-white/10 sticky top-0 z-50 bg-[#07080b]/90 backdrop-blur-md">
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#ccff00] animate-pulse" />
              <div className="font-unbounded font-black text-sm tracking-tight text-white">
                TYPE-LAB // KINETIC TYPOGRAPHY MONOGRAPH
              </div>
            </div>
          </div>

          {/* Quick Glitch Trigger */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => {
                setIsGlitching(true);
                setTimeout(() => setIsGlitching(false), 600);
              }}
              className="px-3.5 py-1.5 rounded-full bg-[#ccff00] text-black font-mono text-xs font-bold hover:bg-[#e6ff66] transition-all cursor-pointer flex items-center gap-1.5"
            >
              <Zap className="w-3.5 h-3.5" />
              <span>TRIGGER GLITCH SHIFT</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Kinetic Typography Stage */}
      <section className="py-16 md:py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono text-[#ccff00] uppercase tracking-widest">
            Experimental Variable Type Playground
          </span>

          {/* Interactive Scatter & Glitch Headline */}
          <div className="relative py-8 select-none overflow-hidden">
            <div
              className={`flex justify-center items-center gap-1 sm:gap-4 transition-all duration-300 ${
                isGlitching ? 'skew-x-12 translate-x-3 text-[#ff0055]' : ''
              }`}
            >
              {headlineLetters.map((char, i) => (
                <span
                  key={i}
                  style={{
                    fontWeight,
                    letterSpacing: `${fontTracking}px`,
                    transform: `rotate(${fontSlant + (scatterFactor * (i - 3) * 6)}deg) translateY(${scatterFactor * (i % 2 === 0 ? -12 : 12)}px)`,
                    transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="text-6xl sm:text-8xl lg:text-9xl font-black font-unbounded text-white inline-block hover:text-[#ccff00] hover:scale-110 cursor-pointer"
                >
                  {char}
                </span>
              ))}
            </div>

            <div className="text-center font-editorial italic text-2xl sm:text-4xl text-[#ccff00] mt-2">
              "Words as autonomous graphic architecture"
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto">
            Use the typographic synthesis controls below to stretch variable font weights, slant angles, and letter scatter dynamics in real time.
          </p>
        </div>

        {/* Typographic Calibration Studio Controls */}
        <div className="max-w-3xl mx-auto p-6 sm:p-8 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl grid grid-cols-1 md:grid-cols-3 gap-6 shadow-2xl">
          {/* Weight Control */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Font Weight:</span>
              <span className="text-[#ccff00] font-bold">{fontWeight}</span>
            </div>
            <input
              type="range"
              min="200"
              max="900"
              step="50"
              value={fontWeight}
              onChange={(e) => setFontWeight(parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded accent-[#ccff00] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>Light (200)</span>
              <span>Black (900)</span>
            </div>
          </div>

          {/* Slant Angle */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Italic Slant:</span>
              <span className="text-[#ccff00] font-bold">{fontSlant}°</span>
            </div>
            <input
              type="range"
              min="-20"
              max="20"
              value={fontSlant}
              onChange={(e) => setFontSlant(parseInt(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded accent-[#ccff00] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>-20° (Back)</span>
              <span>+20° (Forward)</span>
            </div>
          </div>

          {/* Letter Scatter Dynamics */}
          <div className="space-y-2">
            <div className="flex justify-between text-xs font-mono">
              <span className="text-slate-400">Scatter Factor:</span>
              <span className="text-[#ccff00] font-bold">{(scatterFactor * 100).toFixed(0)}%</span>
            </div>
            <input
              type="range"
              min="0"
              max="1"
              step="0.05"
              value={scatterFactor}
              onChange={(e) => setScatterFactor(parseFloat(e.target.value))}
              className="w-full h-1.5 bg-white/10 rounded accent-[#ccff00] cursor-pointer"
            />
            <div className="flex justify-between text-[10px] font-mono text-slate-500">
              <span>Ordered (0%)</span>
              <span>Dispersed (100%)</span>
            </div>
          </div>
        </div>

        {/* Circular Kinetic Rotating Typography & Poster Exhibition */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-8">
          {/* Left Circular Path Kinetic Text */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 rounded-full border border-white/20 p-4 flex items-center justify-center bg-black shadow-2xl">
              {/* Rotating Circular SVG Text */}
              <svg
                className="w-full h-full overflow-visible will-change-transform"
                style={{ transform: `rotate(${circleRotation}deg)` }}
                viewBox="0 0 200 200"
              >
                <path
                  id="circlePath"
                  d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                  fill="none"
                />
                <text fill="#ffffff" fontSize="12" fontFamily="monospace" fontWeight="bold" letterSpacing="4px">
                  <textPath href="#circlePath">
                    KINETIC TYPOGRAPHY MONOGRAPH · TYPE LAB 2026 ·
                  </textPath>
                </text>
              </svg>

              <div className="absolute text-center">
                <div className="font-unbounded font-black text-xl text-[#ccff00]">TYPE</div>
                <div className="font-mono text-[9px] text-slate-400">RADIAL MESH</div>
              </div>
            </div>
          </div>

          {/* Right Poster Gallery Dossier */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex justify-between items-center border-b border-white/10 pb-3">
              <span className="text-xs font-mono text-slate-400">EXHIBITION POSTER REPERTOIRE</span>
              <div className="flex gap-2">
                {posters.map((p, idx) => (
                  <button
                    key={p.id}
                    onClick={() => setActivePosterIdx(idx)}
                    className={`px-3 py-1 rounded font-mono text-xs cursor-pointer border transition-all ${
                      activePosterIdx === idx
                        ? 'border-[#ccff00] bg-[#ccff00]/20 text-white font-bold'
                        : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    0{idx + 1}
                  </button>
                ))}
              </div>
            </div>

            <div
              className="p-8 rounded-3xl border-2 space-y-4 transition-all duration-300"
              style={{
                borderColor: currentPoster.accent,
                background: 'radial-gradient(circle at 10% 10%, #161a0d 0%, #07080b 90%)',
              }}
            >
              <div className="flex justify-between items-start font-mono text-xs">
                <span className="text-white font-bold">{currentPoster.name}</span>
                <span style={{ color: currentPoster.accent }}>YEAR: {currentPoster.year}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black font-unbounded text-white leading-tight">
                {currentPoster.quote}
              </h3>

              <div className="text-xs font-mono text-slate-400">{currentPoster.sub}</div>

              <div className="pt-2 flex justify-between items-center text-[11px] font-mono text-slate-500 border-t border-white/10">
                <span>PRIMARY FONT: {currentPoster.fontFamily}</span>
                <span style={{ color: currentPoster.accent }}>ACCENT: {currentPoster.accent}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <div className="font-unbounded font-black text-white text-sm">
            TYPE-LAB // RADICAL KINETIC MONOGRAPHS
          </div>
          <div>VARIABLE FONT PHYSICS · DISPLACEMENT GLYPH MATRIX · ALL RIGHTS RESERVED 2026</div>
        </div>
      </footer>
    </div>
  );
}
