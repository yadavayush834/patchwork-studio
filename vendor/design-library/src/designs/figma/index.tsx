import React, { useState, useEffect } from 'react';
import {
  MousePointer,
  Square,
  Circle,
  Type,
  PenTool,
  Hand,
  MessageSquare,
  Code2,
  ExternalLink,
  ChevronRight,
  Eye,
  Copy,
  Check,
  Sparkles,
  Share2,
  Play,
  Layers,
  Palette,
  Sliders,
} from 'lucide-react';

interface CollaboratorCursor {
  name: string;
  color: string;
  x: number;
  y: number;
  message?: string;
}

export function FigmaRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeTool, setActiveTool] = useState<'select' | 'frame' | 'rect' | 'pen' | 'text'>('select');
  const [isDevMode, setIsDevMode] = useState(false);
  const [selectedElement, setSelectedElement] = useState<'button' | 'card' | 'badge'>('button');
  const [copiedCss, setCopiedCss] = useState(false);

  // Animated collaborator cursors
  const [collaborators, setCollaborators] = useState<CollaboratorCursor[]>([
    { name: 'Elena (Lead Designer)', color: '#a259ff', x: 28, y: 35, message: 'Loving this new border-radius!' },
    { name: 'Koji (Staff Engineer)', color: '#0acf83', x: 68, y: 55, message: 'Inspecting CSS tokens' },
    { name: 'Sarah (Product VP)', color: '#f24e1e', x: 45, y: 72 },
  ]);

  // Subtle ambient movement for multiplayer cursors
  useEffect(() => {
    const interval = setInterval(() => {
      setCollaborators((prev) =>
        prev.map((c) => ({
          ...c,
          x: Math.max(15, Math.min(85, c.x + (Math.random() * 6 - 3))),
          y: Math.max(20, Math.min(80, c.y + (Math.random() * 6 - 3))),
        }))
      );
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  const handleCopyCode = () => {
    setCopiedCss(true);
    setTimeout(() => setCopiedCss(false), 2000);
  };

  const getElementCss = () => {
    switch (selectedElement) {
      case 'button':
        return `/* Button Primary */
display: inline-flex;
align-items: center;
justify-content: center;
padding: 12px 24px;
background: #101010;
color: #FFFFFF;
border-radius: var(--radius-xl, 12px);
box-shadow: 0 4px 14px rgba(0, 0, 0, 0.12);
font-family: 'Plus Jakarta Sans', sans-serif;
font-weight: 600;
font-size: 14px;`;
      case 'card':
        return `/* Feature Card Component */
background: #FFFFFF;
border: 1px solid #E5E7EB;
border-radius: 16px;
padding: 24px;
box-shadow: 0 10px 30px rgba(0, 0, 0, 0.04);
backdrop-filter: blur(12px);`;
      case 'badge':
        return `/* Status Pill Token */
display: inline-flex;
padding: 4px 10px;
background: rgba(162, 89, 255, 0.1);
color: #A259FF;
border: 1px solid rgba(162, 89, 255, 0.2);
border-radius: 9999px;
font-size: 11px;
font-weight: 600;`;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8f9fa] text-[#1e1e1e] font-sans selection:bg-[#a259ff] selection:text-white relative overflow-hidden">
      {/* Top Application Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-white/90 border-b border-[#e5e7eb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Figma 5-color Logo Mark */}
            <div className="flex items-center gap-3 group cursor-pointer">
              <svg className="w-5 h-7" viewBox="0 0 38 57" fill="none">
                <path d="M19 28.5C19 33.7467 14.7467 38 9.5 38C4.25329 38 0 33.7467 0 28.5C0 23.2533 4.25329 19 9.5 19L19 19V28.5Z" fill="#0ACF83" />
                <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#A259FF" />
                <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262" />
                <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E" />
                <path d="M19 19H28.5C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38H19V19Z" fill="#1ABCFE" />
              </svg>
              <span className="font-bold text-base tracking-tight text-[#111]">Figma</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-[14px] text-[#444] font-medium">
              <span className="hover:text-black cursor-pointer transition-colors">Products</span>
              <span className="hover:text-black cursor-pointer transition-colors">Enterprise</span>
              <span className="hover:text-black cursor-pointer transition-colors">Community</span>
              <span className="hover:text-black cursor-pointer transition-colors">Resources</span>
              <span className="hover:text-black cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-md bg-slate-100 hover:bg-slate-200 border border-slate-300 text-slate-700 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://www.figma.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-slate-500 hover:text-black transition-colors"
            >
              <span>figma.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-slate-700 hover:text-black transition-colors px-2 py-1 font-medium">
              Log in
            </button>
            <button className="text-xs px-3.5 py-1.5 rounded-lg bg-black hover:bg-slate-800 text-white font-semibold transition-all shadow-sm">
              Get started free
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-16 pb-12 sm:pt-24 sm:pb-16 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-xs text-slate-600 mb-6 hover:border-slate-400 cursor-pointer transition-all">
            <span className="w-2 h-2 rounded-full bg-[#a259ff]" />
            <span className="text-black font-semibold">Figma AI & Dev Mode 2.0</span>
            <span className="text-slate-400">·</span>
            <span>The full-stack creative canvas</span>
            <ChevronRight className="w-3.5 h-3.5" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-[#111] max-w-3xl mx-auto leading-[1.05] mb-6">
            The full-stack creative canvas
          </h1>

          <p className="text-base sm:text-xl text-slate-600 max-w-2xl mx-auto mb-8 leading-relaxed">
            Move fast in the right direction on an AI-native canvas. Design, prototype, and build in one shared collaborative workspace.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-xl bg-black hover:bg-slate-800 text-white text-sm font-semibold transition-all shadow-md cursor-pointer">
              Try Figma for free
            </button>
            <button
              onClick={() => setIsDevMode((prev) => !prev)}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-sm font-semibold transition-all flex items-center gap-2 cursor-pointer shadow-sm"
            >
              <Code2 className="w-4 h-4 text-[#0acf83]" />
              <span>{isDevMode ? 'Switch to Design Mode' : 'Toggle Dev Mode (Inspect)'}</span>
            </button>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Real Figma Canvas, Multiplayer Cursors & Dev Mode Inspector */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-2xl border border-slate-300 bg-white shadow-2xl overflow-hidden relative">
            {/* Figma Toolbar */}
            <div className="bg-[#2c2c2c] text-white px-4 py-2 flex flex-wrap items-center justify-between gap-3 select-none">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTool('select')}
                  className={`p-1.5 rounded transition-colors ${activeTool === 'select' ? 'bg-[#18a0fb] text-white' : 'hover:bg-white/10 text-slate-300'}`}
                  title="Move Tool (V)"
                >
                  <MousePointer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('frame')}
                  className={`p-1.5 rounded transition-colors ${activeTool === 'frame' ? 'bg-[#18a0fb] text-white' : 'hover:bg-white/10 text-slate-300'}`}
                  title="Frame (F)"
                >
                  <Square className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('pen')}
                  className={`p-1.5 rounded transition-colors ${activeTool === 'pen' ? 'bg-[#18a0fb] text-white' : 'hover:bg-white/10 text-slate-300'}`}
                  title="Pen Tool (P)"
                >
                  <PenTool className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveTool('text')}
                  className={`p-1.5 rounded transition-colors ${activeTool === 'text' ? 'bg-[#18a0fb] text-white' : 'hover:bg-white/10 text-slate-300'}`}
                  title="Text (T)"
                >
                  <Type className="w-4 h-4" />
                </button>
              </div>

              {/* Center document title */}
              <div className="text-xs font-medium text-slate-300 hidden sm:block">
                Design System 2026 / Rocketship / v4.2
              </div>

              {/* Dev mode switch */}
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setIsDevMode(!isDevMode)}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold transition-all cursor-pointer ${
                    isDevMode ? 'bg-[#0acf83] text-black shadow-md' : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  <span>Dev Mode</span>
                </button>
                <button className="px-3 py-1 rounded bg-[#18a0fb] hover:bg-[#158fe0] text-white text-xs font-semibold flex items-center gap-1">
                  <Share2 className="w-3 h-3" />
                  <span>Share</span>
                </button>
              </div>
            </div>

            {/* Canvas Area with Multiplayer Cursors */}
            <div className="relative bg-[#e5e5e5] h-[520px] overflow-hidden flex items-center justify-center p-6">
              {/* Dot Grid Canvas Background */}
              <div
                className="absolute inset-0 pointer-events-none opacity-40"
                style={{
                  backgroundImage: 'radial-gradient(#999 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
              />

              {/* Multiplayer Cursors */}
              {collaborators.map((collab) => (
                <div
                  key={collab.name}
                  className="absolute pointer-events-none transition-all duration-700 ease-out z-20 flex flex-col items-start"
                  style={{ left: `${collab.x}%`, top: `${collab.y}%` }}
                >
                  <MousePointer
                    className="w-5 h-5 -rotate-45 drop-shadow-md"
                    style={{ fill: collab.color, color: collab.color }}
                  />
                  <div
                    className="px-2 py-0.5 rounded text-[10px] font-semibold text-white shadow-md flex items-center gap-1 whitespace-nowrap"
                    style={{ backgroundColor: collab.color }}
                  >
                    <span>{collab.name}</span>
                  </div>
                  {collab.message && (
                    <div className="mt-1 px-2.5 py-1 rounded-lg bg-white text-[#111] text-[11px] shadow-lg border border-slate-200">
                      {collab.message}
                    </div>
                  )}
                </div>
              ))}

              {/* Interactive Artboard inside Canvas */}
              <div className="bg-white rounded-2xl shadow-xl border border-slate-300 w-full max-w-xl p-8 relative z-10">
                <div className="flex items-center justify-between pb-4 border-b border-slate-100 mb-6">
                  <div>
                    <span className="text-[10px] font-mono-tech text-slate-400 uppercase tracking-widest block">Component Master</span>
                    <h3 className="text-lg font-bold text-slate-900">Checkout Modal Layout</h3>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setSelectedElement('badge')}
                      className={`px-2 py-0.5 rounded text-[11px] font-semibold cursor-pointer ${
                        selectedElement === 'badge' ? 'ring-2 ring-[#a259ff]' : ''
                      }`}
                    >
                      <span className="px-2 py-0.5 rounded-full bg-purple-100 text-purple-700">v3.0 New</span>
                    </button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div
                    onClick={() => setSelectedElement('card')}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      selectedElement === 'card'
                        ? 'border-2 border-[#18a0fb] bg-blue-50/20 shadow-md'
                        : 'border-slate-200 bg-slate-50 hover:border-slate-300'
                    }`}
                  >
                    <span className="text-xs font-bold text-slate-800 block mb-1">Annual Enterprise License</span>
                    <p className="text-xs text-slate-500">Full vector export tokens with multi-region CDN delivery.</p>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-lg font-extrabold text-slate-900">$2,400 / yr</span>
                    <button
                      onClick={() => setSelectedElement('button')}
                      className={`px-5 py-2.5 rounded-xl bg-black text-white text-xs font-semibold transition-all cursor-pointer ${
                        selectedElement === 'button' ? 'ring-2 ring-[#0acf83] ring-offset-2' : ''
                      }`}
                    >
                      Confirm Selection
                    </button>
                  </div>
                </div>
              </div>

              {/* Dev Mode Inspector Drawer Overlay */}
              {isDevMode && (
                <div className="absolute right-0 top-0 bottom-0 w-80 bg-[#1e1e1e] text-white p-4 z-30 shadow-2xl border-l border-[#333] flex flex-col justify-between animate-in slide-in-from-right duration-200">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-[#333] mb-4">
                      <div className="flex items-center gap-2">
                        <Code2 className="w-4 h-4 text-[#0acf83]" />
                        <span className="text-xs font-bold font-mono-tech uppercase">Dev Mode · CSS Output</span>
                      </div>
                      <button
                        onClick={handleCopyCode}
                        className="p-1 rounded hover:bg-[#333] text-slate-300"
                        title="Copy CSS"
                      >
                        {copiedCss ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      </button>
                    </div>

                    <div className="text-[11px] text-slate-400 mb-2">Selected Node: <strong className="text-white">{selectedElement}</strong></div>

                    <pre className="font-code text-[11px] leading-relaxed bg-[#141414] p-3 rounded border border-[#2a2a2a] text-slate-300 overflow-x-auto max-h-64">
                      <code>{getElementCss()}</code>
                    </pre>
                  </div>

                  <div className="pt-3 border-t border-[#333] text-[10px] font-mono-tech text-slate-400 flex items-center justify-between">
                    <span>Target: Tailwind CSS / Web</span>
                    <span className="text-emerald-400">Live Synced</span>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom info bar */}
            <div className="bg-slate-100 px-4 py-2 border-t border-slate-200 flex items-center justify-between text-xs text-slate-500 font-mono-tech">
              <span>Canvas Multiplayer Active (3 users collaborating)</span>
              <span>Click any element to inspect design properties</span>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-200 py-12 bg-white text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-black font-semibold">Figma</span>
            <span>— The collaborative interface design tool</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://www.figma.com" target="_blank" rel="noreferrer" className="text-black hover:underline">Official figma.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default FigmaRecreation;
