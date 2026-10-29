import React, { useState } from 'react';
import {
  Database,
  Lock,
  Zap,
  Globe,
  Radio,
  ExternalLink,
  ChevronRight,
  ArrowRight,
  Play,
  Terminal,
  Check,
  Copy,
  Layers,
  Sparkles,
  Server,
  RefreshCw,
  Plus,
} from 'lucide-react';

interface SqlRow {
  id: string;
  email: string;
  role: string;
  status: string;
  created_at: string;
}

const sampleRows: SqlRow[] = [
  {
    id: 'usr_8921a',
    email: 'alex.chen@enterprise.io',
    role: 'admin',
    status: 'active',
    created_at: '2026-09-12 14:22:01 UTC',
  },
  {
    id: 'usr_8922b',
    email: 'sarah.connor@cyberdyne.org',
    role: 'admin',
    status: 'active',
    created_at: '2026-09-14 09:15:43 UTC',
  },
  {
    id: 'usr_8923c',
    email: 'marcus.vance@vectorflow.ai',
    role: 'developer',
    status: 'active',
    created_at: '2026-09-15 18:30:12 UTC',
  },
  {
    id: 'usr_8924d',
    email: 'elena.rostova@helios.tech',
    role: 'developer',
    status: 'invited',
    created_at: '2026-09-16 11:04:55 UTC',
  },
];

