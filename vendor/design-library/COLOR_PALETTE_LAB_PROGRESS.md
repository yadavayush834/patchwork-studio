# 🧪 Color Palette Laboratory — Production Report

A local-first design systems engineering tool built into the **Website Design Template Library** at `/home/ayush/.antigravity-2/design`. Accessible via the top application navigation (**"Color Lab"**) or via URL route `#/colors`.

---

## 🌟 Executive Summary

| Metric | Specification | Status |
|---|---|---|
| **Master Curated Palettes** | **105 unique color systems** across 15 design families | ✅ Complete & Verified |
| **Token Architecture** | Semantic Tokens (`primary`, `surface`, `border`, `text`, etc.) + 11-step Tonal Scale (`50`–`950`) | ✅ Standardized & Complete |
| **Live Preview Studio** | **11 working HTML/CSS UI patterns** tested dynamically | ✅ Live & Interactive |
| **Responsive Viewports** | Desktop (100%), Tablet (768px), Mobile (390px) | ✅ Verified |
| **WCAG 2.1 Accessibility** | Automated relative luminance calculator & 10 UI pair auditing | ✅ AA/AAA Matrix + 1-Click Fix |
| **Harmony Engine** | Mathematical generation for Complementary, Analogous, Triadic, Split-Comp, Monochromatic | ✅ Live in Editor |
| **Local-First Storage** | Zero API keys, persistent favorites & custom palettes via `localStorage` | ✅ 100% Local-First |
| **Code Exporters** | CSS Custom Properties, Tailwind Config, W3C Design Tokens JSON, SCSS, File Downloads | ✅ 5 Formats Supported |
| **Production Build** | `npm run build` (`tsc -b && vite build`) | ✅ 0 Errors (1.26s) |

---

## 🎨 Master Collection: 105 Curated Palettes across 15 Families

### 1. Minimalist & Monochromatic (Palettes 01–07)
- `minimalist-onyx-paper`: Onyx & Archival Paper (Neutral / Light)
- `minimalist-subtle-stone`: Warm Stone & Chalk White (Warm / Light)
- `minimalist-pure-void`: Absolute Void & Starlight (Neutral / Dark)
- `minimalist-cashmere-slate`: Cloud Cashmere & Slate (Warm / Light)
- `minimalist-alabaster-charcoal`: Alabaster & Charcoal (Cool / Light)
- `minimalist-monolith`: Monolith Graphite & Platinum (Cool / Dark)
- `minimalist-titanium-fog`: Titanium Fog & Deep Ash (Cool / Light)

### 2. Luxury & Premium (Palettes 08–14)
- `luxury-vendome-gold`: Maison Vendôme Gilded Bronze (Warm / Dark)
- `luxury-imperial-black-gold`: Imperial Obsidian & Sovereign Gold (Warm / Dark)
- `luxury-champagne-silk`: Champagne Silk & Ivory (Warm / Light)
- `luxury-midnight-caviar`: Midnight Caviar & Pearl (Cool / Dark)
- `luxury-cognac-leather`: Reserve Cognac & Aged Brass (Warm / Dark)
- `luxury-emerald-sovereign`: Sovereign Emerald & Pale Gold (Cool / Dark)
- `luxury-bordeaux-velvet`: Bordeaux Velvet & Antique Brass (Warm / Dark)

### 3. Scandinavian & Japanese Minimalism (Palettes 15–21)
- `scandi-nordisk-hygge`: Nordisk Hygge & Birch (Warm / Light)
- `scandi-copenhagen-clay`: Copenhagen Ochre & Pale Clay (Warm / Light)
- `japanese-wabi-sabi-sumi`: Wabi-Sabi Sumi & River Stone (Neutral / Light)
- `japanese-kyoto-bamboo`: Kyoto Bamboo & Cast Iron (Cool / Light)
- `japanese-washi-indigo`: Washi Paper & Natural Indigo (Cool / Light)
- `scandi-oslo-fjord`: Oslo Fjord Mist & Nordic Slate (Cool / Light)
- `japanese-enso-charcoal`: Ensō Charcoal & White Silk (Neutral / Dark)

