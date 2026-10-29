import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  Volume2,
  Clock,
  Sparkles,
  ShoppingBag,
  Check,
  ArrowRight,
  Compass,
} from 'lucide-react';

interface Vessel {
  id: string;
  name: string;
  nameJp: string;
  artist: string;
  firing: string;
  year: string;
  notes: string;
}

export function JapaneseMinimalismWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeVessel, setActiveVessel] = useState<string>('v-1');
  const [brewingTime, setBrewingTime] = useState(120);
  const [timerRunning, setTimerRunning] = useState(false);
  const [chimePlayed, setChimePlayed] = useState(false);
  const [inquiryName, setInquiryName] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    let interval: any = null;
    if (timerRunning && brewingTime > 0) {
      interval = setInterval(() => {
        setBrewingTime((prev) => prev - 1);
      }, 1000);
    } else if (brewingTime === 0 && timerRunning) {
      setTimerRunning(false);
      setChimePlayed(true);
      setTimeout(() => setChimePlayed(false), 5000);
    }
    return () => clearInterval(interval);
  }, [timerRunning, brewingTime]);

  const vessels: Vessel[] = [
    {
      id: 'v-1',
      name: 'Black Raku Tea Bowl',
      nameJp: '黒楽茶碗「静寂」',
      artist: 'Sasaki Kōen, 5th Generation',
      firing: 'Hand-shaped, rapid reduction kiln at 1,020°C with carbon quench',
      year: 'Reiwa 7 / 2025',
      notes:
        'Sculpted solely with fingers without a potter’s wheel. The coarse kamo-river clay retains hot water temperature while offering gentle thermal resonance in both cupped palms.',
    },
    {
      id: 'v-2',
      name: 'Uji Tencha & Gyokuro Vessel',
      nameJp: '宇治玉露 宝瓶',
      artist: 'Yamashiro Studio',
      firing: 'Unfinished Shigaraki stoneware with wood-ash crystalline deposit',
      year: 'Reiwa 6 / 2024',
      notes:
        'A handle-less hōhin teapot calibrated for low-temperature 55°C extractions of shade-grown Uji Gyokuro. Delivers high L-theanine sweetness with zero tannic astringency.',
    },
    {
      id: 'v-3',
      name: 'Cast Iron Kettle (Nanbu Tekki)',
      nameJp: '南部鉄瓶「水月」',
      artist: 'Nobuo Suzuki Workshop, Iwate',
      firing: 'Traditional urushi lacquer-cured charcoal casting',
      year: 'Reiwa 7 / 2025',
      notes:
        'Heated slowly over binchōtan charcoal. The porous iron matrix softens mineral content, elevating spring water to alkaline silky clarity.',
    },
  ];

  const currentVessel = vessels.find((v) => v.id === activeVessel) || vessels[0];

  const handleStartTimer = () => {
    setBrewingTime(120);
    setTimerRunning(true);
  };

  const handleSendInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inquiryName.trim()) return;
    setInquirySent(true);
    setTimeout(() => {
      setInquirySent(false);
      setInquiryName('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#f9f7f2] text-[#1a1918] font-editorial selection:bg-[#4a4742] selection:text-[#f9f7f2] antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1a1918] text-[#f9f7f2] text-xs font-mono hover:bg-[#33312e] transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Atmospheric Space Header with Meaningful Negative Space */}
      <header className="border-b border-[#e8e4da] px-8 py-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row md:items-baseline justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl tracking-widest text-[#1a1918]">
                KISA
              </span>
              <span className="text-base font-light text-[#7a766e]">
                喫茶 · 茶と器
              </span>
            </div>
            <p className="text-xs font-mono text-[#8a857b]">
              HIGASHIYAMA, KYOTO · ESTABLISHED 1924
            </p>
          </div>

          <nav className="flex items-center gap-8 text-xs font-mono text-[#636058]">
            <a href="#vessels" className="hover:text-[#1a1918] transition-colors">茶器 (Vessels)</a>
            <a href="#ma" className="hover:text-[#1a1918] transition-colors">間 (Ma Concept)</a>
            <a href="#brewing" className="hover:text-[#1a1918] transition-colors">点前 (Brewing)</a>
            <a href="#inquiry" className="hover:text-[#1a1918] transition-colors">訪問 (Visit)</a>
          </nav>
        </div>
      </header>

      {/* Main Contemplative Container */}
      <main className="max-w-6xl mx-auto px-8 py-20 space-y-32">
        {/* Spatial Hero with Deliberate Negative Space (Ma) */}
        <section className="space-y-8 max-w-3xl">
          <span className="text-xs font-mono text-[#8a857b] tracking-widest uppercase block">
            THE ART OF PURPOSEFUL EMPTINESS · 間
          </span>

          <h1 className="text-4xl sm:text-6xl font-light text-[#1a1918] tracking-tight leading-snug">
            Where Space Itself Becomes the Container for Quietude.
          </h1>

          <p className="text-base sm:text-lg text-[#636058] leading-relaxed font-light">
            In our tearoom nestled beneath the cedar slopes of Higashiyama, tea is not consumed in haste.
            It is an unhurried communion between fire, well water, rough mountain clay, and the silent interval
            between breaths.
          </p>

          <div className="pt-4 flex items-center gap-8 text-xs font-mono text-[#7a766e]">
            <span>京都 東山 清水</span>
            <span>·</span>
            <span>WATER SOURCE: OTOWA PURE SPRING</span>
            <span>·</span>
            <span>SINGLE-ORIGIN UJI</span>
          </div>
        </section>

        {/* Selected Vessels & Ceramics (Interactive Showcase) */}
        <section id="vessels" className="space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#e8e4da] pb-4">
            <div>
              <span className="text-xs font-mono text-[#8a857b] uppercase tracking-widest block">
                01 // HAND-FIRED VESSELS
              </span>
              <h2 className="text-2xl sm:text-3xl font-light text-[#1a1918] mt-1">
                The Touch of Living Clay
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8a857b]">RAKU & SHIGARAKI STONIEWARE</span>
          </div>

          {/* Vessel Selector Pills */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {vessels.map((v) => (
              <div
                key={v.id}
                onClick={() => setActiveVessel(v.id)}
                className={`p-6 border transition-all cursor-pointer space-y-3 ${
                  activeVessel === v.id
                    ? 'border-[#1a1918] bg-white shadow-sm'
                    : 'border-[#e8e4da] bg-[#f4f1e8] hover:bg-white'
                }`}
              >
                <div className="flex justify-between items-baseline text-xs font-mono text-[#8a857b]">
                  <span>{v.nameJp}</span>
                  <span>{v.year}</span>
                </div>
                <h3 className="text-lg font-light text-[#1a1918]">{v.name}</h3>
                <p className="text-xs font-mono text-[#7a766e]">{v.artist}</p>
              </div>
            ))}
          </div>

          {/* Vessel Focus Dossier */}
          <div className="bg-white border border-[#e8e4da] p-8 sm:p-14 space-y-6">
            <div className="space-y-2 border-b border-[#e8e4da] pb-4">
              <span className="text-xs font-mono text-[#8a857b] uppercase">
                {currentVessel.firing}
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-[#1a1918]">
                {currentVessel.name} · {currentVessel.nameJp}
              </h3>
              <p className="text-xs font-mono text-[#7a766e]">Maker: {currentVessel.artist}</p>
            </div>

            <p className="text-base text-[#4a4742] leading-relaxed max-w-3xl font-light">
              {currentVessel.notes}
            </p>

            <div className="pt-4 flex items-center justify-between text-xs font-mono text-[#8a857b]">
              <span>ONE-OF-A-KIND ARCHIVAL PIECE</span>
              <a
                href="#inquiry"
                className="text-[#1a1918] underline hover:text-[#8a857b] cursor-pointer"
              >
                Inquire for Gallery Acquisition →
              </a>
            </div>
          </div>
        </section>

        {/* The Aesthetic Concept of Ma (Philosophy Section) */}
        <section id="ma" className="space-y-8 max-w-3xl border-t border-[#e8e4da] pt-16">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8a857b] uppercase tracking-widest">
              02 // SPATIAL PHILOSOPHY
            </span>
            <h2 className="text-3xl font-light text-[#1a1918]">
              The Aesthetic of Ma (間)
            </h2>
          </div>

          <p className="text-base sm:text-lg text-[#636058] leading-relaxed font-light">
            In western design, space is frequently treated as a void waiting to be occupied by content.
            In classical Japanese thought, *ma* is not an absence, but an active, resonant entity.
            It is the silence between notes that gives music its beauty; the unpainted white silk that
            allows the ink stroke to breathe; the pause between words where mutual understanding arises.
          </p>

          <blockquote className="border-l-2 border-[#1a1918] pl-6 py-2 text-base italic text-[#4a4742]">
            "Do not design the vessel alone. Design the space around the drinker’s hand as they raise it to their lips."
          </blockquote>
        </section>

        {/* Interactive Tea Contemplation Timer (Two-Minute Infusion Guide) */}
        <section id="brewing" className="bg-[#f2efe6] border border-[#e8e4da] p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b border-[#e8e4da] pb-4">
            <div>
              <span className="text-xs font-mono text-[#8a857b] uppercase tracking-widest">
                03 // RITUAL CONTEMPLATION
              </span>
              <h2 className="text-2xl font-light text-[#1a1918] mt-1">
                Two-Minute Gyokuro Infusion Timer
              </h2>
            </div>
            <span className="text-xs font-mono text-[#8a857b]">OPTIMAL EXTRACTION: 55°C</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 py-4">
            <div className="space-y-1 text-center sm:text-left">
              <div className="text-4xl sm:text-5xl font-mono text-[#1a1918]">
                {Math.floor(brewingTime / 60)}:{(brewingTime % 60).toString().padStart(2, '0')}
              </div>
              <p className="text-xs font-mono text-[#8a857b]">
                {timerRunning ? 'Infusing shade-grown leaves...' : 'Ready for hot spring water'}
              </p>
            </div>

            <button
              onClick={handleStartTimer}
              disabled={timerRunning}
              className="px-8 py-3 bg-[#1a1918] hover:bg-[#33312e] text-[#f9f7f2] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
            >
              {timerRunning ? 'Contemplating...' : 'Begin 2-Minute Brew'}
            </button>
          </div>

          {chimePlayed && (
            <div className="p-3 bg-white border border-[#1a1918] text-xs font-mono text-[#1a1918] text-center">
              ✦ The leaves have unfurled. Pour the liquor steadily into small cups down to the final drop.
            </div>
          )}
        </section>

        {/* Private Teahouse Inquiry */}
        <section id="inquiry" className="max-w-2xl mx-auto space-y-8 border-t border-[#e8e4da] pt-16 text-center">
          <div className="space-y-2">
            <span className="text-xs font-mono text-[#8a857b] uppercase tracking-widest">
              04 // TEA SERVICE VISITATION
            </span>
            <h2 className="text-3xl font-light text-[#1a1918]">
              Reserve a Private Tea Sitting
            </h2>
            <p className="text-xs sm:text-sm text-[#7a766e] font-light max-w-md mx-auto">
              Limited to four guests per afternoon to preserve silence and unhurried spatial contemplation.
            </p>
          </div>

          <form onSubmit={handleSendInquiry} className="space-y-4">
            <input
              type="text"
              required
              placeholder="Guest Name / Organization"
              value={inquiryName}
              onChange={(e) => setInquiryName(e.target.value)}
              className="w-full bg-white border border-[#e8e4da] p-3 text-xs font-mono text-[#1a1918] placeholder:text-[#a8a49a] focus:outline-none focus:border-[#1a1918]"
            />
            <button
              type="submit"
              className="w-full py-3 bg-[#1a1918] hover:bg-[#33312e] text-[#f9f7f2] font-mono text-xs uppercase tracking-wider transition-colors cursor-pointer"
            >
              Submit Sitting Request
            </button>

            {inquirySent && (
              <p className="text-xs text-emerald-800 font-mono">
                ✓ Sitting registered for {inquiryName}. Our tea master will send arrival coordinates.
              </p>
            )}
          </form>
        </section>
      </main>

      {/* Contemplative Minimalist Footer */}
      <footer className="border-t border-[#e8e4da] bg-[#f9f7f2] py-12 px-8 text-xs font-mono text-[#8a857b]">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 喫茶 KISA · HIGASHIYAMA, KYOTO · ALL RIGHTS RESERVED</span>
          </div>
          <div className="flex gap-6">
            <span>侘寂 (Wabi-Sabi)</span>
            <span>·</span>
            <span>幽玄 (Yūgen)</span>
            <span>·</span>
            <span>物哀 (Mono no Aware)</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
