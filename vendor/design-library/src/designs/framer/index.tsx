import React, { useState } from 'react';
import {
  Monitor,
  Tablet,
  Smartphone,
  Sparkles,
  Layers,
  Wand2,
  ExternalLink,
  ChevronRight,
  Eye,
  Sliders,
  Type,
  Square,
  Image,
  Play,
  RotateCcw,
  Palette,
  Layout,
  MousePointer,
} from 'lucide-react';

type Breakpoint = 'desktop' | 'tablet' | 'mobile';

interface CanvasTheme {
  name: string;
  heroHeadline: string;
  accentColor: string;
  tagline: string;
}

const themePresets: CanvasTheme[] = [
  {
    name: 'Neo AI Studio',
    heroHeadline: 'Design the future at the speed of thought',
    accentColor: '#0055ff',
    tagline: 'Generative layouts with human precision',
  },
  {
    name: 'Cybernetic Labs',
    heroHeadline: 'Autonomous intelligence for creators',
    accentColor: '#00d4b2',
    tagline: 'High-frequency algorithmic web engines',
  },
  {
    name: 'Editorial Luxe',
    heroHeadline: 'Timeless typography meets modern motion',
    accentColor: '#e0a96d',
    tagline: 'Hand-crafted digital experiences',
  },
];