### 4. Earthy, Organic & Botanical (Palettes 22–28)
- `earthy-botanica-terra`: Botanica Terra & Forest Moss (Warm / Light)
- `earthy-terracotta-clay`: Sunbaked Terracotta & Sand (Warm / Light)
- `earthy-olive-grove`: Mediterranean Olive Grove & Limestone (Warm / Light)
- `earthy-desert-sandstone`: Mojave Sandstone & Canyon Shade (Warm / Light)
- `earthy-highland-peat`: Scottish Highland Peat & Heather (Cool / Dark)
- `earthy-raw-ochre`: Raw Ochre & River Clay (Warm / Light)
- `earthy-ancient-amber`: Ancient Amber & Petrified Wood (Warm / Dark)

### 5. Cyberpunk & Futuristic (Palettes 29–35)
- `cyber-tokyo-hologram`: Neo-Tokyo Cyan & Hologram Pink (Cool / Dark)
- `cyber-matrix-grid`: Neural Matrix & Phosphor Green (Cool / Dark)
- `cyber-acid-overdrive`: Acid Citron & Deep Carbon (Warm / Dark)
- `cyber-void-runner`: Void Runner Purple & Laser Amber (Cool / Dark)
- `cyber-quantum-synth`: Quantum Synthwave & Deep Void (Cool / Dark)
- `cyber-glitch-circuit`: Glitch Red & Superconducting Blue (Cool / Dark)
- `cyber-laser-hex`: High-Voltage Hex Gold & Void (Warm / Dark)

### 6. Bauhaus & Geometric (Palettes 36–40)
- `bauhaus-dessau-master`: Bauhaus Dessau Tri-Color (Warm / Light)
- `bauhaus-primary-construct`: Primary Constructivism Red & Blue (Warm / Light)
- `bauhaus-weimar-destijl`: Weimar De Stijl Pure Primaries (Warm / Light)
- `bauhaus-kandinsky-balance`: Kandinsky Composition (Warm / Light)
- `bauhaus-suprematist-plane`: Suprematist Geometry & Ochre (Warm / Light)

### 7. Brutalist & Neo-Brutalist (Palettes 41–46)
- `brutalist-raw-hazard`: Raw Concrete & Hazard Orange (Warm / Dark)
- `neo-brutalist-acid-pop`: Acid Lime & Pop Magenta (Warm / Light)
- `neo-brutalist-citron-punch`: Electric Citron & Void Black (Warm / Light)
- `neo-brutalist-cyan-volt`: High-Voltage Cyan & Cyber Yellow (Cool / Light)
- `brutalist-blueprint-grid`: Engineering Blueprint & Chalk (Cool / Dark)
- `brutalist-monochrome-stark`: Stark Newsprint & Black Sharpie (Neutral / Light)

### 8. Editorial & Swiss-Inspired (Palettes 47–52)
- `editorial-folio-ink`: Folio Masthead Ink & Vellum (Warm / Light)
- `swiss-neue-helvetica`: Neue Helvetica Klein Blue & White (Cool / Light)
- `swiss-zurich-crimson`: Zurich Crimson & Ash Grey (Warm / Light)
- `editorial-literary-espresso`: Literary Espresso & Newsprint (Warm / Light)
- `editorial-broadside-charcoal`: Broadside Charcoal & Manila (Warm / Light)
- `swiss-basel-monotype`: Basel Monotype Laboratory (Cool / Light)

### 9. Pastel & Soft Modern (Palettes 53–58)
- `pastel-gelato-whisper`: Gelato Pistachio & Strawberry Milk (Warm / Light)
- `pastel-lavender-mist`: Lavender Mist & Soft Thistle (Cool / Light)
- `pastel-peach-sorbet`: Peach Sorbet & Warm Butter (Warm / Light)
- `pastel-seafoam-cloud`: Seafoam Cloud & Pale Sage (Cool / Light)
- `pastel-buttercup-breeze`: Buttercup Breeze & Cream (Warm / Light)
- `pastel-powder-dusk`: Powder Dusk Rose & Slate (Cool / Light)

### 10. Retro, Vintage & Y2K (Palettes 59–64)
- `retro-70s-warm-groove`: 1970s Groove Ochre & Avocado (Warm / Light)
- `retro-80s-sunset-blvd`: 1980s Sunset Boulevard & Neon Palm (Warm / Dark)
- `retro-y2k-cyber-bubble`: Y2K Bubblegum & Translucent Cyan (Cool / Light)
- `retro-90s-grunge-flannel`: 1990s Grunge Flannel & Forest (Warm / Dark)
- `retro-memphis-pop`: Memphis Group Confetti & Cobalt (Warm / Light)
- `retro-60s-polaroid`: 1960s Polaroid & Faded Turquoise (Warm / Light)

