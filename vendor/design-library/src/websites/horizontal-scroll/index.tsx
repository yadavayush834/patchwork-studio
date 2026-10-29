import React, { useState, useEffect, useRef } from 'react';
import {
  ArrowLeft,
  ArrowRight,
  Maximize2,
  X,
  Volume2,
  VolumeX,
  Compass,
  Layers,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Eye,
  Sliders,
} from 'lucide-react';

interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  year: string;
  client: string;
  materials: string;
  description: string;
  accent: string;
  dimensions: string;
  specifications: string[];
}

export function HorizontalScrollWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);
  const [audioAmbient, setAudioAmbient] = useState<boolean>(false);
  const [activePanelIdx, setActivePanelIdx] = useState<number>(0);

  const projects: ProjectItem[] = [
    {
      id: 'proj-1',
      number: '01',
      title: 'VAKUUM PAVILION',
      category: 'Cantilevered Spatial Architecture',
      year: '2026',
      client: 'Fondation d’Art Contemporain, Basel',
      materials: 'Ultra-Dense Basalt, Borosilicate Glass, Tensile Titanium Stays',
      dimensions: '42m Prow · 180° Cantilever over Alpine Chasm',
      description: 'A monolithic exhibition pavilion suspended over an alpine ravine. Engineered with an asymmetric counterbalance root extending 30 meters into granite bedrock, completely devoid of interior vertical columns.',
      accent: '#00f0ff',
      specifications: [
        'Post-tensioned titanium tendon network (4,200 kN capacity)',
        'Dynamic acoustic dampening fluid chambers',
        'Triple-glazed photovoltaic structural glass diaphragms',
        'Sub-zero geothermal heat exchanger grid',
      ],
    },
    {
      id: 'proj-2',
      number: '02',
      title: 'KINETIC MONOGRAPH',
      category: 'Autonomous Physical Typography',
      year: '2025',
      client: 'Atelier Helvetia & Zürich Design Biennale',
      materials: 'Anodized Beryllium Alloy, Micro-Stepper Actuators, E-Paper Plates',
      dimensions: '12m × 3.5m Kinetic Wall Matrix',
      description: 'An architectural typography installation comprised of 480 motor-actuated louver blades that rotate synchronously to render typographic letterforms using physical shadows and natural sunlight.',
      accent: '#ff5c00',
      specifications: [
        '480 Brushless micro-stepper motors with 0.05° angular resolution',
        'Real-time sun-azimuth tracking mathematical controller',
        'Precision CNC-milled matte black anodized louvers',
        'Generative typographic glyph morphing engine',
      ],
    },
    {
      id: 'proj-3',
      number: '03',
      title: 'CORTEX SPATIAL OS',
      category: 'Neural Holographic Interface',
      year: '2026',
      client: 'Cognitive Computing Labs, Stockholm',
      materials: 'Optic Waveguide Arrays, Spatial Audio Transducers',
      dimensions: 'Room-Scale 6DoF Spatial Workspace',
      description: 'A spatial operating environment for distributed neural engineering. Replaces 2D windows with topological attention graphs floating in ambient room geometry with sub-millimeter finger tracking.',
      accent: '#a855f7',
      specifications: [
        'Sub-millimeter optical hand & gaze telemetry',
        'Spatial audio raytracing reflecting off actual room geometry',
        'Latent space manifold visualization in 6DoF',
        'Zero-latency peer-to-peer WebRTC spatial sync',
      ],
    },
    {
      id: 'proj-4',
      number: '04',
      title: 'AETHELGARD OBSERVATORY',
      category: 'Sub-Arctic Astronomical Research',
      year: '2025',
      client: 'Nordic Astronomical Consortium, Tromsø',
      materials: 'Weathering Corten Steel, Cryogenic Vacuum Cryostats',
      dimensions: 'Dual 8.4m Sub-Millimeter Telescopes',
      description: 'An astronomical station perched on an isolated sub-arctic coastal ridge, isolated from electromagnetic terrestrial interference to monitor cosmic microwave background polarization.',
      accent: '#10b981',
      specifications: [
        'Corten steel aerodynamic shield deflecting 160 km/h blizzard winds',
        'Helium-4 closed-cycle dilution refrigerator (0.1 Kelvin)',
        'Ultra-low phase noise local oscillator synthesizer',
        'Autonomous satellite uplink with fiber-optic backup',
      ],
    },
  ];

  // Convert vertical wheel scrolls into horizontal scroll on desktop
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const handleWheel = (e: WheelEvent) => {
      // If modal is open, let user scroll inside modal
      if (activeProjectModal) return;

      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 1.5;
      }
    };

    const handleScroll = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (maxScroll > 0) {
        const prog = el.scrollLeft / maxScroll;
        setScrollProgress(prog);
        const panel = Math.round(prog * 5);
        setActivePanelIdx(panel);
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    el.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      el.removeEventListener('wheel', handleWheel);
      el.removeEventListener('scroll', handleScroll);
    };
  }, [activeProjectModal]);

  // Keyboard navigation (ArrowLeft, ArrowRight)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const el = containerRef.current;
      if (!el || activeProjectModal) return;

      if (e.key === 'ArrowRight') {
        el.scrollBy({ left: window.innerWidth * 0.7, behavior: 'smooth' });
      } else if (e.key === 'ArrowLeft') {
        el.scrollBy({ left: -window.innerWidth * 0.7, behavior: 'smooth' });
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeProjectModal]);

  // Ambient sound synthesizer
  useEffect(() => {
    if (!audioAmbient) return;
    try {
      const ctx = new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(65, ctx.currentTime);
      gain.gain.setValueAtTime(0.03, ctx.currentTime);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      return () => {
        osc.stop();
        ctx.close();
      };
    } catch {
      // Audio suppressed
    }
  }, [audioAmbient]);

  const scrollToPanel = (idx: number) => {
    const el = containerRef.current;
    if (!el) return;
    const target = (el.scrollWidth - el.clientWidth) * (idx / 5);
    el.scrollTo({ left: target, behavior: 'smooth' });
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#07080b] text-[#f1f3f7] font-sans select-none">
      {/* Top Floating Control Bar */}
      <header className="fixed top-0 inset-x-0 z-40 px-6 sm:px-10 py-5 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-4 pointer-events-auto">
          {onBackToGallery && (
            <button
              onClick={onBackToGallery}
              className="px-3.5 py-1.5 rounded-full border border-white/20 bg-black/60 backdrop-blur-md text-xs font-mono text-slate-300 hover:text-white hover:border-white/50 transition-all flex items-center gap-2 group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-0.5 transition-transform" />
              <span>EXIT HORIZONTAL EXHIBITION</span>
            </button>
          )}

          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-slate-400 bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/10">
            <span className="w-2 h-2 rounded-full bg-[#00f0ff] animate-pulse" />
            <span>AURA // MONOLITH STUDIO</span>
          </div>
        </div>

        {/* Center Panel Indicators */}
        <div className="hidden md:flex items-center gap-1.5 bg-black/60 backdrop-blur-md p-1.5 rounded-full border border-white/15 pointer-events-auto">
          {['Cover', '01 Vakuum', '02 Kinetic', '03 Cortex', '04 Aethelgard', 'Manifesto'].map((name, i) => (
            <button
              key={name}
              onClick={() => scrollToPanel(i)}
              className={`px-3 py-1 rounded-full text-[11px] font-mono transition-all cursor-pointer ${
                activePanelIdx === i
                  ? 'bg-white text-black font-bold shadow'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Ambient Sound & Key Navigation Hint */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <button
            onClick={() => setAudioAmbient(!audioAmbient)}
            className={`p-2 rounded-full border text-xs transition-all cursor-pointer ${
              audioAmbient
                ? 'border-[#00f0ff] bg-[#00f0ff]/20 text-[#00f0ff]'
                : 'border-white/15 bg-black/60 text-slate-400 hover:text-white'
            }`}
            title="Toggle spatial low-frequency drone"
          >
            {audioAmbient ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </button>

          <div className="hidden lg:flex items-center gap-2 text-[10px] font-mono text-slate-400 bg-black/60 px-3 py-1.5 rounded-full border border-white/15">
            <span>SCROLL OR USE</span>
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">&larr;</kbd>
            <kbd className="px-1.5 py-0.5 bg-white/10 rounded text-white">&rarr;</kbd>
          </div>
        </div>
      </header>

      {/* Main Horizontal Scrollable Filmstrip Canvas */}
      <div
        ref={containerRef}
        className="w-full h-full overflow-x-scroll overflow-y-hidden flex flex-nowrap scroll-smooth cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollSnapType: 'none' }}
      >
        {/* PANEL 0: Grand Editorial Entrance Cover */}
        <section className="w-screen h-full shrink-0 flex flex-col justify-between p-8 sm:p-16 relative border-r border-white/10 bg-[#07080b]">
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#00f0ff_1px,transparent_1px)] [background-size:32px_32px] pointer-events-none" />

          <div className="pt-20 space-y-2">
            <div className="text-xs font-mono text-[#00f0ff] tracking-[0.3em] uppercase">
              Spatial Architecture &amp; Experimental Direction
            </div>
            <div className="text-[11px] font-mono text-slate-500">
              COORDINATES: LAT 46.2044° N · LON 6.1432° E · ELEV 1,420M
            </div>
          </div>

          <div className="space-y-6 max-w-5xl">
            <h1 className="text-5xl sm:text-7xl lg:text-9xl font-black font-unbounded text-white tracking-tighter leading-none">
              AURA <br />
              <span className="font-editorial italic font-normal text-[#00f0ff]">
                Monolith
              </span>
            </h1>

            <p className="text-base sm:text-xl text-slate-400 max-w-2xl font-light leading-relaxed font-sans">
              An international creative practice operating at the boundaries of structural architecture, kinetic physics, and digital computation.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 border-t border-white/10 pt-6 font-mono text-xs text-slate-400">
            <div className="flex items-center gap-3">
              <span className="animate-pulse text-[#00f0ff]">&bull;</span>
              <span>FOUR COMMISSIONED WORKS ACROSS ALPINE &amp; CYBERNETIC REALMS</span>
            </div>

            <button
              onClick={() => scrollToPanel(1)}
              className="flex items-center gap-2 text-white font-bold tracking-wider hover:text-[#00f0ff] transition-colors cursor-pointer"
            >
              <span>BEGIN HORIZONTAL TRAVERSE</span>
              <ArrowRight className="w-4 h-4 animate-bounce" />
            </button>
          </div>
        </section>

        {/* PANELS 1 - 4: Full-Screen Project Showcases */}
        {projects.map((proj, idx) => (
          <section
            key={proj.id}
            className="w-screen h-full shrink-0 flex flex-col justify-between p-8 sm:p-16 relative border-r border-white/10 bg-[#090b10] overflow-hidden group"
          >
            {/* Background Project Number Watermark */}
            <div className="absolute right-8 bottom-8 text-[18vw] font-black font-unbounded text-white/5 pointer-events-none leading-none select-none">
              {proj.number}
            </div>

            {/* Top Project Tagline */}
            <div className="pt-20 flex justify-between items-start relative z-10">
              <div className="space-y-1">
                <span className="text-xs font-mono text-slate-400">PROJECT {proj.number} OF 04</span>
                <div className="text-xs font-mono uppercase tracking-widest text-[#00f0ff]">
                  {proj.category}
                </div>
              </div>

              <div className="text-right font-mono text-xs text-slate-500">
                <div>CLIENT: {proj.client}</div>
                <div>YEAR: {proj.year}</div>
              </div>
            </div>

            {/* Center Content & Visual Representation */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10 my-auto">
              <div className="lg:col-span-7 space-y-6">
                <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black font-unbounded text-white tracking-tight leading-tight">
                  {proj.title}
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl leading-relaxed">
                  {proj.description}
                </p>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5 backdrop-blur space-y-2 max-w-lg">
                  <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">
                    Structural Materials &amp; Scale
                  </div>
                  <div className="text-xs font-mono text-white font-bold">{proj.materials}</div>
                  <div className="text-[11px] font-mono text-[#00f0ff]">{proj.dimensions}</div>
                </div>

                <div className="pt-2">
                  <button
                    onClick={() => setActiveProjectModal(proj)}
                    className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold tracking-wider hover:bg-[#00f0ff] hover:text-black transition-all flex items-center gap-2 shadow-lg cursor-pointer"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                    <span>INSPECT TECHNICAL DOSSIER</span>
                  </button>
                </div>
              </div>

              {/* Right Architectural Abstract Vector Artwork */}
              <div className="lg:col-span-5 flex justify-center">
                <div
                  className="w-72 h-72 sm:w-88 sm:h-88 rounded-3xl border border-white/20 p-8 flex flex-col justify-between relative overflow-hidden transition-all duration-700 group-hover:border-[#00f0ff]/60 shadow-2xl"
                  style={{
                    background: `radial-gradient(circle at 70% 30%, ${proj.accent}20 0%, #0d111a 80%)`,
                  }}
                >
                  <div className="flex justify-between items-center text-xs font-mono text-slate-400">
                    <span>CANVAS REF: 0{idx + 1}</span>
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: proj.accent }} />
                  </div>

                  {/* SVG Geometric Blueprint Iconography */}
                  <svg className="w-full h-36 my-auto" viewBox="0 0 200 120">
                    <polygon
                      points="20,100 100,20 180,100"
                      fill="none"
                      stroke={proj.accent}
                      strokeWidth="1.5"
                    />
                    <line x1="20" y1="100" x2="180" y2="100" stroke="#ffffff" strokeWidth="1" strokeDasharray="3 3" />
                    <line x1="100" y1="20" x2="100" y2="100" stroke="#ffffff" strokeWidth="1" strokeDasharray="2 4" />
                    <circle cx="100" cy="20" r="4" fill={proj.accent} />
                    <circle cx="20" cy="100" r="3" fill="#ffffff" />
                    <circle cx="180" cy="100" r="3" fill="#ffffff" />
                  </svg>

                  <div className="text-[10px] font-mono text-slate-400 flex justify-between border-t border-white/10 pt-2">
                    <span>ISOMETRIC PROJECTION</span>
                    <span>SCALE 1:500</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Status Strip */}
            <div className="border-t border-white/10 pt-4 flex justify-between items-center font-mono text-xs text-slate-500 relative z-10">
              <div>MONOGRAPH ENTRY // ARCHIVE 2026</div>
              <div className="flex items-center gap-1">
                <span>PRESS</span>
                <kbd className="px-1 bg-white/10 text-white rounded text-[10px]">&rarr;</kbd>
                <span>FOR NEXT WORK</span>
              </div>
            </div>
          </section>
        ))}

        {/* PANEL 5: Studio Manifesto & Terminal Inquiry */}
        <section className="w-screen h-full shrink-0 flex flex-col justify-between p-8 sm:p-16 relative bg-[#060709]">
          <div className="pt-20 space-y-1">
            <span className="text-xs font-mono text-[#00f0ff] uppercase tracking-widest">Philosophy &amp; Manifesto</span>
            <div className="text-xs font-mono text-slate-500">EXHIBITION CONCLUSION</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-6xl">
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-black font-unbounded text-white leading-tight">
                Form follows <br />
                <span className="font-editorial italic font-normal text-[#00f0ff]">
                  gravitational tension.
                </span>
              </h2>

              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                We reject superficial decoration and the homogenization of digital interfaces. Every project is conceived as an enduring spatial monument—rooted in material physics, authentic engineering constraints, and emotional stillness.
              </p>

              <div className="flex gap-4 pt-2">
                {onBackToGallery && (
                  <button
                    onClick={onBackToGallery}
                    className="px-6 py-3 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all cursor-pointer shadow-lg"
                  >
                    RETURN TO WEBSITES GALLERY
                  </button>
                )}
                <button
                  onClick={() => scrollToPanel(0)}
                  className="px-5 py-3 rounded-full border border-white/20 text-white font-mono text-xs hover:border-white transition-all cursor-pointer"
                >
                  REPLAY JOURNEY &uarr;
                </button>
              </div>
            </div>

            {/* Inquiry Specimen Card */}
            <div className="p-8 rounded-3xl border border-white/15 bg-white/5 space-y-4">
              <div className="text-xs font-mono text-[#00f0ff] uppercase tracking-wider">
                COMMISSION AN ARCHITECTURAL MONOGRAPH
              </div>
              <div className="space-y-3 font-mono text-xs">
                <div>
                  <label className="text-slate-400 block mb-1">Direct Liaison</label>
                  <input
                    type="text"
                    defaultValue="commissions@aura-monolith.ch"
                    readOnly
                    className="w-full px-3 py-2 rounded bg-black/60 border border-white/15 text-white"
                  />
                </div>
                <div>
                  <label className="text-slate-400 block mb-1">Locations</label>
                  <div className="text-slate-300">Geneva · Zürich · Tromsø · Tokyo</div>
                </div>
              </div>
              <div className="text-[11px] text-slate-500 font-mono pt-2">
                All rights reserved. Monolith Design Laboratory &copy; 2026.
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-4 font-mono text-xs text-slate-500 text-center">
            END OF HORIZONTAL SCROLL STORYTELLING JOURNEY
          </div>
        </section>
      </div>

      {/* Bottom Global Progress Bar Scrubber */}
      <footer className="fixed bottom-0 inset-x-0 z-40 px-6 sm:px-10 py-4 flex items-center justify-between bg-black/70 backdrop-blur-md border-t border-white/10 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-slate-400">PANEL {activePanelIdx + 1} / 06</span>
          <span className="text-slate-600">·</span>
          <span className="text-[#00f0ff] font-bold">{Math.round(scrollProgress * 100)}% EXPLORED</span>
        </div>

        {/* Visual Progress Bar Track */}
        <div className="flex-1 max-w-md mx-6 h-1 bg-white/15 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#00f0ff] to-[#a855f7] transition-all duration-150"
            style={{ width: `${scrollProgress * 100}%` }}
          />
        </div>

        <div className="text-slate-400 hidden sm:block">
          DRAG OR SCROLL WHEEL HORIZONTALLY
        </div>
      </footer>

      {/* Technical Project Drawer Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="max-w-2xl w-full p-8 rounded-3xl border border-white/20 bg-[#0c0e15] text-white space-y-6 shadow-2xl relative animate-in fade-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveProjectModal(null)}
              className="absolute top-6 right-6 p-2 rounded-full border border-white/20 text-slate-400 hover:text-white hover:border-white transition-all cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="space-y-1">
              <span className="text-xs font-mono text-[#00f0ff]">TECHNICAL DOSSIER {activeProjectModal.number}</span>
              <h3 className="text-3xl font-black font-unbounded">{activeProjectModal.title}</h3>
              <div className="text-xs font-mono text-slate-400">{activeProjectModal.category}</div>
            </div>

            <p className="text-sm text-slate-300 font-light leading-relaxed">
              {activeProjectModal.description}
            </p>

            <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-1 font-mono text-xs">
              <div className="text-slate-400 uppercase text-[10px]">Fabrication Materials</div>
              <div className="text-white font-bold">{activeProjectModal.materials}</div>
              <div className="text-[#00f0ff] pt-1">{activeProjectModal.dimensions}</div>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                Architectural Engineering Specifications
              </div>
              <div className="space-y-1.5 font-mono text-xs">
                {activeProjectModal.specifications.map((spec, i) => (
                  <div key={i} className="flex items-start gap-2 text-slate-300">
                    <span className="text-[#00f0ff] font-bold">&bull;</span>
                    <span>{spec}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="px-6 py-2.5 rounded-full bg-white text-black font-mono text-xs font-bold hover:bg-[#00f0ff] transition-all cursor-pointer"
              >
                Close Dossier
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
