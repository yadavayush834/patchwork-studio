import React, { useState, useMemo } from 'react';
import {
  websitesRegistry,
  type WebsiteStyleMetadata,
} from '../registry';
import { HoverVideoScrollPreview } from '@/components/preview/HoverVideoScrollPreview';
import {
  Search,
  LayoutGrid,
  List,
  ArrowUpRight,
} from 'lucide-react';

interface WebsitesGalleryProps {
  onSelectWebsite: (id: string) => void;
}

function WebsiteThumbnail({ website }: { website: WebsiteStyleMetadata }) {
  switch (website.id) {
    // ------------------------------------------
    // BATCH 1 THUMBNAILS (1 - 10)
    // ------------------------------------------
    case 'minimalist':
      return (
        <div className="w-full h-full bg-[#fafafa] text-[#111111] p-5 flex flex-col justify-between font-sans border-b border-[#e5e5e5]">
          <div className="flex justify-between items-baseline text-[10px] text-[#737373] font-mono">
            <span>KAELEN VANCE</span>
            <span>STOCKHOLM · 14:32</span>
          </div>
          <div className="text-center py-2">
            <div className="text-sm font-light text-[#111111]">
              "Silent software & distributed primitives."
            </div>
            <div className="text-[10px] text-[#a3a3a3] font-mono mt-1">Zero decoration · Restrained whitespace</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#737373] pt-1 border-t border-[#e5e5e5]">
            <span>SYSTEM GROTESK</span>
            <span className="text-[#111111] font-bold">SUBTLE STONE ACCENT</span>
          </div>
        </div>
      );

    case 'modern':
      return (
        <div className="w-full h-full bg-[#080c15] text-[#f1f5f9] p-5 flex flex-col justify-between font-sans border-b border-[#1e293b]">
          <div className="flex justify-between items-center text-[10px] text-[#38bdf8] font-mono">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38bdf8] animate-pulse" />
              SYNAPSE AI // v4.2
            </span>
            <span className="text-slate-400">WASM RUNTIME</span>
          </div>
          <div className="bg-[#0f172a] border border-[#1e293b] p-2.5 rounded-lg text-center space-y-1">
            <div className="text-xs font-bold text-white">Autonomous Agent Swarm</div>
            <div className="text-[10px] text-[#94a3b8]">Sub-millisecond WebAssembly Sandbox</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#64748b]">
            <span>GRAPHITE & COBALT</span>
            <span className="text-[#38bdf8] font-bold">ZERO-KNOWLEDGE AUDIT</span>
          </div>
        </div>
      );

    case 'brutalist':
      return (
        <div className="w-full h-full bg-white text-black p-5 flex flex-col justify-between font-mono border-b-4 border-black">
          <div className="flex justify-between items-center text-[10px] font-black uppercase bg-[#ff3b00] text-black px-1.5 py-0.5">
            <span>ATELIER NO-SPEC</span>
            <span>[CPH / RAW]</span>
          </div>
          <div className="text-center py-1">
            <div className="text-lg font-black uppercase leading-none">
              FORM FOLLOWS CRASH
            </div>
            <div className="text-[9px] font-bold mt-1 text-neutral-600">
              ================= RAW ASCII =================
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-black uppercase">
            <span>4PX BLACK BORDERS</span>
            <span className="text-[#ff3b00]">100% UNPOLISHED</span>
          </div>
        </div>
      );

    case 'neo-brutalist':
      return (
        <div className="w-full h-full bg-[#d4ff00] text-black p-5 flex flex-col justify-between font-brutal border-b-4 border-black">
          <div className="flex justify-between items-center text-[10px] font-black uppercase">
            <span className="bg-[#ff5caa] px-2 py-0.5 border-2 border-black shadow-[2px_2px_0_0_#000]">
              HACK//PULSE '26
            </span>
            <span className="font-black">$75,000 POOL</span>
          </div>
          <div className="bg-white border-3 border-black p-2 text-center shadow-[3px_3px_0_0_#000]">
            <div className="text-xs font-black uppercase">48H STUDENT SPRINT</div>
            <div className="text-[9px] font-bold text-neutral-700">1,200 Hackers Globally</div>
          </div>
          <div className="flex justify-between text-[9px] font-black uppercase">
            <span>CHUNKY OFFSET SHADOWS</span>
            <span className="bg-[#00f0ff] px-1 border border-black">TACTILE BUTTONS</span>
          </div>
        </div>
      );

    case 'maximalist':
      return (
        <div className="w-full h-full bg-[#11052c] text-white p-5 flex flex-col justify-between font-sans border-b-2 border-[#c77dff]/40 relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-bold">
            <span className="bg-[#e2f952] text-black px-2 py-0.5 rounded font-black">
              CHROMALUX '26
            </span>
            <span className="text-[#ff6b35] font-mono">AMSTERDAM</span>
          </div>
          <div className="text-center py-1">
            <div className="text-base font-black font-serif-luxury italic text-[#e2f952] leading-tight">
              Synthetic Sensory Overload
            </div>
            <div className="text-[10px] text-[#d8b4fe] font-mono mt-0.5">Volumetric Lasers & Modular Sound</div>
          </div>
          <div className="flex justify-between text-[9px] font-bold text-[#c77dff]">
            <span className="text-[#ff6b35]">84 ARTISTS</span>
            <span className="text-[#e2f952]">COLLAGE LAYERS</span>
          </div>
        </div>
      );

    case 'swiss':
      return (
        <div className="w-full h-full bg-[#f5f5f7] text-[#111111] p-5 flex flex-col justify-between font-grotesk border-b-2 border-black">
          <div className="flex justify-between items-baseline text-[10px] font-black border-b border-black pb-1">
            <span>ATELIER HELVETIA</span>
            <span className="text-[#002fa7]">ZÜRICH · BASEL</span>
          </div>
          <div className="flex items-baseline justify-between py-1">
            <span className="text-4xl font-black text-[#002fa7] leading-none">01</span>
            <span className="text-[10px] font-mono text-neutral-600 text-right">
              MODULARES RASTER<br />MÜLLER-BROCKMANN
            </span>
          </div>
          <div className="flex justify-between text-[9px] font-mono font-bold uppercase pt-1 border-t border-black/20">
            <span>KLEIN BLUE ACCENT</span>
            <span className="text-[#002fa7]">12-COLUMN DISCIPLINE</span>
          </div>
        </div>
      );

    case 'editorial':
      return (
        <div className="w-full h-full bg-[#fdfbf7] text-[#1b1917] p-5 flex flex-col justify-between font-editorial border-b border-[#ded5c2]">
          <div className="flex justify-between items-baseline text-[10px] font-mono-tech text-[#8a4f3d]">
            <span className="font-bold uppercase tracking-widest">FOLIO MAGAZINE</span>
            <span>ISSUE 48 · SPRING</span>
          </div>
          <div className="text-center py-1">
            <div className="font-serif-luxury text-base font-bold text-[#1b1917] italic">
              "The Architecture of Silent Space"
            </div>
            <div className="text-[10px] font-mono-tech text-[#6b665f] mt-0.5">By Dr. Simone Chen · 18 min read</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono-tech text-[#6b665f] pt-1 border-t border-[#ded5c2]">
            <span>ARCHIVAL NEWSPRINT</span>
            <span className="text-[#8a4f3d] font-bold">CORMORANT SERIF</span>
          </div>
        </div>
      );

    case 'luxury':
      return (
        <div className="w-full h-full bg-[#0a0908] text-[#f7f5f0] p-5 flex flex-col justify-between font-sans border-b border-[#22201d]">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#c5a880] uppercase tracking-widest">
            <span>PLACE VENDÔME</span>
            <span>PARIS 1892</span>
          </div>
          <div className="text-center py-1">
            <div className="font-serif-luxury text-lg text-white uppercase tracking-[0.15em]">
              L'Ombre et La Lumière
            </div>
            <div className="text-[10px] text-[#a8a195] tracking-widest mt-0.5">Haute Joaillerie & Couture</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#6e685f] uppercase tracking-wider">
            <span>OBSIDIAN & CHAMPAGNE</span>
            <span className="text-[#c5a880]">SALON PRIVÉ CONCIERGE</span>
          </div>
        </div>
      );

    case 'corporate':
      return (
        <div className="w-full h-full bg-white text-[#0b192c] p-5 flex flex-col justify-between font-sans border-b border-slate-200">
          <div className="flex justify-between items-center text-[10px] font-mono text-slate-500 uppercase font-bold">
            <span className="text-[#0b192c]">STRATA CLOUD SYSTEMS</span>
            <span>ENTERPRISE ADVISORY</span>
          </div>
          <div className="bg-slate-50 border border-slate-200 p-2.5 rounded-lg text-center space-y-0.5">
            <div className="text-xs font-bold text-[#0b192c]">Cloud Modernization Mesh</div>
            <div className="text-[10px] text-emerald-600 font-bold">$480M+ Cost Avoidance Yield</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-slate-500">
            <span>NAVY & PRECISION COBALT</span>
            <span className="text-[#0b192c] font-bold">SOC2 TYPE II AUDITED</span>
          </div>
        </div>
      );

    case 'organic':
      return (
        <div className="w-full h-full bg-[#f7f4ed] text-[#22251e] p-5 flex flex-col justify-between font-sans border-b border-[#ded7c8]">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#5a7359] font-bold">
            <span>BOTANICA TERRA</span>
            <span>BATCH NO. 14</span>
          </div>
          <div className="text-center py-1">
            <div className="font-serif-luxury text-base font-bold text-[#22251e]">
              Soil-Cultivated Phyto-Nutrition
            </div>
            <div className="text-[10px] text-[#5a6250] mt-0.5">Blue Tansy · Bakuchiol · Sea Kelp</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#5a6250]">
            <span>TERRACOTTA & SAGE</span>
            <span className="text-[#c26e55] font-bold">CIRCULAR MIRON GLASS</span>
          </div>
        </div>
      );

    // ------------------------------------------
    // BATCH 2 THUMBNAILS (11 - 20)
    // ------------------------------------------
    case 'scandinavian':
      return (
        <div className="w-full h-full bg-[#faf8f5] text-[#2b2622] p-5 flex flex-col justify-between font-sans border-b border-[#e8e4dc]">
          <div className="flex justify-between items-baseline text-[10px] font-mono text-[#695444]">
            <span className="font-bold">NORDISK FORMA</span>
            <span>COPENHAGEN 1958</span>
          </div>
          <div className="text-center py-1">
            <div className="text-sm font-semibold text-[#2b2622]">
              The Astrid Lounge Chair
            </div>
            <div className="text-[10px] text-[#8c735d] font-mono mt-0.5">Solid White Oak & Gotland Sheepskin</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#695444] pt-1 border-t border-[#e8e4dc]">
            <span className="text-[#c49a6c] font-bold">WARM OAK & BOUCLÉ</span>
            <span>HYGGE LIGHTING MODE</span>
          </div>
        </div>
      );

    case 'japanese-minimalism':
      return (
        <div className="w-full h-full bg-[#f9f7f2] text-[#1a1918] p-5 flex flex-col justify-between font-editorial border-b border-[#e5dfd5]">
          <div className="flex justify-between items-baseline text-[10px] font-mono text-[#636058]">
            <span className="font-bold">KISA 喫茶</span>
            <span>HIGASHIYAMA · KYOTO</span>
          </div>
          <div className="text-center py-1">
            <div className="text-base font-serif italic text-[#1a1918]">
              Ma (間) · Meaningful Space
            </div>
            <div className="text-[10px] text-[#736e63] font-mono mt-0.5">Black Raku Chawan & Hōhin Teaware</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#636058] pt-1 border-t border-[#e5dfd5]">
            <span>WASHI PAPER & STONE</span>
            <span className="font-bold text-[#1a1918]">GYOKURO CONTEMPLATION</span>
          </div>
        </div>
      );

    case 'bauhaus':
      return (
        <div className="w-full h-full bg-[#f8f9fa] text-black p-5 flex flex-col justify-between font-grotesk border-b-4 border-black relative">
          <div className="flex justify-between items-center text-[10px] font-black uppercase bg-[#003049] text-white px-2 py-0.5">
            <span>STAATLICHES BAUHAUS</span>
            <span className="text-[#fcbf49]">DESSAU // 1925</span>
          </div>
          <div className="flex items-center justify-around py-1">
            <div className="w-7 h-7 rounded-full bg-[#d62828] border border-black shadow-sm" title="Circle" />
            <div className="w-7 h-7 bg-[#003049] border border-black shadow-sm" title="Square" />
            <div className="w-0 h-0 border-l-[14px] border-l-transparent border-r-[14px] border-r-transparent border-b-[24px] border-b-[#fcbf49]" title="Triangle" />
          </div>
          <div className="flex justify-between text-[9px] font-black uppercase pt-1 border-t-2 border-black">
            <span className="text-[#d62828]">PRIMARY RED & BLUE</span>
            <span className="bg-[#fcbf49] text-black px-1">VORKURS 1919</span>
          </div>
        </div>
      );

    case 'art-deco':
      return (
        <div className="w-full h-full bg-[#08090c] text-[#f7f4ea] p-5 flex flex-col justify-between font-serif-luxury border-b border-[#d4af37]/40 relative">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#d4af37] uppercase tracking-widest">
            <span>THE MAJESTIC</span>
            <span>NYC 1928</span>
          </div>
          <div className="text-center py-1">
            <div className="text-base text-white uppercase tracking-[0.2em] font-black">
              L'Art Déco Salon
            </div>
            <div className="text-[10px] text-[#d4af37] font-mono mt-0.5">Chrysler Penthouse & Palm Court</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#a38b3b] pt-1 border-t border-[#d4af37]/30">
            <span>GILDED BRASS & IVORY</span>
            <span className="text-[#d4af37] font-bold">BUTLER CONCIERGE</span>
          </div>
        </div>
      );

    case 'retro-futurism':
      return (
        <div className="w-full h-full bg-[#faf5eb] text-[#121c2b] p-5 flex flex-col justify-between font-grotesk border-b-2 border-[#121c2b]">
          <div className="flex justify-between items-center text-[10px] font-mono text-[#1a7578] font-bold">
            <span className="text-[#ff5a1f]">SOLARIS AERO-ASTRONOMICS</span>
            <span>EST. 1968</span>
          </div>
          <div className="text-center py-1">
            <div className="text-sm font-black uppercase text-[#121c2b]">
              Orion-VII Interplanetary Shuttle
            </div>
            <div className="text-[10px] text-[#ff5a1f] font-mono mt-0.5">Vanguard Orbital Ring Habitat</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#1a7578] pt-1 border-t border-[#121c2b]/20">
            <span className="text-[#ff5a1f] font-bold">ATOMIC TEAL & ORANGE</span>
            <span>LUNAR MANIFEST '68</span>
          </div>
        </div>
      );

    case 'contemporary-art':
      return (
        <div className="w-full h-full bg-[#f7f6f2] text-[#181816] p-5 flex flex-col justify-between font-editorial border-b border-[#dfded7]">
          <div className="flex justify-between items-baseline text-[10px] font-mono text-[#61605a]">
            <span className="font-bold">KUNSTHALLE VAKUUM</span>
            <span>BERLIN-KREUZBERG</span>
          </div>
          <div className="text-center py-1">
            <div className="text-base font-light italic text-black">
              Elena Voronova: "Resonance"
            </div>
            <div className="text-[10px] text-[#61605a] font-mono mt-0.5">German Slate & Raw Beeswax on Linen</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#61605a] pt-1 border-t border-[#dfded7]">
            <span>TITANIUM & SLATE</span>
            <span className="font-bold text-black">ATMOSPHERE SWITCHER</span>
          </div>
        </div>
      );

    case 'bento-grid':
      return (
        <div className="w-full h-full bg-[#090d16] text-[#f1f5f9] p-5 flex flex-col justify-between font-sans border-b border-[#1e293b]">
          <div className="flex justify-between items-center text-[10px] text-cyan-400 font-mono">
            <span className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              KRONOS OS // v2.6
            </span>
            <span className="text-slate-400">BENTO MATRIX</span>
          </div>
          <div className="grid grid-cols-2 gap-1.5 my-1">
            <div className="p-1.5 bg-[#0e1424] border border-[#1e293b] rounded text-center">
              <div className="text-[10px] font-mono text-cyan-400 font-bold">25:00</div>
              <div className="text-[8px] text-slate-400">Focus Block</div>
            </div>
            <div className="p-1.5 bg-[#0e1424] border border-[#1e293b] rounded text-center">
              <div className="text-[10px] font-mono text-emerald-400 font-bold">+38%</div>
              <div className="text-[8px] text-slate-400">Velocity</div>
            </div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-slate-500">
            <span>LOCAL SQLITE & CRDT</span>
            <span className="text-cyan-400 font-bold">ASYMMETRIC MESH</span>
          </div>
        </div>
      );

    case 'asymmetrical':
      return (
        <div className="w-full h-full bg-[#141517] text-[#e6e4df] p-5 flex flex-col justify-between font-grotesk border-b border-[#292a2e]">
          <div className="flex justify-between items-baseline text-[10px] font-mono text-[#888]">
            <span className="font-bold text-white">AXIS & VOID</span>
            <span className="text-[#c96245]">ZÜRICH · TOKYO</span>
          </div>
          <div className="text-left py-1 pl-2 border-l-2 border-[#c96245]">
            <div className="text-xs font-black uppercase text-white leading-tight">
              Gravitational Cantilever
            </div>
            <div className="text-[9px] text-[#aaa] font-mono mt-0.5">-4.20M Bedrock Anchor // 22M Prow</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#777] pt-1 border-t border-[#292a2e]">
            <span className="text-[#c96245] font-bold">BURNT SIENNA & BASALT</span>
            <span>UNBALANCED MASS</span>
          </div>
        </div>
      );

    case 'swiss-grid':
      return (
        <div className="w-full h-full bg-[#fafaf9] text-[#111215] p-5 flex flex-col justify-between font-mono border-b-2 border-black">
          <div className="flex justify-between items-baseline text-[10px] font-bold border-b border-black pb-1">
            <span className="text-black">IMV BASEL</span>
            <span className="text-[#e63946]">CH-4051 // 12-COL</span>
          </div>
          <div className="text-center py-1 font-sans">
            <div className="text-xs font-bold text-black uppercase">
              Calabi-Yau Variety Topology
            </div>
            <div className="text-[9px] text-[#e63946] font-mono mt-0.5">DIM(V)=6 // Symplectic Flow</div>
          </div>
          <div className="flex justify-between text-[9px] font-bold uppercase pt-1 border-t border-black/20">
            <span className="text-[#e63946]">SWISS CRIMSON</span>
            <span className="text-black">12-COL GUIDE OVERLAY</span>
          </div>
        </div>
      );

    case 'broken-grid':
      return (
        <div className="w-full h-full bg-[#070709] text-white p-5 flex flex-col justify-between font-grotesk border-b-2 border-[#ccff00] relative overflow-hidden">
          <div className="flex justify-between items-center text-[10px] font-mono font-bold">
            <span className="bg-[#ccff00] text-black px-1.5 py-0.5 transform -rotate-2">
              DEVIANT LAB
            </span>
            <span className="text-[#a855f7]">EXP. 008</span>
          </div>
          <div className="text-center py-1 transform rotate-1">
            <div className="text-sm font-black uppercase text-white leading-tight">
              BREAK THE GRID //
            </div>
            <div className="text-[10px] text-[#ccff00] font-mono mt-0.5">120 FPS GLSL Raymarching</div>
          </div>
          <div className="flex justify-between text-[9px] font-mono text-[#888]">
            <span className="text-[#ccff00] font-bold">ACID VOLT & VIOLET</span>
            <span>CHAOS FACTOR SLIDER</span>
          </div>
        </div>
      );

    // ------------------------------------------
    // BATCH 3 THUMBNAILS (21 - 28): IMMERSIVE MOTION
    // ------------------------------------------
    case 'horizontal-scroll':
      return (
        <div className="w-full h-full bg-[#07080b] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#00f0ff]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-[#00f0ff] font-bold">AURA // MONOLITH</span>
            <span>HORIZONTAL AXIS</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Horizontal Filmstrip Traverse
            </div>
            <div className="text-[9px] text-[#00f0ff] mt-0.5">Passive Wheel-to-Horizontal Motion</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-[#00f0ff]">CYAN & OBSIDIAN</span>
            <span>6-PANEL MONOGRAPH</span>
          </div>
        </div>
      );

    case 'scrollytelling':
      return (
        <div className="w-full h-full bg-[#050609] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-purple-500">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-cyan-400 font-bold">CHRONOS QUANTUM</span>
            <span>PINNED SCENE</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              5-Phase Quantum Metamorphosis
            </div>
            <div className="text-[9px] text-purple-400 mt-0.5">Singularity &rarr; Global Synthesis Mesh</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-purple-400">CYAN & PURPLE</span>
            <span>BI-DIRECTIONAL STEPPER</span>
          </div>
        </div>
      );

    case 'motion-first':
      return (
        <div className="w-full h-full bg-[#07080c] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#ff0055]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-[#ff0055] font-bold">VOLT &amp; FLUX</span>
            <span>CHOREOGRAPHY</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Movement Defines Identity
            </div>
            <div className="text-[9px] text-[#ff0055] mt-0.5">Magnetic Spring Physics &amp; Easing Studio</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-[#ff0055]">HYPER CRIMSON</span>
            <span>SPRING EASING DIALS</span>
          </div>
        </div>
      );

    case 'immersive-3d':
      return (
        <div className="w-full h-full bg-[#06070a] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#00f0ff]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-cyan-400 font-bold">SOLARIA 3D</span>
            <span>GENUINE WEBGL</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Procedural Spatial Sculptures
            </div>
            <div className="text-[9px] text-cyan-300 mt-0.5">Three.js ACES Filmic PBR Orbit</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-cyan-400">LIQUID CHROME</span>
            <span>TOPOLOGICAL GYRO</span>
          </div>
        </div>
      );

    case 'parallax':
      return (
        <div className="w-full h-full bg-[#05070a] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-emerald-400">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-emerald-400 font-bold">AETHELGARD FJORD</span>
            <span>2.5D DEPTH</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Multi-Plane Volcanic Parallax
            </div>
            <div className="text-[9px] text-emerald-300 mt-0.5">5 Depth Layers &middot; Aurora &amp; Basalt Spires</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-emerald-400">AURORA EMERALD</span>
            <span>MOUSE PARALLAX SHIFT</span>
          </div>
        </div>
      );

    case 'infinite-motion':
      return (
        <div className="w-full h-full bg-[#07080c] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#00ff66]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-[#00ff66] font-bold">NEO-CADENCE</span>
            <span>PERPETUAL RHYTHM</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Continuous Motion Tapes
            </div>
            <div className="text-[9px] text-[#00ff66] mt-0.5">Interlocking Multi-Speed Marquees</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-[#00ff66]">PHOSPHOR GREEN</span>
            <span>DIRECTION INVERTER</span>
          </div>
        </div>
      );

    case 'kinetic-typography':
      return (
        <div className="w-full h-full bg-[#07080b] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#ccff00]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-[#ccff00] font-bold">TYPE-LAB</span>
            <span>VARIABLE TYPE</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Radical Kinetic Letterforms
            </div>
            <div className="text-[9px] text-[#ccff00] mt-0.5">Weight, Slant &amp; Scatter Calibration</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-[#ccff00]">ACID CITRON</span>
            <span>RADIAL SVG CIRCLE PATH</span>
          </div>
        </div>
      );

    case 'experimental':
      return (
        <div className="w-full h-full bg-[#060608] text-white p-5 flex flex-col justify-between font-mono border-b-2 border-[#00f0ff]">
          <div className="flex justify-between items-baseline text-[10px] text-slate-400">
            <span className="text-cyan-400 font-bold">NEXUS STUDIO</span>
            <span>ORGANIC METABALL</span>
          </div>
          <div className="text-center py-1">
            <div className="text-xs font-black uppercase text-white font-unbounded">
              Shapeshifting Interactions
            </div>
            <div className="text-[9px] text-cyan-300 mt-0.5">Liquid Splines &middot; Secret Node Discovery</div>
          </div>
          <div className="flex justify-between text-[9px] text-slate-400 border-t border-white/10 pt-1">
            <span className="text-cyan-400">CYAN &amp; PINK</span>
            <span>POLYGONAL CLIP-PATHS</span>
          </div>
        </div>
      );

    default:
      return (
        <div className="w-full h-full bg-slate-900 p-4 flex items-center justify-center text-xs text-slate-400">
          Style Thumbnail
        </div>
      );
  }
}

export function WebsitesGallery({ onSelectWebsite }: WebsitesGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBatchFilter, setSelectedBatchFilter] = useState<'all' | '1' | '2' | '3'>('all');
  const [selectedStyleFilter, setSelectedStyleFilter] = useState('all');
  const [viewLayout, setViewLayout] = useState<'grid' | 'list'>('grid');

  const filteredWebsites = useMemo(() => {
    return websitesRegistry.filter((w) => {
      const matchesBatch =
        selectedBatchFilter === 'all' ||
        (selectedBatchFilter === '1' && w.batch === 1) ||
        (selectedBatchFilter === '2' && w.batch === 2) ||
        (selectedBatchFilter === '3' && w.batch === 3);

      const matchesStyle = selectedStyleFilter === 'all' || w.style === selectedStyleFilter;

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        w.name.toLowerCase().includes(q) ||
        w.styleLabel.toLowerCase().includes(q) ||
        w.concept.toLowerCase().includes(q) ||
        w.description.toLowerCase().includes(q) ||
        w.typography.toLowerCase().includes(q) ||
        w.keyFeatures.some((f) => f.toLowerCase().includes(q));

      return matchesBatch && matchesStyle && matchesSearch;
    });
  }, [searchQuery, selectedBatchFilter, selectedStyleFilter]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Editorial Hero Header */}
      <div className="relative rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>28 Unique Design Philosophies · Independent Codebases</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span>28 Distinct Styles</span>
              <span className="text-zinc-700">·</span>
              <span>100% Production Ready</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-grotesk">
              28 Distinct Web Design Movements
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
              A comprehensive exploration of aesthetic philosophy and visual craft. Every website features its own bespoke typographic rhythm, custom color tokens, layout hierarchy, and responsive micro-interactions.
            </p>
          </div>

          {/* Batch Selector & View Toggle Bar */}
          <div className="pt-6 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
            {/* Batch Selector Segmented Pills */}
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
              <button
                onClick={() => {
                  setSelectedBatchFilter('all');
                  setSelectedStyleFilter('all');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedBatchFilter === 'all'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                All Styles ({websitesRegistry.length})
              </button>
              <button
                onClick={() => {
                  setSelectedBatchFilter('1');
                  setSelectedStyleFilter('all');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedBatchFilter === '1'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Batch 1 · Core Modern (1–10)
              </button>
              <button
                onClick={() => {
                  setSelectedBatchFilter('2');
                  setSelectedStyleFilter('all');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedBatchFilter === '2'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Batch 2 · Historical & Structural (11–20)
              </button>
              <button
                onClick={() => {
                  setSelectedBatchFilter('3');
                  setSelectedStyleFilter('all');
                }}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                  selectedBatchFilter === '3'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                Batch 3 · Motion & Spatial (21–28)
              </button>
            </div>

            <div className="inline-flex items-center gap-1 p-1 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
              <button
                onClick={() => setViewLayout('grid')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewLayout === 'grid' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
                title="Grid View"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewLayout('list')}
                className={`p-2 rounded-lg transition-colors cursor-pointer ${
                  viewLayout === 'list' ? 'bg-white text-zinc-950 shadow-sm' : 'text-zinc-400 hover:text-white'
                }`}
                title="List View"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-4 sm:p-5 space-y-4">
        <div className="relative">
          <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search by style (Scandinavian, Bauhaus, Bento, Swiss...), typography, or concept..."
            className="w-full bg-zinc-950/80 border border-white/[0.08] rounded-xl pl-10 pr-16 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/25 transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer px-2 py-1 rounded bg-zinc-800"
            >
              Clear
            </button>
          )}
        </div>

        {/* Style Filter Chips Strip */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs no-scrollbar">
          <span className="text-[11px] font-medium text-zinc-500 uppercase tracking-wider shrink-0 mr-1">Style:</span>
          <button
            onClick={() => setSelectedStyleFilter('all')}
            className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium transition-all cursor-pointer shrink-0 ${
              selectedStyleFilter === 'all'
                ? 'bg-zinc-100 text-zinc-950 font-semibold'
                : 'bg-zinc-950/80 text-zinc-400 hover:text-white border border-white/[0.08]'
            }`}
          >
            All Shown ({filteredWebsites.length})
          </button>
          {websitesRegistry
            .filter((w) => selectedBatchFilter === 'all' || (selectedBatchFilter === '1' && w.batch === 1) || (selectedBatchFilter === '2' && w.batch === 2) || (selectedBatchFilter === '3' && w.batch === 3))
            .map((w) => (
              <button
                key={w.id}
                onClick={() => setSelectedStyleFilter(w.style)}
                className={`px-3 py-1.5 rounded-lg whitespace-nowrap text-xs font-medium transition-all cursor-pointer shrink-0 ${
                  selectedStyleFilter === w.style
                    ? 'bg-zinc-100 text-zinc-950 font-semibold'
                    : 'bg-zinc-950/80 text-zinc-400 hover:text-white border border-white/[0.08]'
                }`}
              >
                #{w.number} {w.styleLabel}
              </button>
            ))}
        </div>
      </div>

      {/* Main Grid View */}
      {viewLayout === 'grid' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredWebsites.map((website) => (
            <div
              key={website.id}
              onClick={() => onSelectWebsite(website.id)}
              className="group rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col justify-between shadow-lg hover:shadow-2xl hover:-translate-y-1 cursor-pointer"
            >
              <div>
                {/* 16:10 Aspect Frame with Live Top-Down Video Scroll on Hover */}
                <div className="aspect-[16/10] relative overflow-hidden bg-zinc-950 border-b border-white/[0.08]">
                  <HoverVideoScrollPreview
                    component={website.component}
                    thumbnail={<WebsiteThumbnail website={website} />}
                    title={website.name}
                    accentColor={website.palette?.[1]?.hex || '#00f0ff'}
                  />
                  <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-zinc-950/80 backdrop-blur-md border border-white/[0.1] text-[10px] font-mono text-zinc-300 flex items-center gap-1.5 z-20 pointer-events-none">
                    <span>SITE #{website.number}</span>
                    <span className="text-zinc-600">·</span>
                    <span className="text-zinc-400">BATCH {website.batch}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 space-y-3.5">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-zinc-300 font-medium">
                      {website.styleLabel}
                    </span>
                    <span className="text-zinc-500 font-mono text-[11px]">{website.route}</span>
                  </div>

                  <h3 className="font-bold text-lg text-white group-hover:text-cyan-400 transition-colors leading-snug">
                    {website.name}
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed line-clamp-2">
                    {website.concept}
                  </p>

                  {/* Palette Swatches */}
                  <div className="flex items-center gap-1.5 pt-2">
                    <span className="text-[11px] text-zinc-500 mr-1">Palette:</span>
                    <div className="flex items-center gap-1">
                      {website.palette.map((c, i) => (
                        <span
                          key={i}
                          className="w-3.5 h-3.5 rounded-full border border-white/20 transition-transform group-hover:scale-110"
                          style={{ backgroundColor: c.hex }}
                          title={`${c.name} (${c.hex})`}
                        />
                      ))}
                    </div>
                    <span className="text-zinc-500 text-xs ml-auto font-mono truncate max-w-[130px]" title={website.typography}>
                      {website.typography}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Actions */}
              <div className="px-6 py-4 border-t border-white/[0.06] bg-zinc-950/40 flex items-center justify-between text-xs">
                <span className="text-[11px] text-zinc-500 font-medium">
                  {website.keyFeatures.length} Key Features
                </span>

                <span className="inline-flex items-center gap-1.5 font-medium text-zinc-300 group-hover:text-white transition-colors">
                  <span>Open Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-white transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* List Layout View */}
      {viewLayout === 'list' && (
        <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] overflow-hidden shadow-2xl backdrop-blur-xl">
          <table className="w-full text-left border-collapse text-xs">
            <thead>
              <tr className="border-b border-white/[0.08] bg-zinc-950/60 text-zinc-400 font-medium">
                <th className="p-4">#</th>
                <th className="p-4">Batch</th>
                <th className="p-4">Design Style</th>
                <th className="p-4">Website Concept & Title</th>
                <th className="p-4">Typography Stack</th>
                <th className="p-4">Route</th>
                <th className="p-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {filteredWebsites.map((w) => (
                <tr
                  key={w.id}
                  onClick={() => onSelectWebsite(w.id)}
                  className="hover:bg-white/[0.03] transition-colors cursor-pointer text-zinc-300"
                >
                  <td className="p-4 font-mono font-bold text-cyan-400">#{w.number}</td>
                  <td className="p-4">
                    <span className="px-2.5 py-1 rounded-full text-[11px] bg-white/[0.06] border border-white/[0.08] text-zinc-300">
                      Batch {w.batch}
                    </span>
                  </td>
                  <td className="p-4 font-semibold text-white">{w.styleLabel}</td>
                  <td className="p-4">
                    <div className="text-white font-medium">{w.name}</div>
                    <div className="text-zinc-400 text-[11px] leading-relaxed mt-0.5">{w.concept}</div>
                  </td>
                  <td className="p-4 text-zinc-400 font-mono">{w.typography}</td>
                  <td className="p-4 font-mono text-zinc-500">{w.route}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectWebsite(w.id);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-white text-zinc-950 font-semibold text-xs hover:bg-zinc-200 transition-colors cursor-pointer"
                    >
                      Open
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
