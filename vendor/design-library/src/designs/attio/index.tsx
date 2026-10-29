import React, { useState } from 'react';
import {
  Database,
  GitBranch,
  Sparkles,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Plus,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  AlertTriangle,
  Play,
  Layers,
  Users,
  Building2,
  TrendingUp,
  Workflow,
} from 'lucide-react';

interface DealRecord {
  id: string;
  company: string;
  domain: string;
  arr: number;
  stage: 'Discovery' | 'Evaluation' | 'Proposal' | 'Closed Won';
  healthScore: number;
  owner: { name: string; avatar: string };
  aiSignal: string;
}

const initialDeals: DealRecord[] = [
  {
    id: '1',
    company: 'Anthropic Labs',
    domain: 'anthropic.com',
    arr: 240000,
    stage: 'Proposal',
    healthScore: 94,
    owner: { name: 'Sarah Chen', avatar: 'SC' },
    aiSignal: 'CEO & CTO visited pricing page 4x in 48h',
  },
  {
    id: '2',
    company: 'Linear Systems',
    domain: 'linear.app',
    arr: 120000,
    stage: 'Closed Won',
    healthScore: 98,
    owner: { name: 'Marcus Vance', avatar: 'MV' },
    aiSignal: 'Expansion contract finalized via Stripe webhook',
  },
  {
    id: '3',
    company: 'Mistral Compute',
    domain: 'mistral.ai',
    arr: 180000,
    stage: 'Evaluation',
    healthScore: 82,
    owner: { name: 'Elena Rostova', avatar: 'ER' },
    aiSignal: 'Security questionnaire submitted & reviewed',
  },
  {
    id: '4',
    company: 'Perplexity Engine',
    domain: 'perplexity.ai',
    arr: 310000,
    stage: 'Discovery',
    healthScore: 76,
    owner: { name: 'Alex Rivera', avatar: 'AR' },
    aiSignal: 'Lead enriched via automated LinkedIn crawler',
  },
];

