import type { ColorPalette } from '../types';

/**
 * Exports palette tokens to standard CSS custom properties.
 */
export function exportToCSSVariables(palette: ColorPalette): string {
  const { tokens } = palette;
  const lines = [
    `/* ======================================================== */`,
    `/* Palette: ${palette.name} (${palette.family}) */`,
    `/* Theme: ${palette.theme.toUpperCase()} | Temperature: ${palette.temperature} */`,
    `/* ======================================================== */`,
    `:root {`,
    `  /* Brand Core */`,
    `  --color-primary: ${tokens.primary};`,
    `  --color-primary-foreground: ${tokens.primaryForeground};`,
    `  --color-primary-hover: ${tokens.primaryHover};`,
    `  --color-secondary: ${tokens.secondary};`,
    `  --color-secondary-foreground: ${tokens.secondaryForeground};`,
    `  --color-accent: ${tokens.accent};`,
    `  --color-accent-foreground: ${tokens.accentForeground};`,
    ``,
    `  /* Backgrounds & Surfaces */`,
    `  --color-background: ${tokens.background};`,
    `  --color-surface: ${tokens.surface};`,
    `  --color-surface-elevated: ${tokens.surfaceElevated};`,
    `  --color-surface-hover: ${tokens.surfaceHover};`,
    ``,
    `  /* Typography */`,
    `  --color-text-primary: ${tokens.textPrimary};`,
    `  --color-text-secondary: ${tokens.textSecondary};`,
    `  --color-text-muted: ${tokens.textMuted};`,
    ``,
    `  /* Borders & Dividers */`,
    `  --color-border: ${tokens.border};`,
    `  --color-border-muted: ${tokens.borderMuted};`,
    ``,
    `  /* Buttons */`,
    `  --color-btn-primary: ${tokens.buttonPrimary};`,
    `  --color-btn-primary-text: ${tokens.buttonPrimaryText};`,
    `  --color-btn-primary-hover: ${tokens.buttonPrimaryHover};`,
    ``,
    `  /* Status Indicators */`,
    `  --color-success: ${tokens.success};`,
    `  --color-success-foreground: ${tokens.successForeground};`,
    `  --color-warning: ${tokens.warning};`,
    `  --color-warning-foreground: ${tokens.warningForeground};`,
    `  --color-error: ${tokens.error};`,
    `  --color-error-foreground: ${tokens.errorForeground};`,
    `  --color-info: ${tokens.info};`,
    `  --color-info-foreground: ${tokens.infoForeground};`,
    ``,
    `  /* Brand Tonal Scale */`,
    ...Object.entries(tokens.tonalScale).map(
      ([step, hex]) => `  --color-brand-${step}: ${hex};`
    ),
    `}`,
  ];
  return lines.join('\n');
}

/**
 * Exports palette tokens to a Tailwind CSS theme config object.
 */
export function exportToTailwindConfig(palette: ColorPalette): string {
  const { tokens } = palette;
  const config = {
    theme: {
      extend: {
        colors: {
          brand: tokens.tonalScale,
          primary: {
            DEFAULT: tokens.primary,
            foreground: tokens.primaryForeground,
            hover: tokens.primaryHover,
          },
          secondary: {
            DEFAULT: tokens.secondary,
            foreground: tokens.secondaryForeground,
          },
          accent: {
            DEFAULT: tokens.accent,
            foreground: tokens.accentForeground,
          },
          bg: {
            DEFAULT: tokens.background,
            surface: tokens.surface,
            elevated: tokens.surfaceElevated,
            hover: tokens.surfaceHover,
          },
          text: {
            primary: tokens.textPrimary,
            secondary: tokens.textSecondary,
            muted: tokens.textMuted,
          },
          border: {
            DEFAULT: tokens.border,
            muted: tokens.borderMuted,
          },
          status: {
            success: tokens.success,
            warning: tokens.warning,
            error: tokens.error,
            info: tokens.info,
          },
        },
      },
    },
  };

  return `// tailwind.config.js\n// Palette: ${palette.name} (${palette.family})\nmodule.exports = ${JSON.stringify(config, null, 2)};`;
}

