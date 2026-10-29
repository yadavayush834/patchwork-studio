import React, { useState } from 'react';
import type { ColorPalette, TonalStep } from '../types';
import { getPaletteRating } from '../data';
import {
  X,
  Check,
  Sparkles,
  Sliders,
  ExternalLink,
  Eye,
  Layers,
  Copy,
} from 'lucide-react';

interface PaletteDetailModalProps {
  palette: ColorPalette | null;
  onClose: () => void;
  onOpenPreview: (palette: ColorPalette) => void;
  onOpenEditor: (palette: ColorPalette) => void;
  onOpenExport: (palette: ColorPalette) => void;
}

export function PaletteDetailModal({
  palette,
  onClose,
  onOpenPreview,
  onOpenEditor,
  onOpenExport,
}: PaletteDetailModalProps) {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  if (!palette) return null;

  const { tokens } = palette;
  const tonalScale = palette.tonalScale || tokens.tonalScale;
  const rating = getPaletteRating(palette);

  const copyToClipboard = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1800);
  };

  const tokenCategories = [
    {
      category: 'Brand Foundations',
      items: [
        { label: 'Primary Brand', key: 'primary', val: tokens.primary },
        { label: 'Secondary Brand', key: 'secondary', val: tokens.secondary },
        { label: 'Vibrant Accent', key: 'accent', val: tokens.accent },
      ],
    },
    {
      category: 'Surfaces & Canvases',
      items: [
        { label: 'Page Background', key: 'background', val: tokens.background },
        { label: 'Base Surface', key: 'surface', val: tokens.surface },
        { label: 'Elevated Surface', key: 'surfaceElevated', val: tokens.surfaceElevated },
      ],
    },
    {
      category: 'Typography & Content',
      items: [
        { label: 'Primary Text', key: 'textPrimary', val: tokens.textPrimary },
        { label: 'Secondary Text', key: 'textSecondary', val: tokens.textSecondary },
        { label: 'Muted Text', key: 'textMuted', val: tokens.textMuted },
      ],
    },
    {
      category: 'Borders & Outlines',
      items: [
        { label: 'Standard Border', key: 'border', val: tokens.border },
        { label: 'Border Muted', key: 'borderMuted', val: tokens.borderMuted },
      ],
    },
    {
      category: 'Buttons & Interactive',
      items: [
        { label: 'Primary Button Bg', key: 'buttonPrimary', val: tokens.buttonPrimary },
        { label: 'Primary Button Text', key: 'buttonPrimaryText', val: tokens.buttonPrimaryText },
        { label: 'Primary Button Hover', key: 'buttonPrimaryHover', val: tokens.buttonPrimaryHover },
      ],
    },
    {
      category: 'Status & Feedback Signals',
      items: [
        { label: 'Success', key: 'success', val: tokens.success },
        { label: 'Warning', key: 'warning', val: tokens.warning },
        { label: 'Error / Danger', key: 'error', val: tokens.error },
        { label: 'Informational', key: 'info', val: tokens.info },
      ],
    },
  ];

  const scaleSteps: TonalStep[] = [
    '50',
    '100',
    '200',
    '300',
    '400',
    '500',
    '600',
    '700',
    '800',
    '900',
    '950',
  ];

  const useCases = palette.bestFor || palette.industry || [];

  return (
    <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-[#0f1322] border border-[#232c42] rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col scrollbar-thin">
        {/* Modal Header */}
        <div className="p-6 border-b border-[#1f273d] flex items-start justify-between sticky top-0 bg-[#0f1322]/95 backdrop-blur-md z-10">
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-black text-white font-grotesk tracking-tight">
                {palette.name}
              </h2>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
                {palette.family}
              </span>
              <span className="text-xs font-mono px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold">
                WCAG {rating.overallLevel}
              </span>
            </div>
            <p className="text-xs text-slate-400">{palette.description}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-[#1a2133] hover:bg-[#252f48] text-slate-400 hover:text-white transition cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-8 flex-1">
          {/* 11-Step Tonal Scale Bar */}
          {tonalScale && (
            <div className="space-y-3 bg-[#13182b] p-5 rounded-2xl border border-[#212a42]">
              <div className="flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-cyan-400" />
                    <span>11-Step Tonal Scale (Primary Brand)</span>
                  </h4>
                  <p className="text-xs text-slate-400">
                    Perceptually calibrated steps from lightness 97% (50) to 7% (950).
                  </p>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Click swatch to copy HEX</span>
              </div>

              <div className="grid grid-cols-11 gap-1.5 pt-2">
                {scaleSteps.map((step) => {
                  const hex = tonalScale[step];
                  const isCopied = copiedKey === `tonal-${step}`;
                  return (
                    <button
                      key={step}
                      onClick={() => copyToClipboard(hex, `tonal-${step}`)}
                      className="group flex flex-col items-center cursor-pointer transition-transform hover:-translate-y-1"
                      title={`Step ${step}: ${hex}`}
                    >
                      <div
                        style={{ backgroundColor: hex }}
                        className="w-full h-12 rounded-lg border border-black/20 shadow-inner"
                      />
                      <span className="text-[10px] font-mono text-slate-400 font-bold mt-1">
                        {step}
                      </span>
                      <span className="text-[9px] font-mono text-slate-400 truncate max-w-full">
                        {isCopied ? 'COPIED' : hex}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Semantic Token Catalog Groups */}
          <div className="space-y-6">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Layers className="w-4 h-4 text-amber-400" />
              <span>Complete Semantic Design Tokens Dictionary</span>
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {tokenCategories.map((cat, cidx) => (
                <div
                  key={cidx}
                  className="bg-[#121627] border border-[#1f273d] p-4 rounded-2xl space-y-3"
                >
                  <h4 className="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold">
                    {cat.category}
                  </h4>
                  <div className="space-y-2">
                    {cat.items.map((item) => {
                      const isCopied = copiedKey === item.key;
                      return (
                        <div
                          key={item.key}
                          onClick={() => copyToClipboard(item.val, item.key)}
                          className="flex items-center justify-between p-2 rounded-xl bg-[#0c0f1a] border border-[#1b2234] hover:border-cyan-500/40 transition cursor-pointer group"
                        >
                          <div className="flex items-center gap-2.5">
                            <div
                              style={{ backgroundColor: item.val }}
                              className="w-5 h-5 rounded-md border border-white/20 shadow-xs shrink-0"
                            />
                            <div>
                              <span className="text-xs font-medium text-slate-200 block">
                                {item.label}
                              </span>
                              <span className="text-[10px] font-mono text-slate-500">
                                --cp-{item.key}
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-slate-300 font-bold">
                              {item.val}
                            </span>
                            <div className="p-1 rounded text-slate-500 group-hover:text-cyan-400">
                              {isCopied ? (
                                <Check className="w-3.5 h-3.5 text-emerald-400" />
                              ) : (
                                <Copy className="w-3.5 h-3.5" />
                              )}
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Use Cases & Metadata */}
          {useCases.length > 0 && (
            <div className="bg-[#121627] border border-[#1f273d] p-5 rounded-2xl space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold">
                Recommended Use Cases & Context
              </h4>
              <div className="flex flex-wrap gap-2">
                {useCases.map((useCase, uidx) => (
                  <span
                    key={uidx}
                    className="px-3 py-1 rounded-lg bg-[#1a2135] text-slate-200 text-xs font-medium border border-[#2b354f]"
                  >
                    ✓ {useCase}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Action Footer */}
        <div className="p-6 border-t border-[#1f273d] bg-[#0c0f1a] flex flex-wrap items-center justify-between gap-3 sticky bottom-0">
          <div className="text-xs text-slate-400">
            Click any token or tonal scale swatch to copy HEX to clipboard.
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => {
                onClose();
                onOpenEditor(palette);
              }}
              className="px-4 py-2 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-200 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
            >
              <Sliders className="w-3.5 h-3.5 text-amber-400" />
              <span>Customize in Editor</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenExport(palette);
              }}
              className="px-4 py-2 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-200 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
            >
              <ExternalLink className="w-3.5 h-3.5 text-cyan-400" />
              <span>Export Code</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenPreview(palette);
              }}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Open in Live Studio</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
