import React, { useState } from 'react';
import { designsRegistry } from '../registry';
import {
  ExternalLink,
  ArrowRight,
  Search,
  Layers,
  CheckCircle2,
  Zap,
} from 'lucide-react';

export function DesignsGallery({
  onSelectRecreation,
}: {
  onSelectRecreation: (id: string) => void;
}) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Productivity', 'Fintech', 'Developer Tools', 'Design & Creative', 'Cloud & Data'];

  const filteredDesigns = designsRegistry.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.signatureFeature.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      {/* Editorial Hero Header */}
      <div className="relative rounded-3xl bg-zinc-900/60 border border-white/[0.08] p-8 sm:p-12 overflow-hidden shadow-2xl backdrop-blur-xl">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 space-y-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-medium text-zinc-300">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
              <span>Reverse-Engineered Case Studies · 10 Industry Standards</span>
            </div>
            <div className="flex items-center gap-2 text-xs text-zinc-400 font-mono">
              <span>Faithful Reconstructions</span>
              <span className="text-zinc-700">·</span>
              <span>100% Production Code</span>
            </div>
          </div>

          <div className="max-w-3xl space-y-3">
            <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight font-grotesk">
              Industry-Standard Website UI Studies
            </h1>
            <p className="text-sm sm:text-base text-zinc-400 leading-relaxed font-sans max-w-2xl">
              Ten faithful reconstructions of the internet&apos;s most influential marketing websites.
              Explore genuine typography tokens, color systems, layout hierarchy, and signature interactive product demonstrations.
            </p>
          </div>

          {/* Filter and Search Bar */}
          <div className="pt-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 border-t border-white/[0.06]">
            {/* Category Segmented Pills */}
            <div className="inline-flex flex-wrap items-center gap-1.5 p-1 rounded-xl bg-zinc-950/80 border border-white/[0.08]">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-white text-zinc-950 font-semibold shadow-sm'
                      : 'text-zinc-400 hover:text-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative sm:w-72">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              <input
                type="text"
                placeholder="Search by brand or feature..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-zinc-950/80 border border-white/[0.08] rounded-xl pl-9 pr-8 py-2 text-xs sm:text-sm text-zinc-100 placeholder:text-zinc-500 focus:outline-none focus:border-white/25 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-zinc-400 hover:text-white cursor-pointer px-1.5 py-0.5 rounded bg-zinc-800"
                >
                  ✕
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* 10 RECREATIONS GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredDesigns.map((design) => (
          <div
            key={design.id}
            className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] hover:border-white/20 transition-all duration-300 p-6 sm:p-8 flex flex-col justify-between group shadow-xl relative overflow-hidden"
          >
            {/* Ambient accent top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-1 transition-all group-hover:h-1.5"
              style={{ backgroundColor: design.accentColor }}
            />

            <div>
              {/* Header row */}
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-3 mb-1.5 flex-wrap">
                    <h2 className="text-2xl font-bold text-white font-grotesk group-hover:text-zinc-200 transition-colors">
                      {design.name}
                    </h2>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-md bg-white/[0.06] border border-white/[0.08] text-zinc-300 font-medium">
                      {design.category}
                    </span>
                    <span
                      className="text-[10px] font-mono px-2 py-0.5 rounded uppercase"
                      style={{
                        backgroundColor: `${design.accentColor}18`,
                        color: design.accentColor,
                        border: `1px solid ${design.accentColor}40`,
                      }}
                    >
                      {design.bgTheme} mode
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 italic">{design.tagline}</p>
                </div>

                <a
                  href={design.originalUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors px-2.5 py-1 rounded-lg bg-zinc-950/80 border border-white/[0.08] shrink-0"
                  title="Visit official website"
                >
                  <span>Live Site</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Description */}
              <p className="text-sm text-zinc-400 leading-relaxed mb-5">
                {design.description}
              </p>

              {/* Signature Feature Callout */}
              <div className="p-4 rounded-xl bg-zinc-950/60 border border-white/[0.06] mb-5">
                <span className="text-[11px] font-medium text-cyan-400 uppercase tracking-wider block mb-1 flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5" /> Signature Interaction Demonstration
                </span>
                <p className="text-xs text-zinc-200 font-medium leading-relaxed">
                  {design.signatureFeature}
                </p>
              </div>

              {/* Design Tokens & Typography */}
              <div className="grid grid-cols-2 gap-3 mb-5 text-xs">
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">Typography</span>
                  <span className="text-zinc-200 font-mono text-xs truncate block">{design.typography.heading}</span>
                </div>
                <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/[0.06]">
                  <span className="text-zinc-500 block text-[11px] mb-0.5">Primary Accent</span>
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: design.accentColor }} />
                    <span className="text-zinc-200 font-mono text-xs">{design.accentColor}</span>
                  </div>
                </div>
              </div>

              {/* Key Techniques List */}
              <div className="space-y-2 mb-6 text-xs text-zinc-400">
                <span className="text-[11px] uppercase tracking-wider text-zinc-500 block mb-1 font-medium">
                  Key Implemented Techniques:
                </span>
                {design.keyTechniques.map((tech, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{tech}</span>
                  </div>
                ))}
              </div>

              {/* Design Analysis Notes */}
              <div className="p-3.5 rounded-xl bg-zinc-950/40 border-l-2 border-zinc-600 text-xs text-zinc-400 leading-relaxed italic mb-6">
                &ldquo;{design.designNotes}&rdquo;
              </div>
            </div>

            {/* Launch Button */}
            <button
              onClick={() => onSelectRecreation(design.id)}
              className="w-full py-3 px-4 rounded-xl bg-white hover:bg-zinc-200 text-zinc-950 font-semibold text-xs tracking-wide flex items-center justify-center gap-2 transition-all shadow-md cursor-pointer"
            >
              <span>Explore {design.name} Recreation</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Cross-Brand Design System Matrix */}
      <div className="rounded-2xl bg-zinc-900/50 border border-white/[0.08] p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
        <h3 className="text-lg font-bold text-white font-grotesk mb-2 flex items-center gap-2">
          <Layers className="w-5 h-5 text-zinc-400" />
          <span>Cross-Brand Design System Matrix</span>
        </h3>
        <p className="text-xs text-zinc-400 mb-6">
          Side-by-side analysis of brand aesthetic, accent palette, and signature interaction primitives.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead>
              <tr className="border-b border-white/[0.08] text-zinc-400 font-medium">
                <th className="py-3 px-4">Brand</th>
                <th className="py-3 px-4">Category</th>
                <th className="py-3 px-4">Theme</th>
                <th className="py-3 px-4">Accent</th>
                <th className="py-3 px-4">Interactive Demonstration</th>
                <th className="py-3 px-4 text-right">Route</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/[0.04]">
              {designsRegistry.map((item) => (
                <tr key={item.id} className="hover:bg-white/[0.03] transition-colors">
                  <td className="py-3.5 px-4 font-semibold text-white">{item.name}</td>
                  <td className="py-3.5 px-4 text-zinc-400">{item.category}</td>
                  <td className="py-3.5 px-4">
                    <span className="px-2 py-0.5 rounded text-[10px] bg-white/[0.06] border border-white/[0.08] text-zinc-300">
                      {item.bgTheme}
                    </span>
                  </td>
                  <td className="py-3.5 px-4">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded-full border border-white/20" style={{ backgroundColor: item.accentColor }} />
                      <span className="font-mono text-zinc-300">{item.accentColor}</span>
                    </div>
                  </td>
                  <td className="py-3.5 px-4 text-zinc-300 leading-relaxed max-w-xs">{item.signatureFeature}</td>
                  <td className="py-3.5 px-4 text-right">
                    <button
                      onClick={() => onSelectRecreation(item.id)}
                      className="px-3 py-1 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-xs font-mono transition-colors cursor-pointer"
                    >
                      {item.route}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default DesignsGallery;
