import React, { useState } from 'react';
import {
  Sparkles,
  ArrowRight,
  Shield,
  Cpu,
  Layers,
  Terminal,
  Play,
  Check,
  ChevronRight,
  Zap,
  Lock,
  Database,
  Users,
  Activity,
  ArrowLeft,
} from 'lucide-react';

interface PipelinePreset {
  id: string;
  name: string;
  description: string;
  trigger: string;
  agentCount: number;
  tools: string[];
  sampleOutput: string;
}

export function ModernWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('annual');
  const [activePreset, setActivePreset] = useState<string>('preset-code');
  const [isSimulating, setIsSimulating] = useState(false);
  const [simulationLog, setSimulationLog] = useState<string[]>([]);
  const [teamSeats, setTeamSeats] = useState(25);
  const [trialEmail, setTrialEmail] = useState('');
  const [trialSubmitted, setTrialSubmitted] = useState(false);

  const presets: Record<string, PipelinePreset> = {
    'preset-code': {
      id: 'preset-code',
      name: 'Autonomous Code Review & AST Audit',
      description: 'Scans pull requests, detects semantic race conditions, and writes automated regression tests.',
      trigger: 'git.push:main // PR #419',
      agentCount: 3,
      tools: ['@ast_parser', '@memory_leak_probe', '@security_audit'],
      sampleOutput: '✓ Analyzed 14 files (1,248 LOC). Detected 0 memory safety leaks. Emitted 2 AST optimization patches with 100% test coverage.',
    },
    'preset-data': {
      id: 'preset-data',
      name: 'Zero-Downtime Database Migration Swarm',
      description: 'Orchestrates schema transformations across multi-region Postgres and ClickHouse shards.',
      trigger: 'cron:daily_0200_utc',
      agentCount: 4,
      tools: ['@shard_inspector', '@replication_sentinel', '@checksum_validator'],
      sampleOutput: '✓ Validated 84M records across 6 EU shards. Zero replication lag detected. Backfill completed in 4m 12s.',
    },
    'preset-sec': {
      id: 'preset-sec',
      name: 'Incident Forensics & Zero-Trust Sandbox',
      description: 'Isolates anomalous runtime API payloads and generates signed cryptographic attestation receipts.',
      trigger: 'audit.alert:anomaly_score > 0.85',
      agentCount: 2,
      tools: ['@ebpf_trace', '@sandbox_quarantine', '@sigstore_signer'],
      sampleOutput: '✓ Quarantined rogue worker container 0x9f4a. Cryptographic audit bundle dispatched to SecOps team.',
    },
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimulationLog([]);

    const steps = [
      'Initializing isolated WebAssembly sandbox runtime...',
      `Spawning ${presets[activePreset].agentCount} autonomous workers with tool clearances: ${presets[activePreset].tools.join(', ')}...`,
      'Executing multi-turn neural reasoning over AST semantic graph...',
      presets[activePreset].sampleOutput,
    ];

    steps.forEach((step, idx) => {
      setTimeout(() => {
        setSimulationLog((prev) => [...prev, step]);
        if (idx === steps.length - 1) {
          setIsSimulating(false);
        }
      }, (idx + 1) * 600);
    });
  };

  const handleTrialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!trialEmail.trim()) return;
    setTrialSubmitted(true);
    setTimeout(() => {
      setTrialSubmitted(false);
      setTrialEmail('');
    }, 4000);
  };

  const currentPreset = presets[activePreset];

  return (
    <div className="min-h-screen bg-[#080c15] text-[#f1f5f9] font-sans selection:bg-[#2563eb] selection:text-white antialiased">
      {/* Floating Gallery Return Control */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1e293b] text-white text-xs font-mono hover:bg-[#334155] transition-colors cursor-pointer border border-[#334155] shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#38bdf8]" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Top Modern Header */}
      <header className="border-b border-[#1e293b]/70 bg-[#080c15]/90 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#2563eb] text-white flex items-center justify-center font-bold shadow-md shadow-[#2563eb]/30">
              <Sparkles className="w-4 h-4" />
            </div>
            <span className="font-bold text-base tracking-tight text-white">
              Synapse AI
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#1e293b] text-[#38bdf8] border border-[#334155] hidden sm:inline-block">
              v4.2 Engine
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#94a3b8]">
            <a href="#demo" className="hover:text-white transition-colors">Interactive Demo</a>
            <a href="#capabilities" className="hover:text-white transition-colors">Architecture</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#security" className="hover:text-white transition-colors">Enterprise Trust</a>
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="#pricing"
              className="text-xs font-medium text-[#94a3b8] hover:text-white transition-colors hidden sm:inline"
            >
              Sign In
            </a>
            <button
              onClick={() => {
                const el = document.getElementById('demo');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-4 py-2 rounded-lg bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs transition-colors cursor-pointer shadow-md shadow-[#2563eb]/20"
            >
              Launch Live Sandbox
            </button>
          </div>
        </div>
      </header>

      {/* Modern Hero Section */}
      <section className="relative pt-20 pb-24 overflow-hidden border-b border-[#1e293b]/50">
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1e293b]/80 border border-[#334155] text-xs text-[#38bdf8] font-mono">
            <span className="w-2 h-2 rounded-full bg-[#38bdf8] animate-pulse" />
            <span>DETERMINISTIC WORKFLOW ENGINE FOR ENGINEERING TEAMS</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight leading-tight max-w-4xl mx-auto">
            Autonomous Software Agents with Cryptographic Certainty.
          </h1>

          <p className="text-base sm:text-lg text-[#94a3b8] max-w-2xl mx-auto leading-relaxed">
            Eliminate operational toil with sandboxed, multi-agent pipelines that inspect codebases, execute
            migrations, and audit infrastructure with zero hallucination risk.
          </p>

          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => {
                const el = document.getElementById('demo');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-sm transition-all shadow-lg shadow-[#2563eb]/30 flex items-center gap-2 cursor-pointer"
            >
              <span>Test Interactive Engine</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const el = document.getElementById('pricing');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="px-6 py-3 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-white font-semibold text-sm transition-colors border border-[#334155] cursor-pointer"
            >
              Review Architecture Plans
            </button>
          </div>
        </div>

        {/* Live Interactive Product UI Preview Showcase */}
        <div id="demo" className="max-w-6xl mx-auto px-6 mt-16">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl shadow-2xl overflow-hidden">
            {/* Window Chrome Header */}
            <div className="bg-[#1e293b]/70 px-4 py-3 border-b border-[#1e293b] flex items-center justify-between text-xs font-mono text-[#94a3b8]">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                <span className="w-3 h-3 rounded-full bg-[#10b981]" />
                <span className="ml-2 text-slate-300 font-semibold">synapse-agent-orchestrator.wasm</span>
              </div>
              <div className="flex items-center gap-4">
                <span>LATENCY: 14ms</span>
                <span className="text-[#38bdf8]">SANDBOX: SECURE</span>
              </div>
            </div>

            {/* Interactive Control Deck */}
            <div className="p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
              {/* Left Selector: Presets */}
              <div className="lg:col-span-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-[#64748b] block">
                  Select Pipeline Preset:
                </span>
                {Object.values(presets).map((p) => (
                  <button
                    key={p.id}
                    onClick={() => {
                      setActivePreset(p.id);
                      setSimulationLog([]);
                    }}
                    className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                      activePreset === p.id
                        ? 'bg-[#1e293b] border-[#2563eb] text-white shadow-md'
                        : 'bg-[#0b0f19] border-[#1e293b] text-[#94a3b8] hover:text-white hover:border-[#334155]'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs font-bold mb-1">
                      <span>{p.name}</span>
                      <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-[#080c15] text-[#38bdf8]">
                        {p.agentCount} Agents
                      </span>
                    </div>
                    <p className="text-[11px] text-[#64748b] leading-snug line-clamp-2">
                      {p.description}
                    </p>
                  </button>
                ))}

                <button
                  onClick={handleRunSimulation}
                  disabled={isSimulating}
                  className="w-full mt-4 py-3 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs tracking-wider transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-[#2563eb]/20 disabled:opacity-50"
                >
                  <Play className={`w-3.5 h-3.5 ${isSimulating ? 'animate-spin' : ''}`} />
                  <span>{isSimulating ? 'Executing Swarm...' : 'Run Live Agent Execution'}</span>
                </button>
              </div>

              {/* Right Output Terminal & Trace */}
              <div className="lg:col-span-8 bg-[#080c15] border border-[#1e293b] rounded-xl p-5 font-mono text-xs space-y-4 min-h-[320px] flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] text-[#64748b] pb-2 border-b border-[#1e293b]">
                    <span>TRIGGER: {currentPreset.trigger}</span>
                    <span className="text-[#38bdf8]">TOOLS: {currentPreset.tools.join(', ')}</span>
                  </div>

                  {simulationLog.length === 0 ? (
                    <div className="py-12 text-center text-[#64748b] space-y-2">
                      <Terminal className="w-8 h-8 text-[#334155] mx-auto" />
                      <p>Click "Run Live Agent Execution" to simulate the sandboxed multi-agent swarm.</p>
                    </div>
                  ) : (
                    <div className="space-y-2 text-[#94a3b8]">
                      {simulationLog.map((log, idx) => (
                        <div key={idx} className="flex items-start gap-2">
                          <span className="text-[#38bdf8] font-bold">›</span>
                          <span className={idx === simulationLog.length - 1 && !isSimulating ? 'text-emerald-400 font-semibold' : ''}>
                            {log}
                          </span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-[#1e293b] flex items-center justify-between text-[11px] text-[#64748b]">
                  <span>ISOLATION: WASI MEMORY ISOLATED</span>
                  <span>ENCRYPTION: AES-256 GCM</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Architectural Pillars */}
      <section id="capabilities" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#38bdf8]">
            ENTERPRISE ARCHITECTURE
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered for Mission-Critical Production.
          </h2>
          <p className="text-sm text-[#94a3b8] max-w-xl mx-auto">
            Unlike probabilistic wrappers, Synapse executes deterministically with hardware-level isolation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
              <Shield className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Cryptographic Proof of Inference</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Every token, tool invocation, and API payload is stamped with a zero-knowledge signature,
              guaranteeing unforgeable audit compliance for SOC2 and FedRAMP teams.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
              <Cpu className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Sub-Millisecond WASM Sandboxing</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Agents execute arbitrary compute in isolated WebAssembly micro-containers that spin up in under
              400 microseconds with zero shared heap risk.
            </p>
          </div>

          <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-6 space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#2563eb]/20 text-[#38bdf8] flex items-center justify-center">
              <Database className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold text-white">Continuous Semantic State Graph</h3>
            <p className="text-xs text-[#94a3b8] leading-relaxed">
              Long-term agent context is serialized into a hierarchical Merkle DAG, allowing deterministic
              time-travel debugging and rollback of multi-hour workflows.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Matrix & ROI Calculator */}
      <section id="pricing" className="py-24 bg-[#090d18] border-y border-[#1e293b]/70">
        <div className="max-w-7xl mx-auto px-6 space-y-16">
          <div className="text-center space-y-4">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Predictable, Transparent Investment.
            </h2>
            <p className="text-sm text-[#94a3b8]">
              Scale autonomous engineering workflows with zero hidden inference multipliers.
            </p>

            <div className="flex items-center justify-center gap-3 pt-2">
              <span className={`text-xs font-semibold ${billingCycle === 'monthly' ? 'text-white' : 'text-[#64748b]'}`}>
                Monthly
              </span>
              <button
                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'annual' : 'monthly')}
                className="w-12 h-6 rounded-full bg-[#1e293b] border border-[#334155] p-1 flex items-center transition-colors cursor-pointer"
              >
                <div
                  className={`w-4 h-4 rounded-full bg-[#38bdf8] transition-transform ${
                    billingCycle === 'annual' ? 'translate-x-6' : 'translate-x-0'
                  }`}
                />
              </button>
              <span className={`text-xs font-semibold flex items-center gap-1.5 ${billingCycle === 'annual' ? 'text-white' : 'text-[#64748b]'}`}>
                <span>Annual Billing</span>
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                  SAVE 20%
                </span>
              </span>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Starter */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Starter Engine</h3>
                  <p className="text-xs text-[#94a3b8] mt-1">For focused engineering squads automating CI/CD tasks.</p>
                </div>
                <div className="text-3xl font-extrabold text-white">
                  ${billingCycle === 'annual' ? '39' : '49'}
                  <span className="text-xs font-normal text-[#64748b]"> / seat / mo</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#94a3b8] pt-2">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Up to 5 Autonomous Agents</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 10,000 WASM Executions / mo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> GitHub & GitLab Webhook Triggers</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Standard Community Support</li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-white font-semibold text-xs transition-colors cursor-pointer">
                Start 14-Day Free Trial
              </button>
            </div>

            {/* Scale Pro (Featured) */}
            <div className="bg-[#0f172a] border-2 border-[#2563eb] rounded-2xl p-8 space-y-6 flex flex-col justify-between relative shadow-2xl shadow-[#2563eb]/20">
              <div className="absolute top-0 right-6 -translate-y-1/2 px-3 py-1 rounded-full bg-[#2563eb] text-white font-bold text-[10px] font-mono tracking-wider">
                RECOMMENDED
              </div>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Scale Enterprise</h3>
                  <p className="text-xs text-[#94a3b8] mt-1">For high-throughput organizations with strict SOC2 requirements.</p>
                </div>
                <div className="text-3xl font-extrabold text-white">
                  ${billingCycle === 'annual' ? '119' : '149'}
                  <span className="text-xs font-normal text-[#64748b]"> / seat / mo</span>
                </div>
                <ul className="space-y-2.5 text-xs text-[#94a3b8] pt-2">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Unlimited Autonomous Agent Swarms</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 500,000 WASM Executions / mo</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Zero-Knowledge Cryptographic Attestations</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Dedicated VPC Peering & Okta SSO</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> 99.99% Availability SLA</li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs transition-colors cursor-pointer shadow-lg shadow-[#2563eb]/30">
                Deploy Scale Cluster
              </button>
            </div>

            {/* Custom Enterprise */}
            <div className="bg-[#0f172a] border border-[#1e293b] rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-white">Air-Gapped Sovereign</h3>
                  <p className="text-xs text-[#94a3b8] mt-1">For regulated financial and defense platforms requiring on-premise execution.</p>
                </div>
                <div className="text-3xl font-extrabold text-white">Custom</div>
                <ul className="space-y-2.5 text-xs text-[#94a3b8] pt-2">
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> On-Premise Air-Gapped Deployment</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Custom LLM Weights & Hardware Acceleration</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Dedicated Technical Account Lead</li>
                  <li className="flex items-center gap-2"><Check className="w-4 h-4 text-emerald-400" /> Custom Legal & Security Compliance DPA</li>
                </ul>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-[#1e293b] hover:bg-[#334155] text-white font-semibold text-xs transition-colors cursor-pointer">
                Contact Enterprise Architecture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Modern Newsletter & Conversion Deck */}
      <section className="py-20 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-3">
          <h2 className="text-3xl font-extrabold text-white tracking-tight">
            Ready to deploy deterministic software swarms?
          </h2>
          <p className="text-sm text-[#94a3b8]">
            Join 3,400+ engineering leaders automating systems maintenance with Synapse AI.
          </p>
        </div>

        <form onSubmit={handleTrialSubmit} className="max-w-md mx-auto flex items-center gap-2">
          <input
            type="email"
            value={trialEmail}
            onChange={(e) => setTrialEmail(e.target.value)}
            placeholder="work.email@company.com"
            className="flex-1 bg-[#0f172a] border border-[#1e293b] rounded-xl px-4 py-2.5 text-xs text-white placeholder:text-[#64748b] focus:outline-none focus:border-[#2563eb]"
          />
          <button
            type="submit"
            className="px-5 py-2.5 rounded-xl bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Get API Key
          </button>
        </form>

        {trialSubmitted && (
          <p className="text-xs text-emerald-400 font-mono">
            ✓ Sandbox provisioned! Check your inbox for the cryptographic cluster access token.
          </p>
        )}
      </section>

      {/* Modern Detailed Footer */}
      <footer className="border-t border-[#1e293b] bg-[#050810] py-12 text-xs text-[#64748b]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="space-y-2">
            <span className="font-bold text-white">Platform</span>
            <p>Deterministic Swarms</p>
            <p>WASM Sandbox</p>
            <p>Zero-Knowledge Attestation</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white">Resources</span>
            <p>Architecture Docs</p>
            <p>API Reference</p>
            <p>Status Dashboard</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white">Security</span>
            <p>SOC2 Type II Report</p>
            <p>FedRAMP Compliance</p>
            <p>Responsible Disclosure</p>
          </div>
          <div className="space-y-2">
            <span className="font-bold text-white">Organization</span>
            <p>About Synapse</p>
            <p>Engineering Careers</p>
            <p>© 2026 Synapse AI Inc.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
