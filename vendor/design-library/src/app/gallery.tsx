import React, { useState, useEffect, useMemo } from 'react';
import {
  templatesRegistry,
  templateCategories,
  templateStyles,
  type TemplateMetadata,
} from '@/data/templates-registry';
import { HoverVideoScrollPreview } from '@/components/preview/HoverVideoScrollPreview';
import {
  Search,
  Sparkles,
  Heart,
  Eye,
  Copy,
  Check,
  Layers,
  ArrowUpDown,
  BookOpen,
  LayoutGrid,
  List,
  ArrowRight,
  Terminal,
  Activity,
  Cpu,
  Compass,
  Zap,
} from 'lucide-react';

interface GalleryProps {
  onSelectTemplate: (id: string) => void;
  onOpenComponents: () => void;
  onOpenDocs: () => void;
}

/**
 * Editorial, high-craft thumbnail artwork for each master template.
 * Displayed in the resting state before hover triggers the live video scroll.
 */
function TemplateThumbnailPreview({ template }: { template: TemplateMetadata }) {
  const accent = template.accentColor || '#06b6d4';

  switch (template.id) {
    // 1. Cognitive Studio Latent Space
    case 'ai-neural-canvas':
      return (
        <div className="w-full h-full bg-[#07090e] p-5 flex flex-col justify-between font-grotesk relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />
          <div className="flex items-center justify-between text-xs text-cyan-400">
            <span className="flex items-center gap-2 font-mono text-[11px] tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              LATENT VECTOR SPACE
            </span>
            <span className="font-mono text-zinc-500 text-[10px]">T: 0.72</span>
          </div>
          <div className="flex items-center justify-center gap-2 my-auto">
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-300 text-[10px] font-mono">Tokenizer</span>
            <span className="text-cyan-500 text-xs">→</span>
            <span className="px-2.5 py-1 rounded bg-cyan-500/20 text-cyan-300 font-semibold text-xs border border-cyan-500/40 shadow-[0_0_12px_rgba(6,182,212,0.2)] font-mono">QKV Attention</span>
            <span className="text-cyan-500 text-xs">→</span>
            <span className="px-2 py-1 rounded bg-zinc-900 border border-white/[0.08] text-zinc-300 text-[10px] font-mono">Softmax</span>
          </div>
          <div className="flex justify-between items-center text-[11px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>DeepSeek-R1 Engine</span>
            <span className="text-cyan-400 font-medium">142 tokens/sec</span>
          </div>
        </div>
      );

    // 2. NexusAgent Fleet
    case 'ai-agent-flow':
      return (
        <div className="w-full h-full bg-[#07110c] p-5 flex flex-col justify-between font-mono relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-emerald-400">
            <span className="flex items-center gap-1.5 tracking-wider text-[11px]">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              FLEET TELEMETRY HUD
            </span>
            <span className="text-emerald-500 text-[10px]">MET 18:42:01</span>
          </div>
          <div className="grid grid-cols-2 gap-2 my-auto text-[10px]">
            <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center justify-between">
              <span>AGENT-ALPHA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </div>
            <div className="p-2 rounded bg-emerald-950/40 border border-emerald-800/40 text-emerald-300 flex items-center justify-between">
              <span>AGENT-BETA</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/50" />
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-emerald-500/80 pt-2 border-t border-emerald-900/30">
            <span>MEM PRESSURE: 42%</span>
            <span className="text-emerald-400 font-semibold">ALL SYSTEMS NOMINAL</span>
          </div>
        </div>
      );

    // 3. HyperTerm DEC VT-220 CLI
    case 'dev-terminal-hub':
      return (
        <div className="w-full h-full bg-[#0d0903] p-5 flex flex-col justify-between font-mono relative overflow-hidden border-b border-amber-900/20">
          <div className="flex items-center justify-between text-xs text-amber-400">
            <span className="text-[11px] font-bold">VT-220 [AMBER P3]</span>
            <span className="text-amber-600 text-[10px]">9600 BAUD</span>
          </div>
          <div className="text-xs text-amber-300 space-y-1 my-auto">
            <div className="text-zinc-500">&gt; hyperterm cluster status</div>
            <div className="text-amber-400 flex items-center gap-1.5 font-bold">
              <span>[OK] 12 Edge Nodes Active</span>
              <span className="w-1.5 h-3.5 bg-amber-400 animate-pulse" />
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-amber-600 pt-2 border-t border-amber-900/30">
            <span>PHOSPHOR: PERSISTENT</span>
            <span className="text-amber-400">LATENCY: 0.8ms</span>
          </div>
        </div>
      );

    // 4. AetherMesh Swiss Cloud
    case 'dev-cloud-mesh':
      return (
        <div className="w-full h-full bg-[#0a0c14] p-5 flex flex-col justify-between font-grotesk relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-blue-400">
            <span className="font-bold tracking-tight">AETHER MESH // SWISS EDGE</span>
            <span className="font-mono text-zinc-500 text-[10px]">GENEVA POP</span>
          </div>
          <div className="my-auto text-center space-y-1">
            <div className="text-2xl font-bold tracking-tighter text-white">0.42ms</div>
            <div className="text-xs text-zinc-400 font-mono">GLOBAL MEAN TIME-TO-FIRST-BYTE</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>12-COLUMN MODULAR</span>
            <span className="text-blue-400 font-medium">BGP ANYCAST ROUTED</span>
          </div>
        </div>
      );

    // 5. Lumina Academy
    case 'edu-lumina-academy':
      return (
        <div className="w-full h-full bg-[#0a0717] p-5 flex flex-col justify-between font-sans relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-purple-300">
            <span className="font-semibold text-xs tracking-wide">LUMINA MASTERCLASS</span>
            <span className="text-[10px] font-mono text-purple-400 bg-purple-950/60 px-2 py-0.5 rounded border border-purple-800/40">STAGE 04</span>
          </div>
          <div className="my-auto space-y-1">
            <div className="text-base font-bold text-white tracking-tight">Distributed Graph Systems</div>
            <div className="text-xs text-zinc-400">Interactive Curriculum & Verified Code Sandbox</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>18 MODULES</span>
            <span className="text-purple-300 font-medium">4,280 FELLOWS</span>
          </div>
        </div>
      );

    // 6. CyberForge '26 Neo-Brutalist
    case 'hack-cyber-forge':
      return (
        <div className="w-full h-full bg-[#ccff00] p-5 flex flex-col justify-between font-brutal text-black relative overflow-hidden">
          <div className="flex items-center justify-between text-xs font-black">
            <span className="bg-black text-[#ccff00] px-2 py-0.5 uppercase tracking-wider">CYBERFORGE '26</span>
            <span className="bg-[#ff0077] text-white px-2 py-0.5 shadow-[2px_2px_0_#000]">$80,000 PRIZE</span>
          </div>
          <div className="my-auto space-y-1">
            <div className="text-xl font-black uppercase tracking-tight leading-none">BUILD RAW CODE</div>
            <div className="text-xs font-bold text-zinc-800">48-Hour Worldwide Student Sprint</div>
          </div>
          <div className="flex justify-between text-[10px] font-black uppercase pt-2 border-t-2 border-black">
            <span>NEO-BRUTALIST VOLT</span>
            <span className="bg-black text-white px-1.5 py-0.2">SOLID SHADOWS</span>
          </div>
        </div>
      );

    // 7. VaultGuard Auth
    case 'auth-vault-guard':
      return (
        <div className="w-full h-full bg-[#060912] p-5 flex flex-col justify-between font-sans relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-cyan-400">
            <span className="font-mono text-[11px] font-medium tracking-wider">VAULTGUARD // 2FA</span>
            <span className="font-mono text-zinc-500 text-[10px]">ED25519</span>
          </div>
          <div className="my-auto space-y-2">
            <div className="flex justify-center gap-1.5">
              {[4, 8, 9, 2, 7, 1].map((n, i) => (
                <div key={i} className="w-7 h-8 rounded bg-zinc-900 border border-cyan-500/30 flex items-center justify-center font-mono text-sm text-cyan-300 font-bold">
                  {n}
                </div>
              ))}
            </div>
            <div className="text-center text-[10px] text-zinc-400 font-mono">CRYPTOGRAPHIC PIN ADVANCE</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>FROSTED GLASS</span>
            <span className="text-cyan-400 font-medium">PASSKEY SECURE</span>
          </div>
        </div>
      );

    // 8. BentoCraft Kai Takahashi
    case 'portfolio-bento-craft':
      return (
        <div className="w-full h-full bg-[#090b10] p-4 flex flex-col justify-between font-sans relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-zinc-400">
            <span className="font-bold text-white">KAI TAKAHASHI</span>
            <span className="font-mono text-[10px] text-zinc-500">TOKYO · 23:40 JST</span>
          </div>
          <div className="grid grid-cols-3 gap-2 my-auto">
            <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-center">
              <span className="block text-sm font-bold text-white">08</span>
              <span className="text-[9px] text-zinc-500 font-mono">SYSTEMS</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-center">
              <span className="block text-sm font-bold text-cyan-400">14ms</span>
              <span className="text-[9px] text-zinc-500 font-mono">LATENCY</span>
            </div>
            <div className="p-2.5 rounded-lg bg-zinc-900/80 border border-white/[0.08] text-center">
              <span className="block text-sm font-bold text-white">NYC</span>
              <span className="text-[9px] text-zinc-500 font-mono">CLIENTS</span>
            </div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>MODULAR BENTO GRID</span>
            <span className="text-white font-medium">LIVE TIME ENGINE</span>
          </div>
        </div>
      );

    // 9. FinPulse Autonomous Treasury
    case 'saas-fin-pulse':
      return (
        <div className="w-full h-full bg-[#080d1a] p-5 flex flex-col justify-between font-sans relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-blue-400">
            <span className="font-bold text-xs tracking-tight">FINPULSE TREASURY</span>
            <span className="font-mono text-emerald-400 text-[10px]">+14.2% ARR</span>
          </div>
          <div className="my-auto space-y-1">
            <div className="text-2xl font-bold font-mono text-white tracking-tight">$42,810,400</div>
            <div className="text-xs text-zinc-400 font-mono">AUTONOMOUS CASH FLOW ALLOCATION</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>ENTERPRISE TRUST</span>
            <span className="text-blue-400 font-medium">SOC-2 TYPE II CERTIFIED</span>
          </div>
        </div>
      );

    // 10. Aura Atelier
    case 'ecommerce-aura-minimal':
      return (
        <div className="w-full h-full bg-[#0a0908] p-5 flex flex-col justify-between font-serif-luxury relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-amber-200/80">
            <span className="tracking-widest text-[11px] uppercase">AURA ATELIER</span>
            <span className="font-mono text-zinc-500 text-[10px]">PARIS · N° 04</span>
          </div>
          <div className="my-auto text-center space-y-1">
            <div className="text-xl italic text-white tracking-tight">The Cashmere Archive</div>
            <div className="text-xs font-sans text-zinc-400 font-light">Bespoke Couture & Rare Silks</div>
          </div>
          <div className="flex justify-between text-[10px] font-sans text-zinc-500 pt-2 border-t border-amber-900/30">
            <span className="font-mono">MINIMALIST LUXURY</span>
            <span className="text-amber-200 font-medium">LIMITED ALLOCATION</span>
          </div>
        </div>
      );

    // 21. Haute Horlogerie
    case 'luxury-haute-horlogerie':
      return (
        <div className="w-full h-full bg-[#090807] p-5 flex flex-col justify-between font-cinzel relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-amber-400">
            <span className="tracking-widest text-[11px]">ÆTHELGARD HORLOGERIE</span>
            <span className="font-mono text-zinc-500 text-[10px]">GENÈVE 1884</span>
          </div>
          <div className="my-auto text-center space-y-1">
            <div className="text-xl font-bold text-amber-200 tracking-wider">CALIBER 391-TOURBILLON</div>
            <div className="text-[11px] font-sans text-zinc-400">Oscillating Balance · Acoustic Escapement</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-amber-900/30">
            <span>SYNODIC MOONPHASE</span>
            <span className="text-amber-400">28,800 VPH</span>
          </div>
        </div>
      );

    // 22. Komorebi Sukiya
    case 'hosp-komorebi-pavilion':
      return (
        <div className="w-full h-full bg-[#0d0c0a] p-5 flex flex-col justify-between font-fraunces relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-amber-200/90">
            <span className="tracking-wide text-xs">KOMOREBI SUKIYA</span>
            <span className="font-mono text-zinc-500 text-[10px]">KYOTO HIGASHIYAMA</span>
          </div>
          <div className="my-auto text-center space-y-1">
            <div className="text-lg italic text-white font-light">"Shadows across Shoji paper."</div>
            <div className="text-xs font-sans text-zinc-400">Chiaroscuro Sun Dial & Water Basin</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>CHADO RITUAL</span>
            <span className="text-amber-200">MA (間) SPATIAL DESIGN</span>
          </div>
        </div>
      );

    // 23. Vektorform Synth
    case 'dev-vektorform-synth':
      return (
        <div className="w-full h-full bg-[#070b09] p-5 flex flex-col justify-between font-unbounded relative overflow-hidden">
          <div className="flex items-center justify-between text-xs text-[#00ff88]">
            <span className="text-[10px] tracking-tight font-black uppercase">VEKTORFORM MODULAR</span>
            <span className="font-mono text-zinc-500 text-[10px]">128 BPM</span>
          </div>
          <div className="my-auto space-y-1 text-center">
            <div className="text-sm font-bold text-white tracking-tight uppercase">Hardware Synthesis Lab</div>
            <div className="text-xs font-mono text-zinc-400">CRT Oscilloscope & 16-Step Sequencer</div>
          </div>
          <div className="flex justify-between text-[10px] font-mono text-zinc-500 pt-2 border-t border-emerald-900/30">
            <span className="text-[#00ff88]">WEB AUDIO API</span>
            <span>ANALOG PHOSPHOR</span>
          </div>
        </div>
      );

    // Default template card artwork
    default:
      return (
        <div
          className="w-full h-full p-5 flex flex-col justify-between relative overflow-hidden bg-zinc-950"
          style={{
            background: `radial-gradient(circle at 85% 15%, ${accent}15 0%, transparent 60%), #09090b`,
          }}
        >
          <div className="flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] font-semibold" style={{ color: accent }}>
              {template.categoryLabel.toUpperCase()}
            </span>
            <span className="font-mono text-zinc-500 text-[10px] uppercase">
              {template.supportedTheme} MODE
            </span>
          </div>
          <div className="my-auto space-y-1">
            <div className="text-lg font-bold text-white tracking-tight font-sans">
              {template.name}
            </div>
            <div className="text-xs text-zinc-400 line-clamp-1">
              {template.styleLabel}
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500 pt-2 border-t border-white/[0.06]">
            <span>{template.pageType}</span>
            <span className="font-medium text-white">{template.tags[0] || 'Interactive'}</span>
          </div>
        </div>
      );
  }
}

