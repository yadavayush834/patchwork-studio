import React, { useState } from 'react';
import {
  ArrowLeft,
  Volume2,
  VolumeX,
  Compass,
  ArrowRight,
  Eye,
  Calendar,
  MapPin,
  Clock,
  Sparkles,
  Check,
  ChevronDown,
  Info,
} from 'lucide-react';

interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  medium: string;
  dimensions: string;
  room: string;
  edition: string;
  curatorNotes: string;
  palette: string[];
  gradient: string;
}

interface Artist {
  id: string;
  name: string;
  born: string;
  city: string;
  discipline: string;
  recentShow: string;
  status: 'Represented' | 'Visiting Fellow' | 'Archive';
}

export function ContemporaryArtWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [atmosphere, setAtmosphere] = useState<'titanium' | 'obsidian' | 'sepia'>('titanium');
  const [audioActive, setAudioActive] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<string>('art-1');
  const [artistFilter, setArtistFilter] = useState<'all' | 'sculpture' | 'painting' | 'lens-based'>('all');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquiryType, setInquiryType] = useState('acquisition');

  const artworks: Artwork[] = [
    {
      id: 'art-1',
      title: 'Resonance in Absentia IV',
      artist: 'Elena Voronova',
      year: '2026',
      medium: 'Distemper, powdered slate, and raw beeswax on raw Belgian linen',
      dimensions: '240 × 195 cm',
      room: 'South Hall // Chamber 01',
      edition: 'Unique original from the "Void Studies" cycle',
      curatorNotes:
        'Voronova interrogates the physiological aftermath of digital sensory overload. Her layers of powdered German slate are applied dry before being fused with heated botanical wax, creating a micro-relief surface that absorbs ambient gallery luminescence without reflecting specular glare.',
      palette: ['#2b2b29', '#54524c', '#8a8578', '#d6d2c4'],
      gradient: 'linear-gradient(135deg, #1f2022 0%, #353634 50%, #1a1a1c 100%)',
    },
    {
      id: 'art-2',
      title: 'Topological Echo #09 (Interrupted Drift)',
      artist: 'Kenjiro Takahashi & Studio Hō',
      year: '2025',
      medium: 'Oxidized extruded aluminum, cold-cast basalt resin, magnetic suspension ring',
      dimensions: '180 × 60 × 60 cm',
      room: 'Central Atrium // Suspended Plinth',
      edition: 'Edition of 3 + 1 AP',
      curatorNotes:
        'Suspended via high-coercivity neodymium anchors, the upper monolithic segment hovers 14mm above its basalt pedestal without physical tethering. Takahashi explores the architectural weight of electromagnetic equilibrium.',
      palette: ['#0d0e11', '#3a404a', '#788291', '#c7cdd6'],
      gradient: 'linear-gradient(180deg, #16181d 0%, #282e38 60%, #0d0f12 100%)',
    },
    {
      id: 'art-3',
      title: 'Sedimentary Memory: The Glacial Core',
      artist: 'Astrid Lindholm',
      year: '2026',
      medium: 'Polar ice melt runoff, mineral salt precipitate, and archival silver emulsion on baryta rag',
      dimensions: '160 × 120 cm (framed in charred bog oak)',
      room: 'North Gallery // Climate Archive',
      edition: 'Edition of 5',
      curatorNotes:
        'Lindholm exposed the photographic paper to high-latitude twilight for 72 consecutive hours while allowing ice melt extracted from Svalbard core samples to slowly dissolve the silver salts.',
      palette: ['#1e2528', '#415259', '#7a9299', '#dbe5e8'],
      gradient: 'linear-gradient(145deg, #131b1e 0%, #2f3e43 55%, #182226 100%)',
    },
    {
      id: 'art-4',
      title: 'Liturgy of the Unseen Signal',
      artist: 'Thiago Mendes & Marcio Silveira',
      year: '2025',
      medium: 'Electroluminescent copper mesh, vulcanized synthetic rubber, sound transducer',
      dimensions: '310 × 220 cm',
      room: 'West Chamber // Subterranean Wing',
      edition: 'Site-specific installation / Certificate of Authenticity',
      curatorNotes:
        'The copper mesh vibrates at 17.4 Hz—a frequency just beneath normal human auditory perception that produces tactile sympathetic vibrations in the viewer’s sternum.',
      palette: ['#1a1512', '#4d3725', '#996c45', '#e0b58b'],
      gradient: 'linear-gradient(125deg, #17110c 0%, #3d2919 60%, #140d07 100%)',
    },
  ];

  const artists: Artist[] = [
    {
      id: 'art-elena',
      name: 'Elena Voronova',
      born: 'b. 1988, St. Petersburg',
      city: 'Berlin / Leipzig',
      discipline: 'Monumental Painting & Slate Chemistry',
      recentShow: 'Solo: "Resonance in Absentia" (Current)',
      status: 'Represented',
    },
    {
      id: 'art-kenjiro',
      name: 'Kenjiro Takahashi',
      born: 'b. 1982, Kyoto',
      city: 'Kyoto / Basel',
      discipline: 'Kinetic Sculpture & Electromagnetic Fields',
      recentShow: 'Group: "Matter in Suspension" (2025)',
      status: 'Represented',
    },
    {
      id: 'art-astrid',
      name: 'Astrid Lindholm',
      born: 'b. 1991, Tromsø',
      city: 'Oslo / Longyearbyen',
      discipline: 'Glaciological Photography & Baryta Emulsion',
      recentShow: 'Permanent: Arctic Core Vault Commission',
      status: 'Represented',
    },
    {
      id: 'art-thiago',
      name: 'Thiago Mendes',
      born: 'b. 1985, Belo Horizonte',
      city: 'São Paulo',
      discipline: 'Electroluminescent Mesh & Infrasonic Sound',
      recentShow: 'Bienal de São Paulo (Pavilion 3)',
      status: 'Visiting Fellow',
    },
    {
      id: 'art-claire',
      name: 'Claire Beauchamp',
      born: 'b. 1979, Lyon',
      city: 'Paris / Tangier',
      discipline: 'Cast Optical Glass & Mineral Crystallography',
      recentShow: 'Venice Biennale collateral (Palazzo Mora)',
      status: 'Represented',
    },
    {
      id: 'art-solomon',
      name: 'Solomon K. Boateng',
      born: 'b. 1994, Accra',
      city: 'Accra / London',
      discipline: 'Pigmented Jute Tapestry & Spatial Architecture',
      recentShow: 'Upcoming: Solo Exhibition (Spring 2027)',
      status: 'Visiting Fellow',
    },
  ];

  const activePieceData = artworks.find((a) => a.id === selectedArtwork) || artworks[0];

  const themeStyles = {
    titanium: {
      bg: 'bg-[#f7f6f2]',
      text: 'text-[#181816]',
      subtext: 'text-[#61605a]',
      border: 'border-[#dfded7]',
      cardBg: 'bg-[#efeee9]',
      headerBg: 'bg-[#f7f6f2]/90',
      badgeBg: 'bg-[#e4e3dc]',
      accent: '#2b2b29',
    },
    obsidian: {
      bg: 'bg-[#101114]',
      text: 'text-[#f2f2ee]',
      subtext: 'text-[#9c9b94]',
      border: 'border-[#26282e]',
      cardBg: 'bg-[#181a1f]',
      headerBg: 'bg-[#101114]/90',
      badgeBg: 'bg-[#22252c]',
      accent: '#dfded7',
    },
    sepia: {
      bg: 'bg-[#ede8df]',
      text: 'text-[#231f1c]',
      subtext: 'text-[#6e6860]',
      border: 'border-[#d6cfc4]',
      cardBg: 'bg-[#e4ddd2]',
      headerBg: 'bg-[#ede8df]/90',
      badgeBg: 'bg-[#d8d0c2]',
      accent: '#473d35',
    },
  }[atmosphere];

  return (
    <div className={`min-h-screen ${themeStyles.bg} ${themeStyles.text} font-sans selection:bg-[#2b2b29] selection:text-[#f7f6f2] transition-colors duration-500`}>
      {/* Return to Gallery Navigation Bar */}
      <div className={`border-b ${themeStyles.border} ${themeStyles.cardBg} px-4 py-2.5 flex items-center justify-between text-xs font-mono tracking-wider`}>
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className={`flex items-center gap-1.5 px-3 py-1 rounded border ${themeStyles.border} hover:bg-black/5 dark:hover:bg-white/5 transition-colors cursor-pointer font-bold`}
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO GALLERY</span>
          </button>
          <span className="hidden sm:inline-block text-[#888]">•</span>
          <span className="hidden sm:inline-block">WEBSITE #16 // CONTEMPORARY ART GALLERY</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-widest text-[#888]">Atmosphere:</span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setAtmosphere('titanium')}
              className={`px-2 py-0.5 text-[10px] rounded uppercase ${atmosphere === 'titanium' ? 'bg-black text-white font-bold' : 'hover:opacity-75'}`}
            >
              Titanium
            </button>
            <button
              onClick={() => setAtmosphere('obsidian')}
              className={`px-2 py-0.5 text-[10px] rounded uppercase ${atmosphere === 'obsidian' ? 'bg-white text-black font-bold' : 'hover:opacity-75'}`}
            >
              Obsidian
            </button>
            <button
              onClick={() => setAtmosphere('sepia')}
              className={`px-2 py-0.5 text-[10px] rounded uppercase ${atmosphere === 'sepia' ? 'bg-[#473d35] text-white font-bold' : 'hover:opacity-75'}`}
            >
              Sepia
            </button>
          </div>
        </div>
      </div>

      {/* Main Curatorial Header */}
      <header className={`sticky top-0 z-40 border-b ${themeStyles.border} ${themeStyles.headerBg} backdrop-blur-md transition-colors duration-300`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-3">
              <span className="font-serif-luxury text-2xl sm:text-3xl font-black tracking-tight uppercase">
                KUNSTHALLE VAKUUM
              </span>
              <span className="text-[10px] font-mono tracking-widest uppercase px-2 py-0.5 rounded border border-current opacity-70">
                BERLIN
              </span>
            </div>
            <div className="text-[11px] font-mono tracking-wider opacity-60">
              KÖPENICKER STR. 124 // KREUZBERG · RAUM FÜR ZEITGENÖSSISCHE KUNST
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-mono tracking-widest uppercase">
            <a href="#exhibition" className="hover:opacity-60 transition-opacity">
              01 Current Exhibition
            </a>
            <a href="#viewing-room" className="hover:opacity-60 transition-opacity">
              02 Viewing Room
            </a>
            <a href="#artists" className="hover:opacity-60 transition-opacity">
              03 Artist Roster
            </a>
            <a href="#essay" className="hover:opacity-60 transition-opacity">
              04 Curatorial Essay
            </a>
            <a href="#visitor" className="hover:opacity-60 transition-opacity">
              05 Visit & RSVP
            </a>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setAudioActive(!audioActive)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${themeStyles.border} text-xs font-mono uppercase tracking-wider transition-all cursor-pointer`}
              title="Toggle gallery soundscape and curator narration"
            >
              {audioActive ? (
                <>
                  <Volume2 className="w-3.5 h-3.5 text-emerald-500 animate-pulse" />
                  <span className="text-[11px]">Audio Guide [03:42 ON]</span>
                </>
              ) : (
                <>
                  <VolumeX className="w-3.5 h-3.5 opacity-60" />
                  <span className="text-[11px]">Audio Guide [MUTE]</span>
                </>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section: Featured Exhibition */}
      <section id="exhibition" className="max-w-7xl mx-auto px-6 sm:px-10 py-16 sm:py-24 space-y-12">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 border-b pb-8 border-current/20">
          <div className="space-y-3 max-w-3xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase opacity-70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>SOLO EXHIBITION // NOW ON VIEW · OCT 12 — DEC 18, 2026</span>
            </div>
            <h1 className="font-editorial text-5xl sm:text-7xl lg:text-8xl font-normal tracking-tight leading-[0.95]">
              Resonance in Absentia
            </h1>
            <p className="font-serif-luxury text-xl sm:text-2xl italic opacity-80">
              Elena Voronova (b. 1988) — New Monographic Works in Raw Slate and Beeswax
            </p>
          </div>
          <div className="text-right space-y-1 font-mono text-xs opacity-75">
            <div>CURATED BY DR. ANSELM WEBER</div>
            <div>SOUTH HALL & MEZZANINE LEVEL</div>
            <div className="text-emerald-500 font-bold">FREE ADMISSION // DAILY 11:00 — 19:00</div>
          </div>
        </div>

        {/* Hero Artwork Spatial Visualization */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 relative">
            <div
              className="aspect-[4/3] sm:aspect-[16/10] rounded-lg shadow-2xl relative overflow-hidden flex flex-col justify-between p-8 sm:p-12 border border-current/20"
              style={{ background: activePieceData.gradient }}
            >
              {/* Textured Canvas Background Simulation */}
              <div
                className="absolute inset-0 opacity-25 pointer-events-none mix-blend-overlay"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 50% 50%, #ffffff 1px, transparent 1px), radial-gradient(circle at 20% 80%, #ffffff 1px, transparent 1px)',
                  backgroundSize: '24px 24px, 32px 32px',
                }}
              />

              {/* Monolithic Abstract Canvas Composition */}
              <div className="relative z-10 flex justify-between items-start text-white/80 font-mono text-xs">
                <span className="tracking-widest uppercase bg-black/60 px-3 py-1 rounded backdrop-blur">
                  {activePieceData.room}
                </span>
                <span className="tracking-widest uppercase bg-black/60 px-3 py-1 rounded backdrop-blur">
                  KAT. NO. EV-2026-04
                </span>
              </div>

              {/* Central Abstract Artwork Visual Form */}
              <div className="relative z-10 py-12 flex flex-col items-center justify-center">
                <div className="w-48 sm:w-72 h-64 sm:h-80 border border-white/20 relative shadow-2xl backdrop-blur-sm bg-black/30 flex items-center justify-center overflow-hidden">
                  <div
                    className="absolute inset-x-4 inset-y-8 opacity-70 transform rotate-1"
                    style={{
                      background: `linear-gradient(45deg, ${activePieceData.palette[0]} 0%, ${activePieceData.palette[1]} 50%, ${activePieceData.palette[2]} 100%)`,
                    }}
                  />
                  <div
                    className="absolute inset-8 opacity-80 transform -rotate-2 mix-blend-difference"
                    style={{
                      background: `linear-gradient(135deg, ${activePieceData.palette[2]} 0%, ${activePieceData.palette[3]} 100%)`,
                    }}
                  />
                  <div className="relative z-20 text-center p-4">
                    <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-white/70 block mb-1">
                      MONOGRAPH STUDY
                    </span>
                    <span className="font-editorial italic text-2xl text-white font-light">
                      {activePieceData.title}
                    </span>
                  </div>
                </div>
              </div>

              <div className="relative z-10 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-3 text-white/90 font-mono text-xs">
                <div>
                  <div className="font-bold text-sm text-white">{activePieceData.dimensions}</div>
                  <div className="opacity-75 text-[11px]">{activePieceData.medium}</div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] uppercase opacity-75">Mineral Pigments:</span>
                  <div className="flex gap-1.5">
                    {activePieceData.palette.map((color, idx) => (
                      <span
                        key={idx}
                        className="w-4 h-4 rounded-full border border-white/40 shadow-sm"
                        style={{ backgroundColor: color }}
                        title={color}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between text-xs font-mono opacity-60">
              <span>PHOTO: GERALDINE BOCK // COURTESY KUNSTHALLE VAKUUM ARCHIV</span>
              <span>SCALED PROPORTION 1:1 REPRODUCTION</span>
            </div>
          </div>

          {/* Exhibition Dossier Sidebar */}
          <div className="lg:col-span-4 space-y-6">
            <div className={`p-6 sm:p-8 rounded-lg border ${themeStyles.border} ${themeStyles.cardBg} space-y-6`}>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                  CURATORIAL MONOGRAPH
                </span>
                <h3 className="font-editorial text-2xl font-normal">
                  "Silence as an Architectural Counter-Material"
                </h3>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed opacity-85">
                {activePieceData.curatorNotes}
              </p>

              <div className="space-y-3 pt-3 border-t border-current/15 font-mono text-xs">
                <div className="flex justify-between">
                  <span className="opacity-60">Artist:</span>
                  <span className="font-bold">{activePieceData.artist}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Year of Completion:</span>
                  <span>{activePieceData.year}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Edition:</span>
                  <span className="text-right">{activePieceData.edition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="opacity-60">Acquisition Status:</span>
                  <span className="text-emerald-500 font-bold">Available via Gallery Salon</span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="#viewing-room"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded bg-current text-inverted font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity"
                  style={{
                    backgroundColor: themeStyles.accent,
                    color: atmosphere === 'obsidian' ? '#101114' : '#ffffff',
                  }}
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Inspect All Works in Viewing Room</span>
                </a>
              </div>
            </div>

            {/* Quick Exhibition Timeline */}
            <div className={`p-6 rounded-lg border ${themeStyles.border} font-mono text-xs space-y-3`}>
              <div className="font-bold uppercase tracking-wider text-[11px]">Upcoming Gallery Events</div>
              <div className="space-y-2 opacity-80">
                <div className="flex justify-between border-b border-current/10 pb-1.5">
                  <span>Nov 04 // 19:30</span>
                  <span className="font-bold">Curator Walkthrough with Dr. Weber</span>
                </div>
                <div className="flex justify-between border-b border-current/10 pb-1.5">
                  <span>Nov 18 // 20:00</span>
                  <span className="font-bold">Infrasound Performance by Thiago Mendes</span>
                </div>
                <div className="flex justify-between">
                  <span>Dec 02 // 18:00</span>
                  <span className="font-bold">Monograph Book Launch: "Absentia Studies"</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Viewing Room & Selected Works Selector */}
      <section id="viewing-room" className={`border-t ${themeStyles.border} ${themeStyles.cardBg} py-20 transition-colors`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-current/15 pb-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                GALLERY SECTION 02
              </span>
              <h2 className="font-editorial text-4xl sm:text-5xl font-light">
                Digital Viewing Room & Piece Dossier
              </h2>
            </div>
            <p className="font-mono text-xs opacity-60 max-w-sm">
              Explore primary catalog pieces currently mounted within the Kunsthalle’s five exhibition chambers.
            </p>
          </div>

          {/* Grid of Selectable Works */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {artworks.map((piece) => {
              const isSelected = selectedArtwork === piece.id;
              return (
                <div
                  key={piece.id}
                  onClick={() => {
                    setSelectedArtwork(piece.id);
                    const el = document.getElementById('exhibition');
                    if (el) el.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className={`group rounded-lg border p-5 cursor-pointer transition-all duration-300 flex flex-col justify-between ${
                    isSelected
                      ? `border-current shadow-xl scale-[1.02] ${themeStyles.badgeBg}`
                      : `${themeStyles.border} hover:border-current/60 bg-transparent`
                  }`}
                >
                  <div className="space-y-4">
                    {/* Visual Art Block */}
                    <div
                      className="aspect-square rounded shadow-inner relative overflow-hidden flex items-center justify-center border border-current/10"
                      style={{ background: piece.gradient }}
                    >
                      <div className="w-16 h-20 border border-white/30 backdrop-blur-sm bg-black/30 flex items-center justify-center text-white/80 font-editorial text-xs italic">
                        {piece.year}
                      </div>
                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-emerald-500 text-black text-[9px] font-mono font-bold px-2 py-0.5 rounded">
                          ACTIVE VIEW
                        </div>
                      )}
                    </div>

                    <div className="space-y-1">
                      <div className="text-[11px] font-mono opacity-60 tracking-wider">
                        {piece.artist} · {piece.year}
                      </div>
                      <h4 className="font-editorial text-xl font-normal group-hover:italic transition-all">
                        {piece.title}
                      </h4>
                      <p className="text-[11px] font-mono opacity-70 line-clamp-2">
                        {piece.medium}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 border-t border-current/10 flex items-center justify-between text-[11px] font-mono">
                    <span className="opacity-60">{piece.dimensions}</span>
                    <span className="flex items-center gap-1 font-bold group-hover:translate-x-1 transition-transform">
                      Inspect <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Artist Roster & Index */}
      <section id="artists" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-current/15 pb-6">
          <div className="space-y-2">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
              GALLERY SECTION 03
            </span>
            <h2 className="font-editorial text-4xl sm:text-5xl font-light">
              Represented Artists & Fellows
            </h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-xs">
            <button
              onClick={() => setArtistFilter('all')}
              className={`px-3 py-1 rounded uppercase tracking-wider ${artistFilter === 'all' ? 'bg-current text-inverted font-bold' : 'opacity-60 hover:opacity-100'}`}
              style={artistFilter === 'all' ? { backgroundColor: themeStyles.accent, color: atmosphere === 'obsidian' ? '#101114' : '#ffffff' } : {}}
            >
              All (6)
            </button>
            <button
              onClick={() => setArtistFilter('sculpture')}
              className={`px-3 py-1 rounded uppercase tracking-wider ${artistFilter === 'sculpture' ? 'bg-current text-inverted font-bold' : 'opacity-60 hover:opacity-100'}`}
              style={artistFilter === 'sculpture' ? { backgroundColor: themeStyles.accent, color: atmosphere === 'obsidian' ? '#101114' : '#ffffff' } : {}}
            >
              Sculpture
            </button>
            <button
              onClick={() => setArtistFilter('painting')}
              className={`px-3 py-1 rounded uppercase tracking-wider ${artistFilter === 'painting' ? 'bg-current text-inverted font-bold' : 'opacity-60 hover:opacity-100'}`}
              style={artistFilter === 'painting' ? { backgroundColor: themeStyles.accent, color: atmosphere === 'obsidian' ? '#101114' : '#ffffff' } : {}}
            >
              Painting
            </button>
            <button
              onClick={() => setArtistFilter('lens-based')}
              className={`px-3 py-1 rounded uppercase tracking-wider ${artistFilter === 'lens-based' ? 'bg-current text-inverted font-bold' : 'opacity-60 hover:opacity-100'}`}
              style={artistFilter === 'lens-based' ? { backgroundColor: themeStyles.accent, color: atmosphere === 'obsidian' ? '#101114' : '#ffffff' } : {}}
            >
              Lens & Sound
            </button>
          </div>
        </div>

        {/* Table of Artists */}
        <div className={`border ${themeStyles.border} rounded-lg overflow-hidden`}>
          <table className="w-full text-left border-collapse font-mono text-xs">
            <thead>
              <tr className={`border-b ${themeStyles.border} ${themeStyles.badgeBg} opacity-80 uppercase tracking-widest text-[10px]`}>
                <th className="p-4 sm:p-5">Artist</th>
                <th className="p-4 sm:p-5 hidden md:table-cell">Origins & Studio</th>
                <th className="p-4 sm:p-5">Primary Discipline</th>
                <th className="p-4 sm:p-5 hidden lg:table-cell">Recent / Upcoming</th>
                <th className="p-4 sm:p-5 text-right">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-current/10">
              {artists
                .filter((artist) => {
                  if (artistFilter === 'sculpture') return artist.discipline.toLowerCase().includes('sculpture');
                  if (artistFilter === 'painting') return artist.discipline.toLowerCase().includes('painting') || artist.discipline.toLowerCase().includes('tapestry');
                  if (artistFilter === 'lens-based') return artist.discipline.toLowerCase().includes('photography') || artist.discipline.toLowerCase().includes('sound');
                  return true;
                })
                .map((artist) => (
                  <tr key={artist.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    <td className="p-4 sm:p-5">
                      <div className="font-editorial text-lg font-normal text-current">{artist.name}</div>
                      <div className="text-[11px] opacity-60 md:hidden">{artist.city}</div>
                    </td>
                    <td className="p-4 sm:p-5 hidden md:table-cell opacity-80">
                      <div>{artist.city}</div>
                      <div className="text-[10px] opacity-60">{artist.born}</div>
                    </td>
                    <td className="p-4 sm:p-5 opacity-90">{artist.discipline}</td>
                    <td className="p-4 sm:p-5 hidden lg:table-cell opacity-75">{artist.recentShow}</td>
                    <td className="p-4 sm:p-5 text-right">
                      <span className="inline-block px-2 py-0.5 rounded text-[10px] uppercase font-bold border border-current/30">
                        {artist.status}
                      </span>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Curatorial Statement & Essay */}
      <section id="essay" className={`border-t ${themeStyles.border} ${themeStyles.cardBg} py-20 transition-colors`}>
        <div className="max-w-4xl mx-auto px-6 sm:px-10 space-y-10">
          <div className="space-y-3 text-center">
            <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
              CURATORIAL ESSAY // PUBLISHED IN FOLIO VOL. 18
            </span>
            <h2 className="font-editorial text-4xl sm:text-6xl font-light leading-tight">
              On the Politics of Quietude in the Hyper-Digital Era
            </h2>
            <div className="font-mono text-xs opacity-70">
              BY DR. ANSELM WEBER · CHIEF CURATOR, KUNSTHALLE VAKUUM
            </div>
          </div>

          <div className="space-y-6 text-sm sm:text-base leading-relaxed opacity-90 font-serif-luxury">
            <p className="first-letter:font-editorial first-letter:text-6xl first-letter:font-normal first-letter:float-left first-letter:mr-3 first-letter:leading-none">
              In an epoch distinguished by continuous visual stimulation and computational acceleration, the museum space cannot merely serve as a neutral repository of physical objects. It must transform into an ontological threshold—a territory where spatial quietude functions as an act of deliberate cultural resistance.
            </p>
            <p>
              When Elena Voronova applies unprimed Belgian linen to German slate powder, she does not merely reject the glossy surface of modern screens; she summons a geologic timescale. The artwork demands physical presence. It cannot be compressed into an algorithmic feed without surrendering the very tactile tension that gives it life.
            </p>

            <blockquote className="my-8 py-6 px-8 border-l-2 border-current font-editorial italic text-2xl sm:text-3xl leading-snug opacity-95">
              "The painting does not speak to be heard over the noise of the metropolis; it waits until the visitor has exhausted their desire for immediate consensus."
            </blockquote>

            <p>
              This is the founding charter of Kunsthalle Vakuum: to preserve the dignity of aesthetic hesitation. Here, the visitor is invited not to decipher an intellectual riddle, but to observe how light, mineral friction, and negative space renegotiate the perimeter of human contemplation.
            </p>
          </div>

          <div className="pt-6 border-t border-current/15 flex items-center justify-between font-mono text-xs opacity-75">
            <span>BERLIN // SPRING EDITION 2026</span>
            <span>ISBN 978-3-948201-84-2</span>
          </div>
        </div>
      </section>

      {/* Visitor Information & Private Viewing RSVP */}
      <section id="visitor" className="max-w-7xl mx-auto px-6 sm:px-10 py-20 space-y-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Visitor Hours & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                GALLERY SECTION 05
              </span>
              <h2 className="font-editorial text-4xl font-light">Visitor Information</h2>
              <p className="font-mono text-xs opacity-75">
                Kunsthalle Vakuum is located on the historic Spree riverbanks in Berlin-Kreuzberg.
              </p>
            </div>

            <div className="space-y-6 font-mono text-xs">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-0.5 text-current opacity-70" />
                <div>
                  <div className="font-bold">LOCATION</div>
                  <div className="opacity-80">Köpenicker Str. 124, 10179 Berlin</div>
                  <div className="text-[11px] opacity-60 mt-0.5">U-Bahn U8 Heinrich-Heine-Straße / S-Bahn Jannowitzbrücke</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 mt-0.5 text-current opacity-70" />
                <div>
                  <div className="font-bold">HOURS OF CONTEMPLATION</div>
                  <div className="opacity-80">Tuesday — Sunday: 11:00 — 19:00</div>
                  <div className="opacity-80">Thursday Evening Salon: 11:00 — 22:00</div>
                  <div className="text-[11px] opacity-60 mt-0.5">Closed Mondays for conservation and archiving</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Sparkles className="w-4 h-4 mt-0.5 text-current opacity-70" />
                <div>
                  <div className="font-bold">ADMISSION & ACCESSIBILITY</div>
                  <div className="opacity-80">Permanent collection & solo exhibitions are free of charge</div>
                  <div className="opacity-80">Full wheelchair accessibility across all 5 wings</div>
                </div>
              </div>
            </div>
          </div>

          {/* Private Viewing & Acquisition RSVP */}
          <div className="lg:col-span-7">
            <div className={`p-8 sm:p-10 rounded-xl border ${themeStyles.border} ${themeStyles.cardBg} space-y-6`}>
              <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase opacity-60">
                  PRIVATE SALON & ACQUISITION
                </span>
                <h3 className="font-editorial text-3xl font-normal">
                  Request Private Viewing Room Appointment
                </h3>
                <p className="text-xs font-mono opacity-75">
                  Institutions, private collectors, and curatorial researchers may schedule an appointment with our specialist staff.
                </p>
              </div>

              {inquirySubmitted ? (
                <div className="p-6 rounded border border-emerald-500/40 bg-emerald-500/10 space-y-3 font-mono text-xs">
                  <div className="flex items-center gap-2 text-emerald-500 font-bold uppercase tracking-wider">
                    <Check className="w-4 h-4" />
                    <span>Viewing Dossier Registered</span>
                  </div>
                  <p className="opacity-90 leading-relaxed">
                    Thank you, <span className="font-bold">{inquiryName}</span>. Our registrar has received your private inquiry for the <span className="font-bold">{activePieceData.title}</span> cycle. A curatorial representative will contact <span className="font-bold">{inquiryEmail}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => setInquirySubmitted(false)}
                    className="text-[11px] underline opacity-75 hover:opacity-100 cursor-pointer"
                  >
                    Submit another inquiry
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    if (inquiryName && inquiryEmail) setInquirySubmitted(true);
                  }}
                  className="space-y-4 font-mono text-xs"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider opacity-70 mb-1">
                        Full Name / Institution
                      </label>
                      <input
                        type="text"
                        required
                        value={inquiryName}
                        onChange={(e) => setInquiryName(e.target.value)}
                        placeholder="e.g. Dr. Marianne Weber"
                        className="w-full p-2.5 rounded border border-current/20 bg-transparent focus:outline-none focus:border-current"
                      />
                    </div>
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider opacity-70 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        required
                        value={inquiryEmail}
                        onChange={(e) => setInquiryEmail(e.target.value)}
                        placeholder="m.weber@foundation.art"
                        className="w-full p-2.5 rounded border border-current/20 bg-transparent focus:outline-none focus:border-current"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] uppercase tracking-wider opacity-70 mb-1">
                        Inquiry Nature
                      </label>
                      <select
                        value={inquiryType}
                        onChange={(e) => setInquiryType(e.target.value)}
                        className="w-full p-2.5 rounded border border-current/20 bg-transparent focus:outline-none focus:border-current"
                      >
                        <option value="acquisition" className="text-black">Artwork Acquisition & Price List</option>
                        <option value="curatorial" className="text-black">Institutional Loan / Curatorial Research</option>
                        <option value="press" className="text-black">Press & High-Resolution Assets</option>
                        <option value="private-tour" className="text-black">Private Evening Walkthrough</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-[10px] uppercase tracking-wider opacity-70 mb-1">
                        Specific Artwork of Interest
                      </label>
                      <input
                        type="text"
                        readOnly
                        value={activePieceData.title}
                        className="w-full p-2.5 rounded border border-current/20 bg-black/5 opacity-80"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded font-mono text-xs uppercase tracking-widest font-bold hover:opacity-90 transition-opacity cursor-pointer mt-2"
                    style={{
                      backgroundColor: themeStyles.accent,
                      color: atmosphere === 'obsidian' ? '#101114' : '#ffffff',
                    }}
                  >
                    Confirm Private Viewing Appointment
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Footer & Colophon */}
      <footer className={`border-t ${themeStyles.border} py-12 font-mono text-xs opacity-75`}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <div className="font-serif-luxury font-black text-base uppercase tracking-tight">
              KUNSTHALLE VAKUUM // BERLIN
            </div>
            <div className="text-[11px] opacity-60">
              MEMBER OF THE ASSOCIATION OF CONTEMPORARY ART GALLERIES GERMANY (BVDG)
            </div>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-wider">
            <span>ARCHIVE CATALOG</span>
            <span>·</span>
            <span>PRESS RELEASES</span>
            <span>·</span>
            <span>LEGAL IMPRINT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
