export type TonalStep =
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export type TonalScale = Record<TonalStep, string>;

export interface SemanticTokens {
  // Brand colors
  primary: string;
  primaryForeground: string;
  primaryHover: string;
  secondary: string;
  secondaryForeground: string;
  accent: string;
  accentForeground: string;

  // Background and Surfaces
  background: string;
  surface: string;
  surfaceElevated: string;
  surfaceHover: string;

  // Typography
  textPrimary: string;
  textSecondary: string;
  textMuted: string;

  // Borders and Dividers
  border: string;
  borderMuted: string;
  borderHover?: string;

  // Interactive buttons
  buttonPrimary: string;
  buttonPrimaryText: string;
  buttonPrimaryHover: string;

  // Optional semantic aliases for studio styling
  buttonPrimaryBg?: string;
  buttonSecondaryBg?: string;
  buttonSecondaryText?: string;
  buttonSecondaryBorder?: string;

  // Functional status indicators
  success: string;
  successForeground: string;
  warning: string;
  warningForeground: string;
  error: string;
  errorForeground: string;
  info: string;
  infoForeground: string;

  // Complete brand tonal scale
  tonalScale: TonalScale;
}

export type StringTokenKey = Exclude<keyof SemanticTokens, 'tonalScale'>;

export type PaletteFamily =
  | 'Minimalist & Monochromatic'
  | 'Luxury & Premium'
  | 'Scandinavian & Japanese'
  | 'Earthy, Organic & Botanical'
  | 'Cyberpunk & Futuristic'
  | 'Bauhaus & Geometric'
  | 'Brutalist & Neo-Brutalist'
  | 'Editorial & Swiss'
  | 'Pastel & Soft Modern'
  | 'Retro, Vintage & Y2K'
  | 'Nature: Ocean, Forest, Desert'
  | 'Playful & Experimental'
  | 'Technology, AI & Developer'
  | 'Finance, Health & Commerce'
  | 'Dark Mode & High Contrast';

export type PaletteTheme = 'light' | 'dark' | 'high-contrast';

export type PaletteTemperature = 'warm' | 'cool' | 'neutral';

export type PrimaryHueCategory =
  | 'blue'
  | 'indigo'
  | 'purple'
  | 'pink'
  | 'red'
  | 'orange'
  | 'amber'
  | 'yellow'
  | 'green'
  | 'teal'
  | 'cyan'
  | 'slate'
  | 'neutral'
  | 'stone';

export interface PaletteSwatch {
  name: string;
  hex: string;
  role: string;
}

export interface ContrastRating {
  overallLevel: 'AA' | 'AAA';
  score: number;
}

export interface ColorPalette {
  id: string;
  name: string;
  family: PaletteFamily;
  description: string;
  mood: string[];
  industry: string[];
  style: string;
  theme: PaletteTheme;
  temperature: PaletteTemperature;
  primaryHue: PrimaryHueCategory;
  tokens: SemanticTokens;
  swatches: PaletteSwatch[];
  tags: string[];

  // Optional extensions
  dominantHue?: string;
  bestFor?: string[];
  contrastRating?: ContrastRating;
  tonalScale?: TonalScale;
  isCustom?: boolean;
  isFavorite?: boolean;
  createdAt?: string;
  updatedAt?: string;
}

export interface WCAGResult {
  ratio: number;
  scoreText: string;
  aaNormal: boolean;
  aaaNormal: boolean;
  aaLarge: boolean;
  aaaLarge: boolean;
  uiComponent: boolean;
}

export interface WCAGPairCheck {
  id: string;
  name: string;
  description: string;
  foregroundName: string;
  backgroundName: string;
  foregroundHex: string;
  backgroundHex: string;
  ratio: number;
  aaNormal: boolean;
  aaaNormal: boolean;
  aaLarge: boolean;
  aaaLarge: boolean;
  uiComponent: boolean;
  suggestedFix?: string;
}

export type ColorHarmonyType =
  | 'complementary'
  | 'analogous'
  | 'triadic'
  | 'split-complementary'
  | 'monochromatic'
  | 'tetradic';

export interface HSLColor {
  h: number; // 0 - 360
  s: number; // 0 - 100
  l: number; // 0 - 100
}

export interface RGBColor {
  r: number; // 0 - 255
  g: number; // 0 - 255
  b: number; // 0 - 255
}
