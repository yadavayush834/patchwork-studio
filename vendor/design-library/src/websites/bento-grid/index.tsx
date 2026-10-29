import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  CheckCircle2,
  Circle,
  Plus,
  Trash2,
  Sparkles,
  Command,
  Zap,
  Cpu,
  Layers,
  ShieldCheck,
  Activity,
  ArrowRight,
  Database,
  Search,
  Sliders,
  Check,
  TrendingUp,
  Clock,
} from 'lucide-react';

interface TaskItem {
  id: string;
  title: string;
  category: string;
  completed: boolean;
  priority: 'p1' | 'p2' | 'p3';
}

export function BentoGridWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  // Interactive Focus Stopwatch State
  const [timerSeconds, setTimerSeconds] = useState(1500); // 25 min default
  const [timerRunning, setTimerRunning] = useState(false);
  const [timerMode, setTimerMode] = useState<'focus' | 'short-break' | 'deep-state'>('focus');

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && timerSeconds > 0) {
      interval = setInterval(() => setTimerSeconds((prev) => prev - 1), 1000);
    } else if (timerSeconds === 0) {
      setTimerRunning(false);
    }
    return () => clearInterval(interval);
  }, [timerRunning, timerSeconds]);

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60);
    const s = secs % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  // Interactive Quick Capture Scratchpad State
  const [notes, setNotes] = useState<string[]>([
    'Synthesize Q3 neural embedding benchmarks with engineering lead',
    'Verify SQLite CRDT peer-to-peer sync edge cases under 200ms latency',
  ]);
  const [newNote, setNewNote] = useState('');

  const handleAddNote = (e: React.FormEvent) => {
    e.preventDefault();
    if (newNote.trim()) {
      setNotes([newNote.trim(), ...notes]);
      setNewNote('');
    }
  };

  // Interactive Task Matrix State
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 't1', title: 'Ship Rust WASM tokenizer runtime', category: 'Core Engine', completed: true, priority: 'p1' },
    { id: 't2', title: 'Audit local-first cryptographic vault keys', category: 'Security', completed: false, priority: 'p1' },
    { id: 't3', title: 'Refactor semantic graph canvas renderer', category: 'UI Performance', completed: false, priority: 'p2' },
    { id: 't4', title: 'Draft v2.6 migration guide for Raycast extension', category: 'Ecosystem', completed: false, priority: 'p3' },
  ]);

  const toggleTask = (id: string) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Pricing Switcher State
  const [annualBilling, setAnnualBilling] = useState(true);

  // Early Access Form State
  const [inviteEmail, setInviteEmail] = useState('');
  const [inviteSubmitted, setInviteSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-[#090d16] text-slate-100 font-sans selection:bg-cyan-500 selection:text-black">
      {/* Return to Gallery Navigation Bar */}
      <div className="border-b border-[#1e293b] bg-[#0c1220] px-4 py-2.5 flex items-center justify-between text-xs font-mono">
        <div className="flex items-center gap-3">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-1.5 px-3 py-1 rounded border border-[#2b3954] hover:bg-[#182338] text-slate-200 transition-colors cursor-pointer font-bold"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-cyan-400" />
            <span>RETURN TO GALLERY</span>
          </button>
          <span className="hidden sm:inline-block text-slate-500">•</span>
          <span className="hidden sm:inline-block text-slate-400">
            WEBSITE #17 // BENTO GRID MODULAR DESIGN
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-[11px] text-emerald-400 font-bold uppercase tracking-wider">
            CRDT CLUSTER HEALTHY (12ms)
          </span>
        </div>
      </div>

      {/* Main App Navigation Header */}
      <header className="border-b border-[#1a2336] bg-[#090d16]/80 backdrop-blur-md sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-cyan-500 to-indigo-600 p-[1px]">
              <div className="w-full h-full bg-[#090d16] rounded-[11px] flex items-center justify-center">
                <Cpu className="w-4 h-4 text-cyan-400" />
              </div>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-base tracking-tight text-white font-grotesk">
                  KRONOS OS
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  v2.6 BENTO ARCHITECTURE
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:block font-mono">
                Cognitive Workspace & Second Brain
              </span>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-8 text-xs font-mono text-slate-400">
            <a href="#grid-hero" className="hover:text-cyan-400 transition-colors">
              Modules
            </a>
            <a href="#intelligence" className="hover:text-cyan-400 transition-colors">
              Neural Mesh
            </a>
            <a href="#integrations" className="hover:text-cyan-400 transition-colors">
              Local Vault
            </a>
            <a href="#pricing" className="hover:text-cyan-400 transition-colors">
              Tiers
            </a>
          </div>

          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#121929] border border-[#1f2b42] text-[11px] font-mono text-slate-400">
              <Command className="w-3 h-3 text-cyan-400" />
              <span>K Palette</span>
            </div>
            <a
              href="#pricing"
              className="px-4 py-1.5 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs transition-colors shadow-lg shadow-cyan-500/20"
            >
              Get Kronos Free
            </a>
          </div>
        </div>
      </header>

      {/* Hero Introduction */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 pb-6 space-y-4 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-400 text-xs font-mono">
          <Sparkles className="w-3.5 h-3.5" />
          <span>TRUE BENTO GRID ART DIRECTION // ASYMMETRIC MODULARITY</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white font-grotesk max-w-4xl mx-auto leading-tight">
          A modular operating canvas for <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-indigo-400">high-velocity minds.</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-400 max-w-2xl mx-auto">
          Replace fractured productivity tabs with unified spatial modules. Every card is an active computing surface with local-first SQLite persistence.
        </p>
      </section>

      {/* CORE BENTO GRID SECTION: Varied Col/Row Spans, Densities, and Interactive Widgets */}
      <section id="grid-hero" className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[minmax(180px,auto)]">
          {/* Bento Module 1: Big 2x2 Focus Stopwatch Widget */}
          <div className="md:col-span-2 lg:col-span-2 lg:row-span-2 bg-[#0e1424] border border-[#1d273e] hover:border-[#2f3f63] rounded-3xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden group transition-all duration-300 shadow-xl">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping" />
                  <span className="text-xs font-mono text-cyan-400 uppercase tracking-wider font-bold">
                    MODULE 01 // NEURAL FOCUS ENGINE
                  </span>
                </div>
                <div className="flex items-center gap-1 bg-[#141b2e] p-1 rounded-xl border border-[#202b44] text-[11px] font-mono">
                  <button
                    onClick={() => {
                      setTimerMode('focus');
                      setTimerSeconds(1500);
                      setTimerRunning(false);
                    }}
                    className={`px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                      timerMode === 'focus' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    25m Focus
                  </button>
                  <button
                    onClick={() => {
                      setTimerMode('short-break');
                      setTimerSeconds(300);
                      setTimerRunning(false);
                    }}
                    className={`px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                      timerMode === 'short-break' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    5m Rest
                  </button>
                  <button
                    onClick={() => {
                      setTimerMode('deep-state');
                      setTimerSeconds(3000);
                      setTimerRunning(false);
                    }}
                    className={`px-2 py-0.5 rounded-lg transition-colors cursor-pointer ${
                      timerMode === 'deep-state' ? 'bg-cyan-500 text-black font-bold' : 'text-slate-400 hover:text-white'
                    }`}
                  >
                    50m Deep
                  </button>
                </div>
              </div>

              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-white font-grotesk">
                  Interactive Deep Work Session
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Bi-directional distraction blocking with automated background state serialization.
                </p>
              </div>

              {/* Big Stopwatch Display */}
              <div className="py-6 flex flex-col sm:flex-row items-center justify-around gap-6 bg-[#080d17]/80 rounded-2xl border border-[#172138] p-6">
                <div className="text-center">
                  <div className="text-5xl sm:text-6xl font-black font-mono tracking-tight text-white">
                    {formatTime(timerSeconds)}
                  </div>
                  <div className="text-[11px] font-mono text-cyan-400/80 mt-1 uppercase tracking-widest">
                    {timerRunning ? 'Session In Progress' : 'Session Paused'}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setTimerRunning(!timerRunning)}
                    className="flex items-center gap-2 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-sm transition-all shadow-lg shadow-cyan-500/20 cursor-pointer"
                  >
                    {timerRunning ? (
                      <>
                        <Pause className="w-4 h-4 fill-black" />
                        <span>Pause</span>
                      </>
                    ) : (
                      <>
                        <Play className="w-4 h-4 fill-black" />
                        <span>Start Flow</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => {
                      setTimerRunning(false);
                      setTimerSeconds(timerMode === 'focus' ? 1500 : timerMode === 'short-break' ? 300 : 3000);
                    }}
                    className="p-3 rounded-xl bg-[#141b2e] hover:bg-[#1a243d] border border-[#222e47] text-slate-300 transition-colors cursor-pointer"
                    title="Reset Stopwatch"
                  >
                    <RotateCcw className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center justify-between gap-3 text-xs font-mono text-slate-500 border-t border-[#172138]">
              <span>TARGET: 4 BLOCKS / DAY</span>
              <span className="text-emerald-400 font-bold">STREAK: 19 DAYS ACTIVE</span>
            </div>
          </div>

          {/* Bento Module 2: Live Quick-Capture Scratchpad (col-span-1, row-span-2) */}
          <div className="bg-[#0e1424] border border-[#1d273e] hover:border-[#2f3f63] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl lg:row-span-2">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-bold">
                  MODULE 02 // SCRATCHPAD
                </span>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-indigo-500/10 text-indigo-300 border border-indigo-500/20">
                  {notes.length} ITEMS
                </span>
              </div>

              <div>
                <h3 className="text-lg font-bold text-white font-grotesk">
                  Instant Capture
                </h3>
                <p className="text-xs text-slate-400">
                  Local-first scratchpad buffer. Automatically synced to your vector index.
                </p>
              </div>

              {/* Note Input */}
              <form onSubmit={handleAddNote} className="space-y-2">
                <div className="relative">
                  <input
                    type="text"
                    value={newNote}
                    onChange={(e) => setNewNote(e.target.value)}
                    placeholder="Capture immediate thought..."
                    className="w-full bg-[#080d17] border border-[#1c263c] rounded-xl pl-3 pr-8 py-2 text-xs text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-indigo-400 font-mono transition-colors"
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 text-indigo-400 hover:text-white transition-colors cursor-pointer"
                    title="Add thought"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Note Stream */}
              <div className="space-y-2 max-h-60 overflow-y-auto pr-1">
                {notes.map((note, index) => (
                  <div
                    key={index}
                    className="p-3 rounded-xl bg-[#080d17] border border-[#172033] text-xs font-mono text-slate-300 flex items-start justify-between gap-2 group"
                  >
                    <span className="line-clamp-2 leading-relaxed">{note}</span>
                    <button
                      onClick={() => setNotes(notes.filter((_, i) => i !== index))}
                      className="text-slate-600 hover:text-rose-400 opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer shrink-0"
                    >
                      <Trash2 className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-3 border-t border-[#172138] text-[11px] font-mono text-slate-500 flex items-center justify-between">
              <span>Auto-indexed locally</span>
              <span className="text-indigo-400">⌘⇧C</span>
            </div>
          </div>

          {/* Bento Module 3: Weekly Velocity Metric (col-span-1) */}
          <div className="bg-[#0e1424] border border-[#1d273e] hover:border-[#2f3f63] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider font-bold">
                MODULE 03 // VELOCITY
              </span>
              <TrendingUp className="w-4 h-4 text-emerald-400" />
            </div>

            <div className="py-2">
              <div className="text-3xl font-black text-white font-mono">+38.4%</div>
              <div className="text-xs text-slate-400 mt-0.5">Throughput vs Previous Week</div>

              {/* Simple Sparkline Graphic */}
              <div className="flex items-end gap-1.5 h-12 mt-4 pt-2 border-t border-[#172138]">
                {[35, 48, 62, 54, 78, 88, 94].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1">
                    <div
                      className="w-full rounded-sm bg-gradient-to-t from-emerald-600/40 to-emerald-400 transition-all hover:bg-emerald-300"
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[9px] font-mono text-slate-600">
                      {['M', 'T', 'W', 'T', 'F', 'S', 'S'][idx]}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-emerald-400 font-bold">
              41 tasks closed this cycle
            </div>
          </div>

          {/* Bento Module 4: Live Task Matrix (col-span-1 or 2) */}
          <div className="bg-[#0e1424] border border-[#1d273e] hover:border-[#2f3f63] rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 shadow-xl">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono text-amber-400 uppercase tracking-wider font-bold">
                MODULE 04 // TASK PIPELINE
              </span>
              <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/10 text-amber-400 border border-amber-500/20">
                {tasks.filter((t) => !t.completed).length} ACTIVE
              </span>
            </div>

            <div className="py-2 space-y-2">
              <div className="text-base font-bold text-white font-grotesk">
                Priority Dispatch
              </div>

              <div className="space-y-2 max-h-36 overflow-y-auto pr-1">
                {tasks.map((task) => (
                  <div
                    key={task.id}
                    onClick={() => toggleTask(task.id)}
                    className={`p-2 rounded-xl border text-xs font-mono flex items-center justify-between gap-2 cursor-pointer transition-colors ${
                      task.completed
                        ? 'bg-[#080d17]/50 border-[#172033] text-slate-600 line-through'
                        : 'bg-[#080d17] border-[#1d273e] text-slate-200 hover:border-amber-400/60'
                    }`}
                  >
                    <div className="flex items-center gap-2 truncate">
                      {task.completed ? (
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      ) : (
                        <Circle className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      )}
                      <span className="truncate">{task.title}</span>
                    </div>
                    <span className="text-[9px] uppercase font-bold px-1.5 py-0.5 rounded bg-[#151e33] text-slate-400 shrink-0">
                      {task.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="text-[11px] font-mono text-slate-500 flex justify-between">
              <span>Click to toggle state</span>
              <span className="text-amber-400 font-bold">Next: Rust WASM</span>
            </div>
          </div>
        </div>
      </section>

      {/* SECONDARY BENTO SUITE: Architectural Capabilities & Integrations */}
      <section id="intelligence" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#1c263c] pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
              SECOND BENTO TILES // ZERO COMPROMISE ARCHITECTURE
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-white font-grotesk mt-1">
              Built on uncompromising technical pillars
            </h2>
          </div>
          <p className="text-xs font-mono text-slate-400 max-w-sm">
            Local-first SQLite storage, zero cloud telemetry requirements, and instant cryptographic backup.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {/* Card A: Local SQLite & CRDT */}
          <div className="bg-[#0e1424] border border-[#1d273e] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Database className="w-5 h-5 text-cyan-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-grotesk">
              Local-First SQLite Engine
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every keystroke is recorded directly to an embedded WebAssembly SQLite database. Operates flawlessly on airplanes, off-grid cabins, or hostile Wi-Fi networks.
            </p>
            <div className="p-3 rounded-xl bg-[#080d17] border border-[#182338] text-[11px] font-mono text-cyan-400 space-y-1">
              <div>DB_LATENCY: 0.14ms read // 0.38ms write</div>
              <div className="text-slate-500">ENCRYPTION: XChaCha20-Poly1305</div>
            </div>
          </div>

          {/* Card B: Semantic Vector Search */}
          <div className="bg-[#0e1424] border border-[#1d273e] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Search className="w-5 h-5 text-indigo-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-grotesk">
              On-Device Semantic Vector Search
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Find notes and code snippets by conceptual meaning, not just exact keyword matches. Embeddings are generated purely within client memory using lightweight ONNX.
            </p>
            <div className="p-3 rounded-xl bg-[#080d17] border border-[#182338] text-[11px] font-mono text-indigo-300 space-y-1">
              <div>EMBEDDINGS: 384-dimensional dense vectors</div>
              <div className="text-slate-500">INDEX: Hierarchical Navigable Small World (HNSW)</div>
            </div>
          </div>

          {/* Card C: Keyboard Ergonomics & Raycast Sync */}
          <div className="bg-[#0e1424] border border-[#1d273e] rounded-3xl p-6 sm:p-8 space-y-4 shadow-xl">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
              <Command className="w-5 h-5 text-purple-400" />
            </div>
            <h3 className="text-lg font-bold text-white font-grotesk">
              Zero-Mouse Keyboard First Flow
            </h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Every action has a dedicated two-key mnemonic. Open command bar, dispatch tasks, toggle focus sessions, and jump between projects without moving hands from home row.
            </p>
            <div className="p-3 rounded-xl bg-[#080d17] border border-[#182338] text-[11px] font-mono text-purple-300 space-y-1">
              <div>VIM KEYMAPS: Native H/J/K/L navigation</div>
              <div className="text-slate-500">CLI INTEGRATION: `kronos capture "note"`</div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULAR PRICING BENTO */}
      <section id="pricing" className="max-w-7xl mx-auto px-4 sm:px-6 py-12 space-y-8">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest font-bold">
            TRANSPARENT VALUE MATRIX
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-white font-grotesk">
            Predictable pricing for sovereign minds
          </h2>
          <div className="flex items-center justify-center gap-3 pt-2">
            <span className={`text-xs font-mono ${!annualBilling ? 'text-white font-bold' : 'text-slate-500'}`}>
              Monthly
            </span>
            <button
              onClick={() => setAnnualBilling(!annualBilling)}
              className="w-12 h-6 rounded-full bg-[#162138] border border-[#233150] p-1 flex items-center cursor-pointer transition-colors"
            >
              <div
                className={`w-4 h-4 rounded-full bg-cyan-400 transition-transform ${
                  annualBilling ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs font-mono flex items-center gap-1 ${annualBilling ? 'text-white font-bold' : 'text-slate-500'}`}>
              <span>Annual</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 font-bold">
                SAVE 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Tier 1: Local Solo */}
          <div className="bg-[#0e1424] border border-[#1d273e] rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase">TIER 01 // INDIVIDUAL</div>
              <h3 className="text-xl font-bold text-white font-grotesk">Local Solo</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white font-mono">$0</span>
                <span className="text-xs text-slate-500 font-mono">/ forever</span>
              </div>
              <p className="text-xs text-slate-400">
                Pure local SQLite storage on a single machine. No registration or credit card required.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Unlimited local notes & focus blocks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>On-device HNSW vector search</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Full Bento modular canvas customization</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-[#2b3954] hover:bg-[#182338] text-white font-mono text-xs font-bold transition-colors cursor-pointer">
              Download Desktop Binary
            </button>
          </div>

          {/* Tier 2: Cognitive Pro (Highlighted) */}
          <div className="bg-[#10182b] border-2 border-cyan-500/60 rounded-3xl p-8 flex flex-col justify-between space-y-6 relative shadow-2xl shadow-cyan-500/10">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-cyan-500 text-black font-mono text-[10px] font-black uppercase tracking-wider">
              MOST POPULAR FOR ENGINEERS
            </div>
            <div className="space-y-4">
              <div className="text-xs font-mono text-cyan-400 uppercase font-bold">TIER 02 // PRO SYNC</div>
              <h3 className="text-xl font-bold text-white font-grotesk">Cognitive Pro</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white font-mono">
                  {annualBilling ? '$16' : '$20'}
                </span>
                <span className="text-xs text-slate-500 font-mono">/ month billed {annualBilling ? 'annually' : 'monthly'}</span>
              </div>
              <p className="text-xs text-slate-400">
                Encrypted CRDT peer-to-peer sync across Mac, Linux, and iOS with zero-knowledge cloud relay.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Everything in Local Solo</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Multi-device encrypted CRDT sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Bi-directional Linear & GitHub webhook sync</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Automated end-to-end encrypted backup vault</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-mono text-xs font-bold transition-all shadow-lg shadow-cyan-500/20 cursor-pointer">
              Start 14-Day Pro Trial
            </button>
          </div>

          {/* Tier 3: Studio Team */}
          <div className="bg-[#0e1424] border border-[#1d273e] rounded-3xl p-8 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono text-slate-400 uppercase">TIER 03 // STUDIO</div>
              <h3 className="text-xl font-bold text-white font-grotesk">Studio Collective</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-black text-white font-mono">
                  {annualBilling ? '$32' : '$38'}
                </span>
                <span className="text-xs text-slate-500 font-mono">/ seat / month</span>
              </div>
              <p className="text-xs text-slate-400">
                Collaborative knowledge graph, shared sprint boards, and organization-wide vector memory.
              </p>
              <ul className="space-y-2 text-xs font-mono text-slate-300">
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Everything in Cognitive Pro</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Shared peer workspaces with RBAC</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Audit logs & SOC2 compliance exports</span>
                </li>
              </ul>
            </div>
            <button className="w-full py-2.5 rounded-xl border border-[#2b3954] hover:bg-[#182338] text-white font-mono text-xs font-bold transition-colors cursor-pointer">
              Book Team Demo
            </button>
          </div>
        </div>
      </section>

      {/* Early Access Verification Modal */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 py-12">
        <div className="rounded-3xl bg-gradient-to-r from-cyan-950/40 to-indigo-950/40 border border-[#253350] p-8 sm:p-12 text-center space-y-6">
          <div className="w-12 h-12 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center mx-auto">
            <Zap className="w-6 h-6 text-cyan-400" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-white font-grotesk">
              Request Your Personal Cryptographic Seat Key
            </h3>
            <p className="text-xs sm:text-sm text-slate-400 max-w-lg mx-auto">
              Join 18,400+ developers, researchers, and systems architects who operate with Kronos daily.
            </p>
          </div>

          {inviteSubmitted ? (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 max-w-md mx-auto space-y-2 font-mono text-xs text-emerald-400">
              <div className="font-bold flex items-center justify-center gap-2">
                <Check className="w-4 h-4" />
                <span>SEAT KEY PROVISIONED FOR {inviteEmail}</span>
              </div>
              <p className="text-[11px] text-slate-300">
                Your cryptographic seed string is ready. Check your inbox for the immediate activation download link.
              </p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                if (inviteEmail) setInviteSubmitted(true);
              }}
              className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto"
            >
              <input
                type="email"
                required
                value={inviteEmail}
                onChange={(e) => setInviteEmail(e.target.value)}
                placeholder="developer@domain.com"
                className="w-full sm:w-80 bg-[#080d17] border border-[#202c45] rounded-xl px-4 py-2.5 text-xs text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400 font-mono"
              />
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black font-bold text-xs font-mono transition-colors shadow-lg shadow-cyan-500/20 cursor-pointer shrink-0"
              >
                Claim Key
              </button>
            </form>
          )}
        </div>
      </section>

      {/* App Colophon Footer */}
      <footer className="border-t border-[#1a2336] py-10 font-mono text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-slate-400">
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span className="font-bold text-slate-200">KRONOS OS // v2.6</span>
            <span>— The Modular Bento Workspace</span>
          </div>
          <div className="flex items-center gap-6 text-[11px]">
            <span>LOCAL SQLITE</span>
            <span>·</span>
            <span>CRDT SYNC</span>
            <span>·</span>
            <span>APACHE 2.0 LICENSED CLIENT</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
