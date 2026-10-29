import React, { useState } from 'react';
import {
  ArrowLeft,
  ShoppingBag,
  Sun,
  Moon,
  Sparkles,
  ArrowRight,
  ChevronRight,
  Check,
  Compass,
} from 'lucide-react';

interface FurniturePiece {
  id: string;
  name: string;
  category: string;
  designer: string;
  year: string;
  price: string;
  material: string;
  description: string;
}

export function ScandinavianWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [ambientLight, setAmbientLight] = useState<'daylight' | 'hygge'>('daylight');
  const [activeMaterial, setActiveMaterial] = useState<'oak' | 'smoked' | 'boucle'>('oak');
  const [activePiece, setActivePiece] = useState<string>('fur-1');
  const [cartCount, setCartCount] = useState(0);
  const [catalogueEmail, setCatalogueEmail] = useState('');
  const [catalogueRequested, setCatalogueRequested] = useState(false);

  const pieces: FurniturePiece[] = [
    {
      id: 'fur-1',
      name: 'The Astrid Lounge Chair',
      category: 'Seating / Lounge',
      designer: 'Henrik & Maja Lindqvist',
      year: '1958 Archive Edition',
      price: '€1,840',
      material: 'Solid Nordic White Oak & Natural Gotland Sheepskin',
      description:
        'A masterclass in organic ergonomics. Hand-shaped solid white oak frame with traditional mortise-and-tenon joinery, upholstered in untreated Gotland curly wool that ages with quiet grace.',
    },
    {
      id: 'fur-2',
      name: 'Klint Dining Monolith',
      category: 'Tables / Dining',
      designer: 'Studio Forma Copenhagen',
      year: '2024 Collection',
      price: '€3,450',
      material: 'Smoked Danish Ash, Organic Linseed Oil Finish',
      description:
        'Cut from a single 80-year-old sustainable ash tree harvested in Jutland. Subtle chamfered edges and concealed steel reinforcement allow a three-meter span with ethereal lightness.',
    },
    {
      id: 'fur-3',
      name: 'Skov Modular Credenza',
      category: 'Storage / Systems',
      designer: 'Søren Aabye',
      year: '2025 Release',
      price: '€2,680',
      material: 'Birch Plywood Core, Solid Oak Tambour Slats, Brass Hardware',
      description:
        'Flexible sliding tambour doors constructed from 96 individually hand-planed oak slats that glide seamlessly into acoustic recessed side channels.',
    },
  ];

  const handleRequestCatalogue = (e: React.FormEvent) => {
    e.preventDefault();
    if (!catalogueEmail.trim()) return;
    setCatalogueRequested(true);
    setTimeout(() => {
      setCatalogueRequested(false);
      setCatalogueEmail('');
    }, 4000);
  };

  const currentPiece = pieces.find((p) => p.id === activePiece) || pieces[0];

  return (
    <div
      className={`min-h-screen font-sans transition-colors duration-500 selection:bg-[#8f6543] selection:text-white antialiased ${
        ambientLight === 'daylight'
          ? 'bg-[#faf8f5] text-[#2c2926]'
          : 'bg-[#f0ebe1] text-[#24211e]'
      }`}
    >
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#2c2926] text-[#faf8f5] text-xs font-mono hover:bg-[#4a4540] transition-colors cursor-pointer shadow-sm"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Subtle Top Ambient Lighting & Forestry Notification */}
      <div className="border-b border-[#e8e4dc] px-6 py-2.5 text-xs text-[#706a62] font-mono flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span>COPENHAGEN FLAGSHIP · BREDGADE 34</span>
          <span className="hidden sm:inline">· 100% FSC-CERTIFIED NORDIC TIMBER</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[11px] uppercase tracking-wider hidden md:inline">Atmosphere:</span>
          <button
            onClick={() => setAmbientLight(ambientLight === 'daylight' ? 'hygge' : 'daylight')}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#e8e3d8] hover:bg-[#ded7c8] text-[#2c2926] transition-colors cursor-pointer text-[11px] font-medium"
          >
            {ambientLight === 'daylight' ? (
              <>
                <Sun className="w-3 h-3 text-[#c49a6c]" />
                <span>Nordic Daylight</span>
              </>
            ) : (
              <>
                <Moon className="w-3 h-3 text-[#8f6543]" />
                <span>Evening Hygge</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Minimalist Scandinavian Header */}
      <header className="border-b border-[#e8e4dc] px-6 py-6 sticky top-0 z-40 bg-[#faf8f5]/90 backdrop-blur-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-baseline gap-3">
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-[#2c2926]">
              Nordisk Forma
            </span>
            <span className="text-[11px] text-[#706a62] tracking-wider uppercase hidden sm:inline">
              København · 1958
            </span>
          </div>

          <nav className="hidden md:flex items-center gap-8 text-xs font-medium text-[#706a62]">
            <a href="#collections" className="hover:text-[#2c2926] transition-colors">Living Archive</a>
            <a href="#craftsmanship" className="hover:text-[#2c2926] transition-colors">Joinery & Materials</a>
            <a href="#philosophy" className="hover:text-[#2c2926] transition-colors">Danish Functionalism</a>
            <a href="#showrooms" className="hover:text-[#2c2926] transition-colors">Showrooms</a>
          </nav>

          <button
            onClick={() => setCartCount((prev) => prev + 1)}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#ece6db] hover:bg-[#ded7c8] text-[#2c2926] text-xs font-medium transition-colors cursor-pointer"
          >
            <ShoppingBag className="w-3.5 h-3.5 text-[#8f6543]" />
            <span>Curated Bag ({cartCount})</span>
          </button>
        </div>
      </header>

      {/* Scandinavian Warm Minimal Hero Section */}
      <section className="py-20 sm:py-28 px-6 max-w-7xl mx-auto border-b border-[#e8e4dc]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-8 space-y-6">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8f6543] font-semibold">
              SIMPLICITY · TACTILITY · HONESTY OF MATERIAL
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-light text-[#2c2926] tracking-tight leading-tight">
              Furniture Shaped by Nordic Light and Enduring Oak.
            </h1>

            <p className="text-base sm:text-lg text-[#706a62] max-w-2xl font-light leading-relaxed">
              Rooted in the humanist Danish modern movement. We craft architectural chairs, tables,
              and storage systems designed to age with warmth across generations of domestic life.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#collections"
                className="px-7 py-3.5 rounded-full bg-[#2c2926] hover:bg-[#4a4540] text-white font-medium text-xs transition-colors shadow-sm"
              >
                Inspect Collection
              </a>
              <a
                href="#craftsmanship"
                className="px-7 py-3.5 rounded-full bg-[#ece6db] hover:bg-[#ded7c8] text-[#2c2926] font-medium text-xs transition-colors"
              >
                The Joinery Story
              </a>
            </div>
          </div>

          {/* Right Material Swatch Specimen Card */}
          <div className="lg:col-span-4 bg-[#ece6db] border border-[#ded7c8] rounded-3xl p-8 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-mono text-[#8f6543] uppercase font-bold">
                TACTILE SWATCH EXPLORER
              </span>
              <h3 className="text-lg font-medium text-[#2c2926]">
                Natural Wood & Wool Tones
              </h3>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => setActiveMaterial('oak')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  activeMaterial === 'oak'
                    ? 'border-[#8f6543] bg-white shadow-sm'
                    : 'border-[#ded7c8] bg-[#f2eee6]'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-[#e3cca4] mx-auto border border-[#c49a6c]" />
                <span className="text-[10px] font-mono mt-1.5 block">White Oak</span>
              </button>

              <button
                onClick={() => setActiveMaterial('smoked')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  activeMaterial === 'smoked'
                    ? 'border-[#8f6543] bg-white shadow-sm'
                    : 'border-[#ded7c8] bg-[#f2eee6]'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-[#695444] mx-auto border border-[#4a3b30]" />
                <span className="text-[10px] font-mono mt-1.5 block">Smoked Ash</span>
              </button>

              <button
                onClick={() => setActiveMaterial('boucle')}
                className={`p-3 rounded-2xl border text-center transition-all cursor-pointer ${
                  activeMaterial === 'boucle'
                    ? 'border-[#8f6543] bg-white shadow-sm'
                    : 'border-[#ded7c8] bg-[#f2eee6]'
                }`}
              >
                <div className="w-6 h-6 rounded-full bg-[#ded6c8] mx-auto border border-[#bbb1a1]" />
                <span className="text-[10px] font-mono mt-1.5 block">Bouclé</span>
              </button>
            </div>

            <p className="text-xs text-[#706a62] leading-relaxed font-light">
              Finished with organic cold-pressed Danish linseed oils. Zero VOCs, zero artificial lacquers.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Furniture Collection (Interactive) */}
      <section id="collections" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-[#e8e4dc] pb-4">
          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#8f6543] font-bold">
              THE PERMANENT ARCHIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-light text-[#2c2926] mt-1">
              Selected Functional Pieces
            </h2>
          </div>
          <span className="text-xs font-mono text-[#706a62]">HAND-CRAFTED IN DENMARK</span>
        </div>

        {/* Piece Selection Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pieces.map((p) => (
            <div
              key={p.id}
              onClick={() => setActivePiece(p.id)}
              className={`p-8 rounded-3xl border transition-all cursor-pointer flex flex-col justify-between space-y-6 ${
                activePiece === p.id
                  ? 'bg-white border-[#8f6543] shadow-md'
                  : 'bg-[#ece6db] border-[#ded7c8] hover:bg-white'
              }`}
            >
              <div className="space-y-3">
                <div className="flex justify-between items-baseline text-xs font-mono text-[#706a62]">
                  <span>{p.category}</span>
                  <span className="font-bold text-[#2c2926]">{p.price}</span>
                </div>

                <h3 className="text-xl font-medium text-[#2c2926]">
                  {p.name}
                </h3>

                <p className="text-xs text-[#706a62] leading-relaxed line-clamp-3">
                  {p.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#e8e4dc] flex items-center justify-between text-xs font-mono">
                <span className="text-[#8f6543]">{p.designer}</span>
                <span className="text-[#2c2926] font-bold">Select Piece →</span>
              </div>
            </div>
          ))}
        </div>

        {/* Active Piece Dossier Showcase */}
        <div className="bg-white border border-[#e8e4dc] rounded-3xl p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono uppercase text-[#8f6543] font-bold">
                {currentPiece.year} · DESIGNED BY {currentPiece.designer}
              </span>
              <h3 className="text-3xl sm:text-4xl font-light text-[#2c2926]">
                {currentPiece.name}
              </h3>
              <p className="text-xl font-mono text-[#8f6543]">{currentPiece.price}</p>
            </div>

            <p className="text-sm text-[#706a62] leading-relaxed font-light">
              {currentPiece.description}
            </p>

            <div className="p-4 rounded-2xl bg-[#faf8f5] border border-[#e8e4dc] space-y-1 text-xs">
              <span className="text-xs font-mono text-[#706a62] uppercase block">Material Specifications:</span>
              <span className="font-medium text-[#2c2926]">{currentPiece.material}</span>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#e8e4dc]">
              <button
                onClick={() => setCartCount((prev) => prev + 1)}
                className="px-8 py-3.5 rounded-full bg-[#2c2926] text-white hover:bg-[#4a4540] font-medium text-xs transition-colors cursor-pointer"
              >
                Add Piece to Interior Order
              </button>
              <span className="text-xs font-mono text-[#706a62]">Estimated Crafting: 4 Weeks</span>
            </div>
          </div>

          <div className="lg:col-span-5 bg-[#faf8f5] border border-[#e8e4dc] rounded-2xl p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-[#ece6db] text-[#8f6543] flex items-center justify-center mx-auto text-2xl font-serif">
              ✦
            </div>
            <h4 className="text-lg font-medium text-[#2c2926]">Guaranteed for Generations</h4>
            <p className="text-xs text-[#706a62] leading-relaxed font-light">
              Every joint is engineered to be repairable and re-tensionable. We offer lifetime complimentary
              re-waxing and structural warranty for all original owners.
            </p>
          </div>
        </div>
      </section>

      {/* Danish Functionalism Principles */}
      <section id="philosophy" className="py-24 bg-[#ece6db] border-t border-[#ded7c8]">
        <div className="max-w-5xl mx-auto px-6 space-y-12">
          <div className="text-center space-y-3">
            <span className="text-xs font-mono uppercase tracking-widest text-[#8f6543] font-bold">
              THE NORDIC ETHOS
            </span>
            <h2 className="text-3xl font-light text-[#2c2926]">
              Four Tenets of Scandinavian Living
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-xs leading-relaxed">
            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ded7c8] space-y-2">
              <span className="font-mono text-[#8f6543] font-bold">01 / Demanding Utility</span>
              <h4 className="text-sm font-medium text-[#2c2926]">Form Serves Everyday Life</h4>
              <p className="text-[#706a62]">
                A chair must first offer absolute comfort to the body. Aesthetic dignity arises naturally
                from honest ergonomics, not sculptural acrobatics.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ded7c8] space-y-2">
              <span className="font-mono text-[#8f6543] font-bold">02 / Respect for Timber</span>
              <h4 className="text-sm font-medium text-[#2c2926]">Honoring the Tree's Growth</h4>
              <p className="text-[#706a62]">
                We slow-cure timber for up to twenty-four months in natural open-air sheds in Jutland to
                relieve internal fiber stress before precision turning.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ded7c8] space-y-2">
              <span className="font-mono text-[#8f6543] font-bold">03 / Light as Material</span>
              <h4 className="text-sm font-medium text-[#2c2926]">Chasing Low Northern Sun</h4>
              <p className="text-[#706a62]">
                Nordic winter light is delicate and precious. Our finishes are honed to diffuse daylight softly,
                preventing harsh glare across pale floorboards.
              </p>
            </div>

            <div className="bg-[#faf8f5] p-6 rounded-2xl border border-[#ded7c8] space-y-2">
              <span className="font-mono text-[#8f6543] font-bold">04 / The Quiet Home</span>
              <h4 className="text-sm font-medium text-[#2c2926]">Visual & Acoustic Tranquility</h4>
              <p className="text-[#706a62]">
                Living spaces should provide asylum from noisy digital acceleration. Understated proportions
                create serene cognitive bandwidth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Showroom & Catalogue Registration */}
      <section id="showrooms" className="py-24 max-w-4xl mx-auto px-6 text-center space-y-8">
        <div className="space-y-2">
          <span className="text-xs font-mono uppercase tracking-widest text-[#8f6543] font-bold">
            SHOWROOMS & ARCHIVAL FOLIO
          </span>
          <h2 className="text-3xl font-light text-[#2c2926]">
            Receive the 2026 Nordic Living Folio
          </h2>
          <p className="text-xs sm:text-sm text-[#706a62] max-w-md mx-auto leading-relaxed">
            A 160-page clothbound catalogue exploring interior architecture, timber joinery,
            and Danish domestic rituals.
          </p>
        </div>

        <form onSubmit={handleRequestCatalogue} className="max-w-md mx-auto flex items-center gap-2">
          <input
            type="email"
            required
            value={catalogueEmail}
            onChange={(e) => setCatalogueEmail(e.target.value)}
            placeholder="architect@studio.dk"
            className="flex-1 bg-white border border-[#ded7c8] rounded-full px-5 py-3 text-xs text-[#2c2926] placeholder:text-[#a8a195] focus:outline-none focus:border-[#8f6543]"
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-full bg-[#2c2926] hover:bg-[#4a4540] text-white font-medium text-xs transition-colors cursor-pointer"
          >
            Request Folio
          </button>
        </form>

        {catalogueRequested && (
          <p className="text-xs text-emerald-700 font-mono">
            ✓ Your folio request has been registered. Complimentary postage dispatch within 48 hours.
          </p>
        )}
      </section>

      {/* Understated Scandinavian Colophon */}
      <footer className="border-t border-[#e8e4dc] bg-[#faf8f5] py-12 px-6 text-xs text-[#706a62] font-mono">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span>© 2026 NORDISK FORMA APS · BREDGADE 34, 1260 KØBENHAVN K</span>
          </div>
          <div className="flex gap-6">
            <span>COPENHAGEN</span>
            <span>STOCKHOLM</span>
            <span>OSLO</span>
            <span>HELSINKI</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