export function TemplateGallery({
  onSelectTemplate,
  onOpenComponents,
  onOpenDocs,
}: GalleryProps) {
  const [viewMode, setViewMode] = useState<'grid' | 'exhibition' | 'table'>('grid');
  const [featuredIndex, setFeaturedIndex] = useState(0);

  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStyle, setSelectedStyle] = useState('all');
  const [selectedTheme, setSelectedTheme] = useState<'all' | 'dark' | 'light'>('all');
  const [sortBy, setSortBy] = useState<'featured' | 'name' | 'category'>('featured');

  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('patchwork-design-library:agy_template_favorites');
      return saved
        ? JSON.parse(saved)
        : ['ai-neural-canvas', 'portfolio-bento-craft', 'hack-cyber-forge', 'saas-velocity-linear', 'auth-retrospective-os'];
    } catch {
      return ['ai-neural-canvas', 'portfolio-bento-craft', 'hack-cyber-forge', 'saas-velocity-linear', 'auth-retrospective-os'];
    }
  });

  const [copiedId, setCopiedId] = useState<string | null>(null);

  useEffect(() => {
    try {
      localStorage.setItem('patchwork-design-library:agy_template_favorites', JSON.stringify(favorites));
    } catch (e) {
      console.error(e);
    }
  }, [favorites]);

  const toggleFavorite = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleCopyPath = (template: TemplateMetadata, e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard?.writeText(template.sourcePath);
    setCopiedId(template.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const filteredTemplates = useMemo(() => {
    return templatesRegistry
      .filter((item) => {
        const matchesCategory =
          selectedCategory === 'all' || item.category === selectedCategory;
        const matchesStyle = selectedStyle === 'all' || item.style === selectedStyle;
        const matchesTheme =
          selectedTheme === 'all' ||
          item.supportedTheme === selectedTheme ||
          item.supportedTheme === 'dual';

        const q = searchQuery.toLowerCase().trim();
        const matchesSearch =
          !q ||
          item.name.toLowerCase().includes(q) ||
          item.description.toLowerCase().includes(q) ||
          item.categoryLabel.toLowerCase().includes(q) ||
          item.styleLabel.toLowerCase().includes(q) ||
          item.tags.some((t) => t.toLowerCase().includes(q));

        return matchesCategory && matchesStyle && matchesTheme && matchesSearch;
      })
      .sort((a, b) => {
        if (sortBy === 'name') return a.name.localeCompare(b.name);
        if (sortBy === 'category') return a.categoryLabel.localeCompare(b.categoryLabel);
        return 0;
      });
  }, [searchQuery, selectedCategory, selectedStyle, selectedTheme, sortBy]);

  const currentFeatured = filteredTemplates[featuredIndex] || templatesRegistry[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      {/* Editorial Header Hero */}
      <div className="relative rounded-3xl bg-gradient-to-b from-zinc-900/70 to-zinc-950 border border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-2xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/[0.04] text-cyan-400 text-xs font-mono border border-white/[0.08]">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>COLLECTION ARCHIVE · 25 PRODUCTION TEMPLATES</span>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
              <span>ZERO AI BUZZWORDS</span>
              <span className="text-zinc-600">·</span>
              <span>18 MOVEMENTS</span>
              <span className="text-zinc-600">·</span>
              <span className="text-emerald-400 font-medium">100% PRODUCTION READY</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-bold text-white tracking-tight leading-tight font-sans">
              Website Design Template Library
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
              An archive of self-contained web templates spanning 18 distinct design movements—from Swiss minimalism
              and brutalist manifestos to precision telemetry dashboards and haute horlogerie. Hover over any specimen to experience the live animated scroll preview.
            </p>
          </div>

          <div className="pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-white/[0.06]">
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenComponents}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-xs transition-colors flex items-center gap-2 cursor-pointer border border-white/[0.08]"
              >
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>UI Components</span>
              </button>
              <button
                onClick={onOpenDocs}
                className="px-4 py-2 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-medium text-xs transition-colors flex items-center gap-2 cursor-pointer border border-white/[0.08]"
              >
                <BookOpen className="w-3.5 h-3.5 text-purple-400" />
                <span>Architecture & Extraction</span>
              </button>
            </div>

            <div className="flex items-center gap-1 bg-zinc-900/80 p-1 rounded-xl border border-white/[0.08] text-xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <LayoutGrid className="w-3.5 h-3.5" />
                <span>Catalog</span>
              </button>
              <button
                onClick={() => setViewMode('exhibition')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'exhibition'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Spotlight</span>
              </button>
              <button
                onClick={() => setViewMode('table')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  viewMode === 'table'
                    ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>Registry</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Spotlight Perspective View */}
      {viewMode === 'exhibition' && currentFeatured && (
        <div className="bg-zinc-900/60 border border-white/[0.08] rounded-3xl p-6 sm:p-10 space-y-6 shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-white/[0.08]">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest block font-medium">
                CURATED SPOTLIGHT
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                {currentFeatured.name}
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono text-zinc-400">
                Specimen {featuredIndex + 1} of {filteredTemplates.length}
              </span>
              <div className="flex items-center gap-1 bg-zinc-950 p-1 rounded-xl border border-white/[0.08]">
                <button
                  onClick={() => setFeaturedIndex((prev) => (prev > 0 ? prev - 1 : filteredTemplates.length - 1))}
                  className="px-3 py-1 rounded text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  ← Prev
                </button>
                <button
                  onClick={() => setFeaturedIndex((prev) => (prev < filteredTemplates.length - 1 ? prev + 1 : 0))}
                  className="px-3 py-1 rounded text-xs font-mono text-zinc-300 hover:text-white hover:bg-zinc-800 transition-colors"
                >
                  Next →
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-white/[0.1] shadow-2xl h-80 sm:h-96 relative">
              <HoverVideoScrollPreview
                component={currentFeatured.component}
                thumbnail={<TemplateThumbnailPreview template={currentFeatured} />}
                title={currentFeatured.name}
                accentColor={currentFeatured.accentColor}
                isExhibition={true}
              />
            </div>

            <div className="lg:col-span-5 space-y-6 text-sm">
              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  MOVEMENT & PHILOSOPHY
                </span>
                <div className="inline-block px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 font-mono text-xs font-medium">
                  {currentFeatured.styleLabel}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed pt-1">
                  {currentFeatured.description}
                </p>
              </div>

              <div className="space-y-2">
                <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider block">
                  INTERACTIVE FEATURES
                </span>
                <ul className="space-y-2 text-xs text-zinc-300">
                  {currentFeatured.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-cyan-400 font-bold">›</span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-white/[0.08] flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5">
                  {currentFeatured.tags.map((t) => (
                    <span key={t} className="px-2.5 py-0.5 rounded bg-white/[0.04] text-[11px] font-mono text-zinc-400 border border-white/[0.06]">
                      {t}
                    </span>
                  ))}
                </div>
                <button
                  onClick={() => onSelectTemplate(currentFeatured.id)}
                  className="px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-zinc-950 font-bold text-xs transition-transform hover:scale-105 cursor-pointer flex items-center gap-2 shadow-lg shadow-cyan-500/20"
                >
                  <Eye className="w-4 h-4" />
                  <span>Launch Live Environment</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Unified Search & Filters Deck */}
      <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl p-5 sm:p-6 space-y-5">
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <div className="relative flex-1 w-full">
            <Search className="w-4 h-4 text-zinc-500 absolute left-3.5 top-3.5 pointer-events-none" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by template name, movement, typography, tags..."
              className="w-full bg-zinc-950 border border-white/[0.08] rounded-xl pl-10 pr-4 py-2.5 text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-cyan-500 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-3 text-xs text-zinc-500 hover:text-white cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 bg-zinc-950 border border-white/[0.08] px-3 py-2 rounded-xl">
              <ArrowUpDown className="w-3.5 h-3.5 text-zinc-500" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-transparent text-zinc-300 focus:outline-none cursor-pointer"
              >
                <option value="featured" className="bg-zinc-900">Sort: Curated</option>
                <option value="name" className="bg-zinc-900">Sort: Name</option>
                <option value="category" className="bg-zinc-900">Sort: Category</option>
              </select>
            </div>

            <div className="flex items-center gap-1 bg-zinc-950 border border-white/[0.08] p-1 rounded-xl text-xs">
              <button
                onClick={() => setSelectedTheme('all')}
                className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                  selectedTheme === 'all' ? 'bg-white/[0.12] text-white font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                All
              </button>
              <button
                onClick={() => setSelectedTheme('dark')}
                className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                  selectedTheme === 'dark' ? 'bg-cyan-500/20 text-cyan-300 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Dark
              </button>
              <button
                onClick={() => setSelectedTheme('light')}
                className={`px-2.5 py-1 rounded text-xs cursor-pointer ${
                  selectedTheme === 'light' ? 'bg-amber-500/20 text-amber-300 font-semibold' : 'text-zinc-500 hover:text-zinc-300'
                }`}
              >
                Light
              </button>
            </div>
          </div>
        </div>

        {/* Category Filter Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06]">
          {templateCategories.map((cat) => {
            const count =
              cat.id === 'all'
                ? templatesRegistry.length
                : templatesRegistry.filter((t) => t.category === cat.id).length;

            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer flex items-center gap-2 ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500 text-zinc-950 font-bold shadow-md shadow-cyan-500/20'
                    : 'bg-white/[0.03] text-zinc-400 hover:text-white border border-white/[0.06] hover:border-white/[0.12]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    selectedCategory === cat.id
                      ? 'bg-black/25 text-black font-bold'
                      : 'bg-white/[0.06] text-zinc-500'
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Design Movement Chips */}
        <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-white/[0.06] text-xs">
          <span className="text-xs font-mono text-zinc-500 uppercase mr-1">Movement:</span>
          {templateStyles.slice(0, 14).map((st) => (
            <button
              key={st.id}
              onClick={() => setSelectedStyle(st.id)}
              className={`px-2.5 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                selectedStyle === st.id
                  ? 'bg-purple-600 text-white font-semibold shadow-sm'
                  : 'bg-white/[0.03] text-zinc-400 hover:text-zinc-200 border border-white/[0.06]'
              }`}
            >
              {st.label}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid View */}
      {viewMode === 'grid' && (
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-zinc-400 font-mono">
            <span>
              Showing <strong className="text-white">{filteredTemplates.length}</strong> of{' '}
              {templatesRegistry.length} master templates
            </span>
          </div>

          {filteredTemplates.length === 0 ? (
            <div className="py-24 text-center bg-zinc-900/40 rounded-2xl border border-white/[0.08]">
              <p className="text-sm text-zinc-400">No templates found matching your filters.</p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                  setSelectedStyle('all');
                  setSelectedTheme('all');
                }}
                className="mt-3 text-xs text-cyan-400 hover:underline font-mono cursor-pointer"
              >
                Reset all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filteredTemplates.map((template) => {
                const isFav = favorites.includes(template.id);
                const isCopied = copiedId === template.id;

                return (
                  <div
                    key={template.id}
                    onClick={() => onSelectTemplate(template.id)}
                    className="group relative flex flex-col justify-between rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-white/[0.22] hover:bg-zinc-900/80 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/5 cursor-pointer overflow-hidden"
                  >
                    <div>
                      {/* Thumbnail Frame with Live Hover Video Preview */}
                      <div className="h-52 w-full relative overflow-hidden bg-zinc-950 border-b border-white/[0.06]">
                        <HoverVideoScrollPreview
                          component={template.component}
                          thumbnail={<TemplateThumbnailPreview template={template} />}
                          title={template.name}
                          accentColor={template.accentColor}
                        />

                        {/* Favorite Button */}
                        <button
                          onClick={(e) => toggleFavorite(template.id, e)}
                          className={`absolute top-3 right-3 p-2 rounded-lg bg-black/80 backdrop-blur-md transition-colors cursor-pointer z-30 ${
                            isFav ? 'text-rose-500' : 'text-zinc-400 hover:text-white'
                          }`}
                          title="Toggle Favorite"
                        >
                          <Heart className={`w-3.5 h-3.5 ${isFav ? 'fill-rose-500' : ''}`} />
                        </button>
                      </div>

                      {/* Content */}
                      <div className="p-6 space-y-3.5">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-medium text-cyan-400 flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: template.accentColor }} />
                            {template.categoryLabel}
                          </span>
                          <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">
                            {template.supportedTheme} MODE
                          </span>
                        </div>

                        <h3 className="font-semibold text-lg text-white group-hover:text-cyan-300 transition-colors tracking-tight leading-snug">
                          {template.name}
                        </h3>

                        <p className="text-sm text-zinc-400 line-clamp-2 leading-relaxed">
                          {template.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {template.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="px-2.5 py-0.5 rounded-md bg-white/[0.04] text-[11px] font-mono text-zinc-400 border border-white/[0.06]"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="px-6 py-4 border-t border-white/[0.06] bg-zinc-950/40 flex items-center justify-between text-xs">
                      <button
                        onClick={(e) => handleCopyPath(template, e)}
                        className="flex items-center gap-1.5 text-xs font-mono text-zinc-500 hover:text-zinc-300 transition-colors cursor-pointer"
                        title="Copy file path"
                      >
                        {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{isCopied ? 'Path Copied' : template.id}</span>
                      </button>

                      <div className="flex items-center gap-1.5 font-medium text-white group-hover:text-cyan-400 transition-colors">
                        <span>Explore</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      )}

      {/* Technical Systems Registry Table View */}
      {viewMode === 'table' && (
        <div className="bg-zinc-900/50 border border-white/[0.08] rounded-2xl overflow-hidden shadow-xl">
          <div className="p-4 bg-zinc-900 border-b border-white/[0.08] flex items-center justify-between">
            <span className="text-xs font-mono text-zinc-400">
              TECHNICAL SPECIMEN REGISTRY · {filteredTemplates.length} ENTRIES
            </span>
            <span className="text-xs font-mono text-cyan-400">
              COLLECTION SPEC: V2.4
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs font-mono">
              <thead>
                <tr className="border-b border-white/[0.08] bg-zinc-950/80 text-zinc-400">
                  <th className="p-3.5">Identifier</th>
                  <th className="p-3.5">Specimen Name</th>
                  <th className="p-3.5">Category</th>
                  <th className="p-3.5">Movement</th>
                  <th className="p-3.5">Theme</th>
                  <th className="p-3.5">Accent</th>
                  <th className="p-3.5 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/[0.04]">
                {filteredTemplates.map((template) => (
                  <tr
                    key={template.id}
                    onClick={() => onSelectTemplate(template.id)}
                    className="hover:bg-white/[0.04] transition-colors cursor-pointer text-zinc-300"
                  >
                    <td className="p-3.5 font-bold text-cyan-400">{template.id}</td>
                    <td className="p-3.5 font-semibold text-white">{template.name}</td>
                    <td className="p-3.5 text-zinc-400">{template.categoryLabel}</td>
                    <td className="p-3.5 text-purple-300">{template.styleLabel}</td>
                    <td className="p-3.5 uppercase text-[11px] text-zinc-400">{template.supportedTheme}</td>
                    <td className="p-3.5">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-3.5 h-3.5 rounded-full border border-white/20"
                          style={{ backgroundColor: template.accentColor || '#06b6d4' }}
                        />
                        <span className="text-[11px] text-zinc-500">{template.accentColor}</span>
                      </div>
                    </td>
                    <td className="p-3.5 text-right">
                      <span className="text-cyan-400 font-semibold hover:underline">Launch →</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
