import React, { useState, useEffect } from 'react';
import {
  Search,
  Command,
  Sparkles,
  ExternalLink,
  ChevronRight,
  Terminal,
  Zap,
  Download,
  Check,
  Calculator,
  MessageSquare,
  Music,
  Share2,
  Calendar,
  X,
  Play,
  Layers,
  ArrowRight,
} from 'lucide-react';

interface Extension {
  id: string;
  name: string;
  category: 'Developer' | 'Productivity' | 'Media' | 'Utilities';
  author: string;
  downloads: string;
  description: string;
  iconName: string;
  installed: boolean;
}

const initialExtensions: Extension[] = [
  {
    id: 'gh',
    name: 'GitHub',
    category: 'Developer',
    author: 'raycast',
    downloads: '850k',
    description: 'Search repositories, manage pull requests, and review issues directly from Raycast.',
    iconName: 'github',
    installed: true,
  },
  {
    id: 'lin',
    name: 'Linear',
    category: 'Productivity',
    author: 'linear',
    downloads: '420k',
    description: 'Quickly create issues, search your workspace, and switch cycles in milliseconds.',
    iconName: 'linear',
    installed: true,
  },
  {
    id: 'spot',
    name: 'Spotify Player',
    category: 'Media',
    author: 'mattis',
    downloads: '310k',
    description: 'Control music playback, search playlists, and like songs without leaving your active window.',
    iconName: 'spotify',
    installed: false,
  },
  {
    id: 'fig',
    name: 'Figma Files',
    category: 'Developer',
    author: 'figma',
    downloads: '290k',
    description: 'Search recent canvas projects, jump directly into frames, and inspect design tokens.',
    iconName: 'figma',
    installed: false,
  },
  {
    id: 'ai',
    name: 'Raycast AI Chat',
    category: 'Utilities',
    author: 'raycast',
    downloads: '1.2M',
    description: 'Chat with GPT-4o, Claude 3.5 Sonnet, and custom prompt templates right in your launcher.',
    iconName: 'ai',
    installed: true,
  },
];

