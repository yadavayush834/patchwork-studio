import React, { useState } from 'react';
import type { ColorPalette } from '../types';
import { getPaletteRating } from '../data';
import {
  Eye,
  GitCompare,
} from 'lucide-react';

interface CompareStudioProps {
  palettes: ColorPalette[];
  initialPaletteA: ColorPalette;
  onSelectPalette: (palette: ColorPalette) => void;
  onOpenLiveStudio: (palette: ColorPalette) => void;
}

export function CompareStudio({
  palettes,
  initialPaletteA,
  onSelectPalette,
  onOpenLiveStudio,
}: CompareStudioProps) {
  const [selectedIdA, setSelectedIdA] = useState<string>(initialPaletteA.id);
  const [selectedIdB, setSelectedIdB] = useState<string>(
    palettes.find((p) => p.id !== initialPaletteA.id)?.id || palettes[1]?.id || initialPaletteA.id
  );
  const [showThird, setShowThird] = useState(false);
  const [selectedIdC, setSelectedIdC] = useState<string>(
    palettes.find((p) => p.id !== initialPaletteA.id && p.id !== selectedIdB)?.id || palettes[2]?.id || initialPaletteA.id
  );

  const palA = palettes.find((p) => p.id === selectedIdA) || initialPaletteA;
  const palB = palettes.find((p) => p.id === selectedIdB) || palettes[1] || initialPaletteA;
  const palC = palettes.find((p) => p.id === selectedIdC) || palettes[2] || initialPaletteA;

  const comparedList = showThird ? [palA, palB, palC] : [palA, palB];

  return (
    <div className="space-y-8">
      {/* Top Controller Bar */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <GitCompare className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white font-grotesk tracking-tight">
                Palette Side-by-Side Comparator
              </h2>
              <p className="text-xs text-slate-400">
                Compare {showThird ? 'three' : 'two'} color systems simultaneously across identical component layouts.
              </p>
            </div>
          </div>
        </div>

        <button
          onClick={() => setShowThird(!showThird)}
          className="px-4 py-2 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-200 text-xs font-semibold border border-[#2e3955] transition cursor-pointer self-start md:self-auto"
        >
          {showThird ? 'Compare 2 Palettes' : '+ Add 3rd Palette'}
        </button>
      </div>

      {/* Grid of 2 or 3 Comparison Columns */}
      <div
        className={`grid grid-cols-1 ${
          showThird ? 'lg:grid-cols-3' : 'md:grid-cols-2'
        } gap-6`}
      >
        {comparedList.map((palette, colIndex) => {
          const { tokens } = palette;
          const rating = getPaletteRating(palette);
          const currentSelectId =
            colIndex === 0 ? selectedIdA : colIndex === 1 ? selectedIdB : selectedIdC;
          const setSelectId =
            colIndex === 0 ? setSelectedIdA : colIndex === 1 ? setSelectedIdB : setSelectedIdC;

          return (
            <div
              key={palette.id + colIndex}
              className="bg-[#101422] border border-[#1f2638] rounded-2xl p-5 space-y-6 flex flex-col justify-between shadow-xl"
            >
              {/* Palette Dropdown Selector */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                    Slot {String.fromCharCode(65 + colIndex)}
                  </span>
                  <span
                    className={`text-[10px] font-mono px-2 py-0.5 rounded-full border font-bold ${
                      rating.overallLevel === 'AAA'
                        ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30'
                        : 'bg-cyan-500/10 text-cyan-400 border-cyan-500/30'
                    }`}
                  >
                    WCAG {rating.overallLevel}
                  </span>
                </div>

                <select
                  value={currentSelectId}
                  onChange={(e) => setSelectId(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl bg-[#161c2d] border border-[#252f4a] text-white text-xs font-bold outline-none cursor-pointer"
                >
                  {palettes.map((p) => (
                    <option key={p.id} value={p.id}>
                      {p.name} ({p.family} · {p.theme})
                    </option>
                  ))}
                </select>
              </div>

              {/* Swatch Strip */}
              <div className="h-8 rounded-xl overflow-hidden flex border border-[#27324c]">
                <div style={{ backgroundColor: tokens.primary }} className="flex-1" title="Primary" />
                <div style={{ backgroundColor: tokens.secondary }} className="flex-1" title="Secondary" />
                <div style={{ backgroundColor: tokens.accent }} className="flex-1" title="Accent" />
                <div style={{ backgroundColor: tokens.surface }} className="flex-1" title="Surface" />
                <div style={{ backgroundColor: tokens.textPrimary }} className="flex-1" title="Text" />
              </div>

              {/* Miniature UI Component Preview with Dynamic Palette Tokens */}
              <div
                style={{
                  backgroundColor: tokens.background,
                  borderColor: tokens.border,
                  color: tokens.textPrimary,
                }}
                className="rounded-2xl border p-5 space-y-5 shadow-inner"
              >
                {/* Micro Navbar */}
                <div
                  style={{
                    backgroundColor: tokens.surface,
                    borderColor: tokens.border,
                  }}
                  className="p-3 rounded-xl border flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-2">
                    <div
                      style={{
                        backgroundColor: tokens.primary,
                        color: tokens.buttonPrimaryText,
                      }}
                      className="w-6 h-6 rounded-lg flex items-center justify-center font-bold text-[10px]"
                    >
                      {palette.name.slice(0, 1)}
                    </div>
                    <span className="font-bold">{palette.name}</span>
                  </div>
                  <span
                    style={{
                      backgroundColor: tokens.surfaceElevated,
                      color: tokens.textSecondary,
                    }}
                    className="text-[10px] px-2 py-0.5 rounded"
                  >
                    Active
                  </span>
                </div>

                {/* Micro Hero */}
                <div className="text-center space-y-2 py-2">
                  <div
                    style={{
                      backgroundColor: `${tokens.accent}20`,
                      color: tokens.accent,
                    }}
                    className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold"
                  >
                    {palette.family}
                  </div>
                  <h4 style={{ color: tokens.textPrimary }} className="font-extrabold text-base leading-tight">
                    Next-Gen Interface Experience
                  </h4>
                  <p style={{ color: tokens.textSecondary }} className="text-xs line-clamp-2">
                    {palette.description}
                  </p>
                  <div className="flex items-center justify-center gap-2 pt-1">
                    <button
                      style={{
                        backgroundColor: tokens.buttonPrimaryBg || tokens.buttonPrimary,
                        color: tokens.buttonPrimaryText,
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-bold shadow-sm"
                    >
                      Action
                    </button>
                    <button
                      style={{
                        backgroundColor: tokens.buttonSecondaryBg || tokens.surfaceElevated,
                        color: tokens.buttonSecondaryText || tokens.textPrimary,
                        borderColor: tokens.buttonSecondaryBorder || tokens.border,
                      }}
                      className="px-3 py-1.5 rounded-lg text-xs font-semibold border"
                    >
                      Dismiss
                    </button>
                  </div>
                </div>

                {/* Micro Feature Card */}
                <div
                  style={{
                    backgroundColor: tokens.surface,
                    borderColor: tokens.border,
                  }}
                  className="p-4 rounded-xl border space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span style={{ color: tokens.primary }} className="font-bold">
                      Telemetry Node
                    </span>
                    <span
                      style={{
                        backgroundColor: `${tokens.success}20`,
                        color: tokens.success,
                      }}
                      className="text-[9px] font-mono font-bold px-1.5 py-0.2 rounded"
                    >
                      ONLINE
                    </span>
                  </div>
                  <p style={{ color: tokens.textSecondary }} className="text-[11px]">
                    Continuous accessibility and WCAG 2.1 telemetry metrics.
                  </p>
                </div>
              </div>

              {/* Bottom Quick Select */}
              <div className="flex items-center gap-2 pt-2 border-t border-[#1a2133]">
                <button
                  onClick={() => onSelectPalette(palette)}
                  className="flex-1 py-2 rounded-xl bg-[#192033] hover:bg-[#252f4a] text-slate-200 text-xs font-semibold border border-[#27324d] transition cursor-pointer"
                >
                  Set as Active
                </button>
                <button
                  onClick={() => onOpenLiveStudio(palette)}
                  className="px-3 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1 shadow"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>Studio</span>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
