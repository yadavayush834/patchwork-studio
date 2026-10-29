import React, { useState } from 'react';
import {
  ArrowLeft,
  ArrowUpRight,
  Maximize2,
  Grid,
  Check,
  Compass,
} from 'lucide-react';

interface Project {
  id: string;
  num: string;
  name: string;
  location: string;
  year: number;
  area: string;
  materials: string;
  engineer: string;
  description: string;
}

export function SwissWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [showGridLines, setShowGridLines] = useState(true);
  const [activeProject, setActiveProject] = useState<string>('sw-1');

  const projects: Project[] = [
    {
      id: 'sw-1',
      num: '01',
      name: 'Museum für Konkrete Kunst',
      location: 'Winterthur, CH',
      year: 2025,
      area: '8,420 m²',
      materials: 'Fair-Faced Concrete, Anodized Natural Aluminum, Low-Iron Float Glass',
      engineer: 'Dr. Beatrix Meier, ETH Zürich',
      description:
        'A sequence of nine mathematically proportioned cubes arranged along a strict 4.8-meter modular rhythm. Natural north light is reflected via cantilevered concrete baffles, illuminating constructivist geometry without thermal gain.',
    },
    {
      id: 'sw-2',
      num: '02',
      name: 'Pavillon der Geometrie & Akustik',
      location: 'Basel, CH',
      year: 2024,
      area: '2,150 m²',
      materials: 'Massive Jura Limestone, White Fir Acoustic Slats, Pre-stressed Steel',
      engineer: 'Ingenieurbüro Marti & Partner',
      description:
        'A public chamber dedicated to chamber music and spatial acoustics. Walls are tilted at calculated 7-degree inclinations to eliminate flutter echoes, embodying the spatial theories of Max Bill and Josef Müller-Brockmann.',
    },
    {
      id: 'sw-3',
      num: '03',
      name: 'Fakultät für Architektur & Information',
      location: 'Zürich, CH',
      year: 2023,
      area: '14,800 m²',
      materials: 'Recycled Aggregates, Raw Niobium-Finished Cladding, Exposed Plywood Formwork',
      engineer: 'Suter & Keller Tragwerksplanung',
      description:
        'Five storeys of unpartitioned studio space organized around a central atrium that functions as a natural thermal chimney, achieving Net-Zero operational carbon across its life cycle.',
    },
  ];

  const current = projects.find((p) => p.id === activeProject) || projects[0];

  return (
    <div className="min-h-screen bg-[#f5f5f7] text-[#111111] font-grotesk selection:bg-[#002fa7] selection:text-white relative">
      {/* Visual Architectural Grid Guides (Optional Toggle) */}
      {showGridLines && (
        <div className="fixed inset-0 pointer-events-none z-0 opacity-15">
          <div className="max-w-7xl mx-auto h-full grid grid-cols-6 sm:grid-cols-12 gap-6 px-6">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-black h-full" />
            ))}
          </div>
        </div>
      )}

      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3.5 py-1.5 bg-[#111111] text-white text-xs font-mono hover:bg-[#002fa7] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Top Swiss Administrative Masthead */}
      <header className="relative z-10 border-b-2 border-black bg-[#f5f5f7]/95 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-6">
            <span className="text-xl font-black tracking-tight uppercase">
              Atelier Helvetia
            </span>
            <span className="text-xs font-mono text-[#002fa7] font-bold border-l-2 border-black pl-4">
              Büro für Architektur & Raumordnung · Zürich
            </span>
          </div>

          <div className="flex items-center gap-6 text-xs font-mono">
            <span>47.3769° N, 8.5417° E</span>
            <button
              onClick={() => setShowGridLines(!showGridLines)}
              className="text-[#002fa7] hover:underline cursor-pointer font-bold"
            >
              {showGridLines ? 'Grid Overlay: Active' : 'Grid Overlay: Off'}
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-16 space-y-24">
        {/* Section 01: Typographic Foundation */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b-2 border-black pb-2">
            <span className="text-sm font-black tracking-widest text-[#002fa7]">
              01 // THEORETISCHES FUNDAMENT
            </span>
            <span className="text-xs font-mono text-neutral-500">MÜLLER-BROCKMANN SYSTEMATIK</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-8">
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
                Ordnung, Proportion und konstruktive Reduktion.
              </h1>
            </div>

            <div className="lg:col-span-4 space-y-4 text-xs leading-relaxed text-[#222222]">
              <p className="font-bold">
                Wir begreifen Architektur nicht als subjektive Skulptur, sondern als rationale Organisation
                von Raum, Material und Licht innerhalb eines unerbittlichen modularen Rasters.
              </p>
              <p className="text-neutral-600 font-mono">
                Gegründet 1998 in Zürich. 42 realisierte Bauten in der Schweiz, Deutschland und Japan.
              </p>
            </div>
          </div>
        </section>

        {/* Section 02: Selected Architectural Works (Interactive) */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b-2 border-black pb-2">
            <span className="text-sm font-black tracking-widest text-[#002fa7]">
              02 // REALISIERTE BAUWERKE
            </span>
            <span className="text-xs font-mono text-neutral-500">INDEX 2023 — 2025</span>
          </div>

          {/* Interactive Project Switcher */}
          <div className="grid grid-cols-1 sm:grid-cols-3 border-2 border-black divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-black bg-white">
            {projects.map((p) => (
              <button
                key={p.id}
                onClick={() => setActiveProject(p.id)}
                className={`p-6 text-left transition-colors cursor-pointer ${
                  activeProject === p.id ? 'bg-[#002fa7] text-white' : 'hover:bg-[#f0f0f2] text-black'
                }`}
              >
                <div className="text-3xl font-black leading-none mb-2">{p.num}</div>
                <div className="text-sm font-black truncate">{p.name}</div>
                <div className={`text-xs font-mono mt-1 ${activeProject === p.id ? 'text-blue-200' : 'text-neutral-500'}`}>
                  {p.location} · {p.year}
                </div>
              </button>
            ))}
          </div>

          {/* Active Work Dossier */}
          <div className="bg-white border-2 border-black p-8 sm:p-12 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-black/20 pb-4">
              <div>
                <span className="text-xs font-mono text-[#002fa7] font-bold block mb-1">
                  PROJEKT {current.num} · STANDORT: {current.location}
                </span>
                <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight">
                  {current.name}
                </h2>
              </div>
              <div className="text-right font-mono text-xs text-neutral-600">
                <div>FLÄCHE: {current.area}</div>
                <div>FERTIGSTELLUNG: {current.year}</div>
              </div>
            </div>

            <p className="text-base sm:text-lg leading-relaxed text-[#222222] max-w-4xl font-normal">
              {current.description}
            </p>

            {/* Structured Metadata Table */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-black/10 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-neutral-500 uppercase block">Materialkanon:</span>
                <span className="font-bold text-black">{current.materials}</span>
              </div>
              <div className="space-y-1">
                <span className="text-neutral-500 uppercase block">Tragwerksingenieurwesen:</span>
                <span className="font-bold text-black">{current.engineer}</span>
              </div>
            </div>
          </div>
        </section>

        {/* Section 03: Four Tenets of Structural Rationalism */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b-2 border-black pb-2">
            <span className="text-sm font-black tracking-widest text-[#002fa7]">
              03 // VIER PRINZIPIEN DER RATIONALITÄT
            </span>
            <span className="text-xs font-mono text-neutral-500">MAX BILL VERMÄCHTNIS</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="border-t-2 border-black pt-4 space-y-2">
              <span className="text-2xl font-black text-[#002fa7]">01</span>
              <h3 className="text-sm font-black uppercase">Das Modul regiert</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                Jedes Bauteil leitet sich mathematisch vom Primärmodul ab. Willkürliche Dimensionen existieren nicht.
              </p>
            </div>

            <div className="border-t-2 border-black pt-4 space-y-2">
              <span className="text-2xl font-black text-[#002fa7]">02</span>
              <h3 className="text-sm font-black uppercase">Wahrhaftigkeit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                Sichtbeton bleibt Sichtbeton. Stahl trägt offen. Keine dekorativen Verkleidungen verhüllen die Traglast.
              </p>
            </div>

            <div className="border-t-2 border-black pt-4 space-y-2">
              <span className="text-2xl font-black text-[#002fa7]">03</span>
              <h3 className="text-sm font-black uppercase">Tageslichtlenkung</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                Licht wird wie ein plastisches Baumaterial behandelt: gerichtet, gefiltert und rhythmisiert.
              </p>
            </div>

            <div className="border-t-2 border-black pt-4 space-y-2">
              <span className="text-2xl font-black text-[#002fa7]">04</span>
              <h3 className="text-sm font-black uppercase">Dauerhaftigkeit</h3>
              <p className="text-xs text-neutral-600 leading-relaxed font-mono">
                Bauten müssen Jahrhunderte überdauern. Zeitlose Proportionen trotzen wechselnden Modeströmungen.
              </p>
            </div>
          </div>
        </section>

        {/* Section 04: Public Dialogue & Monograph Archive */}
        <section className="space-y-8 border-t-2 border-black pt-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
            <div>
              <span className="text-sm font-black tracking-widest text-[#002fa7]">
                04 // MONOGRAPHIEN & KONTAKT
              </span>
              <h3 className="text-2xl font-black uppercase mt-1">Atelier Zürich</h3>
            </div>
            <div className="text-xs font-mono text-neutral-600 space-y-1">
              <div>LIMMATQUAI 84 · 8001 ZÜRICH · SCHWEIZ</div>
              <div>TELEFON: +41 44 218 90 00 · DISKURS@ATELIERHELVETIA.CH</div>
            </div>
          </div>
        </section>
      </main>

      {/* Swiss Bottom Folio Footer */}
      <footer className="border-t-2 border-black bg-white px-6 py-8 text-xs font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 ATELIER HELVETIA AG · ALLE RECHTE VORBEHALTEN</span>
          </div>
          <div className="flex items-center gap-6">
            <span>SCHWEIZERISCHER WERKBUND</span>
            <span className="text-[#002fa7] font-bold">SIA 102 KONFORM</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
