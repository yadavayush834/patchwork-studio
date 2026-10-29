import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Volume2,
  Ticket,
  Compass,
  Layers,
  ArrowUpRight,
  Eye,
  Radio,
  Flame,
  Check,
} from 'lucide-react';

interface Artist {
  id: string;
  name: string;
  genre: string;
  stage: string;
  time: string;
  origin: string;
  color: string;
}

export function MaximalistWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeStage, setActiveStage] = useState<'all' | 'holo' | 'sonic' | 'void'>('all');
  const [selectedPass, setSelectedPass] = useState<'ga' | 'vip' | 'creator'>('vip');
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [claimedPass, setClaimedPass] = useState(false);

  const artists: Artist[] = [
    {
      id: 'a-1',
      name: 'KINETIC HYPER-DRIVE',
      genre: 'Laser-Scanned Neuro-Trance',
      stage: 'The Holo-Dome (360°)',
      time: 'FRI 23:00',
      origin: 'Tokyo',
      color: 'bg-[#ff6b35] text-white',
    },
    {
      id: 'a-2',
      name: 'POLY-RHYTHM AXIOM',
      genre: 'Generative Modular Glitch',
      stage: 'Sonic Abyss Stage',
      time: 'SAT 01:30',
      origin: 'Berlin',
      color: 'bg-[#d90429] text-white',
    },
    {
      id: 'a-3',
      name: 'VOXEL MIRAGE COLLECTIVE',
      genre: 'Augmented Spatial Cinema',
      stage: 'The Holo-Dome (360°)',
      time: 'SAT 21:00',
      origin: 'Amsterdam',
      color: 'bg-[#c77dff] text-black',
    },
    {
      id: 'a-4',
      name: 'SUB-ATOMIC DRONE ORCHESTRA',
      genre: 'Analogue Tape Loop Synthesis',
      stage: 'The Void Pavilion',
      time: 'SUN 00:00',
      origin: 'Reykjavik',
      color: 'bg-[#e2f952] text-black',
    },
  ];

  const filteredArtists =
    activeStage === 'all'
      ? artists
      : activeStage === 'holo'
      ? artists.filter((a) => a.stage.includes('Holo'))
      : activeStage === 'sonic'
      ? artists.filter((a) => a.stage.includes('Sonic'))
      : artists.filter((a) => a.stage.includes('Void'));

  return (
    <div className="min-h-screen bg-[#11052c] text-[#f7fff7] font-sans selection:bg-[#ff6b35] selection:text-black overflow-x-hidden relative">
      {/* Dynamic Background Noise Texture */}
      <div className="fixed inset-0 pointer-events-none opacity-20 bg-[radial-gradient(#c77dff_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#ff6b35] text-black text-xs font-black uppercase shadow-lg shadow-[#ff6b35]/40 hover:scale-105 transition-transform cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Kinetic Maximalist Ribbon Ticker */}
      <div className="bg-[#e2f952] text-black py-2 px-4 font-black text-xs uppercase tracking-widest flex items-center justify-between border-b-2 border-black">
        <div className="flex items-center gap-8 animate-pulse">
          <span>✦ CHROMALUX FESTIVAL 2026</span>
          <span>● 72 HOURS NON-STOP DIGITAL ART & SOUND</span>
          <span>✦ AMSTERDAM NDSM DOCKYARD</span>
          <span>● 84 INTERNATIONAL ARTISTS</span>
          <span>✦ IMMERSIVE HOLO-DOMES</span>
        </div>
      </div>

      {/* Maximalist Multi-Layered Festival Masthead */}
      <header className="relative pt-12 pb-20 px-6 max-w-7xl mx-auto space-y-12">
        {/* Navigation Layer */}
        <div className="flex items-center justify-between border-b-2 border-[#c77dff]/30 pb-6">
          <div className="flex items-baseline gap-3">
            <span className="text-3xl sm:text-5xl font-black tracking-tighter text-[#e2f952] font-serif-luxury italic">
              Chromalux
            </span>
            <span className="text-xs font-mono px-2 py-0.5 rounded bg-[#ff6b35] text-black font-black uppercase">
              FESTIVAL '26
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs font-bold">
            <button
              onClick={() => setIsPlayingAudio(!isPlayingAudio)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#3d0066] border border-[#c77dff] hover:bg-[#52008a] transition-colors cursor-pointer text-[#e2f952]"
            >
              <Volume2 className="w-4 h-4 animate-bounce" />
              <span>{isPlayingAudio ? 'Sound: 140BPM ACTIVE' : 'Sound Ambient Off'}</span>
            </button>
            <a
              href="#passes"
              className="px-4 py-2 rounded-full bg-[#ff6b35] hover:bg-[#ff8552] text-black font-black text-xs uppercase transition-transform hover:scale-105 cursor-pointer shadow-md"
            >
              Get Festival Pass
            </a>
          </div>
        </div>

        {/* Hero Poster Montage */}
        <div className="relative py-8">
          {/* Overlapping Badge Stickers */}
          <div className="absolute top-0 right-4 sm:right-12 z-20 rotate-6 hidden sm:block">
            <div className="p-4 bg-[#ff6b35] text-black font-black text-xs uppercase border-2 border-black shadow-[6px_6px_0_0_#e2f952] text-center space-y-1">
              <div className="text-2xl">⚡</div>
              <div>AUG 14–17</div>
              <div>AMSTERDAM</div>
            </div>
          </div>

          <div className="absolute -bottom-6 left-12 z-20 -rotate-3 hidden md:block">
            <div className="px-4 py-2 bg-[#d90429] text-white font-mono font-bold text-xs uppercase border border-white shadow-[4px_4px_0_0_#ff6b35]">
              OVER 20,000 M² OF IMMERSIVE PROJECTION
            </div>
          </div>

          {/* Core Expressive Headline Typography */}
          <div className="space-y-4 max-w-5xl">
            <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight leading-none uppercase">
              <span className="text-[#e2f952] block">SYNTHETIC</span>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b35] via-[#ff5caa] to-[#c77dff] block font-serif-luxury italic">
                SENSORY OVERLOAD.
              </span>
              <span className="text-white block text-4xl sm:text-6xl md:text-7xl">
                DIGITAL ARTS FESTIVAL.
              </span>
            </h1>

            <p className="text-base sm:text-xl text-[#d8b4fe] max-w-2xl leading-relaxed pt-2 font-medium">
              Where volumetric lasers collide with modular synthesis, generative neural cinema,
              and non-standard spatial architecture. The celebration of aesthetic excess.
            </p>
          </div>
        </div>
      </header>

      {/* Lineup & Experience Stage Grid */}
      <section className="py-16 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 border-b-2 border-[#c77dff]/40 pb-6">
          <div>
            <span className="text-xs font-mono font-bold text-[#e2f952] uppercase tracking-widest block">
              CURATED HEADLINERS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-white">
              Festival Program & Stages
            </h2>
          </div>

          {/* Stage Filters */}
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold">
            <button
              onClick={() => setActiveStage('all')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeStage === 'all'
                  ? 'bg-[#e2f952] text-black font-black'
                  : 'bg-[#240046] text-[#c77dff] hover:bg-[#3c096c]'
              }`}
            >
              All Stages (84)
            </button>
            <button
              onClick={() => setActiveStage('holo')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeStage === 'holo'
                  ? 'bg-[#ff6b35] text-white font-black'
                  : 'bg-[#240046] text-[#c77dff] hover:bg-[#3c096c]'
              }`}
            >
              The Holo-Dome
            </button>
            <button
              onClick={() => setActiveStage('sonic')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeStage === 'sonic'
                  ? 'bg-[#d90429] text-white font-black'
                  : 'bg-[#240046] text-[#c77dff] hover:bg-[#3c096c]'
              }`}
            >
              Sonic Abyss
            </button>
            <button
              onClick={() => setActiveStage('void')}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                activeStage === 'void'
                  ? 'bg-[#c77dff] text-black font-black'
                  : 'bg-[#240046] text-[#c77dff] hover:bg-[#3c096c]'
              }`}
            >
              Void Pavilion
            </button>
          </div>
        </div>

        {/* Dynamic Multi-Scale Artist Collage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredArtists.map((artist) => (
            <div
              key={artist.id}
              className={`${artist.color} p-8 rounded-3xl space-y-4 shadow-2xl relative overflow-hidden transition-transform hover:scale-[1.02] cursor-pointer`}
            >
              <div className="flex items-center justify-between text-xs font-mono font-bold uppercase">
                <span className="px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm">
                  {artist.stage}
                </span>
                <span>{artist.time} · {artist.origin}</span>
              </div>

              <h3 className="text-3xl sm:text-4xl font-black uppercase leading-tight tracking-tight">
                {artist.name}
              </h3>

              <p className="text-sm font-semibold opacity-90">
                {artist.genre}
              </p>

              <div className="pt-4 border-t border-black/20 flex items-center justify-between text-xs font-black">
                <span>STAGE COORDINATES: DOCK 04</span>
                <span className="flex items-center gap-1 underline">
                  <span>Explore Set Spec</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ticket Pass Tier Studio */}
      <section id="passes" className="py-20 px-6 bg-[#0a001a] border-t-2 border-[#c77dff]/30">
        <div className="max-w-6xl mx-auto space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono font-bold text-[#ff6b35] uppercase tracking-widest">
              ACCREDITATION & ENTRY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase text-white">
              Choose Your Festival Reality
            </h2>
            <p className="text-sm text-[#d8b4fe] max-w-xl mx-auto">
              Limited capacity of 4,000 attendees to maintain intimate volumetric stage viewing.
            </p>
          </div>

          {/* Ticket Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* GA */}
            <div
              onClick={() => setSelectedPass('ga')}
              className={`p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                selectedPass === 'ga'
                  ? 'bg-[#240046] border-[#e2f952] shadow-xl shadow-[#e2f952]/20'
                  : 'bg-[#15002b] border-[#3c096c] hover:border-[#5a189a]'
              }`}
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#c77dff]">TIER 01</span>
                <h3 className="text-2xl font-black text-white">GENERAL ADMISSION</h3>
                <div className="text-3xl font-black text-[#e2f952]">€140</div>
                <p className="text-xs text-[#d8b4fe] leading-relaxed">
                  Full 3-day access to all 4 main stages, open pavilions, and daytime generative code workshops.
                </p>
              </div>
              <button className="w-full py-3 rounded-full bg-[#3c096c] text-white font-black text-xs uppercase hover:bg-[#5a189a]">
                Select GA Pass
              </button>
            </div>

            {/* VIP (Featured) */}
            <div
              onClick={() => setSelectedPass('vip')}
              className={`p-8 rounded-3xl border-3 transition-all cursor-pointer flex flex-col justify-between space-y-6 relative ${
                selectedPass === 'vip'
                  ? 'bg-[#3d0066] border-[#ff6b35] shadow-2xl shadow-[#ff6b35]/30'
                  : 'bg-[#15002b] border-[#3c096c] hover:border-[#5a189a]'
              }`}
            >
              <div className="absolute top-4 right-6 px-3 py-1 rounded-full bg-[#ff6b35] text-black font-black text-[10px] uppercase font-mono">
                MOST POPULAR
              </div>
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#ff6b35]">TIER 02</span>
                <h3 className="text-2xl font-black text-white">HOLO-IMMERSIVE VIP</h3>
                <div className="text-3xl font-black text-[#ff6b35]">€280</div>
                <p className="text-xs text-[#d8b4fe] leading-relaxed">
                  Fast-track Holo-Dome priority queue, elevated backstage viewing lounges, and uncompressed lossless live set recordings.
                </p>
              </div>
              <button
                onClick={() => setClaimedPass(true)}
                className="w-full py-3 rounded-full bg-[#ff6b35] text-black font-black text-xs uppercase hover:bg-[#ff8552] shadow-lg shadow-[#ff6b35]/30"
              >
                {claimedPass ? '✓ PASS RESERVED!' : 'Claim VIP Reality Pass'}
              </button>
            </div>

            {/* Creator Backstage */}
            <div
              onClick={() => setSelectedPass('creator')}
              className={`p-8 rounded-3xl border-2 transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                selectedPass === 'creator'
                  ? 'bg-[#240046] border-[#c77dff] shadow-xl shadow-[#c77dff]/20'
                  : 'bg-[#15002b] border-[#3c096c] hover:border-[#5a189a]'
              }`}
            >
              <div className="space-y-3">
                <span className="text-xs font-mono text-[#c77dff]">TIER 03</span>
                <h3 className="text-2xl font-black text-white">CREATOR & RESIDENCY</h3>
                <div className="text-3xl font-black text-[#c77dff]">€450</div>
                <p className="text-xs text-[#d8b4fe] leading-relaxed">
                  Artist green room access, 1-on-1 TouchDesigner / shader code labs, and permanent installation residency pass.
                </p>
              </div>
              <button className="w-full py-3 rounded-full bg-[#3c096c] text-white font-black text-xs uppercase hover:bg-[#5a189a]">
                Select Creator Pass
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Maximalist Multi-Hue Footer */}
      <footer className="py-12 px-6 border-t-2 border-[#c77dff]/40 bg-[#070012] text-xs font-mono text-[#c77dff]">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-black text-white text-base">CHROMALUX FESTIVAL OF DIGITAL EXCESS</div>
            <div className="text-[#a78bfa]">AMSTERDAM NDSM DOCKLANDS · AUGUST 14–17, 2026</div>
          </div>
          <div className="flex items-center gap-6">
            <span className="text-[#e2f952]">NO MINIMALISM</span>
            <span>·</span>
            <span className="text-[#ff6b35]">100% CHROMATIC</span>
            <span>·</span>
            <span className="text-white">PURE EXCESS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
