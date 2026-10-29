import React, { useState, useEffect } from 'react';
import {
  Search,
  CheckCircle2,
  Circle,
  Clock,
  AlertCircle,
  Plus,
  ArrowRight,
  ExternalLink,
  ChevronRight,
  Sparkles,
  Command,
  Layers,
  GitBranch,
  ShieldAlert,
  SlidersHorizontal,
  FolderGit2,
  Cpu,
  Zap,
  LayoutGrid,
  List,
  Check,
  X,
  Filter,
} from 'lucide-react';

interface Issue {
  id: string;
  key: string;
  title: string;
  status: 'Backlog' | 'Todo' | 'In Progress' | 'Done';
  priority: 'Urgent' | 'High' | 'Medium' | 'Low';
  assignee: { name: string; avatar: string };
  project: string;
  cycle: string;
  labels: string[];
}

const initialIssues: Issue[] = [
  {
    id: '1',
    key: 'LIN-1042',
    title: 'Migrate vector indexing worker to multi-tenant edge nodes',
    status: 'In Progress',
    priority: 'Urgent',
    assignee: { name: 'Karri Saarinen', avatar: 'KS' },
    project: 'Core Engine',
    cycle: 'Cycle 42',
    labels: ['Infrastructure', 'Performance'],
  },
  {
    id: '2',
    key: 'LIN-1043',
    title: 'Sub-millisecond keyboard navigation on filtered issue tables',
    status: 'In Progress',
    priority: 'High',
    assignee: { name: 'Tuomas Artman', avatar: 'TA' },
    project: 'Desktop Client',
    cycle: 'Cycle 42',
    labels: ['UI/UX', 'Speed'],
  },
  {
    id: '3',
    key: 'LIN-1044',
    title: 'Support autonomous AI agents in triage inbox with confidence rating',
    status: 'Todo',
    priority: 'High',
    assignee: { name: 'Elena Rostova', avatar: 'ER' },
    project: 'AI Workflows',
    cycle: 'Cycle 42',
    labels: ['AI', 'Triage'],
  },
  {
    id: '4',
    key: 'LIN-1045',
    title: 'Implement bi-directional git rebase synchronization via webhooks',
    status: 'Todo',
    priority: 'Medium',
    assignee: { name: 'Marcus Chen', avatar: 'MC' },
    project: 'Integrations',
    cycle: 'Cycle 42',
    labels: ['Git', 'Backend'],
  },
  {
    id: '5',
    key: 'LIN-1046',
    title: 'Adaptive high-contrast themes for accessibility compliance',
    status: 'Done',
    priority: 'Low',
    assignee: { name: 'Sofia Lindqvist', avatar: 'SL' },
    project: 'Design System',
    cycle: 'Cycle 41',
    labels: ['A11y', 'Design'],
  },
  {
    id: '6',
    key: 'LIN-1047',
    title: 'Real-time collaborative canvas for roadmap timeline dependencies',
    status: 'Backlog',
    priority: 'Medium',
    assignee: { name: 'Alex Rivera', avatar: 'AR' },
    project: 'Roadmaps',
    cycle: 'Cycle 43',
    labels: ['Canvas', 'Roadmap'],
  },
];

