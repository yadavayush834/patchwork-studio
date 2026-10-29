import type { ColorPalette, PaletteFamily, PaletteTheme, PaletteTemperature } from '../types';
import { palettesBatch1 } from './palettes-batch1';
import { palettesBatch2 } from './palettes-batch2';
import { palettesBatch3 } from './palettes-batch3';
import { computePaletteContrastRating } from '../utils/contrast-checker';

/**
 * Complete Master Collection of 105 curated color palettes.
 * Curated across 15 design families, light/dark themes, warm/cool/neutral temperatures.
 */
export const masterColorPalettes: ColorPalette[] = [
  ...palettesBatch1,
  ...palettesBatch2,
  ...palettesBatch3,
];

/**
 * Retrieve all palettes from the master collection
 */
export function getAllPalettes(): ColorPalette[] {
  return masterColorPalettes;
}

/**
 * Find a palette by unique identifier
 */
export function getPaletteById(id: string): ColorPalette | undefined {
  return masterColorPalettes.find((p) => p.id === id);
}

/**
 * Filter palettes by design family
 */
export function getPalettesByFamily(family: PaletteFamily): ColorPalette[] {
  return masterColorPalettes.filter((p) => p.family === family);
}

/**
 * Filter palettes by light/dark theme
 */
export function getPalettesByTheme(theme: PaletteTheme): ColorPalette[] {
  return masterColorPalettes.filter((p) => p.theme === theme);
}

/**
 * Filter palettes by temperature
 */
export function getPalettesByTemperature(temperature: PaletteTemperature): ColorPalette[] {
  return masterColorPalettes.filter((p) => p.temperature === temperature);
}

export interface PaletteFilterOptions {
  searchQuery?: string;
  family?: PaletteFamily | 'all';
  theme?: PaletteTheme | 'all';
  temperature?: PaletteTemperature | 'all';
  wcagLevel?: 'AA' | 'AAA' | 'all';
  dominantHue?: string | 'all';
  favoritesOnly?: boolean;
  favoriteIds?: string[];
}

/**
 * Helper to obtain the contrast rating of a palette
 */
export function getPaletteRating(palette: ColorPalette): { overallLevel: 'AA' | 'AAA'; score: number } {
  if (palette.contrastRating) return palette.contrastRating;
  return computePaletteContrastRating(palette.tokens);
}

/**
 * Filter and search palettes according to multi-faceted criteria
 */
export function searchAndFilterPalettes(
  palettes: ColorPalette[],
  options: PaletteFilterOptions
): ColorPalette[] {
  return palettes.filter((palette) => {
    // Favorites filter
    if (options.favoritesOnly && options.favoriteIds) {
      if (!options.favoriteIds.includes(palette.id)) return false;
    }

    // Family filter
    if (options.family && options.family !== 'all') {
      if (palette.family !== options.family) return false;
    }

    // Theme filter
    if (options.theme && options.theme !== 'all') {
      if (palette.theme !== options.theme) return false;
    }

    // Temperature filter
    if (options.temperature && options.temperature !== 'all') {
      if (palette.temperature !== options.temperature) return false;
    }

    // Dominant Hue filter
    if (options.dominantHue && options.dominantHue !== 'all') {
      const hue = (palette.dominantHue || palette.primaryHue || '').toLowerCase();
      if (hue !== options.dominantHue.toLowerCase()) return false;
    }

    // WCAG Minimum Level
    if (options.wcagLevel && options.wcagLevel !== 'all') {
      const rating = getPaletteRating(palette);
      if (options.wcagLevel === 'AAA' && rating.overallLevel !== 'AAA') {
        return false;
      }
      if (
        options.wcagLevel === 'AA' &&
        rating.overallLevel !== 'AA' &&
        rating.overallLevel !== 'AAA'
      ) {
        return false;
      }
    }

    // Search query
    if (options.searchQuery && options.searchQuery.trim() !== '') {
      const q = options.searchQuery.toLowerCase().trim();
      const inName = palette.name.toLowerCase().includes(q);
      const inDesc = palette.description.toLowerCase().includes(q);
      const inFamily = palette.family.toLowerCase().includes(q);
      const inTags = palette.tags.some((tag) => tag.toLowerCase().includes(q));
      const inUseCases = (palette.bestFor || palette.industry || []).some((useCase) =>
        useCase.toLowerCase().includes(q)
      );
      const inHex = Object.values(palette.tokens).some(
        (val) => typeof val === 'string' && val.toLowerCase().includes(q)
      );

      if (!inName && !inDesc && !inFamily && !inTags && !inUseCases && !inHex) {
        return false;
      }
    }

    return true;
  });
}