export function SupabaseRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeTab, setActiveTab] = useState<'sql' | 'auth' | 'realtime'>('sql');
  const [sqlQuery, setSqlQuery] = useState(
    `SELECT id, email, role, status, created_at \nFROM auth.users \nWHERE role IN ('admin', 'developer') \nORDER BY created_at DESC \nLIMIT 4;`
  );
  const [rows, setRows] = useState<SqlRow[]>(sampleRows);
  const [isExecutingSql, setIsExecutingSql] = useState(false);
  const [sqlExecutionTime, setSqlExecutionTime] = useState('18ms');
  const [realtimeEvents, setRealtimeEvents] = useState([
    { id: 1, type: 'INSERT', table: 'messages', payload: '{ user_id: "usr_8921", content: "Agent initialized" }', time: '12:04:02' },
    { id: 2, type: 'UPDATE', table: 'wallets', payload: '{ balance: 450.00, currency: "USD" }', time: '12:04:05' },
  ]);

  const handleRunSql = () => {
    setIsExecutingSql(true);
    setTimeout(() => {
      setIsExecutingSql(false);
      setSqlExecutionTime(`${Math.floor(12 + Math.random() * 15)}ms`);
    }, 450);
  };

  const handleEmitRealtimeEvent = () => {
    const newEvt = {
      id: Date.now(),
      type: 'INSERT',
      table: 'ai_executions',
      payload: `{ model: "claude-3-5", latency_ms: ${Math.floor(150 + Math.random() * 80)} }`,
      time: new Date().toLocaleTimeString(),
    };
    setRealtimeEvents([newEvt, ...realtimeEvents]);
  };

  return (
    <div className="min-h-screen bg-[#121212] text-[#ededed] font-sans selection:bg-[#3ecf8e] selection:text-black relative overflow-hidden">
      {/* Supabase Green Ambient Top Glow */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-gradient-to-b from-[#3ecf8e]/12 to-transparent blur-[140px] pointer-events-none" />

      {/* Top Application Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#121212]/85 border-b border-[#242424]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Supabase Lightning Bolt Logo */}
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <svg className="w-5 h-5 text-[#3ecf8e]" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.9 2L3 14.5H11.5L10.5 22L21 9.5H12.2L12.9 2Z" />
              </svg>
              <span className="font-bold text-base tracking-tight text-white font-sans">Supabase</span>
            </div>

            <nav className="hidden lg:flex items-center gap-6 text-[14px] text-[#8e8e8e]">
              <span className="hover:text-white cursor-pointer transition-colors">Product</span>
              <span className="hover:text-white cursor-pointer transition-colors">Developers</span>
              <span className="hover:text-white cursor-pointer transition-colors">Enterprise</span>
              <span className="hover:text-white cursor-pointer transition-colors">Docs</span>
              <span className="hover:text-white cursor-pointer transition-colors">Pricing</span>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1.5 rounded-md bg-[#1e1e1e] hover:bg-[#282828] border border-[#333] text-slate-300 transition-colors cursor-pointer"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#8e8e8e] hover:text-white transition-colors"
            >
              <span>supabase.com</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#8e8e8e] hover:text-white transition-colors px-2 py-1">
              Sign In
            </button>
            <button className="text-xs px-3.5 py-1.5 rounded-md bg-[#3ecf8e] hover:bg-[#34b77c] text-black font-semibold transition-all shadow-md shadow-[#3ecf8e]/20">
              Start your project
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION */}
      <main className="relative z-10">
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-20 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1c1c1c] border border-[#2e2e2e] text-xs text-[#a0a0a0] mb-8 hover:border-[#3ecf8e]/50 cursor-pointer transition-all">
            <span className="w-2 h-2 rounded-full bg-[#3ecf8e] animate-pulse" />
            <span className="text-white font-medium">Postgres 16 & pgvector</span>
            <span className="text-[#555]">·</span>
            <span>The Postgres Development Platform</span>
            <ChevronRight className="w-3.5 h-3.5 text-[#777]" />
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-[1.05] mb-6">
            Build in a weekend. Scale to millions.
          </h1>

          <p className="text-base sm:text-xl text-[#8e8e8e] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Supabase is an open source Firebase alternative. Start with a real Postgres database, Authentication, instant APIs, Edge Functions, Realtime subscriptions, and Vector embeddings.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-md bg-[#3ecf8e] hover:bg-[#34b77c] text-black text-sm font-semibold transition-all shadow-xl shadow-[#3ecf8e]/25 flex items-center gap-2 cursor-pointer">
              <span>Start your project</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button className="px-5 py-3 rounded-md bg-[#1c1c1c] hover:bg-[#252525] border border-[#333] text-sm text-white font-medium transition-all">
              Documentation
            </button>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Live SQL Studio, Auth & Realtime Switcher */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#292929] bg-[#171717] shadow-2xl overflow-hidden">
            {/* Studio Navigation Bar */}
            <div className="bg-[#1f1f1f] border-b border-[#292929] px-4 py-3 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setActiveTab('sql')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'sql' ? 'bg-[#2b2b2b] text-white border border-[#3d3d3d]' : 'text-[#888] hover:text-white'
                  }`}
                >
                  <Database className="w-3.5 h-3.5 text-[#3ecf8e]" />
                  <span>SQL Editor & Table Studio</span>
                </button>
                <button
                  onClick={() => setActiveTab('auth')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'auth' ? 'bg-[#2b2b2b] text-white border border-[#3d3d3d]' : 'text-[#888] hover:text-white'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Auth Providers</span>
                </button>
                <button
                  onClick={() => setActiveTab('realtime')}
                  className={`px-3 py-1.5 rounded text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer ${
                    activeTab === 'realtime' ? 'bg-[#2b2b2b] text-white border border-[#3d3d3d]' : 'text-[#888] hover:text-white'
                  }`}
                >
                  <Radio className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Realtime WebSocket Stream</span>
                </button>
              </div>

              <div className="text-xs font-mono-tech text-slate-400 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#3ecf8e]" />
                <span>Postgres 16.4 (Dedicated AWS RDS)</span>
              </div>
            </div>

            {/* TAB 1: SQL Editor & Output */}
            {activeTab === 'sql' && (
              <div className="p-5">
                <div className="flex items-center justify-between pb-3 border-b border-[#242424] mb-4">
                  <div className="flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                    <Terminal className="w-4 h-4 text-[#3ecf8e]" />
                    <span>query_users_active.sql</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[11px] font-mono-tech text-slate-500">Execution: {sqlExecutionTime}</span>
                    <button
                      onClick={handleRunSql}
                      disabled={isExecutingSql}
                      className="px-3 py-1.5 rounded bg-[#3ecf8e] hover:bg-[#34b77c] disabled:opacity-50 text-black text-xs font-bold flex items-center gap-1.5 transition-all cursor-pointer shadow-md"
                    >
                      <Play className={`w-3.5 h-3.5 fill-black ${isExecutingSql ? 'animate-spin' : ''}`} />
                      <span>{isExecutingSql ? 'Running...' : 'Run Query'}</span>
                    </button>
                  </div>
                </div>

                <textarea
                  value={sqlQuery}
                  onChange={(e) => setSqlQuery(e.target.value)}
                  rows={4}
                  className="w-full bg-[#121212] border border-[#262626] rounded-lg p-3 text-xs font-code text-slate-200 focus:outline-none focus:border-[#3ecf8e] mb-4"
                />

                {/* Database Table Output */}
                <div className="overflow-x-auto border border-[#262626] rounded-lg">
                  <table className="w-full text-left text-xs font-mono-tech">
                    <thead>
                      <tr className="bg-[#1a1a1a] border-b border-[#262626] text-slate-400 uppercase text-[10px]">
                        <th className="p-2.5">id (uuid)</th>
                        <th className="p-2.5">email (varchar)</th>
                        <th className="p-2.5">role (text)</th>
                        <th className="p-2.5">status (text)</th>
                        <th className="p-2.5">created_at (timestamptz)</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#222]">
                      {rows.map((row) => (
                        <tr key={row.id} className="hover:bg-[#1f1f1f] transition-colors">
                          <td className="p-2.5 text-[#3ecf8e]">{row.id}</td>
                          <td className="p-2.5 text-white">{row.email}</td>
                          <td className="p-2.5 text-slate-300">{row.role}</td>
                          <td className="p-2.5">
                            <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                              {row.status}
                            </span>
                          </td>
                          <td className="p-2.5 text-slate-500">{row.created_at}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* TAB 2: Auth Providers */}
            {activeTab === 'auth' && (
              <div className="p-6">
                <h3 className="text-sm font-bold text-white mb-2">Social & Enterprise Identity Providers</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Enable authentication methods with zero boilerplate. Built on JSON Web Tokens and Row Level Security.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    { name: 'GitHub OAuth', enabled: true, desc: 'Authenticate developers with GitHub accounts' },
                    { name: 'Google Workspace', enabled: true, desc: 'Sign in with Google credentials' },
                    { name: 'Discord', enabled: true, desc: 'Community identity verification' },
                    { name: 'Enterprise SAML / Okta', enabled: true, desc: 'Single Sign-On for enterprise customers' },
                  ].map((prov) => (
                    <div key={prov.name} className="p-4 rounded-xl bg-[#141414] border border-[#262626] flex items-center justify-between">
                      <div>
                        <span className="text-xs font-semibold text-white block mb-0.5">{prov.name}</span>
                        <span className="text-[11px] text-slate-500">{prov.desc}</span>
                      </div>
                      <span className="px-2 py-0.5 rounded text-[10px] font-mono-tech bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
                        ENABLED
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: Realtime Event Stream */}
            {activeTab === 'realtime' && (
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="text-sm font-bold text-white">Postgres Change Data Capture (CDC)</h3>
                    <p className="text-xs text-slate-400">Listening to postgres_changes on schema public</p>
                  </div>
                  <button
                    onClick={handleEmitRealtimeEvent}
                    className="px-3 py-1.5 rounded bg-[#3ecf8e] text-black text-xs font-bold hover:bg-[#34b77c] transition-colors cursor-pointer flex items-center gap-1"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    <span>Send Event</span>
                  </button>
                </div>

                <div className="space-y-2 font-mono-tech text-xs">
                  {realtimeEvents.map((evt) => (
                    <div key={evt.id} className="p-3 rounded-lg bg-[#141414] border border-[#262626] flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <span className="px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 text-[10px]">
                          {evt.type}
                        </span>
                        <span className="text-slate-400">{evt.table}</span>
                        <span className="text-slate-200">{evt.payload}</span>
                      </div>
                      <span className="text-slate-600 text-[11px]">{evt.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#242424] py-12 bg-[#121212] text-xs text-[#666]">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="text-[#3ecf8e] font-bold">Supabase</span>
            <span>— The open source Postgres development platform</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://supabase.com" target="_blank" rel="noreferrer" className="text-white hover:underline">Official supabase.com</a>
            <span>·</span>
            <span>UI Recreation Lab</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default SupabaseRecreation;
