import type { SemanticTokens, WCAGPairCheck } from '../types';
import {
  evaluateWCAG,
  getContrastRatio,
  hexToHsl,
  hslToHex,
} from './color-converter';

/**
 * Suggests an adjusted foreground color that achieves >= 4.5:1 (AA) or >= 7.0:1 (AAA)
 * with the given background.
 */
export function suggestAccessibleColor(
  currentFg: string,
  bg: string,
  targetRatio = 7.0
): string {
  const fgHsl = hexToHsl(currentFg);
  const bgHsl = hexToHsl(bg);

  // If bg is dark, make fg lighter; if bg is light, make fg darker
  const shouldLighten = bgHsl.l < 50;

  let bestHex = currentFg;
  let bestRatio = getContrastRatio(currentFg, bg);

  if (bestRatio >= targetRatio) {
    return currentFg;
  }

  // Step through lightness in 2% increments
  for (let l = shouldLighten ? fgHsl.l : fgHsl.l; shouldLighten ? l <= 100 : l >= 0; shouldLighten ? (l += 2) : (l -= 2)) {
    const candidate = hslToHex(fgHsl.h, fgHsl.s, l);
    const r = getContrastRatio(candidate, bg);
    if (r >= targetRatio) {
      return candidate;
    }
    if (r > bestRatio) {
      bestRatio = r;
      bestHex = candidate;
    }
  }

  // Fallback to pure white or pure black
  return shouldLighten ? '#FFFFFF' : '#000000';
}

/**
 * Evaluates all common UI component pairings for a palette's semantic tokens.
 */
export function checkPaletteContrast(tokens: SemanticTokens): WCAGPairCheck[] {
  const pairings = [
    {
      id: 'body-on-bg',
      name: 'Body Text on Page Background',
      description: 'Main body copy, headings, and long-form prose on background',
      fgName: 'textPrimary',
      bgName: 'background',
      fg: tokens.textPrimary,
      bg: tokens.background,
    },
    {
      id: 'secondary-on-bg',
      name: 'Secondary Text on Background',
      description: 'Subheadings, card subtitles, and explanatory paragraphs',
      fgName: 'textSecondary',
      bgName: 'background',
      fg: tokens.textSecondary,
      bg: tokens.background,
    },
    {
      id: 'primary-on-surface',
      name: 'Text on Card Surface',
      description: 'Content, card headers, and list items on elevated surfaces',
      fgName: 'textPrimary',
      bgName: 'surface',
      fg: tokens.textPrimary,
      bg: tokens.surface,
    },
    {
      id: 'muted-on-surface',
      name: 'Muted Text on Surface',
      description: 'Timestamps, footnote metadata, and inactive labels',
      fgName: 'textMuted',
      bgName: 'surface',
      fg: tokens.textMuted,
      bg: tokens.surface,
    },
    {
      id: 'btn-text-on-btn',
      name: 'Primary Button Label',
      description: 'Call-to-action text label on primary button background',
      fgName: 'buttonPrimaryText',
      bgName: 'buttonPrimary',
      fg: tokens.buttonPrimaryText,
      bg: tokens.buttonPrimary,
    },
    {
      id: 'link-on-bg',
      name: 'Primary Brand Link on Background',
      description: 'Standalone text hyperlinks styled with the primary brand color',
      fgName: 'primary',
      bgName: 'background',
      fg: tokens.primary,
      bg: tokens.background,
    },
    {
      id: 'accent-on-elevated',
      name: 'Accent Pill on Elevated Surface',
      description: 'Category tags, active badges, and highlight pills',
      fgName: 'accent',
      bgName: 'surfaceElevated',
      fg: tokens.accent,
      bg: tokens.surfaceElevated,
    },
    {
      id: 'border-on-bg',
      name: 'Border & Divider Visibility',
      description: 'Card outlines, input borders, and section dividers',
      fgName: 'border',
      bgName: 'background',
      fg: tokens.border,
      bg: tokens.background,
    },
    {
      id: 'success-badge',
      name: 'Success Status Badge',
      description: 'Success toast text on success green background',
      fgName: 'successForeground',
      bgName: 'success',
      fg: tokens.successForeground,
      bg: tokens.success,
    },
    {
      id: 'error-badge',
      name: 'Error Alert Badge',
      description: 'Critical alert text on error red background',
      fgName: 'errorForeground',
      bgName: 'error',
      fg: tokens.errorForeground,
      bg: tokens.error,
    },
  ];

  return pairings.map((pair) => {
    const evalResult = evaluateWCAG(pair.fg, pair.bg);
    let suggestedFix: string | undefined;

    if (!evalResult.aaNormal) {
      suggestedFix = suggestAccessibleColor(pair.fg, pair.bg, 7.0);
    }

    return {
      id: pair.id,
      name: pair.name,
      description: pair.description,
      foregroundName: pair.fgName,
      backgroundName: pair.bgName,
      foregroundHex: pair.fg,
      backgroundHex: pair.bg,
      ratio: evalResult.ratio,
      aaNormal: evalResult.aaNormal,
      aaaNormal: evalResult.aaaNormal,
      aaLarge: evalResult.aaLarge,
      aaaLarge: evalResult.aaaLarge,
      uiComponent: evalResult.uiComponent,
      suggestedFix,
    };
  });
}

/**
 * Calculates overall accessibility score for a palette (0 - 100).
 */
export function calculateOverallContrastScore(checks: WCAGPairCheck[]): number {
  if (checks.length === 0) return 0;
  let points = 0;
  checks.forEach((c) => {
    if (c.aaaNormal) points += 10;
    else if (c.aaNormal) points += 7;
    else if (c.aaLarge || c.uiComponent) points += 4;
    else points += 1;
  });
  return Math.round((points / (checks.length * 10)) * 100);
}

/**
 * Computes contrast rating badge for a palette
 */
export function computePaletteContrastRating(tokens: SemanticTokens): { overallLevel: 'AA' | 'AAA'; score: number } {
  const checks = checkPaletteContrast(tokens);
  const score = calculateOverallContrastScore(checks);
  const hasFailAA = checks.some((c) => !c.aaNormal);
  const allAAA = checks.every((c) => c.aaaNormal);
  return {
    overallLevel: allAAA ? 'AAA' : hasFailAA ? 'AA' : 'AA',
    score,
  };
}

// Aliases for convenience across components
export const checkPaletteWCAG = checkPaletteContrast;
export const calculateContrastRatio = getContrastRatio;

