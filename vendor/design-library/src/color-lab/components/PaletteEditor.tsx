import React, { useState } from 'react';
import type { ColorPalette, SemanticTokens, StringTokenKey } from '../types';
import { getPaletteRating } from '../data';
import {
  generateHarmonies,
  generateTonalScale,
} from '../utils/harmony-generator';
import {
  rotateHue,
  adjustLightness,
  adjustSaturation,
} from '../utils/color-converter';
import {
  computePaletteContrastRating,
  checkPaletteWCAG,
  suggestAccessibleColor,
} from '../utils/contrast-checker';
import {
  Sliders,
  Lock,
  Unlock,
  Wand2,
  Save,
  RotateCcw,
  Sparkles,
  Eye,
  Check,
  RefreshCw,
  Sun,
  ShieldCheck,
  Copy,
} from 'lucide-react';

interface PaletteEditorProps {
  initialPalette: ColorPalette;
  onSaveCustomPalette: (palette: ColorPalette) => void;
  onOpenPreview: (palette: ColorPalette) => void;
}

export function PaletteEditor({
  initialPalette,
  onSaveCustomPalette,
  onOpenPreview,
}: PaletteEditorProps) {
  const [currentPalette, setCurrentPalette] = useState<ColorPalette>(initialPalette);
  const [lockedKeys, setLockedKeys] = useState<Set<StringTokenKey>>(new Set());
  const [savedSuccess, setSavedSuccess] = useState(false);
  const rating = getPaletteRating(currentPalette);

  // Global modifiers state
  const [hueShift, setHueShift] = useState(0);
  const [satMultiplier, setSatMultiplier] = useState(1.0);
  const [lightnessShift, setLightnessShift] = useState(0);

  const toggleLock = (key: StringTokenKey) => {
    setLockedKeys((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  const handleTokenChange = (key: StringTokenKey, value: string) => {
    const updatedTokens = {
      ...currentPalette.tokens,
      [key]: value,
    };

    // If primary changed, update tonal scale
    const tonalScale =
      key === 'primary'
        ? generateTonalScale(value)
        : currentPalette.tonalScale;

    const contrastRating = computePaletteContrastRating(updatedTokens);

    setCurrentPalette({
      ...currentPalette,
      tokens: updatedTokens,
      tonalScale,
      contrastRating,
    });
  };

  // Generate Harmonies based on primary color
  const applyHarmony = (
    mode: 'complementary' | 'analogous' | 'triadic' | 'splitComplementary' | 'monochromatic'
  ) => {
    const base = currentPalette.tokens.primary;
    const harmonies = generateHarmonies(base);
    const updated = { ...currentPalette.tokens };

    if (mode === 'complementary') {
      if (!lockedKeys.has('secondary')) updated.secondary = harmonies.complementary;
      if (!lockedKeys.has('accent')) updated.accent = rotateHue(base, 45);
    } else if (mode === 'analogous') {
      if (!lockedKeys.has('secondary')) updated.secondary = harmonies.analogous[0];
      if (!lockedKeys.has('accent')) updated.accent = harmonies.analogous[1];
    } else if (mode === 'triadic') {
      if (!lockedKeys.has('secondary')) updated.secondary = harmonies.triadic[0];
      if (!lockedKeys.has('accent')) updated.accent = harmonies.triadic[1];
    } else if (mode === 'splitComplementary') {
      if (!lockedKeys.has('secondary')) updated.secondary = harmonies.splitComplementary[0];
      if (!lockedKeys.has('accent')) updated.accent = harmonies.splitComplementary[1];
    } else if (mode === 'monochromatic') {
      if (!lockedKeys.has('secondary')) updated.secondary = harmonies.monochromatic[0];
      if (!lockedKeys.has('accent')) updated.accent = harmonies.monochromatic[1];
    }

    const contrastRating = computePaletteContrastRating(updated);
    setCurrentPalette({
      ...currentPalette,
      tokens: updated,
      contrastRating,
    });
  };

  // Apply Global Sliders
  const handleApplyGlobalShift = () => {
    const updated = { ...currentPalette.tokens };

    (Object.keys(updated) as Array<StringTokenKey>).forEach((key) => {
      if (key === ('tonalScale' as any)) return;
      if (lockedKeys.has(key)) return;
      let hex = updated[key] as string;
      if (!hex || typeof hex !== 'string') return;
      if (hueShift !== 0) hex = rotateHue(hex, hueShift);
      if (satMultiplier !== 1.0) hex = adjustSaturation(hex, satMultiplier);
      if (lightnessShift !== 0) hex = adjustLightness(hex, lightnessShift);
      (updated as any)[key] = hex;
    });

    const tonalScale = generateTonalScale(updated.primary);
    const contrastRating = computePaletteContrastRating(updated);

    setCurrentPalette({
      ...currentPalette,
      tokens: updated,
      tonalScale,
      contrastRating,
    });

    // Reset slider controls
    setHueShift(0);
    setSatMultiplier(1.0);
    setLightnessShift(0);
  };

  // Smart Auto-Fix Contrast
  const handleSmartContrastFix = () => {
    const checks = checkPaletteWCAG(currentPalette.tokens);
    const updated = { ...currentPalette.tokens };

    checks.forEach((c) => {
      if (!c.aaNormal) {
        const fixed = suggestAccessibleColor(c.foregroundHex, c.backgroundHex, 4.5);
        if (c.name.includes('Body Text') && !lockedKeys.has('textPrimary')) {
          updated.textPrimary = fixed;
        } else if (c.name.includes('Secondary Text') && !lockedKeys.has('textSecondary')) {
          updated.textSecondary = fixed;
        } else if (c.name.includes('Muted Text') && !lockedKeys.has('textMuted')) {
          updated.textMuted = fixed;
        } else if (c.name.includes('Button') && !lockedKeys.has('buttonPrimaryText')) {
          updated.buttonPrimaryText = fixed;
        }
      }
    });

    const contrastRating = computePaletteContrastRating(updated);
    setCurrentPalette({
      ...currentPalette,
      tokens: updated,
      contrastRating,
    });
  };

  // Reset to original
  const handleReset = () => {
    setCurrentPalette(initialPalette);
    setLockedKeys(new Set());
    setHueShift(0);
    setSatMultiplier(1.0);
    setLightnessShift(0);
  };

  // Save to LocalStorage / Parent
  const handleSave = () => {
    const customPaletteToSave: ColorPalette = {
      ...currentPalette,
      id: currentPalette.id.startsWith('custom-')
        ? currentPalette.id
        : `custom-${currentPalette.id}-${Date.now().toString().slice(-4)}`,
      name: currentPalette.name.includes('(Custom)')
        ? currentPalette.name
        : `${currentPalette.name} (Custom)`,
    };

    onSaveCustomPalette(customPaletteToSave);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const tokensList: Array<{ label: string; key: StringTokenKey; group: string }> = [
    { label: 'Primary Brand', key: 'primary', group: 'Brand' },
    { label: 'Secondary Brand', key: 'secondary', group: 'Brand' },
    { label: 'Accent', key: 'accent', group: 'Brand' },

    { label: 'Background', key: 'background', group: 'Surfaces' },
    { label: 'Surface', key: 'surface', group: 'Surfaces' },
    { label: 'Elevated Surface', key: 'surfaceElevated', group: 'Surfaces' },

    { label: 'Primary Text', key: 'textPrimary', group: 'Typography' },
    { label: 'Secondary Text', key: 'textSecondary', group: 'Typography' },
    { label: 'Muted Text', key: 'textMuted', group: 'Typography' },

    { label: 'Border', key: 'border', group: 'Borders' },
    { label: 'Border Hover', key: 'borderHover', group: 'Borders' },

    { label: 'Button Primary Bg', key: 'buttonPrimaryBg', group: 'Controls' },
    { label: 'Button Primary Text', key: 'buttonPrimaryText', group: 'Controls' },
    { label: 'Button Sec Bg', key: 'buttonSecondaryBg', group: 'Controls' },
    { label: 'Button Sec Text', key: 'buttonSecondaryText', group: 'Controls' },

    { label: 'Success', key: 'success', group: 'Feedback' },
    { label: 'Warning', key: 'warning', group: 'Feedback' },
    { label: 'Error', key: 'error', group: 'Feedback' },
  ];

  return (
    <div className="space-y-8">
      {/* Editor Header Banner */}
      <div className="bg-[#121522] border border-[#212739] rounded-2xl p-6 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-lg">
        <div className="space-y-1">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Sliders className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl font-black text-white font-grotesk tracking-tight">
                  {currentPalette.name}
                </h2>
                <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 font-bold">
                  WCAG {rating.overallLevel}
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Interactive token editor, lock preservation, harmony generators, and global color modifiers.
              </p>
            </div>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2">
          <button
            onClick={handleReset}
            className="px-3.5 py-2 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-slate-300 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
            title="Reset to original preset"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset</span>
          </button>

          <button
            onClick={() => onOpenPreview(currentPalette)}
            className="px-4 py-2 rounded-xl bg-[#1e2538] hover:bg-[#2b354f] text-cyan-300 text-xs font-semibold border border-[#2e3955] transition cursor-pointer flex items-center gap-1.5"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Live Studio</span>
          </button>

          <button
            onClick={handleSave}
            className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-black text-xs font-bold transition cursor-pointer flex items-center gap-1.5 shadow"
          >
            {savedSuccess ? (
              <>
                <Check className="w-3.5 h-3.5 text-black" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <Save className="w-3.5 h-3.5" />
                <span>Save to Library</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Harmony Generators & Smart Actions Bar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Harmonizers */}
        <div className="bg-[#101422] border border-[#1f2638] rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Color Harmony Generators</span>
            </h3>
            <span className="text-[11px] font-mono text-slate-400">
              Preserves locked tokens
            </span>
          </div>

          <p className="text-xs text-slate-400">
            Generate mathematical color relationships keyed to your primary brand token (
            <span className="font-mono text-cyan-300">{currentPalette.tokens.primary}</span>).
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {[
              { id: 'complementary', label: 'Complementary' },
              { id: 'analogous', label: 'Analogous' },
              { id: 'triadic', label: 'Triadic (120°)' },
              { id: 'splitComplementary', label: 'Split-Comp' },
              { id: 'monochromatic', label: 'Monochrome' },
            ].map((harm) => (
              <button
                key={harm.id}
                onClick={() => applyHarmony(harm.id as any)}
                className="px-3 py-2 rounded-xl bg-[#192033] hover:bg-[#232c45] text-slate-200 text-xs font-semibold border border-[#2b354f] transition cursor-pointer flex items-center justify-center gap-1.5"
              >
                <Wand2 className="w-3 h-3 text-amber-400" />
                <span>{harm.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Global Modifiers (Hue, Sat, Lightness) */}
        <div className="bg-[#101422] border border-[#1f2638] rounded-2xl p-5 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-white flex items-center gap-2">
              <Sliders className="w-4 h-4 text-amber-400" />
              <span>Global Palette Shift</span>
            </h3>
            <button
              onClick={handleSmartContrastFix}
              className="px-2.5 py-1 rounded-lg bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[11px] font-bold transition cursor-pointer flex items-center gap-1"
            >
              <ShieldCheck className="w-3 h-3" />
              <span>Smart Auto-Contrast</span>
            </button>
          </div>

          <div className="space-y-3 text-xs">
            {/* Hue Shift */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Hue Rotation:</span>
                <span>{hueShift > 0 ? `+${hueShift}°` : `${hueShift}°`}</span>
              </div>
              <input
                type="range"
                min="-180"
                max="180"
                value={hueShift}
                onChange={(e) => setHueShift(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Saturation */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Saturation Factor:</span>
                <span>{satMultiplier.toFixed(1)}x</span>
              </div>
              <input
                type="range"
                min="0.2"
                max="2.0"
                step="0.1"
                value={satMultiplier}
                onChange={(e) => setSatMultiplier(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Lightness */}
            <div className="space-y-1">
              <div className="flex justify-between text-slate-300 font-mono">
                <span>Lightness Offset:</span>
                <span>{lightnessShift > 0 ? `+${lightnessShift}%` : `${lightnessShift}%`}</span>
              </div>
              <input
                type="range"
                min="-30"
                max="30"
                value={lightnessShift}
                onChange={(e) => setLightnessShift(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            <div className="pt-1">
              <button
                onClick={handleApplyGlobalShift}
                disabled={hueShift === 0 && satMultiplier === 1.0 && lightnessShift === 0}
                className="w-full py-2 rounded-xl bg-cyan-500/10 hover:bg-cyan-500/20 text-cyan-300 border border-cyan-500/30 font-bold transition cursor-pointer disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Apply Sliders to Unlocked Tokens
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Semantic Token Grid with Lock Toggles */}
      <div className="bg-[#101422] border border-[#1f2638] rounded-2xl p-6 space-y-6 shadow-xl">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-bold text-base text-white">
              Fine-Grained Semantic Token Pickers
            </h3>
            <p className="text-xs text-slate-400">
              Click the lock icon to protect individual colors from being overwritten during shifts.
            </p>
          </div>
          <span className="text-xs font-mono text-slate-400">
            {lockedKeys.size} tokens locked
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {tokensList.map((item) => {
            const hex = (currentPalette.tokens[item.key] as string) || '#ffffff';
            const isLocked = lockedKeys.has(item.key);

            return (
              <div
                key={item.key}
                className={`p-3.5 rounded-2xl border transition-all ${
                  isLocked
                    ? 'bg-[#151c2e] border-amber-500/40 ring-1 ring-amber-500/20'
                    : 'bg-[#0d101a] border-[#1b2234] hover:border-slate-600'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-semibold text-slate-200">{item.label}</span>
                    <span className="text-[10px] font-mono text-slate-500">({item.group})</span>
                  </div>

                  <button
                    onClick={() => toggleLock(item.key)}
                    className={`p-1.5 rounded-lg transition cursor-pointer ${
                      isLocked
                        ? 'bg-amber-500/20 text-amber-400 border border-amber-500/30'
                        : 'text-slate-500 hover:text-slate-300'
                    }`}
                    title={isLocked ? 'Unlock token' : 'Lock token'}
                  >
                    {isLocked ? <Lock className="w-3.5 h-3.5" /> : <Unlock className="w-3.5 h-3.5" />}
                  </button>
                </div>

                <div className="flex items-center gap-2.5">
                  <input
                    type="color"
                    value={hex}
                    onChange={(e) => handleTokenChange(item.key, e.target.value)}
                    className="w-10 h-10 rounded-xl cursor-pointer border border-[#2b354f] bg-transparent"
                  />
                  <input
                    type="text"
                    value={hex}
                    onChange={(e) => handleTokenChange(item.key, e.target.value)}
                    className="flex-1 px-3 py-2 rounded-xl bg-[#141928] border border-[#222a42] text-xs font-mono text-white uppercase outline-none focus:border-cyan-400"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
