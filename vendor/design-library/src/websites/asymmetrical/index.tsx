import React, { useState } from 'react';
import {
  ArrowLeft,
  Compass,
  ArrowUpRight,
  Maximize2,
  Layers,
  MapPin,
  Calendar,
  Check,
  ChevronRight,
  Plus,
} from 'lucide-react';

interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  typology: string;
  location: string;
  year: string;
  area: string;
  elevation: string;
  materials: string[];
  description: string;
  gradient: string;
  offsetClass: string;
}

export function AsymmetricalWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeLayer, setActiveLayer] = useState<'elevation' | 'tectonic'>('elevation');
  const [selectedProject, setSelectedProject] = useState<string>('proj-1');
  const [inquiryTypology, setInquiryTypology] = useState('cultural');
  const [inquiryArea, setInquiryArea] = useState('2500');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const projects: Project[] = [
    {
      id: 'proj-1',
      number: '01',
      title: 'The Cantilever House',
      subtitle: 'Post-Tensioned Mass Above Alpine Chasm',
      typology: 'Alpine Residential Monolith',
      location: 'Engadin Valley, Switzerland (46.4908° N, 9.8355° E)',
      year: '2025',
      area: '840 m²',
      elevation: '+1,820m MSL',
      materials: ['Board-Formed Basalt', 'Post-Tensioned Concrete', 'Low-Iron Dihedral Glass'],
      description:
        'A 22-meter structural cantilever extending unsupported over an alpine granite drop. The primary living volume floats above snowdrifts, anchored by a subterranean counterbalance mass cast directly into native metamorphic bedrock.',
      gradient: 'linear-gradient(135deg, #1c1d21 0%, #30333d 50%, #151619 100%)',
      offsetClass: 'lg:w-[72%] lg:mr-auto',
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'Subterranean Teahouse',
      subtitle: 'Excavated Basalt Void & Compressed Light',
      typology: 'Sacred Ritual Space',
      location: 'Higashiyama, Kyoto, Japan (35.0037° N, 135.7772° E)',
      year: '2026',
      area: '310 m²',
      elevation: '+85m MSL',
      materials: ['Hand-Chiseled Andesite', 'Smoked Hinoki Wood', 'Charred Washi Paper'],
      description:
        'Submerged four meters beneath an ancient bamboo grove. Natural daylight is introduced exclusively through an asymmetric 120mm slit carved into the roof slab, charting the solar equinox onto wet slate tiles.',
      gradient: 'linear-gradient(160deg, #18191a 0%, #292825 60%, #121211 100%)',
      offsetClass: 'lg:w-[58%] lg:ml-auto lg:-mt-16',
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'Institute for Oceanic Seismology',
      subtitle: 'Brutalist Monolith at Continental Fault Line',
      typology: 'Scientific Research Station',
      location: 'Reykjanes Peninsula, Iceland (63.8562° N, 22.7092° W)',
      year: '2024',
      area: '4,200 m²',
      elevation: '+12m MSL',
      materials: ['Sulfur-Resistant Geopolymer', 'Tensioned Titanium Struts', 'Corten Steel Plating'],
      description:
        'Engineered to withstand tectonic drift across the North American and Eurasian tectonic plates. The structure is decoupled into three non-parallel basalt pylons connected via elastomeric seismic damping isolators.',
      gradient: 'linear-gradient(125deg, #12171f 0%, #212c3b 55%, #0c1017 100%)',
      offsetClass: 'lg:w-[82%] lg:mx-auto',
    },
  ];

  const activeProjectData = projects.find((p) => p.id === selectedProject) || projects[0];

  return (
    <div className="min-h-screen bg-[#141517] text-[#e6e4df] font-sans selection:bg-[#c96245] selection:text-white">
      {/* Return to Gallery Navigation Bar */}
      <div className="border-b border-[#292a2e] bg-[#1a1b1e] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-1.5 px-3 py-1 rounded border border-[#373940] hover:bg-[#25272c] text-[#e6e4df] transition-colors cursor-pointer font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#c96245]" />
            <span>RETURN TO GALLERY</span>
          </button>
          <span className="hidden sm:inline-block text-[#555]">•</span>
          <span className="hidden sm:inline-block text-[#888]">
            WEBSITE #18 // ASYMMETRICAL ARCHITECTURAL STUDIO
          </span>
        </div>
        <div className="flex items-center gap-3 font-mono text-[11px] text-[#999]">
          <span>ZÜRICH // TOKYO</span>
          <span className="text-[#c96245] font-bold">LAT 47.3769° N</span>
        </div>
      </div>

      {/* Asymmetric Studio Header */}
      <header className="border-b border-[#24262b] sticky top-0 z-40 bg-[#141517]/90 backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 h-20 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="font-grotesk text-2xl sm:text-3xl font-black tracking-tight text-white uppercase">
              AXIS & VOID
            </div>
            <div className="text-[10px] font-mono tracking-widest text-[#888] uppercase">
              Multidisciplinary Architecture & Spatial Laboratory
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-10 text-xs font-mono uppercase tracking-widest text-[#aaa]">
            <a href="#projects" className="hover:text-white transition-colors">
              01 Realizations
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors">
              02 Tectonic Axioms
            </a>
            <a href="#materials" className="hover:text-white transition-colors">
              03 Material Archive
            </a>
            <a href="#commission" className="hover:text-white transition-colors">
              04 Commission Dossier
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#commission"
              className="px-4 py-2 rounded bg-[#c96245] hover:bg-[#b05238] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors"
            >
              Commission Project
            </a>
          </div>
        </div>
      </header>

      {/* Asymmetric Hero Section */}
      <section className="max-w-[1400px] mx-auto px-6 sm:px-12 pt-16 sm:pt-28 pb-20 relative overflow-hidden">
        {/* Massive Offset Hero Title */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#202227] border border-[#2d3037] text-xs font-mono text-[#c96245]">
              <span className="w-2 h-2 rounded-full bg-[#c96245] animate-pulse" />
              <span>SPATIAL ASYMMETRY // PURPOSEFUL TENSION</span>
            </div>

            <h1 className="font-grotesk text-5xl sm:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[0.92] uppercase">
              FORM BORN OF <br />
              <span className="text-[#c96245]">UNBALANCED</span> <br />
              GRAVITATIONAL MASS.
            </h1>
          </div>

          {/* Hanging Offset Metadata Block (Shifted Down & Right) */}
          <div className="lg:col-span-4 lg:pt-20 space-y-6">
            <div className="p-6 sm:p-8 rounded-lg bg-[#1a1b1f] border border-[#2a2c33] space-y-4 shadow-2xl relative">
              <div className="absolute -top-3 right-6 px-2 py-0.5 rounded bg-[#c96245] text-white font-mono text-[10px] font-bold uppercase tracking-widest">
                STUDIO DISCIPLINE
              </div>
              <p className="text-xs sm:text-sm text-[#b0ada4] leading-relaxed font-sans">
                We reject symmetric safety. Every square meter of architectural volume is tensioned through deliberate cantilever, unequal massing, and calculated negative space.
              </p>
              <div className="pt-3 border-t border-[#2a2c33] flex justify-between text-xs font-mono text-[#777]">
                <span>FOUNDED 2014</span>
                <span className="text-[#e6e4df]">42 COMPLETED MONOLITHS</span>
              </div>
            </div>
          </div>
        </div>

        {/* Hero Architectural Blueprint Visualization (Offset Grid) */}
        <div className="mt-16 relative">
          <div className="aspect-[16/9] sm:aspect-[21/9] rounded-xl overflow-hidden border border-[#2b2d34] shadow-2xl relative flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-br from-[#181a1f] via-[#21242c] to-[#121316]">
            {/* Technical Elevation CAD Grid Lines */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
                backgroundSize: '48px 48px',
              }}
            />

            <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 text-xs font-mono text-[#aaa]">
              <span className="bg-black/60 px-3 py-1 rounded backdrop-blur border border-white/10">
                ELEVATION DRAWING // SECTION B-B’
              </span>
              <span className="bg-black/60 px-3 py-1 rounded backdrop-blur border border-white/10 text-[#c96245]">
                CANTILEVER OVERHANG: +22.400 M
              </span>
            </div>

            {/* Asymmetrical Geometric Architectural Silhouette */}
            <div className="relative z-10 py-10 flex items-center justify-start pl-4 sm:pl-16">
              <div className="relative w-full max-w-2xl h-36 sm:h-52">
                {/* Heavy Subterranean Anchor Mass */}
                <div className="absolute bottom-0 left-0 w-44 sm:w-64 h-24 sm:h-36 bg-[#2c2f38] border border-white/20 shadow-2xl flex items-center justify-center text-[10px] font-mono text-[#888] uppercase tracking-widest">
                  BEDROCK ANCHOR [-4.20M]
                </div>
                {/* Asymmetric Cantilever Slab Extending Off to the Right */}
                <div className="absolute top-4 left-32 sm:left-48 right-0 h-16 sm:h-24 bg-gradient-to-r from-[#3a3f4c] to-[#20232b] border border-[#c96245]/50 shadow-2xl flex items-center justify-between px-6 text-white text-xs font-mono font-bold">
                  <span>SUSPENDED LIVING PROW</span>
                  <span className="text-[#c96245]">0.00° DEFLECTION</span>
                </div>
                {/* Diagonal Tension Cable */}
                <div className="absolute top-4 left-32 sm:left-48 w-48 sm:w-72 h-[1px] bg-[#c96245] origin-top-left rotate-[28deg] shadow-[0_0_8px_#c96245]" />
              </div>
            </div>

            <div className="relative z-10 flex flex-wrap justify-between items-end gap-3 text-xs font-mono text-[#777]">
              <span>PROJECT 01 // ENGADIN CHASM RESIDENCE</span>
              <span>SCALE 1:100 @ A1 PAPER EQUIVALENT</span>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED SPATIAL REALIZATIONS: Staggered, Unequal Widths & Vertical Offsets */}
      <section id="projects" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 space-y-24">
        <div className="border-b border-[#2b2d34] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-mono text-[#c96245] uppercase tracking-widest">
              PORTFOLIO SECTION 01
            </span>
            <h2 className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mt-1">
              Selected Spatial Realizations
            </h2>
          </div>
          <p className="text-xs font-mono text-[#888] max-w-sm">
            Three monographic studies demonstrating deliberate structural asymmetry across contrasting natural topographies.
          </p>
        </div>

        {/* Project 01: 72% Width Left-Aligned */}
        <div className="space-y-6">
          <div className={`p-8 sm:p-12 rounded-2xl border border-[#2b2e37] bg-[#1a1b20] shadow-2xl ${projects[0].offsetClass} space-y-6 transition-all`}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#aaa]">
              <span className="text-2xl font-black font-grotesk text-[#c96245]">{projects[0].number}</span>
              <span className="bg-[#24262d] px-3 py-1 rounded">{projects[0].typology}</span>
              <span>{projects[0].location}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-4xl font-black text-white uppercase">
                {projects[0].title}
              </h3>
              <p className="font-mono text-xs text-[#c96245] uppercase tracking-wider">
                {projects[0].subtitle}
              </p>
            </div>

            <p className="text-sm text-[#b0ada4] leading-relaxed max-w-2xl font-sans">
              {projects[0].description}
            </p>

            <div className="pt-4 border-t border-[#292c35] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#666] block text-[10px]">TOTAL AREA:</span>
                <span className="font-bold text-white">{projects[0].area}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">ELEVATION:</span>
                <span className="font-bold text-white">{projects[0].elevation}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">COMPLETION:</span>
                <span className="font-bold text-white">{projects[0].year}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">PRIMARY TECTONICS:</span>
                <span className="font-bold text-[#c96245]">Post-Tensioned Basalt</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 02: 58% Width Right-Aligned Pushed Up */}
        <div className="space-y-6">
          <div className={`p-8 sm:p-12 rounded-2xl border border-[#2b2e37] bg-[#1a1b20] shadow-2xl ${projects[1].offsetClass} space-y-6 transition-all`}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#aaa]">
              <span className="text-2xl font-black font-grotesk text-[#c96245]">{projects[1].number}</span>
              <span className="bg-[#24262d] px-3 py-1 rounded">{projects[1].typology}</span>
              <span>{projects[1].location}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-4xl font-black text-white uppercase">
                {projects[1].title}
              </h3>
              <p className="font-mono text-xs text-[#c96245] uppercase tracking-wider">
                {projects[1].subtitle}
              </p>
            </div>

            <p className="text-sm text-[#b0ada4] leading-relaxed font-sans">
              {projects[1].description}
            </p>

            <div className="pt-4 border-t border-[#292c35] grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#666] block text-[10px]">AREA:</span>
                <span className="font-bold text-white">{projects[1].area}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">DEPTH:</span>
                <span className="font-bold text-white">-4.00M Below Grade</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">TECTONICS:</span>
                <span className="font-bold text-[#c96245]">Smoked Hinoki & Slate</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project 03: 82% Width Center with Layer Inspector */}
        <div className="space-y-6">
          <div className={`p-8 sm:p-12 rounded-2xl border border-[#2b2e37] bg-[#1a1b20] shadow-2xl ${projects[2].offsetClass} space-y-6 transition-all`}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-[#aaa]">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-black font-grotesk text-[#c96245]">{projects[2].number}</span>
                <span className="bg-[#24262d] px-3 py-1 rounded">{projects[2].typology}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-[#777] uppercase">Layer:</span>
                <button
                  onClick={() => setActiveLayer('elevation')}
                  className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold cursor-pointer ${
                    activeLayer === 'elevation' ? 'bg-[#c96245] text-white' : 'bg-[#24262d] text-[#888]'
                  }`}
                >
                  Elevation
                </button>
                <button
                  onClick={() => setActiveLayer('tectonic')}
                  className={`px-2.5 py-0.5 rounded text-[10px] uppercase font-bold cursor-pointer ${
                    activeLayer === 'tectonic' ? 'bg-[#c96245] text-white' : 'bg-[#24262d] text-[#888]'
                  }`}
                >
                  Tectonic Matrix
                </button>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-4xl font-black text-white uppercase">
                {projects[2].title}
              </h3>
              <p className="font-mono text-xs text-[#c96245] uppercase tracking-wider">
                {projects[2].subtitle}
              </p>
            </div>

            <p className="text-sm text-[#b0ada4] leading-relaxed max-w-3xl font-sans">
              {projects[2].description}
            </p>

            <div className="pt-4 border-t border-[#292c35] grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#666] block text-[10px]">TOTAL FOOTPRINT:</span>
                <span className="font-bold text-white">{projects[2].area}</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">SEISMIC ZONE:</span>
                <span className="font-bold text-white">Class 5 (Active Rift)</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">STATUS:</span>
                <span className="font-bold text-emerald-400">Operational</span>
              </div>
              <div>
                <span className="text-[#666] block text-[10px]">STRUCTURAL DAMPERS:</span>
                <span className="font-bold text-[#c96245]">Elastomeric Fluid Dampers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STUDIO PHILOSOPHY: Asymmetric Two-Column Essay (30% vs 70%) */}
      <section id="philosophy" className="border-t border-[#24262b] bg-[#101113] py-24">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Column 1 (30%): Four Bold Architectural Axioms */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#c96245] uppercase tracking-widest">
                  AXIOMS OF TECTONIC FRICTION
                </span>
                <h3 className="font-grotesk text-2xl font-black text-white uppercase">
                  Studio Principles
                </h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="p-4 rounded bg-[#17181c] border border-[#272930] space-y-1">
                  <div className="text-[#c96245] font-bold">01 // THE COUNTERWEIGHT</div>
                  <div className="text-[#aaa]">No volume floats without an equal subterranean debt.</div>
                </div>
                <div className="p-4 rounded bg-[#17181c] border border-[#272930] space-y-1">
                  <div className="text-[#c96245] font-bold">02 // CALCULATED DISPLACEMENT</div>
                  <div className="text-[#aaa]">Symmetry produces sleep; tension produces consciousness.</div>
                </div>
                <div className="p-4 rounded bg-[#17181c] border border-[#272930] space-y-1">
                  <div className="text-[#c96245] font-bold">03 // NEGATIVE VOLUMETRIC VOID</div>
                  <div className="text-[#aaa]">The unbuilt air between masses is the primary room.</div>
                </div>
                <div className="p-4 rounded bg-[#17181c] border border-[#272930] space-y-1">
                  <div className="text-[#c96245] font-bold">04 // RAW RESISTANCE</div>
                  <div className="text-[#aaa]">Materials must preserve their geologic memory without polish.</div>
                </div>
              </div>
            </div>

            {/* Column 2 (70%): Long-Form Thesis */}
            <div className="lg:col-span-8 space-y-8 font-sans text-sm sm:text-base text-[#b0ada4] leading-relaxed">
              <h2 className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase leading-tight">
                "Architecture must not apologize for interrupting the horizon. It must negotiate with gravity."
              </h2>
              <p>
                In classical Vitruvian composition, balance was achieved by mirroring columns and dividing facades into harmonious, predictable fractions. But contemporary topography is rarely harmonious. Alpine slopes fracture along fault lines; urban plots are constrained by asymmetric easements.
              </p>
              <p>
                At Axis & Void, we treat structural asymmetry not as an eccentric stylistic ornament, but as the only honest response to the forces acting upon modern construction. By shifting masses off-center, we create architectural torque that engages the human nervous system. A visitor walking through our cantilevers experiences the weight of the mountain through their feet.
              </p>
              <div className="pt-4 border-t border-[#292c35] flex items-center justify-between text-xs font-mono text-[#777]">
                <span>ARCH. MARCUS VOID // PRINCIPAL</span>
                <span>ARCH. ERIKA TAKENAKA // DESIGN PARTNER</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MATERIAL ARCHIVE: Asymmetric Material Stagger */}
      <section id="materials" className="max-w-[1400px] mx-auto px-6 sm:px-12 py-20 space-y-12">
        <div className="space-y-2">
          <span className="text-xs font-mono text-[#c96245] uppercase tracking-widest">
            TECTONIC PALETTE // PHYSICAL CANON
          </span>
          <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-white uppercase">
            Material Realities
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 rounded-xl border border-[#292c35] bg-[#181a1e] space-y-4">
            <div className="w-full h-32 rounded bg-[#26282e] border border-white/10 flex items-center justify-center font-mono text-xs text-[#888]">
              BASALT 01
            </div>
            <div>
              <div className="font-grotesk font-black text-white text-lg uppercase">Raw Basalt Slab</div>
              <div className="text-xs font-mono text-[#c96245]">Compressive: 240 MPa</div>
            </div>
            <p className="text-xs text-[#999] leading-relaxed">
              Quarried in the Graubünden massif. Unpolished, flame-treated surfaces that retain natural fracturing.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#292c35] bg-[#181a1e] space-y-4 lg:translate-y-6">
            <div className="w-full h-32 rounded bg-[#2f333a] border border-white/10 flex items-center justify-center font-mono text-xs text-[#888]">
              CONCRETE 02
            </div>
            <div>
              <div className="font-grotesk font-black text-white text-lg uppercase">Board-Formed Mass</div>
              <div className="text-xs font-mono text-[#c96245]">Portland Pozzolan Blend</div>
            </div>
            <p className="text-xs text-[#999] leading-relaxed">
              Cast against rough-sawn Douglas fir planks. High-density aggregate exposed to seasonal weathering.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#292c35] bg-[#181a1e] space-y-4">
            <div className="w-full h-32 rounded bg-[#212328] border border-white/10 flex items-center justify-center font-mono text-xs text-[#888]">
              TITANIUM 03
            </div>
            <div>
              <div className="font-grotesk font-black text-white text-lg uppercase">Tensioned Titanium</div>
              <div className="text-xs font-mono text-[#c96245]">Grade 5 High-Tensile</div>
            </div>
            <p className="text-xs text-[#999] leading-relaxed">
              Grade 5 structural cables capable of sustaining 680 kN tensile load across suspended balcony corners.
            </p>
          </div>

          <div className="p-6 rounded-xl border border-[#292c35] bg-[#181a1e] space-y-4 lg:translate-y-6">
            <div className="w-full h-32 rounded bg-[#1e232b] border border-white/10 flex items-center justify-center font-mono text-xs text-[#888]">
              GLASS 04
            </div>
            <div>
              <div className="font-grotesk font-black text-white text-lg uppercase">Low-Iron Dihedral</div>
              <div className="text-xs font-mono text-[#c96245]">Triple Structural Glazing</div>
            </div>
            <p className="text-xs text-[#999] leading-relaxed">
              Acoustically decoupled laminated glass providing solar heat gain coefficient of 0.28 at high altitudes.
            </p>
          </div>
        </div>
      </section>

      {/* PROJECT COMMISSIONING DOSSIER */}
      <section id="commission" className="border-t border-[#24262b] bg-[#121316] py-20">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <span className="text-xs font-mono text-[#c96245] uppercase tracking-widest">
                  INITIATE COMMISSION
                </span>
                <h2 className="font-grotesk text-3xl sm:text-4xl font-black text-white uppercase">
                  Commission Spatial Monolith
                </h2>
              </div>
              <p className="text-sm text-[#b0ada4] leading-relaxed font-sans">
                Axis & Void accepts four architectural commissions per calendar year. We prioritize projects situated on complex, topographically demanding terrain.
              </p>

              <div className="space-y-3 font-mono text-xs text-[#888]">
                <div>ZÜRICH STUDIO: LIMMATQUAI 84, 8001 ZÜRICH</div>
                <div>TOKYO STUDIO: MINAMI-AOYAMA 5-7, MINATO-KU</div>
                <div className="text-[#c96245]">CONFIDENTIALITY: STRICT NDAS STANDARD</div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="p-8 sm:p-10 rounded-2xl bg-[#191a1e] border border-[#2b2e37] shadow-2xl space-y-6">
                {inquirySubmitted ? (
                  <div className="p-6 rounded-xl bg-emerald-500/10 border border-emerald-500/30 space-y-3 font-mono text-xs text-emerald-400">
                    <div className="font-bold flex items-center gap-2">
                      <Check className="w-4 h-4" />
                      <span>COMMISSION DOSSIER REGISTERED // REFERENCE #AV-2026</span>
                    </div>
                    <p className="text-slate-300 leading-relaxed">
                      Thank you, <span className="font-bold text-white">{inquiryName}</span>. Your brief for a <span className="font-bold text-white">{inquiryTypology.toUpperCase()}</span> project ({inquiryArea} m²) has been routed to Principal Marcus Void. We will contact <span className="font-bold text-white">{inquiryEmail}</span> within 48 hours.
                    </p>
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
                        <label className="block text-[10px] uppercase text-[#888] mb-1">
                          Client / Institution Name
                        </label>
                        <input
                          type="text"
                          required
                          value={inquiryName}
                          onChange={(e) => setInquiryName(e.target.value)}
                          placeholder="e.g. Fondation de Montagne"
                          className="w-full p-3 rounded bg-[#131417] border border-[#2b2e37] text-white focus:outline-none focus:border-[#c96245]"
                        />
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-[#888] mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          required
                          value={inquiryEmail}
                          onChange={(e) => setInquiryEmail(e.target.value)}
                          placeholder="director@montagne.ch"
                          className="w-full p-3 rounded bg-[#131417] border border-[#2b2e37] text-white focus:outline-none focus:border-[#c96245]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-[10px] uppercase text-[#888] mb-1">
                          Typological Category
                        </label>
                        <select
                          value={inquiryTypology}
                          onChange={(e) => setInquiryTypology(e.target.value)}
                          className="w-full p-3 rounded bg-[#131417] border border-[#2b2e37] text-white focus:outline-none focus:border-[#c96245]"
                        >
                          <option value="cultural">Cultural / Museum Pavilion</option>
                          <option value="residential">Alpine Private Residence</option>
                          <option value="research">Scientific Research Station</option>
                          <option value="sacred">Contemplative / Sacred Space</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-[10px] uppercase text-[#888] mb-1">
                          Estimated Footprint ({inquiryArea} m²)
                        </label>
                        <input
                          type="range"
                          min="300"
                          max="8000"
                          step="100"
                          value={inquiryArea}
                          onChange={(e) => setInquiryArea(e.target.value)}
                          className="w-full mt-2 accent-[#c96245]"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 rounded bg-[#c96245] hover:bg-[#b05238] text-white font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer mt-2"
                    >
                      Submit Commission Dossier
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Colophon Footer */}
      <footer className="border-t border-[#24262b] py-12 font-mono text-xs text-[#777]">
        <div className="max-w-[1400px] mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-grotesk font-black text-white uppercase text-base">
              AXIS & VOID ARCHITECTS
            </span>
            <div className="text-[11px] text-[#666]">
              SWISS FEDERATION OF ARCHITECTS (BSA) // ARCHITECTURAL ASSOCIATION
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase">
            <span>ZÜRICH</span>
            <span>·</span>
            <span>TOKYO</span>
            <span>·</span>
            <span>REYKJAVIK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
