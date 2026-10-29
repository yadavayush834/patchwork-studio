import type {
  ColorHarmonyType,
  SemanticTokens,
  TonalScale,
  TonalStep,
} from '../types';
import {
  hexToHsl,
  hslToHex,
  getReadableTextColor,
  adjustLightness,
  shiftHue,
} from './color-converter';

/**
 * Generates an 11-step tonal scale (50 - 950) from any base hex color.
 */
export function generateTonalScale(baseHex: string): TonalScale {
  const { h, s } = hexToHsl(baseHex);

  // Perceptually balanced lightness distribution
  const lightnessMap: Record<TonalStep, { l: number; sFactor: number }> = {
    '50': { l: 97, sFactor: 0.35 },
    '100': { l: 93, sFactor: 0.5 },
    '200': { l: 84, sFactor: 0.7 },
    '300': { l: 73, sFactor: 0.85 },
    '400': { l: 60, sFactor: 0.95 },
    '500': { l: 48, sFactor: 1.0 }, // Midpoint anchor
    '600': { l: 38, sFactor: 1.02 },
    '700': { l: 29, sFactor: 1.05 },
    '800': { l: 20, sFactor: 1.05 },
    '900': { l: 13, sFactor: 1.0 },
    '950': { l: 7, sFactor: 0.9 },
  };

  const steps = Object.keys(lightnessMap) as TonalStep[];
  const result = {} as TonalScale;

  steps.forEach((step) => {
    const { l, sFactor } = lightnessMap[step];
    const adjustedS = Math.min(100, Math.round(s * sFactor));
    result[step] = hslToHex(h, adjustedS, l);
  });

  return result;
}

/**
 * Generates harmonizing hex colors according to standard color theory.
 */
export function generateColorHarmonies(
  baseHex: string,
  harmony: ColorHarmonyType
): string[] {
  const { h, s, l } = hexToHsl(baseHex);

  switch (harmony) {
    case 'complementary':
      return [
        baseHex,
        hslToHex((h + 180) % 360, s, l),
      ];

    case 'analogous':
      return [
        hslToHex((h - 30 + 360) % 360, s, l),
        baseHex,
        hslToHex((h + 30) % 360, s, l),
      ];

    case 'triadic':
      return [
        baseHex,
        hslToHex((h + 120) % 360, s, l),
        hslToHex((h + 240) % 360, s, l),
      ];

    case 'split-complementary':
      return [
        baseHex,
        hslToHex((h + 150) % 360, s, l),
        hslToHex((h + 210) % 360, s, l),
      ];

    case 'tetradic':
      return [
        baseHex,
        hslToHex((h + 90) % 360, s, l),
        hslToHex((h + 180) % 360, s, l),
        hslToHex((h + 270) % 360, s, l),
      ];

    case 'monochromatic':
      return [
        hslToHex(h, Math.max(10, s - 30), Math.min(95, l + 30)),
        hslToHex(h, Math.max(15, s - 15), Math.min(85, l + 15)),
        baseHex,
        hslToHex(h, Math.min(100, s + 10), Math.max(15, l - 15)),
        hslToHex(h, Math.min(100, s + 20), Math.max(8, l - 30)),
      ];

    default:
      return [baseHex];
  }
}

/**
 * Generates a complete semantic token set from a primary color, secondary color,
 * and desired theme ('light' or 'dark').
 */
export function generateSemanticTokensFromPrimary(
  primaryHex: string,
  theme: 'light' | 'dark' = 'light',
  secondaryOverride?: string,
  accentOverride?: string
): SemanticTokens {
  const primaryHsl = hexToHsl(primaryHex);
  const secondary = secondaryOverride || shiftHue(primaryHex, 35);
  const accent = accentOverride || shiftHue(primaryHex, 180);
  const tonalScale = generateTonalScale(primaryHex);

  const isLight = theme === 'light';

  // Background and Surfaces
  const background = isLight ? '#FAFBFD' : '#0B0D14';
  const surface = isLight ? '#FFFFFF' : '#121624';
  const surfaceElevated = isLight ? '#F2F4F8' : '#1A2033';
  const surfaceHover = isLight ? '#EAEFF6' : '#222B42';

  // Typography
  const textPrimary = isLight ? '#0C0E14' : '#F6F8FC';
  const textSecondary = isLight ? '#4B5565' : '#9AA4B2';
  const textMuted = isLight ? '#697586' : '#697586';

  // Borders
  const border = isLight ? '#E3E8EF' : '#232B3E';
  const borderMuted = isLight ? '#EEF2F6' : '#181F2E';

  // Primary buttons
  const buttonPrimary = primaryHex;
  const buttonPrimaryText = getReadableTextColor(primaryHex);
  const buttonPrimaryHover = isLight
    ? adjustLightness(primaryHex, -8)
    : adjustLightness(primaryHex, 10);

  // Status colors (harmonized with theme)
  const success = isLight ? '#10B981' : '#34D399';
  const successForeground = '#FFFFFF';
  const warning = isLight ? '#F59E0B' : '#FBBF24';
  const warningForeground = '#000000';
  const error = isLight ? '#EF4444' : '#F87171';
  const errorForeground = '#FFFFFF';
  const info = isLight ? '#3B82F6' : '#60A5FA';
  const infoForeground = '#FFFFFF';

  return {
    primary: primaryHex,
    primaryForeground: getReadableTextColor(primaryHex),
    primaryHover: buttonPrimaryHover,
    secondary,
    secondaryForeground: getReadableTextColor(secondary),
    accent,
    accentForeground: getReadableTextColor(accent),
    background,
    surface,
    surfaceElevated,
    surfaceHover,
    textPrimary,
    textSecondary,
    textMuted,
    border,
    borderMuted,
    buttonPrimary,
    buttonPrimaryText,
    buttonPrimaryHover,
    success,
    successForeground,
    warning,
    warningForeground,
    error,
    errorForeground,
    info,
    infoForeground,
    tonalScale,
  };
}

/**
 * Convenience generator returning common harmony variations
 */
export function generateHarmonies(baseHex: string) {
  const comp = generateColorHarmonies(baseHex, 'complementary');
  const ana = generateColorHarmonies(baseHex, 'analogous');
  const tri = generateColorHarmonies(baseHex, 'triadic');
  const split = generateColorHarmonies(baseHex, 'split-complementary');
  const mono = generateColorHarmonies(baseHex, 'monochromatic');
  const tet = generateColorHarmonies(baseHex, 'tetradic');

  return {
    complementary: comp[1] || baseHex,
    analogous: [ana[0] || baseHex, ana[2] || baseHex] as [string, string],
    triadic: [tri[1] || baseHex, tri[2] || baseHex] as [string, string],
    splitComplementary: [split[1] || baseHex, split[2] || baseHex] as [string, string],
    monochromatic: [mono[0] || baseHex, mono[1] || baseHex] as [string, string],
    tetradic: [tet[1] || baseHex, tet[2] || baseHex, tet[3] || baseHex] as [string, string, string],
  };
}

