import React, { useState } from 'react';
import {
  ArrowLeft,
  Building2,
  ShieldCheck,
  TrendingUp,
  Server,
  Users,
  CheckCircle2,
  ArrowRight,
  Globe2,
  PhoneCall,
  Check,
  Briefcase,
  Layers,
  Sliders,
} from 'lucide-react';

interface CaseStudy {
  id: string;
  industry: string;
  clientTitle: string;
  challenge: string;
  architecture: string;
  outcomeMetric: string;
  metricLabel: string;
}

export function CorporateWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeTab, setActiveTab] = useState<'finance' | 'health' | 'aerospace'>('finance');
  const [monthlySpend, setMonthlySpend] = useState<number>(250000);
  const [serviceCount, setServiceCount] = useState<number>(80);
  const [inquiryName, setInquiryName] = useState('');
  const [inquiryCompany, setInquiryCompany] = useState('');
  const [inquiryEmail, setInquiryEmail] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  const projectedSavings = Math.round(monthlySpend * 12 * 0.34);
  const projectedTimelineWeeks = Math.max(12, Math.round(serviceCount * 0.25));

  const caseStudies: Record<'finance' | 'health' | 'aerospace', CaseStudy> = {
    finance: {
      id: 'cs-fin',
      industry: 'Global Financial Services',
      clientTitle: 'Tier-1 Pan-European Investment Bank',
      challenge: 'Legacy mainframe core settlement system with $4.8M annual licensing overhead and 4-hour batch settlement delays.',
      architecture: 'Distributed event-driven Kafka fabric coupled with active-active Kubernetes clusters across Frankfurt and Zurich.',
      outcomeMetric: 'Sub-40ms',
      metricLabel: 'Real-Time Settlement Latency (down from 4 hours)',
    },
    health: {
      id: 'cs-health',
      industry: 'Biopharmaceutical Sciences',
      clientTitle: 'Global Oncology Clinical Research Network',
      challenge: 'Pipelining petabytes of genomic sequencing data across strict HIPAA and GDPR sovereign jurisdictions.',
      architecture: 'Zero-trust federated data mesh with verifiable homomorphic encryption and audited access pipelines.',
      outcomeMetric: '6.4× Faster',
      metricLabel: 'Genomic Target Identification Pipeline',
    },
    aerospace: {
      id: 'cs-aero',
      industry: 'Commercial Aviation & Defense',
      clientTitle: 'International Avionics & Satellite Systems Provider',
      challenge: 'Real-time telemetry ingestion from 12,000 active aircraft exceeding legacy relational database thresholds.',
      architecture: 'Edge-to-cloud time-series data lakehouse with sub-millisecond anomaly detection and automated failover.',
      outcomeMetric: '99.999%',
      metricLabel: 'High-Availability Service Level Attainment',
    },
  };

  const currentCase = caseStudies[activeTab];

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryEmail.trim() || !inquiryCompany.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
      setInquiryCompany('');
      setInquiryEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-[#0f172a] font-sans selection:bg-[#0b192c] selection:text-white antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0b192c] text-white text-xs font-mono hover:bg-[#1e3e62] transition-colors cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Top Institutional Corporate Header */}
      <header className="border-b border-slate-200 bg-white sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0b192c] text-white flex items-center justify-center font-bold">
              <Building2 className="w-5 h-5 text-cyan-400" />
            </div>
            <div>
              <span className="font-extrabold text-lg tracking-tight text-[#0b192c] leading-none block">
                STRATA CLOUD SYSTEMS
              </span>
              <span className="text-[10px] text-slate-500 font-mono uppercase tracking-wider">
                Enterprise Architecture Advisory
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-slate-600">
            <a href="#practices" className="hover:text-[#0b192c] transition-colors">Practice Areas</a>
            <a href="#calculator" className="hover:text-[#0b192c] transition-colors">ROI Calculator</a>
            <a href="#case-studies" className="hover:text-[#0b192c] transition-colors">Client Outcomes</a>
            <a href="#compliance" className="hover:text-[#0b192c] transition-colors">Compliance & Trust</a>
          </nav>

          <a
            href="#briefing"
            className="px-5 py-2.5 rounded-lg bg-[#0b192c] hover:bg-[#1e3e62] text-white text-xs font-semibold transition-colors cursor-pointer shadow-sm"
          >
            Schedule Briefing
          </a>
        </div>
      </header>

      {/* Corporate Executive Hero Section */}
      <section className="bg-gradient-to-b from-white to-[#f1f5f9] border-b border-slate-200 py-20 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-50 border border-blue-200 text-xs font-mono text-[#1e3e62]">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>GLOBAL ENTERPRISE INFRASTRUCTURE PARTNER</span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-[#0b192c] tracking-tight leading-tight">
              Architecting Resilient Cloud Modernization for Global Enterprise.
            </h1>

            <p className="text-base sm:text-lg text-slate-600 max-w-2xl leading-relaxed">
              We guide Fortune 500 technology leaders through legacy system decoupling,
              autonomous Kubernetes mesh orchestration, and zero-trust security postures.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#briefing"
                className="px-6 py-3.5 rounded-lg bg-[#0b192c] hover:bg-[#1e3e62] text-white font-semibold text-xs transition-colors flex items-center gap-2 shadow-sm"
              >
                <span>Request Executive Advisory Briefing</span>
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#calculator"
                className="px-6 py-3.5 rounded-lg bg-white border border-slate-300 hover:border-slate-400 text-slate-700 font-semibold text-xs transition-colors"
              >
                Calculate Enterprise ROI
              </a>
            </div>
          </div>

          {/* Right Trust Metrics Card */}
          <div className="lg:col-span-4 bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-mono uppercase text-slate-400 block">ILLUSTRATIVE ENGAGEMENT RECORD</span>
              <div className="text-3xl font-black text-[#0b192c] mt-1">$480M+</div>
              <p className="text-xs text-slate-500 mt-0.5">Cumulative cloud waste eliminated across client portfolios.</p>
            </div>

            <div className="grid grid-cols-2 gap-4 text-xs">
              <div className="space-y-1">
                <span className="text-2xl font-black text-emerald-600">99.999%</span>
                <span className="text-[11px] text-slate-500 block">System Availability Attainment</span>
              </div>
              <div className="space-y-1">
                <span className="text-2xl font-black text-[#1e3e62]">380+</span>
                <span className="text-[11px] text-slate-500 block">Enterprise Deployments</span>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100 flex items-center gap-2 text-xs font-mono text-slate-500">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>SOC2 TYPE II & FEDRAMP READY</span>
            </div>
          </div>
        </div>
      </section>

      {/* Practice Areas Section */}
      <section id="practices" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-slate-500 font-bold">
            CORE CAPABILITIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#0b192c] tracking-tight">
            Specialized Practice Blueprints
          </h2>
          <p className="text-sm text-slate-600 max-w-xl mx-auto">
            Disciplined architectural interventions designed to eliminate technical debt without operational downtime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e3e62] flex items-center justify-center font-bold">
              <Server className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Monolith Decoupling & Mesh</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Decompose mission-critical mainframes into event-driven microservices using the Strangler Fig pattern,
              safeguarding business continuity at every incremental step.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e3e62] flex items-center justify-center font-bold">
              <TrendingUp className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Autonomous FinOps Architecture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Implement continuous resource right-sizing, spot-instance fleet automation, and storage tiering
              to reduce monthly AWS/Azure expenditure by 28% to 44%.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 space-y-4 hover:border-slate-300 transition-colors shadow-sm">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#1e3e62] flex items-center justify-center font-bold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-[#0b192c]">Zero-Trust Security Posture</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Hardware-backed mTLS authentication between workloads, least-privilege IAM guardrails, and
              post-quantum cryptographic audit trails for compliance validation.
            </p>
          </div>
        </div>
      </section>

      {/* Interactive Enterprise Cloud ROI Calculator */}
      <section id="calculator" className="py-20 bg-[#0b192c] text-white">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-cyan-400 font-bold">
              ESTIMATION BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Enterprise Cloud Modernization Calculator
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 max-w-lg mx-auto">
              Simulate projected annual cost avoidance based on your current cloud operational parameters.
            </p>
          </div>

          <div className="bg-[#13233b] border border-[#1e3e62] rounded-2xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Sliders (7 cols) */}
            <div className="lg:col-span-7 space-y-8">
              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">CURRENT MONTHLY CLOUD SPEND:</span>
                  <span className="text-cyan-400 font-bold text-sm">${monthlySpend.toLocaleString()}</span>
                </div>
                <input
                  type="range"
                  min={50000}
                  max={1000000}
                  step={25000}
                  value={monthlySpend}
                  onChange={(e) => setMonthlySpend(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>$50,000 / mo</span>
                  <span>$1,000,000 / mo</span>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-xs font-mono">
                  <span className="text-slate-300">ACTIVE PRODUCTION MICROSERVICES:</span>
                  <span className="text-cyan-400 font-bold text-sm">{serviceCount} Services</span>
                </div>
                <input
                  type="range"
                  min={10}
                  max={300}
                  step={10}
                  value={serviceCount}
                  onChange={(e) => setServiceCount(Number(e.target.value))}
                  className="w-full accent-cyan-400 cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-slate-400 font-mono">
                  <span>10 Core Services</span>
                  <span>300+ Enterprise Services</span>
                </div>
              </div>
            </div>

            {/* Projected Output (5 cols) */}
            <div className="lg:col-span-5 bg-[#0b192c] border border-cyan-500/30 rounded-xl p-6 space-y-6 text-center">
              <div>
                <span className="text-[10px] font-mono uppercase text-slate-400 block">
                  PROJECTED ANNUAL SAVINGS
                </span>
                <div className="text-3xl sm:text-4xl font-black text-emerald-400 mt-1">
                  ${projectedSavings.toLocaleString()}
                </div>
                <span className="text-[11px] text-slate-400">Based on standard 34% FinOps efficiency yield</span>
              </div>

              <div className="pt-4 border-t border-[#1e3e62] flex justify-between text-xs font-mono text-slate-300">
                <span>ESTIMATED TIMELINE:</span>
                <span className="text-cyan-400 font-bold">{projectedTimelineWeeks} WEEKS</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section id="case-studies" className="py-24 max-w-7xl mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-bold">
              VERIFIED ARCHITECTURAL TRANSFORMATIONS
            </span>
            <h2 className="text-3xl font-extrabold text-[#0b192c]">
              Enterprise Case Studies
            </h2>
          </div>

          <div className="flex gap-2 text-xs font-semibold">
            {(['finance', 'health', 'aerospace'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-4 py-2 rounded-lg transition-colors cursor-pointer capitalize ${
                  activeTab === tab
                    ? 'bg-[#0b192c] text-white'
                    : 'bg-white border border-slate-200 text-slate-600 hover:text-black'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-white border border-slate-200 rounded-2xl p-8 sm:p-12 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono text-slate-400 uppercase font-bold">
              {currentCase.industry}
            </span>
            <h3 className="text-2xl font-bold text-[#0b192c]">{currentCase.clientTitle}</h3>
            <div className="space-y-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              <p><strong>Challenge:</strong> {currentCase.challenge}</p>
              <p><strong>Architecture:</strong> {currentCase.architecture}</p>
            </div>
          </div>

          <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-xl p-6 text-center space-y-2">
            <div className="text-3xl sm:text-4xl font-black text-emerald-600">
              {currentCase.outcomeMetric}
            </div>
            <p className="text-xs text-slate-600 font-medium">{currentCase.metricLabel}</p>
          </div>
        </div>
      </section>

      {/* Institutional Compliance Badges */}
      <section id="compliance" className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap items-center justify-around gap-6 text-xs font-mono text-slate-500 font-bold uppercase">
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> SOC2 TYPE II COMPLIANT</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> ISO 27001 AUDITED</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> FEDRAMP HIGH READY</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-emerald-600" /> HIPAA BAA COMPLIANT</span>
        </div>
      </section>

      {/* Executive Briefing Form */}
      <section id="briefing" className="py-24 max-w-3xl mx-auto px-6 space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold text-[#0b192c]">Schedule an Executive Architecture Review</h2>
          <p className="text-xs sm:text-sm text-slate-600">
            Confidential 45-minute technical briefing with our Principal Systems Directors.
          </p>
        </div>

        <form onSubmit={handleSendInquiry} className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Your Full Name</label>
              <input
                type="text"
                required
                placeholder="Marcus Vance"
                value={inquiryName}
                onChange={(e) => setInquiryName(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0b192c]"
              />
            </div>
            <div>
              <label className="block text-slate-600 font-semibold mb-1">Enterprise Organization</label>
              <input
                type="text"
                required
                placeholder="Global Aerospace AG"
                value={inquiryCompany}
                onChange={(e) => setInquiryCompany(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0b192c]"
              />
            </div>
          </div>

          <div className="text-xs">
            <label className="block text-slate-600 font-semibold mb-1">Corporate Work Email</label>
            <input
              type="email"
              required
              placeholder="m.vance@company.com"
              value={inquiryEmail}
              onChange={(e) => setInquiryEmail(e.target.value)}
              className="w-full p-2.5 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0b192c]"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-[#0b192c] hover:bg-[#1e3e62] text-white font-semibold text-xs transition-colors cursor-pointer"
          >
            Confirm Executive Briefing Request
          </button>

          {inquirySent && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 rounded-lg text-emerald-800 text-xs font-mono text-center">
              ✓ Briefing request recorded for {inquiryCompany}. An engagement director will reach out within 4 business hours.
            </div>
          )}
        </form>
      </section>

      {/* Corporate Comprehensive Footer */}
      <footer className="border-t border-slate-200 bg-white py-12 px-6 text-xs text-slate-500 font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 STRATA CLOUD SYSTEMS CORP. ALL RIGHTS RESERVED.</span>
          </div>
          <div className="flex gap-6">
            <span>ZÜRICH</span>
            <span>LONDON</span>
            <span>NEW YORK</span>
            <span>SINGAPORE</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
