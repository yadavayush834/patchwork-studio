import React, { useState } from 'react';
import {
  BookOpen,
  Code2,
  Copy,
  Check,
  FolderTree,
  Zap,
  CheckCircle2,
  Package,
  Layers,
  ArrowRight,
} from 'lucide-react';

export function DocsView() {
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const codeSnippets = {
    step1: `cp -r src/templates/ai/neural-canvas/ ~/my-project/src/pages/`,
    step2: `npm install lucide-react clsx tailwind-merge`,
    step3: `import { CognitiveStudioTemplate } from './pages/neural-canvas';

export default function App() {
  return <CognitiveStudioTemplate />;
}`,
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12 text-zinc-300">
      {/* Editorial Header */}
      <div className="relative rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-8 sm:p-10 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
            <BookOpen className="w-3.5 h-3.5 text-purple-400" />
            <span>Developer Reference · Modular Extraction Guide</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-grotesk">
            Library Architecture & Extraction Guide
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Every template in this library is crafted as a self-contained, independent unit. You can extract any individual template into your own React, Next.js, or Vite project with zero unnecessary baggage.
          </p>
        </div>
      </div>

      {/* 1. Quick Start / How to Extract a Template */}
      <section className="space-y-5">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Zap className="w-5 h-5 text-amber-400" />
            <span>1. How to Extract Any Template (Under 60 Seconds)</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
            All templates reside in self-contained folders with their own subcomponents, mock data, and local state. Follow these 3 steps:
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] divide-y divide-white/[0.06] overflow-hidden">
          {/* Step 1 */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center text-[11px] font-mono text-white">1</span>
                Copy the template folder
              </span>
              <button
                onClick={() => copyToClipboard(codeSnippets.step1, 'step1')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors cursor-pointer"
              >
                {copiedId === 'step1' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'step1' ? 'Copied' : 'Copy command'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] text-xs font-mono text-zinc-300 overflow-x-auto">
              <code>{codeSnippets.step1}</code>
            </pre>
          </div>

          {/* Step 2 */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center text-[11px] font-mono text-white">2</span>
                Install peer dependencies
              </span>
              <button
                onClick={() => copyToClipboard(codeSnippets.step2, 'step2')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors cursor-pointer"
              >
                {copiedId === 'step2' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'step2' ? 'Copied' : 'Copy command'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] text-xs font-mono text-zinc-300 overflow-x-auto">
              <code>{codeSnippets.step2}</code>
            </pre>
          </div>

          {/* Step 3 */}
          <div className="p-6 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-zinc-300 flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-white/[0.08] flex items-center justify-center text-[11px] font-mono text-white">3</span>
                Import and mount in your router
              </span>
              <button
                onClick={() => copyToClipboard(codeSnippets.step3, 'step3')}
                className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 transition-colors cursor-pointer"
              >
                {copiedId === 'step3' ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                <span>{copiedId === 'step3' ? 'Copied' : 'Copy code'}</span>
              </button>
            </div>
            <pre className="p-4 rounded-xl bg-zinc-950/80 border border-white/[0.06] text-xs font-mono text-zinc-300 overflow-x-auto">
              <code>{codeSnippets.step3}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* 2. Directory Architecture */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <FolderTree className="w-5 h-5 text-purple-400" />
            <span>2. Repository Architecture</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
            How files and folders are structured across the codebase:
          </p>
        </div>

        <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] p-6 font-mono text-xs text-zinc-300 leading-relaxed overflow-x-auto">
          <pre>{`src/
├── app/                        # Main gallery catalog, simulator, docs & explorer
│   ├── gallery.tsx             # Master template gallery with search and category filters
│   ├── preview-shell.tsx       # Viewport simulator (Desktop, Tablet, Mobile)
│   ├── components-explorer.tsx # Interactive UI primitives catalog
│   └── docs-view.tsx           # Architecture and extraction documentation
├── components/
│   ├── preview/                # HoverVideoScrollPreview live inspection component
│   └── ui/                     # Reusable UI primitives (Button, Badge, Card, Input, Tabs)
├── data/
│   └── templates-registry.ts   # Central metadata index for all templates
├── design-system/
│   └── tokens.ts               # Theme tokens, palettes, and typography specifications
├── templates/                  # Standalone production website templates
│   ├── ai/                     # Cognitive Studio, NexusAgent OS
│   ├── developer/              # HyperTerm CLI, AetherMesh Edge
│   ├── education/              # Lumina Academy
│   ├── hackathons/             # CyberForge '26
│   ├── authentication/         # VaultGuard 2FA
│   ├── portfolios/             # Kai Takahashi Bento Portfolio
│   ├── saas/                   # FinPulse Enterprise SaaS
│   └── ecommerce/              # AURA Atelier Minimalist Cart
├── websites/                   # 28 Distinct Web Design Movements
│   ├── gallery/                # Websites gallery and batch filter
│   └── registry/               # Master registry of 28 distinct design styles
└── designs/                    # 10 Reverse-engineered top tech brand sites
    └── gallery/                # Recreations of Linear, Stripe, Supabase, etc.`}</pre>
        </div>
      </section>

      {/* 3. Completed Templates Checklist */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>3. Core Templates Verification Matrix</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
            All core templates are tested, responsive, and standalone ready:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
          {[
            { num: '01', name: 'Cognitive Studio', category: 'AI Canvas & Prompt Synthesis' },
            { num: '02', name: 'NexusAgent OS', category: 'Multi-Agent Observability Fleet' },
            { num: '03', name: 'HyperTerm CLI', category: 'Retro-Cyber Web Terminal' },
            { num: '04', name: 'AetherMesh', category: 'Swiss Minimalist Global Edge API' },
            { num: '05', name: 'Lumina Academy', category: 'Editorial Video Stage & Interactive Quiz' },
            { num: '06', name: 'CyberForge \'26', category: 'Neo-Brutalist Global Hackathon' },
            { num: '07', name: 'VaultGuard', category: 'Glassmorphic 2FA & Password Meter' },
            { num: '08', name: 'Kai Takahashi', category: 'Dark Bento-Grid Design Portfolio' },
            { num: '09', name: 'FinPulse Enterprise', category: 'Corporate SaaS & Financial ROI Engine' },
            { num: '10', name: 'AURA Atelier', category: 'Luxury Minimalist E-Commerce Drawer' },
          ].map((item) => (
            <div
              key={item.num}
              className="p-4 rounded-xl bg-zinc-900/50 border border-white/[0.08] flex items-center gap-3.5 hover:border-white/20 transition-colors"
            >
              <div className="w-6 h-6 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                <Check className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <div className="min-w-0">
                <div className="font-semibold text-white truncate">
                  <span className="font-mono text-zinc-500 mr-1.5">{item.num}.</span>
                  {item.name}
                </div>
                <div className="text-[11px] text-zinc-400 truncate mt-0.5">{item.category}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Adding New Templates to Registry */}
      <section className="space-y-4">
        <div>
          <h2 className="text-xl font-bold text-white flex items-center gap-2.5">
            <Code2 className="w-5 h-5 text-cyan-400" />
            <span>4. Adding New Templates to the Registry</span>
          </h2>
          <p className="text-sm text-zinc-400 mt-1 leading-relaxed">
            To register a newly created template, place the component under <code className="text-zinc-200 font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-xs">src/templates/&lt;category&gt;/&lt;name&gt;/index.tsx</code> and append its metadata descriptor into <code className="text-zinc-200 font-mono bg-zinc-800 px-1.5 py-0.5 rounded text-xs">src/data/templates-registry.ts</code>. The search filter, viewport preview simulator, and top-to-down hover video preview will automatically mount it.
          </p>
        </div>
      </section>
    </div>
  );
}
export default DocsView;
