import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  Rocket,
  Compass,
  Radio,
  Check,
  ArrowRight,
  Globe,
  Sliders,
} from 'lucide-react';

interface Spacecraft {
  id: string;
  code: string;
  name: string;
  year: string;
  propulsion: string;
  crewCapacity: string;
  velocity: string;
  mission: string;
  description: string;
}

export function RetroFuturismWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activeCraft, setActiveCraft] = useState<string>('craft-1');
  const [missionPhase, setMissionPhase] = useState<'trans-lunar' | 'orbital-dock' | 'mars-transit'>('trans-lunar');
  const [passengerName, setPassengerName] = useState('');
  const [manifestBooked, setManifestBooked] = useState(false);

  const spacecrafts: Spacecraft[] = [
    {
      id: 'craft-1',
      code: 'ORION-VII',
      name: 'Solaris Trans-Lunar Luxury Cruiser',
      year: '1968 Blueprints',
      propulsion: 'Tri-Chamber Liquid Hydrogen & Fluorine Turbo-Pumps',
      crewCapacity: '18 Passengers + 4 Flight Officers',
      velocity: '24,800 MPH (Translunar Injection)',
      mission: 'Regular Civilian Passenger Flights to Clavius Moon Base',
      description:
        'Equipped with pressurized panoramic observation cupolas, zero-gravity lounge seating, and analog telemetry dials finished in brushed aluminum and orange vinyl.',
    },
    {
      id: 'craft-2',
      code: 'VANGUARD-IX',
      name: 'Orbital Ring Modular Habitat',
      year: '1972 Commission',
      propulsion: 'Continuous Low-Thrust Cesium Ion Grid',
      crewCapacity: '64 Long-Term Cosmonauts',
      velocity: '17,500 MPH (Low Earth Orbit)',
      mission: 'Continuous Artificial Gravity Rotation at 0.78G',
      description:
        'A rotating 200-meter ring habitat providing Earth-equivalent centrifugal gravity, hydroponic spirulina gardens, and mid-century modern crew quarters.',
    },
    {
      id: 'craft-3',
      code: 'HERMES-XII',
      name: 'Nuclear Thermal Mars Expeditionary Cruiser',
      year: '1979 Deep-Space Blueprint',
      propulsion: 'NERVA-II Enriched Uranium Nuclear Thermal Engine',
      crewCapacity: '12 Explorers',
      velocity: '54,000 MPH (Mars Intercept)',
      mission: 'First Human Footprint on Elysium Planitia',
      description:
        'Featuring 1.2-meter water radiation shielding blankets, magnetic tape mission computers, and analog slide-rule trajectory redundancy computers.',
    },
  ];

  const currentCraft = spacecrafts.find((c) => c.id === activeCraft) || spacecrafts[0];

  const handleBookManifest = (e: React.FormEvent) => {
    e.preventDefault();
    if (!passengerName.trim()) return;
    setManifestBooked(true);
    setTimeout(() => {
      setManifestBooked(false);
      setPassengerName('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#faf5eb] text-[#121c2b] font-grotesk selection:bg-[#ff5a1f] selection:text-white antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#121c2b] text-[#faf5eb] text-xs font-mono hover:bg-[#ff5a1f] transition-colors cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Retro-Futuristic Mission Telemetry Header Bar */}
      <div className="border-b-2 border-[#121c2b] bg-[#ff5a1f] text-white px-6 py-2 text-xs font-mono font-bold flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>● SOLARIS AERO-ASTRONOMICS CORP.</span>
          <span className="hidden sm:inline">· MISSION CONTROL CAPE CANAVERAL</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>ORBITAL TRACKING: TRANSLUNAR TLI-4</span>
          <span>✦</span>
          <span>ANALOG 1968 PROTOCOL</span>
        </div>
      </div>

      {/* Main Mid-Century Space-Age Masthead */}
      <header className="border-b-2 border-[#121c2b] bg-[#faf5eb] px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#ff5a1f] border-2 border-[#121c2b] flex items-center justify-center font-black text-white text-lg">
                🪐
              </div>
              <div>
                <span className="text-3xl sm:text-4xl font-black uppercase tracking-tight text-[#121c2b] block leading-none">
                  SOLARIS
                </span>
                <span className="text-xs font-mono font-bold text-[#1a7578] uppercase tracking-widest">
                  COMMERCIAL ASTRONAUTICS DIVISION
                </span>
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-8 text-xs font-mono font-bold uppercase text-[#121c2b]">
            <a href="#spacecraft" className="hover:text-[#ff5a1f] transition-colors">Fleet Roster</a>
            <a href="#trajectories" className="hover:text-[#ff5a1f] transition-colors">Orbital Paths</a>
            <a href="#milestones" className="hover:text-[#ff5a1f] transition-colors">1968–1984 Log</a>
            <a href="#manifest" className="px-4 py-2 bg-[#1a7578] text-white hover:bg-[#121c2b] transition-colors">
              Book Passage
            </a>
          </nav>
        </div>
      </header>

      {/* Optimistic Space-Age Hero Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto border-b-2 border-[#121c2b]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <div className="inline-block px-3 py-1 bg-[#1a7578] text-white text-xs font-mono font-bold uppercase">
              ★ PAN-SOLAR REGULAR COMMERCIAL CRUISES NOW SCHEDULING
            </div>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-[#121c2b] uppercase tracking-tight leading-tight">
              Civilian Spaceflight to the Lunar Outposts.
            </h1>

            <p className="text-base sm:text-lg font-medium text-[#44566c] max-w-2xl leading-relaxed">
              Experience the boundless optimism of the atomic space age. Travel in pressurized comfort
              aboard the nuclear-thermal Orion fleet, complete with Pan-Am flight service, private state rooms,
              and breathtaking views of the blue Earth rise.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#spacecraft"
                className="px-8 py-3.5 bg-[#ff5a1f] hover:bg-[#d82b1b] text-white font-black text-xs uppercase tracking-wider transition-colors shadow-md"
              >
                Inspect Spacecraft Fleet
              </a>
              <a
                href="#manifest"
                className="px-8 py-3.5 border-2 border-[#121c2b] bg-white hover:bg-[#faf5eb] text-[#121c2b] font-black text-xs uppercase tracking-wider transition-colors"
              >
                Civilian Flight Manifest
              </a>
            </div>
          </div>

          {/* Right Space-Age Technical Specimen Badge */}
          <div className="lg:col-span-4 bg-white border-2 border-[#121c2b] p-8 shadow-[6px_6px_0_0_#121c2b] space-y-6 text-center">
            <div className="w-20 h-20 rounded-full border-4 border-[#ff5a1f] mx-auto flex items-center justify-center text-3xl bg-[#faf5eb]">
              🚀
            </div>
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#ff5a1f] font-bold uppercase">
                STATUS: DECK READY
              </span>
              <h3 className="text-xl font-black uppercase text-[#121c2b]">
                Next Launch Window: T-18 Days
              </h3>
              <p className="text-xs text-[#44566c] font-medium">
                Cape Canaveral Pad 39-B → Clavius Lunar Crater Hub.
              </p>
            </div>
            <div className="pt-2 border-t-2 border-[#121c2b] text-xs font-mono text-[#1a7578] font-bold">
              ATOMIC HYDROGEN THERMAL DRIVE
            </div>
          </div>
        </div>
      </section>

      {/* Spacecraft Fleet Showcase (Interactive) */}
      <section id="spacecraft" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b-2 border-[#121c2b] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a1f] font-bold">
              THE COMMERCIAL SPACEFLEET
            </span>
            <h2 className="text-3xl sm:text-5xl font-black uppercase tracking-tight text-[#121c2b] mt-1">
              Solaris Orbital Craft Roster
            </h2>
          </div>
          <span className="text-xs font-mono text-[#1a7578] font-bold">SPEC: NASA-CR-1968-084</span>
        </div>

        {/* Spacecraft Selector Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {spacecrafts.map((craft) => (
            <div
              key={craft.id}
              onClick={() => setActiveCraft(craft.id)}
              className={`p-6 border-2 border-[#121c2b] transition-all cursor-pointer space-y-3 ${
                activeCraft === craft.id
                  ? 'bg-[#121c2b] text-white shadow-[6px_6px_0_0_#ff5a1f]'
                  : 'bg-white hover:bg-[#f0ebe1] text-[#121c2b]'
              }`}
            >
              <div className="flex justify-between items-baseline text-xs font-mono">
                <span className="font-bold text-[#ff5a1f]">{craft.code}</span>
                <span>{craft.year}</span>
              </div>
              <h3 className="text-xl font-black uppercase leading-snug">{craft.name}</h3>
              <p className="text-xs font-mono line-clamp-2 opacity-80">{craft.mission}</p>
            </div>
          ))}
        </div>

        {/* Selected Craft Detailed Blueprint */}
        <div className="bg-white border-2 border-[#121c2b] p-8 sm:p-14 shadow-[8px_8px_0_0_#121c2b] space-y-8">
          <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-4 border-b-2 border-[#121c2b] pb-4">
            <div>
              <span className="text-xs font-mono text-[#1a7578] font-bold uppercase">
                {currentCraft.code} · MISSION PROFILE: {currentCraft.mission}
              </span>
              <h3 className="text-3xl sm:text-4xl font-black uppercase text-[#121c2b] mt-1">
                {currentCraft.name}
              </h3>
            </div>
            <div className="text-right font-mono text-xs text-[#ff5a1f] font-bold">
              <div>MAX VELOCITY: {currentCraft.velocity}</div>
              <div>CREW: {currentCraft.crewCapacity}</div>
            </div>
          </div>

          <p className="text-base text-[#44566c] leading-relaxed max-w-4xl font-medium">
            {currentCraft.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-[#faf5eb] border border-[#121c2b] text-xs font-mono">
            <div>
              <span className="text-[#888] uppercase block">Propulsion Architecture:</span>
              <span className="font-bold text-[#121c2b]">{currentCraft.propulsion}</span>
            </div>
            <div>
              <span className="text-[#888] uppercase block">Accommodations & Life Support:</span>
              <span className="font-bold text-[#121c2b]">{currentCraft.crewCapacity}</span>
            </div>
          </div>

          <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold">
            <span className="text-[#1a7578]">CIVILIAN BOARDING PASS AVAILABLE</span>
            <a href="#manifest" className="underline text-[#ff5a1f] hover:text-[#121c2b]">
              Reserve Seat on this Flight →
            </a>
          </div>
        </div>
      </section>

      {/* Trajectories & Milestones Timeline */}
      <section id="milestones" className="py-20 bg-[#121c2b] text-white border-t-2 border-[#121c2b]">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-2">
            <span className="text-xs font-mono text-[#ff5a1f] font-bold uppercase tracking-widest">
              HISTORICAL EXPEDITION ROADMAP
            </span>
            <h2 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
              Milestones of the Golden Space Age
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-xs font-mono">
            <div className="p-6 bg-[#1b2738] border border-white/20 space-y-2">
              <span className="text-2xl font-black text-[#ff5a1f]">1968</span>
              <h4 className="font-bold text-white uppercase">First Trans-Lunar Shuttle</h4>
              <p className="text-neutral-300">Inaugural Apollo-Solaris civilian passenger circumnavigation of the Moon.</p>
            </div>
            <div className="p-6 bg-[#1b2738] border border-white/20 space-y-2">
              <span className="text-2xl font-black text-[#ff5a1f]">1972</span>
              <h4 className="font-bold text-white uppercase">Permanent Clavius Base</h4>
              <p className="text-neutral-300">Commissioning of the first pressurized subterranean lunar city for 500 inhabitants.</p>
            </div>
            <div className="p-6 bg-[#1b2738] border border-white/20 space-y-2">
              <span className="text-2xl font-black text-[#ff5a1f]">1979</span>
              <h4 className="font-bold text-white uppercase">Nuclear Hermes Launch</h4>
              <p className="text-neutral-300">NERVA nuclear-thermal rocket achieves Mars transfer velocity in 82 days.</p>
            </div>
            <div className="p-6 bg-[#1b2738] border border-white/20 space-y-2">
              <span className="text-2xl font-black text-[#ff5a1f]">1984</span>
              <h4 className="font-bold text-white uppercase">Orbital Hotels Open</h4>
              <p className="text-neutral-300">Centrifugal gravity tourism opens for worldwide commercial vacationers.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Civilian Flight Manifest Registration */}
      <section id="manifest" className="py-24 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#ff5a1f] font-bold">
            COMMERCIAL FLIGHT MANIFEST
          </span>
          <h2 className="text-3xl sm:text-4xl font-black uppercase text-[#121c2b]">
            Secure Passage to the Lunar Frontier
          </h2>
          <p className="text-xs sm:text-sm text-[#44566c] max-w-md mx-auto font-medium">
            Join the elite manifest of civilian space explorers. Pre-flight centrifuge physicals conducted in Houston.
          </p>
        </div>

        <form onSubmit={handleBookManifest} className="max-w-md mx-auto space-y-4">
          <input
            type="text"
            required
            placeholder="Passenger Name / Passport Country"
            value={passengerName}
            onChange={(e) => setPassengerName(e.target.value)}
            className="w-full bg-white border-2 border-[#121c2b] p-3 text-xs font-mono font-bold uppercase focus:outline-none focus:border-[#ff5a1f]"
          />
          <button
            type="submit"
            className="w-full py-3.5 bg-[#ff5a1f] hover:bg-[#d82b1b] text-white font-mono font-black text-xs uppercase tracking-wider transition-colors cursor-pointer shadow-md"
          >
            Claim Orbital Boarding Pass
          </button>

          {manifestBooked && (
            <div className="p-3 bg-white border-2 border-[#121c2b] text-xs font-mono text-[#1a7578] font-bold">
              ✓ Flight ticket verified for {passengerName}. Report to Terminal Gate 4 at Cape Canaveral.
            </div>
          )}
        </form>
      </section>

      {/* Mid-Century Retro-Futurist Footer */}
      <footer className="border-t-2 border-[#121c2b] bg-[#121c2b] text-white p-8 text-xs font-mono uppercase text-center space-y-2">
        <p>© 1968–2026 SOLARIS AERO-ASTRONOMICS CORPORATION · CAPE CANAVERAL · HOUSTON · CLAVIUS MOON BASE</p>
        <p className="text-[#ff5a1f]">FOR ALL MANKIND · PRESERVED IN VINTAGE KODACHROME</p>
      </footer>
    </div>
  );
}
