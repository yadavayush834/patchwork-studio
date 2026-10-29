import React, { useState } from 'react';
import {
  ArrowLeft,
  ChevronRight,
  Sparkles,
  ShoppingBag,
  Clock,
  MapPin,
  Calendar,
  Check,
  ArrowUpRight,
} from 'lucide-react';

interface Piece {
  id: string;
  name: string;
  sub: string;
  materials: string;
  price: string;
  origin: string;
  description: string;
}

export function LuxuryWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [activePiece, setActivePiece] = useState<string>('piece-1');
  const [salonCity, setSalonCity] = useState('Paris, Place Vendôme');
  const [bookingDate, setBookingDate] = useState('2026-10-18');
  const [bookedSalon, setBookedSalon] = useState(false);
  const [guestName, setGuestName] = useState('');

  const pieces: Piece[] = [
    {
      id: 'piece-1',
      name: 'Le Collier Céleste',
      sub: 'Haute Joaillerie Unique',
      materials: 'Unheated Ceylon Royal Blue Sapphires (18.4 ct), Platinum 950, D-Flawless Brilliant Pavé',
      price: 'Prix sur demande',
      origin: 'Atelier Place Vendôme, Paris',
      description:
        'Nine matching unheated royal blue sapphires discovered in the historic alluvial gravels of Ratnapura, hand-mounted in articulated platinum cages designed to capture nocturnal candlelight.',
    },
    {
      id: 'piece-2',
      name: 'Le Manteau Sculpté en vigogne',
      sub: 'Couture Sur-Mesure',
      materials: '100% Certified Andean Vicuña Fleece, Hand-Loomed Mulberry Silk Lining, Horn Buttons',
      price: '€18,500',
      origin: 'Atelier Rue du Faubourg Saint-Honoré',
      description:
        'Crafted from ethical, live-shorn Peruvian vicuña wool spun to a delicate 12-micron diameter. Unstructured shoulders hand-canvassed by three master tailors over 140 cumulative atelier hours.',
    },
    {
      id: 'piece-3',
      name: 'La Bague Solitaire Vendôme',
      sub: 'Haute Joaillerie',
      materials: '4.82 ct Emerald-Cut Type IIa Diamond, D Color, Internally Flawless, 18k White Gold',
      price: 'Prix sur demande',
      origin: 'Atelier Place Vendôme, Paris',
      description:
        'An exceptional Type IIa diamond possessing absolute optical transparency, characterized by the absence of measurable nitrogen impurities within the crystal matrix.',
    },
  ];

  const handleBookSalon = (e: React.FormEvent) => {
    e.preventDefault();
    if (!guestName.trim()) return;
    setBookedSalon(true);
    setTimeout(() => {
      setBookedSalon(false);
      setGuestName('');
    }, 4000);
  };

  const currentPiece = pieces.find((p) => p.id === activePiece) || pieces[0];

  return (
    <div className="min-h-screen bg-[#0a0908] text-[#f7f5f0] font-sans selection:bg-[#c5a880] selection:text-black antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1c1a17] text-[#c5a880] text-xs font-mono hover:bg-[#2a2622] transition-colors cursor-pointer border border-[#332f2a] shadow-lg"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Discreet Luxury Navigation Header */}
      <header className="border-b border-[#22201d] bg-[#0a0908]/90 backdrop-blur-md sticky top-0 z-40 px-6 py-5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <nav className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] text-[#a8a195]">
            <a href="#collection" className="hover:text-white transition-colors">Haute Joaillerie</a>
            <a href="#collection" className="hover:text-white transition-colors">Couture</a>
            <a href="#heritage" className="hover:text-white transition-colors">L’Atelier</a>
            <a href="#salons" className="hover:text-white transition-colors">Salons Privés</a>
          </nav>

          {/* Central Monogram Brand */}
          <div className="text-center">
            <h1 className="font-serif-luxury text-xl sm:text-2xl tracking-[0.25em] uppercase text-white font-normal">
              Maison Vendôme
            </h1>
            <span className="text-[9px] uppercase tracking-[0.3em] text-[#c5a880] block font-mono">
              26, Place Vendôme · Paris
            </span>
          </div>

          <div className="flex items-center gap-6 text-[11px] uppercase tracking-[0.2em] text-[#a8a195]">
            <a
              href="#salons"
              className="text-[#c5a880] hover:text-white transition-colors hidden sm:inline"
            >
              Prendre Rendez-vous
            </a>
            <button className="flex items-center gap-1.5 text-white hover:text-[#c5a880] transition-colors cursor-pointer">
              <ShoppingBag className="w-4 h-4 text-[#c5a880]" />
              <span className="hidden md:inline">Écrin (0)</span>
            </button>
          </div>
        </div>
      </header>

      {/* Cinematic Campaign Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center text-center px-6 border-b border-[#22201d] overflow-hidden">
        {/* Subtle Charcoal Shimmer Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#141210]/40 via-[#0a0908] to-[#0a0908] z-0 pointer-events-none" />

        <div className="relative z-10 max-w-4xl space-y-6">
          <span className="text-[11px] uppercase tracking-[0.4em] text-[#c5a880] block font-mono">
            COLLECTION AUTOMNE / HIVER 2026
          </span>

          <h2 className="font-serif-luxury text-4xl sm:text-6xl md:text-7xl font-normal tracking-[0.1em] text-white leading-tight">
            L’Ombre et La Lumière.
          </h2>

          <p className="text-xs sm:text-sm font-light text-[#a8a195] tracking-[0.15em] max-w-xl mx-auto leading-relaxed">
            Une exploration poétique des contrastes absolus. Le saphir royal non chauffé dialogue
            avec la pureté de la vigogne péruvienne et l’éclat éternel du diamant Type IIa.
          </p>

          <div className="pt-6 flex flex-wrap items-center justify-center gap-6 text-xs uppercase tracking-[0.2em]">
            <a
              href="#collection"
              className="px-8 py-3.5 bg-[#f7f5f0] text-black font-medium hover:bg-[#c5a880] transition-colors"
            >
              Découvrir Les Pièces
            </a>
            <a
              href="#salons"
              className="px-8 py-3.5 border border-[#332f2a] text-[#f7f5f0] hover:border-white transition-colors"
            >
              Réserver Un Salon Privé
            </a>
          </div>
        </div>
      </section>

      {/* Haute Joaillerie & Couture Collection Showcase */}
      <section id="collection" className="py-24 max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] block font-mono">
            PIÈCES MAÎTRESSES
          </span>
          <h3 className="font-serif-luxury text-3xl sm:text-4xl uppercase tracking-[0.15em] text-white">
            La Sélection de l’Atelier
          </h3>
          <p className="text-xs text-[#a8a195] tracking-wider max-w-md mx-auto">
            Chaque création est numérotée et façonnée à la main au 26, Place Vendôme.
          </p>
        </div>

        {/* Piece Selection Strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-[#22201d] pb-8">
          {pieces.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePiece(p.id)}
              className={`p-6 text-left transition-all border cursor-pointer ${
                activePiece === p.id
                  ? 'border-[#c5a880] bg-[#141210]'
                  : 'border-[#22201d] bg-[#0d0c0a] hover:border-[#332f2a]'
              }`}
            >
              <div className="text-[10px] font-mono text-[#c5a880] uppercase tracking-widest mb-1">
                {p.sub}
              </div>
              <h4 className="font-serif-luxury text-lg text-white uppercase tracking-wider">
                {p.name}
              </h4>
              <div className="text-xs text-[#a8a195] mt-2 font-mono">{p.price}</div>
            </button>
          ))}
        </div>

        {/* Detailed Specimen Dossier */}
        <div className="bg-[#12100d] border border-[#22201d] p-8 sm:p-14 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#c5a880]">
                {currentPiece.origin}
              </span>
              <h4 className="font-serif-luxury text-3xl sm:text-4xl text-white uppercase tracking-wide">
                {currentPiece.name}
              </h4>
              <p className="text-xs font-mono text-[#a8a195] pt-1">{currentPiece.sub}</p>
            </div>

            <p className="text-xs sm:text-sm text-[#d4cfc5] font-light leading-relaxed tracking-wider">
              {currentPiece.description}
            </p>

            <div className="p-4 bg-[#0a0908] border border-[#22201d] space-y-2 text-xs">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#a8a195] block">
                Matières Précieuses & Traçabilité:
              </span>
              <p className="text-white font-mono leading-relaxed">{currentPiece.materials}</p>
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-[#22201d] text-xs font-mono">
              <span className="text-lg text-white font-serif-luxury">{currentPiece.price}</span>
              <a
                href="#salons"
                className="px-6 py-2.5 bg-[#c5a880] text-black font-medium hover:bg-white transition-colors uppercase tracking-widest text-[11px]"
              >
                Demander Une Présentation
              </a>
            </div>
          </div>

          {/* Luxury Atelier Visual Card */}
          <div className="lg:col-span-5 bg-[#0a0908] border border-[#22201d] p-8 text-center space-y-4">
            <div className="w-16 h-16 mx-auto rounded-full border border-[#c5a880] flex items-center justify-center font-serif-luxury text-2xl text-[#c5a880]">
              MV
            </div>
            <div className="font-serif-luxury text-lg text-white uppercase tracking-widest">
              Garantie d’Authenticité
            </div>
            <p className="text-xs text-[#a8a195] leading-relaxed">
              Délivré avec passeport géologique du Laboratoire Français de Gemmologie (LFG) et certificat de traçabilité éthique.
            </p>
          </div>
        </div>
      </section>

      {/* Heritage & Savoir-Faire Section */}
      <section id="heritage" className="py-24 border-t border-[#22201d] bg-[#0c0b09]">
        <div className="max-w-5xl mx-auto px-6 text-center space-y-8">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-mono">
            CENT-TRENTE ANS DE CRÉATION
          </span>

          <h3 className="font-serif-luxury text-3xl sm:text-5xl uppercase tracking-[0.1em] text-white">
            L'Excellence du Geste Artisanal.
          </h3>

          <p className="text-xs sm:text-sm font-light text-[#a8a195] tracking-[0.1em] leading-relaxed max-w-2xl mx-auto">
            Depuis 1892, la Maison perpétue la tradition lapidaire et tailleur au cœur de Paris.
            Chaque sertissage est réalisé sous binoculaire optique afin d'éliminer toute tension résiduelle
            dans la matière noble.
          </p>
        </div>
      </section>

      {/* Private Salon Appointment Concierge */}
      <section id="salons" className="py-24 border-t border-[#22201d] max-w-4xl mx-auto px-6 space-y-12">
        <div className="text-center space-y-3">
          <span className="text-[10px] uppercase tracking-[0.3em] text-[#c5a880] font-mono">
            EXPÉRIENCE PRIVÉE
          </span>
          <h3 className="font-serif-luxury text-3xl uppercase tracking-[0.15em] text-white">
            Prendre Rendez-Vous Dans Nos Salons
          </h3>
          <p className="text-xs text-[#a8a195] tracking-wider">
            Accueil confidentiel avec un maître joaillier ou notre directeur de création.
          </p>
        </div>

        <form onSubmit={handleBookSalon} className="bg-[#12100d] border border-[#22201d] p-8 space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#a8a195] block mb-2 font-mono">
                Ville du Salon Privé
              </label>
              <select
                value={salonCity}
                onChange={(e) => setSalonCity(e.target.value)}
                className="w-full bg-[#0a0908] border border-[#22201d] p-3 text-white focus:outline-none focus:border-[#c5a880] cursor-pointer"
              >
                <option>Paris, Place Vendôme</option>
                <option>Milan, Via Montenapoleone</option>
                <option>Tokyo, Ginza Chuo-ku</option>
                <option>New York, Madison Avenue</option>
              </select>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.2em] text-[#a8a195] block mb-2 font-mono">
                Date Souhaitée
              </label>
              <input
                type="date"
                value={bookingDate}
                onChange={(e) => setBookingDate(e.target.value)}
                className="w-full bg-[#0a0908] border border-[#22201d] p-3 text-white focus:outline-none focus:border-[#c5a880]"
              />
            </div>
          </div>

          <div>
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#a8a195] block mb-2 font-mono">
              Nom & Prénom de l’Invité
            </label>
            <input
              type="text"
              required
              placeholder="Ex: Madame Hélène de Saint-Amand"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full bg-[#0a0908] border border-[#22201d] p-3 text-white placeholder:text-[#524e47] focus:outline-none focus:border-[#c5a880] text-xs"
            />
          </div>

          <button
            type="submit"
            className="w-full py-3.5 bg-[#c5a880] hover:bg-white text-black font-medium text-xs uppercase tracking-[0.2em] transition-colors cursor-pointer"
          >
            Confirmer La Demande de Salon
          </button>

          {bookedSalon && (
            <div className="p-4 bg-[#0a0908] border border-[#c5a880] text-center text-xs text-[#c5a880] font-mono">
              ✓ Votre demande pour le salon de {salonCity} le {bookingDate} a été enregistrée.
              Notre conciergerie prendra attache avec vous dans les prochaines heures.
            </div>
          )}
        </form>
      </section>

      {/* Luxury Understated Colophon */}
      <footer className="border-t border-[#22201d] py-12 px-6 text-center text-xs text-[#6e685f] tracking-[0.2em] uppercase font-mono">
        <p>© 2026 MAISON VENDÔME · 26, PLACE VENDÔME, 75001 PARIS · TOUS DROITS RÉSERVÉS</p>
      </footer>
    </div>
  );
}
