import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Compass,
  MapPin,
  Layers,
  Thermometer,
  Wind,
  Eye,
  Sliders,
  Sparkles,
  ChevronDown,
} from 'lucide-react';

interface JournalEntry {
  id: string;
  coordinate: string;
  elevation: string;
  title: string;
  temperature: string;
  seismic: string;
  narrative: string;
  rockFormation: string;
}

export function ParallaxWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [scrollY, setScrollY] = useState<number>(0);
  const [mouseOffset, setMouseOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [reducedMotion, setReducedMotion] = useState<boolean>(false);
  const [selectedEntryIdx, setSelectedEntryIdx] = useState<number>(0);

  const entries: JournalEntry[] = [
    {
      id: 'e-1',
      coordinate: '64.9631° N · 19.0208° W',
      elevation: '1,840m Alpine Ridge',
      title: 'The Glacial Basalt Rift',
      temperature: '-14°C',
      seismic: 'Magnitude 1.8 Volcanic Swarm',
      narrative: 'We crossed the Vatnajökull ice tongue at dawn. Basalt columns sheared vertically from tectonic rifting rise through swirling steam geysers, casting shadows across millennia of frozen volcanic ash.',
      rockFormation: 'Hexagonal Columnar Jointing · Tholeiitic Basalt',
    },
    {
      id: 'e-2',
      coordinate: '63.9850° N · 21.9840° W',
      elevation: '920m Fjord Mouth',
      title: 'Midnight Obsidian Caldera',
      temperature: '-8°C',
      seismic: 'Magnitude 2.4 Magma Inflow',
      narrative: 'A glassy volcanic mirror stretching three kilometers across the crater floor. At midnight twilight, the auroral borealis reflects in the polished silica glass without a ripple of wind.',
      rockFormation: 'Amorphous Rhyolitic Obsidian Glass · High Silica Content',
    },
    {
      id: 'e-3',
      coordinate: '65.2340° N · 14.1200° W',
      elevation: '2,420m Coastal Prow',
      title: 'Geothermal Solfatara Fissures',
      temperature: '+32°C (Vapor Vent)',
      seismic: 'Continuous Micro-Tremors',
      narrative: 'Sulfur deposits encrusted in vivid cadmium yellow and viridian green along boiling mineral mud pools. The cold ocean air condenses into dense horizontal mists racing over the scree.',
      rockFormation: 'Precipitated Native Sulfur · Hydrothermal Sinter',
    },
  ];

  // Mouse parallax tracking
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const x = (e.clientX / window.innerWidth - 0.5) * 40;
    const y = (e.clientY / window.innerHeight - 0.5) * 40;
    setMouseOffset({ x, y });
  };

  // Scroll tracking
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentEntry = entries[selectedEntryIdx];

  // Calculated depth offsets based on scroll and mouse position
  const getLayerTransform = (scrollFactor: number, mouseFactor: number) => {
    if (reducedMotion) return 'none';
    const y = scrollY * scrollFactor + mouseOffset.y * mouseFactor;
    const x = mouseOffset.x * mouseFactor;
    return `translate3d(${x.toFixed(1)}px, ${y.toFixed(1)}px, 0)`;
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="min-h-[260vh] bg-[#05070a] text-[#f1f5f9] font-sans selection:bg-[#10b981] selection:text-black overflow-x-hidden relative"
    >
      {/* Top Floating Control Bar */}
      <header className="fixed top-0 inset-x-0 z-50 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-none">
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

          <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 bg-black/50 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/10">
            <Compass className="w-3.5 h-3.5 animate-spin-slow" />
            <span>AETHELGARD // PARALLAX FJORD MONOGRAPH</span>
          </div>
        </div>

        {/* Reduced Motion Toggle Button */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => setReducedMotion(!reducedMotion)}
            className={`px-3 py-1.5 rounded-full border text-xs font-mono transition-all cursor-pointer ${
              reducedMotion
                ? 'border-emerald-400 bg-emerald-400/20 text-emerald-300'
                : 'border-white/20 bg-black/60 text-slate-400 hover:text-white'
            }`}
          >
            {reducedMotion ? 'Reduced Motion: ON' : 'Parallax Depth: ACTIVE'}
          </button>
        </div>
      </header>

      {/* --- HERO SCENE: MULTI-LAYER 2.5D PARALLAX DEPTH VIEWPORT --- */}
      <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
        {/* Layer 0: Distant Starry Aurora Sky (Speed 0.08x) */}
        <div
          className="absolute inset-0 pointer-events-none will-change-transform"
          style={{ transform: getLayerTransform(0.08, 0.2) }}
        >
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,#0e2a22_0%,#05070a_80%)]" />
          {/* Subtle Aurora Wave SVG */}
          <svg className="w-full h-full opacity-40" viewBox="0 0 1000 600" preserveAspectRatio="none">
            <path
              d="M 0,200 Q 250,120 500,240 T 1000,180 L 1000,0 L 0,0 Z"
              fill="url(#auroraGrad)"
            />
            <defs>
              <linearGradient id="auroraGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#10b981" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#05070a" stopOpacity="0" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Layer 1: Far Basalt Volcanic Mountain Ridgeline (Speed 0.22x) */}
        <div
          className="absolute inset-x-0 bottom-0 h-[65vh] pointer-events-none will-change-transform"
          style={{ transform: getLayerTransform(0.22, 0.4) }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 600" preserveAspectRatio="none">
            <polygon
              points="0,600 0,380 200,260 450,340 700,200 950,300 1200,220 1200,600"
              fill="#080c14"
            />
          </svg>
        </div>

        {/* Layer 2: Floating Massive Editorial Monograph Headline (Speed 0.4x) */}
        <div
          className="relative z-20 text-center space-y-4 px-6 will-change-transform"
          style={{ transform: getLayerTransform(0.4, 0.6) }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-xs font-mono text-emerald-400">
            <span>SUB-ARCTIC EXPEDITION JOURNAL 2026</span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-unbounded text-white tracking-tighter leading-none drop-shadow-2xl">
            FJORD <br />
            <span className="font-editorial italic font-normal text-emerald-400">
              Basaltica
            </span>
          </h1>

          <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto font-mono">
            ELEVATION 1,840M · 64° 57′ N · TECTONIC SPREADING RIFT
          </p>
        </div>

        {/* Layer 3: Midground Glacial Mist Cloud (Speed 0.55x) */}
        <div
          className="absolute inset-x-0 bottom-12 h-64 pointer-events-none opacity-40 will-change-transform"
          style={{ transform: getLayerTransform(0.55, 0.8) }}
        >
          <div className="w-full h-full bg-gradient-to-t from-emerald-900/30 to-transparent blur-3xl" />
        </div>

        {/* Layer 4: Foreground Crisp Silhouette Spires & Scree (Speed 0.85x) */}
        <div
          className="absolute inset-x-0 -bottom-10 h-[45vh] pointer-events-none z-30 will-change-transform"
          style={{ transform: getLayerTransform(0.85, 1.2) }}
        >
          <svg className="w-full h-full" viewBox="0 0 1200 400" preserveAspectRatio="none">
            <polygon
              points="0,400 0,180 140,240 280,110 460,260 680,80 840,220 1020,130 1200,210 1200,400"
              fill="#040608"
            />
          </svg>
        </div>

        {/* Scroll Hint Arrow */}
        <div className="absolute bottom-6 inset-x-0 flex justify-center z-40 pointer-events-none">
          <div className="flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/60 px-4 py-1.5 rounded-full border border-white/10 animate-bounce">
            <ChevronDown className="w-4 h-4 text-emerald-400" />
            <span>SCROLL TO UNCOVER LAYERED MONOGRAPHS</span>
          </div>
        </div>
      </div>

      {/* --- SECTION 2: EXPEDITION LOG DOSSIERS (OVERLAPPING CARDS) --- */}
      <section className="relative z-40 max-w-7xl mx-auto px-6 py-24 space-y-16">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4 border-b border-white/10 pb-6">
          <div>
            <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Scientific Monograph</span>
            <h2 className="text-3xl sm:text-5xl font-black font-unbounded text-white mt-1">Geological Transits</h2>
          </div>

          <div className="flex gap-2">
            {entries.map((ent, idx) => (
              <button
                key={ent.id}
                onClick={() => setSelectedEntryIdx(idx)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all cursor-pointer border ${
                  selectedEntryIdx === idx
                    ? 'border-emerald-400 bg-emerald-400/20 text-white font-bold'
                    : 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                0{idx + 1} {ent.elevation.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Active Log Dossier Presentation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center p-8 sm:p-12 rounded-3xl border border-white/15 bg-black/60 backdrop-blur-xl shadow-2xl">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400">
                <MapPin className="w-3.5 h-3.5" />
                <span>{currentEntry.coordinate}</span>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black font-unbounded text-white">
                {currentEntry.title}
              </h3>
              <div className="text-xs font-mono text-slate-400">{currentEntry.elevation}</div>
            </div>

            <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
              {currentEntry.narrative}
            </p>

            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                  <Thermometer className="w-3 h-3 text-emerald-400" />
                  Ambient Climate
                </div>
                <div className="text-base font-mono text-white font-bold">{currentEntry.temperature}</div>
                <div className="text-[10px] text-slate-400 font-mono">Glacial Wind Chill</div>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
                <div className="text-[10px] font-mono text-slate-400 uppercase flex items-center gap-1">
                  <Wind className="w-3 h-3 text-emerald-400" />
                  Seismic Activity
                </div>
                <div className="text-base font-mono text-white font-bold">{currentEntry.seismic}</div>
                <div className="text-[10px] text-slate-400 font-mono">Volcanic Tremor Sensor</div>
              </div>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-black/40 font-mono text-xs">
              <div className="text-slate-400 uppercase text-[10px]">Lithological Specimen Analysis</div>
              <div className="text-emerald-300 font-bold mt-0.5">{currentEntry.rockFormation}</div>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center">
            <div className="w-full aspect-square rounded-3xl border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden bg-gradient-to-br from-emerald-950/40 to-black shadow-2xl">
              <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                <span>SEISMIC PLOT REF</span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
              </div>

              {/* Seismograph Oscillogram SVG */}
              <svg className="w-full h-32 my-auto" viewBox="0 0 200 80">
                <path
                  d="M 10,40 L 40,40 L 50,20 L 60,60 L 70,30 L 80,45 L 90,40 L 120,40 L 130,15 L 140,65 L 150,35 L 160,40 L 190,40"
                  fill="none"
                  stroke="#10b981"
                  strokeWidth="2"
                />
              </svg>

              <div className="text-[10px] font-mono text-slate-400 flex justify-between border-t border-white/10 pt-2">
                <span>CHRONOMETER: 04:32:18 UTC</span>
                <span>TELEMETRY: STABLE</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-40 border-t border-white/10 bg-black/80 py-10 text-center font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <div className="font-unbounded font-black text-white text-sm">
            AETHELGARD FJORD EXPEDITIONS · 2026
          </div>
          <div>MULTI-PLANE 2.5D PARALLAX FIELD RESEARCH REPORT</div>
        </div>
      </footer>
    </div>
  );
}