export function AttioRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [deals, setDeals] = useState<DealRecord[]>(initialDeals);
  const [activeWorkflowStep, setActiveWorkflowStep] = useState<number>(3);
  const [isRunningWorkflow, setIsRunningWorkflow] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStage, setFilterStage] = useState<string>('All');

  const cycleStage = (dealId: string) => {
    const stages: DealRecord['stage'][] = ['Discovery', 'Evaluation', 'Proposal', 'Closed Won'];
    setDeals((prev) =>
      prev.map((d) => {
        if (d.id !== dealId) return d;
        const currentIdx = stages.indexOf(d.stage);
        const nextIdx = (currentIdx + 1) % stages.length;
        return { ...d, stage: stages[nextIdx] };
      })
    );
  };

  const handleRunWorkflow = () => {
    setIsRunningWorkflow(true);
    setActiveWorkflowStep(1);
    setTimeout(() => {
      setActiveWorkflowStep(2);
      setTimeout(() => {
        setActiveWorkflowStep(3);
        setIsRunningWorkflow(false);
      }, 700);
    }, 600);
  };

  const getStageBadge = (stage: DealRecord['stage']) => {
    switch (stage) {
      case 'Closed Won':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">Closed Won</span>;
      case 'Proposal':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-purple-500/15 text-purple-400 border border-purple-500/30">Proposal</span>;
      case 'Evaluation':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-400 border border-blue-500/30">Evaluation</span>;
      case 'Discovery':
        return <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-500/15 text-amber-400 border border-amber-500/30">Discovery</span>;
    }
  };

  const filteredDeals = deals.filter((d) => {
    const matchesSearch = d.company.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStage = filterStage === 'All' || d.stage === filterStage;
    return matchesSearch && matchesStage;
  });

  return (
    <div className="min-h-screen bg-[#090b10] text-[#ededed] font-sans selection:bg-[#3b82f6] selection:text-white relative overflow-hidden">
      {/* Top Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] bg-gradient-to-b from-[#3b82f6]/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#090b10]/85 border-b border-[#1c1f2b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Attio Wordmark */}
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <div className="w-6 h-6 rounded-md bg-[#3b82f6] flex items-center justify-center font-bold text-white text-xs">
                A
              </div>
              <span className="font-bold text-sm tracking-tight text-white">Attio</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#8a91a0]">
              <span className="hover:text-white cursor-pointer transition-colors">Product</span>
              <span className="hover:text-white cursor-pointer transition-colors">Workflows</span>
              <span className="hover:text-white cursor-pointer transition-colors">Integrations</span>
              <span className="hover:text-white cursor-pointer transition-colors">Customers</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1 rounded bg-[#161822] hover:bg-[#202330] border border-[#272b3a] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://attio.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#8a91a0] hover:text-white transition-colors"
            >
              <span>attio.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#8a91a0] hover:text-white transition-colors px-2 py-1">
              Sign in
            </button>
            <button className="text-xs px-3 py-1.5 rounded-md bg-[#3b82f6] hover:bg-[#4f90f8] text-white font-medium transition-all shadow-md shadow-[#3b82f6]/25">
              Start for free
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#141724] border border-[#24293c] text-xs text-[#9aa3b8] mb-8 hover:border-[#3b82f6]/40 cursor-pointer transition-all">
            <Sparkles className="w-3.5 h-3.5 text-[#3b82f6]" />
            <span className="text-white font-medium">Welcome to Agentic Revenue</span>
            <span className="text-slate-600">·</span>
            <span>The CRM built for the agent era</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white max-w-3xl mx-auto leading-[1.08] mb-6">
            Welcome to agentic revenue.
          </h1>

          <p className="text-base sm:text-xl text-[#8a91a0] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            The intelligent system that never sleeps. Picks up leads at 2am. Catches renewals before they slip. Hands you answers. Built for high-velocity teams and agents.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-lg bg-[#3b82f6] hover:bg-[#4f90f8] text-white text-sm font-semibold transition-all shadow-xl shadow-[#3b82f6]/25 flex items-center gap-2 cursor-pointer">
              <span>Start building for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 rounded-lg bg-[#141722] hover:bg-[#1d2130] border border-[#282d3f] text-sm text-white font-medium transition-all">
              Book a live demo
            </button>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Relational CRM Pipeline Table */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#222736] bg-[#0e1017] shadow-2xl overflow-hidden">
            {/* Table Toolbar */}
            <div className="bg-[#131620] border-b border-[#202534] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-[#3b82f6]" />
                <span className="text-xs font-bold text-white font-mono-tech">Companies & Enterprise Opportunities</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#1c202e] text-slate-400 font-mono-tech">
                  {filteredDeals.length} deals
                </span>
              </div>

              {/* Filters */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Search accounts..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-40 sm:w-48 bg-[#181c28] border border-[#262c3e] rounded-md pl-8 pr-3 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#3b82f6]"
                  />
                </div>
                <select
                  value={filterStage}
                  onChange={(e) => setFilterStage(e.target.value)}
                  className="bg-[#181c28] border border-[#262c3e] rounded-md px-2.5 py-1 text-xs text-slate-300 focus:outline-none"
                >
                  <option value="All">All Stages</option>
                  <option value="Discovery">Discovery</option>
                  <option value="Evaluation">Evaluation</option>
                  <option value="Proposal">Proposal</option>
                  <option value="Closed Won">Closed Won</option>
                </select>
              </div>
            </div>

            {/* Table Header */}
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="bg-[#10131d] border-b border-[#1c202d] text-slate-400 font-mono-tech uppercase text-[10px] tracking-wider">
                    <th className="py-2.5 px-4 font-semibold">Account / Company</th>
                    <th className="py-2.5 px-4 font-semibold">ARR ($)</th>
                    <th className="py-2.5 px-4 font-semibold">Deal Stage (Click to Cycle)</th>
                    <th className="py-2.5 px-4 font-semibold">Health</th>
                    <th className="py-2.5 px-4 font-semibold">Owner</th>
                    <th className="py-2.5 px-4 font-semibold">AI Agent Real-Time Signal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#181b26]">
                  {filteredDeals.map((deal) => (
                    <tr key={deal.id} className="hover:bg-[#131622] transition-colors group">
                      <td className="py-3 px-4">
                        <div className="font-semibold text-white group-hover:text-[#3b82f6] transition-colors">
                          {deal.company}
                        </div>
                        <div className="text-[11px] text-slate-500 font-mono-tech">{deal.domain}</div>
                      </td>

                      <td className="py-3 px-4 font-mono-tech text-slate-200 font-bold">
                        ${(deal.arr / 1000).toFixed(0)}k
                      </td>

                      <td className="py-3 px-4">
                        <button
                          onClick={() => cycleStage(deal.id)}
                          className="cursor-pointer hover:opacity-80 transition-opacity"
                          title="Click to advance stage"
                        >
                          {getStageBadge(deal.stage)}
                        </button>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-1.5 rounded-full bg-[#1e2333] overflow-hidden">
                            <div
                              className="h-full bg-emerald-400 rounded-full"
                              style={{ width: `${deal.healthScore}%` }}
                            />
                          </div>
                          <span className="font-mono-tech text-[11px] text-slate-400">{deal.healthScore}%</span>
                        </div>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <span className="w-6 h-6 rounded-full bg-[#202538] text-[10px] font-mono-tech font-bold text-slate-300 flex items-center justify-center">
                            {deal.owner.avatar}
                          </span>
                          <span className="text-slate-300 text-xs">{deal.owner.name}</span>
                        </div>
                      </td>

                      <td className="py-3 px-4 text-slate-300 text-[11px] font-mono-tech flex items-center gap-1.5">
                        <Sparkles className="w-3.5 h-3.5 text-amber-400 flex-shrink-0" />
                        <span className="truncate max-w-[280px]">{deal.aiSignal}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="p-3 bg-[#0c0e14] border-t border-[#1b1f2c] flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
              <span>Universal Context Active</span>
              <span>Tip: Click any stage pill to cycle between Discovery &rarr; Closed Won</span>
            </div>
          </div>
        </section>

        {/* WORKFLOW AUTOMATION BUILDER CANVAS */}
        <section className="max-w-5xl mx-auto px-4 py-16 border-t border-[#1a1e2b]">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-mono-tech text-[#3b82f6] uppercase tracking-wider block mb-2">Automated Motion</span>
            <h2 className="text-2xl sm:text-4xl font-bold text-white mb-3">
              Visual Workflow Automation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              Trigger actions when deals update or webhooks fire. Let agents execute research sequences instantly.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-[#0f1118] border border-[#222736] relative">
            <div className="flex items-center justify-between pb-4 border-b border-[#1e2230] mb-6">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-white">
                <Workflow className="w-4 h-4 text-[#3b82f6]" />
                <span>Workflow: Inbound Enterprise Routing & AI Briefing</span>
              </div>
              <button
                onClick={handleRunWorkflow}
                disabled={isRunningWorkflow}
                className="px-3 py-1.5 rounded-lg bg-[#3b82f6] hover:bg-[#4f90f8] disabled:opacity-50 text-white text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
              >
                <Play className={`w-3.5 h-3.5 ${isRunningWorkflow ? 'animate-spin' : ''}`} />
                <span>{isRunningWorkflow ? 'Executing...' : 'Run Test Workflow'}</span>
              </button>
            </div>

            {/* Connected Node Sequence */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 relative">
              <div
                className={`p-4 rounded-xl border transition-all ${
                  activeWorkflowStep >= 1
                    ? 'border-[#3b82f6] bg-[#161a29] shadow-lg shadow-[#3b82f6]/10'
                    : 'border-[#222736] bg-[#11131c]'
                }`}
              >
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase mb-1">Step 01: Trigger</div>
                <div className="text-xs font-bold text-white mb-1">Inbound Calendar Booking</div>
                <div className="text-[11px] text-slate-400">Prospect requests enterprise demo via website</div>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all ${
                  activeWorkflowStep >= 2
                    ? 'border-[#3b82f6] bg-[#161a29] shadow-lg shadow-[#3b82f6]/10'
                    : 'border-[#222736] bg-[#11131c]'
                }`}
              >
                <div className="text-[10px] font-mono-tech text-slate-400 uppercase mb-1">Step 02: AI Agent</div>
                <div className="text-xs font-bold text-white mb-1">Enrichment &amp; Signal Score</div>
                <div className="text-[11px] text-slate-400">Pulls tech stack, headcount, and recent funding</div>
              </div>

              <div
                className={`p-4 rounded-xl border transition-all ${
                  activeWorkflowStep >= 3
                    ? 'border-emerald-500 bg-[#122320] shadow-lg shadow-emerald-500/10'
                    : 'border-[#222736] bg-[#11131c]'
                }`}
              >
                <div className="text-[10px] font-mono-tech text-emerald-400 uppercase mb-1">Step 03: Action</div>
                <div className="text-xs font-bold text-white mb-1">Slack AE Briefing & CRM Sync</div>
                <div className="text-[11px] text-slate-400">Prepares talking points for account executive</div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#181b26] py-12 bg-[#090b10] text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Attio</span>
            <span>— The CRM for agentic revenue</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://attio.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official attio.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default AttioRecreation;
