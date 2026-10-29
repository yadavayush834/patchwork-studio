import React, { useState } from 'react';
import {
  ArrowLeft,
  Sparkles,
  ShoppingBag,
  Sun,
  Moon,
  Wind,
  Check,
  ChevronRight,
  ArrowUpRight,
  Heart,
} from 'lucide-react';

interface BotanicalIngredient {
  id: string;
  name: string;
  latin: string;
  harvestLocation: string;
  activeComp: string;
  benefit: string;
  colorTone: string;
}

export function OrganicWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [selectedIngredient, setSelectedIngredient] = useState<string>('ing-1');
  const [activeRitualTime, setActiveRitualTime] = useState<'morning' | 'evening'>('morning');
  const [cartCount, setCartCount] = useState(0);
  const [newsletterSoilEmail, setNewsletterSoilEmail] = useState('');
  const [joinedSoilClub, setJoinedSoilClub] = useState(false);

  const ingredients: BotanicalIngredient[] = [
    {
      id: 'ing-1',
      name: 'Wild Peloponnese Blue Tansy',
      latin: 'Tanacetum annuum',
      harvestLocation: 'Coastal Peloponnese, Greece',
      activeComp: 'Natural Chamazulene (Indigo Terpene)',
      benefit: 'Instantly pacifies cellular redness, balances reactive skin barriers, and delivers cooling lipid comfort.',
      colorTone: 'bg-[#5a7359] text-white',
    },
    {
      id: 'ing-2',
      name: 'Cold-Pressed Patagonian Bakuchiol',
      latin: 'Psoralea corylifolia',
      harvestLocation: 'Organic Andean Foothills, Chile',
      activeComp: 'Meroterpene Phenol (Phyto-Retinol)',
      benefit: 'Stimulates cellular collagen synthesis and dermal turnover without photo-sensitivity or barrier peeling.',
      colorTone: 'bg-[#c26e55] text-white',
    },
    {
      id: 'ing-3',
      name: 'Brittany Sea Kelp Bio-Ferment',
      latin: 'Laminaria digitata',
      harvestLocation: 'Emerald Coast Tidal Shallows, Brittany',
      activeComp: 'Fucoidan Polysaccharides & Marine Minerals',
      benefit: 'Deep cellular hydration matrix that mimics natural hyaluronic moisture retention over 72 sustained hours.',
      colorTone: 'bg-[#263629] text-white',
    },
    {
      id: 'ing-4',
      name: 'Provence Wild Damask Rosehip',
      latin: 'Rosa canina & Rosa damascena',
      harvestLocation: 'Hautes-Alpes Foothills, France',
      activeComp: 'Trans-Retinoic Acid & Cold-Pressed Omega 3/6/9',
      benefit: 'Restores skin elasticity, fades oxidative environmental sunspots, and replenishes depleted skin lipids.',
      colorTone: 'bg-[#8c5042] text-white',
    },
  ];

  const handleJoinSoil = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterSoilEmail.trim()) return;
    setJoinedSoilClub(true);
    setTimeout(() => {
      setJoinedSoilClub(false);
      setNewsletterSoilEmail('');
    }, 4000);
  };

  const currentIngredient = ingredients.find((i) => i.id === selectedIngredient) || ingredients[0];

  return (
    <div className="min-h-screen bg-[#f7f4ed] text-[#22251e] font-sans selection:bg-[#5a7359] selection:text-[#f7f4ed] antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#263629] text-[#f7f4ed] text-xs font-mono hover:bg-[#5a7359] transition-colors cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5 text-[#e8e2d5]" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Seasonal Harvest Status Bar */}
      <div className="bg-[#263629] text-[#e8e2d5] py-2 px-6 text-xs font-mono flex items-center justify-between border-b border-[#3b4d3f]">
        <div className="flex items-center gap-4">
          <span>🌿 SPRING HARVEST BATCH NO. 14</span>
          <span className="hidden sm:inline">· PROVENCE & PELOPONNESE DISTILLATIONS</span>
        </div>
        <div className="flex items-center gap-4 text-[11px]">
          <span>MIRON VIOLET GLASS PACKAGING</span>
          <span>·</span>
          <span className="text-[#c26e55] font-bold">100% COMPOSTABLE REFILLS</span>
        </div>
      </div>

      {/* Gentle Botanical Header */}
      <header className="border-b border-[#ded7c8] bg-[#f7f4ed]/95 backdrop-blur-md sticky top-0 z-40 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-serif-luxury text-2xl font-bold tracking-tight text-[#22251e]">
              Botanica Terra
            </span>
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#e8e2d5] text-[#5a7359] font-bold border border-[#ded7c8] hidden sm:inline">
              Cellular Phyto-Nutrition
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#5a6250]">
            <a href="#ingredients" className="hover:text-[#22251e] transition-colors">Botanical Actives</a>
            <a href="#rituals" className="hover:text-[#22251e] transition-colors">Daily Rituals</a>
            <a href="#stewardship" className="hover:text-[#22251e] transition-colors">Soil Stewardship</a>
            <a href="#refill" className="hover:text-[#22251e] transition-colors">Circular Refill</a>
          </nav>

          <button
            onClick={() => setCartCount((prev) => prev + 1)}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#e8e2d5] hover:bg-[#ded7c8] text-[#22251e] text-xs font-medium transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#5a7359]" />
            <span>Bag ({cartCount})</span>
          </button>
        </div>
      </header>

      {/* Warm Organic Hero Section */}
      <section className="py-20 sm:py-28 px-6 max-w-7xl mx-auto border-b border-[#ded7c8]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#c26e55] font-bold">
              ROOTED IN LIVING SOIL & CELLULAR BOTANY
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif-luxury font-bold text-[#22251e] leading-tight">
              Skin Nourishment Cultivated in Soil That Remembers.
            </h1>

            <p className="text-base sm:text-lg text-[#5a6250] max-w-2xl leading-relaxed">
              Formulated without synthetic preservatives, silicones, or diluted fillers. Only whole-plant
              cold-pressed seed oils, wild marine bio-ferments, and sun-infused floral extracts.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#ingredients"
                className="px-7 py-3.5 rounded-full bg-[#5a7359] hover:bg-[#485c47] text-white font-medium text-xs transition-colors shadow-sm"
              >
                Explore Active Botanicals
              </a>
              <a
                href="#rituals"
                className="px-7 py-3.5 rounded-full bg-[#e8e2d5] hover:bg-[#ded7c8] text-[#22251e] font-medium text-xs transition-colors"
              >
                Discover Daily Rituals
              </a>
            </div>
          </div>

          {/* Right Organic Clay Botanical Badge */}
          <div className="lg:col-span-4 bg-[#e8e2d5] border border-[#ded7c8] rounded-3xl p-8 space-y-6 text-center">
            <div className="w-16 h-16 rounded-full bg-[#5a7359] text-white flex items-center justify-center mx-auto text-2xl">
              🌿
            </div>
            <div className="space-y-1">
              <h3 className="font-serif-luxury text-xl font-bold text-[#22251e]">
                Certified Regenerative Organic
              </h3>
              <p className="text-xs text-[#5a6250] leading-relaxed">
                Every ingredient is harvested with seasonal rest cycles that replenish topsoil biodiversity.
              </p>
            </div>
            <div className="pt-2 border-t border-[#ded7c8] text-xs font-mono text-[#5a7359] font-bold">
              ZERO MICROPLASTICS · 100% VEGAN
            </div>
          </div>
        </div>
      </section>

      {/* Phyto-Active Ingredient Encyclopedia (Interactive) */}
      <section id="ingredients" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#5a7359] font-bold">
            POTENT WHOLE-PLANT ACTIVES
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif-luxury font-bold text-[#22251e]">
            Our Botanical Formulations
          </h2>
          <p className="text-xs sm:text-sm text-[#5a6250] max-w-lg mx-auto">
            Click any active ingredient to inspect botanical origin, active compounds, and dermal benefits.
          </p>
        </div>

        {/* Botanical Selector Pills */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {ingredients.map((ing) => (
            <button
              key={ing.id}
              onClick={() => setSelectedIngredient(ing.id)}
              className={`p-5 rounded-2xl border text-left transition-all cursor-pointer ${
                selectedIngredient === ing.id
                  ? 'bg-[#263629] text-white border-[#263629] shadow-md'
                  : 'bg-[#e8e2d5] text-[#22251e] border-[#ded7c8] hover:bg-[#ded7c8]'
              }`}
            >
              <div className="text-xs font-mono font-bold opacity-80 mb-1">{ing.latin}</div>
              <h4 className="font-serif-luxury text-base font-bold leading-snug">{ing.name}</h4>
              <div className="text-[11px] font-mono mt-2 opacity-70">{ing.harvestLocation}</div>
            </button>
          ))}
        </div>

        {/* Active Botanical Focus Box */}
        <div className="bg-[#e8e2d5] border border-[#ded7c8] rounded-3xl p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="text-xs font-mono text-[#c26e55] uppercase font-bold">
              PHYTO-CHEMICAL PROFILE: {currentIngredient.activeComp}
            </span>
            <h3 className="text-3xl font-serif-luxury font-bold text-[#22251e]">
              {currentIngredient.name}
            </h3>
            <p className="text-xs font-mono italic text-[#5a6250]">{currentIngredient.latin}</p>
            <p className="text-sm text-[#383d31] leading-relaxed max-w-2xl font-light">
              {currentIngredient.benefit}
            </p>
          </div>

          <div className="lg:col-span-4 bg-[#f7f4ed] border border-[#ded7c8] rounded-2xl p-6 text-center space-y-3">
            <div className="text-xs font-mono text-[#5a7359] uppercase font-bold">Origin Traceability</div>
            <div className="font-serif-luxury text-lg font-bold text-[#22251e]">
              {currentIngredient.harvestLocation}
            </div>
            <p className="text-xs text-[#5a6250] leading-relaxed">
              Harvested during optimal solar alignment to maximize active bio-phenol concentration.
            </p>
          </div>
        </div>
      </section>

      {/* Daily Skincare Ritual Selector */}
      <section id="rituals" className="py-24 bg-[#e8e2d5] border-y border-[#ded7c8]">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#ded7c8] pb-4">
            <div>
              <span className="text-xs font-mono text-[#5a7359] uppercase font-bold">
                ALIGN WITH CIRCADIAN CYCLES
              </span>
              <h2 className="text-3xl font-serif-luxury font-bold text-[#22251e] mt-1">
                Daily Skin Rituals
              </h2>
            </div>

            <div className="flex gap-2">
              <button
                onClick={() => setActiveRitualTime('morning')}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeRitualTime === 'morning'
                    ? 'bg-[#263629] text-white'
                    : 'bg-[#f7f4ed] text-[#22251e] hover:bg-[#ded7c8]'
                }`}
              >
                <Sun className="w-3.5 h-3.5 text-[#c26e55]" />
                <span>Morning Awakening</span>
              </button>
              <button
                onClick={() => setActiveRitualTime('evening')}
                className={`px-4 py-2 rounded-full text-xs font-medium transition-colors cursor-pointer flex items-center gap-1.5 ${
                  activeRitualTime === 'evening'
                    ? 'bg-[#263629] text-white'
                    : 'bg-[#f7f4ed] text-[#22251e] hover:bg-[#ded7c8]'
                }`}
              >
                <Moon className="w-3.5 h-3.5 text-[#5a7359]" />
                <span>Evening Restoration</span>
              </button>
            </div>
          </div>

          {activeRitualTime === 'morning' ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#c26e55] font-bold">STEP 01</span>
                <h4 className="font-serif-luxury text-lg font-bold">Rosewater Dew Mist</h4>
                <p className="text-xs text-[#5a6250]">Calms overnight dehydration and primes cellular absorption.</p>
              </div>
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#c26e55] font-bold">STEP 02</span>
                <h4 className="font-serif-luxury text-lg font-bold">Blue Tansy Phyto-Serum</h4>
                <p className="text-xs text-[#5a6250]">Counters oxidative daily urban stress with botanical chamazulene.</p>
              </div>
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#c26e55] font-bold">STEP 03</span>
                <h4 className="font-serif-luxury text-lg font-bold">Mineral Phyto-Barrier SPF 35</h4>
                <p className="text-xs text-[#5a6250]">Non-nano zinc oxide infused with coastal sea kelp peptides.</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#5a7359] font-bold">STEP 01</span>
                <h4 className="font-serif-luxury text-lg font-bold">Botanical Seed Oil Cleanse</h4>
                <p className="text-xs text-[#5a6250]">Dissolves micro-pollutants while preserving natural acid mantle.</p>
              </div>
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#5a7359] font-bold">STEP 02</span>
                <h4 className="font-serif-luxury text-lg font-bold">Bakuchiol Cellular Elixir</h4>
                <p className="text-xs text-[#5a6250]">Gentle phyto-retinol analogue restoring firm skin structure.</p>
              </div>
              <div className="bg-[#f7f4ed] border border-[#ded7c8] p-6 rounded-2xl space-y-2">
                <span className="text-xs font-mono text-[#5a7359] font-bold">STEP 03</span>
                <h4 className="font-serif-luxury text-lg font-bold">Wild Rosehip Night Balm</h4>
                <p className="text-xs text-[#5a6250]">Rich essential fatty acids providing nocturnal lipid recovery.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Sustainable Refill & Circular Flask Program */}
      <section id="refill" className="py-20 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c26e55] font-bold">
            CIRCULAR GLASS REFILL INITIATIVE
          </span>
          <h3 className="text-3xl font-serif-luxury font-bold text-[#22251e]">
            Keep the Bottle. Replenish the Earth.
          </h3>
          <p className="text-xs sm:text-sm text-[#5a6250] max-w-lg mx-auto leading-relaxed">
            Our heavy Miron violet glass flasks are crafted to endure decades. Receive lightweight,
            biodegradable cellulose refill pouches shipped quarterly to your door.
          </p>
        </div>

        <form onSubmit={handleJoinSoil} className="max-w-md mx-auto flex items-center gap-2">
          <input
            type="email"
            required
            value={newsletterSoilEmail}
            onChange={(e) => setNewsletterSoilEmail(e.target.value)}
            placeholder="your.email@botanica.eco"
            className="flex-1 bg-white border border-[#ded7c8] rounded-full px-4 py-2.5 text-xs text-[#22251e] placeholder:text-[#a8a195] focus:outline-none focus:border-[#5a7359]"
          />
          <button
            type="submit"
            className="px-6 py-2.5 rounded-full bg-[#263629] hover:bg-[#5a7359] text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Join Refill Club
          </button>
        </form>

        {joinedSoilClub && (
          <p className="text-xs text-emerald-800 font-mono">
            ✓ Welcome to the Soil Circle. Check your inbox for your inaugural sustainable welcome kit.
          </p>
        )}
      </section>

      {/* Organic Gentle Colophon Footer */}
      <footer className="border-t border-[#ded7c8] bg-[#f7f4ed] py-12 px-6 text-xs text-[#5a6250] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 BOTANICA TERRA · PROVENCE, FRANCE & PELOPONNESE, GREECE</span>
          </div>
          <div className="flex gap-6">
            <span>CERTIFIED ORGANIC</span>
            <span>·</span>
            <span>LEAPING BUNNY CRUELTY-FREE</span>
            <span>·</span>
            <span className="text-[#5a7359] font-bold">1% FOR THE PLANET</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
