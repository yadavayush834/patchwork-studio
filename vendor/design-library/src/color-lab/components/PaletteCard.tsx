import React, { useState } from 'react';
import type { ColorPalette } from '../types';
import { getPaletteRating } from '../data';
import {
  Heart,
  Eye,
  Sliders,
  Check,
  Copy,
  ShieldCheck,
  Layers,
  Sparkles,
} from 'lucide-react';

interface PaletteCardProps {
  palette: ColorPalette;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onSelectForPreview: (palette: ColorPalette) => void;
  onSelectForEdit: (palette: ColorPalette) => void;
  onInspectDetails: (palette: ColorPalette) => void;
  isActive?: boolean;
}

export function PaletteCard({
  palette,
  isFavorite,
  onToggleFavorite,
  onSelectForPreview,
  onSelectForEdit,
  onInspectDetails,
  isActive = false,
}: PaletteCardProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const { tokens } = palette;
  const rating = getPaletteRating(palette);

  const handleCopyHex = (e: React.MouseEvent, hex: string, label: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(hex);
    setCopiedKey(label);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  return (
    <div
      onClick={() => onSelectForPreview(palette)}
      className={`group relative rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col justify-between ${
        isActive
          ? 'bg-[#14192a] border-cyan-400 ring-2 ring-cyan-500/20 shadow-xl'
          : 'bg-[#101422] border-[#1f2638] hover:border-slate-600 hover:bg-[#14192a] shadow-md'
      }`}
    >
      {/* Visual Swatch Strip */}
      <div className="relative p-4 pb-0">
        <div className="h-28 rounded-xl overflow-hidden flex border border-[#2b354f] shadow-inner relative">
          {/* 5 Proportional semantic swatch bands */}
          <div
            style={{ backgroundColor: tokens.primary }}
            className="flex-1 h-full transition-transform group-hover:scale-y-105 duration-300 relative group/swatch"
            title={`Primary: ${tokens.primary}`}
          >
            <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-1 rounded bg-black/70 text-white backdrop-blur-xs transition">
              PRI
            </span>
          </div>

          <div
            style={{ backgroundColor: tokens.secondary }}
            className="flex-1 h-full transition-transform group-hover:scale-y-105 duration-300 relative group/swatch"
            title={`Secondary: ${tokens.secondary}`}
          >
            <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-1 rounded bg-black/70 text-white backdrop-blur-xs transition">
              SEC
            </span>
          </div>

          <div
            style={{ backgroundColor: tokens.accent }}
            className="flex-1 h-full transition-transform group-hover:scale-y-105 duration-300 relative group/swatch"
            title={`Accent: ${tokens.accent}`}
          >
            <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-1 rounded bg-black/70 text-white backdrop-blur-xs transition">
              ACC
            </span>
          </div>

          <div
            style={{ backgroundColor: tokens.surface }}
            className="flex-1 h-full transition-transform group-hover:scale-y-105 duration-300 relative group/swatch"
            title={`Surface: ${tokens.surface}`}
          >
            <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-1 rounded bg-black/70 text-white backdrop-blur-xs transition">
              SRF
            </span>
          </div>

          <div
            style={{ backgroundColor: tokens.textPrimary }}
            className="flex-1 h-full transition-transform group-hover:scale-y-105 duration-300 relative group/swatch"
            title={`Text: ${tokens.textPrimary}`}
          >
            <span className="opacity-0 group-hover/swatch:opacity-100 absolute bottom-1 left-1/2 -translate-x-1/2 text-[9px] font-mono font-bold px-1 rounded bg-black/70 text-white backdrop-blur-xs transition">
              TXT
            </span>
          </div>

          {/* Micro preview overlay card embedded in swatch */}
          <div
            style={{
              backgroundColor: tokens.background,
              borderColor: tokens.border,
              color: tokens.textPrimary,
            }}
            className="absolute top-2 right-2 px-2.5 py-1.5 rounded-lg border text-[10px] font-bold shadow-md flex items-center gap-1.5"
          >
            <span
              style={{ backgroundColor: tokens.primary }}
              className="w-2 h-2 rounded-full inline-block"
            />
            <span>{palette.tokens.primary.toUpperCase()}</span>
          </div>
        </div>

        {/* Favorite Button on top right */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(palette.id);
          }}
          className={`absolute top-6 right-6 p-2 rounded-xl backdrop-blur-md transition-all cursor-pointer ${
            isFavorite
              ? 'bg-rose-500/20 text-rose-400 border border-rose-500/40 shadow'
              : 'bg-black/50 text-slate-400 hover:text-white hover:bg-black/80'
          }`}
          title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
        >
          <Heart className={`w-3.5 h-3.5 ${isFavorite ? 'fill-current' : ''}`} />
        </button>
      </div>

      {/* Palette Info & Badges */}
      <div className="p-4 space-y-3 flex-1 flex flex-col justify-between">
        <div className="space-y-1.5">
          <div className="flex items-center justify-between gap-2">
            <h3 className="font-extrabold text-sm text-white group-hover:text-cyan-300 transition-colors font-grotesk truncate">
              {palette.name}
            </h3>
            <span
              className={`text-[10px] font-mono px-2 py-0.5 rounded-full border shrink-0 font-bold ${
                rating.overallLevel === 'AAA'
                  ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                  : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
              }`}
            >
              WCAG {rating.overallLevel}
            </span>
          </div>

          <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">
            {palette.description}
          </p>
        </div>

        {/* Tags & Attribute Meta */}
        <div className="space-y-3 pt-2">
          <div className="flex flex-wrap items-center gap-1.5 text-[10px] font-mono">
            <span className="px-2 py-0.5 rounded-md bg-[#192033] text-slate-300 border border-[#2b354f]">
              {palette.family}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#192033] text-slate-400 border border-[#2b354f]">
              {palette.theme}
            </span>
            <span className="px-2 py-0.5 rounded-md bg-[#192033] text-slate-400 border border-[#2b354f]">
              {palette.temperature}
            </span>
            {(palette.dominantHue || palette.primaryHue) && (
              <span className="px-2 py-0.5 rounded-md bg-[#192033] text-slate-400 border border-[#2b354f]">
                {palette.dominantHue || palette.primaryHue}
              </span>
            )}
          </div>

          {/* Hex Swatch Mini Indicators */}
          <div className="grid grid-cols-5 gap-1 pt-1">
            {[
              { label: 'PRI', val: tokens.primary },
              { label: 'SEC', val: tokens.secondary },
              { label: 'ACC', val: tokens.accent },
              { label: 'SRF', val: tokens.surface },
              { label: 'TXT', val: tokens.textPrimary },
            ].map((sw, idx) => (
              <button
                key={idx}
                onClick={(e) => handleCopyHex(e, sw.val, `${palette.id}-${sw.label}`)}
                className="group/hex flex flex-col items-center p-1 rounded-lg bg-[#0c0f17] border border-[#1b2233] hover:border-cyan-500/50 transition cursor-pointer"
                title={`Click to copy: ${sw.val}`}
              >
                <div
                  style={{ backgroundColor: sw.val }}
                  className="w-full h-3 rounded shadow-xs"
                />
                <span className="text-[9px] font-mono text-slate-400 mt-1 truncate">
                  {copiedKey === `${palette.id}-${sw.label}` ? 'COPIED' : sw.val.slice(0, 5)}
                </span>
              </button>
            ))}
          </div>

          {/* Card Actions Footer */}
          <div className="flex items-center justify-between pt-2 border-t border-[#1d2438]">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onInspectDetails(palette);
              }}
              className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 transition cursor-pointer"
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Tokens</span>
            </button>

            <div className="flex items-center gap-1">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectForEdit(palette);
                }}
                className="p-1.5 rounded-lg text-slate-400 hover:text-amber-400 hover:bg-[#1a2133] transition cursor-pointer"
                title="Edit palette in editor"
              >
                <Sliders className="w-3.5 h-3.5" />
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onSelectForPreview(palette);
                }}
                className="px-2.5 py-1 rounded-lg bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 text-[11px] font-bold transition cursor-pointer flex items-center gap-1"
              >
                <Eye className="w-3 h-3" />
                <span>Preview</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
