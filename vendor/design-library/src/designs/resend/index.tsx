import React, { useState } from 'react';
import {
  Mail,
  Send,
  Code2,
  Check,
  Copy,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  RefreshCw,
  Terminal,
  Inbox,
  Clock,
  Layers,
} from 'lucide-react';

export function ResendRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [recipientEmail, setRecipientEmail] = useState('user@example.com');
  const [emailSubject, setEmailSubject] = useState('Welcome to Acme Platform');
  const [isSending, setIsSending] = useState(false);
  const [sendSuccess, setSendSuccess] = useState(false);
  const [copiedSnippet, setCopiedSnippet] = useState(false);
  const [activeSdk, setActiveSdk] = useState<'node' | 'python' | 'curl'>('node');

  const reactEmailCode = `import { Html, Button, Container, Text, Heading } from '@react-email/components';

export default function WelcomeEmail({ userName = 'Developer' }) {
  return (
    <Html lang="en">
      <Container style={{ fontFamily: 'sans-serif', padding: '40px 20px' }}>
        <Heading style={{ fontSize: '24px', fontWeight: 'bold' }}>
          Welcome to Acme! 🚀
        </Heading>
        <Text style={{ color: '#444', lineHeight: '1.6' }}>
          We are thrilled to have you on board. Deploy your first AI agent in seconds.
        </Text>
        <Button
          href="https://acme.com/get-started"
          style={{ background: '#000', color: '#fff', padding: '12px 24px', borderRadius: '6px' }}
        >
          Open Dashboard
        </Button>
      </Container>
    </Html>
  );
}`;

  const handleSendTest = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
      setSendSuccess(true);
      setTimeout(() => setSendSuccess(false), 3500);
    }, 700);
  };

  const handleCopyCode = () => {
    navigator.clipboard.writeText(reactEmailCode);
    setCopiedSnippet(true);
    setTimeout(() => setCopiedSnippet(false), 2000);
  };

  return (
    <div className="min-h-screen bg-black text-[#ededed] font-sans selection:bg-white selection:text-black relative overflow-hidden">
      {/* Top Monochrome Ambient Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-white/10 to-transparent blur-[140px] pointer-events-none" />

      {/* Top Application Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-black/85 border-b border-[#222]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Resend Wordmark */}
            <div className="flex items-center gap-2 group cursor-pointer">
              <span className="font-extrabold text-lg tracking-tight text-white font-sans">resend</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-[14px] text-[#888]">
              <span className="hover:text-white cursor-pointer transition-colors">Features</span>
              <span className="hover:text-white cursor-pointer transition-colors">React Email</span>
              <span className="hover:text-white cursor-pointer transition-colors">Deliverability</span>
              <span className="hover:text-white cursor-pointer transition-colors">Docs</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-md bg-[#111] hover:bg-[#222] border border-[#333] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://resend.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#888] hover:text-white transition-colors"
            >
              <span>resend.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#888] hover:text-white transition-colors px-2 py-1">
              Sign In
            </button>
            <button className="text-xs px-3.5 py-1.5 rounded-md bg-white hover:bg-slate-200 text-black font-semibold transition-all shadow-sm">
              Get Started
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111] border border-[#262626] text-xs text-[#888] mb-8 hover:border-[#444] cursor-pointer transition-all">
            <Sparkles className="w-3.5 h-3.5 text-white" />
            <span className="text-white font-medium">Develop emails using React</span>
            <span className="text-[#555]">·</span>
            <span>First-class developer experience</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#666]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-[1.05] mb-6">
            Email for developers
          </h1>

          <p className="text-base sm:text-xl text-[#888] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            The new email service for modern web developers. Send transactional and marketing emails with React Email components, webhooks, and guaranteed inbox delivery.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-md bg-white hover:bg-slate-200 text-black text-sm font-semibold transition-all shadow-xl flex items-center gap-2 cursor-pointer">
              <span>Get Started</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 rounded-md bg-[#111] hover:bg-[#1a1a1a] border border-[#333] text-sm text-white font-medium transition-all">
              Documentation
            </button>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: React Email Code & Live Rendered Inbox Simulator */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#222] bg-[#0a0a0a] shadow-2xl overflow-hidden">
            {/* Top Toolbar */}
            <div className="bg-[#111] border-b border-[#222] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-300">
                <Code2 className="w-4 h-4 text-white" />
                <span>emails/WelcomeEmail.tsx</span>
                <span className="text-[11px] px-2 py-0.5 rounded bg-[#1e1e1e] text-[#888]">
                  React Email 3.0
                </span>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleCopyCode}
                  className="px-2.5 py-1 rounded bg-[#1a1a1a] hover:bg-[#252525] border border-[#333] text-slate-300 text-xs font-mono-tech flex items-center gap-1 cursor-pointer"
                >
                  {copiedSnippet ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedSnippet ? 'Copied' : 'Copy JSX'}</span>
                </button>
              </div>
            </div>

            {/* Side-by-Side: React Code on Left, Rendered HTML Email on Right */}
            <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-[#222]">
              {/* Left Column: Code Sample */}
              <div className="lg:col-span-6 p-5 bg-[#050505]">
                <pre className="font-code text-xs text-slate-300 leading-relaxed overflow-x-auto">
                  <code>{reactEmailCode}</code>
                </pre>

                {/* Simulated API Trigger Form */}
                <form onSubmit={handleSendTest} className="mt-6 pt-4 border-t border-[#1f1f1f] space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-mono-tech text-[#888]">Live API Dispatch</span>
                    <button
                      type="submit"
                      disabled={isSending}
                      className="px-3.5 py-1.5 rounded bg-white hover:bg-slate-200 disabled:opacity-50 text-black text-xs font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                    >
                      <Send className={`w-3.5 h-3.5 ${isSending ? 'animate-spin' : ''}`} />
                      <span>{isSending ? 'Dispatching...' : 'Send Test Email'}</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs font-mono-tech">
                    <input
                      type="text"
                      value={recipientEmail}
                      onChange={(e) => setRecipientEmail(e.target.value)}
                      placeholder="To email..."
                      className="bg-[#111] border border-[#2b2b2b] rounded px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-white"
                    />
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      placeholder="Subject line..."
                      className="bg-[#111] border border-[#2b2b2b] rounded px-2.5 py-1.5 text-slate-200 focus:outline-none focus:border-white"
                    />
                  </div>

                  {sendSuccess && (
                    <div className="p-2 rounded bg-emerald-950/60 border border-emerald-800 text-[11px] text-emerald-300 font-mono-tech flex items-center gap-2 animate-in fade-in">
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span>HTTP 200 OK — Dispatched msg_982bf10c in 48ms</span>
                    </div>
                  )}
                </form>
              </div>

              {/* Right Column: Rendered Email Client Preview */}
              <div className="lg:col-span-6 p-6 bg-[#0a0a0a] flex flex-col justify-center items-center">
                <div className="w-full max-w-md bg-white text-[#111] rounded-xl shadow-2xl p-6 border border-slate-200">
                  <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4 text-xs text-slate-500">
                    <div>From: <strong className="text-black">Acme Team &lt;notifications@acme.com&gt;</strong></div>
                    <span className="font-mono-tech text-[10px]">Just now</span>
                  </div>

                  <h3 className="text-lg font-bold text-black mb-2">{emailSubject}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    We are thrilled to have you on board! Deploy and monitor your first autonomous AI agents with zero configuration.
                  </p>

                  <button className="px-5 py-2.5 rounded-lg bg-black text-white text-xs font-semibold hover:bg-slate-800 transition-colors cursor-pointer shadow-md">
                    Open Acme Dashboard
                  </button>

                  <div className="mt-8 pt-4 border-t border-slate-100 text-[10px] text-slate-400 text-center font-mono-tech">
                    © 2026 Acme Inc · 100 Pine St, San Francisco, CA
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Telemetry Bar */}
            <div className="bg-[#0f0f0f] px-4 py-2 border-t border-[#222] flex items-center justify-between text-xs text-[#888] font-mono-tech">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1 text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> DMARC, DKIM &amp; SPF Verified
                </span>
                <span>·</span>
                <span>Latency: 48ms</span>
              </div>
              <div className="text-emerald-400">99.8% Inbox Deliverability</div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#222] py-12 bg-black text-xs text-[#666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-white font-semibold">Resend</span>
            <span>— Email for developers</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://resend.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official resend.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default ResendRecreation;
