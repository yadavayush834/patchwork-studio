import React, { useState } from 'react';
import {
  ArrowLeft,
  BookOpen,
  Bookmark,
  Share2,
  Clock,
  ArrowUpRight,
  Eye,
  Check,
  Compass,
} from 'lucide-react';

interface Article {
  id: string;
  category: string;
  title: string;
  author: string;
  authorRole: string;
  readTime: string;
  date: string;
  excerpt: string;
  hasAudio?: boolean;
}

export function EditorialWebsite({ onBackToGallery }: { onBackToGallery?: () => void }) {
  const [selectedArticle, setSelectedArticle] = useState<string>('art-lead');
  const [fontSize, setFontSize] = useState<'standard' | 'large'>('standard');
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  const secondaryArticles: Article[] = [
    {
      id: 'art-2',
      category: 'ARTIFICIAL ANTIQUITY',
      title: 'The Neural Scribe: When Large Language Models Hallucinate Lost Euripides Plays',
      author: 'Julian Thorne',
      authorRole: 'Lecturer in Classical Philology, Oxford',
      readTime: '11 min read',
      date: 'March 28, 2026',
      excerpt:
        'What occurs when an algorithm is trained on the fragments of Oxyrhynchus papyri and begins filling textual lacunae with uncanny tragic verse?',
    },
    {
      id: 'art-3',
      category: 'INDUSTRIAL ANTHROPOLOGY',
      title: 'The Obsolete Horologist: Forty Years Inside an Unwired Jura Mountain Workshop',
      author: 'Clara Delacroix',
      authorRole: 'Contributing Editor, Geneva',
      readTime: '09 min read',
      date: 'March 22, 2026',
      excerpt:
        'In an age of smartwatch biometric telemetries, Jean-Pierre Dufour still shapes escapement wheels by kerosene lamp. A monograph on stubborn analog craft.',
    },
    {
      id: 'art-4',
      category: 'POST-DIGITAL ECOLOGY',
      title: 'Rewilding Server Farms: Cultivating Arctic Lichen on Heat-Exchanger Baffles',
      author: 'Dr. Henrik Lindqvist',
      authorRole: 'Ecological Systems Architect, Tromsø',
      readTime: '14 min read',
      date: 'March 14, 2026',
      excerpt:
        'Transforming deep-sea cooling outfalls into synthetic hydrothermal vents supporting resilient micro-biomes in northern Scandinavia.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail.trim()) return;
    setSubscribed(true);
    setTimeout(() => {
      setSubscribed(false);
      setNewsletterEmail('');
    }, 4000);
  };

  return (
    <div className="min-h-screen bg-[#fdfbf7] text-[#1b1917] font-editorial selection:bg-[#8a4f3d] selection:text-[#fdfbf7] antialiased">
      {/* Return to Gallery Toolbar */}
      {onBackToGallery && (
        <div className="fixed top-4 left-4 z-50">
          <button
            onClick={onBackToGallery}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#1b1917] text-[#fdfbf7] text-xs font-mono-tech hover:bg-[#8a4f3d] transition-colors cursor-pointer shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Style Gallery</span>
          </button>
        </div>
      )}

      {/* Literary Masthead */}
      <header className="border-b border-[#ded5c2] bg-[#fbf8f1] px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[#6b665f]">
          <div className="flex items-center gap-4">
            <span>ISSUE NO. 48 · SPRING 2026</span>
            <span>·</span>
            <span>PUBLISHED IN LONDON & PARIS</span>
          </div>

          <div className="text-center">
            <span className="italic font-editorial text-sm text-[#1b1917]">
              "Dispatches on Technology, Solitude, and Aesthetic Craft"
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span>PRINT FOLIO: £16 / €19</span>
            <span>·</span>
            <span className="text-[#8a4f3d] font-bold">CIRCULATION: 48,000</span>
          </div>
        </div>

        {/* Grand Headline Banner */}
        <div className="max-w-7xl mx-auto pt-8 pb-4 text-center border-t border-[#ded5c2] mt-4 space-y-2">
          <h1 className="text-6xl sm:text-8xl md:text-9xl font-bold tracking-tight text-[#1b1917] font-serif-luxury uppercase">
            FOLIO
          </h1>
          <p className="text-xs font-mono-tech tracking-widest uppercase text-[#8a4f3d]">
            An Independent Quarterly of Contemporary Thought & Culture
          </p>
        </div>
      </header>

      {/* Main Magazine Layout */}
      <main className="max-w-7xl mx-auto px-6 py-12 space-y-20">
        {/* Lead Feature Story (Dominant Editorial Monograph) */}
        <article className="border-b-2 border-[#1b1917] pb-16 space-y-8">
          <div className="space-y-4 max-w-4xl mx-auto text-center">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#8a4f3d] font-bold">
              THE COVER INQUIRY · ARCHITECTURE & COGNITION
            </span>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold leading-tight font-serif-luxury text-[#1b1917]">
              The Architecture of Silent Space: Why Future Cities Must Outlaw Haptic Alert Frequencies
            </h2>

            <div className="flex items-center justify-center gap-4 text-xs font-mono-tech text-[#6b665f] pt-2">
              <span className="font-bold text-[#1b1917]">By Dr. Simone Chen</span>
              <span>·</span>
              <span>18 min read</span>
              <span>·</span>
              <span>Illustrations by Hélène Moreau</span>
            </div>
          </div>

          {/* Dramatic Editorial Pull Quote Banner */}
          <div className="my-10 p-8 sm:p-12 bg-[#f5efe0] border-y border-[#ded5c2] text-center max-w-4xl mx-auto">
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-serif-luxury italic text-[#1b1917] leading-relaxed">
              "We traded the acoustic majesty of cathedral limestone for continuous 24-hour wrist vibrations.
              A society that cannot grant silence to its citizens is fundamentally an illiterate society."
            </blockquote>
          </div>

          {/* Dual-Column Lead Article Body */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 max-w-5xl mx-auto text-[#24211d] leading-relaxed">
            <div className="md:col-span-6 space-y-5 text-sm sm:text-base leading-relaxed">
              <p>
                <span className="float-left text-5xl sm:text-6xl font-serif-luxury font-bold leading-none pr-3 pt-1 text-[#8a4f3d]">
                  I
                </span>
                n the late spring of 1928, the philosopher Walter Benjamin observed that the modern city
                was primarily defined not by its paved boulevards or steel elevators, but by its ceaseless
                acoustic interruption. Almost a century later, this acoustic violence has migrated from
                external steam sirens into intimate cutaneous micro-frequencies.
              </p>
              <p>
                Walk through any European metropolitan hub today and observe the synchronized, involuntary
                wrist-glances of pedestrians. Every three minutes, an algorithmic recommendation or corporate
                calendar ping extracts human consciousness from spatial reality into an uncontrolled digital
                feedback cycle.
              </p>
            </div>

            <div className="md:col-span-6 space-y-5 text-sm sm:text-base leading-relaxed">
              <p>
                What would it mean to construct "Acoustic Sanctuaries" in our civic centers—zones where all
                cellular and satellite transmission frequencies are physically absorbed by leaded limestone
                baffles? In our experimental trials conducted in the old Cloister of Saint-Séverin, cognitive
                working memory scores increased by 42% within forty-eight hours of absolute signal severance.
              </p>
              <p>
                Silence, far from being an absence of stimuli, is the foundational medium upon which deep
                philosophical synthesis occurs. Without silence, civilization merely produces administrative
                noise.
              </p>

              <div className="pt-4 border-t border-[#ded5c2] flex items-center justify-between text-xs font-mono-tech text-[#6b665f]">
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className="flex items-center gap-1.5 hover:text-[#1b1917] cursor-pointer"
                >
                  <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#8a4f3d] text-[#8a4f3d]' : ''}`} />
                  <span>{bookmarked ? 'Saved to Reading List' : 'Save Article'}</span>
                </button>
                <span>CONTINUED IN PRINT EDITION (P. 42–58)</span>
              </div>
            </div>
          </div>
        </article>

        {/* Secondary Featured Articles Triad */}
        <section className="space-y-8">
          <div className="flex items-baseline justify-between border-b border-[#ded5c2] pb-3">
            <h3 className="text-xs font-mono-tech font-bold uppercase tracking-widest text-[#8a4f3d]">
              CURRENT DISPATCHES & CRITICAL CRITIQUES
            </h3>
            <span className="text-xs font-mono-tech text-[#6b665f]">VOL. 48 SECTION B</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {secondaryArticles.map((art) => (
              <div
                key={art.id}
                className="bg-[#fbf8f1] border border-[#ded5c2] p-6 rounded-none space-y-4 flex flex-col justify-between hover:border-[#8a4f3d] transition-colors cursor-pointer group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-[11px] font-mono-tech text-[#8a4f3d]">
                    <span className="font-bold">{art.category}</span>
                    <span className="text-[#6b665f]">{art.readTime}</span>
                  </div>

                  <h4 className="font-serif-luxury text-xl font-bold text-[#1b1917] group-hover:text-[#8a4f3d] transition-colors leading-snug">
                    {art.title}
                  </h4>

                  <p className="text-xs text-[#524e47] leading-relaxed line-clamp-3">
                    {art.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#ded5c2] text-xs font-mono-tech">
                  <span className="text-[#1b1917] font-bold block">{art.author}</span>
                  <span className="text-[#6b665f] text-[10px]">{art.authorRole}</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Literary Newsletter & Print Dispatch Registration */}
        <section className="border-2 border-[#1b1917] bg-[#f5efe0] p-8 sm:p-12 text-center space-y-6 max-w-3xl mx-auto">
          <div className="space-y-2">
            <span className="text-xs font-mono-tech uppercase tracking-widest text-[#8a4f3d] font-bold">
              THE WEEKEND DISPATCH
            </span>
            <h3 className="text-3xl font-serif-luxury font-bold text-[#1b1917]">
              Essays Delivered Straight to Your Correspondence
            </h3>
            <p className="text-xs sm:text-sm text-[#524e47] max-w-md mx-auto leading-relaxed">
              Every Sunday morning, one long-form philosophical essay on aesthetics, machines, and literature.
              No algorithmic curation. Zero tracking pixels.
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="max-w-md mx-auto flex items-center gap-2">
            <input
              type="email"
              required
              value={newsletterEmail}
              onChange={(e) => setNewsletterEmail(e.target.value)}
              placeholder="reader@oxford.edu"
              className="flex-1 bg-[#fdfbf7] border border-[#ded5c2] px-4 py-2.5 text-xs font-mono-tech text-[#1b1917] placeholder:text-[#a8a195] focus:outline-none focus:border-[#8a4f3d]"
            />
            <button
              type="submit"
              className="px-5 py-2.5 bg-[#1b1917] hover:bg-[#8a4f3d] text-white font-mono-tech text-xs uppercase transition-colors cursor-pointer"
            >
              Subscribe
            </button>
          </form>

          {subscribed && (
            <p className="text-xs text-emerald-700 font-mono-tech">
              ✓ Registration recorded. Your inaugural Sunday dispatch will arrive this weekend.
            </p>
          )}
        </section>
      </main>

      {/* Editorial Colophon Footer */}
      <footer className="border-t border-[#ded5c2] bg-[#fbf8f1] px-6 py-12 text-xs font-mono-tech text-[#6b665f]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <div className="font-serif-luxury text-base font-bold text-[#1b1917]">
              FOLIO MAGAZINE OF CONTEMPORARY THOUGHT
            </div>
            <div>ESTABLISHED 2014 · TYPESET IN PLAYFAIR & CORMORANT GARAMOND</div>
          </div>
          <div className="flex items-center gap-6">
            <span>ISSN 2398-4821</span>
            <span>·</span>
            <span>CC-BY-NC 4.0</span>
            <span>·</span>
            <span className="text-[#8a4f3d] font-bold">OXFORD & PARIS</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
