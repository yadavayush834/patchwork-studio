import React, { useState, useEffect, useMemo } from 'react';
import type { ColorPalette, SemanticTokens } from './types';
import { masterColorPalettes, getPaletteRating } from './data';
import { PaletteGallery } from './components/PaletteGallery';
import { LivePreviewStudio } from './components/LivePreviewStudio';
import { PaletteEditor } from './components/PaletteEditor';
import { ContrastCheckerMatrix } from './components/ContrastCheckerMatrix';
import { CompareStudio } from './components/CompareStudio';
import { PaletteDetailModal } from './components/PaletteDetailModal';
import { ExportModal } from './components/ExportModal';
import {
  Palette,
  Layout,
  Sliders,
  ShieldCheck,
  GitCompare,
  ExternalLink,
  Sparkles,
  Download,
} from 'lucide-react';

export type ColorLabView = 'gallery' | 'studio' | 'editor' | 'contrast' | 'compare';

export function ColorLab({initialPaletteId}: {initialPaletteId?:string} = {}) {
  const [activeView, setActiveView] = useState<ColorLabView>('gallery');
  const [activePaletteId, setActivePaletteId] = useState<string>(initialPaletteId || masterColorPalettes[0].id);

  // Custom palettes stored in local-first storage
  const [customPalettes, setCustomPalettes] = useState<ColorPalette[]>(() => {
    try {
      const stored = localStorage.getItem('patchwork-design-library:color-lab-custom-palettes');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Favorites stored in local-first storage
  const [favorites, setFavorites] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('patchwork-design-library:color-lab-favorites');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  // Modals state
  const [inspectedPalette, setInspectedPalette] = useState<ColorPalette | null>(null);
  const [isExportOpen, setIsExportOpen] = useState(false);

  // All combined palettes (Master + Custom)
  const allPalettes = useMemo(() => {
    return [...customPalettes, ...masterColorPalettes];
  }, [customPalettes]);

  // Currently selected active palette
  const activePalette = useMemo(() => {
    return allPalettes.find((p) => p.id === activePaletteId) || masterColorPalettes[0];
  }, [allPalettes, activePaletteId]);

  // Persist custom palettes to localStorage
  const handleSaveCustomPalette = (palette: ColorPalette) => {
    setCustomPalettes((prev) => {
      const filtered = prev.filter((p) => p.id !== palette.id);
      const updated = [palette, ...filtered];
      try {
        localStorage.setItem('patchwork-design-library:color-lab-custom-palettes', JSON.stringify(updated));
      } catch (e) {
        console.error('Failed to save palette to localStorage', e);
      }
      return updated;
    });
    setActivePaletteId(palette.id);
  };

  // Toggle favorite
  const handleToggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = prev.includes(id) ? prev.filter((favId) => favId !== id) : [...prev, id];
      try {
        localStorage.setItem('patchwork-design-library:color-lab-favorites', JSON.stringify(next));
      } catch (e) {
        console.error('Failed to save favorites to localStorage', e);
      }
      return next;
    });
  };

  // Direct selection handlers
  const handleSelectForPreview = (palette: ColorPalette) => {
    setActivePaletteId(palette.id);
    setActiveView('studio');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSelectForEdit = (palette: ColorPalette) => {
    setActivePaletteId(palette.id);
    setActiveView('editor');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleInspectDetails = (palette: ColorPalette) => {
    setInspectedPalette(palette);
  };

  const handleUpdateActiveTokens = (newTokens: SemanticTokens) => {
    const updated: ColorPalette = {
      ...activePalette,
      tokens: newTokens,
    };
    handleSaveCustomPalette(updated);
  };

  const navTabs: { id: ColorLabView; label: string; icon: React.ReactNode; badge?: string }[] = [
    {
      id: 'gallery',
      label: 'Palette Discovery',
      icon: <Palette className="w-4 h-4" />,
      badge: `${allPalettes.length}`,
    },
    {
      id: 'studio',
      label: 'Live Preview Studio',
      icon: <Layout className="w-4 h-4" />,
      badge: '11 Patterns',
    },
    {
      id: 'editor',
      label: 'Token Editor & Harmonies',
      icon: <Sliders className="w-4 h-4" />,
    },
    {
      id: 'contrast',
      label: 'WCAG Contrast Matrix',
      icon: <ShieldCheck className="w-4 h-4" />,
      badge: getPaletteRating(activePalette).overallLevel,
    },
    {
      id: 'compare',
      label: 'Compare Studio',
      icon: <GitCompare className="w-4 h-4" />,
    },
  ];

  return (
    <div className="min-h-screen bg-[#070912] text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Sub-Header Banner */}
      <div className="border-b border-[#1b2234] bg-[#0c0f1a]/95 backdrop-blur-md sticky top-16 z-30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex flex-col md:flex-row md:items-center justify-between gap-3">
          {/* View Mode Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0 scrollbar-thin">
            {navTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveView(tab.id)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition cursor-pointer ${
                  activeView === tab.id
                    ? 'bg-cyan-500/15 text-cyan-300 border border-cyan-500/40 font-bold shadow-xs'
                    : 'text-slate-400 hover:text-white hover:bg-[#141928]'
                }`}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.badge && (
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full ${
                      activeView === tab.id
                        ? 'bg-cyan-500/20 text-cyan-300'
                        : 'bg-[#1b2234] text-slate-400'
                    }`}
                  >
                    {tab.badge}
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Active Palette Quick Pill */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-[#121626] border border-[#20273c] px-3 py-1.5 rounded-xl">
              <span className="text-[11px] text-slate-400 hidden sm:inline">Active System:</span>
              <div className="flex items-center gap-1.5">
                <span
                  style={{ backgroundColor: activePalette.tokens.primary }}
                  className="w-3 h-3 rounded-full inline-block shadow-xs"
                />
                <span className="text-xs font-bold text-white font-grotesk truncate max-w-[140px]">
                  {activePalette.name}
                </span>
              </div>
            </div>

            <button
              onClick={() => setIsExportOpen(true)}
              className="px-3 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Export</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Workspace Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 flex-1 w-full">
        {activeView === 'gallery' && (
          <PaletteGallery
            palettes={allPalettes}
            activePaletteId={activePaletteId}
            favorites={favorites}
            onToggleFavorite={handleToggleFavorite}
            onSelectForPreview={handleSelectForPreview}
            onSelectForEdit={handleSelectForEdit}
            onInspectDetails={handleInspectDetails}
          />
        )}

        {activeView === 'studio' && (
          <LivePreviewStudio
            palette={activePalette}
            onOpenEditor={() => setActiveView('editor')}
            onOpenExport={() => setIsExportOpen(true)}
            onOpenContrast={() => setActiveView('contrast')}
          />
        )}

        {activeView === 'editor' && (
          <PaletteEditor
            initialPalette={activePalette}
            onSaveCustomPalette={handleSaveCustomPalette}
            onOpenPreview={handleSelectForPreview}
          />
        )}

        {activeView === 'contrast' && (
          <ContrastCheckerMatrix
            palette={activePalette}
            onUpdateTokens={handleUpdateActiveTokens}
            onOpenLiveStudio={() => setActiveView('studio')}
          />
        )}

        {activeView === 'compare' && (
          <CompareStudio
            palettes={allPalettes}
            initialPaletteA={activePalette}
            onSelectPalette={(p) => setActivePaletteId(p.id)}
            onOpenLiveStudio={handleSelectForPreview}
          />
        )}
      </main>

      {/* Inspection Modal */}
      {inspectedPalette && (
        <PaletteDetailModal
          palette={inspectedPalette}
          onClose={() => setInspectedPalette(null)}
          onOpenPreview={(p) => {
            setInspectedPalette(null);
            handleSelectForPreview(p);
          }}
          onOpenEditor={(p) => {
            setInspectedPalette(null);
            handleSelectForEdit(p);
          }}
          onOpenExport={(p) => {
            setInspectedPalette(null);
            setActivePaletteId(p.id);
            setIsExportOpen(true);
          }}
        />
      )}

      {/* Export Modal */}
      {isExportOpen && (
        <ExportModal
          palette={activePalette}
          onClose={() => setIsExportOpen(false)}
        />
      )}
    </div>
  );
}

export default ColorLab;
