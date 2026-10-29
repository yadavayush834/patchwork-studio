import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Terminal,
  Maximize2,
  Minimize2,
  RefreshCw,
  Eye,
  Sliders,
  AlertTriangle,
  ArrowUpRight,
  Flame,
} from 'lucide-react';

interface Installation {
  id: string;
  code: string;
  title: string;
  medium: string;
  year: string;
  status: 'EXHIBITING' | 'ARCHIVED' | 'CLASSIFIED';
  manifesto: string;
  specs: string;
}

export function BrutalistWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [invertScreen, setInvertScreen] = useState(false);
  const [activeInstallation, setActiveInstallation] = useState<string>('inst-1');
  const [mouseCoord, setMouseCoord] = useState({ x: 412, y: 780 });
  const [asciiDensity, setAsciiDensity] = useState(4);
  const [manifestoSigned, setManifestoSigned] = useState(false);
  const [artistName, setArtistName] = useState('');

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMouseCoord({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const installations: Installation[] = [
    {
      id: 'inst-1',
      code: 'RAW-09/DECAY',
      title: 'LATENT ENTROPY: DECONSTRUCTED TENSOR VOID',
      medium: '16-Channel CRT Monitors, Nitrogen Vapor & Generative Audio Decay',
      year: '2026',
      status: 'EXHIBITING',
      manifesto:
        'Continuous bit corruption of real-time surveillance feeds through analogue magnet deflection coils, converting biometric tracking data into pure kinetic noise.',
      specs: '1080×1920 RAW COMPOSITE · 240V 16A DUAL FEED · KUNSTHALLE BASEL',
    },
    {
      id: 'inst-2',
      code: 'RAW-14/NULL',
      title: 'MONOLITH WITHOUT PURPOSE [UNFORMATTED]',
      medium: 'Honed Black Granite, 400kg Lead Weight, Piezoelectric Synthesizers',
      year: '2025',
      status: 'EXHIBITING',
      manifesto:
        'A two-ton geometric tomb that emits sub-audible 18Hz standing waves whenever more than three observers stand within two meters.',
      specs: '240×120×90 CM · 1,840 KG GRAVITATIONAL MASS · TOKYO METROPOLITAN MUSEUM',
    },
    {
      id: 'inst-3',
      code: 'RAW-02/SPEC',
      title: 'ANTENNA FOR NON-HUMAN AGENTS',
      medium: 'Copper RF Waveguides, 1974 Telefunken Vacuum Tubes & Shortwave Scanners',
      year: '2025',
      status: 'ARCHIVED',
      manifesto:
        'Automated radio interceptor tuned exclusively to atmospheric solar burst radiation and abandoned military numbers stations.',
      specs: '9.4 GHZ INTERCEPTOR · DEUTSCHE SAMMLUNG BERLIN',
    },
  ];

  const handleSignManifesto = (e: React.FormEvent) => {
    e.preventDefault();
    if (!artistName.trim()) return;
    setManifestoSigned(true);
    setTimeout(() => {
      setManifestoSigned(false);
      setArtistName('');
    }, 4000);
  };

  const current = installations.find((i) => i.id === activeInstallation) || installations[0];

  return (
    <div
      className={`min-h-screen font-mono text-black selection:bg-black selection:text-white transition-colors duration-200 ${
        invertScreen ? 'bg-black text-white selection:bg-white selection:text-black' : 'bg-[#e5e5e5]'
      }`}
    >
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 bg-black text-white text-xs font-black uppercase border-2 border-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#ff3b00]" />
            <span>[RET: GALLERY]</span>
          </button>
        </div>
      )}

      {/* Viewport Diagnostic Bar */}
      <div className="border-b-4 border-black bg-white px-4 py-2 flex flex-wrap items-center justify-between text-xs font-black uppercase tracking-wider text-black">
        <div className="flex items-center gap-4">
          <span className="bg-[#ff3b00] text-black px-2 py-0.5 font-black">
            ATELIER // RAW NO-SPEC
          </span>
          <span className="hidden sm:inline">SYS_STATUS: UNFILTERED</span>
          <span className="hidden md:inline">LOC: 55.6761°N, 12.5683°E (CPH)</span>
        </div>
        <div className="flex items-center gap-4">
          <span>CURSOR: X:{mouseCoord.x} Y:{mouseCoord.y}</span>
          <button
            onClick={() => setInvertScreen(!invertScreen)}
            className="px-2 py-0.5 border-2 border-black bg-yellow-300 text-black hover:bg-black hover:text-white transition-colors cursor-pointer text-[10px] font-black"
          >
            {invertScreen ? 'INVERT [LIGHT]' : 'INVERT [VOID]'}
          </button>
        </div>
      </div>

      {/* Giant Aggressive Brutalist Hero Masthead */}
      <header className="border-b-4 border-black p-6 sm:p-12 space-y-6">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="space-y-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#ff3b00]">
              /// INDEPENDENT DIGITAL ART & SPECULATIVE MEDIA DISCIPLINE ///
            </span>
            <h1 className="text-5xl sm:text-8xl md:text-9xl font-black tracking-tighter leading-none uppercase">
              NO·SPEC
            </h1>
          </div>
          <div className="max-w-md space-y-4 border-4 border-black bg-white p-4 text-xs font-bold leading-relaxed text-black">
            <p>
              WE REJECT THE SANITIZED, CORPO-MODERNIST TEMPLATE SPHERE. FORM MUST NOT CONFORM TO EASY CONSUMPTION.
              ART IS THE ACCIDENTAL CRASH DUMP OF COGNITIVE OVERFLOW.
            </p>
            <div className="text-[10px] text-neutral-500 font-mono">
              CURATED BY ATELIER RAW · ARCHIVE SER. 2026-X
            </div>
          </div>
        </div>

        {/* ASCII Kinetic Marquee Divider */}
        <div className="border-2 border-black bg-black text-[#ff3b00] py-1.5 px-2 overflow-x-hidden text-xs font-mono font-bold whitespace-nowrap">
          ========================= [NO TEMPLATES] == [NO ROUNDED CARDS] == [NO VIBE-CODING] == [RAW CANVAS ONLY] == [MASSIVE CONTRAST] =========================
        </div>
      </header>

      {/* Main Dual-Column Raw Grid */}
      <main className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-black">
        {/* Left Interactive Art Matrix (7 Cols) */}
        <section className="lg:col-span-7 border-b-4 lg:border-b-0 lg:border-r-4 border-black p-6 sm:p-10 space-y-8 bg-white text-black">
          <div className="flex items-center justify-between border-b-4 border-black pb-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              01 // ACTIVE PHYSICAL & DIGITAL INSTALLATIONS
            </h2>
            <span className="text-xs font-black bg-black text-white px-2 py-1">
              {installations.length} MONOGRAPHS
            </span>
          </div>

          {/* Installation Tab Selectors */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {installations.map((inst) => (
                <button
                  key={inst.id}
                  onClick={() => setActiveInstallation(inst.id)}
                  className={`p-3 text-left border-4 border-black transition-all cursor-pointer font-black ${
                    activeInstallation === inst.id
                      ? 'bg-[#ff3b00] text-black shadow-[4px_4px_0_0_#000]'
                      : 'bg-neutral-100 hover:bg-neutral-200 text-black'
                  }`}
                >
                  <div className="text-[10px]">{inst.code}</div>
                  <div className="text-xs truncate">{inst.title}</div>
                  <div className="text-[9px] mt-1 text-neutral-600">{inst.year}</div>
                </button>
              ))}
            </div>

            {/* Selected Work Detail Dossier */}
            <div className="border-4 border-black p-6 space-y-4 bg-neutral-50">
              <div className="flex items-center justify-between border-b-2 border-black pb-2">
                <span className="text-xs font-black bg-black text-white px-2 py-0.5">
                  STATUS: {current.status}
                </span>
                <span className="text-xs font-bold">{current.code} // {current.year}</span>
              </div>

              <h3 className="text-2xl font-black uppercase leading-tight">
                {current.title}
              </h3>

              <div className="text-xs font-bold text-neutral-700 space-y-1">
                <div>MEDIUM: {current.medium}</div>
                <div>EXHIBIT SPEC: {current.specs}</div>
              </div>

              <div className="p-4 border-2 border-black bg-white text-xs font-bold leading-relaxed">
                "{current.manifesto}"
              </div>

              {/* Raw Interactive Glitch Simulator Canvas */}
              <div className="border-2 border-black bg-black text-green-400 p-4 space-y-2">
                <div className="flex items-center justify-between text-[10px] font-mono text-neutral-400">
                  <span>CANVAS BUFFER: 0x7FFE_4A00</span>
                  <span>FREQ: 60Hz UNLOCKED</span>
                </div>
                <div className="font-mono text-xs overflow-x-auto select-none leading-none tracking-widest text-[#ff3b00]">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx}>
                      {`[0x${idx}0] ` +
                        '█▓▒░ '.repeat(asciiDensity) +
                        '// RAW_CORRUPT_VOID_' +
                        ((mouseCoord.x + idx * 42) % 9999).toString(16).toUpperCase()}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between pt-2 text-[10px] text-white">
                  <span>DENSITY: {asciiDensity}X</span>
                  <button
                    onClick={() => setAsciiDensity((prev) => (prev >= 8 ? 2 : prev + 2))}
                    className="px-2 py-0.5 border border-white hover:bg-white hover:text-black cursor-pointer font-bold"
                  >
                    CYCLE SHADER NOISE
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Right Manifesto & Raw Index (5 Cols) */}
        <section className="lg:col-span-5 p-6 sm:p-10 space-y-8 bg-neutral-100 text-black">
          <div className="border-b-4 border-black pb-3">
            <h2 className="text-xl font-black uppercase tracking-tight">
              02 // MANIFESTO & THEORETICAL CLAIMS
            </h2>
          </div>

          <div className="space-y-4 text-xs font-bold leading-relaxed">
            <div className="p-4 border-4 border-black bg-yellow-300 space-y-2">
              <div className="flex items-center gap-2 font-black text-sm">
                <AlertTriangle className="w-4 h-4 text-black" />
                <span>PRINCIPLE 01: ANTI-PRETTY</span>
              </div>
              <p>
                A web that is only pretty is a web that is already dead. The digital medium is intrinsically
                composed of mathematical logic, raw electricity, memory registers, and human friction.
              </p>
            </div>

            <div className="p-4 border-4 border-black bg-white space-y-2">
              <div className="flex items-center gap-2 font-black text-sm">
                <Flame className="w-4 h-4 text-[#ff3b00]" />
                <span>PRINCIPLE 02: STRUCTURAL EXPOSURE</span>
              </div>
              <p>
                Expose the bones of the architecture. Show the coordinate space, display the uncompressed file weights,
                and treat layout frames as sculptural barriers rather than invisible flexboxes.
              </p>
            </div>

            <div className="p-4 border-4 border-black bg-neutral-200 space-y-2">
              <div className="flex items-center gap-2 font-black text-sm">
                <Terminal className="w-4 h-4 text-black" />
                <span>PRINCIPLE 03: PERMANENT RESISTANCE</span>
              </div>
              <p>
                We do not build for conversion optimization funnels. We create digital artifacts that demand active,
                deliberate cognitive engagement.
              </p>
            </div>
          </div>

          {/* Interactive Sign Manifesto Form */}
          <div className="border-4 border-black p-5 bg-white space-y-3">
            <div className="text-xs font-black uppercase">
              SIGN THE ANTI-TEMPLATE ATELIER REGISTRY:
            </div>
            <form onSubmit={handleSignManifesto} className="space-y-3">
              <input
                type="text"
                placeholder="YOUR NAME / STUDIO / IP"
                value={artistName}
                onChange={(e) => setArtistName(e.target.value)}
                className="w-full border-2 border-black p-2 text-xs font-black placeholder:text-neutral-400 focus:outline-none focus:bg-yellow-100 uppercase"
              />
              <button
                type="submit"
                disabled={!artistName.trim()}
                className="w-full py-2.5 bg-black text-white font-black text-xs uppercase hover:bg-[#ff3b00] hover:text-black transition-colors cursor-pointer disabled:opacity-40"
              >
                COMMIT SIGNATURE TO ATELIER RECORD
              </button>
              {manifestoSigned && (
                <div className="p-2 border-2 border-black bg-[#ff3b00] text-black font-black text-center text-xs">
                  [ATTESTATION REGISTERED: HASH 0x98A1_44FC]
                </div>
              )}
            </form>
          </div>
        </section>
      </main>

      {/* Raw Brutalist Colophon Footer */}
      <footer className="p-8 bg-black text-white flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-black uppercase">
        <div className="space-y-1 text-center md:text-left">
          <div>ATELIER NO-SPEC // KØBENHAVN & BERLIN</div>
          <div className="text-neutral-500 text-[10px]">ALL ARTIFACTS DISTRIBUTED UNDER RAW CREATIVE COMMONS ZERO</div>
        </div>
        <div className="flex items-center gap-4 text-yellow-400">
          <span>HOST: RAW_METAL_SERVER</span>
          <span>·</span>
          <span>NO TRACKERS</span>
          <span>·</span>
          <span className="text-[#ff3b00]">100% UNPOLISHED</span>
        </div>
      </footer>
    </div>
  );
}