/**
 * Exports palette to W3C Design Tokens Community Group specification.
 */
export function exportToDesignTokensJSON(palette: ColorPalette): string {
  const { tokens } = palette;
  const tokenDoc = {
    $name: palette.name,
    $family: palette.family,
    $theme: palette.theme,
    $description: palette.description,
    color: {
      primary: { $value: tokens.primary, $type: 'color' },
      'primary-foreground': { $value: tokens.primaryForeground, $type: 'color' },
      secondary: { $value: tokens.secondary, $type: 'color' },
      accent: { $value: tokens.accent, $type: 'color' },
      background: { $value: tokens.background, $type: 'color' },
      surface: { $value: tokens.surface, $type: 'color' },
      'surface-elevated': { $value: tokens.surfaceElevated, $type: 'color' },
      'text-primary': { $value: tokens.textPrimary, $type: 'color' },
      'text-secondary': { $value: tokens.textSecondary, $type: 'color' },
      'text-muted': { $value: tokens.textMuted, $type: 'color' },
      border: { $value: tokens.border, $type: 'color' },
      'button-primary': { $value: tokens.buttonPrimary, $type: 'color' },
      success: { $value: tokens.success, $type: 'color' },
      warning: { $value: tokens.warning, $type: 'color' },
      error: { $value: tokens.error, $type: 'color' },
      info: { $value: tokens.info, $type: 'color' },
      tonal: Object.fromEntries(
        Object.entries(tokens.tonalScale).map(([k, v]) => [k, { $value: v, $type: 'color' }])
      ),
    },
  };
  return JSON.stringify(tokenDoc, null, 2);
}

/**
 * Exports palette tokens to SCSS variables.
 */
export function exportToSCSS(palette: ColorPalette): string {
  const { tokens } = palette;
  return `// Palette: ${palette.name}
$color-primary: ${tokens.primary};
$color-primary-foreground: ${tokens.primaryForeground};
$color-secondary: ${tokens.secondary};
$color-accent: ${tokens.accent};
$color-background: ${tokens.background};
$color-surface: ${tokens.surface};
$color-surface-elevated: ${tokens.surfaceElevated};
$color-text-primary: ${tokens.textPrimary};
$color-text-secondary: ${tokens.textSecondary};
$color-text-muted: ${tokens.textMuted};
$color-border: ${tokens.border};
$color-btn-primary: ${tokens.buttonPrimary};
$color-btn-primary-text: ${tokens.buttonPrimaryText};
$color-success: ${tokens.success};
$color-warning: ${tokens.warning};
$color-error: ${tokens.error};
$color-info: ${tokens.info};
`;
}

/**
 * Exports a comma-separated list of hex values with names.
 */
export function exportToHexList(palette: ColorPalette): string {
  return palette.swatches
    .map((s) => `${s.hex} /* ${s.name} - ${s.role} */`)
    .join('\n');
}

/**
 * Generates a complete sample stylesheet demonstrating components styled with the palette tokens.
 */
export function exportToCSSDemoStylesheet(palette: ColorPalette): string {
  const cssVars = exportToCSSVariables(palette);
  return `${cssVars}

/* ======================================================== */
/* Example Component Implementation */
/* ======================================================== */
body {
  background-color: var(--color-background);
  color: var(--color-text-primary);
  font-family: system-ui, -apple-system, sans-serif;
  margin: 0;
  padding: 0;
}

.card {
  background-color: var(--color-surface);
  border: 1px solid var(--color-border);
  border-radius: 12px;
  padding: 24px;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.btn-primary {
  background-color: var(--color-btn-primary);
  color: var(--color-btn-primary-text);
  border: none;
  border-radius: 8px;
  padding: 10px 20px;
  font-weight: 600;
  cursor: pointer;
  transition: opacity 0.2s;
}

.btn-primary:hover {
  background-color: var(--color-btn-primary-hover);
}

.badge {
  background-color: var(--color-surface-elevated);
  color: var(--color-accent);
  border: 1px solid var(--color-border-muted);
  border-radius: 9999px;
  padding: 4px 12px;
  font-size: 12px;
  font-weight: 500;
}
`;
}
