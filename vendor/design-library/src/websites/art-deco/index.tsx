import React, { useState } from 'react';
import {
  ArrowLeft,
  Calendar,
  Sparkles,
  Compass,
  ArrowRight,
  Check,
  Clock,
  MapPin,
} from 'lucide-react';

interface SalonSuite {
  id: string;
  name: string;
  floor: string;
  feature: string;
  materials: string;
  rate: string;
  description: string;
}

export function ArtDecoWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeSuite, setActiveSuite] = useState<string>('suite-1');
  const [reservationDate, setReservationDate] = useState('2026-11-12');
  const [guestName, setGuestName] = useState('');
  const [reserved, setReserved] = useState(false);

  const suites: SalonSuite[] = [
    {
      id: 'suite-1',
      name: 'The Chrysler Grand Penthouse',
      floor: 'Floor 68 / Tower Apex',
      feature: 'Direct Symmetrical View of Midtown Manhattan Spire',
      materials: 'Black Belgian Marble, Polished Nickel Railings, Exotic Macassar Ebony',
      rate: '$3,800 / night',
      description:
        'A magnificent duplex suite crowned by authentic 1928 stepped sunburst plaster ceilings and floor-to-ceiling geometric fenestration overlooking Lexington Avenue.',
    },
    {
      id: 'suite-2',
      name: 'The Palm Court Conservatory Suite',
      floor: 'Floor 14 / Mezzanine Terrace',
      feature: 'Private Solarium with Frosted Lalique Glass Skylight',
      materials: 'Verde Antique Marble, Cast Bronze Sconces, Hand-Knotted Silk Carpeting',
      rate: '$2,400 / night',
      description:
        'Overlooking our historic two-story indoor palm court, featuring custom wrought-iron fan grilles and an authentic working wood-burning fireplace.',
    },
    {
      id: 'suite-3',
      name: 'The Obsidian Evening Salon',
      floor: 'Floor 32 / West Promenade',
      feature: 'Acoustic Sound Isolation & Private Grand Piano',
      materials: 'Midnight Blue Velvet, Gilded Brass Fluting, Honed Nero Marquina Stone',
      rate: '$1,950 / night',
      description:
        'Conceived as an intimate retreat for visiting composers and writers, finished in deep midnight hues with stepped chevron moldings and brushed brass appointments.',
    },
  ];

  const handleReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setReserved(true);
    setTimeout(() => {
      setReserved(false);
      setGuestName('');
    }, 4000);
  };

  const currentSuite = suites.find((s) => s.id === activeSuite) || suites[0];

  return (
    <div className="min-h-screen bg-[#08090c] text-[#fbf8f0] font-editorial selection:bg-[#d4af37] selection:text-black antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-none bg-[#12141a] text-[#d4af37] text-xs font-mono hover:bg-[#d4af37] hover:text-black transition-colors cursor-pointer border border-[#d4af37]/40 shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Top Symmetrical Stepped Header Motif */}
      <div className="border-b border-[#d4af37]/30 bg-[#0c0e14] py-2 px-6 text-xs font-mono text-[#c5a880] flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>THE MAJESTIC HOTEL & SALON</span>
          <span className="hidden sm:inline">· 42ND & LEXINGTON · MANHATTAN</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>ESTABLISHED 1928</span>
          <span>✦</span>
          <span>HISTORIC LANDMARK PRESERVATION</span>
        </div>
      </div>

      {/* Symmetrical Art Deco Architectural Masthead */}
      <header className="border-b-2 border-[#d4af37]/40 bg-[#08090c] px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center space-y-4">
          {/* Decorative Stepped Fan Motif */}
          <div className="flex items-center justify-center gap-2 text-[#d4af37]">
            <span className="h-[1px] w-16 bg-[#d4af37]/40" />
            <span className="text-xs tracking-[0.3em] font-mono uppercase">♦ N E W · Y O R K ♦</span>
            <span className="h-[1px] w-16 bg-[#d4af37]/40" />
          </div>

          <h1 className="text-5xl sm:text-7xl font-bold tracking-[0.2em] uppercase text-white font-serif-luxury">
            THE MAJESTIC
          </h1>

          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.25em] text-[#d4af37] pt-2">
            <a href="#suites" className="hover:text-white transition-colors">Grand Suites</a>
            <span>·</span>
            <a href="#salon" className="hover:text-white transition-colors">The Palm Court</a>
            <span>·</span>
            <a href="#heritage" className="hover:text-white transition-colors">1928 History</a>
            <span>·</span>
            <a href="#reserve" className="hover:text-white transition-colors">Reservations</a>
          </div>
        </div>
      </header>

      {/* Symmetrical Grand Hero Section */}
      <section className="relative py-24 px-6 max-w-5xl mx-auto text-center space-y-8">
        {/* Architectural Framed Border Box */}
        <div className="border border-[#d4af37]/40 p-8 sm:p-14 relative space-y-6">
          {/* Stepped Corner Ornaments */}
          <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#d4af37]" />
          <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#d4af37]" />
          <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#d4af37]" />
          <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#d4af37]" />

          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37] block">
            A MONUMENT OF THE MACHINE AGE
          </span>

          <h2 className="text-3xl sm:text-5xl md:text-6xl font-serif-luxury font-bold uppercase tracking-[0.1em] text-white leading-tight">
            Geometric Glamour Above Lexington Avenue.
          </h2>

          <p className="text-sm sm:text-base font-light text-[#ded8ce] leading-relaxed max-w-2xl mx-auto tracking-wide">
            Erected in 1928 at the height of Manhattan’s architectural renaissance.
            Soaring stepped spires, hand-cast bronze elevator cages, polished Belgian black marble,
            and an enduring celebration of early twentieth-century opulence.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em] font-mono">
            <a
              href="#suites"
              className="px-8 py-3.5 bg-[#d4af37] text-black font-bold hover:bg-white transition-colors"
            >
              Explore Residences
            </a>
            <a
              href="#reserve"
              className="px-8 py-3.5 border border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-black transition-colors"
            >
              Book Sitter Concierge
            </a>
          </div>
        </div>
      </section>

      {/* Grand Suites & Residences (Interactive Matrix) */}
      <section id="suites" className="py-20 px-6 max-w-7xl mx-auto space-y-12 border-t border-[#d4af37]/30">
        <div className="text-center space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
            HISTORIC ACCOMMODATIONS
          </span>
          <h3 className="text-3xl sm:text-4xl font-serif-luxury uppercase tracking-[0.15em] text-white">
            Residences & Tower Apex Suites
          </h3>
        </div>

        {/* Suite Selector Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {suites.map((s) => (
            <div
              key={s.id}
              onClick={() => setActiveSuite(s.id)}
              className={`p-6 border transition-all cursor-pointer space-y-4 ${
                activeSuite === s.id
                  ? 'border-[#d4af37] bg-[#12141c] shadow-lg shadow-[#d4af37]/10'
                  : 'border-[#2a2720] bg-[#0c0d12] hover:border-[#d4af37]/60'
              }`}
            >
              <div className="flex justify-between items-baseline text-xs font-mono text-[#d4af37]">
                <span>{s.floor}</span>
                <span className="font-bold text-white">{s.rate}</span>
              </div>
              <h4 className="text-xl font-serif-luxury uppercase text-white tracking-wider">
                {s.name}
              </h4>
              <p className="text-xs text-[#a8a195] leading-relaxed line-clamp-2">
                {s.description}
              </p>
            </div>
          ))}
        </div>

        {/* Selected Suite Dossier */}
        <div className="border-2 border-[#d4af37]/60 p-8 sm:p-14 bg-[#0e1017] grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#d4af37] uppercase tracking-[0.2em]">
                {currentSuite.floor} · {currentSuite.feature}
              </span>
              <h4 className="text-3xl sm:text-4xl font-serif-luxury uppercase text-white tracking-wider">
                {currentSuite.name}
              </h4>
              <p className="text-xl font-mono text-[#d4af37]">{currentSuite.rate}</p>
            </div>

            <p className="text-sm text-[#ded8ce] leading-relaxed font-light">
              {currentSuite.description}
            </p>

            <div className="p-4 bg-[#08090c] border border-[#d4af37]/30 space-y-1 text-xs font-mono">
              <span className="text-[#d4af37] uppercase block">Architectural Appointments:</span>
              <span className="text-white">{currentSuite.materials}</span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#d4af37]/30 text-xs font-mono">
              <a
                href="#reserve"
                className="px-8 py-3 bg-[#d4af37] text-black font-bold uppercase tracking-wider hover:bg-white transition-colors"
              >
                Reserve This Suite
              </a>
              <span className="text-[#a8a195]">Includes Butler Concierge & Chauffeur</span>
            </div>
          </div>

          <div className="lg:col-span-4 border border-[#d4af37]/40 p-6 text-center space-y-4 bg-[#08090c]">
            <div className="w-16 h-16 mx-auto border-2 border-[#d4af37] flex items-center justify-center font-serif-luxury text-2xl text-[#d4af37]">
              M
            </div>
            <h5 className="font-serif-luxury text-lg uppercase text-white">The 1928 Guarantee</h5>
            <p className="text-xs text-[#a8a195] leading-relaxed font-mono">
              All appointments maintained to exact historic preservation standards approved by the National Trust.
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Concierge Section */}
      <section id="reserve" className="py-20 max-w-3xl mx-auto px-6 space-y-8 text-center border-t border-[#d4af37]/30">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-[0.3em] text-[#d4af37]">
            PROMPT CONCIERGE SERVICE
          </span>
          <h3 className="text-3xl font-serif-luxury uppercase tracking-[0.15em] text-white">
            Request an Historic Sojourn
          </h3>
          <p className="text-xs font-mono text-[#a8a195]">
            Our chief steward will confirm availability and bespoke arrivals.
          </p>
        </div>

        <form onSubmit={handleReserve} className="border border-[#d4af37]/40 p-8 bg-[#0c0e14] space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
            <div>
              <label className="block text-left text-[#d4af37] uppercase mb-1">Guest Full Name</label>
              <input
                type="text"
                required
                placeholder="Lord / Lady / Citizen"
                value={guestName}
                onChange={(e) => setGuestName(e.target.value)}
                className="w-full bg-[#08090c] border border-[#d4af37]/40 p-3 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
            <div>
              <label className="block text-left text-[#d4af37] uppercase mb-1">Arrival Date</label>
              <input
                type="date"
                value={reservationDate}
                onChange={(e) => setReservationDate(e.target.value)}
                className="w-full bg-[#08090c] border border-[#d4af37]/40 p-3 text-white focus:outline-none focus:border-[#d4af37]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#d4af37] text-black font-bold uppercase tracking-[0.2em] hover:bg-white transition-colors cursor-pointer text-xs"
          >
            Dispatch Sojourn Request
          </button>

          {reserved && (
            <div className="p-3 bg-[#08090c] border border-[#d4af37] text-xs font-mono text-[#d4af37]">
              ✓ Reservation registered for {guestName} on {reservationDate}. The Chief Concierge has received your dossier.
            </div>
          )}
        </form>
      </section>

      {/* Symmetrical Art Deco Footer */}
      <footer className="border-t-2 border-[#d4af37]/40 py-12 px-6 text-center text-xs font-mono text-[#a8a195] space-y-2">
        <p className="tracking-[0.2em] text-[#d4af37] uppercase">THE MAJESTIC HOTEL & APEX RESIDENCES</p>
        <p>LEXINGTON AVENUE AT 42ND STREET · NEW YORK, NY 10017</p>
      </footer>
    </div>
  );
}
