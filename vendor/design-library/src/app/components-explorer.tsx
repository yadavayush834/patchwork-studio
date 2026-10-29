import React, { useState } from 'react';
import {
  Button,
  Badge,
  Card,
  Input,
  Tabs,
  Modal,
  Accordion,
  StatsCard,
  Skeleton,
} from '@/components/ui';
import {
  Sparkles,
  Copy,
  Check,
  Search,
  Sliders,
  Bell,
  Heart,
  Mail,
  Zap,
  Shield,
  Activity,
  Layers,
  Terminal,
} from 'lucide-react';

export function ComponentsExplorer() {
  const [copiedSnippet, setCopiedSnippet] = useState<string | null>(null);
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [activeTabDemo, setActiveTabDemo] = useState('overview');
  const [btnLoading, setBtnLoading] = useState(false);
  const [sampleInputVal, setSampleInputVal] = useState('');

  const copyCode = (snippet: string, id: string) => {
    navigator.clipboard?.writeText(snippet);
    setCopiedSnippet(id);
    setTimeout(() => setCopiedSnippet(null), 2000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Header */}
      <div className="relative rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-8 sm:p-10 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-1/4 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span>Design System Primitives · Production Ready</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight font-grotesk">
            Reusable UI Component Primitives
          </h1>
          <p className="text-sm sm:text-base text-zinc-400 leading-relaxed max-w-2xl">
            Self-contained, accessible, and theme-neutral design primitives. Copy any component directly into your independent projects with zero extra dependencies beyond Tailwind CSS and Lucide icons.
          </p>
        </div>
      </div>

      {/* 1. BUTTONS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Zap className="w-5 h-5 text-amber-400" /> Buttons & Triggers
            </h2>
            <p className="text-xs text-zinc-400 mt-0.5">
              Variants: primary, secondary, outline, ghost, glow, neo-brutalist, danger. With loading states and icon slots.
            </p>
          </div>
          <button
            onClick={() =>
              copyCode(
                `<Button variant="glow" leftIcon={<Sparkles className="w-4 h-4" />}>\n  Synthesize Pipeline\n</Button>`,
                'btn-code'
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 font-mono transition-colors cursor-pointer"
          >
            {copiedSnippet === 'btn-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSnippet === 'btn-code' ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] flex flex-wrap items-center gap-4">
          <Button variant="primary">Primary Cyan</Button>
          <Button variant="secondary">Secondary Slate</Button>
          <Button variant="outline">Outline Border</Button>
          <Button variant="ghost">Ghost Trigger</Button>
          <Button variant="glow" leftIcon={<Sparkles className="w-4 h-4" />}>
            Gradient Glow
          </Button>
          <Button variant="neo">Neo-Brutalist</Button>
          <Button variant="danger">Destructive Danger</Button>
          <Button
            variant="primary"
            isLoading={btnLoading}
            onClick={() => {
              setBtnLoading(true);
              setTimeout(() => setBtnLoading(false), 1500);
            }}
          >
            {btnLoading ? 'Processing...' : 'Click for Loading State'}
          </Button>
        </div>
      </section>

      {/* 2. BADGES & STATUS PILLS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" /> Badges & Status Indicators
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Pills for telemetry, tags, alerts, and metrics with pulsing dot support.
            </p>
          </div>
          <button
            onClick={() =>
              copyCode(
                `<Badge variant="emerald" dot>\n  API 99.99% UP\n</Badge>`,
                'badge-code'
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 font-mono transition-colors cursor-pointer"
          >
            {copiedSnippet === 'badge-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSnippet === 'badge-code' ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] flex flex-wrap items-center gap-4">
          <Badge variant="cyan" dot>
            Telemetry: 148 tok/s
          </Badge>
          <Badge variant="emerald" dot>
            Production Active
          </Badge>
          <Badge variant="purple" dot>
            Multi-Modal RAG
          </Badge>
          <Badge variant="amber" dot>
            Rate-Limited (429)
          </Badge>
          <Badge variant="rose" dot>
            Cluster Degraded
          </Badge>
          <Badge variant="neo">★ HACKATHON WINNER</Badge>
          <Badge variant="outline">v4.8 Release</Badge>
        </div>
      </section>

      {/* 3. METRIC & STATS CARDS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" /> Stats & Metric Cards
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Executive dashboard cards with trend indicators and icon slots.
            </p>
          </div>
          <button
            onClick={() =>
              copyCode(
                `<StatsCard\n  label="Net Cash Yield"\n  value="$48.2M"\n  change="+18.4%"\n  changeType="positive"\n  icon={<DollarSign className="w-5 h-5" />}\n/>`,
                'stats-code'
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 font-mono transition-colors cursor-pointer"
          >
            {copiedSnippet === 'stats-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSnippet === 'stats-code' ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          <StatsCard
            label="Vector Query Latency"
            value="1.42ms"
            change="-0.38ms"
            changeType="positive"
            description="p99 in-memory HNSW index response"
            icon={<Zap className="w-5 h-5" />}
          />
          <StatsCard
            label="Active Agent Swarms"
            value="12 Units"
            change="+4 today"
            changeType="positive"
            description="Distributed subagent coordination mesh"
            icon={<Sparkles className="w-5 h-5" />}
          />
          <StatsCard
            label="Memory Pressure"
            value="24.8%"
            change="Stable"
            changeType="neutral"
            description="Zero swap allocation required"
            icon={<Activity className="w-5 h-5" />}
          />
        </div>
      </section>

      {/* 4. FORM INPUTS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Terminal className="w-5 h-5 text-amber-400" /> Inputs & Search Bars
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Styled inputs with prefix/suffix icons, helper texts, and error states.
            </p>
          </div>
          <button
            onClick={() =>
              copyCode(
                `<Input\n  label="Model Prompt"\n  placeholder="Type query..."\n  leftIcon={<Search className="w-4 h-4" />}\n/>`,
                'input-code'
              )
            }
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs text-zinc-300 font-mono transition-colors cursor-pointer"
          >
            {copiedSnippet === 'input-code' ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSnippet === 'input-code' ? 'Copied' : 'Copy Code'}</span>
          </button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Input
            label="Search Component Index"
            placeholder="Search 10 templates or primitives..."
            leftIcon={<Search className="w-4 h-4" />}
            value={sampleInputVal}
            onChange={(e) => setSampleInputVal(e.target.value)}
            helperText="Try typing 'auth', 'terminal', or 'bento'"
          />
          <Input
            label="API Auth Secret"
            placeholder="sk-live-9481..."
            leftIcon={<Shield className="w-4 h-4" />}
            error="API key expired. Re-authenticate via VaultGuard."
          />
        </div>
      </section>

      {/* 5. TABS & MODALS */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Layers className="w-5 h-5 text-cyan-400" /> Navigation Tabs & Modals
            </h2>
            <p className="text-xs text-slate-400 mt-0.5">
              Interactive segmented controls, pills, and accessible keyboard-dismissable dialogs.
            </p>
          </div>
          <Button variant="secondary" size="sm" onClick={() => setIsDemoModalOpen(true)}>
            Open Demo Modal
          </Button>
        </div>

        <div className="p-6 rounded-2xl bg-zinc-900/50 border border-white/[0.08] space-y-6">
          <div>
            <span className="text-xs font-mono text-zinc-400 block mb-2">Variant: Pills</span>
            <Tabs
              tabs={[
                { id: 'overview', label: 'Cluster Overview', badge: '12' },
                { id: 'telemetry', label: 'Live Telemetry', badge: '148/s' },
                { id: 'logs', label: 'Audit Logs' },
              ]}
              activeTab={activeTabDemo}
              onChange={setActiveTabDemo}
            />
          </div>

          <div>
            <span className="text-xs font-mono text-zinc-400 block mb-2">Variant: Underline</span>
            <Tabs
              variant="underline"
              tabs={[
                { id: 'overview', label: 'Architecture' },
                { id: 'telemetry', label: 'Benchmarks' },
                { id: 'logs', label: 'Security Specs' },
              ]}
              activeTab={activeTabDemo}
              onChange={setActiveTabDemo}
            />
          </div>
        </div>

        {/* Modal Demo Dialog */}
        <Modal
          isOpen={isDemoModalOpen}
          onClose={() => setIsDemoModalOpen(false)}
          title="Interactive Modal Component"
          description="Accessible, traps keyboard escape key, supports customizable max-width."
        >
          <div className="space-y-4 text-xs text-zinc-300">
            <p>
              This modal component handles backdrop clicks, body scroll locking, and smooth fade-in animations automatically.
            </p>
            <div className="p-3 rounded-lg bg-zinc-950/80 border border-white/[0.08] font-mono text-cyan-300">
              {'export function Modal({ isOpen, onClose, children }) { ... }'}
            </div>
            <div className="flex justify-end gap-2 pt-2">
              <Button variant="outline" size="sm" onClick={() => setIsDemoModalOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" size="sm" onClick={() => setIsDemoModalOpen(false)}>
                Confirm Action
              </Button>
            </div>
          </div>
        </Modal>
      </section>

      {/* 6. ACCORDION */}
      <section className="space-y-4">
        <h2 className="text-xl font-bold text-white flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-amber-400" /> Interactive Accordion
        </h2>
        <Accordion
          defaultOpenId="acc-1"
          items={[
            {
              id: 'acc-1',
              title: 'How do I extract a template into my existing codebase?',
              content:
                'Every template is completely self-contained in its own directory (e.g. src/templates/ai/neural-canvas/index.tsx). Simply copy that single directory, ensure Tailwind CSS and Lucide icons are installed, and import the component wherever needed!',
            },
            {
              id: 'acc-2',
              title: 'Do these templates depend on external paid APIs or cloud databases?',
              content:
                'No! All templates run locally with zero external dependencies, mock states, and interactive simulation hooks. You never need an API key or paid subscription to preview or test.',
            },
            {
              id: 'acc-3',
              title: 'Can I customize the typography, color palettes, and fonts?',
              content:
                'Yes. You can swap CSS variables in src/index.css or edit design tokens in src/design-system/tokens.ts. Each template also uses standard Tailwind CSS utility classes.',
            },
          ]}
        />
      </section>
    </div>
  );
}

// Component isolation: zero runtime dependencies beyond Tailwind
