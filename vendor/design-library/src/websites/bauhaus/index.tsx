import React, { useState } from 'react';
import {
  ArrowLeft,
  Circle,
  Square,
  Triangle,
  ArrowRight,
  BookOpen,
  Check,
  Compass,
} from 'lucide-react';

interface Discipline {
  id: string;
  code: string;
  name: string;
  masters: string;
  description: string;
  shape: 'circle' | 'square' | 'triangle';
  color: string;
}

export function BauhausWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeDiscipline, setActiveDiscipline] = useState<string>('d-1');
  const [applicantTrack, setApplicantTrack] = useState('Vorkurs (Foundations)');
  const [applied, setApplied] = useState(false);
  const [applicantName, setApplicantName] = useState('');

  const disciplines: Discipline[] = [
    {
      id: 'd-1',
      code: 'VK-01',
      name: 'Vorkurs: Form & Material Foundations',
      masters: 'László Moholy-Nagy & Johannes Itten',
      description:
        'The unlearning of decorative convention. Rigorous hands-on experimentation with raw sheet metal, unplaned wood, glass prisms, and the physics of tactile perception before specialized study.',
      shape: 'circle',
      color: 'bg-[#d62828] text-white',
    },
    {
      id: 'd-2',
      code: 'AR-02',
      name: 'Architecture & Spatial Modularism',
      masters: 'Walter Gropius & Hannes Meyer',
      description:
        'Building as the total synthesis of art and mechanical production. Prefabricated concrete structures, curtain walls of structural glass, and programmatic optimization for collective living.',
      shape: 'square',
      color: 'bg-[#003049] text-white',
    },
    {
      id: 'd-3',
      code: 'TT-03',
      name: 'Typography, Textile & Computational Form',
      masters: 'Gunta Stölzl & Herbert Bayer',
      description:
        'The elimination of uppercase ornamental serif script. Rational monospaced grid systems, jacquard loom programming, and contemporary algorithmic generative textiles.',
      shape: 'triangle',
      color: 'bg-[#fcbf49] text-black',
    },
  ];

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!applicantName.trim()) return;
    setApplied(true);
    setTimeout(() => {
      setApplied(false);
      setApplicantName('');
    }, 4000);
  };

  const currentDiscipline = disciplines.find((d) => d.id === activeDiscipline) || disciplines[0];

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#111111] font-grotesk selection:bg-[#d62828] selection:text-white antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 bg-[#111111] text-[#f8f9fa] text-xs font-mono hover:bg-[#d62828] transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Primary Geometric Division Top Bar */}
      <div className="grid grid-cols-12 border-b-4 border-[#111111] text-xs font-black uppercase">
        <div className="col-span-12 sm:col-span-4 bg-[#d62828] text-white p-3 flex items-center justify-between">
          <span>KUNST + TECHNIK: EINE NEUE EINHEIT</span>
          <span className="w-3 h-3 rounded-full bg-white" />
        </div>
        <div className="col-span-6 sm:col-span-4 bg-[#003049] text-white p-3 flex items-center justify-between">
          <span>BAUHAUS DESSAU & WEIMAR</span>
          <span className="w-3 h-3 bg-white" />
        </div>
        <div className="col-span-6 sm:col-span-4 bg-[#fcbf49] text-black p-3 flex items-center justify-between">
          <span>SEMESTER 2026/27</span>
          <span className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-black" />
        </div>
      </div>

      {/* Main Bauhaus Architectural Header */}
      <header className="border-b-4 border-[#111111] p-6 sm:p-10 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-2">
            <h1 className="text-6xl sm:text-8xl md:text-9xl font-black uppercase tracking-tighter leading-none">
              BAUHAUS
            </h1>
            <p className="text-xs sm:text-sm font-black tracking-widest text-neutral-600 uppercase">
              INSTITUT FÜR GESTALTUNG, ARCHITEKTUR & DIGITALE FORM
            </p>
          </div>

          <nav className="flex items-center gap-6 text-xs font-black uppercase border-t-2 md:border-t-0 md:border-l-4 border-[#111111] pt-4 md:pt-0 md:pl-6">
            <a href="#vorkurs" className="hover:text-[#d62828] transition-colors">Vorkurs</a>
            <a href="#disciplines" className="hover:text-[#003049] transition-colors">Disziplinen</a>
            <a href="#manifesto" className="hover:text-[#d62828] transition-colors">Manifest</a>
            <a href="#apply" className="px-4 py-2 bg-[#d62828] text-white hover:bg-[#b01e1e]">Bewerben</a>
          </nav>
        </div>
      </header>

      {/* Geometric Hero Grid Composition */}
      <section className="grid grid-cols-1 lg:grid-cols-12 border-b-4 border-[#111111]">
        {/* Left Typography Block (7 Cols) */}
        <div className="lg:col-span-7 p-8 sm:p-14 space-y-8 border-b-4 lg:border-b-0 lg:border-r-4 border-[#111111] bg-[#f8f9fa] flex flex-col justify-between">
          <div className="space-y-6">
            <div className="inline-block px-3 py-1 bg-[#111111] text-white text-xs font-black uppercase">
              FOUNDATIONAL AXIOM // 1919 — 2026
            </div>

            <h2 className="text-4xl sm:text-6xl font-black uppercase leading-tight tracking-tight">
              The Building of the Future will combine Architecture, Sculpture, and Painting in a Single Form.
            </h2>

            <p className="text-sm sm:text-base font-bold text-neutral-700 leading-relaxed max-w-xl">
              We abolish the distinction between artist and craftsman. We design for mass mechanical
              production with pure geometric clarity, primary color harmony, and uncompromising functional rigor.
            </p>
          </div>

          <div className="pt-6 flex flex-wrap gap-4">
            <a
              href="#apply"
              className="px-8 py-4 bg-[#111111] hover:bg-[#d62828] text-white font-black text-xs uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <span>Admission Application</span>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#disciplines"
              className="px-8 py-4 border-4 border-[#111111] bg-white hover:bg-neutral-100 text-black font-black text-xs uppercase tracking-wider transition-colors"
            >
              Inspect Workshops
            </a>
          </div>
        </div>

        {/* Right Pure Geometric Construction (5 Cols) */}
        <div className="lg:col-span-5 grid grid-rows-3 bg-white divide-y-4 divide-[#111111]">
          {/* Geometric Row 1: The Circle */}
          <div className="p-8 bg-[#d62828] text-white flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl font-black">DAS KREIS</span>
              <p className="text-xs font-bold text-red-100">Dynamic continuity & celestial rotation</p>
            </div>
            <div className="w-16 h-16 rounded-full bg-white shadow-lg" />
          </div>

          {/* Geometric Row 2: The Square */}
          <div className="p-8 bg-[#003049] text-white flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl font-black">DAS QUADRAT</span>
              <p className="text-xs font-bold text-blue-100">Structural stability & modular order</p>
            </div>
            <div className="w-16 h-16 bg-[#fcbf49]" />
          </div>

          {/* Geometric Row 3: The Triangle */}
          <div className="p-8 bg-[#fcbf49] text-black flex items-center justify-between">
            <div className="space-y-1">
              <span className="text-2xl font-black">DAS DREIECK</span>
              <p className="text-xs font-bold text-neutral-800">Diagonal vector & directional tension</p>
            </div>
            <div className="w-0 h-0 border-l-[32px] border-l-transparent border-r-[32px] border-r-transparent border-b-[56px] border-b-[#d62828]" />
          </div>
        </div>
      </section>

      {/* Disciplines & Workshops (Interactive Matrix) */}
      <section id="disciplines" className="border-b-4 border-[#111111]">
        <div className="p-6 sm:p-10 border-b-4 border-[#111111] bg-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-black uppercase text-[#d62828] tracking-widest block">
              THREE CORE PILLARS
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Curriculum & Masters
            </h2>
          </div>
          <span className="text-xs font-black uppercase bg-[#111111] text-white px-3 py-1">
            EST. DESSAU CAMPUS
          </span>
        </div>

        {/* Discipline Tab Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y-4 md:divide-y-0 md:divide-x-4 divide-[#111111] border-b-4 border-[#111111]">
          {disciplines.map((d) => (
            <button
              key={d.id}
              onClick={() => setActiveDiscipline(d.id)}
              className={`p-8 text-left transition-all cursor-pointer space-y-3 ${
                activeDiscipline === d.id ? d.color : 'bg-white hover:bg-neutral-100 text-[#111111]'
              }`}
            >
              <div className="flex justify-between items-baseline text-xs font-black">
                <span>{d.code}</span>
                <span className="uppercase">{d.shape}</span>
              </div>
              <h3 className="text-2xl font-black uppercase leading-snug">{d.name}</h3>
              <p className="text-xs font-bold opacity-80">{d.masters}</p>
            </button>
          ))}
        </div>

        {/* Selected Discipline Full Dossier */}
        <div className="p-8 sm:p-14 bg-white space-y-6">
          <div className="flex items-center justify-between border-b-2 border-[#111111] pb-4">
            <span className="text-xs font-black uppercase bg-[#111111] text-white px-2 py-0.5">
              WORKSHOP SPECIFICATION: {currentDiscipline.code}
            </span>
            <span className="text-xs font-bold">LEGACY: {currentDiscipline.masters}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black uppercase">
            {currentDiscipline.name}
          </h3>

          <p className="text-base sm:text-lg font-bold text-neutral-700 leading-relaxed max-w-4xl">
            {currentDiscipline.description}
          </p>

          <div className="pt-4 flex items-center justify-between text-xs font-black">
            <span>240 SEMESTER CREDITS · WEIMAR / DESSAU EXCHANGE</span>
            <a href="#apply" className="underline text-[#d62828] hover:text-black">
              Apply to this Workshop Track →
            </a>
          </div>
        </div>
      </section>

      {/* Bauhaus Manifesto Section */}
      <section id="manifesto" className="p-8 sm:p-14 bg-[#003049] text-white space-y-8 border-b-4 border-[#111111]">
        <div className="max-w-4xl mx-auto space-y-6 text-center">
          <span className="text-xs font-black uppercase tracking-widest text-[#fcbf49]">
            WALTER GROPIUS' 1919 DECLARATION
          </span>
          <blockquote className="text-2xl sm:text-4xl font-black uppercase leading-tight">
            "Architects, sculptors, painters: we all must return to the crafts! For art is not a profession.
            There is no essential difference between the artist and the artisan."
          </blockquote>
        </div>
      </section>

      {/* Admission Application Form */}
      <section id="apply" className="p-8 sm:p-14 bg-white max-w-4xl mx-auto space-y-8 text-center">
        <div className="space-y-2">
          <span className="text-xs font-black uppercase text-[#d62828] tracking-widest">
            ENROLLMENT 2026/27
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase">
            Apply to the Bauhaus Preliminary Course
          </h2>
          <p className="text-xs sm:text-sm font-bold text-neutral-600 max-w-md mx-auto">
            Submit your portfolio dossier for evaluation by our master faculty committee.
          </p>
        </div>

        <form onSubmit={handleApply} className="space-y-4 max-w-md mx-auto">
          <input
            type="text"
            required
            placeholder="Applicant Full Name"
            value={applicantName}
            onChange={(e) => setApplicantName(e.target.value)}
            className="w-full border-4 border-[#111111] p-3 text-xs font-black uppercase focus:outline-none focus:bg-yellow-100"
          />

          <select
            value={applicantTrack}
            onChange={(e) => setApplicantTrack(e.target.value)}
            className="w-full border-4 border-[#111111] p-3 text-xs font-black uppercase focus:outline-none cursor-pointer bg-white"
          >
            <option>Vorkurs: Form & Material Foundations</option>
            <option>Architecture & Spatial Modularism</option>
            <option>Typography, Textile & Computational Form</option>
          </select>

          <button
            type="submit"
            className="w-full py-4 bg-[#d62828] hover:bg-[#b01e1e] text-white font-black text-xs uppercase tracking-widest transition-colors cursor-pointer"
          >
            Submit Application Dossier
          </button>

          {applied && (
            <div className="p-3 bg-[#fcbf49] border-2 border-[#111111] text-xs font-black text-black">
              ✓ Dossier registered for {applicantName}. Portfolio jury convenes in Dessau.
            </div>
          )}
        </form>
      </section>

      {/* Bold Bauhaus Footer */}
      <footer className="border-t-4 border-[#111111] bg-[#111111] text-white p-8 text-xs font-black uppercase">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 STAATLICHES BAUHAUS DESSAU · GESTALTUNGSLEHRE</span>
          </div>
          <div className="flex items-center gap-6 text-[#fcbf49]">
            <span>WEIMAR</span>
            <span>·</span>
            <span>DESSAU</span>
            <span>·</span>
            <span>BERLIN</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