export function RaycastRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [isSpotlightOpen, setIsSpotlightOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [extensions, setExtensions] = useState<Extension[]>(initialExtensions);
  const [calcInput, setCalcInput] = useState('1250 * 0.18 + 42');
  const [calcResult, setCalcResult] = useState('267');
  const [activeCommandIdx, setActiveCommandIdx] = useState(0);

  // Keyboard shortcut listener for Cmd+Space
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.code === 'Space') {
        e.preventDefault();
        setIsSpotlightOpen((prev) => !prev);
      } else if (e.key === 'Escape') {
        setIsSpotlightOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleToggleInstall = (id: string) => {
    setExtensions((prev) =>
      prev.map((ext) => (ext.id === id ? { ...ext, installed: !ext.installed } : ext))
    );
  };

  const handleCalcChange = (val: string) => {
    setCalcInput(val);
    try {
      // Safe math eval for demo
      const sanitized = val.replace(/[^0-9+\-*/. ()]/g, '');
      if (sanitized) {
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcResult(String(res));
      }
    } catch {
      // ignore
    }
  };

  const filteredExtensions = extensions.filter((ext) => {
    if (selectedCategory !== 'All' && ext.category !== selectedCategory) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-[#07080a] text-[#ededed] font-sans selection:bg-[#ff6363] selection:text-white relative overflow-hidden">
      {/* Raycast Ambient Crimson Glow */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#ff6363]/10 to-transparent blur-[140px]" />
      </div>

      {/* Top Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#07080a]/85 border-b border-[#1b1c20]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Raycast Logo Mark */}
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-6 h-6 rounded-md bg-[#ff6363] flex items-center justify-center shadow-md shadow-[#ff6363]/30">
                <Command className="w-3.5 h-3.5 text-white" />
              </div>
              <span className="font-bold text-sm tracking-tight text-white">Raycast</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#888]">
              <span className="hover:text-white cursor-pointer transition-colors">Store</span>
              <span className="hover:text-white cursor-pointer transition-colors">Developer</span>
              <span className="hover:text-white cursor-pointer transition-colors">Teams</span>
              <span className="hover:text-white cursor-pointer transition-colors">AI</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1 rounded bg-[#16171b] hover:bg-[#202126] border border-[#26282f] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://www.raycast.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#888] hover:text-white transition-colors"
            >
              <span>raycast.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={() => setIsSpotlightOpen(true)}
              className="text-xs px-3 py-1.5 rounded-md bg-[#ff6363] hover:bg-[#ff7575] text-white font-medium transition-all shadow-md shadow-[#ff6363]/25 cursor-pointer flex items-center gap-1.5"
            >
              <span>Launch HUD</span>
              <kbd className="text-[10px] bg-black/25 px-1 rounded font-mono-tech">⌘Space</kbd>
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#16171c] border border-[#272832] text-xs text-[#999] mb-8 hover:border-[#ff6363]/40 cursor-pointer transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#ff6363]" />
            <span className="text-white font-medium">Raycast AI 2.0</span>
            <span className="text-slate-600">·</span>
            <span>Your shortcut to everything</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08] mb-6">
            Your shortcut to everything.
          </h1>

          <p className="text-base sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Raycast is a blazingly fast, fully extendable launcher. Keep your hands on the keyboard, manage tasks, control music, query AI, and fly through your day.
          </p>

          {/* Trigger Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setIsSpotlightOpen(true)}
              className="px-6 py-3 rounded-lg bg-[#ff6363] hover:bg-[#ff7575] text-white text-sm font-semibold transition-all flex items-center gap-2 shadow-xl shadow-[#ff6363]/25 cursor-pointer"
            >
              <Command className="w-4 h-4" />
              <span>Open Interactive Spotlight HUD</span>
              <kbd className="px-1.5 py-0.5 text-xs bg-black/25 rounded font-mono-tech">⌘ Space</kbd>
            </button>
            <a
              href="https://www.raycast.com"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-3 rounded-lg bg-[#14151a] hover:bg-[#1c1d24] border border-[#262832] text-sm text-[#ededed] transition-all flex items-center gap-2"
            >
              <Download className="w-4 h-4 text-[#ff6363]" />
              <span>Download for Mac & Windows</span>
            </a>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Raycast Launcher Bar & Extension Store */}
        <section className="max-w-5xl mx-auto px-4 mb-20">
          <div className="rounded-2xl border border-[#22242c] bg-[#0e0f14] shadow-2xl p-6 relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#1b1c24] mb-6">
              <div>
                <h2 className="text-lg font-bold text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#ff6363]" />
                  <span>Raycast Store &amp; Extension Ecosystem</span>
                </h2>
                <p className="text-xs text-slate-400">Discover and install community plugins</p>
              </div>

              {/* Category tabs */}
              <div className="flex items-center gap-1 bg-[#14151c] p-1 rounded-lg border border-[#22242e]">
                {['All', 'Developer', 'Productivity', 'Media', 'Utilities'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setSelectedCategory(cat)}
                    className={`px-2.5 py-1 rounded text-xs transition-colors cursor-pointer ${
                      selectedCategory === cat ? 'bg-[#252733] text-white font-medium' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Extensions Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {filteredExtensions.map((ext) => (
                <div
                  key={ext.id}
                  className="p-4 rounded-xl bg-[#13141b] border border-[#20222b] hover:border-[#ff6363]/40 transition-all flex items-start justify-between gap-4 group"
                >
                  <div>
                    <div className="flex items-center gap-2 mb-1.5">
                      <span className="font-semibold text-sm text-white group-hover:text-[#ff7575] transition-colors">
                        {ext.name}
                      </span>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-[#1c1d27] text-slate-400 font-mono-tech">
                        by @{ext.author}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed mb-3">
                      {ext.description}
                    </p>
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 font-mono-tech">
                      <span>{ext.downloads} installs</span>
                      <span>·</span>
                      <span className="text-slate-400">{ext.category}</span>
                    </div>
                  </div>

                  <button
                    onClick={() => handleToggleInstall(ext.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer flex-shrink-0 ${
                      ext.installed
                        ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                        : 'bg-[#ff6363] hover:bg-[#ff7575] text-white shadow-sm'
                    }`}
                  >
                    {ext.installed ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>Installed</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-3.5 h-3.5" />
                        <span>Install</span>
                      </>
                    )}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERACTIVE CALCULATOR & QUICK AI PREVIEW */}
        <section className="max-w-4xl mx-auto px-4 py-12 border-t border-[#181920]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Quick Calculator Demo */}
            <div className="p-5 rounded-xl bg-[#111218] border border-[#22242e]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 mb-3">
                <Calculator className="w-4 h-4 text-[#ff6363]" />
                <span>Instant Inline Math Evaluator</span>
              </div>
              <input
                type="text"
                value={calcInput}
                onChange={(e) => handleCalcChange(e.target.value)}
                placeholder="Type expression..."
                className="w-full bg-[#0a0a0f] border border-[#252733] rounded-lg px-3 py-2 text-sm text-white font-mono-tech focus:outline-none focus:border-[#ff6363] mb-3"
              />
              <div className="flex items-center justify-between text-xs">
                <span className="text-slate-500">Evaluated Result:</span>
                <span className="text-lg font-bold font-mono-tech text-emerald-400">{calcResult}</span>
              </div>
            </div>

            {/* Quick AI Prompt Demo */}
            <div className="p-5 rounded-xl bg-[#111218] border border-[#22242e]">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400 mb-3">
                <MessageSquare className="w-4 h-4 text-[#ff6363]" />
                <span>Natural Language Hotkey Assistant</span>
              </div>
              <div className="bg-[#0a0a0f] p-3 rounded-lg border border-[#252733] text-xs text-slate-300 leading-relaxed font-mono-tech mb-2">
                &quot;Summarize git diff on branch feat/raycast-v2 and format as markdown bullets.&quot;
              </div>
              <div className="text-[11px] text-emerald-400 flex items-center gap-1 font-mono-tech">
                <Check className="w-3 h-3" /> Auto-executed via background Claude 3.5 Sonnet worker
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#181920] py-12 bg-[#07080a] text-xs text-[#666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Raycast</span>
            <span>— Your shortcut to everything</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.raycast.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official raycast.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>

      {/* SPOTLIGHT FLOATING LAUNCHER MODAL (⌘Space) */}
      {isSpotlightOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-28 bg-black/75 backdrop-blur-md p-4">
          <div className="w-full max-w-2xl rounded-2xl bg-[#0f1015]/95 border border-[#2c2e3a] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8),0_0_40px_rgba(255,99,99,0.15)] overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            {/* Spotlight input bar */}
            <div className="flex items-center px-4 py-3.5 border-b border-[#20222c] gap-3">
              <Search className="w-5 h-5 text-[#ff6363]" />
              <input
                type="text"
                autoFocus
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search commands, apps, scripts, or ask AI..."
                className="w-full bg-transparent text-base text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setIsSpotlightOpen(false)}
                className="text-slate-500 hover:text-slate-300 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Results list */}
            <div className="p-2 space-y-1 text-xs max-h-80 overflow-y-auto">
              <div className="px-3 py-1 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider">
                Suggested Actions
              </div>

              {[
                { title: 'Create GitHub Pull Request', app: 'GitHub', hotkey: '⌘P' },
                { title: 'Linear: Jump to Cycle 42 Active Sprint', app: 'Linear', hotkey: '⌘L' },
                { title: 'Spotify: Play Deep Work Playlist', app: 'Spotify', hotkey: '⌘S' },
                { title: 'Raycast AI: Explain TypeScript Generic', app: 'AI Chat', hotkey: '⌘Enter' },
                { title: 'Calculator: 1250 * 0.18 + 42 = 267', app: 'Calculator', hotkey: '↵' },
              ].map((cmd, idx) => (
                <div
                  key={cmd.title}
                  onClick={() => setIsSpotlightOpen(false)}
                  onMouseEnter={() => setActiveCommandIdx(idx)}
                  className={`w-full px-3 py-2.5 rounded-lg flex items-center justify-between text-left cursor-pointer transition-colors ${
                    activeCommandIdx === idx ? 'bg-[#ff6363]/20 border border-[#ff6363]/40 text-white' : 'hover:bg-[#181922] text-slate-300'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Command className="w-3.5 h-3.5 text-[#ff6363]" />
                    <span className="font-medium text-slate-200">{cmd.title}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] text-slate-500 font-mono-tech">{cmd.app}</span>
                    <kbd className="px-1.5 py-0.5 rounded bg-[#20222d] text-[10px] text-slate-400 font-mono-tech border border-[#2d303f]">
                      {cmd.hotkey}
                    </kbd>
                  </div>
                </div>
              ))}
            </div>

            {/* Footer hint */}
            <div className="bg-[#0b0c10] px-4 py-2 border-t border-[#1f212a] flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
              <span>Raycast HUD</span>
              <div className="flex items-center gap-3">
                <span>Select: <kbd className="text-slate-400">↵</kbd></span>
                <span>Actions: <kbd className="text-slate-400">⌘K</kbd></span>
                <span>Close: <kbd className="text-slate-400">ESC</kbd></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
export default RaycastRecreation;