### 11. Nature: Ocean, Forest, Desert (Palettes 65–70)
- `nature-pacific-abyssal`: Pacific Abyssal Deep Sea & Bioluminescence (Cool / Dark)
- `nature-alpine-evergreen`: Alpine Evergreen & Granite Peak (Cool / Light)
- `nature-mojave-dune`: Mojave Dune Sand & Joshua Tree (Warm / Light)
- `nature-mediterranean-aqua`: Mediterranean Aqua & Terracotta Tile (Cool / Light)
- `nature-nordic-tundra`: Nordic Tundra Lichen & Glacier Blue (Cool / Light)
- `nature-sedona-canyon`: Sedona Red Rock & Desert Twilight (Warm / Light)

### 12. Playful, Colorful & Experimental (Palettes 71–77)
- `playful-electric-candy`: Electric Candy & Neon Sherbet (Warm / Light)
- `playful-arcade-joy`: 8-Bit Arcade Joy & Pixel Cyan (Cool / Dark)
- `playful-pop-art-bubble`: Pop Art Lichtenstein Red & Lemon (Warm / Light)
- `playful-rainbow-prism`: Rainbow Refraction & Pure Light (Warm / Light)
- `playful-cosmic-sorbet`: Cosmic Sorbet & Star Dust (Cool / Dark)
- `playful-neo-grotesque-funk`: Neo-Grotesque Funk & Mustard (Warm / Light)
- `playful-carnival-vivid`: Carnival Vivid Vermilion & Turquoise (Warm / Light)

### 13. Technology, AI & Developer Tools (Palettes 78–84)
- `tech-synapse-ai`: Synapse Neural Cobalt & High-Tech Cyan (Cool / Dark)
- `tech-terminal-amber`: Amber CRT Phosphor & Deep Unix Console (Warm / Dark)
- `tech-rust-cargo`: Rust Crust & Cargo Amber (Warm / Dark)
- `tech-pythonic-emerald`: Pythonic Emerald & Clean Slate (Cool / Light)
- `tech-solana-aurora`: Solana Aurora Gradient & Obsidian (Cool / Dark)
- `tech-graphql-magenta`: GraphQL Magenta & Clean Workspace (Cool / Light)
- `tech-cloudflare-orange`: Edge Network Tangerine & Graphite (Warm / Dark)

### 14. Finance, Healthcare & Commerce (Palettes 85–91)
- `finance-institutional-navy`: Institutional Trust Navy & Emerald Gain (Cool / Light)
- `finance-digital-asset`: Digital Asset Cyan & Satoshi Black (Cool / Dark)
- `health-clinical-sage`: Clinical Sage & Clean Sanatorium (Cool / Light)
- `health-biotech-heliotrope`: Genomic Biotech Indigo & Mint (Cool / Dark)
- `commerce-luxury-curation`: Luxury Commerce Gold & Marble (Warm / Light)
- `commerce-sustainable-thrift`: Sustainable Thrift Forest & Recycled Cardboard (Warm / Light)
- `finance-private-wealth`: Private Wealth Burgundy & Platinum (Warm / Dark)

### 15. Dark Mode & High Contrast (Palettes 92–105)
- `dark-oled-obsidian`: OLED Obsidian Blue & Laser Cyan (Cool / Dark)
- `dark-midnight-emerald`: Midnight Emerald & Mint Phosphor (Cool / Dark)
- `dark-deep-space-purple`: Deep Space Nebula & Violet (Cool / Dark)
- `dark-tactical-red`: Tactical Aviation Red & Cockpit Black (Warm / Dark)
- `dark-graphite-slate`: Studio Graphite & Neutral Slate (Neutral / Dark)
- `dark-pure-contrast-yellow`: Ultra AAA Contrast Black & Laser Yellow (Warm / Dark)
- `dark-polar-white-contrast`: Polar High-Contrast Pure White & Black (Neutral / Dark)
- `dark-supernova-gold`: Supernova Gold & Deep Space (Warm / Dark)
- `dark-subzero-cyan`: Subzero Glacial Cyan & Arctic Frost (Cool / Dark)
- `dark-crimson-vampire`: Crimson Obsidian & Blood Orange (Warm / Dark)
- `dark-cyber-matrix-oled`: Matrix OLED Pitch Black & Toxic Green (Cool / Dark)
- `dark-ultraviolet-lumos`: Ultraviolet Lumos & Midnight Purple (Cool / Dark)
- `dark-solar-flare-aaa`: Solar Flare Orange & Void Abyss (Warm / Dark)
- `dark-ghost-monochrome`: Ghost Monochrome 100% Contrast (Neutral / Dark)

