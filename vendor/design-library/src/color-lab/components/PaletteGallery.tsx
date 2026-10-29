import React, { useState, useMemo } from 'react';
import type { ColorPalette, PaletteFamily, PaletteTheme, PaletteTemperature } from '../types';
import { PaletteCard } from './PaletteCard';
import { searchAndFilterPalettes, getPaletteRating } from '../data';
import {
  Search,
  LayoutGrid,
  List,
  Heart,
  X,
} from 'lucide-react';

interface PaletteGalleryProps {
  palettes: ColorPalette[];
  activePaletteId?: string;
  favorites: string[];
  onToggleFavorite: (id: string) => void;
  onSelectForPreview: (palette: ColorPalette) => void;
  onSelectForEdit: (palette: ColorPalette) => void;
  onInspectDetails: (palette: ColorPalette) => void;
}

export function PaletteGallery({
  palettes,
  activePaletteId,
  favorites,
  onToggleFavorite,
  onSelectForPreview,
  onSelectForEdit,
  onInspectDetails,
}: PaletteGalleryProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedFamily, setSelectedFamily] = useState<PaletteFamily | 'all'>('all');
  const [selectedTheme, setSelectedTheme] = useState<PaletteTheme | 'all'>('all');
  const [selectedTemp, setSelectedTemp] = useState<PaletteTemperature | 'all'>('all');
  const [selectedHue, setSelectedHue] = useState<string | 'all'>('all');
  const [selectedWCAG, setSelectedWCAG] = useState<'AA' | 'AAA' | 'all'>('all');
  const [favoritesOnly, setFavoritesOnly] = useState(false);
  const [sortBy, setSortBy] = useState<'default' | 'name' | 'contrast'>('default');
  const [viewMode, setViewMode] = useState<'grid' | 'compact'>('grid');

  // Filtered palettes
  const filteredPalettes = useMemo(() => {
    let result = searchAndFilterPalettes(palettes, {
      searchQuery,
      family: selectedFamily,
      theme: selectedTheme,
      temperature: selectedTemp,
      dominantHue: selectedHue,
      wcagLevel: selectedWCAG,
      favoritesOnly,
      favoriteIds: favorites,
    });

    if (sortBy === 'name') {
      result = [...result].sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'contrast') {
      result = [...result].sort((a, b) => {
        const ratingA = getPaletteRating(a);
        const ratingB = getPaletteRating(b);
        const scoreA = ratingA.overallLevel === 'AAA' ? 2 : 1;
        const scoreB = ratingB.overallLevel === 'AAA' ? 2 : 1;
        return scoreB - scoreA;
      });
    }

    return result;
  }, [
    palettes,
    searchQuery,
    selectedFamily,
    selectedTheme,
    selectedTemp,
    selectedHue,
    selectedWCAG,
    favoritesOnly,
    favorites,
    sortBy,
  ]);

  const families: Array<PaletteFamily | 'all'> = [
    'all',
    'Minimalist & Monochromatic',
    'Luxury & Premium',
    'Scandinavian & Japanese',
    'Earthy, Organic & Botanical',
    'Cyberpunk & Futuristic',
    'Bauhaus & Geometric',
    'Brutalist & Neo-Brutalist',
    'Editorial & Swiss',
    'Pastel & Soft Modern',
    'Retro, Vintage & Y2K',
    'Nature: Ocean, Forest, Desert',
    'Playful & Experimental',
    'Technology, AI & Developer',
    'Finance, Health & Commerce',
    'Dark Mode & High Contrast',
  ];

  const hues = [
    'all',
    'Blue',
    'Indigo',
    'Purple',
    'Pink',
    'Red',
    'Orange',
    'Amber',
    'Yellow',
    'Green',
    'Teal',
    'Cyan',
    'Neutral',
  ];

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedFamily('all');
    setSelectedTheme('all');
    setSelectedTemp('all');
    setSelectedHue('all');
    setSelectedWCAG('all');
    setFavoritesOnly(false);
  };

  const hasActiveFilters =
    searchQuery !== '' ||
    selectedFamily !== 'all' ||
    selectedTheme !== 'all' ||
    selectedTemp !== 'all' ||
    selectedHue !== 'all' ||
    selectedWCAG !== 'all' ||
    favoritesOnly;

  return (
    <div className="space-y-6">
      {/* Top Search & Filter Bar */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-4 sm:p-5 space-y-4 shadow-lg">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search 105 palettes by name, keyword, hex (#00e5ff), or style..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-[#0b0e17] border border-[#212739] text-sm text-white placeholder-slate-500 outline-none focus:border-cyan-400 transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Action Controls */}
          <div className="flex items-center gap-2 flex-wrap">
            {/* Favorites Toggle */}
            <button
              onClick={() => setFavoritesOnly(!favoritesOnly)}
              className={`px-3 py-2 rounded-xl text-xs font-semibold border transition cursor-pointer flex items-center gap-1.5 ${
                favoritesOnly
                  ? 'bg-rose-500/20 text-rose-300 border-rose-500/40 shadow'
                  : 'bg-[#0b0e17] text-slate-400 border-[#212739] hover:text-white'
              }`}
            >
              <Heart className={`w-3.5 h-3.5 ${favoritesOnly ? 'fill-current' : ''}`} />
              <span>Favorites ({favorites.length})</span>
            </button>

            {/* Sort Dropdown */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-3 py-2 rounded-xl bg-[#0b0e17] border border-[#212739] text-xs text-slate-300 font-semibold outline-none cursor-pointer"
            >
              <option value="default">Sort: Default Order</option>
              <option value="name">Sort: Name (A-Z)</option>
              <option value="contrast">Sort: Highest WCAG Rating</option>
            </select>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-[#0b0e17] border border-[#212739] p-1 rounded-xl">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs transition cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500 text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Grid cards view"
              >
                <LayoutGrid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('compact')}
                className={`p-1.5 rounded-lg text-xs transition cursor-pointer ${
                  viewMode === 'compact'
                    ? 'bg-cyan-500 text-black shadow'
                    : 'text-slate-400 hover:text-white'
                }`}
                title="Compact list view"
              >
                <List className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Multi-Criteria Secondary Filter Filters */}
        <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-[#1d2335] text-xs">
          {/* Theme Dropdown */}
          <select
            value={selectedTheme}
            onChange={(e) => setSelectedTheme(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg bg-[#0b0e17] border border-[#212739] text-slate-300 font-medium outline-none cursor-pointer"
          >
            <option value="all">Theme: All (Light & Dark)</option>
            <option value="light">Theme: Light Only</option>
            <option value="dark">Theme: Dark Only</option>
          </select>

          {/* Temperature Dropdown */}
          <select
            value={selectedTemp}
            onChange={(e) => setSelectedTemp(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg bg-[#0b0e17] border border-[#212739] text-slate-300 font-medium outline-none cursor-pointer"
          >
            <option value="all">Temp: All (Warm/Cool/Neutral)</option>
            <option value="warm">Temp: Warm Tones</option>
            <option value="cool">Temp: Cool Tones</option>
            <option value="neutral">Temp: Neutral Tones</option>
          </select>

          {/* Dominant Hue Dropdown */}
          <select
            value={selectedHue}
            onChange={(e) => setSelectedHue(e.target.value)}
            className="px-2.5 py-1.5 rounded-lg bg-[#0b0e17] border border-[#212739] text-slate-300 font-medium outline-none cursor-pointer"
          >
            <option value="all">Dominant Hue: All</option>
            {hues
              .filter((h) => h !== 'all')
              .map((h) => (
                <option key={h} value={h.toLowerCase()}>
                  Hue: {h}
                </option>
              ))}
          </select>

          {/* WCAG Rating Dropdown */}
          <select
            value={selectedWCAG}
            onChange={(e) => setSelectedWCAG(e.target.value as any)}
            className="px-2.5 py-1.5 rounded-lg bg-[#0b0e17] border border-[#212739] text-slate-300 font-medium outline-none cursor-pointer"
          >
            <option value="all">WCAG: All Ratings</option>
            <option value="AA">WCAG: AA Compliant</option>
            <option value="AAA">WCAG: AAA High-Contrast</option>
          </select>

          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="px-2.5 py-1.5 rounded-lg text-rose-400 hover:text-rose-300 text-xs font-semibold transition cursor-pointer flex items-center gap-1"
            >
              <X className="w-3.5 h-3.5" />
              <span>Reset Filters</span>
            </button>
          )}

          <div className="ml-auto text-slate-400 font-mono text-[11px]">
            Showing <span className="text-cyan-400 font-bold">{filteredPalettes.length}</span> of {palettes.length} systems
          </div>
        </div>

        {/* Family Pill Bar */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-thin">
          {families.map((fam) => (
            <button
              key={fam}
              onClick={() => setSelectedFamily(fam)}
              className={`px-3 py-1 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                selectedFamily === fam
                  ? 'bg-cyan-500 text-black font-bold shadow'
                  : 'bg-[#0b0e17] border border-[#212739] text-slate-400 hover:text-white'
              }`}
            >
              {fam === 'all' ? 'All Families' : fam}
            </button>
          ))}
        </div>
      </div>

      {/* Palettes Gallery Display */}
      {filteredPalettes.length === 0 ? (
        <div className="bg-[#121522] border border-[#212739] rounded-2xl p-12 text-center space-y-3">
          <p className="text-slate-300 font-bold">No color systems match your current filters.</p>
          <p className="text-xs text-slate-500">
            Try adjusting your search terms, changing the design family, or clearing filters.
          </p>
          <button
            onClick={clearFilters}
            className="px-4 py-2 rounded-xl bg-cyan-500 text-black text-xs font-bold transition cursor-pointer"
          >
            Clear All Filters
          </button>
        </div>
      ) : viewMode === 'grid' ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredPalettes.map((palette) => (
            <PaletteCard
              key={palette.id}
              palette={palette}
              isActive={palette.id === activePaletteId}
              isFavorite={favorites.includes(palette.id)}
              onToggleFavorite={onToggleFavorite}
              onSelectForPreview={onSelectForPreview}
              onSelectForEdit={onSelectForEdit}
              onInspectDetails={onInspectDetails}
            />
          ))}
        </div>
      ) : (
        /* Compact List View */
        <div className="bg-[#101422] border border-[#1f2638] rounded-2xl overflow-hidden shadow-xl">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-[#1f2638] bg-[#0c0f1a] text-slate-400 font-mono text-[11px] uppercase">
                  <th className="py-3 px-4">Palette Name</th>
                  <th className="py-3 px-4">Family & Theme</th>
                  <th className="py-3 px-4">Swatches</th>
                  <th className="py-3 px-4 text-center">WCAG</th>
                  <th className="py-3 px-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#1a2133]">
                {filteredPalettes.map((p) => {
                  const rating = getPaletteRating(p);
                  return (
                    <tr
                      key={p.id}
                      onClick={() => onSelectForPreview(p)}
                      className="hover:bg-[#151b2e] transition cursor-pointer"
                    >
                      <td className="py-3 px-4">
                        <div className="font-bold text-white">{p.name}</div>
                        <div className="text-[11px] text-slate-500 line-clamp-1">{p.description}</div>
                      </td>

                      <td className="py-3 px-4">
                        <span className="text-slate-300 font-mono">{p.family}</span>
                        <span className="text-slate-500 text-[11px] block">{p.theme} · {p.temperature}</span>
                      </td>

                      <td className="py-3 px-4">
                        <div className="flex -space-x-1">
                          <span style={{ backgroundColor: p.tokens.primary }} className="w-5 h-5 rounded-full inline-block border border-black/40" />
                          <span style={{ backgroundColor: p.tokens.secondary }} className="w-5 h-5 rounded-full inline-block border border-black/40" />
                          <span style={{ backgroundColor: p.tokens.accent }} className="w-5 h-5 rounded-full inline-block border border-black/40" />
                          <span style={{ backgroundColor: p.tokens.surface }} className="w-5 h-5 rounded-full inline-block border border-black/40" />
                          <span style={{ backgroundColor: p.tokens.textPrimary }} className="w-5 h-5 rounded-full inline-block border border-black/40" />
                        </div>
                      </td>

                      <td className="py-3 px-4 text-center">
                        <span
                          className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${
                            rating.overallLevel === 'AAA'
                              ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                              : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                          }`}
                        >
                          {rating.overallLevel}
                        </span>
                      </td>

                      <td className="py-3 px-4 text-right">
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onInspectDetails(p);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-[#192033] hover:bg-[#252f4a] text-slate-300 font-semibold text-[11px] mr-2"
                        >
                          Tokens
                        </button>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            onSelectForPreview(p);
                          }}
                          className="px-2.5 py-1 rounded-lg bg-cyan-500 text-black font-bold text-[11px]"
                        >
                          Preview
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
