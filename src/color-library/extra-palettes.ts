import type { ColorPalette } from '../../vendor/design-library/src/color-lab/types';
import { generateTonalScale } from '../../vendor/design-library/src/color-lab/utils/harmony-generator';

// Named, hand-paired colors. Each row defines a complete background, brand and accent combination.
const combinations = [
  ['Apricot Morning', '#fff7ee', '#a54229', '#e9a66d'], ['Blue Hour', '#edf4fb', '#25477c', '#8fbad2'],
  ['Olive Press', '#f6f6e9', '#44572c', '#b7bd77'], ['Plum Sorbet', '#fbf1f5', '#703b62', '#d395b7'],
  ['Tidal Glass', '#eef8f5', '#185d59', '#8ccbbc'], ['Citrus Grove', '#fbf8e5', '#565d25', '#debe48'],
  ['Cobalt Studio', '#f0f3ff', '#2739a3', '#e0a54e'], ['Dusk Orchard', '#f8f1ec', '#773e4a', '#c99a74'],
  ['Juniper Field', '#eff6ef', '#295a42', '#a6ca96'], ['Rosewater Ink', '#fff2f2', '#823c4b', '#e5a19c'],
  ['Lagoon & Coral', '#effaf7', '#136367', '#ec9786'], ['Saffron Archive', '#fff9ed', '#765016', '#dfaf54'],
  ['Mulberry Silk', '#f8f1f9', '#623d70', '#c4a1d3'], ['Alpine Postcard', '#f1f7f9', '#356078', '#e8ad89'],
  ['Lilac Current', '#f7f3ff', '#5b4a99', '#aaa2e1'], ['Pistachio Paper', '#f7f9ed', '#4d623c', '#bbca88'],
  ['Pomegranate', '#fff4f2', '#912f47', '#e7a48b'], ['Dusty Pacific', '#eff6f9', '#345a6e', '#a5bfbe'],
  ['Cocoa Cloud', '#faf5f0', '#5a3d36', '#caac99'], ['Minted Ink', '#f1faf6', '#255f50', '#9bd4b0'],
  ['Ochre & Ocean', '#f8f6ed', '#315064', '#d7ac64'], ['Violet Bloom', '#f9f1fc', '#713d89', '#d4aedf'],
  ['Blush Terrarium', '#faf1ee', '#76544d', '#c3aa9a'], ['Lakehouse', '#f0f7f7', '#27616b', '#a9d0ca'],
  ['Marigold Letter', '#fff8e9', '#795222', '#edbf5c'], ['Twilight Clay', '#f8f0f0', '#6d4659', '#d49d93'],
  ['Salt & Denim', '#f2f6fa', '#345472', '#a8bfce'], ['Garden Gate', '#f4f8ef', '#395c38', '#a9c797'],
  ['Cherry Soda', '#fff3f5', '#963d58', '#e7a7b9'], ['Wisteria Sky', '#f5f3fb', '#5d5685', '#b7a9d4'],
  ['Firefly Night', '#121b1c', '#a9d8a9', '#e6c671'], ['After Rain', '#141c29', '#a8c3ee', '#84c9cb'],
  ['Velvet Fig', '#211820', '#dfb6d3', '#cd9c87'], ['Pine at Midnight', '#111e19', '#a7d7b2', '#d0bd80'],
  ['Astral Violet', '#1b192a', '#c6b9f4', '#e1abcb'], ['Night Market', '#211c18', '#ebc78a', '#e99b7b'],
  ['Deep Lagoon', '#102326', '#9edbd1', '#e2be83'], ['Blueberry Moon', '#171c30', '#b4c4f3', '#ecb4c3'],
  ['Copper Cinema', '#251a17', '#e8b79c', '#d8b16b'], ['Forest Lantern', '#1b2118', '#c7d59c', '#e4bd7d'],
  ['Ink & Persimmon', '#1c1b22', '#d0c7ef', '#ed9d78'], ['Cedar Smoke', '#221e1b', '#dfc5a4', '#a6b998'],
  ['Midnight Orchid', '#211b28', '#e0b9e4', '#9ec8cc'], ['Deep Sea Foam', '#112128', '#acd8e3', '#a3d6b8'],
  ['Cosmic Apricot', '#211c29', '#d6bfed', '#efb091'], ['Museum After Dark', '#211e19', '#e4d1af', '#c8ad70'],
  ['Moss & Moonstone', '#1b211e', '#bad7c1', '#c9b8a2'], ['Nightfall Rose', '#261a22', '#edb8c9', '#e2c28f'],
  ['Indigo Ember', '#191c2a', '#b7c6ee', '#eca485'], ['Quiet Aurora', '#172122', '#a7dbcf', '#cfbedc'],
] as const;

function foreground(hex: string) {
  const rgb = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255).map((v) => v <= .04045 ? v / 12.92 : ((v + .055) / 1.055) ** 2.4);
  const luminance = .2126 * rgb[0] + .7152 * rgb[1] + .0722 * rgb[2];
  return luminance > .179 ? '#161616' : '#FFFFFF';
}

export const extraPalettes: ColorPalette[] = combinations.map(([name, background, primary, accent], index) => {
  const dark = index >= 30;
  const text = dark ? '#F8F7F5' : '#202025';
  const muted = dark ? '#C7C7C7' : '#55545B';
  const surface = dark ? '#242729' : '#FFFFFF';
  const raised = dark ? '#303437' : '#EDEFEF';
  const border = dark ? '#4D5152' : '#DADBDD';
  const primaryForeground = foreground(primary);
  const accentForeground = foreground(accent);
  return {
    id: `patchwork-extra-${index + 1}`, name, family: 'Playful & Experimental',
    description: `A ${dark ? 'deep' : 'light'} combination of ${name.toLowerCase()} tones, composed for expressive websites.`,
    mood: [dark ? 'Moody' : 'Fresh', 'Expressive'], industry: ['Creative', 'Editorial'], style: 'Patchwork collection',
    theme: dark ? 'dark' : 'light', temperature: 'neutral', primaryHue: 'neutral', tags: ['new', 'patchwork', dark ? 'dark' : 'light'],
    tokens: {
      primary, primaryForeground, primaryHover: primary, secondary: accent, secondaryForeground: accentForeground,
      accent, accentForeground, background, surface, surfaceElevated: raised, surfaceHover: raised,
      textPrimary: text, textSecondary: muted, textMuted: muted, border, borderMuted: border,
      buttonPrimary: primary, buttonPrimaryText: primaryForeground, buttonPrimaryHover: primary,
      success: '#16835C', successForeground: '#FFFFFF', warning: '#A56300', warningForeground: '#FFFFFF',
      error: '#B82D42', errorForeground: '#FFFFFF', info: '#2559A7', infoForeground: '#FFFFFF', tonalScale: generateTonalScale(primary),
    },
    swatches: [{name: 'Background', hex: background, role: 'Background'}, {name: 'Surface', hex: surface, role: 'Surface'}, {name: 'Text', hex: text, role: 'Text'}, {name: 'Primary', hex: primary, role: 'Primary'}, {name: 'Accent', hex: accent, role: 'Accent'}],
  };
});
