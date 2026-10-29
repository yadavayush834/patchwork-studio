import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Flame,
  ArrowUpRight,
  Code2,
  Terminal,
  Layers,
  Sliders,
  Check,
  Compass,
  Cpu,
  Globe,
} from 'lucide-react';

interface BrokenProject {
  id: string;
  tag: string;
  title: string;
  client: string;
  year: string;
  tech: string[];
  description: string;
  rotation: string;
  offset: string;
  bgGradient: string;
}

export function BrokenGridWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [chaosFactor, setChaosFactor] = useState(25); // 0 to 100
  const [selectedLabProject, setSelectedLabProject] = useState<string>('lab-1');
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryBudget, setInquiryBudget] = useState('€35k - €60k');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySubmitted, setInquirySubmitted] = useState(false);

  const projects: BrokenProject[] = [
    {
      id: 'lab-1',
      tag: 'EXP.01 // WEBGL SHADER DYNAMICS',
      title: 'HYPER//SYNTH 4D',
      client: 'Klangwelt Sonic Labs, Berlin',
      year: '2026',
      tech: ['Three.js', 'GLSL Raymarching', 'Web Audio API', 'Simplex Noise'],
      description:
        'A real-time synesthetic 4D volumetric audio visualizer. Shaders compute fluid particle convection directly on client GPU threads, synchronizing visual turbulence to 140BPM modular techno rhythms.',
      rotation: '-rotate-1',
      offset: 'translate-x-0',
      bgGradient: 'linear-gradient(135deg, #13091e 0%, #291040 60%, #0d0614 100%)',
    },
    {
      id: 'lab-2',
      tag: 'EXP.02 // NEURAL MORPHOLOGY',
      title: 'PHANTOM MEMORY',
      client: 'Fondation d’Art Contemporain, Paris',
      year: '2025',
      tech: ['WebGPU', 'Compute Shaders', 'Latent Graph Traversals', 'Rust WASM'],
      description:
        'An infinite dreamscape of hallucinatory museum sculptures rendered through on-device neural diffusion weights. Visitors sculpt morphing bronze and marble geometries with cursor vectors.',
      rotation: 'rotate-2',
      offset: 'lg:translate-x-12',
      bgGradient: 'linear-gradient(145deg, #09171a 0%, #102e33 60%, #061113 100%)',
    },
    {
      id: 'lab-3',
      tag: 'EXP.03 // RADICAL EDITORIAL',
      title: 'DEVIANT CODEX // VOL. 08',
      client: 'Subversive Press, London / Tokyo',
      year: '2026',
      tech: ['CSS Houdini', 'Kinetic Variable Typography', 'Zero-Framework Custom Canvas'],
      description:
        'A digital manifesto defying all standard responsive grids. Paragraphs cantilever across screen edges, headings collide with floating 3D stickers, and reading rhythm is governed by scroll speed.',
      rotation: '-rotate-2',
      offset: 'lg:-translate-x-8',
      bgGradient: 'linear-gradient(125deg, #1c1106 0%, #3d2309 60%, #120b04 100%)',
    },
  ];

  // Dynamic transform based on Chaos Factor slider
  const dynamicSkew = (chaosFactor - 25) * 0.08;

  return (
    <div className="min-h-screen bg-[#070709] text-[#f4f4f5] font-sans selection:bg-[#ccff00] selection:text-black overflow-x-hidden relative">
      {/* Return to Gallery Navigation Bar */}
      <div className="border-b border-[#1c1d24] bg-[#0c0d12] px-4 py-2.5 flex items-center justify-between text-xs font-mono relative z-50">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-1.5 px-3 py-1 rounded border border-[#2b2d38] hover:bg-[#1a1b24] text-[#ccff00] transition-colors cursor-pointer font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>RETURN TO GALLERY</span>
          </button>
          <span className="hidden sm:inline-block text-[#555]">•</span>
          <span className="hidden sm:inline-block text-[#888]">
            WEBSITE #20 // BROKEN GRID EXPERIMENTAL AGENCY
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] text-[#888] font-mono hidden sm:inline-block">GRID DESTRUCTION FACTOR:</span>
          <div className="flex items-center gap-2">
            <input
              type="range"
              min="0"
              max="100"
              value={chaosFactor}
              onChange={(e) => setChaosFactor(Number(e.target.value))}
              className="w-24 accent-[#ccff00]"
            />
            <span className="font-mono text-xs font-bold text-[#ccff00] w-9 text-right">
              {chaosFactor}%
            </span>
          </div>
        </div>
      </div>

      {/* Experimental Brand Header */}
      <header className="border-b border-[#181922] sticky top-0 z-40 bg-[#070709]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
          <div className="space-y-0.5">
            <div className="flex items-baseline gap-2">
              <span className="font-black text-2xl sm:text-3xl tracking-tighter text-white font-grotesk">
                DEVIANT LAB
              </span>
              <span className="text-[10px] font-mono font-bold bg-[#ccff00] text-black px-1.5 py-0.5 transform -rotate-2">
                // CREATIVE COMPUTATION
              </span>
            </div>
            <div className="text-[11px] font-mono text-[#777] hidden sm:block">
              Radical WebGL, Experimental Frontend Architecture & Unapologetic Design
            </div>
          </div>

          <div className="hidden lg:flex items-center gap-8 text-xs font-mono uppercase tracking-wider text-[#999]">
            <a href="#hero" className="hover:text-[#ccff00] transition-colors">
              // Anti-Grid
            </a>
            <a href="#projects" className="hover:text-[#ccff00] transition-colors">
              // Lab Works (3)
            </a>
            <a href="#capabilities" className="hover:text-[#ccff00] transition-colors">
              // Radical Toolkit
            </a>
            <a href="#contact" className="hover:text-[#ccff00] transition-colors">
              // Initiate Project
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="px-4 py-2 bg-[#ccff00] hover:bg-[#b8e600] text-black font-mono text-xs font-black uppercase tracking-wider transition-transform hover:scale-105 shadow-[3px_3px_0px_#ffffff]"
            >
              Commission Us
            </a>
          </div>
        </div>
      </header>

      {/* HERO SECTION: Scale-Breaking Typography & Overlapping Canvas Elements */}
      <section id="hero" className="max-w-7xl mx-auto px-6 sm:px-10 pt-16 sm:pt-24 pb-20 relative">
        {/* Kinetic Floating Badges Cutting Across Grid */}
        <div className="absolute top-8 right-12 hidden lg:block transform rotate-6 z-30">
          <div className="p-3 bg-[#a855f7] text-black font-mono text-xs font-black uppercase shadow-[4px_4px_0_0_#ffffff] border-2 border-black">
            ✦ NO TEMPLATES PERMITTED
          </div>
        </div>
        <div className="absolute top-36 left-4 hidden lg:block transform -rotate-12 z-30">
          <div className="p-2 bg-[#22c55e] text-black font-mono text-[10px] font-black uppercase shadow-[3px_3px_0_0_#000] border border-black">
            RADICAL COMPUTATION // BERLIN
          </div>
        </div>

        {/* Huge Scale-Breaking Headline */}
        <div className="space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#14151e] border border-[#232533] text-xs font-mono text-[#ccff00]">
            <Zap className="w-3.5 h-3.5" />
            <span>THE BROKEN GRID PHILOSOPHY // SYSTEMATIC DISRUPTION</span>
          </div>

          <h1
            className="text-6xl sm:text-8xl lg:text-9xl font-black font-grotesk tracking-tighter uppercase leading-[0.88] text-white transition-transform duration-300"
            style={{ transform: `skewY(${dynamicSkew}deg)` }}
          >
            BREAK THE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ccff00] via-[#22c55e] to-[#a855f7]">
              RIGID GRID.
            </span> <br />
            SET CODE FREE.
          </h1>
        </div>

        {/* OVERLAPPING HERO CANVAS CARD (Deliberately Intruding into Headline Whitespace) */}
        <div className="mt-8 sm:-mt-16 lg:-mt-24 relative z-20 max-w-4xl lg:ml-auto">
          <div className="p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-[#12131c] via-[#1a1b28] to-[#0c0d13] border-2 border-[#2c2f42] shadow-[12px_12px_0px_#000000] transform -rotate-1 hover:rotate-0 transition-transform duration-500 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="bg-[#ccff00] text-black px-2.5 py-0.5 font-bold uppercase">
                FEATURED LAB REALIZATION
              </span>
              <span className="text-[#888]">CLIENT: KLANGWELT SONIC LABS // 2026</span>
            </div>

            {/* Simulated Generative Canvas View */}
            <div className="aspect-[16/9] rounded-xl overflow-hidden bg-black border border-white/20 relative flex flex-col justify-between p-6">
              <div
                className="absolute inset-0 opacity-40 pointer-events-none mix-blend-screen"
                style={{
                  background:
                    'radial-gradient(circle at 30% 40%, #ccff00 0%, transparent 40%), radial-gradient(circle at 75% 65%, #a855f7 0%, transparent 45%)',
                }}
              />

              <div className="relative z-10 flex justify-between text-xs font-mono text-white/80">
                <span>RAYMARCH_STEPS: 128</span>
                <span className="text-[#ccff00]">FRAME RATE: 120 FPS</span>
              </div>

              {/* Overlapping Glitch Graphic */}
              <div className="relative z-10 text-center py-8">
                <div className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                  VOLUMETRIC CHAOS
                </div>
                <div className="text-xs font-mono text-[#ccff00] mt-1">
                  GPU WebGL Audio Reactor Mesh
                </div>
              </div>

              <div className="relative z-10 flex justify-between text-xs font-mono text-white/70">
                <span>CANVAS 001 // ACTIVE</span>
                <span>SPECTRAL ANALYSIS OK</span>
              </div>
            </div>

            {/* Cantilevered Caption Overhanging the Card Border */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs sm:text-sm text-[#a1a1aa] font-sans max-w-md">
                We design websites that refuse to look like standard corporate SaaS templates. Bespoke typography, offset rhythm, and visceral interaction.
              </p>
              <a
                href="#projects"
                className="px-5 py-2.5 bg-white text-black font-mono text-xs font-black uppercase tracking-wider hover:bg-[#ccff00] transition-colors shrink-0 text-center"
              >
                Inspect Selected Works
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SELECTED DISRUPTIVE WORKS: Deliberate Overlaps & Asymmetric Cantilevers */}
      <section id="projects" className="max-w-7xl mx-auto px-6 sm:px-10 py-24 space-y-24">
        <div className="border-b border-[#232533] pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-widest">
              DISRUPTIVE LAB ARCHIVE // 2025–2026
            </span>
            <h2 className="text-4xl sm:text-6xl font-black text-white font-grotesk uppercase tracking-tight">
              Selected Works
            </h2>
          </div>
          <p className="text-xs font-mono text-[#777] max-w-sm">
            Three interactive digital experiences where layouts rupture boundaries and typography commands the space.
          </p>
        </div>

        {/* Project 01: HYPER//SYNTH 4D (75% Width with Overlapping Tech Badge) */}
        <div className="relative">
          <div className={`p-8 sm:p-12 rounded-2xl border-2 border-[#2a2d3d] shadow-[8px_8px_0_0_#000] lg:w-[80%] space-y-6 ${projects[0].rotation} hover:rotate-0 transition-transform duration-300`} style={{ background: projects[0].bgGradient }}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-2xl font-black font-grotesk text-[#ccff00]">#01</span>
              <span className="bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 px-3 py-1 font-bold">
                {projects[0].tag}
              </span>
              <span className="text-[#aaa]">{projects[0].client}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                {projects[0].title}
              </h3>
              <p className="text-xs font-mono text-[#a855f7] uppercase font-bold">
                {projects[0].year} // FULL CUSTOM GLSL ENGINE
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed max-w-2xl font-sans">
              {projects[0].description}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono">
              {projects[0].tech.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-black/50 border border-white/20 text-[#ccff00]">
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Overlapping Floating Asset Card (Pushed Down & Right over the next boundary) */}
          <div className="hidden lg:block absolute -bottom-10 right-4 w-72 p-5 rounded-xl bg-black border-2 border-[#ccff00] shadow-[8px_8px_0_0_#ffffff] transform rotate-3 z-30">
            <div className="text-[10px] font-mono uppercase text-[#ccff00] font-bold">
              AUDIO REACTIVE KERNEL
            </div>
            <div className="text-xs font-bold text-white mt-1">
              FFT 1024-Band Frequency Mesh
            </div>
            <div className="text-[11px] font-mono text-[#888] mt-2">
              Sub-12ms Latency Guarantee
            </div>
          </div>
        </div>

        {/* Project 02: PHANTOM MEMORY (Right-Aligned, Overlapping Left Side) */}
        <div className="relative lg:pt-8">
          <div className={`p-8 sm:p-12 rounded-2xl border-2 border-[#2a2d3d] shadow-[8px_8px_0_0_#000] lg:w-[82%] lg:ml-auto space-y-6 ${projects[1].rotation} hover:rotate-0 transition-transform duration-300`} style={{ background: projects[1].bgGradient }}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-2xl font-black font-grotesk text-[#22c55e]">#02</span>
              <span className="bg-[#22c55e]/10 text-[#22c55e] border border-[#22c55e]/30 px-3 py-1 font-bold">
                {projects[1].tag}
              </span>
              <span className="text-[#aaa]">{projects[1].client}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                {projects[1].title}
              </h3>
              <p className="text-xs font-mono text-[#22c55e] uppercase font-bold">
                {projects[1].year} // NEURAL COMPUTATION
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed max-w-2xl font-sans">
              {projects[1].description}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono">
              {projects[1].tech.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-black/50 border border-white/20 text-[#22c55e]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Project 03: DEVIANT CODEX (Broken Grid with Interactive Shader Distortion Tester) */}
        <div className="relative">
          <div className={`p-8 sm:p-12 rounded-2xl border-2 border-[#2a2d3d] shadow-[8px_8px_0_0_#000] lg:w-[85%] space-y-6 ${projects[2].rotation} hover:rotate-0 transition-transform duration-300`} style={{ background: projects[2].bgGradient }}>
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <span className="text-2xl font-black font-grotesk text-[#ccff00]">#03</span>
              <span className="bg-[#ccff00]/10 text-[#ccff00] border border-[#ccff00]/30 px-3 py-1 font-bold">
                {projects[2].tag}
              </span>
              <span className="text-[#aaa]">{projects[2].client}</span>
            </div>

            <div className="space-y-2">
              <h3 className="font-grotesk text-3xl sm:text-5xl font-black text-white uppercase tracking-tight">
                {projects[2].title}
              </h3>
              <p className="text-xs font-mono text-[#ccff00] uppercase font-bold">
                {projects[2].year} // RADICAL EDITORIAL
              </p>
            </div>

            <p className="text-sm sm:text-base text-[#d4d4d8] leading-relaxed max-w-2xl font-sans">
              {projects[2].description}
            </p>

            <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2 text-xs font-mono">
              {projects[2].tech.map((t, i) => (
                <span key={i} className="px-2.5 py-1 rounded bg-black/50 border border-white/20 text-[#ccff00]">
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RADICAL CAPABILITIES MATRIX: Asymmetrical Step Blocks */}
      <section id="capabilities" className="border-t border-[#181922] bg-[#0c0d12] py-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 space-y-16">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-widest">
              CAPABILITIES // UNCOMPROMISING DISCIPLINES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-grotesk uppercase">
              The Deviant Toolkit
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {/* Box 1 */}
            <div className="p-6 rounded-2xl bg-[#14151e] border-2 border-[#242738] space-y-4 hover:border-[#ccff00] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#ccff00] text-black flex items-center justify-center font-bold font-mono">
                01
              </div>
              <h3 className="font-grotesk text-xl font-black text-white uppercase">
                Creative Coding & Shaders
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                GLSL shaders, WebGL2 pipelines, fluid simulation, and particle physics running directly on user hardware.
              </p>
            </div>

            {/* Box 2 (Stepped Down) */}
            <div className="p-6 rounded-2xl bg-[#14151e] border-2 border-[#242738] space-y-4 lg:translate-y-8 hover:border-[#22c55e] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#22c55e] text-black flex items-center justify-center font-bold font-mono">
                02
              </div>
              <h3 className="font-grotesk text-xl font-black text-white uppercase">
                Anti-Generic Brand Systems
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Brutal typography, custom kinetic fonts, generative logos, and non-conformist art direction that stands out instantly.
              </p>
            </div>

            {/* Box 3 */}
            <div className="p-6 rounded-2xl bg-[#14151e] border-2 border-[#242738] space-y-4 hover:border-[#a855f7] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-[#a855f7] text-black flex items-center justify-center font-bold font-mono">
                03
              </div>
              <h3 className="font-grotesk text-xl font-black text-white uppercase">
                Immersive 3D & Audio
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Spatial Web Audio API synthesizers, interactive acoustic nodes, and responsive 3D procedural meshes.
              </p>
            </div>

            {/* Box 4 (Stepped Down) */}
            <div className="p-6 rounded-2xl bg-[#14151e] border-2 border-[#242738] space-y-4 lg:translate-y-8 hover:border-[#ccff00] transition-colors">
              <div className="w-10 h-10 rounded-xl bg-white text-black flex items-center justify-center font-bold font-mono">
                04
              </div>
              <h3 className="font-grotesk text-xl font-black text-white uppercase">
                Speculative Web Architectures
              </h3>
              <p className="text-xs text-[#a1a1aa] leading-relaxed">
                Zero-framework bespoke interfaces, custom canvas runners, and experimental digital interactions for culture and arts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGENCY COLOPHON & KINETIC INQUIRY TERMINAL */}
      <section id="contact" className="max-w-7xl mx-auto px-6 sm:px-10 py-24">
        <div className="p-8 sm:p-14 rounded-3xl bg-gradient-to-br from-[#12141f] via-[#171926] to-[#0c0d14] border-2 border-[#2b2e40] shadow-[16px_16px_0px_#000000] space-y-8 relative">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#ccff00] font-bold uppercase tracking-widest">
              INITIATE COLLABORATION // WE WORK GLOBALLY
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white font-grotesk uppercase">
              Build Something Radically Different
            </h2>
            <p className="text-xs sm:text-sm text-[#999] font-mono max-w-xl">
              We accept 6 boutique client projects annually. If you want a safe corporate blue website, please hire another agency.
            </p>
          </div>

          {inquirySubmitted ? (
            <div className="p-6 rounded-2xl bg-[#ccff00]/10 border-2 border-[#ccff00] space-y-2 font-mono text-xs text-white">
              <div className="font-bold text-[#ccff00] flex items-center gap-2">
                <Check className="w-4 h-4" />
                <span>PROJECT BRIEF DISPATCHED // TRANSMISSION CONFIRMED</span>
              </div>
              <p>
                Thanks <span className="font-bold text-[#ccff00]">{inquiryName}</span>. Creative Director Axel Vane will review your {inquiryBudget} brief and contact <span className="font-bold text-[#ccff00]">{inquiryEmail}</span> within 24 hours.
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
                  <label className="block text-[10px] uppercase font-bold text-[#ccff00] mb-1">
                    Your Name / Studio
                  </label>
                  <input
                    type="text"
                    required
                    value={inquiryName}
                    onChange={(e) => setInquiryName(e.target.value)}
                    placeholder="e.g. Maya Chen Studio"
                    className="w-full p-3 bg-black border border-[#2c2f42] rounded-xl text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] uppercase font-bold text-[#ccff00] mb-1">
                    Direct Email
                  </label>
                  <input
                    type="email"
                    required
                    value={inquiryEmail}
                    onChange={(e) => setInquiryEmail(e.target.value)}
                    placeholder="maya@studio.net"
                    className="w-full p-3 bg-black border border-[#2c2f42] rounded-xl text-white focus:outline-none focus:border-[#ccff00]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] uppercase font-bold text-[#ccff00] mb-1">
                  Budget Scope
                </label>
                <select
                  value={inquiryBudget}
                  onChange={(e) => setInquiryBudget(e.target.value)}
                  className="w-full p-3 bg-black border border-[#2c2f42] rounded-xl text-white focus:outline-none focus:border-[#ccff00]"
                >
                  <option value="€20k - €35k">€20k - €35k (Experimental Micro-Site / Shader Art)</option>
                  <option value="€35k - €60k">€35k - €60k (Complete Immersive Brand Web Experience)</option>
                  <option value="€60k+">€60k+ (Enterprise Computational Platform & WebGL Ecosystem)</option>
                </select>
              </div>

              {/* Cantilevered Submit Button Deliberately Breaking the Border */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-4 bg-[#ccff00] hover:bg-[#b5e600] text-black font-mono text-xs font-black uppercase tracking-wider transition-all transform hover:-translate-y-1 shadow-[4px_4px_0_0_#ffffff] cursor-pointer"
                >
                  Send Transmission // Break the Grid ➔
                </button>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Agency Footer */}
      <footer className="border-t border-[#181922] py-12 font-mono text-xs text-[#777]">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <span className="font-black text-white uppercase text-base">
              DEVIANT LAB // CREATIVE COMPUTATION
            </span>
            <div className="text-[11px] text-[#555]">
              BERLIN // TOKYO // BROOKLYN // ALL RIGHTS ANARCHICALLY PROTECTED
            </div>
          </div>
          <div className="flex items-center gap-6 text-[11px] uppercase text-[#888]">
            <span>GLSL SHADERS</span>
            <span>·</span>
            <span>NO TEMPLATES</span>
            <span>·</span>
            <span>CODE AS ART</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