---

## 🖥️ Live Preview Studio: 11 Working UI Patterns

1. **Navigation Bar**: Brand monogram, active links, quick search input with `⌘K` keyboard shortcut, notifications bell with accent indicator, primary call-to-action button.
2. **Hero Section**: Glowing ambient brand gradient, animated status pill with WCAG rating, 64px display typography, primary and secondary action buttons, feature checklists with status icons.
3. **Feature Cards**: 3-column responsive grid with tinted icon badges, card tags, descriptive copy, and animated action links.
4. **Pricing Matrix**: Tiered Free / Pro / Enterprise cards with monthly/annual billing cycle toggle (-20% discount badge), feature checklists, and highlighted popular badges.
5. **Dashboard & Analytics**: 4 KPI stat cards with trend indicators, live SVG area sparkline chart with gradient fill and data point beacons, and token changelog table.
6. **Auth & Form Controls**: Card layout with email/password inputs, focus rings, single sign-on notification banner, custom checkbox, and submit button.
7. **Modal Dialog**: Centered modal overlay, warning callout banner, and primary/cancel actions.
8. **Editorial Article**: Serif headline, author byline with avatar, styled drop cap, and pull quote with brand left border.
9. **E-Commerce Product Card**: Grid with product thumbnail, bestseller badge, 5-star rating, pricing tag, and Add to Bag button.
10. **Footer Architecture**: 5-column navigation tree, newsletter input with subscribe button, copyright, and metadata.
11. **Full Landing Page**: Seamless end-to-end composite view containing all sections.

---

## ⚖️ WCAG 2.1 Accessibility & Matrix Audit

Relative luminance formula implemented:
$$L = 0.2126 \times R + 0.7152 \times G + 0.0722 \times B$$
Where each linearized channel $C$ is computed from 8-bit sRGB:
$$C = \begin{cases} \frac{c}{12.92} & c \le 0.03928 \\ \left(\frac{c + 0.055}{1.055}\right)^{2.4} & c > 0.03928 \end{cases}$$

Contrast ratio formula:
$$\text{Ratio} = \frac{L_1 + 0.05}{L_2 + 0.05} \quad (\text{where } L_1 > L_2)$$

The matrix audits 10 critical digital pairings:
1. Body Text on Page Background ($\ge 4.5:1$)
2. Secondary Text on Background ($\ge 4.5:1$)
3. Text on Card Surface ($\ge 4.5:1$)
4. Muted Text on Surface ($\ge 3.0:1$)
5. Primary Button Label on Button ($\ge 4.5:1$)
6. Primary Brand Link on Background ($\ge 4.5:1$)
7. Accent Pill on Elevated Surface ($\ge 3.0:1$)
8. Border & Divider Visibility on Background ($\ge 3.0:1$)
9. Success Status Badge ($\ge 4.5:1$)
10. Error Alert Badge ($\ge 4.5:1$)

Includes a 1-click **Auto-Fix** suggestion button that iterates lightness steps until compliance is reached.

---

## 🚀 Export Capabilities

- **CSS Custom Properties**: `:root` variables block with `--color-primary`, surface tokens, and `--color-brand-50` through `950`.
- **Tailwind Config**: Ready-to-copy `tailwind.config.js` with `colors.brand`, `colors.primary`, and semantic surface extensions.
- **W3C Design Tokens JSON**: DTCG standard format with `$value` and `$type`.
- **SCSS Variables**: Sass file with `$color-primary`, `$color-surface`, etc.
- **Ready-to-use CSS**: Full starter stylesheet with base element resets.
- **Direct File Downloads**: 1-click download of `.css`, `.json`, `.scss`, or `.js` file via Blob URLs.
