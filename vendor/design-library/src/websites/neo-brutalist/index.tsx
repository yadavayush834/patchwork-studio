import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Trophy,
  Calendar,
  Users,
  HelpCircle,
  Check,
  ChevronDown,
  Clock,
  ArrowRight,
  Flame,
  Code,
  Laptop,
} from 'lucide-react';

interface Track {
  id: string;
  name: string;
  prize: string;
  color: string;
  iconText: string;
  description: string;
  sponsor: string;
}

interface ScheduleItem {
  time: string;
  title: string;
  speaker: string;
  tag: string;
}

export function NeoBrutalistWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeDay, setActiveDay] = useState<1 | 2 | 3>(1);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [registerOpen, setRegisterOpen] = useState(false);
  const [hackerName, setHackerName] = useState('');
  const [hackerTrack, setHackerTrack] = useState('Autonomous Agents');
  const [registeredBadge, setRegisteredBadge] = useState(false);

  const tracks: Track[] = [
    {
      id: 't-1',
      name: 'Autonomous AI & Multi-Agent Swarms',
      prize: '$25,000 CASH',
      color: 'bg-[#d4ff00]',
      iconText: '🤖',
      description: 'Build self-orchestrating agent teams with tool-use, WebAssembly sandboxes, and collaborative reasoning.',
      sponsor: 'OpenCompute Foundation',
    },
    {
      id: 't-2',
      name: 'Zero-Knowledge & Privacy Primitives',
      prize: '$20,000 CASH',
      color: 'bg-[#00f0ff]',
      iconText: '🔐',
      description: 'Design cryptographic proofs, private local-first verification, and anonymous voting architectures.',
      sponsor: 'Veritas Zero Systems',
    },
    {
      id: 't-3',
      name: 'Climate Hardware & Smart Sensors',
      prize: '$15,000 CASH',
      color: 'bg-[#ff5caa]',
      iconText: '⚡',
      description: 'Microcontroller sensor networks, solar micro-grid monitoring, and low-power mesh radios.',
      sponsor: 'TerraGrid Renewables',
    },
    {
      id: 't-4',
      name: 'Accessible Assistive Computing',
      prize: '$15,000 CASH',
      color: 'bg-[#ffe600]',
      iconText: '♿',
      description: 'Eye-tracking interfaces, haptic navigation gloves, and voice-synthesized accessibility agents.',
      sponsor: 'NeuroAccess Labs',
    },
  ];

  const schedule: Record<1 | 2 | 3, ScheduleItem[]> = {
    1: [
      { time: '17:00 CET', title: 'Check-In & Physical Badge Stamping', speaker: 'Welcome Desk', tag: 'Arrival' },
      { time: '18:30 CET', title: 'Opening Ceremony & Track Keynotes', speaker: 'Main Auditorium', tag: 'Ceremony' },
      { time: '20:00 CET', title: 'Speed Team Formation & Pitch Fire', speaker: 'Hacker Lounge B', tag: 'Networking' },
      { time: '21:00 CET', title: 'HACKING COMMENCES // 48H CLOCK STARTS', speaker: 'Global Arena', tag: 'Milestone' },
    ],
    2: [
      { time: '09:00 CET', title: 'Sunrise Espresso & Pastry Fuel', speaker: 'Dining Hall', tag: 'Food' },
      { time: '14:00 CET', title: 'Agent Debugging & Mentor Clinic', speaker: 'Mentor Station 04', tag: 'Workshop' },
      { time: '20:00 CET', title: 'Midnight Neapolitan Pizza Marathon', speaker: 'Patio & Courtyard', tag: 'Food' },
      { time: '02:00 CET', title: 'Super Mario Kart 8 Tournament', speaker: 'Chill Stage', tag: 'Fun' },
    ],
    3: [
      { time: '12:00 CET', title: 'PROJECT SUBMISSION DEADLINE [HARD STOP]', speaker: 'Devpost Portal', tag: 'CRITICAL' },
      { time: '13:30 CET', title: 'Science Fair Expo & Live Judging', speaker: 'Exhibition Hall', tag: 'Judging' },
      { time: '16:30 CET', title: 'Top 10 Finalist Stage Demos', speaker: 'Main Stage', tag: 'Keynote' },
      { time: '18:00 CET', title: '$75,000 Grand Awards & Afterparty', speaker: 'Main Auditorium', tag: 'Victory' },
    ],
  };

  const faqs = [
    {
      q: 'Who can participate in HackPulse 2026?',
      a: 'Any enrolled undergraduate, graduate, or high school student worldwide! No prior hackathon experience is required. We provide mentors, workshops, and hardware kits.',
    },
    {
      q: 'How large can my hack squad be?',
      a: 'Teams can range from 1 to 4 hackers. You can register solo and meet teammates during our Speed Team Formation mixer on Friday evening!',
    },
    {
      q: 'Is HackPulse free to attend?',
      a: '100% free! We cover 6 meals, unlimited energy drinks, snacks, swag kits, cloud compute credits, and hardware components.',
    },
    {
      q: 'What hardware will be provided on site?',
      a: 'Our hardware lab has Raspberry Pi 5 boards, ESP32 microcontrollers, Arduino kits, thermal cameras, LiDAR sensors, and solder stations.',
    },
  ];

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (!hackerName.trim()) return;
    setRegisteredBadge(true);
    setTimeout(() => {
      setRegisterOpen(false);
      setRegisteredBadge(false);
      setHackerName('');
    }, 3500);
  };

  return (
    <div className="min-h-screen bg-[#fffae8] text-black font-brutal selection:bg-[#ff5caa] selection:text-black">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3.5 py-2 bg-black text-[#d4ff00] font-black text-xs uppercase border-3 border-black shadow-[3px_3px_0_0_#000] active:translate-x-0.5 active:translate-y-0.5 active:shadow-none transition-all cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Top Graphic Marquee Ticker */}
      <div className="border-b-4 border-black bg-[#d4ff00] py-2 px-4 overflow-hidden whitespace-nowrap text-xs font-black uppercase tracking-wider flex items-center justify-between">
        <div className="flex items-center gap-6 animate-pulse">
          <span>⚡ 48 HOURS OF PURE CREATION</span>
          <span>✦ $75,000 IN CASH PRIZES</span>
          <span>⚡ 1,200 HACKERS GLOBALLY</span>
          <span>✦ HARDWARE LAB ON-SITE</span>
          <span>⚡ COPENHAGEN & HYBRID ONLINE</span>
        </div>
      </div>

      {/* Neo-Brutalist Navigation Header */}
      <header className="border-b-4 border-black bg-white px-6 py-4 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-none bg-[#ff5caa] border-3 border-black shadow-[3px_3px_0_0_#000] flex items-center justify-center font-black text-lg text-black">
              ⚡
            </div>
            <div>
              <span className="font-black text-xl tracking-tight leading-none block">
                HACK//PULSE '26
              </span>
              <span className="text-[10px] font-mono font-bold text-neutral-600">
                OCTOBER 24-26 · COPENHAGEN
              </span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6 text-sm font-black">
            <a href="#tracks" className="hover:text-[#ff5caa] transition-colors">Tracks</a>
            <a href="#schedule" className="hover:text-[#ff5caa] transition-colors">Schedule</a>
            <a href="#prizes" className="hover:text-[#ff5caa] transition-colors">Prizes</a>
            <a href="#faqs" className="hover:text-[#ff5caa] transition-colors">FAQs</a>
          </nav>

          <button
            onClick={() => setRegisterOpen(true)}
            className="px-5 py-2.5 bg-[#00f0ff] hover:bg-[#20e0f0] text-black font-black text-xs uppercase border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
          >
            Claim Free Hacker Pass
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b-4 border-black bg-[#ff5caa] py-16 sm:py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-block px-4 py-1.5 bg-[#d4ff00] border-3 border-black shadow-[3px_3px_0_0_#000] text-xs font-black uppercase">
              🚀 STUDENT REGISTRATIONS NOW OPEN // LIMITED 1,200 SPOTS
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-black leading-none uppercase tracking-tight">
              BUILD THE IMPOSSIBLE. SHIP IN 48 HOURS.
            </h1>

            <p className="text-base sm:text-lg font-bold text-black max-w-2xl leading-relaxed">
              Join the world's most energetic student hackathon. Build autonomous agent swarms, zero-knowledge
              cryptography, and climate hardware alongside 1,200 creators.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => setRegisterOpen(true)}
                className="px-8 py-4 bg-[#ffe600] hover:bg-[#ffd000] text-black font-black text-sm uppercase border-4 border-black shadow-[5px_5px_0_0_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Register Your Squad Free</span>
                <ArrowRight className="w-5 h-5" />
              </button>

              <a
                href="#tracks"
                className="px-6 py-4 bg-white hover:bg-neutral-100 text-black font-black text-sm uppercase border-4 border-black shadow-[5px_5px_0_0_#000] active:translate-x-1.5 active:translate-y-1.5 active:shadow-none transition-all cursor-pointer"
              >
                Explore $75k Tracks
              </a>
            </div>
          </div>

          {/* Right Live Millisecond Ticker Card */}
          <div className="lg:col-span-4 bg-white border-4 border-black p-6 shadow-[8px_8px_0_0_#000] space-y-6">
            <div className="flex items-center justify-between border-b-3 border-black pb-3">
              <span className="font-black text-xs uppercase flex items-center gap-1.5">
                <Flame className="w-4 h-4 text-[#ff5caa]" />
                COUNTDOWN TO KICKOFF
              </span>
              <span className="px-2 py-0.5 bg-[#d4ff00] border-2 border-black font-black text-[10px]">
                LIVE
              </span>
            </div>

            <div className="grid grid-cols-4 gap-2 text-center">
              <div className="bg-[#fffae8] border-3 border-black p-2.5 shadow-[2px_2px_0_0_#000]">
                <div className="text-2xl font-black">14</div>
                <div className="text-[10px] font-black uppercase text-neutral-600">DAYS</div>
              </div>
              <div className="bg-[#fffae8] border-3 border-black p-2.5 shadow-[2px_2px_0_0_#000]">
                <div className="text-2xl font-black">08</div>
                <div className="text-[10px] font-black uppercase text-neutral-600">HRS</div>
              </div>
              <div className="bg-[#fffae8] border-3 border-black p-2.5 shadow-[2px_2px_0_0_#000]">
                <div className="text-2xl font-black">42</div>
                <div className="text-[10px] font-black uppercase text-neutral-600">MINS</div>
              </div>
              <div className="bg-[#fffae8] border-3 border-black p-2.5 shadow-[2px_2px_0_0_#000]">
                <div className="text-2xl font-black text-[#ff5caa]">19</div>
                <div className="text-[10px] font-black uppercase text-neutral-600">SECS</div>
              </div>
            </div>

            <div className="p-3 bg-[#d4ff00] border-3 border-black text-xs font-black leading-snug">
              📍 COPENHAGEN TECH ARENA + DISCORD VIRTUAL METAVERSE
            </div>
          </div>
        </div>
      </section>

      {/* Tracks Section */}
      <section id="tracks" className="border-b-4 border-black py-20 px-6 max-w-7xl mx-auto space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-4 border-black pb-4">
          <div>
            <span className="text-xs font-black uppercase tracking-wider text-[#ff5caa] block">
              FOUR COMPETITIVE CATEGORIES
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight">
              Hackathon Tracks & Bounties
            </h2>
          </div>
          <div className="text-xl font-black bg-[#d4ff00] border-3 border-black px-4 py-1.5 shadow-[3px_3px_0_0_#000]">
            TOTAL POOL: $75,000 USD
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tracks.map((trk) => (
            <div
              key={trk.id}
              className={`${trk.color} border-4 border-black p-6 sm:p-8 shadow-[6px_6px_0_0_#000] space-y-4 flex flex-col justify-between`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-3xl">{trk.iconText}</span>
                  <span className="px-3 py-1 bg-black text-white font-black text-xs uppercase border-2 border-black">
                    {trk.prize}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight">
                  {trk.name}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-black leading-relaxed">
                  {trk.description}
                </p>
              </div>

              <div className="pt-4 border-t-3 border-black flex items-center justify-between text-xs font-black">
                <span>SPONSORED BY: {trk.sponsor}</span>
                <span className="underline cursor-pointer hover:text-white">View APIs →</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Schedule */}
      <section id="schedule" className="border-b-4 border-black bg-white py-20 px-6">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b-4 border-black pb-4">
            <div>
              <span className="text-xs font-black uppercase text-[#00f0ff] block">
                TIMELINE OF MADNESS
              </span>
              <h2 className="text-3xl sm:text-4xl font-black uppercase">
                48-Hour Weekend Schedule
              </h2>
            </div>

            {/* Day Switchers */}
            <div className="flex items-center gap-2">
              {[1, 2, 3].map((dayNum) => (
                <button
                  key={dayNum}
                  onClick={() => setActiveDay(dayNum as any)}
                  className={`px-4 py-2 border-3 border-black font-black text-xs uppercase transition-all cursor-pointer ${
                    activeDay === dayNum
                      ? 'bg-[#d4ff00] shadow-[3px_3px_0_0_#000]'
                      : 'bg-neutral-100 hover:bg-neutral-200'
                  }`}
                >
                  Day 0{dayNum}
                </button>
              ))}
            </div>
          </div>

          <div className="divide-y-3 divide-black border-4 border-black bg-[#fffae8] shadow-[6px_6px_0_0_#000]">
            {schedule[activeDay].map((item, idx) => (
              <div key={idx} className="p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-4">
                  <span className="font-mono font-black text-sm bg-black text-[#d4ff00] px-2.5 py-1">
                    {item.time}
                  </span>
                  <span className="font-black text-base">{item.title}</span>
                </div>
                <div className="flex items-center gap-3 text-xs font-black">
                  <span className="text-neutral-600">{item.speaker}</span>
                  <span className="px-2 py-0.5 bg-[#00f0ff] border-2 border-black uppercase text-[10px]">
                    {item.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section id="faqs" className="py-20 px-6 max-w-5xl mx-auto space-y-8">
        <div className="border-b-4 border-black pb-3">
          <h2 className="text-3xl font-black uppercase tracking-tight">
            Frequently Asked Inquiries
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="border-4 border-black bg-white shadow-[4px_4px_0_0_#000] transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-black text-base flex items-center justify-between cursor-pointer"
                >
                  <span>{faq.q}</span>
                  <span className="w-8 h-8 rounded-none border-2 border-black bg-[#ffe600] flex items-center justify-center font-black text-lg">
                    {isOpen ? '−' : '+'}
                  </span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm font-bold text-neutral-800 leading-relaxed border-t-2 border-black pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Interactive Registration Modal */}
      {registerOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-[#d4ff00] border-4 border-black p-6 sm:p-8 max-w-md w-full shadow-[10px_10px_0_0_#000] space-y-6 relative">
            <button
              onClick={() => setRegisterOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 bg-black text-white font-black flex items-center justify-center border-2 border-white cursor-pointer hover:bg-neutral-800"
            >
              ✕
            </button>

            <div className="space-y-1">
              <span className="text-xs font-black uppercase text-[#ff5caa]">
                OFFICIAL APPLICATION PASS
              </span>
              <h3 className="text-2xl font-black uppercase">
                Claim Hacker Pass 2026
              </h3>
            </div>

            <form onSubmit={handleRegister} className="space-y-4">
              <div>
                <label className="text-xs font-black uppercase block mb-1">
                  Full Name / Alias
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alex Rivera"
                  value={hackerName}
                  onChange={(e) => setHackerName(e.target.value)}
                  className="w-full bg-white border-3 border-black p-2.5 text-xs font-black focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-black uppercase block mb-1">
                  Target Track
                </label>
                <select
                  value={hackerTrack}
                  onChange={(e) => setHackerTrack(e.target.value)}
                  className="w-full bg-white border-3 border-black p-2.5 text-xs font-black focus:outline-none cursor-pointer"
                >
                  <option>Autonomous AI & Multi-Agent Swarms</option>
                  <option>Zero-Knowledge & Privacy Primitives</option>
                  <option>Climate Hardware & Smart Sensors</option>
                  <option>Accessible Assistive Computing</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#ff5caa] hover:bg-[#ff3b80] text-black font-black text-xs uppercase border-3 border-black shadow-[4px_4px_0_0_#000] active:translate-x-1 active:translate-y-1 active:shadow-none transition-all cursor-pointer"
              >
                Generate Verified Pass →
              </button>
            </form>

            {registeredBadge && (
              <div className="p-4 bg-white border-3 border-black space-y-2 text-center animate-bounce">
                <div className="text-xs font-black text-[#ff5caa]">✓ HACKER PASS CONFIRMED!</div>
                <div className="font-mono text-sm font-black">{hackerName.toUpperCase()}</div>
                <div className="text-[10px] font-mono text-neutral-600">ID: HP26-{Math.floor(1000 + Math.random() * 9000)} · TRACK: {hackerTrack}</div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Neo-Brutalist Footer */}
      <footer className="border-t-4 border-black bg-black text-white p-8 text-center text-xs font-black uppercase space-y-2">
        <p>© 2026 HACK//PULSE GLOBAL FOUNDATION · BUILT WITH COFFEE, PIZZA & BRUTALIST PIXELS</p>
        <p className="text-neutral-500">COPENHAGEN · BERLIN · TOKYO · SAN FRANCISCO</p>
      </footer>
    </div>
  );
}
