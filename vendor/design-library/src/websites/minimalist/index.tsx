import React, { useState, useEffect } from 'react';
import {
  ArrowUpRight,
  Copy,
  Check,
  ChevronDown,
  Globe,
  Clock,
  ArrowLeft,
} from 'lucide-react';

interface Project {
  id: string;
  year: string;
  title: string;
  client: string;
  role: string;
  summary: string;
  impact: string;
  stack: string[];
  link: string;
}

export function MinimalistWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeProject, setActiveProject] = useState<string | null>('p-1');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [contactSubject, setContactSubject] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [sentMessage, setSentMessage] = useState(false);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString('en-US', {
          timeZone: 'Europe/Stockholm',
          hour: '2-digit',
          minute: '2-digit',
          second: '2-digit',
          hour12: false,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const projects: Project[] = [
    {
      id: 'p-1',
      year: '2026',
      title: 'Aetheria Distributed Consensus',
      client: 'Aetheria Foundation',
      role: 'Principal Systems Architect',
      summary:
        'Engineered a deterministic, zero-allocation Raft consensus engine in Rust with sub-millisecond p99 replication latency across European geo-partitions.',
      impact: '1.2M transactions/sec with zero state divergence over 90 days.',
      stack: ['Rust', 'Tokio', 'Raft Protocol', 'Zero-Copy Serialization'],
      link: 'https://github.com',
    },
    {
      id: 'p-2',
      year: '2025',
      title: 'Kalon Interface Framework',
      client: 'Independent Project',
      role: 'Creator & Lead Maintainer',
      summary:
        'A headless UI primitive library designed exclusively for low-latency web applications with zero runtime dependencies and 100% WCAG AAA conformance.',
      impact: 'Adopted by 48,000+ developers; bundle overhead of under 3.4 kB gzipped.',
      stack: ['TypeScript', 'Web Components', 'CSS Custom Properties'],
      link: 'https://github.com',
    },
    {
      id: 'p-3',
      year: '2025',
      title: 'Sovereign Vector Engine',
      client: 'Nordic AI Research Lab',
      role: 'Lead Systems Engineer',
      summary:
        'Designed an in-memory HNSW vector search database compiled to WebAssembly for local-first biometric and cryptographic authentication.',
      impact: 'Cut client memory footprints by 64% while maintaining 99.8% recall accuracy.',
      stack: ['C++', 'WebAssembly', 'SIMD Intrinsic', 'TypeScript'],
      link: 'https://github.com',
    },
    {
      id: 'p-4',
      year: '2024',
      title: 'Meridian Operating Telemetry',
      client: 'Meridian Cloud Inc.',
      role: 'Staff Frontend Engineer',
      summary:
        'Crafted a high-density, canvas-rendered server telemetry cockpit visualising 10,000 active nodes without layout thrashing.',
      impact: 'Replaced a 14-page legacy dashboard with a unified 60fps single-surface interface.',
      stack: ['HTML5 Canvas', 'WebGL', 'TypeScript', 'EventSource SSE'],
      link: 'https://github.com',
    },
  ];

  const handleCopyEmail = () => {
    navigator.clipboard?.writeText('kaelen@vance.systems');
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactMessage.trim()) return;
    setSentMessage(true);
    setTimeout(() => {
      setSentMessage(false);
      setContactSubject('');
      setContactMessage('');
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-[#fafafa] text-[#111111] font-sans selection:bg-[#111111] selection:text-[#fafafa] antialiased">
      {/* Top Floating Utility Navigation for Returning to Gallery */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#111111] text-[#fafafa] text-xs font-mono hover:bg-[#333333] transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Primary Header */}
      <header className="max-w-4xl mx-auto px-6 pt-16 sm:pt-24 pb-12 border-b border-[#e5e5e5]">
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4">
          <div>
            <h1 className="text-xl font-medium tracking-tight text-[#111111]">
              Kaelen Vance
            </h1>
            <p className="text-sm text-[#737373] mt-0.5">
              Principal Systems & Interface Engineer
            </p>
          </div>

          <div className="flex items-center gap-6 text-xs text-[#737373] font-mono">
            <span className="flex items-center gap-1.5">
              <Globe className="w-3 h-3 text-[#111111]" />
              Stockholm, SE
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#111111]" />
              {currentTime || '14:32:00'} CET
            </span>
            <span className="text-[#111111] font-medium border-l border-[#e5e5e5] pl-4 hidden md:inline">
              Available Q3 2026
            </span>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        {/* Hero Axiom */}
        <section className="space-y-6">
          <p className="text-2xl sm:text-3xl font-light text-[#111111] leading-relaxed tracking-tight max-w-2xl">
            I architect resilient distributed systems, minimal digital primitives, and silent software.
          </p>
          <p className="text-sm sm:text-base text-[#737373] leading-relaxed max-w-xl font-light">
            Ten years focused on the boundary between systems programming and unadorned interface design.
            Dedicated to eliminating latency, unnecessary dependencies, and visual noise.
          </p>
        </section>

        {/* Selected Works Section */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-[#e5e5e5] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-[#737373] font-medium">
              01 / Selected Works
            </h2>
            <span className="text-xs text-[#737373] font-mono">2024 — 2026</span>
          </div>

          <div className="divide-y divide-[#e5e5e5]">
            {projects.map((project) => {
              const isOpen = activeProject === project.id;
              return (
                <div key={project.id} className="py-6 transition-colors">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    aria-controls={`project-${project.id}`}
                    onClick={() => setActiveProject(isOpen ? null : project.id)}
                    className="w-full text-left flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 cursor-pointer group"
                  >
                    <div className="flex items-baseline gap-4">
                      <span className="text-xs font-mono text-[#a3a3a3] w-10">
                        {project.year}
                      </span>
                      <h3 className="text-base font-medium text-[#111111] group-hover:text-[#525252] transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-4 text-xs text-[#737373] pl-14 sm:pl-0">
                      <span>{project.client}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 text-[#a3a3a3] transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-[#111111]' : ''
                        }`}
                      />
                    </div>
                  </button>

                  {/* Expandable Case Detail */}
                  {isOpen && (
                    <div id={`project-${project.id}`} className="mt-6 pl-0 sm:pl-14 space-y-4 text-xs leading-relaxed text-[#525252]">
                      <p className="text-sm text-[#333333] max-w-2xl leading-relaxed">
                        {project.summary}
                      </p>

                      <div className="pt-2 flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-12">
                        <div>
                          <span className="text-[11px] text-[#a3a3a3] uppercase font-mono block">
                            Outcome
                          </span>
                          <span className="font-medium text-[#111111]">{project.impact}</span>
                        </div>

                        <div>
                          <span className="text-[11px] text-[#a3a3a3] uppercase font-mono block">
                            Core Technologies
                          </span>
                          <span className="font-mono text-[#525252]">
                            {project.stack.join(' · ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Principles of Restraint */}
        <section className="space-y-8">
          <div className="border-b border-[#e5e5e5] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-[#737373] font-medium">
              02 / Principles of Restraint
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2">
              <span className="text-xs font-mono text-[#a3a3a3]">Axiom 01</span>
              <h3 className="text-sm font-medium text-[#111111]">Software should be silent</h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Tools exist to amplify human intent, not demand unearned attention. A well-built system
                acts with quiet precision and zero gratuitous animation.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#a3a3a3]">Axiom 02</span>
              <h3 className="text-sm font-medium text-[#111111]">Latency is a design defect</h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Network boundaries and state mutations must be deterministic. When latency exceeds 16
                milliseconds, user cognitive flow fractures.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#a3a3a3]">Axiom 03</span>
              <h3 className="text-sm font-medium text-[#111111]">Restraint outperforms ornament</h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Ornamentation frequently compensates for ambiguous hierarchy. If typographic proportion
                and spacing are sound, decoration becomes redundant.
              </p>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-[#a3a3a3]">Axiom 04</span>
              <h3 className="text-sm font-medium text-[#111111]">Fewer dependencies, greater durability</h3>
              <p className="text-xs text-[#737373] leading-relaxed">
                Every external library introduces operational risk and maintenance debt. Build on web
                standards and enduring algorithmic primitives.
              </p>
            </div>
          </div>
        </section>

        {/* Essays & Selected Writings */}
        <section className="space-y-8">
          <div className="border-b border-[#e5e5e5] pb-3">
            <h2 className="text-xs uppercase tracking-widest text-[#737373] font-medium">
              03 / Selected Writings
            </h2>
          </div>

          <div className="divide-y divide-[#e5e5e5] text-xs">
            <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group cursor-pointer">
              <span className="font-medium text-[#111111] group-hover:text-[#525252] transition-colors">
                The Thermodynamic Cost of UI Re-rendering
              </span>
              <div className="flex items-center gap-4 text-[#a3a3a3] font-mono">
                <span>08 min read</span>
                <span>March 2026</span>
              </div>
            </div>

            <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group cursor-pointer">
              <span className="font-medium text-[#111111] group-hover:text-[#525252] transition-colors">
                Why Minimal Software Survives Decades
              </span>
              <div className="flex items-center gap-4 text-[#a3a3a3] font-mono">
                <span>12 min read</span>
                <span>November 2025</span>
              </div>
            </div>

            <div className="py-4 flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 group cursor-pointer">
              <span className="font-medium text-[#111111] group-hover:text-[#525252] transition-colors">
                Deterministic State Replication in WebAssembly
              </span>
              <div className="flex items-center gap-4 text-[#a3a3a3] font-mono">
                <span>15 min read</span>
                <span>July 2025</span>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Module */}
        <section className="space-y-8 pt-6 border-t border-[#e5e5e5]">
          <div className="space-y-2">
            <h2 className="text-xs uppercase tracking-widest text-[#737373] font-medium">
              04 / Contact & Dialogue
            </h2>
            <p className="text-sm text-[#111111] max-w-md font-light">
              Accepting select advisory engagements, systems consulting, and architectural reviews for
              late 2026.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Direct Contact Info */}
            <div className="space-y-4 text-xs">
              <div>
                <span className="text-[#a3a3a3] font-mono uppercase block text-[11px]">
                  Electronic Mail
                </span>
                <div className="flex items-center gap-3 mt-1">
                  <span className="font-mono text-sm text-[#111111]">kaelen@vance.systems</span>
                  <button
                    onClick={handleCopyEmail}
                    className="p-1 rounded hover:bg-[#e5e5e5] transition-colors cursor-pointer text-[#737373]"
                    title="Copy email to clipboard"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[#a3a3a3] font-mono uppercase block text-[11px]">
                  Public Keys & Code
                </span>
                <div className="flex gap-4 mt-1 font-mono text-[#525252]">
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#111111] flex items-center gap-0.5"
                  >
                    <span>github.com/kaelenvance</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                  <a
                    href="https://x.com"
                    target="_blank"
                    rel="noreferrer"
                    className="hover:text-[#111111] flex items-center gap-0.5"
                  >
                    <span>@kaelenvance</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>

            {/* Inquire Form */}
            <form onSubmit={handleSendMessage} className="space-y-3">
              <input
                type="text"
                placeholder="Topic / Organization"
                value={contactSubject}
                onChange={(e) => setContactSubject(e.target.value)}
                className="w-full bg-[#f0f0f0] border border-[#e5e5e5] rounded p-2.5 text-xs text-[#111111] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#111111]"
              />
              <textarea
                rows={3}
                placeholder="Brief outline of architecture or advisory scope..."
                value={contactMessage}
                onChange={(e) => setContactMessage(e.target.value)}
                className="w-full bg-[#f0f0f0] border border-[#e5e5e5] rounded p-2.5 text-xs text-[#111111] placeholder:text-[#a3a3a3] focus:outline-none focus:border-[#111111] resize-none"
              />
              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  disabled={!contactMessage.trim()}
                  className="px-4 py-2 rounded bg-[#111111] text-[#fafafa] text-xs font-medium hover:bg-[#333333] transition-colors cursor-pointer disabled:opacity-40"
                >
                  Send Inquiry
                </button>
                {sentMessage && (
                  <span className="text-xs text-emerald-600 font-mono flex items-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Inquiry registered
                  </span>
                )}
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Understated Minimalist Colophon */}
      <footer className="max-w-4xl mx-auto px-6 py-12 border-t border-[#e5e5e5] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#a3a3a3] font-mono">
        <div>
          <span>© 2026 Kaelen Vance · Zero Tracking · Typeset in System Grotesk</span>
        </div>
        <div>
          <span>Hosted on decentralized storage</span>
        </div>
      </footer>
    </div>
  );
}