export function LinearRecreation({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [issues, setIssues] = useState<Issue[]>(initialIssues);
  const [activeTab, setActiveTab] = useState<'all' | 'cycle' | 'backlog' | 'roadmap'>('all');
  const [viewMode, setViewMode] = useState<'list' | 'board'>('list');
  const [isCommandMenuOpen, setIsCommandMenuOpen] = useState(false);
  const [isNewIssueOpen, setIsNewIssueOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [newTitle, setNewTitle] = useState('');
  const [newPriority, setNewPriority] = useState<Issue['priority']>('High');
  const [activeCycleProgress] = useState({ completed: 18, total: 24, percent: 75 });

  // Keyboard shortcut listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsCommandMenuOpen((prev) => !prev);
      } else if (e.key.toLowerCase() === 'c' && !isNewIssueOpen && !isCommandMenuOpen) {
        const target = e.target as HTMLElement;
        if (target.tagName !== 'INPUT' && target.tagName !== 'TEXTAREA') {
          e.preventDefault();
          setIsNewIssueOpen(true);
        }
      } else if (e.key === 'Escape') {
        setIsCommandMenuOpen(false);
        setIsNewIssueOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isNewIssueOpen, isCommandMenuOpen]);

  const handleCreateIssue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle.trim()) return;

    const newIssue: Issue = {
      id: String(Date.now()),
      key: `LIN-${Math.floor(1000 + Math.random() * 9000)}`,
      title: newTitle.trim(),
      status: 'Todo',
      priority: newPriority,
      assignee: { name: 'Current User', avatar: 'YOU' },
      project: 'Core Engine',
      cycle: 'Cycle 42',
      labels: ['Feature'],
    };

    setIssues([newIssue, ...issues]);
    setNewTitle('');
    setIsNewIssueOpen(false);
  };

  const filteredIssues = issues.filter((issue) => {
    const matchesSearch =
      issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.key.toLowerCase().includes(searchQuery.toLowerCase()) ||
      issue.project.toLowerCase().includes(searchQuery.toLowerCase());

    if (!matchesSearch) return false;
    if (activeTab === 'cycle') return issue.cycle === 'Cycle 42';
    if (activeTab === 'backlog') return issue.status === 'Backlog';
    return true;
  });

  const getStatusIcon = (status: Issue['status']) => {
    switch (status) {
      case 'Done':
        return <CheckCircle2 className="w-4 h-4 text-indigo-400" />;
      case 'In Progress':
        return <Clock className="w-4 h-4 text-amber-400 animate-pulse" />;
      case 'Todo':
        return <Circle className="w-4 h-4 text-slate-400" />;
      case 'Backlog':
        return <Circle className="w-4 h-4 text-slate-600 stroke-dashed" />;
    }
  };

  const getPriorityBadge = (priority: Issue['priority']) => {
    switch (priority) {
      case 'Urgent':
        return <span className="px-1.5 py-0.5 text-[10px] rounded bg-rose-500/20 text-rose-300 border border-rose-500/30 font-mono-tech">URGENT</span>;
      case 'High':
        return <span className="px-1.5 py-0.5 text-[10px] rounded bg-amber-500/20 text-amber-300 border border-amber-500/30 font-mono-tech">HIGH</span>;
      case 'Medium':
        return <span className="px-1.5 py-0.5 text-[10px] rounded bg-slate-700/60 text-slate-300 font-mono-tech">MED</span>;
      case 'Low':
        return <span className="px-1.5 py-0.5 text-[10px] rounded bg-slate-800 text-slate-500 font-mono-tech">LOW</span>;
    }
  };

  return (
    <div className="min-h-screen bg-[#08090a] text-[#ededed] font-sans antialiased selection:bg-[#5E6AD2] selection:text-white relative overflow-hidden">
      {/* Linear Ambient Glow Mesh */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[550px] bg-gradient-to-b from-[#5E6AD2]/12 via-[#5E6AD2]/4 to-transparent blur-[140px] rounded-full" />
        <div className="absolute top-[800px] -left-[200px] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full" />
        <div className="absolute top-[1600px] right-0 w-[600px] h-[600px] bg-indigo-900/8 blur-[160px] rounded-full" />
      </div>

      {/* Top Floating Replicating Header */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08090a]/85 border-b border-[#1f2025]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            {/* Linear Logo Mark */}
            <div className="flex items-center gap-2.5 group cursor-pointer">
              <svg className="w-5 h-5 text-white transition-transform group-hover:scale-105" viewBox="0 0 100 100" fill="currentColor">
                <path d="M1.2 56.5C0.4 54.3 0 52 0 49.6C0 22.2 22.2 0 49.6 0C52 0 54.3 0.4 56.5 1.2L1.2 56.5ZM43.5 98.8C45.7 99.6 48 100 50.4 100C77.8 100 100 77.8 100 50.4C100 48 99.6 45.7 98.8 43.5L43.5 98.8ZM9.9 82.5L82.5 9.9C73.4 3.7 62.4 0 50.4 0C50.1 0 49.9 0 49.6 0L0 49.6C0 49.9 0 50.1 0 50.4C0 62.4 3.7 73.4 9.9 82.5ZM90.1 17.5L17.5 90.1C26.6 96.3 37.6 100 49.6 100C49.9 100 50.1 100 50.4 100L100 50.4C100 50.1 100 49.9 100 49.6C100 37.6 96.3 26.6 90.1 17.5Z" />
              </svg>
              <span className="font-semibold text-sm tracking-tight text-white font-sans">Linear</span>
            </div>

            <nav className="hidden md:flex items-center gap-6 text-[13px] text-[#8a8f98]">
              <a href="#features" className="hover:text-white transition-colors">Features</a>
              <a href="#method" className="hover:text-white transition-colors">Method</a>
              <a href="#customers" className="hover:text-white transition-colors">Customers</a>
              <a href="#changelog" className="hover:text-white transition-colors">Changelog</a>
              <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            </nav>
          </div>

          <div className="flex items-center gap-3">
            {onBackToGallery && (
              <button
                onClick={onBackToGallery}
                className="text-xs px-2.5 py-1 rounded bg-[#18191c] hover:bg-[#222429] border border-[#2b2d35] text-slate-300 transition-colors"
              >
                Back to Interface studies
              </button>
            )}
            <a
              href="https://linear.app"
              target="_blank"
              rel="noreferrer"
              className="hidden sm:flex items-center gap-1 text-xs text-[#8a8f98] hover:text-white transition-colors"
            >
              <span>linear.app</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button className="text-xs text-[#8a8f98] hover:text-white transition-colors px-2 py-1">
              Log in
            </button>
            <button className="text-xs px-3 py-1.5 rounded-md bg-[#5E6AD2] hover:bg-[#6c78e0] text-white font-medium transition-all shadow-sm shadow-[#5E6AD2]/20">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10">
        {/* HERO SECTION */}
        <section className="pt-20 pb-16 sm:pt-28 sm:pb-24 max-w-5xl mx-auto px-4 text-center">
          {/* Badge Pill */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#181920] border border-[#272933] text-xs text-[#9b9eb2] mb-8 hover:border-[#5E6AD2]/50 cursor-pointer transition-all">
            <span className="w-1.5 h-1.5 rounded-full bg-[#5E6AD2] animate-ping" />
            <span className="text-white font-medium">Linear 2026</span>
            <span className="text-slate-500">·</span>
            <span>The product development system for teams and agents</span>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-white max-w-4xl mx-auto leading-[1.08] mb-6">
            The product development system for teams and agents
          </h1>

          <p className="text-base sm:text-xl text-[#8a8f98] max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
            Linear is a purpose-built system for planning and building products. Crafted with obsessive attention to detail, precision, and lightning speed.
          </p>

          {/* Action Row */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <button
              onClick={() => setIsNewIssueOpen(true)}
              className="px-5 py-2.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6c78e0] text-white text-sm font-medium transition-all flex items-center gap-2 shadow-lg shadow-[#5E6AD2]/25 cursor-pointer"
            >
              <span>Get started for free</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsCommandMenuOpen(true)}
              className="px-4 py-2.5 rounded-lg bg-[#141518] hover:bg-[#1a1b20] border border-[#272933] text-sm text-[#ededed] transition-all flex items-center gap-2 cursor-pointer"
            >
              <Command className="w-3.5 h-3.5 text-[#5E6AD2]" />
              <span>Interactive Command Bar</span>
              <kbd className="px-1.5 py-0.5 text-[11px] bg-[#22242a] text-slate-400 rounded border border-[#2e313b] font-mono-tech">⌘K</kbd>
            </button>
          </div>

          {/* Keyboard hint */}
          <div className="flex items-center justify-center gap-4 text-xs text-[#626673] font-mono-tech">
            <span>Press <kbd className="px-1 bg-[#18191e] border border-[#272933] text-slate-400 rounded">C</kbd> to create issue</span>
            <span>·</span>
            <span>Press <kbd className="px-1 bg-[#18191e] border border-[#272933] text-slate-400 rounded">⌘K</kbd> to open command palette</span>
          </div>
        </section>

        {/* SIGNATURE INTERACTIVE DEMO: Real Linear Issue Board & Command Bar */}
        <section className="max-w-6xl mx-auto px-4 mb-24">
          <div className="rounded-xl border border-[#23252a] bg-[#0d0e12] shadow-2xl overflow-hidden relative">
            {/* Window titlebar */}
            <div className="bg-[#121318] border-b border-[#21232a] px-4 py-2.5 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-[#ff5f56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#ffbd2e]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27c93f]/80" />
                <div className="h-4 w-px bg-slate-800 mx-2" />
                <span className="text-xs font-mono-tech text-slate-400 flex items-center gap-1.5">
                  <GitBranch className="w-3.5 h-3.5 text-[#5E6AD2]" />
                  linear-workspace / Cycle 42 / Active Sprint
                </span>
              </div>

              {/* View toggle */}
              <div className="flex items-center gap-1 bg-[#181920] p-0.5 rounded-lg border border-[#262831]">
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-1.5 rounded text-xs ${viewMode === 'list' ? 'bg-[#262833] text-white' : 'text-slate-400 hover:text-white'}`}
                  title="List View"
                >
                  <List className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setViewMode('board')}
                  className={`p-1.5 rounded text-xs ${viewMode === 'board' ? 'bg-[#262833] text-white' : 'text-slate-400 hover:text-white'}`}
                  title="Board View"
                >
                  <LayoutGrid className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Sub-header / Filter bar */}
            <div className="border-b border-[#1d1f24] px-4 py-2.5 bg-[#0f1015] flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActiveTab('all')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeTab === 'all' ? 'bg-[#1e2029] text-white border border-[#2b2d38]' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  All Issues ({issues.length})
                </button>
                <button
                  onClick={() => setActiveTab('cycle')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors flex items-center gap-1.5 ${activeTab === 'cycle' ? 'bg-[#1e2029] text-white border border-[#2b2d38]' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  <Clock className="w-3 h-3 text-[#5E6AD2]" />
                  Cycle 42 (Active)
                </button>
                <button
                  onClick={() => setActiveTab('backlog')}
                  className={`px-3 py-1 rounded text-xs font-medium transition-colors ${activeTab === 'backlog' ? 'bg-[#1e2029] text-white border border-[#2b2d38]' : 'text-slate-400 hover:text-slate-200'}`}
                >
                  Backlog
                </button>
              </div>

              {/* Search and New Issue Action */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Search className="w-3.5 h-3.5 text-slate-500 absolute left-2.5 top-1/2 -translate-y-1/2" />
                  <input
                    type="text"
                    placeholder="Filter issues..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-40 sm:w-56 bg-[#16171d] border border-[#23252d] rounded-md pl-8 pr-3 py-1 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-[#5E6AD2]"
                  />
                </div>
                <button
                  onClick={() => setIsNewIssueOpen(true)}
                  className="px-2.5 py-1 rounded-md bg-[#5E6AD2] hover:bg-[#6c78e0] text-white text-xs font-medium flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <Plus className="w-3 h-3" />
                  <span>New Issue</span>
                  <kbd className="text-[10px] bg-black/20 px-1 rounded ml-1 font-mono-tech">C</kbd>
                </button>
              </div>
            </div>

            {/* Cycle Progress bar */}
            <div className="px-4 py-2 bg-[#0c0d11] border-b border-[#1b1c22] flex items-center justify-between text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <span className="font-medium text-slate-300">Cycle 42 Health</span>
                <div className="w-32 bg-[#1b1c24] h-1.5 rounded-full overflow-hidden">
                  <div className="bg-[#5E6AD2] h-full rounded-full" style={{ width: `${activeCycleProgress.percent}%` }} />
                </div>
                <span className="text-[11px] font-mono-tech text-slate-500">{activeCycleProgress.completed} of {activeCycleProgress.total} completed ({activeCycleProgress.percent}%)</span>
              </div>
              <div className="text-[11px] font-mono-tech text-slate-500 flex items-center gap-2">
                <span>Scope: 14 days left</span>
                <span>·</span>
                <span className="text-emerald-400 flex items-center gap-1"><Sparkles className="w-3 h-3" /> On Track</span>
              </div>
            </div>

            {/* Interactive Issue Display: List View */}
            {viewMode === 'list' && (
              <div className="divide-y divide-[#17181e]">
                {filteredIssues.map((issue) => (
                  <div
                    key={issue.id}
                    className="group px-4 py-3 flex items-center justify-between hover:bg-[#121319] transition-colors cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="flex-shrink-0">{getStatusIcon(issue.status)}</div>
                      <span className="font-mono-tech text-xs text-slate-500 w-16 flex-shrink-0">{issue.key}</span>
                      <span className="text-xs sm:text-sm font-medium text-slate-200 group-hover:text-white truncate">
                        {issue.title}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 flex-shrink-0 ml-4">
                      <div className="hidden sm:flex items-center gap-1">
                        {issue.labels.map((lbl) => (
                          <span key={lbl} className="text-[10px] px-2 py-0.5 rounded-full bg-[#1b1d25] border border-[#262835] text-slate-400">
                            {lbl}
                          </span>
                        ))}
                      </div>
                      {getPriorityBadge(issue.priority)}
                      <span className="w-6 h-6 rounded-full bg-[#20222c] border border-[#2e3140] text-[10px] font-mono-tech font-bold text-slate-300 flex items-center justify-center">
                        {issue.assignee.avatar}
                      </span>
                    </div>
                  </div>
                ))}

                {filteredIssues.length === 0 && (
                  <div className="py-12 text-center text-xs text-slate-500">
                    No issues matching your filter criteria.
                  </div>
                )}
              </div>
            )}

            {/* Interactive Issue Display: Board View */}
            {viewMode === 'board' && (
              <div className="p-4 grid grid-cols-1 md:grid-cols-4 gap-4 bg-[#0a0b0e]">
                {(['Backlog', 'Todo', 'In Progress', 'Done'] as const).map((columnStatus) => {
                  const columnIssues = filteredIssues.filter((i) => i.status === columnStatus);
                  return (
                    <div key={columnStatus} className="bg-[#101116] rounded-lg border border-[#1e2028] p-3 flex flex-col">
                      <div className="flex items-center justify-between mb-3 text-xs font-medium text-slate-400">
                        <div className="flex items-center gap-1.5">
                          {getStatusIcon(columnStatus)}
                          <span>{columnStatus}</span>
                        </div>
                        <span className="text-[11px] font-mono-tech px-1.5 py-0.5 rounded bg-[#191a22] text-slate-500">
                          {columnIssues.length}
                        </span>
                      </div>

                      <div className="space-y-2 flex-1">
                        {columnIssues.map((issue) => (
                          <div
                            key={issue.id}
                            className="p-2.5 rounded-md bg-[#16171f] border border-[#232532] hover:border-[#5E6AD2]/50 transition-all cursor-pointer group"
                          >
                            <div className="flex items-center justify-between mb-1.5">
                              <span className="text-[10px] font-mono-tech text-slate-500">{issue.key}</span>
                              {getPriorityBadge(issue.priority)}
                            </div>
                            <p className="text-xs text-slate-200 group-hover:text-white leading-snug mb-2 font-medium">
                              {issue.title}
                            </p>
                            <div className="flex items-center justify-between pt-1 border-t border-[#20222d] text-[10px] text-slate-500">
                              <span>{issue.project}</span>
                              <span className="w-5 h-5 rounded-full bg-[#20222d] text-slate-300 font-mono-tech flex items-center justify-center font-bold">
                                {issue.assignee.avatar}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </section>

        {/* FEATURE BENTO GRID: Linear Standards */}
        <section className="max-w-6xl mx-auto px-4 py-16">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              A new species of product tool
            </h2>
            <p className="text-sm sm:text-base text-[#8a8f98]">
              Purpose-built for modern teams with AI workflows at its core. Linear sets a new standard for speed, craft, and intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Card 1 */}
            <div className="p-6 rounded-xl bg-[#0e0f14] border border-[#20222a] hover:border-[#5E6AD2]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#181922] border border-[#282a38] flex items-center justify-center mb-4 text-[#5E6AD2]">
                  <Zap className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Built for speed</h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-relaxed">
                  Synchronized in real-time. Sub-50ms local database queries and instant keyboard shortcuts keep you in creative flow without waiting for loading spinners.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b1d24] flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">50ms sync</span>
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">Zero lag</span>
              </div>
            </div>

            {/* Card 2 */}
            <div className="p-6 rounded-xl bg-[#0e0f14] border border-[#20222a] hover:border-[#5E6AD2]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#181922] border border-[#282a38] flex items-center justify-center mb-4 text-amber-400">
                  <Cpu className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">AI and automations</h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-relaxed">
                  Let AI agents draft issue specifications, detect duplicate tasks, summarize customer bug reports, and automatically close resolved items upon Git PR merge.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b1d24] flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">Auto-Triage</span>
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">Agent Ready</span>
              </div>
            </div>

            {/* Card 3 */}
            <div className="p-6 rounded-xl bg-[#0e0f14] border border-[#20222a] hover:border-[#5E6AD2]/40 transition-all flex flex-col justify-between group">
              <div>
                <div className="w-10 h-10 rounded-lg bg-[#181922] border border-[#282a38] flex items-center justify-center mb-4 text-emerald-400">
                  <Layers className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-white mb-2">Cycles & Roadmaps</h3>
                <p className="text-xs sm:text-sm text-[#8a8f98] leading-relaxed">
                  Linear Cycles provide automated momentum without the ceremony of rigid sprints. Track velocity automatically and maintain bird&apos;s-eye roadmaps for stakeholders.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-[#1b1d24] flex items-center gap-2 text-xs font-mono-tech text-slate-400">
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">Velocity Tracking</span>
                <span className="px-1.5 py-0.5 rounded bg-[#181922] border border-[#262835]">Auto-Rollover</span>
              </div>
            </div>
          </div>
        </section>

        {/* KEYBOARD SHORTCUTS MATRIX */}
        <section className="max-w-4xl mx-auto px-4 py-16 border-t border-[#1b1c22]">
          <h2 className="text-xl sm:text-2xl font-medium text-center text-white mb-8">
            Keyboard-first design. Memorize less, fly faster.
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs">
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">New Issue</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">C</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Command Menu</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">⌘K</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Set Priority</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">P</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Assign Member</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">A</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Change Status</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">S</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Filter View</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">F</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Quick Search</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">/</kbd>
            </div>
            <div className="p-3 rounded-lg bg-[#111218] border border-[#20222d] flex items-center justify-between">
              <span className="text-slate-400">Close Modal</span>
              <kbd className="px-2 py-1 bg-[#1a1c24] border border-[#292c3a] text-white rounded font-mono-tech font-bold">ESC</kbd>
            </div>
          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="py-20 text-center max-w-3xl mx-auto px-4 border-t border-[#1a1b22]">
          <h2 className="text-3xl sm:text-5xl font-medium text-white mb-4 tracking-tight">
            Built for the future. Available today.
          </h2>
          <p className="text-sm sm:text-base text-slate-400 mb-8 max-w-xl mx-auto">
            Experience the product tool chosen by fast-growing startups and world-class engineering teams.
          </p>
          <div className="flex items-center justify-center gap-3">
            <button className="px-6 py-3 rounded-lg bg-[#5E6AD2] hover:bg-[#6c78e0] text-white font-medium text-sm transition-all shadow-lg shadow-[#5E6AD2]/25">
              Start using Linear
            </button>
            <button className="px-5 py-3 rounded-lg bg-[#16171d] hover:bg-[#20222a] border border-[#292c38] text-white font-medium text-sm transition-all">
              Talk to Sales
            </button>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-[#1b1c22] py-12 bg-[#08090a] text-xs text-slate-500">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <span className="font-semibold text-slate-300 font-sans">Linear</span>
            <span>— The system for product development</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://linear.app" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Official Website</a>
            <span>·</span>
            <span>Reverse Engineering Case Study</span>
            <span>·</span>
            <span className="font-mono-tech text-slate-400">v2.0 UI Lab</span>
          </div>
        </div>
      </footer>

      {/* INTERACTIVE COMMAND PALETTE MODAL (⌘K) */}
      {isCommandMenuOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 bg-black/70 backdrop-blur-sm p-4">
          <div className="w-full max-w-xl rounded-xl bg-[#14151b] border border-[#2b2d39] shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-100">
            <div className="flex items-center px-4 py-3 border-b border-[#22242f] gap-2">
              <Search className="w-4 h-4 text-slate-400" />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search issues..."
                className="w-full bg-transparent text-sm text-white placeholder-slate-500 focus:outline-none"
              />
              <button
                onClick={() => setIsCommandMenuOpen(false)}
                className="text-slate-500 hover:text-slate-300 p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-2 divide-y divide-[#1e202b] text-xs">
              <div className="pb-2">
                <span className="px-2 py-1 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider block">Quick Actions</span>
                <button
                  onClick={() => {
                    setIsCommandMenuOpen(false);
                    setIsNewIssueOpen(true);
                  }}
                  className="w-full px-3 py-2 rounded-md hover:bg-[#1f212c] text-slate-200 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Plus className="w-3.5 h-3.5 text-[#5E6AD2]" /> Create new issue
                  </span>
                  <kbd className="px-1.5 py-0.5 rounded bg-[#292b39] text-[10px] text-slate-400 font-mono-tech">C</kbd>
                </button>
                <button
                  onClick={() => {
                    setActiveTab('cycle');
                    setIsCommandMenuOpen(false);
                  }}
                  className="w-full px-3 py-2 rounded-md hover:bg-[#1f212c] text-slate-200 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="flex items-center gap-2">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> Go to Active Cycle 42
                  </span>
                  <span className="text-[10px] text-slate-500">Navigation</span>
                </button>
              </div>

              <div className="pt-2">
                <span className="px-2 py-1 text-[10px] font-mono-tech text-slate-500 uppercase tracking-wider block">Issues in Sprint</span>
                {issues.slice(0, 3).map((issue) => (
                  <div
                    key={issue.id}
                    onClick={() => setIsCommandMenuOpen(false)}
                    className="w-full px-3 py-2 rounded-md hover:bg-[#1f212c] text-slate-300 flex items-center justify-between text-left cursor-pointer"
                  >
                    <span className="truncate max-w-[340px] text-slate-200">{issue.title}</span>
                    <span className="text-[10px] font-mono-tech text-slate-500">{issue.key}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0f1015] px-4 py-2 border-t border-[#22242f] flex items-center justify-between text-[11px] text-slate-500 font-mono-tech">
              <span>Navigation: <kbd className="text-slate-400">↑↓</kbd> Select</span>
              <span>Open: <kbd className="text-slate-400">↵</kbd></span>
              <span>Dismiss: <kbd className="text-slate-400">ESC</kbd></span>
            </div>
          </div>
        </div>
      )}

      {/* CREATE ISSUE MODAL (C) */}
      {isNewIssueOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
          <form
            onSubmit={handleCreateIssue}
            className="w-full max-w-lg rounded-xl bg-[#14151c] border border-[#2b2d39] shadow-2xl p-5 animate-in fade-in zoom-in-95 duration-100"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#21232d] mb-4">
              <span className="text-sm font-medium text-white flex items-center gap-2">
                <Plus className="w-4 h-4 text-[#5E6AD2]" />
                New Issue in Cycle 42
              </span>
              <button
                type="button"
                onClick={() => setIsNewIssueOpen(false)}
                className="text-slate-500 hover:text-white p-1"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-xs font-mono-tech text-slate-400 mb-1">Issue Title</label>
                <input
                  type="text"
                  autoFocus
                  placeholder="e.g. Implement agentic triage rules..."
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#0c0d12] border border-[#272935] text-sm text-white placeholder-slate-600 focus:outline-none focus:border-[#5E6AD2]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <label className="block font-mono-tech text-slate-400 mb-1">Priority</label>
                  <select
                    value={newPriority}
                    onChange={(e) => setNewPriority(e.target.value as Issue['priority'])}
                    className="w-full px-3 py-2 rounded-lg bg-[#0c0d12] border border-[#272935] text-white focus:outline-none focus:border-[#5E6AD2]"
                  >
                    <option value="Urgent">Urgent</option>
                    <option value="High">High</option>
                    <option value="Medium">Medium</option>
                    <option value="Low">Low</option>
                  </select>
                </div>
                <div>
                  <label className="block font-mono-tech text-slate-400 mb-1">Project</label>
                  <input
                    disabled
                    value="Core Engine"
                    className="w-full px-3 py-2 rounded-lg bg-[#0c0d12] border border-[#272935] text-slate-400 cursor-not-allowed"
                  />
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-[#21232d] flex items-center justify-between">
              <span className="text-[11px] text-slate-500 font-mono-tech">
                Press <kbd className="text-slate-400">ESC</kbd> to cancel
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsNewIssueOpen(false)}
                  className="px-3 py-1.5 rounded-lg text-xs text-slate-400 hover:text-white transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={!newTitle.trim()}
                  className="px-4 py-1.5 rounded-lg bg-[#5E6AD2] hover:bg-[#6c78e0] disabled:opacity-50 text-white text-xs font-medium transition-all shadow-md shadow-[#5E6AD2]/25"
                >
                  Create Issue
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
export default LinearRecreation;
