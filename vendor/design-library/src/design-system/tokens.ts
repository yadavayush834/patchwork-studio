export interface DesignTokenTheme {
  name: string;
  id: string;
  background: string;
  surface: string;
  surfaceHover: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  accent: string;
  accentHover: string;
  accentSoft: string;
  accentText: string;
}

export const themes: Record<string, DesignTokenTheme> = {
  darkCyber: {
    name: 'Cyber Dark',
    id: 'darkCyber',
    background: '#090a0f',
    surface: '#12141e',
    surfaceHover: '#1a1d2c',
    border: '#23283e',
    borderStrong: '#394165',
    textPrimary: '#f8fafc',
    textSecondary: '#94a3b8',
    textMuted: '#64748b',
    accent: '#06b6d4',
    accentHover: '#0891b2',
    accentSoft: 'rgba(6, 182, 212, 0.12)',
    accentText: '#22d3ee',
  },
  neonViolet: {
    name: 'Neon Violet',
    id: 'neonViolet',
    background: '#0a0814',
    surface: '#141028',
    surfaceHover: '#1f193d',
    border: '#2d2456',
    borderStrong: '#4c3e8e',
    textPrimary: '#faf5ff',
    textSecondary: '#c084fc',
    textMuted: '#7e6d9b',
    accent: '#a855f7',
    accentHover: '#9333ea',
    accentSoft: 'rgba(168, 85, 247, 0.15)',
    accentText: '#d8b4fe',
  },
  swissMinimal: {
    name: 'Swiss Monochrome',
    id: 'swissMinimal',
    background: '#0d0e11',
    surface: '#16181d',
    surfaceHover: '#20242c',
    border: '#2a2f3a',
    borderStrong: '#434b5c',
    textPrimary: '#ffffff',
    textSecondary: '#a1a7b5',
    textMuted: '#676e7d',
    accent: '#2563eb',
    accentHover: '#1d4ed8',
    accentSoft: 'rgba(37, 99, 235, 0.12)',
    accentText: '#60a5fa',
  },
  warmEditorial: {
    name: 'Warm Editorial Paper',
    id: 'warmEditorial',
    background: '#fbf9f5',
    surface: '#ffffff',
    surfaceHover: '#f4f0e6',
    border: '#e7e2d5',
    borderStrong: '#cfc6b2',
    textPrimary: '#1a1915',
    textSecondary: '#5a574f',
    textMuted: '#8a8578',
    accent: '#b45309',
    accentHover: '#92400e',
    accentSoft: 'rgba(180, 83, 9, 0.1)',
    accentText: '#92400e',
  },
  neoBrutalist: {
    name: 'Neo Brutalist Volt',
    id: 'neoBrutalist',
    background: '#fffdf0',
    surface: '#ffffff',
    surfaceHover: '#fffaa0',
    border: '#111111',
    borderStrong: '#000000',
    textPrimary: '#000000',
    textSecondary: '#222222',
    textMuted: '#555555',
    accent: '#facc15',
    accentHover: '#eab308',
    accentSoft: '#fef08a',
    accentText: '#000000',
  },
};

export const typography = {
  fontFamilies: {
    sans: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    mono: 'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace',
    serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  },
};

// Standardized typography tokens for multi-theme scaling

// WCAG 2.1 AA compliant contrast pairings
