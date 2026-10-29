import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Play,
  Pause,
  Repeat,
  Sparkles,
  Layers,
  Sliders,
  Maximize2,
  Zap,
  ShoppingBag,
} from 'lucide-react';

interface DropItem {
  id: string;
  name: string;
  sku: string;
  price: string;
  material: string;
  edition: string;
}

export function InfiniteMotionWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [isPaused, setIsPaused] = useState<boolean>(false);
  const [isReversed, setIsReversed] = useState<boolean>(false);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);
  const [activeDropModal, setActiveDropModal] = useState<DropItem | null>(null);

  const dropItems: DropItem[] = [
    {
      id: 'd-1',
      name: 'CYBER-MONOLITH TRENCH 01',
      sku: 'NC-2026-TR1',
      price: '€1,850',
      material: 'Laser-Cut Hydrophobic Poly-Taffeta',
      edition: 'Edition of 40 Pieces Globally',
    },
    {
      id: 'd-2',
      name: 'TITANIUM EXOSKELETON HOODIE',
      sku: 'NC-2026-HD4',
      price: '€920',
      material: 'Heavy 600 GSM Loopback French Terry & Grade 5 Titanium Rivets',
      edition: 'Edition of 85 Pieces',
    },
    {
      id: 'd-3',
      name: 'KINETIC BIAS TROUSER',
      sku: 'NC-2026-TR8',
      price: '€1,240',
      material: 'Liquid Mercerized Wool & Neoprene Articulated Knees',
      edition: 'Edition of 50 Pieces',
    },
    {
      id: 'd-4',
      name: 'OBSIDIAN VISOR GOGGLE',
      sku: 'NC-2026-GG2',
      price: '€680',
      material: 'Polarized Electrochromic Glass & Monobloc Carbon Fiber',
      edition: 'Edition of 100 Pieces',
    },
  ];

  const headlinePhrases = [
    'NEO-CADENCE // AUTUMN HAUTE CYBERNETICS',
    'PARIS · REYKJAVIK · TOKYO',
    'CONTINUOUS MOTION ARCHITECTURE',
    'LIMITED ALLOCATION MONOLITH',
    'FORM FOLLOWS KINETIC CADENCE',
  ];

  const sublinePhrases = [
    '• SPECULAR LIQUID LAMÉ • 600 GSM FRENCH TERRY • LASER-BONDED SEAMS •',
    '• CRYOGENIC VACUUM ANODIZED RIVETS • GRADE 5 TITANIUM HARDWARE •',
    '• MULTI-AXIS ARTICULATED DRAPERY • BIAS-CUT CEPHALOPOD CONTOURS •',
  ];

  return (
    <div className="min-h-screen bg-[#07080c] text-[#f0f3f8] font-sans selection:bg-[#ff0055] selection:text-white overflow-x-hidden">
      {/* Top Header */}
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
              <span className="w-2.5 h-2.5 rounded-full bg-[#00ff66] animate-pulse" />
              <div className="font-unbounded font-black text-sm tracking-tight text-white">
                NEO-CADENCE // INFINITE MOTION
              </div>
            </div>
          </div>

          {/* Marquee Motion Controls */}
          <div className="flex items-center gap-3 bg-black/60 p-1.5 rounded-full border border-white/15 text-xs font-mono">
            <button
              onClick={() => setIsPaused(!isPaused)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full uppercase transition-all cursor-pointer ${
                isPaused ? 'bg-[#ff0055] text-white font-bold' : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              {isPaused ? <Play className="w-3.5 h-3.5" /> : <Pause className="w-3.5 h-3.5" />}
              <span>{isPaused ? 'RESUME' : 'PAUSE'}</span>
            </button>

            <button
              onClick={() => setIsReversed(!isReversed)}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-full uppercase transition-all cursor-pointer ${
                isReversed ? 'bg-[#00f0ff] text-black font-bold' : 'bg-white/10 text-slate-300 hover:text-white'
              }`}
            >
              <Repeat className="w-3.5 h-3.5" />
              <span>{isReversed ? 'REVERSED' : 'FORWARD'}</span>
            </button>

            <button
              onClick={() => setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 0.5 : 1))}
              className="px-2.5 py-1 rounded-full bg-white/10 text-white font-bold hover:bg-white/20 cursor-pointer"
            >
              {speedMultiplier}x VELOCITY
            </button>
          </div>
        </div>
      </header>

      {/* --- KINETIC MARQUEE TAPE 1: OVERSIZED PRIMARY HEADLINE (Moves Left) --- */}
      <div className="py-6 border-b border-white/10 overflow-hidden whitespace-nowrap bg-black select-none">
        <div
          className={`inline-flex gap-8 will-change-transform ${
            isPaused ? '' : isReversed ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
          style={{
            animationDuration: `${22 / speedMultiplier}s`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {Array.from({ length: 4 }).map((_, repeatIdx) => (
            <div key={repeatIdx} className="inline-flex gap-8 items-center">
              {headlinePhrases.map((phrase, pIdx) => (
                <div key={pIdx} className="inline-flex items-center gap-6">
                  <span className="font-unbounded font-black text-4xl sm:text-6xl text-white tracking-tighter">
                    {phrase}
                  </span>
                  <span className="text-[#00ff66] font-mono text-2xl">&bull;</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* --- KINETIC MARQUEE TAPE 2: HIGH-CONTRAST METROLOGY (Moves Right) --- */}
      <div className="py-3 border-b border-white/10 overflow-hidden whitespace-nowrap bg-[#0a0d14] select-none">
        <div
          className={`inline-flex gap-6 will-change-transform ${
            isPaused ? '' : isReversed ? 'animate-marquee' : 'animate-marquee-reverse'
          }`}
          style={{
            animationDuration: `${16 / speedMultiplier}s`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {Array.from({ length: 6 }).map((_, repeatIdx) => (
            <div key={repeatIdx} className="inline-flex gap-6 items-center">
              {sublinePhrases.map((sub, sIdx) => (
                <span key={sIdx} className="font-mono text-xs sm:text-sm text-[#00f0ff] uppercase tracking-widest">
                  {sub}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Editorial Hero Statement */}
      <section className="py-20 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/5 text-xs font-mono text-slate-300">
            <Sparkles className="w-3.5 h-3.5 text-[#00ff66]" />
            <span>COLLECTION 2026 // AUTONOMOUS KINETIC TEXTILE ARCHITECTURE</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black font-unbounded text-white tracking-tight leading-tight">
            Perpetual rhythm. <br />
            <span className="font-editorial italic font-normal text-[#00ff66]">
              Unbroken cadence.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 font-light max-w-xl leading-relaxed">
            NEO-CADENCE dismantles static lookbooks in favor of continuous, unyielding browser motion. Like an automated textile loom or high-speed monorail, the garments and technical specifications flow uninterrupted across the viewport.
          </p>

          <div className="flex gap-4 pt-2 font-mono text-xs">
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
              <div className="text-slate-500 uppercase">Velocity Calibrated</div>
              <div className="text-white font-bold">{speedMultiplier * 80} PX / SECOND</div>
            </div>
            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1">
              <div className="text-slate-500 uppercase">Loop Continuity</div>
              <div className="text-[#00ff66] font-bold">100% SEAMLESS VECTOR</div>
            </div>
          </div>
        </div>

        {/* Interactive Lookbook Cards */}
        <div className="lg:col-span-5 space-y-3">
          <div className="text-xs font-mono text-slate-400 uppercase tracking-widest border-b border-white/10 pb-2">
            Seasonal Allocation Drops (Click to Inspect)
          </div>
          {dropItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveDropModal(item)}
              className="p-4 rounded-xl border border-white/10 bg-white/5 hover:border-[#00ff66] hover:bg-white/10 transition-all cursor-pointer flex justify-between items-center group"
            >
              <div>
                <div className="font-unbounded font-bold text-sm text-white group-hover:text-[#00ff66] transition-colors">
                  {item.name}
                </div>
                <div className="text-[10px] font-mono text-slate-400">{item.sku} · {item.edition}</div>
              </div>
              <div className="text-right font-mono text-xs font-bold text-white">
                {item.price}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- KINETIC MARQUEE TAPE 3: MASSIVE CODE METROLOGY (Moves Left at 10s) --- */}
      <div className="py-4 border-y border-white/10 overflow-hidden whitespace-nowrap bg-[#0b0c12] select-none my-12">
        <div
          className={`inline-flex gap-8 will-change-transform ${
            isPaused ? '' : isReversed ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
          style={{
            animationDuration: `${12 / speedMultiplier}s`,
            animationPlayState: isPaused ? 'paused' : 'running',
          }}
        >
          {Array.from({ length: 6 }).map((_, repeatIdx) => (
            <div key={repeatIdx} className="inline-flex gap-8 items-center">
              <span className="font-mono text-xs text-[#ff0055] font-bold">
                [SYSTEM LOAD: 14% // FRAME LATENCY: 8.3ms // REFRESH: 120HZ]
              </span>
              <span className="font-mono text-xs text-slate-400">
                PARIS ATELIER // 14 RUE DU TEMPLE // PRIVATE SALON APPOINTMENT ONLY
              </span>
              <span className="font-mono text-xs text-[#00ff66] font-bold">
                [ZERO FRICTION · ZERO SEAMS · HYDROPHOBIC TAFFETA]
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dossier */}
      {activeDropModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-md w-full p-8 rounded-3xl border border-white/20 bg-[#0e1017] text-white space-y-6 shadow-2xl">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#00ff66]">{activeDropModal.sku}</span>
              <h3 className="text-2xl font-black font-unbounded">{activeDropModal.name}</h3>
              <div className="text-xs font-mono text-slate-400">{activeDropModal.edition}</div>
            </div>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1 font-mono text-xs">
              <div className="text-slate-400 uppercase text-[10px]">Textile Specifications</div>
              <div className="text-white font-bold">{activeDropModal.material}</div>
              <div className="text-[#00ff66] text-sm pt-2 font-bold">{activeDropModal.price} (VAT Included)</div>
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => setActiveDropModal(null)}
                className="flex-1 py-2.5 rounded-full border border-white/20 text-xs font-mono text-slate-300 hover:text-white cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  alert(`Allocation reserved for ${activeDropModal.name}. Our Paris concierge will contact you.`);
                  setActiveDropModal(null);
                }}
                className="flex-1 py-2.5 rounded-full bg-[#00ff66] text-black font-mono text-xs font-bold hover:bg-[#33ff88] transition-all cursor-pointer"
              >
                Request Allocation
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t border-white/10 bg-black/80 py-10 text-center font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-6 space-y-2">
          <div className="font-unbounded font-black text-white text-sm">
            NEO-CADENCE // CONTINUOUS MOTION EXHIBIT
          </div>
          <div>AUTOMATED HORIZONTAL TAPE ARCHITECTURE · ALL RIGHTS RESERVED 2026</div>
        </div>
      </footer>
    </div>
  );
}
