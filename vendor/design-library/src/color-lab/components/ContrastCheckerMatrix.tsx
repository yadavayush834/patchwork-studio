import React, { useState } from 'react';
import type { ColorPalette, SemanticTokens, WCAGPairCheck } from '../types';
import {
  checkPaletteWCAG,
  suggestAccessibleColor,
} from '../utils/contrast-checker';
import {
  getContrastRatio,
} from '../utils/color-converter';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Wand2,
  Sparkles,
} from 'lucide-react';

interface ContrastCheckerMatrixProps {
  palette: ColorPalette;
  onUpdateTokens?: (newTokens: SemanticTokens) => void;
  onOpenLiveStudio?: () => void;
}

export function ContrastCheckerMatrix({
  palette,
  onUpdateTokens,
}: ContrastCheckerMatrixProps) {
  const [customFg, setCustomFg] = useState('#ffffff');
  const [customBg, setCustomBg] = useState('#0f172a');

  // Compute 10 UI pairing checks
  const checks: WCAGPairCheck[] = checkPaletteWCAG(palette.tokens);

  const passingAACount = checks.filter((c) => c.aaNormal).length;
  const passingAAACount = checks.filter((c) => c.aaaNormal).length;

  const handleAutoFix = (check: WCAGPairCheck) => {
    if (!onUpdateTokens) return;

    // Suggest accessible replacement for foreground
    const suggestedFg = suggestAccessibleColor(check.foregroundHex, check.backgroundHex, 4.5);
    const updated = { ...palette.tokens };

    // Apply the fix back to the matching token key if applicable
    if (check.name.includes('Body Text')) {
      updated.textPrimary = suggestedFg;
    } else if (check.name.includes('Secondary Text')) {
      updated.textSecondary = suggestedFg;
    } else if (check.name.includes('Muted Text')) {
      updated.textMuted = suggestedFg;
    } else if (check.name.includes('Button')) {
      updated.buttonPrimaryText = suggestedFg;
    } else if (check.name.includes('Accent')) {
      updated.accent = suggestedFg;
    } else if (check.name.includes('Border')) {
      updated.border = suggestedFg;
    } else if (check.name.includes('Error')) {
      updated.errorForeground = suggestedFg;
    } else if (check.name.includes('Success')) {
      updated.successForeground = suggestedFg;
    }

    onUpdateTokens(updated);
  };

  // Custom live pair calculator
  const customRatio = getContrastRatio(customFg, customBg);
  const customPassNormalAA = customRatio >= 4.5;
  const customPassLargeAA = customRatio >= 3.0;
  const customPassNormalAAA = customRatio >= 7.0;

  return (
    <div className="space-y-8">
      {/* Overview Banner */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
        <div className="space-y-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-black text-white font-grotesk tracking-tight">
                WCAG 2.1 Contrast Matrix Audit
              </h2>
              <span className="text-xs text-slate-400">
                Auditing {palette.name} across 10 critical digital interface pairings
              </span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <div className="bg-[#0b0e17] border border-[#1f2638] px-4 py-2 rounded-xl text-center">
            <span className="text-xs font-mono text-slate-400 block">WCAG AA Normal</span>
            <span className="text-lg font-black text-emerald-400">
              {passingAACount} / {checks.length}
            </span>
          </div>

          <div className="bg-[#0b0e17] border border-[#1f2638] px-4 py-2 rounded-xl text-center">
            <span className="text-xs font-mono text-slate-400 block">WCAG AAA Normal</span>
            <span className="text-lg font-black text-cyan-400">
              {passingAAACount} / {checks.length}
            </span>
          </div>
        </div>
      </div>

      {/* 10 Pairing Checks Table */}
      <div className="bg-[#101422] border border-[#1f2638] rounded-2xl overflow-hidden shadow-xl">
        <div className="p-5 border-b border-[#1f2638] flex items-center justify-between">
          <h3 className="font-bold text-sm text-white">
            Standard Interface Combinations Matrix
          </h3>
          <span className="text-xs font-mono text-slate-400">
            Target: 4.5:1 for body copy · 3.0:1 for large text/icons
          </span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-[#1f2638] bg-[#0c0f1a] text-slate-400 text-[11px] font-mono uppercase tracking-wider">
                <th className="py-3 px-4">Component Pairing</th>
                <th className="py-3 px-4">Sample Preview</th>
                <th className="py-3 px-4">Ratio</th>
                <th className="py-3 px-4 text-center">AA (Normal)</th>
                <th className="py-3 px-4 text-center">AA (Large)</th>
                <th className="py-3 px-4 text-center">AAA (Normal)</th>
                <th className="py-3 px-4 text-right">Optimization</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#1a2133] text-xs">
              {checks.map((c, idx) => {
                const ratioNum = c.ratio;
                const isFailing = !c.aaNormal;

                return (
                  <tr
                    key={idx}
                    className="hover:bg-[#151b2e] transition-colors group"
                  >
                    <td className="py-3.5 px-4">
                      <div className="font-semibold text-white">{c.name}</div>
                      <div className="text-[11px] font-mono text-slate-500">
                        {c.foregroundHex} on {c.backgroundHex}
                      </div>
                    </td>

                    <td className="py-3.5 px-4">
                      <div
                        style={{
                          backgroundColor: c.backgroundHex,
                          color: c.foregroundHex,
                          borderColor: palette.tokens.border,
                        }}
                        className="px-3 py-1.5 rounded-lg border text-xs font-semibold inline-flex items-center gap-1.5 shadow-xs"
                      >
                        <span>Sample Text</span>
                      </div>
                    </td>

                    <td className="py-3.5 px-4 font-mono font-bold">
                      <span
                        className={
                          ratioNum >= 7.0
                            ? 'text-cyan-400'
                            : ratioNum >= 4.5
                            ? 'text-emerald-400'
                            : ratioNum >= 3.0
                            ? 'text-amber-400'
                            : 'text-rose-400'
                        }
                      >
                        {ratioNum.toFixed(2)}:1
                      </span>
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {c.aaNormal ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>PASS</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                          <XCircle className="w-3 h-3" />
                          <span>FAIL</span>
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {c.aaLarge ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded-full border border-emerald-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>PASS</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-rose-400 bg-rose-500/10 px-2 py-0.5 rounded-full border border-rose-500/30">
                          <XCircle className="w-3 h-3" />
                          <span>FAIL</span>
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-center">
                      {c.aaaNormal ? (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-cyan-400 bg-cyan-500/10 px-2 py-0.5 rounded-full border border-cyan-500/30">
                          <CheckCircle2 className="w-3 h-3" />
                          <span>PASS</span>
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500 bg-slate-500/10 px-2 py-0.5 rounded-full">
                          <span>FAIL</span>
                        </span>
                      )}
                    </td>

                    <td className="py-3.5 px-4 text-right">
                      {isFailing && onUpdateTokens && (
                        <button
                          onClick={() => handleAutoFix(c)}
                          className="px-2.5 py-1 rounded-lg bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 border border-amber-500/30 text-[11px] font-bold transition cursor-pointer inline-flex items-center gap-1"
                          title="Auto-calculate closest compliant color (4.5:1)"
                        >
                          <Wand2 className="w-3 h-3" />
                          <span>Auto-Fix</span>
                        </button>
                      )}
                      {!isFailing && (
                        <span className="text-[11px] font-mono text-slate-500">
                          Optimal
                        </span>
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>

      {/* Interactive Custom Contrast Lab Sandbox */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-6 space-y-6 shadow-lg">
        <div className="space-y-1">
          <h3 className="font-bold text-base text-white flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Ad-Hoc Contrast Sandbox Calculator</span>
          </h3>
          <p className="text-xs text-slate-400">
            Pick or type any foreground and background hexadecimal colors to verify WCAG ratings instantly.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {/* Foreground Input */}
          <div className="bg-[#0b0e17] border border-[#1f2638] p-4 rounded-xl space-y-3">
            <label className="text-xs font-bold text-slate-300 block">Foreground Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={customFg}
                onChange={(e) => setCustomFg(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-[#2d3748] bg-transparent"
              />
              <input
                type="text"
                value={customFg}
                onChange={(e) => setCustomFg(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-[#151b2c] border border-[#242f48] text-white font-mono text-xs uppercase"
              />
            </div>
          </div>

          {/* Background Input */}
          <div className="bg-[#0b0e17] border border-[#1f2638] p-4 rounded-xl space-y-3">
            <label className="text-xs font-bold text-slate-300 block">Background Color</label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={customBg}
                onChange={(e) => setCustomBg(e.target.value)}
                className="w-10 h-10 rounded-lg cursor-pointer border border-[#2d3748] bg-transparent"
              />
              <input
                type="text"
                value={customBg}
                onChange={(e) => setCustomBg(e.target.value)}
                className="flex-1 px-3 py-2 rounded-lg bg-[#151b2c] border border-[#242f48] text-white font-mono text-xs uppercase"
              />
            </div>
          </div>

          {/* Result Card */}
          <div
            style={{ backgroundColor: customBg, color: customFg }}
            className="p-6 rounded-xl border border-white/20 shadow-xl flex flex-col justify-between min-h-[120px]"
          >
            <div>
              <div className="text-xs font-mono font-bold opacity-80 uppercase tracking-wider">
                Contrast Ratio
              </div>
              <div className="text-3xl font-black">{customRatio.toFixed(2)} : 1</div>
            </div>
            <div className="flex items-center gap-2 pt-2 text-xs font-bold">
              <span>{customPassNormalAA ? '✓ AA Pass' : '✕ AA Fail'}</span>
              <span>·</span>
              <span>{customPassNormalAAA ? '✓ AAA Pass' : '✕ AAA Fail'}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