export function FramerRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>('desktop');
  const [activeThemeIdx, setActiveThemeIdx] = useState<number>(0);
  const [promptInput, setPromptInput] = useState('Create a modern AI agent portfolio with glowing gradients');
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState<string>('Hero Section');

  const currentTheme = themePresets[activeThemeIdx];

  const handleGenerate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsGenerating(true);
    setTimeout(() => {
      setActiveThemeIdx((prev) => (prev + 1) % themePresets.length);
      setIsGenerating(false);
    }, 800);
  };

  const getCanvasWidth = () => {
    switch (breakpoint) {
      case 'desktop':
        return 'w-full max-w-4xl';
      case 'tablet':
        return 'w-full max-w-xl';
      case 'mobile':
        return 'w-full max-w-xs';
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-[#ededed] font-sans selection:bg-[#0055ff] selection:text-white relative overflow-hidden">
      {/* Framer Grid Dot Pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-20"
        style={{
          backgroundImage: 'radial-gradient(#444 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }}
      />

      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#0a0a0a]/85 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Framer Logo */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
              </svg>
              <span className="font-bold text-sm tracking-tight text-white">Framer</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#888]">
              <span className="hover:text-white cursor-pointer transition-colors">Features</span>
              <span className="hover:text-white cursor-pointer transition-colors">Templates</span>
              <span className="hover:text-white cursor-pointer transition-colors">Showcase</span>
              <span className="hover:text-white cursor-pointer transition-colors">Community</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1 rounded bg-[#181818] hover:bg-[#222] border border-[#333] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://www.framer.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#888] hover:text-white transition-colors"
            >
              <span>framer.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#888] hover:text-white transition-colors px-2 py-1">
              Log in
            </button>
            <button className="text-xs px-3 py-1.5 rounded-md bg-[#0055ff] hover:bg-[#1a66ff] text-white font-medium transition-all shadow-md shadow-[#0055ff]/20">
              Start for free
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#161616] border border-[#262626] text-xs text-[#999] mb-6 hover:border-[#444] cursor-pointer transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#0055ff]" />
            <span className="text-white font-medium">Framer AI Design Agent</span>
            <span className="text-[#555]">·</span>
            <span>Go from prompt to live production site</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#666]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white leading-[1.08] mb-6">
            The website builder that designs with you
          </h1>

          <p className="text-base sm:text-xl text-[#888] max-w-2xl mx-auto mb-8 leading-relaxed font-normal">
            Generate and edit full responsive websites directly on an infinite canvas. Freeform layouts, advanced animations, CMS, and lightning-fast worldwide publishing.
          </p>

          {/* AI Prompt Input Bar */}
          <form onSubmit={handleGenerate} className="max-w-2xl mx-auto mb-10">
            <div className="relative flex items-center bg-[#141414] border border-[#2b2b2b] rounded-xl p-1.5 shadow-2xl focus-within:border-[#0055ff] transition-all">
              <Wand2 className="w-5 h-5 text-[#0055ff] ml-3 flex-shrink-0" />
              <input
                type="text"
                value={promptInput}
                onChange={(e) => setPromptInput(e.target.value)}
                placeholder="Describe your website concept..."
                className="w-full bg-transparent px-3 py-2 text-xs sm:text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                type="submit"
                disabled={isGenerating}
                className="px-4 py-2 rounded-lg bg-[#0055ff] hover:bg-[#1a66ff] disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all shadow-md flex-shrink-0 cursor-pointer"
              >
                <Sparkles className={`w-3.5 h-3.5 ${isGenerating ? 'animate-spin' : ''}`} />
                <span>{isGenerating ? 'Generating...' : 'Regenerate'}</span>
              </button>
            </div>
          </form>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Canvas with Breakpoint Switcher & Inspector */}
        <section className="max-w-7xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#242424] bg-[#111111] shadow-2xl overflow-hidden">
            {/* Canvas Header / Breakpoint controls */}
            <div className="bg-[#161616] border-b border-[#242424] px-4 py-2.5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono-tech text-slate-400">Viewport:</span>
                <div className="flex items-center bg-[#202020] rounded-lg p-0.5 border border-[#303030]">
                  <button
                    onClick={() => setBreakpoint('desktop')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      breakpoint === 'desktop' ? 'bg-[#333] text-white font-medium' : 'text-[#888] hover:text-white'
                    }`}
                  >
                    <Monitor className="w-3.5 h-3.5" />
                    <span>Desktop (1200px)</span>
                  </button>
                  <button
                    onClick={() => setBreakpoint('tablet')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      breakpoint === 'tablet' ? 'bg-[#333] text-white font-medium' : 'text-[#888] hover:text-white'
                    }`}
                  >
                    <Tablet className="w-3.5 h-3.5" />
                    <span>Tablet (810px)</span>
                  </button>
                  <button
                    onClick={() => setBreakpoint('mobile')}
                    className={`flex items-center gap-1 px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      breakpoint === 'mobile' ? 'bg-[#333] text-white font-medium' : 'text-[#888] hover:text-white'
                    }`}
                  >
                    <Smartphone className="w-3.5 h-3.5" />
                    <span>Mobile (390px)</span>
                  </button>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 text-xs">
                <span className="text-[11px] font-mono-tech text-slate-400 px-2 py-0.5 rounded bg-[#202020]">
                  Preset: {currentTheme.name}
                </span>
                <button
                  onClick={() => setActiveThemeIdx((prev) => (prev + 1) % themePresets.length)}
                  className="px-2.5 py-1 rounded bg-[#222] hover:bg-[#333] text-slate-200 border border-[#333] flex items-center gap-1 cursor-pointer"
                >
                  <Palette className="w-3.5 h-3.5 text-[#0055ff]" />
                  <span>Cycle Theme</span>
                </button>
              </div>
            </div>

            {/* Canvas Main Stage */}
            <div className="p-6 sm:p-10 bg-[#0d0d0d] flex justify-center items-center min-h-[480px] overflow-x-auto">
              {/* Responsive Frame */}
              <div
                className={`${getCanvasWidth()} transition-all duration-300 rounded-xl border-2 border-dashed border-[#333] bg-[#050505] p-6 shadow-2xl relative overflow-hidden`}
              >
                {/* Simulated Canvas Header */}
                <div className="flex items-center justify-between pb-4 border-b border-[#222] mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: currentTheme.accentColor }} />
                    <span className="font-bold text-xs text-white uppercase tracking-wider">{currentTheme.name}</span>
                  </div>
                  <div className="flex items-center gap-4 text-xs text-slate-400">
                    <span>Work</span>
                    <span>Studio</span>
                    <span>Contact</span>
                  </div>
                </div>

                {/* Hero block inside canvas */}
                <div className="text-center py-8">
                  <span
                    className="text-[11px] font-mono-tech uppercase tracking-widest px-2.5 py-1 rounded-full border mb-3 inline-block"
                    style={{
                      color: currentTheme.accentColor,
                      borderColor: `${currentTheme.accentColor}40`,
                      backgroundColor: `${currentTheme.accentColor}10`,
                    }}
                  >
                    {currentTheme.tagline}
                  </span>
                  <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-4 leading-tight">
                    {currentTheme.heroHeadline}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-400 max-w-md mx-auto mb-6">
                    Fluid interactions, physics-based springs, and interactive 3D components embedded on the canvas.
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <button
                      className="px-4 py-2 rounded-lg text-xs font-semibold text-white shadow-lg cursor-pointer"
                      style={{ backgroundColor: currentTheme.accentColor }}
                    >
                      Explore Prototype
                    </button>
                    <button className="px-3.5 py-2 rounded-lg text-xs bg-[#181818] border border-[#2c2c2c] text-slate-300 hover:text-white cursor-pointer">
                      View Source
                    </button>
                  </div>
                </div>

                {/* 3 Interactive Cards in Canvas */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-[#1a1a1a]">
                  {[1, 2, 3].map((cardNum) => (
                    <div
                      key={cardNum}
                      className="p-3.5 rounded-lg bg-[#111] border border-[#222] hover:border-[#444] transition-all cursor-pointer group"
                    >
                      <div className="text-xs font-medium text-white group-hover:text-cyan-300 transition-colors mb-1">
                        Dynamic Section 0{cardNum}
                      </div>
                      <p className="text-[11px] text-slate-500 leading-relaxed">
                        Full responsive breakpoint constraints auto-synced across devices.
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Canvas Tools */}
            <div className="bg-[#141414] border-t border-[#222] px-4 py-2 flex items-center justify-between text-xs text-slate-400 font-mono-tech">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <MousePointer className="w-3.5 h-3.5 text-[#0055ff]" /> Auto-layout: Active
                </span>
                <span>·</span>
                <span>Zoom: 100%</span>
              </div>
              <div className="flex items-center gap-2">
                <span>FPS: 60</span>
                <span>·</span>
                <span className="text-emerald-400">Live Preview Running</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#222] py-12 bg-[#0a0a0a] text-xs text-[#666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Framer</span>
            <span>— The internet&apos;s favorite website builder</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.framer.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official framer.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default FramerRecreation;
